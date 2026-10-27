import { CatalogoEntry } from './types';

export const capitulo6: CatalogoEntry[] = [
  {
    number: 331,
    id: 'diag-331',
    title: 'Gonartrosis (Artrosis de rodilla)',
    cie10: 'M17.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad articular degenerativa progresiva caracterizada por la degradación y pérdida del cartílago hialino articular de la rodilla (fémoro-tibial y/o fémoro-rotuliana), remodelado óseo subcondral con esclerosis, osteofitos marginales y sinovitis secundaria de bajo grado.',
    symptoms: ['Dolor articular mecánico de rodilla: aparece o empeora con la carga de peso, marcha, subir o bajar escaleras, y alivia con el reposo', 'Rigidez matutina breve de menos de 30 minutos de duración', 'Crepitación articular palpable y audible a la flexoextensión', 'Deformidad articular en genu varo o genu valgo progresiva', 'Derrame articular episódico tras esfuerzo prolongado y limitación funcional'],
    redFlags: ['Incapacidad funcional total para la marcha independiente', 'Bloqueo articular agudo por cuerpo libre intraarticular'],
    criteria: 'Criterios ACR para artrosis de rodilla: Dolor de rodilla + al menos 3 de los siguientes: edad > 50 años, rigidez matutina < 30 min, crepitación, engrosamiento óseo, sin calor local palpable.',
    labTests: ['Líquido sinovial de características mecánicas/no inflamatorio (límpido, viscoso, < 2000 leucocitos/mm3 con predominio mononuclear)'],
    imaging: ['Radiografía simple de ambas rodillas en carga anteroposterior y lateral + proyección axial de rótulas a 30°: Cuarteto radiológico clásico (pinzamiento del espacio articular asimétrico, esclerosis ósea subcondral, osteofitos marginales y geodas subcondrales)'],
    differential: ['Artritis reumatoide (dolor inflamatorio que mejora con el movimiento, rigidez > 1h)', 'Meniscopatía degenerativa o rotura meniscal', 'Artritis por microcristales (pseudogota/gota)'],
    firstLine: [
      { drug: 'Medidas no farmacológicas de primera línea (Pilar fundamental de la OARSI)', dose: 'Reducción del peso corporal (la pérdida del 5-10% del peso reduce la carga articular un 50%) + Ejercicio terapéutico de fortalecimiento del cuádriceps de bajo impacto (natación, bicicleta estática)', route: 'Estilo de vida', freq: 'Permanente', notes: 'Tratamiento basal más costo-efectivo para frenar el declive funcional' },
      { drug: 'AINEs tópicos de primera línea farmacológica: Diclofenaco en gel al 1% o 2%', dose: 'Aplicar 4 g sobre la rodilla afectada cada 6 a 8 horas con masaje suave', route: 'Tópica', freq: 'c/6-8h', notes: 'Eficacia similar a los AINEs orales con excelente perfil de seguridad gastrointestinal y renal' },
      { drug: 'Paracetamol oral para dolor leve a moderado', dose: '500 a 1000 mg cada 8 horas VO (máximo 3 g/día)', route: 'VO', freq: 'c/8h SOS', notes: 'Analgésico de base seguro' }
    ],
    alternatives: [
      { drug: 'Infiltración intraarticular de Corticoides (Triamcinolona) o Ácido Hialurónico (Viscosuplementación)', dose: 'Triamcinolona acetónido 40 mg intraarticular con técnica aséptica estricta', route: 'Intraarticular', freq: 'Cada 3 a 6 meses SOS', notes: 'Alivio rápido en brotes de sinovitis con derrame articular' },
      { drug: 'Artroplastia Total de Rodilla (Prótesis de rodilla)', dose: 'Procedimiento quirúrgico ortopédico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en gonartrosis severa grado IV de Kellgren-Lawrence con dolor refractario e invalidante' }
    ],
    nonPharm: ['Uso de bastón en la mano contralateral para descargar peso de la rodilla afecta', 'Calzado cómodo con suela amortiguadora de impacto'],
    nursingCare: ['EDUCACIÓN SOBRE EL USO DEL BASTÓN: Instruir que debe sostenerse SIEMPRE en la mano OPUESTA a la rodilla enferma y avanzar al mismo tiempo que la extremidad afectada', 'Enseñanza demostrativa de ejercicios isométricos de cuádriceps (contracción en extensión en cama sin flexionar la articulación)', 'Cuidado y técnica aséptica estricta en asistencia de infiltraciones intraarticulares', 'Vigilancia de complicaciones postoperatorias de prótesis de rodilla (infección de herida y profilaxis de TVP)']
  },
  {
    number: 332,
    id: 'diag-332',
    title: 'Coxartrosis (Artrosis de cadera)',
    cie10: 'M16.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad degenerativa de la articulación coxofemoral producida por la pérdida progresiva del cartílago articular de la cabeza femoral y del cotilo acetabular, asociada a osteofitos y deformidad esferoidal de la cabeza femoral.',
    symptoms: ['Dolor mecánico localizado típicamente en la REGIÓN INGUINAL que irradia por la cara anterointerna del muslo hacia la rodilla (a menudo el paciente refiere dolor en la rodilla pero el origen está en la cadera)', 'Dolor que empeora al iniciar la marcha ("dolor de arranque"), al calzarse o ponerse los calcetines, y al cruzar las piernas', 'Limitación precoz y dolorosa de la rotación interna y abducción de la cadera', 'Cojera antiálgica de la marcha y discrepancia de longitud en estadios avanzados'],
    redFlags: ['Necrosis avascular de la cabeza femoral', 'Pérdida de la marcha y encamamiento progresivo'],
    criteria: 'Criterios ACR: Dolor de cadera + al menos 2 de los siguientes: VSG < 20 mm/h, osteofitos acetabulares/femorales en radiografía o pinzamiento articular coxofemoral.',
    labTests: ['VSG y PCR normales (descarta patología inflamatoria)'],
    imaging: ['Radiografía de pelvis en carga (proyección anteroposterior y axial de cadera): pinzamiento superoexterno o concéntrico del espacio articular, osteofitos periacetabulares y deformidad de la cabeza femoral'],
    differential: ['Trocanteritis / Bursitis trocantérea (dolor en la cara lateral externa, no en la ingle)', 'Radiculopatía lumbar L2-L3 irradiada', 'Necrosis avascular de la cabeza femoral'],
    firstLine: [
      { drug: 'Manejo conservador integral: Reducción de sobrepeso + Fisioterapia de movilidad coxofemoral + Descarga con bastón contralateral', dose: 'Plan multimodal continuo', route: 'Fisioterapia física', freq: 'Permanente', notes: 'Alivia significativamente la carga sobre la cabeza femoral' },
      { drug: 'AINEs orales a dosis mínimas eficaces por ciclos cortos (Ibuprofeno o Celecoxib)', dose: 'Ibuprofeno 400 mg cada 8 horas VO con comidas o Celecoxib 200 mg/día VO', route: 'VO con alimentos', freq: 'c/12-24h por ciclos', notes: 'Control de brotes álgicos; proteger con IBP en mayores de 65 años' }
    ],
    alternatives: [
      { drug: 'Artroplastia Total de Cadera (Prótesis total de cadera)', dose: 'Cirugía ortopédica de reemplazo articular', route: 'Quirúrgica', freq: 'Única', notes: 'UNA DE LAS CIRUGÍAS MÁS EXITOSAS DE LA MEDICINA: Elimina el dolor y restaura la marcha normal en artrosis severa' }
    ],
    nonPharm: ['Evitar subir y bajar escaleras repetitivamente, bipedestación prolongada y terrenos irregulares'],
    nursingCare: ['PREVENCIÓN DE LUXACIÓN EN EL POSTOPERATORIO DE PRÓTESIS DE CADERA: Instruir a la paciente a NO flexionar la cadera > 90°, NO cruzar las piernas (adducción prohibida), usar alzador para el inodoro y colocar un cojín abductor entre las piernas al dormir en decúbito supino', 'Promover el uso del bastón en el lado sano', 'Vigilancia de pulsos distales y signos de trombosis venosa profunda postquirúrgica']
  },
  {
    number: 333,
    id: 'diag-333',
    title: 'Artrosis de manos',
    cie10: 'M15.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Forma prevalente de osteoartritis que afecta de manera selectiva a las articulaciones interfalángicas distales (IFD), interfalángicas proximales (IFP) y a la articulación trapeciometacarpiana del pulgar (Rizartrosis), con predisposición genética y predominio en mujeres postmenopáusicas.',
    symptoms: ['Dolor articular mecánico sordo en dedos de las manos al teclear, coser o realizar pinza digital', 'Rigidez matutina breve de dedos (< 15-30 minutos)', 'Deformidades nodulares óseas duras características indoloras o dolorosas en brotes:', '- NÓDULOS DE HEBERDEN en las articulaciones interfalángicas distales (IFD)', '- NÓDULOS DE BOUCHARD en las articulaciones interfalángicas proximales (IFP)', '- En Rizartrosis del pulgar: dolor en la base del pulgar al abrir frascos, girar llaves o escribir, con deformidad del pulgar "en z" o "en escuadra"'],
    redFlags: ['Artrosis erosiva de manos (forma inflamatoria severa destructiva con deformidades rápidas)'],
    criteria: 'Criterios ACR para artrosis de manos: Dolor o rigidez en manos + engrosamiento de ≥ 2 de 10 articulaciones seleccionadas + < 2 articulaciones MCF tumefactas + nódulos de Heberden en ≥ 2 articulaciones IFD.',
    labTests: ['Factor Reumatoide y Anticuerpos Anti-CCP NEGATIVOS (crucial para diferenciar de artritis reumatoide)'],
    imaging: ['Radiografía simple de ambas manos en proyección anteroposterior: estrechamiento articular en IFD/IFP, osteofitos prominentes y esclerosis; en artrosis erosiva imagen típica "en alas de gaviota"'],
    differential: ['Artritis reumatoide (afecta característicamente a las articulaciones Metacarpofalángicas - MCF y muñecas, y RESPETA las IFD)', 'Artritis psoriásica', 'Gota tofácea en manos'],
    firstLine: [
      { drug: 'AINEs tópicos en gel aplicados sobre los dedos (Diclofenaco en gel al 1% o 2%)', dose: 'Aplicar 2 a 3 veces al día en las articulaciones dolorosas con masaje suave', route: 'Tópica', freq: 'c/8-12h', notes: 'Fármaco de primera línea con mínima absorción sistémica' },
      { drug: 'Férulas u ortesis de inmovilización del pulgar para Rizartrosis', dose: 'Férula termoplástica rígida para actividades dolorosas o de uso nocturno', route: 'Ortopédica', freq: 'Diario según dolor', notes: 'Estabiliza la articulación trapeciometacarpiana y alivia la fuerza de cizallamiento' }
    ],
    alternatives: [
      { drug: 'Infiltración intraarticular con corticoides guiada por ecografía en rizartrosis severa', dose: 'Triamcinolona 10 mg en la articulación trapeciometacarpiana', route: 'Intraarticular', freq: 'SOS', notes: 'Alivio temporal eficaz en fases agudas' },
      { drug: 'Trapeciectomía quirúrgica con ligamentoplastia de suspensión', dose: 'Cirugía de la mano', route: 'Quirúrgica', freq: 'Única', notes: 'En rizartrosis avanzada con dolor intratable e incapacidad de pinza' }
    ],
    nonPharm: ['Ejercicios de movilidad activa en agua tibia por las mañanas (termoterapia con parafina)', 'Uso de dispositivos adaptativos ergonómicos (abrefrascos, bolígrafos gruesos)'],
    nursingCare: ['REGLA CLÍNICA DE ORO PARA ENFERMERÍA: LA ARTROSIS AFECTA LAS IFD (Heberden); LA ARTRITIS REUMATOIDE NUNCA ATACA LAS IFD Y AFECTA LAS MCF Y MUÑECAS', 'Enseñar a la paciente baños de manos con agua templada por las mañanas durante 10 minutos para disipar la rigidez inicial', 'Recomendar adaptadores de agarre para utensilios domésticos para proteger las articulaciones'],
  },
  {
    number: 334,
    id: 'diag-334',
    title: 'Espondiloartrosis lumbar/cervical',
    cie10: 'M47.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad degenerativa osteoarticular de la columna vertebral que afecta a los discos intervertebrales (discopatía degenerativa) y a las articulaciones interapofisarias posteriores (artrosis facetaria), localizada predominantemente en los segmentos cervical (C5-C7) y lumbar (L4-S1).',
    symptoms: ['En espondiloartrosis lumbar: dolor lumbar bajo mecánico sordo que aumenta con la bipedestación prolongada, la extensión y la rotación del tronco, y alivia al sentarse o acostarse con flexión de caderas', 'En espondiloartrosis cervical: cervicalgia sorda, rigidez cervical y chasquidos con los giros del cuello', 'Parestesias o irradiación radicular si los osteofitos comprimen los agujeros de conjunción', 'Rigidez raquídea matutina breve'],
    redFlags: ['Mielopatía cervical espondilótica (hiperreflexia, signo de Babinski, marcha espástica atáxica y torpeza manual con riesgo de tetraplejía)', 'Síndrome de cola de caballo'],
    criteria: 'Dolor raquídeo mecánico axial + hallazgos radiológicos o tomográficos de degeneración discal y facetaria concordantes.',
    labTests: ['Habitualmente normales'],
    imaging: ['Radiografía simple de columna cervical y lumbar (pinzamiento del espacio discal, osteofitos marginales anteriores y posteriores, y artrosis interapofisaria)', 'Resonancia Magnética de columna (método de elección si hay sospecha de compromiso radicular o medular)'],
    differential: ['Espondiloartritis anquilosante', 'Metástasis óseas vertebrales', 'Espondilodiscitis infecciosa'],
    firstLine: [
      { drug: 'Higiene postural y fortalecimiento de la musculatura paravertebral y CORE (Pilar angular)', dose: 'Programa de cinesiterapia y fisioterapia activa guiada por fisioterapeuta', route: 'Fisioterapia física', freq: 'Permanente', notes: 'El fortalecimiento muscular disminuye la carga axial transmitida a las facetas articulares' },
      { drug: 'Paracetamol o AINEs por ciclos cortos para crisis agudas de dolor', dose: 'Paracetamol 1 g cada 8 horas VO o Naproxeno 500 mg cada 12 horas VO con comidas por 5-7 días', route: 'VO', freq: 'c/8-12h SOS', notes: 'Alivio del dolor en reagudizaciones' }
    ],
    alternatives: [
      { drug: 'Bloqueo facetario o Rizólisis por radiofrecuencia de los ramos mediales dorsales', dose: 'Procedimiento intervencionista del dolor', route: 'Percutáneo guiado', freq: 'Semestral/Anual', notes: 'Excelente opción terapéutica en artrosis facetaria lumbar o cervical severa con dolor refractario' }
    ],
    nonPharm: ['Colchón firme de calidad, almohada ergonómica y pausas activas laborales'],
    nursingCare: ['Instruir sobre la técnica correcta de levantamiento de cargas: flexionar siempre las rodillas manteniendo la espalda recta y el peso pegado al cuerpo (NUNCA flexionar el tronco con las piernas estiradas)', 'Vigilancia de signos neurológicos de mielopatía cervical (caída de objetos de las manos o dificultad para abotonarse)', 'Fomentar la pérdida de peso para aliviar la sobrecarga lordótica lumbar']
  },
  {
    number: 335,
    id: 'diag-335',
    title: 'Artritis reumatoide',
    cie10: 'M05.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad inflamatoria sistémica autoinmune crónica caracterizada por una sinovitis proliferativa destructiva que afecta simétricamente a las pequeñas articulaciones periféricas, conduciendo a la destrucción del cartílago, erosiones óseas marginales y deformidades articulares progresivas.',
    symptoms: ['POLIARTRITIS SIMÉTRICA BILATERAL de pequeñas articulaciones de manos y pies (afecta típicamente a Metacarpofalángicas - MCF, Interfalángicas proximales - IFP y Muñecas; RESPETA LAS INTERFALÁNGICAS DISTALES - IFD)', 'RIGIDEZ MATUTINA PROLONGADA DE MÁS DE 1 HORA DE DURACIÓN (signo cardinal inflamatorio)', 'Articulaciones calientes, tumefactas, edematosas con dolor que MEJORA CON EL MOVIMIENTO', 'Dolor a la compresión lateral de las cabezas metacarpianas (Signo de Morton positivo)', 'Deformidades articulares tardías en casos no tratados: desviación cubital de los dedos "en ráfaga cubital", dedos "en cuello de cisne", dedos "en ojal / boutonnière" y subluxación atloaxoidea cervical', 'Manifestaciones extraarticulares: nódulos reumatoides subcutáneos sobre salientes óseas, vasculitis y queratoconjuntivitis seca'],
    redFlags: ['Subluxación atloaxoidea (C1-C2) con compresión del bulbo raquídeo o médula cervical ante flexión de cuello', 'Enfermedad pulmonar intersticial difusa (EPID)'],
    criteria: 'Criterios de clasificación ACR/EULAR 2010 (puntuación ≥ 6 de 10 puntos evaluando compromiso articular, serología, reactantes de fase aguda y duración de síntomas ≥ 6 semanas).',
    labTests: ['ANTICUERPOS ANTI-PÉPTIDOS CITRULINADOS (Anti-CCP / ACPA: sensibilidad 75-80% y especificidad > 96%, con alto valor pronóstico de enfermedad erosiva)', 'FACTOR REUMATOIDE (FR IgM: positivo en 70-80% de casos)', 'PCR y VSG marcadamente elevadas (correlacionan con actividad de enfermedad / Score DAS28)', 'Hemograma (anemia normocítica de enfermedad inflamatoria crónica)'],
    imaging: ['Radiografía simple comparativa de manos y pies (proyecciones anteroposterior y oblicua): osteopenia yuxtaarticular, edema de partes blandas y erosiones óseas marginales "en sacabocado" subcondrales', 'Ecografía articular de alta resolución con Power Doppler (detecta sinovitis subclínica y vascularización sinovial precoz)'],
    differential: ['Osteoartritis / Artrosis de manos (afecta IFD con Heberden, rigidez < 30 min y anti-CCP negativos)', 'Lupus eritematoso sistémico (artropatía de Jaccoud no erosiva)', 'Artritis psoriásica'],
    firstLine: [
      { drug: 'METOTREXATO ORAL O SUBCUTÁNEO (Pilar de anclaje de todos los FAMEs sintéticos)', dose: 'Dosis inicial 10 a 15 mg una vez por semana (VO o SC), escalando gradualmente cada 4 semanas hasta 20 a 25 mg UNA SOLA VEZ POR SEMANA', route: 'VO / SC semanal', freq: 'UNA VEZ POR SEMANA', notes: 'REGLA DE VIDA: Se toma UN SOLO DÍA A LA SEMANA; asociar obligatoriamente ÁCIDO FÓLICO 5 mg VO 24 a 48 horas después del metotrexato para prevenir toxicidad; requiere control hematológico y hepático' },
      { drug: 'Terapia puente con Corticoides a dosis bajas (Prednisona)', dose: '5 a 10 mg/día VO en la mañana con desayuno durante los primeros 2 a 3 meses', route: 'VO', freq: 'c/24h matutino', notes: 'Alivio antiinflamatorio rápido mientras el metotrexato alcanza su efecto terapéutico pleno (6 a 12 semanas); retirar gradualmente' }
    ],
    alternatives: [
      { drug: 'Terapia Biológica con Fármacos Anti-TNF (Adalimumab o Etanercept) o Anti-IL-6 (Tocilizumab)', dose: 'Adalimumab 40 mg SC cada 2 semanas o Etanercept 50 mg SC semanal', route: 'SC', freq: 'Reglado', notes: 'Indicados de segunda línea ante fracaso o respuesta inadecuada a metotrexato a dosis plenas' },
      { drug: 'Inhibidores de JAK (Tofacitinib o Baricitinib u Upadacitinib)', dose: '1 comprimido diario VO', route: 'VO', freq: 'c/24h', notes: 'Fármacos sintéticos dirigidos orales de alta eficacia' }
    ],
    nonPharm: ['Terapia ocupacional con ejercicios de conservación de la energía y protección articular'],
    nursingCare: ['EDUCACIÓN DE SEGURIDAD CRÍTICA SOBRE METOTREXATO: Asegurar que el paciente y familia comprendan sin lugar a dudas que el metotrexato se toma UN SOLO DÍA FIJO A LA SEMANA (la toma diaria equivocada produce aplasia medular mortal)', 'Verificar la toma de Ácido Fólico 24-48 horas después del día del metotrexato', 'Monitoreo de biometría hemática y perfil hepático cada 1 a 3 meses', 'Advertir a los anestesiólogos e instrumentistas sobre el riesgo de subluxación atloaxoidea durante la intubación endotraqueal (evitar flexión forzada del cuello)']
  },
  {
    number: 336,
    id: 'diag-336',
    title: 'Artritis idiopática juvenil',
    cie10: 'M08.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Grupo heterogéneo de artritis inflamatorias crónicas de causa desconocida que comienzan antes de los 16 años de edad y persisten durante al menos 6 semanas, clasificadas según los criterios ILAR en 7 subtipos: Oligoarticular (más común, ≤ 4 articulaciones), Poliarticular (≥ 5 articulaciones), Sistémica (Enfermedad de Still del niño), Psoriásica, Entesitis relacionada y No diferenciada.',
    symptoms: ['Cojera o renguera matutina en el niño (el niño se levanta "torpe o renco" y mejora al cabo de unas horas)', 'Tumefacción, calor y limitación del rango articular (comúnmente rodilla o tobillo)', 'En forma sistémica: FIEBRE ALTA EN PICOS DIARIOS ("fiebre en agujas" vespertina/nocturna) + exantema evanescente asalmonado en tronco + adenopatías y hepatoesplenomegalia', 'UVEÍTIS ANTERIOR CRÓNICA ASINTOMÁTICA EN FORMA OLIGOARTICULAR (riesgo de ceguera silenciosa)'],
    redFlags: ['Síndrome de Activación Macrofágica (SAM) en forma sistémica (fiebre continua, pancitopenia, ferritina estratosférica > 5000-10,000 ng/mL y CID)', 'Uveítis anterior crónica asintomática con sinequias y cataratas'],
    criteria: 'Artritis persistente en una o más articulaciones por ≥ 6 semanas en menores de 16 años tras descartar otras causas (infecciosas, hematológicas).',
    labTests: ['Anticuerpos Antinucleares (ANA: su positividad en forma oligoarticular confiere ALTO RIESGO de uveítis ocular silenciosa)', 'Ferritina sérica marcadamente elevada en forma sistémica', 'Factor Reumatoide, VSG y PCR'],
    imaging: ['EVALUACIÓN OFTALMOLÓGICA PERIÓDICA CON LÁMPARA DE HENDIDURA OBLIGATORIA CADA 3 A 6 MESES (detección precoz de uveítis anterior antes del daño visual permanente)', 'Ecografía articular con Doppler'],
    differential: ['Artritis séptica aguda', 'Leucemia linfoblástica aguda infantil (dolor óseo nocturno con anemia/plaquetopenia)', 'Fiebre reumática'],
    firstLine: [
      { drug: 'En forma oligoarticular: Infiltración intraarticular con Hexacetónido de Triamcinolona', dose: '1 a 2 mg/kg en rodilla con técnica estéril', route: 'Intraarticular', freq: 'Puntual', notes: 'Induce remisión prolongada en > 80% sin toxicidad sistémica' },
      { drug: 'En forma poliarticular o persistente: Metotrexato subcutáneo semanal', dose: '10 a 15 mg/m2 de superficie corporal SC una vez por semana + Ácido fólico', route: 'SC semanal', freq: 'Semanal', notes: 'FAME de primera línea pediátrico' }
    ],
    alternatives: [
      { drug: 'Fármacos Biológicos Anti-TNF (Etanercept o Adalimumab) o Anti-IL-1 (Anakinra) / Anti-IL-6 (Tocilizumab)', dose: 'Anakinra en forma sistémica o Adalimumab en uveítis', route: 'SC', freq: 'Reglado', notes: 'Eficacia espectacular en casos refractarios y prevención de daño articular' }
    ],
    nonPharm: ['Fisioterapia activa para evitar contracturas en flexión y pérdida de masa muscular'],
    nursingCare: ['CUMPLIMIENTO ESTRICTO DE LAS REVISIONES OFTALMOLÓGICAS: La uveítis de la AIJ es silente y no produce ojo rojo ni dolor, pero causa ceguera; asegurar que el niño asista a la lámpara de hendidura periódica', 'Administración del metotrexato por vía subcutánea con agujas finas y técnica lúdica sin generar trauma en el niño', 'Monitoreo de curva de crecimiento y peso corporal']
  },
  {
    number: 337,
    id: 'diag-337',
    title: 'Espondilitis anquilosante',
    cie10: 'M45.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Espondiloartritis axial inflamatoria crónica y progresiva que afecta de forma primaria al esqueleto axial (articulaciones sacroilíacas y columna vertebral) y a las entesis (inserciones tendinosas), íntimamente asociada al antígeno de histocompatibilidad HLA-B27, con tendencia a la osificación y anquilosis ósea completa ("columna en caña de bambú").',
    symptoms: ['DOLOR LUMBAR Y GLÚTEO INFLAMATORIO TÍPICO en varones jóvenes (< 40 años):', '- Comienzo insidioso > 3 meses de evolución', '- Empeora característicamente con el reposo y en la segunda mitad de la noche (despierta al paciente de madrugada obligándole a levantarse)', '- MEJORA NOTABLEMENTE CON EL MOVIMIENTO Y EL EJERCICIO FÍSICO', '- Dolor glúteo alternante "en báscula"', '- Rigidez matutina espinal prolongada > 30-60 minutos', 'Dolor en entesis (entesitis de tendón de Aquiles o fascitis plantar)', 'Uveítis anterior aguda unilateral (ojo rojo doloroso con fotofobia)', 'Deformidad postural tardía: pérdida de la lordosis lumbar, cifosis dorsal acentuada con hiperextensión cervical ("postura del esquiador")'],
    redFlags: ['Fracturas vertebrales por traumatismos mínimos en columna anquilosada rígida con lesión medular', 'Insuficiencia aórtica por aortitis'],
    criteria: 'Criterios ASAS para Espondiloartritis Axial: Dolor lumbar crónico ≥ 3 meses en < 45 años + Sacroiliitis en Resonancia Magnética o Radiografía + al menos 1 característica de SpA (o HLA-B27 positivo + al menos 2 características de SpA).',
    labTests: ['ANTÍGENO HLA-B27 (positivo en más del 85-90% de los pacientes con espondilitis anquilosante)', 'PCR y VSG elevadas (marcan actividad inflamatoria)', 'Factor reumatoide y Anti-CCP estrictamente NEGATIVOS'],
    imaging: ['RESONANCIA MAGNÉTICA DE ARTICULACIONES SACROILÍACAS (gold standard precoz: demuestra edema óseo subcondral activo en secuencias STIR antes de que aparezcan cambios radiológicos)', 'Radiografía simple de sacroilíacas y columna (en estadios avanzados: sacroiliitis bilateral grado II-IV, sindesmofitos marginales verticales simétricos y "columna en caña de bambú")'],
    differential: ['Lumbalgia mecánica común', 'Hernia discal lumbar', 'Artritis psoriásica axial', 'Hiperostosis esquelética idiopática difusa (DISH / Forestier)'],
    firstLine: [
      { drug: 'AINEs orales a dosis plenas continuas (Tratamiento farmacológico de primera línea según guías ASAS/EULAR): Indometacina o Naproxeno o Celecoxib', dose: 'Naproxeno 500 mg cada 12 horas VO con comidas o Celecoxib 200 mg cada 12-24 horas VO', route: 'VO con alimentos', freq: 'c/12-24h continuo', notes: 'Respuesta analgésica e inflamatoria excelente en > 70-80%; frena la osificación ectópica si se toma continuado' },
      { drug: 'EJERCICIO FÍSICO TERAPÉUTICO Y FISIOTERAPIA ESPINAL DIARIA OBLIGATORIA (Pilar de Oro no farmacológico)', dose: 'Sesiones diarias de ejercicios de movilidad espinal, estiramiento y natación (estilo espalda)', route: 'Fisioterapia física', freq: 'Diario permanente', notes: 'Esencial para preservar la movilidad raquídea y prevenir la anquilosis deformante' }
    ],
    alternatives: [
      { drug: 'Terapia Biológica con Anti-TNF (Adalimumab, Infliximab, Golimumab o Etanercept)', dose: 'Adalimumab 40 mg SC cada 2 semanas o Golimumab 50 mg SC mensual', route: 'SC', freq: 'Reglado', notes: 'INDICADA DE ELECCIÓN si la actividad inflamatoria persiste elevada (ASDAS ≥ 2.1) tras probar al menos 2 AINEs distintos' },
      { drug: 'Inhibidores de la Interleucina-17 (Secukinumab o Ixekizumab)', dose: 'Secukinumab 150 mg SC mensual', route: 'SC', freq: 'Mensual', notes: 'Excelente eficacia en espondiloartritis axial activa' }
    ],
    nonPharm: ['Abandono terminante del tabaco (el tabaquismo acelera la formación de sindesmofitos y anquilosis ósea)'],
    nursingCare: ['MEDICIÓN DEL TEST DE SCHOBER: Medir 10 cm por encima y 5 cm por debajo de las fositas de Venus en decúbito supino; pedir a la paciente que flexione el tronco sin doblar rodillas; un aumento < 5 cm indica limitación severa de flexión lumbar', 'Medición de la expansión torácica a nivel del 4° espacio intercostal (normal > 5 cm; < 2.5 cm indica anquilosis costovertebral)', 'Inspección de ojos: educar para consultar de urgencia ante ojo rojo doloroso y fotofobia (alerta de uveítis anterior)', 'Dormir sobre colchón firme y con almohada muy baja para evitar anquilosis en flexión cervical']
  },
  {
    number: 338,
    id: 'diag-338',
    title: 'Artritis psoriásica',
    cie10: 'L40.5',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Espondiloartritis inflamatoria crónica seronegativa que se desarrolla en el 15-30% de los pacientes con psoriasis cutánea o ungueal, caracterizada por afectación de articulaciones periféricas (con predilección por interfalángicas distales), esqueleto axial, entesitis y dactilitis.',
    symptoms: ['Oligoartritis asimétrica o poliartritis que AFECTA DE FORMA CARACTERÍSTICA LAS ARTICULACIONES INTERFALÁNGICAS DISTALES (IFD)', 'DACTILITIS ("DEDO EN SALCHICHA" / Sausage digit): tumefacción difusa, dolorosa y uniforme de todo un dedo de la mano o pie por sinovitis y tenosinovitis combinada', 'Entesitis dolorosa en tendón de Aquiles o fascia plantar', 'Distrofia ungueal psoriásica (PIQUETEADO UNGUEAL / Pitting ungueal, hiperqueratosis subungueal y manchas de aceite)', 'Placas eritematoescamosas de psoriasis en piel (codos, rodillas, cuero cabelludo, ombligo)', 'Forma mutilante con osteólisis grave ("dedo en catalejo")'],
    redFlags: ['Artritis mutilante con reabsorción ósea severa e invalidez permanente'],
    criteria: 'Criterios CASPAR (puntuación ≥ 3 puntos evaluando evidencia de psoriasis actual/personal/familiar, distrofia ungueal psoriásica, factor reumatoide negativo, dactilitis y formación ósea yuxtaarticular en radiografía).',
    labTests: ['Factor Reumatoide y Anti-CCP típicamente NEGATIVOS', 'PCR y VSG elevadas en brotes activos', 'Ácido úrico sérico (puede estar ligeramente elevado por alto recambio celular epidérmico de la psoriasis)'],
    imaging: ['Radiografía simple de manos y pies: coexistencia patognomónica de fenómenos erosivos y osteoproliferativos con aspecto típico en "lápiz en copa" (pencil-in-cup) en las IFD'],
    differential: ['Artritis reumatoide (simétrica, no afecta IFD, no cursa con dactilitis y tiene anti-CCP positivos)', 'Gota crónica tofácea', 'Artrosis erosiva de manos'],
    firstLine: [
      { drug: 'FAMEs sintéticos convencionales: Metotrexato oral o subcutáneo', dose: '15 a 25 mg una vez por semana + Ácido fólico 5 mg semanal', route: 'VO / SC semanal', freq: 'Semanal', notes: 'Fármaco de elección que controla tanto la artritis periférica como las placas cutáneas de psoriasis' },
      { drug: 'AINEs orales para el control del dolor y la rigidez articular', dose: 'Naproxeno 500 mg cada 12 horas VO con alimentos', route: 'VO', freq: 'c/12h', notes: 'Alivio sintomático' }
    ],
    alternatives: [
      { drug: 'Fármacos Biológicos Anti-TNF (Adalimumab, Infliximab, Etanercept) o Anti-IL-17 (Secukinumab) o Anti-IL-23 (Guselkumab)', dose: 'Secukinumab 150 a 300 mg SC mensual', route: 'SC', freq: 'Reglado', notes: 'De elección indiscutible ante compromiso axial, dactilitis/entesitis severa o fracaso de metotrexato' }
    ],
    nonPharm: ['Fisioterapia y cuidado de la piel psoriásica'],
    nursingCare: ['BÚSQUEDA ACTIVA DE PSORIASIS OCULTA: Inspeccionar cuero cabelludo, pliegue interglúteo, ombligo y detrás de las orejas en pacientes con artritis inflamatoria asimétrica', 'Inspección meticulosa de las uñas buscando piqueteado (pitting ungueal) o desprendimiento ungueal', 'Educación para la autoaplicación semanal de metotrexato o mensual de biológicos']
  },
  {
    number: 339,
    id: 'diag-339',
    title: 'Artritis reactiva',
    cie10: 'M02.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Espondiloartritis estéril no purulenta desencadenada por una respuesta inmune tras una infección previa a distancia en el tracto gastrointestinal (Campylobacter, Salmonella, Shigella, Yersinia) o genitourinario (Chlamydia trachomatis), asociada con frecuencia a la tríada clásica de Reiter (artritis, uretritis y conjuntivitis) y al antígeno HLA-B27.',
    symptoms: ['Oligoartritis aguda asimétrica que afecta de forma predominante a grandes articulaciones de extremidades inferiores (rodillas, tobillos) 1 a 4 semanas después de la infección desencadenante', 'Dactilitis ("dedo en salchicha") y entesitis del tendón de Aquiles', 'Manifestaciones urogenitales: uretritis no gonocócica o cervicitis estéril', 'Manifestaciones oculares: conjuntivitis bilateral estéril o uveítis anterior aguda', 'Lesiones mucocutáneas específicas: Queratodermia blenorrágica (placas hiperqueratósicas pustulosas en palmas y plantas) y Balanitis circinada (úlceras superficiales indoloras en el glande)'],
    redFlags: ['Compromiso cardíaco con bloqueo auriculoventricular o insuficiencia aórtica'],
    criteria: 'Oligoartritis asimétrica de miembros inferiores que inicia tras 1 a 4 semanas de una infección gastrointestinal o uretral documentada.',
    labTests: ['NAAT / PCR en orina o frotis uretral/cervical para Chlamydia trachomatis', 'Coprocultivo y serología entérica', 'HLA-B27 (positivo en 65-80% de casos con formas más severas y crónicas)', 'Líquido sinovial inflamatorio estéril (cultivo bacteriano siempre negativo)'],
    imaging: ['Radiografía simple y ecografía articular con Power Doppler'],
    differential: ['Artritis gonocócica diseminada', 'Artritis séptica bacteriana pura', 'Artritis por microcristales'],
    firstLine: [
      { drug: 'AINEs a dosis plenas antiinflamatorias continuas (Indometacina o Naproxeno)', dose: 'Indometacina 50 mg cada 8 horas VO con comidas o Naproxeno 500 mg cada 12 horas VO', route: 'VO con alimentos', freq: 'c/8-12h', notes: 'Fármacos de primera línea; alivian rápidamente la artritis y la entesitis' },
      { drug: 'Tratamiento antibiótico específico si la infección urogenital activa por Chlamydia persiste documentada', dose: 'Doxiciclina 100 mg cada 12 horas VO por 7 días (para el paciente y su pareja)', route: 'VO', freq: 'c/12h x 7 días', notes: 'Erradica la infección activa por Chlamydia; en artritis post-entérica los antibióticos NO modifican el curso articular' }
    ],
    alternatives: [
      { drug: 'Infiltración intraarticular de corticoides (Triamcinolona)', dose: '40 mg en la articulación afectada', route: 'Intraarticular', freq: 'Puntual', notes: 'Muy eficaz en monoartritis resistente de rodilla' },
      { drug: 'Sulfasalazina oral en artritis reactiva crónica (> 6 meses)', dose: '1 g cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'FAME de elección en formas periféricas persistentes' }
    ],
    nonPharm: ['Reposo relativo articular durante la fase inflamatoria aguda y fisioterapia precoz'],
    nursingCare: ['Interrogatorio dirigido buscando antecedentes de diarrea aguda o disuria 2 a 4 semanas antes del inicio del dolor articular', 'Inspección de las plantas de los pies y del glande buscando queratodermia blenorrágica o balanitis circinada', 'Garantizar el tratamiento simultáneo de la pareja sexual si se detecta Chlamydia']
  },
  {
    number: 340,
    id: 'diag-340',
    title: 'Gota tofácea crónica',
    cie10: 'M10.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Fase avanzada y destructiva de la artropatía por microcristales caracterizada por el depósito crónico masivo y nodular de cristales de urato monosódico (TOFOS) en el cartílago articular, membranas sinoviales, tendones y tejido celular subcutáneo, resultante de hiperuricemia severa no tratada durante décadas.',
    symptoms: ['TOFOS GOTOSOS PALPABLES: nódulos subcutáneos indoloros o dolorosos, firmes, irregulares y amarillento-blanquecinos localizados característicamente en el hélix de la oreja, codos (bursa olecraniana), tendón de Aquiles y articulaciones de manos y pies', 'Poliartritis deformante crónica que simula una artritis reumatoide destructiva', 'Fistulización o ulceración cutánea espontánea de los tofos con salida de un material blanquecino espeso pastoso calcáreo similar a la "pasta de tiza o yeso"', 'Pérdida de la movilidad articular y rigidez'],
    redFlags: ['Sobreinfección bacteriana de tofos ulcerados', 'Nefropatía úrica crónica con litiasis renal bilateral e insuficiencia renal'],
    criteria: 'Demostración de cristales de Urato Monosódico en forma de aguja con BIRREFRINGENCIA NEGATIVA FUERTE bajo microscopio de luz polarizada compensada en el líquido sinovial o aspirado del tofo.',
    labTests: ['ÁCIDO ÚRICO SÉRICO (marcadamente elevado > 7-9 mg/dL; OJO: durante un brote agudo puede ser temporalmente normal)', 'Función renal (creatinina y eGFR) y examen de orina'],
    imaging: ['Radiografía simple de articulaciones afectadas (erosiones óseas líticas en "sacabocado" con bordes colgantes / escleróticos bien definidos respetando el espacio articular hasta fases tardías)', 'Ecografía articular con signo del "doble contorno" en el cartílago hialino', 'Tomografía computarizada de doble energía (DECT: detecta y cuantifica de forma no invasiva los depósitos de urato en color verde)'],
    differential: ['Artritis reumatoide con nódulos reumatoides', 'Condrocalcinosis (pseudogota)', 'Xantomas tuberosos en dislipoproteinemia familiar'],
    firstLine: [
      { drug: 'Terapia Hipouricemiante de fondo a largo plazo: Alopurinol (Inhibidor de la xantino oxidasa)', dose: 'Iniciar con 100 mg/día VO (50 mg si eGFR < 30 mL/min), escalando mensualmente de 100 en 100 mg hasta alcanzar la META ESTRICTA DE ÁCIDO ÚRICO < 5.0 mg/dL (o < 0.30 mmol/L)', route: 'VO', freq: 'c/24h postprandial', notes: 'OBJETIVO TERAPÉUTICO: Mantener uricemia < 5.0 mg/dL para disolver los cristales y lograr la desaparición total de los tofos' },
      { drug: 'Profilaxis antiinflamatoria de brotes durante la disolución: Colchicina a dosis bajas', dose: '0.5 mg una o dos veces al día VO durante al menos los primeros 6 meses tras iniciar el alopurinol', route: 'VO', freq: 'c/12-24h', notes: 'OBLIGATORIA: El descenso rápido del ácido úrico desprende cristales de los tofos y desencadena crisis agudas intensas si no hay colchicina' }
    ],
    alternatives: [
      { drug: 'Febuxostat oral (Inhibidor potente no purínico de la xantino oxidasa)', dose: '80 a 120 mg/día VO en dosis única', route: 'VO', freq: 'c/24h', notes: 'Alternativa de elección ante intolerancia o fracaso de alopurinol para lograr la meta < 5 mg/dL' },
      { drug: 'Pegloticasa EV (Uricasa recombinante)', dose: '8 mg EV en infusión cada 2 semanas', route: 'EV', freq: 'Quincenal', notes: 'Degrada el urato a alantoína; reservada para gota tofácea refractaria incapacitante' }
    ],
    nonPharm: ['Dieta baja en purinas (eliminar mariscos, vísceras, embutidos y carnes rojas)', 'SUPRESIÓN TERMINANTE DEL ALCOHOL (especialmente cerveza y licores) y bebidas endulzadas con jarabe de maíz de alta fructosa'],
    nursingCare: ['REGLA CARDINAL DE ENFERMERÍA EN GOTA: NUNCA INICIAR EL ALOPURINOL DURANTE UN ATAQUE AGUDO DE GOTA (esperar al menos 2 semanas tras la resolución completa del brote agudo para iniciarlo, asociándolo siempre a colchicina de rescate)', 'Cuidado de tofos ulcerados: curación aséptica y no intentar exprimir forzadamente el material calcáreo para evitar necrosis cutánea', 'Educación sobre adherencia vitalicia al hipouricemiante para revertir las deformidades']
  },
  {
    number: 341,
    id: 'diag-341',
    title: 'Condrocalcinosis (Pseudogota)',
    cie10: 'M11.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad por depósito articular de cristales de Pirofosfato de Calcio Dihidratado (CPPD), caracterizada por la calcificación del fibrocartílago y cartílago hialino (condrocalcinosis radiológica) y episodios agudos de artritis inflamatoria (Pseudogota) que afectan predominantemente a la rodilla en adultos mayores.',
    symptoms: ['Ataques agudos recurrentes de artritis inflamatoria monoarticular u oligoarticular de inicio brusco', 'Afección predominante de la RODILLA (en más del 50% de los casos), muñecas, hombros o tobillos', 'Articulación intensamente eritematosa, caliente, tumefacta y sumamente dolorosa al mínimo contacto, acompañada de derrame articular masivo', 'Puede asociarse a fiebre y leucocitosis simulando una artritis séptica'],
    redFlags: ['Confusión y retraso diagnóstico con artritis séptica bacteriana'],
    criteria: 'Artritis aguda con identificación de cristales de Pirofosfato de Calcio romboidales con birrefringencia positiva débil en líquido sinovial + calcificación del cartílago articular en radiografías.',
    labTests: ['ARTROCENTESIS Y ANÁLISIS DE LÍQUIDO SINOVIAL: cristales intracelulares con forma de romboide o poligonales con BIRREFRINGENCIA POSITIVA DÉBIL bajo luz polarizada', 'Descarte de patologías metabólicas asociadas en menores de 60 años: Calcio, Magnesio (hipomagnesemia), Ferritina y saturación de transferrina (hemocromatosis) y TSH (hipotiroidismo)'],
    imaging: ['Radiografía simple de rodillas, pelvis y muñecas: CONDROCALCINOSIS TÍPICA (líneas radioopacas de calcificación paralelas a la superficie articular en meniscos de rodilla, ligamento triangular del carpo y sínfisis púbica)'],
    differential: ['Artritis séptica (OBLIGATORIO cultivo bacteriano de líquido sinovial)', 'Gota por urato monosódico (birrefringencia negativa en aguja)', 'Artrosis con derrame'],
    firstLine: [
      { drug: 'Manejo del ataque agudo: Artrocentesis evacuadora + Infiltración intraarticular de Corticoides (Triamcinolona)', dose: 'Triamcinolona acetónido 40 mg intraarticular con técnica estéril tras vaciar el derrame', route: 'Intraarticular', freq: 'Puntual', notes: 'Alivio espectacular inmediato del dolor y la inflamación en rodilla o muñeca' },
      { drug: 'AINEs orales o Colchicina a dosis bajas si no se puede infiltrar', dose: 'Colchicina 0.5 mg cada 12 horas VO o Naproxeno 500 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Control del brote inflamatorio agudo' }
    ],
    alternatives: [
      { drug: 'Prednisona oral en pauta corta descendente', dose: '20 a 30 mg/día VO por 5 a 7 días con reducción rápida', route: 'VO', freq: 'c/24h', notes: 'En ancianos con insuficiencia renal donde los AINEs y la colchicina están contraindicados' },
      { drug: 'Profilaxis con Colchicina a dosis bajas', dose: '0.5 mg/día VO continuo', route: 'VO', freq: 'c/24h', notes: 'En pacientes con crisis frecuentes recurrentes de pseudogota' }
    ],
    nonPharm: ['Reposo articular en cama y aplicación de compresas frías locales'],
    nursingCare: ['Asistencia aséptica en la artrocentesis de rodilla con campo estéril', 'Enviar la muestra de líquido sinovial DE INMEDIATO al laboratorio en tubo con heparina sin fijador para examen de cristales y cultivo microbiológico', 'Verificar función renal previa a la administración de AINEs o colchicina en adultos mayores']
  },
  {
    number: 342,
    id: 'diag-342',
    title: 'Lupus Eritematoso Sistémico',
    cie10: 'M32.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad autoinmune multisistémica prototípica de etiología multifactorial que afecta predominantemente a mujeres jóvenes en edad fértil (relación 9:1), caracterizada por pérdida de la autotolerancia con producción masiva de autoanticuerpos antinucleares y depósito tisular de inmunocomplejos circulantes.',
    symptoms: ['Síntomas constitucionales: astenia profunda invalidante, fiebre inexplicable recurrente y pérdida de peso', 'Manifestaciones cutáneas:', '- ERITEMA MALAR "EN ALAS DE MARIPOSA": eritema fijo plano o sobreelevado que cubre las mejillas y el puente nasal, respetando estrictamente los surcos nasogenianos', '- FOTOSENSIBILIDAD CUTÁNEA marcada tras exposición solar', '- Lupus discoide con placas descamativas cicatrizales y alopecia no cicatrizal', '- Úlceras orales o nasales indoloras en paladar duro', 'Manifestaciones musculoesqueléticas: poliartritis simétrica migratoria no erosiva y artralgias intensas (Artropatía de Jaccoud)', 'Serositis: pleuritis o pericarditis con dolor torácico'],
    redFlags: ['NEFRITIS LÚPICA (clases III y IV proliferativas difusas con síndrome nefrótico y rápida pérdida de función renal)', 'Compromiso neuropsiquiátrico (psicosis lúpica, convulsiones, coma)'],
    criteria: 'Criterios de clasificación EULAR/ACR 2019: Criterio de entrada obligatorio: Anticuerpos Antinucleares (ANA) positivos a títulos ≥ 1:80 + puntuación total ponderada ≥ 10 puntos en los distintos dominios clínicos e inmunológicos.',
    labTests: ['ANTICUERPOS ANTINUCLEARES (ANA: sensibilidad > 98-99%, criterio de entrada)', 'ANTICUERPOS ANTI-DNA DE DOBLE CADENA (Anti-dsDNA: altamente específico, correlaciona con nefritis activa y brotes lúpicos)', 'Anticuerpos Anti-Smith (Anti-Sm: el anticuerpo más específico del LES)', 'Complemento sérico: C3 y C4 DISMINUIDOS (hipocomplementemia por consumo activo en brotes)', 'Hemograma (anemia hemolítica autoinmune con Coombs +, leucopenia < 4000/mm3, linfopenia < 1000/mm3 y trombocitopenia < 100,000/mm3)', 'Examen de orina periódico y cociente proteinuria/creatininuria (tamizaje de nefritis lúpica)'],
    imaging: ['Biopsia renal percutánea (gold standard obligatorio ante proteinuria > 0.5 g/día o sedimento activo para clasificar histológicamente la nefritis según ISN/RPS clase I a VI)'],
    differential: ['Artritis reumatoide', 'Síndrome de Sjögren primario', 'Dermatomiositis', 'Enfermedad mixta del tejido conectivo'],
    firstLine: [
      { drug: 'HIDROXICLOROQUINA ORAL (Pilar universal obligatorio de por vida para TODOS los pacientes con LES)', dose: '5 mg/kg de peso real al día VO (habitualmente 200 a 400 mg/día VO) con alimentos', route: 'VO con comidas', freq: 'c/24h', notes: 'Reduce los brotes, mejora la supervivencia global, previene el daño orgánico acumulado y reduce el riesgo trombótico; requiere fondo de ojo anual' },
      { drug: 'Corticoides orales a dosis mínimas eficaces (Prednisona)', dose: '5 a 7.5 mg/día VO de mantenimiento; dosis altas (0.5 a 1 mg/kg/día) o pulsos EV en brotes graves orgánicos', route: 'VO / EV', freq: 'Reglado', notes: 'Tratamiento rápido de las manifestaciones agudas con reducción progresiva precoz' }
    ],
    alternatives: [
      { drug: 'En Nefritis Lúpica y brotes mayores: Micofenolato de Mofetilo o Ciclofosfamida + Belimumab', dose: 'Micofenolato 2 a 3 g/día VO o Ciclofosfamida según pauta Euro-Lupus (500 mg EV c/2 semanas x 6 dosis) + Belimumab EV/SC', route: 'VO / EV', freq: 'Protocolo de inducción', notes: 'Terapia de inducción a la remisión en nefritis proliferativa clase III/IV' }
    ],
    nonPharm: ['FOTOPROTECCIÓN SOLAR ESTRICTA UNIVERSAL: Bloqueador solar FPS 50+ diario aplicado cada 2-3 horas, sombreros de ala ancha y ropa protectora UV'],
    nursingCare: ['CONSEJERÍA DE FOTOPROTECCIÓN DE ENFERMERÍA: La radiación ultravioleta induce apoptosis celular de queratinocitos, liberando antígenos nucleares que desencadenan brotes lúpicos graves sistémicos (no solo cutáneos); educar en el uso riguroso de protector solar incluso en días nublados', 'TAMIZAJE MENSUAL DE NEFRITIS: Realizar tira reactiva de orina en cada control de enfermería para detectar proteinuria o hematuria asintomática temprana', 'Vigilancia oftalmológica anual con campo visual y retinografía por riesgo de maculopatía por hidroxicloroquina', 'Recomendar vacunas no vivas (antigripal, antineumocócica) y anticoncepción segura en periodos de actividad']
  },
  {
    number: 343,
    id: 'diag-343',
    title: 'Síndrome de Sjögren',
    cie10: 'M35.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad autoinmune inflamatoria crónica caracterizada por la infiltración linfocítica progresiva de las glándulas exocrinas (principalmente salivales y lagrimales), lo que provoca una disminución marcada de sus secreciones y genera sequedad mucosa generalizada (Síndrome Seco o Sicca).',
    symptoms: ['XEROFTALMIA (Ojo seco severo): sensación constante de arenilla, cuerpo extraño, ardor, prurito ocular y fotofobia', 'XEROSTOMÍA (Boca seca severa): dificultad para tragar alimentos secos sin beber líquidos (signo de la galleta), necesidad de beber agua continuamente de noche, alteración del gusto y caries dentales aceleradas múltiples', 'Tumefacción indolora recurrente de las glándulas parótidas bilateral ("hipertrofia parotídea")', 'Sequedad vaginal con dispareunia intensa', 'Astenia crónica profunda y artralgias/artritis no erosiva'],
    redFlags: ['DESARROLLO DE LINFOMA NO HODGKIN DE CÉLULAS B (Linfoma MALT): el riesgo de linfoma es hasta 30 a 44 veces mayor que en la población general; sospechar ante agrandamiento parotídeo persistente o indurado y pérdida de peso'],
    criteria: 'Criterios ACR/EULAR 2016 (puntuación ≥ 4 evaluando biopsia de glándula salival menor con Focus Score ≥ 1, Anti-SSA/Ro positivos, Test de Schirmer ≤ 5 mm en 5 min, tinción de superficie ocular y flujo salival no estimulado ≤ 0.1 mL/min).',
    labTests: ['ANTICUERPOS ANTI-SSA / Ro (positivos en > 70-80% de casos) y Anti-SSB / La', 'Factor Reumatoide positivo e Hipergammaglobulinemia policlonal marcada', 'Hemograma y función renal'],
    imaging: ['Biopsia de glándula salival menor del labio inferior (gold standard histológico: sialoadenitis linfocítica focal con Focus Score ≥ 1 foco de 50 linfocitos por 4 mm2)', 'Ecografía de glándulas salivales mayores (parótidas y submaxilares con parénquima heterogéneo y áreas hipoecoicas)'],
    differential: ['Sequedad iatrogénica por fármacos anticolinérgicos, antihistamínicos o antidepresivos', 'Infección por VHC o VIH', 'Sarcoidosis'],
    firstLine: [
      { drug: 'Sustitutos lagrimales y salivares tópicos continuos (Pilar sintomático)', dose: 'Lágrimas artificiales sin conservantes (Carboximetilcelulosa o Hialuronato de Sodio al 0.2-0.4%) aplicadas cada 2 a 4 horas + gel lubricante nocturno + sprays de saliva artificial', route: 'Oftálmica / Bucal', freq: 'Frecuente SOS', notes: 'Protegen el epitelio corneal de úlceras y mejoran el confort' },
      { drug: 'Estimulantes secretorios parasimpaticomiméticos orales: Pilocarpina', dose: '5 mg cada 6 a 8 horas VO con las comidas', route: 'VO con alimentos', freq: 'c/8h', notes: 'Agonista colinérgico que estimula la secreción lagrimal y salival residual; vigilar sudoración' }
    ],
    alternatives: [
      { drug: 'Hidroxicloroquina oral para síntomas sistémicos y articulares', dose: '200 a 400 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Alivia la astenia y las artralgias' },
      { drug: 'Oclusión de puntos lagrimales con tapones de silicona (Plugs lagrimales)', dose: 'Procedimiento oftalmológico menor', route: 'Oftálmica', freq: 'Permanente', notes: 'Retiene las lágrimas naturales en la superficie ocular' }
    ],
    nonPharm: ['Higiene bucodental extrema con cepillado tras cada comida y uso de enjuagues con flúor (prevenir caries rampantes)', 'Uso de humidificadores ambientales en el dormitorio'],
    nursingCare: ['REALIZACIÓN DEL TEST DE SCHIRMER: Colocar una tira de papel de filtro estéril en el tercio externo del fondo de saco conjuntival inferior durante 5 minutos exactos sin anestésico; una humidificación ≤ 5 mm es diagnóstica de hiposecreción lagrimal severa', 'Educar sobre la higiene dental meticulosa y visitas odontológicas semestrales obligatorias', 'Vigilancia periódica y palpación de glándulas parótidas y cadenas ganglionares para detección precoz de linfoma']
  },
  {
    number: 344,
    id: 'diag-344',
    title: 'Esclerodermia sistémica',
    cie10: 'M34.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Esclerosis Sistémica (ES): enfermedad autoinmune del tejido conectivo caracterizada por una tríada patogénica de vasculopatía de pequeños vasos, activación del sistema inmune y fibrosis excesiva y generalizada de la piel y órganos internos (pulmones, corazón, riñones y tubo digestivo). Se clasifica en Limitada (afectación cutánea distal a codos/rodillas y cara: Síndrome CREST) o Difusa (afectación cutánea proximal de tronco).',
    symptoms: ['FENÓMENO DE RAYNAUD INTENSO Y GRAVE (presente en > 95% de casos, precede en años a la fibrosis cutánea)', 'Fase edematosa inicial en manos ("dedos hinchados / puffy fingers")', 'ESCLERODACTILIA: piel de los dedos engrosada, brillante, tirante y dura con pérdida de pliegues cutáneos y dedos en flexión fija ("manos en garra")', 'Facies de "pájaro" o esclerodérmica: afilamiento de la nariz, microstomía (boca pequeña con dificultad para abrirla) y surcos radiales peribucales', 'En Esclerosis Sistémica Limitada (Síndrome CREST): Calcinosis subcutánea, Raynaud, Esofagopatía (pirosis y disfagia severa), Esclerodactilia y Telangiectasias faciales/palmares', 'Reflujo gastroesofágico masivo por hipomotilidad esofágica ("esófago de cristal")'],
    redFlags: ['CRISIS RENAL ESCLERODÉRMICA (hipertensión arterial acelerada maligna con oliguria e insuficiencia renal aguda rápidamente progresiva)', 'Enfermedad Pulmonar Intersticial difusa (EPID)', 'Hipertensión Arterial Pulmonar (HAP)'],
    criteria: 'Criterios ACR/EULAR 2013 (engrosamiento cutáneo de dedos extendiéndose proximal a articulaciones MCF es criterio suficiente por sí solo con 9 puntos; o puntuación ≥ 9 combinando esclerodactilia, úlceras digitales, telangiectasias, capilaroscopía anormal, HAP/EPID, Raynaud y anticuerpos).',
    labTests: ['ANTICUERPOS ANTI-CENTROMERO (ACA: altamente específicos de la forma Limitada / CREST, riesgo de hipertensión pulmonar)', 'ANTICUERPOS ANTI-TOPOISOMERASA I / Anti-Scl-70 (específicos de la forma Difusa, alto riesgo de fibrosis pulmonar intersticial)', 'Anticuerpos Anti-RNA polimerasa III (asociados a crisis renal esclerodérmica y malignidad)', 'Creatinina sérica y hemograma'],
    imaging: ['CAPILAROSCOPÍA PERIUNGUEAL (patrón esclerodérmico temprano, activo o tardío con megacapilares, microhemorragias y áreas avasculares)', 'Tomografía de Tórax de Alta Resolución (TACAR: detección de EPID con patrón de neumonía intersticial no específica - NINE con vidrio deslustrado y fibrosis)', 'Ecocardiograma doppler anual (tamizaje de hipertensión pulmonar)'],
    differential: ['Fascitis eosinofílica', 'Escleredema de Buschke', 'Esclerosis sistémica inducida por fármacos o tóxicos'],
    firstLine: [
      { drug: 'Manejo vascular del Fenómeno de Raynaud y úlceras digitales: Nifedipino oral de acción prolongada o Sildenafil', dose: 'Nifedipino 30 a 60 mg/día VO o Sildenafil 20 mg cada 8 horas VO', route: 'VO', freq: 'c/8-24h', notes: 'Vasodilatación arterial digital continua; en úlceras refractarias usar Iloprost EV' },
      { drug: 'Inhibidores de la Bomba de Protones a dosis dobles continuas para ERGE (Omeprazol o Esomeprazol)', dose: 'Esomeprazol 40 mg cada 12 horas VO antes de comidas de por vida', route: 'VO', freq: 'c/12h', notes: 'Previene esofagitis severa, estenosis y aspiración pulmonar oculta' },
      { drug: 'Enfermedad Pulmonar Intersticial activa: Micofenolato de Mofetilo o Nintedanib', dose: 'Micofenolato 1 a 1.5 g cada 12 horas VO (o Nintedanib 150 mg c/12h VO)', route: 'VO con comidas', freq: 'c/12h', notes: 'Frena el deterioro de la capacidad vital forzada pulmonar' }
    ],
    alternatives: [
      { drug: 'TRATAMIENTO DE URGENCIA DE LA CRISIS RENAL ESCLERODÉRMICA: IECA a dosis altas (Captopril)', dose: 'Captopril 12.5 a 25 mg VO cada 8 horas escalando rápidamente hasta normalizar la PA', route: 'VO', freq: 'c/8h urgente', notes: 'FÁRMACO SALVADOR DE VIDA: Bloquea la hiperactivación del eje renina-angiotensina intrarrenal; revierte la falla renal y salva la vida' }
    ],
    nonPharm: ['Protección térmica corporal rigurosa contra el frío (guantes, calzado abrigado)', 'Ejercicios de estiramiento y fisioterapia orofacial para prevenir la microstomía'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD MORTAL DE ENFERMERÍA: LOS CORTICOIDES A DOSIS ALTAS (Prednisona > 15 mg/día) ESTÁN CONTRAINDICADOS EN ESCLERODERMIA PORQUE PRECIPITAN LA CRISIS RENAL ESCLERODÉRMICA MALIGNA', 'Monitoreo diario de la presión arterial en el hogar: un aumento brusco de PA ≥ 140/90 mmHg es signo de alarma de crisis renal inminente', 'Cuidado meticuloso de úlceras digitales en pulpejos de dedos con apósitos estériles hidrocoloides', 'Instruir sobre la elevación de la cabecera de la cama a 30° para evitar reflujo nocturno']
  },
  {
    number: 345,
    id: 'diag-345',
    title: 'Polimiositis y dermatomiositis',
    cie10: 'M33.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Miopatías inflamatorias idiopáticas autoinmunes caracterizadas por inflamación crónica y debilidad muscular proximal simétrica progresiva (Polimiositis), asociada en la Dermatomiositis a manifestaciones cutáneas patognomónicas características.',
    symptoms: ['DEBILIDAD MUSCULAR PROXIMAL SIMÉTRICA Y PROGRESIVA de cinturas escapular y pelviana: dificultad para levantarse de una silla baja sin apoyarse, subir escaleras, peinarse o levantar los brazos por encima de la cabeza', 'Disfagia orofaríngea por afectación de la musculatura estriada faríngea con riesgo de broncoaspiración', 'LESIONES CUTÁNEAS PATOGNOMÓNICAS DE DERMATOMIOSITIS:', '- ERITEMA EN HELIOTROPO: erupción eritematoviolácea característica periorbitaria en párpados superiores acompañada de edema periorbitario', '- PÁPULAS DE GOTTRON: pápulas y placas eritematovioláceas descamativas sobre las prominencias óseas dorsales de las articulaciones interfalángicas y metacarpofalángicas de las manos', '- Signo del chal o en V (eritema en cuello, hombros y escote) y manos de mecánico'],
    redFlags: ['SÍNDROME PARANEOPLÁSICO (hasta en 30-40% de dermatomiositis en adultos mayores se asocia a cáncer oculto subyacente: ovario, pulmón, mama, gástrico)', 'Afectación diafragmática con insuficiencia respiratoria aguda'],
    criteria: 'Criterios EULAR/ACR: Debilidad muscular proximal simétrica + enzimas musculares elevadas + alteraciones electromiográficas miopáticas + biopsia muscular confirmatoria (+ lesiones cutáneas típicas en dermatomiositis).',
    labTests: ['CREATINQUINASA TOTAL (CPK / CK sérica marcadamente elevada en 5 a 50 veces el valor normal, correlaciona con necrosis muscular)', 'Aldolasa sérica, Transaminasas (TGO/TGP elevadas por daño muscular) y LDH', 'Anticuerpos específicos de miositis (Anti-Jo-1 en síndrome antisintetasa con EPID, Anti-Mi-2, Anti-MDA5 en formas rápidamente progresivas)', 'Screening tumoral completo para neoplasia oculta en adultos'],
    imaging: ['RESONANCIA MAGNÉTICA MUSCULAR DE MUSLOS EN SECUENCIAS STIR (detecta edema e inflamación muscular activa y guía el sitio ideal para la biopsia muscular)', 'Biopsia muscular (infiltrado endomisial con linfocitos T CD8+ en polimiositis; infiltrado perimisial y perivascular con atrofia perifascicular en dermatomiositis)'],
    differential: ['Miopatía por estatinas o corticoides', 'Distrofias musculares genéticas', 'Miastenia gravis (debilidad fluctuante con ptosis/diplopía)', 'Esclerosis lateral amiotrófica'],
    firstLine: [
      { drug: 'Corticoides sistémicos a dosis altas de primera línea (Prednisona oral o pulsos de Metilprednisolona)', dose: 'Prednisona 1 mg/kg/día VO en toma matutina durante 4 a 6 semanas (o pulsos de Metilprednisolona 1 g/día EV por 3 días en compromiso severo), reduciendo lentamente según normalice la CPK', route: 'VO / EV', freq: 'Reglado', notes: 'Restaura la fuerza muscular y normaliza las enzimas; requiere suplementación con calcio, vit D y profilaxis para osteoporosis' },
      { drug: 'FAMEs ahorradores de corticoides tempranos: Metotrexato o Azatioprina', dose: 'Metotrexato 15 a 25 mg/semana VO/SC o Azatioprina 2 a 3 mg/kg/día VO', route: 'VO / SC', freq: 'Reglado', notes: 'Iniciados simultáneamente para facilitar el descenso de corticoides y mantener la remisión' }
    ],
    alternatives: [
      { drug: 'Inmunoglobulina Humana Endovenosa (IGEV)', dose: '2 g/kg de peso divididos en 2 a 5 días EV mensual', route: 'EV en infusión', freq: 'Ciclos mensuales', notes: 'De elección en dermatomiositis refractaria, disfagia severa con riesgo de aspiración o embarazo' }
    ],
    nonPharm: ['Fisioterapia y rehabilitación motora precoz pasiva y luego activa adaptada para evitar contracturas'],
    nursingCare: ['PREVENCIÓN DE BRONCOASPIRACIÓN: Evaluar la capacidad de deglución de la paciente en cada turno; si hay disfagia, mantener alimentación en posición sentada estricta a 90° con líquidos espesados o valorar sonda nasogástrica', 'Monitoreo seriado de la fuerza muscular proximal con la escala MRC (Medical Research Council) de 0 a 5', 'Control analítico periódico de niveles de CPK y enzimas hepáticas', 'Vigilancia de signos de infección durante la inmunosupresión profunda']
  },
  {
    number: 346,
    id: 'diag-346',
    title: 'Fibromialgia',
    cie10: 'M79.7',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Síndrome de dolor crónico generalizado no articular de etiología neurobiológica, caracterizado por una alteración en el procesamiento y amplificación central del dolor (sensibilización central), asociado a fatiga persistente, sueño no reparador y trastornos cognitivos y afectivos, con ausencia de daño inflamatorio tisular.',
    symptoms: ['DOLOR GENERALIZADO DIFUSO osteomuscular bilateral, continuo y crónico de más de 3 meses de evolución, afectando por encima y por debajo de la cintura y el esqueleto axial ("me duele todo el cuerpo")', 'ALODINIA E HIPERALGESIA: dolor desproporcionado ante estímulos táctiles mínimos o presión leve', 'FATIGA CRÓNICA PROFUNDA no relacionada con el esfuerzo y que no mejora con el reposo', 'SUEÑO NO REPARADOR: despertar con sensación de agotamiento físico ("como si me hubiera pasado un camión por encima")', 'Disfunción cognitiva ("niebla mental / fibrofog"): dificultad de concentración, fallos de memoria reciente y lentitud mental', 'Asociación frecuente con cefalea tensional, colon irritable, vejiga dolorosa, parestesias y depresión/ansiedad'],
    redFlags: ['Depresión mayor severa con ideación de autolesión'],
    criteria: 'Criterios ACR 2016 revisados: 1. Índice de Dolor Generalizado (WPI) ≥ 7 y Escala de Gravedad de Síntomas (SSS) ≥ 5 (o WPI 4-6 y SSS ≥ 9); 2. Dolor generalizado en al menos 4 de 5 regiones corporales; 3. Duración de síntomas ≥ 3 meses; 4. El diagnóstico es clínico y no excluye otras enfermedades.',
    labTests: ['TODAS LAS PRUEBAS DE LABORATORIO SON ESTRICTAMENTE NORMALES (crucial para descartar otras patologías: hemograma, VSG, PCR, CPK, TSH, calcio, vitamina D y factor reumatoide normales)'],
    imaging: ['No requerida (radiografías normales)'],
    differential: ['Hipotiroidismo', 'Polimialgia reumática (en > 50 años con VSG > 50)', 'Lupus eritematoso sistémico inicial', 'Déficit severo de vitamina D'],
    firstLine: [
      { drug: 'Educación terapéutica y Ejercicio físico aeróbico gradual supervisado (Pilar más eficaz demostrado)', dose: 'Ejercicio aeróbico de bajo impacto (caminata rápida, natación, bicicleta) 30 min 3 a 5 veces por semana', route: 'Fisioterapia física', freq: 'Regular permanente', notes: 'ÚNICA INTERVENCIÓN CON EVIDENCIA GRADO A: Estimula la liberación de endorfinas y modulación descendente del dolor' },
      { drug: 'Antidepresivos moduladores de vías descendentes del dolor: Duloxetina o Amitriptilina', dose: 'Duloxetina 30 mg/día VO aumentando a 60 mg/día; o Amitriptilina 10 a 25 mg VO 2 horas antes de acostarse', route: 'VO', freq: 'c/24h', notes: 'Potencian la inhibición descendente noradrenérgica y serotoninérgica del dolor y mejoran el sueño' },
      { drug: 'Neuromoduladores gabapentinoides: Pregabalina', dose: '75 mg cada 12 horas VO titulando gradualmente hasta 150 a 300 mg/día', route: 'VO nocturno', freq: 'c/12-24h', notes: 'Bloquea canales de calcio voltaje-dependientes reduciendo la hiperexcitabilidad neuronal' }
    ],
    alternatives: [
      { drug: 'Terapia Cognitivo-Conductual (TCC) especializada en dolor crónico', dose: 'Sesiones de psicoterapia estructurada', route: 'Psicoterapia', freq: 'Semanal', notes: 'Ayuda a modificar pensamientos catastróficos y conductas de evitación' }
    ],
    nonPharm: ['LOS OPIOIDES Y CORTICOIDES ESTÁN CONTRAINDICADOS O DESACONSEJADOS (no tienen eficacia en sensibilización central y generan dependencia/hiperalgesia por opioides)'],
    nursingCare: ['VALIDACIÓN Y CONTENCIÓN EMPÁTICA: Explicar a la paciente que "su dolor es 100% real", que no está "en su imaginación", sino que su sistema nervioso tiene el "volumen del dolor subido al máximo"', 'Educar sobre la contraindicación de tomar AINEs o corticoides continuos (no hay inflamación articular y solo generan gastritis y daño renal)', 'Higiene del sueño estricta: horario fijo para acostarse, habitación oscura sin pantallas luminosas', 'Desaconsejar el reposo prolongado en cama (el desentrenamiento físico empeora drásticamente el dolor y la rigidez)']
  },
  {
    number: 347,
    id: 'diag-347',
    title: 'Osteoporosis postmenopáusica',
    cie10: 'M81.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad esquelética sistémica metabólica caracterizada por la pérdida acelerada de masa ósea y el deterioro de la microarquitectura del tejido óseo secundario al déficit estrogénico postmenopáusico, lo que produce fragilidad ósea y un aumento drástico del riesgo de fracturas ante traumatismos de baja energía.',
    symptoms: ['Enfermedad completamente silente e indolora mientras no ocurre una fractura ("la epidemia silenciosa")', 'Pérdida progresiva de estatura corporal (> 3 a 4 cm respecto a la juventud) debida al aplastamiento de cuerpos vertebrales', 'Cifosis dorsal progresiva acentuada ("giba de la viuda")', 'FRACTURAS POR FRAGILIDAD TÍPICAS:', '- Fractura vertebral por compresión (dolor de espalda agudo tras toser o agacharse)', '- Fractura de Colles en la muñeca (tras caída desde la propia altura apoyando la mano)', '- Fractura de cadera / cuello femoral (máxima morbimortalidad y pérdida de autonomía)'],
    redFlags: ['FRACTURA DE CADERA EN EL ADULTO MAYOR (mortalidad del 20-30% al año y discapacidad permanente en más del 50%)'],
    criteria: 'Criterio OMS por Densitometría Ósea (DEXA): T-score ≤ -2.5 Desviaciones Estándar en columna lumbar, cuello femoral o cadera total; O presencia de una fractura por fragilidad en hueso mayor independientemente de la densitometría.',
    labTests: ['Calcio sérico, Fósforo y 25-hidroxivitamina D sérica (descarte de déficit previo)', 'Creatinina sérica y eGFR (ajuste de bifosfonatos si eGFR < 35 mL/min)', 'Fosfatasa alcalina y calciuria de 24 horas', 'Marcadores de recambio óseo (CTX sérico o P1NP: útiles para evaluar adherencia y respuesta al tratamiento)'],
    imaging: ['DENSITOMETRÍA ÓSEA POR ABSORCIOMETRÍA DUAL DE RAYOS X (DEXA de columna lumbar L1-L4 y cadera total: método gold standard diagnóstico)', 'Radiografía simple de columna dorsal y lumbar lateral (morfometría vertebral para detectar fracturas vertebrales silentes acuñadas)'],
    differential: ['Mieloma múltiple (descarte obligatorio con proteinograma electroforético en fracturas vertebrales múltiples)', 'Metástasis óseas osteolíticas', 'Osteomalacia'],
    firstLine: [
      { drug: 'Bifosfonatos orales o endovenosos (Primera línea antirreabsortiva): Alendronato o Ácido Zoledrónico', dose: 'Alendronato 70 mg VO una vez por semana en ayunas con agua pura; o Ácido Zoledrónico 5 mg EV en infusión de 15 min una vez al año', route: 'VO semanal / EV anual', freq: 'Semanal o Anual', notes: 'Inhiben la resorción osteoclástica y reducen fracturas vertebrales y de cadera en un 40-70%; requieren profilaxis dental previa' },
      { drug: 'Suplementación básica obligatoria: Calcio elemental + Vitamina D3 (Colecalciferol)', dose: 'Calcio elemental 1000 a 1200 mg/día (a través de dieta + suplemento) + Vitamina D3 800 a 2000 UI/día VO', route: 'VO diario', freq: 'c/24h', notes: 'Garantizar niveles séricos de 25-OH vitamina D > 30 ng/mL para que el tratamiento sea eficaz' }
    ],
    alternatives: [
      { drug: 'Denosumab (Anticuerpo monoclonal anti-RANKL)', dose: '60 mg SC cada 6 meses ininterrumpidos', route: 'SC semestral', freq: 'Cada 6 meses estricto', notes: 'De elección en insuficiencia renal (eGFR < 35 mL/min); NUNCA retrasar ni suspender bruscamente por riesgo de fracturas vertebrales múltiples de rebote' },
      { drug: 'Teriparatida (PTH recombinante anabólica formadora de hueso)', dose: '20 mcg SC diario durante un máximo de 24 meses', route: 'SC diario', freq: 'Diario x 24 meses', notes: 'Fármaco osteoformador de elección en osteoporosis severa con fracturas vertebrales múltiples previas' }
    ],
    nonPharm: ['Ejercicio físico de fuerza muscular y de impacto moderado (caminar 30 min diarios)', 'PROGRAMA DE PREVENCIÓN DE CAÍDAS EN EL HOGAR (retirar alfombras sueltas, iluminación nocturna, barras de apoyo en el baño)'],
    nursingCare: ['REGLA DE ORO DE TOMA DE ALENDRONATO ORAL: Instruir a la paciente en tomar el comprimido al levantarse con un vaso lleno de AGUA PURA (no leche ni jugos), en ayunas estricto, y PERMANECER ERGUIDA (sentada o de pie, NUNCA acostarse) durante al menos 30 a 60 minutos (para prevenir úlcera esofágica por reflujo medicamentoso)', 'ADVERTENCIA SOBRE DENOSUMAB: Registrar en la historia que la inyección es cada 6 meses exactos; alertar que suspenderla causa pérdida acelerada de masa ósea y fracturas de rebote', 'Evaluación del riesgo de caídas con la escala de Downton o Tinetti']
  },
  {
    number: 348,
    id: 'diag-348',
    title: 'Osteoporosis senil',
    cie10: 'M81.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Osteoporosis tipo II o involutiva senil que se presenta en varones y mujeres de edad avanzada (habitualmente > 75 años), caracterizada por una pérdida simétrica y proporcional tanto de hueso cortical como trabecular debida a senescencia osteoblástica, disminución en la síntesis de vitamina D y menor absorción intestinal de calcio.',
    symptoms: ['Totalmente asintomática hasta la producción de fracturas', 'Deformidad toracolumbar progresiva con encorvamiento pronunciado de la espalda', 'Pérdida acusada de masa muscular asociada (osteosarcopenia senil) con marcha inestable', 'Fractura típica de cadera (cuello o macizo trocantéreo) y fracturas vertebrales múltiples'],
    redFlags: ['Encamamiento prolongado post-fractura de cadera con complicaciones nosocomiales letales (neumonía, úlceras por presión, TEP)'],
    criteria: 'T-score DEXA ≤ -2.5 en cadera o columna en adultos ≥ 70 años o fractura por caída de propia altura.',
    labTests: ['25-hidroxivitamina D sérica (frecuentemente en déficit severo < 10-20 ng/mL en ancianos institucionalizados)', 'Calcio iónico, PTH intacta (hiperparatiroidismo secundario senil) y función renal'],
    imaging: ['Densitometría ósea DEXA (evaluación preferencial en cuello femoral)', 'Radiografía de columna dorso-lumbar'],
    differential: ['Mieloma múltiple', 'Metástasis óseas secundarias a cáncer de próstata o mama', 'Osteomalacia senil'],
    firstLine: [
      { drug: 'Vitamina D3 (Colecalciferol) a dosis de repleción + Calcio diario', dose: 'Colecalciferol 20 000 UI semanal o 1000-2000 UI diarias VO + Calcio elemental 1000 mg/día con las comidas', route: 'VO', freq: 'Reglado', notes: 'Corrige el hiperparatiroidismo secundario y mejora la fuerza muscular reduciendo el riesgo de caídas' },
      { drug: 'Denosumab subcutáneo o Ácido Zoledrónico endovenoso anual', dose: 'Denosumab 60 mg SC cada 6 meses (ideal en polimedicados o ancianos con mala tolerancia oral a bifosfonatos)', route: 'SC semestral', freq: 'Cada 6 meses', notes: 'Garantiza la adherencia terapéutica al no depender de la vía oral' }
    ],
    alternatives: [
      { drug: 'Protectores de cadera externos acolchados', dose: 'Dispositivos ortopédicos absorbentes de impacto lateral', route: 'Ortopédica', freq: 'Uso diurno', notes: 'Amortiguan el impacto en el trocánter mayor durante caídas' }
    ],
    nonPharm: ['Programa multidisciplinario de prevención de caídas: revisión de fármacos sedantes/hipnóticos, adaptación del calzado y uso de andador'],
    nursingCare: ['ADAPTACIÓN DEL ENTORNO DOMICILIARIO DEL ANCIANO: Eliminar cables en el suelo, retirar alfombras deslizantes, instalar barras de sujeción en ducha y WC, y colocar luces nocturnas en el pasillo', 'Evaluación periódica de la marcha y equilibrio (prueba Timed Up and Go - TUG > 12-14 segundos indica alto riesgo de caída)', 'Garantizar la administración de vitamina D para mejorar la fuerza de prensión y estabilidad postural']
  },
  {
    number: 349,
    id: 'diag-349',
    title: 'Osteopenia',
    cie10: 'M85.8',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Disminución de la densidad mineral ósea por debajo de los valores normales de la población joven pero sin alcanzar el umbral de osteoporosis, definida densitométricamente por un T-score situado entre -1.0 y -2.5 Desviaciones Estándar.',
    symptoms: ['Completamente asintomática', 'No produce dolor articular ni muscular de ningún tipo', 'Constituye una condición de riesgo intermedio para el desarrollo futuro de osteoporosis'],
    redFlags: ['Progresión silenciosa a osteoporosis franca con presencia de factores de riesgo mayores (tabaquismo, uso crónico de corticoides, artritis reumatoide)'],
    criteria: 'Densitometría ósea (DEXA) que muestra un T-score entre -1.0 y -2.5 DE en columna lumbar o cadera.',
    labTests: ['25-hidroxivitamina D sérica, calcio y fósforo séricos'],
    imaging: ['Densitometría ósea DEXA cada 2 a 3 años de control'],
    differential: ['Osteoporosis densitométrica (T-score ≤ -2.5)', 'Densidad mineral ósea normal (T-score > -1.0)'],
    firstLine: [
      { drug: 'Intervención en el estilo de vida y prevención primaria (Pilar de elección)', dose: 'Aporte dietético de calcio de 1000 a 1200 mg/día a través de lácteos y alimentos enriquecidos + Vitamina D3 800 a 1000 UI/día', route: 'VO', freq: 'Diario permanente', notes: 'En osteopenia sin fracturas la farmacoterapia antirreabsortiva con bifosfonatos habitualmente NO está indicada a menos que el riesgo por FRAX sea alto' }
    ],
    alternatives: [
      { drug: 'Bifosfonatos orales (Alendronato 70 mg semanal)', dose: 'Solo indicada si el cálculo del Score FRAX a 10 años muestra riesgo de fractura de cadera ≥ 3% o riesgo de fractura mayor osteoporótica ≥ 20%', route: 'VO', freq: 'Semanal', notes: 'Tratamiento selectivo en osteopenia de alto riesgo calculada por FRAX' }
    ],
    nonPharm: ['Ejercicio físico regular de fuerza y carga de peso corporal (caminar, bailar)', 'Abandono absoluto del tabaco y moderación estricta de alcohol'],
    nursingCare: ['TRANQUILIZAR A LA PACIENTE: Aclarar con énfasis que la osteopenia NO ES UNA ENFERMEDAD GRAVE ni causa de sus dolores musculares o articulares actuales, sino una señal de alerta para cuidar sus huesos', 'Cálculo del Score FRAX en consulta para estimar el riesgo real individualizado de fractura a 10 años', 'Educación nutricional sobre fuentes de calcio en la dieta (lácteos, almendras, sardinas) y exposición solar prudente']
  },
  {
    number: 350,
    id: 'diag-350',
    title: 'Raquitismo carencial',
    cie10: 'E55.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Trastorno metabólico óseo del niño en crecimiento caracterizado por un defecto en la mineralización de la matriz osteoide en las placas de crecimiento epifisarias (fisis), causado por deficiencia severa y mantenida de Vitamina D y/o ingesta insuficiente de calcio.',
    symptoms: ['Retraso marcado en el crecimiento lineal y talla baja con retraso en el inicio de la marcha', 'Deformidades esqueléticas progresivas típicas:', '- CRANEOTABES: reblandecimiento de los huesos parietales/occipitales que ceden a la presión digital ("como pelota de ping-pong")', '- Agrandamiento de suturas craneales con cierre tardío de fontanela anterior y "frente olímpica"', '- ROSARIO RAQUÍTICO: engrosamiento visible y palpable en las uniones costocondrales del tórax', '- Surco de Harrison (depresión horizontal en la parte inferior del tórax)', '- Ensanchamiento bulboso metafisario de muñecas y tobillos', '- Incurvación de huesos largos de las piernas: Genu varo ("piernas en paréntesis") o Genu valgo al comenzar a caminar', 'Hipotonía muscular severa y retraso psicomotor'],
    redFlags: ['Hipocalcemia sintomática severa con convulsiones neonatales o espasmo laríngeo (tetania raquítica)', 'Fracturas patológicas subperiósticas'],
    criteria: 'Hallazgos clínicos y radiológicos típicos en metáfisis óseas en crecimiento + confirmación bioquímica de deficiencia de vitamina D e hipofosfatemia.',
    labTests: ['25-hidroxivitamina D sérica marcadamente disminuida (< 10-12 ng/mL)', 'Fosfatasa Alcalina sérica EXTREMADAMENTE ELEVADA (marcador más sensible de actividad raquítica)', 'Fósforo sérico disminuido (por hiperparatiroidismo secundario fosfatúrico) y Calcio sérico normal o bajo', 'PTH sérica marcadamente elevada'],
    imaging: ['Radiografía simple de muñecas y rodillas: signos patognomónicos en la metáfisis (ensanchamiento, desflecamiento, deshilachamiento irregular y aspecto "en copa o copa invertida" con aumento de la distancia entre la epífisis y la diáfisis)'],
    differential: ['Raquitismo hipofosfatémico ligado al X (gen PHEX)', 'Osteogénesis imperfecta', 'Hipofosfatasia congénita'],
    firstLine: [
      { drug: 'Tratamiento de repleción con Vitamina D3 (Colecalciferol) oral a dosis altas (Guías Globales de Raquitismo)', dose: 'Niños < 12 meses: 2000 UI/día VO por 12 semanas; Niños > 12 meses: 3000 a 6000 UI/día VO por 12 semanas (o dosis de choque de 50 000 a 150 000 UI VO)', route: 'VO', freq: 'c/24h x 12 semanas', notes: 'Restaura rápidamente los depósitos corporales y normaliza la mineralización ósea' },
      { drug: 'Suplementación obligatoria concurrente con Calcio elemental oral', dose: '500 mg/día de calcio elemental VO durante el tratamiento con vitamina D', route: 'VO', freq: 'c/24h', notes: 'CRUCIAL: Previene el "síndrome del hueso hambriento" y la hipocalcemia aguda tras iniciar la vitamina D' }
    ],
    alternatives: [
      { drug: 'Mantenimiento preventivo tras curación: Colecalciferol diario', dose: '400 a 600 UI/día VO de mantenimiento continuo', route: 'VO', freq: 'c/24h permanente', notes: 'Dosis recomendada para prevenir recidivas' }
    ],
    nonPharm: ['PREVENCIÓN UNIVERSAL DE ENFERMERÍA EN CRED: Todos los lactantes con lactancia materna exclusiva deben recibir suplementación profiláctica con 400 UI/día de Vitamina D desde los primeros días de vida hasta el año'],
    nursingCare: ['ADMINISTRACIÓN PREVENTIVA DE VITAMINA D EN CRED: Instruir a todas las madres que la leche materna es el mejor alimento pero tiene bajo contenido de vitamina D, por lo que la suplementación con 400 UI/día de vitamina D es obligatoria desde el nacimiento', 'Garantizar la toma conjunta de calcio con la vitamina D en niños con raquitismo activo', 'Monitoreo de fosfatasa alcalina (su descenso progresivo confirma la consolidación ósea)']
  },
  {
    number: 351,
    id: 'diag-351',
    title: 'Osteomalacia del adulto',
    cie10: 'M83.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Trastorno de la mineralización ósea en el esqueleto maduro del adulto (tras el cierre de las fisis de crecimiento), caracterizado por el acúmulo patológico de matriz osteoide no mineralizada y desmineralización progresiva de la cortical y trabéculas, secundario a deficiencia severa prolongada de vitamina D, síndromes de malabsorción o hipofosfatemia.',
    symptoms: ['Dolor óseo difuso, sordo y constante que empeora con la carga de peso y la palpación ósea directa (costillas, pelvis, columna y piernas)', 'Debilidad muscular proximal severa de cinturas ("miopatía osteomalácica"): dificultad para incorporarse de una silla o subir escaleras', 'MARCHA ATÁPICA EN "ÁCATE O PÁTADE" (marcha anadeante de pato)', 'Sensibilidad dolorosa a la compresión esternal o de las crestas ilíacas', 'Fracturas espontáneas por estrés ante traumatismos mínimos'],
    redFlags: ['Fracturas patológicas completas por debilidad de la corteza ósea'],
    criteria: 'Dolor óseo difuso con debilidad proximal + deficiencia profunda de vitamina D con fosfatasa alcalina elevada + líneas de Looser-Milkman en radiografías.',
    labTests: ['25-hidroxivitamina D sérica marcadamente disminuida (< 10-15 ng/mL)', 'Fosfatasa Alcalina sérica muy elevada', 'Fósforo sérico bajo e Hipocalcemia leve', 'PTH sérica marcadamente elevada (hiperparatiroidismo secundario reactivo)'],
    imaging: ['Radiografía simple de pelvis, fémures y costillas: LÍNEAS DE LOOSER-MILKMAN (pseudofracturas radiotransparentes bilaterales y simétricas perpendiculares a la cortical ósea en rama isquiopubiana, cuello femoral y costillas)'],
    differential: ['Osteoporosis (en osteoporosis el hueso es normal en calidad mineral pero menor en cantidad; en osteomalacia la matriz no está mineralizada)', 'Fibromialgia', 'Mieloma múltiple'],
    firstLine: [
      { drug: 'Repleción con Vitamina D3 oral (Colecalciferol) a dosis de choque', dose: '50 000 UI VO una vez por semana durante 8 a 12 semanas consecutivas (o Calcifediol 0.266 mg quincenal)', route: 'VO semanal', freq: 'Semanal x 8-12 sem', notes: 'Restaura rápidamente los niveles séricos de 25-OH-D > 30 ng/mL' },
      { drug: 'Carbonato de Calcio oral concurrente', dose: '1000 a 1500 mg de calcio elemental al día VO con las comidas', route: 'VO con alimentos', freq: 'c/12h', notes: 'Proporciona los iones de calcio requeridos para la mineralización de la osteoide acumulada' }
    ],
    alternatives: [
      { drug: 'Calcitriol oral (1,25-dihidroxivitamina D)', dose: '0.25 a 0.5 mcg/día VO', route: 'VO', freq: 'c/24h', notes: 'De elección obligatoria si la osteomalacia es de origen renal o en fallo hepático severo' }
    ],
    nonPharm: ['Tratamiento de la enfermedad de base (enfermedad celíaca, bypass gástrico, insuficiencia pancreática)'],
    nursingCare: ['Identificación de la marcha en pato y del dolor óseo a la palpación esternal', 'Monitoreo de niveles séricos de calcio durante la reposición para prevenir hipercalcemia o hipocalcemia', 'Educación nutricional sobre la exposición solar y adherencia al tratamiento']
  },
  {
    number: 352,
    id: 'diag-352',
    title: 'Lumbalgia mecánica',
    cie10: 'M54.5',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dolor o malestar localizado en la región posterior del tronco comprendida entre el límite inferior de las costillas y el pliegue glúteo inferior, originado por sobrecarga funcional, contractura muscular paravertebral o disfunción osteoligamentosa, constituyendo el motivo de consulta musculoesquelético más frecuente del mundo.',
    symptoms: ['Dolor lumbar sordo o punzante que aparece tras esfuerzos físicos bruscos, levantamiento de cargas pesadas o malas posturas prolongadas', 'El dolor EMPEORA claramente con el movimiento, la bipedestación y la flexión del tronco, y ALIVIA con el reposo en decúbito', 'Contractura espasmódica dolorosa palpable de la musculatura paravertebral lumbar', 'AUSENCIA DE IRRADIACIÓN radicular por debajo de la rodilla y examen neurológico estrictamente normal'],
    redFlags: ['SIGNOS DE ALARMA / BANDERAS ROJAS (Red Flags) que descartan causa mecánica y obligan a estudio de imagen inmediato:', '- Fiebre o pérdida inexplicable de peso (infección / cáncer)', '- Antecedente de cáncer previo', '- Dolor nocturno que despierta al paciente o dolor continuo en reposo', '- Déficit neurológico motor progresivo en miembros inferiores', '- Síndrome de cola de caballo (anestesia en silla de montar e incontinencia esfinteriana)'],
    criteria: 'Diagnóstico clínico en ausencia de signos de alarma de patología específica subyacente.',
    labTests: ['NO INDICADOS de rutina en lumbalgia mecánica inespecífica < 4-6 semanas'],
    imaging: ['NO SE RECOMIENDAN ESTUDIOS DE IMAGEN (Radiografías/TAC/RMN) en las primeras 4 a 6 semanas de dolor lumbar en ausencia demostrada de banderas rojas (las guías internacionales desaconsejan las imágenes precoces por no mejorar el pronóstico y generar sobretratamiento)'],
    differential: ['Ciática / Hernia discal con radiculopatía', 'Espondilodiscitis infecciosa', 'Metástasis vertebrales', 'Cólico nefrítico'],
    firstLine: [
      { drug: 'MANTENERSE ACTIVO Y EVITAR EL REPOSO EN CAMA PROLONGADO (Pilar de Oro con máxima evidencia)', dose: 'Reanudar las actividades de la vida diaria tan pronto como sea tolerado', route: 'Conductual', freq: 'Permanente', notes: 'El reposo en cama prolongado > 48h retrasa la recuperación y cronifica el dolor' },
      { drug: 'AINEs orales a dosis plenas por ciclos cortos: Ibuprofeno o Naproxeno', dose: 'Ibuprofeno 400 a 600 mg cada 8 horas VO con comidas o Naproxeno 500 mg c/12h VO por 3 a 5 días', route: 'VO con alimentos', freq: 'c/8-12h por 5 días', notes: 'Fármacos de primera elección para el alivio del dolor agudo' },
      { drug: 'Relajantes musculares de acción central por corto plazo en contractura severa: Ciclobenzaprina', dose: '5 a 10 mg VO en la noche antes de acostarse por un máximo de 5 a 7 días', route: 'VO nocturna', freq: 'c/24h nocturno x 5 días', notes: 'Alivia el espasmo muscular agudo; produce somnolencia' }
    ],
    alternatives: [
      { drug: 'Paracetamol a dosis plenas', dose: '1000 mg cada 8 horas VO', route: 'VO', freq: 'c/8h', notes: 'Alternativa si los AINEs están contraindicados' }
    ],
    nonPharm: ['APLICACIÓN DE CALOR LOCAL (termoterapia con manta o bolsa térmica 20 min 3 veces al día para relajar la musculatura contracturada)'],
    nursingCare: ['EDUCACIÓN DE REASEGURO: Explicar a la paciente que más del 90% de las lumbalgias agudas son benignas y se resuelven por completo en 2 a 4 semanas', 'DESACONSEJAR ENFÁTICAMENTE EL REPOSO EN CAMA: Instruir que caminar y mantenerse activo en movimiento suave es la mejor medicina', 'Educación sobre higiene postural laboral y doméstica'],
  },
  {
    number: 353,
    id: 'diag-353',
    title: 'Cervicalgia tensional',
    cie10: 'M54.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dolor y contractura muscular dolorosa localizada en la región posterior y lateral del cuello, que afecta primordialmente a los músculos trapecio superior, angular de la escápula y esplenio del cuello, desencadenada por estrés emocional, sobrecarga laboral estática postural mantenida (uso de pantallas) o microtraumatismos.',
    symptoms: ['Dolor sordo y constante en la nuca y hombros con sensación de pesadez y rigidez de cuello', 'Limitación dolorosa de la rotación y flexión lateral cervical', 'Palpación de bandas tensas y "PUNTOS GATILLO MIOFASCIALES" exquisitamente dolorosos en el borde superior del músculo trapecio', 'Cefalea tensional occipital irradiada "en casco o banda apretada"', 'AUSENCIA de déficit motor o parestesias radiculares en los brazos'],
    redFlags: ['Traumatismo cervical reciente con inestabilidad raquídea', 'Fiebre con rigidez de nuca meníngea', 'Radiculopatía cervical con pérdida de fuerza'],
    criteria: 'Diagnóstico clínico por palpación de contractura y puntos gatillo cervicales sin compromiso neurológico.',
    labTests: ['No requeridos'],
    imaging: ['No indicada en ausencia de traumatismo o déficit radicular'],
    differential: ['Radiculopatía cervical C6-C7 por hernia discal', 'Mielopatía cervical', 'Meningitis aguda'],
    firstLine: [
      { drug: 'Modificación ergonómica postural y pausas activas laborales (Pilar fundamental)', dose: 'Ajuste de la altura de la pantalla del ordenador al nivel de los ojos y pausas de estiramiento cada 60 min', route: 'Ergonomía', freq: 'Diario permanente', notes: 'Elimina el factor causal de tensión isométrica continua' },
      { drug: 'AINEs orales por ciclo corto + Calor local seco', dose: 'Ibuprofeno 400 mg cada 8 horas VO con comidas por 3 a 5 días + termoterapia local 20 min', route: 'VO + Tópico', freq: 'c/8h x 3-5 días', notes: 'Alivio rápido de la contractura aguda' }
    ],
    alternatives: [
      { drug: 'Punción seca miofascial o Infiltración de puntos gatillo con anestésico local (Lidocaína 1%)', dose: 'Punción directa del punto gatillo con aguja de acupuntura o infiltración de 1 mL de lidocaína', route: 'Percutáneo miofascial', freq: 'Puntual', notes: 'Desactiva el punto gatillo de forma casi instantánea' }
    ],
    nonPharm: ['Masoterapia descontracturante suave y ejercicios de estiramiento del trapecio'],
    nursingCare: ['Instruir sobre la postura ante el teléfono móvil: elevar el dispositivo hacia el rostro en lugar de flexionar el cuello hacia abajo (evitar el "cuello de texto / text-neck")', 'Enseñanza de ejercicios de retracción del mentón (chin-tuck) para corregir la postura de cabeza adelantada', 'Verificar la ausencia de signos meníngeos (rigidez de nuca verdadera que impide tocar el pecho con la barbilla)']
  },
  {
    number: 354,
    id: 'diag-354',
    title: 'Ciática (Radiculopatía)',
    cie10: 'M54.3',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Síndrome doloroso neuropático agudo o subagudo causado por la compresión mecánica o irritación química inflamatoria de las raíces nerviosas que conforman el nervio ciático (predominantemente L4, L5 o S1) en su salida del canal raquídeo lumbar, habitualmente secundaria a una Hernia del Núcleo Pulposo.',
    symptoms: ['DOLOR RADICULAR LANCINANTE Y ELÉCTRICO que se irradia típicamente por debajo de la rodilla siguiendo el dermatoma específico:', '- Raíz L5: dolor por la cara lateral del muslo y pantorrilla hasta el dorso del pie y el primer dedo (dedo gordo)', '- Raíz S1: dolor por la cara posterior del muslo, pantorrilla (gemelos), talón y planta del pie hacia el quinto dedo', 'Parestesias, hormigueo, sensación de adormecimiento o "descargas eléctricas" distales', 'Aumento marcado del dolor con la maniobra de Valsalva (toser, estornudar o pujar)', 'Pérdida o disminución del reflejo aquíleo (en radiculopatía S1)', 'Debilidad motora: dificultad para caminar sobre los talones (déficit extensor en L5: "pie caído") o sobre las puntas de los pies (déficit de gemelos en S1)'],
    redFlags: ['SÍNDROME DE COLA DE CABALLO (anestesia en silla de montar en periné, incontinencia o retención urinaria y disfunción del esfínter anal: EMERGENCIA QUIRÚRGICA ABSOLUTA < 24 HORAS)', 'Paresia motora severa o progresiva ("pie péndulo / caído")'],
    criteria: 'MANIOBRA DE LASÈGUE POSITIVA (elevación de la pierna estirada en decúbito supino que reproduce el dolor radicular típico irradiado por debajo de la rodilla entre los 30° y 70°) + Maniobra de Bragard confirmatoria.',
    labTests: ['Habitualmente normales'],
    imaging: ['RESONANCIA MAGNÉTICA LUMBAR (gold standard: visualiza con máxima precisión la hernia discal, el grado de compresión y la raíz afectada; indicada si no hay mejoría en 4-6 semanas o ante banderas rojas)'],
    differential: ['Síndrome del piramidal / piriforme (atrapamiento extrapélvico del ciático)', 'Trocanteritis severa', 'Neuropatía diabética'],
    firstLine: [
      { drug: 'Manejo conservador multimodal inicial: AINEs orales + Moduladores del dolor neuropático (Pregabalina o Gabapentina)', dose: 'Naproxeno 500 mg cada 12 horas VO + Pregabalina 75 mg cada 12 horas VO (titulando a 150 mg c/12h)', route: 'VO con comidas', freq: 'c/12h', notes: 'Control del dolor nociceptivo y del componente neuropático punzante; más del 80-90% mejora sin cirugía en 6-8 semanas' },
      { drug: 'Corticoides orales en pauta descendente corta (Prednisona o Dexametasona)', dose: 'Prednisona 30 a 40 mg/día VO por 5 días reduciendo en 10 días', route: 'VO', freq: 'c/24h matutino', notes: 'Potente antiinflamatorio que reduce el edema de la raíz nerviosa comprimida' }
    ],
    alternatives: [
      { drug: 'Infiltración epidural transforaminal o interlaminar de corticoides guiada por fluoroscopía', dose: 'Inyección epidural perirradicular', route: 'Intervencionista del dolor', freq: 'Puntual', notes: 'Excelente opción intermedia para alivio rápido del dolor radicular refractario' },
      { drug: 'Microdiscectomía lumbar quirúrgica o Discectomía endoscópica', dose: 'Cirugía descompresiva de la raíz nerviosa', route: 'Quirúrgica', freq: 'Electiva / Urgente', notes: 'INDICADA DE EMERGENCIA en síndrome de cola de caballo o déficit motor progresivo; o electiva si fracasa el tratamiento conservador tras 6 a 8 semanas' }
    ],
    nonPharm: ['Reposo relativo en decúbito con flexión de caderas y rodillas (posición de Fowler) y deambulación suave según tolerancia'],
    nursingCare: ['EXPLORACIÓN METICULOSA DEL SIGNO DE LASÈGUE: Elevar pasivamente la pierna extendida con el paciente en supino; si reproduce el dolor irradiado distal entre 30° y 70°, descender levemente hasta que cese el dolor y realizar dorsiflexión pasiva del pie (signo de Bragard); si reaparece el dolor, confirma ciática radicular', 'VIGILANCIA URGENTE DE CONTROL DE ESFÍNTERES: Preguntar en cada turno si la paciente siente adormecimiento en la zona genital o si ha tenido escapes de orina o dificultad miccional (alerta de cola de caballo)', 'Evaluación de la marcha: pedir al paciente que camine de puntas y de talones para detectar pie caído']
  },
  {
    number: 355,
    id: 'diag-355',
    title: 'Hernia del núcleo pulposo',
    cie10: 'M51.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Desplazamiento o protrusión del material del núcleo pulposo a través de una fisura o desgarro del anillo fibroso del disco intervertebral más allá de los márgenes del espacio intersomático, con compresión de las raíces nerviosas en los niveles L4-L5 y L5-S1 (95% de las hernias lumbares) o C5-C6 y C6-C7 (hernias cervicales).',
    symptoms: ['Inicio súbito tras levantar peso en flexión de tronco o esfuerzo torsional', 'Dolor lumbar o cervical axial inicial que da paso rápidamente a dolor radicular neuropático irradiado a la extremidad', 'Aumento del dolor con la tos, la maniobra de Valsalva, la sedestación y la flexión anterior del tronco', 'Parestesias y déficit sensitivo en el dermatoma correspondiente', 'Hipotrofia o debilidad muscular en casos evolucionados'],
    redFlags: ['Hernia discal extruida masiva con compresión de la cola de caballo (urgencia quirúrgica < 24 horas)', 'Déficit motor agudo severo (fuerza 1-2/5)'],
    criteria: 'Clínica de radiculopatía confirmada anatómicamente por Resonancia Magnética que demuestra protrusión, extrusión o secuestro discal con compresión radicular concordante.',
    labTests: ['Preoperatorios reglados'],
    imaging: ['RESONANCIA MAGNÉTICA NUCLEAR DE COLUMNA (método de elección diagnóstica: clasifica la hernia en protrusión focal, extrusión con rotura del ligamento longitudinal o secuestro de fragmento libre migrado)'],
    differential: ['Estenosis del canal lumbar', 'Espondilolistesis ístmica', 'Quiste sinovial facetario'],
    firstLine: [
      { drug: 'Tratamiento conservador protocolizado de 6 a 8 semanas: AINEs + Pregabalina + Fisioterapia motora', dose: 'Naproxeno 500 mg c/12h VO + Pregabalina 75 a 150 mg c/12h VO por 4 a 6 semanas', route: 'VO con alimentos', freq: 'c/12h', notes: 'Hasta un 70-80% de las hernias extruidas sufren reabsorción y deshidratación espontánea mediada por macrófagos sin cirugía' }
    ],
    alternatives: [
      { drug: 'Microdiscectomía lumbar mínimamente invasiva (o Discectomía endoscópica percutánea)', dose: 'Resección microquirúrgica selectiva del fragmento herniado', route: 'Quirúrgica', freq: 'Única', notes: 'Gold standard quirúrgico con alivio inmediato del dolor ciático en > 90%' }
    ],
    nonPharm: ['Evitar la flexión de tronco y no levantar cargas pesadas durante la fase aguda'],
    nursingCare: ['Explicar el fenómeno de reabsorción espontánea discal para infundir tranquilidad y evitar cirugías innecesarias precoces', 'Monitoreo diario de la fuerza motora del extensor del primer dedo y dorsiflexión del pie', 'Cuidados postoperatorios de microdiscectomía: levantarse en bloque y deambular a las 12-24 horas']
  },
  {
    number: 356,
    id: 'diag-356',
    title: 'Espondilolistesis',
    cie10: 'M43.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Desplazamiento o deslizamiento anormal anterior (anterolistesis) o posterior (retrolistesis) de un cuerpo vertebral sobre el cuerpo vertebral subyacente adyacente, clasificada habitualmente en Ístmica (por lisis o fractura por estrés de la pars interarticularis en jóvenes a nivel L5-S1) o Degenerativa (por artrosis facetaria y laxitud ligamentosa en adultos mayores a nivel L4-L5).',
    symptoms: ['Dolor lumbar mecánico persistente que aumenta con la bipedestación prolongada, la marcha y la extensión del tronco', 'Claudicación neurógena o dolor radicular en piernas por estenosis del canal o del receso lateral', 'Tensión y contractura severa de los músculos isquiotibiales (dificultad para tocar el suelo con las manos)', 'Palpación de un escalón óseo en la columna lumbar (signo del hachazo / escalón palpable en grados avanzados)', 'Deformidad postural con aplanamiento glúteo'],
    redFlags: ['Progresión a Grado IV o Ptosis vertebral (Espondiloptosis Grado V: caída completa del cuerpo vertebral sobre el sacro) con compresión neurológica severa'],
    criteria: 'Radiografía de columna lumbosacra lateral en bipedestación que demuestra el desplazamiento vertebral cuantificado por la Clasificación de Meyerding (Grado I: 0-25%; Grado II: 25-50%; Grado III: 50-75%; Grado IV: 75-100%; Grado V: > 100%).',
    labTests: ['Habitualmente normales'],
    imaging: ['Radiografías lumbosacras dinámicas en flexión y extensión máximas (evalúan inestabilidad segmental activa)', 'Resonancia Magnética lumbar (evalúa compresión de saco tecal y raíces en agujeros de conjunción)'],
    differential: ['Espondilólisis simple sin deslizamiento (fractura de la pars con signo del "perrito de LaChapelle" decapitado)', 'Estenosis del canal lumbar aislada'],
    firstLine: [
      { drug: 'Tratamiento conservador en Grados I y II estables: Fortalecimiento de la musculatura abdominal y flexores de cadera + AINEs para crisis de dolor', dose: 'Programa de cinesiterapia activa para reducir la lordosis lumbar', route: 'Fisioterapia física', freq: 'Permanente', notes: 'Evitar ejercicios de hiperextensión lumbar' }
    ],
    alternatives: [
      { drug: 'Fusión espinal quirúrgica: Artrodesis lumbar instrumentada con tornillos pediculares y cajas intersomáticas (TLIF o PLIF) +/- Descompresión', dose: 'Procedimiento quirúrgico de fijación espinal', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en deslizamientos progresivos, inestabilidad demostrada, Grados III-IV o dolor/déficit neurológico refractario' }
    ],
    nonPharm: ['Uso de faja lumbosacra semirrígida durante actividades pesadas'],
    nursingCare: ['Palpación de la línea de apófisis espinosas en decúbito prono buscando el escalón óseo palpable', 'Educación para evitar deportes o actividades que impliquen hiperextensión forzada de columna lumbar (gimnasia rítmica, fútbol americano)', 'Cuidados postquirúrgicos de artrodesis: movilización en bloque y control de drenajes de herida']
  },
  {
    number: 357,
    id: 'diag-357',
    title: 'Estenosis del canal medular',
    cie10: 'M48.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Canal lumbar estrecho: estrechamiento anatómico progresivo del canal raquídeo central, de los recesos laterales o de los forámenes intervertebrales, producido por la combinación de artrosis facetaria hipertrófica, hipertrofia del ligamento amarillo y protrusión discal difusa en adultos mayores, que comprime el saco dural y las raíces de la cauda equina.',
    symptoms: ['CLAUDICACIÓN NEURÓGENA INTERMITENTE DE LA MARCHA (síntoma patognomónico):', '- Dolor, pesadez, calambres, debilidad o adormecimiento bilateral en nalgas, muslos y pantorrillas que APARECE AL CAMINAR una distancia fija o al estar de pie prolongadamente', '- ALIVIO RÁPIDO CARACTERÍSTICO AL INCLINAR EL TRONCO HACIA ADELANTE O AL SENTARSE (la flexión anterior abre el diámetro del canal raquídeo en un 15-20%)', '- "SIGNO DEL CARRITO DE COMPRAS" (Shopping cart sign): el paciente camina mucho mejor y sin dolor si se apoya inclinado sobre un carrito de compras o empuja un cochecito de bebé', '- Buena tolerancia para montar en bicicleta estática (por mantener la columna lumbar flexionada)'],
    redFlags: ['Déficit neurológico motor progresivo en miembros inferiores', 'Síndrome de cola de caballo con retención urinaria'],
    criteria: 'Historia típica de claudicación neurógena que alivia en flexión + confirmación por Resonancia Magnética de estrechamiento del diámetro anteroposterior del canal lumbar (< 10 mm) o área del saco dural < 75-100 mm2.',
    labTests: ['Habitualmente normales'],
    imaging: ['RESONANCIA MAGNÉTICA LUMBAR (gold standard: visualiza la estenosis multifocal del canal y compresión del saco tecal)', 'Índice Tobillo-Brazo (ITB normal > 0.90 descarta claudicación vascular arterial periférica)'],
    differential: ['Claudicación vascular arterial periférica (el dolor vascular alivia al detenerse de pie sin doblarse; la claudicación neurógena exige sentarse o flexionarse)', 'Polineuropatía periférica diabética'],
    firstLine: [
      { drug: 'Manejo conservador multimodal inicial: Cinesiterapia de flexión lumbar (Ejercicios de Williams) + Analgésicos (Paracetamol o Gabapentinoides)', dose: 'Ejercicios diarios de flexión de tronco + Pregabalina 75 mg cada 12 horas VO', route: 'Fisioterapia + VO', freq: 'Reglado', notes: 'Mejora la capacidad de marcha en estenosis leves a moderadas' },
      { drug: 'Infiltración epidural interlaminar o caudal de corticoides guiada por radioscopía', dose: 'Inyección epidural de Triamcinolona', route: 'Intervencionista del dolor', freq: 'Puntual', notes: 'Alivio temporal eficaz en pacientes que no son candidatos quirúrgicos inmediatos' }
    ],
    alternatives: [
      { drug: 'Descompresión quirúrgica del canal lumbar (Laminectomía descompresiva +/- Foraminotomía +/- Fusión con tornillos)', dose: 'Procedimiento neuroquirúrgico / ortopédico', route: 'Quirúrgica', freq: 'Única', notes: 'Tratamiento de elección definitivo con excelentes resultados cuando la distancia de marcha es muy reducida (< 100-200 m) o hay déficit motor' }
    ],
    nonPharm: ['Uso de bastón o andador que favorezca la postura en discreta flexión anterior al caminar'],
    nursingCare: ['DIAGNÓSTICO DIFERENCIAL DE ENFERMERÍA ENTRE CLAUDICACIÓN NEURÓGENA Y VASCULAR: Preguntar si el dolor alivia simplemente quedándose quieto de pie (vascular) o si necesita obligatoriamente sentarse o agacharse hacia adelante (neurógena); y palpar siempre los pulsos pedios (normales en la neurógena)', 'Instruir al paciente sobre la postura de alivio flexionando el tronco hacia adelante', 'Recomendar el uso de bicicleta estática para mantenerse activo cardiovascularmente']
  },
  {
    number: 358,
    id: 'diag-358',
    title: 'Escoliosis idiopática',
    cie10: 'M41.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Deformidad tridimensional estructural y compleja de la columna vertebral caracterizada por una desviación lateral en el plano coronal con un ángulo de Cobb ≥ 10°, asociada a rotación vertebral axial en el plano transversal e hipocifosis en el plano sagital, siendo la más frecuente la Escoliosis Idiopática del Adolescente (EIA) entre los 10 y 18 años.',
    symptoms: ['Generalmente asintomática e indolora en la adolescencia (detectada por asimetría corporal)', 'Asimetría visible en la altura de los hombros (un hombro más alto que el otro)', 'Asimetría del talle o flancos (triángulo de la talla asimétrico)', 'Escápula prominente o alada unilateral', 'Protrusión o elevación de una cadera', 'En curvas severas > 50-60° en la adultez: dolor lumbar crónico y limitación restrictiva de la capacidad pulmonar'],
    redFlags: ['Curvas rápidamente progresivas en adolescentes con alto potencial de crecimiento óseo restante (Risser 0-2)', 'Insuficiencia respiratoria restrictiva en escoliosis severas > 70-80°'],
    criteria: 'TEST DE ADAMS POSITIVO (aparición de una giba costal o lumbar al inclinar el tronco hacia adelante) + Telerradiografía de columna completa con Ángulo de Cobb ≥ 10° con rotación vertebral.',
    labTests: ['No requeridos'],
    imaging: ['TELERRADIOGRAFÍA DE COLUMNA TOTAL (Espinograma anteroposterior y lateral en bipedestación): medición precisa del ÁNGULO DE COBB y evaluación de la madurez ósea con el SIGNO DE RISSER en las crestas ilíacas (Grado 0 a 5)'],
    differential: ['Actitud escoliótica postural o no estructural (por dismetría de miembros inferiores, desaparece al sentarse o acostarse)', 'Escoliosis neuromuscular o congénita'],
    firstLine: [
      { drug: 'Manejo según la magnitud del Ángulo de Cobb y potencial de crecimiento (Risser):', dose: '1. Curvas leves (< 20°): Observación y seguimiento radiológico cada 4 a 6 meses hasta la madurez esquelética', route: 'Observación', freq: 'Periódico', notes: 'Control de la progresión' },
      { drug: '2. Curvas moderadas (20° a 40°) en paciente en crecimiento (Risser 0 a 2): USO DE CORSÉ ORTOPÉDICO RÍGIDO (Corsé de Boston o Chêneau o Milwaukee)', dose: 'Uso del corsé ortopédico de 18 a 23 horas al día hasta el cierre de los cartílagos de crecimiento', route: 'Ortésico', freq: 'Diario estricto', notes: 'TRATAMIENTO NO QUIRÚRGICO DE ELECCIÓN DEMOSTRADO (Estudio BrAIST): Frena la progresión de la curva y evita la cirugía en > 75% de los adolescentes' }
    ],
    alternatives: [
      { drug: 'Tratamiento Quirúrgico: Artrodesis e instrumentación vertebral posterior con barras y tornillos pediculares', dose: 'Cirugía de corrección y fusión espinal', route: 'Quirúrgica', freq: 'Única', notes: 'INDICADA en curvas severas con Ángulo de Cobb > 45-50° o curvas rápidamente progresivas' }
    ],
    nonPharm: ['Fisioterapia específica para escoliosis (Método Schroth) complementaria al corsé'],
    nursingCare: ['TAMIZAJE DE ESCOLIOSIS CON EL TEST DE ADAMS: Pedir al niño/adolescente que se incline hacia adelante con rodillas extendidas, palmas juntas y brazos colgando; mirar a nivel tangencial desde atrás: la presencia de una prominencia o "giba" torácica o lumbar asimétrica es patognomónica de rotura estructural', 'Apoyo psicológico intensivo a la adolescente para asegurar la adherencia estricta al corsé (la vergüenza estética es la causa principal de abandono y fracaso)', 'Cuidado de la piel bajo el corsé: camiseta de algodón sin costuras para evitar escoriaciones']
  },
  {
    number: 359,
    id: 'diag-359',
    title: 'Cifosis dorsal patológica',
    cie10: 'M40.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Aumento anormal y patológico de la curvatura fisiológica convexa posterior de la columna torácica en el plano sagital con un ángulo de cifosis > 40-45°, originada frecuentemente por Enfermedad de Scheuermann (cifosis estructural del adolescente con acuñamiento vertebral) o por aplastamientos osteoporóticos en el adulto mayor.',
    symptoms: ['Deformidad evidente de la espalda en "joroba" o encorvamiento dorsal rígido ("espalda redondeada")', 'Enfermedad de Scheuermann: cifosis torácica rígida que NO se corrige al intentar erguir la columna o acostarse en hiperextensión', 'Dolor dorsal sordo fatigante tras sedestación prolongada', 'Compensación postural con hiperlordosis cervical y lumbar'],
    redFlags: ['Compromiso neurológico o restricción respiratoria severa en cifosis angulares > 70-80°'],
    criteria: 'Telerradiografía lateral de columna en bipedestación con Ángulo de Cobb sagital > 45°. En Scheuermann: presencia de acuñamiento anterior ≥ 5° en al menos 3 cuerpos vertebrales contiguos + Nódulos de Schmorl.',
    labTests: ['Habitualmente normales'],
    imaging: ['Radiografía lateral de columna completa (medición del ángulo de cifosis y visualización de irregularidades de los platillos vertebrales y hernias intraspongiosas de Schmorl)'],
    differential: ['Cifosis postural flexible del adolescente (se corrige activamente al pedirle que se ponga derecho)', 'Espondilitis anquilosante', 'Mal de Pott (tuberculosis vertebral)'],
    firstLine: [
      { drug: 'Cifosis postural o leve (< 60°): Reeducación postural activa y fortalecimiento de erectores espinales y musculatura interescapular', dose: 'Ejercicios de extensión dorsal y natación regular', route: 'Fisioterapia física', freq: 'Permanente', notes: 'Corrige la postura y tonifica el dorso' },
      { drug: 'En Scheuermann moderado (curvas 60° a 75° en esqueleto inmaduro): Corsé ortopédico de extensión (Corsé de Milwaukee)', dose: 'Uso diario durante el brote de crecimiento puberal', route: 'Ortésico', freq: 'Diario', notes: 'Corrige activamente el acuñamiento vertebral' }
    ],
    alternatives: [
      { drug: 'Artrodesis e instrumentación vertebral correctiva', dose: 'Cirugía de fusión espinal', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en cifosis severas > 75° con dolor intratable o deformidad cosmética inaceptable' }
    ],
    nonPharm: ['Evitar cargar mochilas escolares con peso excesivo en un solo hombro'],
    nursingCare: ['Diferenciación entre cifosis postural flexible (se aplana en prono) y estructural rígida de Scheuermann (persiste la giba en decúbito)', 'Supervisión del uso del corsé y control de la piel en prominencias óseas', 'Educación para la salud sobre ergonomía escolar']
  },
  {
    number: 360,
    id: 'diag-360',
    title: 'Tendinitis manguito rotador',
    cie10: 'M75.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Tendinopatía inflamatoria o degenerativa que afecta a los tendones del manguito rotador del hombro, con mayor frecuencia al tendón del Supraespinoso, asociada habitualmente al síndrome de pinzamiento o choque subacromial bajo el arco coracoacromial.',
    symptoms: ['Dolor anterolateral del hombro que irradia por la cara lateral del brazo hacia la inserción del deltoides', 'Dolor predominantemente NOCTURNO que empeora al acostarse sobre el hombro afectado e interrumpe el sueño', 'Dolor que aumenta típicamente en el "arco doloroso" entre los 60° y 120° de abducción activa del brazo', 'Dificultad o dolor para realizar movimientos por encima de la cabeza (peinarse, alcanzar objetos en estantes altos, abrocharse el sujetador por detrás)', 'Pérdida de fuerza progresiva si evoluciona a rotura tendinosa'],
    redFlags: ['Rotura completa aguda del manguito rotador tras caída con impotencia funcional total para la abducción'],
    criteria: 'Dolor en arco doloroso subacromial + MANIOBRAS DE PINZAMIENTO POSITIVAS: Test de Neer positivo (dolor a la flexión forzada con rotación interna) y Test de Hawkins-Kennedy positivo (dolor a la rotación interna forzada con hombro y codo a 90°).',
    labTests: ['Habitualmente no requeridos'],
    imaging: ['ECOGRAFÍA DE HOMBRO DE ALTA RESOLUCIÓN (método de primera línea: engrosamiento tendinoso, pérdida del patrón fibrilar, bursitis subacromiodeltoidea o roturas parciales/totales)', 'Resonancia Magnética de hombro (gold standard para planificación quirúrgica)'],
    differential: ['Capsulitis adhesiva (hombro congelado con limitación del rango pasivo)', 'Radiculopatía cervical C5', 'Artrosis acromioclavicular'],
    firstLine: [
      { drug: 'Tratamiento conservador protocolizado: Reposo relativo + Fisioterapia motora especializada (Fortalecimiento de depresores de la cabeza humeral)', dose: 'Ejercicios de reeducación escapular y fortalecimiento del manguito rotador sin sobrepasar 90°', route: 'Fisioterapia física', freq: 'Sesiones regulares', notes: 'Restaura la cinemática articular y amplía el espacio subacromial en el 80% de los casos' },
      { drug: 'AINEs orales por ciclos cortos para control de la fase álgica aguda (Ibuprofeno o Naproxeno)', dose: 'Naproxeno 500 mg cada 12 horas VO con comidas por 7 a 10 días', route: 'VO con alimentos', freq: 'c/12h x 10 días', notes: 'Alivia la inflamación de la bursa subacromial' }
    ],
    alternatives: [
      { drug: 'Infiltración subacromial con Corticoides (Triamcinolona) + Anestésico local (Test de Neer terapéutico)', dose: 'Triamcinolona 40 mg + Lidocaína al 1% en el espacio subacromial', route: 'Infiltración subacromial', freq: 'Puntual', notes: 'Alivio rápido y duradero del dolor nocturno; máximo 2-3 infiltraciones al año para evitar debilitar el tendón' },
      { drug: 'Reparación artroscópica del manguito rotador y Acromioplastia', dose: 'Cirugía artroscópica mínimamente invasiva', route: 'Quirúrgica artroscópica', freq: 'Única', notes: 'Indicada en roturas completas sintomáticas o fracaso del manejo conservador tras 3 a 6 meses' }
    ],
    nonPharm: ['Aplicación de crioterapia local (hielo envuelto 15 min 3 veces al día tras esfuerzos)'],
    nursingCare: ['EXPLICACIÓN DE MANIOBRAS DE EXPLORACIÓN: Realizar el Test de Neer y Hawkins con delicadeza observando la reproducción del dolor subacromial', 'Instruir al paciente en no dormir apoyado sobre el hombro lesionado (usar almohada abrazada para mantener el brazo ligeramente separado del tórax)', 'Evitar la inmovilización rígida con cabestrillo por más de 48h (prevenir el hombro congelado secundario)', 'Enseñar ejercicios pendulares de Codman para mantener la movilidad pasiva sin esfuerzo del manguito']
  },
  {
    number: 361,
    id: 'diag-361',
    title: 'Capsulitis adhesiva (Hombro)',
    cie10: 'M75.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Hombro congelado (Frozen shoulder): afección inflamatoria y fibrosante de la cápsula articular glenohumeral caracterizada por retracción capsular, adherencias y engrosamiento sinovial, que produce una restricción global progresiva y severa tanto de la movilidad activa como pasiva del hombro, con fuerte asociación a Diabetes Mellitus y patología tiroidea.',
    symptoms: ['Evolución clásica en 3 fases sucesivas a lo largo de 1 a 2 años:', '1. Fase dolorosa / congelamiento (2 a 9 meses): dolor difuso severo e insoportable que empeora de noche', '2. Fase adhesiva / congelado (4 a 12 meses): el dolor disminuye progresivamente pero se instaura una RIGIDEZ ARTICULAR GLOBAL Y SEVERA ("hombro en bloque")', '3. Fase de descongelamiento / resolución (12 a 24 meses): recuperación lenta y gradual de la movilidad', 'LIMITACIÓN MARCADÍSIMA TANTO DE LA MOVILIDAD ACTIVA COMO PASIVA (la pérdida de la ROTACIÓN EXTERNA PASIVA con el codo pegado al cuerpo es el signo más característico)'],
    redFlags: ['Pérdida casi total de la función del hombro con incapacidad para las actividades básicas de la vida diaria'],
    criteria: 'Pérdida dolorosa del rango de movimiento del hombro de ≥ 50% en al menos dos planos (incluyendo obligatoriamente rotación externa pasiva) con radiografía ósea normal.',
    labTests: ['Glucemia y HbA1c (la diabetes mellitus confiere un riesgo 5 veces mayor de hombro congelado refractario)', 'TSH'],
    imaging: ['Radiografía simple de hombro (estrictamente normal, descarta artrosis glenohumeral)', 'Resonancia Magnética (engrosamiento del ligamento coracohumeral > 4 mm y obliteración del receso axilar capsular)'],
    differential: ['Tendinitis o rotura del manguito rotador (en el manguito la movilidad PASIVA está conservada; en la capsulitis está bloqueada tanto activa como pasivamente)', 'Artrosis glenohumeral'],
    firstLine: [
      { drug: 'Fisioterapia intensiva guiada suave y estiramientos capsulares pasivos progresivos', dose: 'Ejercicios de rango de movimiento pasivo y cinesiterapia', route: 'Fisioterapia física', freq: 'Diario permanente', notes: 'Pilar angular; debe ser progresivo y tolerado, nunca forzar con dolor extremo para no reiniciar la fase inflamatoria' },
      { drug: 'Infiltración intraarticular glenohumeral de Corticoides (Triamcinolona)', dose: 'Triamcinolona 40 mg intraarticular con técnica aséptica estricta (idealmente guiada por ecografía)', route: 'Intraarticular', freq: 'Puntual en fase dolorosa', notes: 'Acelera notablemente la resolución del dolor y acorta la fase inflamatoria de congelamiento' }
    ],
    alternatives: [
      { drug: 'Hidrodilatación capsular glenohumeral guiada por ecografía', dose: 'Inyección de 30 a 50 mL de solución salina + anestésico a presión para distender la cápsula', route: 'Intraarticular a presión', freq: 'Única', notes: 'Rompe mecánicamente las adherencias capsulares y mejora el rango de inmediato' },
      { drug: 'Liberación capsular artroscópica (Capsulotomía artroscópica)', dose: 'Sección quirúrgica de la cápsula fibrosada', route: 'Artroscópica', freq: 'Única', notes: 'En rigidez severa recalcitrante que no responde tras 6 a 12 meses de manejo conservador' }
    ],
    nonPharm: ['Compresas húmedas calientes antes de las sesiones de estiramiento'],
    nursingCare: ['REGLA CLÍNICA DE DISTINCIÓN PARA ENFERMERÍA: Evaluar la rotación externa PASIVA con el paciente sentado y codos pegados al cuerpo: si el examinador no puede rotar el brazo hacia afuera por tope mecánico firme, es una CAPSULITIS ADHESIVA (si el examinador puede moverlo sin tope pero el paciente no puede moverlo solo, es rotura de manguito rotador)', 'Tranquilizar a la paciente explicándole que es un proceso autolimitado pero largo (promedio 18 meses)', 'Monitoreo de glucemias en pacientes diabéticos']
  },
  {
    number: 362,
    id: 'diag-362',
    title: 'Epicondilitis (Codo de tenista)',
    cie10: 'M77.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Tendinopatía degenerativa y microdesgarros por sobreuso mecánico que afecta al tendón común de los músculos extensores de la muñeca y dedos en su inserción en el epicóndilo lateral del húmero, afectando con mayor frecuencia al músculo Extensor Radial Corto del Carpo (ERCC).',
    symptoms: ['Dolor circunscrito exquisito a la palpación directa sobre el epicóndilo lateral del húmero', 'Dolor que se intensifica al realizar extensión de la muñeca contra resistencia o al agarrar objetos con fuerza (levantar una taza llena, dar la mano, abrir picaportes o escurrir un trapo)', 'Sensación de pérdida de fuerza de prensión en la mano por inhibición dolorosa', 'Irradiación del dolor a lo largo de la musculatura extensora del antebrazo'],
    redFlags: ['Atrapamiento asociado del nervio interóseo posterior (rama profunda del nervio radial)'],
    criteria: 'Dolor a la palpación del epicóndilo lateral + MANIOBRA DE COZEN POSITIVA (dolor vivo al realizar extensión dorsal de la muñeca contra resistencia con el codo extendido).',
    labTests: ['No requeridos'],
    imaging: ['Ecografía musculoesquelética de codo (engrosamiento del tendón extensor común, hipoecogenicidad focal, microrroturas y neovascularización con Doppler)', 'Radiografía simple de codo (normal o calcificaciones periepicondíleas mínimas)'],
    differential: ['Síndrome del túnel radial (atrapamiento del nervio interóseo posterior 4 cm distal al epicóndilo)', 'Artrosis radiocapitular', 'Epitrocleitis / Codo de golfista (dolor en la cara medial interna)'],
    firstLine: [
      { drug: 'Modificación de actividades y reposo relativo del tendón', dose: 'Evitar movimientos repetitivos de flexoextensión y prono-supinación de muñeca', route: 'Conductual', freq: 'Permanente', notes: 'Pilar esencial para permitir la reparación biológica' },
      { drug: 'AINEs tópicos u orales por corto plazo (Diclofenaco gel al 1% o Ibuprofeno oral)', dose: 'Diclofenaco gel cada 8 horas en el epicóndilo o Ibuprofeno 400 mg c/8h VO por 5-7 días', route: 'Tópica / VO', freq: 'c/8h SOS', notes: 'Alivio analgésico sintomático' },
      { drug: 'Cinchas o bandas elásticas de descarga para epicondilitis (Banda de contra-fuerza)', dose: 'Colocada 2 a 3 cm por debajo del epicóndilo alrededor del antebrazo durante la actividad laboral o deportiva', route: 'Ortopédica', freq: 'Durante actividades', notes: 'Disipa la tensión mecánica sobre el punto de inserción tendinoso' }
    ],
    alternatives: [
      { drug: 'Ejercicios excéntricos del extensor radial del carpo (Protocolo de Tyler)', dose: 'Ejercicios diarios de elongación excéntrica con barra flexible', route: 'Fisioterapia física', freq: 'Diario', notes: 'Eficacia muy alta demostrada para remodelar el colágeno tendinoso' },
      { drug: 'Infiltración con Plasma Rico en Plaquetas (PRP) o Punción seca', dose: 'Infiltración intratendinosa guiada por ecografía', route: 'Intratendinosa', freq: 'Puntual', notes: 'Favorece la cicatrización biológica en tendinopatías refractarias' }
    ],
    nonPharm: ['Evitar las infiltraciones repetidas de corticoides (alivian a corto plazo pero aumentan la tasa de recidivas y debilitan el tendón a largo plazo)'],
    nursingCare: ['MANIOBRA DE COZEN DE ENFERMERÍA: Paciente con codo en extensión y puño cerrado; pedirle que extienda la muñeca dorsalmente mientras el examinador se opone con fuerza; el dolor vivo exquisito en el epicóndilo confirma el diagnóstico', 'Instruir sobre la correcta colocación de la banda de descarga: debe apretarse sobre la masa muscular del antebrazo, 2-3 cm distal al codo, y NUNCA directamente sobre el hueso doloroso', 'Enseñar ejercicios de estiramiento de los extensores de la muñeca']
  },
  {
    number: 363,
    id: 'diag-363',
    title: 'Fascitis plantar',
    cie10: 'M72.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Fasciosis plantar: proceso degenerativo y microtraumático por sobreuso y tracción repetitiva de la aponeurosis o fascia plantar en su inserción en la tuberosidad calcánea medial anteroinferior, constituyendo la causa más frecuente de talalgia (dolor de talón) en adultos.',
    symptoms: ['DOLOR PUNZANTE INTENSO EN EL TALÓN ("COMO UN CLAVO") AL DAR LOS PRIMEROS PASOS DE LA MAÑANA AL SALIR DE LA CAMA', 'El dolor disminuye y alivia paulatinamente tras caminar unos minutos (a medida que la fascia se calienta y distiende)', 'El dolor reaparece y empeora al final del día tras bipedestación prolongada o al levantarse tras haber estado sentado descansando', 'Dolor exquisito a la palpación digital directa sobre el tubérculo medial del calcáneo', 'Dolor que se incrementa con la dorsiflexión pasiva forzada del primer dedo del pie (tensión de la fascia: Test de Windlass positivo)'],
    redFlags: ['Rotura de la fascia plantar (dolor brusco con chasquido y equimosis tras infiltración previa de corticoides)'],
    criteria: 'Dolor matutino típico en el talón con alivio tras deambulación + dolor a la palpación de la tuberosidad medial del calcáneo.',
    labTests: ['Habitualmente no requeridos'],
    imaging: ['Ecografía de partes blandas de talón (gold standard: engrosamiento de la fascia plantar > 4.0-4.5 mm en su inserción con pérdida de ecogenicidad fibrilar)', 'Radiografía lateral de pie en carga (puede mostrar espolón calcáneo en el 50%, pero EL ESPOLÓN NO ES LA CAUSA DEL DOLOR, es solo un hallazgo radiológico de tracción)'],
    differential: ['Atrofia de la almohadilla grasa del talón (el dolor es central y empeora al caminar más, no es matutino)', 'Síndrome del túnel del tarso', 'Fractura por estrés del calcáneo'],
    firstLine: [
      { drug: 'ESTIRAMIENTOS ESPECÍFICOS DE LA FASCIA PLANTAR Y DEL TENDÓN DE AQUILES (Pilar de Oro con máxima evidencia)', dose: 'Estiramientos manuales de la fascia antes de levantarse de la cama (traccionar los dedos del pie hacia la espinilla) 3 veces al día', route: 'Fisioterapia física', freq: 'Diario permanente', notes: 'Tasa de curación > 85-90% en 6 meses' },
      { drug: 'Taloneras de silicona o plantillas ortopédicas de descarga con soporte de arco longitudinal', dose: 'Uso en todo calzado diario', route: 'Ortopédica', freq: 'Permanente', notes: 'Amortiguan el impacto del talón y relajan la tensión aponeurótica' },
      { drug: 'AINEs orales por ciclo corto (Ibuprofeno o Naproxeno)', dose: 'Ibuprofeno 400 mg cada 8 horas VO por 5 a 7 días', route: 'VO con alimentos', freq: 'c/8h SOS', notes: 'Alivio del dolor en fase inicial' }
    ],
    alternatives: [
      { drug: 'Terapia con Ondas de Choque Extracorpóreas (TOC)', dose: '3 a 5 sesiones semanales de ondas de choque radiales o focales', route: 'Extracorpóreo', freq: 'Semanal', notes: 'Eficacia demostrada en fascitis plantar crónica refractaria > 3 meses' },
      { drug: 'Férulas nocturnas de dorsiflexión de tobillo a 90°', dose: 'Férula colocada para dormir', route: 'Ortopédica nocturna', freq: 'Nocturno', notes: 'Mantiene la fascia elongada durante el sueño impidiendo el dolor matutino' }
    ],
    nonPharm: ['Masajear la planta del pie rodando una botella de agua helada bajo el pie durante 10 minutos', 'PROHIBICIÓN ESTRICTA DE CAMINAR DESCALZO o usar calzado plano sin amortiguación'],
    nursingCare: ['EDUCACIÓN DE ORO PARA EL DOLOR MATUTINO: Instruir al paciente a NO poner el pie en el suelo de golpe al despertar; realizar 2 minutos de estiramientos sentados en la cama traccionando la punta de los pies con una toalla antes de dar el primer paso', 'Explicar claramente que el "espolón calcáneo" no es el culpable del dolor (el dolor es de la fascia, no del hueso)', 'Desaconsejar el calzado plano (bailarinas, chanclas) y recomendar calzado con drop de 2-3 cm de talón']
  },
  {
    number: 364,
    id: 'diag-364',
    title: 'Bursitis trocantérea',
    cie10: 'M70.6',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Síndrome de dolor trocantéreo mayor (GTPS): afección dolorosa caracterizada por la inflamación de la bursa trocantérea superficial y profunda, asociada frecuentemente a tendinopatía o desgarros de los tendones glúteo medio y menor en su inserción en el trocánter mayor del fémur.',
    symptoms: ['Dolor agudo o sordo localizado estrictamente en la CARA LATERAL EXTERNA DE LA CADERA (no en la ingle)', 'Dolor que empeora marcadamente al ACOSTARSE DE LADO SOBRE LA CADERA AFECTADA impidiendo el sueño nocturno', 'Dolor al caminar distancias prolongadas, subir escaleras o cruzar las piernas', 'DOLOR EXQUISITO Y VIVO A LA PRESIÓN DIGITAL DIRECTA SOBRE EL TROCÁNTER MAYOR del fémur'],
    redFlags: ['Rotura completa del tendón del glúteo medio con marcha de Trendelenburg'],
    criteria: 'Dolor a la palpación directa del trocánter mayor + dolor lateral a la abducción contra resistencia con rotación interna de cadera.',
    labTests: ['Habitualmente normales'],
    imaging: ['Ecografía musculoesquelética de cadera (bursitis trocantérea con distensión líquida hipoecoica de la bursa y engrosamiento de los tendones glúteos)', 'Radiografía simple de pelvis (descarta coxartrosis o calcificaciones peritrocantéreas)'],
    differential: ['Coxartrosis (el dolor de la artrosis de cadera es en la INGLE, mientras que la trocanteritis es en la cara EXTERNA lateral)', 'Radiculopatía lumbar L4-L5', 'Meralgia parestésica'],
    firstLine: [
      { drug: 'Manejo conservador: Modificación de hábitos + Fisioterapia de fortalecimiento de abductores de cadera y estiramiento de banda iliotibial', dose: 'Ejercicios guiados continuos', route: 'Fisioterapia física', freq: 'Permanente', notes: 'Corrige el desbalance pélvico' },
      { drug: 'AINEs orales por ciclo corto (Naproxeno o Ibuprofeno)', dose: 'Naproxeno 500 mg cada 12 horas VO con comidas por 7 a 10 días', route: 'VO con alimentos', freq: 'c/12h x 10 días', notes: 'Alivio del dolor agudo' }
    ],
    alternatives: [
      { drug: 'Infiltración bursa trocantérea con Corticoides (Triamcinolona) + Anestésico local (Pilar de rescate)', dose: 'Triamcinolona 40 mg + Lidocaína 1% inyectada directamente en el punto de máximo dolor sobre el trocánter mayor', route: 'Infiltración local', freq: 'Puntual', notes: 'ALIVIO ESPECTACULAR INMEDIATO del dolor nocturno en > 85% de los pacientes' }
    ],
    nonPharm: ['Evitar dormir sobre el lado afecto (colocar una almohada entre las piernas al dormir de lado o decúbito supino)', 'Crioterapia local'],
    nursingCare: ['DIAGNÓSTICO DIFERENCIAL TOPOGRÁFICO DE ENFERMERÍA: Palpar la cara lateral del fémur sobre el trocánter mayor; si despierta un dolor vivo, es trocanteritis (si el dolor es inguinal profundo es coxartrosis)', 'Instruir sobre la colocación de un cojín entre las rodillas al dormir para evitar la aducción de la pierna y la compresión de la bursa', 'Asistencia aséptica en la infiltración trocantérea']
  },
  {
    number: 365,
    id: 'diag-365',
    title: 'Síndrome del túnel carpiano',
    cie10: 'G56.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Mononeuropatía compresiva más frecuente del organismo, producida por el atrapamiento e isquemia del Nervio Mediano a su paso por el túnel carpiano en la cara anterior de la muñeca bajo el retináculo flexor rígido (ligamento anular del carpo).',
    symptoms: ['PARESTESIAS, HORMIGUEO, ADORMECIMIENTO Y DOLOR NOCTURNO en el territorio del nervio mediano: dedo pulgar, índice, medio y mitad radial del anular (RESPETA EL DEDO MEÑIQUE)', 'Los síntomas despiertan a la paciente de noche, obligándola a sacudir o agitar vigorosamente la mano en el aire ("SIGNO DE LA SACUDIDA / FLICK SIGN")', 'Torpeza manual y caída frecuente de objetos pequeños (tazas, agujas, llaves)', 'Atrofia visible de la eminencia tenar de la mano en estadios avanzados graves con pérdida de la oposición del pulgar'],
    redFlags: ['Atrofia tenar irreversible con denervación motora severa en electromiograma'],
    criteria: 'Clínica típica que respeta el quinto dedo + MANIOBRAS PROVOCADORAS POSITIVAS: Signo de Tinel positivo (percusión sobre el túnel carpiano produce descargas en los 3 primeros dedos) y Test de Phalen positivo (flexión palmar máxima de muñecas a 90° durante 60 segundos reproduce el adormecimiento).',
    labTests: ['TSH (descarte de hipotiroidismo)', 'Glucemia (descarte de diabetes mellitus)', 'Hemograma'],
    imaging: ['ELECTROMIOGRAMA Y VELOCIDADES DE CONDUCCIÓN NERVIOSA (EMG / VCN: gold standard que demuestra enlentecimiento de la conducción sensitiva y motora distal a través del carpo)', 'Ecografía de muñeca (área de sección transversal del nervio mediano > 10 mm2 a la entrada del túnel)'],
    differential: ['Radiculopatía cervical C6-C7', 'Síndrome del pronador redondo', 'Neuropatía cubital'],
    firstLine: [
      { drug: 'FÉRULA O MUÑEQUERA DE INMOVILIZACIÓN EN POSICIÓN NEUTRA DE USO NOCTURNO (Primera línea no quirúrgica)', dose: 'Férula termoplástica rígida que mantiene la muñeca en 0° de extensión durante toda la noche por al menos 6 a 8 semanas', route: 'Ortopédica nocturna', freq: 'Nocturno permanente', notes: 'Mantiene la presión intracarpiana en sus niveles más bajos y evita la flexión involuntaria nocturna' },
      { drug: 'Infiltración local del túnel carpiano con Corticoides (Triamcinolona)', dose: 'Triamcinolona acetónido 20 mg con técnica estéril guiada por ecografía', route: 'Intracarpiana percutánea', freq: 'Puntual', notes: 'Alivio rápido de los síntomas nocturnos durante varios meses' }
    ],
    alternatives: [
      { drug: 'Cirugía de descompresión: Liberación quirúrgica del túnel carpiano (Sección abierta o endoscópica del retináculo flexor)', dose: 'Procedimiento quirúrgico definitivo ambulatorio bajo anestesia local', route: 'Quirúrgica', freq: 'Única', notes: 'TRATAMIENTO CURATIVO DE ELECCIÓN ante síntomas refractarios > 6 meses o evidencia de atrofia tenar o denervación en EMG' }
    ],
    nonPharm: ['Pausas activas y ergonomía del teclado/ratón con almohadillas de soporte'],
    nursingCare: ['MANIOBRA DE PHALEN DE ENFERMERÍA: Pedir a la paciente que mantenga ambos dorsos de las manos juntos con muñecas flexionadas a 90° durante 60 segundos; la aparición de adormecimiento en pulgar, índice y medio es diagnóstica', 'REGLA MNEMOTÉCNICA: Recordar que el quinto dedo (meñique) NO está inervado por el nervio mediano (inervado por el cubital); si el meñique se duerme, sospechar atrapamiento cubital', 'Instruir sobre el uso estricto de la férula nocturna']
  },
  {
    number: 366,
    id: 'diag-366',
    title: 'Dedo en resorte',
    cie10: 'M65.3',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Tenosinovitis estenosante del tendón flexor digital a nivel de la primera polea anular (Polea A1) en la cabeza del metacarpiano, caracterizada por engrosamiento inflamatorio y discrepancia de calibre entre el tendón y la polea, produciendo bloqueo del movimiento del dedo.',
    symptoms: ['Chasquido, resalte o "gatillo" palpable y audible al flexionar y extender el dedo', 'Bloqueo mecánico del dedo en flexión ("el dedo se queda trabado doblado en la palma")', 'Necesidad de usar la otra mano para forzar pasivamente la extensión del dedo ("desencallarlo")', 'Dolor y nódulo nodular fibroso palpable a nivel de la polea A1 en la palma de la mano', 'Rigidez matutina circunscrita al dedo afectado'],
    redFlags: ['Bloqueo fijo completo e irreducible del dedo en flexión'],
    criteria: 'Palpación de nódulo doloroso en la cabeza del metacarpiano que resalta o se traba al flexionar y extender el dedo.',
    labTests: ['Glucemia (muy frecuente en diabéticos)'],
    imaging: ['Ecografía de partes blandas de la mano (engrosamiento de la polea A1 > 0.5-1.0 mm y atrapamiento tendinoso)'],
    differential: ['Contractura de Dupuytren (retracción fija indolora de la fascia palmar sin resorte)', 'Esguince articular interfalángico'],
    firstLine: [
      { drug: 'Infiltración local de la vaina del tendón flexor con Corticoides (Triamcinolona) + Anestésico local', dose: 'Triamcinolona 10 a 20 mg inyectada en la vaina del flexor a nivel de la polea A1', route: 'Infiltración en vaina', freq: 'Puntual', notes: 'Tasa de curación definitiva superior al 60-80% con 1 o 2 infiltraciones' },
      { drug: 'Férula de inmovilización en extensión de la articulación metacarpofalángica', dose: 'Uso nocturno por 4 a 6 semanas', route: 'Ortopédica', freq: 'Nocturno', notes: 'Mantiene el tendón estirado y desinflama' }
    ],
    alternatives: [
      { drug: 'Liberación quirúrgica o percutánea de la polea A1 (Sección de la polea A1)', dose: 'Procedimiento quirúrgico ambulatorio con anestesia local', route: 'Quirúrgica menor', freq: 'Única', notes: 'Tratamiento curativo definitivo de elección ante bloqueo fijo o fracaso de infiltración' }
    ],
    nonPharm: ['Evitar actividades manuales repetitivas de agarre con fuerza'],
    nursingCare: ['Palpación suave del nódulo en la base del dedo en la palma mientras el paciente flexiona y extiende el dedo para percibir el chasquido', 'Instruir que no fuerce violentamente el dedo si se queda trabado; aplicar calor local suave', 'Cuidado de herida palmar tras la cirugía de liberación de polea']
  },
  {
    number: 367,
    id: 'diag-367',
    title: 'Esguince de tobillo',
    cie10: 'S93.4',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Lesión traumática por distensión, desgarro parcial o rotura completa de los ligamentos estabilizadores del tobillo, producida en más del 85-90% de los casos por un mecanismo de inversión forzada con flexión plantar (afectando de forma prioritaria al Ligamento Peroneoastragalino Anterior - LPAA y al Ligamento Peroneocalcáneo - LPC).',
    symptoms: ['Dolor agudo e intenso localizado en la cara anterolateral externa del tobillo tras doblarse el pie', 'Aparición rápida de edema y tumefacción "en huevo de paloma" sobre el maléolo lateral peroneo', 'Equimosis subcutánea tardía que desciende hacia los dedos del pie', 'Dificultad o imposibilidad para apoyar el pie y deambular', 'Clasificación de gravedad: Grado I (distensión sin rotura ni laxitud), Grado II (rotura parcial con laxitud moderada y equimosis), Grado III (rotura completa con inestabilidad articular franca)'],
    redFlags: ['FRACTURA ÓSEA MALEOLAR ASOCIADA (descarte obligatorio según Reglas de Ottawa para evitar pasar por alto fracturas de peroné o quinto metatarsiano)'],
    criteria: 'Antecedente traumático de inversión + dolor a la palpación del LPAA + APLICACIÓN DE LAS REGLAS DE OTTAWA para decidir si requiere radiografía.',
    labTests: ['No requeridos'],
    imaging: ['REGLAS DE TOBILLO DE OTTAWA PARA SOLICITAR RADIOGRAFÍA (Sensibilidad 100%): Se solicita radiografía de tobillo si hay dolor en zona maleolar Y al menos uno de los siguientes: 1. Dolor a la palpación ósea de los 6 cm distales del borde posterior o punta del maléolo lateral; 2. Dolor a la palpación de los 6 cm distales del maléolo medial; 3. Incapacidad para dar 4 pasos inmediatamente tras el trauma y en el triaje', 'Ecografía musculoesquelética para valorar rotura de ligamentos'],
    differential: ['Fractura de peroné distal o maléolo medial', 'Fractura de la base del 5° metatarsiano', 'Lesión de la sindesmosis tibioperonea (esguince alto)'],
    firstLine: [
      { drug: 'PROTOCOLO PRICE / POLICE INMEDIATO EN LAS PRIMERAS 48 A 72 HORAS (Pilar de Oro)', dose: 'P: Protección (tobillera o vendaje funcional); O/L: Carga Óptima precoz protegida; I: Ice / Crioterapia (hielo envuelto 15-20 min c/4h); C: Compresión elástica; E: Elevación del pie a 30°', route: 'Físico inmediato', freq: 'Primeros 3 días', notes: 'Minimiza el hematoma, reduce el edema y acelera la recuperación funcional' },
      { drug: 'AINEs orales por tiempo limitado: Ibuprofeno o Ketoprofeno', dose: 'Ibuprofeno 400 a 600 mg cada 8 horas VO con comidas por 3 a 5 días', route: 'VO con alimentos', freq: 'c/8h x 3-5 días', notes: 'Alivio del dolor agudo; no usar por más de 5 días para no interferir en la cicatrización ligamentosa' }
    ],
    alternatives: [
      { drug: 'Inmovilización rígida con férula posterior de yeso o bota Walker', dose: 'Inmovilización por un máximo de 7 a 10 días', route: 'Ortopédica', freq: 'Temporal corto', notes: 'Solo indicada en esguinces Grado III severos con inestabilidad; iniciar deambulación y fisioterapia precoz' }
    ],
    nonPharm: ['Rehabilitación propioceptiva temprana sobre platos basculantes para prevenir inestabilidad crónica'],
    nursingCare: ['APLICACIÓN RIGUROSA DE LAS REGLAS DE OTTAWA EN TRIAJE: Palpar los últimos 6 cm del borde posterior de ambos maléolos y la base del 5° metatarsiano; si no hay dolor óseo y el paciente puede apoyar y dar 4 pasos, NO SE REQUIERE RADIOGRAFÍA (ahorra tiempo y radiación innecesaria)', 'Técnica de colocación de vendaje compresivo elástico en espiga o "en ocho" de distal a proximal sin apretar excesivamente para no comprometer el retorno venoso', 'Instruir que el hielo NUNCA se aplica directo sobre la piel (usar toalla intermedia)']
  },
  {
    number: 368,
    id: 'diag-368',
    title: 'Esguince de muñeca',
    cie10: 'S63.5',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Lesión ligamentosa producida por estiramiento forzado o rotura de los ligamentos estabilizadores de la articulación radiocarpiana o mediocarpiana (con frecuencia el ligamento escafosemilunar o el complejo fibrocartilaginoso triangular), secundaria a una caída con la mano en hiperextensión.',
    symptoms: ['Dolor agudo en la muñeca inmediatamente posterior a la caída sobre la palma de la mano', 'Edema y tumefacción en el dorso de la muñeca', 'Dolor que empeora con los movimientos de flexoextensión y al cargar peso', 'Equimosis cutánea y debilidad para la prensión'],
    redFlags: ['FRACTURA OCULTA DEL ESCAFOIDES CARPIANO (dolor exquisito a la palpación en el fondo de la TABAQUERA ANATÓMICA: riesgo de pseudoartrosis y necrosis avascular)'],
    criteria: 'Traumatismo en hiperextensión + dolor ligamentoso con radiografías sin fractura.',
    labTests: ['No requeridos'],
    imaging: ['RADIOGRAFÍA SIMPLE DE MUÑECA ANTEROPOSTERIOR Y LATERAL + PROYECCIÓN ESPECÍFICA PARA ESCAFOIDES (obligatoria para descartar fractura de escafoides o diástasis escafosemilunar > 3 mm / signo de Terry-Thomas)', 'Resonancia Magnética si persiste dolor > 3-4 semanas'],
    differential: ['Fractura de escafoides', 'Fractura distal de radio (Fractura de Colles)', 'Lesión del fibrocartílago triangular'],
    firstLine: [
      { drug: 'Protocolo RICE: Reposo con férula o muñequera + Hielo local + Vendaje compresivo + Elevación', dose: 'Férula de muñeca en posición funcional neutra por 7 a 14 días', route: 'Ortopédico', freq: 'Continuo', notes: 'Inmovilización transitoria para cicatrización ligamentosa' },
      { drug: 'AINEs orales para el dolor agudo (Ibuprofeno o Naproxeno)', dose: 'Ibuprofeno 400 mg cada 8 horas VO con comidas por 3 a 5 días', route: 'VO', freq: 'c/8h SOS', notes: 'Alivio sintomático' }
    ],
    alternatives: [
      { drug: 'Reparación ligamentosa artroscópica de muñeca', dose: 'Cirugía de mínima invasión', route: 'Artroscópica', freq: 'Única', notes: 'En disociación escafosemilunar completa con inestabilidad' }
    ],
    nonPharm: ['Ejercicios suaves de movilidad de los dedos desde el primer día para evitar rigidez'],
    nursingCare: ['PALPACIÓN OBLIGATORIA DE LA TABAQUERA ANATÓMICA: Palpar con el dedo pulgar en el fondo de la tabaquera anatómica (entre los tendones del extensor largo y corto del pulgar); si despierta dolor vivo exquisito, INMOVILIZAR COMO FRACTURA DE ESCAFOIDES aunque la radiografía inicial sea normal (repetir radiografía a los 10-14 días)', 'Verificar que la férula no comprima ni adormezca los dedos', 'Monitoreo de la movilidad y sensibilidad de los dedos']
  },
  {
    number: 369,
    id: 'diag-369',
    title: 'Lesión meniscal de rodilla',
    cie10: 'M23.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Rotura o desgarro del fibrocartílago meniscal medial (interno) o lateral (externo) de la rodilla, producido por un mecanismo de torsión rotacional con la rodilla en carga y semiflexión en jóvenes deportistas, o por degeneración intrínseca por desgaste en adultos mayores.',
    symptoms: ['Sensación de "chasquido" o desgarro interno en el momento del giro', 'Dolor localizado en la interlínea articular femorotibial interna o externa', 'Derrame articular tardío (hidrartros) que aparece 12 a 24 horas después del traumatismo (a diferencia de la hemartrosis inmediata de la rotura del LCA)', 'BLOQUEO MECÁNICO ARTICULAR DE LA RODILLA (imposibilidad para completar la extensión completa de la rodilla por interposición de un asa de cubo)', 'Sensación de fallo, inestabilidad o "fallo en vacío" al girar la pierna'],
    redFlags: ['Rodilla bloqueada irreductible en flexión que requiere descompresión artroscópica urgente'],
    criteria: 'MANIOBRAS MENISCALES POSITIVAS: Test de McMurray positivo (dolor o resalte a la extensión con rotación interna/externa de tibia) y Test de Apley positivo (dolor a la compresión y rotación en decúbito prono).',
    labTests: ['Artrocentesis si hay derrame a tensión: líquido sinovial claro o serohemático'],
    imaging: ['RESONANCIA MAGNÉTICA DE RODILLA (gold standard no invasivo: sensibilidad y especificidad > 90-95% para clasificar roturas longitudinales, radiales, horizontales o en asa de cubo)', 'Radiografía simple de rodillas (descarta fracturas o cuerpos libres)'],
    differential: ['Rotura del ligamento cruzado anterior', 'Osteocondritis disecante', 'Artrosis femorotibial incipiente'],
    firstLine: [
      { drug: 'Manejo conservador en roturas degenerativas o estables: Fisioterapia + Fortalecimiento de cuádriceps e isquiotibiales', dose: 'Programa de rehabilitación propioceptiva de 6 a 8 semanas', route: 'Fisioterapia física', freq: 'Regular', notes: 'En personas mayores o roturas degenerativas el tratamiento conservador es de primera elección' },
      { drug: 'AINEs orales por ciclo corto (Ibuprofeno o Naproxeno)', dose: 'Ibuprofeno 600 mg cada 8 horas VO por 5 a 7 días', route: 'VO con alimentos', freq: 'c/8h SOS', notes: 'Alivio del dolor e inflamación sinovial' }
    ],
    alternatives: [
      { drug: 'Sutura meniscal artroscópica (Reparación meniscal de preservación)', dose: 'Sutura todo-adentro o afuera-adentro por artroscopía', route: 'Artroscópica', freq: 'Única', notes: 'DE PRIMERA ELECCIÓN en roturas traumáticas en zona roja-roja o roja-blanca vascularizada en jóvenes para prevenir artrosis futura' },
      { drug: 'Meniscectomía parcial artroscópica selectiva', dose: 'Resección mínima del tejido meniscal inestable', route: 'Artroscópica', freq: 'Única', notes: 'En roturas complejas o avasculares no suturables o bloqueos irreductibles' }
    ],
    nonPharm: ['Crioterapia local tras actividad física'],
    nursingCare: ['MANIOBRA DE MCMURRAY DE ENFERMERÍA: Con el paciente en decúbito supino, flexionar completamente la rodilla y rotar la tibia externamente mientras se extiende la pierna palpando la interlínea interna; un resalte o dolor vivo es positivo', 'Instruir que NO se debe forzar la rodilla si se encuentra bloqueada en flexión', 'Cuidados postquirúrgicos artroscópicos: apósito compresivo estéril, elevación del miembro inferior y vigilancia de signos de sangrado o infección']
  },
  {
    number: 370,
    id: 'diag-370',
    title: 'Rotura de ligamento cruzado',
    cie10: 'S83.5',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Lesión traumática grave por desgarro o rotura completa del Ligamento Cruzado Anterior (LCA - 90%) o Posterior (LCP - 10%), producida comúnmente en deportes por desaceleración brusca, cambio de dirección con valgo forzado y rotación externa del fémur sobre la tibia fija.',
    symptoms: ['Chasquido o "pop" auditivo y sensitivo agudo en el interior de la rodilla en el momento exacto del giro', 'HEMARTROSIS A TENSIÓN HIPERAGUDA (derrame articular masivo de sangre que aparece en menos de 1 a 2 horas tras el trauma)', 'Impotencia funcional inmediata e incapacidad para continuar el juego o apoyar la pierna', 'SENSACIÓN DE INESTABILIDAD ANTERIOR SEVERA ("la rodilla se me sale o se desencaja")', 'Tríada desgraciada de O\'Donoghue si se asocia a rotura de menisco medial y ligamento colateral medial'],
    redFlags: ['Lesión multiligamentosa de rodilla con luxación femorotibial y compromiso de la arteria poplítea (isquemia aguda de la extremidad: urgencia vascular < 6 horas)'],
    criteria: 'MANIOBRAS DE INESTABILIDAD ANTERIOR POSITIVAS: TEST DE LACHMAN POSITIVO (desplazamiento anterior de la tibia con rodilla a 20-30° de flexión con tope elástico blando: maniobra más sensible > 95%), Cajón Anterior positivo (a 90°) y Pivot-Shift test positivo.',
    labTests: ['Artrocentesis evacuadora inmediata: confirma HEMARTROSIS (sangre pura intraarticular; si hay gotas de grasa sobrenadante sugiere fractura osteocondral)'],
    imaging: ['RESONANCIA MAGNÉTICA DE RODILLA (gold standard: visualiza la rotura de fibras del LCA, edema óseo en "beso" en cóndilo femoral lateral y platillo tibial posterior y lesiones meniscales asociadas)', 'Radiografía simple de rodillas (descarta fractura de Segond: avulsión del margen tibial lateral patognomónica de rotura del LCA)'],
    differential: ['Rotura del ligamento colateral medial', 'Luxación de rótula aguda', 'Fractura de meseta tibial'],
    firstLine: [
      { drug: 'Manejo inicial en fase aguda: Protocolo PRICE + Férula inmovilizadora en extensión transitoria + Muletas sin apoyo', dose: 'Hielo, vendaje elástico, descarga total y analgésicos AINEs por 7 a 14 días', route: 'Físico inmediato', freq: 'Primeras 2 semanas', notes: 'Resolución de la hemartrosis aguda y recuperación del rango de movilidad antes de cualquier cirugía' },
      { drug: 'Reconstrucción ligamentosa quirúrgica artroscópica (Plastia de LCA con autoinjerto de Hueso-Tendón-Hueso - HTH o Isquiotibiales)', dose: 'Sustitución anatómica del ligamento por artroscopía', route: 'Quirúrgica', freq: 'Diferida en 3-6 semanas', notes: 'INDICADA DE ELECCIÓN en personas jóvenes, activas o deportistas para restaurar la estabilidad rotacional y prevenir artrosis precoz' }
    ],
    alternatives: [
      { drug: 'Tratamiento conservador con rehabilitación neuromuscular intensiva', dose: 'Programa de fortalecimiento masivo de isquiotibiales y propiocepción', route: 'Fisioterapia física', freq: 'Permanente', notes: 'En pacientes sedentarios de edad avanzada sin inestabilidad funcional en la vida diaria' }
    ],
    nonPharm: ['Rehabilitación postoperatoria estructurada de 6 a 9 meses antes del alta deportiva'],
    nursingCare: ['TEST DE LACHMAN DE ENFERMERÍA: Paciente relajado en supino, rodilla flexionada a 20-30°; sujetar el fémur distal con una mano y traccionar la tibia proximal hacia adelante con la otra; la traslación tibial aumentada sin tope firme confirma rotura del LCA', 'Si se realiza artrocentesis evacuadora: verificar si hay glóbulos de grasa sobrenadante en la sangre extraída (avisa de fractura ósea intraarticular)', 'Cuidados postquirúrgicos: vigilancia de pulsos pedios y tibial posterior para descartar compromiso vascular']
  },
  {
    number: 371,
    id: 'diag-371',
    title: 'Acné vulgar inflamatorio',
    cie10: 'L70.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad inflamatoria crónica polifactorial de la unidad pilosebácea, caracterizada por hipersecreción sebácea inducida por andrógenos, hiperqueratinización folicular con oclusión del infundíbulo, proliferación de Cutibacterium acnes y respuesta inmunológica inflamatoria con formación de comedones, pápulas, pústulas y nódulos.',
    symptoms: ['Lesiones inflamatorias en rostro (frente, mejillas, mentón), pecho, hombros y espalda:', '- PÁPULAS eritematosas dolorosas foliculares y PÚSTULAS purulentas superficiales', '- NÓDULOS Y QUISTES profundos indurados, dolorosos y fluctuantes en formas severas', '- Comedones abiertos ("puntos negros") y cerrados ("puntos blancos")', 'Cicatrices atróficas deprimidas ("en picahielo", "en furgón" o "en platillo") o cicatrices hipertróficas y queloides', 'Hiperpigmentación postinflamatoria residual'],
    redFlags: ['Acné fulminans (forma destructiva ulcerada hiperaguda con necrosis cutánea, fiebre, artralgias y leucocitosis)', 'Acné conglobata severo con fístulas comunicantes drenantes'],
    criteria: 'Inspección clínica dermatológica con coexistencia de comedones y lesiones inflamatorias polimorfas papulopustulosas o noduloquísticas.',
    labTests: ['Perfil androgénico (testosterona total, libre, DHEA-S) en mujeres con signos de hiperandrogenismo (SOP) o acné recalcitrante'],
    imaging: ['No requerida'],
    differential: ['Rosácea pápulo-pustulosa (la rosácea NO tiene comedones y presenta eritema centrofacial y telangiectasias)', 'Foliculitis bacteriana o por Malassezia', 'Dermatitis perioral'],
    firstLine: [
      { drug: 'Terapia tópica combinada en acné leve a moderado: Retinoide tópico + Peróxido de Benzoilo +/- Clindamicina tópica', dose: 'Adapaleno al 0.1% o 0.3% gel aplicado por la noche en capa fina + Peróxido de Benzoilo al 2.5% o 5% en gel por las mañanas', route: 'Tópica', freq: 'c/12-24h', notes: 'El retinoide normaliza la queratinización y disuelve el microcomedón; el peróxido de benzoilo es bactericida sin inducir resistencias' },
      { drug: 'Antibioticoterapia oral en acné moderado a severo: Doxiciclina oral', dose: '100 mg cada 24 horas VO con un vaso lleno de agua durante 8 a 12 semanas (máximo 3 meses)', route: 'VO con alimentos', freq: 'c/24h x 8-12 sem', notes: 'Efecto antimicrobiano y potente efecto antiinflamatorio inhibiendo quimiotaxis de neutrófilos; NUNCA usar como monoterapia sin peróxido de benzoilo tópico' }
    ],
    alternatives: [
      { drug: 'ISOTRETINOÍNA ORAL (Retinoide sistémico) - Tratamiento curativo definitivo de elección en acné noduloquístico severo o cicatrizal', dose: '0.5 a 1.0 mg/kg/día VO con alimentos grasos hasta alcanzar una DOSIS ACUMULADA TOTAL DE 120 A 150 mg/kg de peso (habitualmente 6 a 9 meses)', route: 'VO con comidas', freq: 'c/24h x 6-9 meses', notes: 'ÚNICO FÁRMACO QUE ACTÚA SOBRE LOS 4 PILARES PATOGÉNICOS; ALTO RIESGO TERATOGÉNICO OBLIGA A DOBLE MÉTODO ANTICONCEPTIVO Y TEST DE EMBARAZO MENSUAL' },
      { drug: 'Terapia hormonal en mujeres: Anticonceptivos con Acetato de Ciproterona o Drospirenona o Espironolactona', dose: '1 comprimido diario VO', route: 'VO', freq: 'c/24h', notes: 'Bloquean el estímulo androgénico sebáceo' }
    ],
    nonPharm: ['Lavado facial dos veces al día con limpiadores syndet suaves sin frotar con esponjas', 'Uso exclusivo de cosméticos y protectores solares con etiqueta "no comedogénico" / "oil-free"', 'NO PELLIZCAR, RASCAR NI EXPRIMIR LAS LESIONES (aumenta la inflamación y las cicatrices permanentes)'],
    nursingCare: ['PROGRAMA DE PREVENCIÓN DE EMBARAZO CON ISOTRETINOÍNA: Informar a toda mujer en edad fértil sobre la extrema teratogenicidad de la isotretinoína (malformaciones craneofaciales, cardíacas y del SNC en > 30% de fetos expuestos); exigir doble anticoncepción obligatoria y test de embarazo mensual negativo antes de cada receta', 'Monitoreo analítico basal y periódico de perfil lipídico (triglicéridos) y enzimas hepáticas durante la isotretinoína', 'Manejo de la queilitis descamativa labial (efecto universal de la isotretinoína) con vaselina o bálsamos labiales continuos y lágrimas artificiales para sequedad ocular', 'Educación para aplicar retinoides tópicos en noche y usar fotoprotector de día']
  },
  {
    number: 372,
    id: 'diag-372',
    title: 'Rosácea facial',
    cie10: 'L71.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dermatosis inflamatoria vascular crónica de la región centrofacial de adultos (30 a 50 años), caracterizada por hiperreactividad vascular con eritema transitorio ("flushing"), eritema centrofacial persistente, telangiectasias, pápulas y pústulas inflamatorias, en ausencia completa de comedones.',
    symptoms: ['Subtipo 1: Eritematotelangiectásica: sofocos o enrojecimiento brusco episódico ("flushing") desencadenado por calor, comidas calientes, alcohol, picantes o estrés, evolucionando a eritema centrofacial persistente y telangiectasias ("arañas vasculares") en mejillas y nariz', 'Subtipo 2: Pápulo-pustulosa: pápulas y pústulas eritematosas en mejillas, nariz y frente SIN COMEDONES', 'Subtipo 3: Fimatosa (Rinofima): engrosamiento cutáneo bulboso progresivo, lobulado e hiperplasia sebácea de la nariz ("nariz bulbosa en coliflor", casi exclusivo en varones)', 'Subtipo 4: Ocular (50% de casos): blefaritis, conjuntivitis, sensación de cuerpo extraño y ojo seco'],
    redFlags: ['Queratitis rosácea con úlceras corneales y riesgo de perforación ocular'],
    criteria: 'Eritema centrofacial persistente que se intensifica periódicamente con factores desencadenantes + telangiectasias o pápulas/pústulas en ausencia de comedones.',
    labTests: ['Examen directo de raspado cutáneo con aceite mineral (abundancia de ácaros Demodex folliculorum en los folículos)'],
    imaging: ['No requerida'],
    differential: ['Lupus eritematoso sistémico (el eritema malar del lupus respeta surcos nasogenianos y no tiene telangiectasias ni pústulas)', 'Acné vulgar (el acné siempre tiene comedones)', 'Dermatitis seborreica facial'],
    firstLine: [
      { drug: 'Tratamiento tópico en forma pápulo-pustulosa leve a moderada: Ivermectina tópica al 1% en crema', dose: 'Aplicar una fina capa en todo el rostro una vez al día por la noche durante 12 a 16 semanas', route: 'Tópica nocturna', freq: 'c/24h', notes: 'Fármaco tópico de primera línea: potente efecto antiparasitario frente a Demodex y acción antiinflamatoria' },
      { drug: 'Metronidazol en gel o crema al 0.75% o Ácido Azelaico al 15%', dose: 'Aplicar cada 12 horas sobre las zonas afectadas', route: 'Tópica', freq: 'c/12h', notes: 'Alternativas tópicas eficaces bien toleradas' },
      { drug: 'Antibioticoterapia oral antiinflamatoria en formas moderadas a severas: Doxiciclina a dosis subantimicrobiana', dose: '40 a 50 mg/día VO en la mañana durante 8 a 12 semanas', route: 'VO', freq: 'c/24h x 12 sem', notes: 'Ejerce efecto antiinflamatorio puro sin alterar la flora bacteriana ni generar resistencias' }
    ],
    alternatives: [
      { drug: 'Láser Vascular de Colorante Pulsado (PDL) o Luz Pulsada Intensa (IPL)', dose: 'Sesiones dermatológicas periódicas', route: 'Lumínico dermatológico', freq: 'Según indicación', notes: 'Tratamiento de elección para eliminar las telangiectasias fijas y el eritema persistente' },
      { drug: 'Decorticación quirúrgica o con Láser CO2 en Rinofima', dose: 'Remodelado quirúrgico nasal', route: 'Quirúrgica', freq: 'Única', notes: 'Restaura la anatomía estética nasal en rinofima avanzado' }
    ],
    nonPharm: ['IDENTIFICACIÓN Y EVITACIÓN ESTRICTA DE DESENCADENANTES DE FLUSHING: Comidas muy calientes, picantes, alcohol (especialmente vino tinto), cafeína, baños termales y cambios bruscos de temperatura', 'FOTOPROTECCIÓN SOLAR DIARIA ESTRICTA con filtros solares minerales de alta tolerancia (óxido de zinc o dióxido de titanio)'],
    nursingCare: ['EDUCACIÓN DE REASEGURO: Explicar que la rosácea es un trastorno vascular y folicular, y NO está relacionada con falta de higiene ni alcoholismo (estigma del rinofima)', 'Recomendar productos cosméticos suaves para piel sensible / reactiva sin alcohol, mentol, alcanfor ni exfoliantes agresivos', 'Enseñar a limpiar el rostro con agua tibia (nunca caliente ni helada) y secar a toques suaves']
  },
  {
    number: 373,
    id: 'diag-373',
    title: 'Dermatitis atópica',
    cie10: 'L20.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad inflamatoria cutánea crónica, pruriginosa y recidivante mediada por hipersensibilidad tipo I y desregulación inmune Th2, producida por una alteración genética de la barrera epidérmica (mutaciones en el gen de la Filagrina), asociada típicamente a la Marcha Atópica (asma, rinitis alérgica y alergias alimentarias).',
    symptoms: ['PRURITO CUTÁNEO INTENSO, constante y feroz ("el prurito es el síntoma cardinal: es un prurito con erupción, no una erupción con prurito")', 'DISTRIBUCIÓN TÍPICA SEGÚN LA EDAD:', '- Fase del lactante (2 meses a 2 años): placas eritematosas, exudativas y vesiculosas en MEJILLAS (respetando la zona peribucal central), cuero cabelludo y caras extensoras de extremidades', '- Fase infantil (2 a 12 años): placas eritematosas secas, descamativas y excoriadas en PLIEGUES FLEXURALES (huecos poplíteos de rodillas y pliegues antecubitales de codos), cuello y muñecas', '- Fase del adulto: LIQUENIFICACIÓN (engrosamiento de la piel con acentuación cuadriculada de los pliegues cutáneos por rascado crónico) en cuello, flexuras y manos', 'Xerosis cutánea generalizada (piel extremadamente seca y áspera)', 'Signos menores: Pliegue infraorbitario de Dennie-Morgan, queratosis pilaris y pitiriasis alba'],
    redFlags: ['ECZEMA HERPÉTICO / ERUPCIÓN VARICELIFORME DE KAPOSI: sobreinfección viral diseminada por Herpes Simple en piel atópica con vesículas umbilicadas dolorosas, fiebre alta y malestar (urgencia médica)', 'Impétigo secundario bacteriano estafilocócico con costras melicéricas'],
    criteria: 'Criterios de Hanifin y Rajka (al menos 3 criterios mayores: prurito, morfología y distribución típica, dermatitis crónica recidivante, historia personal/familiar de atopia + 3 menores).',
    labTests: ['IgE total sérica e IgE específica (elevada en el 80% de formas extrínsecas)', 'Hemograma con eosinofilia periférica'],
    imaging: ['No requerida'],
    differential: ['Dermatitis seborreica (en el lactante afecta área del pañal y no pica)', 'Escabiosis / Sarna infantil', 'Dermatitis alérgica de contacto', 'Síndrome de Netherton'],
    firstLine: [
      { drug: 'RESTAURACIÓN Y REPARACIÓN CONTINUA DE LA BARRERA CUTÁNEA (Pilar de Oro obligatorio para toda la vida)', dose: 'Aplicación generosa de cremas o ungüentos emolientes hidratantes ricos en ceramidas en todo el cuerpo inmediatamente tras el baño (dentro de los primeros 3 minutos con la piel aún húmeda)', route: 'Tópica emoliente', freq: '2 a 3 veces al día diario', notes: 'Reduce los brotes a la mitad y disminuye la necesidad de corticoides' },
      { drug: 'Corticoides tópicos para el control de los brotes activos inflamatorios', dose: 'Corticoides de baja potencia (Hidrocortisona al 1%) en rostro y pliegues; o de potencia media (Mometasona al 0.1% o Metilprednisolona aceponato) en tronco y extremidades una vez al día por 7 a 14 días', route: 'Tópica', freq: 'c/24h en brote', notes: 'Alivio rápido de la inflamación y el prurito; retirar tras ceder el brote' },
      { drug: 'Inhibidores tópicos de la Calcineurina (Tacrolimus al 0.03-0.1% o Pimecrolimus al 1%)', dose: 'Aplicar 2 veces al día en zonas delicadas (rostro, párpados y cuello)', route: 'Tópica', freq: 'c/12h', notes: 'Ahorradores de corticoides excelentes para zonas sensibles sin riesgo de inducir atrofia cutánea' }
    ],
    alternatives: [
      { drug: 'Dupilumab subcutáneo (Anticuerpo monoclonal anti-IL-4 / IL-13) en dermatitis atópica moderada a severa refractaria', dose: 'Bolo inicial 600 mg SC seguido de 300 mg SC cada 2 semanas', route: 'SC quincenal', freq: 'Cada 14 días', notes: 'REVOLUCIÓN TERAPÉUTICA: Logra aclaramiento completo de la piel y control espectacular del prurito en casos severos' },
      { drug: 'Fototerapia con UVB de banda estrecha (UVB-NB)', dose: 'Sesiones 2 a 3 veces por semana', route: 'Fototerapia', freq: 'Semanal', notes: 'Excelente opción de segunda línea' }
    ],
    nonPharm: ['REGLA DEL BAÑO DEL ATÓPICO: Baños cortos de 5 a 10 minutos con agua tibia (NUNCA caliente), usando geles limpiadores syndet sin jabón; secar a toques suaves con toalla sin frotar', 'Ropa de algodón 100% holgada (evitar lana, fibras sintéticas y etiquetas internas)', 'Mantener uñas cortas y limpias'],
    nursingCare: ['REGLA DE LOS 3 MINUTOS DE HIDRATACIÓN: Enseñar a los padres a aplicar la crema emoliente dentro de los primeros 3 minutos posteriores al baño para atrapar el agua en la capa córnea', 'Instruir que los emolientes se usan en PIEL SANA y los corticoides en PLACAS ROJAS ACTIVAS', 'Identificación urgente del Eczema Herpético: si aparecen vesículas dolorosas agrupadas con fiebre, suspender corticoides de inmediato e iniciar Aciclovir EV/VO urgente', 'Manejo del ambiente: temperatura fresca en el dormitorio para evitar sudoración que dispare el prurito']
  },
  {
    number: 374,
    id: 'diag-374',
    title: 'Dermatitis seborreica',
    cie10: 'L21.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dermatosis eritematoescamosa crónica y recurrente que afecta selectivamente a las zonas corporales con mayor densidad y actividad de glándulas sebáceas (cuero cabelludo, cara, zona esternal e intertriginosa), mediada por una respuesta inflamatoria frente a levaduras lipofílicas del género Malassezia (Malassezia restricta y M. globosa).',
    symptoms: ['En el Adulto:', '- Cuero cabelludo: descamación no inflamatoria (Pitiriasis capitis / Caspa simple) o placas eritematosas con escamas amarillentas grasas y prurito moderado', '- Rostro: placas eritematoescamosas grasas en surcos nasogenianos, entrecejo, cejas, alas nasales y borde de implantación del cabello', '- Región retroauricular y conducto auditivo externo con descamación y fisuración dolorosa', '- Blefaritis seborreica con escamas adheridas a la base de las pestañas', 'En el Lactante (en los primeros 3 meses de vida):', '- COSTRA LÁCTEA: placas gruesas, costrosas, grasientas y amarillentas adherentes en cuero cabelludo que no pican ni molestan al bebé', '- Dermatitis seborreica del área del pañal (eritema brillante que afecta a los pliegues inguinales sin lesiones satélites)'],
    redFlags: ['Dermatitis seborreica severa, explosiva y recalcitrante generalizada en un adulto joven (MARCADOR CENTINELA CLÍNICO de Infección por VIH avanzada)'],
    criteria: 'Diagnóstico clínico por inspección de placas eritematosas con escamas amarillentas untuosas en áreas seborreicas típicas.',
    labTests: ['Prueba de ELISA para VIH en formas graves atípicas del adulto'],
    imaging: ['No requerida'],
    differential: ['Psoriasis en cuero cabelludo (las escamas de la psoriasis son secas, gruesas, plateadas y sobrepasan la línea de implantación del cabello)', 'Dermatitis atópica', 'Lupus eritematoso'],
    firstLine: [
      { drug: 'Tratamiento antifúngico tópico de primera línea: Ketoconazol al 2% o Ciclopiroxolamina al 1.5%', dose: 'Champú de Ketoconazol al 2%: aplicar en cuero cabelludo 2 a 3 veces por semana dejando actuar 5 minutos antes de enjuagar; Crema de Ketoconazol 2% en rostro cada 12-24 horas por 2 a 4 semanas', route: 'Tópica', freq: '2-3 veces/sem', notes: 'Reduce drásticamente la carga de Malassezia y la inflamación asociada' },
      { drug: 'Corticoides tópicos de baja/media potencia para el control de brotes eritematosos faciales', dose: 'Hidrocortisona al 1% o Desonida en crema aplicada cada 24 horas por solo 3 a 5 días', route: 'Tópica', freq: 'c/24h x 5 días', notes: 'Alivio rápido del eritema; suspender tan pronto mejore para evitar rosácea o atrofia' }
    ],
    alternatives: [
      { drug: 'Inhibidores tópicos de la Calcineurina (Pimecrolimus al 1% o Tacrolimus al 0.03%)', dose: 'Aplicar en rostro 2 veces al día', route: 'Tópica', freq: 'c/12h', notes: 'Excelente alternativa segura sin corticoides para uso en brotes faciales recurrentes' },
      { drug: 'En Costra Láctea del lactante: Aceites emolientes (aceite de almendras dulces o vaselina líquida)', dose: 'Aplicar en el cuero cabelludo 30 minutos antes del baño para ablandar las costras y retirar con cepillado suave', route: 'Tópica', freq: 'Diario', notes: 'Completamente inocuo y eficaz en bebés' }
    ],
    nonPharm: ['Champús con piritionato de zinc, sulfuro de selenio al 2.5% o ácido salicílico para mantenimiento'],
    nursingCare: ['MANEJO DE LA COSTRA LÁCTEA EN CRED: Tranquilizar a los padres explicando que la costra láctea es benigna, temporal e indolora para el lactante; NUNCA raspar en seco con las uñas (ablandar siempre con aceite y retirar suavemente con un cepillo de cerdas blandas durante el baño)', 'Instruir al adulto que debe dejar reposar el champú con ketoconazol en el cuero cabelludo al menos 5 minutos antes de aclarar con agua (para permitir la absorción del antifúngico)', 'Ofertar prueba de tamizaje de VIH en adultos con dermatitis seborreica severa extensa']
  },
  {
    number: 375,
    id: 'diag-375',
    title: 'Dermatitis de contacto',
    cie10: 'L25.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Reacción inflamatoria cutánea eccematosa desencadenada por la exposición directa de la piel a un agente externo, clasificada en Dermatitis de Contacto Irritativa (DCI - 80%, daño citotóxico directo no inmunológico por jabones, detergentes, disolventes o saliva) o Dermatitis de Contacto Alérgica (DCA - 20%, reacción de hipersensibilidad retardada tipo IV mediada por células a alérgenos como níquel, perfumes, látex o tintes).',
    symptoms: ['En fase aguda: eritema intenso bien delimitado, edema marcado, vesículas y ampollas pruriginosas que se rompen dejando una superficie exudativa y costras', 'En fase crónica: piel engrosada, seca, descamativa, liquenificada y con fisuras dolorosas', 'DISTRIBUCIÓN GEOGRÁFICA CARACTERÍSTICA que reproduce con precisión la forma del objeto causal:', '- En el lóbulo de la oreja o muñeca por bisutería o relojes (alergia al NÍQUEL)', '- En la zona periumbilical por el botón metálico del pantalón vaquero', '- En las manos en trabajadores de limpieza o construcción (cemento / cromo)', '- En el dorso de los pies por tintes del calzado de cuero'],
    redFlags: ['Eritrodermia diseminada generalizada', 'Sobreinfección bacteriana secundaria'],
    criteria: 'Morfología de eccema con distribución coincidente con la exposición al contactante + PRUEBAS EPICUTÁNEAS DEL PARCHE (PATCH TEST) POSITIVAS en dermatitis alérgica.',
    labTests: ['Pruebas del parche epicutáneo estándar (Patch Test): lectura a las 48 y 96 horas para identificar el alérgeno causal específico'],
    imaging: ['No requerida'],
    differential: ['Dermatitis atópica', 'Dermatitis seborreica', 'Tiña corporis o manuum', 'Psoriasis'],
    firstLine: [
      { drug: 'IDENTIFICACIÓN Y ELIMINACIÓN TERMINANTE DEL AGENTE CAUSAL (Pilar curativo de primer orden)', dose: 'Cese completo de la exposición al irritante o alérgeno', route: 'Conductual', freq: 'Permanente', notes: 'Sin la retirada del agente causal ningún tratamiento farmacológico será duradero' },
      { drug: 'Corticoides tópicos de potencia media a alta: Clobetasol al 0.05% o Betametasona al 0.05%', dose: 'Aplicar una fina capa sobre las lesiones cada 12 a 24 horas durante 7 a 14 días', route: 'Tópica', freq: 'c/12-24h x 1-2 sem', notes: 'Disminuyen rápidamente la inflamación, el edema y el prurito' }
    ],
    alternatives: [
      { drug: 'Corticoides orales en pauta corta descendente (Prednisona)', dose: '0.5 mg/kg/día VO por 5 a 7 días', route: 'VO con desayuno', freq: 'c/24h x 7 días', notes: 'Reservados para dermatitis de contacto agudas extensas que afecten más del 20% de superficie corporal o rostro' },
      { drug: 'Antihistamínicos orales sedantes (Hidroxizina o Clorfenamina) para el prurito nocturno', dose: 'Hidroxizina 25 mg VO al acostarse', route: 'VO nocturna', freq: 'Nocturno', notes: 'Alivio del rascado durante el sueño' }
    ],
    nonPharm: ['Uso de guantes protectores de vinilo o nitrilo con forro interno de algodón para tareas de limpieza', 'Cremas barrera protectoras'],
    nursingCare: ['INTERROGATORIO DETECTIVESCO DE ENFERMERÍA: Investigar minuciosamente la profesión, aficiones, uso de bisutería metálica, cremas, perfumes, tintes de pelo o calzado nuevo para descubrir el desencadenante', 'Instruir a los pacientes alérgicos al níquel en colocar una tira de esmalte transparente o tela adhesiva sobre los botones metálicos de los pantalones para evitar el contacto directo con la piel', 'Enseñar la técnica de retiro de guantes sin contaminar la piel']
  },
  {
    number: 376,
    id: 'diag-376',
    title: 'Urticaria aguda y crónica',
    cie10: 'L50.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad caracterizada por la activación y degranulación de mastocitos dérmicos con liberación de histamina, que produce la aparición de habones o ronchas pruriginosas evanescentes y/o angioedema. Se clasifica en Urticaria Aguda (< 6 semanas de duración, frecuentemente secundaria a infecciones virales, fármacos o alimentos) o Urticaria Crónica (≥ 6 semanas, espontánea o inducible, de naturaleza autoinmune en > 40-50%).',
    symptoms: ['HABONES O RONCHAS TÍPICAS:', '- Placas o pápulas eritematosas o rosadas edematosas de tamaño y forma variables con halo eritematoso', '- PRURITO INTENSO Y FEROZ que empeora con el calor', '- EVANESCENCIA PATOGNOMÓNICA: CADA HABÓN INDIVIDUAL DURA MENOS DE 24 HORAS (suele desaparecer sin dejar marca ni cicatriz en pocas horas mientras brotan nuevos habones en otras localizaciones)', 'Dermografismo sintomático positivo (aparición de habones lineales al rascar suavemente la piel)', 'Asociación con angioedema en el 40-50% de los pacientes'],
    redFlags: ['ANAFILAXIA AGUDA (compromiso respiratorio con estridor o broncoespasmo, e hipotensión con shock tras exposición a alérgeno: EMERGENCIA VITAL)', 'Vasculitis urticariana (habones que duran > 24 horas, son dolorosos o ardientes más que pruriginosos y dejan púrpura o pigmentación residual)'],
    criteria: 'Aparición de habones pruriginosos evanescentes que duran < 24 horas en un mismo sitio anatómico.',
    labTests: ['En Urticaria Aguda: NO SE REQUIERE NINGUNA PRUEBA DE LABORATORIO', 'En Urticaria Crónica Espontánea: Hemograma, VSG/PCR, TSH y anticuerpos anti-tiroperoxidasa (anti-TPO: fuerte asociación con tiroiditis autoinmune)'],
    imaging: ['No requerida'],
    differential: ['Anafilaxia sistémica', 'Vasculitis urticariana', 'Eritema multiforme menor', 'Penfigoide ampolloso en fase pre-ampollosa'],
    firstLine: [
      { drug: 'Antihistamínicos H1 de Segunda Generación no sedantes por vía oral (Pilar angular según Guías Internacionales EAACI/GA2LEN): Cetirizina o Levocetirizina o Fexofenadina o Desloratadina', dose: 'Cetirizina 10 mg/día VO o Levocetirizina 5 mg/día VO o Fexofenadina 180 mg/día VO en dosis única diaria', route: 'VO', freq: 'c/24h', notes: 'Fármacos de primera línea indiscutibles: bloquean receptores H1 sin producir somnolencia ni efectos anticolinérgicos' },
      { drug: 'Escalada de dosis hasta cuadruplicar la dosis estándar en urticaria refractaria (Paso 2)', dose: 'Aumentar la dosis del antihistamínico de 2da generación hasta 2, 3 o 4 veces la dosis convencional (ej. Cetirizina 10 mg cada 12h o hasta 20 mg c/12h)', route: 'VO', freq: 'c/12h', notes: 'Recomendación formal de guías antes de iniciar fármacos biológicos o inmunosupresores' }
    ],
    alternatives: [
      { drug: 'Omalizumab subcutáneo (Anticuerpo monoclonal anti-IgE) en Urticaria Crónica Espontánea resistente', dose: '300 mg SC cada 4 semanas', route: 'SC mensual', freq: 'Cada 4 semanas', notes: 'Eficacia espectacular de tercera línea con control completo en > 70-80% de casos refractarios a antihistamínicos cuádruples' },
      { drug: 'Ciclosporina A oral', dose: '3 a 4 mg/kg/día VO', route: 'VO', freq: 'c/12h', notes: 'Inmunosupresor de cuarta línea' }
    ],
    nonPharm: ['Evitar AINEs (aspirina, ibuprofeno, diclofenaco: pueden exacerbar la urticaria por desvío a leucotrienos)', 'Evitar baños con agua muy caliente, alcohol y ropa apretada'],
    nursingCare: ['REGLA DE EVANESCENCIA DE ENFERMERÍA: Dibujar con un bolígrafo el contorno de un habón en la piel del paciente; verificar a las 24 horas: si la roncha marcada ya desapareció, confirma urticaria típica (si persiste fija más de 24-48 horas o deja hematoma violáceo, sospechar vasculitis urticariana)', 'Vigilancia de signos de anafilaxia: dificultad para respirar, opresión en la garganta o mareos (requiere Adrenalina IM 0.5 mg inmediata)', 'Educar sobre la adherencia diaria continua del antihistamínico (tomarlo todos los días de forma reglada y no solo cuando ya aparecieron los habones)']
  },
  {
    number: 377,
    id: 'diag-377',
    title: 'Angioedema',
    cie10: 'T78.3',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Edema agudo, transitorio y circunscrito que afecta a las capas profundas de la dermis, tejido celular subcutáneo o mucosas, producido por vasodilatación y aumento masivo de la permeabilidad vascular mediada por Histamina (alérgico / mastocítico) o por Bradicinina (inducido por IECA o Angioedema Hereditario por déficit del inhibidor de C1 esterasa).',
    symptoms: ['Tumefacción o hinchazón asimétrica, difusa y no depresible que afecta con preferencia a ZONAS CON TEJIDO LAXO: LABIOS, PÁRPADOS, LENGUA, ÚVULA, CARA Y GENITALES', 'Sensación de tensión dolorosa, quemazón o tirantez local más que prurito', 'Duración más prolongada que los habones (persiste entre 48 y 72 horas antes de reabsorberse)', 'En angioedema de vías aéreas superiores: DISFONÍA, VOZ RONCA O "EN VOZ DE PATO", ESTRIDOR INSPIRATORIO Y DISNEA ASFIXIANTE', 'En angioedema intestinal (típico en déficit de C1): dolor abdominal cólico intenso, náuseas, vómitos y ascitis transitoria'],
    redFlags: ['EDEMA DE GLOTIS Y LARINGE CON ASFIXIA Y PARO RESPIRATORIO POR OBSTRUCCIÓN DE LA VÍA AÉREA (EMERGENCIA MÉDICA VITAL EXTREMA)'],
    criteria: 'Edema subcutáneo y mucoso agudo. Diferenciación patogénica crucial: Mediado por Histamina (asociado a urticaria/prurito) vs Mediado por Bradicinina (SIN urticaria ni prurito, refractario a antihistamínicos/corticoides).',
    labTests: ['En sospecha de Angioedema Hereditario (sin urticaria): Niveles séricos del inhibidor de C1 esterasa (C1-INH cuantitativo y funcional) y niveles de C4 sérico (C4 marcadamente disminuido incluso fuera de las crisis)'],
    imaging: ['Laringoscopía directa urgente ante estridor o disfonía (evaluación de edema de cuerdas vocales)'],
    differential: ['Anafilaxia por alimentos/fármacos/picaduras', 'Angioedema por fármacos IECA (Enalapril, Captopril: mediado por bradicinina)', 'Celulitis facial'],
    firstLine: [
      { drug: 'EN CASO DE COMPROMISO RESPIRATORIO / ESTRIDOR LARÍNGEO: ADRENALINA (EPINEFRINA) INTRAMUSCULAR INMEDIATA', dose: '0.5 mg IM en cara anterolateral del muslo (vasto externo) en adultos (0.01 mg/kg en niños, máx 0.3 mg), repetible cada 5 a 15 minutos', route: 'IM en muslo', freq: 'Inmediata', notes: 'FÁRMACO SALVADOR DE VIDA: Induce vasoconstricción rápida y revierte el edema de vía aérea; no demorar su administración' },
      { drug: 'Tratamiento en Angioedema Histaminérgico: Antihistamínicos EV + Corticoides EV', dose: 'Clorfenamina 10 mg EV lento + Metilprednisolona 40 a 60 mg EV (o Hidrocortisona 200 mg EV)', route: 'EV', freq: 'Inmediato', notes: 'Eficaces en formas mediadas por histamina' }
    ],
    alternatives: [
      { drug: 'Tratamiento en Angioedema Mediado por Bradicinina (Hereditario o por IECA): Icatibant o Concentrado de C1-Inhibidor', dose: 'Icatibant 30 mg SC en abdomen (antagonista del receptor B2 de bradicinina) o C1-INH purificado 20 UI/kg EV lento', route: 'SC / EV', freq: 'Emergencia', notes: 'LOS CORTICOIDES, ANTIHISTAMÍNICOS Y ADRENALINA SON INEFICACES EN EL ANGIOEDEMA POR BRADICININA; el Icatibant revierte el ataque en 30 minutos' }
    ],
    nonPharm: ['SUSPENSIÓN PERMANENTE Y TERMINANTE DE LOS IECA (Enalapril, Lisinopril, Ramipril) en todo paciente que presente angioedema (la bradicinina no puede degradarse)', 'Manejo avanzado de la vía aérea e intubación orotraqueal precoz o cricotiroidotomía si hay estridor progresivo'],
    nursingCare: ['VIGILANCIA DE LA VÍA AÉREA COMO PRIORIDAD MÁXIMA: Escuchar la voz del paciente en cada control; cualquier cambio hacia voz ronca, disfonía o estridor inspiratorio es ALERTA ROJA DE INTUBACIÓN INMEDIATA (no esperar a que la lengua ocupe toda la cavidad bucal)', 'Sitio de inyección de Adrenalina: administrar SIEMPRE en la cara anterolateral externa del muslo (absorción intramuscular mucho más rápida que en el glúteo o deltoides)', 'Preparar equipo de intubación difícil y kit de cricotiroidotomía a la cabecera del paciente']
  },
  {
    number: 378,
    id: 'diag-378',
    title: 'Psoriasis en placas',
    cie10: 'L40.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Psoriasis vulgar: enfermedad inflamatoria cutánea crónica inmunomediada por el eje citocínico IL-23 / Th17 / IL-17, caracterizada por hiperproliferación acelerada y diferenciación anómala de los queratinocitos epidérmicos con acantosis y paraqueratosis, formando placas eritematoescamosas típicas.',
    symptoms: ['PLACAS ERITEMATOSAS BIEN DELIMITADAS, redondeadas u ovaladas, cubiertas por escamas blanco-nacaradas, secas, plateadas y micáceas adherentes', 'DISTRIBUCIÓN TÍPICA EN CARAS EXTENSORAS DE LAS EXTREMIDADES (codos y rodillas), región lumbosacra y cuero cabelludo', 'FENÓMENO ISOMÓRFICO DE KOEBNER: aparición de nuevas lesiones de psoriasis sobre áreas de piel sana que sufren un traumatismo mecánico previo (rascado, quemadura, incisión quirúrgica)', 'Afectación ungueal: hoyuelos o piqueteado ungueal (pitting), manchas de aceite salmónidas e hiperqueratosis subungueal', 'Asociación frecuente con Artritis Psoriásica y Síndrome Metabólico'],
    redFlags: ['Eritrodermia psoriásica (> 90% de superficie corporal afectada con pérdida del control térmico y fallo cardíaco de alto gasto)', 'Psoriasis pustulosa generalizada de von Zumbusch (fiebre alta, toxicidad y pústulas estériles diseminadas)'],
    criteria: 'SEMIOLOGÍA CLÁSICA DEL RASPADO METÓDICO DE BROCQ (3 signos patognomónicos): 1. Signo de la bujía o vela (desprendimiento de escamas blancas finas como cera); 2. Signo de la membrana desplegable de Duncan-Dulck; 3. SIGNO DEL ROCÍO SANGRANTE DE AUSPITZ (aparición de diminutos puntos hemorrágicos al desprender la última lámina epidérmica por desnudamiento de las papilas dérmicas).',
    labTests: ['Habitualmente no requeridos para diagnóstico', 'Perfil lipídico, glucemia y función hepática (elevada prevalencia de comorbilidad cardiovascular y esteatosis hepática)'],
    imaging: ['Biopsia cutánea (hiperplasia epidérmica regular psoriasiforme, hipogranulosis, microabscesos de Munro-Kritoj en estrato córneo)'],
    differential: ['Dermatitis seborreica', 'Linfoma cutáneo de células T (Micosis fungoide)', 'Tiña corporis', 'Eccema numular'],
    firstLine: [
      { drug: 'Tratamiento tópico de primera línea en psoriasis localizada (< 10% de superficie corporal): Combinación Corticoide de alta potencia + Análogo de Vitamina D3 (Calcipotriol + Dipropionato de Betametasona)', dose: 'Gel o espuma tópica aplicada una vez al día por la noche durante 4 semanas, continuando los fines de semana como mantenimiento', route: 'Tópica', freq: 'c/24h en brote', notes: 'Efecto sinérgico: el calcipotriol frena la proliferación de queratinocitos y el corticoide desinflama con menor atrofia cutánea' }
    ],
    alternatives: [
      { drug: 'Terapia Biológica dirigida en psoriasis moderada a severa (> 10% BSA o PASI > 10): Inhibidores de IL-17 (Secukinumab o Ixekizumab) o Inhibidores de IL-23 (Guselkumab o Risankizumab)', dose: 'Secukinumab 300 mg SC mensual o Risankizumab 150 mg SC cada 12 semanas', route: 'SC', freq: 'Reglado', notes: 'REVOLUCIÓN TERAPÉUTICA MODERNA: Logran aclaramiento cutáneo completo o casi completo (PASI 90 / PASI 100) en más del 80-90% de los pacientes' },
      { drug: 'Metotrexato oral o subcutáneo sistémico', dose: '15 a 25 mg una vez por semana + Ácido fólico', route: 'VO / SC semanal', freq: 'Semanal', notes: 'FAME clásico de bajo costo para psoriasis moderada' },
      { drug: 'Fototerapia con UVB de banda estrecha (UVB-NB)', dose: 'Sesiones en cabina médica 3 veces por semana', route: 'Fototerapia', freq: 'Semanal', notes: 'Excelente opción segura sin inmunosupresión sistémica' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA: LOS CORTICOIDES SISTÉMICOS ORALES O INYECTADOS (Prednisona, Dexametasona) ESTÁN PROSCRITOS EN PSORIASIS (su retirada desencadena un rebote fulminante con Psoriasis Pustulosa Generalizada potencialmente mortal)', 'Hidratación cutánea diaria y exposición solar prudente'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA DE ENFERMERÍA: NUNCA administrar corticoides intramusculares o sistémicos (diprospan, dexametasona) para un brote de psoriasis por riesgo de rebote pustuloso mortal de von Zumbusch', 'Enseñar la técnica de aplicación de la combinación de calcipotriol/betametasona exclusivamente sobre las placas engrosadas', 'Tamizaje de comorbilidades cardiometabólicas: medir presión arterial, circunferencia de cintura y glucemia en cada visita', 'Apoyo psicológico: la psoriasis genera un gravísimo impacto en la autoestima y calidad de vida']
  },
  {
    number: 379,
    id: 'diag-379',
    title: 'Psoriasis gutata',
    cie10: 'L40.4',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Psoriasis en gotas: variante aguda de psoriasis caracterizada por la erupción repentina y diseminada de múltiples pápulas y placas pequeñas eritematosas redondeadas ("en gotas de lluvia"), desencadenada en más del 60-80% de los casos por una infección estreptocócica faríngea previa en niños y adultos jóvenes.',
    symptoms: ['Aparición explosiva y súbita de cientos de pequeñas lesiones papulares eritematosas de 2 a 10 mm de diámetro cubiertas por fina escama plateada', 'Distribución centrípeta simétrica y diseminada en tronco, espalda y raíz de extremidades ("como si le hubieran salpicado gotas de cera en la espalda")', 'Antecedente típico de odinofagia o faringoamigdalitis purulenta 1 a 3 semanas antes', 'Prurito leve a moderado'],
    redFlags: ['Evolución en un tercio de los pacientes hacia Psoriasis en Placas crónica del adulto'],
    criteria: 'Erupción aguda en gotas + antecedente reciente de infección faríngea estreptocócica confirmada serológicamente.',
    labTests: ['TÍTULO DE ANTIESTREPTOLISINA O (ASTO / ASLO elevado > 400 UI/mL)', 'Cultivo de hisopado faríngeo para Streptococcus pyogenes (Streptococcus betahemolítico del Grupo A)'],
    imaging: ['No requerida'],
    differential: ['Pitiriasis rosada de Gibert (tiene placa heráldica inicial y distribución en "árbol de navidad")', 'Sífilis secundaria (roseola sifilítica con afectación palmoplantar)', 'Guttate parapsoriasis'],
    firstLine: [
      { drug: 'Tratamiento antibiótico para erradicar el estreptococo faríngeo desencadenante: Amoxicilina o Penicilina V o Eritromicina', dose: 'Amoxicilina 500 mg cada 8 horas VO (o 50 mg/kg/día en niños) durante 10 días completos', route: 'VO', freq: 'c/8h x 10 días', notes: 'Erradica el foco antigénico bacteriano superantigénico desencadenante' },
      { drug: 'Fototerapia con UVB de banda estrecha (UVB-NB) - Tratamiento de elección cutáneo', dose: 'Sesiones 2 a 3 veces por semana en cabina dermatológica por 6 a 8 semanas', route: 'Fototerapia', freq: '2-3 v/sem', notes: 'ACLARAMIENTO ESPECTACULAR RÁPIDO DE LAS LESIONES en > 90% de los pacientes' }
    ],
    alternatives: [
      { drug: 'Corticoides tópicos de potencia media en loción o crema', dose: 'Aplicar en lesiones localizadas una vez al día por 2 a 3 semanas', route: 'Tópica', freq: 'c/24h', notes: 'En casos con afectación moderada' }
    ],
    nonPharm: ['Exposición solar natural controlada y prudente (helioterapia)'],
    nursingCare: ['Toma de hisopado faríngeo estéril y solicitud de ASTO en todo adolescente con erupción súbita en gotas', 'Explicar a los padres que la psoriasis en gotas tiene un curso habitualmente favorable y autolimitado con resolución completa en 3 a 4 meses en la mayoría de los jóvenes', 'Protección ocular estricta durante las sesiones de fototerapia en cabina']
  },
  {
    number: 380,
    id: 'diag-380',
    title: 'Vitíligo',
    cie10: 'L80',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Trastorno autoinmune crónico de la pigmentación caracterizado por la destrucción progresiva y selectiva de los melanocitos de la epidermis por linfocitos T citotóxicos autorreactivos, lo que resulta en la aparición de máculas y manchas acrómicas blanco-tiza en la piel y mucosas.',
    symptoms: ['MÁCULAS Y MANCHAS ACRÓMICAS DE COLOR "BLANCO TIZA O BLANCO PORCELANA", homogéneas, asintomáticas, con bordes netos y bien delimitados', 'Distribución simétrica bilateral característica en Vitíligo No Segmentario / Generalizado:', '- Áreas periorificiales (alrededor de la boca, ojos, nariz y ano)', '- Zonas de roce o fricción (nudillos de las manos, muñecas, codos, rodillas y maléolos)', '- Genitales externos y pezones', 'LEUCOTRIQUIA / POLIOSIS: mechón de cabello, cejas o pestañas de color blanco puro por destrucción de melanocitos foliculares', 'FENÓMENO DE KOEBNER POSITIVO: aparición de manchas blancas en zonas de quemadura solar, traumatismos o rascado'],
    redFlags: ['Quemaduras solares severas en zonas despigmentadas desprovistas de melanina protectora'],
    criteria: 'EXAMEN CON LÁMPARA DE WOOD (Luz ultravioleta de 365 nm que hace que las lesiones de vitíligo fluorescan con un color BLANCO BRILLANTE intenso nacarado contrastando netamente con la piel normal circundante).',
    labTests: ['TSH y anticuerpos anti-TPO (tamizaje obligatorio de Enfermedad Tiroidea Autoinmune: Hashimoto / Graves, presente en > 20-30% de pacientes con vitíligo)', 'Glucemia en ayunas y vitamina B12 (descarte de diabetes tipo 1 y anemia perniciosa)'],
    imaging: ['No requerida'],
    differential: ['Pitiriasis versicolor alba (manchas hipocrómicas con descamación fina y KOH positivo)', 'Pitiriasis alba infantil', 'Piebaldismo genético', 'Lepra indeterminada (cursa con pérdida de sensibilidad termoalgésica)'],
    firstLine: [
      { drug: 'Inhibidores tópicos de la JAK (Ruxolitinib tópico al 1.5% en crema) - Aprobación FDA/EMA revolucionaria', dose: 'Aplicar una fina capa en las manchas dos veces al día por hasta 24 a 52 semanas', route: 'Tópica', freq: 'c/12h continuo', notes: 'PRIMER FÁRMACO ESPECÍFICO APROBADO: Bloquea la señalización de interferón gamma induciendo repigmentación en rostro y cuerpo > 75%' },
      { drug: 'Corticoides tópicos de alta potencia (Clobetasol al 0.05%) o Inhibidores de Calcineurina (Tacrolimus al 0.1%)', dose: 'Clobetasol una vez al día por 4 semanas descansando 2 semanas; o Tacrolimus 0.1% cada 12 horas continuo en rostro', route: 'Tópica', freq: 'Reglado', notes: 'Frenan la destrucción autoinmune de melanocitos' }
    ],
    alternatives: [
      { drug: 'Fototerapia con Radiación Ultravioleta B de banda estrecha (UVB-NB) de cuerpo entero', dose: 'Sesiones 2 a 3 veces por semana durante 6 a 12 meses', route: 'Fototerapia', freq: '2-3 v/sem', notes: 'ESTÍMULO FUNDAMENTAL PARA LA REPIGMENTACIÓN: Estimula a los melanocitos madre del folículo piloso para migrar a la epidermis' },
      { drug: 'Pulsos orales de Dexametasona o Metilprednisolona', dose: 'Dexametasona 5 mg dos días consecutivos a la semana por 3 a 6 meses', route: 'VO intermitente', freq: '2 días por semana', notes: 'De elección para FRENAR LA PROGRESIÓN RÁPIDA en vitíligo activo inestable' }
    ],
    nonPharm: ['FOTOPROTECCIÓN SOLAR DIARIA ESTRICTA FPS 50+: La piel acrómica no tiene melanina y se quema de inmediato al sol, además de que el bronceado de la piel sana resalta más el contraste', 'Maquillaje de camuflaje dermatológico resistente al agua'],
    nursingCare: ['EXAMEN CON LÁMPARA DE WOOD EN HABITACIÓN COMPLETAMENTE OSCURA: Observar la fluorescencia blanco-brillante nítida de los bordes para evaluar la extensión real subclínica', 'FOTOPROTECCIÓN SOLAR RIGUROSA: Enseñar que el bloqueador solar debe aplicarse en las manchas blancas para evitar quemaduras graves de segundo grado', 'Tamizaje periódico de función tiroidea (TSH anual)', 'Apoyo emocional continuo frente al estigma social y psicosocial']
  },
  {
    number: 381,
    id: 'diag-381',
    title: 'Alopecia areata',
    cie10: 'L63.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Trastorno autoinmune crónico caracterizado por el ataque mediado por linfocitos T citotóxicos CD8+ contra el folículo piloso en fase anágena con pérdida del privilegio inmune folicular, lo que ocasiona la caída brusca del cabello en placas circulares bien delimitadas sin cicatrización.',
    symptoms: ['PLACA O PLACAS ALOPÉCICAS CIRCULARES U OVALADAS DE INICIO BRUSCO, lisas, limpias, brillantes y sin descamación ("como una moneda")', 'PIEL DEL CUERO CABELLUDO SUBYACENTE COMPLETAMENTE SANA (sin eritema, atrofia ni cicatriz: alopecia no cicatrizal)', 'PELOS EN "SIGNO DE ADMIRACIÓN" O "PELOS EN EXCLAMACIÓN" (patognomónicos en los bordes de la placa activa: pelos cortos distróficos más delgados en la base proximal y engrosados distalmente)', 'Prueba de tracción positiva (Pull test positivo en bordes de placa activa)', 'Afectación ungueal asociada (piqueteado en dedal / pitting ungueal)', 'Variantes severas: Alopecia Total (pérdida de todo el cabello del cuero cabelludo) y Alopecia Universal (pérdida de todo el pelo corporal, cejas, pestañas y vello)'],
    redFlags: ['Progresión rápida a Alopecia Universal con pérdida de pestañas y vello nasal (aumento de conjuntivitis e infecciones respiratorias)'],
    criteria: 'Inspección dermatoscópica con tricoscopía que demuestra pelos en signo de exclamación, puntos negros y puntos amarillos en placas no cicatrizales.',
    labTests: ['TSH y anticuerpos antitiroideos (frecuente asociación con patología tiroidea autoinmune)', 'Ferritina sérica'],
    imaging: ['TRICOSCOPÍA DIGITAL (Dermatoscopía de cuero cabelludo: signos de actividad: pelos en signo de exclamación, puntos negros cadavéricos y pelos en cola de cerdo)'],
    differential: ['Tiña capitis (presenta descamación, eritema y pelos rotos en cepillo con cultivo positivo)', 'Tricotilomanía (compulsión por arrancarse pelos de longitudes desiguales)', 'Sífilis secundaria (alopecia en "claros de bosque / carcomida")'],
    firstLine: [
      { drug: 'En alopecia areata en placas parcheadas limitadas (< 50% de afectación): INFILTRACIÓN INTRALESIONAL DE CORTICOIDES (Pilar de Oro)', dose: 'Triamcinolona acetónido 5 mg/mL inyectada con aguja 30G directamente en la dermis de las placas alopécicas (0.1 mL por punto separados 1 cm) cada 4 a 6 semanas', route: 'Intralesional dérmica', freq: 'Cada 4-6 semanas', notes: 'RESPUESTA EXCELENTE CON CRECIMIENTO DE CABELLO en > 70-80% a las 4-8 semanas; vigilar atrofia cutánea' },
      { drug: 'Corticoides tópicos de muy alta potencia: Clobetasol al 0.05% en loción o espuma', dose: 'Aplicar en las placas cada 12 horas por 8 a 12 semanas', route: 'Tópica', freq: 'c/12h', notes: 'De elección en niños o en pacientes que rehúyen las infiltraciones' }
    ],
    alternatives: [
      { drug: 'Inhibidores orales de JAK (Baricitinib o Ritlecitinib) - Revolución para Alopecia Areata Severa / Total / Universal', dose: 'Baricitinib 2 a 4 mg/día VO o Ritlecitinib 50 mg/día VO continuo', route: 'VO', freq: 'c/24h continuo', notes: 'PRIMEROS FÁRMACOS SISTÉMICOS APROBADOS POR FDA: Logran repigmentación y crecimiento de cabello > 80% en casos universales refractarios' }
    ],
    nonPharm: ['Apoyo psicológico y uso de prótesis capilares transitorias'],
    nursingCare: ['TRICOSCOPÍA Y PRUEBA DEL PULL TEST: Traccionar suavemente unos 50 pelos en el borde de la placa; si se desprenden > 6 pelos fácilmente sin dolor, indica fase activa de progresión que requiere tratamiento agresivo', 'Técnica aséptica en infiltración intralesional con jeringa de insulina (aguja 30G) asegurando inyección intradérmica superficial (no subcutánea para evitar atrofia)', 'Tranquilizar al paciente informándole que el folículo piloso sigue vivo (la alopecia no es cicatrizal y el pelo puede volver a crecer por completo)']
  },
  {
    number: 382,
    id: 'diag-382',
    title: 'Alopecia androgénica',
    cie10: 'L64.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Calvicie común: forma más prevalente de pérdida de cabello en varones y mujeres, caracterizada por la miniaturización folicular progresiva y genéticamente determinada de los folículos pilosos terminales del cuero cabelludo bajo la influencia de los andrógenos (conversión de testosterona en Dihidrotestosterona - DHT por la enzima 5-alfa reductasa tipo 2).',
    symptoms: ['En Varones (Patrón de Hamilton-Norwood):', '- Retroceso simétrico progresivo de la línea de implantación frontotemporal ("entradas")', '- Pérdida de densidad en la coronilla / vértex', '- Progresión a confluencia respetando la región occipital y temporal baja ("corona hipocrática")', 'En Mujeres (Patrón de Ludwig):', '- Rarefacción y pérdida difusa de densidad en la parte superior y coronilla del cuero cabelludo con ensanchamiento de la raya central ("signo del árbol de navidad"), RESPETANDO la línea de implantación frontal anterior', 'Cabellos progresivamente más finos, cortos, delgados y despigmentados (miniaturización folicular)'],
    redFlags: ['En mujeres: asociación con signos de virilización e hiperandrogenismo severo (voz grave, clitoromegalia, hirsutismo severo) que obligan a descartar tumores ováricos o suprarrenales'],
    criteria: 'Patrón clínico típico con tricoscopía que demuestra anisotropía o variabilidad del diámetro del tallo piloso > 20% (signo cardinal de miniaturización).',
    labTests: ['En mujeres: Ferritina sérica (descarte de ferropenia como causa agravante), TSH, Testosterona total, DHEA-S y 17-OH progesterona'],
    imaging: ['TRICOSCOPÍA DIGITAL (Dermatoscopía capilar: anisocromía y anisotropía folicular > 20% con pelos vellosos miniaturizados y signos peripilares amarillos)'],
    differential: ['Efluvio telógeno crónico (caída difusa sin miniaturización tras estrés o parto)', 'Alopecia areata difusa', 'Alopecia frontal fibrosante (alopecia cicatrizal con pérdida de cejas)'],
    firstLine: [
      { drug: 'Inhibidores de la 5-alfa reductasa orales (Pilar angular de máxima eficacia en varones): Finasterida o Dutasterida', dose: 'Finasterida 1 mg/día VO continuo; o Dutasterida 0.5 mg/día VO continuo', route: 'VO', freq: 'c/24h continuo', notes: 'Frenan la conversión de testosterona a DHT; detienen la caída en > 90% y producen recrecimiento visible en > 65% a los 6-12 meses; efecto reversible al suspender' },
      { drug: 'Minoxidil tópico o Minoxidil oral a dosis bajas', dose: 'Minoxidil al 5% solución o espuma: aplicar 1 mL (o 1/2 tapa de espuma) sobre cuero cabelludo seco cada 12 horas; o Minoxidil oral 2.5 a 5 mg/día en varones (0.5 a 1 mg/día en mujeres)', route: 'Tópica / VO', freq: 'c/12-24h', notes: 'Vasodilatador y estimulador de la fase anágena folicular; produce un efluvio de recambio inicial transitorio (shedding) en las primeras 4-6 semanas' }
    ],
    alternatives: [
      { drug: 'Microtrasplante Capilar Autólogo (Técnica FUE - Follicular Unit Extraction)', dose: 'Extracción de unidades foliculares de la zona donante occipital e implante en zona receptora', route: 'Quirúrgica ambulatoria', freq: 'Única', notes: 'Los folículos occipitales no tienen receptores androgénicos sensibles a DHT y no se caen de por vida' },
      { drug: 'Espironolactona oral en mujeres', dose: '50 a 100 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Antiandrógeno de elección en mujeres con alopecia androgénica' }
    ],
    nonPharm: ['Terapia con láser de baja potencia (LLLT) y suplementos con biotina y aminoácidos azufrados'],
    nursingCare: ['ADVERTENCIA DE ORO SOBRE EL "SHEDDING" DEL MINOXIDIL: Alertar con firmeza a la paciente que a las 4 a 6 semanas de iniciar Minoxidil notará una caída de cabello más intensa y alarmante; explicar que esto es un SIGNO DE BUENA RESPUESTA (el folículo expulsa el pelo viejo miniaturizado para dar paso a un pelo anágeno grueso y fuerte) y que JAMÁS debe suspender el tratamiento', 'Aclarar que los tratamientos médicos de alopecia son de uso CONTINUO (si se suspenden, en 6 meses se pierde todo lo ganado)', 'Desmitificar los miedos a la finasterida explicando que los efectos sexuales son infrecuentes (< 1.5-2%) y reversibles']
  },
  {
    number: 383,
    id: 'diag-383',
    title: 'Tiña capitis',
    cie10: 'B35.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección fúngica superficial (dermatofitosis) del estrato córneo del cuero cabelludo y de los tallos pilosos, causada casi exclusivamente en niños prepúberes por hongos dermatofitos de los géneros Microsporum (Microsporum canis, transmitido por gatos y perros) o Trichophyton (Trichophyton tonsurans, antropofílico interhumano).',
    symptoms: ['FORMA SECA / NO INFLAMATORIA (más común):', '- Tiña microspórica: placa alopécica única o escasa, grande, circular, grisácea, con descamación y TODOS LOS PELOS ROTOS A POCOS MILÍMETROS DE LA RAÍZ ("pelos cortados a ras como campo segado")', '- Tiña tricofítica: placas pequeñas múltiples con "puntos negros" (orificios foliculares con fragmentos de pelos rotos)', 'FORMA INFLAMATORIA GRAVE: QUERION DE CELSO:', '- Placa sobreelevada tumefacta, intensamente eritematosa, caliente, dolorosa y fluctuante ("como un panal de abejas")', '- Supuración purulenta de los orificios foliculares ("signo de la espumadera")', '- Adenopatías cervicales y retroauriculares dolorosas marcadas'],
    redFlags: ['QUERION DE CELSO CON ALOPECIA CICATRIZAL PERMANENTE IRREVERSIBLE si no se trata con rapidez sistémica', 'Confusión con absceso bacteriano que conduce a drenaje quirúrgico contraproducente'],
    criteria: 'Examen microscópico directo con KOH de escamas y pelos arrancados + Cultivo micológico en agar Sabouraud.',
    labTests: ['EXAMEN DIRECTO CON KOH AL 10-20% DE PELOS Y ESCAMAS: visualización de esporas fúngicas ectótrix (alrededor del pelo) o endótrix (dentro del pelo)', 'Cultivo micológico en agar Sabouraud (identificación de Microsporum canis o T. tonsurans en 2 a 4 semanas)'],
    imaging: ['EXAMEN CON LÁMPARA DE WOOD (en tiñas microspóricas por M. canis produce una FLUORESCENCIA VERDE BRILLANTE intensa esmeralda patognomónica; las tricofíticas no fluorescan)'],
    differential: ['Alopecia areata (en la alopecia areata la piel está lisa y limpia sin descamación ni pelos rotos en campo segado)', 'Dermatitis seborreica severa', 'Tricotilomanía', 'Absceso bacteriano'],
    firstLine: [
      { drug: 'TRATAMIENTO ANTIFÚNGICO POR VÍA ORAL SISTÉMICA OBLIGATORIO (Pilar de Oro: los antifúngicos tópicos NO curan la tiña capitis)', dose: 'Griseofulvina oral: 20 a 25 mg/kg/día VO dividido en 1 o 2 tomas con alimentos grasos (leche entera) durante 6 a 8 semanas; o Terbinafina oral en niños > 2 años ajustada por peso (10 a 20 kg: 62.5 mg/día; 20 a 40 kg: 125 mg/día; > 40 kg: 250 mg/día) por 4 a 6 semanas', route: 'VO con alimentos grasos', freq: 'c/24h x 6-8 sem', notes: 'EL TRATAMIENTO SISTÉMICO ES IMPRESCINDIBLE para que el fármaco penetre en el bulbo piloso por la circulación sanguínea' },
      { drug: 'Champú antifúngico coadyuvante: Ketoconazol al 2% o Sulfuro de Selenio al 2.5%', dose: 'Lavar el cuero cabelludo 2 a 3 veces por semana', route: 'Tópica', freq: '2-3 v/sem', notes: 'Disminuye la diseminación de esporas infectantes al entorno escolar y familiar' }
    ],
    alternatives: [
      { drug: 'Corticoides orales coadyuvantes en Querion de Celso inflamatorio (Prednisona)', dose: '0.5 a 1 mg/kg/día VO por 1 a 2 semanas durante el inicio del antifúngico', route: 'VO', freq: 'c/24h x 10 días', notes: 'Reduce la intensa reacción inmunitaria y previene la alopecia cicatrizal definitiva' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA DE INCISIÓN O DRENAJE QUIRÚRGICO EN EL QUERION DE CELSO (es una reacción inflamatoria inmunológica estéril frente al hongo, NO es un absceso bacteriano)', 'Desinfección de peines, cepillos y fundas de almohada; revisión veterinaria de mascotas domésticas'],
    nursingCare: ['REGLA DE VIDA DE ENFERMERÍA: LA TIÑA CAPITIS NUNCA SE CURA SOLO CON CREMAS; EXIGE ANTIFÚNGICOS ORALES DURANTE AL MENOS 6 SEMANAS', 'Instruir que la Griseofulvina debe tomarse obligatoriamente con leche entera, yogur o comida con grasa para optimizar su absorción intestinal', 'PROHIBICIÓN TERMINANTE DE DRENAR CON BISTURÍ EL QUERION DE CELSO', 'Revisar la cabeza de los hermanos y compañeros de clase y recomendar llevar al perro o gato al veterinario']
  },
  {
    number: 384,
    id: 'diag-384',
    title: 'Tiña corporis y cruris',
    cie10: 'B35.4',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dermatofitosis de la piel lampiña del cuerpo (Tiña corporis / Herpes circinado) o de la región inguinal y perianal (Tiña cruris / Eccema marginado de Hebra), causada comúnmente por Trichophyton rubrum, Trichophyton mentagrophytes o Epidermophyton floccosum.',
    symptoms: ['LESIONES ANULARES EN DIANA PATOGNOMÓNICAS:', '- Placas circulares eritematosas bien delimitadas con BORDE ACTIVO ELEVADO, papulovesiculoso, descamativo y en progresión centrífuga', '- CENTRO MÁS CLARO O CURADO con descamación fina', '- PRURITO INTENSO que empeora con el calor y la sudoración', 'En Tiña cruris (ingle): placas bilaterales asimétricas en pliegues inguinales que descienden hacia la cara interna de los muslos y periné, RESPETANDO TÍPICAMENTE EL ESCROTO Y EL PENE (a diferencia del intertrigo candidiásico que sí afecta al escroto)'],
    redFlags: ['TINEA INCOGNITO (tiña desfigurada y atípica producida por la aplicación errónea de corticoides tópicos potentes que borran el borde activo y extienden la infección fúngica)'],
    criteria: 'Lesión anular con borde activo vesicular descamativo + visualización directa de hifas hialinas tabicadas en el raspado con KOH.',
    labTests: ['Examen directo micológico con KOH al 10%: visualización inmediata de HIFAS TABICADAS HIALINAS RAMIFICADAS Y ARTROCONIDIAS', 'Cultivo micológico en agar DTM o Sabouraud'],
    imaging: ['No requerida'],
    differential: ['Pitiriasis rosada de Gibert', 'Eritema anular centrífugo', 'Intertrigo candidiásico (afecta al escroto con lesiones satélites pustulosas)', 'Psoriasis'],
    firstLine: [
      { drug: 'Antifúngicos tópicos de primera línea en lesiones localizadas: Terbinafina al 1% o Ciclopiroxolamina al 1% o Clotrimazol al 1%', dose: 'Aplicar crema sobre la lesión y 2 cm más allá del borde activo cada 12 horas durante 2 a 4 semanas (mantener 1 semana tras la curación clínica)', route: 'Tópica', freq: 'c/12h x 2-4 sem', notes: 'La terbinafina tópica es fungicida con curación en > 90% en 1 a 2 semanas' }
    ],
    alternatives: [
      { drug: 'Antifúngicos orales en lesiones extensas, tiña incognito o refractarias: Terbinafina o Itraconazol oral', dose: 'Terbinafina 250 mg/día VO por 2 a 4 semanas o Itraconazol 100 mg/día VO con comida grasa por 15 días', route: 'VO con alimentos', freq: 'c/24h x 2-4 sem', notes: 'Indicados ante fracaso tópico o placas múltiples confluentes' }
    ],
    nonPharm: ['Secado meticuloso de pliegues inguinales tras la ducha con toalla exclusiva', 'Ropa interior de algodón holgada y evitar pantalones apretados'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA: NUNCA APLICAR CREMAS COMBINADAS CON CORTICOIDES (Betametasona + Clotrimazol / cremas triples) sobre lesiones sospechosas de tiña porque producen "Tinea Incognito"', 'TÉCNICA DE APLICACIÓN: Enseñar a la paciente que la crema debe aplicarse sobre el borde activo y sobrepasar al menos 2 cm de piel sana hacia afuera', 'Tratar simultáneamente la tiña de los pies (pie de atleta) si coexiste, ya que suele ser la fuente de autoinoculación al ponerse los calzoncillos']
  },
  {
    number: 385,
    id: 'diag-385',
    title: 'Tiña pedis (Pie de atleta)',
    cie10: 'B35.3',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dermatofitosis más prevalente del ser humano, caracterizada por la infección por hongos dermatofitos (Trichophyton rubrum en > 70%, T. mentagrophytes) en los espacios interdigitales y plantas de los pies, favorecida por el calzado oclusivo, humedad y calor.',
    symptoms: ['FORMA INTERDIGITAL (la más común): maceración blanquecina, fisuras dolorosas, eritema, descamación y PRURITO INTENSO en los pliegues interdigitales (predominantemente entre el 4° y 5° dedo del pie)', 'FORMA HIPERQUERATÓSICA EN "MOCASÍN": descamación fina plateada crónica difusa y eritema en la planta y bordes laterales de ambos pies', 'FORMA VESICULOSA AGUDA: vesículas y ampollas pruriginosas a tensión en el arco plantar', 'Mal olor podal fétido asociado'],
    redFlags: ['PUERTA DE ENTRADA CARDINAL PARA CELULITIS BACTERIANA Y ERISIPELA DE LA PIERNA (la maceración y fisuras interdigitales permiten el ingreso de estreptococos hacia la pierna)'],
    criteria: 'Maceración o descamación interdigital pruriginosa + visualización de hifas tabicadas en el raspado con KOH.',
    labTests: ['Examen microscópico directo con KOH de las escamas interdigitales (hifas hialinas tabicadas)'],
    imaging: ['No requerida'],
    differential: ['Candidiasis interdigital', 'Dermatitis de contacto al calzado', 'Psoriasis plantar'],
    firstLine: [
      { drug: 'Antifúngicos tópicos fungicidas de primera línea: Terbinafina al 1% en crema o gel', dose: 'Aplicar en piel limpia y completamente seca entre todos los dedos y plantas cada 12 a 24 horas por 1 a 2 semanas', route: 'Tópica', freq: 'c/12-24h x 14 días', notes: 'Fungicida potente que erradica el reservorio fúngico; continuar 1 semana tras ceder los síntomas' },
      { drug: 'Clotrimazol al 1% o Miconazol al 2% en crema', dose: 'Aplicar cada 12 horas durante 4 semanas completas', route: 'Tópica', freq: 'c/12h x 4 semanas', notes: 'Alternativa fungistática clásica' }
    ],
    alternatives: [
      { drug: 'Terbinafina oral o Itraconazol en forma hiperqueratósica en mocasín o refractaria', dose: 'Terbinafina 250 mg/día VO por 2 semanas o Itraconazol 100 mg cada 12 horas VO por 1 semana', route: 'VO con alimentos', freq: 'c/24h x 2 sem', notes: 'Necesaria cuando la hiperqueratosis plantar impide la penetración de cremas' }
    ],
    nonPharm: ['SECADO INTERDIGITAL METICULOSO: Secar minuciosamente dedo por dedo tras cada baño con toalla limpia o secador de pelo en aire frío', 'Calzado transpirable, calcetines de algodón cambiados 1-2 veces al día y uso obligatorio de chanclas en duchas públicas, piscinas y gimnasios'],
    nursingCare: ['PREVENCIÓN DE ERISIPELA: Enseñar a todo paciente diabético o con insuficiencia venosa que la tiña interdigital es la causa número uno de erisipela y celulitis infecciosa de pierna; revisar siempre los espacios interdigitales de los pies', 'Instruir sobre la aplicación de polvos antifúngicos secantes dentro del calzado', 'Ponerse los calcetines ANTES de la ropa interior para evitar arrastrar los hongos hacia la ingle']
  },
  {
    number: 386,
    id: 'diag-386',
    title: 'Onicomicosis (Hongos uñas)',
    cie10: 'B35.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección fúngica del lecho y de la lámina ungueal que afecta predominantemente a las uñas de los pies (especialmente primer y quinto dedo), producida en más del 85-90% de los casos por dermatofitos (Trichophyton rubrum), o por levaduras (Candida) y mohos no dermatofitos.',
    symptoms: ['ONICOMICOSIS SUBUNGUEAL DISTAL Y LATERAL (patrón clásico):', '- Hiperqueratosis subungueal (acúmulo de detritos córneos bajo la uña que la engruesan y levantan)', '- Cromoniquia: cambio de coloración ungueal amarillenta, blanquecina o parduzca ("uñas amarillas y opacas")', '- Onicolisis: desprendimiento de la lámina ungueal del lecho ungueal', '- Onicodistrofia: uña quebradiza, frágil, que se desmorona como yeso al cortarla', '- Onicomicosis distrófica total: destrucción completa de la lámina ungueal en estadios avanzados'],
    redFlags: ['Úlceras neuropáticas por decúbito subungueal y celulitis bacteriana secundaria en pacientes diabéticos'],
    criteria: 'CONFIRMACIÓN MICOLÓGICA OBLIGATORIA PREVIA AL INICIO DEL TRATAMIENTO ORAL: Examen directo con KOH + Cultivo micológico positivo (para no tratar erróneamente con antifúngicos orales hepatotóxicos una distrofia ungueal traumática o psoriásica).',
    labTests: ['Examen directo de raspado subungueal con KOH al 20%: visualización de hifas tabicadas', 'Cultivo micológico en agar Sabouraud (identificación de especie)', 'Tinción histopatológica con PAS del recorte de la lámina ungueal (sensibilidad > 90%)'],
    imaging: ['No requerida'],
    differential: ['Psoriasis ungueal (presenta pitting y manchas de aceite)', 'Liquen plano ungueal', 'Onicogrifosis por traumatismo repetido del calzado'],
    firstLine: [
      { drug: 'TERBINAFINA ORAL (Fármaco de primera línea de elección con mayor tasa de curación micológica)', dose: '250 mg/día VO en toma única continua durante 6 semanas para uñas de las manos, o 12 A 16 SEMANAS COMPLETAS (3 a 4 meses) para uñas de los pies', route: 'VO con alimentos', freq: 'c/24h x 12-16 sem', notes: 'Se deposita en la matriz y lecho ungueal persistiendo meses tras el cese; requiere control de enzimas hepáticas basales' }
    ],
    alternatives: [
      { drug: 'Itraconazol oral en terapia de pulsos', dose: '200 mg cada 12 horas VO (400 mg/día) durante 1 semana al mes, descansando 3 semanas, por 2 pulsos (manos) o 3 pulsos (pies)', route: 'VO con comidas grasas', freq: 'Pulsos mensuales', notes: 'Alternativa eficaz de amplio espectro frente a levaduras y mohos' },
      { drug: 'Lacas ungueales tópicas (Amorolfina al 5% o Ciclopirox al 8%)', dose: 'Amorolfina laca aplicada 1 a 2 veces por semana tras limar la uña por 6 a 12 meses', route: 'Tópica ungueal', freq: '1-2 v/semana', notes: 'Solo eficaz en afectaciones distales muy leves que comprometan < 50% de la uña sin afectación de la matriz' }
    ],
    nonPharm: ['Desbridamiento y limado mecánico periódico del grosor ungueal para facilitar la penetración farmacológica'],
    nursingCare: ['REGLA DE VIDA DE ENFERMERÍA: NUNCA INICIAR TRATAMIENTO ANTIFÚNGICO ORAL PROLONGADO SIN CONFIRMACIÓN MICOLÓGICA PREVIA POR EL LABORATORIO (el 50% de las uñas amarillas y gruesas son traumáticas o psoriásicas, no hongos)', 'Monitoreo de función hepática (transaminasas) antes de iniciar y a las 6 semanas de terbinafina oral', 'EDUCAR SOBRE EL CRECIMIENTO UNGUEAL: Explicar a la paciente que la uña del pie tarda entre 12 y 18 meses en crecer completamente desde la raíz; el éxito se evalúa viendo nacer uña sana limpia en la base, no por la desaparición inmediata de la parte distal enferma']
  },
  {
    number: 387,
    id: 'diag-387',
    title: 'Pitiriasis versicolor',
    cie10: 'B36.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección fúngica superficial y benigna de la capa córnea producida por la conversión de la levadura comensal Malassezia globosa o M. furfur a su forma filamentosa patógena, caracterizada por máculas policrómicas que interfieren con la síntesis normal de melanina y producen descamación furfurácea.',
    symptoms: ['MÁCULAS Y PARCHES DESCAMATIVOS CON COLORACIÓN VARIABLE ("VERSICOLOR"):', '- En verano / piel bronceada: manchas HIPOCRÓMICAS blanquecinas que no se broncean (el ácido azelaico producido por el hongo inhibe a la tirosinasa)', '- En invierno / piel clara: manchas HIPERCRÓMICAS marrones o asalmonadas-rosáceas', 'Localización típica en tronco superior, pecho, espalda, hombros y cuello', 'DESCAMACIÓN FURFURÁCEA FINA Y SUTIL (desprendimiento de escamas finas al raspar la lesión con la uña o un bajalenguas: SIGNO DE LA UÑADA / SIGNO DE BESNIER POSITIVO)', 'Asintomática o prurito leve con la sudoración'],
    redFlags: ['Recurrencias frecuentes en climas cálidos y húmedos'],
    criteria: 'Examen microscópico directo con KOH que demuestra el PATRÓN EN "ESPAGUETIS CON ALBÓNDIGAS" (filamentos cortos gruesos e hifas entremezcladas con racimos de esporas redondas).',
    labTests: ['Examen directo de escamas con KOH al 10-20% y tinta azul Parker: imagen patognomónica en "espaguetis y albóndigas"'],
    imaging: ['LÁMPARA DE WOOD (fluorescencia amarillo-dorada o amarillo-anaranjada tenue bajo luz UV en habitación oscura)'],
    differential: ['Vitíligo (en vitíligo las manchas son blanco tiza puro, no tienen descamación ni signo de la uñada y la lámpara de Wood es blanco brillante)', 'Pitiriasis alba', 'Pitiriasis rosada'],
    firstLine: [
      { drug: 'Tratamiento antifúngico tópico de primera línea: Champú de Sulfuro de Selenio al 2.5% o Ketoconazol al 2%', dose: 'Aplicar el champú sobre la piel húmeda de todo el tronco, cuello y brazos, frotar hasta hacer espuma, dejar actuar 10 minutos y enjuagar; diariamente por 7 a 14 días consecutivos', route: 'Tópica', freq: 'c/24h x 10-14 días', notes: 'Curación micológica rápida y económica; repetir una vez al mes como profilaxis en verano' },
      { drug: 'Ciclopiroxolamina o Terbinafina en spray o crema tópica', dose: 'Aplicar cada 12 horas por 2 semanas', route: 'Tópica', freq: 'c/12h x 14 días', notes: 'Para áreas circunscritas' }
    ],
    alternatives: [
      { drug: 'Antifúngicos orales en formas extensas, diseminadas o recidivantes: Itraconazol oral', dose: '200 mg/día VO con comida grasa durante 7 días consecutivos (o Fluconazol 300 mg semanal por 2 semanas)', route: 'VO con alimentos', freq: 'c/24h x 7 días', notes: 'El hongo se excreta por el sudor y sebo; NO DUCHARSE en las 2-3 horas posteriores para mantener el fármaco en piel' }
    ],
    nonPharm: ['Ropa de algodón holgada y secado corporal adecuado'],
    nursingCare: ['SIGNO DE LA UÑADA DE ENFERMERÍA: Raspar suavemente con la uña o una espátula de madera la superficie de la mancha sospechosa; el desprendimiento de una fina descamación como salvado de trigo confirma la pitiriasis versicolor', 'EDUCACIÓN TRANQUILIZADORA CRUCIAL: Explicar a la paciente que una vez muerto el hongo con el tratamiento, LAS MANCHAS BLANCAS PERSISTIRÁN DURANTE VARIAS SEMANAS O MESES hasta que la piel se vuelva a broncear homogéneamente con el sol (no significa que el hongo siga vivo)', 'Profilaxis estival: recomendar el uso de champú de ketoconazol como jabón corporal una vez por semana durante los meses de calor']
  },
  {
    number: 388,
    id: 'diag-388',
    title: 'Impétigo contagioso',
    cie10: 'L01.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección bacteriana superficial y sumamente contagiosa de la epidermis producida por Staphylococcus aureus (principal causante de ambas formas) y/o Streptococcus pyogenes (Streptococcus del Grupo A), prevalente en niños de 2 a 5 años en climas cálidos y húmedos. Se clasifica en No Ampolloso / Costroso (70%) o Ampolloso (30%, mediado por toxinas exfoliativas A y B).',
    symptoms: ['FORMA NO AMPOLLOSA / COSTROSA (la más típica):', '- Vesículas o pústulas efímeras y frágiles sobre base eritematosa que se rompen con extrema rapidez', '- FORMACIÓN CARACTERÍSTICA DE COSTRAS MELICÉRICAS AMARILLENTAS GRUESAS ("con aspecto de miel seca o azúcar morena quemada")', '- Localización periorificial típica: alrededor de las fosas nasales y de la boca ("boqueras")', '- Extensión rápida a otras zonas corporales por autoinoculación mediante el rascado', '- Prurito leve o moderado sin fiebre ni afectación sistémica', 'FORMA AMPOLLOSA: ampollas flácidas transparentes de 1 a 2 cm que se rompen dejando erosiones húmedas con collarete descamativo'],
    redFlags: ['GLOMERULONEFRITIS POSTESTREPTOCÓCICA (complicación no supurativa grave tras impétigo estreptocócico: orina oscura, edema e hipertensión 3 semanas después; OJO: los antibióticos NO previenen la nefritis)', 'Síndrome de la piel escaldada estafilocócica en lactantes (SSTS)'],
    criteria: 'Inspección clínica dermatológica de las costras melicéricas amarillentas típicas periorificiales.',
    labTests: ['Tinción de Gram y cultivo bacteriológico con antibiograma del exudado bajo la costra (descarte de SAMR)'],
    imaging: ['No requerida'],
    differential: ['Herpes simple primario facial', 'Dermatitis atópica sobreinfectada (eccema herpético)', 'Picaduras de insectos sobreinfectadas', 'Varicela', 'Quemaduras'],
    firstLine: [
      { drug: 'Mupirocina al 2% ungüento tópico (o Ácido Fusídico 2% crema)', dose: 'Aplicar suavemente sobre las lesiones cada 8 horas durante 5 a 7 días, previo ablandamiento y retiro cuidadoso de las costras', route: 'Tópica', freq: 'c/8h x 5-7 días', notes: 'Tratamiento de elección en impétigo localizado con pocas lesiones' },
      { drug: 'Cefalexina oral (en impétigo extenso, ampolloso o múltiples lesiones)', dose: 'Pediatría: 25-50 mg/kg/día VO dividido cada 6-8h por 7 días; Adultos: 500 mg VO cada 6h por 7 días', route: 'VO', freq: 'c/6-8h x 7 días', notes: 'Alternativa en alergia a betalactámicos: Clindamicina 20-30 mg/kg/día VO cada 8h' }
    ],
    alternatives: [
      { drug: 'Amoxicilina + Ácido Clavulánico oral', dose: 'Pediatría: 40-50 mg/kg/día VO cada 8h por 7 días', route: 'VO', freq: 'c/8h x 7 días', notes: 'Cobertura eficaz frente a S. aureus productor de betalactamasas y S. pyogenes' }
    ],
    nonPharm: ['Lavado suave con agua tibia y jabón antiséptico (clorhexidina 2%) para ablandar y retirar las costras melicéricas sin sangrado forzado', 'Corte de uñas riguroso en el niño para evitar autoinoculación'],
    nursingCare: ['AISLAMIENTO DE CONTACTO ENFERMERO: Extremar precauciones de contacto; el niño no debe acudir a guardería o colegio hasta 24-48 horas tras iniciado el tratamiento antibiótico eficaz', 'Retiro de costras: Colocar compresas húmedas con suero salino templado durante 10 minutos para reblandecer las costras melicéricas antes de aplicar el ungüento tópico antibiótico', 'Uso individualizado de toallas, ropa de cama y utensilios en el hogar para evitar contagio intrafamiliar', 'Vigilancia a las 2-3 semanas: Educar a los padres para vigilar la aparición de orina color té/coca-cola, edemas palpebrales matutinos o cefalea (descarte de glomerulonefritis postestreptocócica)']
  },
  {
    number: 389,
    id: 'diag-389',
    title: 'Foliculitis bacteriana',
    cie10: 'L73.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Inflamación e infección superficial localizada en el ostium de uno o varios folículos pilosos, causada con mayor frecuencia por Staphylococcus aureus, y en contextos específicos por Pseudomonas aeruginosa ("foliculitis de las piscinas o jacuzzis"). Se manifiesta como pústulas eritematosas centradas por un pelo.',
    symptoms: ['Pústulas pequeñas (1-3 mm) cupuliformes con halo eritematoso, centradas cada una por un vello o cabello', 'Prurito cutáneo localizado y sensación de escozor o quemazón leve', 'Localización común en barba, cuero cabelludo, glúteos, ingles, muslos y espalda', 'Evolución a costra superficial y resolución habitual sin dejar cicatriz'],
    redFlags: ['Progresión a furúnculo profundo o ántrax estafilocócico con celulitis perilesional'],
    criteria: 'Hallazgo clínico de pequeñas pústulas foliculares centradas por un tallo piloso.',
    labTests: ['Tinción de Gram y cultivo del pus folicular si hay recurrencia o resistencia al tratamiento'],
    imaging: ['No indicada'],
    differential: ['Pseudofoliculitis de la barba', 'Foliculitis por Pityrosporum (Malassezia)', 'Acné vulgar', 'Rosácea pústulo-papulosa'],
    firstLine: [
      { drug: 'Mupirocina 2% pomada tópica o Clindamicina 1% gel tópico', dose: 'Aplicar en el área afectada limpia cada 8-12 horas por 7 días', route: 'Tópica', freq: 'c/8-12h x 7 días', notes: 'Elección en casos localizados' },
      { drug: 'Jabón antiséptico de Clorhexidina al 2% o 4%', dose: 'Lavado diario durante la ducha dejando actuar 2-3 minutos antes de aclarar', route: 'Tópica', freq: 'c/24h x 10 días', notes: 'Disminuye la colonización bacteriana folicular' }
    ],
    alternatives: [
      { drug: 'Cefalexina oral (en foliculitis extensa o recalcitrante)', dose: '500 mg VO cada 6 horas por 7 días', route: 'VO', freq: 'c/6h x 7 días', notes: 'Si se sospecha Pseudomonas: Ciprofloxacino 500 mg VO cada 12h x 7 días' }
    ],
    nonPharm: ['Evitar el afeitado al ras o con cuchillas desafiladas mientras haya lesiones activas', 'Usar ropa holgada y transpirable de algodón'],
    nursingCare: ['Educar al paciente sobre la técnica adecuada de afeitado: seguir la dirección de crecimiento del vello y nunca a contrapelo', 'Desinfección de navajas y toallas, y evitar compartir maquinillas de afeitar', 'Fomentar la higiene inmediata post-entrenamiento o sudoración profusa']
  },
  {
    number: 390,
    id: 'diag-390',
    title: 'Furunculosis y Ántrax estafilocócico',
    cie10: 'L02.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección necrotizante profunda y dolorosa del folículo piloso y del tejido celular subcutáneo periférico producida por Staphylococcus aureus. El furúnculo es una lesión focal con absceso y clavo necrótico central; el ántrax (carbunco estafilocócico) consiste en la confluencia de varios furúnculos adyacentes formando un gran panal de pus con compromiso sistémico.',
    symptoms: ['Nódulo eritematoso, duro, sumamente doloroso y caliente que aumenta de tamaño', 'Fluctuación central con formación de una pústula amarillenta y posterior expulsión de material purulento espeso y un tapón necrótico ("clavo o esfacelo")', 'En el ántrax: placa eritemato-indurada extensa con múltiples bocas supurativas (aspecto en espumadera), fiebre y malestar general', 'Zonas habituales: nuca, glúteos, axilas, muslos y cara'],
    redFlags: ['FURÚNCULO EN EL TRIÁNGULO PELIGROSO DE LA CARA (surcos nasogenianos y labio superior): ALTO RIESGO DE TROMBOFLEBITIS DEL SENO CAVERNOSO por drenaje venoso retrógrado hacia las venas oftálmicas; ¡TERMINANTEMENTE PROHIBIDO EXPRIMIR O MANIPULAR!'],
    criteria: 'Evaluación física con palpación del nódulo fluctuante doloroso con centro necrótico.',
    labTests: ['Cultivo de secreción purulenta con antibiograma (descarte de SAMR comunitario)', 'Glucemia en ayunas (la furunculosis recurrente suele ser el debut de Diabetes Mellitus oculta)'],
    imaging: ['Ecografía de partes blandas si hay duda diagnóstica o para guiar drenaje de colecciones profundas'],
    differential: ['Hidradenitis supurativa', 'Quiste epidermoide sobreinfectado', 'Ántrax verdadero por Bacillus anthracis (escara negra indolora)', 'Picadura infectada'],
    firstLine: [
      { drug: 'Drenaje quirúrgico e incisión (en lesiones fluctuantes maduras)', dose: 'Incisión lineal estéril con bisturí, evacuación del pus y desbridamiento del clavo necrótico, con lavado con suero fisiológico', route: 'Quirúrgico menor', freq: 'Dosis única', notes: 'El drenaje adecuado es el tratamiento curativo fundamental' },
      { drug: 'Cefalexina oral (o Dicloxacilina)', dose: '500 mg VO cada 6 horas por 7 a 10 días', route: 'VO', freq: 'c/6h x 7-10 días', notes: 'Indicado si hay celulitis circundante, fiebre, localización facial o en diabéticos' }
    ],
    alternatives: [
      { drug: 'Cotrimoxazol (Sulfametoxazol + Trimetoprima) o Clindamicina', dose: 'TMP/SMX 160/800 mg VO cada 12 horas por 7-10 días', route: 'VO', freq: 'c/12h x 7-10 días', notes: 'Tratamiento de elección si se sospecha SAMR comunitario' }
    ],
    nonPharm: ['Compresas tibias húmedas sobre el furúnculo incipiente para favorecer la maduración y drenaje espontáneo', 'Curaciones estériles diarias con gasa absorbente'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: Prohibir taxativamente al paciente y cuidadores exprimir, apretar o punzar furúnculos en la zona nasolabial o periorbitaria por riesgo de tromboflebitis séptica del seno cavernoso', 'Descolonización nasal de S. aureus en furunculosis de repetición: aplicar Mupirocina ungüento en ambas fosas nasales 2 veces al día por 5 días al mes, junto con baños corporales de clorhexidina', 'Tamizaje de glucemia capilar y descarte de diabetes mellitus o inmunodeficiencia en todo paciente con furunculosis recurrente']
  },
  {
    number: 391,
    id: 'diag-391',
    title: 'Celulitis infecciosa cutánea',
    cie10: 'L03.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección bacteriana aguda, difusa y no necrosante del tejido celular subcutáneo y dermis profunda, producida con mayor frecuencia por Streptococcus pyogenes (Streptococcus betahemolítico del Grupo A) y Staphylococcus aureus. Compromete principalmente miembros inferiores a partir de una solución de continuidad cutánea.',
    symptoms: ['Placa eritematosa extensa de BORDES MAL DEFINIDOS, no sobreelevados, que se funden gradualmente con la piel sana', 'Tumefacción y edema regional tenso con calor local marcado y dolor a la palpación', 'Fiebre, escalofríos, malestar general y taquicardia', 'Linfangitis satélite (estrías rojas ascendentes) y adenomegalias regionales dolorosas', 'Puerta de entrada identificable: tiña pedis interdigital macerada, úlceras, heridas o picaduras'],
    redFlags: ['SIGNOS DE FASCITIS NECROSANTE: dolor desproporcionado a la inspección visual, flictenas hemorrágicas, equimosis violáceas, crepitación cutánea palpable al tacto o anestesia local con inestabilidad hemodinámica', 'Celulitis periorbitaria/orbitaria con proptosis o limitación de movimientos oculares'],
    criteria: 'Criterios clínicos de celulitis: eritema expansivo de bordes no definidos, calor, edema doloroso y respuesta febril.',
    labTests: ['Hemograma completo (leucocitosis con neutrofilia y desviación a la izquierda)', 'Proteína C Reactiva (PCR) y Procalcitonina elevadas', 'Hemocultivos seriados en celulitis moderada/severa'],
    imaging: ['Ecografía Doppler venosa de miembros inferiores (descarte mandatario de trombosis venosa profunda concomitante)', 'Radiografía simple de partes blandas (descarte de gas tisular)']
  },
  {
    number: 392,
    id: 'diag-392',
    title: 'Erisipela',
    cie10: 'A46',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Variante superficial de celulitis que compromete la dermis superior y los vasos linfáticos dérmicos, causada de forma prácticamente exclusiva por Streptococcus pyogenes (estreptococo del grupo A). Se caracteriza por un inicio súbito, alta toxicidad sistémica y una placa eritematosa brillante de bordes muy nítidos e indurados.',
    symptoms: ['Comienzo abrupto con fiebre alta (>38.5-39 °C), escalofríos intensos y náuseas antes de la aparición del rash', 'Placa eritematosa brillante, edematosa, caliente y muy dolorosa', 'BORDES BIEN DELIMITADOS Y ELEVADOS ("signo del rodete o escalón"), claramente distinguibles de la piel sana', 'Aspecto de piel de naranja por compromiso de los linfáticos superficiales', 'Localizaciones típicas: piernas (85%) y alas de la nariz/mejillas en alas de mariposa'],
    redFlags: ['Aparición de ampollas hemorrágicas con hipotensión (bacteriemia estreptocócica con shock séptico)', 'Trombosis venosa secundaria o linfedema crónico por brotes recidivantes'],
    criteria: 'Comienzo hiperagudo con fiebre alta y placa eritematosa con bordes sobreelevados nítidos en escalón.',
    labTests: ['Hemograma con leucocitosis marcada (>12,000-15,000/uL)', 'Velocidad de sedimentación globular (VSG) y PCR elevadas', 'Títulos de Antiestreptolisina O (ASLO) en ascenso'],
    imaging: ['Ecografía doppler vascular si hay edema unilateral persistente'],
    differential: ['Celulitis profunda', 'Dermatitis por estasis venosa aguda', 'Trombosis venosa profunda (TVP)', 'Eritema migratorio (Lyme)', 'Lupus eritematoso agudo malar'],
    firstLine: [
      { drug: 'Penicilina G Benzatínica intramuscular (o Penicilina V oral)', dose: '1.2 a 2.4 millones UI IM profunda en dosis única (o Penicilina V 500 mg VO c/6h x 10-14 días)', route: 'IM / VO', freq: 'Dosis única IM o c/6h VO', notes: 'S. pyogenes mantiene sensibilidad universal a la penicilina' },
      { drug: 'Amoxicilina oral', dose: '500 mg a 1 g VO cada 8 horas durante 10 a 14 días', route: 'VO', freq: 'c/8h x 10-14 días', notes: 'Excelente biodisponibilidad digestiva' }
    ],
    alternatives: [
      { drug: 'Cefazolina endovenosa (en pacientes hospitalizados)', dose: '1 g EV cada 8 horas', route: 'EV', freq: 'c/8h', notes: 'Si alergia a betalactámicos: Clindamicina 600 mg EV/VO cada 8 horas' }
    ],
    nonPharm: ['Reposo absoluto en cama con ELEVACIÓN DE LA EXTREMIDAD AFECTADA a 30-45° sobre almohadas para acelerar el drenaje linfático y venoso', 'Compresas frías con suero salino estéril para aliviar el dolor local'],
    nursingCare: ['MARCACIÓN DE BORDES CON TINTA INDELEBLE: Delimitar el contorno de la placa eritematosa al inicio del turno de enfermería para evaluar objetivamente la regresión o progresión de la infección cada 8-12 horas', 'Inspección meticulosa de los espacios interdigitales de los pies buscando tiña pedis macerada o fisuras ("pie de atleta"); el tratamiento antifúngico de la puerta de entrada es vital para prevenir recidivas', 'Manejo del linfedema residual y recomendación de medias de compresión elástica una vez resuelto el episodio agudo']
  },
  {
    number: 393,
    id: 'diag-393',
    title: 'Escabiosis (Sarna humana)',
    cie10: 'B86',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infestación parasitaria cutánea sumamente contagiosa causada por el ácaro Sarcoptes scabiei var. hominis. Las hembras fecundadas labran túneles en el estrato córneo de la epidermis depositando heces y huevos, provocando una reacción de hipersensibilidad retardada tipo IV intensamente pruriginosa de predominio nocturno.',
    symptoms: ['PRURITO CUTÁNEO INTENSO DE PREDOMINIO NOCTURNO O TRAS BAÑARSE CON AGUA CALIENTE', 'Lesiones patognomónicas: SURCOS ACARINOS (líneas serpenteantes de 5-15 mm) y la VESÍCULA PERLADA DE BAZIN en su extremo', 'Pápulas eritematosas, escoriaciones por rascado y liquenificación secundaria', 'Distribución topográfica característica: espacios interdigitales de las manos, pliegues de flexión de muñecas y codos, axilas, areolas mamarias en mujeres, ombligo, surcos subglúteos y región genital masculina (chancros escabióticos en pene y escroto)', 'Respeta cara y cuero cabelludo en adultos (en lactantes sí compromete cara, palmas y plantas)'],
    redFlags: ['SARNA NORUEGA O COSTRADA: hiperinfestación masiva con millones de ácaros en pacientes inmunodeprimidos (VIH, desnutrición, ancianos), con placas hiperqueratósicas costrosas y mínimo prurito; ¡extremadamente contagiosa!'],
    criteria: 'Clínica típica de prurito nocturno en paciente y convivientes, con surcos acarios en zonas de flexión.',
    labTests: ['Test de Müller / Acarotest (raspado con bisturí de los surcos y observación al microscopio con KOH de ácaros, heces o huevos)'],
    imaging: ['Dermatoscopia ("signo del ala delta o del avión a reacción" en el extremo del surco)'],
    differential: ['Dermatitis atópica', 'Prurigo por picaduras', 'Pitiriasis rosada', 'Pediculosis de cuerpo', 'Pénfigo ampolloso'],
    firstLine: [
      { drug: 'Permetrina al 5% crema dérmica tópica', dose: 'Aplicar meticulosamente en todo el cuerpo desde el cuello hasta la punta de los dedos de los pies (incluyendo uñas y pliegues), dejar actuar durante 8 a 14 horas y retirar con ducha con agua tibia; REPETIR EXACTAMENTE EL MISMO PROCEDIMIENTO AL DÍA 7', route: 'Tópica', freq: 'Día 1 y Día 7', notes: 'Fármaco de elección por alta eficacia y perfil de seguridad superior en niños >2 meses y gestantes' },
      { drug: 'Ivermectina oral', dose: '200 mcg/kg VO en dosis única con agua (aproximadamente 1 gota/kg o 1 comp. de 6 mg cada 30 kg), REPETIR A LOS 7-14 DÍAS', route: 'VO', freq: 'Día 1 y Día 7-14', notes: 'Excelente opción en brotes comunitarios, sarna costrada o dificultad para aplicar cremas; evitar en <15 kg' }
    ],
    alternatives: [
      { drug: 'Azufre precipitado al 5-10% en vaselina', dose: 'Aplicación nocturna durante 3 noches seguidas', route: 'Tópica', freq: 'c/24h x 3 noches', notes: 'Tratamiento seguro en recién nacidos <2 meses y gestantes en el primer trimestre' }
    ],
    nonPharm: ['LAVADO DE ROPA Y ROPA DE CAMA CON AGUA CALIENTE (>60 °C) y secado al calor, o aislamiento en bolsas plásticas herméticas cerradas por 72 horas para matar los ácaros por inanición', 'Tratamiento SIMULTÁNEO OBLIGATORIO DE TODOS LOS CONVIVIENTES del hogar, aunque no tengan picor'],
    nursingCare: ['REGLA DE ORO DE ENFERMERÍA: El tratamiento debe administrarse simultáneamente a todos los miembros de la familia y contactos cercanos la misma noche, tengan o no síntomas, para cortar el ciclo de reinfestación ping-pong', 'Explicar al paciente que el prurito residual puede persistir 2 a 4 semanas después de la muerte del ácaro por reacción alérgica al exoesqueleto (prescribir antihistamínicos orales tipo Cetirizina)', 'En sarna noruega hospitalaria: aplicar precauciones de aislamiento de contacto estrictas con batas y guantes impermeables']
  },
  {
    number: 394,
    id: 'diag-394',
    title: 'Pediculosis (Capitis, Corporis y Pubis)',
    cie10: 'B85.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Ectoparasitosis contagiosa producida por insectos del orden Phthiraptera. Pediculus humanus capitis afecta el cuero cabelludo (especialmente niños escolares); Pediculus humanus corporis vive en las costuras de la ropa (vector de tifus exantemático y fiebre de las trincheras); y Pthirus pubis ("ladilla") se transmite por vía sexual afectando el vello púbico.',
    symptoms: ['Prurito intenso y persistente en el cuero cabelludo (especialmente retroauricular y occipital)', 'Visualización de LIENDRES (huevos blancos ovalados adheridos firmemente a la vaina del pelo a <6 mm del cuero cabelludo, que no se desprenden al soplar o sacudir a diferencia de la caspa)', 'Eritema, escoriaciones por rascado y microadenopatías cervicales posteriores o retroauriculares', 'En pediculosis pubis: prurito genital intenso y "máculas cerúleas" (manchas azuladas o grisáceas en hipogastrio y muslos)'],
    redFlags: ['Sobreinfección bacteriana secundaria con impetiginización y costras melicéricas'],
    criteria: 'Observación visual directa de piojos vivos o liendres vivas adheridas a menos de 6 mm de la raíz del pelo.',
    labTests: ['Examen visual minucioso bajo buena iluminación o lupa de mano', 'Lámpara de Wood (las liendres vivas muestran fluorescencia blanco-azulada)'],
    imaging: ['No indicada'],
    differential: ['Pitiriasis capitis (caspa simple - se desprende con facilidad)', 'Cilindros peripilares de queratina', 'Dermatitis seborreica'],
    firstLine: [
      { drug: 'Permetrina loción al 1%', dose: 'Aplicar sobre el cabello seco o húmedo, impregnando bien el cuero cabelludo durante 10 a 20 minutos, lavar con champú habitual y peinar con liendrera fina metálica; REPETIR A LOS 7-10 DÍAS', route: 'Tópica', freq: 'Día 1 y Día 7-10', notes: 'Pediculicida y ovicida de primera elección; la segunda aplicación elimina ninfas recién nacidas' },
      { drug: 'Dimeticona al 4% loción tópica', dose: 'Aplicar durante 15-30 minutos y pasar liendrera', route: 'Tópica', freq: 'Día 1 y Día 7', notes: 'Actúa por mecanismo físico sofocando al piojo; no genera resistencias químicas' }
    ],
    alternatives: [
      { drug: 'Ivermectina oral', dose: '200 mcg/kg VO en dosis única, repetida a los 7 días', route: 'VO', freq: 'Día 1 y Día 7', notes: 'En pediculosis recalcitrante o resistente a tópicos' }
    ],
    nonPharm: ['Uso sistemático y paciente del PEINE LIENDRERO METÁLICO de púas microacanaladas cada 2-3 días durante 2 semanas', 'Desinfección de cepillos y peines sumergiéndolos en agua hirviendo durante 10 minutos', 'Lavado de ropa de cama a 60 °C'],
    nursingCare: ['Diferenciación crucial con la caspa: demostrar a los padres que las liendres están fuertemente cementadas al pelo con quitina y requieren tracción manual para retirarse', 'Manejo en la escuela: no estigmatizar ni aislar innecesariamente al menor una vez aplicado el primer tratamiento', 'En pediculosis pubis: solicitar serología completa de ITS (VIH, Sífilis, Hepatitis B) y tratar a los contactos sexuales']
  },
  {
    number: 395,
    id: 'diag-395',
    title: 'Verrugas cutáneas vulgares y plantares (VPH)',
    cie10: 'B07',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Proliferaciones epiteliales benignas de la piel y mucosas causadas por el Virus del Papiloma Humano (VPH tipos 1, 2, 4, 27 y 57). Se transmiten por contacto directo persona a persona o por fómites contaminados (piscinas, gimnasios). Pueden ser vulgares (manos), plantares ("ojos de gallo/verrugas en mosaico") o planas (rostro).',
    symptoms: ['Verrugas vulgares: pápulas hiperqueratósicas de superficie rugosa ("verrugosa"), firmes, de color grisáceo o piel, frecuentes en dorso de manos y dedos', 'Puntos negros centrales milimétricos ("capilares trombosados patognomónicos") visibles al raspado', 'Verrugas plantares: lesiones endofíticas hiperqueratósicas dolorosas a la compresión lateral ("pellizco"), que interrumpen los dermatoglifos normales del pie', 'Verrugas planas: pápulas lisas amarronadas ligeramente sobreelevadas en frente y mejillas'],
    redFlags: ['Lesiones genitales con displasia (condilomas acuminados de alto riesgo oncológico VPH 16/18)'],
    criteria: 'Inspección de las crestas papilares interrumpidas y presencia de capilares trombosados al descamado.',
    labTests: ['Examen histopatológico con coilocitosis característica en casos atípicos o resistentes'],
    imaging: ['No indicada'],
    differential: ['Heloma o callo plantar (conserva las líneas cutáneas y duele a la presión directa, no lateral)', 'Queratosis seborreica', 'Carcinoma verrugoso', 'Molusco contagioso'],
    firstLine: [
      { drug: 'Ácido Salicílico al 16-26% + Ácido Láctico en solución colodión', dose: 'Aplicar una gota diariamente por las noches sobre la verruga (protegiendo la piel sana perilesional con vaselina), previa abrasión suave con lima de cartón o piedra pómez, durante 6 a 12 semanas', route: 'Tópica', freq: 'c/24h x 6-12 semanas', notes: 'Queratolítico de primera elección domiciliario' },
      { drug: 'Crioterapia con Nitrógeno Líquido (-196 °C)', dose: 'Aplicación mediante spray o hisopo de algodón en 2 ciclos de congelación-descongelación de 10-20 segundos cada 2-3 semanas', route: 'Procedimiento en consultorio', freq: 'c/2-3 semanas (1 a 4 sesiones)', notes: 'Induce necrosis celular y respuesta inmunológica local' }
    ],
    alternatives: [
      { drug: 'Imiquimod al 5% crema tópica', dose: 'Aplicar 3 noches por semana antes de dormir durante 8 a 12 semanas', route: 'Tópica', freq: '3 noches/semana', notes: 'Modulador de la respuesta inmune local' }
    ],
    nonPharm: ['Uso de calzado protector tipo chanclas en piscinas públicas, duchas de vestuarios y saunas', 'No compartir toallas ni limas de uñas'],
    nursingCare: ['Protección de la piel sana: instruir al paciente a aplicar vaselina sólida alrededor de la lesión antes del ácido queratolítico para evitar quemaduras químicas en la dermis circundante', 'Educación para evitar la autoinoculación: no morderse las uñas ni arrancar las lesiones con cortaúñas', 'Calmar la ansiedad: explicar que el 65% de las verrugas curan espontáneamente en 2 años gracias al sistema inmunológico']
  },
  {
    number: 396,
    id: 'diag-396',
    title: 'Molusco contagioso',
    cie10: 'B08.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Infección cutánea viral benigna y autolimitada causada por un poxvirus de gran tamaño (Molluscum contagiosum virus, MCV). Muy frecuente en niños en edad escolar con dermatitis atópica (vía baños y piscinas) y en adultos jóvenes como infección de transmisión sexual.',
    symptoms: ['Pápulas cupuliformes firmes, lisas, brillantes y translúcidas de 2 a 5 mm de diámetro', 'UMBLIDICACIÓN CENTRAL CARACTERÍSTICA ("con una pequeña muesca o depresión en el centro")', 'Color perlado, blanquecino o rosado', 'Expulsión de un tapón blanquecino caseoso rico en partículas virales ("cuerpos de molusco o de Henderson-Paterson") al ser exprimidas', 'Distribución: tronco, axilas y flexuras en niños; región anogenital, pubis e ingles en adultos'],
    redFlags: ['Cientos de lesiones gigantes (>1 cm) en cara y cuello en adultos: MARCADOR CLÍNICO DE INMUNODEFICIENCIA SEVERA POR VIH (CD4 <100-200 céls/uL)'],
    criteria: 'Pápulas cupuliformes umbilicadas brillantes características a la dermatoscopia o examen visual.',
    labTests: ['Examen citológico del material exprimido teñido con Giemsa (cuerpos de inclusión voluminosos)', 'Serología para VIH en adultos con molusco de distribución atípica'],
    imaging: ['No indicada'],
    differential: ['Verrugas vulgares', 'Foliculitis', 'Milia cutánea', 'Criptococosis cutánea diseminada', 'Carcinoma basocelular nodular incipiente'],
    firstLine: [
      { drug: 'Curetaje físico con cucharilla dermatológica estéril', dose: 'Extirpación mecánica rápida de las lesiones previa aplicación de anestésico tópico (crema EMLA: Lidocaína + Prilocaina) 1 hora antes bajo oclusión', route: 'Procedimiento menor', freq: 'Sesión única o según brotes', notes: 'Método rápido y eficaz de erradicación física' },
      { drug: 'Crioterapia con Nitrógeno Líquido', dose: 'Congelación puntual de 5-10 segundos por lesión', route: 'Tópica en consultorio', freq: 'c/2-3 semanas', notes: 'Alternativa en niños mayores o adultos' }
    ],
    alternatives: [
      { drug: 'Hidróxido de Potasio (KOH) al 10% solución acuosa', dose: 'Aplicar con la punta de un palillo de madera exclusivamente sobre el centro de cada pápula una vez al día hasta que se inflame (4-6 días)', route: 'Tópica', freq: 'c/24h x 5-7 días', notes: 'Provoca una reacción inflamatoria que induce la resolución inmunitaria' }
    ],
    nonPharm: ['Abstención terapéutica vigilada en niños pequeños con pocas lesiones: informando a los padres que se resolverán espontáneamente sin dejar cicatriz en 6 a 18 meses', 'Evitar baños de inmersión compartidos y no intercambiar toallas'],
    nursingCare: ['Alivio de la xerosis atópica: hidratar la piel sana con emolientes neutros, ya que el rascado disemina el virus por microautoinoculaciones', 'Uso de apositos transparentes durante las clases de natación para evitar el contagio a otros niños', 'Asesoría en salud sexual a pacientes adultos: cribado serológico y protección de barrera']
  },
  {
    number: 397,
    id: 'diag-397',
    title: 'Melasma (Cloasma o Máscara del embarazo)',
    cie10: 'L81.1',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Hipermelanosis adquirida, crónica, simétrica y asintomática de la piel fotoexpuesta (principalmente facial), producida por hiperactividad melanocítica desencadenada por la radiación ultravioleta y luz visible en individuos con predisposición genética, influenciada decisivamente por factores hormonales (embarazo, anticonceptivos orales).',
    symptoms: ['Máculas y placas hipercrómicas de color marrón claro a oscuro o grisáceo con bordes irregulares o geográficos', 'Distribución estrictamente simétrica en el rostro según tres patrones típicos:', '- Patrón Centrofacial (65%): frente, nariz, mejillas, labio superior y mentón', '- Patrón Malar (20%): pómulos y dorso nasal', '- Patrón Mandibular (15%): ramas mandibulares', 'Ausencia total de inflamación previa, prurito o dolor'],
    redFlags: ['Lesiones hiperpigmentadas asimétricas, heterocromáticas o sobreelevadas que sugieran lentigo maligno o melanoma'],
    criteria: 'Diagnóstico clínico mediante examen dermatológico bajo iluminación adecuada.',
    labTests: ['Examen con Lámpara de Wood (diferencia el melasma epidérmico superficial de color marrón que se acentúa bajo la luz, del dérmico profundo gris azulado que no se acentúa)'],
    imaging: ['Dermatoscopia (retículo pigmentario preservado con depósito granular marrón/gris)'],
    differential: ['Hiperpigmentación postinflamatoria', 'Lentigos solares seniles', 'Ocronosis exógena por abuso de hidroquinona', 'Pigmentación por fármacos (amiodarona, minociclina)'],
    firstLine: [
      { drug: 'FOTOPROTECCIÓN SOLAR DE MUY AMPLIO ESPECTRO (SPF 50+ con protección UVA, UVB y Luz Visible con óxido de hierro)', dose: 'Aplicar 2 mg/cm2 de fotoprotector mineral con color 30 minutos antes de salir, y REAPLICAR ESTRICTAMENTE CADA 2 A 3 HORAS durante todo el día, incluso en días nublados o en interiores', route: 'Tópica', freq: 'c/2-3h de forma indefinida', notes: 'Pilar absoluto del tratamiento; sin fotoprotección rigurosa todo tratamiento fracasa' },
      { drug: 'Fórmula de Kligman modificada (Triluma: Hidroquinona 4% + Tretinoína 0.05% + Fluocinolona acetónido 0.01%)', dose: 'Aplicar una capa muy fina sobre las manchas exclusivamente por las noches durante 8 a 12 semanas', route: 'Tópica nocturna', freq: 'c/24h nocturna x 2-3 meses', notes: 'Tratamiento despigmentante de referencia más eficaz' }
    ],
    alternatives: [
      { drug: 'Ácido Azelaico al 15-20% gel o crema (o Ácido Tranexámico)', dose: 'Aplicar dos veces al día de forma continuada', route: 'Tópica', freq: 'c/12h', notes: 'Tratamiento de elección durante el embarazo y lactancia por su excelente seguridad fetal' }
    ],
    nonPharm: ['Uso diario de sombreros de ala ancha (>7 cm) y gafas con filtro solar', 'Evitar la exposición solar directa entre las 10:00 y las 16:00 horas', 'Suspensión o cambio de anticonceptivos hormonales combinados si es factible'],
    nursingCare: ['CUMPLIMIENTO DE LA FOTOPROTECCIÓN: Instruir la "regla de los dos dedos" para dosificar el bloqueador solar en rostro y cuello', 'Uso nocturno de despigmentantes: Enseñar a aplicar una cantidad del tamaño de una arveja, evitando párpados y comisuras bucales, y retirar al despertar con abundante agua', 'Advertir sobre la cronicidad: el melasma se controla pero tiende a recidivar rápidamente con unos pocos minutos de exposición solar sin protección']
  },
  {
    number: 398,
    id: 'diag-398',
    title: 'Carcinoma basocelular cutáneo',
    cie10: 'C44.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'La neoplasia maligna cutánea más frecuente en la especie humana (>75% de todos los cánceres de piel), derivada de las células pluripotenciales de la capa basal de la epidermis y anexos pilosos. De crecimiento muy lento y excepcional potencial metastásico (<0.01%), pero con gran capacidad destructiva e invasiva local en tejidos profundos.',
    symptoms: ['Subtipo Nodular (el más habitual, 60%): pápula o nódulo traslúcido perlado con telangiectasias arborizantes superficiales', 'Subtipo Ulcerado ("Ulcus rodens"): lesión con ulceración central de bordes perlados sobreelevados ("signo del collar de perlas") y sangrado fácil al mínimo traumatismo', 'Subtipo Esclerodermiforme / Morfeiforme: placa indurada blanquecina o amarillenta de bordes mal definidos similar a una cicatriz sin traumatismo previo', 'Subtipo Superficial: placa eritematosa descamativa en tronco', 'Localización predilecta en zonas expuestas al sol: cara, nariz (80%), frente y pabellones auriculares'],
    redFlags: ['Invasión del cartílago nasal o auricular, invasión periorbitaria profunda o invasión perineural craneal'],
    criteria: 'Biopsia cutánea por afeitado (shave) o sacabocados (punch) con confirmación histológica de cordones de células basaloides.',
    labTests: ['Histopatología de la biopsia: empalizada celular periférica típica con nidos tumorales rodeados de estroma mucoide'],
    imaging: ['Dermatoscopia (telangiectasias arborizantes, nidos ovoides azul-grisáceos y estructuras en hoja de arce)'],
    differential: ['Queratosis seborreica pigmentada', 'Carcinoma espinocelular', 'Melanoma nodular amelanótico', 'Psoriasis en placa solitaria (en basocelular superficial)', 'Cicatriz queloide'],
    firstLine: [
      { drug: 'Extirpación quirúrgica convencional con márgenes oncológicos de seguridad', dose: 'Resección completa de la lesión con margen libre lateral de 4 mm en tumores de bajo riesgo (y profundidad hasta hipodermis)', route: 'Quirúrgico', freq: 'Procedimiento único', notes: 'Tratamiento curativo de elección en la gran mayoría de casos (>95% curación)' },
      { drug: 'Cirugía Micrográfica de Mohs', dose: 'Técnica quirúrgica con control histológico del 100% de los márgenes en tiempo real intraoperatorio', route: 'Quirúrgico especializado', freq: 'Procedimiento único', notes: 'Indicada en tumores faciales de alto riesgo ("área H"), bordes mal definidos, subtipo morfeiforme o recidivas' }
    ],
    alternatives: [
      { drug: 'Imiquimod 5% crema o Terapia Fotodinámica (TFD)', dose: 'Aplicar 5 noches por semana durante 6 semanas', route: 'Tópica', freq: '5 noches/sem x 6 sem', notes: 'Indicado exclusivamente en carcinoma basocelular superficial en pacientes no candidatos a cirugía' }
    ],
    nonPharm: ['Educación en fotoprotección solar estricta de por vida', 'Autoexploración cutánea periódica para detección precoz de segundos tumores'],
    nursingCare: ['Cuidados postoperatorios de la herida quirúrgica: curaciones con clorhexidina alcohólica, apósitos compresivos y vigilancia de signos de sangrado o dehiscencia', 'Educación al paciente: Enfatizar que tener un carcinoma basocelular multiplica por tres el riesgo de presentar un nuevo cáncer de piel en los siguientes 5 años', 'Seguimiento dermatológico programado: control anual obligatorio de toda la superficie corporal']
  },
  {
    number: 399,
    id: 'diag-399',
    title: 'Carcinoma epidermoide cutáneo (Carcinoma espinocelular)',
    cie10: 'C44.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Segunda neoplasia cutánea maligna más frecuente (20%), originada a partir de los queratinocitos del estrato espinoso de la epidermis. A diferencia del basocelular, presenta un crecimiento más rápido y una capacidad significativa de metástasis ganglionares regionales (2-5% global, elevándose al 15-20% en labio inferior, oreja o sobre cicatrices crónicas).',
    symptoms: ['Nódulo eritematoso hiperqueratósico o placa indurada con descamación y costra central queratósica adherente gruesa ("cuerno cutáneo")', 'Ulceración central con bordes evertidos indurados que sangra con facilidad al tacto', 'Crecimiento progresivo a lo largo de semanas o meses', 'Aparición frecuente sobre lesiones premalignas (queratosis actínicas previas) o úlceras crónicas ("úlcera de Marjolin")', 'Localización habitual en labio inferior, pabellón auricular, cuero cabelludo calvo, dorso de manos y rostro'],
    redFlags: ['Tamaño >2 cm, invasión en profundidad >4 mm (nivel Clark IV/V), localización en oreja o labio, inmunosupresión o presencia de adenopatías regionales palpables'],
    criteria: 'Biopsia cutánea incisional/excipional con confirmación anatomopatológica de nidos queratinizantes.',
    labTests: ['Histopatología: atipia queratinocítica con formación de "perlas córneas o de queratina"'],
    imaging: ['Ecografía ganglionar cervical o regional (estadiaje ganglionar obligatorio en tumores de alto riesgo)', 'TC / RM de cabeza y cuello si hay sospecha de invasión ósea o perineural'],
    differential: ['Queratosis actínica hipertrófica', 'Queratoacantoma (crecimiento muy rápido con cráter queratósico)', 'Carcinoma basocelular', 'Verruga vulgar'],
    firstLine: [
      { drug: 'Extirpación quirúrgica con márgenes oncológicos de seguridad', dose: 'Resección completa con margen de 4 a 6 mm en tumores de bajo riesgo, o de 10 mm en tumores de alto riesgo', route: 'Quirúrgico', freq: 'Procedimiento único', notes: 'Tratamiento de primera línea curativo' },
      { drug: 'Cirugía micrográfica de Mohs', dose: 'Control histológico completo de márgenes', route: 'Quirúrgico', freq: 'Procedimiento único', notes: 'Elección en pabellón auricular, labio inferior, zonas periorificiales y recidivas' }
    ],
    alternatives: [
      { drug: 'Radioterapia externa adyuvante', dose: 'Según planificación oncológica radioterápica fraccionada', route: 'Radioterapia', freq: 'Protocolo oncológico', notes: 'Indicada si márgenes quirúrgicos positivos no resecables o invasión perineural' }
    ],
    nonPharm: ['Protección solar rigurosa con ropa fotoprotectora, sombreros y fotoprotectores con SPF 50+', 'Tratamiento precoz de todas las queratosis actínicas precursoras'],
    nursingCare: ['Palpación sistemática de las cadenas ganglionares de drenaje (submandibulares, cervicales, axilares o epitrocleares) en cada control de enfermería', 'Vigilancia de cicatrices de quemaduras crónicas o fístulas osteomielíticas de larga data buscando cambios proliferativos vegetantes (descarte de úlcera de Marjolin)', 'Educación a trabajadores al aire libre (agricultores, pescadores, construcción) sobre uso de protectores labiales con filtro UV y camisas de manga larga']
  },
  {
    number: 400,
    id: 'diag-400',
    title: 'Melanoma maligno cutáneo',
    cie10: 'C43.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Neoplasia maligna altamente agresiva derivada de los melanocitos neuroectodérmicos de la capa basal. Aunque representa menos del 5% de los cánceres cutáneos, es responsable de más del 75% de las muertes por cáncer de piel debido a su gran capacidad de diseminación metastásica linfática y hematógena precoz. En la población peruana y andina, el melanoma lentiginoso acral (palmas, plantas y uñas) es el subtipo más frecuente.',
    symptoms: ['REGLA CLÍNICA DEL ABCDE:', '- A (Asimetría): una mitad de la lesión no coincide con la otra mitad', '- B (Bordes irregulares): contornos festoneados, dentados, mellados o mal definidos', '- C (Color abigarrado): múltiples tonalidades en la misma lesión (marrón oscuro, negro, azulado, blanco de regresión o rojo)', '- D (Diámetro >6 mm): tamaño mayor al de una goma de borrar de lápiz (o cualquier lesión de rápido crecimiento)', '- E (Evolución o cambio): lesión que cambia de tamaño, forma, color, sangra espontáneamente, pica o se ulcera', 'SIGNO DEL PATITO FEO: lesión melanocítica solitaria que luce totalmente diferente al resto de lunares del paciente', 'Melanoma lentiginoso acral: mácula o banda ungueal pigmentada que se extiende a la piel periungueal ("signo de Hutchinson ungueal")'],
    redFlags: ['ESPESOR DE BRESLOW ELEVADO (>0.8-1 mm): el factor pronóstico individual más importante para supervivencia y metástasis ganglionares', 'Ulceración histológica presente, alto índice mitótico y satelitosis'],
    criteria: 'Biopsia cutánea excisional con margen estrecho de 1-2 mm para medición exacta del Índice de Breslow.',
    labTests: ['Anatomopatología oncológica con Índice de Breslow en milímetros y presencia de ulceración', 'Mutación del gen BRAF V600E/K en tejido tumoral (vital para terapia dirigida)'],
    imaging: ['Dermatoscopia digital con epiluminiscencia', 'Ecografía ganglionar de la cuenca linfática', 'PET-CT o TC de tórax, abdomen y pelvis con RM cerebral en estadíos intermedios y avanzados (III y IV)'],
    differential: ['Nevus melanocítico atípico/displásico', 'Carcinoma basocelular pigmentado', 'Queratosis seborreica hiperpigmentada', 'Hematoma subungueal traumático'],
    firstLine: [
      { drug: 'Ampliación de márgenes quirúrgicos según el espesor de Breslow', dose: '- In situ: margen de 0.5 cm; - Breslow <1 mm: margen de 1.0 cm; - Breslow 1-2 mm: margen de 1 a 2 cm; - Breslow >2 mm: margen oncológico de 2.0 cm hasta fascia muscular profunda', route: 'Quirúrgico oncológico', freq: 'Procedimiento definitivo', notes: 'Tratamiento quirúrgico curativo mandatario' },
      { drug: 'Biopsia del Ganglio Centinela (BSGC)', dose: 'Mapeo linfático y resección del ganglio centinela', route: 'Quirúrgico', freq: 'En el mismo acto operatorio', notes: 'Mandatoria en todo melanoma con espesor de Breslow >=0.8 mm (o <0.8 mm con ulceración)' }
    ],
    alternatives: [
      { drug: 'Inmunoterapia adyuvante con Anti-PD-1 (Pembrolizumab o Nivolumab)', dose: 'Nivolumab 480 mg EV cada 4 semanas o Pembrolizumab 200 mg EV cada 3 semanas por 12 meses', route: 'EV', freq: 'Protocolo oncológico', notes: 'Tratamiento de elección en enfermedad resecada estadio III o IV; duplica la supervivencia libre de recurrencia' },
      { drug: 'Terapia dirigida (Dabrafenib + Trametinib)', dose: 'Dabrafenib 150 mg VO c/12h + Trametinib 2 mg VO c/24h', route: 'VO', freq: 'Diario', notes: 'En tumores estadio III/IV con mutación BRAF V600 mutada' }
    ],
    nonPharm: ['Autoexamen cutáneo mensual frente al espejo utilizando la regla del ABCDE y el signo del patito feo', 'Uso continuo de fotoprotección física (sombreros, ropa UV) y química de amplio espectro'],
    nursingCare: ['REVISIÓN METICULOSA DE PIES Y UÑAS EN PACIENTES PERUANOS: En población andina y mestiza, inspeccionar activamente las plantas de los pies, espacios interdigitales y lechos ungueales buscando máculas hiperpigmentadas atípicas (melanoma acral lentiginoso)', 'Inspección del Signo de Hutchinson ungueal: pigmento que desborda el lecho y tiñe el rodete ungueal o cutícula (sospecha altísima de melanoma subungueal)', 'Cuidados del paciente bajo inmunoterapia: monitoreo estrecho de eventos adversos inmunomediados (colitis con diarrea, tiroiditis, hipofisitis, neumonitis o hepatitis)']
  },
  {
    number: 401,
    id: 'diag-401',
    title: 'Nevus melanocítico atípico (Nevus displásico)',
    cie10: 'D22.9',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Lesión melanocítica adquirida benigna que comparte características clínicas e histológicas con el melanoma incipiente (asimetría, bordes irregulares, variabilidad de color, diámetro >5 mm). Su presencia, especialmente en número elevado (>5-10) o en el Síndrome del Nevus Displásico Familiar, constituye un marcador de riesgo aumentado para desarrollar melanoma.',
    symptoms: ['Máculas o pápulas con aspecto en "huevo frito" (centro sobreelevado papular más oscuro rodeado de un halo macular periférico más claro)', 'Bordes difusos, irregulares o poco definidos que se mezclan con la piel circundante', 'Coloración abigarrada con tonos marrones, canela y rosados', 'Diámetro generalmente superior a 5-6 mm', 'Localización común en espalda, tórax, extremidades y zonas poco fotoexpuestas como glúteos y mamas'],
    redFlags: ['Crecimiento acelerado, oscurecimiento focal súbito, asimetría marcada o aparición de síntomas como prurito persistente o sangrado'],
    criteria: 'Evaluación dermatoscópica con patrones atípicos y confirmación histopatológica de displasia melanocítica.',
    labTests: ['Biopsia excisional completa con margen de 2 mm ante nevus atípicos sospechosos de transformación maligna'],
    imaging: ['Dermatoscopia digital computarizada seriada ("Mapeo corporal digital de nevus")'],
    differential: ['Melanoma maligno de extensión superficial incipiente', 'Queratosis seborreica', 'Lentigo solar', 'Dermatofibroma'],
    firstLine: [
      { drug: 'Observación y seguimiento dermatoscópico digital periódico', dose: 'Mapeo corporal total con fotografías de seguimiento cada 6 a 12 meses', route: 'Control ambulatorio', freq: 'c/6-12 meses', notes: 'No está indicada la extirpación profiláctica de todos los nevus atípicos' },
      { drug: 'Extirpación quirúrgica excisional completa', dose: 'Biopsia-exéresis con bisturí con margen libre de 2 mm', route: 'Quirúrgico menor', freq: 'Dosis única', notes: 'Indicada ante lesiones que cambian o presentan criterios claros de sospecha de melanoma' }
    ],
    alternatives: [
      { drug: 'No aplicable tratamiento farmacológico tópico ni destructivo (cauterio/láser proscritos)', dose: 'No usar métodos ciegos destructivos', route: 'N/A', freq: 'N/A', notes: 'Prohibida la cauterización de nevus ya que impide el análisis histopatológico' }
    ],
    nonPharm: ['Autoexamen cutáneo mensual sistematizado', 'Fotoprotección solar rigurosa diaria con SPF 50+'],
    nursingCare: ['Capacitación al paciente y familiares en la regla del ABCDE para la vigilancia domiciliaria de lunares', 'Registro fotográfico de lunares en el teléfono móvil para comparar objetivamente su evolución en el tiempo', 'Desmitificar: aclarar al paciente que la extirpación de un lunar sospechoso no causa diseminación del cáncer si se realiza con técnica quirúrgica reglada']
  },
  {
    number: 402,
    id: 'diag-402',
    title: 'Queratosis actínica (Queratosis solar)',
    cie10: 'L57.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Lesión cutánea premaligna o carcinoma epidermoide in situ intraepidérmico temprano, inducida por daño actínico acumulado por radiación ultravioleta en queratinocitos basales. Se presenta como máculas o placas eritematosas con escama rugosa queratósica adherente. Hasta un 10% puede progresar a carcinoma epidermoide invasivo si no se trata.',
    symptoms: ['Máculas o pápulas eritematosas o amarronadas cubiertas por una ESCAMA RUGOSA, SECA Y ADHERENTE', 'Sensación táctil clásica "al pasar el pulpejo del dedo parece papel de lija fino"', 'Dolor puntual tipo pinchazo o tirantez al palpar la lesión', 'Zonas de alto daño solar crónico: calvicie en cuero cabelludo, frente, nariz, orejas, dorso de manos y antebrazos ("campo de cancerización")', 'Suelen ser múltiples y recurrentes'],
    redFlags: ['Induración dérmica en la base, dolor marcado al roce o hiperqueratosis masiva (>cuerno cutáneo): alta sospecha de progresión a carcinoma epidermoide invasivo'],
    criteria: 'Diagnóstico clínico mediante palpación de la superficie rasposa en piel fotoexpuesta.',
    labTests: ['Biopsia por afeitado o sacabocados si hay sospecha de malignización invasiva'],
    imaging: ['Dermatoscopia (patrón en "fresa" caracterizado por una red eritematosa con aperturas foliculares prominentes)'],
    differential: ['Carcinoma epidermoide invasivo', 'Carcinoma basocelular superficial', 'Queratosis seborreica', 'Lupus eritematoso discoide'],
    firstLine: [
      { drug: 'Crioterapia con Nitrógeno Líquido (-196 °C)', dose: 'Aplicación puntual con spray durante 5 a 10 segundos por lesión', route: 'Tópica en consultorio', freq: 'Sesión única (repetir según necesidad)', notes: 'Tratamiento de elección para queratosis actínicas individuales aisladas (>90% curación)' },
      { drug: '5-Fluorouracilo (5-FU) al 5% crema tópica', dose: 'Aplicar una o dos veces al día sobre el campo de piel afectada durante 2 a 4 semanas', route: 'Tópica', freq: 'c/12-24h x 2-4 semanas', notes: 'Tratamiento de referencia del "campo de cancerización" con queratosis múltiples' }
    ],
    alternatives: [
      { drug: 'Imiquimod 3.75% o 5% crema tópica', dose: 'Aplicar por las noches 3 veces por semana durante 4 semanas', route: 'Tópica', freq: '3 noches/semana x 4 semanas', notes: 'Estimula la producción de interferón alfa e interleucinas' },
      { drug: 'Terapia Fotodinámica con Ácido 5-Aminolevulínico (ALA)', dose: 'Aplicación del fotosensibilizante e iluminación con luz roja', route: 'Procedimiento especializado', freq: '1-2 sesiones', notes: 'Excelente resultado cosmético en rostro y calvicie' }
    ],
    nonPharm: ['Uso permanente de sombreros de ala ancha y ropa con protección ultravioleta UPF 50+', 'Fotoprotectores solares de amplio espectro con enzimas reparadoras del ADN (fotoliasas)'],
    nursingCare: ['ADVERTENCIA SOBRE LA REACCIÓN AL 5-FLUOROURACILO: Explicar detalladamente al paciente que el medicamento causará enrojecimiento severo, ampollas, costras y quemazón en la piel tratada durante la 2da y 3ra semana; esto es signo de que el fármaco está destruyendo las células tumorales precancerosas', 'Enseñar el automonitoreo táctil: lavarse las manos y deslizar las yemas de los dedos sobre la piel para detectar asperezas incipientes', 'Reforzar que la queratosis actínica es el indicador biológico de que la piel ya ha recibido la dosis máxima de daño solar acumulativo']
  },
  {
    number: 403,
    id: 'diag-403',
    title: 'Queratosis seborreica (Verruga senil)',
    cie10: 'L82',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'El tumor epitelial benigno más común en adultos de mediana edad y ancianos, consistente en una proliferación de queratinocitos inmaduros basales con hiperqueratosis y quistes de queratina. Es completamente benigno, no tiene potencial de transformación maligna, pero genera consultas frecuentes por su apariencia antiestética o por confundirse con melanomas.',
    symptoms: ['Pápulas o placas sobreelevadas con aspecto característico "pegado a la piel con cera o barro" ("stuck-on appearance")', 'Superficie verrugosa, rugosa o aterciopelada, con orificios foliculares tapizados de queratina', 'Color muy variable: desde amarillento o canela claro hasta marrón oscuro o negro azabache', 'Asintomáticas, aunque pueden sangrar o picar si se friccionan con la ropa', 'Distribución: tronco, cara, cuello y extremidades; respeta palmas y plantas'],
    redFlags: ['SIGNO DE LESER-TRÉLAT: erupción súbita y masiva de decenas de queratosis seborreicas pruriginosas en pocas semanas; SIGNO PARANEOPLÁSICO de adenocarcinoma gástrico u otro tumor visceral'],
    criteria: 'Inspección clínica y dermatoscopia con detección de tapones córneos y quistes tipo milium.',
    labTests: ['Biopsia cutánea por afeitado exclusivamente si existe duda diagnóstica con melanoma o carcinoma basocelular pigmentado'],
    imaging: ['Dermatoscopia (quistes tipo milium, tapones córneos o comedo-like openings, fisuras cerebriformes y bordes apolillados)'],
    differential: ['Melanoma maligno', 'Nevus melanocítico', 'Carcinoma basocelular pigmentado', 'Verruga vulgar'],
    firstLine: [
      { drug: 'Conducta expectante y tranquilización médica (no requiere tratamiento por ser benigna)', dose: 'No precisa extirpación médica obligatoria salvo por irritación o motivo cosmético', route: 'N/A', freq: 'N/A', notes: 'Explicar la naturaleza benigna al paciente' },
      { drug: 'Crioterapia con Nitrógeno Líquido o Curetaje con electrocoagulación superficial', dose: 'Congelación de 10-15 segundos o raspado con cureta bajo anestesia local', route: 'Procedimiento menor', freq: 'Sesión única', notes: 'Tratamiento destructivo cosmético rápido sin dejar cicatriz profunda' }
    ],
    alternatives: [
      { drug: 'Peróxido de Hidrógeno al 40% tópico', dose: 'Aplicación tópica puntual en consultorio', route: 'Tópica', freq: 'Sesión única o doble', notes: 'Queratolítico químico oxidativo' }
    ],
    nonPharm: ['Evitar el rascado vigoroso con las uñas que pueda sobreinfectar o irritar las lesiones'],
    nursingCare: ['TRANQUILIZAR AL PACIENTE: Aliviar la ansiedad del paciente confirmando que las lesiones son totalmente benignas y que "no son lunares malignos ni se convertirán en cáncer"', 'Vigilancia del signo de Leser-Trélat: alertar al médico si el paciente refiere que le han brotado de golpe decenas de verrugas en el tronco acompañadas de pérdida de peso (descarte de neoplasia gástrica oculta)', 'Cuidados post-curetaje: mantener la costra limpia y seca con ungüento antibiótico o vaselina']
  },
  {
    number: 404,
    id: 'diag-404',
    title: 'Hemangioma infantil (Hemangioma en fresa)',
    cie10: 'D18.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'El tumor vascular benigno más frecuente en la infancia (afecta al 4-10% de los lactantes), caracterizado por proliferación de células endoteliales vasculares GLUT-1 positivas. Típicamente ausente o mínimo al nacimiento, presenta una fase de crecimiento proliferativo rápido en los primeros meses de vida seguida de una fase de involución espontánea lenta a lo largo de varios años.',
    symptoms: ['Fase inicial (1-8 semanas de vida): mácula pálida o telangiectásica precursora', 'Fase proliferativa (2-9 meses): mácula o nódulo sobreelevado de color rojo brillante intenso ("en fresa" en hemangiomas superficiales) o masa azulada blanda subcutánea (en hemangiomas profundos)', 'Fase de involución espontánea (a partir del primer año): palidez central grisácea, aplanamiento progresivo y reemplazo del tejido vascular por tejido fibroadiposo residual (50% involucionados a los 5 años, 90% a los 9 años)', 'Localización común en cabeza y cuello (60%)'],
    redFlags: ['Compromiso del eje visual con riesgo de ambliopía y ceguera permanente', 'Hemangiomas subglóticos en la vía aérea con estridor laríngeo e insuficiencia respiratoria', 'Ulceración dolorosa sangrante con sobreinfección', 'Hemangiomatosis neonatal múltiple (>5 hemangiomas cutáneos): alto riesgo de hemangiomas hepáticos con insuficiencia cardíaca de alto gasto'],
    criteria: 'Diagnóstico clínico basado en la historia natural de crecimiento postnatal rápido seguido de involución.',
    labTests: ['Inmunohistoquímica de biopsia: positividad GLUT-1 (diferencia de malformaciones vasculares)'],
    imaging: ['Ecografía Doppler color vascular (demuestra masa de alto flujo con baja resistencia vascular)', 'RM con contraste en hemangiomas perioculares, de vía aérea o sospecha de síndrome PHACE'],
    differential: ['Malformación vascular capilar (mancha en vino de Oporto - no prolifera ni involuciona)', 'Granuloma piogénico', 'Hemangioendotelioma kaposiforme'],
    firstLine: [
      { drug: 'Propranolol oral (tratamiento de referencia)', dose: 'Inicio a 1 mg/kg/día dividido en 2 tomas postprandiales por 2 semanas; aumentar a 2-3 mg/kg/día VO dividido en 2 tomas hasta los 12-15 meses de edad', route: 'VO', freq: 'c/12h con lactancia', notes: 'Revolucionó el manejo de los hemangiomas; induce vasoconstricción, inhibe el VEGF y promueve apoptosis endotelial' },
      { drug: 'Timolol en colirio o gel tópico al 0.5%', dose: 'Aplicar 1 gota sobre la superficie del hemangioma cada 12 horas', route: 'Tópica', freq: 'c/12h', notes: 'Excelente alternativa en hemangiomas superficiales pequeños sin riesgo funcional' }
    ],
    alternatives: [
      { drug: 'Corticoides orales sistémicos (Prednisolona)', dose: '2 a 3 mg/kg/día VO matutino', route: 'VO', freq: 'c/24h matutino', notes: 'Segunda línea si existe contraindicación absoluta para betabloqueantes' }
    ],
    nonPharm: ['Conducta expectante vigilada en hemangiomas pequeños no complicados ni deformantes', 'Protección con apósitos hidrocoloides si hay zonas de roce sujetas a ulceración'],
    nursingCare: ['ADMINISTRACIÓN SEGURA DEL PROPRANOLOL: Dar siempre con la toma de leche materna o fórmula infantil para prevenir HIPOGLUCEMIA SEVERA; suspender temporalmente si el lactante presenta vómitos, diarrea o inapetencia', 'Control de constantes vitales en las primeras dosis: monitorizar frecuencia cardíaca (alerta si bradicardia <100 lpm en lactantes) y presión arterial a las 2 horas de la administración', 'Apoyo emocional a los padres: aliviar la angustia estética mostrando fotografías de la involución espontánea esperada con el tratamiento']
  },
  {
    number: 405,
    id: 'diag-405',
    title: 'Pénfigo vulgar',
    cie10: 'L10.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad autoinmune ampollosa cutaneomucosa grave y potencialmente mortal, causada por autoanticuerpos patógenos tipo IgG dirigidos contra las proteínas de adhesión celular Desmogleína 3 y Desmogleína 1 de los desmosomas epidérmicos. Produce acantólisis (separación de los queratinocitos) con formación de ampollas flácidas intraepidérmicas frágiles.',
    symptoms: ['COMPROMISO DE MUCOSA ORAL COMO SIGNO DEBUT (50-70% de los casos): erosiones orales sumamente dolorosas, extensas, de cicatrización tórpida en paladar, carrillos y encías que preceden a las lesiones cutáneas en meses', 'Ampollas cutáneas flácidas, transparentes y muy frágiles que se rompen con facilidad extrema al mínimo roce', 'EROSIONES EXTENSAS DENUDADAS CON ASPECTO DE "QUEMADURA GRAVE" que sangran fácilmente y se cubren de costras', 'SIGNO DE NIKOLSKY POSITIVO: desprendimiento de la epidermis sana adyacente al aplicar una presión tangencial firme con el dedo', 'Dolor urente intenso generalizado e incapacidad para ingerir alimentos sólidos'],
    redFlags: ['SEPSIS BACTERIANA DE ORIGEN CUTÁNEO (por pérdida masiva de la barrera cutánea con sobreinfección por S. aureus o Pseudomonas; principal causa de muerte)', 'Deshidratación severa y trastornos hidroelectrolíticos similares a grandes quemados'],
    criteria: 'Criterios diagnósticos: Nikolsky positivo, biopsia con acantólisis suprabasal e Inmunofluorescencia Directa (IFD) con IgG intercelular en "malla o panal de abejas".',
    labTests: ['Biopsia de ampolla intacta perilesional con Inmunofluorescencia Directa (depósitos de IgG y C3 en panal)', 'ELISA sérico para anticuerpos anti-desmogleína 3 y 1 (se correlaciona con la actividad de la enfermedad)'],
    imaging: ['No indicada'],
    differential: ['Penfigoide ampolloso (ampollas tensas subepidérmicas, Nikolsky negativo)', 'Síndrome de Stevens-Johnson / NET', 'Eritema multiforme mayor', 'Enfermedad de Hailey-Hailey'],
    firstLine: [
      { drug: 'Rituximab endovenoso (terapia biológica de primera línea estándar)', dose: '1000 mg EV en infusión los días 1 y 15 (o esquema de linfoma: 375 mg/m2 EV semanal por 4 dosis)', route: 'EV en infusión', freq: 'Día 1 y 15 (repetir al mes 6 si necesario)', notes: 'Anticuerpo monoclonal anti-CD20 que deprime los clones de linfocitos B productores de anti-desmogleína; induce remisión clínica completa en >80%' },
      { drug: 'Corticoides sistémicos a dosis altas (Prednisona oral o Metilprednisolona EV)', dose: 'Prednisona 1 a 1.5 mg/kg/día VO (asociado a Rituximab), con descenso gradual en cuanto se controlen las ampollas', route: 'VO / EV', freq: 'c/24h', notes: 'Freno agudo de la respuesta inflamatoria hasta que Rituximab haga efecto' }
    ],
    alternatives: [
      { drug: 'Azatioprina o Micofenolato de Mofetilo (ahorradores de corticoides)', dose: 'Azatioprina 2-2.5 mg/kg/día VO o Micofenolato 2 a 3 g/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Segunda línea de mantenimiento inmunosupresor' }
    ],
    nonPharm: ['Manejo en unidad de cuidados especiales o de quemados si la superficie denudada supera el 20-30%', 'Alimentación por sonda nasogástrica blanda o nutrición parenteral si el dolor mucoso impide la deglución'],
    nursingCare: ['CUIDADOS DE LA PIEL COMO EN EL PACIENTE GRAN QUEMADO: Manipular al paciente con extrema delicadeza utilizando sábanas estériles suaves de algodón para evitar el desprendimiento epidérmico por cizallamiento', 'Curación no adherente: Aplicar apósitos de silicona o gasas vaselinadas estériles; JAMÁS utilizar esparadrapos adhesivos convencionales sobre la piel del paciente', 'Higiene bucal suave: enjuagues con colutorios de clorhexidina al 0.12% diluida y nistatina tópica para prevenir candidiasis mucocutánea sobreagregada', 'Balance hídrico riguroso y control estricto de temperatura axilar (prevención de bacteriemia estafilocócica)']
  },
  {
    number: 406,
    id: 'diag-406',
    title: 'Penfigoide ampolloso',
    cie10: 'L12.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'La enfermedad autoinmune ampollosa subepidérmica más frecuente en la población geriátrica (>65-70 años), caracterizada por autoanticuerpos IgG dirigidos contra los antígenos hemidesmosómicos de la unión dermoepidérmica BP180 (BPAG2) y BP230 (BPAG1). Se distingue por ampollas tensas sobre base urticariforme y prurito incoercible.',
    symptoms: ['Fase prodrómica o no ampollosa (semanas o meses antes): PRURITO INTENSO GENERALIZADO con placas eritematosas urticariformes o eccematosas', 'Fase ampollosa: AMPOLLAS GRANDES, TENSAS, CON CONTENIDO LÍQUIDO TRANSPARENTE O SEROHIPOMÁTICO, muy resistentes a la rotura', 'Aparición sobre piel eritematosa o de aspecto normal, principalmente en tronco, abdomen bajo y caras de flexión de extremidades', 'SIGNO DE NIKOLSKY NEGATIVO (la epidermis adyacente no se desprende)', 'Compromiso mucoso oral infrecuente (10-20%) y mucho más leve que en el pénfigo vulgar'],
    redFlags: ['Sobreinfección bacteriana secundaria de las ampollas rotas en ancianos frágiles', 'Descompensación de comorbilidades (diabetes, hipertensión) inducida por el uso prolongado de corticoides orales sistémicos'],
    criteria: 'Confirmación histopatológica con ampolla subepidérmica con abundantes eosinófilos e Inmunofluorescencia Directa positiva lineal en la membrana basal.',
    labTests: ['Inmunofluorescencia Directa (IFD): DEPÓSITO LINEAL CONTINUO DE IgG Y C3 A LO LARGO DE LA UNIÓN DERMOEPIDÉRMICA (Membrana Basal)', 'ELISA sérico para anticuerpos anti-BP180 y anti-BP230'],
    imaging: ['No requerida'],
    differential: ['Pénfigo vulgar', 'Eritema multiforme', 'Epidermólisis ampollosa adquirida', 'Dermatitis herpetiforme', 'Erupción medicamentosa ampollosa'],
    firstLine: [
      { drug: 'Clobetasol propionato al 0.05% crema tópica (tratamiento estándar preferente)', dose: 'Aplicar 20 a 30 gramos diarios de crema en todo el cuerpo (excepto cara) durante 4 semanas, con pauta de reducción progresiva a lo largo de 4 a 6 meses', route: 'Tópica', freq: 'c/24h', notes: 'Tan eficaz como los corticoides orales pero con significativamente menor mortalidad y toxicidad en pacientes ancianos' },
      { drug: 'Prednisona oral (en enfermedad grave no controlable con crema)', dose: '0.5 a 0.75 mg/kg/día VO con pauta descendente lenta', route: 'VO', freq: 'c/24h matutino', notes: 'Asociar a protección gástrica y profilaxis de osteoporosis' }
    ],
    alternatives: [
      { drug: 'Doxiciclina + Nicotinamida', dose: 'Doxiciclina 100 mg VO cada 12 horas + Nicotinamida 500 mg VO cada 8 horas', route: 'VO', freq: 'c/12h', notes: 'Opción no inmunosupresora para formas leves a moderadas' },
      { drug: 'Metotrexato o Rituximab', dose: 'Según protocolo dermatológico', route: 'SC / EV', freq: 'Semanal / Mensual', notes: 'En casos refractarios' }
    ],
    nonPharm: ['Cuidados de piel senil: baños cortos con agua templada y syndets (jabones sin jabón), secado sin frotar y aplicación de emolientes'],
    nursingCare: ['Manejo de ampollas tensas: DESCOMPRIMIR LAS AMPOLLAS GRANDES mediante punción estéril en la base con aguja fina aspirando el contenido líquido, PERO CONSERVANDO EL TECHO DE LA AMPOLLA como apósito biológico natural protector', 'Vigilancia de efectos adversos de corticoides tópicos de muy alta potencia en el anciano: atrofia cutánea, hematomas seniles e hiperglucemia por absorción percutánea en grandes superficies', 'Prevención de caídas en el anciano que experimenta prurito nocturno y alteraciones del sueño']
  },
  {
    number: 407,
    id: 'diag-407',
    title: 'Hidradenitis supurativa (Acné inverso)',
    cie10: 'L73.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Enfermedad inflamatoria crónica, recidivante, supurativa y discapacitante del epitelio del folículo pilosebáceo terminal en zonas corporales intertriginosas ricas en glándulas apocrinas (axilas, ingles, periné, región submamaria y glútea). Conduce a la formación de nódulos dolorosos, abscesos recurrentes, fístulas drenantes y cicatrices en cordón retráctiles.',
    symptoms: ['Nódulos subcutáneos inflamatorios eritematosos, muy dolorosos y firmes', 'Abscesos recurrentes que se rompen espontáneamente drenando material seropurulento fétido', 'COMEDONES EN PUENTE o de doble poro en zonas afectadas', 'TRAYECTOS FISTULOSOS INTERCOMUNICADOS bajo la piel con supuración crónica', 'Cicatrización fibrótica hipertrófica en bridas, cordones y placas que limitan la movilidad articular', 'Clasificación de Hurley: - Estadio I: nódulos/abscesos sin fístulas; - Estadio II: abscesos recurrentes con fístulas y cicatrices separadas; - Estadio III: compromiso difuso con múltiples fístulas intercomunicadas en toda el área'],
    redFlags: ['Carcinoma espinocelular sobre fístulas perianales crónicas de larga data', 'Anemia de trastornos crónicos severa, amiloidosis secundaria y aislamiento social por depresión grave con ideación suicida'],
    criteria: 'Criterios clínicos: lesiones típicas (nódulos/fístulas), localizaciones habituales (axilas/ingles) y recurrencia demostrada (>2 brotes en 6 meses).',
    labTests: ['Cultivo del exudado purulento (a menudo revela flora mixta o es estéril, reflejando su etiología inflamatoria)', 'Hemograma, PCR y VSG para medir el nivel inflamatorio sistémico'],
    imaging: ['Ecografía cutánea de alta frecuencia (evalúa la profundidad de fístulas subcutáneas invisibles a la inspección)'],
    differential: ['Furunculosis bacteriana aguda solitaria', 'Fístula anal criptoglandular', 'Quiste de inclusión epidérmico sobreinfectado', 'Enfermedad de Crohn cutánea'],
    firstLine: [
      { drug: 'Clindamicina 1% loción tópica (en Estadio I de Hurley leve)', dose: 'Aplicar en el área afectada cada 12 horas por 12 semanas', route: 'Tópica', freq: 'c/12h x 3 meses', notes: 'Acción antiinflamatoria y antibacteriana local' },
      { drug: 'Doxiciclina oral (o Tetraciclina) en Estadio I-II', dose: '100 mg VO cada 12 horas durante 10 a 12 semanas consecutivas', route: 'VO', freq: 'c/12h x 12 semanas', notes: 'Utilizada prioritariamente por su potente efecto inmunomodulador y antiinflamatorio' }
    ],
    alternatives: [
      { drug: 'Adalimumab subcutáneo (anti-TNF alfa)', dose: 'Día 1: 160 mg SC; Día 15: 80 mg SC; luego 40 mg SC semanal continuado (o 80 mg cada 2 semanas)', route: 'SC', freq: 'Semanal', notes: 'Terapia biológica de primera línea aprobada en Hurley II y III moderada a severa refractaria a antibióticos' },
      { drug: 'Rifampicina + Clindamicina oral', dose: 'Rifampicina 300 mg VO c/12h + Clindamicina 300 mg VO c/12h por 10 semanas', route: 'VO', freq: 'c/12h x 10 sem', notes: 'Terapia combinada de rescate antes de biológicos' }
    ],
    nonPharm: ['CESE ABSOLUTO DEL TABAQUISMO (el humo del tabaco es el factor detonante principal de oclusión folicular)', 'Control del sobrepeso y pérdida ponderal (disminuye la fricción y maceración intertriginosa)', 'Uso de ropa interior y prendas holgadas de algodón sin costuras irritantes'],
    nursingCare: ['APOYO EMOCIONAL Y PSICOLÓGICO: La hidradenitis causa un impacto devastador en la autoestima, vida íntima y calidad de vida debido al dolor y al mal olor de la secreción; brindar un trato profundamente empático y libre de juicios', 'Manejo del drenaje y olores: Utilizar apósitos superabsorbentes no adhesivos con carbón activado para neutralizar el mal olor y proteger la piel perilesional con pasta al agua de óxido de zinc', 'Tratamiento quirúrgico: Colaborar en el destechamiento (deroofing) de fístulas y curaciones avanzadas por segunda intención']
  },
  {
    number: 408,
    id: 'diag-408',
    title: 'Eritema nodoso',
    cie10: 'L52',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'La forma más común de paniculitis septal sin vasculitis, caracterizada por una reacción de hipersensibilidad inmunológica retardada tipo IV frente a una amplia variedad de antígenos infecciosos, farmacológicos o autoinmunes. Se manifiesta por nódulos eritematosos subcutáneos calientes y muy dolorosos simétricos en las caras anteriores de las piernas.',
    symptoms: ['Nódulos eritematosos subcutáneos indurados, redondeados, de 1 a 5 cm de diámetro', 'Dolor intenso espontáneo y a la palpación ("se palpan mejor de lo que se ven")', 'LOCALIZACIÓN BILATERAL Y SIMÉTRICA CARACTERÍSTICA EN LA REGIÓN PRETIBIAL DE AMBAS PIERNAS', 'EVOLUCIÓN EN "CONTUSIÓN O MORETÓN" (las lesiones cambian de rojo vivo a violáceo, verdoso y amarillento antes de desaparecer sin dejar cicatriz ni ulcerarse)', 'Síntomas pródromicos acompañantes: febrícula, malestar general, artralgias y artritis de tobillos y rodillas'],
    redFlags: ['Presencia de adenopatías hiliares bilaterales simétricas (buscar Sarcoidosis - Síndrome de Löfgren)', 'Tos productiva crónica y pérdida de peso (buscar Tuberculosis activa como causa primaria)'],
    criteria: 'Diagnóstico clínico mediante palpación de los nódulos dolorosos pretibiales bilaterales que evolucionan como contusiones.',
    labTests: ['Prueba de Tuberculina (PPD / Mantoux) o Quantiferon-TB (descarte mandatario de tuberculosis en Perú)', 'Títulos de Antiestreptolisina O (ASLO) y exudado faríngeo (faringitis estreptocócica como causa más común)', 'Hemograma, PCR, VSG y prueba de embarazo'],
    imaging: ['Radiografía de tórax PA y lateral (obligatoria en todo paciente para descartar tuberculosis y adenopatías hiliares de sarcoidosis)'],
    differential: ['Vasculitis nodular / Eritema indurado de Bazin (paniculitis lobulillar posterior que sí se ulcera)', 'Tromboflebitis superficial', 'Celulitis infecciosa', 'Picaduras de insectos'],
    firstLine: [
      { drug: 'Reposo en cama con elevación de miembros inferiores', dose: 'Reposo relativo/absoluto con piernas elevadas a 30° mientras dure el dolor', route: 'Medida física', freq: 'Continuo', notes: 'Pilar no farmacológico más eficaz para aliviar el dolor y reducir la inflamación' },
      { drug: 'Antiinflamatorios no esteroideos: Naproxeno o Ibuprofeno', dose: 'Naproxeno 500 mg VO cada 12 horas (o Ibuprofeno 600 mg VO cada 8 horas) con alimentos por 2 a 3 semanas', route: 'VO con comidas', freq: 'c/12h x 2-3 semanas', notes: 'Alivian eficazmente el dolor y las artralgias acompañantes' }
    ],
    alternatives: [
      { drug: 'Yoduro de Potasio (solución saturada de SSKI)', dose: '300 a 900 mg/día VO dividido en 3 tomas disuelto en jugo', route: 'VO', freq: 'c/8h x 3-4 semanas', notes: 'Excelente respuesta en eritema nodoso idiopático refractario' },
      { drug: 'Corticoides orales (Prednisona)', dose: '20 a 40 mg/día VO matutino por 1-2 semanas', route: 'VO', freq: 'c/24h matutino', notes: 'SOLO TRAS HABER DESCARTADO CATEGÓRICAMENTE TUBERCULOSIS ACTIVA E INFECCIONES BACTERIANAS OCULTAS' }
    ],
    nonPharm: ['Medias de compresión elástica clase II tras la fase aguda dolorosa para prevenir recidivas al reiniciar la deambulación'],
    nursingCare: ['TRANQUILIZACIÓN ANATOMOPATOLÓGICA: Explicar al paciente que los nódulos nunca se ulceran ("no se abren como llagas") y que sanan cambiando de color como un hematoma sin dejar cicatrices', 'Investigación epidemiológica de la causa subyacente: indagar sobre cuadros de dolor de garganta reciente, consumo de anticonceptivos orales, antibióticos o diarreas recientes', 'Monitoreo de la temperatura y detección precoz de síntomas respiratorios (tos persistente nocturna, sudoración nocturna) para derivar a programa de control de Tuberculosis']
  },
  {
    number: 409,
    id: 'diag-409',
    title: 'Xantomas cutáneos y Xantelasmas',
    cie10: 'E78.2',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Depósitos tisulares amarillentos o anaranjados de lípidos (ésteres de colesterol y triglicéridos) fagocitados por macrófagos tisulares ("células espumosas") en la piel o tendones. Constituyen marcadores cutáneos visibles de trastornos primarios o secundarios graves del metabolismo lipídico (hipercolesterolemia familiar, hipertrigliceridemia severa) y confieren un riesgo cardiovascular muy elevado.',
    symptoms: ['Xantelasmas (los más comunes): placas amarillentas blandas o aterciopeladas, poligonales y simétricas en los párpados superiores e inferiores cerca del canto interno', 'Xantomas tendinosos: nódulos subcutáneos duros y móviles en tendón de Aquiles y tendones extensores de los dedos de las manos (típicos de Hipercolesterolemia Familiar heterocigota/homocigota)', 'Xantomas tuberosos: nódulos amarillos o eritematosos firmes sobre prominencias óseas (codos y rodillas)', 'Xantomas eruptivos: brote súbito de pápulas amarillentas milimétricas con halo eritematoso pruriginoso en glúteos, hombros y tronco (típico de hipertrigliceridemia extrema >1000 mg/dL)', 'Xantomas planos palmares: estrías amarillentas en las líneas de flexión palmar (patognomónicos de Disbetalipoproteinemia tipo III)'],
    redFlags: ['XANTOMAS ERUPTIVOS: RIESGO INMEDIATO DE PANCREATITIS AGUDA POR HIPERTRIGLICERIDEMIA GRAVE (>1,000-2,000 mg/dL)', 'Enfermedad coronaria prematura (infarto de miocardio en <40-50 años en pacientes con xantomas tendinosos)'],
    criteria: 'Hallazgo clínico de depósitos amarillentos cutaneotendinosos confirmado con perfil lipídico completo.',
    labTests: ['Perfil lipídico sérico en ayunas (Colesterol total, c-LDL, c-HDL y Triglicéridos)', 'Glucemia en ayunas, perfil hepático y TSH (descarte de causas secundarias: hipotiroidismo, síndrome nefrótico, diabetes descompensada)'],
    imaging: ['Ecografía tendinosa del tendón de Aquiles (muestra engrosamiento hipoecoico homogéneo)', 'Angiotomografía coronaria / Scoring de calcio coronario para estratificación de riesgo'],
    differential: ['Siringomas periorbitarios', 'Hiperplasia sebácea', 'Quistes de milium', 'Necrobiosis lipoídica'],
    firstLine: [
      { drug: 'Tratamiento hipolipemiante intensivo de primera línea: Atorvastatina o Rosuvastatina', dose: 'Atorvastatina 40 a 80 mg/día VO o Rosuvastatina 20 a 40 mg/día VO nocturno', route: 'VO', freq: 'c/24h nocturno', notes: 'Control de la dislipidemia subyacente; induce la regresión gradual de los xantomas eruptivos y tuberosos' },
      { drug: 'Ezetimiba oral (en hipercolesterolemia resistente)', dose: '10 mg VO cada 24 horas asociado a estatinas', route: 'VO', freq: 'c/24h', notes: 'Reduce la absorción intestinal de colesterol' }
    ],
    alternatives: [
      { drug: 'Fibratos (Fenofibrato) en xantomas eruptivos', dose: 'Fenofibrato 160 a 200 mg VO cada 24 horas con la cena', route: 'VO con alimentos', freq: 'c/24h', notes: 'Tratamiento prioritario si triglicéridos >500-1000 mg/dL para prevenir pancreatitis aguda' },
      { drug: 'Inhibidores de PCSK9 (Evolocumab o Alirocumab SC)', dose: '140 mg SC cada 2 semanas o 420 mg mensual', route: 'SC', freq: 'c/2 semanas', notes: 'En hipercolesterolemia familiar severa' }
    ],
    nonPharm: ['Dieta hipolipídica estricta: eliminación total de grasas trans y saturadas, restricción de azúcares refinados y alcohol absoluto', 'Remoción estética de xantelasmas palpebrales: ácido tricloroacético al 50-70%, láser de CO2 o escisión quirúrgica'],
    nursingCare: ['ESTRATIFICACIÓN DEL RIESGO CARDIOVASCULAR: Todo paciente con xantomas tendinosos o xantelasmas menores de 50 años debe considerarse de muy alto riesgo cardiovascular y recibir tamizaje inmediato de cardiopatía isquémica', 'Vigilancia en xantomas eruptivos: interrogar activamente sobre dolor epigástrico irradiado en faja hacia la espalda, náuseas o vómitos (signos precoces de pancreatitis aguda)', 'Enseñar adherencia terapéutica indefinida a estatinas y estilo de vida cardiosaludable']
  },
  {
    number: 410,
    id: 'diag-410',
    title: 'Granuloma anular',
    cie10: 'L92.0',
    category: 'Musculoesqueléticas y Piel',
    chapter: 'VI. Enfermedades Musculoesqueléticas, Reumatológicas y de la Piel (331-410)',
    definition: 'Dermatosis granulomatosa inflamatoria benigna y crónica de causa desconocida, caracterizada por la degeneración focal del colágeno dérmico (necrobiosis) rodeada por un infiltrado linfohistiocitario en empalizada. Se presenta como pápulas firmes agrupadas en una configuración anular o circular centrífuga.',
    symptoms: ['Pápulas firmes, lisas, de color piel, eritematosas o violáceas', 'DISTRIBUCIÓN EN ANILLO O ARCO CON CENTRO LIGERAMENTE DEPRIMIDO O NORMAL', 'BORDES DEL ANILLO COMPUESTOS POR MÚLTIPLES PÁPULAS DISCRETAS INDURADAS (aspecto en "collar de cuentas")', 'Superficie cutánea íntegra: NO PRESENTA ESCAMA, ATROFIA NI VESÍCULAS (diferencia crucial con la tiña corporal)', 'Asintomático o con prurito leve', 'Localización más frecuente en dorso de manos, dedos, pies y tobillos en niños y adultos jóvenes'],
    redFlags: ['Granuloma anular diseminado o generalizado (cientos de lesiones en tronco y extremidades): fuerte asociación con Diabetes Mellitus tipo 2, tiroiditis autoinmune y excepcionalmente neoplasias hematológicas'],
    criteria: 'Hallazgo clínico de lesiones anulares con borde sobreelevado micropapular liso no descamativo.',
    labTests: ['Glucemia en ayunas y Hemoglobina Glicosilada (HbA1c) obligatorias en todo granuloma anular diseminado', 'Biopsia cutánea con tinción de hematoxilina-eosina y azul alciano (muestra necrobiosis central del colágeno rodeada de histiocitos con mucina)'],
    imaging: ['No indicada'],
    differential: ['Tiña corporal (Tinea corporis - presenta borde activo con descamación y cultivo micológico positivo)', 'Eritema anular centrífugo', 'Necrobiosis lipoídica', 'Sarcoidosis cutánea anular'],
    firstLine: [
      { drug: 'Conducta expectante y tranquilización médica (en formas localizadas asintomáticas)', dose: 'Observación clínica', route: 'N/A', freq: 'N/A', notes: 'Hasta el 50-75% de los granulomas anulares localizados se resuelven espontáneamente sin cicatriz en un plazo de 1 a 2 años' },
      { drug: 'Corticoides tópicos de muy alta potencia bajo cura oclusiva: Clobetasol al 0.05%', dose: 'Aplicar una capa fina por las noches cubierto con plástico transparente durante 2 a 3 semanas', route: 'Tópica oclusiva', freq: 'c/24h nocturna', notes: 'Frena el infiltrado granulomatoso en lesiones sintomáticas o visibles' }
    ],
    alternatives: [
      { drug: 'Corticoides intralesionales: Triamcinolona acetónido', dose: 'Infiltración intralesional de 2.5 a 5 mg/mL con aguja 30G en el borde anular activo cada 4 semanas', route: 'Infiltración dérmica', freq: 'c/4 semanas (1-3 sesiones)', notes: 'Muy eficaz para aplanar rápidamente lesiones induradas recalcitrantes' },
      { drug: 'Tacrolimus tópico al 0.1% o Fototerapia (PUVA / UVB de banda estrecha)', dose: 'Aplicación cada 12 horas en rostro o flexuras para evitar atrofia por corticoides', route: 'Tópica / UV', freq: 'c/12h', notes: 'Opción no esteroidea' }
    ],
    nonPharm: ['Evitar traumatismos o picaduras en las zonas afectas (posible fenómeno isomórfico de Koebner)'],
    nursingCare: ['DISTINCIÓN VITAL FRENTE A TIÑAS Y HONGOS: Explicar al paciente y familiares que NO ES UN HONGO NI UNA INFECCIÓN CONTAGIOSA; recalcar que la superficie es lisa y no bota escamas (evitar el uso indiscriminado de cremas triples con antibiótico/corticoide/antifúngico)', 'Tamizaje metabólico de enfermería: realizar medición de glucosa capilar y control ponderal, especialmente en adultos con múltiples lesiones en tronco', 'Alivio del paciente: asegurar que el granuloma anular no es canceroso y tiene una elevada tasa de resolución espontánea a mediano plazo']
  }
];

