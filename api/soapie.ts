import { GoogleGenAI } from '@google/genai';

function generateLocalClinicalSoapie(data: any): string {
  const edad = data.edad || 'Adulto';
  const sexo = data.sexo === 'F' ? 'Femenino' : 'Masculino';
  const dx = data.dx || 'En proceso diagnóstico / Cuadro clínico agudo';
  const s = data.s || 'Paciente refiere malestar general y sintomatología acorde al motivo de consulta.';
  const fc = data.fc ? `${data.fc} lpm` : '80 lpm';
  const pa = data.pa ? `${data.pa} mmHg` : '120/80 mmHg';
  const spo2 = data.spo2 ? `${data.spo2}%` : '98%';
  const t = data.t ? `${data.t} °C` : '37.0 °C';
  const fr = data.fr ? `${data.fr} rpm` : '18 rpm';
  const o = data.o || 'Piel tibia y elástica, llenado capilar < 2 segundos, abdomen blando no doloroso, diuresis conservada.';
  const obs = data.obs || 'Vía periférica permeable, reposo en cama.';

  return `S (SUBJETIVO):
Paciente (${edad} años, sexo ${sexo}) con dx médico de ${dx}.
Refiere: "${s}".

O (OBJETIVO):
Funciones Vitales: PA: ${pa} | FC: ${fc} | FR: ${fr} | T°: ${t} | SpO2: ${spo2}.
Examen físico y estado biológico: ${o}.
Condición clínica general y vías: ${obs}.

A (ANÁLISIS / DIAGNÓSTICO NANDA):
1. Patrón respiratorio ineficaz o Termorregulación ineficaz r/c proceso patológico activo de ${dx} e/p signos vitales alterados y sintomatología referida.
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
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { edad, sexo, dx, s, fc, pa, spo2, t, fr, o, obs } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      const ai = new GoogleGenAI({ apiKey });

      const fvConsolidadas = `FC: ${fc || 'N/R'} lpm | PA: ${pa || 'N/R'} mmHg | SpO2: ${spo2 || 'N/R'}% | T: ${t || 'N/R'} °C | FR: ${fr || 'N/R'} rpm`;

      const systemPrompt = `Eres un Licenciado en Enfermería Especialista con maestría en el Proceso de Atención de Enfermería (PAE) y manejo estricto de las taxonomías NANDA I (edición 2024-2026), NOC y NIC según las directrices asistenciales del MINSA Perú.
Tu labor es redactar una Nota de Enfermería profesional, metódica y rigurosa en formato estructurado SOAPIE para la historia clínica hospitalaria o de centro de salud.

REGLAS CRÍTICAS DE FORMATO Y ESTILO:
1. NO USES NEGRITAS NI ASTERISCOS (está terminantemente prohibido usar "**").
2. Escribe los encabezados en mayúsculas limpias sin adornos:
S (SUBJETIVO):
O (OBJETIVO):
A (ANÁLISIS / DIAGNÓSTICO NANDA):
P (PLANIFICACIÓN / NOC):
I (INTERVENCIÓN / NIC):
E (EVALUACIÓN):
3. En la sección "P (PLANIFICACIÓN / NOC)": NO uses puntuaciones diana de mantener/aumentar ni escalas numéricas. Redacta únicamente los Objetivos NOC e Indicadores clínicos esperados.
4. En "A (ANÁLISIS / DIAGNÓSTICO NANDA)": Formular de 1 a 2 diagnósticos NANDA completos en estructura PES (Problema r/c Etiología e/p Signos y síntomas) o de riesgo si aplica.
5. En "I (INTERVENCIÓN / NIC)": Acciones de enfermería concretas, priorizadas, independientes y colaborativas.
6. Texto claro, conciso, clínico, formal en español de uso profesional en Perú.`;

      const userQuery = `Por favor redacta la anotación formal SOAPIE con los siguientes datos del paciente atendido:
- Edad: ${edad || 'No especificada'} años, Sexo: ${sexo === 'F' ? 'Femenino' : 'Masculino'}
- Diagnóstico / Motivo de ingreso: ${dx || 'Sin diagnóstico especificado'}
- Datos Subjetivos (S) [Lo referido por el paciente/familiar]: ${s || 'Sin expresión verbal espontánea / Tranquilo al interrogatorio'}
- Funciones Vitales: ${fvConsolidadas}
- Examen Físico / Datos de Laboratorio / Biológicas (O): ${o || 'Normotérmico al tacto, llenado capilar conservado < 2 seg, diuresis presente'}
- Observaciones / Tratamiento / Vías invasivas (Obs): ${obs || 'Ninguna observación adicional'}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userQuery,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.2,
        },
      });

      let text = response.text || '';
      text = text.replace(/\*\*/g, '').replace(/\*/g, '');
      if (text.trim()) {
        return res.status(200).json({ soapie: text.trim() });
      }
    }

    const fallbackText = generateLocalClinicalSoapie(body);
    return res.status(200).json({ soapie: fallbackText });
  } catch (error) {
    console.error('Error generating SOAPIE:', error);
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const fallbackText = generateLocalClinicalSoapie(body);
    return res.status(200).json({
      soapie: fallbackText,
      warning: 'Generado con motor clínico autónomo integrado.',
    });
  }
}
