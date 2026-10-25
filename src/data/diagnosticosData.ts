export interface DosingRule {
  drug: string;
  doseMgPerKgDose?: number;
  doseMgPerKgDay?: number;
  adultFixedDose?: string;
  route: string;
  defaultFreqHours: number;
  maxDoseMgPerDay?: number;
  suspensionMgPer5mL?: number;
  notes?: string;
}

export interface DiagnosisItem {
  id: string;
  title: string;
  cie10: string;
  category: 'Infectología' | 'Aparato Digestivo' | 'Cardiovascular' | 'Respiratorio' | 'Neurología y Psiquiatría' | 'Dermatología' | 'Nefro-Urología' | 'Endocrinología' | 'Hematología y Reumatología' | 'Urgencias e Intoxicaciones';
  definition: string;
  symptoms: string[];
  redFlags?: string[];
  diagnosis: {
    criteria: string;
    labTests: string[];
    imaging?: string[];
    differential: string[];
  };
  treatment: {
    dosingRules: DosingRule[];
    firstLine: {
      drug: string;
      dose: string;
      route: string;
      freq: string;
      notes?: string;
    }[];
    alternatives?: {
      drug: string;
      dose: string;
      route: string;
      freq: string;
      notes?: string;
    }[];
    nonPharm: string[];
    nursingCare: string[];
    severityLevels?: {
      level: string;
      description: string;
      management: string;
    }[];
  };
}

