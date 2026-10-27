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

export interface DrugRecommendation {
  drug: string;
  dose: string;
  route: string;
  freq: string;
  notes?: string;
}

export interface DiagnosisItem {
  id: string;
  number?: number;
  title: string;
  cie10: string;
  category: string;
  chapter?: string;
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
    firstLine: DrugRecommendation[];
    alternatives?: DrugRecommendation[];
    nonPharm: string[];
    nursingCare: string[];
    severityLevels?: {
      level: string;
      description: string;
      management: string;
    }[];
  };
}

export interface CatalogoEntry {
  number: number;
  id?: string;
  title: string;
  cie10: string;
  category: string;
  chapter: string;
  definition: string;
  symptoms: string[];
  redFlags?: string[];
  criteria: string;
  labTests: string[];
  imaging?: string[];
  differential: string[];
  firstLine: (DrugRecommendation | string)[];
  alternatives?: (DrugRecommendation | string)[];
  nonPharm: string[];
  nursingCare: string[];
  dosingRules?: DosingRule[];
}

function normalizeDrugs(list?: (DrugRecommendation | string)[]): DrugRecommendation[] {
  if (!list || !Array.isArray(list)) return [];
  return list.map((item) => {
    if (typeof item === 'string') {
      return {
        drug: item,
        dose: 'Según criterio médico y protocolo clínico',
        route: 'Indicada',
        freq: 'Según evolución'
      };
    }
    return item;
  });
}

export function toDiagnosisItem(item: CatalogoEntry): DiagnosisItem {
  return {
    id: item.id || `diag-${item.number}`,
    number: item.number,
    title: `${item.number}. ${item.title} (${item.cie10})`,
    cie10: item.cie10,
    category: item.category,
    chapter: item.chapter,
    definition: item.definition,
    symptoms: item.symptoms,
    redFlags: item.redFlags || [
      'Deterioro rápido del estado general o sensorio',
      'Inestabilidad hemodinámica o respiratoria',
      'Signos de shock, hipoxemia o sangrado activo'
    ],
    diagnosis: {
      criteria: item.criteria,
      labTests: item.labTests,
      imaging: item.imaging,
      differential: item.differential,
    },
    treatment: {
      dosingRules: item.dosingRules || [],
      firstLine: normalizeDrugs(item.firstLine),
      alternatives: normalizeDrugs(item.alternatives),
      nonPharm: item.nonPharm || [],
      nursingCare: item.nursingCare || [],
    },
  };
}
