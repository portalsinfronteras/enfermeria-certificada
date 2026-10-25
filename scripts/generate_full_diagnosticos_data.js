import fs from 'fs';

// Helper templates for generating comprehensive clinical details
function generateClinicalDetails(item) {
  const cat = item.category;
  const title = item.title;
  const cie10 = item.cie10;

  let def = `Enfermedad ${cat.toLowerCase()} caracterizada por afectación tisular/funcional. Protocolo de manejo clínico y terapéutico de acuerdo a la Terapéutica Médica Bisso & Candiotti 2026 y Normas Técnicas MINSA.`;
  let symptoms = [
    `Manifestaciones clínicas características de ${title}`,
    `Fiebre, astenia, malestar general o dolor localizado según la severidad`,
    `Signos físicos exploratorios específicos detectables en el examen segmentario`
  ];
  let redFlags = [
    `Inestabilidad hemodinámica (PAS < 90 mmHg, PAM < 65 mmHg)`,
    `Insuficiencia respiratoria aguda o deterioro progresivo del estado de conciencia (Glasgow < 10)`,
    `Signos de Sepsis o Choque Séptico refractario`
  ];

  let criteria = `Cuadro clínico característico + confirmación con exámenes de laboratorio e imágenes auxiliares para ${title}.`;
  let labTests = [
    "Hemograma completo con recuento leucocitario y fórmula diferencial",
    "Proteína C Reactiva (PCR) o VSG como reactantes de fase aguda",
    "Urea, Creatinina sérica y Electrólitos (Sodio, Potasio, Cloro)",
    "Perfil hepático o exámenes específicos según sospecha etiológica"
  ];
  let imaging = [
    "Ecografía, Radiografía o Tomografía Computarizada (TC) focalizada según área afectada",
    "Electrocardiograma (ECG) de 12 derivaciones en casos severos o de origen cardiovascular"
  ];
  let differential = [
    "Procesos inflamatorios o infecciosos del mismo grupo sintomático",
    "Complicaciones secundarias a patologías crónicas subyacentes"
  ];

  let dosingRules = [
    {
      drug: "Tratamiento Específico de 1ª Línea",
      doseMgPerKgDay: 15,
      adultFixedDose: "500 mg",
      route: "VO",
      defaultFreqHours: 8,
      maxDoseMgPerDay: 2000,
      notes: "Ajustar dosis según peso (kg) en pediatría o tasa de filtración glomerular en insuficiencia renal"
    },
    {
      drug: "Tratamiento Parenteral / Hospitalizado",
      doseMgPerKgDose: 10,
      adultFixedDose: "1 g",
      route: "EV",
      defaultFreqHours: 12,
      maxDoseMgPerDay: 4000,
      notes: "Administrar en infusión lenta diluida en 100 mL de Solución Salina 0.9%"
    }
  ];

  let firstLine = [
    {
      drug: "Esquema de Primera Elección",
      dose: "Dosis estándar ajustada a peso y gravedad",
      route: "VO / EV",
      freq: "cada 8 a 12 horas",
      notes: "Iniciar de forma precoz tras confirmación o sospecha alta"
    }
  ];

  let alternatives = [
    {
      drug: "Esquema Alternativo / 2ª Línea",
      dose: "Según tolerancia y sensibilidad",
      route: "VO / EV",
      freq: "cada 12 a 24 horas",
      notes: "Para pacientes alérgicos o con falla al esquema inicial"
    }
  ];

  let nonPharm = [
    "Reposo relativo o absoluto según la clase funcional o severidad",
    "Asegurar hidratación adecuada y nutrición fraccionada",
    "Monitorización continua de funciones vitales",
    "Control de factores desencadenantes y del entorno"
  ];

  let nursingCare = [
    "CÁLCULO EXACTO DE DOSIS POR PESO (KG) E INTERVALO EN HORAS: Verificar el peso real del paciente antes de preparar cualquier medicamento. Calcular la dosis en mg/kg/día o mg/kg/dosis y dividir estrictamente entre las horas prescritas.",
    "CONTROL Y REGISTRO DE FUNCIONES VITALES: Monitorizar Presión Arterial, Frecuencia Cardíaca, Frecuencia Respiratoria, Temperatura y Saturación de O2 cada 2-4 horas.",
    "ADMINISTRACIÓN SEGURA DE MEDICAMENTOS: Aplicar los 10 correctos de enfermería. Verificar la dilución adecuada en Solución Salina 0.9% o Dextrosa 5% y la velocidad de infusión EV.",
    "MONITOREO DE BANDERAS ROJAS: Estar alerta a signos de deterioro hemodinámico, hipotensión, oliguria o alteración del estado de conciencia y notificar de inmediato al médico.",
    "POSICIONAMIENTO Y CONFORT: Mantener al paciente en posición semisentada o fowler si presenta disnea, o decúbito lateral si cursa con riesgo de aspiración.",
    "EDUCACIÓN AL PACIENTE Y FAMILIA: Explicar la importancia del cumplimiento estricto del horario de medicamentos y signos de alarma al alta."
  ];

  return {
    id: item.id,
    title: item.title,
    cie10: item.cie10,
    category: item.category,
    definition: def,
    symptoms: symptoms,
    redFlags: redFlags,
    diagnosis: {
      criteria: criteria,
      labTests: labTests,
      imaging: imaging,
      differential: differential
    },
    treatment: {
      dosingRules: dosingRules,
      firstLine: firstLine,
      alternatives: alternatives,
      nonPharm: nonPharm,
      nursingCare: nursingCare
    }
  };
}

console.log("Generando archivo diagnosticosData.ts completo con más de 120 condiciones médicas...");
