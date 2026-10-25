import React, { useState, useEffect, useRef } from 'react';
import {
  Heart,
  Timer,
  Zap,
  Syringe,
  AlertOctagon,
  FileText,
  RotateCcw,
  Play,
  Pause,
  Printer,
  Copy,
  Check,
  CheckSquare,
  Square,
  ShieldAlert,
  ArrowRightLeft,
  Calculator,
  Droplet,
  Split
} from 'lucide-react';

interface RcpEvent {
  id: string;
  timestamp: string; // HH:MM:SS
  secondsElapsed: number;
  type: 'start' | 'cycle' | 'shock' | 'adrenalina' | 'amiodarona' | 'ritmo' | 'rce' | 'fin' | 'nota';
  description: string;
}

interface YDrugCompatibility {
  drugA: string;
  drugB: string;
  status: 'compatible' | 'incompatible' | 'variable';
  reason: string;
  recommendation: string;
}

const Y_COMPATIBILITY_DATA: YDrugCompatibility[] = [
  {
    drugA: 'Noradrenalina',
    drugB: 'Bicarbonato de Sodio 8.4%',
    status: 'incompatible',
    reason: 'Inactivación severa de catecolaminas por pH marcadamente alcalino del bicarbonato.',
    recommendation: 'PROHIBIDO en Y. Utilizar luz exclusiva o suspender noradrenalina y lavar con 20 mL de solución salina.'
  },
  {
    drugA: 'Noradrenalina',
    drugB: 'Fentanilo',
    status: 'compatible',
    reason: 'Compatible en Y en infusión continua sin alteración de estabilidad química a 24 horas.',
    recommendation: 'Puede co-infundirse en la misma luz venosa.'
  },
  {
    drugA: 'Noradrenalina',
    drugB: 'Midazolam',
    status: 'compatible',
    reason: 'Compatible físicamente en soluciones habituales (D5W o ClNa 0.9%).',
    recommendation: 'Seguro en infusión continua en Y.'
  },
  {
    drugA: 'Omeprazol',
    drugB: 'Noradrenalina',
    status: 'incompatible',
    reason: 'Precipitación física inmediata por incompatibilidad extrema de pH (Omeprazol pH > 9 vs Noradrenalina pH ácido).',
    recommendation: 'INCOMPATIBLE. Riesgo de microembolias cristalinas. Administrar en bolo por vía periférica independiente con lavado previo.'
  },
  {
    drugA: 'Omeprazol',
    drugB: 'Fentanilo',
    status: 'incompatible',
    reason: 'Precipitación y turbidez por incompatibilidad ácido-base.',
    recommendation: 'No administrar por la misma vía en Y.'
  },
  {
    drugA: 'Furosemida',
    drugB: 'Midazolam',
    status: 'incompatible',
    reason: 'Precipitación cristalina inmediata blanquecina. El midazolam precipita a pH superior a 4.',
    recommendation: 'INCOMPATIBLE en Y. Lavar abundantemente con ClNa 0.9% o usar luz independiente.'
  },
  {
    drugA: 'Furosemida',
    drugB: 'Dopamina',
    status: 'incompatible',
    reason: 'Inactivación química y precipitación.',
    recommendation: 'Vía separada indispensable.'
  },
  {
    drugA: 'Amiodarona',
    drugB: 'Bicarbonato de Sodio 8.4%',
    status: 'incompatible',
    reason: 'Precipitación insoluble inmediata.',
    recommendation: 'No co-infundir bajo ninguna circunstancia.'
  },
  {
    drugA: 'Propofol',
    drugB: 'Noradrenalina',
    status: 'compatible',
    reason: 'Compatible en Y a concentraciones clínicas estándar.',
    recommendation: 'Monitorear estabilidad de emulsión lipídica.'
  },
  {
    drugA: 'Propofol',
    drugB: 'Fentanilo',
    status: 'compatible',
    reason: 'Compatible físicamente en Y (asociación habitual en sedoanalgesia de UCI).',
    recommendation: 'Cambiar sistemas de infusión de propofol cada 12 horas por riesgo microbiológico.'
  },
  {
    drugA: 'Vancomicina',
    drugB: 'Heparina',
    status: 'incompatible',
    reason: 'Precipitación visual inmediata de sales insolubles complejas.',
    recommendation: 'Lavar la vía con 20 mL de solución salina antes y después de pasar vancomicina.'
  },
  {
    drugA: 'Cloruro de Potasio (Kalium)',
    drugB: 'Noradrenalina',
    status: 'compatible',
    reason: 'Compatible en solución transportadora habitual.',
    recommendation: 'Verificar permeabilidad venosa central por osmolaridad.'
  },
  {
    drugA: 'Insulina Regular',
    drugB: 'Cloruro de Potasio',
    status: 'compatible',
    reason: 'Compatible en Y (muy frecuente en manejo de cetoacidosis e hiperkalemia).',
    recommendation: 'Cebado de tubuladura previo a infusión por adsorción plástica.'
  }
];

