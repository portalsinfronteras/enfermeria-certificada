/**
 * BASE DE DATOS DE INTERRELACIONES NANDA - NOC - NIC (2024 - 2026)
 * Taxonomía NANDA-I 2024-2026 • NOC 6ta/7ma Edición • NIC 7ma/8va Edición
 * Enfermería Certificada — Lic. Miguel Pantoja A.
 * Contiene los 205 Diagnósticos Oficiales de Enfermería con sus interrelaciones completas.
 */

export interface NocIndicatorItem {
  code: string;
  label: string;
}

export interface NocLinkItem {
  code: string;
  label: string;
  definition: string;
  page?: number;
  targetScore: string;
  scaleDescription: string;
  indicators: string[];
}

export interface NicLinkItem {
  code: string;
  label: string;
  definition: string;
  priority: 'Prioritaria' | 'Sugerida';
  activities: string[];
}

export interface NandaInterrelationItem {
  id: string;
  code: string;
  label: string;
  domain: string;
  domainNumber: number;
  classType: string;
  classNumber: number;
  type: 'Focalizado en el problema' | 'De riesgo' | 'De promoción de la salud' | 'De síndrome';
  definition: string;
  relatedFactors: string[];
  definingCharacteristics: string[];
  riskPopulations: string[];
  associatedConditions: string[];
  nocList: NocLinkItem[];
  nicList: NicLinkItem[];
}

