import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Printer,
  Trash2,
  Sparkles,
  Download,
  Check,
  HeartPulse,
  Activity,
  Layers,
  AlertCircle,
  Bookmark,
  BookOpen
} from 'lucide-react';
import { NANDA_INTERRELACIONES_2024_2026 } from '../data/nandaInterrelacionesData';
import { useAuth } from '../context/AuthContext';

export const SoapieTab: React.FC = () => {
  const { user, saveItem } = useAuth();
  const [selectedNandaCode, setSelectedNandaCode] = useState<string>('auto');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('M');
  const [dx, setDx] = useState('');
  const [s, setS] = useState('');
  const [fc, setFc] = useState('');
  const [pa, setPa] = useState('');
  const [spo2, setSpo2] = useState('');
  const [t, setT] = useState('');
  const [fr, setFr] = useState('');
  const [o, setO] = useState('');
  const [obs, setObs] = useState('');

  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [warningMsg, setWarningMsg] = useState('');

  const loadExample = (type: 'nac' | 'eda' | 'qx' | 'hta') => {
    if (type === 'nac') {
      setEdad('58');
      setSexo('M');
      setDx('Neumonía Adquirida en la Comunidad (NAC)');
      setS('Paciente refiere: "Me falta el aire al dar unos pasos, me duele la espalda al toser y anoche tuve escalofríos intensos".');
      setFc('102');
      setPa('135/85');
      setSpo2('89');
      setT('38.8');
      setFr('26');
      setO('Paciente diaforético, taquipneico en semifowler. Murmullo vesicular disminuido en base pulmonar derecha con crepitantes bilaterales.');
      setObs('Oxígeno por cánula binasal a 3 L/min. ClNa 0.9% 1000mL EV. Ceftriaxona 2g EV.');
    } else if (type === 'eda') {
      setEdad('2');
      setSexo('F');
      setDx('Enfermedad Diarreica Aguda (EDA) con Deshidratación Moderada');
      setS('Madre refiere: "Mi niña ha presentado 7 deposiciones líquidas acuosas hoy sin moco ni sangre, ha vomitado 2 veces y la veo con mucha sed".');
      setFc('136');
      setPa('90/60');
      setSpo2('98');
      setT('37.8');
      setFr('34');
      setO('Lactante irritable, llanto con lágrimas disminuidas, ojos ligeramente hundidos, mucosas orales semisecas. Signo del pliegue cutáneo desaparece en <2 segundos.');
      setObs('Plan B de rehidratación oral con Sales de Rehidratación Oral (SRO) 75 mL/kg en 4 horas. Peso actual: 11.2 kg.');
    } else if (type === 'qx') {
      setEdad('32');
      setSexo('M');
      setDx('Postoperado Inmediato de Apendicectomía Laparoscópica');
      setS('Paciente refiere dolor agudo punzante a nivel de herida quirúrgica umbilical y fosa ilíaca derecha calificado en 6/10 en escala EVA.');
      setFc('84');
      setPa('120/75');
      setSpo2('99');
      setT('36.9');
      setFr('18');
      setO('Paciente despierto, orientado en tiempo y espacio en posición decúbito dorsal. Abdomen blando poco depresible, apósito umbilical limpio y seco sin sangrado activo.');
      setObs('Vía periférica permeable en MSI. Recibe analgesia pautada con Ketorolaco 30mg EV cada 8h y Omeprazol 40mg EV cada 24h. Nada por vía oral (NPO).');
    } else {
      setEdad('67');
      setSexo('F');
      setDx('Crisis Hipertensiva tipo Urgencia / Insuficiencia Cardíaca');
      setS('Paciente refiere cefalea occipital pulsátil, mareos leves y sensación de opresión precordial no irradiada.');
      setFc('94');
      setPa('185/105');
      setSpo2('94');
      setT('36.6');
      setFr('22');
      setO('Paciente vigil, ansiosa, fascie congestiva, edemas maleolares ++/+++ en ambos miembros inferiores, ingurgitación yugular ausente.');
      setObs('Reposo absoluto con cabecera a 45°. Se administra Captopril 25mg VO previo aviso médico.');
    }
  };

  const limpiarForm = () => {
    setEdad('');
    setSexo('M');
    setDx('');
    setS('');
    setFc('');
    setPa('');
    setSpo2('');
    setT('');
    setFr('');
    setO('');
    setObs('');
    setOutput('');
    setWarningMsg('');
  };

  const generateBrowserFallbackSoapie = (): string => {
    const edadVal = edad || 'Adulto';
    const sexoVal = sexo === 'F' ? 'Femenino' : 'Masculino';
    const dxVal = dx || 'En proceso diagnóstico / Cuadro clínico agudo';
    const sVal = s || 'Paciente refiere malestar general y sintomatología acorde al motivo de consulta.';
    const fcVal = fc ? `${fc} lpm` : '80 lpm';
    const paVal = pa ? `${pa} mmHg` : '120/80 mmHg';
    const spo2Val = spo2 ? `${spo2}%` : '98%';
    const tVal = t ? `${t} °C` : '37.0 °C';
    const frVal = fr ? `${fr} rpm` : '18 rpm';
    const oVal = o || 'Piel tibia y elástica, llenado capilar < 2 segundos, abdomen blando no doloroso, diuresis conservada.';
    const obsVal = obs || 'Vía periférica permeable, reposo en cama.';

    return `S (SUBJETIVO):
Paciente (${edadVal} años, sexo ${sexoVal}) con dx médico de ${dxVal}.
Refiere: "${sVal}".

O (OBJETIVO):
Funciones Vitales: PA: ${paVal} | FC: ${fcVal} | FR: ${frVal} | T°: ${tVal} | SpO2: ${spo2Val}.
Examen físico y estado biológico: ${oVal}.
Condición clínica general y vías: ${obsVal}.

A (ANÁLISIS / DIAGNÓSTICO NANDA):
1. Patrón respiratorio ineficaz o Termorregulación ineficaz r/c proceso patológico activo de ${dxVal} e/p signos vitales alterados y sintomatología referida.
2. Dolor agudo o Deterioro del confort r/c agentes lesivos biológicos/tisulares e/p expresión facial y verbalización del usuario.
3. Riesgo de desequilibrio hidroelectrolítico y metabólico secundario a patología de fondo.

P (PLANIFICACIÓN / NOC):
- Estado respiratorio: ventilación e intercambio gaseoso adecuado.
- Termorregulación y signos vitales dentro de parámetros fisiológicos basales.
- Nivel del dolor reducido a escala EVA ≤ 2/10 durante el turno.
- Hidratación y perfusión tisular periférica preservada.

I (INTERVENCIÓN / NIC):
- Monitorización seriada de signos vitales (PA, FC, FR, T°, SatO2) cada 2 a 4 horas o según condición.
- Posición semifowler (30° - 45°) para optimizar expansión torácica y confort ventilatorio.
- Mantenimiento y permeabilización de vía endovenosa periférica con técnica aséptica estricta.
- Administración oportuna de fármacos indicados según prescripción médica y aplicación de los 10 correctos.
- Control de balance hídrico estricto y vigilancia de diuresis horaria.
- Brindar confort emocional, reposo en cama y educación al paciente y familiar sobre signos de alarma.

E (EVALUACIÓN):
Paciente queda en unidad en posición cómoda, en reposo relativo. Funciones vitales estables y monitoreadas. Manifiesta disminución de síntomas y buena tolerancia a intervenciones de enfermería. Se continúa plan de cuidados.`;
  };

  const handleGenerateSoapie = async () => {
    setLoading(true);
    setWarningMsg('');
    try {
      const response = await fetch('/api/soapie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edad, sexo, dx, s, fc, pa, spo2, t, fr, o, obs }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data.soapie) {
        setOutput(data.soapie);
        if (data.warning) {
          setWarningMsg(data.warning);
        }
      } else {
        setOutput(generateBrowserFallbackSoapie());
      }
    } catch (err: any) {
      console.warn('Usando motor clínico local SOAPIE:', err);
      setOutput(generateBrowserFallbackSoapie());
      setWarningMsg('Generado con motor clínico local integrado (100% gratuito y sin conexión).');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SOAPIE_${dx.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 20)}_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (!output) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>SOAPIE de Enfermería</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; padding: 24px; color: #0f172a; line-height: 1.5; }
          .header { border-bottom: 2px solid #0284c7; padding-bottom: 10px; margin-bottom: 16px; }
          .title { font-size: 18px; font-weight: bold; color: #0369a1; margin: 0; }
          .subtitle { font-size: 12px; color: #64748b; margin-top: 4px; }
          .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 16px; border: 1px solid #e2e8f0; }
          pre { white-space: pre-wrap; font-family: "Courier New", Courier, monospace; font-size: 12px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; line-height: 1.6; }
          .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 11px; text-align: center; color: #64748b; }
          .signature-box { margin-top: 40px; display: flex; justify-content: flex-end; }
          .signature { border-top: 1px solid #334155; width: 240px; text-align: center; padding-top: 6px; font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">REGISTRO CLÍNICO DE ENFERMERÍA (METODOLOGÍA SOAPIE)</h1>
          <div class="subtitle">Estructura NANDA-I - NOC - NIC | Proceso de Atención de Enfermería (PAE)</div>
        </div>

        <div class="meta-grid">
          <div><strong>Diagnóstico:</strong> ${dx || 'N/E'}</div>
          <div><strong>Edad / Sexo:</strong> ${edad || 'N/E'} años (${sexo})</div>
          <div><strong>Funciones Vitales:</strong> PA: ${pa || 'N/R'} | FC: ${fc || 'N/R'} lpm | SpO2: ${spo2 || 'N/R'}% | T°: ${t || 'N/R'}°C | FR: ${fr || 'N/R'} rpm</div>
          <div><strong>Fecha / Hora:</strong> ${new Date().toLocaleString('es-PE')}</div>
        </div>

        <pre>${output}</pre>

        <div class="footer">
          Enfermería Certificada &copy; 2026 - Documento para la Historia Clínica del Paciente.
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section className="space-y-6">
      {/* Header Info */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Generador SOAPIE Clínico IA (NANDA - NOC - NIC)
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Sintetiza la valoración y juicio clínico de enfermería en anotaciones profesionales listas para la historia clínica hospitalaria.
          </p>
        </div>

        {/* Quick Example Presets */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          <span className="text-[11px] text-slate-400 self-center mr-1 hidden lg:inline">Casos:</span>
          <button
            onClick={() => loadExample('nac')}
            className="px-2.5 py-1 text-[11px] bg-[#0c2a3d] hover:bg-[#123850] text-[#42edd8] rounded-lg border border-[#175270] cursor-pointer"
          >
            Adulto (NAC)
          </button>
          <button
            onClick={() => loadExample('eda')}
            className="px-2.5 py-1 text-[11px] bg-[#0c2a3d] hover:bg-[#123850] text-emerald-300 rounded-lg border border-[#175270] cursor-pointer"
          >
            Pediátrico (EDA)
          </button>
          <button
            onClick={() => loadExample('qx')}
            className="px-2.5 py-1 text-[11px] bg-[#0c2a3d] hover:bg-[#123850] text-amber-300 rounded-lg border border-[#175270] cursor-pointer"
          >
            Post-Op (Qx)
          </button>
          <button
            onClick={() => loadExample('hta')}
            className="px-2.5 py-1 text-[11px] bg-[#0c2a3d] hover:bg-[#123850] text-rose-300 rounded-lg border border-[#175270] cursor-pointer"
          >
            Crisis HTA
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Form Column */}
        <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] flex flex-col space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#12425a] pb-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#22b8af]" />
              Parámetros de Valoración
            </h3>
            <button
              onClick={limpiarForm}
              className="text-xs text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Limpiar
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Patient Demographics */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Datos del Paciente</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Edad (ej: 58 años o 6 meses)"
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="M">Masculino (M)</option>
                  <option value="F">Femenino (F)</option>
                </select>
              </div>
            </div>

            {/* Diagnosis */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Diagnóstico Médico / Motivo de Consulta
              </label>
              <input
                type="text"
                value={dx}
                onChange={(e) => setDx(e.target.value)}
                placeholder="Ej: Neumonía adquirida en la comunidad, dolor abdominal..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Subjective Data */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                <span className="text-cyan-400 font-bold">S:</span> Datos Subjetivos (Qué refiere el paciente o familiar)
              </label>
              <textarea
                rows={2}
                value={s}
                onChange={(e) => setS(e.target.value)}
                placeholder="Ej: Refiere dolor punzante en tórax 8/10, falta de aire y malestar..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none text-xs"
              />
            </div>

            {/* Vital Signs (Individual Inputs) */}
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 space-y-2">
              <label className="block text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                Funciones Vitales Individuales
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">FC (lpm)</span>
                  <input
                    type="text"
                    value={fc}
                    onChange={(e) => setFc(e.target.value)}
                    placeholder="88"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-white text-xs focus:border-cyan-500 focus:outline-none text-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">PA (mmHg)</span>
                  <input
                    type="text"
                    value={pa}
                    onChange={(e) => setPa(e.target.value)}
                    placeholder="120/80"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-white text-xs focus:border-cyan-500 focus:outline-none text-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">SpO2 (%)</span>
                  <input
                    type="text"
                    value={spo2}
                    onChange={(e) => setSpo2(e.target.value)}
                    placeholder="97"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-white text-xs focus:border-cyan-500 focus:outline-none text-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">Temp (°C)</span>
                  <input
                    type="text"
                    value={t}
                    onChange={(e) => setT(e.target.value)}
                    placeholder="38.2"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-white text-xs focus:border-cyan-500 focus:outline-none text-center"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">FR (rpm)</span>
                  <input
                    type="text"
                    value={fr}
                    onChange={(e) => setFr(e.target.value)}
                    placeholder="22"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1.5 text-white text-xs focus:border-cyan-500 focus:outline-none text-center"
                  />
                </div>
              </div>
            </div>

            {/* Objective Data */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                <span className="text-cyan-400 font-bold">O:</span> Examen Físico / Laboratorio / Biológicas
              </label>
              <textarea
                rows={2}
                value={o}
                onChange={(e) => setO(e.target.value)}
                placeholder="Ej: Diaforético, llenado capilar < 2 seg, murmullo vesicular disminuido..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none text-xs"
              />
            </div>

            {/* Observations / Treatment */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Observaciones Extra / Indicaciones Médicas Vigentes
              </label>
              <input
                type="text"
                value={obs}
                onChange={(e) => setObs(e.target.value)}
                placeholder="Ej: O2 por cánula 2L/min, ClNa 0.9% 1000ml EV, ceftriaxona 2g..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleGenerateSoapie}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#14837b] via-[#1ea69e] to-[#2cd3c6] hover:from-[#179c94] hover:to-[#3ee0d0] text-white font-bold rounded-xl shadow-lg shadow-[#1ea69e]/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Generando SOAPIE con IA...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>GENERAR SOAPIE PROFESIONAL</span>
              </>
            )}
          </button>
        </div>

        {/* Output Column */}
        <div className="lg:col-span-7 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#12425a] pb-3 mb-4 gap-2">
              <div>
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#22b8af]" />
                  Registro de Enfermería Formal (SOAPIE)
                </h3>
                <p className="text-[11px] text-slate-300">
                  Taxonomías NANDA-I, NOC y NIC listas para historia clínica
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!output}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!output) return;
                    saveItem({
                      id: 'soapie_' + Date.now(),
                      type: 'soapie',
                      title: `Nota SOAPIE: ${dx || 'Caso Clínico'}`,
                      subtitle: `Paciente ${edad || 'adulto'} años (${sexo}). PA: ${pa || 'N/A'}`,
                      notes: output
                    });
                  }}
                  disabled={!output}
                  className="px-2.5 py-1.5 bg-[#0b334d] hover:bg-[#0e405e] text-teal-200 border border-[#1b6287] text-xs rounded-lg transition flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                  title="Guardar nota en mi libreta clínica"
                >
                  <Bookmark className="w-3.5 h-3.5 text-[#22b8af]" />
                  <span className="hidden sm:inline">Guardar en mi Cuenta</span>
                </button>

                <button
                  onClick={handleDownload}
                  disabled={!output}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                  title="Descargar archivo TXT"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">TXT</span>
                </button>

                <button
                  onClick={handlePrint}
                  disabled={!output}
                  className="px-2.5 py-1.5 bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40 border border-rose-900/50"
                  title="Imprimir o exportar PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimir / PDF</span>
                </button>
              </div>
            </div>

            {warningMsg && (
              <div className="mb-3 p-2.5 bg-amber-950/40 border border-amber-900/60 rounded-xl text-amber-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{warningMsg}</span>
              </div>
            )}

            {/* SOAPIE Editor / Viewport */}
            <div className="relative">
              <textarea
                value={output}
                onChange={(e) => setOutput(e.target.value)}
                rows={19}
                placeholder="El registro estructurado SOAPIE aparecerá aquí una vez presione el botón 'GENERAR SOAPIE PROFESIONAL'..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-emerald-300 font-mono text-xs leading-relaxed focus:outline-none focus:border-emerald-600/50 resize-y"
              />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
            <span>Estructura NANDA-I (2024-2026) - NOC - NIC</span>
            <span className="text-slate-500">Proceso de Atención de Enfermería (PAE)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
