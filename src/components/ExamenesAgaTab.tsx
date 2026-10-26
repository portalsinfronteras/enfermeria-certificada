import React, { useState } from 'react';
import {
  FileText,
  Activity,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Copy,
  Printer,
  Check,
  Droplets,
  Layers,
  Info
} from 'lucide-react';

export const ExamenesAgaTab: React.FC = () => {
  const [subModule, setSubModule] = useState<'aga' | 'electrolitos'>('aga');
  const [copied, setCopied] = useState<boolean>(false);

  // ==========================================
  // 1. AGA State & Logic
  // ==========================================
  const [ph, setPh] = useState<string>('7.28');
  const [pco2, setPco2] = useState<string>('30');
  const [hco3, setHco3] = useState<string>('14');
  const [po2, setPo2] = useState<string>('88');
  const [fio2, setFio2] = useState<string>('21'); // %
  const [na, setNa] = useState<string>('138');
  const [cl, setCl] = useState<string>('102');

  const parsedPh = parseFloat(ph) || 7.4;
  const parsedPco2 = parseFloat(pco2) || 40;
  const parsedHco3 = parseFloat(hco3) || 24;
  const parsedPo2 = parseFloat(po2) || 90;
  const parsedFio2 = (parseFloat(fio2) || 21) / 100;
  const parsedNa = parseFloat(na) || 140;
  const parsedCl = parseFloat(cl) || 104;

  // AGA Calculation
  const analyzeAga = () => {
    let primaryDisorder = 'Estado Ácido-Base Normal';
    let compensation = 'Dentro de parámetros basales';
    let severity = 'normal';
    let anionGapText = '';

    // Anion Gap
    const anionGap = parsedNa - (parsedCl + parsedHco3);
    const hasAnionGap = !isNaN(anionGap);

    // Primary
    if (parsedPh < 7.35) {
      // Acidemia
      if (parsedHco3 < 22 && parsedPco2 <= 40) {
        primaryDisorder = 'Acidosis Metabólica';
        if (parsedPco2 < 35) {
          compensation = 'Parcialmente compensada con hiperventilación respiratoria';
        } else {
          compensation = 'No compensada (respiración basal)';
        }
        severity = 'acidosis';
      } else if (parsedPco2 > 45 && parsedHco3 >= 22) {
        primaryDisorder = 'Acidosis Respiratoria';
        if (parsedHco3 > 26) {
          compensation = 'Compensada parcialmente a nivel renal';
        } else {
          compensation = 'Aguda / No compensada';
        }
        severity = 'acidosis';
      } else if (parsedHco3 < 22 && parsedPco2 > 45) {
        primaryDisorder = 'Trastorno Mixto: Acidosis Metabólica + Acidosis Respiratoria (Grave)';
        compensation = 'Doble acidosis sin compensación (falla ventilatoria y metabólica combinada)';
        severity = 'grave';
      }
    } else if (parsedPh > 7.45) {
      // Alcalemia
      if (parsedHco3 > 26 && parsedPco2 >= 40) {
        primaryDisorder = 'Alcalosis Metabólica';
        if (parsedPco2 > 45) {
          compensation = 'Parcialmente compensada por hipoventilación';
        } else {
          compensation = 'No compensada';
        }
        severity = 'alcalosis';
      } else if (parsedPco2 < 35 && parsedHco3 <= 26) {
        primaryDisorder = 'Alcalosis Respiratoria';
        if (parsedHco3 < 22) {
          compensation = 'Compensada renalmente (descenso de bicarbonato)';
        } else {
          compensation = 'Aguda / No compensada (hiperventilación aguda, dolor, ansiedad)';
        }
        severity = 'alcalosis';
      } else if (parsedHco3 > 26 && parsedPco2 < 35) {
        primaryDisorder = 'Trastorno Mixto: Alcalosis Metabólica + Alcalosis Respiratoria';
        compensation = 'Doble alcalosis sin compensación';
        severity = 'grave';
      }
    } else {
      // Normal pH (7.35 - 7.45)
      if (parsedHco3 < 22 && parsedPco2 < 35) {
        primaryDisorder = 'Acidosis Metabólica Totalmente Compensada';
        compensation = 'Compensación respiratoria completa';
        severity = 'compensado';
      } else if (parsedPco2 > 45 && parsedHco3 > 26) {
        primaryDisorder = 'Acidosis Respiratoria Crónica Totalmente Compensada';
        compensation = 'Retención renal de bicarbonato compensatoria completa';
        severity = 'compensado';
      } else if (parsedHco3 > 26 && parsedPco2 > 45) {
        primaryDisorder = 'Alcalosis Metabólica Totalmente Compensada';
        compensation = 'Compensación respiratoria completa';
        severity = 'compensado';
      }
    }

    // Anion gap comment
    if (primaryDisorder.includes('Metabólica') && hasAnionGap) {
      if (anionGap > 12) {
        anionGapText = `Anion Gap Elevado (${anionGap.toFixed(1)} mEq/L, normal 8-12): Sospechar cetoacidosis diabética, acidosis láctica, uremia o intoxicación (MUDPILES).`;
      } else {
        anionGapText = `Anion Gap Normal / Hiperclorémica (${anionGap.toFixed(1)} mEq/L): Pérdidas digestivas (diarrea) o sobrecarga de solución salina 0.9%.`;
      }
    }

    // PaFi
    const pafi = parsedFio2 > 0 ? parsedPo2 / parsedFio2 : 0;
    let pafiText = 'Oxigenación adecuada (PaFi ≥ 300)';
    if (pafi < 100) pafiText = 'SDRA Grave (PaFi < 100 mmHg)';
    else if (pafi < 200) pafiText = 'SDRA Moderado (PaFi 100-200 mmHg)';
    else if (pafi < 300) pafiText = 'SDRA Leve / Hipoxemia (PaFi 200-300 mmHg)';

    return {
      primaryDisorder,
      compensation,
      severity,
      anionGap: hasAnionGap ? anionGap.toFixed(1) : 'N/A',
      anionGapText,
      pafi: pafi.toFixed(0),
      pafiText
    };
  };

  const agaResult = analyzeAga();

  // ==========================================
  // 2. Electrolitos & Osmolaridad State & Logic
  // ==========================================
  const [electWeight, setElectWeight] = useState<string>('70');
  const [electGender, setElectGender] = useState<'male' | 'female' | 'elderlyMale' | 'elderlyFemale'>('male');
  const [currentNa, setCurrentNa] = useState<string>('122');
  const [targetNa, setTargetNa] = useState<string>('130');

  // Potasio
  const [measuredK, setMeasuredK] = useState<string>('3.2');
  const [potassiumPh, setPotassiumPh] = useState<string>('7.25');

  // Calcio
  const [measuredCa, setMeasuredCa] = useState<string>('7.8');
  const [measuredAlbumin, setMeasuredAlbumin] = useState<string>('2.5');

  // Osmolaridad efectiva
  const [osmNa, setOsmNa] = useState<string>('140');
  const [osmGlucose, setOsmGlucose] = useState<string>('280');

  // Calculations
  const weightNum = parseFloat(electWeight) || 70;
  const actFactor =
    electGender === 'male' ? 0.6 : electGender === 'female' ? 0.5 : electGender === 'elderlyMale' ? 0.5 : 0.45;
  const actTotalLiters = weightNum * actFactor;
  const curNaNum = parseFloat(currentNa) || 120;
  const tarNaNum = parseFloat(targetNa) || 130;
  const naDeficitMeq = actTotalLiters * (tarNaNum - curNaNum);

  // K corregido por pH: por cada 0.1 de pH bajo 7.40, el K sérico sube ~0.6 transcelular
  const measKNum = parseFloat(measuredK) || 3.5;
  const phKNum = parseFloat(potassiumPh) || 7.4;
  const phDelta = phKNum - 7.4;
  const correctedPotassium = measKNum - phDelta * 6.0;

  // Calcio corregido (Payne): Ca + 0.8 * (4 - Alb)
  const measCaNum = parseFloat(measuredCa) || 8.5;
  const albNum = parseFloat(measuredAlbumin) || 4.0;
  const correctedCalcium = measCaNum + 0.8 * (4.0 - albNum);

  // Osmolaridad efectiva: 2 * Na + Glucosa/18
  const osmNaNum = parseFloat(osmNa) || 140;
  const osmGluNum = parseFloat(osmGlucose) || 100;
  const effectiveOsm = 2 * osmNaNum + osmGluNum / 18;

  const handleCopyAga = () => {
    let text = `INTERPRETACIÓN DE GASES ARTERIALES (AGA)\n`;
    text += `pH: ${ph} | pCO2: ${pco2} mmHg | HCO3: ${hco3} mEq/L | PaO2: ${po2} mmHg | FiO2: ${fio2}%\n`;
    text += `DIAGNÓSTICO: ${agaResult.primaryDisorder}\n`;
    text += `Compensación: ${agaResult.compensation}\n`;
    text += `Anion Gap: ${agaResult.anionGap} mEq/L\n`;
    text += `Índice PaFi: ${agaResult.pafi} mmHg (${agaResult.pafiText})\n`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30">
              Laboratorio Clínico & Cuidados Críticos
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              Metabolismo & Medio Interno
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            Interpretación Rápida de AGA, Electrolitos y Osmolaridad
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Diagnóstico automatizado de equilibrio ácido-base (compensación, Anion Gap, PaFi) y corrección de sodio, potasio y calcio.
          </p>
        </div>

        {/* Switcher */}
        <div className="flex bg-[#092233] p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setSubModule('aga')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              subModule === 'aga' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            Analizador de AGA
          </button>
          <button
            type="button"
            onClick={() => setSubModule('electrolitos')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              subModule === 'electrolitos' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            Electrolitos & Osmolaridad
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. ANALIZADOR DE AGA */}
      {/* ========================================================= */}
      {subModule === 'aga' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Valores de la Gasometría Arterial
              </h3>
              <span className="text-xs text-slate-400">Ingrese los datos del reporte de laboratorio</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-semibold text-slate-300">pH Arterial (7.35 - 7.45):</label>
                  <span className="font-mono text-cyan-400 font-bold">{ph}</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">pCO2 (35 - 45 mmHg):</label>
                  <input
                    type="number"
                    value={pco2}
                    onChange={(e) => setPco2(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">HCO3 (22 - 26 mEq/L):</label>
                  <input
                    type="number"
                    value={hco3}
                    onChange={(e) => setHco3(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">PaO2 (80 - 100 mmHg):</label>
                  <input
                    type="number"
                    value={po2}
                    onChange={(e) => setPo2(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">FiO2 (% de O2):</label>
                  <input
                    type="number"
                    value={fio2}
                    onChange={(e) => setFio2(e.target.value)}
                    placeholder="21 para aire ambiente"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-teal-400 block mb-2">
                  Opcional para Anion Gap (Brecha Aniónica):
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">Sodio Na+ (135-145):</label>
                    <input
                      type="number"
                      value={na}
                      onChange={(e) => setNa(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">Cloro Cl- (98-106):</label>
                    <input
                      type="number"
                      value={cl}
                      onChange={(e) => setCl(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white font-mono text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Analysis */}
          <div className="lg:col-span-7 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Diagnóstico Automático:</span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  {agaResult.primaryDisorder}
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyAga}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
            </div>

            {/* Diagnostic Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Estado de Compensación:</span>
                <span className="font-semibold text-white leading-snug block">{agaResult.compensation}</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Anion Gap:</span>
                <span className="text-xl font-bold font-mono text-amber-400">{agaResult.anionGap}</span>
                <span className="text-[10px] text-slate-500 block">mEq / L (normal 8-12)</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block text-[11px] mb-1">Índice PaFi (PaO2/FiO2):</span>
                <span className="text-xl font-bold font-mono text-cyan-400">{agaResult.pafi}</span>
                <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">{agaResult.pafiText}</span>
              </div>
            </div>

            {/* Clinical interpretation notes */}
            {agaResult.anionGapText && (
              <div className="p-3.5 bg-amber-950/20 border border-amber-900/40 rounded-xl text-xs text-amber-200 leading-relaxed">
                <strong className="text-amber-300 font-bold block mb-1">Interpretación del Anion Gap:</strong>
                {agaResult.anionGapText}
              </div>
            )}

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <span className="text-teal-400 font-bold uppercase tracking-wide block flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Cuidados de Enfermería Asistenciales:
              </span>
              <ul className="space-y-1 text-slate-300 list-disc list-inside">
                <li>
                  {agaResult.primaryDisorder.includes('Acidosis')
                    ? 'Monitorear niveles de potasio (la acidemia desplaza el potasio al espacio extracelular provocando hiperkalemia aparente).'
                    : 'Vigilar hipocalcemia sintomática (parestesias, espasmos, signos de Chvostek/Trousseau por aumento de unión de calcio a albúmina).'}
                </li>
                <li>
                  {parsedPco2 > 45
                    ? 'Retención de CO2: Asegurar permeabilidad de vía aérea, kinesioterapia respiratoria y evaluar soporte ventilatorio (VNI o VM).'
                    : 'Hiperventilación: Calmar ansiedad del paciente o reajustar volumen minuto si está en ventilación mecánica.'}
                </li>
                <li>
                  Toma de muestra de AGA: Técnica de punción radial con jeringa heparinizada, compresión firme durante al menos 5 minutos (10 min en anticoagulados) y transporte inmediato en hielo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ELECTROLITOS Y OSMOLARIDAD */}
      {/* ========================================================= */}
      {subModule === 'electrolitos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Déficit de Sodio (Hiponatremia) */}
          <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Droplets className="w-4 h-4 text-cyan-400" />
                Cálculo del Déficit de Sodio (Hiponatremia)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Fórmula: ACT x (Na deseado - Na actual). Límite de reposición segura: máx 8-10 mEq/24h.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Peso del Paciente (kg):</label>
                  <input
                    type="number"
                    value={electWeight}
                    onChange={(e) => setElectWeight(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Perfil / ACT:</label>
                  <select
                    value={electGender}
                    onChange={(e) => setElectGender(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white text-xs"
                  >
                    <option value="male">Hombre Adulto (60% ACT)</option>
                    <option value="female">Mujer Adulta (50% ACT)</option>
                    <option value="elderlyMale">Adulto Mayor Varón (50% ACT)</option>
                    <option value="elderlyFemale">Adulto Mayor Mujer (45% ACT)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Na+ Actual (mEq/L):</label>
                  <input
                    type="number"
                    value={currentNa}
                    onChange={(e) => setCurrentNa(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Na+ Meta (mEq/L):</label>
                  <input
                    type="number"
                    value={targetNa}
                    onChange={(e) => setTargetNa(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Déficit Total de Sodio:</span>
                  <span className="text-2xl font-bold font-mono text-cyan-400">
                    {naDeficitMeq > 0 ? naDeficitMeq.toFixed(1) : 0} mEq
                  </span>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <span>Agua Corporal Total:</span>
                  <strong className="block text-white font-mono">{actTotalLiters.toFixed(1)} Litros</strong>
                </div>
              </div>

              <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded-lg text-[11px] text-rose-300">
                ⚠️ <strong>Alerta Neurológica:</strong> No aumentar más de 8 a 10 mEq/L en las primeras 24 horas para prevenir la Mielinolisis Pontina Central.
              </div>
            </div>
          </div>

          {/* Card 2: Calcio Corregido por Albúmina & Potasio por pH */}
          <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-400" />
                Calcio Corregido por Albúmina (Payne)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Fórmula: Calcio Medido + 0.8 x (4.0 - Albúmina Sérica).
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1">Calcio Medido (mg/dL):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={measuredCa}
                    onChange={(e) => setMeasuredCa(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1">Albúmina Sérica (g/dL):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={measuredAlbumin}
                    onChange={(e) => setMeasuredAlbumin(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-white font-mono"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Calcio Corregido Real:</span>
                  <span
                    className={`text-2xl font-bold font-mono ${
                      correctedCalcium < 8.5 ? 'text-amber-400' : correctedCalcium > 10.5 ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {correctedCalcium.toFixed(2)} mg/dL
                  </span>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <span>Rango Normal:</span>
                  <strong className="block text-white">8.5 - 10.5 mg/dL</strong>
                </div>
              </div>

              {/* Osmolaridad Efectiva */}
              <div className="pt-2 border-t border-slate-800">
                <span className="font-semibold text-teal-300 block mb-1.5">Osmolaridad Sérica Efectiva (Tonicidad):</span>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">Sodio (mEq/L):</label>
                    <input
                      type="number"
                      value={osmNa}
                      onChange={(e) => setOsmNa(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-1.5 text-white font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 block text-[11px] mb-1">Glucosa (mg/dL):</label>
                    <input
                      type="number"
                      value={osmGlucose}
                      onChange={(e) => setOsmGlucose(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-1.5 text-white font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 mt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Osmolaridad Efectiva:</span>
                  <span className="font-mono font-bold text-teal-300">
                    {effectiveOsm.toFixed(1)} mOsm / kg (normal 275-295)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
