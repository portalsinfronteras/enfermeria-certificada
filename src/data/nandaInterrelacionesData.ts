/**
 * BASE DE DATOS OFICIAL DE INTERRELACIONES NANDA - NOC - NIC (2024 - 2026)
 * Cuaderno de Interrelaciones NANDA-NOC-NIC (L.E. Alex Santiago / yoamoenfermeriablog.com)
 * Taxonomía NANDA-I 2024-2026 • NOC 6ta/7ma Edición • NIC 7ma/8va Edición
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
  // 1. DOLOR AGUDO
  {
    id: 'nanda_00132',
    code: '00132',
    label: 'Dolor agudo',
    domain: 'Dominio 12: Confort',
    domainNumber: 12,
    classType: 'Clase 1: Confort físico',
    classNumber: 1,
    type: 'Focalizado en el problema',
    definition: 'Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, o descrita en tales términos; inicio súbito o lento de cualquier intensidad de leve a grave, con un final anticipado o previsible y una duración menor de 3 meses.',
    relatedFactors: [
      'Agentes lesivos biológicos (infección, inflamación, isquemia)',
      'Agentes lesivos químicos (quemaduras, agentes citotóxicos)',
      'Agentes lesivos físicos (trauma, procedimientos quirúrgicos, compresión nerviosa, dispositivos médicos)'
    ],
    definingCharacteristics: [
      'Información verbal del dolor mediante escala visual analógica (EVA > 3/10)',
      'Conducta de protección o defensa de la zona dolorosa',
      'Facies de dolor (muecas, ceño fruncido, ojos cerrados con tensión)',
      'Alteración de parámetros fisiológicos (taquicardia, hipertensión reactiva, taquipnea, diaforesis)',
      'Posición antiálgica para evitar o mitigar el dolor',
      'Irritabilidad, inquietud motora o llanto'
    ],
    riskPopulations: ['Pacientes postoperados', 'Pacientes con traumatismos', 'Personas en extremos de la vida (neonatos y ancianos)'],
    associatedConditions: ['Procedimientos quirúrgicos invasivos', 'Fracturas óseas', 'Isquemia tisular aguda', 'Neoplasias malignas'],
    nocList: [
      {
        code: '1605',
        label: 'Control del dolor',
        definition: 'Acciones personales para controlar y mitigar el dolor.',
        page: 692,
        targetScore: 'Mantener en 2 (Raramente demostrado) y Aumentar a 5 (Siempre demostrado)',
        scaleDescription: 'Escala de 1 a 5: 1 (Nunca) - 2 (Raramente) - 3 (A veces) - 4 (Frecuentemente) - 5 (Siempre)',
        indicators: [
          '160501 Reconoce el comienzo del dolor',
          '160502 Describe factores causales del dolor',
          '160504 Utiliza medidas de alivio no farmacológicas',
          '160505 Utiliza analgésicos de forma prescrita',
          '160511 Refiere dolor controlado (EVA ≤ 3/10)'
        ]
      },
      {
        code: '2102',
        label: 'Nivel del dolor',
        definition: 'Intensidad del dolor manifestado u observado en el paciente.',
        page: 693,
        targetScore: 'Mantener en 2 (Sustancial) y Aumentar a 5 (Ninguno)',
        scaleDescription: 'Escala de 1 a 5: 1 (Grave) - 2 (Sustancial) - 3 (Moderado) - 4 (Leve) - 5 (Ninguno)',
        indicators: [
          '210201 Dolor referido',
          '210204 Duración de los episodios de dolor',
          '210206 Expresiones faciales de dolor',
          '210208 Inquietud motora',
          '210212 Tensión muscular'
        ]
      }
    ],
    nicList: [
      {
        code: '2210',
        label: 'Administración de analgésicos',
        definition: 'Utilización de agentes farmacológicos para disminuir o eliminar el dolor.',
        priority: 'Prioritaria',
        activities: [
          'Comprobar las órdenes médicas en cuanto al medicamento, dosis, vía y frecuencia.',
          'Comprobar el historial de alergias a medicamentos antes de la administración.',
          'Elegir el analgésico prescrito adecuado según la escala analgésica de la OMS.',
          'Monitorear signos vitales antes y después de la administración de opioides o analgésicos potentes.',
          'Evaluar la eficacia del analgésico a intervalos regulares (30 min EV, 60 min VO) y documentar en escala EVA.'
        ]
      },
      {
        code: '1400',
        label: 'Manejo del dolor agudo',
        definition: 'Alivio del dolor o disminución del dolor a un nivel de tolerancia aceptable para el paciente.',
        priority: 'Prioritaria',
        activities: [
          'Realizar una valoración exhaustiva del dolor que incluya localización, características, aparición, duración, frecuencia e intensidad (escala EVA/PQRST).',
          'Asegurarse de que el paciente reciba atención analgésica inmediata antes de que el dolor se agrave.',
          'Proporcionar información sobre el dolor, sus causas y el tiempo que se espera que dure.',
          'Fomentar periodos de descanso y sueño adecuados que faciliten el alivio del dolor.',
          'Aplicar métodos no farmacológicos de alivio (posición antiálgica, compresas frías/calientes según indicación, técnicas de respiración diafragmática).'
        ]
      }
    ]
  },

  // 2. PATRÓN RESPIRATORIO INEFICAZ
  {
    id: 'nanda_00032',
    code: '00032',
    label: 'Patrón respiratorio ineficaz',
    domain: 'Dominio 4: Actividad / Reposo',
    domainNumber: 4,
    classType: 'Clase 4: Respuestas cardiovasculares / pulmonares',
    classNumber: 4,
    type: 'Focalizado en el problema',
    definition: 'Inspiración y/o espiración que no proporciona una ventilación pulmonar adecuada.',
    relatedFactors: [
      'Ansiedad o dolor torácico agudo',
      'Deformidad de la pared torácica',
      'Fatiga de los músculos respiratorios',
      'Hiperventilación o hipoventilación',
      'Obesidad mórbida',
      'Disfunción neuromuscular o deterioro neurológico'
    ],
    definingCharacteristics: [
      'Patrón respiratorio anormal (taquipnea > 20 rpm, bradipnea < 10 rpm, respiración de Cheyne-Stokes o Kussmaul)',
      'Uso de músculos accesorios para la respiración (esternocleidomastoideo, intercostales)',
      'Aleteo nasal y tirajes subcostales o intercostales',
      'Alteración de los movimientos torácicos (asimetría torácica)',
      'Disnea de esfuerzo o en reposo',
      'Ortopnea'
    ],
    riskPopulations: ['Recién nacidos prematuros', 'Adultos mayores frágiles', 'Pacientes con antecedentes de asma o EPOC'],
    associatedConditions: ['Lesión de la médula espinal', 'Accidente cerebrovascular', 'Traumatismo torácico', 'Sobredosis de depresores del SNC'],
    nocList: [
      {
        code: '0415',
        label: 'Estado respiratorio',
        definition: 'Movimiento del aire hacia dentro y fuera de los pulmones e intercambio de gases adecuado.',
        page: 185,
        targetScore: 'Mantener en 2 (Sustancialmente comprometido) y Aumentar a 4 (Levemente comprometido)',
        scaleDescription: 'Escala Likert de 1 a 5: 1 (Gravemente) a 5 (No comprometido)',
        indicators: [
          '041501 Frecuencia respiratoria en rango esperado',
          '041502 Ritmo respiratorio regular',
          '041503 Profundidad de la inspiración',
          '041508 Ausencia de uso de músculos accesorios',
          '041514 Ausencia de disnea en reposo'
        ]
      },
      {
        code: '0402',
        label: 'Estado respiratorio: Intercambio gaseoso',
        definition: 'Intercambio alveolar y tisular de dióxido de carbono y oxígeno.',
        page: 186,
        targetScore: 'Mantener en 2 y Aumentar a 5',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '040203 Saturación de oxígeno (SpO2 ≥ 95%)',
          '040204 PaO2 en gasometría arterial',
          '040205 PaCO2 en límites fisiológicos',
          '040211 Equilibrio entre ventilación y perfusión'
        ]
      }
    ],
    nicList: [
      {
        code: '3350',
        label: 'Monitorización respiratoria',
        definition: 'Recopilación y análisis de datos de un paciente para asegurar la permeabilidad de las vías aéreas y el intercambio de gases.',
        priority: 'Prioritaria',
        activities: [
          'Vigilar la frecuencia, ritmo, profundidad y esfuerzo de las respiraciones.',
          'Evaluar el movimiento torácico, simetría y utilización de músculos accesorios.',
          'Monitorear la saturación de oxígeno por pulsioximetría de forma continua.',
          'Auscultar los sonidos respiratorios, anotando las áreas de disminución o ausencia de ventilación y presencia de adventicios.',
          'Instaurar tratamientos de terapia respiratoria (nebulizaciones, inhaladores) según indicación.'
        ]
      },
      {
        code: '3320',
        label: 'Oxigenoterapia',
        definition: 'Administración de oxígeno y control de su eficacia.',
        priority: 'Prioritaria',
        activities: [
          'Eliminar las secreciones bucales, nasales y traqueales antes de aplicar oxígeno.',
          'Mantener la permeabilidad de la vía aérea.',
          'Administrar oxígeno suplementario según prescripción (cánula binasal, mascarilla de reservorio, sistema Venturi).',
          'Comprobar periódicamente el dispositivo de aporte de oxígeno para asegurar la FiO2 prescrita.',
          'Vigilar la aparición de toxicidad por oxígeno o hipoventilación inducida por hiperoxia.'
        ]
      }
    ]
  },

  // 3. LIMPIEZA INEFICAZ DE LAS VÍAS AÉREAS
  {
    id: 'nanda_00031',
    code: '00031',
    label: 'Limpieza ineficaz de las vías aéreas',
    domain: 'Dominio 11: Seguridad / Protección',
    domainNumber: 11,
    classType: 'Clase 2: Lesión física',
    classNumber: 2,
    type: 'Focalizado en el problema',
    definition: 'Incapacidad para eliminar las secreciones u obstrucciones del tracto respiratorio para mantener las vías aéreas permeables.',
    relatedFactors: [
      'Mucosidad excesiva y secreciones espesas',
      'Vía aérea artificial (tubo endotraqueal, cánula de traqueostomía)',
      'Retención de secreciones por tos ineficaz o fatiga muscular',
      'Tabaquismo o exposición a humo e irritantes inhalados',
      'Reflejo de tos deprimido por anestesia o sedación'
    ],
    definingCharacteristics: [
      'Sonidos respiratorios adventicios (roncus, estertores crepitantes, estridor)',
      'Tos ineficaz o ausencia de tos espontánea',
      'Excesiva cantidad de esputo purulento o hemoptoico',
      'Disnea y taquipnea reactiva',
      'Cianosis peribucal o ungueal',
      'Dificultad para vocalizar o estridor laríngeo'
    ],
    riskPopulations: ['Pacientes intubados o con traqueostomía', 'Pacientes con enfermedades neuromusculares', 'Postoperados toracoabdominales'],
    associatedConditions: ['Neumonía', 'EPOC / Bronquiectasias', 'Fibrosis quística', 'Accidente cerebrovascular con disfagia'],
    nocList: [
      {
        code: '0410',
        label: 'Estado respiratorio: Permeabilidad de las vías respiratorias',
        definition: 'Vías traqueobronquiales abiertas, limpias y libres para el intercambio de aire.',
        page: 187,
        targetScore: 'Mantener en 2 y Aumentar a 4',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '041001 Capacidad para eliminar secreciones',
          '041002 Ansiedad ausente o disminuida',
          '041004 Frecuencia respiratoria en rango esperado',
          '041007 Ruidos respiratorios patológicos ausentes',
          '041012 Movilización eficaz de secreciones'
        ]
      }
    ],
    nicList: [
      {
        code: '3160',
        label: 'Aspiración de las vías aéreas',
        definition: 'Extracción de secreciones de las vías aéreas mediante la introducción de una sonda en la vía aérea oral, nasal o traqueal.',
        priority: 'Prioritaria',
        activities: [
          'Hiperoxigenar con oxígeno al 100% durante al menos 30 segundos antes y después de aspirar.',
          'Utilizar técnica y guantes estériles para evitar infecciones nosocomiales.',
          'Seleccionar el catéter de calibre adecuado (no ocluir más del 50% de la luz del tubo).',
          'Limitar la duración de cada maniobra de aspiración a un máximo de 10 a 15 segundos.',
          'Auscultar los campos pulmonares antes y después del procedimiento para verificar efectividad.'
        ]
      },
      {
        code: '3230',
        label: 'Fisioterapia respiratoria',
        definition: 'Conjunto de técnicas destinadas a favorecer la movilización y expulsión de secreciones bronquiales.',
        priority: 'Sugerida',
        activities: [
          'Estimular la tos voluntaria y maniobras de espiración forzada.',
          'Colocar al paciente en posición de drenaje postural según lóbulo afectado.',
          'Asegurar un aporte hídrico adecuado para fluidificar las secreciones si no hay contraindicación médica.',
          'Coordinar aerosolterapia con broncodilatadores o mucolíticos previo a las maniobras.'
        ]
      }
    ]
  },

  // 4. DÉFICIT DE VOLUMEN DE LÍQUIDOS
  {
    id: 'nanda_00027',
    code: '00027',
    label: 'Déficit de volumen de líquidos',
    domain: 'Dominio 2: Nutrición',
    domainNumber: 2,
    classType: 'Clase 5: Hidratación',
    classNumber: 5,
    type: 'Focalizado en el problema',
    definition: 'Disminución del líquido intravascular, intersticial o intracelular. Se refiere a la deshidratación o pérdida hídrica sin cambio en el sodio.',
    relatedFactors: [
      'Pérdida activa de líquidos (hemorragia, diarrea profusa, vómitos, fístulas de alto débito)',
      'Aporte insuficiente de líquidos por vía oral (inapetencia, ayuno prolongado, incapacidad física)',
      'Pérdidas insensibles aumentadas por diaforesis profusa o hipertermia mantenida',
      'Uso excesivo de diuréticos'
    ],
    definingCharacteristics: [
      'Hipotensión arterial o caída ortostática de la presión',
      'Taquicardia compensatoria con pulso débil o filiforme',
      'Oliguria (< 0.5 mL/kg/hora) con orina concentrada',
      'Sequedad de piel y mucosas orales',
      'Disminución de la turgencia cutánea (signo del pliegue positivo)',
      'Llenado capilar prolongado (> 2 segundos)',
      'Sed intensa y astenia marcada'
    ],
    riskPopulations: ['Lactantes y niños pequeños', 'Adultos mayores', 'Personas en climas cálidos extremos'],
    associatedConditions: ['Gastroenteritis aguda / Cólera', 'Shock hipovolémico', 'Cetoacidosis diabética', 'Hemorragia digestiva'],
    nocList: [
      {
        code: '0601',
        label: 'Equilibrio hídrico',
        definition: 'Equilibrio de agua en los compartimentos intracelular y extracelular del organismo.',
        page: 135,
        targetScore: 'Mantener en 2 (Gravemente comprometido) y Aumentar a 4 (Levemente comprometido)',
        scaleDescription: 'Escala de 1 a 5: 1 (Gravemente) a 5 (No comprometido)',
        indicators: [
          '060101 Presión arterial media en rango meta',
          '060102 Presión venosa central dentro de parámetros',
          '060107 Entradas y salidas diarias equilibradas',
          '060109 Turgencia cutánea conservada',
          '060116 Diuresis horaria adecuada (≥ 0.5 mL/kg/h)'
        ]
      },
      {
        code: '0602',
        label: 'Hidratación',
        definition: 'Agua adecuada en los compartimentos celulares y vasculares del cuerpo.',
        page: 136,
        targetScore: 'Mantener en 2 y Aumentar a 5',
        scaleDescription: 'Escala de 1 a 5: 1 (Grave) a 5 (Ninguno)',
        indicators: [
          '060201 Turgencia de la piel',
          '060202 Membranas mucosas húmedas',
          '060211 Ojos hundidos ausentes',
          '060215 Ingesta de líquidos adecuada'
        ]
      }
    ],
    nicList: [
      {
        code: '4120',
        label: 'Manejo de líquidos',
        definition: 'Mantenimiento del equilibrio de líquidos y prevención de complicaciones derivadas de los niveles de líquidos anormales.',
        priority: 'Prioritaria',
        activities: [
          'Canalizar 2 accesos venosos periféricos de grueso calibre (18G o 16G) para fluidoterapia rápida.',
          'Administrar soluciones isotónicas de reanimación (ClNa 0.9% o Lactato Ringer) según protocolo prescrito.',
          'Llevar un registro estricto del balance hídrico por turno, computando ingresos y egresos exactos.',
          'Pesar al paciente diariamente en las mismas condiciones y a la misma hora.',
          'Monitorizar signos vitales cada 15 a 30 minutos en fase de reanimación activa.'
        ]
      },
      {
        code: '2080',
        label: 'Manejo de líquidos / electrólitos',
        definition: 'Regulación y prevención de las complicaciones derivadas de la alteración de los niveles de líquidos y electrólitos.',
        priority: 'Prioritaria',
        activities: [
          'Obtener muestras para control de gasometría y electrólitos séricos (Na, K, Cl, Ca).',
          'Vigilar signos de hipopotasemia (debilidad muscular, arritmias en ECG) o hipernatremia.',
          'Instalar sonda vesical para control de diuresis horaria si el paciente presenta oliguria o shock.'
        ]
      }
    ]
  },

  // 5. DETERIORO DE LA COMUNICACIÓN VERBAL (Actualizado NANDA 2024-2026)
  {
    id: 'nanda_00051',
    code: '00051',
    label: 'Deterioro de la comunicación verbal',
    domain: 'Dominio 5: Percepción / Cognición',
    domainNumber: 5,
    classType: 'Clase 5: Comunicación',
    classNumber: 5,
    type: 'Focalizado en el problema',
    definition: 'Capacidad disminuida, retrasada o ausente para recibir, procesar, transmitir y/o usar un sistema de símbolos en el lenguaje.',
    relatedFactors: [
      'Alteración del sistema nervioso central (isquemia cerebral, traumatismo encéfalo craneano)',
      'Barrera física (traqueostomía, intubación endotraqueal, tubo en T)',
      'Defecto anatómico (labio leporino, hendidura palatina, alteración laringea)',
      'Disfunción neuromuscular de los órganos de la fonación',
      'Diferencia de idioma o barrera sociocultural'
    ],
    definingCharacteristics: [
      'Incapacidad para hablar o modular palabras (afasia motora de Broca)',
      'Dificultad para encontrar o comprender las palabras (afasia sensitiva de Wernicke)',
      'Dificultad para vocalizar adecuadamente (disartria)',
      'Dificultad para expresar pensamientos verbalmente',
      'Desorientación en la emisión del mensaje',
      'Uso de gestos o señas como sustitución obligada del habla'
    ],
    riskPopulations: ['Pacientes con ictus isquémico o hemorrágico', 'Pacientes con ELA o Parkinson avanzado', 'Pacientes en ventilación mecánica'],
    associatedConditions: ['Accidente cerebrovascular', 'Traumatismo craneoencefálico', 'Demencia tipo Alzheimer', 'Cirugía de laringe / laringectomía'],
    nocList: [
      {
        code: '0902',
        label: 'Comunicación',
        definition: 'Recepción, interpretación y expresión de mensajes verbales, escritos y no verbales.',
        page: 29,
        targetScore: 'Mantener en 2 (Sustancialmente comprometido) y Aumentar a 4 (Levemente comprometido)',
        scaleDescription: 'Escala de 1 a 5: 1 (Gravemente) a 5 (No comprometido)',
        indicators: [
          '090201 Utilización del lenguaje hablado',
          '090202 Utilización del lenguaje escrito',
          '090203 Utilización de dibujos o pictogramas',
          '090205 Utilización del lenguaje de signos',
          '090208 Reconocimiento de los mensajes recibidos'
        ]
      },
      {
        code: '0903',
        label: 'Comunicación: Expresiva',
        definition: 'Expresión de mensajes verbales o no verbales con significado.',
        page: 30,
        targetScore: 'Mantener en 2 y Aumentar a 4',
        scaleDescription: 'Escala de 1 a 5: 1 (Grave) a 5 (Ninguno)',
        indicators: [
          '090301 Utilización del habla clara',
          '090302 Utilización de oraciones coherentes',
          '090308 Expresión de necesidades básicas con gestos o tableros'
        ]
      }
    ],
    nicList: [
      {
        code: '4976',
        label: 'Mejora de la comunicación: Déficit del habla',
        definition: 'Ayudar en la adquisición o recuperación de habilidades de comunicación a un individuo con trastorno del habla.',
        priority: 'Prioritaria',
        activities: [
          'Disponer de métodos alternativos de comunicación (tablero de comunicación, pictogramas, pizarra mágica, tablet digital).',
          'Permitir que el paciente tenga tiempo suficiente para responder; no completar sus frases ni interrumpirlo.',
          'Hablarle mirándolo a los ojos, en tono normal, despacio y con frases sencillas y directas.',
          'Colocar el timbre de llamada siempre al alcance de su mano más hábil.',
          'Instruir a los familiares sobre la forma correcta y paciente de interactuar con el paciente afásico.'
        ]
      },
      {
        code: '4920',
        label: 'Escucha activa',
        definition: 'Prestar gran atención y dar importancia a los mensajes verbales y no verbales del paciente.',
        priority: 'Sugerida',
        activities: [
          'Mostrar interés por el paciente y eliminar distracciones ambientales (ruidos de TV, alarmas innecesarias).',
          'Verificar la comprensión de las necesidades básicas haciendo preguntas cerradas que pueda responder con un gesto (sí/no).'
        ]
      }
    ]
  },

  // 6. RIESGO DE PERFUSIÓN TISULAR CEREBRAL INEFICAZ (NANDA 2024-2026)
  {
    id: 'nanda_00201',
    code: '00201',
    label: 'Riesgo de perfusión tisular cerebral ineficaz',
    domain: 'Dominio 4: Actividad / Reposo',
    domainNumber: 4,
    classType: 'Clase 4: Respuestas cardiovasculares / pulmonares',
    classNumber: 4,
    type: 'De riesgo',
    definition: 'Vulnerable a una disminución de la circulación tisular cerebral que puede comprometer la salud.',
    relatedFactors: [
      'Aneurisma cerebral o malformación arteriovenosa',
      'Aterosclerosis carotídea o estenosis arterial cerebral',
      'Cardiopatía embolígena (fibrilación auricular, estenosis mitral)',
      'Crisis hipertensiva grave / Encefalopatía hipertensiva',
      'Traumatismo craneoencefálico con edema cerebral o aumento de la PIC',
      'Coagulopatías o tratamiento anticoagulante descompensado'
    ],
    definingCharacteristics: [
      'Presencia de factores de riesgo neurovasculares identificables',
      'Fluctuación de la presión arterial media (PAM)',
      'Escala de coma de Glasgow límite'
    ],
    riskPopulations: ['Adultos mayores con hipertensión arterial crónica', 'Pacientes con antecedentes de AIT o ictus previo', 'Pacientes en postoperatorio de neurocirugía'],
    associatedConditions: ['Ictus isquémico agudo', 'Hemorragia subaracnoidea', 'Hematoma subdural o epidural', 'Hipertensión intracraneal'],
    nocList: [
      {
        code: '0406',
        label: 'Perfusión tisular: Cerebral',
        definition: 'Adecuación del flujo sanguíneo a través de los vasos cerebrales para mantener la función del tejido encefálico.',
        page: 38,
        targetScore: 'Mantener en 3 (Desviación moderada) y Aumentar a 5 (Sin desviación)',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '040601 Presión intracraneal (PIC) en límites normales (< 20 mmHg)',
          '040602 Presión arterial media en rango meta para perfusión (PPC ≥ 60-70 mmHg)',
          '040603 Cefalea ausente o leve',
          '040613 Estado neurológico: Conciencia orientada en 15/15 Glasgow',
          '040619 Ausencia de síncope o convulsiones'
        ]
      },
      {
        code: '0909',
        label: 'Estado neurológico',
        definition: 'Capacidad del sistema nervioso central y periférico para recibir, procesar y responder a estímulos internos y externos.',
        page: 39,
        targetScore: 'Mantener en 3 y Aumentar a 5',
        scaleDescription: 'Escala de 1 a 5: 1 (Gravemente) a 5 (No comprometido)',
        indicators: [
          '090901 Conciencia (apertura ocular, respuesta verbal y motora)',
          '090902 Función sensitiva y motora simétrica',
          '090903 Tamaño y reactividad pupilar simétrica (isocóricas fotorreactivas)'
        ]
      }
    ],
    nicList: [
      {
        code: '2620',
        label: 'Monitorización neurológica',
        definition: 'Recogida y análisis de los datos del paciente para evitar o minimizar las complicaciones neurológicas.',
        priority: 'Prioritaria',
        activities: [
          'Evaluar la escala de coma de Glasgow (ECG) cada hora o según protocolo de neurocríticos.',
          'Examinar las pupilas: tamaño, simetría, forma y reactividad a la luz.',
          'Controlar signos vitales con énfasis en la presión arterial media (PAM) y la presión de pulso (tríada de Cushing: bradicardia, hipertensión con pulso divergente y respiración irregular).',
          'Evaluar la fuerza muscular, tono y simetría en las 4 extremidades.',
          'Notificar de inmediato al médico ante una caída ≥ 2 puntos en la escala de Glasgow o asimetría pupilar súbita.'
        ]
      },
      {
        code: '2540',
        label: 'Manejo del edema cerebral',
        definition: 'Limitación de la lesión del tejido cerebral debida a la inflamación o edema.',
        priority: 'Prioritaria',
        activities: [
          'Mantener la cabecera de la cama elevada a 30° en posición neutra para facilitar el drenaje venoso yugular.',
          'Evitar la flexión o rotación extrema del cuello y las maniobras de Valsalva.',
          'Administrar soluciones hiperosmolares prescritas (Manitol al 20% o Solución Salina Hipertónica al 3%) con filtro.',
          'Mantener normotermia estricta (< 37.5 °C); la hipertermia incrementa drásticamente el consumo cerebral de O2.',
          'Evitar la hipoxia (SpO2 ≥ 95%) y la hipercapnia (PaCO2 meta 35-40 mmHg).'
        ]
      }
    ]
  },

  // 7. RIESGO DE DETERIORO DE LA FUNCIÓN CARDIOVASCULAR (NANDA 2024-2026)
  {
    id: 'nanda_00311',
    code: '00311',
    label: 'Riesgo de deterioro de la función cardiovascular',
    domain: 'Dominio 4: Actividad / Reposo',
    domainNumber: 4,
    classType: 'Clase 4: Respuestas cardiovasculares / pulmonares',
    classNumber: 4,
    type: 'De riesgo',
    definition: 'Vulnerable a una disminución en el aporte de sangre oxigenada a los tejidos que puede comprometer la salud debido a disfunción del miocardio o del sistema vascular.',
    relatedFactors: [
      'Hipertensión arterial no controlada',
      'Cardiopatía isquémica / Infarto agudo de miocardio previo',
      'Arritmias cardíacas (fibrilación auricular, bloqueo AV)',
      'Insuficiencia cardíaca congestiva con fracción de eyección reducida',
      'Tabaquismo crónico, dislipidemia y diabetes mellitus',
      'Sobrecarga de volumen de líquidos o insuficiencia renal'
    ],
    definingCharacteristics: [
      'Presencia de factores de riesgo coronarios múltiples',
      'Historia de dolor precordial o disnea paroxística nocturna',
      'Electrocardiograma patológico basal'
    ],
    riskPopulations: ['Adultos con síndrome metabólico', 'Pacientes con antecedentes familiares de muerte súbita cardiovascular', 'Adultos mayores'],
    associatedConditions: ['Insuficiencia cardíaca', 'Angina de pecho inestable', 'Valvulopatías graves', 'Arteriopatía coronaria'],
    nocList: [
      {
        code: '0400',
        label: 'Efectividad de la bomba cardíaca',
        definition: 'Adecuación del volumen de sangre expulsado de los ventrículos para mantener la presión de perfusión sistémica.',
        page: 45,
        targetScore: 'Mantener en 3 (Desviación moderada) y Aumentar a 5 (Sin desviación)',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '040001 Presión arterial sistólica en rango meta',
          '040002 Presión arterial diastólica en rango meta',
          '040003 Frecuencia cardíaca en reposo normal (60-90 lpm)',
          '040007 Fracción de eyección conservada',
          '040013 Ausencia de edemas periféricos',
          '040014 Ausencia de ingurgitación yugular'
        ]
      },
      {
        code: '0405',
        label: 'Perfusión tisular: Cardíaca',
        definition: 'Adecuación del flujo sanguíneo a través de los vasos coronarios para mantener la función tisular cardíaca.',
        page: 46,
        targetScore: 'Mantener en 3 y Aumentar a 5',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '040501 Frecuencia cardíaca apical',
          '040502 Ritmo cardíaco regular en monitor',
          '040503 Ausencia de angina o dolor torácico',
          '040509 Marcadores enzimáticos cardíacos en rango normal (Troponinas, CPK-MB)'
        ]
      }
    ],
    nicList: [
      {
        code: '4040',
        label: 'Cuidados cardíacos',
        definition: 'Limitación de las complicaciones derivadas de un desequilibrio entre el aporte y la demanda miocárdica de oxígeno.',
        priority: 'Prioritaria',
        activities: [
          'Monitorizar de forma continua el trazado electrocardiográfico de 12 derivaciones en busca de cambios en el segmento ST o arritmias.',
          'Vigilar la presión arterial, frecuencia cardíaca y frecuencia respiratoria cada hora o según estabilidad.',
          'Mantener reposo absoluto en cama en posición semifowler durante las primeras 24 horas del evento agudo.',
          'Administrar nitroglicerina, betabloqueantes o antihipertensivos prescritos observando estrictamente la respuesta hemodinámica.',
          'Restringir el consumo de sodio y controlar balance hídrico estricto.'
        ]
      },
      {
        code: '4046',
        label: 'Cuidados cardíacos: Agudos',
        definition: 'Limitación de las complicaciones en un paciente que ha experimentado recientemente un episodio de desequilibrio miocárdico.',
        priority: 'Prioritaria',
        activities: [
          'Canalizar 2 vías endovenosas permeables para fármacos vasoactivos o antiarrítmicos.',
          'Tener disponible coche de paro con desfibrilador operativo en la unidad.',
          'Controlar enzimas cardíacas seriadas y comunicar alteraciones de inmediato.'
        ]
      }
    ]
  },

  // 8. RIESGO DE AUTOGESTIÓN DEL PATRÓN DE GLUCEMIA INEFICAZ (NANDA 2024-2026)
  {
    id: 'nanda_00489',
    code: '00489',
    label: 'Riesgo de autogestión del patrón de glucemia ineficaz',
    domain: 'Dominio 1: Promoción de la salud',
    domainNumber: 1,
    classType: 'Clase 2: Gestión de la salud',
    classNumber: 2,
    type: 'De riesgo',
    definition: 'Vulnerable a una gestión ineficaz del régimen terapéutico para mantener los niveles de glucosa en sangre dentro de los límites diana, lo que puede comprometer la salud.',
    relatedFactors: [
      'Conocimiento inadecuado sobre el manejo de la diabetes y signos de alarma',
      'Dificultad con el régimen terapéutico complejo (múltiples dosis de insulina, conteo de carbohidratos)',
      'Adherencia inadecuada a las pautas de alimentación o actividad física',
      'Monitorización irregular de la glucemia capilar',
      'Estrés psicosocial o recursos económicos limitados para insumos'
    ],
    definingCharacteristics: [
      'Presencia de antecedentes de hiperglucemias frecuentes o hipoglucemias inadvertidas',
      'Valores de hemoglobina glicosilada (HbA1c > 8%)'
    ],
    riskPopulations: ['Pacientes con diabetes mellitus tipo 1 o tipo 2 de diagnóstico reciente', 'Adolescentes y adultos mayores con diabetes', 'Mujeres con diabetes gestacional'],
    associatedConditions: ['Diabetes Mellitus Tipo 1 y 2', 'Nefropatía diabética', 'Retinopatía diabética', 'Pie diabético'],
    nocList: [
      {
        code: '1619',
        label: 'Autogestión de la diabetes',
        definition: 'Acciones personales para controlar la diabetes mellitus, su tratamiento y prevención de complicaciones.',
        page: 14,
        targetScore: 'Mantener en 2 (Raramente demostrado) y Aumentar a 4 (Frecuentemente demostrado)',
        scaleDescription: 'Escala de 1 a 5: 1 (Nunca) a 5 (Siempre demostrado)',
        indicators: [
          '161901 Realiza el procedimiento correcto para la prueba de glucosa en sangre',
          '161902 Controla la glucosa en sangre según pauta recomendada',
          '161909 Administra la insulina o antidiabéticos orales según prescripción',
          '161911 Trata los síntomas de hipoglucemia de forma inmediata',
          '161913 Sigue la dieta recomendada por el nutricionista',
          '161916 Realiza el cuidado e inspección diaria de los pies'
        ]
      },
      {
        code: '2300',
        label: 'Nivel de glucemia',
        definition: 'Medida en que se mantienen los niveles de glucosa en sangre en rango fisiológico.',
        page: 15,
        targetScore: 'Mantener en 2 (Desviación sustancial) y Aumentar a 5 (Sin desviación)',
        scaleDescription: 'Escala de 1 a 5: 1 (Desviación grave) a 5 (Sin desviación)',
        indicators: [
          '230001 Glucosa en sangre en ayunas (70-130 mg/dL)',
          '230002 Glucosa postprandial (< 180 mg/dL)',
          '230004 Hemoglobina glicada (HbA1c < 7%)',
          '230007 Ausencia de cetonuria'
        ]
      }
    ],
    nicList: [
      {
        code: '2120',
        label: 'Manejo de la hiperglucemia',
        definition: 'Prevención y tratamiento de los niveles de glucosa en sangre superiores a lo normal.',
        priority: 'Prioritaria',
        activities: [
          'Monitorizar la glucosa capilar antes de las comidas y al acostarse según pauta clínica.',
          'Administrar insulina según prescripción médica y escala móvil, rotando adecuadamente los sitios de punción.',
          'Instruir al paciente y familia sobre el reconocimiento precoz de síntomas de hiperglucemia (poliuria, polidipsia, visión borrosa) e hipoglucemia (sudoración fría, temblor, mareos, confusión).',
          'Facilitar la ingesta oral de líquidos en caso de hiperglucemia sin cetosis.',
          'Remitir a programa de educación diabetológica y nutrición clínica.'
        ]
      },
      {
        code: '2130',
        label: 'Manejo de la hipoglucemia',
        definition: 'Prevención y tratamiento de los niveles de glucosa en sangre inferiores a lo normal (< 70 mg/dL).',
        priority: 'Prioritaria',
        activities: [
          'Identificar signos de hipoglucemia y confirmar con glucemia capilar inmediata.',
          'Aplicar la regla del 15: administrar 15 gramos de carbohidratos de absorción rápida (1/2 vaso de jugo o 3 cucharaditas de azúcar en agua), reevaluar a los 15 minutos.',
          'Administrar dextrosa al 33% o glucagón EV/IM si el paciente presenta pérdida de conciencia o no tolera la vía oral.'
        ]
      }
    ]
  },

  // 9. DISPOSICIÓN PARA MEJORAR EL PATRÓN DE SUEÑO (NANDA 2024-2026)
  {
    id: 'nanda_00417',
    code: '00417',
    label: 'Disposición para mejorar el patrón de sueño',
    domain: 'Dominio 4: Actividad / Reposo',
    domainNumber: 4,
    classType: 'Clase 1: Sueño / Reposo',
    classNumber: 1,
    type: 'De promoción de la salud',
    definition: 'Patrón de suspensión periódica y natural de la conciencia para proporcionar descanso y sostener un estilo de vida deseado, que puede ser reforzado.',
    relatedFactors: ['Deseo expreso de optimizar la calidad del descanso y el bienestar general'],
    definingCharacteristics: [
      'Expresa deseo de mejorar el sueño',
      'Expresa interés por adquirir hábitos saludables de higiene del sueño',
      'Manifiesta satisfacción con el sueño pero busca optimizar su horario y rendimiento diario'
    ],
    riskPopulations: ['Estudiantes universitarios', 'Trabajadores con turnos rotativos', 'Madres en periodo de lactancia'],
    associatedConditions: ['Ninguna (Diagnóstico de promoción del bienestar)'],
    nocList: [
      {
        code: '0004',
        label: 'Sueño',
        definition: 'Suspensión periódica natural de la conciencia durante la cual se recupera el organismo.',
        page: 185,
        targetScore: 'Mantener en 3 (Moderadamente comprometido) y Aumentar a 5 (No comprometido)',
        scaleDescription: 'Escala de 1 a 5: 1 (Gravemente) a 5 (No comprometido)',
        indicators: [
          '000401 Horas de sueño cumplidas (mínimo 7 horas diarias)',
          '000403 Patrón del sueño regular',
          '000404 Calidad del sueño reparador',
          '000406 Sueño ininterrumpido',
          '000407 Hábito de levantarse a una hora adecuada'
        ]
      }
    ],
    nicList: [
      {
        code: '1850',
        label: 'Mejorar el sueño',
        definition: 'Facilitación de ciclos regulares de sueño/vigilia.',
        priority: 'Prioritaria',
        activities: [
          'Determinar el esquema de sueño/vigilia del paciente y sus preferencias habituales.',
          'Enseñar medidas de higiene del sueño: evitar cafeína y comidas copiosas antes de acostarse, retirar pantallas con luz azul 1 hora antes.',
          'Crear un ambiente tranquilo, oscuro y con temperatura confortable en la habitación.',
          'Fomentar el establecimiento de una rutina relajante a la hora de acostarse (lectura, baño tibio, música suave).'
        ]
      }
    ]
  },

  // 10. GESTIÓN DE LA SALUD COMUNITARIA INEFICAZ (NANDA 2024-2026)
  {
    id: 'nanda_00356',
    code: '00356',
    label: 'Gestión de la salud comunitaria ineficaz',
    domain: 'Dominio 1: Promoción de la salud',
    domainNumber: 1,
    classType: 'Clase 2: Gestión de la salud',
    classNumber: 2,
    type: 'Focalizado en el problema',
    definition: 'Patrón de manejo de los programas de salud y de los recursos de la comunidad que es insatisfactorio para mantener o mejorar el bienestar de la población.',
    relatedFactors: [
      'Acceso inadecuado a los servicios de salud y barreras geográficas o económicas',
      'Inadecuada disponibilidad de recursos comunitarios para la salud',
      'Falta de coordinación intersectorial y liderazgo comunitario débil',
      'Déficit en las coberturas de inmunizaciones y tamizajes preventivos'
    ],
    definingCharacteristics: [
      'Tasas elevadas de morbilidad o mortalidad por enfermedades prevenibles',
      'Inadecuada participación de la comunidad en programas preventivos',
      'Falta de respuesta ante brotes epidémicos o riesgos ambientales'
    ],
    riskPopulations: ['Comunidades rurales o en situación de pobreza extrema', 'Poblaciones indígenas o periurbanas sin saneamiento básico'],
    associatedConditions: ['Brotes de Dengue, TBC, Anemia infantil, desnutrición crónica'],
    nocList: [
      {
        code: '2808',
        label: 'Efectividad del programa comunitario',
        definition: 'Grado en que un programa de salud comunitaria logra sus objetivos previstos.',
        page: 11,
        targetScore: 'Mantener en 2 y Aumentar a 4',
        scaleDescription: 'Escala de 1 a 5: 1 (Nada eficaz) a 5 (Completamente eficaz)',
        indicators: [
          '280801 Participación comunitaria en el programa',
          '280803 Cobertura de la población objetivo alcanzada',
          '280808 Reducción de la incidencia del problema de salud'
        ]
      }
    ],
    nicList: [
      {
        code: '8500',
        label: 'Desarrollo de un programa de salud comunitaria',
        definition: 'Planificación, puesta en marcha y evaluación de un programa de salud orientado a la población.',
        priority: 'Prioritaria',
        activities: [
          'Elaborar el Análisis de Situación de Salud Local (ASIS) con participación comunitaria activa.',
          'Capacitar a los agentes comunitarios de salud y líderes vecinales.',
          'Organizar campañas integrales de tamizaje (anemia, TBC, vacunación de esquema regular).',
          'Coordinar con las autoridades municipales para la mejora de determinantes sociales (agua potable, recojo de residuos).'
        ]
      }
    ]
  }
];
