import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Brain,
  Shield,
  HeartPulse,
  Smile,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Info,
  ChevronRight,
  TrendingUp,
  AlertOctagon
} from 'lucide-react';

type ScaleCategory = 'news2' | 'glasgow_rass' | 'braden_caidas' | 'dolor';

export const EscalasTab: React.FC = () => {
  const [activeScaleTab, setActiveScaleTab] = useState<ScaleCategory>('news2');
  const [copied, setCopied] = useState(false);

  // ==========================================
  // 1. NEWS2 State & Logic
  // ==========================================
  const [newsRespRate, setNewsRespRate] = useState<number>(16);
  const [newsSpo2Scale, setNewsSpo2Scale] = useState<1 | 2>(1); // 1: normal, 2: hipercapnia
  const [newsSpo2, setNewsSpo2] = useState<number>(97);
  const [newsAirOxygen, setNewsAirOxygen] = useState<'air' | 'oxygen'>('air');
  const [newsSystolicBp, setNewsSystolicBp] = useState<number>(120);
  const [newsPulse, setNewsPulse] = useState<number>(76);
  const [newsConsciousness, setNewsConsciousness] = useState<'A' | 'CVPU'>('A');
  const [newsTemp, setNewsTemp] = useState<number>(36.8);

  const calculateNews2 = () => {
    let score = 0;
    // Resp rate
    if (newsRespRate <= 8) score += 3;
    else if (newsRespRate >= 9 && newsRespRate <= 11) score += 1;
    else if (newsRespRate >= 12 && newsRespRate <= 20) score += 0;
    else if (newsRespRate >= 21 && newsRespRate <= 24) score += 2;
    else if (newsRespRate >= 25) score += 3;

    // SpO2
    if (newsSpo2Scale === 1) {
      if (newsSpo2 <= 91) score += 3;
      else if (newsSpo2 >= 92 && newsSpo2 <= 93) score += 2;
      else if (newsSpo2 >= 94 && newsSpo2 <= 95) score += 1;
      else score += 0;
    } else {
      // Scale 2 for COPD / Hypercapnic
      if (newsSpo2 <= 83) score += 3;
      else if (newsSpo2 >= 84 && newsSpo2 <= 85) score += 2;
      else if (newsSpo2 >= 86 && newsSpo2 <= 87) score += 1;
      else if (newsSpo2 >= 88 && newsSpo2 <= 92) score += 0;
      else if (newsSpo2 >= 93 && newsSpo2 <= 94 && newsAirOxygen === 'oxygen') score += 1;
      else if (newsSpo2 >= 95 && newsSpo2 <= 96 && newsAirOxygen === 'oxygen') score += 2;
      else if (newsSpo2 >= 97 && newsAirOxygen === 'oxygen') score += 3;
    }

    // Supplemental Oxygen
    if (newsAirOxygen === 'oxygen') score += 2;

    // Systolic BP
    if (newsSystolicBp <= 90) score += 3;
    else if (newsSystolicBp >= 91 && newsSystolicBp <= 100) score += 2;
    else if (newsSystolicBp >= 101 && newsSystolicBp <= 110) score += 1;
    else if (newsSystolicBp >= 111 && newsSystolicBp <= 219) score += 0;
    else if (newsSystolicBp >= 220) score += 3;

    // Pulse
    if (newsPulse <= 40) score += 3;
    else if (newsPulse >= 41 && newsPulse <= 50) score += 1;
    else if (newsPulse >= 51 && newsPulse <= 90) score += 0;
    else if (newsPulse >= 91 && newsPulse <= 110) score += 1;
    else if (newsPulse >= 111 && newsPulse <= 130) score += 2;
    else if (newsPulse >= 131) score += 3;

    // Consciousness
    if (newsConsciousness === 'CVPU') score += 3;

    // Temp
    if (newsTemp <= 35.0) score += 3;
    else if (newsTemp >= 35.1 && newsTemp <= 36.0) score += 1;
    else if (newsTemp >= 36.1 && newsTemp <= 38.0) score += 0;
    else if (newsTemp >= 38.1 && newsTemp <= 39.0) score += 1;
    else if (newsTemp >= 39.1) score += 2;

    let riskLevel = 'Bajo (Riesgo Leve)';
    let riskColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
    let action = 'Monitoreo de signos vitales cada 12 horas. Continuar plan asistencial rutinario.';

    if (score >= 1 && score <= 4) {
      riskLevel = 'Bajo (Riesgo Bajo)';
      riskColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
      action = 'Monitoreo de signos vitales cada 4 a 6 horas por profesional de enfermería.';
    } else if (score >= 5 && score <= 6) {
      riskLevel = 'Medio (Riesgo Moderado) - Umbral Clave';
      riskColor = 'text-amber-400 bg-amber-950/40 border-amber-500/30';
      action = 'Respuesta urgente: Evaluación médica inmediata en menos de 1 hora. Monitoreo horario continuo y descartar sepsis precoz.';
    } else if (score >= 7) {
      riskLevel = 'ALTO (Alerta Roja / Emergencia Clínica)';
      riskColor = 'text-rose-400 bg-rose-950/50 border-rose-500/50';
      action = 'Activación de Equipo de Respuesta Rápida (MET). Valoración médica emergente inmediata y evaluar transferencia a UCI/UTI.';
    }

    return { score, riskLevel, riskColor, action };
  };

  const newsResult = calculateNews2();

  // ==========================================
  // 2. Neurología: Glasgow, RASS, SAS
  // ==========================================
  const [neuroSubTab, setNeuroSubTab] = useState<'glasgow' | 'rass' | 'sas'>('glasgow');
  const [gcsEye, setGcsEye] = useState<number>(4);
  const [gcsVerbal, setGcsVerbal] = useState<number>(5);
  const [gcsMotor, setGcsMotor] = useState<number>(6);
  const [gcsIsIntubated, setGcsIsIntubated] = useState<boolean>(false);

  const gcsTotal = gcsIsIntubated ? gcsEye + gcsMotor : gcsEye + gcsVerbal + gcsMotor;

  const getGcsSeverity = () => {
    if (gcsTotal >= 13) return { label: 'Traumatismo / Afectación Leve', color: 'text-emerald-400' };
    if (gcsTotal >= 9) return { label: 'Traumatismo / Afectación Moderada', color: 'text-amber-400' };
    return { label: 'Traumatismo Grave (Criterio de Intubación y Vía Aérea)', color: 'text-rose-400' };
  };

  // RASS
  const [rassScore, setRassScore] = useState<number>(0);
  const rassOptions = [
    { score: 4, label: '+4 Combativo', desc: 'Violento, peligro inmediato para el personal y para sí mismo.' },
    { score: 3, label: '+3 Muy agitado', desc: 'Agresivo, se retira tubos o catéteres frecuentemente.' },
    { score: 2, label: '+2 Agitado', desc: 'Movimientos frecuentes y desordenados, lucha con el ventilador.' },
    { score: 1, label: '+1 Inquieto', desc: 'Ansioso, con movimientos pero sin agresividad.' },
    { score: 0, label: '0 Alerta y en calma', desc: 'Despierto, tranquilo, responde adecuadamente.' },
    { score: -1, label: '-1 Somnoliento', desc: 'No está plenamente alerta, pero mantiene contacto visual >10 seg.' },
    { score: -2, label: '-2 Sedación ligera', desc: 'Despierta con la voz, contacto visual <10 segundos.' },
    { score: -3, label: '-3 Sedación moderada', desc: 'Cualquier movimiento a la voz (sin contacto visual).' },
    { score: -4, label: '-4 Sedación profunda', desc: 'No responde a la voz, pero se mueve ante estímulo físico doloroso.' },
    { score: -5, label: '-5 No reactivo / Coma', desc: 'Ninguna respuesta al estímulo físico ni doloroso.' },
  ];

  // SAS (Riker)
  const [sasScore, setSasScore] = useState<number>(4);
  const sasOptions = [
    { score: 7, label: '7 Agitación peligrosa', desc: 'Arranca tubos, intenta salir de cama, golpea al personal.' },
    { score: 6, label: '6 Muy agitado', desc: 'No se calma con la palabra, requiere contención.' },
    { score: 5, label: '5 Agitado', desc: 'Ansioso o con ligera agitación, intenta sentarse pero se calma.' },
    { score: 4, label: '4 Tranquilo y cooperador', desc: 'Alerta o fácil de despertar, obedece órdenes con calma.' },
    { score: 3, label: '3 Sedado', desc: 'Difícil de despertar, despierta a estímulo verbal o físico leve.' },
    { score: 2, label: '2 Muy sedado', desc: 'Responde solo a estímulos físicos vigorosos, no se comunica.' },
    { score: 1, label: '1 Incomunicable', desc: 'Mínimo o ningún movimiento ante estímulo doloroso.' },
  ];

  // ==========================================
  // 3. Braden & Riesgo de Caídas (Downton / Morse)
  // ==========================================
  const [skinSubTab, setSkinSubTab] = useState<'braden' | 'downton' | 'morse'>('braden');

  // Braden Subscales (1-4, except friction 1-3)
  const [bradenSensory, setBradenSensory] = useState<number>(3);
  const [bradenMoisture, setBradenMoisture] = useState<number>(3);
  const [bradenActivity, setBradenActivity] = useState<number>(3);
  const [bradenMobility, setBradenMobility] = useState<number>(3);
  const [bradenNutrition, setBradenNutrition] = useState<number>(3);
  const [bradenFriction, setBradenFriction] = useState<number>(2);

  const bradenTotal =
    bradenSensory + bradenMoisture + bradenActivity + bradenMobility + bradenNutrition + bradenFriction;

  const getBradenRisk = () => {
    if (bradenTotal <= 9) return { level: 'Riesgo Muy Alto (≤ 9)', color: 'text-rose-400 bg-rose-950/40 border-rose-500/40', actions: 'Colchón de presión alternante, cambios posturales estrictos cada 2 horas, protección sacra y taloneras con apósito hidrocelular, ácidos grasos hiperoxigenados (AGHO).' };
    if (bradenTotal <= 12) return { level: 'Riesgo Alto (10 - 12)', color: 'text-orange-400 bg-orange-950/40 border-orange-500/40', actions: 'Cambios posturales cada 2-3 horas, cojín viscoelástico, control estricto de humedad y barrera de óxido de zinc/silicona.' };
    if (bradenTotal <= 14) return { level: 'Riesgo Moderado (13 - 14)', color: 'text-amber-400 bg-amber-950/40 border-amber-500/40', actions: 'Fomentar movilización asistida, lubricación cutánea diaria, evaluar aporte proteico dietético.' };
    if (bradenTotal <= 18) return { level: 'Riesgo Bajo (15 - 18)', color: 'text-lime-400 bg-lime-950/40 border-lime-500/40', actions: 'Estimular deambulación, vigilar puntos de presión en cada turno de enfermería.' };
    return { level: 'Sin Riesgo / Muy Leve (> 18)', color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40', actions: 'Higiene e hidratación habitual. Mantener sábanas limpias y sin arrugas.' };
  };

  // Downton (Caídas)
  const [downtonFalls, setDowntonFalls] = useState<number>(0);
  const [downtonMeds, setDowntonMeds] = useState<number>(0);
  const [downtonSensory, setDowntonSensory] = useState<number>(0);
  const [downtonMental, setDowntonMental] = useState<number>(0);
  const [downtonGait, setDowntonGait] = useState<number>(0);

  const downtonTotal = downtonFalls + downtonMeds + downtonSensory + downtonMental + downtonGait;

  // Morse (Caídas)
  const [morseFalls, setMorseFalls] = useState<number>(0); // 0 or 25
  const [morseSecDiag, setMorseSecDiag] = useState<number>(0); // 0 or 15
  const [morseAmbulatory, setMorseAmbulatory] = useState<number>(0); // 0, 15, 30
  const [morseIv, setMorseIv] = useState<number>(0); // 0 or 20
  const [morseGait, setMorseGait] = useState<number>(0); // 0, 10, 20
  const [morseMental, setMorseMental] = useState<number>(0); // 0 or 15

  const morseTotal = morseFalls + morseSecDiag + morseAmbulatory + morseIv + morseGait + morseMental;

  // ==========================================
  // 4. Dolor Multimodal (EVA/ENA, FLACC, CPOT)
  // ==========================================
  const [painSubTab, setPainSubTab] = useState<'eva' | 'flacc' | 'cpot'>('eva');
  const [evaScore, setEvaScore] = useState<number>(3);

  // FLACC (Pediatría 0-10)
  const [flaccFace, setFlaccFace] = useState<number>(0);
  const [flaccLegs, setFlaccLegs] = useState<number>(0);
  const [flaccActivity, setFlaccActivity] = useState<number>(0);
  const [flaccCry, setFlaccCry] = useState<number>(0);
  const [flaccConsolability, setFlaccConsolability] = useState<number>(0);

  const flaccTotal = flaccFace + flaccLegs + flaccActivity + flaccCry + flaccConsolability;

  // CPOT (Cuidados Críticos / Intubado 0-8)
  const [cpotFacial, setCpotFacial] = useState<number>(0);
  const [cpotBody, setCpotBody] = useState<number>(0);
  const [cpotMuscle, setCpotMuscle] = useState<number>(0);
  const [cpotVentilator, setCpotVentilator] = useState<number>(0);

  const cpotTotal = cpotFacial + cpotBody + cpotMuscle + cpotVentilator;

  const handleCopySummary = () => {
    let summary = `VALORACIÓN CLÍNICA DE ENFERMERÍA\n`;
    if (activeScaleTab === 'news2') {
      summary += `Escala NEWS2: ${newsResult.score} pts - ${newsResult.riskLevel}\nConducta: ${newsResult.action}`;
    } else if (activeScaleTab === 'glasgow_rass') {
      summary += `Glasgow: ${gcsTotal}/15 (O:${gcsEye}, V:${gcsIsIntubated ? 'T' : gcsVerbal}, M:${gcsMotor}) - ${getGcsSeverity().label}\nRASS: ${rassScore}`;
    } else if (activeScaleTab === 'braden_caidas') {
      summary += `Escala Braden: ${bradenTotal}/23 - ${getBradenRisk().level}\nCaídas Downton: ${downtonTotal} pts (${downtonTotal >= 2 ? 'Alto Riesgo' : 'Bajo Riesgo'})`;
    } else {
      summary += `Evaluación de Dolor: EVA ${evaScore}/10 | FLACC: ${flaccTotal}/10 | CPOT: ${cpotTotal}/8`;
    }

    navigator.clipboard.writeText(summary);
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
              Triaje & Valoración Asistencial
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30">
              Algoritmos Clínicos Validados
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#22b8af]" />
            Escalas Clínicas y Triaje Automatizado
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Calculadoras interactivas para detección temprana de deterioro, sedación, UPP, riesgo de caídas y dolor multimodal.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition shadow"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copiado' : 'Copiar Nota'}
          </button>
        </div>
      </div>

      {/* Main Scale Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setActiveScaleTab('news2')}
          className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeScaleTab === 'news2'
              ? 'bg-gradient-to-r from-teal-900/50 to-teal-800/40 border-teal-500 text-white shadow-md'
              : 'bg-[#092233]/80 border-slate-800 text-slate-300 hover:bg-slate-800/60'
          }`}
        >
          <HeartPulse className={`w-5 h-5 ${activeScaleTab === 'news2' ? 'text-teal-400' : 'text-slate-400'}`} />
          <div>
            <span className="text-xs font-bold block">NEWS2 / MEWS</span>
            <span className="text-[10px] text-slate-400">Alerta Temprana</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveScaleTab('glasgow_rass')}
          className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeScaleTab === 'glasgow_rass'
              ? 'bg-gradient-to-r from-teal-900/50 to-teal-800/40 border-teal-500 text-white shadow-md'
              : 'bg-[#092233]/80 border-slate-800 text-slate-300 hover:bg-slate-800/60'
          }`}
        >
          <Brain className={`w-5 h-5 ${activeScaleTab === 'glasgow_rass' ? 'text-teal-400' : 'text-slate-400'}`} />
          <div>
            <span className="text-xs font-bold block">Glasgow / RASS / SAS</span>
            <span className="text-[10px] text-slate-400">Neurología & UCI</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveScaleTab('braden_caidas')}
          className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeScaleTab === 'braden_caidas'
              ? 'bg-gradient-to-r from-teal-900/50 to-teal-800/40 border-teal-500 text-white shadow-md'
              : 'bg-[#092233]/80 border-slate-800 text-slate-300 hover:bg-slate-800/60'
          }`}
        >
          <Shield className={`w-5 h-5 ${activeScaleTab === 'braden_caidas' ? 'text-teal-400' : 'text-slate-400'}`} />
          <div>
            <span className="text-xs font-bold block">Braden & Caídas</span>
            <span className="text-[10px] text-slate-400">UPP, Downton, Morse</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveScaleTab('dolor')}
          className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-center gap-2.5 ${
            activeScaleTab === 'dolor'
              ? 'bg-gradient-to-r from-teal-900/50 to-teal-800/40 border-teal-500 text-white shadow-md'
              : 'bg-[#092233]/80 border-slate-800 text-slate-300 hover:bg-slate-800/60'
          }`}
        >
          <Smile className={`w-5 h-5 ${activeScaleTab === 'dolor' ? 'text-teal-400' : 'text-slate-400'}`} />
          <div>
            <span className="text-xs font-bold block">Dolor Multimodal</span>
            <span className="text-[10px] text-slate-400">EVA, FLACC, CPOT</span>
          </div>
        </button>
      </div>

      {/* ========================================================= */}
      {/* 1. NEWS2 TAB CONTENT */}
      {/* ========================================================= */}
      {activeScaleTab === 'news2' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-rose-400" />
                  National Early Warning Score 2 (NEWS2)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Algoritmo internacional de estratificación de riesgo y detección precoz de sepsis y colapso hemodinámico.
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-teal-950 text-teal-300 border border-teal-800">
                Puntaje: {newsResult.score} pts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Resp Rate */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">Frecuencia Respiratoria</span>
                  <span className="font-mono text-cyan-400 font-bold">{newsRespRate} rpm</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="40"
                  value={newsRespRate}
                  onChange={(e) => setNewsRespRate(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>≤8 (3p)</span>
                  <span>12-20 (0p)</span>
                  <span>≥25 (3p)</span>
                </div>
              </div>

              {/* SpO2 */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">Saturación SpO2</span>
                  <span className="font-mono text-cyan-400 font-bold">{newsSpo2}%</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="100"
                  value={newsSpo2}
                  onChange={(e) => setNewsSpo2(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex items-center gap-2 text-[11px] pt-1">
                  <button
                    type="button"
                    onClick={() => setNewsSpo2Scale(1)}
                    className={`px-2 py-0.5 rounded text-[10px] ${newsSpo2Scale === 1 ? 'bg-cyan-700 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Escala 1 (Estándar)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewsSpo2Scale(2)}
                    className={`px-2 py-0.5 rounded text-[10px] ${newsSpo2Scale === 2 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Escala 2 (EPOC / Hipercapnia)
                  </button>
                </div>
              </div>

              {/* Oxígeno Suplementario */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-200 block">Oxígeno Suplementario</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setNewsAirOxygen('air')}
                    className={`py-1.5 rounded-lg border font-medium ${newsAirOxygen === 'air' ? 'bg-teal-900/60 border-teal-500 text-white' : 'border-slate-800 text-slate-400'}`}
                  >
                    Aire Ambiente (0p)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewsAirOxygen('oxygen')}
                    className={`py-1.5 rounded-lg border font-medium ${newsAirOxygen === 'oxygen' ? 'bg-rose-900/60 border-rose-500 text-white' : 'border-slate-800 text-slate-400'}`}
                  >
                    Con Oxígeno (+2p)
                  </button>
                </div>
              </div>

              {/* Presión Arterial Sistólica */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">Presión Arterial Sistólica</span>
                  <span className="font-mono text-cyan-400 font-bold">{newsSystolicBp} mmHg</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="240"
                  value={newsSystolicBp}
                  onChange={(e) => setNewsSystolicBp(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>≤90 (3p)</span>
                  <span>111-219 (0p)</span>
                  <span>≥220 (3p)</span>
                </div>
              </div>

              {/* Frecuencia Cardíaca */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">Frecuencia Cardíaca (Pulso)</span>
                  <span className="font-mono text-cyan-400 font-bold">{newsPulse} lpm</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="160"
                  value={newsPulse}
                  onChange={(e) => setNewsPulse(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>≤40 (3p)</span>
                  <span>51-90 (0p)</span>
                  <span>≥131 (3p)</span>
                </div>
              </div>

              {/* Nivel de Conciencia (AVPU) */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-200 block">Nivel de Conciencia (AVPU)</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setNewsConsciousness('A')}
                    className={`py-1.5 rounded-lg border font-medium ${newsConsciousness === 'A' ? 'bg-teal-900/60 border-teal-500 text-white' : 'border-slate-800 text-slate-400'}`}
                  >
                    Alerta (0p)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewsConsciousness('CVPU')}
                    className={`py-1.5 rounded-lg border font-medium ${newsConsciousness === 'CVPU' ? 'bg-rose-900/60 border-rose-500 text-white' : 'border-slate-800 text-slate-400'}`}
                  >
                    Confuso / Voz / Dolor (+3p)
                  </button>
                </div>
              </div>

              {/* Temperatura */}
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 sm:col-span-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">Temperatura Axilar</span>
                  <span className="font-mono text-cyan-400 font-bold">{newsTemp.toFixed(1)} °C</span>
                </div>
                <input
                  type="range"
                  min="34.0"
                  max="41.0"
                  step="0.1"
                  value={newsTemp}
                  onChange={(e) => setNewsTemp(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>≤35.0 (3p)</span>
                  <span>36.1 - 38.0 (0p)</span>
                  <span>≥39.1 (2p)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#092233]/90 border border-[#12425a] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="text-center pb-2 border-b border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Puntuación Total NEWS2</span>
                <span className="text-4xl font-extrabold text-white font-mono">{newsResult.score}</span>
                <span className="text-xs text-slate-400 block mt-1">puntos acumulados</span>
              </div>

              <div className={`p-3.5 rounded-xl border ${newsResult.riskColor} space-y-1.5`}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-xs uppercase tracking-wider">{newsResult.riskLevel}</span>
                </div>
                <p className="text-xs leading-relaxed">{newsResult.action}</p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-300">
                <span className="font-bold text-teal-400 block text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Protocolo de Alerta Temprana en Piso:
                </span>
                <ul className="space-y-1 text-[11px] text-slate-400 list-disc list-inside">
                  <li>Puntaje individual de 3 en un solo parámetro requiere aviso médico inmediato.</li>
                  <li>Descartar sepsis en todo paciente con deterioro súbito (qSOFA: Glasgow &lt; 15, FR ≥ 22, PAS ≤ 100).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. GLASGOW / RASS / SAS TAB CONTENT */}
      {/* ========================================================= */}
      {activeScaleTab === 'glasgow_rass' && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            <button
              type="button"
              onClick={() => setNeuroSubTab('glasgow')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${neuroSubTab === 'glasgow' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala de Coma de Glasgow (GCS)
            </button>
            <button
              type="button"
              onClick={() => setNeuroSubTab('rass')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${neuroSubTab === 'rass' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala de RASS (Agitación-Sedación UCI)
            </button>
            <button
              type="button"
              onClick={() => setNeuroSubTab('sas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${neuroSubTab === 'sas' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala SAS de Riker
            </button>
          </div>

          {neuroSubTab === 'glasgow' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    Valoración Glasgow Desglosada
                  </h3>
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={gcsIsIntubated}
                      onChange={(e) => setGcsIsIntubated(e.target.checked)}
                      className="rounded accent-teal-400"
                    />
                    <span>Paciente Intubado / Tubo endotraqueal (T)</span>
                  </label>
                </div>

                {/* Apertura Ocular */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                    1. Apertura Ocular (O) - Máx 4 pts
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { pts: 4, label: 'Espontánea (4)' },
                      { pts: 3, label: 'Al sonido / voz (3)' },
                      { pts: 2, label: 'Al estímulo doloroso (2)' },
                      { pts: 1, label: 'Ninguna respuesta (1)' },
                    ].map((opt) => (
                      <button
                        key={opt.pts}
                        type="button"
                        onClick={() => setGcsEye(opt.pts)}
                        className={`p-2.5 rounded-xl border text-center transition ${gcsEye === opt.pts ? 'bg-teal-900/60 border-teal-400 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Respuesta Verbal */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                    2. Respuesta Verbal (V) - Máx 5 pts
                  </span>
                  {gcsIsIntubated ? (
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-300 font-mono">
                      [T] Paciente Intubado / Afasia anatómica (No evaluable verbalmente)
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
                      {[
                        { pts: 5, label: 'Orientado y conversa (5)' },
                        { pts: 4, label: 'Desorientado / Confuso (4)' },
                        { pts: 3, label: 'Palabras inapropiadas (3)' },
                        { pts: 2, label: 'Sonidos incomprensibles (2)' },
                        { pts: 1, label: 'Ninguna respuesta (1)' },
                      ].map((opt) => (
                        <button
                          key={opt.pts}
                          type="button"
                          onClick={() => setGcsVerbal(opt.pts)}
                          className={`p-2.5 rounded-xl border text-center transition ${gcsVerbal === opt.pts ? 'bg-teal-900/60 border-teal-400 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Respuesta Motora */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wide">
                    3. Respuesta Motora (M) - Máx 6 pts
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      { pts: 6, label: 'Obedece órdenes (6)' },
                      { pts: 5, label: 'Localiza el dolor (5)' },
                      { pts: 4, label: 'Retirada al dolor (4)' },
                      { pts: 3, label: 'Flexión anormal (Decorticación) (3)' },
                      { pts: 2, label: 'Extensión anormal (Descerebración) (2)' },
                      { pts: 1, label: 'Ninguna respuesta / Flacidez (1)' },
                    ].map((opt) => (
                      <button
                        key={opt.pts}
                        type="button"
                        onClick={() => setGcsMotor(opt.pts)}
                        className={`p-2.5 rounded-xl border text-center transition ${gcsMotor === opt.pts ? 'bg-teal-900/60 border-teal-400 text-white font-bold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* GCS Result Card */}
              <div className="lg:col-span-4 bg-[#092233]/90 border border-[#12425a] rounded-2xl p-5 shadow-xl space-y-4">
                <div className="text-center pb-2 border-b border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Puntaje Total Glasgow</span>
                  <div className="text-4xl font-extrabold text-white font-mono">
                    {gcsTotal} <span className="text-base font-normal text-slate-400">/ 15</span>
                  </div>
                  <div className="text-xs text-teal-300 font-mono mt-1">
                    (O: {gcsEye} + V: {gcsIsIntubated ? 'T' : gcsVerbal} + M: {gcsMotor})
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className={`text-xs font-bold block ${getGcsSeverity().color}`}>
                    {getGcsSeverity().label}
                  </span>
                  {gcsTotal <= 8 && (
                    <div className="p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg text-xs text-rose-300 font-medium">
                      ⚠️ Glasgow ≤ 8: Pérdida de reflejos protectores de la vía aérea. Criterio de intubación endotraqueal inmediata.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {neuroSubTab === 'rass' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala RASS de Richmond (-5 a +4)</h3>
                <span className="text-xs font-mono px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  Puntaje RASS: {rassScore > 0 ? `+${rassScore}` : rassScore}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {rassOptions.map((opt) => (
                  <button
                    key={opt.score}
                    type="button"
                    onClick={() => setRassScore(opt.score)}
                    className={`p-3 rounded-xl border text-left transition flex items-start gap-2.5 ${
                      rassScore === opt.score
                        ? 'bg-teal-950 border-teal-400 shadow-md ring-1 ring-teal-400/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <span className="font-mono font-bold text-xs text-teal-300 shrink-0 w-8">
                      {opt.score > 0 ? `+${opt.score}` : opt.score}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-400 leading-tight block mt-0.5">{opt.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {neuroSubTab === 'sas' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala SAS de Riker (1 a 7)</h3>
                <span className="text-xs font-mono px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  Puntaje SAS: {sasScore}
                </span>
              </div>
              <div className="space-y-2">
                {sasOptions.map((opt) => (
                  <button
                    key={opt.score}
                    type="button"
                    onClick={() => setSasScore(opt.score)}
                    className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                      sasScore === opt.score
                        ? 'bg-teal-950 border-teal-400 shadow-md ring-1 ring-teal-400/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </div>
                    <span className="text-sm font-bold font-mono text-cyan-400">{opt.score}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. BRADEN & CAÍDAS TAB CONTENT */}
      {/* ========================================================= */}
      {activeScaleTab === 'braden_caidas' && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            <button
              type="button"
              onClick={() => setSkinSubTab('braden')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${skinSubTab === 'braden' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala de Braden (Riesgo de UPP)
            </button>
            <button
              type="button"
              onClick={() => setSkinSubTab('downton')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${skinSubTab === 'downton' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala de Downton (Caídas)
            </button>
            <button
              type="button"
              onClick={() => setSkinSubTab('morse')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${skinSubTab === 'morse' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              Escala de Morse (Caídas en Piso)
            </button>
          </div>

          {skinSubTab === 'braden' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-400" />
                    Valoración de Braden (6 Subescalas)
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800">
                    Total: {bradenTotal} / 23 pts
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Percepción sensorial */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">1. Percepción Sensorial</label>
                    <select
                      value={bradenSensory}
                      onChange={(e) => setBradenSensory(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Completamente limitada</option>
                      <option value={2}>2. Muy limitada</option>
                      <option value={3}>3. Ligeramente limitada</option>
                      <option value={4}>4. Sin limitaciones</option>
                    </select>
                  </div>

                  {/* Humedad */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">2. Exposición a la Humedad</label>
                    <select
                      value={bradenMoisture}
                      onChange={(e) => setBradenMoisture(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Constantemente húmeda</option>
                      <option value={2}>2. Muy húmeda</option>
                      <option value={3}>3. Ocasionalmente húmeda</option>
                      <option value={4}>4. Raramente húmeda</option>
                    </select>
                  </div>

                  {/* Actividad */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">3. Actividad Física</label>
                    <select
                      value={bradenActivity}
                      onChange={(e) => setBradenActivity(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Encamado</option>
                      <option value={2}>2. En silla</option>
                      <option value={3}>3. Deambula ocasionalmente</option>
                      <option value={4}>4. Deambula frecuentemente</option>
                    </select>
                  </div>

                  {/* Movilidad */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">4. Movilidad Corporal</label>
                    <select
                      value={bradenMobility}
                      onChange={(e) => setBradenMobility(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Totalmente inmóvil</option>
                      <option value={2}>2. Muy limitada</option>
                      <option value={3}>3. Ligeramente limitada</option>
                      <option value={4}>4. Sin limitaciones</option>
                    </select>
                  </div>

                  {/* Nutrición */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">5. Patrón Nutricional</label>
                    <select
                      value={bradenNutrition}
                      onChange={(e) => setBradenNutrition(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Muy pobre</option>
                      <option value={2}>2. Probablemente inadecuada</option>
                      <option value={3}>3. Adecuada</option>
                      <option value={4}>4. Excelente</option>
                    </select>
                  </div>

                  {/* Fricción y Cizallamiento */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5">
                    <label className="font-semibold text-slate-200 block">6. Fricción y Cizallamiento</label>
                    <select
                      value={bradenFriction}
                      onChange={(e) => setBradenFriction(parseInt(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white"
                    >
                      <option value={1}>1. Problema constante</option>
                      <option value={2}>2. Problema potencial</option>
                      <option value={3}>3. No existe problema aparente</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Braden Result */}
              <div className="lg:col-span-4 bg-[#092233]/90 border border-[#12425a] rounded-2xl p-5 shadow-xl space-y-4">
                <div className="text-center pb-2 border-b border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Puntuación Total Braden</span>
                  <div className="text-4xl font-extrabold text-white font-mono">{bradenTotal}</div>
                  <span className="text-xs text-slate-400 block mt-1">sobre 23 puntos</span>
                </div>

                <div className={`p-3.5 rounded-xl border ${getBradenRisk().color} space-y-1.5`}>
                  <span className="font-bold text-xs uppercase tracking-wider block">{getBradenRisk().level}</span>
                  <p className="text-xs leading-relaxed">{getBradenRisk().actions}</p>
                </div>
              </div>
            </div>
          )}

          {skinSubTab === 'downton' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala de Downton (Riesgo de Caídas)</h3>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${downtonTotal >= 2 ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-emerald-950 text-emerald-300 border-emerald-800'}`}>
                  {downtonTotal} pts - {downtonTotal >= 2 ? 'ALTO RIESGO (≥2)' : 'BAJO RIESGO'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Caídas Previas</label>
                  <select value={downtonFalls} onChange={(e) => setDowntonFalls(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>No (0)</option>
                    <option value={1}>Sí, en los últimos 12 meses (1)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Medicamentos de Riesgo</label>
                  <select value={downtonMeds} onChange={(e) => setDowntonMeds(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Ninguno (0)</option>
                    <option value={1}>Sedantes, diuréticos, hipotensores, etc. (1)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Déficits Sensoriales</label>
                  <select value={downtonSensory} onChange={(e) => setDowntonSensory(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Ninguno (0)</option>
                    <option value={1}>Visuales, auditivos o extremidades (1)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Estado Mental</label>
                  <select value={downtonMental} onChange={(e) => setDowntonMental(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Orientado (0)</option>
                    <option value={1}>Confuso / Deterioro cognitivo (1)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 sm:col-span-2">
                  <label className="font-semibold text-slate-200 block mb-1">Deambulación</label>
                  <select value={downtonGait} onChange={(e) => setDowntonGait(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Normal / Encamado (0)</option>
                    <option value={1}>Insegura / Con ayuda de bastón/andador (1)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {skinSubTab === 'morse' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala de Caídas de Morse</h3>
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${morseTotal >= 45 ? 'bg-rose-950 text-rose-300 border-rose-800' : morseTotal >= 25 ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-emerald-950 text-emerald-300 border-emerald-800'}`}>
                  {morseTotal} pts - {morseTotal >= 45 ? 'ALTO RIESGO (≥45)' : morseTotal >= 25 ? 'RIESGO MEDIO' : 'BAJO RIESGO'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Historia de Caídas</label>
                  <select value={morseFalls} onChange={(e) => setMorseFalls(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>No (0)</option>
                    <option value={25}>Sí (25)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Diagnóstico Secundario</label>
                  <select value={morseSecDiag} onChange={(e) => setMorseSecDiag(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>No (0)</option>
                    <option value={15}>Sí (15)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Ayuda para Deambular</label>
                  <select value={morseAmbulatory} onChange={(e) => setMorseAmbulatory(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Ninguna / Reposo en cama / Enfermero (0)</option>
                    <option value={15}>Muletas / Bastón / Andador (15)</option>
                    <option value={30}>Se apoya en muebles (30)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Vía Venosa / Heparina</label>
                  <select value={morseIv} onChange={(e) => setMorseIv(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>No (0)</option>
                    <option value={20}>Sí (20)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Marcha / Traslado</label>
                  <select value={morseGait} onChange={(e) => setMorseGait(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Normal / Encamado (0)</option>
                    <option value={10}>Débil (10)</option>
                    <option value={20}>Alterada / Inestable (20)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Estado Mental</label>
                  <select value={morseMental} onChange={(e) => setMorseMental(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>Consciente de sus capacidades (0)</option>
                    <option value={15}>Olvida limitaciones (15)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. DOLOR MULTIMODAL TAB CONTENT */}
      {/* ========================================================= */}
      {activeScaleTab === 'dolor' && (
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            <button
              type="button"
              onClick={() => setPainSubTab('eva')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${painSubTab === 'eva' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              EVA / ENA (Adultos y Colaboradores)
            </button>
            <button
              type="button"
              onClick={() => setPainSubTab('flacc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${painSubTab === 'flacc' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              FLACC (Pediatría / Lactantes)
            </button>
            <button
              type="button"
              onClick={() => setPainSubTab('cpot')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${painSubTab === 'cpot' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400'}`}
            >
              CPOT (Críticos / No Comunicativos / VM)
            </button>
          </div>

          {painSubTab === 'eva' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4 text-center">
              <h3 className="text-sm font-bold text-white">Escala Visual Analógica / Numérica del Dolor</h3>
              <div className="flex items-center justify-center gap-3">
                <span className="text-5xl font-extrabold text-teal-300 font-mono">{evaScore}</span>
                <span className="text-xs text-slate-400">/ 10 puntos</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={evaScore}
                onChange={(e) => setEvaScore(parseInt(e.target.value))}
                className="w-full max-w-xl mx-auto accent-teal-400 cursor-pointer"
              />
              <div className="flex justify-between max-w-xl mx-auto text-xs text-slate-400">
                <span>0: Sin dolor</span>
                <span>1-3: Dolor Leve</span>
                <span>4-6: Dolor Moderado</span>
                <span>7-10: Dolor Severo</span>
              </div>
            </div>
          )}

          {painSubTab === 'flacc' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala FLACC Pediátrica (0 - 10)</h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  FLACC Total: {flaccTotal} / 10
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Cara (Face)</label>
                  <select value={flaccFace} onChange={(e) => setFlaccFace(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Expresión relajada o sonrisa</option>
                    <option value={1}>1. Mueca ocasional o ceño fruncido</option>
                    <option value={2}>2. Temblor de mentón o ceño constante</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Piernas (Legs)</label>
                  <select value={flaccLegs} onChange={(e) => setFlaccLegs(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Posición normal o relajadas</option>
                    <option value={1}>1. Inquietas, tensas o flexionadas</option>
                    <option value={2}>2. Pataleo o rigidez marcada</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Actividad (Activity)</label>
                  <select value={flaccActivity} onChange={(e) => setFlaccActivity(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Acostado tranquilo o normal</option>
                    <option value={1}>1. Se retuerce, cambia de posición</option>
                    <option value={2}>2. Arqueado, rígido o con sacudidas</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">Llanto (Cry)</label>
                  <select value={flaccCry} onChange={(e) => setFlaccCry(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. No llora</option>
                    <option value={1}>1. Gemidos o quejidos ocasionales</option>
                    <option value={2}>2. Llanto continuo, gritos o sollozos</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 sm:col-span-2 lg:col-span-1">
                  <label className="font-semibold text-slate-200 block mb-1">Consolabilidad</label>
                  <select value={flaccConsolability} onChange={(e) => setFlaccConsolability(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Contento o relajado</option>
                    <option value={1}>1. Se tranquiliza al hablarle o tocarle</option>
                    <option value={2}>2. Muy difícil de consolar</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {painSubTab === 'cpot' && (
            <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-white">Escala CPOT (Critical-Care Pain Observation Tool)</h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  CPOT Total: {cpotTotal} / 8 pts ({cpotTotal >= 3 ? 'Dolor Significativo' : 'Dolor Controlado'})
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">1. Expresión Facial</label>
                  <select value={cpotFacial} onChange={(e) => setCpotFacial(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Relajada, neutra</option>
                    <option value={1}>1. Tensa (ceño fruncido)</option>
                    <option value={2}>2. Con mueca de dolor (ojos cerrados fuertemente)</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">2. Movimientos Corporales</label>
                  <select value={cpotBody} onChange={(e) => setCpotBody(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Ausencia de movimientos o posición normal</option>
                    <option value={1}>1. Protección o movimientos lentos</option>
                    <option value={2}>2. Inquietud / agitación / tirar de tubos</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">3. Tensión Muscular (Flexión pasiva)</label>
                  <select value={cpotMuscle} onChange={(e) => setCpotMuscle(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Relajado (sin resistencia)</option>
                    <option value={1}>1. Tenso o rígido</option>
                    <option value={2}>2. Muy tenso o espasmos severos</option>
                  </select>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <label className="font-semibold text-slate-200 block mb-1">4. Adaptación a VM / Vocalización</label>
                  <select value={cpotVentilator} onChange={(e) => setCpotVentilator(parseInt(e.target.value))} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-white">
                    <option value={0}>0. Tolerando ventilador / Habla con tono normal</option>
                    <option value={1}>1. Tos pero se adapta / Suspiros o quejidos</option>
                    <option value={2}>2. Lucha con el ventilador / Llanto o grito</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
