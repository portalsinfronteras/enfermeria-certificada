export interface CourseQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

<<<<<<< Updated upstream
export interface ModuleTable {
=======
export interface CourseModuleTable {
>>>>>>> Stashed changes
  title: string;
  headers: string[];
  rows: string[][];
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  part1Title?: string;
  part2Title?: string;
  duration: string;
  summary: string;
  content: string[];
<<<<<<< Updated upstream
  tableData?: ModuleTable;
=======
  tableData?: CourseModuleTable;
>>>>>>> Stashed changes
  keyPoints: string[];
  clinicalPearl: string;
  checkQuestion: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  moduleQuiz?: CourseQuestion[];
}

export interface ClinicalCourse {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  academicHours: number;
  credits: number;
<<<<<<< Updated upstream
  level: 'Alta Especialización (40h)' | 'Intermedio - Avanzado' | 'Especialización Clínica' | 'Esencial Hospitalario';
=======
  level: 'Intermedio - Avanzado' | 'Especialización Clínica' | 'Alta Especialización (40h)';
>>>>>>> Stashed changes
  normativaBase: string;
  badgeColor: string;
  manualPdfUrl?: string;
  modules: CourseModule[];
  finalExam: CourseQuestion[];
}

export const COURSES_DATA: ClinicalCourse[] = [
  // ==========================================================================
  // CURSO 1: DOSIFICACIÓN Y DILUCIÓN DE MEDICAMENTOS (40 HORAS - 6 MÓDULOS)
  // ==========================================================================
  {
    id: 'dosificacion-dilucion',
    code: 'EC-CUR-001',
    title: 'Dosificación y Dilución de Medicamentos',
<<<<<<< Updated upstream
    subtitle: 'Farmacometría clínica, 10 Correctos, reconstitución vs. dilución, goteo, fármacos de alto riesgo (MAR), pediatría y vasoactivos en UCI.',
    category: 'Farmacoterapia & Seguridad',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'DIGEMID / OMS Seguridad del Paciente / Protocolos MINSA',
=======
    subtitle: 'Cálculos Farmacológicos, Terapia de Infusión, Bombas Volumétricas, Fármacos Vasoactivos, Electrolitos Concentrados y Seguridad Asistencial.',
    category: 'Farmacoterapia & UCI',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'OMS Seguridad del Paciente / ISMP / Protocolos MINSA',
>>>>>>> Stashed changes
    badgeColor: 'from-teal-500 to-cyan-500',
    manualPdfUrl: '/manuales/manual-dosificacion-dilucion.pdf',
    modules: [
      {
        id: 'm1',
        number: 1,
<<<<<<< Updated upstream
        title: 'Fundamentos de Farmacometría, Sistema Métrico y Los 10 Correctos',
        part1Title: 'Parte 1: Seguridad Clínica y Sistema Internacional de Unidades',
        part2Title: 'Parte 2: Soluciones Parenterales, Porcentajes y Tonicidad',
        duration: '6 Horas Lectivas',
        summary: 'Dominio del Sistema Internacional (g, mg, mcg), soluciones porcentuales (p/v), osmolaridad y aplicación de los 10 Correctos.',
        content: [
          '1. Los 10 Correctos en la Administración Segura: 1) Paciente correcto (doble identificación), 2) Medicamento correcto, 3) Dosis correcta, 4) Vía correcta, 5) Hora correcta, 6) Educación al paciente, 7) Indagar alergias previas, 8) Velocidad de infusión correcta, 9) Fecha de vencimiento vigente y 10) Registro inmediato.',
          '2. Sistema Métrico y Conversiones: 1 gramo (g) = 1,000 miligramos (mg); 1 miligramo (mg) = 1,000 microgramos (mcg o µg); 1 Litro (L) = 1,000 mililitros (ml). En soluciones al porcentaje (% p/v), el porcentaje indica los gramos de soluto por cada 100 ml (ej. Dextrosa 5% = 5 g en 100 ml = 50 mg/ml).'
        ],
        tableData: {
          title: 'Soluciones Parenterales, Concentración y Tonicidad Vascular',
          headers: ['Solución Parenteral', 'Gramos / 100 ml', 'Concentración (mg/ml)', 'Tonicidad y Uso Clínico'],
          rows: [
            ['Cloruro de Sodio 0.9% (Suero Fisiológico)', '0.9 g / 100 ml', '9 mg/ml (154 mEq Na/L)', 'Isotónica (308 mOsm/L). Vehículo estándar y expansión.'],
            ['Dextrosa al 5% en Agua (D5%AD)', '5 g / 100 ml', '50 mg/ml', 'Isotónica inicial (252 mOsm/L). Vehículo de aminas en UCI.'],
            ['Cloruro de Sodio al 20% (Hipersodio)', '20 g / 100 ml', '200 mg/ml (3.4 mEq/ml)', 'Hipertónica de Alto Riesgo. Jamás pasar directo sin diluir.'],
            ['Cloruro de Potasio al 20% (Kalium)', '2 g / 10 ml (ampolla)', '200 mg/ml (2.7 mEq/ml)', 'Hipertónica Letal en bolo. Dilución obligatoria en suero.']
          ]
        },
        keyPoints: [
          '1 g = 1,000 mg | 1 mg = 1,000 mcg (para pasar de mg a mcg se multiplica por 1,000).',
          'Lidocaína al 2% contiene 2 g en 100 ml, lo que equivale exactamente a 20 mg por cada 1 ml.',
          'Una ampolla de Dextrosa al 33.3% de 20 ml aporta 6.66 gramos de glucosa pura.',
          'Límite máximo de osmolaridad por vía venosa periférica: < 600 mOsm/L.'
        ],
        clinicalPearl: 'Truco Rápido para Soluciones al Porcentaje (%): Para saber cuántos mg/ml tiene cualquier ampolla expresada en porcentaje, simplemente multiplica el número del porcentaje por 10 (Ej: Lidocaína 2% = 20 mg/ml; Gluconato de Calcio 10% = 100 mg/ml; NaCl 20% = 200 mg/ml).',
        checkQuestion: {
          question: '¿Cuántos miligramos por mililitro (mg/ml) contiene un frasco de Lidocaína al 2% sin epinefrina?',
          options: ['2 mg/ml', '20 mg/ml', '200 mg/ml', '0.2 mg/ml'],
          correctIndex: 1,
          explanation: 'Al 2% significa 2 gramos (2,000 mg) en 100 ml; al dividir 2,000 mg / 100 ml se obtiene 20 mg/ml.'
        },
        moduleQuiz: [
          { id: 'c1m1q1', question: '¿A cuántos microgramos (mcg) equivalen 2.5 miligramos (mg) de un medicamento?', options: ['250 mcg', '2,500 mcg', '25,000 mcg', '0.0025 mcg'], correctIndex: 1, rationale: '1 mg tiene 1,000 mcg; por tanto 2.5 × 1,000 = 2,500 mcg.' },
          { id: 'c1m1q2', question: 'En una solución de Dextrosa al 5% (frasco de 1,000 ml), ¿cuántos gramos totales de glucosa recibe el paciente?', options: ['5 gramos', '50 gramos', '500 gramos', '0.5 gramos'], correctIndex: 1, rationale: '5% significa 5 g por cada 100 ml; en 1,000 ml (10 veces más) hay 50 gramos.' },
          { id: 'c1m1q3', question: '¿Cuántos miligramos de principio activo hay en cada 1 ml de una ampolla de Gluconato de Calcio al 10%?', options: ['10 mg/ml', '100 mg/ml', '1,000 mg/ml', '1 mg/ml'], correctIndex: 1, rationale: 'Aplicando la regla (% × 10): 10 × 10 = 100 mg/ml.' },
          { id: 'c1m1q4', question: '¿Cuál es el límite máximo de osmolaridad permitido para infundir una solución por vía venosa periférica?', options: ['Hasta 3,000 mOsm/L', 'Menor a 600 mOsm/L (máximo 900 mOsm/L en guías específicas)', 'Menor a 50 mOsm/L', 'No existe límite'], correctIndex: 1, rationale: 'Soluciones > 600-900 mOsm/L lesionan el endotelio periférico y requieren Catéter Venoso Central.' }
=======
        title: 'Fundamentos Matemáticos, Regla de Tres, Liofilizados y Volumen de Desplazamiento',
        part1Title: 'Parte 1: Fundamentos Matemáticos, Regla de Tres y Equivalencias',
        part2Title: 'Parte 2: Reconstitución de Liofilizados y Volumen de Desplazamiento',
        duration: '6 Horas Lectivas',
        summary: 'El cálculo de dosis y dilución de fármacos es una competencia de alta responsabilidad clínica y legal. En dosificación pediátrica y neonatal crítica es mandatorio considerar la conversión métrica exacta y el volumen de desplazamiento del soluto.',
        content: [
          '1. Conversión de Unidades Métricas: Para pasar de una unidad mayor a una menor (ej. de gramos a miligramos), se multiplica por 1,000 (correr la coma tres lugares a la derecha: 1 kg = 1,000 g; 1 g = 1,000 mg = 1,000,000 mcg; 1 mcg = 1,000 ng). Para pasar de una menor a una mayor (ej. de microgramos a miligramos), se divide entre 1,000 (correr la coma tres lugares a la izquierda: 500 mcg = 0.5 mg).',
          '2. Equivalencias de Volumen Frecuentes: En farmacología líquida: 1 Litro (L) = 1,000 mililitros (ml). Clínicamente, 1 ml = 1 centímetro cúbico (cc). 1 mililitro = 20 gotas normogotero = 60 microgotas. Por consiguiente, 1 gota = 3 microgotas. 1 cucharadita de té = 5 ml; 1 cucharada sopera = 15 ml.',
          '3. La Regla de Tres Simple Farmacológica: Relaciona la presentación comercial del fármaco con la dosis prescrita por el médico para despejar el volumen en ml a extraer: Volumen a extraer (ml) = [Dosis Prescrita (mg) × Diluyente Presentación (ml)] / Presentación Fármaco (mg). Ejemplo: Ampicilina frasco de 1 g (1,000 mg) diluido en 5 ml; prescripción 250 mg → (250 × 5) / 1000 = 1.25 ml.',
          '4. Reconstitución y Volumen de Desplazamiento del Polvo: Muchos antimicrobianos se presentan en polvo liofilizado. El polvo seco posee masa y ocupa volumen. Al agregar un diluyente líquido, el volumen final resultante en el frasco es mayor que el volumen del líquido inyectado: Volumen Final Total = Volumen de Solvente Agregado + Volumen de Desplazamiento del Polvo (ej. Ampicilina 1 g desplaza 0.6 ml; si se añaden 4.4 ml de agua estéril, el volumen final exacto es 5.0 ml = 200 mg/ml).'
        ],
        tableData: {
          title: 'Factores de Desplazamiento Habituales de Antimicrobianos',
          headers: ['Fármaco Liofilizado', 'Presentación Vial', 'Volumen Desplazado', 'Dilución Recomendada y Concentración'],
          rows: [
            ['Ceftriaxona', '1,000 mg (1 g)', '0.8 ml', 'Agregar 9.2 ml de solvente para obtener exactamente 10 ml (100 mg/ml).'],
            ['Oxacilina', '1,000 mg (1 g)', '0.7 ml', 'Agregar 4.3 ml de solvente para obtener exactamente 5 ml (200 mg/ml).'],
            ['Vancomicina', '500 mg', '0.4 ml', 'Agregar 9.6 ml de solvente para obtener exactamente 10 ml (50 mg/ml).'],
            ['Meropenem', '500 mg', '0.5 ml', 'Agregar 9.5 ml de solvente para obtener exactamente 10 ml (50 mg/ml).']
          ]
        },
        keyPoints: [
          '1 g = 1,000 mg | 1 mg = 1,000 mcg (µg) | 1 mcg = 1,000 ng.',
          '1 ml = 1 cc = 20 gotas (normogotero) = 60 microgotas | 1 gota = 3 microgotas.',
          'Volumen Final Reconstituido = Volumen Solvente Agregado + Volumen de Desplazamiento del Polvo.',
          'Si no se descuenta el volumen de desplazamiento en neonatología, la concentración calculada será falsa.'
        ],
        clinicalPearl: 'Los 10 Correctos del Cálculo y Preparación Farmacológica: 1) Medicamento correcto; 2) Paciente correcto; 3) Dosis exacta calculada matemáticamente; 4) Vía correcta; 5) Hora programada; 6) Dilución y concentración segura; 7) Velocidad de infusión prescrita; 8) Verificar caducidad y compatibilidad física; 9) Registrar inmediatamente; 10) Doble chequeo independiente de enfermería en cálculos pediátricos y vasopresores.',
        checkQuestion: {
          question: 'Si un vial de 1 g de Ceftriaxona desplaza 0.8 ml de volumen y queremos obtener un volumen final exacto de 10 ml, ¿cuánta agua estéril agregamos?',
          options: ['10 ml', '9.2 ml', '8 ml', '5 ml'],
          correctIndex: 1,
          explanation: 'Restando el desplazamiento: 10 ml deseados - 0.8 ml que aporta el polvo = 9.2 ml de diluyente a inyectar en el vial.'
        },
        moduleQuiz: [
          { id: 'c1m1q1', question: '¿Cuántos miligramos (mg) equivalen exactamente a 1 gramo (g) de un antibiótico?', options: ['10 mg', '100 mg', '1,000 mg', '10,000 mg'], correctIndex: 2, rationale: 'En el sistema métrico decimal, el prefijo mili indica la milésima parte; por lo tanto, 1 gramo equivale exactamente a 1,000 miligramos.' },
          { id: 'c1m1q2', question: 'Si una ampolla contiene 500 microgramos (mcg) de un fármaco, ¿cuántos miligramos (mg) representa?', options: ['5 mg', '0.5 mg', '50 mg', '0.05 mg'], correctIndex: 1, rationale: 'Para convertir microgramos a miligramos se divide entre 1,000: 500 / 1000 = 0.5 mg.' },
          { id: 'c1m1q3', question: 'En un equipo de venoclisis estándar (normogotero para adultos), ¿cuántas gotas contiene 1 mililitro (ml)?', options: ['10 gotas', '20 gotas', '60 gotas', '100 gotas'], correctIndex: 1, rationale: 'El factor de goteo internacional de un normogotero estándar para adultos calibra exactamente 20 gotas por cada mililitro de solución acuosa.' },
          { id: 'c1m1q4', question: '¿A cuántas microgotas equivale exactamente una gota de un equipo de infusión?', options: ['1 microgota', '2 microgotas', '3 microgotas', '10 microgotas'], correctIndex: 2, rationale: 'Como 1 ml contiene 20 gotas o 60 microgotas, al dividir 60 entre 20 obtenemos que 1 gota equivale exactamente a 3 microgotas.' },
          { id: 'c1m1q5', question: 'Se tiene un frasco de Ceftriaxona de 1,000 mg diluido en 10 ml. El médico receta 250 mg. ¿Cuántos ml debemos inyectar?', options: ['1 ml', '2.5 ml', '5 ml', '0.25 ml'], correctIndex: 1, rationale: 'Aplicando regla de tres: (250 mg × 10 ml) / 1,000 mg = 2,500 / 1,000 = 2.5 ml.' },
          { id: 'c1m1q6', question: 'Un jarabe pediátrico viene en presentación de 250 mg en 5 ml. Si la indicación es de 100 mg, ¿cuántos ml se administran?', options: ['1 ml', '2 ml', '4 ml', '2.5 ml'], correctIndex: 1, rationale: 'Cálculo: (100 mg × 5 ml) / 250 mg = 500 / 250 = 2 ml.' },
          { id: 'c1m1q7', question: '¿A qué se llama "volumen de desplazamiento" al disolver un frasco de antibiótico en polvo seco?', options: ['Al aire que sale del frasco', 'Al espacio que ocupa el propio polvo, haciendo que el líquido final sea mayor al agua inyectada', 'Al agua que se bota', 'Al peso del frasco de vidrio'], correctIndex: 1, rationale: 'El polvo tiene masa física; al disolverse suma volumen al líquido agregado, modificando la concentración final si no se descuenta.' },
          { id: 'c1m1q8', question: 'Si un vial de 1 g desplaza 0.8 ml de volumen y queremos obtener un volumen final exacto de 10 ml, ¿cuánta agua estéril agregamos?', options: ['10 ml', '9.2 ml', '8 ml', '5 ml'], correctIndex: 1, rationale: 'Restando el desplazamiento: 10 ml deseados - 0.8 ml que aporta el polvo = 9.2 ml de diluyente a inyectar en el vial.' },
          { id: 'c1m1q9', question: '¿Cuántos mililitros (ml) contiene comúnmente una cucharada sopera casera estándar?', options: ['2 ml', '5 ml', '15 ml', '50 ml'], correctIndex: 2, rationale: 'La equivalencia farmacéutica de cuchara sopera estándar equivale a 15 ml (la cucharadita pequeña de té equivale a 5 ml).' },
          { id: 'c1m1q10', question: '¿Por qué es fundamental realizar el "doble chequeo independiente" entre dos enfermeros antes de administrar fármacos de alto riesgo?', options: ['Para cobrar horas extras', 'Porque dos profesionales calculando por separado detectan errores de coma decimal o dosis antes de inyectar', 'Por cortesía', 'Porque es obligatorio hablar'], correctIndex: 1, rationale: 'El doble chequeo independiente reduce hasta en un 95% los errores de cálculo matemático en pediatría y cuidados intensivos.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm2',
        number: 2,
<<<<<<< Updated upstream
        title: 'Reconstitución vs. Dilución, Regla de Tres y Volumen de Desplazamiento',
        part1Title: 'Parte 1: Diferencia Técnica entre Reconstitución y Dilución',
        part2Title: 'Parte 2: Fórmulas de Dosis Exacta e Incompatibilidades Físico-Químicas',
        duration: '6 Horas Lectivas',
        summary: 'Cálculo exacto de extracción de viales liofilizados, efecto del volumen de desplazamiento del polvo y prevención de precipitaciones.',
        content: [
          '1. Reconstitución vs. Dilución: La Reconstitución es agregar un solvente estéril (agua para inyección o NaCl 0.9%) a un vial de polvo liofilizado para obtener una solución líquida inicial. La Dilución consiste en extraer la dosis reconstituida e incorporarla en una bolsa o volutrol de mayor volumen (50 ml, 100 ml o 250 ml) para disminuir su irritabilidad.',
          '2. Fórmula Universal de Extracción (Regla de Tres Clínica): Volumen a extraer (ml) = [Dosis Indicada × Volumen de Reconstitución (ml)] / Presentación Total del Frasco. En neonatología se considera además el volumen de desplazamiento del polvo liofilizado.',
          '3. Incompatibilidades Críticas: La Fenitoína (pH 12) precipita en Dextrosa al 5% (usar solo NaCl 0.9%). La Ceftriaxona precipita con soluciones que contienen Calcio (Lactato de Ringer o Gluconato de Calcio).'
        ],
        tableData: {
          title: 'Protocolos Estándar de Reconstitución y Dilución de Antibióticos Hospitalarios',
          headers: ['Antibiótico (Presentación)', 'Reconstitución Inicial', 'Dilución Final en Volutrol', 'Tiempo de Infusión Seguro'],
          rows: [
            ['Ceftriaxona 1 g (1,000 mg)', '10 ml de Agua Estéril (100 mg/ml)', '50 a 100 ml de NaCl 0.9% o D5%', '30 minutos EV (Prohibido mezclar con Calcio).'],
            ['Meropenem 1 g (1,000 mg)', '20 ml de Agua Estéril (50 mg/ml)', '100 ml de NaCl 0.9%', '30 min estándar o 3 horas en infusión extendida.'],
            ['Vancomicina 500 mg / 1 g', '10 ml de Agua Estéril (50 mg/ml)', '100 ml (500 mg) o 250 ml (1 g) ≤5 mg/ml', 'Mínimo 60 a 90 minutos (previene Hombre Rojo).'],
            ['Piperacilina/Tazobactam 4.5 g', '20 ml de Agua o NaCl 0.9%', '100 ml de NaCl 0.9%', '30 minutos a 4 horas según protocolo UCI.']
          ]
        },
        keyPoints: [
          'Volumen a Administrar (ml) = (Dosis Prescrita × Volumen del Diluyente) / Concentración Disponible.',
          'Ceftriaxona + Calcio EV = Contraindicación absoluta por precipitación cristalina pulmonar y renal.',
          'Fenitoína Sódica = Diluir exclusivamente en Cloruro de Sodio al 0.9% (jamás en Dextrosa).'
        ],
        clinicalPearl: 'Efecto del Volumen de Desplazamiento: Cuando reconstituyes 1 g de polvo con 10 ml de agua, el polvo ocupa espacio físico (ej. 0.7 ml), resultando en un volumen total de 10.7 ml. En neonatología este detalle es crucial para la exactitud milimétrica.',
        checkQuestion: {
          question: 'Se indica administrar 750 mg de Cefuroxima EV. Si dispone de un frasco de 1.5 g (1,500 mg) y lo reconstituye en 15 ml de agua estéril, ¿cuántos mililitros debe extraer?',
          options: ['5 ml', '7.5 ml', '10 ml', '15 ml'],
          correctIndex: 1,
          explanation: 'Concentración = 1,500 mg / 15 ml = 100 mg/ml. Para obtener 750 mg: 750 / 100 = 7.5 ml.'
        },
        moduleQuiz: [
          { id: 'c1m2q1', question: 'Si reconstituye un vial de Meropenem de 1 g (1,000 mg) en 20 ml de agua estéril, ¿cuál es la concentración resultante?', options: ['20 mg/ml', '50 mg/ml', '100 mg/ml', '500 mg/ml'], correctIndex: 1, rationale: '1,000 mg dividido entre 20 ml equivale a 50 mg por cada mililitro.' },
          { id: 'c1m2q2', question: '¿Con qué solución está estrictamente prohibido mezclar o administrar simultáneamente la Ceftriaxona?', options: ['Cloruro de Sodio 0.9%', 'Agua destilada', 'Soluciones con Calcio (Gluconato de Calcio o Lactato de Ringer)', 'Dextrosa al 5%'], correctIndex: 2, rationale: 'El calcio forma precipitados insolubles de ceftriaxona cálcica en pulmones y riñones.' },
          { id: 'c1m2q3', question: '¿Por qué la Fenitoína Sódica no debe diluirse nunca en Dextrosa al 5%?', options: ['Porque cambia a color azul', 'Porque su pH alcalino (~12) precipita inmediatamente en el medio ácido de la dextrosa formando cristales', 'Porque da sueño', 'Porque se evapora'], correctIndex: 1, rationale: 'En medio ácido la fenitoína cristaliza dentro de la línea venosa; solo es estable en NaCl 0.9%.' }
=======
        title: 'Fórmulas de Goteo, Infusiones Continuas y Bombas Volumétricas',
        part1Title: 'Parte 1: Fórmulas de Goteo e Infusiones Continuas',
        part2Title: 'Parte 2: Bombas de Infusión Volumétrica y Alarmas de Seguridad',
        duration: '8 Horas Lectivas',
        summary: 'La administración de fluidoterapia y drogas críticas requiere calcular la tasa de flujo en ml/h o gotas/min y dominar el manejo de alarmas de bombas volumétricas.',
        content: [
          '1. Fórmula Universal de Goteo (Normogotero 20 gotas/ml): Gotas por minuto = Volumen Total (ml) / [Tiempo (horas) × 3]. La Constante 3 surge de dividir 60 minutos entre 20 gotas/ml (60 / 20 = 3).',
          '2. Fórmula de Microgoteo (Microgotero 60 microgotas/ml): Microgotas por minuto = Volumen Total (ml) / Tiempo (horas). Principio matemático: Las microgotas por minuto son exactamente equivalentes a los ml/hora (1 ml/h = 1 microgota/min).',
          '3. Cálculo de Tiempo y Volumen Infundido: Tiempo (horas) = Volumen Total (ml) / [Gotas/min × 3]. Volumen Total Infundido (ml) = Gotas/min × 3 × Horas pasadas (ej. 42 gotas/min durante 6 h = 42 × 3 × 6 = 756 ml).',
          '4. Bombas de Infusión Volumétrica y Alarmas: Impulsan el fluido mediante mecanismos peristálticos garantizando una precisión superior al ±5%. En líneas periféricas el límite de presión de oclusión se programa entre 100 y 200 mmHg; en líneas centrales hasta 300 mmHg.'
        ],
        tableData: {
          title: 'Matriz de Velocidad de Infusión y Protocolo ante Alarmas de Bomba',
          headers: ['Volumen / Alarma', 'Tiempo / Causa', 'Normogotero / Conducta Inmediata', 'Bomba (ml/h o mcgtt/min)'],
          rows: [
            ['1,000 ml (NaCl 0.9%)', '24 Horas', '1000 / (24 × 3) = 14 gotas/min', '41.6 ml/h (o microgotas/min)'],
            ['1,000 ml (Dextrosa 5%)', '12 Horas', '1000 / (12 × 3) = 28 gotas/min', '83.3 ml/h (o microgotas/min)'],
            ['1,000 ml (Ringer Lactato)', '8 Horas', '1000 / (8 × 3) = 42 gotas/min', '125 ml/h (o microgotas/min)'],
            ['100 ml (Antibiótico)', '30 Minutos (0.5 h)', '100 / (0.5 × 3) = 67 gotas/min', '100 / 0.5 = 200 ml/h'],
            ['ALARMA: OCLUSIÓN', 'Clamp cerrado, acodamiento o trombo', 'Verificar clamps, alinear. PROHIBIDO irrigar a presión; aspirar con jeringa 10 ml.', 'Límite periférico: 100-200 mmHg'],
            ['ALARMA: AIRE EN LÍNEA', 'Burbuja en cámara o conexión floja', 'Detener infusión, pinzar extremo distal y aspirar la burbuja por puerto en Y.', 'Purgar sistema antes de reiniciar']
          ]
        },
        keyPoints: [
          'Gotas/min = Volumen (ml) / (Horas × 3) | Microgotas/min = ml/hora = Volumen (ml) / Horas.',
          'Tiempo (horas) = Volumen (ml) / (Gotas/min × 3) | Volumen Infundido = Gotas/min × 3 × Horas.',
          'Ante alarma de OCLUSIÓN: prohibido irrigar con jeringa a presión por riesgo de embolia; se debe aspirar.',
          'Al completar VTBI (Infusión Completada): cambiar bolsa o mantener línea en KVO (Keep Vein Open: 1 a 3 ml/h).'
        ],
        clinicalPearl: 'Calibración y Equipos Específicos Dedicados: Cada marca de bomba volumétrica exige el uso de tubuladuras específicas certificadas por el fabricante (con segmento de silicona para peristaltismo). Usar equipos de gravedad genéricos en bombas volumétricas descalibra el flujo hasta en un 30% a 50%, provocando subdosificaciones o sobredosis graves en drogas vasoactivas.',
        checkQuestion: {
          question: 'Se prescribe pasar 1,000 ml de Cloruro de Sodio en 8 horas con un normogotero estándar. ¿A cuántas gotas por minuto debe calibrarse?',
          options: ['14 gotas/min', '28 gotas/min', '42 gotas/min', '60 gotas/min'],
          correctIndex: 2,
          explanation: 'Aplicando la fórmula: Gotas/min = 1,000 / (8 × 3) = 1,000 / 24 = 41.6 ≈ 42 gotas por minuto.'
        },
        moduleQuiz: [
          { id: 'c1m2q1', question: 'Se prescribe pasar 1,000 ml de Cloruro de Sodio en 8 horas con un normogotero estándar. ¿A cuántas gotas por minuto debe calibrarse?', options: ['14 gotas/min', '28 gotas/min', '42 gotas/min', '60 gotas/min'], correctIndex: 2, rationale: 'Aplicando la fórmula: Gotas/min = Volumen / (Horas × 3) = 1,000 / (8 × 3) = 1,000 / 24 = 41.6 ≈ 42 gotas por minuto.' },
          { id: 'c1m2q2', question: 'Se indica infundir 1,000 ml de Dextrosa en 24 horas. ¿Cuál es el goteo por minuto en normogotero?', options: ['7 gotas/min', '14 gotas/min', '28 gotas/min', '42 gotas/min'], correctIndex: 1, rationale: 'Cálculo: 1,000 / (24 × 3) = 1,000 / 72 = 13.8 ≈ 14 gotas por minuto.' },
          { id: 'c1m2q3', question: 'Si una bomba de infusión está programada para pasar a 80 ml/hora, ¿a cuántas microgotas por minuto equivale?', options: ['26 microgotas/min', '40 microgotas/min', '80 microgotas/min', '240 microgotas/min'], correctIndex: 2, rationale: 'En microgotero la relación es 1 a 1: los mililitros por hora (ml/h) son numéricamente idénticos a las microgotas por minuto.' },
          { id: 'c1m2q4', question: '¿De dónde sale la "Constante 3" que se usa en la fórmula de goteo para adultos?', options: ['De un número de la suerte', 'De dividir los 60 minutos de una hora entre las 20 gotas que tiene 1 ml (60 / 20 = 3)', 'De las tres enfermeras del turno', 'De la presión de la sangre'], correctIndex: 1, rationale: 'La constante simplifica la conversión temporal y de volumen: 60 minutos divididos entre el factor normogotero de 20 gotas/ml resulta en 3.' },
          { id: 'c1m2q5', question: 'Tenemos una bolsa de 500 ml pasando a 42 gotas por minuto. ¿En cuántas horas aproximadamente terminará de pasar?', options: ['En 2 horas', 'En 4 horas', 'En 8 horas', 'En 24 horas'], correctIndex: 1, rationale: 'Tiempo (horas) = Volumen / (Gotas/min × 3) = 500 / (42 × 3) = 500 / 126 = 3.96 ≈ 4 horas.' },
          { id: 'c1m2q6', question: '¿Qué significa cuando una bomba de infusión suena con alarma de "OCLUSIÓN"?', options: ['Que se acabó la batería', 'Que algo está tapando el paso del suero (manguera doblada, llave cerrada o catéter tapado)', 'Que el suero está muy frío', 'Que el paciente se durmió'], correctIndex: 1, rationale: 'La alarma de oclusión se activa por contrapresión mecánica cuando el líquido no puede ingresar a la vena libremente.' },
          { id: 'c1m2q7', question: 'Si suena la alarma de "AIRE EN LÍNEA" en la bomba de infusión, ¿qué acción es correcta?', options: ['Apagar la máquina y dejarla así', 'Detener la máquina, cerrar la pinza para que el aire no entre al paciente y sacar la burbuja', 'Golpear la pantalla', 'Aumentar la velocidad al doble'], correctIndex: 1, rationale: 'Se debe evitar la infusión de aire hacia el torrente sanguíneo (embolia gaseosa), aspirando la burbuja con jeringa estéril.' },
          { id: 'c1m2q8', question: 'Se desea pasar 100 ml de antibiótico en 30 minutos (media hora). ¿A qué velocidad en ml/h debemos programar la bomba?', options: ['50 ml/h', '100 ml/h', '200 ml/h', '300 ml/h'], correctIndex: 2, rationale: 'Si en media hora (0.5 h) pasan 100 ml, en 1 hora pasarían el doble: 100 / 0.5 = 200 ml/hora.' },
          { id: 'c1m2q9', question: 'Para calcular el balance hídrico: Si pasaron 6 horas con un suero a 28 gotas por minuto, ¿cuántos ml ingresaron en total?', options: ['100 ml', '250 ml', '504 ml', '1,000 ml'], correctIndex: 2, rationale: 'Volumen total = Gotas/min × 3 × Horas = 28 × 3 × 6 = 84 × 6 = 504 ml.' },
          { id: 'c1m2q10', question: '¿Por qué es peligroso usar mangueritas simples de gravedad en una bomba de infusión volumétrica?', options: ['Porque son de color verde', 'Porque no tienen el plástico calibrado y la máquina puede pasar hasta 30% más o menos de la dosis real', 'Porque la máquina se quema', 'Por el ruido'], correctIndex: 1, rationale: 'Las bombas requieren sets con segmentos de silicona de espesor exacto; los equipos de gravedad alteran la precisión del flujo.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm3',
        number: 3,
<<<<<<< Updated upstream
        title: 'Cálculo de Velocidad de Infusión: Macrogoteo, Microgoteo y Bombas (ml/h)',
        part1Title: 'Parte 1: Constantes de Goteo Gravitacional (20 gotas/ml vs 60 microgotas/ml)',
        part2Title: 'Parte 2: Programación de Bombas de Infusión Volumétricas',
        duration: '8 Horas Lectivas',
        summary: 'Fórmulas universales de gotas/minuto, microgotas/minuto, mililitros/hora y cálculo para infusiones en minutos.',
        content: [
          '1. Factores de Goteo Universal: En el equipo de venoclisis estándar (Macrogoteo), 1 ml equivale a 20 gotas (constante = 3). En el equipo de cámara graduada o Volutrol (Microgoteo), 1 ml equivale a 60 microgotas (constante = 1). En transfusión sanguínea, 1 ml equivale a 15 gotas.',
          '2. Fórmulas de Velocidad por Horas: Gotas por minuto = Volumen Total (ml) / (Tiempo en Horas × 3). Microgotas por minuto = Volumen Total (ml) / Tiempo en Horas = Mililitros por hora (ml/h). Relación directa: Microgotas/min = ml/h = Gotas/min × 3.',
          '3. Fórmulas para Infusiones Cortas (en Minutos): Cuando un antibiótico en volutrol de 100 ml se indica pasar en 30 o 45 minutos en bomba de infusión: Velocidad (ml/h) = [Volumen (ml) × 60] / Tiempo en minutos.'
        ],
        tableData: {
          title: 'Tabla Rápida de Equivalencias de Infusión Parenteral en 24 Horas',
          headers: ['Volumen en 24 Horas', 'N° de Frascos de 1000 ml', 'Macrogoteo (gotas/min)', 'Microgoteo (µgotas/min) / Bomba (ml/h)'],
          rows: [
            ['1,000 ml en 24 h', '1 frasco / día', '14 gotas / min', '42 microgotas/min = 42 ml/h'],
            ['1,500 ml en 24 h', '1.5 frascos / día', '21 gotas / min', '62.5 microgotas/min = 62.5 ml/h'],
            ['2,000 ml en 24 h', '2 frascos / día', '28 gotas / min', '83.3 microgotas/min = 83.3 ml/h'],
            ['3,000 ml en 24 h', '3 frascos / día', '42 gotas / min', '125 microgotas/min = 125 ml/h']
          ]
        },
        keyPoints: [
          'Gotas/min = Volumen (ml) / (Horas × 3).',
          'Microgotas/min = ml/h = Volumen (ml) / Horas = Gotas/min × 3.',
          'Para infusiones en minutos en bomba: ml/h = (Volumen en ml × 60) / Minutos indicados.'
        ],
        clinicalPearl: 'Atajo Mental de los Frascos en 24 Horas: Por cada frasco de 1,000 ml indicado para 24 horas, corresponden exactamente 14 gotas por minuto. Así: 1 Litro = 14 gotas/min; 2 Litros = 28 gotas/min; 3 Litros = 42 gotas/min.',
        checkQuestion: {
          question: 'Se prescribe infundir un antibiótico diluido en 100 ml de NaCl 0.9% para pasar en 30 minutos por bomba de infusión. ¿A cuántos ml/hora debe programar la bomba?',
          options: ['50 ml/h', '100 ml/h', '200 ml/h', '300 ml/h'],
          correctIndex: 2,
          explanation: 'Aplicando ml/h = (Volumen × 60) / Minutos = (100 × 60) / 30 = 200 ml/h (en media hora habrán pasado los 100 ml).'
        },
        moduleQuiz: [
          { id: 'c1m3q1', question: 'Se indica pasar 1,000 ml de NaCl 0.9% en 8 horas. ¿A cuántas gotas por minuto debe regularse?', options: ['28 gotas/min', '42 gotas/min', '60 gotas/min', '125 gotas/min'], correctIndex: 1, rationale: 'Gotas/min = 1,000 / (8 × 3) = 1,000 / 24 = 41.66 ≈ 42 gotas/min.' },
          { id: 'c1m3q2', question: 'Si una infusión pasa a 25 gotas por minuto, ¿a cuántas microgotas/minuto o ml/hora equivale?', options: ['25 ml/h', '50 ml/h', '75 ml/h (75 microgotas/min)', '100 ml/h'], correctIndex: 2, rationale: 'Multiplicando las gotas por minuto por la constante 3: 25 × 3 = 75 microgotas/min = 75 ml/h.' },
          { id: 'c1m3q3', question: '¿Cuántas gotas conforman 1 mililitro (1 ml) en un equipo de venoclisis normogotero estándar?', options: ['10 gotas', '15 gotas', '20 gotas', '60 gotas'], correctIndex: 2, rationale: 'El macrogotero estándar entrega 20 gotas por cada 1 ml de solución.' }
=======
        title: 'Dosificación Pediátrica, Neonatal, Doble Dilución y Volutroles',
        part1Title: 'Parte 1: Dosificación Pediátrica, Neonatal y Diluciones Críticas',
        part2Title: 'Parte 2: Técnica de Doble Dilución Pediátrica y Volutroles',
        duration: '6 Horas Lectivas',
        summary: 'Los pacientes pediátricos y neonatales presentan inmadurez renal y hepática que exige dosificación exacta por peso (mg/kg), uso de jeringa de 1 ml, doble dilución y manejo seguro del volutrol.',
        content: [
          '1. Cálculo por Peso y Superficie Corporal: Dosis por toma = [Peso (kg) × Dosis diaria (mg/kg/d)] / N° de tomas al día. En pacientes críticos y oncología se emplea la Fórmula de Mosteller para Superficie Corporal: SC (m²) = √ [Peso (kg) × Talla (cm) / 3600].',
          '2. Manejo de Jeringas de Tuberculina de 1 ml: En neonatología se manejan volúmenes inferiores a 0.5 ml (ej. 0.08 ml de fentanilo o 0.12 ml de amikacina). Queda prohibido medir estos volúmenes con jeringas de 3 o 5 ml; es obligatorio usar jeringa de 1 ml calibrada en centésimas (0.01 ml).',
          '3. Técnica de la Doble Dilución (Re-dilución): Cuando el volumen a extraer es microscópico (<0.05 ml), se realiza: 1) Dilución Primaria (aforar la ampolla concentrada a 10 ml); 2) Dilución Secundaria (extraer 1 ml de la mezcla primaria y agregar 9 ml de agua destilada hasta completar 10 ml, reduciendo la concentración 10 veces para medir con exactitud).',
          '4. Uso Seguro del Volutrol y Purga: Regla de bioseguridad: Nunca llenar el volutrol con más volumen del que se va a infundir en un turno de 2 a 4 horas (previene edema agudo de pulmón si falla la pinza). Además, la tubuladura retiene 5 a 15 ml (espacio muerto); al terminar el antibiótico se debe enjuagar/purgar con 10 ml de suero puro para que el bebé reciba la dosis completa.'
        ],
        tableData: {
          title: 'Farmacocinética Pediátrica y Caso Práctico de Amikacina Neonatal (Neonato 1,800 g = 1.8 kg)',
          headers: ['Fármaco / Variable', 'Dosis / Dato Clínico', 'Intervalo / Cálculo', 'Vigilancia y Seguridad'],
          rows: [
            ['Paracetamol', '10 a 15 mg/kg/dosis', 'Cada 6 a 8 h (máx. 60 mg/kg/día)', 'Gotas: 100 mg/ml. Jarabe: 120 mg/5 ml.'],
            ['Ampicilina (Neonatos)', '100 a 200 mg/kg/día', 'Cada 6 u 8 h', 'Diluir ≤ 50 mg/ml; infundir en 15 a 30 min.'],
            ['Gentamicina (Neonatos)', '4 a 5 mg/kg/dosis', 'Cada 24 a 36 h (dosis única)', 'Monitorear creatinina (nefrotoxicidad); pasar en 30-60 min.'],
            ['Fenobarbital', 'Carga: 20 mg/kg | Mant: 3-5 mg/kg/d', 'Cada 12 a 24 h', 'Vigilar depresión respiratoria; dilución lenta en 20 min.'],
            ['Caso: Amikacina (15 mg/kg/d)', 'Neonato 1.8 kg → 1.8 × 15 = 27 mg/día', 'Ampolla 100 mg/2 ml → (27×2)/100 = 0.54 ml', 'Diluir 0.54 ml hasta 10 ml en volutrol (2.7 mg/ml); pasar a 20 ml/h en 30 min.']
          ]
        },
        keyPoints: [
          'Convertir gramos a kilogramos dividiendo entre 1,000 (ej. 1,800 g = 1.8 kg; 2,000 g = 2.0 kg).',
          'Volúmenes < 0.5 ml se miden obligatoriamente con jeringa de tuberculina de 1 ml graduada en 0.01 ml.',
          'Nunca cargar el volutrol con 100-150 ml si solo corresponden 10-20 ml en el horario.',
          'Siempre lavar/purgar la línea del volutrol tras infundir el antibiótico para barrer el espacio muerto.'
        ],
        clinicalPearl: 'Volumen de Purga de la Tubuladura en Pediatría: Una tubuladura de volutrol retiene internamente entre 5 y 15 ml de líquido (espacio muerto de purga). En neonatología, si se colocan 10 ml de antibiótico en el volutrol y no se purga la línea al terminar con 10 ml de suero puro, el fármaco se quedará atrapado en la manguera y el bebé no recibirá la dosis.',
        checkQuestion: {
          question: 'Un niño de 10 kg con fiebre requiere Paracetamol a 15 mg/kg. Tenemos jarabe de 120 mg en 5 ml. ¿Cuántos ml le tocan?',
          options: ['2.5 ml', '5 ml', '6.25 ml', '10 ml'],
          correctIndex: 2,
          explanation: 'Dosis necesaria: 10 kg × 15 mg/kg = 150 mg. Regla de tres: (150 mg × 5 ml) / 120 mg = 750 / 120 = 6.25 ml.'
        },
        moduleQuiz: [
          { id: 'c1m3q1', question: '¿Cuál es la dosis recomendada de Paracetamol jarabe o gotas por cada kilo de peso en un niño con fiebre?', options: ['1 mg por kilo', '10 a 15 mg por cada kilo de peso por toma', '100 mg por kilo', '500 mg fijos'], correctIndex: 1, rationale: 'La dosis analgésica y antipirética pediátrica estándar del paracetamol es de 10 a 15 mg/kg por toma cada 6 a 8 horas.' },
          { id: 'c1m3q2', question: 'Un niño de 10 kg con fiebre requiere Paracetamol a 15 mg/kg. Tenemos jarabe de 120 mg en 5 ml. ¿Cuántos ml le tocan?', options: ['2.5 ml', '5 ml', '6.25 ml', '10 ml'], correctIndex: 2, rationale: 'Dosis necesaria: 10 kg × 15 mg/kg = 150 mg. Regla de tres: (150 mg × 5 ml) / 120 mg = 750 / 120 = 6.25 ml.' },
          { id: 'c1m3q3', question: 'Un recién nacido pesa 2,000 gramos. ¿Cuántos kilogramos (kg) de peso debemos usar para calcular sus medicamentos?', options: ['0.2 kg', '2.0 kg', '20 kg', '200 kg'], correctIndex: 1, rationale: 'Para convertir gramos a kilogramos se divide entre 1,000: 2,000 g / 1,000 = 2.0 kg exactos.' },
          { id: 'c1m3q4', question: 'Si tenemos que inyectar 0.15 ml de una medicina a un bebé prematuro, ¿qué jeringa debemos usar obligatoriamente?', options: ['Jeringa de 10 ml', 'Jeringa de 5 ml', 'Jeringa de 20 ml', 'Jeringa de tuberculina de 1 ml calibrada en centésimas'], correctIndex: 3, rationale: 'Volúmenes menores a 0.5 ml exigen jeringa de 1 ml para evitar errores de sobredosificación letales en neonatos.' },
          { id: 'c1m3q5', question: '¿Por qué los bebés recién nacidos eliminan más lento los medicamentos por el riñón y el hígado que los adultos?', options: ['Porque toman leche', 'Porque su hígado y sus riñones todavía son inmaduros y tardan más en descomponer y orinar los fármacos', 'Porque duermen mucho', 'Es igual que un adulto'], correctIndex: 1, rationale: 'La inmadurez enzimática hepática y la menor filtración glomerular aumentan la vida media de los fármacos en neonatos.' },
          { id: 'c1m3q6', question: '¿Para qué se usa un "Volutrol" (bureta medidora de 100 ml) en la venoclisis de los niños?', options: ['Para enfriar el suero', 'Para medir con exactitud volúmenes pequeños y evitar que el niño reciba demasiado suero por accidente', 'Para guardar juguetes', 'Para no usar aguja'], correctIndex: 1, rationale: 'El volutrol limita el volumen disponible, protegiendo al niño de una sobrecarga hídrica accidental si una pinza falla.' },
          { id: 'c1m3q7', question: 'Un lactante de 8 kg necesita Ceftriaxona a 50 mg/kg/día en 1 sola dosis. ¿Cuántos miligramos le corresponden al día?', options: ['100 mg', '200 mg', '400 mg', '800 mg'], correctIndex: 2, rationale: 'Multiplicamos el peso por la dosis prescrita: 8 kg × 50 mg/kg = 400 mg al día.' },
          { id: 'c1m3q8', question: '¿Qué significa hacer una "doble dilución" o redilución en pediatría?', options: ['Echar dos veces la misma pastilla', 'Tomar 1 ml de una primera mezcla y agregarle más agua para que la dosis pequeña se pueda medir fácil', 'Lavar el frasco dos veces', 'Tomar dos vasos de agua'], correctIndex: 1, rationale: 'La re-dilución expande la solución original para que dosis microscópicas queden en volúmenes cómodos y seguros de cargar.' },
          { id: 'c1m3q9', question: '¿Qué pasa si al terminar de pasar un antibiótico en volutrol no enjuagamos la manguerita larga del equipo?', options: ['La manguera se rompe', 'La medicina se queda atrapada dentro de la manguera y el bebé no recibe la dosis completa', 'Se pone verde', 'No pasa nada'], correctIndex: 1, rationale: 'La manguera retiene hasta 10 ml de líquido (espacio muerto); si no se lava al terminar, el fármaco no llega al paciente.' },
          { id: 'c1m3q10', question: '¿Por qué jamás debemos llenar un volutrol con 150 ml de suero si el niño solo tiene indicado recibir 20 ml en la mañana?', options: ['Porque el plástico se mancha', 'Porque si la llave se abre sola por descuido, el niño se encharca de líquido y puede sufrir un edema de pulmón', 'Porque pesa mucho', 'Por el costo'], correctIndex: 1, rationale: 'Por bioseguridad, el volutrol solo debe cargarse con el volumen programado para el horario inmediato.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm4',
        number: 4,
<<<<<<< Updated upstream
        title: 'Medicamentos de Alto Riesgo (MAR): Electrolitos Concentrados, Insulinas y Heparina',
        part1Title: 'Parte 1: Manejo Seguro del Cloruro de Potasio (KCl 20%) y Sodio Hipertónico',
        part2Title: 'Parte 2: Insulinas, Anticoagulantes y Doble Chequeo Independiente',
        duration: '8 Horas Lectivas',
        summary: 'Reglas de seguridad para electrolitos concentrados (KCl 20%), preparación de retos de potasio, escala móvil de insulina y heparina.',
        content: [
          '1. Cloruro de Potasio al 20% (Kalium - Ampolla 10 ml = 2 g = 27 mEq de K+): Es el medicamento de alto riesgo más crítico. JAMÁS se administra en bolo EV directo porque produce paro cardíaco en sístole. Por vía periférica la concentración máxima es de 40 mEq/L y la velocidad máxima es de 10 mEq/hora. Velocidades de 10 a 20 mEq/h exigen Catéter Venoso Central y monitor cardíaco.',
          '2. Insulinas y Jeringas de Unidades (UI): Solo la Insulina Regular Cristalina (R) o análogos rápidos específicos pueden administrarse por vía endovenosa en bomba (concentración estándar UCI: 100 UI en 100 ml de NaCl 0.9% = 1 UI/ml). La insulina NPH (lechosa) es exclusivamente subcutánea.',
          '3. Doble Chequeo Independiente: Antes de administrar electrolitos concentrados, insulina EV, heparina o quimioterapia, dos profesionales deben verificar por separado el cálculo, la droga y la programación de la bomba.'
        ],
        tableData: {
          title: 'Electrolitos Concentrados Disponibles en el Perú y Reglas de Seguridad',
          headers: ['Electrolito Concentrado', 'Presentación', 'Equivalencia en mEq', 'Regla de Oro de Administración'],
          rows: [
            ['Cloruro de Potasio 20% (Kalium)', 'Ampolla 10 ml (2 g)', '27 mEq totales (2.7 mEq/ml)', 'PROHIBIDO EN BOLO. Máx 40 mEq/L y 10 mEq/h en periférica.'],
            ['Cloruro de Sodio 20% (Hipersodio)', 'Ampolla 20 ml (4 g)', '68 mEq totales (3.4 mEq/ml)', 'Diluir en suero base. Corregir Na+ máx 8-10 mEq/L en 24h.'],
            ['Sulfato de Magnesio 20%', 'Ampolla 10 ml (2 g)', '16.2 mEq Mg++ (200 mg/ml)', 'Pasar lento diluido (vigilar reflejo rotuliano y FR ≥16 rpm).'],
            ['Gluconato de Calcio 10%', 'Ampolla 10 ml (1 g)', '4.6 mEq Ca++ (93 mg Ca elemental)', 'Pasar en 10-20 min diluido. Vesicante severo si extravasa.']
          ]
        },
        keyPoints: [
          '1 ampolla de KCl 20% (10 ml) = 2 gramos = 27 mEq de Potasio (2.7 mEq por cada ml).',
          '1 ampolla de NaCl 20% (20 ml) = 4 gramos = 68 mEq de Sodio (3.4 mEq por cada ml).',
          'Insulina en infusión continua EV en UCI: 100 UI de Insulina Cristalina en 100 ml de NaCl 0.9% = 1 UI/ml.'
        ],
        clinicalPearl: 'Regla Vital del Potasio: Nunca inyectes KCl 20% directo a la vena ni a chorro libre. Todo "Reto de Potasio" debe infundirse estrictamente por Bomba de Infusión, rotulado con etiqueta roja de Alto Riesgo y vigilando dolor venoso.',
        checkQuestion: {
          question: '¿Cuántos miliequivalentes (mEq) totales de potasio contiene una ampolla de 10 ml de Cloruro de Potasio (KCl) al 20% y cuál es su velocidad máxima por vía periférica?',
          options: [
            '10 mEq — Puede pasarse en bolo de 1 minuto',
            '27 mEq (2.7 mEq/ml) — Velocidad máxima de 10 mEq/hora y concentración máxima de 40 mEq/L por vía periférica',
            '100 mEq — Sin límite de velocidad',
            '5 mEq — Solo intramuscular'
          ],
          correctIndex: 1,
          explanation: 'Una ampolla de KCl 20% (10 ml) contiene 2 g = 27 mEq; por vía periférica no debe superar 40 mEq/L ni 10 mEq/hora.'
        },
        moduleQuiz: [
          { id: 'c1m4q1', question: '¿Qué efecto mortal inmediato provoca la inyección por error de Cloruro de Potasio 20% en bolo directo?', options: ['Fiebre leve', 'Paro cardíaco fulminante en sístole por hiperpotasemia aguda', 'Hipo', 'Sueño profundo'], correctIndex: 1, rationale: 'El potasio concentrado despolariza bruscamente el miocardio deteniendo el corazón.' },
          { id: 'c1m4q2', question: '¿Qué tipo de insulina es la única que puede administrarse por vía endovenosa en emergencias como cetoacidosis diabética?', options: ['Insulina NPH lechosa', 'Insulina Regular (Cristalina / Rápida)', 'Insulina Glargina', 'Insulina Detemir'], correctIndex: 1, rationale: 'Solo la insulina cristalina transparente puede administrarse por vía endovenosa.' }
=======
        title: 'Fármacos Vasoactivos, Inotrópicos y Manejo de Extravasación en UCI',
        part1Title: 'Parte 1: Fármacos Vasoactivos e Inotrópicos en Cuidados Intensivos',
        part2Title: 'Parte 2: Seguridad en Vasoactivos y Manejo de Extravasación',
        duration: '8 Horas Lectivas',
        summary: 'Los fármacos vasoactivos regulan el tono vascular y el inotropismo en estados de shock. Su vida media ultracorta exige titulación en mcg/kg/min por vía central exclusiva y monitoreo de PAM.',
        content: [
          '1. Fórmula Universal de Infusión Vasoactiva: Velocidad (ml/h) = [Dosis deseada (mcg/kg/min) × Peso (kg) × 60 min] / Concentración (mcg/ml), donde Concentración (mcg/ml) = Fármaco total en mcg / Volumen total en ml. Constante Rápida (K) = Concentración (mcg/ml) / 60 min → ml/h = [Dosis × Peso] / K.',
          '2. Estabilidad Química en Dextrosa al 5%: Las catecolaminas (Noradrenalina, Adrenalina, Dopamina) son moléculas oxidables. Se recomienda prepararlas preferentemente en Dextrosa al 5% en Agua; su pH ligeramente ácido actúa como estabilizador previniendo la autooxidación que inactiva al fármaco en soluciones alcalinas.',
          '3. Vía Venosa Central Exclusiva y PAM: Los vasopresores potentes deben administrarse por Catéter Venoso Central (CVC) en un lumen exclusivo por el que NUNCA se deben pasar bolos rápidos (evita picos hipertensivos mortales). La titulación de noradrenalina busca una PAM objetivo de 65 a 70 mmHg.',
          '4. Protocolo de Emergencia ante Extravasación de Vasopresores: 1) Detener la infusión al instante y NO retirar el catéter todavía; aspirar 3-5 ml de sangre/fármaco por la cánula; 2) Infiltrar el antídoto específico Fentolamina subcutánea (5 a 10 mg en 10 ml de salino) en el área isquémica; 3) Aplicar compresas tibias secas y elevar la extremidad.'
        ],
        tableData: {
          title: 'Preparación y Dilución de Fármacos Vasoactivos Clave en UCI',
          headers: ['Fármaco Vasoactivo', 'Presentación Comercial', 'Dilución Estándar (UCI)', 'Rango de Dosis y Receptor Diana'],
          rows: [
            ['Noradrenalina', 'Ampolla 4 mg / 4 ml (1 mg/ml)', '8 mg (2 amp) en 100 ml Dx5% (80 mcg/ml) o 4 mg en 100 ml (40 mcg/ml)', '0.05 a 1.0 mcg/kg/min. Alfa-1 potente: sube PAM en shock séptico.'],
            ['Dopamina', 'Ampolla 200 mg / 5 ml', '400 mg (2 amp) en 250 ml Dx5% (1,600 mcg/ml)', 'Dopa (1-3); Beta-1 (4-10); Alfa-1 (>10 mcg/kg/min).'],
            ['Dobutamina', 'Ampolla 250 mg / 20 ml', '250 mg (1 amp) en 250 ml Dx5% (1,000 mcg/ml)', '2.5 a 20 mcg/kg/min. Beta-1 inotrópico: aumenta gasto cardíaco.'],
            ['Adrenalina', 'Ampolla 1 mg / 1 ml (1:1,000)', '4 mg (4 amp) en 100 ml Dx5% (40 mcg/ml)', '0.05 a 0.5 mcg/kg/min. Shock anafiláctico y paro cardíaco.']
          ]
        },
        keyPoints: [
          'Velocidad (ml/h) = [Dosis (mcg/kg/min) × Peso (kg) × 60] / Concentración (mcg/ml).',
          '4 mg de Noradrenalina (4,000 mcg) en 100 ml de Dextrosa 5% = 40 mcg/ml (8 mg en 100 ml = 80 mcg/ml).',
          'PAM objetivo en shock séptico con Noradrenalina: 65 a 70 mmHg.',
          'Antídoto de rescate ante extravasación de Noradrenalina/Dopamina: Fentolamina subcutánea.'
        ],
        clinicalPearl: 'Nitroglicerina y Nitroprusiato (Vasodilatadores Especiales): La Nitroglicerina (NTG) se adsorbe a los plásticos convencionales de PVC (pierde hasta 40-80% de potencia) y exige tubuladuras de polietileno libres de PVC. El Nitroprusiato de Sodio es extraordinariamente fotosensible: el frasco y la bajada deben cubrirse obligatoriamente con papel aluminio o funda opaca para evitar su conversión a cianuro tóxico bajo la luz.',
        checkQuestion: {
          question: 'Se preparan 4 mg de Noradrenalina en 100 ml de Dextrosa al 5%. ¿Cuál es la concentración final en microgramos por ml (mcg/ml)?',
          options: ['4 mcg/ml', '40 mcg/ml', '400 mcg/ml', '1,000 mcg/ml'],
          correctIndex: 1,
          explanation: '4 mg equivalen a 4,000 mcg. Dividiendo entre el volumen: 4,000 mcg / 100 ml = 40 mcg por cada mililitro.'
        },
        moduleQuiz: [
          { id: 'c1m4q1', question: '¿En qué unidad de medida de alta precisión se calculan y programan comúnmente las drogas vasoactivas en la UCI?', options: ['Gotas por día', 'Litros por hora', 'Microgramos por kilogramo por minuto (mcg/kg/min)', 'Cucharadas por hora'], correctIndex: 2, rationale: 'Debido a su alta potencia y vida media de minutos, los vasopresores se titulan en microgramos/kg de peso del paciente por minuto.' },
          { id: 'c1m4q2', question: '¿Por qué la Noradrenalina concentrada debe pasarse preferentemente por un Catéter Venoso Central (en el cuello o tórax)?', options: ['Porque mancha los brazos', 'Porque si se sale de una vena pequeña periférica provoca vasoconstricción severa y pudre la piel (necrosis tisular)', 'Porque el suero no avanza', 'Por estética'], correctIndex: 1, rationale: 'La noradrenalina cierra las arteriolas con tanta fuerza que la extravasación en una vena periférica causa gangrena y necrosis cutánea.' },
          { id: 'c1m4q3', question: '¿Qué solución dulce se prefiere para preparar y diluir las ampollas de Noradrenalina para que no pierda su fuerza?', options: ['Agua con sal pura', 'Dextrosa al 5% en agua (porque evita que el fármaco se oxide y se malogre)', 'Leche estéril', 'Alcohol medicinal'], correctIndex: 1, rationale: 'El pH de la solución de dextrosa al 5% protege a las catecolaminas de la autooxidación química destructiva.' },
          { id: 'c1m4q4', question: '¿Cuál es el valor objetivo de Presión Arterial Media (PAM) que se busca alcanzar comúnmente al subir la Noradrenalina en shock?', options: ['20 mmHg', '40 mmHg', 'Alrededor de 65 a 70 mmHg', '150 mmHg'], correctIndex: 2, rationale: 'Una PAM ≥ 65 mmHg garantiza la perfusión adecuada de órganos nobles como el cerebro y los riñones durante el shock séptico.' },
          { id: 'c1m4q5', question: 'Se preparan 4 mg de Noradrenalina en 100 ml de Dextrosa al 5%. ¿Cuál es la concentración final en microgramos por ml (mcg/ml)?', options: ['4 mcg/ml', '40 mcg/ml', '400 mcg/ml', '1,000 mcg/ml'], correctIndex: 1, rationale: '4 mg equivalen a 4,000 mcg. Dividiendo entre el volumen: 4,000 mcg / 100 ml = 40 mcg por cada mililitro.' },
          { id: 'c1m4q6', question: '¿Qué antídoto de rescate se inyecta debajo de la piel si se escapa accidentalmente Noradrenalina al brazo del paciente?', options: ['Paracetamol', 'Fentolamina (que abre de nuevo las arterias cerradas)', 'Insulina', 'Agua con hielo'], correctIndex: 1, rationale: 'La fentolamina es un vasodilatador antagonista alfa que revierte el espasmo isquémico provocado por el vasopresor.' },
          { id: 'c1m4q7', question: '¿Por qué el frasco y la bajada de Nitroprusiato de Sodio deben taparse obligatoriamente con papel aluminio negro?', options: ['Para que no se enfríe', 'Porque la luz lo descompone rápidamente y lo convierte en cianuro venenoso (es fotosensible)', 'Para que no brille en la noche', 'Por higiene'], correctIndex: 1, rationale: 'El nitroprusiato es altamente fotosensible; la radiación lumínica rompe su molécula liberando iones cianuro tóxicos.' },
          { id: 'c1m4q8', question: '¿Qué fármaco inotrópico se utiliza comúnmente para darle fuerza de contracción al corazón cuando falla como bomba?', options: ['Heparina', 'Dobutamina', 'Furosemida', 'Morfina'], correctIndex: 1, rationale: 'La dobutamina estimula los receptores Beta-1 del miocardio, aumentando la fuerza de contracción cardíaca (inotropismo positivo).' },
          { id: 'c1m4q9', question: '¿Por qué la manguera por donde pasa la Noradrenalina NUNCA debe usarse para poner bolos rápidos de otros medicamentos?', options: ['Porque se rompe la manguera', 'Porque empujaríamos de golpe todo el vasopresor acumulado, disparando la presión del paciente a niveles peligrosos', 'Porque mancha el catéter', 'Por el costo'], correctIndex: 1, rationale: 'Empujar un bolo por la línea de noradrenalina inyecta la droga acumulada en el espacio muerto, provocando picos hipertensivos y ACV.' },
          { id: 'c1m4q10', question: '¿Qué cuidado especial exige el medicamento Nitroglicerina (NTG) con el plástico de los equipos de infusión?', options: ['No puede tocar el metal', 'Se pega a los plásticos comunes de PVC perdiendo fuerza; requiere mangueras especiales de polietileno', 'Debe estar congelada', 'Se bate con fuerza'], correctIndex: 1, rationale: 'La nitroglicerina se adsorbe a las paredes del PVC convencional; se requieren líneas especiales no adsorbentes para asegurar la dosis.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm5',
        number: 5,
<<<<<<< Updated upstream
        title: 'Dosificación Pediátrica y Neonatal: Peso Corporal, Redilución y Espacio Muerto',
        part1Title: 'Parte 1: Cálculo Ponderal (mg/kg/día y mg/kg/dosis)',
        part2Title: 'Parte 2: Técnica de Redilución Neonatal y Purga de Equipos',
        duration: '6 Horas Lectivas',
        summary: 'Verificación de dosis por peso real en kilogramos, fraccionamiento horario y técnica de redilución para volúmenes menores a 0.5 ml.',
        content: [
          '1. Cálculo por Peso Corporal: En pediatría se distingue entre prescripción en mg/kg/dosis (se multiplica peso × dosis y ese valor se da en cada toma) y mg/kg/día (se multiplica peso × dosis diaria y el resultado se divide entre el número de tomas en 24 horas: cada 8 h = ÷3; cada 6 h = ÷4; cada 12 h = ÷2).',
          '2. Técnica de Redilución en Neonatología: Cuando el volumen a extraer de una ampolla adulta es minúsculo (< 0.2 a 0.5 ml), el espacio muerto del cono de la aguja (0.05-0.1 ml) genera errores de hasta el 50%. Por ello se realiza una redilución (tomar 1 ml del fármaco reconstituido y llevarlo a 10 ml con suero fisiológico en una jeringa de 10 ml) para obtener una concentración 10 veces más manejable.'
        ],
        keyPoints: [
          'Cada 24 h = 1 dosis/día | Cada 12 h = 2 dosis/día | Cada 8 h = 3 dosis/día | Cada 6 h = 4 dosis/día.',
          'Paracetamol pediátrico: 10 a 15 mg/kg/dosis cada 6-8 h | Ibuprofeno: 5 a 10 mg/kg/dosis.',
          'En volúmenes < 0.5 ml aplicar técnica de doble dilución (redilución 1:10) con jeringa de 1 ml.'
        ],
        clinicalPearl: 'Cuidado con la Diferencia entre "mg/kg/dosis" y "mg/kg/día": Si el médico prescribe Amikacina 15 mg/kg/día cada 12 horas para un niño de 10 kg, la dosis total del día es 150 mg, por lo que cada 12 horas recibirá 75 mg (y no 150 mg cada 12 h).',
        checkQuestion: {
          question: 'Un lactante de 10 kg tiene prescripción de Amoxicilina 80 mg/kg/día dividido cada 8 horas. Si la suspensión viene de 250 mg en 5 ml, ¿cuántos mililitros le corresponden en CADA toma?',
          options: ['2.5 ml por toma', '5.3 ml por toma', '8 ml por toma', '16 ml por toma'],
          correctIndex: 1,
          explanation: 'Dosis diaria total: 10 kg × 80 mg = 800 mg/día. Dividido cada 8 h (3 tomas): 800 / 3 = 266.6 mg por toma. Como vienen 250 mg en 5 ml (50 mg/ml): 266.6 / 50 = 5.3 ml por toma.'
        }
=======
        title: 'Electrolitos Concentrados, Soluciones Hipertónicas y Etiquetado Rojo',
        part1Title: 'Parte 1: Electrolitos Concentrados y Soluciones de Alto Riesgo',
        part2Title: 'Parte 2: Etiquetado Rojo de Alto Riesgo y Toxicidad Electrolítica',
        duration: '6 Horas Lectivas',
        summary: 'Los electrolitos concentrados encabezan la lista de Medicamentos de Alto Riesgo de la OMS. Su almacenamiento diferenciado, dilución estricta e inversión de la bolsa previenen paros cardíacos en asistolia y mielinólisis pontina.',
        content: [
          '1. Regla de Oro del Cloruro de Potasio (Kalium / KCl 20%): EL CLORURO DE POTASIO CONCENTRADO NUNCA SE DEBE ADMINISTRAR EN BOLO DIRECTO IV (genera despolarización miocárdica masiva y paro cardíaco en asistolia instantáneo). En vía periférica: concentración máxima 40 mEq/L a velocidad máxima de 10 mEq/hora. En vía central (CVC): hasta 80 mEq/L a máximo 20 mEq/hora con monitor cardíaco.',
          '2. Homogeneización Obligatoria del Potasio: El KCl es más denso que el agua; si se inyecta en una bolsa colgada sin mezclar, decanta al fondo y el paciente recibe un bolo mortal puro al inicio. Es obligatorio invertir y agitar la bolsa al menos 5 veces.',
          '3. Solución Salina Hipertónica al 3% y Mielinólisis Pontina: Para edema cerebral o hiponatremia sintomática severa se mezclan 850 ml de NaCl 0.9% + 150 ml de NaCl 20% (= 513 mEq/L). En hiponatremia crónica no se debe elevar el sodio >8 a 10 mEq/L en 24 h para evitar la Mielinólisis Pontina Central (cuadriplejia irreversible).',
          '4. Sulfato de Magnesio y Bicarbonato de Sodio: En gestantes con preeclampsia recibiendo Sulfato de Magnesio 20%, el primer signo de toxicidad (>7 mEq/L) es la pérdida del reflejo patelar/rotuliano; su antídoto específico es el Gluconato de Calcio al 10% (1 g IV lento en 10 min). El Bicarbonato de Sodio 8.4% nunca debe mezclarse en la misma vía con Gluconato de Calcio porque precipita carbonato cálcico lechoso.'
        ],
        tableData: {
          title: 'Electrolitos Concentrados: Presentaciones, Contenido Iónico y Bioseguridad',
          headers: ['Electrolito Concentrado', 'Concentración Comercial', 'Contenido Iónico', 'Riesgo Crítico y Bioseguridad'],
          rows: [
            ['Cloruro de Potasio (KCl)', 'Ampolla 20% (o 14.9%) en 10 ml', '27 mEq de K+ en 20% (20 mEq en 14.9%)', 'Letal en bolo. Diluir, etiquetar en ROJO e invertir la bolsa 5 veces.'],
            ['Cloruro de Sodio 20%', 'Ampolla 20% en 20 ml (Hipersodio)', '68 mEq de Na+ (3.4 mEq/ml)', 'Para preparar NaCl 3%. Corregir Na+ lento (<8-10 mEq/24h).'],
            ['Gluconato de Calcio 10%', 'Ampolla 10% en 10 ml', '4.6 mEq de Ca++ (100 mg/ml)', 'Vesicante; diluir en 100 ml y pasar en 20-30 min. Antídoto de MgSO4 y K+.'],
            ['Sulfato de Magnesio 20%', 'Ampolla 20% en 10 ml', '2 g de MgSO4 (16.2 mEq)', 'Vigilar reflejo rotuliano, FR (>12 rpm) y diuresis (>30 ml/h).']
          ]
        },
        keyPoints: [
          'KCl 20% (10 ml = 27 mEq K+): NUNCA en bolo IV. Máximo periférico: 40 mEq/L a 10 mEq/h.',
          'Almacenamiento en gaveta separada con llave y etiqueta ROJA: "ALERTA: CONTIENE POTASIO - NO PASAR EN BOLO".',
          'Toxicidad por Sulfato de Magnesio: abolición del reflejo rotuliano → suspender e inyectar Gluconato de Calcio 10%.',
          'Bicarbonato de Sodio + Gluconato de Calcio = precipitado sólido lechoso de carbonato de calcio.'
        ],
        clinicalPearl: 'Homogeneización Obligatoria de las Mezclas con Potasio: El cloruro de potasio es más denso que el agua. Al inyectar una ampolla de KCl dentro de un frasco o bolsa de suero colgado, el potasio se va directo al fondo por gravedad. Si no se invierte la bolsa al menos 5 veces para mezclarla bien, el paciente recibirá un bolo puro de potasio concentrado en los primeros minutos de infusión.',
        checkQuestion: {
          question: '¿Cuál es la velocidad máxima de infusión recomendada para pasar potasio por una vía venosa periférica del brazo?',
          options: ['100 mEq por hora', 'Máximo 10 mEq por hora (para no quemar la vena ni dar arritmias)', '50 mEq por minuto', 'No tiene límite'],
          correctIndex: 1,
          explanation: 'En venas periféricas el límite seguro son 10 mEq/hora; velocidades mayores provocan flebitis química intensa y riesgo de arritmias.'
        },
        moduleQuiz: [
          { id: 'c1m5q1', question: '¿Cuál es la regla de oro de seguridad más importante y obligatoria sobre el Cloruro de Potasio (KCl) concentrado?', options: ['Que se puede poner directo en la vena con jeringa rápida', 'NUNCA DEBE ADMINISTRARSE EN BOLO DIRECTO POR VÍA INTRAVENOSA porque causa paro cardíaco en asistolia', 'Que sabe a sal', 'Que cura la fiebre'], correctIndex: 1, rationale: 'El potasio concentrado en bolo directo paraliza el corazón instantáneamente en diástole; siempre debe ir bien diluido y en infusión lenta.' },
          { id: 'c1m5q2', question: '¿Por qué es obligatorio mezclar e invertir la bolsa de suero varias veces después de inyectarle una ampolla de potasio?', options: ['Para hacer espuma', 'Porque el potasio es pesado y se va al fondo; si no se mezcla, el paciente recibe un chorro mortal de potasio puro al inicio', 'Para enfriarlo', 'Por juego'], correctIndex: 1, rationale: 'Por diferencia de densidad el KCl decanta en el pico de la bolsa; homogeneizar la mezcla garantiza una concentración uniforme y segura.' },
          { id: 'c1m5q3', question: '¿Qué color de etiqueta de alerta se utiliza en los hospitales para marcar las soluciones que llevan electrolitos concentrados?', options: ['Etiqueta de color azul', 'Etiqueta verde', 'Etiqueta de color ROJO brillante de alto riesgo', 'Sin etiqueta'], correctIndex: 2, rationale: 'Las normas internacionales de seguridad del paciente exigen rotulación roja visible para alertar que contiene electrolitos peligrosos.' },
          { id: 'c1m5q4', question: '¿Cuál es la velocidad máxima de infusión recomendada para pasar potasio por una vía venosa periférica del brazo?', options: ['100 mEq por hora', 'Máximo 10 mEq por hora (para no quemar la vena ni dar arritmias)', '50 mEq por minuto', 'No tiene límite'], correctIndex: 1, rationale: 'En venas periféricas el límite seguro son 10 mEq/hora; velocidades mayores provocan flebitis química intensa y riesgo de paro cardíaco.' },
          { id: 'c1m5q5', question: '¿Qué medicamento de rescate actúa como antídoto para neutralizar la intoxicación severa por Sulfato de Magnesio?', options: ['Vitamina C', 'Gluconato de Calcio al 10% por vía endovenosa lenta', 'Paracetamol', 'Insulina'], correctIndex: 1, rationale: 'El calcio antagoniza directamente los efectos tóxicos neuromusculares y cardíacos del magnesio en el organismo.' },
          { id: 'c1m5q6', question: 'Al cuidar a una gestante que recibe Sulfato de Magnesio para la preeclampsia, ¿qué reflejo se evalúa siempre en la rodilla?', options: ['El reflejo de la risa', 'El reflejo rotuliano o patelar (si desaparece avisa que el magnesio se está volviendo tóxico)', 'La fuerza del zapato', 'El cosquilleo'], correctIndex: 1, rationale: 'La pérdida del reflejo osteotendinoso rotuliano es el primer signo de toxicidad por hipermagnesemia; obliga a detener la infusión.' },
          { id: 'c1m5q7', question: '¿Por qué NO se debe subir demasiado rápido el sodio con sueros salinos al 3% en una persona con sodio muy bajo en sangre?', options: ['Porque le da mucha sed', 'Porque puede romper la cubierta de las neuronas del cerebro (mielinólisis pontina) y dejarlo paralítico', 'Porque se arruga la piel', 'No pasa nada'], correctIndex: 1, rationale: 'La corrección rápida de sodio deshidrata las células del puente cerebral, causando daño neurológico irreversible (mielinólisis).' },
          { id: 'c1m5q8', question: '¿Qué pasa si mezclamos en la misma jeringa o tubuladura Bicarbonato de Sodio con Gluconato de Calcio?', options: ['Se vuelve perfume', 'Se forma un precipitado duro y lechoso de carbonato de calcio que tapa la aguja y hace daño a la sangre', 'Se calienta el suero', 'Nada'], correctIndex: 1, rationale: 'El calcio y el bicarbonato reaccionan químicamente formando sales de calcio insolubles que precipitan en la manguera.' },
          { id: 'c1m5q9', question: '¿Cómo debe inyectarse el Gluconato de Calcio al 10% por vía endovenosa para que no provoque arritmias ni dolor?', options: ['De un solo empujón en 1 segundo', 'Diluido y en infusión lenta durante 15 a 30 minutos', 'Frío con hielo', 'Se debe tomar con leche'], correctIndex: 1, rationale: 'El calcio inyectado bruscamente produce hipotensión, bradicardia severa y vasodilatación con sensación de calor quemante.' },
          { id: 'c1m5q10', question: '¿Dónde deben guardarse las ampollas de electrolitos concentrados (potasio, hipersodio) en las salas de hospital?', options: ['En la mesa de luz del paciente', 'En un cajón o bandeja separada con llave o advertencia roja, lejos de las ampollas de agua común', 'Junto a los refrescos', 'En el bolsillo'], correctIndex: 1, rationale: 'El almacenamiento separado previene la confusión de ampollas parecidas, una de las mayores causas de eventos centinela en enfermería.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm6',
        number: 6,
<<<<<<< Updated upstream
        title: 'Titulación de Fármacos Vasoactivos e Inotrópicos en UCI (mcg/kg/min)',
        part1Title: 'Parte 1: Preparación Estándar de Noradrenalina, Dopamina, Dobutamina y Adrenalina',
        part2Title: 'Parte 2: Conversión Bidireccional entre ml/hora y mcg/kg/min',
        duration: '6 Horas Lectivas',
        summary: 'Diluciones estándar en cuidados intensivos y dominio de las fórmulas para convertir velocidad de bomba (ml/h) a dosis (mcg/kg/min).',
        content: [
          '1. Preparaciones Estándar en UCI: Noradrenalina (1 ampolla = 4 mg = 4,000 mcg): diluir 1 ampolla (4 mg) en 100 ml de Dextrosa 5% → Concentración = 40 mcg/ml (o 2 ampollas = 8 mg en 100 ml → 80 mcg/ml). Dopamina (1 ampolla = 200 mg) o Dobutamina (1 ampolla = 250 mg): diluir 2 ampollas de Dopamina (400 mg = 400,000 mcg) en 250 ml → Concentración = 1,600 mcg/ml.',
          '2. Fórmulas Maestras de Titulación en UCI: Para hallar la Dosis que recibe el paciente: Dosis (mcg/kg/min) = [Velocidad (ml/h) × Concentración (mcg/ml)] / [Peso (kg) × 60]. Para hallar la Velocidad a programar en la bomba: Velocidad (ml/h) = [Dosis indicada (mcg/kg/min) × Peso (kg) × 60] / Concentración (mcg/ml).'
        ],
        tableData: {
          title: 'Diluciones Estándar de Aminas Vasoactivas en Cuidados Críticos (UCI)',
          headers: ['Fármaco Vasoactivo', 'Presentación Ampolla', 'Dilución Estándar UCI (100 ml)', 'Concentración Final (mcg/ml)'],
          rows: [
            ['Noradrenalina (Simple)', '4 mg / 4 ml', '4 mg (1 amp) en 100 ml D5%', '40 mcg/ml (Rango: 0.05 - 0.5 mcg/kg/min)'],
            ['Noradrenalina (Doble)', '4 mg / 4 ml', '8 mg (2 amp) en 100 ml D5%', '80 mcg/ml'],
            ['Adrenalina (Epinefrina)', '1 mg / 1 ml', '4 mg (4 amp) en 100 ml D5% o SF', '40 mcg/ml'],
            ['Dobutamina', '250 mg / 20 ml', '250 mg (1 amp) en 250 ml D5% o SF', '1,000 mcg/ml (Rango: 2 - 20 mcg/kg/min)']
          ]
        },
        keyPoints: [
          'Concentración (mcg/ml) = Total de microgramos (mg × 1,000) / Volumen total de la mezcla (ml).',
          'Dosis (mcg/kg/min) = [ml/h × Concentración (mcg/ml)] / (Peso en kg × 60).',
          'Velocidad (ml/h) = [Dosis (mcg/kg/min) × Peso en kg × 60] / Concentración (mcg/ml).'
        ],
        clinicalPearl: 'Seguridad en Infusión de Aminas Vasoactivas: Las aminas nunca deben interrumpirse bruscamente ni purgarse con bolos rápidos por la misma línea, ya que un bolo accidental de Noradrenalina provoca crisis hipertensiva y arritmias graves.',
        checkQuestion: {
          question: 'En UCI se prepara una infusión con 2 ampollas de Noradrenalina (8 mg totales) en 100 ml de Dextrosa al 5% (80 mcg/ml). Si el paciente pesa 70 kg y la bomba corre a 6.3 ml/h, ¿qué dosis en mcg/kg/min recibe?',
          options: ['0.05 mcg/kg/min', '0.12 mcg/kg/min', '0.50 mcg/kg/min', '1.2 mcg/kg/min'],
          correctIndex: 1,
          explanation: 'Dosis = (6.3 ml/h × 80 mcg/ml) / (70 kg × 60) = 504 / 4,200 = 0.12 mcg/kg/min.'
        }
=======
        title: 'Anticoagulantes, Insulinas y Cultura de Seguridad Farmacológica',
        part1Title: 'Parte 1: Anticoagulantes, Insulinas y Seguridad Farmacológica',
        part2Title: 'Parte 2: Prevención de Errores de Medicación y Cultura de Seguridad',
        duration: '6 Horas Lectivas',
        summary: 'La Heparina Sódica y la Insulina Regular se dosifican en Unidades Internacionales (UI). Su preparación segura, junto con la prevención de errores LASA y abreviaturas prohibidas, evita eventos centinela.',
        content: [
          '1. Heparina No Fraccionada vs. Enoxaparina: La Heparina Sódica viene en frasco de 25,000 UI / 5 ml (5,000 UI/ml); su dilución estándar es 25,000 UI en 250 ml NaCl 0.9% = 100 UI/ml, titulada con TTPA (1.5 a 2.5 veces el control) y su antídoto es el Sulfato de Protamina. La Enoxaparina se administra vía subcutánea abdominal a 2 cm del ombligo sin aspirar ni frotar.',
          '2. Protocolo de Insulina Regular en Infusión Continua (1:1): Se mezclan 100 UI de Insulina Regular (Cristalina) en 100 ml de NaCl 0.9% = 1 UI/ml (1 ml/h = 1 UI/h). Como la insulina se adsorbe al plástico PVC, es obligatorio purgar y descartar los primeros 20 a 50 ml antes de conectar al paciente, y medir glucemia capilar cada 1 hora estricta.',
          '3. Peligro de las Abreviaturas Prohibidas y Medicamentos LASA: La Joint Commission y el ISMP prohíben escribir a mano "U" o "UI" (se confunde con un "0", leyendo 100 en vez de 10 U), omitir el cero inicial (".5 mg" parece "5 mg"; escribir siempre "0.5 mg") o añadir cero final innecesario ("5.0 mg" parece "50 mg"). Para medicamentos LASA se emplea Tall Man Lettering: DOBUtamina vs. DOPamina.',
          '4. Barreras de Seguridad en Preparación: Zona de No Interrupción, Doble Chequeo Independiente (intercepta el 95% de errores), Rotulado Inmediato de Jeringas y Cultura Justa No Punitiva para reportar cuasi-errores (near miss).'
        ],
        tableData: {
          title: 'Protocolo de Insulina IV y Barreras de Seguridad en Inyectables',
          headers: ['Etapa / Barrera', 'Procedimiento Técnico Estandarizado', 'Principio Asistencial y Riesgo Evitado'],
          rows: [
            ['1. Dilución Insulina 1:1', 'Cargar 100 UI de Insulina Regular en jeringa U-100 y mezclar en 100 ml NaCl 0.9%.', 'Concentración exacta de 1 UI/ml (1 ml/h = 1 UI/h). Nunca usar jeringa de ml.'],
            ['2. Purga por Adsorción', 'Purgar la tubuladura y descartar los primeros 20 a 50 ml de solución.', 'La insulina se pega al PVC; el purgado satura el plástico asegurando la dosis real.'],
            ['3. Monitoreo Horario', 'Medir glucemia capilar cada 1 hora estricta durante la infusión IV.', 'Permite titular la bomba en cetoacidosis evitando hipoglucemia severa.'],
            ['Doble Chequeo y Rotulado', 'Segundo enfermero recalcula desde cero; rotular toda jeringa apenas se carga.', 'Intercepta el 95% de errores y evita inyectar fármacos transparentes por error.']
          ]
        },
        keyPoints: [
          '100 UI de Insulina Regular en 100 ml de NaCl 0.9% = 1 UI por cada 1 ml.',
          'Purgar 20 a 50 ml del equipo antes de conectar la infusión de insulina para saturar el plástico PVC.',
          'Heparina Sódica IV: control con TTPA; antídoto específico: Sulfato de Protamina.',
          'Prohibido escribir ".5 mg" (escribir "0.5 mg") o "5.0 mg" (escribir "5 mg").'
        ],
        clinicalPearl: 'Jeringas de Insulina Graduadas en Unidades (UI): Las jeringas de insulina están calibradas exclusivamente en Unidades Internacionales: Jeringa U-100 (1 ml = 100 UI; cada raya = 1 o 2 UI). NUNCA usar jeringas comunes de mililitros para cargar insulina; confundir 0.1 ml con 10 o 100 UI ha provocado muertes por shock hipoglucémico.',
        checkQuestion: {
          question: 'Se diluyen 100 Unidades de Insulina Regular en 100 ml de Suero Fisiológico. ¿Cuántas unidades de insulina hay en cada ml?',
          options: ['10 UI en cada ml', '1 Unidad Internacional (UI) en cada ml exacto', '100 UI por ml', 'Cero unidades'],
          correctIndex: 1,
          explanation: 'Al dividir 100 Unidades entre 100 mililitros resulta en una proporción directa de 1 Unidad por cada mililitro (1 ml/h = 1 UI/h).'
        },
        moduleQuiz: [
          { id: 'c1m6q1', question: 'Se diluyen 100 Unidades de Insulina Regular en 100 ml de Suero Fisiológico. ¿Cuántas unidades de insulina hay en cada ml?', options: ['10 UI en cada ml', '1 Unidad Internacional (UI) en cada ml exacto', '100 UI por ml', 'Cero unidades'], correctIndex: 1, rationale: 'Al dividir 100 Unidades entre 100 mililitros resulta en una proporción directa y sencilla de 1 Unidad por cada mililitro (1 ml/h = 1 UI/h).' },
          { id: 'c1m6q2', question: '¿Por qué se debe purgar y botar los primeros 20 a 50 ml de suero al preparar una bomba con infusión de insulina?', options: ['Porque el suero está sucio', 'Porque la insulina se pega al plástico de la manguera; purgar primero asegura que el paciente reciba la dosis real', 'Para probar la máquina', 'Por error'], correctIndex: 1, rationale: 'La insulina sufre adsorción física en el plástico de la tubuladura; saturar el circuito antes de conectar evita subdosificaciones iniciales.' },
          { id: 'c1m6q3', question: '¿Qué examen de laboratorio en sangre se utiliza para controlar y ajustar la dosis de Heparina Sódica endovenosa?', options: ['Examen de orina', 'Tiempo de Tromboplastina Parcial Activada (TTPA)', 'La glucosa en ayunas', 'El colesterol'], correctIndex: 1, rationale: 'El TTPA mide el tiempo de coagulación de la vía intrínseca; el objetivo es mantenerlo entre 1.5 y 2.5 veces el valor control.' },
          { id: 'c1m6q4', question: '¿Cuál es el medicamento antídoto que neutraliza de inmediato los sangrados causados por la Heparina no fraccionada?', options: ['Vitamina C', 'Sulfato de Protamina', 'Calcio', 'Paracetamol'], correctIndex: 1, rationale: 'El sulfato de protamina es una proteína con carga positiva que inactiva a la heparina formando un compuesto neutral sin efecto anticoagulante.' },
          { id: 'c1m6q5', question: '¿Por qué NUNCA se debe usar una jeringa común de 5 ml para medir y cargar dosis de Insulina?', options: ['Porque la jeringa se rompe', 'Porque las jeringas comunes miden en mililitros y pueden provocar una sobredosis masiva de insulina que mate al paciente', 'Porque es muy corta', 'Por el color'], correctIndex: 1, rationale: 'La insulina se mide en jeringas especiales graduadas en Unidades (UI); confundir 0.5 ml con 50 o 100 UI causa hipoglucemias mortales.' },
          { id: 'c1m6q6', question: '¿En qué parte del cuerpo se inyecta comúnmente la Heparina de bajo peso molecular (Enoxaparina)?', options: ['En el cuello', 'En el tejido graso debajo de la piel del abdomen (subcutánea), a los lados del ombligo', 'En los huesos', 'En el músculo del muslo'], correctIndex: 1, rationale: 'La enoxaparina se inyecta por vía subcutánea en los flancos abdominales, evitando masajear la zona para prevenir hematomas.' },
          { id: 'c1m6q7', question: '¿Por qué está prohibido escribir la dosis con un punto sin un cero adelante (como poner ".5 mg")?', options: ['Porque gasta poca tinta', 'Porque si el punto no se ve bien, el enfermero puede leer "5 mg" y darle diez veces más dosis al paciente', 'Porque es feo', 'Por regla gramatical'], correctIndex: 1, rationale: 'La ausencia del cero guía (".5 mg") es una de las causas más frecuentes de errores de sobredosificación por diez; debe escribirse "0.5 mg".' },
          { id: 'c1m6q8', question: '¿Qué significa la técnica "Tall Man Lettering" (letras mayúsculas) en medicamentos con nombres parecidos como DOBUtamina y DOPamina?', options: ['Un adorno de computadora', 'Escribir con mayúsculas las partes diferentes del nombre para que el personal no se confunda de medicamento al leer la ampolla', 'Poner apodos', 'Idioma inglés'], correctIndex: 1, rationale: 'Resaltar en mayúsculas las sílabas distintas de fármacos parecidos (LASA) evita confusiones visuales en farmacia y enfermería.' },
          { id: 'c1m6q9', question: '¿Cada cuánto tiempo se debe medir el azúcar en sangre (glucemia capilar) a un paciente en UCI con infusión continua de insulina?', options: ['Una vez a la semana', 'Cada 1 hora de forma estricta', 'Cada 24 horas', 'Solo si se desmaya'], correctIndex: 1, rationale: 'La insulina IV actúa en minutos; el control glucémico horario es obligatorio para ajustar el goteo y evitar caídas bruscas de azúcar.' },
          { id: 'c1m6q10', question: '¿Por qué es obligatorio ponerle una etiqueta con el nombre a la jeringa inmediatamente después de cargar una medicina?', options: ['Para saber de quién es', 'Para evitar inyectar por error una medicina transparente peligrosa creyendo que era agua o suero de lavado', 'Para que no se ensucie', 'Por lujo'], correctIndex: 1, rationale: 'Muchas ampollas son líquidos transparentes inodoros; una jeringa sin rotular en la batea hospitalaria es una trampa mortal de error asistencial.' }
        ]
>>>>>>> Stashed changes
      }
    ],
    finalExam: [
      {
        id: 'q1',
<<<<<<< Updated upstream
        question: '¿Cuántos miligramos por mililitro (mg/ml) contiene una ampolla de Gluconato de Calcio al 10% y a cuántos microgramos (mcg) equivalen 4 mg de Noradrenalina?',
        options: [
          '10 mg/ml — 400 mcg',
          '100 mg/ml — 4,000 mcg',
          '1,000 mg/ml — 40,000 mcg',
          '1 mg/ml — 40 mcg'
        ],
        correctIndex: 1,
        rationale: 'Por la regla (% × 10), una solución al 10% contiene 100 mg/ml; y como 1 mg = 1,000 mcg, 4 mg equivalen a 4,000 mcg.'
      },
      {
        id: 'q2',
        question: 'Con respecto a las incompatibilidades físico-químicas endovenosas graves, marque la afirmación CORRECTA:',
        options: [
          'La Fenitoína se diluye en Dextrosa al 5% y la Ceftriaxona en Lactato de Ringer',
          'La Fenitoína se diluye exclusivamente en Cloruro de Sodio al 0.9% (precipita en Dextrosa) y la Ceftriaxona jamás debe mezclarse con soluciones con Calcio',
          'Todos los medicamentos pueden mezclarse en la misma jeringa',
          'La Vancomicina se administra en bolo directo de 1 minuto'
        ],
        correctIndex: 1,
        rationale: 'La Fenitoína cristaliza en medios ácidos como la Dextrosa 5%, y la Ceftriaxona forma precipitados mortales con el calcio.'
      },
      {
        id: 'q3',
        question: 'Se indica infundir 1,500 ml de Cloruro de Sodio 0.9% en 12 horas. ¿Cuál es la velocidad en gotas por minuto y en mililitros por hora (ml/h)?',
        options: [
          '28 gotas/min y 84 ml/h',
          '42 gotas/min y 125 ml/h',
          '50 gotas/min y 150 ml/h',
          '14 gotas/min y 42 ml/h'
        ],
        correctIndex: 1,
        rationale: 'ml/h = 1,500 / 12 = 125 ml/h. Gotas/min = 1,500 / (12 × 3) = 1,500 / 36 = 41.66 ≈ 42 gotas/min.'
      },
      {
        id: 'q4',
        question: 'Respecto a la administración segura del Cloruro de Potasio al 20% (Kalium 10 ml = 27 mEq), señale el protocolo obligatorio:',
        options: [
          'Administrar en bolo directo cuando el potasio sérico es menor de 2.5 mEq/L',
          'Prohibido administrar en bolo directo; diluir obligatoriamente y por vía periférica no superar los 40 mEq/L ni la velocidad de 10 mEq/hora',
          'Inyectar por vía intramuscular en el glúteo',
          'Pasar a chorro libre sin bomba de infusión'
        ],
        correctIndex: 1,
        rationale: 'El KCl concentrado en bolo produce paro cardíaco en sístole; exige dilución y control estricto de velocidad.'
      },
      {
        id: 'q5',
        question: 'Un niño de 12 kg requiere Ceftriaxona a una dosis de 50 mg/kg/día cada 24 horas. Si el frasco de 1 g (1,000 mg) se reconstituye en 10 ml de agua estéril, ¿qué volumen exacto debe extraer?',
        options: ['3 ml', '5 ml', '6 ml', '8 ml'],
        correctIndex: 2,
        rationale: 'Dosis requerida: 12 kg × 50 mg = 600 mg. Concentración del frasco: 1,000 mg / 10 ml = 100 mg/ml. Volumen = 600 / 100 = 6 ml.'
=======
        question: 'Si un vial de 1 g de Ceftriaxona desplaza 0.8 ml de volumen y deseamos obtener un volumen final exacto de 10 ml (100 mg/ml), ¿cuánta agua estéril debemos agregar y cuántos ml extraemos para una dosis de 250 mg?',
        options: [
          'Agregar 10 ml de agua y extraer 2.5 ml',
          'Agregar 9.2 ml de agua estéril y extraer 2.5 ml',
          'Agregar 9.2 ml de agua estéril y extraer 5 ml',
          'Agregar 8 ml de agua estéril y extraer 1.25 ml'
        ],
        correctIndex: 1,
        rationale: 'Restando el volumen de desplazamiento (10 ml - 0.8 ml = 9.2 ml de diluyente) se obtienen exactamente 10 ml a 100 mg/ml. Para 250 mg: (250 × 10) / 1000 = 2.5 ml.'
      },
      {
        id: 'q2',
        question: 'Se prescribe pasar 1,000 ml de Cloruro de Sodio al 0.9% en 8 horas por normogotero estándar. ¿A cuántas gotas por minuto y a cuántos ml/hora equivale?',
        options: [
          '14 gotas/min (41.6 ml/h)',
          '28 gotas/min (83.3 ml/h)',
          '42 gotas/min (125 ml/h)',
          '67 gotas/min (200 ml/h)'
        ],
        correctIndex: 2,
        rationale: 'Gotas/min = 1,000 / (8 × 3) = 1,000 / 24 = 41.6 ≈ 42 gotas/min. En bomba o microgotero: 1,000 / 8 = 125 ml/h.'
      },
      {
        id: 'q3',
        question: 'Un niño de 10 kg con fiebre requiere Paracetamol a 15 mg/kg/dosis. Se dispone de jarabe de 120 mg en 5 ml. ¿Cuántos mililitros exactos se deben administrar?',
        options: [
          '2.5 ml',
          '5.0 ml',
          '6.25 ml',
          '7.5 ml'
        ],
        correctIndex: 2,
        rationale: 'Dosis requerida: 10 kg × 15 mg/kg = 150 mg. Aplicando regla de tres: (150 mg × 5 ml) / 120 mg = 750 / 120 = 6.25 ml.'
      },
      {
        id: 'q4',
        question: 'Se preparan 4 mg de Noradrenalina en 100 ml de Dextrosa al 5%. ¿Cuál es su concentración en mcg/ml y qué antídoto subcutáneo se infiltra si ocurre extravasación accidental?',
        options: [
          '4 mcg/ml — Antídoto: Naloxona',
          '40 mcg/ml — Antídoto: Fentolamina subcutánea',
          '80 mcg/ml — Antídoto: Flumazenil',
          '400 mcg/ml — Antídoto: Sulfato de Protamina'
        ],
        correctIndex: 1,
        rationale: '4 mg = 4,000 mcg; dividido entre 100 ml = 40 mcg/ml. La Fentolamina (5-10 mg SC) es el bloqueador alfa que revierte la vasoconstricción isquémica local.'
      },
      {
        id: 'q5',
        question: 'Respecto al Cloruro de Potasio (KCl 20%) y la Insulina Regular en infusión continua, señale la afirmación correcta de bioseguridad:',
        options: [
          'El KCl se puede pasar en bolo directo si hay hipopotasemia severa',
          'El KCl nunca se administra en bolo directo (máx. 10 mEq/h por vía periférica invirtiendo la bolsa 5 veces) y en la infusión de Insulina 1:1 se purgan 20-50 ml por adsorción al PVC',
          'La insulina se mide con jeringa común de 5 ml y no requiere control de glucemia',
          'El antídoto del Sulfato de Magnesio es el Bicarbonato de Sodio en la misma vía'
        ],
        correctIndex: 1,
        rationale: 'El KCl en bolo produce paro en asistolia; requiere dilución, inversión de la bolsa 5 veces y velocidad ≤10 mEq/h periférica. La insulina se adhiere al PVC, exigiendo purgar 20-50 ml.'
>>>>>>> Stashed changes
      }
    ]
  },

  // ==========================================================================
  // CURSO 2: GUÍA DE TRIAGE Y ESCALAS CLÍNICAS ESENCIALES (40 HORAS - 6 MÓDULOS)
  // ==========================================================================
  {
<<<<<<< Updated upstream
    id: 'triage-escalas-clinicas',
    code: 'EC-CUR-002',
    title: 'Guía de Triage y Escalas Clínicas Esenciales',
    subtitle: 'Triaje estructurado (NTS N° 042-MINSA / ESI / Manchester), TEP pediátrico, Glasgow, RASS, CAM-ICU, NEWS2, qSOFA, SOFA, dolor y caídas.',
    category: 'Valoración & Emergencias',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 042-MINSA/DGSP-V.01 / Manchester / ESI / UCI',
    badgeColor: 'from-rose-500 to-orange-500',
=======
    id: 'triage-escalas',
    code: 'EC-CUR-002',
    title: 'Guía de Triage y Escalas Clínicas Esenciales',
    subtitle: 'Sistemas Internacionales de Clasificación (Manchester, ESI, START), Escalas Neurológicas, Sepsis, Respiratorias, Dolor y Quirúrgicas.',
    category: 'Emergencias & Cuidados Críticos',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 042-MINSA / Manchester Triage / ESI / Surviving Sepsis',
    badgeColor: 'from-cyan-500 to-blue-600',
>>>>>>> Stashed changes
    manualPdfUrl: '/manuales/manual-triage-escalas.pdf',
    modules: [
      {
        id: 'm1',
        number: 1,
<<<<<<< Updated upstream
        title: 'Sistemas de Triaje en Emergencias (NTS N° 042-MINSA, Manchester y ESI) y TEP',
        part1Title: 'Parte 1: Prioridades de Triaje MINSA (I a IV) y Modelos Internacionales',
        part2Title: 'Parte 2: Triángulo de Evaluación Pediátrica (TEP) y Códigos Tiempo-Dependientes',
        duration: '6 Horas Lectivas',
        summary: 'Clasificación estructurada en menos de 5 minutos por niveles de gravedad, tiempos objetivo de atención y valoración rápida pediátrica.',
        content: [
          '1. Prioridades Oficiales según NTS N° 042-MINSA: Prioridad I (Rojo - Gravedad Súbita Extrema): Riesgo vital inminente, atención INMEDIATA en Trauma Shock (PCR, shock, Glasgow ≤8, obstrucción de vía aérea); Prioridad II (Naranja/Amarillo - Urgencia Mayor): Riesgo potencial de complicación severa, atención en ≤ 10 minutos (dolor torácico coronario, déficit motor agudo/Ictus, disnea moderada-severa); Prioridad III (Verde - Urgencia Menor): Paciente estable, atención en 30 a 60 minutos; Prioridad IV (Azul/Blanco - No Urgente): Derivación a consultorio externo.',
          '2. Triángulo de Evaluación Pediátrica (TEP): Herramienta visual y auditiva de 30-60 segundos sin tocar al niño que evalúa 3 lados: 1) Apariencia (tono, interactividad, mirada, llanto: el más importante), 2) Trabajo Respiratorio (aleteo nasal, tirajes, quejido, estridor) y 3) Circulación Cutánea (palidez, piel marmórea o cianosis).'
        ],
        tableData: {
          title: 'Clasificación de Prioridades de Triaje en Emergencias (NTS N° 042-MINSA)',
          headers: ['Prioridad / Color', 'Denominación Clínica', 'Tiempo de Atención', 'Ejemplos Clínicos Representativos'],
          rows: [
            ['Prioridad I (Rojo)', 'Emergencia / Gravedad Extrema', 'Inmediata (0 min - Trauma Shock)', 'Paro cardiorrespiratorio, Shock, Glasgow ≤ 8, estatus convulsivo, SpO2 < 85%.'],
            ['Prioridad II (Naranja)', 'Urgencia Mayor', '≤ 10 minutos (Tópico Crítico)', 'Dolor torácico isquémico (EKG <10 min), Código Ictus (FAST+), sepsis, crisis asmática.'],
            ['Prioridad III (Verde)', 'Urgencia Menor', '30 a 60 minutos', 'Fiebre sin signos de alarma, dolor abdominal leve-moderado con signos vitales estables.'],
            ['Prioridad IV (Azul)', 'Patología No Urgente', 'Consulta Externa (≤120 min)', 'Faringitis catarral, lumbalgia crónica sin déficit, curaciones simples.']
          ]
        },
        keyPoints: [
          'Prioridad I = Shock Room inmediato | Prioridad II = Atención ≤ 10 min | Prioridad III = 30-60 min | Prioridad IV = Consultorio.',
          'Todo dolor torácico sugestivo de infarto (o epigastralgia en diabéticos/ancianos) exige Prioridad II y EKG en < 10 minutos.',
          'Los 3 lados del Triángulo de Evaluación Pediátrica (TEP): Apariencia, Trabajo Respiratorio y Circulación Cutánea.'
        ],
        clinicalPearl: 'Infarto Atípico en Triaje: En adultos mayores, mujeres y pacientes diabéticos, el Infarto Agudo de Miocardio suele presentarse sin dolor de pecho típico, manifestándose como dolor en la "boca del estómago" (epigastralgia), sudoración fría y náuseas. Nunca lo clasifiques como gastritis (Prioridad III); exige EKG en <10 min.',
        checkQuestion: {
          question: 'Según la NTS N° 042-MINSA, ¿a qué prioridad corresponde un paciente que acude con hemiparesia derecha súbita de 40 minutos de evolución y desviación de la comisura labial (Código Ictus)?',
          options: [
            'Prioridad IV — Cita por consultorio de neurología',
            'Prioridad II (o I) — Urgencia Mayor tiempo-dependiente con atención en ≤ 10 minutos',
            'Prioridad III — Espera de 2 horas en sala general',
            'Alta directa a domicilio'
          ],
          correctIndex: 1,
          explanation: 'El ACV isquémico agudo (Código Ictus) tiene una ventana terapéutica estrecha para trombólisis y exige Prioridad I/II inmediata.'
        },
        moduleQuiz: [
          { id: 'c2m1q1', question: '¿Cuál es el tiempo máximo para realizar la valoración inicial de triaje a un paciente que llega a Emergencias?', options: ['Menos de 5 minutos desde su llegada', 'Hasta 45 minutos', '2 horas', 'Cuando se desocupe el médico'], correctIndex: 0, rationale: 'El triaje debe ejecutarse en menos de 5 minutos de la llegada para detectar riesgo vital.' },
          { id: 'c2m1q2', question: '¿Cuáles son los tres componentes del Triángulo de Evaluación Pediátrica (TEP)?', options: ['Peso, talla y temperatura', 'Apariencia, Trabajo Respiratorio y Circulación Cutánea', 'Presión arterial, glucosa y reflejos', 'Edad, vacunas y apetito'], correctIndex: 1, rationale: 'El TEP evalúa en 30-60 segundos Apariencia, Respiración y Circulación de la piel sin usar estetoscopio.' },
          { id: 'c2m1q3', question: 'Si un niño tiene alterados los 3 lados del Triángulo de Evaluación Pediátrica (Apariencia + Respiración + Circulación), su estado es:', options: ['Sano', 'Fallo Cardiorrespiratorio inminente (Prioridad I)', 'Resfrío común', 'Dificultad respiratoria leve'], correctIndex: 1, rationale: 'La alteración simultánea de los tres lados del TEP indica fallo cardiorrespiratorio y riesgo de paro.' }
=======
        title: 'Fundamentos de Triage Hospitalario, Sistema Manchester (MTS) y ESI',
        part1Title: 'Parte 1: Fundamentos de Triage Hospitalario y Modelos de 5 Niveles',
        part2Title: 'Parte 2: Sistema Manchester (MTS) y Emergency Severity Index (ESI)',
        duration: '6 Horas Lectivas',
        summary: 'El triage hospitalario clasifica a los pacientes según su gravedad fisiológica en 2 a 5 minutos mediante algoritmos validados como Manchester (MTS) y Emergency Severity Index (ESI).',
        content: [
          '1. Modelos de 5 Niveles y Tiempos de Atención: Nivel 1 (Rojo - Resucitación): 0 minutos (Atención inmediata); Nivel 2 (Naranja - Emergencia / Muy Urgente): ≤ 10-15 minutos; Nivel 3 (Amarillo - Urgente / Estable): ≤ 60 minutos; Nivel 4 (Verde - Menor Urgencia): ≤ 120 minutos; Nivel 5 (Azul - No Urgente): ≤ 240 minutos.',
          '2. Urgencia vs. Emergencia y Re-triage: En la Emergencia (Prioridad I / Nivel 1-2) existe riesgo inminente para la vida o función de un órgano; en la Urgencia (Prioridad II-III) se requiere asistencia pronta sin colapso vital instantáneo. El triage debe completarse en 2 a 5 minutos y exige Reclasificación Continua (Re-triage cada 15 min en Nivel 2 y cada 30-60 min en Nivel 3).',
          '3. Sistema Manchester (MTS): Utiliza 53-55 diagramas de flujo por motivo de consulta y discriminadores generales (riesgo vital, dolor, hemorragia, nivel de conciencia, temperatura) para asignar el color de forma objetiva.',
          '4. Algoritmo Emergency Severity Index (ESI): Evalúa 4 decisiones: A) ¿Requiere reanimación inmediata? (Sí = ESI 1); B) ¿Situación de alto riesgo, confuso/letárgico o dolor severo? (Sí = ESI 2); C) ¿Cuántos recursos complejos necesitará? (2 o más = ESI 3; 1 recurso = ESI 4; 0 recursos = ESI 5); D) ¿Signos vitales en peligro? (Sube a ESI 2).'
        ],
        tableData: {
          title: 'Estimación de Recursos en el Algoritmo ESI (Niveles 3, 4 y 5)',
          headers: ['Nivel ESI', 'Recursos Estimados por el Evaluador', 'Ejemplos Clínicos Típicos'],
          rows: [
            ['ESI Nivel 3', 'Dos o más recursos complejos diferentes (ej. Laboratorio + Radiografía + Vía IV).', 'Dolor abdominal moderado en FID, neumonía con disnea leve, cefalea con vómitos.'],
            ['ESI Nivel 4', 'Un solo recurso diagnóstico o terapéutico simple.', 'Sospecha de esguince de tobillo (solo 1 radiografía) o herida simple para sutura.'],
            ['ESI Nivel 5', 'Cero recursos adicionales (solo examen físico y receta médica oral).', 'Resfriado común afebril, renovación de receta crónica, retiro de puntos limpios.']
          ]
        },
        keyPoints: [
          'Tiempo estándar de valoración en triage: 2 a 5 minutos por paciente.',
          'CUENTAN como recurso en ESI: Laboratorio (sangre/orina = 1 bloque), RX/TAC/Eco, suero IV, inyección IV/IM, interconsulta.',
          'NO CUENTAN como recurso en ESI: Signos vitales, examen físico, glucemia capilar (hemoglucotest), receta oral o curación simple.',
          'Si un paciente Nivel Verde presenta diaforesis y dolor torácico en sala de espera, se realiza Re-triage inmediato a Nivel 1 o 2.'
        ],
        clinicalPearl: '¿Qué cuenta y qué NO cuenta como "Recurso" en ESI?: CUENTAN: Analítica de sangre/orina, radiografía/TAC/ecografía, hidratación endovenosa, medicación IV/IM, interconsulta de especialista. NO CUENTAN: Examen físico rutinario, toma de signos vitales, glucemia capilar con tira, curación simple de raspón, receta oral o colocación de cabestrillo simple.',
        checkQuestion: {
          question: 'Un paciente viene por dolor abdominal fuerte; se estima que necesitará análisis de sangre, ecografía y suero por la vena. ¿Qué nivel ESI le corresponde?',
          options: ['ESI Nivel 1', 'ESI Nivel 5', 'ESI Nivel 3 (necesita 2 o más recursos diferentes)', 'ESI Nivel 4'],
          correctIndex: 2,
          explanation: 'En el algoritmo ESI, los pacientes estables que necesitan 2 o más recursos diferentes (laboratorio + ecografía + vía IV) se clasifican como ESI Nivel 3.'
        },
        moduleQuiz: [
          { id: 'c2m1q1', question: '¿Cuál es el objetivo principal del triage cuando llegan muchos pacientes a la sala de emergencias?', options: ['Atender primero a los que llegaron más temprano en la mañana', 'Clasificar a los pacientes por su gravedad para atender de inmediato a los más graves', 'Cobrar la consulta hospitalaria', 'Decirles que regresen a casa'], correctIndex: 1, rationale: 'El triage organiza la atención según la gravedad clínica del paciente y no por estricto orden cronológico de llegada.' },
          { id: 'c2m1q2', question: 'En el sistema de triage de 5 colores, ¿qué color representa la máxima prioridad donde el paciente se muere si no lo atienden en CERO minutos?', options: ['Color Verde', 'Color Azul', 'Color Rojo (Prioridad I / Reanimación)', 'Color Amarillo'], correctIndex: 2, rationale: 'El color Rojo exige ingreso inmediato a la sala de trauma-shock sin demora de minutos porque existe riesgo vital inminente.' },
          { id: 'c2m1q3', question: '¿Cuánto tiempo como máximo debería tardar un profesional entrenado en evaluar a un paciente en el área de triage?', options: ['1 hora completa', 'De 2 a 5 minutos por paciente', '45 minutos', '30 segundos sin mirarlo'], correctIndex: 1, rationale: 'La evaluación de triage debe ser ágil y rápida (2 a 5 min) para evitar cuellos de botella en la puerta de entrada.' },
          { id: 'c2m1q4', question: '¿Cuál es la diferencia entre una "Emergencia" y una "Urgencia" médica?', options: ['Son exactamente la misma palabra', 'La Emergencia tiene riesgo inminente de muerte inmediata; la Urgencia debe atenderse pronto pero tolera una espera corta', 'La Emergencia da en niños', 'La Urgencia no necesita médico'], correctIndex: 1, rationale: 'La emergencia pone en peligro inminente la vida en minutos; la urgencia puede aguardar un tiempo prudente sin riesgo fatal inmediato.' },
          { id: 'c2m1q5', question: 'Si un paciente clasificado como Nivel Verde empieza a sudar frío, se pone pálido y le duele el pecho en la sala de espera, ¿qué se debe hacer?', options: ['Dejarlo en su sitio porque ya tiene ticket verde', 'Reclasificarlo (re-triage) y subirlo de inmediato a color Nivel Rojo o Naranja', 'Darle un vaso de agua y esperar', 'Mandarlo al baño'], correctIndex: 1, rationale: 'El triage es dinámico; si el paciente empeora en la sala de espera, se cambia su prioridad para atención urgente.' },
          { id: 'c2m1q6', question: 'En el sistema ESI, ¿qué nivel le corresponde a un paciente con paro cardíaco o ahogo grave que necesita resucitación ya?', options: ['ESI Nivel 5', 'ESI Nivel 1 (Atención inmediata)', 'ESI Nivel 4', 'ESI Nivel 3'], correctIndex: 1, rationale: 'El ESI Nivel 1 se reserva para pacientes en paro cardiorrespiratorio, intubación urgente o shock severo con riesgo vital.' },
          { id: 'c2m1q7', question: 'Un paciente viene por dolor abdominal fuerte; se estima que necesitará análisis de sangre, ecografía y suero por la vena. ¿Qué nivel ESI es?', options: ['ESI Nivel 1', 'ESI Nivel 5', 'ESI Nivel 3 (necesita 2 o más recursos diferentes)', 'Ninguno'], correctIndex: 2, rationale: 'En el algoritmo ESI, los pacientes estables que necesitan múltiples recursos complementarios (≥2) son catalogados como ESI 3.' },
          { id: 'c2m1q8', question: 'Un joven viene con un dedo torcido por jugar fútbol y solo necesita sacarse una placa de rayos X para descartar fractura. ¿Qué nivel ESI es?', options: ['ESI Nivel 1 en shock', 'ESI Nivel 4 (solo requiere un recurso simple)', 'ESI Nivel 2', 'Color Rojo'], correctIndex: 1, rationale: 'Al necesitar un solo recurso diagnóstico (la radiografía), se clasifica como ESI 4 de baja complejidad.' },
          { id: 'c2m1q9', question: '¿Cuál de las siguientes acciones NO se cuenta como un "recurso complejo" en el sistema de triage ESI?', options: ['Una tomografía cerebral', 'Análisis completos de sangre', 'Tomarle la presión arterial, ponerle el termómetro y darle una receta de pastillas', 'Una ecografía'], correctIndex: 2, rationale: 'Los signos vitales, el examen físico y las recetas orales forman parte de la consulta médica básica; no cuentan como recursos en ESI.' },
          { id: 'c2m1q10', question: '¿Qué color se le asigna a un paciente que viene solo a pedir un descanso médico o que le retiren los puntos de una herida curada?', options: ['Color Rojo', 'Color Naranja', 'Color Azul (Nivel 5 / No urgente)', 'Color Amarillo'], correctIndex: 2, rationale: 'Al no presentar urgencia aguda ni requerir recursos diagnósticos complejos, corresponde al Nivel 5 (Azul / No urgente).' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm2',
        number: 2,
<<<<<<< Updated upstream
        title: 'Valoración Neurológica Crítica: Escala de Coma de Glasgow, Pupilas y FOUR Score',
        part1Title: 'Parte 1: Escala de Coma de Glasgow (Ocular, Verbal y Motora)',
        part2Title: 'Parte 2: Reactividad Pupilar, Posturas Patológicas y Escala FOUR',
        duration: '8 Horas Lectivas',
        summary: 'Puntuación exacta de Glasgow (3 a 15 puntos), diferenciación entre decorticación y descerebración, y valoración pupilar.',
        content: [
          '1. Escala de Coma de Glasgow (3 a 15 puntos): Evalúa Apertura Ocular (4: espontánea, 3: a la voz, 2: al dolor/presión, 1: ninguna), Respuesta Verbal (5: orientado, 4: confuso, 3: palabras inapropiadas, 2: sonidos incomprensibles, 1: ninguna) y Respuesta Motora (6: obedece órdenes, 5: localiza el dolor, 4: retirada normal en flexión, 3: flexión anormal/decorticación, 2: extensión anormal/descerebración, 1: ninguna).',
          '2. Puntos de Corte en TEC y Pupilas: TEC Leve: 13-15 pts; TEC Moderado: 9-12 pts; TEC Severo: ≤ 8 puntos ("Glasgow ≤ 8, intubar"). La caída de ≥ 2 puntos respecto al ingreso o la aparición de Anisocoria (una pupila dilatada fija por compresión del III par craneal) indica herniación cerebral inminente.'
        ],
        tableData: {
          title: 'Desglose Oficial de la Escala de Coma de Glasgow (Rango: 3 a 15 Puntos)',
          headers: ['Parámetro Evaluado', 'Puntaje', 'Respuesta Clínica Observada', 'Significado Neurológico'],
          rows: [
            ['Apertura Ocular (O)', '4 / 3 / 2 / 1', '4: Espontánea | 3: A la voz | 2: A la presión | 1: Ausente', 'Evalúa el sistema reticular activador ascendente.'],
            ['Respuesta Verbal (V)', '5 / 4 / 3 / 2 / 1', '5: Orientado | 4: Confuso | 3: Palabras | 2: Quejidos | 1: Ausente', 'Evalúa integración cortical del lenguaje.'],
            ['Respuesta Motora (M)', '6 / 5 / 4 / 3 / 2 / 1', '6: Obedece | 5: Localiza | 4: Retira | 3: Decortica | 2: Descerebra | 1: Nada', 'Mejor predictor pronóstico en TEC grave.']
          ]
        },
        keyPoints: [
          'Puntaje máximo de Glasgow = 15 puntos | Puntaje mínimo posible = 3 puntos (nunca existe Glasgow 0).',
          'Glasgow ≤ 8 puntos define coma / TEC severo y es indicación de intubación endotraqueal para proteger vía aérea.',
          'M3 (Decorticación) = flexión anormal hacia el pecho | M2 (Descerebración) = extensión rígida con rotación interna (más grave).'
        ],
        clinicalPearl: 'Alerta de Herniación Cerebral (Anisocoria + Tríada de Cushing): Si un paciente con TEC cae 2 puntos en su Glasgow y desarrolla una pupila dilatada que no responde a la luz (anisocoria) junto con hipertensión arterial y bradicardia, está sufriendo herniación cerebral y requiere descompresión neuroquirúrgica inmediata.',
        checkQuestion: {
          question: 'Al evaluar a un paciente politraumatizado encuentra: abre los ojos solo al presionar el lecho ungueal (2), emite quejidos incomprensibles (2) y adopta postura en flexión anormal rígida sobre el tórax (3). ¿Cuál es su puntaje de Glasgow?',
          options: ['Glasgow 5 puntos', 'Glasgow 7 puntos (TEC Severo)', 'Glasgow 10 puntos', 'Glasgow 12 puntos'],
          correctIndex: 1,
          explanation: 'Ocular (2) + Verbal (2) + Motora decorticada (3) = 7 puntos (menor o igual a 8: requiere intubación endotraqueal).'
        }
=======
        title: 'Triage Extrahospitalario en Desastres (START, JumpSTART y PMA)',
        part1Title: 'Parte 1: Triage Extrahospitalario en Desastres y Víctimas Múltiples (START)',
        part2Title: 'Parte 2: Organización del Puesto Médico de Avanzada (PMA)',
        duration: '8 Horas Lectivas',
        summary: 'En incidentes con víctimas múltiples se busca el mayor beneficio para el mayor número posible de sobrevivientes mediante el algoritmo START en menos de 60 segundos por víctima.',
        content: [
          '1. Algoritmo START (Simple Triage and Rapid Treatment): Evalúa en menos de 60 segundos 4 parámetros secuenciales (Marcha, Respiración, Perfusión y Conciencia) asignando tarjetas Roja (Inmediato), Amarilla (Demorado), Verde (Leve / Camina) y Negra (Fallecido / Inviable).',
          '2. Las 2 Únicas Maniobras Permitidas durante el Triage START: 1) Apertura manual de la vía aérea (frente-mentón o tracción mandibular) si la víctima no respira; 2) Compresión directa de hemorragia exanguinante masiva o colocación de torniquete táctico.',
          '3. Triage Pediátrico JumpSTART: En niños que no respiran tras abrir la vía aérea pero tienen pulso palpable, se administran 5 ventilaciones de rescate. Si inician respiración se clasifican como ROJO; si continúan en apnea se catalogan como NEGRO. El rango respiratorio normal infantil en JumpSTART es de 15 a 45 rpm.',
          '4. Puesto Médico de Avanzada (PMA) y Evacuación: Se divide en Área Roja, Amarilla, Verde y Negra (Morgue táctica). Ninguna ambulancia parte sin coordinación con la Central Reguladora (SAMU) para no colapsar el hospital más cercano.'
        ],
        tableData: {
          title: 'Pasos Secuenciales del Algoritmo START en la Escena del Desastre',
          headers: ['Paso Evaluativo', 'Criterio Clínico Observado en la Víctima', 'Clasificación y Acción Inmediata'],
          rows: [
            ['Paso 1: Marcha', 'Se vocea: "Todos los que puedan caminar, vengan aquí".', 'Todos los que caminan solos = VERDE (Prioridad III). Agrupar en zona segura.'],
            ['Paso 2: Respiración', 'Si NO respira: abrir vía aérea. Si sigue sin respirar = NEGRO. Si respira > 30 rpm = ROJO.', 'Si respira entre 10 y 30 rpm, pasar al Paso 3 (Perfusión).'],
            ['Paso 3: Perfusión', 'Evaluar pulso radial o relleno capilar. Si pulso ausente o relleno capilar > 2 seg.', 'Se clasifica como ROJO (Shock en curso) y se comprime sangrado. Si normal, ir a Paso 4.'],
            ['Paso 4: Conciencia', 'Pedir orden sencilla ("Apriete mi mano"). Si NO obedece órdenes = ROJO.', 'Si obedece órdenes simples y respira estable = AMARILLO (Urgente demorado).']
          ]
        },
        keyPoints: [
          'Tiempo máximo por víctima en método START: menos de 60 segundos.',
          'Parámetros de tarjeta ROJA inmediata: FR > 30 rpm, ausencia de pulso radial / llenado capilar > 2 s, o no obedece órdenes simples.',
          'En niños en apnea con pulso palpable (JumpSTART): dar 5 ventilaciones de rescate antes de declarar tarjeta negra.',
          'La seguridad del rescatista en la escena es la prioridad número uno antes de ingresar.'
        ],
        clinicalPearl: 'Triage Inverso en Incidentes con Múltiples Heridos Eléctricos: En accidentes masivos por caída de cables de alta tensión o rayos, se aplica la excepción del Triage Inverso: se atiende y reanima prioritariamente a las víctimas en paro o que no respiran (ya que suelen ser paros respiratorios reversibles por aturdimiento miocárdico), mientras que los que lloran o hablan se dejan para después.',
        checkQuestion: {
          question: 'Si un paciente herido en un accidente masivo tiene fracturas de piernas (no camina), pero respira a 20 rpm, tiene buen pulso radial y obedece órdenes, ¿qué tarjeta START recibe?',
          options: ['Tarjeta Roja', 'Tarjeta Amarilla (urgente demorado: grave pero estable)', 'Tarjeta Negra', 'Tarjeta Verde'],
          correctIndex: 1,
          explanation: 'El paciente no camina, pero tiene respiración (10-30 rpm), perfusión (<2 s) y estado mental conservados, por lo que recibe Tarjeta Amarilla.'
        },
        moduleQuiz: [
          { id: 'c2m2q1', question: 'Cuando hay un choque de autobús con muchos heridos en la pista (accidente masivo), ¿qué principio guía al personal?', options: ['Salvar solo a una persona y gastar todos los sueros en ella', 'Hacer el mayor bien posible para la mayor cantidad de personas que tienen posibilidad de salvarse', 'Dejar a todos en el suelo', 'No intervenir'], correctIndex: 1, rationale: 'En catástrofes se busca optimizar recursos para salvar al mayor número de sobrevivientes viables.' },
          { id: 'c2m2q2', question: '¿Cuánto tiempo como máximo debe tardar un rescatista en revisar y clasificar a una víctima con el método START?', options: ['20 minutos por herido', 'Menos de 60 segundos (un minuto)', '2 horas', 'Medio día'], correctIndex: 1, rationale: 'El triage START es ultrarrápido (máx. 60 s) para no perder tiempo con un solo paciente mientras otros se desangran.' },
          { id: 'c2m2q3', question: 'Al llegar al lugar del accidente masivo, el rescatista grita: "¡Los que puedan caminar, vengan hacia aquí!". ¿Qué color reciben?', options: ['Color Rojo', 'Color Negro', 'Color Verde (heridos leves)', 'Color Azul'], correctIndex: 2, rationale: 'Los pacientes que caminan por sus propios medios se apartan a zona segura y reciben tarjeta verde de baja prioridad inicial.' },
          { id: 'c2m2q4', question: 'Si una víctima en el suelo no respira, le abrimos la boca y la cabeza hacia atrás, y sigue sin respirar nada, ¿qué tarjeta se le coloca?', options: ['Tarjeta Roja', 'Tarjeta Negra (fallecido)', 'Tarjeta Verde', 'Tarjeta Amarilla'], correctIndex: 1, rationale: 'En desastres, si la vía aérea manual no reactiva la respiración, se declara fallecido para no consumir recursos en víctimas inviables.' },
          { id: 'c2m2q5', question: 'Si un paciente herido está respirando rapidísimo a más de 30 respiraciones por minuto, ¿qué color de tarjeta START le corresponde?', options: ['Tarjeta Verde', 'Tarjeta ROJA (Inmediato / Grave)', 'Tarjeta Amarilla', 'Tarjeta Blanca'], correctIndex: 1, rationale: 'Una frecuencia respiratoria >30 por minuto es signo inequívoco de shock o insuficiencia respiratoria severa (prioridad roja).' },
          { id: 'c2m2q6', question: '¿Qué pasa si al apretar la uña del paciente herido la sangre demora MÁS de 2 segundos en volver (relleno capilar lento)?', options: ['Es verde porque tiene frío', 'Es tarjeta ROJA porque está entrando en shock circulatorio grave', 'Se va a su casa', 'Es de color negro'], correctIndex: 1, rationale: 'Un relleno capilar >2 segundos o ausencia de pulso radial indica falla circulatoria aguda por hemorragia interna o shock.' },
          { id: 'c2m2q7', question: 'Si un herido tiene fracturas de piernas, no puede caminar, pero respira normal (20 rpm), tiene buen pulso y obedece órdenes, ¿qué color es?', options: ['Color Rojo de shock', 'Color AMARILLO (urgente demorado: grave pero estable)', 'Color Negro', 'Se va caminando'], correctIndex: 1, rationale: 'Paciente que no camina pero respira bien, tiene buena perfusión y responde órdenes califica como Amarillo (puede esperar turno).' },
          { id: 'c2m2q8', question: '¿Cuáles son las dos únicas cosas que se permite hacer durante el triage START a un herido en el suelo?', options: ['Ponerle yeso y darle de comer', 'Abrir la vía aérea si no respira y frenar hemorragias de sangre a chorros apretando fuerte', 'Tomar fotos', 'Coser las heridas'], correctIndex: 1, rationale: 'Solo se realizan maniobras salvavidas de segundos: posicionar la cabeza para abrir vía aérea y apretar sangrados masivos.' },
          { id: 'c2m2q9', question: 'En el método infantil JumpSTART para niños que no respiran tras abrir la boca pero tienen pulso, ¿qué maniobra especial se intenta?', options: ['Dejarlos como fallecidos', 'Darles 5 respiraciones boca a boca de rescate a ver si arrancan a respirar', 'Ponerles una inyección', 'Hacer cosquillas'], correctIndex: 1, rationale: 'El paro infantil suele ser respiratorio con pulso presente; 5 insuflaciones de rescate logran reactivar su respiración.' },
          { id: 'c2m2q10', question: '¿Por qué es un error muy grave mandar a todos los heridos graves al mismo hospital más cercano del accidente?', options: ['Porque se gasta gasolina', 'Porque colapsa su capacidad quirúrgica de emergencia mientras otros hospitales cercanos están vacíos', 'Porque es lejos', 'Por el tráfico'], correctIndex: 1, rationale: 'La evacuación debe distribuirse coordinadamente con la Central de Emergencias para no trasladar el desastre al hospital más cercano.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm3',
        number: 3,
<<<<<<< Updated upstream
        title: 'Monitoreo de Sedación y Delirium en UCI: Escalas RASS, Ramsay y CAM-ICU',
        part1Title: 'Parte 1: Escala de Agitación-Sedación de Richmond (RASS +4 a -5)',
        part2Title: 'Parte 2: Detección de Delirium en el Paciente Crítico (CAM-ICU)',
        duration: '6 Horas Lectivas',
        summary: 'Titulación de sedoanalgesia por metas (RASS -2 a 0) y diagnóstico precoz del delirium hiperactivo e hipoactivo en UCI.',
        content: [
          '1. Escala RASS (+4 a -5): Evalúa agitación y sedación en UCI. Valores positivos (+1 ansioso a +4 combativo); 0 (alerta y tranquilo); valores negativos: -1 (somnoliento, contacto visual >10 s), -2 (sedación ligera, contacto visual <10 s), -3 (sedación moderada, mueve o abre ojos a la voz sin contacto visual), -4 (sedación profunda, solo responde al estímulo físico), -5 (coma sin respuesta). Meta habitual de sedación consciente: RASS de -2 a 0.',
          '2. Evaluación de Delirium (CAM-ICU): Evalúa 4 criterios: 1) Comienzo agudo o curso fluctuante + 2) Inatención (test de apretar la mano con la letra A en SAVEAHAART), sumado a 3) RASS diferente de 0 o 4) Pensamiento desorganizado. El delirium hipoactivo (paciente callado y apático) es el más frecuente y de peor pronóstico.'
        ],
        keyPoints: [
          'Meta de sedación ligera estándar en UCI: RASS entre -2 y 0.',
          'Sedación profunda (RASS -4 a -5): reservada para SDRA severo en prono, hipertensión intracraneal o estatus epiléptico.',
          'Antes de aplicar el CAM-ICU para delirium, el paciente debe tener un RASS de -3 o superior (-2, -1, 0, etc.).'
        ],
        clinicalPearl: 'Peligro del Delirium Hipoactivo: A diferencia del paciente agitado que se arranca las sondas (delirium hiperactivo), el paciente con delirium hipoactivo parece "tranquilo y colaborador", pero sufre desconexión cognitiva aguda que duplica el riesgo de mortalidad si no se detecta con el CAM-ICU.',
        checkQuestion: {
          question: 'En un paciente ventilado en UCI, usted lo llama por su nombre y él abre los ojos brevemente haciendo contacto visual por menos de 10 segundos. ¿Qué puntaje RASS le corresponde?',
          options: ['RASS +2', 'RASS 0', 'RASS -2 (Sedación ligera)', 'RASS -5 (Coma)'],
          correctIndex: 2,
          explanation: 'El despertar breve al llamado verbal con contacto visual menor a 10 segundos define exactamente el nivel RASS -2.'
        }
=======
        title: 'Escala de Coma de Glasgow, Glasgow-Pupilar y Escala de Ictus de Cincinnati',
        part1Title: 'Parte 1: Escala de Coma de Glasgow y Valoración Neurológica',
        part2Title: 'Parte 2: Reactividad Pupilar (Glasgow-P) y Escala de Ictus (Cincinnati)',
        duration: '6 Horas Lectivas',
        summary: 'La Escala de Coma de Glasgow (3 a 15 puntos), su actualización pupilar (GCS-P) y la Escala de Cincinnati permiten detectar herniación cerebral e infarto cerebral agudo dentro de la ventana trombolítica.',
        content: [
          '1. Estructura de la Escala de Coma de Glasgow (3 a 15 puntos): Evalúa Apertura Ocular (1 a 4 puntos), Respuesta Verbal (1 a 5 puntos) y Respuesta Motora (1 a 6 puntos). Clasificación del TCE: Leve (14-15 ptos), Moderado (9-13 ptos), Grave / Coma (≤ 8 ptos). REGLA DE ORO: Glasgow ≤ 8 = Intubación Orotraqueal inmediata para proteger la vía aérea.',
          '2. Decorticación vs. Descerebración: La postura de Decorticación (Flexión anormal = 3 ptos motores) dobla los brazos rígidamente sobre el pecho. La postura de Descerebración (Extensión anormal = 2 ptos motores) extiende los brazos rígidamente hacia abajo con rotación interna de muñecas e indica daño grave en el tronco encefálico (peor pronóstico).',
          '3. Actualización Glasgow-Pupilar (GCS-P) y Anisocoria: Resta la puntuación de reactividad pupilar: ambas pupilas reactivas (-0 ptos), solo una pupila reacciona / anisocoria (-1 pto), ninguna reacciona / midriasis bilateral fija (-2 ptos). Una pupila dilatada unilateral fija en TCE alerta herniación uncal con compresión del III par craneal.',
          '4. Escala Prehospitalaria de Ictus de Cincinnati (CPSS): Evalúa 3 signos: 1) Asimetría Facial (al sonreír); 2) Descenso del Brazo (al extender ambos brazos 10 s con ojos cerrados); 3) Lenguaje Anormal (disartria o afasia al repetir una frase). Es obligatorio anotar la hora exacta de inicio de síntomas (ventana de trombolisis con r-TPA ≤ 4.5 horas).'
        ],
        tableData: {
          title: 'Estructura Detallada de la Escala de Coma de Glasgow (3 a 15 Puntos)',
          headers: ['Respuesta Ocular (1-4 ptos)', 'Respuesta Verbal (1-5 ptos)', 'Respuesta Motora (1-6 ptos)'],
          rows: [
            ['4: Espontánea (ojos abiertos)', '5: Orientado (tiempo, espacio, persona)', '6: Obedece órdenes motoras'],
            ['3: Al sonido / llamada verbal', '4: Confuso (frases con sentido, desorientado)', '5: Localiza el estímulo doloroso'],
            ['2: A la presión / estímulo doloroso', '3: Palabras inapropiadas sueltas', '4: Flexión normal (retira al dolor)'],
            ['1: Ninguna respuesta ocular', '2: Sonidos incomprensibles (gemidos) | 1: Ninguna', '3: Decorticación (flexión) | 2: Descerebración (extensión) | 1: Ninguna']
          ]
        },
        keyPoints: [
          'Puntaje máximo de Glasgow: 15 puntos | Puntaje mínimo posible: 3 puntos (nunca existe 0).',
          'Regla de Oro: Glasgow ≤ 8 puntos = Coma establecido e indicación de Intubación Endotraqueal.',
          'Anisocoria con midriasis unilateral fija en TCE = emergencia neuroquirúrgica por herniación uncal (III par craneal).',
          'Escala de Cincinnati positiva: anotar hora exacta de inicio de síntomas (ventana trombolítica de 4.5 horas).'
        ],
        clinicalPearl: 'Tiempo es Cerebro (Ventana de Trombolisis): Si cualquiera de los 3 signos de Cincinnati (asimetría facial, caída del brazo o alteración del habla) es positivo, existe más del 72% de probabilidad de infarto cerebral agudo; si los 3 son positivos, supera el 85%. Es obligatorio registrar la hora exacta del inicio de los síntomas para evaluar terapia trombolítica con r-TPA dentro de las primeras 4.5 horas.',
        checkQuestion: {
          question: '¿Qué regla de oro obligatoria se debe cumplir de inmediato si un paciente tiene un traumatismo craneoencefálico y su Glasgow es de 8 puntos o menos?',
          options: ['Darle café caliente', 'Intubación orotraqueal inmediata para proteger y aislar su vía aérea', 'Mandarlo a observación ambulatoria', 'Colocar solo cánula binaural'],
          correctIndex: 1,
          explanation: 'Un Glasgow ≤ 8 define estado de coma con pérdida de reflejos protectores de tos y deglución, exigiendo intubación endotraqueal.'
        },
        moduleQuiz: [
          { id: 'c2m3q1', question: '¿Cuál es el puntaje de la Escala de Coma de Glasgow de una persona normal, completamente despierta y conversando orientada?', options: ['100 puntos', '15 puntos (puntaje máximo)', 'Cero puntos', '8 puntos'], correctIndex: 1, rationale: 'El puntaje máximo es 15 (Ojos: 4, Verbal: 5, Motor: 6) y refleja una persona neurológicamente intacta.' },
          { id: 'c2m3q2', question: '¿Cuál es el puntaje mínimo posible en la Escala de Glasgow en una persona en coma profundo que no abre ojos, no habla ni se mueve?', options: ['Cero puntos', '3 puntos (el puntaje más bajo de la escala)', '-5 puntos', '1 punto'], correctIndex: 1, rationale: 'No existe el cero en la escala clásica de Glasgow; cada uno de los 3 parámetros tiene un valor mínimo de 1 (1 + 1 + 1 = 3).' },
          { id: 'c2m3q3', question: '¿Qué regla de oro obligatoria se debe cumplir de inmediato si un paciente tiene un traumatismo y su Glasgow es de 8 o menos?', options: ['Darle café caliente', 'Intubarlo (ponerle tubo en la garganta para proteger sus pulmones porque no puede respirar solo)', 'Mandarlo a caminar', 'Ponerle vendas'], correctIndex: 1, rationale: 'Glasgow ≤ 8 define estado de coma; el paciente pierde reflejos de tos y deglución y requiere intubación orotraqueal protectora.' },
          { id: 'c2m3q4', question: 'Si le pedimos al paciente que abra los ojos y solo los abre cuando le hablamos o gritamos, ¿cuántos puntos saca en ojos?', options: ['4 puntos espontáneo', '3 puntos (abre al sonido de la voz)', '1 punto', 'Cero'], correctIndex: 1, rationale: 'Abrir los ojos al estímulo verbal equivale a 3 puntos en la respuesta ocular de la escala de Glasgow.' },
          { id: 'c2m3q5', question: '¿Cómo se llama la postura rígida donde el paciente flexiona los brazos encogidos hacia el pecho al causarle dolor?', options: ['Postura de descanso', 'Postura de decorticación (flexión anormal / 3 puntos)', 'Postura de baile', 'Relajación'], correctIndex: 1, rationale: 'La decorticación (3 puntos en respuesta motora) se caracteriza por brazos doblados sobre el pecho por lesión hemisférica cerebral.' },
          { id: 'c2m3q6', question: '¿Qué postura motora es más grave y de peor pronóstico cerebral entre decorticación y descerebración?', options: ['Ninguna, son iguales', 'Descerebración (extiende los brazos tiesos hacia abajo con 2 puntos), avisa daño en el tronco cerebral', 'Decorticación', 'Ninguna es mala'], correctIndex: 1, rationale: 'La descerebración (2 puntos) indica compromiso del tronco del encéfalo, siendo de gravedad extrema frente a la decorticación.' },
          { id: 'c2m3q7', question: 'Si un paciente tiene una pupila del ojo muy grande y abierta que no achica con la luz y la otra normal (anisocoria), ¿qué avisa?', options: ['Que tiene sueño', 'Emergencia grave por hinchazón y presión en el cerebro que está aplastando el nervio del ojo', 'Que necesita lentes', 'Alergia a la luz'], correctIndex: 1, rationale: 'La anisocoria con midriasis unilateral fija en traumatismos avisa herniación cerebral inminente con compresión del tercer par craneal.' },
          { id: 'c2m3q8', question: '¿Cuáles son los 3 signos sencillos que evalúa la Escala de Cincinnati para detectar un derrame cerebral o Ictus en la ambulancia?', options: ['Fiebre, vómito y diarrea', 'Cara torcida (asimetría), caída de un brazo al levantarlo y hablar arrastrando las palabras', 'Dolor de rodilla, tos y hambre', 'Manchas en la piel'], correctIndex: 1, rationale: 'La escala prehospitalaria de Cincinnati evalúa: asimetría facial, caída del brazo extendido y alteración del lenguaje.' },
          { id: 'c2m3q9', question: 'Si una persona tiene la cara torcida de un lado y no puede levantar el brazo derecho, ¿qué debemos preguntar de inmediato a la familia?', options: ['Qué almorzó ayer', 'A qué hora exacta empezaron los síntomas para saber si se puede disolver el coágulo en el hospital', 'Dónde compró su ropa', 'Su color favorito'], correctIndex: 1, rationale: 'La hora de inicio es crucial; los medicamentos para disolver el trombo en el cerebro solo pueden aplicarse en las primeras 4.5 horas.' },
          { id: 'c2m3q10', question: 'En la escala Glasgow-Pupilar (GCS-P), ¿cuántos puntos se restan si NINGUNA de las dos pupilas reacciona a la luz?', options: ['No se resta nada', 'Se restan 2 puntos al puntaje de Glasgow', 'Se suman 5 puntos', 'Se resta 10 puntos'], correctIndex: 1, rationale: 'Si ambas pupilas están arreactivas se restan 2 puntos (si solo una pupila falla se resta 1 punto).' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm4',
        number: 4,
<<<<<<< Updated upstream
        title: 'Detección Precoz de Sepsis y Deterioro Clínico: NEWS2, qSOFA y SOFA',
        part1Title: 'Parte 1: Escala de Alerta Temprana NEWS2 en Hospitalización',
        part2Title: 'Parte 2: Criterios qSOFA, Score SOFA y Hora Dorada del Código Sepsis',
        duration: '8 Horas Lectivas',
        summary: 'Vigilancia de los signos vitales con NEWS2 (riesgo alto ≥7 puntos), cribado con qSOFA y activación del paquete de la 1ra hora en Sepsis.',
        content: [
          '1. Escala NEWS2 (National Early Warning Score 2): Evalúa 7 variables fisiológicas: Frecuencia Respiratoria, SpO2 (Escala 1 general y Escala 2 para EPOC hipercápnico con meta 88-92%), Uso de oxígeno suplementario, Presión Arterial Sistólica, Frecuencia Cardíaca, Nivel de Conciencia (ACVPU) y Temperatura. Puntaje 0-4 (Riesgo Bajo), 5-6 puntos o 3 en un solo parámetro (Riesgo Moderado - evaluación urgente), ≥ 7 puntos (RIESGO ALTO - activar Equipo de Respuesta Rápida / UCI).',
          '2. qSOFA y Sepsis-3: El qSOFA identifica sospecha de sepsis fuera de UCI con 3 criterios (≥2 puntos = positivo): 1) Frecuencia Respiratoria ≥ 22 rpm, 2) Presión Arterial Sistólica ≤ 100 mmHg y 3) Alteración del estado mental (Glasgow < 15). El paquete de la 1ra Hora en Sepsis exige: medir lactato sérico, tomar 2 hemocultivos antes del antibiótico, administrar antibiótico EV de amplio espectro en <1 h y bolo de cristaloides (30 ml/kg) si hay hipotensión o lactato ≥ 4 mmol/L.'
        ],
        tableData: {
          title: 'Umbrales de Alerta y Respuesta Clínica según Puntaje NEWS2',
          headers: ['Puntaje NEWS2', 'Nivel de Riesgo Clínico', 'Frecuencia de Monitoreo', 'Acción Asistencial Obligatoria'],
          rows: [
            ['0 a 4 puntos', 'Riesgo Bajo', 'Cada 4 a 6 horas', 'Continuar vigilancia por enfermería en piso.'],
            ['3 en 1 parámetro', 'Riesgo Bajo-Medio (Alerta Roja)', 'Cada 1 hora', 'Revisión médica urgente por alteración extrema de un signo vital.'],
            ['5 a 6 puntos', 'Riesgo Moderado', 'Mínimo cada 1 hora', 'Avisar de inmediato al médico de guardia para ajuste terapéutico.'],
            ['≥ 7 puntos', 'RIESGO CLÍNICO ALTO', 'Monitoreo continuo', 'Activar Equipo de Respuesta Rápida / Evaluación crítica por UCI.']
          ]
        },
        keyPoints: [
          'La taquipnea (FR > 22 rpm) es el signo más precoz y sensible de deterioro clínico y sepsis.',
          'NEWS2 ≥ 7 puntos = Riesgo Clínico Alto (emergencia intrahospitalaria).',
          'Criterios qSOFA: FR ≥ 22 rpm, PAS ≤ 100 mmHg y Glasgow < 15.',
          'En hipoperfusión por sepsis: reanimar con 30 ml/kg de cristaloides y usar Noradrenalina para lograr PAM ≥ 65 mmHg.'
        ],
        clinicalPearl: 'No Esperes a que Baje la Presión Arterial: Un paciente séptico joven puede mantener una presión arterial "normal" (110/70 mmHg) gracias a la vasoconstricción compensatoria mientras ya tiene FR de 28 rpm y lactato alto. La frecuencia respiratoria siempre avisa primero.',
        checkQuestion: {
          question: '¿Cuáles son los 3 parámetros clínicos que evalúa la escala rápida qSOFA al pie de la cama y qué puntaje en la escala NEWS2 obliga a activar al Equipo de Respuesta Rápida / UCI?',
          options: [
            'Fiebre, tos y disuria — NEWS2 de 1 punto',
            'FR ≥ 22 rpm, PAS ≤ 100 mmHg y alteración del sensorio (Glasgow < 15) — NEWS2 ≥ 7 puntos (Riesgo Alto)',
            'Glucosa, colesterol y peso — NEWS2 de 2 puntos',
            'Dolor de cabeza, náuseas y mareos — NEWS2 de 0 puntos'
          ],
          correctIndex: 1,
          explanation: 'qSOFA evalúa FR ≥22, PAS ≤100 y Glasgow <15; y un NEWS2 ≥7 define Riesgo Clínico Alto.'
        }
=======
        title: 'Escalas de Deterioro Fisiológico (NEWS 2), Sepsis (qSOFA/SOFA) y Trombosis (Wells)',
        part1Title: 'Parte 1: Escalas de Deterioro Fisiológico y Detección Temprana de Sepsis',
        part2Title: 'Parte 2: Escalas de Tromboembolismo Pulmonar y Trombosis (Wells)',
        duration: '8 Horas Lectivas',
        summary: 'Más del 80% de los paros intrahospitalarios son precedidos por alteraciones de signos vitales 6 a 12 horas antes. Las escalas NEWS 2, qSOFA y Wells permiten intervenir a tiempo.',
        content: [
          '1. National Early Warning Score (NEWS 2): Evalúa 6 parámetros fisiológicos (FR, SatO2, uso de O2, PA sistólica, FC y temperatura). Un puntaje ≥ 5 (o 3 puntos en un solo parámetro) activa de inmediato al Equipo de Respuesta Rápida.',
          '2. quick SOFA (qSOFA) y Paquete de la Primera Hora en Sepsis: El qSOFA evalúa a pie de cama 3 criterios (1 pto c/u): 1) Frecuencia Respiratoria ≥ 22 rpm; 2) Alteración de conciencia (Glasgow < 15); 3) Presión Arterial Sistólica ≤ 100 mmHg. Con ≥ 2 puntos existe alto riesgo de mortalidad. Paquete de 1 hora (Surviving Sepsis): 1) Medir lactato; 2) Tomar 2 hemocultivos antes del antibiótico; 3) Antibiótico de amplio espectro en la 1ra hora; 4) Cristaloides 30 ml/kg si hipotensión o lactato ≥ 4; 5) Noradrenalina si PAM < 65 mmHg.',
          '3. Escalas de Wells para TVP y TEP: Estratifican la probabilidad clínica de Trombosis Venosa Profunda (pierna hinchada con fóvea, dolor en trayecto venoso, cáncer, inmovilización) y Tromboembolismo Pulmonar (signos de TVP +3, taquicardia >100 lpm +1.5, hemoptisis +1, cirugía reciente +1.5).',
          '4. Rol del Dímero D vs. AngioTAC Pulmonar: En Baja Probabilidad de TEP (Wells < 2), se pide Dímero D: si sale negativo (<500 ng/ml), descarta el TEP al 99%. En Alta Probabilidad de TEP (Wells > 4), NO se pierde tiempo en Dímero D y se realiza directamente AngioTAC Pulmonar.'
        ],
        tableData: {
          title: 'Variables Clínicas del qSOFA y Estrategia Diagnóstica según Escala de Wells',
          headers: ['Escala / Parámetro', 'Umbral / Puntaje', 'Conducta Clínica e Interpretación'],
          rows: [
            ['qSOFA: Frecuencia Respiratoria', '≥ 22 respiraciones/min (Taquipnea)', 'Signo precoz más sensible de acidosis metabólica y sepsis.'],
            ['qSOFA: Estado Neurológico', 'Glasgow < 15 puntos', 'Hipoperfusión cerebral / encefalopatía séptica.'],
            ['qSOFA: Presión Arterial', 'PA Sistólica ≤ 100 mmHg', 'Con ≥ 2 puntos qSOFA: activar código sepsis y paquete de 1ra hora.'],
            ['Wells Baja Probabilidad (< 2)', 'Solicitar Dímero D de alta sensibilidad', 'Si Dímero D es negativo (<500 ng/ml): descarta TEP al 99%.'],
            ['Wells Alta Probabilidad (> 4)', 'NO esperar Dímero D', 'Realizar AngioTAC Pulmonar directo e iniciar anticoagulación.']
          ]
        },
        keyPoints: [
          'La taquipnea (>22 rpm) es el signo respiratorio más precoz de descompensación y sepsis en hospitalización.',
          'Los 3 criterios del qSOFA: FR ≥ 22 rpm, PAS ≤ 100 mmHg y Glasgow < 15 (positivo con ≥ 2 puntos).',
          'En sepsis: tomar 2 juegos de hemocultivos ANTES de administrar la primera dosis de antibiótico.',
          'El Dímero D tiene alto valor predictivo negativo (descarta si es negativo), pero da muchos falsos positivos en ancianos, cirugía, embarazo e infecciones.'
        ],
        clinicalPearl: 'La Trampa del Dímero D Falso Positivo: El Dímero D es un producto de degradación de la fibrina; tiene un valor predictivo negativo excelente (si sale negativo en riesgo bajo, no hay trombo), pero es muy poco específico. Se eleva naturalmente en ancianos, cirugías recientes, heridas, infecciones, cáncer y embarazo. Un Dímero D positivo nunca confirma por sí solo un TEP; exige prueba de imagen (AngioTAC o Eco-Doppler).',
        checkQuestion: {
          question: '¿Cuáles son los 3 parámetros rápidos que revisa la escala abreviada qSOFA para sospechar sepsis grave a pie de cama?',
          options: [
            'Fiebre, leucocitosis y tos',
            'Respiración rápida (≥22 rpm), presión arterial sistólica baja (≤100 mmHg) y alteración de conciencia (Glasgow <15)',
            'Dolor abdominal, vómitos y diarrea',
            'Bradicardia, hipertensión y cianosis'
          ],
          correctIndex: 1,
          explanation: 'El qSOFA evalúa taquipnea (≥22 rpm), hipotensión sistólica (≤100 mmHg) y alteración mental (Glasgow <15) sin requerir laboratorio.'
        },
        moduleQuiz: [
          { id: 'c2m4q1', question: '¿Para qué sirven las escalas de alerta temprana como el NEWS 2 en las salas de hospitalización?', options: ['Para apagar las luces del pasillo', 'Para detectar horas antes qué paciente se está agravando y evitar que haga un paro cardíaco', 'Para dar comida', 'Para limpiar camas'], correctIndex: 1, rationale: 'NEWS 2 suma puntos en los signos vitales; avisa con horas de anticipación el deterioro antes del paro cardiorrespiratorio.' },
          { id: 'c2m4q2', question: '¿Cuáles son los 3 parámetros rápidos que revisa la escala abreviada qSOFA para sospechar sepsis grave a pie de cama?', options: ['Hambre, dolor de pies y tos', 'Respiración rápida (≥22 rpm), presión baja (sistólica ≤100 mmHg) y confusión mental', 'Fiebre con sudor en las manos', 'Vómito y diarrea'], correctIndex: 1, rationale: 'El qSOFA evalúa taquipnea (≥22), hipotensión sistólica (≤100) y alteración del nivel de conciencia (Glasgow <15).' },
          { id: 'c2m4q3', question: 'Si un paciente con una infección en el pulmón tiene 2 puntos en la escala qSOFA, ¿qué peligro clínico tiene?', options: ['Está sano', 'Alto riesgo de complicarse, entrar en shock séptico o morir si no se actúa de inmediato', 'Ningún peligro', 'Puede irse a su casa'], correctIndex: 1, rationale: 'Un qSOFA ≥2 puntos en pacientes infectados identifica alto riesgo de mortalidad hospitalaria y exige ingreso urgente a UCI.' },
          { id: 'c2m4q4', question: '¿Qué es lo primero que se debe hacer antes de inyectar los antibióticos en la primera hora de un paciente con sepsis?', options: ['Bañarlo con agua fría', 'Tomar las muestras de sangre para cultivo (hemocultivos) sin retrasar el inicio del tratamiento', 'Darle almuerzo', 'Tomar una radiografía'], correctIndex: 1, rationale: 'Tomar los hemocultivos antes del antibiótico permite identificar la bacteria exacta en el laboratorio antes de que el fármaco la barra.' },
          { id: 'c2m4q5', question: '¿Qué evalúa la Escala de Wells en un paciente que tiene una pierna muy hinchada, roja y caliente?', options: ['La fuerza de los huesos', 'La probabilidad de que tenga una Trombosis Venosa Profunda (un coágulo tapando la vena de la pierna)', 'El tamaño del zapato', 'Si tiene várices simples'], correctIndex: 1, rationale: 'La escala de Wells estratifica el riesgo de trombosis venosa profunda mediante factores clínicos antes de hacer la ecografía.' },
          { id: 'c2m4q6', question: '¿Para qué sirve pedir el examen de sangre "Dímero D" en un paciente con sospecha baja de coágulo en el pulmón?', options: ['Para curar el trombo', 'Si sale negativo, descarta casi al 100% que tenga un coágulo en el pulmón sin necesidad de tomografías', 'Para ver las defensas', 'Para medir la glucosa'], correctIndex: 1, rationale: 'El Dímero D tiene un gran valor predictivo negativo: un resultado normal descarta de forma segura la presencia de embolia pulmonar.' },
          { id: 'c2m4q7', question: 'Si la sospecha clínica de tromboembolismo pulmonar es MUY ALTA en la escala de Wells, ¿qué estudio se debe pedir de inmediato?', options: ['Placa simple de huesos', 'Angiotomografía (AngioTAC) pulmonar de urgencia para ver los vasos del pulmón con contraste', 'Análisis de orina', 'Una ecografía de abdomen'], correctIndex: 1, rationale: 'Con probabilidad clínica alta no se pierde tiempo en Dímero D; el examen de elección definitivo es la tomografía de arterias pulmonares.' },
          { id: 'c2m4q8', question: '¿Por qué un resultado de Dímero D elevado o positivo NO asegura al 100% que el paciente tenga un trombo?', options: ['Porque los laboratorios fallan siempre', 'Porque también se eleva por cirugías, golpes, infecciones, cáncer o embarazo sin que haya trombosis', 'Porque es un azúcar', 'Por la edad'], correctIndex: 1, rationale: 'El Dímero D es inespecífico; cualquier proceso con inflamación o fibrina lo eleva, por lo que requiere confirmación por imagen.' },
          { id: 'c2m4q9', question: '¿Cuál es el signo respiratorio más precoz y rápido que avisa que un paciente hospitalizado se está descompensando?', options: ['Respirar muy lento a 5 por minuto', 'La respiración acelerada y rápida (taquipnea mayor a 22 respiraciones por minuto)', 'Toser una sola vez', 'El hipo'], correctIndex: 1, rationale: 'El aumento de la frecuencia respiratoria es el primer mecanismo compensatorio ante acidosis o hipoperfusión sistémica.' },
          { id: 'c2m4q10', question: 'En el paquete de la primera hora de Sepsis, ¿qué solución intravenosa se administra a 30 ml/kg si el paciente tiene hipotensión?', options: ['Dextrosa al 50%', 'Soluciones cristaloides (Cloruro de Sodio 0.9% o Ringer Lactato)', 'Sangre total', 'Agua destilada pura'], correctIndex: 1, rationale: 'La reanimación hídrica inicial en sepsis con hipotensión o lactato ≥4 mmol/L se realiza con 30 ml/kg de cristaloides.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm5',
        number: 5,
<<<<<<< Updated upstream
        title: 'Valoración del Dolor (5to Signo Vital): EVA, FLACC, PAINAD y CPOT/BPS',
        part1Title: 'Parte 1: Escalas para Pacientes Comunicativos (EVA / ENV y Wong-Baker)',
        part2Title: 'Parte 2: Escalas Conductuales en Lactantes (FLACC), Demencia (PAINAD) y UCI (CPOT/BPS)',
        duration: '6 Horas Lectivas',
        summary: 'Selección de la escala de dolor adecuada según la edad y estado comunicativo del paciente, y tiempos de reevaluación post-analgesia.',
        content: [
          '1. Pacientes Comunicativos: En adultos lúcidos se emplea la Escala Numérica Verbal (ENV) o Visual Analógica (EVA de 0 a 10): Dolor Leve (1-3), Dolor Moderado (4-6) y Dolor Severo (7-10). En niños mayores de 3-4 años se utiliza la escala de caras de Wong-Baker.',
          '2. Pacientes No Comunicativos: En neonatos y lactantes preverbales (<3 años) se aplica la escala FLACC (Face/Cara, Legs/Piernas, Activity/Actividad, Cry/Llanto, Consolability/Consolabilidad: 0 a 10 pts). En ancianos con demencia avanzada se usa PAINAD. En pacientes intubados y sedados en UCI se utilizan las escalas CPOT (Critical-Care Pain Observation Tool) o BPS (Behavioral Pain Scale), que evalúan expresión facial, movimientos de miembros y adaptación al ventilador mecánico.'
        ],
        keyPoints: [
          'EVA / ENV: 1-3 Dolor Leve | 4-6 Dolor Moderado | 7-10 Dolor Severo.',
          'Lactantes que aún no hablan: Escala FLACC | Pacientes intubados en UCI: Escala CPOT o BPS.',
          'Reevaluar el dolor a los 15-30 minutos tras analgesia endovenosa y a los 60 minutos tras analgesia oral.'
        ],
        clinicalPearl: 'La Regla de "Analgesia Primero" en UCI (eCASH): En un paciente intubado que lucha contra el ventilador mecánico, primero evalúa y trata el dolor (escala CPOT/BPS) antes de subir el sedante. Muchos casos de agitación son dolor quirúrgico o por el tubo endotraqueal.',
        checkQuestion: {
          question: '¿Qué escala validada debe utilizar la enfermera para cuantificar el dolor en un paciente adulto intubado bajo sedación en UCI que no puede hablar?',
          options: [
            'Escala Numérica Verbal (preguntarle del 1 al 10)',
            'Escala CPOT (Critical-Care Pain Observation Tool) o BPS (Behavioral Pain Scale)',
            'Escala de Norton',
            'Test de Apgar'
          ],
          correctIndex: 1,
          explanation: 'Las escalas CPOT y BPS están diseñadas específicamente para pacientes críticos intubados, evaluando gestos faciales, tono muscular y sincronía con el ventilador.'
        }
=======
        title: 'Escalas Respiratorias (CURB-65), Valoración del Dolor y Escala de Alvarado',
        part1Title: 'Parte 1: Escalas Respiratorias, Neumonía (CURB-65) y Valoración del Dolor',
        part2Title: 'Parte 2: Escalas Quirúrgicas de Urgencias: Alvarado (Apendicitis)',
        duration: '6 Horas Lectivas',
        summary: 'La escala CURB-65 define el manejo ambulatorio u hospitalario de la neumonía; las escalas EVA, Wong-Baker y FLACC miden el dolor como quinto signo vital, y la escala de Alvarado estratifica la apendicitis aguda.',
        content: [
          '1. Escala CURB-65 (Neumonía Adquirida en la Comunidad): Suma 1 punto por cada variable: C (Confusión mental nueva); U (Urea sérica > 19 mg/dl o BUN > 7 mmol/L); R (Frecuencia Respiratoria ≥ 30 rpm); B (Presión arterial baja: PAS < 90 o PAD ≤ 60 mmHg); 65 (Edad ≥ 65 años). Conducta: 0-1 pto = manejo ambulatorio; 2 ptos = hospitalización en sala general; ≥ 3 ptos = hospitalización urgente y valorar UCI.',
          '2. Escalas Clínicas del Dolor (Quinto Signo Vital): EVA / Numérica (0 a 10 en adultos orientados: 1-3 leve, 4-6 moderado, 7-10 severo); Wong-Baker (escala de 6 caritas para niños > 3 años); FLACC (conductual de 0-10 para lactantes < 3 años evaluando Face, Legs, Activity, Cry, Consolability); Campbell/CPOT (para pacientes intubados y sedados en UCI). El dolor debe reevaluarse 30-60 min tras el analgésico.',
          '3. Escala de Alvarado (MANTRELS) para Apendicitis Aguda (10 puntos): Síntomas: Migración del dolor del epigastrio a fosa ilíaca derecha (1 pto), Anorexia (1 pto), Náuseas/vómitos (1 pto). Signos: Dolor a la palpación en punto de McBurney en FID (2 puntos - doble), Signo de rebote o Blumberg positivo (1 pto), Fiebre >37.3°C (1 pto). Laboratorio: Leucocitosis >10,000/mm³ (2 puntos - doble), Desviación a la izquierda / neutrofilia (1 pto).',
          '4. Conducta según Puntaje de Alvarado: 0-4 puntos (baja probabilidad); 5-6 puntos (sospecha intermedia: observación y ecografía/TAC); 7-8 puntos (alta probabilidad: interconsulta quirúrgica urgente); 9-10 puntos (quirófano directo).'
        ],
        tableData: {
          title: 'Escalas de Medición del Dolor y Puntuación de Alvarado (MANTRELS)',
          headers: ['Escala / Categoría', 'Población o Variable Evaluada', 'Criterio / Puntuación Asignada'],
          rows: [
            ['EVA / EN (0 a 10 ptos)', 'Adultos orientados cognitivamente', '1-3: Leve (AINE/Paracetamol) | 4-6: Moderado (Tramadol) | 7-10: Severo (Opioide fuerte).'],
            ['Wong-Baker (Caritas)', 'Niños mayores de 3 años', '6 rostros desde sonriente (0 = sin dolor) hasta llanto máximo (10).'],
            ['FLACC (Conductual)', 'Lactantes y menores de 3 años', 'Evalúa Cara, Piernas, Actividad, Llanto y Consolabilidad (0 a 10 ptos).'],
            ['Alvarado: Variables Dobles', '1) Dolor en FID (McBurney) | 2) Leucocitosis >10,000', 'Aportan 2 puntos cada una (las otras 6 variables aportan 1 punto; total = 10).'],
            ['Alvarado: Signo de Blumberg', 'Dolor agudo al descomprimir bruscamente la FID', 'Indica irritación peritoneal parietal por apendicitis aguda (1 punto).']
          ]
        },
        keyPoints: [
          'CURB-65: Confusión, Urea >19 mg/dl, Respiración ≥30 rpm, Blood pressure baja (<90/60), Edad ≥65 años.',
          'En puestos de salud sin laboratorio se aplica CRB-65: con ≥1 punto se refiere al hospital.',
          'En la Escala de Alvarado (10 ptos), un puntaje ≥ 7 exige evaluación quirúrgica urgente por alta probabilidad de apendicitis.',
          'El dolor visceral de la apendicitis inicia en epigastrio/ombligo y migra hacia la fosa ilíaca derecha.'
        ],
        clinicalPearl: 'Signo del Rebote o Signo de Blumberg: Se comprime suavemente y de forma profunda la fosa ilíaca derecha y se suelta la mano bruscamente. Si el paciente experimenta una punzada de dolor intenso y agudo al descomprimir, el signo es positivo e indica irritación del peritoneo parietal, sugiriendo peritonitis localizada por apéndice inflamado.',
        checkQuestion: {
          question: 'Si un paciente con neumonía obtiene 3 puntos en la escala CURB-65, ¿cuál es la conducta médica correcta?',
          options: [
            'Enviarlo a su casa con jarabe para la tos',
            'Hospitalizarlo de urgencia en el hospital y valorar su ingreso a UCI por alto riesgo de mortalidad (>22%)',
            'Citarlo por consultorio externo en un mes',
            'No darle antibióticos'
          ],
          correctIndex: 1,
          explanation: 'Con 3 o más puntos en CURB-65 la mortalidad supera el 22%, siendo obligatorio el ingreso hospitalario urgente y valoración por UCI.'
        },
        moduleQuiz: [
          { id: 'c2m5q1', question: '¿Para qué se utiliza la escala CURB-65 en un paciente que llega con tos, fiebre y neumonía?', options: ['Para saber si tiene asma', 'Para evaluar la gravedad y decidir si el paciente puede tratarse en casa o necesita internarse en el hospital', 'Para ver si tiene gripe', 'Para medir el peso'], correctIndex: 1, rationale: 'CURB-65 mide la gravedad de la neumonía; puntajes de 0-1 se tratan en casa y con ≥2 requieren hospitalización.' },
          { id: 'c2m5q2', question: '¿Qué significa la letra "C" en la escala de neumonía CURB-65?', options: ['Tos con flema', 'Confusión mental nueva en el paciente (no sabe la fecha o dónde está)', 'Dolor de cabeza', 'Comer mucho'], correctIndex: 1, rationale: 'La letra C indica Confusión mental; en adultos mayores con neumonía es un marcador de hipoxia y sepsis severa.' },
          { id: 'c2m5q3', question: 'Si un paciente con neumonía saca 3 puntos en la escala CURB-65, ¿dónde debe recibir tratamiento médico?', options: ['En su casa tomando té caliente', 'Hospitalizado en el hospital y evaluar si debe ingresar a la Unidad de Cuidados Intensivos (UCI)', 'En la farmacia', 'Puede viajar'], correctIndex: 1, rationale: 'Con 3 puntos o más la mortalidad supera el 22%; el ingreso hospitalario urgente o a UCI es mandatario.' },
          { id: 'c2m5q4', question: 'En la escala numérica del dolor del 0 al 10 (EVA), ¿cuánto marca un paciente que dice tener el "peor dolor de su vida"?', options: ['Cero puntos', '2 puntos', '10 puntos (dolor máximo insoportable)', '5 puntos'], correctIndex: 2, rationale: 'En la escala numérica, el 0 es ausencia total de dolor y el 10 representa el máximo dolor imaginable.' },
          { id: 'c2m5q5', question: '¿Qué escala de dolor se utiliza para evaluar a niños mayores de 3 años mediante dibujos de caras sonrientes y llorando?', options: ['Escala de Glasgow', 'Escala de Wong-Baker (escala de caritas)', 'Escala de Braden', 'Escala de Norton'], correctIndex: 1, rationale: 'La escala visual de Wong-Baker utiliza dibujos de rostros expresivos para que niños pequeños señalen cuánto les duele.' },
          { id: 'c2m5q6', question: '¿Para qué se utiliza la escala FLACC en los hospitales pediátricos?', options: ['Para ver cuánto pesa el bebé', 'Para medir el dolor en bebés y niños menores de 3 años mirando su cara, piernas, llanto y consuelo', 'Para medir la fiebre', 'Para la talla'], correctIndex: 1, rationale: 'FLACC evalúa el comportamiento motor y llanto de lactantes y pacientes que no pueden comunicarse verbalmente.' },
          { id: 'c2m5q7', question: '¿Para qué sospecha de enfermedad quirúrgica en la barriga se utiliza la Escala de Alvarado?', options: ['Para diarrea común', 'Para calcular el riesgo de Apendicitis Aguda que necesita cirugía', 'Para dolor de riñón', 'Para gastritis'], correctIndex: 1, rationale: 'La escala de Alvarado puntúa síntomas y signos para diagnosticar oportunamente apendicitis aguda y evitar peritonitis.' },
          { id: 'c2m5q8', question: '¿Dónde empieza típicamente el dolor y hacia dónde se muda en un paciente que tiene apendicitis aguda clásica?', options: ['En el pie y sube al muslo', 'Empieza alrededor del ombligo (o boca del estómago) y luego baja a la fosa ilíaca derecha', 'En la espalda', 'En el hombro izquierdo'], correctIndex: 1, rationale: 'El dolor visceral de apendicitis inicia en el centro del abdomen y luego se localiza en la fosa ilíaca derecha sobre el apéndice.' },
          { id: 'c2m5q9', question: '¿Qué significa el "Signo de Blumberg" o signo del rebote cuando el médico revisa la barriga de un paciente?', options: ['Que tiene gases', 'Que duele mucho más al soltar la mano de golpe tras apretar, avisando que el peritoneo está inflamado', 'Que tiene hambre', 'Cosquillas'], correctIndex: 1, rationale: 'El dolor agudo a la descompresión brusca (Blumberg positivo) indica irritación peritoneal por apendicitis o perforación.' },
          { id: 'c2m5q10', question: 'Si un paciente tiene 8 puntos en la escala de Alvarado con dolor de rebote y glóbulos blancos altos, ¿qué conducta se toma?', options: ['Mandarlo a casa a descansar', 'Interconsulta urgente con el cirujano para operarlo de apendicitis antes de que se reviente', 'Darle comida pesada', 'Esperar una semana'], correctIndex: 1, rationale: 'Con 7 a 8 puntos la probabilidad de apendicitis es muy alta y el paciente debe ser evaluado por cirugía de inmediato.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm6',
        number: 6,
<<<<<<< Updated upstream
        title: 'Escalas de Seguridad del Paciente: Riesgo de Caídas (Downton, Morse, Humpty Dumpty) y Aldrete',
        part1Title: 'Parte 1: Prevención de Caídas en Adultos (Downton y Morse) y Pediatría (Humpty Dumpty)',
        part2Title: 'Parte 2: Recuperación Post-Anestésica (Test de Aldrete Modificado y Bromage)',
        duration: '6 Horas Lectivas',
        summary: 'Identificación del alto riesgo de caídas hospitalarias y criterios objetivos de alta de la Unidad de Recuperación Post-Anestésica (URPA).',
        content: [
          '1. Escalas de Riesgo de Caídas: La Escala de J.H. Downton evalúa 5 dimensiones: caídas previas, medicamentos (sedantes, diuréticos, antihipertensivos), déficits sensoriales, estado mental y deambulación; un puntaje ≥ 3 puntos clasifica como ALTO RIESGO DE CAÍDAS. La Escala de Morse clasifica en Riesgo Bajo (<25), Medio (25-44) y Alto (≥45 o >50 pts). En pediatría se utiliza la escala Humpty Dumpty (≥12 puntos = Alto Riesgo).',
          '2. Recuperación Post-Anestésica (URPA): El Test de Aldrete Modificado evalúa 5 parámetros de 0 a 2 puntos cada uno (máximo 10 puntos): Actividad motora, Respiración, Circulación (PA), Conciencia y Saturación de O2; se requiere un puntaje ≥ 9 puntos para el alta de URPA a hospitalización. La Escala de Bromage evalúa la reversión del bloqueo motor tras anestesia raquídea/epidural.'
        ],
        tableData: {
          title: 'Escalas de Seguridad Hospitalaria y Puntos de Corte Oficiales',
          headers: ['Escala Clínica', 'Ámbito de Aplicación', 'Punto de Corte Crítico', 'Conducta de Enfermería'],
          rows: [
            ['Escala de J.H. Downton', 'Riesgo de Caídas (Adultos)', '≥ 3 puntos = ALTO RIESGO', 'Barandas arriba, cama baja, timbre a la mano y brazalete de riesgo.'],
            ['Escala de Morse', 'Riesgo de Caídas (Hospitalización)', '≥ 45-50 puntos = ALTO RIESGO', 'Asistencia en traslado al baño y revisión de psicofármacos.'],
            ['Escala Humpty Dumpty', 'Riesgo de Caídas (Pediatría)', '≥ 12 puntos = ALTO RIESGO', 'Cuna con barandas elevadas con seguro y acompañamiento familiar.'],
            ['Test de Aldrete Modificado', 'Recuperación Post-Anestésica (URPA)', '≥ 9 puntos (de 10) = ALTA URPA', 'Acredita estabilidad respiratoria, hemodinámica y neurológica.']
          ]
        },
        keyPoints: [
          'Escala de Downton: ≥ 3 puntos = Alto Riesgo de Caídas.',
          'Escala Pediátrica Humpty Dumpty: ≥ 12 puntos = Alto Riesgo de Caídas en niños.',
          'Test de Aldrete Modificado: puntaje ≥ 9 sobre 10 autoriza el traslado seguro desde URPA a piso.'
        ],
        clinicalPearl: 'El Momento de Mayor Riesgo de Caída Hospitalaria: Más del 60% de las caídas en hospitalización ocurren de noche cuando un adulto mayor que recibió un diurético (furosemida) o un sedante (alprazolam/zolpidem) intenta levantarse solo para ir al baño.',
        checkQuestion: {
          question: '¿Qué puntaje en la Escala de J.H. Downton indica Alto Riesgo de Caídas en adultos y qué puntaje mínimo en el Test de Aldrete Modificado se exige para dar de alta a un paciente de Recuperación Post-Anestésica (URPA)?',
          options: [
            'Downton 0 puntos — Aldrete 3 puntos',
            'Downton ≥ 3 puntos (Alto Riesgo) — Aldrete ≥ 9 puntos (sobre 10) para el alta de URPA',
            'Downton 20 puntos — Aldrete 1 punto',
            'Downton 1 punto — Aldrete 5 puntos'
          ],
          correctIndex: 1,
          explanation: 'En Downton ≥ 3 puntos define Alto Riesgo de Caídas, y en el Test de Aldrete se exige ≥ 9 puntos para el alta segura de URPA.'
        }
=======
        title: 'Escalas de Recuperación Post-Anestésica (Aldrete, Bromage) y Bioseguridad Legal en Triage',
        part1Title: 'Parte 1: Escalas Quirúrgicas de Recuperación (Aldrete y Bromage)',
        part2Title: 'Parte 2: Aspectos Ético-Legales y Bioseguridad en el Triage',
        duration: '6 Horas Lectivas',
        summary: 'El alta de la Unidad de Recuperación Post-Anestésica (URPA) exige un puntaje de Aldrete Modificado ≥ 9 puntos y Bromage 0. El registro de triage conlleva alta responsabilidad médico-legal.',
        content: [
          '1. Escala de Aldrete Modificada (Alta de URPA): Evalúa 5 parámetros fisiológicos (0 a 2 puntos cada uno, máximo 10 puntos): 1) Actividad motora (mueve 4 extremidades = 2 ptos); 2) Respiración (respira profundo y tose = 2 ptos); 3) Circulación (PA dentro de ±20% del basal = 2 ptos); 4) Conciencia (completamente despierto = 2 ptos); 5) Saturación de O2 (>92% aire ambiente = 2 ptos). Puntaje mínimo obligatorio de alta a piso: ≥ 9 puntos.',
          '2. Escala de Bromage (Anestesia Raquídea/Epidural): Evalúa la reversión del bloqueo motor en miembros inferiores: Grado 0 = Sin bloqueo (mueve libremente pies y rodillas); Grado 1 = Bloqueo parcial (apenas dobla rodillas); Grado 2 = Bloqueo casi completo (solo mueve dedos de los pies); Grado 3 = Bloqueo motor completo. Se exige Bromage 0 para levantarse.',
          '3. Responsabilidad Médico-Legal y Sub-triage vs. Sobre-triage: Es obligación jurídica anotar en la Hoja de Triage: hora exacta de llegada, hora de valoración, signos vitales completos, nivel de prioridad y discriminador. El Sub-triage (clasificar a un paciente grave como leve/verde) es el error más peligroso porque retrasa la reanimación y causa la muerte.',
          '4. Bioseguridad en el Módulo de Triage: Ante paciente febril con tos (sospecha de TBC/Influenza), colocar mascarilla quirúrgica al paciente y usar respirador N95 el personal. En glucometría capilar, descartar la lanceta en contenedor rígido de punzocortantes y las tiras con sangre en bolsa roja.'
        ],
        tableData: {
          title: 'Desglose de la Escala de Aldrete Modificada y Bioseguridad en Triage',
          headers: ['Parámetro / Procedimiento', 'Criterio de 2 Puntos / Riesgo', 'Criterio de Seguridad Obligatorio'],
          rows: [
            ['1. Actividad Motora', 'Mueve las 4 extremidades (2 ptos) | 2 extremidades (1 pto) | 0 (0 ptos)', 'Total Aldrete obligatorio para alta de URPA: ≥ 9 puntos.'],
            ['2. Respiración y 3. Circulación', 'Respira profundo y tose (2 ptos) | PA ±20% del valor basal (2 ptos)', 'Evita hipoventilación por anestésicos residuales o shock en sala común.'],
            ['4. Conciencia y 5. SatO2', 'Despierto y lúcido (2 ptos) | SatO2 >92% aire ambiental (2 ptos)', 'Si SatO2 <90% o paciente sedado, debe permanecer en URPA.'],
            ['Triaje Respiratorio (Tos/Fiebre)', 'Aerosoles con TBC, Influenza o SARS-CoV-2', 'Mascarilla quirúrgica al paciente + Respirador N95 para el profesional.'],
            ['Glucometría Capilar', 'Riesgo de punción accidental (VHB, VIH)', 'Lancetas a caja rígida de punzocortantes; tiras con sangre a bolsa roja.']
          ]
        },
        keyPoints: [
          'Puntaje mínimo obligatorio en Escala de Aldrete Modificada para alta de URPA: 9 o 10 puntos.',
          'Escala de Bromage post-anestesia raquídea: Grado 0 (mueve pies y rodillas sin bloqueo) antes de bipedestación.',
          'Sub-triage (error crítico): subestimar la gravedad real de un paciente; su tasa hospitalaria debe ser < 5%.',
          'Registrar siempre hora exacta de llegada y hora de valoración para respaldo médico-legal.'
        ],
        clinicalPearl: 'Sub-Triage vs. Sobre-Triage: El Sub-triage (clasificar a un paciente grave en un nivel inferior al que le corresponde, ej. poner Nivel Verde a un infarto agudo de miocardio o sepsis) retrasa la atención médica y causa muertes evitables. Ante la duda diagnóstica entre dos niveles en el triage, siempre se debe asignar el nivel de mayor prioridad.',
        checkQuestion: {
          question: '¿Cuál es el puntaje mínimo obligatorio que debe alcanzar un paciente post-operado en la Escala de Aldrete Modificada para salir de Recuperación (URPA) a su cama de hospitalización?',
          options: ['4 puntos', '6 puntos', '9 a 10 puntos como mínimo', 'No requiere puntaje'],
          correctIndex: 2,
          explanation: 'Las guías de seguridad anestésica exigen un puntaje de Aldrete ≥ 9 puntos para autorizar el egreso seguro de URPA.'
        },
        moduleQuiz: [
          { id: 'c2m6q1', question: '¿Para qué se utiliza la Escala de Aldrete en la sala de recuperación de un hospital (URPA)?', options: ['Para cobrar la operación', 'Para evaluar si el paciente ya despertó bien de la anestesia y puede pasar seguro a su habitación', 'Para ver qué va a almorzar', 'Para medir la herida'], correctIndex: 1, rationale: 'Aldrete evalúa la recuperación motora, respiratoria, hemodinámica, de conciencia y oxigenación tras una cirugía.' },
          { id: 'c2m6q2', question: '¿Cuál es el puntaje mínimo obligatorio que debe sacar un paciente en la Escala de Aldrete para poder salir de recuperación a su cama?', options: ['2 puntos', '5 puntos', '9 o 10 puntos como mínimo', 'Cero puntos'], correctIndex: 2, rationale: 'Las normas exigen un puntaje de Aldrete ≥9; dar el alta con menor puntaje expone al paciente a paro o asfixia en el piso común.' },
          { id: 'c2m6q3', question: 'Si un paciente recién operado todavía no despierta, no respira bien y satura menos de 90%, ¿cuánto saca en Aldrete?', options: ['Saca 10 y se va a su casa', 'Saca un puntaje bajo peligroso y DEBE permanecer en recuperación vigilado por el anestesiólogo', 'Se le manda a la sala', 'Se le apaga el monitor'], correctIndex: 1, rationale: 'Si hay hipoxia o sedación profunda, el paciente no cumple criterios de seguridad y debe continuar con oxígeno y vigilancia.' },
          { id: 'c2m6q4', question: '¿Qué es el error de "sub-triage" en la sala de emergencias, considerado el más peligroso de todos?', options: ['Mandar al paciente en ambulancia', 'Clasificar por error como "leve" (verde) a un paciente que en verdad está grave (infarto o shock), retrasando su atención', 'Atenderlo rápido', 'Cobrarle menos'], correctIndex: 1, rationale: 'El sub-triage subestima la gravedad; el paciente se queda esperando en sala común cuando requería reanimación urgente.' },
          { id: 'c2m6q5', question: '¿Por qué es una obligación legal anotar la hora exacta de llegada y la hora de evaluación en la hoja de triage?', options: ['Para gastar el reloj', 'Porque respalda legalmente que el hospital atendió a tiempo al paciente y no hubo negligencia en la espera', 'Para ver si el turno terminó', 'Es opcional'], correctIndex: 1, rationale: 'La auditoría clínica y los procesos médico-legales exigen el registro fehaciente del tiempo transcurrido desde el ingreso.' },
          { id: 'c2m6q6', question: 'Si un paciente llega al triage tosiendo mucho con fiebre y sospecha de tuberculosis pulmonar, ¿qué mascarilla se le coloca?', options: ['Ninguna, se le pide que no respire', 'Una mascarilla quirúrgica de inmediato al paciente y el personal usa respirador N95', 'Una bufanda de lana', 'Un pañuelo de tela sucio'], correctIndex: 1, rationale: 'El paciente respiratorio debe usar mascarilla para control de la fuente y el personal respirador N95 de alta filtración.' },
          { id: 'c2m6q7', question: '¿Dónde se debe botar la lanceta con punta de metal y sangre que usamos para medir el azúcar en el dedo en el triage?', options: ['En el bolsillo del pantalón', 'Directamente en la caja dura amarilla/roja de residuos punzocortantes', 'En el tacho de papeles limpios', 'Al piso de la sala'], correctIndex: 1, rationale: 'Las lancetas son objetos punzocortantes con riesgo de contagio de VHB/VIH; se descartan siempre en contenedor rígido.' },
          { id: 'c2m6q8', question: '¿Cómo debe actuar el enfermero de triage si un familiar se molesta porque su paciente Nivel Verde tiene que esperar?', options: ['Gritarle más fuerte al familiar', 'Explicar con calma y educación que los casos con riesgo de muerte pasan primero y revisar sus signos si empeora', 'Cerrar la puerta en la cara', 'Negarle la atención'], correctIndex: 1, rationale: 'La comunicación asertiva y educativa explica el sistema de prioridades médicas sin generar violencia ni descuidar al paciente.' },
          { id: 'c2m6q9', question: '¿Para qué sirve la Escala de Bromage después de una anestesia raquídea (inyección en la espalda)?', options: ['Para ver la visión', 'Para evaluar si las piernas ya recuperaron el movimiento muscular completo antes de ponerlo de pie', 'Para ver la fiebre', 'Para el apetito'], correctIndex: 1, rationale: 'Bromage evalúa el grado de bloqueo motor en miembros inferiores; levantarse con bloqueo residual produce caídas y fracturas.' },
          { id: 'c2m6q10', question: '¿En qué color de bolsa hospitalaria se descartan las tiras con sangre del glucómetro y las gasas manchadas en el triage?', options: ['En bolsa negra', 'En bolsa roja de residuos biocontaminados', 'En bolsa verde', 'En bolsa transparente'], correctIndex: 1, rationale: 'Todo insumo o material manchado con sangre o fluidos corporales constituye residuo biocontaminado (bolsa roja).' }
        ]
>>>>>>> Stashed changes
      }
    ],
    finalExam: [
      {
        id: 'q1',
<<<<<<< Updated upstream
        question: 'Según la NTS N° 042-MINSA de Triaje en Emergencias, ¿qué prioridad y tiempo de atención corresponde a un paciente con dolor torácico opresivo irradiado a mandíbula y diaforesis?',
        options: [
          'Prioridad IV — Consulta externa en 48 horas',
          'Prioridad II (o I) — Urgencia Mayor con atención y toma de EKG en ≤ 10 minutos',
          'Prioridad III — Espera de 60 minutos',
          'Observación domiciliaria'
        ],
        correctIndex: 1,
        rationale: 'El síndrome coronario agudo es una emergencia tiempo-dependiente que exige atención y electrocardiograma en menos de 10 minutos.'
      },
      {
        id: 'q2',
        question: 'Un paciente con traumatismo craneoencefálico abre los ojos solo al estímulo doloroso (2), emite palabras inapropiadas (3) y localiza el dolor (5). ¿Cuál es su puntaje de Glasgow y a partir de qué puntaje se indica intubación endotraqueal?',
        options: [
          'Glasgow 10 puntos (TEC Moderado) — Se intuba cuando el Glasgow es ≤ 8 puntos (TEC Severo)',
          'Glasgow 6 puntos — Se intuba con Glasgow 15',
          'Glasgow 14 puntos — Nunca se intuba',
          'Glasgow 0 puntos — Se intuba con Glasgow 12'
        ],
        correctIndex: 0,
        rationale: 'Ocular (2) + Verbal (3) + Motora (5) = 10 puntos (TEC moderado); un Glasgow ≤ 8 indica pérdida de reflejos protectores de vía aérea e indicación de intubación.'
      },
      {
        id: 'q3',
        question: 'En la escala NEWS2 de alerta temprana, ¿a partir de qué puntaje se considera Riesgo Clínico Alto que exige respuesta inmediata del equipo de cuidados críticos / UCI?',
        options: ['1 punto', '3 puntos', '7 o más puntos (≥ 7)', 'Solo a los 20 puntos'],
        correctIndex: 2,
        rationale: 'Un puntaje NEWS2 ≥ 7 puntos define Riesgo Clínico Alto y obliga a valoración crítica inmediata y monitoreo continuo.'
      },
      {
        id: 'q4',
        question: 'Relacione correctamente la escala de valoración del dolor con el paciente indicado: 1) Lactante de 6 meses que no habla, 2) Paciente adulto intubado y sedado en UCI:',
        options: [
          '1) Escala de Morse, 2) Escala de Braden',
          '1) Escala FLACC, 2) Escala CPOT o BPS',
          '1) Escala EVA numérica, 2) Escala de Glasgow',
          '1) Test de Aldrete, 2) Escala de Downton'
        ],
        correctIndex: 1,
        rationale: 'FLACC evalúa el dolor en lactantes preverbales y CPOT/BPS evalúa el dolor en pacientes críticos intubados en UCI.'
      },
      {
        id: 'q5',
        question: 'En la Escala de J.H. Downton para riesgo de caídas y en el Test de Aldrete Modificado post-anestésico, ¿cuáles son los puntos de corte clave?',
        options: [
          'Downton ≥ 3 puntos indica Alto Riesgo de Caídas; y Aldrete ≥ 9 puntos (de 10) permite el alta segura de Recuperación (URPA)',
          'Downton 0 puntos es alto riesgo; y Aldrete 2 puntos permite el alta',
          'Ambos se califican sobre 100 puntos',
          'Downton evalúa úlceras y Aldrete evalúa flebitis'
        ],
        correctIndex: 0,
        rationale: 'Downton ≥ 3 clasifica al paciente en Alto Riesgo de Caídas, y Aldrete ≥ 9 certifica la recuperación post-anestésica.'
=======
        question: 'En el algoritmo de triage ESI, ¿qué nivel le corresponde a un paciente hemodinámicamente estable con dolor abdominal que requerirá laboratorio de sangre, ecografía abdominal e hidratación endovenosa?',
        options: [
          'ESI Nivel 1',
          'ESI Nivel 3 (requiere 2 o más recursos complejos diferentes)',
          'ESI Nivel 4',
          'ESI Nivel 5'
        ],
        correctIndex: 1,
        rationale: 'Los pacientes estables sin compromiso vital inmediato que precisan 2 o más recursos complejos se clasifican en ESI Nivel 3.'
      },
      {
        id: 'q2',
        question: 'Durante un accidente masivo (Triage START), usted evalúa a un herido que no puede caminar, tiene una frecuencia respiratoria de 36 rpm y un llenado capilar de 4 segundos. ¿Qué tarjeta le asigna?',
        options: [
          'Tarjeta Verde',
          'Tarjeta Amarilla',
          'Tarjeta Roja (Prioridad I: Inmediato)',
          'Tarjeta Negra'
        ],
        correctIndex: 2,
        rationale: 'Cualquier víctima con FR > 30 rpm, llenado capilar > 2 segundos o incapacidad de obedecer órdenes simples recibe Tarjeta Roja inmediata.'
      },
      {
        id: 'q3',
        question: '¿Qué puntaje en la Escala de Coma de Glasgow define coma grave con indicación obligatoria de intubación orotraqueal, y qué postura motora indica daño grave del tronco encefálico (2 puntos)?',
        options: [
          'Glasgow ≤ 12 — Postura de decorticación',
          'Glasgow ≤ 8 puntos — Postura de descerebración (extensión anormal = 2 puntos)',
          'Glasgow 15 puntos — Localiza el dolor',
          'Glasgow 0 puntos — Flexión normal'
        ],
        correctIndex: 1,
        rationale: 'Glasgow ≤ 8 exige intubación endotraqueal protectora. La extensión anormal (descerebración = 2 ptos) traduce lesión grave del tronco encefálico.'
      },
      {
        id: 'q4',
        question: '¿Cuáles son los 3 criterios de la escala qSOFA para sospecha de sepsis y qué se debe hacer ANTES de administrar el antibiótico en la primera hora?',
        options: [
          'Fiebre, tos y disuria — Tomar radiografía primero',
          'FR ≥ 22 rpm, PAS ≤ 100 mmHg y Glasgow < 15 — Tomar 2 frascos de hemocultivos antes de iniciar el antibiótico',
          'FC > 100 lpm, leucocitosis y oliguria — Esperar 24 horas',
          'Dolor torácico, disnea y edema — Pedir Dímero D'
        ],
        correctIndex: 1,
        rationale: 'El qSOFA evalúa FR ≥22, PAS ≤100 y GCS <15 (≥2 puntos = alto riesgo). El paquete de 1ra hora exige tomar hemocultivos antes del antibiótico.'
      },
      {
        id: 'q5',
        question: '¿Cuál es el puntaje mínimo obligatorio en la Escala de Aldrete Modificada para dar de alta a un paciente de Recuperación (URPA) y qué significa el Signo de Blumberg positivo en la Escala de Alvarado?',
        options: [
          'Aldrete ≥ 5 puntos — Blumberg indica infección urinaria',
          'Aldrete ≥ 9 puntos — Blumberg (dolor agudo al descomprimir la fosa ilíaca derecha) indica irritación peritoneal por apendicitis aguda',
          'Aldrete 15 puntos — Blumberg indica colecistitis crónica',
          'Aldrete ≥ 7 puntos — Blumberg indica gastritis leve'
        ],
        correctIndex: 1,
        rationale: 'Ningún paciente sale de URPA con menos de 9 puntos en Aldrete. El signo de Blumberg positivo confirma irritación peritoneal en apendicitis.'
>>>>>>> Stashed changes
      }
    ]
  },

  // ==========================================================================
<<<<<<< Updated upstream
  // CURSO 3: BIOSEGURIDAD HOSPITALARIA Y GESTIÓN INTEGRAL DE RESIDUOS SÓLIDOS (40 HORAS - 6 MÓDULOS)
=======
  // CURSO 3: BIOSEGURIDAD HOSPITALARIA Y MANEJO DE RESIDUOS SÓLIDOS (40 HORAS)
>>>>>>> Stashed changes
  // ==========================================================================
  {
    id: 'bioseguridad-residuos',
    code: 'EC-CUR-003',
<<<<<<< Updated upstream
    title: 'Bioseguridad Hospitalaria y Gestión Integral de Residuos Sólidos',
    subtitle: 'Niveles BSL 1-4, 5 Momentos OMS, secuencias de EPP, aislamientos, Clasificación de Spaulding, PEP ocupacional y NTS N° 144-MINSA/2018/DIGESA.',
    category: 'Control de Infecciones & Salud Ambiental',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 144-MINSA/2018/DIGESA / D.L. 1278 / OMS / CDC',
    badgeColor: 'from-emerald-500 to-teal-600',
    manualPdfUrl: '/manuales/manual-bioseguridad-residuos.pdf',
=======
    title: 'Bioseguridad Hospitalaria y Manejo de Residuos Sólidos',
    subtitle: 'Precauciones estándar, higiene de manos OMS, EPP, segregación según NTS N° 144-MINSA y profilaxis post-exposición laboral.',
    category: ' Epidemiología & Control IAAS',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 144-MINSA/2018/DIGESA / Manual de Bioseguridad MINSA / OMS',
    badgeColor: 'from-emerald-500 to-teal-600',
>>>>>>> Stashed changes
    modules: [
      {
        id: 'm1',
        number: 1,
<<<<<<< Updated upstream
        title: 'Fundamentos de Bioseguridad, Niveles de Contención (BSL 1-4) y Cadena Infecciosa',
        part1Title: 'Parte 1: Principio de Universalidad, Barreras y Niveles BSL-1 a BSL-4',
        part2Title: 'Parte 2: Dinámica de Transmisión y Patógenos Críticos Hospitalarios',
        duration: '6 Horas Lectivas',
        summary: 'Aplicación del Principio de Universalidad (CDC), barreras primarias/secundarias, niveles BSL 1-4 y riesgo serológico (VHB, VHC, VIH, TB).',
        content: [
          '1. Los Tres Pilares de la Bioseguridad (CDC/OMS): 1) Principio de Universalidad (todo paciente y fluido corporal debe asumirse invariablemente como portador de patógenos letales o multirresistentes, eliminando falsas seguridades por ausencia de fiebre o ventana inmunológica); 2) Doctrina de Barreras Protectoras (Primarias: guantes, N95, gafas, Cabinas CSB Clase II; Secundarias: presión negativa continua, ≥12 recambios de aire/hora ACH y filtros HEPA); y 3) Eliminación Segura en el punto de origen.',
          '2. Cadena Epidemiológica y Patógenos Críticos: Constituida por 6 eslabones: Agente etiológico, Reservorio, Puerta de salida, Mecanismo de transmisión, Puerta de entrada y Huésped susceptible. Riesgo de infección tras pinchazo percutáneo con aguja con sangre: Virus de Hepatitis B (VHB: 6% a 30%, sobrevive >7 días en superficies secas), Virus de Hepatitis C (VHC: 1.8% a 3%) y VIH (~0.3% percutáneo y ~0.09% mucosas).',
          '3. Aerosoles de Wells vs. Gotas y Biopelículas: Las gotas (>5 µm) caen por gravedad en <1 metro; los aerosoles de Wells (≤5 µm, como TB MDR/XDR) quedan suspendidos en el aire y penetran hasta los alvéolos. Las biopelículas (biofilms) protegen a bacterias como Pseudomonas aeruginosa frente a desinfectantes clorados si no se realiza arrastre mecánico previo.'
        ],
        tableData: {
          title: 'Niveles de Bioseguridad (BSL 1 a 4) y Riesgo Percutáneo de Patógenos Críticos',
          headers: ['Nivel / Patógeno', 'Microorganismos Representativos', 'Vía / Tasa de Transmisión', 'Infraestructura y Prevención Exigida'],
          rows: [
            ['BSL-1 / BSL-2', 'BSL-2: VHB, VHC, VIH, S. aureus MRSA', 'Percutánea, mucosas o salpicaduras', 'Acceso restringido, CSB Clase II para aerosoles y autoclave.'],
            ['BSL-3', 'M. tuberculosis MDR/XDR, SARS-CoV-2', 'Inhalación de bioaerosoles (≤5 µm)', 'Presión negativa hacia adentro, ≥12 ACH y filtros HEPA terminales.'],
            ['BSL-4', 'Virus Ébola, Marburg, Junín, Lassa', 'Aerosoles y microvolúmenes (>60% letal)', 'Traje con presión positiva de aire y gabinete Clase III sellado.'],
            ['Riesgo Pinchazo', 'VHB (6-30%) | VHC (1.8-3%) | VIH (~0.3%)', 'Punción accidental con aguja hueca', 'Vacunación VHB (títulos anti-HBs ≥10 mUI/ml) y PEP VIH en 2-4 h.']
          ]
        },
        keyPoints: [
          'Principio de Universalidad: todo paciente y fluido biológico es potencialmente infectante sin excepción.',
          'Mayor riesgo de seroconversión tras pinchazo con aguja en no vacunados: Hepatitis B (VHB: 6% al 30%).',
          'Aerosoles de Wells (≤5 µm): flotan en el aire y alcanzan los alvéolos (exigen N95 y presión negativa BSL-3).',
          'La flora cutánea transitoria de las manos se adquiere por contacto, es la causa principal de IAAS y se elimina con fricción antiséptica.'
        ],
        clinicalPearl: 'Estabilidad Extrema del Virus de la Hepatitis B (VHB): A diferencia del VIH (que muere en minutos fuera del cuerpo), el VHB sobrevive más de 7 días en manchas secas de sangre sobre superficies u objetos a temperatura ambiente.',
        checkQuestion: {
          question: 'Tras un pinchazo percutáneo accidental con una aguja hueca contaminada con sangre fresca, ¿qué virus presenta la mayor tasa de transmisión (6% al 30%) en personal no vacunado?',
          options: [
            'VIH (~0.3%)',
            'Virus de la Hepatitis C (1.8% a 3%)',
            'Virus de la Hepatitis B (VHB: 6% al 30%)',
            'Rinovirus común'
          ],
          correctIndex: 2,
          explanation: 'El VHB posee altísima carga viral y resistencia ambiental, con un riesgo de transmisión de hasta el 30% si la fuente es HBeAg positiva.'
        },
        moduleQuiz: [
          { id: 'c3m1q1', question: '¿Cuál es el postulado central del Principio de Universalidad en Bioseguridad Hospitalaria?', options: ['Solo muestras con serología reactiva son de riesgo', 'Todo fluido o tejido es potencialmente infectante sin importar el diagnóstico o historial', 'Las precauciones se restringen a UCI', 'Solo pacientes febriles requieren barreras'], correctIndex: 1, rationale: 'La ventana inmunológica viral y la portación asintomática obligan a asumir a todo paciente y muestra como infectantes.' },
          { id: 'c3m1q2', question: '¿Cuál de las siguientes instalaciones corresponde a una barrera de contención secundaria?', options: ['Respirador N95', 'Sistema de climatización con presión negativa continua y filtros HEPA terminales', 'Cabina CSB Clase II', 'Guantes de nitrilo'], correctIndex: 1, rationale: 'Las barreras secundarias abarcan la infraestructura e ingeniería edilicia (HVAC, esclusas y filtros HEPA).' },
          { id: 'c3m1q3', question: '¿Qué nivel de bioseguridad mínimo (BSL) es mandatorio para el cultivo de cepas vivas de Mycobacterium tuberculosis MDR?', options: ['BSL-1', 'BSL-2', 'BSL-3', 'BSL-4'], correctIndex: 2, rationale: 'Microorganismos transmisibles por vía aérea causantes de patología letal exigen contención BSL-3 con presión negativa.' },
          { id: 'c3m1q4', question: 'Físicamente, ¿qué distingue a los núcleos de microgotas (aerosoles de Wells) de las gotas respiratorias comunes?', options: ['Miden >100 µm y caen a los 30 cm', 'Miden ≤5 µm, flotan prolongadamente en corrientes de aire y alcanzan los alvéolos', 'Se destruyen con la luz', 'Viajan solo 1 metro'], correctIndex: 1, rationale: 'Su escasa masa (≤5 µm) permite suspensión aérea prolongada y penetración alveolar profunda.' }
        ]
=======
        title: 'Principios de Bioseguridad y Los 5 Momentos para la Higiene de Manos (OMS)',
        part1Title: 'Parte 1: Los 3 Pilares de Bioseguridad (Universalidad, Barreras y Eliminación)',
        part2Title: 'Parte 2: Técnica y Tiempos de Higiene de Manos Clínica (OMS)',
        duration: '6 Horas Lectivas',
        summary: 'Aplicación del principio de Universalidad, uso racional de barreras protectoras y técnica estandarizada de higiene de manos para prevenir IAAS.',
        content: [
          '1. Los Tres Pilares de la Bioseguridad: 1) Universalidad: Todo paciente y sus fluidos corporales deben ser considerados potencialmente infectantes; 2) Uso de Barreras: Evitar la exposición directa a sangre y fluidos orgánicos mediante EPP; 3) Medios de Eliminación de Material Contaminado: Procedimientos garantizados para descartar insumos tras su uso.',
          '2. Los 5 Momentos de la Higiene de Manos (OMS): 1) Antes de tocar al paciente; 2) Antes de realizar una tarea limpia o aséptica; 3) Después del riesgo de exposición a líquidos corporales; 4) Después de tocar al paciente; 5) Después del contacto con el entorno del paciente.',
          '3. Fricción Alcohólica vs. Lavado con Agua y Jabón: La fricción con alcohol gel al 70% dura de 20 a 30 segundos cuando las manos están visiblemente limpias. El lavado con agua y jabón antiséptico (Clorhexidina 2%) dura de 40 a 60 segundos y es obligatorio cuando hay suciedad visible, sangre o exposición a esporas (Clostridioides difficile).'
        ],
        tableData: {
          title: 'Comparación Técnica de Higiene de Manos en el Entorno Hospitalario',
          headers: ['Procedimiento', 'Insumo Utilizado', 'Duración Estandarizada', 'Indicación Clínica Obligatoria'],
          rows: [
            ['Fricción Antiséptica', 'Alcohol Gel o Solución Alcohólica al 70%', '20 a 30 segundos (8 pasos)', 'De elección en la práctica clínica cuando las manos están visiblemente limpias.'],
            ['Lavado Clínico', 'Agua corriente + Jabón con Clorhexidina 2%', '40 a 60 segundos (11 pasos)', 'Manos visiblemente sucias, manchadas con sangre/fluidos o esporas (C. difficile).'],
            ['Lavado Quirúrgico', 'Clorhexidina al 4% hasta los codos', '3 a 5 minutos', 'Antes de toda intervención quirúrgica o colocación de Catéter Venoso Central.']
          ]
        },
        keyPoints: [
          'Fricción con alcohol gel (70%): 20 a 30 segundos.',
          'Lavado clínico con agua y jabón antiséptico: 40 a 60 segundos.',
          '2 Momentos ANTES y 3 Momentos DESPUÉS en la regla de los 5 Momentos de la OMS.',
          'El uso de guantes NUNCA reemplaza la higiene de manos.'
        ],
        clinicalPearl: 'Ante pacientes con diarrea por Clostridioides difficile o sospecha de parasitosis, el alcohol en gel NO destruye las esporas bacterianas; en estos casos es obligatorio realizar el lavado mecánico por arrastre con agua y jabón durante 40 a 60 segundos.',
        checkQuestion: {
          question: 'Según la OMS, ¿cuál es la duración estandarizada de la higiene de manos mediante fricción con preparado de base alcohólica (alcohol gel)?',
          options: ['5 a 10 segundos', '20 a 30 segundos', '40 a 60 segundos', '3 a 5 minutos'],
          correctIndex: 1,
          explanation: 'La fricción con alcohol gel requiere de 20 a 30 segundos; el lavado con agua y jabón requiere de 40 a 60 segundos.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm2',
        number: 2,
<<<<<<< Updated upstream
        title: 'Precauciones Estándar, 5 Momentos de Higiene de Manos, EPP y Aislamientos',
        part1Title: 'Parte 1: Los 5 Momentos OMS, Fricción Alcohólica vs. Lavado Clínico y EPP',
        part2Title: 'Parte 2: Protocolos de Aislamiento (Contacto, Gotas, Aéreo) y Secuencia de EPP',
        duration: '8 Horas Lectivas',
        summary: 'Dominio de los 5 Momentos de la OMS, indicación de agua y jabón ante esporas (C. difficile), secuencia crítica de colocación/retiro de EPP y aislamientos.',
        content: [
          '1. Los 5 Momentos de Higiene de Manos (OMS): Momento 1: Antes de tocar al paciente; Momento 2: Antes de realizar una tarea limpia/aséptica (1 y 2 protegen al paciente); Momento 3: Después del riesgo de exposición a fluidos corporales; Momento 4: Después de tocar al paciente; Momento 5: Después del contacto con el entorno del paciente (3, 4 y 5 protegen al trabajador y entorno). Fricción con alcohol (60-80%): 20 a 30 segundos. Lavado con agua y jabón antiséptico (40 a 60 segundos): obligatorio si hay suciedad visible o ante patógenos formadores de esporas como Clostridioides difficile.',
          '2. Sistemas de Aislamiento Hospitalario: 1) CONTACTO (BLEE, KPC, MRSA, C. difficile, Rotavirus): Guantes y mandilón al entrar; 2) GOTAS (>5 µm: Influenza, Meningococo, Tos ferina): Mascarilla quirúrgica tricapa a menos de 1 metro; 3) VÍA AÉREA (≤5 µm: Tuberculosis pulmonar bacilífera, Sarampión, Varicela): Respirador N95/FFP2 (retención ≥95% de partículas de 0.3 µm) colocado antes de entrar y habitación con presión negativa (≥12 ACH).',
          '3. Secuencia de Colocación vs. Retiro de EPP: Colocación: 1° Higiene de manos → 2° Mandilón → 3° Mascarilla o N95 → 4° Gafas/Pantalla → 5° Guantes sobre el puño. Retiro (control de autocontaminación): 1° Guantes y Mandilón en un solo paso envolvente → 2° Higiene de manos → 3° Gafas por arneses posteriores → 4° Respirador N95 por las ligas (sin tocar el frente) → 5° Higiene de manos final.'
        ],
        tableData: {
          title: 'Matriz Comparativa de Sistemas de Aislamiento Hospitalario (CDC / MINSA)',
          headers: ['Categoría de Aislamiento', 'Indicaciones Diagnósticas Clave', 'EPP Obligatorio', 'Infraestructura Exigida'],
          rows: [
            ['CONTACTO', 'Bacterias multirresistentes (BLEE, KPC, MRSA), C. difficile, Rotavirus', 'Guantes limpios + Mandilón manga larga', 'Habitación individual/cohorte y tensiómetro exclusivo.'],
            ['GOTAS (>5 µm)', 'Neisseria meningitidis, Influenza grave, Tos ferina, Rubéola', 'Mascarilla quirúrgica a <1 metro + Gafas', 'Separación ≥1 metro entre camas.'],
            ['VÍA AÉREA (≤5 µm)', 'Tuberculosis pulmonar activa, Sarampión, Varicela diseminada', 'Respirador N95 / FFP2 (ajuste verificado)', 'Presión negativa continua, ≥12 ACH y filtro HEPA.']
          ]
        },
        keyPoints: [
          'Fricción con alcohol gel: 20 a 30 seg | Lavado clínico con agua y jabón: 40 a 60 seg (obligatorio en diarrea por C. difficile).',
          'Secuencia de Retiro de EPP: 1° Guantes y Bata → 2° Higiene de manos → 3° Gafas → 4° N95 → 5° Higiene de manos.',
          'El respirador N95 certifica una retención mínima del 95% de partículas de 0.3 µm y exige prueba de presión positiva y negativa.'
        ],
        clinicalPearl: 'Por qué el Alcohol en Gel Falla ante Clostridioides difficile: El alcohol al 70% desnaturaliza proteínas de bacterias vegetativas, pero es incapaz de atravesar la coraza queratinizada de las endosporas de C. difficile; solo la fricción con agua y jabón las arrastra mecánicamente.',
        checkQuestion: {
          question: '¿Cuál es el orden cronológico normado para el RETIRO del Equipo de Protección Personal (EPP) a fin de evitar la autocontaminación del operador?',
          options: [
            'Quitarse primero el respirador N95 con los guantes sucios puestos',
            '1° Guantes y Bata (envolvente) → 2° Higiene de manos → 3° Gafas/Pantalla → 4° Respirador N95 (por las ligas) → 5° Higiene de manos final',
            'Gafas → Guantes → Bata → N95 sin lavarse las manos',
            'Bata → N95 → Guantes'
          ],
          correctIndex: 1,
          explanation: 'Los guantes y la bata concentran la mayor biocarga; al retirarlos primero e higienizar las manos se protege el rostro al retirar gafas y N95.'
        },
        moduleQuiz: [
          { id: 'c3m2q1', question: '¿En qué escenario clínico está formalmente contraindicado el uso exclusivo de alcohol en gel para higiene de manos?', options: ['Antes de canalizar una vía', 'Tras atender a un paciente con diarrea confirmada por Clostridioides difficile', 'Luego de tomar el pulso', 'Antes de colocarse guantes'], correctIndex: 1, rationale: 'El alcohol no inactiva las endosporas bacterianas de C. difficile; se exige lavado con agua y jabón.' },
          { id: 'c3m2q2', question: '¿Qué porcentaje mínimo de retención de partículas de 0.3 µm certifica la norma NIOSH para un respirador N95?', options: ['80%', '90%', '95%', '99.9%'], correctIndex: 2, rationale: 'La sigla N95 indica que filtra al menos el 95% de partículas de prueba de 0.3 µm no oleosas.' },
          { id: 'c3m2q3', question: 'Al ingresar a menos de 1 metro de un paciente con sospecha de Meningitis Meningocócica, ¿qué protección respiratoria corresponde?', options: ['Traje espacial', 'Mascarilla quirúrgica de 3 pliegues (aislamiento por gotas)', 'Ninguna', 'Casco'], correctIndex: 1, rationale: 'Neisseria meningitidis se transmite por gotas gruesas (>5 µm), requiriendo mascarilla quirúrgica a corta distancia.' },
          { id: 'c3m2q4', question: 'Dentro de los "5 Momentos de la Higiene de Manos" de la OMS, ¿cuál corresponde al Momento 3?', options: ['Antes de tocar al paciente', 'Después del riesgo de exposición a líquidos o fluidos corporales', 'Al llegar al hospital', 'Antes de comer'], correctIndex: 1, rationale: 'El Momento 3 se ejecuta inmediatamente tras el riesgo de contacto con fluidos corporales.' }
        ]
=======
        title: 'Clasificación y Segregación de Residuos Sólidos Hospitalarios (NTS N° 144-MINSA)',
        part1Title: 'Parte 1: Clases A, B y C de Residuos Sólidos en Establecimientos de Salud',
        part2Title: 'Parte 2: Manejo de Contenedores Rígidos para Punzocortantes',
        duration: '8 Horas Lectivas',
        summary: 'Segregación en la fuente según el código de colores normado en el Perú (Rojo, Amarillo y Negro) y límite de llenado de cajas rígidas.',
        content: [
          '1. Clase A — Residuos Biocontaminados (Bolsa Roja): Residuos con agentes infecciosos o fluidos corporales: gasas con sangre, sondas, guantes contaminados, cultivos, bolsas de transfusión y piezas anatomopatológicas.',
          '2. Clase B — Residuos Especiales (Bolsa Amarilla): Residuos con características físicas y químicas de peligrosidad: frascos de medicamentos vencidos o parcialmente usados, reactivos químicos, citostáticos y termómetros rotos.',
          '3. Clase C — Residuos Comunes (Bolsa Negra): Papeles de oficina, cartones, envolturas limpias de jeringas (antes de usar el insumo con el paciente) y restos de preparación de alimentos.',
          '4. Residuos Punzocortantes (Tipo A.5): Agujas hipodérmicas, lancetas, hojas de bisturí, ampollas abiertas y catéteres con mandril se descartan inmediatamente en contenedor rígido resistente a punciones hasta las 3/4 partes (75%) de su capacidad.'
        ],
        tableData: {
          title: 'Clasificación Normativa de Residuos Sólidos (NTS N° 144-MINSA/2018/DIGESA)',
          headers: ['Clase de Residuo', 'Color de Bolsa / Recipiente', 'Ejemplos en Servicios de Enfermería'],
          rows: [
            ['Clase A: Biocontaminados', 'Bolsa ROJA', 'Gasas y algodones con sangre, guantes usados, sondas Foley/SNG, equipos de venoclisis con sangre.'],
            ['Clase A.5: Punzocortantes', 'Caja Rígida Rotulada (Límite 3/4 / 75%)', 'Agujas hipodérmicas sin reencapsular, bisturíes, lancetas, branulas/mandriles, ampollas de vidrio.'],
            ['Clase B: Especiales', 'Bolsa AMARILLA', 'Viales de medicamentos vencidos, residuos químicos, citostáticos, pilas y aerosoles.'],
            ['Clase C: Comunes', 'Bolsa NEGRA', 'Papel toalla del secado de manos limpias, envolturas externas de jeringas, cartones y papeles administrativos.']
          ]
        },
        keyPoints: [
          'Bolsa Roja = Biocontaminados (Clase A) | Bolsa Amarilla = Especiales (Clase B) | Bolsa Negra = Comunes (Clase C).',
          'Las cajas de punzocortantes se sellan y retiran al llegar al 75% (3/4 partes) de su capacidad.',
          'Prohibición absoluta de reencapsular (volver a tapar con ambas manos) agujas utilizadas.'
        ],
        clinicalPearl: 'La envoltura limpia de papel/plástico de una jeringa recién abierta (que no tocó al paciente ni fluidos) se segrega en Bolsa Negra (Residuo Común Clase C). Segregar papel limpio en bolsa roja encarece innecesariamente el tratamiento hospitalario.',
        checkQuestion: {
          question: 'De acuerdo con la NTS N° 144-MINSA, ¿hasta qué nivel máximo debe llenarse el recipiente rígido de residuos punzocortantes antes de su cierre definitivo?',
          options: ['Hasta el 50% de su capacidad', 'Hasta las 3/4 partes (75%) de su capacidad', 'Hasta el 90% de su capacidad', 'Hasta el 100% al borde'],
          correctIndex: 1,
          explanation: 'Los recipientes rígidos para punzocortantes solo deben llenarse hasta las 3/4 partes (75%) para evitar accidentes por sobresaliente de agujas.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm3',
        number: 3,
<<<<<<< Updated upstream
        title: 'Clasificación de Spaulding, Esterilización, Dilución de Cloro y Accidentes Ocupacionales (PEP)',
        part1Title: 'Parte 1: Clasificación de Spaulding, Indicadores Biológicos y Fórmula de Lejía',
        part2Title: 'Parte 2: Accidentes Punzocortantes y Profilaxis Post-Exposición (PEP VIH/VHB)',
        duration: '6 Horas Lectivas',
        summary: 'Descontaminación según Spaulding (Crítico, Semicrítico, No Crítico), cálculo de hipoclorito en ppm y protocolo inmediato ante pinchazos.',
        content: [
          '1. Clasificación de Earle Spaulding (1968): 1) Artículos CRÍTICOS (penetran tejido estéril o sistema vascular: instrumental quirúrgico, catéteres, agujas) → Exigen ESTERILIZACIÓN; 2) Artículos SEMICRÍTICOS (contacto con mucosas o piel no intacta: endoscopios, broncoscopios, palas de laringoscopio) → Exigen Desinfección de Alto Nivel (DAN con Ortoftalaldehído OPA 0.55% por 5-12 min o Glutaraldehído 2% por 20-45 min); 3) Artículos NO CRÍTICOS (piel intacta: estetoscopios, tensiómetros) → Desinfección de nivel bajo/intermedio. Todo material requiere lavado previo con detergente enzimático.',
          '2. Indicadores Biológicos y Fórmula de Hipoclorito de Sodio: Los autoclaves de vapor se validan con esporas de Geobacillus stearothermophilus (y el calor seco/ETO con Bacillus atrophaeus). Fórmula de dilución de lejía: Volumen de lejía (ml) = [Concentración deseada (ppm) × Volumen final (L)] / [% Lejía comercial × 10]. Ej: Para preparar 5 L a 1,000 ppm con lejía al 5%: (1000 × 5) / (5 × 10) = 100 ml de lejía.',
          '3. Manejo Inmediato de Pinchazo y PEP Ocupacional: Ante punción accidental: lavar inmediatamente con abundante agua y jabón; PROHIBIDO EXPRIMIR O MACERAR LA HERIDA (causa microtraumas que succionan el virus). Notificar en <2 h. Iniciar Profilaxis Post-Exposición (PEP) para VIH idealmente en las primeras 2 a 4 horas (límite máximo: 72 horas) por 28 días (Tenofovir + Emtricitabina + Dolutegravir). Si el trabajador tiene títulos anti-HBs ≥ 10 mUI/ml, ya es inmune a Hepatitis B.'
        ],
        tableData: {
          title: 'Clasificación de Spaulding y Protocolo de Profilaxis Post-Exposición (PEP)',
          headers: ['Categoría / Evento', 'Dispositivos / Escenario', 'Nivel / Ventana Crítica', 'Estándar Técnico Obligatorio'],
          rows: [
            ['Crítico (Spaulding)', 'Instrumental quirúrgico, catéteres, agujas', 'ESTERILIZACIÓN', 'Autoclave vapor (validado con G. stearothermophilus).'],
            ['Semicrítico (Spaulding)', 'Endoscopios, broncoscopios, laringoscopio', 'DAN (Alto Nivel)', 'OPA 0.55% (5-12 min) o Glutaraldehído 2% + agua estéril.'],
            ['PEP frente a VIH', 'Pinchazo con fuente VIH (+) o desconocida', 'Ideal 2-4 h (Máx. 72 h)', 'Lavado con agua y jabón (sin exprimir) + 3 ARV por 28 días.'],
            ['PEP frente a VHB', 'Pinchazo con fuente HBsAg (+)', 'Primeras 24 h (Máx. 7 d)', 'Si no vacunado: HBIG + vacuna. Si anti-HBs ≥10 mUI/ml: inmune.']
          ]
        },
        keyPoints: [
          'Fórmula de lejía (ml) = [ppm deseados × Litros finales] / (% Lejía × 10).',
          'Indicador biológico de autoclave de vapor: Geobacillus stearothermophilus.',
          'Ante pinchazo: prohibido exprimir la herida; lavar con agua y jabón e iniciar PEP para VIH en las primeras 2-4 h (máx. 72 h).',
          'Limpieza hospitalaria: principio de direccionalidad (de arriba hacia abajo y de lo más limpio a lo más contaminado).'
        ],
        clinicalPearl: 'Incompatibilidad de la Celulosa en Autoclaves de Plasma de Peróxido de Hidrógeno: Jamás introduzcas gasas de algodón, papel ni lino en un esterilizador de plasma de peróxido de hidrógeno (Sterrad), porque la celulosa absorbe el peróxido y aborta el ciclo.',
        checkQuestion: {
          question: '¿Cuántos mililitros de lejía comercial al 5% se necesitan para preparar 2 Litros de solución desinfectante a 1,000 ppm (0.1%) y cuál es el límite máximo para iniciar la PEP contra el VIH tras un pinchazo?',
          options: [
            '10 ml de lejía — PEP hasta los 15 días',
            '40 ml de lejía — PEP ideal en las primeras 2 a 4 horas (límite máximo estricto de 72 horas)',
            '200 ml de lejía — PEP al mes',
            '5 ml de lejía — No existe PEP'
          ],
          correctIndex: 1,
          explanation: 'Cálculo: (1000 ppm × 2 L) / (5 × 10) = 2000 / 50 = 40 ml de lejía al 5%. La PEP contra VIH es ideal en 2-4 h con tope máximo de 72 horas.'
        },
        moduleQuiz: [
          { id: 'c3m3q1', question: 'Según Spaulding, ¿qué categoría corresponde a una pala de laringoscopio en contacto con la mucosa faríngea y qué nivel exige?', options: ['Crítico - Esterilización exclusiva', 'Semicrítico - Desinfección de Alto Nivel (DAN) o esterilización', 'No crítico - Solo agua', 'Inerte'], correctIndex: 1, rationale: 'El contacto con mucosas intactas califica al dispositivo como semicrítico, exigiendo al menos DAN.' },
          { id: 'c3m3q2', question: '¿Cuál es el microorganismo patrón utilizado en indicadores biológicos para validar autoclaves de vapor saturado?', options: ['Bacillus atrophaeus', 'Geobacillus stearothermophilus', 'E. coli', 'Candida albicans'], correctIndex: 1, rationale: 'Las endosporas de Geobacillus stearothermophilus validan la muerte microbiana por calor húmedo a 121°C/134°C.' },
          { id: 'c3m3q3', question: '¿Qué maniobra está formalmente prohibida inmediatamente después de sufrir una punción accidental con aguja en quirófano?', options: ['Lavar con agua y jabón', 'Exprimir o macerar agresivamente el tejido circundante para forzar el sangrado', 'Retirar el guante', 'Notificar a epidemiología'], correctIndex: 1, rationale: 'Exprimir la herida provoca microtraumatismos capilares que favorecen la entrada viral a la circulación.' },
          { id: 'c3m3q4', question: 'Un profesional accidentado con sangre HBsAg (+) tiene anticuerpos anti-HBs documentados en 150 mUI/ml. ¿Qué conducta procede?', options: ['Aplicar 2 dosis de HBIG', 'No requiere tratamiento profiláctico adicional porque cuenta con títulos protectores (≥10 mUI/ml)', 'Reiniciar 3 vacunas', 'Suspender labores'], correctIndex: 1, rationale: 'Títulos anti-HBs ≥ 10 mUI/ml certifican inmunidad protectora completa contra el virus de la Hepatitis B.' }
        ]
=======
        title: 'Aislamientos Hospitalarios según Mecanismo de Transmisión y Uso de EPP',
        part1Title: 'Parte 1: Precauciones por Contacto, Gotas y Vía Aérea (Aerosoles)',
        part2Title: 'Parte 2: Secuencia Segura de Colocación y Retiro de EPP',
        duration: '6 Horas Lectivas',
        summary: 'Selección de barreras según el tamaño de partículas infecciosas (<5 micras vs >5 micras) y orden correcto de retiro del EPP.',
        content: [
          '1. Precaución por Vía Aérea / Aerosoles (Núcleos de gotitas < 5 micras): Quedan suspendidos en el aire (Tuberculosis pulmonar activa, Sarampión, Varicela, Herpes zóster diseminado). Exige habitación con presión negativa y uso obligatorio de Respirador N95 / FFP2.',
          '2. Precaución por Gotas (Partículas > 5 micras): Viajan hasta 1 metro al toser o hablar (Influenza, Meningococo, Tos ferina, Adenovirus). Exige Mascarilla Quirúrgica a menos de 1 metro.',
          '3. Precaución por Contacto: Para bacterias multirresistentes (MRSA, KPC, Acinetobacter), C. difficile y Escabiosis. Exige mandilón y guantes al ingresar.',
          '4. Retiro Seguro del EPP (Momento de Mayor Contaminación): Se retira primero lo más contaminado (1° Guantes, 2° Mandilón/Bata, higiene de manos, 3° Protector ocular, y al final 4° Mascarilla o Respirador N95 fuera de la habitación).'
        ],
        keyPoints: [
          'Aislamiento Aéreo (<5 micras): TBC pulmonar, Sarampión y Varicela → Respirador N95.',
          'Aislamiento por Gotas (>5 micras): Influenza y Meningitis meningocócica → Mascarilla quirúrgica.',
          'En el retiro de EPP: los guantes son lo primero que se retira y el respirador N95 es lo último.'
        ],
        clinicalPearl: 'El momento de mayor riesgo de autocontaminación del personal de salud no es durante la atención al paciente, sino durante el RETIRO del Equipo de Protección Personal (EPP). Realice higiene de manos entre pasos.',
        checkQuestion: {
          question: 'Ante un paciente con diagnóstico de Tuberculosis Pulmonar bacilífera (BK ++), ¿qué tipo de precaución y protección respiratoria corresponde?',
          options: [
            'Precaución por gotas y mascarilla simple',
            'Precaución por vía aérea (aerosoles < 5 micras) y respirador N95 / FFP2',
            'Solo precaución de contacto con guantes',
            'Doble mascarilla de tela'
          ],
          correctIndex: 1,
          explanation: 'Mycobacterium tuberculosis se transmite por núcleos de gotitas (<5 micras) suspendidos en el aire, requiriendo respirador N95/FFP2.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm4',
        number: 4,
<<<<<<< Updated upstream
        title: 'Clasificación y Caracterización de Residuos Hospitalarios (NTS N° 144-MINSA y D.L. 1278)',
        part1Title: 'Parte 1: Clase A (Residuos Biocontaminados: Subtipos A.1 al A.6 - Bolsa Roja)',
        part2Title: 'Parte 2: Clase B (Residuos Especiales: B.1, B.2, B.3 - Bolsa Amarilla) y Clase C (Bolsa Negra)',
        duration: '8 Horas Lectivas',
        summary: 'Dominio de las 3 clases y subtipos de residuos según la NTS N° 144-MINSA/2018/DIGESA y el principio de Responsabilidad Extendida del Generador.',
        content: [
          '1. Clase A - Residuos Biocontaminados (BOLSA ROJA): Generados en la atención médica con presencia de agentes infecciosos. Se subdividen en 6 tipos: Tipo A.1 (Atención al Paciente: gasas, apósitos, guantes, sondas con secreciones); Tipo A.2 (Material Biológico: cultivos, cepas y viales de vacunas vivas atenuadas vencidas o usadas); Tipo A.3 (Bolsas de sangre y hemoderivados); Tipo A.4 (Quirúrgico y Anatomopatológico: placentas, tejidos, biopsias, partes amputadas); Tipo A.5 (Punzocortantes: agujas, bisturís, ampollas rotas en recipiente rígido al 75%); Tipo A.6 (Animales de experimentación contaminados).',
          '2. Clase B - Residuos Especiales (BOLSA AMARILLA): Peligrosidad fisicoquímica. Se subdividen en: Tipo B.1 (Químicos Peligrosos: xilol, formol, termómetros de mercurio rotos, líquidos fijadores de rayos X con plata e hidroquinona); Tipo B.2 (Productos Farmacéuticos: medicamentos vencidos o deteriorados y fármacos citostáticos oncológicos, que requieren incineración >1,100°C); Tipo B.3 (Residuos Radiactivos: Yodo-131, Tecnecio-99m bajo control IPEN).',
          '3. Clase C - Residuos Comunes (BOLSA NEGRA): Papelería de oficina, cartones limpios, frascos de suero vacíos sin sangre y envolturas limpias. Condición estricta: todo residuo (incluso restos de comida o papel) que salga de una sala de aislamiento infeccioso (ej. TB MDR) se reclasifica obligatoriamente como Clase A (Bolsa Roja).'
        ],
        tableData: {
          title: 'Clasificación Oficial de Residuos Sólidos en EESS (NTS N° 144-MINSA/2018/DIGESA)',
          headers: ['Clase y Código de Color', 'Subtipos Normativos', 'Ejemplos de Insumos en la Práctica Clínica', 'Contención y Tratamiento'],
          rows: [
            ['CLASE A: Biocontaminados (ROJO)', 'A.1 Atención | A.2 Biológico | A.3 Sangre | A.4 Anatomopat. | A.5 Punzocort. | A.6 Animales', 'Gasas con sangre (A.1), vacunas vivas (A.2), placentas (A.4), agujas (A.5).', 'Bolsa Roja (≥50.8 µm) / Caja rígida al 75%. Autoclave o incineración.'],
            ['CLASE B: Especiales (AMARILLO)', 'B.1 Químicos | B.2 Farmacéuticos y Citostáticos | B.3 Radiactivos', 'Mercurio y fijador RX (B.1), medicamentos vencidos y citostáticos (B.2).', 'Bolsa Amarilla / Bidón hermético. Incineración pirolítica >1,100°C.'],
            ['CLASE C: Comunes (NEGRO)', 'Papel, cartón, plástico limpio, cocina general', 'Envolturas limpias de jeringas, frascos de suero sin sangre, hojas de oficina.', 'Bolsa Negra. Reciclaje o Relleno Sanitario municipal.']
          ]
        },
        keyPoints: [
          'Clase A (Bolsa Roja): A.1 Atención al paciente, A.2 Biológico/vacunas vivas, A.3 Sangre, A.4 Placentas/tejidos, A.5 Punzocortantes, A.6 Animales.',
          'Clase B (Bolsa Amarilla): B.1 Químicos/mercurio/fijador RX, B.2 Medicamentos vencidos y citostáticos, B.3 Radiactivos.',
          'Clase C (Bolsa Negra): Residuos comunes sin contacto biológico (salvo que provengan de pacientes en aislamiento, donde van a Bolsa Roja).'
        ],
        clinicalPearl: 'Clasificación de la Placenta y Restos de Comida de Aislamiento: Una placenta humana (aunque provenga de un parto sano) SIEMPRE se segrega en Bolsa Roja como Clase A - Tipo A.4 (Anatomopatológico). Asimismo, los restos de comida de un paciente con Tuberculosis MDR van a Bolsa Roja.',
        checkQuestion: {
          question: 'Según la NTS N° 144-MINSA, ¿a qué clase y subtipo corresponden: 1) Una placenta humana post-parto, 2) Un termómetro de mercurio roto y 3) Un vial de quimioterapia citostática?',
          options: [
            'Todos van a bolsa negra común',
            '1) Clase A Tipo A.4 (Bolsa Roja), 2) Clase B Tipo B.1 Químico (Amarillo) y 3) Clase B Tipo B.2 Farmacéutico/Citostático (Bolsa Amarilla)',
            '1) Bolsa amarilla, 2) Bolsa negra y 3) Lavadero',
            'Todos van a la caja de agujas'
          ],
          correctIndex: 1,
          explanation: 'La placenta es Anatomopatológico A.4 (Rojo), el mercurio es Químico Peligroso B.1 y los citostáticos son Farmacéuticos B.2 (Amarillo).'
        },
        moduleQuiz: [
          { id: 'c3m4q1', question: 'Según la NTS N° 144-MINSA, ¿a qué categoría corresponden los viales usados o vencidos de vacunas a virus vivos atenuados?', options: ['Clase C - Comunes', 'Clase A, Tipo A.2 - Biocontaminados (Material Biológico)', 'Clase B - Químicos', 'Reciclables'], correctIndex: 1, rationale: 'Por contener microorganismos vivos atenuados se clasifican como Material Biológico Clase A, Tipo A.2.' },
          { id: 'c3m4q2', question: '¿En qué color de contenedor y bolsa plástica deben disponerse los fármacos oncológicos citostáticos caducados o sus insumos?', options: ['Rojo', 'Negro', 'Amarillo (Clase B - Tipo B.2)', 'Blanco'], correctIndex: 2, rationale: 'Los medicamentos vencidos y citostáticos son Residuos Especiales Farmacéuticos (Clase B.2 - Bolsa Amarilla).' },
          { id: 'c3m4q3', question: 'Los restos de la bandeja de comida de un paciente aislado por Tuberculosis Farmacorresistente deben descartarse en:', options: ['Bolsa negra común', 'Recipiente para residuos biocontaminados con Bolsa Roja (Clase A)', 'Lavadero', 'Bolsa amarilla'], correctIndex: 1, rationale: 'Todo residuo procedente de una habitación de aislamiento infeccioso se clasifica obligatoriamente como Biocontaminado (Clase A).' }
        ]
=======
        title: 'Antisépticos, Desinfectantes, Clasificación de Spaulding y Esterilización',
        part1Title: 'Parte 1: Clasificación de Spaulding (Artículos Críticos, Semicríticos y No Críticos)',
        part2Title: 'Parte 2: Uso Correcto de Antisépticos vs. Desinfectantes de Superficies',
        duration: '6 Horas Lectivas',
        summary: 'Diferenciación entre antisepsia (tejidos vivos) y desinfección (superficies inanimadas), y niveles de procesamiento según Spaulding.',
        content: [
          '1. Clasificación de Spaulding: Artículos Críticos (ingresan a tejido estéril o sistema vascular: instrumental quirúrgico, catéteres) → exigen ESTERILIZACIÓN; Artículos Semicríticos (contactan mucosas o piel no intacta: laringoscopios, endoscopios) → exigen Desinfección de Alto Nivel (DAN); Artículos No Críticos (contactan piel intacta: tensiómetros, estetoscopios) → Desinfección de Nivel Intermedio/Bajo (alcohol 70%).',
          '2. Antisépticos en Tejidos Vivos: Clorhexidina alcohólica 2% (efecto residual de 48-72 h), Alcohol isopropílico/etílico 70% (acción rápida sin efecto residual) y Povidona Yodada 10%.',
          '3. Manejo de Derrames de Sangre con Hipoclorito de Sodio: Ante un derrame de sangre o fluidos biológicos en el piso, primero se cubre con papel absorbente, se aplica hipoclorito de sodio al 0.5% - 1% (5,000 a 10,000 ppm) dejando actuar 10-15 minutos, se recoge con pinzas/guantes a bolsa roja y luego se trapea.'
        ],
        keyPoints: [
          'Crítico = Esterilización | Semicrítico = Desinfección de Alto Nivel (DAN) | No Crítico = Desinfección intermedia/baja.',
          'Los antisépticos se aplican sobre piel/mucosas; los desinfectantes (hipoclorito, glutaraldehído) solo sobre objetos inanimados.',
          'Nunca mezclar hipoclorito de sodio (lejía) con detergentes ácidos o amoniaco (libera gas cloro tóxico) ni diluirlo con agua caliente.'
        ],
        clinicalPearl: 'El hipoclorito de sodio (lejía) se inactiva frente a abundante materia orgánica y con el agua caliente o la luz solar. Por ello siempre se diluye en agua fría y en envases opacos preparados en las últimas 24 horas.',
        checkQuestion: {
          question: 'Según la clasificación de Spaulding, ¿cómo se cataloga una pinza quirúrgica que penetra tejido estéril y qué proceso requiere?',
          options: [
            'Artículo No Crítico — Limpieza con alcohol 70%',
            'Artículo Crítico — Esterilización completa (vapor/autoclave o plasma)',
            'Artículo Semicrítico — Lavado con jabón común',
            'Artículo Común — Agua hervida'
          ],
          correctIndex: 1,
          explanation: 'Todo instrumental que penetra tejido estéril o el sistema vascular es un Artículo Crítico y requiere esterilización.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm5',
        number: 5,
<<<<<<< Updated upstream
        title: 'Etapas Operativas: Acondicionamiento, Segregación, Almacenamiento y Transporte Interno',
        part1Title: 'Parte 1: Las 8 Etapas Operativas, Segregación en Origen y 3 Niveles de Almacenamiento',
        part2Title: 'Parte 2: Rutas de Transporte Interno, Coches Rodantes y Prohibición de Ductos',
        duration: '6 Horas Lectivas',
        summary: 'Manejo de las 8 etapas de la gestión de residuos, espesor de bolsas (50.8 µm), límite de 3/4 en punzocortantes y tiempos de almacenamiento.',
        content: [
          '1. Las 8 Etapas Operativas y Requisitos de Acondicionamiento: 1) Acondicionamiento, 2) Segregación en origen (el paso más crítico, responsabilidad directa de quien genera el residuo), 3) Almacenamiento Primario, 4) Almacenamiento Intermedio, 5) Transporte Interno, 6) Almacenamiento Central o Final, 7) Tratamiento y 8) Disposición Final. Las bolsas deben tener un espesor mínimo de 50.8 µm (2 milésimas de pulgada / calibre 200) y los contenedores de punzocortantes se sellan al llegar a las 3/4 partes (75%) de su capacidad.',
          '2. Los Tres Niveles de Almacenamiento: 1) Primario (en el punto de atención: se retira cada turno de 8-12 h o al llegar a 3/4 partes); 2) Intermedio (por piso o pabellón: tiempo máximo de permanencia de 12 horas); 3) Final o Central (en el perímetro exterior: máximo 24 a 48 horas; si supera 24 h exige cámara fría a ≤ 4 °C para residuos anatomopatológicos).',
          '3. Sellado de Bolsas y Transporte Interno: Al retirar la bolsa se tuerce el cuello ("cuello de ganso") sin aplastar ni expulsar el aire con las manos (evita inhalar bioaerosoles). El transporte interno se realiza en coches cerrados de paredes lisas en horarios diferenciados (nunca junto con alimentos ni visitas). Queda PROHIBIDO arrojar residuos por ductos o tolvas verticales de caída libre.'
        ],
        tableData: {
          title: 'Requisitos Técnicos de los Tres Niveles de Almacenamiento Hospitalario',
          headers: ['Nivel de Almacenamiento', 'Ubicación Física', 'Tiempo Máximo de Retención', 'Condiciones Normativas Exigidas'],
          rows: [
            ['1. Almacenamiento Primario', 'Punto de generación (tópico, cama, UCI)', '1 turno asistencial (8-12 h) o al 75%', 'Tacho con tapa a pedal, bolsa de 50.8 µm y caja rígida al 75%.'],
            ['2. Almacenamiento Intermedio', 'Cuarto de acopio por piso o servicio', 'Máximo 12 horas continuas', 'Piso/pared lavable, zócalo sanitario media caña y punto de agua.'],
            ['3. Almacenamiento Central / Final', 'Perímetro exterior con acceso a camión', 'Máximo 24 a 48 horas', 'Boxes separados Clase A, B y C, balanza y cámara fría ≤ 4 °C.']
          ]
        },
        keyPoints: [
          'Límite máximo de llenado de contenedores rígidos punzocortantes y bolsas: 3/4 partes (75% de su capacidad).',
          'Espesor mínimo de bolsas para residuos biocontaminados (NTS 144): 50.8 micras (µm) o calibre 200.',
          'Tiempo máximo en Almacenamiento Intermedio: 12 horas | En Almacenamiento Central: 24 a 48 horas (con cámara fría ≤ 4 °C).',
          'Prohibido comprimir las bolsas con las manos/pies y prohibido usar ductos verticales de gravedad.'
        ],
        clinicalPearl: 'Por qué Jamás Debes Desinflar una Bolsa Roja con las Manos: Al presionar una bolsa biocontaminada para sacarle el aire antes de anudarla, creas un efecto fuelle que dispara un chorro invisible de bioaerosoles (virus y bacterias) directamente hacia tu rostro.',
        checkQuestion: {
          question: 'Según la NTS N° 144-MINSA, ¿cuál es el espesor mínimo de las bolsas rojas, el límite de llenado de la caja de punzocortantes y el tiempo máximo de permanencia en el Almacenamiento Intermedio?',
          options: [
            '10 µm — 100% de llenado — 7 días en el piso',
            'Espesor mínimo de 50.8 µm (calibre 200) — Límite de 3/4 partes (75%) — Máximo 12 horas en el Almacenamiento Intermedio',
            '20 µm — 50% de llenado — 48 horas en el pasillo',
            'Sin espesor normado — Se llenan hasta desbordar'
          ],
          correctIndex: 1,
          explanation: 'La norma exige bolsas ≥ 50.8 µm, llenado máximo al 75% (3/4 partes) y retiro del almacenamiento intermedio en un máximo de 12 horas.'
        },
        moduleQuiz: [
          { id: 'c3m5q1', question: '¿Cuál es el nivel máximo de llenado normado para un contenedor rígido de punzocortantes antes de su sellado definitivo?', options: ['50%', '3/4 partes (75%) de su capacidad útil', '95%', '100% al tope'], correctIndex: 1, rationale: 'El límite de las 3/4 partes (75%) impide que las agujas sobresalgan por la boca de entrada.' },
          { id: 'c3m5q2', question: '¿Qué espesor mínimo deben tener las bolsas de polietileno para residuos biocontaminados según la NTS N° 144-MINSA?', options: ['10 µm', '20 µm', '50.8 µm (2 milésimas de pulgada o calibre 200)', '150 µm'], correctIndex: 2, rationale: 'El espesor ≥ 50.8 µm garantiza resistencia a la tracción y evita roturas o derrames.' },
          { id: 'c3m5q3', question: '¿Cuál es el tiempo de permanencia máximo autorizado para los residuos dentro del Almacenamiento Intermedio hospitalario?', options: ['2 horas', '12 horas', '48 horas', '5 días'], correctIndex: 1, rationale: 'En el almacenamiento intermedio los residuos no deben permanecer más de 12 horas.' },
          { id: 'c3m5q4', question: 'Si la recolección externa en un hospital se realiza cada 48 horas, ¿qué infraestructura es obligatoria en el Almacenamiento Final?', options: ['Aspersores de perfume', 'Cámara fría de refrigeración con temperatura ≤ 4 °C para residuos anatomopatológicos', 'Un ventilador', 'Un microondas'], correctIndex: 1, rationale: 'Superadas las 24 horas, los residuos patológicos requieren refrigeración a ≤ 4 °C para frenar la descomposición.' }
        ]
=======
        title: 'Protocolo ante Accidente Punzocortante y Profilaxis Post-Exposición (PPE)',
        part1Title: 'Parte 1: Tasas de Seroconversión (VHB, VHC, VIH) y Primeros Auxilios',
        part2Title: 'Parte 2: Ventana de Profilaxis Antirretroviral y Seguimiento Serológico',
        duration: '8 Horas Lectivas',
        summary: 'Actuación inmediata en los primeros minutos tras un pinchazo accidental con aguja contaminada y ventana de oro para PPE.',
        content: [
          '1. Riesgo de Transmisión por Punción Percutánea: El Virus de la Hepatitis B (VHB) posee el mayor riesgo (6% a 30% en personal no vacunado), seguido del Virus de la Hepatitis C (VHC: ~1.8%) y el VIH (~0.3% en punción percutánea y 0.09% en exposición mucosa).',
          '2. Actuación Inmediata Local: Lavar de inmediato la herida con abundante agua corriente y jabón durante 2 a 3 minutos. NO exprimir, NO frotar con escobilla y NO aplicar lejía ni agentes cáusticos directos en la herida abierta (aumentan la inflamación y facilitan el ingreso viral).',
          '3. Notificación y Profilaxis Post-Exposición (PPE): Reportar de inmediato al jefe de guardia y epidemiología, tomar serologías basales (al trabajador y a la fuente) e iniciar Profilaxis Post-Exposición (PPE) antirretroviral idealmente en las primeras 2 horas y como máximo dentro de las 72 horas.'
        ],
        keyPoints: [
          'Riesgo de transmisión por pinchazo: VHB (hasta 30%) > VHC (1.8%) > VIH (0.3%).',
          'Ante pinchazo: lavar con agua y jabón (prohibido exprimir la herida o echar hipoclorito puro).',
          'Ventana máxima para iniciar PPE antirretroviral contra VIH: dentro de las 72 horas (ideal en las primeras 2 horas).'
        ],
        clinicalPearl: 'Todo profesional y estudiante de enfermería debe contar con sus 3 dosis de vacuna contra Hepatitis B y un dosaje de anticuerpos Anti-HBs ≥ 10 mUI/ml, que confiere protección inmunológica contra el virus más contagioso por pinchazo.',
        checkQuestion: {
          question: 'Si sufre un accidente punzocortante con una aguja utilizada en un paciente con VIH, ¿dentro de qué plazo máximo debe iniciarse la Profilaxis Post-Exposición (PPE)?',
          options: [
            'A los 7 días del accidente',
            'Idealmente en las primeras 2 horas y como máximo dentro de las 72 horas',
            'Solo si el trabajador presenta fiebre al mes',
            'Después de los 14 días'
          ],
          correctIndex: 1,
          explanation: 'La PPE antirretroviral tiene máxima eficacia iniciada en las primeras 2 horas y pierde efectividad pasadas las 72 horas.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm6',
        number: 6,
<<<<<<< Updated upstream
        title: 'Tratamiento, Manifiesto de Residuos, Relleno de Seguridad y Derrames ( Sangre y Mercurio)',
        part1Title: 'Parte 1: Autoclavado vs. Incineración Pirolítica, Manifiesto EO-RS y Relleno de Seguridad',
        part2Title: 'Parte 2: Protocolos de Contingencia ante Derrames de Sangre (10,000 ppm) y Mercurio',
        duration: '6 Horas Lectivas',
        summary: 'Tecnologías de tratamiento (autoclave vs. incineración >1,100°C), trazabilidad por 5 años y actuación ante derrames biológicos y de mercurio.',
        content: [
          '1. Tratamiento y Disposición Final: El Autoclavado con trituración (134 °C, 2.5 bar por 30-45 min) esteriliza residuos biocontaminados A.1 y A.2, pero está PROHIBIDO para citostáticos o químicos (los volatiliza). La Incineración Pirolítica de Doble Cámara (850 °C y >1,100 °C) es obligatoria para piezas anatomopatológicas (A.4) y fármacos citostáticos (B.2). Los residuos peligrosos tratados se confinan en un Relleno de Seguridad con doble geomembrana HDPE (mientras que los comunes Clase C van a Relleno Sanitario). El Manifiesto de Manejo de Residuos Peligrosos es firmado por el Generador, la EO-RS y el Relleno de Seguridad (archivo obligatorio por 5 años).',
          '2. Protocolo ante Derrame de Sangre o Fluidos Biológicos: 1) Delimitar el área; 2) Colocarse EPP completo; 3) Cubrir el charco con papel absorbente de la periferia hacia el centro; 4) Verter solución de Hipoclorito de Sodio a 10,000 ppm (1%) sobre el papel absorbente y dejar actuar de 15 a 20 minutos; 5) Recoger con pala/espátula a Bolsa Roja y lavar con agua y detergente.',
          '3. Protocolo ante Derrame de Mercurio Metálico: PROHIBIDO usar aspiradora o escoba (pulveriza y evapora el mercurio causando intoxicación inhalatoria). Ventilar el área, apagar aire acondicionado, usar guantes de nitrilo, recolectar las perlas con jeringa sin aguja o cartulina rígida, depositar en frasco plástico con agua o flor de azufre (forma sulfuro de mercurio no volátil) y rotular como Clase B.1.'
        ],
        tableData: {
          title: 'Protocolos de Tratamiento Final y Manejo de Derrames Críticos',
          headers: ['Escenario / Proceso', 'Tecnología o Agente Químico', 'Parámetro Crítico de Seguridad', 'Prohibición Estricta'],
          rows: [
            ['Residuos A.4 (Tejidos) y B.2 (Citostáticos)', 'Incineración de Doble Cámara', 'Temperatura > 1,000 °C a 1,100 °C', 'Prohibido meter citostáticos al autoclave de vapor.'],
            ['Derrame de Sangre o Fluidos', 'Hipoclorito de Sodio a 10,000 ppm (1%)', 'Tiempo de contacto: 15 a 20 minutos sobre papel', 'No limpiar de inmediato sin antes inactivar 15-20 min.'],
            ['Rotura de Termómetro de Mercurio', 'Jeringa sin aguja + Flor de Azufre / Agua', 'Segregar en envase hermético como Clase B.1', 'PROHIBIDO usar aspiradora o barrer con escoba.'],
            ['Transporte Externo EO-RS', 'Manifiesto de Residuos Peligrosos', 'Firmado por 3 actores (archivar por 5 años)', 'Camión cerrado con rombo ONU Clase 6 División 6.2.']
          ]
        },
        keyPoints: [
          'Derrame de sangre: cubrir con papel absorbente y aplicar Hipoclorito de Sodio a 10,000 ppm (1%) durante 15 a 20 minutos.',
          'Derrame de mercurio: prohibido usar aspiradora o escoba; recoger con cartulina/jeringa, neutralizar con flor de azufre y rotular B.1.',
          'Los citostáticos (B.2) y restos anatomopatológicos (A.4) exigen incineración a > 1,100 °C.',
          'El Manifiesto de Manejo de Residuos Peligrosos acredita la custodia legal ante DIGESA/MINAM y se conserva 5 años.'
        ],
        clinicalPearl: 'Diferencia entre 1,000 ppm y 10,000 ppm de Cloro: Para desinfectar pisos y superficies limpias se usa hipoclorito a 1,000 ppm (0.1%); pero ante un derrame masivo de sangre o pus (alta carga orgánica que inactiva el cloro) se exige una concentración 10 veces mayor: 10,000 ppm (1%) por 15 a 20 minutos.',
        checkQuestion: {
          question: 'Ante un derrame de sangre en el piso del tópico, ¿a qué concentración y por cuánto tiempo debe aplicarse el Hipoclorito de Sodio sobre el papel absorbente? Y ante la rotura de un termómetro de mercurio, ¿qué está prohibido hacer?',
          options: [
            '100 ppm por 1 minuto — Recoger el mercurio con aspiradora',
            'Hipoclorito a 10,000 ppm (1%) dejándolo actuar de 15 a 20 minutos — En derrame de mercurio está prohibido usar aspiradora o escoba (se recoge con jeringa/cartulina y flor de azufre)',
            'Solo agua corriente — Barrer el mercurio al desagüe',
            'Alcohol en gel — Calentar el mercurio'
          ],
          correctIndex: 1,
          explanation: 'La sangre exige cloro al 1% (10,000 ppm) por 15-20 min; y el mercurio jamás debe aspirarse ni barrerse para no volatilizar vapores neurotóxicos.'
        },
        moduleQuiz: [
          { id: 'c3m6q1', question: '¿Cuál es el tratamiento técnico obligatorio para piezas anatómicas resecadas (A.4) y fármacos citostáticos (B.2)?', options: ['Autoclavado a baja presión', 'Incineración pirolítica controlada en hornos de doble cámara a > 1,000 °C - 1,100 °C', 'Vertido al alcantarillado', 'Inmersión en alcohol'], correctIndex: 1, rationale: 'Los restos anatomopatológicos y citostáticos requieren destrucción térmica a más de 1,000-1,100 °C.' },
          { id: 'c3m6q2', question: '¿Qué documento legal acredita ante DIGESA/SUSALUD el transporte y disposición final de residuos peligrosos en celda de seguridad?', options: ['Factura de compra', 'Manifiesto de Manejo de Residuos Peligrosos firmado por generador, EO-RS y operador del relleno', 'Carnet de sanidad', 'Kardex de enfermería'], correctIndex: 1, rationale: 'El Manifiesto de Residuos Peligrosos es el documento oficial de cadena de custodia.' },
          { id: 'c3m6q3', question: 'Al suscitarse la rotura de un termómetro o tensiómetro con derrame de mercurio líquido, ¿qué acción está formalmente prohibida?', options: ['Abrir ventanas', 'Utilizar una aspiradora convencional o escoba para recogerlo', 'Evacuar el área', 'Usar flor de azufre'], correctIndex: 1, rationale: 'El calor del motor de la aspiradora y el barrido pulverizan el mercurio en vapor tóxico inhalable.' }
        ]
=======
        title: 'Paquetes de Prevención de IAAS (Care Bundles) y Vigilancia Epidemiológica',
        part1Title: 'Parte 1: Prevención de ITU Asociada a Catéter Urinario y NAVM',
        part2Title: 'Parte 2: Limpieza Terminal de la Unidad del Paciente',
        duration: '6 Horas Lectivas',
        summary: 'Medidas basadas en evidencia para prevenir Infección del Tracto Urinario por sonda Foley, Neumonía Asociada a Ventilador y contaminación ambiental.',
        content: [
          '1. Prevención de ITU Asociada a Sonda Vesical (CAUTI): Inserción con técnica estéril, mantener el circuito cerrado sin desconectar, fijar la sonda en el muslo y mantener la bolsa colectora siempre POR DEBAJO del nivel de la vejiga sin tocar el suelo.',
          '2. Prevención de Neumonía Asociada a Ventilación Mecánica (NAVM): Mantener cabecero de la cama elevado de 30° a 45°, higiene bucal con Clorhexidina al 0.12%, control de presión del neumotaponamiento (cuff entre 20 y 30 cmH2O) y aspiración subglótica.',
          '3. Principio de Limpieza y Desinfección de la Unidad: Siempre se limpia de "lo más limpio a lo más sucio" y "de arriba hacia abajo", sin barrer en seco (el barrido en seco levanta polvo con esporas y bacterias al aire).'
        ],
        keyPoints: [
          'Bolsa colectora de orina (sonda Foley): siempre colgada por debajo del nivel de la vejiga y sin tocar el piso.',
          'Bundle de NAVM en UCI: cabecero a 30°-45°, higiene oral con clorhexidina 0.12% y cuff en 20-30 cmH2O.',
          'Principio universal de desinfección ambiental: de lo más limpio a lo más sucio y de arriba hacia abajo.'
        ],
        clinicalPearl: 'Elevar la bolsa colectora de orina por encima del nivel de la vejiga durante el traslado en camilla provoca reflujo retrógrado de orina colonizada hacia la vejiga y el riñón, desencadenando urosepsis. Pinzar brevemente el tubo si se moviliza al paciente.',
        checkQuestion: {
          question: 'Para prevenir la Infección del Tracto Urinario asociada a Sonda Foley, ¿en qué posición debe mantenerse siempre la bolsa colectora?',
          options: [
            'Sobre el abdomen del paciente',
            'Colgada por debajo del nivel de la vejiga, manteniendo el circuito cerrado y sin tocar el suelo',
            'En el piso debajo de la cama',
            'Colgada en el soporte de suero por encima de la cabeza'
          ],
          correctIndex: 1,
          explanation: 'Mantener la bolsa bajo el nivel vesical impide el reflujo de orina por gravedad, y no tocar el suelo evita contaminar la válvula de vaciado.'
        }
>>>>>>> Stashed changes
      }
    ],
    finalExam: [
      {
        id: 'q1',
<<<<<<< Updated upstream
        question: 'Tras un accidente laboral por pinchazo con aguja contaminada con sangre, ¿qué virus presenta la mayor tasa de transmisión (6% a 30%) en no vacunados y cuál es la primera acción inmediata en el sitio?',
        options: [
          'VIH — Exprimir fuertemente el dedo y echar lejía pura',
          'Virus de la Hepatitis B (VHB: 6% a 30%) — Lavar inmediatamente con abundante agua y jabón sin exprimir la herida e iniciar evaluación de PEP (2-4 h para VIH, máx 72 h)',
          'Gripe — Colocar un torniquete en el brazo',
          'Hepatitis A — No hacer nada por 1 semana'
        ],
        correctIndex: 1,
        rationale: 'El VHB tiene una tasa de seroconversión del 6% al 30%; la herida se lava con agua y jabón sin exprimirla y se reporta de inmediato.'
      },
      {
        id: 'q2',
        question: '¿En qué escenario clínico es obligatorio el lavado de manos con agua y jabón (40-60 s) porque el alcohol en gel es ineficaz, y cuál es el orden correcto de retiro del EPP?',
        options: [
          'Tras tomar la presión — Retirar primero la mascarilla N95',
          'Ante exposición a esporas de Clostridioides difficile o manos visiblemente sucias — Retiro: 1° Guantes y Bata → 2° Higiene de manos → 3° Gafas → 4° N95 → 5° Higiene de manos',
          'Nunca se usa agua y jabón — Retirar todo junto sin lavarse las manos',
          'Solo al terminar el turno — Retirar gafas con guantes con sangre'
        ],
        correctIndex: 1,
        rationale: 'Las esporas de C. difficile resisten al alcohol y exigen arrastre con agua y jabón; el retiro de EPP inicia con guantes/bata seguidos de higiene de manos.'
      },
      {
        id: 'q3',
        question: 'Según la NTS N° 144-MINSA/2018/DIGESA, relacione correctamente el residuo con su clase y color de bolsa:',
        options: [
          'Gasas con sangre y placenta = Bolsa Roja (Clase A); Medicamentos vencidos, citostáticos y mercurio = Bolsa Amarilla (Clase B); Papel de oficina limpio = Bolsa Negra (Clase C)',
          'Medicamentos vencidos = Bolsa Roja; Gasas con sangre = Bolsa Amarilla',
          'Placentas = Bolsa Negra; Envolturas limpias = Bolsa Roja',
          'Todo se mezcla en una sola bolsa blanca'
        ],
        correctIndex: 0,
        rationale: 'Clase A (Rojo) = Biocontaminados; Clase B (Amarillo) = Especiales químicos/farmacéuticos/citostáticos; Clase C (Negro) = Comunes.'
      },
      {
        id: 'q4',
        question: '¿Cuál es el límite máximo de llenado del contenedor rígido de punzocortantes, el espesor mínimo de las bolsas biocontaminadas y el tiempo máximo en el Almacenamiento Intermedio?',
        options: [
          '100% de capacidad — 10 µm — 72 horas',
          '3/4 partes (75%) de su capacidad — Espesor mínimo de 50.8 µm (calibre 200) — Máximo 12 horas en el Almacenamiento Intermedio',
          'Mitad de capacidad — Sin espesor — 1 semana',
          'Se reencapuchan las agujas y se tiran a la bolsa negra'
        ],
        correctIndex: 1,
        rationale: 'La NTS N° 144-MINSA establece el llenado máximo al 75%, bolsas ≥ 50.8 µm y retención máxima de 12 horas en el almacenamiento intermedio.'
      },
      {
        id: 'q5',
        question: '¿Cómo se inactiva un derrame de sangre en el piso y cuántos mililitros de lejía comercial al 5% se requieren para preparar 5 Litros de solución a 1,000 ppm para limpieza general?',
        options: [
          'Derrame de sangre: cubrir con papel absorbente y aplicar Hipoclorito a 10,000 ppm (1%) por 15-20 minutos — Para 5 L a 1,000 ppm se requieren 100 ml de lejía al 5%',
          'Limpiar la sangre con trapeador seco — Usar 10 ml de lejía',
          'Echar alcohol — Usar 1 litro de lejía pura',
          'Aspirar la sangre con aspiradora de polvo'
        ],
        correctIndex: 0,
        rationale: 'Los derrames de sangre exigen cloro a 10,000 ppm (1%) por 15-20 min; y por fórmula: (1000 × 5) / (5 × 10) = 100 ml de lejía al 5%.'
=======
        question: 'Según la guía de la OMS, ¿cuánto tiempo debe durar la higiene de manos con alcohol en gel (fricción) y cuánto el lavado con agua y jabón?',
        options: [
          '5 s con alcohol gel y 15 s con agua y jabón',
          '20 a 30 s con alcohol gel y 40 a 60 s con agua y jabón',
          '60 s con alcohol gel y 20 s con agua y jabón',
          '3 minutos en ambos casos'
        ],
        correctIndex: 1,
        rationale: 'La fricción hidroalcohólica requiere 20-30 segundos y el lavado clínico con agua y jabón requiere 40-60 segundos.'
      },
      {
        id: 'q2',
        question: 'Según la NTS N° 144-MINSA, ¿en qué bolsa se segregan las gasas empapadas con sangre y cuál es el límite máximo de llenado de la caja rígida de punzocortantes?',
        options: [
          'Bolsa amarilla — Límite 100%',
          'Bolsa roja (Clase A Biocontaminados) — Límite 3/4 partes (75%) de la caja rígida',
          'Bolsa negra — Límite 50%',
          'Bolsa verde — Límite 90%'
        ],
        correctIndex: 1,
        rationale: 'Los residuos con sangre son Clase A (bolsa roja) y los contenedores de punzocortantes se cierran al 75% (3/4) de su capacidad.'
      },
      {
        id: 'q3',
        question: '¿Qué tipo de aislamiento y protección respiratoria requiere un paciente con Tuberculosis Pulmonar activa?',
        options: [
          'Aislamiento por gotas y mascarilla simple',
          'Aislamiento por vía aérea (aerosoles < 5 micras), presión negativa y respirador N95 / FFP2',
          'Solo uso de guantes limpios',
          'Visor facial sin mascarilla'
        ],
        correctIndex: 1,
        rationale: 'El bacilo de Koch viaja en núcleos de gotitas (<5 micras) suspendidos en el aire, exigiendo respirador N95.'
      },
      {
        id: 'q4',
        question: 'Ante un accidente punzocortante con aguja contaminada con sangre de un paciente VIH positivo, ¿cuál es la conducta correcta?',
        options: [
          'Exprimir la herida con fuerza y echar lejía pura',
          'Lavar de inmediato con agua y jabón, notificar el accidente e iniciar Profilaxis Post-Exposición (PPE) idealmente en las primeras 2 h (máximo 72 h)',
          'Esperar 15 días para ver si aparecen síntomas',
          'No reportarlo si el sangrado fue pequeño'
        ],
        correctIndex: 1,
        rationale: 'Se lava con agua y jabón sin exprimir ni usar cáusticos, y la PPE antirretroviral debe iniciarse dentro de las primeras 72 horas.'
      },
      {
        id: 'q5',
        question: '¿Qué medidas integran el paquete (Bundle) para prevenir la Neumonía Asociada a Ventilación Mecánica (NAVM) en UCI?',
        options: [
          'Paciente totalmente plano a 0°',
          'Cabecero elevado de 30° a 45°, higiene bucal con Clorhexidina al 0.12% y presión del cuff entre 20 y 30 cmH2O',
          'Cambiar el circuito del ventilador cada 6 horas',
          'Desinflar el balón del tubo endotraqueal cada turno'
        ],
        correctIndex: 1,
        rationale: 'La elevación a 30°-45°, el control del cuff (20-30 cmH2O) y la higiene oral con clorhexidina previenen la microaspiración.'
>>>>>>> Stashed changes
      }
    ]
  },

  // ==========================================================================
<<<<<<< Updated upstream
  // CURSO 4: CADENA DE FRÍO Y ESQUEMA NACIONAL DE VACUNACIÓN (40 HORAS - 6 MÓDULOS)
=======
  // CURSO 4: CADENA DE FRÍO Y ESQUEMA NACIONAL DE VACUNACIÓN (40 HORAS)
>>>>>>> Stashed changes
  // ==========================================================================
  {
    id: 'cadena-frio-vacunacion',
    code: 'EC-CUR-004',
    title: 'Cadena de Frío y Esquema Nacional de Vacunación',
<<<<<<< Updated upstream
    subtitle: 'Inmunología vacunal, adyuvantes, equipos Ice-Lined (+2 °C a +8 °C), Data Logger, Test de Agitación, Esquema NTS N° 196-MINSA, frascos abiertos y ESAVI.',
    category: 'Inmunizaciones & Salud Pública',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 136-MINSA/2017/DGIESP (Cadena de Frío) y NTS N° 196-MINSA/DGIESP-2022',
    badgeColor: 'from-cyan-500 to-blue-600',
    manualPdfUrl: '/manuales/manual-cadena-frio-vacunacion.pdf',
=======
    subtitle: 'Conservación térmica (+2 °C a +8 °C), preparación de termos KST, calendario de inmunizaciones MINSA, ESAVI y política de frascos abiertos.',
    category: 'Salud Pública & Inmunizaciones',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'NTS N° 196-MINSA/DGIESP-2022 / NTS N° 136-MINSA (Cadena de Frío)',
    badgeColor: 'from-sky-500 to-indigo-600',
>>>>>>> Stashed changes
    modules: [
      {
        id: 'm1',
        number: 1,
<<<<<<< Updated upstream
        title: 'Inmunología Aplicada, Clasificación de Biológicos, Adyuvantes y Termolabilidad',
        part1Title: 'Parte 1: Respuesta Primaria vs. Secundaria y Plataformas Tecnológicas',
        part2Title: 'Parte 2: Adyuvantes de Aluminio, Timerosal y Sensibilidad al Frío/Calor',
        duration: '6 Horas Lectivas',
        summary: 'Diferenciación entre vacunas vivas atenuadas, inactivadas, conjugadas y toxoides, y daño irreversible por congelación (<0 °C) en sales de aluminio.',
        content: [
          '1. Respuesta Inmunitaria y Plataformas Vacunales: En la respuesta primaria (1er estímulo) hay una latencia de 4-14 días con pico inicial de IgM; en la respuesta secundaria (refuerzos) las células B de memoria elevan la IgG en 24-72 h. Las vacunas Vivas Atenuadas (BCG, Rotavirus, SPR, Varicela, Fiebre Amarilla) generan inmunidad duradera pero están contraindicadas en gestantes e inmunosuprimidos severos. Las vacunas Conjugadas (Neumococo, Hib en Pentavalente) unen el polisacárido a una proteína para que el sistema inmune inmaduro de los menores de 2 años responda eficazmente.',
          '2. Adyuvantes de Aluminio, Timerosal y Fotosensibilidad: Las sales de aluminio (presentes en Pentavalente, DPT, DT, dT, Hepatitis B y Neumococo) actúan como depósito inmunogénico pero son EXTREMADAMENTE SENSIBLES AL CONGELAMIENTO (< 0 °C): el hielo fractura el coloide formando grumos pesados que anulan la vacuna de forma irreversible y causan abscesos estériles. El Timerosal es un conservante bacteriostático seguro en frascos multidosis. Las vacunas virales vivas (BCG, SPR, Varicela, AMA) vienen en viales ámbar porque la luz UV las destruye.'
        ],
        tableData: {
          title: 'Plataformas Vacunales, Componentes y Comportamiento Térmico',
          headers: ['Plataforma / Aditivo', 'Biológicos Representativos', 'Característica Inmunológica / Función', 'Riesgo Térmico y Cuidado'],
          rows: [
            ['Vivas Atenuadas', 'BCG, Rotavirus, SPR, Varicela, AMA', 'Respuesta humoral y celular duradera', 'Termolábiles al calor y fotosensibles (vial ámbar). Contraindicadas en gestantes.'],
            ['Conjugadas (Subunidad)', 'Neumococo 13V, Hib (Pentavalente)', 'Convierten antígeno en T-dependiente', 'Eficaces en lactantes < 2 años. Sensibles a la congelación.'],
            ['Sales de Aluminio', 'Pentavalente, DPT, DT, dT, HvB, Neumococo', 'Adyuvante que potencia la respuesta', 'PROHIBIDO CONGELAR (< 0 °C): precipita en grumos de forma irreversible.'],
            ['Timerosal (Etilmercurio)', 'Influenza, dT y HvB multidosis', 'Conservante antimicrobiano en multidosis', 'Evita contaminación bacteriana tras punciones repetidas (uso hasta 28 días).']
          ]
        },
        keyPoints: [
          'Primera defensa rápida en respuesta primaria: IgM | Defensa de memoria duradera en refuerzos: IgG.',
          'Vacunas con adyuvante de aluminio (Pentavalente, DPT, dT, HvB, Neumococo): se malogran irreversiblemente si se congelan (< 0 °C).',
          'Vacunas conjugadas (Neumococo, Hib): permiten que bebés menores de 2 años creen defensas duraderas.',
          'BCG y SPR vienen en frasco oscuro (ámbar) porque la luz solar o fluorescente destruye los virus/bacilos vivos.'
        ],
        clinicalPearl: 'Por qué las Vacunas con Aluminio Jamás Deben Congelarse: Cuando una Pentavalente o Hepatitis B baja de 0 °C, los cristales de hielo rompen la red de aluminio formando grumos que caen al fondo; esa vacuna pierde el 100% de su eficacia protectora y produce abscesos estériles dolorosos.',
        checkQuestion: {
          question: '¿Qué les sucede a las vacunas adsorbidas en adyuvantes de sales de aluminio (como Pentavalente, DPT o Hepatitis B) si se congelan accidentalmente a menos de 0 °C?',
          options: [
            'Se conservan mejor y duran más años',
            'Se malogran de forma irreversible porque el hielo rompe la unión con el aluminio formando grumos pesados y pierden su efecto protector',
            'Solo hay que calentarlas con la mano y usarlas',
            'Se vuelven vacunas orales'
          ],
          correctIndex: 1,
          explanation: 'El congelamiento flocula y precipita las sales de aluminio de manera irreversible, destruyendo la potencia inmunogénica.'
        },
        moduleQuiz: [
          { id: 'c4m1q1', question: '¿Por qué las vacunas con microbios vivos atenuados (como la SPR o Fiebre Amarilla) no deben colocarse en gestantes ni en personas con defensas muy bajas?', options: ['Porque dan sueño', 'Porque el virus debilitado podría multiplicarse sin control y causar enfermedad', 'Porque cambian de color', 'Porque solo sirven en ancianos'], correctIndex: 1, rationale: 'En inmunosuprimidos severos o gestantes existe riesgo replicativo del virus atenuado.' },
          { id: 'c4m1q2', question: '¿Qué tipo de anticuerpo produce el cuerpo primero cuando recibe una vacuna por primera vez (respuesta primaria)?', options: ['Glóbulos rojos', 'Inmunoglobulina M (IgM)', 'Plaquetas', 'Insulina'], correctIndex: 1, rationale: 'La IgM es la primera inmunoglobulina secretada en la fase temprana de la respuesta primaria.' },
          { id: 'c4m1q3', question: '¿Para qué sirve el Timerosal en los frascos de vacunas multidosis?', options: ['Para darle sabor dulce', 'Como conservante antimicrobiano para evitar que crezcan bacterias u hongos al pinchar el frasco', 'Para enfriar el frasco', 'Para cambiar el color'], correctIndex: 1, rationale: 'El timerosal previene la contaminación bacteriana o fúngica en viales multidosis abiertos.' },
          { id: 'c4m1q4', question: '¿Qué ventaja tienen las vacunas "conjugadas" (como Neumococo) en los bebés menores de 2 años?', options: ['No requieren frío', 'Ayudan a que el sistema inmune inmaduro del bebé menor de 2 años reconozca el antígeno y cree defensas duraderas', 'Se dan en gotas', 'Curan el resfrío'], correctIndex: 1, rationale: 'La unión a una proteína transportadora activa a los linfocitos T cooperadores en menores de 2 años.' }
        ]
=======
        title: 'Rango Térmico Estándar (+2 °C a +8 °C), Equipos Ice Lined y Data Logger',
        part1Title: 'Parte 1: Niveles de la Cadena de Frío y Temperatura de Conservación',
        part2Title: 'Parte 2: Refrigeradores Ice Lined y Monitoreo con Data Logger',
        duration: '6 Horas Lectivas',
        summary: 'Control estricto del rango térmico de +2 °C a +8 °C en el nivel local y lectura continua mediante termómetros digitales y Data Logger.',
        content: [
          '1. Rango de Oro en Nivel Local (+2 °C a +8 °C): Todas las vacunas del Esquema Nacional en los establecimientos de salud se conservan estrictamente entre +2 °C y +8 °C, registrando la temperatura dos veces al día (entrada y salida) en la Hoja de Control y Monitoreo.',
          '2. Refrigeradores Horizontales Ice Lined: Son los equipos de diseño médico estándar porque mantienen una autonomía frigorífica de 20 a 36 horas ante cortes de energía eléctrica y no pierden el aire frío al abrir la puerta superior.',
          '3. El Termómetro Data Logger: Registra la temperatura de forma continua e inalterable cada 10 a 15 minutos, permitiendo auditar si existieron rupturas de cadena de frío por calor (> +8 °C) o por congelación (< 0 °C).'
        ],
        keyPoints: [
          'Rango oficial de conservación de vacunas en nivel operativo: +2 °C a +8 °C.',
          'Temperatura óptima de seguridad dentro del refrigerador: alrededor de +4 °C a +5 °C.',
          'En el refrigerador de vacunas está prohibido guardar alimentos, bebidas o reactivos de laboratorio.'
        ],
        clinicalPearl: 'Si la temperatura del refrigerador desciende por debajo de +2 °C o supera los +8 °C, se configura una Alerta de Ruptura de Cadena de Frío: inmovilice los biológicos en un termo preparado, no los deseche ni los administre, y notifique con la lectura del Data Logger.',
        checkQuestion: {
          question: 'Según la Norma Técnica de Cadena de Frío del MINSA, ¿cuál es el rango estricto de temperatura en el que deben conservarse las vacunas en los establecimientos de salud?',
          options: ['De -15 °C a -25 °C', 'De 0 °C a +10 °C', 'De +2 °C a +8 °C', 'De +4 °C a +12 °C'],
          correctIndex: 2,
          explanation: 'El rango normativo universal y del MINSA para todas las vacunas en el nivel operativo local es de +2 °C a +8 °C.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm2',
        number: 2,
<<<<<<< Updated upstream
        title: 'Niveles de Cadena de Frío (+2 °C a +8 °C), Refrigeradores Ice-Lined y Data Logger',
        part1Title: 'Parte 1: Niveles Logísticos, Refrigeradores Ice-Lined (ILR) y Vida Fría',
        part2Title: 'Parte 2: Monitoreo Continuo con Data Logger y Hoja de Control Diario',
        duration: '8 Horas Lectivas',
        summary: 'Conservación estricta entre +2 °C y +8 °C, autonomía de equipos Ice-Lined (24-72 h), prohibición de refrigeradoras domésticas y umbrales de alarma.',
        content: [
          '1. Niveles y Rango Oficial (+2 °C a +8 °C): Nivel Nacional (stock 6-12 meses), Nivel Regional DIRESA/DIRIS (3-6 meses), Nivel Local IPRESS/Centro de Salud (stock 1 a 2 meses como máximo). En el nivel local TODAS las vacunas se conservan estrictamente entre +2 °C y +8 °C. Están PROHIBIDAS las refrigeradoras domésticas comunes (enfrían disparejo y congelan las vacunas). Se exigen Refrigeradores Ice-Lined (ILR) precalificados por la OMS, cuyas paredes tienen tubos de agua congelada que mantienen la temperatura entre +2 °C y +8 °C por 24 a 72 horas si se corta la luz. Las vacunas se colocan exclusivamente en las canastillas centrales.',
          '2. Dispositivos Isotérmicos y Monitoreo Térmico: Los Termos Porta-Vacunas (KST, Coleman, Giostyle) tienen una vida fría de 24 a 36 horas y las Cajas Transportadoras de 48 a 120 horas. Los paquetes fríos se llenan ÚNICAMENTE con agua limpia (prohibido usar geles de colores o sal porque congelan a temperaturas bajo cero). La temperatura se anota en la Hoja de Registro Gráfico dos veces al día (mañana al entrar y tarde al salir), mientras el Data Logger electrónico graba cada 5-10 min las 24 h (Alarma de frío: ≤ -0.5 °C por >60 min; Alarma de calor: > +8 °C por >10 h).'
        ],
        tableData: {
          title: 'Equipos Oficiales de Cadena de Frío y Monitoreo Térmico (NTS N° 136-MINSA)',
          headers: ['Equipo / Dispositivo', 'Característica Técnica Normada', 'Vida Fría / Umbral de Alarma', 'Regla de Oro Operativa'],
          rows: [
            ['Refrigerador Ice-Lined (ILR)', 'Paredes internas con camisa de hielo', 'Autonomía de 24 a 72 horas sin energía', 'Ubicar vacunas solo en canastillas centrales (separadas 1-2 cm).'],
            ['Termo Porta-Vacunas (KST)', 'Poliuretano de alta densidad libre de CFC', 'Vida fría: 24 a 36 horas cerrado', 'Usar paquetes fríos solo con AGUA limpia (prohibido gel o sal).'],
            ['Data Logger USB (PQS)', 'Registro electrónico continuo cada 5-10 min', 'Frío: ≤ -0.5 °C (>60m) | Calor: > +8 °C (>10h)', 'Lectura mensual y descarga inmediata ante ruptura de frío.'],
            ['Hoja de Control Diario', 'Gráfica física visible en el refrigerador', 'Rango seguro estricto: +2 °C a +8 °C', 'Registro obligatorio 2 veces al día (mañana y tarde).']
          ]
        },
        keyPoints: [
          'Rango oficial de conservación de vacunas en establecimientos de salud: +2 °C a +8 °C.',
          'Refrigerador Ice-Lined: mantiene el frío seguro entre +2 °C y +8 °C por 24 a 72 horas ante corte eléctrico.',
          'Control manual de temperatura: obligatorio 2 veces al día (mañana y tarde) + Data Logger continuo.',
          'Paquetes fríos: llenar únicamente con agua potable limpia (prohibidos los geles eutécticos o salmueras).'
        ],
        clinicalPearl: 'Por qué Están Prohibidos los Paquetes con Gel Azul: Los geles eutécticos comerciales se congelan a -10 °C o -15 °C y se derriten debajo de 0 °C; si los metes al termo, congelarán y arruinarán todas las vacunas Pentavalente y HvB aunque parezcan "sudados". Usa siempre paquetes solo con agua.',
        checkQuestion: {
          question: '¿Cuál es el rango oficial de temperatura para conservar las vacunas en el centro de salud, cuántas veces al día se anota en la hoja de control y con qué líquido se llenan los paquetes fríos?',
          options: [
            '-10 °C a 0 °C — 1 vez a la semana — Con gel azul',
            'Entre +2 °C y +8 °C — Dos veces al día (mañana y tarde) — Únicamente con agua corriente limpia',
            '+10 °C a +20 °C — Solo cuando hay corte de luz — Con agua con sal',
            '0 °C a +15 °C — 1 vez al mes — Con alcohol'
          ],
          correctIndex: 1,
          explanation: 'La NTS N° 136-MINSA exige conservar entre +2 °C y +8 °C, registrar temperatura mañana y tarde, y usar paquetes exclusivamente con agua.'
        },
        moduleQuiz: [
          { id: 'c4m2q1', question: '¿Qué gran ventaja tiene una refrigeradora especial para vacunas tipo "Ice-Lined" si se corta la luz eléctrica?', options: ['Funciona con gasolina', 'Tiene paredes con agua congelada que mantienen el frío seguro (+2 °C a +8 °C) por 24 a 72 horas sin electricidad', 'Envía mensajes de texto', 'Se convierte en termo'], correctIndex: 1, rationale: 'El banco de hielo perimetral de los equipos Ice-Lined brinda autonomía térmica de 24 a 72 horas.' },
          { id: 'c4m2q2', question: '¿A qué llamamos la "vida fría" de un termo porta-vacunas?', options: ['A los años que dura el termo', 'Al número de horas que el termo cerrado logra mantener las vacunas entre +2 °C y +8 °C', 'Al tiempo en vacunar', 'A la fecha de vencimiento'], correctIndex: 1, rationale: 'La vida fría mide las horas que el dispositivo isotérmico mantiene el rango de +2 °C a +8 °C.' },
          { id: 'c4m2q3', question: '¿Por cuánto tiempo como máximo debe planificar su stock de vacunas un centro de salud local (IPRESS)?', options: ['Para 5 años', 'Para 1 a 2 meses como máximo', 'Para 24 horas', 'Para 10 años'], correctIndex: 1, rationale: 'El nivel local almacena stock para 1 a 2 meses a fin de evitar sobrealmacenamiento y vencimientos.' }
        ]
=======
        title: 'Acondicionamiento de Paquetes Fríos, Sensibilidad al Congelamiento y Test de Agitación',
        part1Title: 'Parte 1: Acondicionamiento de Paquetes Fríos ("Sudado" a 0 °C)',
        part2Title: 'Parte 2: Vacunas Sensibles a la Congelación y Prueba de Agitación',
        duration: '8 Horas Lectivas',
        summary: 'Preparación de termos porta-vacunas KST/Blow Kings sin riesgo de congelar biológicos con adyuvante de aluminio.',
        content: [
          '1. Acondicionamiento de Paquetes Fríos ("Sudado"): Al retirar un paquete frío de agua del congelador (-15 °C a -20 °C), NUNCA debe introducirse directo al termo. Debe dejarse sobre una mesa hasta que desaparezca la escarcha, sude gotas de agua en su superficie y al agitarlo se escuche y observe el agua moviéndose junto al hielo (0 °C).',
          '2. Vacunas Extremadamente Sensibles a la Congelación (< 0 °C): Todas las vacunas que contienen adyuvantes de sales de aluminio (Pentavalente, DPT, Dt,Tdap, Hepatitis B, Hib, VPH y Neumococo) se destruyen irreversiblemente si se congelan.',
          '3. Test de Agitación (Shake Test): Si se sospecha congelación de un vial con adyuvante, se compara con un vial control congelado a propósito: el vial dañado por congelación sedimenta rápidamente formando grumos en el fondo dejando el líquido claro arriba, y debe descartarse.'
        ],
        keyPoints: [
          'El paquete frío está acondicionado (a 0 °C) solo cuando al agitarlo se escucha el líquido desplazarse dentro.',
          'Las vacunas con adyuvante de aluminio (Pentavalente, DPT, VHB, VPH, Neumococo) NUNCA deben congelarse.',
          'En el termo porta-vacunas, los frascos van dentro de un vaso plástico seco para no mojar las etiquetas.'
        ],
        clinicalPearl: 'El error más frecuente de ruptura de cadena de frío en campañas extramuros no es el calor, sino la CONGELACIÓN accidental de vacunas Pentavalente o Hepatitis B por colocar paquetes fríos recién sacados del congelador sin acondicionar.',
        checkQuestion: {
          question: '¿Cómo se comprueba que un paquete frío de agua ha completado su acondicionamiento (0 °C) antes de introducirlo al termo porta-vacunas?',
          options: [
            'Cuando tiene escarcha blanca por fuera',
            'Cuando al agitarlo se escucha y observa que el agua se mueve libremente junto al bloque de hielo interno',
            'Apenas sale del congelador',
            'Sumergiéndolo en agua hirviendo'
          ],
          correctIndex: 1,
          explanation: 'Escuchar y ver el movimiento de agua líquida dentro del paquete garantiza que está a 0 °C y no congelará las vacunas.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm3',
        number: 3,
<<<<<<< Updated upstream
        title: 'Acondicionamiento de Paquetes Fríos (0 °C), Test de Agitación y Ruptura de Cadena de Frío',
        part1Title: 'Parte 1: Los 5 Pasos de Adecuación de Paquetes Fríos y Prueba de Agitación (Shake Test)',
        part2Title: 'Parte 2: Protocolo ante Ruptura de Cadena de Frío (<+2 °C o >+8 °C)',
        duration: '6 Horas Lectivas',
        summary: 'Adecuación de paquetes fríos hasta oír agua líquida interior (0 °C), ejecución del Shake Test y manejo de rupturas en las primeras 24 horas.',
        content: [
          '1. Protocolo de Adecuación de Paquetes Fríos (Equilibrio a 0 °C): 1° Sacar los paquetes del congelador (-20 °C); 2° Ponerlos en mesa en una sola fila sin apilar; 3° Esperar que desaparezca la escarcha blanca; 4° Prueba Sonora: agitar el paquete cerca del oído hasta escuchar y ver que el bloque de hielo flota en agua líquida ("choc-choc"), lo que confirma que está a 0 °C exactos y ya no congelará las vacunas; 5° Secar e introducir al termo colocando el vaso plástico perforado en el centro.',
          '2. Prueba de Agitación (Shake Test de la OMS): Determina si una vacuna con aluminio sufrió congelación. Se agita el frasco sospechoso y un frasco control (congelado a propósito) por 15 segundos y se dejan en mesa plana: si el frasco sospechoso sedimenta rápido en <15-30 min dejando el líquido claro igual que el congelado, el TEST ES POSITIVO (vacuna DAÑADA, no usar). Si permanece lechoso y homogéneo, el TEST ES NEGATIVO (vacuna VÁLIDA).',
          '3. Ruptura de la Cadena de Frío (<+2 °C o >+8 °C): 1) Restablecer la cadena de inmediato pasando las vacunas a un termo o caja transportadora preparada entre +2 °C y +8 °C; 2) Inmovilizar los lotes en cuarentena con el rótulo "Vacunas en Cuarentena por Ruptura - NO USAR" (PROHIBIDO botarlas ni usarlas antes del dictamen técnico); 3) Descargar el Data Logger y notificar a la Red/DIRESA/MINSA dentro de las primeras 24 horas.'
        ],
        tableData: {
          title: 'Lectura del Test de Agitación (Shake Test) y Manejo de Ruptura de Cadena de Frío',
          headers: ['Procedimiento / Resultado', 'Observación Física en el Vial', 'Interpretación Técnica', 'Conducta Obligatoria'],
          rows: [
            ['Paquete Frío Adecuado (0 °C)', 'Sin escarcha + sonido de agua líquida ("choc-choc")', 'Equilibrio bifásico agua-hielo a 0 °C', 'Secar y armar el termo con vasito plástico central.'],
            ['Shake Test POSITIVO', 'Sedimenta rápido al fondo (<15-30 min), líquido claro', 'VACUNA DAÑADA POR CONGELACIÓN', 'Separar y dar de baja técnica (no aplicar a ningún niño).'],
            ['Shake Test NEGATIVO', 'Permanece turbio/lechoso homogéneo largo tiempo', 'VACUNA CONSERVADA Y APTA', 'Puede utilizarse tras autorización correspondiente.'],
            ['Ruptura de Frío (<+2°C o >+8°C)', 'Corte de energía o falla de equipo', 'Contingencia prioritaria', '1° Pasar a termo, 2° Inmovilizar en cuarentena, 3° Notificar en <24 h.']
          ]
        },
        keyPoints: [
          'Un paquete frío está listo para el termo cuando al agitarlo se escucha agua líquida moviéndose adentro ("choc-choc" = 0 °C).',
          'Shake Test POSITIVO = el frasco decanta rápido en grumos = Vacuna DAÑADA por congelación (NO USAR).',
          'Ante Ruptura de Cadena de Frío: 1° Salvar las vacunas en termo acondicionado, 2° Inmovilizar en cuarentena (NO botar ni usar) y 3° Notificar en < 24 horas.'
        ],
        clinicalPearl: 'Jamás Botes las Vacunas por tu Cuenta tras un Corte de Luz: Muchas vacunas conservan su estabilidad durante horas de exposición moderada; solo la Comisión Técnica de DIRESA/MINSA, tras analizar la gráfica del Data Logger, puede autorizar su uso o su baja legal.',
        checkQuestion: {
          question: '¿Cómo comprobamos que un paquete frío sacado del congelador ya está acondicionado a 0 °C para ponerlo en el termo, y qué se debe hacer de inmediato si se detecta una Ruptura de la Cadena de Frío?',
          options: [
            'Cuando tiene escarcha blanca — Botar todas las vacunas a la basura',
            'Cuando al agitarlo cerca del oído se escucha agua líquida moviéndose con el hielo ("choc-choc") — Ante ruptura: pasar a termo acondicionado (+2°C a +8°C), inmovilizar en cuarentena ("NO USAR") y notificar en las primeras 24 horas',
            'Cuando hierve — Vacunar rápido a todos',
            'Cuando está a -20 °C — No avisar a nadie'
          ],
          correctIndex: 1,
          explanation: 'El sonido de agua líquida confirma 0 °C; y ante una ruptura se protege el stock en termo, se pone en cuarentena y se notifica en < 24 horas.'
        },
        moduleQuiz: [
          { id: 'c4m3q1', question: 'Al sacar un paquete frío del congelador, ¿cómo sabemos que ya está listo para armar el termo de vacunas?', options: ['Cuando tiene escarcha blanca pegajosa', 'Cuando al agitarlo cerca del oído se escucha agüita moviéndose ("choc-choc") junto al hielo', 'Cuando se calienta al sol', 'Cuando no queda nada de hielo'], correctIndex: 1, rationale: 'La presencia simultánea de agua líquida y hielo garantiza una temperatura exacta de 0 °C que no congela las vacunas.' },
          { id: 'c4m3q2', question: 'Si la Prueba de Agitación (Shake Test) sale POSITIVA en un frasco de Pentavalente, ¿qué significa?', options: ['Que está perfecta para usar', 'Que se congeló, se malogró en grumos y ya NO debe usarse en ningún paciente', 'Que protege el doble', 'Que es contra el sarampión'], correctIndex: 1, rationale: 'En el Shake Test, un resultado positivo significa que el adyuvante precipitó por congelamiento y el biológico está inservible.' },
          { id: 'c4m3q3', question: '¿Dentro de cuánto tiempo se debe notificar a la Red o DIRESA cuando ocurre una ruptura de la cadena de frío?', options: ['En las primeras 24 horas', 'En 6 meses', 'Al año siguiente', 'No se avisa'], correctIndex: 0, rationale: 'Toda ruptura de cadena de frío debe notificarse obligatoriamente dentro de las primeras 24 horas adjuntando datos del Data Logger.' }
        ]
=======
        title: 'Esquema Nacional de Vacunación del Recién Nacido y Menor de 1 Año (NTS N° 196-MINSA)',
        part1Title: 'Parte 1: Vacunación del Recién Nacido (BCG y Hepatitis B Pediátrica)',
        part2Title: 'Parte 2: Esquema a los 2, 4, 6 y 7 Meses de Edad',
        duration: '8 Horas Lectivas',
        summary: 'Dosis, vías de administración, calibres de aguja y pesos mínimos para las vacunas del primer año de vida.',
        content: [
          '1. Recién Nacido (Primeras 12 a 24 horas): Vacuna BCG (0.05 ml o 0.1 ml según fabricante, vía Intradérmica a 15° en músculo deltoides derecho con aguja 27G x 1/2", peso mínimo ≥ 1,500 g) y Vacuna Hepatitis B monodosis (0.5 ml vía Intramuscular en tercio medio del músculo vasto externo del muslo con aguja 25G x 5/8", peso ≥ 1,500 g).',
          '2. Esquema a los 2, 4 y 6 Meses: Pentavalente (DPT-HvB-Hib: 2, 4 y 6 meses, 0.5 ml IM en vasto externo), Antipolio Inactivada IPV (2, 4 y 6 meses, 0.5 ml IM), Rotavirus (2 y 4 meses, 1.5 ml vía ORAL; edad máxima: 1ra dosis hasta 5 meses 29 días y 2da dosis hasta 7 meses 29 días) y Antineumocócica (2, 4 y 12 meses, 0.5 ml IM).',
          '3. Esquema a los 6 y 7 Meses: Vacuna contra Influenza Pediátrica estacional (0.25 ml IM a los 6 meses y 2da dosis a los 7 meses).'
        ],
        tableData: {
          title: 'Esquema de Vacunación del Recién Nacido y Menor de 1 Año (NTS N° 196-MINSA)',
          headers: ['Edad', 'Vacuna', 'Dosis y Vía', 'Sitio Anatómico y Aguja'],
          rows: [
            ['Recién Nacido (<24h)', 'BCG (Formas graves de TBC)', '0.05 ml / 0.1 ml — Vía Intradérmica (15°)', 'Deltoides derecho — Aguja 27G x 1/2" (Peso ≥ 1,500 g).'],
            ['Recién Nacido (<12h)', 'Hepatitis B (HvB monodosis)', '0.5 ml — Vía Intramuscular (90°)', 'Vasto externo del muslo — Aguja 25G x 5/8" (Peso ≥ 1,500 g).'],
            ['2 y 4 Meses', 'Rotavirus', '1.5 ml — Vía ORAL exclusiva', 'Boca (Edad tope 1ra: 5m 29d; tope 2da: 7m 29d).'],
            ['2, 4 y 6 Meses', 'Pentavalente + Polio Inactivada (IPV)', '0.5 ml c/u — Vía Intramuscular (90°)', 'Tercio medio del músculo vasto externo del muslo (25G x 5/8").']
          ]
        },
        keyPoints: [
          'En menores de 1 año (no caminadores), el sitio de elección para inyecciones IM es el músculo vasto externo del muslo (nunca glúteo por riesgo al nervio ciático).',
          'BCG: vía intradérmica en hombro derecho formando pápula en piel de naranja.',
          'Rotavirus: vía oral estricta a los 2 y 4 meses (nunca iniciar después de los 5 meses 29 días).'
        ],
        clinicalPearl: 'La pápula de la vacuna BCG evoluciona fisiológicamente a mácula, nódulo, pequeña úlcera a las 2-4 semanas y costra cicatricial permanente. Se debe educar a la madre para NO apretar la lesión ni aplicar alcohol, cremas o yodo.',
        checkQuestion: {
          question: '¿Por qué vía, con qué calibre de aguja y a partir de qué peso mínimo se administra la vacuna BCG al recién nacido según la NTS N° 196-MINSA?',
          options: [
            'Vía subcutánea a 45° con aguja 25G desde los 2,500 g',
            'Vía intradérmica (15°) en deltoides derecho con aguja 27G x 1/2", en recién nacidos con peso ≥ 1,500 gramos',
            'Vía intramuscular en el muslo con aguja 23G',
            'Vía oral en gotas al nacer'
          ],
          correctIndex: 1,
          explanation: 'La BCG se aplica por vía intradérmica en la región deltoidea derecha con aguja 27G x 1/2" a partir de 1,500 g de peso.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm4',
        number: 4,
<<<<<<< Updated upstream
        title: 'Esquema Nacional de Vacunación (NTS N° 196-MINSA): Recién Nacidos y Menores de 1 Año',
        part1Title: 'Parte 1: Vacunación del Recién Nacido (BCG y HvB ≥1,500 g) e Hitos de 2, 4, 6 y 7 Meses',
        part2Title: 'Parte 2: Esquema 100% IPV Inyectable, Edades Límite de Rotavirus y Regurgitación',
        duration: '8 Horas Lectivas',
        summary: 'Dominio del calendario del primer año de vida (BCG, HvB, Pentavalente, IPV, Rotavirus, Neumococo e Influenza) y sus reglas operativas.',
        content: [
          '1. Vacunación del Recién Nacido (Primeras 12 a 24 horas): Requiere peso mínimo al nacer ≥ 1,500 gramos. 1) Vacuna BCG (contra tuberculosis meníngea y miliar): 0.1 ml (o 0.05 ml) por vía Intradérmica (ID) en el hombro derecho con aguja 27G x 3/8" formando pápula (evoluciona a nódulo, pústula y cicatriz sin aplicar alcohol ni cremas); 2) Vacuna Hepatitis B (HvB): 0.5 ml Intramuscular (IM) en el muslo (vasto externo) dentro de las primeras 12 horas (máx. 24 h) para cortar la transmisión vertical madre-hijo.',
          '2. Esquema a los 2, 4, 6 y 7 Meses (Anatomía: Músculo Vasto Externo del Muslo): A los 2 y 4 meses recibe 4 vacunas: Pentavalente (0.5 ml IM contra Difteria, Tétanos, Tos ferina, Hepatitis B y Hib), IPV Polio Inactivada (0.5 ml IM), Neumococo conjugada (0.5 ml IM) y Rotavirus oral (1.5 ml VO). A los 6 meses recibe: 3ra Pentavalente + 3ra IPV inyectable (el Perú aplica las 3 dosis primarias con IPV inyectable) + 1ra Influenza pediátrica (0.25 ml IM). A los 7 meses recibe: 2da Influenza pediátrica (0.25 ml IM).',
          '3. Reglas Críticas de Rotavirus: Edad límite máxima para la 1ra dosis: 5 meses y 29 días; edad límite absoluta para la 2da dosis: 7 meses y 29 días (prohibido desde los 8 meses por riesgo de invaginación intestinal). Si el bebé escupe o regurgita la vacuna de Rotavirus, NO SE REPITE LA DOSIS.'
        ],
        tableData: {
          title: 'Calendario Oficial del Recién Nacido y Lactante Menor de 1 Año (NTS N° 196-MINSA)',
          headers: ['Edad del Niño', 'Vacunas Correspondientes', 'Dosis y Vía', 'Regla Clínica y Sitio Anatómico'],
          rows: [
            ['Recién Nacido (<24 h)', 'BCG + Hepatitis B (HvB monodosis)', 'BCG: 0.1 ml ID | HvB: 0.5 ml IM', 'Peso ≥ 1,500 g. BCG en deltoides derecho; HvB en muslo en <12 h.'],
            ['2 Meses y 4 Meses', 'Pentavalente + IPV + Neumococo + Rotavirus', '0.5 ml IM (x3) + 1.5 ml VO', 'IM en vasto externo del muslo. Rotavirus oral (NO repetir si vomita).'],
            ['6 Meses', '3ra Pentavalente + 3ra IPV + 1ra Influenza', '0.5 ml IM + 0.5 ml IM + 0.25 ml IM', 'Esquema primario de Polio 100% con IPV inyectable (2, 4 y 6 m).'],
            ['7 Meses', '2da dosis Influenza Pediátrica', '0.25 ml IM en vasto externo', 'Intervalo de 4 semanas tras la 1ra dosis de los 6 meses.']
          ]
        },
        keyPoints: [
          'Peso mínimo del recién nacido para recibir BCG y Hepatitis B: ≥ 1,500 gramos (1.5 kg).',
          'La vacuna Pentavalente protege contra 5 enfermedades: Difteria, Tétanos, Tos ferina, Hepatitis B y Haemophilus influenzae tipo b (Hib).',
          'En menores de 2 años las inyecciones IM se colocan en el tercio medio anterolateral del muslo (vasto externo), nunca en el glúteo.',
          'Si el lactante escupe o regurgita la dosis oral de Rotavirus, NO se le vuelve a dar otra dosis de reemplazo.'
        ],
        clinicalPearl: 'Edad Límite Estricta de Rotavirus (Invaginación Intestinal): Nunca inicies la 1ra dosis de Rotavirus si el bebé ya cumplió 6 meses (máx. 5 m 29 d), ni apliques la 2da dosis si ya cumplió 8 meses (máx. 7 m 29 d). Tampoco repitas la dosis si el bebé la regurgita.',
        checkQuestion: {
          question: '¿Cuál es el peso mínimo del recién nacido para vacunarlo con BCG y HvB, en qué músculo se aplican las vacunas IM en menores de 2 años y qué se hace si un bebé de 2 meses regurgita la vacuna de Rotavirus?',
          options: [
            '500 gramos — En el glúteo — Darle dos frascos más de Rotavirus',
            'Peso ≥ 1,500 gramos — En el músculo vasto externo del muslo — NO repetir la dosis de Rotavirus (citar a los 4 meses para su 2da dosis)',
            '3,000 gramos — En el abdomen — Inyectar el Rotavirus',
            '2,500 gramos — En el cuello — Suspender todas las vacunas'
          ],
          correctIndex: 1,
          explanation: 'El peso normado es ≥ 1,500 g, el sitio seguro en <2 años es el vasto externo del muslo (evita lesionar el nervio ciático) y la dosis regurgitada de Rotavirus no se repite.'
        },
        moduleQuiz: [
          { id: 'c4m4q1', question: '¿Cuánto debe pesar como mínimo un recién nacido para aplicarle sus vacunas de BCG y Hepatitis B?', options: ['500 gramos', '1,500 gramos (kilo y medio)', '3,500 gramos', '5 kilos'], correctIndex: 1, rationale: 'La NTS N° 196-MINSA establece el peso mínimo de 1,500 gramos para la vacunación neonatal con BCG y HvB.' },
          { id: 'c4m4q2', question: '¿Contra qué 5 enfermedades protege la vacuna PENTAVALENTE a los lactantes a los 2, 4 y 6 meses?', options: ['Solo gripe', 'Difteria, Tétanos, Tos ferina (Pertussis), Hepatitis B y Haemophilus influenzae tipo b (Hib)', 'Sarampión y varicela', 'Caries y anemia'], correctIndex: 1, rationale: 'Pentavalente combina DPT + HvB + Hib en una sola aplicación intramuscular.' },
          { id: 'c4m4q3', question: '¿Cómo se administra hoy en día el esquema primario de Polio a los 2, 4 y 6 meses en el Perú?', options: ['En jarabe', 'Mediante inyección intramuscular (vacuna IPV inactivada) en las 3 dosis (2, 4 y 6 meses)', 'En gotas nasales', 'Ya no se vacuna'], correctIndex: 1, rationale: 'El esquema nacional aplica las 3 dosis primarias con vacuna inactivada inyectable (IPV) para erradicar la polio asociada a vacuna.' },
          { id: 'c4m4q4', question: 'Si un bebé de 2 meses escupe o regurgita la vacuna oral de Rotavirus, ¿qué debe hacer el profesional de enfermería?', options: ['Darle otro frasco de inmediato', 'NO repetir la dosis; registrar y citarlo a los 4 meses para su segunda dosis programada', 'Inyectarla por vena', 'Castigar a la madre'], correctIndex: 1, rationale: 'La mucosa bucal absorbe parte del antígeno; repetir la dosis aumenta el riesgo de eventos adversos intestinales.' }
        ]
=======
        title: 'Vacunación de 1 a 4 Años, VPH, Gestantes y Adultos Mayores',
        part1Title: 'Parte 1: Vacunas del Año de Edad (SPR, Varicela, Antiamarílica, Neumococo)',
        part2Title: 'Parte 2: Vacunación en Gestantes (Tdap) y Virus del Papiloma Humano (VPH)',
        duration: '6 Horas Lectivas',
        summary: 'Vacunas virales atenuadas subcutáneas a los 12-18 meses, vacunación contra VPH y protección materna con Tdap.',
        content: [
          '1. Vacunas a los 12 y 15-18 Meses: A los 12 meses: 1ra dosis de SPR (Sarampión, Paperas, Rubéola: 0.5 ml vía Subcutánea en ángulo de 45° con aguja 25G x 5/8"), 3ra dosis de Neumococo y Varicela. A los 15 meses: Antiamarílica (AMA: 0.5 ml SC) y Hepatitis A. A los 18 meses: 2da dosis de SPR, 1er refuerzo de DPT y APO.',
          '2. Vacuna contra el Virus del Papiloma Humano (VPH): Se administra en niñas, niños y adolescentes de 9 a 18 años (dosis única de 0.5 ml vía IM en músculo deltoides con aguja 25G x 1") para prevenir cáncer de cuello uterino y verrugas genitales.',
          '3. Vacunación en la Gestante: Vacuna Tdap (Tétanos, Difteria y Tos ferina acelular) entre las 20 y 36 semanas de cada gestación para transferir anticuerpos al feto contra la coqueluche neonatal, además de Influenza y Hepatitis B.'
        ],
        keyPoints: [
          'SPR, Varicela y Antiamarílica (AMA): son vacunas de virus vivos atenuados y se aplican por vía Subcutánea (45°) en deltoides.',
          'Las vacunas de virus vivos atenuados (SPR, AMA, Varicela) están contraindicadas durante el embarazo y en inmunodeprimidos severos.',
          'En caminadores (>1 año a más) y adultos, la vía IM se aplica en el músculo deltoides del brazo.'
        ],
        clinicalPearl: 'Si dos vacunas de virus vivos atenuados parenterales (como SPR y Fiebre Amarilla) no se administran el mismo día en brazos distintos, se debe esperar un intervalo mínimo estricto de 4 semanas (30 días) entre ellas para evitar interferencia inmunológica.',
        checkQuestion: {
          question: '¿Entre qué semanas del embarazo se indica la vacuna Tdap (contra Tétanos, Difteria y Tos ferina acelular) para proteger al recién nacido de la tos ferina?',
          options: [
            'En la semana 4 de gestación',
            'Entre las 20 y 36 semanas de gestación en cada embarazo',
            'Solo después del parto',
            'Está contraindicada en el embarazo'
          ],
          correctIndex: 1,
          explanation: 'La Tdap se administra entre las 20 y 36 semanas de gestación para lograr el máximo paso transplacentario de anticuerpos IgG al feto.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm5',
        number: 5,
<<<<<<< Updated upstream
        title: 'Esquema de 1 a 4 Años, Escolares (VPH Dosis Única), Gestantes (dTpa) y Adultos Mayores',
        part1Title: 'Parte 1: Hitos de 12 Meses, 15 Meses, 18 Meses, 4 Años y VPH en Escolares',
        part2Title: 'Parte 2: Vacunación en la Gestante (dTpa 27-36 sem) y Adulto Mayor (≥60 años)',
        duration: '6 Horas Lectivas',
        summary: 'Aplicación subcutánea de virales vivas (SPR, Varicela, AMA), refuerzos DPT, dosis única de VPH, dTpa en cada embarazo e inmunización geriátrica.',
        content: [
          '1. Esquema de 12 Meses a 4 Años y Vía Subcutánea: A los 12 meses (1 año): 1ra SPR (Sarampión-Papera-Rubeola, 0.5 ml SC), 3ra Neumococo (0.5 ml IM), Varicela (0.5 ml SC, con rescate hasta los 2 años 11 meses 29 días) y Hepatitis A. A los 15 meses: Fiebre Amarilla / Antiamarílica (AMA: 0.5 ml SC, dosis única de por vida). A los 18 meses: 2da SPR (0.5 ml SC), 1er Refuerzo DPT (0.5 ml IM) y refuerzo Polio. A los 4 años: 2do Refuerzo DPT + refuerzo Polio. Las vacunas virales vivas (SPR, Varicela, AMA) se aplican por vía Subcutánea (SC) en ángulo de 45° en el deltoides con aguja 25G x 5/8".',
          '2. Escolares (VPH), Gestantes (dTpa) y Adultos Mayores: En escolares de 5to de primaria (niñas y niños de 9 a 13 años y rescate hasta 18 años) se aplica la vacuna contra el Virus del Papiloma Humano (VPH) en DOSIS ÚNICA (0.5 ml IM en deltoides). En TODA GESTANTE se administra una dosis de dTpa (acelular, 0.5 ml IM) en CADA embarazo entre las semanas 27 y 36 de gestación (o desde las 20 sem) para transferir anticuerpos por la placenta y proteger al recién nacido contra la tos ferina (coqueluche). En el Adulto Mayor (≥60 años): Neumococo (dosis única de por vida) e Influenza estacional (anual).'
        ],
        tableData: {
          title: 'Esquema de Vacunación de 1 Año, Escolares, Gestantes y Adultos Mayores',
          headers: ['Grupo Etario / Hito', 'Vacunas Normadas (NTS N° 196)', 'Dosis, Vía y Ángulo', 'Criterio Clínico Clave'],
          rows: [
            ['12 Meses (1 Año)', '1ra SPR + 3ra Neumococo + Varicela + Hep A', 'SPR/Varicela: 0.5 ml SC (45°)', 'Rescate de Varicela permitido hasta 2 años 11 meses 29 días.'],
            ['15 y 18 Meses / 4 Años', 'AMA (15m) | 2da SPR + 1er Ref DPT (18m) | 2do Ref DPT (4a)', 'AMA/SPR: 0.5 ml SC | DPT: 0.5 ml IM', 'Fiebre Amarilla (AMA): una sola dosis protege de por vida.'],
            ['Escolares (9 a 13 años)', 'Virus del Papiloma Humano (VPH)', 'Dosis Única (0.5 ml IM deltoides)', 'Para niñas y niños (previene cáncer de cérvix y otros).'],
            ['Gestantes (3er Trimestre)', 'Vacuna dTpa (Tétanos, Difteria, Pertussis acelular)', '0.5 ml IM en cada embarazo (27-36 sem)', 'Pasa anticuerpos IgG por la placenta contra la tos ferina neonatal.']
          ]
        },
        keyPoints: [
          'SPR: 1ra dosis a los 12 meses y 2da dosis a los 18 meses (vía subcutánea en ángulo de 45°).',
          'Refuerzos de DPT: 1er refuerzo a los 18 meses y 2do refuerzo a los 4 años.',
          'Fiebre Amarilla (AMA): una sola dosis en la vida es suficiente (no requiere refuerzos cada 10 años).',
          'Vacuna VPH en escolares (niñas y niños): esquema actual de Dosis Única (0.5 ml IM).',
          'Vacuna dTpa en gestantes: obligatoria en CADA embarazo en el tercer trimestre para prevenir tos ferina en el bebé.'
        ],
        clinicalPearl: 'Por qué las Gestantes Reciben dTpa Acelular en Cada Embarazo: Los anticuerpos maternos contra la tos ferina (Bordetella pertussis) decaen rápidamente; vacunar a la madre en el tercer trimestre de cada gestación logra el pico máximo de transferencia placentaria de IgG hacia el feto antes del parto.',
        checkQuestion: {
          question: '¿A qué edades recibe el niño sus 2 dosis de SPR y sus 2 refuerzos de DPT, cómo se aplica la vacuna VPH en escolares y por qué se vacuna a la gestante con dTpa en cada embarazo?',
          options: [
            'SPR a los 2 y 4 meses — VPH en 5 dosis — dTpa para evitar náuseas',
            'SPR a los 12 y 18 meses (vía SC 45°); Refuerzos DPT a los 18 meses y 4 años — VPH en Dosis Única IM para niñas y niños — dTpa en cada embarazo para pasar defensas por la placenta contra la tos ferina del recién nacido',
            'SPR solo en adultos — VPH en gotas — dTpa posparto',
            'Todas se ponen al nacer'
          ],
          correctIndex: 1,
          explanation: 'SPR se aplica a los 12 y 18 m, los refuerzos DPT a los 18 m y 4 años, el VPH es dosis única escolar y la dTpa gestacional protege al neonato del coqueluche.'
        },
        moduleQuiz: [
          { id: 'c4m5q1', question: '¿A qué edades recibe el niño su 1ra y 2da dosis de la vacuna SPR (Sarampión, Papera y Rubeola)?', options: ['A los 2 y 4 meses', 'Al cumplir 1 año (12 meses) y al año y medio (18 meses)', 'A los 5 y 10 años', 'Al nacer'], correctIndex: 1, rationale: 'La 1ra dosis de SPR se administra a los 12 meses y la 2da dosis de consolidación a los 18 meses.' },
          { id: 'c4m5q2', question: '¿Cómo se vacuna actualmente a las niñas y niños en el colegio contra el Virus del Papiloma Humano (VPH)?', options: ['Inyección diaria', 'Con una sola dosis (Dosis Única de 0.5 ml IM) en escolares de 5to de primaria (9 a 13 años)', 'En gotas orales', 'Solo a mayores de 50 años'], correctIndex: 1, rationale: 'El esquema nacional aplica una Dosis Única de vacuna recombinante contra VPH tanto a niñas como a niños.' },
          { id: 'c4m5q3', question: '¿Cuántas veces en la vida necesita vacunarse una persona contra la Fiebre Amarilla (Antiamarílica)?', options: ['Todos los años', 'Una sola vez en la vida es suficiente para quedar protegido para siempre', 'Cada mes', 'Cada vez que viaja'], correctIndex: 1, rationale: 'Una única dosis de vacuna antiamarílica confiere inmunidad protectora permanente de por vida.' }
        ]
=======
        title: 'Política de Frascos Abiertos Multidosis y Bioseguridad en Inmunizaciones',
        part1Title: 'Parte 1: Tiempo de Vigencia de Vacunas Liofilizadas vs. Líquidas Multidosis',
        part2Title: 'Parte 2: Técnica de Inyección Sin Aspiración y Descarte Seguro',
        duration: '6 Horas Lectivas',
        summary: 'Duración máxima de los viales multidosis una vez abiertos o reconstituidos (6 horas vs. 28 días) y bioseguridad en el vacunatorio.',
        content: [
          '1. Vacunas Liofilizadas Reconstituidas (Máximo 6 Horas): Las vacunas que se reconstituyen con diluyente (BCG, SPR, SR, Antiamarílica AMA) carecen de conservantes bacteriostáticos. Una vez reconstituidas deben utilizarse en un máximo de 6 HORAS (o al finalizar la jornada) y luego descartarse.',
          '2. Vacunas Líquidas Multidosis (Hasta 28 Días): Los frascos multidosis líquidos (DPT, Dt, Hepatitis B, IPV, Influenza, APO) pueden utilizarse hasta por 4 semanas (28 días) en el establecimiento siempre que se anote la fecha y hora de apertura, se mantengan entre +2 °C y +8 °C, no hayan vencido y el tapón no se haya sumergido en agua.',
          '3. Técnica Moderna de Vacunación: En la administración intramuscular de vacunas NO se recomienda aspirar el émbolo antes de inyectar, ya que en el deltoides y vasto externo no existen grandes vasos y aspirar incrementa el dolor en el niño.'
        ],
        keyPoints: [
          'Vacunas reconstituidas (BCG, SPR, AMA): duran máximo 6 horas abiertas.',
          'Vacunas líquidas multidosis (DPT, Dt, HvB, Influenza): duran hasta 28 días abiertas en refrigeración si se cumple la técnica aséptica.',
          'Todo diluyente debe estar a la misma temperatura de la vacuna (+2 °C a +8 °C) al momento de reconstituir para evitar el choque térmico.'
        ],
        clinicalPearl: 'Choque Térmico en Reconstitución: Nunca reconstituya una vacuna liofilizada fría (+2 °C a +8 °C) con un diluyente caliente a temperatura ambiente, porque el calor del diluyente inactiva instantáneamente al virus vivo atenuado.',
        checkQuestion: {
          question: 'Una vez reconstituido un frasco multidosis de vacuna BCG o Antiamarílica (AMA), ¿por cuántas horas como máximo puede utilizarse antes de ser descartado?',
          options: [
            'Hasta por 28 días',
            'Máximo 6 horas (conservado entre +2 °C y +8 °C y protegido de la luz)',
            'Hasta por 72 horas',
            'Hasta que se acabe el frasco en una semana'
          ],
          correctIndex: 1,
          explanation: 'Las vacunas liofilizadas reconstituidas (BCG, SPR, AMA) no tienen conservantes y deben desecharse a las 6 horas por riesgo de contaminación bacteriana.'
        }
>>>>>>> Stashed changes
      },
      {
        id: 'm6',
        number: 6,
<<<<<<< Updated upstream
        title: 'Política de Frascos Abiertos (6 Horas vs. 28 Días), Bioseguridad Vacunal y Manejo de ESAVI / Anafilaxia',
        part1Title: 'Parte 1: Reconstitución Segura, Técnica sin Aspiración y Política de Frascos Abiertos',
        part2Title: 'Parte 2: Vigilancia de ESAVI (24 h) y Protocolo de Shock Anafiláctico (Adrenalina IM)',
        duration: '6 Horas Lectivas',
        summary: 'Duración de viales abiertos (6 h en liofilizadas vs. 28 días en líquidas multidosis), técnica de inyección sin aspirar y rescate con Adrenalina IM.',
        content: [
          '1. Reglas de Reconstitución y Técnica sin Aspirar: Toda vacuna liofilizada (BCG, SPR, AMA, Varicela) debe reconstituirse EXCLUSIVAMENTE con el diluyente específico de su propio fabricante enfriado previamente entre +2 °C y +8 °C. Si se limpia la piel con alcohol al 70%, dejar secar por completo antes de inyectar (el alcohol húmedo inactiva los virus vivos). Al inyectar vacunas IM en muslo o deltoides NO SE DEBE ASPIRAR el émbolo hacia atrás (no hay grandes vasos y aspirar aumenta el dolor y lesión tisular).',
          '2. Política de Frascos Abiertos (OMS / MINSA): Grupo 1 - Vacunas Liofilizadas Reconstituidas (BCG, SPR, Fiebre Amarilla, Varicela): duran MÁXIMO 6 HORAS una vez reconstituidas; cumplidas las 6 h se descartan en bolsa roja. Grupo 2 - Vacunas Líquidas Multidosis con Conservante (Hepatitis B multidosis, dT adulto, Influenza multidosis): pueden usarse HASTA POR 28 DÍAS en el establecimiento si se mantienen entre +2 °C y +8 °C, con técnica aséptica y sin sumergir el tapón en agua.',
          '3. Vigilancia de ESAVI y Manejo de Anafilaxia: Todo ESAVI Grave (hospitalización, riesgo vital, anafilaxia) debe notificarse obligatoriamente dentro de las primeras 24 horas a Epidemiología (CDC-MINSA). Ante un Shock Anafiláctico post-vacunal, el fármaco de PRIMERA LÍNEA que salva la vida es la ADRENALINA (Epinefrina) 1:1,000 por vía Intramuscular (IM) en la cara anterolateral del muslo (dosis pediátrica: 0.01 mg/kg; adultos: 0.3 a 0.5 ml IM), junto con piernas elevadas y oxígeno.'
        ],
        tableData: {
          title: 'Política de Frascos Abiertos (OMS/MINSA) y Emergencia Anafiláctica',
          headers: ['Categoría / Emergencia', 'Biológicos / Fármaco', 'Tiempo Máximo / Dosis', 'Regla de Oro de Seguridad'],
          rows: [
            ['Liofilizadas Reconstituidas', 'BCG, SPR (Triple Vírica), Fiebre Amarilla (AMA), Varicela', 'MÁXIMO 6 HORAS tras mezclar', 'Usar solo su diluyente de fábrica (+2° a +8°C). Descartar a las 6 h.'],
            ['Líquidas Multidosis', 'Hepatitis B multidosis, dT adulto, Influenza multidosis', 'HASTA 28 DÍAS tras abrir', 'Mantener entre +2°C y +8°C con técnica estéril y tapón seco.'],
            ['Shock Anafiláctico (ESAVI Grave)', 'Adrenalina (Epinefrina) 1:1,000 acuosa', '0.01 mg/kg IM (Adulto: 0.3-0.5 mg IM)', 'Inyectar en el MUSLO (vasto externo). Notificar ESAVI grave en <24 h.']
          ]
        },
        keyPoints: [
          'Vacunas liofilizadas reconstituidas (BCG, SPR, AMA): duran máximo 6 HORAS abiertas.',
          'Vacunas líquidas multidosis con conservante (HvB, dT, Influenza): duran hasta 28 DÍAS refrigeradas entre +2 °C y +8 °C.',
          'En vacunación intramuscular NO se aspira el émbolo | Jeringas usadas van sin reencapuchar a la caja rígida y viales con restos biológicos a Bolsa Roja.',
          'Medicamento de 1ra línea ante Anafilaxia por vacuna: Adrenalina (Epinefrina) 1:1,000 IM en el muslo. Notificar ESAVI grave en < 24 h.'
        ],
        clinicalPearl: 'Por qué los Antihistamínicos y Corticoides NO Reemplazan a la Adrenalina en la Anafilaxia: La clorfenamina y la hidrocortisona tardan de 30 a 60 minutos en actuar y solo previenen la fase tardía; únicamente la Adrenalina IM en el muslo abre los bronquios y revierte el colapso vascular en minutos.',
        checkQuestion: {
          question: 'Según la Política de Frascos Abiertos, ¿cuánto tiempo máximo dura un vial reconstituido de BCG o SPR, cuánto dura un vial líquido multidosis de dT o Hepatitis B, y cuál es el medicamento de primera línea ante un shock anafiláctico post-vacunal?',
          options: [
            'BCG dura 1 mes — HvB dura 1 año — Se da paracetamol oral',
            'BCG/SPR reconstituidas duran máximo 6 HORAS; líquidas multidosis (HvB/dT) duran hasta 28 DÍAS — En anafilaxia el fármaco salvavidas de 1ra línea es la Adrenalina (Epinefrina) IM en el muslo',
            'Ambas duran 72 horas — En anafilaxia se da agua con azúcar',
            'Se tiran al minuto — Solo se aplica alcohol'
          ],
          correctIndex: 1,
          explanation: 'Las liofilizadas reconstituidas carecen de conservantes y duran máximo 6 horas; las líquidas multidosis duran hasta 28 días; y la Adrenalina IM es la primera línea en anafilaxia.'
        },
        moduleQuiz: [
          { id: 'c4m6q1', question: 'Una vez que preparamos y reconstituimos con su diluyente un frasco de vacuna BCG, SPR o Fiebre Amarilla, ¿cuántas horas como máximo podemos usarlo?', options: ['Hasta 1 mes', 'Máximo 6 horas; cumplido ese tiempo se descarta obligatoriamente', '24 horas', '7 días'], correctIndex: 1, rationale: 'Las vacunas liofilizadas reconstituidas tienen una vigencia máxima de 6 horas.' },
          { id: 'c4m6q2', question: '¿Qué medicamento de emergencia salva la vida y debe colocarse de inmediato como primera línea ante una alergia grave (anafilaxia) post-vacunal?', options: ['Jarabe para la tos', 'Paracetamol', 'Adrenalina (Epinefrina) 1:1,000 inyectada por vía intramuscular en el muslo', 'Agua fría'], correctIndex: 2, rationale: 'La adrenalina intramuscular revierte de inmediato el broncoespasmo y el shock distributivo anafiláctico.' },
          { id: 'c4m6q3', question: 'Un frasco de vacuna líquida multidosis de Hepatitis B o dT adulto con conservante, ¿cuántos días puede seguir usándose en el centro de salud si cumple los requisitos?', options: ['Solo 1 hora', 'Hasta por 28 días, mantenido entre +2 °C y +8 °C bajo técnica aséptica', '5 años', 'Se bota al instante'], correctIndex: 1, rationale: 'La política de frascos abiertos permite usar viales líquidos multidosis con conservante hasta por 28 días.' },
          { id: 'c4m6q4', question: 'Si un paciente presenta un ESAVI Grave (severo) tras vacunarse, ¿dentro de qué plazo es obligatorio notificarlo a Epidemiología?', options: ['Dentro de las primeras 24 horas', 'Al año siguiente', 'Nunca', 'A los 6 meses'], correctIndex: 0, rationale: 'Todo ESAVI severo es de notificación individual obligatoria dentro de las primeras 24 horas.' }
        ]
=======
        title: 'Vigilancia de ESAVI y Manejo de Emergencia del Shock Anafiláctico en el Vacunatorio',
        part1Title: 'Parte 1: Clasificación y Notificación de ESAVI Leves vs. Severos',
        part2Title: 'Parte 2: Uso de Adrenalina 1:1000 Intramuscular en Anafilaxia Post-Vacunal',
        duration: '6 Horas Lectivas',
        summary: 'Diferenciación clínica entre síncope vasovagal y anafilaxia, y administración inmediata de Adrenalina intramuscular.',
        content: [
          '1. Definición de ESAVI: Evento Supuestamente Atribuido a la Vacunación o Inmunización. Los ESAVI leves (dolor local, febrícula, eritema) se manejan con medios físicos o paracetamol. Los ESAVI severos (anafilaxia, convulsiones, hospitalización) deben notificarse dentro de las primeras 24 horas.',
          '2. Observación Post-Vacunal de 15 a 30 Minutos: Todo paciente vacunado debe permanecer en observación de 15 a 30 minutos para vigilar reacciones alérgicas inmediatas.',
          '3. Tratamiento de Primera Línea del Shock Anafiláctico: Si el paciente presenta urticaria generalizada, edema de glotis/labios, sibilancias, estridor e hipotensión, el fármaco salvavidas de primera elección es la ADRENALINA (Epinefrina 1 mg/ml = 1:1000) por vía INTRAMUSCULAR en la cara anterolateral del muslo (dosis: 0.01 mg/kg en niños; 0.3 a 0.5 ml en adultos).'
        ],
        keyPoints: [
          'ESAVI severo: notificación epidemiológica obligatoria en menos de 24 horas.',
          'Medicamento de primera línea en shock anafiláctico: Adrenalina 1:1000 vía Intramuscular en muslo (vasto externo).',
          'Los corticoides (hidrocortisona/dexametasona) y antihistamínicos (clorfenamina) son de segunda línea; nunca reemplazan a la adrenalina.'
        ],
        clinicalPearl: 'Diferencia entre Desmayo (Síncope Vasovagal) y Anafilaxia: En el desmayo por miedo a la aguja el paciente está pálido, sudoroso, con pulso LENTO (bradicardia) y sin ronchas ni sibilancias. En la anafilaxia hay ronchas/urticaria, hinchazón de cara/garganta, ahogo y pulso RÁPIDO (taquicardia).',
        checkQuestion: {
          question: 'Si a los 10 minutos de recibir una vacuna el paciente presenta ronchas en todo el cuerpo, estridor laríngeo, dificultad para respirar e hipotensión (Shock Anafiláctico), ¿cuál es el medicamento de primera elección inmediata?',
          options: [
            'Paracetamol en gotas',
            'Adrenalina (Epinefrina 1:1000) por vía intramuscular en el muslo',
            'Solo Clorfenamina oral',
            'Agua con azúcar'
          ],
          correctIndex: 1,
          explanation: 'La Adrenalina 1:1000 intramuscular en el vasto externo revierte en minutos el broncoespasmo y el colapso vascular de la anafilaxia.'
        }
>>>>>>> Stashed changes
      }
    ],
    finalExam: [
      {
        id: 'q1',
<<<<<<< Updated upstream
        question: '¿Cuál es el rango oficial de temperatura para conservar las vacunas en el nivel local (establecimientos de salud) y qué ocurre si una vacuna con adyuvante de aluminio (Pentavalente, DPT, HvB) se congela a < 0 °C?',
        options: [
          '-15 °C a 0 °C — Se vuelve más potente',
          'Estable entre +2 °C y +8 °C — Si se congela (< 0 °C) el adyuvante de aluminio precipita en grumos dañándose de forma irreversible',
          '+10 °C a +25 °C — No le pasa nada al congelarse',
          'Se guarda en una refrigeradora doméstica con geles azules'
        ],
        correctIndex: 1,
        rationale: 'El rango normado es de +2 °C a +8 °C; la congelación destruye irreversiblemente las vacunas con sales de aluminio.'
      },
      {
        id: 'q2',
        question: '¿Cómo se comprueba que un paquete frío de agua está adecuadamente acondicionado a 0 °C antes de armar el termo, y qué significa que la Prueba de Agitación (Shake Test) salga POSITIVA?',
        options: [
          'Cuando tiene escarcha blanca — Shake Test positivo significa que está buena',
          'Cuando al agitarlo se escucha y observa agua líquida moviéndose con el hielo ("choc-choc" = 0 °C) — Shake Test POSITIVO significa que la vacuna sedimenta rápido porque se congeló y NO debe usarse',
          'Cuando el agua está tibia — No importa el Shake Test',
          'Usando paquetes con sal y alcohol'
        ],
        correctIndex: 1,
        rationale: 'El sonido de agua líquida confirma 0 °C exactos; y un Shake Test positivo indica floculación por congelamiento (baja técnica).'
      },
      {
        id: 'q3',
        question: 'Según la NTS N° 196-MINSA, ¿cuál es el peso mínimo del recién nacido para recibir BCG y Hepatitis B, cómo se administra el esquema primario de Polio (2, 4 y 6 meses) y qué se hace si el bebé regurgita la vacuna de Rotavirus?',
        options: [
          'Peso ≥ 1,500 gramos — Polio se aplica con vacuna IPV inyectable IM a los 2, 4 y 6 meses — Si regurgita el Rotavirus NO se repite la dosis',
          'Peso 500 g — Polio solo en gotas — Se le da otro frasco de Rotavirus',
          'Peso 3,000 g — En el glúteo — Se suspende el calendario',
          'Solo se vacuna al cumplir 1 año'
        ],
        correctIndex: 0,
        rationale: 'El recién nacido requiere ≥ 1,500 g; el esquema primario de polio de 2, 4 y 6 meses es 100% IPV inyectable; y el Rotavirus regurgitado no se readministra.'
      },
      {
        id: 'q4',
        question: '¿En qué etapa del embarazo se administra obligatoriamente la vacuna dTpa a toda gestante y cuál es el esquema actual para la vacuna contra el VPH en escolares?',
        options: [
          'dTpa en el tercer trimestre (27-36 semanas) en CADA embarazo para proteger al neonato contra la tos ferina — VPH en Dosis Única IM para niñas y niños de 5to de primaria (9 a 13 años)',
          'dTpa solo una vez en la vida — VPH en 4 dosis solo para adultos',
          'Están prohibidas las vacunas en el embarazo',
          'VPH se administra por vía oral al nacer'
        ],
        correctIndex: 0,
        rationale: 'La dTpa se aplica en cada gestación para transferir IgG transplacentaria contra Bordetella pertussis, y el VPH se aplica en dosis única escolar.'
      },
      {
        id: 'q5',
        question: 'De acuerdo con la Política de Frascos Abiertos (OMS/MINSA) y el manejo de ESAVI, marque la alternativa CORRECTA:',
        options: [
          'Las vacunas liofilizadas reconstituidas (BCG, SPR, AMA) duran máximo 6 horas; las líquidas multidosis con conservante (HvB, dT) duran hasta 28 días (+2°C a +8°C); y ante anafilaxia el fármaco de 1ra línea es Adrenalina 1:1,000 IM en el muslo',
          'Todas las vacunas abiertas duran 6 meses — La anafilaxia se trata solo con paracetamol',
          'Las vacunas se reconstituyen con agua de caño — No se reportan los ESAVI',
          'Se debe aspirar fuerte el émbolo y reencapuchar todas las agujas'
        ],
        correctIndex: 0,
        rationale: 'Las liofilizadas reconstituidas se descartan a las 6 h, las líquidas multidosis con conservante duran hasta 28 días y la Adrenalina IM es el tratamiento de primera línea en anafilaxia.'
=======
        question: '¿Cuál es el rango normativo de temperatura para conservar las vacunas en el nivel local y cómo se verifica que un paquete frío está correctamente acondicionado (0 °C)?',
        options: [
          'De -15 °C a 0 °C — Con escarcha dura',
          'De +2 °C a +8 °C — Cuando al agitar el paquete frío se escucha y observa el agua moviéndose dentro',
          'De +8 °C a +15 °C — Tibio al tacto',
          'De 0 °C a +4 °C — Recién salido del congelador'
        ],
        correctIndex: 1,
        rationale: 'Las vacunas se conservan entre +2 °C y +8 °C, y el paquete frío debe acondicionarse hasta 0 °C (presencia de agua líquida audible al agitar).'
      },
      {
        id: 'q2',
        question: '¿Cuáles son las dos vacunas del recién nacido, por qué vías se administran y a partir de qué peso mínimo según la NTS N° 196-MINSA?',
        options: [
          'SPR y Rotavirus desde los 3,000 g',
          'BCG (Intradérmica en deltoides derecho) y Hepatitis B (Intramuscular en vasto externo del muslo), a partir de 1,500 g de peso',
          'Pentavalente y Polio por vía subcutánea',
          'BCG intramuscular en el glúteo'
        ],
        correctIndex: 1,
        rationale: 'El recién nacido con peso ≥ 1,500 g recibe BCG intradérmica (27G x 1/2") y HvB intramuscular en vasto externo (25G x 5/8").'
      },
      {
        id: 'q3',
        question: '¿Qué grupo de vacunas se destruye irreversiblemente si se congela (< 0 °C) y cuál es el tiempo máximo de uso de un frasco reconstituido de BCG o SPR?',
        options: [
          'Vacunas orales — Duran 30 días',
          'Vacunas con adyuvante de aluminio (Pentavalente, DPT, HvB, VPH, Neumococo) — Las reconstituidas (BCG, SPR, AMA) duran máximo 6 horas',
          'Solo la vacuna BCG se daña al congelarse — Dura 7 días',
          'Ninguna vacuna se daña con el hielo'
        ],
        correctIndex: 1,
        rationale: 'Los adyuvantes de aluminio precipitan al congelarse; y las vacunas liofilizadas reconstituidas deben descartarse a las 6 horas.'
      },
      {
        id: 'q4',
        question: '¿Por qué vía se administran las vacunas SPR, Varicela y Antiamarílica (AMA) al año de edad, y en qué semanas recibe la gestante la vacuna Tdap?',
        options: [
          'Vía intradérmica — Gestante en semana 8',
          'Vía Subcutánea (ángulo de 45° en región deltoidea) — Gestante recibe Tdap entre las 20 y 36 semanas de gestación',
          'Vía oral — Gestante no recibe vacunas',
          'Vía endovenosa — Gestante en el puerperio'
        ],
        correctIndex: 1,
        rationale: 'Las vacunas virales atenuadas (SPR, Varicela, AMA) se aplican vía subcutánea a 45°, y la Tdap materna se aplica entre las 20 y 36 semanas.'
      },
      {
        id: 'q5',
        question: 'Ante un Shock Anafiláctico post-vacunal inmediato, ¿cuál es el fármaco de primera línea que salva la vida del paciente?',
        options: [
          'Dexametasona oral',
          'Adrenalina (Epinefrina 1:1000) por vía intramuscular en la cara anterolateral del muslo',
          'Paracetamol endovenoso',
          'Loratadina en jarabe'
        ],
        correctIndex: 1,
        rationale: 'La Adrenalina 1:1000 intramuscular es el único fármaco de primera línea que revierte de inmediato el broncoespasmo y el shock anafiláctico.'
>>>>>>> Stashed changes
      }
    ]
  },

  // ==========================================================================
  // CURSO 5: FARMACOLOGÍA BÁSICA Y EFECTOS ADVERSOS FRECUENTES (40 HORAS - 6 MÓDULOS)
  // ==========================================================================
  {
    id: 'farmacologia-efectos-adversos',
    code: 'EC-CUR-005',
    title: 'Farmacología Básica y Efectos Adversos Frecuentes',
<<<<<<< Updated upstream
    subtitle: 'Farmacocinética LADME, receptores, AINEs vs. Opioides (Naloxona), antibióticos críticos, fármacos cardiovasculares y de rescate (Flumazenil, Atropina).',
    category: 'Farmacología Clínica & Vigilancia',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'Farmacovigilancia DIGEMID-MINSA / OMS Seguridad de Medicamentos',
    badgeColor: 'from-violet-500 to-purple-600',
    manualPdfUrl: '/manuales/manual-farmacologia-efectos-adversos.pdf',
=======
    subtitle: 'Farmacocinética, AINEs, Opioides, Antimicrobianos, Cardiovasculares, Insulinas, Corticoides, Toxicología Clínica y Antídotos.',
    category: 'Farmacología Clínica',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'Sistema Peruano de Farmacovigilancia DIGEMID / OMS',
    badgeColor: 'from-violet-500 to-purple-600',
    manualPdfUrl: '/manuales/manual-farmacologia-basica.pdf',
>>>>>>> Stashed changes
    modules: [
      {
        id: 'm1',
        number: 1,
<<<<<<< Updated upstream
        title: 'Farmacocinética (Proceso LADME), Biodisponibilidad y Farmacodinamia de Receptores',
        part1Title: 'Parte 1: Etapas del Proceso LADME y Efecto de Primer Paso Hepático',
        part2Title: 'Parte 2: Agonistas vs. Antagonistas e Índice Terapéutico Estrecho',
        duration: '6 Horas Lectivas',
        summary: 'Comprensión del ciclo LADME (Liberación, Absorción, Distribución, Metabolismo hepático y Excreción renal) y acción sobre receptores.',
        content: [
          '1. El Proceso LADME y Biodisponibilidad: La Farmacocinética estudia "lo que el cuerpo le hace al fármaco" en 5 etapas: Liberación, Absorción, Distribución (unión a albúmina plasmática), Metabolismo o Biotransformación (principalmente en el hígado vía Citocromo P450; los fármacos orales sufren el "efecto de primer paso hepático") y Excreción (principalmente por vía renal según la tasa de filtración glomerular). La vía Endovenosa (EV) tiene una biodisponibilidad del 100% inmediata.',
          '2. Farmacodinamia e Índice Terapéutico: Estudia "lo que el fármaco le hace al cuerpo". Un Agonista se une al receptor y lo activa (ej. Morfina o Salbutamol); un Antagonista bloquea al receptor sin activarlo (ej. Naloxona o Flumazenil). Los fármacos de Estrecho Margen Terapéutico (Digoxina, Warfarina, Litio, Fenitoína, Vancomicina) tienen su dosis efectiva muy cerca de su dosis tóxica.'
        ],
        tableData: {
          title: 'Etapas del Proceso LADME e Implicancias Clínicas en Enfermería',
          headers: ['Etapa LADME', 'Órgano / Proteína Clave', 'Condición de Riesgo del Paciente', 'Impacto Clínico a Vigilar'],
          rows: [
            ['Absorción', 'Vía EV (100%) vs. Vía Oral', 'Vómitos, shock (mala perfusión SC/IM)', 'En shock usar exclusivamente vía EV (la vía SC/IM no se absorbe).'],
            ['Distribución', 'Albúmina Plasmática', 'Desnutrición / Hipoalbuminemia (<3 g/dl)', 'Aumenta la fracción libre del fármaco provocando toxicidad.'],
            ['Metabolismo', 'Hígado (Citocromo P450)', 'Cirrosis o Insuficiencia Hepática', 'Acumulación de sedantes y paracetamol (riesgo hepatotóxico).'],
            ['Excreción', 'Riñón (Filtrado Glomerular)', 'Insuficiencia Renal / Adulto Mayor', 'Ajustar dosis de Aminoglucósidos y Vancomicina por creatinina.']
          ]
        },
        keyPoints: [
          'LADME = Liberación, Absorción, Distribución, Metabolismo (hígado) y Excreción (riñón).',
          'Biodisponibilidad de la vía Endovenosa (EV): 100% inmediata (no sufre efecto de primer paso hepático).',
          'Agonista = activa el receptor | Antagonista competitivo = bloquea el receptor (ej. antídotos como Naloxona).'
        ],
        clinicalPearl: 'Peligro de la Hipoalbuminemia en Pacientes Críticos: Fármacos como la Fenitoína o la Warfarina viajan unidos en un 90-99% a la albúmina. En un paciente desnutrido o séptico con albúmina baja, queda mucho más fármaco "libre" activo en sangre, causando intoxicación con dosis normales.',
        checkQuestion: {
          question: '¿Qué vía de administración alcanza una biodisponibilidad del 100% de forma inmediata evitando el efecto de primer paso hepático, y cuál es el órgano principal de excreción farmacológica?',
          options: [
            'Vía oral — El pulmón',
            'Vía Endovenosa (EV) — El riñón (excreción renal)',
            'Vía subcutánea — El bazo',
            'Vía tópica — El estómago'
          ],
          correctIndex: 1,
          explanation: 'La vía EV deposita el 100% del fármaco directamente en la circulación sistémica y el riñón es el órgano excretor primordial.'
        },
        moduleQuiz: [
          { id: 'c5m1q1', question: '¿Qué significa la sigla LADME en farmacocinética clínica?', options: ['Lavar, Aspirar, Diluir, Medir, Evaluar', 'Liberación, Absorción, Distribución, Metabolismo y Excreción', 'Líquidos, Ampollas, Dosis, Mililitros, Efectos', 'Laboratorio de Medicamentos'], correctIndex: 1, rationale: 'LADME resume las 5 fases cinéticas que atraviesa todo fármaco en el organismo.' },
          { id: 'c5m1q2', question: '¿Cómo se denomina al fármaco que se une a un receptor celular para bloquearlo e impedir el efecto de otra sustancia (como los antídotos)?', options: ['Agonista puro', 'Antagonista farmacológico', 'Catalizador', 'Vitamina'], correctIndex: 1, rationale: 'Los antagonistas ocupan el receptor sin activarlo, revirtiendo la acción de los agonistas.' },
          { id: 'c5m1q3', question: '¿Cuál es el principal órgano encargado de la biotransformación (metabolismo) de los medicamentos?', options: ['El corazón', 'El hígado (sistema enzimático Citocromo P450)', 'La vejiga', 'El páncreas'], correctIndex: 1, rationale: 'El hígado transforma los fármacos liposolubles en metabolitos hidrosolubles para que puedan eliminarse.' }
=======
        title: 'Farmacocinética (LADME), Farmacodinamia y La Regla de los 10 Correctos',
        part1Title: 'Parte 1: Farmacocinética, Farmacodinamia y Seguridad Terapéutica',
        part2Title: 'Parte 2: Seguridad Asistencial: La Regla de los 10 Correctos',
        duration: '6 Horas Lectivas',
        summary: 'Comprender el recorrido del fármaco en el organismo (LADME), la acción sobre receptores y la aplicación de los 10 Correctos.',
        content: [
          '1. Farmacocinética (LADME): Estudia lo que el cuerpo le hace al fármaco: Liberación, Absorción (la vía IV tiene biodisponibilidad del 100% inmediata), Distribución (unida a la proteína Albúmina en sangre; solo la fracción libre es activa), Metabolismo (principalmente en el Hígado por enzimas CYP450; efecto de primer paso hepático en vía oral) y Excreción (principalmente por los riñones en la orina).',
          '2. Farmacodinamia y Margen Terapéutico: Estudia lo que el fármaco le hace al cuerpo. Un fármaco agonista estimula al receptor; un antagonista lo bloquea para frenar un efecto (ej. naloxona frente a opioides). Los fármacos de estrecho margen terapéutico (digoxina, litio, fenitoína, warfarina) tienen su dosis curativa muy cerca de la dosis tóxica.',
          '3. Los 10 Correctos y Regla Temporal del Registro: El medicamento se registra en la hoja de enfermería SIEMPRE DESPUÉS de haber sido administrado (nunca por adelantado). Se debe interrogar alergias previas y vigilar al paciente los primeros 15 a 30 minutos.'
        ],
        tableData: {
          title: 'Etapas del Proceso LADME y Barreras de los 10 Correctos',
          headers: ['Etapa / Principio', 'Mecanismo Fisiológico / Acción Técnica', 'Implicancia Clínica en Enfermería'],
          rows: [
            ['Absorción y Primer Paso', 'Vía IV = 100% biodisponibilidad inmediata', 'En vía oral parte del fármaco se inactiva en el hígado antes de llegar a circulación general.'],
            ['Distribución (Albúmina)', 'Unión a proteínas plasmáticas vs. Fracción libre', 'En desnutridos (hipoalbuminemia) aumenta la fracción libre y el riesgo de toxicidad.'],
            ['Metabolismo y Excreción', 'Hígado (biotransformación) y Riñón (orina)', 'En falla renal o hepática, o en neonatos/ancianos, se debe ajustar la dosis.'],
            ['Registro Post-Administración', 'Anotar hora, dosis y firma DESPUÉS de aplicar', 'Anotar antes genera errores graves si el paciente vomita o rechaza la dosis.']
          ]
        },
        keyPoints: [
          'Vía con 100% de absorción inmediata sin primer paso hepático: Vía Intravenosa (IV).',
          'Órgano principal de metabolismo: Hígado | Órgano principal de excreción: Riñones | Proteína transportadora: Albúmina.',
          'Un fármaco antagonista se une al receptor y lo bloquea sin activarlo (actúa como antídoto).',
          'Nunca registrar un medicamento en el kardex antes de habérselo administrado realmente al paciente.'
        ],
        clinicalPearl: 'Efecto de Primer Paso Hepático y Margen Terapéutico: Los fármacos absorbidos en estómago e intestino viajan por la vena porta al hígado, donde sufren inactivación parcial antes de llegar a la sangre general. Los medicamentos de estrecho margen terapéutico (digoxina, litio, fenitoína) presentan dosis terapéuticas y tóxicas sumamente cercanas, exigiendo monitorización constante.',
        checkQuestion: {
          question: '¿Qué significa que un medicamento como la Digoxina o la Fenitoína tenga un "estrecho margen terapéutico"?',
          options: [
            'Que la pastilla es muy pequeña',
            'Que la dosis que cura está muy cerca de la dosis que causa intoxicación grave',
            'Que no tiene efectos adversos',
            'Que solo se vende con descuento'
          ],
          correctIndex: 1,
          explanation: 'Un estrecho margen terapéutico significa que pequeñas variaciones en la dosis o excreción pueden llevar rápidamente a toxicidad severa.'
        },
        moduleQuiz: [
          { id: 'c5m1q1', question: '¿Qué estudia la farmacocinética en el cuerpo humano?', options: ['Las marcas comerciales de pastillas', 'El camino del fármaco: absorción, distribución, metabolismo y eliminación', 'El precio de venta en farmacia', 'La forma de las ampollas'], correctIndex: 1, rationale: 'La farmacocinética estudia cómo ingresa, se reparte, se transforma y se elimina el medicamento en el organismo.' },
          { id: 'c5m1q2', question: '¿Qué vía de inyección hace que el medicamento llegue al 100% y de forma inmediata a la sangre?', options: ['Tomar pastillas con agua', 'Pomadas en la piel', 'Vía intravenosa (endovenosa directa)', 'Vía oral en jarabe'], correctIndex: 2, rationale: 'Al inyectarse directo en la vena, todo el fármaco entra a la circulación sin tener que absorberse en el estómago.' },
          { id: 'c5m1q3', question: '¿Cuál es el órgano principal encargado de transformar y metabolizar la mayoría de medicamentos?', options: ['El corazón', 'El hígado', 'El estómago', 'La piel'], correctIndex: 1, rationale: 'El hígado procesa y transforma los medicamentos para que el cuerpo pueda utilizarlos o expulsarlos fácilmente.' },
          { id: 'c5m1q4', question: '¿Qué significa el "efecto de primer paso hepático" al tomar una pastilla?', options: ['Que da dolor en el brazo', 'Que parte de la pastilla se destruye en el hígado antes de llegar a la sangre', 'Que el medicamento engorda', 'Que cura en un segundo'], correctIndex: 1, rationale: 'Todo lo absorbido en el intestino pasa primero por el hígado, donde una fracción del fármaco se inactiva.' },
          { id: 'c5m1q5', question: 'En farmacología, ¿qué hace un medicamento "antagonista"?', options: ['Aumenta el apetito', 'Se une a un receptor y lo bloquea para frenar un efecto', 'Es un calmante natural', 'Cura bacterias'], correctIndex: 1, rationale: 'Los antagonistas bloquean receptores (como la naloxona, que frena la intoxicación por opioides).' },
          { id: 'c5m1q6', question: '¿Qué significa que un medicamento tenga un "estrecho margen terapéutico"?', options: ['Que la pastilla es muy delgada', 'Que la dosis que cura está muy cerca de la dosis que envenena o causa toxicidad', 'Que no tiene efectos secundarios', 'Que es muy barato'], correctIndex: 1, rationale: 'Requiere mucho cuidado porque un pequeño aumento en la dosis puede provocar una intoxicación severa.' },
          { id: 'c5m1q7', question: '¿Cuál es la principal proteína de la sangre a la que se pegan los fármacos para viajar por el cuerpo?', options: ['Glóbulos blancos', 'Calcio', 'Albúmina', 'Azúcar'], correctIndex: 2, rationale: 'La albúmina transporta a los medicamentos; la porción libre que no está unida es la que produce el efecto terapéutico.' },
          { id: 'c5m1q8', question: '¿Por qué órgano se eliminan y orinan la mayoría de los medicamentos ya utilizados?', options: ['Por los pulmones al toser', 'Por los riñones a través de la orina', 'Por el cabello', 'Por las uñas'], correctIndex: 1, rationale: 'Los riñones filtran la sangre y expulsan los medicamentos y toxinas disueltos en la orina.' },
          { id: 'c5m1q9', question: 'Dentro de los 10 correctos, ¿cuándo se debe anotar en la hoja médica que ya se puso una inyección?', options: ['Dos horas antes de entrar al cuarto', 'Inmediatamente después de haberla administrado al paciente', 'Al día siguiente', 'Solo si el paciente llora'], correctIndex: 1, rationale: 'Anotar antes es peligroso porque el paciente podría rechazar el fármaco o vomitarlo y quedaría registrado como aplicado.' },
          { id: 'c5m1q10', question: '¿Por qué siempre debemos preguntar el nombre completo al paciente antes de inyectarle su medicina?', options: ['Para saber si tiene buena voz', 'Para asegurarnos de que es el paciente correcto y no equivocarnos de persona', 'Para ver si recuerda su cumpleaños', 'Por cortesía social'], correctIndex: 1, rationale: 'Verificar nombre y brazalete evita aplicar por error medicamentos de otra cama o historia clínica.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm2',
        number: 2,
<<<<<<< Updated upstream
        title: 'Analgésicos, AINEs, Paracetamol (N-Acetilcisteína) y Opioides (Tríada y Naloxona)',
        part1Title: 'Parte 1: Escalera Analgésica OMS, Riesgos de los AINEs y Paracetamol',
        part2Title: 'Parte 2: Opioides Mayores/Menores, Tríada de Intoxicación y Antídoto Naloxona',
        duration: '8 Horas Lectivas',
        summary: 'Vigilancia de efectos adversos de AINEs (úlcera y falla renal), Metamizol (hipotensión), Paracetamol (hepatotoxicidad) y Opioides (depresión respiratoria).',
        content: [
          '1. AINEs, Metamizol y Paracetamol: Los AINEs (Ketorolaco, Ibuprofeno, Naproxeno, Diclofenaco) inhiben las enzimas COX-1 y COX-2; su uso prolongado (>5 días con Ketorolaco) provoca úlcera y hemorragia digestiva alta, nefrotoxicidad (falla renal aguda) y aumento de la presión arterial. El Metamizol (Dipirona) EV rápido provoca hipotensión arterial severa y riesgo de agranulocitosis. El Paracetamol es seguro para el estómago y riñón, pero en sobredosis (>4 g/día en adultos) causa necrosis hepática fulminante; su antídoto específico es la N-Acetilcisteína.',
          '2. Opioides (Tramadol, Morfina, Fentanilo) y Naloxona: Los opioides actúan sobre receptores Mu (µ) del SNC. Efectos adversos frecuentes: náuseas/vómitos (especialmente Tramadol EV rápido), estreñimiento, retención urinaria y sedación. La Intoxicación Aguda por Opioides se presenta con la TRÍADA CLÁSICA: 1) Depresión respiratoria (<10-12 rpm), 2) Pupilas puntiformes (miosis extrema) y 3) Coma/estupor. Su antídoto específico es la NALOXONA (ampolla 0.4 mg EV).'
        ],
        tableData: {
          title: 'Analgésicos Hospitalarios, Efectos Adversos Críticos y Antídotos Oficiales',
          headers: ['Grupo / Fármaco', 'Efecto Adverso Crítico a Vigilar', 'Regla de Administración Segura', 'Antídoto Específico'],
          rows: [
            ['Paracetamol (Acetaminofén)', 'Hepatotoxicidad / Necrosis hepática (>4 g/día)', 'Dosis máx adulto: 4 g/día (pediatría 10-15 mg/kg/dosis).', 'N-Acetilcisteína (NAC)'],
            ['AINEs (Ketorolaco, Diclofenaco)', 'Hemorragia digestiva alta y Falla Renal Aguda', 'No usar Ketorolaco por más de 3 a 5 días; evitar en ERC.', 'Suspensión + IBP (Omeprazol)'],
            ['Metamizol (Dipirona)', 'Hipotensión arterial brusca y Agranulocitosis', 'Diluir y administrar EV lento en 20 a 30 minutos.', 'Cristaloides + soporte PA'],
            ['Opioides (Morfina, Fentanilo)', 'Depresión respiratoria (<12 rpm) y Miosis', 'Vigilar FR y SpO2. Fentanilo en bolo rápido causa tórax leñoso.', 'NALOXONA (0.4 mg EV)']
          ]
        },
        keyPoints: [
          'Dosis máxima de Paracetamol en adulto sano: 4 gramos en 24 horas | Antídoto por sobredosis: N-Acetilcisteína.',
          'Tríada de intoxicación por Opioides (Morfina/Fentanilo): Depresión respiratoria + Miosis puntiforme + Depresión del sensorio | Antídoto: NALOXONA.',
          'El Metamizol EV rápido produce caída brusca de la presión arterial (hipotensión).',
          'El Fentanilo administrado en bolo EV rápido puede causar rigidez de la pared torácica ("tórax leñoso").'
        ],
        clinicalPearl: 'Cómo Evitar los Vómitos por Tramadol y la Hipotensión por Metamizol: Nunca pases Tramadol ni Metamizol en bolo directo rápido. Dilúyelos en 50-100 ml de NaCl 0.9% y pásalos en 30 minutos; en el caso del Tramadol, suele asociarse con Dimenhidrinato o Metoclopramida según prescripción.',
        checkQuestion: {
          question: '¿Cuál es la tríada clínica de intoxicación aguda por Opioides (como Morfina o Fentanilo), cuál es su antídoto específico y cuál es el antídoto para la intoxicación por Paracetamol?',
          options: [
            'Fiebre, tos y diarrea — Antídoto Atropina — Antídoto Vitamina K',
            'Depresión respiratoria, pupilas mióticas puntiformes y estupor/coma — Antídoto de Opioides: NALOXONA — Antídoto de Paracetamol: N-ACETILCISTEÍNA',
            'Hipertensión y midriasis — Antídoto Flumazenil — Antídoto Protamina',
            'Taquicardia y sudoración — Antídoto Adrenalina'
          ],
          correctIndex: 1,
          explanation: 'Los opioides producen depresión respiratoria, miosis y coma que revierten con Naloxona; la hepatotoxicidad por paracetamol se trata con N-Acetilcisteína.'
        },
        moduleQuiz: [
          { id: 'c5m2q1', question: '¿Cuál es el efecto adverso hemodinámico más frecuente si se administra Metamizol (Dipirona) por vía endovenosa de forma rápida?', options: ['Crisis hipertensiva', 'Hipotensión arterial severa y diaforesis', 'Aumento de glucosa', 'Ceguera'], correctIndex: 1, rationale: 'El metamizol EV rápido induce vasodilatación periférica brusca e hipotensión arterial.' },
          { id: 'c5m2q2', question: '¿Cuál es el antídoto específico para revertir la depresión respiratoria causada por sobredosis de Morfina, Fentanilo o Tramadol?', options: ['Flumazenil', 'Naloxona', 'Atropina', 'Sulfato de protamina'], correctIndex: 1, rationale: 'La Naloxona es el antagonista competitivo puro de los receptores opioides Mu.' },
          { id: 'c5m2q3', question: '¿Qué órgano vital resulta gravemente dañado ante una sobredosis de Paracetamol (>4 g/día en adultos) y cuál es su antídoto?', options: ['El pulmón — Salbutamol', 'El hígado (necrosis hepática) — Antídoto: N-Acetilcisteína', 'El oído — Furosemida', 'El hueso — Calcio'], correctIndex: 1, rationale: 'El metabolito tóxico NAPQI del paracetamol agota el glutatión hepático; la N-Acetilcisteína repone el glutatión.' }
=======
        title: 'Analgésicos, AINEs, Paracetamol y Opioides (Tríada y Reversión con Naloxona)',
        part1Title: 'Parte 1: Analgésicos, AINEs y Paracetamol',
        part2Title: 'Parte 2: Analgésicos Opioides y Reversión de Emergencia',
        duration: '8 Horas Lectivas',
        summary: 'Diferencias entre Paracetamol, AINEs (inhibidores COX) y Opioides (Morfina, Fentanilo, Tramadol), sus toxicidades y antídotos.',
        content: [
          '1. AINEs vs. Paracetamol: Los AINEs (Ibuprofeno, Ketorolaco, Diclofenaco, Naproxeno) inhiben las enzimas COX-1 y COX-2; al bloquear la COX-1 reducen el moco gástrico y el flujo renal, causando úlceras/sangrado digestivo e insuficiencia renal (el Ketorolaco no debe usarse por más de 5 días). El Paracetamol es analgésico y antipirético sin dañar el estómago ni las plaquetas (de elección en Dengue); su dosis máxima en adultos es 4 g/día y su antídoto en sobredosis hepática es la N-acetilcisteína (NAC).',
          '2. Aspirina y Síndrome de Reye: El Ácido Acetilsalicílico (Aspirina) está contraindicado en niños con infecciones virales (gripe, varicela) por riesgo de Síndrome de Reye (encefalopatía y falla hepática letal).',
          '3. Analgésicos Opioides y Tríada de Intoxicación: La Morfina, Fentanilo y Tramadol actúan sobre receptores Mu. Su sobredosis produce la Tríada Clásica: 1) Miosis puntiforme (pupilas en punta de alfiler); 2) Depresión del sensorio (coma); 3) Depresión respiratoria severa (<8-10 rpm). Su antídoto específico endovenoso es la NALOXONA. Además, el uso crónico de opioides causa estreñimiento severo que nunca genera tolerancia.'
        ],
        tableData: {
          title: 'Comparación de Analgésicos y Tríada de Intoxicación por Opioides',
          headers: ['Fármaco / Síndrome', 'Característica Clínica Clave', 'Precaución y Antídoto Específico'],
          rows: [
            ['Paracetamol', 'Analgésico y antipirético; seguro en Dengue', 'Dosis máx: 4 g/día (hepatotóxico en sobredosis). Antídoto: N-acetilcisteína (NAC).'],
            ['AINEs (Ketorolaco, Ibuprofeno)', 'Inhiben COX-1 y COX-2 (antiinflamatorios)', 'Gastrolesivos y nefrotóxicos. Ketorolaco: máximo 5 días. Contraindicados en Dengue.'],
            ['Opioides (Morfina, Fentanilo)', 'Dolor severo; causan estreñimiento constante', 'Tríada de sobredosis: Miosis puntiforme + Coma + Depresión respiratoria (<8-10 rpm).'],
            ['Rescate de Opioides', 'Depresión respiratoria por Morfina/Fentanilo', 'ANTÍDOTO: NALOXONA IV (revierte la apnea en 1 a 2 minutos) + ventilación.']
          ]
        },
        keyPoints: [
          'En casos de Dengue: dar solo Paracetamol (prohibidos los AINEs y Aspirina por riesgo de hemorragia).',
          'Dosis máxima de Paracetamol en adultos: 4 gramos/día | Antídoto de Paracetamol: N-acetilcisteína (NAC).',
          'Tríada de intoxicación por Morfina/Fentanilo: pupilas en punta de alfiler (miosis), coma y depresión respiratoria.',
          'Antídoto específico de los opioides: Naloxona.'
        ],
        clinicalPearl: 'Estreñimiento por Opioides (Efecto sin Tolerancia): A diferencia de las náuseas o la somnolencia (que mejoran con los días al adaptarse el cuerpo), el estreñimiento por opioides nunca desaparece por tolerancia. Requiere siempre la indicación preventiva de abundantes líquidos, fibra y laxantes osmóticos (lactulosa).',
        checkQuestion: {
          question: '¿Cómo se encuentran las pupilas en una persona intoxicada por sobredosis de Morfina o Fentanilo y cuál es el antídoto de emergencia?',
          options: [
            'Pupilas dilatadas — Antídoto: Atropina',
            'Pupilas muy pequeñas como punta de alfiler (miosis puntiforme) — Antídoto: Naloxona',
            'Pupilas amarillas — Antídoto: Vitamina K',
            'Pupilas normales — Antídoto: Flumazenil'
          ],
          correctIndex: 1,
          explanation: 'La sobredosis de opioides produce miosis puntiforme y depresión respiratoria letal, que se revierte rápidamente con Naloxona IV.'
        },
        moduleQuiz: [
          { id: 'c5m2q1', question: '¿Cómo calman el dolor los medicamentos AINEs como el Ibuprofeno o Diclofenaco?', options: ['Adormecen los músculos del cuerpo', 'Frenan la inflamación al bloquear las enzimas COX del cuerpo', 'Bajan el azúcar en la sangre', 'Matan las bacterias de la garganta'], correctIndex: 1, rationale: 'Al frenar las enzimas ciclooxigenasas (COX), disminuyen las sustancias que causan dolor e inflamación.' },
          { id: 'c5m2q2', question: '¿Por qué el Paracetamol es el medicamento de elección para la fiebre en casos de Dengue?', options: ['Porque cura el virus en un día', 'Porque no daña las plaquetas ni hace sangrar el estómago como los AINEs', 'Porque da sueño rápido', 'Porque es un antibiótico potente'], correctIndex: 1, rationale: 'El paracetamol no altera la coagulación, evitando las hemorragias peligrosas que causan el ibuprofeno o la aspirina en dengue.' },
          { id: 'c5m2q3', question: '¿Cuántos gramos de Paracetamol es lo máximo que puede tomar un adulto al día para no dañar su hígado?', options: ['1 gramo al día', '20 gramos al día', '4 gramos al día (por ejemplo, 1 gramo cada 6 horas)', 'No tiene límite'], correctIndex: 2, rationale: 'Tomar más de 4 gramos en 24 horas satura el hígado y puede causar una intoxicación hepática grave.' },
          { id: 'c5m2q4', question: '¿Qué antídoto salva la vida si una persona se intoxica con una sobredosis peligrosa de Paracetamol?', options: ['Agua con sal', 'Sulfato de atropina', 'N-acetilcisteína (NAC)', 'Vitamina C en pastillas'], correctIndex: 2, rationale: 'La N-acetilcisteína protege el hígado y limpia el tóxico si se administra en las primeras horas.' },
          { id: 'c5m2q5', question: '¿Por qué el analgésico inyectable Ketorolaco NO debe usarse por más de 5 días seguidos?', options: ['Porque mancha los dientes de negro', 'Porque daña el estómago causando úlceras sangrantes y puede fallar el riñón', 'Porque se vuelve agua en la sangre', 'Porque sube de peso'], correctIndex: 1, rationale: 'El ketorolaco es muy irritante para la mucosa gástrica y el riñón; su uso continuo se limita a un máximo de 5 días.' },
          { id: 'c5m2q6', question: '¿Cuál es el peligro más grave y mortal si una persona recibe demasiado calmante opioide (morfina o fentanilo)?', options: ['Dolor de oído', 'Depresión respiratoria (dejar de respirar)', 'Sudor en los pies', 'Hambre excesiva'], correctIndex: 1, rationale: 'Los opioides apagan el centro respiratorio del cerebro; la persona respira cada vez más lento hasta que se asfixia.' },
          { id: 'c5m2q7', question: '¿Cómo se ven las pupilas de los ojos en una persona intoxicada por sobredosis de morfina?', options: ['Muy abiertas y gigantes', 'Muy chiquititas como una punta de alfiler (miosis puntiforme)', 'De color amarillo brillante', 'Cuadradas'], correctIndex: 1, rationale: 'La miosis puntiforme (pupilas muy pequeñas) es un signo clásico e inequívoco de intoxicación por opioides.' },
          { id: 'c5m2q8', question: '¿Qué medicina de emergencia se inyecta como antídoto para despertar y hacer respirar a quien tiene sobredosis de opioides?', options: ['Paracetamol', 'Naloxona', 'Dextrosa con sal', 'Ibuprofeno'], correctIndex: 1, rationale: 'La naloxona saca al opioide de los receptores en 1 minuto y recupera de inmediato la respiración del paciente.' },
          { id: 'c5m2q9', question: '¿Qué molestia en la barriga sufren casi siempre los pacientes que toman opioides por mucho tiempo y no se cura sola?', options: ['Diarrea con agua constante', 'Estreñimiento severo (no poder hacer deposiciones)', 'Eructos con sabor a menta', 'Hipo continuo'], correctIndex: 1, rationale: 'Los opioides paralizan el movimiento de los intestinos; siempre deben acompañarse de laxantes y agua.' },
          { id: 'c5m2q10', question: '¿Por qué NO se debe dar Aspirina a niños pequeños con gripe o varicela?', options: ['Porque les hace crecer el cabello', 'Porque puede provocar el peligroso Síndrome de Reye (daño cerebral y hepático grave)', 'Porque no quita la fiebre', 'Porque es muy amarga'], correctIndex: 1, rationale: 'En niños con infecciones virales, la aspirina puede desencadenar el síndrome de Reye, una complicación letal.' }
>>>>>>> Stashed changes
        ]
      },
      {
        id: 'm3',
        number: 3,
<<<<<<< Updated upstream
        title: 'Antibioticoterapia Segura: Betalactámicos (Anafilaxia), Vancomicina (Hombre Rojo) y Aminoglucósidos',
        part1Title: 'Parte 1: Penicilinas, Cefalosporinas, Carbapenémicos y Alergia Cruzada',
        part2Title: 'Parte 2: Vancomicina (Síndrome del Hombre Rojo), Aminoglucósidos y Quinolonas',
        duration: '6 Horas Lectivas',
        summary: 'Prevención del shock anafiláctico por betalactámicos, síndrome del hombre rojo por vancomicina y nefro/ototoxicidad por aminoglucósidos.',
        content: [
          '1. Betalactámicos (Penicilinas, Cefalosporinas, Carbapenémicos): Actúan destruyendo la pared bacteriana. Su reacción adversa más temida es la hipersensibilidad inmediata (urticaria, angioedema y Shock Anafiláctico). Existe hasta un 5-10% de alergia cruzada entre penicilinas y cefalosporinas. La Penicilina G Benzatínica y Procaina son EXCLUSIVAMENTE INTRAMUSCULARES (su inyección endovenosa accidental causa paro cardiorrespiratorio y embolia pulmonar).',
          '2. Vancomicina y el "Síndrome del Hombre Rojo": La infusión rápida de Vancomicina (< 60 minutos) provoca degranulación directa de mastocitos liberando histamina masiva, con eritema intenso en cara, cuello y tórax superior, prurito e hipotensión ("Síndrome del Hombre Rojo"). Se previene diluyendo a ≤ 5 mg/ml e infundiendo en al menos 60 a 90 minutos.',
          '3. Aminoglucósidos (Amikacina, Gentamicina) y Quinolonas (Ciprofloxacino): Los aminoglucósidos producen dos toxicidades clásicas: NEFROTOXICIDAD (elevación de creatinina, reversible) y OTOTOXICIDAD (daño coclear y vestibular irreversible, sordera y vértigo). Las quinolonas pueden causar tendinitis/rotura del tendón de Aquiles y prolongación del intervalo QT.'
        ],
        tableData: {
          title: 'Familias de Antibióticos y Vigilancia de Reacciones Adversas Críticas',
          headers: ['Familia / Antibiótico', 'Reacción Adversa Característica', 'Mecanismo / Órgano Blanco', 'Medida Preventiva de Enfermería'],
          rows: [
            ['Penicilinas y Cefalosporinas', 'Shock Anafiláctico y Alergia Cruzada', 'Mediada por IgE (broncoespasmo y colapso)', 'Indagar alergias siempre. Penicilina Benzatínica SOLO IM.'],
            ['Vancomicina (Glucopéptido)', 'Síndrome del Hombre Rojo y Flebitis', 'Liberación no inmunológica de histamina', 'Diluir en 100-250 ml (≤5 mg/ml) y pasar en ≥ 60 a 90 minutos.'],
            ['Aminoglucósidos (Amikacina)', 'Nefrotoxicidad y Ototoxicidad', 'Túbulo renal proximal y VIII par craneal', 'Vigilar creatinina sérica, diuresis y audición.'],
            ['Fluoroquinolonas (Ciprofloxacino)', 'Tendinitis (Aquiles) y Fototoxicidad', 'Degradación del colágeno tendinoso', 'Infundir en 60 min EV; vigilar dolor en talón en ancianos.']
          ]
        },
        keyPoints: [
          'Vancomicina: infundir siempre en ≥ 60 minutos para prevenir el "Síndrome del Hombre Rojo" e hipotensión.',
          'Aminoglucósidos (Amikacina, Gentamicina): producen Nefrotoxicidad (riñón) y Ototoxicidad (oído).',
          'Penicilina G Benzatínica: uso exclusivamente Intramuscular profundo (prohibida por vía endovenosa).'
        ],
        clinicalPearl: 'Síndrome del Hombre Rojo vs. Alergia Verdadera: El Síndrome del Hombre Rojo por Vancomicina NO es una alergia mediada por IgE, sino una reacción por velocidad de infusión; al detener el goteo, administrar un antihistamínico y reiniciar al doble de tiempo (90-120 min), el paciente suele tolerar el fármaco.',
        checkQuestion: {
          question: '¿Qué reacción adversa ocurre si la Vancomicina se infunde en menos de 30 minutos y cuáles son las dos toxicidades clásicas de los Aminoglucósidos (Amikacina y Gentamicina)?',
          options: [
            'Hipoglucemia — Daño en uñas y cabello',
            'Síndrome del Hombre Rojo (rubor facial/torácico e hipotensión por histamina) — Los aminoglucósidos causan Nefrotoxicidad (riñón) y Ototoxicidad (oído)',
            'Hipertensión — Daño ocular',
            'Tos seca — Daño tiroideo'
          ],
          correctIndex: 1,
          explanation: 'La vancomicina rápida desencadena el Síndrome del Hombre Rojo (exige ≥60 min), y la amikacina/gentamicina son nefrotóxicas y ototóxicas.'
        }
=======
        title: 'Antimicrobianos, Resistencia Bacteriana y Toxicidades Específicas',
        part1Title: 'Parte 1: Antimicrobianos y Resistencia Bacteriana',
        part2Title: 'Parte 2: Toxicidades Específicas y Reacciones de Alergia',
        duration: '6 Horas Lectivas',
        summary: 'Mecanismos de acción de betalactámicos, macrólidos, aminoglucósidos y quinolonas, y prevención del Síndrome del Hombre Rojo y anafilaxia.',
        content: [
          '1. Familias de Antibióticos: Los Betalactámicos (Amoxicilina, Ampicilina, Ceftriaxona, Meropenem) destruyen la pared celular bacteriana (bactericidas); el Ácido Clavulánico inhibe las betalactamasas bacterianas protegiendo a la amoxicilina. Los Macrólidos (Azitromicina, Claritromicina) inhiben la subunidad 50S ribosomal y son la alternativa de elección en alérgicos a la penicilina.',
          '2. Toxicidades Específicas: Los Aminoglucósidos (Amikacina, Gentamicina) producen Nefrotoxicidad (falla renal) y Ototoxicidad irreversible (sordera y vértigo). Las Fluoroquinolonas (Ciprofloxacino, Levofloxacino) pueden causar tendinitis y rotura del tendón de Aquiles. Las Tetraciclinas (Doxiciclina) se fijan al calcio de huesos y dientes manchándolos de pardo (contraindicadas en embarazadas y niños < 8 años).',
          '3. Vancomicina y "Síndrome del Hombre Rojo": Si la Vancomicina se infunde muy rápido (<60 min), libera histamina masiva provocando eritema, prurito intenso en cara/cuello/tórax e hipotensión. Se previene infundiéndola diluida lentamente en 1 a 2 horas.'
        ],
        tableData: {
          title: 'Familias de Antibióticos, Mecanismos y Toxicidades Clave',
          headers: ['Familia / Fármaco', 'Mecanismo de Acción', 'Efecto Adverso o Precaución Crítica'],
          rows: [
            ['Betalactámicos (Penicilinas, Cefalosporinas)', 'Rompen la pared bacteriana (Bactericidas)', 'Riesgo de alergia y shock anafiláctico (tratamiento: Adrenalina IM).'],
            ['Macrólidos (Azitromicina)', 'Inhiben síntesis proteica (50S)', 'Alternativa segura en pacientes alérgicos a la penicilina.'],
            ['Aminoglucósidos (Gentamicina, Amikacina)', 'Inhiben subunidad 30S (Bactericidas)', 'Nefrotoxicidad (riñón) y Ototoxicidad (oído/sordera). Vigilar creatinina.'],
            ['Vancomicina (Glicopéptido)', 'Actúa contra MRSA', 'Infundir lento en 1 a 2 horas para evitar el "Síndrome del Hombre Rojo".'],
            ['Quinolonas (Ciprofloxacino) / Tetraciclinas', 'Inhiben ADN girasa / 30S', 'Ciprofloxacino: rotura del tendón de Aquiles. Tetraciclinas: manchan dientes en niños/fetos.']
          ]
        },
        keyPoints: [
          'Amikacina y Gentamicina (Aminoglucósidos): vigilar riñón (nefrotoxicidad) y oído (ototoxicidad).',
          'Vancomicina: pasar siempre diluida en 1 a 2 horas para prevenir el Síndrome del Hombre Rojo.',
          'En alérgicos a la Penicilina: alternativa segura con Macrólidos (Azitromicina).',
          'Los antibióticos NO matan virus; usarlos en resfríos solo genera resistencia bacteriana.'
        ],
        clinicalPearl: 'Vancomicina y "Síndrome del Hombre Rojo": Si la Vancomicina se infunde muy rápido por vena (<60 min), provoca desgranulación directa de mastocitos y liberación de histamina, causando enrojecimiento ardiente en cuello y tórax con hipotensión. Se previene administrando la infusión lentamente en 60 a 120 minutos.',
        checkQuestion: {
          question: '¿Qué dos órganos vitales pueden dañarse gravemente con el uso de antibióticos aminoglucósidos como la Amikacina o la Gentamicina?',
          options: [
            'El cabello y las uñas',
            'Los riñones (nefrotoxicidad/falla renal) y el oído interno (ototoxicidad/sordera)',
            'La vesícula y el páncreas',
            'Los dientes y la vista'
          ],
          correctIndex: 1,
          explanation: 'Los aminoglucósidos se acumulan en la corteza renal y en la endolinfa del oído interno, causando nefrotoxicidad y ototoxicidad.'
        },
        moduleQuiz: [
          { id: 'c5m3q1', question: '¿Qué parte de la bacteria atacan y destruyen los antibióticos betalactámicos como las penicilinas y cefalosporinas?', options: ['El núcleo celular', 'La pared protectora de la bacteria, haciendo que estalle y muera', 'El líquido que la rodea', 'Sus pelos exteriores'], correctIndex: 1, rationale: 'Al romper la pared celular bacteriana, la bacteria no soporta la presión interna y se destruye (bactericida).' },
          { id: 'c5m3q2', question: '¿Qué dos daños graves en el cuerpo pueden causar antibióticos como la Gentamicina o Amikacina si se usan a dosis altas?', options: ['Manchas en la lengua y caída de uñas', 'Daño a los riñones (falla renal) y daño al oído (sordera y mareos)', 'Dolor de muelas', 'Caída del cabello'], correctIndex: 1, rationale: 'Los aminoglucósidos son nefrotóxicos y ototóxicos; pueden provocar insuficiencia renal y pérdida auditiva definitiva.' },
          { id: 'c5m3q3', question: 'Si una persona es alérgica a la Penicilina, ¿qué grupo de antibióticos se suele usar como alternativa segura para la garganta o pulmones?', options: ['Cefalosporinas fuertes', 'Macrólidos (como la Azitromicina)', 'Más penicilina con agua', 'Ampicilina pura'], correctIndex: 1, rationale: 'Los macrólidos no comparten la estructura de la penicilina y no producen la misma reacción alérgica en el paciente.' },
          { id: 'c5m3q4', question: '¿Por qué la Vancomicina endovenosa puede poner roja la piel del cuello y pecho (Síndrome del Hombre Rojo)?', options: ['Porque el líquido está vencido', 'Porque se pasó la inyección demasiado rápido por la vena (en menos de 1 hora)', 'Porque el paciente tiene calor', 'Es un efecto normal que debe dejarse'], correctIndex: 1, rationale: 'Pasarla muy rápido libera histamina en la piel; se previene administrando el goteo lentamente en 1 a 2 horas.' },
          { id: 'c5m3q5', question: '¿Qué problema en los tendones de las piernas puede causar el antibiótico Ciprofloxacino?', options: ['Hace crecer los pies', 'Puede inflamar o romper el tendón de Aquiles', 'Hace cosquillas en los dedos', 'Curación de fracturas'], correctIndex: 1, rationale: 'Las quinolonas pueden provocar tendinitis o rotura del tendón de Aquiles, especialmente en adultos mayores y deportistas.' },
          { id: 'c5m3q6', question: '¿Para qué se junta el Ácido Clavulánico con la Amoxicilina en las recetas médicas?', options: ['Para que sepa más rico', 'Para evitar que las bacterias destruyan a la amoxicilina con sus enzimas de defensa', 'Para que no dé sueño', 'Para quitar el hambre'], correctIndex: 1, rationale: 'El ácido clavulánico bloquea las defensas de la bacteria (betalactamasas) y permite que la amoxicilina actúe con éxito.' },
          { id: 'c5m3q7', question: '¿Qué pasa si tomamos antibióticos cuando solo tenemos un resfriado común o una gripe por virus?', options: ['Nos curamos en 5 minutos', 'No cura el resfrío y hace que las bacterias de nuestro cuerpo se vuelvan resistentes', 'Previene el dolor de pies', 'Aumenta las vitaminas'], correctIndex: 1, rationale: 'Los antibióticos no matan virus; usarlos en resfríos solo entrena a las bacterias para volverse resistentes.' },
          { id: 'c5m3q8', question: 'Si tras inyectar un antibiótico el paciente se llena de ronchas, se le hincha la garganta y no puede respirar, ¿qué ocurre?', options: ['Es una reacción nerviosa simple', 'Una alergia grave y peligrosa llamada shock anafiláctico', 'Que el antibiótico ya lo curó', 'Intoxicación por comida'], correctIndex: 1, rationale: 'El compromiso de la respiración con urticaria tras un fármaco es anafilaxia aguda y requiere adrenalina inmediata.' },
          { id: 'c5m3q9', question: '¿Por qué NO se debe dar antibióticos de la familia de las Tetraciclinas a niños pequeños ni a embarazadas?', options: ['Porque les da hipo', 'Porque se pegan al calcio y manchan los dientes de color amarillo/pardo para siempre', 'Porque les cambia la voz', 'Porque es muy dulce'], correctIndex: 1, rationale: 'Las tetraciclinas se fijan en el calcio de los dientes y huesos en formación, dañando el esmalte de forma irreversible.' },
          { id: 'c5m3q10', question: '¿Cuál de los siguientes medicamentos es un antibiótico de la familia de los Macrólidos muy recetado?', options: ['Paracetamol', 'Azitromicina', 'Ibuprofeno', 'Omeprazol'], correctIndex: 1, rationale: 'La Azitromicina (junto a Claritromicina y Eritromicina) pertenece a la familia de los antibióticos Macrólidos.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm4',
        number: 4,
<<<<<<< Updated upstream
        title: 'Farmacología Cardiovascular, Diuréticos (Furosemida) y Anticoagulantes (Antídotos)',
        part1Title: 'Parte 1: Antihipertensivos (IECA, Betabloqueantes), Digoxina y Furosemida',
        part2Title: 'Parte 2: Anticoagulantes (Heparina vs. Warfarina) y sus Antídotos Específicos',
        duration: '8 Horas Lectivas',
        summary: 'Monitoreo de FC antes de Digoxina/Betabloqueantes, control de potasio con Furosemida vs. Espironolactona, y antídotos de Heparina y Warfarina.',
        content: [
          '1. Antihipertensivos, Digoxina y Diuréticos: Los IECA (Captopril, Enalapril) producen como efecto adverso clásico TOS SECA persistente y riesgo de hiperpotasemia/angioedema. Los Betabloqueantes (Bisoprolol, Propranolol, Labetalol) y la Digoxina disminuyen la frecuencia cardíaca: NUNCA administrarlos si la FC es < 60 lpm (la intoxicación digitálica produce bradicardia, náuseas y visión amarilla/xantopsia, agravada por la hipopotasemia). La Furosemida (diurético de asa) elimina potasio causando HIPOPOTASEMIA, mientras la Espironolactona ahorra potasio (riesgo de hiperpotasemia).',
          '2. Anticoagulantes y sus Antídotos: 1) Heparina No Fraccionada (HNF) y Enoxaparina (HBPM): La HNF se controla con el TTPa y su antídoto específico es el SULFATO DE PROTAMINA; la Enoxaparina se aplica subcutánea periumbilical sin expulsar la burbuja de aire ni frotar; 2) Warfarina (anticoagulante oral): inhibe los factores dependientes de vitamina K, se controla con el INR (meta habitual 2.0 a 3.0) y su antídoto es la VITAMINA K (Fitomenadiona) y el plasma fresco congelado.'
        ],
        tableData: {
          title: 'Fármacos Cardiovasculares, Diuréticos y Anticoagulantes: Control de Enfermería',
          headers: ['Fármaco Cardiovascular', 'Efecto Adverso Clave', 'Parámetro / Laboratorio a Medir', 'Antídoto / Conducta Crítica'],
          rows: [
            ['IECA (Captopril, Enalapril)', 'Tos seca irritativa y Angioedema', 'Presión arterial y Potasio sérico', 'El Captopril sublingual/oral baja la PA en urgencias.'],
            ['Digoxina / Betabloqueantes', 'Bradicardia severa y Bloqueo AV (Visión amarilla en Digoxina)', 'Frecuencia Cardíaca apical por 1 min', 'NO administrar si la FC es < 60 latidos/minuto.'],
            ['Furosemida (Diurético de asa)', 'Hipopotasemia (calambres/arritmias) e Hipotensión', 'Potasio sérico (K+) y Balance Hídrico', 'Vigilar K+ (la hipopotasemia dispara toxicidad por digoxina).'],
            ['Heparina / Warfarina', 'Hemorragia / Sangrado activo', 'Heparina: TTPa | Warfarina: INR (2-3)', 'Antídoto Heparina: PROTAMINA | Antídoto Warfarina: VITAMINA K.']
          ]
        },
        keyPoints: [
          'Efecto adverso característico del Enalapril / Captopril (IECA): Tos seca persistente.',
          'Furosemida = causa Hipopotasemia (baja el K+) | Espironolactona = ahorra potasio (sube el K+).',
          'Antes de administrar Digoxina o un Betabloqueante: controlar siempre que la Frecuencia Cardíaca sea ≥ 60 lpm.',
          'Antídoto de la Heparina: Sulfato de Protamina | Antídoto de la Warfarina: Vitamina K (Fitomenadiona).'
        ],
        clinicalPearl: 'Técnica Correcta de Inyección de Enoxaparina Subcutánea: En las jeringas prellenadas de Enoxaparina NO se debe purgar ni expulsar la burbuja de aire antes de inyectar (el aire sella el fármaco en el tejido graso evitando hematomas), y jamás se debe frotar el abdomen tras retirar la aguja.',
        checkQuestion: {
          question: '¿Qué alteración del potasio produce el uso de Furosemida endovenosa, cuál es el efecto adverso clásico del Enalapril/Captopril y cuáles son los antídotos de la Heparina y la Warfarina?',
          options: [
            'Furosemida sube el potasio — Enalapril da fiebre — No tienen antídoto',
            'Furosemida produce Hipopotasemia (pérdida de potasio); Enalapril/Captopril producen Tos Seca; el antídoto de la Heparina es el Sulfato de Protamina y el de la Warfarina es la Vitamina K',
            'Furosemida da tos — Enalapril baja el calcio — Antídoto Naloxona',
            'Todos suben la glucosa'
          ],
          correctIndex: 1,
          explanation: 'La furosemida es kaliurética (causa hipopotasemia), los IECA acumulan bradicinina (tos seca), la Heparina se revierte con Protamina y la Warfarina con Vitamina K.'
        }
=======
        title: 'Fármacos Cardiovasculares, Diuréticos y Digitálicos (Digoxina)',
        part1Title: 'Parte 1: Antihipertensivos (IECA, ARA-II, Calcioantagonistas) y Diuréticos',
        part2Title: 'Parte 2: Digitálicos (Digoxina) e Hipotensión Ortostática',
        duration: '8 Horas Lectivas',
        summary: 'Efectos adversos clásicos de Enalapril, Losartán, Amlodipino, Furosemida y Espironolactona, y cuidados críticos en la administración de Digoxina.',
        content: [
          '1. Antihipertensivos y sus Efectos Adversos Típicos: Los IECAs (Enalapril, Captopril) producen TOS SECA PERSISTENTE por acumulación de bradicinina; si ocurre, se cambian por un ARA-II (Losartán, Valsartán) que no produce tos. Ambos están PROHIBIDOS en el embarazo por ser teratogénicos. Los Calcioantagonistas (Amlodipino) producen hinchazón de tobillos y pies (edema maleolar).',
          '2. Diuréticos y el Potasio: La Furosemida (diurético de asa de alta potencia) hace perder abundante potasio en la orina causando HIPOPOTASEMIA severa (calambres y arritmias). Por el contrario, la Espironolactona es un diurético ahorrador de potasio y puede causar HIPERPOTASEMIA.',
          '3. Digoxina e Intoxicación Digitálica: Antes de dar Digoxina es obligatorio controlar el pulso apical durante 1 minuto: si tiene menos de 60 latidos por minuto (bradicardia), se suspende la dosis. La hipopotasemia (por Furosemida) dispara la toxicidad por Digoxina, cuyos signos clásicos son anorexia, náuseas, bradicardia y visión amarilla o con halos (xantopsia).'
        ],
        tableData: {
          title: 'Fármacos Cardiovasculares, Diuréticos y Cuidados con Digoxina',
          headers: ['Fármaco / Grupo', 'Efecto Adverso Característico', 'Conducta y Precaución de Enfermería'],
          rows: [
            ['Enalapril / Captopril (IECA)', 'Tos seca persistente (por bradicinina)', 'Cambiar a Losartán (ARA-II). Prohibidos en el embarazo (daño renal fetal).'],
            ['Amlodipino (Calcioantagonista)', 'Edema de tobillos y pies (maleolar)', 'Por vasodilatación arteriolar periférica; elevar miembros inferiores.'],
            ['Furosemida vs. Espironolactona', 'Furosemida: Hipopotasemia | Espironolactona: Hiperpotasemia', 'Vigilar potasio sérico, especialmente si el paciente recibe Digoxina.'],
            ['Digoxina (Digitálico)', 'Bradicardia, náuseas y visión amarilla (xantopsia)', 'Medir pulso 1 min antes de darla: NO administrar si FC < 60 lpm.']
          ]
        },
        keyPoints: [
          'Enalapril: causa tos seca → se reemplaza por Losartán. Ambos prohibidos en embarazadas.',
          'Amlodipino: causa edema de tobillos | Furosemida: causa pérdida de potasio (hipopotasemia).',
          'Antes de administrar Digoxina: contar pulso cardíaco por 1 minuto (retener si FC < 60 lpm).',
          'Signo visual clásico de intoxicación por Digoxina: visión de halos amarillos o verdes (xantopsia).'
        ],
        clinicalPearl: 'El Peligro del Potasio Bajo (Hipopotasemia) con Digoxina: El potasio bajo en sangre deja libres los sitios de unión en el miocardio para que la digoxina se pegue con mayor intensidad. Si un paciente toma Furosemida (que baja el potasio) y Digoxina a la vez, tiene un riesgo altísimo de sufrir intoxicación digitálica severa.',
        checkQuestion: {
          question: '¿Qué control obligatorio debe realizar el profesional de enfermería antes de administrar una tableta o ampolla de Digoxina?',
          options: [
            'Medir la talla del paciente',
            'Controlar la frecuencia cardíaca (pulso apical) durante 1 minuto; si es menor de 60 lpm, NO administrar la dosis',
            'Darle un vaso de leche fría',
            'Tomar radiografía de abdomen'
          ],
          correctIndex: 1,
          explanation: 'La digoxina disminuye la conducción del nodo AV; administrarla con frecuencia cardíaca < 60 lpm puede provocar bloqueo cardíaco completo.'
        },
        moduleQuiz: [
          { id: 'c5m4q1', question: '¿Qué molestia muy fastidiosa en la garganta causa con frecuencia la pastilla de Enalapril para la presión?', options: ['Pérdida total de la voz', 'Tos seca y constante que no se calma con ningún jarabe', 'Hinchazón de dientes', 'Ganas de escupir sangre'], correctIndex: 1, rationale: 'El enalapril acumula bradicinina en las vías respiratorias, provocando una tos seca típica que obliga a cambiar de medicina.' },
          { id: 'c5m4q2', question: 'Si un paciente tiene que suspender el Enalapril porque le dio mucha tos seca, ¿qué medicamento similar se le suele recetar?', options: ['Aspirina en jarabe', 'Losartán (que controla la presión sin dar tos)', 'Más enalapril con miel', 'Paracetamol'], correctIndex: 1, rationale: 'El losartán (ARA-II) no acumula bradicinina en los pulmones y casi nunca produce tos.' },
          { id: 'c5m4q3', question: '¿Qué parte del cuerpo se le hincha con frecuencia a las personas que toman Amlodipino para la presión?', options: ['Las orejas', 'Los tobillos y pies (edema maleolar)', 'La frente', 'Los dedos de las manos únicamente'], correctIndex: 1, rationale: 'El amlodipino relaja las arterias y acumula líquido por gravedad en los tobillos al final del día.' },
          { id: 'c5m4q4', question: '¿Qué mineral importante de la sangre hace perder en abundancia por la orina el diurético Furosemida?', options: ['Hierro', 'Potasio (pudiendo dar calambres y debilidad muscular)', 'Azúcar', 'Grasa'], correctIndex: 1, rationale: 'La furosemida arrastra mucho potasio en la orina (hipopotasemia), lo cual puede ser peligroso para el corazón.' },
          { id: 'c5m4q5', question: '¿Qué control es obligatorio hacerle al paciente antes de darle su pastilla de Digoxina para el corazón?', options: ['Pesarle los zapatos', 'Contarle el pulso cardíaco; si tiene menos de 60 latidos por minuto, NO darle la pastilla', 'Mirar si tiene sueño', 'Medir la estatura'], correctIndex: 1, rationale: 'La digoxina baja la frecuencia del corazón; dársela a un paciente con bradicardia (<60 lpm) puede frenar su corazón en exceso.' },
          { id: 'c5m4q6', question: '¿Qué problema con el potasio hace que la Digoxina se vuelva más peligrosa y tóxica en el cuerpo?', options: ['Tener el potasio normal', 'Tener el potasio muy bajo en la sangre (hipopotasemia)', 'Comer plátanos todos los días', 'Tomar mucha agua'], correctIndex: 1, rationale: 'Cuando hay poco potasio en la sangre, la digoxina se pega con demasiada fuerza al corazón y lo intoxica rápidamente.' },
          { id: 'c5m4q7', question: '¿Cómo ve las cosas un paciente que se está intoxicando peligrosamente con Digoxina?', options: ['Ve todo de color negro total', 'Ve halos de color amarillo o verde alrededor de los focos y luces (xantopsia)', 'Ve a través de las paredes', 'No tiene ninguna molestia visual'], correctIndex: 1, rationale: 'La alteración visual con tonos amarillentos (xantopsia) es un signo característico de toxicidad por digoxina.' },
          { id: 'c5m4q8', question: '¿Por qué medicamentos como el Enalapril y el Losartán están totalmente prohibidos en mujeres embarazadas?', options: ['Porque engordan al bebé', 'Porque dañan los riñones del feto y pueden causarle la muerte antes de nacer', 'Porque adelantan el parto una semana', 'Porque quitan las náuseas'], correctIndex: 1, rationale: 'Estos fármacos dañan el desarrollo renal y óseo del feto, por lo que están contraindicados en el embarazo.' },
          { id: 'c5m4q9', question: '¿A qué se debe que un anciano con pastillas para la presión sienta mareos y visión negra al levantarse rápido de la cama?', options: ['A que le falta azúcar', 'A una bajada brusca de presión al pararse de golpe (hipotensión ortostática)', 'A una infección al oído', 'A que durmió con luz'], correctIndex: 1, rationale: 'Al incorporarse rápido, la sangre se queda momentáneamente en las piernas y la presión cerebral cae provocando mareo.' },
          { id: 'c5m4q10', question: '¿Qué tipo de diurético es la Espironolactona respecto a la pérdida de minerales en la orina?', options: ['Bota todo el potasio', 'Es un diurético ahorrador de potasio (retiene potasio en la sangre)', 'Bota hierro', 'Bota calcio solamente'], correctIndex: 1, rationale: 'A diferencia de la furosemida, la espironolactona retiene potasio; hay que vigilar que no suba demasiado en la sangre.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm5',
        number: 5,
<<<<<<< Updated upstream
        title: 'Fármacos Respiratorios, Corticoides, Insulinas (Hipoglucemia) y Gastroprotectores',
        part1Title: 'Parte 1: Broncodilatadores (Salbutamol vs. Bromuro de Ipratropio) y Corticoides',
        part2Title: 'Parte 2: Insulinas, Manejo de la Hipoglucemia (<70 mg/dl) y Antieméticos',
        duration: '6 Horas Lectivas',
        summary: 'Efectos simpaticomiméticos del Salbutamol (taquicardia y temblor), hiperglucemia por corticoides y protocolo de rescate en hipoglucemia.',
        content: [
          '1. Broncodilatadores y Corticoides: El Salbutamol (Fenoterol) es un agonista Beta-2 adrenérgico de acción corta que relaja el bronquio pero cuyos efectos adversos frecuentes son TAQUICARDIA, temblor fino distal de manos e hipopotasemia. El Bromuro de Ipratropio es un anticolinérgico que produce sequedad bucal pero casi no acelera el corazón (ideal en cardiópatas). Los Corticoides (Hidrocortisona, Dexametasona, Metilprednisolona) provocan HIPERGLUCEMIA marcada, retención de sodio/agua, hipertensión e inmunosupresión.',
          '2. Insulinas y Rescate de Hipoglucemia: El efecto adverso más grave e inmediato de las insulinas y sulfonilureas (Glibenclamida) es la HIPOGLUCEMIA (< 70 mg/dl: sudoración fría, temblor, confusión, coma). Si el paciente está inconsciente por hipoglucemia severa, se administra en bolo EV de 4 a 5 ampollas de Dextrosa al 33.3% (20 ml c/u). En antieméticos: la Metoclopramida puede causar reacciones extrapiramidales (distonía aguda/rigidez de cuello), mientras el Dimenhidrinato causa somnolencia.'
        ],
        keyPoints: [
          'Efectos adversos clásicos de nebulizar Salbutamol: Taquicardia sinusal y temblor fino de manos.',
          'Efecto metabólico constante de los Corticoides (Dexametasona/Hidrocortisona): Hiperglucemia (elevación de la glucosa).',
          'Efecto adverso neurológico de la Metoclopramida EV rápida: Síndrome extrapiramidal (acatisia, distonía cervical).'
        ],
        clinicalPearl: 'Reacción Extrapiramidal por Metoclopramida: Si tras administrar Metoclopramida EV rápida un paciente joven presenta inquietud extrema, desviación de la mirada hacia arriba (crisis oculógira) o rigidez de cuello, no es una convulsión ni histeria: es una distonía aguda extrapiramidal que revierte rápidamente con Biperideno o Difenhidramina.',
        checkQuestion: {
          question: '¿Cuáles son los dos efectos adversos más frecuentes tras nebulizar a un paciente con Salbutamol y qué alteración metabólica producen los Corticoides como la Dexametasona?',
          options: [
            'Bradicardia y sueño — Los corticoides bajan la glucosa',
            'Taquicardia (aumento de la frecuencia cardíaca) y temblor fino en las manos — Los corticoides producen Hiperglucemia (suben la glucosa en sangre)',
            'Sordera y caída de cabello — Los corticoides bajan el sodio',
            'Estreñimiento y miosis'
          ],
          correctIndex: 1,
          explanation: 'El Salbutamol estimula receptores Beta en corazón y músculo estriado causando taquicardia y temblor; y los glucocorticoides elevan la glucemia.'
        }
=======
        title: 'Insulinas, Antidiabéticos Orales y Corticosteroides Sistémicos',
        part1Title: 'Parte 1: Insulinas, Antidiabéticos y Manejo de la Hipoglucemia',
        part2Title: 'Parte 2: Corticosteroides Sistémicos y Peligro de Suspensión Brusca',
        duration: '6 Horas Lectivas',
        summary: 'Diferenciación entre Metformina y Glibenclamida, tipos de Insulina (Regular vs NPH), manejo de hipoglucemia y efectos de los corticoides.',
        content: [
          '1. Antidiabéticos Orales: La Metformina (Biguanida) mejora la sensibilidad a la insulina sin provocar hipoglucemia por sí sola ni aumento de peso. Las Sulfonilureas (Glibenclamida) estimulan la secreción pancreática de insulina y conllevan ALTO RIESGO de hipoglucemia severa si el paciente ayuna.',
          '2. Tipos de Insulina y Manejo de Hipoglucemia (<70 mg/dl): La Insulina Rápida/Cristalina (Regular) es transparente como agua y es la única que puede administrarse por vía IV; la Insulina Intermedia (NPH) es de aspecto turbio/lechoso; la Glargina es basal transparente de 24 h. Ante hipoglucemia (sudor frío, temblor, taquicardia): si está consciente dar 15 g de azúcar oral; si está inconsciente está PROHIBIDO dar líquidos por boca (aplicar Dextrosa al 33% IV en bolo).',
          '3. Corticosteroides Sistémicos (Prednisona, Dexametasona): Elevan fuertemente la glucosa en sangre (hiperglucemia), deben tomarse a las 7:00-8:00 a.m. (imitando el pico natural de cortisol), su uso crónico produce Síndrome de Cushing (cara de luna llena, giba dorsal y estrías) y NUNCA deben suspenderse de golpe tras >2 semanas de uso por riesgo de Crisis Suprarrenal Aguda.'
        ],
        tableData: {
          title: 'Tipos de Insulina y Efectos de los Corticosteroides Sistémicos',
          headers: ['Fármaco / Condición', 'Aspecto / Mecanismo', 'Cuidado Crítico de Enfermería'],
          rows: [
            ['Insulina Regular (Cristalina)', 'Transparente como el agua (inicio 30 min)', 'La única apta por vía intravenosa (cetoacidosis) y subcutánea.'],
            ['Insulina NPH (Intermedia)', 'Aspecto turbio / blanco lechoso (12-18 h)', 'Solo vía subcutánea. Rotar sitios de inyección para evitar lipodistrofia.'],
            ['Hipoglucemia (< 70 mg/dl)', 'Sudoración fría, temblor, confusión/coma', 'Consciente: agua con azúcar oral. Inconsciente: Dextrosa al 33% IV directo.'],
            ['Corticoides (Prednisona/Dexa)', 'Hiperglucemia y Síndrome de Cushing', 'Tomar 7-8 a.m. NUNCA suspender de golpe (causa crisis suprarrenal).']
          ]
        },
        keyPoints: [
          'Metformina: no causa hipoglucemia por sí sola | Glibenclamida: alto riesgo de hipoglucemia.',
          'Insulina Cristalina = transparente (única IV) | Insulina NPH = turbia/lechosa.',
          'Paciente inconsciente por hipoglucemia: Dextrosa al 33% endovenosa (jamás dar líquidos por boca).',
          'Rotar siempre el sitio de inyección subcutánea de insulina para prevenir lipodistrofia.'
        ],
        clinicalPearl: 'REGLA DE ORO en Corticoides (No Suspender Bruscamente): Tomar corticoides por más de 2 semanas "duerme" e inhibe a las glándulas suprarrenales. Nunca se deben suspender de golpe; deben retirarse reduciendo la dosis lentamente (destete) para evitar una Crisis Suprarrenal Aguda mortal.',
        checkQuestion: {
          question: 'Si encontramos a un paciente diabético desmayado e inconsciente por una hipoglucemia severa (glucosa en 38 mg/dl), ¿cuál es la acción inmediata correcta?',
          options: [
            'Darle jugo de naranja por la boca',
            'Administrar Dextrosa al 33% por vía endovenosa de inmediato (nunca dar líquidos por boca a un inconsciente)',
            'Inyectarle más insulina',
            'Dejarlo dormir hasta que despierte'
          ],
          correctIndex: 1,
          explanation: 'En un paciente inconsciente está prohibida la vía oral por riesgo de broncoaspiración; se administra Dextrosa al 33% IV en bolo.'
        },
        moduleQuiz: [
          { id: 'c5m5q1', question: '¿Cuál es el peligro más grave y rápido que puede sufrir un diabético si se inyecta demasiada insulina?', options: ['Que se le suba mucho la presión', 'Que sufra una hipoglucemia severa (bajada brusca del azúcar en la sangre)', 'Dolor en las uñas', 'Aumento de estatura'], correctIndex: 1, rationale: 'El exceso de insulina consume la glucosa de la sangre; si baja de 70 mg/dl, el cerebro se queda sin energía y puede haber desmayo.' },
          { id: 'c5m5q2', question: '¿Qué síntomas siente de inmediato una persona cuando se le baja el azúcar en la sangre (hipoglucemia)?', options: ['Sueño tranquilo sin sudar', 'Sudoración fría, temblor en las manos, taquicardia y mucha hambre', 'Fiebre con tos seca', 'Dolor de muelas'], correctIndex: 1, rationale: 'El cuerpo libera adrenalina de emergencia para subir la glucosa, causando sudor frío, palpitaciones y temblor.' },
          { id: 'c5m5q3', question: '¿Qué gran ventaja tiene la pastilla de Metformina en comparación con la Glibenclamida?', options: ['Que no necesita receta médica', 'Que no suele causar bajadas bruscas de azúcar (hipoglucemias) por sí sola ni engorda', 'Que cura la diabetes para siempre', 'Que se toma una vez al año'], correctIndex: 1, rationale: 'La metformina ayuda a usar mejor la glucosa sin forzar al páncreas a soltar insulina sin control, evitando hipoglucemias.' },
          { id: 'c5m5q4', question: '¿Por qué NUNCA se deben suspender de golpe los tratamientos largos con corticoides (Prednisona o Dexametasona)?', options: ['Porque manchan la ropa', 'Porque las glándulas del cuerpo están dormidas y la persona puede caer en shock grave', 'Porque se rompe el estómago', 'Porque da hipo'], correctIndex: 1, rationale: 'Tras tomar corticoides por semanas, las glándulas suprarrenales están inactivas; suspenderlos de golpe causa un colapso vital.' },
          { id: 'c5m5q5', question: '¿Qué aspecto físico tiene la Insulina NPH a diferencia de la Insulina Cristalina que es transparente?', options: ['Es de color azul', 'Es un líquido turbio o lechoso que debe mezclarse suavemente antes de cargarse', 'Es un aceite espeso', 'Viene en polvo seco'], correctIndex: 1, rationale: 'La insulina NPH tiene proteínas que retardan su acción, lo que le da su característico color blanco lechoso.' },
          { id: 'c5m5q6', question: '¿Cómo se ve la cara y cuerpo de un paciente que toma corticoides por muchos meses (Síndrome de Cushing)?', options: ['Rostro extremadamente flaco', 'Cara redonda como una "luna llena", joroba de grasa en la espalda y estrías moradas', 'Piel azulada', 'Pérdida total de dientes'], correctIndex: 1, rationale: 'El exceso de corticoides acumula grasa en la cara y cuello mientras adelgaza la piel formando estrías moradas gruesas.' },
          { id: 'c5m5q7', question: 'Si un paciente diabético está desmayado e inconsciente por hipoglucemia, ¿qué debemos hacer de inmediato?', options: ['Darle a tomar un vaso de gaseosa a la fuerza', 'Ponerle Dextrosa en la vena de inmediato; NUNCA darle líquidos por boca porque se puede ahogar', 'Esperar a que despierte solo', 'Dejarlo dormir'], correctIndex: 1, rationale: 'Una persona desmayada no puede tragar; meterle líquido a la boca causará que el líquido se vaya a los pulmones (asfixia).' },
          { id: 'c5m5q8', question: '¿Qué le pasa a la glucosa en la sangre de un paciente cuando empieza a tomar corticoides como Dexametasona?', options: ['El azúcar se baja a cero', 'El azúcar en la sangre sube con fuerza (hiperglucemia)', 'La glucosa no cambia nada', 'Desaparece la diabetes'], correctIndex: 1, rationale: 'Los corticoides estimulan la producción de azúcar en el hígado y provocan picos altos de glucemia en los pacientes.' },
          { id: 'c5m5q9', question: '¿A qué hora del día es mejor tomar la pastilla de Prednisona para respetar el ritmo normal del cuerpo?', options: ['En la medianoche al dormir', 'En la mañanita con el desayuno (7:00 a 8:00 a.m.)', 'En la tarde con café', 'A cualquier hora da igual'], correctIndex: 1, rationale: 'En la mañana el cuerpo produce naturalmente su propio cortisol; tomarla temprano imita la naturaleza y no quita el sueño.' },
          { id: 'c5m5q10', question: '¿Por qué las personas que usan insulina todos los días deben cambiar de lugar de inyección en la piel (rotar)?', options: ['Para no gastar la piel', 'Para evitar que se formen bolitas duras de grasa (lipodistrofia) que impidan que la insulina se absorba bien', 'Para que no les dé frío', 'Por higiene'], correctIndex: 1, rationale: 'Inyectar siempre en el mismo sitio produce lipodistrofia subcutánea, alterando la absorción de la insulina.' }
        ]
>>>>>>> Stashed changes
      },
      {
        id: 'm6',
        number: 6,
<<<<<<< Updated upstream
        title: 'Fármacos de Emergencia, Sedantes (Flumazenil), Anticonvulsivantes y Farmacovigilancia',
        part1Title: 'Parte 1: Coche de Paro (Adrenalina, Atropina, Amiodarona), Benzodiazepinas y Antídotos',
        part2Title: 'Parte 2: Sulfato de Magnesio (Gluconato de Calcio) y Notificación de RAM (DIGEMID)',
        duration: '6 Horas Lectivas',
        summary: 'Dominio de los fármacos del coche de paro, tabla maestra de antídotos (Flumazenil, Atropina, Gluconato de Calcio) y farmacovigilancia.',
        content: [
          '1. Fármacos del Coche de Paro y Sedantes: 1) Adrenalina (1 mg/ml): fármaco de elección en Paro Cardiorrespiratorio (cada 3-5 min) y Anafilaxia; 2) Atropina (0.5 o 1 mg): anticolinérgico de elección en Bradicardia Sintomática y como antídoto en intoxicación por Organofosforados/Carbamatos (insecticidas); 3) Amiodarona (150 mg): antiarrítmico en FV/TV sin pulso (se diluye exclusivamente en Dextrosa al 5%); 4) Benzodiazepinas (Midazolam, Diazepam): primera línea en crisis convulsiva activa; su sobredosis causa depresión respiratoria y su antídoto específico es el FLUMAZENIL.',
          '2. Sulfato de Magnesio en Preeclampsia y su Antídoto: El Sulfato de Magnesio (Esquema Zuspan: 4 g EV de ataque en 20 min seguido de 1 g/hora) previene y trata la eclampsia. Signos de intoxicación por magnesio: 1° Pérdida del reflejo rotuliano (patelar), 2° Depresión respiratoria (<16 rpm) y 3° Paro cardíaco; también se vigila diuresis ≥ 30 ml/h. Su antídoto específico inmediato es el GLUCONATO DE CALCIO al 10% (1 ampolla de 10 ml EV lento).',
          '3. Farmacovigilancia (DIGEMID): Toda Reacción Adversa a Medicamentos (RAM) grave debe notificarse en las primeras 24 horas en el Formato Amarillo de DIGEMID.'
        ],
        tableData: {
          title: 'Tabla Maestra de Tóxicos / Medicamentos y sus Antídotos Específicos de Examen',
          headers: ['Fármaco o Tóxico Causante', 'Clínica de Intoxicación', 'Antídoto Específico Oficial', 'Cuidado Crítico de Enfermería'],
          rows: [
            ['Opioides (Morfina, Fentanilo, Tramadol)', 'Depresión respiratoria + Miosis + Coma', 'NALOXONA (0.4 mg EV)', 'Titular hasta recuperar FR ≥ 12 rpm.'],
            ['Benzodiazepinas (Midazolam, Diazepam)', 'Sedación profunda e hipoventilación', 'FLUMAZENIL (0.2 a 0.5 mg EV)', 'Vigilar resedación a los 30-60 minutos.'],
            ['Sulfato de Magnesio (Preeclampsia)', 'Abolición del reflejo rotuliano y FR < 16 rpm', 'GLUCONATO DE CALCIO 10% (1 g EV)', 'Vigilar reflejo patelar, FR y diuresis ≥30 ml/h.'],
            ['Organofosforados / Carbamatos', 'Miosis, sialorrea, broncorrea, bradicardia', 'ATROPINA EV en bolos repetidos', 'Atropinizar hasta secar secreciones bronquiales.']
          ]
        },
        keyPoints: [
          'Antídoto de Benzodiazepinas (Midazolam/Diazepam): Flumazenil | Antídoto de Opioides: Naloxona.',
          'Antídoto de intoxicación por Sulfato de Magnesio: Gluconato de Calcio al 10% (primer signo de toxicidad: pérdida del reflejo rotuliano).',
          'Antídoto de intoxicación por insecticidas Organofosforados/Carbamatos: Sulfato de Atropina.',
          'La Amiodarona endovenosa se diluye exclusivamente en Dextrosa al 5%.'
        ],
        clinicalPearl: 'Tríada de Vigilancia del Sulfato de Magnesio en Gestantes con Preeclampsia Severa: Antes de mantener o pasar cada hora de Sulfato de Magnesio, verifica siempre 3 cosas: 1) Reflejo rotuliano presente, 2) Frecuencia respiratoria ≥ 16 rpm y 3) Diuresis ≥ 30 ml/hora (porque el magnesio se elimina exclusivamente por el riñón).',
        checkQuestion: {
          question: 'En una gestante con preeclampsia severa que recibe infusión de Sulfato de Magnesio, ¿cuál es el primer signo clínico de intoxicación por magnesio y cuál es su antídoto específico que siempre debe estar en la cabecera?',
          options: [
            'Fiebre alta — Antídoto Paracetamol',
            'Abolición (desaparición) del reflejo osteotendinoso rotuliano (patelar) seguida de depresión respiratoria — Antídoto específico: Gluconato de Calcio al 10% EV',
            'Tos seca — Antídoto Salbutamol',
            'Hipertensión — Antídoto Adrenalina'
          ],
          correctIndex: 1,
          explanation: 'La hipermagnesemia bloquea la placa neuromuscular aboliendo primero el reflejo rotuliano; el Gluconato de Calcio al 10% antagoniza de inmediato al magnesio.'
        }
=======
        title: 'Sistema Nervioso, Gastrointestinal, Toxicología Aguda y Antídotos',
        part1Title: 'Parte 1: Benzodiacepinas, Omeprazol, Antieméticos y Farmacovigilancia',
        part2Title: 'Parte 2: Intoxicaciones Agudas y Matriz de Antídotos Fundamentales',
        duration: '6 Horas Lectivas',
        summary: 'Uso seguro de benzodiacepinas, omeprazol y antieméticos, descontaminación con carbón activado y antídotos de urgencia.',
        content: [
          '1. Benzodiacepinas, Omeprazol y Antieméticos: Las Benzodiacepinas (Diazepam, Midazolam, Clonazepam) potencian al GABA; su sobredosis se revierte con el antídoto FLUMAZENIL (IV). El Omeprazol debe tomarse estrictamente EN AYUNAS (30 a 60 min antes del desayuno). La Metoclopramida puede causar reacciones extrapiramidales (rigidez de cuello/tortícolis y crisis oculógiras); el Ondansetrón es seguro y no produce temblores ni distonías.',
          '2. Descontaminación Digestiva y Prohibición en Cáusticos: El Carbón Activado (1 g/kg) atrapa pastillas tóxicas en las primeras 1 a 2 horas. Si el paciente ingirió cáusticos (lejía, soda cáustica, ácido muriático o gasolina), está TERMINANTEMENTE PROHIBIDO provocar el vómito o colocar sonda para lavado gástrico (vuelve a quemar y perfora el esófago).',
          '3. Matriz de Antídotos y Farmacovigilancia: Benzodiacepinas → Flumazenil; Opioides → Naloxona; Paracetamol → N-acetilcisteína; Organofosforados (insecticidas) → Atropina; Heparina → Sulfato de Protamina. Toda RAM se notifica en la "Hoja Amarilla" de Farmacovigilancia.'
        ],
        tableData: {
          title: 'Matriz de Antídotos Esenciales en Urgencias y Emergencias',
          headers: ['Tóxico / Medicamento Involucrado', 'Antídoto Específico de Elección', 'Mecanismo Terapéutico de Reversión'],
          rows: [
            ['Benzodiacepinas (Diazepam, Midazolam)', 'FLUMAZENIL (Ampolla IV)', 'Desplaza a la benzodiacepina de su receptor GABA en 1 a 2 minutos.'],
            ['Opioides (Morfina, Fentanilo, Tramadol)', 'NALOXONA (Ampolla IV)', 'Revierte de inmediato el coma y la depresión respiratoria letal.'],
            ['Paracetamol (Sobredosis > 4 g)', 'N-ACETILCISTEÍNA (NAC)', 'Repone el glutatión hepático y neutraliza el metabolito tóxico NAPQI.'],
            ['Insecticidas Organofosforados / Carbamatos', 'ATROPINA (Sulfato de Atropina IV)', 'Seca las secreciones bronquiales (broncorrea) y revierte la bradicardia.'],
            ['Heparina No Fraccionada', 'SULFATO DE PROTAMINA', 'Neutraliza químicamente a la heparina deteniendo las hemorragias.']
          ]
        },
        keyPoints: [
          'Omeprazol: tomar siempre en ayunas (30-60 min antes del desayuno).',
          'Metoclopramida: riesgo de reacción extrapiramidal (tortícolis/espasmos) | Ondansetrón: antiemético sin efectos extrapiramidales.',
          'En ingesta de lejía o ácidos cáusticos: PROHIBIDO provocar el vómito o realizar lavado gástrico.',
          'Intoxicación por insecticidas organofosforados (sialorrea, miosis, broncorrea): antídoto Atropina IV.'
        ],
        clinicalPearl: 'Manejo Básico en Toxicología (Proteger la Vía Aérea Primero): Ante cualquier paciente intoxicado con depresión de conciencia, la prioridad absoluta antes de dar carbón activado o antídotos es asegurar la vía aérea y colocarlo en posición lateral de seguridad para evitar la broncoaspiración de vómito.',
        checkQuestion: {
          question: '¿Qué antídoto específico se administra por vía endovenosa para revertir la intoxicación por insecticidas organofosforados (con abundante salivación, secreciones bronquiales y bradicardia)?',
          options: [
            'Vitamina K',
            'Atropina (Sulfato de Atropina)',
            'Flumazenil',
            'N-acetilcisteína'
          ],
          correctIndex: 1,
          explanation: 'El Sulfato de Atropina antagoniza la tormenta colinérgica muscarínica de los organofosforados, secando las secreciones bronquiales y elevando la FC.'
        },
        moduleQuiz: [
          { id: 'c5m6q1', question: '¿Qué medicina se utiliza como antídoto de urgencia para despertar a alguien con sobredosis de Diazepam o Midazolam?', options: ['Paracetamol en gotas', 'Flumazenil', 'Vitamina C', 'Insulina'], correctIndex: 1, rationale: 'El flumazenil bloquea el efecto de las benzodiacepinas en el cerebro y despierta al paciente en pocos minutos.' },
          { id: 'c5m6q2', question: '¿A qué hora y en qué momento es obligatorio tomar el Omeprazol para que proteja bien el estómago del ácido?', options: ['Justo después de cenar comida pesada', 'En ayunas, de 30 a 60 minutos antes del desayuno', 'Con el almuerzo', 'A la medianoche'], correctIndex: 1, rationale: 'Debe tomarse en ayunas para que se absorba antes de que las bombas de ácido del estómago se activen con la comida.' },
          { id: 'c5m6q3', question: 'Si tras inyectar Metoclopramida para los vómitos el paciente presenta rigidez en el cuello y ojos torcidos hacia arriba, ¿qué pasó?', options: ['Le dio un ataque al corazón', 'Una reacción motora extrapiramidal en los músculos provocada por el medicamento', 'Intolerancia a la aguja', 'Se fracturó el cuello'], correctIndex: 1, rationale: 'La metoclopramida bloquea la dopamina cerebral; en jóvenes puede causar espasmos musculares transitorios muy molestos.' },
          { id: 'c5m6q4', question: '¿Qué medicamento para los vómitos es muy seguro y NO causa temblores ni rigidez en los músculos del cuerpo?', options: ['Metoclopramida rápida', 'Ondansetrón', 'Lejía', 'Café puro'], correctIndex: 1, rationale: 'El ondansetrón bloquea la serotonina y es el preferido para evitar náuseas de cirugía y quimioterapia sin dar espasmos.' },
          { id: 'c5m6q5', question: '¿Qué sustancia de color negro se da a tomar en urgencias para atrapar pastillas en la barriga antes de que pasen a la sangre?', options: ['Café con sal', 'Carbón Activado', 'Tinta de lapicero', 'Té negro con vinagre'], correctIndex: 1, rationale: 'El carbón activado tiene microporos que absorben y atrapan los medicamentos en el estómago para que se expulsen por las heces.' },
          { id: 'c5m6q6', question: 'Si una persona ingiere lejía, soda cáustica o ácido muriático por accidente, ¿qué acción está TERMINANTEMENTE PROHIBIDA?', options: ['Llevarlo rápido a emergencias', 'Provocarle el vómito o meterle una sonda para lavarle el estómago', 'Dejarlo en reposo', 'Tranquilizarlo'], correctIndex: 1, rationale: 'Al provocar el vómito, el químico cáustico vuelve a quemar la garganta y puede perforar el esófago de forma mortal.' },
          { id: 'c5m6q7', question: '¿Qué medicamento de rescate se coloca a un agricultor intoxicado con veneno insecticida (organofosforado) que tiene baba y ahogo?', options: ['Insulina', 'Atropina (Sulfato de atropina)', 'Paracetamol', 'Alcohol puro'], correctIndex: 1, rationale: 'La atropina seca las secreciones líquidas de los pulmones y sube la frecuencia del corazón, salvándole la vida.' },
          { id: 'c5m6q8', question: '¿Qué antídoto se utiliza si una persona sangra demasiado por una sobredosis del anticoagulante Heparina?', options: ['Vitamina C', 'Sulfato de Protamina', 'Dextrosa con sal', 'Aspirina'], correctIndex: 1, rationale: 'El sulfato de protamina se pega a la heparina y frena de inmediato su efecto anticoagulante en la sangre.' },
          { id: 'c5m6q9', question: '¿Cuál es el objetivo principal de la "Farmacovigilancia" en los centros de salud y hospitales?', options: ['Cobrar multas a los laboratorios', 'Vigilar, anotar y reportar efectos adversos no conocidos de las medicinas para cuidar a la gente', 'Prohibir todas las inyecciones', 'Vender medicamentos caros'], correctIndex: 1, rationale: 'La farmacovigilancia vigila la seguridad real de los fármacos para emitir alertas sanitarias si alguno causa daño.' },
          { id: 'c5m6q10', question: '¿En qué posición de seguridad se debe colocar a un paciente intoxicado que está mareado o inconsciente mientras llega la ayuda?', options: ['Boca abajo con una almohada alta', 'De costado (posición lateral de seguridad) para que si vomita no se ahogue con su propio vómito', 'De cabeza contra la pared', 'Sentado en una silla giratoria'], correctIndex: 1, rationale: 'La posición lateral de seguridad mantiene despejada la vía aérea y drena cualquier vómito hacia el exterior.' }
        ]
>>>>>>> Stashed changes
      }
    ],
    finalExam: [
      {
        id: 'q1',
<<<<<<< Updated upstream
        question: 'Relacione correctamente cada medicamento con su Antídoto Específico en caso de sobredosis o intoxicación aguda:',
        options: [
          'Opioides (Morfina/Fentanilo) → Naloxona | Benzodiazepinas (Midazolam/Diazepam) → Flumazenil | Paracetamol → N-Acetilcisteína | Sulfato de Magnesio → Gluconato de Calcio 10%',
          'Opioides → Vitamina K | Paracetamol → Atropina | Magnesio → Protamina',
          'Heparina → Flumazenil | Warfarina → Naloxona',
          'Todos se revierten únicamente con suero fisiológico'
        ],
        correctIndex: 0,
        rationale: 'Naloxona revierte opioides, Flumazenil revierte benzodiazepinas, N-Acetilcisteína protege al hígado del paracetamol y Gluconato de Calcio antagoniza al Sulfato de Magnesio.'
      },
      {
        id: 'q2',
        question: '¿Cómo se denomina la reacción caracterizada por rubor intenso en cara/cuello e hipotensión cuando la Vancomicina se infunde demasiado rápido, y cómo se previene?',
        options: [
          'Síndrome gris — Se previene pasándola en 5 minutos',
          'Síndrome del Hombre Rojo (liberación de histamina) — Se previene diluyendo adecuadamente (≤ 5 mg/ml) e infundiendo en un tiempo mínimo de 60 a 90 minutos',
          'Shock séptico — Se previene mezclándola con calcio',
          'Cianosis periférica — Se aplica intramuscular'
        ],
        correctIndex: 1,
        rationale: 'La infusión rápida de vancomicina desgranula los mastocitos causando el Síndrome del Hombre Rojo; exige infusión lenta en ≥ 60 minutos.'
      },
      {
        id: 'q3',
        question: 'Con respecto a los fármacos cardiovasculares y anticoagulantes, marque la alternativa CORRECTA:',
        options: [
          'La Furosemida causa hipopotasemia; el Enalapril/Captopril causa tos seca; la Digoxina no se administra si la FC es < 60 lpm; el antídoto de la Heparina es el Sulfato de Protamina y el de la Warfarina es la Vitamina K',
          'La Furosemida sube el potasio y la Digoxina acelera el corazón a 150 lpm',
          'La Heparina se revierte con Vitamina C y la Warfarina con Adrenalina',
          'El Captopril produce sordera irreversible'
        ],
        correctIndex: 0,
        rationale: 'Furosemida depleta potasio, los IECA producen tos seca, la digoxina exige FC ≥ 60 lpm, Protamina neutraliza la heparina y Vitamina K revierte la warfarina.'
      },
      {
        id: 'q4',
        question: '¿Cuáles son las dos toxicidades orgánicas clásicas de los antibióticos Aminoglucósidos (Amikacina, Gentamicina) y qué efecto adverso provoca el Metamizol EV administrado rápidamente?',
        options: [
          'Hepatotoxicidad y alopecia — El Metamizol sube la presión',
          'Nefrotoxicidad (daño renal) y Ototoxicidad (daño auditivo/vestibular) — El Metamizol EV rápido provoca hipotensión arterial severa',
          'Cardiotoxicidad y ceguera — El Metamizol produce estreñimiento',
          'Ninguna, son inocuos'
        ],
        correctIndex: 1,
        rationale: 'Los aminoglucósidos se acumulan en la corteza renal y en la endolinfa del oído interno; y el metamizol en bolo causa hipotensión brusca.'
      },
      {
        id: 'q5',
        question: 'En una gestante con preeclampsia severa tratada con Sulfato de Magnesio, ¿cuáles son los 3 parámetros clínicos obligatorios a monitorizar para detectar toxicidad antes de que ocurra paro cardiorrespiratorio?',
        options: [
          'Temperatura, peso y talla',
          'Reflejo rotuliano (patelar) presente, Frecuencia Respiratoria ≥ 16 rpm y Diuresis horaria ≥ 30 ml/hora (teniendo Gluconato de Calcio al 10% listo como antídoto)',
          'Solo medir la glucosa una vez por semana',
          'Color de las uñas y apetito'
        ],
        correctIndex: 1,
        rationale: 'El magnesio se excreta por vía renal (exige diuresis ≥30 ml/h) y su toxicidad abole primero el reflejo rotuliano y luego deprime el centro respiratorio.'
      }
    ]
  },

  // ==========================================================================
  // CURSO 6: CUIDADOS Y MANEJO DE ACCESOS VASCULARES Y FLEBITIS (40 HORAS - 6 MÓDULOS)
  // ==========================================================================
  {
    id: 'accesos-vasculares-flebitis',
    code: 'EC-CUR-006',
    title: 'Cuidados y Manejo de Accesos Vasculares y Flebitis',
    subtitle: 'Estándares INS y CDC, selección de calibres (Gauge), técnica aséptica con Clorhexidina 2%, VIP Score, protocolo SAS, CVC/PICC y extravasación.',
    category: 'Terapia de Infusión & INS',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'Infusion Nurses Society (INS) / Guías CDC / MINSA',
    badgeColor: 'from-rose-500 to-orange-500',
    manualPdfUrl: '/manuales/manual-accesos-vasculares.pdf',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Anatomía Vascular, Selección del Sitio y Calibres de Catéteres (Gauge)',
        part1Title: 'Parte 1: Anatomía, Fisiología Vascular y Selección del Catéter',
        part2Title: 'Parte 2: Calibres de Catéteres Periféricos y Flujo Hemodinámico',
        duration: '6 Horas Lectivas',
        summary: 'Canalizar de distal a proximal en antebrazo (cefálica y basílica) eligiendo el menor calibre posible (regla del tercio) en material de poliuretano.',
        content: [
          '1. Selección de Vías Periféricas y Zonas Contraindicadas: Canalizar siempre de distal a proximal priorizando las venas rectas del antebrazo (cefálica y basílica). Están contraindicados: miembros inferiores en adultos (riesgo de TVP y embolia), zonas de flexión articular como la fosa antecubital, y el brazo con fístula arteriovenosa de diálisis o vaciamiento ganglionar por mastectomía.',
          '2. Relación Catéter / Vena (Regla del Tercio) y Material: El catéter no debe ocupar más del 33% al 45% de la luz de la vena para permitir hemodilución. Los catéteres de Poliuretano (Vialon) son superiores a los de Teflón rígido porque se ablandan con el calor corporal, reduciendo la flebitis mecánica.'
        ],
        tableData: {
          title: 'Código de Color Internacional y Usos Clínicos por Calibre (Gauge)',
          headers: ['Calibre (Gauge)', 'Color Internacional', 'Flujo Aprox.', 'Indicaciones Asistenciales Específicas'],
          rows: [
            ['14G / 16G', 'Naranja (14G) / Gris (16G)', '180 a 300 ml/min', 'Shock hipovolémico masivo, politrauma grave y cirugía mayor.'],
            ['18 Gauge (18G)', 'Verde', '90 a 105 ml/min', 'Transfusión rutinaria de paquetes globulares (sin hemólisis) y tomografía con contraste.'],
            ['20 Gauge (20G)', 'Rosa', '55 a 65 ml/min', 'Estándar en hospitalización de adultos (hidratación, antibióticos y analgésicos).'],
            ['22G / 24G', 'Azul (22G) / Amarillo (24G)', '15 a 35 ml/min', '22G: Adultos mayores y venas frágiles | 24G: Neonatología, pediatría y oncología.']
          ]
        },
        keyPoints: [
          '14G = Naranja | 16G = Gris | 18G = Verde (sangre) | 20G = Rosa (adulto estándar) | 22G = Azul | 24G = Amarillo (neonatos).',
          'Regla del tercio: el catéter debe ocupar máximo 1/3 de la luz interna de la vena.',
          'Prohibido canalizar miembros inferiores en adultos o el brazo de fístula/mastectomía.'
        ],
        clinicalPearl: 'Materiales (Teflón vs. Poliuretano): Los catéteres de Poliuretano son termo-sensibles y se ablandan dentro de la vena con la temperatura corporal, adaptándose al trayecto vascular y disminuyendo significativamente la flebitis mecánica.',
        checkQuestion: {
          question: '¿Qué color internacional identifica al catéter 20G (estándar en adultos) y cuál al catéter 24G (usado en neonatos)?',
          options: [
            '20G Verde y 24G Azul',
            '20G Rosa y 24G Amarillo',
            '20G Gris y 24G Naranja',
            '20G Azul y 24G Verde'
          ],
          correctIndex: 1,
          explanation: 'El calibre 20G se codifica con color Rosa y el calibre 24G neonatal con color Amarillo.'
        },
        moduleQuiz: [
          { id: 'c6m1q1', question: '¿Cuál es el orden de elección anatómica recomendado para canalizar una vía venosa periférica en el brazo?', options: ['De arriba hacia abajo (hombro a mano)', 'De la parte más distal a la más proximal (iniciando en antebrazo y evitando articulaciones)', 'Directamente en el cuello', 'En los dedos del pie'], correctIndex: 1, rationale: 'Canalizar de distal a proximal preserva el trayecto venoso superior.' },
          { id: 'c6m1q2', question: '¿Qué color internacional identifica al catéter periférico calibre 20 Gauge (20G) comúnmente usado en adultos?', options: ['Amarillo', 'Verde', 'Rosa', 'Azul'], correctIndex: 2, rationale: 'El calibre 20G está universalmente codificado con el color rosa.' },
          { id: 'c6m1q3', question: 'Para transfundir un paquete de sangre (glóbulos rojos) de forma rutinaria sin hemólisis, ¿qué calibre se recomienda?', options: ['Calibre 24G amarillo', 'Calibre 18G verde (o mínimo 20G rosa)', 'Calibre 30G', 'Sonda nasogástrica'], correctIndex: 1, rationale: 'El catéter 18G tiene el diámetro óptimo para que los eritrocitos pasen sin sufrir hemólisis mecánica.' }
        ]
      },
      {
        id: 'm2',
        number: 2,
        title: 'Técnica de Inserción, Antisepsia con Clorhexidina 2% y Fijación Transparente',
        part1Title: 'Parte 1: Técnica de Inserción, Asepsia y Límites de Punción',
        part2Title: 'Parte 2: Fijación Estéril, Apósitos Transparentes y Rotulación',
        duration: '8 Horas Lectivas',
        summary: 'Uso de Clorhexidina alcohólica al 2%, prohibición de repalpar ni reinsertar el mandril, y fijación con apósito semipermeable estéril.',
        content: [
          '1. Antisepsia Estándar de Oro (Clorhexidina 2% en Alcohol 70%): Friccionar en vaivén por 30 segundos y dejar secar al aire por completo (1 a 2 minutos). Una vez desinfectada la piel, QUEDA TERMINANTEMENTE PROHIBIDO VOLVER A PALPAR el sitio de punción.',
          '2. Técnica de Punción y Prohibición de Reinsertar la Guía: Colocar ligadura 10-15 cm arriba (máx. 1-2 min), insertar con bisel hacia arriba a 15°-30° y bajar a 10° al ver retorno venoso. Avanzar el catéter plástico manteniendo fijo el mandril metálico: NUNCA reinsertar la aguja metálica dentro del plástico (corta el catéter provocando embolia). Máximo 2 intentos por operador.',
          '3. Apósito Transparente Estéril y Rotulación: Cubrir con apósito transparente semipermeable de poliuretano (se cambia cada 7 días o antes si se despega/ensucia). Prohibido pegar esparadrapo común sobre el punto de punción. Rotular fecha, hora, calibre (G) y responsable.'
        ],
        keyPoints: [
          'Antiséptico de 1ra elección: Clorhexidina al 2% en alcohol al 70% (dejar secar completo).',
          'Máximo 2 intentos de punción por enfermero (máximo 4 en total).',
          'Jamás reintroducir el fiador/mandril metálico dentro de la cánula plástica.',
          'El apósito transparente estéril permite visualizar el punto de inserción y se cambia cada 7 días.'
        ],
        clinicalPearl: 'Prohibición de Esparadrapos Tradicionales Sucios: Queda terminantemente prohibido colocar esparadrapo de tela común directamente sobre el sitio de inserción del catéter. La tela es porosa, retiene humedad, alberga bacterias y oculta los signos tempranos de flebitis.',
        checkQuestion: {
          question: 'Si al introducir el catéter venoso no se logra canalizar y se retira parcialmente el mandril metálico, ¿por qué NUNCA se debe volver a empujar la aguja metálica dentro del catéter plástico?',
          options: [
            'Porque se despinta el color del catéter',
            'Porque el bisel de acero puede seccionar el plástico y disparar un émbolo de catéter hacia la circulación',
            'Porque se enfría la vena',
            'Porque gasta más suero'
          ],
          correctIndex: 1,
          explanation: 'Reinsertar la guía metálica dentro del teflón/poliuretano puede guillotinar la cánula y producir una embolia por fragmento de catéter.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Fisiopatología de la Flebitis, Osmolaridad y Escala Visual VIP Score',
        part1Title: 'Parte 1: Tipos de Flebitis (Mecánica, Química, Bacteriana) y Osmolaridad',
        part2Title: 'Parte 2: Escala Visual de Flebitis (VIP Score de Jackson/INS) y Manejo',
        duration: '6 Horas Lectivas',
        summary: 'Diferenciación entre flebitis mecánica, química (>600 mOsm/L) y bacteriana, y valoración sistemática con la escala VIP (Grados 0 a 4).',
        content: [
          '1. Tipos de Flebitis y Límites de Osmolaridad: 1) Mecánica (catéter grueso o en pliegue articular); 2) Química (soluciones con pH <5 o >9, o con osmolaridad > 600 mOsm/L como NPT, Dextrosa >10% o KCl concentrado, que exigen Vía Central); 3) Bacteriana (deficiente asepsia). La tasa hospitalaria de flebitis debe ser < 5%.',
          '2. Escala Visual de Flebitis (VIP Score 0 a 4): Grado 0 (sin signos); Grado 1 (dolor leve o eritema leve sin hinchazón: observar); Grado 2 (dolor + eritema + edema/hinchazón: FLEBITIS CONFIRMADA → RETIRAR CATÉTER DE INMEDIATO); Grado 3 (dolor + eritema + cordón venoso palpable < 2.5 cm); Grado 4 (cordón venoso > 2.5 cm + pus/secreción purulenta: cultivo de punta de catéter).'
        ],
        tableData: {
          title: 'Escala Visual de Flebitis de la INS (VIP Score - Grados 0 a 4)',
          headers: ['Grado VIP', 'Signos Clínicos Observados', 'Conducta Asistencial Inmediata'],
          rows: [
            ['Grado 0', 'Sitio limpio, sin dolor ni eritema', 'Sin flebitis. Mantener observación por turno.'],
            ['Grado 1', 'Dolor leve o eritema leve sin edema', 'Posible flebitis incipiente. Vigilar estrechamente.'],
            ['Grado 2', 'Dolor + Eritema + Edema (hinchazón)', 'FLEBITIS TEMPRANA. Retirar catéter de inmediato y rotar sitio.'],
            ['Grado 3', 'Dolor + Eritema + Cordón venoso duro < 2.5 cm', 'FLEBITIS MODERADA/AVANZADA. Retirar catéter y aplicar compresas tibias.'],
            ['Grado 4', 'Cordón venoso > 2.5 cm + Drenaje purulento (pus)', 'TROMBOFLEBITIS PURULENTA. Retirar catéter, cultivar punta (5 cm) y notificar.']
          ]
        },
        keyPoints: [
          'Límite máximo de osmolaridad por vía periférica: < 600 mOsm/L (mayor a 600-900 mOsm/L exige CVC).',
          'A partir del Grado 2 de la escala VIP (dolor + eritema + hinchazón), se retira el catéter de inmediato.',
          'Cordón venoso duro palpable = Tromboflebitis (Grado 3 o 4).'
        ],
        clinicalPearl: 'Retiro Inmediato ante Grado 2 o Superior: Apenas el paciente presente Grado 2 (dolor con hinchazón o enrojecimiento), el catéter debe ser retirado inmediatamente. Jamás insistir en "pasar el suero más lento" ni irrigar con jeringa a presión.',
        checkQuestion: {
          question: 'Si al evaluar la vía periférica de un paciente observa dolor, enrojecimiento y edema (hinchazón local visible = Grado 2 VIP), ¿cuál es la conducta obligatoria?',
          options: [
            'Pasar el suero al doble de velocidad',
            'Retirar el catéter venoso de inmediato, elevar el miembro, aplicar compresas tibias y canalizar en la otra extremidad si requiere continuar terapia',
            'Taparlo con esparadrapo para que no se vea',
            'Esperar a que salga pus para retirarlo'
          ],
          correctIndex: 1,
          explanation: 'El Grado 2 confirma flebitis establecida y exige el retiro inmediato del catéter para evitar progresión a tromboflebitis o celulitis.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Lavado Pulsátil (Push-Pause), Protocolo SAS y Retiro por Indicación Clínica',
        part1Title: 'Parte 1: Lavado con Salino 0.9%, Técnica Push-Pause y Presión Positiva',
        part2Title: 'Parte 2: Criterios de Retiro por Indicación Clínica vs. Rutina',
        duration: '8 Horas Lectivas',
        summary: 'Mantenimiento de la permeabilidad con Cloruro de Sodio al 0.9% usando jeringas de 10 ml, técnica pulsátil y retiro seguro.',
        content: [
          '1. Lavado Pulsátil (Push-Pause) y Presión Positiva: El lavado de vías periféricas se realiza con Cloruro de Sodio al 0.9% aplicando bolos cortos ("empujo-paro-empujo-paro") para crear turbulencia que barra restos de sangre y fármacos, y cerrando el clamp mientras aún se empuja el émbolo (presión positiva).',
          '2. Regla de las Jeringas de 10 ml y Protocolo SAS: NUNCA usar jeringas pequeñas (1 ml, 3 ml o 5 ml) para lavar o desobstruir un catéter porque generan presiones > 40 psi que rompen el catéter o la vena; usar siempre jeringas de 10 ml. Protocolo SAS: Salino → Administrar fármaco → Salino.',
          '3. Retiro por Indicación Clínica y Vías de Emergencia: Según los CDC e INS, el catéter se retira por indicación clínica (fin de tratamiento o signos de flebitis/infiltración). Las vías colocadas en emergencias extrahospitalarias (ambulancia/calle sin asepsia óptima) deben retirarse y cambiarse antes de las 24 a 48 horas.'
        ],
        keyPoints: [
          'Solución estándar de lavado de vías periféricas: Cloruro de Sodio al 0.9% (suero fisiológico).',
          'Usar siempre jeringas de 10 ml para lavar catéteres (las jeringas pequeñas generan exceso de presión).',
          'Vías colocadas en urgencia extrahospitalaria sin asepsia estricta: cambiar dentro de las primeras 24 a 48 horas.'
        ],
        clinicalPearl: 'Regla Estricta (Prohibido Usar Jeringas Menores de 10 ml para Lavar Vías): Por leyes de la física hidráulica, las jeringas de 1, 3 o 5 ml generan presiones manuales altísimas (>35 a 50 psi) que pueden fracturar el catéter plástico o desprender un trombo.',
        checkQuestion: {
          question: '¿Por qué está prohibido utilizar jeringas pequeñas de 1 ml o 3 ml para lavar o permeabilizar un catéter venoso?',
          options: [
            'Porque entran muy pocos mililitros',
            'Porque generan una presión hidráulica excesiva (psi) que puede fracturar el catéter o romper la vena; se deben usar jeringas de 10 ml',
            'Porque son exclusivas para vía oral',
            'Porque contaminan el conector'
          ],
          correctIndex: 1,
          explanation: 'A menor diámetro del émbolo, mayor presión en psi; por ello las guías INS exigen usar jeringas de 10 ml.'
        }
      },
      {
        id: 'm5',
        number: 5,
        title: 'Accesos Vasculares Centrales (CVC, PICC, Port-a-Cath) y Prevención de Bacteriemia',
        part1Title: 'Parte 1: CVC, PICC, Reservorios Subcutáneos (Aguja Huber) y Lúmenes',
        part2Title: 'Parte 2: Care Bundle de Prevención de Bacteriemia Asociada a CVC (BSI)',
        duration: '6 Horas Lectivas',
        summary: 'Ubicación de la punta en vena cava superior, control radiológico de neumotórax, uso de aguja Huber, manejo de lúmenes y Bundle de CVC.',
        content: [
          '1. Ubicación de Punta, Control de Tórax y Lúmenes: La punta de todo CVC o PICC debe ubicarse en el tercio inferior de la Vena Cava Superior (unión cavoauricular). Tras colocar un CVC subclavio o yugular es obligatorio tomar una Radiografía de Tórax para descartar Neumotórax y confirmar la punta. En un CVC trilumen: Lumen Distal (marrón, 16G) para PVC y sangre/coloides; Lumen Medial (azul) exclusivo para Nutrición Parenteral Total (NPT); Lumen Proximal (blanco) para medicación y aminas.',
          '2. Reservorio Subcutáneo (Port-a-Cath): Cámara de titanio con membrana de silicona bajo la piel; se punciona exclusivamente con Aguja Especial Huber (no cortante) para no dañar la silicona.',
          '3. Bundle de Prevención de Bacteriemia por CVC (CDC): Higiene de manos, máxima barrera estéril (gorro, mascarilla, bata, guantes y campo de cuerpo entero), Clorhexidina al 2%, preferir vena subclavia y evitar la vena femoral (mayor riesgo de infección), frotar conectores 15 segundos con alcohol 70% (Hub Scrubbing) y cambiar líneas continuas cada 96 h (cada 24 h en NPT/lípidos o sangre).'
        ],
        keyPoints: [
          'Punta de CVC/PICC: tercio inferior de la Vena Cava Superior | Control obligatorio post-inserción: Radiografía de Tórax (descarta neumotórax).',
          'Reservorio oncológico Port-a-Cath: punzar solo con Aguja Huber.',
          'Lumen Medial del CVC: reservado exclusivamente para Nutrición Parenteral Total (NPT).'
        ],
        clinicalPearl: 'Manejo de Aguja Huber en Reservorios Port-a-Cath: La cámara implantable de silicona debe puncionarse exclusivamente con agujas especiales Huber (sin bisel cortante). Las agujas hipodérmicas comunes rebanan la membrana de silicona, inutilizando el reservorio.',
        checkQuestion: {
          question: '¿Por qué es obligatorio realizar una Radiografía de Tórax inmediatamente después de insertar un Catéter Venoso Central en la vena subclavia o yugular?',
          options: [
            'Para ver el tamaño del corazón',
            'Para verificar que la punta esté en la vena cava superior y descartar un neumotórax accidental antes de iniciar infusiones',
            'Para medir la presión arterial',
            'Solo se pide si el paciente tose'
          ],
          correctIndex: 1,
          explanation: 'La radiografía de control confirma el emplazamiento cavoauricular de la punta y descarta punción pleural (neumotórax/hemotórax).'
        }
      },
      {
        id: 'm6',
        number: 6,
        title: 'Infiltración vs. Extravasación de Vesicantes y Protocolo de 5 Pasos',
        part1Title: 'Parte 1: Diferenciación entre Infiltración y Extravasación de Fármacos Vesicantes',
        part2Title: 'Parte 2: Protocolo de Emergencia ante Extravasación (5 Pasos) y Residuos',
        duration: '6 Horas Lectivas',
        summary: 'Identificación de fármacos vesicantes (vasopresores, calcio, citostáticos) y aplicación inmediata de los 5 pasos de rescate.',
        content: [
          '1. Infiltración vs. Extravasación: La Infiltración es la salida de una solución NO vesicante (suero fisiológico) al tejido subcutáneo. La Extravasación es la fuga de un fármaco VESICANTE (Noradrenalina, Dopamina, Gluconato de Calcio, Dextrosa 33-50%, Quimioterapia) que produce dolor urente, flictenas y necrosis tisular.',
          '2. Protocolo de Emergencia ante Extravasación (5 Pasos): 1) DETENER LA INFUSIÓN DE INMEDIATO; 2) NO RETIRAR EL CATÉTER TODAVÍA; 3) ASPIRAR con jeringa de 5-10 ml a través del catéter para extraer el fármaco acumulado; 4) ADMINISTRAR ANTÍDOTO (Fentolamina para vasopresores; Hialuronidasa para calcio/contrastes); 5) RETIRAR CATÉTER, delimitar los bordes con marcador indeleble y elevar la extremidad.'
        ],
        keyPoints: [
          'Infiltración = líquido no vesicante | Extravasación = fármaco vesicante (causa necrosis).',
          'Ante extravasación: 1° Detener infusión, 2° NO retirar catéter aún, 3° Aspirar por el catéter, 4° Antídoto, 5° Retirar, delimitar bordes y elevar brazo.',
          'Antídoto para extravasación de Noradrenalina/Dopamina: Fentolamina | Para Calcio: Hialuronidasa.'
        ],
        clinicalPearl: 'Protocolo de Emergencia ante Extravasación: Tras detener el goteo, NO retire el catéter plástico de inmediato; utilícelo primero para aspirar con una jeringa de 5 a 10 ml la mayor cantidad posible del medicamento vesicante atrapado en el tejido subcutáneo.',
        checkQuestion: {
          question: 'Ante la extravasación de un medicamento vesicante, después de detener la infusión de inmediato, ¿por qué NO se debe retirar el catéter plástico en el primer segundo?',
          options: [
            'Porque sirve para seguir pasando suero',
            'Porque primero se debe conectar una jeringa al catéter para aspirar la mayor cantidad posible del fármaco vesicante acumulado antes de retirarlo',
            'Porque debe quedarse puesto 7 días',
            'Para no gastar gasas'
          ],
          correctIndex: 1,
          explanation: 'El catéter in situ permite aspirar directamente desde el bolsillo subcutáneo el remanente de droga vesicante antes de que necrosen los tejidos.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿Cuál es el calibre y color estándar de catéter periférico para hospitalización de adultos, cuál para neonatos y qué establece la "regla del tercio"?',
        options: [
          'Adultos 14G naranja y neonatos 18G verde — El catéter debe tapar toda la vena',
          'Adultos 20G (Rosa) y neonatos 24G (Amarillo) — El catéter no debe ocupar más de un tercio (33%-45%) de la luz de la vena',
          'Adultos 24G amarillo y neonatos 16G gris — No importa el grosor de la vena',
          'Adultos 22G azul en vena safena del pie'
        ],
        correctIndex: 1,
        rationale: 'El calibre 20G (rosa) es el estándar en adultos y el 24G (amarillo) en neonatos; ocupar ≤1/3 de la vena garantiza flujo sanguíneo peritubo.'
      },
      {
        id: 'q2',
        question: '¿Cuál es el antiséptico de primera elección para canalizar accesos vasculares según los CDC/INS y qué acción está prohibida tras aplicarlo?',
        options: [
          'Agua oxigenada — Soplar la piel',
          'Clorhexidina al 2% en alcohol al 70% (dejando secar 1-2 min) — Queda prohibido volver a palpar el sitio desinfectado',
          'Jabón común — Pegar esparadrapo de tela sobre la punción',
          'Alcohol yodado — Reinsertar el mandril metálico en el plástico'
        ],
        correctIndex: 1,
        rationale: 'La clorhexidina alcohólica al 2% ofrece rápida acción bactericida y efecto residual de 48-72 h; repalpar contamina el área estéril.'
      },
      {
        id: 'q3',
        question: '¿A partir de qué grado de la escala visual de flebitis (VIP Score) es obligatorio retirar de inmediato el catéter periférico y qué osmolaridad exige Vía Central?',
        options: [
          'Grado 0 — Osmolaridad > 100 mOsm/L',
          'Grado 2 (dolor + eritema + edema/hinchazón) — Soluciones con osmolaridad > 600 mOsm/L exigen Catéter Venoso Central',
          'Solo en Grado 4 con pus — Osmolaridad > 200 mOsm/L',
          'Nunca se retira — Cualquier osmolaridad pasa por mano'
        ],
        correctIndex: 1,
        rationale: 'El Grado 2 confirma flebitis y obliga al retiro inmediato; soluciones >600 mOsm/L (como NPT) queman las venas periféricas y exigen CVC.'
      },
      {
        id: 'q4',
        question: '¿Con qué solución, técnica y tamaño mínimo de jeringa se realiza el lavado (flushing) seguro de los catéteres venosos?',
        options: [
          'Agua destilada en jeringa de 1 ml a máxima presión',
          'Cloruro de Sodio al 0.9% con técnica pulsátil (Push-Pause), presión positiva y jeringa de 10 ml',
          'Dextrosa al 5% en jeringa de 3 ml',
          'Heparina pura en jeringa de insulina'
        ],
        correctIndex: 1,
        rationale: 'El lavado pulsátil con NaCl 0.9% en jeringa de 10 ml evita presiones excesivas (>35 psi) y limpia eficazmente la luz del catéter.'
      },
      {
        id: 'q5',
        question: 'Ordene correctamente los pasos de emergencia ante la extravasación de un fármaco vesicante:',
        options: [
          'Retirar el catéter de golpe, masajear con alcohol y vendar fuerte',
          '1° Detener la infusión de inmediato, 2° No retirar aún el catéter y aspirar con jeringa de 5-10 ml el fármaco residual, 3° Administrar antídoto si aplica, 4° Retirar catéter, delimitar bordes y elevar el miembro',
          'Inyectar 50 ml de suero a presión para diluir la hinchazón',
          'Bajar el brazo al suelo y aplicar torniquete'
        ],
        correctIndex: 1,
        rationale: 'Detener la infusión, aspirar por la cánula antes de retirarla, aplicar el antídoto específico, delimitar bordes y elevar la extremidad previene la necrosis.'
      }
    ]
  },

  // ==========================================================================
  // CURSO 7: PREVENCIÓN Y CLASIFICACIÓN DE LESIONES POR PRESIÓN (LPP - 40 HORAS - 6 MÓDULOS)
  // ==========================================================================
  {
    id: 'prevencion-clasificacion-lpp',
    code: 'EC-CUR-007',
    title: 'Prevención y Clasificación de Lesiones por Presión (LPP)',
    subtitle: 'Directrices EPUAP/NPIAP y MINSA, fisiopatología del cono inverso, Escala de Braden, estadiaje (Estadios 1-4, DTP), SEMP, nutrición y LPRDM.',
    category: 'Seguridad del Paciente & Heridas',
    academicHours: 40,
    credits: 2.5,
    level: 'Alta Especialización (40h)',
    normativaBase: 'Guías Internacionales EPUAP/NPIAP/PPPIA / Calidad MINSA',
    badgeColor: 'from-amber-500 to-yellow-600',
    manualPdfUrl: '/manuales/manual-prevencion-lpp.pdf',
    modules: [
      {
        id: 'm1',
        number: 1,
        title: 'Anatomía Cutánea, Presión de Oclusión Capilar (32 mmHg), Cizalla y Microclima',
        part1Title: 'Parte 1: Fisiopatología del Daño Tisular y Modelo del Cono Inverso',
        part2Title: 'Parte 2: Fuerzas de Cizallamiento, Fricción y Microclima',
        duration: '6 Horas Lectivas',
        summary: 'Superar la presión capilar basal (20-32 mmHg) colapsa la perfusión comenzando la necrosis en el músculo profundo (cono inverso), agravada por cizalla y humedad.',
        content: [
          '1. Presión de Oclusión Capilar y Modelo del Cono Inverso: La presión capilar normal oscila entre 20 y 32 mmHg. Presiones superiores colapsan los vasos provocando isquemia y necrosis. Como el músculo profundo pegado al hueso consume más oxígeno que la piel, se muere primero ("de adentro hacia afuera" o fenómeno del cono inverso).',
          '2. Cizallamiento vs. Fricción y Microclima: El Cizallamiento (cizalla) tuerce y desgarra los vasos profundos cuando el paciente resbala en la cama con el cabecero elevado >30°. La Fricción pela la epidermis al arrastrar al paciente sobre la sábana. El exceso de humedad (maceración por orina/sudor) debilita la piel hasta 5 veces y la fiebre aumenta un 10% la demanda de oxígeno por cada 1 °C.',
          '3. Prominencias Óseas según Posición: En Decúbito Supino (boca arriba): Hueso Sacro/cóccix y Talones (calcáneos); en Decúbito Lateral: Trocánter mayor de la cadera y maléolos; en Sedestación (silla de ruedas): Tuberosidades isquiáticas.'
        ],
        tableData: {
          title: 'Fuerzas Biomecánicas, Microclima y Prominencias Óseas de Riesgo',
          headers: ['Factor / Posición', 'Mecanismo / Zona Anatómica', 'Impacto Clínico en la Génesis de LPP'],
          rows: [
            ['Presión > 32 mmHg', 'Supera la presión capilar arteriolar', 'Colapso vascular e isquemia; el músculo profundo muere primero (cono inverso).'],
            ['Cizallamiento (Cizalla)', 'Cabecero > 30° (el cuerpo resbala)', 'Estira, angula y desgarra las arterias perforantes profundas del sacro.'],
            ['Humedad (Maceración)', 'Orina, heces o sudor bajo plásticos', 'Ablanda el estrato córneo reduciendo 5 veces la resistencia mecánica de la piel.'],
            ['Supino / Lateral / Silla', 'Sacro y Talones / Trocánter / Isquion', 'Zonas donde el peso corporal aplasta los tejidos contra el hueso.']
          ]
        },
        keyPoints: [
          'Presión de cierre capilar basal: 32 mmHg | Tejido más sensible a la hipoxia: el músculo profundo (cono inverso).',
          'Cizallamiento = desgarro vascular profundo al resbalar en cama | Fricción = roce superficial epidérmico.',
          'Sitios más frecuentes en decúbito supino: 1° Sacro y 2° Talones | En decúbito lateral: Trocánter mayor.'
        ],
        clinicalPearl: 'El Modelo del Cono Inverso ("De Adentro Hacia Afuera"): El tejido muscular presenta una tasa metabólica elevada y menor tolerancia a la anoxia que la piel. Cuando se comprime contra el hueso, la necrosis comienza tempranamente en el plano muscular profundo antes de que la piel externa se rompa.',
        checkQuestion: {
          question: '¿A partir de qué presión externa se colapsan los capilares sanguíneos y cuál es el tejido que sufre necrosis primero según el modelo del cono inverso?',
          options: [
            'Más de 120 mmHg — Las uñas',
            'Por encima de 32 mmHg — El tejido muscular profundo adherido al hueso',
            'Con 5 mmHg — El vello cutáneo',
            'Más de 200 mmHg — La capa córnea superficial'
          ],
          correctIndex: 1,
          explanation: 'Presiones > 32 mmHg ocluyen el lecho capilar, y el músculo profundo se necrosa antes que la piel por su alta demanda metabólica.'
        }
      },
      {
        id: 'm2',
        number: 2,
        title: 'Escala de Valoración de Braden, Tiempos de Evaluación y Protocolos',
        part1Title: 'Parte 1: Escala de Braden (6 Subescalas y Puntos de Corte)',
        part2Title: 'Parte 2: Frecuencia de Revaloración en UCI y Hospitalización',
        duration: '8 Horas Lectivas',
        summary: 'Aplicación en las primeras 6 a 8 horas del ingreso de las 6 subescalas de Braden (regla inversa: a menor puntaje, mayor riesgo).',
        content: [
          '1. Escala de Braden (Estándar de Oro - 6 a 23 puntos): Evalúa 6 subescalas: 1) Percepción sensorial; 2) Exposición a la humedad; 3) Actividad física; 4) Movilidad; 5) Nutrición; 6) Fricción y cizallamiento. REGLA INVERSA: A MENOR PUNTAJE, MAYOR ES EL RIESGO (≤ 9 ptos = Riesgo Muy Alto; 10-12 ptos = Riesgo Alto; 13-14 ptos = Riesgo Moderado; 15-18 ptos = Riesgo Bajo; 19-23 ptos = Sin riesgo).',
          '2. Tiempos de Valoración y Reevaluación: La primera evaluación debe realizarse dentro de las primeras 6 a 8 horas del ingreso. Se reevalúa cada 12-24 horas (diario) en UCI, y cada 48-72 horas en hospitalización general, acompañándose siempre de inspección cefalocaudal de la piel (especialmente sacro y talones) y registro en la Historia Clínica.'
        ],
        tableData: {
          title: 'Puntos de Corte e Intervenciones según la Escala de Braden (6 a 23 Puntos)',
          headers: ['Puntaje Braden', 'Nivel de Riesgo Clínico', 'Intervenciones Preventivas Obligatorias'],
          rows: [
            ['15 a 18 Puntos', 'RIESGO BAJO', 'Cambios posturales programados, protección de talones y movilización activa.'],
            ['13 a 14 Puntos', 'RIESGO MODERADO', 'Colchón viscoelástico (SEMP estática), cambios cada 2-3 h y AGHO en piel sana.'],
            ['10 a 12 Puntos', 'RIESGO ALTO', 'Colchón de aire alternante (SEMP dinámica), cambios cada 2 h, apósitos en sacro/talón y soporte proteico.'],
            ['≤ 9 Puntos', 'RIESGO MUY ALTO', 'SEMP dinámica avanzada, descarga total de talones en el aire y vigilancia estricta por turno.']
          ]
        },
        keyPoints: [
          'Escala de Braden: 6 subescalas (puntaje de 6 a 23). A menor puntaje, MAYOR riesgo de LPP.',
          'Braden ≤ 12 puntos = Riesgo Alto / Muy Alto (exige colchón de aire alternante SEMP dinámica).',
          'Primera valoración obligatoria: en las primeras 6 a 8 horas del ingreso hospitalario (en UCI reevaluar a diario).'
        ],
        clinicalPearl: 'Factores de Riesgo Críticos No Cuantificados en Braden: La infusión continua de vasopresores como la Noradrenalina (que cierra las arteriolas de la piel), la hipotensión severa y la hipoalbuminemia (<2.5 g/dl) multiplican el riesgo de LPP independientemente del puntaje numérico.',
        checkQuestion: {
          question: 'Si al evaluar a un paciente recién ingresado a UCI obtiene 10 puntos en la Escala de Braden, ¿cómo se interpreta su nivel de riesgo?',
          options: [
            'Sin riesgo porque tiene pocos puntos',
            'RIESGO ALTO de desarrollar Lesiones por Presión (en Braden, a menor puntaje mayor es el riesgo)',
            'Riesgo leve ambulatorio',
            'Paciente completamente independiente'
          ],
          correctIndex: 1,
          explanation: 'En la escala de Braden la puntuación es inversa: de 10 a 12 puntos corresponde a Riesgo Alto y ≤ 9 puntos a Riesgo Muy Alto.'
        }
      },
      {
        id: 'm3',
        number: 3,
        title: 'Clasificación y Estadiaje Internacional EPUAP/NPIAP (Estadios 1 a 4, No Estadificable y DTP)',
        part1Title: 'Parte 1: Estadios 1, 2, 3 y 4, Prueba de Vitopresión y No Retrogresión',
        part2Title: 'Parte 2: LPP No Estadificables, Daño Tisular Profundo (DTP) y Diferencial con DAI',
        duration: '6 Horas Lectivas',
        summary: 'Identificación clínica por profundidad tisular (EPUAP/NPIAP), prohibición de des-estadificar hacia atrás y diferenciación frente a dermatitis por incontinencia.',
        content: [
          '1. Estadios EPUAP/NPIAP: Estadio 1: Piel intacta con eritema NO blanqueable a la digitopresión de 3 segundos; Estadio 2: Pérdida de espesor parcial con dermis expuesta (úlcera superficial rosada o ampolla serosa); Estadio 3: Pérdida total de la piel con grasa subcutánea visible (sin ver hueso ni músculo); Estadio 4: Pérdida total con hueso, tendón o músculo directamente visibles o palpables.',
          '2. Categorías Especiales: LPP No Estadificable: Fondo cubierto por escara negra dura o esfacelo amarillo que impide ver la profundidad (nota: la escara negra seca y firme en el talón NO se desbrida porque actúa como cubierta biológica natural). Daño Tisular Profundo (DTP): Piel intacta violácea/marrón oscura o ampolla llena de sangre.',
          '3. Regla de No Retrogresión y Diferencial con DAI: Una LPP Estadio 4 que va cerrando NUNCA pasa a llamarse Estadio 2 (se registra como "LPP Estadio 4 en proceso de cicatrización"). La Dermatitis Asociada a Incontinencia (DAI) se ubica en pliegues con forma difusa en mariposa y siempre es superficial.'
        ],
        tableData: {
          title: 'Clasificación Internacional de las Lesiones por Presión (EPUAP / NPIAP)',
          headers: ['Categoría / Estadio', 'Profundidad Anatómica y Signo Clave', 'Regla Clínica de Actuación'],
          rows: [
            ['ESTADIO 1', 'Piel íntegra con eritema NO blanqueable al presionar 3 seg', 'Descargar presión al instante, aplicar AGHO y prohibido masajear.'],
            ['ESTADIO 2', 'Pérdida parcial (epidermis/dermis): lecho rosado o flictena serosa', 'Diferenciar de dermatitis por pañal (DAI). Notificar como evento adverso.'],
            ['ESTADIO 3', 'Pérdida total de piel: grasa subcutánea amarilla visible', 'Hueso y músculo NO expuestos. Curación húmeda según esquema TIME.'],
            ['ESTADIO 4', 'Hueso, tendón o músculo directamente expuestos o palpables', 'Alto riesgo de osteomielitis. Nunca se des-estadifica en sentido inverso.'],
            ['NO ESTADIFICABLE / DTP', 'Cubierta por escara/esfacelo | DTP: piel violácea o flictena hemática', 'Escara negra seca y estable en talón sin infección NO se corta ni arranca.']
          ]
        },
        keyPoints: [
          'Estadio 1 = eritema no blanqueable en piel intacta | Estadio 2 = dermis o ampolla serosa | Estadio 3 = grasa | Estadio 4 = hueso/músculo.',
          'Prohibida la retrogresión de estadios (un Estadio 4 en curación sigue siendo Estadio 4 en proceso de cicatrización).',
          'Escara seca, dura y sin pus en el talón: NO desbridar (tapón biológico protector).'
        ],
        clinicalPearl: 'Prueba de la Vitopresión o Digitopresión: Se presiona suavemente con el dedo durante 3 segundos sobre la zona enrojecida. Si al soltar sigue roja fija y NO se pone blanca, la microcirculación ya está dañada y se confirma una LPP Estadio 1.',
        checkQuestion: {
          question: '¿Cómo se clasifica una úlcera por presión tan profunda que permite observar o palpar directamente el hueso sacro o el músculo?',
          options: ['Estadio 1', 'Estadio 2', 'Estadio 3', 'Estadio 4'],
          correctIndex: 3,
          explanation: 'La exposición directa de músculo, tendón o hueso define el Estadio 4 de la clasificación EPUAP/NPIAP.'
        }
      },
      {
        id: 'm4',
        number: 4,
        title: 'Prevención Activa: Reloj Postural a 30°, SEMP, Talones Flotantes y AGHO',
        part1Title: 'Parte 1: Regla de los 30°, Cambios Posturales, SEMP y Prohibición de Rodetes',
        part2Title: 'Parte 2: Técnica de Talones Flotantes, AGHO y Sábanas de Transferencia',
        duration: '8 Horas Lectivas',
        summary: 'Movilización programada cada 2 a 3 horas en lateral oblicuo a 30°, colchones de aire alternante y suspensión total de talones.',
        content: [
          '1. Reloj de Cambios Posturales y Regla de los 30°: Rotar al paciente encamado cada 2 a 3 horas (en silla de ruedas reposicionar cada 1 h). Al ponerlo de costado usar la posición lateral oblicua de 30° (nunca a 90° sobre el trocánter) y mantener el cabecero ≤ 30° para evitar cizallamiento.',
          '2. Superficies Especiales (SEMP) y Prohibición de Flotadores: Las SEMP dinámicas (colchones de celdas de aire alternante) inflan y desinflan sus tubos por ciclos para pacientes de riesgo alto. Queda TERMINANTEMENTE PROHIBIDO usar flotadores o cojines con hueco en anillo (rodetes) porque estrangulan la circulación en círculo.',
          '3. Técnica de Talones Flotantes, AGHO y Prohibición de Masaje: Colocar una almohada a lo largo de las pantorrillas dejando los talones suspendidos en el aire sin tocar el colchón (sin presionar el hueco poplíteo). Aplicar Ácidos Grasos Hiperoxigenados (AGHO) con toques suaves en piel sana; está PROHIBIDO masajear zonas enrojecidas.'
        ],
        keyPoints: [
          'Cambios posturales en cama: cada 2 a 3 horas con inclinación lateral de 30° y cabecero ≤ 30°.',
          'PROHIBIDO masajear prominencias óseas enrojecidas y PROHIBIDO usar rodetes o flotadores con hueco central.',
          'Técnica de "talones flotantes": almohada longitudinal bajo las pantorrillas dejando el talón en el aire.'
        ],
        clinicalPearl: 'PROHIBICIÓN ESTRICTA de Dispositivos en Forma de Anillo o Flotador (Rodetes): Aunque parecen aliviar el centro del sacro, su aro exterior actúa como un torniquete circular que ocluye la irrigación sanguínea hacia el centro, provocando edema y necrosis severa.',
        checkQuestion: {
          question: '¿Cómo se aplica correctamente la técnica de descarga total de "talones flotantes" y por qué están prohibidos los cojines tipo flotador o rodete en el sacro?',
          options: [
            'Poniendo un flotador redondo debajo del talón',
            'Colocando una almohada a lo largo de la pantorrilla para que los talones queden en el aire sin tocar el colchón — Los rodetes están prohibidos porque su aro estrangula la circulación como un torniquete',
            'Masajeando fuerte los talones con alcohol cada hora',
            'Vendando los pies contra la baranda'
          ],
          correctIndex: 1,
          explanation: 'Suspender los talones con almohada bajo las pantorrillas logra presión cero; los rodetes producen estrangulamiento vascular periférico.'
        }
      },
      {
        id: 'm5',
        number: 5,
        title: 'Nutrición Clínica Hiperproteica, Micronutrientes y Manejo de la Incontinencia',
        part1Title: 'Parte 1: Requerimientos Proteicos, Albúmina, Vitamina C, Zinc y Arginina',
        part2Title: 'Parte 2: Cuidado del Microclima Perianal (Syndets y Cremas Barrera)',
        duration: '6 Horas Lectivas',
        summary: 'Soporte con proteínas (1.25-1.5 g/kg/día), arginina, vitamina C y zinc para la síntesis de colágeno, y protección cutánea con óxido de zinc/dimeticona.',
        content: [
          '1. Nutrición para Prevenir y Cicatrizar LPP: Las guías EPUAP/NPIAP recomiendan 30-35 kcal/kg/día, aporte proteico de 1.25 a 1.5 g de proteína/kg/día (hasta 2.0 g/kg en LPP múltiples) e hidratación de 30-35 ml/kg/día (1.5 a 2 L/día). La hipoalbuminemia (<3.0 g/dl) genera edema tisular que se ulcera rápidamente. Los tres micronutrientes clave para fabricar colágeno son: Proteínas/Arginina, Vitamina C y Zinc.',
          '2. Manejo de la Piel con Incontinencia: Limpiar con agua tibia y limpiadores sin detergente (Syndets a pH 5.5), secar con toques suaves sin frotar y aplicar cremas barrera (Óxido de Zinc o Dimeticona). Retirar hules o plásticos no transpirables bajo la sábana y nunca colocar sonda Foley solo para ahorrar cambios de pañal.'
        ],
        keyPoints: [
          'Nutrientes esenciales para reparar tejidos y colágeno: Proteínas (1.25-1.5 g/kg/d), Vitamina C, Zinc y Arginina.',
          'La hipoalbuminemia provoca edema intersticial que frena la llegada de oxígeno a la piel.',
          'Limpieza perianal: jabones suaves Syndet (pH 5.5), secado a toques y crema barrera con Óxido de Zinc o Dimeticona.'
        ],
        clinicalPearl: 'Prohibición de Sonda Vesical por Comodidad: Nunca se debe colocar una sonda vesical Foley a un paciente incontinente solo para evitar cambiar pañales, debido al altísimo riesgo de infección urinaria y urosepsis.',
        checkQuestion: {
          question: '¿Qué macronutriente y qué vitamina son indispensables para que el organismo sintetice fibras de colágeno resistentes y repare las heridas?',
          options: [
            'Azúcares refinados y Vitamina B1',
            'Proteínas (con aminoácidos como arginina) junto con la Vitamina C y el mineral Zinc',
            'Grasas fritas y sal',
            'Solo agua pura sin alimentos'
          ],
          correctIndex: 1,
          explanation: 'Las proteínas aportan los aminoácidos estructurales y la Vitamina C junto al Zinc son cofactores indispensables para la síntesis de colágeno.'
        }
      },
      {
        id: 'm6',
        number: 6,
        title: 'Lesiones por Dispositivos Médicos (LPRDM), Curación Húmeda (TIME) y Eventos Adversos',
        part1Title: 'Parte 1: Prevención de LPRDM (VMNI, TET, SNG, Pulsioxímetro) y LPP en Mucosas',
        part2Title: 'Parte 2: Esquema TIME, Desbridamiento Autolítico, Lavado con NaCl 0.9% y Notificación',
        duration: '6 Horas Lectivas',
        summary: 'Rotación de sensores y tubos endotraqueales, limpieza con suero fisiológico tibio sin citotóxicos y reporte obligatorio como Evento Adverso.',
        content: [
          '1. Lesiones Relacionadas con Dispositivos Médicos (LPRDM): Reproducen la silueta del dispositivo. Prevención: proteger el puente nasal con apósito de hidrocoloide/espuma bajo máscaras de VMNI/CPAP; rotar el tubo endotraqueal (TET) de comisura labial cada 12-24 h; rotar el sensor de pulsioximetría de dedo cada 4 h (cada 2 h en neonatos). REGLA: Las LPP en mucosas (boca, fosas nasales, meato) NO se estadifican del 1 al 4.',
          '2. Curación Avanzada (Esquema TIME) y Lavado Seguro: Lavar el lecho siempre con Suero Fisiológico estéril tibio (NaCl 0.9%) a baja presión. Está DESACONSEJADO usar agua oxigenada, yodo concentrado o hipoclorito en heridas limpias granulatorias porque matan a los fibroblastos. El desbridamiento autolítico utiliza hidrogel para que el propio cuerpo disuelva el tejido necrótico sin dolor.'
        ],
        keyPoints: [
          'Las LPP en membranas mucosas NO se clasifican en Estadios 1 a 4 (se registran como LPP en mucosa).',
          'Rotar sensor de saturómetro cada 4 h (2 h en neonatos) y rotar tubo endotraqueal de lado labial cada 12-24 h.',
          'Lavar úlceras con Cloruro de Sodio al 0.9% tibio (evitar agua oxigenada o povidona en tejido limpio de granulación).'
        ],
        clinicalPearl: 'Limpieza Segura del Lecho de la Úlcera: Lavar siempre con suero fisiológico tibio (NaCl 0.9%). No usar antisépticos citotóxicos como agua oxigenada ni povidona yodada pura en heridas limpias en granulación, ya que destruyen los fibroblastos sanos y detienen la cicatrización.',
        checkQuestion: {
          question: '¿Con qué solución debe lavarse rutinariamente una úlcera por presión limpia y por qué se evita el agua oxigenada en el tejido de granulación?',
          options: [
            'Con alcohol puro de 96°',
            'Con Suero Fisiológico estéril tibio (NaCl 0.9%) — El agua oxigenada es citotóxica y destruye los fibroblastos nuevos que intentan cerrar la herida',
            'Con lejía pura',
            'Con agua helada y detergente'
          ],
          correctIndex: 1,
          explanation: 'El NaCl 0.9% es isotónico y preserva el tejido de granulación, mientras que los antisépticos oxidantes destruyen los fibroblastos.'
        }
      }
    ],
    finalExam: [
      {
        id: 'q1',
        question: '¿A partir de qué presión se colapsan los capilares sanguíneos, qué tejido muere primero (modelo del cono inverso) y cuáles son los dos sitios más afectados en posición boca arriba (supino)?',
        options: [
          '100 mmHg — La epidermis — Orejas y nariz',
          'Más de 32 mmHg — El músculo profundo adherido al hueso — El hueso sacro y los talones (calcáneos)',
          '5 mmHg — Las uñas — Las rodillas',
          '80 mmHg — El pelo — El abdomen'
        ],
        correctIndex: 1,
        rationale: 'Presiones > 32 mmHg cierran el flujo capilar, necrosando primero el músculo profundo; en supino el peso recae en sacro y talones.'
      },
      {
        id: 'q2',
        question: '¿Cómo se interpreta la puntuación en la Escala de Braden y dentro de cuántas horas del ingreso hospitalario debe realizarse la primera valoración?',
        options: [
          'A mayor puntaje mayor riesgo — Evaluar a los 10 días',
          'A menor puntaje, MAYOR es el riesgo de LPP (ej. ≤ 12 es Riesgo Alto/Muy Alto) — Evaluar en las primeras 6 a 8 horas del ingreso',
          'Todos sacan 100 puntos — Evaluar al alta',
          'Solo evalúa la fiebre — Evaluar una vez al mes'
        ],
        correctIndex: 1,
        rationale: 'En Braden la escala es inversa (6 a 23 ptos) y las guías exigen aplicarla en las primeras 6 a 8 horas de admisión.'
      },
      {
        id: 'q3',
        question: 'Relacione correctamente el Estadio EPUAP/NPIAP: 1) Eritema no blanqueable en piel intacta, 2) Pérdida total de piel con grasa visible, 3) Hueso o músculo expuesto:',
        options: [
          '1) Estadio 4, 2) Estadio 1, 3) Estadio 2',
          '1) Estadio 1, 2) Estadio 3, 3) Estadio 4 (y nunca se des-estadifica en sentido inverso)',
          '1) Estadio 2, 2) Estadio 4, 3) No estadificable',
          'Todas se clasifican como Estadio 1'
        ],
        correctIndex: 1,
        rationale: 'El eritema no blanqueable es Estadio 1, la exposición de tejido adiposo es Estadio 3 y la exposición de hueso/músculo es Estadio 4.'
      },
      {
        id: 'q4',
        question: 'Dentro de los cuidados preventivos, señale la afirmación CORRECTA:',
        options: [
          'Se debe masajear con fuerza las zonas rojas y sentar al paciente en un flotador con hueco',
          'Cambiar de postura cada 2-3 h en inclinación lateral de 30° (cabecero ≤ 30°), suspender talones en el aire con almohada en pantorrillas y prohibido masajear o usar rodetes',
          'Dejar al paciente en la misma posición 24 horas',
          'Arrastrar al paciente de los brazos sobre la sábana'
        ],
        correctIndex: 1,
        rationale: 'El reposicionamiento cada 2-3 h a 30°, los talones flotantes y la prohibición de masajes y rodetes son estándares internacionales.'
      },
      {
        id: 'q5',
        question: '¿Cómo se previenen las lesiones por el sensor de pulsioximetría y tubo endotraqueal, y con qué líquido debe limpiarse el lecho de una LPP en granulación?',
        options: [
          'No mover nunca el tubo ni el sensor — Lavar con agua oxigenada pura',
          'Rotar el sensor de dedo cada 4 h (2 h en neonatos) y el tubo endotraqueal cada 12-24 h — Lavar la úlcera con Suero Fisiológico estéril tibio (NaCl 0.9%)',
          'Apretar más la cinta — Lavar con alcohol de 96°',
          'Estadificar las heridas de mucosa oral del 1 al 4'
        ],
        correctIndex: 1,
        rationale: 'Rotar los dispositivos alivia la presión local y lavar con NaCl 0.9% tibio protege a los fibroblastos del tejido de granulación.'
      }
    ]
  }
];
=======
        question: '¿Qué vía de administración tiene una biodisponibilidad del 100% inmediata sin efecto de primer paso hepático, y cuándo debe registrarse un medicamento dentro de los 10 Correctos?',
        options: [
          'Vía oral — Registrar 1 hora antes de darlo',
          'Vía intravenosa (IV) — Registrar inmediatamente DESPUÉS de haberlo administrado al paciente',
          'Vía intramuscular — Registrar al final del mes',
          'Vía subcutánea — No requiere registro'
        ],
        correctIndex: 1,
        rationale: 'La vía IV ingresa directamente al torrente circulatorio (100%), y el registro clínico se realiza siempre después de la administración.'
      },
      {
        id: 'q2',
        question: '¿Cuál es la dosis máxima diaria de Paracetamol en adultos, su antídoto específico, y cuál es el antídoto de la depresión respiratoria por Morfina/Fentanilo?',
        options: [
          'Máximo 10 g/día — Antídotos: Atropina y Vitamina K',
          'Máximo 4 g/día (Antídoto: N-acetilcisteína) — Antídoto de Opioides: Naloxona IV',
          'Máximo 1 g/día — Antídotos: Flumazenil y Protamina',
          'Sin límite — Antídoto: Carbón activado'
        ],
        correctIndex: 1,
        rationale: 'Superar 4 g/día de paracetamol causa necrosis hepática (antídoto: N-acetilcisteína). La depresión respiratoria por opioides se revierte con Naloxona.'
      },
      {
        id: 'q3',
        question: '¿Por qué la Vancomicina debe infundirse lentamente en 1 a 2 horas y qué toxicidades producen los aminoglucósidos (Amikacina/Gentamicina)?',
        options: [
          'Para evitar hipoglucemia — Dañan el cabello',
          'Para prevenir el "Síndrome del Hombre Rojo" (liberación de histamina) — Los aminoglucósidos producen Nefrotoxicidad y Ototoxicidad',
          'Para evitar tos seca — Producen síndrome de Cushing',
          'Porque es fotosensible — Producen rotura del tendón de Aquiles'
        ],
        correctIndex: 1,
        rationale: 'La infusión rápida de vancomicina desencadena el Síndrome del Hombre Rojo, y los aminoglucósidos son nefrotóxicos y ototóxicos.'
      },
      {
        id: 'q4',
        question: '¿Qué control es obligatorio antes de administrar Digoxina y qué desequilibrio electrolítico provocado por la Furosemida dispara la intoxicación digitálica?',
        options: [
          'Medir temperatura — Hipernatremia',
          'Contar pulso apical por 1 minuto (no dar si FC < 60 lpm) — La hipopotasemia (bajo potasio) agrava la toxicidad por Digoxina',
          'Medir glucosa — Hipercalcemia',
          'Tomar presión ocular — Hipomagnesemia'
        ],
        correctIndex: 1,
        rationale: 'Se retiene la digoxina si la FC es <60 lpm, y la hipopotasemia por furosemida aumenta la fijación miocárdica de digoxina.'
      },
      {
        id: 'q5',
        question: 'Relacione correctamente el tóxico con su antídoto específico de emergencia: 1) Diazepam/Midazolam, 2) Insecticida Organofosforado, 3) Heparina:',
        options: [
          '1) Naloxona, 2) Flumazenil, 3) Vitamina C',
          '1) Flumazenil, 2) Sulfato de Atropina, 3) Sulfato de Protamina',
          '1) Atropina, 2) NAC, 3) Gluconato de Calcio',
          '1) Protamina, 2) Naloxona, 3) Flumazenil'
        ],
        correctIndex: 1,
        rationale: 'El Flumazenil revierte benzodiacepinas, la Atropina revierte organofosforados y el Sulfato de Protamina neutraliza la heparina.'
      }
    ]
  },
>>>>>>> Stashed changes
