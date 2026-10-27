import { CatalogoEntry } from './types';

export const capitulo7: CatalogoEntry[] = [
  {
    number: 411,
    id: 'diag-411',
    title: 'Accidente cerebrovascular isquémico (Ictus isquémico)',
    cie10: 'I63.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Déficit neurológico focal agudo ocasionado por la interrupción súbita del flujo sanguíneo cerebral arterial, secundario a oclusión trombótica, cardioembólica (FA) o de pequeño vaso (infarto lacunar), que genera un núcleo de necrosis isquémica rodeado de un área de penumbra rescatable.',
    symptoms: ['Pérdida súbita de fuerza motora o sensibilidad en hemicuerpo (hemiparesia/hemiplejía facial, braquial o crural)', 'Asimetría facial súbita con desviación de comisura bucal', 'Alteración brusca del lenguaje: afasia motora (Broca), sensitiva (Wernicke) o disartria marcada', 'Hemianopsia homónima contralateral o ceguera monocular transitoria (amaurosis fugaz)', 'Ataxia, vértigo agudo severo, inestabilidad para la marcha o caída súbita'],
    redFlags: ['CANDIDATO A TROMBÓLISIS/TROMBECTOMÍA DENTRO DE VENTANA TERAPÉUTICA (<4.5 horas para rt-PA EV; hasta 6-24 horas para trombectomía mecánica)', 'Signos de herniación cerebral: coma, anisocoria arreactiva, bradicardia con hipertensión (tríada de Cushing)', 'Infarto maligno de la arteria cerebral media con edema cerebral masivo'],
    criteria: 'Escala NIHSS para cuantificar severidad neurológica y confirmación de ausencia de hemorragia en TC cerebral sin contraste.',
    labTests: ['Glucemia capilar inmediata (descarte urgente de hipoglucemia imitadora de ictus)', 'Hemograma, INR, TP, TTPa, plaquetas, troponina y función renal'],
    imaging: ['TC craneal simple urgente (regla el sangrado en <20 min de llegada a urgencias; score ASPECTS)', 'Angio-TC de vasos de cuello y cerebro o RM cerebral con difusión (DWI/FLAIR mismatch)'],
    differential: ['Hemorragia intracerebral', 'Parálisis de Todd postcrítica', 'Hipoglucemia severa', 'Migraña con aura hemipléjica', 'Crisis de conversión histérica'],
    firstLine: [
      { drug: 'Alteplasa (rt-PA) o Tenecteplasa EV (si tiempo de evolución <4.5 horas y sin contraindicaciones)', dose: 'Alteplasa 0.9 mg/kg EV (máximo 90 mg): 10% en bolo en 1 min y el 90% restante en infusión durante 60 minutos (Tenecteplasa 0.25 mg/kg bolo)', route: 'EV', freq: 'Dosis única', notes: 'Fibrinólisis urgente; mantener PA <180/105 mmHg antes y durante la infusión' },
      { drug: 'Trombectomía mecánica endovascular', dose: 'Extracción del trombo mediante stent retriever o aspiración en oclusión de gran vaso (carótida interna o ACM M1)', route: 'Endovascular intraarterial', freq: 'Procedimiento urgente', notes: 'Ventana de hasta 24 horas guiada por neuroimagen avanzada de perfusión' }
    ],
    alternatives: [
      { drug: 'Ácido Acetilsalicílico (Aspirina) oral', dose: '160 a 300 mg VO/SNG en dosis de carga, luego 100 mg/día (iniciar tras 24h de rt-PA o de inmediato si no fue candidato a lisis)', route: 'VO / SNG', freq: 'c/24h', notes: 'En infartos menores (NIHSS <=3) o AIT de alto riesgo: doble antiagregación con Aspirina + Clopidogrel por 21 días' }
    ],
    nonPharm: ['Monitoreo hemodinámico estricto, normotermia (<37.5 °C), normoglucemia (140-180 mg/dL), saturación de O2 >94%', 'Cabecera a 30° para optimizar drenaje venoso cerebral y reducir presión intracraneal', 'Test de disfagia antes de cualquier ingesta oral'],
    nursingCare: ['CÓDIGO ICTUS ENFERMERO: Aplicar de inmediato la escala Cincinnati/FAST (Facial droop, Arm drift, Speech, Time) y anotar con precisión milimétrica la "HORA DE ÚLTIMA VEZ VISTO ASINTOMÁTICO"', 'Manejo de la presión arterial: NO BAJAR LA PRESIÓN ARTERIAL en fase aguda a menos que exceda 220/120 mmHg (o >185/110 mmHg si se va a trombolizar); la hipertensión permisiva mantiene la perfusión de la penumbra', 'TEST DEL VASO DE AGUA DE DISFAGIA: NPO estricto hasta evaluar deglución; colocar SNG si hay disfagia para evitar neumonía aspirativa mortal', 'Monitoreo de sangrado neurológico durante y post infusión de rt-PA: control de NIHSS y PA cada 15 min las primeras 2 horas']
  },
  {
    number: 412,
    id: 'diag-412',
    title: 'Hemorragia intracerebral intraparenquimatosa',
    cie10: 'I61.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Colección hemática focal dentro del parénquima cerebral producida por la rotura espontánea de una arteria intracerebral, causada con mayor frecuencia por arteriolopatía hipertensiva crónica en vasos perforantes profundos (ganglios basales, tálamo, puente, cerebelo) o por angiopatía amiloide cerebral en ancianos (hemorragias lobares).',
    symptoms: ['Cefalea súbita intensa de inicio ictal con náuseas y vómitos en proyectil durante la actividad física', 'Déficit neurológico focal rápidamente progresivo en minutos a horas (hemiplejía densa contralateral, afasia)', 'Deterioro precoz del nivel de conciencia (estupor o coma)', 'Cifras tensionales extremadamente elevadas al ingreso (>200/110 mmHg)', 'Posturas de decorticación o descerebración en sangrados con efecto de masa masivo'],
    redFlags: ['HERNIACIÓN CEREBRAL UNCAL / TRANSTENTORIAL (anisocoria ipsilateral midriática, hemiplejía contralateral y coma)', 'Hemorragia cerebelosa >3 cm con compresión del tronco encefálico e hidrocefalia obstructiva aguda (urgencia neuroquirúrgica inmediata)'],
    criteria: 'Déficit ictal hipertensivo con evidencia directa de hematoma hiperdenso en parénquima cerebral en TC craneal.',
    labTests: ['Perfil de coagulación urgente (INR, TP, TTPa, fibrinógeno, plaquetas) para revertir anticoagulación', 'Gasometría arterial y electrolitos séricos'],
    imaging: ['TC cerebral sin contraste (hiperdensidad intraparenquimatosa aguda, volumen con fórmula ABC/2 y desviación de línea media)'],
    differential: ['ACV isquémico con transformación hemorrágica', 'Hemorragia subaracnoidea pura', 'Malformación arteriovenosa rota', 'Metástasis cerebral hemorrágica (melanoma, coriocarcinoma)'],
    firstLine: [
      { drug: 'Control intensivo de la Presión Arterial: Labetalol o Nicardipino EV', dose: 'Labetalol 10-20 mg EV en bolo en 2 min (repetir o infusión a 2-8 mg/min) buscando PAS objetivo entre 130 y 140 mmHg de forma segura y rápida', route: 'EV', freq: 'Infusión continua', notes: 'Disminuye la expansión del hematoma en las primeras horas sin comprometer perfusión' },
      { drug: 'Reversión inmediata de anticoagulación (si el paciente estaba anticoagulado)', dose: 'Si tomaba Warfarina: Complejo Protrombínico 4 factores (PCC) 25-50 UI/kg EV + Vitamina K 10 mg EV; si tomaba Dabigatrán: Idarucizumab 5 g EV; si tomaba Rivaroxabán/Apixabán: Andexanet alfa o PCC', route: 'EV', freq: 'Dosis rescate', notes: 'Prioridad crítica en la primera hora de atención' }
    ],
    alternatives: [
      { drug: 'Evacuación neuroquirúrgica urgente (Craniectomía descompresiva)', dose: 'Cirugía descompresiva urgente en hematomas cerebelosos >3 cm con compresión de tronco o hematomas lobares superficiales con deterioro neurológico progresivo', route: 'Quirúrgico', freq: 'Urgencia', notes: 'Salva la vida previniendo herniación fatal' }
    ],
    nonPharm: ['Cabecera elevada a 30 grados alineada en posición neutra para facilitar el drenaje venoso yugular', 'Manejo en UCI o Unidad de Ictus con intubación orotraqueal si Glasgow <=8'],
    nursingCare: ['MONITOREO ESTRICTO DE LA PRESIÓN ARTERIAL CADA 15 MINUTOS: Titular el vasodilatador EV para mantener la PAS estrictamente entre 130-140 mmHg, evitando picos que expandan el hematoma o caídas bruscas que causen isquemia perihematoma', 'Vigilancia de signos de PIC elevada: midriasis pupilar unilateral arreactiva, bradicardia con respiración irregular (tríada de Cushing)', 'Evitar hipertermia (paracetamol reglado si T >37.5 °C) e hiperglucemia (esquema de insulina subcutánea)', 'Profilaxis de trombosis venosa profunda con compresión neumática intermitente mecánica desde el ingreso (heparinas contraindicadas en fase aguda)']
  },
  {
    number: 413,
    id: 'diag-413',
    title: 'Hemorragia subaracnoidea aneurismática',
    cie10: 'I60.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Extravasación aguda de sangre en el espacio subaracnoideo y cisternas de la base, originada en el 85% de los casos espontáneos por la rotura de un aneurisma sacular en las bifurcaciones del polígono de Willis. Constituye una emergencia neuroquirúrgica con alta morbimortalidad prehospitalaria.',
    symptoms: ['"EL PEOR DOLOR DE CABEZA DE MI VIDA": cefalea hiperaguda de máxima intensidad en menos de 1 minuto ("cefalea en trueno o relámpago")', 'Pérdida transitoria del estado de conciencia o síncope ictal al momento de la cefalea', 'Rigidez de nuca marcada y signos meníngeos (Kernig y Brudzinski positivos) que aparecen tras varias horas', 'Náuseas y vómitos explosivos, fotofobia severa y sonofobia', 'Parálisis del III par craneal con ptosis y midriasis arreactiva (aneurisma de arteria comunicante posterior)'],
    redFlags: ['RESANGRADO TEMPRANO DEL ANEURISMA (pico en las primeras 24 horas; mortalidad >70%)', 'VASOESPASMO CEREBRAL E ISQUEMIA RETARDADA (DCI) entre los días 4 y 14 post-hemorragia', 'Hidrocefalia aguda con estupor'],
    criteria: 'Cefalea en trueno súbita con hiperdensidad en cisternas basales en TC o líquido xantocrómico en punción lumbar.',
    labTests: ['Punción lumbar (indicada si la TC craneal es normal y el cuadro clínico es sugerente: presencia de líquido cefalorraquídeo xantocrómico por degradación de hemoglobina)'],
    imaging: ['TC craneal simple en las primeras 6 horas (sensibilidad >98% para sangre en cisternas)', 'Angio-TC cerebral o Panangiografía cerebral por sustracción digital (estándar de oro para ubicar aneurisma)'],
    differential: ['Cefalea en trueno primaria idiopática', 'Síndrome de vasoconstricción cerebral reversible', 'Meningitis aguda', 'Trombosis venosa cerebral'],
    firstLine: [
      { drug: 'Oclusión precoz del aneurisma mediante Embolización endovascular (Coils) o Clipaje neuroquirúrgico', dose: 'Tratamiento endovascular con coils de platino o clipaje microquirúrgico dentro de las primeras 24-48 horas del ingreso', route: 'Endovascular / Quirúrgico', freq: 'Urgente', notes: 'Previene el resangrado mortal precoz' },
      { drug: 'Nimodipino oral (prevención del vasoespasmo cerebral isquémico)', dose: '60 mg VO cada 4 horas durante 21 días continuos', route: 'VO / SNG', freq: 'c/4h x 21 días', notes: 'Neuroprotector calcioantagonista de prescripción obligatoria; reduce el déficit isquémico tardío y la mortalidad' }
    ],
    alternatives: [
      { drug: 'Drenaje ventricular externo (DVE)', dose: 'Colocación de catéter intraventricular urgente si hay hidrocefalia aguda obstructiva', route: 'Quirúrgico', freq: 'Procedimiento de rescate', notes: 'Controla la hipertensión endocraneana y evacúa sangre ventricular' }
    ],
    nonPharm: ['Reposo absoluto en cama en ambiente oscuro, silencioso y tranquilo, evitando estímulos o esfuerzos físicos', 'Evitar maniobras de Valsalva administrando laxantes suaves y antieméticos reglados'],
    nursingCare: ['ADMINISTRACIÓN ININTERRUMPIDA DE NIMODIPINO: Administrar estrictamente cada 4 horas día y noche; si la presión arterial sistólica cae por debajo de 90-100 mmHg, consultar titulación pero jamás suspender arbitrariamente', 'Monitoreo neurológico cada 1-2 horas buscando déficits focales nuevos o disminución del puntaje de Glasgow (alerta de vasoespasmo cerebral tardío entre los días 4 al 14)', 'Vigilancia de hiponatremia por síndrome pierde-sal cerebral (común en HSA; no restringir líquidos, administrar suero salino al 0.9%)', 'Mantener al paciente en reposo en cama estricto en decúbito supino con cabecera a 30° hasta que el aneurisma esté asegurado']
  },
  {
    number: 414,
    id: 'diag-414',
    title: 'Ataque isquémico transitorio (AIT)',
    cie10: 'G45.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Episodio transitorio de disfunción neurológica focal causado por isquemia focal cerebral, medular o retiniana, sin infarto tisular agudo demostrado en neuroimagen (definición basada en tejido). Sus síntomas típicamente se resuelven en menos de 1 hora, pero confiere un riesgo inminente y muy elevado de sufrir un ACV isquémico completo invalidante en las siguientes 48 a 72 horas.',
    symptoms: ['Debilidad motora transitoria unilateral (parestesias o debilidad en cara, brazo o pierna)', 'Dificultad fugaz para hablar o comprender palabras (afasia transitoria) o disartria', 'Amaurosis fugaz: pérdida visual monocular indolora transitoria "como una cortina negra que cae sobre un ojo"', 'Ataxia transitoria, inestabilidad para la bipedestación o diplopía transitoria', 'Resolución completa de todos los síntomas antes de la evaluación médica'],
    redFlags: ['PUNTAJE ABCD2 ALTO (>=4 puntos: edad >=60 años, PA >=140/90, clínica motora o del lenguaje, duración >=60 min, diabetes): RIESGO DE ACV ISQUÉMICO COMPLETO >8-10% en las próximas 48 horas (requiere hospitalización inmediata)'],
    criteria: 'Déficit neurológico focal autolimitado sin evidencia de infarto en RM/TC con puntaje ABCD2.',
    labTests: ['Glucemia capilar, hemograma, coagulación y perfil lipídico', 'Troponina ultrasensible'],
    imaging: ['RM cerebral con secuencias de difusión (DWI) urgente (descarte de infarto microscópico)', 'Ecografía Doppler de arterias carótidas y vertebrales (descarte de estenosis carotídea carotídea >50-70%)', 'Electrocardiograma y Holter de 24-48 horas (descarte de fibrilación auricular paroxística)'],
    differential: ['Migraña con aura sensitiva o motora', 'Crisis epiléptica focal parcial con déficit postcrítico', 'Síncope vasovagal', 'Vértigo posicional paroxístico benigno', 'Amnesia global transitoria'],
    firstLine: [
      { drug: 'Doble antiagregación plaquetaria precoz (DAPT: Aspirina + Clopidogrel)', dose: 'Aspirina 300 mg de carga + Clopidogrel 300 mg de carga, continuados a Aspirina 100 mg/día + Clopidogrel 75 mg/día durante 21 DÍAS, seguido de monoterapia con Clopidogrel', route: 'VO', freq: 'c/24h x 21 días', notes: 'Reduce drásticamente el riesgo de infarto cerebral recurrente en el primer mes según ensayos POINT y CHANCE' },
      { drug: 'Estatina de alta intensidad: Atorvastatina', dose: '80 mg VO diarios por la noche', route: 'VO', freq: 'c/24h nocturno', notes: 'Efecto pleiotrópico estabilizador de la placa ateromatosa' }
    ],
    alternatives: [
      { drug: 'Endarterectomía carotídea o Angioplastia con stent carotídeo', dose: 'Procedimiento quirúrgico de revascularización precoz dentro de los primeros 7-14 días si hay estenosis carotídea sintomática >=70%', route: 'Quirúrgico vascular', freq: 'Procedimiento programado urgente', notes: 'Previene infartos carotídeos masivos' }
    ],
    nonPharm: ['Abandono estricto del tabaquismo', 'Control glucémico en diabéticos y control tensional ambulatorio <130/80 mmHg'],
    nursingCare: ['HOSPITALIZACIÓN PRECOZ Y RECONOCIMIENTO: Advertir al paciente y familiares que, aunque ya se sienta "completamente bien", el AIT es el mayor aviso previo a un infarto cerebral masivo y no debe abandonar la clínica', 'Monitoreo continuo del ritmo cardíaco con telemetría en cama para detectar episodios silentes de Fibrilación Auricular', 'Educación sanitaria sobre la regla FAST/Cincinnati para consultar de urgencia al 106/SAMU si recurre cualquier debilidad']
  },
  {
    number: 415,
    id: 'diag-415',
    title: 'Epilepsia y Crisis convulsivas generalizadas tónico-clónicas',
    cie10: 'G40.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno cerebral crónico caracterizado por una predisposición continuada para generar crisis epilépticas debido a descargas neuronales excesivas o hipersincrónicas en la corteza cerebral. La crisis tónico-clónica generalizada ("gran mal") cursa con pérdida de conciencia súbita, fase tónica con contractura muscular sostenida, seguida de sacudidas clónicas rítmicas bilaterales y estupor postictal.',
    symptoms: ['Grito epiléptico inicial por espasmo espiratorio forzado con pérdida súbita de conciencia y caída al suelo', 'Fase tónica (10-20 seg): rigidez corporal generalizada con cianosis facial por apnea', 'Fase clónica (30-60 seg): sacudidas musculares rítmicas, violentas y sincrónicas en las cuatro extremidades', 'Mordedura lateral de lengua y sialorrea espumosa por la boca', 'Relajación de esfínteres (incontinencia urinaria o fecal)', 'Periodo postictal: confusión mental profunda, somnolencia, amnesia del episodio, mialgias y cefalea difusa'],
    redFlags: ['CRISIS QUE DURA MÁS DE 5 MINUTOS O REPETICIÓN DE CRISIS SIN RECUPERAR LA CONCIENCIA ENTRE ELLAS (DEFINICIÓN DE ESTADO EPILÉPTICO - EMERGENCIA VITAL)', 'Traumatismo craneoencefálico severo durante la caída'],
    criteria: 'Criterios ILAE: al menos 2 crisis no provocadas separadas por >24 horas, o 1 crisis no provocada con riesgo de recurrencia >60% a 10 años.',
    labTests: ['Glucemia capilar, electrolitos séricos (sodio, calcio, magnesio) y niveles séricos de fármacos antiepilépticos si ya los tomaba', 'Descarte toxicológico en orina'],
    imaging: ['Electroencefalograma (EEG) ambulatorio o con privación de sueño (paroxismos punta-onda generalizados)', 'RM cerebral con protocolo de epilepsia (evalúa esclerosis mesial temporal, displasias corticales o tumores)'],
    differential: ['Síncope convulsivo vasovagal o cardiogénico', 'Crisis no epilépticas psicógenas (pseudocrisis)', 'Ataque de pánico agudo con hiperventilación', 'AIT transitorio'],
    firstLine: [
      { drug: 'Levetiracetam oral / endovenoso', dose: 'Adultos: inicio 500 mg VO/EV cada 12 horas, titulando según respuesta clínica hasta 1000-1500 mg cada 12 horas', route: 'VO / EV', freq: 'c/12h', notes: 'Fármaco antiepiléptico de primera línea por amplio espectro, excelente tolerancia y nulas interacciones hepáticas' },
      { drug: 'Ácido Valproico (Valproato de Sodio) oral', dose: '500 mg a 1000 mg VO cada 12 horas (500-1500 mg/día)', route: 'VO', freq: 'c/12h', notes: 'Máxima eficacia en epilepsias generalizadas idiopáticas primarias; CONTRAINDICADO EN MUJERES EN EDAD FÉRTIL por alto riesgo teratogénico de espina bífida' }
    ],
    alternatives: [
      { drug: 'Lamotrigina oral (titulación muy lenta para evitar Stevens-Johnson)', dose: 'Inicio 25 mg/día VO aumentando gradualmente cada 2 semanas hasta 100-200 mg/día', route: 'VO', freq: 'c/12-24h', notes: 'Fármaco de elección en mujeres jóvenes en edad fértil y ancianos' }
    ],
    nonPharm: ['Higiene estricta del sueño (evitar la privación de sueño que es el principal detonante)', 'Abstinencia absoluta de consumo de alcohol y estimulantes', 'Evitar deportes de riesgo sin supervisión (natación solitaria, buceo, escalada)'],
    nursingCare: ['ACTUACIÓN INMEDIATA DE ENFERMERÍA DURANTE LA CRISIS CONVULSIVA:', '1. PROTEGER LA CABEZA del paciente colocando una almohada o chaqueta debajo para evitar contusiones', '2. COLOCAR AL PACIENTE DE LADO (POSICIÓN LATERAL DE SEGURIDAD) para evitar la broncoaspiración de secreciones y vómitos', '3. JAMÁS INTRODUCIR NINGÚN OBJETO, DEDOS O PAÑUELOS DENTRO DE LA BOCA (riesgo de fracturas dentales, asfixia o amputación del dedo del rescatista)', '4. NO SUJETAR NI CONTENER LAS EXTREMIDADES POR LA FUERZA durante las sacudidas para no provocar luxaciones o fracturas óseas', '5. CONTROLAR EL TIEMPO CON RELOJ: si la crisis dura más de 5 minutos, activar protocolo de Status Epiléptico y preparar benzodiacepina EV de inmediato']
  },
  {
    number: 416,
    id: 'diag-416',
    title: 'Estado epiléptico convulsivo (Status epilepticus)',
    cie10: 'G41.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Emergencia neurológica crítica caracterizada por una crisis convulsiva continua que supera los 5 minutos de duración (tiempo t1: fallo de los mecanismos de terminación), o por dos o más crisis consecutivas sin recuperación interictal completa de la conciencia. Si supera los 30 minutos (tiempo t2), se produce daño neuronal irreversible, edema cerebral citotóxico, rabdomiólisis e insuficiencia multiorgánica.',
    symptoms: ['Actividad convulsiva motora tónico-clónica bilateral continua y sostenida >5 minutos', 'Coma profundo sin respuesta a estímulos verbales o dolorosos entre crisis', 'Hipertermia severa secundaria a la contracción muscular masiva continua', 'Hipersalivación, cianosis progresiva con apnea y ruidos respiratorios estertorosos', 'Acidosis láctica grave (pH <7.10) y taquicardia extrema seguida de colapso'],
    redFlags: ['ESTADO EPILÉPTICO REFRACTARIO (persiste tras benzodiacepina + fármaco antiepiléptico de segunda línea EV): requiere coma farmacológico inducido en UCI'],
    criteria: 'Crisis convulsiva sostenida de más de 5 minutos de duración o crisis recurrentes sin lucidez interictal.',
    labTests: ['Gasometría arterial (acidosis láctica metabólica), electrolitos séricos, calcio, magnesio, glucosa, CPK sérica (rabdomiólisis)', 'Nivel sérico de antiepilépticos'],
    imaging: ['TC craneal urgente post-estabilización (descarte de hemorragia, ACV o masa)', 'EEG continuo de urgencia'],
    differential: ['Pseudostatus psicógeno', 'Rigidez de descerebración por enclavamiento', 'Tétanos o intoxicación por estricnina'],
    firstLine: [
      { drug: 'Fase 1 (0 a 10 min): Benzodiacepina de acción rápida: Diazepam o Lorazepam o Midazolam EV', dose: 'Diazepam 10 mg EV lento en 2 minutos (repetir una dosis a los 5 min si no cede); o Midazolam 10 mg IM si no hay vía EV disponible', route: 'EV lento / IM', freq: 'Bolo inicial', notes: 'Termina el 70% de las crisis si se administra precozmente' },
      { drug: 'Fase 2 (10 a 30 min): Fármaco Antiepiléptico de segunda línea EV: Levetiracetam EV o Fenitoína EV', dose: 'Levetiracetam 60 mg/kg EV (máximo 4500 mg) diluido en 100 mL de SF en 10 minutos; o Fenitoína 20 mg/kg EV en infusión lenta (<50 mg/min con monitoreo ECG continuo)', route: 'EV', freq: 'Dosis de carga única', notes: 'Imprescindible para evitar la recurrencia inmediata de las crisis' }
    ],
    alternatives: [
      { drug: 'Fase 3 (>30 a 60 min - Refractario): Inducción de Coma Farmacológico con Propofol o Midazolam en infusión', dose: 'Propofol bolo de 2 mg/kg EV seguido de infusión a 2-10 mg/kg/h con intubación orotraqueal y ventilación mecánica en UCI buscando patrón de salva-supresión en EEG', route: 'EV infusión continua en UCI', freq: 'Continuo', notes: 'Manejo intensivo con soporte hemodinámico con noradrenalina' }
    ],
    nonPharm: ['Asegurar la vía aérea: cánula orofaríngea (Guedel), aspiración de secreciones bucofaríngeas y oxígeno al 100% con mascarilla con reservorio', 'Canalización inmediata de dos vías venosas periféricas de grueso calibre (18G o 16G)'],
    nursingCare: ['PROTOCOLO DE ACCIÓN MINUTO A MINUTO: Cronometrar estrictamente la duración de la crisis; avisar al médico y preparar Diazepam EV al minuto 5 de convulsión ininterrumpida', 'VIGILANCIA RESPIRATORIA ESTRECHA TRAS BENZODIACEPINAS: Las benzodiacepinas en bolo pueden producir depresión respiratoria aguda y apnea; tener listo el equipo de intubación orotraqueal, ambú y flumazenil de rescate', 'Administración de Fenitoína: recordar que la fenitoína es sumamente flebotóxica e incompatible con soluciones glucosadas (solo diluir en Suero Fisiológico al 0.9%); monitorizar trazado ECG por riesgo de arritmias ventriculares y bradicardia durante la infusión', 'Verificar glucemia capilar inmediata: si es <60 mg/dL, administrar Tiamina 100 mg EV seguido de Dextrosa al 33% (4 ampollas) EV']
  },
  {
    number: 417,
    id: 'diag-417',
    title: 'Migraña con y sin aura',
    cie10: 'G43.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Cefalea primaria neurovascular crónica y recurrente caracterizada por episodios de dolor de cabeza de intensidad moderada a severa, pulsátil y habitualmente hemicraneal, mediado por la activación del sistema trigeminovascular y la liberación de péptidos vasoactivos (CGRP). En un 20-30% se acompaña de aura neurológica transitoria.',
    symptoms: ['Dolor hemicraneal (unilateral) pulsátil ("siente los latidos del corazón en la sien") que empeora con la actividad física ordinaria', 'Intensidad moderada a severa que incapacita las actividades laborales o cotidianas', 'FOTOFOBIA (sensibilidad a la luz), SONOFOBIA (sensibilidad al ruido) y OSMOFOBIA', 'Náuseas y vómitos frecuentes durante el pico del dolor', 'DURACIÓN TÍPICA DEL DOLOR: 4 a 72 horas sin tratamiento', 'AURA TÍPICA (dura de 5 a 60 minutos antes del dolor): escotoma centelleante ("luces en zigzag"), líneas brillantes o hemianopsia transitoria, parestesias en dedos y labios'],
    redFlags: ['ESTATUS MIGRAÑOSO (ataque de migraña debilitante que supera las 72 horas continuas)', 'Migraña con aura de inicio súbito tras los 50 años o con debilidad motora prolongada (aura hemipléjica)'],
    criteria: 'Criterios ICHD-3: al menos 5 episodios que cumplan características de duración, localización pulsátil y síntomas autonómicos asociados.',
    labTests: ['Habitualmente normales; indicados si hay sospecha de cefalea secundaria'],
    imaging: ['RM o TC cerebral sólo si hay signos de alarma (red flags SNOOP), cambio del patrón habitual o inicio súbito'],
    differential: ['Cefalea tensional', 'Cefalea en racimos', 'Hemorragia subaracnoidea', 'Sinusitis aguda', 'Disección arterial cervical'],
    firstLine: [
      { drug: 'Tratamiento del ataque agudo leve a moderado: AINEs orales (Naproxeno o Ibuprofeno)', dose: 'Naproxeno 500 a 1000 mg VO al inicio del dolor (o Ibuprofeno 600-800 mg VO)', route: 'VO', freq: 'Al inicio de la crisis', notes: 'Tomar de inmediato al iniciar los primeros síntomas; no esperar a que el dolor sea insoportable' },
      { drug: 'Tratamiento del ataque agudo moderado a severo: Triptanes (Sumatriptán o Zolmitriptán)', dose: 'Sumatriptán 50 a 100 mg VO al inicio de la fase de dolor (o 6 mg subcutáneo); o Zolmitriptán 2.5-5 mg VO', route: 'VO / SC / Nasal', freq: 'Al inicio (máx 200 mg/día)', notes: 'Agonistas 5-HT1B/1D; altamente eficaces; CONTRAINDICADOS en cardiopatía isquémica, HTA no controlada o antecedentes de ACV' }
    ],
    alternatives: [
      { drug: 'Tratamiento preventivo profiláctico (si >=3-4 crisis incapacitantes al mes): Propranolol o Topiramato', dose: 'Propranolol 40 a 120 mg/día VO dividido en 2 tomas; o Topiramato 25 mg/día titulando a 50-100 mg/día VO', route: 'VO', freq: 'c/12-24h diario', notes: 'Reduce la frecuencia de ataques en >50%; en casos resistentes: anticuerpos anti-CGRP (Erenumab, Galcanezumab SC mensual)' }
    ],
    nonPharm: ['Reposo en habitación oscura y silenciosa durante la crisis', 'Identificación y eliminación de detonantes: privación de sueño, ayuno prolongado, estrés, quesos curados, vino tinto o chocolate'],
    nursingCare: ['EDUCACIÓN SOBRE EL USO OPORTUNO DE LA MEDICACIÓN ABORTIVA: Explicar al paciente que los triptanes deben tomarse AL COMIENZO DEL DOLOR (no durante el aura) para obtener la máxima eficacia receptora', 'ALERTA SOBRE LA CEFALEA POR ABUSO DE MEDICACIÓN: Advertir enfáticamente que consumir analgésicos o triptanes más de 10 a 15 días al mes perpetúa la cefalea haciéndola diaria y crónica', 'Apoyo en urgencias: administración de antieméticos EV (Metoclopramida 10 mg) combinados con AINEs EV e hidratación en sala con luz tenue']
  },
  {
    number: 418,
    id: 'diag-418',
    title: 'Cefalea tensional episódica y crónica',
    cie10: 'G44.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'La forma más prevalente de cefalea primaria en la población mundial (hasta 70-80% de prevalencia vitalicia), caracterizada por dolor craneal bilateral, sordo y opresivo ("en banda o casco"), de intensidad leve a moderada, asociado a contractura muscular pericraneal, estrés psicosocial y fatiga muscular cervical.',
    symptoms: ['Dolor de localización bilateral, difuso en frente, sienes, nuca y hombros', 'Cualidad opresiva no pulsátil ("siente como una cincha, vincha o casco apretado alrededor de la cabeza")', 'Intensidad leve a moderada que NO impide las actividades diarias', 'NO empeora con la actividad física habitual (el paciente puede caminar o subir escaleras)', 'Ausencia de náuseas o vómitos (puede haber fotofobia o sonofobia leve, pero no ambas)', 'Duración desde 30 minutos hasta 7 días continuos en la forma episódica'],
    redFlags: ['Cefalea de inicio reciente en >50 años con arterias temporales induradas y dolorosas (sospecha de Arteritis de la temporal / Horton con riesgo de ceguera)'],
    criteria: 'Criterios ICHD-3: cefalea bilateral opresiva de intensidad no discapacitante sin náuseas.',
    labTests: ['VSG y PCR si el paciente es mayor de 50 años (descarte de arteritis de células gigantes)'],
    imaging: ['No indicada en cuadros con examen neurológico normal'],
    differential: ['Migraña sin aura leve', 'Cefalea cervicogénica', 'Cefalea por abuso de medicación', 'Disfunción de la articulación temporomandibular (ATM)'],
    firstLine: [
      { drug: 'Paracetamol oral o Ibuprofeno oral en episodios agudos', dose: 'Paracetamol 1000 mg VO o Ibuprofeno 400 mg VO en toma única al inicio de las molestias', route: 'VO', freq: 'Según dolor (máx 3-4 días/semana)', notes: 'Tratamiento analgésico de primera elección; evitar asociaciones con cafeína u opiáceos' }
    ],
    alternatives: [
      { drug: 'Amitriptilina oral (tratamiento preventivo de elección en cefalea tensional crónica >=15 días/mes)', dose: 'Inicio 10 a 25 mg VO antes de acostarse por la noche, titulando lentamente hasta 50-75 mg nocturnos', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Antidepresivo tricíclico con potente efecto analgésico central modulador del dolor' }
    ],
    nonPharm: ['Técnicas de relajación muscular y biofeedback', 'Fisioterapia descontracturante cervical y corrección de posturas laborales frente a pantallas'],
    nursingCare: ['Prevención de la automedicación crónica: concienciar al paciente de que tomar analgésicos todos los días transforma la cefalea en un círculo vicioso refractario', 'Enseñar ejercicios de estiramiento y relajación de la musculatura trapecial y paravertebral cervical', 'Promover pausas activas visuales y ergonómicas cada 2 horas de trabajo de oficina']
  },
  {
    number: 419,
    id: 'diag-419',
    title: 'Cefalea en racimos (Cefalea en brotes o de Horton)',
    cie10: 'G44.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Cefalea trigémino-autonómica primaria estrictamente unilateral caracterizada por ataques de dolor periorbitario atroz y desgarrador ("dolor del suicidio"), de duración breve (15 a 180 min), acompañado de síntomas autonómicos parasimpáticos craneales homolaterales. Ocurre en periodos activos en "racimos" que duran de semanas a meses con remisiones intermedias.',
    symptoms: ['DOLOR ESTRICTAMENTE UNILATERAL, PERIORBITARIO, RETROOCULAR O TEMPORAL DE INTENSIDAD EXTREMA Y AGONIZANTE', 'SÍNTOMAS AUTONÓMICOS CRANEALES HOMOLATERALES (del mismo lado del dolor):', '- Inyección conjuntival marcada y lagrimeo ocular profuso', '- Congestión nasal y rinorrea acuosa ipsilateral', '- Edema palpebral y ptosis palpebral con miosis (Síndrome de Horner transitorio)', '- Sudoración y rubefacción frontal y facial', 'AGITACIÓN PSICOMOTRIZ EXTREMA: el paciente no puede quedarse acostado; camina de un lado a otro, gime o se golpea la cabeza contra la pared', 'Pauta horaria circadiana fija: ataques que despiertan al paciente por la noche a la misma hora'],
    redFlags: ['ALTO RIESGO DE IDEACIÓN SUICIDA O AUTOLESIÓN DURANTE EL ATAQUE debido a la ferocidad intolerable del dolor'],
    criteria: 'Criterios ICHD-3: al menos 5 ataques unilaterales severos con síntomas autonómicos homolaterales y duración de 15 a 180 minutos.',
    labTests: ['Habitualmente normales'],
    imaging: ['RM craneal con contraste y angio-RM de vasos craneales obligatoria para descartar lesiones hipofisarias, cavernosas o carotídeas homolaterales'],
    differential: ['Hemicránea paroxística (responde de forma absoluta a indometacina)', 'Neuralgia del trigémino (dolor dura segundos)', 'Glaucoma agudo de ángulo cerrado'],
    firstLine: [
      { drug: 'Oxigenoterapia al 100% en alto flujo mediante mascarilla con reservorio (tratamiento de referencia)', dose: 'Oxígeno medicinal a 12 a 15 Litros por minuto a través de mascarilla hermética sin recirculación con bolsa de reservorio durante 15 a 20 minutos con el paciente inclinado hacia adelante', route: 'Inhalatoria de alto flujo', freq: 'Al inicio de cada ataque', notes: 'Alivia el dolor completamente en <15 min en >75% de los pacientes; sin efectos secundarios adversos' },
      { drug: 'Sumatriptán subcutáneo', dose: '6 mg SC al inicio del ataque (máximo 12 mg en 24 horas)', route: 'Subcutánea', freq: 'Al inicio del ataque', notes: 'Fármaco abortivo más rápido (actúa en 5-10 minutos); alternativa: Zolmitriptán 5 mg spray nasal' }
    ],
    alternatives: [
      { drug: 'Verapamilo oral (tratamiento preventivo de primera línea para frenar el brote)', dose: 'Inicio 240 mg/día VO dividido en 3 tomas, titulando con control de ECG cada 100-200 mg hasta 480-720 mg/día', route: 'VO', freq: 'c/8h', notes: 'Requiere ECG basal y en cada aumento por riesgo de bloqueo auriculoventricular' },
      { drug: 'Prednisona oral como terapia puente', dose: '60 a 80 mg/día VO matutino por 5 días con reducción rápida en 2 semanas', route: 'VO', freq: 'c/24h matutino x 14 días', notes: 'Corta el brote rápidamente mientras el verapamilo alcanza niveles terapéuticos' }
    ],
    nonPharm: ['Abstinencia estricta y absoluta de cualquier consumo de alcohol durante el periodo de racimo (el alcohol desencadena un ataque en <30 min)', 'Evitar siestas diurnas y cambios bruscos de temperatura'],
    nursingCare: ['ADMINISTRACIÓN INMEDIATA DE OXÍGENO AL 100% EN URGENCIAS: No perder tiempo esperando analgésicos orales; colocar de inmediato mascarilla de alto flujo a 15 L/min bien ajustada a la cara del paciente', 'BRINDAR CONTENCIÓN Y AMBIENTE PROTEGIDO: No obligar al paciente a permanecer acostado en camilla ya que la inmovilidad desespera su estado de agitación; permitirle sentarse o balancearse en un entorno seguro libre de objetos lesivos', 'Monitorización electrocardiográfica antes de aumentar dosis de Verapamilo (medición del intervalo PR para descarte de bloqueo AV)']
  },
  {
    number: 420,
    id: 'diag-420',
    title: 'Enfermedad de Parkinson idiopática',
    cie10: 'G20',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno neurodegenerativo progresivo multisistémico caracterizado por la pérdida selectiva de neuronas dopaminérgicas en la pars compacta de la sustancia negra y la presencia de cuerpos de Lewy intracelulares compuestos por alfa-sinucleína. Cursa clásicamente con la tétrada motora de temblor de reposo, bradicinesia, rigidez muscular e inestabilidad postural.',
    symptoms: ['BRADICINESIA (criterio obligatorio): lentitud para iniciar movimientos voluntarios con reducción progresiva de la velocidad y amplitud (micrografía, disminución del parpadeo, hipomimia facial)', 'TEMBLOR DE REPOSO ASIMÉTRICO (4-6 Hz): típicamente distal en miembros superiores ("cuenta de monedas"), cesa con el movimiento intencional voluntario', 'RIGIDEZ EN "RUEDA DENTADA" O "TUBO DE PLOMO" detectable a la movilización pasiva articular (signo de Negro)', 'Inestabilidad postural con marcha festinante (pasos cortos arrastrados, flexión anterior del tronco y giros en bloque)', 'Episodios de bloqueo motor transitorio ("congelamiento o freezing")', 'Síntomas no motores precoces: hiposmia/anosmia, estreñimiento pertinaz, trastorno de conducta del sueño REM y depresión'],
    redFlags: ['Ausencia total de respuesta a dosis plenas de Levodopa (>1000 mg/día)', 'Caídas precoces en el primer año de evolución o parálisis de la mirada vertical hacia abajo (sospecha de Parálisis Supranuclear Progresiva - PSP)'],
    criteria: 'Criterios clínicos de la Movement Disorder Society (MDS): bradicinesia más al menos temblor de reposo o rigidez, con excelente respuesta motora a Levodopa.',
    labTests: ['Habitualmente normales; descarte de cobre sérico y ceruloplasmina en <40 años (Enfermedad de Wilson)'],
    imaging: ['RM cerebral (descarte de patología vascular o hidrocefalia)', 'DaTscan / SPECT con Ioflupano (muestra denervación dopaminérgica nigroestriatal presináptica asimétrica)'],
    differential: ['Parkinsonismo farmacológico por neurolépticos', 'Parkinsonismo vascular', 'Atrofia multisistémica', 'Temblor esencial (temblor de acción bilateral y simétrico que mejora con alcohol)'],
    firstLine: [
      { drug: 'Levodopa + Carbidopa (o Benserazida) oral', dose: 'Inicio a dosis bajas (100/25 mg medio comprimido 3 veces al día con titulación gradual a 100/25 mg c/8h o 200/50 mg c/8h)', route: 'VO lejos de comidas', freq: 'c/8h o según pauta', notes: 'El fármaco más potente y eficaz; la carbidopa inhibe la descarboxilasa periférica previniendo náuseas e hipotensión' },
      { drug: 'Agonistas Dopaminérgicos (Pramipexol o Ropinirol)', dose: 'Pramipexol de liberación prolongada 0.375 mg/día titulando semanalmente hasta 1.5 a 4.5 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'Opción inicial preferente en menores de 60-65 años para retrasar fluctuaciones motoras; vigilar trastornos del control de impulsos (ludopatía, hipersexualidad)' }
    ],
    alternatives: [
      { drug: 'Inhibidores de la COMT (Entacapona) o Inhibidores de la MAO-B (Rasagilina)', dose: 'Entacapona 200 mg con cada toma de levodopa; Rasagilina 1 mg VO al día', route: 'VO', freq: 'Diario', notes: 'Prolongan la vida media plasmática de la levodopa en pacientes con fluctuaciones "wearing-off"' },
      { drug: 'Estimulación Cerebral Profunda (DBS) de núcleos subtalámicos', dose: 'Implantación quirúrgica de electrodos bilaterales', route: 'Quirúrgico neurofuncional', freq: 'Continuo', notes: 'En enfermedad avanzada con discinesias y fluctuaciones motoras severas' }
    ],
    nonPharm: ['Fisioterapia motora especializada y reeducación de la marcha con pistas auditivas o visuales rítmicas', 'Terapia ocupacional, fonoaudiología para la disfagia e hipofonía'],
    nursingCare: ['ADMINISTRACIÓN DE LEVODOPA LEJOS DE LAS COMIDAS CON PROTEÍNAS: Administrar estrictamente 30-60 minutos antes o 2 horas después de las comidas; los aminoácidos de las carnes y lácteos compiten por el mismo transportador intestinal y cruce de barrera hematoencefálica reduciendo drásticamente la absorción', 'Vigilancia de Hipotensión Ortostática: medir la presión arterial en decúbito supino y tras 3 minutos de bipedestación; aconsejar cambios posturales lentos y uso de medias elásticas', 'Detección de fluctuaciones motoras (fases ON/OFF) y discinesias mediante un diario horario registrado por el cuidador']
  },
  {
    number: 421,
    id: 'diag-421',
    title: 'Enfermedad de Alzheimer (Demencia tipo Alzheimer)',
    cie10: 'G30.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'La causa más frecuente de demencia o trastorno neurocognitivo mayor en el adulto mayor (60-70% de los casos). Enfermedad neurodegenerativa insidiosa y lentamente progresiva caracterizada anatomopatológicamente por el depósito extracelular de placas de beta-amiloide (A-beta-42) y ovillos neurofibrilares intracelulares de proteína tau hiperfosforilada, provocando atrofia cortical y del hipocampo con fallo colinérgico.',
    symptoms: ['PÉRDIDA PROGRESIVA DE LA MEMORIA EPISÓDICA RECIENTE (olvida conversaciones recientes, citas o repite la misma pregunta una y otra vez; preserva recuerdos biográficos antiguos en fases tempranas)', 'DESORIENTACIÓN TEMPOROESPACIAL (se desorienta en fechas y se pierde en rutas habituales)', 'Disfunción ejecutiva: incapacidad para gestionar el dinero, planificar comidas o manejar electrodomésticos', 'Trastornos del lenguaje: afasia anómica (dificultad para encontrar la palabra adecuada, uso de circunloquios)', 'Apraxia constructiva y del vestir (dificultad para vestirse o usar cubiertos)', 'Agnosia: no reconoce caras familiares en fases avanzadas', 'Alteraciones conductuales: apatía temprana, irritabilidad, suspicacia delirante celotípica y vagabundeo'],
    redFlags: ['Vagabundeo desorientado con riesgo de extravío en la vía pública', 'Síndrome del ocaso (sundowning): agitación y confusión psicomotriz vespertina al anochecer'],
    criteria: 'Criterios NIA-AA: deterioro cognitivo en >=2 dominios que interfiere con la autonomía funcional diaria con curso insidioso.',
    labTests: ['Batería de demencia tratable: TSH, Vitamina B12, Ácido fólico, VDRL/RPR, función renal y hepática (descarte de causas reversibles)', 'Biomarcadores en LCR o PET amiloide'],
    imaging: ['RM cerebral volumétrica (evidencia ATROFIA DE LOS HIPOCAMPOS Y DEL LÓBULO TEMPORAL MEDIAL cuantificada con escala de Scheltens)'],
    differential: ['Deterioro cognitivo leve amnésico', 'Demencia vascular', 'Demencia por cuerpos de Lewy', 'Pseudodemencia depresiva del anciano', 'Hidrocefalia normotensiva'],
    firstLine: [
      { drug: 'Inhibidores de la Acetilcolinesterasa (Donepezilo, Rivastigmina o Galantamina)', dose: 'Donepezilo 5 mg/día VO nocturno durante 4 semanas, aumentando a 10 mg/día VO; o Rivastigmina en parches transdérmicos de 4.6 mg/24h a 9.5 mg/24h', route: 'VO / Parche transdérmico', freq: 'c/24h', notes: 'Tratamiento de primera línea en estadios leves a moderados; mejoran temporalmente la cognición y enlentecen el deterioro funcional' },
      { drug: 'Memantina oral (antagonista no competitivo de receptores NMDA glutamatérgicos)', dose: 'Inicio 5 mg/día VO aumentando 5 mg semanalmente hasta 20 mg/día (10 mg c/12h o 20 mg c/24h)', route: 'VO', freq: 'c/24h', notes: 'Indicada en fases moderadas a severas (solo o en combinación con inhibidores de la colinesterasa)' }
    ],
    alternatives: [
      { drug: 'Quetiapina a dosis bajas (en agitación o psicosis severa no controlable)', dose: '12.5 a 25 mg VO al anochecer o ante crisis de agitación', route: 'VO', freq: 'Según agitación', notes: 'Usar con extrema cautela y por tiempo limitado por aumento del riesgo cardiovascular en demencia' }
    ],
    nonPharm: ['Estimulación cognitiva estructurada, musicoterapia y mantenimiento de rutinas fijas predecibles', 'Adaptación segura del hogar: retirar alfombras resbaladizas, bloquear accesos a gas/cocinas y colocar cerraduras de seguridad'],
    nursingCare: ['APOYO INTEGRAL AL CUIDADOR PRINCIPAL: El 80% de los cuidadores sufren sobrecarga física y emocional extrema; tamizar mediante la Escala de Zarit y ofrecer grupos de respiro y apoyo psicológico', 'Manejo del "Sundowning" (agitación vespertina): encender las luces antes de que oscurezca, mantener un ambiente tranquilo sin ruidos estridentes y ofrecer infusiones templadas', 'Estrategias de comunicación de enfermería: hablar con frases cortas, simples y tono suave; no discutir ni confrontar sus ideas delirantes; desviar la atención a actividades agradables', 'Colocación de pulsera o dispositivo GPS identificativo con nombre y teléfono de contacto permanente']
  },
  {
    number: 422,
    id: 'diag-422',
    title: 'Demencia vascular (Trastorno neurocognitivo vascular)',
    cie10: 'F01.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Segunda causa de demencia más común (15-20%), producida por el daño isquémico o hemorrágico encefálico acumulado secundario a enfermedad cerebrovascular aterotrombótica de grandes vasos, infartos lacunares múltiples subcorticales o leucoencefalopatía microvascular crónica difusa (Enfermedad de Binswanger). Se distingue por un deterioro cognitivo en escalones y predominio disexecutivo.',
    symptoms: ['DETERIORO COGNITIVO "EN ESCALONES" O FLUCTUANTE, con empeoramiento brusco tras cada evento isquémico seguido de mesetas de estabilización', 'Disfunción ejecutiva frontal predominante: enlentecimiento del procesamiento mental (bradipsiquia), desorganización, apatía y pérdida de juicio antes que fallos de memoria pura', 'Signos neurológicos focales explorables: hiperreflexia osteotendinosa, signo de Babinski unilateral o bilateral, marcha a pequeños pasos (apraxia de la marcha)', 'Labilidad emocional incontinente (risas o llanto espasmódico inapropiado)', 'Incontinencia urinaria precoz por urgencia miccional'],
    redFlags: ['Eventos isquémicos cerebrales recurrentes silentes por mal control de factores de riesgo vascular'],
    criteria: 'Criterios NINDS-AIREN: demencia demostrada, evidencia de patología cerebrovascular en neuroimagen y relación temporal directa entre los ictus y el declive.',
    labTests: ['Perfil lipídico, HbA1c, función renal y perfil tiroideo'],
    imaging: ['RM cerebral (hiperintensidades en sustancia blanca periventricular confluente - Fazekas 3, múltiples infartos lacunares en ganglios basales)'],
    differential: ['Enfermedad de Alzheimer pura', 'Demencia mixta (Alzheimer + componente vascular)', 'Hidrocefalia normotensiva', 'Depresión mayor'],
    firstLine: [
      { drug: 'Control estricto e intensivo de todos los factores de riesgo vascular', dose: 'Antihipertensivos para PA <130/80 mmHg + Atorvastatina 40-80 mg/día + Antiagregación con Aspirina 100 mg/día (o Clopidogrel 75 mg)', route: 'VO', freq: 'Diario', notes: 'Pilar más importante del tratamiento; detiene la progresión de nuevos infartos isquémicos' }
    ],
    alternatives: [
      { drug: 'Donepezilo oral (en demencia vascular pura o mixta)', dose: '5 a 10 mg VO diarios por la noche', route: 'VO', freq: 'c/24h nocturna', notes: 'Beneficio sintomático modesto en funciones ejecutivas' },
      { drug: 'Memantina oral', dose: '20 mg VO diarios', route: 'VO', freq: 'c/24h', notes: 'Mejora la velocidad de procesamiento cognitivo' }
    ],
    nonPharm: ['Ejercicio aeróbico adaptado regular (caminatas 30 min diarios)', 'Dieta mediterránea estricta y abandono total del consumo de tabaco'],
    nursingCare: ['Entrenamiento en la continencia urinaria: establecer horarios miccionales programados cada 2-3 horas durante el día para evitar fugas e incontinencia', 'Prevención activa de caídas: el paciente con demencia vascular presenta alteración motora precoz; retirar obstáculos y dotar de andador o bastón', 'Revisión y supervisión meticulosa de la toma de medicamentos antihipertensivos y antidiabéticos por un familiar']
  },
  {
    number: 423,
    id: 'diag-423',
    title: 'Esclerosis múltiple',
    cie10: 'G35',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Enfermedad autoinmune inflamatoria crónica desmielinizante y neurodegenerativa del Sistema Nervioso Central mediada por linfocitos T y B autorreactivos que atacan las vainas de mielina y oligodendrocitos. Es la causa no traumática más frecuente de discapacidad neurológica en adultos jóvenes (20-40 años, predominio femenino), presentándose comúnmente en forma de brotes y remisiones (EM Remitente-Recurrente).',
    symptoms: ['NEURITIS ÓPTICA RETROBULBAR (debut típico): dolor ocular que empeora con los movimientos oculares y pérdida de agudeza visual monocular rápida con discromatopsia', 'Síntomas motores y cerebelosos: debilidad motora en miembros, espasticidad, temblor intencional, ataxia y marcha inestable', 'Síntomas sensitivos: parestesias, entumecimiento, disestesias y SIGNO DE LHERMITTE (sensación de descarga eléctrica que desciende por la espalda y extremidades al flexionar el cuello)', 'FENÓMENO DE UHToFF: empeoramiento transitorio de los síntomas neurológicos con el calor corporal (baños calientes, fiebre, ejercicio)', 'Disfunción vesical (urgencia o retención urinaria) y fatiga patológica desproporcionada'],
    redFlags: ['Brotes motores severos con paraparesia rápida o compromiso de tronco encefálico con disfagia e insuficiencia respiratoria'],
    criteria: 'Criterios de McDonald 2017: demostración de DISMINUCIÓN EN TIEMPO Y EN ESPACIO de lesiones desmielinizantes en SNC clínica y por RM.',
    labTests: ['Punción lumbar y análisis de LCR: PRESENCIA DE BANDAS OLIGOCLONALES DE IgG en LCR ausentes en suero (positivas en >90% de los pacientes)'],
    imaging: ['RM de cerebro y médula espinal con gadolinio (placas desmielinizantes hiperintensas periventriculares en "dedos de Dawson", yuxtacorticales, infratentoriales y medulares)'],
    differential: ['Neuromielitis óptica (NMO / enfermedad de Devic - anticuerpos anti-AQP4)', 'Lupus eritematoso sistémico con compromiso neuropsiquiátrico', 'Enfermedad de Behçet', 'Déficit de vitamina B12'],
    firstLine: [
      { drug: 'Tratamiento del brote agudo: Metilprednisolona endovenosa en megadosis', dose: '1000 mg (1 gramo) EV en infusión lenta en 2-3 horas diariamente durante 3 a 5 días consecutivos', route: 'EV en infusión', freq: 'c/24h x 3-5 días', notes: 'Acelera la recuperación del brote agudo; si no responde en brotes severos: plasmaféresis de rescate' },
      { drug: 'Fármacos Modificadores de la Enfermedad de alta eficacia: Ocrelizumab o Natalizumab', dose: 'Ocrelizumab 600 mg EV cada 6 meses (anti-CD20); o Natalizumab 300 mg EV cada 4 semanas', route: 'EV', freq: 'Según protocolo biológico', notes: 'Reducen drásticamente la tasa anualizada de brotes y la progresión de la discapacidad en EM recurrente' }
    ],
    alternatives: [
      { drug: 'Moduladores orales de receptores S1P: Fingolimod', dose: '0.5 mg VO al día (requiere monitoreo cardíaco por riesgo de bradicardia en primera dosis)', route: 'VO', freq: 'c/24h', notes: 'Fármaco oral de alta eficacia; vigilar mácula y perfil hepático' }
    ],
    nonPharm: ['Fisioterapia y rehabilitación motora continua', 'Evitar la exposición a altas temperaturas ambientales (mantener ambientes climatizados)'],
    nursingCare: ['EDUCACIÓN SOBRE EL FENÓMENO DE UHTOFF: Explicar al paciente que bañarse con agua muy caliente o realizar ejercicio extenuante en verano no genera un nuevo brote destructivo, sino un bloqueo de conducción fisiológico por calor que cede al enfriarse', 'Cuidado vesical: entrenamiento de vaciamiento vesical y técnica estéril de cateterismo intermitente limpio si hay retención urinaria crónica', 'Monitoreo de seguridad en infusión de anticuerpos monoclonales: premedicación con antihistamínicos y paracetamol para prevenir reacciones infusionales']
  },
  {
    number: 424,
    id: 'diag-424',
    title: 'Esclerosis lateral amiotrófica (ELA / Enfermedad de Lou Gehrig)',
    cie10: 'G12.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Enfermedad neurodegenerativa de pronóstico fatal e implacable del sistema motor, caracterizada por la degeneración progresiva simultánea de las motoneuronas superiores (corteza motora) y las motoneuronas inferiores (asta anterior de la médula espinal y núcleos motores del tronco del encéfalo). Conduce a parálisis muscular generalizada preservando la sensibilidad y los movimientos oculomotores.',
    symptoms: ['COEXISTENCIA PATOGNOMÓNICA DE SIGNOS DE PRIMERA Y SEGUNDA MOTONEURONA:', '- Signos de 2da motoneurona: debilidad muscular asimétrica, atrofia muscular marcada, fasciculaciones visibles en lengua y músculos, calambres', '- Signos de 1ra motoneurona: hiperreflexia osteotendinosa patológica, espasticidad, reflejo de Babinski positivo', 'Forma bulbar (25-30% de inicio): DISFAGIA progresiva a líquidos y sólidos, disartria con voz farfullante y atrofia lingual con fasciculaciones masivas', 'Forma espinal (70%): debilidad distal de inicio ("mano de simio", pie caído)', 'Labilidad emocional pseudobulbar: accesos incontrolables de llanto o risa inapropiados', 'Preservación absoluta del control de esfínteres, la sensibilidad táctil y la motilidad ocular'],
    redFlags: ['INSUFICIENCIA RESPIRATORIA POR DEBILIDAD DE LA MUSCULATURA DIAFRAGMÁTICA (causa principal de muerte; disnea en decúbito, ortopnea, somnolencia diurna por hipercapnia)'],
    criteria: 'Criterios de El Escorial revisados: presencia simultánea de signos de motoneurona superior e inferior en múltiples regiones corporales con progresión.',
    labTests: ['Electromiograma (EMG) y velocidades de conducción nerviosa (demuestra denervación activa con fibrilaciones y ondas agudas positivas en múltiples segmentos)', 'CPK sérica (levemente elevada por destrucción muscular)'],
    imaging: ['RM de neuroeje (descarta mielopatía cervical compresiva o tumores)'],
    differential: ['Mielopatía cervical espondilótica severa', 'Neuropatía motora multifocal con bloqueos de conducción', 'Miastenia gravis bulbar', 'Síndrome post-polio'],
    firstLine: [
      { drug: 'Riluzol oral (único fármaco modificador con evidencia de supervivencia)', dose: '50 mg VO cada 12 horas lejos de las comidas', route: 'VO', freq: 'c/12h de por vida', notes: 'Inhibe la liberación presináptica de glutamato; prolonga la supervivencia de 2 a 3 meses y retrasa la necesidad de traqueostomía; monitorizar transaminasas hepáticas mensualmente' },
      { drug: 'Edaravona endovenosa / oral (antioxidante neuroprotector)', dose: '60 mg EV en infusión diaria durante 14 días al mes', route: 'EV', freq: 'Ciclos mensuales', notes: 'Enlentece el deterioro funcional en etapas iniciales' }
    ],
    alternatives: [
      { drug: 'Tratamiento sintomático de la espasticidad: Baclofeno', dose: '10 a 25 mg VO cada 8 horas', route: 'VO', freq: 'c/8h', notes: 'Alivia el dolor y la rigidez espástica' },
      { drug: 'Tratamiento de la sialorrea: Amitriptilina o Atropina sublingual', dose: 'Amitriptilina 25 mg nocturnos o Atropina 1% gotas 1-2 gotas sublinguales', route: 'VO / Sublingual', freq: 'Según necesidad', notes: 'Controla el exceso de saliva por pérdida de deglución automática' }
    ],
    nonPharm: ['VENTILACIÓN MECÁNICA NO INVASIVA (BiPAP): indicada precozmente cuando la Capacidad Vital Forzada (CVF) cae <50% o ante ortopnea; mejora enormemente la supervivencia y calidad de vida', 'GASTROSTOMÍA ENDOSCÓPICA PERCUTÁNEA (PEG): colocación antes de que la CVF caiga por debajo del 50% para asegurar nutrición e hidratación libre de neumonías aspirativas'],
    nursingCare: ['PLANIFICACIÓN ANTICIPADA DE CUIDADOS Y APOYO PALIATIVO: Establecer tempranamente junto al paciente y su familia las voluntades anticipadas sobre intubación orotraqueal, soporte vital y sedación paliativa terminal antes de perder el habla', 'Manejo de la deglución: adaptar la textura de los alimentos con espesantes; enseñar la maniobra de mentón al pecho para deglutir', 'Soporte comunicativo: implementar tableros de comunicación pictográfica o sistemas de seguimiento ocular en tablets cuando se extinga la voz', 'Prevención de úlceras por presión: cambios posturales reglados cada 2-3 horas y colchón de aire alternante debido a la tetraplejía inmóvil']
  },
  {
    number: 425,
    id: 'diag-425',
    title: 'Miastenia gravis',
    cie10: 'G70.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno autoinmune de la unión neuromuscular mediado por autoanticuerpos dirigidos contra los receptores nicotínicos de acetilcolina (AChR en 85%) o tirosina quinasa músculo-específica (MuSK en 5-10%) en la membrana postsináptica. Se caracteriza por debilidad y fatigabilidad patológica fluctuante de la musculatura estriada voluntaria que empeora con el uso repetido y mejora con el reposo.',
    symptoms: ['FATIGABILIDAD MUSCULAR FLUCTUANTE: la fuerza muscular es óptima por las mañanas al despertar y empeora marcadamente a lo largo del día o tras el esfuerzo físico', 'COMPROMISO OCULOMOTOR INICIAL (60-80%): ptosis palpebral asimétrica y diplopía binocular fluctuante', 'Compromiso bulbar (15-20%): voz nasal apagada que se extingue al hablar prolongadamente (disartria fatigable), dificultad masticatoria al final de las comidas y disfagia', 'Debilidad de la musculatura cervical ("cabeza caída") y de extremidades a predominio proximal', 'TEST DE LA BOLSA DE HIELO POSITIVO: la aplicación de hielo sobre el párpado caído durante 2 minutos revierte temporalmente la ptosis palpebral al inhibir la acetilcolinesterasa por frío'],
    redFlags: ['CRISIS MIASTÉNICA: debilidad severa de los músculos respiratorios diafragmáticos e intercostales con insuficiencia respiratoria aguda hipercápnica e incapacidad para tragar la saliva; EMERGENCIA VITAL QUE REQUIERE UCI E INTUBACIÓN OROTRAQUEAL'],
    criteria: 'Debilidad fatigable con prueba de anticuerpos anti-AChR positivos o test neurofisiológico de estimulación repetitiva positivo.',
    labTests: ['Anticuerpos anti-receptores de acetilcolina (anti-AChR) séricos (positivos en >85% de formas generalizadas)', 'Anticuerpos anti-MuSK (si anti-AChR son negativos)'],
    imaging: ['TC de tórax con contraste intravenoso (OBLIGATORIO en todo paciente con miastenia para descartar TIMOMA presente en 15% o hiperplasia tímica en 70%)'],
    differential: ['Síndrome miasténico de Lambert-Eaton (asociado a cáncer microcítico pulmonar - la fuerza mejora con el esfuerzo repetido)', 'Botulismo alimentario', 'Síndrome de Guillain-Barré'],
    firstLine: [
      { drug: 'Piridostigmina oral (inhibidor de la acetilcolinesterasa periférica)', dose: 'Inicio 30 a 60 mg VO cada 4 a 6 horas durante las horas de vigilia, titulando según respuesta clínica (hasta 300-360 mg/día)', route: 'VO', freq: 'c/4-6h diurnas', notes: 'Tratamiento sintomático de primera línea; aumenta la acetilcolina disponible en la hendidura sináptica; vigilar cólicos o diarrea colinérgica' },
      { drug: 'Timectomía quirúrgica (resección completa del timo)', dose: 'Extirpación toracoscópica o esternal del timo', route: 'Quirúrgico', freq: 'Procedimiento único', notes: 'Indicada en timomas y en pacientes de 18 a 60 años con anticuerpos anti-AChR positivos para inducir remisión a largo plazo' }
    ],
    alternatives: [
      { drug: 'Inmunosupresores: Prednisona oral + Azatioprina', dose: 'Prednisona 0.5 a 1 mg/kg/día VO asociado a Azatioprina 2-3 mg/kg/día VO', route: 'VO', freq: 'c/24h', notes: 'Para pacientes no controlados sólo con piridostigmina' },
      { drug: 'Inmunoglobulina Humana Endovenosa (IGEV) o Plasmaféresis', dose: 'IGEV 2 g/kg EV repartido en 5 días (o 5 sesiones de plasmaféresis)', route: 'EV', freq: 'Urgencia', notes: 'TRATAMIENTO DE ELECCIÓN EN CRISIS MIASTÉNICA AGUDA' }
    ],
    nonPharm: ['Programar descansos periódicos antes de las comidas o actividades importantes'],
    nursingCare: ['MEDICAMENTOS ESTRICTAMENTE PROHIBIDOS EN MIASTENIA GRAVIS: Enfermería debe conocer y vetar fármacos que bloquean la placa motora agravando la crisis miasténica: Aminoglucósidos (Gentamicina, Amikacina), Ciprofloxacino, Betabloqueantes, Calcioantagonistas, Magnesio EV y relajantes musculares', 'Horario de la Piridostigmina: Administrar exactamente 30 a 45 minutos antes de las comidas principales para que el pico de fuerza muscular coincida con la masticación y deglución del almuerzo', 'MONITOREO DE CRISIS MIASTÉNICA EN SALA: Evaluar la "prueba de conteo respiratorio en voz alta": si el paciente no puede contar hasta 20 en una sola espiración o la Capacidad Vital Forzada cae <15-20 mL/kg, trasladar inmediatamente a UCI']
  },
  {
    number: 426,
    id: 'diag-426',
    title: 'Síndrome de Guillain-Barré (Polirradiculoneuropatía inflamatoria aguda)',
    cie10: 'G61.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Polirradiculoneuropatía aguda autoinmune postinfecciosa potencialmente mortal, mediada por un fenómeno de mimetismo molecular que destruye las vainas de mielina (forma AIDP) o los axones (forma AMAN). En el Perú, se asocia estrechamente a brotes por Campylobacter jejuni enterógeno, Zika o arbovirus. Se manifiesta por una parálisis flácida ascendente, arreflexia y disautonomía.',
    symptoms: ['PARÁLISIS FLÁCIDA SIMÉTRICA ASCENDENTE: debilidad muscular progresiva que inicia en miembros inferiores (dificultad para subir escaleras) y asciende hacia tronco, miembros superiores y cara en días', 'ARREFLEXIA OSTEOTENDINOSA UNIVERSAL o hiporreflexia osteotendinosa patognomónica', 'Parestesias distales en guante y calcetín con dolor radicular lumbar intenso', 'Diplejía facial (parálisis facial bilateral en 50%) y disfagia bulbar', 'DISAUTONOMÍA SEVERA (60-70%): fluctuaciones extremas de la presión arterial (hipertensión lábil o hipotensión ortostática), taquicardia o bradiarritmias sinusales y retención urinaria'],
    redFlags: ['PARÁLISIS DE MÚSCULOS RESPIRATORIOS (30% requieren ventilación mecánica invasiva en UCI)', 'Arritmias cardíacas letales por disautonomía simpático-vagal'],
    criteria: 'Criterios de Brighton: parálisis flácida bilateral ascendente rápidamente progresiva con arreflexia y disociación albúmino-citológica en LCR.',
    labTests: ['PUNCIÓN LUMBAR Y ESTUDIO DE LCR: DISOCIACIÓN ALBÚMINO-CITOLÓGICA TÍPICA (hiperproteinorraquia marcada con conteo de células blanco rigurosamente normal <5-10 cél/uL, detectable tras la primera semana)', 'Serología para Campylobacter jejuni'],
    imaging: ['Electromiograma y velocidades de conducción nerviosa (muestra bloqueos de conducción motora, dispersión temporal y latencias distales prolongadas)', 'RM con gadolinio de médula espinal (engrosamiento y realce de raíces nerviosas de la cauda equina)'],
    differential: ['Mielitis transversa aguda (presenta nivel sensitivo torácico claro e hiperreflexia)', 'Crisis de Miastenia gravis', 'Botulismo', 'Parálisis por garrapatas', 'Poliomielitis'],
    firstLine: [
      { drug: 'Inmunoglobulina Humana Endovenosa (IGEV)', dose: '0.4 g/kg/día EV en infusión continua durante 5 días consecutivos (dosis total 2 g/kg)', route: 'EV en infusión', freq: 'c/24h x 5 días', notes: 'Tratamiento de elección por su alta eficacia y facilidad de administración; neutraliza autoanticuerpos patógenos' },
      { drug: 'Plasmaféresis terapéutica (Recambio plasmático)', dose: '4 a 5 sesiones en días alternos recambiando 1 a 1.5 volúmenes plasmáticos por sesión', route: 'Aféresis venosa', freq: 'Días alternos x 5 sesiones', notes: 'Equivalente en eficacia a la IGEV; indicada especialmente en pacientes que no toleran IGEV' }
    ],
    alternatives: [
      { drug: 'CORTICOIDES SISTÉMICOS ESTRICTAMENTE INEFICACES Y NO RECOMENDADOS', dose: 'No administrar corticoides en SGB', route: 'N/A', freq: 'N/A', notes: 'Los ensayos clínicos demostraron que los corticoides orales o EV no benefician e incluso retrasan la recuperación motora en SGB' }
    ],
    nonPharm: ['Monitoreo continuo en Unidad de Cuidados Intensivos (UCI)', 'Ventilación mecánica precoz guiada por capacidad vital forzada y gases arteriales'],
    nursingCare: ['REGLA DE LAS 20/30/40 DE INSUFICIENCIA RESPIRATORIA EN SGB: Trasladar de inmediato a UCI e intubar al paciente si: Capacidad Vital <20 mL/kg, Presión Inspiratoria Máxima (PImax) <30 cmH2O, o Presión Espiratoria Máxima (PEmax) <40 cmH2O', 'MONITOREO DE DISAUTONOMÍA VITAL: Control horario estricto de frecuencia cardíaca y presión arterial; advertir bradicardias severas al aspirar secreciones traqueales (tener atropina en ampolla lista en la cabecera)', 'Profilaxis rigurosa de TVP y embolia pulmonar: Heparina de bajo peso molecular subcutánea y medias de compresión graduada por la inmovilidad total prolongada', 'Cuidado ocular en diplejía facial: oclusión nocturna con pomada epitelizante y lágrimas artificiales para evitar queratitis por exposición']
  },
  {
    number: 427,
    id: 'diag-427',
    title: 'Parálisis facial periférica idiopática (Parálisis de Bell)',
    cie10: 'G51.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Mononeuropatía aguda del nervio facial (VII par craneal) en su trayecto dentro del canal de Falopio, vinculada en la gran mayoría a la reactivación del Virus del Herpes Simple tipo 1 (VHS-1) con inflamación y edema compresivo del nervio. Se distingue fundamentalmente de la parálisis central porque compromete TODOS los músculos del hemicara ipsilateral, INCLUYENDO LA FRENTE Y EL CIERRE OCULAR.',
    symptoms: ['DEBILIDAD O PARÁLISIS COMPLETA DE TODOS LOS MÚSCULOS DE UNA MITAD DE LA CARA', 'BORRAMIENTO DE LAS ARRUGAS FRONTALES IPSILATERALES (el paciente NO PUEDE FRUNCIR LA FRENTE del lado enfermo, a diferencia del ACV central que sí lo permite)', 'LAGOFTALMOS (incapacidad para cerrar completamente el ojo ipsilateral)', 'SIGNO DE BELL POSITIVO: al intentar cerrar los párpados, el globo ocular se desvía involuntariamente hacia arriba y afuera dejando visible la esclerótica blanca', 'Desviación de la comisura bucal hacia el lado sano con caída del ángulo de la boca y escape de saliva o líquidos', 'Pérdida del gusto en los dos tercios anteriores de la lengua (hipogeusia) e hiperacusia dolorosa por parálisis del músculo del estribo'],
    redFlags: ['Presencia de vesículas herpéticas en pabellón auricular o conducto auditivo externo con otalgia atroz (SÍNDROME DE RAMSAY HUNT por Herpes Zóster ótico con peor pronóstico)'],
    criteria: 'Examen clínico neurológico: parálisis facial periférica completa incluyendo frente con escala de House-Brackmann.',
    labTests: ['Habitualmente innecesarios en casos típicos'],
    imaging: ['RM craneal con contraste sólo si la evolución es progresiva más allá de 3 semanas o no hay recuperación en 3 meses'],
    differential: ['ACV isquémico con parálisis facial central (preserva la movilidad de la frente y el cierre del ojo)', 'Síndrome de Ramsay Hunt', 'Enfermedad de Lyme', 'Neurinoma del facial'],
    firstLine: [
      { drug: 'Corticoides orales precoces: Prednisona oral (iniciar en las primeras 72 horas)', dose: '60 mg VO al día durante 5 a 7 días consecutivos, seguido de una pauta de descenso gradual de 10 mg diarios hasta completar 10-14 días', route: 'VO con alimentos', freq: 'c/24h matutino', notes: 'Disminuye el edema del nervio en el canal óseo y maximiza la tasa de recuperación completa (>85%)' }
    ],
    alternatives: [
      { drug: 'Valaciclovir o Aciclovir oral (asociado a corticoides en parálisis severas House-Brackmann IV-VI)', dose: 'Valaciclovir 1000 mg VO cada 8 horas durante 7 días', route: 'VO', freq: 'c/8h x 7 días', notes: 'Actividad antiviral contra VHS-1 y virus de la varicela zóster' }
    ],
    nonPharm: ['PROTECCIÓN OCULAR CONTINUA ESTRICTA (el ojo que no cierra se deseca y desarrolla úlcera corneal grave)', 'Gafas de sol durante el día y parches protectores oclusivos por las noches'],
    nursingCare: ['CUIDADO OCULAR PRIORITARIO DE ENFERMERÍA: Instilar colirios lubricantes (lágrimas artificiales de ácido hialurónico) cada 1-2 horas durante el día y ungüento oftálmico espeso al acostarse; OCLUIR EL OJO POR LAS NOCHES CON GASA ESTÉRIL Y MICROPORE fijando el párpado caído para prevenir úlcera corneal y ceguera', 'Ejercicios de reeducación mímica facial: enseñar al paciente frente a un espejo a realizar contracciones musculares suaves y simétricas (intentar sonreír, soplar, levantar cejas) cuando empiece a reaparecer el tono muscular', 'Tranquilizar al paciente sobre la recuperación: explicar que más del 80-85% recuperan la función motora completamente en un lapso de 3 a 6 meses']
  },
  {
    number: 428,
    id: 'diag-428',
    title: 'Neuralgia del trigémino (Tic doloroso)',
    cie10: 'G50.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno neuropático paroxístico severo del V par craneal, causado en su forma clásica por la compresión neurovascular de la raíz del trigémino por una arteria aberrante (típicamente la arteria cerebelosa superior) en la fosa posterior. Se caracteriza por descargas de dolor lancinante paroxístico de máxima intensidad que dura de fracciones de segundo a 2 minutos.',
    symptoms: ['DESCARGAS PAROXÍSTICAS DE DOLOR DOLOROSÍSIMO ("COMO UN CORRIENTAZO ELÉCTRICO, PUÑALADA O TIRO")', 'Duración extremadamente breve (de 1 segundo a 2 minutos por descarga)', 'Distribución estrictamente unilateral en una o más ramas del nervio trigémino (con mayor frecuencia V2 maxilar y V3 mandibular, rara vez V1)', 'ZONAS GATILLO CUTÁNEAS O MUCOSAS PATOGNOMÓNICAS: estímulos táctiles inocuos desencadenan el dolor (lavarse la cara, afeitarse, cepillarse los dientes, masticar, hablar o incluso una ráfaga de aire frío)', 'Periodo refractario breve tras una salva durante el cual un nuevo estímulo no desencadena dolor', 'Preservación de la sensibilidad facial en el examen neurológico'],
    redFlags: ['Neuralgia en paciente joven (<40 años) o bilateral: ALERTA DE ESCLEROSIS MÚLTIPLE SUBYACENTE (placa desmielinizante en zona de entrada de la raíz trigeminal)'],
    criteria: 'Criterios ICHD-3: paroxismos unilaterales de dolor lancinante eléctrico de <2 min en territorio del trigémino desencadenados por estímulos inocuos.',
    labTests: ['No concluyentes'],
    imaging: ['RM de fosa posterior con secuencias angiográficas finas 3D FIESTA / CISS (visualiza el bucle vascular que comprime la raíz nerviosa trigeminal)'],
    differential: ['Dolor dental de origen odontogénico (conduce frecuentemente a extracciones dentales innecesarias e ineficaces)', 'Disfunción de la ATM', 'Cefalea en racimos', 'Neuralgia postherpética'],
    firstLine: [
      { drug: 'Carbamazepina oral (fármaco de referencia y de primera elección)', dose: 'Inicio 100 a 200 mg VO cada 12 horas, titulando gradualmente de 100 en 100 mg cada 3 días hasta 600 a 1200 mg/día VO dividido en 2-3 tomas', route: 'VO con comidas', freq: 'c/8-12h', notes: 'Bloqueador de canales de sodio dependientes de voltaje; respuesta terapéutica casi inmediata que confirma el diagnóstico; monitorizar hemograma (leucopenia) y sodio sérico' }
    ],
    alternatives: [
      { drug: 'Oxcarbazepina oral', dose: 'Inicio 300 mg VO cada 12 horas, aumentando hasta 900-1800 mg/día', route: 'VO', freq: 'c/12h', notes: 'Eficacia similar a carbamazepina con mejor perfil de tolerancia y menos interacciones' },
      { drug: 'Descompresión Microvascular Quirúrgica (Técnica de Jannetta)', dose: 'Craneotomía de fosa posterior e interposición de un parche de teflón entre la arteria compresora y el nervio', route: 'Neuroquirúrgico', freq: 'Procedimiento único', notes: 'Tratamiento curativo de elección en casos refractarios a fármacos con compresión vascular demostrada' }
    ],
    nonPharm: ['Evitar estímulos en las zonas gatillo identificadas (utilizar agua tibia para la higiene facial, cepillos dentales ultrasuaves y protegerse del viento frío)'],
    nursingCare: ['ADVERTENCIA CONTRA LA EXTRACCIÓN DENTAL INJUSTIFICADA: Alertar al paciente que no permita que le extraigan piezas dentarias; muchos pacientes acuden erróneamente al dentista creyendo que es una muela y pierden dientes sanos sin aliviar el dolor', 'Monitoreo de efectos adversos de Carbamazepina: vigilar somnolencia, ataxia en la marcha, erupciones cutáneas alérgicas (Stevens-Johnson) e hiponatremia en ancianos', 'Asesoría dietética: recomendar alimentos blandos templados que requieran mínima masticación y no activen las zonas gatillo bucales']
  },
  {
    number: 429,
    id: 'diag-429',
    title: 'Neuropatía periférica diabética (Polineuropatía sensitivo-motora distal)',
    cie10: 'G63.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'La complicación microvascular crónica más frecuente de la diabetes mellitus (presente en >50% de los diabéticos de larga data), causada por estrés oxidativo, acumulación de productos de glicación avanzada (AGEs) e isquemia del vasa nervorum. Cursa como una polineuropatía distal simétrica de longitud-dependiente que afecta primariamente fibras sensoriales y autonómicas.',
    symptoms: ['SÍNTOMAS SENSITIVOS POSITIVOS: dolor neuropático urente e intenso ("ardor de pies, pisar brasas calientes o carbón encendido") de predominio nocturno', 'Disestesias, alodinia (el roce de las sábanas de la cama causa dolor insoportable) e hiperalgesia', 'SÍNTOMAS SENSITIVOS NEGATIVOS: pérdida simétrica de la sensibilidad táctil, térmica y vibratoria con DISTRIBUCIÓN EN CALCETÍN Y EN GUANTE', 'Sensación de "caminar sobre algodón, piedras o pies acorchados"', 'Pérdida precoz del reflejo aquíleo bilateral', 'Pérdida de la sensibilidad protectora al dolor: RIESGO MAYOR DE ÚLCERAS POR PRESIÓN Y PIE DIABÉTICO INFECCIOSO'],
    redFlags: ['PÉRDIDA COMPLETA DE SENSIBILIDAD CON FORMACIÓN DE ÚLCERA PLANTAR NEUROPÁTICA O MAL PERFORANTE PLANTAR', 'Artropatía neuropática destructiva de Charcot con deformidad en mecedora del pie'],
    criteria: 'Test de detección con monofilamento de Semmes-Weinstein de 10 gramos (criterio ADA) y diapasón de 128 Hz.',
    labTests: ['HbA1c descompensada (>7.5-8%)', 'Descarte de causas sobreagregadas: déficit de vitamina B12 (especialmente por consumo prolongado de Metformina) y TSH'],
    imaging: ['Estudio de conducción nerviosa (muestra disminución simétrica de amplitudes de potenciales de acción sensoriales en miembros inferiores)'],
    differential: ['Neuropatía por déficit de vitamina B12 inducida por metformina', 'Polineuropatía alcohólica', 'Insuficiencia venosa crónica con estasis', 'Estenosis del canal lumbar'],
    firstLine: [
      { drug: 'Control glucémico optimizado estricto (prevención primaria de progresión)', dose: 'HbA1c objetivo <7.0% individualizada', route: 'Tratamiento metabólico', freq: 'Continuo', notes: 'Única intervención probada que detiene o revierte la progresión del daño microvascular' },
      { drug: 'Tratamiento farmacológico del dolor neuropático de primera línea: Pregabalina o Duloxetina', dose: 'Pregabalina 75 mg VO nocturna aumentando a 150-300 mg/día dividido en 2 tomas; o Duloxetina 30 mg aumentando a 60 mg VO al día', route: 'VO', freq: 'c/12-24h', notes: 'Fármacos aprobados por la FDA para dolor neuropático diabético; alivian el ardor nocturno' }
    ],
    alternatives: [
      { drug: 'Gabapentina o Amitriptilina oral', dose: 'Gabapentina 300 a 900 mg VO cada 8 horas; Amitriptilina 10 a 25 mg nocturnos', route: 'VO', freq: 'c/8-24h', notes: 'Opciones alternativas eficaces; vigilar efectos anticolinérgicos de amitriptilina en ancianos' }
    ],
    nonPharm: ['INSPECCIÓN DIARIA MINUCIOSA DE AMBOS PIES por el paciente o su cuidador con ayuda de un espejo', 'Uso de calzado ortopédico ancho, sin costuras internas, y calcetines de algodón sin elásticos compresivos'],
    nursingCare: ['PROTOCOLO DE INSPECCIÓN DE ENFERMERÍA DEL PIE DIABÉTICO:', '1. Test del Monofilamento de 10g en 4 puntos plantares: si el paciente no siente la presión en uno de los puntos, ha perdido la sensibilidad protectora de alarma', '2. Enseñar a NUNCA CAMINAR DESCALZO, ni siquiera dentro del dormitorio o en la playa', '3. Comprobar la temperatura del agua del baño con el codo o un termómetro (nunca con los pies) para evitar quemaduras graves indoloras', '4. Corte de uñas de los pies en línea recta; nunca usar tijeras puntiagudas, alicates oxidados ni callicidas químicos']
  },
  {
    number: 430,
    id: 'diag-430',
    title: 'Hidrocefalia normotensiva (Síndrome de Hakim-Adams)',
    cie10: 'G91.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno hidrocefálico crónico comunicante del adulto mayor caracterizado por la acumulación anormal de líquido cefalorraquídeo en los ventrículos cerebrales con presiones de apertura de LCR en rango normal o limítrofe en la punción lumbar intermitente. Es una de las pocas causas de demencia potencialmente reversibles mediante derivación neuroquirúrgica.',
    symptoms: ['TRÍADA CLÁSICA PATOGNOMÓNICA DE HAKIM-ADAMS:', '- 1. TRASTORNO DE LA MARCHA (primer síntoma en aparecer y el más discapacitante): "MARCHA MAGNÉTICA O APESTICADA" (pasos cortos, base ancha, los pies parecen pegados al suelo como con un imán con dificultad para elevarlos, desequilibrio y caídas frecuentes)', '- 2. DETERIORO COGNITIVO SUBCORTICAL: lentitud del pensamiento, apatía, falta de atención y olvidos con conservación relativa del lenguaje', '- 3. INCONTINENCIA URINARIA: urgencia miccional precoz que progresa a pérdida involuntaria de orina por fallo del control inhibitorio frontal'],
    redFlags: ['Falsos diagnósticos de Parkinson o Alzheimer que retrasan la derivación quirúrgica curativa'],
    criteria: 'Tríada de Hakim-Adams con ventriculomegalia desproporcionada en RM y mejoría transitoria de la marcha tras punción lumbar evacuadora.',
    labTests: ['TEST DE PUNCIÓN LUMBAR EVACUADORA ("Tap Test"): extracción de 30 a 50 mL de LCR con evaluación de la marcha antes y 30-60 minutos después (la mejoría objetiva de la velocidad y longitud del paso predice éxito quirúrgico)'],
    imaging: ['RM cerebral: VENTRICULOMEGALIA TRIVENTRICULAR marcada con ÍNDICE DE EVANS >0.30 y desproporción entre los ventrículos y los surcos de la convexidad (DESH - Disproportionately Enlarged Subarachnoid space Hydrocephalus)'],
    differential: ['Enfermedad de Parkinson', 'Enfermedad de Alzheimer', 'Demencia vascular multiinfarto', 'Atrofia cortical senil pura'],
    firstLine: [
      { drug: 'Derivación Ventrículo-Peritoneal (DVP) con válvula regulable', dose: 'Implantación neuroquirúrgica de un catéter que drena el exceso de LCR desde el ventrículo lateral hasta la cavidad peritoneal', route: 'Quirúrgico', freq: 'Procedimiento definitivo', notes: 'Tratamiento curativo de elección; revierte el trastorno de la marcha en >80% y la incontinencia en >70% si se realiza precozmente' }
    ],
    alternatives: [
      { drug: 'Derivación Lumboperitoneal o Ventrículo-Atrial', dose: 'Alternativas si existe infección o adherencias peritoneales', route: 'Quirúrgico', freq: 'Procedimiento programado', notes: 'Segunda línea quirúrgica' }
    ],
    nonPharm: ['Rehabilitación de la marcha y fisioterapia tras la cirugía', 'Entrenamiento de suelo pélvico para continencia urinaria'],
    nursingCare: ['TEST DE LA MARCHA DE ENFERMERÍA (TAP TEST): Cronometrar el tiempo que tarda el paciente en caminar 10 metros, dar media vuelta y volver antes y después de la punción lumbar evacuadora; registrar el número de pasos para documentar mejoría al neurocirujano', 'Cuidados postoperatorios de la DVP: vigilar signos de infección del catéter (fiebre, cefalea, rigidez de nuca) y signos de hiperdrenaje (cefalea ortostática intensa que mejora al acostarse)', 'Prevención de caídas: el paciente suele caerse hacia atrás (retropulsión); dotar de andador con frenos y supervisión continua en bipedestación']
  },
  {
    number: 431,
    id: 'diag-431',
    title: 'Traumatismo encéfalo craneano (TEC moderado a severo)',
    cie10: 'S06.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Afección física y daño estructural del contenido craneano provocada por una fuerza mecánica externa que genera lesiones primarias inmediatas (fracturas, contusiones, daño axonal difuso) y lesiones secundarias progresivas (edema cerebral, hipertensión endocraneana, isquemia cerebral). Clasificado según la Escala de Coma de Glasgow (GCS): Leve (14-15), Moderado (9-13) y Severo (<=8).',
    symptoms: ['Disminución del nivel de conciencia cuantificado por la Escala de Glasgow', 'Amnesia postraumática (retrógrada o anterógrada) y cefalea intensa', 'Vómitos explosivos recurrentes en proyectil sin náusea previa', 'SIGNOS DE FRACTURA DE BASE DE CRÁNEO:', '- Ojos de mapache (equimosis periorbitaria bilateral)', '- Signo de Battle (equimosis retroauricular sobre la mastoides)', '- Otorragia, otorraquia (salida de LCR por oído) o rinorraquia (salida de LCR por nariz)', 'Anisocoria pupilar o midriasis arreactiva unilateral (herniación cerebral inminente)'],
    redFlags: ['GLASGOW <=8: INDICACIÓN MANDATORIA DE INTUBACIÓN OROTRAQUEAL INMEDIATA Y PROTECCIÓN DE VÍA AÉREA', 'TRÍADA DE CUSHING (hipertensión arterial sistólica, bradicardia extrema y alteraciones del patrón respiratorio): signo tardío y pre-mortem de hipertensión endocraneana crítica'],
    criteria: 'Escala de Coma de Glasgow y TC craneal urgente sin contraste.',
    labTests: ['Gasometría arterial, hemograma, coagulación, glucosa, toxicológico y alcohol en sangre'],
    imaging: ['TC craneal simple ventana ósea y parenquimatosa urgente (hematoma epidural biconvexo en lente, hematoma subdural en semiluna, contusiones y fracturas)'],
    differential: ['ACV hemorrágico causante de la caída traumática secundaria', 'Intoxicación aguda por alcohol o sustancias de abuso', 'Coma hipoglucémico'],
    firstLine: [
      { drug: 'Medidas de neuroprotección y control de la Presión Intracraneal (PIC)', dose: 'Mantener Presión de Perfusión Cerebral (PPC) >60-70 mmHg (PPC = PAM - PIC), normotermia, normoglucemia y cabecera a 30° centrada', route: 'Manejo en UCI', freq: 'Continuo', notes: 'Evitar rigurosamente la hipoxia (PaO2 <60 mmHg) y la hipotensión (PAS <90-100 mmHg) que duplican la mortalidad' },
      { drug: 'Terapia hiperosmolar de rescate: Manitol 20% o Suero Salino Hipertónico al 3% (SSH)', dose: 'SSH al 3% 250 mL EV en bolo en 15-20 min; o Manitol al 20% 0.5 a 1 g/kg EV en bolo rápido', route: 'EV en bolo', freq: 'Según hipertensión intracraneal', notes: 'Reduce de forma aguda el edema cerebral desplazando agua hacia el lecho vascular' }
    ],
    alternatives: [
      { drug: 'Craniectomía descompresiva urgente / Evacuación de hematoma', dose: 'Craneotomía urgente con evacuación de hematoma epidural (>30 mL) o subdural agudo (>10 mm de espesor o desviación de línea media >5 mm)', route: 'Quirúrgico', freq: 'Emergencia vital', notes: 'Evita la muerte por herniación cerebral transtentorial' }
    ],
    nonPharm: ['Inmovilización cervical rígida con collarín tipo Filadelfia hasta descartar lesión de columna cervical por imagen', 'Intubación orotraqueal con técnica de secuencia rápida protegiendo la columna'],
    nursingCare: ['MONITOREO NEUROLÓGICO HORARIO CON ESCALA DE GLASGOW Y PUPILAS: Evaluar respuesta ocular, verbal y motora; evaluar simetría y reactividad pupilar a la luz (la midriasis ipsilateral indica herniación uncal compresión del III par)', 'ALERTA DE FÍSTULA DE LCR: Jamás colocar sonda nasogástrica por la nariz si hay sospecha de fractura de base de cráneo (ojos de mapache, otorraquia); colocar siempre SONDA OROGÁSTRICA por la boca para evitar perforación accidental del cerebro a través de la lámina cribosa', 'Control riguroso de la Presión de Perfusión Cerebral: no permitir PAS <100 mmHg; titular noradrenalina EV según indicación médica']
  },
  {
    number: 432,
    id: 'diag-432',
    title: 'Trastorno depresivo mayor',
    cie10: 'F32.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno del estado de ánimo grave, altamente prevalente y potencialmente incapacitante, caracterizado por la presencia continua durante al menos dos semanas consecutivas de un estado de ánimo deprimido profundo o una pérdida total del interés y la capacidad de disfrutar (anhedonia), acompañado de síntomas somáticos, cognitivos y conductuales que deterioran significativamente la funcionalidad vital.',
    symptoms: ['ESTADO DE ÁNIMO DEPRIMIDO la mayor parte del día, casi todos los días (tristeza vital, vacío, desesperanza)', 'ANHEDONIA MARCADA: pérdida profunda de interés o placer en todas o casi todas las actividades que antes disfrutaba', 'Pérdida o aumento significativo de peso (>5% en un mes) o alteración del apetito', 'Insomnio (típicamente despertar precoz matutino terminal) o hipersomnia casi diaria', 'Agitación o enlentecimiento psicomotor observable por los demás (bradipsiquia, habla lenta)', 'Fatiga patológica persistente y pérdida de energía vital ("anergia")', 'Sentimientos recurrentes de inutilidad, culpa excesiva o inapropiada y baja autoestima', 'Disminución de la capacidad para concentrarse, pensar o tomar decisiones sencillas', 'PENSAMIENTOS RECURRENTES DE MUERTE, ideación suicida recurrente con o sin plan estructurado'],
    redFlags: ['IDEACIÓN O CONDUCTA SUICIDA INMINENTE CON PLAN ESTRUCTURADO Y MEDIO DISPONIBLE (URGENCIA PSIQUIÁTRICA MAYOR)', 'Síntomas psicóticos congruentes o incongruentes con el estado de ánimo (delirios de ruina, culpa o alucinaciones)', 'Negativa total a la ingesta de líquidos y alimentos con catatonía y deshidratación severa'],
    criteria: 'Criterios DSM-5: presencia de al menos 5 de los 9 síntomas durante mínimo 2 semanas, incluyendo obligatoriamente ánimo deprimido o anhedonia.',
    labTests: ['Perfil tiroideo (TSH, T4 libre) para descartar hipotiroidismo primario imitador', 'Hemograma completo, vitamina B12 y electrolitos séricos'],
    imaging: ['No indicada salvo para descarte de lesiones frontales en depresión de inicio tardío (>60 años)'],
    differential: ['Trastorno bipolar en fase depresiva (descartar viraje a manía antes de recetar antidepresivos)', 'Duelo normal o complicado', 'Hipotiroidismo', 'Depresión inducida por sustancias o fármacos (corticoides, betabloqueantes)'],
    firstLine: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS): Sertralina o Escitalopram', dose: 'Sertralina 50 mg/día VO matutino con titulación a 100-200 mg/día; o Escitalopram 10 mg/día VO matutino con titulación a 20 mg/día', route: 'VO', freq: 'c/24h matutino', notes: 'Fármacos de primera elección por su excelente eficacia y perfil de tolerabilidad; el efecto antidepresivo clínico tarda entre 2 a 4 semanas en manifestarse plenamente' },
      { drug: 'Psicoterapia Cognitivo-Conductual (TCC) o Terapia Interpersonal estructurada', dose: 'Sesiones semanales durante 12 a 20 semanas', route: 'Intervención psicológica', freq: 'Semanal', notes: 'Tan eficaz como los fármacos en depresión leve a moderada; la combinación fármaco + TCC es la más sinérgica en depresión severa' }
    ],
    alternatives: [
      { drug: 'Inhibidores de la Recaptación de Serotonina y Noradrenalina (IRSN): Venlafaxina o Duloxetina', dose: 'Venlafaxina de liberación prolongada 75 a 225 mg/día VO; Duloxetina 60 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Excelente opción si hay dolor crónico asociado o falta de energía marcada' },
      { drug: 'Terapia Electroconvulsiva (TEC)', dose: 'Sesiones hospitalarias bajo anestesia y relajación muscular', route: 'Procedimiento especializado', freq: '2-3 veces/semana', notes: 'Tratamiento de máxima eficacia y rapidez en depresión severa con alto riesgo suicida, refractaria o psicótica' }
    ],
    nonPharm: ['Actividad física aeróbica regular moderada (caminatas de 30-45 min)', 'Higiene del sueño y estructuración diaria de rutinas con refuerzo positivo'],
    nursingCare: ['EVALUACIÓN DIRECTA Y SIN MIEDO DEL RIESGO SUICIDA: Enfermería debe preguntar de forma clara y respetuosa: "¿Ha pensado en que no vale la pena vivir?", "¿Ha tenido planes de hacerse daño o terminar con su vida?"; HABLAR DE SUICIDIO NO INDUCE LA CONDUCTA, ALIVIA LA CARGA Y SALVA VIDAS', 'EDUCACIÓN CRUCIAL SOBRE LA LATENCIA DE LOS ANTIDEPRESIVOS: Explicar al paciente y familia que las pastillas no hacen efecto de inmediato; requieren 2 a 4 semanas continuas para levantar el ánimo, y jamás deben suspenderse bruscamente', 'Retirar objetos de riesgo: en pacientes hospitalizados o en el domicilio, asegurar un entorno libre de cordones, medicamentos en frascos enteros, armas u objetos punzocortantes', 'Mantenimiento del tratamiento: recalcar que el tratamiento debe continuar al menos 6 a 9 meses tras la remisión completa del primer episodio para evitar recaídas tempranas']
  },
  {
    number: 433,
    id: 'diag-433',
    title: 'Trastorno afectivo bipolar (Tipos I y II)',
    cie10: 'F31.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psiquiátrico crónico, periódico y severo del estado de ánimo caracterizado por oscilaciones extremas entre episodios de manía (o hipomanía) y episodios depresivos mayores, intercalados con periodos de eutimia. El Tipo I requiere al menos un episodio maníaco completo; el Tipo II cursa con episodios hipomaníacos y episodios depresivos recurrentes.',
    symptoms: ['EPISODIO MANÍACO (Tipo I):', '- Estado de ánimo anormal y persistentemente elevado, expansivo, eufórico o marcadamente irritable', '- AUTOESTIMA EXAGERADA O SENTIMIENTOS DE GRANDEZA (megalomanía)', '- DISMINUCIÓN RADICAL DE LA NECESIDAD DE DORMIR (se siente descansado durmiendo apenas 2-3 horas)', '- Verborrea incontrolable (habla atropellada y difícil de interrumpir)', '- FUGA DE IDEAS y pensamiento acelerado con taquipsiquia', '- Distraibilidad extrema y aumento de la actividad orientada a metas (laboral, sexual, social)', '- CONDUCTAS DE ALTO RIESGO CON POTENCIAL CONSECUENCIAS GRAVES: gastos desmedidos de dinero, compras compulsivas, apuestas arriesgadas, indiscreciones sexuales o conducción temeraria', '- En la manía grave: síntomas psicóticos (delirios mesiánicos de ser un enviado o tener poderes sobrenaturales)', 'EPISODIO HIPOMANÍACO (Tipo II): similar a la manía pero de menor duración (mínimo 4 días), no causa deterioro social marcado ni requiere hospitalización y nunca cursa con psicosis'],
    redFlags: ['AGITACIÓN PSICOMOTRIZ EXTREMA CON AGOTAMIENTO CARDIOVASCULAR EN MANÍA AGUDA', 'Riesgo suicida altísimo (hasta 15-20 veces mayor que en población general, principalmente en las fases depresivas o mixtas)'],
    criteria: 'Criterios DSM-5: episodio maníaco de al menos 1 semana de duración que incapacita la funcionalidad o requiere internamiento.',
    labTests: ['Litemia sérica (monitoreo de niveles terapéuticos de litio: 0.6 a 1.0 mEq/L)', 'Función tiroidea y renal basales obligatorias antes de iniciar Carbonato de Litio', 'Hemograma y función hepática si usa Ácido Valproico'],
    imaging: ['No indicada salvo para descartar organicidad secundaria en primer episodio en >40 años'],
    differential: ['Esquizofrenia paranoide o esquizoafectivo', 'Trastorno de la personalidad límite', 'Psicosis inducida por anfetaminas o cocaína', 'Hipertiroidismo severo'],
    firstLine: [
      { drug: 'Carbonato de Litio oral (tratamiento de referencia y estándar de oro)', dose: 'Inicio 300 a 600 mg VO al día nocturno, titulando con litemias seriadas hasta alcanzar rango terapéutico estrecho de 0.8 a 1.1 mEq/L en fase maníaca aguda (y 0.6 a 0.8 mEq/L en mantenimiento)', route: 'VO', freq: 'c/12-24h nocturna', notes: 'Único estabilizador con evidencia robusta de reducción de la tasa de suicidio consumado' },
      { drug: 'Antipsicóticos de segunda generación: Quetiapina, Olanzapina o Aripiprazol', dose: 'Quetiapina 300 a 600 mg/día VO; u Olanzapina 10 a 20 mg/día VO', route: 'VO', freq: 'c/24h nocturna', notes: 'Tratamiento de elección para el control rápido de la agitación y la manía psicótica aguda' }
    ],
    alternatives: [
      { drug: 'Ácido Valproico (Valproato semisódico) oral', dose: '750 a 1500 mg VO al día (valproemia terapéutica 50-100 mcg/mL)', route: 'VO', freq: 'c/12h', notes: 'Excelente opción en manía con episodios mixtos o cicladores rápidos; evitar en mujeres fértiles' }
    ],
    nonPharm: ['Psicoeducación familiar y del paciente para identificar síntomas pródromicos precoces de recaída', 'Regularidad estricta en los ciclos de sueño-vigilia (la privación de sueño desencadena manía de forma inmediata)'],
    nursingCare: ['MANEJO DE LA INTOXICACIÓN POR LITIO (EMERGENCIA MÉDICA): Educar al paciente y reconocer signos precoces de toxicidad por litemia >1.5 mEq/L: temblor grueso de manos, ataxia en la marcha, diarrea profusa, vómitos, lenguaje trabado y confusión; SUSPENDER DE INMEDIATO EL LITIO y dosificar litemia urgente', 'Cuidado con la deshidratación y la sal: explicar que sudar profusamente, las dietas hiposódicas o los diuréticos aumentan la reabsorción renal de litio provocando intoxicación grave', 'Manejo en la sala de agudos de manía: reducir estímulos sensoriales (luz tenue, sin televisión), mantener distancia corporal segura, hablar con frases cortas y serenas sin confrontar sus ideas de grandeza']
  },
  {
    number: 434,
    id: 'diag-434',
    title: 'Esquizofrenia paranoide y otras formas de esquizofrenia',
    cie10: 'F20.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psicótico crónico, heterogéneo y profundamente discapacitante del neurodesarrollo caracterizado por una desconexión de la realidad que altera el pensamiento, la percepción, el afecto y la conducta. Involucra una hiperactividad dopaminérgica mesolímbica (síntomas positivos) e hipoactividad mesocortical (síntomas negativos), con debut típico al final de la adolescencia o adultez temprana.',
    symptoms: ['SÍNTOMAS POSITIVOS (distorsión de la realidad):', '- IDEAS DELIRANTES: creencias falsas fijas e irreductibles a la lógica (delirios paranoides de persecución, de referencia de que la radio/TV habla de él, de control del pensamiento o místicos)', '- ALUCINACIONES: percepciones sensoriales sin objeto real, predominantemente AUDITIVAS ("voces que hablan entre sí en tercera persona, insultan o le dan órdenes imperativas")', '- Lenguaje desorganizado: descarrilamiento del pensamiento, tangencialidad, neologismos o ensalada de palabras', '- Conducta catatónica o gravemente desorganizada', 'SÍNTOMAS NEGATIVOS (déficit de funciones psíquicas):', '- Aplanamiento afectivo (rostro inexpresivo, tono monótono)', '- Alogia (pobreza del lenguaje), abulia y apatía profunda', '- Anhedonia y aislamiento social extremo'],
    redFlags: ['ALUCINACIONES AUDITIVAS DE COMANDO IMPERATIVAS ("voces que ordenan agredir a terceros o tirarse al vacío")', 'Agitación psicomotriz psicótica con riesgo de autoagresión o heteroagresión hacia la familia'],
    criteria: 'Criterios DSM-5: al menos 2 síntomas principales (incluyendo delirios, alucinaciones o habla desorganizada) durante >=6 meses con declive funcional.',
    labTests: ['Examen toxicológico en orina de sustancias de abuso (cocaína, cannabis, anfetaminas)', 'Hemograma, función tiroidea y prueba de VIH/Sífilis'],
    imaging: ['TC o RM cerebral en primer brote psicótico para descartar patología estructural'],
    differential: ['Psicosis inducida por drogas (marihuana sintética, PBC)', 'Trastorno esquizoafectivo', 'Trastorno bipolar en fase maníaca con psicosis', 'Encefalitis por anticuerpos anti-NMDA'],
    firstLine: [
      { drug: 'Antipsicóticos atípicos o de segunda generación: Risperidona u Olanzapina o Aripiprazol', dose: 'Risperidona 2 a 6 mg/día VO; u Olanzapina 10 a 20 mg/día VO al acostarse; o Aripiprazol 10 a 30 mg/día VO', route: 'VO', freq: 'c/24h nocturna', notes: 'Fármacos de primera línea por su alta eficacia frente a síntomas positivos y menor tasa de síntomas extrapiramidales; monitorizar síndrome metabólico' },
      { drug: 'Antipsicóticos de acción prolongada intramusculares (Depot)', dose: 'Palmitato de Paliperidona IM mensual; o Risperidona IM quincenal', route: 'IM profunda', freq: 'Cada 2 a 4 semanas', notes: 'Tratamiento de elección fundamental para asegurar el cumplimiento terapéutico en pacientes con pobre conciencia de enfermedad' }
    ],
    alternatives: [
      { drug: 'Clozapina oral (el antipsicótico más potente para esquizofrenia refractaria)', dose: 'Inicio 12.5 mg VO aumentando gradualmente hasta 300 a 600 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Indicada ante fracaso de 2 antipsicóticos previos; REQUIERE CONTROL HEMATOLÓGICO SEMANAL OBLIGATORIO por riesgo de agranulocitosis mortal (<1%)' }
    ],
    nonPharm: ['Rehabilitación psicosocial estructurada y terapia ocupacional', 'Entrenamiento en habilidades sociales e inserción comunitaria'],
    nursingCare: ['MANEJO DE PACIENTES CON ALUCINACIONES AUDITIVAS DE COMANDO: Indagar directamente: "¿Qué le dicen exactamente esas voces?", "¿Le están ordenando hacerle daño a usted mismo o a alguien más?"; si la respuesta es afirmativa, mantener vigilancia visual directa 1 a 1', 'NO DISCUTIR NI CONVALIDAR EL DELIRIO: No confrontar agresivamente la idea delirante diciendo "eso no existe, usted está loco", pero tampoco afirmar que es real; adoptar una postura comprensiva: "Entiendo que para usted es aterrador sentir que lo persiguen, pero aquí en el servicio garantizamos que usted está seguro"', 'VIGILANCIA DEL SÍNDROME NEUROLÉPTICO MALIGNO (SNM): Alerta ante hipertermia súbita, rigidez muscular extrema en "tubo de plomo", diaforesis profusa y taquicardia; es una complicación letal que exige retirar antipsicóticos y trasladar a UCI', 'Control metabólico estricto: control mensual de peso, perímetro abdominal, glucosa y perfil lipídico']
  },
  {
    number: 435,
    id: 'diag-435',
    title: 'Trastorno de ansiedad generalizada (TAG)',
    cie10: 'F41.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psiquiátrico crónico caracterizado por una preocupación y ansiedad excesivas, desproporcionadas e invasivas ("expectación aprehensiva") sobre múltiples acontecimientos de la vida diaria (salud propia, familia, trabajo, dinero), presente la mayoría de los días durante al menos 6 meses, que la persona encuentra muy difícil de controlar.',
    symptoms: ['Preocupación constante y catastrófica sobre el futuro ("siente que algo malo va a ocurrir en cualquier momento")', 'Tensión muscular persistente y contracturas crónicas en cuello, hombros y espalda', 'Inquietud psicomotriz o sensación de estar "con los nervios de punta"', 'Fatigabilidad fácil y falta de concentración ("la mente se queda en blanco")', 'Irritabilidad marcada y dificultades para conciliar el sueño (insomnio de conciliación)', 'Síntomas neurovegetativos autonómicos: palpitaciones, opresión torácica, boca seca, sudoración y molestias gastrointestinales'],
    redFlags: ['Abuso de benzodiacepinas o alcohol como forma de automedicación sedante con desarrollo de adicción severa'],
    criteria: 'Criterios DSM-5: ansiedad y preocupación excesiva durante al menos 6 meses con mínimo 3 de los 6 síntomas asociados.',
    labTests: ['Perfil tiroideo (TSH) para descartar hipertiroidismo primario'],
    imaging: ['No indicada'],
    differential: ['Trastorno de pánico', 'Hipertiroidismo', 'Consumo excesivo de cafeína o energizantes', 'Feocromocitoma', 'Arritmias cardíacas'],
    firstLine: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS): Sertralina o Escitalopram', dose: 'Escitalopram 10 a 20 mg/día VO matutino; o Sertralina 50 a 100 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'Tratamiento farmacológico de primera línea a largo plazo; no producen dependencia; tardan 3-4 semanas en surtir efecto completo' },
      { drug: 'Terapia Cognitivo-Conductual (TCC)', dose: '12 a 16 sesiones individuales enfocadas en reestructuración cognitiva y tolerancia a la incertidumbre', route: 'Psicoterapia', freq: 'Semanal', notes: 'Tratamiento no farmacológico más eficaz y duradero' }
    ],
    alternatives: [
      { drug: 'Pregabalina oral', dose: '150 a 300 mg/día VO dividido en 2 o 3 tomas', route: 'VO', freq: 'c/8-12h', notes: 'Acción ansiolítica rápida de primera semana sin riesgo de adicción severa' },
      { drug: 'Benzodiacepinas (Clonazepam o Lorazepam) SOLO a corto plazo', dose: 'Clonazepam 0.5 mg VO cada 12-24h durante un máximo estricto de 2 a 4 semanas', route: 'VO', freq: 'Temporal corto plazo', notes: 'Solo como terapia puente mientras inicia el efecto del ISRS; evitar su uso prolongado' }
    ],
    nonPharm: ['Técnicas de respiración diafragmática y relajación muscular progresiva de Jacobson', 'Eliminación total de cafeína, mate concentrado, gaseosas energizantes y tabaco'],
    nursingCare: ['EDUCACIÓN CONTRA LA DEPENDENCIA A BENZODIACEPINAS: Advertir al paciente que fármacos como Clonazepam, Diazepam o Alprazolam "no curan la raíz de la ansiedad" y causan fuerte adicción, tolerancia y pérdida de memoria si se usan más de un mes', 'Enseñar la técnica de respiración diafragmática 4-7-8 de enfermería para detener los momentos de tensión aguda', 'Fomentar la higiene del sueño y la práctica de actividad física diaria al aire libre']
  },
  {
    number: 436,
    id: 'diag-436',
    title: 'Trastorno de pánico con y sin agorafobia (Ataques de pánico)',
    cie10: 'F41.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno de ansiedad caracterizado por la aparición inesperada y recurrente de crisis o ataques de pánico (oleadas bruscas de miedo intenso o malestar extremo que alcanzan su máxima intensidad en cuestión de minutos), acompañadas de síntomas físicos vegetativos dramáticos y de una preocupación persistente por sufrir nuevas crisis ("ansiedad anticipatoria") o por sus consecuencias (morir, volverse loco).',
    symptoms: ['INICIO BRUSCO DE MIEDO TERRORÍFICO QUE ALCANZA SU PICO EN <10 MINUTOS', 'Palpitaciones taquicárdicas violently aceleradas y dolor o malestar opresivo precordial', 'Sensación de ahogo, asfixia o dificultad para respirar con hiperventilación marcada', 'Sudoración fría, temblores corporales intensos y escalofríos', 'Mareo, inestabilidad para la marcha y sensación de desmayo inminente', 'Parestesias peribucales y en las manos ("hormigueos") y espasmo carpopedal por alcalosis respiratoria secundaria a la hiperventilación', 'DESPERSONALIZACIÓN (sentirse separado de su propio cuerpo) O DESREALIZACIÓN (sensación de que el entorno no es real)', 'MIEDO EXTREMO A MORIR DE UN INFARTO CARDÍACO INMINENTE O "A VOLVERSE LOCO O PERDER EL CONTROL"', 'Agorafobia asociada: miedo a lugares concurridos, transporte público o espacios abiertos de donde sea difícil escapar o recibir ayuda'],
    redFlags: ['Consultas médicas repetidas en salas de urgencias con polifarmacia y descarte reiterado de patología cardiovascular'],
    criteria: 'Criterios DSM-5: crisis de pánico recurrentes e inesperadas con al menos 1 mes de preocupación continua por tener nuevos ataques.',
    labTests: ['ECG de 12 derivaciones y Troponinas séricas en la primera crisis de urgencias para descartar infarto o taquiarritmia', 'Glucemia capilar'],
    imaging: ['No indicada tras descartar organicidad'],
    differential: ['Síndrome coronario agudo', 'Taquicardia paroxística supraventricular (TPSV)', 'Embolia pulmonar', 'Feocromocitoma', 'Crisis tirotóxica'],
    firstLine: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS): Sertralina o Paroxetina', dose: 'Sertralina 25 mg/día por 1 semana, aumentando a 50-100 mg/día VO; o Paroxetina 10 a 40 mg/día VO', route: 'VO matutino', freq: 'c/24h matutino', notes: 'Tratamiento de elección a largo plazo; iniciar con dosis muy bajas ya que en la primera semana pueden aumentar paradójicamente la ansiedad' },
      { drug: 'Terapia Cognitivo-Conductual con exposición interoceptiva', dose: '12 a 16 sesiones estructuradas', route: 'Psicoterapia', freq: 'Semanal', notes: 'Desensibiliza el miedo a las sensaciones corporales normales de taquicardia o mareo' }
    ],
    alternatives: [
      { drug: 'Benzodiacepina oral para la crisis aguda: Alprazolam sublingual o Lorazepam', dose: 'Alprazolam 0.5 mg sublingual o Lorazepam 1 mg sublingual en la crisis aguda', route: 'Sublingual', freq: 'Dosis rescate puntual', notes: 'Corta rápidamente el ataque; no prescribir pautas fijas prolongadas para evitar dependencia severa' }
    ],
    nonPharm: ['Técnica de respiración controlada lenta (inhalar en 4 seg, sostener 2 seg, exhalar en 6 seg) para revertir la hiperventilación y alcalosis respiratoria'],
    nursingCare: ['INTERVENCIÓN TRANQUILIZADORA DE ENFERMERÍA EN LA CRISIS AGUDA:', '1. Permanecer al lado del paciente con calma y voz firme y serena: "Está teniendo un ataque de pánico; no se va a morir de un infarto, su corazón está sano y esto pasará en pocos minutos"', '2. CORREGIR LA HIPERVENTILACIÓN: Guiar la respiración con el propio pecho del profesional; hacer que el paciente respire despacio por la nariz y bote el aire lentamente con los labios fruncidos para eliminar el espasmo carpopedal y los hormigueos', '3. No realizar pruebas analíticas innecesarias repetidas una vez que el ECG es rigurosamente normal para no cronificar la neurosis hipocondríaca']
  },
  {
    number: 437,
    id: 'diag-437',
    title: 'Trastorno obsesivo compulsivo (TOC)',
    cie10: 'F42',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psiquiátrico crónico caracterizado por la presencia de obsesiones (pensamientos, impulsos o imágenes intrusivas, no deseadas y recurrentes que causan ansiedad marcada) y compulsiones (conductas repetitivas o actos mentales que la persona se siente impulsada a realizar para reducir la ansiedad generada por la obsesión o evitar un acontecimiento temido).',
    symptoms: ['OBSESIONES COMUNES:', '- Obsesiones de contaminación y suciedad (miedo atroz a bacterias, gérmenes, químicos o fluidos corporales)', '- Obsesiones de duda patológica y daño ("¿cerré la llave del gas?", "¿atropellé a alguien sin darme cuenta?")', '- Obsesiones de orden, simetría y exactitud milimétrica', '- Pensamientos tabú intrusivos e inaceptables (imágenes agresivas, religiosas blasfemas o sexuales aberrantes que horrorizan al paciente)', 'COMPULSIONES COMUNES:', '- Lavado compulsivo de manos repetido durante horas con jabones agresivos hasta erosionarse la piel', '- Comprobaciones reiteradas (revisar 10 o 20 veces la cerradura de la puerta, los grifos o las hornillas)', '- Rituales de conteo, repetición de palabras en silencio o acumulación innecesaria', 'Incapacidad para controlar los rituales, que consumen más de 1 a 2 horas al día deteriorando la vida personal y laboral'],
    redFlags: ['Dermatitis erosiva severa por lavado de manos con riesgo de sobreinfección bacteriana', 'Depresión mayor reactiva con alto riesgo suicida por el agotamiento psíquico de los rituales'],
    criteria: 'Criterios DSM-5: presencia de obsesiones y/o compulsiones que consumen más de 1 hora al día o causan deterioro clínico significativo.',
    labTests: ['Habitualmente normales'],
    imaging: ['No indicada'],
    differential: ['Trastorno de ansiedad generalizada', 'Esquizofrenia (en el TOC el paciente reconoce que las obsesiones son producto de su propia mente, no delirios impuestos)', 'Tricotilomanía'],
    firstLine: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS) a DOSIS ALTAS', dose: 'Fluoxetina 40 a 80 mg/día VO; o Sertralina 150 a 200 mg/día VO; o Fluvoxamina 150 a 300 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'El TOC requiere dosis de ISRS significativamente más altas que la depresión y periodos de respuesta más largos (8 a 12 semanas)' },
      { drug: 'Terapia Cognitivo-Conductual con EXPOSICIÓN CON PREVENCIÓN DE RESPUESTA (EPR)', dose: 'Sesiones estructuradas de exposición gradual al estímulo obsesivo prohibiendo la ejecución del ritual', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'El tratamiento psicoterapéutico de referencia con mayor tasa de remisión a largo plazo' }
    ],
    alternatives: [
      { drug: 'Clomipramina oral (antidepresivo tricíclico serotoninérgico)', dose: '75 a 250 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Fármaco clásico altamente eficaz de segunda línea; requiere control de ECG por riesgo de arritmias' }
    ],
    nonPharm: ['Apoyo familiar coordinado para no participar en los rituales de comprobación del paciente'],
    nursingCare: ['NO INTERRUMPIR BRUSCAMENTE UN RITUAL EN CURSO: Si el paciente está ejecutando una compulsión (por ejemplo, lavándose las manos), interrumpirlo bruscamente con violencia le generará un ataque de angustia inmanejable; acordar gradualmente la disminución del tiempo de lavado', 'Cuidado de la barrera cutánea en lavadores compulsivos: aplicar cremas emolientes y cicatrizantes para tratar las fisuras cutáneas provocadas por el lavado incesante', 'Explicar a los familiares que reasegurar constantemente ("sí, la puerta está cerrada") solo perpetúa y empeora el TOC a largo plazo']
  },
  {
    number: 438,
    id: 'diag-438',
    title: 'Trastorno de estrés postraumático (TEPT)',
    cie10: 'F43.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno mental reactivo severo que se desarrolla tras la exposición a un acontecimiento traumático extremo o catastrófico (violencia sexual, combate militar, asalto a mano armada, accidentes mortales, terremotos), caracterizado por recuerdos intrusivos vívidos, evitación de estímulos asociados, hiperreactividad neurovegetativa y alteraciones cognitivas negativas.',
    symptoms: ['REEXPERIMENTACIÓN TRAUMÁTICA INTRUSIVA:', '- FLASHBACKS VÍVIDOS: sensación disociativa aterradora de que el trauma está ocurriendo nuevamente en el aquí y el ahora', '- Pesadillas recurrentes sobre el evento traumático que despiertan al paciente sudoroso y aterrorizado', '- Reacciones fisiológicas intensas (taquicardia, temblor) ante señales o fechas que recuerdan el trauma', 'EVITACIÓN ACTIVA Y PERSISTENTE: evitar hablar, pensar, acercarse a lugares, personas u objetos que recuerden el suceso', 'HIPERACTIVACIÓN Y REACTIVIDAD: estado de alerta continuo ("hipervigilancia"), sobresaltos exagerados ante ruidos mínimos, accesos de ira e insomnio', 'ALTERACIONES COGNITIVAS Y DEL ÁNIMO: amnesia disociativa de aspectos clave del trauma, culpa desmedida, frialdad afectiva y desesperanza'],
    redFlags: ['Conductas suicidas o autolesivas frecuentes', 'Trastorno por consumo comórbido de sustancias (alcohol, sedantes) para apagar los recuerdos del trauma'],
    criteria: 'Criterios DSM-5: exposición traumática directa con síntomas en los 4 dominios que persisten por más de 1 mes y causan deterioro.',
    labTests: ['Descarte toxicológico'],
    imaging: ['No indicada'],
    differential: ['Trastorno de estrés agudo (dura menos de 1 mes desde el trauma)', 'Trastorno de adaptación', 'Depresión mayor'],
    firstLine: [
      { drug: 'Psicoterapia focalizada en el trauma: TCC centrada en trauma o EMDR (Desensibilización por Movimientos Oculares)', dose: 'Sesiones semanales estructuradas durante 12 a 16 semanas', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Tratamiento de elección más eficaz para procesar e integrar el recuerdo traumático en la memoria a largo plazo' },
      { drug: 'Sertralina o Paroxetina oral (ISRS)', dose: 'Sertralina 50 a 150 mg/día VO matutino; o Paroxetina 20 a 40 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'Únicos fármacos aprobados por la FDA para el tratamiento farmacológico del TEPT' }
    ],
    alternatives: [
      { drug: 'Prazosina oral (antagonista alfa-1 adrenérgico)', dose: 'Inicio 1 mg VO al acostarse titulando hasta 2 a 6 mg nocturnos', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Tratamiento altamente eficaz para eliminar las pesadillas traumáticas y los terrores nocturnos en el TEPT' }
    ],
    nonPharm: ['Técnicas de anclaje sensorial o "grounding" (regla 5-4-3-2-1) para reconectar con la realidad presente durante un flashback'],
    nursingCare: ['TÉCNICA DE ANCLAJE DE ENFERMERÍA EN UN FLASHBACK: Si el paciente está en pánico reviviendo el trauma: llamarlo por su nombre con voz firme, tranquila y contacto visual seguro: "Está teniendo un recuerdo, pero míreme: hoy es [fecha], usted está en el hospital seguro y la persona que le hizo daño no está aquí"', 'Fomentar la regla 5-4-3-2-1: pedirle que mencione 5 cosas que ve a su alrededor, 4 que pueda tocar, 3 que pueda oír, 2 que pueda oler y 1 que pueda saborear para traer su mente de regreso al presente', 'Crear un entorno seguro en el hospital: evitar portazos ruidosos, iluminar el pasillo por la noche y avisar antes de tocar al paciente']
  },
  {
    number: 439,
    id: 'diag-439',
    title: 'Trastorno límite de la personalidad (TLP / Borderline)',
    cie10: 'F60.3',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno de la personalidad grave y generalizado caracterizado por un patrón persistente de inestabilidad en las relaciones interpersonales, la autoimagen, la regulación de los afectos y una notable impulsividad, que comienza en las primeras etapas de la edad adulta y se asocia frecuentemente a traumas infantiles graves o apego desorganizado.',
    symptoms: ['ESFUERZOS DESESPERADOS POR EVITAR EL DESAMPARO O ABANDONO REAL O IMAGINADO', 'Relaciones interpersonales inestables e intensas marcadas por la ESCISIÓN ("pensamiento en blanco o negro: pasa de la idealización extrema al desprecio absoluto en horas")', 'ALTERACIÓN NOTABLE DE LA AUTOIMAGEN Y DEL SENTIDO DEL YO (se siente vacío por dentro)', 'IMPULSIVIDAD DAÑINA EN AL MENOS DOS ÁREAS: gastos desmedidos, atracones de comida, conducción temeraria, relaciones sexuales promiscuas sin protección o consumo de sustancias', 'CONDUCTAS, INTENTOS O AMENAZAS RECURRENTES DE SUICIDIO O AUTOLESIONES NO SUICIDAS (cortes en antebrazos con cúter, quemaduras con cigarrillos)', 'Inestabilidad afectiva debida a una reactividad extrema del estado de ánimo (disforia intensa, irritabilidad que dura pocas horas)', 'SENTIMIENTOS CRÓNICOS DE VACÍO INTERIOR Y SOLEDAD EXISTENCIAL', 'Ideación paranoide transitoria relacionada con el estrés o síntomas disociativos severos'],
    redFlags: ['INTENTOS SUICIDAS REPETIDOS DE ALTA LETALIDAD EN MOMENTOS DE RUPTURA INTERPERSONAL O RECHAZO', 'Autolesiones que requieren sutura quirúrgica de urgencia'],
    criteria: 'Criterios DSM-5: patrón generalizado de inestabilidad e impulsividad que cumple al menos 5 de los 9 criterios diagnósticos.',
    labTests: ['Examen toxicológico'],
    imaging: ['No indicada'],
    differential: ['Trastorno afectivo bipolar (las oscilaciones en TLP duran horas y son desencadenadas por conflictos interpersonales; en bipolar duran semanas)', 'Trastorno por estrés postraumático complejo'],
    firstLine: [
      { drug: 'Terapia Dialéctica Conductual (DBT / TDC de Marsha Linehan)', dose: 'Terapia individual semanal combinada con entrenamiento grupal de habilidades en regulación emocional, tolerancia al malestar y mindfulness', route: 'Psicoterapia especializada', freq: 'Semanal x 1-2 años', notes: 'Tratamiento de elección de referencia con mayor respaldo empírico para reducir autolesiones y suicidio' },
      { drug: 'Tratamiento farmacológico de apoyo sintomático (no cura el trastorno pero modula crisis)', dose: 'Antipsicóticos atípicos a dosis bajas (Quetiapina 50-150 mg/día o Aripiprazol 5-10 mg/día) o Estabilizadores del ánimo (Lamotrigina)', route: 'VO', freq: 'c/24h', notes: 'Regulan la impulsividad y la desregulación emocional aguda; evitar prescribir frascos grandes de pastillas' }
    ],
    alternatives: [
      { drug: 'Terapia Basada en la Mentalización (MBT) o Psicoterapia Centrada en la Transferencia', dose: 'Sesiones especializadas continuadas', route: 'Psicoterapia', freq: 'Semanal', notes: 'Excelente opción en centros de día especializados' }
    ],
    nonPharm: ['Contrato de seguridad y elaboración de un plan de manejo de crisis por escrito'],
    nursingCare: ['MANEJO DE LÍMITES FIRMES Y CONSISTENCIA EN EL EQUIPO DE SALUD: Evitar la división del personal ("la enfermera de la mañana es un ángel y la de la tarde es un monstruo"); mantener una postura neutral, empática, firme y coherente entre todos los miembros del turno', 'Curación no punitiva ni reforzadora de autolesiones: realizar la curación de los cortes con técnica aséptica adecuada, sin regañar ni juzgar con frialdad al paciente, pero sin prestar una atención sobreprotectora desmedida que refuerce secundariamente la conducta autolesiva', 'Retiro estricto de medicamentos en el domicilio: entregar las dosis de psicofármacos semana a semana bajo supervisión directa de un familiar responsable para evitar sobredosis impulsivas']
  },
  {
    number: 440,
    id: 'diag-440',
    title: 'Insomnio crónico no orgánico',
    cie10: 'F51.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno del sueño más prevalente en la población, caracterizado por una insatisfacción persistente con la cantidad o calidad del sueño debido a dificultades para conciliarlo (insomnio inicial), mantenerlo (despertares frecuentes) o despertar precoz matutino, que ocurre al menos 3 noches por semana durante más de 3 meses a pesar de tener oportunidades adecuadas para dormir, produciendo fatiga y deterioro diurno.',
    symptoms: ['Latencia del sueño prolongada (>30 minutos acostado sin lograr dormir)', 'Despertares nocturnos frecuentes con dificultad extrema para volver a conciliar el sueño', 'Despertar matutino anticipado sin poder retomar el descanso', 'Somnolencia diurna, fatiga crónica, falta de energía y rendimiento laboral disminuido', 'Dificultades de atención, concentración y memoria durante el día', 'Ansiedad anticipatoria por el momento de ir a acostarse ("angustia al ver que el reloj avanza y no duerme")'],
    redFlags: ['Apnea obstructiva del sueño oculta no diagnosticada (ronquidos intensos, pausas respiratorias presenciadas, cefalea matutina)'],
    criteria: 'Criterios ICSD-3: dificultad para dormir >=3 noches por semana durante >=3 meses con disfunción diurna asociada.',
    labTests: ['Polisomnografía nocturna en laboratorio de sueño si hay sospecha de SAHOS o movimientos periódicos de extremidades'],
    imaging: ['No indicada'],
    differential: ['Síndrome de apnea obstructiva del sueño (SAHOS)', 'Síndrome de piernas inquietas', 'Depresión mayor con despertar precoz', 'Trastorno del ritmo circadiano'],
    firstLine: [
      { drug: 'Terapia Cognitivo-Conductual para el Insomnio (TCC-I) (TRATAMIENTO DE PRIMERA LÍNEA ESTÁNDAR)', dose: 'Control de estímulos, restricción del tiempo en cama, reestructuración cognitiva e higiene del sueño durante 6 a 8 semanas', route: 'Psicoterapia conductual', freq: 'Semanal', notes: 'Significativamente superior a los fármacos hipnóticos a largo plazo; carece de efectos adversos y no produce dependencia' }
    ],
    alternatives: [
      { drug: 'Fármacos Z hipnóticos no benzodiacepínicos: Zolpidem o Zopiclona (SOLO A CORTO PLAZO)', dose: 'Zolpidem 5 a 10 mg VO inmediatamente antes de acostarse (máximo por 2 a 4 semanas continuas)', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Hipnótico de rescate agudo; riesgo de tolerancia, amnesia anterógrada y caídas nocturnas en ancianos' },
      { drug: 'Melatonina de liberación prolongada', dose: '2 mg VO 1 a 2 horas antes de dormir', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Opción fisiológica segura en adultos mayores de 55 años' },
      { drug: 'Trazodona oral a dosis bajas', dose: '25 a 50 mg VO antes de acostarse', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Antidepresivo sedante sin riesgo de adicción; excelente en insomnio crónico' }
    ],
    nonPharm: ['PAUTAS DE HIGIENE DEL SUEÑO Y CONTROL DE ESTÍMULOS:', '- Si no logra dormir en 20 minutos: LEVANTARSE DE LA CAMA, ir a otra habitación con luz tenue y leer un libro aburrido; volver a la cama solo cuando sienta sueño', '- LA CAMA ES EXCLUSIVAMENTE PARA DORMIR Y SEXO: terminantemente prohibido ver televisión, usar el teléfono móvil, comer o trabajar en la cama', '- Mantener una HORA FIJA DE DESPERTAR todos los días, incluso fines de semana'],
    nursingCare: ['PROHIBIR EL USO DE PANTALLAS EN LA CAMA: Explicar al paciente que la luz azul emitida por teléfonos móviles, tablets y televisores bloquea la secreción fisiológica de melatonina en la glándula pineal engañando al cerebro como si fuera pleno mediodía', 'Evitar la cafeína tras las 14:00 horas, el alcohol (el alcohol ayuda a dormir inicialmente pero fragmenta el sueño provocando despertares en la madrugada) y las cenas copiosas', 'Retirada escalonada de hipnóticos: colaborar en la pauta de reducción progresiva de benzodiacepinas para evitar el insomnio de rebote']
  },
  {
    number: 441,
    id: 'diag-441',
    title: 'Anorexia nerviosa restrictiva y purgativa',
    cie10: 'F50.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno grave de la conducta alimentaria caracterizado por la restricción deliberada y persistente de la ingesta energética que conduce a un peso corporal significativamente bajo (IMC <18.5 kg/m2 o percentil <5 en niños), un miedo intenso a ganar peso o engordar, y una alteración profunda de la percepción del propio peso o silueta corporal (dismorfofobia). Presenta la tasa de mortalidad más alta entre todos los trastornos psiquiátricos.',
    symptoms: ['RESTRICCIÓN ALIMENTARIA EXTREMA con conteo obsesivo de calorías, rituales con la comida (cortar en trozos minúsculos, desmenuzar) y ocultamiento de alimentos', 'MIEDO PANICOSO E INTRANSIGENTE A ENGORDAR a pesar del estado de emaciación caquéctica', 'DISTORSIÓN PROFUNDA DE LA IMAGEN CORPORAL: el paciente se mira al espejo y se percibe obeso a pesar de una delgadez cadavérica', 'Amenorrea secundaria en mujeres (ausencia de menstruación por hipogonadismo hipogonadotropo)', 'Signos físicos de desnutrición severa: hipotermia (<35 °C), bradicardia extrema (<50 lpm), hipotensión ortostática, piel seca amarillenta por hipercarotenemia, LANUGO (vello fino y suave en espalda y mejillas) y acrocianosis', 'Conductas compensatorias: ejercicio físico extenuante compulsivo, vómitos autoinducidos o abuso de laxantes/diuréticos'],
    redFlags: ['CRITERIOS DE HOSPITALIZACIÓN MÉDICA URGENTE: IMC <13-14 kg/m2, bradicardia <40 lpm, hipotensión <80/50 mmHg, intervalo QTc prolongado (>460 ms), hipopotasemia <3.0 mEq/L con riesgo de parada cardíaca'],
    criteria: 'Criterios DSM-5: bajo peso corporal significativo, miedo a engordar y alteración de la autoimagen corporal.',
    labTests: ['Ionograma sérico urgente (hipopotasemia, hipomagnesemia, hipofosfatemia)', 'ECG de 12 derivaciones (prolongación de QTc, arritmias ventriculares)', 'Hemograma (pancitopenia por hipoplasia medular gelatinosa), amilasa sérica y función renal'],
    imaging: ['Densitometría ósea DEXA (osteopenia u osteoporosis precoz en adolescentes)'],
    differential: ['Bulimia nerviosa (el peso se mantiene normal o ligeramente sobrepeso)', 'Hipertiroidismo', 'Enfermedad celíaca', 'Neoplasia maligna oculta', 'Enfermedad de Addison'],
    firstLine: [
      { drug: 'Renutrición médica gradual y monitorizada (Prevención del Síndrome de Realimentación)', dose: 'Inicio con 1200 a 1500 kcal/día aumentando gradualmente de 200 a 300 kcal cada 2-3 días, suplementando con FÓSFORO y TIAMINA (vitamina B1 100 mg EV/VO antes de alimentar)', route: 'Oral asistida / SNG', freq: 'Continuo', notes: 'Pilar médico absoluto; la realimentación demasiado rápida puede provocar colapso cardíaco por hipofosfatemia aguda fatal' },
      { drug: 'Terapia Familiar Basada en la Evidencia (Maudsley / FBT) o TCC para TCA', dose: 'Sesiones semanales con participación activa de los padres', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Tratamiento psicoterapéutico de elección en adolescentes' }
    ],
    alternatives: [
      { drug: 'Olanzapina oral a dosis bajas', dose: '2.5 a 5 mg/día VO al anochecer', route: 'VO', freq: 'c/24h nocturna', notes: 'Ayuda a reducir la rumiación obsesiva sobre la comida, la ansiedad en las ingestas y favorece la ganancia ponderal' }
    ],
    nonPharm: ['Ingreso en Unidad Especializada de Trastornos de la Conducta Alimentaria (UTCA)', 'Comedor terapéutico supervisado con reposo obligatorio postprandial de 60 minutos'],
    nursingCare: ['PROTOCOLO DE COMEDOR TERAPÉUTICO DE ENFERMERÍA:', '1. SUPERVISIÓN DIRECTA DE LA INGESTA: Acompañar al paciente durante toda la comida con actitud serena y no negociadora; límite de 45 minutos para terminar el plato', '2. AISLAMIENTO DEL BAÑO POSTPRANDIAL: Mantener los baños cerrados con llave o vigilar estrictamente al paciente durante al menos 60 a 90 minutos después de comer para evitar el vómito autoinducido o la eliminación de comida en papeleras', '3. CONTROL DE PESO ESTANDARIZADO: Pesar al paciente en ayunas, después de miccionar, en bata ligera y DE ESPALDAS A LA BÁSCULA para evitar la angustia por el número; revisar la ropa para evitar trampas con monedas o pesas en bolsillos', '4. Alerta de hipofosfatemia: controlar niveles séricos de fósforo, magnesio y potasio los primeros 5-7 días']
  },
  {
    number: 442,
    id: 'diag-442',
    title: 'Bulimia nerviosa',
    cie10: 'F50.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno de la conducta alimentaria caracterizado por episodios recurrentes de atracones (ingesta descontrolada de una cantidad desmesurada de comida en un periodo breve de tiempo), seguidos de conductas compensatorias inapropiadas y repetidas para evitar ganar peso (vómitos provocados, laxantes, ayuno estricto), con una autoevaluación indebidamente influida por el peso corporal, manteniendo habitualmente un peso normal o sobrepeso leve.',
    symptoms: ['EPISODIOS DE ATRACONES VORACES compulsivos a solas con sensación absoluta de pérdida de control', 'CONDUCTAS COMPENSATORIAS PURGATIVAS: vómito autoinducido inmediato tras el atracón, consumo masivo de laxantes o diuréticos', 'Sentimientos abrumadores de culpa, vergüenza, asco y autorreproche tras la purga', 'SIGNOS FÍSICOS PATOGNOMÓNICOS DEL VÓMITO CRÓNICO:', '- SIGNO DE RUSSELL: callosidades, erosiones o cicatrices en el dorso de los nudillos de la mano por el roce repetido con los dientes incisivos al provocarse el vómito', '- HIPERTROFIA BILATERAL DE GLÁNDULAS PARÓTIDAS ("aspecto de cara de ardilla")', '- EROSIÓN SEVERA DEL ESMALTE DENTAL (perimolisis en caras palatinas de los dientes anteriores por el ácido clorhídrico gástrico) con caries rampantes', '- Petequias faciales subconjuntivales por el esfuerzo espiratorio del vómito'],
    redFlags: ['HIPOPOTASEMIA GRAVE (<2.5-3.0 mEq/L) secundaria a vómitos o abuso de laxantes con arritmias cardíacas ventriculares letales', 'Desgarro de la mucosa esofagogástrica con hemorragia digestiva alta masiva (Síndrome de Mallory-Weiss o rotura esofágica de Boerhaave)'],
    criteria: 'Criterios DSM-5: atracones y conductas compensatorias inapropiadas al menos 1 vez por semana durante 3 meses.',
    labTests: ['Electrolitos séricos (hipopotasemia, hipocloremia y alcalosis metabólica típica de los vómitos)', 'Amilasa sérica (hiperamilasemia de origen salival por hipertrofia parotídea)', 'ECG urgente'],
    imaging: ['No indicada'],
    differential: ['Anorexia nerviosa subtipo purgativo (la anorexia cursa con peso significativamente bajo; la bulimia con normopeso)', 'Trastorno por atracón (no hay conductas compensatorias purgativas)', 'Síndrome de Kleine-Levin'],
    firstLine: [
      { drug: 'Fluoxetina oral a dosis altas (único fármaco aprobado por la FDA para bulimia nerviosa)', dose: '60 mg VO al día matutino con el desayuno (iniciar a 20 mg y titular semanalmente)', route: 'VO matutino', freq: 'c/24h matutino', notes: 'Reduce significativamente la frecuencia de atracones y episodios de vómitos, y mejora el estado de ánimo distímico' },
      { drug: 'Terapia Cognitivo-Conductual adaptada para Bulimia (TCC-E de Fairburn)', dose: '20 sesiones individuales estructuradas', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Tratamiento de elección número 1; rompe el círculo vicioso dieta estricta -> atracón -> purga -> culpa' }
    ],
    alternatives: [
      { drug: 'Topiramato oral', dose: '50 a 100 mg/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Reduce el impulso de atracón; vigilar efectos cognitivos' }
    ],
    nonPharm: ['Diario de registro alimentario y emocional de atracones/purgas', 'Educación odontológica: enjuagues con agua y bicarbonato tras el vómito (no cepillarse los dientes inmediatamente para no erosionar más el esmalte descalcificado)'],
    nursingCare: ['CORRECCIÓN ELECTROLÍTICA URGENTE: Administrar cloruro de potasio (KCl) endovenoso en bomba de infusión continua con monitoreo cardíaco continuo si el potasio sérico es <3.0 mEq/L', 'Educación sobre salud dental de enfermería: explicar que tras vomitar NO DEBEN CEPILLARSE LOS DIENTES con pasta porque el ácido del estómago debilita el esmalte y el cepillado arranca la capa protectora; enjuagarse la boca con agua o colutorio alcalino con flúor', 'Establecer una rutina regular de 5 comidas diarias estructuradas sin saltarse ninguna para evitar el hambre voraz que detona los atracones']
  },
  {
    number: 443,
    id: 'diag-443',
    title: 'Trastorno por déficit de atención e hiperactividad (TDAH)',
    cie10: 'F90.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno del neurodesarrollo caracterizado por un patrón persistente de inatención y/o hiperactividad-impulsividad que interfiere significativamente con el funcionamiento escolar, laboral o social, presente antes de los 12 años de edad y manifestado en al menos dos ámbitos diferentes de la vida (hogar y escuela/trabajo). Se clasifica en presentación combinada, predominio inatento o predominio hiperactivo-impulsivo.',
    symptoms: ['SÍNTOMAS DE INATENCIÓN:', '- Dificultad marcada para mantener la atención sostenida en tareas o juegos', '- Parece no escuchar cuando se le habla directamente ("está en las nubes")', '- No sigue instrucciones ni finaliza tareas escolares o deberes por distracción', '- Dificultad para organizar tareas y actividades; desorganización crónica del material escolar', '- Pierde constantemente objetos necesarios (útiles escolares, llaves, libros)', '- Olvidos frecuentes en las actividades cotidianas', 'SÍNTOMAS DE HIPERACTIVIDAD E IMPULSIVIDAD:', '- Movimiento continuo de manos o pies; se retuerce constantemente en el asiento', '- Se levanta de la silla en situaciones donde se espera que permanezca sentado', '- Corre o trepa en situaciones inapropiadas (en adultos: sensación subjetiva de inquietud interna motora)', '- Habla en exceso, responde antes de que se termine la pregunta e interrumpe conversaciones ajenas', '- Incapacidad para esperar su turno en filas o juegos'],
    redFlags: ['Fracaso escolar masivo, rechazo de compañeros y baja autoestima severa con comorbilidad de trastorno negativista desafiante o depresión infantil'],
    criteria: 'Criterios DSM-5: al menos 6 síntomas de inatención y/o 6 de hiperactividad-impulsividad presentes por >=6 meses antes de los 12 años en >=2 entornos.',
    labTests: ['Evaluación neuropsicológica con pruebas estandarizadas (Conners, EDAH, WISC)', 'ECG basal antes de iniciar psicoestimulantes'],
    imaging: ['No indicada'],
    differential: ['Trastornos del aprendizaje (dislexia, discalculia)', 'Trastornos de ansiedad infantil', 'Ausencias epilépticas (pequeño mal)', 'Hipoacusia no diagnosticada'],
    firstLine: [
      { drug: 'Metilfenidato oral de liberación prolongada (fármaco psicoestimulante de primera línea)', dose: 'Inicio 18 mg/día VO matutino con el desayuno, titulando según respuesta clínica hasta 36-54 mg/día VO', route: 'VO matutino', freq: 'c/24h matutino', notes: 'Aumenta los niveles de dopamina y noradrenalina en la corteza prefrontal; mejora la atención y el autocontrol en >75% de los niños; monitorizar peso, talla y presión arterial' },
      { drug: 'Intervención conductual en el aula y entrenamiento a padres (Parent Training)', dose: 'Pautas de modificación de conducta basadas en refuerzo positivo inmediato y estructuración de rutinas', route: 'Intervención psicopedagógica', freq: 'Continuo', notes: 'Pilar no farmacológico obligatorio' }
    ],
    alternatives: [
      { drug: 'Atomoxetina oral (fármaco no estimulante inhibidor selectivo de noradrenalina)', dose: 'Inicio 0.5 mg/kg/día aumentando tras 1-2 semanas a 1.2 mg/kg/día VO matutino', route: 'VO', freq: 'c/24h', notes: 'Elección si hay ansiedad comórbida, tics motores o antecedentes de abuso de sustancias en la familia' },
      { drug: 'Lisdexanfetamina oral', dose: 'Inicio 30 mg/día VO matutino', route: 'VO', freq: 'c/24h matutino', notes: 'Psicoestimulante de larga duración (13-14 horas de cobertura)' }
    ],
    nonPharm: ['Ubicación estratégica en el aula (primeras filas cerca del profesor, lejos de ventanas o puertas)', 'Fraccionar tareas largas en subtareas cortas de 10-15 minutos con pausas activas'],
    nursingCare: ['MONITOREO DEL CRECIMIENTO EN NIÑOS CON METILFENIDATO: Controlar mensualmente el peso y la talla en la curva de crecimiento percentilada; el metilfenidato produce hiporexia matutina y diurna; educar a los padres a administrar el medicamento inmediatamente después de un desayuno abundante y compensar calorías en la cena', 'Control de constantes vitales: medir la presión arterial y la frecuencia cardíaca en cada consulta de control de enfermería', 'Desmitificar los psicoestimulantes: aclarar a los padres que el uso médico regulado de metilfenidato no genera adicción a drogas en el futuro, sino que reduce el riesgo de abuso de sustancias al mejorar la autorregulación']
  },
  {
    number: 444,
    id: 'diag-444',
    title: 'Trastorno del espectro autista (TEA)',
    cie10: 'F84.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno del neurodesarrollo caracterizado por déficits persistentes en la comunicación e interacción social a través de múltiples contextos, junto con patrones de comportamiento, intereses o actividades restrictivos, repetitivos y estereotipados. Sus manifestaciones están presentes desde las primeras etapas del desarrollo (12 a 24 meses) y se expresan con una amplia gradación de gravedad y necesidad de apoyo.',
    symptoms: ['ALTERACIONES EN LA COMUNICACIÓN E INTERACCIÓN SOCIAL:', '- Dificultades en la reciprocidad socioemocional (no comparte intereses o emociones)', '- Ausencia o escasez de contacto visual directo al comunicarse', '- Pobreza o ausencia de atención conjunta y de respuesta a su nombre hacia los 12 meses', '- Dificultad para comprender la comunicación no verbal, el sarcasmo, las metáforas o las bromas', '- Dificultades para hacer amigos o jugar de forma cooperativa con pares', 'PATRONES RESTRICTIVOS Y REPETITIVOS DE COMPORTAMIENTO:', '- Movimientos motores estereotipados o repetitivos (aleteo de manos o "flapping", balanceo del tronco, caminar de puntillas, girar sobre sí mismo)', '- Inflexibilidad y adherencia excesiva a rutinas fijas con ANGUSTIA EXTREMA ANTE CAMBIOS MÍNIMOS del entorno', '- Intereses altamente absorbentes, restringidos y específicos (fijación con partes de objetos como ruedas giratorias, horarios de trenes, dinosaurios)', '- Hiper o hiporreactividad sensorial a estímulos (molestia insoportable por ruidos cotidianos como licuadoras o aspiradoras, texturas de ropa o comida)'],
    redFlags: ['Pérdida o regresión de habilidades del lenguaje o sociales previamente adquiridas a cualquier edad'],
    criteria: 'Criterios DSM-5: déficits persistentes en 3 áreas sociales y al menos 2 tipos de patrones repetitivos con escala de niveles de apoyo (1, 2 o 3).',
    labTests: ['Test de screening M-CHAT-R/F a los 18 y 24 meses en el control de CRED', 'Evaluación multidisciplinaria con ADOS-2 y ADI-R', 'Test de tamizaje auditivo (potenciales evocados auditivos para descartar sordera)'],
    imaging: ['RM cerebral no indicada de rutina salvo si hay micro/macrocefalia o crisis convulsivas'],
    differential: ['Trastorno del desarrollo del lenguaje (déficit selectivo del habla sin rigidez conductual)', 'Discapacidad intelectual aislada', 'Trastorno de ansiedad social'],
    firstLine: [
      { drug: 'Intervención temprana conductual y del neurodesarrollo intensiva (Modelo Denver / ABA / TEACCH)', dose: 'Intervenciones tempranas interdisciplinarias estructuradas (terapia del lenguaje, terapia ocupacional con integración sensorial)', route: 'Terapia especializada', freq: 'Intensivo continuado', notes: 'El pilar central de tratamiento; maximiza la neuroplasticidad y autonomía funcional en los primeros años de vida' }
    ],
    alternatives: [
      { drug: 'Risperidona o Aripiprazol oral (SOLO para irritabilidad extrema, agresión o autolesiones graves)', dose: 'Risperidona 0.25 a 1.5 mg/día VO; o Aripiprazol 2 a 5 mg/día VO', route: 'VO', freq: 'c/24h nocturna', notes: 'Únicos fármacos aprobados por la FDA para el manejo de la irritabilidad grave y agresividad en TEA; no corrigen los déficits nucleares del autismo' }
    ],
    nonPharm: ['Anticipación visual de cambios mediante pictogramas o agendas visuales', 'Adaptación del entorno sensorial (protectores auditivos o auriculares con cancelación de ruido ante sobrecarga auditiva)'],
    nursingCare: ['DETECCIÓN PRECOZ EN EL CONTROL DE CRED DE ENFERMERÍA: Aplicar la prueba M-CHAT a los 18 meses; signos de alerta roja: si el niño no balbucea a los 12 meses, no señala objetos con el dedo a los 14 meses, no responde cuando lo llaman por su nombre o pierde palabras aprendidas', 'Estrategias de comunicación en el centro de salud: hablar con lenguaje claro, literal, sin dobles sentidos ni metáforas; dar tiempo al paciente para procesar la información antes de esperar una respuesta', 'Atención amigable en vacunación o procedimientos: evitar luces fluorescentes titilantes, ruidos estridentes y permitir que el menor sostenga un objeto de apego o juguete sensorial']
  },
  {
    number: 445,
    id: 'diag-445',
    title: 'Síndrome de abstinencia alcohólica y Delirium tremens',
    cie10: 'F10.2 / F10.4',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Conjunto de síntomas potencialmente mortales que se desarrollan tras el cese o la reducción drástica del consumo prolongado y masivo de alcohol, caracterizado por una hiperactividad noradrenérgica y autonómica aguda por desensibilización de receptores GABA e hiperexcitación de receptores NMDA glutamatérgicos. El Delirium Tremens (DT) es su forma más grave y letal (aparece a las 48-72 horas).',
    symptoms: ['FASE PRECOZ DE ABSTINENCIA (6 a 24 horas):', '- Temblor distal fino de manos ("temblor alcohólico matutino"), sudoración profusa y náuseas/vómitos', '- Taquicardia sinusal, hipertensión arterial, hiperreflexia e inquietud psicomotriz', '- Insomnio de fragmentación y pesadillas vívidas', 'CRISIS CONVULSIVAS POR ABSTINENCIA (12 a 48 horas): crisis tónico-clónicas generalizadas autolimitadas ("rum fits")', 'ALUCINOSIS ALCOHÓLICA (12 a 24 horas): alucinaciones auditivas o visuales amenazantes con nivel de conciencia lúcido y orientado', 'DELIRIUM TREMENS (48 a 72-96 horas - EMERGENCIA VITAL):', '- CONFUSIÓN MENTAL PROFUNDA Y DESORIENTACIÓN TEMPOROESPACIAL', '- ALUCINACIONES VISUALES O TÁCTILES ZOÓPSICAS ("visión de animales pequeños, cucarachas, serpientes o arañas trepando por su cuerpo")', '- AGITACIÓN PSICOMOTRIZ EXTREMA y temblor grosero incontrolable', '- TORMENTA AUTONÓMICA: fiebre alta (>38.5 °C), diaforesis empapante, taquicardia severa (>120 lpm), deshidratación extrema e hipotensión con shock cardiovascular'],
    redFlags: ['DELIRIUM TREMENS INSTAURADO: MORTALIDAD DE HASTA EL 15-20% sin tratamiento oportuno por arritmias ventriculares, shock circulatorio o broncoaspiración'],
    criteria: 'Escala CIWA-Ar para graduar severidad y titulación de tratamiento en paciente con historia de abstinencia alcohólica.',
    labTests: ['Electrolitos séricos (hipopotasemia, hipomagnesemia, hipofosfatemia severas)', 'Glucosa, CPK, perfil hepático completo, coagulación y hemograma', 'Gasometría arterial (descarte de cetoacidosis alcohólica)'],
    imaging: ['TC craneal (descarte de hematoma subdural secundario a traumatismos craneales en estado de ebriedad)'],
    differential: ['Encefalopatía de Wernicke (tríada: ataxia, oftalmoplejía y confusión)', 'Sepsis grave', 'Meningitis bacteriana', 'Hematoma subdural agudo'],
    firstLine: [
      { drug: 'TIAMINA ENDOVENOSA (Vitamina B1) OBLIGATORIA ANTES DE CUALQUIER SOLUCIÓN GLUCOSADA', dose: 'Tiamina 100 a 200 mg EV lento antes de administrar sueros con glucosa o dextrosa', route: 'EV', freq: 'c/24h x 3-5 días', notes: 'PREVIENE LA ENCEFALOPATÍA DE WERNICKE MORTAL; la glucosa administrada sin tiamina agota las reservas de tiamina precipitando daño talámico irreversible' },
      { drug: 'Benzodiacepinas EV según pauta guiada por escala CIWA-Ar: Diazepam o Lorazepam', dose: 'Diazepam 10 a 20 mg EV lento cada 15 a 30 minutos hasta alcanzar sedación tranquila pero despierto (o Lorazepam 2 a 4 mg EV si hay hepatopatía grave o cirrosis)', route: 'EV lento', freq: 'Titulado según CIWA-Ar', notes: 'Remplaza la pérdida gabaérgica del alcohol y frena la tormenta simpática; fármaco de referencia indiscutible' }
    ],
    alternatives: [
      { drug: 'Sedación en UCI con Propofol o Dexmedetomidina en infusión', dose: 'Propofol en infusión continua con intubación orotraqueal', route: 'EV en UCI', freq: 'Continuo', notes: 'En delirium tremens refractario a dosis masivas de benzodiacepinas' }
    ],
    nonPharm: ['Hidratación endovenosa enérgica con cristaloides (reponer pérdidas por sudoración profusa)', 'Ambiente tranquilo, bien iluminado, sin ruidos agresivos y contención mecánica protocolizada si hay agitación extrema'],
    nursingCare: ['REGLA DE ORO DE ENFERMERÍA: JAMÁS ADMINISTRAR DEXTROSA O SOLUCIÓN GLUCOSADA SIN ANTES HABER PASADO LA TIAMINA (VITAMINA B1) EV; la tiamina es el cofactor indispensable para la glucólisis cerebral y su omisión causa el síndrome de Wernicke-Korsakoff irreversible', 'Aplicar la escala CIWA-Ar cada 1 a 2 horas para dosificar la benzodiacepina a demanda', 'Vigilar estrechamente la vía aérea y los signos vitales (riesgo de depresión respiratoria tras múltiples bolos de Diazepam)', 'Monitoreo de glucemia capilar y corrección activa del magnesio y potasio séricos para prevenir arritmias']
  },
  {
    number: 446,
    id: 'diag-446',
    title: 'Delirium / Síndrome confusional agudo',
    cie10: 'F05',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno neuropsiquiátrico agudo y fluctuante de la atención y la cognición, secundario a una alteración médica subyacente, intoxicación farmacológica o abstinencia, sumamente frecuente en ancianos hospitalizados. Se caracteriza por un inicio rápido en horas o días, alteración del nivel de conciencia, pensamiento desorganizado y desorientación temporoespacial.',
    symptoms: ['INICIO AGUDO (horas o días) CON CURSO CLÍNICAMENTE FLUCTUANTE A LO LARGO DEL DÍA (empeora notablemente al anochecer y por la noche)', 'DÉFICIT MARCADO DE LA ATENCIÓN: incapacidad para enfocar, sostener o cambiar la atención (no puede deletrear la palabra MUNDO al revés ni restar de 7 en 7)', 'DESORIENTACIÓN TEMPOROESPACIAL: no sabe la fecha, año ni el lugar donde se encuentra', 'Pensamiento desorganizado e incoherente, con habla errática o confusa', 'Alteración del ciclo sueño-vigilia con inversión del ritmo circadiano', 'Subtipo Hiperactivo (25%): agitación psicomotriz, arrancamiento de vías y sondas, alucinaciones visuales y suspicacia', 'Subtipo Hipoactivo (el más frecuente 50% y el más peligroso por subdiagnóstico): somnolencia, letargo, lentitud psicomotora y mutismo', 'Subtipo Mixto (25%): oscilaciones impredecibles entre ambos'],
    redFlags: ['Subtipo hipoactivo confundido con depresión o "agotamiento normal" con omisión de la sepsis o hipoxia subyacente mortal', 'Arrancamiento traumático de catéteres venosos centrales o sondas vesicales con hemorragia'],
    criteria: 'Método de Evaluación de la Confusión (CAM - Confusion Assessment Method): 1. Inicio agudo y curso fluctuante + 2. Inatención + 3. Pensamiento desorganizado o 4. Nivel de conciencia alterado.',
    labTests: ['Examen completo de orina y urocultivo (la ITU es el detonante más frecuente en el anciano)', 'Hemograma completo, electrolitos (sodio), urea, creatinina, glucosa y gasometría/pulsioximetría'],
    imaging: ['Radiografía de tórax (descarte de neumonía aspirativa silente)', 'TC craneal si hay signos neurológicos focales o caída reciente'],
    differential: ['Demencia primaria preexistente (el delirium es agudo y fluctuante en horas; la demencia es crónica y progresiva en años)', 'Psicosis esquizofrénica aguda', 'Ictus isquémico'],
    firstLine: [
      { drug: 'IDENTIFICACIÓN Y TRATAMIENTO URGENTE DE LA CAUSA MÉDICA SUBYACENTE', dose: 'Tratar la infección (antibióticos para ITU o neumonía), corregir hiponatremia, deshidratación, dolor agudo o suspender fármacos anticolinérgicos causantes', route: 'Médico integral', freq: 'Continuo', notes: 'Única intervención médica que cura el delirium de forma definitiva' },
      { drug: 'MEDIDAS NO FARMACOLÓGICAS DE REORIENTACIÓN Y AMBIENTALES (TRATAMIENTO DE ELECCIÓN)', dose: 'Reorientación verbal continua, presencia de un familiar, reloj de pared visible, calendario, luz natural de día y silencio nocturno, uso de sus gafas y audífonos', route: 'Intervención ambiental', freq: 'Continuo', notes: 'Resuelve el 40-50% de los episodios de delirium sin necesidad de ningún fármaco sedante' }
    ],
    alternatives: [
      { drug: 'Haloperidol a dosis muy bajas (SOLO en agitación severa o riesgo inminente para la vida)', dose: '0.5 a 1.0 mg VO/IM cada 8-12 horas a demanda (máximo 2 a 3 mg/día)', route: 'VO / IM', freq: 'Según agitación extrema', notes: 'Usar por el menor tiempo posible (24-48h); monitorizar intervalo QTc; evitar en Parkinson o Demencia por cuerpos de Lewy' },
      { drug: 'Quetiapina oral a dosis bajas', dose: '12.5 a 25 mg VO al acostarse', route: 'VO', freq: 'c/24h nocturna', notes: 'Opción de elección en pacientes con Parkinson o Demencia por cuerpos de Lewy' }
    ],
    nonPharm: ['Retirada precoz de sondas vesicales y vías endovenosas innecesarias', 'Movilización precoz fuera de la cama y deambulación asistida'],
    nursingCare: ['PROTOCOLO DE ENFERMERÍA DE PREVENCIÓN Y MANEJO DEL DELIRIUM:', '1. REORIENTACIÓN AMBIENTAL CONTINUA: Colocar un reloj de pared grande y un calendario a la vista; recordar al paciente en cada toma de constantes: "Buenos días don [Nombre], hoy es [día], usted está en el hospital recuperándose y yo soy su enfermera"', '2. DEVOLVER SUS PRÓTESIS SENSORIALES: Asegurar que el paciente tenga puestas de inmediato sus GAFAS graduadas y sus AUDÍFONOS con pilas cargadas; el aislamiento sensorial precipita o agrava el cuadro confusional', '3. EVITAR LAS SUJECIONES MECÁNICAS: Las contenciones físicas aumentan la agitación, el terror, las caídas y la mortalidad; priorizar el acompañamiento de un familiar de confianza', '4. Fomentar la hidratación oral y el tránsito intestinal para prevenir la retención urinaria o el fecaloma (causas comunes de delirium)']
  },
  {
    number: 447,
    id: 'diag-447',
    title: 'Trastornos de adaptación (Reacción de adaptación)',
    cie10: 'F43.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno mental reactivo caracterizado por el desarrollo de síntomas emocionales o del comportamiento clínicamente significativos en respuesta a uno o más factores estresantes psicosociales identificables (divorcio, pérdida de empleo, diagnóstico de enfermedad médica grave, mudanza), que se inician en los 3 meses siguientes al estresante y se resuelven en menos de 6 meses tras el cese de dicho factor.',
    symptoms: ['Malestar desproporcionado a la gravedad o intensidad del factor estresante psicosocial', 'Deterioro significativo en las áreas social, laboral o académica', 'Subtipo con estado de ánimo deprimido: tristeza reactiva, llanto fácil, desesperanza', 'Subtipo con ansiedad: nerviosismo continuo, preocupación excesiva, inquietud', 'Subtipo mixto con ansiedad y ánimo deprimido (el más común en atención primaria)', 'Subtipo con alteración de la conducta: rebeldía, faltas al trabajo/estudios, conducción descuidada'],
    redFlags: ['Evolución hacia un Trastorno Depresivo Mayor severo con ideación suicida reactiva'],
    criteria: 'Criterios DSM-5: síntomas emocionales dentro de los 3 meses del factor estresante que no cumplen criterios para otro trastorno y duran <6 meses tras cesar el estresante.',
    labTests: ['Habitualmente normales'],
    imaging: ['No indicada'],
    differential: ['Duelo no patológico normal', 'Trastorno depresivo mayor', 'Trastorno de estrés postraumático'],
    firstLine: [
      { drug: 'Psicoterapia de apoyo o Intervención en crisis breve', dose: 'Sesiones semanales focalizadas en resolución de problemas y fortalecimiento de recursos de afrontamiento', route: 'Psicoterapia', freq: 'Semanal x 4-8 semanas', notes: 'Tratamiento de elección indiscutible; ayuda a procesar la pérdida o cambio vital' }
    ],
    alternatives: [
      { drug: 'Sertralina oral (si los síntomas ansioso-depresivos son severos o incapacitantes)', dose: '50 mg/día VO matutino', route: 'VO', freq: 'c/24h matutino', notes: 'Tratamiento temporal durante el periodo de crisis' },
      { drug: 'Fitoterapia o Melatonina para el insomnio transitorio', dose: 'Melatonina 2 a 3 mg VO antes de dormir', route: 'VO', freq: 'c/24h nocturna', notes: 'Opción no farmacológica que preserva la arquitectura del sueño' }
    ],
    nonPharm: ['Activación de la red de apoyo social (familia, amigos, grupos comunitarios)', 'Práctica regular de ejercicio físico y mantenimiento de rutinas estructuradas'],
    nursingCare: ['ESCUCHA ACTIVA EMPÁTICA Y VALIDACIÓN: Brindar un espacio seguro para que la persona exprese su dolor, miedo o frustración sin juzgarla ni recurrir a frases tópicas invalidantes como "no te preocupes, el tiempo lo cura todo"', 'Exploración del riesgo suicida ante pérdidas catastróficas recientes (quiebra económica, separación violenta)', 'Orientar hacia los servicios de trabajo social del centro de salud o programas de inserción laboral/asistencia social']
  },
  {
    number: 448,
    id: 'diag-448',
    title: 'Trastorno de ansiedad social (Fobia social)',
    cie10: 'F40.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno de ansiedad crónico e incapacitante caracterizado por un miedo o ansiedad intensa y persistente en situaciones sociales en las que la persona puede ser observada, evaluada negativamente, juzgada o humillada por los demás (hablar en público, interactuar con desconocidos, comer delante de otros). Conduce a una evitación activa de situaciones sociales y a un profundo aislamiento.',
    symptoms: ['Miedo intenso e irracional al juicio, la crítica, la desaprobación o la burla de los demás', 'Ansiedad anticipatoria días o semanas antes de un evento social obligatorio', 'SÍNTOMAS VEGETATIVOS SOMÁTICOS EN PÚBLICO:', '- RUBEFACCIÓN FACIAL INTENSA (enrojecimiento de la cara) con miedo terrorífico a que los demás lo noten', '- Temblor de manos o de la voz al hablar en público', '- Sudoración profusa visible, palpitaciones y náuseas', 'Evitación sistemática de reuniones sociales, fiestas, presentaciones orales o llamadas telefónicas', 'Baja autoestima marcada y sensación de ineptitud o torpeza social'],
    redFlags: ['Uso de alcohol como "desinhibidor o anestésico social" antes de eventos, con desarrollo de alcoholismo secundario'],
    criteria: 'Criterios DSM-5: miedo persistente e incapacitante a situaciones sociales de al menos 6 meses de duración.',
    labTests: ['Habitualmente normales'],
    imaging: ['No indicada'],
    differential: ['Timidez normal del temperamento', 'Trastorno de pánico con agorafobia', 'Trastorno de la personalidad por evitación'],
    firstLine: [
      { drug: 'Terapia Cognitivo-Conductual Individual o Grupal (TCC estructurada)', dose: 'Sesiones semanales con reestructuración de pensamientos distorsionados y técnicas de exposición gradual a situaciones sociales temidas', route: 'Psicoterapia especializada', freq: 'Semanal x 16 semanas', notes: 'Tratamiento de primera línea con mayor tasa de eficacia a largo plazo sin recaídas' },
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS): Sertralina o Paroxetina', dose: 'Sertralina 50 a 150 mg/día VO matutino; o Paroxetina 20 a 40 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'Tratamiento farmacológico de primera elección en fobia social generalizada' }
    ],
    alternatives: [
      { drug: 'Betabloqueantes orales: Propranolol (SOLO para fobia social de actuación / hablar en público)', dose: 'Propranolol 10 a 40 mg VO administrado exactamente 60 minutos antes de la presentación pública', route: 'VO puntual', freq: 'Dosis única previa al evento', notes: 'Bloquea eficazmente los síntomas periféricos (temblor de manos, taquicardia, sudoración y voz temblorosa) sin causar sedación cognitiva' }
    ],
    nonPharm: ['Entrenamiento estructurado en habilidades sociales y asertividad'],
    nursingCare: ['Diferenciación crucial con la timidez común: explicar al paciente que la fobia social es una condición médica tratable y no "un defecto del carácter o cobardía"', 'Instrucción sobre el uso de Propranolol: probar una dosis de prueba en casa días antes de la presentación para descartar mareo o hipotensión antes del evento real', 'Fomentar la no evitación: eludir las reuniones sociales alivia la angustia al instante pero refuerza el miedo para el futuro']
  },
  {
    number: 449,
    id: 'diag-449',
    title: 'Trastorno de síntomas somáticos (Trastorno somatomorfo / Hipocondría)',
    cie10: 'F45.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psiquiátrico crónico caracterizado por la presencia de uno o más síntomas físicos angustiantes o perturbadores (dolor crónico difuso, mareo, fatiga, molestias gastrointestinales), acompañados de pensamientos, sentimientos o comportamientos excesivos y desproporcionados relacionados con dichos síntomas, con una preocupación incesante y desmedida sobre la salud.',
    symptoms: ['PRESENCIA REAL DE SÍNTOMAS SOMÁTICOS (el paciente no finge ni simula el dolor; realmente experimenta el malestar)', 'Pensamientos desproporcionados y persistentes sobre la gravedad inminente de sus síntomas ("un dolor de cabeza es seguro un tumor cerebral")', 'Grado muy elevado de ansiedad sobre la salud física', 'Tiempo y energía excesivos consagrados a los síntomas corporales', 'PEREGRINAJE MÉDICO CONTINUO ("doctor shopping"): visitas repetidas a múltiples especialistas solicitando pruebas complementarias complejas', 'Alivio muy fugaz ante resultados normales: la tranquilidad dura pocas horas antes de sospechar que el laboratorio "se equivocó"'],
    redFlags: ['Múltiples intervenciones quirúrgicas o procedimientos invasivos innecesarios ("síndrome de la pared abdominal llena de cicatrices") con riesgo de yatrogenia'],
    criteria: 'Criterios DSM-5: síntomas somáticos perturbadores con pensamientos, ansiedad o conductas excesivas durante al menos 6 meses.',
    labTests: ['Pruebas dirigidas mínimas para descartar patología orgánica razonable; NO repetir análisis normales de forma reiterada'],
    imaging: ['No indicada una vez descartada enfermedad orgánica'],
    differential: ['Trastorno facticio o simulación (en la simulación hay una ganancia secundaria consciente; en el trastorno somatomorfo el sufrimiento es involuntario y real)', 'Esclerosis múltiple incipiente', 'Lupus eritematoso sistémico'],
    firstLine: [
      { drug: 'Citas médicas periódicas programadas y regulares con un MÉDICO DE CABECERA ÚNICO', dose: 'Consultas fijas cada 4 a 6 semanas breves e independientes de que el paciente tenga síntomas nuevos o no', route: 'Manejo en atención primaria', freq: 'Mensual programado', notes: 'Estrategia fundamental para evitar urgencias repetidas y pruebas invasivas yatrogénicas' },
      { drug: 'Terapia Cognitivo-Conductual (TCC)', dose: 'Sesiones semanales orientadas a modificar la hipervigilancia corporal y la catastrofización de las sensaciones normales', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Tratamiento psicoterapéutico de referencia' }
    ],
    alternatives: [
      { drug: 'Inhibidores de la recaptación de serotonina y noradrenalina (IRSN): Duloxetina o Venlafaxina', dose: 'Duloxetina 30 a 60 mg/día VO matutino', route: 'VO', freq: 'c/24h matutino', notes: 'Eficaz si coexiste dolor crónico difuso o fibromialgia' }
    ],
    nonPharm: ['Terapia física regular, yoga, mindfulness y reanudación de actividades laborales'],
    nursingCare: ['VALIDACIÓN DE LA EXPERIENCIA DEL PACIENTE: Jamás decirle "usted no tiene nada, todo está en su cabeza"; validar su sufrimiento diciendo: "Sé que el dolor que siente es muy real e incómodo, pero los exámenes demuestran que su cuerpo está seguro y no corre peligro de muerte"', 'Poner límites sanos a las quejas somáticas: dedicar los primeros 5 minutos de la consulta a revisar los síntomas físicos y el resto a conversar sobre su vida, emociones y actividades cotidianas', 'Desincentivar la búsqueda obsesiva de síntomas en internet ("cibercondría")']
  },
  {
    number: 450,
    id: 'diag-450',
    title: 'Ideación, conducta suicida e intento autolítico',
    cie10: 'R45.8 / X84',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Emergencia médica y psiquiátrica de máxima prioridad que abarca desde la ideación suicida pasiva (deseos de no despertar o morir), ideación activa con planificación estructurada (método, lugar y momento), hasta el intento suicida con potencial letalidad. Es una manifestación de sufrimiento psíquico extremo o "dolor del alma" (psychache) en el marco de trastornos afectivos, psicóticos o crisis vitales.',
    symptoms: ['Verbalizaciones directas o indirectas de muerte ("quisiera dormirme y no despertar jamás", "ya no seré una carga para nadie", "pronto todo se va a solucionar")', 'Conductas de despedida o cierre: redactar cartas de despedida, regalar posesiones valiosas o hacer testamentos apresurados', 'Búsqueda activa de métodos letales (acopio de pastillas, búsqueda en internet de dosis letales, compra de plaguicidas o armas)', 'Calma o serenidad súbita e inexplicable tras un periodo de depresión profunda (alerta: puede indicar que el paciente ya tomó la decisión definitiva y siente alivio)', 'Factores de riesgo mayores: intentos previos (el predictor más potente), desesperanza profunda, aislamiento, sexo masculino (mayor letalidad) y consumo de alcohol'],
    redFlags: ['INTENTO SUICIDA ACTIVO EN CURSO O PLAN ESTRUCTURADO CON MEDIO DISPONIBLE: HOSPITALIZACIÓN INMEDIATA BAJO VIGILANCIA 1 A 1 CONTINUA'],
    criteria: 'Evaluación del riesgo con escala de Columbia (C-SSRS) o escala SAD PERSONS.',
    labTests: ['Examen toxicológico urgente en orina y sangre (paracetamol, salicilatos, benzodiacepinas, antidepresivos, plaguicidas si ingirió sustancias)', 'Gasometría arterial, hemograma y función renal/hepática'],
    imaging: ['TC craneal o radiografías si hubo precipitación, trauma o ahorcamiento frustro'],
    differential: ['Gesto autolesivo no suicida (NSSI en trastorno límite sin intención de muerte)', 'Intoxicación accidental por fármacos'],
    firstLine: [
      { drug: 'Aseguramiento del entorno y Hospitalización psiquiátrica inmediata bajo CÓDIGO SUICIDIO', dose: 'Ingreso en sala de salud mental con ACOMPAÑAMIENTO VISUAL CONTINUO 1 A 1 las 24 horas del día', route: 'Medida médica de seguridad', freq: 'Continuo', notes: 'Prioridad absoluta; no dejar jamás al paciente a solas ni para ir al baño' },
      { drug: 'Carbonato de Litio oral (en trastornos del estado de ánimo)', dose: 'Inicio y titulación a niveles terapéuticos (0.6 a 0.8 mEq/L)', route: 'VO', freq: 'c/24h nocturna', notes: 'Fármaco probado en múltiples ensayos que reduce de forma directa la tasa de suicidio consumado' }
    ],
    alternatives: [
      { drug: 'Ketamina / Esketamina intranasal o EV de acción ultra-rápida', dose: 'Esketamina spray nasal en entorno hospitalario supervisado', route: 'Nasal', freq: 'Protocolo hospitalario', notes: 'Acción antiideación suicida rápida en cuestión de horas en depresión mayor refractaria con alto riesgo suicida' },
      { drug: 'Terapia Electroconvulsiva (TEC) de urgencia', dose: 'Sesiones bajo anestesia en hospital', route: 'Procedimiento hospitalario', freq: 'Según urgencia', notes: 'Tratamiento de rescate ante riesgo inminente de muerte por suicidio o negativa total a alimentarse' }
    ],
    nonPharm: ['Retirada total de cualquier objeto peligroso (cables, cordones de zapatos, cinturones, sábanas largas, cubiertos metálicos, medicamentos)', 'Firma de un Plan de Seguridad estructurado por pasos antes del alta'],
    nursingCare: ['PROTOCOLO DE VIGILANCIA ESTRICTA 1 A 1 DE ENFERMERÍA:', '1. SUPERVISIÓN VISUAL ININTERRUMPIDA: El personal de enfermería o un técnico asignado debe mantener contacto visual permanente con el paciente; bajo ninguna circunstancia se le permite cerrar la puerta del baño o ducharse a solas', '2. HABLAR CLARAMENTE DEL SUICIDIO: Preguntar con serenidad y empatía: "¿Ha pensado en cómo terminar con su vida?", "¿Tiene un plan ya pensado?"; escuchar con respeto sin emitir juicios morales ni sermones religiosos ("piensa en tus hijos")', '3. REVISIÓN RIGUROSA DE LA CAVIDAD BUCAL: Comprobar que el paciente haya deglutido realmente las pastillas orales para evitar el acopio oculto bajo la lengua o entre los carrillos para una sobredosis posterior', '4. Registro del 106 / Línea 113 opción 5 del MINSA (Perú) para atención psicológica de urgencia']
  },
  {
    number: 451,
    id: 'diag-451',
    title: 'Trastorno esquizoafectivo (Tipo bipolar y Tipo depresivo)',
    cie10: 'F25.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psiquiátrico mayor complejo que combina de forma concurrente síntomas psicóticos propios de la esquizofrenia con un episodio completo del estado de ánimo (maníaco, mixto o depresivo mayor), pero con la condición diagnóstica crítica de presentar al menos 2 semanas de delirios o alucinaciones en ausencia de síntomas afectivos mayores.',
    symptoms: ['Coexistencia simultánea de un episodio depresivo o maníaco junto con síntomas de la fase activa de la esquizofrenia', 'PRESENCIA DE DELIRIOS O ALUCINACIONES DURANTE AL MENOS 2 SEMANAS EN AUSENCIA DE SÍNTOMAS AFECTIVOS SIGNIFICATIVOS', 'Tipo bipolar: el cuadro afectivo incluye episodios maníacos o mixtos con grandiosidad, hiperactividad y verborrea junto a síntomas psicóticos', 'Tipo depresivo: el cuadro incluye exclusivamente episodios depresivos mayores con anhedonia profunda y apatía junto a psicosis', 'Deterioro social y laboral importante pero con mejor pronóstico global a largo plazo que la esquizofrenia pura'],
    redFlags: ['Riesgo suicida elevado durante la transición entre la fase maníaca y depresiva'],
    criteria: 'Criterios DSM-5: periodo continuo con episodio afectivo mayor concurrente con criterio A de esquizofrenia, y al menos 2 semanas de psicosis sin síntomas afectivos.',
    labTests: ['Examen toxicológico en orina, función tiroidea y hemograma'],
    imaging: ['TC o RM craneal en el primer episodio'],
    differential: ['Esquizofrenia con síntomas depresivos reactivos', 'Trastorno bipolar con psicosis congruente con el ánimo', 'Psicosis inducida por drogas'],
    firstLine: [
      { drug: 'Antipsicótico atípico: Paliperidona oral o intramuscular (o Risperidona)', dose: 'Paliperidona 6 a 12 mg/día VO matutino (o Palmitato de Paliperidona IM mensual)', route: 'VO / IM depot', freq: 'c/24h o mensual', notes: 'Único antipsicótico aprobado específicamente por la FDA como monoterapia en el trastorno esquizoafectivo' },
      { drug: 'Estabilizador del ánimo o Antidepresivo según el subtipo', dose: 'En tipo bipolar: Carbonato de Litio o Valproato; en tipo depresivo: Sertralina o Escitalopram asociado al antipsicótico', route: 'VO', freq: 'c/24h', notes: 'Control del componente afectivo' }
    ],
    alternatives: [
      { drug: 'Clozapina oral', dose: '200 a 400 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'En casos refractarios con alto riesgo suicida o agresividad' }
    ],
    nonPharm: ['Psicoeducación familiar y terapia cognitivo-conductual para psicosis', 'Programas de rehabilitación y reinserción sociolaboral'],
    nursingCare: ['Monitoreo del cumplimiento farmacológico: supervisar la toma de la medicación combinada (antipsicótico + estabilizador/antidepresivo)', 'Vigilancia de signos precoces de recaída tanto psicótica (aislamiento, suspicacia, soliloquios) como afectiva (insomnio, gastos desmedidos o tristeza)', 'Manejo del síndrome metabólico asociado al uso crónico de antipsicóticos de segunda generación']
  },
  {
    number: 452,
    id: 'diag-452',
    title: 'Trastorno delirante crónico (Paranoia)',
    cie10: 'F22',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno psicótico crónico caracterizado por la presencia de una o más ideas delirantes bien estructuradas, verosímiles y no extrañas, que persisten durante al menos 1 mes, en ausencia de alucinaciones prominentes, desorganización del pensamiento o deterioro notable del funcionamiento diario fuera del impacto directo del tema delirante.',
    symptoms: ['PRESENCIA DE DELIRIOS BIEN SISTEMATIZADOS Y VEROSÍMILES (posibles en la vida real pero falsos en el caso del paciente):', '- Subtipo Celotípico (Síndrome de Otelo): convicción inquebrantable de que el cónyuge le es infiel, buscando "pruebas" absurdas en ropa o sábanas', '- Subtipo Persecutorio (el más frecuente): creencia firme de que es espiado, envenenado, difamado o perseguido por vecinos o mafias', '- Subtipo Erotomaníaco (Síndrome de Clérambault): certeza delirante de que una persona de estatus superior o famoso está enamorado en secreto de él', '- Subtipo Somático: convicción fija de padecer una infestación por parásitos bajo la piel (Síndrome de Ekbom) o emitir un olor nauseabundo', '- Subtipo Megalomaníaco: creencia de poseer un talento extraordinario o haber hecho un gran invento no reconocido', 'CONSERVACIÓN DE LA PERSONALIDAD Y DEL RESTO DE LA CONDUCTA: el paciente parece perfectamente normal, lúcido y coherente hasta que se toca el tema delirante', 'Ausencia de alucinaciones auditivas complejas'],
    redFlags: ['Homicidio o violencia física grave en el subtipo celotípico hacia la pareja o el supuesto amante', 'Demandas judiciales masivas y acusaciones falsas a autoridades en el subtipo persecutorio'],
    criteria: 'Criterios DSM-5: una o más ideas delirantes de al menos 1 mes de duración sin cumplir criterios de esquizofrenia.',
    labTests: ['Examen toxicológico y pruebas de organicidad médica'],
    imaging: ['TC o RM cerebral para descartar tumores en lóbulo frontal o temporal'],
    differential: ['Esquizofrenia paranoide (la esquizofrenia cursa con ideas bizarras absurdas, alucinaciones y deterioro cognitivo)', 'Trastorno de la personalidad paranoide'],
    firstLine: [
      { drug: 'Antipsicóticos de segunda generación: Risperidona o Aripiprazol', dose: 'Risperidona 2 a 4 mg/día VO; o Aripiprazol 10 a 15 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Dificultad principal: el paciente carece de conciencia de enfermedad (anosognosia) y suele rechazar el fármaco creyendo que lo quieren envenenar' },
      { drug: 'Psicoterapia individual con enfoque cognitivo-conductual de alianza terapéutica', dose: 'Sesiones regulares sin confrontar el delirio', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Foco en mejorar el malestar emocional y la adaptación social sin entrar en debate sobre la veracidad del delirio' }
    ],
    alternatives: [
      { drug: 'Pimozida oral (clásica indicación en delirio somático de parasitosis / Ekbom)', dose: '2 a 6 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Monitorizar ECG por prolongación del intervalo QT' }
    ],
    nonPharm: ['Protección de la pareja o terceros amenazados si existe celotipia violenta'],
    nursingCare: ['NO CONFRONTAR DIRECTAMENTE NI DESMENTIR EL DELIRIO: Decirle "usted está inventando que su esposa lo engaña" provocará que el paciente incluya a la enfermera dentro de la conspiración; adoptar una postura neutral: "Entiendo que para usted es una situación muy angustiante y que está sufriendo por esto, pero vamos a trabajar para que pueda descansar y sentirse más tranquilo"', 'Manejo de la desconfianza: permitir que el paciente vea cómo se abre el blíster del medicamento en su presencia para evitar el delirio de envenenamiento', 'Valoración del riesgo de agresión física: si hay amenazas directas hacia el cónyuge en celotipia, alertar inmediatamente a las autoridades y trabajo social']
  },
  {
    number: 453,
    id: 'diag-453',
    title: 'Demencia con cuerpos de Lewy',
    cie10: 'G31.8',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Tercera causa más común de demencia neurodegenerativa (10-15%), caracterizada anatomopatológicamente por la presencia difusa de cuerpos de Lewy (agregados de alfa-sinucleína) en la corteza cerebral y tronco encefálico. Se distingue clínicamente por una tríada de fluctuaciones cognitivas marcadas, alucinaciones visuales vívidas y parkinsonismo motor espontáneo.',
    symptoms: ['FLUCTUACIONES COGNITIVAS Y DEL ESTADO DE ALERTA llamativas de un momento a otro (periodos de lucidez alternados con confusión profunda o somnolencia diurna)', 'ALUCINACIONES VISUALES VÍVIDAS, BIEN FORMADAS Y RECURRENTES (el paciente ve con todo detalle personas desconocidas, niños o animales sentados en la habitación, habitualmente sin generar terror)', 'PARKINSONISMO MOTOR ESPONTÁNEO (rigidez en rueda dentada, bradicinesia y marcha festinante que aparece simultáneamente con la demencia o en menos de 1 año)', 'TRASTORNO DE CONDUCTA DEL SUEÑO REM (actuación violenta de las pesadillas: habla, grita, da puñetazos o patadas mientras duerme)', 'Disautonomía severa (hipotensión ortostática marcada y caídas inexplicadas recurrentes)', 'EXTREMA HIPERSENSIBILIDAD A LOS ANTIPSICÓTICOS TÍPICOS (provocan rigidez letal o coma)'],
    redFlags: ['ADMINISTRACIÓN DE HALOPERIDOL U OTROS NEUROLÉPTICOS TÍPICOS: CONTRAINDICACIÓN ABSOLUTA; puede desencadenar un parkinsonismo irreversible o síndrome neuroléptico maligno mortal en >50% de los pacientes'],
    criteria: 'Criterios de McKeith: demencia más al menos 2 características nucleares (fluctuaciones, alucinaciones visuales, parkinsonismo o trastorno del sueño REM).',
    labTests: ['Descarte de causas metabólicas de demencia'],
    imaging: ['SPECT / PET con DaTscan (muestra denervación dopaminérgica estriatal)', 'Polisomnografía (pérdida de la atonía muscular durante el sueño REM)'],
    differential: ['Enfermedad de Alzheimer pura', 'Demencia en la enfermedad de Parkinson (en el Parkinson la demencia aparece tras muchos años de enfermedad motora: regla del año)', 'Delirium'],
    firstLine: [
      { drug: 'Inhibidores de la Acetilcolinesterasa: Donepezilo o Rivastigmina', dose: 'Donepezilo 5 a 10 mg VO al día; o Rivastigmina en parche transdérmico de 4.6 a 9.5 mg/24h', route: 'VO / Parche transdérmico', freq: 'c/24h', notes: 'Tratamiento de elección; reducen significativamente las alucinaciones visuales y estabilizan las fluctuaciones cognitivas con excelente perfil de seguridad' }
    ],
    alternatives: [
      { drug: 'Quetiapina oral a dosis mínimas (SOLO si las alucinaciones son aterradoras o generan agresión)', dose: '12.5 mg VO al anochecer titulando como máximo a 25-50 mg', route: 'VO', freq: 'c/24h nocturna', notes: 'El único antipsicótico que no suele empeorar gravemente el parkinsonismo; usar con extrema precaución' },
      { drug: 'Melatonina o Clonazepam para el trastorno del sueño REM', dose: 'Melatonina 3 a 5 mg VO nocturna; o Clonazepam 0.5 mg VO nocturno', route: 'VO', freq: 'c/24h nocturna', notes: 'Previene autolesiones y lesiones al cónyuge durante los sueños agitados' }
    ],
    nonPharm: ['Iluminación nocturna adecuada en pasillos para evitar sombras que originen alucinaciones', 'Fisioterapia para la marcha y prevención de caídas'],
    nursingCare: ['ALERTA DE SEGURIDAD CRÍTICA DE ENFERMERÍA: TERMINANTEMENTE PROHIBIDO ADMINISTRAR HALOPERIDOL U OTROS ANTIPSICÓTICOS TÍPICOS EN DEMENCIA POR CUERPOS DE LEWY; colocar un cartel de advertencia en la historia clínica del paciente', 'Manejo de las alucinaciones visuales: si el paciente ve a una persona o niño que no le da miedo, no discutir ni confrontar; tranquilizarlo y encender la luz de la habitación para disipar la ilusión óptica', 'Monitoreo estricto de la presión arterial en decúbito y de pie: riesgo extremo de síncope y fractura de cadera por hipotensión ortostática']
  },
  {
    number: 454,
    id: 'diag-454',
    title: 'Trastorno de despersonalización / desrealización',
    cie10: 'F48.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno disociativo caracterizado por la presencia persistente o recurrente de episodios de despersonalización (sensación de irrealidad, extrañeza o distanciamiento de uno mismo, sintiéndose como un observador externo del propio cuerpo o mente) y/o desrealización (sensación de que el entorno exterior es irreal, brumoso, artificial o como en una película), MANTENIENDO INTACTO EL SENTIDO DE LA REALIDAD (el paciente sabe que es solo una sensación).',
    symptoms: ['DESPERSONALIZACIÓN: sensación de ser un autómata, de estar flotando sobre su propio cuerpo o de que sus brazos y piernas no le pertenecen', 'Anestesia emocional: incapacidad subjetiva para sentir afecto o dolor emocional auténtico', 'DESREALIZACIÓN: las personas conocidas parecen maniquíes o figuras de cartón; el mundo circundante luce plano, bidimensional, oscuro o sin vida ("como detrás de una vitrina de cristal o dentro de un sueño")', 'Sentimiento de "vivir en una burbuja o en una película"', 'PRESERVACIÓN ABSOLUTA DE LA CONCIENCIA DE REALIDAD (sabe perfectamente que el mundo no ha cambiado; esto descarta psicosis delirante)', 'Angustia y pánico reactivo ante la sensación ("¿me estoy volviendo loco?")'],
    redFlags: ['Abuso de cannabis o drogas alucinógenas desencadenante del cuadro', 'Depresión mayor reactiva con alto riesgo suicida por el tormento del aislamiento perceptual'],
    criteria: 'Criterios DSM-5: episodios persistentes de despersonalización/desrealización con sentido de la realidad conservado que generan malestar clínicamente significativo.',
    labTests: ['Examen toxicológico en orina', 'EEG si hay sospecha de epilepsia del lóbulo temporal'],
    imaging: ['RM cerebral para descartar lesiones temporo-parietales'],
    differential: ['Crisis epilépticas focales del lóbulo temporal', 'Trastorno de pánico agudo', 'Esquizofrenia incipiente', 'Consumo de cannabinoides'],
    firstLine: [
      { drug: 'Psicoterapia Cognitivo-Conductual y Técnicas de Regulación Sensorial / Mindfulness', dose: 'Sesiones semanales orientadas a desensibilizar la obsesión por los síntomas perceptuales y anclaje al presente', route: 'Psicoterapia especializada', freq: 'Semanal', notes: 'Tratamiento de elección fundamental; reduce la hipervigilancia interna' },
      { drug: 'Lamotrigina oral (modulador glutamatérgico)', dose: 'Inicio 25 mg/día VO aumentando lentamente cada 2 semanas hasta 100-200 mg/día', route: 'VO', freq: 'c/24h', notes: 'Bloquea la liberación excesiva de glutamato; el fármaco con mayor evidencia en despersonalización crónica' }
    ],
    alternatives: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS)', dose: 'Sertralina 50 a 100 mg/día VO', route: 'VO', freq: 'c/24h matutino', notes: 'Alivian la ansiedad y depresión comórbidas secundarias' }
    ],
    nonPharm: ['Técnicas de anclaje físico sensorial intenso (lavarse la cara con agua con hielo, oler aceites esenciales cítricos, sostener un objeto frío)'],
    nursingCare: ['TRANQUILIZACIÓN DE ENFERMERÍA CONTRA EL MIEDO A LA PSICOSIS: Explicar al paciente que la despersonalización es un mecanismo de defensa cerebral de desconexión ante un estrés excesivo y que "NO SE ESTÁ VOLVIENDO LOCO NI DESARROLLANDO ESQUIZOFRENIA" (el hecho de que se preocupe demuestra que mantiene el juicio de realidad intacto)', 'Enseñar ejercicios de anclaje propioceptivo: apretar fuertemente los pies descalzos contra el suelo frío y describir objetos reales con tacto para frenar la sensación de flotar', 'Prohibir taxativamente el consumo de marihuana o derivados del cannabis que reactivan los episodios']
  },
  {
    number: 455,
    id: 'diag-455',
    title: 'Síndrome de Burnout (Síndrome de desgaste ocupacional)',
    cie10: 'QD85',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Síndrome conceptualizado en la CIE-11 como un fenómeno ocupacional (no clasificado como enfermedad médica médica pura) derivado del estrés crónico en el lugar de trabajo que no ha sido gestionado con éxito. Muy prevalente en profesionales de la salud (enfermeros, médicos). Se caracteriza por tres dimensiones: agotamiento emocional extremo, despersonalización/cinismo hacia los pacientes y baja realización personal.',
    symptoms: ['AGOTAMIENTO EMOCIONAL PROFUNDO: sensación de vaciamiento de recursos afectivos, fatiga crónica inagotable que no mejora con el descanso de fin de semana', 'DESPERSONALIZACIÓN Y CINISMO: desarrollo de actitudes frías, distantes, insensibles o cínicas hacia los pacientes, usuarios o compañeros de trabajo ("tratar al enfermo como un objeto o número de cama")', 'SENSACIÓN DE INEFICACIA Y FALTA DE REALIZACIÓN PERSONAL: sentimiento de incompetencia profesional, pérdida de vocación y futilidad del esfuerzo laboral', 'Síntomas físicos psicosomáticos: cefaleas tensionales frecuentes, gastritis, contracturas musculares cervicales e insomnio', 'Absentismo laboral reiterado, errores en la práctica profesional y deseo constante de abandonar el empleo'],
    redFlags: ['Transición hacia un Trastorno Depresivo Mayor severo con ideación suicida', 'Uso nocivo de ansiolíticos o alcohol para tolerar las jornadas laborales'],
    criteria: 'Cuestionario de Maslach Burnout Inventory (MBI) con puntuaciones altas en agotamiento y cinismo y bajas en realización personal.',
    labTests: ['Habitualmente normales; descartar anemia o hipotiroidismo'],
    imaging: ['No indicada'],
    differential: ['Trastorno depresivo mayor', 'Trastorno de adaptación laboral', 'Síndrome de fatiga crónica'],
    firstLine: [
      { drug: 'Intervención organizativa y ergonomía laboral institucional', dose: 'Redistribución de la carga de trabajo, rotación de turnos extenuantes, pausas laborales obligatorias y soporte institucional', route: 'Intervención de gestión en salud', freq: 'Continuo', notes: 'El burnout es un problema del entorno de trabajo, no un fallo individual; las medidas individuales sin cambios organizativos fracasan' },
      { drug: 'Psicoterapia Cognitivo-Conductual y Manejo del Estrés (Mindfulness / MBSR)', dose: 'Talleres estructurados de resiliencia y autocuidado', route: 'Psicoterapia', freq: 'Semanal', notes: 'Desarrolla límites saludables entre el trabajo y la vida personal' }
    ],
    alternatives: [
      { drug: 'Tratamiento farmacológico de apoyo sintomático (si coexiste depresión o insomnio severo)', dose: 'ISRS o Melatonina según criterio psiquiátrico', route: 'VO', freq: 'Diario', notes: 'No trata la causa ocupacional pero estabiliza al profesional' }
    ],
    nonPharm: ['Descanso laboral o baja médica temporal estructurada para descompresión emocional', 'Práctica de ejercicio físico regular y fomento de actividades placenteras desconectadas del ámbito de la salud'],
    nursingCare: ['AUTOCUIDADO EN EL EQUIPO DE ENFERMERÍA: Fomentar el apoyo mutuo ("debriefing" emocional tras turnos críticos o fallecimientos traumáticos de pacientes)', 'Enseñar la importancia de "desconectar": apagar teléfonos y grupos de WhatsApp laborales fuera del horario de trabajo', 'Validación del malestar sin culpa: erradicar la cultura del sacrificio ciego; un profesional de la salud agotado no puede brindar cuidados seguros a sus pacientes']
  },
  {
    number: 456,
    id: 'diag-456',
    title: 'Glaucoma primario de ángulo abierto (GPAA)',
    cie10: 'H40.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Neuropatía óptica crónica, progresiva y bilateral (frecuentemente asimétrica) caracterizada por pérdida acelerada de células ganglionares de la retina y sus axones, excavación patológica del nervio óptico y defectos típicos del campo visual, mediada primariamente por un aumento de la resistencia al drenaje del humor acuoso en la malla trabecular con elevación de la Presión Intraocular (PIO >21 mmHg). Conocido como "el ladrón silencioso de la vista".',
    symptoms: ['TOTALMENTE ASINTOMÁTICO DURANTE AÑOS O DÉCADAS en fases tempranas e intermedias', 'Ausencia total de dolor ocular, enrojecimiento o molestias externas', 'PÉRDIDA PROGRESIVA Y SILENCIOSA DEL CAMPO VISUAL PERIFÉRICO (visión en túnel o en escopeta)', 'Dificultad para adaptarse a la oscuridad o tropiezos frecuentes con muebles y marcos de puertas', 'Pérdida de la agudeza visual central únicamente en fases terminales de la enfermedad'],
    redFlags: ['Excavación papilar >0.7-0.8 con atrofia del anillo neurorretiniano y PIO >30 mmHg'],
    criteria: 'Tríada diagnóstica: PIO elevada, aumento de la excavación papilar (>0.5 o asimetría >0.2) y defectos campimétricos típicos (escotomas arcuatos de Bjerrum).',
    labTests: ['Tonometría de aplanación de Goldmann (estándar de oro para medir PIO; normal 10-21 mmHg)', 'Paquimetría corneal (grosor corneal central para corregir la lectura de la PIO)', 'Gonioscopia (confirma ángulo iridocorneal abierto y accesible)'],
    imaging: ['Tomografía de Coherencia Óptica (OCT) de nervio óptico y capa de fibras nerviosas de la retina', 'Campimetría computarizada estandarizada (Campo Visual 24-2 / 30-2)'],
    differential: ['Glaucoma normotensional', 'Glaucoma secundario (pseudoexfoliativo, pigmentario, corticodependiente)', 'Neuropatía óptica isquémica'],
    firstLine: [
      { drug: 'Análogos de las Prostaglandinas tópicos: Latanoprost al 0.005% o Bimatoprost colirio (TRATAMIENTO MÉDICO DE ELECCIÓN)', dose: 'Instilar 1 gota en el fondo de saco conjuntival del ojo afectado estrictamente una vez al día por la noche antes de acostarse', route: 'Oftálmica tópica', freq: 'c/24h nocturna', notes: 'El grupo farmacológico más potente; reduce la PIO en un 25-35% aumentando el drenaje uveoescleral; vigilar oscurecimiento del iris e hiperemia conjuntival' },
      { drug: 'Trabeculoplastia Láser Selectiva (SLT)', dose: 'Tratamiento con láser en la malla trabecular en consultorio', route: 'Procedimiento láser', freq: 'Procedimiento inicial', notes: 'Alternativa de primera línea equivalente o superior a las gotas según ensayo LiGHT; mejora el drenaje sin efectos secundarios de fármacos' }
    ],
    alternatives: [
      { drug: 'Betabloqueantes tópicos: Timolol al 0.5% colirio', dose: 'Instilar 1 gota cada 12 horas', route: 'Oftálmica tópica', freq: 'c/12h', notes: 'Disminuye la producción de humor acuoso; CONTRAINDICADO en asma, EPOC y bradicardia/bloqueo AV' },
      { drug: 'Cirugía de Glaucoma: Trabeculectomía o Dispositivos de Drenaje (válvulas)', dose: 'Procedimiento quirúrgico fistulizante', route: 'Quirúrgico', freq: 'Cirugía de filtración', notes: 'En progresión de daño campimétrico a pesar de tratamiento médico pleno' }
    ],
    nonPharm: ['Tamizaje oftalmológico anual preventivo en mayores de 40 años o con antecedentes familiares de glaucoma'],
    nursingCare: ['TÉCNICA DE OCLUSIÓN DEL PUNTO LAGRIMAL DE ENFERMERÍA: Al instilar las gotas oftálmicas (especialmente Timolol o Latanoprost), PRESIONAR CON EL DEDO ÍNDICE EL ÁNGULO INTERNO DEL OJO (punto lagrimal) DURANTE 2 MINUTOS; esto evita que el fármaco pase a la mucosa nasal y circulación sistémica reduciendo drásticamente los efectos adversos cardíacos y pulmonares', 'Explicar que las gotas DEBEN APLICARSE TODOS LOS DÍAS DE FORMA INDEFINIDA, aunque el paciente no sienta ninguna molestia, para evitar la ceguera silenciosa', 'Espaciar al menos 5 a 10 minutos entre diferentes colirios si usa dos o más medicamentos']
  },
  {
    number: 457,
    id: 'diag-457',
    title: 'Glaucoma agudo de ángulo cerrado (Crisis de cierre angular agudo)',
    cie10: 'H40.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Emergencia oftalmológica hiperaguda caracterizada por el bloqueo súbito y completo de la malla trabecular por la aposición del iris periférico, impidiendo el drenaje del humor acuoso y provocando una elevación masiva y catastrófica de la Presión Intraocular (a menudo >50-70 mmHg). Si no se trata en horas, causa ceguera irreversible por atrofia isquémica del nervio óptico.',
    symptoms: ['DOLOR OCULAR ATROZ, AGUDO Y PROFUNDO que se irradia a la órbita, hemicráneo y frente', 'DISMINUCIÓN BRUSCA Y MARCADA DE LA AGUDEZA VISUAL en el ojo afectado (visión borrosa severa)', 'VISIÓN DE HALOS DE COLORES ("en arcoíris") alrededor de las luces', 'SÍNTOMAS VEGETATIVOS REFLEJOS INTENSOS: náuseas, vómitos explosivos y dolor abdominal intenso (que confunden con un abdomen agudo)', 'SIGNOS EXPLORATORIOS PATOGNOMÓNICOS:', '- OJO ROJO CON INYECCIÓN CILIAR O PERIQUERÁTICA PROFUNDA marcada', '- CÓRNEA OPACA, APAGADA Y EDEMATOSA ("aspecto de vidrio esmerilado")', '- PUPILA EN MIDRIASIS MEDIA ARREACTIVA O ARREFLECTIVA A LA LUZ', '- CÁMARA ANTERIOR ESTRECHA O PLANA', '- OJO DE DUREZA PÉTREA A LA PALPACIÓN DIGITAL ("como una piedra o bola de billar")'],
    redFlags: ['Ceguera irreversible en cuestión de 24 a 48 horas si no se desciende la PIO de forma inmediata'],
    criteria: 'Dolor ocular severo, midriasis media arreactiva, edema corneal y PIO >40-50 mmHg demostrada por tonometría.',
    labTests: ['Habitualmente no requeridos de inicio'],
    imaging: ['Biomicroscopía en lámpara de hendidura y gonioscopia en ojo contralateral para confirmar ángulo ocluido'],
    differential: ['Cefalea en racimos', 'Migraña común con náuseas', 'Uveítis anterior aguda', 'Queratitis bacteriana severa'],
    firstLine: [
      { drug: 'Agentes hiperosmolares sistémicos urgentes: Manitol al 20% endovenoso', dose: '1.5 a 2 g/kg EV en infusión rápida en 30 a 45 minutos', route: 'EV rápido', freq: 'Dosis rescate urgente', notes: 'Deshidrata el cuerpo vítreo reduciendo rápidamente la PIO masiva' },
      { drug: 'Acetazolamida oral o endovenosa (Inhibidor de la anhidrasa carbónica)', dose: '500 mg EV o VO en bolo inicial, seguido de 250 mg cada 6-8 horas', route: 'EV / VO', freq: 'Inmediato', notes: 'Frena de inmediato la producción de humor acuoso' },
      { drug: 'Gotas hipotensoras tópicas múltiples:', dose: 'Timolol 0.5% 1 gota + Apraclonidina 1% 1 gota cada 15 minutos en la primera hora', route: 'Oftálmica tópica', freq: 'Frecuente en urgencias', notes: 'Disminuyen la síntesis de humor acuoso' }
    ],
    alternatives: [
      { drug: 'Pilocarpina al 2% colirio tópico (miótico)', dose: 'Instilar 1 gota cada 15 min por 2 dosis SOLO CUANDO LA PIO HAYA BAJADO de 30-40 mmHg', route: 'Oftálmica tópica', freq: 'Según respuesta', notes: 'Produce miosis traccionando del iris para abrir el ángulo; ineficaz si la PIO es >50 mmHg por isquemia del esfínter pupilar' },
      { drug: 'Iridotomía Láser periférica (YAG Láser) curativa definitiva', dose: 'Perforación con láser del iris periférico en ambos ojos (el ojo sano debe tratarse de forma profiláctica obligatoria)', route: 'Procedimiento láser', freq: 'Urgente una vez aclarada la córnea', notes: 'Comunica las cámaras posterior y anterior eliminando el bloqueo pupilar para siempre' }
    ],
    nonPharm: ['Mantener al paciente en decúbito supino para que el cristalino se desplace hacia atrás por gravedad', 'NO TAPAR EL OJO NI COLOCAR APÓSITOS OCLUSIVOS (la oscuridad induce midriasis y empeora el cierre)'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: TERMINANTEMENTE PROHIBIDO ADMINISTRAR GOTAS MIDRIÁTICAS (Atropina, Tropicamida, Ciclopentolato); dilatar la pupila causará la oclusión total definitiva y ceguera permanente', 'Control horario de constantes vitales durante la infusión de Manitol (vigilar sobrecarga cardiovascular en pacientes con insuficiencia cardíaca o renal)', 'Administrar antieméticos EV (Ondansetrón 4-8 mg o Metoclopramida) para evitar el esfuerzo de los vómitos que aumenta más la PIO', 'Preparar al paciente y su ojo contralateral para la iridotomía bilateral con láser profiláctica']
  },
  {
    number: 458,
    id: 'diag-458',
    title: 'Catarata senil del adulto (Opacidad del cristalino)',
    cie10: 'H25.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Opacificación progresiva e indolora del cristalino ocular secundaria al envejecimiento fisiológico, caracterizada por la desnaturalización y agregación de las proteínas cristalineanas (cristalinas) con estrés oxidativo y pérdida de transparencia. Es la principal causa de ceguera tratable y reversible en el mundo.',
    symptoms: ['DISMINUCIÓN LENTA, PROGRESIVA E INDOLORA DE LA AGUDEZA VISUAL ("visión borrosa como a través de un cristal sucio, empañado o humo")', 'DESLUMBRAMIENTO INTENSO (fotofobia o encandilamiento al conducir de noche con las luces de frente o con sol brillante)', 'Alteración de la percepción de los colores (los colores lucen desvaídos, amarillentos o amarronados)', 'Pérdida de la sensibilidad al contraste', 'MIOPÍA DE ÍNDICE TEMPORAL: "el abuelo vuelve a leer de cerca sin necesidad de gafas" debido al aumento del índice de refracción nuclear del cristalino antes de opacarse por completo', 'Visualización de una LEUCOCORIA O PUPILA BLANQUECINA/AMARILLENTA en cataratas maduras avanzadas'],
    redFlags: ['Catarata hipermadura facolítica o facomórfica: ruptura de la cápsula cristalineana o engrosamiento masivo con glaucoma secundario severo'],
    criteria: 'Examen con lámpara de hendidura con pupila dilatada demostrando opacidades nucleares, corticales o subcapsulares posteriores.',
    labTests: ['Biometría ocular computarizada (cálculo de la potencia del lente intraocular LIO a implantar)'],
    imaging: ['Biomicroscopía con lámpara de hendidura', 'Ecografía ocular modo B (si la catarata es totalmente densa e impide visualizar el fondo de ojo)'],
    differential: ['Degeneración macular asociada a la edad', 'Glaucoma crónico avanzado', 'Presbicia'],
    firstLine: [
      { drug: 'Facoemulsificación ultrasónica con Implante de Lente Intraocular (LIO) plegable', dose: 'Cirugía ambulatoria bajo anestesia tópica: microincisión de 2.2 mm, emulsificación del cristalino opaco por ultrasonidos y aspiración, colocando un LIO monopocal, tórico o multifocal en el saco capsular', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento único curativo', notes: 'Tratamiento curativo estándar de referencia en todo el mundo; ambulatorio, seguro y con recuperación visual en 24 a 48 horas (>98% éxito)' }
    ],
    alternatives: [
      { drug: 'Cirugía extracapsular convencional (EECC)', dose: 'Extracción manual del núcleo entero mediante incisión grande con sutura', route: 'Quirúrgico', freq: 'Procedimiento quirúrgico', notes: 'Indicada en cataratas hipermaduras extraordinariamente duras en zonas rurales o de bajos recursos' }
    ],
    nonPharm: ['Adaptación transitoria de la graduación de gafas y uso de lupas iluminadas mientras se programa la cirugía', 'Gafas de sol con filtro UV para retrasar la progresión'],
    nursingCare: ['CUIDADOS POSTOPERATORIOS DE ENFERMERÍA EN CIRUGÍA DE CATARATA:', '1. INSTRUCCIÓN CRUCIAL: PROHIBIDO FROTARSE O APRETARSE EL OJO OPERADO durante al menos 1 mes; colocar protector ocular plástico rígido perforado para dormir durante las dos primeras semanas', '2. Evitar agacharse bruscamente con la cabeza hacia abajo, levantar pesos mayores de 5 kg o realizar maniobras de esfuerzo físico intenso los primeros 15 días', '3. Aplicación estricta de colirios postoperatorios: combinación de colirio antibiótico (Moxifloxacino) + colirio corticoide (Prednisolona) cada 4-6 horas durante 3 a 4 semanas', '4. Alerta de Endoftalmitis: educar al paciente a consultar de urgencia inmediata ante dolor ocular severo, ojo rojo intenso o pérdida súbita de la visión']
  },
  {
    number: 459,
    id: 'diag-459',
    title: 'Degeneración macular asociada a la edad (DMAE)',
    cie10: 'H35.3',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Enfermedad degenerativa crónica de la mácula lútea y del complejo epitelio pigmentario de la retina / membrana de Bruch / coriocapilar, prevalente en adultos mayores de 55-60 años. Es la principal causa de ceguera legal irreversible en países desarrollados. Se clasifica en DMAE Seca o Atrófica (85-90%) y DMAE Húmeda, Exudativa o Neovascular (10-15%, la más agresiva).',
    symptoms: ['PÉRDIDA PROGRESIVA O SÚBITA DE LA VISIÓN CENTRAL NÍTIDA Y DE DETALLE (conserva la visión periférica; el paciente no se queda totalmente a oscuras pero no puede leer ni reconocer rostros)', 'METAMORFOPSIA PATOGNOMÓNICA: distorsión visual de las líneas rectas ("ve las líneas rectas onduladas, dobladas o chuecas; los marcos de las ventanas o baldosas parecen curvos")', 'ESCOTOMA CENTRAL: mancha oscura, grisácea o ciega fija en el centro mismo del campo visual', 'Micropsia o macropsia (los objetos se perciben más pequeños o más grandes de lo real)', 'DMAE Seca: declive visual muy lento a lo largo de años con presencia de DRUSAS maculares', 'DMAE Húmeda: pérdida visual catastrófica y rápida en semanas por membranas neovasculares coroideas que sangran'],
    redFlags: ['Metamorfopsia súbita de nueva aparición (alerta de conversión de forma seca a húmeda neovascular con líquido subretiniano urgente)'],
    criteria: 'Prueba de la Rejilla de Amsler (detecta metamorfopsia) y confirmación por Tomografía de Coherencia Óptica (OCT) de mácula.',
    labTests: ['Pruebas genéticas y perfil lipídico'],
    imaging: ['OCT macular de alta resolución (demuestra drusas, atrofia geográfica o fluido intrarretiniano/subretiniano)', 'Angiografía con Fluoresceína o Angio-OCT (confirma neovasos coroideos activos)'],
    differential: ['Coriorretinopatía serosa central', 'Agujero macular', 'Membrana epirretiniana', 'Retinopatía diabética con edema macular'],
    firstLine: [
      { drug: 'DMAE Húmeda / Neovascular: Fármacos Anti-VEGF Intravítreos (Ranibizumab, Aflibercept o Faricimab)', dose: 'Aflibercept 2 mg o Ranibizumab 0.5 mg mediante inyección intravítrea mensual por 3 meses de carga, seguido de pauta individualizada "Tratar y Extender" (Treat-and-Extend)', route: 'Intravítrea', freq: 'Mensual o bimestral', notes: 'Revolucionó el pronóstico visual; detiene la proliferación neovascular anómala y reabsorbe el edema; administra un retinólogo estéril' },
      { drug: 'DMAE Seca: Suplementación con fórmula antioxidante AREDS-2', dose: 'Vitamina C (500 mg) + Vitamina E (400 UI) + Luteína (10 mg) + Zeaxantina (2 mg) + Zinc (80 mg) + Cobre (2 mg) diario', route: 'VO', freq: 'c/24h de por vida', notes: 'Enfermedad seca intermedia: reduce el riesgo de progresión a DMAE avanzada en un 25-30%' }
    ],
    alternatives: [
      { drug: 'Inyecciones intravítreas de inhibidores del complemento (Pegcetacoplan)', dose: 'Inyección intravítrea mensual o bimestral', route: 'Intravítrea', freq: 'Según protocolo', notes: 'Recientemente aprobados para enlentecer la expansión de la atrofia geográfica en DMAE seca avanzada' }
    ],
    nonPharm: ['Abandono estricto del tabaquismo (fumar multiplica por 3-4 el riesgo de DMAE y progresión)', 'Dieta rica en vegetales de hoja verde (espinacas, acelgas) y pescado azul rico en omega-3'],
    nursingCare: ['AUTOEVALUACIÓN SEMANAL CON LA REJILLA DE AMSLER: Enseñar al paciente a colocarse las gafas de cerca, taparse un ojo y mirar fijamente el punto central de la cuadrícula a 30 cm de distancia; SI LAS LÍNEAS SE VEN ONDULADAS O BORROSAS, DEBE ACUDIR DE INMEDIATO AL OFTALMÓLOGO ese mismo día (signo de sangrado subretiniano)', 'Cuidados de la inyección intravítrea: aplicar colirio anestésico y povidona yodada al 5% estéril en saco conjuntival; nunca frotarse los ojos post-procedimiento', 'Derivación a servicios de baja visión: adaptar telescopios, lupas electrónicas y pantallas magnificadas']
  },
  {
    number: 460,
    id: 'diag-460',
    title: 'Retinopatía diabética no proliferativa y proliferativa',
    cie10: 'E11.3 / H36.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Complicación microvascular ocular crónica y progresiva de la diabetes mellitus caracterizada por daño endotelial en los capilares retinianos por hiperglucemia mantenida, provocando oclusión capilar, isquemia retiniana y aumento de la permeabilidad vascular. Se clasifica en No Proliferativa (RDNP: microaneurismas, exudados) y Proliferativa (RDP: neovascularización frágil inducida por VEGF con riesgo de hemovítreo y desprendimiento traccional).',
    symptoms: ['Completamente asintomática durante muchos años en fases leves a moderadas', 'Aparición de "moscas volantes", puntos oscuros flotantes o telarañas (miodesopsias)', 'EDEMA MACULAR DIABÉTICO (puede aparecer en cualquier estadio): pérdida progresiva de la visión central nítida y distorsión de imágenes', 'HEMOVÍTREO AGUDO (en retinopatía proliferativa): PÉRDIDA SÚBITA Y MASIVA DE LA VISIÓN ("ve una lluvia de manchas oscuras seguida de una cortina roja o negra que tapa todo el ojo")', 'Pérdida visual severa e irreversible por desprendimiento de retina traccional'],
    redFlags: ['Hemorragia vítrea masiva aguda indolora con pupila negra', 'Glaucoma neovascular (rubeosis iridis con dolor ocular intenso y ceguera)'],
    criteria: 'Fondo de ojo con pupila dilatada y retinografía digital clasificada según la escala internacional ETDRS.',
    labTests: ['HbA1c trimestral (control metabólico estricto)', 'Microalbuminuria y función renal (la retinopatía se correlaciona directamente con nefropatía diabética)'],
    imaging: ['Retinografía color de campo amplio (múltiples campos)', 'OCT macular (estándar de oro para diagnosticar y cuantificar el grosor del Edema Macular Diabético)', 'Angiografía Fluoresceínica de Retina (RFG - delimita áreas de isquemia y neovasos con fuga)'],
    differential: ['Retinopatía hipertensiva severa', 'Oclusión venosa retiniana', 'Retinopatía por radiación'],
    firstLine: [
      { drug: 'Control metabólico estricto e intensivo (Prevención de progresión)', dose: 'Mantener HbA1c <7.0%, Presión Arterial <130/80 mmHg y perfil lipídico normal', route: 'Metabólico integral', freq: 'Continuo', notes: 'Única intervención que detiene la aparición y progresión del daño microvascular' },
      { drug: 'Panfotocoagulación Retiniana con Láser (PFC) en Retinopatía Proliferativa', dose: 'Aplicación de múltiples impactos de láser en toda la retina isquémica periférica respetando la mácula', route: 'Procedimiento láser', freq: '2 a 4 sesiones', notes: 'Disminuye la demanda de oxígeno retiniano y frena drásticamente la producción de VEGF, haciendo involucionar los neovasos' },
      { drug: 'Anti-VEGF Intravítreos (Aflibercept, Ranibizumab) en Edema Macular Diabético', dose: 'Inyecciones intravítreas mensuales seriadas guiadas por OCT', route: 'Intravítrea', freq: 'Mensual según protocolo', notes: 'Tratamiento de elección número uno para recuperar agudeza visual en edema macular' }
    ],
    alternatives: [
      { drug: 'Vitrectomía posterior por vía pars plana (VPP)', dose: 'Cirugía endoocular microincisional', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento quirúrgico', notes: 'Indicada en hemorragia vítrea que no se reabsorbe tras 1 a 3 meses o en desprendimiento de retina traccional' }
    ],
    nonPharm: ['Fondo de ojo anual obligatorio con pupila dilatada a todo paciente diabético desde el diagnóstico (DM2) o a los 5 años del diagnóstico (DM1)'],
    nursingCare: ['EDUCACIÓN SANITARIA OBLIGATORIA DE ENFERMERÍA: Todo paciente diabético debe tener una revisión anual de fondo de ojo con dilatación pupilar, AUNQUE AFIRME VER PERFECTAMENTE BIEN; la retinopatía avanza en silencio y cuando da síntomas visuales ya está en fases avanzadas', 'Alerta de hemorragia vítrea: si el paciente con retinopatía proliferativa refiere "lluvia de puntos negros", indicar reposo con cabecera elevada a 45° para que la sangre decante hacia abajo y consultar de urgencia', 'Desmitificar: explicar que la insulina NO causa ceguera; muchos pacientes creen falsamente que la insulina los dejó ciegos, cuando fue la diabetes descontrolada de 15 años la causante']
  },
  {
    number: 461,
    id: 'diag-461',
    title: 'Retinopatía hipertensiva y Crisis retiniana hipertensiva',
    cie10: 'H35.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Conjunto de alteraciones vasculares y parenquimatosas en la retina y papila óptica producidas por los efectos deletéreos de la hipertensión arterial crónica o acelerada/maligna sobre la microcirculación retiniana autorregulada. Se clasifica clásicamente según la escala de Keith-Wagener-Barker en Grados I a IV.',
    symptoms: ['Fases crónicas (Grados I a III): habitualmente asintomáticas durante años', 'SIGNOS EN EL FONDO DE OJO SEGÚN GRADO:', '- Grado I: vasoconstricción y estrechamiento arteriolar generalizado ("arterias en hilo de cobre")', '- Grado II: esclerosis arteriolar marcada con CRUCES ARTERIOVENOSOS PATOLÓGICOS (Signo de Gunn: ocultamiento de la vena por la arteria esclerótica; Signo de Salus: desviación en ángulo de la vena)', '- Grado III: EXUDADOS ALGODONOSOS (microinfartos de la capa de fibras nerviosas), hemorragias retinianas en llama o astilla y exudados duros lipídicos en "estrella macular"', '- Grado IV (HIPERTENSIÓN MALIGNA): EDEMA DE PAPILA BILATERAL (borramiento de los bordes del disco óptico) con visión borrosa severa, cefalea occipital intensa y náuseas'],
    redFlags: ['GRADO IV CON EDEMA DE PAPILA: EMERGENCIA HIPERTENSIVA CON DAÑO DE ÓRGANO BLANCO VITAL (asociada a encefalopatía hipertensiva o fallo renal agudo; RIESGO INMEDIATO DE MUERTE)'],
    criteria: 'Visualización oftalmoscópica de los cruces arteriovenosos, hemorragias en llama y edema de papila en paciente hipertenso.',
    labTests: ['Función renal (creatinina, urea, proteinuria urgente)', 'ECG (hipertrofia ventricular izquierda) y troponinas'],
    imaging: ['Retinografía y OCT de nervio óptico', 'TC craneal si hay edema de papila con cefalea o déficit focal (descarte de ACV o encefalopatía)'],
    differential: ['Retinopatía diabética', 'Neuropatía óptica isquémica', 'Hipertensión endocraneana idiopática (pseudotumor cerebri)'],
    firstLine: [
      { drug: 'Control y descenso gradual de la Presión Arterial en Emergencia Hipertensiva', dose: 'Labetalol o Nicardipino EV en infusión continua buscando reducir la Presión Arterial Media (PAM) un 20-25% en las primeras horas', route: 'EV en UCI/Urgencias', freq: 'Continuo', notes: 'NO BAJAR LA PRESIÓN ARTERIAL BRUSCAMENTE a cifras normales para evitar infartos isquémicos en la retina o el cerebro por pérdida de autorregulación' }
    ],
    alternatives: [
      { drug: 'Tratamiento antihipertensivo oral intensificado (en formas crónicas grado I-II)', dose: 'IECA o ARA-II (Enalapril o Losartán) + Calcioantagonista (Amlodipino)', route: 'VO', freq: 'c/24h', notes: 'Revierte los signos microvasculares tempranos' }
    ],
    nonPharm: ['Restricción estricta de sodio en la dieta (<2 g/día de sal)', 'Suspensión del tabaco y reducción de peso corporal'],
    nursingCare: ['MONITOREO DE PRESIÓN ARTERIAL HORARIO EN EMERGENCIA HIPERTENSIVA CON EDEMA DE PAPILA: Titular el fármaco EV con bomba de infusión para evitar caídas precipitadas de la presión que causen isquemia retiniana o cerebral', 'Inspección de papilas: colaborar en el fondo de ojo en todo paciente que ingresa a urgencias con crisis hipertensiva y cefalea para buscar edema de papila', 'Adherencia farmacológica: educar al paciente en que la hipertensión destruye no solo los ojos sino también el corazón y los riñones sin avisar']
  },
  {
    number: 462,
    id: 'diag-462',
    title: 'Desprendimiento de retina regmatógeno (DRR)',
    cie10: 'H33.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Urgencia oftalmológica caracterizada por la separación física de la retina neurosensorial del epitelio pigmentario subyacente debido al paso de humor vítreo licuado a través de una rotura, desgarro o agujero retiniano de espesor completo (desprendimiento regmatógeno). Muy prevalente en miopes altos, ojos operados de catarata o tras traumatismos oculares.',
    symptoms: ['SÍNTOMAS PRÓDROMICOS DE ALARMA INMEDIATA:', '- FOTOPSIAS: visión de destellos luminosos brillantes o "chispazos de luz" en la periferia del campo visual, incluso con los ojos cerrados o a oscuras (por tracción vitreorretiniana)', '- MIODESOPSIAS MASIVAS: aparición brusca de "cientos de moscas volantes, hollín, telarañas o lluvia de puntos oscuros"', '- DESPRENDIMIENTO EN CURSO: APARICIÓN DE UNA "CORTINA O SOMBRA NEGRA FIJA QUE CAE O SUBE" desde la periferia avanzando progresivamente hacia el centro del campo visual', '- Pérdida súbita y severa de la visión central si la cortina llega a comprometer la mácula ("mácula off")', 'Ausencia total de dolor en el ojo y ojo blanco sin enrojecimiento'],
    redFlags: ['DESPRENDIMIENTO CON "MÁCULA ON" (la mácula todavía está pegada): URGENCIA QUIRÚRGICA INMEDIATA EN <24 HORAS; si la mácula se desprende, la recuperación visual futura será significativamente menor'],
    criteria: 'Oftalmoscopia indirecta con dilatación pupilar demostrando bolsa retiniana móvil blanquecina con pliegues y rotura asociada.',
    labTests: ['Preoperatorios habituales'],
    imaging: ['Ecografía ocular modo B (demuestra membrana hiperecoica móvil en el vítreo unida a la papila óptica y ora serrata)'],
    differential: ['Desprendimiento de vítreo posterior simple (sin desgarro de retina)', 'Hemorragia vítrea pura', 'Desprendimiento de retina traccional o exudativo'],
    firstLine: [
      { drug: 'Tratamiento profiláctico urgente ante el desgarro simple antes del desprendimiento: Fotocoagulación con Láser Argón', dose: 'Impactos de láser alrededor de todo el desgarro creando una cicatriz coriorretiniana ("soldadura térmica")', route: 'Láser en consultorio', freq: 'Sesión única inmediata', notes: 'Previene el desprendimiento de retina en >95% si se aplica antes de que el vítreo penetre bajo la retina' },
      { drug: 'Vitrectomía Posterior por Vía Pars Plana (VPP) o Cirugía Escleral con cerclaje', dose: 'Extracción del vítreo, aplanamiento de la retina con perfluorocarbono líquido, endoláser y taponamiento interno con gas expansible (SF6 / C3F8) o aceite de silicona', route: 'Quirúrgico de urgencia', freq: 'Procedimiento urgente', notes: 'Cirugía de elección para reaplicar la retina' }
    ],
    alternatives: [
      { drug: 'Retinopexia neumática', dose: 'Inyección intravítrea de una burbuja de gas en consultorio seguido de láser', route: 'Consultorio', freq: 'Procedimiento puntual', notes: 'Indicada en desgarros únicos pequeños superiores' }
    ],
    nonPharm: ['Reposo en cama inmediato con posición de la cabeza según la ubicación del desgarro (para que la gravedad mantenga la retina aplicada)', 'Prohibido frotarse el ojo o realizar movimientos cefálicos bruscos'],
    nursingCare: ['POSICIÓN POSTOPERATORIA OBLIGATORIA DEL PACIENTE ("POSICIÓN EN PRONO O MIRANDO AL SUELO"): Si se utilizó gas intraocular o silicona como taponador, educar al paciente a mantener la cabeza boca abajo o mirando al suelo las 24 horas del día durante 7 a 14 días para que la burbuja de gas flote hacia arriba y comprima el desgarro retiniano', 'PROHIBICIÓN ABSOLUTA DE VIAJAR EN AVIÓN O SUBIR A GRANDES ALTURAS SI TIENE GAS EN EL OJO: Explicar que la disminución de la presión atmosférica en vuelos expande bruscamente la burbuja de gas intraocular causando hipertensión ocular extrema, dolor insoportable y ceguera inmediata por infarto del nervio óptico', 'Monitoreo de dolor ocular postoperatorio y signos de hipertensión ocular aguda']
  },
  {
    number: 463,
    id: 'diag-463',
    title: 'Oclusión de la arteria central de la retina (OACR)',
    cie10: 'H34.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Emergencia oftalmológica y cerebrovascular análoga a un ictus isquémico cerebral, causada por la oclusión súbita de la arteria central de la retina por un émbolo ateromatoso carotídeo o cardioembólico. Produce una isquemia retiniana aguda completa con pérdida catastrófica de la visión en segundos. La retina sólo sobrevive unas 4 horas de isquemia antes del daño irreversible.',
    symptoms: ['PÉRDIDA VISUAL MONOCULAR TOTAL, SÚBITA E INDOLORA ("ceguera repentina en cuestión de segundos como apagar un interruptor")', 'Agudeza visual reducida a percepción de luz o movimiento de manos', 'DEFECTO PUPILAR AFERENTE RELATIVO MARCADO (Pupila de Marcus Gunn: la pupila del ojo afectado se dilata paradójicamente al enfocarle la luz en el test de balanceo)', 'HALLAZGO PATOGNOMÓNICO EN EL FONDO DE OJO:', '- EDEMA RETINIANO DIFUSO CON RETINA BLANQUECINA O PÁLIDA LECHOSA ISQUÉMICA', '- MANCHA "ROJO CEREZA" EN LA FÓVEA (la fóvea carece de capas internas de la retina y trasluce la coroides vascular roja subyacente contratando con la retina blanca edematosa)', '- Segmentación del flujo sanguíneo arterial en "vagones de tren"'],
    redFlags: ['ORIGEN EN ARTERITIS DE CÉLULAS GIGANTES / DE LA TEMPORAL EN MAYORES DE 50 AÑOS: requiere megadosis de corticoides EV inmediatas para salvar el ojo contralateral sano'],
    criteria: 'Pérdida visual hiperaguda indolora con mancha rojo cereza retiniana en fondo de ojo.',
    labTests: ['VSG y PCR inmediatas obligatorias (descarte urgente de arteritis temporal en >50 años)', 'Hemograma, perfil de coagulación y perfil lipídico'],
    imaging: ['Ecografía Doppler carotídea y vertebral urgente (buscar placa ateromatosa carotídea con émbolo de colesterol o Hollenhorst)', 'Ecocardiograma y ECG/Holter (descarte de trombo intracardíaco o fibrilación auricular)', 'TC o RM cerebral'],
    differential: ['Neuritis óptica aguda', 'Desprendimiento de retina con mácula off', 'Neuropatía óptica isquémica arterítica'],
    firstLine: [
      { drug: 'Tratamiento de descompresión ocular inmediata (en las primeras 4 a 6 horas): Masaje ocular firme', dose: 'Masaje digital ocular rítmico sobre el globo cerrado durante 15 segundos comprimiendo y soltando repetidamente', route: 'Maniobra física urgente', freq: 'Inmediato', notes: 'Provoca fluctuaciones bruscas de la PIO con la intención de desalojar el émbolo impactado hacia ramas arteriales más periféricas' },
      { drug: 'Descenso rápido de la Presión Intraocular: Acetazolamida 500 mg EV + Gotas de Timolol 0.5%', dose: 'Acetazolamida 500 mg EV en bolo + 1 gota de Timolol', route: 'EV / Tópica', freq: 'Urgencia inmediata', notes: 'Disminuye la resistencia vascular facilitando la perfusión' },
      { drug: 'Paracentesis de cámara anterior', dose: 'Evacuación de 0.1 a 0.2 mL de humor acuoso con aguja 30G por oftalmólogo', route: 'Procedimiento oftalmológico', freq: 'Procedimiento urgente', notes: 'Descomprime inmediatamente el globo ocular' }
    ],
    alternatives: [
      { drug: 'Corticoides endovenosos en megadosis (SI SE SOSPECHA ARTERITIS DE LA TEMPORAL): Metilprednisolona', dose: '1000 mg (1 gramo) EV al día durante 3 días consecutivos', route: 'EV', freq: 'c/24h x 3 días', notes: 'MANDATORIO si la VSG/PCR están elevadas o hay cefalea temporal y claudicación mandibular para proteger el otro ojo' }
    ],
    nonPharm: ['Inhalación de carbógeno (95% O2 + 5% CO2) o respirar en una bolsa de papel para inducir hipercapnia y vasodilatación retiniana'],
    nursingCare: ['ACTIVACIÓN INMEDIATA COMO CÓDIGO ICTUS: Recordar que la oclusión retiniana es un infarto cerebral del ojo; coordinar evaluación neurológica completa y estudio de troncos supraaórticos para prevenir un ictus cerebral masivo en los siguientes días', 'Palpación de arterias temporales en mayores de 50 años: preguntar si siente dolor en la sien al peinarse o dolor en la mandíbula al masticar (claudicación mandibular)', 'Apoyo emocional ante la pérdida catastrófica y súbita de la visión']
  },
  {
    number: 464,
    id: 'diag-464',
    title: 'Oclusión de la vena central de la retina (OVCR)',
    cie10: 'H34.8',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Segunda patología vascular retiniana más frecuente tras la retinopatía diabética, producida por la formación de un trombo en la vena central de la retina a nivel de la lámina cribosa, secundaria a compresión por una arteria central esclerótica rígida adyacente. Se caracteriza por ingurgitación venosa masiva, estasis circulatorio, hemorragias retinianas difusas y edema macular.',
    symptoms: ['DISMINUCIÓN DE LA VISIÓN UNILATERAL, SUBAGUDA O SÚBITA, INDOLORA', 'Grado variable de pérdida visual: desde visión borrosa leve hasta visión de bultos', 'FONDO DE OJO TÍPICO CON ASPECTO EN "TORMENTA DE SANGRE O SALPICADURA DE TOMATE":', '- VENAS RETINIANAS EXTREMADAMENTE DILATADAS, TORTUOSAS Y CONGESTIVAS', '- HEMORRAGIAS RETINIANAS MASIVAS EN LLAMA Y PROFUNDAS EN LOS CUATRO CUADRANTES RETINIANOS', '- Edema de papila y exudados algodonosos múltiples', '- EDEMA MACULAR ASOCIADO (principal causa de pérdida de agudeza visual)'],
    redFlags: ['GLAUCOMA DE LOS 100 DÍAS (GLAUCOMA NEOVASCULAR): complicación devastadora en formas isquémicas que aparece a los 3 meses por neovasos en el iris (rubeosis iridis) que cierran el ángulo con dolor atroz y ceguera'],
    criteria: 'Fondo de ojo característico en tormenta de sangre en los cuatro cuadrantes retinianos con OCT macular.',
    labTests: ['Perfil de trombofilias en menores de 50 años (anticoagulante lúpico, mutación factor V Leiden, proteína C y S)', 'Glucemia, perfil lipídico y hemograma'],
    imaging: ['OCT macular (cuantifica el edema macular quístico)', 'Angiografía Fluoresceínica (diferencia la forma perfundida no isquémica de la forma isquémica con >10 discos de no perfusión)'],
    differential: ['Retinopatía diabética descompensada', 'Retinopatía hipertensiva grado III-IV', 'Síndrome isquémico ocular'],
    firstLine: [
      { drug: 'Anti-VEGF Intravítreos (Aflibercept o Ranibizumab) para el Edema Macular', dose: 'Inyecciones intravítreas mensuales seriadas hasta resolución del edema macular', route: 'Intravítrea', freq: 'Mensual según protocolo', notes: 'Fármacos de primera elección que reducen el edema macular y mejoran sustancialmente la agudeza visual' },
      { drug: 'Implante intravítreo de Dexametasona de liberación lenta (Ozurdex)', dose: 'Implante biodegradable de 0.7 mg inyectado en cavidad vítrea', route: 'Intravítrea', freq: 'Cada 4 a 6 meses', notes: 'Potente antiinflamatorio con efecto de varios meses; vigilar elevación de la PIO y progresión de cataratas' }
    ],
    alternatives: [
      { drug: 'Panfotocoagulación retiniana con láser en cuadrantes isquémicos', dose: 'Impactos de láser periféricos en áreas de no perfusión', route: 'Procedimiento láser', freq: 'Según isquemia', notes: 'Prevención mandatoria del glaucoma neovascular en formas isquémicas' }
    ],
    nonPharm: ['Control estricto de la hipertensión arterial sistémica y del glaucoma primario (el glaucoma es el mayor factor de riesgo para oclusión venosa)'],
    nursingCare: ['VIGILANCIA DEL "GLAUCOMA DE LOS 100 DÍAS": Advertir al paciente y citar a controles mensuales de revisión del iris con lámpara de hendidura durante los primeros 3 a 4 meses; si presenta dolor ocular súbito, ojo rojo o dolor de cabeza, acudir de inmediato al oftalmólogo', 'Control de la presión intraocular seriada si recibe inyecciones intravítreas de implantes de dexametasona', 'Manejo de factores de riesgo cardiovascular asociados en conjunto con el médico internista']
  },
  {
    number: 465,
    id: 'diag-465',
    title: 'Conjuntivitis bacteriana aguda',
    cie10: 'H10.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección bacteriana aguda y sumamente contagiosa de la mucosa conjuntival, producida con mayor frecuencia por Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae y Moraxella catarrhalis. Se caracteriza por inyección conjuntival superficial, sensación de cuerpo extraño y abundante secreción mucopurulenta.',
    symptoms: ['OJO ROJO CON INYECCIÓN CONJUNTIVAL TÍPICAMENTE SUPERFICIAL / PERIFÉRICA (más intensa en los fondos de saco y respeta la zona periquerática límbica)', 'SECRECIÓN OCULAR MUCOPURULENTA O PURULENTA ESPESA AMARILLO-VERDOSA', '"PÁRPADOS PEGADOS POR LA MAÑANA AL DESPERTAR POR COSTRAS EN LAS PESTAÑAS"', 'Sensación de arenilla, cuerpo extraño, quemazón o escozor leve', 'Inicio unilateral con rápida afectación del ojo contralateral a los 2-3 días por autoinoculación', 'AGUDEZA VISUAL CONSERVADA (puede haber visión borrosa transitoria que se limpia al parpadear)', 'PUPILAS NORMALES Y REACTIVAS, Y CÓRNEA TOTALMENTE TRANSPARENTE'],
    redFlags: ['Secreción purulenta hiperaguda copiosa e incesante que rebosa de los párpados en recién nacidos o adultos jóvenes (SOSPECHA DE CONJUNTIVITIS HIPERAGUDA POR NEISSERIA GONORRHOEAE CON RIESGO DE PERFORACIÓN CORNEAL RÁPIDA)'],
    criteria: 'Diagnóstico clínico: ojo rojo periférico con secreción mucopurulenta y párpados pegados sin pérdida visual.',
    labTests: ['Tinción de Gram y cultivo conjuntival con antibiograma si hay secreción purulenta masiva, recién nacidos o refractariedad'],
    imaging: ['No indicada'],
    differential: ['Conjuntivitis viral (secreción acuosa limpia y adenopatía preauricular)', 'Conjuntivitis alérgica (prurito intenso predominante)', 'Uveítis anterior aguda (dolor profundo, miosis y pérdida visual)', 'Glaucoma agudo'],
    firstLine: [
      { drug: 'Ciprofloxacino al 0.3% o Tobramicina al 0.3% colirio oftálmico', dose: 'Instilar 1 o 2 gotas en el saco conjuntival del ojo afectado cada 4 a 6 horas durante 7 días continuos', route: 'Oftálmica tópica', freq: 'c/4-6h x 7 días', notes: 'Antibioticoterapia tópica de amplio espectro de primera línea; acelera la erradicación bacteriana y previene complicaciones' },
      { drug: 'Lavado conjuntival frecuente con Suero Fisiológico al 0.9% estéril', dose: 'Limpieza suave de párpados y secreciones antes de aplicar el colirio antibiótico', route: 'Tópica', freq: 'c/6-8h', notes: 'Retira detritos y secreciones purulentas aumentando la penetración del fármaco' }
    ],
    alternatives: [
      { drug: 'Moxifloxacino al 0.5% colirio tópico', dose: 'Instilar 1 gota cada 8 horas durante 7 días', route: 'Oftálmica tópica', freq: 'c/8h x 7 días', notes: 'Fluorquinolona de 4ta generación; elección en sospecha de bacterias resistentes o portadores de lentes de contacto' }
    ],
    nonPharm: ['LAVADO DE MANOS FRECUENTE CON AGUA Y JABÓN para cortar la cadena de contagio intrafamiliar', 'Uso individual de toallas faciales, pañuelos y fundas de almohada', 'SUSPENDER ESTRICTAMENTE EL USO DE LENTES DE CONTACTO hasta la curación completa'],
    nursingCare: ['EDUCACIÓN SOBRE LA TÉCNICA DE APLICACIÓN DEL COLIRIO: Enseñar al paciente o cuidador a inclinar la cabeza hacia atrás, tirar del párpado inferior hacia abajo formando una bolsa e instilar la gota SIN TOCAR EL OJO NI LAS PESTAÑAS CON LA PUNTA DEL GOTERO para evitar contaminar todo el frasco', 'Limpieza palpebral adecuada: limpiar de adentro hacia afuera con una gasa estéril humedecida en suero fisiológico para cada ojo; NUNCA usar la misma gasa para ambos ojos', 'Desechar los cosméticos oculares y soluciones de lentes de contacto contaminadas']
  },
  {
    number: 466,
    id: 'diag-466',
    title: 'Conjuntivitis viral aguda (Queratoconjuntivitis epidémica por Adenovirus)',
    cie10: 'B30.0 / H10.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección conjuntival aguda sumamente contagiosa, epidémica y explosiva causada en más del 80-90% de los casos por Adenovirus (especialmente serotipos 8, 19 y 37). Se distingue por su asociación con síntomas respiratorios o faringitis, abundante secreción acuosa limpia, hipertrofia folicular y una adenopatía preauricular dolorosa característica.',
    symptoms: ['OJO ROJO INTENSO CON QUEMOSIS (edema de la conjuntiva bulbar en "gelatina")', 'SECRECIÓN OCULAR SEROSA, ACUOSA O TRANSPARENTE PROFUSA ("lagrimeo incesante")', 'Sensación punzante de cuerpo extraño, arenilla y quemazón intensa', 'Edema palpebral marcado y eritema', 'ADENOPATÍA PREAURICULAR HOMOLATERAL PALPABLE Y DOLOROSA PATOGNOMÓNICA', 'Foliculos conjuntivales visibles en conjuntiva tarsal inferior ("aspecto en granos de arroz")', 'FIEBRE FARINGOCONJUNTIVAL: faringitis, febrícula y malestar general acompañante', 'Complicación a los 7-10 días: QUERATITIS NUMULAR CON INFILTRADOS SUBEPITELIALES CORNEALES que provocan visión borrosa y fotofobia'],
    redFlags: ['Formación de pseudomembranas o membranas verdaderas fibrinosas en conjuntiva tarsal que causan cicatrización o simbléfaron'],
    criteria: 'Ojo rojo con secreción acuosa y adenopatía preauricular dolorosa asociada a folículos conjuntivales.',
    labTests: ['Diagnóstico fundamentalmente clínico; test rápido de antígeno de Adenovirus en lágrimas en casos seleccionados'],
    imaging: ['Biomicroscopía en lámpara de hendidura con tinción de fluoresceína'],
    differential: ['Conjuntivitis bacteriana (secreción purulenta espesa)', 'Queratitis herpética dendrítica', 'Conjuntivitis alérgica'],
    firstLine: [
      { drug: 'Medidas sintomáticas y de soporte tópico (enfermedad viral autolimitada)', dose: 'Lágrimas artificiales sin conservantes frías cada 2 a 3 horas + Compresas frías estériles sobre párpados cerrados durante 10 minutos 3-4 veces al día', route: 'Oftálmica tópica', freq: 'c/2-3h', notes: 'Alivian notablemente el escozor y el edema; los antibióticos tópicos NO curan los virus y no deben usarse de rutina' }
    ],
    alternatives: [
      { drug: 'Corticoides tópicos a dosis bajas: Fluorometolona o Loteprednol colirio', dose: '1 gota cada 8-12 horas durante 1-2 semanas', route: 'Oftálmica tópica', freq: 'c/8-12h', notes: 'INDICADOS EXCLUSIVAMENTE POR OFTALMÓLOGO ante infiltrados subepiteliales numulares corneales o pseudomembranas; CONTRAINDICADOS si no se ha descartado herpes simple' }
    ],
    nonPharm: ['AISLAMIENTO DE CONTACTO ESTRICTO: baja laboral/escolar durante 10 a 14 días mientras haya secreción activa por su extremado contagio', 'Desinfección de fómites con alcohol al 70% o hipoclorito'],
    nursingCare: ['MEDIDAS ESTRICTAS DE CONTROL DE INFECCIONES DE ENFERMERÍA: El adenovirus sobrevive semanas en superficies secas; desinfectar meticulosamente el tonómetro de aplanación, lámpara de hendidura y camilla tras atender al paciente', 'Enseñar el lavado de manos con agua y jabón antes y después de tocarse los ojos; toallas y sábanas individuales', 'Retiro de pseudomembranas: colaborar con el oftalmólogo en el pelado cuidadoso de pseudomembranas tarsales con un hisopo estéril bajo anestesia tópica']
  },
  {
    number: 467,
    id: 'diag-467',
    title: 'Conjuntivitis alérgica estacional y Queratoconjuntivitis vernal',
    cie10: 'H10.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación alérgica ocular bilateral mediada por reacciones de hipersensibilidad inmediata tipo I dependiente de IgE frente a alérgenos ambientales (polen, ácaros del polvo, epitelio de animales domésticos). La Queratoconjuntivitis Vernal (QCV) es una forma severa y crónica de niños y adolescentes masculinos en climas cálidos con papilas gigantes tarsales y riesgo de úlceras corneales.',
    symptoms: ['PRURITO OCULAR INTENSO E INCOERCIBLE ("PICOR DE OJOS QUE DESESPERA")', 'AFECTACIÓN ESTRICTAMENTE BILATERAL Y SIMÉTRICA', 'Inyección conjuntival difusa rosada o rojiza con quemosis marcada', 'Secreción acuosa o mucosa filante blanquecina en cordones', 'Frotado ocular vigoroso continuo', 'Edema palpebral matutino bilateral', 'En Queratoconjuntivitis Vernal:', '- PAPILAS GIGANTES EN EMPEDRADO ("cobblestone") en la conjuntiva tarsal superior', '- Puntos de Horner-Trantas (infiltrados eosinofílicos gelatinosos en el limbo esclerocorneal)', '- Úlcera en escudo corneal por fricción mecánica'],
    redFlags: ['Frotado ocular compulsivo crónico en niños ("eye-rubbing"): FACTOR DESENCADENANTE PRINCIPAL DE QUERATOCONO Y ECTASIA CORNEAL'],
    criteria: 'Prurito ocular bilateral intenso con inyección conjuntival, secreción mucosa y papilas tarsales.',
    labTests: ['Pruebas cutáneas de alergia (Prick test) o IgE específica en sangre'],
    imaging: ['Biomicroscopía con eversión del párpado superior obligatoria'],
    differential: ['Conjuntivitis viral', 'Blefaritis alérgica de contacto', 'Síndrome de ojo seco'],
    firstLine: [
      { drug: 'Antihistamínicos tópicos con estabilizadores de mastocitos de acción dual: Olopatadina al 0.1% o 0.2% colirio', dose: 'Olopatadina 0.2% 1 gota en cada ojo una vez al día (o al 0.1% cada 12 horas)', route: 'Oftálmica tópica', freq: 'c/12-24h', notes: 'Fármacos de primera elección por su rapidez de acción (minutos) y efecto preventivo prolongado; alternativas: Ketotifeno o Azelastina' },
      { drug: 'Compresas frías sobre párpados cerrados y lágrimas artificiales frías sin conservantes', dose: 'Aplicar según necesidad de prurito', route: 'Tópica', freq: 'Frecuente', notes: 'Alivian la inflamación y lavan los alérgenos presentes en la superficie ocular' }
    ],
    alternatives: [
      { drug: 'Corticoides tópicos "soft" de superficie: Loteprednol al 0.2% o Fluorometolona', dose: '1 gota cada 8 horas por tandas cortas de 5 a 7 días', route: 'Oftálmica tópica', freq: 'c/8h x 5-7 días', notes: 'SOLO en brotes severos agudos no controlados; riesgo de inducir glaucoma o catarata si se abusa' },
      { drug: 'Inmunomoduladores tópicos: Ciclosporina A al 0.1% o Tacrolimus ungüento', dose: 'Aplicación cada 12 horas', route: 'Tópica oftálmica', freq: 'c/12h', notes: 'Tratamiento de elección a largo plazo en Queratoconjuntivitis Vernal grave ahorrador de corticoides' }
    ],
    nonPharm: ['PROHIBICIÓN ESTRICTA DE FROTARSE LOS OJOS', 'Gafas de sol envolventes al aire libre y purificadores de aire en dormitorios'],
    nursingCare: ['ADVERTENCIA DE ORO DE ENFERMERÍA: "¡NO SE FROTE LOS OJOS!": Explicar enfáticamente al niño y a sus padres que frotarse vigorosamente los ojos con los nudillos libera más histamina empeorando el picor, pero sobre todo DEFORMA LA CÓRNEA PROVOCANDO QUERATOCONO Y ASTIGMATISMO IRREVERSIBLE', 'Técnica de alivio no traumático: ante un ataque de picor, aplicar compresas heladas o gotas de suero fisiológico frío de la nevera en lugar de rascarse', 'Avisar sobre el peligro de automedicarse con colirios con corticoides (Dexametasona): su venta libre ha causado cataratas y ceguera por glaucoma esteroideo en niños']
  },
  {
    number: 468,
    id: 'diag-468',
    title: 'Queratitis bacteriana y Úlcera corneal infecciosa',
    cie10: 'H16.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección bacteriana destructiva grave del estroma corneal, que constituye una verdadera emergencia oftalmológica con riesgo inminente de perforación corneal y ceguera. Causada con frecuencia por Pseudomonas aeruginosa (especialmente en portadores de lentes de contacto blandos), Staphylococcus aureus y Streptococcus pneumoniae tras microtraumatismos corneales.',
    symptoms: ['DOLOR OCULAR SEVERO, AGUDO Y PUNZANTE en el ojo afectado', 'FOTOFOBIA INTENSA Y BLEFAROESPASMO (imposibilidad para abrir el párpado a la luz)', 'DISMINUCIÓN MARCADA DE LA AGUDEZA VISUAL', 'OJO ROJO CON INYECCIÓN CILIAR O PERIQUERÁTICA PROFUNDA ("anillo violáceo perilesional")', 'INFILTRADO ESTROMAL CORNEAL BLANQUECINO O GRISÁCEO OPACO DENTRO DE LA CÓRNEA', 'DEFECTO EPITELIAL suprayacente que TIÑE CON FLUORESCEÍNA VERDE bajo luz azul de cobalto', 'HIPOPIÓN: presencia de un nivel horizontal de pus blanquecino estéril en la cámara anterior del ojo'],
    redFlags: ['PROGRESIÓN A PERFORACIÓN CORNEAL CON HERNIA DEL IRIS Y ENDOFTALMITIS FULMINANTE (frecuente en infección por Pseudomonas aeruginosa en 24-48 horas)'],
    criteria: 'Infiltrado estromal corneal blanco con defecto epitelial captante de fluoresceína y dolor ocular severo.',
    labTests: ['Raspado corneal estéril con espátula de Kimura para frotis con tinción de Gram y cultivo en agar sangre, agar chocolate y Sabouraud con antibiograma urgente'],
    imaging: ['Biomicroscopía con lámpara de hendidura y tinción con fluoresceína'],
    differential: ['Queratitis por Herpes simple (úlcera dendrítica)', 'Queratitis micótica por Fusarium o Aspergillus', 'Queratitis por Acanthamoeba (en usuarios de lentes de contacto)'],
    firstLine: [
      { drug: 'Fluorquinolonas tópicas de 4ta generación en monoterapia: Moxifloxacino al 0.5% colirio', dose: 'Dosis de choque: 1 gota CADA 15 A 30 MINUTOS durante las primeras 6 a 12 horas, luego 1 gota CADA HORA día y noche las primeras 48 horas, espaciando según respuesta clínica', route: 'Oftálmica tópica intensiva', freq: 'c/15-60 min día y noche', notes: 'Tratamiento antibiótico empírico intensivo de amplio espectro; no suspender las tomas nocturnas' },
      { drug: 'Colirios reforzados magistrales combinados (en úlceras grandes o centrales graves)', dose: 'Vancomicina reforzada (50 mg/mL) alternada con Ceftazidima reforzada (50 mg/mL) o Tobramicina reforzada (14 mg/mL) cada hora', route: 'Oftálmica tópica', freq: 'Horario estricto', notes: 'Máxima cobertura contra SAMR y Pseudomonas' }
    ],
    alternatives: [
      { drug: 'Colirio ciclopléjico / midriático: Atropina 1% o Ciclopentolato 1%', dose: '1 gota cada 8 a 12 horas', route: 'Oftálmica tópica', freq: 'c/8-12h', notes: 'Alivia el espasmo ciliar doloroso y previene sinequias posteriores' },
      { drug: 'Queratoplastia penetrante terapéutica (Trasplante de córnea de urgencia)', dose: 'Reemplazo quirúrgico corneal', route: 'Quirúrgico', freq: 'Urgente', notes: 'Ante perforación corneal inminente o refractariedad médica' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA DE USAR PARCHES OCULARES OCLUSIVOS (el calor y la oscuridad favorecen la proliferación bacteriana y la necrosis estromal)'],
    nursingCare: ['CUMPLIMIENTO MILIMÉTRICO DE LA DOSIS DE CHOQUE: Administrar el colirio antibiótico estrictamente cada hora día y noche sin saltarse ninguna toma nocturna en las primeras 48 horas para salvar la córnea', 'CONTRAINDICACIÓN ABSOLUTA DE CORTICOIDES EN FASE ACTIVA: Jamás instilar colirios con corticoides en una úlcera bacteriana activa sin autorización del oftalmólogo; los esteroides inhiben las colagenasas destruyendo la córnea y provocando su perforación inmediata', 'Educación a usuarios de lentes de contacto: NUNCA dormir con lentes de contacto puestos ni lavarlos con agua del grifo o saliva']
  },
  {
    number: 469,
    id: 'diag-469',
    title: 'Queratitis por Virus del Herpes Simple (Úlcera dendrítica herpética)',
    cie10: 'H19.1 / B00.5',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección corneal superficial producida por la reactivación del Virus del Herpes Simple tipo 1 (VHS-1) acantonado en el ganglio del nervio trigémino. Se caracteriza patognomónicamente por una úlcera epitelial ramificada en forma de "árbol o helecho" con bulbos terminales (úlcera dendrítica) y por una hipoestesia corneal marcada.',
    symptoms: ['Dolor ocular moderado o sensación de cuerpo extraño/arenilla en un solo ojo (típicamente unilateral)', 'Fotofobia marcada y lagrimeo constante', 'Inyección ciliar o periquerática moderada', 'HIPOESTESIA O ANESTESIA CORNEAL MARCADA (al tocar suavemente la córnea periférica con una brizna de algodón estéril, el paciente apenas siente molestia por denervación sensitiva)', 'HALLAZGO PATOGNOMÓNICO CON TINCIÓN DE FLUORESCEÍNA:', '- ÚLCERA EPITELIAL DENDRÍTICA: lesión lineal ramificada arboriforme ("en ramas de árbol con brotes o bulbos terminales")', '- Tinte verde brillante bajo luz azul de cobalto en la lámpara de hendidura'],
    redFlags: ['ADMINISTRACIÓN INADVERTIDA DE CORTICOIDES TÓPICOS: CONTRAINDICACIÓN MORTAL; transforma la úlcera dendrítica en una ÚLCERA GEOGRÁFICA GIGANTE en mapa ameboide con necrosis estromal masiva y perforación'],
    criteria: 'Visualización de la úlcera dendrítica ramificada con bulbos terminales teñida con fluoresceína e hipoestesia corneal.',
    labTests: ['Diagnóstico fundamentalmente clínico; raspado corneal para PCR de VHS-1 si hay duda diagnóstica'],
    imaging: ['Biomicroscopía con tinción con fluoresceína'],
    differential: ['Queratitis bacteriana', 'Queratitis por herpes zóster oftálmico (pseudodendritas más anchas sin bulbos terminales verdaderos)', 'Queratitis por Acanthamoeba'],
    firstLine: [
      { drug: 'Ganciclovir oftálmico en gel al 0.15% o Aciclovir pomada oftálmica al 3%', dose: 'Ganciclovir gel 1 aplicación en el fondo de saco conjuntival 5 veces al día hasta la epitelización completa (7-10 días), luego 3 veces al día por 7 días más', route: 'Oftálmica tópica', freq: '5 veces/día', notes: 'Antiviral tópico de primera elección; alta eficacia con mínima toxicidad epitelial corneal' }
    ],
    alternatives: [
      { drug: 'Valaciclovir o Aciclovir oral', dose: 'Valaciclovir 500 mg VO cada 12 horas (o Aciclovir 400 mg VO 5 veces al día) por 7 a 10 días', route: 'VO', freq: 'Según pauta', notes: 'Indicado si hay intolerancia a pomadas tópicas, queratitis estromal o pacientes inmunodeprimidos' }
    ],
    nonPharm: ['Lágrimas artificiales sin conservantes para favorecer la reepitelización'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA DE ENFERMERÍA: TERMINANTEMENTE PROHIBIDO EL USO DE COLIRIOS CON CORTICOIDES EN ÚLCERAS CORNEALES DENDRÍTICAS HERPÉTICAS; el uso de corticoides multiplica la replicación viral y convierte la lesión en una úlcera geográfica mutilante', 'Test de sensibilidad corneal de enfermería: tocar muy suavemente la córnea sana y la afecta con una torunda de algodón estéril estirada; la ausencia de parpadeo reflejo en el ojo enfermo orienta a etiología herpética', 'Instruir al paciente sobre la cronicidad y recurrencia: el virus permanece latente en el ganglio del trigémino de por vida y puede reactivarse ante periodos de estrés, fiebre o exposición solar intensa']
  },
  {
    number: 470,
    id: 'diag-470',
    title: 'Blefaritis crónica y Disfunción de glándulas de Meibomio (DGM)',
    cie10: 'H01.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación bilateral crónica, recidivante y común del borde libre palpebral, frecuentemente subdiagnosticada. Se clasifica en Blefaritis Anterior (estafilocócica o seborreica en la base de las pestañas) y Blefaritis Posterior o Disfunción de Glándulas de Meibomio (DGM: obstrucción y alteración lipídica de las glándulas meibomianas), siendo la causa más común de ojo seco evaporativo.',
    symptoms: ['Ardor, escozor y quemazón ocular crónica que empeora notablemente por las mañanas al despertar', 'Sensación continua de arenilla o cuerpo extraño en ambos ojos', 'Bordes palpebrales eritematosos ("ojos llorosos con bordes rojos")', 'Costras amarillentas duras tipo collarete en la base de las pestañas (forma estafilocócica) o escamas grasientas casposas (forma seborreica)', 'Pérdida de pestañas (madarosis) o crecimiento anómalo hacia adentro (triquiasis)', 'En DGM: orificios de glándulas de Meibomio taponados por gotas de grasa espesa ("como pasta de dientes al exprimir")', 'Película lagrimal inestable y espumosa con ojo seco evaporativo secundario'],
    redFlags: ['Evolución a orzuelos y chalaziones de repetición', 'Ulceraciones marginales catarrales corneales por hipersensibilidad a toxinas estafilocócicas'],
    criteria: 'Inspección del borde palpebral en lámpara de hendidura con tiempo de ruptura lagrimal (BUT) acortado (<10 seg).',
    labTests: ['Examen microscópico de pestañas epiladas si se sospecha infestación por Demodex folliculorum'],
    imaging: ['Meibografía infrarroja (evalúa la atrofia de glándulas de Meibomio)'],
    differential: ['Conjuntivitis bacteriana aguda', 'Síndrome de ojo seco puro acuodeficiente', 'Carcinoma sebáceo palpebral (sospechar ante blefaritis estrictamente unilateral refractaria en ancianos)'],
    firstLine: [
      { drug: 'HIGIENE PALPEBRAL DIARIA EN TRES PASOS (PILAR ABSOLUTO Y DE POR VIDA DEL TRATAMIENTO)', dose: '- Paso 1: Calor local húmedo sobre párpados cerrados durante 5 a 10 minutos (antifaz de gel o compresas tibias a 40 °C para derretir la grasa meibomiana condensada)', route: 'Higiene física palpebral', freq: 'c/12-24h diario', notes: '- Paso 2: Masaje palpebral vertical con la yema del dedo (de arriba hacia abajo en párpado superior, y de abajo hacia arriba en párpado inferior) para exprimir las glándulas; - Paso 3: Limpieza del borde de las pestañas con toallitas o espumas específicas con aceite de árbol de té' },
      { drug: 'Lágrimas artificiales con lípidos para ojo seco evaporativo', dose: '1 gota en ambos ojos 4 a 6 veces al día', route: 'Oftálmica tópica', freq: 'c/4-6h', notes: 'Reconstituyen la capa lipídica deficiente de la lágrima evitando la evaporación rápida' }
    ],
    alternatives: [
      { drug: 'Azitromicina tópica al 1.5% colirio o Doxiciclina oral a dosis bajas', dose: 'Doxiciclina 50 a 100 mg VO al día durante 6 a 12 semanas (o Azitromicina colirio cada 12h x 3 días)', route: 'VO / Tópica', freq: 'c/24h x 2 meses', notes: 'Inhibe la lipasa bacteriana, mejora la fluidez del meibum y frena la inflamación; evitar en niños y gestantes' }
    ],
    nonPharm: ['Suplementación oral con Ácidos Grasos Omega-3 (1000 a 2000 mg/día) para mejorar la calidad del sebo', 'Uso de humidificadores ambientales'],
    nursingCare: ['EDUCACIÓN SANITARIA DEMOSTRATIVA DE HIGIENE PALPEBRAL: Enseñar pacientemente la técnica de los tres pasos (calor, masaje exprimidor y limpieza) con un espejo delante; recalcar que es un tratamiento crónico higiénico similar al cepillado dental que debe mantenerse para evitar recaídas', 'Explicar que la blefaritis no se cura con un frasco de gotas antibióticas en 5 días; el éxito depende de la constancia del calor y la limpieza física', 'Vigilancia en ancianos con blefaritis asimétrica rebelde que pierden pestañas: derivar para biopsia palpebral para descartar adenocarcinoma sebáceo']
  },
  {
    number: 471,
    id: 'diag-471',
    title: 'Orzuelo agudo (Externo e Interno)',
    cie10: 'H00.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección bacteriana aguda focal estafilocócica (Staphylococcus aureus en >90%) de una o varias glándulas del párpado. El orzuelo externo afecta a las glándulas sebáceas de Zeis o sudoríparas de Moll en el folículo piloso de una pestaña; el orzuelo interno afecta a una glándula de Meibomio en la placa tarsal profunda.',
    symptoms: ['NÓDULO ERITEMATOSO, MUY DOLOROSO Y AGUDO EN EL PÁRPADO con calor local marcado', 'Tumefacción palpebral localizada que puede ocasionar edema de todo el párpado', 'En orzuelo externo: pústula amarillenta visible centrada en el borde libre palpebral junto a una pestaña', 'En orzuelo interno: masa inflamatoria dolorosa palpable profunda en el tarso, visible al evertir el párpado como una elevación amarillenta bajo la conjuntiva', 'Sensación de cuerpo extraño y epífora leve'],
    redFlags: ['Progresión a Celulitis Preseptal difusa con eritema masivo de toda la hemicara y fiebre (requiere antibióticos orales o endovenosos urgentes)'],
    criteria: 'Inspección de nódulo eritematoso agudo sumamente doloroso en el borde palpebral o cara conjuntival.',
    labTests: ['Habitualmente no requeridos'],
    imaging: ['No indicada'],
    differential: ['Chalazión (nódulo crónico duro indoloro sin signos inflamatorios agudos)', 'Blefaritis aguda focal', 'Dacriocistitis aguda (canto interno)', 'Carcinoma sebáceo'],
    firstLine: [
      { drug: 'Compresas húmedas tibias locales (PILAR TERAPÉUTICO FUNDAMENTAL)', dose: 'Aplicar compresas limpias humedecidas en agua caliente templada sobre el párpado cerrado durante 10 a 15 minutos, 3 a 4 veces al día', route: 'Física tópica', freq: '3-4 veces/día', notes: 'Licúa los lípidos glandulares, favorece la vasodilatación y promueve el drenaje purulento espontáneo en 48-72h' },
      { drug: 'Tobramicina al 0.3% o Ácido Fusídico al 1% en pomada oftálmica', dose: 'Aplicar una pequeña tira de pomada en el fondo de saco y sobre el nódulo cada 8 horas durante 7 días', route: 'Oftálmica tópica', freq: 'c/8h x 7 días', notes: 'Previene la diseminación bacteriana a folículos adyacentes' }
    ],
    alternatives: [
      { drug: 'Cefalexina o Amoxicilina/Clavulánico oral', dose: '500 mg VO cada 8 horas durante 7 días', route: 'VO', freq: 'c/8h x 7 días', notes: 'Indicado si hay celulitis preseptal incipiente o adenopatía preauricular asociada' }
    ],
    nonPharm: ['PROHIBIDO EXPRIMIR, PELLIZCAR O PUNZAR EL ORZUELO con agujas o los dedos'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: Educar al paciente a NUNCA "apretar o reventar el orzuelo como si fuera un grano"; la compresión mecánica forzada puede propagar los émbolos sépticos de Staphylococcus aureus por vía venosa retrógrada hacia el seno cavernoso craneal', 'Epilación de la pestaña: colaborar retirando la pestaña comprometida con pinza estéril si hay un orzuelo externo maduro fluctuante para permitir la salida del pus', 'Suspensión del maquillaje de ojos y lentes de contacto hasta la resolución completa']
  },
  {
    number: 472,
    id: 'diag-472',
    title: 'Chalazión (Granuloma lipogranulomatoso de Meibomio)',
    cie10: 'H00.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación granulomatosa crónica, lipídica, estéril y no infecciosa de una glándula de Meibomio, producida por la obstrucción idiopática de su conducto excretor con retención de secreciones sebáceas que escapan al estroma tarsal adyacente. Se presenta como un nódulo firme e indoloro en el espesor del párpado.',
    symptoms: ['NÓDULO O BULTO PALPEBRAL DURO, FIRME Y REDONDEADO EN EL ESPESOR DEL TARSO', 'TOTALMENTE INDOLORO Y SIN CALOR LOCAL (a diferencia del orzuelo que es agudo y doloroso)', 'Piel suprayacente de aspecto normal, móvil y no adherida', 'Tamaño variable: desde pocos milímetros hasta un guisante (puede deformar el párpado)', 'Visión borrosa o astigmatismo corneal inducido si el chalazión es grande y presiona directamente sobre la córnea', 'Al evertir el párpado: se observa una masa sobreelevada blanco-grisácea o rojiza en la conjuntiva tarsal'],
    redFlags: ['CHALAZIÓN RECIDIVANTE EN EL MISMO LUGAR EN UN ADULTO MAYOR: ALERTA ROJA DE CARCINOMA DE GLÁNDULAS SEBÁCEAS OCULTO (requiere biopsia oncológica obligatoria)'],
    criteria: 'Hallazgo de nódulo indoloro de evolución crónica (semanas o meses) en el espesor palpebral.',
    labTests: ['Biopsia con anatomopatología si recidiva en el mismo sitio en ancianos'],
    imaging: ['No indicada'],
    differential: ['Orzuelo agudo interno (doloroso y eritematoso)', 'Carcinoma de glándulas sebáceas', 'Quiste de inclusión epidérmico', 'Granuloma piogénico'],
    firstLine: [
      { drug: 'Compresas calientes y masaje palpebral firme continuado', dose: 'Compresas tibias húmedas 10-15 minutos seguidas de masaje firme vertical sobre el bulto dos veces al día durante 4 a 8 semanas', route: 'Tópica física', freq: 'c/12h x 1-2 meses', notes: 'Logra la resolución completa en más del 50% de los chalaziones recientes sin necesidad de cirugía' }
    ],
    alternatives: [
      { drug: 'Infiltración intralesional de Corticoides: Triamcinolona acetónido', dose: '0.1 a 0.2 mL de suspensión de triamcinolona (40 mg/mL) inyectados con aguja fina dentro del nódulo', route: 'Inyección intralesional', freq: 'Sesión única', notes: 'Resuelve el 75-80% de casos; vigilar despigmentación cutánea local en personas de piel oscura' },
      { drug: 'Incisión y Curetaje quirúrgico con pinza de chalazión', dose: 'Cirugía menor ambulatoria bajo anestesia local: incisión vertical por la cara conjuntival interna y curetaje del material lipogranulomatoso', route: 'Quirúrgico menor', freq: 'Procedimiento definitivo', notes: 'Tratamiento curativo definitivo de elección si no responde a medidas conservadoras' }
    ],
    nonPharm: ['Control estricto de la blefaritis o rosácea subyacente'],
    nursingCare: ['TRANQUILIZAR SOBRE LA NATURALEZA NO INFECCIOSA: Explicar al paciente que el chalazión no es una infección bacteriana activa ni un "tumor maligno", sino un poro sebáceo taponado con grasa solidificada', 'Instrucción post-curetaje quirúrgico: colocar pomada oftálmica antibiótica con parche compresivo sobre el ojo durante 12-24 horas para prevenir la formación de hematomas palpebrales', 'Vigilancia en adultos mayores: registrar con precisión la localización anatómica si se repite en el mismo párpado para derivar a biopsia']
  },
  {
    number: 473,
    id: 'diag-473',
    title: 'Pterigión primario y recidivante (Carnosidad ocular)',
    cie10: 'H11.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Proliferación fibrovascular elastótica benigna, triangular y alada de la conjuntiva bulbar que invade progresivamente la córnea transparente sobrepasando el limbo esclerocorneal y destruyendo la membrana de Bowman. Su etiología está directamente vinculada a la exposición crónica acumulativa a radiación ultravioleta (UVB), viento seco, polvo y clima andino o costero (altísima prevalencia en el Perú).',
    symptoms: ['PRESENCIA VISIBLE DE UNA "CARNOSIDAD" TRIANGULAR BLANCO-ROSADA vascularizada que avanza desde el lado nasal (más común) hacia el centro de la córnea', 'Sensación continua de arenilla, cuerpo extraño, quemazón y sequedad ocular', 'Enrojecimiento ocular e inflamación recurrente tras la exposición al sol, polvo o viento', 'ASTIGMATISMO CORNEAL INDUCIDO por la tracción mecánica que ejerce el vértice de la masa sobre la superficie corneal, provocando visión borrosa progresiva', 'Pérdida visual severa irreversible si el vértice del pterigión alcanza o cubre el eje visual pupilar central'],
    redFlags: ['Crecimiento acelerado atípico, ulceración o pérdida de movilidad que sugiera Neoplasia Intraepitelial Corneoconjuntival (OSSN / Carcinoma epidermoide conjuntival)'],
    criteria: 'Inspección en lámpara de hendidura de pliegue fibrovascular triangular que invade el limbo y la córnea.',
    labTests: ['Histopatología de la pieza resecada (degeneración elastótica del colágeno)'],
    imaging: ['Biomicroscopía y topografía corneal (cuantifica el astigmatismo irregular inducido)'],
    differential: ['Pseudopterigión (adherencia conjuntival cicatrizal postraumática)', 'Pingüécula (no invade la córnea)', 'Neoplasia escamosa de la superficie ocular (OSSN)'],
    firstLine: [
      { drug: 'Tratamiento sintomático de formas leves no invasivas: Lágrimas artificiales lubricantes', dose: 'Instilar lágrimas de carboximetilcelulosa o ácido hialurónico 1 gota 4 a 6 veces al día', route: 'Oftálmica tópica', freq: 'c/4-6h', notes: 'Alivian la irritación y disminuyen la fricción mecánica' },
      { drug: 'EXTIRPACIÓN QUIRÚRGICA CON AUTOMINJERTO CONJUNTIVAL LIMBAR (ESTÁNDAR DE ORO)', dose: 'Resección completa de la cabeza y cuerpo del pterigión con colocación de un autoinjerto de conjuntiva bulbar sana superior fijado con pegamento biológico de fibrina o suturas reabsorbibles', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento curativo', notes: 'Técnica de referencia mundial; reduce la tasa de recidiva a <2-5% (en comparación con la técnica antigua de esclera desnuda que recidivaba en >50-70%)' }
    ],
    alternatives: [
      { drug: 'Corticoides tópicos suaves (Fluorometolona 0.1% colirio)', dose: '1 gota cada 8 horas por 3 a 5 días durante fases inflamatorias agudas', route: 'Oftálmica tópica', freq: 'Puntual corto', notes: 'Solo durante episodios de pterigión muy inflamado' }
    ],
    nonPharm: ['USO SISTEMÁTICO DE GAFAS DE SOL CON FILTRO UV 100% (UV400) envolventes y sombreros de ala ancha', 'Uso de gafas de protección industrial en trabajadores agrícolas, mineros o de construcción'],
    nursingCare: ['PREVENCIÓN COMUNITARIA EN EL PERÚ: Educar a las poblaciones de la sierra andina y costa norte peruana (zonas con índice de radiación UV extremo >12-14) sobre la necesidad vital de usar sombreros de ala ancha y lentes oscuros con protección certificada desde la infancia', 'Cuidados postoperatorios de autoinjerto conjuntival: TERMINANTEMENTE PROHIBIDO FROTARSE EL OJO OPERADO durante el primer mes para evitar el desprendimiento traumático del injerto; usar oclusor rígido nocturno', 'Instruir que las gotas descongestionantes de venta libre ("colirios rojos" con vasoconstrictores como Nafazolina) generan efecto rebote e irritación crónica']
  },
  {
    number: 474,
    id: 'diag-474',
    title: 'Pingüécula y Pingueculitis aguda',
    cie10: 'H11.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Lesión degenerativa benigna común y asintomática de la conjuntiva bulbar caracterizada por la alteración y agregación elastótica del colágeno estromal con depósito de material hialino y lipídico amarillento. A diferencia del pterigión, la pingüécula NUNCA invade la córnea y se mantiene confinada exclusivamente a la conjuntiva limbar.',
    symptoms: ['Pequeño nódulo o placa sobreelevada amarillenta o blanquecina en la conjuntiva bulbar adyacente al limbo', 'Ubicación común en el sector nasal (con menor frecuencia temporal) en la hendidura palpebral', 'Habitualmente asintomática sin afectar la visión', 'PINGUECULITIS AGUDA: enrojecimiento focal brusco, inflamación, vascularización congestiva sobre la placa amarillenta, con sensación de arenilla y quemazón tras exposición a sol, viento seco o polvo'],
    redFlags: ['Confusión del paciente que teme que "le crezca hacia la niña del ojo" (la pingüécula no avanza sobre la córnea)'],
    criteria: 'Hallazgo clínico de placa amarillenta sobreelevada en conjuntiva perilímbica que no cruza a la córnea.',
    labTests: ['No requeridos'],
    imaging: ['Biomicroscopía con lámpara de hendidura'],
    differential: ['Pterigión incipiente (el pterigión sí cruza el limbo sobre la córnea)', 'Flicténula conjuntival', 'Neoplasia escamosa conjuntival'],
    firstLine: [
      { drug: 'Lágrimas artificiales lubricantes en colirio sin conservantes', dose: '1 gota 4 a 6 veces al día', route: 'Oftálmica tópica', freq: 'c/4-6h', notes: 'Alivian la fricción del párpado sobre el relieve de la pingüécula' },
      { drug: 'Fluorometolona al 0.1% o Loteprednol colirio (en Pingueculitis aguda)', dose: '1 gota cada 8 horas durante 3 a 5 días únicamente', route: 'Oftálmica tópica', freq: 'c/8h x 3-5 días', notes: 'Desinflama rápidamente el episodio agudo; suspender tras ceder el enrojecimiento' }
    ],
    alternatives: [
      { drug: 'Resección quirúrgica simple ambulatoria', dose: 'Exéresis conjuntival con anestesia local', route: 'Quirúrgico menor', freq: 'Procedimiento puntual', notes: 'Indicada únicamente si la pingüécula es muy abultada y causa queratitis por desecación adyacente (dellens) o por motivos estéticos' }
    ],
    nonPharm: ['Fotoprotección ocular continua con gafas de sol con filtro UV400 al aire libre'],
    nursingCare: ['DIFERENCIACIÓN CLARA FRENTE AL PTERIGIÓN: Tranquilizar al paciente asegurándole que "esta manchita amarilla NO es una carnosidad que invada la córnea ni lo dejará ciego"; no requiere cirugía en la inmensa mayoría de los casos', 'Promover el uso de lágrimas artificiales antes de salir a ambientes con polvo, viento o aire acondicionado intenso', 'Desaconsejar el uso repetido de colirios blanqueadores vasoconstrictores']
  },
  {
    number: 475,
    id: 'diag-475',
    title: 'Síndrome de ojo seco (Queratoconjuntivitis seca)',
    cie10: 'H04.1',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Enfermedad multifactorial crónica de la superficie ocular caracterizada por una pérdida de la homeostasis de la película lagrimal y que va acompañada de síntomas oculares, en la que la inestabilidad e hiperosmolaridad de la película lagrimal, la inflamación y el daño de la superficie ocular desempeñan un papel etiológico. Se divide en Ojo Seco Evaporativo (el más frecuente 80%, por DGM) y Acuodeficiente (por disfunción lagrimal / Síndrome de Sjögren).',
    symptoms: ['SENSACIÓN CONTINUA DE CUERPO EXTRAÑO, ARENILLA O PINCHAZOS EN AMBOS OJOS', 'Ardor, quemazón y escozor que empeora a lo largo del día y con el uso de pantallas digitales', 'PARADOJA DEL OJO SECO: "EPÍFORA O LAGRIMEO REFLEJO PARADÓJICO" (el paciente llora con frecuencia por irritación corneal aguda provocada por la desecación)', 'Visión borrosa fluctuante que mejora transitoriamente de forma inmediata tras parpadear', 'Dificultad o molestia intolerable para abrir los ojos por las mañanas', 'Fatiga ocular marcada e intolerancia al uso de lentes de contacto'],
    redFlags: ['Queratopatía filamentosa o úlceras tróficas corneales por desecación extrema en Síndrome de Sjögren'],
    criteria: 'Criterios TFOS DEWS II: síntomas (cuestionario OSDI) + al menos un signo de homeostasis alterada (BUT <10 seg, tinción con fluoresceína o hiperosmolaridad).',
    labTests: ['Tiempo de Ruptura de la Película Lagrimal (TBUT / BUT con fluoresceína: anormal <10 segundos)', 'Test de Schirmer sin anestesia (mide secreción acuosa: anormal <5-10 mm a los 5 minutos)', 'Osmolaridad lagrimal (>308 mOsm/L) y marcadores autoinmunes (ANA, anti-Ro/SSA y anti-La/SSB para Sjögren)'],
    imaging: ['Meibografía y tinción con verde de lisamina'],
    differential: ['Conjuntivitis alérgica estacional', 'Blefaritis crónica pura', 'Toxicidad por conservantes de colirios (cloruro de benzalconio)'],
    firstLine: [
      { drug: 'Lágrimas artificiales lubricantes tópicas SIN CONSERVANTES', dose: 'Instilar 1 gota en ambos ojos cada 2 a 4 horas a demanda (derivados de Ácido Hialurónico al 0.15-0.4%, Carboximetilcelulosa o Trehalosa)', route: 'Oftálmica tópica', freq: 'c/2-4h de por vida', notes: 'Pilar absoluto del tratamiento; usar formulaciones libres de conservantes si se aplican más de 4 veces al día' },
      { drug: 'Geles o pomadas oftálmicas lubricantes nocturnas (con carbómero o vaselina)', dose: 'Aplicar una pequeña tira antes de acostarse', route: 'Oftálmica tópica', freq: 'c/24h nocturna', notes: 'Protegen la córnea durante el sueño en pacientes con cierre incompleto' }
    ],
    alternatives: [
      { drug: 'Ciclosporina A al 0.05% o 0.1% colirio (inmunomodulador antiinflamatorio)', dose: '1 gota en cada ojo cada 12 horas durante al menos 6 meses', route: 'Oftálmica tópica', freq: 'c/12h continuado', notes: 'Aumenta la producción natural de lágrimas y regenera las células caliciformes en ojo seco moderado a severo' },
      { drug: 'Oclusión de puntos lagrimales con Tapones de Silicona (Punctal plugs)', dose: 'Inserción ambulatoria de pequeños tapones en los puntos lagrimales inferiores', route: 'Procedimiento de consultorio', freq: 'Permanente', notes: 'Retiene la lágrima natural en la superficie ocular en formas acuodeficientes' }
    ],
    nonPharm: ['REGLA DEL 20-20-20 EN EL USO DE PANTALLAS: cada 20 minutos de pantalla, mirar a un objeto a 20 pies (6 metros) de distancia durante 20 segundos parpadeando voluntariamente', 'Humidificadores ambientales en el hogar y evitar la exposición directa a salidas de aire acondicionado'],
    nursingCare: ['EXPLICAR LA PARADOJA DEL LAGRIMEO AL PACIENTE: Aclarar al paciente desconcertado por qué tiene "ojo seco" si le lagrimea todo el tiempo; explicar que la lágrima es de mala calidad (sin lípidos) y se evapora en segundos, lo que irrita la córnea y dispara un lagrimeo reflejo acuoso de mala calidad que no lubrica', 'Enseñar la técnica de parpadeo consciente: al mirar el ordenador o móvil la frecuencia de parpadeo cae de 18 a 4 veces por minuto secando el ojo', 'Revisión de colirios: verificar que el paciente no esté usando colirios con Cloruro de Benzalconio (BAK) crónicamente, ya que este conservante destruye el epitelio corneal']
  },
  {
    number: 476,
    id: 'diag-476',
    title: 'Uveítis anterior aguda (Iridociclitis aguda)',
    cie10: 'H20.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación aguda del tracto uveal anterior (iris y cuerpo ciliar), frecuentemente asociada al antígeno HLA-B27 y a espondiloartropatías seronegativas (espondilitis anquilosante, artritis psoriásica, enfermedad inflamatoria intestinal). Se caracteriza por dolor ocular profundo, inyección ciliar, miosis espástica y presencia de células inflamatorias en la cámara anterior (efecto Tyndall).',
    symptoms: ['DOLOR OCULAR PROFUNDO, AGUDO Y SORDO en el ojo y la órbita que empeora con la luz', 'FOTOFOBIA CONSENSUAL INTENSA (al iluminar el ojo sano, el paciente experimenta dolor agudo en el ojo enfermo por contracción pupilar refleja)', 'DISMINUCIÓN DE LA AGUDEZA VISUAL (visión borrosa)', 'OJO ROJO CON INYECCIÓN CILIAR O PERIQUERÁTICA PROFUNDA ("halo violáceo o rojizo peri-corneal")', 'PUPILA EN MIOSIS IRREGULAR ESPÁSTICA (por espasmo del esfínter del iris)', 'HALLAZGOS BIOMICROSCÓPICOS:', '- EFECTO TYNDALL POSITIVO: visualización de células inflamatorias flotando en el humor acuoso de la cámara anterior ("como polvo flotando en un haz de luz en una habitación oscura")', '- PRECIPITADOS QUERÁTICOS en el endotelio corneal', '- SINEQUIAS POSTERIORES (adherencias entre el iris y la cara anterior del cristalino que deforman la pupila)'],
    redFlags: ['HIPOPION ESTÉRIL en cámara anterior (frecuente en HLA-B27 positivo y Enfermedad de Behçet)', 'Sinequias posteriores circulares de 360° (seclusión pupilar) con glaucoma secundario por bloqueo'],
    criteria: 'Dolor con fotofobia consensual, inyección ciliar, miosis y presencia de células/flare en cámara anterior.',
    labTests: ['Tipificación del antígeno HLA-B27 (positivo en >50% de uveítis anteriores agudas idiopáticas)', 'Hemograma, PCR, VSG, ANA, factor reumatoide, serología para sífilis (VDRL/FTA-ABS) y descarte de tuberculosis (PPD/Quantiferon)'],
    imaging: ['Radiografía de articulaciones sacroilíacas (descarte de sacroileítis por espondilitis anquilosante) y Rx de tórax'],
    differential: ['Glaucoma agudo de ángulo cerrado (pupila en midriasis media, córnea opaca, PIO muy elevada)', 'Queratitis bacteriana/herpética', 'Conjuntivitis aguda (sin dolor profundo ni pérdida visual)'],
    firstLine: [
      { drug: 'Corticoides tópicos intensivos de alta penetración: Acetato de Prednisolona al 1% o Dexametasona colirio', dose: 'Instilar 1 gota cada 1 a 2 horas durante la fase aguda durante los primeros días, con pauta de reducción muy lenta a lo largo de 4 a 6 semanas', route: 'Oftálmica tópica intensiva', freq: 'c/1-2h de inicio', notes: 'Frena el proceso inflamatorio uveal; el descenso debe ser progresivo para evitar rebotes agudos' },
      { drug: 'Colirios Ciclopléjicos / Midriáticos: Ciclopentolato al 1% o Atropina al 1%', dose: 'Instilar 1 gota cada 8 a 12 horas', route: 'Oftálmica tópica', freq: 'c/8-12h', notes: 'DOBLE EFECTO VITAL: 1. Paraliza el cuerpo ciliar aliviando el dolor atroz; 2. Dilata la pupila rompiendo y previniendo las sinequias posteriores adherentes' }
    ],
    alternatives: [
      { drug: 'Corticoides perioculares (inyección subconjuntival de dexametasona) o Prednisona oral', dose: 'Prednisona 0.5 a 1 mg/kg/día VO en casos severos o bilaterales refractarios a colirios', route: 'VO', freq: 'c/24h matutino', notes: 'Manejo en uveítis severa' }
    ],
    nonPharm: ['Uso de gafas de sol oscuras continuas para mitigar la fotofobia extrema'],
    nursingCare: ['EDUCACIÓN SOBRE EL USO DEL MIDRIÁTICO: Explicar al paciente que la gota ciclopléjica (Ciclopentolato/Atropina) le dejará la pupila dilatada y verá borroso de cerca durante varios días; advertir que esto es ABSOLUTAMENTE NECESARIO para evitar que el iris se quede pegado al cristalino provocando glaucoma', 'Monitoreo estricto de la Presión Intraocular: los corticoides a dosis altas pueden inducir hipertensión ocular esteroidea', 'Interrogatorio de enfermería sobre dolor lumbar inflamatorio matutino en jóvenes: orientar al reumatólogo para descarte de Espondilitis Anquilosante']
  },
  {
    number: 477,
    id: 'diag-477',
    title: 'Uveítis posterior, Coriorretinitis y Toxoplasmosis ocular',
    cie10: 'H30.9 / B58.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación del tracto uveal posterior que compromete la coroides y la retina (coriorretinitis / retinocoroiditis). En el Perú y Latinoamérica, la Toxoplasmosis ocular producida por el parásito Toxoplasma gondii es la causa infecciosa más común (>80% de casos), resultante de la reactivación de quistes tisulares congénitos o adquiridos.',
    symptoms: ['Disminución indolora o subaguda de la agudeza visual en el ojo afectado', 'Aparición masiva de miodesopsias ("moscas volantes, humo o telarañas")', 'Visión borrosa en niebla o neblina', 'Escotomas paracentrales o centrales en el campo visual', 'AUSENCIA DE DOLOR OCULAR Y OJO TÍPICAMENTE BLANCO (salvo si coexiste uveítis anterior)', 'FONDO DE OJO PATOGNOMÓNICO EN TOXOPLASMOSIS:', '- FOCO ACTIVO DE RETINOCOROIDITIS NECROTIZANTE BLANCO-AMARILLENTO CREMOSO DE BORDES DESDIBUJADOS, típicamente adyacente a una cicatriz coriorretiniana antigua hiperpigmentada ("lesión satélite")', '- VITREÍTIS MARCADA SUPRAYACENTE: aspecto en "FARO EN LA NIEBLA" (la luz del oftalmoscopio ilumina el foco blanco a través del vítreo turbio)'],
    redFlags: ['Compromiso directo de la fóvea macular o de la papila óptica (lesión yuxtapapilar de Jensen) con ceguera central permanente'],
    criteria: 'Visualización de foco blanco-amarillento con cicatriz satélite y vitreítis en faro en la niebla.',
    labTests: ['Serología para Toxoplasma gondii (IgG e IgM; la presencia de IgG confirma infección previa)', 'Serología para VIH, Sífilis y Quantiferon-TB'],
    imaging: ['OCT macular y retinografía de campo amplio'],
    differential: ['Retinitis por Citomegalovirus (CMV en VIH con CD4 <50)', 'Sífilis ocular', 'Tuberculosis coroidea', 'Toxocariasis ocular'],
    firstLine: [
      { drug: 'Tratamiento clásico de la Toxoplasmosis Ocular: Sulfadiazina + Pirimetamina + Ácido Folínico', dose: 'Pirimetamina 100 mg de carga VO día 1, luego 25-50 mg/día + Sulfadiazina 1 g VO cada 6 horas + Ácido Folínico (Leucovorina) 15 mg VO 3 veces por semana durante 4 a 6 semanas', route: 'VO', freq: 'Según pauta x 4-6 semanas', notes: 'Terapia clásica de máxima eficacia; el Ácido Folínico es MANDATORIO para prevenir la pancitopenia por pirimetamina' },
      { drug: 'Alternativa preferente moderna: Cotrimoxazol (Sulfametoxazol + Trimetoprima)', dose: 'TMP/SMX 160/800 mg VO cada 12 horas durante 4 a 6 semanas', route: 'VO', freq: 'c/12h x 4-6 semanas', notes: 'Eficacia idéntica a la pauta clásica con menor toxicidad hematológica y mayor disponibilidad en Perú' }
    ],
    alternatives: [
      { drug: 'Corticoides orales: Prednisona oral', dose: '0.5 a 1 mg/kg/día VO iniciando 48 horas DESPUÉS de haber comenzado los antibióticos antiparasitarios', route: 'VO', freq: 'c/24h matutino', notes: 'CONTRAINDICADOS SIN COBERTURA ANTIPARASITARIA; frena la destrucción inflamatoria de la mácula' }
    ],
    nonPharm: ['Educación en higiene alimentaria: consumir carnes bien cocidas y lavar meticulosamente verduras'],
    nursingCare: ['CONTROL HEMATOLÓGICO SEMANAL: Monitorear hemograma completo semanal si el paciente recibe Pirimetamina por riesgo de depresión medular ósea (neutropenia y anemia megaloblástica)', 'REGLA DE LOS CORTICOIDES EN TOXOPLASMOSIS: Jamás administrar corticoides orales solos sin antibióticos activos; los corticoides sin protección antiparasitaria causan una necrosis retiniana fulminante por replicación masiva del parásito', 'Consejería preventiva: evitar el contacto con heces de gatos cachorros y usar guantes al realizar jardinería']
  },
  {
    number: 478,
    id: 'diag-478',
    title: 'Celulitis orbitaria y Celulitis preseptal',
    cie10: 'H05.0 / L03.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección bacteriana del tejido periocular. La Celulitis Preseptal es una infección superficial confinada a los tejidos blandos palpebrales anteriores al septum orbitario. La Celulitis Orbitaria es una emergencia médica grave que compromete los tejidos profundos posteriores al septum dentro de la órbita ósea, originada con mayor frecuencia por la extensión directa de una sinusitis etmoidal bacteriana.',
    symptoms: ['SÍNTOMAS COMUNES: eritema palpebral violáceo intenso, edema palpebral marcado que impide abrir el ojo, calor local y fiebre', 'SIGNOS EXCLUSIVOS Y PATOGNOMÓNICOS DE CELULITIS ORBITARIA POSTSEPTAL (AUSENTES EN PRESEPTAL):', '- PROPTOSIS O EXOFOTOFIA (protrusión hacia afuera del globo ocular)', '- OFTALMOPLEJÍA DOLOROSA (limitación severa de los movimientos oculares con dolor intolerable al mover el ojo)', '- DISMINUCIÓN DE LA AGUDEZA VISUAL Y DEFECTO PUPILAR AFERENTE (afectación compresiva del nervio óptico)', '- Quemosis conjuntival masiva en flictas', 'En Celulitis Preseptal: agudeza visual rigurosamente normal, movimientos oculares libres y pupilas reactivas'],
    redFlags: ['TROMBOSIS SÉPTICA DEL SENO CAVERNOSO (parálisis bilateral de pares craneales III, IV, VI, anestesia en V1, edema bilateral y coma)', 'Absceso subperióstico u orbitario con pérdida visual irreversible'],
    criteria: 'Distinción clínica y confirmación por TC de senos paranasales y órbitas con contraste.',
    labTests: ['Hemocultivos seriados, hemograma con leucocitosis y neutrofilia marcada, PCR y VSG elevadas'],
    imaging: ['TC de órbitas y senos paranasales con contraste intravenoso URGENTE (estándar de oro: confirma sinusitis etmoidal y descarta absceso subperióstico o trombosis)'],
    differential: ['Pseudotumor orbitario inflamatorio idiopático', 'Fístula carótido-cavernosa', 'Rabdomiosarcoma orbitario infantil'],
    firstLine: [
      { drug: 'Celulitis Orbitaria: Antibioticoterapia endovenosa urgente de amplio espectro: Ceftriaxona + Vancomicina', dose: 'Ceftriaxona 2 g EV cada 24 horas + Vancomicina 15-20 mg/kg EV cada 12 horas (o Ampicilina/Sulbactam 3 g EV c/6h)', route: 'EV en hospitalización', freq: 'c/12-24h EV', notes: 'Ingreso hospitalario urgente obligatorio; cubre Streptococcus pneumoniae, S. pyogenes, S. aureus resistente y anaerobios' },
      { drug: 'Celulitis Preseptal leve: Amoxicilina + Ácido Clavulánico oral', dose: 'Adultos: 875/125 mg VO cada 8 horas por 10 días; Pediatría: 80-90 mg/kg/día VO dividido c/8h', route: 'VO', freq: 'c/8h x 10 días', notes: 'Manejo ambulatorio bajo vigilancia estrecha de 24 horas' }
    ],
    alternatives: [
      { drug: 'Drenaje quirúrgico urgente por Otorrinolaringología / Oftalmología', dose: 'Evacuación endoscópica o externa del absceso subperióstico o sinusal', route: 'Quirúrgico de urgencia', freq: 'Procedimiento urgente', notes: 'Indicado si hay absceso orbitario, falta de mejoría a las 48 horas de antibióticos EV o compromiso de la visión' }
    ],
    nonPharm: ['Monitoreo horario estricto de la agudeza visual y reactividad pupilar'],
    nursingCare: ['EVALUACIÓN DE SIGNOS DE ALARMA DE CELULITIS ORBITARIA EN CADA TURNO: Si un paciente con celulitis palpebral presenta dificultad para mover el ojo en alguna dirección, refiere ver doble (diplopía) o disminuye su agudeza visual, AVISAR INMEDIATAMENTE AL MÉDICO (signos de invasión orbitaria profunda)', 'Vigilancia pupilar horaria con linterna de bolsillo: evaluar reflejo fotomotor buscando defecto pupilar aferente de Marcus Gunn (isquemia del nervio óptico por compresión)', 'Administración puntual y estricta de los antibióticos endovenosos en bomba de infusión']
  },
  {
    number: 479,
    id: 'diag-479',
    title: 'Neuritis óptica desmielinizante (Neuritis óptica típica)',
    cie10: 'H46',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Inflamación primaria desmielinizante del nervio óptico, fuertemente asociada a la Esclerosis Múltiple (en más del 50% de los pacientes es el síntoma debut de la enfermedad). Prevalece en mujeres jóvenes de 20 a 45 años, presentándose como una pérdida visual monocular subaguda acompañada de dolor orbitario con los movimientos del ojo.',
    symptoms: ['PÉRDIDA MONOCULAR SUBAGUDA DE LA AGUDEZA VISUAL que progresa a lo largo de horas o pocos días (desde visión borrosa leve hasta pérdida de percepción de formas)', 'DOLOR PERIORBITARIO U OCULAR QUE EMPEORA NOTABLEMENTE CON LOS MOVIMIENTOS OCULARES (en >90% de los pacientes, por tracción del anillo de Zinn sobre la vaina inflamada)', 'DISCROMATOPSIA MARCADA: alteración severa de la visión de los colores desproporcionada a la agudeza visual (LOS COLORES ROJOS SE VEN PÁLIDOS, LAVADOS O APAGADOS)', 'DEFECTO PUPILAR AFERENTE RELATIVO (DPAR / Pupila de Marcus Gunn) en el ojo afectado', 'FONDO DE OJO NORMAL EN EL 65-70% ("Neuritis Óptica Retrobulbar": ni el paciente ve nada, ni el médico ve nada en la papila); en 30% papilitis con edema de papila leve', 'Escotoma central o cecocentral en el campo visual', 'FENÓMENO DE UHToFF: empeoramiento visual transitorio con el calor o la ducha caliente'],
    redFlags: ['Neuritis óptica bilateral simultánea, severa con amaurosis total o mala recuperación: ALERTA DE TRASTORNO DEL ESPECTRO DE NEUROMIELITIS ÓPTICA (NMOSD - anticuerpos anti-AQP4) o MOGAD'],
    criteria: 'Pérdida visual monocular con dolor a la motilidad, DPAR, discromatopsia desaturada y RM confirmatoria.',
    labTests: ['Anticuerpos anti-Aquaporina 4 (NMO/IgG) y anti-MOG séricos (descarte mandatorio de NMOSD y MOGAD)', 'Punción lumbar para bandas oligoclonales'],
    imaging: ['RM de órbitas y cerebro con contraste y supresión grasa (STIR: muestra hiperintensidad y realce del nervio óptico, y lesiones desmielinizantes periventriculares en SNC)'],
    differential: ['Neuropatía óptica isquémica anterior no arterítica (en mayores de 50 años, indolora, defecto altitudinal)', 'Papiledema por hipertensión intracraneal', 'Neuritis óptica infecciosa'],
    firstLine: [
      { drug: 'Metilprednisolona endovenosa en megadosis (Tratamiento del ensayo ONTT)', dose: '1000 mg (1 gramo) EV en infusión continua lenta diaria durante 3 a 5 días consecutivos, seguido de Prednisona oral 1 mg/kg/día por 11 días con pauta descendente rápida', route: 'EV en infusión', freq: 'c/24h x 3-5 días', notes: 'Acelera significativamente la recuperación de la agudeza visual; CONTRAINDICACIÓN DE PREDNISONA ORAL SOLA A DOSIS BAJAS (duplica el riesgo de recurrencia)' }
    ],
    alternatives: [
      { drug: 'Plasmaféresis terapéutica de rescate (PLEX)', dose: '5 a 7 sesiones en días alternos', route: 'Aféresis venosa', freq: 'Días alternos', notes: 'Indicada ante neuritis óptica severa que no recupera tras pulsos de corticoides EV (típico de Neuromielitis Óptica)' }
    ],
    nonPharm: ['Evitar baños calientes y ambientes de calor extremo durante la fase de recuperación'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA DEL ENSAYO ONTT: Recordar que la Prednisona oral a dosis estándar (1 mg/kg) SIN pulsos previos de metilprednisolona EV está terminantemente desaconsejada porque incrementa la tasa de recurrencias de la neuritis óptica', 'Test de desaturación del rojo de enfermería: mostrar al paciente una tapa de color rojo vivo primero con el ojo sano y luego con el enfermo; interrogar si el color luce anaranjado o marrón descolorido', 'Monitoreo durante la infusión de Metilprednisolona EV: control de glucemia capilar, presión arterial y protección gástrica con omeprazol']
  },
  {
    number: 480,
    id: 'diag-480',
    title: 'Neuropatía óptica isquémica anterior (NOIA: No arterítica y Arterítica)',
    cie10: 'H47.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infarto isquémico de la porción anterior de la cabeza del nervio óptico secundario a hipoperfusión de las arterias ciliares posteriores cortas. Se divide en NOIA No Arterítica (NOIANA: 90-95%, secundaria a hipoperfusión nocturna en pacientes >50 años con hipertensión, apnea del sueño o "disco óptico en riesgo") y NOIA Arterítica (NOIAA: 5-10%, debida a Arteritis de Células Gigantes / Horton en >70 años con riesgo inminente de ceguera bilateral).',
    symptoms: ['PÉRDIDA VISUAL MONOCULAR SÚBITA E INDOLORA AL DESPERTAR POR LA MAÑANA ("se levantó de la cama viendo borroso o sin ver la mitad del campo")', 'DEFECTO CAMPIMÉTRICO ALTITUDINAL INFERIOR PATOGNOMÓNICO ("ve cortada horizontalmente la mitad inferior de las cosas")', 'Defecto pupilar aferente relativo (DPAR) en el ojo afectado', 'FONDO DE OJO PATOGNOMÓNICO: EDEMA DE PAPILA PÁLIDO SECTORIAL O DIFUSO con hemorragias en llama peripapilares en astilla', 'En la forma Arterítica (NOIAA):', '- Cefalea temporal lancinante nueva y dolor al peinarse (hipersensibilidad del cuero cabelludo)', '- CLAUDICACIÓN MANDIBULAR AL MASTICAR patognomónica', '- Dolor y rigidez en hombros y caderas (Polimialgia reumática)', '- Arteria temporal palpable indurada, nodular y sin pulso'],
    redFlags: ['FORMA ARTERÍTICA: RIESGO DE CEGUERA BILATERAL MASIVA EN EL OJO CONTRALATERAL EN CUESTIÓN DE 24 A 48 HORAS si no se inician corticoides EV inmediatamente'],
    criteria: 'Pérdida visual súbita indolora matutina con edema de papila pálido y defecto altitudinal campimétrico.',
    labTests: ['VSG (Velocidad de Sedimentación Globular) y PCR de urgencia (en la forma arterítica la VSG suele superar los 70-100 mm/h)', 'Hemograma completo'],
    imaging: ['Biopsia de la arteria temporal unilateral de al menos 2-3 cm de longitud (estándar de oro para arteritis de células gigantes)'],
    differential: ['Neuritis óptica desmielinizante (cursa con dolor a los movimientos y paciente joven)', 'Oclusión de arteria central de la retina', 'Papiledema bilateral por hipertensión intracraneal'],
    firstLine: [
      { drug: 'NOIA Arterítica: Metilprednisolona endovenosa en megadosis INMEDIATA', dose: '1000 mg EV al día durante 3 días, seguido de Prednisona oral 1 mg/kg/día por vía oral de forma prolongada', route: 'EV urgente', freq: 'c/24h x 3 días', notes: 'EMERGENCIA MÉDICA ABSOLUTA: Iniciar los corticoides DE INMEDIATO ante la sospecha clínica sin esperar el resultado de la biopsia de la arteria temporal para salvar el ojo sano' },
      { drug: 'NOIA No Arterítica: Control estricto de factores de riesgo cardiovascular', dose: 'Evitar antihipertensivos nocturnos para prevenir caídas tensionales bruscas durante el sueño', route: 'Médico preventivo', freq: 'Continuo', notes: 'No existe tratamiento farmacológico probado para recuperar la visión perdida en la NOIANA; el objetivo es proteger el ojo contralateral' }
    ],
    alternatives: [
      { drug: 'Tocilizumab subcutáneo (anticuerpo anti-IL-6)', dose: '162 mg SC semanal', route: 'Subcutánea', freq: 'Semanal', notes: 'Aprobado para la arteritis de células gigantes ahorrador de corticoides' }
    ],
    nonPharm: ['Tratamiento de la apnea obstructiva del sueño con CPAP nocturno (factor de riesgo mayor para hipoxia papilar nocturna)'],
    nursingCare: ['PRIORIDAD ABSOLUTA EN MAYORES DE 60 AÑOS CON PÉRDIDA VISUAL SÚBITA: Preguntar siempre de forma dirigida: "¿Le duele la mandíbula cuando mastica pan o carne?", "¿Le duele el cuero cabelludo al peinarse?"; si responde que sí, canalizar vía EV y avisar al médico para iniciar corticoides ese mismo instante', 'Manejo de antihipertensivos en NOIANA: educar al paciente a tomar los fármacos para la presión por la mañana y no al acostarse para evitar hipotensiones nocturnas severas que infarten la papila', 'Apoyo en la preparación para la biopsia de la arteria temporal: rasurado de 3 cm en la región preauricular-temporal y curación estéril']
  },
  {
    number: 481,
    id: 'diag-481',
    title: 'Estrabismo concomitante (Endotropía y Exotropía infantil)',
    cie10: 'H50.9',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastorno de la alineación y coordinación motora de los ejes visuales oculares en el que los ojos no enfocan simultáneamente sobre el mismo punto del espacio visual. Puede ser convergente hacia adentro (Endotropía / Esotropía, la más frecuente en niños) o divergente hacia afuera (Exotropía). Si no se trata en los primeros años de vida, provoca ambliopía irreversible ("ojo vago").',
    symptoms: ['Desviación ocular visible observable por los padres o cuidadores', 'ENDOTROPÍA: un ojo se desvía hacia la nariz (bizquera convergente)', 'EXOTROPÍA: un ojo se desvía hacia la sien (frecuentemente intermitente cuando el niño está cansado o con la mirada al infinito)', 'Tortícolis ocular compensatoria (giro o inclinación anómala de la cabeza para evitar la visión doble o mantener la fusión)', 'Cierre de un ojo al salir a la luz solar brillante (típico en exotropía intermitente)', 'Deterioro o ausencia de la visión estereoscópica o de profundidad (percepción 3D en 3 dimensiones)'],
    redFlags: ['Estrabismo de inicio brusco en niños mayores o adultos con DIPLOPÍA (visión doble): descartar parálisis de pares craneales (VI, III o IV par) por tumores intracraneales o TEC'],
    criteria: 'Test de Hirschberg (reflejos luminosos corneales asimétricos) y Cover Test / Uncover Test con prismas.',
    labTests: ['Examen de refracción bajo cicloplejía obligatoria con colirio de ciclopentolato'],
    imaging: ['RM craneal y orbitaria si el estrabismo es adquirido, paralítico o presenta signos neurológicos focales'],
    differential: ['Pseudoestrabismo (falsa apariencia de endotropía por pliegues epicánticos nasales amplios y puente nasal plano con reflejos luminosos corneales rigurosamente centrados)', 'Parálisis del VI par craneal'],
    firstLine: [
      { drug: 'Corrección óptica total bajo refracción ciclopléjica completa (Gafas graduadas)', dose: 'Prescripción de la graduación óptica exacta (fundamental en Endotropía Acomodativa por hipermetropía alta)', route: 'Corrección óptica', freq: 'Uso continuo', notes: 'Las gafas eliminan el esfuerzo acomodativo y alinean completamente los ojos en la endotropía acomodativa pura sin cirugía' },
      { drug: 'Terapia de Oclusión con Parches (Tratamiento de la Ambliopía)', dose: 'Oclusión con parche dérmico adhesivo del OJO SANO durante varias horas al día según la edad del niño', route: 'Física oclusiva', freq: 'Diario según pauta', notes: 'Obliga al cerebro a utilizar el ojo desviado recuperando la agudeza visual durante la ventana plástica (<7-8 años)' }
    ],
    alternatives: [
      { drug: 'Inyección de Toxina Botulínica (Botox) en músculos extraoculares', dose: 'Inyección en el músculo recto medio', route: 'Inyección muscular', freq: 'Procedimiento menor', notes: 'Excelente en endotropías congénitas precoces menores de 1 año' },
      { drug: 'Cirugía de músculos extraoculares (Recesión y Resección muscular)', dose: 'Cirugía de debilitamiento o refuerzo de la musculatura extraocular', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento programado', notes: 'Indicada en desviaciones residuales no acomodativas para restaurar la alineación anatómica' }
    ],
    nonPharm: ['Terapia visual ortóptica para mejorar la fusión binocular'],
    nursingCare: ['DETECCIÓN DEL ESTRABISMO EN EL CONTROL DE CRED DE ENFERMERÍA:', '1. Test de Hirschberg: iluminar ambos ojos con una linterna pequeña a 33 cm del rostro del niño; los reflejos luminosos deben caer EXACTAMENTE EN EL CENTRO DE AMBAS PUPILAS; si en un ojo cae descentrado, derivar de inmediato al oftalmopediatra', '2. Desmitificar la creencia popular de que "el estrabismo se cura solo con los años": educar a los padres que si el estrabismo no se trata antes de los 7 u 8 años, el cerebro desconectará ese ojo para siempre causando ceguera funcional irreversible (ambliopía)', '3. Supervisar la adherencia al parche: motivar al niño con parches decorados para que no se los retire']
  },
  {
    number: 482,
    id: 'diag-482',
    title: 'Ambliopía funcional (Ojo perezoso u Ojo vago)',
    cie10: 'H53.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Disminución unilateral o bilateral de la agudeza visual mejor corregida causada por una estimulación visual anormal o insuficiente durante el periodo crítico del desarrollo de la corteza visual cerebral (desde el nacimiento hasta los 7 u 8 años de edad), en ausencia de una anomalía estructural detectable del globo ocular. Es la causa prevenible más común de pérdida visual monocular en niños y adultos jóvenes.',
    symptoms: ['DISMINUCIÓN DE LA AGUDEZA VISUAL EN UN OJO que no mejora inmediatamente con gafas comunes', 'El niño habitualmente NO SE QUEJA porque su ojo sano compensa toda la visión funcional', 'Torpeza motora en juegos de puntería o cálculo de distancias (atrapada de pelotas, bajar escaleras)', 'Aparición silenciosa asociada a:', '- Ambliopía estrábica (supresión cortical de la imagen del ojo desviado)', '- Ambliopía anisometrópica (diferencia de graduación entre ambos ojos >1.5-2 dioptrías)', '- Ambliopía por deprivación (por opacidad como catarata congénita o ptosis palpebral que ocluye la pupila)'],
    redFlags: ['Diagnóstico tardío después de los 8 a 10 años de edad: DAÑO PERMANENTE E IRREVERSIBLE DE LA CORTEZA VISUAL (después de cerrar la ventana de neuroplasticidad visual, la visión ya no se puede recuperar)'],
    criteria: 'Diferencia de agudeza visual de >=2 líneas en la cartilla de Snellen entre ambos ojos con la mejor corrección óptica.',
    labTests: ['Evaluación de la agudeza visual con optotipos estandarizados (Cartilla de Pigassou / Lea Symbols en preescolares; Snellen en escolares)'],
    imaging: ['Refracción ciclopléjica obligatoria'],
    differential: ['Catarata congénita oculta', 'Retinoblastoma', 'Neuropatía óptica nutricional'],
    firstLine: [
      { drug: 'Corrección óptica completa mediante gafas graduadas (uso continuo de tiempo completo)', dose: 'Uso obligatorio y permanente de gafas con la corrección óptica exacta bajo cicloplejía', route: 'Óptica', freq: 'Todo el día', notes: 'Paso inicial mandatorio; un 25-30% de las ambliopías leves mejoran solo con las gafas' },
      { drug: 'Oclusión con Parche Adhesivo del OJO SANO (TRATAMIENTO DE ELECCIÓN ESTÁNDAR)', dose: 'Oclusión directa sobre la piel del ojo sano de 2 a 6 horas al día asociando actividades visuales de cerca (dibujar, pintar, leer)', route: 'Física oclusiva', freq: 'Diario según pauta médica', notes: 'Obliga a la corteza cerebral a desarrollar las vías visuales del ojo amblíope; el éxito roza el 90% si se realiza antes de los 7 años' }
    ],
    alternatives: [
      { drug: 'Penalización óptica o farmacológica: Atropina al 1% colirio en el ojo sano', dose: '1 gota de Atropina en el ojo bueno los fines de semana (sábados y domingos)', route: 'Oftálmica tópica', freq: 'Fines de semana', notes: 'Borra la visión cercana del ojo sano forzando al ojo amblíope; excelente en niños que no toleran los parches dérmicos' }
    ],
    nonPharm: ['Tamizaje visual universal obligatorio a todos los niños a los 3 y 4 años de edad en escuelas y centros de salud'],
    nursingCare: ['TAMIZAJE DE AGUDEZA VISUAL DE ENFERMERÍA EN LA INFANCIA: Evaluar la visión monocular tapando completamente un ojo a la vez con un parche oclusor en todo control de CRED a partir de los 3 años; la detección oportuna antes de los 6 años cambia la vida del niño para siempre', 'Educación para la adherencia al parche: el niño protestará porque al tapar el ojo sano se queda viendo solo con el ojo borroso; aconsejar a los padres colocar el parche durante actividades divertidas (dibujar, videojuegos en tablet)', 'Colocar el parche directo sobre la piel alrededor de la órbita, NUNCA sobre el cristal de la gafa (el niño espiará por los bordes)']
  },
  {
    number: 483,
    id: 'diag-483',
    title: 'Queratocono y Ectasias corneales progresivas',
    cie10: 'H18.6',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Distrofia ectásica corneal no inflamatoria, bilateral y asimétrica, caracterizada por el adelgazamiento progresivo del estroma corneal central o paracentral inferior y la protrusión cónica de la córnea hacia adelante ("en forma de cono"). Se inicia típicamente en la pubertad o adolescencia, fuertemente detonada y acelerada por el frotamiento ocular crónico y vigoroso.',
    symptoms: ['DISMINUCIÓN PROGRESIVA DE LA AGUDEZA VISUAL CON ASTIGMATISMO MIÓPICO IRREGULAR ALTO Y CAMBIANTE', 'Cambios frecuentes de graduación de gafas en pocos meses con insatisfacción visual continua', 'Diplopía monocular o visión de imágenes fantasma múltiples ("poliopía")', 'Destellos luminosos, fotofobia y halos pronunciados alrededor de las luces', 'SIGNOS CLÍNICOS EN FASES MODERADAS/AVANZADAS:', '- ANILLO DE FLEISCHER: depósito epitelial de hierro marrón-amarillento en la base del cono', '- ESTRÍAS DE VOGT: líneas de tensión estromales finas verticales paralelas que desaparecen al comprimir el ojo', '- SIGNO DE MUNSON: protrusión o indentación angular en "V" del párpado inferior cuando el paciente mira hacia abajo', 'HÍDROPS CORNEAL AGUDO: rotura súbita de la membrana de Descemet con edema corneal blanquecino masivo y dolor agudo'],
    redFlags: ['Hídrops corneal agudo con pérdida brusca de visión y edema blanco lechoso de la córnea'],
    criteria: 'Topografía / Tomografía corneal con sistema Scheimpflug (Pentacam / Sirius): elevación posterior patológica y adelgazamiento paquimétrico inferotemporal.',
    labTests: ['Topografía corneal computarizada (mapas de curvatura axial, elevación anterior/posterior y paquimetría)'],
    imaging: ['Tomografía corneal Scheimpflug y OCT de segmento anterior'],
    differential: ['Degeneración marginal pelúcida', 'Queratoglobo', 'Astigmatismo miópico congénito regular'],
    firstLine: [
      { drug: 'FRENADO DE LA PROGRESIÓN: Crosslinking Corneal con Riboflavina y Luz UVA (CXL)', dose: 'Desepitelización corneal, saturación con solución de Riboflavina (vitamina B2) e irradiación con luz ultravioleta A (365 nm) durante 10 a 30 minutos', route: 'Procedimiento especializado', freq: 'Sesión única', notes: 'ÚNICO TRATAMIENTO QUE DETIENE LA PROGRESIÓN DEL QUERATOCONO; crea enlaces covalentes entre las fibras de colágeno aumentando la rigidez corneal' },
      { drug: 'Lentes de contacto especiales permeables al gas (RGP) o Lentes Esclerales', dose: 'Adaptación personalizada por optometrista especializado', route: 'Óptica especializada', freq: 'Uso diurno', notes: 'Crean una superficie óptica regular con el menisco lagrimal; restauran una agudeza visual de hasta 100%' }
    ],
    alternatives: [
      { drug: 'Implante de Anillos o Segmentos Intraestromales (Intacs / Ferrara)', dose: 'Inserción de segmentos de polimetilmetacrilato en el estroma corneal guiada por láser de femtosegundo', route: 'Quirúrgico', freq: 'Procedimiento único', notes: 'Aplana y regulariza el cono mejorando la tolerancia a lentes' },
      { drug: 'Trasplante de Córnea: Queratoplastia Lamelar Anterior Profunda (DALK) o Penetrante (PKP)', dose: 'Reemplazo quirúrgico del tejido corneal enfermo', route: 'Quirúrgico mayor', freq: 'Procedimiento final', notes: 'En estadios avanzados terminales con cicatrices apicales densas' }
    ],
    nonPharm: ['PROHIBICIÓN ESTRICTA Y ABSOLUTA DE FROTARSE LOS OJOS (el frotado mecánico destruye los queratocitos y acelera el cono)'],
    nursingCare: ['CONSEJERÍA VITAL CONTRA EL FROTAMIENTO OCULAR ("STOP EYE RUBBING"): Educar al adolescente alérgico y a su familia que rascarse los ojos con fuerza es el interruptor que deforma la córnea; prescribir colirios antialérgicos y lágrimas frías para eliminar la necesidad de rascarse', 'Cuidado e higiene de los lentes esclerales: enseñar a manipular los lentes con ventosa especial y llenarlos exclusivamente con solución salina estéril sin conservantes', 'Manejo del Hídrops agudo: colocar colirio hipertónico de Cloruro de Sodio al 5% y colirio ciclopléjico con parche compresivo suave hasta la cicatrización']
  },
  {
    number: 484,
    id: 'diag-484',
    title: 'Úlcera corneal micótica (Queratomicosis por hongos filamentosos y levaduras)',
    cie10: 'H16.0 / B49',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección corneal fúngica grave, insidiosa y destructiva producida por hongos filamentosos (Fusarium solani, Aspergillus flavus) vinculada clásicamente a traumatismos oculares con materia vegetal en trabajadores agrícolas en climas cálidos y húmedos, o por levaduras (Candida albicans) en ojos crónicamente enfermos o inmunodeprimidos.',
    symptoms: ['Dolor ocular de inicio subagudo, que progresa lentamente a lo largo de semanas (menos hiperagudo que la bacteriana de inicio)', 'Sensación de cuerpo extraño y fotofobia moderada', 'Ojo rojo con inyección ciliar profunda', 'HALLAZGOS PATOGNOMÓNICOS EN LA CÓRNEA:', '- INFILTRADO ESTROMAL CORNEAL BLANCO-GRISÁCEO CON BORDES DESHILACHADOS, PLUMOSOS O EN ESPÍCULAS', '- LESIONES SATÉLITES CIRCUNDANTES (pequeños focos infiltrativos fúngicos separados del infiltrado principal)', '- Anillo inmune de Wessely en el estroma corneal', '- Hipopión espeso que puede ser recidivante', '- Superficie corneal sobreelevada con textura seca o pastosa'],
    redFlags: ['Crecimiento fúngico intraocular profundo con perforación de la córnea y endoftalmitis micótica (muy difícil erradicación)'],
    criteria: 'Infiltrado estromal con bordes plumosos y lesiones satélite confirmado por cultivo micológico en agar Sabouraud.',
    labTests: ['Raspado corneal profundo para examen directo con KOH al 10% y tinción de Blanco de Calcoflúor (revela hifas o levaduras en minutos)', 'Cultivo en agar dextrosa Sabouraud a 25-30 °C'],
    imaging: ['Microscopía confocal in vivo (permite visualizar hifas ramificadas en el estroma en tiempo real en consultorio)'],
    differential: ['Queratitis bacteriana', 'Queratitis por Acanthamoeba', 'Queratitis herpética estromal'],
    firstLine: [
      { drug: 'Natamicina en suspensión oftálmica al 5% (TRATAMIENTO DE ELECCIÓN EN HONGOS FILAMENTOSOS)', dose: 'Instilar 1 gota CADA HORA día y noche durante los primeros 3 a 5 días, espaciando lentamente según mejoría durante un mínimo estricto de 4 a 6 semanas', route: 'Oftálmica tópica intensiva', freq: 'c/1h de inicio', notes: 'Único antifúngico tópico comercial aprobado; fármaco de referencia frente a Fusarium y Aspergillus' },
      { drug: 'Voriconazol tópico al 1% o Voriconazol oral (en queratitis fúngicas profundas o severas)', dose: 'Voriconazol colirio cada hora + Voriconazol 200 mg VO cada 12 horas', route: 'Oftálmica tópica / VO', freq: 'c/1h tópica + c/12h VO', notes: 'Excelente penetración estromal e intraocular' }
    ],
    alternatives: [
      { drug: 'Anfotericina B colirio al 0.15% a 0.5% (Tratamiento de elección si se aísla Candida)', dose: 'Instilar cada hora', route: 'Oftálmica tópica', freq: 'c/1h', notes: 'Fármaco de referencia para levaduras' },
      { drug: 'Queratoplastia penetrante terapéutica de urgencia (Trasplante de córnea)', dose: 'Extirpación quirúrgica completa del tejido infectado con margen sano', route: 'Quirúrgico urgente', freq: 'Urgencia', notes: 'Ante perforación corneal o avance imparable hacia el limbo esclerocorneal' }
    ],
    nonPharm: ['Desbridamiento epitelial suave periódico con espátula estéril para retirar detritos y facilitar la penetración de la natamicina'],
    nursingCare: ['ADVERTENCIA CRÍTICA: TERMINANTEMENTE PROHIBIDO EL USO DE CORTICOIDES TÓPICOS; los corticoides aceleran la invasión fúngica masiva y perforan la córnea', 'Indagación del antecedente vegetal: interrogar activamente al paciente si sufrió el rasguño de una rama de árbol, planta, caña de azúcar o espina (clave diagnóstica para sospechar hongos)', 'Agitar vigorosamente el frasco de Natamicina al 5% antes de instilar cada gota por ser una suspensión densa']
  },
  {
    number: 485,
    id: 'diag-485',
    title: 'Hemorragia subconjuntival (Hiposfagma)',
    cie10: 'H11.3',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Extravasación aguda de sangre en el espacio virtual situado entre la conjuntiva bulbar y la epiesclera, producida por la rotura espontánea o traumática de un capilar conjuntival frágil. Aunque su aspecto visual es sumamente alarmante para el paciente, es una afección completamente benigna y autolimitada que no compromete la visión.',
    symptoms: ['APARICIÓN BRUSCA DE UNA MANCHA ROJA INTENSA ("ROJO SANGRE VIVA O LACRE") en la esclerótica blanca del ojo', 'Bordes netos bien delimitados que no sobrepasan el limbo esclerocorneal hacia la córnea', 'AUSENCIA TOTAL DE DOLOR OCULAR (puede haber una ligera sensación de pesadez o roce)', 'AGUDEZA VISUAL RIGUROSAMENTE NORMAL', 'PUPILAS NORMALES Y CÓRNEA TRANSPARENTE', 'Antecedente frecuente de maniobra de Valsalva previa: tos intensa, estornudo violento, esfuerzo defecatorio por estreñimiento, vómitos, frotamiento ocular o levantamiento de pesas'],
    redFlags: ['Hemorragia subconjuntival asociada a Picos Hipertensivos severos (PAS >180-200 mmHg)', 'Hiposfagmas espontáneos recurrentes frecuentes (descartar coagulopatías o discrasias sanguíneas)'],
    criteria: 'Diagnóstico visual directo: parche hemático rojo brillante bajo conjuntiva con examen oftalmológico normal.',
    labTests: ['Toma inmediata de la Presión Arterial en urgencias', 'INR y coagulograma si el paciente está bajo tratamiento con anticoagulantes (Warfarina)'],
    imaging: ['No indicada salvo si hay antecedente de traumatismo craneofacial severo (descarte de fractura orbitaria)'],
    differential: ['Conjuntivitis bacteriana (presenta secreción purulenta y vasos dilatados individuales)', 'Epiescleritis', 'Cuerpo extraño conjuntival subyacente'],
    firstLine: [
      { drug: 'Tranquilización y conducta expectante (enfermedad autolimitada sin tratamiento farmacológico)', dose: 'No requiere ningún colirio antibiótico ni vasoconstrictor', route: 'N/A', freq: 'N/A', notes: 'La sangre se reabsorbe espontáneamente de forma gradual en un plazo de 7 a 14 días' },
      { drug: 'Lágrimas artificiales lubricantes (si hay sensación de roce mecánico)', dose: '1 gota 3 a 4 veces al día', route: 'Oftálmica tópica', freq: 'Según molestia', notes: 'Brinda confort superficial' }
    ],
    alternatives: [
      { drug: 'Ajuste de medicación anticoagulante si el INR está supraterapéutico', dose: 'Manejo por médico tratante', route: 'Sistémica', freq: 'Puntual', notes: 'Solo si hay sobredosificación de warfarina' }
    ],
    nonPharm: ['Evitar frotarse los ojos y evitar esfuerzos físicos bruscos durante los primeros días'],
    nursingCare: ['TRANQUILIZACIÓN PRIMARIA DEL PACIENTE DE ENFERMERÍA: Aliviar la ansiedad del paciente explicándole con claridad: "Es simplemente un moretón o derrame en la telita transparente del ojo; no le causará ceguera, no tiene un derrame cerebral y sanará solo cambiando de color a verdoso-amarillento como cualquier moretón"', 'TOMA INMEDIATA DE LA PRESIÓN ARTERIAL: Medir la PA en el triaje de enfermería para descartar una crisis hipertensiva como causa detonante', 'Revisar la historia farmacológica: indagar si consume aspirina, clopidogrel o anticoagulantes']
  },
  {
    number: 486,
    id: 'diag-486',
    title: 'Hipema traumático (Hifema / Sangre en cámara anterior)',
    cie10: 'H21.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Presencia y acumulación de sangre en la cámara anterior del ojo (entre la córnea y el iris), secundaria en la inmensa mayoría a un traumatismo ocular contuso cerrado que desgarra los vasos sanguíneos del cuerpo ciliar o del iris. Se clasifica en Grado I (<1/3 de cámara anterior), Grado II (1/3 a 1/2), Grado III (>1/2) y Grado IV ("hipema en bola de 8 o negro": 100% ocupado).',
    symptoms: ['DISMINUCIÓN DE LA AGUDEZA VISUAL tras un traumatismo contuso (pelotazo de fútbol, puñetazo, corcho de champán)', 'DOLOR OCULAR Y FOTOFOBIA', 'Visualización directa de un NIVEL HORIZONTAL DE SANGRE ROJA OSCURA EN LA PARTE INFERIOR DE LA CÓRNEA que se desplaza con la gravedad', 'En Grado IV: toda la cámara anterior se observa de color rojo oscuro o negro sin visualizarse el iris', 'Somnolencia o náuseas/vómitos si la Presión Intraocular aumenta drásticamente'],
    redFlags: ['RESANGRADO SECUNDARIO (pico crítico entre los días 3 y 5 post-trauma; suele ser más masivo que el sangrado inicial y causa hipertensión ocular incontrolable)', 'Imbibición o tinción hemática de la córnea (la hemosiderina tiñe la córnea de color café/óxido con opacidad irreversible)'],
    criteria: 'Visualización del nivel hemático en cámara anterior en lámpara de hendidura con medición de la PIO.',
    labTests: ['Tamizaje de Rasgo Falciforme (Sickle Cell Test / Electroforesis de hemoglobina) en pacientes afrodescendientes (los eritrocitos falciformes bloquean el trabéculo a presiones mínimas)'],
    imaging: ['Ecografía ocular modo B (si el hipema impide visualizar el polo posterior para descartar desprendimiento de retina)'],
    differential: ['Hipopión (pus blanco en cámara anterior)', 'Pseudoexfoliación', 'Neovascularización del iris sangrante'],
    firstLine: [
      { drug: 'Reposo estricto en cama con ELEVACIÓN DE LA CABECERA A 30-45 GRADOS (MEDIDA CRUCIAL)', dose: 'Reposo en cama durante 5 a 7 días con la cabecera levantada', route: 'Física postural', freq: 'Continuo', notes: 'Permite que la sangre decante por gravedad al fondo de la cámara anterior, despejando el eje visual pupilar y facilitando el drenaje trabecular' },
      { drug: 'Colirio Ciclopléjico: Atropina al 1% o Ciclopentolato al 1%', dose: 'Instilar 1 gota cada 8 a 12 horas', route: 'Oftálmica tópica', freq: 'c/8-12h', notes: 'Inmoviliza el iris y cuerpo ciliar previniendo el resangrado secundario doloroso' },
      { drug: 'Corticoides tópicos: Acetato de Prednisolona al 1%', dose: '1 gota cada 6 horas', route: 'Oftálmica tópica', freq: 'c/6h', notes: 'Disminuye la inflamación traumática y reduce la tasa de resangrado' }
    ],
    alternatives: [
      { drug: 'Control de la Hipertensión Ocular: Timolol 0.5% + Dorzolamida colirio', dose: '1 gota cada 12 horas (asociar Acetazolamida VO si PIO >30 mmHg)', route: 'Oftálmica / VO', freq: 'c/12h', notes: 'CONTRAINDICADA LA ACETAZOLAMIDA EN DREPANOCITOSIS (induce falciformación y acidosis local)' },
      { drug: 'Lavado quirúrgico de cámara anterior por paracentesis', dose: 'Evacuación quirúrgica de la sangre mediante irrigación y aspiración', route: 'Quirúrgico urgente', freq: 'Procedimiento de rescate', notes: 'Indicado si PIO >50 mmHg por 5 días, >35 mmHg por 7 días o signos incipientes de tinción corneal hemática' }
    ],
    nonPharm: ['PROTECTOR OCULAR RÍGIDO METÁLICO O PLÁSTICO PERFORADO continuo para evitar compresiones accidentales', 'PROHIBIDO EL USO DE ASPIRINA O AINEs (aumentan masivamente el riesgo de resangrado)'],
    nursingCare: ['POSICIÓN POSTURAL RIGUROSA DE ENFERMERÍA: Mantener al paciente estrictamente semiincorporado con la cabecera de la cama a 30-45° en todo momento, incluso para dormir; no permitir que se recueste completamente plano', 'COLOCACIÓN DE PROTECTOR OCULAR RÍGIDO: Fijar el protector plástico con esparadrapo; terminantemente prohibido usar parches compresivos blandos sobre el globo ocular traumático', 'Prohibir taxativamente el consumo de analgésicos tipo Aspirina o Ketorolaco; utilizar únicamente Paracetamol para el dolor leve', 'Vigilancia estrecha entre el 3er y 5to día: momento crítico de mayor frecuencia de resangrado secundario']
  },
  {
    number: 487,
    id: 'diag-487',
    title: 'Cuerpo extraño corneal y Anillo de herrumbre',
    cie10: 'T15.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Accidente ocular laboral o recreativo sumamente frecuente producido por la impactación superficial o profunda de una partícula extraña (partículas metálicas por esmerilado o amoladora, virutas de madera, piedra o vidrio) en el epitelio o estroma corneal. Si el cuerpo extraño es metálico ferromagnético, genera en cuestión de horas un anillo de óxido o herrumbre tóxico en el tejido corneal circundante.',
    symptoms: ['Sensación punzante intensa y aguda de cuerpo extraño en el ojo que se acentúa dramáticamente con cada parpadeo', 'Dolor ocular agudo, lagrimeo profuso incesante y fotofobia', 'Blefaroespasmo reflejo (dificultad para mantener el ojo abierto)', 'Inyección ciliar y conjuntival moderada a severa', 'Visualización directa en la córnea de una pequeña partícula visible oscura o metálica', 'ANILLO DE HERRUMBRE CORNEAL: halo circular marrón-amarillento de óxido de hierro alrededor de la partícula metálica que aparece a las 24 horas de la impactación'],
    redFlags: ['SOSPECHA DE PERFORACIÓN OCULAR O CUERPO EXTRAÑO INTRAOCULAR: Seidel positivo (salida de humor acuoso fluida que diluye la fluoresceína), pupila deformada o atalamia (cámara anterior plana); ¡TERMINANTEMENTE PROHIBIDO CUALQUIER PRESIÓN O MANIPULACIÓN!'],
    criteria: 'Visualización de la partícula en lámpara de hendidura y prueba de Seidel negativa.',
    labTests: ['Prueba de Seidel con fluoresceína (para descartar herida penetrante corneal)'],
    imaging: ['TC de órbitas si hubo traumatismo de alta energía (uso de martillo sobre metal o amoladora sin protección) para descartar cuerpo extraño intraocular radiopaco'],
    differential: ['Abrasión corneal simple', 'Cuerpo extraño subtarsal retenido (eversión palpebral obligatoria)', 'Queratitis infecciosa'],
    firstLine: [
      { drug: 'Extracción estéril del cuerpo extraño bajo lámpara de hendidura', dose: 'Instilación de colirio anestésico tópico (Proparacaína 0.5%) y extracción meticulosa con aguja estéril 27G o 30G tangencial al plano corneal', route: 'Procedimiento oftalmológico', freq: 'Procedimiento inmediato', notes: 'Debe realizarse con magnificación óptica adecuada' },
      { drug: 'Fresado y eliminación del Anillo de Herrumbre', dose: 'Eliminación del óxido ferroso residual mediante microfresa oftálmica rotatoria (fresa de Alger)', route: 'Procedimiento oftalmológico', freq: 'Procedimiento de consultorio', notes: 'El óxido residual causa inflamación crónica y retrasa la reepitelización' },
      { drug: 'Antibioticoterapia profiláctica tópica: Tobramicina 0.3% o Ciprofloxacino 0.3% colirio', dose: '1 gota cada 6 horas durante 5 a 7 días + ungüento cicatrizante epitelizante', route: 'Oftálmica tópica', freq: 'c/6h x 5-7 días', notes: 'Previene la sobreinfección y la úlcera bacteriana' }
    ],
    alternatives: [
      { drug: 'Lente de contacto terapéutico blando neutro', dose: 'Colocación por 24-48 horas como apósito transparente', route: 'Óptica', freq: 'Temporal', notes: 'Alivia el dolor del parpadeo mientras cicatriza el defecto epitelial' }
    ],
    nonPharm: ['Eversión obligatoria del párpado superior con un hisopo para descartar un segundo cuerpo extraño oculto en el fondo de saco'],
    nursingCare: ['REGLA DE SEGURIDAD ANTE CUERPOS EXTRAÑOS DE ALTA VELOCIDAD: Si el paciente refiere que estaba usando un esmeril, martillando metal sobre metal o cortando baldosas y sintió un "chispazo", sospechar perforación del globo ocular con cuerpo extraño dentro del ojo; NO presionar el ojo y colocar un protector rígido antes de derivar al oftalmólogo', 'Eversión palpebral de enfermería: si al microscopio la córnea parece limpia pero el paciente sigue sintiendo una puñalada al parpadear, evertir el párpado superior buscando cuerpos extraños subtarsales que raspan la córnea como un limpiaparabrisas roto', 'Comprobar el estado de vacunación antitetánica']
  },
  {
    number: 488,
    id: 'diag-488',
    title: 'Quemadura ocular química (Causticación por Álcalis y Ácidos)',
    cie10: 'T26.6',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'La más grave y destructiva de todas las urgencias de la superficie ocular, producida por el contacto con sustancias químicas. Los ÁLCALIS (lejía, cal viva, cemento, amoníaco, soda cáustica) son los más devastadores porque provocan necrosis por licuefacción saponificando las membranas celulares y penetrando en segundos a la cámara anterior; los ÁCIDOS (ácido sulfúrico de baterías) provocan necrosis por coagulación creando una barrera proteica protectora.',
    symptoms: ['Dolor ocular atroz, agudo y lacerante con blefaroespasmo incoercible', 'Pérdida visual inmediata en grado variable', 'Edema palpebral masivo y quemosis conjuntival', 'CÓRNEA OPACA, TURBIA Y BLANQUECINA ("córnea en vidrio deslustrado o porcelana")', 'HALLAZGO DE GRAVEDAD CRÍTICA: ISQUEMIA LIMBAR ("OJO BLANCO COMO PORCELANA"): la palidez extrema del limbo esclerocorneal indica necrosis avascular total de las células madre limbares (limbal stem cells) y mal pronóstico visual'],
    redFlags: ['ÁLCALIS CON ISQUEMIA LIMBAR DE >180-360° (GRADO IV DE DUARTE / ROPER-HALL): riesgo inminente de necrosis corneal completa, simbléfaron cicatrizal y ceguera irreversible'],
    criteria: 'Antecedente de exposición química con tiras de papel tornasol o tira de orina midiendo el pH en fondo de saco conjuntival.',
    labTests: ['Medición inmediata del pH conjuntival con papel reactivo (normal 7.0 a 7.4)'],
    imaging: ['Biomicroscopía tras neutralización del pH'],
    differential: ['Queratitis actínica por soldadura', 'Abrasión corneal traumática masiva'],
    firstLine: [
      { drug: 'IRRIGACIÓN OCULAR COPIOSA, INMEDIATA Y CONTINUA (ÚNICA INTERVENCIÓN QUE SALVA EL OJO)', dose: 'IRRIGAR DE FORMA INMEDIATA con 2 a 3 LITROS de Suero Fisiológico al 0.9% (o agua corriente si no hay suero) durante un MÍNIMO DE 20 A 30 MINUTOS CONTINUOS utilizando una cánula de irrigación o equipo de venoclisis, HASTA ALCANZAR UN pH NEUTRO (7.0 - 7.4)', route: 'Irrigación continua a chorro', freq: 'Inmediato y continuo', notes: 'LA IRRIGACIÓN DEBE INICIARSE EN EL LUGAR DEL ACCIDENTE ANTES DE TRASLADAR AL PACIENTE; cada minuto de retraso destruye tejido corneal irreversiblemente' }
    ],
    alternatives: [
      { drug: 'Tratamiento médico tras la irrigación: Doxiciclina oral + Vitamina C oral', dose: 'Doxiciclina 100 mg VO cada 12 horas + Vitamina C 1 g VO cada 12 horas', route: 'VO', freq: 'c/12h x semanas', notes: 'Inhiben las metaloproteinases de la matriz estromal y promueven la síntesis de colágeno evitando la perforación corneal' },
      { drug: 'Corticoides tópicos intensivos los primeros 7-10 días', dose: 'Acetato de Prednisolona 1% cada 2 horas los primeros 7 días', route: 'Oftálmica tópica', freq: 'c/2h', notes: 'Frenan la infiltración neutrofílica masiva; suspender tras el día 10 para evitar necrosis estromal' }
    ],
    nonPharm: ['Retirada manual meticulosa de restos sólidos de cemento o cal oculta en fondos de saco con un hisopo húmedo tras evertir párpados', 'Lente de contacto terapéutico o membrana amniótica para inducir epitelización'],
    nursingCare: ['REGLA DE ORO DE ENFERMERÍA EN QUEMADURAS QUÍMICAS: NUNCA PERDER TIEMPO EN EL TRIAJE HACIENDO PREGUNTAS ADMINISTRATIVAS O BUSCANDO LA HISTORIA CLÍNICA; tumbar al paciente inmediatamente, instilar una gota de anestésico tópico y COMENZAR EL LAVADO CON SUERO A CHORRO CONTINUO CON LA BOTELLA ABIERTA', 'Eversión palpebral durante el lavado: inspeccionar y lavar activamente los fondos de saco conjuntivales superior e inferior; los granos de cal o cemento atrapados continúan liberando álcali durante horas si no se retiran mecánicamente', 'Comprobar el pH en la conjuntiva con una tira reactiva: la irrigación SOLO se detiene cuando el pH sea neutro (entre 7.0 y 7.4) medido 5 minutos después de pausar el lavado']
  },
  {
    number: 489,
    id: 'diag-489',
    title: 'Dacriocistitis aguda y crónica',
    cie10: 'H04.3',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección e inflamación aguda o crónica del saco lagrimal, producida casi invariablemente como consecuencia de la obstrucción adquirida o congénita del conducto nasolagrimal con retención y sobreinfección bacteriana por Staphylococcus aureus, Streptococcus pneumoniae o Pseudomonas. Se caracteriza por una masa eritematosa y muy dolorosa en el canto interno del ojo.',
    symptoms: ['TUMEFACCIÓN ERITEMATOSA, INDURADA Y MUY DOLOROSA EN EL CANTO INTERNO DEL OJO, por debajo del tendón cantal medial', 'Epífora crónica persistente (lagrimeo continuo que cae por la mejilla) previa al cuadro agudo', 'Reflujo de material purulento espeso por los puntos lagrimales al presionar suavemente sobre el saco lagrimal', 'Edema inflamatorio de párpados y región nasal homolateral', 'Fiebre y leucocitosis en formas agudas severas'],
    redFlags: ['Abscedación del saco lagrimal con fistulización cutánea espontánea hacia la mejilla', 'Celulitis orbitaria secundaria por diseminación profunda'],
    criteria: 'Masa dolorosa eritematosa en el canto interno por debajo del tendón cantal medial con reflujo purulento.',
    labTests: ['Tinción de Gram y cultivo del material purulento exprimido'],
    imaging: ['TC de órbitas y macizo facial si hay sospecha de celulitis orbitaria o masa nasal'],
    differential: ['Orzuelo agudo interno', 'Celulitis preseptal', 'Mucocele del saco lagrimal', 'Tumor del saco lagrimal'],
    firstLine: [
      { drug: 'Antibioticoterapia sistémica oral o endovenosa de primera línea: Amoxicilina + Ácido Clavulánico', dose: 'Adultos: 875/125 mg VO cada 8 horas durante 10 a 14 días (o Cefalexina 500 mg c/6h)', route: 'VO', freq: 'c/8h x 10-14 días', notes: 'Los colirios tópicos son ineficaces porque la infección está enclavada en el saco lagrimal cerrado; requiere antibióticos sistémicos' },
      { drug: 'Compresas húmedas tibias locales sobre el canto interno', dose: 'Aplicar 10-15 minutos 3 veces al día', route: 'Tópica física', freq: '3 veces/día', notes: 'Alivian el dolor y favorecen el drenaje' }
    ],
    alternatives: [
      { drug: 'Incisión y drenaje quirúrgico del absceso fluctuante', dose: 'Punción-aspiración o incisión pequeña si hay colección fluctuante a tensión inminente de rotura', route: 'Quirúrgico menor', freq: 'Procedimiento puntual', notes: 'Alivia el dolor inmediatamente; evitar incisiones grandes para no crear fístulas crónicas' },
      { drug: 'Dacriocistorrinostomía (DCR) quirúrgica programada definitiva', dose: 'Cirugía que crea una nueva vía de drenaje entre el saco lagrimal y la mucosa nasal (vía externa o endonasal)', route: 'Quirúrgico especializado', freq: 'Procedimiento programado', notes: 'TRATAMIENTO CURATIVO DEFINITIVO; se realiza semanas después de resuelto el brote agudo inflamatorio' }
    ],
    nonPharm: ['NO intentar el sondaje de la vía lagrimal durante la fase aguda inflamatoria (riesgo de perforación de falsas vías e infección masiva)'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD: TERMINANTEMENTE CONTRAINDICADO EL SONDAJE O IRRIGACIÓN DE LA VÍA LAGRIMAL DURANTE LA FASE AGUDA; sondar un saco infectado agudo disemina las bacterias hacia la órbita causando celulitis orbitaria', 'Manejo en lactantes con dacriocistitis congénita: enseñar a los padres el masaje hidrostático de Crigler (presionar firmemente hacia abajo sobre el saco para vencer la válvula de Hasner imperforada)', 'Monitoreo de fiebre y extensión del eritema hacia la mejilla o el párpado superior']
  },
  {
    number: 490,
    id: 'diag-490',
    title: 'Epiescleritis y Escleritis anterior (No necrotizante y Necrotizante)',
    cie10: 'H15.1 / H15.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Trastornos inflamatorios de la túnica externa del ojo. La Epiescleritis es una inflamación benigna, superficial y autolimitada del tejido epiescleral vascular, común en adultos jóvenes. La Escleritis es una enfermedad inflamatoria granulomatosa grave, destructiva y muy dolorosa de la esclera profunda, estrechamente asociada en >50% a enfermedades autoinmunes sistémicas potencialmente mortales (Artritis Reumatoide, Granulomatosis con Poliangeítis / Wegener).',
    symptoms: ['EPIESCLERITIS:', '- Enrojecimiento ocular sectorial en cuña o difuso de color rojo brillante o salmón', '- Molestia leve, tirantez o sensación de cuerpo extraño SIN DOLOR SEVERO', '- Ausencia de pérdida visual y pupila normal', 'ESCLERITIS ANTERIOR (ENFERMEDAD GRAVE):', '- DOLOR OCULAR PROFUNDO, AGONIZANTE, TEREBRANTE Y CONSTANTE que despierta al paciente por la noche y se irradia a la sien, frente y mandíbula', '- COLORACIÓN VIOLÁCEA O AZULADA OSCURA DE LA ESCLERA bajo luz natural', '- Ojo sumamente sensible y doloroso a la palpación digital a través de los párpados', '- En Escleritis Necrotizante: adelgazamiento escleral grave con visualización de la coroides oscura subyacente ("escleromalacia perforans" en artritis reumatoide avanzada)'],
    redFlags: ['ESCLERITIS NECROTIZANTE CON ADELGAZAMIENTO ESCLERAL: riesgo de perforación ocular espontánea y MARCADOR DE VASCULITIS SISTÉMICA SEVERA con alta mortalidad a 5 años'],
    criteria: 'Test de Fenilefrina al 10% (blanquea los vasos epiesclerales superficiales en epiescleritis, pero NO blanquea la escleritis profunda que permanece violácea).',
    labTests: ['En Escleritis: despistaje autoinmune exhaustivo (Factor Reumatoide, Anti-CCP, ANCA c y p, ANA, HLA-B27, serología de Sífilis y PPD)'],
    imaging: ['Biomicroscopía con luz natural y ecografía ocular modo B (evalúa engrosamiento escleral en escleritis posterior: signo de la T)'],
    differential: ['Conjuntivitis bacteriana o viral', 'Uveítis anterior', 'Flicténula escleral'],
    firstLine: [
      { drug: 'Epiescleritis: Tratamiento sintomático con AINEs orales o colirio lubricante', dose: 'Ibuprofeno 400 a 600 mg VO cada 8 horas durante 7 a 10 días + lágrimas artificiales frías', route: 'VO / Tópica', freq: 'c/8h x 7-10 días', notes: 'Autolimitada en 1 a 2 semanas; corticoides tópicos suaves solo en casos intensos' },
      { drug: 'Escleritis Anterior No Necrotizante: AINEs orales a dosis plenas', dose: 'Indometacina 25 a 50 mg VO cada 8 horas con las comidas (o Naproxeno 500 mg c/12h)', route: 'VO con alimentos', freq: 'c/8h', notes: 'Los AINEs tópicos en colirio son totalmente ineficaces; requiere tratamiento sistémico' }
    ],
    alternatives: [
      { drug: 'Corticoides sistémicos orales en Escleritis severa: Prednisona oral', dose: '1 mg/kg/día VO con pauta descendente lenta', route: 'VO', freq: 'c/24h matutino', notes: 'Tratamiento de elección si fracasan los AINEs o en escleritis necrotizante' },
      { drug: 'Terapia biológica o inmunosupresora: Infliximab / Adalimumab o Ciclofosfamida', dose: 'Según protocolo reumatológico', route: 'EV / SC', freq: 'Protocolo', notes: 'Obligatoria en escleritis necrotizante asociada a vasculitis sistémica para salvar el ojo y la vida' }
    ],
    nonPharm: ['Protección ocular con gafas de policarbonato si hay adelgazamiento escleral severo'],
    nursingCare: ['TEST DIAGNÓSTICO DE LA FENILEFRINA DE ENFERMERÍA: Instilar 1 gota de fenilefrina al 2.5% o 10% en el ojo rojo; si a los 10 minutos el enrojecimiento desaparece por completo ("se blanquea"), se trata de una epiescleritis benigna; SI EL COLOR ROJO-VIOLÁCEO PERSISTE INTACTO, se trata de una escleritis profunda que requiere evaluación inmediata', 'Alivio del dolor en escleritis: reconocer que el dolor de la escleritis es uno de los más intensos en oftalmología; administrar analgésicos con protector gástrico', 'Derivación y seguimiento reumatológico coordinado']
  },
  {
    number: 491,
    id: 'diag-491',
    title: 'Endoftalmitis bacteriana aguda (Postquirúrgica y Postraumática)',
    cie10: 'H44.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Infección purulenta grave y devastadora de los fluidos intraoculares (cámaras vítrea y anterior), que constituye la emergencia infecciosa más temida en oftalmología. Ocurre con mayor frecuencia como complicación precoz tras cirugía de cataratas (días 3 a 7 postoperatorio) o tras inyecciones intravítreas/traumatismos, producida por Staphylococcus epidermidis, S. aureus o Pseudomonas aeruginosa. Conduce a ceguera irreversible si no se trata en cuestión de pocas horas.',
    symptoms: ['DISMINUCIÓN BRUSCA, MARCADA Y PROGRESIVA DE LA AGUDEZA VISUAL tras una cirugía o traumatismo reciente (visión borrosa severa que empeora hora tras hora)', 'DOLOR OCULAR SEVERO, PROFUNDO Y PALPITANTE (presente en >75% de los pacientes)', 'OJO ROJO CON HIPEREMIA CILIAR Y CONJUNTIVAL INTENSA', 'Edema palpebral marcado y quemosis conjuntival', 'HALLAZGOS PATOGNOMÓNICOS EN EL EXAMEN BIOMICROSCÓPICO:', '- HIPOPIÓN MASIVO (nivel horizontal de pus estéril o bacteriano en la cámara anterior)', '- PÉRDIDA DEL REFLEJO ROJO DE FONDO DE OJO por vitreítis purulenta difusa', '- TURBIDEZ VÍTREA MARCADA con imposibilidad absoluta de visualizar los detalles de la retina'],
    redFlags: ['Pérdida visual rápida a nivel de "no percepción luminosa" con afectación de todas las capas del ojo (panoftalmitis con necesidad de evisceración)'],
    criteria: 'Pérdida visual aguda con hipopión y vitreítis purulenta tras procedimiento intraocular reciente.',
    labTests: ['PUNCIÓN Y TOMA DE MUESTRA VÍTREA Y ACUOSA INMEDIATA: Aspiración de 0.1 a 0.2 mL de humor vítreo mediante punción con aguja 23G por pars plana para tinción de Gram urgente y cultivo bacteriológico con antibiograma'],
    imaging: ['Ecografía ocular modo B (evalúa membranas vítreas y descarta desprendimiento de retina oculto por la turbidez)'],
    differential: ['Síndrome Tóxico del Segmento Anterior (TASS: reacción inflamatoria no infecciosa estéril por tóxicos que aparece en las primeras 12-24h post-catarata sin vitreítis profunda)', 'Uveítis anterior severa'],
    firstLine: [
      { drug: 'INYECCIÓN INTRAVÍTREA INMEDIATA DE ANTIBIÓTICOS DE AMPLIO ESPECTRO (TRATAMIENTO ESTÁNDAR DE REFERENCIA)', dose: 'Vancomicina 1.0 mg en 0.1 mL intravítreo (cobertura grampositivos y SAMR) + Ceftazidima 2.25 mg en 0.1 mL intravítreo (cobertura gramnegativos y Pseudomonas)', route: 'Intravítrea de urgencia', freq: 'Inyección inmediata urgente', notes: 'MANDATORIO: Las inyecciones intravítreas deben administrarse de inmediato tras la toma de muestra; es la única vía que alcanza concentraciones bactericidas en el vítreo' },
      { drug: 'Dexametasona intravítrea', dose: '0.4 mg en 0.1 mL inyectados junto con los antibióticos', route: 'Intravítrea', freq: 'Dosis única', notes: 'Frena el daño inflamatorio tisular causado por las toxinas bacterianas' }
    ],
    alternatives: [
      { drug: 'Vitrectomía Posterior por Vía Pars Plana (VPP) de Urgencia', dose: 'Cirugía endoocular urgente para desbridar y evacuar el vítreo purulento infectado', route: 'Quirúrgico de urgencia', freq: 'Urgencia', notes: 'INDICACIÓN ABSOLUTA DEL ENSAYO EVS: en todo paciente con visión inicial reducida a "percepción de luz" o que empeora a las 48h de la inyección' }
    ],
    nonPharm: ['Ingreso hospitalario urgente y colocación de colirios ciclopléjicos y corticoides tópicos intensivos coadyuvantes'],
    nursingCare: ['PREPARACIÓN URGENTE DEL EQUIPO DE INYECCIÓN INTRAVÍTREA: Tener disponible el kit estéril de inyección intravítrea (blefaróstato, jeringas de 1 mL tuberculina, agujas 30G y povidona yodada al 5% oftálmica); no dilatar el procedimiento', 'DILUCIÓN MILIMÉTRICA DE LOS ANTIBIÓTICOS INTRAVÍTREOS: La preparación de las dosis de Vancomicina y Ceftazidima debe realizarse con técnica aséptica rigurosa y precisión exacta; un error de dilución puede causar toxicidad retiniana química irreversible o ineficacia', 'Monitoreo de agudeza visual horaria: evaluar la capacidad de contar dedos o percibir luz en cada turno']
  },
  {
    number: 492,
    id: 'diag-492',
    title: 'Presbicia (Vista cansada del adulto)',
    cie10: 'H52.4',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Proceso fisiológico universal e irreversible del envejecimiento ocular caracterizado por la pérdida gradual y progresiva de la capacidad de acomodación del cristalino, debida al endurecimiento y esclerosis del núcleo cristalineano junto con la pérdida de elasticidad de la cápsula y disminución del tono del músculo ciliar. Comienza a manifestarse clínicamente a partir de los 40 a 45 años.',
    symptoms: ['DIFICULTAD PROGRESIVA PARA ENFOCAR Y LEER OBJETOS DE CERCA (letra pequeña de libros, periódicos, menú de restaurantes o mensajes en el teléfono)', 'MANIOBRA TÍPICA: NECESIDAD DE "ALARGAR O ESTIRAR LOS BRAZOS" para alejar el texto y poder enfocarlo con nitidez', 'Astenopia acomodativa: fatiga visual marcada, pesadez ocular, lagrimeo y dolor sordo frontal o periocular tras tareas de lectura prolongada', 'Necesidad imperiosa de mayor iluminación para poder leer de cerca', 'Visión lejana conservada (en personas que no tenían defecto refractivo previo)'],
    redFlags: ['Cefalea vespertina continua provocada por el esfuerzo acomodativo forzado sin corrección óptica'],
    criteria: 'Test de agudeza visual cercana (Cartilla de Jaeger o Rosenbaum a 33-40 cm) con adición progresiva de lentes esféricas positivas (+1.00 a +3.00 dioptrías).',
    labTests: ['Examen optométrico de refracción estandarizado'],
    imaging: ['No indicada'],
    differential: ['Hipermetropía no corregida', 'Insuficiencia de acomodación farmacológica'],
    firstLine: [
      { drug: 'Corrección óptica con lentes esféricas convergentes positivas (+) (ESTÁNDAR UNIVERSAL)', dose: 'Adición óptica progresiva según la edad: +1.00 D (40-44 años), +1.50 D (45-49 años), +2.00 D (50-54 años), +2.50 D (55-59 años) y +3.00 D (>=60 años) en gafas monofocales, bifocales o progresivas/multifocales', route: 'Óptica externa', freq: 'Para lectura de cerca', notes: 'Tratamiento de elección fisiológico seguro, económico y de máxima eficacia' }
    ],
    alternatives: [
      { drug: 'Lentes de contacto multifocales o técnica de Monovisión', dose: 'Adaptación personalizada (un ojo se gradúa para lejos y el ojo dominante para cerca)', route: 'Óptica de contacto', freq: 'Uso diurno', notes: 'Alternativa en pacientes que rechazan las gafas' },
      { drug: 'Cirugía facorrefractiva con Implante de Lente Intraocular (LIO) Multifocal / EDOF', dose: 'Reemplazo del cristalino por un LIO multifocal', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento definitivo', notes: 'Corrige la presbicia de por vida eliminando la necesidad de gafas; excelente en mayores de 50-55 años' }
    ],
    nonPharm: ['Iluminación ambiental adecuada con luz focal dirigida sobre el texto de lectura'],
    nursingCare: ['TRANQUILIZACIÓN SOBRE EL ENVEJECIMIENTO FISIOLÓGICO: Explicar al paciente de 40-45 años que la presbicia "no es una enfermedad ni un defecto maligno", sino un cambio fisiológico natural del ojo como las canas o las arrugas, que afecta al 100% de los seres humanos', 'Desaconsejar el uso prolongado de gafas premontadas de aumento ("gafas de lupa de farmacia o supermercado") no personalizadas, ya que no corrigen el astigmatismo ni la distancia interpupilar causando mareos y fatiga ocular', 'Promover pausas visuales ergonómicas cada 30 minutos de lectura o trabajo en ordenador']
  },
  {
    number: 493,
    id: 'diag-493',
    title: 'Miopía y Astigmatismo refractivo',
    cie10: 'H52.1 / H52.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Ametropías o vicios de refracción ocular comunes. La Miopía se produce cuando el eje anteroposterior del globo ocular es excesivamente largo o la córnea tiene una curvatura muy pronunciada, enfocando las imágenes por delante de la retina (visión lejana borrosa). El Astigmatismo se debe a una asimetría en la curvatura de la córnea (en forma de balón de rugby en lugar de esfera perfecta), originando múltiples puntos focales y visión distorsionada a cualquier distancia.',
    symptoms: ['EN LA MIOPÍA:', '- VISIÓN LEJANA NOTABLEMENTE BORROSA E INDEFINIDA', '- Visión de cerca nítida y excelente sin esfuerzo', '- Maniobra típica: "achinar o entrecerrar los párpados" (efecto estenopeico) para intentar ver con mayor claridad a la distancia', '- Acercarse excesivamente a los objetos, libros o televisores (común en niños escolares)', 'EN EL ASTIGMATISMO:', '- Visión distorsionada, borrosa, con sombras o bordes duplicados tanto de lejos como de cerca', '- Confusión de letras o números similares (E por F, 8 por 3)', '- Fatiga visual (astenopia), cefaleas frontotemporales y enrojecimiento tras lectura o trabajo en pantallas'],
    redFlags: ['MIOPÍA MAGNA O PATOLÓGICA (> -6.00 dioptrías o longitud axial >26 mm): ALTO RIESGO DE DESPRENDIMIENTO DE RETINA REGMATÓGENO, neovascularización coroidea miópica y glaucoma'],
    criteria: 'Determinación de la agudeza visual con cartilla de Snellen y examen de refracción bajo cicloplejía con autorrefractómetro.',
    labTests: ['Examen optométrico completo y retinografía con fondo de ojo dilatado'],
    imaging: ['Biometría ocular computarizada (mide longitud axial) y topografía corneal'],
    differential: ['Espasmo acomodativo infantil', 'Queratocono incipiente (en astigmatismos altos irregulares)', 'Catarata nuclear incipiente'],
    firstLine: [
      { drug: 'Corrección óptica con lentes esferocilíndricas divergentes cóncavas (-) y tóricas', dose: 'Prescripción de la graduación dióptrica exacta en gafas graduadas o lentes de contacto blandos/tóricos', route: 'Óptica externa', freq: 'Uso continuo', notes: 'Tratamiento no invasivo de primera elección indiscutible; desplaza el foco sobre la retina' }
    ],
    alternatives: [
      { drug: 'Cirugía Refractiva Corneal con Láser (LASIK / PRK / SMILE)', dose: 'Fotoablación del estroma corneal con láser excímer guiado por paquimetría para remodelar la curvatura corneal', route: 'Láser corneal', freq: 'Procedimiento electivo', notes: 'Indicada en mayores de 18-21 años con graduación estable durante al menos 1-2 años y córnea con grosor adecuado' },
      { drug: 'Implante de Lentes Fáquicos Intraoculares (ICL)', dose: 'Implantación quirúrgica de un lente intraocular flexible detrás del iris y delante del cristalino', route: 'Quirúrgico oftalmológico', freq: 'Procedimiento definitivo', notes: 'Tratamiento de elección en miopías altas (> -6 a -8 D) o córneas delgadas no aptas para láser' },
      { drug: 'Control de progresión de miopía en niños: Colirio de Atropina a dosis ultrabajas (0.01% - 0.05%)', dose: '1 gota en ambos ojos al acostarse todas las noches durante la infancia escolar', route: 'Oftálmica tópica nocturna', freq: 'c/24h nocturna x años', notes: 'Frena la elongación axial del ojo y reduce la progresión de la miopía en un 50-60%' }
    ],
    nonPharm: ['Aumentar el tiempo de juego al aire libre bajo luz solar natural (al menos 2 horas al día en niños escolares)', 'Regla de distancia adecuada de lectura (>30-40 cm)'],
    nursingCare: ['CONSEJERÍA DE PREVENCIÓN DE LA MIOPÍA EN ESCOLARES: Promover que los niños pasen al menos 2 horas diarias al aire libre con luz solar natural; la luz solar estimula la liberación de dopamina retiniana que frena el crecimiento axial excesivo del globo ocular', 'Revisión anual obligatoria de fondo de ojo en miopes altos (>6 D): educar a reconocer los síntomas de alarma de desprendimiento de retina (destellos luminosos, lluvia de puntos negros o sombra que tapa el ojo)', 'Higiene estricta de lentes de contacto: nunca lavarlos con agua del grifo ni dormir con ellos para prevenir queratitis por Acanthamoeba o Pseudomonas']
  },
  {
    number: 494,
    id: 'diag-494',
    title: 'Hipermetropía simple y acomodativa',
    cie10: 'H52.0',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'Defecto refractivo ocular común en el que el eje anteroposterior del globo ocular es más corto de lo normal o la córnea es demasiado plana, haciendo que los rayos luminosos paralelos converjan en un punto focal por detrás de la retina. En niños y adultos jóvenes, el músculo ciliar puede compensar el defecto mediante un esfuerzo acomodativo continuo y forzado (hipermetropía latente), provocando astenopia o estrabismo convergente.',
    symptoms: ['DIFICULTAD Y VISIÓN BORROSA PARA VER OBJETOS DE CERCA (que se manifiesta a edades más tempranas que la presbicia)', 'Visión de lejos conservada en hipermetropías leves gracias a la acomodación continua', 'ASTENOPIA ACOMODATIVA SEVERA: fatiga visual intensa, pesadez palpebral, ardor ocular y visión borrosa fluctuante al final de la jornada', 'CEFALEA FRONTAL O PERIURBICULAR VESPERTINA típica ("dolor de cabeza que aparece al final de la tarde tras estudiar o trabajar")', 'En niños pequeños con hipermetropía alta: ENDOTROPÍA ACOMODATIVA (desviación de uno o ambos ojos hacia adentro por exceso de convergencia vinculada al esfuerzo acomodativo forzado)'],
    redFlags: ['Hipermetropía alta en niños no corregida: riesgo directo de Ambliopía refractiva bilateral u ojo vago', 'Ojos pequeños con cámara anterior estrecha: ALTO RIESGO DE GLAUCOMA AGUDO DE ÁNGULO CERRADO en la edad adulta'],
    criteria: 'Refracción ciclopléjica obligatoria con gotas de Ciclopentolato (paraliza el músculo ciliar y revela la hipermetropía total latente).',
    labTests: ['Examen optométrico completo con cicloplejía'],
    imaging: ['Biometría ocular (longitud axial corta <22 mm) y gonioscopia'],
    differential: ['Presbicia pura (la presbicia aparece >40 años; la hipermetropía está presente desde la infancia)', 'Cefalea tensional', 'Astenopia por ojo seco'],
    firstLine: [
      { drug: 'Corrección óptica con lentes esféricas convexas positivas (+) convergentes', dose: 'Prescripción de la graduación exacta determinada bajo cicloplejía en gafas graduadas o lentes de contacto', route: 'Óptica externa', freq: 'Uso continuo', notes: 'Desplaza el foco hacia adelante haciéndolo coincidir exactamente sobre la retina; elimina por completo la cefalea y la fatiga ocular' }
    ],
    alternatives: [
      { drug: 'Cirugía Refractiva con Láser Excímer (LASIK hipermetrópico)', dose: 'Ablación periférica en anillo para aumentar la curvatura corneal central', route: 'Láser corneal', freq: 'Procedimiento electivo', notes: 'Indicada en hipermetropías leves a moderadas (< +4.00 D) en adultos con córneas adecuadas' },
      { drug: 'Lentes intraoculares fáquicos o sustitución de cristalino claro', dose: 'Procedimiento quirúrgico', route: 'Quirúrgico', freq: 'Procedimiento electivo', notes: 'En hipermetropías muy elevadas' }
    ],
    nonPharm: ['Adecuada iluminación y distancias de lectura ergonómicas'],
    nursingCare: ['RELEVANCIA DEL EXAMEN CON CICLOPLEJÍA EN NIÑOS: Explicar a los padres que para medir correctamente la vista de un niño hipermetrópico es IMPRESCINDIBLE DILATARLE LA PUPILA con gotas de ciclopentolato; sin las gotas, el potente músculo ciliar del niño enmascara el defecto y el examen sale falsamente normal', 'Relación entre cefalea y gafas en escolares: interrogar si el dolor de cabeza infantil aparece de lunes a viernes después de clases y desaparece los fines de semana (sospecha típica de hipermetropía)', 'Advertir sobre la anatomía ocular estrecha: los ojos de los pacientes con hipermetropía alta son más pequeños y tienen predisposición anatómica a ataques de glaucoma agudo']
  },
  {
    number: 495,
    id: 'diag-495',
    title: 'Retinoblastoma infantil (Tumor retiniano maligno pediátrico)',
    cie10: 'C69.2',
    category: 'Neurológicas y Salud Mental',
    chapter: 'VII. Enfermedades Neurológicas, de Salud Mental y Oftalmológicas (411-495)',
    definition: 'La neoplasia maligna intraocular primaria más frecuente de la infancia (>90% diagnosticado antes de los 3 a 5 años de edad), originada en los precursores de las células neuronales de la retina por la mutación bialélica del gen supresor tumoral RB1 en el cromosoma 13q14. Puede ser hereditario bilateral/multifocal (40%) o esporádico unilateral (60%). Con detección precoz tiene una tasa de curación superior al 95%.',
    symptoms: ['LEUCOCORIA PATOGNOMÓNICA ("SIGNO DEL REFLEJO PUPILAR BLANCO O DEL OJO DE GATO"):', '- Ausencia del reflejo rojo pupilar normal en el ojo enfermo', '- Visualización de un reflejo blanquecino, amarillento o brillante en la pupila, especialmente evidente en FOTOGRAFÍAS CON FLASH O BAJO ILUMINACIÓN AMBIENTAL TENUE (en >60-70% es el primer signo notado por los padres)', 'ESTRABISMO CONVERGENTE O DIVERGENTE DE APARICIÓN RECIENTE (segundo signo más común 20-25% por pérdida de la fijación foveal)', 'Ojo rojo doloroso secundario a glaucoma neovascular o pseudohipopión tumoral en cámara anterior', 'Proptosis masiva con masa tumoral orbitaria exofítica visible en fases muy avanzadas no tratadas'],
    redFlags: ['EXTENSIÓN EXTRAOCULAR AL NERVIO ÓPTICO Y SISTEMA NERVIOSO CENTRAL (mortalidad muy elevada por diseminación leptomeníngea)', 'Retinoblastoma trilateral (afectación ocular bilateral asociada a un pineoblastoma en el SNC)'],
    criteria: 'Leucocoria con masa calcificada intraocular en ecografía/RM y confirmación de mutación en gen RB1.',
    labTests: ['Estudio genético molecular del gen RB1 en sangre y tejido tumoral (imprescindible para cribado de hermanos y descendientes)'],
    imaging: ['Ecografía ocular modo B (demuestra masa intraocular con CALCIFICACIONES PATOGNOMÓNICAS muy hiperecoicas)', 'RM de cerebro y órbitas con contraste (obligatoria para evaluar invasión del nervio óptico y descartar tumor pineal en SNC; NO SE DEBE HACER TC por la radiación en pacientes con mutación RB1)'],
    differential: ['Catarata congénita infantil', 'Enfermedad de Coats (telangiectasias retinianas exudativas unilaterales en varones)', 'Persistencia de vasculatura fetal hiperplásica (PFV)', 'Toxocariasis ocular con granuloma'],
    firstLine: [
      { drug: 'Quimioterapia de salvamento ocular: Quimioterapia Intraarterial (QIA) a través de la arteria oftálmica', dose: 'Infusión selectiva superselectiva de Melfalán +/- Topotecán a través de microcatéter guiado por angiografía en la arteria oftálmica', route: 'Intraarterial oftálmica selectiva', freq: 'Ciclos mensuales (2 a 4 sesiones)', notes: 'REVOLUCIONÓ EL TRATAMIENTO DEL RETINOBLASTOMA MUNDIAL; salva el ojo y la visión evitando la enucleación en >80% de los casos' },
      { drug: 'Terapias locales consolidativas: Crioterapia, Láser transpupilar (TTT) o Braquiterapia epiescleral', dose: 'Tratamientos destructivos focales en tumores pequeños', route: 'Procedimiento especializado', freq: 'Según protocolo oncológico', notes: 'Consolida la erradicación del tumor residual' }
    ],
    alternatives: [
      { drug: 'Enucleación quirúrgica completa primaria del globo ocular', dose: 'Extirpación quirúrgica completa del ojo con un segmento largo de nervio óptico (>10-15 mm)', route: 'Quirúrgico oncológico', freq: 'Procedimiento definitivo', notes: 'Indicada en ojos con tumores gigantes avanzados (Grupo E), glaucoma neovascular o invasión masiva sin potencial visual para salvar la vida del niño' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA DE BIOPSIA OCULAR POR PUNCIÓN (la punción de la aguja a través de la esclera provocaría la diseminación metastásica letal del tumor)'],
    nursingCare: ['DETECCIÓN DE LEUCOCORIA EN EL CONTROL DE CRED DE ENFERMERÍA (TEST DEL REFLEJO ROJO / TEST DE BRÜCKNER): En cada control de crecimiento y desarrollo del lactante, observar a oscuras con el oftalmoscopio directo a 50 cm de distancia ambos ojos al mismo tiempo; SI EN LUGAR DEL REFLEJO ROJO-NARANJA NORMAL SE APRECIA UN REFLEJO BLANCO O ASIMÉTRICO EN UNA PUPILA, DERIVAR DE FORMA URGENTE E INMEDIATA AL OFTALMÓLOGO ESE MISMO DÍA', 'Educación a los padres: enseñar a prestar atención si en las fotos tomadas con el teléfono móvil o cámara con flash la pupila del niño sale blanca en lugar de roja ("signo de la foto")', 'Asesoramiento genético a la familia y cribado seriado de hermanos recién nacidos']
  }
];


