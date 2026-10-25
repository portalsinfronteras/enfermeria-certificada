import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  FileSpreadsheet,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Plus,
  Sparkles,
  ClipboardList,
  Target,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

interface NandaItem {
  code: string;
  label: string;
  domain: string;
  classType: string;
  definition: string;
  symptoms: string[];
  noc: {
    code: string;
    label: string;
    indicators: string[];
    targetScore: string;
  }[];
  nic: {
    code: string;
    label: string;
    activities: string[];
  }[];
}

interface PlaceTemplate {
  id: string;
  title: string;
  category: string;
  patientProfile: string;
  nandaCode: string;
  nandaLabel: string;
  relatedFactors: string;
  definingCharacteristics: string;
  nocLabel: string;
  nocIndicators: string[];
  nicLabel: string;
  nicActivities: string[];
  evaluation: string;
}

const NANDA_DATABASE: NandaItem[] = [
  {
    code: '00032',
    label: 'Patrón respiratorio ineficaz',
    domain: 'Dominio 4: Actividad / Reposo',
    classType: 'Clase 4: Respuestas cardiovasculares / pulmonares',
    definition: 'Inspiración o espiración que no proporciona una ventilación adecuada.',
    symptoms: ['Disnea', 'Taquipnea (>20 rpm)', 'Uso de músculos accesorios', 'Aleteo nasal', 'Tirajes intercostales'],
    noc: [
      {
        code: '0415',
        label: 'Estado respiratorio',
        indicators: ['Frecuencia respiratoria en rango normal', 'Ritmo respiratorio regular', 'Profundidad de la respiración', 'Ausencia de tirajes'],
        targetScore: 'Mantener en 2 (Sustancialmente comprometido) y Aumentar a 4 (Levemente comprometido)'
      },
      {
        code: '0402',
        label: 'Estado respiratorio: Intercambio gaseoso',
        indicators: ['Saturación de oxígeno ≥ 94%', 'PaO2 y PaCO2 en límites gasométricos'],
        targetScore: 'Mantener en 3 y Aumentar a 5'
      }
    ],
    nic: [
      {
        code: '3350',
        label: 'Monitorización respiratoria',
        activities: [
          'Vigilar frecuencia, ritmo, profundidad y esfuerzo de las respiraciones.',
          'Evaluar la saturación de oxígeno continua por pulsioximetría.',
          'Auscultar sonidos respiratorios para detectar sibilancias, crepitantes o estridor.',
          'Colocar al paciente en posición semi-Fowler o Fowler para maximizar la expansión torácica.'
        ]
      },
      {
        code: '3320',
        label: 'Oxigenoterapia',
        activities: [
          'Administrar oxígeno suplementario según prescripción médica (cánula binasal, máscara Venturi).',
          'Vigilar la posición del dispositivo de oxígeno y evitar fugas o lesiones por presión.'
        ]
      }
    ]
  },
  {
    code: '00031',
    label: 'Limpieza ineficaz de las vías aéreas',
    domain: 'Dominio 11: Seguridad / Protección',
    classType: 'Clase 2: Lesión física',
    definition: 'Incapacidad para eliminar las secreciones u obstrucciones del tracto respiratorio para mantener las vías aéreas permeables.',
    symptoms: ['Tos ineficaz o ausente', 'Sonidos respiratorios adventicios (roncus, estertores)', 'Secreciones abundantes o espesas', 'Disnea'],
    noc: [
      {
        code: '0410',
        label: 'Estado respiratorio: Permeabilidad de las vías respiratorias',
        indicators: ['Capacidad para eliminar secreciones', 'Ausencia de ruidos adventicios', 'Frecuencia respiratoria normal'],
        targetScore: 'Mantener en 2 y Aumentar a 5'
      }
    ],
    nic: [
      {
        code: '3160',
        label: 'Aspiración de las vías aéreas',
        activities: [
          'Hiperoxigenar con O2 al 100% antes y después de aspirar.',
          'Utilizar técnica estéril y catéter de calibre adecuado (no ocluir > 50% de la luz del tubo).',
          'Limitar la duración de cada aspiración a un máximo de 10-15 segundos.',
          'Monitorear la frecuencia cardíaca y SpO2 durante todo el procedimiento.'
        ]
      },
      {
        code: '3230',
        label: 'Fisioterapia respiratoria',
        activities: [
          'Fomentar la tos asistida y respiraciones profundas diafragmáticas.',
          'Asegurar hidratación adecuada para fluidificar secreciones bronquiales.'
        ]
      }
    ]
  },
  {
    code: '00132',
    label: 'Dolor agudo',
    domain: 'Dominio 12: Confort',
    classType: 'Clase 1: Confort físico',
    definition: 'Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, de inicio súbito o lento y duración < 3 meses.',
    symptoms: ['Información verbal del dolor (EVA > 4)', 'Conducta de protección o defensa', 'Facies de dolor', 'Taquicardia, diaforesis, hipertensión reactiva'],
    noc: [
      {
        code: '1605',
        label: 'Control del dolor',
        indicators: ['Reconoce el comienzo del dolor', 'Utiliza medidas de alivio no farmacológicas', 'Refiere dolor controlado (EVA ≤ 3/10)'],
        targetScore: 'Mantener en 2 y Aumentar a 5'
      },
      {
        code: '2102',
        label: 'Nivel del dolor',
        indicators: ['Dolor referido', 'Expresiones faciales de dolor', 'Tensión muscular'],
        targetScore: 'Mantener en 2 y Aumentar a 4'
      }
    ],
    nic: [
      {
        code: '2210',
        label: 'Administración de analgésicos',
        activities: [
          'Verificar la prescripción médica, dosis, vía y horario (10 correctos).',
          'Evaluar la eficacia del analgésico a los 30 minutos de la administración EV u oral.',
          'Registrar el nivel de dolor previo y posterior en la escala EVA.'
        ]
      },
      {
        code: '1400',
        label: 'Manejo del dolor',
        activities: [
          'Proporcionar un ambiente tranquilo, luz tenue y posición antiálgica.',
          'Aplicar técnicas de relajación, distracción o compresas según indicación.'
        ]
      }
    ]
  },
  {
    code: '00027',
    label: 'Déficit de volumen de líquidos',
    domain: 'Dominio 2: Nutrición',
    classType: 'Clase 5: Hidratación',
    definition: 'Disminución del líquido intravascular, intersticial o intracelular. Se refiere a deshidratación o pérdida hídrica.',
    symptoms: ['Hipotensión arterial', 'Taquicardia compensatoria', 'Oliguria (<0.5 mL/kg/h)', 'Mucosas secas', 'Signo del pliegue cutáneo positivo', 'Sed intensa'],
    noc: [
      {
        code: '0601',
        label: 'Equilibrio hídrico',
        indicators: ['Presión arterial en límites normales', 'Diuresis horaria adecuada (≥ 0.5 mL/kg/h)', 'Turgencia cutánea elástica', 'Mucosas orales húmedas'],
        targetScore: 'Mantener en 2 y Aumentar a 4'
      }
    ],
    nic: [
      {
        code: '4120',
        label: 'Manejo de líquidos',
        activities: [
          'Canalizar vía venosa periférica de grueso calibre (18G o 16G) e iniciar fluidoterapia rápida.',
          'Realizar balance hídrico estricto por turno anotando ingresos y egresos con diuresis horaria.',
          'Vigilar signos de sobrecarga hídrica (ingurgitación yugular, estertores pulmonares).'
        ]
      }
    ]
  },
  {
    code: '00205',
    label: 'Riesgo de shock',
    domain: 'Dominio 11: Seguridad / Protección',
    classType: 'Clase 2: Lesión física',
    definition: 'Vulnerable a un aporte sanguíneo inadecuado a los tejidos que puede conducir a una disfunción celular potencialmente mortal.',
    symptoms: ['Hipotensión refractaria', 'Lactato sérico elevado (> 2 mmol/L)', 'Llenado capilar lento (> 2 seg)', 'Oliguria', 'Piel fría o moteada'],
    noc: [
      {
        code: '0400',
        label: 'Efectividad de la bomba cardíaca',
        indicators: ['Presión arterial media (PAM) ≥ 65 mmHg', 'Frecuencia cardíaca en rango normal', 'Gasto urinario adecuado'],
        targetScore: 'Mantener en 2 y Aumentar a 4'
      }
    ],
    nic: [
      {
        code: '4260',
        label: 'Manejo del shock',
        activities: [
          'Optimizar volemia con cristaloides a 30 mL/kg en las primeras 3 horas en shock séptico.',
          'Iniciar noradrenalina precozmente para mantener PAM ≥ 65 mmHg si no responde a fluidos.',
          'Tomar hemocultivos x 2 sets antes de iniciar antibióticos de amplio espectro en la 1ra hora.'
        ]
      }
    ]
  },
  {
    code: '00047',
    label: 'Riesgo de deterioro de la integridad cutánea',
    domain: 'Dominio 11: Seguridad / Protección',
    classType: 'Clase 2: Lesión física',
    definition: 'Vulnerable a una alteración en la epidermis y/o dermis que puede comprometer la salud (UPP, maceración, cizallamiento).',
    symptoms: ['Inmovilidad en cama', 'Braden ≤ 14', 'Incontinencia urinaria o fecal', 'Edema periférico'],
    noc: [
      {
        code: '1101',
        label: 'Integridad tisular: piel y membranas mucosas',
        indicators: ['Piel intacta sobre prominencias óseas', 'Ausencia de eritema no blanqueable', 'Hidratación cutánea adecuada'],
        targetScore: 'Mantener en 3 y Aumentar a 5'
      }
    ],
    nic: [
      {
        code: '3540',
        label: 'Prevención de úlceras por presión',
        activities: [
          'Realizar cambios posturales reglados cada 2 horas en decúbito lateral y supino.',
          'Aplicar ácidos grasos hiperoxigenados (AGHO) en sacro, talones y trocánteres sin frotar.',
          'Colocar colchón de aire con presión alternante.',
          'Mantener sábanas secas, limpias y libres de arrugas.'
        ]
      }
    ]
  }
];

