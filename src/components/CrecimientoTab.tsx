import React, { useState } from 'react';
import {
  LineChart,
  CheckCircle,
  AlertOctagon,
  User,
  Sparkles,
  Ruler,
  Brain,
  Weight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import {
  tpedMilestones,
  omsBoysWeightData,
  omsGirlsWeightData,
  omsBoysHeightData,
  omsGirlsHeightData,
  omsBoysHeadCircData,
  omsGirlsHeadCircData,
  GrowthPoint
} from '../data/tpedData';

type CurveType = 'peso' | 'talla' | 'cefalico';

export const CrecimientoTab: React.FC = () => {
  const [selectedSex, setSelectedSex] = useState<'boys' | 'girls'>('boys');
  const [activeCurve, setActiveCurve] = useState<CurveType>('peso');

  // Anthropometric patient inputs (initially clean / empty)
  const [patientAgeMonth, setPatientAgeMonth] = useState<string>('6');
  const [patientWeight, setPatientWeight] = useState<string>('');
  const [patientHeight, setPatientHeight] = useState<string>('');
  const [patientHeadCirc, setPatientHeadCirc] = useState<string>('');

  // TPED selected month
  const [tpedMonth, setTpedMonth] = useState<number>(6);

  const ageNum = parseInt(patientAgeMonth) || 0;
  const weightNum = parseFloat(patientWeight) || 0;
  const heightNum = parseFloat(patientHeight) || 0;
  const headCircNum = parseFloat(patientHeadCirc) || 0;

  // Active dataset according to curve and sex
  let curveData: GrowthPoint[] = [];
  let yMin = 0;
  let yMax = 26;
  let yUnit = 'kg';
  let curveTitle = 'Curva Referencial OMS: Peso para la Edad (0 a 5 años)';
  let curveSub = 'Desviaciones estándar (+2 DE Sobrepeso, Mediana, -2 DE Desnutrición)';

  if (activeCurve === 'peso') {
    curveData = selectedSex === 'boys' ? omsBoysWeightData : omsGirlsWeightData;
    yMin = 0;
    yMax = 26;
    yUnit = 'kg';
    curveTitle = 'Curva OMS: Peso para la Edad (P/E)';
    curveSub = 'Evaluación de ganancia ponderal y peso para la edad';
  } else if (activeCurve === 'talla') {
    curveData = selectedSex === 'boys' ? omsBoysHeightData : omsGirlsHeightData;
    yMin = 40;
    yMax = 125;
    yUnit = 'cm';
    curveTitle = 'Curva OMS: Talla / Longitud para la Edad (T/E)';
    curveSub = 'Detección temprana de talla baja y desnutrición crónica (0 a 5 años)';
  } else {
    curveData = selectedSex === 'boys' ? omsBoysHeadCircData : omsGirlsHeadCircData;
    yMin = 28;
    yMax = 56;
    yUnit = 'cm';
    curveTitle = 'Curva OMS: Perímetro Cefálico para la Edad (PC/E)';
    curveSub = 'Monitoreo del desarrollo neurológico y crecimiento craneal';
  }

  // Closest standard for the entered age
  const closestStandard = curveData.reduce((prev, curr) =>
    Math.abs(curr.ageMonth - ageNum) < Math.abs(prev.ageMonth - ageNum) ? curr : prev
  );

  // SVG Chart Dimensions
  const chartWidth = 560;
  const chartHeight = 290;
  const padding = { top: 25, right: 30, bottom: 45, left: 50 };

  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const maxMonth = 60;

  const scaleX = (m: number) => padding.left + (m / maxMonth) * innerWidth;
  const scaleY = (val: number) => {
    const clamped = Math.min(Math.max(val, yMin), yMax);
    return padding.top + innerHeight - ((clamped - yMin) / (yMax - yMin)) * innerHeight;
  };

  // Generate SVG path for points
  const makePath = (key: 'minus2SD' | 'median' | 'plus2SD') => {
    return curveData.reduce((acc, pt, index) => {
      const x = scaleX(pt.ageMonth);
      const y = scaleY(pt[key]);
      return `${acc} ${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }, '');
  };

  const pathMinus2 = makePath('minus2SD');
  const pathMedian = makePath('median');
  const pathPlus2 = makePath('plus2SD');

  // Determine which patient value is plotted on the active curve
  let currentVal = 0;
  let hasCurrentVal = false;
  if (activeCurve === 'peso' && weightNum > 0) {
    currentVal = weightNum;
    hasCurrentVal = true;
  } else if (activeCurve === 'talla' && heightNum > 0) {
    currentVal = heightNum;
    hasCurrentVal = true;
  } else if (activeCurve === 'cefalico' && headCircNum > 0) {
    currentVal = headCircNum;
    hasCurrentVal = true;
  }

  const pX = scaleX(Math.min(Math.max(ageNum, 0), maxMonth));
  const pY = scaleY(currentVal);

  // Diagnostic calculations for all 3 indicators
  const evalWeight = () => {
    if (weightNum <= 0) return { label: 'Sin datos de peso', color: 'text-slate-400', badge: 'bg-slate-800' };
    const wData = selectedSex === 'boys' ? omsBoysWeightData : omsGirlsWeightData;
    const std = wData.reduce((p, c) => Math.abs(c.ageMonth - ageNum) < Math.abs(p.ageMonth - ageNum) ? c : p);
    if (weightNum > std.plus2SD) {
      return { label: 'Sobrepeso (+2 DE)', color: 'text-amber-400', badge: 'bg-amber-950/70 border-amber-800 text-amber-300' };
    }
    if (weightNum < std.minus2SD) {
      return { label: 'Bajo Peso / Desnutrición (-2 DE)', color: 'text-rose-400', badge: 'bg-rose-950/70 border-rose-800 text-rose-300' };
    }
    return { label: 'Adecuado / Normal (Mediana)', color: 'text-emerald-400', badge: 'bg-emerald-950/70 border-emerald-800 text-emerald-300' };
  };

  const evalHeight = () => {
    if (heightNum <= 0) return { label: 'Sin datos de talla', color: 'text-slate-400', badge: 'bg-slate-800' };
    const hData = selectedSex === 'boys' ? omsBoysHeightData : omsGirlsHeightData;
    const std = hData.reduce((p, c) => Math.abs(c.ageMonth - ageNum) < Math.abs(p.ageMonth - ageNum) ? c : p);
    if (heightNum > std.plus2SD) {
      return { label: 'Talla Alta (+2 DE)', color: 'text-sky-400', badge: 'bg-sky-950/70 border-sky-800 text-sky-300' };
    }
    if (heightNum < std.minus2SD) {
      return { label: 'Talla Baja / Riesgo Retraso (-2 DE)', color: 'text-rose-400', badge: 'bg-rose-950/70 border-rose-800 text-rose-300' };
    }
    return { label: 'Talla Adecuada para la Edad', color: 'text-emerald-400', badge: 'bg-emerald-950/70 border-emerald-800 text-emerald-300' };
  };

  const evalHeadCirc = () => {
    if (headCircNum <= 0) return { label: 'Sin datos de PC', color: 'text-slate-400', badge: 'bg-slate-800' };
    const cData = selectedSex === 'boys' ? omsBoysHeadCircData : omsGirlsHeadCircData;
    const std = cData.reduce((p, c) => Math.abs(c.ageMonth - ageNum) < Math.abs(p.ageMonth - ageNum) ? c : p);
    if (headCircNum > std.plus2SD) {
      return { label: 'Sospecha de Macrocefalia (+2 DE)', color: 'text-amber-400', badge: 'bg-amber-950/70 border-amber-800 text-amber-300' };
    }
    if (headCircNum < std.minus2SD) {
      return { label: 'Sospecha de Microcefalia (-2 DE)', color: 'text-rose-400', badge: 'bg-rose-950/70 border-rose-800 text-rose-300' };
    }
    return { label: 'Normocéfalo / Desarrollo Normal', color: 'text-emerald-400', badge: 'bg-emerald-950/70 border-emerald-800 text-emerald-300' };
  };

  const diagWeight = evalWeight();
  const diagHeight = evalHeight();
  const diagHead = evalHeadCirc();

  // Find TPED milestone item
  const selectedTped =
    tpedMilestones.find((t) => t.month === tpedMonth) ||
    tpedMilestones.reduce((prev, curr) =>
      Math.abs(curr.month - tpedMonth) < Math.abs(prev.month - tpedMonth) ? curr : prev
    );

  const limpiarAntropometria = () => {
    setPatientWeight('');
    setPatientHeight('');
    setPatientHeadCirc('');
  };

  const cargarEjemploCred = () => {
    setPatientAgeMonth('6');
    setPatientWeight('7.8');
    setPatientHeight('67.0');
    setPatientHeadCirc('43.2');
    setTpedMonth(6);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-3 items-start md:items-center justify-between shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <LineChart className="w-5 h-5 text-[#22b8af]" />
            Curvas Antropométricas OMS & Test TPED (MINSA Perú)
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Evaluación integral CRED de <strong>Peso</strong>, <strong>Talla</strong> y <strong>Perímetro Cefálico</strong> con ploteo de curvas y desarrollo psicomotor.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setSelectedSex('boys')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-1.5 ${
              selectedSex === 'boys'
                ? 'bg-[#1ea69e] text-white font-semibold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" /> Niños (Varones)
          </button>
          <button
            type="button"
            onClick={() => setSelectedSex('girls')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer flex items-center gap-1.5 ${
              selectedSex === 'girls'
                ? 'bg-rose-600 text-white font-semibold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" /> Niñas (Mujeres)
          </button>
        </div>
      </div>

      {/* Main Anthropometric Data Entry Bar */}
      <div className="bg-[#092233]/90 border border-[#12425a] rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#12425a] pb-2.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#22b8af]" />
            <h3 className="font-bold text-white text-sm sm:text-base">
              Datos Antropométricos del Niño en Consulta CRED
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={cargarEjemploCred}
              className="text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Cargar ejemplo
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={limpiarAntropometria}
              className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Limpiar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {/* Edad en meses */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <label className="block text-slate-400 font-semibold mb-1 text-[11px]">
              Edad (Meses)
            </label>
            <input
              type="number"
              min="0"
              max="60"
              value={patientAgeMonth}
              onChange={(e) => {
                const val = e.target.value;
                setPatientAgeMonth(val);
                const m = parseInt(val);
                if (m) setTpedMonth(m);
              }}
              placeholder="Ej: 6"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-bold text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Peso */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <label className="block text-cyan-400 font-semibold mb-1 text-[11px] flex items-center gap-1">
              <Weight className="w-3.5 h-3.5 text-cyan-400" /> Peso Actual (kg)
            </label>
            <input
              type="number"
              step="0.05"
              min="0.5"
              max="35"
              value={patientWeight}
              onChange={(e) => setPatientWeight(e.target.value)}
              placeholder="Ej: 7.9"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-bold text-sm focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Talla */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <label className="block text-emerald-400 font-semibold mb-1 text-[11px] flex items-center gap-1">
              <Ruler className="w-3.5 h-3.5 text-emerald-400" /> Talla / Long. (cm)
            </label>
            <input
              type="number"
              step="0.5"
              min="30"
              max="130"
              value={patientHeight}
              onChange={(e) => setPatientHeight(e.target.value)}
              placeholder="Ej: 67.5"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-bold text-sm focus:border-emerald-500 focus:outline-none"
            />
          </div>

          {/* Perímetro Cefálico */}
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <label className="block text-amber-400 font-semibold mb-1 text-[11px] flex items-center gap-1">
              <Brain className="w-3.5 h-3.5 text-amber-400" /> Perím. Cefálico (cm)
            </label>
            <input
              type="number"
              step="0.1"
              min="25"
              max="60"
              value={patientHeadCirc}
              onChange={(e) => setPatientHeadCirc(e.target.value)}
              placeholder="Ej: 43.0"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white font-bold text-sm focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Live Anthropometric Diagnoses Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${diagWeight.badge}`}>
            <span className="font-medium text-slate-300">P/E (Peso):</span>
            <span className={`font-bold ${diagWeight.color}`}>{diagWeight.label}</span>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${diagHeight.badge}`}>
            <span className="font-medium text-slate-300">T/E (Talla):</span>
            <span className={`font-bold ${diagHeight.color}`}>{diagHeight.label}</span>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${diagHead.badge}`}>
            <span className="font-medium text-slate-300">PC/E (Cefálico):</span>
            <span className={`font-bold ${diagHead.color}`}>{diagHead.label}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart Column */}
        <div className="lg:col-span-7 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] flex flex-col justify-between shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#12425a] pb-3">
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">{curveTitle}</h3>
              <p className="text-[11px] text-slate-300">{curveSub}</p>
            </div>

            {/* Curve Selector Pills */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveCurve('peso')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
                  activeCurve === 'peso'
                    ? 'bg-[#1ea69e] text-white font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Weight className="w-3 h-3" /> Peso
              </button>
              <button
                type="button"
                onClick={() => setActiveCurve('talla')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
                  activeCurve === 'talla'
                    ? 'bg-[#1ea69e] text-white font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Ruler className="w-3 h-3" /> Talla
              </button>
              <button
                type="button"
                onClick={() => setActiveCurve('cefalico')}
                className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
                  activeCurve === 'cefalico'
                    ? 'bg-[#1ea69e] text-white font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Brain className="w-3 h-3" /> P. Cefálico
              </button>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-auto max-h-[300px] select-none"
            >
              {/* Y Grid Lines */}
              {Array.from({ length: 6 }).map((_, i) => {
                const step = (yMax - yMin) / 5;
                const val = Math.round(yMin + step * i);
                return (
                  <g key={`y-${val}`}>
                    <line
                      x1={padding.left}
                      y1={scaleY(val)}
                      x2={chartWidth - padding.right}
                      y2={scaleY(val)}
                      stroke="#1e293b"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={padding.left - 8}
                      y={scaleY(val) + 4}
                      fill="#64748b"
                      fontSize="9"
                      textAnchor="end"
                    >
                      {val} {yUnit}
                    </text>
                  </g>
                );
              })}

              {/* X Months Grid Lines */}
              {[0, 6, 12, 18, 24, 36, 48, 60].map((m) => (
                <g key={`x-${m}`}>
                  <line
                    x1={scaleX(m)}
                    y1={padding.top}
                    x2={scaleX(m)}
                    y2={chartHeight - padding.bottom}
                    stroke="#1e293b"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={scaleX(m)}
                    y={chartHeight - padding.bottom + 15}
                    fill="#64748b"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    {m}m
                  </text>
                </g>
              ))}

              {/* Standard Curves */}
              {/* +2 DE Line */}
              <path d={pathPlus2} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
              {/* Median Line */}
              <path d={pathMedian} fill="none" stroke="#10b981" strokeWidth="2.5" />
              {/* -2 DE Line */}
              <path d={pathMinus2} fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />

              {/* Patient Plotted Marker */}
              {hasCurrentVal && (
                <g>
                  <circle
                    cx={pX}
                    cy={pY}
                    r="8"
                    fill="#38bdf8"
                    fillOpacity="0.35"
                    className="animate-ping"
                  />
                  <circle cx={pX} cy={pY} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
                  <text
                    x={pX}
                    y={Math.max(pY - 9, 15)}
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {currentVal} {yUnit}
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Legend and Active Interpretation */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-3 h-0.5 bg-amber-400 inline-block" /> +2 DE (Límite Superior)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-3 h-1 bg-emerald-400 inline-block" /> Mediana OMS (Óptimo)
              </span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <span className="w-3 h-0.5 bg-rose-400 inline-block" /> -2 DE (Límite Inferior)
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Paciente
              </span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 block mb-0.5 font-medium">Valores de Referencia a los {ageNum} meses:</span>
              <p className="text-slate-200">
                Mediana esperada: <strong className="text-emerald-400">{closestStandard.median} {yUnit}</strong> | Rango normal (-2 a +2 DE):{' '}
                <strong className="text-slate-300">{closestStandard.minus2SD} {yUnit}</strong> a{' '}
                <strong className="text-slate-300">{closestStandard.plus2SD} {yUnit}</strong>.
              </p>
              {!hasCurrentVal && (
                <p className="text-[11px] text-amber-400/90 mt-1">
                  * Ingrese el valor en la barra superior para ver el punto ploteado sobre esta curva.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* TPED Column */}
        <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          <div className="border-b border-[#12425a] pb-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#22b8af]" />
              Hitos TPED (Test Peruano - MINSA)
            </h3>
            <p className="text-[11px] text-slate-300">
              Evaluación del desarrollo psicomotor por edad en CRED
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Edad Evaluada en el Test
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[1, 2, 3, 4, 6, 9, 12, 15, 18, 24, 36, 48].map((m) => (
                <button
                  key={m}
                  onClick={() => setTpedMonth(m)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-colors cursor-pointer border ${
                    tpedMonth === m
                      ? 'bg-[#1ea69e] text-white border-[#27c2b9] font-bold shadow'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {m < 12 ? `${m}m` : `${m / 12}a`}
                </button>
              ))}
            </div>
          </div>

          {/* Milestones List */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-cyan-400 block">
              Hitos Esperados para {selectedTped.label}:
            </span>

            {selectedTped.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-start gap-2.5 text-xs"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 block">
                    {item.area}
                  </span>
                  <span className="text-slate-200">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Red Flag Warning */}
          {selectedTped.redFlag && (
            <div className="p-3 bg-rose-950/30 border border-rose-900/50 rounded-xl text-xs space-y-1">
              <strong className="text-rose-400 font-bold flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                Signo de Alarma Roja para Referencia Médica:
              </strong>
              <p className="text-rose-200">{selectedTped.redFlag}</p>
            </div>
          )}

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-[11px] text-slate-400">
            <strong>Norma Técnica CRED MINSA:</strong> Todo niño evaluado en el consultorio de crecimiento y desarrollo debe contar con su gráfica de Peso/Edad, Talla/Edad y Perímetro Cefálico registrada en su Carné de Salud Infantil.
          </div>
        </div>
      </div>
    </section>
  );
};
