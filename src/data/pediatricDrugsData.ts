export interface PediatricPresentation {
  form: string;
  concLabel: string;
  concMg: number;
  concMl: number;
  isLiquid: boolean;
  dropsPerMl?: number;
}

export interface PediatricDrug {
  id: string;
  name: string;
  rawName: string;
  category: string;
  standardDose: string;
  doseMgKg: number;
  isDailyDose: boolean;
  defaultFreq: number;
  maxDailyMgKg?: number;
  maxDailyAbsoluteMg?: number;
  presentations: PediatricPresentation[];
  notes: string;
}

export const pediatricDrugsData: PediatricDrug[] = [
  {
    "id": "paracetamol",
    "name": "Paracetamol",
    "rawName": "PARACETAMOL",
    "category": "Analgésico / Antipirético",
    "standardDose": "10 a 15 mg/kg/dosis cada 6 horas (máx 60 mg/kg/día)",
    "doseMgKg": 15,
    "isDailyDose": false,
    "defaultFreq": 4,
    "maxDailyMgKg": 60,
    "maxDailyAbsoluteMg": 4000,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 100 mg / 1 mL (20 gotas)",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 120 mg / 5 mL",
        "concMg": 120,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "ENDOVENOSO",
        "concLabel": "Solución EV 10 mg / mL (Frasco 1000 mg / 100 mL)",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "No exceder 5 dosis en 24 horas ni 4 g al día. Antídoto en sobredosis: N-acetilcisteína."
  },
  {
    "id": "acetazolamida",
    "name": "Acetazolamida",
    "rawName": "ACETAZOLAMIDA",
    "category": "Diurético / Inhibidor Anhidrasa Carbónica",
    "standardDose": "10 a 25 mg/kg/día cada 8 a 12 horas",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 250 mg",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Usado en glaucoma e hidrocefalia. Monitorear electrolitos séricos por riesgo de acidosis metabólica e hipopotasemia."
  },
  {
    "id": "acetilcisteina",
    "name": "Acetilcisteina",
    "rawName": "ACETILCISTEINA",
    "category": "Mucolítico / Antídoto",
    "standardDose": "10 mg/kg/dosis cada 8 horas como mucolítico; en intoxicación por paracetamol seguir protocolo EV",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "SOBRE",
        "concLabel": "Sobres granulado 100 mg y 200 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 100 mg / 5 mL (2%)",
        "concMg": 100,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 300 mg / 3 mL (10%)",
        "concMg": 300,
        "concMl": 3,
        "isLiquid": true
      }
    ],
    "notes": "Antídoto específico en intoxicación aguda por paracetamol. En mucolítico disolver sobre en agua tibia."
  },
  {
    "id": "aciclovir",
    "name": "Aciclovir",
    "rawName": "ACICLOVIR",
    "category": "Antiviral",
    "standardDose": "20 mg/kg/dosis cada 6 horas VO; en encefalitis herpética 10-20 mg/kg/dosis cada 8h EV",
    "doseMgKg": 20,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 200 mg y 400 mg",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "JARABE",
        "concLabel": "Suspensión 200 mg / 5 mL",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Vial EV 250 mg liofilizado (diluir en 50-100 mL)",
        "concMg": 250,
        "concMl": 10,
        "isLiquid": true
      },
      {
        "form": "UNGUENTO OFTALMICO",
        "concLabel": "Ungüento oftálmico 3%",
        "concMg": 30,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "CREMA",
        "concLabel": "Crema tópica 5%",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Asegurar buena hidratación durante la administración EV para prevenir precipitación en túbulos renales."
  },
  {
    "id": "acido_acetilsalicilico",
    "name": "Acido Acetilsalicilico",
    "rawName": "ACIDO ACETILSALICILICO",
    "category": "Antiagregante / Antipirético",
    "standardDose": "10-15 mg/kg/dosis cada 6h (antipirético); 3-5 mg/kg/día como antiagregante; 80-100 mg/kg/día en Kawasaki",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg y 500 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "CONTRAINDICADO en niños con fiebre por virus (influenza/varicela) por riesgo de Síndrome de Reye. Uso estricto en Kawasaki."
  },
  {
    "id": "acido_clavulanico_amoxicilina",
    "name": "Acido Clavulanico - Amoxicilina",
    "rawName": "ACIDO CLAVULANICO - AMOXICILINA",
    "category": "Antibiótico / Betalactámico + Inhibidor",
    "standardDose": "40 a 50 mg/kg/día (dosis estándar) o 80-90 mg/kg/día (en OMA severa) cada 8 o 12 horas",
    "doseMgKg": 40,
    "isDailyDose": true,
    "defaultFreq": 3,
    "maxDailyMgKg": 90,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250/62.5 mg en 5 mL (4:1) o 400/57 mg en 5 mL (7:1)",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500/125 mg o 875/125 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Calcular la dosificación sobre el componente de Amoxicilina. Administrar al inicio de las comidas para mejorar tolerancia GI."
  },
  {
    "id": "acido_folico",
    "name": "Acido Folico",
    "rawName": "ACIDO FOLICO",
    "category": "Vitamina Hematopoyética",
    "standardDose": "0.1 a 1 mg/día según edad y grado de anemia megaloblástica",
    "doseMgKg": 0.1,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 1 mg y 5 mg",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 mg / 1 mL",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Tratamiento de anemias megaloblásticas por deficiencia de folatos y coadyuvante en hemodiálisis o talasemia."
  },
  {
    "id": "acido_fusidico",
    "name": "Acido Fusidico",
    "rawName": "ACIDO FUSIDICO",
    "category": "Antibacteriano Tópico",
    "standardDose": "Aplicación tópica cada 8 a 12 horas en piel afectada",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "CREMA",
        "concLabel": "Crema tópica 2%",
        "concMg": 20,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Excelente actividad frente a Staphylococcus aureus y Streptococcus en impétigo y piodermitis pediátrica."
  },
  {
    "id": "acido_tranexamico",
    "name": "Acido Tranexamico",
    "rawName": "ACIDO TRANEXAMICO",
    "category": "Antifibrinolítico / Hemostático",
    "standardDose": "10 a 15 mg/kg/dosis cada 8 horas",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula / Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Control y profilaxis de hemorragias en hemofilia, sangrado mucocutáneo o postcirugía odontológica."
  },
  {
    "id": "adenosina",
    "name": "Adenosina",
    "rawName": "ADENOSINA",
    "category": "Antiarrítmico de Emergencia",
    "standardDose": "Inicial: 0.1 mg/kg en bolo EV ultrarrápido (máx 6 mg). Si no revierte: 0.2 mg/kg (máx 12 mg)",
    "doseMgKg": 0.1,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 6 mg / 2 mL (3 mg/mL)",
        "concMg": 6,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "¡URGENCIA VITAL!: Aplicar en bolo ultrarrápido (1-2 seg) en vena proximal con llave de 3 vías y lavado inmediato con 5-10 mL de ClNa 0.9%."
  },
  {
    "id": "adrenalina",
    "name": "Adrenalina",
    "rawName": "ADRENALINA",
    "category": "Vasopresor / Anafilaxia / Reanimación",
    "standardDose": "Anafilaxia: 0.01 mg/kg IM (0.01 mL/kg de sol. 1:1000). RCP: 0.01 mg/kg EV (0.1 mL/kg de sol. 1:10000)",
    "doseMgKg": 0.01,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 mg / 1 mL (Solución 1:1000)",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "En anafilaxia inyectar IM en cara anterolateral del muslo (máx 0.3 a 0.5 mg). En RCP usar diluida al 1:10,000."
  },
  {
    "id": "albendazol",
    "name": "Albendazol",
    "rawName": "ALBENDAZOL",
    "category": "Antiparasitario / Antihelmíntico",
    "standardDose": "400 mg dosis única (>2 años) para oxiuros/ascaris; 15 mg/kg/día dividido cada 12h en hidatidosis o neurocisticercosis",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 400 mg / 10 mL (o 200 mg / 5 mL)",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta masticable 200 mg y 400 mg",
        "concMg": 400,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Administrar con alimentos grasos para mejorar la absorción en parasitosis tisulares."
  },
  {
    "id": "albumina_humana",
    "name": "Albumina Humana",
    "rawName": "ALBUMINA HUMANA",
    "category": "Expansor Plasmático / Coloide",
    "standardDose": "0.5 a 1 g/kg (2.5 a 5 mL/kg de solución al 20%) en infusión EV lenta en 30 a 60 min",
    "doseMgKg": 0.5,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco 20% (200 g/L en 50 mL o 100 mL)",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Utilizado en síndrome nefrótico severo con anasarca, shock hipovolémico refractario o paracentesis evacuadora."
  },
  {
    "id": "alopurinol",
    "name": "Alopurinol",
    "rawName": "ALOPURINOL",
    "category": "Hipouricemiante",
    "standardDose": "10 mg/kg/día dividido cada 8 horas (máximo 600 mg/día)",
    "doseMgKg": 10,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg y 300 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Profilaxis del síndrome de lisis tumoral en leucemias y linfomas. Asegurar hiperhidratación."
  },
  {
    "id": "alprazolam",
    "name": "Alprazolam",
    "rawName": "ALPRAZOLAM",
    "category": "Benzodiazepina / Ansiolítico",
    "standardDose": "0.005 a 0.02 mg/kg/dosis cada 8 a 12 horas (uso restringido en pediatría)",
    "doseMgKg": 0.005,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 0.25 mg y 0.5 mg",
        "concMg": 0.25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Uso pediátrico altamente restringido. Monitorear depresión respiratoria y sedación excesiva."
  },
  {
    "id": "ambroxol",
    "name": "Ambroxol",
    "rawName": "AMBROXOL",
    "category": "Mucolítico / Expectorante",
    "standardDose": "1.2 a 1.6 mg/kg/día dividido cada 8 horas",
    "doseMgKg": 1.5,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas pediátricas 7.5 mg / 1 mL",
        "concMg": 7.5,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe pediátrico 15 mg / 5 mL",
        "concMg": 15,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Estimula la síntesis de surfactante y aclara las secreciones traqueobronquiales."
  },
  {
    "id": "amikacina",
    "name": "Amikacina",
    "rawName": "AMIKACINA",
    "category": "Antibiótico / Aminoglucósido",
    "standardDose": "15 mg/kg/día en dosis única diaria cada 24 horas (o 7.5 mg/kg c/12h en neonatos)",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 100 mg / 2 mL y 500 mg / 2 mL",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Fármaco nefrotóxico y ototóxico. Administrar en infusión EV diluida en 30-60 min. Monitorear diuresis y creatinina."
  },
  {
    "id": "aminoacidos",
    "name": "Aminoacidos",
    "rawName": "AMINOACIDOS",
    "category": "Nutrición Parenteral Pediátrica",
    "standardDose": "1.5 a 3 g/kg/día según edad gestacional y requerimientos metabólicos",
    "doseMgKg": 1.5,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla infusión 10% pediátrica",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Administrar mediante bomba de infusión continua en NPT con fotoprotección."
  },
  {
    "id": "aminofilina",
    "name": "Aminofilina",
    "rawName": "AMINOFILINA",
    "category": "Broncodilatador / Metilxantina",
    "standardDose": "Ataque: 5-6 mg/kg en 30 min EV; Mantenimiento: 0.5-0.9 mg/kg/hora en infusión continua",
    "doseMgKg": 5,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 250 mg / 10 mL (25 mg/mL)",
        "concMg": 250,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Margen terapéutico estrecho (10-20 mcg/mL). Infundir lentamente para evitar arritmias ventriculares y convulsiones."
  },
  {
    "id": "amiodarona",
    "name": "Amiodarona",
    "rawName": "AMIODARONA",
    "category": "Antiarrítmico Clase III",
    "standardDose": "Carga: 5 mg/kg en 20-60 minutos EV en Dextrosa 5%; Mantenimiento: 5-15 mcg/kg/min",
    "doseMgKg": 5,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 150 mg / 3 mL (50 mg/mL)",
        "concMg": 150,
        "concMl": 3,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 200 mg",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "DILUIR EXCLUSIVAMENTE EN DEXTROSA AL 5% (precipita en solución salina). Infundir por vía central si es posible."
  },
  {
    "id": "amoxicilina",
    "name": "Amoxicilina",
    "rawName": "AMOXICILINA",
    "category": "Antibiótico / Aminopenicilina",
    "standardDose": "50 mg/kg/día (dosis estándar) a 80-90 mg/kg/día (en OMA y NAC neumocócica) dividido cada 8 horas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 3,
    "maxDailyMgKg": 90,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL y 500 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento de elección en otitis media aguda y neumonía bacteriana adquirida en la comunidad en pediatría."
  },
  {
    "id": "ampicilina",
    "name": "Ampicilina",
    "rawName": "AMPICILINA",
    "category": "Antibiótico / Aminopenicilina EV/VO",
    "standardDose": "100 a 200 mg/kg/día dividido cada 6 horas EV (en meningitis hasta 300-400 mg/kg/día)",
    "doseMgKg": 100,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 500 mg y 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Fármaco de primera línea junto a gentamicina en sepsis neonatal y sospecha de Listeria monocytogenes."
  },
  {
    "id": "anfotericina_b",
    "name": "Anfotericina B",
    "rawName": "ANFOTERICINA B",
    "category": "Antimicótico Sistémico",
    "standardDose": "Convencional: 0.5 a 1 mg/kg/día; Liposomal: 3 a 5 mg/kg/día en infusión EV lenta en 2-4 horas",
    "doseMgKg": 1,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "VIAL",
        "concLabel": "Vial 50 mg liofilizado (diluir en Dextrosa 5%)",
        "concMg": 50,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "DILUIR EXCLUSIVAMENTE EN DEXTROSA 5% (incompatible con salino). Monitorear potasio, magnesio y función renal."
  },
  {
    "id": "antiacido",
    "name": "Antiacido",
    "rawName": "ANTIACIDO",
    "category": "Gastroprotector / Neutralizante",
    "standardDose": "0.5 a 1 mL/kg/dosis administrado 1 hora después de comidas y al acostarse",
    "doseMgKg": 0.5,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Suspensión frasco Hidróxido de Aluminio y Magnesio",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Alivia pirosis y gastritis. Separar 2 horas de antibióticos orales (tetraciclinas, hierro, fluoroquinolonas)."
  },
  {
    "id": "antimonio_de_n_metil_glucamina",
    "name": "Antimonio De N Metil Glucamina",
    "rawName": "ANTIMONIO DE N METIL GLUCAMINA",
    "category": "Antileishmaniásico",
    "standardDose": "20 mg/kg/día de antimonio pentavalente por 20 días IM o EV",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1.5 g / 5 mL (aprox. 405 mg Sb)",
        "concMg": 81,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Tratamiento de leishmaniasis cutánea y mucocutánea. Monitorear función cardíaca con ECG (alargamiento de QT) y amilasa."
  },
  {
    "id": "antitetanica_inmunoflobulina",
    "name": "Antitetanica Inmunoflobulina",
    "rawName": "ANTITETANICA INMUNOFLOBULINA",
    "category": "Inmunoglobulina Específica",
    "standardDose": "Profilaxis: 250 UI IM; Tratamiento de tétanos: 3000 a 6000 UI IM en dosis única",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Jeringa prellenada / ampolla 250 UI",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Inmunización pasiva inmediata en heridas contaminadas tetanígenas. Aplicar en sitio anatómico diferente a la vacuna antitetánica."
  },
  {
    "id": "artesunato",
    "name": "Artesunato",
    "rawName": "ARTESUNATO",
    "category": "Antipalúdico",
    "standardDose": "2.4 mg/kg/dosis EV a las 0h, 12h, 24h y luego cada 24 horas",
    "doseMgKg": 2.4,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 50 mg (o ampolla 60 mg EV)",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento de elección en malaria grave por Plasmodium falciparum según norma técnica MINSA/OMS."
  },
  {
    "id": "atropina",
    "name": "Atropina",
    "rawName": "ATROPINA",
    "category": "Anticolinérgico / Reanimación / Antídoto",
    "standardDose": "0.02 mg/kg/dosis EV/IM (dosis mínima: 0.1 mg para evitar bradicardia paradójica; máx 0.5 mg en niños)",
    "doseMgKg": 0.02,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 0.5 mg / 1 mL y 1 mg / 1 mL",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "En bradicardia sintomática con hipoxemia o intoxicación por organofosforados (repetir según respuesta pupilar y broncorrea)."
  },
  {
    "id": "azitromicina",
    "name": "Azitromicina",
    "rawName": "AZITROMICINA",
    "category": "Antibiótico / Macrólido",
    "standardDose": "10 mg/kg/día una sola toma al día durante 3 a 5 días",
    "doseMgKg": 10,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 200 mg / 5 mL",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Excelente adherencia por toma única diaria. Tratamiento de neumonía atípica, tos ferina y faringoamigdalitis alérgica."
  },
  {
    "id": "aztreonam",
    "name": "Aztreonam",
    "rawName": "AZTREONAM",
    "category": "Antibiótico / Monobactámico",
    "standardDose": "90 a 120 mg/kg/día dividido cada 6 a 8 horas EV",
    "doseMgKg": 90,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "VIAL",
        "concLabel": "Vial 1 g polvo para reconstituir",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Seguro en pacientes alérgicos graves a penicilinas y cefalosporinas para cubrir bacilos Gram negativos."
  },
  {
    "id": "beclometasona",
    "name": "Beclometasona",
    "rawName": "BECLOMETASONA",
    "category": "Corticosteroide Inhalatorio",
    "standardDose": "100 a 200 mcg cada 12 horas mediante aerocámara con espaciador",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Inhalador aerosol 50 mcg y 250 mcg por disparo (puff)",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento preventivo controlador del asma persistente. Enjuagar la boca con agua tras la inhalación para evitar candidiasis oral."
  },
  {
    "id": "benzoato_de_bencilo",
    "name": "Benzoato De Bencilo",
    "rawName": "BENZOATO DE BENCILO",
    "category": "Escabicida / Ectoparasiticida",
    "standardDose": "Aplicación tópica nocturna de cuello a pies durante 3 noches consecutivas",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "LOCION",
        "concLabel": "Loción tópica 25% (diluir al 12.5% con agua en niños pequeños)",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": true
      },
      {
        "form": "CREMA",
        "concLabel": "Crema 25%",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "En niños menores de 2 años diluir 1:1 con agua hervida para evitar irritación cutánea severa."
  },
  {
    "id": "beractant",
    "name": "Beractant",
    "rawName": "BERACTANT",
    "category": "Surfactante Pulmonar Natural",
    "standardDose": "100 mg/kg (4 mL/kg) endotraqueal en las primeras horas de vida en SDR",
    "doseMgKg": 100,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco ampolla intratraqueal 200 mg / 8 mL (25 mg/mL)",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Administración intratraqueal directa mediante tubo endotraqueal en neonatos con síndrome de distrés respiratorio (SDR)."
  },
  {
    "id": "bicarbonato_de_sodio",
    "name": "Bicarbonato De Sodio",
    "rawName": "BICARBONATO DE SODIO",
    "category": "Alcalinizante Sistémico / Electrólito",
    "standardDose": "1 a 2 mEq/kg en acidosis metabólica severa o paro cardíaco prolongado",
    "doseMgKg": 1,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 8.4% (1 mEq/mL en 20 mL)",
        "concMg": 84,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "En neonatos y lactantes diluir 1:1 con agua bidestilada (solución al 4.2%) para evitar hiperosmolaridad y hemorragia intraventricular."
  },
  {
    "id": "biperideno",
    "name": "Biperideno",
    "rawName": "BIPERIDENO",
    "category": "Anticolinérgico / Antídoto Extrapiramidal",
    "standardDose": "0.04 a 0.1 mg/kg/dosis IM o EV lenta en 2-3 min para distonías agudas",
    "doseMgKg": 0.05,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 2 mg",
        "concMg": 2,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 5 mg / 1 mL",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Antídoto de rescate para revertir crisis distónicas y espasmos musculares inducidos por metoclopramida o antipsicóticos."
  },
  {
    "id": "bisacodil",
    "name": "Bisacodil",
    "rawName": "BISACODIL",
    "category": "Laxante Estimulante",
    "standardDose": "5 mg a 10 mg una vez al día al acostarse (>6 años)",
    "doseMgKg": 0.3,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "GRAGEA",
        "concLabel": "Gragea 5 mg",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "SUPOSITORIO",
        "concLabel": "Supositorio pediátrico 5 mg",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Estimula el peristaltismo colónico. No administrar con leche ni antiácidos (degrada cubierta entérica)."
  },
  {
    "id": "budesonida",
    "name": "Budesonida",
    "rawName": "BUDESONIDA",
    "category": "Corticosteroide Inhalatorio",
    "standardDose": "Inhalador: 100-200 mcg c/12h; Nebulización en laringotraqueítis (crup): 1-2 mg dosis única",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Inhalador aerosol 200 mcg/dosis y suspensión para nebulizar 0.5 mg/2 mL",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "En crup laríngeo o laringitis aguda la nebulización de budesonida disminuye rápidamente el estridor y la disnea."
  },
  {
    "id": "calcio_gluconato",
    "name": "Calcio Gluconato",
    "rawName": "CALCIO GLUCONATO",
    "category": "Electrólito / Cardioprotector",
    "standardDose": "100 a 200 mg/kg (1 a 2 mL/kg de solución al 10%) EV lento en 10-20 min con monitoreo de FC",
    "doseMgKg": 100,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 10% (100 mg/mL en 10 mL = 1 g / 10 mL)",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "INFUNDIR MUY LENTO Y MONITORIZANDO FRECUENCIA CARDÍACA (la infusión rápida causa bradicardia severa, asistolia e hipotensión)."
  },
  {
    "id": "captopril",
    "name": "Captopril",
    "rawName": "CAPTOPRIL",
    "category": "Antihipertensivo / IECA",
    "standardDose": "0.1 a 0.5 mg/kg/dosis cada 8 horas (iniciar con dosis bajas y titular)",
    "doseMgKg": 0.3,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 25 mg",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Administrar 1 hora antes de alimentos. Monitorear presión arterial y potasio sérico (riesgo de hiperpotasemia)."
  },
  {
    "id": "carbamazepina",
    "name": "Carbamazepina",
    "rawName": "CARBAMAZEPINA",
    "category": "Anticonvulsivante",
    "standardDose": "10 a 20 mg/kg/día dividido cada 8 a 12 horas con las comidas",
    "doseMgKg": 10,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 100 mg / 5 mL",
        "concMg": 100,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 200 mg",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Crisis epilépticas focales y neuralgia. Monitorear hemograma y sodio (riesgo de hiponatremia por SIADH)."
  },
  {
    "id": "carbenicilina",
    "name": "Carbenicilina",
    "rawName": "CARBENICILINA",
    "category": "Antibiótico / Carboxipenicilina",
    "standardDose": "200 a 400 mg/kg/día dividido cada 6 horas EV",
    "doseMgKg": 200,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g y 5 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Uso hospitalario reservado. Aporta abundante sodio; vigilar función cardíaca y renal."
  },
  {
    "id": "carbinoxamina",
    "name": "Carbinoxamina",
    "rawName": "CARBINOXAMINA",
    "category": "Antihistamínico H1",
    "standardDose": "0.2 a 0.4 mg/kg/día dividido cada 8 horas",
    "doseMgKg": 0.2,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 2 mg / 1 mL",
        "concMg": 2,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 4 mg / 5 mL",
        "concMg": 4,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 4 mg",
        "concMg": 4,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Antihistamínico de primera generación con propiedades anticolinérgicas y sedantes."
  },
  {
    "id": "cefaclor",
    "name": "Cefaclor",
    "rawName": "CEFACLOR",
    "category": "Antibiótico / Cefalosporina 2ª Gen",
    "standardDose": "20 a 40 mg/kg/día dividido cada 8 horas VO",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Infecciones respiratorias y otitis media en niños alérgicos no anafilácticos a penicilinas."
  },
  {
    "id": "cefadroxilo",
    "name": "Cefadroxilo",
    "rawName": "CEFADROXILO",
    "category": "Antibiótico / Cefalosporina 1ª Gen",
    "standardDose": "30 mg/kg/día dividido cada 12 horas VO",
    "doseMgKg": 30,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL y 500 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Infecciones de piel, partes blandas y faringoamigdalitis estreptocócica."
  },
  {
    "id": "cefalexina",
    "name": "Cefalexina",
    "rawName": "CEFALEXINA",
    "category": "Antibiótico / Cefalosporina 1ª Gen",
    "standardDose": "25 a 50 mg/kg/día (hasta 100 mg/kg/día en severas) dividido cada 6 a 8 horas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento ambulatorio de elección en celulitis e impétigo estafilocócico."
  },
  {
    "id": "cefalotina",
    "name": "Cefalotina",
    "rawName": "CEFALOTINA",
    "category": "Antibiótico / Cefalosporina 1ª Gen EV",
    "standardDose": "80 a 100 mg/kg/día dividido cada 6 horas EV",
    "doseMgKg": 80,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g polvo liofilizado",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Profilaxis quirúrgica y tratamiento hospitalario de infecciones por cocos Gram positivos sensibles."
  },
  {
    "id": "cefazolina",
    "name": "Cefazolina",
    "rawName": "CEFAZOLINA",
    "category": "Antibiótico / Cefalosporina 1ª Gen EV",
    "standardDose": "50 a 100 mg/kg/día dividido cada 8 horas EV",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Fármaco de elección en profilaxis quirúrgica pediátrica (30-60 min antes de incisión)."
  },
  {
    "id": "cefdinir",
    "name": "Cefdinir",
    "rawName": "CEFDINIR",
    "category": "Antibiótico / Cefalosporina 3ª Gen Oral",
    "standardDose": "14 mg/kg/día en 1 sola toma o dividido cada 12 horas",
    "doseMgKg": 14,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 125 mg / 5 mL y 250 mg / 5 mL",
        "concMg": 125,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Puede teñir las heces de color rojizo al combinarse con hierro en la luz intestinal."
  },
  {
    "id": "cefepime",
    "name": "Cefepime",
    "rawName": "CEFEPIME",
    "category": "Antibiótico / Cefalosporina 4ª Gen EV",
    "standardDose": "100 a 150 mg/kg/día dividido cada 8 horas EV",
    "doseMgKg": 100,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g y 2 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Monoterapia empírica en neutropenia febril y sepsis por Pseudomonas aeruginosa."
  },
  {
    "id": "cefetamet",
    "name": "Cefetamet",
    "rawName": "CEFETAMET",
    "category": "Antibiótico / Cefalosporina 3ª Gen Oral",
    "standardDose": "20 mg/kg/día dividido cada 12 horas VO",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Infecciones respiratorias complicadas y otitis refractarias."
  },
  {
    "id": "cefixima",
    "name": "Cefixima",
    "rawName": "CEFIXIMA",
    "category": "Antibiótico / Cefalosporina 3ª Gen Oral",
    "standardDose": "8 mg/kg/día en 1 sola toma o cada 12 horas",
    "doseMgKg": 8,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 100 mg / 5 mL",
        "concMg": 100,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 400 mg",
        "concMg": 400,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento oral de elección en infecciones del tracto urinario en pediatría."
  },
  {
    "id": "cefotaxima",
    "name": "Cefotaxima",
    "rawName": "CEFOTAXIMA",
    "category": "Antibiótico / Cefalosporina 3ª Gen EV",
    "standardDose": "100 a 200 mg/kg/día dividido cada 6 a 8 horas EV (en meningitis hasta 200-300 mg/kg/día)",
    "doseMgKg": 150,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Cefalosporina de 3ª generación de elección en NEONATOS con sepsis (no compite con bilirrubina como ceftriaxona)."
  },
  {
    "id": "cefoxitina",
    "name": "Cefoxitina",
    "rawName": "CEFOXITINA",
    "category": "Antibiótico / Cefamicina (Anaerobios)",
    "standardDose": "80 a 160 mg/kg/día dividido cada 6 horas EV",
    "doseMgKg": 100,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Excelente actividad sobre anaerobios bacterianos en infecciones intraabdominales y apendicitis perforada."
  },
  {
    "id": "cefpodoxima",
    "name": "Cefpodoxima",
    "rawName": "CEFPODOXIMA",
    "category": "Antibiótico / Cefalosporina 3ª Gen Oral",
    "standardDose": "10 mg/kg/día dividido cada 12 horas VO",
    "doseMgKg": 10,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 100 mg / 5 mL",
        "concMg": 100,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg y 200 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Neumonía adquirida en la comunidad, OMA y sinusitis bacteriana."
  },
  {
    "id": "cefradina",
    "name": "Cefradina",
    "rawName": "CEFRADINA",
    "category": "Antibiótico / Cefalosporina 1ª Gen",
    "standardDose": "50 a 100 mg/kg/día dividido cada 6 horas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Infecciones estafilocócicas y estreptocócicas de piel y partes blandas."
  },
  {
    "id": "ceftazidima",
    "name": "Ceftazidima",
    "rawName": "CEFTAZIDIMA",
    "category": "Antibiótico / Cefalosporina Antipseudomónica",
    "standardDose": "100 a 150 mg/kg/día dividido cada 8 horas EV",
    "doseMgKg": 100,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Potente actividad contra Pseudomonas aeruginosa en fibrosis quística y neutropenia febril."
  },
  {
    "id": "ceftriaxona",
    "name": "Ceftriaxona",
    "rawName": "CEFTRIAXONA",
    "category": "Antibiótico / Cefalosporina 3ª Gen EV/IM",
    "standardDose": "50 a 75 mg/kg/día cada 24 horas (en meningitis: 100 mg/kg/día dividido cada 12h)",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 1,
    "maxDailyMgKg": 100,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g (reconstituir en 10 mL = 100 mg/mL)",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "CONTRAINDICADA EN NEONATOS con ictericia o que reciben calcio EV (riesgo de precipitado mortal ceftriaxona-calcio)."
  },
  {
    "id": "cefuroxima",
    "name": "Cefuroxima",
    "rawName": "CEFUROXIMA",
    "category": "Antibiótico / Cefalosporina 2ª Gen",
    "standardDose": "Oral: 20-30 mg/kg/día c/12h; Parenteral: 50-100 mg/kg/día c/8h",
    "doseMgKg": 30,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 750 mg EV",
        "concMg": 750,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Activa contra Haemophilus influenzae productor de betalactamasas y neumococos."
  },
  {
    "id": "cetirizina",
    "name": "Cetirizina",
    "rawName": "CETIRIZINA",
    "category": "Antihistamínico H1 2ª Gen",
    "standardDose": "2 a 5 años: 2.5-5 mg/día; >6 años: 5-10 mg/día (aprox. 0.25 mg/kg/día)",
    "doseMgKg": 0.25,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 10 mg / 1 mL (20 gotas)",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 5 mg / 5 mL",
        "concMg": 5,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 10 mg",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Rinitis alérgica, urticaria y prurito. Administrar preferentemente por la noche."
  },
  {
    "id": "ciclosfosfamida",
    "name": "Ciclosfosfamida",
    "rawName": "CICLOSFOSFAMIDA",
    "category": "Antineoplásico / Inmunosupresor",
    "standardDose": "Según protocolo oncológico / nefrológico específico (hiperhidratación obligatoria)",
    "doseMgKg": 10,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 50 mg",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 500 mg y 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Riesgo de cistitis hemorrágica. Forzar diuresis con abundante hidratación y usar Mesna según protocolo."
  },
  {
    "id": "cimetidina",
    "name": "Cimetidina",
    "rawName": "CIMETIDINA",
    "category": "Antagonista H2",
    "standardDose": "20 a 40 mg/kg/día dividido cada 6 horas",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 200 mg y 400 mg",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 300 mg / 2 mL",
        "concMg": 300,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "Inhibidor enzimático microsomal (múltiples interacciones farmacológicas)."
  },
  {
    "id": "ciprofloxacino",
    "name": "Ciprofloxacino",
    "rawName": "CIPROFLOXACINO",
    "category": "Antibiótico / Fluoroquinolona",
    "standardDose": "Oral: 20-30 mg/kg/día c/12h; EV: 15-20 mg/kg/día c/12h",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Uso pediátrico reservado para infecciones por Pseudomonas o Shigella resistente."
  },
  {
    "id": "ciproheptadina",
    "name": "Ciproheptadina",
    "rawName": "CIPROHEPTADINA",
    "category": "Antihistamínico / Estimulante del Apetito",
    "standardDose": "0.25 mg/kg/día dividido cada 8 horas",
    "doseMgKg": 0.25,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Jarabe 2 mg / 5 mL",
        "concMg": 2,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 4 mg",
        "concMg": 4,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Puede provocar somnolencia marcada y sequedad de mucosas."
  },
  {
    "id": "claritromicina",
    "name": "Claritromicina",
    "rawName": "CLARITROMICINA",
    "category": "Antibiótico / Macrólido",
    "standardDose": "15 mg/kg/día dividido cada 12 horas VO o EV",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 125 mg / 5 mL y 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 500 mg",
        "concMg": 500,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Neumonía atípica, erradicación de Helicobacter pylori e infecciones respiratorias."
  },
  {
    "id": "clenbuterol",
    "name": "Clenbuterol",
    "rawName": "CLENBUTEROL",
    "category": "Broncodilatador Beta-2",
    "standardDose": "0.001 mg (1 mcg)/kg/dosis cada 12 horas",
    "doseMgKg": 0.001,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Jarabe 0.01 mg (10 mcg) / 5 mL",
        "concMg": 0.01,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Monitorear taquicardia y temblores musculares en lactantes."
  },
  {
    "id": "clindamicina",
    "name": "Clindamicina",
    "rawName": "CLINDAMICINA",
    "category": "Antibiótico / Lincosamida",
    "standardDose": "Oral: 10-25 mg/kg/día c/8h; EV: 20-40 mg/kg/día c/6-8h",
    "doseMgKg": 30,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Solución pediátrica 75 mg / 5 mL",
        "concMg": 75,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 300 mg",
        "concMg": 300,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 600 mg / 4 mL (150 mg/mL)",
        "concMg": 600,
        "concMl": 4,
        "isLiquid": true
      }
    ],
    "notes": "Excelente actividad contra anaerobios y SARM de comunidad. Infundir EV en no menos de 30-40 min."
  },
  {
    "id": "clobazam",
    "name": "Clobazam",
    "rawName": "CLOBAZAM",
    "category": "Benzodiazepina / Antiepiléptico",
    "standardDose": "0.5 a 1 mg/kg/día dividido cada 12 horas",
    "doseMgKg": 0.5,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 10 mg y 20 mg",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento coadyuvante en epilepsias refractarias (síndrome de Lennox-Gastaut)."
  },
  {
    "id": "clomipramina",
    "name": "Clomipramina",
    "rawName": "CLOMIPRAMINA",
    "category": "Antidepresivo Tricíclico",
    "standardDose": "1 a 2.5 mg/kg/día dividido cada 12 horas en TOC infantil (>10 años)",
    "doseMgKg": 1,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 25 mg",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Monitorear ECG por riesgo de arritmias y prolongación del QT."
  },
  {
    "id": "clonazepam",
    "name": "Clonazepam",
    "rawName": "CLONAZEPAM",
    "category": "Benzodiazepina / Anticonvulsivante",
    "standardDose": "0.01 a 0.05 mg/kg/día dividido cada 8 horas (iniciar bajo y titular)",
    "doseMgKg": 0.05,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 2.5 mg / 1 mL (1 gota = 0.1 mg; 25 gotas/mL)",
        "concMg": 2.5,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 25
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 0.5 mg y 2 mg",
        "concMg": 0.5,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Epilepsia mioclónica, ausencias y espasmos infantiles. Retirar gradualmente."
  },
  {
    "id": "clonidina",
    "name": "Clonidina",
    "rawName": "CLONIDINA",
    "category": "Agonista Alfa-2 Central",
    "standardDose": "5 a 10 mcg/kg/día dividido cada 12 horas",
    "doseMgKg": 0.005,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 0.15 mg (150 mcg)",
        "concMg": 0.15,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 0.15 mg / 1 mL",
        "concMg": 0.15,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Crisis hipertensivas, síndrome de abstinencia a sedantes y TDAH."
  },
  {
    "id": "cloramfenicol",
    "name": "Cloramfenicol",
    "rawName": "CLORAMFENICOL",
    "category": "Antibiótico / Anfenicol",
    "standardDose": "50 a 75 mg/kg/día dividido cada 6 horas (en meningitis hasta 100 mg/kg/día)",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 125 mg / 5 mL y 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "CONTRAINDICADO EN RECIÉN NACIDOS por riesgo de Síndrome del Bebé Gris mortal."
  },
  {
    "id": "clorfenamina",
    "name": "Clorfenamina",
    "rawName": "CLORFENAMINA",
    "category": "Antihistamínico H1 Clásico",
    "standardDose": "0.35 mg/kg/día dividido cada 6 a 8 horas",
    "doseMgKg": 0.35,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 2 mg / 1 mL",
        "concMg": 2,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 2 mg / 5 mL",
        "concMg": 2,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 4 mg",
        "concMg": 4,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 10 mg / 1 mL",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Urticaria y reacciones alérgicas. Produce somnolencia y sedación marcada."
  },
  {
    "id": "cloroquina",
    "name": "Cloroquina",
    "rawName": "CLOROQUINA",
    "category": "Antipalúdico",
    "standardDose": "Ataque: 10 mg base/kg; luego 5 mg base/kg a las 6h, 24h y 48h",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 150 mg base (250 mg fosfato)",
        "concMg": 150,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla fosfato de cloroquina",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Malaria por Plasmodium vivax. Monitorear función ocular en tratamientos prolongados."
  },
  {
    "id": "clorpromacina",
    "name": "Clorpromacina",
    "rawName": "CLORPROMACINA",
    "category": "Antipsicótico / Neuroléptico",
    "standardDose": "0.5 a 1 mg/kg/dosis cada 6 a 8 horas",
    "doseMgKg": 0.5,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 25 mg y 100 mg",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 25 mg / 2 mL",
        "concMg": 25,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "Agitación psicomotriz e hipo intratable. Produce sedación e hipotensión."
  },
  {
    "id": "clotrimazol",
    "name": "Clotrimazol",
    "rawName": "CLOTRIMAZOL",
    "category": "Antimicótico Tópico",
    "standardDose": "Aplicación tópica 2 a 3 veces al día en la zona afectada",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "CREMA",
        "concLabel": "Crema tópica 1%",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Dermatitis del pañal por Candida, tiña corporal y candidiasis cutánea."
  },
  {
    "id": "codeina",
    "name": "Codeina",
    "rawName": "CODEINA",
    "category": "Analgésico Opioide Menor / Antitusígeno",
    "standardDose": "0.5 a 1 mg/kg/dosis cada 6 horas",
    "doseMgKg": 0.5,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Jarabe 10 mg / 5 mL y 15 mg / 5 mL",
        "concMg": 15,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 30 mg / 1 mL",
        "concMg": 30,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "CONTRAINDICADA en menores de 12 años y post-amigdalectomía por riesgo de metabolizadores ultrarrápidos y depresión respiratoria fatal."
  },
  {
    "id": "colistina",
    "name": "Colistina",
    "rawName": "COLISTINA",
    "category": "Antibiótico / Polimixina E",
    "standardDose": "2.5 a 5 mg (75,000 a 150,000 UI)/kg/día dividido cada 8 horas EV",
    "doseMgKg": 5,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 100 mg (aprox. 1 a 3 millones UI)",
        "concMg": 100,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Infecciones críticas por bacilos Gram negativos panresistentes. Alta nefrotoxicidad; controlar diuresis y urea."
  },
  {
    "id": "cotrimoxazol",
    "name": "Cotrimoxazol",
    "rawName": "COTRIMOXAZOL",
    "category": "Antibiótico / Sulfamida + Trimetoprima",
    "standardDose": "TMP 8-10 mg/kg/día + SMX 40-50 mg/kg/día dividido cada 12 horas",
    "doseMgKg": 40,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 200/40 mg en 5 mL (Pediátrico)",
        "concMg": 240,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 400/80 mg en 5 mL EV",
        "concMg": 480,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 400/80 mg y Forte 800/160 mg",
        "concMg": 480,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento de neumonía por Pneumocystis jirovecii e infecciones urinarias. Contraindicado en recién nacidos (kernícterus)."
  },
  {
    "id": "cromoglicato",
    "name": "Cromoglicato",
    "rawName": "CROMOGLICATO",
    "category": "Estabilizador de Mastocitos",
    "standardDose": "1 a 2 disparos (inhalaciones) 3 a 4 veces al día",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Aerosol inhalador 5 mg / dosis",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Prevención del asma inducida por ejercicio y rinitis alérgica. Uso exclusivamente profiláctico."
  },
  {
    "id": "dapsona",
    "name": "Dapsona",
    "rawName": "DAPSONA",
    "category": "Antibacteriano / Sulfona",
    "standardDose": "1 a 2 mg/kg/día en 1 sola toma (máx 100 mg/día)",
    "doseMgKg": 1,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento de lepra y profilaxis de Pneumocystis. Riesgo de metahemoglobinemia y hemólisis en déficit de G6PD."
  },
  {
    "id": "deflazacort",
    "name": "Deflazacort",
    "rawName": "DEFLAZACORT",
    "category": "Corticosteroide Sistémico",
    "standardDose": "0.25 a 1.5 mg/kg/día en 1 sola toma matutina",
    "doseMgKg": 0.5,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 22.75 mg / mL (1 gota = aprox. 1 mg)",
        "concMg": 22.75,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 6 mg y 30 mg",
        "concMg": 6,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Menor efecto hiperglucemiante y menor osteoporosis que la prednisona."
  },
  {
    "id": "desloratadina",
    "name": "Desloratadina",
    "rawName": "DESLORATADINA",
    "category": "Antihistamínico H1 2ª Gen",
    "standardDose": "6-11 meses: 1 mg/día; 1-5 años: 1.25 mg/día; 6-11 años: 2.5 mg/día; >12 años: 5 mg/día",
    "doseMgKg": 0.1,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Jarabe 2.5 mg / 5 mL (0.5 mg/mL)",
        "concMg": 2.5,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 5 mg",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Metabolito activo de la loratadina. No produce somnolencia a dosis recomendadas."
  },
  {
    "id": "dexametasona",
    "name": "Dexametasona",
    "rawName": "DEXAMETASONA",
    "category": "Corticosteroide de Alta Potencia",
    "standardDose": "Laringitis / Crup: 0.15 a 0.6 mg/kg dosis única; Edema cerebral: 0.25-0.5 mg/kg/dosis",
    "doseMgKg": 0.3,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Elixir / Solución 0.5 mg / 5 mL",
        "concMg": 0.5,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 0.5 mg, 1 mg y 4 mg",
        "concMg": 4,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 4 mg / 1 mL y 8 mg / 2 mL",
        "concMg": 4,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Dosis única de 0.15-0.6 mg/kg en crup laríngeo reduce drásticamente las intubaciones y hospitalizaciones."
  },
  {
    "id": "dextrometorfano",
    "name": "Dextrometorfano",
    "rawName": "DEXTROMETORFANO",
    "category": "Antitusígeno Central",
    "standardDose": "0.2 a 0.4 mg/kg/dosis cada 6 a 8 horas (>2 años)",
    "doseMgKg": 0.3,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 15 mg / 1 mL",
        "concMg": 15,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 15 mg / 5 mL",
        "concMg": 15,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "GRAGEA",
        "concLabel": "Gragea / Cápsula 15 mg",
        "concMg": 15,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tos seca irritativa no productiva. NO usar en menores de 2 años ni en tos productiva o crisis asmática."
  },
  {
    "id": "diazepam",
    "name": "Diazepam",
    "rawName": "DIAZEPAM",
    "category": "Benzodiazepina / Anticonvulsivante de Rescate",
    "standardDose": "Crisis convulsiva: 0.2 a 0.3 mg/kg EV lento en 2-3 min (o 0.5 mg/kg por vía rectal)",
    "doseMgKg": 0.3,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 10 mg / 2 mL (5 mg/mL)",
        "concMg": 10,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "Infundir lentamente. Tener equipo de aspiración y bolsa autoinflable (ambú) por riesgo de apnea transitoria."
  },
  {
    "id": "dibekacina",
    "name": "Dibekacina",
    "rawName": "DIBEKACINA",
    "category": "Antibiótico / Aminoglucósido",
    "standardDose": "2 a 4 mg/kg/día dividido cada 8 a 12 horas IM o EV",
    "doseMgKg": 3,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 50 mg / 1 mL y 100 mg / 2 mL",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Actividad frente a Pseudomonas y enterobacterias. Monitorear función renal y auditiva."
  },
  {
    "id": "diclofenaco",
    "name": "Diclofenaco",
    "rawName": "DICLOFENACO",
    "category": "AINE / Analgésico y Antiinflamatorio",
    "standardDose": "0.5 a 1 mg/kg/dosis cada 8 horas (máx 2-3 mg/kg/día)",
    "doseMgKg": 1,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 15 mg / 1 mL (Resinato)",
        "concMg": 15,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Suspensión 9 mg / 5 mL",
        "concMg": 9,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "GRAGEA",
        "concLabel": "Gragea / Tableta 50 mg",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "SUPOSITORIO",
        "concLabel": "Supositorio pediátrico 12.5 mg",
        "concMg": 12.5,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 75 mg / 3 mL",
        "concMg": 75,
        "concMl": 3,
        "isLiquid": true
      }
    ],
    "notes": "Dolor inflamatorio agudo. En inyección IM aplicar intraglúteo profundo en cuadrante superior externo."
  },
  {
    "id": "dicloxacilina",
    "name": "Dicloxacilina",
    "rawName": "DICLOXACILINA",
    "category": "Antibiótico / Penicilina Antiestafilocócica Oral",
    "standardDose": "25 a 50 mg/kg/día dividido cada 6 horas en ayunas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Infecciones estafilocócicas de piel (impétigo, forunculosis). Administrar 1 hora antes de alimentos."
  },
  {
    "id": "difenhidramina",
    "name": "Difenhidramina",
    "rawName": "DIFENHIDRAMINA",
    "category": "Antihistamínico H1 / Sedante",
    "standardDose": "1 a 1.25 mg/kg/dosis cada 6 horas (máx 5 mg/kg/día o 300 mg/día)",
    "doseMgKg": 1.25,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Jarabe 12.5 mg / 5 mL",
        "concMg": 12.5,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 25 mg y 50 mg",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 50 mg / 1 mL",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Fármaco de rescate para distonías agudas inducidas por metoclopramida. Sedación profunda."
  },
  {
    "id": "difosfato_sodico",
    "name": "Difosfato Sodico",
    "rawName": "DIFOSFATO SODICO",
    "category": "Laxante Enema Evacuante",
    "standardDose": "Enema pediátrico (aprox. 60 mL) según edad en impactación fecal",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco enema evacuante pediátrico 66 mL",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Evacuación intestinal rápida. Contraindicado en sospecha de abdomen agudo o megacolon congénito."
  },
  {
    "id": "digoxina",
    "name": "Digoxina",
    "rawName": "DIGOXINA",
    "category": "Cardiotónico / Glucósido Cardíaco",
    "standardDose": "Mantenimiento: 8 a 10 mcg/kg/día dividido cada 12 horas VO",
    "doseMgKg": 0.008,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 0.25 mg (y solución oral pediátrica 0.05 mg/mL)",
        "concMg": 0.25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Fármaco de estrecho margen terapéutico. Controlar pulso apical antes de cada dosis; suspender si hay bradicardia."
  },
  {
    "id": "dimenhidrinato",
    "name": "Dimenhidrinato",
    "rawName": "DIMENHIDRINATO",
    "category": "Antiemético / Antihistamínico (Gravol)",
    "standardDose": "1 a 1.25 mg/kg/dosis cada 6 a 8 horas (máx 5 mg/kg/día)",
    "doseMgKg": 1.25,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 50 mg",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 15 mg / 5 mL",
        "concMg": 15,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 50 mg / 1 mL y 50 mg / 5 mL",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": true
      },
      {
        "form": "SUPOSITORIO",
        "concLabel": "Supositorio pediátrico 25 mg",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Prevención y alivio de náuseas, vómitos y cinetosis. Administrar 30 min antes de viajar."
  },
  {
    "id": "simeticona",
    "name": "Simeticona",
    "rawName": "SIMETICONA",
    "category": "Antiflatulento / Antiespumante",
    "standardDose": "Lactantes: 20 a 40 mg (5 a 10 gotas) con las tomas de leche; niños: 40 mg cada 6h",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Gotas 80 mg / mL (o emulsión oral 40 mg/mL)",
        "concMg": 80,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      }
    ],
    "notes": "Alivio del cólico del lactante y meteorismo por gases. No se absorbe sistémicamente."
  },
  {
    "id": "dipirona",
    "name": "Dipirona",
    "rawName": "DIPIRONA",
    "category": "Analgésico / Antipirético (Metamizol)",
    "standardDose": "10 a 15 mg/kg/dosis cada 8 horas (condicionado a fiebre >38.5°C o dolor)",
    "doseMgKg": 15,
    "isDailyDose": false,
    "defaultFreq": 3,
    "maxDailyMgKg": 40,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 500 mg / 1 mL (20 gotas = 500 mg)",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "JARABE",
        "concLabel": "Jarabe 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "SUPOSITORIO",
        "concLabel": "Supositorio infantil 300 mg",
        "concMg": 300,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 g / 2 mL (500 mg/mL)",
        "concMg": 1000,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "NUNCA administrar EV en bolo directo (riesgo de hipotensión severa y shock). Diluir en 50-100 mL ClNa 0.9% en 20 min."
  },
  {
    "id": "dobutamina",
    "name": "Dobutamina",
    "rawName": "DOBUTAMINA",
    "category": "Inotrópico Beta-1",
    "standardDose": "2.5 a 15 mcg/kg/minuto en infusión continua por BIC",
    "doseMgKg": 5,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO AMPOLLA",
        "concLabel": "Frasco ampolla 250 mg / 20 mL (12.5 mg/mL)",
        "concMg": 250,
        "concMl": 20,
        "isLiquid": true
      }
    ],
    "notes": "Shock cardiogénico y bajo gasto cardíaco. Administrar estrictamente por bomba de infusión continua."
  },
  {
    "id": "domperidona",
    "name": "Domperidona",
    "rawName": "DOMPERIDONA",
    "category": "Antiemético / Procinético",
    "standardDose": "0.25 mg/kg/dosis cada 8 horas antes de los alimentos (máx 0.75 mg/kg/día)",
    "doseMgKg": 0.25,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "GOTAS",
        "concLabel": "Gotas 10 mg / 1 mL",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 10 mg",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 10 mg / 2 mL",
        "concMg": 10,
        "concMl": 2,
        "isLiquid": true
      },
      {
        "form": "GOTAS",
        "concLabel": "Gotas 10 mg / 1 mL",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      }
    ],
    "notes": "No cruza fácilmente la barrera hematoencefálica (menor riesgo de síntomas extrapiramidales que metoclopramida)."
  },
  {
    "id": "dopamina",
    "name": "Dopamina",
    "rawName": "DOPAMINA",
    "category": "Inotrópico / Vasopresor",
    "standardDose": "Inotrópico: 5 a 10 mcg/kg/min; Vasopresor: 10 a 20 mcg/kg/min en BIC",
    "doseMgKg": 5,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 200 mg / 5 mL (40 mg/mL)",
        "concMg": 200,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Monitoreo hemodinámico estricto por vía central. Proteger sitio venoso para evitar necrosis por extravasación."
  },
  {
    "id": "doxiciclina",
    "name": "Doxiciclina",
    "rawName": "DOXICICLINA",
    "category": "Antibiótico / Tetraciclina",
    "standardDose": "4 mg/kg/día el día 1, luego 2-4 mg/kg/día dividido cada 12h (>8 años)",
    "doseMgKg": 4,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula / Tableta 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Contraindicado en <8 años excepto en rickettsiosis/cólera grave. Ingerir con abundante agua erguido."
  },
  {
    "id": "econazol",
    "name": "Econazol",
    "rawName": "ECONAZOL",
    "category": "Antimicótico Tópico",
    "standardDose": "Aplicar capa fina en la piel 2 veces al día por 2 a 4 semanas",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "CREMA",
        "concLabel": "Crema 1%",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Dermatomicosis, pie de atleta y tiñas superficiales en niños."
  },
  {
    "id": "enalapril",
    "name": "Enalapril",
    "rawName": "ENALAPRIL",
    "category": "Antihipertensivo / IECA",
    "standardDose": "0.1 a 0.5 mg/kg/día dividido cada 12 a 24 horas",
    "doseMgKg": 0.1,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 5 mg, 10 mg y 20 mg",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Hipertensión y proteinuria en glomerulopatías. Vigilar presión arterial y función renal."
  },
  {
    "id": "epinefrina",
    "name": "Epinefrina",
    "rawName": "EPINEFRINA",
    "category": "Vasopresor / Adrenalina",
    "standardDose": "0.01 mg/kg IM en anafilaxia (0.01 mL/kg de 1:1000); 0.01 mg/kg EV en paro cardíaco",
    "doseMgKg": 0.01,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 mg / 1 mL (1:1000)",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Tratamiento de elección en shock anafiláctico y parada cardiorrespiratoria PALS."
  },
  {
    "id": "ergotamina",
    "name": "Ergotamina",
    "rawName": "ERGOTAMINA",
    "category": "Antimigrañoso",
    "standardDose": "1 mg al inicio del aura migrañosa (uso muy restringido en adolescentes)",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula / Gragea 1 mg (con cafeína)",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Uso en crisis agudas de migraña refractaria. Contraindicado en insuficiencia vascular o renal."
  },
  {
    "id": "eritromicina",
    "name": "Eritromicina",
    "rawName": "ERITROMICINA",
    "category": "Antibiótico / Macrólido",
    "standardDose": "30 a 50 mg/kg/día dividido cada 6 a 8 horas",
    "doseMgKg": 40,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 500 mg",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tos ferina (coqueluche) y profilaxis de contactos. En neonatos se asocia a estenosis hipertrófica de píloro."
  },
  {
    "id": "eritropoyetina",
    "name": "Eritropoyetina",
    "rawName": "ERITROPOYETINA",
    "category": "Factor Hematopoyético",
    "standardDose": "50 a 150 UI/kg/dosis SC 3 veces por semana",
    "doseMgKg": 50,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "VIAL",
        "concLabel": "Vial 2000 UI y 4000 UI",
        "concMg": 4000,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Anemia de la prematuridad y en insuficiencia renal crónica pediátrica. Administrar suplemento de hierro."
  },
  {
    "id": "ertapenem",
    "name": "Ertapenem",
    "rawName": "ERTAPENEM",
    "category": "Antibiótico / Carbapenem",
    "standardDose": "30 mg/kg/día dividido cada 12 horas EV (máx 1 g/día)",
    "doseMgKg": 30,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco ampolla 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Infecciones por enterobacterias productoras de BLEE. No activo frente a Pseudomonas."
  },
  {
    "id": "espectinomicina",
    "name": "Espectinomicina",
    "rawName": "ESPECTINOMICINA",
    "category": "Antibiótico / Aminociclitol",
    "standardDose": "40 mg/kg IM dosis única (máximo 2 g)",
    "doseMgKg": 40,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco ampolla 2 g polvo para suspensión IM",
        "concMg": 2000,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Infección gonocócica en pacientes alérgicos a betalactámicos."
  },
  {
    "id": "espironolactona",
    "name": "Espironolactona",
    "rawName": "ESPIRONOLACTONA",
    "category": "Diurético Ahorrador de Potasio",
    "standardDose": "1 a 3 mg/kg/día dividido cada 12 a 24 horas",
    "doseMgKg": 2,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 25 mg y 100 mg",
        "concMg": 25,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Insuficiencia cardíaca congestiva, edema ascítico y displasia broncopulmonar. Monitorear potasio sérico."
  },
  {
    "id": "estreptomicina",
    "name": "Estreptomicina",
    "rawName": "ESTREPTOMICINA",
    "category": "Antibiótico / Aminoglucósido Antituberculoso",
    "standardDose": "15 a 20 mg/kg/día IM una sola vez al día (máx 1 g/día)",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco ampolla 1 g polvo",
        "concMg": 1000,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 g",
        "concMg": 1000,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Tratamiento de tuberculosis y tularemia. Alta ototoxicidad cocleovestibular irreversible."
  },
  {
    "id": "etambutol",
    "name": "Etambutol",
    "rawName": "ETAMBUTOL",
    "category": "Antituberculoso",
    "standardDose": "15 a 25 mg/kg/día en 1 sola toma matutina (máx 1.2 g/día)",
    "doseMgKg": 20,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 400 mg",
        "concMg": 400,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Fármaco de primera línea en TBC. Vigilar agudeza visual y discriminación de color rojo-verde (neuritis óptica)."
  },
  {
    "id": "etilefrina",
    "name": "Etilefrina",
    "rawName": "ETILEFRINA",
    "category": "Vasopresor / Simpaticomimético",
    "standardDose": "0.1 a 0.2 mg/kg/dosis IM o EV lenta en hipotensión aguda",
    "doseMgKg": 0.1,
    "isDailyDose": false,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 10 mg / 1 mL (Effortil)",
        "concMg": 10,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Tratamiento sintomático de colapso circulatorio o hipotensión ortostática."
  },
  {
    "id": "fenazopiridina",
    "name": "Fenazopiridina",
    "rawName": "FENAZOPIRIDINA",
    "category": "Analgésico de Vías Urinarias",
    "standardDose": "12 mg/kg/día dividido cada 8 horas por 2 días máximo",
    "doseMgKg": 4,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Alivia disuria y ardor miccional. Tiñe la orina de color anaranjado o rojo brillante inocuo."
  },
  {
    "id": "fenitoina",
    "name": "Fenitoina",
    "rawName": "FENITOINA",
    "category": "Anticonvulsivante Hidantoína (Epamín)",
    "standardDose": "Carga: 15-20 mg/kg EV lento en 20 min en ClNa 0.9%; Mantenimiento: 5-7 mg/kg/día c/12h",
    "doseMgKg": 18,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 125 mg / 5 mL",
        "concMg": 125,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 250 mg / 5 mL (50 mg/mL)",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "DILUIR EXCLUSIVAMENTE EN CLORURO DE SODIO 0.9% (en dextrosa cristaliza). Infundir en no menos de 20 min."
  },
  {
    "id": "fenobarbital",
    "name": "Fenobarbital",
    "rawName": "FENOBARBITAL",
    "category": "Barbitúrico / Anticonvulsivante Neonatal",
    "standardDose": "Ataque: 20 mg/kg EV lento en 15-20 min; Mantenimiento: 3 a 5 mg/kg/día dividido c/12h",
    "doseMgKg": 20,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 200 mg / 1 mL y 100 mg / 2 mL",
        "concMg": 200,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Fármaco de PRIMERA ELECCIÓN en convulsiones neonatales. Monitorear depresión respiratoria."
  },
  {
    "id": "fenoterol",
    "name": "Fenoterol",
    "rawName": "FENOTEROL",
    "category": "Broncodilatador SABA (Berotec)",
    "standardDose": "Inhalador: 1 a 2 disparos con aerocámara; Nebulización: 1 gota por cada 2-3 kg (máx 10 gotas)",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Aerosol inhalador 100 mcg / dosis",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "NEBULIZACION",
        "concLabel": "Solución para nebulizar al 0.5% (5 mg/mL; 1 gota = 0.25 mg)",
        "concMg": 5,
        "concMl": 1,
        "isLiquid": true,
        "dropsPerMl": 20
      }
    ],
    "notes": "Crisis asmática y broncoespasmo agudo. Puede producir taquicardia sinusal y temblor muscular."
  },
  {
    "id": "fenoximetil_penicilina",
    "name": "Fenoximetil Penicilina",
    "rawName": "FENOXIMETIL PENICILINA",
    "category": "Antibiótico / Penicilina V Oral",
    "standardDose": "25 a 50 mg (40,000 a 80,000 UI)/kg/día dividido cada 6 horas en ayunas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 250 mg (400,000 UI) / 5 mL",
        "concMg": 250,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 500 mg (800,000 UI)",
        "concMg": 500,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Tratamiento de faringitis estreptocócica y profilaxis de fiebre reumática o asplenia."
  },
  {
    "id": "fentanilo",
    "name": "Fentanilo",
    "rawName": "FENTANILO",
    "category": "Analgésico Opioide Mayor",
    "standardDose": "1 a 2 mcg/kg/dosis EV lento en 3 a 5 minutos (o infusión continua 1-3 mcg/kg/h)",
    "doseMgKg": 0.001,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 0.5 mg / 10 mL (50 mcg/mL) o 0.1 mg / 2 mL",
        "concMg": 0.05,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Analgesia y sedación en UCI e intubación. La infusión rápida puede causar tórax leñoso rígido."
  },
  {
    "id": "fexofenadina",
    "name": "Fexofenadina",
    "rawName": "FEXOFENADINA",
    "category": "Antihistamínico H1 2ª Gen",
    "standardDose": "2 a 11 años: 30 mg cada 12 horas; >12 años: 60 mg c/12h o 180 mg c/24h",
    "doseMgKg": 2,
    "isDailyDose": true,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 30 mg / 5 mL",
        "concMg": 30,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Antihistamínico no sedante de segunda generación para rinitis alérgica y urticaria."
  },
  {
    "id": "fisostigmina",
    "name": "Fisostigmina",
    "rawName": "FISOSTIGMINA",
    "category": "Inhibidor Acetilcolinesterasa / Antídoto",
    "standardDose": "0.02 mg/kg EV lento en 5 minutos (máx 0.5 mg inicial en niños)",
    "doseMgKg": 0.02,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 1 mg / 1 mL",
        "concMg": 1,
        "concMl": 1,
        "isLiquid": true
      }
    ],
    "notes": "Antídoto específico del síndrome anticolinérgico severo (atropina, escopolamina)."
  },
  {
    "id": "flubendazol",
    "name": "Flubendazol",
    "rawName": "FLUBENDAZOL",
    "category": "Antiparasitario / Antihelmíntico",
    "standardDose": "100 mg dos veces al día por 3 días o 500 mg dosis única",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 100 mg / 5 mL",
        "concMg": 100,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg y 500 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Eficaz en oxiuros, tricocéfalos y ascaris en niños mayores de 1 año."
  },
  {
    "id": "flucloxacilina",
    "name": "Flucloxacilina",
    "rawName": "FLUCLOXACILINA",
    "category": "Antibiótico / Penicilina Antiestafilocócica",
    "standardDose": "25 a 50 mg/kg/día dividido cada 6 horas",
    "doseMgKg": 50,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "FRASCO",
        "concLabel": "Frasco ampolla 500 mg y 1 g",
        "concMg": 1000,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Infecciones estafilocócicas de piel, partes blandas y osteoarticulares."
  },
  {
    "id": "fluconazol",
    "name": "Fluconazol",
    "rawName": "FLUCONAZOL",
    "category": "Antimicótico Sistémico Triazol",
    "standardDose": "6 a 12 mg/kg/día en 1 sola toma (carga el doble el primer día)",
    "doseMgKg": 6,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 150 mg y 200 mg",
        "concMg": 150,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "FRASCO",
        "concLabel": "Frasco solución para infusión EV 200 mg / 100 mL (2 mg/mL)",
        "concMg": 2,
        "concMl": 1,
        "isLiquid": true
      },
      {
        "form": "SUSPENSION",
        "concLabel": "Suspensión oral 50 mg / 5 mL",
        "concMg": 50,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Candidiasis orofaríngea, esofágica y sistémica. Excelente biodisponibilidad oral."
  },
  {
    "id": "flumazenilo",
    "name": "Flumazenilo",
    "rawName": "FLUMAZENILO",
    "category": "Antídoto Antagonista Benzodiazepínico",
    "standardDose": "0.01 mg (10 mcg)/kg EV lento en 15 segundos (máx 0.2 mg inicial)",
    "doseMgKg": 0.01,
    "isDailyDose": false,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 0.5 mg / 5 mL (0.1 mg/mL)",
        "concMg": 0.5,
        "concMl": 5,
        "isLiquid": true
      }
    ],
    "notes": "Reversión rápida de la sedación por benzodiacepinas. Su vida media es corta (vigilar resedación)."
  },
  {
    "id": "flunisolida",
    "name": "Flunisolida",
    "rawName": "FLUNISOLIDA",
    "category": "Corticosteroide Inhalatorio",
    "standardDose": "1 a 2 inhalaciones cada 12 horas en mayores de 4 años",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Inhalador nasal / oral 250 mcg por dosis",
        "concMg": 250,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Control del asma crónica persistente y rinitis alérgica severa."
  },
  {
    "id": "fluticasona",
    "name": "Fluticasona",
    "rawName": "FLUTICASONA",
    "category": "Corticosteroide Inhalatorio Potente",
    "standardDose": "50 a 100 mcg cada 12 horas con aerocámara espaciadora",
    "doseMgKg": 10,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "INHALADOR",
        "concLabel": "Aerosol inhalador 50 mcg y 125 mcg por disparo (puff)",
        "concMg": 50,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Alta potencia tópica antiinflamatoria en asma persistente infantil con mínimo paso a circulación sistémica."
  },
  {
    "id": "furazolidona",
    "name": "Furazolidona",
    "rawName": "FURAZOLIDONA",
    "category": "Antibacteriano y Antiprotozoario Intestinal",
    "standardDose": "5 a 8 mg/kg/día dividido cada 6 horas por 5 a 7 días",
    "doseMgKg": 6,
    "isDailyDose": true,
    "defaultFreq": 4,
    "presentations": [
      {
        "form": "JARABE",
        "concLabel": "Suspensión 50 mg / 15 mL (o 16.6 mg/5 mL)",
        "concMg": 16.6,
        "concMl": 5,
        "isLiquid": true
      },
      {
        "form": "TABLETA",
        "concLabel": "Tableta 100 mg",
        "concMg": 100,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Giardiasis y diarreas bacterianas por gérmenes susceptibles. Tiñe la orina de amarillo o naranja."
  },
  {
    "id": "furosemida",
    "name": "Furosemida",
    "rawName": "FUROSEMIDA",
    "category": "Diurético de Asa Potente",
    "standardDose": "EV/IM: 0.5 a 1 mg/kg/dosis cada 8-12h; Oral: 1 a 2 mg/kg/dosis",
    "doseMgKg": 1,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "TABLETA",
        "concLabel": "Tableta 40 mg",
        "concMg": 40,
        "concMl": 1,
        "isLiquid": false
      },
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 20 mg / 2 mL (10 mg/mL)",
        "concMg": 20,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "Infundir EV lentamente para evitar ototoxicidad. Monitorear electrolitos (hipopotasemia e hiponatremia)."
  },
  {
    "id": "gabapentina",
    "name": "Gabapentina",
    "rawName": "GABAPENTINA",
    "category": "Antiepiléptico / Dolor Neuropático",
    "standardDose": "15 a 35 mg/kg/día dividido cada 8 horas (titular progresivamente)",
    "doseMgKg": 15,
    "isDailyDose": true,
    "defaultFreq": 3,
    "presentations": [
      {
        "form": "CAPSULA",
        "concLabel": "Cápsula 300 mg y 400 mg",
        "concMg": 300,
        "concMl": 1,
        "isLiquid": false
      }
    ],
    "notes": "Crisis focales y dolor neuropático. Titular la dosis durante los primeros 3 días."
  },
  {
    "id": "ganciclovir",
    "name": "Ganciclovir",
    "rawName": "GANCICLOVIR",
    "category": "Antiviral para Citomegalovirus (CMV)",
    "standardDose": "Inducción: 5 mg/kg/dosis cada 12 horas EV en 1 hora por 14-21 días",
    "doseMgKg": 5,
    "isDailyDose": false,
    "defaultFreq": 2,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Frasco ampolla 500 mg liofilizado",
        "concMg": 500,
        "concMl": 10,
        "isLiquid": true
      }
    ],
    "notes": "Infección congénita y neonatal por CMV. Fármaco mielotóxico (controlar neutrófilos y plaquetas)."
  },
  {
    "id": "gentamicina",
    "name": "Gentamicina",
    "rawName": "GENTAMICINA",
    "category": "Antibiótico / Aminoglucósido",
    "standardDose": "Neonatos: 4-5 mg/kg/dosis c/24-36h; Niños: 5-7.5 mg/kg/día en 1 sola dosis cada 24 horas EV",
    "doseMgKg": 5,
    "isDailyDose": true,
    "defaultFreq": 1,
    "presentations": [
      {
        "form": "AMPOLLA",
        "concLabel": "Ampolla 20 mg / 2 mL y 80 mg / 2 mL (40 mg/mL)",
        "concMg": 80,
        "concMl": 2,
        "isLiquid": true
      }
    ],
    "notes": "Sepsis neonatal, ITU complicada e infecciones por bacilos Gram negativos. Infundir diluido en 30-60 min."
  }
];