const PLACE_TEMPLATES: PlaceTemplate[] = [
  {
    id: 'cad',
    title: 'Cetoacidosis Diabética (CAD)',
    category: 'Endocrino / Urgencias',
    patientProfile: 'Paciente con hiperglucemia >300 mg/dL, cetonuria/cetonemia, respiración de Kussmaul y deshidratación moderada a severa.',
    nandaCode: '00027',
    nandaLabel: 'Déficit de volumen de líquidos r/c diuresis osmótica secundaria a hiperglucemia m/p mucosas secas, taquicardia e hipotensión',
    relatedFactors: 'Diuresis osmótica glucosúrica, vómitos, acidosis metabólica.',
    definingCharacteristics: 'Deshidratación severa, hipotensión arterial, taquicardia, letargia.',
    nocLabel: 'Equilibrio hídrico y Severidad de la hiperglucemia (NOC 0601 & 2111)',
    nocIndicators: ['Glicemia capilar en descenso progresivo (50-75 mg/dL/h)', 'Diuresis horaria ≥ 0.5 mL/kg/h', 'Electrolitos séricos (K+, Na+) en rango seguro'],
    nicLabel: 'Manejo de la cetoacidosis diabética & Manejo de líquidos (NIC 2120 & 4120)',
    nicActivities: [
      'Infundir Cloruro de Sodio 0.9% 1000 mL en la primera hora, seguido según balance hemodinámico.',
      'Iniciar bomba de infusión de Insulina Regular a 0.1 UI/kg/h cuando K+ > 3.3 mEq/L.',
      'Control horario de HGT (glucemia capilar) y control gasométrico/electrolitos cada 2 a 4 horas.',
      'Cambiar solución a Dextrosa 5% al llegar la glucemia a 200-250 mg/dL para evitar hipoglucemia.'
    ],
    evaluation: 'Paciente logra corrección gradual de la deshidratación y acidosis metabólica sin complicaciones de hipopotasemia ni edema cerebral.'
  },
  {
    id: 'preeclampsia',
    title: 'Preeclampsia Severa con Criterios de Severidad',
    category: 'Gineco-Obstetricia',
    patientProfile: 'Gestante >20 semanas o puerperio con PA ≥ 160/110 mmHg, cefalea intensa, escotomas, hiperreflexia o proteinuria.',
    nandaCode: '00029',
    nandaLabel: 'Disminución del gasto cardíaco / Riesgo de perfusión tisular fetal ineficaz r/c vasoespasmo arteriolar generalizado',
    relatedFactors: 'Disfunción endotelial, vasoespasmo materno placentario.',
    definingCharacteristics: 'Cifras tensionales ≥ 160/110 mmHg, reflejos osteotendinosos exaltados, cefalea pulsátil.',
    nocLabel: 'Control de la hipertensión & Estado materno: Preeclampsia (NOC 2510)',
    nocIndicators: ['Presión arterial sistólica 130-150 mmHg y diastólica 80-100 mmHg', 'Reflejos patelares normales (+2/4)', 'Ausencia de convulsiones (eclampsia)'],
    nicLabel: 'Manejo de la preeclampsia & Administración de Sulfato de Magnesio (NIC 6830)',
    nicActivities: [
      'Iniciar esquema Zuspan con Sulfato de Magnesio: Impregnación 4g EV en 20 min, seguido de infusión a 1-2 g/h.',
      'Vigilancia estricta de toxicidad por magnesio: Reflejo rotuliano presente, FR ≥ 16 rpm, diuresis ≥ 30 mL/h.',
      'Tener a la mano el antídoto: Gluconato de Calcio al 10% (1 ampolla de 1g EV en 10 min).',
      'Monitoreo hemodinámico estricto cada 15 min durante la crisis y reposo en decúbito lateral izquierdo.'
    ],
    evaluation: 'Se estabilizan cifras tensionales con hipotensores (Nifedipino / Labetalol) y se previene eclampsia sin toxicidad por magnesio.'
  },
  {
    id: 'shock_septico',
    title: 'Shock Séptico (Campaña Sobrevivir a la Sepsis)',
    category: 'Cuidados Críticos / UCI',
    patientProfile: 'Paciente con sospecha de infección, hipotensión persistente que requiere vasopresores para PAM ≥65 mmHg y lactato >2 mmol/L.',
    nandaCode: '00205',
    nandaLabel: 'Riesgo de shock / Disminución del gasto cardíaco r/c vasodilatación masiva y fuga capilar secundaria a respuesta inflamatoria sistémica',
    relatedFactors: 'Foco infeccioso activo, liberación de citoquinas proinflamatorias, vasodilatación.',
    definingCharacteristics: 'PAM < 65 mmHg pese a fluidos, taquicardia, oliguria, llenado capilar > 3 segundos.',
    nocLabel: 'Perfusión tisular: Celular y Efectividad de la bomba cardíaca (NOC 0416 & 0400)',
    nocIndicators: ['PAM mantenida ≥ 65 mmHg con noradrenalina', 'Lactato sérico en aclaramiento (>20% en 2-4 horas)', 'Diuresis horaria ≥ 0.5 mL/kg/h'],
    nicLabel: 'Manejo del shock séptico & Terapia de reanimación precoz (NIC 4260)',
    nicActivities: [
      'Cumplir el Paquete de la 1ra Hora (Hour-1 Bundle): medir lactato sérico, obtener hemocultivos x 2 antes de ATB.',
      'Iniciar antibiótico de amplio espectro en los primeros 60 minutos.',
      'Administrar carga de cristaloides balanceados a 30 mL/kg en las primeras 3 horas.',
      'Iniciar Noradrenalina por vía central para mantener PAM ≥ 65 mmHg si persiste hipotensión.'
    ],
    evaluation: 'Estabilización de PAM y reversión de hipoperfusión tisular con monitoreo hemodinámico invasivo en UCI.'
  },
  {
    id: 'postop',
    title: 'Postoperatorio Mediato (Cirugía Abdominal Mayor)',
    category: 'Quirúrgica / Hospitalización',
    patientProfile: 'Paciente intervenido de laparotomía exploradora, con herida quirúrgica, drenajes activos y restricción de movilidad.',
    nandaCode: '00132',
    nandaLabel: 'Dolor agudo r/c agresión quirúrgica tisular y manipulación visceral m/p EVA 7/10 y contractura muscular',
    relatedFactors: 'Incisión quirúrgica, drenajes, procedimiento anestésico en resolución.',
    definingCharacteristics: 'Refiere dolor moderado a severo, taquicardia, respiración superficial por dolor.',
    nocLabel: 'Nivel del dolor y Recuperación quirúrgica: Convalecencia (NOC 2102 & 2300)',
    nocIndicators: ['Dolor controlado EVA ≤ 3/10', 'Deambulación precoz asistida a las 24 horas', 'Herida quirúrgica sin signos de dehiscencia o infección'],
    nicLabel: 'Manejo del dolor & Cuidados de la herida quirúrgica (NIC 1400 & 3660)',
    nicActivities: [
      'Administrar analgesia multimodal pautada (no condicional) según prescripción médica.',
      'Evaluar apósitos de la herida operatoria y cuantificar el débito y características de los drenajes.',
      'Estimular ejercicios de respiración profunda y espirometría incentivada para prevenir atelectasias.',
      'Fomentar sedestación y movilización precoz para estimular peristaltismo (prevención de íleo).'
    ],
    evaluation: 'Evolución postoperatoria favorable, analgesia efectiva, inicio de tolerancia oral y drenajes con gasto en descenso.'
  }
];

