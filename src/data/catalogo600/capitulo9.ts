import { CatalogoEntry } from './types';

export const capitulo9: CatalogoEntry[] = [
  {
    number: 556,
    id: 'diag-556',
    title: 'Síndrome de Down (Trisomía 21 regular, translocación y mosaicismo)',
    cie10: 'Q90.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, Raras, Congénitas y Misceláneas (556-600)',
    definition: 'La aneuploidía cromosómica autosómica más común en recién nacidos vivos (1 de cada 700 nacimientos), caracterizada por la presencia de una tercera copia total o parcial del cromosoma 21 (95% no disyunción meiótica materna asociada a edad materna avanzada >35 años, 4% translocación robertsoniana balanceada familiar y 1% mosaicismo). Cursa con fenotipo dismórfico característico, discapacidad intelectual y malformaciones sistémicas.',
    symptoms: ['FENOTIPO CRANEOFACIAL DISMÓRFICO CARACTERÍSTICO:', '- Braquicefalia con occipucio aplanado y puente nasal ancho y deprimido', '- Hendiduras palpebrales oblicuas hacia arriba con pliegues epicánticos nasales internos', '- Manchas de Brushfield (pequeños puntos blancos grisáceos en la periferia del iris)', '- Pabellones auriculares pequeños de implantación baja con conducto auditivo estrecho', '- Macroglosia relativa con lengua fisurada protruyente y boca pequeña', '- Cuello corto y ancho con exceso de piel en la nuca en el recién nacido', 'HALLAZGOS FÍSICOS Y MOTORES:', '- HIPOTONÍA MUSCULAR GENERALIZADA MARCADA E HIPERLAXITUD ARTICULAR UNIVERSAL', '- PLIEGUE PALMAR TRANSVERSO ÚNICO BILATERAL ("línea simiesca")', '- Clinodactilia del 5to dedo (incurvación hacia adentro) y surco plantar amplio entre el 1er y 2do dedo del pie ("signo de la sandalia")', 'MALFORMACIONES CONGÉNITAS ASOCIADAS GRAVES:', '- CARDIOPATÍAS CONGÉNITAS (en 40-50%): Canal auriculoventricular completo (defecto del septo AV), CIV, CIA', '- MALFORMACIONES DIGESTIVAS (en 5-10%): Atresia duodenal (signo de la doble burbuja), Enfermedad de Hirschsprung', '- ENFERMEDAD TIROIDEA: Hipotiroidismo congénito o autoinmune (en >30-40%)', '- RIESGO MULTIPLICADO DE LEUCEMIA INFANTIL (Leucemia mieloide aguda megacarioblástica y LLA infantil)', '- Desarrollo precoz universal de neuropatología de ENFERMEDAD DE ALZHEIMER a partir de los 40 años'],
    redFlags: ['INESTABILIDAD ATLANTOAXIAL (subluxación C1-C2 por hiperlaxitud ligamentosa con riesgo de compresión medular)', 'Cardiopatía congénita con hipertensión pulmonar precoz'],
    criteria: 'Criterios clínicos de Hall MÁS confirmación obligatoria mediante CARIOTIPO CITOGENÉTICO CON BANDEO G.',
    labTests: ['CARIOTIPO EN SANGRE PERIFÉRICA OBLIGATORIO (47,XX,+21 o 47,XY,+21; imprescindible para descartar translocación robertsoniana hereditaria y asesoramiento genético)', 'TSH y T4 libre neonatal y semestral de por vida', 'Hemograma periódico (descarte de reacción leucemoide transitoria neonatal y leucemia)'],
    imaging: ['ECOCARDIOGRAMA DOPPLER PEDIÁTRICO OBLIGATORIO EN TODO RECIÉN NACIDO CON DOWN en las primeras semanas de vida', 'Radiografía simple de columna cervical lateral en flexión-extensión a partir de los 3 años (descarte de inestabilidad atlantoaxial)'],
    differential: ['Hipotiroidismo congénito primario', 'Síndrome de Zellweger', 'Mosaicismo 21'],
    firstLine: [
      { drug: 'PROGRAMA DE ATENCIÓN E ESTIMULACIÓN TEMPRANA MULTIDISCIPLINAR (DESDE EL PRIMER MES DE VIDA)', dose: 'Fisioterapia motora para hipotonía, fonoaudiología para la succión/lenguaje y terapia ocupacional continua', route: 'Intervención integral', freq: 'Semanal continuado', notes: 'Maximiza el potencial cognitivo, la autonomía y la inserción escolar y social' },
      { drug: 'Corrección quirúrgica precoz de Cardiopatías Congénitas (en los primeros 3 a 6 meses)', dose: 'Cirugía cardíaca pediátrica de corrección de canal AV o CIV', route: 'Quirúrgico cardiovascular', freq: 'Procedimiento curativo', notes: 'Previene la enfermedad vascular pulmonar obstructiva irreversible (Síndrome de Eisenmenger)' }
    ],
    alternatives: [
      { drug: 'Tratamiento sustitutivo con Levotiroxina oral en hipotiroidismo', dose: 'Ajuste según niveles de TSH neonatal', route: 'VO en ayunas', freq: 'c/24h matutino de por vida', notes: 'Evita el retraso psicomotor adicional prevenible' }
    ],
    nonPharm: ['Tamizaje auditivo neonatal con Potenciales Evocados Auditivos y control oftalmológico anual (cataratas, estrabismo, miopía)'],
    nursingCare: ['ROL FUNDAMENTAL DE ENFERMERÍA EN EL CONTROL DE CRED DE NIÑOS CON SÍNDROME DE DOWN:', '1. USAR SIEMPRE LAS CURVAS DE CRECIMIENTO PERCENTILADAS ESPECÍFICAS PARA SÍNDROME DE DOWN (no utilizar las curvas de OMS de niños regulares porque tienen una talla final y peso genéticamente diferentes)', '2. Tamizaje tiroideo riguroso: vigilar que se tome TSH al nacimiento, a los 6 meses, al año y luego anualmente de por vida', '3. REGLA DE SEGURIDAD EN INESTABILIDAD ATLANTOAXIAL: Advertir a los padres que el niño con Down NO debe realizar deportes con hiperextensión o flexión violenta del cuello (gimnasia olímpica con volteretas, clavados en piscina o trampolines) sin radiografía cervical previa', '4. Apoyo emocional empático a la familia al momento del diagnóstico libre de prejuicios y fomento de su autonomía']
  },
  {
    number: 557,
    id: 'diag-557',
    title: 'Síndrome de Edwards (Trisomía 18)',
    cie10: 'Q91.3',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, Raras, Congénitas y Misceláneas (556-600)',
    definition: 'Segunda trisomía autosómica más común en nacidos vivos (1 de cada 5,000 nacimientos), caracterizada por la presencia de una copia extra del cromosoma 18. Presenta un pronóstico extremadamente severo con una tasa de mortalidad neonatal precoz superior al 90-95% en el primer año de vida debido a malformaciones cardíacas y neurológicas complejas.',
    symptoms: ['RETRASO DEL CRECIMIENTO INTRAUTERINO SEVERO (RCIU) CON BAJO PESO AL NACER Y MARCADA HIPOTROFIA', 'DISMORFIAS CRANEOFACIALES TÍPICAS:', '- Dolicocefalia con occipucio muy prominente y diámetro bifrontal estrecho', '- Microcefalia, fontanelas amplias y micrognatia severa con boca pequeña', '- Orejas displásicas de implantación baja ("orejas de fauno")', 'HALLAZGOS EN EXTREMIDADES PATOGNOMÓNICOS:', '- MANOS CON CABALGAMIENTO O PUÑOS CERRADOS CARACTERÍSTICOS: EL 2DO DEDO MONTA SOBRE EL 3ERO, Y EL 5TO DEDO MONTA SOBRE EL 4TO', '- Hipoplasia ungueal y pliegue palmar único', '- PIES EN MECEDORA O EN BALANCÍN CON TALÓN MUY PROMINENTE ("Rocker-bottom feet")', 'MALFORMACIONES VISCERALES SEVERAS (en >90-95%):', '- Cardiopatías congénitas complejas: CIV grande, ductus persistente, coartación aórtica y valvulopatías polivalvulares', '- Onfalocele, divertículo de Meckel, malrotación intestinal', '- Riñón en herradura o poliquístico'],
    redFlags: ['INSUFICIENCIA CARDÍACA CONGÉNITA Y APNEAS CENTRALES GRAVES EN EL PERIODO NEONATAL INMEDIATO'],
    criteria: 'Cariotipo citogenético confirmando trisomía 18 libre (47,XX,+18 o 47,XY,+18).',
    labTests: ['Cariotipo en sangre periférica urgente o QF-PCR rápida'],
    imaging: ['Ecocardiograma pediátrico urgente', 'Ecografía cerebral y abdominal'],
    differential: ['Síndrome de Patau (Trisomía 13)', 'Síndrome de Smith-Lemli-Opitz', 'Artrogriposis múltiple'],
    firstLine: [
      { drug: 'Cuidados Paliativos Perinatales y Soporte de Confort Centrado en la Familia', dose: 'Manejo del dolor, mantenimiento de la vía aérea, calor térmico y alimentación enteral confortable', route: 'Cuidados paliativos integrales', freq: 'Continuo', notes: 'Decisión consensuada con los padres sobre intervenciones invasivas y adecuación del esfuerzo terapéutico' }
    ],
    alternatives: [
      { drug: 'Cirugía cardíaca paliativa individualizada o corrección de atresia digestiva', dose: 'Procedimiento seleccionado en casos con supervivencia prolongada', route: 'Quirúrgico', freq: 'Puntual', notes: 'Solo tras discusión bioética multidisciplinar' }
    ],
    nonPharm: ['Acompañamiento tanatológico y soporte psicológico a los padres'],
    nursingCare: ['CUIDADOS PALIATIVOS PERINATALES DE ENFERMERÍA: Brindar un entorno cálido, silencioso y digno; facilitar el contacto piel con piel (método canguro) con la madre y el padre; permitir la creación de recuerdos (fotografías, huellas plantares en tinta)', 'Manejo de la alimentación: succionan con mucha dificultad por la micrognatia; utilizar tetinas especiales para hendiduras o sonda orogástrica suave para evitar fatiga', 'Asesoramiento genético: explicar a los padres el riesgo de recurrencia bajo (<1%) en trisomía 18 regular']
  },
  {
    number: 558,
    id: 'diag-558',
    title: 'Síndrome de Patau (Trisomía 13)',
    cie10: 'Q91.7',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trisomía autosómica grave caracterizada por la presencia de un cromosoma 13 supernumerario (1 de cada 10,000 a 20,000 nacimientos). Es el síndrome trisómico más letal (mediana de supervivencia de pocos días o semanas, con >90% de mortalidad en el primer año), caracterizado por defectos severos en la morfogénesis de la línea media cerebral, facial y cardíaca.',
    symptoms: ['DEFECTOS DE LA LÍNEA MEDIA CRANEOFACIAL PATOGNOMÓNICOS:', '- HOLOPROSENCEFALIA (fracaso de división del prosencéfalo en dos hemisferios cerebrales) con diversos grados de ciclopía, probóscide o cebocefalia', '- ANOMALÍAS OCULARES SEVERAS: Microftalmia, anoftalmia o coloboma del iris bilateral', '- LABIO LEPORINO Y PALADAR HENDIDO BILATERAL SEVERO ("fisura labiopalatina central")', '- APLASIA CUTIS CONGÉNITA: ausencia focal de piel y cuero cabelludo en el vértex parietal ("zona redondeada sin piel")', 'HALLAZGOS EN EXTREMIDADES:', '- POLIDACTILIA POSTAXIAL EN MANOS Y PIES (dedos supernumerarios en el lado del meñique)', '- Pies zambos o en mecedora con calcáneo prominente', 'MALFORMACIONES INTERNAS:', '- Cardiopatías congénitas complejas graves en >80% (CIV, CIA, tetralogía de Fallot)', '- Onfalocele gigante, riñón poliquístico y criptorquidia bilateral'],
    redFlags: ['APNEAS NEONATALES CENTRALES FRECUENTES Y PARO CARDIORESPIRATORIO PRECOZ'],
    criteria: 'Cariotipo citogenético con confirmación de trisomía 13 (47,XX,+13 o 47,XY,+13).',
    labTests: ['Cariotipo citogenético en sangre periférica urgente o microarray cromosómico'],
    imaging: ['Ecografía transfontanelar / RM cerebral (confirma holoprosencefalia)', 'Ecocardiograma urgente'],
    differential: ['Síndrome de Meckel-Gruber (encefalocele, riñones poliquísticos, polidactilia)', 'Síndrome de Edwards (Trisomía 18)', 'Síndrome de Pallister-Hall'],
    firstLine: [
      { drug: 'Cuidados de Confort y Adecuación del Esfuerzo Terapéutico (Cuidados Paliativos Neonatales)', dose: 'Medidas de confort térmico, analgesia, alimentación por sonda y contacto estrecho con la familia', route: 'Paliativo integral', freq: 'Continuo', notes: 'Foco prioritario en evitar el sufrimiento y acompañar el duelo de los padres' }
    ],
    alternatives: [
      { drug: 'Cirugía de urgencia en defectos de pared abdominal (Onfalocele)', dose: 'Cierre o colocación de silo', route: 'Quirúrgico', freq: 'Según decisión ética', notes: 'Individualizado' }
    ],
    nonPharm: ['Apoyo psicológico intensivo a la familia y asesoramiento genético reproductivo'],
    nursingCare: ['ACOMPAÑAMIENTO EN EL FINAL DE LA VIDA NEONATAL: Tratar al recién nacido con la máxima delicadeza y respeto; envolverlo en mantas suaves y cálidas; permitir que los padres y familiares cercanos lo carguen en brazos y se despidan con serenidad', 'Cuidado de la aplasia cutis en cuero cabelludo: aplicar apósitos de gasa vaselinada estériles no adherentes para evitar infecciones locales', 'Orientar a los padres sobre el asesoramiento genético para futuros embarazos']
  },
  {
    number: 559,
    id: 'diag-559',
    title: 'Síndrome de Turner (Monosomía X / 45,X0 y mosaicismo)',
    cie10: 'Q96.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, Raras, Congénitas y Misceláneas (556-600)',
    definition: 'La alteración de cromosomas sexuales más frecuente en mujeres (1 de cada 2,000 niñas nacidas vivas), caracterizada por la pérdida total o parcial del segundo cromosoma sexual (50% monosomía 45,X0 pura; 50% mosaicismo o anomalías estructurales como isocromosoma Xq). Cursa con la tríada clásica de TALLA BAJA PROPORCIONADA, DISGENESIA GONADAL ovárica con amenorrea primaria e infertilidad, y estigmas físicos característicos.',
    symptoms: ['TALLA BAJA PROPORCIONADA MARCADA (presente en >95-98% por haploinsuficiencia del gen SHOX en el cromosoma X): la niña se va alejando progresivamente del carril percentilar de crecimiento', 'DISGENESIA GONADAL OVÁRICA ("OVARIOS EN CINTILLA O ESTRIAS FIBROSAS"):', '- Falta de desarrollo puberal espontáneo (infantilismo sexual sin desarrollo mamario ni vello)', '- AMENORREA PRIMARIA (en >90% nunca tienen menstruación espontánea)', '- Infertilidad ovárica hipergonadotropa (FSH y LH muy elevadas con estrógenos indetectables)', 'ESTIGMAS FÍSICOS PATOGNOMÓNICOS:', '- CUELLO ALADO O PTERIGIUM COLLI (pliegues membranosos cutáneos laterales en el cuello)', '- LINFEDEMA CONGÉNITO NO DEPRESIVO DE MANOS Y PIES EN EL PERIODO NEONATAL ("manos y pies hinchados en recién nacidas")', '- Línea de implantación del cabello posterior muy baja en la nuca', '- TÓRAX ANCHO "EN ESCUDO O EN CORAZA" con HIPERTELORISMO MAMARIO (pezones muy separados)', '- Cúbito valgo en codos y acortamiento del 4to metacarpiano de las manos', 'MALFORMACIONES CARDIOVASCULARES CONGÉNITAS GRAVES (en 30-40%):', '- VÁLVULA AÓRTICA BICÚSPIDE (en 30%) y COARTACIÓN DE LA AORTA (en 10-15%)', '- RIESGO ELEVADO DE DISECCIÓN AÓRTICA AGUDA EN LA ADULTEZ', 'Enfermedades autoinmunes asociadas: Tiroiditis de Hashimoto (en 30-40%) y Enfermedad Celíaca'],
    redFlags: ['DISECCIÓN DE AORTA EN ADULTAS JÓVENES (especialmente durante el embarazo o con hipertensión severa)', 'Coartación aórtica neonatal descompensada con pulsos femorales abolidos'],
    criteria: 'Cariotipo citogenético confirmando la ausencia de un cromosoma X (45,X o líneas celulares mosaico).',
    labTests: ['CARIOTIPO EN SANGRE PERIFÉRICA CON ANÁLISIS DE AL MENOS 30 METAFASES (obligatorio para descartar mosaicismo con presencia de material del cromosoma Y, que confiere alto riesgo de GONADOBLASTOMA maligno)', 'FSH y LH séricas elevadas (hipogonadismo hipergonadotropo)', 'TSH, T4 libre y anticuerpos anti-TPO anuales'],
    imaging: ['ECOCARDIOGRAMA DOPPLER PEDIÁTRICO Y ANGIO-RM DE AORTA OBLIGATORIA (evalúa válvula bicúspide y coartación aórtica)', 'Ecografía pélvica ginecológica (útero infantil pequeño con ovarios invisibles o en cintilla)'],
    differential: ['Síndrome de Noonan (afecta a ambos sexos, mutación PTPN11, cursa con estenosis pulmonar y cariotipo normal)', 'Disgenesia gonadal pura 46,XX', 'Talla baja familiar'],
    firstLine: [
      { drug: 'HORMONA DE CRECIMIENTO RECOMBINANTE HUMANA (rhGH / Somatropina)', dose: '0.045 a 0.050 mg/kg/día (aproximadamente 1.4 mg/m2/día) mediante inyección subcutánea diaria nocturna, iniciando precozmente (a partir de los 4 a 6 años) hasta el cierre epifisario', route: 'Subcutánea nocturna', freq: 'c/24h nocturna', notes: 'Incrementa la talla adulta final en 7 a 10 centímetros; estándar mundial de referencia' },
      { drug: 'TERAPIA DE INDUCCIÓN Y REEMPLAZO HORMONAL CON ESTRÓGENOS Y PROGESTÁGENOS', dose: 'Inicio con 17-beta-estradiol transdérmico a dosis muy bajas a partir de los 11-12 años para inducir desarrollo mamario fisiológico gradual, asociando Progesterona natural micronizada cíclica tras 2 años para proteger el endometrio', route: 'Transdérmica / VO', freq: 'Cíclica mensual de por vida', notes: 'Permite el desarrollo puberal completo, menstruaciones cíclicas regulares y previene la osteoporosis precoz' }
    ],
    alternatives: [
      { drug: 'Gonadectomía profiláctica quirúrgica laparoscópica (Extirpación de estrías gonadales)', dose: 'MANDATORIA si el cariotipo demuestra presencia de secuencias del gen SRY o fragmentos del cromosoma Y', route: 'Quirúrgico laparoscópico', freq: 'Procedimiento preventivo', notes: 'Elimina el riesgo >30% de transformación maligna a gonadoblastoma o disgerminoma' }
    ],
    nonPharm: ['Monitoreo ecocardiográfico periódico del diámetro de la raíz aórtica para prevención de disección aórtica', 'Donación de ovocitos con fecundación in vitro para maternidad futura'],
    nursingCare: ['DETECCIÓN DE SÍNDROME DE TURNER EN EL CONTROL DE CRED DE NIÑAS: Si una niña presenta desaceleración del crecimiento en la curva de talla percentilada por debajo del percentil 3, o si una recién nacida tiene edema indurado en el dorso de los pies y manos con cuello ancho, coordinar de inmediato un cariotipo en sangre', 'Educación para la autoinyección de Somatropina: enseñar a la niña y a los padres la técnica de inyección subcutánea con pluma dosificadora en muslos o abdomen antes de acostarse', 'Monitoreo de presión arterial en ambos brazos y palpación de pulsos femorales en cada control de enfermería']
  },
  {
    number: 560,
    id: 'diag-560',
    title: 'Síndrome de Klinefelter (47,XXY)',
    cie10: 'Q98.4',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'La aneuploidía cromosómica sexual más frecuente en varones (1 de cada 500 a 1,000 varones nacidos vivos), causada por la presencia de uno o más cromosomas X supernumerarios (80-85% cariotipo clásico 47,XXY por no disyunción meiótica materna o paterna). Es la causa genética más común de HIPOGONADISMO PRIMARIO E INFERTILIDAD MASCULINA en el adulto, con un subdiagnóstico masivo superior al 60-70%.',
    symptoms: ['TALLA ALTA DESPROPORCIONADA CON HÁBITO EUNUCOIDE (envergadura de brazos mayor que la altura con extremidades inferiores desproporcionadamente largas)', 'TESTÍCULOS PEQUEÑOS Y DUROS PATOGNOMÓNICOS (volumen testicular <4 mL bilateral o tamaño menor a una aceituna pequeña tras la pubertad)', 'GINECOMASTIA BILATERAL EN EL VARÓN ADOLESCENTE O ADULTO (en 40-50%, que confiere un riesgo multiplicado por 20 a 50 de Cáncer de Mama masculino)', 'Escasez o ausencia de vello facial, corporal y axilar con distribución ginecoide del vello pubiano (triángulo de base superior)', 'Masa muscular disminuida con distribución centrípeta de grasa corporal y tendencia a la obesidad abdominal', 'AZOOSPERMIA COMPLETA (ausencia total de espermatozoides en semen) con infertilidad conyugal primaria (motivo de consulta más frecuente)', 'Déficits leves del neurodesarrollo: retraso en la adquisición del habla en la infancia, dificultades en la lectoescritura (dislexia) y timidez social'],
    redFlags: ['CÁNCER DE MAMA EN EL VARÓN: nódulo palpable duro unilateral retroareolar en un varón con Klinefelter (exige mamografía y biopsia)', 'Osteoporosis precoz y fracturas por déficit androgénico severo no tratado'],
    criteria: 'Cariotipo citogenético confirmando 47,XXY en sangre periférica.',
    labTests: ['PERFIL HORMONAL HIPOGONADOTROPO TÍPICO:', '  * Testosterona total sérica baja o en el límite inferior normal', '  * FSH sérica marcadamente elevada (por destrucción de túbulos seminíferos y células de Sertoli)', '  * LH sérica elevada (por disfunción de células de Leydig)', 'Espermatograma completo: azoospermia secretora'],
    imaging: ['Ecografía testicular (testículos pequeños atróficos simétricos <2-3 cm)', 'Densitometría ósea DEXA (evalúa osteopenia/osteoporosis lumbar y femoral)'],
    differential: ['Hipogonadismo hipogonadotropo (Kallmann: FSH y LH bajas con anosmia)', 'Síndrome de Marfan (hábito eunucoide pero testículos normales y anomalías oculares)', 'Ginecomastia puberal idiopática transitoria'],
    firstLine: [
      { drug: 'TERAPIA DE REEMPLAZO HORMONAL SUSTITUTIVA CON TESTOSTERONA DE POR VIDA (TRT)', dose: 'Undecanoato de Testosterona 1000 mg IM profunda cada 10 a 14 semanas (o Gel de Testosterona al 1% transdérmico 50 mg diario continuo)', route: 'IM depot / Tópica transdérmica', freq: 'Trimestral IM o diario tópico', notes: 'ESTÁNDAR CURATIVO SINTOMÁTICO: Desarrolla caracteres sexuales secundarios masculinos, masa muscular, vello, mejora la densidad ósea, la libido, energía vital y estado anímico' }
    ],
    alternatives: [
      { drug: 'Microdisección Testicular para Extracción de Espermatozoides (Micro-TESE) + ICSI', dose: 'Búsqueda microquirúrgica de focos residuales de espermatogénesis en el testículo', route: 'Quirúrgico reproductivo', freq: 'Procedimiento de fertilidad', notes: 'Permite lograr hijos biológicos propios en hasta un 40-50% de varones con 47,XXY mediante fertilización in vitro' },
      { drug: 'Mastectomía subcutánea reductora o Cirugía de Ginecomastia', dose: 'Resección quirúrgica del tejido glandular mamario doloroso o desfigurante', route: 'Quirúrgico plástico', freq: 'Procedimiento electivo', notes: 'Mejora la autoestima y elimina el riesgo futuro de cáncer de mama masculino' }
    ],
    nonPharm: ['Apoyo psicopedagógico temprano en escolares con dificultades del lenguaje'],
    nursingCare: ['DETECCIÓN DE KLINEFELTER EN LA CONSULTA DE ADOLESCENTES: Ante un adolescente varón con talla alta desproporcionada, timidez extrema, bajo rendimiento escolar y ginecomastia bilateral, palpar suavemente el tamaño testicular; si los testículos son duros y miden menos de 2 cm, derivar a endocrinología para cariotipo', 'Monitoreo de seguridad con Testosterona: control semestral de hematocrito (la testosterona puede inducir poliglobulia), perfil lipídico y PSA prostático en mayores de 45 años', 'Autoexploración mamaria en el varón con Klinefelter: enseñar a palpar periódicamente sus mamas para detectar nódulos indurados precoces']
  },
  {
    number: 561,
    id: 'diag-561',
    title: 'Fibrosis quística (Mucoviscidosis / Mutación del gen CFTR)',
    cie10: 'E84.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Enfermedad genética autosómica recesiva multisistémica grave y potencialmente letal, caracterizada por mutaciones en el gen CFTR (cromosoma 7q31) que codifica el canal regulador de la conductancia transmembrana de cloro y bicarbonato. La mutación más prevalente a nivel mundial es la deleción DeltaF508 (70%). Produce secreciones mucosas espesas, deshidratadas y viscosas que obstruyen el árbol respiratorio, los conductos pancreáticos, el intestino y la vía biliar.',
    symptoms: ['COMPROMISO RESPIRATORIO CRÓNICO Y PROGRESIVO (principal causa de morbilidad y muerte):', '- TOS CRÓNICA PRODUCTIVA PERSISTENTE CON EXPECTORACIÓN PURULENTA MUY ESPESA Y VISCOSA', '- Bronquiectasias cilíndricas y saculares difusas bilaterales irreversibles', '- COLONIZACIÓN E INFECCIONES PULMONARES RECURRENTES POR PSEUDOMONAS AERUGINOSA Y STAPHYLOCOCCUS AUREUS', '- Sinusitis crónica refractaria y Poliposis nasal bilateral masiva en niños pequeños', '- Acropaquias o dedos en palillo de tambor e insuficiencia respiratoria crónica con cor pulmonale', 'COMPROMISO DIGESTIVO Y NUTRICIONAL:', '- ILEO MECONIAL NEONATAL (obstrucción intestinal en las primeras 24-48h de vida por meconio espeso e impactado en 15-20% de recién nacidos)', '- INSUFICIENCIA PANCREÁTICA EXOCRINA UNIVERSAL (en >85-90%): ESTEATORREA CRÓNICA (deposiciones voluminosas, brillantes, grasientas, pastosas y sumamente fétidas)', '- FALLA DE MEDRO GRAVE con desnutrición calórico-proteica severa y déficit de vitaminas liposolubles (A, D, E y K)', '- DIABETES RELACIONADA CON LA FIBROSIS QUÍSTICA (DRFQ por destrucción fibrótica de islotes pancreáticos en adultos jóvenes)', '- Cirrosis biliar focal y prolapso rectal en niños', 'COMPROMISO GENITAL: Agenesia Congénita Bilateral de Conductos Deferentes (CBAVD) con azoospermia e infertilidad en >98% de varones'],
    redFlags: ['AISLAMIENTO DE PSEUDOMONAS AERUGINOSA O COMPLEJO BURKHOLDERIA CEPACIA EN ESPUTO (acelera el declive de la función pulmonar FEV1)'],
    criteria: 'Criterios diagnósticos: presencia de características clínicas típicas MÁS TEST DEL SUDOR POSITIVO con cloro en sudor >=60 mEq/L en dos ocasiones separadas (o detección de 2 mutaciones causales de CFTR).',
    labTests: ['TEST DEL SUDOR POR IONTOFORESIS CON PILOCARPINA (ESTÁNDAR DE ORO DIAGNÓSTICO): Cloro en sudor >=60 mmol/L confirma Fibrosis Quística (normal <30 mmol/L)', 'Tamizaje neonatal mediante Tripsina Inmunorreactiva (TIR) en papel de filtro neonatal (gotita del talón)', 'Estudio genético molecular de mutaciones de CFTR (búsqueda de DeltaF508)', 'Cultivo microbiológico cuantitativo seriado de esputo profundo'],
    imaging: ['TC de tórax de alta resolución (demuestra bronquiectasias precoces en anillo de sello, atrapamiento aéreo e impactaciones mucosas)'],
    differential: ['Discinesia ciliar primaria (Síndrome de Kartagener con situs inversus)', 'Asma grave refractaria', 'Inmunodeficiencia común variable', 'Enfermedad celíaca'],
    firstLine: [
      { drug: 'MODULADORES DE LA PROTEÍNA CFTR DE ALTA EFICACIA (TRIKAFTA / KAFTRIO - REVOLUCIÓN HISTÓRICA MUNDIAL)', dose: 'Elexacaftor + Tezacaftor + Ivacaftor oral diario con alimentos grasos en pacientes >=2 años con al menos una mutación DeltaF508', route: 'VO con comidas grasas', freq: 'c/12-24h diario continuo', notes: 'CAMBIÓ RADICALMENTE EL DESTINO DE LA ENFERMEDAD: Corrige el defecto molecular básico celular; incrementa el FEV1 en >15%, reduce exacerbaciones en >80%, normaliza el test del sudor y alarga la esperanza de vida a décadas normales' },
      { drug: 'Fisioterapia Respiratoria Diaria Estructurada + Mucolíticos Inhalados (Dornasa Alfa / Pulmozyme)', dose: 'Dornasa alfa recombinante humana (DNasa) 2.5 mg inhalado diario mediante nebulizador ultrasónico o solución salina hipertónica al 7% inhalada', route: 'Inhalatoria nebulizada', freq: 'c/24h diario de por vida', notes: 'Rompe el ADN de los neutrófilos muertos licuando las secreciones viscosas para expulsarlas' },
      { drug: 'TERAPIA DE REEMPLAZO ENZIMÁTICO PANCREÁTICO (TREP / Pancreatina microesferas gastrorresistentes)', dose: 'Microesferas de Pancreatina (1000 a 2500 UI de lipasa/kg por comida principal y mitad en meriendas) ingeridas con los primeros bocados', route: 'VO con alimentos', freq: 'Con todas las comidas de por vida', notes: 'Restaura la digestión y absorción de grasas permitiendo un crecimiento ponderal normal' }
    ],
    alternatives: [
      { drug: 'Antibioticoterapia Inhalada Crónica de Mantenimiento para Pseudomonas: Tobramicina inhalada o Colistimetato', dose: 'Tobramicina en solución para inhalación 300 mg nebulizado cada 12 horas en ciclos alternos de 28 días de tratamiento y 28 días de descanso', route: 'Inhalatoria nebulizada', freq: 'c/12h en ciclos mensuales', notes: 'Frena la carga bacteriana de Pseudomonas retrasando el daño pulmonar irreversible' },
      { drug: 'Trasplante Bipulmonar', dose: 'Trasplante de ambos pulmones en enfermedad terminal con FEV1 <25-30%', route: 'Quirúrgico trasplante', freq: 'Procedimiento de rescate', notes: 'Supervivencia >60-70% a 5 años en casos terminales' }
    ],
    nonPharm: ['Suplementación diaria de Vitaminas Liposolubles (ADEK) en formulaciones hidrosolubles y dieta hipercalórica e hipergrasa (130-150% de calorías recomendadas) con suplementos de sal en verano'],
    nursingCare: ['EDUCACIÓN SOBRE LA SECUENCIA EXACTA DE LA TERAPIA INHALATORIA DE ENFERMERÍA:', '  * 1. Broncodilatador inhalado (Salbutamol) para abrir la vía aérea', '  * 2. Mucolítico inhalado (Dornasa alfa o Suero Hipertónico al 7%) para licuar el moco', '  * 3. SESIÓN DE FISIOTERAPIA RESPIRATORIA CON DISPOSITIVO OSCILATORIO PEP (Flutter o Acapella) para toser y expectorar las flemas sueltas', '  * 4. Antibiótico inhalado (Tobramicina o Colistina) AL FINAL DE TODO con el pulmón limpio para que penetre profundamente', 'Administración correcta de enzimas pancreáticas: NUNCA triturar ni disolver las microesferas de pancreatina en alimentos calientes; deben tomarse enteras con las comidas o mezcladas con compota de manzana fría', 'Suplementación de sal: añadir sal común a los alimentos en lactantes y niños en climas cálidos para prevenir la deshidratación por pérdida de sal en sudor']
  },
  {
    number: 562,
    id: 'diag-562',
    title: 'Hemofilia A y B congénita (Déficit de Factor VIII y Factor IX)',
    cie10: 'D66 / D67',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Coagulopatía congénita hemorrágica hereditaria ligada al cromosoma X caracterizada por la deficiencia cuantitativa o funcional del FACTOR VIII de la coagulación (HEMOFILIA A, la más común en el 85%) o del FACTOR IX (HEMOFILIA B / Enfermedad de Christmas en el 15%). La padecen casi exclusivamente los varones transmitida por mujeres portadoras. Se clasifica según el nivel de factor plasmático en: Grave (<1% de factor normal), Moderada (1 a 5%) y Leve (5 a 40%).',
    symptoms: ['EN HEMOFILIA GRAVE (<1% DE FACTOR): HEMORRAGIAS ESPONTÁNEAS GRAVES DESDE EL PRIMER AÑO DE VIDA:', '- HEMARTROSIS RECURRENTES ESPONTÁNEAS PATOGNOMÓNICAS (sangrado intraarticular masivo en rodillas en 45%, codos en 30%, tobillos y hombros)', '- La articulación luce inflamada, caliente, tumefacta, a tensión extrema y extraordinariamente dolorosa', '- ARTROPATÍA HEMOFÍLICA CRÓNICA DEGENERATIVA DESTRUCTIVA: la hemosiderina destruye el cartílago articular provocando anquilosis, deformidad ósea y discapacidad motora permanente si no hay profilaxis', '- HEMATOMAS MUSCULARES PROFUNDOS ESPONTÁNEOS (en psoas ilíaco o pantorrillas con riesgo de Síndrome Compartimental agudo)', '- Sangrado prolongado y profuso tras heridas menores, cirugías dentales o circuncisión neonatal', '- HEMORRAGIA INTRACRANEAL ESPONTÁNEA O TRAS TRAUMATISMO MÍNIMO (principal causa de muerte por sangrado)', 'En Hemofilia Leve: sangrados exclusivamente tras cirugías mayores, extracciones dentales o traumatismos graves'],
    redFlags: ['DESARROLLO DE INHIBIDORES (aloanticuerpos neutralizantes anti-Factor VIII en hasta un 30% de hemofílicos A graves tratados): neutralizan el factor transfundido haciendo ineficaz el tratamiento'],
    criteria: 'TTPa marcadamente prolongado que corrige con plasma normal MÁS dosaje coagulométrico de Factor VIII o Factor IX <40%.',
    labTests: ['TIEMPO DE TROMBOPLASTINA PARCIAL ACTIVADO (TTPa): marcadamente prolongado con Tiempo de Protrombina (TP) e INR rigurosamente normales', 'Dosaje coagulométrico específico de Factor VIII y Factor IX en plasma', 'Test de Bethesda para cuantificar Inhibidores circulantes'],
    imaging: ['Ecografía articular con protocolo HEAD-US (detecta hemartrosis precoz y sinovitis crónica antes de la destrucción del cartílago)'],
    differential: ['Enfermedad de Von Willebrand (afecta a ambos sexos, sangrado predominantemente mucoso)', 'Déficit de factor XI', 'Coagulopatía por consumo'],
    firstLine: [
      { drug: 'TRATAMIENTO PROFILÁCTICO DE ELECCIÓN EN HEMOFILIA A CON O SIN INHIBIDORES: Emicizumab subcutáneo (Hemlibra)', dose: 'Dosis de carga de 3 mg/kg SC semanal durante 4 semanas, seguido de mantenimiento con 1.5 mg/kg semanal (o 3 mg/kg cada 2 semanas o 6 mg/kg mensual SC)', route: 'Subcutánea preventiva', freq: 'Semanal / Quincenal / Mensual', notes: 'REVOLUCIÓN HISTÓRICA: Anticuerpo monoclonal biespecífico humanizado que imita la función del factor VIII uniendo el factor IXa con el factor X; reduce los sangrados a prácticamente CERO mediante una simple inyección subcutánea' },
      { drug: 'Concentrados de Factor Recombinante o Plasmático de Factor VIII o Factor IX en Profilaxis Clásica o Demanda', dose: 'En Hemofilia A: Factor VIII 25 a 40 UI/kg EV 3 veces por semana; en hemorragia activa mayor/cirugía: bolo de 50 UI/kg EV para alcanzar nivel del 100%', route: 'EV en bolo lento', freq: 'Según protocolo profiláctico o rescate', notes: 'Reemplaza el factor ausente' }
    ],
    alternatives: [
      { drug: 'Agentes Puente (Bypassing agents) en Pacientes con Inhibidores: Factor VIIa Recombinante (Novoseven) o CCPa (Feiba)', dose: 'Factor VII activado recombinante (rFVIIa) 90 mcg/kg EV cada 2 horas hasta hemostasia', route: 'EV', freq: 'c/2h según sangrado', notes: 'Activa directamente el factor X puenteando la necesidad de factor VIII' },
      { drug: 'Desmopresina (DDAVP) en Hemofilia A Leve', dose: '0.3 mcg/kg EV o subcutánea antes de cirugías menores', route: 'EV / SC', freq: 'Puntual', notes: 'Libera reservas endógenas de Factor VIII y factor von Willebrand' }
    ],
    nonPharm: ['REGLA RICE INMEDIATA EN HEMARTROSIS AGUDA: Reposo articular (Rest), Hielo local indirecto (Ice), Compresión elástica suave (Compression) y Elevación de la extremidad (Elevation)'],
    nursingCare: ['SEGURIDAD VITAL EN EL PACIENTE HEMOFÍLICO DE ENFERMERÍA:', '1. PROHIBICIÓN ABSOLUTA DE INYECCIONES INTRAMUSCULARES (las inyecciones IM provocan hematomas musculares masivos profundos y síndrome compartimental; todas las vacunas del esquema nacional DEBEN ADMINISTRARSE POR VÍA SUBCUTÁNEA con aguja fina 25G y compresión firme durante 5 minutos)', '2. CONTRAINDICADA TOTALMENTE LA ASPIRINA Y AINEs (bloquean la función plaquetaria provocando hemorragias incontrolables; usar solo Paracetamol o tramadol)', '3. ANTE CUALQUIER GOLPE EN LA CABEZA: INFUNDIR FACTOR INMEDIATAMENTE AL 100% ANTES DE ESPERAR LA TOMOGRAFÍA; el retraso de horas para una TC puede causar la muerte por sangrado intracraneal', '4. Educación sobre venopunción periférica suave y hemostasia compresiva prolongada (>5-10 min)']
  },
  {
    number: 563,
    id: 'diag-563',
    title: 'Enfermedad de Von Willebrand (Tipos 1, 2 y 3)',
    cie10: 'D68.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'El trastorno hemorrágico hereditario más común en la especie humana (afecta al 1% de la población mundial en ambos sexos de forma autosómica), caracterizado por la deficiencia cuantitativa o defecto funcional del FACTOR VON WILLEBRAND (FvW), glicoproteína multimérica que media la adhesión plaquetaria inicial al subendotelio vascular y actúa como proteína transportadora estabilizadora del Factor VIII. Se divide en Tipo 1 (déficit cuantitativo parcial leve en 70-80%), Tipo 2 (defecto cualitativo) y Tipo 3 (ausencia total cuantitativa grave).',
    symptoms: ['DIÁTESIS HEMORRÁGICA DE PREDOMINIO MUCOCUTÁNEO (hemostasia primaria alterada):', '- EPISTAXIS FRECUENTES, PROFUSAS Y ESPONTÁNEAS que duran más de 10-15 minutos en la infancia', '- SANGRADO GINGIVAL FÁCIL AL CEPILLARSE LOS DIENTES', '- MENORRAGIAS GRAVES E INCAPACITANTES ("menstruaciones muy abundantes con coágulos que manchan la ropa y duran más de 7 días, causando anemia ferropénica crónica en mujeres jóvenes")', '- Hematomas y equimosis cutáneas espontáneas ante mínimos roces', '- SANGRADO PROLONGADO EXCESIVO TRAS EXTRACCIONES DENTALES O CIRUGÍAS (amigdalectomía, cesárea)', 'En el Tipo 3 severo (ausencia total de FvW y Factor VIII <5%): hemartrosis articulares y hematomas profundos idénticos a la hemofilia'],
    redFlags: ['Hemorragia postparto masiva tardía en mujeres tras el descenso brusco de los niveles de FvW'],
    criteria: 'Disminución concordante del antígeno del FvW (FvW:Ag), actividad del cofactor de ristocetina (FvW:RCo <30-50%) y nivel de Factor VIII.',
    labTests: ['ACTIVIDAD DEL COFACTOR DE RISTOCETINA (FvW:RCo): evalúa la función de adhesión plaquetaria del factor', 'Antígeno del Factor Von Willebrand (FvW:Ag) por ELISA', 'Nivel de Factor VIII coagulante (frecuentemente disminuido en paralelo)', 'Tiempo de sangrado / Tiempo de obturación plaquetaria en PFA-100 prolongado con recuento plaquetario habitualmente normal'],
    imaging: ['No indicada'],
    differential: ['Púrpura trombocitopénica inmunitaria (PTI)', 'Hemofilia A leve (solo varones)', 'Disfunciones plaquetarias cualitativas hereditarias (Glanzmann, Bernard-Soulier)'],
    firstLine: [
      { drug: 'Tratamiento de Primera Línea en Tipo 1 Leve a Moderado: DESMOPRESINA (DDAVP)', dose: '0.3 mcg/kg EV en infusión en 30 minutos (o 300 mcg vía spray nasal concentrado Stimate en adultos >50 kg) 30 a 60 minutos antes de procedimientos quirúrgicos o ante sangrado', route: 'EV / Intranasal', freq: 'Puntual según sangrado/cirugía', notes: 'Estimula la liberación inmediata del FvW y Factor VIII almacenado en los cuerpos de Weibel-Palade endoteliales multiplicando sus niveles por 3 a 5 veces; realizar test de respuesta previo' },
      { drug: 'Antifibrinolíticos orales coadyuvantes: ÁCIDO TRANEXÁMICO oral', dose: '1000 mg (1 g) VO cada 8 horas durante 4 a 7 días (o 15-20 mg/kg cada 8h)', route: 'VO', freq: 'c/8h durante el sangrado', notes: 'TRATAMIENTO DE ELECCIÓN EN MENORRAGIAS Y CIRUGÍAS ODONTOLÓGICAS: Inhibe la fibrinólisis estabilizando el coágulo mucoso' }
    ],
    alternatives: [
      { drug: 'Concentrados de Factor con FvW y Factor VIII derivados de plasma (Humate-P o Wilate)', dose: '40 a 60 UI/kg EV de FvW:RCo antes de cirugías mayores o sangrados severos', route: 'EV en bolo', freq: 'Según hemostasia', notes: 'TRATAMIENTO DE ELECCIÓN EN TIPO 2, TIPO 3 Y TIPO 1 QUE NO RESPONDE A DDAVP' },
      { drug: 'Terapia Hormonal con Anticonceptivos Orales Combinados o DIU de Levonorgestrel', dose: 'Pauta ginecológica continua', route: 'VO / Intrauterino', freq: 'Continuo', notes: 'Control de primera línea para las menorragias incapacitantes en mujeres' }
    ],
    nonPharm: ['Evitar rigurosamente la aspirina y los AINEs'],
    nursingCare: ['CONSEJERÍA DE ENFERMERÍA EN SALUD FEMENINA Y MENORRAGIA: Educar que cambiar de compresa o tampón cada 1-2 horas durante la menstruación o sangrar más de 7 días con anemia crónica NO es normal; tamizar con escala de sangrado de Higham para descartar enfermedad de Von Willebrand', 'Precauciones con la Desmopresina (DDAVP): la DDAVP es un análogo de la vasopresina con potente efecto antidiurético; RESTRINGIR ESTRICTAMENTE LA INGESTA DE LÍQUIDOS A MENOS DE 1 LITRO durante las 24 horas posteriores a su administración para prevenir HIPONATREMIA DILUCIONAL Y CONVULSIONES', 'Enjuagues bucales con Ácido Tranexámico diluido en agua durante 2 minutos tras extracciones dentales']
  },
  {
    number: 564,
    id: 'diag-564',
    title: 'Drepanocitosis (Anemia de células falciformes / Enfermedad por Hemoglobina S)',
    cie10: 'D57.1',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Hemoglobinopatía estructural hereditaria autosómica recesiva grave causada por una mutación puntual en el gen de la beta-globina (cromosoma 11p15.5: sustitución de ácido glutámico por valina en la posición 6: HbS). En condiciones de desoxigenación, deshidratación o acidosis, la HbS polimeriza en cadenas rígidas que deforman al eritrocito en "FORMA DE HOZ O MEDIA LUNA" (hematíe falciforme), provocando HEMÓLISIS CRÓNICA INTRAVASCULAR Y EPISODIOS VASOOCLUSIVOS MICROVASCULARES DOLOROSOS.',
    symptoms: ['CRISIS VASOOCLUSIVAS DOLOROSAS AGUDAS (CVO - EL SÍNTOMA CARDINAL EN >90%):', '- ATAQUES PAROXÍSTICOS DE DOLOR ATROZ, LACERANTE E ISQUÉMICO en huesos largos, columna, tórax y articulaciones, desencadenados por frío, deshidratación, estrés o infecciones', '- DACTILITIS INFANTIL ("SÍNDROME DE MANO-PIE"): tumefacción dolorosa eritematosa aguda simétrica de manos y pies en lactantes de 6 a 24 meses de edad', 'ANEMIA HEMOLÍTICA CRÓNICA SEVERA con ictericia mucocutánea fluctuante, coluria y esplenomegalia temprana', 'ASPLENIA FUNCIONAL PROGRESIVA POR AUTOESPLENECTOMÍA (múltiples microinfartos esplénicos en los primeros 5 años de vida convierten el bazo en una masa fibrótica atrófica, con RIESGO LETAL DE SEPSIS POR BACTERIAS ENCAPSULADAS: Streptococcus pneumoniae)', 'SÍNDROME TORÁCICO AGUDO (STA - PRINCIPAL CAUSA DE MUERTE EN ADULTOS): fiebre, dolor torácico pleurítico, taquipnea, tos e infiltrado pulmonar nuevo en radiografía', 'Priapismo isquémico doloroso prolongado en varones y úlceras crónicas maleolares tórpidas en tobillos'],
    redFlags: ['SÍNDROME TORÁCICO AGUDO CON HIPOXEMIA SEVERA (emergencia médica crítica con necesidad de exanguinotransfusión)', 'ACV ISQUÉMICO EN NIÑOS (velocidades altas en Doppler transcraneal)'],
    criteria: 'Electroforesis de Hemoglobina en medio alcalino o Cromatografía Líquida de Alta Resolución (HPLC) demostrando presencia de HbS (>80% en homozigotos SS).',
    labTests: ['ELECTROFORESIS DE HEMOGLOBINA / HPLC (estándar de oro confirmatorio: detecta banda mayoritaria de HbS y ausencia de HbA)', 'Frotis de sangre periférica: abundantes DREPANOCITOS O DREPANÍCITOS (células en hoz o medialuna) y cuerpos de Howell-Jolly', 'Hemograma: anemia normocítica regenerativa con reticulocitos marcadamente elevados (>10-15%) y bilirrubina indirecta alta'],
    imaging: ['DOPPLER TRANSCRANEAL ANUAL EN NIÑOS DE 2 A 16 AÑOS (mide velocidad en arteria cerebral media: >200 cm/s indica alto riesgo de ACV)', 'Radiografía de tórax ante cualquier episodio de fiebre o dolor torácico'],
    differential: ['Talasemia mayor', 'Osteomielitis aguda por Salmonella (infección bacteriana típica en hemofílicos y drepanocíticos)', 'Artritis séptica'],
    firstLine: [
      { drug: 'FÁRMACO MODIFICADOR DE LA ENFERMEDAD DE ELECCIÓN: HIDROXIUREA (HIDROXICARBAMIDA) ORAL', dose: 'Inicio 15 a 20 mg/kg/día VO en toma única matutina, titulando hasta 30-35 mg/kg/día según recuentos hematológicos', route: 'VO diaria', freq: 'c/24h de por vida', notes: 'ESTÁNDAR MUNDIAL OBLIGATORIO: ESTIMULA LA PRODUCCIÓN DE HEMOGLOBINA FETAL (HbF); la HbF no polimeriza con la HbS, reduciendo en más del 50-70% las crisis dolorosas, el síndrome torácico agudo y la mortalidad' },
      { drug: 'MANEJO DE LA CRISIS VASOOCLUSIVA AGUDA: HIDRATACIÓN ENÉRGICA + ANALGESIA OPIOIDE PAUTADA', dose: 'Hidratación endovenosa a 1.5 veces las necesidades basales + MORFINA EV PAUTADA CADA 3-4 HORAS (o en bomba PCA)', route: 'EV en hospitalización', freq: 'Horario estricto', notes: 'El alivio del dolor es una prioridad ética; no escatimar opioides por falsos prejuicios de adicción' },
      { drug: 'PROFILAXIS ANTIBIÓTICA UNIVERSAL CON PENICILINA ORAL EN NIÑOS (DESDE LOS 2 MESES HASTA LOS 5 AÑOS)', dose: 'Penicilina V oral 125 mg cada 12 horas hasta los 3 años, luego 250 mg cada 12 horas hasta los 5 años', route: 'VO', freq: 'c/12h diario continuo', notes: 'OBLIGATORIA: Previene la sepsis neumocócica fulminante en el niño con asplenia funcional salvando miles de vidas' }
    ],
    alternatives: [
      { drug: 'Exanguinotransfusión automatizada o manual (Eritrocitaféresis)', dose: 'Recambio de glóbulos rojos buscando reducir la concentración de HbS <30%', route: 'Aféresis / Transfusión', freq: 'Procedimiento urgente', notes: 'INDICACIÓN DE EMERGENCIA en Síndrome Torácico Agudo grave, ACV isquémico agudo o priapismo refractario' },
      { drug: 'Trasplante Alogénico de Progenitores Hematopoyéticos o Terapia Génica (Casgevy / CRISPR)', dose: 'Edición génica de células madre con CRISPR/Cas9', route: 'Celular EV', freq: 'Procedimiento curativo', notes: 'PRIMERA TERAPIA CRISPR APROBADA EN EL MUNDO: Cura la drepanocitosis reactivando la hemoglobina fetal' }
    ],
    nonPharm: ['VACUNACIÓN ANTINEUMOCÓCICA CONJUGADA Y POLISACÁRIDA, MENINGOCÓCICA Y CONTRA HAEMOPHILUS INFLUENZAE B OBLIGATORIA', 'Evitar la deshidratación, el frío extremo y las alturas sin oxígeno suplementario'],
    nursingCare: ['PROTOCOLO DE MANEJO DEL DOLOR DE ENFERMERÍA EN CRISIS DREPANOCÍTICA: El dolor óseo vasooclusivo es comparable a un infarto óseo agudo masivo; administrar la analgesia opioide EN HORARIO FIJO PAUTADO CON RELOJ, NUNCA "A DEMANDA O SI EL PACIENTE LO PIDE"; evaluar con escala EVA cada hora', 'CALOR LOCAL INDIRECTO, NUNCA FRÍO: Aplicar compresas tibias en las extremidades doloridas; PROHIBIR EL HIELO O COMPRESAS FRÍAS (el frío induce vasoconstricción y falciformación masiva empeorando la isquemia)', 'Monitoreo de oximetría de pulso continua: alertar ante fiebre o saturación <95% (sospecha precoz de Síndrome Torácico Agudo)']
  },
  {
    number: 565,
    id: 'diag-565',
    title: 'Talasemias (Beta-Talasemia mayor / Anemia de Cooley y Alfa-Talasemias)',
    cie10: 'D56.1 / D56.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Grupo heterogéneo de anemias hemolíticas hereditarias autosómicas recesivas caracterizadas por la síntesis reducida o ausente de una o más cadenas de globina que componen la hemoglobina normal del adulto (HbA: alfa2-beta2). La BETA-TALASEMIA MAYOR (mutación bialélica del gen HBB en 11p) produce ausencia total de cadenas beta con acúmulo tóxico de cadenas alfa libres que precipitan destruyendo a los precursores eritroides en la médula (eritropoyesis ineficaz masiva) y hemólisis periférica severa.',
    symptoms: ['EN BETA-TALASEMIA MAYOR (debut en el primer año de vida tras el descenso fisiológico de la hemoglobina fetal):', '- ANEMIA HEMOLÍTICA GRAVE, PROFUNDA Y PROGRESIVA (Hb entre 2 y 6 g/dL con palidez cérea e ictericia)', '- DEPENDENCIA ABSOLUTA DE TRANSFUSIONES DE SANGRE CADA 2 A 4 SEMANAS PARA SOBREVIVIR', '- FENOTIPO FACIAL TALASÉMICO O "FACIES DE ROEDOR / ARDILLA": expansión masiva de la médula ósea hiperactiva dentro de los huesos craneales y faciales que provoca:', '  * Deformidad craneofacial con abombamiento frontal y parietal prominente ("cráneo en cepillo")', '  * Hipertrofia de los maxilares superiores con maloclusión dentaria severa y aplanamiento nasal', '- ESPLENOMEGALIA Y HEPATOMEGALIA GIGANTE por hematopoyesis extramedular y destrucción de hematíes', '- Fracturas patológicas óseas espontáneas por adelgazamiento de la cortical', '- Retraso marcado del crecimiento pondoestatural e infantilismo sexual por hemosiderosis hipofisaria', 'COMPLICACIONES POR SOBRECARGA CRÓNICA DE HIERRO (HEMOSIDEROSIS SECUNDARIA TRANSFUSIONAL): Insuficiencia cardíaca congestiva con arritmias letales (principal causa de muerte), cirrosis hepática y diabetes mellitus bronceada'],
    redFlags: ['MIOCARDIOPATÍA POR SOBRECARGA DE HIERRO CARDÍACO (T2* en RM cardíaca <10 ms: riesgo inminente de muerte súbita)'],
    criteria: 'Microcitosis extrema desproporcionada con anemia y electroforesis de hemoglobina demostrando aumento masivo de Hemoglobina Fetal (HbF >90%) y Hemoglobina A2.',
    labTests: ['ELECTROFORESIS DE HEMOGLOBINA / HPLC (en beta-talasemia mayor: ausencia o trazas de HbA con HbF >70-90% y HbA2 elevada; en beta-talasemia menor rasgo: HbA2 >3.5%)', 'Hemograma completo: ANEMIA MICROCITICA HIPOCRÓMICA EXTREMA (VCM <60-65 fL) con recuento de glóbulos rojos paradójicamente alto o normal (Índice de Mentzer <13 diferencial de ferropenia)', 'Ferritina sérica (astronómicamente elevada en multitransfundidos >2,000-5,000 ng/mL)'],
    imaging: ['RM T2* CARDÍACA Y HEPÁTICA (T2-star: técnica de referencia no invasiva para cuantificar en milisegundos los depósitos de hierro en miocardio e hígado)', 'Radiografía de cráneo: típica imagen en "CRÁNEO EN CEPILLO O EN PELO DE CEPILLO"'],
    differential: ['Anemia ferropénica severa (en ferropenia el VCM baja pero los glóbulos rojos caen y la ferritina está por los suelos; en rasgo talasémico la ferritina es normal y los hematíes están altos)', 'Anemia sideroblástica', 'Anemia de trastornos crónicos'],
    firstLine: [
      { drug: 'RÉGIMEN TRANSFUSIONAL CRÓNICO PROGRAMADO HIPERTRANSFUSIONAL', dose: 'Transfusión de concentrados de hematíes desleucocitados fenotipados (10-15 mL/kg) cada 2 a 4 semanas buscando mantener la Hemoglobina pre-transfusional estrictamente entre 9.5 y 10.5 g/dL', route: 'EV en hospital de día', freq: 'Cada 2 a 4 semanas de por vida', notes: 'Suprime la eritropoyesis ineficaz anormal evitando las deformidades óseas y permitiendo el crecimiento' },
      { drug: 'TERAPIA QUELANTE DE HIERRO DE POR VIDA (MANDATORIA TRAS LAS PRIMERAS 10-20 TRANSFUSIONES): Deferasirox oral', dose: '14 a 28 mg/kg/día VO una vez al día con agua en ayunas (comprimidos dispersables o recubiertos)', route: 'VO diaria', freq: 'c/24h continuo', notes: 'Pilar de supervivencia absoluta; excreta el hierro tóxico por heces y orina previniendo la muerte por fallo cardíaco' }
    ],
    alternatives: [
      { drug: 'Otros quelantes de hierro: Deferoxamina subcutánea continua o Deferiprona oral', dose: 'Deferoxamina 30 a 50 mg/kg/día infundido con microbomba subcutánea portátil durante 8-12 horas por las noches', route: 'Subcutánea en bomba nocturna', freq: '5-7 noches por semana', notes: 'Excelente quelante histórico; se combina con deferiprona en sobrecarga cardíaca severa' },
      { drug: 'TRASPLANTE ALOGÉNICO DE PROGENITORES HEMATOPOYÉTICOS (TAPH) O TERAPIA GÉNICA (Betibeglogene autotemcel)', dose: 'Trasplante de médula ósea de donante compatible en niños antes de que haya daño orgánico por hierro', route: 'Celular EV', freq: 'Procedimiento único curativo', notes: 'EL ÚNICO TRATAMIENTO CURATIVO TRADICIONAL; la terapia génica cura sin donante insertando el gen funcional de beta-globina' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA DE SUPLEMENTAR HIERRO (el sulfato ferroso es tóxico y mortal en pacientes talasémicos con sobrecarga férrica)'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CONTRA EL HIERRO DE ENFERMERÍA: Si en un niño o adulto detecta anemia microcítica (VCM 60) con glóbulos rojos altos, JAMÁS administrar sulfato ferroso sin dosificar Ferritina; la talasemia NO es falta de hierro y administrar hierro acelera la toxicidad cardíaca mortal', 'Manejo de la bomba de infusión de Deferoxamina: educar a los padres sobre el cebado de la jeringa, inserción de la aguja mariposa en tejido subcutáneo del abdomen y programación de la microbomba nocturna', 'Monitoreo de toxicidad de Deferasirox: control mensual de creatinina sérica y proteinuria']
  },
  {
    number: 566,
    id: 'diag-566',
    title: 'Fenilcetonuria clásica (PKU / Déficit de fenilalanina hidroxilasa)',
    cie10: 'E70.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Error innato del metabolismo de los aminoácidos autosómico recesivo caracterizado por la mutación del gen PAH (cromosoma 12q23) que codifica la enzima FENILALANINA HIDROXILASA hepática. La incapacidad para hidroxilar el aminoácido esencial fenilalanina (Phe) en tirosina provoca una acumulación tóxica masiva de fenilalanina en sangre y tejidos, con daño neurotóxico severo, retraso mental profundo irreversible y microcefalia prevenible si se detecta en el tamizaje neonatal.',
    symptoms: ['El recién nacido es COMPLETAMENTE NORMAL Y ASINTOMÁTICO AL NACIMIENTO (la placenta materna depuró la fenilalanina durante el embarazo)', 'SÍNTOMAS NEUROLÓGICOS PROGRESIVOS SIN TRATAMIENTO (a partir de los 3 a 6 meses de vida):', '- DISCAPACIDAD INTELECTUAL SEVERA Y PROFUNDA IRREVERSIBLE (CI <30-50 si no se trata)', '- Microcefalia adquirida progresiva y retraso severo del desarrollo psicomotor', '- Crisis epilépticas rebeldes y espasmos infantiles', '- Hiperactividad extrema, agresividad, movimientos estereotipados atetósicos y rasgos autistas', 'RASGOS FÍSICOS PATOGNOMÓNICOS:', '- HIPOPIGMENTACIÓN CUTÁNEA Y CAPILAR: piel muy clara, cabello rubio y ojos azules (por inhibición competitiva de la tirosinasa por exceso de fenilalanina, bloqueando la síntesis de melanina)', '- DERMATITIS ECCEMATOSA SEVERA REBELDE', '- "OLOR CORPORAL A RATÓN O MOHO" (Mousy odor) patognomónico en la orina y sudoración del lactante (debido a la excreción del metabolito ácido fenilacético)'],
    redFlags: ['SÍNDROME DE FENILCETONURIA MATERNA: mujeres con PKU que se embarazan con niveles altos de fenilalanina provocan embriopatía teratogénica en el feto sano (microcefalia, cardiopatía congénita, discapacidad)'],
    criteria: 'Nivel sérico de Fenilalanina >1200 umol/L (>20 mg/dL) con niveles de tirosina bajos y respuesta a sobrecarga de BH4.',
    labTests: ['TAMIZAJE NEONATAL UNIVERSAL MEDIANTE ESPECTROMETRÍA DE MASAS EN TÁNDEM (MS/MS) EN PAPEL DE FILTRO (talón neonatal a las 48-72h de vida tras inicio de lactancia)', 'Cuantificación exacta de aminoácidos en plasma (relación Fenilalanina/Tirosina)', 'Estudio de pterinas en orina para descartar déficit del cofactor Tetrahidrobiopterina (BH4)'],
    imaging: ['RM cerebral en pacientes no tratados (muestra desmielinización difusa de la sustancia blanca cerebral)'],
    differential: ['Déficit congénito del cofactor Tetrahidrobiopterina (BH4)', 'Tirosinemia tipo 1', 'Hiperfenilalaninemia benigna no PKU'],
    firstLine: [
      { drug: 'DIETA MÉDICA ESTRICTA RESTRINGIDA EN FENILALANINA DE POR VIDA (TRATAMIENTO CURATIVO DE ELECCIÓN)', dose: 'Inicio antes de los 7 a 10 días de vida: ELIMINACIÓN TOTAL DE ALIMENTOS CON ALTO CONTENIDO PROTEICO (carnes, aves, pescados, huevos, lácteos, legumbres, soja, frutos secos y edulcorante ASPARTAMO), sustituidos por una FÓRMULA MÉDICA ESPECIAL DE AMINOÁCIDOS LIBRE DE FENILALANINA suplementada con tirosina, vitaminas y minerales', route: 'Nutricional oral', freq: 'Continuo de por vida', notes: 'PREVIENE AL 100% EL DAÑO CEREBRAL: Si la dieta se inicia en las primeras dos semanas de vida, el niño se desarrolla con un coeficiente intelectual completamente normal y vida plena' }
    ],
    alternatives: [
      { drug: 'Sapropterina diclorhidrato oral (BH4 sintético / Kuvan)', dose: '10 a 20 mg/kg/día VO una vez al día con las comidas', route: 'VO', freq: 'c/24h', notes: 'Actúa como chaperona farmacológica aumentando la actividad de la enzima residual en pacientes con formas sensibles a BH4; permite flexibilizar la dieta' },
      { drug: 'Pegvaliase subcutánea (Palynziq / Enzima Fenilalanina amonio liasa pegilada)', dose: 'Inyecciones subcutáneas diarias de mantenimiento en adultos con PKU descontrolada', route: 'Subcutánea', freq: 'Diario', notes: 'Degrada la fenilalanina directamente permitiendo la ingesta de proteínas' }
    ],
    nonPharm: ['Monitoreo semanal de niveles sanguíneos de fenilalanina en sangre seca en papel de filtro (objetivo 120 a 360 umol/L)'],
    nursingCare: ['IMPORTANCIA VITAL DEL TAMIZAJE NEONATAL EN EL TALÓN DE ENFERMERÍA: Realizar la toma de muestra en papel de filtro (prueba del talón) entre las 48 horas y los 5 días de vida del recién nacido tras haber recibido alimentación con leche; el diagnóstico precoz antes de los 10 días de vida es la línea divisoria entre un niño con vida completamente normal y un niño con retraso mental severo de por vida', 'PROHIBICIÓN ESTRICTA DEL EDULCORANTE ASPARTAMO: Educar a la familia a leer meticulosamente todas las etiquetas de alimentos, yogures, gelatinas y jarabes pediátricos; el aspartamo se metaboliza en fenilalanina pura y es neurotóxico', 'PKU materna: educar a las mujeres con PKU que deben iniciar control dietético estricto meses ANTES de concebir un embarazo']
  },
  {
    number: 567,
    id: 'diag-567',
    title: 'Galactosemia clásica neonatal (Déficit de Galactosa-1-Fosfato Uridiltransferasa / GALT)',
    cie10: 'E74.2',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Error innato del metabolismo de los carbohidratos autosómico recesivo potencialmente mortal, causado por mutaciones en el gen GALT (cromosoma 9p13) que condicionan la deficiencia profunda de la enzima GALACTOSA-1-FOSFATO URIDILTRANSFERASA. Al ingerir leche (materna o de fórmula regular que contienen lactosa: glucosa + galactosa), se acumula galactosa-1-fosfato y galactitol, altamente tóxicos para el hígado, cerebro, riñones y cristalino.',
    symptoms: ['EL LACTANTE NACE COMPLETAMENTE SANO Y DEGENERA GRAVEMENTE EN LOS PRIMEROS DÍAS TRAS INICIAR LA LACTANCIA:', '- RECHAZO TOTAL DE LAS TOMAS, VÓMITOS EXPLOSIVOS Y DIARREA TRAS LA INGESTA DE LECHE', '- PÉRDIDA RÁPIDA DE PESO Y DESHIDRATACIÓN SEVERA', '- FALLO HEPÁTICO AGUDO FULMINANTE: ICTERICIA INTENSA GRAVE, HEPATOMEGALIA MASIVA CON ASCITIS Y COAGULOPATÍA CON HEMORRAGIAS', '- SEPSIS NEONATAL FULMINANTE POR ESCHERICHIA COLI PATOGNOMÓNICA (el exceso de galactosa inhibe la función leucocitaria favoreciendo la bacteriemia por E. coli en la primera semana)', '- CATARATAS BILATERALES EN "GOTA DE ACEITE" EN EL CRISTALINO (aparecen en cuestión de días o pocas semanas por acumulación osmótica de galactitol)', '- Edema cerebral, letargo, hipotonía y convulsiones con riesgo de muerte en días'],
    redFlags: ['SEPSIS NEONATAL GRAVE POR ESCHERICHIA COLI ASOCIADA A ICTERICIA Y HEPATOMEGALIA TRAS LACTANCIA (sospechar galactosemia de inmediato)'],
    criteria: 'Confirmación bioquímica con actividad de la enzima GALT indetectable en eritrocitos y acumulación de galactosa-1-fosfato.',
    labTests: ['MEDICIÓN DE LA ACTIVIDAD ENZIMÁTICA DE GALT EN ERITROCITOS (estándar de oro confirmatorio: indetectable en clásica)', 'Sustancias reductoras en orina POSITIVAS con tiras reactivas de glucosa NEGATIVAS (la galactosa es un azúcar reductor)', 'Galactosa-1-fosfato elevada en sangre', 'Estudio molecular genético del gen GALT (mutación Q188R)'],
    imaging: ['Examen con lámpara de hendidura (demuestra cataratas bilaterales nucleares)'],
    differential: ['Atresia de vías biliares neonatal', 'Sepsis bacteriana neonatal primaria', 'Hepatitis neonatal idiopática', 'Intolerancia común a la lactosa (no produce fallo hepático ni cataratas)'],
    firstLine: [
      { drug: 'SUSPENSIÓN INMEDIATA Y DEFINITIVA DE LA LACTANCIA MATERNA Y DE TODA LECHE CON LACTOSA (URGENCIA MÉDICA)', dose: 'Retiro total de leche materna y fórmulas infantiles convencionales; sustitución inmediata por FÓRMULA INFANTIL A BASE DE SOJA O FÓRMULA LIBRE DE GALACTOSA/LACTOSA', route: 'Nutricional oral', freq: 'Inmediato continuado', notes: 'SALVA LA VIDA EN CUESTIÓN DE HORAS: Revierte el fallo hepático agudo, detiene la hemólisis y cura las cataratas incipientes' },
      { drug: 'DIETA ESTRICTA EXENTA DE GALACTOSA Y LACTOSA DE POR VIDA', dose: 'Eliminación permanente de todos los productos lácteos, quesos, mantequilla, suero de leche y fármacos con lactosa como excipiente', route: 'Nutricional', freq: 'Continuo de por vida', notes: 'Pilar de supervivencia a largo plazo' }
    ],
    alternatives: [
      { drug: 'Antibioticoterapia empírica endovenosa urgente contra Escherichia coli: Ampicilina + Gentamicina o Cefotaxima', dose: 'Tratamiento de la sepsis neonatal inmediata', route: 'EV', freq: 'Protocolo neonatal', notes: 'Mandatoria ante cualquier sospecha en recién nacidos ictéricos graves' }
    ],
    nonPharm: ['Suplementación diaria de Calcio y Vitamina D para prevenir osteopenia por la dieta libre de lácteos'],
    nursingCare: ['SUSPENSIÓN INMEDIATA DE LA LECHE MATERNA ANTE SOSPECHA: Si un recién nacido presenta ictericia intensa, hepatomegalia y vómitos tras tomar leche materna o fórmula, SUSPENDER TEMPORALMENTE LA LACTANCIA DE INMEDIATO y alimentar con fórmula de soja mientras se toma la muestra; continuar dando leche con lactosa causará cirrosis y muerte en 48 horas', 'Cuidado con los medicamentos: verificar que ningún jarabe, antibiótico o solución administrada al lactante contenga LACTOSA como excipiente edulcorante', 'Seguimiento neurológico a largo plazo: a pesar de la dieta estricta, muchos pacientes desarrollan dispraxia verbal y fallo ovárico prematuro en niñas (por síntesis endógena de galactosa)']
  },
  {
    number: 568,
    id: 'diag-568',
    title: 'Enfermedad de Gaucher (Tipos 1 no neuropático, 2 neuropático agudo y 3)',
    cie10: 'E75.2',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'La enfermedad por depósito lisosomal más común en el mundo (autosómica recesiva, mutación del gen GBA1 en 1q21), caracterizada por el déficit de la enzima lisosomal BETA-GLUCOCEREBROSIDASA (beta-glucosidasa ácida). La acumulación masiva de glucosilceramida en los lisosomas de macrófagos tisulares transforma a estos en "CÉLULAS DE GAUCHER", que infiltran de forma destructiva el bazo, hígado, médula ósea y esqueleto óseo.',
    symptoms: ['SÍNTOMAS DEL TIPO 1 (No neuropático en 90-95%):', '- ESPLENOMEGALIA MASIVA GIGANTE (el bazo puede aumentar hasta 20 a 30 veces su volumen normal ocupando todo el abdomen)', '- Hepatomegalia palpable moderada', '- PANCITOPENIA POR HIPERESPLENISMO E INFILTRACIÓN MEDULAR:', '  * Trombocitopenia marcada con hematomas, epistaxis y gingivorragias', '  * Anemia crónica con astenia y fatigabilidad', '- MANIFESTACIONES ÓSEAS DESTRUCTIVAS SEVERAS:', '  * DOLORES ÓSEOS CRÓNICOS Y "CRISIS ÓSEAS AGUDAS" (dolor óseo atroz e hiperagudo que simula osteomielitis)', '  * OSTEONECROSIS AVASCULAR DE LA CABEZA FEMORAL con colapso articular en adultos jóvenes', '  * DEFORMIDAD EN MATRAZ DE ERLENMEYER EN LA RADIOGRAFÍA DE FÉMUR DISTAL (ensanchamiento metafisario patognomónico)', 'En el Tipo 2 (infantil neuropático agudo): degeneración cerebral fulminante en el primer año de vida con trismo y muerte precoz', 'En el Tipo 3 (neuropático crónico): ataxia, mioclonías y apraxia oculomotora supranuclear sacádica horizontal'],
    redFlags: ['CRISIS ÓSEAS HIPERAGUDAS CON OSTEONECROSIS DE CADERA QUE REQUIERE CIRUGÍA PROTÉSICA PRECOZ'],
    criteria: 'Demostración de actividad reducida o nula de la enzima Beta-Glucocerebrosidasa en leucocitos de sangre periférica (<15% del valor normal).',
    labTests: ['ACTIVIDAD ENZIMÁTICA DE BETA-GLUCOSIDASA ÁCIDA EN LEUCOCITOS O FIBROBLASTOS (estándar de oro confirmatorio)', 'Biomarcador de seguimiento: Glucosilfingosina (Liso-GL1) y Quitotriosidasa sérica muy elevadas', 'Biopsia de médula ósea: presencia patognomónica de CÉLULAS DE GAUCHER (macrófagos grandes con citoplasma estriado en "PAPEL DE SEDA ARRUGADO O CEBOLLA")', 'Estudio molecular genético del gen GBA1'],
    imaging: ['Radiografía simple de fémur bilateral: típica DEFORMIDAD EN MATRAZ DE ERLENMEYER', 'RM de fémur y columna lumbar (cuantifica la infiltración de médula ósea y detecta osteonecrosis precoz)'],
    differential: ['Esplenomegalia por hipertensión portal cirrótica', 'Leucemia mieloide crónica', 'Enfermedad de Niemann-Pick'],
    firstLine: [
      { drug: 'TERAPIA DE REEMPLAZO ENZIMÁTICO (TRE) INTRAVENOSA DE POR VIDA (ESTÁNDAR MUNDIAL DE ELECCIÓN): Imiglucerasa o Velaglucerasa alfa', dose: 'Imiglucerasa 30 a 60 UI/kg EV en infusión continua cada 2 semanas de por vida', route: 'EV en infusión quincenal', freq: 'Cada 14 días de por vida', notes: 'REVOLUCIÓN BIOLÓGICA: Normaliza el tamaño del bazo y del hígado, corrige completamente la anemia y trombocitopenia y detiene la destrucción ósea' },
      { drug: 'Terapia de Reducción de Sustrato Oral (TRS): Eliglustat o Miglustat', dose: 'Eliglustat 84 mg VO cada 12 o 24 horas (según estado de metabolizador del CYP2D6)', route: 'VO diaria', freq: 'c/12-24h de por vida', notes: 'Alternativa oral de primera línea que inhibe la síntesis de glucosilceramida; evita las infusiones endovenosas en adultos' }
    ],
    alternatives: [
      { drug: 'Tratamiento analgésico potente en Crisis Óseas: Opioides EV + Hidratación', dose: 'Morfina EV en bomba durante la fase aguda', route: 'EV', freq: 'Según dolor', notes: 'Manejo hospitalario de urgencia' }
    ],
    nonPharm: ['CONTRAINDICADA LA ESPLENECTOMÍA DE RUTINA (extirpar el bazo elimina el reservorio tisular acelerando la infiltración destructiva del hígado y de los huesos)'],
    nursingCare: ['CUIDADOS DE LA INFUSIÓN DE ENZIMAS RECOMBINANTES (IMIGLUCERASA): Administrar por vía periférica en bomba de infusión durante 1 a 2 horas cada 14 días; vigilar reacciones infusionales leves (escalofríos, prurito); educar que es un tratamiento crónico que no debe interrumpirse', 'CONTRAINDICACIÓN DE LA CIRUGÍA DE BAZO: Advertir al paciente y equipo que la esplenectomía está desaconsejada en Gaucher porque agrava la enfermedad ósea', 'Manejo en crisis óseas: reposo articular absoluto, frío/calor no traumático y analgesia pautada']
  },
  {
    number: 569,
    id: 'diag-569',
    title: 'Enfermedad de Fabry (Déficit de Alfa-Galactosidasa A / Angioqueratoma corporis diffusum)',
    cie10: 'E75.2',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Enfermedad por depósito lisosomal progresiva y multisistémica hereditaria ligada al cromosoma X, producida por mutaciones en el gen GLA (Xq22) que causan la deficiencia de la enzima ALFA-GALACTOSIDASA A. La acumulación crónica progresiva de globotriaosilceramida (Gb3 / GL-3) en el endotelio vascular y células del parénquima conduce a dolor neuropático infantil, insuficiencia renal terminal, miocardiopatía hipertrófica y accidentes cerebrovasculares precoces.',
    symptoms: [
      'SÍNTOMAS CLÁSICOS EN LA INFANCIA Y ADOLESCENCIA:',
      '- ACROPARESTESIAS Y "CRISIS DE FABRY": DOLORES NEUROPÁTICOS QUEMANTES ATROCES E INVALIDANTES EN PALMAS DE MANOS Y PLANTAS DE PIES desencadenados por fiebre, calor, ejercicio físico o estrés',
      '- HIPOHIDROSIS O ANHIDROSIS (incapacidad para sudar con intolerancia extrema al calor y al ejercicio)',
      '- ANGIOQUERATOMAS CUTÁNEOS PATOGNOMÓNICOS: pequeñas pápulas puntiformes rojo-azuladas oscuras que no blanquean, agrupadas en "racimos en bañador" (ombligo, ingles, genitales, escroto y muslos)',
      '- CÓRNEA VERTICILADA (Cornea verticillata): depósitos corneales lineales en remolino café-dorado visibles en lámpara de hendidura en >95% (no afecta la visión pero es diagnóstica)',
      '- Molestias digestivas: dolor abdominal postprandial y diarreas crónicas recurrentes',
      'COMPLICACIONES TARDÍAS DEL ADULTO (30 a 50 años - CAUSA DE MUERTE PREMATURA):',
      '- ENFERMEDAD RENAL CRÓNICA PROGRESIVA: proteinuria precoz que progresa a insuficiencia renal terminal en diálisis',
      '- CARDIOMIOPATÍA HIPERTRÓFICA CONCÉNTRICA asimétrica con arritmias letales y fibrosis miocárdica',
      '- ACV ISQUÉMICO O AIT PRECOZ en adultos jóvenes menores de 40 años sin factores de riesgo'
    ],
    redFlags: ['ACV ISQUÉMICO EN ADULTOS JÓVENES (<45 AÑOS) O MIOCARDIOPATÍA HIPERTRÓFICA INEXPLICADA: TAMIZAJE OBLIGATORIO DE ENFERMEDAD DE FABRY'],
    criteria: 'Actividad de Alfa-Galactosidasa A baja o indetectable en leucocitos en varones MÁS estudio genético del gen GLA (obligatorio en mujeres portadoras donde la enzima puede ser normal).',
    labTests: [
      'ACTIVIDAD DE ALFA-GALACTOSIDASA A EN PLASMA O LEUCOCITOS (marcadamente reducida <5% en varones)',
      'Glucosilfingosina (Liso-Gb3 sérica: biomarcador de masa y respuesta terapéutica)',
      'Secuenciación genética completa del gen GLA (imprescindible en mujeres portadoras)',
      'Proteinuria de 24 horas y microalbuminuria seriada',
      'Creatinina sérica y TFG estimada (monitorización de nefropatía)'
    ],
    imaging: [
      'Resonancia magnética cardíaca con realce tardío de gadolinio (patrón característico inferolateral basal)',
      'Ecocardiograma transtorácico: hipertrofia concéntrica ventricular izquierda',
      'Resonancia magnética cerebral: hiperintensidad del pulvinar en T1 (signo del pulvinar) y lesiones isquémicas de sustancia blanca',
      'Biomicroscopía con lámpara de hendidura: depósito de córnea verticillata'
    ],
    differential: ['Artritis idiopática juvenil', 'Fiebre reumática', 'Esclerosis múltiple', 'Lupus eritematoso sistémico', 'Neuropatías periféricas idiopáticas', 'Glomerulonefritis membranosa'],
    firstLine: [
      'TERAPIA DE REEMPLAZO ENZIMÁTICO (TRE) ESPECÍFICA: Agalsidasa alfa (0.2 mg/kg IV cada 2 semanas) o Agalsidasa beta (1 mg/kg IV cada 2 semanas)',
      'TERAPIA CON CHAPERONA FARMACOLÓGICA: Migalastat 123 mg vía oral en días alternos (solo para pacientes con mutaciones susceptibles/amenables confirmadas)'
    ],
    alternatives: [
      'Control del dolor neuropático de acroparestesias: Carbamazepina (100-300 mg c/12h), Gabapentina (300-900 mg c/8h) o Pregabalina (75-150 mg c/12h)',
      'Nefroprotección intensiva: IECA (Enalapril) o ARA-II (Losartán) para control de proteinuria',
      'Cardioprotección y manejo de arritmias: betabloqueantes, implante de marcapasos o DAI si riesgo de muerte súbita'
    ],
    nonPharm: [
      'Evitar cambios bruscos de temperatura ambiental, calor sofocante, fiebre alta y ejercicio extenuante no controlado (gatilladores de crisis)',
      'Premedicación protocolizada con antihistamínicos y antipiréticos antes de infusiones de reemplazo enzimático',
      'Manejo multidisciplinario: genética médica, nefrología, cardiología, neurología y nutrición'
    ],
    nursingCare: [
      'Manejo del dolor neuropático de extremidades: no aplicar frío directo extremo ni calor excesivo; registrar intensidad EVA',
      'Administración estricta de infusión de TRE mediante bomba de infusión continua con filtro de baja fijación de proteínas (0.2 micras)',
      'Monitorización exhaustiva durante la infusión IV: control de signos vitales cada 15 min ante riesgo de anafilaxia o reacciones infusionales',
      'Vigilancia del balance hídrico estricto y recolección adecuada de orina de 24 horas para cuantificación de proteinuria'
    ]
  },
  {
    number: 570,
    id: 'diag-570',
    title: 'Mucopolisacaridosis (MPS - Síndrome de Hurler MPS I, Hunter MPS II y Sanfilippo MPS III)',
    cie10: 'E76.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Grupo heterogéneo de trastornos del metabolismo de los glucosaminoglucanos (GAGs / mucopolisacáridos) causado por la deficiencia genética de enzimas lisosomales específicas, lo que conduce a acumulación progresiva multiorgánica de dermatán, heparán y queratán sulfato, generando fenotipo dismórfico tosco, disostosis múltiple, hepatoesplenomegalia y compromiso cardiopulmonar y neurológico severo.',
    symptoms: [
      'Facies tosca característica ("facies gárgola"): puente nasal deprimido, labios gruesos, macroglosia, hipertrofia gingival',
      'Opacidad corneal bilateral progresiva (típica en Hurler MPS I; ausente en Hunter MPS II)',
      'Talla baja desproporcionada y rigidez articular con contracturas en flexión ("manos en garra")',
      'Hepatoesplenomegalia marcada con abdomen prominente y hernias inguinales/umbilicales recurrentes',
      'Hipoacusia neurosensorial/conductiva progresiva y otitis medias recurrentes',
      'Compromiso de vía aérea: respiración ruidosa, estridor, macroglosia, apnea obstructiva del sueño y deformidades traqueales',
      'Deterioro neurocognitivo progresivo (grave en MPS I Hurler y MPS III Sanfilippo)'
    ],
    redFlags: ['OBSTRUCCIÓN GRAVE DE VÍA AÉREA SUPERIOR Y APNEA GRAVE DEL SUEÑO', 'COMPRESIÓN DE MÉDULA CERVICAL POR HIPOPLASIA ODONTOIDEA E INESTABILIDAD ATLANTOAXIAL'],
    criteria: 'Elevación cuantitativa de glucosaminoglucanos (GAGs) en orina fraccionados MÁS déficit enzimático lisosomal específico en leucocitos o fibroblastos y confirmación genética.',
    labTests: [
      'Cuantificación y electroforesis de glucosaminoglucanos (GAGs) en orina (dermatán sulfato, heparán sulfato)',
      'Dosaje de actividad enzimática específica: Alfa-L-iduronidasa (MPS I), Iduronato-2-sulfatasa (MPS II), Heparán N-sulfatasa (MPS III)',
      'Panel genético molecular de mutaciones específicas'
    ],
    imaging: [
      'Serie ósea ("disostosis múltiple"): cráneo grande en torre, hipoplasia o ausencia de apófisis odontoides, vértebras en cuña ("pico anterior"), costillas en espátula o remo, huesos largos anchos y metacarpianos cortos',
      'Radiografía dinámica o TAC/RMN de columna cervical: evaluación de subluxación atlantoaxoidea',
      'Ecocardiograma: engrosamiento de velos valvulares mitral y aórtica, estenosis/insuficiencia valvular y miocardiopatía',
      'Polisomnografía: diagnóstico de apnea obstructiva del sueño'
    ],
    differential: ['Mucolipidosis', 'Gangliosidosis GM1', 'Enfermedad de Gaucher tipo II/III', 'Mannosidosis', 'Raquitismo hipofosfatémico'],
    firstLine: [
      'Terapia de reemplazo enzimático recombinante IV específica: Laronidasa (Aldurazyme) para MPS I (100 U/kg semanal); Idursulfasa (Elaprase) para MPS II (0.5 mg/kg semanal); Elosulfasa alfa (Vimizim) para MPS IVA',
      'Trasplante alogénico de progenitores hematopoyéticos (TAPH) antes de los 2 años en síndrome de Hurler (MPS I) para preservar función neurológica'
    ],
    alternatives: [
      'Cirugía descompresiva de fosa posterior y descompresión cervical atlantoaxoidea si hay mielopatía',
      'Tratamiento quirúrgico de hernias, liberación del túnel carpiano y reemplazos valvulares según evolución',
      'CPAP/BiPAP nocturno para apnea obstructiva'
    ],
    nonPharm: [
      'Manejo por equipo multidisciplinario altamente especializado (genética, neumología pediátrica, neurocirugía, anestesiología, ortopedia, otorrino)',
      'Protocolos estrictos de vía aérea difícil en cualquier procedimiento anestésico',
      'Terapia física continua para prevenir anquilosis y contracturas articulares'
    ],
    nursingCare: [
      'ALERTA CRÍTICA: Considerar siempre al paciente con MPS como VÍA AÉREA DIFÍCIL EXTREMA; disponer de carro de paro y fibrobroncoscopio',
      'Monitorización continua de saturación de oxígeno y patrón ventilatorio durante el sueño',
      'Manejo de infusiones de TRE con premedicación y vigilancia estricta de reacciones de hipersensibilidad',
      'Cuidado y movilización del cuello con técnica de protección cervical por inestabilidad atlantoaxial'
    ]
  },
  {
    number: 571,
    id: 'diag-571',
    title: 'Osteogénesis Imperfecta (Enfermedad de los Huesos de Cristal / Fragilidad Ósea Congénita)',
    cie10: 'Q78.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno genético hereditario del tejido conectivo caracterizado por fragilidad ósea extrema, baja masa mineral ósea y propensión a fracturas recurrentes ante traumatismos mínimos o espontáneas, debido principalmente a mutaciones autosómicas dominantes en los genes COL1A1 y COL1A2 que codifican el colágeno tipo I.',
    symptoms: [
      'Fracturas óseas múltiples y frecuentes con traumas menores o durante actividades cotidianas',
      'Escleras azules o grisáceas características (visibilidad de la coroides subyacente por adelgazamiento de colágeno escleral)',
      'Dentinogénesis imperfecta: dientes opalescentes, traslúcidos, ámbar-marrones y propensos al desgaste acelerado',
      'Deformidades esqueléticas progresivas: arqueamiento de huesos largos, cifoescoliosis grave, tórax en quilla o embudo',
      'Hipoacusia progresiva mixta o de conducción en la adolescencia/adultez (por otosclerosis de huesecillos del oído)',
      'Hiperlaxitud ligamentosa y debilidad muscular generalizada',
      'Talla baja marcada en tipos III y IV'
    ],
    redFlags: ['FRACTURAS CERVICALES O TRAUMATISMO CRANEOENCEFÁLICO MENOR CON SOSPECHA DE INVAGINACIÓN BASILAR', 'INSUFICIENCIA RESPIRATORIA POR DEFORMIDAD TORÁCICA SEVERA'],
    criteria: 'Historia de fragilidad ósea con fracturas múltiples desproporcionadas MÁS signos extraesqueléticos (escleras azules, dentinogénesis) y confirmación por densitometría y secuenciación de COL1A1/COL1A2.',
    labTests: [
      'Secuenciación genética completa de COL1A1, COL1A2 y genes de herencia recesiva (CRTAP, LEPRE1, PPIB)',
      'Fosfatasa alcalina total y específica ósea (frecuentemente normal o discretamente elevada durante consolidación)',
      'Calcio, fósforo, magnesio y vitamina D 25-OH (para descartar raquitismo u osteomalacia)',
      'Calciuria en orina de 24 horas y creatinina'
    ],
    imaging: [
      'Serie radiológica ósea: osteopenia difusa generalizada, adelgazamiento cortical, huesos wormianos en suturas craneales, vértebras en "ojo de pez" o colapsadas, deformidades de fémur y tibia',
      'Densitometría ósea por DEXA: puntuación Z-score marcadamente baja (menor a -2.5 o -3.0)',
      'RMN craneocervical: descartar invaginación basilar o compresión bulbomedular',
      'Audiometría tonal para pesquisar pérdida auditiva precoz'
    ],
    differential: ['Maltrato infantil / Síndrome del niño maltratado (diagnóstico diferencial médico-legal mandatorio)', 'Hipofosfatasia', 'Raquitismo nutricional o dependiente de vitamina D', 'Osteopenia de la prematuridad', 'Síndrome de osteoporosis-pseudoglioma'],
    firstLine: [
      'Bisfosfonatos intravenosos periódicos: PAMIDRONATO DISÓDICO (0.5 - 1.0 mg/kg/día IV en infusión de 3 a 4 horas cada 2 a 4 meses) o ÁCIDO ZOLEDRÓNICO (0.05 mg/kg IV cada 6 meses)',
      'Suplementación adecuada de calcio y Vitamina D3 (Colecalciferol 800-2000 UI/día) asegurando calcemia normal antes de los bisfosfonatos'
    ],
    alternatives: [
      'Cirugía ortopédica correctiva: enclavado endomedular telescópico retráctil (clavos de Fassier-Duval) para corregir incurvaciones y prevenir fracturas repetidas',
      'Manejo de fonoaudiología y prótesis auditivas en hipoacusia',
      'Cuidados odontológicos especializados para dentinogénesis imperfecta (coronas protectoras)'
    ],
    nonPharm: [
      'Fisioterapia suave, natación e hidroterapia para fortalecimiento muscular sin sobrecarga de impacto',
      'Capacitación técnica a padres, cuidadores y personal de salud en técnicas de manipulación segura y traslado cuidadoso',
      'Uso de protectores, férulas y colchones ortopédicos blandos'
    ],
    nursingCare: [
      'MANIPULACIÓN ATRAUMÁTICA ESTRICTA: jamás levantar al lactante tirando de sus extremidades o sujetando muñecas/tobillos; levantar siempre en bloque sosteniendo cabeza, tronco y nalgas en plano horizontal',
      'No inflar el manguito de presión arterial bruscamente ni aplicar torniquetes con fuerza excesiva (riesgo de provocar fractura iatrogénica)',
      'Monitorización durante la infusión de Pamidronato/Zoledronato: vigilar fiebre, mialgias (reacción de fase aguda) e hipocalcemia secundaria',
      'Educación intensiva y empatía con los padres para diferenciar lesiones de sospechas infundadas de maltrato'
    ]
  },
  {
    number: 572,
    id: 'diag-572',
    title: 'Acondroplasia (Displasia Esquelética por mutación en FGFR3)',
    cie10: 'Q77.4',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Forma más común de enanismo rizomélico desproporcionado, de herencia autosómica dominante con penetrancia completa (80% mutaciones de novo), causada por la mutación específica G380R en el gen FGFR3 (receptor 3 del factor de crecimiento de fibroblastos), con inhibición constitutiva de la osificación endocondral.',
    symptoms: [
      'Talla baja marcada desproporcionada con acortamiento rizomélico severo (brazos y muslos más cortos que antebrazos y piernas)',
      'Macrocefalia relativa con prominencia frontal (abombamiento) e hipoplasia del tercio medio facial con puente nasal deprimido',
      'Manos cortas y anchas con configuración característica en "tridente" (separación permanente entre el 3er y 4to dedo)',
      'Giba o cifosis toracolumbar en la infancia que evoluciona a hiperlordosis lumbar exagerada al iniciar la bipedestación',
      'Genu varo progresivo y limitación para la extensión completa del codo',
      'Apneas del sueño mixtas y centrales (por estenosis de foramen magno y vía aérea superior colapsable)',
      'Otitis media recurrente por disfunción de trompas de Eustaquio e hipoacusia de conducción'
    ],
    redFlags: ['ESTENOSIS DE FORAMEN MAGNO CON COMPRESIÓN DE UNIÓN CRANEOMEDULAR: HIPOTONÍA GRAVE, APNEAS CENTRALES, TETRAPARESIA O RIESGO DE MUERTE SÚBITA DEL LACTANTE', 'ESTENOSIS DEL CANAL LUMBAR EN ADULTOS CON CLAUDICACIÓN NEURÓGENA Y DISFUNCIÓN DE ESFÍNTERES'],
    criteria: 'Cuadro clínico radiológico típico de displasia rizomélica MÁS identificación de la mutación c.1138G>A o c.1138G>C en el gen FGFR3.',
    labTests: [
      'Estudio genético molecular dirigido: análisis de mutaciones del gen FGFR3 (detecta mutación en >99% de casos)'
    ],
    imaging: [
      'Serie ósea completa: base de cráneo corta con foramen magno estrecho, acortamiento de huesos largos rizomélicos, metáfisis ensanchadas en forma de copa, pelvis cuadrada con techos acetabulares planos e incisura ciática estrecha',
      'RMN cerebral y de unión craneocervical al nacer y a los 6 meses: evaluación de estenosis del agujero occipital y compresión medular',
      'RMN de columna lumbar: estenosis del canal espinal en adultos',
      'Polisomnografía: evaluación de apneas nocturnas'
    ],
    differential: ['Hipocondroplasia', 'Displasia tanatofórica (letal)', 'Pseudoacondroplasia', 'Mucopolisacaridosis'],
    firstLine: [
      'Novedoso tratamiento biológico: VOSORITIDE (Voxzogo) 15 mcg/kg/día SC una vez al día en niños desde los 4 meses hasta el cierre epifisario (análogo sintético del péptido natriurético tipo C que estimula la osificación endocondral)',
      'Cirugía descompresiva urgente de foramen magno en caso de compromiso craneomedular o apnea central'
    ],
    alternatives: [
      'Cirugía de alargamiento óseo de extremidades con fijadores externos (Ilizarov / clavos intramedulares) en centros de alta experiencia',
      'Laminectomía descompresiva lumbar en adultos con claudicación neurológica',
      'Adenoamigdalectomía y CPAP nocturno para apnea obstructiva'
    ],
    nonPharm: [
      'Curvas de crecimiento específicas de la OMS para acondroplasia (nunca usar curvas estándar)',
      'Control estricto del peso corporal desde la infancia temprana (la obesidad agrava la estenosis espinal y la cifosis)',
      'Uso de asientos infantiles adaptados con soporte rígido para cabeza y espalda (evitar mochilas portabebés flexibles o sillas tipo "huevo" que aumentan la cifosis)'
    ],
    nursingCare: [
      'CUIDADO Y PROTECCIÓN DE LA COLUMNA Y CUELLO: Evitar posturas que flexionen el tronco o el cuello del lactante sin soporte dorsal rígido',
      'Medición periódica rigurosa del perímetro cefálico y cotejo estricto con curvas de acondroplasia para pesquisa de hidrocefalia',
      'Vigilancia estricta de apneas nocturnas, ronquidos intensos, cambios en el tono muscular y cianosis durante el sueño',
      'Técnica aséptica rigurosa y rotación de sitios de inyección SC para administración de Vosoritide'
    ]
  },
  {
    number: 573,
    id: 'diag-573',
    title: 'Síndrome de Marfan (Trastorno del Tejido Conectivo por FBN1)',
    cie10: 'Q87.4',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno genético hereditario multisistémico del tejido conectivo de herencia autosómica dominante, causado por mutaciones en el gen FBN1 (15q21.1) que codifica la fibrilina-1, afectando predominantemente el sistema cardiovascular (dilatación y disección aórtica), ocular (ectopia lentis) y musculoesquelético (hábito marfanoide).',
    symptoms: [
      'Hábito marfanoide: estatura alta y desproporcionadamente delgada, envergadura que supera la estatura corporal',
      'Aracnodactilia (dedos anormalmente largos y delgados): Signo de Steinberg (pulgar sobrepasa borde cubital) y Signo de Walker-Murdoch (muñeca abrazada con superposición distal)',
      'Deformidades torácicas: Pectus excavatum grave o Pectus carinatum ("pecho de paloma")',
      'Hiperlaxitud articular generalizada, escoliosis o cifoescoliosis, pie plano valgo',
      'Dilatación asintomática de la raíz aórtica (senos de Valsalva) y prolapso de la válvula mitral con insuficiencia',
      'Ectopia lentis (luxación o subluxación del cristalino, clásicamente superior y temporal)',
      'Estrías cutáneas atróficas no explicadas en espalda, hombros y glúteos; riesgo aumentado de neumotórax espontáneo'
    ],
    redFlags: ['DILATACIÓN DE RAÍZ AÓRTICA >50 MM O DOLOR TORÁCICO DESGARRADOR SÚBITO QUE IRRADIA A LA ESPALDA (DISECCIÓN AÓRTICA AGUDA TIPO A DE STANFORD - EMERGENCIA VITAL QUIRÚRGICA)'],
    criteria: 'Criterios de Ghent Revisados (2010): Dilatación de raíz aórtica (Z-score ≥ 2) MÁS ectopia lentis, o en ausencia de luxación del cristalino: dilatación aórtica MÁS mutación patogénica en FBN1 o puntuación sistémica ≥ 7 puntos.',
    labTests: [
      'Secuenciación genética completa del gen FBN1 y panel de secuenciación masiva para aortopatías hereditarias (TGFBR1, TGFBR2, SMAD3)',
      'Biomarcadores cardíacos y dímero D urgente ante dolor torácico (descarte de disección)'
    ],
    imaging: [
      'Ecocardiograma transtorácico / transesofágico: diámetro y Z-score de la raíz aórtica y anillo valvular aórtico, función mitral',
      'Angiotomografía computarizada (Angio-TAC) o Angio-RMN toracoabdominal completa: monitorización de la aorta en toda su extensión',
      'Examen oftalmológico con lámpara de hendidura con midriasis farmacológica: ectopia lentis',
      'Radiografías de columna para evaluación del ángulo de Cobb en escoliosis'
    ],
    differential: ['Síndrome de Loeys-Dietz (mutaciones en receptor de TGF-beta)', 'Síndrome de Ehlers-Danlos vascular (COL3A1)', 'Homocistinuria (ectopia lentis hacia abajo, trombofilia, retraso intelectual)', 'Aneurismas aórticos torácicos familiares (AATF)'],
    firstLine: [
      'Betabloqueantes cardioselectivos a dosis plenas: ATENOLOL (1-2 mg/kg/día o 50-100 mg/día) o METOPROLOL para reducir la velocidad de eyección ventricular y el estrés de la pared aórtica',
      'Antagonistas de los receptores de angiotensina II: LOSARTÁN (1.4-2 mg/kg/día o 50-100 mg/día) para frenar la progresión del diámetro aórtico antagonizando la señalización del TGF-beta'
    ],
    alternatives: [
      'Cirugía profiláctica de reemplazo de raíz aórtica: técnica con preservación valvular (procedimiento de David) o reemplazo de raíz y válvula con conducto valvulado (operación de Bentall), indicada cuando el diámetro aórtico alcanza ≥50 mm (o ≥45 mm con factores de riesgo/historia familiar de disección)',
      'Corrección quirúrgica de deformidades graves de pectus o escoliosis progresiva'
    ],
    nonPharm: [
      'RESTRICCIÓN ABSOLUTA DE DEPORTES DE CONTACTO, COMPETITIVOS Y EJERCICIOS ISOMÉTRICOS PESADOS O MANIOBRAS DE VALSALVA (levantamiento de pesas, fisicoculturismo, buceo profundo)',
      'Se permite ejercicio aeróbico recreativo ligero a moderado (caminar, bicicleta suave, natación recreativa sin competición)',
      'Asesoramiento genético prenatal y preconcepcional; seguimiento cardiológico estricto mensual durante el embarazo'
    ],
    nursingCare: [
      'Control estricto y riguroso de la presión arterial: mantener cifras meta en normotensión estricta (<120/80 mmHg)',
      'Educación imperativa al paciente sobre signos de alarma: ante dolor torácico, interescapular o abdominal desgarrador brusco, acudir de inmediato a emergencia',
      'Verificar profilaxis y adherencia permanente a los fármacos antihipertensivos/betabloqueantes sin omisión de dosis',
      'Apoyo emocional para el impacto psicosocial de la limitación deportiva y los cambios estéticos corporales'
    ]
  },
  {
    number: 574,
    id: 'diag-574',
    title: 'Síndrome de Ehlers-Danlos (Hipermovilidad, Clásico y Vascular)',
    cie10: 'Q79.6',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Grupo heterogéneo de trastornos hereditarios del tejido conectivo caracterizados por hiperlaxitud articular generalizada, hiperextensibilidad de la piel y fragilidad tisular variable, secundarios a defectos en la biosíntesis y estructura del colágeno (COL5A1, COL5A2 en clásico; COL3A1 en vascular; etiología multifactorial en hipermovilidad).',
    symptoms: [
      'Hipermovilidad articular generalizada evaluada mediante la Escala de Beighton (≥5 en adultos, ≥6 en prepúberes)',
      'Subluxaciones y luxaciones articulares espontáneas o recurrentes (hombros, rótulas, caderas, mandíbula)',
      'Piel hiperextensible y aterciopelada que recupera su posición normal al soltarla',
      'Fragilidad capilar con equimosis fáciles y cicatrices ensanchadas atróficas en "papel de fumar" o "papel de cigarrillo"',
      'Dolor crónico musculoesquelético neuropático o generalizado y astenia crónica severa',
      'Síndrome de taquicardia ortostática postural (POTS) y disautonomía asociada',
      'COMPROMISO EN TIPO VASCULAR (SEDv - grave): rotura arterial espontánea (aorta, carótidas, mesentéricas), perforación de colon sigmoide y rotura uterina periparto'
    ],
    redFlags: ['TIPO VASCULAR (COL3A1): DOLOR ABDOMINAL O TORÁCICO SÚBITO CON HEMATOMA EXPANSIVO O SHOCK HIPOVOLÉMICO (ROTURA ARTERIAL O DE VÍSCERA HUECA)'],
    criteria: 'Criterios Internacionales de Consorcio 2017: Escala de Beighton positiva MÁS manifestaciones sistémicas del tejido conectivo, antecedentes familiares y exclusión de otros síndromes con confirmación genética en tipos clásicos y vascular.',
    labTests: [
      'Panel de secuenciación genética de genes de colágeno (COL5A1, COL5A2, COL3A1, COL1A1, TNXB)',
      'Estudio de hemostasia básico (habitualmente normal a pesar de las equimosis fáciles)'
    ],
    imaging: [
      'Angio-TAC o Angio-RMN arterial de cráneo a pelvis en sospecha o diagnóstico de SED vascular',
      'Ecocardiograma transtorácico: prolapso de válvula mitral y dilatación de raíz aórtica',
      'Radiografías articulares para valoración de luxaciones y signos de artrosis temprana'
    ],
    differential: ['Síndrome de Marfan', 'Síndrome de Hipermovilidad benigno', 'Osteogénesis imperfecta', 'Lupus eritematoso sistémico', 'Fibromialgia'],
    firstLine: [
      'Manejo sintomático multimodal del dolor crónico: Paracetamol, AINEs en pulsos cortos, Duloxetina (30-60 mg/día) o Gabapentina/Pregabalina para componente neuropático',
      'En SED vascular: CELIPROLOL (betabloqueante vasodilatador con efecto agonista beta-2 que reduce eventos arteriales mayores)'
    ],
    alternatives: [
      'Tratamiento de la disautonomía / POTS: Fludrocortisona, Midodrina, medias de compresión graduada e incremento de sal y agua',
      'Cirugías de estabilización ligamentosa con precauciones especiales de fragilidad tisular y vascular'
    ],
    nonPharm: [
      'Fisioterapia especializada enfocada en propiocepción, estabilización isométrica del núcleo ("core") y fortalecimiento muscular (evitar hiperextensión forzada)',
      'Prohibición estricta de deportes de colisión, artes marciales y ejercicios de alto impacto articular',
      'Uso de órtesis estabilizadoras, férulas de dedos y calzado con buen soporte de tobillo'
    ],
    nursingCare: [
      'CUIDADO CUTÁNEO EXTREMO: evitar cintas adhesivas agresivas (usar apósitos de silicona médica atraumática para no desgarrar la piel)',
      'Punciones venosas atraumáticas y hemostasia compresiva prolongada por fragilidad capilar',
      'Educación preventiva para evitar maniobras articulares que desencadenen subluxaciones voluntarias',
      'En SED vascular: brazaletes de alerta médica permanentes informando el diagnóstico de riesgo vital ante sangrado vascular'
    ]
  },
  {
    number: 575,
    id: 'diag-575',
    title: 'Neurofibromatosis Tipo 1 (NF1 / Enfermedad de von Recklinghausen)',
    cie10: 'Q85.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno neurocutáneo autosómico dominante común (1:3,000 nacimientos) causado por mutaciones en el gen NF1 (17q11.2) que codifica la neurofibromina (proteína supresora de tumores que regula a la baja la vía RAS/MAPK), caracterizado por lesiones pigmentarias cutáneas, tumores del sistema nervioso periférico y central, y alteraciones óseas.',
    symptoms: [
      'MANCHAS "CAFÉ CON LECHE" (≥6 manchas de diámetro >5 mm en prepúberes o >15 mm en postpúberes)',
      'EFÉLIDES / PECAS AXILARES O INGUINALES (Signo de Crowe, altamente sensible y específico)',
      'NEUROFIBROMAS DÉRMICOS BENIGNOS (dos o más de cualquier tipo) que aumentan en número y tamaño durante la pubertad y embarazo',
      'NEUROFIBROMA PLEXIFORME (masa multilobulada en "red de gusanos", localmente infiltrante y desfigurante con riesgo de transformación maligna)',
      'Nódulos de Lisch (hamartomas iridianos visibles mediante lámpara de hendidura en >95% de adultos)',
      'Glioma del nervio óptico (astrocitoma pilocítico en vía óptica en 15-20% de niños)',
      'Displasia ósea característica: displasia esfenoidal o arqueamiento tibial congénito con pseudoartrosis',
      'Dificultades de aprendizaje, TDAH y trastornos del espectro autista en 50% de niños'
    ],
    redFlags: ['CRECIMIENTO RÁPIDO, DOLOR SEVERO Y ENDURECIMIENTO DE UN NEUROFIBROMA PLEXIFORME: SOSPECHA DE TUMOR MALIGNO DE LA VAINA DEL NERVIO PERIFÉRICO (TMVNP)', 'DISMINUCIÓN DE AGUDEZA VISUAL O PROPTOSIS POR GLIOMA ÓPTICO'],
    criteria: 'Criterios Diagnósticos de la NF1 (Consenso Internacional 2021): Presencia de ≥2 de los siguientes: ≥6 manchas café con leche, pecas axilares/inguinales, ≥2 neurofibromas o 1 plexiforme, glioma óptico, ≥2 nódulos de Lisch o anomalías coroideas, lesión ósea distintiva, o variante patogénica en NF1 comprobada.',
    labTests: [
      'Secuenciación genética completa del gen NF1 con análisis de deleciones/duplicaciones (MLPA)',
      'Marcadores hormonales ante sospecha de feocromocitoma asociado (metanefrinas plasmáticas/urinarias en hipertensos)'
    ],
    imaging: [
      'RMN cerebral y de órbitas con contraste: detección de gliomas de la vía óptica y áreas no identificadas de brillo en T2 (UBOs / neurofibromatosis bright spots)',
      'RMN de cuerpo entero o segmentaria dirigida: estadificación y volumetría de neurofibromas plexiformes',
      'PET-CT con 18F-FDG: diferenciación entre neurofibromas plexiformes benignos y transformación maligna a TMVNP',
      'Radiografía simple de miembros inferiores: incurvación y pseudoartrosis tibial congénita'
    ],
    differential: ['Síndrome de Legius (mutación en SPRED1: manchas café con leche y pecas sin neurofibromas)', 'Síndrome de McCune-Albright', 'Neurofibromatosis tipo 2', 'Schwannomatosis', 'Síndrome de Noonan con léntigos'],
    firstLine: [
      'Terapia dirigida inhibidora de MEK: SELUMETINIB (Koselugo) 25 mg/m2 dos veces al día vía oral, indicado en pacientes pediátricos (≥2 años) con neurofibromas plexiformes inoperables sintomáticos',
      'Resección quirúrgica completa de neurofibromas dérmicos molestos o plexiformes sintomáticos resecables sin déficit neurológico irreparable'
    ],
    alternatives: [
      'Quimioterapia (Vincristina y Carboplatino) en gliomas ópticos progresivos con pérdida visual',
      'Cirugía y radioterapia/quimioterapia intensiva ante diagnóstico de TMVNP',
      'Tratamiento de la hipertensión renovascular por displasia fibromuscular de la arteria renal'
    ],
    nonPharm: [
      'Controles oftalmológicos anuales rigurosos con agudeza visual y campimetría hasta los 10 años de edad',
      'Evaluación neuropsicológica e intervención psicopedagógica temprana para trastornos de aprendizaje y déficit atencional',
      'Asesoramiento genético reproductivo'
    ],
    nursingCare: [
      'Monitoreo periódico y registro de la presión arterial en cada consulta (descartar feocromocitoma o coartación/estenosis renal)',
      'Examen tegumentario meticuloso: registrar número, tamaño y cambios morfológicos de neurofibromas dérmicos y plexiformes',
      'Vigilancia estricta de efectos adversos de Selumetinib: toxicidad cutánea acneiforme, paroniquia y elevación de CPK',
      'Apoyo psicológico continuo al paciente y a la familia frente al estigma físico y desfiguración'
    ]
  },
  {
    number: 576,
    id: 'diag-576',
    title: 'Esclerosis Tuberosa (Complejo de Esclerosis Tuberosa / Enfermedad de Bourneville)',
    cie10: 'Q85.1',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno neurocutáneo hereditario autosómico dominante multisistémico causado por mutaciones en los genes TSC1 (hamartina, 9q34) o TSC2 (tuberina, 16p13.3) que causan una hiperactivación aberrante del complejo proteico mTOR, determinando la formación generalizada de tumores benignos (hamartomas) en cerebro, piel, riñones, corazón, pulmones y retina.',
    symptoms: [
      'Crisis epilépticas en la infancia temprana: espasmos infantiles (Síndrome de West) o crisis focales farmacorresistentes (>85%)',
      'Disfunción cognitiva, discapacidad intelectual, trastornos del sueño y TAND (Trastornos Neuropsiquiátricos Asociados a Esclerosis Tuberosa / Autismo)',
      'Lesiones dermatológicas distintivas:',
      '- Máculas hipomelanóticas lanceoladas en "hoja de fresno" (≥3 visibles con lámpara de Wood)',
      '- Angiofibromas faciales ("adenoma sebáceo") en alas de nariz, mejillas y mentón en "alas de mariposa"',
      '- Placa fibrosa frontal y placa aterciopelada o empedrada lumbar en "piel de zapa" (Shagreen patch)',
      '- Fibromas ungueales o periungueales (Nódulos de Koenen)',
      'Rabdomiomas cardíacos fetales/neonatales (frecuentemente remiten espontáneamente)',
      'Angiomiolipomas renales bilaterales múltiples (riesgo de hemorragia retroperitoneal retrovascular masiva)',
      'Linfangioleiomiomatosis pulmonar (LAM) en mujeres jóvenes con quistes pulmonares y neumotórax recurrente'
    ],
    redFlags: ['ASTROCITOMA GIGANTOCELULAR SUFEPENDIMARIO (SEGA) CON HIDROCEFALIA AGUDA OBSTRUCTIVA', 'SANGRADO RETROPERITONEAL MASIVO POR ROTURA DE ANGIOMIOLIPOMA RENAL >4 CM (SÍNDROME DE WUNDERLICH)'],
    criteria: 'Criterios de la Conferencia de Consenso Internacional 2021: Diagnóstico definitivo con 2 criterios mayores, o 1 mayor y ≥2 menores, o identificación de mutación patogénica en TSC1 o TSC2.',
    labTests: [
      'Estudio genético molecular mediante secuenciación de última generación de los genes TSC1 y TSC2',
      'Evaluación de función renal: creatinina, urea y proteinuria de 24 horas'
    ],
    imaging: [
      'RMN cerebral con contraste: túberes corticales/subcorticales, nódulos subependimarios y detección precoz de astrocitoma de células gigantes subependimario (SEGA) en el foramen de Monro',
      'RMN o TAC abdominal: identificación y medición del tamaño de angiomiolipomas renales',
      'TAC de tórax de alta resolución: despistaje de quistes de linfangioleiomiomatosis (LAM)',
      'Ecocardiograma Doppler: número y localización de rabdomiomas cardíacos',
      'Examen de fondo de ojo con oftalmoscopía indirecta: hamartomas retinianos acromáticos o nodulares'
    ],
    differential: ['Neurofibromatosis tipo 1', 'Enfermedad de von Hippel-Lindau', 'Síndrome de Sturge-Weber', 'Vitiligo aislado', 'Acne vulgaris'],
    firstLine: [
      'Inhibidores de mTOR (diana de rapamicina en células de mamífero): EVEROLIMUS (Votubia) oral (titulado según niveles séricos de 5 a 15 ng/mL), indicado para SEGA cerebral irresecable y angiomiolipomas renales >3-4 cm',
      'Tratamiento de elección para espasmos infantiles en esclerosis tuberosa: VIGABATRINA (Sabril) a 100-150 mg/kg/día oral'
    ],
    alternatives: [
      'Cirugía resectiva o resección endoscópica de SEGA sintomático con hidrocefalia',
      'Embolización arterial selectiva profiláctica de angiomiolipomas renales con alto riesgo de hemorragia o aneurismas >5 mm',
      'Cirugía de la epilepsia (tuberotomía guiada por estéreo-EEG) o estimulador del nervio vago (VNS) en epilepsia refractaria'
    ],
    nonPharm: [
      'Dieta cetogénica coadyuvante en epilepsia farmacorresistente',
      'Láser cutáneo con CO2 o colorante pulsado y rapamicina tópica al 0.1-1% en ungüento para angiofibromas faciales',
      'Evaluación neuroconductual formal estructurada (TAND checklist) anual'
    ],
    nursingCare: [
      'Manejo y registro riguroso de crisis convulsivas: características semiológicas, duración y tiempo de recuperación; disponibilidad inmediata de midazolam bucal o diazepam rectal',
      'Vigilancia estricta de niveles plasmáticos y efectos adversos de Everolimus: estomatitis aftosa, hiperlipidemia, neumonitis no infecciosa e infecciones',
      'Examen dermatológico con luz ultravioleta (Lámpara de Wood) en recién nacidos con espasmos para detectar máculas hipocrómicas',
      'Vigilancia de dolor lumbar brusco, palidez súbita e hipotensión ante sospecha de rotura de angiomiolipoma renal'
    ]
  },
  {
    number: 577,
    id: 'diag-577',
    title: 'Distrofia Muscular de Duchenne y Becker (DMD / DMB - Distrofinopatías)',
    cie10: 'G71.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Distrofias musculares hereditarias recesivas ligadas al cromosoma X más frecuentes y devastadoras, causadas por mutaciones (deleciones en 65-70%) en el gen DMD (Xp21.2) que provocan ausencia completa (Duchenne) o producción defectuosa/parcial (Becker) de la proteína DISTROFINA, con rotura del sarcolema durante la contracción muscular, degeneración fibrilar progresiva y reemplazo por tejido conectivo y adiposo.',
    symptoms: [
      'Retraso motor temprano en la marcha y caídas frecuentes entre los 2 y 4 años de vida',
      'Debilidad muscular simétrica progresiva proximal: dificultad para levantarse del suelo, subir escaleras y correr',
      'MANIOBRA DE GOWERS POSITIVA Y PATOGNOMÓNICA: el niño "trepa sobre su propio cuerpo" apoyando las manos en sus muslos para ponerse de pie desde el piso',
      'PSEUDOHIPERTROFIA DE PANTORRILLAS (gemelos aumentados de volumen pero de consistencia dura y elástica debido a infiltración fibrograsosa)',
      'Marcha de pato (trendelenburg positivo) e hiperlordosis lumbar compensatoria',
      'Pérdida de la deambulación independiente entre los 9 y 12 años en DMD (en Becker conservada >16 años)',
      'Complicaciones respiratorias y cardíacas: miocardiopatía dilatada progresiva, arritmias e insuficiencia ventilatoria restrictiva con necesidad de ventilación mecánica invasiva/no invasiva en la segunda década'
    ],
    redFlags: ['INSUFICIENCIA RESPIRATORIA AGUDA O RETENCIÓN CRÓNICA DE CO2 (CEFALEA MATUTINA, SOMNOLENCIA)', 'MIOCARDIOPATÍA DILATADA RÁPIDAMENTE PROGRESIVA CON FRACCIÓN DE EYECCIÓN <35%'],
    criteria: 'Cuadro de debilidad muscular proximal con signo de Gowers MÁS elevación masiva de creatina cinasa sérica (CK >10 a 100 veces el valor normal) y confirmación molecular por MLPA o secuenciación del gen DMD.',
    labTests: [
      'CREATINA FOSFOCINASA TOTAL (CPK / CK): hiperCKemia masiva (10,000 a 50,000 U/L en estadios tempranos de DMD)',
      'Transaminasas hepáticas (AST/TGO y ALT/TGP marcadamente elevadas de origen exclusivamente muscular)',
      'Análisis genético mediante amplificación de sondas dependiente de ligación múltiple (MLPA) para deleciones/duplicaciones de exones del gen DMD MÁS secuenciación masiva'
    ],
    imaging: [
      'RMN muscular de muslos y piernas: patrón característico de degeneración y sustitución grasa de glúteos mayores y compartimento cuádriceps',
      'Ecocardiograma transtorácico anual a partir de los 6 años: dilatación de ventrículo izquierdo y fracción de eyección',
      'RMN cardíaca con realce tardío de gadolinio: fibrosis miocárdica subepicárdica precoz',
      'Espirometría forzada en decúbito y sentado (CVF) para evaluar deterioro restrictivo diafragmático'
    ],
    differential: ['Atrofia muscular espinal tipo III (Kugelberg-Welander)', 'Distrofia de cinturas (LGMD)', 'Polimiositis infantil', 'Déficit de maltasa ácida (Enfermedad de Pompe)'],
    firstLine: [
      'Corticoterapia oral a largo plazo (estándar de oro para prolongar la marcha independiente y preservar la función respiratoria): DEFLAZACORT (0.9 mg/kg/día) o PREDNISONA (0.75 mg/kg/día)',
      'Terapias genéticas modificadoras de la enfermedad según mutación específica: ETEPLIRSEN (salto de exón 51), GOLODIRSEN (exón 53), CASIMERSEN (exón 45) o ATALUREN (para mutaciones sin sentido / nonsense)'
    ],
    alternatives: [
      'Terapia génica sustitutiva basada en vectores AAV: DELANDISTROGENE MOXEPARVOVEC (Elevidys) infusión única IV en pacientes pediátricos seleccionados',
      'Inhibidores de la ECA (Enalapril) o betabloqueantes iniciados profilácticamente antes de los 10 años para ralentizar la miocardiopatía',
      'Ventilación no invasiva mecánica nocturna (BiPAP) al detectarse caída de la CVF o hipoventilación nocturna'
    ],
    nonPharm: [
      'Fisioterapia respiratoria diaria con insuflación pasiva (Ambú) y asistente de la tos mecánica (Cough-Assist) para facilitar el aclaramiento mucociliar',
      'Kinesioterapia motora suave continua para prevención de contracturas en flexión (tendón de Aquiles, rodillas y caderas) y uso de valvas nocturnas',
      'Control nutricional estricto para evitar obesidad inicial y desnutrición avanzada'
    ],
    nursingCare: [
      'VIGILANCIA RESPIRATORIA ESTRICTA: técnica adecuada de asistencia en la tos mecánica y aspiración de secreciones; nunca administrar oxígeno suplementario no controlado si hay riesgo de hipercapnia',
      'Control diario de efectos adversos de los corticoides crónicos: peso corporal, curva de crecimiento, glicemia capilar y densidad ósea',
      'Asistencia y posicionamiento ergonómico del paciente con uso de grúas de transferencia para evitar dolor o luxaciones',
      'Mantenimiento e higiene de interfases de ventilación mecánica no invasiva (BiPAP) previniendo lesiones por presión facial'
    ]
  },
  {
    number: 578,
    id: 'diag-578',
    title: 'Atrofia Muscular Espinal (AME - Tipos 0, I, II, III y IV / Déficit de SMN1)',
    cie10: 'G12.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Enfermedad neurodegenerativa autosómica recesiva del sistema nervioso motor, causada por la pérdida bialélica del gen SMN1 (5q13.2) determinante de la proteína de supervivencia de motoneuronas (SMN), provocando la degeneración y muerte selectiva de las motoneuronas del asta anterior de la médula espinal y núcleos bulbares con atrofia muscular generalizada simétrica.',
    symptoms: [
      'AME TIPO I (Enfermedad de Werdnig-Hoffmann - inicio <6 meses / 60% de casos):',
      '- HIPOTONÍA AXIAL GRAVE Y FLACIDEZ SIMÉTRICA ("lactante blando" / "bebé de trapo") con postura en "patas de rana"',
      '- AUSENCIA COMPLETA DE SOSTÉN CEFÁLICO y pérdida o incapacidad para sentarse de forma independiente',
      '- Fasciculaciones linguales patognomónicas y llanto o succión débil por compromiso de pares craneales bulbares',
      '- Respiración paradójica ("respiración abdominal") con tórax en campana por indemnidad diafragmática y parálisis intercostal',
      'AME TIPO II (inicio 6-18 meses): logran sentarse pero nunca caminar; temblor fino en manos, escoliosis progresiva severa',
      'AME TIPO III (Enfermedad de Kugelberg-Welander - inicio >18 meses): logran ponerse de pie y caminar pero pierden la capacidad con el tiempo',
      'Conservación absoluta de la cognición, inteligencia, contacto visual y sensibilidad en todos los tipos de AME'
    ],
    redFlags: ['PARÁLISIS RESPIRATORIA Y FALLA VENTILATORIA AGUDA CON RETENCIÓN DE SECRECIONES', 'DETERIORO DE LA DEGLUCIÓN CON ASPIRACIÓN PULMONAR SILENTE REPETITIVA'],
    criteria: 'Cuadro de hipotonía arrefléxica proximal simétrica MÁS confirmación genética de deleción homocigota del exón 7 del gen SMN1 (técnica de MLPA) y determinación del número de copias del gen modificador SMN2.',
    labTests: [
      'Estudio genético molecular mediante MLPA o qPCR: deleción homocigota del exón 7 del gen SMN1 MÁS cuantificación exacta de copias del gen SMN2 (factor pronóstico crucial)',
      'Creatina cinasa (CK/CPK sérica): normal o levemente elevada (distinción clave con distrofias musculares)'
    ],
    imaging: [
      'Espirometría / Oximetría nocturna continua: hipoventilación alveolar y caídas de saturación durante sueño REM',
      'Videofluoroscopía o FEES de deglución: detección de disfagia motora y aspiración orofaríngea silente',
      'Radiografía de tórax y columna: colapso pulmonar, atelectasias basales y cifoescoliosis progresiva'
    ],
    differential: ['Distrofia muscular de Duchenne', 'Botulismo infantil', 'Miopatías congénitas (nemalínica, centronuclear)', 'Miastenia gravis neonatal transitoria o congénita', 'Hipotonía benigna congénita'],
    firstLine: [
      'Terapias genéticas modificadoras que han revolucionado el pronóstico vital:',
      '- ONAS دولMNOGENE ABEPARVOVEC (Zolgensma): Terapia génica adenoasociada (AAV9) administrada en infusión única IV (dosis 1.1 × 10^14 vg/kg) en menores de 2 años',
      '- NUSINERSEN (Spinraza): Oligonucleótido antisentido que modula el empalme alternativo del pre-ARNm de SMN2, administrado por punción lumbar intratecal (4 dosis de carga y mantenimiento cada 4 meses de por vida)',
      '- RISDIPLAM (Evrysdi): Modulador oral diario de pequeño peso molecular del empalme de SMN2'
    ],
    alternatives: [
      'Soporte ventilatorio no invasivo con BiPAP bi-nivel precoz en régimen nocturno o continuo según evolución',
      'Gastrostomía percutánea temprana (PEG) ante disfagia bulbar para prevenir desnutrición y neumonía aspirativa'
    ],
    nonPharm: [
      'Manejo activo del aclaramiento de vía aérea: asistente mecánico de la tos (Cough Assist) y chaleco vibratorio oscilatorio',
      'Kinesioterapia motora suave, bipedestadores adaptados y órtesis espinales',
      'Vacunación profiláctica exhaustiva: antineumocócica, antiinfluenza y Palivizumab para Virus Sincitial Respiratorio (VSR)'
    ],
    nursingCare: [
      'MANEJO DE SECRECIONES Y VÍA AÉREA: protocolo continuo de tos asistida mecánica antes de cualquier aspiración orofaríngea; mantener posición semisentada o lateral',
      'Alimentación exclusivamente por sonda nasogástrica o gastrostomía en presencia de microaspiración documentada',
      'Prevención de complicaciones de la punción intratecal en la administración de Nusinersen: reposo estricto postpunción, vigilar cefalea por hipotensión de LCR',
      'Monitoreo riguroso de función hepática y plaquetas antes y después de infusión de terapia génica (Zolgensma)'
    ]
  },
  {
    number: 579,
    id: 'diag-579',
    title: 'Enfermedad de Huntington (Corea de Huntington / Neurodegeneración por Expansión CAG)',
    cie10: 'G10',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno neurodegenerativo del sistema nervioso central progresivo y letal, de herencia autosómica dominante con penetrancia completa, causado por una expansión inestable de repeticiones de trinucleótidos CAG (>36 repeticiones) en el exón 1 del gen HTT (4p16.3) que codifica la proteína huntingtina mutada (mHTT), produciendo atrofia neuronal selectiva de las neuronas espinosas medianas del núcleo estriado (caudado y putamen).',
    symptoms: [
      'TRÍADA CLÁSICA PATOGNOMÓNICA: TRASTORNO MOTOR + DETERIORO COGNITIVO + ALTERACIÓN PSIQUIÁTRICA',
      'MANIFESTACIONES MOTORAS:',
      '- COREA: movimientos involuntarios breves, arrítmicos, desordenados y rápidos que afectan la cara (muecas), tronco y extremidades',
      '- Impersistencia motora patognomónica (signo del ordeñador en manos, incapacidad para mantener la lengua protruida)',
      '- Disartria progresiva, disfagia orofaríngea severa, alteración de los movimientos sacádicos oculares',
      '- En fases avanzadas o inicio juvenil (variante de Westphal): distonía, acinesia, rigidez muscular y bradicinesia',
      'MANIFESTACIONES PSIQUIÁTRICAS (frecuentemente preceden al compromiso motor):',
      '- Cambios de personalidad, apatía marcada, irritabilidad extrema, desinhibición y agresividad',
      '- Depresión mayor severa con riesgo suicidio extremadamente alto (>4-8 veces superior a la población general)',
      'MANIFESTACIONES COGNITIVAS:',
      '- Demencia de tipo subcortical con pérdida de funciones ejecutivas, memoria de trabajo y lentitud en el procesamiento mental'
    ],
    redFlags: ['RIESGO INMINENTE DE SUICIDIO EN PACIENTES CON DEPRESIÓN Y DIAGNÓSTICO CONFIRMADO', 'DISFAGIA GRAVE CON NEUMONÍA POR BRONCOASPIRACIÓN (PRINCIPAL CAUSA DIRECTA DE MUERTE)'],
    criteria: 'Manifestaciones motoras características confirmadas por la escala UHDRS (Unified Huntington Disease Rating Scale) MÁS confirmación molecular por PCR de ≥36 repeticiones CAG en el gen HTT.',
    labTests: [
      'Estudio genético molecular específico: determinación cuantitativa del número exacto de repeticiones del trinucleótido CAG en el gen HTT (Normal: ≤26; Intermedio: 27-35; Penetrancia reducida: 36-39; Penetrancia completa: ≥40)',
      'Protocolo ético estricto con evaluación psicológica previa para pruebas presintomáticas en familiares'
    ],
    imaging: [
      'RMN cerebral volumétrica: atrofia bilateral marcada de las cabezas de los núcleos caudados con dilatación compensatoria de los cuernos frontales de los ventrículos laterales ("signo de la mariposa" o ventrículos en copa)',
      'PET-CT con 18F-FDG: hipometabolismo de glucosa estriatal precoz que antecede al inicio de los síntomas clínicos motores'
    ],
    differential: ['Corea de Sydenham', 'Lupus eritematoso sistémico (corea lúpica)', 'Neuroacantocitosis', 'Enfermedad por priones (Creutzfeldt-Jakob)', 'Discinesia tardía inducida por neurolépticos', 'Coreas hereditarias benignas'],
    firstLine: [
      'Manejo sintomático de la corea: DEUTERABENAZINA (6 mg/día hasta 48 mg/día) o TETRABENAZINA (12.5 mg/día hasta 100 mg/día), inhibidores selectivos del transportador vesicular de monoaminas 2 (VMAT-2)',
      'Antipsicóticos atípicos en presencia de corea y psicosis/agitación motora concurrente: RISPERIDONA (1-4 mg/día), OLANZAPINA (5-15 mg/día) o QUETIAPINA'
    ],
    alternatives: [
      'Control de depresión mayor e irritabilidad: Antidepresivos ISRS como Sertralina (50-100 mg/día) o Citalopram',
      'Estabilizadores del ánimo: Ácido Valproico o Lamotrigina en agresividad impulsiva o manía',
      'Gastrostomía endoscópica percutánea (PEG) oportuna en fases avanzadas ante caquexia y disfagia'
    ],
    nonPharm: [
      'Terapia ocupacional y adecuación del entorno domiciliario para prevenir traumatismos y caídas por sacudidas coreicas',
      'Modificación de consistencia dietética (dieta túrmix espesa con néctar) y evaluación deglutoria continua',
      'Acompañamiento psicológico continuo para el paciente y familiares cuidadores (alto desgaste emocional y riesgo hereditario)'
    ],
    nursingCare: [
      'PREVENCIÓN ESTRICTA DE CAÍDAS Y TRAUMATISMOS: camas bajas con barandas acolchadas protectoras y protectores corporales',
      'SUPERVISIÓN Y PROTOCOLO ANTISUICIDIO: monitorización de cambios afectivos, ideación de muerte y aislamiento',
      'Asistencia lenta y tranquila durante la alimentación; técnica de doble deglución y posición sentado a 90 grados erguido',
      'Administración cuidadosa de Tetrabenazina controlando somnolencia diurna y aparición o empeoramiento de depresión'
    ]
  },
  {
    number: 580,
    id: 'diag-580',
    title: 'Hipotiroidismo Congénito Primario (Agenesia, Disgenesia Tiroidea y Dishormonogénesis)',
    cie10: 'E03.1',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Deficiencia de hormonas tiroideas presente al nacer debida a disgenesia tiroidea (ectopia, aplasia o hipoplasia en 80-85%) o dishormonogénesis (errores innatos de la biosíntesis hormonal en 15%), constituyendo la causa prevenible más frecuente de discapacidad intelectual grave si el tratamiento sustitutivo no se inicia en los primeros 15 a 30 días de vida.',
    symptoms: [
      'AL NACER (>95% DE RECIÉN NACIDOS SON CLÍNICAMENTE ASINTOMÁTICOS O MUESTRAN SIGNOS MUY SUTILES):',
      '- Ictericia neonatal fisiológica prolongada (>14 días de vida)',
      '- Hipotonía muscular generalizada, letargia profunda y llanto ronco apagado',
      '- Dificultad para la alimentación y succión débil con somnolencia',
      '- Fontanela posterior anormalmente amplia (>0.5 cm en recién nacido a término)',
      '- Estreñimiento neonatal pertinaz e hiporreflexia',
      'SIGNOS CLÁSICOS TARDÍOS IRREVERSIBLES (si no hubo tamizaje oportuno - "Cretinismo"):',
      '- Facies mixedematosa abotagada, párpados edematosos y macroglosia con protrusión permanente',
      '- Piel seca, fría, áspera y marmórea con hipotermia persistente',
      '- Hernia umbilical de gran tamaño y abdomen distendido',
      '- Retraso estatural severo desproporcionado y retraso mental profundo irreversible'
    ],
    redFlags: ['RECIÉN NACIDO CON TSH ELEVADA EN TAMIZAJE NEONATAL: INICIAR LEVOTIROXINA ANTES DE LOS 14 DÍAS DE VIDA PARA GARANTIZAR COEFICIENTE INTELECTUAL (CI) NORMAL'],
    criteria: 'Tamizaje neonatal mediante TSH en sangre de talón elevada confirmada por dosaje de TSH sérica marcadamente alta con T4 libre baja en sangre venosa.',
    labTests: [
      'TAMIZAJE NEONATAL UNIVERSAL EN PAPEL DE FILTRO (muestra de talón a las 48-72 horas de vida): TSH neonatal (>10-20 mUI/L es sospechosa)',
      'Confirmación venosa urgente: TSH sérica (elevada >10 a 100 mUI/L) y T4 Libre sérica (reducida <0.8 ng/dL)',
      'Tiroglobulina sérica (indetectable en atireosis; normal/alta en ectopia o bocio)',
      'Anticuerpos anti-TPO y anti-tiroglobulina maternos (para descartar paso transplacentario en hipotiroidismo transitorio)'
    ],
    imaging: [
      'Ecografía tiroidea Doppler de cuello: demuestra presencia, volumen y localización o ausencia de la glándula tiroides',
      'Gammagrafía tiroidea con Tecnecio-99m o Yodo-123 (estándar de oro para distinguir atireosis completa de tejido tiroideo ectópico sublingual)',
      'Radiografía simple de rodilla (descarte de ausencia de núcleos de osificación epifisarios femorales distales en hipotiroidismo intrauterino)'
    ],
    differential: ['Hipotiroidismo congénito central / hipofisario (TSH normal/baja con T4 libre baja)', 'Hipotiroidismo transitorio por yodo o anticuerpos maternos', 'Síndrome de Down', 'Ictericia por incompatibilidad Rh/ABO'],
    firstLine: [
      'LEVOTIROXINA SÓDICA ORAL (T4 sintética): DOSIS DE CARGA INICIAL INMEDIATA DE 10 A 15 mcg/kg/día en una sola toma matutina en ayunas',
      'Meta terapéutica urgente: normalizar la T4 libre dentro de las primeras 1 a 2 semanas y la TSH dentro del primer mes de vida'
    ],
    alternatives: [
      'Ajustes periódicos de dosis de levotiroxina según controles mensuales de TSH y T4L en el primer semestre de vida',
      'Estimulación temprana y neurodesarrollo integral'
    ],
    nonPharm: [
      'Técnica correcta de administración: disolver el comprimido de levotiroxina triturado en unas pocas gotas de agua materna o leche en cucharita inmediatamente antes de administrar (nunca en biberón)',
      'Evitar la administración simultánea con preparados de hierro, calcio o fórmulas de soya que quelan y disminuyen la absorción de levotiroxina (separar mínimo 4 horas)'
    ],
    nursingCare: [
      'EDUCACIÓN FAMILIAR CRÍTICA: enfatizar a los padres que el tratamiento es de por vida y que una omisión de tomas condiciona pérdida irreversible de coeficiente intelectual',
      'Toma técnica perfecta de la muestra de tamizaje de talón en papel de filtro (Whatman 903) entre las 48 y 72 horas de vida',
      'Monitoreo periódico del perímetro cefálico, peso, talla y adquisición de hitos motores',
      'Vigilancia de signos de sobremorfosis o sobredosificación: taquicardia, diarrea, temblores e insomnio'
    ]
  },
  {
    number: 581,
    id: 'diag-581',
    title: 'Hiperplasia Suprarrenal Congénita (HSC - Déficit Clásico de 21-Hidroxilasa)',
    cie10: 'E25.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno autosómico recesivo del metabolismo esteroideo suprarrenal causado en >95% de casos por mutaciones en el gen CYP21A2 que provocan déficit de la enzima 21-HIDROXILASA, determinando un bloqueo en la síntesis de cortisol y aldosterona con elevación reactiva masiva de ACTH y sobreproducción extrema de andrógenos suprarrenales, con riesgo de virilización y crisis pierdesal letal neonatal.',
    symptoms: [
      'FORMA CLÁSICA VIRILIZANTE SIMPLE EN RECIÉN NACIDAS (Cariotipo 46,XX):',
      '- AMBIGÜEDAD GENITAL SEVERA AL NACER: hipertrofia clitoridiana ("pseudofalo"), fusión labioescrotal y seno urogenital común (clasificación de Prader I a V)',
      '- Útero, trompas y ovarios internos normales con vagina virilizada externamente',
      'FORMA CLÁSICA PIERDESAL (75% de casos clásicos - CRISIS NEONATAL ENTRE DÍAS 7 Y 21 DE VIDA):',
      '- En recién nacidos varones (genitales externos normales) o niñas virilizadas: letargia, vómitos explosivos, rechazo de tomas',
      '- Deshidratación hiponatrémica grave rápidamente progresiva, pérdida ponderal severa y colapso cardiovascular / shock hipovolémico',
      'HIPERPIGMENTACIÓN CUTÁNEA PATOGNOMÓNICA: areolas, pliegues cutáneos y genitales hiperpigmentados por exceso de ACTH/MSH',
      'FORMA NO CLÁSICA (TARDÍA): pubarquia precoz, acné quístico refractario, hirsutismo, oligomenorrea e infertilidad'
    ],
    redFlags: ['CRISIS ADRENAL PIERDESAL AGUDA NEONATAL: HIPONATREMIA SEVERA + HIPERPOTASEMIA + SHOCK CARDIOCIRCULATORIO REFRACTARIO (MORTALIDAD ELEVADA)'],
    criteria: 'Niveles marcadamente elevados de 17-hidroxiprogesterona (17-OHP) en tamizaje neonatal o plasma venoso MÁS ionograma patológico y confirmación molecular de CYP21A2.',
    labTests: [
      '17-ALFA-HIDROXIPROGESTERONA (17-OHP) en tamizaje neonatal en sangre de talón y en suero venoso basal (>10-20 ng/mL en neonatos a término)',
      'Ionograma sérico urgente: HIPONATREMIA (<130 mEq/L) MÁS HIPERPOTASEMIA (>6.5 mEq/L) con acidosis metabólica hiperclorémica',
      'Cortisol plasmático matutino bajo con ACTH plasmática marcadamente elevada',
      'Actividad de renina plasmática (ARP) o aldosterona (renina muy elevada con aldosterona baja en forma pierdesal)',
      'Cariotipo citogenético rápido (46,XX vs 46,XY) para asignación sexual oportuna en ambigüedad genital'
    ],
    imaging: [
      'Ecografía pélvica y transabdominal urgente: visualización de útero y ovarios normales en niñas con ambigüedad genital (confirma sexo cromosómico femenino)',
      'Ecografía renal y de glándulas suprarrenales: hiperplasia bilateral de las suprarrenales con patrón cerebriforme',
      'Electrocardiograma urgente ante hiperpotasemia: ondas T picudas, ensanchamiento del QRS y arritmias ventriculares'
    ],
    differential: ['Otras causas de ambigüedad genital (insensibilidad a andrógenos, disgenesia gonadal)', 'Hipoaldosteronismo primario / pseudohipoaldosteronismo', 'Estenosis hipertrófica del píloro (alcalosis hipopotasémica hipoclorémica en contraposición a acidosis con hiperpotasemia)'],
    firstLine: [
      'MANEJO DE LA CRISIS SUPRARRENAL AGUDA PIERDESAL (EMERGENCIA VITAL):',
      '- Reanimación hídrica agresiva: Solución Salina Isotónica al 0.9% (20 mL/kg en bolo) con dextrosa al 5% para corregir hipoglucemia y deshidratación',
      '- HIDROCORTISONA INTRAVENOSA: bolo urgente de 50-100 mg/m2 seguido de 50-100 mg/m2/día en infusión continua o dividido cada 6 horas',
      'TRATAMIENTO DE MANTENIMIENTO SUSTITUTIVO CRÓNICO:',
      '- Reemplazo glucocorticoide: HIDROCORTISONA ORAL (10-15 mg/m2/día dividida en 3 tomas diarias)',
      '- Reemplazo mineralocorticoide: FLUDROCORTISONA ORAL (0.05 - 0.2 mg/día) MÁS cloruro de sodio (suplementación de sal 1-2 g/día en lactantes)'
    ],
    alternatives: [
      'Cirugía reconstructiva urogenital (genitoplastia feminizante precoz) programada en centros de alta experiencia pediátrica',
      'Tratamiento de la hiperpotasemia severa: gluconato de calcio IV, salbutamol nebulizado, resinas de intercambio iónico'
    ],
    nonPharm: [
      'Protocolo estricto de DOSIS DE ESTRÉS de hidrocortisona: duplicar o triplicar la dosis habitual oral ante fiebre >38.5°C, gastroenteritis, traumatismos o cirugías',
      'Asignación del sexo y asesoramiento psicosocial coordinado por equipo multidisciplinario con bioética'
    ],
    nursingCare: [
      'PRIORIDAD ABSOLUTA EN NEONATOLOGÍA: Todo neonato con genitales ambiguos o varón con vómitos y pérdida de peso debe tener monitoreo cardíaco y electrolitos urgentes',
      'Identificación inmediata de signos de crisis suprarrenal: hipotensión, taquicardia filiforme, vómitos, cianosis y letargia profunda',
      'Educación intensiva a los padres sobre la administración de hidrocortisona inyectable intramuscular (Solu-Cortef) de emergencia en el hogar',
      'Cuidado estricto del balance hidroelectrolítico y no asumir sexo del lactante hasta tener confirmación de cariotipo y ecografía'
    ]
  },
  {
    number: 582,
    id: 'diag-582',
    title: 'Espina Bífida y Mielomeningocele (Defectos del Tubo Neural / Disrafismo Espinal Abierto)',
    cie10: 'Q05.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Defecto congénito grave de cierre del neuroporo posterior del tubo neural durante la cuarta semana de desarrollo embrionario (día 26-28 de gestación), resultando en la falta de fusión de los arcos vertebrales posteriores con protrusión externa de las meninges y médula espinal no funcionante (plácoda) expuesta al ambiente amniótico, frecuentemente asociado a malformación de Chiari II e hidrocefalia.',
    symptoms: [
      'Masa quística o saco membranoso abierto en la línea media del dorso (más frecuente en región lumbosacra) con médula espinal expuesta (plácoda neural húmeda roja)',
      'Parálisis motora flácida arrefléxica y pérdida sensitiva bilateral simétrica distal por debajo del nivel de la lesión medular',
      'Disfunción vesical e intestinal neurogénica universal (vejiga neurogénica con incontinencia o retención urinaria e incontinencia fecal)',
      'Deformidades ortopédicas secundarias de extremidades inferiores: pie zambo (equinovaro), luxación congénita de cadera y artrogriposis',
      'Signos asociados a Malformación de Chiari II (herniación cerebelosa y del tronco encefálico por el foramen magno): estridor inspiratorio, parálisis de cuerdas vocales, disfagia y apneas centrales',
      'Hidrocefalia progresiva en >80% de casos con fontanela abombada y aumento rápido del perímetro cefálico tras el cierre del defecto dorsal'
    ],
    redFlags: ['SALIDA DE LÍQUIDO CEFALORRAQUÍDEO POR LA PLÁCODA EXPUESTA (RIESGO EXTREMO DE MENINGITIS / VENTRICULITIS BACTERIANA)', 'ESTRIDOR Y PARÁLISIS BULBAR POR MALFORMACIÓN DE CHIARI II COMPRIMIDA'],
    criteria: 'Inspección visual clínica directa de la lesión disráfica vertebral expuesta al nacer o detección prenatal ecográfica de defectos espinales con signo del "limón" y de la "banana".',
    labTests: [
      'Tamizaje bioquímico prenatal del segundo trimestre: Alfa-fetoproteína (AFP) sérica materna marcadamente elevada MÁS acetilcolinesterasa en líquido amniótico',
      'Cultivo y análisis de LCR si hay sospecha de infección del sistema nervioso central',
      'Urocultivo periódico estricto por alto riesgo de bacteriuria recurrente'
    ],
    imaging: [
      'Ecografía obstétrica estructural prenatal de alta resolución: defecto vertebral dorsal, cráneo en "limón", cerebelo incurvado en "banana" y ventriculomegalia',
      'RMN espinal y craneal neonatal postparto: evaluación del nivel exacto de la lesión, médula anclada, siringomielia, malformación de Chiari II e hidrocefalia',
      'Ecografía renal y vesical seriada: descarte de reflujo vesicoureteral, hidronefrosis y engrosamiento trabecular de pared vesical',
      'Estudio urodinámico formal para clasificar patrón de vejiga neurogénica'
    ],
    differential: ['Meningocele espinal cerrado (sin tejido neural en el saco)', 'Espina bífida oculta / Seno dérmico congénito', 'Teratoma sacrococcígeo', 'Lipomielomeningocele'],
    firstLine: [
      'CIERRE QUIRÚRGICO NEUROQUIRÚRGICO URGENTE DEL MIELOMENINGOCELE DENTRO DE LAS PRIMERAS 24 A 48 HORAS DE VIDA (para prevenir meningitis y daño neuronal secundario)',
      'O Cirugía de reparación fetal intrauterina a cielo abierto o fetoscópica (entre semanas 19 y 26) para disminuir necesidad de derivación por hidrocefalia y mejorar función motora'
    ],
    alternatives: [
      'Manejo de hidrocefalia: colocación de derivación ventrículoperitoneal (DVP) o tercer ventriculostomía endoscópica con coagulación de plexos coroideos (ETV/CPC)',
      'Cateterismo vesical intermitente limpio cada 3 a 4 horas MÁS anticolinérgicos (Oxibutinina) para proteger tracto urinario superior',
      'Corrección quirúrgica de deformidades de pie zambo y luxación de cadera'
    ],
    nonPharm: [
      'PREVENCIÓN PRIMARIA PRECONCEPCIONAL ESENCIAL: suplementación con ÁCIDO FÓLICO oral (0.4 mg/día en población general y 4 a 5 mg/día en mujeres con antecedentes de hijo previo con DTN) iniciado al menos 3 meses antes de la concepción y durante el primer trimestre',
      'PROHIBICIÓN ESTRICTA DE CONTACTO CON LÁTEX: riesgo de alergia al látex severa potencialmente anafiláctica por exposición mucosal temprana (utilizar siempre insumos 100% libres de látex)'
    ],
    nursingCare: [
      'CUIDADO INMEDIATO DE LA PLÁCODA AL NACER: mantener al recién nacido en decúbito prono estricto; cubrir la lesión con apósitos estériles no adherentes embebidos en solución salina tibia húmeda estéril (evitar secado e infección bacteriana)',
      'PROHIBIDO EL USO DE MATERIAL CON LÁTEX (guantes de vinilo/nitrilo, sondas y apósitos exclusivamente libres de látex)',
      'Monitoreo riguroso diario del perímetro cefálico y tensión de la fontanela anterior',
      'Capacitación exhaustiva y empática a los padres en la técnica del cateterismo vesical intermitente estéril'
    ]
  },
  {
    number: 583,
    id: 'diag-583',
    title: 'Hidrocefalia Congénita (Estenosis del Acueducto de Silvio y Malformación de Dandy-Walker)',
    cie10: 'Q03.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Dilatación patológica del sistema ventricular encefálico debida a una alteración en la producción, circulación o reabsorción del líquido cefalorraquídeo (LCR) presente desde el nacimiento, secundaria a causas no comunicantes obstructivas (estenosis del acueducto de Silvio, malformación de Dandy-Walker) o comunicantes.',
    symptoms: [
      'MACROCEFALIA PROGRESIVA CON AUMENTO DESPROPORCIONADO DEL PERÍMETRO CEFÁLICO (cruza percentiles hacia arriba de forma acelerada)',
      'Fontanela anterior abombada, hipertensa, pulsátil y de gran tamaño; suturas craneanas ampliamente diástasadas',
      'SIGNO DE LOS "OJOS EN SOL PONIENTE" (desviación tónica conjugada inferior de los ojos por compresión tectal)',
      'Ingurgitación y dilatación de la red venosa epicraneana superficial ("cabeza de medusa")',
      'Irritabilidad extrema, vómitos en proyectil, rechazo del alimento y letargia',
      'Hipertonía muscular de extremidades inferiores con reflejos osteotendinosos exaltados y clonus',
      'Llanto agudo encefálico agudo y pausas apneicas'
    ],
    redFlags: ['SIGNOS DE HIPERTENSIÓN ENDOCRANEANA AGUDA COMPENSADA AL LÍMITE: BRADICARDIA, APNEAS Y COMA (TRIADA DE CUSHING)'],
    criteria: 'Medición de perímetro cefálico >percentil 97 MÁS neuroimagen que demuestre índice de Evans >0.30 y dilatación ventricular significativa con compromiso del parénquima.',
    labTests: [
      'Análisis citoquímico y microbiológico de LCR (si se sospecha causa infecciosa congénita TORCH como toxoplasmosis o CMV)',
      'Perfil serológico materno-infantil de infecciones intrauterinas (TORCH)'
    ],
    imaging: [
      'Ecografía transfontanelar en el recién nacido: método no invasivo de elección para seguimiento rápido a pie de cuna',
      'Resonancia magnética cerebral y de fosa posterior (método de referencia anatómico): visualización del acueducto de Silvio, fosa posterior quística en Dandy-Walker y agenesia del vermis',
      'TAC craneal de emergencia: indicada ante sospecha de disfunción valvular o hipertensión endocraneana súbita'
    ],
    differential: ['Megalencefalia benigna familiar (ventrículos normales)', 'Hematoma subdural crónico del lactante', 'Hidranencefalia (destrucción hemisférica total)', 'Quiste aracnoideo intracraneal grande'],
    firstLine: [
      'TRATAMIENTO QUIRÚRGICO NEUROQUIRÚRGICO DE DERIVACIÓN:',
      '- Derivación Ventrículo-Peritoneal (DVP) con válvula reguladora de presión (de flujo o presión programable)',
      '- Tercer Ventriculostomía Endoscópica (TVE / ETV) con o sin coagulación de plexos coroideos, ideal en estenosis del acueducto de Silvio'
    ],
    alternatives: [
      'Derivación ventricular externa (DVE) temporal ante sospecha de infección activa o sangrado intraventricular',
      'Tratamiento médico transitorio (Acetazolamida y Furosemida) únicamente como medida temporal puente en prematuros antes de la cirugía definitiva'
    ],
    nonPharm: [
      'Seguimiento neuropsicológico y estimulación neurocognitiva precoz',
      'Manejo postural para evitar úlceras por decúbito en el cuero cabelludo secundarias al peso de la cabeza'
    ],
    nursingCare: [
      'Medición diaria rigurosa del perímetro cefálico matutino con cinta métrica inextensible, trazando la curva en la gráfica percentilar',
      'Vigilancia posquirúrgica de signos de disfunción o infección de la DVP: fiebre, irritabilidad, enrojecimiento en el trayecto del catéter subcutáneo, vómitos',
      'Cuidado del cuero cabelludo: rotación horaria de posición de la cabeza con almohadillas viscoelásticas tipo "nido" para evitar escaras por presión',
      'Posicionamiento con elevación de la cabecera a 30 grados para favorecer el drenaje venoso'
    ]
  },
  {
    number: 584,
    id: 'diag-584',
    title: 'Labio Leporino y Paladar Hendido (Fisura Labiopalatina Unilateral o Bilateral)',
    cie10: 'Q37.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Malformaciones congénitas craneofaciales frecuentes causadas por la falta de fusión de los procesos maxilares y nasal medio (labio leporino) durante la 5ta-6ta semana de gestación, o de las crestas palatinas secundarias (paladar hendido) durante la 7ma-10ma semana, con afectación estética, funcional deglutoria, respiratoria y fonoaudiológica.',
    symptoms: [
      'Fisura visible del labio superior (unilateral o bilateral, completa o incompleta) que puede extenderse a través del reborde alveolar y suelo nasal',
      'Fisura del paladar duro y/o blando con comunicación directa oronasal amplia',
      'Dificultad severa para la lactancia materna: incapacidad para generar presión negativa intraoral de succión con escape nasal de leche y riesgo de atragantamiento',
      'Infecciones recurrentes del oído medio (otitis media serosa/aguda) por disfunción del músculo tensor del velo del paladar y de la trompa de Eustaquio',
      'Hipoacusia de conducción secundaria',
      'Alteraciones severas en el desarrollo del habla: hipernasalidad y dislalias compensatorias',
      'Anomalías en el desarrollo dental maxilar: agenesia dental, dientes supernumerarios o maloclusión severa'
    ],
    redFlags: ['ASPIRACIÓN PULMONAR DE LECHE CON CIANOSIS O ATRAGANTAMIENTO DURANTE LA ALIMENTACIÓN', 'DESNUTRICIÓN PROTEICO-CALÓRICA POR INGESTIÓN DEFICIENTE'],
    criteria: 'Inspección directa anatómica visual de la cavidad bucal y labios al nacimiento (o diagnóstico prenatal por ultrasonido 3D).',
    labTests: [
      'Cariotipo citogenético y microarray si se asocia a otras malformaciones (descarte de trisomía 13, trisomía 18, o deleción 22q11.2 DiGeorge)',
      'Hemograma y coagulograma prequirúrgicos completos'
    ],
    imaging: [
      'Ecografía obstétrica morfofetal 3D/4D prenatal: detección precoz del defecto labial',
      'Impedanciometría y audiometría para evaluación de función del oído medio y audición',
      'Radiografías dentales y tomografía cone-beam maxilofacial previa a injerto alveolar'
    ],
    differential: ['Fisura palatina aislada', 'Secuencia de Pierre Robin (micrognatia, glosoptosis y paladar hendido en U)', 'Síndrome de Van der Woude (con hoyuelos en labio inferior)', 'Disostosis mandibulofacial (Treacher Collins)'],
    firstLine: [
      'CRONOGRAMA QUIRÚRGICO PROTOCOLIZADO POR EQUIPO MULTIDISCIPLINARIO:',
      '- Queiloplastia primaria (reparación del labio leporino): alrededor de los 3 meses de vida (cumpliendo la "regla de los 10" de Millard: ≥10 libras de peso, ≥10 semanas de vida, ≥10 g/dL de hemoglobina)',
      '- Palatoplastia (cierre de paladar blando y duro): entre los 9 y 12 meses de edad (antes de la adquisición del habla fluida para evitar patrones patológicos)'
    ],
    alternatives: [
      'Moldeado nasoalveolar prequirúrgico (NAM) con placa ortopédica para reducir la brecha alveolar antes de la cirugía',
      'Injerto óseo alveolar secundario (cresta ilíaca) entre los 7 y 9 años antes de la erupción del canino permanente',
      'Miringotomía con colocación de tubos de ventilación timpánica durante la palatoplastia para prevenir hipoacusia'
    ],
    nonPharm: [
      'Técnicas de alimentación asistida con biberones y tetinas especiales (tetina Haberman / biberón SpecialNeeds de Medela o biberón Pigeon)',
      'Alimentación con el lactante en posición semisentada erguida (45 a 60 grados) con pausas frecuentes para favorecer el eructo',
      'Terapia fonoaudiológica del lenguaje precoz continua'
    ],
    nursingCare: [
      'ASESORAMIENTO NUTRICIONAL CRÍTICO: enseñar a la madre el uso de biberones especiales reguladores de flujo para evitar deglución de aire y escape nasal',
      'CUIDADO POSOPERATORIO DE LA HERIDA QUIRÚRGICA: mantener la línea de sutura limpia mediante hisopos húmedos con solución fisiológica estéril; evitar que el niño se toque la boca con inmovilizadores de codos suaves ("manguitos")',
      'No introducir cucharas, chupetes ni objetos punzantes en la cavidad bucal durante las 3 a 4 semanas postquirúrgicas de palatoplastia',
      'Acompañamiento empático y contención emocional a los padres frente a la alteración estética inicial'
    ]
  },
  {
    number: 585,
    id: 'diag-585',
    title: 'Atresia Esofágica con Fístula Traqueoesofágica (AE / FTE - Clasificación de Vogt / Gross)',
    cie10: 'Q39.1',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Interrupción congénita de la continuidad de la luz del esófago (fondo de saco ciego) asociada o no a una comunicación anómala con la tráquea (fístula traqueoesofágica), siendo la Tipo III de Gross (atresia con fístula traqueoesofágica distal) la forma más frecuente (85-90%), constituyendo una urgencia quirúrgica neonatal inmediata.',
    symptoms: [
      'HISTORIA OBSTÉTRICA DE POLIHIDRAMNIOS MATERNO SEVERO',
      'SIALORREA ESPUMOSA CONSTANTE POR BOCA Y NARIZ EN EL RECIÉN NACIDO ("niño burbujeante")',
      'ATRAGANTAMIENTO, TOS PAROXÍSTICA Y CIANOSIS INMEDIATA AL INTENTAR LA PRIMERA TOMA DE ALIMENTO',
      'IMPOSIBILIDAD PARA AVANZAR UNA SONDA NASOGÁSTRICA U OROGÁSTRICA AL ESTÓMAGO (se detiene a 9-11 cm de la arcada dentaria)',
      'Distensión abdominal progresiva secundaria al paso masivo de aire desde la vía aérea hacia el estómago a través de la fístula distal (en Tipo III)',
      'Dificultad respiratoria aguda por neumonitis química ácida por reflujo gástrico a través de la fístula hacia los pulmones'
    ],
    redFlags: ['BRONCOASPIRACIÓN MASIVA DE SECRECIONES Y CONTENIDO GÁSTRICO ÁCIDO CON FALLA RESPIRATORIA AGUDA'],
    criteria: 'Detención firme de una sonda radiopaca al intentar introducirla al estómago MÁS radiografía toracoabdominal que confirme el enrollamiento de la sonda en el fondo de saco esofágico proximal superior.',
    labTests: [
      'Descarte de asociación VACTERL (Vertebral, Anal, Cardíaca, Traqueoesofágica, Renal, Limb/extremidades) en >50% de casos',
      'Gases arteriales (evaluación de hipoxemia y acidosis)'
    ],
    imaging: [
      'Radiografía simple de tórax y abdomen con sonda radioopaca (tubo de Replogle): muestra la sonda doblada sobre sí misma en el bolsón esofágico superior ciego (a nivel de T3-T4)',
      'Presencia de aire en el estómago e intestinos en la radiografía: confirma fístula traqueoesofágica distal (Tipo III); ausencia completa de gas abdominal indica atresia aislada pura sin fístula (Tipo I)',
      'Ecocardiograma urgente: identificación de la posición del arco aórtico (arco aórtico derecho en 2.5-5% cambia el abordaje quirúrgico por toracotomía izquierda)',
      'Ecografía renal y de columna lumbosacra para despistaje de anomalías VACTERL'
    ],
    differential: ['Atresia duodenal o intestinal distal', 'Hendidura laringotraqueoesofágica', 'Disfagia orofaríngea neurogénica', 'Reflujo gastroesofágico masivo'],
    firstLine: [
      'CORRECCIÓN QUIRÚRGICA URGENTE POR TORACOTOMÍA O TORACOSCOPÍA NEONATAL: ligadura y sección de la fístula traqueoesofágica MÁS anastomosis esofágica término-terminal primaria',
      'Manejo preoperatorio inmediato: colocar al recién nacido en posición semisentada a 45 grados con aspiración continua suave del muñón esofágico superior mediante sonda de doble luz (Replogle)'
    ],
    alternatives: [
      'En atresias con "brecha larga" (long gap >3 cm): gastrostomía de descompresión inicial y tracción diferida o transposición colónica/gástrica posterior',
      'Dilataciones endoscópicas periódicas de estenosis esofágica anastomótica en el seguimiento posquirúrgico'
    ],
    nonPharm: [
      'SUSPENSIÓN ABSOLUTA DE LA VÍA ORAL (NPO) Y APORTE POR NUTRICIÓN PARENTERAL TOTAL (NPT)',
      'Evitar intubación endotraqueal vigorosa o ventilación con máscara/bolsa (BVM) que distiende masivamente el estómago a través de la fístula con riesgo de perforación gástrica',
      'Protección gástrica con inhibidores de bomba de protones (Omeprazol IV)'
    ],
    nursingCare: [
      'CUIDADO PREOPERATORIO CRÍTICO: Aspiración continua de baja presión (-15 a -20 mmHg) del saco esofágico ciego superior con sonda de Replogle para evitar paso de saliva a la vía aérea',
      'Posición erguida en decúbito supino semisentado a 45° estricto para reducir el reflujo de contenido gástrico hacia los pulmones a través de la fístula',
      'Mantenimiento meticuloso de la sonda transanastomótica posquirúrgica (NUNCA manipular, aspirar con fuerza ni reintroducir si se desplaza sin orden médica)',
      'Observación de signos de fuga anastomótica: enfisema subcutáneo, neumotórax o salida de saliva por el drenaje pleural torácico'
    ]
  },
  {
    number: 586,
    id: 'diag-586',
    title: 'Hernia Diafragmática Congénita (HDC - Defecto de Bochdalek y Morgagni)',
    cie10: 'Q79.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Defecto embriológico en la formación del diafragma por falta de cierre de los canales pleuroperitoneales (típicamente posterolateral izquierdo de Bochdalek en 85-90%), que permite la herniación de vísceras abdominales (estómago, asas intestinales, bazo e hígado) hacia la cavidad torácica durante el desarrollo fetal, causando hipoplasia pulmonar grave e hipertensión pulmonar persistente neonatal.',
    symptoms: [
      'DIFICULTAD RESPIRATORIA AGUDA SEVERA INMEDIATA AL NACER: taquipnea, tirajes intercostales, quejido espiratorio y cianosis refractaria a oxigenoterapia',
      'ABDOMEN ESCAFOIDES O EXCAVADO (deprimido) patognomónico por migración de los órganos abdominales al tórax',
      'Tórax abombado y asimétrico con ruidos hidroaéreos audibles en el hemitórax izquierdo',
      'Desviación contralateral de los ruidos cardíacos (latido cardíaco desplazado al hemitórax derecho)',
      'Ausencia o marcada disminución del murmullo vesicular en el lado del hemitórax afecto',
      'Signos de hipertensión pulmonar persistente (labilidad extrema con cianosis diferencial pre y posductal)'
    ],
    redFlags: ['CONTRAINDICACIÓN FORMAL DE VENTILACIÓN CON BOLSA Y MASCARILLA FACIAL (AMBÚ): DISTIENDE EL ESTÓMAGO E INTESTINOS EN EL TÓRAX COMPRIMIENDO EL PULMÓN RESTANTE'],
    criteria: 'Tríada clásica de dificultad respiratoria inmediata + abdomen excavado + ruidos cardíacos desviados MÁS radiografía de tórax con presencia de asas intestinales en cavidad torácica.',
    labTests: [
      'Gases arteriales seriados (preductal y posductal): acidosis respiratoria y metabólica grave, cálculo del índice de oxigenación (IO)',
      'Grupo sanguíneo, factor Rh y pruebas de coagulación para preparación quirúrgica'
    ],
    imaging: [
      'Radiografía simple toracoabdominal urgente: presencia de múltiples imágenes aéreas quísticas (asas intestinales) y sonda gástrica enrollada en el hemitórax izquierdo, desplazamiento mediastínico contralateral y ausencia relativa de gas en el abdomen',
      'Ecocardiograma Doppler color urgente: evaluación de la anatomía cardiovascular, función ventricular derecha e hipertensión pulmonar suprasistémica (shunt D-I en ductus o foramen oval)',
      'Ecografía obstétrica prenatal con cálculo del LHR (Lung-to-Head Ratio o cociente pulmón/cabeza) para estratificación de riesgo'
    ],
    differential: ['Malformación congénita de la vía aérea pulmonar (CPAM / MACP)', 'Enfisema lobar congénito', 'Neumotórax a tensión neonatal', 'Eventración diafragmática'],
    firstLine: [
      'ESTABILIZACIÓN Y RESUCITACIÓN NEONATAL INMEDIATA EN SALA DE PARTOS:',
      '- INTUBACIÓN ENDOTRAQUEAL INMEDIATA AL NACER (evitar por completo la ventilación con bolsa/mascarilla)',
      '- Descompresión gástrica urgente mediante sonda orogástrica continua de doble luz con aspiración intermitente suave',
      '- Estrategia de "ventilación mecánica gentil": hipercapnia permisiva (pCO2 50-65 mmHg), presiones inspiratorias pico bajas (<20-25 cmH2O) o ventilación oscilatoria de alta frecuencia (VAFO)'
    ],
    alternatives: [
      'Óxido Nítrico Inhalado (iNO a 10-20 ppm) en presencia de hipertensión pulmonar refractaria con adecuada función ventricular izquierda',
      'Soporte con ECMO (oxigenación por membrana extracorpórea) venoarterial como puente a la estabilización en centros terciarios',
      'Reparación quirúrgica diferida por laparotomía o toracoscopía tras estabilización hemodinámica completa (reversión de hipertensión pulmonar)'
    ],
    nonPharm: [
      'Manejo estricto de mínima estimulación sensorial, sedación y analgesia para prevenir crisis de hipertensión pulmonar desencadenadas por dolor',
      'Monitorización continua con oximetría preductal (mano derecha) y posductal (pies)'
    ],
    nursingCare: [
      'INTUBACIÓN OBLIGATORIA INMEDIATA: tener preparado tubo endotraqueal y laringoscopio; NO ventilar con ambú/mascarilla bajo ninguna circunstancia',
      'Instalación y verificación de permeabilidad permanente de la sonda orogástrica descompresiva',
      'Manipulación mínima del neonato: cuidados agrupados, ambiente térmico neutro y control riguroso de alarmas del ventilador',
      'Vigilancia estricta del gradiente pre/posductal de SpO2 (>10% refleja cortocircuito derecha-izquierda significativo)'
    ]
  },
  {
    number: 587,
    id: 'diag-587',
    title: 'Estenosis Hipertrófica del Píloro (EHP / Hipertrofia del Esfínter Pilórico)',
    cie10: 'Q40.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Hipertrofia e hiperplasia concéntrica progresiva de la capa muscular circular del píloro que produce una obstrucción mecánica del tracto de salida gástrico, manifestándose característicamente entre la 3ra y 6ta semana de vida con vómitos explosivos no biliosos y deshidratación con alcalosis metabólica.',
    symptoms: [
      'VÓMITOS EN PROYECTIL O "A CHORRO" NO BILIOSOS (lácteos o de leche cortada) que ocurren inmediatamente después de cada toma',
      'Lactante hambriento insaciable ("hambre voraz"): llora con avidez y busca el pecho o biberón inmediatamente después de vomitar',
      'Pérdida de peso progresiva, estancamiento ponderal y deshidratación (fontanela deprimida, mucosas secas, llanto sin lágrimas)',
      'OLIVA PILÓRICA PALPABLE: nódulo firme, móvil, indoloro del tamaño de una aceituna en el cuadrante superior derecho / epigastrio tras vomitar (con el abdomen relajado)',
      'Ondas peristálticas gástricas visibles de izquierda a derecha en epigastrio previas al vómito',
      'Ictericia neonatal no conjugada asociada en 2-5% (Síndrome de icteropilórico)'
    ],
    redFlags: ['DESHIDRATACIÓN GRAVE CON SHOCK Y ALCALOSIS METABÓLICA HIPOCLORÉMICA SEVERA: NUNCA OPERAR HASTA CORREGIR EL MEDIO INTERNO'],
    criteria: 'Sospecha clínica por vómitos en proyectil no biliosos con oliva palpable MÁS confirmación ecográfica: espesor del músculo pilórico ≥3 mm y longitud del canal pilórico ≥15 mm.',
    labTests: [
      'Gases venosos/arteriales e ionograma: ALCALOSIS METABÓLICA HIPOCLORÉMICA E HIPOPOTASÉMICA patognomónica (por pérdida masiva de ácido clorhídrico por el vómito)',
      'Hemograma completo y urea/creatinina (evaluación de deshidratación prerrenal)',
      'Bilirrubina total y fraccionada'
    ],
    imaging: [
      'Ecografía abdominal de alta resolución (estándar de oro de elección): engrosamiento de la muscular pilórica (grosor de la pared ≥3 mm, longitud ≥15 mm, diámetro transversal ≥11 mm) con "signo de la diana" o "rosquilla"',
      'Radiografía simple de abdomen: cámara gástrica muy distendida con poco o ningún gas en el resto del intestino ("estómago en bota")',
      'Serie esofagogastroduodenal con contraste (si la ecografía es dudosa): "signo del cordel" o canal pilórico filiforme elongado'
    ],
    differential: ['Reflujo gastroesofágico fisiológico o patológico', 'Malrotación intestinal con vólvulo (vómito típicamente bilioso verdoso)', 'Hiperplasia suprarrenal congénita forma pierdesal (acidosis con hiperpotasemia vs alcalosis con hipopotasemia)', 'Atresia duodenal'],
    firstLine: [
      'REANIMACIÓN HIDROELECTROLÍTICA PREOPERATORIA MANDATORIA (LA EHP ES UNA URGENCIA MÉDICA, NO UNA EMERGENCIA QUIRÚRGICA INMEDIATA):',
      '- Suspensión de la vía oral e inicio de infusión con Dextrosa al 5% en solución salina al 0.45% o 0.9% adicionando Cloruro de Potasio (20-30 mEq/L) una vez comprobada diuresis',
      '- Metas prequirúrgicas estrictas: Cloro sérico >100 mEq/L, Bicarbonato <26 mEq/L, Sodio y Potasio en rango normal',
      'TRATAMIENTO DEFINITIVO: PILOROMIOTOMÍA EXTRAMUCOSA DE FREDET-RAMSTEDT (laparoscópica o abierta) seccionando la capa muscular sin lesionar la mucosa'
    ],
    alternatives: [
      'Manejo conservador con sulfato de atropina oral o IV únicamente en casos excepcionales donde la anestesia o cirugía esté estrictamente contraindicada'
    ],
    nonPharm: [
      'Colocación de sonda orogástrica abierta a caída libre para descomprimir el estómago antes de la inducción anestésica',
      'Reinicio de la alimentación oral fraccionada a bajas dosis a las 4 a 6 horas poscirugía aumentando gradualmente'
    ],
    nursingCare: [
      'VIGILANCIA HIDROELECTROLÍTICA ESTRICTA: control de balance hídrico horario, peso diario y características del vómito',
      'Suspender inmediatamente la vía oral ante la sospecha clínica',
      'Descompresión gástrica cuidadosa con sonda orogástrica antes del traslado al quirófano para prevenir broncoaspiración anestésica',
      'Educación a la madre en el postoperatorio: los vómitos leves en las primeras 24-48 horas post-piloromiotomía son frecuentes por edema y no significan fracaso del procedimiento'
    ]
  },
  {
    number: 588,
    id: 'diag-588',
    title: 'Enfermedad de Hirschsprung (Megacolon Agangliónico Congénito)',
    cie10: 'Q43.1',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno congénito de la motilidad intestinal causado por la detención de la migración cráneo-caudal de las células de la cresta neural embrionaria, resultando en la ausencia completa de células ganglionares intramurales (plexos de Meissner y Auerbach) en el recto y colon distal (zona agangliónica permanentemente contraída), provocando obstrucción intestinal funcional baja.',
    symptoms: [
      'RETRASO EN LA EXPULSIÓN DE MECONIO (>24 a 48 horas de vida en recién nacido a término)',
      'Distensión abdominal progresiva marcada y vómitos de contenido bilioso en los primeros días',
      'TACTO RECTAL DIAGNÓSTICO CARACTERÍSTICO: esfínter anal hipertónico apretado, ampolla rectal vacía y EXPULSIÓN EXPLOSIVA DE GASES Y HECES LÍQUIDAS FÉTIDAS al retirar el dedo examinador ("signo del corcho descorchado")',
      'Estreñimiento crónico grave refractario a laxantes que requiere enemas frecuentes en lactantes mayores',
      'Falla de medro y desnutrición crónica con abdomen globuloso prominente'
    ],
    redFlags: ['ENTERODECOLITIS ASOCIADA A HIRSCHSPRUNG (EAH): FIEBRE, DISTENSIÓN SEVERA, DIARREA EXPLOSIVA FÉTIDA, SEPSIS Y SHOCK (PRINCIPAL CAUSA DE MORTALIDAD)'],
    criteria: 'BIOPSIA RECTAL POR ASPIRACIÓN O QUIRÚRGICA (Estándar de Oro): Ausencia completa de células ganglionares en submucosa/muscular MÁS hipertrofia de fibras nerviosas colinérgicas e intensa tinción positiva para acetilcolinesterasa (AChE) o ausencia de calretinina.',
    labTests: [
      'Biopsia rectal por aspiración a 2 y 3 cm por encima de la línea pectínea (estudio anatomopatológico con inmunohistoquímica de calretinina)',
      'Gases venosos, hemograma y reactantes de fase aguda si se sospecha enterocolitis asociada'
    ],
    imaging: [
      'Enema baritado / colon por enema sin preparación previa: visualización patognomónica de la "ZONA DE TRANSICIÓN" en forma de embudo entre el segmento distal agangliónico estrecho y el colon proximal dilatado (megacolon)',
      'Radiografía simple de abdomen: distensión masiva de asas de colon proximal con ausencia de gas en la ampolla rectal',
      'Manometría anorrectal: ausencia del reflejo inhibitorio rectoanal (RIRA) normal al inflar el balón rectal'
    ],
    differential: ['Tapón meconial o íleo meconial (asociado a fibrosis quística)', 'Atresia colónica o estenosis anal', 'Hipotiroidismo congénito', 'Estreñimiento funcional del lactante / retención fecal psicógena'],
    firstLine: [
      'TRATAMIENTO DEFINITIVO QUIRÚRGICO DE DESCENSO COLÓNICO ("PULL-THROUGH"): resección del segmento agangliónico y anastomosis del colon ganglionar sano al canal anal (Técnicas de Swenson, Duhamel o Soave / De la Torre transanal endorrectal sin laparotomía)',
      'Manejo conservador inicial en neonatos: descompresión rectal mecánica diaria mediante lavados rectales con sonda flexible de Nelaton con solución fisiológica tibia'
    ],
    alternatives: [
      'Colostomía proximal de derivación temporal en la zona ganglionar sana (en casos de enterocolitis grave, perforación colónica o prematuros inestables)',
      'Miotomía-miectomía anorrectal posterior en formas de segmento ultracorto'
    ],
    nonPharm: [
      'Descompresión rectal seriada protocolizada por personal entrenado antes de la cirugía',
      'Manejo profiláctico exhaustivo de la enterocolitis con antibióticos de amplio espectro (Metronidazol + Cefotaxima/Ampicilina) y reposo intestinal ante cualquier episodio de diarrea y distensión'
    ],
    nursingCare: [
      'TÉCNICA ESTRICTA DE LAVADOS RECTALES: usar solución salina isotónica al 0.9% tibia; NUNCA usar agua corriente (hipotónica) por riesgo mortal de hiponatremia dilucional e intoxicación hídrica',
      'Medición horaria o en cada turno del perímetro abdominal para evaluar respuesta a las descompresiones',
      'Vigilancia estricta de signos de enterocolitis: taquicardia, fiebre, distensión timpánica y evacuaciones acuosas malolientes',
      'Cuidados periostomales en caso de colostomía de descarga (protección de la piel periestomal con crema barrera de óxido de zinc)'
    ]
  },
  {
    number: 589,
    id: 'diag-589',
    title: 'Malformación Anorrectal (MAR - Ano Imperforado y Fístulas Perineales/Urinarias)',
    cie10: 'Q42.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Espectro amplio de anomalías congénitas del desarrollo anorrectal caracterizadas por la ausencia de orificio anal en su localización anatómica normal, con interrupción del recto que puede terminar a ciegas o más frecuentemente comunicarse mediante una fístula hacia el periné, el tracto urinario (uretra o vejiga) o genital (vagina o vestíbulo), o converger en un canal común (cloaca persistente).',
    symptoms: [
      'AUSENCIA DE ORIFICIO ANAL VISIBLE EN EL CENTRO DEL ESFÍNTER EXTERNO EN EL EXAMEN FÍSICO NEONATAL',
      'Salida de meconio por un orificio anómalo: fístula perineal anterior, fístula en el introito vestibular o salida de meconio por la uretra mezclado con la orina (en varones)',
      'Ausencia de emisión de meconio por vía rectal tras 24 horas de vida',
      'Distensión abdominal progresiva y vómitos biliosos secundarios a obstrucción intestinal baja',
      'Presencia de cloaca en niñas: un solo orificio perineal externo por donde drenan orina, meconio y secreción vaginal',
      'Asociación frecuente con anomalías VACTERL (vertebrales, cardíacas, traqueoesofágicas, renales y de extremidades) y disrafismo espinal en >50%'
    ],
    redFlags: ['SALIDA DE MECONIO POR EL MEATO URINARIO EN EL VARÓN: INDICA FÍSTULA URINARIA (URETRAL O VESICAL) DE DEFECTO ALTO', 'CLOACA PERSISTENTE EN NIÑAS CON HIDROCOLPOS E HIDRONEFROSIS GRAVE'],
    criteria: 'Inspección meticulosa perineal al nacer con ausencia de ano normal MÁS clasificación según la presencia y tipo de fístula observada tras 24 horas de vida.',
    labTests: [
      'Examen general de orina con centrifugado: presencia de restos de meconio o células escamosas confirma fístula rectourinaria en varones',
      'Pruebas de función renal y hemograma completo'
    ],
    imaging: [
      'Invertograma / Radiografía en posición decúbito prono con pelvis elevada (técnica de Wangensteen-Rice modificada) tomada a las 18-24 horas de vida (esperando la llegada de aire distal): mide la distancia entre la bolsa rectal ciega y la piel perineal',
      'Ecografía renal y del tracto urinario urgente (primeras 24 horas): alta incidencia de agenesia renal, hidronefrosis o displasia renal',
      'Ecocardiograma urgente previo a cualquier intervención quirúrgica (descarte de cardiopatía VACTERL)',
      'Ecografía lumbosacra o RMN espinal neonatal: despistaje de médula anclada y espina bífida oculta'
    ],
    differential: ['Ano imperforado simple membranoso bajo', 'Estenosis anal congénita', 'Fístula anovestibular vs Fístula rectovaginal', 'Cloaca persistente'],
    firstLine: [
      'EN FORMAS BAJAS CON FÍSTULA PERINEAL: Anoplastia perineal primaria en el período neonatal sin necesidad de colostomía',
      'EN FORMAS INTERMEDIAS, ALTAS O CLOACA: Colostomía derivativa descompresiva inmediata de asas separadas (en sigma descendente) en las primeras 24-48 horas de vida MÁS posterior corrección anatómica definitiva: ANORRECTOPLASTIA SAGITAL POSTERIOR (ARPSP / Procedimiento de Peña)'
    ],
    alternatives: [
      'Descompresión urgente del hidrocolpos mediante cateterismo en cloacas persistentes complejas para evitar falla renal',
      'Protocolo continuo de calibraciones y dilataciones anales con bujías de Hégar en el postoperatorio de la anoplastia para evitar estenosis'
    ],
    nonPharm: [
      'MANTENER EN NPO CON SONDA OROGÁSTRICA DESCOMPRESIVA EN LAS PRIMERAS 24 HORAS MIENTRAS SE DEFINE EL NIVEL DEL DEFECTO',
      'No intentar sondar con fuerza fístulas estrechas que puedan desgarrar tejidos'
    ],
    nursingCare: [
      'EXAMEN MINUCIOSO DEL PERINÉ AL NACER: verificar permeabilidad anal antes de administrar cualquier alimento; inspeccionar orina en busca de partículas meconiales',
      'Colocación del neonato en decúbito lateral o prono sin apoyar el periné intervenido quirúrgicamente',
      'CUIDADO Y ENSEÑANZA DEL PROTOCOLO DE BUJÍAS DE HÉGAR: iniciar a las 2 semanas postoperatorias aumentando 1 número cada semana según indicación quirúrgica estricta con lubricante hidrosoluble',
      'Manejo higiénico y protección de la herida anoperineal con solución fisiológica evitando contaminación bacteriana'
    ]
  },
  {
    number: 590,
    id: 'diag-590',
    title: 'Criptorquidia y Testículo No Descendido (Distopia Testicular)',
    cie10: 'Q53.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Falta de descenso de uno o ambos testículos hacia el fondo de la bolsa escrotal a lo largo del trayecto normal inguinoescrotal, constituyendo la anomalía urogenital congénita más frecuente en varones (presente en 1-3% de recién nacidos a término y hasta 30% en prematuros), con riesgo de infertilidad y neoplasia testicular futura.',
    symptoms: [
      'Bolsa escrotal vacía, hipoplásica o hipopigmentada unilateral (85%) o bilateral (15%) en el examen físico',
      'Testículo palpable a lo largo del canal inguinal o en el anillo inguinal externo, o no palpable (intraabdominal, ectópico o atrófico/anorquia)',
      'Diferenciación esencial con el "Testículo retráctil / en ascensor": testículo que puede ser descendido manualmente al fondo del escroto sin tensión y permanece allí hasta desencadenarse el reflejo cremastérico',
      'Ausencia de síntomas dolorosos agudos salvo complicación (torsión testicular de testículo no descendido)'
    ],
    redFlags: ['CRIPTORQUIDIA BILATERAL ASOCIADA A HIPOSPADIAS O MICROPENE: OBLIGATORIO DESCARTAR HIPERPLASIA SUPRARRENAL CONGÉNITA EN NIÑA VIRILIZADA (46,XX) O TRASTORNO DEL DESARROLLO SEXUAL'],
    criteria: 'Examen físico genital riguroso en ambiente cálido y relajado: escroto vacío con imposibilidad de palpar el testículo en el escroto o incapacidad para mantenerlo en el fondo del saco escrotal.',
    labTests: [
      'Cariotipo citogenético y 17-OHP urgente en criptorquidia bilateral no palpable con ambigüedad genital',
      'Testosterona sérica basal y tras estímulo con gonadotropina coriónica humana (hCG) MÁS hormona antimülleriana (AMH) e inhibina B en criptorquidia bilateral no palpable para confirmar presencia de tejido testicular viable'
    ],
    imaging: [
      'La ecografía de rutina NO se recomienda en testículos palpables (no aporta utilidad adicional al examen físico especializado)',
      'Laparoscopía diagnóstica (estándar de oro en testículo no palpable): única técnica que certifica con 100% de precisión la presencia de testículo intraabdominal o atrofia del conducto espermático en fondo de saco ciego',
      'RMN abdominal pélvica si no se dispone de laparoscopía'
    ],
    differential: ['Testículo retráctil hiperreactivo benigno', 'Testículo ectópico (femoral, perineal, púbico)', 'Anorquia congénita (síndrome de regresión testicular)', 'Disgenesia gonadal mixta'],
    firstLine: [
      'ORQUIDOPEXIA QUIRÚRGICA ELECTIVA: fijación del testículo en la bolsa escrotal realizada idealmente entre los 6 y 12 meses de edad (máximo antes de los 18 meses para preservar espermatogénesis y reducir riesgo oncológico):',
      '- Orquidopexia inguinal convencional en testículos palpables',
      '- Orquidopexia laparoscópica en uno o dos tiempos (técnica de Fowler-Stephens) en testículos intraabdominales altos'
    ],
    alternatives: [
      'Tratamiento hormonal (hCG o análogos de GnRH): no recomendado de rutina por baja tasa de éxito y posibles efectos adversos histológicos sobre las células germinales'
    ],
    nonPharm: [
      'Control y reevaluación clínica periódica cada 2 meses hasta los 6 meses de edad (la mayoría de descensos espontáneos ocurren antes del 3er-6to mes de vida posnatal)',
      'Educación para el autoexamen testicular mensual continuo a partir de la pubertad por riesgo residual aumentado de cáncer testicular (seminoma)'
    ],
    nursingCare: [
      'EXAMEN FÍSICO GENITAL ADECUADO: explorar con las manos templadas, en decúbito supino o en posición de "sastre" (piernas cruzadas), bloqueando el anillo inguinal interno para evitar el reflejo cremastérico',
      'Cuidados posquirúrgicos de la orquidopexia: mantener la herida escrotal e inguinal limpia y seca, evitar baños de inmersión por 7 días',
      'Evitar que el niño use juguetes para montar (bicicletas, correpasillos) o deportes bruscos durante 4 a 6 semanas poscirugía',
      'Contención a los padres explicando que el descenso oportuno antes del año de vida reduce sustancialmente el impacto sobre la fertilidad futura'
    ]
  },
  {
    number: 591,
    id: 'diag-591',
    title: 'Hipospadias y Epispadias (Anomalías del Meato Uretral y Pene Congénitas)',
    cie10: 'Q54.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Anomalías congénitas del desarrollo urogenital caracterizadas por la desembocadura anómala ectópica del meato uretral externo. El hipospadias (más frecuente, 1:300 varones) cursa con localización del meato en la cara ventral del pene, incurvación peneana (cordee) y prepucio redundante dorsal en "capuchón"; el epispadias (infrecuente) presenta apertura uretral en la cara dorsal y se asocia frecuentemente al complejo extrofia vesical.',
    symptoms: [
      'MEATO URETRAL ECTÓPICO LOCALIZADO EN LA CARA VENTRAL DEL PENE (glandular, coronal, peneano medio, penoescrotal o perineal)',
      'PREPUCIO DORSAL REDUNDANTE EN FORMA DE "DELANTAL" O "CAPUCHÓN" con ausencia de prepucio en la cara ventral',
      'Incurvación peneana ventral durante la erección ("cordee" o curvatura congénita)',
      'Chorro miccional anómalo desviado hacia abajo o hacia el escroto, obligando al niño a orinar sentado para no mojarse',
      'En epispadias: meato en la cara dorsal del pene, incurvación dorsal, diástasis púbica e incontinencia urinaria en la mayoría'
    ],
    redFlags: ['CONTRAINDICACIÓN ABSOLUTA DE CIRCUNCISIÓN EN EL RECIÉN NACIDO (LA PIEL DEL PREPUCIO ES IMPRESCINDIBLE PARA LA RECONSTRUCCIÓN QUIRÚRGICA)'],
    criteria: 'Inspección física anatómica directa de la cara ventral del pene que demuestre meato uretra ectópico MÁS distribución prepucial asimétrica.',
    labTests: [
      'Cariotipo citogenético y perfil hormonal adrenal urgente si el hipospadias es proximal (penoescrotal/perineal) o se asocia a criptorquidia (descarte de Trastorno del Desarrollo Sexual / HSC)'
    ],
    imaging: [
      'Ecografía renal y del tracto urinario en hipospadias proximales severos (descarte de malformaciones urológicas altas asociadas)'
    ],
    differential: ['Complejo extrofia-epispadias', 'Pseudohermafroditismo masculino / Insensibilidad a andrógenos', 'Vejiga neurogénica con incontinencia (en epispadias)'],
    firstLine: [
      'URETROPLASTIA Y CIRUGÍA RECONSTRUCTIVA PENEANA EN UN TIEMPO (Técnicas de Snodgrass / TIP, tubularización con incisión de la placa uretral) o en dos tiempos en formas severas:',
      '- Edad óptima de corrección: entre los 6 y 18 meses de vida (antes del inicio del recuerdo psicológico y control de esfínteres)',
      '- Objetivos quirúrgicos: ortoplastia (corrección de la curvatura ventral), uretroplastia funcional hasta la punta del glande y glanduloplastia cosmética'
    ],
    alternatives: [
      'Andrógenos tópicos o parenterales (Dihidrotestosterona en gel o Testosterona IM) prequirúrgicos en penes pequeños o placas uretrales estrechas para aumentar el tamaño fálico antes de la uretroplastia'
    ],
    nonPharm: [
      'ADVERTENCIA FORMAL EN LA HISTORIA CLÍNICA: PROHIBIDO REALIZAR CIRCUNCISIÓN NEONATAL',
      'Manejo de apósitos compresivos y tutor uretral (stent o sonda vesical) mantenido durante 7 a 14 días posoperatorios'
    ],
    nursingCare: [
      'ALERTA AL INGRESO NEONATAL: asegurar que el neonato no sea sometido a circuncisión ritual o profiláctica bajo ningún concepto',
      'CUIDADO DEL CATÉTER / TUTOR URETRAL POSOPERATORIO: mantener fijación estricta al pene para evitar arrancamiento accidental que destruiría la plastia uretral',
      'Manejo de la técnica de doble pañal para proteger el catéter uretral y recolectar orina libre de heces',
      'Administración de antiespasmódicos vesicales (Oxibutinina) según indicación para prevenir espasmos vesicales dolorosos provocados por la sonda'
    ]
  },
  {
    number: 592,
    id: 'diag-592',
    title: 'Displasia del Desarrollo de la Cadera (DDC / Luxación Congénita de Cadera)',
    cie10: 'Q65.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Espectro amplio de alteraciones en la relación biomecánica y desarrollo anatómico entre la cabeza femoral y el acetábulo, abarcando desde inestabilidad leve y displasia acetabular hasta subluxación y luxación coxofemoral completa irreducible, cuya detección y manejo temprano previene la cojera definitiva y la osteoartritis precoz.',
    symptoms: [
      'EN MENORES DE 3 MESES (FASE DE DETECCIÓN CRÍTICA ASINTOMÁTICA):',
      '- MANIOBRA DE ORTOLANI POSITIVA: resalto o "clic" palpable al reducir una cadera luxada mediante abducción suave con elevación del trocánter mayor',
      '- MANIOBRA DE BARLOW POSITIVA: sensación de desplazamiento o luxación posterior de la cabeza femoral al aducir y presionar hacia atrás',
      'EN LACTANTES MAYORES DE 3 MESES (LA LAXITUD DISMINUYE Y SE FIJA LA LUXACIÓN):',
      '- Limitación asimétrica de la abducción de la cadera (<60° con caderas en flexión de 90°)',
      '- SIGNO DE GALEAZZI POSITIVO: asimetría en la altura de las rodillas con el niño en decúbito supino y caderas y rodillas flexionadas a 90°',
      '- Asimetría marcada de pliegues cutáneos inguinales y glúteos (signo orientador no definitorio)',
      'EN NIÑOS QUE YA CAMINAN:',
      '- Claudicación o cojera indolora, marcha de pato (Trendelenburg positivo bilateral en luxación bilateral) e hiperlordosis lumbar exagerada'
    ],
    redFlags: ['DIAGNÓSTICO TARDÍO TRAS EL INICIO DE LA MARCHA: REQUIERE CIRUGÍAS COMPLEJAS DE REDUCCIÓN ABIERTA Y OSTEOTOMÍAS PÉLVICAS CON SECUELAS MOTORAS'],
    criteria: 'Maniobras de Barlow/Ortolani positivas en el recién nacido confirmadas por Ecografía de cadera según método de Graf en menores de 4-6 meses (ángulo alfa <60°), o radiografía de pelvis en mayores de 4-6 meses.',
    labTests: [
      'No aplican pruebas de laboratorio (enfermedad puramente morfoanatómica y mecánica)'
    ],
    imaging: [
      'ECOGRAFÍA DE CADERA CON MÉTODO DE GRAF (estándar de oro entre las 4 semanas y los 4-6 meses de vida): mide el ángulo alfa (techo óseo acetabular, normal ≥60°) y ángulo beta (techo cartilaginoso)',
      'RADIOGRAFÍA SIMPLE DE PELVIS EN PROYECCIÓN ANTEROPOSTERIOR (a partir de los 4 a 6 meses cuando aparece el núcleo de osificación femoral):',
      '- Trazado de líneas de Hilgenreiner (horizontal entre cartílagos trirradiados) y de Perkin (vertical por borde externo acetabular)',
      '- Núcleo femoral normal debe localizarse en el cuadrante inferointerno',
      '- Línea o arco de Shenton interrumpido y ángulo acetabular aumentado (>30° en lactantes)'
    ],
    differential: ['Cadera elástica / chasquidos de ligamentos femorales no patológicos', 'Artritis séptica de cadera neonatal', 'Coxa vara congénita', 'Epifisiólisis femoral superior'],
    firstLine: [
      'EN LACTANTES MENORES DE 6 MESES CON CADERA REDUCIBLE:',
      '- ARNÉS DE PAVLIK (Tratamiento conservador de elección con >90% de éxito): órtesis dinámica que mantiene las caderas en flexión de 100-110° y abducción moderada de 45-60° (nunca abducción forzada extrema) durante 6 a 12 semanas a tiempo completo'
    ],
    alternatives: [
      'En fracaso de Pavlik o diagnóstico entre 6 y 18 meses: reducción cerrada bajo anestesia general MÁS artrografía y yeso pelvipédico en "posición humana" por 3 meses',
      'En mayores de 18 meses o caderas inveteradas: reducción abierta con acortamiento femoral y osteotomía acetabular (Salter, Pemberton)'
    ],
    nonPharm: [
      'ERRICACIÓN TOTAL DE LA PRÁCTICA DEL "FAJADO" O "AMARRADO" DE PIERNAS EN EXTENSIÓN Y ADUCCIÓN (práctica tradicional común en zonas andinas que multiplica exponencialmente la luxación de cadera)',
      'Promover el porteo ergonómico en posición de "ranita" (abducción y flexión natural de caderas)'
    ],
    nursingCare: [
      'EDUCACIÓN FAMILIAR SOBRE EL ARNÉS DE PAVLIK: explicar que los padres NUNCA deben retirar ni desabrochar las correas del arnés sin autorización médica;',
      'Vigilancia cutánea diaria rigurosa en axilas, cuello y huecos poplíteos para prevenir dermatitis o úlceras por fricción de las correas;',
      'Verificar que las piernas no queden en hiperflexión (>120°, riesgo de neuropatía femoral) ni abducción extrema (>70°, riesgo de osteonecrosis avascular de cabeza femoral);',
      'Desmitificar ante las madres de comunidades el uso del fajado de bebés y enseñar técnicas de porteo ergonómico.'
    ]
  },
  {
    number: 593,
    id: 'diag-593',
    title: 'Pie Zambo Equinovaro Congénito (Talipes Equinovarus Idiopático)',
    cie10: 'Q66.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Deformidad congénita compleja tridimensional musculoesquelética del pie y tobillo caracterizada por cuatro componentes morfológicos distintivos agrupados en el acrónimo CAVE: Cavo del mediopié, Adicto del antepié, Varo del retropié y Equino del retropié, de carácter rígido e imposible de corregir pasivamente de forma manual inmediata.',
    symptoms: [
      'CUATRO COMPONENTES ESTRUCTURALES PATOGNOMÓNICOS (NEMOTECNIA "CAVE"):',
      '- CAVO: arco plantar medial anormalmente elevado y aumentado',
      '- ADUCTO: el antepié y metatarsianos están desviados medialmente hacia adentro',
      '- VARO: el talón está inclinado medialmente hacia adentro (calcáneo en varo)',
      '- EQUINO: el tobillo está bloqueado en flexión plantar con tendón de Aquiles intensamente acortado y tenso',
      'Pliegue transversal profundo y marcado en la planta del mediopié y pliegue posterior profundo sobre el tendón de Aquiles',
      'Pantorrilla hipoplásica con circunferencia muscular disminuida del lado afecto',
      'Rigidez estricta: el pie no puede llevarse a la posición neutra o dorsiflexión pasiva con maniobras manuales suaves'
    ],
    redFlags: ['PIE EQUINOVARO ATÍPICO O ASOCIADO A OTRAS MALFORMACIONES: DESCARTAR ESPINA BÍFIDA, ARTROGRIPOSIS MÚLTIPLE CONGÉNITA O DISRAFISMO ESPINAL'],
    criteria: 'Inspección física que demuestre los 4 componentes fijos CAVE y evaluación de rigidez graduada mediante la Escala de Pirani (0 a 6 puntos) o clasificación de Dimeglio.',
    labTests: [
      'No se requieren exámenes de laboratorio en el pie equinovaro idiopático aislado'
    ],
    imaging: [
      'Ecografía morfológica prenatal: detección desde la semana 16 a 20 de gestación',
      'Radiografías de pies AP y lateral en carga (en niños mayores para evaluar ángulos talocalcáneos)',
      'Ecografía o RMN de columna lumbosacra si se sospecha causa sindrómica o disráfica'
    ],
    differential: ['Metatarso aducto postural reducible', 'Talipes calcaneovalgo', 'Pie equinovaro neurológico secundario a mielomeningocele', 'Artrogriposis múltiple congénita'],
    firstLine: [
      'MÉTODO DE PONSETI (ESTÁNDAR DE ORO MUNDIAL CON >95% DE ÉXITO):',
      '- Manipulaciones suaves protocolizadas y colocación seriada semanal de yesos cruropédicos (de dedos a ingle con rodilla en flexión de 90°)',
      '- Corrección secuencial estricta: primero el Cavo (supinando el antepié), luego Aducto y Varo abduciendo gradualmente el pie contra el fulcro en la cabeza del astrágalo (NUNCA tocar el calcáneo)',
      '- TENOTOMÍA PERCUTÁNEA DEL TENDÓN DE AQUILES bajo anestesia local en consultorio (necesaria en 85-90% de casos para corregir el equino residual tras lograr 60° de abducción), seguida de yeso final por 3 semanas'
    ],
    alternatives: [
      'ÓRTESIS DE ABDUCCIÓN DE STEENBEEK O BARRA DE DENIS BROWNE CON ZAPATOS HORIZONTALES: uso OBLIGATORIO tras retirar el último yeso: 23 horas al día durante los primeros 3 meses, y luego 12-14 horas al día (durante las siestas y noches) hasta los 4 a 5 años de edad para PREVENIR RECIDIVAS',
      'Transferencia del tendón del tibial anterior al cuneiforme lateral en casos de recidiva dinámica en niños mayores de 3 años'
    ],
    nonPharm: [
      'Inicio del tratamiento de Ponseti idealmente en las primeras 2 a 4 semanas de vida (los tejidos conectivos colagénicos neonatales tienen máxima plasticidad)',
      'Educación intensiva y adherencia inquebrantable de los padres al uso de la férula de abducción nocturna (el 90% de fracasos se debe a abandono de la barra)'
    ],
    nursingCare: [
      'CUIDADO DEL YESO DE PONSETI: vigilar perfusión de los dedos del pie (coloración rosada, temperatura y llenado capilar <2 segundos)',
      'Instruir a los padres para mantener el yeso limpio y seco, protegiéndolo de fugas del pañal;',
      'Supervisión estricta de la adaptación y tolerancia a la férula de abducción de Steenbeek (prevenir escaras en el talón asegurando que el talón calce firmemente al fondo del zapato);',
      'Reforzar enfáticamente a la familia que el uso riguroso de la barra nocturna hasta los 4 años es lo único que garantiza que el niño no vuelva a requerir cirugía.'
    ]
  },
  {
    number: 594,
    id: 'diag-594',
    title: 'Cardiopatías Congénitas Acianóticas con Shunt Izquierda-Derecha: CIA y CIV',
    cie10: 'Q21.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Cardiopatías congénitas más frecuentes caracterizadas por comunicaciones anómalas entre las cámaras cardíacas de alta presión izquierda y baja presión derecha. La Comunicación Interventricular (CIV) presenta cortocircuito entre ventrículos con sobrecarga de volumen biventricular e hiperaflujo pulmonar; la Comunicación Interauricular (CIA) presenta orificio interatrial (ostium secundum más común) con sobrecarga de volumen de cavidades derechas.',
    symptoms: [
      'COMUNICACIÓN INTERVENTRICULAR (CIV - la cardiopatía congénita más común en general):',
      '- SOPLO PANSISTÓLICO / HOLOSISTÓLICO ÁSPERO INTENSO (Grado III-IV/VI) en barra en el borde esternal izquierdo bajo (mesocardio) con frémito táctil',
      '- En defectos moderados a grandes: insuficiencia cardíaca congestiva infantil a las 4-8 semanas de vida (cuando cae la resistencia vascular pulmonar)',
      '- Taquipnea, tirajes subcostales, diaforesis profusa al alimentarse ("sudoración al mamar"), tomas entrecortadas y estancamiento ponderal grave',
      'COMUNICACIÓN INTERAURICULAR (CIA):',
      '- Con frecuencia asintomática en la infancia temprana; diagnosticada en controles de rutina',
      '- SOPLO SISTÓLICO DE EYECCIÓN EN FOCO PULMONAR MÁS DESDOBLAMIENTO AMPLIO Y FIJO DEL SEGUNDO RUIDO CARDÍACO (R2) patognomónico',
      '- Infecciones respiratorias bajas a repetición e intolerancia al esfuerzo en niños mayores'
    ],
    redFlags: ['DESARROLLO DE HIPERTENSIÓN ARTERIAL PULMONAR SEVERA CON INVERSIÓN DEL CORTOCIRCUITO A DERECHA-IZQUIERDA Y CIANOSIS FIJA (SÍNDROME DE EISENMENGER - INOPERABLE)'],
    criteria: 'Soplo cardíaco característico MÁS confirmación mediante Ecocardiografía Doppler transtorácica que demuestre la localización, tamaño del defecto y dirección del shunt con ratio Qp/Qs >1.5.',
    labTests: [
      'Gases arteriales y saturación de oxígeno (habitualmente normal >95% en extremidades sin cianosis)',
      'Hemograma completo y electrolitos séricos (especialmente potasio durante uso de diuréticos)'
    ],
    imaging: [
      'ECOCARDIOGRAMA DOPPLER COLOR TRANSTORÁCICO (ESTÁNDAR DE ORO): localiza el defecto (CIV perimembranosa, muscular; CIA ostium secundum, ostium primum), mide gradiente interventricular y calcula presiones pulmonares',
      'Radiografía simple de tórax: cardiomegalia a expensas de cavidades derechas o izquierdas, botón aórtico pequeño, abombamiento del arco de la arteria pulmonar y trama vascular pulmonar muy aumentada (hiperaflujo)',
      'Electrocardiograma (ECG): en CIV hipertrofia biventricular o izquierda; en CIA bloqueo incompleto de rama derecha (rSR en V1) y sobrecarga de ventrículo derecho'
    ],
    differential: ['Conducto arterioso persistente', 'Defecto septal auriculoventricular completo (canal AV)', 'Estenosis pulmonar congénita', 'Soplos inocentes o fisiológicos pediátricos (soplo de Still)'],
    firstLine: [
      'MANEJO MÉDICO DE LA INSUFICIENCIA CARDÍACA EN CIV CON HIPERAFLUJO:',
      '- FUROSEMIDA (1-2 mg/kg/día oral o IV) MÁS ESPIRONOLACTONA (1-2 mg/kg/día) para reducir congestión pulmonar',
      '- Inhibidores de la ECA: CAPTOPRIL (0.5 - 2 mg/kg/día) o ENALAPRIL para reducir la postcarga sistémica y disminuir el cortocircuito I-D',
      'TRATAMIENTO DEFINITIVO INTERVENCIONISTA / QUIRÚRGICO:',
      '- En CIA Ostium Secundum con dilatación de cavidades derechas: Cierre percutáneo con dispositivo oclusor tipo Amplatzer (a los 3-5 años)',
      '- En CIV moderada/grande refractaria a tratamiento médico o hipertensión pulmonar progresiva: Cierre quirúrgico con parche de pericardio antes del primer año de vida'
    ],
    alternatives: [
      'Cerclaje o banding de la arteria pulmonar quirúrgico paliativo temporal en lactantes con bajo peso extremo o anomalías múltiples antes del cierre definitivo'
    ],
    nonPharm: [
      'Optimización nutricional con fórmulas hipercalóricas concentradas para asegurar adecuado aporte calórico sin sobrecargar de volumen hídrico',
      'Profilaxis de endocarditis bacteriana en casos indicados (CIV con antecedentes de endocarditis o defectos residuales adyacentes a parches)'
    ],
    nursingCare: [
      'MONITOREO DE ALIMENTACIÓN: vigilar signos de fatiga durante la lactancia (sudoración en frente, pausas respiratorias, taquipnea); fraccionar tomas en volúmenes pequeños y frecuentes',
      'Control diario estricto de peso matutino en ayunas para evaluar balance de líquidos y respuesta a diuréticos',
      'Administración meticulosa de dosis pediátricas de Furosemida y Captopril; monitorizar periódicamente niveles de potasio sérico y presión arterial',
      'Vigilancia estricta de taquicardia (>160 lpm), quejido respiratorio o hepatomegalia congestiva (borde hepático >2 cm bajo reborde costal)'
    ]
  },
  {
    number: 595,
    id: 'diag-595',
    title: 'Cardiopatías Congénitas Acianóticas: Persistencia del Conducto Arterioso (PCA) y Coartación Aórtica (CoAo)',
    cie10: 'Q25.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Cardiopatías congénitas acianóticas extracardíacas mayores. El Conducto Arterioso Persistente (PCA) es la falta de cierre funcional y anatómico del vaso fetal que conecta la aorta descendente con la bifurcación del tronco pulmonar; la Coartación de Aorta (CoAo) es un estrechamiento luminal concéntrico de la aorta torácica típicamente en la región yuxtaductal adyacente a la inserción del ligamento arterioso.',
    symptoms: [
      'PERSISTENCIA DEL CONDUCTO ARTERIOSO (PCA):',
      '- PULSOS PERIFÉRICOS SALTONES O "CÉLER" (amplia presión de pulso diferencial por robo diastólico aórtico)',
      '- SOPLO CONTINUO EN MAQUINARIA O DE GIBSON (sistodiastólico continuo) con acmé en el 2do ruido en el foco pulmonar / región infraclavicular izquierda',
      '- Taquipnea, taquicardia, letargia y empeoramiento de insuficiencia respiratoria en prematuros (frecuente en <1500 gramos)',
      'COARTACIÓN DE LA AORTA (CoAo):',
      '- ASIMETRÍA MARCADA DE PULSOS: pulsos femorales y pedios débiles, filiformes o completamente ausentes en contraste con pulsos radiales saltones llenos',
      '- GRADIENTE TENSIONAL SIGNIFICATIVO: hipertensión arterial sistólica en miembros superiores con hipotensión arterial marcada en miembros inferiores (>20 mmHg de diferencia)',
      '- Extremidades inferiores frías y claudicación con el esfuerzo en niños mayores; shock cardiogénico al cerrarse el ductus en el neonato'
    ],
    redFlags: ['NEONATO CON COARTACIÓN CRÍTICA EN SHOCK CARDIOGÉNICO Y ANURIA AL CERRARSE EL DUCTUS: INFUSIÓN URGENTE INMEDIATA DE PROSTAGLANDINA E1 (ALPROSTADIL)'],
    criteria: 'PCA: soplo en maquinaria + pulsos saltones confirmado por Doppler. CoAo: gradiente de presión sistólica >20 mmHg entre brazos y piernas con pulsos femorales ausentes confirmado por ecocardiograma o angio-TAC.',
    labTests: [
      'Gases arteriales y lactato sérico (elevado en bajo gasto sistémico por coartación crítica)',
      'Función renal (urea y creatinina) por hipoperfusión renal distal'
    ],
    imaging: [
      'Ecocardiografía Doppler color transtorácica: estándar de oro para ambas patologías; mide el diámetro del ductus y la dirección del flujo; en coartación cuantifica el gradiente máximo y medio transcoartación y patrón de flujo "en diente de sierra"',
      'Angiotomografía o Angio-RMN torácica: mapa vascular tridimensional completo de la aorta torácica y desarrollo de arterias colaterales intercostales',
      'Radiografía de tórax en niños mayores con CoAo: "signo del 3" en el perfil aórtico y erosión/muescas de los bordes costales inferiores (Signo de Roesler)'
    ],
    differential: ['Ventana aortopulmonar', 'Fístula arteriovenosa pulmonar o coronaria', 'Interrupción del arco aórtico', 'Estenosis aórtica severa'],
    firstLine: [
      'EN PCA DEL PREMATURO: Cierre farmacológico con inhibidores de ciclooxigenasa: IBUPROFENO IV (10 mg/kg dosis de carga, luego 5 mg/kg a las 24 y 48h) o PARACETAMOL IV (15 mg/kg c/6h por 3-7 días) o INDOMETACINA',
      'EN PCA EN LACTANTES / NIÑOS: Cierre percutáneo mediante cateterismo con dispositivo oclusor (coils o amplatzer duct occluder)',
      'EN COARTACIÓN NEONATAL CRÍTICA DUCTUS-DEPENDIENTE: Infusión continua inmediata de PROSTAGLANDINA E1 (Alprostadil a 0.01 - 0.05 mcg/kg/min IV) para reabrir el ductus y restaurar perfusión distal sistémica MÁS cirugía de resección y anastomosis término-terminal extendida'
    ],
    alternatives: [
      'En Coartación en niños mayores o adultos: Angioplastia con colocación de Stent aórtico endovascular cubierto',
      'Ligadura quirúrgica del ductus por toracotomía en prematuros con falla al tratamiento farmacológico'
    ],
    nonPharm: [
      'Monitorización continua no invasiva simultánea de la presión arterial en extremidades superiores e inferiores',
      'Control de normotermia y evitar sobrecarga hídrica en recién nacidos prematuros'
    ],
    nursingCare: [
      'TOMA PROTOCOLIZADA DE PRESIÓN ARTERIAL EN 4 EXTREMIDADES en todo neonato con soplo, shock o hipertensión (registrar brazo derecho y ambas piernas);',
      'Palpación simultánea sistemática de pulso radial y femoral durante la valoración física habitual de pediatría;',
      'Manejo de la infusión de Prostaglandina E1 (Alprostadil): vigilar estrictamente APNEA neonatal (tener equipo de intubación preparado a la cabecera) e hipotensión con rubor cutáneo;',
      'Vigilancia estricta del gasto urinario horario en coartación aórtica como indicador directo de perfusión renal.'
    ]
  },
  {
    number: 596,
    id: 'diag-596',
    title: 'Cardiopatías Congénitas Cianóticas: Tetralogía de Fallot',
    cie10: 'Q21.3',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Cardiopatía congénita cianótica más común después del primer año de vida, caracterizada por la desviación anterosuperior del septo infundibular durante la embriogénesis, lo que genera cuatro anomalías anatómicas clásicas: 1) Estenosis pulmonar subvalvular/valvular infundibular, 2) Comunicación interventricular (CIV) amplia, 3) Cabalgamiento aórtico sobre el defecto septal, y 4) Hipertrofia concéntrica del ventrículo derecho secundaria.',
    symptoms: [
      'CIANOSIS CENTRAL PERIFÉRICA PROGRESIVA (en labios, lecho ungueal y mucosas) que se acentúa con el llanto, alimentación o actividad física',
      'CRISIS DE HIPOXIA / CRISIS HIPERCIANÓTICAS DE FALLOT ("TET SPELLS" - EMERGENCIA MÉDICA):',
      '- Episodios bruscos de llanto inconsolable seguido de cianosis negruzca profunda, taquipnea intensa con respiración acidótica, irritabilidad extrema, síncope, convulsiones hipóxicas o coma por espasmo infundibular agudo',
      'POSTURA EN CUCLILLAS ESPONTÁNEA ("SQUATTING") en niños caminadores: alivia la disnea aumentando la resistencia vascular sistémica y disminuyendo el cortocircuito D-I',
      'Soplo sistólico de eyección rudo en foco pulmonar (que DISMINUYE o DESAPARECE durante las crisis hipóxicas)',
      'Acropaquia (dedos en "palillo de tambor" y uñas en "vidrio de reloj") e hipocrecimiento ponderal en fases avanzadas'
    ],
    redFlags: ['CRISIS HIPERCIANÓTICA AGUDA DE FALLOT: ESPASMO INFUNDIBULAR CON RIESGO DE INFARTO CEREBRAL, DAÑO HIPÓXICO ANÓXICO Y MUERTE SÚBITA'],
    criteria: 'Cianosis progresiva + soplo sistólico eyectivo pulmonar con Rx en "forma de zueco" confirmada por ecocardiografía Doppler que evidencie los 4 componentes anatómicos.',
    labTests: [
      'Hemograma completo: POLIGLOBULIA / ERITROCITOSIS COMPENSADORA MARCADA (Hematocrito >55-65%) con microcitosis relativa y riesgo de hiperviscosidad',
      'Gases arteriales: hipoxemia arterial con pO2 baja (<50 mmHg) refractaria al test de hiperoxia al 100%'
    ],
    imaging: [
      'ECOCARDIOGRAMA DOPPLER COLOR TRANSTORÁCICO: define con exactitud la anatomía del infundíbulo ventricular derecho, grado de cabalgamiento aórtico, tamaño de CIV y dimensiones del árbol arterial pulmonar (índice de Nakata)',
      'RADIOGRAFÍA SIMPLE DE TÓRAX: silueta cardíaca clásica "EN ZUECO" o "BOTA HOLANDESA" (ápex levantado por hipertrofia de ventrículo derecho y concavidad en el segmento pulmonar por hipoplasia de arteria pulmonar) con oligohemia pulmonar (campos pulmonares hiperclaros)',
      'Electrocardiograma: desviación del eje a la derecha e hipertrofia ventricular derecha marcada (onda R alta en V1 con onda T positiva)'
    ],
    differential: ['Transposición de grandes arterias', 'Atresia pulmonar con CIV', 'Tronco arterioso común', 'Anomalía de Ebstein severa'],
    firstLine: [
      'MANEJO INMEDIATO DE LA CRISIS HIPERCIANÓTICA AGUDA (EMERGENCIA PEDIÁTRICA):',
      '1. POSICIÓN GENUPECTORAL / RODILLAS AL PECHO (aumenta bruscamente la RVS reduciendo el shunt D-I)',
      '2. Oxígeno al 100% por mascarilla con reservorio',
      '3. MORFINA SUBCUTÁNEA O IV (0.1 - 0.2 mg/kg) para calmar el centro respiratorio y relajar el espasmo infundibular',
      '4. Bolo de solución salina isotónica IV (10-20 mL/kg) para aumentar la precarga del ventrículo derecho',
      '5. Betabloqueante IV: PROPRANOLOL (0.01 - 0.1 mg/kg IV lento) o Esmolol para inhibir la contractilidad infundibular'
    ],
    alternatives: [
      'PROFILAXIS DE CRISIS EN EL HOGAR: PROPRANOLOL ORAL (1 a 4 mg/kg/día dividido cada 6-8 horas) como puente hasta la cirugía',
      'CIRUGÍA CORRECTIVA TOTAL ELECTIVA: parche de cierre de CIV y ampliación del tracto de salida del ventrículo derecho (resección infundibular +/- parche transanular) entre los 3 y 6 meses de vida',
      'Fístula sistémico-pulmonar paliativa de Blalock-Taussig modificada (FTMB) en neonatos sintomáticos con anatomía pulmonar muy hipoplásica'
    ],
    nonPharm: [
      'PREVENCIÓN ESTRICTA DE LA DESHIDRATACIÓN: el hematocrito alto con deshidratación conduce a trombosis de senos venosos cerebrales y ACV isquémico',
      'Manejo del dolor y mínima manipulación en lactantes no intervenidos'
    ],
    nursingCare: [
      'ACTUACIÓN INMEDIATA ANTE CRISIS DE CIANOSIS: flexionar de inmediato las rodillas del lactante fuertemente contra su pecho (posición rodilla-pecho) y solicitar código de emergencia médica;',
      'Mantener al lactante tranquilo en brazos de la madre, evitando punciones venosas o procedimientos traumáticos innecesarios sin analgesia;',
      'Garantizar una hidratación oral o intravenosa generosa continua para prevenir eventos tromboembólicos por hiperviscosidad sanguínea;',
      'Monitoreo riguroso de saturación de oxígeno basal y vigilancia de cambios en el tono, somnolencia o palidez-cianosis perioral.'
    ]
  },
  {
    number: 597,
    id: 'diag-597',
    title: 'Cardiopatías Congénitas Cianóticas: Transposición de Grandes Arterias (TGA / d-TGA)',
    cie10: 'Q20.3',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Cardiopatía congénita cianótica más frecuente en el período neonatal, en la cual existe una discordancia ventriculoarterial completa: la aorta nace anormalmente del ventrículo derecho (sangre desoxigenada retorna al cuerpo) y la arteria pulmonar nace del ventrículo izquierdo (sangre oxigenada retorna a los pulmones), creando dos circulaciones paralelas independientes incompatibles con la vida salvo la existencia de comunicaciones que permitan la mezcla de sangre.',
    symptoms: [
      'CIANOSIS NEONATAL SEVERA INTENSA "AZUL REY / AZUL PINTURA" DESDE LAS PRIMERAS HORAS DE VIDA',
      'TEST DE HIPEROXIA NEGATIVO: la hipoxemia y cianosis persisten inalteradas a pesar de administrar oxígeno al 100%',
      'Taquipnea sin retracciones costales proporcionales marcadas inicialmente ("taquipnea silenciosa / confortable")',
      'Ausencia habitual de soplos cardíacos audibles en TGA con tabique intacto (la ausencia de soplo NO descarta cardiopatía)',
      'Deterioro hemodinámico catastrófico, acidosis metabólica láctica extrema y colapso cardiovascular al cerrarse el foramen oval o el ductus arterioso'
    ],
    redFlags: ['EMERGENCIA NEONATAL CRÍTICA: SI CIERRA EL FORAMEN O EL DUCTUS SOBREVIENE MUERTE INMEDIATA POR HIPOXEMIA Y ASFIXIA TISULAR'],
    criteria: 'Cianosis intensa que no responde a oxígeno en las primeras horas de vida confirmada por ecocardiograma transtorácico que muestre la aorta anterior originándose del VD y arteria pulmonar posterior del VI.',
    labTests: [
      'TEST DE HIPEROXIA: pO2 arterial <100-150 mmHg respirando O2 al 100% durante 10 minutos (confirma causa cardíaca cianótica)',
      'Gases arteriales seriados con acidosis metabólica progresiva y lactato elevado'
    ],
    imaging: [
      'ECOCARDIOGRAMA DOPPLER COLOR DE EMERGENCIA (ESTÁNDAR DE ORO): define la discordancia ventriculoarterial, el trayecto de las arterias coronarias (esencial para la cirugía) y evalúa el tamaño de la CIA/foramen oval y del PCA',
      'Radiografía simple de tórax: clásica silueta cardíaca en "HUEVO EN UN TINTERO" o corazón ovalado con pedículo vascular estrecho (por superposición anteroposterior de los grandes vasos) e hiperaflujo pulmonar',
      'Electrocardiograma neonatal: predominio fisiológico de ventrículo derecho que rápidamente evoluciona a hipertrofia ventricular derecha grave'
    ],
    differential: ['Tetralogía de Fallot extrema', 'Drenaje venoso pulmonar anómalo total obstructivo', 'Atresia tricuspídea', 'Hipertensión pulmonar persistente del recién nacido (HPPRN)'],
    firstLine: [
      'ESTABILIZACIÓN FARMACOLÓGICA INMEDIATA:',
      '- INFUSIÓN CONTINUA INTRAVENOSA DE PROSTAGLANDINA E1 (ALPROSTADIL a 0.01 - 0.05 mcg/kg/min) para mantener abierto el conducto arterioso permitiendo mezcla de sangre',
      'PROCEDIMIENTO DE EMERGENCIA DE SALVAMENTO:',
      '- SEPTOSOSTOMÍA AURICULAR CON BALÓN DE RASHKIND: desgarro del tabique interauricular mediante catéter con balón bajo guía ecográfica a pie de cuna para crear una CIA amplia no restrictiva',
      'CIRUGÍA DEFINITIVA DE ELECCIÓN:',
      '- SWITCHO ARTERIAL O CIRUGÍA DE JATENE: corrección anatómica completa con sección y reimplante de aorta y arteria pulmonar en sus ventrículos anatómicamente correctos MÁS transferencia delicada de las arterias coronarias (realizada idealmente en las primeras 2 a 3 semanas de vida)'
    ],
    alternatives: [
      'Cirugías de cambio fisiológico auricular (Senning o Mustard) en casos de presentación tardía con desentrenamiento del ventrículo izquierdo'
    ],
    nonPharm: [
      'Evitar el uso de oxígeno en concentraciones elevadas si el ductus es amplio, ya que puede acelerar el cierre del ductus y empeorar el balance hemodinámico',
      'Monitoreo hemodinámico estricto invasivo en UCI Neonatal'
    ],
    nursingCare: [
      'ADMINISTRACIÓN DE ALPROSTADIL (PROSTAGLANDINA E1) EN VÍA EXCLUSIVA: verificación permanente de la infusión; no suspender ni purgar bruscamente por riesgo de apnea e hipoxemia fulminante;',
      'Vigilancia estricta de efectos adversos de prostaglandinas: APNEA súbita (estar preparado para ventilación mecánica), hipertermia vasodilatadora e hipotensión;',
      'Monitoreo continuo de gases arteriales, saturación pre y posductal y lactato sérico;',
      'Manejo térmico en incubadora de doble pared para minimizar el consumo metabólico de oxígeno.'
    ]
  },
  {
    number: 598,
    id: 'diag-598',
    title: 'Síndrome de Alcoholismo Fetal (SAF / Trastorno del Espectro Alcohólico Fetal - TEAF)',
    cie10: 'Q86.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Trastorno congénito del neurodesarrollo totalmente prevenible causado por la exposición intrauterina al etanol (un potente teratógeno celular que atraviesa libremente la barrera placentaria), caracterizado por una tríada diagnóstica: fenotipo dismórfico facial específico, retraso del crecimiento pre y postnatal, y daño neurocognitivo estructural o funcional del sistema nervioso central.',
    symptoms: [
      'DISMORFIA FACIAL CARACTERÍSTICA (TRÍADA FACIAL PATOGNOMÓNICA):',
      '1. FISURAS PALPEBRALES CORTAS (hendiduras palpebrales estrechas y pequeñas)',
      '2. FILTRUM LABIAL LISO Y BORRADO (ausencia de los surcos nasolabiales verticales, escala 4 o 5 de Astley)',
      '3. LABIO SUPERIOR DELGADO (bermellón superior extremadamente fino)',
      'Otras anomalías faciales: micrognatia, puente nasal aplanado, pliegues epicánticos y nariz corta respingada',
      'RETRASO DEL CRECIMIENTO: peso y/o longitud al nacer <percentil 10, que persiste como retraso del crecimiento estatural y ponderal en la infancia',
      'DAÑO ESTRUCTURAL Y FUNCIONAL DEL SNC:',
      '- Microcefalia congénita (<percentil 3 o -2 DE)',
      '- Discapacidad intelectual de grado variable (CI medio de 65-75)',
      '- Déficit de atención con hiperactividad (TDAH) refractario, impulsividad severa y juicio social marcadamente alterado',
      '- Trastornos de integración sensorial, dificultades graves de memoria de trabajo y aprendizaje de matemáticas'
    ],
    redFlags: ['TRASTORNO CONDUCTUAL DISRUPTIVO Y ALTO RIESGO DE ABUSO DE SUSTANCIAS, DESERCIÓN ESCOLAR Y CONFLICTO LEGAL EN LA ADOLESCENCIA'],
    criteria: 'Criterios del IOM / CDC: Presencia de los 3 rasgos faciales cardinales MÁS retraso del crecimiento MÁS evidencia de anomalía del SNC (microcefalia o neuroconductual), con o sin confirmación de consumo materno de alcohol (la confirmación no es obligatoria si se cumplen los 3 criterios clínicos completos).',
    labTests: [
      'Marcadores neonatales de exposición a tóxicos en meconio o cabello: ésteres etílicos de ácidos grasos (FAEE) o fosfatidiletanol (PEth)',
      'Cariotipo o microarray para descartar otros síndromes cromosómicos concurrentes'
    ],
    imaging: [
      'RMN cerebral: microcefalia, hipoplasia o agenesia del cuerpo calloso, disminución del volumen del cerebelo y de los ganglios basales',
      'Ecocardiograma: descarte de defectos cardíacos asociados (CIV, CIA en 30-40% de casos)',
      'Ecografía renal para despistaje de anomalías urológicas'
    ],
    differential: ['Síndrome de microdeleción 22q11.2', 'Síndrome de Williams', 'Síndrome de Cornelia de Lange', 'Síndrome de Dubowitz', 'Trastorno de déficit atencional idiopático'],
    firstLine: [
      'INTERVENCIÓN MULTIDISCIPLINARIA INTEGRAL TEMPRANA (NO EXISTE TRATAMIENTO CURATIVO FARMACOLÓGICO):',
      '- Estimulación psicomotriz temprana y terapia ocupacional enfocada en modulación sensorial',
      '- Adaptación curricular educativa estructurada y psicopedagogía personalizada'
    ],
    alternatives: [
      'Tratamiento farmacológico coadyuvante de comorbilidades neuropsiquiátricas:',
      '- Psicoestimulantes (Metilfenidato) o Atomoxetina para el TDAH (con monitorización cuidadosa)',
      '- Antipsicóticos atípicos (Risperidona) a bajas dosis ante agresividad grave o descontrol de impulsos'
    ],
    nonPharm: [
      'MENSAJE CLAVE DE SALUD PÚBLICA DE LA OMS / MINSA: TOLERANCIA CERO DE CONSUMO DE ALCOHOL DURANTE EL EMBARAZO (NO EXISTE NINGÚN NIVEL SEGURO NI TRIMESTRE SEGURO DE INGESTA)',
      'Entornos altamente predecibles y estructurados con rutinas visuales claras en el hogar'
    ],
    nursingCare: [
      'EDUCACIÓN PREVENTIVA UNIVERSAL EN ATENCIÓN PRIMARIA: aconsejar a toda mujer en edad fértil que planifique gestación suspender por completo el alcohol antes de suspender métodos anticonceptivos;',
      'Evaluación meticulosa del neurodesarrollo y curvas de perímetro cefálico en cada control CRED;',
      'Apoyo empático y libre de estigma a la madre y la familia, canalizando el caso a servicios de asistencia social y salud mental comunitaria;',
      'Capacitación a los padres en estrategias conductuales de refuerzo positivo y contención de crisis de frustración.'
    ]
  },
  {
    number: 599,
    id: 'diag-599',
    title: 'Síndrome de Muerte Súbita del Lactante (SMSL / Muerte de Cuna / Tragedia del Sueño)',
    cie10: 'R95.9',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Muerte repentina e inesperada de un lactante menor de 1 año (pico entre los 2 y 4 meses), que permanece inexplicada después de una investigación forense y clínica exhaustiva que incluye la autopsia completa, el examen del lugar del fallecimiento y la revisión de la historia clínica previa; explicada por el modelo de "triple riesgo" (lactante vulnerable + período crítico del desarrollo homeostático + estresores ambientales exógenos del sueño).',
    symptoms: [
      'HALLAZGO REPENTINO E INESPERADO DEL LACTANTE SIN VIDA EN SU CUNA DURANTE EL PERÍODO DE SUEÑO',
      'Ausencia previa de síntomas de alarma o antecedentes de enfermedades graves conocidas',
      'Palidez cerúlea cadavérica o cianosis perioral y ungueal, con presencia o no de espuma sanguinolenta por fosas nasales y boca',
      'Livideces cadavéricas y rigidez en áreas corporales en contacto con el colchón',
      'La posición en decúbito prono (boca abajo) y el colecho inseguro en camas para adultos son los factores de riesgo modificables más potentes documentados'
    ],
    redFlags: ['CUALQUIER EPISODIO APARENTEMENTE INEXPLICADO DE BREVE RESOLUCIÓN (BRUE / ALTE): CIANOSIS, PALIDEZ, APNEA O PÉRDIDA DEL TONO QUE REQUIERE REANIMACIÓN ENÉRGETICA'],
    criteria: 'Diagnóstico de exclusión tras investigación multidisciplinaria post mórtem rigurosa que descarte asfixia mecánica accidental, traumatismo, infección fulminante o errores innatos del metabolismo.',
    labTests: [
      'Autopsia médico-legal forense obligatoria: examen toxicológico completo, cultivos microbiológicos de tejidos y despistaje genético de canalopatías cardíacas (Síndrome de QT largo, Brugada) y defectos de beta-oxidación de ácidos grasos (MCAD)'
    ],
    imaging: [
      'Radiografía esquelética corporal total post mórtem (babygrama): para descartar traumatismos óseos ocultos o sospecha de maltrato infantil'
    ],
    differential: ['Sofocación o asfixia accidental por almohadas o compresión por adultos en la cama', 'Traumatismo craneoencefálico no accidental (síndrome del bebé sacudido)', 'Miocarditis fulminante o sepsis neonatal tardía', 'Canalopatías cardíacas arritmogénicas no diagnosticadas'],
    firstLine: [
      'ESTRATEGIAS UNIVERSALES DE SUEÑO SEGURO DE LA AAP Y MINSA (LA MEJOR INTERVENCIÓN ES LA PREVENCIÓN PRIMARIA):',
      '1. DORMIR SIEMPRE BOCA ARRIBA (DECÚBITO SUPINO EXCLUSIVO) en cada siesta y durante toda la noche (la campaña "Back to Sleep" redujo la mortalidad en >50%)',
      '2. SUPERFICIE DE SUEÑO FIRME Y PLANA: colchón rígido cubierto por una sábana bajera ajustable en una cuna homologada',
      '3. CERO OBJETOS SUELTOS EN LA CUNA: PROHIBIDO el uso de almohadas, mantas pesadas, colchas, protectores acolchados de cuna ("chichoneras"), peluches o posicionadores',
      '4. HABITACIÓN COMPARTIDA SIN COMPARTIR LA CAMA (ROOM-SHARING WITHOUT BED-SHARING): la cuna del bebé debe estar en la habitación de los padres cerca de su cama al menos durante los primeros 6 meses'
    ],
    alternatives: [
      'Ofrecer chupete / chupón limpio durante el sueño una vez establecida la lactancia materna (factor protector demostrado)',
      'Lactancia materna exclusiva (reduce significativamente el riesgo de SMSL en más de un 50%)'
    ],
    nonPharm: [
      'AMBIENTE LIBRE DE HUMO DE TABACO: prohibición absoluta del tabaquismo materno durante el embarazo y exposición al humo ambiental de tabaco posnatal',
      'EVITAR EL SOBRECALENTAMIENTO: vestir al bebé con capas ligeras; evitar gorros para dormir en interiores; mantener temperatura templada (20-22°C)'
    ],
    nursingCare: [
      'EDUCACIÓN MATERNO-INFANTIL PRIORITARIA EN CADA ALTA HOSPITALARIA Y CONTROL CRED:',
      '- Demostrar y exigir a los padres la posición BOCA ARRIBA para dormir en cada visita;',
      '- Advertir contundentemente sobre el PELIGRO MORTAL DE DORMIR CON EL BEBÉ EN SILLONES O SOFÁS (altísimo riesgo de asfixia por aplastamiento);',
      '- Desalentar el uso de monitores de pulso comercializados que promueven falsa seguridad sin evidencia clínica;',
      '- Contención tanatológica inmediata y apoyo compasivo especializado al duelo familiar ante la tragedia consumada.'
    ]
  },
  {
    number: 600,
    id: 'diag-600',
    title: 'Intoxicación Aguda por Plaguicidas Organofosforados y Carbamatos (Síndrome Colinérgico Agudo)',
    cie10: 'T60.0',
    category: 'Genéticas y Congénitas',
    chapter: 'IX. Enfermedades Genéticas, de Salud Mental y Oftalmológicas (556-600)',
    definition: 'Intoxicación toxicológica aguda severa frecuente en áreas agrícolas y rurales del Perú (por ingestión accidental o con fines autolíticos de insecticidas agrícolas como metamidofos, clorpirifos, paratión o carbofurano), producida por la inhibición irreversible (organofosforados) o reversible (carbamatos) de la enzima acetilcolinesterasa, determinando una acumulación masiva de acetilcolina en receptores muscarínicos y nicotínicos del sistema nervioso autónomo y periférico.',
    symptoms: [
      'MANIFESTACIONES MUSCARÍNICAS ("DUMBELS" O SÍNDROME HÚMEDO):',
      '- DIARREA Y CÓLICOS ABDOMINALES DOLOROSOS',
      '- SIALORREA MASIVA ESPUMOSA POR LA BOCA ("boca de sapo"), lagrimeo profuso y sudoración diaforética fría copiosa',
      '- BRONCORREA MASIVA CON BRONCOESPASMO SEVERO Y DISNEA ASFIXIANTE (causa principal de insuficiencia respiratoria aguda y muerte)',
      '- MIOSIS PUNTIFORME NO REACTIVA BILATERAL (pupilas en punta de alfiler)',
      '- BRADICARDIA SINUSAL SEVERA O BLOQUEO AV',
      'MANIFESTACIONES NICOTÍNICAS:',
      '- FASCICULACIONES MUSCULARES EN LENGUA, PÁRPADOS Y MÚSCULOS DE LA CARA, temblores e hipertonía',
      '- DEBILIDAD MUSCULAR GRAVE Y PARÁLISIS DE MÚSCULOS RESPIRATORIOS (diafragma e intercostales)',
      '- Taquicardia e hipertensión arterial transitoria inicial',
      'MANIFESTACIONES DEL SISTEMA NERVIOSO CENTRAL:',
      '- Agitación psicomotriz, confusión, convulsiones tónico-clónicas generalizadas, coma y depresión del centro respiratorio'
    ],
    redFlags: ['PARO RESPIRATORIO POR COMBINACIÓN DE BRONCORREA MASIVA + BRONCOESPASMO + PARÁLISIS DIAFRAGMÁTICA: REQUIERE ATROPINIZACIÓN INMEDIATA'],
    criteria: 'Historia de exposición/ingestión de insecticidas con olor característico a ajo/petróleo MÁS síndrome colinérgico típico (miosis, bradicardia, broncorrea, fasciculaciones) y disminución de la actividad de colinesterasa sérica/eritrocitaria.',
    labTests: [
      'ACTIVIDAD DE ACETILCOLINESTERASA ERITROCITARIA Y BUTIRILCOLINESTERASA SÉRICA (reducida a <50% en intoxicación moderada y <20% en intoxicación severa)',
      'Gases arteriales (hipoxemia severa y acidosis metabólica láctica o mixta)',
      'Ionograma y electrocardiograma continuo (prolongación del intervalo QTc y riesgo de torsades de pointes)'
    ],
    imaging: [
      'Radiografía simple de tórax: infiltrados alveolares difusos bilaterales por broncorrea masiva o edema pulmonar no cardiogénico',
      'Endoscopía digestiva alta diferida si el producto contenía hidrocarburos o disolventes corrosivos'
    ],
    differential: ['Intoxicación por bloqueantes beta o antagonistas del calcio', 'Intoxicación por opioides (miosis y coma pero con boca y piel secas)', 'Intoxicación por carbamatos (no responde a oximas, duración más corta)', 'Shock anafiláctico'],
    firstLine: [
      'MEDIDAS DE RESCATE Y DESCONTAMINACIÓN INMEDIATA:',
      '- PROTEGER AL PERSONAL DE SALUD: uso de guantes de nitrilo, bata y mascarilla;',
      '- Retirar de inmediato toda la ropa contaminada del paciente y realizar lavado cutáneo exhaustivo con agua y jabón abundante;',
      'ANTÍDOTO ESPECÍFICO DE ELECCIÓN (ANTAGONISTA COMPETITIVO MUSCARÍNICO):',
      '- ATROPINA SULFATO INTRAVENOSA: Dosis en adultos de 1 a 3 mg IV en bolo (en niños 0.02 a 0.05 mg/kg IV); duplicar la dosis cada 3 a 5 minutos hasta alcanzar SIGNOS DE ATROPINIZACIÓN COMPLETA:',
      '  * Signos de atropinización meta: CAMPOS PULMONARES SECOS (desaparición de la broncorrea y estertores), frecuencia cardíaca >80 lpm, presión sistólica >80 mmHg y piel seca (la miosis es el último signo en revertir y no debe usarse como meta de atropinización);',
      '- Una vez lograda la atropinización: mantener infusión continua de atropina (10-20% de la dosis total de carga por hora)'
    ],
    alternatives: [
      'REACTIVADOR DE LA COLINESTERASA (SOLO EN ORGANOFOSFORADOS ANTES DEL "ENVEJECIMIENTO" ENZIMÁTICO EN LAS PRIMERAS 24-48H): PRALIDOXIMA (2-PAM) a 30 mg/kg IV en bolo lento en 30 minutos, seguido de infusión de 8-10 mg/kg/hora (contraindicada en carbamatos)',
      'Lavado gástrico con sonda gruesa y carbón activado (1 g/kg) SOLO si el paciente llega dentro de la primera hora tras la ingestión y tiene vía aérea protegida'
    ],
    nonPharm: [
      'Intubación endotraqueal precoz si hay deterioro del sensorio o falla ventilatoria; asegurar SIEMPRE adecuada oxigenación antes de administrar atropina para evitar arritmias ventriculares por miocardio hipóxico',
      'Manejo estricto de la secreción bronquial mediante aspiración continua'
    ],
    nursingCare: [
      'AUTOPROTECCIÓN ESTRICTA DEL PERSONAL: ponerse equipo de protección personal completo antes de tocar al paciente o sus ropas (riesgo de intoxicación transdérmica o inhalatoria del enfermero);',
      'OXÍGENO ANTES DE ATROPINA: administrar oxígeno a alto flujo antes de iniciar la atropina para evitar fibrilación ventricular;',
      'VIGILANCIA MINUTO A MINUTO DE LA ATROPINIZACIÓN: auscultar continuamente los campos pulmonares (la meta cardinal es el PULMÓN SECO SIN RUIDOS DE SECRECIÓN);',
      'Diferenciar toxicidad por atropina (hipertermia, delirio, retención urinaria, piel roja y seca) de falta de atropinización (pulmones húmedos, sialorrea, bradicardia).'
    ]
  }
];