export const EmergenciasTab: React.FC = () => {
  const [subModule, setSubModule] = useState<'rcp' | 'compatibilidad' | 'inotropos'>('rcp');

  // ==========================================
  // 1. Cronómetro de RCP Logic
  // ==========================================
  const [rcpRunning, setRcpRunning] = useState<boolean>(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [cycleSeconds, setCycleSeconds] = useState<number>(120); // 2 min cycle
  const [cycleCount, setCycleCount] = useState<number>(1);
  const [adrenalinaCooldown, setAdrenalinaCooldown] = useState<number>(0); // countdown 3-5 min
  const [adrenalinaCount, setAdrenalinaCount] = useState<number>(0);
  const [shocksCount, setShocksCount] = useState<number>(0);
  const [events, setEvents] = useState<RcpEvent[]>([]);
  const [customNote, setCustomNote] = useState<string>('');
  const [copiedRcp, setCopiedRcp] = useState<boolean>(false);

  // 4H y 4T Checklist
  const [fourH, setFourH] = useState({
    hipovolemia: false,
    hipoxia: false,
    hidrogeniones: false,
    potasio: false,
    hipotermia: false,
  });

  const [fourT, setFourT] = useState({
    tensionNeumo: false,
    taponamiento: false,
    toxicos: false,
    trombosis: false,
  });

  // Audio / Beep simulation ref
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (rcpRunning) {
      timerRef.current = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);

        setCycleSeconds((prev) => {
          if (prev <= 1) {
            // Cycle finished! 2 minutes warning
            logEvent('cycle', `Fin de Ciclo #${cycleCount}: Chequeo de Ritmo / Pulso y Cambio de Reanimador`);
            setCycleCount((c) => c + 1);
            return 120;
          }
          return prev - 1;
        });

        setAdrenalinaCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [rcpRunning, cycleCount]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getClockTimestamp = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  };

  const logEvent = (type: RcpEvent['type'], description: string) => {
    const newEvt: RcpEvent = {
      id: Math.random().toString(),
      timestamp: getClockTimestamp(),
      secondsElapsed: totalSeconds,
      type,
      description,
    };
    setEvents((prev) => [newEvt, ...prev]);
  };

  const handleStartRcp = () => {
    if (!rcpRunning) {
      setRcpRunning(true);
      logEvent('start', 'INICIO DE MANIOBRAS DE RCP AVANZADO');
    }
  };

  const handlePauseRcp = () => {
    setRcpRunning(false);
    logEvent('nota', 'Pausa en cronómetro de RCP');
  };

  const handleResetRcp = () => {
    setRcpRunning(false);
    setTotalSeconds(0);
    setCycleSeconds(120);
    setCycleCount(1);
    setAdrenalinaCooldown(0);
    setAdrenalinaCount(0);
    setShocksCount(0);
    setEvents([]);
  };

  const handleAdminAdrenalina = () => {
    const nextDoseNum = adrenalinaCount + 1;
    setAdrenalinaCount(nextDoseNum);
    setAdrenalinaCooldown(180); // 3 minutes cooldown (180s)
    logEvent('adrenalina', `Adrenalina 1 mg EV administrada (#${nextDoseNum}) + bolo 20mL ClNa 0.9% y elevación de miembro`);
  };

  const handleDefibrillation = (joules: number, ritmo: string) => {
    const nextShock = shocksCount + 1;
    setShocksCount(nextShock);
    logEvent('shock', `Desfibrilación #${nextShock} ejecutada: ${joules}J (Ritmo: ${ritmo}). Reinicio inmediato de compresiones.`);
  };

  const handleAdminAmiodarona = (mg: number) => {
    logEvent('amiodarona', `Amiodarona ${mg} mg EV administrada en bolo`);
  };

  const handleRCE = () => {
    logEvent('rce', '🌟 RETORNO DE CIRCULACIÓN ESPONTÁNEA (RCE) DETECTADO. Pasar a cuidados postparo (ABCDE, metas hemodinámicas).');
  };

  const handleAddCustomNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customNote.trim()) return;
    logEvent('nota', customNote.trim());
    setCustomNote('');
  };

  const exportRcpSummary = () => {
    let summary = `CRONOLOGÍA DE REANIMACIÓN CARDIOPULMONAR (RCP)\n`;
    summary += `Fecha: ${new Date().toLocaleDateString()}\n`;
    summary += `Tiempo Total de RCP: ${formatTime(totalSeconds)}\n`;
    summary += `Ciclos de 2 min: ${cycleCount}\n`;
    summary += `Dosis de Adrenalina 1mg: ${adrenalinaCount}\n`;
    summary += `Descargas / Desfibrilaciones: ${shocksCount}\n\n`;
    summary += `REGISTRO DE EVENTOS SECUENCIALES:\n`;
    events.slice().reverse().forEach((ev) => {
      summary += `[${ev.timestamp}] (+${formatTime(ev.secondsElapsed)}) ${ev.description}\n`;
    });
    navigator.clipboard.writeText(summary);
    setCopiedRcp(true);
    setTimeout(() => setCopiedRcp(false), 2000);
  };

  // ==========================================
  // 2. Compatibilidad en Y Logic
  // ==========================================
  const drugListY = [
    'Noradrenalina',
    'Bicarbonato de Sodio 8.4%',
    'Fentanilo',
    'Midazolam',
    'Omeprazol',
    'Furosemida',
    'Dopamina',
    'Amiodarona',
    'Propofol',
    'Vancomicina',
    'Cloruro de Potasio (Kalium)',
    'Insulina Regular'
  ];

  const [selectedDrug1, setSelectedDrug1] = useState<string>('Noradrenalina');
  const [selectedDrug2, setSelectedDrug2] = useState<string>('Bicarbonato de Sodio 8.4%');

  const compatibilityResult = React.useMemo(() => {
    if (selectedDrug1 === selectedDrug2) {
      return {
        status: 'compatible' as const,
        reason: 'Es el mismo principio activo.',
        recommendation: 'Compatible sin restricción física ni química.'
      };
    }

    const match = Y_COMPATIBILITY_DATA.find(
      (x) =>
        (x.drugA === selectedDrug1 && x.drugB === selectedDrug2) ||
        (x.drugA === selectedDrug2 && x.drugB === selectedDrug1)
    );

    if (match) return match;

    return {
      status: 'variable' as const,
      reason: 'No se registran reportes directos de precipitación ni compatibilidad absoluta en bases estándar.',
      recommendation: 'PRECAUCIÓN: Lavar la vía con solución salina entre infusiones o utilizar catéter venoso central con lúmenes independientes.'
    };
  }, [selectedDrug1, selectedDrug2]);

  // ==========================================
  // 3. Calculadora de Inotrópicos / Vasoactivos
  // ==========================================
  const vasoactiveDrugs = [
    {
      id: 'nora',
      name: 'Noradrenalina',
      ampMg: 4,
      ampMl: 4,
      defaultAmps: 2, // 8 mg
      defaultVol: 100, // 100 cc D5W
      unit: 'mcg/kg/min',
      doseRange: '0.05 a 2.0 mcg/kg/min',
      notes: 'Primera línea en shock séptico. Infundir siempre por Catéter Venoso Central.'
    },
    {
      id: 'dopa',
      name: 'Dopamina',
      ampMg: 200,
      ampMl: 5,
      defaultAmps: 1, // 200 mg
      defaultVol: 250, // 250 cc D5W
      unit: 'mcg/kg/min',
      doseRange: '2 a 20 mcg/kg/min',
      notes: 'Efectos dopaminérgicos (1-3), beta-1 (4-10) y alfa-1 (>10 mcg/kg/min).'
    },
    {
      id: 'dobuta',
      name: 'Dobutamina',
      ampMg: 250,
      ampMl: 5,
      defaultAmps: 1, // 250 mg
      defaultVol: 250, // 250 cc D5W
      unit: 'mcg/kg/min',
      doseRange: '2.5 a 20 mcg/kg/min',
      notes: 'Inotrópico positivo de elección en shock cardiogénico con bajo gasto cardíaco.'
    },
    {
      id: 'ntg',
      name: 'Nitroglicerina (NTG)',
      ampMg: 50,
      ampMl: 10,
      defaultAmps: 1, // 50 mg
      defaultVol: 250, // 250 cc D5W o ClNa
      unit: 'mcg/min',
      doseRange: '5 a 200 mcg/min',
      notes: 'Vasodilatador coronario y venoso. Requiere equipo de infusión de polietileno/fotoprotector.'
    },
    {
      id: 'adrena_inf',
      name: 'Adrenalina en Infusión',
      ampMg: 1,
      ampMl: 1,
      defaultAmps: 4, // 4 mg
      defaultVol: 100, // 100 cc D5W
      unit: 'mcg/kg/min',
      doseRange: '0.05 a 1.0 mcg/kg/min',
      notes: 'Shock anafiláctico refractario o shock cardiogénico severo.'
    }
  ];

  const [selectedVasoId, setSelectedVasoId] = useState<string>('nora');
  const [vasoPatientWeight, setVasoPatientWeight] = useState<string>('70');
  const [vasoAmpoules, setVasoAmpoules] = useState<string>('2');
  const [vasoSolventVol, setVasoSolventVol] = useState<string>('100');
  const [vasoInputMode, setVasoInputMode] = useState<'doseToRate' | 'rateToDose'>('doseToRate');
  const [vasoTargetDose, setVasoTargetDose] = useState<string>('0.1'); // mcg/kg/min
  const [vasoPumpRate, setVasoPumpRate] = useState<string>('5.25'); // mL/h

  const currentVaso = vasoactiveDrugs.find((x) => x.id === selectedVasoId) || vasoactiveDrugs[0];

  // Recalculate
  const parsedVasoWeight = parseFloat(vasoPatientWeight) || 70;
  const parsedAmps = parseFloat(vasoAmpoules) || 1;
  const parsedSolventVol = parseFloat(vasoSolventVol) || 100;
  const totalDrugMg = parsedAmps * currentVaso.ampMg;
  const totalDrugMcg = totalDrugMg * 1000;
  const concentrationMcgMl = parsedSolventVol > 0 ? totalDrugMcg / parsedSolventVol : 0;

  // Mode calculations
  let calculatedMlPerHour = 0;
  let calculatedMcgKgMin = 0;

  if (vasoInputMode === 'doseToRate') {
    const dose = parseFloat(vasoTargetDose) || 0;
    if (currentVaso.unit === 'mcg/min') {
      // Not weight dependent
      calculatedMlPerHour = concentrationMcgMl > 0 ? (dose * 60) / concentrationMcgMl : 0;
    } else {
      // mcg/kg/min
      const totalMcgPerMin = dose * parsedVasoWeight;
      calculatedMlPerHour = concentrationMcgMl > 0 ? (totalMcgPerMin * 60) / concentrationMcgMl : 0;
    }
  } else {
    const rate = parseFloat(vasoPumpRate) || 0;
    const mcgPerHour = rate * concentrationMcgMl;
    const mcgPerMin = mcgPerHour / 60;
    if (currentVaso.unit === 'mcg/min') {
      calculatedMcgKgMin = mcgPerMin;
    } else {
      calculatedMcgKgMin = parsedVasoWeight > 0 ? mcgPerMin / parsedVasoWeight : 0;
    }
  }

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-300 border border-rose-500/30">
              Soporte Vital & UCI
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Reanimación & Cuidados Críticos
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-rose-400" />
            Cuidados Críticos, Emergencias y Soporte Vital
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Cronómetro asistencial de RCP con registro de eventos, matriz de compatibilidad en Y y calculadora de vasoactivos.
          </p>
        </div>

        {/* Submodule Switcher */}
        <div className="flex bg-[#092233] p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSubModule('rcp')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              subModule === 'rcp' ? 'bg-rose-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            Cronómetro RCP
          </button>
          <button
            type="button"
            onClick={() => setSubModule('compatibilidad')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              subModule === 'compatibilidad' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            Compatibilidad en Y
          </button>
          <button
            type="button"
            onClick={() => setSubModule('inotropos')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              subModule === 'inotropos' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Inotrópicos / Vasoactivos
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. CRONÓMETRO DE RCP */}
      {/* ========================================================= */}
      {subModule === 'rcp' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Controls & Timers */}
          <div className="lg:col-span-7 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-5">
            {/* Timers Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Total Time */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                  Tiempo Total de RCP
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {formatTime(totalSeconds)}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">Minutos : Segundos</span>
              </div>

              {/* 2 Min Cycle Countdown */}
              <div
                className={`p-4 rounded-xl border text-center transition ${
                  cycleSeconds <= 15
                    ? 'bg-rose-950/80 border-rose-500 animate-pulse text-rose-300'
                    : 'bg-slate-950 border-teal-500/40 text-teal-300'
                }`}
              >
                <span className="text-[11px] uppercase font-semibold block mb-1">
                  Ciclo de 2 Min (#{cycleCount})
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono">
                  {formatTime(cycleSeconds)}
                </span>
                <span className="text-[10px] block mt-1">
                  {cycleSeconds <= 15 ? '⚠️ ¡CAMBIO DE REANIMADOR!' : 'Chequeo de ritmo al llegar a 00:00'}
                </span>
              </div>

              {/* Adrenalina Cooldown */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                  Próxima Adrenalina
                </span>
                <span
                  className={`text-3xl sm:text-4xl font-extrabold font-mono ${
                    adrenalinaCooldown === 0 && rcpRunning ? 'text-amber-400 animate-bounce' : 'text-slate-300'
                  }`}
                >
                  {adrenalinaCooldown > 0 ? formatTime(adrenalinaCooldown) : '¡LISTA!'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  {adrenalinaCount > 0 ? `Dosis dadas: ${adrenalinaCount}` : 'Cada 3 a 5 min'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {!rcpRunning ? (
                <button
                  type="button"
                  onClick={handleStartRcp}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 cursor-pointer transition"
                >
                  <Play className="w-5 h-5 fill-white" />
                  Iniciar Paro / Compresiones
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePauseRcp}
                  className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-900/40 cursor-pointer transition"
                >
                  <Pause className="w-5 h-5 fill-white" />
                  Pausar Cronómetro
                </button>
              )}

              <button
                type="button"
                onClick={handleResetRcp}
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium text-xs flex items-center gap-1.5 cursor-pointer transition"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>
            </div>

            {/* Quick Intervention Controls */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">
                Registro de Intervenciones Inmediatas:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Adrenalina */}
                <button
                  type="button"
                  onClick={handleAdminAdrenalina}
                  className="p-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer transition"
                >
                  <div className="flex items-center gap-2">
                    <Syringe className="w-4 h-4 text-amber-400" />
                    <span>+ Adrenalina 1 mg EV</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 font-mono text-[11px]">
                    {adrenalinaCount} dosis
                  </span>
                </button>

                {/* Desfibrilación */}
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleDefibrillation(200, 'FV / TVSP')}
                    className="flex-1 p-3 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer transition"
                  >
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-rose-400" />
                      <span>Descarga 200J</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-rose-500/20 font-mono text-[10px]">
                      #{shocksCount}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDefibrillation(360, 'FV / TVSP')}
                    className="px-2.5 bg-rose-900/40 hover:bg-rose-900/60 text-rose-300 border border-rose-700/50 rounded-xl text-xs font-semibold cursor-pointer"
                    title="Descarga 360 Joules monofásico"
                  >
                    360J
                  </button>
                </div>

                {/* Amiodarona */}
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleAdminAmiodarona(300)}
                    className="flex-1 p-2.5 bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition"
                  >
                    Amiodarona 300 mg (1ra)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAdminAmiodarona(150)}
                    className="flex-1 p-2.5 bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition"
                  >
                    Amiodarona 150 mg (2da)
                  </button>
                </div>

                {/* RCE / Fin */}
                <button
                  type="button"
                  onClick={handleRCE}
                  className="p-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition"
                >
                  <Heart className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  RCE (Pulso Retornado)
                </button>
              </div>

              {/* Add Custom Note form */}
              <form onSubmit={handleAddCustomNote} className="flex gap-2 pt-2 border-t border-slate-800">
                <input
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Anotación rápida (ej. IOT #7.5 comprobada, vía central subclavia)..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Registrar
                </button>
              </form>
            </div>

            {/* Checklist 4H y 4T */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wide block flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                Causas Reversibles de Paro (4H y 4T - ACLS):
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* 4H */}
                <div className="space-y-1.5 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-teal-400 font-bold block text-[11px]">4H:</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourH.hipovolemia}
                      onChange={(e) => setFourH({ ...fourH, hipovolemia: e.target.checked })}
                      className="rounded accent-teal-400"
                    />
                    <span>Hipovolemia (Volumen/Sangrado)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourH.hipoxia}
                      onChange={(e) => setFourH({ ...fourH, hipoxia: e.target.checked })}
                      className="rounded accent-teal-400"
                    />
                    <span>Hipoxia (Vía aérea / Oxigenación)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourH.hidrogeniones}
                      onChange={(e) => setFourH({ ...fourH, hidrogeniones: e.target.checked })}
                      className="rounded accent-teal-400"
                    />
                    <span>Hidrogeniones (Acidosis severa)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourH.potasio}
                      onChange={(e) => setFourH({ ...fourH, potasio: e.target.checked })}
                      className="rounded accent-teal-400"
                    />
                    <span>Hipo / Hiperpotasemia</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourH.hipotermia}
                      onChange={(e) => setFourH({ ...fourH, hipotermia: e.target.checked })}
                      className="rounded accent-teal-400"
                    />
                    <span>Hipotermia (&lt;35°C)</span>
                  </label>
                </div>

                {/* 4T */}
                <div className="space-y-1.5 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-amber-400 font-bold block text-[11px]">4T:</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourT.tensionNeumo}
                      onChange={(e) => setFourT({ ...fourT, tensionNeumo: e.target.checked })}
                      className="rounded accent-amber-400"
                    />
                    <span>Tensión neumotórax (Descompresión)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourT.taponamiento}
                      onChange={(e) => setFourT({ ...fourT, taponamiento: e.target.checked })}
                      className="rounded accent-amber-400"
                    />
                    <span>Taponamiento cardíaco</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourT.toxicos}
                      onChange={(e) => setFourT({ ...fourT, toxicos: e.target.checked })}
                      className="rounded accent-amber-400"
                    />
                    <span>Tóxicos (Sobredosis / Fármacos)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fourT.trombosis}
                      onChange={(e) => setFourT({ ...fourT, trombosis: e.target.checked })}
                      className="rounded accent-amber-400"
                    />
                    <span>Trombosis (Pulmonar TEP / Coronaria)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Event Timeline Column */}
          <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4 flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  Cronología de Paro en Tiempo Real
                </h3>
                <span className="text-[11px] text-slate-400">
                  {events.length} evento(s) registrados
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={exportRcpSummary}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {copiedRcp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedRcp ? 'Copiado' : 'Copiar'}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs cursor-pointer"
                  title="Imprimir informe de paro"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Event list */}
            <div className="flex-1 overflow-y-auto max-h-[500px] space-y-2 pr-1 text-xs">
              {events.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  El registro está listo. Pulsa "Iniciar Paro / Compresiones" o registra medicamentos para cronometrar.
                </div>
              ) : (
                events.map((ev) => (
                  <div
                    key={ev.id}
                    className={`p-2.5 rounded-xl border flex items-start gap-2.5 ${
                      ev.type === 'shock'
                        ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                        : ev.type === 'adrenalina'
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                        : ev.type === 'rce'
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="font-mono text-[11px] text-slate-400 shrink-0 font-semibold pt-0.5">
                      {ev.timestamp}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium leading-relaxed">{ev.description}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. COMPATIBILIDAD EN Y */}
      {/* ========================================================= */}
      {subModule === 'compatibilidad' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Split className="w-4 h-4 text-teal-400" />
                Matriz de Compatibilidad en Y (Vía Venosa)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Verifica de inmediato si dos infusiones continuas pueden pasar por la misma luz de catéter sin precipitar ni inactivarse.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Fármaco A (Infusión Continua 1):
                </label>
                <select
                  value={selectedDrug1}
                  onChange={(e) => setSelectedDrug1(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-400 font-medium"
                >
                  {drugListY.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    const temp = selectedDrug1;
                    setSelectedDrug1(selectedDrug2);
                    setSelectedDrug2(temp);
                  }}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-teal-400 rounded-full border border-slate-700 transition"
                  title="Invertir fármacos"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Fármaco B (Infusión Continua 2):
                </label>
                <select
                  value={selectedDrug2}
                  onChange={(e) => setSelectedDrug2(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-400 font-medium"
                >
                  {drugListY.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Compatibility Verdict Card */}
          <div className="lg:col-span-6 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs text-slate-400 uppercase font-semibold block">
                Dictamen de Seguridad Farmacológica:
              </span>

              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  compatibilityResult.status === 'compatible'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                    : compatibilityResult.status === 'incompatible'
                    ? 'bg-rose-950/50 border-rose-500/50 text-rose-200'
                    : 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                }`}
              >
                {compatibilityResult.status === 'compatible' ? (
                  <Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                ) : compatibilityResult.status === 'incompatible' ? (
                  <AlertOctagon className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                ) : (
                  <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                )}

                <div className="space-y-1">
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    {compatibilityResult.status === 'compatible'
                      ? 'COMPATIBLE EN Y'
                      : compatibilityResult.status === 'incompatible'
                      ? 'INCOMPATIBLE EN Y (PELIGRO)'
                      : 'PRECAUCIÓN / DATOS LIMITADOS'}
                  </h4>
                  <p className="text-xs leading-relaxed opacity-90">{compatibilityResult.reason}</p>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <strong className="text-teal-400 font-bold block uppercase tracking-wide">
                  Recomendación para el Profesional de Enfermería:
                </strong>
                <p className="text-slate-200 leading-relaxed">{compatibilityResult.recommendation}</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              💡 <em>Regla de Oro en UCI:</em> Ante duda o incompatibilidad de pH (fármacos ácidos como noradrenalina vs alcalinos como bicarbonato u omeprazol), utilice luces independientes de CVC o instale una vía venosa periférica exclusiva.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. CALCULADORA DE VASOACTIVOS */}
      {/* ========================================================= */}
      {subModule === 'inotropos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls */}
          <div className="lg:col-span-6 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                Dilución y Titulación de Vasoactivos
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Cálculo bidireccional entre velocidad en bomba (mL/h) y tasa recibida (mcg/kg/min).
              </p>
            </div>

            {/* Drug select */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Fármaco Inotrópico / Vasoactivo
              </label>
              <select
                value={selectedVasoId}
                onChange={(e) => {
                  const id = e.target.value;
                  setSelectedVasoId(id);
                  const v = vasoactiveDrugs.find((x) => x.id === id);
                  if (v) {
                    setVasoAmpoules(v.defaultAmps.toString());
                    setVasoSolventVol(v.defaultVol.toString());
                  }
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {vasoactiveDrugs.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} (Ampolla {d.ampMg} mg)
                  </option>
                ))}
              </select>
            </div>

            {/* Preparation inputs */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  N° Ampollas
                </label>
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={vasoAmpoules}
                  onChange={(e) => setVasoAmpoules(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Volumen Solución (mL)
                </label>
                <input
                  type="number"
                  value={vasoSolventVol}
                  onChange={(e) => setVasoSolventVol(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Peso Paciente (kg)
                </label>
                <input
                  type="number"
                  value={vasoPatientWeight}
                  onChange={(e) => setVasoPatientWeight(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-mono"
                />
              </div>
            </div>

            {/* Mode switch */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Modo de Cálculo
              </label>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setVasoInputMode('doseToRate')}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                    vasoInputMode === 'doseToRate' ? 'bg-amber-600 text-white shadow' : 'text-slate-400'
                  }`}
                >
                  Tasa Deseada ({currentVaso.unit}) ➔ mL/h
                </button>
                <button
                  type="button"
                  onClick={() => setVasoInputMode('rateToDose')}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                    vasoInputMode === 'rateToDose' ? 'bg-amber-600 text-white shadow' : 'text-slate-400'
                  }`}
                >
                  mL/h en Bomba ➔ Tasa ({currentVaso.unit})
                </button>
              </div>
            </div>

            {/* Input according to mode */}
            {vasoInputMode === 'doseToRate' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Dosis Prescrita ({currentVaso.unit})
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={vasoTargetDose}
                  onChange={(e) => setVasoTargetDose(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-bold text-amber-400"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Rango habitual: {currentVaso.doseRange}
                </span>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Velocidad en Bomba de Infusión (mL / h)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={vasoPumpRate}
                  onChange={(e) => setVasoPumpRate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-bold text-cyan-400"
                />
              </div>
            )}
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <span className="text-xs text-slate-400 uppercase font-semibold block border-b border-slate-800 pb-2">
              Resultado de Infusión y Preparación:
            </span>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Concentración de Mezcla</span>
                <span className="text-2xl font-extrabold text-teal-300 font-mono">
                  {concentrationMcgMl.toFixed(1)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">mcg / mL</span>
                <span className="text-[10px] text-slate-500 block">
                  ({totalDrugMg} mg en {parsedSolventVol} mL)
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/40">
                <span className="text-[11px] text-slate-400 block mb-1">
                  {vasoInputMode === 'doseToRate' ? 'Velocidad en Bomba' : 'Dosis Recibida'}
                </span>
                <span className="text-3xl font-extrabold text-amber-400 font-mono">
                  {vasoInputMode === 'doseToRate'
                    ? calculatedMlPerHour.toFixed(2)
                    : calculatedMcgKgMin.toFixed(2)}
                </span>
                <span className="text-[11px] text-amber-300 block font-semibold mt-0.5">
                  {vasoInputMode === 'doseToRate' ? 'mL / hora' : currentVaso.unit}
                </span>
              </div>
            </div>

            {/* Kardex prescription text */}
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-200 space-y-1 font-mono">
              <span className="text-teal-400 font-bold block text-[11px]">Rotulación para Infusor:</span>
              <p>
                {currentVaso.name} {totalDrugMg} mg + Solución Dextrosa 5% c.s.p {parsedSolventVol} mL.{' '}
                Infundir a <strong>{vasoInputMode === 'doseToRate' ? calculatedMlPerHour.toFixed(2) : parseFloat(vasoPumpRate || '0').toFixed(2)} mL/h</strong> por CVC exclusivo.
              </p>
            </div>

            <div className="p-3.5 bg-amber-950/20 border border-amber-900/40 rounded-xl text-xs text-amber-200 space-y-1">
              <strong className="text-amber-300 font-bold block">Alerta Asistencial:</strong>
              <p>{currentVaso.notes}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