export const NANDA_INTERRELACIONES_2024_2026: NandaInterrelationItem[] = [
  {
    "id": "nanda_00004",
    "code": "00004",
    "label": "Riesgo de infección",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 1: Infección",
    "classNumber": 1,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar infección, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 482,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 482,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00007",
    "code": "00007",
    "label": "Hipertermia",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por hipertermia, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 677,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 677,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00008",
    "code": "00008",
    "label": "Termorregulación ineficaz",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por termorregulación ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 652,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 652,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00010",
    "code": "00010",
    "label": "Riesgo de disreflexia autónoma",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 3: Estrés neurocomportamental",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar disreflexia autónoma, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 448,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 448,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00016",
    "code": "00016",
    "label": "Deterioro de la eliminación urinaria",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la eliminación urinaria, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 150,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 150,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00017",
    "code": "00017",
    "label": "Incontinencia urinaria de esfuerzo",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por incontinencia urinaria de esfuerzo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 161,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 161,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00019",
    "code": "00019",
    "label": "Incontinencia urinaria de urgencia",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por incontinencia urinaria de urgencia, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 164,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 164,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00026",
    "code": "00026",
    "label": "Volumen de líquidos excesivo",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por volumen de líquidos excesivo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 744,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 744,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00031",
    "code": "00031",
    "label": "Limpieza ineficaz de las vías aéreas",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por limpieza ineficaz de las vías aéreas, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 578,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 578,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00032",
    "code": "00032",
    "label": "Patrón de respiración ineficaz",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 4: Función respiratoria",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por patrón de respiración ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 252,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 252,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00033",
    "code": "00033",
    "label": "Deterioro de la ventilación espontánea",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 4: Función respiratoria",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la ventilación espontánea, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 256,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 256,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00039",
    "code": "00039",
    "label": "Riesgo de aspiración",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar aspiración, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 575,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 575,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00042",
    "code": "00042",
    "label": "Riesgo de reacción alérgica al látex",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 5: Procesos defensivos",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar reacción alérgica al látex, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 649,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 649,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00044",
    "code": "00044",
    "label": "Deterioro de la integridad tisular",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la integridad tisular, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 534,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 534,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00045",
    "code": "00045",
    "label": "Deterioro de la integridad de la mucosa oral",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la integridad de la mucosa oral, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 557,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 557,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00046",
    "code": "00046",
    "label": "Deterioro de la integridad cutánea",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la integridad cutánea, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 541,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 541,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00047",
    "code": "00047",
    "label": "Riesgo de deterioro de la integridad cutánea",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la integridad cutánea, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 547,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 547,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00051",
    "code": "00051",
    "label": "Deterioro de la comunicación verbal",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 5: Comunicación",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la comunicación verbal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 329,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 329,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00052",
    "code": "00052",
    "label": "Deterioro de la interacción social",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 3: Desempeño del rol",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la interacción social, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 384,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 384,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00068",
    "code": "00068",
    "label": "Disposición para mejorar el bienestar espiritual",
    "domain": "Dominio 10: Principios vitales",
    "domainNumber": 10,
    "classType": "Clase 1: Valores",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el bienestar espiritual, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "2001",
        "label": "Salud espiritual",
        "definition": "Conexión con el yo, con los demás, con un ser superior, con la naturaleza o con el universo.",
        "page": 469,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "200101 Expresión de confianza y esperanza",
          "200102 Sentimiento de paz interior",
          "200104 Conexión con los demás para compartir pensamientos y sentimientos"
        ]
      },
      {
        "code": "1614",
        "label": "Autonomía personal",
        "definition": "Acciones personales de un individuo competente para ordenar su vida y tomar decisiones según valores propios.",
        "page": 469,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "161401 Expresa valores y creencias personales",
          "161403 Toma decisiones independientes sobre el tratamiento",
          "161408 Manifiesta congruencia ética"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5420",
        "label": "Facilitar el crecimiento espiritual",
        "definition": "Facilitación del crecimiento en la capacidad del paciente para identificarse y conectarse con el significado de la vida.",
        "priority": "Prioritaria",
        "activities": [
          "Estar abierto a las expresiones de soledad e impotencia del paciente.",
          "Animar al paciente a revisar su vida pasada y concentrarse en los sucesos y relaciones que aportaron fuerza espiritual.",
          "Facilitar las prácticas religiosas y la visita de líderes espirituales elegidos por el paciente."
        ]
      },
      {
        "code": "5260",
        "label": "Cuidados en la agonía",
        "definition": "Fomento del confort físico y de la paz psicológica y espiritual en la fase final de la vida.",
        "priority": "Sugerida",
        "activities": [
          "Maximizar el confort físico mediante control estricto del dolor y disnea.",
          "Facilitar la presencia continua de seres queridos.",
          "Respetar los deseos anticipados y voluntades del paciente y familia."
        ]
      }
    ]
  },
  {
    "id": "nanda_00085",
    "code": "00085",
    "label": "Deterioro de la movilidad física",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la movilidad física, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 192,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 192,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00087",
    "code": "00087",
    "label": "Riesgo de lesión postural perioperatoria",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión postural perioperatoria, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 503,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 503,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00089",
    "code": "00089",
    "label": "Deterioro de la movilidad en silla de ruedas",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la movilidad en silla de ruedas, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 202,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 202,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00091",
    "code": "00091",
    "label": "Deterioro de la movilidad en la cama",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la movilidad en la cama, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 199,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 199,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00103",
    "code": "00103",
    "label": "Deterioro de la deglución",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 2: Digestión",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la deglución, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 106,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 106,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00128",
    "code": "00128",
    "label": "Confusión aguda",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por confusión aguda, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 299,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 299,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00129",
    "code": "00129",
    "label": "Confusión crónica",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por confusión crónica, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 302,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 302,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00131",
    "code": "00131",
    "label": "Deterioro de la memoria",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la memoria, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 318,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 318,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00132",
    "code": "00132",
    "label": "Dolor agudo",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dolor agudo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 692,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 692,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00133",
    "code": "00133",
    "label": "Dolor crónico",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dolor crónico, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 699,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 699,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00138",
    "code": "00138",
    "label": "Riesgo de violencia dirigida a otros",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 3: Violencia",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar violencia dirigida a otros, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 614,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 614,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00141",
    "code": "00141",
    "label": "Síndrome postraumático",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 1: Respuestas postraumáticas",
    "classNumber": 1,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 404,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 404,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00156",
    "code": "00156",
    "label": "Riesgo de muerte súbita del lactante",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar muerte súbita del lactante, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 608,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 608,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00167",
    "code": "00167",
    "label": "Disposición para mejorar el autoconcepto",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el autoconcepto, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 333,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 333,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00169",
    "code": "00169",
    "label": "Deterioro de la religiosidad",
    "domain": "Dominio 10: Principios vitales",
    "domainNumber": 10,
    "classType": "Clase 2: Creencias",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la religiosidad, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2001",
        "label": "Salud espiritual",
        "definition": "Conexión con el yo, con los demás, con un ser superior, con la naturaleza o con el universo.",
        "page": 472,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "200101 Expresión de confianza y esperanza",
          "200102 Sentimiento de paz interior",
          "200104 Conexión con los demás para compartir pensamientos y sentimientos"
        ]
      },
      {
        "code": "1614",
        "label": "Autonomía personal",
        "definition": "Acciones personales de un individuo competente para ordenar su vida y tomar decisiones según valores propios.",
        "page": 472,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "161401 Expresa valores y creencias personales",
          "161403 Toma decisiones independientes sobre el tratamiento",
          "161408 Manifiesta congruencia ética"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5420",
        "label": "Facilitar el crecimiento espiritual",
        "definition": "Facilitación del crecimiento en la capacidad del paciente para identificarse y conectarse con el significado de la vida.",
        "priority": "Prioritaria",
        "activities": [
          "Estar abierto a las expresiones de soledad e impotencia del paciente.",
          "Animar al paciente a revisar su vida pasada y concentrarse en los sucesos y relaciones que aportaron fuerza espiritual.",
          "Facilitar las prácticas religiosas y la visita de líderes espirituales elegidos por el paciente."
        ]
      },
      {
        "code": "5260",
        "label": "Cuidados en la agonía",
        "definition": "Fomento del confort físico y de la paz psicológica y espiritual en la fase final de la vida.",
        "priority": "Sugerida",
        "activities": [
          "Maximizar el confort físico mediante control estricto del dolor y disnea.",
          "Facilitar la presencia continua de seres queridos.",
          "Respetar los deseos anticipados y voluntades del paciente y familia."
        ]
      }
    ]
  },
  {
    "id": "nanda_00171",
    "code": "00171",
    "label": "Disposición para mejorar la religiosidad",
    "domain": "Dominio 10: Principios vitales",
    "domainNumber": 10,
    "classType": "Clase 2: Creencias",
    "classNumber": 2,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la religiosidad, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "2001",
        "label": "Salud espiritual",
        "definition": "Conexión con el yo, con los demás, con un ser superior, con la naturaleza o con el universo.",
        "page": 475,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "200101 Expresión de confianza y esperanza",
          "200102 Sentimiento de paz interior",
          "200104 Conexión con los demás para compartir pensamientos y sentimientos"
        ]
      },
      {
        "code": "1614",
        "label": "Autonomía personal",
        "definition": "Acciones personales de un individuo competente para ordenar su vida y tomar decisiones según valores propios.",
        "page": 475,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "161401 Expresa valores y creencias personales",
          "161403 Toma decisiones independientes sobre el tratamiento",
          "161408 Manifiesta congruencia ética"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5420",
        "label": "Facilitar el crecimiento espiritual",
        "definition": "Facilitación del crecimiento en la capacidad del paciente para identificarse y conectarse con el significado de la vida.",
        "priority": "Prioritaria",
        "activities": [
          "Estar abierto a las expresiones de soledad e impotencia del paciente.",
          "Animar al paciente a revisar su vida pasada y concentrarse en los sucesos y relaciones que aportaron fuerza espiritual.",
          "Facilitar las prácticas religiosas y la visita de líderes espirituales elegidos por el paciente."
        ]
      },
      {
        "code": "5260",
        "label": "Cuidados en la agonía",
        "definition": "Fomento del confort físico y de la paz psicológica y espiritual en la fase final de la vida.",
        "priority": "Sugerida",
        "activities": [
          "Maximizar el confort físico mediante control estricto del dolor y disnea.",
          "Facilitar la presencia continua de seres queridos.",
          "Respetar los deseos anticipados y voluntades del paciente y familia."
        ]
      }
    ]
  },
  {
    "id": "nanda_00175",
    "code": "00175",
    "label": "Sufrimiento moral",
    "domain": "Dominio 10: Principios vitales",
    "domainNumber": 10,
    "classType": "Clase 3: Congruencia de valores y acciones",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por sufrimiento moral, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2001",
        "label": "Salud espiritual",
        "definition": "Conexión con el yo, con los demás, con un ser superior, con la naturaleza o con el universo.",
        "page": 462,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "200101 Expresión de confianza y esperanza",
          "200102 Sentimiento de paz interior",
          "200104 Conexión con los demás para compartir pensamientos y sentimientos"
        ]
      },
      {
        "code": "1614",
        "label": "Autonomía personal",
        "definition": "Acciones personales de un individuo competente para ordenar su vida y tomar decisiones según valores propios.",
        "page": 462,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "161401 Expresa valores y creencias personales",
          "161403 Toma decisiones independientes sobre el tratamiento",
          "161408 Manifiesta congruencia ética"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5420",
        "label": "Facilitar el crecimiento espiritual",
        "definition": "Facilitación del crecimiento en la capacidad del paciente para identificarse y conectarse con el significado de la vida.",
        "priority": "Prioritaria",
        "activities": [
          "Estar abierto a las expresiones de soledad e impotencia del paciente.",
          "Animar al paciente a revisar su vida pasada y concentrarse en los sucesos y relaciones que aportaron fuerza espiritual.",
          "Facilitar las prácticas religiosas y la visita de líderes espirituales elegidos por el paciente."
        ]
      },
      {
        "code": "5260",
        "label": "Cuidados en la agonía",
        "definition": "Fomento del confort físico y de la paz psicológica y espiritual en la fase final de la vida.",
        "priority": "Sugerida",
        "activities": [
          "Maximizar el confort físico mediante control estricto del dolor y disnea.",
          "Facilitar la presencia continua de seres queridos.",
          "Respetar los deseos anticipados y voluntades del paciente y familia."
        ]
      }
    ]
  },
  {
    "id": "nanda_00181",
    "code": "00181",
    "label": "Contaminación",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 4: Peligros del entorno",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por contaminación, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 631,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 631,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00184",
    "code": "00184",
    "label": "Disposición para mejorar la toma de decisiones",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la toma de decisiones, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 324,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 324,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00185",
    "code": "00185",
    "label": "Disposición para mejorar la esperanza",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la esperanza, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 433,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 433,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00194",
    "code": "00194",
    "label": "Hiperbilirrubinemia neonatal",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 4: Metabolismo",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por hiperbilirrubinemia neonatal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 111,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 111,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00201",
    "code": "00201",
    "label": "Riesgo de perfusión tisular cerebral ineficaz",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar perfusión tisular cerebral ineficaz, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 242,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 242,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00204",
    "code": "00204",
    "label": "Perfusión tisular periférica ineficaz",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por perfusión tisular periférica ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 245,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 245,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00205",
    "code": "00205",
    "label": "Riesgo de shock",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar shock, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 588,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 588,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00208",
    "code": "00208",
    "label": "Disposición para mejorar el proceso de maternidad",
    "domain": "Dominio 8: Sexualidad",
    "domainNumber": 8,
    "classType": "Clase 3: Reproducción",
    "classNumber": 3,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el proceso de maternidad, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "0119",
        "label": "Funcionamiento sexual",
        "definition": "Integración de los aspectos físicos, socioemocionales e intelectuales de la expresión sexual.",
        "page": 392,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "011901 Expresa comodidad con la sexualidad",
          "011903 Expresa capacidad para la intimidad",
          "011910 Adaptación a las limitaciones físicas"
        ]
      },
      {
        "code": "2510",
        "label": "Estado materno: puerperio",
        "definition": "Grado en que el bienestar físico y emocional materno se restablece tras el parto.",
        "page": 392,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "251001 Involución uterina adecuada",
          "251005 Cantidad de loquios esperada",
          "251016 Vínculo afectivo con el recién nacido"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5248",
        "label": "Asesoramiento sexual",
        "definition": "Utilización de un proceso de ayuda interactivo centrado en la necesidad de realizar ajustes en la práctica sexual.",
        "priority": "Prioritaria",
        "activities": [
          "Establecer una relación terapéutica basada en la confianza y el respeto.",
          "Informar al paciente al principio de la relación sobre los efectos de la enfermedad/medicación en la sexualidad.",
          "Proporcionar información tranquilizadora y basada en la evidencia."
        ]
      },
      {
        "code": "6930",
        "label": "Cuidados de postparto",
        "definition": "Vigilancia y ayuda para el bienestar físico y psicológico de la madre y del recién nacido.",
        "priority": "Sugerida",
        "activities": [
          "Monitorizar signos vitales, involución uterina y características de los loquios.",
          "Evaluar el estado del periné o herida quirúrgica y controlar el dolor.",
          "Promover el apego temprano y apoyar el inicio exitoso de la lactancia materna."
        ]
      }
    ]
  },
  {
    "id": "nanda_00210",
    "code": "00210",
    "label": "Deterioro de la resiliencia",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la resiliencia, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 427,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 427,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00212",
    "code": "00212",
    "label": "Disposición para mejorar la resiliencia",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la resiliencia, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 430,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 430,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00217",
    "code": "00217",
    "label": "Riesgo de reacción alérgica",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 5: Procesos defensivos",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar reacción alérgica, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 646,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 646,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00219",
    "code": "00219",
    "label": "Riesgo de ojo seco",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar ojo seco, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 500,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 500,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00221",
    "code": "00221",
    "label": "Proceso de maternidad ineficaz",
    "domain": "Dominio 8: Sexualidad",
    "domainNumber": 8,
    "classType": "Clase 3: Reproducción",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por proceso de maternidad ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0119",
        "label": "Funcionamiento sexual",
        "definition": "Integración de los aspectos físicos, socioemocionales e intelectuales de la expresión sexual.",
        "page": 387,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "011901 Expresa comodidad con la sexualidad",
          "011903 Expresa capacidad para la intimidad",
          "011910 Adaptación a las limitaciones físicas"
        ]
      },
      {
        "code": "2510",
        "label": "Estado materno: puerperio",
        "definition": "Grado en que el bienestar físico y emocional materno se restablece tras el parto.",
        "page": 387,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "251001 Involución uterina adecuada",
          "251005 Cantidad de loquios esperada",
          "251016 Vínculo afectivo con el recién nacido"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5248",
        "label": "Asesoramiento sexual",
        "definition": "Utilización de un proceso de ayuda interactivo centrado en la necesidad de realizar ajustes en la práctica sexual.",
        "priority": "Prioritaria",
        "activities": [
          "Establecer una relación terapéutica basada en la confianza y el respeto.",
          "Informar al paciente al principio de la relación sobre los efectos de la enfermedad/medicación en la sexualidad.",
          "Proporcionar información tranquilizadora y basada en la evidencia."
        ]
      },
      {
        "code": "6930",
        "label": "Cuidados de postparto",
        "definition": "Vigilancia y ayuda para el bienestar físico y psicológico de la madre y del recién nacido.",
        "priority": "Sugerida",
        "activities": [
          "Monitorizar signos vitales, involución uterina y características de los loquios.",
          "Evaluar el estado del periné o herida quirúrgica y controlar el dolor.",
          "Promover el apego temprano y apoyar el inicio exitoso de la lactancia materna."
        ]
      }
    ]
  },
  {
    "id": "nanda_00222",
    "code": "00222",
    "label": "Control de impulsos ineficaz",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por control de impulsos ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 305,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 305,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00227",
    "code": "00227",
    "label": "Riesgo de proceso de maternidad ineficaz",
    "domain": "Dominio 8: Sexualidad",
    "domainNumber": 8,
    "classType": "Clase 3: Reproducción",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar proceso de maternidad ineficaz, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0119",
        "label": "Funcionamiento sexual",
        "definition": "Integración de los aspectos físicos, socioemocionales e intelectuales de la expresión sexual.",
        "page": 390,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "011901 Expresa comodidad con la sexualidad",
          "011903 Expresa capacidad para la intimidad",
          "011910 Adaptación a las limitaciones físicas"
        ]
      },
      {
        "code": "2510",
        "label": "Estado materno: puerperio",
        "definition": "Grado en que el bienestar físico y emocional materno se restablece tras el parto.",
        "page": 390,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "251001 Involución uterina adecuada",
          "251005 Cantidad de loquios esperada",
          "251016 Vínculo afectivo con el recién nacido"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5248",
        "label": "Asesoramiento sexual",
        "definition": "Utilización de un proceso de ayuda interactivo centrado en la necesidad de realizar ajustes en la práctica sexual.",
        "priority": "Prioritaria",
        "activities": [
          "Establecer una relación terapéutica basada en la confianza y el respeto.",
          "Informar al paciente al principio de la relación sobre los efectos de la enfermedad/medicación en la sexualidad.",
          "Proporcionar información tranquilizadora y basada en la evidencia."
        ]
      },
      {
        "code": "6930",
        "label": "Cuidados de postparto",
        "definition": "Vigilancia y ayuda para el bienestar físico y psicológico de la madre y del recién nacido.",
        "priority": "Sugerida",
        "activities": [
          "Monitorizar signos vitales, involución uterina y características de los loquios.",
          "Evaluar el estado del periné o herida quirúrgica y controlar el dolor.",
          "Promover el apego temprano y apoyar el inicio exitoso de la lactancia materna."
        ]
      }
    ]
  },
  {
    "id": "nanda_00228",
    "code": "00228",
    "label": "Riesgo de perfusión tisular periférica ineficaz",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar perfusión tisular periférica ineficaz, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 249,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 249,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00230",
    "code": "00230",
    "label": "Riesgo de hiperbilirrubinemia neonatal",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 4: Metabolismo",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar hiperbilirrubinemia neonatal, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 114,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 114,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00235",
    "code": "00235",
    "label": "Estreñimiento crónico funcional",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 2: Función gastrointestinal",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por estreñimiento crónico funcional, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 173,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 173,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00240",
    "code": "00240",
    "label": "Riesgo de disminución del gasto cardíaco",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar disminución del gasto cardíaco, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 238,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 238,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00241",
    "code": "00241",
    "label": "Deterioro de la regulación del estado de ánimo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la regulación del estado de ánimo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 454,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 454,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00242",
    "code": "00242",
    "label": "Deterioro de la autonomía para la toma de decisiones",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la autonomía para la toma de decisiones, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 326,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 326,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00245",
    "code": "00245",
    "label": "Riesgo de lesión corneal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión corneal, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 497,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 497,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00247",
    "code": "00247",
    "label": "Riesgo de deterioro de la integridad de la mucosa oral",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la integridad de la mucosa oral, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 561,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 561,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00248",
    "code": "00248",
    "label": "Riesgo de deterioro de la integridad tisular",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la integridad tisular, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 538,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 538,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00250",
    "code": "00250",
    "label": "Riesgo de lesión en el tracto urinario",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión en el tracto urinario, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 531,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 531,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00255",
    "code": "00255",
    "label": "Síndrome de dolor crónico",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 695,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 695,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00256",
    "code": "00256",
    "label": "Dolor de parto",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dolor de parto, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 703,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 703,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00258",
    "code": "00258",
    "label": "Síndrome agudo de abstinencia de sustancias",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 3: Estrés neurocomportamental",
    "classNumber": 3,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 457,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 457,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00259",
    "code": "00259",
    "label": "Riesgo de síndrome agudo de abstinencia de sustancias",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 3: Estrés neurocomportamental",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar síndrome agudo de abstinencia de sustancias, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 460,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 460,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00269",
    "code": "00269",
    "label": "Dinámica de alimentación del adolescente ineficaz",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dinámica de alimentación del adolescente ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 103,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 103,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00270",
    "code": "00270",
    "label": "Dinámica de alimentación del preescolar y escolar ineficaz",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dinámica de alimentación del preescolar y escolar ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 100,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 100,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00271",
    "code": "00271",
    "label": "Dinámica de alimentación del lactante ineficaz",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por dinámica de alimentación del lactante ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 97,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 97,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00272",
    "code": "00272",
    "label": "Riesgo de mutilación genital femenina",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 3: Violencia",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar mutilación genital femenina, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 617,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 617,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00274",
    "code": "00274",
    "label": "Riesgo de termorregulación ineficaz",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar termorregulación ineficaz, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 656,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 656,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00277",
    "code": "00277",
    "label": "Autogestión del ojo seco ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión del ojo seco ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 18,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 18,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00278",
    "code": "00278",
    "label": "Autogestión del linfedema ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión del linfedema ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 31,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 31,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00285",
    "code": "00285",
    "label": "Disposición para mejorar el duelo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el duelo, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 429,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 429,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00286",
    "code": "00286",
    "label": "Riesgo de lesión por presión en niños(as)",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión por presión en niños(as), que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 519,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 519,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00287",
    "code": "00287",
    "label": "Lesión por presión en neonatos",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por lesión por presión en neonatos, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 507,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 507,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00288",
    "code": "00288",
    "label": "Riesgo de lesión por presión en neonatos",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión por presión en neonatos, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 511,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 511,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00290",
    "code": "00290",
    "label": "Riesgo de intento de fuga",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 4: Peligros del entorno",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar intento de fuga, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 611,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 611,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00291",
    "code": "00291",
    "label": "Riesgo de trombosis",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar trombosis, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 601,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 601,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00292",
    "code": "00292",
    "label": "Conductas ineficaces de mantenimiento de la salud",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conductas ineficaces de mantenimiento de la salud, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 52,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 52,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00295",
    "code": "00295",
    "label": "Respuesta ineficaz de succión y deglución del lactante",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 2: Digestión",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por respuesta ineficaz de succión y deglución del lactante, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 741,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 741,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00297",
    "code": "00297",
    "label": "Incontinencia urinaria asociada a discapacidad",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por incontinencia urinaria asociada a discapacidad, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 155,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 155,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00298",
    "code": "00298",
    "label": "Disminución de la tolerancia a la actividad",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la tolerancia a la actividad, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 217,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 217,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00300",
    "code": "00300",
    "label": "Conductas de mantenimiento del hogar ineficaces",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conductas de mantenimiento del hogar ineficaces, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 56,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 56,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00301",
    "code": "00301",
    "label": "Duelo desadaptativo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por duelo desadaptativo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 426,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 426,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00303",
    "code": "00303",
    "label": "Riesgo de caídas en adultos",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar caídas en adultos, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 570,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 570,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00304",
    "code": "00304",
    "label": "Riesgo de lesión por presión en adultos",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión por presión en adultos, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 527,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 527,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00306",
    "code": "00306",
    "label": "Riesgo de caídas en niños(as)",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar caídas en niños(as), que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 565,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 565,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00307",
    "code": "00307",
    "label": "Disposición para mejorar el compromiso de ejercicio",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el compromiso de ejercicio, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 59,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 59,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00310",
    "code": "00310",
    "label": "Incontinencia urinaria mixta",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por incontinencia urinaria mixta, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 158,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 158,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00311",
    "code": "00311",
    "label": "Riesgo de deterioro de la función cardiovascular",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la función cardiovascular, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 231,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 231,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00312",
    "code": "00312",
    "label": "Lesión por presión en adultos",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por lesión por presión en adultos, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 523,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 523,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00313",
    "code": "00313",
    "label": "Lesión por presión en niños(as)",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por lesión por presión en niños(as), confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 515,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 515,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00314",
    "code": "00314",
    "label": "Retraso en el desarrollo infantil",
    "domain": "Dominio 13: Crecimiento/Desarrollo",
    "domainNumber": 13,
    "classType": "Clase 2: Desarrollo",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por retraso en el desarrollo infantil, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0111",
        "label": "Estado de crecimiento",
        "definition": "Grado en que el crecimiento físico de un individuo se sitúa en los percentiles esperados.",
        "page": 725,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "011101 Tasa de ganancia de peso esperada",
          "011102 Tasa de aumento de talla esperada",
          "011105 Perímetro cefálico en percentil normal"
        ]
      },
      {
        "code": "0112",
        "label": "Desarrollo infantil",
        "definition": "Hitos del desarrollo físico, cognitivo y psicosocial alcanzados por el niño.",
        "page": 725,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente retrasado) a 5 (No retrasado)",
        "indicators": [
          "011201 Hitos motores gruesos",
          "011202 Hitos motores finos",
          "011204 Hitos del lenguaje"
        ]
      }
    ],
    "nicList": [
      {
        "code": "8250",
        "label": "Cuidado del desarrollo",
        "definition": "Estructuración del entorno y provisión de cuidados de apoyo a los hitos del neurodesarrollo del niño.",
        "priority": "Prioritaria",
        "activities": [
          "Evaluar periódicamente los hitos motores, sensoriales y de comunicación mediante instrumentos validados (TPED, Denver II).",
          "Fomentar la interacción afectiva cálida entre los cuidadores y el niño.",
          "Proporcionar estímulos visuales, auditivos y táctiles apropiados a la edad madurativa."
        ]
      },
      {
        "code": "6710",
        "label": "Fomento del apego",
        "definition": "Facilitación de la construcción de una relación estrecha entre el progenitor y el recién nacido/niño.",
        "priority": "Sugerida",
        "activities": [
          "Alentar a los padres a sostener, acariciar y hablar al lactante con ternura.",
          "Instruir sobre las señales tempranas de hambre, sueño y sobreestimulación del bebé.",
          "Reforzar las conductas parentales positivas y el contacto piel a piel."
        ]
      }
    ]
  },
  {
    "id": "nanda_00315",
    "code": "00315",
    "label": "Retraso en el desarrollo motor infantil",
    "domain": "Dominio 13: Crecimiento/Desarrollo",
    "domainNumber": 13,
    "classType": "Clase 2: Desarrollo",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por retraso en el desarrollo motor infantil, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0111",
        "label": "Estado de crecimiento",
        "definition": "Grado en que el crecimiento físico de un individuo se sitúa en los percentiles esperados.",
        "page": 86,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "011101 Tasa de ganancia de peso esperada",
          "011102 Tasa de aumento de talla esperada",
          "011105 Perímetro cefálico en percentil normal"
        ]
      },
      {
        "code": "0112",
        "label": "Desarrollo infantil",
        "definition": "Hitos del desarrollo físico, cognitivo y psicosocial alcanzados por el niño.",
        "page": 86,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente retrasado) a 5 (No retrasado)",
        "indicators": [
          "011201 Hitos motores gruesos",
          "011202 Hitos motores finos",
          "011204 Hitos del lenguaje"
        ]
      }
    ],
    "nicList": [
      {
        "code": "8250",
        "label": "Cuidado del desarrollo",
        "definition": "Estructuración del entorno y provisión de cuidados de apoyo a los hitos del neurodesarrollo del niño.",
        "priority": "Prioritaria",
        "activities": [
          "Evaluar periódicamente los hitos motores, sensoriales y de comunicación mediante instrumentos validados (TPED, Denver II).",
          "Fomentar la interacción afectiva cálida entre los cuidadores y el niño.",
          "Proporcionar estímulos visuales, auditivos y táctiles apropiados a la edad madurativa."
        ]
      },
      {
        "code": "6710",
        "label": "Fomento del apego",
        "definition": "Facilitación de la construcción de una relación estrecha entre el progenitor y el recién nacido/niño.",
        "priority": "Sugerida",
        "activities": [
          "Alentar a los padres a sostener, acariciar y hablar al lactante con ternura.",
          "Instruir sobre las señales tempranas de hambre, sueño y sobreestimulación del bebé.",
          "Reforzar las conductas parentales positivas y el contacto piel a piel."
        ]
      }
    ]
  },
  {
    "id": "nanda_00322",
    "code": "00322",
    "label": "Riesgo de retención urinaria",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 1: Función urinaria",
    "classNumber": 1,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar retención urinaria, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 153,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 153,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00323",
    "code": "00323",
    "label": "Conductas ineficaces de higiene del sueño",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 1: Sueño/Reposo",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conductas ineficaces de higiene del sueño, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 188,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 188,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00324",
    "code": "00324",
    "label": "Riesgo de deterioro de la movilidad física",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la movilidad física, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 195,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 195,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00325",
    "code": "00325",
    "label": "Autocompasión inadecuada",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autocompasión inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 435,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 435,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00326",
    "code": "00326",
    "label": "Disminución de la capacidad para bañarse",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 5: Autocuidado",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la capacidad para bañarse, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 274,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 274,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00327",
    "code": "00327",
    "label": "Disminución de la capacidad para vestirse",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 5: Autocuidado",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la capacidad para vestirse, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 277,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 277,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00328",
    "code": "00328",
    "label": "Disminución de la capacidad de alimentación",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la capacidad de alimentación, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 280,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 280,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00329",
    "code": "00329",
    "label": "Disminución de la capacidad para ir al baño",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la capacidad para ir al baño, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 287,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 287,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00330",
    "code": "00330",
    "label": "Disminución de la capacidad de aseo",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 5: Autocuidado",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la capacidad de aseo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 283,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 283,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00331",
    "code": "00331",
    "label": "Síndrome de disminución de la capacidad de autocuidado",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 5: Autocuidado",
    "classNumber": 5,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 267,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 267,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00333",
    "code": "00333",
    "label": "Producción de leche humana inadecuada",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por producción de leche humana inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 93,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 93,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00336",
    "code": "00336",
    "label": "Riesgo de lesión física",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión física, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 488,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 488,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00337",
    "code": "00337",
    "label": "46 Patrón de sueño ineficaz",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 1: Sueño/Reposo",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por 46 patrón de sueño ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 180,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 180,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00338",
    "code": "00338",
    "label": "Autoeficacia en salud inadecuada",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autoeficacia en salud inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 352,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 352,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00339",
    "code": "00339",
    "label": "Alfabetización en salud inadecuada",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 1: Toma de conciencia de la salud",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por alfabetización en salud inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 62,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 62,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00340",
    "code": "00340",
    "label": "Disposición para mejorar el envejecimiento saludable",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el envejecimiento saludable, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 65,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 65,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00341",
    "code": "00341",
    "label": "Disposición para mejorar la identidad social transgénero",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la identidad social transgénero, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 345,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 345,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00342",
    "code": "00342",
    "label": "Síndrome de deterioro del confort al final de la vida",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 689,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 689,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00343",
    "code": "00343",
    "label": "Ingesta nutricional inadecuada",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por ingesta nutricional inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 72,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 72,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00344",
    "code": "00344",
    "label": "Deterioro de la eliminación intestinal",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 2: Función gastrointestinal",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la eliminación intestinal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 170,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 170,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00347",
    "code": "00347",
    "label": "Lactancia exclusiva alterada",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por lactancia exclusiva alterada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 86,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 86,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00348",
    "code": "00348",
    "label": "Retraso en el crecimiento infantil",
    "domain": "Dominio 13: Crecimiento/Desarrollo",
    "domainNumber": 13,
    "classType": "Clase 1: Crecimiento",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por retraso en el crecimiento infantil, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0111",
        "label": "Estado de crecimiento",
        "definition": "Grado en que el crecimiento físico de un individuo se sitúa en los percentiles esperados.",
        "page": 720,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "011101 Tasa de ganancia de peso esperada",
          "011102 Tasa de aumento de talla esperada",
          "011105 Perímetro cefálico en percentil normal"
        ]
      },
      {
        "code": "0112",
        "label": "Desarrollo infantil",
        "definition": "Hitos del desarrollo físico, cognitivo y psicosocial alcanzados por el niño.",
        "page": 720,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente retrasado) a 5 (No retrasado)",
        "indicators": [
          "011201 Hitos motores gruesos",
          "011202 Hitos motores finos",
          "011204 Hitos del lenguaje"
        ]
      }
    ],
    "nicList": [
      {
        "code": "8250",
        "label": "Cuidado del desarrollo",
        "definition": "Estructuración del entorno y provisión de cuidados de apoyo a los hitos del neurodesarrollo del niño.",
        "priority": "Prioritaria",
        "activities": [
          "Evaluar periódicamente los hitos motores, sensoriales y de comunicación mediante instrumentos validados (TPED, Denver II).",
          "Fomentar la interacción afectiva cálida entre los cuidadores y el niño.",
          "Proporcionar estímulos visuales, auditivos y táctiles apropiados a la edad madurativa."
        ]
      },
      {
        "code": "6710",
        "label": "Fomento del apego",
        "definition": "Facilitación de la construcción de una relación estrecha entre el progenitor y el recién nacido/niño.",
        "priority": "Sugerida",
        "activities": [
          "Alentar a los padres a sostener, acariciar y hablar al lactante con ternura.",
          "Instruir sobre las señales tempranas de hambre, sueño y sobreestimulación del bebé.",
          "Reforzar las conductas parentales positivas y el contacto piel a piel."
        ]
      }
    ]
  },
  {
    "id": "nanda_00349",
    "code": "00349",
    "label": "fetal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por fetal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 400,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 400,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00350",
    "code": "00350",
    "label": "Riesgo de lesión por quemadura",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión por quemadura, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 491,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 491,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00351",
    "code": "00351",
    "label": "Riesgo de lesión por frío",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión por frío, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 494,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 494,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00352",
    "code": "00352",
    "label": "Autogestión de la boca seca ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión de la boca seca ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 22,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 22,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00353",
    "code": "00353",
    "label": "Síndrome del anciano frágil",
    "domain": "Dominio 13: Crecimiento/Desarrollo",
    "domainNumber": 13,
    "classType": "Clase 2: Desarrollo",
    "classNumber": 2,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "0111",
        "label": "Estado de crecimiento",
        "definition": "Grado en que el crecimiento físico de un individuo se sitúa en los percentiles esperados.",
        "page": 68,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "011101 Tasa de ganancia de peso esperada",
          "011102 Tasa de aumento de talla esperada",
          "011105 Perímetro cefálico en percentil normal"
        ]
      },
      {
        "code": "0112",
        "label": "Desarrollo infantil",
        "definition": "Hitos del desarrollo físico, cognitivo y psicosocial alcanzados por el niño.",
        "page": 68,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente retrasado) a 5 (No retrasado)",
        "indicators": [
          "011201 Hitos motores gruesos",
          "011202 Hitos motores finos",
          "011204 Hitos del lenguaje"
        ]
      }
    ],
    "nicList": [
      {
        "code": "8250",
        "label": "Cuidado del desarrollo",
        "definition": "Estructuración del entorno y provisión de cuidados de apoyo a los hitos del neurodesarrollo del niño.",
        "priority": "Prioritaria",
        "activities": [
          "Evaluar periódicamente los hitos motores, sensoriales y de comunicación mediante instrumentos validados (TPED, Denver II).",
          "Fomentar la interacción afectiva cálida entre los cuidadores y el niño.",
          "Proporcionar estímulos visuales, auditivos y táctiles apropiados a la edad madurativa."
        ]
      },
      {
        "code": "6710",
        "label": "Fomento del apego",
        "definition": "Facilitación de la construcción de una relación estrecha entre el progenitor y el recién nacido/niño.",
        "priority": "Sugerida",
        "activities": [
          "Alentar a los padres a sostener, acariciar y hablar al lactante con ternura.",
          "Instruir sobre las señales tempranas de hambre, sueño y sobreestimulación del bebé.",
          "Reforzar las conductas parentales positivas y el contacto piel a piel."
        ]
      }
    ]
  },
  {
    "id": "nanda_00356",
    "code": "00356",
    "label": "Gestión de la salud comunitaria ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por gestión de la salud comunitaria ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 11,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 11,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00358",
    "code": "00358",
    "label": "Apoyo social inadecuado",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 3: Desempeño del rol",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por apoyo social inadecuado, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 711,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 711,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00359",
    "code": "00359",
    "label": "Inadecuada ingesta nutricional proteico-energética",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por inadecuada ingesta nutricional proteico-energética, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 78,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 78,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00361",
    "code": "00361",
    "label": "Deterioro de la respuesta inmunitaria",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la respuesta inmunitaria, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 477,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 477,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00362",
    "code": "00362",
    "label": "Riesgo de tensión arterial desequilibrada",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 4: Respuestas cardiovasculares/pulmonares",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar tensión arterial desequilibrada, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 234,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 234,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00363",
    "code": "00363",
    "label": "Deterioro de la capacidad para sentarse",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la capacidad para sentarse, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 205,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 205,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00364",
    "code": "00364",
    "label": "Deterioro de la capacidad de bipedestación",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la capacidad de bipedestación, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 208,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 208,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00365",
    "code": "00365",
    "label": "Deterioro de la capacidad para caminar",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la capacidad para caminar, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 214,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 214,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00366",
    "code": "00366",
    "label": "Carga de cuidados excesiva",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 1: Roles de cuidador",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por carga de cuidados excesiva, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 420,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 420,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00367",
    "code": "00367",
    "label": "Capacidad de transferencia deteriorada",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por capacidad de transferencia deteriorada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 211,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 211,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00370",
    "code": "00370",
    "label": "Riesgo de volumen de líquidos excesivo",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar volumen de líquidos excesivo, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 142,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 142,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00371",
    "code": "00371",
    "label": "Lactancia ineficaz",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por lactancia ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 82,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 82,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00372",
    "code": "00372",
    "label": "Regulación ineficaz de las emociones",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por regulación ineficaz de las emociones, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 451,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 451,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00373",
    "code": "00373",
    "label": "Afrontamiento familiar desadaptativo",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por afrontamiento familiar desadaptativo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 415,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 415,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00374",
    "code": "00374",
    "label": "Riesgo de hemorragia excesiva",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar hemorragia excesiva, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 585,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 585,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00375",
    "code": "00375",
    "label": "Conductas ineficaces de higiene bucal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conductas ineficaces de higiene bucal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 290,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 290,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00379",
    "code": "00379",
    "label": "Deterioro del bienestar psicológico",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro del bienestar psicológico, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 717,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 717,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00380",
    "code": "00380",
    "label": "Deterioro del confort fisico",
    "domain": "Dominio 12: Confort",
    "domainNumber": 12,
    "classType": "Clase 1: Confort físico",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro del confort fisico, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1605",
        "label": "Control del dolor",
        "definition": "Acciones personales para controlar y mitigar el dolor.",
        "page": 686,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160501 Reconoce el comienzo del dolor",
          "160504 Utiliza medidas de alivio no farmacológicas",
          "160511 Refiere dolor controlado (EVA ≤ 3/10)"
        ]
      },
      {
        "code": "2102",
        "label": "Nivel del dolor",
        "definition": "Intensidad del dolor manifestado u observado en el paciente.",
        "page": 686,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "210201 Dolor referido",
          "210204 Duración de los episodios de dolor",
          "210206 Expresiones faciales de dolor"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1400",
        "label": "Manejo del dolor",
        "definition": "Alivio del dolor o disminución del dolor a un nivel de tolerancia que sea aceptable para el paciente.",
        "priority": "Prioritaria",
        "activities": [
          "Realizar una valoración exhaustiva del dolor que incluya la localización, características, aparición, duración, frecuencia e intensidad (escala EVA).",
          "Asegurarse de que el paciente reciba los analgésicos correspondientes prescritos en horario regular.",
          "Enseñar los principios del manejo del dolor y técnicas complementarias de relajación física."
        ]
      },
      {
        "code": "2210",
        "label": "Administración de analgésicos",
        "definition": "Utilización de agentes farmacológicos para disminuir o eliminar el dolor.",
        "priority": "Sugerida",
        "activities": [
          "Determinar la ubicación, características, calidad y gravedad del dolor antes de medicar al paciente.",
          "Comprobar las órdenes médicas en cuanto al medicamento, dosis y frecuencia del analgésico prescrito.",
          "Evaluar la eficacia del analgésico a intervalos regulares después de su administración."
        ]
      }
    ]
  },
  {
    "id": "nanda_00383",
    "code": "00383",
    "label": "Conexión social inadecuada",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 3: Desempeño del rol",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conexión social inadecuada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 707,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 707,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00384",
    "code": "00384",
    "label": "Autogestión de las náuseas ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión de las náuseas ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 35,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 35,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00386",
    "code": "00386",
    "label": "Deterioro de la función sexual",
    "domain": "Dominio 8: Sexualidad",
    "domainNumber": 8,
    "classType": "Clase 2: Función sexual",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la función sexual, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0119",
        "label": "Funcionamiento sexual",
        "definition": "Integración de los aspectos físicos, socioemocionales e intelectuales de la expresión sexual.",
        "page": 396,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "011901 Expresa comodidad con la sexualidad",
          "011903 Expresa capacidad para la intimidad",
          "011910 Adaptación a las limitaciones físicas"
        ]
      },
      {
        "code": "2510",
        "label": "Estado materno: puerperio",
        "definition": "Grado en que el bienestar físico y emocional materno se restablece tras el parto.",
        "page": 396,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "251001 Involución uterina adecuada",
          "251005 Cantidad de loquios esperada",
          "251016 Vínculo afectivo con el recién nacido"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5248",
        "label": "Asesoramiento sexual",
        "definition": "Utilización de un proceso de ayuda interactivo centrado en la necesidad de realizar ajustes en la práctica sexual.",
        "priority": "Prioritaria",
        "activities": [
          "Establecer una relación terapéutica basada en la confianza y el respeto.",
          "Informar al paciente al principio de la relación sobre los efectos de la enfermedad/medicación en la sexualidad.",
          "Proporcionar información tranquilizadora y basada en la evidencia."
        ]
      },
      {
        "code": "6930",
        "label": "Cuidados de postparto",
        "definition": "Vigilancia y ayuda para el bienestar físico y psicológico de la madre y del recién nacido.",
        "priority": "Sugerida",
        "activities": [
          "Monitorizar signos vitales, involución uterina y características de los loquios.",
          "Evaluar el estado del periné o herida quirúrgica y controlar el dolor.",
          "Promover el apego temprano y apoyar el inicio exitoso de la lactancia materna."
        ]
      }
    ]
  },
  {
    "id": "nanda_00387",
    "code": "00387",
    "label": "Conflicto excesivo de roles parentales",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conflicto excesivo de roles parentales, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 364,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 364,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00388",
    "code": "00388",
    "label": "Deterioro de los procesos familiares",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de los procesos familiares, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 371,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 371,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00389",
    "code": "00389",
    "label": "Patrones de interacción familiar alterados",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 3: Desempeño del rol",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por patrones de interacción familiar alterados, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 368,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 368,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00390",
    "code": "00390",
    "label": "Temor excesivo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por temor excesivo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 445,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 445,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00397",
    "code": "00397",
    "label": "Autogestión de la fatiga ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión de la fatiga ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 26,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 26,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00398",
    "code": "00398",
    "label": "Autogestión del sobrepeso ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión del sobrepeso ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 43,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 43,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00399",
    "code": "00399",
    "label": "Ansiedad excesiva ante la muerte",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por ansiedad excesiva ante la muerte, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 442,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 442,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00400",
    "code": "00400",
    "label": "Ansiedad excesiva",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por ansiedad excesiva, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 438,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 438,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00401",
    "code": "00401",
    "label": "Riesgo de carga de cuidados excesiva",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 1: Roles de cuidador",
    "classNumber": 1,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar carga de cuidados excesiva, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 423,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 423,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00402",
    "code": "00402",
    "label": "Riesgo de lesión física laboral",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 4: Peligros del entorno",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar lesión física laboral, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 643,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 643,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00404",
    "code": "00404",
    "label": "Riesgo de enfermedad laboral",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 4: Peligros del entorno",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar enfermedad laboral, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 638,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 638,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00405",
    "code": "00405",
    "label": "Afrontamiento desadaptativo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por afrontamiento desadaptativo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 411,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 411,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00414",
    "code": "00414",
    "label": "Riesgo de conductas ineficaces de higiene bucal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar conductas ineficaces de higiene bucal, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 295,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 295,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00417",
    "code": "00417",
    "label": "Disposición para mejorar el patrón de sueño",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 1: Sueño/Reposo",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el patrón de sueño, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 185,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 185,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00418",
    "code": "00418",
    "label": "Autogestión del dolor ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión del dolor ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 39,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 39,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00419",
    "code": "00419",
    "label": "Disposición para mejorar la ingesta nutricional",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la ingesta nutricional, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 76,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 76,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00420",
    "code": "00420",
    "label": "Riesgo de volumen inadecuado de líquido",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar volumen inadecuado de líquido, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 148,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 148,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00421",
    "code": "00421",
    "label": "Volumen de líquido inadecuado",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por volumen de líquido inadecuado, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 145,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 145,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00423",
    "code": "00423",
    "label": "Deterioro de la motilidad gastrointestinal",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 2: Función gastrointestinal",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la motilidad gastrointestinal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 167,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 167,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00424",
    "code": "00424",
    "label": "Deterioro de la continencia fecal",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 2: Función gastrointestinal",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la continencia fecal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 177,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 177,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00425",
    "code": "00425",
    "label": "Riesgo de deterioro de la función neurovascular periférica",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la función neurovascular periférica, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 604,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 604,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00429",
    "code": "00429",
    "label": "Deterioro en la toma de decisiones",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro en la toma de decisiones, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 321,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 321,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00430",
    "code": "00430",
    "label": "Deterioro de la respuesta al destete ventilatorio en adultos",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 4: Función respiratoria",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la respuesta al destete ventilatorio en adultos, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 263,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 263,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00431",
    "code": "00431",
    "label": "Deterioro de la respuesta al destete ventilatorio en niños(as)",
    "domain": "Dominio 3: Eliminación e intercambio",
    "domainNumber": 3,
    "classType": "Clase 4: Función respiratoria",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la respuesta al destete ventilatorio en niños(as), confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0503",
        "label": "Eliminación urinaria",
        "definition": "Recogida y descarga de la orina.",
        "page": 259,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050301 Patrón de eliminación",
          "050303 Cantidad de orina",
          "050313 Vaciamiento completo de la vejiga"
        ]
      },
      {
        "code": "0501",
        "label": "Eliminación intestinal",
        "definition": "Formación y evacuación de heces.",
        "page": 259,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "050101 Patrón de evacuación",
          "050102 Consistencia de las heces",
          "050110 Ausencia de estreñimiento"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0590",
        "label": "Manejo de la eliminación urinaria",
        "definition": "Mantenimiento de un esquema de eliminación urinaria óptimo.",
        "priority": "Prioritaria",
        "activities": [
          "Monitorizar la eliminación urinaria, incluyendo la frecuencia, consistencia, olor, volumen y color.",
          "Identificar factores que contribuyen a episodios de incontinencia o retención.",
          "Enseñar al paciente a responder inmediatamente a la urgencia de orinar."
        ]
      },
      {
        "code": "0450",
        "label": "Manejo del estreñimiento / impactación",
        "definition": "Prevención y alivio del estreñimiento / impactación fecal.",
        "priority": "Sugerida",
        "activities": [
          "Vigilar la aparición de signos y síntomas de estreñimiento o retención fecal.",
          "Fomentar el aumento de la ingesta de líquidos ricos en fibra.",
          "Instruir al paciente sobre alimentos con alto contenido en fibra y pautas de actividad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00435",
    "code": "00435",
    "label": "Conocimientos de salud inadecuados",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conocimientos de salud inadecuados, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 311,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 311,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00436",
    "code": "00436",
    "label": "Deterioro de los comportamientos parentales",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de los comportamientos parentales, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 359,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 359,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00439",
    "code": "00439",
    "label": "Riesgo de conductas de apego alteradas",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar conductas de apego alteradas, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 376,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 376,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00442",
    "code": "00442",
    "label": "Disposición para mejorar las habilidades del autocuidado",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 5: Autocuidado",
    "classNumber": 5,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar las habilidades del autocuidado, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 271,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 271,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00449",
    "code": "00449",
    "label": "Relación de pareja ineficaz",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 2: Relaciones familiares",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por relación de pareja ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 380,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 380,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00451",
    "code": "00451",
    "label": "Deterioro de la organización del neurodesarrollo infantil",
    "domain": "Dominio 13: Crecimiento/Desarrollo",
    "domainNumber": 13,
    "classType": "Clase 2: Desarrollo",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la organización del neurodesarrollo infantil, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0111",
        "label": "Estado de crecimiento",
        "definition": "Grado en que el crecimiento físico de un individuo se sitúa en los percentiles esperados.",
        "page": 736,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "011101 Tasa de ganancia de peso esperada",
          "011102 Tasa de aumento de talla esperada",
          "011105 Perímetro cefálico en percentil normal"
        ]
      },
      {
        "code": "0112",
        "label": "Desarrollo infantil",
        "definition": "Hitos del desarrollo físico, cognitivo y psicosocial alcanzados por el niño.",
        "page": 736,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente retrasado) a 5 (No retrasado)",
        "indicators": [
          "011201 Hitos motores gruesos",
          "011202 Hitos motores finos",
          "011204 Hitos del lenguaje"
        ]
      }
    ],
    "nicList": [
      {
        "code": "8250",
        "label": "Cuidado del desarrollo",
        "definition": "Estructuración del entorno y provisión de cuidados de apoyo a los hitos del neurodesarrollo del niño.",
        "priority": "Prioritaria",
        "activities": [
          "Evaluar periódicamente los hitos motores, sensoriales y de comunicación mediante instrumentos validados (TPED, Denver II).",
          "Fomentar la interacción afectiva cálida entre los cuidadores y el niño.",
          "Proporcionar estímulos visuales, auditivos y táctiles apropiados a la edad madurativa."
        ]
      },
      {
        "code": "6710",
        "label": "Fomento del apego",
        "definition": "Facilitación de la construcción de una relación estrecha entre el progenitor y el recién nacido/niño.",
        "priority": "Sugerida",
        "activities": [
          "Alentar a los padres a sostener, acariciar y hablar al lactante con ternura.",
          "Instruir sobre las señales tempranas de hambre, sueño y sobreestimulación del bebé.",
          "Reforzar las conductas parentales positivas y el contacto piel a piel."
        ]
      }
    ]
  },
  {
    "id": "nanda_00454",
    "code": "00454",
    "label": "Deterioro del bienestar espiritual",
    "domain": "Dominio 10: Principios vitales",
    "domainNumber": 10,
    "classType": "Clase 1: Valores",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro del bienestar espiritual, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2001",
        "label": "Salud espiritual",
        "definition": "Conexión con el yo, con los demás, con un ser superior, con la naturaleza o con el universo.",
        "page": 464,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "200101 Expresión de confianza y esperanza",
          "200102 Sentimiento de paz interior",
          "200104 Conexión con los demás para compartir pensamientos y sentimientos"
        ]
      },
      {
        "code": "1614",
        "label": "Autonomía personal",
        "definition": "Acciones personales de un individuo competente para ordenar su vida y tomar decisiones según valores propios.",
        "page": 464,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "161401 Expresa valores y creencias personales",
          "161403 Toma decisiones independientes sobre el tratamiento",
          "161408 Manifiesta congruencia ética"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5420",
        "label": "Facilitar el crecimiento espiritual",
        "definition": "Facilitación del crecimiento en la capacidad del paciente para identificarse y conectarse con el significado de la vida.",
        "priority": "Prioritaria",
        "activities": [
          "Estar abierto a las expresiones de soledad e impotencia del paciente.",
          "Animar al paciente a revisar su vida pasada y concentrarse en los sucesos y relaciones que aportaron fuerza espiritual.",
          "Facilitar las prácticas religiosas y la visita de líderes espirituales elegidos por el paciente."
        ]
      },
      {
        "code": "5260",
        "label": "Cuidados en la agonía",
        "definition": "Fomento del confort físico y de la paz psicológica y espiritual en la fase final de la vida.",
        "priority": "Sugerida",
        "activities": [
          "Maximizar el confort físico mediante control estricto del dolor y disnea.",
          "Facilitar la presencia continua de seres queridos.",
          "Respetar los deseos anticipados y voluntades del paciente y familia."
        ]
      }
    ]
  },
  {
    "id": "nanda_00456",
    "code": "00456",
    "label": "Afrontamiento de la comunidad desadaptativo",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por afrontamiento de la comunidad desadaptativo, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 418,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 418,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00461",
    "code": "00461",
    "label": "Deterioro de la integridad del complejo pezón-areolar",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la integridad del complejo pezón-areolar, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 550,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 550,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00462",
    "code": "00462",
    "label": "Riesgo de deterioro de la integridad del complejo pezón-areolar",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la integridad del complejo pezón-areolar, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 554,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 554,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00463",
    "code": "00463",
    "label": "Riesgo de asfixia accidental",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar asfixia accidental, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 582,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 582,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00464",
    "code": "00464",
    "label": "Riesgo de deterioro de la recuperación quirúrgica",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la recuperación quirúrgica, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 228,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 228,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00465",
    "code": "00465",
    "label": "Deterioro de la recuperación quirúrgica",
    "domain": "Dominio 4: Actividad/Reposo",
    "domainNumber": 4,
    "classType": "Clase 2: Actividad/Ejercicio",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por deterioro de la recuperación quirúrgica, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0005",
        "label": "Tolerancia a la actividad",
        "definition": "Respuesta fisiológica a los movimientos que consumen energía en las actividades diarias.",
        "page": 224,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "000501 Frecuencia cardíaca en respuesta a la actividad",
          "000502 Frecuencia respiratoria en respuesta a la actividad",
          "000509 Facilidad para realizar las AVD"
        ]
      },
      {
        "code": "0208",
        "label": "Movilidad",
        "definition": "Capacidad para moverse con resolución en el entorno independientemente con o sin mecanismos de ayuda.",
        "page": 224,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "020801 Mantenimiento del equilibrio",
          "020802 Mantenimiento de la posición corporal",
          "020809 Coordinación motora"
        ]
      }
    ],
    "nicList": [
      {
        "code": "0180",
        "label": "Manejo de la energía",
        "definition": "Regulación del uso de la energía para tratar o evitar la fatiga y optimizar las funciones.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar los déficits del estado fisiológico del paciente que producen fatiga.",
          "Favorecer el reposo en cama/limitación de actividades con períodos de descanso planificados.",
          "Controlar la respuesta cardiorrespiratoria a la actividad (taquicardia, disnea, diaforesis)."
        ]
      },
      {
        "code": "0221",
        "label": "Terapia de ejercicios: deambulación",
        "definition": "Estimular y ayudar al paciente a caminar para mantener o restablecer las funciones corporales voluntarias.",
        "priority": "Sugerida",
        "activities": [
          "Aconsejar al paciente que use calzado cómodo y seguro.",
          "Ayudar al paciente en el traslado cuando sea necesario con técnicas ergonómicas.",
          "Aplicar dispositivos de ayuda para la deambulación (andador, bastón) si está indicado."
        ]
      }
    ]
  },
  {
    "id": "nanda_00466",
    "code": "00466",
    "label": "Riesgo de conducta autolesiva suicida",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 3: Violencia",
    "classNumber": 3,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar conducta autolesiva suicida, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 620,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 620,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00467",
    "code": "00467",
    "label": "Conducta autolesiva no suicida",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 3: Violencia",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por conducta autolesiva no suicida, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 626,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 626,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00469",
    "code": "00469",
    "label": "Riesgo de intoxicación accidental",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 4: Peligros del entorno",
    "classNumber": 4,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar intoxicación accidental, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 635,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 635,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00471",
    "code": "00471",
    "label": "Riesgo de hipertermia",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar hipertermia, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 683,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 683,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00472",
    "code": "00472",
    "label": "Disminución de la temperatura corporal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la temperatura corporal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 666,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 666,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00473",
    "code": "00473",
    "label": "Riesgo de disminución de la temperatura corporal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar disminución de la temperatura corporal, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 671,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 671,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00474",
    "code": "00474",
    "label": "Disminución de la temperatura corporal neonatal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por disminución de la temperatura corporal neonatal, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 659,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 659,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00475",
    "code": "00475",
    "label": "Soledad excesiva",
    "domain": "Dominio 7: Rol/Relaciones",
    "domainNumber": 7,
    "classType": "Clase 3: Desempeño del rol",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por soledad excesiva, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "2208",
        "label": "Factores estresantes del cuidador familiar",
        "definition": "Gravedad de las presiones biopsicosociales sobre un cuidador familiar.",
        "page": 714,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Grave) a 5 (Ninguno)",
        "indicators": [
          "220801 Estrés percibido",
          "220803 Dificultad para coordinar los cuidados",
          "220811 Interrupción de la vida familiar"
        ]
      },
      {
        "code": "2600",
        "label": "Afrontamiento de los problemas de la familia",
        "definition": "Acciones de la familia para controlar los factores estresantes que comprometen los recursos familiares.",
        "page": 714,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "260001 Afronta los problemas familiares",
          "260002 Se implica en la resolución de problemas",
          "260007 Utiliza el apoyo social"
        ]
      }
    ],
    "nicList": [
      {
        "code": "7040",
        "label": "Apoyo al cuidador principal",
        "definition": "Suministro de la necesaria información, recomendación y apoyo para facilitar el cuidado primario al enfermo.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el nivel de conocimientos del cuidador sobre la patología del paciente.",
          "Enseñar al cuidador técnicas terapéuticas y de autocuidado.",
          "Informar sobre recursos comunitarios de respiro y apoyo sociosanitario."
        ]
      },
      {
        "code": "7110",
        "label": "Fomento de la implicación familiar",
        "definition": "Facilitar la participación de los miembros de la familia en el cuidado emocional y físico del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Establecer una relación personal de confianza con los miembros de la familia.",
          "Identificar la disposición de los miembros de la familia a implicarse en el cuidado del paciente.",
          "Reconocer y elogiar los esfuerzos de los familiares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00476",
    "code": "00476",
    "label": "Riesgo de disminución de la temperatura corporal neonatal",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar disminución de la temperatura corporal neonatal, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 663,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 663,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00477",
    "code": "00477",
    "label": "Carga excesiva de fatiga",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 2: Lesión física",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por carga excesiva de fatiga, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 220,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 220,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00479",
    "code": "00479",
    "label": "Disposición para mejorar la lactancia",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 1: Ingestión",
    "classNumber": 1,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar la lactancia, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 90,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 90,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00483",
    "code": "00483",
    "label": "Autoestima inadecuada crónica",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 2: Autoestima",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autoestima inadecuada crónica, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 348,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 348,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00484",
    "code": "00484",
    "label": "Riesgo de transición migratoria alterada",
    "domain": "Dominio 9: Afrontamiento/Tolerancia al estrés",
    "domainNumber": 9,
    "classType": "Clase 2: Respuestas de afrontamiento",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar transición migratoria alterada, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1402",
        "label": "Autocontrol de la ansiedad",
        "definition": "Acciones personales para eliminar o reducir sentimientos de aprensión, tensión o inquietud.",
        "page": 407,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "140201 Monitoriza la intensidad de la ansiedad",
          "140204 Busca información para reducir la ansiedad",
          "140217 Controla la respuesta de ansiedad"
        ]
      },
      {
        "code": "1302",
        "label": "Afrontamiento de problemas",
        "definition": "Acciones personales para controlar los factores estresantes que ponen a prueba los recursos del individuo.",
        "page": 407,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "130201 Identifica patrones de afrontamiento eficaces",
          "130205 Verbaliza necesidad de ayuda",
          "130218 Adopta conductas para reducir el estrés"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5820",
        "label": "Disminución de la ansiedad",
        "definition": "Minimizar la aprensión, temor, presagios relacionados con una fuente no identificada de peligro adelantado.",
        "priority": "Prioritaria",
        "activities": [
          "Utilizar un enfoque sereno de seguridad y empatía constante.",
          "Explicar todos los procedimientos incluyendo las posibles sensaciones que se han de experimentar.",
          "Instruir al paciente sobre el uso de técnicas de relajación (respiración diafragmática, imaginería guiada)."
        ]
      },
      {
        "code": "5230",
        "label": "Mejorar el afrontamiento",
        "definition": "Facilitación de los esfuerzos cognitivos y conductuales para manejar los factores estresantes.",
        "priority": "Sugerida",
        "activities": [
          "Ayudar al paciente a identificar los objetivos apropiados a corto y largo plazo.",
          "Alentar una actitud de esperanza realista como forma de manejar los sentimientos de impotencia.",
          "Favorecer situaciones que fomenten la autonomía del paciente."
        ]
      }
    ]
  },
  {
    "id": "nanda_00485",
    "code": "00485",
    "label": "Autogestión de la insuficiencia ponderal ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por autogestión de la insuficiencia ponderal ineficaz, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 47,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 47,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00488",
    "code": "00488",
    "label": "Riesgo de deterioro de la dignidad humana",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro de la dignidad humana, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 343,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 343,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00489",
    "code": "00489",
    "label": "Riesgo de autogestión del patrón de glucemia ineficaz",
    "domain": "Dominio 1: Promoción de la salud",
    "domainNumber": 1,
    "classType": "Clase 2: Gestión de la salud",
    "classNumber": 2,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar autogestión del patrón de glucemia ineficaz, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1600",
        "label": "Conducta de adhesión",
        "definition": "Acciones personales para promover la salud o el tratamiento de una enfermedad.",
        "page": 14,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "160001 Informa de cambios en síntomas",
          "160002 Cumple las recomendaciones del profesional",
          "160004 Realiza las actividades de la vida diaria recomendadas"
        ]
      },
      {
        "code": "1805",
        "label": "Conocimiento: conducta de salud",
        "definition": "Grado de comprensión transmitida sobre el fomento y la protección de la salud.",
        "page": 14,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Ningún conocimiento) a 5 (Conocimiento extenso)",
        "indicators": [
          "180501 Prácticas nutricionales saludables",
          "180502 Patrón de ejercicio beneficioso",
          "180509 Estrategias para evitar riesgos"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5510",
        "label": "Educación para la salud",
        "definition": "Desarrollar y proporcionar instrucción y experiencias de aprendizaje para facilitar la adaptación voluntaria de la conducta.",
        "priority": "Prioritaria",
        "activities": [
          "Identificar factores internos o externos que pueden mejorar o disminuir la motivación de conductas saludables.",
          "Determinar el contexto personal y la historia sociocultural del paciente y familia.",
          "Priorizar las necesidades de aprendizaje identificadas en colaboración con el usuario."
        ]
      },
      {
        "code": "4480",
        "label": "Facilitación de la autorresponsabilidad",
        "definition": "Animar al paciente a que asuma más responsabilidad de su propia conducta.",
        "priority": "Sugerida",
        "activities": [
          "Animar al paciente a manifestar verbalmente sus sentimientos sobre los cambios en su régimen.",
          "Establecer metas realistas a corto y mediano plazo con el paciente.",
          "Proporcionar refuerzo positivo ante los logros alcanzados."
        ]
      }
    ]
  },
  {
    "id": "nanda_00490",
    "code": "00490",
    "label": "Riesgo de disminución de la temperatura corporal perioperatoria",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 6: Termorregulación",
    "classNumber": 6,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar disminución de la temperatura corporal perioperatoria, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 674,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 674,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  },
  {
    "id": "nanda_00491",
    "code": "00491",
    "label": "Riesgo de deterioro del equilibrio hidroelectrolítico",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro del equilibrio hidroelectrolítico, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 117,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 117,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00492",
    "code": "00492",
    "label": "Riesgo de deterioro del equilibrio de volumen de líquidos",
    "domain": "Dominio 2: Nutrición",
    "domainNumber": 2,
    "classType": "Clase 5: Hidratación",
    "classNumber": 5,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar deterioro del equilibrio de volumen de líquidos, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1004",
        "label": "Estado nutricional",
        "definition": "Grado en que los nutrientes son ingeridos y absorbidos para satisfacer las necesidades metabólicas.",
        "page": 135,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "100401 Ingesta de nutrientes",
          "100402 Ingesta de alimentos",
          "100405 Relación peso/talla"
        ]
      },
      {
        "code": "0601",
        "label": "Equilibrio hídrico",
        "definition": "Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.",
        "page": 135,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "060101 Presión arterial en rango esperado",
          "060107 Turgencia cutánea",
          "060119 Humedad de membranas mucosas"
        ]
      }
    ],
    "nicList": [
      {
        "code": "1100",
        "label": "Manejo de la nutrición",
        "definition": "Proporcionar y fomentar una ingesta equilibrada de nutrientes.",
        "priority": "Prioritaria",
        "activities": [
          "Determinar el estado nutricional del paciente y su capacidad para satisfacer las necesidades nutricionales.",
          "Monitorizar las calorías y la ingesta dietética registrada.",
          "Fomentar la ingesta de alimentos ricos en hierro, proteínas y vitaminas según corresponda."
        ]
      },
      {
        "code": "4120",
        "label": "Manejo de líquidos",
        "definition": "Mantener el equilibrio de líquidos y prevenir las complicaciones derivadas de los niveles de líquidos anormales.",
        "priority": "Sugerida",
        "activities": [
          "Pesar a diario y controlar la evolución ponderal.",
          "Llevar un registro preciso de ingestas y eliminaciones (balance hídrico estricto).",
          "Vigilar signos de deshidratación o sobrecarga de volumen (edemas, ingurgitación yugular)."
        ]
      }
    ]
  },
  {
    "id": "nanda_00493",
    "code": "00493",
    "label": "Procesos de pensamiento alterados",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por procesos de pensamiento alterados, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 308,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 308,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00494",
    "code": "00494",
    "label": "Identidad personal alterada",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por identidad personal alterada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 335,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 335,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00495",
    "code": "00495",
    "label": "Síndrome de identidad familiar alterada",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 1: Autoconcepto",
    "classNumber": 1,
    "type": "De síndrome",
    "definition": "Juicio clínico que describe un conjunto específico de diagnósticos de enfermería que ocurren juntos y se abordan mejor a través de intervenciones similares.",
    "relatedFactors": [
      "Factores multifactoriales físicos, psicológicos y del entorno",
      "Cronicidad del cuadro clínico y comorbilidades complejas"
    ],
    "definingCharacteristics": [
      "Presencia de múltiples respuestas humanas desadaptativas simultáneas",
      "Impacto significativo en la calidad de vida y funcionalidad"
    ],
    "riskPopulations": [
      "Pacientes con patologías complejas o terminales",
      "Adultos mayores frágiles"
    ],
    "associatedConditions": [
      "Enfermedades crónico-degenerativas avanzadas"
    ],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 340,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 340,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00497",
    "code": "00497",
    "label": "Imagen corporal alterada",
    "domain": "Dominio 6: Autopercepción",
    "domainNumber": 6,
    "classType": "Clase 3: Imagen corporal",
    "classNumber": 3,
    "type": "Focalizado en el problema",
    "definition": "Respuesta humana indeseable a estados de salud o procesos vitales caracterizada por imagen corporal alterada, confirmada mediante la presencia de características definitorias.",
    "relatedFactors": [
      "Mecanismos fisiopatológicos subyacentes",
      "Limitación física, cognitiva o de recursos",
      "Factores del entorno o tratamiento médico"
    ],
    "definingCharacteristics": [
      "Manifestaciones clínicas objetivas observadas por el profesional",
      "Información subjetiva referida por el paciente o cuidador",
      "Alteración de parámetros clínicos o escalas funcionales"
    ],
    "riskPopulations": [
      "Pacientes en estado agudo o postquirúrgico",
      "Personas con enfermedades agudas o descompensadas"
    ],
    "associatedConditions": [
      "Patologías médicas primarias",
      "Efectos adversos de terapias farmacológicas"
    ],
    "nocList": [
      {
        "code": "1205",
        "label": "Autoestima",
        "definition": "Juicio personal sobre la propia valía.",
        "page": 355,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120501 Verbalizaciones de autoaceptación",
          "120502 Aceptación de las propias limitaciones",
          "120511 Mantenimiento del cuidado personal"
        ]
      },
      {
        "code": "1200",
        "label": "Imagen corporal",
        "definition": "Percepción positiva de la propia apariencia y de las funciones corporales.",
        "page": 355,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "120001 Imagen congruente de sí mismo",
          "120002 Actitud hacia el uso de estrategias para mejorar el aspecto",
          "120014 Adaptación a cambios en el aspecto físico"
        ]
      }
    ],
    "nicList": [
      {
        "code": "5400",
        "label": "Potenciación de la autoestima",
        "definition": "Ayudar a un paciente a que aumente el juicio personal de su propia valía.",
        "priority": "Prioritaria",
        "activities": [
          "Animar al paciente a identificar sus virtudes y fortalezas personales.",
          "Fomentar el contacto visual al comunicarse con otras personas.",
          "Ayudar al paciente a reexaminar las percepciones negativas que tiene de sí mismo."
        ]
      },
      {
        "code": "5220",
        "label": "Mejora de la imagen corporal",
        "definition": "Mejora de las percepciones y actitudes conscientes e inconscientes del paciente hacia su cuerpo.",
        "priority": "Sugerida",
        "activities": [
          "Determinar las expectativas corporales del paciente en función del estadio de desarrollo.",
          "Ayudar al paciente a separar el aspecto físico de los sentimientos de valía personal.",
          "Facilitar el contacto con personas que hayan sufrido alteraciones corporales similares."
        ]
      }
    ]
  },
  {
    "id": "nanda_00499",
    "code": "00499",
    "label": "Disposición para mejorar el conocimiento en salud",
    "domain": "Dominio 5: Percepción/Cognición",
    "domainNumber": 5,
    "classType": "Clase 4: Cognición",
    "classNumber": 4,
    "type": "De promoción de la salud",
    "definition": "Patrón de conductas y motivación para mejorar el conocimiento en salud, con el fin de optimizar el bienestar y alcanzar el potencial de salud.",
    "relatedFactors": [],
    "definingCharacteristics": [
      "Expresa deseo de mejorar los conocimientos y prácticas de salud",
      "Manifiesta interés en adoptar estilos de vida protectores",
      "Busca información y apoyo en el equipo de salud"
    ],
    "riskPopulations": [
      "Población general en etapas de transición vital",
      "Personas motivadas hacia el autocuidado"
    ],
    "associatedConditions": [],
    "nocList": [
      {
        "code": "0900",
        "label": "Capacidad cognitiva",
        "definition": "Capacidad para ejecutar los procesos mentales complejos.",
        "page": 314,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "090001 Se comunica de forma clara",
          "090002 Demuestra atención y concentración",
          "090005 Procesa la información adecuadamente"
        ]
      },
      {
        "code": "0909",
        "label": "Estado neurológico",
        "definition": "Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a los estímulos.",
        "page": 314,
        "targetScore": "Mantener en 3 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Desviación grave) a 5 (Sin desviación)",
        "indicators": [
          "090901 Nivel de conciencia",
          "090902 Orientación temporoespacial",
          "090903 Patrón del habla"
        ]
      }
    ],
    "nicList": [
      {
        "code": "4720",
        "label": "Estimulación cognitiva",
        "definition": "Favorecer la conciencia y comprensión del entorno por medio de la utilización de estímulos planificados.",
        "priority": "Prioritaria",
        "activities": [
          "Consultar a la familia para determinar el nivel cognitivo basal del paciente.",
          "Orientar con respecto al tiempo, lugar y persona de manera continua y empática.",
          "Utilizar ayudas de memoria visuales (calendarios, relojes, notas, fotografías familiares)."
        ]
      },
      {
        "code": "4920",
        "label": "Escucha activa",
        "definition": "Prestar gran atención y atribuir importancia a los mensajes verbales y no verbales del paciente.",
        "priority": "Sugerida",
        "activities": [
          "Mostrar interés por el paciente mediante contacto visual adecuado y postura abierta.",
          "Verificar la comprensión del mensaje transmitido por el usuario.",
          "Aclarar el mensaje mediante el uso de preguntas y retroalimentación."
        ]
      }
    ]
  },
  {
    "id": "nanda_00500",
    "code": "00500",
    "label": "Riesgo de infección de la herida quirúrgica",
    "domain": "Dominio 11: Seguridad/Protección",
    "domainNumber": 11,
    "classType": "Clase 1: Infección",
    "classNumber": 1,
    "type": "De riesgo",
    "definition": "Vulnerabilidad a experimentar infección de la herida quirúrgica, que puede comprometer la salud y el bienestar del paciente.",
    "relatedFactors": [
      "Factores fisiológicos o ambientales predisponentes",
      "Conocimiento insuficiente sobre medidas preventivas",
      "Disminución de las defensas primarias o barreras de protección"
    ],
    "definingCharacteristics": [],
    "riskPopulations": [
      "Pacientes hospitalizados o en reposo prolongado",
      "Personas en extremos de la vida (neonatos, adultos mayores)"
    ],
    "associatedConditions": [
      "Enfermedades crónicas subyacentes",
      "Procedimientos invasivos o farmacoterapia"
    ],
    "nocList": [
      {
        "code": "1902",
        "label": "Control del riesgo",
        "definition": "Acciones personales para comprender, evitar, eliminar o reducir las amenazas para la salud modificables.",
        "page": 485,
        "targetScore": "Mantener en 2 y Aumentar a 4",
        "scaleDescription": "Escala 1 (Nunca demostrado) a 5 (Siempre demostrado)",
        "indicators": [
          "190201 Reconoce los factores de riesgo personales",
          "190204 Desarrolla estrategias de control del riesgo eficaces",
          "190217 Modifica el estilo de vida para reducir el riesgo"
        ]
      },
      {
        "code": "1101",
        "label": "Integridad tisular: piel y membranas mucosas",
        "definition": "Indemnidad estructural y función fisiológica normal de la piel y las membranas mucosas.",
        "page": 485,
        "targetScore": "Mantener en 2 y Aumentar a 5",
        "scaleDescription": "Escala 1 (Gravemente comprometido) a 5 (No comprometido)",
        "indicators": [
          "110101 Temperatura de la piel",
          "110104 Hidratación",
          "110113 Integridad de la piel sin lesiones ni signos de infección"
        ]
      }
    ],
    "nicList": [
      {
        "code": "6550",
        "label": "Protección contra las infecciones",
        "definition": "Prevención y detección precoces de la infección en un paciente de riesgo.",
        "priority": "Prioritaria",
        "activities": [
          "Observar los signos y síntomas de infección sistémica y localizada (rubor, calor, dolor, edema, exudado).",
          "Mantener la asepsia para el paciente de riesgo y aplicar higiene estricta de manos (5 momentos OMS).",
          "Inspeccionar el estado de cualquier incisión o herida quirúrgica y drenajes."
        ]
      },
      {
        "code": "3590",
        "label": "Vigilancia de la piel",
        "definition": "Recogida y análisis de datos del paciente con el propósito de mantener la integridad de la piel y de las membranas mucosas.",
        "priority": "Sugerida",
        "activities": [
          "Observar si hay enrojecimiento, calor extremo, edema o drenaje en la piel y membranas mucosas.",
          "Valorar el estado de las zonas de prominencia ósea mediante escala de Braden.",
          "Vigilar el color y la temperatura de la piel y extremidades con regularidad."
        ]
      }
    ]
  }
];