export const NandaPlaceTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'buscador' | 'place'>('buscador');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNanda, setSelectedNanda] = useState<NandaItem>(NANDA_DATABASE[0]);

  // PLACE Editor State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('cad');
  const [placePatientName, setPlacePatientName] = useState<string>('Paciente Adulto / Cama 304');
  const [placeService, setPlaceService] = useState<string>('Medicina Interna / UCI');
  const [placeNanda, setPlaceNanda] = useState<string>(PLACE_TEMPLATES[0].nandaLabel);
  const [placeNoc, setPlaceNoc] = useState<string>(PLACE_TEMPLATES[0].nocLabel);
  const [placeNic, setPlaceNic] = useState<string>(PLACE_TEMPLATES[0].nicActivities.join('\n• '));
  const [placeEvaluation, setPlaceEvaluation] = useState<string>(PLACE_TEMPLATES[0].evaluation);
  const [copiedPlace, setCopiedPlace] = useState<boolean>(false);

  // Filtered Nanda items
  const filteredNanda = useMemo(() => {
    if (!searchQuery.trim()) return NANDA_DATABASE;
    const q = searchQuery.toLowerCase().trim();
    return NANDA_DATABASE.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.code.includes(q) ||
        item.domain.toLowerCase().includes(q) ||
        item.symptoms.some((s) => s.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleSelectTemplate = (tplId: string) => {
    setSelectedTemplateId(tplId);
    const tpl = PLACE_TEMPLATES.find((x) => x.id === tplId);
    if (tpl) {
      setPlaceNanda(tpl.nandaLabel);
      setPlaceNoc(tpl.nocLabel);
      setPlaceNic(tpl.nicActivities.join('\n• '));
      setPlaceEvaluation(tpl.evaluation);
    }
  };

  const handleCopyPlace = () => {
    let text = `PLAN DE CUIDADOS DE ENFERMERÍA (PLACE)\n`;
    text += `Paciente: ${placePatientName} | Servicio: ${placeService}\n\n`;
    text += `1. DIAGNÓSTICO ENFERMERO (NANDA-I):\n${placeNanda}\n\n`;
    text += `2. CRITERIOS DE RESULTADO (NOC):\n${placeNoc}\n\n`;
    text += `3. INTERVENCIONES Y ACTIVIDADES (NIC):\n• ${placeNic}\n\n`;
    text += `4. EVALUACIÓN DEL RESULTADO:\n${placeEvaluation}\n`;

    navigator.clipboard.writeText(text);
    setCopiedPlace(true);
    setTimeout(() => setCopiedPlace(false), 2000);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30">
              Taxonomía Internacional
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              NANDA-I • NOC • NIC
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-400" />
            Estandarización NANDA - NIC - NOC & Generador de PLACE
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Buscador rápido de diagnósticos con cruce de intervenciones y plantillas oficiales de Planes de Cuidados de Enfermería.
          </p>
        </div>

        {/* Subtabs */}
        <div className="flex bg-[#092233] p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveSubTab('buscador')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'buscador' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            Buscador NANDA/NIC/NOC
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('place')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'place' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Generador de PLACE
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. BUSCADOR RÁPIDO NANDA / NIC / NOC */}
      {/* ========================================================= */}
      {activeSubTab === 'buscador' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Search & Drug list */}
          <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por etiqueta, síntoma (ej. disnea, dolor, shock)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredNanda.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setSelectedNanda(item)}
                  className={`w-full p-3 rounded-xl border text-left transition cursor-pointer flex flex-col gap-1 ${
                    selectedNanda.code === item.code
                      ? 'bg-teal-950/70 border-teal-500 shadow-md ring-1 ring-teal-400/40'
                      : 'bg-slate-950/80 border-slate-800 hover:bg-slate-900 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-teal-400 font-bold">[{item.code}]</span>
                    <span className="text-slate-500 text-[10px] truncate max-w-[150px]">
                      {item.domain.split(':')[1] || item.domain}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{item.label}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{item.definition}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Cruce NIC / NOC */}
          <div className="lg:col-span-7 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-5">
            <div className="border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs text-teal-400 font-mono mb-1">
                <span>CÓDIGO NANDA-I {selectedNanda.code}</span>
                <span>•</span>
                <span>{selectedNanda.domain}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{selectedNanda.label}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{selectedNanda.definition}</p>
            </div>

            {/* Symptoms */}
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">
                Características Definitorias / Signos & Síntomas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedNanda.symptoms.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 text-xs"
                  >
                    • {s}
                  </span>
                ))}
              </div>
            </div>

            {/* NOC Results */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                Resultados Sugeridos (NOC - Criterios de Evaluación):
              </span>
              <div className="space-y-2">
                {selectedNanda.noc.map((noc) => (
                  <div key={noc.code} className="p-3 bg-slate-950 rounded-xl border border-cyan-900/40 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <strong className="text-white font-semibold">
                        [{noc.code}] {noc.label}
                      </strong>
                      <span className="text-[11px] text-cyan-300 font-mono">Diana / Escala Likert</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-0.5 list-disc list-inside">
                      {noc.indicators.map((ind, i) => (
                        <li key={i}>{ind}</li>
                      ))}
                    </ul>
                    <div className="text-[11px] text-cyan-400/90 font-medium pt-1">
                      Puntaje diana: {noc.targetScore}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NIC Interventions */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wide flex items-center gap-1.5">
                <ClipboardList className="w-4 h-4" />
                Intervenciones y Actividades (NIC):
              </span>
              <div className="space-y-2">
                {selectedNanda.nic.map((nic) => (
                  <div key={nic.code} className="p-3 bg-slate-950 rounded-xl border border-teal-900/40 space-y-1.5">
                    <div className="text-xs font-bold text-teal-300">
                      [{nic.code}] {nic.label}
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {nic.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. GENERADOR DE PLANES DE CUIDADOS (PLACE) */}
      {/* ========================================================= */}
      {activeSubTab === 'place' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Template Selection */}
          <div className="lg:col-span-4 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wide block">
              Plantillas Clínicas por Patología Frecuente:
            </span>

            <div className="space-y-2">
              {PLACE_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => handleSelectTemplate(tpl.id)}
                  className={`w-full p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedTemplateId === tpl.id
                      ? 'bg-amber-950/60 border-amber-500 shadow-md ring-1 ring-amber-400/40'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="text-[10px] text-amber-400 uppercase font-semibold block">
                    {tpl.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">{tpl.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{tpl.patientProfile}</p>
                </button>
              ))}
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-teal-400 font-bold block text-[11px]">Estructura del PLACE:</span>
              <p className="text-[11px] text-slate-400">
                El PLACE sigue la metodología científica del Proceso de Atención de Enfermería (PAE): Diagnóstico, Planificación (NOC), Ejecución (NIC) y Evaluación.
              </p>
            </div>
          </div>

          {/* Interactive Editable PLACE Sheet */}
          <div className="lg:col-span-8 bg-[#092233]/90 p-5 sm:p-6 rounded-2xl border border-[#12425a] shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                  Formato Oficial de Plan de Cuidados (PLACE)
                </h3>
                <span className="text-xs text-slate-400">Editable e imprimible para la historia clínica</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyPlace}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
                >
                  {copiedPlace ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPlace ? 'Copiado' : 'Copiar PLACE'}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Imprimir
                </button>
              </div>
            </div>

            {/* Patient Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
              <div>
                <label className="text-slate-400 block text-[11px] mb-1 font-semibold">Paciente / Cama:</label>
                <input
                  type="text"
                  value={placePatientName}
                  onChange={(e) => setPlacePatientName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400 font-semibold"
                />
              </div>
              <div>
                <label className="text-slate-400 block text-[11px] mb-1 font-semibold">Servicio / Especialidad:</label>
                <input
                  type="text"
                  value={placeService}
                  onChange={(e) => setPlaceService(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400 font-semibold"
                />
              </div>
            </div>

            {/* Form Table */}
            <div className="space-y-4 text-xs">
              {/* NANDA */}
              <div className="space-y-1.5">
                <label className="font-bold text-teal-300 uppercase tracking-wide block">
                  1. Diagnóstico de Enfermería (NANDA-I):
                </label>
                <textarea
                  rows={2}
                  value={placeNanda}
                  onChange={(e) => setPlaceNanda(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-teal-400 font-mono text-xs leading-relaxed"
                />
              </div>

              {/* NOC */}
              <div className="space-y-1.5">
                <label className="font-bold text-cyan-300 uppercase tracking-wide block">
                  2. Criterios de Resultado (NOC) y Puntaje Diana:
                </label>
                <textarea
                  rows={2}
                  value={placeNoc}
                  onChange={(e) => setPlaceNoc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-cyan-400 font-mono text-xs leading-relaxed"
                />
              </div>

              {/* NIC */}
              <div className="space-y-1.5">
                <label className="font-bold text-amber-300 uppercase tracking-wide block">
                  3. Intervenciones y Actividades de Enfermería (NIC):
                </label>
                <textarea
                  rows={5}
                  value={placeNic}
                  onChange={(e) => setPlaceNic(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400 font-mono text-xs leading-relaxed"
                />
              </div>

              {/* Evaluation */}
              <div className="space-y-1.5">
                <label className="font-bold text-emerald-300 uppercase tracking-wide block">
                  4. Evaluación del Resultado Obtenido:
                </label>
                <textarea
                  rows={2}
                  value={placeEvaluation}
                  onChange={(e) => setPlaceEvaluation(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-emerald-400 font-mono text-xs leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
