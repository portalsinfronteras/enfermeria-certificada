export interface Vaccine {
  id: string;
  name: string;
  months: string;
  disease: string;
  dose: string;
  route: string;
  age: string;
  category: 'RN' | 'Lactante' | 'Preescolar' | 'Escolar' | 'Adulto / Gestante';
  needle: string;
  esavi: string;
  care: string;
}

export const vaccinesData: Vaccine[] = [
  {
    id: "bcg",
    name: "BCG (Bacilo Calmette-Guérin)",
    months: "Recién Nacido (<12 horas)",
    disease: "Formas graves de Tuberculosis (Meningitis tuberculosa y TB Miliar)",
    dose: "0.1 mL (Dosis única)",
    route: "Intradérmica (ID) en región deltoidea derecha",
    age: "Recién Nacido (<12 horas de vida, peso ≥ 1500g)",
    category: "RN",
    needle: "Jeringa 1mL con aguja 27G x 3/8 autoquebrable",
    esavi: "Linfadenitis supurada axilar, absceso o úlcera de gran tamaño en sitio de punción.",
    care: "Informar a la madre sobre la evolución normal de la pápula: a las 2-4 semanas se forma pústula, úlcera y luego cicatriz queloide. NO frotar, NO colocar cremas ni alcohol."
  },
  {
    id: "hvb_rn",
    name: "Hepatitis B Pediátrica (HVB)",
    months: "Recién Nacido (<12 horas)",
    disease: "Transmisión vertical madre a hijo del virus de la Hepatitis B",
    dose: "0.5 mL (Dosis única)",
    route: "Intramuscular (IM) profunda en tercio medio cara anterolateral externa del muslo",
    age: "Recién Nacido (<12 horas de vida, peso ≥ 2000g)",
    category: "RN",
    needle: "Jeringa 1mL con aguja 25G x 5/8 autoquebrable",
    esavi: "Dolor leve, eritema o induración transitoria en sitio de inyección.",
    care: "Aplicar idealmente dentro de las primeras 12 horas postparto. En recién nacidos con peso menor a 2000g, postergar hasta que alcance dicho peso o al mes de vida."
  },
  {
    id: "penta",
    name: "Pentavalente (DPT + HVB + Hib)",
    months: "2, 4 y 6 meses",
    disease: "Difteria, Tétanos, Tos ferina (pertussis), Hepatitis B y Haemophilus influenzae tipo b",
    dose: "0.5 mL (3 dosis: 2m, 4m y 6m)",
    route: "Intramuscular (IM) profunda en muslo (vasto externo)",
    age: "2 meses, 4 meses y 6 meses",
    category: "Lactante",
    needle: "Jeringa 1mL con aguja 25G x 1 autoquebrable",
    esavi: "Fiebre (hasta 38.5°C), dolor local, llanto persistente no consolable (>3 horas), irritabilidad.",
    care: "Prescribir paracetamol condicionado a fiebre. Colocar compresas frías limpias en el muslo sin masajear. Contraindicado pertussis en encefalopatía previa."
  },
  {
    id: "ipv",
    name: "Poliomielitis Inactivada (IPV - Salk)",
    months: "2, 4, 6 y 18 meses",
    disease: "Poliomielitis anterior aguda (Parálisis flácida infantil)",
    dose: "0.5 mL IM (según actualización NTS 246 reemplaza polio oral)",
    route: "Intramuscular (IM) en vasto externo del muslo",
    age: "2 meses, 4 meses, 6 meses y refuerzo a los 18 meses",
    category: "Lactante",
    needle: "Jeringa 1mL con aguja 25G x 1",
    esavi: "Reacción local leve, dolor pasajero, febrícula.",
    care: "El esquema MINSA universalizó el uso de vacuna inactivada inyectable (IPV) para evitar el riesgo de poliovirus derivado de la vacuna asociado a la antigua APO oral."
  },
  {
    id: "rotavirus",
    name: "Rotavirus Humano Atenuado",
    months: "2 y 4 meses",
    disease: "Gastroenteritis aguda diarreica severa por Rotavirus y deshidratación infantil",
    dose: "1.5 mL en aplicador oral (2 dosis)",
    route: "Vía Oral (VO) lenta en ángulo interno de la boca",
    age: "2 meses (1ra dosis) y 4 meses (2da dosis máx 8 meses)",
    category: "Lactante",
    needle: "Jeringa dosificadora oral precargada sin aguja",
    esavi: "Regurgitación, diarrea autolimitada leve, irritabilidad, riesgo muy infrecuente de invaginación intestinal.",
    care: "Administrar lentamente hacia el carrillo de la mejilla. Si el lactante regurgita o vomita la dosis, NO volver a administrar la dosis en ese momento."
  },
  {
    id: "neumo",
    name: "Neumococo Conjugada 13-valente",
    months: "2, 4 y 12 meses",
    disease: "Enfermedades neumocócicas invasivas (Neumonía bacteriana, meningitis, bacteriemia, otitis)",
    dose: "0.5 mL (3 dosis: 2m, 4m y 12 meses)",
    route: "Intramuscular (IM) en muslo (<1 año) o deltoides (≥1 año)",
    age: "2 meses, 4 meses y refuerzo al 1 año (12 meses)",
    category: "Lactante",
    needle: "Jeringa 1mL con aguja 25G x 1",
    esavi: "Fiebre dentro de las 24-48 horas, induración y eritema en zona de aplicación.",
    care: "Indicar hidratación adecuada y antipirético si la temperatura axilar es ≥38.0°C. Comprobar que el frasco esté bien homogeneizado."
  },
  {
    id: "spr",
    name: "SPR (Sarampión, Papera / Parotiditis, Rubéola)",
    months: "12 y 18 meses",
    disease: "Sarampión infantil, Parotiditis y Rubéola congénita",
    dose: "0.5 mL (2 dosis: 12m y 18m)",
    route: "Subcutánea (SC) en región deltoidea del brazo a 45°",
    age: "12 meses (1 año) y 18 meses (1 año y medio)",
    category: "Preescolar",
    needle: "Jeringa 1mL con aguja 25G x 5/8",
    esavi: "Fiebre y exantema morbiliforme leve a los 7-10 días posteriores a la vacunación.",
    care: "Advertir con claridad a los padres sobre la reacción tardía característica benigna entre el 7mo y 10mo día. No usar en inmunodeprimidos severos."
  },
  {
    id: "ama",
    name: "Antiamarílica (AMA)",
    months: "15 meses",
    disease: "Fiebre Amarilla selvática",
    dose: "0.5 mL (Dosis única de por vida)",
    route: "Subcutánea (SC) a 45° en región deltoidea",
    age: "15 meses de edad (o viajeros a zonas endémicas)",
    category: "Preescolar",
    needle: "Jeringa 1mL con aguja 25G x 5/8",
    esavi: "Cefalea, mialgias, malestar general a los 3-5 días.",
    care: "Proteger el frasco reconstituido de la luz solar; desechar el sobrante tras 6 horas de abierto. Registrar en carné internacional si aplica."
  },
  {
    id: "vha",
    name: "Hepatitis A Pediátrica",
    months: "15 meses",
    disease: "Hepatitis A aguda y fallo hepático fulminante pediátrico",
    dose: "0.5 mL (Dosis única según NTS MINSA)",
    route: "Intramuscular (IM) en músculo deltoides",
    age: "15 meses de edad",
    category: "Preescolar",
    needle: "Jeringa 1mL con aguja 25G x 1",
    esavi: "Dolor leve en deltoides, febrícula transitoria.",
    care: "Vacuna de virus inactivado. Conservar en cadena de frío estricta de +2°C a +8°C sin congelar."
  },
  {
    id: "varicela",
    name: "Varicela Atenuada",
    months: "12 meses",
    disease: "Varicela y sus complicaciones bacterianas graves de piel y partes blandas",
    dose: "0.5 mL (Dosis a los 12 meses)",
    route: "Subcutánea (SC) a 45° en región deltoidea",
    age: "12 meses (hasta los 2 años 11 meses)",
    category: "Preescolar",
    needle: "Jeringa 1mL con aguja 25G x 5/8",
    esavi: "Pápulas o vesículas escasas aisladas a los 7-21 días post-vacuna.",
    care: "Vacuna de virus vivo atenuado. Reconstituir con su propio diluyente y aplicar de inmediato. Evitar salicilatos (aspirina) por 6 semanas por riesgo de Sx Reye."
  },
  {
    id: "dpt_refuerzo",
    name: "DPT Refuerzo (Difteria, Tétanos, Tos ferina)",
    months: "18 meses y 4 años",
    disease: "Refuerzo inmunológico de Difteria, Tétanos y Pertussis",
    dose: "0.5 mL (1er refuerzo: 18m, 2do refuerzo: 4 años)",
    route: "Intramuscular (IM) en región deltoidea o cuadrante súpero-externo glúteo",
    age: "18 meses y 4 años de edad",
    category: "Preescolar",
    needle: "Jeringa 1mL con aguja 23G x 1",
    esavi: "Induración en el sitio de inyección, tumefacción local, fiebre de 38°C.",
    care: "No frotar la zona. En niños mayores de 7 años no se usa DPT celular, sino formulación dT adulto."
  },
  {
    id: "vph",
    name: "VPH (Virus Papiloma Humano - Recombinante)",
    months: "9 a 13 años (Escolar)",
    disease: "Cáncer de cuello uterino, verrugas anogenitales y cánceres asociados a VPH 16 y 18",
    dose: "0.5 mL (Dosis única según actualización MINSA 2024-2026)",
    route: "Intramuscular (IM) en tercio superior del músculo deltoides",
    age: "Niñas y niños del 5to grado de primaria o entre 9 y 13 años",
    category: "Escolar",
    needle: "Jeringa 1mL con aguja 23G x 1",
    esavi: "Síncope vasovagal postural por aprehensión psicológica o dolor local intenso.",
    care: "OBLIGATORIO: Mantener a la o al estudiante sentado y en reposo supervisado durante al menos 15 minutos post-vacunación para prevenir traumatismos por síncope."
  },
  {
    id: "influenza",
    name: "Influenza Estacional Trivalente/Tetravalente",
    months: "6m, 7m y anual",
    disease: "Infección respiratoria aguda grave y neumonía por virus influenza A y B",
    dose: "0.25 mL (niños 6-35 meses) / 0.5 mL (≥3 años, gestantes y adultos mayores)",
    route: "Intramuscular (IM) en deltoides (o vasto externo en menores de 1 año)",
    age: "Desde los 6 meses de edad (anual) y grupos de riesgo",
    category: "Adulto / Gestante",
    needle: "Jeringa 1mL con aguja 23G x 1 o 25G x 1",
    esavi: "Sensación gripal leve, febrícula, mialgias durante las primeras 48 horas.",
    care: "Campaña anual según cepa hemisferio sur recomendada por la OMS. Priorizar en asmáticos, cardiopatías, diabéticos y personal de salud."
  },
  {
    id: "tdap_gestante",
    name: "dTpa (Tétanos, Difteria y Pertussis Acelular para adultos)",
    months: "27 a 36 semanas gestación",
    disease: "Tos ferina maligna neonatal y tétanos materno-neonatal",
    dose: "0.5 mL (Dosis en cada embarazo)",
    route: "Intramuscular (IM) en músculo deltoides",
    age: "Gestantes entre las 27 y 36 semanas de gestación",
    category: "Adulto / Gestante",
    needle: "Jeringa 1mL con aguja 23G x 1",
    esavi: "Dolor e hinchazón local leve a moderada en brazo.",
    care: "Asegura el paso trasplacentario masivo de anticuerpos protectores IgG hacia el feto para defender al recién nacido durante sus primeros 2 meses de vida."
  },
  {
    id: "neumo_adulto",
    name: "Neumococo Polisacárida / Conjugada Adulto",
    months: "Adultos ≥60 años",
    disease: "Neumonía neumocócica bacteriana grave y sepsis en la tercera edad",
    dose: "0.5 mL (Dosis única)",
    route: "Intramuscular (IM) en deltoides",
    age: "Adultos mayores de 60 años y personas con comorbilidades",
    category: "Adulto / Gestante",
    needle: "Jeringa 1mL con aguja 23G x 1",
    esavi: "Eritema local, fatiga, mialgias transitorias.",
    care: "No requiere refuerzo rutinario en inmunocompetentes según norma nacional. Registrar adecuadamente en el padrón HIS MINSA."
  }
];
