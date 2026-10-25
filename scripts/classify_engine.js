import fs from 'fs';

// Load the 600 raw questions extracted from the 6 official PDF exams
const rawQuestions = JSON.parse(fs.readFileSync('src/data/raw_600_questions.json', 'utf8'));

console.log(`Loaded ${rawQuestions.length} raw questions.`);

// Taxonomy definition matching MINSA TEMARIO 2026
const AREAS = {
  SALUD_PUBLICA: 'Salud Pública',
  CUIDADO_INTEGRAL: 'Cuidado Integral de Salud',
  ETICA_INTERCULTURALIDAD: 'Ética e Interculturalidad',
  INVESTIGACION: 'Investigación',
  GESTION: 'Gestión de Servicios de Salud',
};

// Helper to sanitize strings
function clean(str) {
  return (str || '').replace(/\r/g, '').replace(/[ \t]+/g, ' ').trim();
}

// Classification engine based on technical terms, Peruvian norms (NTS), and official syllabus
function classifyQuestion(q) {
  const fullText = (q.question + ' ' + q.options.map(o => o.text).join(' ')).toLowerCase();

  // 1. INVESTIGACIÓN
  if (
    /vancouver|cronbach|muestra probabil|muestreo por|hip[oó]tesis|variable independ|variable depend|variable confus|diseño de investig|ensayo cl[ií]nico|estudio de cohorte|estudio de casos y controles|estudio observacional|estudio cuasiexperimental|estudio experimental|estudio descriptivo|estudio transversal|estudio longitudinal|prueba de chi|pearson|spearman|recolecci[oó]n de datos|validez interna|validez externa|sesgo de selecci|sesgo de informaci|marco te[oó]rico|plagio|fraude|datos ficticios|publicaci[oó]n cient[ií]fica/i.test(fullText)
  ) {
    let subarea = 'Metodología de la Investigación';
    if (/vancouver|plagio|fraude|publicaci|aspectos [eé]ticos de la invest/i.test(fullText)) {
      subarea = 'Ejecución y Publicación de la Investigación';
    } else if (/diseño|tipo de estudio|enfoque cualit|enfoque cuantit|conceptos b[aá]sicos de investig/i.test(fullText)) {
      subarea = 'Conceptos y Clasificación de las Investigaciones';
    }

    let topic = 'Metodología y Diseño de Investigación';
    if (/vancouver/i.test(fullText)) topic = 'Normas de Estilo y Citación Vancouver';
    else if (/cronbach/i.test(fullText)) topic = 'Confiabilidad y Consistencia Interna (Alfa de Cronbach)';
    else if (/fraude|plagio/i.test(fullText)) topic = 'Ética e Integridad en Investigación Científica';
    else if (/cohorte/i.test(fullText)) topic = 'Estudios de Cohorte (Riesgo Relativo)';
    else if (/casos y controles/i.test(fullText)) topic = 'Estudios de Casos y Controles (Odds Ratio)';
    else if (/variable/i.test(fullText)) topic = 'Operacionalización y Tipos de Variables';
    else if (/muestreo|muestra/i.test(fullText)) topic = 'Técnicas de Muestreo y Tamaño Muestral';

    return { area: AREAS.INVESTIGACION, subarea, topic };
  }

  // 2. ÉTICA E INTERCULTURALIDAD
  if (
    /intercultural|pertinencia cultural|parto vertical|medicina tradicional|partera|cosmovisi[oó]n|bio[eé]tica|autonom[ií]a|beneficencia|no maleficencia|justicia\b|secreto profesional|confidencialidad|derechos del usuario|consentimiento informado|c[oó]digo de [eé]tica|deontolog|trato digno|discriminaci[oó]n [eé]tnica|estigma/i.test(fullText)
  ) {
    let subarea = 'Ética y Bioética';
    let topic = 'Principios de Bioética y Deontología Profesional';
    if (/intercultural|parto vertical|medicina tradicional|partera|cosmovisi[oó]n|pertinencia/i.test(fullText)) {
      subarea = 'Atención Intercultural en Salud';
      topic = /parto vertical/i.test(fullText) ? 'Parto Vertical y Adecuación Cultural' : 'Enfoque Intercultural y Respeto a Creencias';
    } else if (/secreto|confidencialidad/i.test(fullText)) {
      topic = 'Secreto Profesional y Confidencialidad de la Información';
    } else if (/autonom[ií]a|consentimiento/i.test(fullText)) {
      topic = 'Principio de Autonomía y Consentimiento Informado';
    }

    return { area: AREAS.ETICA_INTERCULTURALIDAD, subarea, topic };
  }

  // 3. GESTIÓN DE SERVICIOS DE SALUD
  if (
    /foda\b|pei\b|poi\b|planeamiento estrat|categoriz|i-1|i-2|i-3|i-4|ii-1|ii-2|iii-1|upss|referencia y contrarreferencia|contrareferencia|historia cl[ií]nica|archivo activo|archivo pasivo|redes integradas de salud|ris\b|telesalud|telemedicina|teleconsulta|teleorientaci[oó]n|telemonitoreo|recursos humanos|convocatoria|reclutamiento|inducci[oó]n|clima organizacional|seguridad del paciente|evento adverso|auditor[ií]a m[eé]dica|auditor[ií]a de caso|acreditaci[oó]n|gesti[oó]n por procesos|cartera de servicios|mop\b|rof\b|mof\b|control de inventario|stock|medicamentos vencidos/i.test(fullText)
  ) {
    let subarea = 'Organización de los Servicios de Salud';
    let topic = 'Organización y Cartera de Servicios';
    if (/pei|poi|foda|planeamiento|presupuest/i.test(fullText)) {
      subarea = 'Planificación y Presupuesto en Salud';
      topic = 'Planeamiento Estratégico y Operativo (PEI / POI)';
    } else if (/recursos humanos|convocatoria|reclutamiento|inducci|inventario|stock|liderazgo/i.test(fullText)) {
      subarea = 'Administración de los Servicios de Salud';
      topic = 'Administración y Gestión del Talento Humano';
    } else if (/acreditaci|seguridad del paciente|evento adverso|auditor|calidad/i.test(fullText)) {
      subarea = 'Sistema de Gestión de la Calidad';
      topic = 'Gestión de la Calidad y Acreditación de IPRESS';
    } else if (/referencia|contrarreferencia/i.test(fullText)) {
      topic = 'Sistema Nacional de Referencia y Contrarreferencia';
    } else if (/historia cl[ií]nica|archivo/i.test(fullText)) {
      topic = 'Gestión y Custodia de la Historia Clínica';
    } else if (/tele/i.test(fullText)) {
      topic = 'Telesalud y Telemedicina en el Primer Nivel';
    } else if (/categoriz/i.test(fullText)) {
      topic = 'Categorización de Establecimientos de Salud (NTS N° 021-MINSA)';
    }

    return { area: AREAS.GESTION, subarea, topic };
  }

  // 4. SALUD PÚBLICA
  if (
    /fesp\b|funciones esenciales|epidemiol|asis\b|an[aá]lisis situacional|determinantes sociales|determinantes ambientales|brote\b|brotes|epidemia|epizootia|endemia|pandemia|tasa de ataque|vigilancia epidemiol|curva epidemiol|residuos s[oó]lidos|bolsa roja|bolsa negra|bolsa amarilla|bioseguridad|sectorizaci[oó]n|ficha familiar|visita domiciliaria|agua segura|cloraci[oó]n|saneamiento b[aá]sico|aedes|larvicida|control focal|vector|salud ambiental|salud ocupacional|leavell|triada ecol[oó]gica|prepatog[eé]nico|patog[eé]nico|prevenci[oó]n primaria|prevenci[oó]n secundaria|prevenci[oó]n terciaria|prevenci[oó]n cuaternaria/i.test(fullText)
  ) {
    let subarea = 'Métodos y Aplicaciones de Salud Pública';
    let topic = 'Epidemiología y Vigilancia en Salud Pública';
    if (/determinantes|sectorizaci|ficha familiar|comunitari|residuos|saneamiento|agua segura|aedes|vector/i.test(fullText)) {
      subarea = 'Salud Comunitaria';
      topic = /residuos/i.test(fullText) ? 'Manejo de Residuos Sólidos Hospitalarios (NTS N° 144)' : 'Salud Comunitaria y Determinantes Sociales';
    } else if (/bioseguridad|desastres|emergencias y desastres|iec\b|promoci[oó]n de la salud/i.test(fullText)) {
      subarea = 'Promoción de la Salud y Prevención del Riesgo y Daño';
      topic = 'Bioseguridad y Gestión del Riesgo en Salud';
    } else if (/leavell|historia natural|prepatog|niveles de prevenci/i.test(fullText)) {
      topic = 'Historia Natural de la Enfermedad y Niveles de Prevención';
    } else if (/brote|epidemia|tasa de ataque/i.test(fullText)) {
      topic = 'Investigación y Control de Brotes Epidemiológicos';
    }

    return { area: AREAS.SALUD_PUBLICA, subarea, topic };
  }

  // 5. CUIDADO INTEGRAL DE SALUD (Clinical Nursing, CRED, Vacunas, Anemia, Gestante, Adulto Mayor, PAE)
  let subarea = 'Temas Transversales (Curso de Vida y Programas)';
  let topic = 'Cuidado Integral de Enfermería';

  if (/pae\b|proceso de atenci[oó]n de enfermer|nanda|nic\b|noc\b|diagn[oó]stico de enfermer|fase del pae/i.test(fullText)) {
    subarea = 'Temas Específicos (Cuidado Integral y PAE)';
    topic = 'Proceso de Atención de Enfermería (PAE / NANDA-NIC-NOC)';
  } else if (/vacun|inmuniz|bcg|pentavalente|polio|rotavirus|neumococo|spr|dpt|esavi|cadena de fr[ií]o|termolabil/i.test(fullText)) {
    subarea = 'Temas Específicos (Cuidado Integral y PAE)';
    topic = 'Esquema Nacional de Vacunación y Cadena de Frío (NTS 196 / NTS 246)';
  } else if (/cred\b|desarrollo psicomotor|talla para la edad|peso para la edad|périmetro cef[aá]lico|tamizaje neonatal/i.test(fullText)) {
    subarea = 'Temas Específicos (Cuidado Integral y PAE)';
    topic = 'Control de Crecimiento y Desarrollo Infantil (CRED)';
  } else if (/anemia|hemoglobina|sulfato ferroso|hierro polimaltosado|gotas de hierro|chispitas/i.test(fullText)) {
    topic = 'Prevención y Tratamiento de la Anemia Infantil (NTS N° 134)';
  } else if (/tuberculosis|tbc|baciloscop|sintom[aá]tico respiratorio|pan tb|dot|rifampicina|isoniacida/i.test(fullText)) {
    topic = 'Prevención y Control de la Tuberculosis (NTS N° 200)';
  } else if (/parto|gestante|clave roja|clave azul|clave amarilla|preeclampsia|hemorragia postparto|sulfato de magnesio/i.test(fullText)) {
    topic = 'Emergencias Obstétricas y Salud Materno-Perinatal';
  } else if (/adulto mayor|barthel|katz|pfeiffer|fragilidad|valoraci[oó]n cl[ií]nica del adulto mayor|vacam/i.test(fullText)) {
    topic = 'Valoración Clínica Integral del Adulto Mayor (VACAM)';
  } else if (/vih\b|s[ií]filis|vdrl|tamizaje vih|tarv|transmisi[oó]n materno infantil/i.test(fullText)) {
    topic = 'Atención y Prevención de ITS / VIH / Sífilis Congénita';
  } else if (/c[aá]ncer|tamizaje de mama|mamograf|papanicolaou|ivaa|cuello uterino/i.test(fullText)) {
    topic = 'Prevención y Tamizaje de Cáncer Ginecológico (NTS MINSA)';
  }

  return { area: AREAS.CUIDADO_INTEGRAL, subarea, topic };
}

console.log('Classification engine ready.');
