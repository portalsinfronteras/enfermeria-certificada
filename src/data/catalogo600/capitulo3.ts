import { CatalogoEntry, toDiagnosisItem, DiagnosisItem } from './types';

export const capitulo3Raw: CatalogoEntry[] = [
  {
    number: 136,
    id: 'diag-136',
    title: 'Caries dental',
    cie10: 'K02.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad infecciosa bacteriana multifactorial con desmineralización ácida progresiva de los tejidos duros del diente (esmalte y dentina) por Streptococcus mutans.',
    symptoms: ['Sensibilidad dental transitoria con alimentos fríos, calientes o dulces', 'Mancha blanca inicial opaca en esmalte', 'Cavidad o agujero visible en la corona dental', 'Dolor dental al masticar'],
    redFlags: ['Dolor pulsátil nocturno continuo (Pulpitis irreversible)', 'Tumefacción facial y celulitis odontógena'],
    criteria: 'Inspección odontológica visual y táctil con sonda de exploración + radiografías coronales (bitewing).',
    labTests: ['Evaluación de índice CPO-D (dientes cariados, perdidos y obturados)'],
    imaging: ['Radiografía periapical y coronal aleta de mordida'],
    differential: ['Hipoplasia del esmalte', 'Fluorosis dental', 'Erosión química ácida'],
    firstLine: [
      { drug: 'Fluoruro de Sodio barniz al 5%', dose: 'Aplicación tópica profesional semestral', route: 'Tópica dental', freq: 'Cada 6 meses', notes: 'Remineralización de lesiones incipientes de esmalte' },
      { drug: 'Ibuprofeno', dose: '400 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'Control de la odontalgia aguda' }
    ],
    alternatives: [],
    nonPharm: ['Obturación dental con resina compuesta o ionómero de vidrio', 'Cepillado dental 2 a 3 veces al día con pasta dental fluorada (≥ 1,000-1,450 ppm de flúor)', 'Reducción estricta de azúcares libres fermentables en la dieta'],
    nursingCare: ['Educación en salud oral en el control de CRED y prenatal', 'Instrucción en técnica de cepillado y uso obligatorio de pasta dental con al menos 1000 ppm de flúor desde la erupción del primer diente de leche', 'Desmitificar que los dientes de leche cariados no necesitan tratamiento']
  },
  {
    number: 137,
    id: 'diag-137',
    title: 'Gingivitis',
    cie10: 'K05.1',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación reversible de la encía marginal inducida por el acúmulo de placa bacteriana, sin pérdida de inserción ni hueso alveolar.',
    symptoms: ['Sangrado gingival espontáneo o provocado por el cepillado dental', 'Encías tumefactas, eritematosas y brillantes que pierden su aspecto en \'cáscara de naranja\'', 'Halitosis o mal aliento matutino', 'Sensibilidad gingival leve'],
    redFlags: ['Gingivitis úlcero-necrotizante aguda (GUNA) con dolor severo, pseudomembranas y necrosis interdental en inmunodeprimidos'],
    criteria: 'Sondaje periodontal con sangrado al sondaje en ≥ 10% de localizaciones con profundidad de surco ≤ 3 mm sin pérdida ósea.',
    labTests: ['Evaluación de índice de placa bacteriana de O\'Leary'],
    imaging: ['Radiografías periapicales (crestas óseas alveolares intactas sin reabsorción)'],
    differential: ['Periodontitis crónica', 'Gingivitis por fármacos (fenitoína, ciclosporina, nifedipino)', 'Leucemia aguda con infiltración gingival'],
    firstLine: [
      { drug: 'Clorhexidina colutorio al 0.12%', dose: '15 mL en enjuague bucal por 30 a 60 segundos cada 12 horas por 14 días', route: 'Tópica oral', freq: 'c/12h x 14 días', notes: 'Antiséptico de referencia; no usar más de 2 semanas por tinción dental reversible' }
    ],
    alternatives: [],
    nonPharm: ['Profilaxis dental y destartraje (eliminación mecánica de cálculo supragingival por odontólogo)', 'Técnica correcta de cepillado de Bass modificada y uso de hilo dental diario'],
    nursingCare: ['Demostración práctica del uso del hilo dental interproximal diario', 'Instruir al paciente que el sangrado indica inflamación y NO debe suspender el cepillado', 'Monitoreo de higiene oral en pacientes hospitalizados o con discapacidad']
  },
  {
    number: 138,
    id: 'diag-138',
    title: 'Periodontitis',
    cie10: 'K05.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Infección inflamatoria crónica destructiva del periodonto de inserción que causa pérdida irreversible de hueso alveolar y soporte dental.',
    symptoms: ['Movilidad dental progresiva y migración de piezas dentarias', 'Retracción gingival con exposición radicular ('dientes más largos')', 'Halitosis fétida crónica', 'Sangrado gingival profuso y exudado purulento en bolsas periodontales'],
    redFlags: ['Pérdida dentaria múltiple que compromete la masticación y nutrición', 'Abscesos periodontales recidivantes'],
    criteria: 'Pérdida de inserción clínica interdental detectable en ≥ 2 dientes no adyacentes + bolsas periodontales ≥ 4 mm con sangrado.',
    labTests: ['Periodontograma completo', 'Control glucémico estricto (la diabetes descompensada triplica el riesgo de periodontitis)'],
    imaging: ['Serie radiográfica periapical completa (reabsorción ósea horizontal o vertical)'],
    differential: ['Gingivitis marginal', 'Histiocitosis de células de Langerhans', 'Tumores mandibulares'],
    firstLine: [
      { drug: 'Raspado y Alisado Radicular (RAR)', dose: 'Desbridamiento mecánico subgingival por cuadrantes por especialista', route: 'Mecánica periodontal', freq: 'Por cuadrantes', notes: 'Tratamiento etiológico fundamental para eliminar biofilm subgingival' },
      { drug: 'Amoxicilina + Metronidazol (En periodontitis severa/agresiva)', dose: 'Amoxicilina 500 mg + Metronidazol 250-500 mg cada 8 horas por 7 días', route: 'VO', freq: 'c/8h x 7 días', notes: 'Coadyuvante al desbridamiento mecánico' }
    ],
    alternatives: [],
    nonPharm: ['Mantenimiento periodontal periódico trimestral o semestral de por vida', 'Cese obligatorio del consumo de tabaco (principal factor modificable)'],
    nursingCare: ['Control glucémico riguroso en pacientes diabéticos (la periodontitis descompensa la HbA1c y viceversa)', 'Refuerzo de técnicas de higiene interdental con cepillos interproximales', 'Educación enérgica antitabaco']
  },
  {
    number: 139,
    id: 'diag-139',
    title: 'Absceso periodontal',
    cie10: 'K05.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Colección purulenta localizada en los tejidos periodontales adyacentes a una bolsa periodontal preexistente oclusión del drenaje.',
    symptoms: ['Dolor sordo continuo pulsátil localizado en una encía', 'Tumefacción ovoide eritematosa fluctuante en encía adherida', 'Diente sensible a la masticación y a la percusión lateral', 'Supuración purulenta por el margen gingival a la presión'],
    redFlags: ['Diseminación fascial profunda hacia cuello (Angina de Ludwig)', 'Trismus y celulitis facial'],
    criteria: 'Presencia de masa fluctuante en encía asociada a bolsa periodontal profunda con diente con vitalidad pulpar conservada.',
    labTests: ['Prueba de vitalidad pulpar (positiva, a diferencia del absceso periapical donde es negativa)', 'Cultivo bacteriano del exudado'],
    imaging: ['Radiografía periapical (pérdida ósea angular o radiolucidez lateral a la raíz)'],
    differential: ['Absceso periapical endodóntico (diente desvitalizado con caries profunda)', 'Gingivitis necrotizante'],
    firstLine: [
      { drug: 'Amoxicilina / Ácido Clavulánico', dose: '875/125 mg cada 12 horas VO por 7 días', route: 'VO', freq: 'c/12h', notes: 'Si hay afectación sistémica, fiebre o celulitis' },
      { drug: 'Drenaje mecánico por la bolsa o incisión', dose: 'Evacuación de la colección purulenta bajo anestesia local', route: 'Procedimiento local', freq: 'Inmediato', notes: 'Alivio instantáneo de la presión y del dolor' }
    ],
    alternatives: [],
    nonPharm: ['Enjuagues con agua salada tibia o clorhexidina al 0.12% tras el drenaje', 'Dieta blanda'],
    nursingCare: ['Asistencia en el drenaje y evacuación del absceso', 'Control de la temperatura corporal y de signos de diseminación facial (asimetría facial, dificultad para deglutir)', 'Manejo analgésico pautado']
  },
  {
    number: 140,
    id: 'diag-140',
    title: 'Estomatitis aftosa',
    cie10: 'K12.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Afección inflamatoria recurrente benigna con úlceras orales dolorosas no queratinizadas recubiertas por pseudomembrana grisácea.',
    symptoms: ['Úlceras orales redondas u ovaladas dolorosas en mucosa móvil (labios, carrillos, vientre lingual)', 'Fondo blanco-amarillento fibrinoso con halo eritematoso circundante bien delimitado', 'Dolor urente al ingerir alimentos ácidos o salados'],
    redFlags: ['Aftas orales y genitales recurrentes con uveítis (Síndrome de Behçet)', 'Asociación a diarrea crónica y pérdida de peso (Enfermedad Celíaca o de Crohn)'],
    criteria: 'Diagnóstico clínico por aspecto típico y antecedentes de recurrencia en mucosa móvil.',
    labTests: ['Hemograma completo, dosaje de hierro, ferritina, vitamina B12 y ácido fólico (descarte de carencias)', 'Anticuerpos antitransglutaminasa tisular IgA'],
    imaging: ['No requerida'],
    differential: ['Herpes simple intraoral (ocurre en mucosa fija y queratinizada como paladar duro y encías)', 'Pénfigo vulgar', 'Carcinoma epidermoide'],
    firstLine: [
      { drug: 'Triamcinolona acetónido en orabase al 0.1%', dose: 'Aplicar capa fina sobre el afta seca 2 a 4 veces al día', route: 'Tópica oral', freq: 'c/6-8h tras comidas', notes: 'Corticoide tópico que acelera la cicatrización' },
      { drug: 'Lidocaína viscosa al 2%', dose: 'Toques locales con hisopo antes de las comidas', route: 'Tópica oral', freq: 'Antes de comer', notes: 'Alivio sintomático anestésico para permitir alimentación' }
    ],
    alternatives: [],
    nonPharm: ['Evitar alimentos irritantes, ácidos, salados, picantes o crujientes', 'Uso de cepillo dental ultrasuave sin laurilsulfato de sodio'],
    nursingCare: ['Enseñanza de la aplicación de pomadas en orabase secando previamente el afta con gasa para asegurar adhesión', 'Monitoreo nutricional e hidratación en niños con aftas múltiples dolorosas', 'Descarte de deficiencias nutricionales subyacentes']
  },
  {
    number: 141,
    id: 'diag-141',
    title: 'Glositis atrófica',
    cie10: 'K14.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Atrofia y pérdida de papilas filiformes y fungiformes de la lengua, produciendo una lengua lisa, depapilada, eritematosa y brillante (Lengua de Hunter).',
    symptoms: ['Lengua completamente lisa, brillante y enrojecida con pérdida de papilas', 'Dolor, ardor y quemazón lingual constante (glosodinia)', 'Disgeusia o alteración del gusto', 'Sensibilidad extrema a alimentos calientes o condimentados'],
    redFlags: ['Anemia megaloblástica severa con síntomas neurológicos (degeneración combinada subaguda por déficit de B12)'],
    criteria: 'Examen clínico visual de lengua depapilada lisa + confirmación de déficit de vitamina B12, folatos o hierro.',
    labTests: ['Dosaje sérico de Vitamina B12 y Ácido Fólico', 'Hemograma completo (VCM elevado > 100 fL en megaloblastosis o microcitosis en ferropenia)', 'Ferritina sérica'],
    imaging: ['No requerida'],
    differential: ['Candidiasis eritematosa atrófica', 'Liquen plano oral atrófico', 'Lengua geográfica'],
    firstLine: [
      { drug: 'Cianocobalamina (Vitamina B12)', dose: '1000 mcg IM diario por 1 semana, luego semanal por 1 mes, luego mensual de por vida', route: 'IM', freq: 'Según esquema de reposición', notes: 'En anemia perniciosa o deficiencia de B12' },
      { drug: 'Ácido Fólico', dose: '1 a 5 mg al día VO', route: 'VO', freq: 'c/24h', notes: 'Reposición si hay déficit demostrado' },
      { drug: 'Sulfato Ferroso', dose: 'Según déficit de hierro en glositis ferropénica (Síndrome de Plummer-Vinson)', route: 'VO', freq: 'c/24h', notes: 'Tratamiento etiológico' }
    ],
    alternatives: [],
    nonPharm: ['Dieta blanda no irritante a temperatura ambiente', 'Evitar colutorios alcohólicos'],
    nursingCare: ['Identificación de la glositis como signo guía de anemia carencial grave', 'Administración correcta de la inyección intramuscular de vitamina B12 profunda', 'Evaluación de síntomas neurológicos asociados (parestesias en pies, ataxia)']
  },
  {
    number: 142,
    id: 'diag-142',
    title: 'Sialoadenitis',
    cie10: 'K11.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación e infección aguda o crónica de las glándulas salivales mayores (parótida o submandibular), comúnmente secundaria a estasis o litiasis (sialolitiasis).',
    symptoms: ['Tumefacción dolorosa unilateral brusca de la glándula afectada que aumenta con la masticación', 'Eritema y calor local en la piel suprayacente', 'Salida de saliva purulenta por el orificio de Stenon o Wharton al exprimir la glándula', 'Fiebre y trismus'],
    redFlags: ['Absceso glandular fluctuante con riesgo de extensión a espacios profundos del cuello', 'Afectación respiratoria por compresión'],
    criteria: 'Tumefacción glandular dolorosa + salida de pus por el conducto salival al masaje manual.',
    labTests: ['Tinción Gram y cultivo de la secreción purulenta del conducto salival (predominio de Staphylococcus aureus)', 'Hemograma con leucocitosis'],
    imaging: ['Ecografía de glándulas salivales (distinción entre flemón, absceso y presencia de litiasis en el conducto)'],
    differential: ['Parotiditis epidémica (paperas viral bilateral)', 'Sialolitiasis no infectada', 'Neoplasia parotídea (adenoma pleomorfo)'],
    firstLine: [
      { drug: 'Amoxicilina / Ácido Clavulánico', dose: '875/125 mg cada 8-12 horas VO por 10 días', route: 'VO', freq: 'c/8-12h', notes: 'Buena cobertura contra S. aureus y anaerobios orales' },
      { drug: 'Oxacilina o Cefazolina EV', dose: 'Oxacilina 2 g cada 4 horas EV o Cefazolina 1-2 g c/8h', route: 'EV', freq: 'c/4-8h', notes: 'En casos severos con fiebre y celulitis facial' }
    ],
    alternatives: [],
    nonPharm: ['Sialagogos naturales (gotas de limón, caramelos ácidos) para estimular el flujo salival y arrastrar detritos', 'Masaje suave y compresión anterógrada de la glándula hacia la boca', 'Hidratación abundante'],
    nursingCare: ['Estimulación del flujo salival con caramelos ácidos o limón tras calmar la fase hiperaguda', 'Aplicación de calor local húmedo tibio sobre la glándula', 'Enseñanza del masaje suave en dirección al orificio del conducto', 'Higiene oral rigurosa con enjuagues antisépticos']
  },
  {
    number: 143,
    id: 'diag-143',
    title: 'Gastritis superficial',
    cie10: 'K29.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación aguda o subaguda limitada a la lámina propia superior de la mucosa gástrica, comúnmente desencadenada por AINEs, alcohol o H. pylori inicial.',
    symptoms: ['Dolor epigástrico urente o sensación de 'vacío ardiente' que alivia o empeora con alimentos', 'Náuseas y plenitud gástrica postprandial precoz', 'Eructos frecuentes y pirosis'],
    redFlags: ['Hematemesis (vómitos con sangre o en posos de café)', 'Melena (heces negras brillantes pegajosas con olor fétido)'],
    criteria: 'Diagnóstico histológico por biopsia endoscópica con infiltrado de neutrófilos en la lámina propia superficial sin atrofia glandular.',
    labTests: ['Test de ureasa o biopsia para Helicobacter pylori', 'Hemograma (descarte de anemia aguda)'],
    imaging: ['Endoscopía digestiva alta (mucosa eritematosa en mosaico, edema y petequias)'],
    differential: ['Úlcera péptica', 'Enfermedad por reflujo gastroesofágico', 'Litiasis biliar', 'Pancreatitis'],
    firstLine: [
      { drug: 'Omeprazol o Pantoprazol', dose: 'Omeprazol 20 a 40 mg una vez al día en ayunas por 4 a 8 semanas', route: 'VO', freq: 'c/24h en ayunas', notes: 'Inhibidor de bomba de protones de primera línea' },
      { drug: 'Antiácidos (Hidróxido de Aluminio y Magnesio)', dose: '10 a 15 mL 1 hora después de comidas y al acostarse', route: 'VO', freq: 'c/8h condicional', notes: 'Alivio rápido de síntomas de acidez' }
    ],
    alternatives: [],
    nonPharm: ['SUSPENSIÓN INMEDIATA de AINEs (ibuprofeno, naproxeno, diclofenaco, ketorolaco) y aspirina', 'Evitar alcohol, tabaco, café, cítricos y condimentos picantes', 'Comidas fraccionadas en horarios regulares'],
    nursingCare: ['Instrucción clara de tomar el IBP estrictamente en ayunas, 30 a 60 minutos antes del desayuno para máxima eficacia', 'Advertencia sobre no consumir AINEs sin gastroprotección', 'Educación dietética en horarios fraccionados y evitar ayunos prolongados']
  },
  {
    number: 144,
    id: 'diag-144',
    title: 'Gastritis atrófica',
    cie10: 'K29.4',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Pérdida crónica progresiva de las glándulas gástricas con reemplazo por metaplasia intestinal, de origen ambiental (H. pylori) o autoinmune (Tipo A corporal).',
    symptoms: ['Frecuentemente asintomática o dispepsia inespecífica', 'Sensación de digestión pesada y plenitud gástrica por hipoclorhidria', 'Astenia crónica y palidez por anemia megaloblástica o ferropénica'],
    redFlags: ['Displasia epitelial y alto riesgo de progresión a adenocarcinoma gástrico (clasificación de OLGA / OLGIM)', 'Anemia perniciosa severa'],
    criteria: 'Biopsia endoscópica gástrica según sistema de Sydney con pérdida de glándulas oxínticas o antrales y metaplasia intestinal.',
    labTests: ['Anticuerpos contra células parietales y factor intrínseco (en forma autoinmune)', 'Dosaje de Vitamina B12, ferritina y gastrina sérica (hipergastrinemia)', 'Detección de H. pylori'],
    imaging: ['Endoscopía digestiva alta con cromoendoscopía óptica (NBI) y biopsias dirigidas'],
    differential: ['Cáncer gástrico precoz', 'Gastritis superficial crónica'],
    firstLine: [
      { drug: 'Erradicación de Helicobacter pylori (si está presente)', dose: 'Terapia cuádruple con bismuto por 14 días', route: 'VO', freq: 'Por 14 días', notes: 'Detiene la progresión de la atrofia gástrica' },
      { drug: 'Cianocobalamina (Vitamina B12)', dose: '1000 mcg IM mensual de por vida', route: 'IM', freq: 'Mensual de por vida', notes: 'Obligatorio en gastritis atrófica autoinmune por falta de factor intrínseco' }
    ],
    alternatives: [],
    nonPharm: ['Seguimiento endoscópico regular cada 1 a 3 años según estadificación de OLGA/OLGIM para detección precoz de cáncer gástrico'],
    nursingCare: ['Educación sobre la necesidad del control endoscópico periódico para tamizaje oncológico', 'Administración mensual regular de la vitamina B12 intramuscular', 'Consejería dietética con alimentos ricos en antioxidantes y baja en embutidos ahumados']
  },
  {
    number: 145,
    id: 'diag-145',
    title: 'Úlcera péptica gástrica',
    cie10: 'K25.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Solución de continuidad circunscrita que penetra la muscularis mucosae de la pared gástrica, asociada a H. pylori, AINEs o tabaquismo.',
    symptoms: ['Dolor epigástrico opresivo o urente que suele empeorar con la ingesta de alimentos (dolor postprandial precoz)', 'Náuseas y pérdida de apetito', 'Pérdida moderada de peso involuntaria'],
    redFlags: ['Hemorragia digestiva alta aguda (Hematemesis o melena con hipotensión)', 'Perforación gástrica (dolor abdominal en puñalada con abdomen en tabla)', 'Estenosis pilórica con vómitos de retención'],
    criteria: 'Endoscopía digestiva alta que visualiza la úlcera + biopsias obligatorias de los bordes para descartar malignidad.',
    labTests: ['Test rápido de ureasa o biopsia para Helicobacter pylori', 'Hemograma completo con hematocrito', 'Sangre oculta en heces'],
    imaging: ['Endoscopía digestiva alta (EDA con clasificación de Forrest si hay sangrado activo)', 'Radiografía de abdomen de pie (neumoperitoneo en perforación)'],
    differential: ['Adenocarcinoma gástrico ulcerado', 'Úlcera duodenal', 'Gastritis erosiva severa'],
    firstLine: [
      { drug: 'Omeprazol o Esomeprazol', dose: '40 mg cada 12 horas VO (o 80 mg en bolo EV + 8 mg/h infusión si sangrado activo)', route: 'VO/EV', freq: 'c/12h por 8 semanas', notes: 'Cicatriza la úlcera e inhibe la secreción ácida' },
      { drug: 'Terapia erradicadora de H. pylori', dose: 'Esquema cuádruple por 14 días', route: 'VO', freq: 'Por 14 días', notes: 'Si la prueba de H. pylori es positiva' }
    ],
    alternatives: [],
    nonPharm: ['Endoscopía de control obligatoria a las 8-12 semanas para confirmar cicatrización completa y descartar malignidad oculta', 'Supresión total de AINEs y tabaco'],
    nursingCare: ['Monitoreo horario de signos de sangrado digestivo (melena, vómitos en borra de café, taquicardia, palidez)', 'Vigilancia de dolor abdominal súbito y rigidez abdominal (perforación gástrica)', 'Administración estricta de IBPs en ayunas y cumplimiento de la erradicación']
  },
  {
    number: 146,
    id: 'diag-146',
    title: 'Úlcera duodenal',
    cie10: 'K26.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Pérdida de sustancia mucosa en la primera porción del duodeno (bulbo duodenal), atribuible en > 90% a infección por Helicobacter pylori.',
    symptoms: ['Dolor epigástrico urente característico que aparece de 2 a 3 horas después de comer ('hambre dolorosa')', 'Dolor que ALIVIA típicamente con la ingesta de alimentos o antiácidos', 'Dolor que despierta al paciente a medianoche (dolor nocturno típico)'],
    redFlags: ['Hemorragia digestiva alta masiva por erosión de la arteria gastroduodenal', 'Perforación anterior con peritonitis química aguda'],
    criteria: 'Visualización endoscópica de úlcera en bulbo duodenal (las úlceras duodenales son benignas en > 99% y no requieren biopsias rutinarias de bordes).',
    labTests: ['Pruebas para H. pylori (test de aliento o ureasa)', 'Hemograma completo'],
    imaging: ['Endoscopía digestiva alta diagnóstica y terapéutica'],
    differential: ['Úlcera gástrica', 'Enfermedad celíaca', 'Pancreatitis crónica'],
    firstLine: [
      { drug: 'Terapia erradicadora de H. pylori (Cuádruple con Bismuto)', dose: 'IBP c/12h + Bismuto c/6h + Metronidazol c/8h + Tetraciclina c/6h por 14 días', route: 'VO', freq: 'Por 14 días', notes: 'La erradicación de H. pylori cura definitivamente la enfermedad y evita recidivas' },
      { drug: 'Omeprazol', dose: '20 a 40 mg cada 24 horas por 4 semanas', route: 'VO', freq: 'c/24h en ayunas', notes: 'Cicatrización duodenal' }
    ],
    alternatives: [],
    nonPharm: ['Confirmar la erradicación con test de aliento 4 semanas después de terminar los antibióticos', 'No fumar'],
    nursingCare: ['Explicación al paciente de que erradicar la bacteria es la cura definitiva de la úlcera', 'Advertencia sobre no suspender los antibióticos aunque el dolor desaparezca en los primeros días', 'Vigilancia de signos de hemorragia digestiva alta (heces alquitranadas)']
  },
  {
    number: 147,
    id: 'diag-147',
    title: 'ERGE',
    cie10: 'K21.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad por Reflujo Gastroesofágico con paso anormal y repetitivo del contenido gástrico hacia el esófago, causando síntomas molestos y daño mucoso.',
    symptoms: ['Pirosis (sensación de quemazón o ardor retroesternal ascendente)', 'Regurgitación ácida o amarga a la boca', 'Dolor torácico no cardiogénico', 'Tos crónica nocturna, carraspera y laringitis por reflujo'],
    redFlags: ['Disfagia progresiva o impactación alimentaria', 'Odinofagia severa', 'Hemorragia digestiva o anemia', 'Esófago de Barrett (metaplasia intestinal premaligna)'],
    criteria: 'Criterios clínicos clásicos de pirosis y regurgitación + respuesta a prueba terapéutica con IBP, o pH-metría con tiempo de exposición ácida > 6%.',
    labTests: ['pH-metría esofágica de 24 horas con impedanciometría (estándar de oro)', 'Manometría esofágica de alta resolución'],
    imaging: ['Endoscopía digestiva alta (clasificación de Los Ángeles para esofagitis de grado A a D)'],
    differential: ['Cardiopatía isquémica (descartar siempre origen coronario)', 'Acalasia', 'Espasmo esofágico difuso'],
    firstLine: [
      { drug: 'Esomeprazol u Omeprazol', dose: 'Esomeprazol 40 mg o Omeprazol 20-40 mg una vez al día en ayunas por 8 semanas', route: 'VO', freq: 'c/24h en ayunas', notes: 'Doble dosis si hay esofagitis severa grados C o D de Los Ángeles' },
      { drug: 'Alginato de Sodio', dose: '10 a 20 mL después de las comidas y antes de acostarse', route: 'VO', freq: 'Postprandial', notes: 'Forma una barrera mecánica flotante ('balsa') que impide el reflujo ácido y no ácido' }
    ],
    alternatives: [],
    nonPharm: ['ELEVACIÓN DE LA CABECERA DE LA CAMA 15 A 20 CM mediante calzos en las patas', 'Evitar acostarse antes de 2 a 3 horas tras cenar', 'Reducción de peso corporal en sobrepeso/obesidad', 'Eliminar grasas, chocolate, menta, café, cítricos y bebidas carbonatadas'],
    nursingCare: ['Instruir rigurosamente en elevar las patas de la cabecera de la cama (usar más almohadas es ineficaz y dobla el abdomen aumentando el reflujo)', 'Educación en cenar ligero y esperar 3 horas antes de ir a dormir', 'Monitoreo de la toma del IBP 30 minutos antes del desayuno', 'Identificación de signos de alarma de cáncer esofágico en mayores de 50 años']
  },
  {
    number: 148,
    id: 'diag-148',
    title: 'Esofagitis eosinofílica',
    cie10: 'K20.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad inmunoalérgica crónica del esófago mediada por alérgenos alimentarios con infiltración eosinofílica e impactaciones alimentarias en jóvenes.',
    symptoms: ['Disfagia a sólidos intermitente pero recurrente en adultos jóvenes', 'Episodios de impactación alimentaria esofágica con necesidad de extracción endoscópica', 'Dolor torácico retroesternal que no cede con antiácidos', 'Antecedentes personales de atopia (asma, rinitis, dermatitis)'],
    redFlags: ['Impactación alimentaria esofágica aguda con imposibilidad de deglutir saliva', 'Perforación esofágica espontánea (Síndrome de Boerhaave) tras esfuerzo por vomitar'],
    criteria: 'Biopsia esofágica que demuestra ≥ 15 eosinófilos por campo de gran aumento (CGA) persistentes tras tratamiento con IBP.',
    labTests: ['Biopsias múltiples de esófago proximal y distal (≥ 6 tomas)', 'Pruebas alérgicas a alimentos'],
    imaging: ['Endoscopía digestiva alta (anillos concéntricos traquealizados 'esófago felino', surcos longitudinales y exudados blanquecinos punteados)'],
    differential: ['ERGE con esofagitis péptica', 'Acalasia', 'Estenosis esofágica péptica'],
    firstLine: [
      { drug: 'Budesonida orodispersible (Jorveza) o Fluticasona deglutida', dose: 'Budesonida 1 mg dos veces al día después del desayuno y cena por 6 a 12 semanas', route: 'Tópica esofágica deglutida', freq: 'c/12h', notes: 'Comprimido orodispersible o suspensión viscosa deglutida' },
      { drug: 'Esomeprazol', dose: '40 mg cada 12 horas VO por 8 a 12 semanas', route: 'VO', freq: 'c/12h', notes: 'Hasta un tercio de pacientes son respondedores a IBP' }
    ],
    alternatives: [],
    nonPharm: ['Dieta de eliminación de los 6 alimentos principales (leche de vaca, trigo/gluten, huevo, soja, frutos secos, pescado/mariscos)', 'Dilatación esofágica con balón en estenosis fibróticas'],
    nursingCare: ['Instrucción de NO comer ni beber líquidos durante 30 minutos tras disolver el comprimido de budesonida orodispersible para asegurar contacto mucoso', 'Acompañamiento en el cumplimiento estricto de las dietas de eliminación alergénica', 'Educación para masticar muy despacio y con bocados pequeños los alimentos sólidos']
  },
  {
    number: 149,
    id: 'diag-149',
    title: 'Dispepsia funcional',
    cie10: 'K30',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno de la interacción intestino-cerebro con dolor epigástrico o plenitud postprandial sin causa orgánica identificable (Criterios de Roma IV).',
    symptoms: ['Síndrome de Malestar Postprandial: plenitud molesta precoz que impide terminar una comida regular', 'Síndrome de Dolor Epigástrico: dolor o quemazón epigástrica no irradiada', 'Distensión abdominal alta y eructos'],
    redFlags: ['Cualquier signo de alarma (pérdida de peso, anemia, vómitos, masa palpable, edad > 50 años) obliga a endoscopía'],
    criteria: 'Criterios de Roma IV: síntomas presentes por al menos 3 meses con inicio hace ≥ 6 meses sin lesión estructural en endoscopía.',
    labTests: ['Test para Helicobacter pylori (estrategia 'Test and Treat')', 'Hemograma y bioquímica básica'],
    imaging: ['Endoscopía digestiva alta normal'],
    differential: ['Úlcera péptica', 'Gastroparesia diabética', 'Litiasis vesicular sintomática', 'Cáncer gástrico'],
    firstLine: [
      { drug: 'Omeprazol', dose: '20 mg cada 24 horas en ayunas por 4 a 8 semanas', route: 'VO', freq: 'c/24h', notes: 'Eficaz especialmente en el síndrome de dolor epigástrico' },
      { drug: 'Levosulpirida o Itoprida (Procinéticos)', dose: 'Levosulpirida 25 mg o Itoprida 50 mg cada 8 horas 20 min antes de comidas', route: 'VO', freq: 'c/8h antes de comer', notes: 'De elección en plenitud postprandial y saciedad precoz' }
    ],
    alternatives: [],
    nonPharm: ['Comidas fraccionadas en porciones pequeñas 5 veces al día', 'Manejo del estrés, psicoterapia cognitivo-conductual', 'Evitar alimentos ricos en grasas'],
    nursingCare: ['Validar y escuchar con empatía el sufrimiento del paciente asegurando que los síntomas son reales aunque la endoscopía sea normal', 'Orientación en comer despacio, masticar bien y evitar bebidas gaseosas', 'Seguimiento de la adherencia a procinéticos y vigilancia de efectos extrapiramidales con levosulpirida']
  },
  {
    number: 150,
    id: 'diag-150',
    title: 'Hernia hiatal',
    cie10: 'K44.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Protrusión de una porción del estómago hacia la cavidad torácica a través del hiato esofágico diafragmático (Tipo I por deslizamiento o Tipo II paraesofágica).',
    symptoms: ['Pirosis y regurgitación por incompetencia del esfínter esofágico inferior', 'Sensación de pesadez retroesternal o plenitud postprandial precoz', 'Disfagia mecánica intermitente', 'Anemia ferropénica crónica por úlceras mecánicas de Cameron'],
    redFlags: ['Hernia paraesofágica con vólvulo gástrico (Tríada de Borchardt: dolor epigástrico agudo intenso, arcadas sin vómito e imposibilidad de colocar SNG - EMERGENCIA QUIRÚRGICA)'],
    criteria: 'Desplazamiento de la unión gastroesofágica > 2 cm por encima del hiato diafragmático en endoscopía o tránsito esofagogástrico.',
    labTests: ['Hemograma (descarte de anemia por úlceras de Cameron)', 'Sangre oculta en heces'],
    imaging: ['Endoscopía digestiva alta', 'Tránsito esofagogastroduodenal con bario', 'Tomografía de tórax/abdomen'],
    differential: ['Estenosis esofágica', 'Angina de pecho', 'Acalasia'],
    firstLine: [
      { drug: 'Inhibidores de Bomba de Protones (Omeprazol o Pantoprazol)', dose: '40 mg cada 24 horas en ayunas', route: 'VO', freq: 'c/24h', notes: 'Control del reflujo ácido sintomático asociado' }
    ],
    alternatives: [],
    nonPharm: ['Funduplicatura laparoscópica de Nissen (360°) o Toupet (270°) con cierre de pilares diafragmáticos', 'Reducción de peso y comidas poco voluminosas'],
    nursingCare: ['Instrucción rigurosa de no levantar objetos pesados ni realizar esfuerzos que aumenten la presión intraabdominal', 'Medidas posturales para dormir con cabecera elevada', 'Vigilancia de dolor torácico súbito agudo con arcadas infructuosas (sospecha de vólvulo gástrico)']
  },
  {
    number: 151,
    id: 'diag-151',
    title: 'Colon irritable',
    cie10: 'K58.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno funcional digestivo crónico caracterizado por dolor abdominal recurrente asociado a cambios en la frecuencia o consistencia de las deposiciones (Roma IV).',
    symptoms: ['Dolor abdominal cólico recurrente que alivia o empeora con la defecación', 'Alteración del hábito defecatorio (subtipos con diarrea SII-D, estreñimiento SII-E o mixto SII-M)', 'Distensión abdominal e hinchazón visible', 'Sensación de evacuación incompleta y moco en las heces'],
    redFlags: ['Pérdida involuntaria de peso', 'Sangrado rectal o anemia ferropénica', 'Diarrea nocturna que despierta al paciente', 'Inicio de síntomas después de los 50 años'],
    criteria: 'Criterios de Roma IV: dolor abdominal recurrente al menos 1 día por semana en los últimos 3 meses, asociado a ≥ 2 criterios (relación con la defecación, cambio en frecuencia o cambio en consistencia).',
    labTests: ['Hemograma, PCR y velocidad de sedimentación (normales)', 'Calprotectina fecal (negativa < 50 ug/g para descartar enfermedad inflamatoria)', 'Serología de celiaquía (anticuerpos anti-transglutaminasa tisular IgA)'],
    imaging: ['Colonoscopía normal (indicada en presencia de signos de alarma o mayores de 50 años)'],
    differential: ['Enfermedad celíaca', 'Colitis ulcerosa / Crohn', 'Cáncer colorrectal', 'Intolerancia a la lactosa'],
    firstLine: [
      { drug: 'Bromuro de Otilonio o Mebeverina', dose: 'Bromuro de Otilonio 40 mg o Mebeverina 135-200 mg cada 8 horas 20 min antes de comidas', route: 'VO', freq: 'c/8h antes de comer', notes: 'Espasmolítico musculótropo selectivo que alivia el dolor cólico' },
      { drug: 'Loperamida (en SII con diarrea)', dose: '2 mg tras cada deposición líquida (máximo 8-16 mg/día)', route: 'VO', freq: 'Condicional a diarrea', notes: 'Solo en subtipo diarreico' },
      { drug: 'Psyllium / Plantago ovata (en SII con estreñimiento)', dose: '3.5 a 7 g al día con abundante agua', route: 'VO', freq: 'c/12-24h', notes: 'Fibra soluble formadora de masa' }
    ],
    alternatives: [],
    nonPharm: ['Dieta baja en FODMAPs (baja en oligosacáridos, disacáridos, monosacáridos y polioles fermentables) supervisada por nutricionista', 'Manejo del estrés y ejercicio físico aeróbico regular'],
    nursingCare: ['Explicación empática del eje intestino-cerebro para desculpabilizar al paciente', 'Educación en la dieta baja en FODMAPs y su reintroducción progresiva guiada', 'Recomendación de no abusar de la fibra insoluble (salvado de trigo) que empeora la distensión y gases', 'Vigilancia de signos de alarma']
  },
  {
    number: 152,
    id: 'diag-152',
    title: 'Diverticulosis',
    cie10: 'K57.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Presencia de herniaciones saculares adquiridas (divertículos) de la mucosa y submucosa a través de las capas musculares del colon (predominio en sigmoides).',
    symptoms: ['Frecuentemente asintomática por completo (hallazgo casual)', 'Molestias intermitentes leves en fosa ilíaca izquierda', 'Meteorismo y estreñimiento crónico'],
    redFlags: ['Hemorragia diverticular baja masiva indolora (sangre roja rutilante por el ano)', 'Fiebre y dolor agudo localizado (Diverticulitis)'],
    criteria: 'Visualización de orificios diverticulares en colonoscopía o en tomografía axial computarizada de abdomen.',
    labTests: ['Hemograma completo (normal en diverticulosis no complicada)', 'Sangre oculta en heces'],
    imaging: ['Colonoscopía diagnóstica', 'TAC de abdomen'],
    differential: ['Pólipos colónicos', 'Angiodisplasia intestinal', 'Cáncer de colon'],
    firstLine: [
      { drug: 'Dieta rica en fibra y agua', dose: '25 a 35 gramos de fibra dietética al día + 2 litros de agua', route: 'Nutricional', freq: 'Diario', notes: 'Reduce la presión intraluminal colónica' }
    ],
    alternatives: [],
    nonPharm: ['Desmitificar la prohibición de semillas, nueces o palomitas de maíz (evidencia actual demuestra que NO aumentan el riesgo de inflamación)', 'Actividad física regular y evitar el sedentarismo'],
    nursingCare: ['Educación nutricional sobre incremento progresivo de fibra soluble e insoluble (frutas, verduras, legumbres)', 'Asegurar una hidratación abundante de al menos 2 litros diarios para evitar fecalomas', 'Instruir al paciente sobre acudir a emergencias si presenta dolor agudo en fosa ilíaca izquierda con fiebre']
  },
  {
    number: 153,
    id: 'diag-153',
    title: 'Diverticulitis aguda',
    cie10: 'K57.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación e infección de uno o más divertículos colónicos por micro o macroperforación (la \'apendicitis izquierda\').',
    symptoms: ['Dolor constante y agudo en fosa ilíaca izquierda', 'Fiebre persistente con escalofríos', 'Estreñimiento o diarrea refleja de inicio reciente', 'Náuseas y anorexia', 'Defensa muscular en cuadrante inferior izquierdo'],
    redFlags: ['Perforación libre con peritonitis fecal difusa (abdomen en tabla y choque séptico)', 'Absceso pélvico o peridiverticular (Hinchey II)', 'Fístula colovesical (neumaturia y fecaluria)'],
    criteria: 'Tomografía computarizada de abdomen con contraste: engrosamiento de pared colónica > 4 mm, trabeculación de la grasa pericolónica y divertículos inflamados.',
    labTests: ['Hemograma completo (leucocitosis con desviación izquierda)', 'Proteína C Reactiva (PCR > 50-100 mg/L orienta a gravedad)', 'Examen de orina'],
    imaging: ['Tomografía axial computarizada (TAC) abdominal con contraste EV (prueba de oro - Clasificación de Hinchey)', 'CONTRAINDICADA la colonoscopía en fase aguda por riesgo de perforación'],
    differential: ['Cáncer de colon perforado', 'Enfermedad inflamatoria pélvica / absceso tuboovárico', 'Apendicitis aguda con ciego largo'],
    firstLine: [
      { drug: 'Ciprofloxacino + Metronidazol (Vía Oral)', dose: 'Ciprofloxacino 500 mg c/12h + Metronidazol 500 mg c/8h VO por 7 a 10 días', route: 'VO', freq: 'c/8-12h', notes: 'Para diverticulitis no complicada ambulatoria tolerando vía oral' },
      { drug: 'Ceftriaxona + Metronidazol o Pip/Tazo (Hospitalizado)', dose: 'Ceftriaxona 2 g/d + Metronidazol 500 mg c/8h EV o Pip/Tazo 4.5 g c/6h EV', route: 'EV', freq: 'c/6-8h', notes: 'En diverticulitis complicada (Hinchey I-IV) o intolerancia oral' }
    ],
    alternatives: [],
    nonPharm: ['Dieta líquida estricta inicial en cuadros leves ambulatorios; reposo digestivo (NPO) en hospitalizados', 'Drenaje percutáneo guiado por TAC en abscesos > 4 cm (Hinchey II)', 'Cirugía de Hartmann urgente en peritonitis purulenta o fecal'],
    nursingCare: ['PROHIBICIÓN ESTRICTA de administrar enemas o laxantes en la fase aguda', 'Control horario de temperatura y signos de irritación peritoneal difusa', 'Mantenimiento del reposo digestivo estricto y balance hidroelectrolítico en hospitalizados', 'Programación de colonoscopía electiva 6 a 8 semanas después de resolver el cuadro agudo']
  },
  {
    number: 154,
    id: 'diag-154',
    title: 'Apendicitis aguda',
    cie10: 'K35.8',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación aguda del apéndice cecal por obstrucción de su luz (por fecalito, hiperplasia linfoide o parásito), causa más común de abdomen agudo quirúrgico.',
    symptoms: ['Cronología de Murphy: dolor inicial sordo periumbilical o epigástrico que a las 4-6 horas migra y se localiza en fosa ilíaca derecha', 'Anorexia constante ('el signo más sensible')', 'Náuseas y vómitos posteriores al dolor', 'Fiebre moderada y taquicardia'],
    redFlags: ['Perforación apendicular (alivio transitorio súbito del dolor seguido de dolor difuso y peritonitis generalizada)', 'Plastrón apendicular', 'Choque séptico'],
    criteria: 'Puntuación de Alvarado ≥ 7/10 o Escala de AIR (Appendicitis Inflammatory Response) de alto riesgo + hallazgos ecográficos/tomográficos.',
    labTests: ['Hemograma completo (leucocitosis > 10,000/uL con neutrofilia > 75% y bastones)', 'Proteína C Reactiva (PCR) elevada', 'Examen de orina (descarte de infección urinaria o litiasis)'],
    imaging: ['Ecografía abdominal (apéndice no compresible con diámetro transverso > 6 mm y halo hiperémico en diana)', 'Tomografía abdominal con contraste en casos dudosos'],
    differential: ['Adenitis mesentérica en niños', 'Embarazo ectópico roto / torsión ovárica en mujeres', 'Divertículo de Meckel inflamado', 'Infección urinaria'],
    firstLine: [
      { drug: 'Apendicectomía quirúrgica (Laparoscópica o Abierta)', dose: 'Intervención quirúrgica de urgencia', route: 'Quirúrgica', freq: 'Urgente', notes: 'Único tratamiento resolutivo definitivo' },
      { drug: 'Ceftriaxona + Metronidazol (Profilaxis o tratamiento)', dose: 'Ceftriaxona 1-2 g EV + Metronidazol 500 mg EV preoperatorio', route: 'EV', freq: 'Pre-quirúrgico stat', notes: 'Profilaxis antibiótica 30-60 min antes de la incisión' }
    ],
    alternatives: [],
    nonPharm: ['NADA POR VÍA ORAL (NPO) inmediato desde la sospecha clínica', 'NO administrar analgésicos potentes ni laxantes antes de la evaluación quirúrgica formal'],
    nursingCare: ['Mantener al paciente en NPO estricto y con vía periférica permeable con solución salina', 'PROHIBIDO colocar calor local sobre el abdomen (favorece la perforación apendicular rápida)', 'Evaluación seriada de signos peritoneales (Blumberg, Rovsing, Psoas, Obturador)', 'Preparación prequirúrgica inmediata y cuidados post-apendicectomía (control de herida y movilización temprana)']
  },
  {
    number: 155,
    id: 'diag-155',
    title: 'Hemorroides',
    cie10: 'I84.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Dilatación y prolapso patológico de los plexos venosos hemorroidales submucosos del canal anal (Internas: por encima de la línea dentada; Externas: por debajo).',
    symptoms: ['Hemorroides Internas: sangrado rectal rojo rutilante indoloro en gotas en la taza al final de la defecación o al limpiarse', 'Prolapso de paquetes hemorroidales con esfuerzo defecatorio', 'Hemorroides Externas: masa perianal blanda recubierta de piel, prurito anal e incomodidad'],
    redFlags: ['Sangrado abundante que produce anemia ferropénica severa', 'Hemorroides prolapsadas estranguladas irreductibles'],
    criteria: 'Anoscopía y proctoscopía con graduación de hemorroides internas de Grado I (sin prolapso) a Grado IV (prolapso permanente irreductible).',
    labTests: ['Hemograma completo (evaluación de hematocrito y anemia ferropénica)'],
    imaging: ['Colonoscopía completa obligatoria en mayores de 45-50 años con rectorragia para descartar cáncer colorrectal concomitante'],
    differential: ['Cáncer colorrectal y anal', 'Fisura anal', 'Pólipos rectales'],
    firstLine: [
      { drug: 'Flavonoides micronizados (Diosmina 450 mg / Hesperidina 50 mg)', dose: '1000 mg cada 8 horas por 4 días, luego c/12h por 3 días en crisis', route: 'VO', freq: 'c/8-12h', notes: 'Flebotónico que mejora el tono venoso y reduce el sangrado' },
      { drug: 'Pomadas antihemorroidales con corticoides y anestésicos tópicos', dose: 'Aplicar capa fina cada 12 horas por un máximo de 7 días', route: 'Tópica rectal', freq: 'c/12h x 7 días', notes: 'No prolongar por riesgo de atrofia cutánea' }
    ],
    alternatives: [],
    nonPharm: ['Baños de asiento con agua tibia (38-40°C) por 10 a 15 minutos 2 a 3 veces al día', 'Aporte diario de fibra dietética (25-30 g/día) y 2 litros de agua para lograr heces blandas sin esfuerzo', 'Ligadura con banda elástica en hemorroides internas grado II y III; hemorroidectomía en grado IV'],
    nursingCare: ['Instruir de forma enérgica al paciente a NO permanecer sentado en el inodoro más de 3 a 5 minutos (evitar leer o usar el celular en el baño)', 'Enseñanza de la realización correcta de baños de asiento con agua tibia sola sin irritantes', 'Educación en consumo de fibra y agua para evitar el pujo defecatorio']
  },
  {
    number: 156,
    id: 'diag-156',
    title: 'Hemorroides trombosadas',
    cie10: 'I84.7',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Formación aguda de un coágulo sanguíneo intraluminal en el plexo hemorroidal externo con estiramiento doloroso de la piel perianal sensible.',
    symptoms: ['Dolor anal agudo exquisito y constante que inicia súbitamente tras un esfuerzo defecatorio o levantamiento de peso', 'Nódulo o masa perianal redondeada dura, violácea o azulada, muy sensible al tacto', 'Dificultad severa para sentarse o caminar'],
    redFlags: ['Necrosis cutánea por isquemia con ulceración y sangrado oscuro continuo', 'Infección bacteriana perianal'],
    criteria: 'Inspección anal que revela un nódulo firme, azulado-violáceo y muy doloroso recubierto de anodermo en el margen anal.',
    labTests: ['No requeridos'],
    imaging: ['Inspección anal directa'],
    differential: ['Absceso perianal agudo', 'Hemorroide interna estrangulada prolapsada', 'Fisura anal'],
    firstLine: [
      { drug: 'Trombectomía hemorroidal externa bajo anestesia local', dose: 'Incisión elíptica y extracción completa del coágulo en las primeras 72 horas', route: 'Quirúrgica menor', freq: 'Inmediato', notes: 'Alivio instantáneo del dolor intenso' },
      { drug: 'Ibuprofeno o Ketorolaco + Tramadol', dose: 'Ibuprofeno 600 mg c/8h o Ketorolaco 10 mg sublingual', route: 'VO/SL', freq: 'c/8h', notes: 'Control del dolor intenso si han pasado > 72h' }
    ],
    alternatives: [],
    nonPharm: ['Baños de asiento tibios 3 veces al día', 'Aplicación de hielo local envuelto en gasa durante las primeras 24 horas', 'Laxantes formadores de volumen para evitar heces duras'],
    nursingCare: ['Asistencia en la infiltración y procedimiento de trombectomía perianal de urgencia', 'Manejo del apósito compresivo perianal y vigilancia de sangrado post-trombectomía', 'Consejería sobre baños de asiento tibios y ablandadores de heces']
  },
  {
    number: 157,
    id: 'diag-157',
    title: 'Fisura anal',
    cie10: 'K60.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Desgarro longitudinal lineal de la mucosa del canal anal por debajo de la línea dentada (90% en línea media posterior) asociado a hipertonía del esfínter anal interno.',
    symptoms: ['Dolor anal lacerante lancinante intensísimo al momento de la defecación ('como cortar con vidrio') que persiste como ardor sordo durante horas', 'Rectorragia de escasa cuantía en estría roja fresca sobre las heces o el papel higiénico', 'Miedo fóbico a defecar que perpetúa el estreñimiento'],
    redFlags: ['Fisura anal lateral o múltiple (DESCARTE OBLIGATORIO de Enfermedad de Crohn, tuberculosis, sífilis o VIH)'],
    criteria: 'Separación suave de los glúteos que visualiza la hendidura lineal; en fisura crónica se observa la tríada de Brodie (papila hipertrófica, úlcera y colgajo cutáneo centinela).',
    labTests: ['No indicados en fisura típica de línea media'],
    imaging: ['CONTRAINDICADO el tacto rectal y la anoscopía en fase aguda por dolor insoportable'],
    differential: ['Hemorroides sangrantes', 'Proctalgia fugaz', 'Carcinoma anal'],
    firstLine: [
      { drug: 'Pomada de Diltiazem al 2% o Nifedipino al 0.2%', dose: 'Aplicar pequeña cantidad en margen anal interno cada 12 horas por 6 a 8 semanas', route: 'Tópica anal', freq: 'c/12h por 8 semanas', notes: 'Esfinterotomía química: relaja el esfínter anal interno y permite cicatrización' },
      { drug: 'Trinitrato de Glicerilo (Nitroglicerina) pomada al 0.4%', dose: 'Aplicar cada 12 horas por 8 semanas', route: 'Tópica anal', freq: 'c/12h', notes: 'Alternativa eficaz (puede provocar cefalea como efecto adverso)' }
    ],
    alternatives: [],
    nonPharm: ['Baños de asiento con agua tibia por 15 minutos tras defecar para relajar el esfínter anal', 'Aporte abundante de fibra soluble (Plantago ovata) y agua para lograr heces blandas cilíndricas', 'Esfinterotomía lateral interna quirúrgica en casos crónicos refractarios'],
    nursingCare: ['Instrucción clara de aplicar la pomada relajante en el borde del canal anal y no profundamente en el recto', 'Educación para erradicar el miedo a defecar asegurando una consistencia blanda de las heces', 'PROHIBICIÓN de realizar tacto rectal si el paciente manifiesta dolor lacerante evidente']
  },
  {
    number: 158,
    id: 'diag-158',
    title: 'Fístula perianal',
    cie10: 'K60.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trayecto tubular crónico inflamatorio que comunica un orificio interno en las criptas anales de Morgagni con un orificio externo en la piel perianal (frecuente secuela de un absceso perianal drenado).',
    symptoms: ['Supuración crónica intermitente de líquido purulento, seroso o fecaloide por un orificio perianal que mancha la ropa interior', 'Prurito perianal y maceración cutánea', 'Dolor anal sordo que aumenta cuando el orificio externo se ocluye temporalmente'],
    redFlags: ['Fístulas complejas transesfinterianas altas o supraesfinterianas con riesgo de incontinencia fecal', 'Fístulas múltiples complejas (sospecha de Enfermedad de Crohn)'],
    criteria: 'Inspección perianal con orificio fistuloso visible y palpación del trayecto fibroso según la Regla de Goodsall.',
    labTests: ['Cultivo de la secreción'],
    imaging: ['Resonancia magnética pélvica de alta resolución (estándar de oro para clasificar el trayecto según Parks y relación con esfínteres)', 'Ecografía endoanal 3D'],
    differential: ['Hidradenitis supurativa perianal', 'Quiste pilonidal sacrococcígeo fistulizado', 'Enfermedad de Crohn'],
    firstLine: [
      { drug: 'Fistulotomía quirúrgica (en fístulas submucosas o interesfinterianas bajas)', dose: 'Puesta a plano del trayecto bajo anestesia', route: 'Quirúrgica', freq: 'Definitiva', notes: 'Cicatrización por segunda intención' },
      { drug: 'Colocación de Sedal / Seton (en fístulas transesfinterianas altas)', dose: 'Hilo o lazo de drenaje a través del trayecto', route: 'Quirúrgica', freq: 'Mantenimiento', notes: 'Drena la infección y previene la incontinencia fecal' }
    ],
    alternatives: [],
    nonPharm: ['Baños de asiento tibios antisépticos diarios', 'Curaciones y gasas secas para absorber el exudado'],
    nursingCare: ['Cuidado de heridas quirúrgicas perianales con curación por segunda intención desde la profundidad hacia la superficie', 'Mantenimiento de gasas limpias para proteger la piel perianal de maceración por el débito purulento', 'Control de la continencia anal postoperatoria (gases y heces líquidas)']
  },
  {
    number: 159,
    id: 'diag-159',
    title: 'Constipación crónica',
    cie10: 'K59.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno de la defecación persistente caracterizado por frecuencia defecatoria baja (< 3 evacuaciones por semana) o dificultad expulsiva con esfuerzo excesivo (Criterios de Roma IV).',
    symptoms: ['Menos de 3 deposiciones semanales', 'Heces duras, secas o en bolitas caprinas (Escala de Bristol tipos 1 y 2)', 'Esfuerzo defecatorio excesivo y prolongado', 'Sensación de evacuación incompleta u obstrucción anorrectal', 'Necesidad de maniobras digitales facilitadoras'],
    redFlags: ['Impactación fecal con diarrea paradójica por rebosamiento en ancianos encamados', 'Aparición súbita en mayores de 50 años (sospecha de neoplasia estenosante)', 'Vómitos y distensión aguda (Vólvulo de sigmoides)'],
    criteria: 'Criterios de Roma IV: presencia de ≥ 2 criterios en al menos el 25% de las defecaciones durante los últimos 3 meses.',
    labTests: ['Hemograma, glucosa, perfil tiroideo (TSH para descartar hipotiroidismo)', 'Calcio sérico (descarte de hipercalcemia)'],
    imaging: ['Radiografía simple de abdomen (cuantificación de carga fecal y descartar megacolon)', 'Colonoscopía en presencia de signos de alarma'],
    differential: ['Cáncer colorrectal', 'Hipotiroidismo', 'Efecto adverso por opioides, hierro o calcio', 'Disinergia del piso pélvico'],
    firstLine: [
      { drug: 'Polietilenglicol 3350 / 4000 (PEG)', dose: '17 gramos disueltos en un vaso de agua cada 24 horas', route: 'VO', freq: 'c/24h en las mañanas', notes: 'Laxante osmótico de primera línea con mayor nivel de evidencia y seguridad a largo plazo' },
      { drug: 'Lactulosa', dose: '15 a 30 mL cada 12 a 24 horas VO', route: 'VO', freq: 'c/12-24h', notes: 'Laxante osmótico alternativo' },
      { drug: 'Bisacodilo o Senósidos', dose: '5 a 10 mg al acostarse condicional', route: 'VO', freq: 'Rescate puntual', notes: 'Laxantes estimulantes de rescate a corto plazo' }
    ],
    alternatives: [],
    nonPharm: ['Aumento gradual de fibra dietética a 25-30 g/día junto con 1.5 a 2 litros de agua', 'Adopción de la postura fisiológica en cuclillas para defecar (colocar un banquito bajo los pies para flexionar caderas a 35° y enderezar el ángulo anorrectal)', 'Horario regular matutino aprovechando el reflejo gastrocólico tras el desayuno'],
    nursingCare: ['Desimpactación fecal manual cuidadosa previa analgesia y lubricación si hay fecaloma palpable en ampolla rectal', 'Enseñanza del uso del taburete para pies (Squatty potty) para relajar el músculo puborrectal', 'Monitoreo de hábitos defecatorios y registro de la Escala de Bristol en la historia clínica', 'Prevención del estreñimiento inducido por sulfato ferroso mediante incremento hídrico']
  },
  {
    number: 160,
    id: 'diag-160',
    title: 'Diarrea crónica',
    cie10: 'K52.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Disminución persistente de la consistencia fecal con aumento del volumen (> 200 g/día) o frecuencia de las deposiciones durante más de 4 semanas consecutivas.',
    symptoms: ['Deposiciones líquidas o pastosas diarias por más de 1 mes', 'Pérdida ponderal y astenia', 'Meteorismo y dolor abdominal cólico', 'Esteatorrea (heces grasosas brillantes difíciles de limpiar de la taza en malabsorción)'],
    redFlags: ['Anemia ferropénica o megaloblástica severa', 'Hipoalbuminemia con edema periférico', 'Presencia de sangre fresca o melena en heces'],
    criteria: 'Diarrea que persiste por > 4 semanas; clasificación etiopatogénica en osmótica, secretora, inflamatoria o motora mediante brecha osmolar fecal.',
    labTests: ['Examen parasitológico seriado de heces (3 muestras)', 'Calprotectina fecal cuantitativa', 'Anticuerpos antitransglutaminasa tisular IgA (Celiaquía)', 'Brecha osmolar en heces (290 - 2x[Na + K])', 'Albúmina, electrolitos y hemograma'],
    imaging: ['Colonoscopía completa con ileoscopía y biopsias escalonadas de colon'],
    differential: ['Enfermedad celíaca', 'Enfermedad inflamatoria intestinal (Crohn / Colitis ulcerosa)', 'Parasitosis crónica (Giardia, Strongyloides)', 'Insuficiencia pancreática exocrina'],
    firstLine: [
      { drug: 'Tratamiento etiológico guiado por diagnóstico', dose: 'Según causa específica demostrada', route: 'VO', freq: 'Individualizado', notes: 'La diarrea crónica exige diagnóstico etiológico formal' },
      { drug: 'Loperamida', dose: '2 a 4 mg según necesidad sintomática', route: 'VO', freq: 'Condicional', notes: 'Solo tras haber descartado causa infecciosa invasiva o inflamatoria activa' }
    ],
    alternatives: [],
    nonPharm: ['Hidratación oral constante y reposición de electrolitos', 'Dieta astringente libre de lactosa y gluten según sospecha clínica'],
    nursingCare: ['Registro diario del balance hídrico, número de deposiciones y escala de consistencia de Bristol', 'Monitoreo de peso corporal semanal para evaluar estado nutricional', 'Vigilancia de signos de desequilibrio hidroelectrolítico (calambres, debilidad, arritmias)']
  },
  {
    number: 161,
    id: 'diag-161',
    title: 'Enfermedad de Crohn',
    cie10: 'K50.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad inflamatoria intestinal granulomatosa transmural crónica que puede afectar cualquier segmento del tubo digestivo desde la boca hasta el ano en parches discontinuos.',
    symptoms: ['Dolor abdominal cólico recurrente en fosa ilíaca derecha', 'Diarrea crónica no sanguinolenta o con moco', 'Pérdida de peso progresiva, malnutrición y fiebre baja', 'Lesiones perianales complejas (fístulas, fisuras profundas o abscesos recurrentes)'],
    redFlags: ['Estenosis intestinal con obstrucción intestinal mecánica', 'Fístulas enteroentéricas, enterovesicales o enterocutáneas', 'Perforación libre'],
    criteria: 'Criterios de Lennard-Jones: lesiones discontinuas \'en empedrado\', afectación transmural con úlceras serpiginosas y granulomas no caseificantes en biopsia.',
    labTests: ['Calprotectina fecal marcadamente elevada (> 250 ug/g)', 'Proteína C reactiva y VSG elevadas', 'Anticuerpos ASCA (Anti-Saccharomyces cerevisiae) positivos en > 60%', 'Hemograma (anemia mixta por inflamación y malabsorción de B12/hierro)'],
    imaging: ['Entero-Resonancia magnética de intestino delgado (estándar de oro para valorar extensión transmural y estenosis)', 'Colonoscopía con ileoscopía retrógrada y biopsias'],
    differential: ['Tuberculosis intestinal (diagnóstico diferencial primordial en el Perú)', 'Colitis ulcerosa', 'Apendicitis aguda'],
    firstLine: [
      { drug: 'Budesonida oral de liberación ileal', dose: '9 mg una vez al día por las mañanas por 8 semanas', route: 'VO', freq: 'c/24h en ayunas', notes: 'Tratamiento de elección para inducir remisión en afección ileocecal leve-moderada' },
      { drug: 'Infliximab o Adalimumab (Anti-TNF)', dose: 'Infliximab 5 mg/kg EV en semanas 0, 2 y 6, luego c/8 semanas', route: 'EV/SC', freq: 'Según esquema biológico', notes: 'Terapia biológica de primera línea en enfermedad moderada-severa o fistulizante' },
      { drug: 'Azatioprina', dose: '2 a 2.5 mg/kg/día VO', route: 'VO', freq: 'c/24h', notes: 'Inmunomodulador para mantenimiento de la remisión' }
    ],
    alternatives: [],
    nonPharm: ['Soporte nutricional enteral exclusivo (fórmula elemental) para inducir remisión en niños', 'Cese obligatorio del tabaco (el tabaco duplica las recaídas y cirugías en Crohn)', 'Cirugía resectiva conservadora de estenosis'],
    nursingCare: ['DESCARTE RIGUROSO DE TUBERCULOSIS LATENTE (PPD, IGRA, Rx tórax) antes de iniciar terapia biológica anti-TNF', 'Cuidado especializado de fístulas enterocutáneas y ostomías con barreras protectoras dérmicas', 'Monitoreo de curvas de peso y estado nutricional', 'Apoyo psicológico en enfermedades crónicas recidivantes']
  },
  {
    number: 162,
    id: 'diag-162',
    title: 'Colitis ulcerosa',
    cie10: 'K51.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad inflamatoria intestinal crónica que afecta continua y exclusivamente la mucosa del recto y colon en extensión variable.',
    symptoms: ['Diarrea sanguinolenta crónica con moco y pus', 'Pujo y tenesmo rectal doloroso continuo', 'Urgencia defecatoria e incontinencia fecal', 'Dolor abdominal cólico que alivia tras la evacuación'],
    redFlags: ['Megacolon tóxico (dilatación del colon transverso > 6 cm en Rx con fiebre, taquicardia y riesgo inminente de perforación)', 'Colitis aguda grave refractaria'],
    criteria: 'Colonoscopía con afectación mucosa continua desde el recto hacia proximal (eritema, friabilidad, sangrado al roce y pérdida del patrón vascular) + biopsia.',
    labTests: ['Calprotectina fecal muy elevada', 'Anticuerpos p-ANCA positivos en > 70%', 'Hemograma (anemia por sangrado crónico)', 'Descarte de toxina de Clostridioides difficile en heces en cada brote'],
    imaging: ['Radiografía simple de abdomen urgente en sospecha de megacolon tóxico', 'Colonoscopía completa con biopsias'],
    differential: ['Enfermedad de Crohn colónica', 'Colitis infecciosa (Shigella, Campylobacter, amebiasis)', 'Colitis isquémica'],
    firstLine: [
      { drug: 'Mesalazina (5-ASA) oral y tópica rectal', dose: 'Mesalazina oral 2.4 a 4.8 g/día + supositorios o enemas de 1 g al acostarse', route: 'VO/Rectal', freq: 'c/24h', notes: 'Pilar fundamental para inducción y mantenimiento en brotes leves-moderados' },
      { drug: 'Metilprednisolona EV (En brote grave)', dose: '60 mg al día EV en infusión continua o dividida', route: 'EV', freq: 'c/24h', notes: 'Corticoterapia sistémica de inducción rápida en brotes severos hospitalizados' },
      { drug: 'Infliximab o Tofacitinib', dose: 'Según protocolos biológicos', route: 'EV/VO', freq: 'Según esquema', notes: 'Terapia de rescate en fallo de corticoides al 3er-5to día' }
    ],
    alternatives: [],
    nonPharm: ['Colectomía total restauradora con reservorio ileoanal en 'J' (curativa en colitis refractaria o displasia)', 'Reposo digestivo en brotes severos'],
    nursingCare: ['Monitorización horaria de signos vitales, perímetro abdominal y número de deposiciones sanguinolentas (evaluación con Criterios de Truelove-Witts)', 'Vigilancia estrecha de distensión abdominal aguda por riesgo de megacolon tóxico', 'Administración correcta de enemas de mesalazina reteniéndolos toda la noche en decúbito lateral izquierdo', 'Tamizaje endoscópico regular a partir de los 8 años de diagnóstico para detección precoz de cáncer de colon']
  },
  {
    number: 163,
    id: 'diag-163',
    title: 'Colitis microscópica',
    cie10: 'K52.8',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Causa común de diarrea acuosa crónica en mujeres mayores de 60 años con colonoscopía macroscópicamente normal y diagnóstico puramente histológico (Colitis colágena o linfocítica).',
    symptoms: ['Diarrea acuosa crónica profusa sin sangre (4 a 10 deposiciones líquidas al día)', 'Urgencia defecatoria e incontinencia fecal nocturna', 'Dolor abdominal cólico leve', 'Pérdida de peso moderada'],
    redFlags: ['Deshidratación e hipopotasemia severa en adultos mayores frágiles'],
    criteria: 'Colonoscopía macroscópicamente normal + biopsias escalonadas de colon con banda subepitelial de colágeno > 10 um (colágena) o > 20 linfocitos intraepiteliales por 100 enterocitos (linfocítica).',
    labTests: ['Biopsias colónicas múltiples escalonadas (ciego, colon ascendente, transverso, descendente y recto)', 'Calprotectina fecal levemente elevada o normal', 'Anticuerpos anti-transglutaminasa (asociación frecuente a celiaquía)'],
    imaging: ['Colonoscopía con mucosa colónica completamente lisa y normal'],
    differential: ['Síndrome de intestino irritable con diarrea', 'Efecto adverso por fármacos (AINEs, IBP, sertralina)', 'Celiaquía'],
    firstLine: [
      { drug: 'Budesonida oral de liberación ileocolónica', dose: '9 mg una vez al día por las mañanas por 6 a 8 semanas', route: 'VO', freq: 'c/24h en ayunas', notes: 'Fármaco de elección con tasa de respuesta > 80-90%' }
    ],
    alternatives: [],
    nonPharm: ['SUSPENSIÓN DE FÁRMACOS DESENCADENANTES (AINEs, omeprazol, ticlopidina, ISRS)', 'Dieta astringente y rehidratación'],
    nursingCare: ['Revisión minuciosa de la medicación habitual del paciente para retirar fármacos inductores de colitis microscópica', 'Supervisión de la pauta descendente de budesonida (9 mg por 4 sem, 6 mg por 2 sem, 3 mg por 2 sem)', 'Medidas para prevención de incontinencia fecal y protección de la piel perianal']
  },
  {
    number: 164,
    id: 'diag-164',
    title: 'Colelitiasis',
    cie10: 'K80.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Presencia de cálculos en la vesícula biliar (predominantemente de colesterol o pigmentarios negros), altamente prevalente en mujeres peruanas multíparas.',
    symptoms: ['Frecuentemente asintomática (80%)', 'Cólico biliar: dolor opresivo intenso en hipocondrio derecho o epigastrio tras ingesta de comidas grasas (colecistoquinéticos) que irradia a escápula derecha y dura de 1 a 5 horas', 'Náuseas y vómitos'],
    redFlags: ['Dolor que dura > 6 horas con fiebre y Murphy positivo (Colecistitis aguda)', 'Ictericia y coluria (Coledocolitiasis)'],
    criteria: 'Ecografía abdominal con visualización de imágenes hiperecogénicas intraluminales vesiculares móviles con sombra acústica posterior neta.',
    labTests: ['Perfil hepático completo (Bilirrubinas, fosfatasa alcalina, transaminasas normales en cólico simple)', 'Amilasa y lipasa'],
    imaging: ['Ecografía abdominal superior (sensibilidad y especificidad > 95% - prueba de oro)'],
    differential: ['Úlcera péptica', 'Gastritis aguda', 'Pancreatitis aguda', 'Cólico nefrítico derecho'],
    firstLine: [
      { drug: 'AINEs parenterales (Diclofenaco o Ketorolaco) en cólico agudo', dose: 'Diclofenaco 75 mg IM o Ketorolaco 30 mg EV', route: 'IM/EV', freq: 'Stat en crisis', notes: 'De elección porque bloquean las prostaglandinas y detienen el espasmo vesicular' },
      { drug: 'Hioscina (Escopolamina) o Metamizol', dose: 'Hioscina 20 mg EV lento + Metamizol 1-2 g EV', route: 'EV', freq: 'c/8h condicional', notes: 'Antiespasmódico coadyuvante' }
    ],
    alternatives: [],
    nonPharm: ['Colecistectomía laparoscópica programada electiva (tratamiento definitivo para evitar complicaciones)', 'Dieta estricta hipograsa (eliminar frituras, mayonesa, palta, lácteos enteros y huevos)'],
    nursingCare: ['Alivio rápido del dolor en el cólico agudo con AINEs EV según indicación médica', 'Educación nutricional estricta en dieta hipograsa estricta mientras espera la cirugía programada', 'Advertencia sobre signos de alarma (fiebre, coloración amarilla de piel u orina oscura) para acudir de inmediato a emergencia']
  },
  {
    number: 165,
    id: 'diag-165',
    title: 'Colecistitis aguda',
    cie10: 'K81.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación e infección aguda de la pared de la vesícula biliar por enclavamiento persistente de un cálculo en el conducto cístico.',
    symptoms: ['Dolor constante e intenso en hipocondrio derecho que dura > 6 horas continuas', 'Signo de Murphy positivo (interrupción brusca de la inspiración profunda a la palpación del hipocondrio derecho)', 'Fiebre (> 37.8 - 38°C) con taquicardia', 'Náuseas y vómitos biliosos'],
    redFlags: ['Colecistitis gangrenosa o enfisematosa con perforación vesicular y peritonitis biliar', 'Piocolecisto (vesícula a tensión llena de pus)', 'Plastrón vesicular'],
    criteria: 'Criterios de Tokio (TG18): Signos locales de inflamación (Murphy positivo / masa en CSD) + signos sistémicos (fiebre / PCR o leucocitosis) + hallazgos ecográficos.',
    labTests: ['Hemograma completo con leucocitosis y desviación izquierda', 'PCR elevada', 'Perfil hepático (discreta elevación de transaminasas y fosfatasa alcalina)'],
    imaging: ['Ecografía abdominal: engrosamiento de pared vesicular > 4 mm, signo de doble contorno, líquido perivesicular, cálculo enclavado y Murphy ecográfico positivo'],
    differential: ['Coledocolitiasis con colangitis', 'Pancreatitis aguda', 'Hepatitis aguda', 'Úlcera perforada'],
    firstLine: [
      { drug: 'Colecistectomía laparoscópica temprana de urgencia', dose: 'Intervención dentro de las primeras 72 horas del inicio de síntomas', route: 'Quirúrgica', freq: 'Urgente', notes: 'Tratamiento de elección según guías de Tokio TG18' },
      { drug: 'Ceftriaxona + Metronidazol o Ciprofloxacino + Metronidazol', dose: 'Ceftriaxona 1-2 g/d EV + Metronidazol 500 mg c/8h EV', route: 'EV', freq: 'c/8-24h', notes: 'Antibioticoterapia parenteral protocolizada' }
    ],
    alternatives: [],
    nonPharm: ['Reposo digestivo absoluto (NPO)', 'Hidratación endovenosa enérgica con cristaloides'],
    nursingCare: ['Mantenimiento del paciente en NPO estricto y balance hídrico horario', 'Control de curva térmica seriada y signos de irritación peritoneal difusa', 'Preparación preoperatoria inmediata para colecistectomía laparoscópica', 'Monitoreo de drenajes postquirúrgicos (dren Penrose o Jackson-Pratt) en busca de bilis']
  },
  {
    number: 166,
    id: 'diag-166',
    title: 'Coledocolitiasis',
    cie10: 'K80.5',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Presencia de cálculos en el conducto colédoco (vía biliar principal), procedentes de la vesícula o formados de novo, que causan obstrucción biliar mecánica.',
    symptoms: ['Ictericia obstructiva fluctuante (piel y escleras amarillas)', 'Coluria (orina oscura como té cargado)', 'Acolia o hipocolia (heces pálidas masilla)', 'Dolor cólico en hipocondrio derecho', 'Prurito generalizado'],
    redFlags: ['Fiebre con escalofríos y dolor (Tríada de Charcot: progresión a Colangitis aguda supurada)', 'Pancreatitis aguda biliar por enclavamiento en la ampolla de Vater'],
    criteria: 'Patrón colestásico de laboratorio + dilatación del colédoco (> 6-7 mm) con cálculo visualizado en ecografía, colangiorresonancia o ecoendoscopía.',
    labTests: ['Bilirrubina total con predominio directo (conjugada)', 'Fosfatasa alcalina (FA) y Gamma-glutamil transferasa (GGT) muy elevadas', 'Transaminasas con elevación transitoria temprana', 'Amilasa/lipasa'],
    imaging: ['Colangiopancreatografía por Resonancia Magnética (CPRM - no invasiva)', 'Ecoendoscopía biliopancreática (EUS)', 'Ecografía abdominal'],
    differential: ['Cáncer de cabeza de páncreas (ictericia silente indolora)', 'Colangiocarcinoma', 'Estenosis biliar benigna'],
    firstLine: [
      { drug: 'Colangiopancreatografía Retrógrada Endoscópica (CPRE)', dose: 'Papilotomía / esfinterotomía endoscópica y extracción de cálculos con canastilla de Dormia o balón', route: 'Endoscópica terapéutica', freq: 'Procedimiento', notes: 'Tratamiento de elección para desobstruir la vía biliar' },
      { drug: 'Colecistectomía laparoscópica diferida', dose: 'Posterior a la CPRE exitosa en el mismo internamiento', route: 'Quirúrgica', freq: 'Definitiva', notes: 'Para evitar recurrencias de migración' }
    ],
    alternatives: [],
    nonPharm: ['Reposo gástrico e hidratación endovenosa adecuada'],
    nursingCare: ['Vigilancia estrecha de signos de colangitis (temperatura horaria y dolor abdominal)', 'Monitoreo de la coloración de la orina y deposiciones en cada turno', 'Cuidados post-CPRE: detección precoz de dolor epigástrico intenso o signos de pancreatitis post-CPRE (dosar amilasa a las 4h) o sangrado']
  },
  {
    number: 167,
    id: 'diag-167',
    title: 'Colangitis aguda',
    cie10: 'K83.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Infección bacteriana piógena ascendente de los conductos biliares secundaria a obstrucción biliar completa, emergencia médica y quirúrgica.',
    symptoms: ['Tríada de Charcot (70%): 1. Fiebre alta con escalofríos intensos; 2. Ictericia visible; 3. Dolor en hipocondrio derecho', 'Péntada de Reynolds (en colangitis supurada grave): Tríada de Charcot + 4. Hipotensión arterial (choque séptico) + 5. Confusión mental o alteración del sensorio'],
    redFlags: ['Péntada de Reynolds completa con choque séptico fulminante', 'Fallo renal agudo secundario', 'Abscesos hepáticos múltiples'],
    criteria: 'Criterios de Tokio (TG18): Inflamación sistémica (fiebre/leucocitosis) + Colestasis (ictericia/FA/GGT) + Hallazgo de obstrucción biliar en imágenes.',
    labTests: ['Hemocultivos x 2 inmediatos (frecuente bacteriemia por E. coli, Klebsiella o Enterococcus)', 'Bilirrubina directa, FA, GGT y transaminasas marcadamente elevadas', 'Lactato sérico y gasometría'],
    imaging: ['Ecografía abdominal rápida a la cabecera del paciente', 'Tomografía computarizada abdominal'],
    differential: ['Colecistitis aguda litiásica', 'Sepsis de foco abdominal desconocido', 'Hepatitis viral fulminante'],
    firstLine: [
      { drug: 'Drenaje biliar urgente mediante CPRE o drenaje percutáneo transcítico', dose: 'Descompresión endoscópica inmediata dentro de las primeras 12 a 24 horas', route: 'Endoscópica / Radiológica', freq: 'Urgencia vital', notes: 'SALVA LA VIDA: ningún antibiótico llega a la bilis si hay hipertensión biliar obstructiva' },
      { drug: 'Piperacilina / Tazobactam o Ceftriaxona + Metronidazol', dose: 'Pip/Tazo 4.5 g cada 6 horas EV o Ceftriaxona 2 g/d + Metronidazol 500 mg c/8h EV', route: 'EV', freq: 'c/6-8h', notes: 'Antibioticoterapia bactericida de amplio espectro inmediata' }
    ],
    alternatives: [],
    nonPharm: ['Reanimación hemodinámica agresiva con cristaloides en Shock Trauma / UCI', 'Soporte vasopresor con Noradrenalina si la PAM < 65 mmHg'],
    nursingCare: ['Activación inmediata del protocolo de sepsis y preparación para CPRE de emergencia', 'Canalización de 2 vías periféricas gruesas e inicio inmediato de hidratación EV y antibióticos en la primera hora ('hora de oro')', 'Monitoreo horario estricto de funciones vitales, escala de Glasgow y diuresis por sonda Foley', 'Vigilancia de signos de sangrado o perforación post-drenaje biliar']
  },
  {
    number: 168,
    id: 'diag-168',
    title: 'Pancreatitis aguda',
    cie10: 'K85.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Proceso inflamatorio agudo del páncreas por activación prematura intraacinar de enzimas digestivas, causado principalmente por litiasis biliar (80% en Perú) o alcohol.',
    symptoms: ['Dolor epigástrico transfictivo severo de inicio súbito que irradia 'en cinturón' o en barra hacia la espalda', 'Alivio parcial del dolor al inclinarse hacia adelante (posición mahometana)', 'Vómitos alimentarios y biliosos repetidos que no alivian el dolor', 'Distensión abdominal con íleo paralítico'],
    redFlags: ['Signos de pancreatitis necrotizante grave: Signo de Cullen (equimosis periumbilical) o Signo de Grey-Turner (equimosis en flancos)', 'Falla orgánica persistente > 48h (Score de Marshall modificado: renal, respiratoria o cardiovascular)'],
    criteria: 'Criterios de Atlanta (≥ 2 de 3): 1. Dolor abdominal epigástrico típico; 2. Lipasa o amilasa sérica ≥ 3 veces el límite superior normal; 3. Hallazgos característicos en imágenes.',
    labTests: ['Lipasa sérica (más sensible y específica que la amilasa; permanece elevada más días)', 'Amilasa sérica', 'Hematocrito (hemoconcentración > 44% indica necrosis)', 'Calcio sérico (hipocalcemia es signo de mal pronóstico)', 'Perfil lipídico (hipertrigliceridemia)'],
    imaging: ['Tomografía computarizada abdominal con contraste (TAC de protocolo de páncreas) realizada a las 72 a 96 horas para evaluar necrosis (Score de Balthazar)', 'Ecografía abdominal inicial (busca colelitiasis)'],
    differential: ['Infarto agudo de miocardio de cara diafragmática', 'Úlcera péptica perforada', 'Aneurisma aórtico roto', 'Isquemia mesentérica'],
    firstLine: [
      { drug: 'Fluidoterapia enérgica guiada por objetivos con Ringer Lactato', dose: '150 a 250 mL/h (o bolo inicial de 10-20 mL/kg) para mantener diuresis > 0.5 mL/kg/h y Hto < 44%', route: 'EV', freq: 'Continuo guiado por diuresis', notes: 'Pilar fundamental en las primeras 24 horas para preservar la microcirculación pancreática' },
      { drug: 'Metamizol o Fentanilo / Tramadol', dose: 'Metamizol 1-2 g c/8h EV o Tramadol 50-100 mg EV lento', route: 'EV', freq: 'c/8h pautado', notes: 'Analgesia multimodal potente obligatoria' }
    ],
    alternatives: [],
    nonPharm: ['REINICIO TEMPRANO DE LA VÍA ORAL (dieta sólida baja en grasas) en cuanto el dolor mejore y no haya íleo (no esperar normalización de amilasa)', 'CPRE temprana en las primeras 24-48 horas SOLO si hay colangitis aguda asociada o cálculo enclavado'],
    nursingCare: ['Monitorización horaria de balance hídrico y diuresis estricta por sonda vesical (meta diuresis > 0.5 mL/kg/hora)', 'Control riguroso de hematocrito seriado a las 12, 24 y 48 horas (evitar sobrehidratación que cause edema pulmonar o subhidratación con necrosis)', 'Evaluación del dolor con escala EVA y administración puntual de analgesia pautada', 'Promoción del reinicio de la dieta oral temprana según indicación médica']
  },
  {
    number: 169,
    id: 'diag-169',
    title: 'Pancreatitis crónica',
    cie10: 'K86.1',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Inflamación fibroinflamatoria progresiva e irreversible del parénquima pancreático con destrucción acinar, calcificaciones y pérdida de funciones exocrina y endocrina.',
    symptoms: ['Dolor abdominal epigástrico sordo crónico o episódico intratable postprandial que irradia a espalda', 'Esteatorrea crónica (heces voluminosas, fétidas, pastosas y brillantes con gotas de grasa)', 'Pérdida de peso progresiva por maldigestión', 'Diabetes mellitus pancreatógena tardía (Tipo 3c)'],
    redFlags: ['Adicción o dependencia a opioides por dolor crónico refractario', 'Pseudoquistes pancreáticos o compresión duodenal/biliar', 'Adenocarcinoma de páncreas'],
    criteria: 'Presencia de calcificaciones pancreáticas en TAC/Rx + atrofia glandular o esteatorrea con elastasa fecal-1 baja.',
    labTests: ['Elastasa fecal-1 en heces (< 200 ug/g indica insuficiencia pancreática exocrina; < 100 ug/g severa)', 'Glicemia y HbA1c (diabetes tipo 3c)', 'Niveles de vitaminas liposolubles (A, D, E, K)'],
    imaging: ['Tomografía computarizada de abdomen (calcificaciones intraductales múltiples y dilatación arrosariada del conducto de Wirsung)', 'Resonancia magnética con secretina'],
    differential: ['Cáncer de páncreas', 'Úlcera péptica refractaria', 'Enfermedad celíaca'],
    firstLine: [
      { drug: 'Terapia de Reemplazo Enzimático Pancreático (Pancreatina con microesferas gastrorresistentes)', dose: '40,000 a 50,000 unidades de lipasa con cada comida principal y 25,000 en refrigerios', route: 'VO', freq: 'Durante las comidas', notes: 'Tomar JUNTO con los alimentos, sin masticar las cápsulas' },
      { drug: 'Pregabalina o Gabapentina', dose: 'Pregabalina 75 mg c/12h inicial hasta 150 mg c/12h', route: 'VO', freq: 'c/12h', notes: 'Modulación del dolor crónico neuropático visceral' }
    ],
    alternatives: [],
    nonPharm: ['ABSTENCIÓN TOTAL Y DEFINITIVA DE ALCOHOL Y TABACO (frenan la progresión de la calcificación)', 'Fraccionar comidas en 5 a 6 tomas al día de contenido moderado de grasas saludables'],
    nursingCare: ['Instrucción estricta de tomar las enzimas pancreáticas REPARTIDAS DURANTE la comida (no antes ni después) para que se mezclen con el quimo alimentario', 'Advertencia de NO abrir ni masticar las microesferas de pancreatina porque el ácido gástrico las inactiva', 'Suplementación de vitaminas liposolubles (A, D, E, K) y control de glucemias', 'Soporte psicosocial para el dolor crónico']
  },
  {
    number: 170,
    id: 'diag-170',
    title: 'Hígado graso no alcohólico',
    cie10: 'K76.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad hepática esteatósica asociada a disfunción metabólica (MASLD) con acumulación de grasa en > 5% de los hepatocitos en ausencia de consumo significativo de alcohol.',
    symptoms: ['Frecuentemente asintomático por años (hallazgo ecográfico)', 'Astenia y fatiga crónica leve', 'Pesadez o molestia vaga en hipocondrio derecho', 'Hepatomegalia blanda indolora'],
    redFlags: ['Progresión a esteatohepatitis no alcohólica (EHNA) con fibrosis hepática avanzada (Score FIB-4 > 2.67)'],
    criteria: 'Evidencia de esteatosis hepática por imagen o biopsia en paciente con al menos un factor de riesgo cardiometabólico (obesidad, diabetes tipo 2, dislipidemia o HTA).',
    labTests: ['Transaminasas (TGO/TGP discretamente elevadas o normales)', 'Cálculo del Score FIB-4 (Edad, TGO, TGP y Plaquetas) para estratificar riesgo de fibrosis', 'Perfil lipídico, glucemia basal e insulina (HOMA-IR)'],
    imaging: ['Ecografía abdominal superior (hiperecogenicidad hepática difusa en 'hígado brillante' con atenuación posterior)', 'Elastografía hepática de transición (FibroScan / CAP)'],
    differential: ['Hepatopatía alcohólica', 'Hepatitis viral B o C crónica', 'Enfermedad de Wilson'],
    firstLine: [
      { drug: 'Pioglitazona (en pacientes con DM2 o EHNA comprobada)', dose: '30 a 45 mg una vez al día VO', route: 'VO', freq: 'c/24h', notes: 'Mejora la esteatosis y resolución histológica' },
      { drug: 'Agonistas del receptor GLP-1 (Semaglutida o Liraglutida)', dose: 'Según titulación semanal para control metabólico y pérdida ponderal', route: 'SC', freq: 'Semanal', notes: 'Pérdida de peso significativa con mejoría hepática probada' },
      { drug: 'Vitamina E (alfa-tocoferol)', dose: '800 UI al día en pacientes no diabéticos con EHNA', route: 'VO', freq: 'c/24h', notes: 'Efecto antioxidante hepatoprotector' }
    ],
    alternatives: [],
    nonPharm: ['PÉRDIDA DE PESO DEL 7 AL 10% DEL PESO CORPORAL (única medida que revierte la esteatosis y mejora la fibrosis)', 'Dieta mediterránea baja en carbohidratos refinados y fructosa industrial', 'Ejercicio físico aeróbico y de fuerza al menos 150 minutos semanales'],
    nursingCare: ['Cálculo y seguimiento del Score FIB-4 en controles de salud para identificar pacientes en riesgo de cirrosis silente', 'Educación nutricional para erradicar bebidas azucaradas, gaseosas y productos con jarabe de maíz de alta fructosa', 'Monitoreo mensual de peso, índice de masa corporal y perímetro abdominal', 'Fomento de la actividad física progresiva y adherencia a cambios de estilo de vida']
  },
  {
    number: 171,
    id: 'diag-171',
    title: 'Esteatohepatitis (EHNA)',
    cie10: 'K75.8',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Forma inflamatoria progresiva de la enfermedad hepática grasa con degeneración balonizante del hepatocito, necrosis y depósito de fibrosis con alto riesgo de cirrosis.',
    symptoms: ['Astenia marcada y debilidad persistente', 'Molestia sorda en hipocondrio derecho', 'Acantosis nigricans en cuello y axilas por resistencia a la insulina severa', 'Hepatomegalia palpable'],
    redFlags: ['Fibrosis en puente o cirrosis establecida (F3-F4)', 'Desarrollo de hepatocarcinoma'],
    criteria: 'Biopsia hepática que demuestra tríada: esteatosis + balonización de hepatocitos + inflamación lobulillar; o biomarcadores no invasivos de alta probabilidad.',
    labTests: ['Transaminasas con elevación crónica de TGP y TGO', 'Marcadores de fibrosis (FIB-4, ELF test)', 'Hemograma con recuento plaquetario (la caída de plaquetas sugiere hipertensión portal incipiente)'],
    imaging: ['Elastografía hepática de transición (FibroScan) con rigidez hepática > 8-10 kPa'],
    differential: ['Hepatitis alcohólica', 'Hepatitis autoinmune', 'Hepatitis farmacológica'],
    firstLine: [
      { drug: 'Resmetirom', dose: '80 a 100 mg al día VO según peso corporal', route: 'VO', freq: 'c/24h', notes: 'Agonista selectivo de receptores tiroideos THR-beta aprobado para EHNA con fibrosis F2-F3' },
      { drug: 'Vitamina E + Pioglitazona', dose: 'Según comorbilidades metabólicas', route: 'VO', freq: 'c/24h', notes: 'Reducción de inflamación histológica' }
    ],
    alternatives: [],
    nonPharm: ['Pérdida de peso obligatoria ≥ 10% del peso corporal mediante dieta y ejercicio estructurado', 'Cirugía bariátrica en obesidad mórbida con reversión comprobada de EHNA'],
    nursingCare: ['Monitoreo continuo de parámetros metabólicos (glucemias, lípidos, presión arterial)', 'Supervisión del programa de descenso de peso gradual (evitar descensos ultra-rápidos que empeoran la inflamación hepática)', 'Tamizaje ecográfico semestral si hay sospecha de cirrosis para despistaje de hepatocarcinoma']
  },
  {
    number: 172,
    id: 'diag-172',
    title: 'Cirrosis alcohólica',
    cie10: 'K70.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Estadio terminal de la hepatopatía por consumo crónico y perjudicial de alcohol caracterizado por nódulos de regeneración rodeados de bandas fibrosas e hipertensión portal.',
    symptoms: ['Estigmas hepáticos: arañas vasculares (spider nevi), eritema palmar, ginecomastia, contractura de Dupuytren y atrofia testicular', 'Ictericia conjuntival, coluria y astenia severa', 'Distensión abdominal por ascitis y circulación colateral en 'cabeza de medusa'', 'Pérdida de masa muscular y desnutrición proteica'],
    redFlags: ['Hemorragia por várices esofágicas exanguinante', 'Encefalopatía hepática aguda', 'Peritonitis bacteriana espontánea (PBE)', 'Síndrome hepatorrenal'],
    criteria: 'Datos clínicos, analíticos y ecográficos de cirrosis hepática con hipertensión portal en paciente con historia de consumo de alcohol > 40-60 g/día por > 10 años.',
    labTests: ['Perfil hepático: cociente TGO/TGP > 2 (típico de alcohol), bilirrubina elevada, albúmina disminuida', 'Tiempo de protrombina prolongado (INR elevado)', 'Plaquetopenia por hiperesplenismo'],
    imaging: ['Ecografía abdominal: hígado nodular de bordes festoneados, parénquima heterogéneo, esplenomegalia, ascitis y dilatación de la vena porta (> 13 mm)', 'Endoscopía digestiva alta (búsqueda de várices esofágicas)'],
    differential: ['Cirrosis por hepatitis viral crónica', 'Cirrosis esteatohepatítica metabólica (EHNA)', 'Hemocromatosis'],
    firstLine: [
      { drug: 'Propranolol o Carvedilol (Profilaxis de sangrado variceal)', dose: 'Propranolol 20-40 mg c/12h o Carvedilol 6.25-12.5 mg/d titulado para FC 55-60 lpm', route: 'VO', freq: 'c/12-24h', notes: 'Betabloqueantes no cardioselectivos que reducen la presión portal' },
      { drug: 'Espironolactona + Furosemida (Control de ascitis)', dose: 'Espironolactona 100 mg + Furosemida 40 mg en las mañanas (relación 100:40)', route: 'VO', freq: 'c/24h matutino', notes: 'Mantiene normopotasemia y reduce retención hidrosalina' }
    ],
    alternatives: [],
    nonPharm: ['ABSTINENCIA TOTAL Y ABSOLUTA DE BEBIDAS ALCOHÓLICAS (mejora la sobrevida en cualquier estadio)', 'Dieta hiperproteica (1.2 a 1.5 g/kg/d) con colación nocturna rica en carbohidratos complejos para evitar sarcopenia', 'Restricción de sodio a 2 g/día'],
    nursingCare: ['Educación enérgica y derivación a programas de rehabilitación y apoyo en salud mental para el cese del alcohol', 'Pesaje diario en ayunas y medición del perímetro abdominal en el ombligo para control de ascitis', 'Vigilancia de signos tempranos de encefalopatía hepática (inversión del ciclo sueño-vigilia, euforia/apatía, bradipsiquia)', 'Instrucción al paciente para acudir de inmediato si presenta vómitos oscuros o heces negras']
  },
  {
    number: 173,
    id: 'diag-173',
    title: 'Cirrosis post-hepatitis',
    cie10: 'K74.6',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Fibrosis hepática difusa en estadio cirrótico secundaria a la inflamación necroinflamatoria crónica por infección no tratada por virus de Hepatitis B o Hepatitis C.',
    symptoms: ['Deterioro funcional hepático progresivo e insidioso', 'Fatigabilidad fácil, debilidad y astenia crónica', 'Ascitis, edema maleolar bilateral y fácil sangrado por encías o hematomas ante traumas mínimos'],
    redFlags: ['Aparición de Carcinoma Hepatocelular (desarrollo rápido en VHB y VHC)', 'Descompensación ascítica o encefalopática'],
    criteria: 'Diagnóstico de cirrosis confirmado + serología reactiva para HBsAg o Anticuerpos anti-VHC con carga viral detectable.',
    labTests: ['Carga viral cuantitativa ADN-VHB o ARN-VHC', 'Alfafetoproteína (AFP) cada 6 meses', 'Estadificación funcional de Child-Pugh y puntuación MELD'],
    imaging: ['Ecografía abdominal superior semestral con Doppler portal para despistaje de hepatocarcinoma'],
    differential: ['Cirrosis alcohólica', 'Hepatopatía autoinmune', 'Hepatitis delta sobreagregada'],
    firstLine: [
      { drug: 'Tenofovir o Entecavir (en VHB)', dose: 'Tenofovir 300 mg/día o Entecavir 0.5 mg/día VO continuo de por vida', route: 'VO', freq: 'c/24h', notes: 'Suprime la replicación viral y reduce la progresión tumoral' },
      { drug: 'Antivirales de acción directa pan-genotípicos (en VHC)', dose: 'Sofosbuvir / Velpatasvir por 12 a 24 semanas', route: 'VO', freq: 'c/24h', notes: 'Curación virológica incluso en cirrosis compensada' }
    ],
    alternatives: [],
    nonPharm: ['Screening semestral estricto de hepatocarcinoma mediante ecografía y AFP', 'Evaluación para trasplante hepático ortotópico'],
    nursingCare: ['Monitoreo estricto del cumplimiento del antiviral oral sin omisión de tomas', 'Programación rigurosa de ecografías hepáticas cada 6 meses para tamizaje de cáncer', 'Control de vacunas (Hepatitis A, Neumococo, Influenza)', 'Consejería nutricional hiperproteica para evitar sarcopenia']
  },
  {
    number: 174,
    id: 'diag-174',
    title: 'Cirrosis biliar',
    cie10: 'K74.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Colangitis biliar primaria (CBP) con destrucción autoinmune progresiva de los conductillos biliares interlobulillares, colestasis crónica y cirrosis en mujeres de mediana edad.',
    symptoms: ['Prurito generalizado insoportable e intratable que empeora por la noche y con el calor', 'Fatiga crónica profunda desproporcionada', 'Ictericia de aparición tardía', 'Xantelasmas periorbiculares y xantomas tuberosos cutáneos'],
    redFlags: ['Osteoporosis severa por malabsorción crónica de vitamina D', 'Cirrosis descompensada con hipertensión portal'],
    criteria: 'Presencia de ≥ 2 de 3 criterios: 1. Colestasis con fosfatasa alcalina > 1.5 veces lo normal; 2. Anticuerpos antimitocondriales (AMA) positivos títulos ≥ 1:40; 3. Histología compatible.',
    labTests: ['Anticuerpos antimitocondriales (AMA subtipo M2, presentes en > 95%)', 'Fosfatasa alcalina (FA) y Gamma-glutamil transferasa (GGT) muy elevadas', 'IgM sérica marcadamente elevada', 'Densidometría ósea anual'],
    imaging: ['Ecografía abdominal (vías biliares extrahepáticas de calibre normal sin dilatación, descartando obstrucción mecánica)'],
    differential: ['Colangitis esclerosante primaria (afecta grandes conductos en varones con colitis ulcerosa)', 'Hepatitis autoinmune (síndrome de solapamiento)'],
    firstLine: [
      { drug: 'Ácido Ursodesoxicólico (AUDC / Ursodiol)', dose: '13 a 15 mg/kg/día dividido en 2 tomas con las comidas de por vida', route: 'VO', freq: 'c/12h con alimentos', notes: 'Pilar terapéutico fundamental que mejora la sobrevida y retrasa el trasplante' },
      { drug: 'Colestiramina', dose: '4 a 8 g VO antes del desayuno para el prurito', route: 'VO', freq: 'c/12-24h', notes: 'Quelante de sales biliares intraluminal; separar 4h de otros fármacos' }
    ],
    alternatives: [],
    nonPharm: ['Suplementación diaria de calcio y Vitamina D para prevenir osteomalacia y fracturas', 'Uso de cremas emolientes hidratantes para aliviar el prurito'],
    nursingCare: ['Instruir sobre la toma separada de la colestiramina (tomar otros medicamentos 1h antes o 4h después porque impide su absorción)', 'Cuidados de la piel: uñas cortas y limpias para evitar excoriaciones por rascado violento nocturno', 'Vigilancia de densitometría ósea y administración de calcio/vitamina D', 'Monitoreo de función hepática periódica']
  },
  {
    number: 175,
    id: 'diag-175',
    title: 'Encefalopatía hepática',
    cie10: 'K72.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Disfunción neuropsiquiátrica potencialmente reversible causada por acumulación de amoníaco y neurotoxinas en el cerebro debido a insuficiencia hepática o shunts portosistémicos.',
    symptoms: ['Grado I: inversión del ritmo del sueño (duerme de día, despierto de noche), euforia, apatía o irritabilidad leve', 'Grado II: letargia, desorientación témporo-espacial, conducta inapropiada y Asterixis / Flapping tremor evidente al hiperextender las muñecas', 'Grado III: somnolencia profunda pero despertable, lenguaje incomprensible y confusión marcada', 'Grado IV: coma hepático con respuesta solo a estímulos dolorosos o sin respuesta'],
    redFlags: ['Coma hepático profundo con riesgo de broncoaspiración', 'Edema cerebral en insuficiencia hepática aguda'],
    criteria: 'Clínica neuropsiquiátrica fluctuante con flapping tremor en paciente cirrótico + identificación y corrección del factor precipitante.',
    labTests: ['Amonio sérico arterial o venoso libre de torniquete (elevado)', 'Gasometría arterial (alcalosis metabólica por hipopotasemia)', 'Electrolitos séricos', 'Paracentesis diagnóstica (descarte de PBE precipitante)'],
    imaging: ['Tomografía cerebral sin contraste (descarte de hematoma subdural secundario a caídas frecuentes en cirróticos)'],
    differential: ['Hematoma subdural traumático', 'Intoxicación medicamentosa por sedantes/alcohol', 'Meningoencefalitis bacteriana', 'Hipoglucemia severa'],
    firstLine: [
      { drug: 'Lactulosa oral o por sonda nasogástrica', dose: '20 a 30 mL cada 6-8 horas VO titulada para lograr 2 a 3 deposiciones blandas pastosas al día', route: 'VO/SNG/Enema', freq: 'c/6-8h', notes: 'Disacárido no absorbible que acidifica el colon y transforma el NH3 difusible en NH4+ no absorbible' },
      { drug: 'Rifaximina', dose: '550 mg cada 12 horas VO por periodos prolongados', route: 'VO', freq: 'c/12h', notes: 'Antibiótico intraluminal no absorbible que reduce bacterias colónicas productoras de amonio' },
      { drug: 'Enemas de Lactulosa', dose: '300 mL de lactulosa en 700 mL de agua tibia cada 8-12 horas retenido 30 min', route: 'Rectal', freq: 'c/8-12h', notes: 'En encefalopatía severa grados III-IV con coma o íleo' }
    ],
    alternatives: [],
    nonPharm: ['IDENTIFICACIÓN Y TRATAMIENTO URGENTE DEL FACTOR PRECIPITANTE (constipación, infección/PBE, hemorragia digestiva, deshidratación, hipopotasemia por diuréticos)', 'NO RESTRINGIR PROTEÍNAS en la dieta (la restricción proteica agrava la sarcopenia y empeora el pronóstico)'],
    nursingCare: ['Monitoreo horario del estado de conciencia y grado de West Haven', 'Titulación exacta de la dosis de lactulosa para asegurar estrictamente 2 a 3 deposiciones blandas al día (evitar diarrea profusa que cause deshidratación)', 'Protección de vía aérea e intubación orotraqueal en coma hepático Grado IV', 'PROHIBICIÓN ESTRICTA de administrar benzodiacepinas o sedantes']
  },
  {
    number: 176,
    id: 'diag-176',
    title: 'Ascitis refractaria',
    cie10: 'R18.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Ascitis en cirrosis avanzada que no responde a restricción estricta de sodio ni a dosis máximas de diuréticos (espironolactona 400 mg + furosemida 160 mg/día) o que reaparece rápidamente tras paracentesis evacuadora.',
    symptoms: ['Distensión abdominal a tensión de gran volumen con piel brillante y venas colaterales visibles', 'Disnea restrictiva por elevación del diafragma', 'Hernias umbilicales o inguinales por hiperpresión intraabdominal con riesgo de estrangulación', 'Edemas en miembros inferiores e ingle'],
    redFlags: ['Rotura de hernia umbilical ascítica', 'Peritonitis bacteriana espontánea (fiebre, dolor abdominal, encefalopatía)', 'Insuficiencia renal sobreagregada'],
    criteria: 'Falta de respuesta tras al menos 1 semana de diuréticos a dosis tope o aparición de complicaciones graves inducidas por diuréticos (hiponatremia severa, hiperpotasemia, encefalopatía o insuficiencia renal).',
    labTests: ['Gradiente de albúmina suero-ascitis (GASA ≥ 1.1 g/dL confirma hipertensión portal)', 'Recuento de PMN en líquido ascítico (< 250/mm3 descarta PBE)', 'Creatinina y electrolitos séricos', 'Sodio urinario en 24h (< 30 mEq/día indica avidez extrema de sodio)'],
    imaging: ['Ecografía doppler esplenoportal para descartar trombosis de la vena porta'],
    differential: ['Carcinomatosis peritoneal (GASA < 1.1)', 'Tuberculosis peritoneal', 'Síndrome de Budd-Chiari'],
    firstLine: [
      { drug: 'Albúmina humana al 20%', dose: '8 g por cada litro de líquido ascítico extraído cuando la paracentesis es > 5 litros (ej. 40g para 5L, 64g para 8L)', route: 'EV en infusión continua post-paracentesis', freq: 'Por procedimiento', notes: 'Previene la disfunción circulatoria post-paracentesis (PICD), shock hipovolémico y falla renal' }
    ],
    alternatives: [
      { drug: 'Midodrina (agonista alfa-1 adrenérgico)', dose: '7.5 a 12.5 mg cada 8 horas VO para mejorar perfusión renal', route: 'VO', freq: 'c/8h', notes: 'En casos selectos con hipotensión refractaria' }
    ],
    nonPharm: ['Paracentesis evacuadora total reglada de gran volumen bajo estricta asepsia', 'Restricción moderada de sodio (2 g de sal o 80-90 mEq/día)', 'Evaluación para shunt portosistémico intrahepático transyugular (TIPS) o trasplante hepático urgente'],
    nursingCare: ['Medición diaria del perímetro abdominal a nivel umbilical y peso en ayunas en la misma balanza', 'Asistencia en paracentesis evacuadora respetando campo estéril', 'Monitoreo estricto de presión arterial y frecuencia cardíaca cada 15 min durante y tras la paracentesis', 'Administración de albúmina endovenosa inmediata y estricta en ritmo pautado']
  },
  {
    number: 177,
    id: 'diag-177',
    title: 'Síndrome hepatorrenal',
    cie10: 'K76.7',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Falla renal funcional aguda (SHR-IRA) o progresiva en pacientes con hepatopatía crónica avanzada, cirrosis o insuficiencia hepática aguda, causada por vasoconstricción renal extrema secundaria a vasodilatación esplácnica masiva.',
    symptoms: ['Oliguria progresiva o anuria repentina', 'Ascitis a tensión no respondedora', 'Ictericia profunda y estigmas hepáticos avanzados', 'Hipotensión arterial con taquicardia refleja y colapso circulatorio'],
    redFlags: ['Uremia severa, sobrecarga de volumen refractaria y paro cardiorrespiratorio'],
    criteria: 'Cirrosis con ascitis + aumento de creatinina sérica ≥ 0.3 mg/dL en 48h o ≥ 50% del basal + AUSENCIA de mejoría tras suspensión de diuréticos y expansión de volumen con albúmina por 48h + ausencia de shock séptico, nefrotóxicos o daño renal intrínseco (sedimento urinario normal sin proteinuria ni hematuria).',
    labTests: ['Creatinina sérica y nitrógeno ureico (BUN) diarios', 'Sodio urinario (< 10-15 mEq/L indicando vasoconstricción funcional intensa)', 'Sedimento urinario (limpio, sin cilindros granulosos pardos típicos de NTA)'],
    imaging: ['Ecografía renal y de vías urinarias (riñones de tamaño normal sin hidronefrosis ni patología médica intrínseca)'],
    differential: ['Necrosis tubular aguda (NTA por shock o sepsis previa)', 'Nefrotoxicidad por aminoglucósidos o AINEs', 'Glomerulonefritis membranoproliferativa por VHC'],
    firstLine: [
      { drug: 'Terlipresina', dose: '1 a 2 mg cada 4 a 6 horas en bolo EV lento (o infusión continua 2-4 mg/día)', route: 'EV', freq: 'c/4-6h', notes: 'Vasoconstrictor esplácnico potente de elección para revertir la vasodilatación esplácnica' },
      { drug: 'Albúmina humana al 20%', dose: '1 g/kg de peso el día 1 (máx 100g), luego 20 a 40 g/día en infusión EV', route: 'EV', freq: 'c/24h', notes: 'Mantiene volumen arterial efectivo y transporte oncótico' }
    ],
    alternatives: [
      { drug: 'Noradrenalina + Albúmina', dose: '0.5 a 3 mg/h en infusión continua EV guiada por TAM para elevarla ≥ 10-15 mmHg', route: 'EV en UCI', freq: 'Continuo', notes: 'Alternativa si no hay terlipresina' }
    ],
    nonPharm: ['Suspensión INMEDIATA de todos los diuréticos, AINEs y fármacos nefrotóxicos', 'Cateterismo venoso central y monitoreo hemodinámico estrecho', 'Terapia de reemplazo renal continuo si falla el tratamiento médico mientras se espera trasplante hepático'],
    nursingCare: ['Control de diuresis horaria con sonda Foley estricta y balance hídrico acumulado cada 6 horas', 'Monitoreo de presión arterial invasiva o continua durante la infusión de terlipresina/noradrenalina', 'Vigilancia de signos de isquemia periférica (dedos, abdomen, coronaria) por efecto de terlipresina', 'Preparación prequirúrgica prioritaria para trasplante hepático']
  },
  {
    number: 178,
    id: 'diag-178',
    title: 'Hernia inguinal',
    cie10: 'K40.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Protrusión de contenido intraabdominal (epiplón o asas intestinales) a través del conducto inguinal, pudiendo ser indirecta (a través del anillo inguinal profundo) o directa (a través de la pared posterior en el triángulo de Hesselbach).',
    symptoms: ['Tumoración reducible en la región inguinal que aumenta de tamaño al toser, pujar o ponerse de pie (maniobra de Valsalva)', 'Sensación de pesadez, molestia o dolor sordo que irradia a la ingle o escroto tras esfuerzo físico'],
    redFlags: ['Hernia incarcerada (irreductible con maniobras manuales)', 'Hernia estrangulada (dolor agudo lancinante, eritema/violáceo local, fiebre, náuseas, vómitos y shock - EMERGENCIA QUIRÚRGICA)'],
    criteria: 'Palpación digital del trayecto inguinal con el paciente de pie y pidiéndole toser (signo del impulso expansivo).',
    labTests: ['Hemograma completo, coagulograma y riesgo quirúrgico preoperatorio', 'Lactato sérico elevado en caso de sospecha de estrangulación'],
    imaging: ['Ecografía inguinal en casos dudosos o dolor inguinal sin masa palpable evidente', 'TAC abdominopélvica en hernias complicadas o recidivadas'],
    differential: ['Hidrocele', 'Varicocele', 'Adenopatía inguinal', 'Lipoma del cordón espermático'],
    firstLine: [
      { drug: 'Cirugía electiva: Hernioplastia inguinal con malla protésica de polipropileno (Técnica de Lichtenstein o abordaje laparoscópico TAPP/TEP)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Tratamiento definitivo para evitar incarceración futura' },
      { drug: 'Cefazolina profiláctica', dose: '1 a 2 g EV monodosis 30 min antes de la incisión de piel', route: 'EV', freq: 'Dosis única', notes: 'Profilaxis antibiótica perioperatoria por colocación de malla' }
    ],
    alternatives: [
      { drug: 'Herniorrafía con técnica tisular pura (Shouldice o Bassini)', dose: 'Procedimiento de reparación sin malla', route: 'Quirúrgica', freq: 'Única', notes: 'De elección en campo infectado o estrangulado con resección intestinal' }
    ],
    nonPharm: ['Evitar esfuerzos pesados, tratar tos crónica y corregir estreñimiento o hipertrofia prostática antes de la cirugía'],
    nursingCare: ['Evaluación y marcación del sitio quirúrgico según protocolo de cirugía segura', 'Vigilancia de signos de estrangulación (dolor intenso persistente y cambio de coloración)', 'Cuidados postoperatorios de herida quirúrgica: vigilar formación de hematomas o seromas escrotales', 'Uso de suspensorio escrotal en el postoperatorio precoz']
  },
  {
    number: 179,
    id: 'diag-179',
    title: 'Hernia crural',
    cie10: 'K41.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Protrusión de un saco peritoneal a través del canal femoral o anillo crural, por debajo del ligamento inguinal y medial a la vena femoral. Predomina ampliamente en mujeres multíparas y tiene altísimo riesgo de estrangulación precoz.',
    symptoms: ['Pequeña tumoración redondeada por debajo de la línea del pliegue inguinal (por debajo del ligamento de Poupart)', 'Frecuentemente asintomática hasta que se presenta bruscamente como obstrucción intestinal o estrangulación'],
    redFlags: ['Estrangulación del asa con necrosis isquémica rápida (anillo crural fibroso e inextensible)'],
    criteria: 'Masa palpable debajo del ligamento inguinal, medial a la arteria y vena femoral.',
    labTests: ['Riesgo quirúrgico completo', 'Gases arteriales y lactato si hay abdomen agudo obstructivo'],
    imaging: ['Ecografía inguinal-crural', 'Tomografía computarizada abdominal'],
    differential: ['Hernia inguinal indirecta', 'Adenopatía de Cloquet inflamatoria', 'Aneurisma femoral', 'Ectasia de vena safena'],
    firstLine: [
      { drug: 'Hernioplastia crural electiva urgente con cono/tapón de malla (técnica de Rutkow-Robbins o McVay)', dose: 'Reparación quirúrgica inmediata', route: 'Quirúrgica', freq: 'Única', notes: 'Toda hernia crural diagnosticada debe operarse con prontitud dado el 40% de riesgo de estrangulación' }
    ],
    alternatives: [],
    nonPharm: ['No intentar reducción forzada si hay dolor intenso o signos inflamatorios cutáneos'],
    nursingCare: ['Identificación rápida del sitio anatómico por debajo del pliegue de la ingle', 'Preparación inmediata para quirófano ante cualquier sospecha de atascamiento', 'Control del dolor postoperatorio y deambulación temprana asistida', 'Monitoreo de pulsos periféricos distales de la extremidad operada']
  },
  {
    number: 180,
    id: 'diag-180',
    title: 'Hernia umbilical',
    cie10: 'K42.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Defecto en el cierre del anillo umbilical por el que protruye epiplón u órganos abdominales. Muy común en lactantes (cierre espontáneo frecuente) y en adultos con obesidad, multiparidad o ascitis cirrótica.',
    symptoms: ['Bulto o protuberancia visible y palpable en el ombligo que aumenta con el llanto, tos o esfuerzo', 'Dolor localizado o tirantez umbilical'],
    redFlags: ['Cambio a color rojo o violáceo, induración no reducible y dolor intenso súbito', 'Riesgo de perforación de piel en cirróticos con ascitis a tensión'],
    criteria: 'Inspección y palpación directa del defecto en el anillo umbilical con maniobras de Valsalva.',
    labTests: ['Riesgo quirúrgico habitual'],
    imaging: ['Ecografía de pared abdominal si el anillo es difícil de delimitar en pacientes con obesidad'],
    differential: ['Onfalocele y gastrosquisis en recién nacidos', 'Metástasis umbilical (Nódulo de la Hermana María José)', 'Hematoma del recto anterior'],
    firstLine: [
      { drug: 'Hernioplastia umbilical con malla de polipropileno (en defectos > 1-2 cm) o herniorrafía tisular simple (defecto < 1 cm)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'En niños < 2-4 años suele observarse conducta expectante salvo defectos gigantes > 2 cm' }
    ],
    alternatives: [],
    nonPharm: ['En niños: desaconsejar enfáticamente fajas, botones o monedas sobre el ombligo (aumentan riesgo de infección e isquemia cutánea)'],
    nursingCare: ['Orientación a los padres sobre el curso natural benigno en lactantes y signos de alarma', 'En adultos postoperados: vigilar que no realicen esfuerzos que sobrepasen 5 kg durante 6 semanas', 'Vigilancia de signos de infección en el ombligo o dehiscencia de herida']
  },
  {
    number: 181,
    id: 'diag-181',
    title: 'Hernia incisional',
    cie10: 'K43.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Eventración o fallo de la cicatrización músculo-aponeurótica sobre una laparotomía previa, lo que permite la protrusión del contenido intraabdominal a través de la cicatriz.',
    symptoms: ['Deformidad o masa palpable a lo largo de una cicatriz quirúrgica abdominal', 'Aumento de tamaño al esfuerzo y reducción parcial o total en decúbito supino', 'Pesadez y dolor con la actividad física prolongada'],
    redFlags: ['Incarceración con obstrucción intestinal mecánica', 'Necrosis por compromiso vascular y fístula enterocutánea'],
    criteria: 'Antecedente quirúrgico previo + defecto aponeurótico palpable en el trayecto de la cicatriz.',
    labTests: ['Preoperatorios reglados y riesgo quirúrgico'],
    imaging: ['Tomografía axial computarizada abdominopélvica (gold standard para medir ancho del defecto y pérdida de derecho a domicilio)'],
    differential: ['Seroma o hematoma de pared abdominal', 'Granuloma por cuerpo extraño / sutura'],
    firstLine: [
      { drug: 'Eventroplastia quirúrgica abierta (Rives-Stoppa sublay retro-muscular) o laparoscópica (IPOM) con malla protésica', dose: 'Reparación de pared abdominal', route: 'Quirúrgica', freq: 'Única', notes: 'La colocación de malla amplia con solapamiento ≥ 5 cm reduce marcadamente la recidiva' }
    ],
    alternatives: [],
    nonPharm: ['Control de factores de riesgo: reducción de peso previa a cirugía, cese de tabaquismo y optimización nutricional'],
    nursingCare: ['Uso de faja elástica tubular abdominal en el postoperatorio inmediato', 'Cuidado de drenajes de pared (Jackson-Pratt/Hemovac): control estricto de débito diario y características', 'Prevención de atelectasias mediante espirometría incentivada sin generar esfuerzo excesivo abdominal', 'Instrucción sobre movilización en bloque al levantarse de la cama']
  },
  {
    number: 182,
    id: 'diag-182',
    title: 'Obesidad grado I',
    cie10: 'E66.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad crónica, neuroconductual y metabólica caracterizada por un acúmulo anormal o excesivo de grasa corporal perjudicial para la salud, definida por un Índice de Masa Corporal (IMC) entre 30.0 y 34.9 kg/m2.',
    symptoms: ['Disnea leve a moderada de medianos esfuerzos', 'Fatiga física precoz', 'Dolor articular en rodillas y columna lumbar', 'Ronquidos nocturnos'],
    redFlags: ['Aparición de intolerancia a la glucosa, hipertensión arterial y esteatosis hepática'],
    criteria: 'IMC: Peso (kg) / Altura al cuadrado (m2) entre 30.0 y 34.9 kg/m2 + perímetro abdominal aumentado (≥ 88 cm en mujeres, ≥ 102 cm en varones).',
    labTests: ['Glucosa en ayunas y HbA1c', 'Perfil lipídico completo (colesterol total, HDL, LDL, triglicéridos)', 'Pruebas de función hepática (TGO, TGP)', 'TSH y creatinina'],
    imaging: ['Ecografía abdominal para descartar esteatosis hepática'],
    differential: ['Edema por insuficiencia cardíaca o síndrome nefrótico', 'Hipotiroidismo severo', 'Síndrome de Cushing'],
    firstLine: [
      { drug: 'Intervención integral en estilo de vida: Déficit calórico de 500-750 kcal/día + Actividad física aeróbica y de fuerza ≥ 150 min/semana', dose: 'Prescripción nutricional y deportiva personalizada', route: 'Estilo de vida', freq: 'Diario', notes: 'Meta: pérdida de 5% a 10% del peso corporal en 6 meses con mejoría cardiometabólica' }
    ],
    alternatives: [
      { drug: 'Orlistat', dose: '120 mg cada 8 horas VO con las comidas grasas principales', route: 'VO con comidas', freq: 'c/8h', notes: 'Inhibe la lipasa gástrica y pancreática; efectos secundarios: esteatorrea y urgencia fecal' }
    ],
    nonPharm: ['Terapia cognitivo-conductual', 'Plan nutricional mediterráneo o basado en alimentos no procesados'],
    nursingCare: ['Medición antropométrica precisa: peso, talla, cálculo de IMC y circunferencia de cintura estandarizada', 'Educación para la salud sobre hábitos alimentarios y lectura de octógonos nutricionales', 'Monitoreo de presión arterial en cada control', 'Refuerzo motivacional y prevención de recaídas']
  },
  {
    number: 183,
    id: 'diag-183',
    title: 'Obesidad grado II',
    cie10: 'E66.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Forma severa de obesidad definida por un IMC entre 35.0 y 39.9 kg/m2, con elevado riesgo de morbilidad cardiovascular, osteoarticular, metabólica y neoplásica.',
    symptoms: ['Disnea de pequeños a medianos esfuerzos', 'Apnea del sueño con hipersomnolencia diurna', 'Gonartrosis sintomática bilateral y lumbalgia crónica', 'Intertrigo en pliegues cutáneos'],
    redFlags: ['Hipertensión arterial resistente, diabetes mellitus tipo 2 descontrolada o disnea paroxística nocturna'],
    criteria: 'IMC entre 35.0 y 39.9 kg/m2.',
    labTests: ['Perfil metabólico ampliado (glucosa, HbA1c, perfil lipídico, uricemia, transaminasas, microalbuminuria)', 'Polisomnografía nocturna en sospecha de SAHOS'],
    imaging: ['Ecocardiograma transtorácico (hipertrofia ventricular izquierda)'],
    differential: ['Obesidad secundaria a trastornos endocrinológicos'],
    firstLine: [
      { drug: 'Plan hipocalórico estructurado + Fármacos agonistas del receptor GLP-1 (Liraglutida o Semaglutida)', dose: 'Liraglutida 0.6 mg SC diario escalando semanalmente hasta 3.0 mg SC diario; o Semaglutida 0.25 mg SC semanal escalando a 2.4 mg SC semanal', route: 'SC', freq: 'Diario o Semanal', notes: 'Eficacia muy alta para pérdida de peso y protección cardiometabólica' }
    ],
    alternatives: [
      { drug: 'Evaluación de Cirugía Bariátrica (Manga gástrica o Bypass gástrico en Y de Roux)', dose: 'Procedimiento quirúrgico bariátrico', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada formalmente si coexiste al menos una comorbilidad mayor (DM2, HTA, SAHOS)' }
    ],
    nonPharm: ['Abordaje multidisciplinario por endocrinología, nutrición, psicología y medicina física'],
    nursingCare: ['Cuidado de pliegues cutáneos: higiene y secado exhaustivo para prevenir infecciones micóticas (candidiasis intertriginosa)', 'Evaluación del riesgo cardiovascular global y monitoreo de glucemias', 'Apoyo psicosocial para erradicar el estigma y fomentar la adherencia terapéutica', 'Educación sobre técnica aséptica de autoaplicación subcutánea de análogos GLP-1']
  },
  {
    number: 184,
    id: 'diag-184',
    title: 'Obesidad mórbida',
    cie10: 'E66.01',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad grave y potencialmente letal definida por un IMC ≥ 40.0 kg/m2 (Obesidad grado III) o ≥ 50 kg/m2 (Superobesidad), asociada a reducción drástica de la expectativa de vida.',
    symptoms: ['Incapacidad para realizar actividades de la vida diaria e inmovilidad relativa', 'Insuficiencia respiratoria por hipoventilación (Síndrome de Pickwick)', 'Edema venoso masivo en miembros inferiores', 'Reflujo gastroesofágico severo y depresión mayor'],
    redFlags: ['Hipertensión pulmonar con cor pulmonale secundario a hipoventilación', 'Tromboembolismo pulmonar'],
    criteria: 'IMC ≥ 40.0 kg/m2.',
    labTests: ['Gasometría arterial (hipercapnia y acidosis respiratoria crónica en hipoventilación)', 'Pruebas de coagulación, función hepática, renal y panel nutricional completo'],
    imaging: ['Polisomnografía', 'Ecocardiograma doppler', 'Espirometría'],
    differential: ['Falla cardíaca terminal con anasarca'],
    firstLine: [
      { drug: 'Cirugía Bariátrica y Metabólica: Manga gástrica laparoscópica o Bypass gástrico en Y de Roux', dose: 'Tratamiento quirúrgico de elección', route: 'Quirúrgica', freq: 'Única', notes: 'Eficacia demostrada para remisión de comorbilidades y reducción de mortalidad global' }
    ],
    alternatives: [
      { drug: 'Tirzepatida (doble agonista GIP/GLP-1)', dose: '2.5 mg SC semanal escalando cada 4 semanas hasta 10-15 mg SC semanal', route: 'SC', freq: 'Semanal', notes: 'Pérdidas de peso cercanas al 20-25%' }
    ],
    nonPharm: ['Soporte ventilatorio no invasivo con CPAP/BiPAP nocturno', 'Rehabilitación física de bajo impacto adaptada'],
    nursingCare: ['Uso de equipamiento hospitalario bariátrico adaptado (camas de alta resistencia, manguitos de presión arterial extra-grandes)', 'Prevención rigurosa de trombosis venosa profunda: medias de compresión graduada, compresión neumática intermitente y heparina de bajo peso molecular ajustada al peso', 'Movilización en bloque y cambios posturales con 2 o más operadores para evitar lesiones por presión', 'Manejo riguroso de la vía aérea difícil']
  },
  {
    number: 185,
    id: 'diag-185',
    title: 'Sobrepeso metabólico',
    cie10: 'E66.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Condición en la que el IMC se encuentra entre 25.0 y 29.9 kg/m2, pero asociada a adiposidad visceral aumentada y componentes del Síndrome Metabólico (resistencia a la insulina, dislipidemia aterogénica e hipertensión).',
    symptoms: ['Habitualmente asintomático', 'Fatiga posprandial', 'Presencia de acantosis nigricans en cuello y axilas', 'Aumento del perímetro de la cintura'],
    redFlags: ['Conversión rápida a diabetes tipo 2 manifiesta y eventos coronarios precoces'],
    criteria: 'IMC 25-29.9 kg/m2 + al menos 2 de los siguientes: cintura > 90cm (varones) o > 80cm (mujeres); TG ≥ 150 mg/dL; HDL < 40/50 mg/dL; PA ≥ 130/85 mmHg; glucosa ayuno ≥ 100 mg/dL.',
    labTests: ['Glucemia basal e insulina sérica para cálculo de HOMA-IR', 'Perfil lipídico', 'Hemoglobina glicosilada (HbA1c)'],
    imaging: ['Ecografía abdominal'],
    differential: ['Atletas con masa muscular elevada pero porcentaje graso bajo (falso sobrepeso)'],
    firstLine: [
      { drug: 'Cambios intensivos del estilo de vida: Dieta hipocalórica balanceada baja en azúcares refinados + Ejercicio aeróbico y de fuerza 150-300 min/semana', dose: 'Reducción del 5-7% del peso inicial', route: 'Estilo de vida', freq: 'Permanente', notes: 'Revierte la resistencia a la insulina y previene la progresión a diabetes' }
    ],
    alternatives: [
      { drug: 'Metformina', dose: '500 a 850 mg cada 12-24 horas VO con las comidas', route: 'VO con comidas', freq: 'c/12-24h', notes: 'Si existe prediabetes (glucosa alterada en ayunas o intolerancia a la glucosa)' }
    ],
    nonPharm: ['Eliminación total de bebidas azucaradas, gaseosas y alimentos ultraprocesados'],
    nursingCare: ['Medición rigurosa de perímetro abdominal a nivel de la cresta ilíaca', 'Tamizaje de presión arterial con técnica correcta (brazo a la altura del corazón, reposo de 5 min)', 'Educación para la salud sobre alimentación saludable y actividad física diaria', 'Consejería sobre control del estrés y sueño reparador (7-8 horas)']
  },
  {
    number: 186,
    id: 'diag-186',
    title: 'Desnutrición crónica',
    cie10: 'E44.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno nutricional de larga data caracterizado por retraso en el crecimiento lineal (baja talla para la edad: T/E < -2 DE) en niños menores de 5 años, secundario a ingesta insuficiente continuada de micronutrientes y nutrientes, e infecciones a repetición.',
    symptoms: ['Talla significativamente inferior a la esperada para la edad cronológica', 'Retardo en el desarrollo psicomotor, cognitivo y del lenguaje', 'Piel seca, palidez cutánea y cabello ralo o quebradizo', 'Infecciones respiratorias y gastrointestinales frecuentes'],
    redFlags: ['Detención completa del crecimiento, infección respiratoria aguda grave o deshidratación'],
    criteria: 'Puntaje Z de Talla para la Edad (T/E) < -2 Desviaciones Estándar (OMS) en las curvas de crecimiento CRED.',
    labTests: ['Hemograma completo (descarte de anemia ferropénica concomitante)', 'Examen parasitológico seriado de heces', 'Dosaje de ferritina sérica y proteína C reactiva'],
    imaging: ['Edad ósea mediante radiografía de carpo en casos seleccionados'],
    differential: ['Talla baja familiar genética', 'Retraso constitucional del crecimiento y la pubertad', 'Deficiencia de hormona del crecimiento', 'Hipotiroidismo congénito'],
    firstLine: [
      { drug: 'Alimentación complementaria rica en alimentos de origen animal (sangrecita, bazo, hígado, pescado, huevo) + Micronutrientes en polvo (Chispitas)', dose: '1 sobre diario de micronutrientes (hierro, zinc, vit A, vit C, ácido fólico) por 6 meses consecutivos a partir de los 6 meses de edad', route: 'VO mezclado con papilla espesa', freq: 'c/24h', notes: 'Norma Técnica Nacional MINSA para la prevención y control de la desnutrición crónica infantil' }
    ],
    alternatives: [
      { drug: 'Zinc en jarabe', dose: '10 a 20 mg/día VO durante y tras episodios diarreicos', route: 'VO', freq: 'c/24h x 14 días', notes: 'Regenera mucosa intestinal y estimula el apetito y crecimiento' }
    ],
    nonPharm: ['Lactancia materna exclusiva durante los primeros 6 meses', 'Consejería nutricional demostrativa con preparación de platos nutritivos locales', 'Higiene de manos y consumo de agua segura hervida o clorada'],
    nursingCare: ['Monitoreo riguroso en el control CRED: medición de longitud/talla con infantómetro/tallímetro calibrado', 'Graficación inmediata en las curvas OMS de T/E y P/E para detección oportuna de aplanamiento de curva', 'Sesiones demostrativas de preparación de alimentos espesos y ricos en hierro para la madre', 'Visita domiciliaria para verificar el consumo efectivo de los micronutrientes y adherencia al CRED']
  },
  {
    number: 187,
    id: 'diag-187',
    title: 'Desnutrición aguda',
    cie10: 'E43',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Depleción nutricional rápida y severa caracterizada por pérdida aguda de peso o presencia de edema bilateral (Kwashiorkor o Marasmo), definida por Puntaje Z de Peso para la Talla (P/T) < -2 DE (moderada) o < -3 DE (severa), con alto riesgo de mortalidad inminente.',
    symptoms: ['Emaciación visible grave: pérdida de masa muscular y grasa subcutánea, aspecto de anciano (Marasmo)', 'O edema blando bilateral que inicia en pies y piernas con signo de fóvea, apatía extrema, hepatomegalia y dermatitis descamativa en piel (Kwashiorkor)', 'Hipotermia, bradicardia y extremidades frías'],
    redFlags: ['Hipotermia (< 35.5 °C), hipoglucemia (< 54 mg/dL), shock séptico o signos de insuficiencia cardíaca por sobrecarga de líquidos'],
    criteria: 'Puntaje Z P/T < -3 DE, o circunferencia braquial media (MUAC) < 115 mm en niños de 6 a 59 meses, o presencia de edema nutricional bilateral simétrico.',
    labTests: ['Glucemia capilar urgente', 'Hemograma y hemocultivo (la sepsis puede cursar sin fiebre)', 'Electrolitos séricos (hipopotasemia, hipomagnesemia frecuentes)', 'Urocultivo'],
    imaging: ['Radiografía de tórax portátil (descarte de neumonía silenciosa)'],
    differential: ['Síndrome nefrótico (edema sin desnutrición marasmática)', 'Cardiopatía congénita', 'Insuficiencia hepática'],
    firstLine: [
      { drug: 'Tratamiento protocolizado OMS en 10 pasos: Fase de estabilización con Fórmula F-75', dose: '130 mL/kg/día dividido en tomas cada 2 a 3 horas día y noche', route: 'VO o sonda nasogástrica', freq: 'c/2-3h', notes: 'Fórmula láctea de baja osmolaridad y bajo sodio diseñada para estabilizar sin sobrecargar el corazón y riñón' },
      { drug: 'Ampicilina + Gentamicina (o Amoxicilina oral en no complicados)', dose: 'Ampicilina 50 mg/kg/dosis EV c/6h + Gentamicina 7.5 mg/kg/día EV c/24h por 5-7 días', route: 'EV', freq: 'Reglado', notes: 'Profilaxis antibiótica obligatoria porque todos los niños con desnutrición severa tienen bacteriuria y traslocación bacteriana' }
    ],
    alternatives: [
      { drug: 'Fórmula F-100 o Alimento Terapéutico Listo para Usar (ATLU / Plumpy Nut)', dose: 'Fase de rehabilitación nutricional tras recuperar el apetito y resolver edemas', route: 'VO', freq: 'c/4h', notes: 'Para ganancia rápida de peso (> 10 g/kg/día)' }
    ],
    nonPharm: ['PREVENCIÓN ESTRICTA DE HIPOTERMIA (mantener al niño abrigado en contacto piel a piel o cuna con calefacción)', 'Tratamiento de la deshidratación EXCLUSIVAMENTE con ReSoMal (sales especiales de rehidratación para desnutridos graves)'],
    nursingCare: ['NUNCA usar sueros endovenosos estándar para deshidratación a menos que haya shock franco (riesgo mortal de sobrecarga hídrica e insuficiencia cardíaca aguda)', 'Monitoreo de temperatura corporal y prevención activa del enfriamiento', 'Control estricto de glucosa capilar cada 2 horas durante la estabilización', 'Alimentación lenta por sonda nasogástrica fraccionada en pequeñas cantidades sin interrupción nocturna']
  },
  {
    number: 188,
    id: 'diag-188',
    title: 'Anemia ferropénica',
    cie10: 'D50.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Disminución de la concentración de hemoglobina provocada por el agotamiento de las reservas corporales de hierro necesarias para la eritropoyesis; constituye la causa más común de anemia en el Perú, afectando principalmente a niños y gestantes.',
    symptoms: ['Astenia, fatiga fácil, somnolencia diurna y mareos', 'Palidez cutáneo-mucosa marcada (palmas de manos, lechos ungueales y conjuntiva bulbar)', 'Pica (deseo compulsivo de comer tierra, hielo o almidón)', 'Uñas quebradizas, coiloniquia (uñas en cuchara) y caída del cabello', 'Glositis atrófica y queilitis comisural angular'],
    redFlags: ['Insuficiencia cardíaca de gasto elevado (taquicardia extrema, disnea de reposo, soplos funcionales) o angina en coronariópatas'],
    criteria: 'Hemoglobina < 11.0 g/dL en niños < 5 años y gestantes (< 12 g/dL en mujeres no gestantes, < 13 g/dL en varones) con perfil de hierro confirmatorio (ferritina sérica baja).',
    labTests: ['Hemograma completo con índices eritrocitarios (microcitosis VCM < 80 fL e hipocromía HCM < 27 pg)', 'Ferritina sérica (< 15-30 ng/mL confirma deficiencia absoluta de reservas)', 'Hierro sérico bajo y Capacidad Total de Fijación del Hierro (TIBC) elevada con saturación de transferrina < 15-20%'],
    imaging: ['Endoscopía alta y colonoscopía en varones y mujeres posmenopáusicas para descartar sangrado digestivo oculto'],
    differential: ['Talasemia minor (microcitosis marcada con ferritina normal/alta)', 'Anemia de inflamación crónica', 'Anemia sideroblástica'],
    firstLine: [
      { drug: 'Sulfato Ferroso o Complejo Polimaltosado Férrico oral', dose: 'Niños: 3 mg/kg/día de hierro elemental VO por 6 meses consecutivos; Adultos/Gestantes: 60 a 120 mg de hierro elemental VO diario en ayunas con jugo de cítricos (vitamina C)', route: 'VO', freq: 'c/24h en ayunas', notes: 'Continuar 3 meses después de normalizar la hemoglobina para repletar los depósitos de ferritina' }
    ],
    alternatives: [
      { drug: 'Hierro sacarosa o Carboximaltosa férrica EV', dose: 'Calculado según fórmula de Ganzoni o dosis fija 1000 mg EV en infusión de 15-30 min', route: 'EV', freq: 'Semanal o dosis única', notes: 'De elección en intolerancia gástrica severa, enfermedad inflamatoria intestinal o anemia severa en 3er trimestre del embarazo' }
    ],
    nonPharm: ['Consumo diario de alimentos ricos en hierro hemo de alta absorción (sangrecita de pollo, bazo de res, hígado, bofe, carnes rojas y pescado oscuro)', 'Evitar consumir el suplemento junto con té, café, leche o antiácidos (inhiben la absorción de hierro no hemo)'],
    nursingCare: ['Orientación sobre tolerancia: informar que las heces se teñirán de color negro oscuro (normal) y prevenir constipación con líquidos y fibra', 'Enfermería CRED: dosaje de hemoglobina capilar a los 6 meses de edad con hemoglobinómetro portátil (HemoCue)', 'Enfermería prenatal: inicio oportuno de suplementación preventiva con hierro y ácido fólico a partir de la semana 14 de gestación', 'Monitoreo de tolerancia en administración de hierro parenteral EV y vigilancia de posibles reacciones alérgicas']
  },
  {
    number: 189,
    id: 'diag-189',
    title: 'Anemia megaloblástica',
    cie10: 'D51.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Anemia macrocítica caracterizada por la alteración de la síntesis del ADN celular en los precursores hematopoyéticos de la médula ósea, debida casi exclusivamente a deficiencia de Vitamina B12 (cobalamina) o Vitamina B9 (ácido fólico).',
    symptoms: ['Síndrome anémico: fatiga, palidez con ligero tinte ictérico subictérico ("palidez flavínica o color limón")', 'Glositis de Hunter: lengua depapilada, lisa, roja y sumamente dolorosa', 'Síntomas neurológicos específicos de déficit de B12: parestesias simétricas en guante y calcetín, ataxia sensitiva por degeneración combinada subaguda medular y alteración de la memoria'],
    redFlags: ['Compromiso neurológico severo irreversible (degeneración subaguda de cordones posteriores medulares)', 'Pancitopenia grave en sangre periférica'],
    criteria: 'Hemograma con anemia macrocítica (VCM > 100-110 fL) y neutrófilos hipersegmentados (pleocariocitos con ≥ 6 lóbulos) + confirmación de niveles séricos bajos de cobalamina (< 200 pg/mL) o folatos (< 3-4 ng/mL).',
    labTests: ['Nivel de Vitamina B12 y Ácido Fólico sérico', 'Ácido metilmalónico y homocisteína sérica (ambos elevados en déficit de B12; solo homocisteína elevada en déficit de folato)', 'Anticuerpos anti-factor intrínseco y anti-células parietales (en anemia perniciosa)', 'Bilirrubina indirecta y LDH aumentadas por eritropoyesis ineficaz / hemólisis intramedular'],
    imaging: ['Endoscopía digestiva alta para descartar gastritis atrófica autoinmune (anemia perniciosa)'],
    differential: ['Síndromes mielodisplásicos', 'Anemia hemolítica con reticulocitosis', 'Efecto secundario a hidroxiurea, metotrexato o zidovudina'],
    firstLine: [
      { drug: 'Cianocobalamina o Hidroxocobalamina (Vitamina B12)', dose: '1000 mcg IM diario por 1 semana, luego 1000 mcg semanal por 4 semanas, y posteriormente 1000 mcg mensual de por vida (en caso de anemia perniciosa o gastrectomía)', route: 'IM profunda', freq: 'Protocolo de repleción', notes: 'Si coexiste déficit de folato, tratar SIEMPRE primero la vitamina B12 para evitar daño neurológico permanente irreversible' },
      { drug: 'Ácido Fólico', dose: '1 a 5 mg/día VO por 1 a 4 meses', route: 'VO', freq: 'c/24h', notes: 'En déficit aislado de folatos o incremento de requerimientos' }
    ],
    alternatives: [],
    nonPharm: ['Dieta con vísceras, carne, lácteos, huevos (fuentes de B12) y vegetales de hoja verde oscura, legumbres y frutos secos (fuentes de folato)'],
    nursingCare: ['Técnica de inyección intramuscular profunda en glúteo asegurando rotación del sitio', 'Evaluación neurológica seriada: prueba de Romberg, marcha y sensibilidad vibratoria en miembros inferiores', 'Monitoreo de potasio sérico en los primeros días tras iniciar B12 (riesgo de hipopotasemia severa por rápido consumo celular en eritropoyesis)', 'Educación a personas vegetarianas/veganas estrictas sobre suplementación obligatoria de B12']
  },
  {
    number: 190,
    id: 'diag-190',
    title: 'Anemia inflamatoria',
    cie10: 'D63.8',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Anemia de los procesos crónicos mediada por citocinas proinflamatorias (IL-6, TNF-alfa) que inducen una hipersecreción hepática de hepcidina, la cual degrada la ferroportina y bloquea el secuestro de hierro en los macrófagos e inhibe la eritropoyesis.',
    symptoms: ['Síntomas derivados de la enfermedad de base (lupus, artritis reumatoide, cáncer, ERC, infecciones crónicas)', 'Fatiga leve a moderada desproporcionada', 'Palidez cutánea progresiva pero anemia generalmente moderada y bien tolerada'],
    redFlags: ['Compromiso hemodinámico severo en pacientes ancianos con enfermedad coronaria coexistente'],
    criteria: 'Anemia normocítica normocrómica (o levemente microcítica) + Ferritina normal o elevada (> 100-300 ng/mL) + Hierro sérico bajo + Capacidad de fijación de hierro (TIBC) baja o normal-baja.',
    labTests: ['Hemograma completo (VCM habitualmente entre 80 y 95 fL, reticulocitos normales o disminuidos)', 'Ferritina sérica (reactante de fase aguda, normal o aumentada)', 'Proteína C reactiva (PCR) y Velocidad de Sedimentación Globular (VSG) marcadamente elevadas'],
    imaging: ['Según patología de base sospechada (radiografías articulares, TAC toracoabdominal)'],
    differential: ['Anemia ferropénica pura', 'Anemia mixta (ferropenia coexistente con inflamación crónica)', 'Anemia mieloptísica por infiltración de médula ósea'],
    firstLine: [
      { drug: 'Tratamiento etiológico prioritario de la enfermedad inflamatoria, infecciosa o reumatológica de fondo', dose: 'Específico según enfermedad causal', route: 'Varía', freq: 'Según patología', notes: 'La anemia suele corregir progresivamente al remitir el proceso inflamatorio sistémico' }
    ],
    alternatives: [
      { drug: 'Agentes estimulantes de la eritropoyesis (Eritropoyetina humana recombinante alfa / beta o Darbepoetina)', dose: 'EPO 50 a 100 UI/kg SC 3 veces por semana o Darbepoetina 0.45 a 0.75 mcg/kg SC semanal', route: 'SC', freq: 'Semanal o 3 v/sem', notes: 'Indicada en anemia secundaria a ERC avanzada o quimioterapia con Hb < 10 g/dL' },
      { drug: 'Hierro carboximaltosa endovenoso', dose: '500 a 1000 mg EV en infusión lenta', route: 'EV', freq: 'Según déficit', notes: 'Útil si coexiste ferropenia funcional a pesar de inflamación' }
    ],
    nonPharm: ['Transfusión de concentrado de hematíes restringida a hemoglobina < 7-8 g/dL con inestabilidad hemodinámica'],
    nursingCare: ['Diferenciación adecuada en el registro clínico de ferropenia verdadera vs anemia de enfermedad crónica', 'Monitoreo de presión arterial durante la administración de eritropoyetina (riesgo de crisis hipertensiva)', 'Cuidados de accesos vasculares y vigilancia estrecha de la terapia inmunosupresora o antibiótica de fondo']
  },
  {
    number: 191,
    id: 'diag-191',
    title: 'Diabetes tipo 1',
    cie10: 'E10.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad metabólica autoinmune caracterizada por la destrucción de las células beta productoras de insulina en los islotes pancreáticos de Langerhans, lo que resulta en un déficit absoluto de insulina e hiperglucemia persistente con propensión a la cetosis.',
    symptoms: ['Comienzo agudo o subagudo en niños y adultos jóvenes con las 4 "P": Poliuria profusa, Polidipsia intensa, Polifagia y Pérdida inexplicable y rápida de peso', 'Astenia severa, debilidad muscular y enuresis secundaria en niños previamente continentes', 'Visión borrosa y calambres'],
    redFlags: ['Cetoacidosis diabética debut: respiración rápida y profunda de Kussmaul, aliento cetónico a manzana madura, dolor abdominal difuso, vómitos, deshidratación grave y coma'],
    criteria: 'Glucemia en ayunas ≥ 126 mg/dL en dos ocasiones, o HbA1c ≥ 6.5%, o glucemia al azar ≥ 200 mg/dL con síntomas clásicos de hiperglucemia.',
    labTests: ['Péptido C sérico muy bajo o indetectable (indica carencia absoluta de reserva insulínica endógena)', 'Autoanticuerpos diagnósticos: Anti-GAD65 (descarboxilasa del ácido glutámico), Anti-IA-2, Anti-insulina (IAA) y Anti-ZnT8 (transportador de zinc 8)', 'Cetonas en orina y sangre', 'Gasometría y electrolitos'],
    imaging: ['No requerida para el diagnóstico inicial'],
    differential: ['Diabetes tipo 2', 'Diabetes monogénica tipo MODY', 'Diabetes secundaria a pancreatitis crónica o fibrosis quística'],
    firstLine: [
      { drug: 'Insulinoterapia basal-bolo intensificada obligatoria: Insulina basal análoga (Glargina o Degludec) + Insulina rápida/ultrarrápida prandial (Lispro, Aspart o Glulisina)', dose: 'Dosis total inicial: 0.4 a 0.6 UI/kg/día (50% como basal nocturna o matutina y 50% distribuida como bolos prandiales antes de cada comida)', route: 'SC', freq: 'Múltiples inyecciones diarias (MDI)', notes: 'Vitalicia e improrrogable; ajuste continuo según conteo de carbohidratos y glucemias' }
    ],
    alternatives: [
      { drug: 'Sistemas de infusión continua de insulina subcutánea (Bomba de insulina)', dose: 'Infusión basal continua + bolos para comidas', route: 'SC continuo', freq: 'Continuo', notes: 'Con o sin integración a sensor de monitoreo continuo de glucosa (MCG en tiempo real)' }
    ],
    nonPharm: ['Educación diabetológica estructurada: conteo estricto de hidratos de carbono por raciones', 'Manejo de la regla de los 15 g de azúcar para hipoglucemias leves'],
    nursingCare: ['Enseñanza fundamental al paciente y familia de la técnica correcta de inyección subcutánea y rotación de sitios para prevenir lipodistrofia', 'Instrucción en el uso de glucómetros o sensores continuos de glucosa intersticial (Freestyle Libre, Dexcom)', 'Educación para manejo de hipoglucemias: administración de Glucagón 1 mg SC/IM de rescate', 'Manejo de días de enfermedad (sick-day rules): JAMÁS suspender la insulina basal ante náuseas o fiebre']
  },
  {
    number: 192,
    id: 'diag-192',
    title: 'Diabetes tipo 2',
    cie10: 'E11.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno metabólico crónico caracterizado por hiperglucemia persistente debida a una combinación progresiva de resistencia a la acción periférica de la insulina y un defecto secretor relativo de las células beta del páncreas.',
    symptoms: ['Evolución asintomática e insidiosa durante muchos años', 'Aparición progresiva de polidipsia, poliuria y polifagia', 'Fatiga crónica, visión borrosa fluctuante, cicatrización lenta de heridas e infecciones recurrentes (balanopostitis, candidiasis vaginal)'],
    redFlags: ['Estado hiperosmolar hiperglucémico (deshidratación profunda, estupor/coma)', 'Úlcera infectada en pie diabético con signos de fascitis o gangrena'],
    criteria: 'Glucosa plasmática en ayunas (≥ 8h) ≥ 126 mg/dL; o Glucosa plasmática a las 2 horas de una prueba de tolerancia oral a la glucosa (PTOG con 75g) ≥ 200 mg/dL; o HbA1c ≥ 6.5%; o síntomas típicos + glucosa al azar ≥ 200 mg/dL.',
    labTests: ['HbA1c cada 3 meses hasta lograr meta (< 7.0% en la mayoría)', 'Perfil lipídico completo y pruebas de función hepática/renal (creatinina y eGFR)', 'Cociente Albúmina/Creatinina en muestra matutina de orina (tamizaje de nefropatía diabética, microalbuminuria ≥ 30 mg/g)'],
    imaging: ['Fondo de ojo dilatado anual para tamizaje de retinopatía diabética', 'Monofilamento de Semmes-Weinstein 10g para neuropatía periférica'],
    differential: ['Diabetes tipo 1 con inicio en el adulto (LADA)', 'Diabetes secundaria a fármacos (corticoides, antirretrovirales)', 'Diabetes pancreatopriva'],
    firstLine: [
      { drug: 'Metformina (Biguanida)', dose: '500 a 850 mg VO cada 12-24 horas, escalando gradualmente con las comidas hasta 1500 - 2000 mg/día', route: 'VO con alimentos', freq: 'c/12-24h', notes: 'Fármaco de primera línea; reduce producción hepática de glucosa; suspender si eGFR < 30 mL/min' },
      { drug: 'Inhibidores de SGLT2 (Empagliflozina 10-25 mg/día o Dapagliflozina 10 mg/día) y/o Análogos GLP-1', dose: '1 comprimido VO matutino', route: 'VO', freq: 'c/24h', notes: 'Prioritarios si hay enfermedad cardiovascular aterosclerótica, insuficiencia cardíaca o enfermedad renal crónica' }
    ],
    alternatives: [
      { drug: 'Inhibidores de DPP-4 (Sitagliptina 100 mg/día o Linagliptina 5 mg/día)', dose: '1 comprimido VO diario', route: 'VO', freq: 'c/24h', notes: 'Seguros, sin riesgo de hipoglucemia, útiles en ancianos o falla renal' },
      { drug: 'Sulfonilureas (Glimepirida 1-4 mg/día o Gliclazida 30-120 mg/día)', dose: '1 dosis con desayuno', route: 'VO', freq: 'c/24h', notes: 'Costo accesible; vigilar riesgo de hipoglucemia' }
    ],
    nonPharm: ['Alimentación balanceada individualizada (reducción de carbohidratos refinados)', 'Ejercicio aeróbico combinado con entrenamiento de fuerza muscular ≥ 150 min semanales', 'Cese absoluto del tabaquismo'],
    nursingCare: ['Examen integral y sistemático del pie diabético: inspección de piel, pulsos pedios y sensibilidad protectora con monofilamento', 'Educación para el autocuidado de pies: corte recto de uñas, no caminar descalzo, calzado ancho y revisión diaria', 'Capacitación en automonitoreo capilar domiciliario y registro en bitácora', 'Identificación de síntomas de hipoglucemia (sudoración fría, temblor, mareos) y su corrección rápida']
  },
  {
    number: 193,
    id: 'diag-193',
    title: 'Diabetes gestacional',
    cie10: 'O24.4',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Intolerancia a los carbohidratos de severidad variable que se reconoce o inicia por primera vez durante el embarazo (típicamente entre las semanas 24 y 28), debida a la resistencia a la insulina mediada por hormonas placentarias.',
    symptoms: ['Generalmente asintomática', 'Aumento excesivo de peso materno ponderal durante el segundo o tercer trimestre', 'Polihidramnios ecográfico o crecimiento fetal acelerado (macrosomía)'],
    redFlags: ['Macrosomía fetal (> 4000 g) con riesgo de distocia de hombros, trauma obstétrico, preeclampsia y muerte fetal intrauterina'],
    criteria: 'Criterios IADPSG/MINSA tras prueba de sobrecarga con 75 g de glucosa en semanas 24-28 (basta 1 valor alterado): Ayunas ≥ 92 mg/dL; a la 1 hora ≥ 180 mg/dL; a las 2 horas ≥ 153 mg/dL.',
    labTests: ['Prueba de tolerancia oral a la glucosa (PTOG 75g)', 'Hemoglobina glicosilada (HbA1c) meta < 6.0%', 'Urocultivo mensual (mayor riesgo de ITU asintomática)'],
    imaging: ['Ecografía obstétrica seriada para evaluar percentil de crecimiento fetal, circunferencia abdominal fetal y volumen de líquido amniótico'],
    differential: ['Diabetes mellitus pregestacional manifiesta previa no diagnosticada (glucosa ayuno ≥ 126 mg/dL en 1er trimestre)'],
    firstLine: [
      { drug: 'Terapia nutricional médica especializada + Ejercicio moderado postprandial (caminata 30 min diarios)', dose: 'Plan de 1800-2200 kcal/día fraccionado en 3 comidas y 2-3 colaciones', route: 'Estilo de vida', freq: 'Permanente', notes: 'Logra metas de control en el 70-80% de las gestantes; metas: ayunas ≤ 95 mg/dL y 1h postprandial ≤ 140 mg/dL' }
    ],
    alternatives: [
      { drug: 'Insulina humana NPH + Insulina Rápida (o análogos Lispro/Aspart)', dose: 'Iniciada si no se logran metas en 1-2 semanas de dieta; dosis según peso y edad gestacional', route: 'SC', freq: 'Fraccionada', notes: 'Fármaco de elección porque no cruza la barrera placentaria' },
      { drug: 'Metformina', dose: '500 a 1000 mg cada 12 horas VO con comidas', route: 'VO', freq: 'c/12h', notes: 'Uso en casos seleccionados con alta resistencia o rechazo a insulina' }
    ],
    nonPharm: ['Monitoreo continuo de glucemias capilares en ayunas y 1h postprandial'],
    nursingCare: ['Capacitación a la gestante en el automonitoreo glucémico diario y registro en cuaderno prenatal', 'Control de curva de ganancia de peso materno en cada control obstétrico', 'Vigilancia de signos de hipoglucemia materna inducida por insulina', 'Planificación de reclasificación metabólica con PTOG 75g a las 6 a 12 semanas posparto']
  },
  {
    number: 194,
    id: 'diag-194',
    title: 'Resistencia a la insulina',
    cie10: 'E88.81',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno biológico caracterizado por una respuesta celular disminuida a las concentraciones circulantes de insulina en el tejido adiposo, muscular y hepático, lo que obliga al páncreas a compensar produciendo hiperinsulinemia.',
    symptoms: ['Generalmente asintomático por largo tiempo', 'Presencia de Acantosis nigricans (hiperpigmentación aterciopelada en pliegues del cuello, axilas, nudillos e ingles)', 'Acrocordones cutáneos cervicales múltiples', 'Aumento de grasa perivisceral abdominal'],
    redFlags: ['Progresión silenciosa hacia prediabetes, diabetes tipo 2 manifiesta y esteatohepatitis no alcohólica'],
    criteria: 'Circunferencia de cintura elevada + Índice HOMA-IR > 2.5 - 3.0 calculado mediante fórmula: [Insulina basal (uUI/mL) × Glucosa basal (mg/dL)] / 405.',
    labTests: ['Glucemia e insulina basal en ayunas', 'Perfil lipídico (típica tríada aterogénica: hipertrigliceridemia con HDL bajo)', 'Pruebas de función hepática (TGP/ALT elevada en esteatosis)'],
    imaging: ['Ecografía abdominal para valorar infiltración grasa hepática'],
    differential: ['Cromegalia', 'Síndrome de Cushing', 'Hipercortisolemia exógena'],
    firstLine: [
      { drug: 'Modificación del estilo de vida: Reducción del consumo de carbohidratos de alto índice glucémico y azúcares añadidos + Entrenamiento de fuerza muscular y ejercicio aeróbico ≥ 180 min/semana', dose: 'Pérdida ponderal de 5 al 10% del peso', route: 'Estilo de vida', freq: 'Permanente', notes: 'El músculo esquelético es el principal captador de glucosa; el ejercicio activa transportadores GLUT-4 independientes de insulina' }
    ],
    alternatives: [
      { drug: 'Metformina', dose: '500 a 850 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Indicada en presencia de prediabetes (HbA1c 5.7-6.4%), síndrome de ovario poliquístico o IMC > 35' }
    ],
    nonPharm: ['Higiene de sueño (el insomnio crónico y apnea aumentan cortisol y resistencia a insulina)'],
    nursingCare: ['Identificación y registro de estigmas cutáneos de hiperinsulinemia (acantosis nigricans)', 'Medición estandarizada del perímetro de cintura en el punto medio entre el reborde costal inferior y la cresta ilíaca', 'Consejería nutricional motivacional orientada a familias para erradicar el consumo de ultraprocesados']
  },
  {
    number: 195,
    id: 'diag-195',
    title: 'Cetoacidosis diabética',
    cie10: 'E10.1',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Emergencia metabólica aguda y potencialmente mortal caracterizada por la tríada de hiperglucemia severa, acidosis metabólica con anión gap elevado y cetonemia/cetonuria importante, secundaria a carencia severa de insulina y exceso de hormonas contrarreguladoras.',
    symptoms: ['Instauración rápida (< 24 horas) de náuseas, vómitos incoercibles y dolor abdominal difuso (seudoperitonitis)', 'Polidipsia extrema, poliuria masiva y pérdida de peso', 'Respiración acidótica profunda y rápida de Kussmaul', 'Aliento cetónico característico (olor a manzanas maduras o acetona)', 'Deshidratación severa (mucosas secas, hipotensión, taquicardia) y alteración progresiva de conciencia'],
    redFlags: ['Acidosis severa con pH < 7.0, hipotensión refractaria a volumen, edema cerebral durante el tratamiento (frecuente en niños)'],
    criteria: 'Glucemia > 250 mg/dL + pH arterial < 7.30 o bicarbonato sérico < 18 mEq/L + anión gap elevado (> 10-12) + cetonemia positiva (beta-hidroxibutirato > 3.0 mmol/L) o cetonuria moderada a intensa (+++).',
    labTests: ['Gasometría arterial o venosa seriada', 'Electrolitos séricos (sodio corregido, potasio urgente, cloro)', 'Glucemia capilar horaria', 'Cetonemia o cetonuria', 'Hemograma y urocultivo (buscar infección desencadenante)'],
    imaging: ['Radiografía de tórax (descarte de foco infeccioso pulmonar precipitante)'],
    differential: ['Estado hiperosmolar hiperglucémico', 'Cetoacidosis alcohólica o de ayuno', 'Acidosis láctica', 'Intoxicación por salicilatos o metanol'],
    firstLine: [
      { drug: 'Hidratación endovenosa enérgica: Cloruro de Sodio al 0.9%', dose: '1000 a 1500 mL en la primera hora (15-20 mL/kg/h), luego continuar a 250-500 mL/h evaluando sodio corregido y diuresis', route: 'EV', freq: 'Horario', notes: 'Restaura el volumen circulatorio antes de administrar insulina' },
      { drug: 'Insulina cristalina regular EV en infusión continua', dose: 'Bolo inicial de 0.1 UI/kg EV seguido de 0.1 UI/kg/hora en infusión (o 0.14 UI/kg/h sin bolo); reducir glucosa a un ritmo de 50 a 70 mg/dL por hora', route: 'EV continua', freq: 'Horaria', notes: 'NO INICIAR insulina si el potasio sérico es < 3.3 mEq/L (riesgo de paro cardíaco por hipopotasemia extrema)' },
      { drug: 'Cloruro de Potasio (reemplazo prioritario)', dose: '20 a 30 mEq de K por cada litro de solución de infusión para mantener potasio sérico entre 4.0 y 5.0 mEq/L', route: 'EV con hidratación', freq: 'Continuo', notes: 'La insulina introduce masivamente potasio a la célula' }
    ],
    alternatives: [
      { drug: 'Dextrosa al 5% en NaCl 0.45%', dose: 'Iniciar infusión cuando la glucemia descienda a 200-250 mg/dL', route: 'EV', freq: 'Continuo', notes: 'Para evitar hipoglucemia brusca y edema cerebral mientras se continúa la insulina hasta cerrar el anión gap' }
    ],
    nonPharm: ['Monitoreo continuo en UCI o Unidad de Cuidados Intermedios', 'Sonda Foley para control horario estricto de gasto urinario'],
    nursingCare: ['Glucemia capilar HORARIA estricta y balance hídrico horario riguroso', 'Control estricto de la velocidad de infusión de insulina en bomba de infusión continua', 'Verificar valor de potasio antes de encender la infusión de insulina', 'Vigilancia de signos neurológicos de alarma para edema cerebral (cefalea intensa, letargia súbita, bradicardia con hipertensión - tríada de Cushing)']
  },
  {
    number: 196,
    id: 'diag-196',
    title: 'Estado hiperosmolar',
    cie10: 'E11.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Complicación metabólica aguda extrema de la diabetes mellitus tipo 2 caracterizada por hiperglucemia masiva, hiperosmolaridad plasmática profunda y deshidratación grave sin cetosis significativa.',
    symptoms: ['Instauración insidiosa en días o semanas en pacientes ancianos con infección o acceso limitado a líquidos', 'Deshidratación extrema (signo del pliegue cutáneo positivo, globos oculares hundidos, sequedad de mucosas y colapso venoso)', 'Compromiso neurológico severo: somnolencia, confusión, convulsiones focales y coma profundo'],
    redFlags: ['Osmolaridad sérica efectiva > 320 mOsm/kg, shock hipovolémico, trombosis vascular e infarto'],
    criteria: 'Glucemia > 600 mg/dL + Osmolaridad sérica efectiva > 320 mOsm/kg + pH arterial > 7.30 con bicarbonato > 18 mEq/L + cetonas mínimas o ausentes.',
    labTests: ['Glucemia sérica y osmolaridad efectiva calculada: 2[Na+] + [Glucosa (mg/dL) / 18]', 'Electrolitos séricos completos y función renal (elevación marcada de urea y creatinina prerrenal)', 'Hemograma y examen de orina'],
    imaging: ['Tomografía cerebral sin contraste en coma no atribuible únicamente a hiperosmolaridad'],
    differential: ['Cetoacidosis diabética', 'Accidente cerebrovascular isquémico', 'Sepsis severa'],
    firstLine: [
      { drug: 'Rehidratación hídrica masiva con Cloruro de Sodio al 0.9% (o al 0.45% si el sodio corregido es normal o alto)', dose: '1000 mL/h en las primeras 2 horas; reponer un déficit promedio de 8 a 12 litros de agua corporal en 24 a 48 horas', route: 'EV en infusión', freq: 'Horario', notes: 'El pilar angular del tratamiento es la reposición cautelosa de volumen' },
      { drug: 'Insulina cristalina regular EV en infusión continua', dose: '0.05 a 0.1 UI/kg/h en infusión; meta de descenso glucémico pausado (50-70 mg/dL por hora)', route: 'EV continua', freq: 'Horaria', notes: 'Iniciar después de haber comenzado la rehidratación' },
      { drug: 'Enoxaparina profiláctica', dose: '40 mg SC cada 24 horas', route: 'SC', freq: 'c/24h', notes: 'Profilaxis antitrombótica obligatoria por severa hiperviscosidad sanguínea' }
    ],
    alternatives: [],
    nonPharm: ['Manejo en Unidad de Cuidados Intensivos con monitor multiparámetro continuo'],
    nursingCare: ['Balance hidroelectrolítico horario estricto mediante sonda vesical Foley', 'Monitoreo horario de glucemia capilar y cálculo horario de la osmolaridad sérica', 'Cambios posturales frecuentes con protección de talones y prominencias óseas para prevenir UPP', 'Asegurar vía aérea permeable en estados comatosos']
  },
  {
    number: 197,
    id: 'diag-197',
    title: 'Hipoglucemia',
    cie10: 'E16.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Disminución de la concentración de glucosa en plasma por debajo de niveles normales (< 70 mg/dL en diabéticos tratados; < 55 mg/dL en no diabéticos) capaz de producir sintomatología neurogénica y neuroglucopénica.',
    symptoms: ['Síntomas autonómicos/adrenérgicos: temblor fino de manos, sudoración fría y profusa, palpitaciones, taquicardia, ansiedad extrema y sensación imperiosa de hambre', 'Síntomas neuroglucopénicos: mareos, visión borrosa, cefalea, dificultad para concentrarse, lenguaje incoherente, conducta bizarra o agresiva, confusión, convulsiones y pérdida de conciencia (coma hipoglucémico)'],
    redFlags: ['Coma hipoglucémico prolongado con riesgo de lesión cerebral irreversible o muerte encefálica', 'Convulsiones tónico-clónicas'],
    criteria: 'Tríada de Whipple: 1. Síntomas compatibles de hipoglucemia; 2. Nivel bajo de glucosa plasmática (< 70 mg/dL); 3. Resolución rápida de los síntomas tras la administración de glucosa.',
    labTests: ['Glucemia capilar urgente inmediata con glucómetro portátil y confirmación sérica simultánea', 'En no diabéticos: niveles de insulina sérica, péptido C, proinsulina y tamizaje de sulfonilureas'],
    imaging: ['Resonancia magnética o ultrasonido endoscópico de páncreas en sospecha de insulinoma'],
    differential: ['Accidente cerebrovascular isquémico agudo', 'Crisis de pánico', 'Intoxicación etílica aguda', 'Crisis epiléptica'],
    firstLine: [
      { drug: 'Regla de los 15 en paciente consciente: 15 gramos de hidratos de carbono de absorción rápida VO (1/2 vaso de jugo endulzado, 3 cucharaditas de azúcar disueltas en agua o 150 mL de gaseosa común)', dose: '15 g VO; esperar 15 minutos y remeasurear glucosa. Si continúa < 70 mg/dL, repetir 15 g', route: 'VO', freq: 'Inmediata', notes: 'Una vez normalizada la glucosa, dar un carbohidrato complejo (pan, galletas)' },
      { drug: 'Dextrosa al 33% o al 50% EV en paciente inconsciente o con incapacidad de deglutir', dose: '4 ampollas de Dextrosa al 33% (aprox. 20 a 25 g de glucosa pura) en bolo EV directo durante 3 a 5 minutos, seguido de infusión de Dextrosa al 10%', route: 'EV directo', freq: 'Inmediato', notes: 'Restablece la conciencia en pocos minutos; no intentar dar líquidos por vía oral a un paciente inconsciente' }
    ],
    alternatives: [
      { drug: 'Glucagón', dose: '1 mg IM o SC (o spray nasal 3 mg)', route: 'IM/SC/Nasal', freq: 'Dosis única', notes: 'De rescate domiciliario en pacientes tratados con insulina cuando no hay acceso venoso' }
    ],
    nonPharm: ['Investigar y corregir la causa desencadenante: sobredosis de insulina/sulfonilurea, salteo de comidas o ejercicio desacostumbrado'],
    nursingCare: ['ACTUACIÓN INMEDIATA: comprobar glucosa capilar y no demorar la administración de glucosa si hay sospecha clínica', 'En infusión de Dextrosa al 33% verificar permeabilidad venosa estricta por riesgo de flebitis o necrosis por extravasación', 'Reevaluación de la glucemia capilar cada 15 minutos hasta confirmar estabilización > 100 mg/dL', 'Educación intensiva al paciente y familiares sobre portar siempre fuentes de azúcar y brazalete de identificación médica']
  },
  {
    number: 198,
    id: 'diag-198',
    title: 'Dislipidemia mixta',
    cie10: 'E78.2',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno del metabolismo lipídico caracterizado por la elevación simultánea de los niveles plasmáticos de colesterol total/LDL (hipercolesterolemia) y de triglicéridos (hipertrigliceridemia), con frecuencia asociado a niveles bajos de HDL.',
    symptoms: ['Asintomática durante décadas', 'En formas graves o familiares: presencia de xantomas tendinosos (en tendón de Aquiles o extensores de las manos), xantelasmas en párpados superiores y arco corneal prematuro en menores de 45 años'],
    redFlags: ['Triglicéridos > 500-1000 mg/dL (riesgo inminente de pancreatitis aguda necrotizante)', 'Evento cardiovascular precoz (IAM, ACV)'],
    criteria: 'Colesterol total ≥ 200 mg/dL (o c-LDL elevado según riesgo cardiovascular) Y Triglicéridos ≥ 150 mg/dL.',
    labTests: ['Perfil lipídico completo con 12 horas de ayuno (colesterol total, c-HDL, triglicéridos y c-LDL calculado por Friedewald o directo)', 'Glucemia basal, HbA1c, TSH (descarte de hipotiroidismo secundario) y pruebas de función hepática y renal'],
    imaging: ['Score de calcio coronario (CAC por tomografía) en estratificación de riesgo cardiovascular intermedio'],
    differential: ['Hipercolesterolemia familiar monogénica', 'Dislipidemia secundaria a síndrome nefrótico, hipotiroidismo, alcoholismo o fármacos'],
    firstLine: [
      { drug: 'Atorvastatina o Rosuvastatina', dose: 'Atorvastatina 20 a 40 mg/día VO en la noche, o Rosuvastatina 10 a 20 mg/día VO', route: 'VO nocturna', freq: 'c/24h', notes: 'Estatinas de alta/moderada potencia: reducen c-LDL y triglicéridos, estabilizan la placa aterosclerótica y reducen mortalidad' }
    ],
    alternatives: [
      { drug: 'Fenofibrato', dose: '160 a 200 mg/día VO con la comida principal', route: 'VO con alimentos', freq: 'c/24h', notes: 'Fármaco de elección prioritario si los triglicéridos son > 500 mg/dL para prevenir pancreatitis' },
      { drug: 'Ezetimiba', dose: '10 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Asociado a estatina si no se alcanza la meta de c-LDL' }
    ],
    nonPharm: ['Dieta cardioprotectora: reducción estricta de grasas saturadas, eliminación de grasas trans y de alcohol', 'Actividad física aeróbica regular de 150 a 300 min semanales'],
    nursingCare: ['Instruir al paciente sobre la toma preferentemente nocturna de las estatinas (síntesis de colesterol pico a la noche)', 'Vigilancia de signos de miopatía inducida por estatinas (dolor o debilidad muscular en muslos/hombros y orina oscura)', 'Monitoreo de perfil lipídico y enzimas hepáticas (TGO/TGP) a las 8-12 semanas de iniciado el tratamiento', 'Educación para evitar el consumo de jugo de toronja (inhibidor de CYP3A4)']
  },
  {
    number: 199,
    id: 'diag-199',
    title: 'Hiperuricemia',
    cie10: 'E79.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Elevación de la concentración sérica de ácido úrico por encima de su límite de solubilidad fisiológica (> 6.8 - 7.0 mg/dL), lo que predispone a la cristalización tisular de urato monosódico en articulaciones (gota) y riñones.',
    symptoms: ['Frecuentemente asintomática por años ("hiperuricemia asintomática")', 'Dolor articular paroxístico nocturno de gran intensidad cuando evoluciona a artritis gotosa', 'Cólico renal por nefrolitiasis úrica'],
    redFlags: ['Litiasis úrica obstructiva bilateral con anuria o nefropatía aguda por ácido úrico'],
    criteria: 'Ácido úrico sérico > 6.8 mg/dL (o > 7.0 mg/dL en varones, > 6.0 mg/dL en mujeres).',
    labTests: ['Ácido úrico sérico matutino', 'Uricemia y uricosuria de 24 horas', 'Creatinina sérica y sedimento urinario'],
    imaging: ['Ecografía renal para descartar litiasis radiolúcida de ácido úrico'],
    differential: ['Hiperuricemia secundaria a síndrome de lisis tumoral', 'Insuficiencia renal crónica', 'Efecto de fármacos (diuréticos tiazídicos y de asa, pirazinamida, aspirina a dosis bajas)'],
    firstLine: [
      { drug: 'Medidas higiénico-dietéticas estrictas (en hiperuricemia asintomática la terapia farmacológica no suele iniciarse de rutina a menos que sea > 9-10 mg/dL o haya alto riesgo cardiovascular/renal)', dose: 'Dieta hipopurínica, hidratación abundante y eliminación de bebidas alcohólicas (especialmente cerveza) y azúcares ricos en fructosa', route: 'Estilo de vida', freq: 'Permanente', notes: 'Disminuye la producción de urato y favorece su excreción urinaria' }
    ],
    alternatives: [
      { drug: 'Alopurinol', dose: '100 mg/día VO iniciando, titulando mensualmente de 100 en 100 mg hasta 300 mg/día (ajustado a función renal)', route: 'VO postprandial', freq: 'c/24h', notes: 'Inhibidor de la xantino oxidasa; indicado si ácido úrico > 9-10 mg/dL, gota tofácea o litiasis' },
      { drug: 'Febuxostat', dose: '40 a 80 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Alternativa en intolerancia o falla renal leve a moderada' }
    ],
    nonPharm: ['Consumo de agua > 2.5 litros diarios para alcalinizar y diluir la orina'],
    nursingCare: ['Educación sobre la ingesta hídrica abundante durante todo el día', 'Identificación de alimentos con alto contenido de purinas: mariscos, vísceras, embutidos y carnes rojas', 'Instruir que el alopurinol NUNCA debe iniciarse durante un ataque agudo de gota (puede prolongar o agravar el ataque)']
  },
  {
    number: 200,
    id: 'diag-200',
    title: 'Hipertiroidismo',
    cie10: 'E05.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Síndrome clínico hipermetabólico resultante de la hiperactividad funcional de la glándula tiroides, con exceso de síntesis y secreción de hormonas tiroideas libres (T3 y T4) en la circulación sanguínea.',
    symptoms: ['Pérdida de peso rápida e involuntaria a pesar de apetito aumentado (polifagia)', 'Intolerancia marcada al calor y sudoración profusa y húmeda', 'Palpitaciones taquicárdicas en reposo, nerviosismo, irritabilidad e insomnio', 'Temblor fino distal involuntario en manos extendidas', 'Aumento en la frecuencia de las deposiciones o diarrea sin dolor', 'Debilidad muscular proximal en cuádriceps y hombros'],
    redFlags: ['Tormenta tiroidea: fiebre extrema (> 40 °C), taquiarritmia supraventricular severa (FA rápida), agitación/delirio, insuficiencia cardíaca aguda y shock circulatorio (mortalidad 20-30%)'],
    criteria: 'TSH suprimida (< 0.1 uUI/mL) con niveles elevados de T4 libre y/o T3 libre en sangre.',
    labTests: ['TSH ultrasensible, T4 libre y T3 libre', 'Anticuerpos estimulantes del receptor de TSH (TRAB) para confirmar enfermedad de Graves', 'Hemograma y transaminasas basales (previo a fármacos antitiroideos)'],
    imaging: ['Gammagrafía tiroidea con Tecnecio-99m o I-131 (captación difusa vs nodular caliente)', 'Ecografía doppler tiroidea (hipervascularización en "infierno tiroideo")'],
    differential: ['Tirotoxicosis facticia por ingesta de hormona tiroidea', 'Tiroiditis subaguda transitoria (fase tirotóxica con gammagrafía blanca)', 'Adenoma hipofisario productor de TSH'],
    firstLine: [
      { drug: 'Tiamazol (Metimazol)', dose: '10 a 30 mg/día VO en 1 o 2 tomas diarias, reduciendo progresivamente según descienda la T4 libre', route: 'VO', freq: 'c/12-24h', notes: 'Tionamida de elección por menor hepatotoxicidad; monitorizar recuento de leucocitos' },
      { drug: 'Propranolol', dose: '10 a 40 mg cada 6 a 8 horas VO para control sintomático adrenérgico rápido', route: 'VO', freq: 'c/8h', notes: 'Controla taquicardia, palpitaciones y temblores; inhibe conversión periférica de T4 a T3' }
    ],
    alternatives: [
      { drug: 'Propiltiouracilo (PTU)', dose: '100 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'De elección exclusiva en el 1er trimestre del embarazo y en crisis tirotóxica' },
      { drug: 'Yodo radiactivo (I-131) o Tiroidectomía total', dose: 'Dosis terapéutica ablativa', route: 'VO / Cirugía', freq: 'Definitivo', notes: 'Tratamiento definitivo en recaídas tras tionamidas' }
    ],
    nonPharm: ['Reposo físico y aislamiento acústico/emocional transitorio', 'Evitar cafeína, estimulantes y alimentos ricos en yodo'],
    nursingCare: ['EDUCACIÓN DE ALERTA sobre agranulocitosis por tiamazol: instruir al paciente que acuda URGENTEMENTE si presenta dolor de garganta súbito (odinofagia) o fiebre', 'Control diario de frecuencia cardíaca y ritmo del pulso (detección precoz de fibrilación auricular)', 'Vigilancia de signos de tormenta tiroidea ante cualquier cuadro infeccioso intercurrente']
  },
  {
    number: 201,
    id: 'diag-201',
    title: 'Bocio tóxico',
    cie10: 'E05.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Agrandamiento patológico de la glándula tiroides asociado a hipertiroidismo, que abarca la Enfermedad de Graves-Basedow (bocio tóxico difuso autoinmune) y el Bocio multinodular tóxico (enfermedad de Plummer con nódulos autónomos).',
    symptoms: ['Aumento visible y palpable del volumen del cuello en la región tiroidea anterior', 'Síntomas de tirotoxicosis: adelgazamiento, intolerancia al calor y taquicardia', 'Específicos de Graves: Oftalmopatía tiroidea (exoftalmos bilateral, quemosis, retracción palpebral) y Mixedema pretibial (placas violáceas induradas en piel pretibial)', 'En bocio gigante: disfagia, disfonía o estridor por compresión traqueal'],
    redFlags: ['Compresión traqueal severa con estridor inspiratorio y asfixia', 'Ulcera corneal grave por lagoftalmos'],
    criteria: 'Bocio difuso palpable con soplo auscultable sobre la glándula + TSH suprimida con T4L elevada + anticuerpos TRAB positivos y/o ecografía con patrón multinodular hipercaptante.',
    labTests: ['TRAB (anticuerpos anti-receptor de TSH, positivos en > 90% en Graves)', 'TSH, T4 libre y T3 total'],
    imaging: ['Ecografía tiroidea de alta resolución con flujometría doppler color', 'Gammagrafía tiroidea con Tc-99m'],
    differential: ['Bocio multinodular no tóxico eutiroideo', 'Cáncer anaplásico de tiroides', 'Tiroiditis de Hashimoto con bocio'],
    firstLine: [
      { drug: 'Tiamazol', dose: '15 a 30 mg/día VO repartidos en 1 o 2 dosis', route: 'VO', freq: 'c/12-24h', notes: 'Tratamiento inicial por 12 a 18 meses para buscar remisión inmunológica' },
      { drug: 'Propranolol', dose: '20 a 40 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'Alivio adrenérgico inmediato' }
    ],
    alternatives: [
      { drug: 'Radioyodo (I-131)', dose: 'Dosis terapéutica ablativa según volumen tiroideo', route: 'VO monodosis', freq: 'Única', notes: 'Tratamiento preferido en bocio multinodular tóxico en el adulto mayor' },
      { drug: 'Tiroidectomía total', dose: 'Cirugía resectiva', route: 'Quirúrgica', freq: 'Única', notes: 'De elección en bocios gigantes con compresión de vía aérea o sospecha de malignidad' }
    ],
    nonPharm: ['Uso de lágrimas artificiales y lentes oscuros con protección lateral para la oftalmopatía'],
    nursingCare: ['Protección ocular: lubricación continua con carboximetilcelulosa y elevación de la cabecera a 30° para reducir el edema palpebral', 'Palpación cuidadosa del cuello y valoración de signos compresivos (signo de Pemberton: congestión facial al elevar los brazos)', 'Vigilancia estrecha de la adherencia a la medicación antitiroidea']
  },
  {
    number: 202,
    id: 'diag-202',
    title: 'Hipotiroidismo',
    cie10: 'E03.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Síndrome clínico provocado por la deficiencia en la producción o secreción de hormonas tiroideas (T4 y T3), lo que produce una ralentización generalizada de todos los procesos metabólicos del organismo.',
    symptoms: ['Astenia, fatiga extrema, lentitud de movimientos y bradipsiquia (pensamiento lento)', 'Intolerancia marcada al frío (sensación de congelamiento)', 'Aumento modesto de peso (2 a 4 kg por retención hidrosalina) con apetito disminuido', 'Constipación pertinaz y meteorismo', 'Piel fría, seca, engrosada y descamativa con caída acentuada del cabello y cejas (madarosis externa)', 'Voz ronca, áspera y bradicardia sinusal'],
    redFlags: ['Coma mixedematoso: hipotermia grave (< 32-35 °C), hipoventilación con hipercapnia, bradicardia extrema, hipotensión y shock letal'],
    criteria: 'TSH sérica elevada (> 4.5 - 10.0 uUI/mL) con niveles bajos de Tiroxina libre (T4L < 0.8 ng/dL). (Si T4L es normal se define como Hipotiroidismo subclínico).',
    labTests: ['TSH ultrasensible y T4 libre', 'Anticuerpos anti-tiroperoxidasa (anti-TPO) y anti-tiroglobulina (anti-TG)', 'Perfil lipídico (típica hipercolesterolemia secundaria a menor catabolismo de LDL)', 'Hemograma (anemia normocítica o macrocítica leve)'],
    imaging: ['Ecografía tiroidea (tiroides atrófico o hipoecoico heterogéneo)'],
    differential: ['Síndrome de fatiga crónica', 'Depresión mayor', 'Insuficiencia cardíaca congestiva', 'Síndrome nefrótico'],
    firstLine: [
      { drug: 'Levotiroxina sódica (L-T4 sintética)', dose: 'Adultos jóvenes: 1.6 mcg/kg/día en ayunas; Ancianos o con cardiopatía coronaria: iniciar con dosis bajas de 25 a 50 mcg/día e ir titulando cada 6 a 8 semanas', route: 'VO en ayunas con agua pura', freq: 'c/24h en ayunas', notes: 'Tomar al levantarse al menos 30 a 60 minutos antes del desayuno o cafeína; ajuste según TSH' }
    ],
    alternatives: [
      { drug: 'Levotiroxina EV + Hidrocortisona EV', dose: 'Levotiroxina 200 a 400 mcg bolo EV + Hidrocortisona 100 mg EV c/8h', route: 'EV en UCI', freq: 'Continuo', notes: 'Protocolo de urgencia exclusivo para Coma Mixedematoso' }
    ],
    nonPharm: ['Dieta adecuada en fibra y líquidos para regularizar el tránsito intestinal', 'Evitar automedicación con suplementos de yodo no controlados'],
    nursingCare: ['EDUCACIÓN DE ORO sobre la toma de Levotiroxina: en ayunas estricto, con un vaso lleno de agua pura, esperando al menos 30 a 60 minutos antes de ingerir desayuno o café', 'Advertir que NO DEBE tomarse junto a suplementos de hierro, calcio o antiácidos (separar al menos 4 horas)', 'Control de signos vitales basales (frecuencia cardíaca, temperatura axilar y presión arterial)', 'En adultos mayores, vigilar signos de angina o taquicardia al titular la dosis de hormona']
  },
  {
    number: 203,
    id: 'diag-203',
    title: 'Tiroiditis de Hashimoto',
    cie10: 'E06.3',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Tiroiditis crónica autoinmune caracterizada por infiltración linfocitaria progresiva y destrucción apoptótica de los folículos tiroideos mediada por autoanticuerpos, constituyendo la causa más frecuente de hipotiroidismo en áreas sin déficit de yodo.',
    symptoms: ['Bocio indoloro, difuso, firme, gomoso y de superficie discretamente lobulada', 'Evolución lenta hacia hipotiroidismo manifiesto: fatiga crónica, ganancia ponderal, piel seca y estreñimiento', 'Breve fase transitoria hipermetabólica inicial en algunos pacientes ("hashitoxicosis")'],
    redFlags: ['Crecimiento acelerado doloroso y asimétrico de la glándula (sospecha de Linfoma tiroideo primario o carcinoma)'],
    criteria: 'Hipotiroidismo o bocio indoloro + presencia de títulos séricos marcadamente elevados de anticuerpos anti-peroxidasa tiroidea (anti-TPO) y/o anti-tiroglobulina (anti-TG).',
    labTests: ['Anticuerpos anti-TPO (positivos en > 95% de los casos)', 'Anticuerpos anti-TG (positivos en 60-80%)', 'TSH y T4 libre periódicas'],
    imaging: ['Ecografía tiroidea de alta resolución (parénquima marcadamente hipoecoico, heterogéneo con microlobulaciones y pseudonódulos)'],
    differential: ['Bocio coloide no tóxico', 'Tiroiditis subaguda silente indolora', 'Carcinoma papilar de tiroides'],
    firstLine: [
      { drug: 'Levotiroxina sódica', dose: '1.6 mcg/kg/día VO en ayunas estricto, titulada cada 6 a 8 semanas hasta normalizar TSH', route: 'VO en ayunas', freq: 'c/24h', notes: 'Tratamiento de reemplazo permanente una vez establecido el hipotiroidismo' }
    ],
    alternatives: [],
    nonPharm: ['Monitoreo periódico anual de TSH en pacientes con anticuerpos positivos pero TSH aún normal (fase eutiroidea)'],
    nursingCare: ['Educación sobre la naturaleza crónica y autoinmune del cuadro, disipando temores sobre cáncer', 'Énfasis en la adherencia vitalicia ininterrumpida a la levotiroxina', 'Vigilancia del crecimiento glandular palpable en los controles regulares', 'Pesquisa de otras patologías autoinmunes asociadas (vitíligo, anemia perniciosa, celiaquía)']
  },
  {
    number: 204,
    id: 'diag-204',
    title: 'Tiroiditis subaguda',
    cie10: 'E06.1',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Enfermedad inflamatoria granulomatosa transitoria de la tiroides (tiroiditis de De Quervain), habitualmente de etiología post-viral, caracterizada por dolor cervical exquisito en la cara anterior del cuello y VSG sumamente elevada.',
    symptoms: ['Dolor intenso y lancinante en la región tiroidea que irradia típicamente hacia la mandíbula o los oídos', 'Sensibilidad extrema a la palpación del cuello (el paciente rehúye el contacto)', 'Fiebre, malestar general, astenia y mialgias', 'Curso trifásico: 1. Tirotoxicosis inicial transitoria (2-6 semanas) por lisis folicular; 2. Hipotiroidismo transitorio (2-8 semanas); 3. Resolución completa'],
    redFlags: ['Compromiso del estado general con deshidratación y fiebre alta remitente'],
    criteria: 'Dolor tiroideo exquisito y bocio sensible + VSG marcadamente acelerada (> 50-100 mm/h) + TSH suprimida con gammagrafía con captación de yodo casi nula (< 1-2%).',
    labTests: ['VSG y Proteína C reactiva (ambas extremadamente elevadas)', 'TSH, T4 libre y T3 libre', 'Anticuerpos anti-TPO (negativos o a títulos muy bajos)'],
    imaging: ['Gammagrafía tiroidea con I-131 (captación muy baja o ausente "tiroides blanco")', 'Ecografía tiroidea (zonas hipoecoicas mal delimitadas "en parches" sin aumento de flujo)'],
    differential: ['Faringitis aguda o absceso periamigdalino', 'Tiroiditis infecciosa supurativa aguda bacteriana', 'Hemorragia intraquística tiroidea'],
    firstLine: [
      { drug: 'AINEs (Ibuprofeno o Naproxeno)', dose: 'Ibuprofeno 600 mg cada 8 horas VO con alimentos, o Naproxeno 500 mg cada 12 horas por 2 a 4 semanas', route: 'VO con comidas', freq: 'c/8-12h', notes: 'De primera línea en cuadros leves a moderados para control del dolor y la inflamación' },
      { drug: 'Prednisona (en dolor intenso o refractario a AINEs)', dose: '30 a 40 mg/día VO en dosis única matutina por 1 a 2 semanas, reduciendo gradualmente durante 4 a 6 semanas', route: 'VO con desayuno', freq: 'c/24h reduciendo', notes: 'Alivio espectacular del dolor en 24 a 48 horas' }
    ],
    alternatives: [
      { drug: 'Propranolol', dose: '20 a 40 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'Control de la taquicardia y temblor durante la fase tirotóxica inicial; NO usar fármacos antitiroideos (no hay síntesis)' }
    ],
    nonPharm: ['Reposo relativo y aplicación de compresas tibias en el cuello'],
    nursingCare: ['NO PALPAR con fuerza la tiroides para evitar agravar el dolor lancinante del paciente', 'Monitoreo de la temperatura corporal y de la respuesta al tratamiento analgésico', 'Tranquilizar al paciente informándole sobre el carácter transitorio y autolimitado del proceso', 'Vigilancia de la transición hacia la fase de hipotiroidismo para solicitar control de TSH']
  },
  {
    number: 205,
    id: 'diag-205',
    title: 'Síndrome de Cushing',
    cie10: 'E24.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno endocrino provocado por la exposición crónica y excesiva a niveles elevados de glucocorticoides libres circulantes, ya sea de origen exógeno (iatrogénico por corticoides) o endógeno (adenoma hipofisario productor de ACTH o Enfermedad de Cushing, adenoma suprarrenal o secreción ectópica).',
    symptoms: ['Obesidad centrípeta o troncular con adelgazamiento de extremidades (grasa acumulada en tórax y abdomen)', 'Facies de "luna llena" pletórica y acúmulo graso interscapular ("giba de búfalo")', 'Estrías violáceas anchas (> 1 cm) características en abdomen, flancos y mamas', 'Fragilidad capilar extrema con equimosis fáciles ante traumatismos mínimos', 'Miopatía proximal severa (dificultad para levantarse de una silla o subir escaleras)', 'Hipertensión arterial secundaria, intolerancia a la glucosa, osteoporosis y labilidad emocional'],
    redFlags: ['Infecciones oportunistas graves enmascaradas (ausencia de fiebre o leucocitosis clásica)', 'Crisis hipertensiva y psicosis esteroidea'],
    criteria: 'Pruebas de screening positivas (al menos 2 concordantes): 1. Cortisol libre en orina de 24h elevado (> 3 veces el límite superior); 2. Cortisol salival nocturno elevado (a las 23:00 h); 3. Ausencia de frenación de cortisol sérico (> 1.8 mcg/dL) tras 1 mg de dexametasona nocturna.',
    labTests: ['Cortisol libre urinario en 24 horas y cortisol salival nocturno', 'Test de Nugent (dexametasona 1 mg a las 23h y cortisol sérico a las 8h)', 'ACTH plasmática matutina (diferencia dependiente vs independiente de ACTH)', 'Electrolitos séricos (hipopotasemia alcalótica en Cushing ectópico)'],
    imaging: ['Resonancia magnética de hipófisis con contraste gadolinio (adenoma micro/macroadenoma)', 'TAC de glándulas suprarrenales con cortes finos'],
    differential: ['Pseudo-Cushing por alcoholismo crónico severo, depresión mayor o anorexia', 'Uso subrepticio o encubierto de corticoides tópicos, inhalados o inyectables'],
    firstLine: [
      { drug: 'Tratamiento etiológico quirúrgico de elección: Cirugía transesfenoidal hipofisaria (en Enfermedad de Cushing) o Adrenalectomía laparoscópica unilateral (en adenoma suprarrenal)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Resuelve la fuente autónoma del exceso de cortisol' },
      { drug: 'Retirada lenta, gradual y programada de corticoides exógenos', dose: 'Descenso escalonado bajo supervisión', route: 'VO', freq: 'Reglado', notes: 'En Cushing exógeno para evitar insuficiencia suprarrenal aguda' }
    ],
    alternatives: [
      { drug: 'Ketoconazol o Metirapona', dose: 'Ketoconazol 200 a 400 mg cada 8-12 horas VO', route: 'VO', freq: 'c/8-12h', notes: 'Inhibidores de la esteroidogénesis suprarrenal para control médico prequirúrgico' }
    ],
    nonPharm: ['Suplementación con calcio, vitamina D y bifosfonatos para osteoporosis', 'Manejo riguroso de la glucemia y la presión arterial'],
    nursingCare: ['Protección de la piel y extremidades: movilización cuidadosa para evitar hematomas por fragilidad capilar', 'Control estricto de presión arterial, peso diario y glucemias capilares seriadas', 'En el postoperatorio inmediato: vigilancia extrema de signos de insuficiencia suprarrenal aguda por descenso brusco de cortisol', 'Apoyo psicológico continuo por los cambios estéticos corporales y labilidad afectiva']
  },
  {
    number: 206,
    id: 'diag-206',
    title: 'Enfermedad de Addison',
    cie10: 'E27.1',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Insuficiencia suprarrenal primaria crónica causada por la destrucción autoinmune (o infecciosa por tuberculosis en países endémicos) de más del 90% de la corteza suprarrenal, resultando en deficiencia combinada de glucocorticoides y mineralocorticoides.',
    symptoms: ['Astenia crónica intensa, debilidad muscular progresiva y fatigabilidad extrema', 'Pérdida de peso involuntaria marcada y anorexia persistente', 'Hiperpigmentación cutáneo-mucosa generalizada (bronceado en zonas expuestas al sol, pliegues palmares, nudillos, codos, cicatrices recientes y mucosa yugal/gingival por elevación de POMC/ACTH)', 'Hipotensión arterial postural y mareos ortostáticos', 'Deseo compulsivo por ingerir sal (avidez de sal) y náuseas/diarrea'],
    redFlags: ['Crisis suprarrenal aguda (crisis addisoniana): hipotensión arterial refractaria a fluidos, shock distributivo hipovolémico, dolor abdominal agudo, hipoglucemia, hiperpotasemia severa y muerte inminente'],
    criteria: 'Cortisol plasmático basal a las 8:00 h < 3-5 mcg/dL con ACTH plasmática marcadamente elevada (> 100-200 pg/mL) + falta de respuesta en la prueba de estimulación con ACTH sintética (Tetracosáctido).',
    labTests: ['Electrolitos séricos (clásica hiponatremia con hiperpotasemia y acidosis metabólica leve)', 'Glucosa sérica (tendencia a hipoglucemia)', 'Anticuerpos anti-21-hidroxilasa (positivos en adrenalitis autoinmune)', 'Prueba rápida de estimulación con ACTH (250 mcg)'],
    imaging: ['Tomografía computarizada de glándulas suprarrenales (atróficas en etiología autoinmune; agrandadas o calcificadas en tuberculosis suprarrenal)'],
    differential: ['Insuficiencia suprarrenal secundaria (hipofisaria, sin hiperpigmentación ni hiperpotasemia)', 'Anorexia nerviosa', 'Hemocromatosis'],
    firstLine: [
      { drug: 'Hidrocortisona (reemplazo glucocorticoide fisiológico)', dose: '15 a 25 mg/día VO dividida en 2 a 3 tomas: 2/3 al levantarse y 1/3 en la tarde (ej. 15 mg a las 8h y 5 mg a las 15h)', route: 'VO', freq: 'c/12h imitando ritmo circadiano', notes: 'Dosis mínima que controle síntomas sin producir hipercortisolismo' },
      { drug: 'Fludrocortisona (reemplazo mineralocorticoide)', dose: '0.05 a 0.2 mg/día VO en dosis única matutina', route: 'VO matutino', freq: 'c/24h', notes: 'Normaliza la volemia, presión arterial y balance de sodio/potasio' }
    ],
    alternatives: [
      { drug: 'Hidrocortisona EV en bolo urgente', dose: '100 mg EV en bolo directo inmediato, seguido de 100 a 200 mg en infusión continua o 50-100 mg EV c/6h + Cloruro de Sodio al 0.9% a chorro', route: 'EV urgente', freq: 'Continuo', notes: 'Protocolo de rescate vitalicio para Crisis Addisoniana aguda' }
    ],
    nonPharm: ['Consumo liberal de sal y líquidos en la dieta diaria', 'Portar tarjeta o brazalete de alerta médica de insuficiencia suprarrenal'],
    nursingCare: ['REGLA DE VIDA DE ENFERMERÍA: Instruir al paciente en duplicar o triplicar la dosis oral de hidrocortisona ante estrés agudo, fiebre > 38 °C o infecciones menores', 'Capacitar al paciente y familiares en la administración intramuscular de emergencia de 100 mg de hidrocortisona ante vómitos incoercibles', 'Monitoreo de presión arterial sentado y de pie para vigilar hipotensión ortostática', 'NUNCA omitir ni demorar la administración de la dosis de esteroides prescrita']
  },
  {
    number: 207,
    id: 'diag-207',
    title: 'Feocromocitoma',
    cie10: 'C74.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Tumor neuroendocrino originado en las células cromafines de la médula suprarrenal (o paraganglioma en ganglios simpáticos extraadrenales) que sintetiza, almacena y secreta de forma autónoma catecolaminas (adrenalina y noradrenalina).',
    symptoms: ['Tríada clásica paroxística: 1. Cefalea pulsátil intensa holocraneal; 2. Sudoración profusa generalizada (diaforesis); 3. Palpitaciones taquicárdicas', 'Hipertensión arterial paroxística severa o hipertensión sostenida resistente a múltiples fármacos', 'Palidez cutánea marcada durante las crisis paroxísticas, temblor y sensación inminente de muerte'],
    redFlags: ['Crisis catecolaminérgica: edema agudo de pulmón no cardiogénico, miocardiopatía por estrés (Takotsubo), disección aórtica, ACV hemorrágico y muerte súbita'],
    criteria: 'Elevación persistente (> 3-4 veces el límite superior) de metanefrinas libres plasmáticas o metanefrinas fraccionadas en orina de 24 horas.',
    labTests: ['Metanefrinas libres en plasma (sensibilidad > 97%)', 'Metanefrinas y catecolaminas fraccionadas en orina de 24 horas', 'Glucosa sérica (hiperglucemia secundaria a inhibición de insulina y gluconeogénesis)'],
    imaging: ['Tomografía axial computarizada con contraste o Resonancia magnética abdominal de glándulas suprarrenales', 'Gammagrafía con MIBG (metayodobenzilguanidina) o PET-CT con Galio-68 DOTATATE para metástasis'],
    differential: ['Crisis de pánico / ansiedad paroxística', 'Hipertensión arterial esencial severa', 'Hipertiroidismo', 'Uso ilícito de cocaína o anfetaminas'],
    firstLine: [
      { drug: 'Bloqueo alfa-adrenérgico previo obligatorio: Fenoxibenzamina o Doxazosina', dose: 'Doxazosina 2 a 16 mg/día VO (o Fenoxibenzamina 10 mg c/12h aumentando progresivamente) iniciado 10 a 14 días antes de la cirugía', route: 'VO', freq: 'c/12-24h', notes: 'REGLA CARDINAL: Bloquear PRIMERO los receptores alfa antes de dar betabloqueantes para evitar vasoconstricción sin oposición y crisis hipertensiva letal' },
      { drug: 'Bloqueo beta-adrenérgico secundario: Propranolol o Atenolol', dose: 'Propranolol 20 a 40 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'Solo se añade 2 a 3 días después del bloqueo alfa si persiste taquicardia' }
    ],
    alternatives: [
      { drug: 'Adrenalectomía laparoscópica definitiva', dose: 'Tratamiento quirúrgico curativo', route: 'Quirúrgica', freq: 'Única', notes: 'Tras preparación farmacológica completa y reposición de volemia con dieta alta en sal' }
    ],
    nonPharm: ['Hidratación abundante y dieta rica en sodio tras el bloqueo alfa para reexpandir el lecho vascular'],
    nursingCare: ['Monitoreo continuo de presión arterial y frecuencia cardíaca invasiva durante las crisis', 'PROHIBICIÓN ESTRICTA: jamás administrar betabloqueantes aislados a un paciente con sospecha de feocromocitoma', 'Evitar palpación abdominal profunda vigorosa (puede desencadenar liberación masiva de catecolaminas)', 'Vigilancia estrecha en el postoperatorio inmediato: riesgo de hipotensión severa e hipoglucemia tras la exéresis tumoral']
  },
  {
    number: 208,
    id: 'diag-208',
    title: 'Hiperaldosteronismo',
    cie10: 'E26.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Hiperaldosteronismo primario (Síndrome de Conn) caracterizado por la producción autónoma y excesiva de aldosterona por la corteza suprarrenal, independiente del sistema renina-angiotensina, originada por un adenoma productor de aldosterona o hiperplasia suprarrenal bilateral.',
    symptoms: ['Hipertensión arterial moderada a severa, refractaria a 3 o más antihipertensivos', 'Debilidad muscular proximal episódica, fatiga y calambres intensos inducidos por hipopotasemia', 'Poliuria, nicturia y polidipsia moderada por diabetes insípida nefrogénica inducida por hipopotasemia', 'AUSENCIA de edemas periféricos periféricos notorios (fenómeno de escape de aldosterona)'],
    redFlags: ['Arritmias ventriculares letales por hipopotasemia severa (< 2.5 mEq/L)', 'ACV precoz'],
    criteria: 'Cociente Aldosterona/Actividad de Renina Plasmática (ARR) elevado (> 20-30 ng/dL por ng/mL/h) con aldosterona plasmática > 15 ng/dL + confirmación con test de sobrecarga salina.',
    labTests: ['Cociente aldosterona/renina plasmática (ARR) en ayunas tras suspender fármacos interferentes', 'Electrolitos séricos (hipopotasemia espontánea o inducida por diuréticos)', 'Potasio urinario en 24h (> 30 mEq/día en presencia de hipopotasemia)'],
    imaging: ['Tomografía computarizada de glándulas suprarrenales con cortes milimétricos', 'Muestreo venoso suprarrenal (AVS) para lateralización prequirúrgica'],
    differential: ['Hipertensión esencial con uso de diuréticos', 'Hipertensión renovascular (hiperaldosteronismo secundario con renina alta)', 'Síndrome de Liddle'],
    firstLine: [
      { drug: 'Espironolactona (antagonista del receptor mineralocorticoide)', dose: '25 a 100 mg/día VO en 1 o 2 tomas (titulando hasta 200 mg/día)', route: 'VO con desayuno', freq: 'c/12-24h', notes: 'Tratamiento farmacológico de elección en hiperplasia bilateral o en preparación preoperatoria; vigilar ginecomastia' }
    ],
    alternatives: [
      { drug: 'Eplerenona', dose: '25 a 50 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Antagonista mineralocorticoide selectivo con mínima afinidad por receptores androgénicos' },
      { drug: 'Adrenalectomía laparoscópica unilateral', dose: 'Tratamiento quirúrgico curativo', route: 'Quirúrgica', freq: 'Única', notes: 'De elección en adenoma productor unilateral (Síndrome de Conn)' }
    ],
    nonPharm: ['Restricción moderada de sodio en la dieta (< 2 g/día) para potenciar el efecto antihipertensivo'],
    nursingCare: ['Monitoreo riguroso de niveles de potasio sérico y electrocardiograma en pacientes con debilidad muscular', 'Control diario de presión arterial seriada en posición sentada y de pie', 'Instruir al paciente masculino sobre la posibilidad de ginecomastia o mastodinia por espironolactona y reportarlo para cambio a eplerenona']
  },
  {
    number: 209,
    id: 'diag-209',
    title: 'Hipoparatiroidismo',
    cie10: 'E20.9',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Trastorno endocrino provocado por la secreción deficiente o nula de Paratohormona (PTH) por las glándulas paratiroides, con mayor frecuencia secundario a tiroidectomía total quirúrgica, lo que provoca hipocalcemia sintomática e hiperfosfatemia.',
    symptoms: ['Neuromuscular (tetania): Parestesias peribucales (adormecimiento alrededor de los labios) y en la punta de los dedos de manos y pies', 'Espasmos carpopedales dolorosos involuntarios ("mano de partero" o signo de Trousseau)', 'Hiperreflexia generalizada y contracturas musculares espontáneas', 'Signo de Chvostek positivo (espasmo muscular facial ipsilateral al percutir el nervio facial delante de la oreja)', 'Espasmo laríngeo / estridor respiratorio e irritabilidad'],
    redFlags: ['Laringoespasmo con obstrucción completa de la vía aérea y paro respiratorio', 'Convulsiones tonicoclónicas generalizadas', 'Prolongación extrema del intervalo QT con riesgo de torsades de pointes'],
    criteria: 'Hipocalcemia (calcio sérico corregido por albúmina < 8.5 mg/dL o calcio iónico < 1.1 mmol/L) asociada a niveles inapropiadamente bajos o indetectables de PTH intacta con hiperfosfatemia.',
    labTests: ['Calcio sérico total y calcio iónico', 'Albúmina sérica (Fórmula de Payne: Calcio corregido = Calcio medido + 0.8 × [4.0 - Albúmina])', 'Fósforo sérico (elevado)', 'Magnesio sérico (la hipomagnesemia inhibe la liberación de PTH)', 'PTH intacta'],
    imaging: ['Electrocardiograma (prolongación del intervalo QT por hipocalcemia)'],
    differential: ['Deficiencia severa de vitamina D', 'Hipomagnesemia severa', 'Pseudohipoparatiroidismo (resistencia a PTH)', 'Pancreatitis aguda'],
    firstLine: [
      { drug: 'Gluconato de Calcio al 10% EV en crisis tetánica aguda', dose: '1 a 2 ampollas (10 a 20 mL de solución al 10%) diluidas en 100 mL de Dextrosa al 5% a pasar EV lento en 10 a 20 minutos, seguido de infusión continua', route: 'EV lento bajo monitor', freq: 'Inmediata', notes: 'NUNCA administrar en bolo rápido por riesgo de bradicardia severa, paro cardíaco y flebitis grave' },
      { drug: 'Calcitriol oral (Vitamina D activa) + Carbonato de Calcio oral de mantenimiento', dose: 'Calcitriol 0.25 a 1.0 mcg/día VO + Calcio elemental 1000 a 2000 mg/día repartido con comidas', route: 'VO fraccionado con alimentos', freq: 'c/8-12h', notes: 'El calcitriol es esencial dado que sin PTH el riñón no puede convertir la vitamina D a su forma activa' }
    ],
    alternatives: [
      { drug: 'Sulfato de Magnesio EV', dose: '1 a 2 g EV lento si coexiste hipomagnesemia', route: 'EV lento', freq: 'Dosis rescate', notes: 'La hipocalcemia no corregirá si no se normaliza primero el magnesio' }
    ],
    nonPharm: ['Dieta rica en calcio (lácteos, almendras, sardinas) y baja en fósforo (restringir gaseosas oscuras y procesados)'],
    nursingCare: ['MANEJO DE EMERGENCIA: Mantener siempre equipo de vía aérea y ampolla de gluconato de calcio al 10% lista a la cabecera del paciente tiroidectomizado', 'Vigilancia estricta del sitio de venopunción durante la infusión de calcio (la extravasación produce necrosis tisular severa y calcinosis)', 'Monitoreo electrocardiográfico continuo del intervalo QT', 'Evaluación regular de los signos de Chvostek y Trousseau en el postoperatorio de tiroidectomía']
  },
  {
    number: 210,
    id: 'diag-210',
    title: 'Hiperparatiroidismo',
    cie10: 'E21.0',
    category: 'Digestivas y Metabólicas',
    chapter: 'III. Enfermedades del Aparato Digestivo y Metabólicas (136-210)',
    definition: 'Hiperparatiroidismo primario causado por la secreción autónoma y no regulada de hormona paratiroidea (PTH), provocada en el 85% de los casos por un adenoma paratiroideo solitario benigno, lo que conduce a hipercalcemia, resorción ósea y calciuria.',
    symptoms: ['Clásica mnemotecnia en inglés "Bones, Stones, Abdominal groans, Psychic moans":', 'Huesos: Dolores óseos difusos, osteopenia/osteoporosis acelerada, fracturas patológicas y quistes óseos (osteítis fibrosa quística)', 'Piedras: Cólicos nefríticos recurrentes por litiasis renal cálcica bilateral y nefrocalcinosis', 'Abdomen: Dolor abdominal por úlcera péptica recurrente o pancreatitis aguda, estreñimiento severo y náuseas', 'Psiquismo: Fatiga, astenia, depresión, pérdida de memoria y confusión mental'],
    redFlags: ['Crisis hipercalcémica aguda (calcio sérico > 14 mg/dL): deshidratación masiva, estupor, coma, insuficiencia renal aguda y arritmias con acortamiento del QT'],
    criteria: 'Hipercalcemia (calcio sérico total corregido > 10.5 mg/dL o calcio iónico elevado) confirmada simultáneamente con niveles elevados o inapropiadamente normales de PTH intacta.',
    labTests: ['Calcio sérico total y calcio iónico', 'PTH intacta sérica (elevada)', 'Fósforo sérico (disminuido < 2.5 mg/dL por hiperfosfaturia)', 'Calcio en orina de 24 horas (> 200-400 mg/día descarta hipercalcemia hipocalciúrica familiar)', 'Fosfatasa alcalina y función renal'],
    imaging: ['Gammagrafía paratiroidea con Tecnecio-99m Sestamibi con SPECT/CT (localización del adenoma)', 'Ecografía paratiroidea de cuello de alta resolución', 'Densitometría ósea DEXA (pérdida preferente en radio distal)'],
    differential: ['Hipercalcemia maligna tumoral (metástasis óseas o secreción de PTHrP con PTH intacta suprimida)', 'Intoxicación por vitamina D', 'Sarcoidosis'],
    firstLine: [
      { drug: 'Tratamiento curativo definitivo: Paratiroidectomía quirúrgica mínimamente invasiva', dose: 'Exéresis del adenoma paratiroideo guiada por radioisotopo y dosaje de PTH intraoperatoria', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en todo paciente sintomático, calcio > 1 mg/dL sobre el normal, eGFR < 60 mL/min, edad < 50 años o T-score < -2.5' }
    ],
    alternatives: [
      { drug: 'Cinacalcet (calcimimético)', dose: '30 a 90 mg/día VO fraccionado con alimentos', route: 'VO con comidas', freq: 'c/12h', notes: 'En pacientes que no son candidatos a cirugía o con hiperparatiroidismo secundario en diálisis' },
      { drug: 'Ácido Zoledrónico EV', dose: '4 mg EV en infusión de 15 minutos con hidratación vigorosa previa', route: 'EV infusión', freq: 'Dosis rescate', notes: 'Manejo hospitalario de hipercalcemia severa sintomática' }
    ],
    nonPharm: ['Hidratación oral abundante (2.5 a 3 litros de agua/día) para prevenir la formación de cálculos renales', 'Mantenerse activo y evitar la inmovilización prolongada en cama'],
    nursingCare: ['Monitoreo continuo de signos vitales y sensorio en hipercalcemia', 'Hidratación endovenosa vigorosa con solución salina al 0.9% para forzar la calciuria por arrastre', 'Control de diuresis horaria estricta', 'En el postoperatorio de paratiroidectomía: vigilar desarrollo del Síndrome del hueso hambriento (hipocalcemia severa por rápida captación ósea)']
  }
];

export const capitulo3: DiagnosisItem[] = capitulo3Raw.map(toDiagnosisItem);


