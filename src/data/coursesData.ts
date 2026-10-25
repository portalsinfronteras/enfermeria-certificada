export interface CourseQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  keyPoints: string[];
  clinicalPearl: string;
  checkQuestion: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface ClinicalCourse {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  academicHours: number;
  credits: number;
  level: 'Intermedio - Avanzado' | 'Especialización Clínica' | 'Esencial Hospitalario';
  normativaBase: string;
  badgeColor: string;
  modules: CourseModule[];
  finalExam: CourseQuestion[];
}

export const COURSES_DATA: ClinicalCourse[] = [
  {
    id: 'dosificacion-dilucion',
    code: 'EC-CUR-001',
    title: 'Dosificación y Dilución de Medicamentos',
    subtitle: 'Cálculo exacto de dosis, reconstitución segura, velocidad de infusión y manejo de fármacos de alto riesgo en hospitalización y áreas críticas.',
    category: 'Farmacoterapia & Seguridad',
    academicHours: 24,
    credits: 1.5,
    level: 'Esencial Hospitalario',
    normativaBase: 'DIGEMID / OMS Seguridad del Paciente / Protocolos MINSA',
    badgeColor: 'from-teal-500 to-cyan-500',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Principios de Reconstitución, Dilución y Los 10 Correctos',
        duration: '4 horas académicas',
        summary: 'Diferenciación técnica entre reconstitución y dilución endovenosa, estabilidad físico-química y barreras de seguridad clínica.',
        content: [
          'La reconstitución consiste en agregar un solvente estéril (agua para inyección o NaCl 0.9%) a un fármaco liofilizado en polvo para obtener una solución concentrada inicial. La dilución posterior consiste en incorporar dicha dosis reconstituida en un volumen mayor de vehículo compatible (50 ml, 100 ml o 250 ml) para su infusión segura.',
          'Todo procedimiento farmacológico exige la verificación sistemática de los 10 Correctos: paciente correcto, medicamento correcto, dosis correcta, vía correcta, hora correcta, verificación de fecha de vencimiento,velocidad de infusión, registro inmediato, educación al paciente e indagación de alergias medicamentosas.',
          'Respetar el pH y la osmolaridad de las soluciones diluidas previene la flebitis química y la precipitación intraluminal en catéteres venosos periféricos y centrales.'
        ],
        keyPoints: [
          'Concentration (mg/ml) = Masa total del soluto (mg) / Volumen total de dilución (ml).',
          'Fármacos con osmolaridad > 600 mOsm/L o pH < 5 y > 9 requieren preferentemente acceso venoso central.',
          'Nunca mezclar en la misma jeringa o línea en Y medicamentos con pH extremos (ej. Fenitoína alcalina con soluciones glucosadas).'
        ],
        clinicalPearl: 'La Ceftriaxona nunca debe reconstituirse ni administrarse simultáneamente con soluciones que contengan Calcio (como Lactato de Ringer o Gluconato de Calcio), especialmente en neonatos, por riesgo letal de precipitación pulmonar y renal.',
        checkQuestion: {
          question: 'Si reconstituye un vial de Meropenem de 1 g (1000 mg) en 20 ml de Agua Destilada, ¿cuál es la concentración resultante por cada mililitro?',
          options: ['10 mg/ml', '25 mg/ml', '50 mg/ml', '100 mg/ml'],
          correctIndex: 2,
          explanation: 'Al dividir 1000 mg entre 20 ml se obtiene exactamente 50 mg/ml.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Regla de Tres Clínica, Factor de Goteo y Bombas de Infusión',
        duration: '6 horas académicas',
        summary: 'Dominio de fórmulas universales para macrogoteo, microgoteo y programación de bombas volumétricas en ml/h.',
        content: [
          'El sistema de macrogoteo estándar entrega 20 gotas por cada 1 ml de solución, mientras que el sistema de microgoteo (cámara graduada pediátrica/UCI) entrega 60 microgotas por cada 1 ml.',
          'De esta relación matemática se derivan las constantes universales de enfermería: Volumen (ml) dividido entre (Tiempo en horas × 3) equivale a gotas por minuto. Por su parte, el número de microgotas por minuto es exactamente igual a la velocidad en mililitros por hora (ml/h).',
          'En pacientes críticos o pediátricos, el cálculo de dosis por peso se expresa en mcg/kg/min. La fórmula estándar para convertir ml/h a mcg/kg/min y viceversa permite titular aminas vasoactivas con precisión milimétrica.'
        ],
        keyPoints: [
          'Gotas/min = Volumen Total (ml) / (Horas × 3).',
          'Microgotas/min = Volumen Total (ml) / Horas = ml/hora.',
          '1 miligramo (mg) equivale a 1,000 microgramos (mcg); 1 gramo (g) equivale a 1,000 miligramos (mg).'
        ],
        clinicalPearl: 'Para pasar de gotas/min a ml/h o microgotas/min rápidamente durante la ronda clínica, simplemente multiplica las gotas por minuto por 3.',
        checkQuestion: {
          question: 'Se indica infundir 1000 ml de NaCl 0.9% en 8 horas por equipo de venoclisis convencional. ¿A cuántas gotas por minuto debe regular el goteo?',
          options: ['28 gotas/min', '35 gotas/min', '42 gotas/min', '60 gotas/min'],
          correctIndex: 2,
          explanation: 'Aplicando la fórmula: 1000 / (8 × 3) = 1000 / 24 = 41.66, que se redondea a 42 gotas/min.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Dilución de Medicamentos de Alto Riesgo y Electrolitos Concentrados',
        duration: '7 horas académicas',
        summary: 'Protocolos seguros para Vancomicina, Cloruro de Potasio, Insulina, Inotrópicos y Vasopresores.',
        content: [
          'Los medicamentos de Alto Riesgo (MAR) son aquellos que presentan una probabilidad elevada de causar daño grave o mortal cuando se produce un error en el curso de su utilización. Incluyen electrolitos concentrados (KCl 20%, NaCl 20%), insulinas, anticoagulantes y aminas vasoactivas.',
          'El Cloruro de Potasio (KCl 20% = 2.7 mEq/ml) JAMÁS debe administrarse en bolo directo endovenoso. En vía periférica la concentración máxima segura es de 40 mEq/L y la velocidad no debe superar los 10 mEq/hora sin monitorización electrocardiográfica continua.',
          'La Vancomicina requiere diluirse a una concentración ≤ 5 mg/ml (ej. 500 mg en al menos 100 ml o 1 g en 200-250 ml de NaCl 0.9%) e infundirse en un tiempo no menor a 60 minutos para prevenir el síndrome de liberación histamínica ("Síndrome del Hombre Rojo").'
        ],
        keyPoints: [
          'Doble chequeo independiente obligatorio antes de administrar Insulina EV, Heparina y Retos de Potasio.',
          'Noradrenalina estándar UCI: 4 mg (1 ampolla) diluidos en 100 ml de Dextrosa 5% (Concentración: 40 mcg/ml).',
          'Vigilar signo de extravasación tisular en infusiones de gluconato de calcio, fenitoína y vasopresores.'
        ],
        clinicalPearl: 'La Fenitoína sódica precipita rápidamente en Dextrosa al 5%; debe diluirse exclusivamente en Solución Salina Fisiológica (NaCl 0.9%) y administrarse a una velocidad máxima de 50 mg/min en adultos.',
        checkQuestion: {
          question: '¿Cuál es el tiempo mínimo de infusión recomendado para 1 gramo de Vancomicina diluido en 250 ml de NaCl 0.9% para prevenir la reacción anafilactoide por histamina?',
          options: ['15 a 20 minutos en bolo lento', '30 minutos exactos', 'Mínimo 60 a 90 minutos', 'Infusión continua en 24 horas siempre'],
          correctIndex: 2,
          explanation: 'La Vancomicina debe infundirse en al menos 60 minutos (o hasta 90-120 min si la dosis es de 1g o superior) para evitar el Síndrome del Hombre Rojo e hipotensión severa.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Cálculo de Dosis Pediátrica y Neonatal Exacta',
        duration: '7 horas académicas',
        summary: 'Ajuste ponderal (mg/kg/día y mg/kg/dosis), uso de jeringas milimetradas y técnica de doble dilución.',
        content: [
          'En pediatría y neonatología, toda prescripción se valida en función del peso real en kilogramos (mg/kg/día o mg/kg/dosis). Es responsabilidad del profesional de enfermería verificar que la dosis indicada se encuentre dentro del rango terapéutico antes de prepararla.',
          'Cuando el volumen calculado a administrar es inferior a 0.5 ml, el margen de error del espacio muerto de la jeringa aumenta significativamente. En estos casos se aplica la técnica de redilución (llevar la concentración a un volumen medible de 1 ml o 10 ml) utilizando jeringas de 1 ml graduadas en centésimas.',
          'Debe considerarse el volumen de purga del equipo de infusión o extensión bifurcada para asegurar que el fármaco ingrese efectivamente al torrente sanguíneo del neonato en el tiempo programado.'
        ],
        keyPoints: [
          'Paracetamol pediátrico: 10 a 15 mg/kg/dosis cada 6 a 8 horas (dosis máxima 60 mg/kg/día).',
          'Amikacina pediátrica: 15 mg/kg/día dividido cada 12 o 24 horas en infusión de 30-60 minutos.',
          'Descartar inmediatamente el sobrante de ampollas abiertas sin conservantes tras extraer la fracción pediátrica.'
        ],
        clinicalPearl: 'En lactantes de 8 kg con fiebre (38.8 °C), a una dosis de 15 mg/kg de Paracetamol corresponden 120 mg. Si se dispone de jarabe de 120 mg/5 ml, la dosis exacta a administrar es de 5 ml.',
        checkQuestion: {
          question: 'Un niño de 12 kg tiene indicación de Ceftriaxona a razón de 50 mg/kg/día cada 24 horas. Si el frasco de 1 g (1000 mg) se reconstituye en 10 ml de agua estéril, ¿cuántos mililitros debe extraer?',
          options: ['3 ml', '5 ml', '6 ml', '8 ml'],
          correctIndex: 2,
          explanation: 'Dosis necesaria: 12 kg × 50 mg/kg = 600 mg. Concentración del frasco: 1000 mg / 10 ml = 100 mg/ml. Volumen a extraer: 600 mg / 100 mg/ml = 6 ml.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cuál es la concentración final (en mcg/ml) si se diluyen 2 ampollas de Noradrenalina (4 mg cada una = 8 mg totales) en 100 ml de Dextrosa al 5%?',
        options: ['40 mcg/ml', '80 mcg/ml', '8 mcg/ml', '160 mcg/ml'],
        correctIndex: 1,
        rationale: '8 mg equivalen a 8,000 mcg. Al dividir 8,000 mcg entre 100 ml se obtiene una concentración de 80 mcg/ml.'
      },
      {
        id: 'q2',
        question: 'Se prescribe administrar 1500 ml de Solución Polielectrolítica en 12 horas. ¿Cuál es la velocidad en gotas por minuto y en mililitros por hora?',
        options: ['42 gotas/min y 125 ml/h', '35 gotas/min y 105 ml/h', '50 gotas/min y 150 ml/h', '28 gotas/min y 84 ml/h'],
        correctIndex: 0,
        rationale: 'ml/h = 1500 / 12 = 125 ml/h. Gotas/min = 1500 / (12 × 3) = 1500 / 36 = 41.66 ≈ 42 gotas/min.'
      },
      {
        id: 'q3',
        question: 'Respecto a la administración segura de Cloruro de Potasio (KCl 20%), señale la afirmación correcta:',
        options: [
          'Puede administrarse en bolo directo lento en casos de hipopotasemia severa.',
          'Debe diluirse obligatoriamente y por vía periférica no superar los 40 mEq/L ni 10 mEq/h.',
          'Una ampolla de 10 ml al 20% contiene exactamente 10 mEq de potasio.',
          'Se diluye exclusivamente en Dextrosa al 10% para favorecer el ingreso intracelular.'
        ],
        correctIndex: 1,
        rationale: 'El KCl concentrado nunca se administra directo por riesgo de paro cardíaco en sístole; requiere dilución y velocidad controlada.'
      },
      {
        id: 'q4',
        question: 'Un paciente pediátrico de 15 kg requiere Metamizol EV a una dosis de 20 mg/kg/dosis. Si la ampolla viene de 1 g en 2 ml (500 mg/ml), ¿qué volumen exacto corresponde a su dosis?',
        options: ['0.3 ml', '0.6 ml', '1.2 ml', '1.5 ml'],
        correctIndex: 1,
        rationale: 'Dosis requerida: 15 kg × 20 mg = 300 mg. Como la concentración es 500 mg/ml: 300 / 500 = 0.6 ml.'
      },
      {
        id: 'q5',
        question: '¿Con qué solución está estrictamente prohibido diluir la Fenitoína Sódica endovenosa por precipitación inmediata de cristales?',
        options: ['Cloruro de Sodio al 0.9%', 'Dextrosa al 5% en agua', 'Solución Salina Isotónica', 'Ninguna, es compatible con todas'],
        correctIndex: 1,
        rationale: 'La Fenitoína tiene un pH altamente alcalino (~12) y precipita rápidamente en medios ácidos como la Dextrosa al 5%.'
      }
    ]
  },
  {
    id: 'triage-escalas-clinicas',
    code: 'EC-CUR-002',
    title: 'Guía de Triage y Escalas Clínicas Esenciales',
    subtitle: 'Priorización estructurada en emergencias (Manchester / MINSA) y aplicación experta de Glasgow, NEWS2, RASS, Braden, Downton y escalas de dolor.',
    category: 'Valoración & Emergencias',
    academicHours: 24,
    credits: 1.5,
    level: 'Esencial Hospitalario',
    normativaBase: 'NTS N° 042-MINSA / Servicios de Emergencia / Guías Internacionales UCI',
    badgeColor: 'from-rose-500 to-orange-500',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Sistema de Triaje Estructurado en Emergencias (Niveles I al V)',
        duration: '6 horas académicas',
        summary: 'Clasificación por gravedad clínica, tiempos máximos de atención según normativa MINSA y detección del paciente crítico.',
        content: [
          'El Triaje hospitalario es un proceso de valoración clínica preliminar que ordena a los pacientes según su grado de urgencia antes de la evaluación diagnóstica completa, garantizando que quienes presentan riesgo vital inmediato reciban atención prioritaria.',
          'De acuerdo con la Norma Técnica de Salud de los Servicios de Emergencia del MINSA Perú, los pacientes se categorizan en Prioridad I (Emergencia o Gravedad Súbita Extrema: atención inmediata en Trauma Shock), Prioridad II (Urgencia Mayor: atención ≤ 10 minutos), Prioridad III (Urgencia Menor: ≤ 30-60 minutos) y Prioridad IV/V (Patología aguda no urgente / Consulta externa).',
          'El Triángulo de Evaluación Pediátrica (Apariencia, Trabajo Respiratorio y Circulación cutánea) permite identificar en menos de 30 segundos la inestabilidad fisiológica en niños sin necesidad de instrumentos iniciales.'
        ],
        keyPoints: [
          'Prioridad I (Rojo): Paro cardiorrespiratorio, shock, obstrucción de vía aérea, trauma grave, Glasgow ≤ 8, convulsión activa.',
          'Prioridad II (Naranja/Amarillo): Dolor torácico isquémico, disnea moderada-severa, déficit neurológico agudo (Código Ictus), crisis hipertensiva.',
          'El triaje es dinámico: todo paciente en sala de espera debe ser reevaluado periódicamente.'
        ],
        clinicalPearl: 'Un paciente adulto mayor o diabético con epigastralgia intensa, diaforesis fría y náuseas debe clasificarse como Prioridad II y realizarse un EKG en menos de 10 minutos para descartar Infarto Agudo de Miocardio de cara inferior.',
        checkQuestion: {
          question: 'Según la normativa de Triaje en Emergencias del MINSA, ¿a qué prioridad corresponde un paciente que ingresa con dolor precordial opresivo irradiado a mandíbula, PA 170/100 mmHg y SpO2 93%?',
          options: ['Prioridad I o II con EKG en < 10 minutos', 'Prioridad III (espera hasta 60 minutos)', 'Prioridad IV (derivación a consultorio externo)', 'Observación domiciliaria'],
          correctIndex: 0,
          explanation: 'El síndrome coronario agudo sospechado es una emergencia tiempo-dependiente (Prioridad I/II) que exige atención y electrocardiograma inmediato.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Valoración Neurológica y de Sedación: Escala de Coma de Glasgow y RASS',
        duration: '6 horas académicas',
        summary: 'Evaluación precisa de respuesta ocular, verbal y motora, reflejos pupilares y titulación de sedoanalgesia en UCI.',
        content: [
          'La Escala de Coma de Glasgow (GCS) evalúa el nivel de conciencia mediante 3 parámetros: Apertura Ocular (1 a 4 puntos), Respuesta Verbal (1 a 5 puntos) y Respuesta Motora (1 a 6 puntos), con un rango total de 3 (coma profundo) a 15 puntos (lúcido).',
          'La respuesta motora es el predictor pronóstico más importante en el traumatismo encéfalo-craneano (TEC). Diferenciar entre localización del dolor (5 pts), retirada en flexión normal (4 pts), flexión anormal decorticada (3 pts) y extensión descerebrada (2 pts) es vital.',
          'En pacientes intubados y ventilados mecánicamente, la escala RASS (Richmond Agitation-Sedation Scale) mide desde +4 (combativo) hasta -5 (coma sin respuesta). La meta habitual de sedación ligera-moderada en UCI es de 0 a -2, salvo indicación de neuroprotección o SDRA severo (-4 a -5).'
        ],
        keyPoints: [
          'TEC Leve: Glasgow 13-15 | TEC Moderado: Glasgow 9-12 | TEC Severo: Glasgow ≤ 8 (indicación de intubación endotraqueal para proteger vía aérea).',
          'Todo descenso de ≥ 2 puntos en la escala de Glasgow respecto al basal constituye una urgencia neuroquirúrgica.',
          'Evaluar siempre simetría y fotomotricidad pupilar (isocoria, anisocoria, miosis, midriasis).'
        ],
        clinicalPearl: 'Un puntaje de Glasgow nunca puede ser 0; el puntaje mínimo posible es 3 (O1 V1 M1), incluso en muerte encefálica.',
        checkQuestion: {
          question: 'Paciente que abre los ojos solo al estímulo doloroso (2), emite sonidos incomprensibles (2) y retira la extremidad ante el dolor sin localizarlo (4). ¿Cuál es su puntaje de Glasgow?',
          options: ['Glasgow 6 puntos', 'Glasgow 8 puntos', 'Glasgow 9 puntos', 'Glasgow 10 puntos'],
          correctIndex: 1,
          explanation: 'Ocular (2) + Verbal (2) + Motora (4) = 8 puntos (TEC severo, requiere protección de vía aérea).'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Detección Temprana de Deterioro Clínico: Escala NEWS2 y qSOFA',
        duration: '6 horas académicas',
        summary: 'Identificación precoz de sepsis e insuficiencia respiratoria o hemodinámica en pisos de hospitalización.',
        content: [
          'La escala NEWS2 (National Early Warning Score 2) asigna puntaje a 6 parámetros fisiológicos rutinarios: frecuencia respiratoria, saturación de oxígeno (con escala diferenciada para pacientes retenedores de CO2/EPOC), uso de oxígeno suplementario, presión arterial sistólica, frecuencia cardíaca, nivel de conciencia (ACVPU) y temperatura.',
          'Un puntaje NEWS2 de 5 a 6 puntos (o 3 puntos en un solo parámetro) representa riesgo clínico moderado y exige evaluación urgente. Un puntaje ≥ 7 indica riesgo clínico alto y requiere respuesta inmediata del equipo de cuidados críticos.',
          'El qSOFA (Quick SOFA) alerta sobre sepsis fuera de UCI evaluando 3 criterios: FR ≥ 22 rpm, alteración del sensorio (Glasgow < 15) y PAS ≤ 100 mmHg.'
        ],
        keyPoints: [
          'La taquipnea (FR > 22-24 rpm) suele ser el signo más sensible y temprano de deterioro clínico y acidosis metabólica.',
          'En pacientes con EPOC hipercápnico, la meta de SpO2 en NEWS2 (Escala 2) es de 88% a 92%.',
          'Activar el Código Sepsis en la primera hora ("Hora Dorada") reduce drásticamente la mortalidad hospitalaria.'
        ],
        clinicalPearl: 'Nunca subestimes una frecuencia respiratoria de 26 rpm en un paciente con presión arterial aparentemente normal; la compensación simpática mantiene la PA hasta momentos antes del colapso.',
        checkQuestion: {
          question: '¿A partir de qué puntaje en la escala NEWS2 se considera "Riesgo Clínico Alto" que requiere valoración de emergencia por el equipo de respuesta rápida / UCI?',
          options: ['2 puntos', '4 puntos', '7 o más puntos', 'Solo cuando llega a 15 puntos'],
          correctIndex: 2,
          explanation: 'Un puntaje NEWS2 ≥ 7 define Riesgo Clínico Alto y exige monitoreo continuo y valoración crítica inmediata.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Escalas de Seguridad del Paciente: Dolor (EVA/FLACC/CPOT), Caídas (Downton) y Braden',
        duration: '6 horas académicas',
        summary: 'Valoración del quinto signo vital y prevención proactiva de eventos adversos hospitalarios.',
        content: [
          'El dolor debe evaluarse con la herramienta adecuada a la condición comunicativa del paciente: Escala Visual Analógica / Numérica (EVA 0-10) en adultos conscientes; escala FLACC (Rostro, Piernas, Actividad, Llanto, Consolabilidad) en pediatría preverbal; y escala CPOT o BPS en pacientes intubados en UCI.',
          'La escala de J.H. Downton evalúa el riesgo de caídas considerando caídas previas, medicamentos (sedantes, diuréticos, hipotensores), déficits sensoriales, estado mental y deambulación. Un puntaje ≥ 3 indica Alto Riesgo de Caídas.',
          'La escala de Braden valora el riesgo de Lesiones por Presión mediante 6 subescalas (percepción sensorial, humedad, actividad, movilidad, nutrición y fricción/cizallamiento). A menor puntaje, mayor es el riesgo (≤ 12 puntos = Alto Riesgo).'
        ],
        keyPoints: [
          'En la escala de Downton: ≥ 3 puntos exige barandas en alto, timbre a la mano, cama baja e identificación visual.',
          'En la escala de Braden la puntuación es inversa: ≤ 12 Alto riesgo, 13-14 Riesgo moderado, 15-18 Riesgo bajo.',
          'Reevaluar el dolor 30 minutos después de administrar analgesia endovenosa.'
        ],
        clinicalPearl: 'En un paciente sedado en ventilación mecánica que presenta taquicardia e hipertensión súbita, evalúa la escala CPOT (expresión facial, movimientos y adaptación al ventilador) antes de aumentar el sedante: muchas veces es dolor no controlado.',
        checkQuestion: {
          question: 'En la escala de J.H. Downton para valoración del riesgo de caídas, ¿qué puntuación clasifica al paciente como de "Alto Riesgo"?',
          options: ['0 puntos', '1 punto', '3 o más puntos', 'Más de 15 puntos'],
          correctIndex: 2,
          explanation: 'En la escala de Downton, un puntaje igual o mayor a 3 puntos clasifica al paciente en Alto Riesgo de caídas.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cuál es el puntaje en la Escala de Coma de Glasgow de un paciente que abre los ojos al llamado (3), está confuso en tiempo/espacio (4) y localiza el estímulo doloroso (5)?',
        options: ['10 puntos', '11 puntos', '12 puntos', '13 puntos'],
        correctIndex: 2,
        rationale: 'Ocular 3 + Verbal 4 + Motora 5 = 12 puntos (TEC moderado).'
      },
      {
        id: 'q2',
        question: '¿Qué escala es la de elección para evaluar el dolor en un lactante de 8 meses hospitalizado que aún no habla?',
        options: ['Escala Numérica Verbal', 'Escala FLACC', 'Escala de Braden', 'Escala de Downton'],
        correctIndex: 1,
        rationale: 'La escala FLACC evalúa parámetros conductuales (Face, Legs, Activity, Cry, Consolability) validados para niños preverbales.'
      },
      {
        id: 'q3',
        question: '¿Cuáles son los 3 criterios clínicos que componen la escala rápida qSOFA para sospecha de sepsis?',
        options: [
          'Fiebre > 39°C, leucocitosis y tos productiva',
          'FR ≥ 22 rpm, PAS ≤ 100 mmHg y alteración del estado mental (Glasgow < 15)',
          'FC > 120 lpm, oliguria y edema periférico',
          'Dolor abdominal, vómitos y deshidratación'
        ],
        correctIndex: 1,
        rationale: 'qSOFA evalúa Frecuencia Respiratoria ≥ 22 rpm, Presión Sistólica ≤ 100 mmHg y alteración aguda del sensorio.'
      },
      {
        id: 'q4',
        question: 'En la Escala de Braden para riesgo de Lesiones por Presión, un puntaje total de 10 puntos indica:',
        options: ['Sin riesgo', 'Riesgo bajo', 'Riesgo moderado', 'Alto riesgo de desarrollar LPP'],
        correctIndex: 3,
        rationale: 'En Braden, puntajes ≤ 12 corresponden a Alto Riesgo de lesiones por presión.'
      },
      {
        id: 'q5',
        question: 'En un paciente bajo ventilación mecánica con infusión de Midazolam y Fentanilo, un puntaje RASS de -2 significa:',
        options: [
          'Paciente combativo y agitado',
          'Sedación ligera: despierta brevemente a la voz con contacto visual < 10 segundos',
          'Sedación profunda: no responde a la voz, solo al estímulo físico',
          'Coma sin respuesta alguna'
        ],
        correctIndex: 1,
        rationale: 'RASS -2 corresponde a sedación ligera (despierta brevemente al llamado verbal con contacto visual menor a 10 segundos).'
      }
    ]
  },
  {
    id: 'bioseguridad-residuos',
    code: 'EC-CUR-003',
    title: 'Bioseguridad Hospitalaria y Manejo de Residuos Sólidos',
    subtitle: 'Precauciones estándar, aislamiento hospitalario, higiene de manos OMS y segregación según NTS N° 144-MINSA/2018/DIGESA.',
    category: 'Control de Infecciones',
    academicHours: 24,
    credits: 1.5,
    level: 'Esencial Hospitalario',
    normativaBase: 'NTS N° 144-MINSA/2018/DIGESA / Manual de Bioseguridad MINSA / OMS',
    badgeColor: 'from-emerald-500 to-teal-600',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Principios de Bioseguridad y Los 5 Momentos de Higiene de Manos',
        duration: '6 horas académicas',
        summary: 'Universalidad, uso racional de barreras protectoras (EPP) y técnica estandarizada de lavado de manos clínico.',
        content: [
          'La bioseguridad se sustenta en tres pilares esenciales: Universalidad (todo paciente y fluido corporal debe considerarse potencialmente infectante), Uso de Barreras de Protección Personal (EPP acorde al riesgo de exposición) y Medios de Eliminación segura del material contaminado.',
          'La higiene de manos es la medida individual más eficaz para prevenir las Infecciones Asociadas a la Atención de la Salud (IAAS). La OMS establece los 5 Momentos obligatorios: 1) Antes de tocar al paciente, 2) Antes de realizar una tarea limpia/aséptica, 3) Después del riesgo de exposición a líquidos corporales, 4) Después de tocar al paciente y 5) Después del contacto con el entorno del paciente.',
          'La fricción con solución hidroalcohólica dura de 20 a 30 segundos, mientras que el lavado con agua y jabón antiséptico dura de 40 a 60 segundos y es obligatorio cuando las manos están visiblemente sucias o tras atender pacientes con Clostridioides difficile.'
        ],
        keyPoints: [
          'Momentos 1 y 2 protegen al paciente; Momentos 3, 4 y 5 protegen al profesional de salud y el entorno hospitalario.',
          'El uso de guantes clínicos o estériles NUNCA reemplaza la higiene de manos.',
          'Secuencia segura de retiro de EPP: retirar primero los elementos más contaminados (guantes y bata) y al final el respirador N95 fuera del área.'
        ],
        clinicalPearl: 'El alcohol en gel no destruye las esporas bacterianas de Clostridioides difficile ni de ciertos enterovirus; en cuadros diarreicos infecciosos es indispensable el lavado por arrastre con agua y jabón con clorhexidina.',
        checkQuestion: {
          question: '¿Cuál es el tiempo recomendado por la OMS para el lavado de manos clínico con agua y jabón antiséptico?',
          options: ['10 a 15 segundos', '20 a 30 segundos', '40 a 60 segundos', '3 a 5 minutos'],
          correctIndex: 2,
          explanation: 'El lavado clínico con agua y jabón requiere de 40 a 60 segundos (mientras que la fricción con alcohol gel requiere de 20 a 30 segundos).'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Precauciones Basadas en la Transmisión y Aislamientos Hospitalarios',
        duration: '6 horas académicas',
        summary: 'Protocolos para aislamiento por Contacto, Gotas y Vía Aérea (Aerosoles) en el entorno clínico.',
        content: [
          'Además de las precauciones estándar aplicables a todos los pacientes, existen tres categorías de aislamiento según el mecanismo de transmisión del agente infeccioso:',
          '1) Transmisión por Contacto (bacterias multirresistentes como BLEE, KPC, SARM, infecciones entéricas): requiere bata y guantes al ingresar a la unidad. 2) Transmisión por Gotas (> 5 micras, ej. Influenza, Meningococo, Tos ferina): requiere mascarilla quirúrgica a menos de 1 metro del paciente. 3) Transmisión Aérea por núcleos de gotitas (< 5 micras, ej. Tuberculosis pulmonar activa, Sarampión, Varicela): requiere habitación con presión negativa o ventilación natural cruzada y uso obligatorio de respirador N95 / FFP2.',
          'En pacientes inmunodeprimidos severos (neutropenia febril) se aplica el aislamiento protector o inverso.'
        ],
        keyPoints: [
          'Aislamiento Aéreo (TBC, Sarampión, Varicela): Respirador N95 obligatorio antes de entrar a la habitación.',
          'Aislamiento por Gotas (Meningitis meningocócica, Gripe): Mascarilla quirúrgica de tres pliegues.',
          'Si se traslada a un paciente con TBC pulmonar a rayos X, el paciente debe portar mascarilla quirúrgica simple (no N95 con válvula) para contener sus secreciones.'
        ],
        clinicalPearl: 'El personal de salud usa el respirador N95 para protegerse de inhalar aerosoles, pero al paciente con tuberculosis que sale a un examen se le coloca mascarilla quirúrgica convencional para retener las gotas al toser.',
        checkQuestion: {
          question: '¿Qué tipo de precaución y equipo de protección respiratoria es obligatorio al ingresar a la unidad de un paciente con Tuberculosis Pulmonar BK (+++)?',
          options: [
            'Precaución por gotas y mascarilla simple de tela',
            'Precaución por vía aérea y respirador N95 / FFP2',
            'Solo uso de guantes de látex',
            'No requiere medidas especiales si el paciente no tose'
          ],
          correctIndex: 1,
          explanation: 'Mycobacterium tuberculosis se transmite por núcleos de gotitas aerosoles (< 5 micras) que permanecen suspendidos en el aire, exigiendo precaución aérea y respirador N95.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Segregación de Residuos Sólidos Hospitalarios (NTS N° 144-MINSA)',
        duration: '6 horas académicas',
        summary: 'Clasificación en Clase A (Biocontaminados), Clase B (Especiales) y Clase C (Comunes) en el punto de generación.',
        content: [
          'Según la NTS N° 144-MINSA/2018/DIGESA ("Gestión Integral y Manejo de Residuos Sólidos en Establecimientos de Salud"), los residuos se clasifican en tres clases:',
          'Clase A - Residuos Biocontaminados (BOLSA ROJA): Aquellos generados en la atención al paciente que contienen agentes infecciosos o fluidos corporales (gasas con sangre, sondas, guantes contaminados, bolsas de transfusión, cultivos, piezas anatómicas).',
          'Clase B - Residuos Especiales (BOLSA AMARILLA): Residuos con características físicas y químicas de potencial peligro por ser corrosivos, inflamables, tóxicos o citostáticos (frascos de medicamentos vencidos o parcialmente usados, reactivos, termómetros rotos). Clase C - Residuos Comunes (BOLSA NEGRA): Papeles administrativos, envolturas de jeringas sin contaminar, cartones y restos de oficina.'
        ],
        keyPoints: [
          'Bolsa Roja (Clase A): Residuos biocontaminados con sangre, secreciones o contacto directo con fluidos.',
          'Bolsa Amarilla (Clase B): Residuos químicos peligrosos, farmacéuticos y citostáticos.',
          'Bolsa Negra (Clase C): Envolturas limpias de insumos, papel administrativo y residuos similares a los domésticos.'
        ],
        clinicalPearl: 'El empaque de papel o plástico de una jeringa nueva que abres durante la preparación de medicamentos en el tópico (sin contacto con fluidos ni paciente) se descarta en Bolsa Negra (Residuo Común), no en Bolsa Roja.',
        checkQuestion: {
          question: 'De acuerdo con la NTS N° 144-MINSA, ¿en qué bolsa debe segregarse una gasa empapada con secreción purulenta tras la curación de una herida infectada?',
          options: [
            'Bolsa Negra (Clase C - Común)',
            'Bolsa Amarilla (Clase B - Especial)',
            'Bolsa Roja (Clase A - Biocontaminado)',
            'Contenedor rígido de vidrio'
          ],
          correctIndex: 2,
          explanation: 'Todo material que ha entrado en contacto con fluidos corporales, sangre o secreciones de pacientes corresponde a Clase A (Biocontaminado - Bolsa Roja).'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Prevención de Accidentes Punzocortantes y Manejo Post-Exposición',
        duration: '6 horas académicas',
        summary: 'Uso correcto del contenedor rígido y protocolo inmediato ante accidentes laborales con agujas o fluidos.',
        content: [
          'Los objetos punzocortantes (agujas hipodérmicas, hojas de bisturí, lancetas, catéteres con mandril metálico, ampollas de vidrio rotas) pertenecen a la Clase A (Tipo A.5) y deben desecharse inmediatamente después de su uso en recipientes rígidos resistentes a las punciones.',
          'Está terminantemente PROHIBIDO reencapuchar las agujas utilizadas con ambas manos, doblarlas o quebrarlas. El contenedor rígido solo debe llenarse hasta las tres cuartas partes (3/4 o 75% de su capacidad) límite marcado, momento en el cual se sella definitivamente.',
          'Ante un accidente laboral por pinchazo o salpicadura: 1) Lavar inmediatamente la zona con abundante agua y jabón (sin exprimir ni usar lejía o cáusticos sobre la herida), 2) Notificar de inmediato al jefe de turno / epidemiología, 3) Evaluar serología de la fuente (VIH, VHB, VHC) e iniciar Profilaxis Post-Exposición (PPE) idealmente dentro de las primeras 2 horas (máximo 72 horas).'
        ],
        keyPoints: [
          'Límite máximo de llenado del contenedor rígido de punzocortantes: 3/4 partes (75%).',
          'Nunca reencapuchar agujas tras una venopunción.',
          'La Profilaxis Post-Exposición (PPE) antirretroviral para VIH tiene máxima eficacia si se inicia en las primeras 2 a 24 horas.'
        ],
        clinicalPearl: 'Ante un pinchazo accidental con aguja contaminada, jamás exprimas el dedo ni apliques hipoclorito (lejía): exprimir produce microtraumatismos que facilitan la entrada viral a los capilares; solo lava con agua corriente y jabón antiséptico.',
        checkQuestion: {
          question: '¿Hasta qué nivel de su capacidad total debe llenarse como máximo el recipiente rígido para descarte de material punzocortante según norma técnica?',
          options: ['Hasta el 50% (la mitad)', 'Hasta las 3/4 partes (75%) de su capacidad', 'Hasta el 100% (al tope)', 'Hasta que desborde'],
          correctIndex: 1,
          explanation: 'La NTS N° 144-MINSA establece que los recipientes rígidos para punzocortantes solo deben llenarse hasta las 3/4 partes (75%) de su volumen para evitar accidentes al descartar.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: 'Según la NTS N° 144-MINSA/2018/DIGESA, los residuos farmacéuticos compuestos por medicamentos vencidos, deteriorados o parcialmente utilizados se clasifican como:',
        options: [
          'Clase A - Biocontaminados (Bolsa Roja)',
          'Clase B - Especiales (Bolsa Amarilla)',
          'Clase C - Comunes (Bolsa Negra)',
          'Residuos reciclables'
        ],
        correctIndex: 1,
        rationale: 'Los residuos químicos peligrosos, farmacéuticos y citostáticos corresponden a la Clase B (Residuos Especiales - Bolsa Amarilla).'
      },
      {
        id: 'q2',
        question: '¿Cuáles de los 5 Momentos para la Higiene de Manos de la OMS están dirigidos específicamente a proteger al PACIENTE de gérmenes?',
        options: [
          'Momentos 1 y 2 (Antes de tocar al paciente y Antes de realizar una tarea limpia/aséptica)',
          'Momentos 3 y 4 únicamente',
          'Solo el Momento 5 (Después del contacto con el entorno)',
          'Ninguno, todos protegen solo al trabajador'
        ],
        correctIndex: 0,
        rationale: 'Los momentos "Antes" (1 y 2) evitan transmitir microorganismos exógenos o propios al paciente y a sus sitios estériles.'
      },
      {
        id: 'q3',
        question: 'Si usted sufre un accidente laboral por pinchazo con una aguja utilizada en un paciente, ¿cuál es la primera acción inmediata en el lugar del incidente?',
        options: [
          'Exprimir fuertemente la herida y sumergir el dedo en hipoclorito de sodio puro',
          'Lavar inmediatamente la zona con abundante agua y jabón y reportar para evaluación de PPE',
          'Esperar 48 horas para ver si se inflama la zona antes de avisar',
          'Cauterizar la herida con alcohol yodado'
        ],
        correctIndex: 1,
        rationale: 'El protocolo indica lavado inmediato con agua y jabón (sin frotar agresivamente ni exprimir) y notificación inmediata para profilaxis dentro de las primeras horas.'
      },
      {
        id: 'q4',
        question: '¿En qué bolsa se debe desechar el envoltorio de papel limpio de un par de guantes estériles que acaba de abrir antes de realizar un procedimiento?',
        options: ['Bolsa Roja', 'Bolsa Amarilla', 'Bolsa Negra (Residuo Común - Clase C)', 'Contenedor rígido'],
        correctIndex: 2,
        rationale: 'Los empaques de insumos que no han tenido contacto con el paciente ni con fluidos corporales son residuos comunes (Clase C - Bolsa Negra).'
      },
      {
        id: 'q5',
        question: '¿Qué enfermedades exigen obligatoriamente Aislamiento por Vía Aérea (uso de respirador N95 y habitación con recambio de aire)?',
        options: [
          'Infección urinaria por E. coli y celulitis',
          'Tuberculosis pulmonar activa, Sarampión y Varicela',
          'Gastroenteritis aguda por Rotavirus',
          'Faringoamigdalitis estreptocócica'
        ],
        correctIndex: 1,
        rationale: 'Tuberculosis pulmonar, Sarampión y Varicela se transmiten por aerosoles (< 5 micras) y requieren precaución de vía aérea con N95.'
      }
    ]
  },
  {
    id: 'cadena-frio-vacunacion',
    code: 'EC-CUR-004',
    title: 'Cadena de Frío y Esquema Nacional de Vacunación',
    subtitle: 'Conservación termoestable (+2 °C a +8 °C), preparación de termos KST, política de frascos abiertos y esquema NTS N° 196-MINSA.',
    category: 'Inmunizaciones & Salud Pública',
    academicHours: 24,
    credits: 1.5,
    level: 'Especialización Clínica',
    normativaBase: 'NTS N° 196-MINSA/DGIESP / NTS N° 136-MINSA (Cadena de Frío)',
    badgeColor: 'from-cyan-500 to-blue-600',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Termoestabilidad y Rango Oficial de Cadena de Frío (+2 °C a +8 °C)',
        duration: '6 horas académicas',
        summary: 'Niveles de la cadena de frío, refrigeradores Ice-Lined, data logger y sensibilidad de las vacunas al calor y congelación.',
        content: [
          'La Cadena de Frío es el sistema logístico y técnico que garantiza la conservación inmunogénica de las vacunas desde su fabricación hasta su administración al usuario final.',
          'A nivel local (establecimientos de salud y vacunatorios), TODAS las vacunas del Esquema Nacional deben conservarse estrictamente en el rango de temperatura de +2 °C a +8 °C, siendo la temperatura óptima de seguridad +4 °C a +6 °C.',
          'Las vacunas que contienen adyuvantes de sales de aluminio (Pentavalente, DPT, Dt,Tdap, HvB, VPH, Neumococo) e inactivadas (IPV, Influenza) son extremadamente sensibles a la CONGELACIÓN (< 0 °C), la cual destruye irreversiblemente su potencia inmunológica por floculación del adyuvante.'
        ],
        keyPoints: [
          'Rango normativo local de conservación de vacunas: +2 °C a +8 °C.',
          'Registro de temperatura: obligatorio 2 veces al día (entrada y salida) en la hoja de control visible, además del Data Logger continuo.',
          'Prueba de Agitación (Shake Test): permite detectar si un frasco con adyuvante de aluminio sufrió congelación accidental.'
        ],
        clinicalPearl: 'Un solo episodio de exposición a < 0 °C inactiva de forma permanente a la vacuna Pentavalente, DPT o HvB; por ello jamás deben colocarse en contacto directo con paquetes fríos recién sacados del congelador sin antes acondicionarlos.',
        checkQuestion: {
          question: '¿Cuál es el rango oficial de temperatura para la conservación de todas las vacunas en los refrigeradores de nivel local (establecimientos de salud) según el MINSA?',
          options: ['-15 °C a -25 °C', '0 °C a +2 °C', '+2 °C a +8 °C', '+8 °C a +15 °C'],
          correctIndex: 2,
          explanation: 'En el nivel operativo local, todas las vacunas se conservan estrictamente entre +2 °C y +8 °C.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Acondicionamiento de Paquetes Fríos y Manejo de Termos Porta Vacunas',
        duration: '6 horas académicas',
        summary: 'Procedimiento técnico de exudación ("sudado") de paquetes fríos y vida fría útil de termos KST y cajas transportadoras.',
        content: [
          'Los paquetes fríos para termos porta vacunas deben contener exclusivamente AGUA (está prohibido el uso de paquetes eutécticos con gel azul o soluciones salinas porque descongelan a temperaturas bajo cero y congelan las vacunas).',
          'El acondicionamiento consiste en retirar los paquetes fríos del congelador y colocarlos sobre una superficie limpia a temperatura ambiente hasta que desaparezca la escarcha, se forme condensación de agua en la superficie ("sudado") y al agitarlos se escuche y observe el movimiento del agua líquida junto al hielo en su interior (0 °C).',
          'Solo cuando el paquete frío tiene agua moviéndose en su interior puede introducirse al termo KST o caja transportadora, colocando en el centro el vaso de plástico protector con las vacunas y el Data Logger.'
        ],
        keyPoints: [
          'Nunca introducir paquetes fríos con escarcha directamente al termo.',
          'Verificar auditiva y visualmente la presencia de líquido libre dentro del paquete frío antes de armar el termo.',
          'Los diluyentes deben estar a la misma temperatura (+2 °C a +8 °C) que el liofilizado al momento de reconstituir.'
        ],
        clinicalPearl: 'Reconstituir una vacuna viva atenuada (como SPR o Antiamarílica) con un diluyente que estaba caliente a temperatura ambiente produce choque térmico e inactiva las cepas virales.',
        checkQuestion: {
          question: '¿Cuándo se considera que un paquete frío de agua está correctamente "acondicionado" para colocarse dentro del termo porta vacunas?',
          options: [
            'Apenas sale del congelador a -20 °C con escarcha blanca',
            'Cuando al agitarlo se escucha y observa movimiento de agua líquida en su interior (0 °C) sin escarcha',
            'Cuando el hielo se ha derretido al 100% y está tibio',
            'Cuando se le agrega sal encima para enfriar más rápido'
          ],
          correctIndex: 1,
          explanation: 'El paquete frío está acondicionado a 0 °C cuando desaparece la escarcha y al moverlo se percibe agua líquida desplazándose dentro.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Esquema Nacional de Vacunación del Menor de 5 Años (NTS N° 196-MINSA)',
        duration: '6 horas académicas',
        summary: 'Cronograma oficial desde el recién nacido hasta los 4 años, dosis, vías de administración, calibres de aguja y sitios anatómicos.',
        content: [
          'Recién Nacido: Vacuna BCG (0.05 ml o 0.1 ml según inserto, vía Intradérmica en región deltoidea derecha, aguja 27G x 1/2") y Vacuna Hepatitis B pediátrica (0.5 ml vía Intramuscular en tercio medio del músculo vasto externo del muslo, aguja 25G x 5/8") dentro de las primeras 12 a 24 horas.',
          'A los 2, 4 y 6 meses: Pentavalente (DPT-HvB-Hib, 0.5 ml IM vasto externo), Antipolio Inactivada IPV (2, 4, 6 y 18 meses, 0.5 ml IM), Rotavirus (2 y 4 meses, 1.5 ml vía Oral; edad máxima para 1ra dosis: 5 meses 29 días; para 2da dosis: 7 meses 29 días) y Antineumocócica (2, 4 y 12 meses, 0.5 ml IM).',
          'Al año de edad (12 meses): SPR 1ra dosis (0.5 ml vía Subcutánea en región deltoidea, aguja 25G x 5/8"), Varicela (12 meses, 0.5 ml SC), Influenza pediátrica. A los 15 meses: Antiamarílica AMA (0.5 ml SC) y Hepatitis A (0.5 ml IM). A los 18 meses: 1er refuerzo DPT, IPV y 2da dosis de SPR. A los 4 años: 2do refuerzo DPT y APO.'
        ],
        keyPoints: [
          'Menores de 2 años (lactantes): sitio de elección IM es el tercio medio de la cara anterolateral externa del muslo (músculo vasto externo).',
          'Mayores de 2 años y adultos: sitio de elección IM es el músculo deltoides.',
          'Vacunas Subcutáneas (SC, ángulo de 45°): SPR, SR, Varicela y Antiamarílica (AMA).'
        ],
        clinicalPearl: 'La vacuna contra Rotavirus tiene límites de edad estrictos e impostergables: jamás iniciar la primera dosis a partir de los 6 meses cumplidos ni aplicar la segunda dosis a partir de los 8 meses cumplidos.',
        checkQuestion: {
          question: '¿Cuál es la vía de administración, dosis y ángulo de punción correctos para la vacuna SPR (Sarampión, Paperas y Rubéola) a los 12 y 18 meses?',
          options: [
            'Intradérmica, 0.1 ml, ángulo de 15°',
            'Subcutánea, 0.5 ml en región deltoidea, ángulo de 45°',
            'Intramuscular profunda en glúteo, 1 ml, ángulo de 90°',
            'Vía oral, 2 gotas'
          ],
          correctIndex: 1,
          explanation: 'La vacuna SPR es una vacuna viral viva atenuada que se administra por vía Subcutánea (45°) a dosis de 0.5 ml en la región deltoidea.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Tiempo de Uso de Frascos Multidosis Abiertos y ESAVI',
        duration: '6 horas académicas',
        summary: 'Política de frascos abiertos (6 horas vs 28 días) y vigilancia de Eventos Supuestamente Atribuidos a la Vacunación o Inmunización.',
        content: [
          'Las vacunas liofilizadas reconstituidas (BCG, SPR, SR, Antiamarílica AMA) NO contienen conservantes antimicrobianos; por lo tanto, una vez reconstituidas en un frasco multidosis, su tiempo máximo de uso es de 6 HORAS (o al finalizar la jornada de vacunación), debiendo desecharse al cumplirse ese plazo por riesgo de contaminación bacteriana y síndrome de shock tóxico.',
          'En cambio, las vacunas líquidas multidosis que contienen conservante (como DPT, Dt, Td, HvB, IPV, APO, Influenza) pueden utilizarse hasta por 4 SEMANAS (28 días) dentro del establecimiento de salud siempre que no hayan vencido, se haya empleado técnica aséptica estricta, el tapón no haya sido sumergido en agua y se hayan mantenido continuamente entre +2 °C y +8 °C (rotulando fecha y hora de apertura).',
          'Todo ESAVI Severo (anafilaxia, convulsiones, absceso tóxico, parálisis flácida) es de notificación obligatoria e inmediata dentro de las primeras 24 horas al sistema de vigilancia epidemiológica.'
        ],
        keyPoints: [
          'Vacunas liofilizadas reconstituidas (BCG, AMA, SPR, SR): máximo 6 horas abiertas.',
          'Vacunas líquidas multidosis en intramuro (DPT, Td, HvB, Influenza): hasta 28 días si cumplen cadena de frío y asepsia.',
          'Tener siempre lista la bandeja de emergencia con Adrenalina 1:1000 (0.01 mg/kg IM) ante una reacción anafiláctica.'
        ],
        clinicalPearl: 'En actividades extramurales (brigadas casa por casa), todo frasco multidosis que haya sido abierto durante el recorrido en el termo debe descartarse al finalizar la jornada diaria.',
        checkQuestion: {
          question: 'Una vez reconstituido un frasco multidosis de vacuna BCG o Antiamarílica (AMA), ¿cuál es el tiempo máximo que puede utilizarse conservado entre +2 °C y +8 °C?',
          options: ['Máximo 6 horas', 'Hasta 7 días', 'Hasta 28 días (4 semanas)', 'Hasta la fecha de vencimiento del lote'],
          correctIndex: 0,
          explanation: 'Las vacunas liofilizadas reconstituidas carecen de conservantes y deben descartarse obligatoriamente a las 6 horas de su reconstitución.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Qué vacunas corresponden administrar al Recién Nacido dentro de las primeras 12 a 24 horas de vida según el Esquema Nacional del MINSA?',
        options: [
          'Pentavalente y Rotavirus',
          'BCG (Intradérmica) y Hepatitis B pediátrica (Intramuscular)',
          'SPR y Antiamarílica',
          'IPV y Neumococo'
        ],
        correctIndex: 1,
        rationale: 'Al recién nacido se le administra BCG (vía ID en deltoides derecho) y HvB monodosis (vía IM en vasto externo).'
      },
      {
        id: 'q2',
        question: '¿Cuál de las siguientes vacunas se daña irreversiblemente si se expone a temperaturas de congelación (< 0 °C)?',
        options: [
          'Vacuna Pentavalente y Vacuna Hepatitis B (contienen adyuvante de aluminio)',
          'Ninguna vacuna se daña por congelación',
          'Solo el diluyente de agua destilada',
          'Cualquier vacuna mejora su potencia si se congela en el nivel local'
        ],
        correctIndex: 0,
        rationale: 'Las vacunas con adyuvante de aluminio (Pentavalente, DPT, HvB, Neumococo, VPH) sufren floculación y pierden su eficacia si se congelan.'
      },
      {
        id: 'q3',
        question: '¿Cuál es el sitio anatómico de elección para la administración de vacunas por vía Intramuscular (IM) en un lactante de 4 meses de edad?',
        options: [
          'Cuadrante superior externo del glúteo',
          'Tercio medio de la cara anterolateral externa del muslo (músculo vasto externo)',
          'Músculo deltoides',
          'Región periumbilical'
        ],
        correctIndex: 1,
        rationale: 'En menores de 2 años el músculo vasto externo del muslo tiene mayor masa muscular y carece de troncos nerviosos mayores como el nervio ciático.'
      },
      {
        id: 'q4',
        question: '¿Cuál es la edad máxima permitida en el esquema nacional para administrar la PRIMERA dosis de la vacuna contra el Rotavirus?',
        options: [
          'Hasta los 5 meses con 29 días',
          'Hasta los 12 meses',
          'Hasta los 2 años',
          'Hasta los 4 años'
        ],
        correctIndex: 0,
        rationale: 'La primera dosis de Rotavirus se aplica a los 2 meses y como máximo hasta los 5 meses y 29 días; la segunda hasta los 7 meses y 29 días.'
      },
      {
        id: 'q5',
        question: 'Al abrir un frasco multidosis de vacuna DPT o Td en el vacunatorio del establecimiento (intramuro), ¿cuánto tiempo puede utilizarse si se mantiene entre +2 °C y +8 °C con técnica aséptica?',
        options: [
          'Solo 1 hora',
          'Máximo 6 horas',
          'Hasta 4 semanas (28 días) debidamente rotulado con fecha y hora de apertura',
          '6 meses'
        ],
        correctIndex: 2,
        rationale: 'Las vacunas líquidas multidosis con conservante pueden usarse hasta por 28 días en intramuro cumpliendo los requisitos de la OMS/MINSA.'
      }
    ]
  },
  {
    id: 'farmacologia-efectos-adversos',
    code: 'EC-CUR-005',
    title: 'Farmacología Básica y Efectos Adversos Frecuentes',
    subtitle: 'Farmacocinética, farmacodinamia, vigilancia de RAM, antídotos de urgencia y cuidados de enfermería en grupos terapéuticos clave.',
    category: 'Farmacoterapia & Seguridad',
    academicHours: 24,
    credits: 1.5,
    level: 'Intermedio - Avanzado',
    normativaBase: 'Sistema Peruano de Farmacovigilancia DIGEMID / Vademécum Clínico',
    badgeColor: 'from-amber-500 to-yellow-600',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Farmacocinética (LADME) y Farmacodinamia Aplicada al Cuidado',
        duration: '6 horas académicas',
        summary: 'Liberación, Absorción, Distribución, Metabolismo hepático y Excreción renal; vida media y rango terapéutico.',
        content: [
          'El proceso LADME describe el recorrido del fármaco dentro del organismo: Liberación de la forma farmacéutica, Absorción hacia la circulación sistémica (la vía endovenosa tiene biodisponibilidad del 100% al no requerir absorción), Distribución unida a proteínas plasmáticas (albúmina), Metabolismo principalmente hepático (sistema citocromo P450) y Excreción predominantemente renal o biliar.',
          'En pacientes con insuficiencia renal aguda o crónica (TFG disminuida) o adultos mayores, los fármacos de eliminación renal como los aminoglucósidos (Amikacina, Gentamicina) y la Vancomicina se acumulan rápidamente, exigiendo ajuste de dosis o ampliación del intervalo horario.',
          'En pacientes con hipoalbuminemia severa (desnutrición, cirrosis, síndrome nefrótico), aumenta la fracción libre del fármaco en sangre, potenciando el riesgo de toxicidad incluso con dosis habituales.'
        ],
        keyPoints: [
          'Biodisponibilidad EV = 100% (inicio de acción inmediato, irreversible una vez inyectado).',
          'Órgano principal de biotransformación (metabolismo): Hígado | Órgano principal de excreción: Riñón.',
          'Fármacos de estrecho margen terapéutico: Digoxina, Fenitoína, Litio, Warfarina, Aminoglucósidos.'
        ],
        clinicalPearl: 'Antes de administrar Amikacina, Gentamicina o Vancomicina, verifica siempre la diuresis horaria (> 0.5 ml/kg/h) y el último valor de creatinina sérica del paciente.',
        checkQuestion: {
          question: '¿Qué vía de administración garantiza una biodisponibilidad del 100% al ingresar directamente al torrente circulatorio sin pasar por el efecto de primer paso hepático?',
          options: ['Vía Oral (VO)', 'Vía Endovenosa (EV)', 'Vía Subcutánea (SC)', 'Vía Tópica'],
          correctIndex: 1,
          explanation: 'La vía endovenosa deposita el 100% del fármaco directamente en la circulación sistémica.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Analgésicos (AINEs y Opioides): Vigilancia Clínica y Efectos Adversos',
        duration: '6 horas académicas',
        summary: 'Mecanismo de acción, nefrotoxicidad/gastrolesividad por AINEs y depresión respiratoria por opioides.',
        content: [
          'Los Antiinflamatorios No Esteroideos (Ketorolaco, Metamizol, Diclofenaco, Ibuprofeno) inhiben las enzimas ciclooxigenasas (COX-1 y COX-2), reduciendo la síntesis de prostaglandinas. Sus principales reacciones adversas son la gastropatía erosiva/hemorragia digestiva alta, la lesión renal aguda (especialmente en pacientes deshidratados o hipovolémicos) y el broncoespasmo en alérgicos.',
          'El Metamizol (Dipirona) es un potente analgésico y antipirético; su infusión endovenosa rápida provoca hipotensión arterial severa y vasodilatación brusca, por lo que debe administrarse diluido y lento en 15 a 30 minutos.',
          'Los opioides (Morfina, Fentanilo, Tramadol) actúan sobre los receptores mu del sistema nervioso central. Sus efectos adversos clásicos incluyen náuseas/vómitos (muy frecuentes con Tramadol rápido), estreñimiento, retención urinaria, miosis pupilar y el más grave: depresión respiratoria (FR < 10 rpm).'
        ],
        keyPoints: [
          'El uso de Ketorolaco EV no debe exceder los 5 días continuos por alto riesgo de sangrado digestivo y falla renal.',
          'Diluir el Tramadol en 100 ml de NaCl 0.9% e infundir en 30-60 min (a menudo asociado a Dimenhidrinato o Metoclopramida) previene el vómito central.',
          'Vigilar frecuencia respiratoria, nivel de sedación y saturación antes y después de administrar Morfina o Fentanilo.'
        ],
        clinicalPearl: 'La tríada clásica de intoxicación aguda por opioides (Morfina/Fentanilo) es: Depresión respiratoria (bradipnea/apnea), Miosis puntiforme ("pupilas en punta de alfiler") y Depresión del sensorio (coma).',
        checkQuestion: {
          question: '¿Cuál es el efecto adverso hemodinámico más frecuente si se administra Metamizol (Dipirona) por vía endovenosa de forma rápida y sin diluir?',
          options: [
            'Crisis hipertensiva severa',
            'Hipotensión arterial brusca y diaforesis',
            'Hiperglucemia aguda',
            'Estreñimiento crónico'
          ],
          correctIndex: 1,
          explanation: 'La administración EV rápida de Metamizol produce vasodilatación periférica aguda e hipotensión arterial severa.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Antimicrobianos y Reacciones Adversas Críticas',
        duration: '6 horas académicas',
        summary: 'Alergia a betalactámicos, nefro/ototoxicidad por aminoglucósidos, prolongación del QT y colitis pseudomembranosa.',
        content: [
          'Los antibióticos betalactámicos (Penicilinas, Cefalosporinas, Carbapenémicos) son la primera causa de reacciones alérgicas medicamentosas y shock anafiláctico. Existe alrededor de un 5-10% de reactividad cruzada entre alergia severa a penicilinas y cefalosporinas de primera generación.',
          'Los aminoglucósidos (Amikacina, Gentamicina) producen nefrotoxicidad (reversible si se detecta a tiempo) y ototoxicidad coclear y vestibular (a menudo irreversible, manifestada por tinnitus, hipoacusia o vértigo).',
          'Las fluoroquinolonas (Ciprofloxacino, Levofloxacino) y macrólidos (Azitromicina, Claritromicina) pueden prolongar el intervalo QT en el electrocardiograma y desencadenar arritmias ventriculares (Torsades de Pointes). Además, las quinolonas conllevan riesgo de tendinitis y rotura del tendón de Aquiles.'
        ],
        keyPoints: [
          'Indagar antecedentes de alergia a penicilinas antes de administrar cualquier betalactámico (Ceftriaxona, Ampicilina, Meropenem).',
          'Vigilar aparición de rash maculopapular, prurito, angioedema o broncoespasmo en los primeros 30 minutos de la primera dosis.',
          'Diarrea acuosa fétida tras uso prolongado de Clindamicina o Ceftriaxona obliga a descartar infección por Clostridioides difficile.'
        ],
        clinicalPearl: 'Nunca administres Potasio, Calcio ni Amikacina en bolo directo: la Amikacina en bolo rápido puede producir bloqueo neuromuscular agudo y parálisis respiratoria por inhibición presináptica de acetilcolina.',
        checkQuestion: {
          question: '¿Cuáles son los dos órganos diana de toxicidad clásica de los antibióticos aminoglucósidos como la Amikacina y la Gentamicina?',
          options: [
            'Corazón y pulmón',
            'Riñón (nefrotoxicidad) y oído interno VIII par craneal (ototoxicidad)',
            'Tiroides y páncreas',
            'Córnea y cristalino'
          ],
          correctIndex: 1,
          explanation: 'Los aminoglucósidos se acumulan en la corteza renal y en la endolinfa/perilinfa del oído interno, causando nefrotoxicidad y ototoxicidad.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Antídotos Específicos en Urgencias y Farmacovigilancia',
        duration: '6 horas académicas',
        summary: 'Parejas fármaco-antídoto indispensables en el coche de paro y notificación de sospechas de RAM.',
        content: [
          'En todo servicio de hospitalización y emergencia, el profesional de enfermería debe conocer de memoria los antídotos específicos ante sobredosis o intoxicaciones medicamentosas:',
          '1) Intoxicación por Opioides (Morfina, Fentanilo, Tramadol) -> NALOXONA (0.4 mg a 2 mg EV/IM/SC cada 2-3 min). 2) Intoxicación por Benzodiacepinas (Midazolam, Diazepam) -> FLUMAZENIL (0.2 mg EV en 15 seg). 3) Sobredosis de Paracetamol (Acetaminofén) -> N-ACETILCISTEÍNA (previene necrosis hepática).',
          '4) Sobredosis de Heparina No Fraccionada -> SULFATO DE PROTAMINA. 5) Sobredosis de Warfarina -> VITAMINA K (Fitomenadiona) y Plasma Fresco Congelado. 6) Intoxicación por Organofosforados / Carbamatos -> ATROPINA. 7) Síndrome extrapiramidal agudo por Metoclopramida o Haloperidol -> BIPERIDENO.'
        ],
        keyPoints: [
          'Opioides -> Naloxona | Benzodiacepinas -> Flumazenil | Paracetamol -> N-Acetilcisteína.',
          'Heparina -> Sulfato de Protamina | Warfarina -> Fitomenadiona (Vitamina K).',
          'Distonía aguda por Metoclopramida (crisis oculógira, tortícolis) -> Biperideno o Difenhidramina EV/IM.'
        ],
        clinicalPearl: 'La vida media de la Naloxona (30-60 min) es más corta que la de muchos opioides como la Morfina; por ello, un paciente que despierta tras Naloxona puede volver a deprimirse 45 minutos después ("renarcotización") y requiere monitoreo continuo.',
        checkQuestion: {
          question: '¿Cuál es el antídoto específico para revertir la depresión respiratoria aguda causada por sobredosis de Fentanilo o Morfina?',
          options: ['Flumazenil', 'Naloxona', 'N-Acetilcisteína', 'Atropina'],
          correctIndex: 1,
          explanation: 'La Naloxona es un antagonista competitivo puro de los receptores opioides mu que revierte rápidamente la depresión respiratoria.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cuál es el antídoto específico para revertir la sedación excesiva o depresión respiratoria inducida por Benzodiacepinas (como Midazolam o Diazepam)?',
        options: ['Naloxona', 'Flumazenil', 'Protamina', 'Gluconato de Calcio'],
        correctIndex: 1,
        rationale: 'El Flumazenil es el antagonista competitivo del receptor GABA-A para benzodiacepinas.'
      },
      {
        id: 'q2',
        question: 'Un paciente joven recibe Metoclopramida 10 mg EV rápido y a los 20 minutos presenta contracción involuntaria del cuello (tortícolis), rigidez mandibular y desviación de la mirada hacia arriba (crisis oculógira). ¿Cómo se denomina esta reacción adversa?',
        options: [
          'Shock séptico',
          'Reacción extrapiramidal (distonía aguda) por bloqueo dopaminérgico',
          'Síndrome del Hombre Rojo',
          'Hipoglucemia reactiva'
        ],
        correctIndex: 1,
        rationale: 'La Metoclopramida atraviesa la barrera hematoencefálica y bloquea receptores D2 centrales, pudiendo causar síntomas extrapiramidales agudos.'
      },
      {
        id: 'q3',
        question: '¿Qué medicamento es el antídoto hepatoprotector específico ante una intoxicación aguda por Paracetamol (Acetaminofén)?',
        options: ['Vitamina K', 'N-Acetilcisteína', 'Bicarbonato de sodio', 'Sulfato de magnesio'],
        correctIndex: 1,
        rationale: 'La N-Acetilcisteína regenera los depósitos hepáticos de glutatión e inactiva el metabolito tóxico NAPQI del paracetamol.'
      },
      {
        id: 'q4',
        question: '¿Cuál es el principal riesgo de administrar Ketorolaco endovenoso por más de 5 días consecutivos, especialmente en adultos mayores?',
        options: [
          'Hemorragia digestiva alta y lesión renal aguda',
          'Ototoxicidad irreversible',
          'Fibrosis pulmonar',
          'Hipotiroidismo'
        ],
        correctIndex: 0,
        rationale: 'El Ketorolaco inhibe potentemente la síntesis de prostaglandinas gastroprotectoras y vasodilatadoras de la arteriola aferente renal.'
      },
      {
        id: 'q5',
        question: '¿Qué parámetro clínico es prioritario evaluar antes de administrar una dosis pautada de Morfina endovenosa?',
        options: [
          'Perímetro abdominal',
          'Frecuencia respiratoria (asegurar FR > 12 rpm), saturación de O2 y nivel de conciencia',
          'Reflejo rotuliano únicamente',
          'Glucemia capilar'
        ],
        correctIndex: 1,
        rationale: 'Por el riesgo de depresión del centro respiratorio bulbar, siempre debe verificarse FR, SpO2 y estado de alerta.'
      }
    ]
  },
  {
    id: 'accesos-vasculares-flebitis',
    code: 'EC-CUR-006',
    title: 'Cuidados y Manejo de Accesos Vasculares y Flebitis',
    subtitle: 'Selección de calibre de catéter (14G a 24G), inserción aséptica, paquetes Bundle de CVC, escala de Maddox y manejo de extravasación.',
    category: 'Procedimientos & UCI',
    academicHours: 24,
    credits: 1.5,
    level: 'Esencial Hospitalario',
    normativaBase: 'Estándares INS (Infusion Nurses Society) / Guías de Prevención de ITS-CVC MINSA',
    badgeColor: 'from-purple-500 to-indigo-600',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Selección Anatómica y Calibres de Catéter Venoso Periférico (Gauge)',
        duration: '6 horas académicas',
        summary: 'Elección del menor calibre funcional (14G a 24G), anatomía venosa del miembro superior y técnica de venopunción aséptica.',
        content: [
          'El calibre de los catéteres venosos periféricos se mide en Gauge (G): a MAYOR número de Gauge, MENOR es el diámetro externo de la cánula. La directriz internacional INS indica seleccionar el catéter de menor calibre y longitud que permita administrar la terapia prescrita de forma segura, favoreciendo la hemodilución alrededor de la cánula.',
          'Código internacional de colores y flujos: 14G (Naranja, ~300 ml/min, trauma/shock), 16G (Gris, ~180 ml/min, cirugía mayor/politrauma), 18G (Verde, ~90 ml/min, transfusiones sanguíneas, medios de contraste e infusiones rápidas), 20G (Rosado, ~60 ml/min, hospitalización general adultos), 22G (Azul, ~36 ml/min, adultos mayores, venas frágiles, niños y antibióticos), 24G (Amarillo, ~20 ml/min, neonatos, pediatría y oncología).',
          'Se priorizan las venas distales del antebrazo (cefálica, basílica y mediana cubital), evitando zonas de flexión (muñeca y fosa antecubital salvo emergencias) y miembros con fístula arteriovenosa o vaciamiento ganglionar axilar.'
        ],
        keyPoints: [
          'A mayor número G, más delgado es el catéter (24G Amarillo es el más fino; 14G Naranja es el más grueso).',
          'Antisepsia cutánea de elección: Clorhexidina alcohólica al 2% dejando secar 30 segundos antes de punzar.',
          'Fijar con apósito transparente semipermeable estéril para visualizar permanentemente el punto de inserción.'
        ],
        clinicalPearl: 'Para administrar fármacos irritantes como antibióticos en un adulto hospitalizado estable, un catéter 22G (Azul) en una vena gruesa del antebrazo causa menos flebitis mecánica y permite mejor flujo sanguíneo percatéter que un 18G forzado en una vena pequeña.',
        checkQuestion: {
          question: 'Según el código internacional de colores de catéteres periféricos, ¿qué calibre y color elegiría para un paciente adulto mayor con venas frágiles que requiere antibioticoterapia EV?',
          options: [
            'Catéter 14G (Naranja)',
            'Catéter 16G (Gris)',
            'Catéter 22G (Azul) o 24G (Amarillo)',
            'Aguja hipodérmica rígida 18G'
          ],
          correctIndex: 2,
          explanation: 'El calibre 22G (Azul) o 24G (Amarillo) reduce el trauma endotelial y la flebitis mecánica en venas frágiles.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Clasificación de Flebitis y Escala Visual de Maddox / INS',
        duration: '6 horas académicas',
        summary: 'Etiología mecánica, química y bacteriana; valoración por grados del 0 al 5 y conducta clínica inmediata.',
        content: [
          'La flebitis es la inflamación de la capa íntima de la vena. Se clasifica según su causa en: 1) Mecánica (calibre excesivo, fijación deficiente o sitio de flexión), 2) Química (fármacos vesicantes, pH extremo, osmolaridad > 600 mOsm/L o dilución insuficiente) y 3) Bacteriana/Infecciosa (deficiente antisepsia o contaminación de conectores).',
          'La Escala Visual de Maddox / INS puntúa el sitio de inserción de 0 a 5: Grado 0 (Sin síntomas, sitio sano), Grado 1 (Eritema en el sitio de punción con o sin dolor leve), Grado 2 (Dolor en el sitio de punción con eritema y/o edema), Grado 3 (Dolor, eritema, induración y cordón venoso palpable < 2.5 cm), Grado 4 (Cordón venoso palpable > 2.5 cm con drenaje purulento) y Grado 5 (Tromboflebitis franca con necrosis/fiebre).',
          'Actualmente no se recomienda el cambio rutinario cada 72-96 horas si el catéter funciona perfectamente y tiene Maddox 0 ("reemplazo según indicación clínica"), pero debe retirarse de inmediato ante Maddox ≥ 1.'
        ],
        keyPoints: [
          'Maddox Grado 0: Observar en cada turno | Maddox ≥ 1: Retirar inmediatamente el catéter.',
          'Maddox Grado 3: Aparece induración y cordón venoso palpable.',
          'Aplicar compresas tibias o emplasto de sulfato de magnesio / antiinflamatorio tópico local tras retirar una vía con flebitis química.'
        ],
        clinicalPearl: 'La presencia de un "cordón venoso palpable" endurecido a lo largo del trayecto de la vena clasifica automáticamente la flebitis como mínimo en Grado 3 de la escala de Maddox.',
        checkQuestion: {
          question: 'Al valorar la vía periférica de un paciente usted observa dolor, eritema, induración y palpa un cordón venoso endurecido en el trayecto de la vena. ¿A qué grado de la Escala de Maddox corresponde?',
          options: ['Grado 0', 'Grado 1', 'Grado 3', 'No es flebitis'],
          correctIndex: 2,
          explanation: 'El dolor + eritema + induración + cordón venoso palpable define el Grado 3 en la escala de Maddox.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Infiltración vs. Extravasación de Fármacos Vesicantes',
        duration: '6 horas académicas',
        summary: 'Diferenciación clínica y protocolo de actuación en 5 pasos para evitar necrosis tisular.',
        content: [
          'La INFILTRACIÓN es la salida accidental de una solución NO vesicante (ej. NaCl 0.9%, Dextrosa 5%) hacia el tejido subcutáneo circundante, produciendo edema local, piel fría, palidez y enlentecimiento del goteo.',
          'La EXTRAVASACIÓN es la fuga de un fármaco VESICANTE (sustancia capaz de producir ampollas, ulceración y necrosis tisular severa, como Noradrenalina, Dopamina, Gluconato de Calcio, Cloruro de Potasio concentrado, Fenitoína, Dextrosa al 10-50% o quimioterápicos) hacia el espacio perivascular.',
          'Protocolo ante Extravasación: 1) Detener inmediatamente la infusión (NO retirar la cánula todavía), 2) Conectar una jeringa de 5 ml al catéter y ASPIRAR la mayor cantidad posible del fármaco extravasado, 3) Retirar el catéter, 4) Elevar la extremidad afectada y delimitar el área con marcador, 5) Aplicar medidas térmicas específicas (frío seco en la mayoría de vesicantes; calor seco en alcaloides de la vinca y vasoconstrictores) y antídoto local (ej. Fentolamina subcutánea en extravasación de Noradrenalina).'
        ],
        keyPoints: [
          'Infiltración = líquido no vesicante | Extravasación = fármaco vesicante con riesgo de necrosis.',
          'Nunca retirar el catéter de inmediato en una extravasación sin antes intentar aspirar el fármaco residual por el lumen.',
          'En extravasación de Noradrenalina o Dopamina, jamás aplicar hielo (empeora la vasoconstricción e isquemia).'
        ],
        clinicalPearl: 'Antes de quitar un catéter donde se extravasó Noradrenalina o Gluconato de Calcio, aspira primero con una jeringa a través del mismo catéter para extraer el líquido acumulado en el bolsillo subcutáneo.',
        checkQuestion: {
          question: '¿Cuál es la primera acción inmediata tras detener la bomba de infusión al detectar una extravasación de Noradrenalina en una vía periférica?',
          options: [
            'Arrancar rápidamente el catéter y presionar fuerte con alcohol',
            'Dejar el catéter in situ unos segundos para aspirar con una jeringa de 5 ml la mayor cantidad posible de fármaco antes de retirarlo',
            'Aumentar el goteo de suero fisiológico por la misma vía para lavar el tejido',
            'Aplicar hielo directo sobre la zona isquémica'
          ],
          correctIndex: 1,
          explanation: 'El protocolo indica detener la infusión, aspirar a través del catéter para remover el vesicante del tejido subcutáneo y recién entonces retirar el catéter.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Mantenimiento de Catéter Venoso Central (CVC) y Prevención de ITS',
        duration: '6 horas académicas',
        summary: 'Paquete de medidas (Bundle) para prevenir Infecciones del Torrente Sanguíneo asociadas a CVC y manejo de lúmenes.',
        content: [
          'El Catéter Venoso Central (CVC) de múltiples lúmenes tiene una distribución estandarizada según el calibre interno y la posición de salida de cada lumen en la vena cava superior:',
          'Lumen DISTAL (generalmente calibre 16G, punta del catéter): medición de Presión Venosa Central (PVC), fluidoterapia de alto volumen, hemoderivados y coloides. Lumen MEDIAL (18G): reservado exclusivamente para Nutrición Parenteral Total (NPT) o en su defecto sedoanalgesia. Lumen PROXIMAL (18G): administración de aminas vasoactivas / inotrópicos, medicamentos intermitentes y extracción de muestras.',
          'El Bundle de mantenimiento de CVC exige: desinfección activa del conector libre de aguja ("Scrub the hub") con alcohol al 70% o clorhexidina alcohólica durante 15 segundos antes de cada acceso, curación con apósito transparente con almohadilla de clorhexidina cada 7 días (o cada 48h si tiene gasa), cambio de líneas de infusión cada 72-96h (y cada 24h en NPT o Propofol) y retiro temprano de catéteres innecesarios.'
        ],
        keyPoints: [
          'Lumen Distal: PVC y volumen | Lumen Medial: Nutrición Parenteral Total (exclusivo) | Lumen Proximal: Inotrópicos/Vasoactivos.',
          'Desinfectar los bioconectores durante 15 segundos antes de cada conexión ("Scrub the hub").',
          'Líneas de infusión de lípidos (NPT) o Propofol deben cambiarse obligatoriamente cada 12 a 24 horas.'
        ],
        clinicalPearl: 'Para permeabilizar (salinizar) un CVC con técnica de presión positiva (push-pause), utiliza siempre jeringas de 10 ml (o precargadas de 10 ml), nunca jeringas de 1 ml o 3 ml porque generan excesiva presión en libras por pulgada cuadrada (PSI) y pueden romper el catéter.',
        checkQuestion: {
          question: 'En un Catéter Venoso Central (CVC) trilumen, ¿qué lumen se destina de forma exclusiva para la infusión de Nutrición Parenteral Total (NPT)?',
          options: [
            'Lumen Distal',
            'Lumen Medial (y de uso exclusivo sin mezclar otros fármacos)',
            'Cualquier lumen compartido con antibióticos',
            'Vía periférica'
          ],
          correctIndex: 1,
          explanation: 'El lumen medial se reserva de manera exclusiva para la NPT a fin de prevenir la contaminación lipídica y las precipitaciones.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cuál es el antiséptico de primera elección según las guías internacionales (CDC / INS / MINSA) para la preparación de la piel antes de insertar un catéter venoso periférico o central?',
        options: [
          'Agua oxigenada al 10%',
          'Clorhexidina de base alcohólica al 2%',
          'Suero fisiológico estéril únicamente',
          'Violeta de genciana'
        ],
        correctIndex: 1,
        rationale: 'La clorhexidina alcohólica al 2% posee acción bactericida rápida y efecto residual prolongado superior al alcohol solo y a la povidona yodada.'
      },
      {
        id: 'q2',
        question: 'En relación con el calibre de los catéteres venosos periféricos (Gauge), señale la relación correcta entre número, color y uso:',
        options: [
          '24G es color naranja y es el de mayor diámetro para trauma shock',
          '18G es color verde (~90 ml/min), ideal para transfusión de hemoderivados y cirugía',
          '14G es color amarillo para neonatología',
          '22G es color gris para reanimación masiva'
        ],
        correctIndex: 1,
        rationale: 'El catéter 18G (Verde) permite alto flujo sin hemolizar los glóbulos rojos durante transfusiones sanguíneas.'
      },
      {
        id: 'q3',
        question: '¿Cada cuánto tiempo se debe realizar el cambio de curación de un Catéter Venoso Central (CVC) cubierto con apósito transparente semipermeable íntegro, limpio y seco?',
        options: [
          'Cada 6 horas',
          'Cada 7 días (o antes si se despega, humedece o presenta restos hemáticos)',
          'Cada 48 horas igual que una gasa simple',
          'Nunca se cambia hasta retirar el catéter'
        ],
        correctIndex: 1,
        rationale: 'El apósito transparente semipermeable estéril se cambia cada 7 días, mientras que si lleva gasa estéril bajo el apósito debe cambiarse cada 48 horas.'
      },
      {
        id: 'q4',
        question: '¿Con qué jeringa se debe realizar el lavado (flushing) de los lúmenes de un Catéter Venoso Central o PICC para evitar exceso de presión intraluminal y ruptura del catéter?',
        options: [
          'Jeringa de tuberculina de 1 ml',
          'Jeringa de 10 ml (con técnica pulsátil push-pause)',
          'Jeringa de 3 ml a máxima presión',
          'Aguja hipodérmica directa'
        ],
        correctIndex: 1,
        rationale: 'Las jeringas de 10 ml ejercen menor presión hidrostática (PSI) sobre las paredes del catéter que las jeringas pequeñas de 1 o 3 ml.'
      },
      {
        id: 'q5',
        question: 'Si al evaluar una vía periférica encuentra eritema y dolor en el punto de inserción (Maddox Grado 1 o 2), ¿cuál es la intervención de enfermería correcta?',
        options: [
          'Mantener la vía 72 horas más y pasar bolo rápido de suero',
          'Retirar inmediatamente el catéter, aplicar cuidados locales, canalizar en el miembro contralateral y registrar el evento',
          'Cubrir el eritema con esparadrapo opaco para no verlo',
          'Exprimir la vena afectada'
        ],
        correctIndex: 1,
        rationale: 'Cualquier signo de flebitis (Maddox ≥ 1) exige el retiro inmediato del catéter periférico.'
      }
    ]
  },
  {
    id: 'prevencion-lesiones-presion',
    code: 'EC-CUR-007',
    title: 'Prevención y Clasificación de Lesiones por Presión (LPP)',
    subtitle: 'Fisiopatología de la isquemia tisular, estadiaje GNEAUPP/NPIAP (Categorías I a IV), escala de Braden y cura avanzada en ambiente húmedo.',
    category: 'Integridad Cutánea & Calidad',
    academicHours: 24,
    credits: 1.5,
    level: 'Especialización Clínica',
    normativaBase: 'Consenso GNEAUPP / NPIAP / Guías de Seguridad del Paciente MINSA',
    badgeColor: 'from-sky-500 to-indigo-500',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Fisiopatología de las LPP: Presión, Cizallamiento, Fricción y Microclima',
        duration: '6 horas académicas',
        summary: 'Mecanismos de hipoxia tisular sobre prominencias óseas y diferenciación con lesiones asociadas a la humedad (LESCAH).',
        content: [
          'Una Lesión por Presión (LPP) es un daño localizado en la piel y/o el tejido blando subyacente, generalmente sobre una prominencia ósea o relacionado con un dispositivo médico, resultante de una presión intensa y/o prolongada en combinación con fuerzas de cizallamiento.',
          'Cuando la presión externa supera la presión de cierre capilar normal (~32 mmHg) de manera sostenida, se colapsa el flujo sanguíneo local provocando isquemia, hipoxia, acidosis tisular y finalmente necrosis celular. El CIZALLAMIENTO ocurre cuando el paciente resbala en la cama (cabecera > 30°), haciendo que el hueso y el tejido profundo se deslicen hacia abajo mientras la piel queda adherida a la sábana, angulando y desgarrando los vasos perforantes.',
          'En decúbito dorsal los puntos críticos son occipucio, escápulas, codos, sacro y talones; en decúbito lateral son oreja, acromion, costillas, trocánter mayor, cóndilos femorales y maléolos.'
        ],
        keyPoints: [
          'Presión de cierre capilar crítica promedio: > 32 mmHg sostenida.',
          'Localización más frecuente de LPP en pacientes hospitalizados: Región Sacra, seguida de los Talones.',
          'El cizallamiento se multiplica cuando se eleva la cabecera de la cama por encima de 30° sin flexión de rodillas.'
        ],
        clinicalPearl: 'El 95% de las Lesiones por Presión son evitables con cuidados oportunos de enfermería; constituyen uno de los indicadores internacionales más sensibles de la calidad del cuidado enfermero.',
        checkQuestion: {
          question: '¿Qué fuerza mecánica se produce cuando la cabecera de la cama está elevada a más de 45° y el esqueleto del paciente se desliza hacia los pies mientras la piel glútea permanece fija contra la sábana?',
          options: [
            'Maceración química',
            'Fuerza de cizallamiento (cizalla)',
            'Presión osmótica',
            'Hipotermia local'
          ],
          correctIndex: 1,
          explanation: 'El desplazamiento en sentido opuesto de los planos profundos (hueso/músculo) respecto a la epidermis superficial se denomina fuerza de cizallamiento.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Clasificación Internacional GNEAUPP / NPIAP (Categorías I a IV y No Estadificables)',
        duration: '6 horas académicas',
        summary: 'Identificación clínica precisa de cada categoría y lesiones de tejidos profundos.',
        content: [
          'Categoría / Estadio I: Piel intacta con ERITEMA NO BLANQUEABLE (no palidece a la vitropresión o dígito-presión) en un área localizada, generalmente sobre una prominencia ósea.',
          'Categoría / Estadio II: Pérdida de espesor parcial de la dermis que se presenta como una úlcera abierta poco profunda con lecho de la herida rosado-rojizo (sin esfacelos), o bien como una flictena (ampolla) intacta o rota llena de suero.',
          'Categoría / Estadio III: Pérdida total del grosor de la piel en la que el tejido adiposo subcutáneo (grasa) es visible, pero los huesos, tendones o músculos NO están expuestos. Puede presentar esfacelos y tunelizaciones. Categoría / Estadio IV: Pérdida total del espesor de los tejidos con exposición directa o palpación de HUESO, TENDÓN o MÚSCULO (alto riesgo de osteomielitis). Lesión No Estadificable: Lecho cubierto completamente por escara necrótica negra o esfacelo amarillo que impide ver la profundidad real hasta desbridar.'
        ],
        keyPoints: [
          'Categoría I: Piel íntegra con eritema que NO blanquea al presionar.',
          'Categoría II: Dermis parcial o flictena (ampolla) serosa.',
          'Categoría III: Llega hasta tejido celular subcutáneo (grasa) | Categoría IV: Expone músculo, tendón o hueso.'
        ],
        clinicalPearl: 'Para distinguir una hiperemia reactiva normal de una LPP Categoría I, presiona el área roja durante 3 segundos y suelta: si se pone blanca y recupera el color, es hiperemia reactiva; si permanece roja fija ("eritema no blanqueable"), ya es una LPP Categoría I.',
        checkQuestion: {
          question: 'Al valorar la región sacra de un paciente postrado observa la piel íntegra pero con una zona enrojecida que NO palidece (no blanquea) al aplicar presión con el dedo. ¿A qué categoría corresponde?',
          options: [
            'Piel sana normal',
            'LPP Categoría I (Eritema no blanqueable)',
            'LPP Categoría II',
            'LPP Categoría III'
          ],
          correctIndex: 1,
          explanation: 'La piel intacta con eritema no blanqueable a la dígito-presión define exactamente la LPP de Categoría I.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Valoración con Escala de Braden y Paquete de Prevención (SEMP y Cambios Posturales)',
        duration: '6 horas académicas',
        summary: 'Cronograma de reloj postural, liberación de talones, ácidos grasos hiperoxigenados (AGHO) y superficies especiales.',
        content: [
          'La prevención activa se inicia desde el ingreso mediante la Escala de Braden (6 dimensiones: percepción sensorial, exposición a la humedad, actividad, movilidad, nutrición y roce/peligro de lesiones). Puntajes ≤ 12 indican Alto Riesgo.',
          'Intervenciones preventivas basadas en evidencia: 1) Cambios posturales programados cada 2 a 3 horas en cama (utilizando el reloj postural: decúbito dorsal -> lateral derecho 30° -> lateral izquierdo 30°) y cada 15-30 min de descarga en sedestación; 2) Uso de Superficies Especiales para el Manejo de la Presión (SEMP, como colchones de aire alternante o viscoelásticos), los cuales NO reemplazan los cambios posturales.',
          '3) Protección de talones dejándolos "en flotación" (libres de presión con almohadas longitudinales bajo las pantorrillas); 4) Aplicación de Ácidos Grasos Hiperoxigenados (AGHO) sobre piel sana sometida a presión SIN MASAJEAR (está prohibido masajear prominencias óseas o zonas enrojecidas porque rompe capilares ya isquémicos).'
        ],
        keyPoints: [
          'Prohibido masajear prominencias óseas o zonas con eritema Categoría I.',
          'Lateralización en cama a 30° (con cuñas o almohadas) evita apoyar directamente sobre el trocánter mayor a 90°.',
          'Prohibido el uso de rodetes o flotadores circulares tipo "dona" porque concentran el edema y producen isquemia en anillo.'
        ],
        clinicalPearl: 'Nunca uses guantes inflados con agua debajo de los talones ni rodetes en forma de dona bajo el sacro: los guantes ejercen presión puntual y los rodetes bloquean el retorno venoso perilesional.',
        checkQuestion: {
          question: '¿Por qué está contraindicado masajear vigorosamente las prominencias óseas o las zonas con eritema no blanqueable (Categoría I)?',
          options: [
            'Porque gasta mucha crema hidratante',
            'Porque el tejido subyacente ya está isquémico y la fricción del masaje desgarra los capilares fragilizados agravando la necrosis',
            'Porque produce sueño en el paciente',
            'No está contraindicado, se debe masajear con alcohol'
          ],
          correctIndex: 1,
          explanation: 'El masaje sobre prominencias óseas o piel con eritema no blanqueable disminuye aún más el flujo sanguíneo y lesiona la microcirculación.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Cura Avanzada en Ambiente Húmedo (Esquema TIME) y Selección de Apósitos',
        duration: '6 horas académicas',
        summary: 'Preparación del lecho de la herida (Tejido, Infección, Humedad, Bordes) y uso de hidrocoloides, alginatos, hidrogeles y espumas.',
        content: [
          'La preparación del lecho de la herida sigue el acrónimo TIME: T (Control del tejido no viable / desbridamiento quirúrgico, enzimático con colagenasa o autolítico), I (Control de la inflamación e infección bacteriana), M (Control del exudado / Moisture para mantener ambiente húmedo óptimo sin macerar) y E (Estimulación de los bordes epiteliales).',
          'Selección clínica de apósitos: 1) HIDROCOLOIDES: Prevención en zonas de fricción y curación de LPP Categoría I y II con exudado escaso (no usar en heridas infectadas ni profundas). 2) HIDROGELES (amorfos o en placa): Aportan hidratación para el desbridamiento autolítico de tejido necrótico seco (escara negra) o esfacelos.',
          '3) ALGINATO DE CALCIO y HIDROFIBRA DE HIDROCOLOIDE: Altísima capacidad de absorción para LPP Categoría III y IV con exudado moderado a abundante; el alginato además posee efecto hemostático. 4) ESPUMAS DE POLIURETANO (Foams): Absorción hidrocélular y alivio de presión/fricción. 5) APÓSITOS CON PLATA (Ag): Indicados ante signos de colonización crítica o infección local.'
        ],
        keyPoints: [
          'Limpieza de la LPP: Lavado con Suero Fisiológico (NaCl 0.9%) tibio a presión suave con jeringa de 20 ml y aguja 19G (evitar antisépticos citotóxicos como yodopovidona o agua oxigenada en tejido de granulación sano).',
          'Escara necrótica seca -> Hidrogel (desbridamiento autolítico) o Colagenasa (enzimático).',
          'Herida cavitada muy exudativa o sangrante -> Alginato de Calcio.'
        ],
        clinicalPearl: 'La Povidona Yodada, el Agua Oxigenada y el Alcohol son citotóxicos para los fibroblastos y retrasan la cicatrización; en una LPP limpia con tejido de granulación rojo brillante, limpia únicamente con Solución Salina al 0.9% o polihexanida (PHMB).',
        checkQuestion: {
          question: '¿Qué tipo de apósito avanzado está indicado para favorecer el desbridamiento autolítico hidratando una escara necrótica seca o tejido esfacelado sin exudado?',
          options: [
            'Gasa seca adherente',
            'Hidrogel amorfo',
            'Apósito seco de algodón',
            'Esparadrapo de tela'
          ],
          correctIndex: 1,
          explanation: 'El Hidrogel dona agua al tejido necrótico seco o esfacelado, promoviendo la acción de las enzimas endógenas (desbridamiento autolítico).'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cómo se clasifica una Lesión por Presión en la que existe pérdida total del espesor de la piel con exposición directa de músculo y hueso en la región sacra?',
        options: ['Categoría I', 'Categoría II', 'Categoría III', 'Categoría IV'],
        correctIndex: 3,
        rationale: 'La exposición o palpación directa de músculo, tendón o hueso define la LPP Categoría IV.'
      },
      {
        id: 'q2',
        question: 'En la técnica de cambios posturales para un paciente encamado, ¿qué ángulo de inclinación lateral se recomienda con almohadas para no descargar todo el peso directamente sobre el trocánter femoral?',
        options: [
          'Lateralización a 30 grados',
          'Lateralización a 90 grados estrictos sobre el hueso',
          'Posición sentado a 90 grados las 24 horas',
          'No se debe mover al paciente'
        ],
        correctIndex: 0,
        rationale: 'El decúbito lateral a 30° distribuye el peso sobre la musculatura glútea y evita la presión directa sobre el trocánter mayor y el sacro.'
      },
      {
        id: 'q3',
        question: '¿Cuál es la solución de elección para irrigar y limpiar una Lesión por Presión con tejido de granulación viable sin dañar los fibroblastos?',
        options: [
          'Hipoclorito de sodio puro',
          'Cloruro de Sodio al 0.9% (Suero Fisiológico) estéril',
          'Alcohol medicinal al 96%',
          'Agua oxigenada pura en cada curación'
        ],
        correctIndex: 1,
        rationale: 'El suero fisiológico al 0.9% es isotónico y limpia el lecho sin provocar citotoxicidad sobre los fibroblastos ni el tejido de granulación.'
      },
      {
        id: 'q4',
        question: '¿Qué apósito elegiría para tratar una LPP Categoría III cavitada con exudado abundante y leve sangrado en el lecho?',
        options: [
          'Película de poliuretano transparente fina',
          'Alginato de Calcio',
          'Hidrocoloide extrafino',
          'Ácidos grasos hiperoxigenados dentro de la cavidad'
        ],
        correctIndex: 1,
        rationale: 'El Alginato de Calcio absorbe hasta 20 veces su peso en exudado, gelifica en contacto con la herida y aporta iones calcio con acción hemostática.'
      },
      {
        id: 'q5',
        question: 'Si una úlcera sacra se encuentra cubierta en un 100% por una placa necrótica negra (escara dura) que impide visualizar la profundidad de los tejidos dañados, se clasifica inicialmente como:',
        options: [
          'LPP Categoría I',
          'LPP Categoría II',
          'Lesión por Presión No Estadificable (hasta retirar la escara)',
          'Dermatitis por incontinencia'
        ],
        correctIndex: 2,
        rationale: 'Según NPIAP/GNEAUPP, cuando el lecho está cubierto por escara o esfacelo que oculta la profundidad real, es No Estadificable hasta desbridar.'
      }
    ]
  }
];
