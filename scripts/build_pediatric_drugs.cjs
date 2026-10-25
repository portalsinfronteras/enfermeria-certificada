const fs = require('fs');

const rawFile = fs.readFileSync('public/assets/aistudio/MEDICAMENTOS_PARA_PEDIATRICO_a2c42695.txt', 'utf8');
const lines = rawFile.split('\n');

const parsedDrugs = [];
let cur = null;
for (let line of lines) {
  line = line.trim();
  if (!line) continue;
  if (line.endsWith(':')) {
    cur = { name: line.slice(0, -1).trim(), forms: [] };
    parsedDrugs.push(cur);
  } else if (line.startsWith('- ') && cur) {
    cur.forms.push(line.slice(2).trim());
  }
}

// Knowledge base of pediatric drug pharmacology and standard concentrations
const pediatricKB = {
  'PARACETAMOL': {
    category: 'Analgésico / Antipirético',
    doseMgKg: 15,
    isDailyDose: false,
    defaultFreq: 4,
    maxDailyMgKg: 60,
    maxDailyAbsoluteMg: 4000,
    standardDose: '10 a 15 mg/kg/dosis cada 6 horas (máx 60 mg/kg/día)',
    formConcs: {
      'GOTAS': { label: 'Gotas 100 mg / 1 mL (20 gotas)', mg: 100, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 120 mg / 5 mL', mg: 120, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'ENDOVENOSO': { label: 'Solución EV 10 mg / mL (Frasco 1000 mg / 100 mL)', mg: 10, ml: 1, isLiquid: true }
    },
    notes: 'No exceder 5 dosis en 24 horas ni 4 g al día. Antídoto en sobredosis: N-acetilcisteína.'
  },
  'ACETAZOLAMIDA': {
    category: 'Diurético / Inhibidor Anhidrasa Carbónica',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '10 a 25 mg/kg/día cada 8 a 12 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 250 mg', mg: 250, ml: 1, isLiquid: false }
    },
    notes: 'Usado en glaucoma e hidrocefalia. Monitorear electrolitos séricos por riesgo de acidosis metabólica e hipopotasemia.'
  },
  'ACETILCISTEINA': {
    category: 'Mucolítico / Antídoto',
    doseMgKg: 10,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '10 mg/kg/dosis cada 8 horas como mucolítico; en intoxicación por paracetamol seguir protocolo EV',
    formConcs: {
      'SOBRE': { label: 'Sobres granulado 100 mg y 200 mg', mg: 100, ml: 1, isLiquid: false },
      'JARABE': { label: 'Jarabe 100 mg / 5 mL (2%)', mg: 100, ml: 5, isLiquid: true },
      'AMPOLLA': { label: 'Ampolla 300 mg / 3 mL (10%)', mg: 300, ml: 3, isLiquid: true }
    },
    notes: 'Antídoto específico en intoxicación aguda por paracetamol. En mucolítico disolver sobre en agua tibia.'
  },
  'ACICLOVIR': {
    category: 'Antiviral',
    doseMgKg: 20,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '20 mg/kg/dosis cada 6 horas VO; en encefalitis herpética 10-20 mg/kg/dosis cada 8h EV',
    formConcs: {
      'JARABE': { label: 'Suspensión 200 mg / 5 mL', mg: 200, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 200 mg y 400 mg', mg: 200, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Vial EV 250 mg liofilizado (diluir en 50-100 mL)', mg: 250, ml: 10, isLiquid: true },
      'UNGUENTO OFTALMICO': { label: 'Ungüento oftálmico 3%', mg: 30, ml: 1, isLiquid: false },
      'CREMA': { label: 'Crema tópica 5%', mg: 50, ml: 1, isLiquid: false }
    },
    notes: 'Asegurar buena hidratación durante la administración EV para prevenir precipitación en túbulos renales.'
  },
  'ACIDO ACETILSALICILICO': {
    category: 'Antiagregante / Antipirético',
    doseMgKg: 10,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '10-15 mg/kg/dosis cada 6h (antipirético); 3-5 mg/kg/día como antiagregante; 80-100 mg/kg/día en Kawasaki',
    formConcs: {
      'TABLETA': { label: 'Tableta 100 mg y 500 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'CONTRAINDICADO en niños con fiebre por virus (influenza/varicela) por riesgo de Síndrome de Reye. Uso estricto en Kawasaki.'
  },
  'ACIDO CLAVULANICO - AMOXICILINA': {
    category: 'Antibiótico / Betalactámico + Inhibidor',
    doseMgKg: 40,
    isDailyDose: true,
    defaultFreq: 3,
    maxDailyMgKg: 90,
    standardDose: '40 a 50 mg/kg/día (dosis estándar) o 80-90 mg/kg/día (en OMA severa) cada 8 o 12 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250/62.5 mg en 5 mL (4:1) o 400/57 mg en 5 mL (7:1)', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500/125 mg o 875/125 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Calcular la dosificación sobre el componente de Amoxicilina. Administrar al inicio de las comidas para mejorar tolerancia GI.'
  },
  'ACIDO FOLICO': {
    category: 'Vitamina Hematopoyética',
    doseMgKg: 0.1,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '0.1 a 1 mg/día según edad y grado de anemia megaloblástica',
    formConcs: {
      'TABLETA': { label: 'Tableta 1 mg y 5 mg', mg: 1, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 1 mg / 1 mL', mg: 1, ml: 1, isLiquid: true }
    },
    notes: 'Tratamiento de anemias megaloblásticas por deficiencia de folatos y coadyuvante en hemodiálisis o talasemia.'
  },
  'ACIDO FUSIDICO': {
    category: 'Antibacteriano Tópico',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: 'Aplicación tópica cada 8 a 12 horas en piel afectada',
    formConcs: {
      'CREMA': { label: 'Crema tópica 2%', mg: 20, ml: 1, isLiquid: false }
    },
    notes: 'Excelente actividad frente a Staphylococcus aureus y Streptococcus en impétigo y piodermitis pediátrica.'
  },
  'ACIDO TRANEXAMICO': {
    category: 'Antifibrinolítico / Hemostático',
    doseMgKg: 10,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '10 a 15 mg/kg/dosis cada 8 horas',
    formConcs: {
      'CAPSULA': { label: 'Cápsula / Tableta 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Control y profilaxis de hemorragias en hemofilia, sangrado mucocutáneo o postcirugía odontológica.'
  },
  'ADENOSINA': {
    category: 'Antiarrítmico de Emergencia',
    doseMgKg: 0.1,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Inicial: 0.1 mg/kg en bolo EV ultrarrápido (máx 6 mg). Si no revierte: 0.2 mg/kg (máx 12 mg)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 6 mg / 2 mL (3 mg/mL)', mg: 6, ml: 2, isLiquid: true }
    },
    notes: '¡URGENCIA VITAL!: Aplicar en bolo ultrarrápido (1-2 seg) en vena proximal con llave de 3 vías y lavado inmediato con 5-10 mL de ClNa 0.9%.'
  },
  'ADRENALINA': {
    category: 'Vasopresor / Anafilaxia / Reanimación',
    doseMgKg: 0.01,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Anafilaxia: 0.01 mg/kg IM (0.01 mL/kg de sol. 1:1000). RCP: 0.01 mg/kg EV (0.1 mL/kg de sol. 1:10000)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 1 mg / 1 mL (Solución 1:1000)', mg: 1, ml: 1, isLiquid: true }
    },
    notes: 'En anafilaxia inyectar IM en cara anterolateral del muslo (máx 0.3 a 0.5 mg). En RCP usar diluida al 1:10,000.'
  },
  'ALBENDAZOL': {
    category: 'Antiparasitario / Antihelmíntico',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '400 mg dosis única (>2 años) para oxiuros/ascaris; 15 mg/kg/día dividido cada 12h en hidatidosis o neurocisticercosis',
    formConcs: {
      'JARABE': { label: 'Suspensión 400 mg / 10 mL (o 200 mg / 5 mL)', mg: 200, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta masticable 200 mg y 400 mg', mg: 400, ml: 1, isLiquid: false }
    },
    notes: 'Administrar con alimentos grasos para mejorar la absorción en parasitosis tisulares.'
  },
  'ALBUMINA HUMANA': {
    category: 'Expansor Plasmático / Coloide',
    doseMgKg: 0.5, // g/kg
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '0.5 a 1 g/kg (2.5 a 5 mL/kg de solución al 20%) en infusión EV lenta en 30 a 60 min',
    formConcs: {
      'FRASCO': { label: 'Frasco 20% (200 g/L en 50 mL o 100 mL)', mg: 200, ml: 1, isLiquid: true }
    },
    notes: 'Utilizado en síndrome nefrótico severo con anasarca, shock hipovolémico refractario o paracentesis evacuadora.'
  },
  'ALOPURINOL': {
    category: 'Hipouricemiante',
    doseMgKg: 10,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '10 mg/kg/día dividido cada 8 horas (máximo 600 mg/día)',
    formConcs: {
      'TABLETA': { label: 'Tableta 100 mg y 300 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Profilaxis del síndrome de lisis tumoral en leucemias y linfomas. Asegurar hiperhidratación.'
  },
  'ALPRAZOLAM': {
    category: 'Benzodiazepina / Ansiolítico',
    doseMgKg: 0.005,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.005 a 0.02 mg/kg/dosis cada 8 a 12 horas (uso restringido en pediatría)',
    formConcs: {
      'TABLETA': { label: 'Tableta 0.25 mg y 0.5 mg', mg: 0.25, ml: 1, isLiquid: false }
    },
    notes: 'Uso pediátrico altamente restringido. Monitorear depresión respiratoria y sedación excesiva.'
  },
  'AMBROXOL': {
    category: 'Mucolítico / Expectorante',
    doseMgKg: 1.5,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '1.2 a 1.6 mg/kg/día dividido cada 8 horas',
    formConcs: {
      'GOTAS': { label: 'Gotas pediátricas 7.5 mg / 1 mL', mg: 7.5, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe pediátrico 15 mg / 5 mL', mg: 15, ml: 5, isLiquid: true }
    },
    notes: 'Estimula la síntesis de surfactante y aclara las secreciones traqueobronquiales.'
  },
  'AMIKACINA': {
    category: 'Antibiótico / Aminoglucósido',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '15 mg/kg/día en dosis única diaria cada 24 horas (o 7.5 mg/kg c/12h en neonatos)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 100 mg / 2 mL y 500 mg / 2 mL', mg: 250, ml: 1, isLiquid: true }
    },
    notes: 'Fármaco nefrotóxico y ototóxico. Administrar en infusión EV diluida en 30-60 min. Monitorear diuresis y creatinina.'
  },
  'AMINOACIDOS': {
    category: 'Nutrición Parenteral Pediátrica',
    doseMgKg: 1.5,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '1.5 a 3 g/kg/día según edad gestacional y requerimientos metabólicos',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla infusión 10% pediátrica', mg: 100, ml: 1, isLiquid: true }
    },
    notes: 'Administrar mediante bomba de infusión continua en NPT con fotoprotección.'
  },
  'AMINOFILINA': {
    category: 'Broncodilatador / Metilxantina',
    doseMgKg: 5,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: 'Ataque: 5-6 mg/kg en 30 min EV; Mantenimiento: 0.5-0.9 mg/kg/hora en infusión continua',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 250 mg / 10 mL (25 mg/mL)', mg: 250, ml: 10, isLiquid: true }
    },
    notes: 'Margen terapéutico estrecho (10-20 mcg/mL). Infundir lentamente para evitar arritmias ventriculares y convulsiones.'
  },
  'AMIODARONA': {
    category: 'Antiarrítmico Clase III',
    doseMgKg: 5,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Carga: 5 mg/kg en 20-60 minutos EV en Dextrosa 5%; Mantenimiento: 5-15 mcg/kg/min',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 150 mg / 3 mL (50 mg/mL)', mg: 150, ml: 3, isLiquid: true },
      'TABLETA': { label: 'Tableta 200 mg', mg: 200, ml: 1, isLiquid: false }
    },
    notes: 'DILUIR EXCLUSIVAMENTE EN DEXTROSA AL 5% (precipita en solución salina). Infundir por vía central si es posible.'
  },
  'AMOXICILINA': {
    category: 'Antibiótico / Aminopenicilina',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 3,
    maxDailyMgKg: 90,
    standardDose: '50 mg/kg/día (dosis estándar) a 80-90 mg/kg/día (en OMA y NAC neumocócica) dividido cada 8 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL y 500 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento de elección en otitis media aguda y neumonía bacteriana adquirida en la comunidad en pediatría.'
  },
  'AMPICILINA': {
    category: 'Antibiótico / Aminopenicilina EV/VO',
    doseMgKg: 100,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '100 a 200 mg/kg/día dividido cada 6 horas EV (en meningitis hasta 300-400 mg/kg/día)',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 500 mg y 1 g', mg: 1000, ml: 10, isLiquid: true },
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Fármaco de primera línea junto a gentamicina en sepsis neonatal y sospecha de Listeria monocytogenes.'
  },
  'ANFOTERICINA B': {
    category: 'Antimicótico Sistémico',
    doseMgKg: 1,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: 'Convencional: 0.5 a 1 mg/kg/día; Liposomal: 3 a 5 mg/kg/día en infusión EV lenta en 2-4 horas',
    formConcs: {
      'VIAL': { label: 'Vial 50 mg liofilizado (diluir en Dextrosa 5%)', mg: 50, ml: 10, isLiquid: true }
    },
    notes: 'DILUIR EXCLUSIVAMENTE EN DEXTROSA 5% (incompatible con salino). Monitorear potasio, magnesio y función renal.'
  },
  'ANTIACIDO': {
    category: 'Gastroprotector / Neutralizante',
    doseMgKg: 0.5,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '0.5 a 1 mL/kg/dosis administrado 1 hora después de comidas y al acostarse',
    formConcs: {
      'FRASCO': { label: 'Suspensión frasco Hidróxido de Aluminio y Magnesio', mg: 200, ml: 5, isLiquid: true }
    },
    notes: 'Alivia pirosis y gastritis. Separar 2 horas de antibióticos orales (tetraciclinas, hierro, fluoroquinolonas).'
  },
  'ANTIMONIO DE N METIL GLUCAMINA': {
    category: 'Antileishmaniásico',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '20 mg/kg/día de antimonio pentavalente por 20 días IM o EV',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 1.5 g / 5 mL (aprox. 405 mg Sb)', mg: 81, ml: 1, isLiquid: true }
    },
    notes: 'Tratamiento de leishmaniasis cutánea y mucocutánea. Monitorear función cardíaca con ECG (alargamiento de QT) y amilasa.'
  },
  'ANTITETANICA INMUNOFLOBULINA': {
    category: 'Inmunoglobulina Específica',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Profilaxis: 250 UI IM; Tratamiento de tétanos: 3000 a 6000 UI IM en dosis única',
    formConcs: {
      'AMPOLLA': { label: 'Jeringa prellenada / ampolla 250 UI', mg: 250, ml: 1, isLiquid: true }
    },
    notes: 'Inmunización pasiva inmediata en heridas contaminadas tetanígenas. Aplicar en sitio anatómico diferente a la vacuna antitetánica.'
  },
  'ARTESUNATO': {
    category: 'Antipalúdico',
    doseMgKg: 2.4,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '2.4 mg/kg/dosis EV a las 0h, 12h, 24h y luego cada 24 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 50 mg (o ampolla 60 mg EV)', mg: 50, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento de elección en malaria grave por Plasmodium falciparum según norma técnica MINSA/OMS.'
  },
  'ATROPINA': {
    category: 'Anticolinérgico / Reanimación / Antídoto',
    doseMgKg: 0.02,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '0.02 mg/kg/dosis EV/IM (dosis mínima: 0.1 mg para evitar bradicardia paradójica; máx 0.5 mg en niños)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 0.5 mg / 1 mL y 1 mg / 1 mL', mg: 1, ml: 1, isLiquid: true }
    },
    notes: 'En bradicardia sintomática con hipoxemia o intoxicación por organofosforados (repetir según respuesta pupilar y broncorrea).'
  },
  'AZITROMICINA': {
    category: 'Antibiótico / Macrólido',
    doseMgKg: 10,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '10 mg/kg/día una sola toma al día durante 3 a 5 días',
    formConcs: {
      'JARABE': { label: 'Suspensión 200 mg / 5 mL', mg: 200, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Excelente adherencia por toma única diaria. Tratamiento de neumonía atípica, tos ferina y faringoamigdalitis alérgica.'
  },
  'AZTREONAM': {
    category: 'Antibiótico / Monobactámico',
    doseMgKg: 90,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '90 a 120 mg/kg/día dividido cada 6 a 8 horas EV',
    formConcs: {
      'VIAL': { label: 'Vial 1 g polvo para reconstituir', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Seguro en pacientes alérgicos graves a penicilinas y cefalosporinas para cubrir bacilos Gram negativos.'
  },
  'BECLOMETASONA': {
    category: 'Corticosteroide Inhalatorio',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: '100 a 200 mcg cada 12 horas mediante aerocámara con espaciador',
    formConcs: {
      'INHALADOR': { label: 'Inhalador aerosol 50 mcg y 250 mcg por disparo (puff)', mg: 50, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento preventivo controlador del asma persistente. Enjuagar la boca con agua tras la inhalación para evitar candidiasis oral.'
  },
  'BENZOATO DE BENCILO': {
    category: 'Escabicida / Ectoparasiticida',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Aplicación tópica nocturna de cuello a pies durante 3 noches consecutivas',
    formConcs: {
      'LOCION': { label: 'Loción tópica 25% (diluir al 12.5% con agua en niños pequeños)', mg: 250, ml: 1, isLiquid: true },
      'CREMA': { label: 'Crema 25%', mg: 250, ml: 1, isLiquid: false }
    },
    notes: 'En niños menores de 2 años diluir 1:1 con agua hervida para evitar irritación cutánea severa.'
  },
  'BERACTANT': {
    category: 'Surfactante Pulmonar Natural',
    doseMgKg: 100, // mg fosfolípidos/kg = 4 mL/kg
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '100 mg/kg (4 mL/kg) endotraqueal en las primeras horas de vida en SDR',
    formConcs: {
      'FRASCO': { label: 'Frasco ampolla intratraqueal 200 mg / 8 mL (25 mg/mL)', mg: 25, ml: 1, isLiquid: true }
    },
    notes: 'Administración intratraqueal directa mediante tubo endotraqueal en neonatos con síndrome de distrés respiratorio (SDR).'
  },
  'BICARBONATO DE SODIO': {
    category: 'Alcalinizante Sistémico / Electrólito',
    doseMgKg: 1, // mEq/kg
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '1 a 2 mEq/kg en acidosis metabólica severa o paro cardíaco prolongado',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 8.4% (1 mEq/mL en 20 mL)', mg: 84, ml: 1, isLiquid: true }
    },
    notes: 'En neonatos y lactantes diluir 1:1 con agua bidestilada (solución al 4.2%) para evitar hiperosmolaridad y hemorragia intraventricular.'
  },
  'BIPERIDENO': {
    category: 'Anticolinérgico / Antídoto Extrapiramidal',
    doseMgKg: 0.05,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: '0.04 a 0.1 mg/kg/dosis IM o EV lenta en 2-3 min para distonías agudas',
    formConcs: {
      'TABLETA': { label: 'Tableta 2 mg', mg: 2, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 5 mg / 1 mL', mg: 5, ml: 1, isLiquid: true }
    },
    notes: 'Antídoto de rescate para revertir crisis distónicas y espasmos musculares inducidos por metoclopramida o antipsicóticos.'
  },
  'BISACODIL': {
    category: 'Laxante Estimulante',
    doseMgKg: 0.3,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '5 mg a 10 mg una vez al día al acostarse (>6 años)',
    formConcs: {
      'GRAGEA': { label: 'Gragea 5 mg', mg: 5, ml: 1, isLiquid: false },
      'SUPOSITORIO': { label: 'Supositorio pediátrico 5 mg', mg: 5, ml: 1, isLiquid: false }
    },
    notes: 'Estimula el peristaltismo colónico. No administrar con leche ni antiácidos (degrada cubierta entérica).'
  },
  'BUDESONIDA': {
    category: 'Corticosteroide Inhalatorio',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Inhalador: 100-200 mcg c/12h; Nebulización en laringotraqueítis (crup): 1-2 mg dosis única',
    formConcs: {
      'INHALADOR': { label: 'Inhalador aerosol 200 mcg/dosis y suspensión para nebulizar 0.5 mg/2 mL', mg: 200, ml: 1, isLiquid: false }
    },
    notes: 'En crup laríngeo o laringitis aguda la nebulización de budesonida disminuye rápidamente el estridor y la disnea.'
  },
  'CALCIO GLUCONATO': {
    category: 'Electrólito / Cardioprotector',
    doseMgKg: 100, // mg/kg de gluconato al 10% = 1 mL/kg
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '100 a 200 mg/kg (1 a 2 mL/kg de solución al 10%) EV lento en 10-20 min con monitoreo de FC',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 10% (100 mg/mL en 10 mL = 1 g / 10 mL)', mg: 100, ml: 1, isLiquid: true }
    },
    notes: 'INFUNDIR MUY LENTO Y MONITORIZANDO FRECUENCIA CARDÍACA (la infusión rápida causa bradicardia severa, asistolia e hipotensión).'
  },
  'CAPTOPRIL': {
    category: 'Antihipertensivo / IECA',
    doseMgKg: 0.3,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.1 a 0.5 mg/kg/dosis cada 8 horas (iniciar con dosis bajas y titular)',
    formConcs: {
      'TABLETA': { label: 'Tableta 25 mg', mg: 25, ml: 1, isLiquid: false }
    },
    notes: 'Administrar 1 hora antes de alimentos. Monitorear presión arterial y potasio sérico (riesgo de hiperpotasemia).'
  },
  'CARBAMAZEPINA': {
    category: 'Anticonvulsivante',
    doseMgKg: 10,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '10 a 20 mg/kg/día dividido cada 8 a 12 horas con las comidas',
    formConcs: {
      'JARABE': { label: 'Suspensión 100 mg / 5 mL', mg: 100, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 200 mg', mg: 200, ml: 1, isLiquid: false }
    },
    notes: 'Crisis epilépticas focales y neuralgia. Monitorear hemograma y sodio (riesgo de hiponatremia por SIADH).'
  },
  'CARBENICILINA': {
    category: 'Antibiótico / Carboxipenicilina',
    doseMgKg: 200,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '200 a 400 mg/kg/día dividido cada 6 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g y 5 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Uso hospitalario reservado. Aporta abundante sodio; vigilar función cardíaca y renal.'
  },
  'CARBINOXAMINA': {
    category: 'Antihistamínico H1',
    doseMgKg: 0.2,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '0.2 a 0.4 mg/kg/día dividido cada 8 horas',
    formConcs: {
      'GOTAS': { label: 'Gotas 2 mg / 1 mL', mg: 2, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 4 mg / 5 mL', mg: 4, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 4 mg', mg: 4, ml: 1, isLiquid: false }
    },
    notes: 'Antihistamínico de primera generación con propiedades anticolinérgicas y sedantes.'
  },
  'CEFACLOR': {
    category: 'Antibiótico / Cefalosporina 2ª Gen',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '20 a 40 mg/kg/día dividido cada 8 horas VO',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Infecciones respiratorias y otitis media en niños alérgicos no anafilácticos a penicilinas.'
  },
  'CEFADROXILO': {
    category: 'Antibiótico / Cefalosporina 1ª Gen',
    doseMgKg: 30,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '30 mg/kg/día dividido cada 12 horas VO',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL y 500 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Infecciones de piel, partes blandas y faringoamigdalitis estreptocócica.'
  },
  'CEFALEXINA': {
    category: 'Antibiótico / Cefalosporina 1ª Gen',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '25 a 50 mg/kg/día (hasta 100 mg/kg/día en severas) dividido cada 6 a 8 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento ambulatorio de elección en celulitis e impétigo estafilocócico.'
  },
  'CEFALOTINA': {
    category: 'Antibiótico / Cefalosporina 1ª Gen EV',
    doseMgKg: 80,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '80 a 100 mg/kg/día dividido cada 6 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g polvo liofilizado', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Profilaxis quirúrgica y tratamiento hospitalario de infecciones por cocos Gram positivos sensibles.'
  },
  'CEFAZOLINA': {
    category: 'Antibiótico / Cefalosporina 1ª Gen EV',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '50 a 100 mg/kg/día dividido cada 8 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Fármaco de elección en profilaxis quirúrgica pediátrica (30-60 min antes de incisión).'
  },
  'CEFDINIR': {
    category: 'Antibiótico / Cefalosporina 3ª Gen Oral',
    doseMgKg: 14,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '14 mg/kg/día en 1 sola toma o dividido cada 12 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 125 mg / 5 mL y 250 mg / 5 mL', mg: 125, ml: 5, isLiquid: true }
    },
    notes: 'Puede teñir las heces de color rojizo al combinarse con hierro en la luz intestinal.'
  },
  'CEFEPIME': {
    category: 'Antibiótico / Cefalosporina 4ª Gen EV',
    doseMgKg: 100,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '100 a 150 mg/kg/día dividido cada 8 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g y 2 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Monoterapia empírica en neutropenia febril y sepsis por Pseudomonas aeruginosa.'
  },
  'CEFETAMET': {
    category: 'Antibiótico / Cefalosporina 3ª Gen Oral',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '20 mg/kg/día dividido cada 12 horas VO',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Infecciones respiratorias complicadas y otitis refractarias.'
  },
  'CEFIXIMA': {
    category: 'Antibiótico / Cefalosporina 3ª Gen Oral',
    doseMgKg: 8,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '8 mg/kg/día en 1 sola toma o cada 12 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 100 mg / 5 mL', mg: 100, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 400 mg', mg: 400, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento oral de elección en infecciones del tracto urinario en pediatría.'
  },
  'CEFOTAXIMA': {
    category: 'Antibiótico / Cefalosporina 3ª Gen EV',
    doseMgKg: 150,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '100 a 200 mg/kg/día dividido cada 6 a 8 horas EV (en meningitis hasta 200-300 mg/kg/día)',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Cefalosporina de 3ª generación de elección en NEONATOS con sepsis (no compite con bilirrubina como ceftriaxona).'
  },
  'CEFOXITINA': {
    category: 'Antibiótico / Cefamicina (Anaerobios)',
    doseMgKg: 100,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '80 a 160 mg/kg/día dividido cada 6 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Excelente actividad sobre anaerobios bacterianos en infecciones intraabdominales y apendicitis perforada.'
  },
  'CEFPODOXIMA': {
    category: 'Antibiótico / Cefalosporina 3ª Gen Oral',
    doseMgKg: 10,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '10 mg/kg/día dividido cada 12 horas VO',
    formConcs: {
      'JARABE': { label: 'Suspensión 100 mg / 5 mL', mg: 100, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 100 mg y 200 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Neumonía adquirida en la comunidad, OMA y sinusitis bacteriana.'
  },
  'CEFRADINA': {
    category: 'Antibiótico / Cefalosporina 1ª Gen',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '50 a 100 mg/kg/día dividido cada 6 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Infecciones estafilocócicas y estreptocócicas de piel y partes blandas.'
  },
  'CEFTAZIDIMA': {
    category: 'Antibiótico / Cefalosporina Antipseudomónica',
    doseMgKg: 100,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '100 a 150 mg/kg/día dividido cada 8 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Potente actividad contra Pseudomonas aeruginosa en fibrosis quística y neutropenia febril.'
  },
  'CEFTRIAXONA': {
    category: 'Antibiótico / Cefalosporina 3ª Gen EV/IM',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 1,
    maxDailyMgKg: 100,
    standardDose: '50 a 75 mg/kg/día cada 24 horas (en meningitis: 100 mg/kg/día dividido cada 12h)',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 1 g (reconstituir en 10 mL = 100 mg/mL)', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'CONTRAINDICADA EN NEONATOS con ictericia o que reciben calcio EV (riesgo de precipitado mortal ceftriaxona-calcio).'
  },
  'CEFUROXIMA': {
    category: 'Antibiótico / Cefalosporina 2ª Gen',
    doseMgKg: 30,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: 'Oral: 20-30 mg/kg/día c/12h; Parenteral: 50-100 mg/kg/día c/8h',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Frasco ampolla 750 mg EV', mg: 750, ml: 10, isLiquid: true }
    },
    notes: 'Activa contra Haemophilus influenzae productor de betalactamasas y neumococos.'
  },
  'CETIRIZINA': {
    category: 'Antihistamínico H1 2ª Gen',
    doseMgKg: 0.25,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '2 a 5 años: 2.5-5 mg/día; >6 años: 5-10 mg/día (aprox. 0.25 mg/kg/día)',
    formConcs: {
      'GOTAS': { label: 'Gotas 10 mg / 1 mL (20 gotas)', mg: 10, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 5 mg / 5 mL', mg: 5, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 10 mg', mg: 10, ml: 1, isLiquid: false }
    },
    notes: 'Rinitis alérgica, urticaria y prurito. Administrar preferentemente por la noche.'
  },
  'CICLOSFOSFAMIDA': {
    category: 'Antineoplásico / Inmunosupresor',
    doseMgKg: 10,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: 'Según protocolo oncológico / nefrológico específico (hiperhidratación obligatoria)',
    formConcs: {
      'TABLETA': { label: 'Tableta 50 mg', mg: 50, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Frasco ampolla 500 mg y 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Riesgo de cistitis hemorrágica. Forzar diuresis con abundante hidratación y usar Mesna según protocolo.'
  },
  'CIMETIDINA': {
    category: 'Antagonista H2',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '20 a 40 mg/kg/día dividido cada 6 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 200 mg y 400 mg', mg: 200, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 300 mg / 2 mL', mg: 300, ml: 2, isLiquid: true }
    },
    notes: 'Inhibidor enzimático microsomal (múltiples interacciones farmacológicas).'
  },
  'CIPROFLOXACINO': {
    category: 'Antibiótico / Fluoroquinolona',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: 'Oral: 20-30 mg/kg/día c/12h; EV: 15-20 mg/kg/día c/12h',
    formConcs: {
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true }
    },
    notes: 'Uso pediátrico reservado para infecciones por Pseudomonas o Shigella resistente.'
  },
  'CIPROHEPTADINA': {
    category: 'Antihistamínico / Estimulante del Apetito',
    doseMgKg: 0.25,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '0.25 mg/kg/día dividido cada 8 horas',
    formConcs: {
      'JARABE': { label: 'Jarabe 2 mg / 5 mL', mg: 2, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 4 mg', mg: 4, ml: 1, isLiquid: false }
    },
    notes: 'Puede provocar somnolencia marcada y sequedad de mucosas.'
  },
  'CLARITROMICINA': {
    category: 'Antibiótico / Macrólido',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '15 mg/kg/día dividido cada 12 horas VO o EV',
    formConcs: {
      'JARABE': { label: 'Suspensión 125 mg / 5 mL y 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Frasco ampolla 500 mg', mg: 500, ml: 10, isLiquid: true }
    },
    notes: 'Neumonía atípica, erradicación de Helicobacter pylori e infecciones respiratorias.'
  },
  'CLENBUTEROL': {
    category: 'Broncodilatador Beta-2',
    doseMgKg: 0.001,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '0.001 mg (1 mcg)/kg/dosis cada 12 horas',
    formConcs: {
      'JARABE': { label: 'Jarabe 0.01 mg (10 mcg) / 5 mL', mg: 0.01, ml: 5, isLiquid: true }
    },
    notes: 'Monitorear taquicardia y temblores musculares en lactantes.'
  },
  'CLINDAMICINA': {
    category: 'Antibiótico / Lincosamida',
    doseMgKg: 30,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: 'Oral: 10-25 mg/kg/día c/8h; EV: 20-40 mg/kg/día c/6-8h',
    formConcs: {
      'JARABE': { label: 'Solución pediátrica 75 mg / 5 mL', mg: 75, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 300 mg', mg: 300, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 600 mg / 4 mL (150 mg/mL)', mg: 600, ml: 4, isLiquid: true }
    },
    notes: 'Excelente actividad contra anaerobios y SARM de comunidad. Infundir EV en no menos de 30-40 min.'
  },
  'CLOBAZAM': {
    category: 'Benzodiazepina / Antiepiléptico',
    doseMgKg: 0.5,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '0.5 a 1 mg/kg/día dividido cada 12 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 10 mg y 20 mg', mg: 10, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento coadyuvante en epilepsias refractarias (síndrome de Lennox-Gastaut).'
  },
  'CLOMIPRAMINA': {
    category: 'Antidepresivo Tricíclico',
    doseMgKg: 1,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '1 a 2.5 mg/kg/día dividido cada 12 horas en TOC infantil (>10 años)',
    formConcs: {
      'TABLETA': { label: 'Tableta 25 mg', mg: 25, ml: 1, isLiquid: false }
    },
    notes: 'Monitorear ECG por riesgo de arritmias y prolongación del QT.'
  },
  'CLONAZEPAM': {
    category: 'Benzodiazepina / Anticonvulsivante',
    doseMgKg: 0.05,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '0.01 a 0.05 mg/kg/día dividido cada 8 horas (iniciar bajo y titular)',
    formConcs: {
      'GOTAS': { label: 'Gotas 2.5 mg / 1 mL (1 gota = 0.1 mg; 25 gotas/mL)', mg: 2.5, ml: 1, isLiquid: true, dropsPerMl: 25 },
      'TABLETA': { label: 'Tableta 0.5 mg y 2 mg', mg: 0.5, ml: 1, isLiquid: false }
    },
    notes: 'Epilepsia mioclónica, ausencias y espasmos infantiles. Retirar gradualmente.'
  },
  'CLONIDINA': {
    category: 'Agonista Alfa-2 Central',
    doseMgKg: 0.005,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '5 a 10 mcg/kg/día dividido cada 12 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 0.15 mg (150 mcg)', mg: 0.15, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 0.15 mg / 1 mL', mg: 0.15, ml: 1, isLiquid: true }
    },
    notes: 'Crisis hipertensivas, síndrome de abstinencia a sedantes y TDAH.'
  },
  'CLORAMFENICOL': {
    category: 'Antibiótico / Anfenicol',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '50 a 75 mg/kg/día dividido cada 6 horas (en meningitis hasta 100 mg/kg/día)',
    formConcs: {
      'JARABE': { label: 'Suspensión 125 mg / 5 mL y 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'CONTRAINDICADO EN RECIÉN NACIDOS por riesgo de Síndrome del Bebé Gris mortal.'
  },
  'CLORFENAMINA': {
    category: 'Antihistamínico H1 Clásico',
    doseMgKg: 0.35,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '0.35 mg/kg/día dividido cada 6 a 8 horas',
    formConcs: {
      'GOTAS': { label: 'Gotas 2 mg / 1 mL', mg: 2, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 2 mg / 5 mL', mg: 2, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 4 mg', mg: 4, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 10 mg / 1 mL', mg: 10, ml: 1, isLiquid: true }
    },
    notes: 'Urticaria y reacciones alérgicas. Produce somnolencia y sedación marcada.'
  },
  'CLOROQUINA': {
    category: 'Antipalúdico',
    doseMgKg: 10,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Ataque: 10 mg base/kg; luego 5 mg base/kg a las 6h, 24h y 48h',
    formConcs: {
      'TABLETA': { label: 'Tableta 150 mg base (250 mg fosfato)', mg: 150, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla fosfato de cloroquina', mg: 200, ml: 5, isLiquid: true }
    },
    notes: 'Malaria por Plasmodium vivax. Monitorear función ocular en tratamientos prolongados.'
  },
  'CLORPROMACINA': {
    category: 'Antipsicótico / Neuroléptico',
    doseMgKg: 0.5,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.5 a 1 mg/kg/dosis cada 6 a 8 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 25 mg y 100 mg', mg: 25, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 25 mg / 2 mL', mg: 25, ml: 2, isLiquid: true }
    },
    notes: 'Agitación psicomotriz e hipo intratable. Produce sedación e hipotensión.'
  },
  'CLOTRIMAZOL': {
    category: 'Antimicótico Tópico',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Aplicación tópica 2 a 3 veces al día en la zona afectada',
    formConcs: {
      'CREMA': { label: 'Crema tópica 1%', mg: 10, ml: 1, isLiquid: false }
    },
    notes: 'Dermatitis del pañal por Candida, tiña corporal y candidiasis cutánea.'
  },
  'CODEINA': {
    category: 'Analgésico Opioide Menor / Antitusígeno',
    doseMgKg: 0.5,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '0.5 a 1 mg/kg/dosis cada 6 horas',
    formConcs: {
      'JARABE': { label: 'Jarabe 10 mg / 5 mL y 15 mg / 5 mL', mg: 15, ml: 5, isLiquid: true },
      'AMPOLLA': { label: 'Ampolla 30 mg / 1 mL', mg: 30, ml: 1, isLiquid: true }
    },
    notes: 'CONTRAINDICADA en menores de 12 años y post-amigdalectomía por riesgo de metabolizadores ultrarrápidos y depresión respiratoria fatal.'
  },
  'COLISTINA': {
    category: 'Antibiótico / Polimixina E',
    doseMgKg: 5,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '2.5 a 5 mg (75,000 a 150,000 UI)/kg/día dividido cada 8 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 100 mg (aprox. 1 a 3 millones UI)', mg: 100, ml: 10, isLiquid: true }
    },
    notes: 'Infecciones críticas por bacilos Gram negativos panresistentes. Alta nefrotoxicidad; controlar diuresis y urea.'
  },
  'COTRIMOXAZOL': {
    category: 'Antibiótico / Sulfamida + Trimetoprima',
    doseMgKg: 40, // mg/kg de sulfametoxazol (relación 5:1 con trimetoprima 8 mg/kg)
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: 'TMP 8-10 mg/kg/día + SMX 40-50 mg/kg/día dividido cada 12 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 200/40 mg en 5 mL (Pediátrico)', mg: 240, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 400/80 mg y Forte 800/160 mg', mg: 480, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 400/80 mg en 5 mL EV', mg: 480, ml: 5, isLiquid: true }
    },
    notes: 'Tratamiento de neumonía por Pneumocystis jirovecii e infecciones urinarias. Contraindicado en recién nacidos (kernícterus).'
  },
  'CROMOGLICATO': {
    category: 'Estabilizador de Mastocitos',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '1 a 2 disparos (inhalaciones) 3 a 4 veces al día',
    formConcs: {
      'INHALADOR': { label: 'Aerosol inhalador 5 mg / dosis', mg: 5, ml: 1, isLiquid: false }
    },
    notes: 'Prevención del asma inducida por ejercicio y rinitis alérgica. Uso exclusivamente profiláctico.'
  },
  'DAPSONA': {
    category: 'Antibacteriano / Sulfona',
    doseMgKg: 1,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '1 a 2 mg/kg/día en 1 sola toma (máx 100 mg/día)',
    formConcs: {
      'TABLETA': { label: 'Tableta 100 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento de lepra y profilaxis de Pneumocystis. Riesgo de metahemoglobinemia y hemólisis en déficit de G6PD.'
  },
  'DEFLAZACORT': {
    category: 'Corticosteroide Sistémico',
    doseMgKg: 0.5,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '0.25 a 1.5 mg/kg/día en 1 sola toma matutina',
    formConcs: {
      'GOTAS': { label: 'Gotas 22.75 mg / mL (1 gota = aprox. 1 mg)', mg: 22.75, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'TABLETA': { label: 'Tableta 6 mg y 30 mg', mg: 6, ml: 1, isLiquid: false }
    },
    notes: 'Menor efecto hiperglucemiante y menor osteoporosis que la prednisona.'
  },
  'DESLORATADINA': {
    category: 'Antihistamínico H1 2ª Gen',
    doseMgKg: 0.1,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '6-11 meses: 1 mg/día; 1-5 años: 1.25 mg/día; 6-11 años: 2.5 mg/día; >12 años: 5 mg/día',
    formConcs: {
      'JARABE': { label: 'Jarabe 2.5 mg / 5 mL (0.5 mg/mL)', mg: 2.5, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 5 mg', mg: 5, ml: 1, isLiquid: false }
    },
    notes: 'Metabolito activo de la loratadina. No produce somnolencia a dosis recomendadas.'
  },
  'DEXAMETASONA': {
    category: 'Corticosteroide de Alta Potencia',
    doseMgKg: 0.3,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Laringitis / Crup: 0.15 a 0.6 mg/kg dosis única; Edema cerebral: 0.25-0.5 mg/kg/dosis',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 4 mg / 1 mL y 8 mg / 2 mL', mg: 4, ml: 1, isLiquid: true },
      'JARABE': { label: 'Elixir / Solución 0.5 mg / 5 mL', mg: 0.5, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 0.5 mg, 1 mg y 4 mg', mg: 4, ml: 1, isLiquid: false }
    },
    notes: 'Dosis única de 0.15-0.6 mg/kg en crup laríngeo reduce drásticamente las intubaciones y hospitalizaciones.'
  },
  'DEXTROMETORFANO': {
    category: 'Antitusígeno Central',
    doseMgKg: 0.3,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.2 a 0.4 mg/kg/dosis cada 6 a 8 horas (>2 años)',
    formConcs: {
      'GOTAS': { label: 'Gotas 15 mg / 1 mL', mg: 15, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 15 mg / 5 mL', mg: 15, ml: 5, isLiquid: true },
      'GRAGEA': { label: 'Gragea / Cápsula 15 mg', mg: 15, ml: 1, isLiquid: false }
    },
    notes: 'Tos seca irritativa no productiva. NO usar en menores de 2 años ni en tos productiva o crisis asmática.'
  },
  'DIAZEPAM': {
    category: 'Benzodiazepina / Anticonvulsivante de Rescate',
    doseMgKg: 0.3,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Crisis convulsiva: 0.2 a 0.3 mg/kg EV lento en 2-3 min (o 0.5 mg/kg por vía rectal)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 10 mg / 2 mL (5 mg/mL)', mg: 10, ml: 2, isLiquid: true }
    },
    notes: 'Infundir lentamente. Tener equipo de aspiración y bolsa autoinflable (ambú) por riesgo de apnea transitoria.'
  },
  'DIBEKACINA': {
    category: 'Antibiótico / Aminoglucósido',
    doseMgKg: 3,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '2 a 4 mg/kg/día dividido cada 8 a 12 horas IM o EV',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 50 mg / 1 mL y 100 mg / 2 mL', mg: 50, ml: 1, isLiquid: true }
    },
    notes: 'Actividad frente a Pseudomonas y enterobacterias. Monitorear función renal y auditiva.'
  },
  'DICLOFENACO': {
    category: 'AINE / Analgésico y Antiinflamatorio',
    doseMgKg: 1,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.5 a 1 mg/kg/dosis cada 8 horas (máx 2-3 mg/kg/día)',
    formConcs: {
      'GOTAS': { label: 'Gotas 15 mg / 1 mL (Resinato)', mg: 15, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Suspensión 9 mg / 5 mL', mg: 9, ml: 5, isLiquid: true },
      'GRAGEA': { label: 'Gragea / Tableta 50 mg', mg: 50, ml: 1, isLiquid: false },
      'SUPOSITORIO': { label: 'Supositorio pediátrico 12.5 mg', mg: 12.5, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 75 mg / 3 mL', mg: 75, ml: 3, isLiquid: true }
    },
    notes: 'Dolor inflamatorio agudo. En inyección IM aplicar intraglúteo profundo en cuadrante superior externo.'
  },
  'DICLOXACILINA': {
    category: 'Antibiótico / Penicilina Antiestafilocócica Oral',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '25 a 50 mg/kg/día dividido cada 6 horas en ayunas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Infecciones estafilocócicas de piel (impétigo, forunculosis). Administrar 1 hora antes de alimentos.'
  },
  'DIFENHIDRAMINA': {
    category: 'Antihistamínico H1 / Sedante',
    doseMgKg: 1.25,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: '1 a 1.25 mg/kg/dosis cada 6 horas (máx 5 mg/kg/día o 300 mg/día)',
    formConcs: {
      'JARABE': { label: 'Jarabe 12.5 mg / 5 mL', mg: 12.5, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 25 mg y 50 mg', mg: 50, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 50 mg / 1 mL', mg: 50, ml: 1, isLiquid: true }
    },
    notes: 'Fármaco de rescate para distonías agudas inducidas por metoclopramida. Sedación profunda.'
  },
  'DIFOSFATO SODICO': {
    category: 'Laxante Enema Evacuante',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Enema pediátrico (aprox. 60 mL) según edad en impactación fecal',
    formConcs: {
      'FRASCO': { label: 'Frasco enema evacuante pediátrico 66 mL', mg: 100, ml: 1, isLiquid: true }
    },
    notes: 'Evacuación intestinal rápida. Contraindicado en sospecha de abdomen agudo o megacolon congénito.'
  },
  'DIGOXINA': {
    category: 'Cardiotónico / Glucósido Cardíaco',
    doseMgKg: 0.008, // 8 mcg/kg/día
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: 'Mantenimiento: 8 a 10 mcg/kg/día dividido cada 12 horas VO',
    formConcs: {
      'TABLETA': { label: 'Tableta 0.25 mg (y solución oral pediátrica 0.05 mg/mL)', mg: 0.25, ml: 1, isLiquid: false }
    },
    notes: 'Fármaco de estrecho margen terapéutico. Controlar pulso apical antes de cada dosis; suspender si hay bradicardia.'
  },
  'DIMENHIDRINATO': {
    category: 'Antiemético / Antihistamínico (Gravol)',
    doseMgKg: 1.25,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '1 a 1.25 mg/kg/dosis cada 6 a 8 horas (máx 5 mg/kg/día)',
    formConcs: {
      'JARABE': { label: 'Jarabe 15 mg / 5 mL', mg: 15, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 50 mg', mg: 50, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 50 mg / 1 mL y 50 mg / 5 mL', mg: 50, ml: 1, isLiquid: true },
      'SUPOSITORIO': { label: 'Supositorio pediátrico 25 mg', mg: 25, ml: 1, isLiquid: false }
    },
    notes: 'Prevención y alivio de náuseas, vómitos y cinetosis. Administrar 30 min antes de viajar.'
  },
  'SIMETICONA': {
    category: 'Antiflatulento / Antiespumante',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: 'Lactantes: 20 a 40 mg (5 a 10 gotas) con las tomas de leche; niños: 40 mg cada 6h',
    formConcs: {
      'FRASCO': { label: 'Gotas 80 mg / mL (o emulsión oral 40 mg/mL)', mg: 80, ml: 1, isLiquid: true, dropsPerMl: 20 }
    },
    notes: 'Alivio del cólico del lactante y meteorismo por gases. No se absorbe sistémicamente.'
  },
  'DIPIRONA': {
    category: 'Analgésico / Antipirético (Metamizol)',
    doseMgKg: 15,
    isDailyDose: false,
    defaultFreq: 3,
    maxDailyMgKg: 40,
    standardDose: '10 a 15 mg/kg/dosis cada 8 horas (condicionado a fiebre >38.5°C o dolor)',
    formConcs: {
      'GOTAS': { label: 'Gotas 500 mg / 1 mL (20 gotas = 500 mg)', mg: 500, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'JARABE': { label: 'Jarabe 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'SUPOSITORIO': { label: 'Supositorio infantil 300 mg', mg: 300, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 1 g / 2 mL (500 mg/mL)', mg: 1000, ml: 2, isLiquid: true }
    },
    notes: 'NUNCA administrar EV en bolo directo (riesgo de hipotensión severa y shock). Diluir en 50-100 mL ClNa 0.9% en 20 min.'
  },
  'DOBUTAMINA': {
    category: 'Inotrópico Beta-1',
    doseMgKg: 5, // mcg/kg/min
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '2.5 a 15 mcg/kg/minuto en infusión continua por BIC',
    formConcs: {
      'FRASCO AMPOLLA': { label: 'Frasco ampolla 250 mg / 20 mL (12.5 mg/mL)', mg: 250, ml: 20, isLiquid: true }
    },
    notes: 'Shock cardiogénico y bajo gasto cardíaco. Administrar estrictamente por bomba de infusión continua.'
  },
  'DOMPERIDONA': {
    category: 'Antiemético / Procinético',
    doseMgKg: 0.25,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.25 mg/kg/dosis cada 8 horas antes de los alimentos (máx 0.75 mg/kg/día)',
    formConcs: {
      'GOTAS': { label: 'Gotas 10 mg / 1 mL', mg: 10, ml: 1, isLiquid: true, dropsPerMl: 20 },
      'TABLETA': { label: 'Tableta 10 mg', mg: 10, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 10 mg / 2 mL', mg: 10, ml: 2, isLiquid: true }
    },
    notes: 'No cruza fácilmente la barrera hematoencefálica (menor riesgo de síntomas extrapiramidales que metoclopramida).'
  },
  'DOPAMINA': {
    category: 'Inotrópico / Vasopresor',
    doseMgKg: 5, // mcg/kg/min
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: 'Inotrópico: 5 a 10 mcg/kg/min; Vasopresor: 10 a 20 mcg/kg/min en BIC',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 200 mg / 5 mL (40 mg/mL)', mg: 200, ml: 5, isLiquid: true }
    },
    notes: 'Monitoreo hemodinámico estricto por vía central. Proteger sitio venoso para evitar necrosis por extravasación.'
  },
  'DOXICICLINA': {
    category: 'Antibiótico / Tetraciclina',
    doseMgKg: 4,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '4 mg/kg/día el día 1, luego 2-4 mg/kg/día dividido cada 12h (>8 años)',
    formConcs: {
      'CAPSULA': { label: 'Cápsula / Tableta 100 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Contraindicado en <8 años excepto en rickettsiosis/cólera grave. Ingerir con abundante agua erguido.'
  },
  'ECONAZOL': {
    category: 'Antimicótico Tópico',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Aplicar capa fina en la piel 2 veces al día por 2 a 4 semanas',
    formConcs: {
      'CREMA': { label: 'Crema 1%', mg: 10, ml: 1, isLiquid: false }
    },
    notes: 'Dermatomicosis, pie de atleta y tiñas superficiales en niños.'
  },
  'ENALAPRIL': {
    category: 'Antihipertensivo / IECA',
    doseMgKg: 0.1,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '0.1 a 0.5 mg/kg/día dividido cada 12 a 24 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 5 mg, 10 mg y 20 mg', mg: 10, ml: 1, isLiquid: false }
    },
    notes: 'Hipertensión y proteinuria en glomerulopatías. Vigilar presión arterial y función renal.'
  },
  'EPINEFRINA': {
    category: 'Vasopresor / Adrenalina',
    doseMgKg: 0.01,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '0.01 mg/kg IM en anafilaxia (0.01 mL/kg de 1:1000); 0.01 mg/kg EV en paro cardíaco',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 1 mg / 1 mL (1:1000)', mg: 1, ml: 1, isLiquid: true }
    },
    notes: 'Tratamiento de elección en shock anafiláctico y parada cardiorrespiratoria PALS.'
  },
  'ERGOTAMINA': {
    category: 'Antimigrañoso',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '1 mg al inicio del aura migrañosa (uso muy restringido en adolescentes)',
    formConcs: {
      'CAPSULA': { label: 'Cápsula / Gragea 1 mg (con cafeína)', mg: 1, ml: 1, isLiquid: false }
    },
    notes: 'Uso en crisis agudas de migraña refractaria. Contraindicado en insuficiencia vascular o renal.'
  },
  'ERITROMICINA': {
    category: 'Antibiótico / Macrólido',
    doseMgKg: 40,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '30 a 50 mg/kg/día dividido cada 6 a 8 horas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg', mg: 500, ml: 1, isLiquid: false },
      'CAPSULA': { label: 'Cápsula 500 mg', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Tos ferina (coqueluche) y profilaxis de contactos. En neonatos se asocia a estenosis hipertrófica de píloro.'
  },
  'ERITROPOYETINA': {
    category: 'Factor Hematopoyético',
    doseMgKg: 50, // UI/kg
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '50 a 150 UI/kg/dosis SC 3 veces por semana',
    formConcs: {
      'VIAL': { label: 'Vial 2000 UI y 4000 UI', mg: 4000, ml: 1, isLiquid: true }
    },
    notes: 'Anemia de la prematuridad y en insuficiencia renal crónica pediátrica. Administrar suplemento de hierro.'
  },
  'ERTAPENEM': {
    category: 'Antibiótico / Carbapenem',
    doseMgKg: 30,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '30 mg/kg/día dividido cada 12 horas EV (máx 1 g/día)',
    formConcs: {
      'FRASCO': { label: 'Frasco ampolla 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Infecciones por enterobacterias productoras de BLEE. No activo frente a Pseudomonas.'
  },
  'ESPECTINOMICINA': {
    category: 'Antibiótico / Aminociclitol',
    doseMgKg: 40,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '40 mg/kg IM dosis única (máximo 2 g)',
    formConcs: {
      'FRASCO': { label: 'Frasco ampolla 2 g polvo para suspensión IM', mg: 2000, ml: 5, isLiquid: true }
    },
    notes: 'Infección gonocócica en pacientes alérgicos a betalactámicos.'
  },
  'ESPIRONOLACTONA': {
    category: 'Diurético Ahorrador de Potasio',
    doseMgKg: 2,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '1 a 3 mg/kg/día dividido cada 12 a 24 horas',
    formConcs: {
      'TABLETA': { label: 'Tableta 25 mg y 100 mg', mg: 25, ml: 1, isLiquid: false }
    },
    notes: 'Insuficiencia cardíaca congestiva, edema ascítico y displasia broncopulmonar. Monitorear potasio sérico.'
  },
  'ESTREPTOMICINA': {
    category: 'Antibiótico / Aminoglucósido Antituberculoso',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '15 a 20 mg/kg/día IM una sola vez al día (máx 1 g/día)',
    formConcs: {
      'FRASCO': { label: 'Frasco ampolla 1 g polvo', mg: 1000, ml: 5, isLiquid: true },
      'AMPOLLA': { label: 'Ampolla 1 g', mg: 1000, ml: 5, isLiquid: true }
    },
    notes: 'Tratamiento de tuberculosis y tularemia. Alta ototoxicidad cocleovestibular irreversible.'
  },
  'ETAMBUTOL': {
    category: 'Antituberculoso',
    doseMgKg: 20,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '15 a 25 mg/kg/día en 1 sola toma matutina (máx 1.2 g/día)',
    formConcs: {
      'TABLETA': { label: 'Tableta 400 mg', mg: 400, ml: 1, isLiquid: false }
    },
    notes: 'Fármaco de primera línea en TBC. Vigilar agudeza visual y discriminación de color rojo-verde (neuritis óptica).'
  },
  'ETILEFRINA': {
    category: 'Vasopresor / Simpaticomimético',
    doseMgKg: 0.1,
    isDailyDose: false,
    defaultFreq: 3,
    standardDose: '0.1 a 0.2 mg/kg/dosis IM o EV lenta en hipotensión aguda',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 10 mg / 1 mL (Effortil)', mg: 10, ml: 1, isLiquid: true }
    },
    notes: 'Tratamiento sintomático de colapso circulatorio o hipotensión ortostática.'
  },
  'FENAZOPIRIDINA': {
    category: 'Analgésico de Vías Urinarias',
    doseMgKg: 4,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '12 mg/kg/día dividido cada 8 horas por 2 días máximo',
    formConcs: {
      'TABLETA': { label: 'Tableta 100 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Alivia disuria y ardor miccional. Tiñe la orina de color anaranjado o rojo brillante inocuo.'
  },
  'FENITOINA': {
    category: 'Anticonvulsivante Hidantoína (Epamín)',
    doseMgKg: 18, // carga: 15-20 mg/kg; mant: 5 mg/kg/día
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Carga: 15-20 mg/kg EV lento en 20 min en ClNa 0.9%; Mantenimiento: 5-7 mg/kg/día c/12h',
    formConcs: {
      'JARABE': { label: 'Suspensión 125 mg / 5 mL', mg: 125, ml: 5, isLiquid: true },
      'CAPSULA': { label: 'Cápsula 100 mg', mg: 100, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 250 mg / 5 mL (50 mg/mL)', mg: 250, ml: 5, isLiquid: true }
    },
    notes: 'DILUIR EXCLUSIVAMENTE EN CLORURO DE SODIO 0.9% (en dextrosa cristaliza). Infundir en no menos de 20 min.'
  },
  'FENOBARBITAL': {
    category: 'Barbitúrico / Anticonvulsivante Neonatal',
    doseMgKg: 20, // carga: 20 mg/kg; mant: 3-5 mg/kg/día
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Ataque: 20 mg/kg EV lento en 15-20 min; Mantenimiento: 3 a 5 mg/kg/día dividido c/12h',
    formConcs: {
      'TABLETA': { label: 'Tableta 100 mg', mg: 100, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 200 mg / 1 mL y 100 mg / 2 mL', mg: 200, ml: 1, isLiquid: true }
    },
    notes: 'Fármaco de PRIMERA ELECCIÓN en convulsiones neonatales. Monitorear depresión respiratoria.'
  },
  'FENOTEROL': {
    category: 'Broncodilatador SABA (Berotec)',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 4,
    standardDose: 'Inhalador: 1 a 2 disparos con aerocámara; Nebulización: 1 gota por cada 2-3 kg (máx 10 gotas)',
    formConcs: {
      'INHALADOR': { label: 'Aerosol inhalador 100 mcg / dosis', mg: 100, ml: 1, isLiquid: false },
      'NEBULIZACION': { label: 'Solución para nebulizar al 0.5% (5 mg/mL; 1 gota = 0.25 mg)', mg: 5, ml: 1, isLiquid: true, dropsPerMl: 20 }
    },
    notes: 'Crisis asmática y broncoespasmo agudo. Puede producir taquicardia sinusal y temblor muscular.'
  },
  'FENOXIMETIL PENICILINA': {
    category: 'Antibiótico / Penicilina V Oral',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '25 a 50 mg (40,000 a 80,000 UI)/kg/día dividido cada 6 horas en ayunas',
    formConcs: {
      'JARABE': { label: 'Suspensión 250 mg (400,000 UI) / 5 mL', mg: 250, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 500 mg (800,000 UI)', mg: 500, ml: 1, isLiquid: false }
    },
    notes: 'Tratamiento de faringitis estreptocócica y profilaxis de fiebre reumática o asplenia.'
  },
  'FENTANILO': {
    category: 'Analgésico Opioide Mayor',
    doseMgKg: 0.001, // 1 mcg/kg
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '1 a 2 mcg/kg/dosis EV lento en 3 a 5 minutos (o infusión continua 1-3 mcg/kg/h)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 0.5 mg / 10 mL (50 mcg/mL) o 0.1 mg / 2 mL', mg: 0.05, ml: 1, isLiquid: true }
    },
    notes: 'Analgesia y sedación en UCI e intubación. La infusión rápida puede causar tórax leñoso rígido.'
  },
  'FEXOFENADINA': {
    category: 'Antihistamínico H1 2ª Gen',
    doseMgKg: 2,
    isDailyDose: true,
    defaultFreq: 2,
    standardDose: '2 a 11 años: 30 mg cada 12 horas; >12 años: 60 mg c/12h o 180 mg c/24h',
    formConcs: {
      'JARABE': { label: 'Suspensión 30 mg / 5 mL', mg: 30, ml: 5, isLiquid: true }
    },
    notes: 'Antihistamínico no sedante de segunda generación para rinitis alérgica y urticaria.'
  },
  'FISOSTIGMINA': {
    category: 'Inhibidor Acetilcolinesterasa / Antídoto',
    doseMgKg: 0.02,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '0.02 mg/kg EV lento en 5 minutos (máx 0.5 mg inicial en niños)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 1 mg / 1 mL', mg: 1, ml: 1, isLiquid: true }
    },
    notes: 'Antídoto específico del síndrome anticolinérgico severo (atropina, escopolamina).'
  },
  'FLUBENDAZOL': {
    category: 'Antiparasitario / Antihelmíntico',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '100 mg dos veces al día por 3 días o 500 mg dosis única',
    formConcs: {
      'JARABE': { label: 'Suspensión 100 mg / 5 mL', mg: 100, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 100 mg y 500 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Eficaz en oxiuros, tricocéfalos y ascaris en niños mayores de 1 año.'
  },
  'FLUCLOXACILINA': {
    category: 'Antibiótico / Penicilina Antiestafilocócica',
    doseMgKg: 50,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '25 a 50 mg/kg/día dividido cada 6 horas',
    formConcs: {
      'FRASCO': { label: 'Frasco ampolla 500 mg y 1 g', mg: 1000, ml: 10, isLiquid: true }
    },
    notes: 'Infecciones estafilocócicas de piel, partes blandas y osteoarticulares.'
  },
  'FLUCONAZOL': {
    category: 'Antimicótico Sistémico Triazol',
    doseMgKg: 6,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: '6 a 12 mg/kg/día en 1 sola toma (carga el doble el primer día)',
    formConcs: {
      'CAPSULA': { label: 'Cápsula 150 mg y 200 mg', mg: 150, ml: 1, isLiquid: false },
      'FRASCO': { label: 'Frasco solución para infusión EV 200 mg / 100 mL (2 mg/mL)', mg: 2, ml: 1, isLiquid: true },
      'SUSPENSION': { label: 'Suspensión oral 50 mg / 5 mL', mg: 50, ml: 5, isLiquid: true }
    },
    notes: 'Candidiasis orofaríngea, esofágica y sistémica. Excelente biodisponibilidad oral.'
  },
  'FLUMAZENILO': {
    category: 'Antídoto Antagonista Benzodiazepínico',
    doseMgKg: 0.01,
    isDailyDose: false,
    defaultFreq: 1,
    standardDose: '0.01 mg (10 mcg)/kg EV lento en 15 segundos (máx 0.2 mg inicial)',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 0.5 mg / 5 mL (0.1 mg/mL)', mg: 0.5, ml: 5, isLiquid: true }
    },
    notes: 'Reversión rápida de la sedación por benzodiacepinas. Su vida media es corta (vigilar resedación).'
  },
  'FLUNISOLIDA': {
    category: 'Corticosteroide Inhalatorio',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: '1 a 2 inhalaciones cada 12 horas en mayores de 4 años',
    formConcs: {
      'INHALADOR': { label: 'Inhalador nasal / oral 250 mcg por dosis', mg: 250, ml: 1, isLiquid: false }
    },
    notes: 'Control del asma crónica persistente y rinitis alérgica severa.'
  },
  'FLUTICASONA': {
    category: 'Corticosteroide Inhalatorio Potente',
    doseMgKg: 0,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: '50 a 100 mcg cada 12 horas con aerocámara espaciadora',
    formConcs: {
      'INHALADOR': { label: 'Aerosol inhalador 50 mcg y 125 mcg por disparo (puff)', mg: 50, ml: 1, isLiquid: false }
    },
    notes: 'Alta potencia tópica antiinflamatoria en asma persistente infantil con mínimo paso a circulación sistémica.'
  },
  'FURAZOLIDONA': {
    category: 'Antibacteriano y Antiprotozoario Intestinal',
    doseMgKg: 6,
    isDailyDose: true,
    defaultFreq: 4,
    standardDose: '5 a 8 mg/kg/día dividido cada 6 horas por 5 a 7 días',
    formConcs: {
      'JARABE': { label: 'Suspensión 50 mg / 15 mL (o 16.6 mg/5 mL)', mg: 16.6, ml: 5, isLiquid: true },
      'TABLETA': { label: 'Tableta 100 mg', mg: 100, ml: 1, isLiquid: false }
    },
    notes: 'Giardiasis y diarreas bacterianas por gérmenes susceptibles. Tiñe la orina de amarillo o naranja.'
  },
  'FUROSEMIDA': {
    category: 'Diurético de Asa Potente',
    doseMgKg: 1,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'EV/IM: 0.5 a 1 mg/kg/dosis cada 8-12h; Oral: 1 a 2 mg/kg/dosis',
    formConcs: {
      'TABLETA': { label: 'Tableta 40 mg', mg: 40, ml: 1, isLiquid: false },
      'AMPOLLA': { label: 'Ampolla 20 mg / 2 mL (10 mg/mL)', mg: 20, ml: 2, isLiquid: true }
    },
    notes: 'Infundir EV lentamente para evitar ototoxicidad. Monitorear electrolitos (hipopotasemia e hiponatremia).'
  },
  'GABAPENTINA': {
    category: 'Antiepiléptico / Dolor Neuropático',
    doseMgKg: 15,
    isDailyDose: true,
    defaultFreq: 3,
    standardDose: '15 a 35 mg/kg/día dividido cada 8 horas (titular progresivamente)',
    formConcs: {
      'CAPSULA': { label: 'Cápsula 300 mg y 400 mg', mg: 300, ml: 1, isLiquid: false }
    },
    notes: 'Crisis focales y dolor neuropático. Titular la dosis durante los primeros 3 días.'
  },
  'GANCICLOVIR': {
    category: 'Antiviral para Citomegalovirus (CMV)',
    doseMgKg: 5,
    isDailyDose: false,
    defaultFreq: 2,
    standardDose: 'Inducción: 5 mg/kg/dosis cada 12 horas EV en 1 hora por 14-21 días',
    formConcs: {
      'AMPOLLA': { label: 'Frasco ampolla 500 mg liofilizado', mg: 500, ml: 10, isLiquid: true }
    },
    notes: 'Infección congénita y neonatal por CMV. Fármaco mielotóxico (controlar neutrófilos y plaquetas).'
  },
  'GENTAMICINA': {
    category: 'Antibiótico / Aminoglucósido',
    doseMgKg: 5,
    isDailyDose: true,
    defaultFreq: 1,
    standardDose: 'Neonatos: 4-5 mg/kg/dosis c/24-36h; Niños: 5-7.5 mg/kg/día en 1 sola dosis cada 24 horas EV',
    formConcs: {
      'AMPOLLA': { label: 'Ampolla 20 mg / 2 mL y 80 mg / 2 mL (40 mg/mL)', mg: 80, ml: 2, isLiquid: true }
    },
    notes: 'Sepsis neonatal, ITU complicada e infecciones por bacilos Gram negativos. Infundir diluido en 30-60 min.'
  }
};

// Convert all 129 drugs from file into our complete structured format
const result = parsedDrugs.map((item, idx) => {
  const upper = item.name.toUpperCase();
  const kb = pediatricKB[upper] || {};

  // Form presentations
  const presentations = item.forms.map(f => {
    if (kb.formConcs && kb.formConcs[f]) {
      return {
        form: f,
        concLabel: kb.formConcs[f].label,
        concMg: kb.formConcs[f].mg,
        concMl: kb.formConcs[f].ml,
        isLiquid: kb.formConcs[f].isLiquid !== undefined ? kb.formConcs[f].isLiquid : ['GOTAS', 'JARABE', 'SUSPENSION', 'AMPOLLA', 'FRASCO', 'VIAL', 'FRASCO AMPOLLA', 'ENDOVENOSO', 'NEBULIZACION', 'LOCION'].includes(f),
        dropsPerMl: kb.formConcs[f].dropsPerMl || (f === 'GOTAS' ? 20 : undefined)
      };
    }
    // Generic presentation fallback
    let defaultMg = 100;
    let defaultMl = 1;
    let isLiquid = false;
    if (f === 'JARABE' || f === 'SUSPENSION') { defaultMg = 250; defaultMl = 5; isLiquid = true; }
    else if (f === 'GOTAS') { defaultMg = 100; defaultMl = 1; isLiquid = true; }
    else if (f === 'AMPOLLA' || f === 'VIAL' || f === 'FRASCO AMPOLLA' || f === 'ENDOVENOSO') { defaultMg = 500; defaultMl = 5; isLiquid = true; }
    else if (f === 'TABLETA' || f === 'CAPSULA' || f === 'GRAGEA') { defaultMg = 500; defaultMl = 1; isLiquid = false; }
    else if (f === 'CREMA' || f === 'UNGUENTO OFTALMICO' || f === 'LOCION') { defaultMg = 20; defaultMl = 1; isLiquid = false; }
    else if (f === 'INHALADOR') { defaultMg = 100; defaultMl = 1; isLiquid = false; }

    return {
      form: f,
      concLabel: `${f} estándar (${defaultMg} mg${defaultMl > 1 ? ` / ${defaultMl} mL` : ''})`,
      concMg: defaultMg,
      concMl: defaultMl,
      isLiquid,
      dropsPerMl: f === 'GOTAS' ? 20 : undefined
    };
  });

  // Clean drug name
  const cleanName = item.name.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return {
    id: item.name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_'),
    name: cleanName,
    rawName: item.name,
    category: kb.category || 'Medicamento Pediátrico',
    standardDose: kb.standardDose || `${kb.doseMgKg || 10} mg/kg/${kb.isDailyDose ? 'día' : 'dosis'}`,
    doseMgKg: kb.doseMgKg || 10,
    isDailyDose: kb.isDailyDose || false,
    defaultFreq: kb.defaultFreq || 3,
    maxDailyMgKg: kb.maxDailyMgKg,
    maxDailyAbsoluteMg: kb.maxDailyAbsoluteMg,
    presentations,
    notes: kb.notes || 'Verificar indicación clínica y calcular dosis según peso corporal del paciente pediátrico.'
  };
});

const tsFileContent = `export interface PediatricPresentation {
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

export const pediatricDrugsData: PediatricDrug[] = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync('src/data/pediatricDrugsData.ts', tsFileContent, 'utf8');
console.log('Successfully generated src/data/pediatricDrugsData.ts with', result.length, 'drugs!');
