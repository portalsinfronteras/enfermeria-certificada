import enae600Data from './enae600Questions.json';

export interface EnaeQuestion {
  id: string;
  number: number;
  area: 'Salud Pública' | 'Cuidado Integral de Salud' | 'Ética e Interculturalidad' | 'Investigación' | 'Gestión de Servicios de Salud';
  subarea: string;
  topic: string;
  examSource: string;
  question: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  example: string;
  keyTakeaway: string;
}

export const ENAE_AREAS = [
  'Salud Pública',
  'Cuidado Integral de Salud',
  'Ética e Interculturalidad',
  'Investigación',
  'Gestión de Servicios de Salud',
] as const;

export type EnaeAreaType = (typeof ENAE_AREAS)[number];

export const ENAE_AREA_DESCRIPTIONS: Record<EnaeAreaType, { icon: string; description: string; subareas: string[] }> = {
  'Salud Pública': {
    icon: 'Globe',
    description: 'Métodos epidemiológicos, FESP, ASIS, determinantes de la salud, saneamiento, manejo de residuos sólidos y bioseguridad.',
    subareas: [
      'Métodos y Aplicaciones de Salud Pública',
      'Salud Comunitaria',
      'Promoción de la Salud y Prevención del Riesgo y Daño',
    ],
  },
  'Cuidado Integral de Salud': {
    icon: 'HeartHandshake',
    description: 'PAE (NANDA-NIC-NOC), inmunizaciones y cadena de frío, CRED infantil, anemia, TBC, salud materna y adulto mayor.',
    subareas: [
      'Temas Específicos (Cuidado Integral y PAE)',
      'Temas Transversales (Curso de Vida y Programas)',
    ],
  },
  'Ética e Interculturalidad': {
    icon: 'Scale',
    description: 'Bioética, deber deontológico, confidencialidad, consentimiento informado, parto vertical y diálogo intercultural.',
    subareas: [
      'Ética y Bioética',
      'Atención Intercultural en Salud',
    ],
  },
  'Investigación': {
    icon: 'FlaskConical',
    description: 'Metodología científica, variables, diseños de cohorte y casos-controles, Alfa de Cronbach, bioestadística y estilo Vancouver.',
    subareas: [
      'Conceptos y Clasificación de las Investigaciones',
      'Metodología de la Investigación',
      'Ejecución y Publicación de la Investigación',
    ],
  },
  'Gestión de Servicios de Salud': {
    icon: 'Briefcase',
    description: 'Planeamiento estratégico (PEI/POI), categorización (I-1 a I-4), referencia y contrarreferencia, auditoría y acreditación.',
    subareas: [
      'Planificación y Presupuesto en Salud',
      'Organización de los Servicios de Salud',
      'Administración de los Servicios de Salud',
      'Sistema de Gestión de la Calidad',
    ],
  },
};

// Complete bank of 600 official questions from MINSA SERUMS / ENAE exams
export const ENAE_QUESTIONS: EnaeQuestion[] = enae600Data as EnaeQuestion[];

/**
 * Returns 50 randomly sampled questions from the 600 question bank.
 * Dynamically changes on each invocation (e.g., when the user enters the app or clicks reshuffle).
 */
export function getRandom50Questions(pool: EnaeQuestion[] = ENAE_QUESTIONS): EnaeQuestion[] {
  if (pool.length <= 50) return [...pool];
  // Fisher-Yates shuffle
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 50);
}