export const diagnosticosData: DiagnosisItem[] = [
  {
    "id": "ascitis",
    "title": "Ascitis (R18)",
    "cie10": "R18",
    "category": "Aparato Digestivo",
    "definition": "Acumulación patológica de líquido en la cavidad peritoneal secundaria principalmente a Hipertensión Portal por Cirrosis Hepática (70%), neoplasias (10%) o insuficiencia cardíaca.",
    "symptoms": [
      "Distensión abdominal progresiva",
      "Aumento de peso",
      "Sensación de plenitud precoz y disnea de esfuerzo por elevación diafragmática",
      "Matidez desplazable y signo de la ola presente"
    ],
    "redFlags": [
      "Fiebre y dolor abdominal difuso (Peritonitis Bacteriana Espontánea)",
      "Encefalopatía hepática aguda",
      "Insuficiencia renal oligúrica (Síndrome Hepatorrenal)"
    ],
    "diagnosis": {
      "criteria": "Gradiente de Albúmina Suero-Ascitis (GASA) ≥ 1.1 g/dL indica Hipertensión Portal; < 1.1 g/dL causa no portal.",
      "labTests": [
        "Paracentesis diagnóstica con citoquímico y cultivo",
        "Albúmina en suero y líquido ascítico (GASA)",
        "Recuento de PMN en líquido ascítico (>250/mm3 es PBE)",
        "Perfil hepático, TGO/TGP, Bilirrubinas, Creatinina"
      ],
      "imaging": [
        "Ecografía abdominal superior (confirmación de líquido libre, estructura hepática y esplenomegalia)"
      ],
      "differential": [
        "Insuficiencia cardíaca congestiva",
        "Síndrome nefrótico",
        "Tuberculosis peritoneal",
        "Carcinomatosis peritoneal"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Espironolactona",
          "doseMgPerKgDay": 2,
          "adultFixedDose": "100 a 400 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 400,
          "notes": "Diurético ahorrador de potasio. Relación 100:40 con Furosemida"
        },
        {
          "drug": "Furosemida",
          "doseMgPerKgDay": 1,
          "adultFixedDose": "40 a 160 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 160,
          "notes": "Diurético de asa"
        },
        {
          "drug": "Albúmina Humana 20%",
          "doseMgPerKgDose": 1,
          "adultFixedDose": "8 g por litro evacuado",
          "route": "EV",
          "defaultFreqHours": 24,
          "notes": "Posterior a paracentesis evacuada > 5 Litros"
        }
      ],
      "firstLine": [
        {
          "drug": "Espironolactona + Furosemida",
          "dose": "100 mg + 40 mg",
          "route": "VO",
          "freq": "cada 24 horas en la mañana",
          "notes": "Ajustar cada 3-5 días"
        }
      ],
      "alternatives": [
        {
          "drug": "Paracentesis Evacuadora",
          "dose": "4 a 6 Litros",
          "route": "Procedimiento",
          "freq": "Según necesidad",
          "notes": "En ascitis a tensión"
        }
      ],
      "nonPharm": [
        "Restricción de sodio en la dieta < 2 g/día",
        "Reposo relativo",
        "Control estricto de peso diario"
      ],
      "nursingCare": [
        "CONTROL DEL PESO Y PERÍMETRO ABDOMINAL: Medir peso corporal diario en ayunas y perímetro abdominal a nivel umbilical.",
        "ASISTENCIA EN PARACENTESIS: Preparar equipo estéril, controlar PA antes, durante y después del procedimiento. Administrar Albúmina EV si se evacuan >5L.",
        "MONITOREO ELECTROLÍTICO: Vigilar aparición de hiponatremia, hiperpotasemia por Espironolactona o encefalopatía.",
        "DETECTAR PBE: Reportar fiebre >37.8°C, dolor abdominal o confusión inmediatamente."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "cervicalgia",
    "title": "Cervicalgia (M54.2)",
    "cie10": "M54.2",
    "category": "Hematología y Reumatología",
    "definition": "Dolor en la región posterior y lateral del cuello que puede irradiar a cabeza o miembros superiores, originado por patología musculoesquelética o neuropática.",
    "symptoms": [
      "Dolor cervical continuo o punzante",
      "Contractura de la musculatura paravertebral cervical",
      "Limitación dolorosa de los movimientos de rotación y flexión",
      "Cefalea occipital secundaria"
    ],
    "redFlags": [
      "Pérdida de fuerza o parestesias progresivas en brazos (Mielopatía/Radiculopatía)",
      "Traumatismo reciente grave",
      "Fiebre con rigidez de nuca (sospecha de Meningitis)",
      "Antecedente de neoplasia"
    ],
    "diagnosis": {
      "criteria": "Evaluación clínica de rango articular y examen neurológico de dermatomas y miotomas C1-C8.",
      "labTests": [
        "Sin exámenes de rutina salvo sospecha infecciosa o tumoral (VSG, PCR)"
      ],
      "imaging": [
        "Rx simple de columna cervical AP y Lateral",
        "Resonancia Magnética de Columna Cervical si hay déficit neurológico"
      ],
      "differential": [
        "Meningitis bacteriana",
        "Hernia discal cervical",
        "Artritis reumatoide cervical",
        "Situs tumoral"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Paracetamol",
          "doseMgPerKgDose": 15,
          "adultFixedDose": "500 a 1000 mg",
          "route": "VO",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 4000,
          "notes": "Analgésico de 1ª línea"
        },
        {
          "drug": "Ibuprofeno",
          "doseMgPerKgDose": 10,
          "adultFixedDose": "400 a 600 mg",
          "route": "VO",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 2400,
          "notes": "AINE corto tiempo"
        },
        {
          "drug": "Orfenadrina",
          "adultFixedDose": "100 mg",
          "route": "VO / EV",
          "defaultFreqHours": 12,
          "notes": "Miorrelajante"
        }
      ],
      "firstLine": [
        {
          "drug": "Paracetamol + Orfenadrina",
          "dose": "500 mg + 100 mg",
          "route": "VO",
          "freq": "cada 8 a 12 horas por 5-7 días",
          "notes": "Para contractura muscular"
        }
      ],
      "alternatives": [
        {
          "drug": "Diclofenaco",
          "dose": "50 mg",
          "route": "VO",
          "freq": "cada 8 horas con alimentos",
          "notes": "AINE"
        }
      ],
      "nonPharm": [
        "Aplicación de calor local húmedo 20 min",
        "Corrección postural ergométrica",
        "Ejercicios suaves de estiramiento"
      ],
      "nursingCare": [
        "EVALUACIÓN DEL DOLOR: Aplicar Escala Visual Analógica (EVA) pre y posmedictación.",
        "POSICIONAMIENTO Y ERGONOMÍA: Mantener alineación del cuello, evitar almohadas muy altas.",
        "APLICACIÓN DE MEDIOS FÍSICOS: Calor local seco o húmedo por 15-20 min.",
        "EDUCACIÓN: Enseñar pausa activa laboral y descanso al usar pantallas."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "disnea",
    "title": "Disnea y Dificultad Respiratoria (R06.0)",
    "cie10": "R06.0",
    "category": "Respiratorio",
    "definition": "Sensación subjetiva de falta de aire o respiración con esfuerzo anormal secundaria a causa pulmonar, cardíaca, metabólica o neuromuscular.",
    "symptoms": [
      "Sensación de ahogo",
      "Taquipnea (>20 rpm)",
      "Uso de músculos accesorios",
      "Sibilancias, crepitantes o estrridor",
      "Cianosis peribucal"
    ],
    "redFlags": [
      "SatO2 < 90%",
      "Incapacidad para hablar frases",
      "Tórax silente",
      "Pérdida de conciencia",
      "Shock o hipotensión"
    ],
    "diagnosis": {
      "criteria": "Evaluación clínica de patrón respiratorio + Pulsioximetría y Gasometría arterial.",
      "labTests": [
        "Pulsioximetría",
        "Gasometría arterial (PaO2, PaCO2, pH)",
        "Hemograma, Troponinas, BNP, D-Dímero"
      ],
      "imaging": [
        "Rx de tórax PA",
        "Angio-TC si se sospecha TEP",
        "Ecocardiograma"
      ],
      "differential": [
        "Asma / EPOC",
        "Insuficiencia Cardíaca / Edema Pulmonar",
        "TEP",
        "Neumotórax",
        "Neumonía"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Salbutamol Inhalado",
          "adultFixedDose": "4 a 8 puffs",
          "route": "Inhalatoria",
          "defaultFreqHours": 0.33,
          "notes": "Cada 20 min en la 1ª hora si hay broncoespasmo"
        },
        {
          "drug": "Furosemida EV",
          "doseMgPerKgDose": 0.5,
          "adultFixedDose": "20 a 40 mg",
          "route": "EV",
          "defaultFreqHours": 12,
          "notes": "Si hay origen cardiogénico/edema"
        }
      ],
      "firstLine": [
        {
          "drug": "Oxigenoterapia",
          "dose": "Para SatO2 93-95%",
          "route": "Cánula / Mascarilla",
          "freq": "Continuo",
          "notes": "Ajustar FiO2"
        }
      ],
      "alternatives": [
        {
          "drug": "Ventilación Mecánica No Invasiva (CPAP/BiPAP)",
          "dose": "PEEP 5-10 cmH2O",
          "route": "Invasiva/No invasiva",
          "freq": "Continuo",
          "notes": "En hipercapnia o EAP"
        }
      ],
      "nonPharm": [
        "Posición Fowler alta 90°",
        "Tranquilizar al paciente",
        "Ambiente ventilado"
      ],
      "nursingCare": [
        "POSICIÓN SEMISENTADA O FOWLER ALTA: Inmediatamente colocar al paciente a 90° para favorecer la excursión diafragmática.",
        "OXIGENOTERAPIA CONTROLADA: Titular FiO2 para mantener SatO2 >92% (88-92% en EPOC).",
        "MONITOREO DE FRECUENCIA RESPIRATORIA Y SATURACIÓN: Registrar cada 15-30 min.",
        "DETECTAR CIANOSIS O AGOTAMIENTO: Preparar equipo de intubación endotraqueal si hay deterioro."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "dolor_agudo",
    "title": "Dolor Agudo (R52.0)",
    "cie10": "R52.0",
    "category": "Urgencias e Intoxicaciones",
    "definition": "Experiencia sensorial y emocional desagradable asociada a daño tisular real o potencial, de inicio brusco y duración menor a 3-6 meses.",
    "symptoms": [
      "Dolor localizado de intensidad variable",
      "Respuestas simpáticas: Taquicardia, hipertensión, diaforesis, miosis/midriasis",
      "Facie álgica y posición antálgica"
    ],
    "redFlags": [
      "Dolor precordial opresivo con irradiación (IAM)",
      "Dolor abdominal con vientre en tabla (Peritonitis)",
      "Cefalea atronadora súbita (HSA)"
    ],
    "diagnosis": {
      "criteria": "Evaluación cuantitativa por Escala Visual Analógica (EVA 0-10) o escala ALICIA.",
      "labTests": [
        "Según la sospecha etiológica de fondo"
      ],
      "imaging": [
        "Según sospecha de foco anatómico (Rx, Ecografía)"
      ],
      "differential": [
        "Dolor isomórfico somático vs visceral vs neuropático"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Paracetamol",
          "doseMgPerKgDose": 15,
          "adultFixedDose": "1 g",
          "route": "VO / EV",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 4000,
          "notes": "Dolor leve a moderado"
        },
        {
          "drug": "Ketorolaco",
          "doseMgPerKgDose": 0.5,
          "adultFixedDose": "30 mg",
          "route": "EV / IM",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 120,
          "notes": "Máximo 5 días"
        },
        {
          "drug": "Tramadol",
          "doseMgPerKgDose": 1,
          "adultFixedDose": "50 a 100 mg",
          "route": "EV / VO",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 400,
          "notes": "Dolor moderado a severo. Diluir en 100mL ClNa"
        }
      ],
      "firstLine": [
        {
          "drug": "Paracetamol + Ketorolaco",
          "dose": "1 g VO/EV + 30 mg EV",
          "route": "VO / EV",
          "freq": "cada 8 horas",
          "notes": "Escalón 1-2 OMS"
        }
      ],
      "alternatives": [
        {
          "drug": "Tramadol",
          "dose": "50-100 mg",
          "route": "EV diluido",
          "freq": "cada 8 horas en 30 min",
          "notes": "Escalón 2-3 OMS"
        }
      ],
      "nonPharm": [
        "Reposo de la zona afectada",
        "Crioterapia local en dolor postraumático",
        "Técnicas de relajación"
      ],
      "nursingCare": [
        "VALORACIÓN REPETIDA DEL EVA: Medir dolor antes y 30-45 minutos después de administrar el analgésico.",
        "DILUCIÓN DE OPIOIDES: Diluir Tramadol en 100 mL de ClNa 0.9% e infundir en 30 min para evitar emesis y mareo.",
        "CONTROL DE EFECTOS ADVERSOS: Vigilar hipotensión por Metamizol EV, depresión respiratoria por opioides o dolor gástrico por AINEs.",
        "POSICIÓN ANTÁLGICA SEGURA: Mantener reposo con alineación anatómica."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "dolor_toracico",
    "title": "Dolor Torácico (R07)",
    "cie10": "R07",
    "category": "Cardiovascular",
    "definition": "Sensación dolorosa o molesta localizada entre el cuello y el diafragma que requiere descarte inmediato de causas potencialmente mortales (SICA, TEP, Disección Aórtica, Neumotórax).",
    "symptoms": [
      "Dolor opresivo, punzante o quemante",
      "Irradiación a brazo izquierdo, mandíbula o espalda",
      "Disnea, diaforesis, náuseas, síncope"
    ],
    "redFlags": [
      "Dolor retroesternal opresivo >20 min con sudor frío",
      "Síncope o hipotensión",
      "Disnea agudísima con asimetría de pulsos",
      "Diferencia de PA > 20 mmHg entre brazos"
    ],
    "diagnosis": {
      "criteria": "ECG de 12 derivaciones en < 10 minutos + Biomarcadores cardíacos.",
      "labTests": [
        "Troponinas I/T Ultrasensibles",
        "CK-MB",
        "Dímero D",
        "Gasometría",
        "Hemograma, Creatinina"
      ],
      "imaging": [
        "ECG de 12 derivaciones (inmediato)",
        "Rx de tórax PA",
        "Angio-TC de tórax si se sospecha TEP o Disección"
      ],
      "differential": [
        "Infarto Agudo de Miocardio / Angina",
        "Tromboembolismo Pulmonar",
        "Disección Aórtica",
        "Neumotórax a tensión",
        "Pericarditis / Costocondritis"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Aspirina",
          "adultFixedDose": "300 mg",
          "route": "VO Masticada",
          "defaultFreqHours": 24,
          "notes": "Carga inmediata en SICA"
        },
        {
          "drug": "Nitroglicerina Sublingual",
          "adultFixedDose": "0.4 mg",
          "route": "Sublingual",
          "defaultFreqHours": 0.1,
          "notes": "1 tab SL c/5 min x 3 dosis (Contraindicado si PAS < 90 mmHg)"
        }
      ],
      "firstLine": [
        {
          "drug": "Aspirina Masticada + Oxígeno si SatO2 < 90%",
          "dose": "300 mg",
          "route": "VO",
          "freq": "Dosis única",
          "notes": "Ante sospecha isquémica"
        }
      ],
      "alternatives": [
        {
          "drug": "Morfina EV",
          "dose": "2 a 4 mg",
          "route": "EV",
          "freq": "Lento c/10-15 min",
          "notes": "Para dolor opresivo severo"
        }
      ],
      "nonPharm": [
        "Reposo absoluto en cama semi-fowler",
        "Monitorización continua de ECG y Pulsioximetría"
      ],
      "nursingCare": [
        "ECG EN < 10 MINUTOS: Tomar e interpretar ECG de 12 derivaciones en menos de 10 min de la llegada.",
        "VÍAS VENOSAS Y MONITORIZACIÓN: Canalizar 2 vías venosas periféricas N°18/20. Monitor continuo de FC/ECG.",
        "ADMINISTRACIÓN DE ASPIRINA: Asegurar que la primera dosis de Aspirina (300 mg) sea MASTICADA.",
        "TENER CARRO DE PARO A LA MANO: Mantener desfibrilador listo por riesgo de Fibrilación Ventricular."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "epistaxis",
    "title": "Epistaxis (R04.0)",
    "cie10": "R04.0",
    "category": "Respiratorio",
    "definition": "Hemorragia producida por las fosas nasales originada en el plexo de Kiesselbach (anterior - 90%) o arteria esfenopalatina (posterior - 10%).",
    "symptoms": [
      "Sangrado nasal unilateral o bilateral",
      "Deglución de sangre y náuseas",
      "Palidez y taquicardia si es masiva"
    ],
    "redFlags": [
      "Hipotensión o shock hipovolémico",
      "Sangrado posterior profuso incontrolable",
      "Coagulopatía severa o uso de anticoagulantes"
    ],
    "diagnosis": {
      "criteria": "Rinoscopia anterior para identificar sitio anatómico del sangrado.",
      "labTests": [
        "Hemograma, Hematocrito, Perfil de Coagulación (TP, TTPa, INR)"
      ],
      "imaging": [
        "Rinoscopia posterior o TC si hay sospecha tumoral/traumática"
      ],
      "differential": [
        "Varices del plexo de Kiesselbach",
        "Crisis hipertensiva",
        "Traumatismo nasal",
        "Cuerpo extraño"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Oximetazolina / Adrenalina Tópica",
          "adultFixedDose": "2 gotas o mecha embebida 1:1000",
          "route": "Tópica Nasal",
          "defaultFreqHours": 12,
          "notes": "Vasoconstrictor local"
        },
        {
          "drug": "Ácido Tranexámico",
          "doseMgPerKgDose": 15,
          "adultFixedDose": "1 g",
          "route": "EV / VO / Tópico",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 3000,
          "notes": "Antifibrinolítico"
        }
      ],
      "firstLine": [
        {
          "drug": "Compresión Digital Directa + Vasoconstrictor Local",
          "dose": "Presión continua por 10-15 min",
          "route": "Física",
          "freq": "Inmediato",
          "notes": "Cabeza inclinada ligeramente hacia adelante"
        }
      ],
      "alternatives": [
        {
          "drug": "Taponamiento Nasal Anterior con Gasa/Vaselina",
          "dose": "1 mecha",
          "route": "Tópico Nasal",
          "freq": "Retirar a las 48-72h",
          "notes": "Si no cede a la compresión"
        }
      ],
      "nonPharm": [
        "Cabeza inclinada HACIA ADELANTE (NUNCA hacia atrás para no deglutir o aspirar sangre)",
        "Aplicación de hielo local en el puente nasal"
      ],
      "nursingCare": [
        "POSICIÓN CORRECTA: Sentar al paciente inclinado hacia adelante con la boca abierta para escupir la sangre.",
        "COMPRESIÓN DIGITAL CONTINUA: Presionar sobre las alas nasales en el tabique blando durante 10-15 minutos sin soltar.",
        "MONITOREO DE FUNCIONES VITALES: Controlar PA y FC por hipotensión o crisis hipertensiva desencadenante.",
        "CUIDADO DE TAPONAMIENTO NASAL: Educar sobre no realizar esfuerzos ni sonarse la nariz."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "estrenimiento",
    "title": "Estreñimiento / Constipación (R19.4)",
    "cie10": "R19.4",
    "category": "Aparato Digestivo",
    "definition": "Disminución en la frecuencia de deposiciones (< 3 por semana) o evacuación dificultosa de heces duras con esfuerzo excesivo o sensación de evacuación incompleta.",
    "symptoms": [
      "Evacuaciones <3 veces por semana",
      "Heces duras o caprina (Escala de Bristol 1-2)",
      "Esfuerzo defecatorio excesivo y dolor anal",
      "Distensión y malestar abdominal"
    ],
    "redFlags": [
      "Aparición súbita en > 50 años",
      "Rectorragia / Hematoquecia o Anemia",
      "Pérdida de peso inexplicada",
      "Antecedente familiar de Cáncer Colorrectal"
    ],
    "diagnosis": {
      "criteria": "Criterios de Roma IV para Estreñimiento Funcional.",
      "labTests": [
        "Hemograma, Glicemia, TSH, Calcio sérico, Sangre oculta en heces"
      ],
      "imaging": [
        "Rx simple de abdomen",
        "Colonoscopia en > 45-50 años o con banderas rojas"
      ],
      "differential": [
        "Cáncer colorrectal",
        "Hipotiroidismo",
        "Efecto adverso por Opioides o Calcioantagonistas",
        "Síndrome de Intestino Irritable con estreñimiento"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Lactulosa",
          "doseMgPerKgDay": 1,
          "adultFixedDose": "15 a 30 mL",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 60,
          "notes": "Laxante osmótico"
        },
        {
          "drug": "Polietilenglicol (PEG 3350)",
          "adultFixedDose": "17 g (1 sobre)",
          "route": "VO",
          "defaultFreqHours": 24,
          "notes": "En 240 mL de agua"
        },
        {
          "drug": "Bisacodilo",
          "adultFixedDose": "5 a 10 mg",
          "route": "VO / Rectal",
          "defaultFreqHours": 24,
          "notes": "Laxante estimulante de uso corto"
        }
      ],
      "firstLine": [
        {
          "drug": "Lactulosa o Polietilenglicol 3350",
          "dose": "15-30 mL o 17 g",
          "route": "VO",
          "freq": "cada 24 horas",
          "notes": "Laxante de 1ª elección"
        }
      ],
      "alternatives": [
        {
          "drug": "Enema de Evacuación (Solución Salina o Fosfato)",
          "dose": "250 mL",
          "route": "Rectal",
          "freq": "Condicional",
          "notes": "En fecaloma o retención severa"
        }
      ],
      "nonPharm": [
        "Incremento de fibra dietética (25-30 g/día)",
        "Ingesta hídrica de 2 Litros/día",
        "Ejercicio físico regular",
        "Aprovechar el reflejo gastrocólico poscomida"
      ],
      "nursingCare": [
        "ADMINISTRACIÓN DE LAXANTES OSMÓTICOS: Diluir el PEG o Lactulosa en abundante agua e ingerir por las mañanas.",
        "PROMOCIÓN DE HABITOS INTESTINALES: Educar sobre acudir al baño inmediatamente al sentir el deseo defecatorio.",
        "REGISTRO DE ESCALA DE BRISTOL: Controlar la consistencia y frecuencia de las deposiciones.",
        "ENEMAS DE EVACUACIÓN: Aplicar enema rectal con vaselina o solución salina manteniendo al paciente en posición de Sims izquierda."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "ictericia",
    "title": "Ictericia y Síndrome Ictérico (R17)",
    "cie10": "R17",
    "category": "Aparato Digestivo",
    "definition": "Pigmentación amarillenta de piel, escleras y mucosas producida por el depósito de bilirrubina cuando los niveles séricos superan los 2.0 - 2.5 mg/dL.",
    "symptoms": [
      "Coloración amarillenta de escleras y piel",
      "Coluria (orina oscura color té/coca-cola)",
      "Acolia / Hipocolia (heces pálidas/masilla en ictericia obstructiva)",
      "Prurito cutáneo severo"
    ],
    "redFlags": [
      "Fiebre con escalofríos y dolor RUQ (Tríada de Charcot - Colangitis)",
      "Encefalopatía o coagulopatía (Fallo Hepático Agudo)",
      "Masa vesicular palpable no dolorosa (Signo de Courvoisier-Terrier)"
    ],
    "diagnosis": {
      "criteria": "Bilirrubina Total > 2.5 mg/dL clasificada en Prehepática (Indirecta), Hepática (Mixta) o Poshepática/Obstructiva (Directa).",
      "labTests": [
        "Bilirrubina Total, Directa e Indirecta",
        "Transaminasas (TGO, TGP), Fosfatasa Alcalina (FA) y GGTP",
        "Hemograma, Frotis de sangre (hemólisis)",
        "TP/INR, Albúmina"
      ],
      "imaging": [
        "Ecografía Abdominal Superior (Ecolocalización de vía biliar dilatada o cálculos)",
        "CPRE o Colangio-TC si hay obstrucción"
      ],
      "differential": [
        "Coledocolitiasis / Colangitis",
        "Hepatitis viral o farmacológica",
        "Anemia Hemolítica",
        "Cáncer de Páncreas / Vía Biliar"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Ácido Ursodeoxicólico",
          "doseMgPerKgDay": 13,
          "adultFixedDose": "300 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 900,
          "notes": "10-15 mg/kg/día para prurito colestásico"
        },
        {
          "drug": "Vitamina K1 (Fitomenadiona)",
          "adultFixedDose": "10 mg",
          "route": "EV / SC",
          "defaultFreqHours": 24,
          "notes": "Si hay TP prolongado por malabsorción de liposolubles"
        }
      ],
      "firstLine": [
        {
          "drug": "Tratamiento Etiológico de la Causa Subyacente",
          "dose": "Según diagnóstico",
          "route": "VO/EV",
          "freq": "Según caso",
          "notes": "Descompresión biliar o antivirales"
        }
      ],
      "alternatives": [
        {
          "drug": "Colestiramina",
          "dose": "4 g",
          "route": "VO",
          "freq": "cada 8 a 12 horas antes de alimentos",
          "notes": "Para alivio del prurito por sales biliares"
        }
      ],
      "nonPharm": [
        "Dieta hipograsa en colestasis",
        "Suspensión de fármacos hepatotóxicos (Alcohol, Paracetamol en exceso, AINEs)",
        "Hidratación cutánea"
      ],
      "nursingCare": [
        "INSPECCIÓN DILIGENTE DE ESCLERAS Y BOCA: Evaluar ictericia bajo luz natural.",
        "CONTROL DE CARACTERÍSTICAS DE ORINA Y HECES: Registrar presencia de coluria o acolia.",
        "CUIDADO DE LA PIEL Y PRURITO: Mantener uñas cortas y limpias para evitar excoriaciones por rascado, aplicar lociones humectantes.",
        "MONITOREO DE PERFIL DE COAGULACIÓN: Evaluar aparición de hematomas o sangrados si el INR está elevado."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "vertigo",
    "title": "Vértigo Periférico y Central (H81)",
    "cie10": "H81",
    "category": "Neurología y Psiquiatría",
    "definition": "Sensación ilusoria de movimiento o giro de los objetos del entorno, clasificado en Periférico (laberinto/nervio vestibular - 85%) o Central (tronco encefálico/cerebelo - 15%).",
    "symptoms": [
      "Sensación de giro de objetos",
      "Nistagmo horizontal-rotatorio que fatiga (Periférico) o vertical/puro no fatigable (Central)",
      "Náuseas, vómitos y ataxia",
      "Tinnitus o hipoacusia en causas periféricas"
    ],
    "redFlags": [
      "Déficit neurológico focal (diplopía, disartria, hemiparesia)",
      "Ataxia cerebelosa severa (incapacidad para mantenerse de pie)",
      "Cefalea intensa súbita o nistagmo vertical puro",
      "Factores de riesgo cardiovascular elevados"
    ],
    "diagnosis": {
      "criteria": "Examen neurológico y maniobras vestibulares (Protocolo HINTS: Head Impulse, Nystagmus, Test of Skew).",
      "labTests": [
        "Glicemia, Electrólitos, Perfil lipídico"
      ],
      "imaging": [
        "TC / Resonancia Magnética Cerebral urgente si HINTS sugiere origen Central"
      ],
      "differential": [
        "Vértigo Posicional Paroxístico Benigno (VPPB)",
        "Neuronitis Vestibular / Laberintitis",
        "ACV Cerebeloso / Tronco",
        "Enfermedad de Menière"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Dimenhidrinato",
          "doseMgPerKgDose": 1,
          "adultFixedDose": "50 mg",
          "route": "EV / VO / IM",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 300,
          "notes": "Sedante vestibular de 1ª elección en crisis"
        },
        {
          "drug": "Betahistina",
          "adultFixedDose": "16 a 24 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 48,
          "notes": "Tratamiento de mantenimiento"
        },
        {
          "drug": "Diazepam",
          "adultFixedDose": "5 mg",
          "route": "VO / EV lento",
          "defaultFreqHours": 12,
          "notes": "Sedante vestibular en crisis aguda severa"
        }
      ],
      "firstLine": [
        {
          "drug": "Dimenhidrinato EV / VO",
          "dose": "50 mg",
          "route": "EV / VO",
          "freq": "cada 8 horas condicional a vómitos/crisis",
          "notes": "Uso por 3-5 días máximo"
        }
      ],
      "alternatives": [
        {
          "drug": "Betahistina",
          "dose": "16 mg",
          "route": "VO",
          "freq": "cada 8 a 12 horas",
          "notes": "Especialmente en Enfermedad de Menière"
        }
      ],
      "nonPharm": [
        "Maniobras de Reposicionamiento de Epley en VPPB",
        "Reposo en cama en penumbra",
        "Evitar cambios bruscos de posición de la cabeza"
      ],
      "nursingCare": [
        "PREVENCIÓN CAÍDAS: Mantener barandas elevadas, deambulación asistida estricta.",
        "ADMINISTRACIÓN DE ANTIEMÉTICOS/SEDANTES: Pasar Dimenhidrinato EV lento diluido.",
        "EVALUACIÓN DEL NISTAGMO Y ATAXIA: Observar dirección del movimiento ocular y capacidad de sustentación.",
        "REPOSO EN AMBIENTE TRANQUILO: Reducir luces intensas y ruidos."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "nac",
    "title": "Neumonía Adquirida en la Comunidad (NAC)",
    "cie10": "J15",
    "category": "Respiratorio",
    "definition": "Infección del parénquima pulmonar ocasionada por gérmenes patógenos (Streptococcus pneumoniae, Haemophilus influenzae, Mycoplasma pneumoniae, virus respiratorios) adquirida en el ámbito ambulatorio.",
    "symptoms": [
      "Tos con expectoración mucopurulenta o herrumbrosa",
      "Fiebre (>38 °C) con escalofríos y diaforesis nocturna",
      "Dolor torácico pleurítico",
      "Disnea y taquipnea (>20 rpm)",
      "Estertores crepitantes y soplo tubárico"
    ],
    "redFlags": [
      "Saturación de O2 < 90%",
      "Puntaje CURB-65 ≥ 2",
      "PAS < 90 mmHg o PAM < 65 mmHg",
      "Confusión aguda",
      "FR ≥ 30/min"
    ],
    "diagnosis": {
      "criteria": "Infiltrado pulmonar nuevo en radiografía de tórax asociado a cuadro clínico de infección respiratoria baja.",
      "labTests": [
        "Hemograma completo (Leucocitosis/Desviación izquierda)",
        "PCR y Procalcitonina",
        "Urea y Creatinina séricas (CURB-65)",
        "Gasometría arterial",
        "Hemocultivos x 2 y cultivo de esputo"
      ],
      "imaging": [
        "Rx de tórax PA y lateral",
        "Ecografía torácica o TC en sospecha de empiema"
      ],
      "differential": [
        "Tromboembolia Pulmonar (TEP)",
        "Insuficiencia Cardíaca Congestiva",
        "Tuberculosis Pulmonar",
        "Exacerbación de EPOC"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Amoxicilina",
          "doseMgPerKgDay": 90,
          "adultFixedDose": "1000 mg",
          "route": "VO",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 3000,
          "suspensionMgPer5mL": 250,
          "notes": "80-90 mg/kg/día en niños repartido c/8h"
        },
        {
          "drug": "Amoxicilina / Clavulánico",
          "doseMgPerKgDay": 80,
          "adultFixedDose": "875/125 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 2000,
          "suspensionMgPer5mL": 400,
          "notes": "Repartido c/12h con alimentos"
        },
        {
          "drug": "Ceftriaxona EV",
          "doseMgPerKgDay": 75,
          "adultFixedDose": "2000 mg",
          "route": "EV",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 4000,
          "notes": "Diluir en 100 mL ClNa 0.9% en 30 min"
        },
        {
          "drug": "Azitromicina",
          "doseMgPerKgDay": 10,
          "adultFixedDose": "500 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 500,
          "suspensionMgPer5mL": 200,
          "notes": "10 mg/kg día 1, luego 5 mg/kg por 4 días"
        }
      ],
      "firstLine": [
        {
          "drug": "Amoxicilina",
          "dose": "1 g VO c/8h (Adultos) / 90 mg/kg/día (Niños)",
          "route": "VO",
          "freq": "cada 8 horas por 5-7 días",
          "notes": "Ambulatorio sin comorbilidad"
        },
        {
          "drug": "Ceftriaxona",
          "dose": "2 g",
          "route": "EV",
          "freq": "cada 24 horas por 7-10 días",
          "notes": "Hospitalizado sala general"
        }
      ],
      "alternatives": [
        {
          "drug": "Levofloxacino",
          "dose": "750 mg",
          "route": "VO / EV",
          "freq": "cada 24 horas por 5 días",
          "notes": "Alérgicos a penicilina"
        }
      ],
      "nonPharm": [
        "Oxigenoterapia para SatO2 > 92%",
        "Posición Fowler (30-45°)",
        "Hidratación 2000-2500 mL/día",
        "Kinesioterapia respiratoria"
      ],
      "nursingCare": [
        "CÁLCULO EXACTO POR PESO EN PEDIATRÍA: Verificar el peso real antes de preparar Amoxicilina (90 mg/kg/día dividido c/8h).",
        "MONITOREO VENTILATORIO: Registrar FR y SatO2 cada 2-4h. Reportar si FR > 28/min o SatO2 < 90%.",
        "ADMINISTRACIÓN DE ANTIBIÓTICO EN HORA: Garantizar la primera dosis EV en la primera hora del diagnóstico.",
        "POSICIONAMIENTO FOWLER: Mantener cabecera a 30-45° para mejorar excursión diafragmática.",
        "MANEJO DE SECRECIONES: Valorar volumen y aspecto del esputo. Estimular la tos efectiva e hidratación."
      ],
      "severityLevels": [
        {
          "level": "CURB-65 = 0-1",
          "description": "Leve. Riesgo <1.5%",
          "management": "Tratamiento ambulatorio oral."
        },
        {
          "level": "CURB-65 = 2",
          "description": "Moderado. Riesgo ~9%",
          "management": "Hospitalización en sala general."
        },
        {
          "level": "CURB-65 ≥ 3",
          "description": "Grave. Riesgo >15-30%",
          "management": "Hospitalización urgente en UCI/UCIN con doble esquema."
        }
      ]
    }
  },
  {
    "id": "ivu",
    "title": "Infección de Vías Urinarias (IVU) & Pielonefritis Aguda",
    "cie10": "N39.0 / N10",
    "category": "Nefro-Urología",
    "definition": "Infección bacteriana del tracto urinario que abarca cistitis (baja) o pielonefritis (alta/parenquimatosa). Agente principal: Escherichia coli (70-95%).",
    "symptoms": [
      "Cistitis: Disuria, polaquiuria, tenesmo vesical, dolor suprapúbico",
      "Pielonefritis: Fiebre con escalofríos, dolor lumbar/flanco (PPL +) y náuseas/vómitos",
      "Adulto mayor: Confusión o incontinencia"
    ],
    "redFlags": [
      "Inestabilidad hemodinámica / Urosepsis",
      "Anuria o oliguria severa",
      "Vómitos incoercibles",
      "Gestación",
      "Absceso renal o litiasis obstructiva"
    ],
    "diagnosis": {
      "criteria": "Sintomatología urinaria compatible + Leucocituria en examen de orina + Urocultivo positivo (>10^5 UFC/mL).",
      "labTests": [
        "Examen de orina (Esterasa +, Nitritos +, Leucocitos > 10/campo)",
        "Urocultivo con antibiograma",
        "Hemograma, Urea, Creatinina y PCR si hay fiebre",
        "Hemocultivos x 2"
      ],
      "imaging": [
        "Ecografía renal y de vías urinarias",
        "Uro-TC con contraste si persiste fiebre a las 72h"
      ],
      "differential": [
        "Vaginitis / Cervicitis",
        "Prostatitis bacteriana",
        "Urolitiasis no infectada",
        "Cistitis interstitials"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Nitrofurantoína",
          "doseMgPerKgDay": 5,
          "adultFixedDose": "100 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 400,
          "notes": "Cistitis no complicada (Evitar si TFG < 30 mL/min)"
        },
        {
          "drug": "Ciprofloxacino",
          "doseMgPerKgDay": 20,
          "adultFixedDose": "500 mg VO / 400 mg EV",
          "route": "VO / EV",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 1000,
          "notes": "Pielonefritis. 20 mg/kg/día c/12h"
        },
        {
          "drug": "Ceftriaxona",
          "doseMgPerKgDay": 50,
          "adultFixedDose": "2000 mg",
          "route": "EV",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 2000,
          "notes": "50-75 mg/kg/día en Pielonefritis hospitalizada"
        }
      ],
      "firstLine": [
        {
          "drug": "Nitrofurantoína",
          "dose": "100 mg",
          "route": "VO",
          "freq": "cada 12 horas por 5 días",
          "notes": "Cistitis no complicada"
        },
        {
          "drug": "Ceftriaxona",
          "dose": "2 g",
          "route": "EV",
          "freq": "cada 24 horas por 7-10 días",
          "notes": "Pielonefritis aguda"
        }
      ],
      "alternatives": [
        {
          "drug": "Ertapenem",
          "dose": "1 g",
          "route": "EV",
          "freq": "cada 24 horas por 7-10 días",
          "notes": "Enterobacteria BLEE (+)"
        }
      ],
      "nonPharm": [
        "Ingesta de agua 2.5 - 3 L/día",
        "Micción frecuente cada 2-3 horas y poscoital",
        "Higiene perineal de adelante hacia atrás"
      ],
      "nursingCare": [
        "VERIFICACIÓN RENAL PREVIA: Confirmar TFG > 30 mL/min antes de administrar Nitrofurantoína.",
        "TOMA DE UROCULTIVO PRE-ANTIBIÓTICO: Recolectar orina de chorro medio con aseo previo ANTES de la 1ª dosis.",
        "MONITOREO DE DIURESIS Y BALANCE: Medir ingresos y egresos. Notificar si diuresis < 0.5 mL/kg/h.",
        "CUIDADO DE SONDA FOLEY: Mantener sistema cerrado y bolsa colectora por debajo de la vejiga."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "sepsis",
    "title": "Sepsis y Choque Séptico (A41.9 / R57.2)",
    "cie10": "A41.9 / R57.2",
    "category": "Urgencias e Intoxicaciones",
    "definition": "Disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a la infección. Choque Séptico: Requiere vasopresores para PAM ≥ 65 mmHg y lactato > 2 mmol/L.",
    "symptoms": [
      "Fiebre (>38.3°C) o hipotermia (<36°C)",
      "Taquicardia (>90 lpm) y taquipnea (>22 rpm)",
      "Alteración del estado mental",
      "Piel pálida, moteada, fría con llenado capilar >3s",
      "Oliguria o anuria"
    ],
    "redFlags": [
      "PAS < 90 mmHg",
      "Lactato sérico > 4 mmol/L",
      "qSOFA ≥ 2",
      "Trombocitopenia < 100,000/uL",
      "Falla multiorgánica"
    ],
    "diagnosis": {
      "criteria": "qSOFA ≥ 2 o aumento en SOFA ≥ 2 en presencia de foco infeccioso.",
      "labTests": [
        "Lactato sérico cuantitativo",
        "Hemocultivos x 2 aeróbico/anaeróbico",
        "Gasometría arterial",
        "Hemograma, TP, TTPa, Dímero D",
        "Urea, Creatinina, Bilirrubinas, Procalcitonina"
      ],
      "imaging": [
        "Rx de tórax, ecografía o TC abdominal según foco"
      ],
      "differential": [
        "Choque cardiogénico o hipovolémico",
        "TEP masivo",
        "Anafilaxia grave",
        "Crisis addisoniana"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Cristaloides (Resucitación)",
          "doseMgPerKgDose": 30,
          "route": "EV rápido",
          "defaultFreqHours": 3,
          "notes": "30 mL/kg en las primeras 3 horas (ej. 70 kg = 2100 mL)"
        },
        {
          "drug": "Norepinefrina",
          "adultFixedDose": "0.05 a 0.5 mcg/kg/min",
          "route": "EV Bomba",
          "defaultFreqHours": 1,
          "notes": "Titular para PAM ≥ 65 mmHg"
        },
        {
          "drug": "Piperacilina / Tazobactam",
          "doseMgPerKgDay": 240,
          "adultFixedDose": "4.5 g",
          "route": "EV",
          "defaultFreqHours": 6,
          "maxDoseMgPerDay": 18000,
          "notes": "4.5 g EV c/6h en infusión de 3 horas"
        }
      ],
      "firstLine": [
        {
          "drug": "Solución Salina 0.9% / Lactato Ringer",
          "dose": "30 mL/kg (ej. 70 kg = 2100 mL)",
          "route": "EV",
          "freq": "en las primeras 3 horas",
          "notes": "Resucitación con fluidos"
        },
        {
          "drug": "Norepinefrina",
          "dose": "0.05 a 0.5 mcg/kg/min",
          "route": "EV Bomba",
          "freq": "Infusión continua",
          "notes": "Vasopresor de 1ª elección (Vía Central)"
        },
        {
          "drug": "Piperacilina/Tazobactam + Vancomicina",
          "dose": "4.5 g EV c/6h + 15-20 mg/kg EV c/12h",
          "route": "EV",
          "freq": "Dentro de la 1ª hora",
          "notes": "Empírico amplio espectro"
        }
      ],
      "alternatives": [
        {
          "drug": "Meropenem",
          "dose": "1 g",
          "route": "EV",
          "freq": "cada 8 horas",
          "notes": "Sospecha de gérmenes BLEE"
        }
      ],
      "nonPharm": [
        "Aseguramiento de vía aérea y Ventilación Mecánica si PaO2/FiO2 < 300",
        "Catéter Venoso Central y Línea Arterial",
        "Sonda vesical con diuresis horaria"
      ],
      "nursingCare": [
        "CÁLCULO EXACTO DE VOLUMEN Y VASOPRESORES: Calcular 30 mL/kg según peso real. Preparar Norepinefrina en bomba de infusión por vía central.",
        "PAQUETE DE LA 1ª HORA: 1) Lactato, 2) Hemocultivos x 2, 3) Antibiótico amplio espectro, 4) Cristaloides 30 mL/kg, 5) Vasopresores si PAM < 65.",
        "MONITOREO HEMODINÁMICO: PAM objetivo ≥ 65 mmHg. Control de diuresis horaria (notificar si < 0.5 mL/kg/h).",
        "PREVENCIÓN DE EXTRAVASACIÓN: Si se usa vasopresor en vía periférica temporal, vigilar sitio cada 15 min."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "tb",
    "title": "Tuberculosis Pulmonar (A15)",
    "cie10": "A15",
    "category": "Infectología",
    "definition": "Enfermedad infectocontagiosa crónica producida por Mycobacterium tuberculosis (Bacilo de Koch) transmitida por vía aérea.",
    "symptoms": [
      "Tos con expectoración > 15 días (Sintomático Respiratorio)",
      "Hemoptisis o esputo estriado con sangre",
      "Fiebre vespertina y diaforesis profusa",
      "Pérdida de peso involuntaria y astenia",
      "Dolor torácico sordo"
    ],
    "redFlags": [
      "Hemoptisis masiva (>600 mL/24h)",
      "Insuficiencia respiratoria aguda",
      "Neumotórax por caverna",
      "Meningitis Tuberculosa",
      "TB-MDR o coinfección VIH"
    ],
    "diagnosis": {
      "criteria": "BK positivo en esputo o GeneXpert MTB/RIF positivo + clínica/radiografía.",
      "labTests": [
        "Baciloscopía en esputo serial (BK x 2)",
        "GeneXpert MTB/RIF",
        "Cultivo Lowenstein-Jensen",
        "Prueba rápida VIH, Glucosa, Creatinina, Perfil Hepático"
      ],
      "imaging": [
        "Rx de tórax PA (Infiltrados apicales, cavernas)"
      ],
      "differential": [
        "Neumonía bacteriana",
        "Cáncer de pulmón",
        "Bronquiectasias",
        "Histoplasmosis"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Isoniazida (H)",
          "doseMgPerKgDay": 5,
          "adultFixedDose": "300 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 300,
          "notes": "5 mg/kg/día en 1ª fase (máx 300mg/día)"
        },
        {
          "drug": "Rifampicina (R)",
          "doseMgPerKgDay": 10,
          "adultFixedDose": "600 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 600,
          "notes": "10 mg/kg/día en ayunas"
        },
        {
          "drug": "Pirazinamida (Z)",
          "doseMgPerKgDay": 25,
          "adultFixedDose": "1500 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 2000,
          "notes": "25 mg/kg/día (Solo primeros 2 meses)"
        },
        {
          "drug": "Etambutol (E)",
          "doseMgPerKgDay": 20,
          "adultFixedDose": "1200 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 1600,
          "notes": "15-20 mg/kg/día (Solo primeros 2 meses)"
        }
      ],
      "firstLine": [
        {
          "drug": "Esquema 2HRZE / 4HR (Sensible)",
          "dose": "Fase 1 (2 meses): H 300mg + R 600mg + Z 1500mg + E 1200mg",
          "route": "VO",
          "freq": "Diario (Lunes a Sábado)",
          "notes": "Fase Intensiva DFC"
        },
        {
          "drug": "Fase Mantenimiento (4 meses)",
          "dose": "H 800 mg + R 600 mg",
          "route": "VO",
          "freq": "3 veces por semana (L-M-V)",
          "notes": "Fase de Mantenimiento"
        }
      ],
      "alternatives": [
        {
          "drug": "BPaLM (TB-MDR)",
          "dose": "Bedaquilina + Pretomanid + Linezolid + Moxifloxacino",
          "route": "VO",
          "freq": "6 meses según MINSA",
          "notes": "TB Multidrogoresistente"
        }
      ],
      "nonPharm": [
        "Aislamiento respiratorio por 2-3 semanas iniciales",
        "Uso de mascarilla N95 por personal y quirúrgica por paciente",
        "Habitación con ventilación e iluminación solar"
      ],
      "nursingCare": [
        "DOSIFICACIÓN AJUSTADA POR PESO: Ajustar cantidad de tabletas DFC según rango de peso (<35kg, 35-49kg, 50-64kg, ≥65kg).",
        "ESTRATEGIA TDO / DOTS: Observar e inspeccionar directamente la ingesta de las pastillas en boca.",
        "MONITOREO DE RAMS: Detectar ictericia (Isoniazida/Rifampicina/Pirazinamida), visión de colores (Etambutol) y administrar Piridoxina (Vitamina B6 50 mg/día) para neuritis.",
        "EDUCACIÓN DE FLUIDOS: Advertir que Rifampicina tiñe orina, lágrimas y sudor de color rojo/anaranjado.",
        "CONTROL BACTERIOLÓGICO: Recolectar esputo para BK de control al final del 2°, 4° y 6° mes."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "htn",
    "title": "Hipertensión Arterial (HTA) & Crisis Hipertensiva (I10)",
    "cie10": "I10 / I67.4",
    "category": "Cardiovascular",
    "definition": "Elevación persistente de la PA ≥ 140/90 mmHg. Crisis Hipertensiva: PA > 180/120 mmHg (Urgencia sin daño orgánico agudo; Emergencia con daño agudo de órgano blanco).",
    "symptoms": [
      "Urgencia: Cefalea occipital, tinnitus, acúfenos, mareos",
      "Emergencia: Dolor torácico, disnea, déficit neurológico, visión borrosa",
      "Mayoría asintomática"
    ],
    "redFlags": [
      "PA > 180/120 con dolor torácico o disnea",
      "Déficit motor/sensorial agudo",
      "Edema agudo de pulmón",
      "Gestante con PA ≥ 160/110"
    ],
    "diagnosis": {
      "criteria": "PA ≥ 140/90 mmHg en 2 o más tomas en días distintos o MAPA 24h ≥ 130/80 mmHg.",
      "labTests": [
        "Examen completo de orina (proteinuria)",
        "Creatinina, Urea, TFG",
        "Glicemia y Perfil Lipídico",
        "Electrólitos",
        "Troponinas en emergencia"
      ],
      "imaging": [
        "ECG 12 derivaciones (HVI)",
        "Rx de tórax y Ecocardiograma",
        "TC cerebral si hay síntoma neurológico"
      ],
      "differential": [
        "Hipertensión secundaria",
        "Efecto de bata blanca",
        "Ataque de pánico"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Enalapril",
          "adultFixedDose": "10 a 20 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 40,
          "notes": "IECA de elección"
        },
        {
          "drug": "Losartán",
          "adultFixedDose": "50 a 100 mg",
          "route": "VO",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 100,
          "notes": "ARA-II de elección"
        },
        {
          "drug": "Amlodipino",
          "adultFixedDose": "5 a 10 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 10,
          "notes": "Calcioantagonista"
        },
        {
          "drug": "Labetalol EV",
          "doseMgPerKgDose": 0.25,
          "adultFixedDose": "20 mg",
          "route": "EV",
          "defaultFreqHours": 1,
          "maxDoseMgPerDay": 300,
          "notes": "Bolo de 20 mg EV en 2 min; repetir 20-80 mg c/10 min en Emergencia"
        }
      ],
      "firstLine": [
        {
          "drug": "Enalapril / Losartán",
          "dose": "10-20 mg c/12h / 50-100 mg c/24h",
          "route": "VO",
          "freq": "cada 12 a 24 horas",
          "notes": "HTA crónica"
        },
        {
          "drug": "Labetalol",
          "dose": "20 a 80 mg en bolos EV",
          "route": "EV",
          "freq": "cada 10-15 min",
          "notes": "Emergencia Hipertensiva"
        }
      ],
      "alternatives": [
        {
          "drug": "Captopril",
          "dose": "25 mg",
          "route": "VO / SL",
          "freq": "Condicional",
          "notes": "Urgencia Hipertensiva"
        }
      ],
      "nonPharm": [
        "Dieta DASH (<2g sodio/día)",
        "Reducción de peso (IMC < 25)",
        "Ejercicio aeróbico 150 min/semana",
        "Cese de tabaco/alcohol"
      ],
      "nursingCare": [
        "TÉCNICA DE MEDICIÓN CORRECTA: Manguito adecuado al brazo, paciente sentado con reposo previo de 5 min.",
        "MANEJO DE URGENCIA VS EMERGENCIA: En Urgencia reducir PA gradualmente en 24-48h con VO. En Emergencia reducir PAM no más del 20-25% en la 1ª hora usando vía EV.",
        "MONITOREO DE INFUSIÓN EV: Control de PA cada 5-15 min durante titulación de Labetalol.",
        "DETECCIÓN DE DAÑO A ÓRGANO BLANCO: Controlar aparición de dolor torácico, disnea o visión borrosa."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "iam",
    "title": "Infarto Agudo de Miocardio (IAMCEST / IAMSEST) (I21)",
    "cie10": "I21",
    "category": "Cardiovascular",
    "definition": "Necrosis miocárdica por oclusión coronaria aguda por trombo sobre placa ateroesclerótica.",
    "symptoms": [
      "Dolor precordial retroesternal opresivo intenso (>20 min)",
      "Irradiación a brazo izquierdo, cuello, mandíbula",
      "Diaforesis fría, palidez, náuseas",
      "Disnea y arritmias"
    ],
    "redFlags": [
      "Shock cardiogénico (PAS < 90 mmHg)",
      "Edema Agudo de Pulmón",
      "Fibrilación / Taquicardia Ventricular",
      "Bloqueo AV completo"
    ],
    "diagnosis": {
      "criteria": "Elevación de Troponinas + ECG con cambios isquémicos (ST o nuevo BRIHH) o clínica típica.",
      "labTests": [
        "Troponina I o T Ultrasensible",
        "CK-MB",
        "Perfil lipídico, Glicemia, Creatinina, Electrólitos, TP/TTPa"
      ],
      "imaging": [
        "ECG 12 derivaciones en < 10 min",
        "Ecocardiograma urgente",
        "Cateterismo Coronario (ICP primaria)"
      ],
      "differential": [
        "Disección Aórtica",
        "Tromboembolismo Pulmonar",
        "Pericarditis Aguda",
        "Espasmo esofágico"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Aspirina (AAS)",
          "adultFixedDose": "160 a 300 mg",
          "route": "VO Masticada",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 300,
          "notes": "Carga inmediata masticada"
        },
        {
          "drug": "Clopidogrel",
          "adultFixedDose": "300 a 600 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 600,
          "notes": "Carga 300mg (600mg en ICP)"
        },
        {
          "drug": "Enoxaparina",
          "doseMgPerKgDose": 1,
          "adultFixedDose": "30 mg EV bolo + 1 mg/kg SC",
          "route": "EV / SC",
          "defaultFreqHours": 12,
          "notes": "1 mg/kg SC cada 12 horas"
        }
      ],
      "firstLine": [
        {
          "drug": "Aspirina + Clopidogrel (DAP)",
          "dose": "AAS 300mg masticado + Clopidogrel 300-600mg",
          "route": "VO",
          "freq": "Carga inmediata",
          "notes": "Doble antiagregación"
        },
        {
          "drug": "Enoxaparina",
          "dose": "1 mg/kg",
          "route": "SC",
          "freq": "cada 12 horas",
          "notes": "Anticoagulación"
        }
      ],
      "alternatives": [
        {
          "drug": "Alteplasa / Tenecteplasa",
          "dose": "Según peso",
          "route": "EV",
          "freq": "Dosis única en <30 min",
          "notes": "Fibrinólisis si no hay ICP en < 120 min"
        }
      ],
      "nonPharm": [
        "Reposo absoluto 24h",
        "ICP primaria (Angioplastia) en < 90 min",
        "Oxígeno solo si SatO2 < 90%"
      ],
      "nursingCare": [
        "ECG EN < 10 MINUTOS: Tomar e interpretar ECG de 12 derivaciones inmediatamente.",
        "CARGA DE ANTIAGREGANTES: Asegurar que Aspirina 300mg sea MASTICADA.",
        "CARRO DE PARO AL LADO: Desfibrilador listo por riesgo de Fibrilación Ventricular.",
        "DOS VÍAS VENOSAS PERIFÉRICAS: Canalizar abocath N° 18 o 20.",
        "MANEJO DEL DOLOR: Administrar Morfina EV fraccionada (2-4 mg) monitoreando FR y PA."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "asma",
    "title": "Asma Bronquial & Crisis Asmática Aguda (J45)",
    "cie10": "J45",
    "category": "Respiratorio",
    "definition": "Enfermedad inflamatoria crónica de las vías aéreas con hiperreactividad bronquial y obstrucción reversible del flujo aéreo.",
    "symptoms": [
      "Sibilancias espiratorias polifónicas",
      "Tos seca paroxística nocturna",
      "Disnea u opresión torácica",
      "Uso de músculos accesorios"
    ],
    "redFlags": [
      "Tórax silente",
      "Incapacidad para hablar frases",
      "Cianosis y fatiga muscular",
      "PEF < 33%",
      "Alteración del sensorio"
    ],
    "diagnosis": {
      "criteria": "Espirometría obstructiva (VEF1/CVF < 0.70) con prueba de broncodilatación positiva (>12% y >200 mL).",
      "labTests": [
        "Flujometría (PEF)",
        "Gasometría arterial en crisis grave",
        "Hemograma, IgE total"
      ],
      "imaging": [
        "Rx de tórax (hiperinsuflación)"
      ],
      "differential": [
        "EPOC",
        "Insuficiencia cardíaca",
        "Cuerpo extraño",
        "Disfunción de cuerdas vocales"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Salbutamol Nebulizado",
          "doseMgPerKgDose": 0.15,
          "adultFixedDose": "2.5 a 5 mg",
          "route": "Nebulización / Inhalación",
          "defaultFreqHours": 0.33,
          "notes": "0.15 mg/kg (Mín 2.5 mg) c/20 min x 3 dosis en 1ª hora"
        },
        {
          "drug": "Prednisona VO",
          "doseMgPerKgDay": 1,
          "adultFixedDose": "40 a 50 mg",
          "route": "VO",
          "defaultFreqHours": 24,
          "maxDoseMgPerDay": 60,
          "notes": "1-2 mg/kg/día por 5-7 días"
        },
        {
          "drug": "Hidrocortisona EV",
          "doseMgPerKgDose": 4,
          "adultFixedDose": "100 a 200 mg",
          "route": "EV",
          "defaultFreqHours": 6,
          "maxDoseMgPerDay": 800,
          "notes": "4-8 mg/kg/dosis EV c/6h"
        }
      ],
      "firstLine": [
        {
          "drug": "Salbutamol",
          "dose": "4-10 puffs o NBZ 2.5-5 mg",
          "route": "Inhalatoria",
          "freq": "cada 20 min por 1 hora",
          "notes": "Broncodilatador SABA"
        },
        {
          "drug": "Prednisona / Hidrocortisona",
          "dose": "Prednisona 40-50 mg VO / Hidrocortisona 200 mg EV",
          "route": "VO / EV",
          "freq": "cada 24h VO / c/6h EV",
          "notes": "Corticoide sistémico"
        }
      ],
      "alternatives": [
        {
          "drug": "Sulfato de Magnesio",
          "dose": "2 g (40-50 mg/kg en niños)",
          "route": "EV",
          "freq": "Infusión en 20 min",
          "notes": "Crisis grave refractaria"
        }
      ],
      "nonPharm": [
        "Posición Fowler (90°)",
        "Oxigenoterapia húmeda SatO2 93-95%",
        "Ambiente sin alérgenos"
      ],
      "nursingCare": [
        "CÁLCULO PEDIÁTRICO: Salbutamol NBZ a 0.15 mg/kg (gotas = peso x 0.03 mL en suero salino hasta 3-4 mL).",
        "TÉCNICA DE INHALACIÓN CON AEROCÁMARA: Administrar 1 puff a la vez y mantener 10 respiraciones por puff.",
        "EVALUACIÓN DE RESPUESTA: Auscultar ruidos respiratorios, medir FR, SatO2 y FC antes y después de nebulizar.",
        "VIGILAR TÓRAX SILENTE: Si desaparecen sibilancias y el paciente se agota, avisar inmediatamente para intubación."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "meningitis",
    "title": "Meningitis Bacteriana Aguda (G00)",
    "cie10": "G00",
    "category": "Infectología",
    "definition": "Infección supurativa de las meninges y LCR (Neumococo, Meningococo, Listeria). Emergencia médica.",
    "symptoms": [
      "Fiebre alta, rigidez de nuca y confusión",
      "Cefalea severa con fotofobia",
      "Signos de Kernig y Brudzinski positivos",
      "Vómitos proyectiles",
      "Petequias/Púrpura"
    ],
    "redFlags": [
      "Glasgow < 8",
      "Focalización o convulsiones",
      "Púrpura fulminante",
      "Tríada de Cushing"
    ],
    "diagnosis": {
      "criteria": "Estudio citoquímico de LCR por Punción Lumbar (PMN > 80%, glucosa baja, proteínas elevadas).",
      "labTests": [
        "LCR: Leucocitos > 1000/uL, PMN %, Glucosa LCR/suero < 0.4, Proteínas > 100 mg/dL",
        "Gram y cultivo LCR",
        "Hemocultivos x 2",
        "Hemograma, PCR"
      ],
      "imaging": [
        "TC cerebral previa a PL si hay signo focal o papiledema"
      ],
      "differential": [
        "Meningitis viral",
        "Meningitis tuberculosa",
        "Hemorragia subaracnoidea",
        "Encefalitis herpética"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Dexametasona",
          "doseMgPerKgDose": 0.15,
          "adultFixedDose": "10 mg",
          "route": "EV",
          "defaultFreqHours": 6,
          "maxDoseMgPerDay": 40,
          "notes": "Administrar 15-20 min ANTES del antibiótico"
        },
        {
          "drug": "Ceftriaxona",
          "doseMgPerKgDay": 100,
          "adultFixedDose": "2000 mg",
          "route": "EV",
          "defaultFreqHours": 12,
          "maxDoseMgPerDay": 4000,
          "notes": "2 g EV cada 12 horas (100 mg/kg/día en niños)"
        },
        {
          "drug": "Vancomicina",
          "doseMgPerKgDose": 15,
          "adultFixedDose": "1000 a 1500 mg",
          "route": "EV",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 3000,
          "notes": "15-20 mg/kg EV c/8-12h"
        }
      ],
      "firstLine": [
        {
          "drug": "Dexametasona",
          "dose": "10 mg (0.15 mg/kg)",
          "route": "EV",
          "freq": "cada 6 horas por 4 días",
          "notes": "PREVIA al antibiótico"
        },
        {
          "drug": "Ceftriaxona + Vancomicina",
          "dose": "Ceftriaxona 2 g EV c/12h + Vancomicina 15-20 mg/kg EV c/8-12h",
          "route": "EV",
          "freq": "cada 12h / 8-12h",
          "notes": "Esquema empírico de elección"
        }
      ],
      "alternatives": [
        {
          "drug": "Meropenem",
          "dose": "2 g",
          "route": "EV",
          "freq": "cada 8 horas",
          "notes": "Alergia grave a penicilinas"
        }
      ],
      "nonPharm": [
        "Aislamiento por gotas 24h",
        "Cabecera a 30°",
        "Profilaxis a contactos"
      ],
      "nursingCare": [
        "ADMINISTRACIÓN DE DEXAMETASONA PREVIA: Dexametasona EV 15-20 min ANTES de la Ceftriaxona para prevenir secuelas auditivas.",
        "URGENCIA TIEMPO-DEPENDIENTE: Pasar antibióticos EV en menos de 30 minutos.",
        "AISLAMIENTO POR GOTAS: Implementar mascarilla N95/quirúrgica las primeras 24h.",
        "MONITOREO NEUROLÓGICO: Evaluar Glasgow y reacción pupilar cada 1-2 horas."
      ],
      "severityLevels": []
    }
  },
  {
    "id": "anemia",
    "title": "Anemia Ferropénica (D50)",
    "cie10": "D50",
    "category": "Hematología y Reumatología",
    "definition": "Disminución de la hemoglobina (Hb < 12 g/dL en mujeres, < 13 g/dL en varones) por agotamiento de depósitos de hierro.",
    "symptoms": [
      "Astenia, fatiga y debilidad",
      "Palidez de mucosas y conjuntivas",
      "Disnea de esfuerzo y palpitaciones",
      "Coiloniquia y pica"
    ],
    "redFlags": [
      "Hb < 7.0 g/dL con inestabilidad hemodinámica",
      "Hemorragia digestiva activa",
      "Angina o insuficiencia cardíaca desencadenada"
    ],
    "diagnosis": {
      "criteria": "Hb baja + Microcitosis (VCM < 80) + Hipocromía + Ferritina < 30 ug/L.",
      "labTests": [
        "Hemograma (VCM, HCM, RDW elevado)",
        "Ferritina sérica (<30 ug/L)",
        "Hierro sérico y TIBC",
        "Thevenon en heces"
      ],
      "imaging": [
        "Endoscopia y Colonoscopia para buscar sangrado"
      ],
      "differential": [
        "Talasemia minor",
        "Anemia de enfermedad crónica",
        "Anemia megaloblástica"
      ]
    },
    "treatment": {
      "dosingRules": [
        {
          "drug": "Sulfato Ferroso (300mg = 60mg Fe)",
          "doseMgPerKgDay": 3,
          "adultFixedDose": "300 mg",
          "route": "VO",
          "defaultFreqHours": 8,
          "maxDoseMgPerDay": 200,
          "suspensionMgPer5mL": 75,
          "notes": "3-6 mg/kg/día en niños en ayunas"
        },
        {
          "drug": "Hierro Sacarosa EV",
          "doseMgPerKgDose": 5,
          "adultFixedDose": "100 a 200 mg",
          "route": "EV Infusión",
          "defaultFreqHours": 48,
          "notes": "Fórmula Ganzoni. Máx 200mg por sesión en 100mL ClNa"
        }
      ],
      "firstLine": [
        {
          "drug": "Sulfato Ferroso",
          "dose": "300 mg (60 mg Fe elemental)",
          "route": "VO",
          "freq": "cada 8 a 12 horas en ayunas",
          "notes": "Con jugo de naranja"
        }
      ],
      "alternatives": [
        {
          "drug": "Hierro Sacarosa EV",
          "dose": "100-200 mg",
          "route": "EV Infusión",
          "freq": "2-3 veces por semana",
          "notes": "Intolerancia oral o anemia severa"
        }
      ],
      "nonPharm": [
        "Dieta con hierro hemínico (sangrecita, hígado)",
        "Evitar té, café y lácteos con el hierro",
        "Tratar causa de sangrado"
      ],
      "nursingCare": [
        "CÁLCULO PEDIÁTRICO DE HIERRO: 1 mL gotas = 25 mg hierro elemental. Calcular 3-6 mg/kg/día.",
        "ADMINISTRACIÓN ORAL: En ayunas con jugo cítrico. NO dar con leche, té o café.",
        "INFORMACIÓN DE HECES NEGRAS: Informar al paciente que las deposiciones se tornarán oscuras.",
        "HIERRO SACAROSA EV: Diluir 100 mg en 100 mL ClNa 0.9% e infundir en 30-45 min vigilando anafilaxia."
      ],
      "severityLevels": []
    }
  }
];
