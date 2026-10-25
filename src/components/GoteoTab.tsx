import React, { useState, useEffect } from 'react';
import { Droplets, Clock, Play, Pause, Activity, Zap, CheckCircle2, Calculator } from 'lucide-react';

export const GoteoTab: React.FC = () => {
  const [volume, setVolume] = useState<string>('1000');
  const [timeValue, setTimeValue] = useState<string>('8');
  const [timeUnit, setTimeUnit] = useState<'hours' | 'minutes'>('hours');
  const [dropFactor, setDropFactor] = useState<number>(20);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [dropCounter, setDropCounter] = useState<number>(0);

  const volNum = Math.max(0, parseFloat(volume) || 0);
  const rawTimeNum = Math.max(0, parseFloat(timeValue) || 0);

  // Convert time to total minutes and total hours
  const totalMinutes = timeUnit === 'minutes' ? rawTimeNum : rawTimeNum * 60;
  const totalHours = timeUnit === 'hours' ? rawTimeNum : (rawTimeNum > 0 ? rawTimeNum / 60 : 0);

  // Gotas/min = (Volumen * Factor de Goteo) / Tiempo en Minutos
  const dropsPerMin = totalMinutes > 0 ? (volNum * dropFactor) / totalMinutes : 0;
  
  // Bomba de Infusión: mL/h = (Volumen / Minutos) * 60 = Volumen / Horas
  const mlPerHour = totalHours > 0 ? volNum / totalHours : 0;
  
  // Microgotas/min: 1 mL = 60 microgotas -> (Volumen * 60) / (Horas * 60) = Volumen / Horas = mL/h
  const microdropsPerMin = mlPerHour;

  // Interval in milliseconds per drop
  const intervalMs = dropsPerMin > 0 ? Math.max(100, Math.round(60000 / dropsPerMin)) : 3000;

  // Handle switching between hours and minutes
  const handleUnitChange = (newUnit: 'hours' | 'minutes') => {
    if (newUnit === timeUnit) return;
    if (rawTimeNum > 0) {
      if (newUnit === 'minutes') {
        // From hours to minutes (e.g. 8h -> 480 min, 0.5h -> 30 min)
        const converted = Math.round(rawTimeNum * 60 * 10) / 10;
        setTimeValue(converted.toString());
      } else {
        // From minutes to hours (e.g. 30 min -> 0.5h, 45 min -> 0.75h)
        const converted = Math.round((rawTimeNum / 60) * 100) / 100;
        setTimeValue(converted.toString());
      }
    }
    setTimeUnit(newUnit);
  };

  const loadPreset = (v: number, t: number, unit: 'hours' | 'minutes', factor: number) => {
    setVolume(v.toString());
    setTimeValue(t.toString());
    setTimeUnit(unit);
    setDropFactor(factor);
  };

  // Drop animation simulation tick
  useEffect(() => {
    if (!isSimulating || dropsPerMin <= 0) return;
    const interval = setInterval(() => {
      setDropCounter((c) => (c + 1) % 10000);
    }, Math.min(Math.max(intervalMs, 150), 6000));
    return () => clearInterval(interval);
  }, [isSimulating, dropsPerMin, intervalMs]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-3 items-start md:items-center justify-between shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Droplets className="w-5 h-5 text-[#22b8af]" />
            Calculadora de Goteo & Infusión Endovenosa
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Fórmulas para infusión por gravedad (macrogotero, microgotero) y programación para Bomba de Infusión Continua (BIC). Admite tiempo en <strong>horas</strong> o <strong>minutos</strong>.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => loadPreset(100, 30, 'minutes', 20)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-amber-300 rounded-lg border border-[#175270] transition-colors cursor-pointer"
            title="Antibiótico 100 mL en 30 minutos"
          >
            Antibiótico 100mL / 30min
          </button>
          <button
            onClick={() => loadPreset(100, 45, 'minutes', 60)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-purple-300 rounded-lg border border-[#175270] transition-colors cursor-pointer"
            title="Volutrol 100 mL en 45 minutos (Microgotero)"
          >
            Volutrol 100mL / 45min
          </button>
          <button
            onClick={() => loadPreset(250, 15, 'minutes', 20)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-rose-300 rounded-lg border border-[#175270] transition-colors cursor-pointer"
            title="Bolo rápido 250 mL en 15 minutos"
          >
            Bolo 250mL / 15min
          </button>
          <button
            onClick={() => loadPreset(1000, 8, 'hours', 20)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-[#42edd8] rounded-lg border border-[#175270] transition-colors cursor-pointer"
          >
            1000mL / 8h
          </button>
          <button
            onClick={() => loadPreset(1000, 12, 'hours', 20)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-cyan-300 rounded-lg border border-[#175270] transition-colors cursor-pointer"
          >
            1000mL / 12h
          </button>
          <button
            onClick={() => loadPreset(500, 24, 'hours', 20)}
            className="px-2.5 py-1 text-xs bg-[#0c2a3d] hover:bg-[#123850] text-teal-300 rounded-lg border border-[#175270] transition-colors cursor-pointer"
          >
            500mL / 24h
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          {/* Total Volume */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Volumen Total a Infundir (mL)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                step="50"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="Ej: 1000 ó 100"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 pr-12 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-mono">mL</span>
            </div>
          </div>

          {/* Time with Unit Toggle (Hours vs Minutes) */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Tiempo de Infusión
              </label>

              {/* Unit Toggle Buttons */}
              <div className="inline-flex p-0.5 bg-slate-950 rounded-lg border border-slate-800">
                <button
                  type="button"
                  onClick={() => handleUnitChange('hours')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    timeUnit === 'hours'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Horas (h)
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitChange('minutes')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    timeUnit === 'minutes'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Minutos (min)
                </button>
              </div>
            </div>

            <div className="relative">
              <input
                type="number"
                min={timeUnit === 'minutes' ? '1' : '0.1'}
                step={timeUnit === 'minutes' ? '5' : '0.5'}
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                placeholder={timeUnit === 'minutes' ? 'Ej: 30, 45, 60' : 'Ej: 8, 12, 1'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 pr-14 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
              />
              <span className="absolute right-3 top-2.5 text-xs text-cyan-400 font-mono font-bold">
                {timeUnit === 'minutes' ? 'min' : 'horas'}
              </span>
            </div>

            {/* Time equivalence helper */}
            <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
              {timeUnit === 'minutes' ? (
                <span>
                  Equivalente:{' '}
                  <strong className="text-teal-300">
                    {totalHours.toFixed(2)} h ({totalMinutes} min)
                  </strong>
                </span>
              ) : (
                <span>
                  Equivalente:{' '}
                  <strong className="text-teal-300">
                    {totalMinutes} minutos ({totalHours} h)
                  </strong>
                </span>
              )}
              {/* Quick minute pill buttons if minutes is selected */}
              {timeUnit === 'minutes' && (
                <div className="flex gap-1">
                  {[15, 30, 45, 60].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTimeValue(m.toString())}
                      className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] cursor-pointer"
                    >
                      {m}m
                    </button>
                  ))}
                </div>
              )}
              {timeUnit === 'hours' && (
                <div className="flex gap-1">
                  {[1, 4, 8, 12, 24].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setTimeValue(h.toString())}
                      className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] cursor-pointer"
                    >
                      {h}h
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Drop Factor Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Equipo de Venoclisis / Factor de Goteo
            </label>
            <select
              value={dropFactor}
              onChange={(e) => setDropFactor(parseInt(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              <option value={20}>Macrogotero Estándar Común (20 gotas = 1 mL)</option>
              <option value={60}>Microgotero / Volutrol Pediátrico (60 microgotas = 1 mL)</option>
              <option value={15}>Normogotero Soluciones (15 gotas = 1 mL)</option>
              <option value={10}>Equipo de Transfusión / Macrogotero 10 (10 gotas = 1 mL)</option>
            </select>
          </div>

          {/* Formulas and Practical Rules */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2 text-xs">
            <span className="text-teal-400 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> Fórmulas Clínicas según Unidad:
            </span>
            <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed font-mono">
              <div className="p-1.5 rounded bg-[#0a1e2b] border border-cyan-900/40">
                <span className="text-amber-300 font-semibold block">En Minutos:</span>
                <p>• Gotas/min = (Volumen × Factor) / Minutos</p>
                <p>• Bomba (mL/h) = (Volumen / Minutos) × 60</p>
              </div>
              <div className="p-1.5 rounded bg-[#0a1e2b] border border-cyan-900/40">
                <span className="text-teal-300 font-semibold block">En Horas:</span>
                <p>• Gotas/min = (Volumen × Factor) / (Horas × 60)</p>
                <p>• Macrogotero (20): Gotas/min = Volumen / (Horas × 3)</p>
                <p>• Bomba BIC = Microgotas/min = Volumen / Horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Simulator Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-900/85 border border-sky-950 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
            {/* Primary Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-1 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                  {dropFactor === 60 ? 'Microgotas' : 'Macrogotas'}
                </div>
                <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                  Velocidad de Goteo
                </span>
                <span className="text-4xl sm:text-5xl font-black text-cyan-400 block tracking-tight">
                  {Math.round(dropsPerMin)}
                </span>
                <span className="text-xs text-slate-300 font-medium block">gotas / minuto</span>
                <span className="text-[11px] text-cyan-300/80 block pt-1 font-mono">
                  Exacto: {dropsPerMin.toFixed(2)} gts/min
                </span>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-1 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
                  Programación BIC
                </div>
                <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                  Bomba de Infusión
                </span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 block tracking-tight">
                  {mlPerHour.toFixed(1)}
                </span>
                <span className="text-xs text-slate-300 font-medium block">mL / hora</span>
                <span className="text-[11px] text-emerald-300/80 block pt-1 font-mono">
                  {Math.round(microdropsPerMin)} microgotas/min
                </span>
              </div>
            </div>

            {/* Calculation Breakdown Box */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-teal-400 font-semibold text-xs">
                <Calculator className="w-3.5 h-3.5" />
                Desarrollo del Cálculo ({timeUnit === 'minutes' ? 'Modo Minutos' : 'Modo Horas'}):
              </div>
              <div className="font-mono text-[11px] text-slate-300 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800/80 space-y-1">
                {timeUnit === 'minutes' ? (
                  <>
                    <p>
                      • Gotas/min = ({volNum} mL × {dropFactor} factor) ÷ {totalMinutes} min ={' '}
                      <strong className="text-cyan-400">{dropsPerMin.toFixed(2)} gts/min</strong>{' '}
                      (redondeado: <span className="text-cyan-300 font-bold">{Math.round(dropsPerMin)} gts/min</span>)
                    </p>
                    <p>
                      • Bomba BIC = ({volNum} mL ÷ {totalMinutes} min) × 60 ={' '}
                      <strong className="text-emerald-400">{mlPerHour.toFixed(1)} mL/h</strong>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      • Gotas/min = ({volNum} mL × {dropFactor} factor) ÷ ({rawTimeNum} h × 60) ={' '}
                      <strong className="text-cyan-400">{dropsPerMin.toFixed(2)} gts/min</strong>{' '}
                      (redondeado: <span className="text-cyan-300 font-bold">{Math.round(dropsPerMin)} gts/min</span>)
                    </p>
                    <p>
                      • Bomba BIC = {volNum} mL ÷ {rawTimeNum} h ={' '}
                      <strong className="text-emerald-400">{mlPerHour.toFixed(1)} mL/h</strong>
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Live Droplet Chamber Simulator */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  Simulador Visual de Cámara de Goteo
                </span>
                <button
                  type="button"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {isSimulating ? (
                    <>
                      <Pause className="w-3 h-3 text-amber-400" /> Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-emerald-400" /> Reanudar
                    </>
                  )}
                </button>
              </div>

              {/* Graphic Chamber */}
              <div className="w-20 h-32 bg-slate-900 border-2 border-slate-700 rounded-b-3xl relative flex flex-col items-center justify-between overflow-hidden shadow-inner p-1">
                {/* Needle top */}
                <div className="w-1.5 h-4 bg-slate-500 rounded-b" />

                {/* Animated Drop */}
                <div
                  key={dropCounter}
                  className={`w-3.5 h-4 bg-cyan-400 rounded-full transition-all duration-300 absolute ${
                    isSimulating && dropsPerMin > 0 ? 'animate-drop-fall' : 'opacity-0'
                  }`}
                  style={{
                    animationDuration: `${Math.min(intervalMs / 1000, 3)}s`,
                  }}
                />

                {/* Fluid level at bottom */}
                <div className="w-full h-8 bg-cyan-500/20 border-t border-cyan-400/40 rounded-b-2xl relative flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-ping" />
                </div>
              </div>

              <div className="text-center space-y-1">
                <span className="text-xs text-slate-300 font-mono">
                  Frecuencia calculada: 1 gota cada{' '}
                  <strong className="text-cyan-400">{(intervalMs / 1000).toFixed(1)} segundos</strong>
                </span>
                <p className="text-[11px] text-slate-400">
                  Observe la velocidad visual para calibrar manualmente la llave reguladora de la venoclisis.
                </p>
              </div>
            </div>

            {/* Clinical Rule reminder */}
            <div className="bg-sky-950/20 border border-sky-800/40 p-3.5 rounded-xl text-xs text-sky-200 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong>Recomendación Asistencial:</strong> En infusiones en bolo o antibióticos intermitentes de 15, 30 ó 45 minutos (ej. Vancomicina en 60 min, Ceftriaxona en 30 min), configure preferentemente la Bomba de Infusión o calibre con microgotero para mayor exactitud y prevención de flebitis. Rotule el frasco con hora de inicio y término.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

