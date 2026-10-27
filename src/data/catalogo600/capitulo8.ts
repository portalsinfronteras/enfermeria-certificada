import { CatalogoEntry } from './types';

export const capitulo8: CatalogoEntry[] = [
  {
    number: 496,
    id: 'diag-496',
    title: 'Cáncer de cuello uterino (Carcinoma epidermoide de cérvix)',
    cie10: 'C53.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia ginecológica maligna derivada del epitelio del cuello uterino en la zona de transformación escamocolumnar, causada de forma prácticamente invariable (>99%) por la infección persistente por genotipos de alto riesgo oncogénico del Virus del Papiloma Humano (VPH 16 y 18). Es una de las principales causas de muerte por cáncer en mujeres peruanas, a pesar de ser casi 100% prevenible mediante vacunación y tamizaje oportuno.',
    symptoms: ['Completamente asintomático en fases tempranas y preinvasoras (LIEAG / NIC)', 'SANGRADO GENITAL ANÓMALO: METRORRAGIA POSTCOITAL ("sinusorragia o sangrado tras relaciones sexuales")', 'Sangrado intermenstrual o sangrado postmenopáusico', 'Leucorrea serosanguinolenta persistente, maloliente o "en agua de lavar carne"', 'En fases avanzadas invasoras: dolor pélvico o lumbar sordo continuo, disuria, hematuria, tenesmo rectal o hidronefrosis por atrapamiento ureteral con edema unilateral de miembro inferior'],
    redFlags: ['Hemoptisis ginecológica masiva con shock hipovolémico', 'Falla renal aguda obstructiva por invasión parametrial de uréteres'],
    criteria: 'Confirmación histopatológica por biopsia cervical dirigida por colposcopia y estadificación FIGO 2018.',
    labTests: ['Prueba molecular de detección de ADN-VPH (tamizaje de referencia)', 'Papanicolau (PAP) / Citología cervicovaginal en base líquida', 'Hemograma, creatinina y función renal'],
    imaging: ['RM de pelvis con contraste (estándar de oro para valorar invasión estromal, parametrial y ganglionar)', 'TC de tórax, abdomen y pelvis o PET-CT para estadificación a distancia'],
    differential: ['Cervicitis aguda severa', 'Pólipo endocervical sangrante', 'Ectropion cervical friable', 'Cáncer de endometrio'],
    firstLine: [
      { drug: 'Estadios iniciales (FIGO IA1 a IB2): Cirugía radical curativa (Histerectomía radical de Wertheim-Meigs + Linfadenectomía pélvica)', dose: 'Resección completa de útero, cérvix, parametrios, manguito vaginal y ganglios pélvicos (o conización en IA1 con preservación de fertilidad)', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'Tratamiento curativo de elección en enfermedad confinada al cérvix' },
      { drug: 'Estadios localmente avanzados (FIGO IB3 a IVA): Quimiorradioterapia concomitante (QRT)', dose: 'Radioterapia externa pélvica fraccionada + Braquiterapia intracavitaria de alta tasa de dosis + Cisplatino semanal 40 mg/m2 EV concurrente durante 5 a 6 semanas', route: 'Radioterapia + EV semanal', freq: 'Protocolo concomitante', notes: 'Estándar mundial de curación; el cisplatino actúa como radiosensibilizador' }
    ],
    alternatives: [
      { drug: 'Estadio IVB metastásico o recurrente: Pembrolizumab + Quimioterapia + Bevacizumab', dose: 'Pembrolizumab 200 mg EV c/3 semanas + Paclitaxel/Cisplatino + Bevacizumab 15 mg/kg EV', route: 'EV', freq: 'Protocolo oncológico', notes: 'Esquema de primera línea que incrementa significativamente la supervivencia global' }
    ],
    nonPharm: ['VACUNACIÓN UNIVERSAL CONTRA EL VPH (niñas y niños de 9 a 13 años según esquema nacional de vacunación del MINSA del Perú)', 'Tamizaje sistemático con Prueba de VPH o PAP cada 3-5 años'],
    nursingCare: ['CONSEJERÍA COMUNITARIA DE PREVENCIÓN EN EL PERÚ: Educar a las mujeres que el Papanicolau o la prueba molecular de VPH deben realizarse de rutina sin esperar a sangrar; cuando hay sangrado visible el cáncer ya suele estar en etapas avanzadas', 'Cuidados de la paciente en Braquiterapia: mantener reposo estricto en cama en decúbito supino mientras tenga los aplicadores vaginales colocados; control del dolor y heparina profiláctica de bajo peso molecular', 'Manejo de toxicidad por Cisplatino: hiperhidratación endovenosa enérgica (1000 mL de SF antes y después) y Ondansetrón EV para prevenir la nefrotoxicidad y emesis']
  },
  {
    number: 497,
    id: 'diag-497',
    title: 'Cáncer gástrico (Adenocarcinoma gástrico)',
    cie10: 'C16.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia epitelial maligna de la mucosa gástrica, constituida en >95% por adenocarcinomas clasificados histológicamente por Lauren en Intestinal (asociado a gastritis atrófica crónica, metaplasia intestinal e infección por Helicobacter pylori) y Difuso (células en anillo de sello, mutación del gen CDH1, más invasivo y prevalente en jóvenes). El Perú tiene una de las tasas de incidencia y mortalidad más altas de Sudamérica.',
    symptoms: ['Fase temprana: habitualmente asintomático o con dispepsia inespecífica leve atribuida a "gastritis común"', 'Fase avanzada:', '- PÉRDIDA INVOLUNTARIA Y RÁPIDA DE PESO CON ANODINIA Y ANEMIA FERROPÉNICA', '- Saciedad precoz y sensación de plenitud gástrica postprandial inmediata', '- Dolor epigástrico sordo, continuo, que no mejora con antiácidos', '- Vómitos recurrentes de retención postprandiales (en tumores antrales que obstruyen el píloro) o disfagia progresiva (en tumores del cardias)', '- Hemorragia digestiva alta: melenas o hematemesis', '- SIGNOS DE ENFERMEDAD METASTÁSICA AVANZADA:', '  * GANGLIO DE VIRCHOW (adenopatía supraclavicular izquierda)', '  * GANGLIO DE LA HERMANA MARÍA JOSÉ (nódulo metastásico umbilical palpable)', '  * Nódulo de Irish (adenopatía axilar izquierda)', '  * Escudo o anaquel de Blumer (masa tumoral en fondo de saco de Douglas) y Tumor de Krukenberg (metástasis ovárica bilateral)'],
    redFlags: ['Dispepsia persistente con "signos de alarma" (edad >40 años, pérdida de peso, anemia, vómitos, disfagia): ENDOSCOPIA DIGESTIVA ALTA URGENTE'],
    criteria: 'Biopsia gástrica múltiple (mínimo 6 a 8 tomas) obtenida mediante Endoscopia Digestiva Alta (EDA) con estudio histopatológico.',
    labTests: ['Hemograma completo (anemia microcítica ferropénica severa)', 'Prueba de Helicobacter pylori', 'Determinación de expresión de HER2 y PD-L1 (CPS) en tejido tumoral'],
    imaging: ['Endoscopia digestiva alta (clasificación de Borrmann para cáncer gástrico avanzado)', 'TC multicorte con contraste de tórax, abdomen y pelvis (estadiaje locorregional y metástasis hepáticas o peritoneales)', 'Ecoendoscopia (USE: evalúa profundidad T y ganglios N)'],
    differential: ['Úlcera gástrica péptica benigna', 'Linfoma gástrico MALT', 'Tumor del estroma gastrointestinal (GIST)', 'Gastritis crónica atrófica'],
    firstLine: [
      { drug: 'Enfermedad resecable locorregionalmente avanzada (cT2 o superior, o N+): Quimioterapia Perioperatoria (Esquema FLOT)', dose: '4 ciclos preoperatorios + 4 ciclos postoperatorios de FLOT: 5-Fluorouracilo 2600 mg/m2 en infusión de 24h + Leucovorina 200 mg/m2 + Oxaliplatino 85 mg/m2 + Docetaxel 50 mg/m2 cada 2 semanas', route: 'EV en infusión', freq: 'Cada 14 días', notes: 'Estándar mundial perioperatorio; reduce el estadio tumoral e incrementa notablemente la supervivencia global resecable' },
      { drug: 'Gastrectomía Radical oncológica con Linfadenectomía D2 (TRATAMIENTO CURATIVO)', dose: 'Gastrectomía subtotal (tumores de antro) o total (tumores de cuerpo/cardias) con margen proximal libre >5 cm + disección ganglionar D2 reglada (mínimo >16 ganglios resecados) y reconstrucción en Y de Roux', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'Pilar quirúrgico indiscutible para la curación oncológica' }
    ],
    alternatives: [
      { drug: 'Enfermedad avanzada metastásica HER2 positivo: Trastuzumab + Quimioterapia', dose: 'Trastuzumab 8 mg/kg carga luego 6 mg/kg EV cada 3 semanas + Cisplatino/Capecitabina', route: 'EV', freq: 'c/3 semanas', notes: 'Terapia dirigida obligatoria en tumores con sobreexpresión de HER2 (IHC 3+)' },
      { drug: 'Dispepsia de inicio: Erradicación precoz estricta de Helicobacter pylori', dose: 'Pauta cuádruple con bismuto por 14 días', route: 'VO', freq: 'Protocolo de erradicación', notes: 'Prevención primaria del cáncer gástrico intestinal' }
    ],
    nonPharm: ['Nutrición parenteral o enteral por yeyunostomía precoz ante desnutrición severa preoperatoria', 'Erradicación de alimentos ahumados, muy salados y cese del tabaquismo'],
    nursingCare: ['DETECCIÓN DE SIGNOS DE ALARMA DE DISPEPSIA EN ATENCIÓN PRIMARIA: Educar a la población en Perú que tomar antiácidos o inhibidores de bomba (omeprazol) por cuenta propia ante dolor de estómago recurrente retrasa el diagnóstico de cáncer gástrico; si tiene >40 años y baja de peso, exigir endoscopia alta', 'Cuidados de la Y de Roux y prevención del Síndrome de Dumping post-gastrectomía: indicar comidas fraccionadas pequeñas (6 al día), masticar despacio, separar los líquidos de las comidas sólidas al menos 30 minutos y restringir azúcares refinados', 'Suplementación parenteral de por vida de Vitamina B12 (Cianocobalamina 1000 mcg IM mensual): la gastrectomía total elimina las células parietales y el factor intrínseco causando anemia megaloblástica y neuropatía si no se inyecta']
  },
  {
    number: 498,
    id: 'diag-498',
    title: 'Cáncer de mama (Carcinoma ductal infiltrante y lobulillar)',
    cie10: 'C50.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La neoplasia maligna más frecuente y la principal causa de muerte por cáncer en mujeres en el mundo y en el Perú. Proliferación clonal maligna derivada del epitelio de los conductos galactóforos (ductal invasivo en 75-80%) o de los lobulillos mamarios (lobulillar invasivo en 10-15%). Se clasifica molecularmente en: Luminal A (RE+/RP+/HER2-), Luminal B (RE+/HER2- o +), HER2 enriquecido (HER2+) y Triple Negativo (RE-/RP-/HER2-, el más agresivo).',
    symptoms: ['NÓDULO O MASA PALPABLE INDOLORA, DURA, PÉTREA, DE BORDES IRREGULARES Y ADHERIDA A TEJIDOS PROFUNDOS', 'RETRACCIÓN O INVERSIÓN ADQUIRIDA DEL PEZÓN', 'PIEL DE NARANJA (edema cutáneo con acentuación de los poros por permeación tumoral de los vasos linfáticos dérmicos)', 'TELORREA UNILATERAL ESPONTÁNEA SEROSANGUINOLENTA O HEMÁTICA ("descarga por un solo poro del pezón")', 'Erosión o descamación eccematosa del pezón que no cura (Enfermedad de Paget mamaria)', 'ADENOPATÍAS AXILARES IPSILATERALES PALPABLES INDURADAS O CONFLUYENTES', 'En etapas avanzadas: ulceración cutánea con sangrado fétido, dolores óseos por metástasis'],
    redFlags: ['CÁNCER DE MAMA INFLAMATORIO: eritema rápido, calor y edema que cubre más de un tercio de la mama, sin masa discreta (frecuentemente confundido con mastitis; de extrema agresividad)'],
    criteria: 'Triple evaluación estándar: Examen clínico mamario + Mamografía/Ecografía bilateral (BIRADS >=4) + Biopsia con aguja gruesa (tru-cut) con inmunohistoquímica (RE, RP, HER2, Ki-67).',
    labTests: ['Inmunohistoquímica tumoral completa (Receptores de Estrógeno, Progesterona, HER2 y Ki-67)', 'Estudio genético de mutaciones BRCA1 y BRCA2 en pacientes jóvenes (<45 años) o con historia familiar múltiple'],
    imaging: ['Mamografía digital bilateral en proyecciones craneocaudal y mediolateral oblicua (búsqueda de microcalcificaciones pleomórficas espiculadas)', 'Ecografía mamaria y axilar bilateral', 'RM mamaria con contraste', 'TC de tórax/abdomen y Gammagrafía ósea en enfermedad localmente avanzada'],
    differential: ['Fibroadenoma mamario (en jóvenes, móvil y elástico)', 'Quiste mamario simple', 'Mastopatía fibroquística benigna', 'Mastitis infecciosa puerperal', 'Ectasia ductal'],
    firstLine: [
      { drug: 'Tratamiento Quirúrgico: Cirugía conservadora (Tumorectomía/Cuadrantectomía con márgenes) o Mastectomía total', dose: 'Resección completa de la lesión con margen histológico negativo + BIOPSIA DEL GANGLIO CENTINELA (BSGC) para estadificación axilar', route: 'Quirúrgico oncológico', freq: 'Procedimiento definitivo', notes: 'La cirugía conservadora asociada a radioterapia ofrece la misma supervivencia que la mastectomía total' },
      { drug: 'Hormonoterapia adyuvante en Tumores con Receptores Hormonales Positivos (Luminales)', dose: 'Mujeres premenopáusicas: Tamoxifeno 20 mg VO al día durante 5 a 10 años; Mujeres postmenopáusicas: Inhibidores de la Aromatasa (Letrozol 2.5 mg/día o Anastrozol 1 mg/día VO) durante 5 a 10 años', route: 'VO', freq: 'c/24h diario x 5-10 años', notes: 'Reduce drásticamente el riesgo de recurrencia a largo plazo; los inhibidores de aromatasa requieren densitometría ósea seriada' },
      { drug: 'Terapia dirigida anti-HER2 en Tumores HER2 Positivos: Trastuzumab + Pertuzumab', dose: 'Trastuzumab 6 mg/kg EV cada 3 semanas por 1 año asociado a quimioterapia con taxanos', route: 'EV', freq: 'c/3 semanas x 1 año', notes: 'Revolucionó el pronóstico del cáncer HER2+; monitorizar Fracción de Eyección (FEVI) por ecocardiograma' }
    ],
    alternatives: [
      { drug: 'Quimioterapia Neoadyuvante (previa a la cirugía) en Triple Negativo o HER2+', dose: 'Esquemas basados en Antraciclinas (Doxorrubicina + Ciclofosfamida) seguidas de Taxanos (Paclitaxel) +/- Pembrolizumab', route: 'EV', freq: 'Protocolo oncológico', notes: 'Busca la respuesta patológica completa (pCR) que se asocia a máxima supervivencia' }
    ],
    nonPharm: ['Mamografía anual de cribado a partir de los 40 a 50 años en toda mujer', 'Fisioterapia para prevención de linfedema del miembro superior tras linfadenectomía axilar'],
    nursingCare: ['PREVENCIÓN Y MANEJO DEL LINFEDEMA EN EL BRAZO AFECTADO TRAS CIRUGÍA AXILAR:', '1. PROHIBICIÓN ABSOLUTA DE REALIZAR VENOPUNCIONES, CANALIZACIÓN DE VÍAS EV O TOMAS DE PRESIÓN ARTERIAL en el brazo del lado operado de la mama', '2. Evitar heridas, quemaduras cocinando, cortes de uñas al ras o levantamiento de pesos mayores de 3 kg con ese brazo; usar guantes de cocina', '3. Ejercicios linfáticos de enfermería: enseñar ejercicios de movilización precoz de dedos, muñeca y codo al día siguiente de la cirugía', 'Adherencia al Tamoxifeno: educar sobre síntomas climatéricos (sofocos) y advertir que sangrados ginecológicos imprevistos exigen ecografía transvaginal por riesgo de hiperplasia endometrial']
  },
  {
    number: 499,
    id: 'diag-499',
    title: 'Cáncer de próstata (Adenocarcinoma prostático)',
    cie10: 'C61',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La neoplasia maligna visceral más común en varones adultos mayores (>50 años). Proliferación descontrolada originada en las células epiteliales de la zona periférica prostática (70-75% de los casos). Se caracteriza por una dependencia androgénica inicial y se gradúa histológicamente mediante el Score de Gleason / Grupos de Grado ISUP (1 a 5).',
    symptoms: ['Completamente asintomático en sus etapas localizadas tempranas curables', 'Síntomas obstructivos del tracto urinario inferior (idénticos a la hiperplasia prostática benigna por compresión uretral tardía): chorro débil, dificultad para iniciar la micción, pujo y goteo postmiccional', 'Polaquiuria, nicturia frecuente y tenesmo vesical', 'Hematuria microscópica o macroscópica y hemospermia (sangre en el semen)', 'EN ENFERMEDAD METASTÁSICA AVANZADA (debut en 15-20%):', '- DOLORES ÓSEOS AXIALES SEVEROS (metástasis osteoblásticas en columna lumbosacra, pelvis y fémur)', '- Pérdida de peso, astenia y anemia', '- SÍNDROME DE COMPRESIÓN MEDULAR AGUDA por colapso vertebral tumoral'],
    redFlags: ['Pérdida súbita de fuerza en miembros inferiores con incontinencia urinaria (COMPRESIÓN MEDULAR METASTÁSICA URGENTE)'],
    criteria: 'Confirmación histopatológica por Biopsia Transrectal o Transperineal de Próstata guiada por ecografía/fusión con RM.',
    labTests: ['Antígeno Prostático Específico (PSA total sérico: >4 ng/mL sospechoso, >10 ng/mL riesgo muy alto)', 'Relación PSA libre/PSA total (<15% orienta fuertemente a cáncer frente a HBP benigna)', 'Fosfatasa alcalina (elevada en metástasis óseas osteoblásticas)'],
    imaging: ['TACTO RECTAL (DRE): nódulo duro pétreo, asimétrico e irregular en el lóbulo prostático periférico', 'RM multiparamétrica de próstata (mpMRI con score PIRADS >=4 altamente sugestivo)', 'Gammagrafía ósea corporal total con Tecnecio 99m y PET-PSMA (para detección de metástasis óseas)'],
    differential: ['Hiperplasia prostática benigna (PSA elevado pero glándula lisa y fibroelástica)', 'Prostatitis crónica bacteriana (PSA elevado transitoriamente)', 'Infarto prostático'],
    firstLine: [
      { drug: 'Enfermedad localizada resecable: Prostatectomía Radical o Radioterapia Externa con IMRT', dose: 'Extirpación quirúrgica completa de la próstata y vesículas seminales (laparoscópica o robótica) +/- Linfadenectomía pélvica; o Radioterapia Externa conformada a dosis altas (78-80 Gy) + Braquiterapia', route: 'Quirúrgico / Radioterapia', freq: 'Procedimiento definitivo', notes: 'Tratamiento curativo estándar; evaluar riesgo de incontinencia urinaria y disfunción eréctil' },
      { drug: 'Vigilancia Activa (Active Surveillance) en Cáncer de Muy Bajo / Bajo Riesgo (Gleason 3+3 = 6, PSA <10)', dose: 'Monitoreo estricto con PSA trimestral, tacto rectal y biopsias/RM seriadas sin tratamiento invasivo inicial', route: 'Seguimiento clínico', freq: 'Trimestral', notes: 'Evita los efectos secundarios de la cirugía en tumores indolentes de crecimiento ultra lento' }
    ],
    alternatives: [
      { drug: 'Terapia de Deprivación Androgénica (TDA / Castración médica) en Enfermedad Avanzada o Metastásica', dose: 'Análogos de la LHRH (Leuprolide 22.5 mg SC trimestral o Goserelina 10.8 mg SC) asociado inicialmente a Bicalutamida 50 mg/día VO por 2 semanas para prevenir el fenómeno "flare"', route: 'SC depot', freq: 'Trimestral', notes: 'Induce la regresión tumoral al suprimir la testosterona a niveles de castración (<50 ng/dL)' },
      { drug: 'Inhibidores de la vía del receptor androgénico de nueva generación: Enzalutamida o Abiraterona', dose: 'Enzalutamida 160 mg VO al día; o Abiraterona 1000 mg/día VO + Prednisona 5 mg/día', route: 'VO', freq: 'c/24h', notes: 'Estándar en cáncer de próstata metastásico hormonosensible o resistente a la castración' }
    ],
    nonPharm: ['Tamizaje preventivo con PSA y Tacto Rectal anual a partir de los 50 años (o a los 45 años si es afrodescendiente o tiene antecedentes de familiares directos con cáncer de próstata)'],
    nursingCare: ['DESMITIFICAR EL TACTO RECTAL EN HOMBRES PERUANOS: Concientizar con respeto y empatía que el tacto rectal dura solo 10 segundos, no es doloroso y salva vidas al palpar nódulos que el análisis de sangre a veces no detecta', 'Preparación para la Biopsia de Próstata: profilaxis antibiótica oral (Ciprofloxacino o Ceftriaxona) y enema de limpieza rectal para evitar sepsis bacteriana por punción rectal', 'Manejo de la incontinencia post-prostatectomía: enseñar ejercicios de fortalecimiento del suelo pélvico de Kegel antes y después de la cirugía para acelerar la continencia urinaria']
  },
  {
    number: 500,
    id: 'diag-500',
    title: 'Cáncer de pulmón (Células no pequeñas y Células pequeñas / Microcítico)',
    cie10: 'C34.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La principal causa de muerte por cáncer a nivel mundial en ambos sexos, estrechamente atribuible en >85% de los casos al tabaquismo activo o pasivo, y en el Perú también a la exposición prolongada al humo de leña (biomasa) y radón. Se clasifica en Cáncer de Pulmón de Células No Pequeñas (CPCNP 85%: Adenocarcinoma, Epidermoide, Células grandes) y Cáncer de Pulmón de Células Pequeñas o Microcítico (CPCP 15%: neuroendocrino de crecimiento ultra rápido y diseminación temprana).',
    symptoms: ['TOS CRÓNICA PERSISTENTE NUEVA O CAMBIO EN EL PATRÓN DE LA TOS HABITUAL DEL FUMADOR', 'HEMOPTISIS (expectoración con estrías de sangre o sangre fresca; "el signo de alarma clásico")', 'Disnea progresiva y dolor torácico pleurítico sordo continuo', 'Pérdida involuntaria de peso severa, astenia, anorexia y febrícula vespertina', 'Neumonías recurrentes en el mismo lóbulo pulmonar por atelectasia obstructiva', 'SÍNDROMES DE INVASIÓN LOCAL:', '- SÍNDROME DE LA VENA CAVA SUPERIOR: edema en esclavina (edema de cara, cuello y ambos brazos), ingurgitación yugular y circulación colateral torácica', '- SÍNDROME DE PANCOAST (tumor en vértice pulmonar): dolor radicular braquial y SÍNDROME DE HORNER (ptosis, miosis y enoftalmos/anhidrosis homolateral)', '- Disfonía persistente por parálisis del nervio laríngeo recurrente izquierdo', 'SÍNDROMES PARANEOPLÁSICOS: SIADH con hiponatremia (en microcítico), hipercalcemia tumoral por PTHrp (en epidermoide), Síndrome de Cushing ectópico'],
    redFlags: ['SÍNDROME DE VENA CAVA SUPERIOR AGUDO CON EDEMA CEREBRAL O DISNEA SEVERA (urgencia oncológica)'],
    criteria: 'Confirmación anatomopatológica por biopsia guiada por fibrobroncoscopia (EBUS) o punción percutánea guiada por TC.',
    labTests: ['Biología molecular mandataria en Adenocarcinoma CPCNP: determinación de mutaciones EGFR, translocaciones ALK y ROS1, BRAF, y nivel de expresión de PD-L1 (imprescindible para inmunoterapia)'],
    imaging: ['TC helicoidal de tórax, abdomen superior y cráneo con contraste intravenoso', 'PET-CT con 18-FDG (estándar de oro para estadiaje ganglionar N mediastínico y metástasis)'],
    differential: ['Tuberculosis pulmonar activa (altísima prevalencia en Perú, causa frecuente de error diagnóstico inicial)', 'Neumonía bacteriana organizada', 'Absceso pulmonar', 'Hamartoma pulmonar'],
    firstLine: [
      { drug: 'CPCNP Estadios iniciales resecables (I y II): Lobectomía pulmonar anatómica con Linfadenectomía mediastínica reglada', dose: 'Resección completa del lóbulo pulmonar por videotoracoscopia (VATS) o toracotomía + disección ganglionar', route: 'Quirúrgico torácico', freq: 'Procedimiento curativo', notes: 'Tratamiento curativo de elección; asociar quimioterapia adyuvante con cisplatino en estadios II' },
      { drug: 'CPCNP con Mutación de EGFR positiva: Terapia dirigida con Osimertinib oral', dose: '80 mg VO al día de forma continua', route: 'VO', freq: 'c/24h de por vida', notes: 'Inhibidor tirosina quinasa de 3ra generación; estándar de oro de primera línea con penetración en el SNC' },
      { drug: 'CPCNP sin mutaciones tratables con PD-L1 >=50%: Inmunoterapia con Pembrolizumab en monoterapia', dose: '200 mg EV cada 3 semanas (o 400 mg cada 6 semanas)', route: 'EV', freq: 'c/3 semanas', notes: 'Duplica la supervivencia frente a la quimioterapia tradicional con excelente perfil de tolerancia' }
    ],
    alternatives: [
      { drug: 'Cáncer Microcítico (CPCP) Estadio Extendido: Quimioterapia + Inmunoterapia (Atezolizumab + Carboplatino + Etopósido)', dose: 'Ciclos cada 3 semanas por 4 ciclos seguido de Atezolizumab de mantenimiento', route: 'EV', freq: 'c/3 semanas', notes: 'Estándar moderno que mejora el control sistémico' }
    ],
    nonPharm: ['CESE ABSOLUTO DEL TABAQUISMO (incluso tras el diagnóstico, dejar de fumar duplica la supervivencia)', 'Rehabilitación respiratoria y fisioterapia preoperatoria'],
    nursingCare: ['NO CONFUNDIR CÁNCER CON TUBERCULOSIS EN EL PERÚ: En pacientes mayores fumadores con tos crónica, expectoración con sangre y pérdida de peso con baciloscopías negativas repetidas, NO insistir con tratamientos empíricos antituberculosos; solicitar TC de tórax urgente para descartar cáncer de pulmón', 'Manejo del Síndrome de Vena Cava Superior de enfermería: colocar cabecera a 45-90°, administrar oxígeno suplementario, corticoides EV (dexametasona 8 mg) y evitar punciones en brazos', 'Monitoreo de toxicidad inmunomediada por Pembrolizumab: vigilar tos seca nueva o disnea (alerta de neumonitis inmunomediada) y diarreas profusas (colitis)']
  },
  {
    number: 501,
    id: 'diag-501',
    title: 'Cáncer colorrectal (Adenocarcinoma de colon y recto)',
    cie10: 'C18.9 / C20',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Tercera neoplasia maligna más común en el mundo y una de las principales en el Perú, derivada en más del 90% de la transformación adenoma-carcinoma a partir de pólipos adenomatosos colónicos preexistentes a lo largo de 10 a 15 años. Su comportamiento y síntomas difieren según la localización (colon derecho vs colon izquierdo/recto).',
    symptoms: ['CÁNCER DE COLON DERECHO (Ciego y ascendente - luz ancha y heces líquidas):', '- ANEMIA FERROPÉNICA CRÓNICA DE ORIGEN INEXPLICABLE (astenia, fatiga, palidez por microsangrado oculto)', '- Pérdida involuntaria de peso y astenia', '- Masa palpable dura indolora en fosa ilíaca derecha en etapas avanzadas (rara vez causa obstrucción)', 'CÁNCER DE COLON IZQUIERDO Y RECTO (Descendente y sigma - luz estrecha y heces sólidas):', '- CAMBIO LLAMATIVO EN EL RITMO INTESTINAL (estreñimiento de nueva aparición alternado con diarreas)', '- EMISIÓN DE HECES ACINTADAS O AFINADAS ("heces en forma de lápiz o cinta")', '- RECTORRAGIA O HEMATOQUEZIA (sangre roja brillante mezclada con las heces)', '- Tenesmo rectal doloroso y sensación de evacuación incompleta (típico en cáncer de recto bajo)', 'Complicaciones agudas: Obstrucción intestinal aguda en asa cerrada o perforación tumoral con peritonitis'],
    redFlags: ['TODO PACIENTE VARÓN O MUJER POSTMENOPÁUSICA CON ANEMIA FERROPÉNICA SIN CAUSA APARENTE TIENE CÁNCER DE COLON HASTA DEMOSTRAR LO CONTRARIO MEDIANTE COLONOSCOPIA'],
    criteria: 'Colonoscopia completa hasta ciego con toma de biopsias múltiples y confirmación histopatológica de adenocarcinoma.',
    labTests: ['Antígeno Carcinoembrionario (CEA sérico: marcador tumoral de seguimiento y recidiva)', 'Test de Sangre Oculta en Heces Inmunoquímico (FIT / Thevenon)', 'Test de Inestabilidad de Microsatélites (MSI / MMR) y mutaciones RAS (KRAS, NRAS) y BRAF en tejido tumoral'],
    imaging: ['TC de tórax, abdomen y pelvis con contraste (estadiaje de metástasis hepáticas y pulmonares)', 'RM de pelvis de alta resolución (estándar de oro obligatorio en Cáncer de Recto para evaluar fascia mesorrectal)'],
    differential: ['Enfermedad diverticular complicada', 'Enfermedad de Crohn o Colitis ulcerosa', 'Hemorroides internas sangrantes', 'Pólipos colónicos benignos'],
    firstLine: [
      { drug: 'Cáncer de Colon Reclinable: Colectomía oncológica radical con Linfadenectomía', dose: 'Hemicolectomía derecha o izquierda con ligadura vascular en el origen y resección de al menos 12 ganglios linfáticos mesentéricos', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'Tratamiento curativo de elección; asociar Quimioterapia adyuvante con FOLFOX (Oxaliplatino + 5-FU/Leucovorina) en estadio III ganglionar' },
      { drug: 'Cáncer de Recto Localmente Avanzado: Neoadyuvancia con Quimiorradioterapia Concomitante o TNT', dose: 'Radioterapia pélvica de ciclo largo fraccionada + Capecitabina oral continua, seguido de Escisión Total del Mesorrecto (ETM)', route: 'Radioterapia + VO + Cirugía', freq: 'Protocolo multimodal', notes: 'La ETM reduce la tasa de recidiva local a <5% y preserva el esfínter anal' }
    ],
    alternatives: [
      { drug: 'Enfermedad Metastásica con Inestabilidad de Microsatélites Alta (MSI-H / dMMR): Inmunoterapia con Pembrolizumab', dose: '200 mg EV cada 3 semanas', route: 'EV', freq: 'c/3 semanas', notes: 'Respuestas duraderas excepcionales; reemplaza a la quimioterapia en tumores con déficit de reparación de ADN' },
      { drug: 'Terapia biológica dirigida en metástasis hepáticas: Bevacizumab o Cetuximab/Panitumumab', dose: 'Cetuximab (si RAS nativo) o Bevacizumab asociado a quimioterapia FOLFIRI/FOLFOX', route: 'EV', freq: 'Cada 14 días', notes: 'Permite convertir metástasis hepáticas no resecables en resecables' }
    ],
    nonPharm: ['Tamizaje universal a partir de los 45 a 50 años con Test Inmunoquímico de Sangre Oculta en Heces anual o Colonoscopia cada 10 años'],
    nursingCare: ['ALERTA DE ANEMIA FERROPÉNICA EN ADULTOS DE ENFERMERÍA: Si en los análisis de rutina de un adulto >50 años detecta hemoglobina baja con ferritina baja sin sangrado visible, coordinar de inmediato con gastroenterología para colonoscopia; no tratar simplemente con sulfato ferroso a ciegas', 'CUIDADOS DE LA OSTOMÍA (ILEOSTOMÍA / COLOSTOMÍA):', '- Medir el diámetro exacto del estoma para recortar la placa adhesiva dejando 1-2 mm de margen', '- Limpiar la piel periestomal con agua tibia y jabón neutro, secando suavemente sin frotar', '- Aplicar pasta barrera hidrocoloide para evitar quemaduras químicas por contacto con heces ácidas', '- Educación al paciente y cuidador para el vaciamiento de la bolsa cuando esté a 1/3 de su capacidad para evitar fugas y despegue']
  },
  {
    number: 502,
    id: 'diag-502',
    title: 'Cáncer de tiroides (Carcinoma papilar, folicular, medular y anaplásico)',
    cie10: 'C73',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La neoplasia maligna endocrina más común, con marcado predominio en mujeres (3:1). Se clasifica histológicamente en: Carcinoma Papilar (el más frecuente 85%, excelente pronóstico, diseminación linfática), Carcinoma Folicular (10%, diseminación hematógena a huesos y pulmón), Carcinoma Medular (3-5%, derivado de células C parafoliculares productoras de calcitonina, asociado a MEN 2A/2B) y Carcinoma Anaplásico (<1-2%, de extrema agresividad y casi 100% letalidad).',
    symptoms: ['NÓDULO TIROIDEO PALPABLE INDOLORO, DURO Y FIJO EN LA CARA ANTERIOR DEL CUELLO que asciende con la deglución', 'Crecimiento progresivo e indoloro a lo largo de meses o años', 'Adenopatías cervicales laterales ipsilaterales palpables duras (muy frecuentes en carcinoma papilar como signo de debut)', 'Signos de invasión local en tumores avanzados:', '- Disfonía o voz bitonal por infiltración del nervio laríngeo recurrente', '- Disfagia por compresión esofágica o disnea/estridor por compresión traqueal', 'En Carcinoma Anaplásico: MASA CERVICAL GIGANTE DE CRECIMIENTO EXPLOSIVO EN DÍAS CON ASFIXIA Y DISFAGIA AGUDA', 'En Carcinoma Medular: diarrea acuosa secretora y rubefacción facial por exceso de calcitonina y péptidos vasoactivos'],
    redFlags: ['Crecimiento acelerado en ancianos con estridor laríngeo agudo (sospecha de Carcinoma Anaplásico)', 'Parálisis de cuerda vocal demostrada en laringoscopia'],
    criteria: 'Punción Aspiración con Aguja Fina (PAAF) guiada por ecografía con clasificación citopatológica de Bethesda (Bethesda V o VI: maligno).',
    labTests: ['TSH sérica (habitualmente normal; un nódulo maligno suele ser "frío" o hipocaptante)', 'Tiroglobulina sérica (marcador tumoral postquirúrgico de recidiva en papilar/folicular)', 'Calcitonina y Antígeno Carcinoembrionario (CEA) séricos obligatorios en sospecha de Carcinoma Medular'],
    imaging: ['Ecografía tiroidea de alta resolución con clasificación TI-RADS (criterios de malignidad: hipoecogenicidad, microcalcificaciones, márgenes irregulares, más alto que ancho y vascularización central)', 'TC de cuello y tórax contrastada si hay invasión o extensión subesternal'],
    differential: ['Bocio nodular coloide benigno', 'Adenoma folicular benigno', 'Tiroiditis de Hashimoto con pseudonódulos', 'Quiste tirogloso'],
    firstLine: [
      { drug: 'Tratamiento Quirúrgico de Elección: Tiroidectomía Total o Lobectomía tiroidea', dose: 'Tiroidectomía total con vaciamiento ganglionar central compartimento VI (o lobectomía en tumores unifocales <1-2 cm sin factores de riesgo)', route: 'Quirúrgico de cabeza y cuello', freq: 'Procedimiento curativo', notes: 'Pilar curativo en la inmensa mayoría de los carcinomas papilares y foliculares' },
      { drug: 'Ablación con Yodo Radiactivo (I-131 / Radioyodo) en carcinoma papilar/folicular de riesgo intermedio o alto', dose: '30 a 100 mCi de I-131 oral tras estimulación con TSH humana recombinante (Thyrogen) o suspensión de levotiroxina', route: 'Oral radioactiva', freq: 'Dosis única postoperatoria', notes: 'Destruye cualquier resto de tejido tiroideo microscópico residual o metástasis captantes de yodo' },
      { drug: 'Terapia Supresora de TSH con Levotiroxina oral de por vida', dose: 'Dosis calculada a 1.6 a 2.0 mcg/kg/día VO en ayunas buscando mantener TSH suprimida (<0.1 o 0.1-0.5 mIU/L según riesgo)', route: 'VO en ayunas', freq: 'c/24h matutino de por vida', notes: 'Remplaza la hormona ausente y suprime el estímulo proliferativo de la TSH sobre células tiroideas residuales' }
    ],
    alternatives: [
      { drug: 'Inhibidores Multiquinasa (Lenvatinib o Sorafenib) en Cáncer Refractario al Radioyodo', dose: 'Lenvatinib 24 mg VO diarios', route: 'VO', freq: 'c/24h', notes: 'Tratamiento de elección en enfermedad metastásica refractaria a I-131' }
    ],
    nonPharm: ['Dieta baja en yodo durante las dos semanas previas a la administración del tratamiento con I-131'],
    nursingCare: ['CUIDADOS POSTOPERATORIOS INMEDIATOS DE TIROIDECTOMÍA ENFERMERÍA:', '1. VIGILANCIA DE HIPOCALCEMIA AGUDA POR HIPOPARATIROIDISMO POSTQUIRÚRGICO (lesión de glándulas paratiroides): monitorear parestesias peribucales, hormigueo en yemas de los dedos, signo de Chvostek (espasmo facial al percutir el nervio) y signo de Trousseau (espasmo carpopedal al inflar el manguito); TENER LISTO GLUCONATO DE CALCIO AL 10% EV en la cabecera', '2. VIGILANCIA DE HEMATOMA ASFÍCTICO SOFOCANTE DE CUELLO: inspeccionar el apósito cervical y la tensión del cuello; si el cuello se tensa rápidamente y hay estridor, es una emergencia quirúrgica que requiere abrir los puntos en la cama', '3. Aislamiento radiológico post-I-131: habitación individual plomada, beber abundantes líquidos para eliminar el radioyodo por orina y masticar chicle o limón para prevenir sialoadenitis por retención salival']
  },
  {
    number: 503,
    id: 'diag-503',
    title: 'Leucemia linfoblástica aguda (LLA infantil y del adulto)',
    cie10: 'C91.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia hematológica clonal maligna de los precursores linfoides (linfoblastos B en 85% o linfoblastos T en 15%) caracterizada por la proliferación descontrolada y acumulación masiva de blastos inmaduros en la médula ósea, desplazando a la hematopoyesis normal y diseminándose a sangre periférica y órganos extramedulares (SNC y testículos). Es el CÁNCER MÁS FRECUENTE EN LA INFANCIA (pico de 2 a 5 años), con tasas de curación pediátrica >85-90%.',
    symptoms: ['SÍNDROME DE INSUFICIENCIA MEDULAR AGUDA (TRÍADA CARDINAL):', '- SÍNDROME ANÉMICO: palidez mucocutánea intensa, astenia, decaimiento e irritabilidad', '- SÍNDROME INFECCIOSO POR NEUTROPENIA: fiebre inexplicada recurrente, infecciones orofaríngeas o respiratorias refractarias', '- SÍNDROME PURPÚRICO/HEMORRÁGICO POR TROMBOCITOPENIA: petequias generalizadas, equimosis espontáneas ante mínimos roces, epistaxis y gingivorragias', 'SÍNDROME INFILTRATIVO EXTRAMEDULAR TUMORAL:', '- DOLORES ÓSEOS Y ARTICULARES INTENSOS (el niño no quiere caminar o cojea por expansión leucémica del periostio)', '- ADENOMEGALIAS GENERALIZADAS indoloras múltiples (cervicales, axilares, inguinales)', '- HEPATOESPLENOMEGALIA franca palpable en abdomen', '- Infiltración del SNC: cefalea, vómitos matutinos, parálisis de pares craneales', '- Masa mediastínica anterior en LLA-T con estridor respiratorio y disnea'],
    redFlags: ['HIPERLEUCOCITOSIS EXTREMA (>100,000 leucocitos/uL): ALTO RIESGO DE LEUCOSTASIS PULMONAR Y CEREBRAL', 'SÍNDROME DE LISIS TUMORAL AGUDO espontáneo o tras iniciar quimioterapia'],
    criteria: 'Aspirado y Biopsia de Médula Ósea demostrando PRESENCIA DE >=20% DE LINFOBLASTOS con citometría de flujo confirmatoria.',
    labTests: ['Hemograma completo (pancitopenia o hiperleucocitosis con blastos en frotis de sangre periférica)', 'Citometría de flujo de médula ósea (inmunofenotipo B: CD19, CD22, CD10 CALLA; o T: CD3, CD7)', 'Citogenética y Biología Molecular (búsqueda de t(9;22) BCR-ABL / Cromosoma Filadelfia o t(12;21) ETV6-RUNX1)', 'Perfil de lisis tumoral: ácido úrico, potasio, fósforo, calcio y LDH muy elevada'],
    imaging: ['PUNCIÓN LUMBAR CON CITOLOGÍA DE LCR obligatoria al diagnóstico (para descartar infiltración del SNC)', 'Radiografía de tórax (descarte de masa mediastínica tímica)'],
    differential: ['Anemia aplásica grave', 'Mononucleosis infecciosa por virus de Epstein-Barr (linfocitos atípicos reactivos)', 'Artritis idiopática juvenil', 'Púrpura trombocitopénica inmunitaria (PTI)'],
    firstLine: [
      { drug: 'Quimioterapia de Inducción a la Remisión multidroga pediátrica estandarizada (Protocolo tipo BFM o St. Jude)', dose: 'Combinación de Vincristina + Dexametasona o Prednisona + L-Asparaginasa (o Pegaspargasa) + Daunorrubicina durante 4 semanas', route: 'EV / IM', freq: 'Protocolo hospitalario', notes: 'Logra la remisión morfológica completa en >95% de los niños' },
      { drug: 'Profilaxis intratecal del Sistema Nervioso Central (OBLIGATORIA EN TODOS LOS PACIENTES)', dose: 'Punciones lumbares periódicas con administración intratecal de Metotrexato + Citarabina + Hidrocortisona ("triple intratecal")', route: 'Intratecal', freq: 'Según fases de protocolo', notes: 'Previene las recaídas meníngeas letales en el SNC' },
      { drug: 'Inhibidores de la Tirosina Quinasa (Imatinib o Dasatinib) en LLA con Cromosoma Filadelfia positivo t(9;22)', dose: 'Imatinib 340-400 mg/m2 VO diario asociado a la quimioterapia', route: 'VO', freq: 'c/24h continuo', notes: 'Revolucionó el pronóstico de la LLA Ph+ convirtiéndola en altamente curable' }
    ],
    alternatives: [
      { drug: 'Anticuerpo biespecífico Blinatumomab (BiTE anti-CD19/CD3) o Inotuzumab ozogamicina', dose: 'Blinatumomab en infusión continua endovenosa durante 28 días', route: 'EV en infusión continua', freq: 'Continuo 28 días', notes: 'Eficacia espectacular en enfermedad mínima residual (EMR) persistente o recaídas' },
      { drug: 'Terapia con Células CAR-T (Tisagenlecleucel)', dose: 'Infusión única de linfocitos T modificados genéticamente', route: 'Celular EV', freq: 'Dosis única', notes: 'Aprobada en LLA-B pediátrica refractaria o en segunda recaída' }
    ],
    nonPharm: ['AISLAMIENTO PROTECTOR EN HABITACIÓN INDIVIDUAL CON FILTRO HEPA ante neutropenia severa', 'Profilaxis con Cotrimoxazol para prevenir neumonía por Pneumocystis jirovecii'],
    nursingCare: ['PREVENCIÓN DEL SÍNDROME DE LISIS TUMORAL DE ENFERMERÍA: Iniciar HIPERHIDRATACIÓN ENDOVENOSA ENÉRGICA (3000 mL/m2/día de suero alcalinizado o sin potasio) y administrar Alopurinol o Rasburicasa antes de la primera dosis de quimioterapia; balance hídrico estricto y diuresis horaria >3-4 mL/kg/h', 'Cuidado de catéter venoso central tunelizado (tipo Hickman o Port-a-Cath): cura aséptica estricta semanal con clorhexidina para prevenir bacteriemia en neutropénico', 'VIGILANCIA DE FIEBRE NEUTROPÉNICA (EMERGENCIA ONCOLÓGICA): Si el paciente tiene temperatura axilar >=38.0 °C con neutrófilos <500/uL, TOMAR HEMOCULTIVOS SERIADOS E INICIAR ANTIBIÓTICOS EV DE AMPLIO ESPECTRO (Ceftazidima o Meropenem) EN MENOS DE 60 MINUTOS ("LA HORA DE ORO")', 'Vigilancia de reacciones alérgicas o anafilaxia tras la infusión de L-Asparaginasa']
  },
  {
    number: 504,
    id: 'diag-504',
    title: 'Leucemia mieloide aguda (LMA del adulto)',
    cie10: 'C92.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia hematológica mieloide clonal sumamente agresiva y de rápida progresión caracterizada por el bloqueo madurativo y proliferación anormal de precursores mieloides (mieloblastos) que invaden la médula ósea y sangre. Es la leucemia aguda más frecuente en adultos (mediana de edad 68 años). La Leucemia Promielocítica Aguda (LPA / M3 con t(15;17) PML-RARA) es una emergencia médica especial por coagulopatía de consumo masiva.',
    symptoms: ['SÍNDROME DE FALLO MEDULAR RÁPIDO Y PROFUNDO:', '- Astenia invalidante, disnea de mínimos esfuerzos y palidez cérea por anemia severa', '- Fiebre de origen desconocido o sepsis bacteriana fulminante por neutropenia severa (<500/uL)', '- HEMORRAGIAS GRAVES ESPONTÁNEAS: petequias masivas, hematomas extensos, sangrado mucoso y hemorragias retinianas o cerebrales por trombocitopenia crítica', 'En Leucemia Promielocítica Aguda (LPA): COAGULACIÓN INTRAVASCULAR DISEMINADA (CID) FULMINANTE CON SANGRADO INCOERCIBLE en múltiples sitios de punción', 'Dolores óseos, hiperplasia gingival masiva e infiltración cutánea ("leucemia cutis")', 'Síndrome de leucostasis en hiperleucocitosis: disnea, hipoxemia y confusión mental'],
    redFlags: ['LEUCEMIA PROMIELOCÍTICA AGUDA: RIESGO DE MUERTE INMEDIATA POR HEMORRAGIA CEREBRAL O PULMONAR EN LAS PRIMERAS 48 HORAS si no se administra ATRA urgentemente'],
    criteria: 'Presencia de >=20% de mieloblastos en médula ósea o sangre periférica (o detección de t(15;17), t(8;21) o inv(16) independientemente del porcentaje de blastos).',
    labTests: ['Morfología de médula ósea con identificación de BASTONES DE AUER (estructuras azurófilas intracitoplasmáticas patognomónicas en mieloblastos)', 'Citometría de flujo mieloide (CD33, CD13, CD117, MPO mieloperoxidasa positiva)', 'Perfil de coagulación urgente (Fibrinógeno, Dímero D, TP, TTPa: descarte de CID)', 'Genética molecular (mutaciones NPM1, FLT3-ITD, CEBPA, TP53)'],
    imaging: ['Radiografía de tórax y ecocardiograma para evaluar FEVI antes de usar antraciclinas'],
    differential: ['Síndrome mielodisplásico con exceso de blastos', 'Reacción leucemoide severa por sepsis', 'Leucemia linfoblástica aguda'],
    firstLine: [
      { drug: 'Leucemia Mieloide Aguda estándar en adultos jóvenes aptos: Esquema de Inducción "7+3"', dose: 'Citarabina 100-200 mg/m2/día en infusión continua EV durante 7 días + Daunorrubicina 60-90 mg/m2 EV diaria durante los días 1, 2 y 3', route: 'EV continuo', freq: 'Protocolo de inducción 7 días', notes: 'Esquema de referencia clásico; induce remisión en 70-80% de los pacientes' },
      { drug: 'LEUCEMIA PROMIELOCÍTICA AGUDA t(15;17): Esquema libre de quimioterapia: ATRA + Trióxido de Arsénico (ATO)', dose: 'Ácido Todo-Trans Retinoico (ATRA) 45 mg/m2/día VO dividido en 2 tomas + Trióxido de Arsénico (ATO) 0.15 mg/kg EV diario', route: 'VO + EV', freq: 'Diario según pauta', notes: 'REVOLUCIÓN ONCOLÓGICA: Induce la diferenciación celular de los promielocitos; tasa de curación >95% sin alopecia ni toxicidad medular clásica' }
    ],
    alternatives: [
      { drug: 'LMA en Adultos Mayores o No Candidatos a Quimio Intensiva: Azacitidina + Venetoclax', dose: 'Azacitidina 75 mg/m2 SC días 1 a 7 + Venetoclax 400 mg VO diario (con rampa de titulación)', route: 'SC + VO', freq: 'Ciclos mensuales', notes: 'Nuevo estándar que duplica la supervivencia en pacientes ancianos frágiles' },
      { drug: 'Trasplante Alogénico de Progenitores Hematopoyéticos (TAPH)', dose: 'Trasplante de médula de donante emparentado o no emparentado', route: 'Celular EV', freq: 'Procedimiento único', notes: 'Consolidación curativa de elección en LMA de riesgo intermedio o adverso en primera remisión' }
    ],
    nonPharm: ['Transfusión urgente de concentrados plaquetarios y plasma fresco congelado/crioprecipitados para mantener plaquetas >30,000-50,000/uL y fibrinógeno >150 mg/dL'],
    nursingCare: ['ADMINISTRACIÓN INMEDIATA DE ATRA ANTE LA SOSPECHA DE PROMIELOCÍTICA: Iniciar las cápsulas de ATRA (Tretinoína) por vía oral ese mismo instante en urgencias sin esperar los resultados de genética; cada hora de retraso incrementa el riesgo de muerte por hemorragia cerebral', 'VIGILANCIA DEL SÍNDROME DE DIFERENCIACIÓN POR ATRA/ATO: Monitorizar disnea súbita, fiebre sin foco, aumento de peso (>2-3 kg por edema), infiltrados pulmonares y derrame pleural; avisar al médico para iniciar Dexametasona 10 mg EV cada 12h de inmediato', 'Manejo riguroso de la plaquetopenia severa: evitar inyecciones intramusculares, cepillos dentales duros (usar hisopos bucales suaves) y esfuerzos defecatorios']
  },
  {
    number: 505,
    id: 'diag-505',
    title: 'Linfoma de Hodgkin clásico (Esclerosis nodular y Celularidad mixta)',
    cie10: 'C81.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna del tejido linfoide caracterizada anatomopatológicamente por la presencia de una minoría de células tumorales gigantes multinucleadas clonales derivadas de linfocitos B (CÉLULAS DE REED-STERNBERG: CD15+ y CD30+), inmersas en un abundante infiltrado inflamatorio reactivo no neoplásico. Presenta una distribución etaria bimodal (pico en adultos jóvenes de 15 a 35 años y segundo pico en >55 años) con altísima tasa de curación (>80-90%).',
    symptoms: ['ADENOPATÍAS PERIFÉRICAS INDOLORAS, ELÁSTICAS ("con consistencia de goma de borrar"), MÓVILES Y PROGRESIVAS, localizadas con mayor frecuencia en regiones cervicales (60-70%) y supraclaviculares', 'MASA MEDIASTÍNICA ANTERIOR (frecuente en subtipo Esclerosis Nodular en mujeres jóvenes), con tos seca, disnea u opresión torácica', 'SÍNTOMAS B CONSTITUCIONALES PATOGNOMÓNICOS (presentes en 30-40%):', '- FIEBRE INEXPLICADA mayor a 38 °C (a veces ondulante tipo Fiebre de Pel-Ebstein: días con fiebre seguidos de días afebriles)', '- SUDORACIÓN NOCTURNA EMPAPANTE (obliga a cambiarse el pijama o sábanas)', '- PÉRDIDA INVOLUNTARIA DE PESO >10% del peso corporal en los últimos 6 meses', 'PRURITO GENERALIZADO INTENSO E INCOERCIBLE sin lesiones cutáneas primarias', 'SIGNO DE HOSTER: dolor agudo localizado en las adenopatías tumorales pocos minutos después de ingerir pequeñas cantidades de alcohol'],
    redFlags: ['Compresión traqueal o Síndrome de Vena Cava Superior por masas mediastínicas voluminosas ("bulky" >10 cm)'],
    criteria: 'Biopsia ganglionar escisional completa (NO punción con aguja fina) con confirmación de células de Reed-Sternberg CD30+ y CD15+.',
    labTests: ['Hemograma completo (anemia de trastornos crónicos, leucocitosis con neutrofilia y eosinofilia)', 'VSG elevada (marcador pronóstico adverso si >50 mm/h en estadios precoces)', 'Pruebas de función hepática, renal y serología de VIH y Hepatitis B/C'],
    imaging: ['PET-CT corporal total con 18-FDG (estándar de oro absoluto para estadificación según Ann Arbor y evaluación de respuesta con Escala de Deauville de 1 a 5)'],
    differential: ['Linfoma no Hodgkin', 'Mononucleosis infecciosa', 'Tuberculosis ganglionar (escrófula)', 'Sarcoidosis', 'Toxoplasmosis'],
    firstLine: [
      { drug: 'Quimioterapia de Primera Línea de referencia: Esquema ABVD', dose: 'Adriamicina (Doxorrubicina) 25 mg/m2 + Bleomicina 10 mg/m2 + Vinblastina 6 mg/m2 + Dacarbazina 375 mg/m2 EV los días 1 y 15 de cada ciclo cada 28 días (2 a 4 ciclos en estadios tempranos; 6 ciclos en avanzados)', route: 'EV', freq: 'Días 1 y 15 cada mes', notes: 'Estándar mundial clásico; alta tasa de curación (>85%); monitorizar toxicidad pulmonar por Bleomicina y cardíaca por Adriamicina' },
      { drug: 'PET Interino (PET-2) guiado por respuesta adaptada', dose: 'Evaluación con PET-CT tras el ciclo 2 de ABVD para desescalar toxicidad (omitir bleomicina si Deauville 1-3) o intensificar', route: 'PET-CT', freq: 'Tras ciclo 2', notes: 'Estrategia adaptada para reducir toxicidad pulmonar tardía' }
    ],
    alternatives: [
      { drug: 'Brentuximab Vedotina + AVD (en estadios avanzados III-IV)', dose: 'Brentuximab vedotina 1.2 mg/kg EV + AVD cada 2 semanas (reemplaza a la bleomicina)', route: 'EV', freq: 'Cada 14 días', notes: 'Inmunoconjugado anti-CD30 que incrementa la supervivencia libre de progresión sin toxicidad pulmonar' },
      { drug: 'Inhibidores de Checkpoint Anti-PD-1 (Nivolumab o Pembrolizumab) en recaídas', dose: 'Nivolumab 240 mg EV cada 2 semanas', route: 'EV', freq: 'c/2 semanas', notes: 'Excelente eficacia en refractarios por sobreexpresión del ligando PD-L1 en células de Reed-Sternberg' }
    ],
    nonPharm: ['Preservación de la fertilidad previa a la quimioterapia: criopreservación de semen en varones y congelación de ovocitos en mujeres jóvenes'],
    nursingCare: ['CONSEJERÍA OBLIGATORIA DE PRESERVACIÓN DE FERTILIDAD ANTES DE INICIAR QUIMIOTERAPIA: La mayoría de los pacientes con Linfoma de Hodgkin son adolescentes o adultos jóvenes de 18 a 30 años que van a curarse; es un derecho y deber de enfermería coordinar la congelación de semen o preservación ovárica antes del primer ciclo', 'Monitoreo de toxicidad pulmonar por Bleomicina: interrogar en cada ciclo si presenta tos seca irritativa nueva o disnea; auscultar crepitantes basales y realizar espirometría con DLCO', 'Vigilancia de extravasación de Doxorrubicina: fármaco vesicante potente; verificar retorno venoso estricto en catéter central antes y durante la infusión']
  },
  {
    number: 506,
    id: 'diag-506',
    title: 'Linfoma no Hodgkin difuso de células B grandes (LNH-DCBG)',
    cie10: 'C83.3',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El Linfoma No Hodgkin más común en el mundo y en el Perú (representa el 30-40% de todos los LNH del adulto), caracterizado por una proliferación tumoral difusa, clonal y agresiva de linfocitos B grandes maduros que destruyen la arquitectura normal del ganglio linfoide. De crecimiento clínico rápido ("agresivo"), potencialmente fatal en pocos meses sin tratamiento, pero altamente curable con inmunoquimioterapia moderna.',
    symptoms: ['APARICIÓN Y CRECIMIENTO RÁPIDO DE UNA MASA O ADENOPATÍA VOLUMINOSA INDOLORA (cervical, axilar o inguinal)', 'ALTA FRECUENCIA DE AFECTACIÓN EXTRANODAL (en hasta un 40%):', '- Linfoma gástrico/intestinal: dolor abdominal, masa palpable, sangrado digestivo u obstrucción', '- Afectación del anillo de Waldeyer (amígdalas hipertróficas asimétricas)', '- Afectación ósea, testicular, cutánea o del SNC', 'SÍNTOMAS B CONSTITUCIONALES (fiebre >38 °C, sudoración nocturna profusa y pérdida de peso >10%)', 'Compresión de estructuras vecinas por masas ganglionares retroperitoneales o mediastínicas'],
    redFlags: ['LINFOMA DOBLE HIT / TRIPLE HIT (reordenamiento simultáneo de los genes MYC y BCL2 o BCL6): subtipo de extrema resistencia a quimioterapia convencional con rápida progresión'],
    criteria: 'Biopsia escisional ganglionar o de tejido extranodal con inmunohistoquímica demostrando CD20+, proliferación difusa y alto índice Ki-67.',
    labTests: ['LDH sérica (marcador de masa tumoral y recambio celular, parte del score pronóstico IPI)', 'Hemograma, función renal y hepática', 'Serología para VIH, VHB (HBsAg y anti-HBc obligatorios) y VHC'],
    imaging: ['PET-CT corporal total con 18-FDG (imprescindible para estadificación Ann Arbor y evaluación de respuesta metabólica)', 'RM cerebral o punción lumbar si hay alto riesgo de infiltración del SNC (CNS-IPI)'],
    differential: ['Linfoma de Hodgkin', 'Linfoma folicular transformado (Síndrome de Richter)', 'Carcinoma metastásico indiferenciado', 'Linfoma de Burkitt'],
    firstLine: [
      { drug: 'Inmunoquimioterapia de Primera Línea Estándar: Esquema R-CHOP', dose: 'Rituximab 375 mg/m2 EV + Ciclofosfamida 750 mg/m2 EV + Doxorrubicina 50 mg/m2 EV + Vincristina 1.4 mg/m2 EV (máximo 2 mg) el Día 1 + Prednisona 100 mg/día VO durante los Días 1 a 5, administrado cada 21 DÍAS por 6 CICLOS', route: 'EV + VO', freq: 'Cada 21 días x 6 ciclos', notes: 'Estándar mundial indiscutible; el anticuerpo monoclonal anti-CD20 Rituximab incrementó la curación en >15-20% (alrededor del 65-70% de curación global)' }
    ],
    alternatives: [
      { drug: 'Esquema Polatuzumab vedotina + R-CHP (Ensayo POLARIX)', dose: 'Reemplazo de la vincristina por Polatuzumab vedotina (inmunoconjugado anti-CD79b)', route: 'EV', freq: 'Cada 21 días', notes: 'Nuevo estándar que reduce la progresión en pacientes con IPI 2 a 5' },
      { drug: 'Terapia con Células CAR-T (Axicabtagene ciloleucel o Lisocabtagene maraleucel) en recaídas', dose: 'Infusión celular autóloga modificada anti-CD19', route: 'Celular EV', freq: 'Dosis única', notes: 'Curación en 40-50% de pacientes refractarios a quimioterapia de rescate' }
    ],
    nonPharm: ['Profilaxis obligatoria con Entecavir si el paciente tiene serología positiva para Hepatitis B (anti-HBc positivo) para prevenir reactivación fulminante por Rituximab'],
    nursingCare: ['PREVENCIÓN DE REACTIVACIÓN DE HEPATITIS B POR RITUXIMAB: Verificar en la historia clínica el perfil de hepatitis B antes de iniciar Rituximab; el rituximab barre los linfocitos B y puede detonar una hepatitis fulminante mortal por reactivación del VHB; asegurar profilaxis con Entecavir', 'PREMEDICACIÓN Y MONITOREO DE REACCIONES A LA INFUSIÓN DE RITUXIMAB: Premedicar siempre 30 min antes con Paracetamol 1 g VO + Clorfenamina 10 mg EV + Hidrocortisona 100 mg EV; iniciar la infusión muy lentamente (50 mg/h) e incrementar cada 30 min monitorizando escalofríos, fiebre, hipotensión o broncoespasmo', 'Filgrastim (G-CSF): administrar factor estimulante de colonias de granulocitos subcutáneo entre los días 6 al 10 de cada ciclo para prevenir la neutropenia febril grave']
  },
  {
    number: 507,
    id: 'diag-507',
    title: 'Mieloma múltiple (Mieloma de células plasmáticas)',
    cie10: 'C90.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia hematológica clonal incurable pero tratable caracterizada por la proliferación maligna de células plasmáticas en la médula ósea que producen una inmunoglobulina monoclonal o fragmento de la misma (PROTEÍNA M O COMPONENTE MONOCLONAL: IgG en 55%, IgA en 20%, o cadenas ligeras libres kappa/lambda en 20%). Conduce al daño orgánico multiorgánico definido clásicamente por los CRITERIOS CRAB.',
    symptoms: ['TÉTRADA CLÁSICA DE DAÑO ORGÁNICO "CRAB":', '- C (HIPERCALCEMIA >11 mg/dL): náuseas, vómitos, estreñimiento severo, debilidad muscular profunda, confusión mental o letargo', '- R (INSUFICIENCIA RENAL / Cr >2.0 mg/dL): "RIÑÓN DE MIELOMA" (nefropatía por cilindros de cadenas ligeras que taponan y destruyen los túbulos renales sin edema marcado)', '- A (ANEMIA NORMOCÍTICA NORMOCRÓMICA <10 g/dL): astenia intensa, palidez y fatigabilidad por desplazamiento medular masivo', '- B (ENFERMEDAD ÓSEA / BONE LESIONS): DOLOR ÓSEO MECÁNICO SEVERO PERSISTENTE en columna lumbar, costillas y pelvis que empeora con el movimiento; FRACTURAS PATOLÓGICAS ante mínimos esfuerzos (colapso de cuerpos vertebrales con pérdida de estatura)', 'Infecciones bacterianas recurrentes graves (neumonías, sepsis por hipogammaglobulinemia funcional de anticuerpos normales)', 'Síndrome de hiperviscosidad: cefalea, visión borrosa y hemorragias retinianas'],
    redFlags: ['COMPRESIÓN MEDULAR AGUDA por colapso vertebral o plasmocitoma epidural', 'INSUFICIENCIA RENAL AGUDA ANÚRICA por cadenas ligeras tóxicas'],
    criteria: 'Criterios IMWG: >=10% de células plasmáticas clonales en médula ósea (o plasmocitoma) MÁS al menos un criterio CRAB o un biomarcador de malignidad (SLiM: 60% células plasmáticas, ratio de cadenas ligeras libres >=100, >1 lesión focal en RM).',
    labTests: ['Proteinograma electroforético en suero y orina de 24 horas con Inmunofijación (demuestra PICO MONOCLONAL estrecho en banda gamma)', 'Dosaje de Cadenas Ligeras Libres en suero (Kappa y Lambda) y su ratio', 'Aspirado y Biopsia de Médula Ósea con citometría e hibridación in situ (FISH: del(17p), t(4;14), t(14;16) de alto riesgo)', 'Calcio iónico, creatinina, urea, albúmina y Beta-2-Microglobulina (estadificación R-ISS)'],
    imaging: ['TC corporal total de baja dosis (estándar de oro moderno: demuestra LESIONES LÍTICAS EN "SACA BOCADOS O EN PERDIGONADA" típicas en calota craneal y huesos largos)', 'RM de columna y pelvis entera (la técnica más sensible para detectar lesiones focales precoces antes de que haya destrucción ósea)'],
    differential: ['Gammapatía monoclonal de significado incierto (GMSI / MGUS: <10% células plasmáticas, sin CRAB)', 'Mieloma quiescente o smoldering', 'Metástasis óseas osteolíticas de tumores sólidos (mama, pulmón)'],
    firstLine: [
      { drug: 'Tratamiento de Inducción en Pacientes Candidatos a Trasplante (menores de 65-70 años): Triplete VRd o Cuadruplete con Daratumumab', dose: 'Bortezomib 1.3 mg/m2 SC semanal + Lenalidomida 25 mg VO días 1 a 14 + Dexametasona 40 mg VO semanal (VRd) por 4 a 6 ciclos, seguido de TRASPLANTE AUTÓLOGO DE MÉDULA ÓSEA (TAMO)', route: 'SC + VO', freq: 'Ciclos de 21 días', notes: 'Esquema de referencia mundial; Bortezomib (inhibidor del proteasoma) es seguro incluso con fallo renal severo' },
      { drug: 'Tratamiento de Primera Línea en Pacientes No Candidatos a Trasplante (Ancianos frágiles): Esquema Dara-Rd', dose: 'Daratumumab (anti-CD38) EV/SC + Lenalidomida 25 mg VO + Dexametasona 20-40 mg VO', route: 'SC/EV + VO', freq: 'Ciclos de 28 días', notes: 'Supervivencia libre de progresión superior a 5 años sin toxicidad de quimioterapia citotóxica clásica' },
      { drug: 'Tratamiento Óseo Antirresortivo Obligatorio: Ácido Zoledrónico endovenoso', dose: '4 mg EV en infusión lenta en 15-30 minutos cada 4 semanas durante 2 años (ajustar dosis según filtrado glomerular)', route: 'EV mensual', freq: 'Mensual x 2 años', notes: 'Reduce las fracturas óseas patológicas, alivia el dolor óseo y controla la hipercalcemia; profilaxis dental obligatoria' }
    ],
    alternatives: [
      { drug: 'Nuevas Terapias Celulares e Inmunoterapia Biespecífica en Recaídas', dose: 'Teclistamab (biespecífico BCMA/CD3) o Ciltacabtagene autoleucel (CAR-T anti-BCMA)', route: 'SC / Celular EV', freq: 'Protocolo de rescate', notes: 'Respuestas masivas en mieloma multirrefractario' }
    ],
    nonPharm: ['HIDRATACIÓN ABUNDANTE (>2 a 3 Litros diarios de agua) para prevenir la precipitación tubular de cadenas ligeras', 'Evitar rigurosamente AINEs y contrastes yodados radiológicos (nefrotoxicidad letal en mieloma)'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA DE AINEs EN MIELOMA MÚLTIPLE: Pacientes con dolor óseo intenso NUNCA deben recibir Naproxeno, Ibuprofeno o Ketorolaco; los AINEs bloquean las prostaglandinas renales y causan fallo renal irreversible fulminante; usar Paracetamol u opioides (Tramadol, Buprenorfina)', 'REVISIÓN ODONTOLÓGICA PREVIA A BIFOSFONATOS: Exigir examen dental antes de iniciar Ácido Zoledrónico por riesgo de Osteonecrosis de la mandíbula; prohibir extracciones dentales invasivas durante el tratamiento', 'Prevención de Neuropatía periférica por Bortezomib: administrar Bortezomib SIEMPRE POR VÍA SUBCUTÁNEA (la vía subcutánea reduce la neuropatía en un 70% comparada con la EV)', 'Profilaxis antitrombótica: todo paciente que reciba Lenalidomida debe tomar Aspirina 100 mg o heparina por alto riesgo de trombosis venosa profunda']
  },
  {
    number: 508,
    id: 'diag-508',
    title: 'Cáncer de páncreas (Adenocarcinoma ductal pancreático)',
    cie10: 'C25.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna de extrema agresividad biológica derivada del epitelio de los conductos pancreáticos (en 70% localizado en la cabeza del páncreas), con una de las tasas de letalidad más altas en oncología (supervivencia global a 5 años <10%). Presenta una estroma desmoplásica densa hipovascular que dificulta la llegada de fármacos y una rápida invasión perineural y vascular precoz.',
    symptoms: ['ICTERICIA OBSTRUCTIVA SILENCIOSA Y PROGRESIVA ("ictericia indolora con acolia y coluria oscura")', 'PRURITO GENERALIZADO INTENSO por acumulación de sales biliares en la piel', 'SIGNO DE COURVOISIER-TERRIER PATOGNOMÓNICO: VESÍCULA BILIAR PALPABLE DISTENDIDA E INDOLORA en hipocondrio derecho en presencia de ictericia (indica obstrucción maligna del colédoco distal, no litiásica)', 'DOLOR EPIGÁSTRICO SORDO, PROFUNDO, CONTINUO QUE SE IRRADIA EN FAJA HACIA LA ESPALDA y alivia parcialmente al inclinarse hacia adelante (posición mahometana)', 'Pérdida de peso involuntaria masiva, caquexia y anorexia precoz', 'DEBUT O DESCOMPENSACIÓN BRUSCA DE DIABETES MELLITUS en adultos mayores de 50 años sin antecedentes familiares', 'Tromboflebitis migratoria recurrente espontánea (Signo de Trousseau de malignidad)'],
    redFlags: ['Invasión circunferencial (>180°) del tronco celíaco o de la arteria mesentérica superior (tumor irresecable)'],
    criteria: 'Masa pancreática con estenosis de la vía biliar y conducto de Wirsung ("signo del doble conducto") confirmada por ecoendoscopia con PAAF o TC.',
    labTests: ['Marcador tumoral CA 19-9 sérico (elevado en >80%, útil para pronóstico y monitorización de respuesta)', 'Bilirrubina total a expensas de la directa, fosfatasa alcalina y GGT muy elevadas'],
    imaging: ['TC helicoidal trifásica de páncreas con contraste ("Protocolo de Páncreas": estándar de oro para resecabilidad vascular)', 'Colangiorresonancia magnética y Ecoendoscopia (USE con punción biópsica guiada)'],
    differential: ['Pancreatitis crónica autoinmune (tipo 1 o 2)', 'Ampuloma o colangiocarcinoma distal', 'Quistes pancreáticos mucinosos (IPMN)'],
    firstLine: [
      { drug: 'Tumor resecable de cabeza de páncreas: Duodenopancreatectomía Cefálica (Operación de Whipple)', dose: 'Resección en bloque de cabeza de páncreas, duodeno, vesícula, colédoco distal y antro gástrico con reconstrucción pancreatoyeyunal, hepatoyeyunal y gastroyeyunal', route: 'Quirúrgico oncológico mayor', freq: 'Procedimiento curativo', notes: 'Única opción potencialmente curativa; solo el 15-20% son resecables al momento del diagnóstico' },
      { drug: 'Quimioterapia adyuvante o de primera línea avanzada: Esquema FOLFIRINOX modificado', dose: 'Oxaliplatino 85 mg/m2 + Irinotecán 150 mg/m2 + Leucovorina 400 mg/m2 + 5-Fluorouracilo 2400 mg/m2 en infusión continua de 46h cada 14 días', route: 'EV en infusión', freq: 'Cada 14 días', notes: 'Esquema de máxima eficacia que duplica la supervivencia en pacientes con buen estado general (ECOG 0-1)' }
    ],
    alternatives: [
      { drug: 'Gemcitabina + Nab-Paclitaxel', dose: 'Nab-Paclitaxel 125 mg/m2 + Gemcitabina 1000 mg/m2 EV los días 1, 8 y 15 de cada ciclo de 28 días', route: 'EV', freq: 'Días 1, 8, 15 de 28 días', notes: 'Alternativa preferente en pacientes de edad avanzada o con menor tolerancia a FOLFIRINOX' },
      { drug: 'Colocación de Stent o Prótesis Biliar autoexpandible metálica por CPRE', dose: 'Descompresión paliativa de la vía biliar mediante endoscopia', route: 'Endoscópica', freq: 'Procedimiento intervencionista', notes: 'Alivia rápidamente la ictericia y el prurito intolerable' }
    ],
    nonPharm: ['Suplementación enzimática pancreática oral (Pancreatina con las comidas) para tratar la esteatorrea y malabsorción'],
    nursingCare: ['VIGILANCIA DEL SIGNO DE COURVOISIER-TERRIER: En todo paciente que ingresa ictérico al servicio de salud, palpar suavemente el hipocondrio derecho; la palpación de una vesícula redonda blanda e indolora descarta cólico biliar litiásico y apunta a neoplasia de páncreas o vía biliar', 'Alivio del prurito por colestasis: baños de agua templada, cremas hidratantes frías con mentol y administración de Colestiramina oral separada de otros fármacos', 'Monitoreo de glicemias y esteatorrea post-Whipple: educar sobre el uso de enzimas pancreáticas (ingerir las cápsulas enteras durante los primeros bocados de cada comida)']
  },
  {
    number: 509,
    id: 'diag-509',
    title: 'Cáncer de endometrio (Adenocarcinoma endometrial)',
    cie10: 'C54.1',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia ginecológica maligna derivada del revestimiento epitelial de la cavidad uterina (endometrio). Es el cáncer ginecológico más frecuente en países desarrollados, prevalente en mujeres postmenopáusicas (mediana 60-65 años). Se divide clásicamente en Tipo I (Endometrioide, 80-85%, dependiente de hiperestrogenismo no contrarrestado, obesidad, diabetes, excelente pronóstico) y Tipo II (Seroso o de Células Claras, 15%, no hormonal, mutación TP53, muy agresivo).',
    symptoms: ['SANGRADO UTERINO ANÓMALO POSTMENOPÁUSICO (presente en >90% de los casos): "cualquier sangrado ginecológico en una mujer postmenopáusica es cáncer de endometrio hasta demostrar lo contrario"', 'En mujeres pre o perimenopáusicas: menorragias copiosas o metrorragias intermenstruales rebeldes', 'Leucorrea rosada, sanguinolenta o fétida espesa', 'Dolor o pesadez pélvica sorda en fases más avanzadas', 'Hematómetra o piómetra (acumulación de sangre o pus en cavidad uterina por estenosis cervical)'],
    redFlags: ['TODO SANGRADO POSTMENOPÁUSICO EXIGE EVALUACIÓN HISTOPATOLÓGICA ENDOMETRIAL INMEDIATA'],
    criteria: 'Biopsia endometrial por aspiración (cánula de Cornier/Pipelle) o histeroscopia con biopsia dirigida demostrando adenocarcinoma.',
    labTests: ['Marcador tumoral CA-125 sérico (útil en estadios avanzados o serosos)', 'Estudio molecular TCGA / FIGO 2023 (POLE mutado, dMMR/MSI-H, p53 anormal)'],
    imaging: ['Ecografía transvaginal ginecológica: GROSOR ENDOMETRIAL ANORMAL (>4 a 5 mm en mujer postmenopáusica sin TRH es patológico y exige biopsia)', 'RM de pelvis con contraste (estándar para medir profundidad de invasión miometrial y afectación cervical)'],
    differential: ['Atrofia endometrial senil (la causa benigna más común de sangrado postmenopáusico)', 'Pólipo endometrial benigno', 'Hiperplasia endometrial con o sin atipia', 'Miomatosis uterina'],
    firstLine: [
      { drug: 'Tratamiento Quirúrgico Estándar: Histerectomía Total con Doble Anexectomía + Mapeo de Ganglio Centinela', dose: 'Histerectomía total extrafascial con salpingooforectomía bilateral por vía laparoscópica + biopsia del ganglio centinela pélvico con verde de indocianina', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'Tratamiento curativo de elección; la estadificación es quirúrgica (FIGO)' },
      { drug: 'Radioterapia adyuvante (Braquiterapia de cúpula vaginal o Radioterapia externa pélvica)', dose: 'Braquiterapia vaginal de alta tasa de dosis en riesgo intermedio para prevenir recidivas en la cúpula', route: 'Radioterapia', freq: 'Según estadio FIGO', notes: 'Excelente control local en márgenes cercanos o invasión miometrial profunda' }
    ],
    alternatives: [
      { drug: 'Inmunoterapia con Pembrolizumab + Lenvatinib (en enfermedad avanzada o recurrente)', dose: 'Pembrolizumab 200 mg EV c/3 semanas + Lenvatinib 20 mg VO diario', route: 'EV + VO', freq: 'Protocolo oncológico', notes: 'Aprobado para cáncer endometrial avanzado no MSI-H con gran beneficio en supervivencia' },
      { drug: 'Dostarlimab o Pembrolizumab en monoterapia si presenta Inestabilidad de Microsatélites (dMMR / MSI-H)', dose: 'Dostarlimab 500 mg EV c/3 semanas', route: 'EV', freq: 'c/3 semanas', notes: 'Tasa de respuesta muy alta y prolongada en tumores con déficit de reparación' }
    ],
    nonPharm: ['Control estricto de la obesidad y diabetes (factores de riesgo modificables mayores por aromatización periférica de andrógenos a estrógenos en tejido adiposo)'],
    nursingCare: ['EDUCACIÓN DE ALERTA ROJA EN SALUD FEMENINA: Educar a las mujeres menopáusicas que "el sangrado después de la menopausia NO es un regreso de la menstruación o algo natural", sino un signo de alarma grave que exige acudir de inmediato al ginecólogo para ecografía transvaginal', 'Vigilancia de grosor endometrial ecográfico: recordar que un endometrio >4 mm en la postmenopausia no debe dejarse en observación sin biopsia', 'Cuidados post-histerectomía: profilaxis de trombosis venosa profunda con heparina y deambulación precoz']
  },
  {
    number: 510,
    id: 'diag-510',
    title: 'Cáncer de ovario epitelial (Carcinoma seroso de alto grado)',
    cie10: 'C56',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La neoplasia ginecológica más letal, caracterizada por su crecimiento insidioso y asintomático en fases iniciales ("el asesino silencioso de la mujer"), diagnosticándose en más del 70-75% de los casos en estadios avanzados (FIGO III o IV) con carcinomatosis peritoneal. El subtipo seroso de alto grado es el más frecuente (70%) y se origina predominantemente en las fimbrias de las trompas de Falopio, fuertemente asociado a mutaciones en genes BRCA1 y BRCA2.',
    symptoms: ['SÍNTOMAS ABDOMINALES INSIDIOSOS Y TARDÍOS (presentes durante semanas o meses antes del diagnóstico):', '- AUMENTO PROGRESIVO DEL PERÍMETRO ABDOMINAL POR ASCITIS MALIGNA RÁPIDA ("la ropa o falda ya no le abotona")', '- Distensión abdominal persistente ("hinchazón que no cede con digestivos")', '- Saciedad precoz tras comer pequeñas porciones de alimentos', '- Dolor o pesadez pélvico-abdominal sorda continua', '- Urgencia o polaquiuria miccional por compresión vesical', '- Trastornos del hábito intestinal (estreñimiento progresivo o suboclusión)', '- Pérdida involuntaria de peso paradójica con abdomen prominente globuloso'],
    redFlags: ['ASCITIS MALIGNA MASIVA CON DISNEA POR DERRAME PLEURAL METASTÁSICO (Síndrome de Pseudo-Meigs neoplásico)', 'Obstrucción intestinal carcinomatosa aguda'],
    criteria: 'Sospecha por masa anexial compleja y CA-125 elevado con confirmación histopatológica por laparotomía/laparoscopia.',
    labTests: ['Marcador tumoral CA-125 sérico (elevado en >85% de carcinomas serosos)', 'Marcador HE4 sérico y Algoritmo ROMA (mejora la especificidad diferenciando quistes benignos)', 'Estudio genético de mutaciones germinales y somáticas BRCA1 y BRCA2 (imprescindible para tratamiento con inhibidores de PARP)'],
    imaging: ['Ecografía transvaginal con Doppler color (criterios IOTA de malignidad: masa sólida irregular multilocular, proyecciones papilares vascularizadas y ascitis)', 'TC de tórax, abdomen y pelvis con contraste (estadiaje de carcinomatosis y adenopatías)'],
    differential: ['Endometriosis pélvica profunda (quiste de chocolate con CA-125 moderadamente elevado)', 'Cistoadenoma ovárico benigno', 'Cáncer de colon metastásico ovárico (Tumor de Krukenberg)', 'Cirrosis hepática con ascitis'],
    firstLine: [
      { drug: 'CIRUGÍA CITORREDUCTORA PRIMARIA RADICAL (CIRUGÍA DE "DEBULKING" O CITOREDUCCIÓN COMPLETA R0)', dose: 'Laparotomía xifopúbica con histerectomía total, doble anexectomía, omentectomía infracólica/supracólica, peritonectomías y resección de todos los implantes peritoneales visibles', route: 'Quirúrgico oncológico mayor', freq: 'Procedimiento curativo', notes: 'EL FACTOR PRONÓSTICO MÁS IMPORTANTE; el objetivo es la Citorreducción Completa R0 (cero enfermedad residual macroscópica)' },
      { drug: 'Quimioterapia de Primera Línea de referencia: Carboplatino + Paclitaxel', dose: 'Carboplatino AUC 5-6 EV + Paclitaxel 175 mg/m2 EV en infusión de 3 horas cada 21 días durante 6 ciclos (asociado a Bevacizumab si alto riesgo)', route: 'EV', freq: 'Cada 21 días x 6 ciclos', notes: 'Esquema estándar de máxima quimiosensibilidad platino-dependiente' }
    ],
    alternatives: [
      { drug: 'Terapia de Mantenimiento con Inhibidores de PARP: Olaparib o Niraparib oral', dose: 'Olaparib 300 mg VO cada 12 horas durante 2 años (en pacientes con mutación BRCA1/2 positiva); o Niraparib diario', route: 'VO', freq: 'c/12h continuo', notes: 'REVOLUCIÓN HISTÓRICA EN CÁNCER DE OVARIO: Aumenta la supervivencia libre de progresión de meses a años bloqueando la reparación del ADN' }
    ],
    nonPharm: ['Salpingooforectomía bilateral profiláctica reductora de riesgo en mujeres portadoras sanas de mutación BRCA1/2 a partir de los 35 a 40 años'],
    nursingCare: ['RECONOCIMIENTO DE SÍNTOMAS SOSPECHOSOS EN ATENCIÓN PRIMARIA: Educar que síntomas vagos de hinchazón de vientre, saciedad precoz y dolor pélvico casi todos los días durante más de 3 semanas en mujeres mayores de 45 años NO deben despacharse como "colon irritable", sino estudiarse con ecografía transvaginal', 'Manejo de la Paracentesis Evacuadora de Ascitis: monitorizar presión arterial durante la evacuación; reponer Albúmina Humana al 20% (8 gramos por cada litro de líquido ascítico extraído a partir del 5to litro)', 'Vigilancia de reacciones alérgicas agudas a Carboplatino (frecuentes a partir del 6to ciclo de tratamiento)']
  },
  {
    number: 511,
    id: 'diag-511',
    title: 'Carcinoma de células renales (Cáncer de riñón de células claras)',
    cie10: 'C64',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna primaria del parénquima renal derivada del epitelio del túbulo contorneado proximal, constituida en el 75-80% por el subtipo de Células Claras (vinculado a la pérdida o mutación del gen supresor tumoral VHL en el cromosoma 3p con hiperactivación del factor HIF y angiogénesis masiva mediada por VEGF). En más del 50-60% de los casos se diagnostica incidentalmente como hallazgo ecográfico.',
    symptoms: ['Fase temprana: COMPLETAMENTE ASINTOMÁTICO ("incidentaloma renal en ecografía rutinaria")', 'TRÍADA CLÁSICA DE GUYON O VIRCHOW (presente en <10% y refleja enfermedad muy avanzada):', '- HEMATURIA MACROSCÓPICA INDOLORA TOTAL', '- DOLOR SORDO CONTINUO EN FLANCO O FOSA LUMBAR', '- MASA ABDOMINAL O LUMBAR PALPABLE', 'Varicocele izquierdo agudo de nueva aparición que NO se reduce en decúbito supino (por invasión tumoral de la vena renal izquierda que bloquea la vena espermática)', 'SÍNDROMES PARANEOPLÁSICOS FRECUENTES (en hasta 20-30%):', '- HIPERCALCEMIA MALIGNA (por producción de PTHrp)', '- POLIGLOBULIA / ERITROCITOSIS (por producción excesiva de eritropoyetina por el tumor)', '- Hipertensión arterial secundaria por secreción de renina y Síndrome de Stauffer (disfunción hepática reversible sin metástasis)'],
    redFlags: ['TROMBO TUMORAL EN VENA CAVA INFERIOR (extensión del trombo desde la vena renal hacia la cava y aurícula derecha; alto riesgo de embolia tumoral mortal)'],
    criteria: 'Lesión sólida renal cortical hipervascular con realce en fase corticomedular en TC contrastada.',
    labTests: ['Hemograma (poliglobulia o anemia), calcio sérico, fosfatasa alcalina y función renal', 'Examen de orina (microhematuria persistente)'],
    imaging: ['TC trifásica de abdomen y pelvis con contraste (estándar de oro: masa cortical exofítica hipercaptante con lavado precoz)', 'RM abdominal con contraste (técnica de elección si hay sospecha de trombo en vena cava inferior o alergia al yodo)'],
    differential: ['Oncocitoma renal benigno', 'Angiomiolipoma renal (contiene grasa macroscópica negativa en TC)', 'Quiste renal complejo (Bosniak III o IV)', 'Absceso renal'],
    firstLine: [
      { drug: 'Nefrectomía Parcial conservadora de nefronas (Tratamiento de Elección en tumores T1 <=7 cm)', dose: 'Extirpación quirúrgica laparoscópica o robótica exclusivamente del tumor con margen libre preservando el resto del riñón sano', route: 'Quirúrgico urológico', freq: 'Procedimiento curativo', notes: 'Estándar curativo moderno; preserva la función renal a largo plazo evitando la diálisis crónica' },
      { drug: 'Nefrectomía Radical (en tumores grandes T2 o infiltrantes)', dose: 'Resección completa del riñón, fascia de Gerota y glándula suprarrenal si procede', route: 'Quirúrgico', freq: 'Procedimiento definitivo', notes: 'Indicada si el tumor no es técnicamente resecable de forma parcial' }
    ],
    alternatives: [
      { drug: 'Tratamiento de Primera Línea en Enfermedad Metastásica: Doble Inmunoterapia o Inmuno-TKI', dose: 'Nivolumab 3 mg/kg + Ipilimumab 1 mg/kg EV cada 3 semanas por 4 dosis; o Pembrolizumab EV + Axitinib 5 mg VO cada 12h', route: 'EV + VO', freq: 'Protocolo oncológico', notes: 'Reemplazaron completamente a los antiguos fármacos; logran respuestas completas duraderas en cáncer renal metastásico' },
      { drug: 'Técnicas de Ablación Térmica (Crioablación o Radiofrecuencia percutánea)', dose: 'Ablación guiada por TC en tumores pequeños <3 cm en ancianos con alto riesgo quirúrgico', route: 'Intervencionista percutáneo', freq: 'Procedimiento único', notes: 'Excelente control local con mínima invasión' }
    ],
    nonPharm: ['Control del tabaquismo y de la hipertensión arterial (principales factores de riesgo adquiridos)'],
    nursingCare: ['CUIDADOS POST-NEFRECTOMÍA DE ENFERMERÍA: Monitoreo estricto de la diuresis horaria con sonda Foley en las primeras 24 horas; alertar si la diuresis cae por debajo de 0.5 mL/kg/h (riesgo de compromiso del riñón contralateral restante)', 'Inspección de apósitos y drenajes quirúrgicos (drenaje de Penrose o Jackson-Pratt): cuantificar débito hemático buscando hemorragia retroperitoneal aguda precoz', 'Protección del riñón único restante: educar al paciente a evitar de por vida el consumo habitual de fármacos nefrotóxicos (AINEs como Ibuprofeno o Ketorolaco), mantener hidratación adecuada y controlar la presión arterial']
  },
  {
    number: 512,
    id: 'diag-512',
    title: 'Cáncer de vejiga urinaria (Carcinoma urotelial de vejiga)',
    cie10: 'C67.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Segunda neoplasia urológica más prevalente, originada en el urotelio que tapiza la cavidad vesical (90-95% carcinomas uroteliales o de células transicionales). El factor de riesgo etiológico principal es el TABAQUISMO (responsable del 50% de los casos) y la exposición laboral a aminas aromáticas (tintes, pinturas, caucho). Se clasifica fundamentalmente en No Músculo-Infiltrante (75%, superficial) y Músculo-Infiltrante (25%, invasión del músculo detrusor con alto riesgo metastásico).',
    symptoms: ['HEMATURIA MACROSCÓPICA INDOLORA, TOTAL, CAPRICHOSA E INTERMITENTE ("el signo cardinal de debut en >85% de los pacientes; orina roja con o sin coágulos que desaparece espontáneamente y reaparece días después")', 'Síndrome miccional irritativo refractario sin infección bacteriana demostrable: polaquiuria intensa, urgencia miccional y disuria (frecuente en Carcinoma in situ / CIS vesical)', 'En enfermedad avanzada invasora: dolor pélvico o hipogástrico continuo, dolor lumbar por hidronefrosis obstructiva ureteral y edema de miembros inferiores'],
    redFlags: ['TODA HEMATURIA MACROSCÓPICA INDOLORA EN UN ADULTO FUMADOR ES UN CÁNCER DE VEJIGA HASTA DEMOSTRAR LO CONTRARIO MEDIANTE CISTOSCOPIA'],
    criteria: 'Cistoscopia con Resección Transuretral de Tumor Vesical (RTU-V) completa incluyendo capa muscular para confirmación histopatológica de invasión del detrusor.',
    labTests: ['Citología urinaria seriada (alta sensibilidad para Carcinoma in situ de alto grado)', 'Examen de orina completo y urocultivo'],
    imaging: ['Uro-TC con contraste (evalúa defectos de llenado vesicales y todo el tracto urinario superior: uréteres y pelvis renal)', 'Ecografía urológica con vejiga llena'],
    differential: ['Cistitis bacteriana hemorrágica', 'Litiasis vesical o ureteral', 'Hiperplasia prostática benigna sangrante', 'Tuberculosis urogenital'],
    firstLine: [
      { drug: 'Cáncer No Músculo-Infiltrante (Ta, T1): Resección Transuretral (RTU-V) + Instilaciones con BCG', dose: 'RTU-V completa del tumor + Quimioterapia tópica inmediata post-RTU con Mitomicina C intravesical; seguido de ciclo de inducción con BACILO DE CALMETTE-GUÉRIN (BCG intravesical semanal por 6 semanas) + mantenimiento', route: 'Intravesical por sonda vesical', freq: 'Protocolo de instilación', notes: 'Inmunoterapia tópica de referencia; frena drásticamente la tasa de recidiva y progresión invasora' },
      { drug: 'Cáncer Músculo-Infiltrante (T2 a T4a): Quimioterapia Neoadyuvante con Cisplatino + CISTECTOMÍA RADICAL', dose: '4 ciclos de Gemcitabina/Cisplatino EV preoperatorios, seguido de Cistoprostatectomía radical en varones (o Exenteración anterior en mujeres) con Linfadenectomía pélvica extendida y derivación urinaria (Conducto ileal de Bricker o Neovejiga ortotópica)', route: 'EV + Quirúrgico mayor', freq: 'Procedimiento curativo', notes: 'Tratamiento curativo estándar de referencia en enfermedad invasora de la capa muscular' }
    ],
    alternatives: [
      { drug: 'Enfermedad Metastásica: Enfortumab vedotina + Pembrolizumab (Ensayo EV-302)', dose: 'Enfortumab vedotina (inmunoconjugado anti-Nectina-4) 1.25 mg/kg EV + Pembrolizumab 200 mg EV', route: 'EV', freq: 'Ciclos de 21 días', notes: 'Nuevo estándar mundial de primera línea que duplica la supervivencia frente a la quimioterapia clásica' }
    ],
    nonPharm: ['ABANDONO INMEDIATO Y ABSOLUTO DEL TABAQUISMO', 'Ingesta hídrica abundante (>2.5 L/día)'],
    nursingCare: ['PROTOCOLO DE SEGURIDAD EN INSTILACIÓN INTRAVESICAL DE BCG DE ENFERMERÍA:', '1. La BCG contiene bacterias vivas atenuadas de Mycobacterium bovis; manipular con guantes dobles, bata impermeable, mascarilla y gafas protectoras', '2. Colocar sonda vesical, vaciar completamente la orina, instilar la suspensión de BCG y pinzar o retirar sonda; pedir a la paciente RETENER LA SOLUCIÓN EN LA VEJIGA DURANTE 2 HORAS cambiando de posición cada 15 min (decúbito supino, prono, lateral derecho e izquierdo)', '3. Desinfección de la orina: verter dos tazas de lejía doméstica sin diluir en la taza del inodoro tras las dos primeras micciones post-instilación y dejar actuar 15 min antes de tirar de la cadena', 'Vigilancia de sepsis por BCG: alertar ante fiebre >38.5 °C o escalofríos intensos (requiere suspensión de BCG y tuberculostáticos)']
  },
  {
    number: 513,
    id: 'diag-513',
    title: 'Cáncer de esófago (Carcinoma epidermoide y Adenocarcinoma esofágico)',
    cie10: 'C15.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna de mal pronóstico del tracto digestivo superior, con dos subtipos biológicos distintos: Carcinoma Epidermoide (predominante en tercio medio y superior, asociado al consumo intenso de tabaco, alcohol y bebidas muy calientes) y Adenocarcinoma (predominante en tercio distal y unión esofagogástrica, derivado del reflujo gastroesofágico crónico y Metaplasia de Esófago de Barrett en obesos).',
    symptoms: ['DISFAGIA MECÁNICA PROGRESIVA, LENTA E INEXORABLE ("dificultad para tragar que inicia primero con alimentos sólidos duros como carne o pan, progresa a semisólidos/papillas y finalmente a líquidos y saliva")', 'PÉRDIDA DE PESO MASIVA, RÁPIDA E INVOLUNTARIA con caquexia y desnutrición severa', 'Odinofagia (dolor retroesternal lacerante al tragar)', 'Regurgitación de alimentos no digeridos, sialorrea espesa continua y halitosis fétida', 'Aspiración pulmonar con tos espasmódica y neumonías recurrentes', 'Disfonía por invasión del nervio laríngeo recurrente o dolor dorsal continuo por invasión aórtica/vertebral'],
    redFlags: ['FÍSTULA TRAQUEOESOFÁGICA TUMORAL (tos explosiva con asfixia inmediata al ingerir líquidos por paso directo a la vía aérea)'],
    criteria: 'Endoscopia digestiva alta con toma de biopsias múltiples de la masa estenosante confirmando malignidad.',
    labTests: ['Hemograma completo (anemia), albúmina y proteínas totales (evaluación del estado nutricional crítico)'],
    imaging: ['Ecoendoscopia esofágica (EUS: el método más preciso para determinar profundidad T y ganglios N)', 'TC de cuello, tórax y abdomen con contraste (estadiaje locorregional y metástasis pulmonares/hepáticas)', 'PET-CT con 18-FDG'],
    differential: ['Acalasia esofágica (disfagia motora a sólidos y líquidos desde el inicio)', 'Estenosis esofágica péptica benigna', 'Espasmo esofágico difuso'],
    firstLine: [
      { drug: 'Enfermedad localmente avanzada resecable: Quimiorradioterapia Neoadyuvante (Protocolo CROSS) + Esofagectomía', dose: 'Carboplatino AUC 2 + Paclitaxel 50 mg/m2 EV semanal por 5 semanas + Radioterapia externa fraccionada concomitante (41.4 Gy), seguido de Esofagectomía transtorácica con linfadenectomía y ascenso gástrico (Técnica de Ivor Lewis)', route: 'EV + Radioterapia + Cirugía', freq: 'Protocolo multimodal', notes: 'Estándar mundial que duplica la supervivencia frente a la cirugía sola; logra esterilización tumoral completa en >30-40%' }
    ],
    alternatives: [
      { drug: 'Colocación endoscópica de Prótesis o Stent Esofágico metálico autoexpandible (SEMS)', dose: 'Despliegue de prótesis esofágica cubierta a través de la estenosis tumoral bajo visión endoscópica', route: 'Endoscópica', freq: 'Procedimiento paliativo', notes: 'Tratamiento paliativo de primera elección para restaurar la deglución oral y sellar fístulas traqueoesofágicas en tumores irresecables' },
      { drug: 'Inmunoterapia con Nivolumab adyuvante', dose: '240 mg EV cada 2 semanas por 1 año si hay enfermedad residual patológica post-CROSS', route: 'EV', freq: 'c/2 semanas x 1 año', notes: 'Duplica la supervivencia libre de enfermedad postoperatoria' }
    ],
    nonPharm: ['COLOCACIÓN DE SONDA DE ALIMENTACIÓN ENTERAL (Yeyunostomía de alimentación) precoz antes o durante la quimioterapia para revertir la desnutrición'],
    nursingCare: ['MANEJO DE LA DISFAGIA SEVERA DE ENFERMERÍA: Adaptar estrictamente la textura de los alimentos con espesantes comerciales; fraccionar en tomas pequeñas; NO insistir en sólidos si el paciente presenta atragantamiento', 'Manejo de la Yeyunostomía: administrar las fórmulas de nutrición enteral a temperatura ambiente mediante bomba de infusión continua; limpiar el estoma diariamente y lavar la sonda con 30 mL de agua tibia antes y después de cada infusión para evitar obstrucciones', 'Post-Esofagectomía (ascenso gástrico): mantener cabecera permanentemente a 30-45° para evitar el reflujo masivo del estómago torácico hacia la tráquea; NUNCA movilizar la sonda nasogástrica sin autorización del cirujano']
  },
  {
    number: 514,
    id: 'diag-514',
    title: 'Osteosarcoma osteogénico primario',
    cie10: 'C40.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El tumor óseo maligno primario más frecuente en niños y adolescentes (pico de incidencia entre los 10 y 20 años durante el brote de crecimiento puberal), caracterizado por la producción directa de matriz ósea inmadura u osteoide por parte de células mesenquimatosas malignas. Se localiza preferentemente en las metáfisis de los huesos largos de mayor crecimiento (alrededor de la rodilla en >60%: fémur distal y tibia proximal).',
    symptoms: ['DOLOR ÓSEO LOCALIZADO, PROFUNDO Y PERSISTENTE que empeora por las noches y con la actividad física (frecuentemente atribuido erróneamente a "dolores del crecimiento o golpes jugando fútbol")', 'TUMEFACCIÓN O MASA PALPABLE DURA, DOLOROSA, MAL DEFINIDA adherida al hueso con aumento del calor local', 'Limitación funcional progresiva de la articulación vecina y claudicación o cojera', 'Fractura patológica espontánea del hueso ante un traumatismo mínimo', 'SITIO PRINCIPAL DE METÁSTASIS A DISTANCIA: METÁSTASIS PULMONARES (en >80% de las diseminaciones; asintomáticas tempranamente)'],
    redFlags: ['Dolor óseo persistente en adolescentes que despierta por la noche o dura más de 2 semanas: RADIOGRAFÍA SIMPLE OBLIGATORIA'],
    criteria: 'Biopsia ósea quirúrgica con confirmación histológica de producción de tejido osteoide maligno.',
    labTests: ['Fosfatasa Alcalina (FA) y Deshidrogenasa Láctica (LDH) séricas elevadas (marcadores de volumen y pronóstico)'],
    imaging: ['Radiografía simple ósea en 2 proyecciones: LESIÓN MIXTA LÍTICA/BLÁSTICA METAFISARIA con reacción perióstica agresiva:', '  * TRIÁNGULO DE CODMAN (elevación perióstica en cuña)', '  * IMAGEN EN "SOL RADIANTE O EN RAYOS DE SOL" (espículas óseas perpendiculares)', 'RM de toda la extremidad con contraste (evalúa invasión medular, extensión a partes blandas y articulación)', 'TC de tórax de alta resolución (estándar de oro obligatorio para detectar micrometástasis pulmonares)'],
    differential: ['Sarcoma de Ewing (diafisario con imagen en capas de cebolla)', 'Osteomielitis aguda bacteriana', 'Quiste óseo aneurismático', 'Miositis osificante'],
    firstLine: [
      { drug: 'Quimioterapia Neoadyuvante de Primera Línea (Protocolo MAP)', dose: 'Metotrexato a dosis altas (12 g/m2 con rescate obligado de Ácido Folínico / Leucovorina) + Adriamicina (Doxorrubicina 75 mg/m2) + Cisplatino 120 mg/m2 EV durante 10 semanas', route: 'EV en hospitalización', freq: 'Protocolo neoadyuvante', notes: 'Frena las micrometástasis sistémicas y delimita el tumor facilitando la cirugía de preservación' },
      { drug: 'CIRUGÍA DE PRESERVACIÓN DE LA EXTREMIDAD CON RESECCIÓN ONCOLÓGICA EN BLOQUE', dose: 'Resección completa del tumor con amplios márgenes oncológicos libres de enfermedad y reconstrucción mediante Endoprótesis Modular Tumoral o aloinjerto óseo cadavérico', route: 'Quirúrgico ortopédico oncológico', freq: 'Procedimiento curativo', notes: 'Evita la amputación en más del 85-90% de los pacientes conservando la extremidad con excelente función' },
      { drug: 'Quimioterapia Adyuvante Postoperatoria', dose: 'Continuación del esquema MAP adaptado según el grado de necrosis tumoral histológica (>90% buena respuesta)', route: 'EV', freq: 'Protocolo adyuvante', notes: 'Completa la erradicación celular sistémica' }
    ],
    alternatives: [
      { drug: 'Amputación quirúrgica de la extremidad o Rotoplastia de Van Nes', dose: 'Resección ablativa', route: 'Quirúrgico', freq: 'Procedimiento de rescate', notes: 'Indicada en tumores gigantes que envuelven el paquete neurovascular principal o fractura patológica infectada' },
      { drug: 'Metastasectomía pulmonar quirúrgica repetida (Toracotomía con resección de nódulos)', dose: 'Resección en cuña de todas las metástasis pulmonares resecables', route: 'Quirúrgico torácico', freq: 'Según aparición', notes: 'Ofrece supervivencia prolongada en metástasis pulmonares exclusivas' }
    ],
    nonPharm: ['Rehabilitación fisioterapéutica intensiva post-endoprótesis'],
    nursingCare: ['PROTOCOLO DE RESCATE CON LEUCOVORINA EN METOTREXATO A DOSIS ALTAS (EMERGENCIA DE SEGURIDAD):', '1. Iniciar infusión de Leucovorina (Ácido Folínico) EV exactamente a las 24 horas del inicio del Metotrexato; JAMÁS RETRASAR UNA DOSIS (la leucovorina rescata a las células sanas de la médula y el epitelio intestinal de la toxicidad mortal del metotrexato)', '2. HIPERALCALINIZACIÓN DE LA ORINA: Administrar Bicarbonato de Sodio EV para mantener el pH de la orina estrictamente >7.0 en cada micción; si el pH cae <7.0, el metotrexato precipita en los túbulos renales provocando anuria irreversible', '3. Monitoreo diario de niveles séricos de Metotrexato hasta que sean indetectables (<0.1 umol/L)']
  },
  {
    number: 515,
    id: 'diag-515',
    title: 'Sarcomas de partes blandas (Liposarcoma y Leiomiosarcoma del adulto)',
    cie10: 'C49.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Grupo heterogéneo y complejo de neoplasias malignas mesenquimatosas poco frecuentes originadas en los tejidos blandos no epiteliales extraesqueléticos (músculo estriado o liso, tejido adiposo, vasos sanguíneos y vainas nerviosas). Los más comunes en adultos son el Liposarcoma (subtipos bien diferenciado, desdiferenciado, mixoide) y el Leiomiosarcoma (músculo liso en retroperitoneo o extremidades).',
    symptoms: ['REGLA DE ORO DE SOSPECHA: MASA O BULTO SUBCUTÁNEO O PROFUNDO INDOLORO, DE CRECIMIENTO PROGRESIVO:', '- TAMAÑO MAYOR A 5 CENTÍMETROS (mayor al tamaño de una pelota de golf)', '- LOCALIZACIÓN PROFUNDA (por debajo de la fascia muscular profunda)', '- CONSISTENCIA FIRME O DURA Y ADHERIDA A PLANOS PROFUNDOS', 'Localización más frecuente: extremidades inferiores (muslo en >40%) y retroperitoneo (30%)', 'En Sarcomas Retroperitoneales: crecimiento asintomático gigantesco (masas de >15-20 cm) que se descubren por aumento del perímetro abdominal o compresión de uréteres o intestinos'],
    redFlags: ['BIOPSIA MAL PLANIFICADA O RESECCIÓN INADVERTIDA COMO "LIPOMA BENIGNO" SIN ESTUDIO PREVIO (la enucleación simple contamina los compartimentos musculares multiplicando las recidivas y amputaciones)'],
    criteria: 'Biopsia con aguja gruesa (tru-cut) coaxial guiada por imagen planificada por el cirujano oncológico en la misma línea de la incisión quirúrgica futura.',
    labTests: ['Histopatología e Inmunohistoquímica especializada (MDM2/CDK4 en liposarcomas, actina/desmina en leiomiosarcomas)'],
    imaging: ['RM con contraste de la extremidad (estándar de oro para determinar la relación anatómica con la fascia, músculos y paquete neurovascular)', 'TC de tórax con contraste obligatoria (el pulmón es el principal sitio de metástasis hematógenas)'],
    differential: ['Lipoma benigno simple (blando, superficial, <5 cm, móvil)', 'Hematoma intramuscular postraumático', 'Absceso de partes blandas', 'Mixoma'],
    firstLine: [
      { drug: 'Resección Quirúrgica Amplia en Bloque con Márgenes Libres (R0) de Seguridad (ESTÁNDAR CURATIVO)', dose: 'Extirpación completa del tumor con una barrera fascial intacta o un margen tridimensional sano de tejido no tumoral de al menos 1 cm', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'Pilar curativo número uno; no abrir jamás la pseudocápsula tumoral' },
      { drug: 'Radioterapia Externa Adyuvante o Neoadyuvante (Preoperatoria)', dose: '50 Gy preoperatorios (o 60-66 Gy postoperatorios) en tumores de alto grado o >5 cm', route: 'Radioterapia externa', freq: 'Fraccionada', notes: 'Reduce drásticamente el riesgo de recurrencia local a <10%' }
    ],
    alternatives: [
      { drug: 'Quimioterapia sistémica en subtipos quimiosensibles o enfermedad metastásica: Doxorrubicina + Ifosfamida', dose: 'Doxorrubicina 60-75 mg/m2 + Ifosfamida 6-9 g/m2 con protector vesical MESNA', route: 'EV', freq: 'Ciclos de 21 días', notes: 'Esquema de referencia en sarcomas de alto grado' },
      { drug: 'Trabectedina o Eribulina (en liposarcomas y leiomiosarcomas avanzados)', dose: 'Trabectedina 1.5 mg/m2 en infusión continua de 24h cada 3 semanas', route: 'EV en infusión', freq: 'c/3 semanas', notes: 'Aprobados específicamente para L-sarcomas tras fracaso de antraciclinas' }
    ],
    nonPharm: ['Discusión obligatoria en Comité Multidisciplinar de Sarcomas en centros de referencia especializados'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA ANTE BULTOS EN EXTREMIDADES: Educar al personal y pacientes que CUALQUIER BULTO DE MÁS DE 5 CM O PROFUNDO EN UNA PIERNA O BRAZO NO DEBE OPERARSE EN CONSULTORIO menor bajo anestesia local pensando que es un simple lipoma; debe derivarse a oncología para RM y biopsia tru-cut', 'Administración de MESNA con Ifosfamida: el MESNA (2-mercaptoetanosulfonato) debe administrarse estrictamente antes, durante y después de la ifosfamida para neutralizar la acroleína en la vejiga y prevenir la cistitis hemorrágica masiva mortal', 'Control del drenaje quirúrgico y movilización precoz de la extremidad operada']
  },
  {
    number: 516,
    id: 'diag-516',
    title: 'Cáncer primario de hígado (Carcinoma hepatocelular / Hepatocarcinoma)',
    cie10: 'C22.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna primaria más común del hígado (>85% de los tumores hepáticos primarios), que se desarrolla casi invariablemente (>80-90%) sobre el sustrato de una cirrosis hepática previa subyacente. En el Perú, las principales causas etiológicas son la infección crónica por Virus de la Hepatitis B (VHB, con frecuencia en zonas hiperendémicas andinas y amazónicas como Abancay o Ayacucho sin necesidad de cirrosis previa), Virus de la Hepatitis C (VHC), esteatohepatitis asociada a disfunción metabólica (MASH) y consumo de alcohol.',
    symptoms: ['DESCOMPENSACIÓN BRUSCA E INEXPLICABLE DE UNA CIRROSIS HEPÁTICA PREVIA ESTABLE:', '- Aparición súbita o empeoramiento refractario de ASCITIS', '- Ictericia progresiva y encefalopatía hepática', '- Hemorragia digestiva alta por rotura de várices esofágicas por trombosis de la vena porta', 'Dolor sordo continuo o pesadez en hipocondrio derecho', 'Pérdida involuntaria de peso, caquexia tumoral y anorexia', 'Hepatomegalia palpable dura, nodular e irregular con soplo arterial audible sobre el tumor en fases avanzadas', 'Hemoperitoneo agudo por rotura tumoral espontánea con shock hipovolémico'],
    redFlags: ['Trombosis tumoral invasiva de la vena porta principal o venas suprahepáticas'],
    criteria: 'Criterios radiológicos no invasivos LI-RADS (LR-5) en pacientes cirróticos: nódulo >1 cm con hipercaptación arterial ("wash-in") y lavado precoz en fase venosa/tardía ("wash-out") en TC o RM multifásica sin necesidad de biopsia.',
    labTests: ['ALFA-FETOPROTEÍNA (AFP sérica: >200-400 ng/mL altamente diagnóstica en presencia de nódulo hepático)', 'Perfil hepático completo, bilirrubinas, albúmina, INR (Clasificación de Child-Pugh A, B o C y Score MELD)', 'Serología para Virus de la Hepatitis B (HBsAg) y Hepatitis C (Anti-VHC)'],
    imaging: ['TC trifásica de abdomen o RM hepática dinámica con contraste hepatoespecífico (gadoxetato disódico / Primovist)', 'Ecografía abdominal semestral de cribado'],
    differential: ['Metástasis hepáticas de adenocarcinoma (colon, páncreas)', 'Colangiocarcinoma intrahepático', 'Hemangioma hepático gigante benigno', 'Hiperplasia nodular focal'],
    firstLine: [
      { drug: 'Criterios de Milán cumplidos en cirrótico descompensado (nódulo único <=5 cm o hasta 3 nódulos <=3 cm): TRASPLANTE HEPÁTICO ORTOTÓPICO (THO)', dose: 'Reemplazo completo del hígado cirrótico por injerto de donante cadavérico', route: 'Quirúrgico trasplante', freq: 'Procedimiento curativo definitivo', notes: 'Trata simultáneamente el cáncer y la cirrosis hepática subyacente con supervivencia >70-80% a 5 años' },
      { drug: 'Nódulo único en hígado con función hepática preservada (Child-Pugh A sin hipertensión portal): Resección Quirúrgica (Hepatectomía parcial)', dose: 'Resección anatómica o atípica con margen libre', route: 'Quirúrgico', freq: 'Procedimiento curativo', notes: 'Opción curativa de elección si no hay hipertensión portal severa' },
      { drug: 'Tumores pequeños <3 cm no quirúrgicos: ABLACIÓN TÉRMICA POR RADIOFRECUENCIA O MICROONDAS (RFA)', dose: 'Ablación térmica percutánea guiada por ecografía/TC', route: 'Intervencionista percutáneo', freq: 'Procedimiento curativo', notes: 'Eficacia equivalente a la cirugía en tumores <2-3 cm con mínima morbilidad' }
    ],
    alternatives: [
      { drug: 'Estadio Intermedio BCLC B (Multinodular grande sin invasión vascular): Quimioembolización Transarterial (TACE)', dose: 'Inyección intraarterial selectiva de microesferas con Doxorrubicina + agente embolizante en las ramas que nutren el tumor', route: 'Intraarterial endovascular', freq: 'Según respuesta cada 2-3 meses', notes: 'Provoca isquemia tumoral selectiva sin dañar el parénquima dependiente de la vena porta' },
      { drug: 'Estadio Avanzado BCLC C (Invasión vascular o metástasis): Inmunoterapia de Primera Línea: Atezolizumab + Bevacizumab', dose: 'Atezolizumab 1200 mg EV + Bevacizumab 15 mg/kg EV cada 3 semanas', route: 'EV', freq: 'c/3 semanas', notes: 'Estándar mundial moderno que supera a Sorafenib; requiere endoscopia previa para ligar várices esofágicas por riesgo de sangrado' }
    ],
    nonPharm: ['TAMIZAJE SEMESTRAL OBLIGATORIO CON ECOGRAFÍA HEPÁTICA CADA 6 MESES en todo paciente cirrótico o portador crónico de hepatitis B', 'Vacunación universal contra la Hepatitis B en recién nacidos'],
    nursingCare: ['VIGILANCIA DEL PROGRAMA DE SCREENING EN CIRROSIS: Recordar que el 100% de los pacientes con cirrosis hepática deben realizarse una ecografía abdominal cada 6 meses de por vida; detectar el hepatocarcinoma cuando mide <2 cm permite la curación completa', 'Profilaxis de sangrado variceal antes de Bevacizumab: constatar que el paciente tenga una endoscopia digestiva reciente sin várices con riesgo de sangrado antes de infundir el fármaco', 'Vacunación contra hepatitis B en el entorno familiar del paciente']
  },
  {
    number: 517,
    id: 'diag-517',
    title: 'Cáncer de vesícula biliar y Colangiocarcinoma',
    cie10: 'C23 / C24.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasias malignas agresivas del árbol biliar. El Cáncer de Vesícula Biliar es extraordinariamente prevalente en el Perú, Chile y Bolivia (especialmente en mujeres andinas mayores de 50 años), estrechamente vinculado a colelitiasis crónica de larga data (>2-3 cm) y vesícula en porcelana. El Colangiocarcinoma se origina en el epitelio de los conductos biliares intrahepáticos o extrahepáticos (Tumor de Klatskin en la confluencia hiliar).',
    symptoms: ['EN CÁNCER DE VESÍCULA BILIAR:', '- Inicialmente indistinguible de un cólico biliar o colecistitis crónica por litiasis previa', '- Dolor continuo persistente e intenso en hipocondrio derecho que se hace constante', '- Masa palpable dura, fija e irregular en el reborde hepático derecho', '- Ictericia tardía (indica invasión directa del hilio hepático o colédoco con mal pronóstico)', '- Pérdida de peso rápida, náuseas, astenia y caquexia', 'EN COLANGIOCARCINOMA (Tumor de Klatskin hiliar):', '- ICTERICIA OBSTRUCTIVA GRAVE Y SILENCIOSA CON PRURITO INCOERCIBLE', '- Coluria oscura ("orina color té o coca-cola") y acolia ("heces blancas como masilla")', '- Ausencia de dolor abdominal agudo de inicio'],
    redFlags: ['CÁNCER INCIDENTAL DE VESÍCULA BILIAR: hallazgo anatomopatológico imprevisto tras una colecistectomía laparoscópica común por cálculos (requiere reintervención urgente si invade T1b o más)'],
    criteria: 'Estudio anatomopatológico de la pieza quirúrgica o colangiorresonancia/ecoendoscopia con biopsia.',
    labTests: ['Marcadores tumorales CA 19-9 y CEA séricos muy elevados', 'Bilirrubina total directa y fosfatasa alcalina marcadamente aumentadas'],
    imaging: ['Colangiorresonancia magnética (CPRM: delimita la anatomía de la vía biliar y el nivel exacto de la obstrucción)', 'TC de tórax, abdomen y pelvis con contraste (evalúa invasión hepática y metástasis)'],
    differential: ['Colecistitis crónica litiásica con vesícula escleroatrófica', 'Coledocolitiasis con colangitis', 'Carcinoma de cabeza de páncreas'],
    firstLine: [
      { drug: 'Resección Quirúrgica Oncológica Radical (Tratamiento Curativo)', dose: 'En cáncer de vesícula T1b/T2: Colecistectomía radical con resección en cuña de los segmentos hepáticos IVB y V + Linfadenectomía del pedículo hepático; en Klatskin: resección de vía biliar con hepatectomía mayor', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'La colecistectomía simple solo es suficiente en tumores T1a confinados a la mucosa' },
      { drug: 'Quimioterapia adyuvante con Capecitabina oral', dose: '1250 mg/m2 VO cada 12 horas los días 1 a 14 cada 21 días por 8 ciclos (Ensayo BILCAP)', route: 'VO', freq: 'Ciclos de 21 días x 8 ciclos', notes: 'Estándar mundial postoperatorio que incrementa significativamente la supervivencia' }
    ],
    alternatives: [
      { drug: 'Quimioterapia de Primera Línea en Enfermedad Avanzada: Cisplatino + Gemcitabina + Durvalumab', dose: 'Durvalumab (anti-PD-L1) 1500 mg EV + Cisplatino 25 mg/m2 + Gemcitabina 1000 mg/m2 días 1 y 8 cada 21 días (Ensayo TOPAZ-1)', route: 'EV', freq: 'Cada 21 días', notes: 'Nuevo estándar que añade inmunoterapia mejorando la supervivencia global' },
      { drug: 'Drenaje biliar paliativo por CPRE o Drenaje Biliar Transhepático Percutáneo (DBTP)', dose: 'Colocación de prótesis biliares para derivar la bilis y aliviar la ictericia', route: 'Intervencionista', freq: 'Procedimiento paliativo', notes: 'Imprescindible para controlar el prurito y la insuficiencia hepática' }
    ],
    nonPharm: ['COLECISTECTOMÍA PROFILÁCTICA OPORTUNA EN PACIENTES CON CÁLCULOS VESICULARES >2.5-3 CM O VESÍCULA EN PORCELANA (medida de salud pública crucial en el Perú)'],
    nursingCare: ['PREVENCIÓN DEL CÁNCER DE VESÍCULA EN LA POBLACIÓN PERUANA: Recordar que en el Perú las mujeres andinas con litiasis vesicular tienen un riesgo altísimo de cáncer de vesícula; incentivar la colecistectomía programada temprana de litiasis sintomáticas o cálculos grandes para evitar el cáncer', 'Cuidado de drenajes biliares transhepáticos externos: cuantificar el débito diario de bilis, mantener la bolsa colectora por debajo del nivel del abdomen y limpiar el punto de punción con clorhexidina', 'Manejo del prurito colestásico y soporte nutricional']
  },
  {
    number: 518,
    id: 'diag-518',
    title: 'Cáncer de laringe (Carcinoma epidermoide de laringe)',
    cie10: 'C32.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna de cabeza y cuello originada en el epitelio escamoso de la laringe, fuertemente vinculada a la acción sinérgica del TABAQUISMO y el CONSUMO CRÓNICO DE ALCOHOL. Se clasifica anatómicamente en Glótico (el más común 60-65%, cuerdas vocales verdaderas, diagnóstico precoz por disfonía temprana, baja tasa de metástasis linfáticas), Supraglótico (30-35%, diagnóstico tardío, alta diseminación ganglionar cervical) y Subglótico (<5%).',
    symptoms: ['DISFONÍA O RONQUERA PROGRESIVA QUE PERSISTE MÁS DE 2 A 3 SEMANAS ("el signo de alarma fundamental en tumores glóticos")', 'Odinofagia y dolor faríngeo que se irradia al oído homolateral (otalgia refleja referida por el nervio vago/laríngeo superior)', 'Sensación continua de cuerpo extraño en la garganta o carraspeo persistente', 'Disfagia progresiva y dificultad para la deglución', 'DISNEA Y ESTRIDOR LARÍNGEO INSPIRATORIO (en etapas avanzadas por obstrucción tumoral de la glotis)', 'Adenopatía cervical metastásica palpable dura e indolora en cuello (frecuente en supraglóticos)', 'Hemoptisis leve o expectoración hemoptoica y halitosis fétida'],
    redFlags: ['ESTRIDOR LARÍNGEO EN REPOSO CON DISNEA AGUDA: urgencia médica por compromiso inminente de la vía aérea (requiere traqueostomía de urgencia)'],
    criteria: 'Nasofibrolaringoscopia con toma de biopsia bajo anestesia general confirmando carcinoma epidermoide.',
    labTests: ['Preoperatorios completos'],
    imaging: ['TC de cuello y tórax con contraste intravenoso (evalúa invasión de cartílagos tiroides/cricoides y adenopatías cervicales)', 'RM de cuello para evaluar partes blandas'],
    differential: ['Pólipos o nódulos de cuerdas vocales benignos', 'Papilomatosis laríngea por VPH', 'Laringitis crónica del fumador', 'Tuberculosis laríngea'],
    firstLine: [
      { drug: 'Tumores Glóticos Tempranos (T1 y T2): Microcirugía Transoral con Láser CO2 o Radioterapia Externa', dose: 'Resección endoscópica con láser CO2 de la cuerda vocal afectada (Cordectomía); o Radioterapia conformada curativa (66-70 Gy)', route: 'Endoscópico láser / Radioterapia', freq: 'Procedimiento curativo', notes: 'Excelente tasa de curación (>90%) con preservación completa de la voz y de la laringe' },
      { drug: 'Tumores Localmente Avanzados (T3 y T4a): Protocolos de Preservación de Órgano con Quimiorradioterapia Concomitante', dose: 'Radioterapia externa fraccionada a dosis altas + Cisplatino 100 mg/m2 EV cada 3 semanas durante la radioterapia', route: 'Radioterapia + EV', freq: 'Protocolo concomitante', notes: 'Permite conservar la laringe anatómica y la deglución en más del 60-70% de casos avanzados' }
    ],
    alternatives: [
      { drug: 'Laringectomía Total con Linfadenectomía cervical bilateral', dose: 'Extirpación quirúrgica completa de la laringe con creación de un TRAQUEOSTOMA PERMANENTE definitivo', route: 'Quirúrgico de cabeza y cuello', freq: 'Procedimiento definitivo', notes: 'Indicada ante destrucción masiva del cartílago laríngeo, fracaso de la radioterapia o laringe no funcional' }
    ],
    nonPharm: ['Abandono estricto del tabaco y alcohol (los pacientes que continúan fumando tienen altísimo riesgo de segundos tumores en pulmón y esófago)'],
    nursingCare: ['ALERTA DE DISFONÍA DE ENFERMERÍA: Toda persona fumadora con disfonía o cambio en la voz que dure más de 15 días debe ser derivada de forma prioritaria a Otorrinolaringología para visualización de cuerdas vocales; no tratar como "faringitis"', 'CUIDADOS DEL TRAQUEOSTOMA PERMANENTE TRAS LARINGECTOMÍA TOTAL:', '- El paciente laringectomizado respira EXCLUSIVAMENTE por el orificio del cuello; si requiere reanimación o ventilación con ambú, LA MASCARILLA DEBE COLOCARSE SOBRE EL ESTOMA DEL CUELLO, NUNCA EN LA BOCA', '- Limpieza diaria de la cánula de traqueostomía y humidificación continua del aire para evitar tapones de moco secos sofocantes', '- Rehabilitación vocal mediante prótesis fonatoria traqueoesofágica o voz esofágica']
  },
  {
    number: 519,
    id: 'diag-519',
    title: 'Cáncer de cavidad oral y orofaringe',
    cie10: 'C06.9 / C10.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna epitelial escamosa que compromete la boca (labios, lengua móvil, suelo de la boca, encías) y la orofaringe (amígdalas palatinas, base de la lengua y paladar blando). El cáncer de cavidad oral se asocia clásicamente al consumo crónico de tabaco y alcohol; en cambio, el Cáncer de Orofaringe ha experimentado un incremento epidémico masivo atribuible a la infección por el Virus del Papiloma Humano (VPH tipo 16 positivo), con mejor respuesta al tratamiento y pronóstico.',
    symptoms: ['ÚLCERA MUCOSA ORAL QUE NO CICATRIZA EN MÁS DE 2 A 3 SEMANAS ("llaga indolora o dolorosa en el borde de la lengua o suelo de boca")', 'Nódulo o masa indurada palpable en encía, lengua o amígdala que sangra al roce', 'Placas rojas aterciopeladas (Eritroplasia) o blancas engrosadas que no se desprenden al raspado (Leucoplasia premaligna)', 'Dolor bucal persistente, odinofagia y dolor referido al oído (otalgia)', 'Dificultad o dolor para mover la lengua o masticar (anquiloglosia tumoral)', 'Movilidad anómala o caída espontánea de piezas dentarias sin causa periodontal', 'ADENOPATÍA CERVICAL QUÍSTICA LATERAL EN EL CUELLO (signo de debut más común en cáncer de orofaringe VPH positivo en adultos jóvenes no fumadores)'],
    redFlags: ['Toda úlcera oral que no cura tras 15 días de tratamiento odontológico o retiro de prótesis desajustada EXIGE BIOPSIA ONCOLÓGICA'],
    criteria: 'Biopsia incisional del borde activo de la úlcera oral bajo anestesia local con estudio de inmunohistoquímica para proteína p16 (marcador de VPH).',
    labTests: ['Determinación de p16 por inmunohistoquímica y ADN-VPH en orofaringe'],
    imaging: ['TC de cuello y macizo facial con contraste y RM oral (evalúa profundidad de invasión muscular y cortical ósea mandibular)', 'PET-CT'],
    differential: ['Úlcera aftosa recidivante mayor', 'Úlcera traumática por prótesis dental filosa', 'Infección micótica profunda (Paracoccidioidomicosis oral en Perú)', 'Chancro sifilítico'],
    firstLine: [
      { drug: 'Cáncer de Cavidad Oral: Resección Quirúrgica Amplia con Márgenes Libres + Vaciamiento Cervical', dose: 'Glosectomía parcial o mandibulectomía marginal con reconstrucción con colgajo microvascularizado libre + disección de ganglios cervicales', route: 'Quirúrgico maxilofacial', freq: 'Procedimiento curativo', notes: 'La cirugía radical es el tratamiento de primera línea de elección en la cavidad oral' },
      { drug: 'Cáncer de Orofaringe VPH Positivo: Quimiorradioterapia Concomitante Definitiva', dose: 'Radioterapia IMRT a dosis altas (70 Gy) + Cisplatino 100 mg/m2 EV cada 3 semanas por 3 dosis', route: 'Radioterapia + EV', freq: 'Protocolo curativo', notes: 'Altísima tasa de curación y control locorregional (>85-90%) con preservación de órganos' }
    ],
    alternatives: [
      { drug: 'Cirugía Robótica Transoral (TORS)', dose: 'Resección mínimamente invasiva asistida por robot de tumores de base de lengua o amígdala', route: 'Robótica transoral', freq: 'Procedimiento electivo', notes: 'Reduce las secuelas de deglución y radiación' },
      { drug: 'Pembrolizumab en monoterapia o con quimioterapia en enfermedad recurrente/metastásica', dose: '200 mg EV cada 3 semanas si CPS de PD-L1 >=1', route: 'EV', freq: 'c/3 semanas', notes: 'Estándar en primera línea recurrente' }
    ],
    nonPharm: ['Revisión odontológica previa obligatoria con extracción de piezas sépticas antes de radioterapia para evitar OSTEORRADIONECROSIS mandibular'],
    nursingCare: ['DETECCIÓN PRECOZ DE ENFERMERÍA EN CONSULTA DE SALUD BUCAL: Inspeccionar sistemáticamente los bordes laterales de la lengua y el suelo de la boca; toda úlcera de más de 2 semanas de evolución debe biopsiarse de inmediato', 'PREVENCIÓN DE OSTEORRADIONECROSIS MANDIBULAR: Enseñar que una vez recibida radioterapia en la boca o cuello, el paciente NUNCA DEBE SOMETERSE A EXTRACCIONES DENTALES CONVENCIONALES sin protocolo especializado con oxígeno hiperbárico (el hueso irradiado no cicatriza y se necrosa)', 'Manejo de la mucositis severa por radioterapia: colutorios alcalinos frecuentes con bicarbonato y nistatina, anestésicos tópicos antes de comer y nutrición por sonda si el dolor impide la ingesta']
  },
  {
    number: 520,
    id: 'diag-520',
    title: 'Leucemia mieloide crónica (LMC / Cromosoma Filadelfia positivo)',
    cie10: 'C92.1',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia mieloproliferativa clonal crónica originada en una célula madre hematopoyética pluripotencial, caracterizada biológicamente por la TRANSLOCACIÓN RECÍPROCA t(9;22)(q34;q11) que genera el CROMOSOMA FILADELFIA y el GEN DE FUSIÓN QUIMÉRICO BCR-ABL1. Este gen codifica una proteína tirosina quinasa constitutivamente activa que estimula la proliferación masiva y descontrolada de la serie granulocítica madura en médula ósea y bazo.',
    symptoms: ['Fase Crónica (85-90% de los pacientes al diagnóstico):', '- En hasta un 30-50% COMPLETAMENTE ASINTOMÁTICA (descubrimiento incidental por leucocitosis extrema en análisis de rutina)', '- ESPLENOMEGALIA MASIVA PALPABLE EN ABDOMEN ("bazo gigante que cruza la línea media y llega a la fosa ilíaca")', '- Molestias y dolor sordo en hipocondrio izquierdo, sensación de saciedad precoz y pesadez abdominal', '- Síntomas constitucionales hipermetabólicos: astenia, sudoración nocturna profusa, pérdida de peso y febrícula', '- Síntomas de hiperleucocitosis: cefalea, acúfenos, visión borrosa y priapismo', 'Fase Acelerada o Crisis Blástica (evolución natural fatal sin tratamiento): transformación a Leucemia Aguda refractaria con blastos >=20% en médula ósea, fiebre y dolor óseo severo'],
    redFlags: ['CRISIS BLÁSTICA LEUCÉMICA AGUDA (mieloblástica o linfoblástica con rápida mortalidad si no se trata)'],
    criteria: 'Demostración de la translocación t(9;22) o del transcripto BCR-ABL1 mediante cariotipo, FISH o RT-PCR cuantitativa en sangre periférica o médula ósea.',
    labTests: ['Hemograma: LEUCOCITOSIS EXTREMA (frecuentemente entre 50,000 y 300,000/uL) con FÓRMULA LEUCEMOIDAL COMPLETA ("mielocitos, metamielocitos, abastonados y segmentados")', 'Fosfatasa Alcalina Granulocítica (FAG) baja o nula (clave para diferenciar de reacciones leucemoides benignas por infección donde la FAG está muy alta)', 'Trombocitosis (plaquetas >500,000/uL), anemia normocítica y ácido úrico elevado', 'RT-PCR cuantitativa seriada de BCR-ABL1 en escala internacional (IS) para monitoreo de respuesta molecular'],
    imaging: ['Ecografía abdominal (cuantifica con precisión la esplenomegalia en centímetros por debajo del reborde costal)'],
    differential: ['Reacción leucemoide secundaria a infecciones severas', 'Otras neoplasias mieloproliferativas (Mielofibrosis, Policitemia vera)', 'Leucemia mielomonocítica crónica (LMMC)'],
    firstLine: [
      { drug: 'INHIBIDORES DE LA TIROSINA QUINASA (ITK) ORALES DE PRIMERA LÍNEA: Imatinib o Nilotinib o Dasatinib', dose: 'Imatinib 400 mg VO una vez al día con una comida principal y un vaso grande de agua (o Dasatinib 100 mg/día VO)', route: 'VO con alimentos', freq: 'c/24h continuo de por vida', notes: 'HITO HISTÓRICO DE LA MEDICINA: Transformó una enfermedad mortal en una condición crónica con expectativa de vida idéntica a la población sana (>90% supervivencia a 10 años)' }
    ],
    alternatives: [
      { drug: 'ITK de 2da y 3ra generación (Bosutinib, Ponatinib o Asciminib)', dose: 'Ponatinib 45 mg/día VO (fármaco de elección si presenta la mutación T315I resistente a los demás ITK)', route: 'VO', freq: 'c/24h', notes: 'Indicados ante resistencia o intolerancia al tratamiento inicial' },
      { drug: 'Trasplante Alogénico de Progenitores Hematopoyéticos (TAPH)', dose: 'Procedimiento de trasplante de médula ósea', route: 'Celular EV', freq: 'Procedimiento de rescate', notes: 'Reservado hoy en día para crisis blástica o resistencia múltiple a todos los ITKs' }
    ],
    nonPharm: ['Monitoreo molecular estricto con RT-PCR de BCR-ABL1 cada 3 meses hasta alcanzar Respuesta Molecular Mayor (RMM / MMR: BCR-ABL1 <=0.1%)'],
    nursingCare: ['EDUCACIÓN SANITARIA SOBRE LA ADHERENCIA VITAL AL IMATINIB: Enseñar al paciente que tomar la pastilla TODOS LOS DÍAS SIN SALTARSE NINGUNA DOSIS es la clave absoluta para seguir con vida; la falta de adherencia es la causa número uno de mutaciones de resistencia y muerte por crisis blástica', 'Manejo de efectos secundarios digestivos de Imatinib: tomar siempre con el almuerzo y un vaso grande de agua para evitar náuseas y gastritis', 'Vigilancia de edemas periorbitarios y calambres musculares (efectos secundarios benignos muy comunes al inicio del tratamiento)']
  },
  {
    number: 521,
    id: 'diag-521',
    title: 'Leucemia linfocítica crónica (LLC / Linfoma linfocítico de células pequeñas)',
    cie10: 'C91.1',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La leucemia más frecuente en adultos en el mundo occidental, prevalente en personas de edad avanzada (mediana 72 años). Neoplasia clonal de linfocitos B maduros incompetentes (CD5+, CD19+, CD23+) que se acumulan progresivamente en médula ósea, sangre periférica, ganglios linfáticos y bazo. De curso clínico habitualmente indolente durante años, estratificada por las clasificaciones de Rai y Binet.',
    symptoms: ['Completamente asintomática en más del 70-80% de los pacientes (descubrimiento fortuito por linfocitosis en análisis de sangre)', 'ADENOPATÍAS GENERALIZADAS MÚLTIPLES indoloras, móviles, de consistencia gomosa (cuello, axilas, ingles)', 'ESPLENOMEGALIA Y HEPATOMEGALIA palpable moderada e indolora', 'Infecciones bacterianas recurrentes graves (neumonías, celulitis por hipogammaglobulinemia adquirida)', 'En fases avanzadas (Binet C / Rai III-IV):', '- Astenia y palidez por anemia', '- Hematomas y petequias por trombocitopenia', 'COMPLICACIONES AUTOINMUNES FRECUENTES (en 10-15%):', '- Anemia Hemolítica Autoinmune (AHAI con Coombs directo positivo)', '- Trombocitopenia Inmune (PTI secundaria)'],
    redFlags: ['SÍNDROME DE RICHTER: transformación súbita y agresiva de la LLC a un Linfoma Difuso de Células B Grandes de rápido crecimiento con fiebre alta, dolor y rápida progresión'],
    criteria: 'Presencia persistente en sangre periférica de >=5,000 linfocitos B monoclonales/uL (>=5 x 10^9/L) durante al menos 3 meses, con inmunofenotipo clonal típico.',
    labTests: ['Frotis de sangre periférica: linfocitos pequeños maduros típicos y abundantes MANCHAS O SOMBRAS DE GÜMPRECHT (linfocitos frágiles rotos durante el frotis)', 'Citometría de flujo de sangre periférica: coexpresión típica de CD19, CD5, CD23, CD20 débil y cadenas ligeras kappa o lambda restringidas', 'Biología molecular y FISH: del(17p) o mutación del gen TP53 (marcador de alto riesgo resistente a quimio convencional) y estado mutacional de IGHV'],
    imaging: ['TC de tórax, abdomen y pelvis con contraste (evalúa masa tumoral ganglionar y esplénica)'],
    differential: ['Linfocitosis reactiva viral (mononucleosis)', 'Linfoma de células del manto (ciclina D1 positiva, CD23 negativo)', 'Linfoma de la zona marginal esplénica'],
    firstLine: [
      { drug: 'Estadios precoces asintomáticos (Binet A / Rai 0-I): CONDUCTA EXPECTANTE Y VIGILANCIA ACTIVA ("WATCH AND WAIT")', dose: 'Controles clínicos y analíticos cada 3 a 6 meses sin iniciar medicación', route: 'Observación clínica', freq: 'Trimestral', notes: 'ESTÁNDAR MUNDIAL: Demostrado que tratar precozmente a pacientes asintomáticos NO prolonga la supervivencia y solo genera toxicidad innecesaria' },
      { drug: 'Tratamiento de Primera Línea en Enfermedad Activa Sintomática: Inhibidores de BTK (Acalabrutinib o Zanubrutinib) o Esquema Venetoclax + Obinutuzumab', dose: 'Acalabrutinib 100 mg VO cada 12 horas continuo; o Venetoclax oral por 12 meses + Obinutuzumab (anti-CD20) EV', route: 'VO / EV', freq: 'Según protocolo', notes: 'Reemplazaron completamente a la inmunoquimioterapia clásica; eficaces incluso con mutación de TP53/del(17p)' }
    ],
    alternatives: [
      { drug: 'Ibrutinib oral (primer inhibidor de la tirosina quinasa de Bruton BTK)', dose: '420 mg VO una vez al día continuo', route: 'VO', freq: 'c/24h continuo', notes: 'Vigilar fibrilación auricular e hipertensión arterial' }
    ],
    nonPharm: ['VACUNACIÓN ANTINEUMOCÓCICA Y ANTIGRIPAL ANUAL OBLIGATORIA (CONTRAINDICADAS LAS VACUNAS CON VIRUS VIVOS ATENUADOS)', 'Protección rigurosa contra el sol (los pacientes con LLC tienen un riesgo multiplicado de desarrollar cáncer de piel)']
  },
  {
    number: 522,
    id: 'diag-522',
    title: 'Síndromes mielodisplásicos (SMD)',
    cie10: 'D46.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Grupo heterogéneo de neoplasias hematológicas clonales de células madre de la médula ósea, prevalentes en adultos mayores de 65-70 años, caracterizadas por una HEMATOPOYESIS INEFICAZ, DISPLASIA MORFOLÓGICA en una o más líneas celulares hematopoyéticas, CITOPENIAS PERIFÉRICAS paradójicas con médula ósea hipercelular, y un RIESGO CONTINUO DE TRANSFORMACIÓN A LEUCEMIA MIELOIDE AGUDA (LMA).',
    symptoms: ['SÍNDROME ANÉMICO CRÓNICO REFRACTARIO (presente en >85% de los pacientes):', '- Fatiga invalidante, astenia progresiva, disnea de esfuerzo y palidez mucocutánea', '- Anemia macrocítica o normocítica que NO responde a hierro, vitamina B12 ni ácido fólico', '- Dependencia transfusional de concentrados de hematíes frecuente', 'SÍNDROME INFECCIOSO RECURRENTE por neutropenia o disfunción cualitativa neutrofílica', 'SÍNDROME HEMORRÁGICO por trombocitopenia: hematomas fáciles, petequias, epistaxis', 'Sobrecarga secundaria de hierro (Hemosiderosis) por transfusiones repetidas continuas'],
    redFlags: ['Aumento progresivo de blastos en médula ósea (>10-19%): transformación inminente a Leucemia Mieloide Aguda secundaria'],
    criteria: 'Citopenia persistente inexplicada MÁS al menos un criterio mayor: displasia >=10% en al menos una línea celular en médula ósea, 5 a 19% de blastos, o anomalía citogenética clonal típica (del 5q, monosomía 7).',
    labTests: ['Aspirado y Biopsia de Médula Ósea con tinción de Perls (presencia patognomónica de SIDERBLASTOS EN ANILLO)', 'Niveles séricos de Eritropoyetina (EPO) y Ferritina sérica (sobrecarga férrica)', 'Citogenética y Biología Molecular (cariotipo y panel NGS de mutaciones: SF3B1, TP53, ASXL1)'],
    imaging: ['No indicada'],
    differential: ['Anemias carenciales (déficit de vitamina B12 o folato)', 'Toxicidad medular por fármacos o alcoholismo crónico', 'Aplasia medular'],
    firstLine: [
      { drug: 'SMD de Bajo Riesgo con Anemia Sintomática y EPO <500 mU/mL: Agentes Estimulantes de la Eritropoyesis (AEE)', dose: 'Eritropoyetina alfa 40,000 UI SC semanal (o Darbepoetina alfa 150-300 mcg SC cada 1-2 semanas)', route: 'Subcutánea', freq: 'Semanal', notes: 'Logra independencia transfusional en el 50-60% de los pacientes con bajo riesgo' },
      { drug: 'SMD con Deleción 5q aislada [del(5q)]: Lenalidomida oral', dose: '10 mg VO al día los días 1 a 21 de cada ciclo de 28 días', route: 'VO', freq: 'Ciclos de 28 días', notes: 'Eficacia espectacular: elimina la necesidad de transfusiones en >70% de pacientes con síndrome 5q-' },
      { drug: 'SMD de Alto Riesgo / Muy Alto Riesgo (IPSS-R): Agente Hipometilante: Azacitidina', dose: '75 mg/m2 SC o EV al día durante 7 días consecutivos cada 28 días', route: 'SC / EV', freq: 'Ciclos mensuales', notes: 'Prolonga la supervivencia global y retrasa la progresión a LMA' }
    ],
    alternatives: [
      { drug: 'Luspatercept subcutáneo (en SMD con sideroblastos en anillo SF3B1 mutado)', dose: '1.0 a 1.75 mg/kg SC cada 3 semanas', route: 'SC', freq: 'c/3 semanas', notes: 'Promueve la maduración eritroide tardía eliminando transfusiones' },
      { drug: 'Quelantes de Hierro orales (Deferasirox)', dose: '14 a 28 mg/kg/día VO', route: 'VO', freq: 'c/24h', notes: 'Previene la toxicidad cardíaca y hepática por sobrecarga de hierro post-transfusiones' }
    ],
    nonPharm: ['Soporte transfusional protocolizado con filtros desleucocitados'],
    nursingCare: ['MANEJO DE LA SOBRECARGA TRANSFUSIONAL DE HIERRO: Monitorear niveles de Ferritina sérica en pacientes multitransfundidos; si la ferritina supera los 1000 ng/mL, coordinar el inicio de quelantes de hierro orales para evitar insuficiencia cardíaca y cirrosis', 'Administración subcutánea de Azacitidina: reconstituir con agua estéril fría, dividir en dos sitios de inyección si el volumen excede 4 mL y rotar estrictamente las zonas de punción para evitar eritema local', 'Educación ante neutropenia severa: control de temperatura axilar estricto y consulta inmediata ante febrícula']
  },
  {
    number: 523,
    id: 'diag-523',
    title: 'Linfoma gástrico MALT (Linfoma de la zona marginal extranodal)',
    cie10: 'C88.4',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia linfoide monoclonal de células B maduras de bajo grado que se desarrolla a partir del tejido linfoide asociado a mucosas (MALT) adquirido en el estómago como respuesta inflamatoria crónica a la INFECCIÓN PERSISTENTE POR HELICOBACTER PYLORI (>90% de los casos). Es el paradigma oncológico mundial de un CÁNCER QUE SE CURA EXCLUSIVAMENTE CON TRATAMIENTO ANTIBIÓTICO.',
    symptoms: ['Dispepsia crónica inespecífica, dolor epigástrico sordo y sensación de plenitud postprandial (confundido con gastritis crónica)', 'Anorexia, astenia y pérdida de peso moderada', 'Hemorragia digestiva alta microscópica con anemia ferropénica leve o melenas ocasionales', 'Ausencia habitual de masas palpables o síntomas B'],
    redFlags: ['Transformación histológica a Linfoma Difuso de Células B Grandes de alto grado'],
    criteria: 'Biopsias gástricas endoscópicas múltiples con confirmación anatomopatológica de infiltrado linfoide denso con LESIONES LINFOEPITELIALES típicas.',
    labTests: ['Prueba invasiva y no invasiva de Helicobacter pylori (Test de aliento con urea C13 o biopsia con tinción de Giemsa)', 'Estudio citogenético de la translocación t(11;18)(q21;q21) BIRC3-MALT1 (su presencia predice resistencia a antibióticos)'],
    imaging: ['Ecoendoscopia gástrica (EUS: imprescindible para determinar la profundidad de infiltración en la pared gástrica)'],
    differential: ['Gastritis crónica por H. pylori no neoplásica', 'Adenocarcinoma gástrico temprano', 'Linfoma difuso de células B grandes'],
    firstLine: [
      { drug: 'ERRADICACIÓN COMPLETA DE HELICOBACTER PYLORI CON TERAPIA ANTIBIÓTICA CUÁDRUPLE (TRATAMIENTO CURATIVO DE ELECCIÓN)', dose: 'Terapia Cuádruple con Bismuto durante 14 días: Omeprazol 20 mg c/12h + Subcitrato de Bismuto 120 mg c/6h + Metronidazol 500 mg c/8h + Tetraciclina 500 mg c/6h VO por 14 DÍAS CONTINUOS', route: 'VO', freq: 'c/6-12h x 14 días', notes: 'LOGRA LA REMISIÓN COMPLETA Y CURACIÓN DEL LINFOMA EN EL 75-80% DE LOS PACIENTES estadios precoces sin necesidad de quimioterapia ni cirugía' }
    ],
    alternatives: [
      { drug: 'Radioterapia Externa gástrica a dosis bajas (24-30 Gy)', dose: 'Radioterapia conformada sobre todo el lecho gástrico', route: 'Radioterapia', freq: 'Fraccionada', notes: 'Tratamiento de elección si fracasa la erradicación de H. pylori o si presenta la translocación t(11;18)' },
      { drug: 'Inmunoquimioterapia con Rituximab', dose: 'Rituximab en monoterapia o con clorambucilo', route: 'EV / VO', freq: 'Protocolo', notes: 'En enfermedad diseminada' }
    ],
    nonPharm: ['Control endoscópico con biopsias seriadas cada 3 a 6 meses tras la erradicación para documentar la regresión histológica lenta del linfoma'],
    nursingCare: ['CONSEJERÍA DE CUMPLIMIENTO DEL TRATAMIENTO DE ERRADICACIÓN: Explicar al paciente con extrema claridad que tomar los antibióticos estrictamente durante los 14 días sin olvidar ninguna pastilla CURARÁ SU CÁNCER; el éxito de la curación depende 100% de erradicar la bacteria', 'Confirmación de erradicación mediante Test de Aliento con Urea C13 al menos 4 a 6 semanas después de finalizar los antibióticos', 'Tranquilizar al paciente sobre la lentitud de la respuesta: la desaparición completa del tumor en las biopsias puede tardar entre 6 y 12 meses']
  },
  {
    number: 524,
    id: 'diag-524',
    title: 'Linfoma de Burkitt (Endémico, Esporádico y Asociado a VIH)',
    cie10: 'C83.7',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna de linfocitos B maduros de crecimiento ultra rápido, considerada EL TUMOR HUMANO CON MAYOR VELOCIDAD DE DUPLICACIÓN CELULAR (tiempo de duplicación de solo 24 a 48 horas con índice de proliferación Ki-67 cercano al 100%). Caracterizado genéticamente de forma patognomónica por la TRANSLOCACIÓN DEL ONCOGEN C-MYC en el cromosoma 8q24 con el locus de las inmunoglobulinas t(8;14).',
    symptoms: ['FORMA ESPORÁDICA (prevalente en niños y adultos jóvenes occidentales):', '- MASA ABDOMINAL VOLUMINOSA DE CRECIMIENTO EXPLOSIVO EN DÍAS centrada en la región ileocecal', '- Dolor abdominal agudo, ascitis masiva y distensión', '- Obstrucción intestinal o invaginación intestinal aguda en niños', 'FORMA ENDÉMICA (África ecuatorial, vinculada a Virus Epstein-Barr y malaria):', '- MASA TUMORAL GIGANTESCA DEFORMADORA EN MANDÍBULA Y HUESOS FACIALES', 'FORMA ASOCIADA A INFECCIÓN POR VIH: afectación ganglionar y de médula ósea', 'Afectación frecuente del Sistema Nervioso Central (meningitis linfomatosa)'],
    redFlags: ['SÍNDROME DE LISIS TUMORAL AGUDO HIPERMASIVO ESPONTÁNEO O INMEDIATAMENTE POST-QUIMIOTERAPIA (hiperpotasemia con paro cardíaco y falla renal anúrica en horas)'],
    criteria: 'Biopsia con patrón anatomopatológico patognomónico en "CIELO ESTRELLADO" (Starry sky) y translocación de c-MYC confirmada por FISH.',
    labTests: ['LDH sérica astronómicamente elevada (>1,000-5,000 U/L)', 'Perfil de lisis tumoral estricto horario (Ácido úrico, potasio, fósforo, calcio, creatinina)', 'Serología para VIH, VHB y VHC'],
    imaging: ['TC de tórax, abdomen y pelvis con contraste y Punción lumbar con citología de LCR obligatoria'],
    differential: ['Linfoma difuso de células B grandes', 'Leucemia linfoblástica aguda B', 'Apendicitis aguda o invaginación intestinal'],
    firstLine: [
      { drug: 'Quimioterapia intensiva multifármaco en bloques de corta duración con Rituximab (Protocolo CODOX-M/IVAC o Hyper-CVAD)', dose: 'Ciclos intensivos con Ciclofosfamida a dosis altas, Doxorrubicina, Vincristina, Metotrexato a dosis altas, Citarabina y Etopósido + Rituximab + Quimioterapia Intratecal profiláctica masiva del SNC', route: 'EV + Intratecal', freq: 'Protocolo hospitalario intensivo', notes: 'Curación en más del 80-90% de los niños y 70-80% de adultos jóvenes si se inicia sin demora; la quimioterapia debe iniciarse en menos de 24-48h' }
    ],
    alternatives: [
      { drug: 'Rasburicasa endovenosa obligatoria de profilaxis (Uricasa recombinante)', dose: '0.2 mg/kg EV en infusión de 30 min antes de la primera dosis de quimioterapia', route: 'EV', freq: 'Diario x 3-5 días', notes: 'Degrada enzimáticamente el ácido úrico a alantoína hidrosoluble en minutos previniendo el fallo renal agudo' }
    ],
    nonPharm: ['Hiperhidratación endovenosa continua (3000 a 4000 mL/m2/día) antes y durante la quimioterapia'],
    nursingCare: ['EMERGENCIA DE ENFERMERÍA EN LISIS TUMORAL MASIVA: En el Linfoma de Burkitt la muerte de millones de células tumorales libera potasio y fósforo masivos a la sangre; MONITOREO CARDIACO CONTINUO con telemetría en cama; control horario de diuresis (debe orinar >100-150 mL/h) y electrolitos cada 4 a 6 horas', 'Alerta de Hiperpotasemia letal: si el potasio supera 6.0 mEq/L o hay ondas T picudas en el ECG, administrar Gluconato de Calcio EV e insulina con dextrosa de inmediato', 'Cumplimiento estricto de las punciones lumbares con quimioterapia intratecal profiláctica']
  },
  {
    number: 525,
    id: 'diag-525',
    title: 'Sarcoma de Ewing óseo y extraesquelético',
    cie10: 'C41.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna indiferenciada agresiva de células redondas pequeñas y azules del neuroectodermo, que afecta predominantemente a niños y adolescentes (segundo tumor óseo maligno pediátrico tras el osteosarcoma). Caracterizado genéticamente en más del 85-90% por la TRANSLOCACIÓN t(11;22)(q24;q12) que genera la proteína de fusión oncogénica EWS-FLI1. Se localiza preferentemente en la DIÁFISIS de huesos largos (fémur, tibia) y en huesos planos (pelvis y costillas - Tumor de Askin).',
    symptoms: ['Dolor óseo localizado continuo que empeora por las noches', 'Tumefacción y masa palpable dura adherida al hueso con calor local', 'SÍNTOMAS SISTÉMICOS INFLAMATORIOS LLAMATIVOS (frecuentemente confunden con osteomielitis bacteriana): FIEBRE inexplicable, leucocitosis marcada y elevación de VSG/PCR', 'Claudicación en la marcha y limitación funcional', 'Fractura patológica espontánea'],
    redFlags: ['Metástasis tempranas a pulmones y médula ósea'],
    criteria: 'Biopsia con histopatología de células pequeñas redondas azules CD99 (MIC2) positivas y confirmación de la translocación t(11;22) por FISH o RT-PCR.',
    labTests: ['Inmunohistoquímica: fuerte positividad difusa de membrana para CD99 (MIC-2)', 'Aspirado y biopsia bilateral de médula ósea obligatoria (estadiaje)'],
    imaging: ['Radiografía simple ósea: LESIÓN LÍTICA PERMEATIVA DIAFISARIA en "apolillado" con reacción perióstica multilaminar concéntrica en "CAPAS DE CEBOLLA" (Onion skin) y espículas en rayos de sol', 'RM de la extremidad entera y TC de tórax'],
    differential: ['Osteomielitis aguda o subaguda (clínica idéntica con fiebre y masa)', 'Osteosarcoma', 'Linfoma óseo', 'Neuroblastoma metastásico'],
    firstLine: [
      { drug: 'Quimioterapia Neoadyuvante de Primera Línea en Bloques Alternos (Protocolo VDC/IE)', dose: 'Vincristina + Doxorrubicina + Ciclofosfamida (VDC) alternando cada 2 a 3 semanas con Ifosfamida + Etopósido (IE) con soporte de G-CSF por 12 a 14 semanas', route: 'EV en hospitalización', freq: 'Cada 14-21 días', notes: 'Imprescindible para reducir el tumor y esterilizar micrometástasis sistémicas' },
      { drug: 'Control Local: Cirugía de Resección Completa en Bloque y/o Radioterapia', dose: 'Resección quirúrgica con márgenes amplios (el Sarcoma de Ewing es altamente radiosensible a diferencia del osteosarcoma)', route: 'Quirúrgico / Radioterapia', freq: 'Procedimiento local', notes: 'Combinación según localización anatómica' }
    ],
    alternatives: [
      { drug: 'Quimioterapia de altas dosis con rescate de progenitores hematopoyéticos autólogos (TAMO)', dose: 'Acondicionamiento con Busulfano/Melfalán', route: 'Celular EV', freq: 'Procedimiento consolidativo', notes: 'En pacientes de alto riesgo con metástasis pulmonares' }
    ],
    nonPharm: ['Rehabilitación motora y seguimiento a largo plazo'],
    nursingCare: ['NO CONFUNDIR CON OSTEOMIELITIS: Recordar que un niño con dolor óseo, masa palpable y fiebre puede tener un Sarcoma de Ewing; no iniciar antibióticos empíricos prolongados sin radiografía previa', 'Manejo de la hidratación y MESNA durante la infusión de Ifosfamida y Ciclofosfamida para prevenir cistitis hemorrágica', 'Soporte con Filgrastim subcutáneo diario tras cada ciclo de quimioterapia hasta la recuperación de neutrófilos']
  },
  {
    number: 526,
    id: 'diag-526',
    title: 'Tumor del estroma gastrointestinal (GIST)',
    cie10: 'C49.A',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia mesenquimatosa más común del tracto gastrointestinal (60% en estómago, 30% en intestino delgado), originada en las células intersticiales de Cajal (marcapasos de la motilidad intestinal). Caracterizado biológicamente en >85-90% por mutaciones activadoras en los receptores tirosina quinasa KIT (CD117) o PDGFRA. Su potencial de malignidad se estratifica según el tamaño tumoral y el índice mitótico.',
    symptoms: ['Hemorragia digestiva alta o baja (melenas, anemia ferropénica crónica por ulceración mucosa central)', 'Dolor o malestar abdominal vago e inespecífico con saciedad precoz', 'Masa abdominal palpable indolora y móvil', 'Obstrucción intestinal mecánica o perforación tumoral aguda'],
    redFlags: ['Rotura tumoral intraoperatoria o espontánea: DISEMINACIÓN PERITONEAL MASIVA (aumenta el riesgo de recidiva a casi 100%)'],
    criteria: 'Biopsia con inmunohistoquímica con positividad intensa y difusa para CD117 (c-KIT) y DOG-1.',
    labTests: ['Inmunohistoquímica para CD117 y DOG-1; estudio mutacional de KIT y PDGFRA (determina sensibilidad a Imatinib)'],
    imaging: ['TC de abdomen y pelvis con contraste (masa exofítica hipervascular heterogénea con necrosis central)', 'Ecoendoscopia (origen en la 4ta capa muscular propia)'],
    differential: ['Leiomioma o leiomiosarcoma gástrico', 'Adenocarcinoma gástrico', 'Schwannoma'],
    firstLine: [
      { drug: 'Resección Quirúrgica Completa con Márgenes Libres (R0) SIN Linfadenectomía', dose: 'Resección en cuña laparoscópica o abierta de la pared gástrica con pseudocápsula intacta', route: 'Quirúrgico', freq: 'Procedimiento curativo', notes: 'Los GIST no metastatizan por vía linfática; no requieren vaciamiento ganglionar reglado; NO romper la cápsula' },
      { drug: 'Terapia Dirigida con Imatinib oral (Adyuvante o Neoadyuvante)', dose: '400 mg VO al día durante 3 años continuos en pacientes con GIST de riesgo intermedio o alto (Miettinen)', route: 'VO con alimentos', freq: 'c/24h x 3 años', notes: 'Inhibe la tirosina quinasa KIT; reduce la recidiva postoperatoria en >50%' }
    ],
    alternatives: [
      { drug: 'Sunitinib oral o Regorafenib (en resistencia o intolerancia a Imatinib)', dose: 'Sunitinib 50 mg VO al día (4 semanas de tratamiento y 2 de descanso)', route: 'VO', freq: 'Según esquema', notes: 'Segunda línea de referencia ante mutaciones de resistencia secundaria' }
    ],
    nonPharm: ['Seguimiento con TC abdominal semestral durante los primeros 5 años'],
    nursingCare: ['MANIPULACIÓN QUIRÚRGICA CUIDADOSA: Advertir al equipo que el tumor GIST es friable; jamás traccionar fuertemente con pinzas para evitar la rotura de la cápsula que siembra todo el peritoneo', 'Adherencia al Imatinib oral diario: tomar con las comidas para evitar gastritis', 'Vigilancia de anemia y hemorragia digestiva oculta']
  },
  {
    number: 527,
    id: 'diag-527',
    title: 'Tumores neuroendocrinos digestivos (TNE) y Síndrome carcinoide',
    cie10: 'C7A.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasias derivadas del sistema celular neuroendocrino difuso, más frecuentes en el tracto gastrointestinal (íleon, apéndice cecal, recto) y páncreas. Secretan aminas y péptidos biológicamente activos (especialmente serotonina, histamina y bradicinina). El Síndrome Carcinoide ocurre cuando hay metástasis hepáticas que permiten que las sustancias eludan el metabolismo de primer paso hepático y alcancen la circulación sistémica.',
    symptoms: ['SÍNTOMAS DEL SÍNDROME CARCINOIDE CLÁSICO:', '- FLUSHING CUTÁNEO EPISÓDICO PAROXÍSTICO (enrojecimiento facial y del tórax superior con sensación de calor súbito desencadenado por estrés, alcohol o alimentos)', '- DIARREA ACUOSA CRÓNICA Y CÓLICOS ABDOMINALES (por hipermotilidad inducida por serotonina)', '- Broncoespasmo paroxístico con sibilancias y disnea tipo asma', '- CARDIOPATÍA CARCINOIDE FIBROSANTE (afectación valvular derecha: insuficiencia tricuspídea y estenosis pulmonar)', 'En TNE no funcionantes: masa abdominal asintomática, apendicitis aguda incidental o dolor sordo'],
    redFlags: ['CRISIS CARCINOIDE AGUDA: hipotensión refractaria masiva o hipertensión extrema, broncoespasmo letal y taquicardia desencadenada por anestesia o manipulación quirúrgica'],
    criteria: 'Determinación de Ácido 5-Hidroxiindolacético (5-HIAA) en orina de 24 horas y Cromogranina A sérica elevada.',
    labTests: ['ÁCIDO 5-HIDROXIINDOLACÉTICO (5-HIAA) EN ORINA DE 24 HORAS (metabolito de la serotonina: diagnóstico confirmatorio)', 'CROMOGRANINA A SÉRICA (CgA: marcador tumoral de masa y respuesta)', 'Péptido natriurético tipo B (NT-proBNP) para despistaje de cardiopatía carcinoide'],
    imaging: ['Gammagrafía con receptores de somatostatina (OctreoScan) o PET-CT con Galio-68 DOTATOC (estándar de oro: visualiza receptores SSTR2)'],
    differential: ['Síndrome de intestino irritable con diarrea', 'Menopausia con sofocos', 'Mastocitosis sistémica', 'Asma bronquial'],
    firstLine: [
      { drug: 'Análogos de la Somatostatina de Larga Duración: Octreótido LAR o Lanreótido Autogel', dose: 'Octreótido LAR 30 mg IM mensual o Lanreótido 120 mg SC mensual', route: 'IM / SC mensual', freq: 'Cada 28 días continuo', notes: 'Controlan completamente el flushing y la diarrea en >80% y estabilizan el crecimiento tumoral inhibiendo la proliferación' },
      { drug: 'Resección quirúrgica del tumor primario y metástasis hepáticas resecables', dose: 'Cirugía resectiva con márgenes', route: 'Quirúrgico', freq: 'Procedimiento curativo o citorreductor', notes: 'Disminuye la carga tumoral y mejora el síndrome' }
    ],
    alternatives: [
      { drug: 'Terapia con Radionúclidos de Receptores Peptídicos (PRRT): Lutecio-177 DOTATATE (Lutathera)', dose: '7.4 GBq (200 mCi) EV en infusión cada 8 semanas por 4 ciclos asociados a infusión de aminoácidos nefrorprotectores', route: 'Radioterapia metabólica EV', freq: 'Cada 8 semanas x 4 ciclos', notes: 'Tratamiento de elección en progresión con receptores de somatostatina positivos' }
    ],
    nonPharm: ['Dieta baja en triptófano y alimentos desencadenantes (quesos madurados, vino, chocolate)', 'PREMEDICACIÓN CON OCTREÓTIDO EV CONTINUO ANTES DE CIRUGÍA O ANESTESIA PARA EVITAR CRISIS CARCINOIDE MORTAL'],
    nursingCare: ['PREVENCIÓN DE CRISIS CARCINOIDE PERIOPERATORIA: Tener preparada una infusión continua de Octreótido EV (50-100 mcg/h) durante cualquier procedimiento invasivo, biopsia o anestesia para revertir colapsos hemodinámicos inmediatos', 'Instrucción para la recolección de 5-HIAA en orina de 24 horas: evitar plátanos, piña, nueces, tomates, berenjenas y paracetamol 3 días antes de la toma de orina porque causan falsos positivos', 'Vigilancia de signos de insuficiencia cardíaca derecha (edema maleolar, ingurgitación yugular)']
  },
  {
    number: 528,
    id: 'diag-528',
    title: 'Cáncer de testículo (Seminoma y No Seminoma)',
    cie10: 'C62.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'La neoplasia maligna sólida más común en varones jóvenes de 15 a 35 años. Derivada en >95% de las células germinales, clasificándose en Seminoma Puro (50%, más indolente y radiosensible) y Tumores de Células Germinales No Seminoma (50%: carcinoma embrionario, teratoma, tumor del seno endodérmico y coriocarcinoma). Es uno de los mayores éxitos de la oncología moderna, con tasas de curación >95% incluso con metástasis.',
    symptoms: ['MASA O NÓDULO TESTICULAR PALPABLE DURO, PÉTREO E INDOLORO (descubierto frecuentemente por el propio paciente o su pareja)', 'Sensación de pesadez o tirantez en el escroto o hemiescroto afectado', 'Aumento de tamaño global del testículo sin signos de flogosis aguda', 'Dolor agudo en <10% secundario a hemorragia o infarto intratumoral', 'Ginecomastia bilateral (por producción de beta-hCG en tumores no seminoma)', 'En enfermedad metastásica: dolor lumbar sordo (adenopatías retroperitoneales gigantes), tos o disnea (metástasis pulmonares en "suelta de globos")'],
    redFlags: ['CONTRAINDICACIÓN ABSOLUTA DE BIOPSIA TESTICULAR O ABORDAJE POR VÍA ESCROTAL (la incisión escrotal altera el drenaje linfático diseminando el cáncer a ganglios inguinales; EL ABORDAJE DEBE SER SIEMPRE INGUINAL)'],
    criteria: 'Masa intratesticular sólida vascularizada en ecografía Doppler testicular confirmada por Orquiectomía Radical Inguinal.',
    labTests: ['MARCADORES TUMORALES SÉRICOS TRIPLES OBLIGATORIOS (antes y después de la orquiectomía):', '- Alfa-fetoproteína (AFP: elevada en seno endodérmico y carcinoma embrionario; ¡NUNCA SE ELEVA EN SEMINOMA PURO!)', '- Fracción beta de Gonadotropina Coriónica Humana (beta-hCG)', '- Deshidrogenasa Láctica (LDH: refleja volumen tumoral)'],
    imaging: ['Ecografía testicular bilateral de alta resolución con Doppler color (demuestra masa sólida intratesticular hipoecoica vascularizada)', 'TC de tórax, abdomen y pelvis con contraste (estadiaje retroperitoneal y pulmonar)'],
    differential: ['Epididimitis aguda (cursa con dolor agudo, fiebre y signo de Prehn positivo)', 'Hidrocele o espermatocele (transiluminación positiva)', 'Orquitis bacteriana'],
    firstLine: [
      { drug: 'ORQUIECTOMÍA RADICAL POR VÍA INGUINAL CON LIGADURA ALTA DEL CORDÓN ESPERMÁTICO (TRATAMIENTO DIAGNÓSTICO Y CURATIVO INICIAL)', dose: 'Extirpación del testículo entero con cordón espermático a través de una incisión inguinal oblicua (NUNCA escrotal)', route: 'Quirúrgico urológico', freq: 'Procedimiento inicial obligatorio', notes: 'Permite el diagnóstico histológico y cura la gran mayoría de estadios I' },
      { drug: 'Quimioterapia de Primera Línea en Enfermedad Diseminada o de Riesgo: Esquema BEP', dose: 'Bleomicina 30 UI EV días 1, 8 y 15 + Etopósido 100 mg/m2 EV días 1 a 5 + Cisplatino 20 mg/m2 EV días 1 a 5 cada 21 días durante 3 o 4 ciclos', route: 'EV en hospitalización', freq: 'Cada 21 días x 3-4 ciclos', notes: 'Estándar curativo mundial; logra curación completa incluso con metástasis múltiples viscerales en >80-90%' }
    ],
    alternatives: [
      { drug: 'Vigilancia Activa en Seminoma o No Seminoma Estadio I', dose: 'Monitoreo estricto con marcadores tumorales y TC seriada sin quimioterapia', route: 'Seguimiento', freq: 'Periódico', notes: 'Evita sobretratamiento tóxico con tasa de rescate del 100%' },
      { drug: 'Linfadenectomía Retroperitoneal (RPLND)', dose: 'Resección de masas ganglionares residuales post-quimioterapia >1 cm en tumores no seminomatosos', route: 'Quirúrgico', freq: 'Procedimiento de consolidación', notes: 'Extirpa tejido teratomatoso o necrosis residual' }
    ],
    nonPharm: ['CRIOPRESERVACIÓN DE SEMEN OBLIGATORIA PREVIA A LA ORQUIECTOMÍA O QUIMIOTERAPIA en banco de esperma'],
    nursingCare: ['AUTOEXPLORACIÓN TESTICULAR EN VARONES JÓVENES: Enseñar a los adolescentes y adultos de 15 a 35 años a palpar suavemente cada testículo con el pulgar y el índice una vez al mes tras una ducha con agua tibia; cualquier nódulo duro indoloro debe ser evaluado ese mismo mes', 'PRESERVACIÓN DE LA FERTILIDAD: Coordinar de forma prioritaria la toma de muestra para banco de semen antes de iniciar el esquema BEP', 'Monitoreo de toxicidad pulmonar por Bleomicina e hidratación estricta con Cisplatino']
  },
  {
    number: 529,
    id: 'diag-529',
    title: 'Cáncer de pene (Carcinoma epidermoide de pene)',
    cie10: 'C60.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna de células escamosas originada con mayor frecuencia en el glande (48%) o prepucio (25%), estrechamente vinculada a la falta de circuncisión con fimosis congénita/adquirida, mala higiene genital con retención de esmegma irritante crónico, tabaquismo e infección por Virus del Papiloma Humano (VPH 16 y 18 en >40-50%). Muy prevalente en regiones rurales y de bajos recursos en el Perú.',
    symptoms: ['Lesión exofítica vegetante ("en coliflor") o úlcera infiltrante indurada en el glande o surco balanoprepucial', 'Secreción fétida, purulenta o sanguinolenta que escapa por el meato prepucial en pacientes con fimosis estrecha que impide la retracción', 'Induración palpable o engrosamiento indoloro bajo la piel del prepucio', 'Dolor local tardío, prurito o sangrado tras traumatismos menores', 'ADENOPATÍAS INGUINALES PALPABLES INDURADAS (presentes al diagnóstico en >50%; pueden ser inflamatorias reactivas por sobreinfección o metástasis ganglionares verdaderas)'],
    redFlags: ['Retraso diagnóstico severo de meses o años por vergüenza, pudor o miedo del paciente con invasión uretral profunda'],
    criteria: 'Biopsia incisional o en cuña de la lesión peneana confirmando carcinoma escamoso.',
    labTests: ['Histopatología e inmunohistoquímica para p16 (marcador de VPH)'],
    imaging: ['Ecografía o RM de pene con erección farmacológica (evalúa infiltración de los cuerpos cavernosos y cuerpo esponjoso)', 'TC o ecografía inguinal para estadiaje ganglionar'],
    differential: ['Chancroide o chancro sifilítico primario', 'Condiloma acuminado gigante de Buschke-Löwenstein', 'Balano-postitis crónica erosiva'],
    firstLine: [
      { drug: 'Tratamiento Quirúrgico Conservador o Radical según estadio local:', dose: 'En lesiones superficiales (Tis, Ta, T1a): Cirugía conservadora de glande (Glandectomía o escisión local amplia con margen de 3-5 mm); en tumores invasores T2-T4: PENECTOMÍA PARCIAL (preservando un muñón con uretrostomía para permitir la micción de pie) o PENECTOMÍA TOTAL con uretrostomía perineal', route: 'Quirúrgico urológico', freq: 'Procedimiento curativo', notes: 'Pilar curativo de referencia; buscar márgenes quirúrgicos negativos' },
      { drug: 'Linfadenectomía Inguinal bilateral modificada o radical', dose: 'Resección ganglionar inguinal reglada si hay ganglios palpables tras antibioterapia o en tumores de alto grado T1b-T4', route: 'Quirúrgico', freq: 'Procedimiento de estadiaje/curativo', notes: 'EL FACTOR PRONÓSTICO MÁS IMPORTANTE PARA LA SUPERVIVENCIA' }
    ],
    alternatives: [
      { drug: 'Quimioterapia sistémica neoadyuvante o adyuvante con TIP (Paclitaxel + Ifosfamida + Cisplatino)', dose: 'Ciclos cada 3 semanas en pacientes con ganglios inguinales fijos o N2-N3', route: 'EV', freq: 'Cada 21 días', notes: 'Permite rescatar tumores ganglionares avanzados' }
    ],
    nonPharm: ['CIRCUNCISIÓN NEONATAL O INFANTIL PRECOZ EN FIMOSIS (elimina prácticamente el 100% del riesgo de cáncer de pene en la vida adulta)'],
    nursingCare: ['APOYO EMOCIONAL Y PSICOLÓGICO ANTE LA MUTILACIÓN GENITAL: La penectomía parcial o total causa un impacto psíquico devastador en la masculinidad, autoimagen y sexualidad; brindar un trato profundamente empático, respetuoso y libre de juicios de valor', 'Cuidados de la uretrostomía perineal: mantener la zona limpia y seca, enseñar la técnica de higiene miccional en sedestación y prevenir estenosis del meato mediante dilataciones suaves si se prescriben', 'Promover la circuncisión en niños con fimosis y educar sobre higiene diaria con retracción del prepucio y agua']
  },
  {
    number: 530,
    id: 'diag-530',
    title: 'Cáncer de vulva (Carcinoma epidermoide vulvar)',
    cie10: 'C51.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia ginecológica maligna poco común que compromete los genitales externos femeninos (labios mayores en 50%, labios menores en 20% y clítoris). Presenta dos vías fisiopatológicas: 1. Vía asociada a infección por VPH (mujeres más jóvenes, asociada a neoplasia intraepitelial vulvar VIN común) y 2. Vía no asociada a VPH (mujeres ancianas postmenopáusicas con Liquen Escleroso vulvar crónico de larga data y mutación TP53).',
    symptoms: ['PRURITO VULVAR CRÓNICO, INTENSO Y REBELDE que no responde a cremas o antimicóticos (el síntoma más común y prolongado)', 'Presencia de un nódulo, placa sobreelevada, verruga indurada o úlcera vulvar que sangra fácilmente', 'Dolor, ardor o quemazón vulvar local', 'Disuria dolorosa externa por contacto de la orina con la lesión ulcerada', 'Adenopatía inguinal palpable indurada homolateral o bilateral dolorosa'],
    redFlags: ['Toda lesión nodular o ulcerada en vulva en mujeres mayores con liquen escleroso EXIGE BIOPSIA'],
    criteria: 'Biopsia vulvar con sacabocados (punch de 4 mm) bajo anestesia local confirmando carcinoma epidermoide.',
    labTests: ['Histopatología e inmunohistoquímica para p16'],
    imaging: ['RM de pelvis y vulva con contraste y ecografía inguinal con PAAF de ganglios sospechosos'],
    differential: ['Liquen escleroso vulvar no neoplásico', 'Condiloma acuminado por VPH', 'Carcinoma basocelular vulvar', 'Melanoma vulvar'],
    firstLine: [
      { drug: 'Vulvectomía Radical Parcial / Escisión Local Amplia con márgenes libres de 1 cm', dose: 'Resección completa de la lesión con margen histológico libre tridimensional >=8-10 mm en tejido fijado', route: 'Quirúrgico ginecológico', freq: 'Procedimiento curativo', notes: 'Reemplazó a la vulvectomía radical completa mutilante; preserva la anatomía funcional' },
      { drug: 'Biopsia del Ganglio Centinela Inguinal (BSGC) o Linfadenectomía Inguino-Femoral', dose: 'Mapeo linfático inguinal bilateral con nanocoloide de tecnecio y verde de indocianina', route: 'Quirúrgico', freq: 'Procedimiento simultáneo', notes: 'Obligatoria en tumores con invasión estromal >1 mm (T1b o superior)' }
    ],
    alternatives: [
      { drug: 'Radioterapia Externa inguinal y pélvica adyuvante con Quimioterapia sensibilizadora (Cisplatino)', dose: 'Radioterapia fraccionada si hay ganglios inguinales positivos con ruptura extracapsular', route: 'Radioterapia + EV', freq: 'Protocolo adyuvante', notes: 'Reduce las recaídas ganglionares' }
    ],
    nonPharm: ['Tratamiento continuo con corticoides tópicos ultrapotentes (Clobetasol) en mujeres con Liquen Escleroso para prevenir la progresión maligna'],
    nursingCare: ['CUIDADOS DE LA HERIDA QUIRÚRGICA VULVAR Y PREVENCIÓN DE INFECCIÓN: La herida vulvar está expuesta a maceración y contaminación por orina y heces; realizar curaciones estériles dos veces al día con suero salino templado y secado suave con gasas o aire tibio; mantener la zona limpia y seca', 'Vigilancia de dehiscencia de la sutura (muy común por tensión de la piel)', 'Prevención de linfedema crónico de miembros inferiores post-linfadenectomía inguinal']
  },
  {
    number: 531,
    id: 'diag-531',
    title: 'Neurinoma del acústico (Schwannoma vestibular)',
    cie10: 'D33.3',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Tumor intracraneal benigno, encapsulado y de crecimiento muy lento originado a partir de las células de Schwann de la rama vestibular del VIII par craneal (nervio vestibulococlear) en el conducto auditivo interno y ángulo pontocerebeloso. Aunque es histológicamente benigno, compromete estructuras vitales por compresión mecánica progresiva. En el 95% es unilateral esporádico; si es bilateral, es patognomónico de NEUROFIBROMATOSIS TIPO 2 (mutación NF2 / Merlina).',
    symptoms: ['HIPOACUSIA NEUROSENSORIAL UNILATERAL Y ASIMÉTRICA PROGRESIVA DE AÑOS DE EVOLUCIÓN (el síntoma debut en >90% de los casos)', 'ACÚFENO O TINNITUS CONSTANTE EN UN SOLO OÍDO ("pitido o zumbido unilateral persistente")', 'Dificultad marcada para la discriminación de palabras por el teléfono en el oído afectado', 'Inestabilidad o desequilibrio sutil en la marcha (rara vez vértigo rotatorio severo por compensación vestibular central)', 'EN TUMORES GRANDES (>2 a 3 cm con invasión del ángulo pontocerebeloso):', '- HIPOESTESIA O ADORMECIMIENTO FACIAL Y PÉRDIDA DEL REFLEJO CORNEAL (compresión del V par craneal)', '- Parálisis facial periférica (compresión del VII par)', '- Ataxia cerebelosa y marcha en estrella con dismetría', '- Hipertensión endocraneana por hidrocefalia obstructiva'],
    redFlags: ['TODA HIPOACUSIA NEUROSENSORIAL O ACÚFENO ASIMÉTRICO UNILATERAL EXIGE RM CEREBRAL PARA DESCARTAR NEURINOMA'],
    criteria: 'RM cerebral con secuencias potenciadas en T1 con gadolinio y secuencias de alta resolución FIESTA/CISS demostrando masa en conducto auditivo interno y cisterna del ángulo pontocerebeloso.',
    labTests: ['Audiometría tonal liminar y Logoaudiometría (demuestra caída neurosensorial en frecuencias agudas y pobre discriminación verbal)', 'Potenciales Evocados Auditivos del Tronco Cerebral (PEATC: prolongación de la latencia interpicos I-III y I-V)'],
    imaging: ['RM de encéfalo con contraste centrada en ángulo pontocerebeloso (estándar de oro: masa en "cono de helado" centrada en el porus acústico)'],
    differential: ['Meningioma del ángulo pontocerebeloso', 'Quiste epidermoide', 'Enfermedad de Ménière', 'Hipoacusia súbita idiopática'],
    firstLine: [
      { drug: 'Conducta Expectante y Vigilancia con RM seriada ("Wait and Scan")', dose: 'RM de control a los 6 meses y luego anual en tumores pequeños <1-1.5 cm en ancianos o asintomáticos', route: 'Observación por imagen', freq: 'Anual', notes: 'Muchos schwannomas no crecen o crecen a menos de 1 mm al año' },
      { drug: 'Radiocirugía Estereotáctica (Gamma Knife / CyberKnife) (TRATAMIENTO DE ELECCIÓN EN TUMORES PEQUEÑOS A MEDIANOS <2.5-3 CM)', dose: 'Dosis única concentrada de radiación de precisión (11 a 13 Gy) en consultorio especializado', route: 'Radiocirugía ambulatoria', freq: 'Sesión única', notes: 'Control tumoral >95% a 10 años preservando la función del nervio facial en >98%' },
      { drug: 'Microcirugía Neuroquirúrgica (Vía Retrosigmoidea o Translaberíntica)', dose: 'Resección microquirúrgica completa o subtotal con monitorización intraoperatoria continua de los nervios facial y coclear', route: 'Neuroquirúrgico', freq: 'Procedimiento definitivo', notes: 'Indicada en tumores grandes >3 cm con compresión del tronco encefálico o hidrocefalia' }
    ],
    alternatives: [
      { drug: 'Bevacizumab endovenoso (en Schwannomas vestibulares asociados a Neurofibromatosis tipo 2)', dose: '5 a 10 mg/kg EV cada 2 a 3 semanas', route: 'EV', freq: 'c/2-3 semanas', notes: 'Estabiliza el tumor y mejora transitoriamente la audición en NF2 bilateral' }
    ],
    nonPharm: ['Rehabilitación vestibular y audífonos osteointegrados'],
    nursingCare: ['DETECCIÓN DE SÍNTOMAS ASIMÉTRICOS DE ENFERMERÍA: Si un paciente consulta por pérdida de audición o pitidos en UN SOLO OÍDO, nunca atribuirlo a "tapón de cera" sin otoscopia y derivar a audiometría y RM; no dejar pasar el tiempo', 'Cuidados postoperatorios de craneotomía de fosa posterior: vigilancia estricta del nervio facial (evaluar si puede cerrar el ojo y sonreír)', 'Protección corneal en parálisis facial postquirúrgica: lágrimas artificiales cada hora y parche oclusor nocturno para prevenir úlcera corneal neurotrófica']
  },
  {
    number: 532,
    id: 'diag-532',
    title: 'Meduloblastoma pediátrico',
    cie10: 'C71.6',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El tumor cerebral maligno embrionario más común en la infancia (representa el 20% de todos los tumores del SNC pediátricos, con pico entre los 5 y 9 años de edad). Neoplasia de grado 4 de la OMS de células pequeñas redondas indiferenciadas de la fosa posterior, originada en el techo del cuarto ventrículo (vermis cerebeloso). Se clasifica molecularmente en 4 grupos: WNT (excelente pronóstico), SHH, Grupo 3 (muy agresivo) y Grupo 4.',
    symptoms: ['SÍNDROME DE HIPERTENSIÓN ENDOCRANEANA POR HIDROCEFALIA OBSTRUCTIVA AGUDA:', '- CEFALEA MATUTINA PROGRESIVA QUE DESPIERTA AL NIÑO POR LA NOCHE', '- VÓMITOS MATUTINOS EN PROYECTIL (muchas veces sin náusea previa, seguidos de alivio transitorio)', '- Letargo, irritabilidad, cambios de conducta y bajo rendimiento escolar', '- EDEMA DE PAPILA BILATERAL en fondo de ojo con diplopía por parálisis del VI par craneal', 'SÍNDROME CEREBELOSO DE LÍNEA MEDIA (Vermis cerebeloso):', '- ATAXIA DE LA MARCHA Y DEL TRONCO ("marcha de ebrio con base de sustentación amplia y caídas frecuentes")', '- Dismetría, temblor intencional y nistagmo horizontal o vertical'],
    redFlags: ['HERNIACIÓN AMIGDALINA CEREBELOSA POR EL FORAMEN MAGNO CON PARO RESPIRATORIO SÚBITO', 'Metástasis en gota a lo largo del neuroeje medular (drop metastases)'],
    criteria: 'RM cerebral y espinal contrastada y confirmación histopatológica con biología molecular post-resección.',
    labTests: ['Punción lumbar para citología de LCR diferida (estudia diseminación leptomeníngea; SOLO TRAS RESOLVER LA HIDROCEFALIA para evitar enclavamiento)'],
    imaging: ['RM craneal con contraste (masa sólida hiperdensa en cuarto ventrículo con realce homogéneo y restricción en DWI)', 'RM de toda la médula espinal con gadolinio (estadiaje obligatorio del neuroeje)'],
    differential: ['Astrocitoma pilocítico de cerebelo (grado 1 OMS, quístico con nódulo mural)', 'Ependimoma del IV ventrículo', 'Glioblastoma'],
    firstLine: [
      { drug: 'Resección Neuroquirúrgica Máxima Segura (Tratamiento Primario de Elección)', dose: 'Craneotomía de fosa posterior con extirpación tumoral completa o subtotal (<1.5 cm2 residual) preservando el tronco encefálico +/- Derivación Ventrículo-Peritoneal para la hidrocefalia', route: 'Neuroquirúrgico de urgencia', freq: 'Procedimiento inicial', notes: 'Alivia la hipertensión endocraneana y proporciona el tejido para estadificación molecular' },
      { drug: 'Radioterapia Cranoespinal (RCE) + Sobredosis en Fosa Posterior (en niños mayores de 3-4 años)', dose: 'Radioterapia a todo el cerebro y médula espinal (23.4 a 36 Gy) + boost tumoral (54-55 Gy)', route: 'Radioterapia externa', freq: 'Fraccionada', notes: 'Imprescindible para esterilizar las siembras tumorales en el LCR; contraindicada en <3 años por daño neurocognitivo irreversible masivo' },
      { drug: 'Quimioterapia Sistémica adyuvante intensiva (Protocolo tipo Packer o St. Jude)', dose: 'Cisplatino + Lomustina + Vincristina + Ciclofosfamida', route: 'EV', freq: 'Ciclos mensuales', notes: 'Curación en >70-85% de meduloblastomas de riesgo estándar' }
    ],
    alternatives: [
      { drug: 'Quimioterapia de altas dosis con rescate autólogo de células madre en menores de 3 años', dose: 'Protocolo Head Start libre de radioterapia', route: 'EV celular', freq: 'Protocolo especializado', notes: 'Retrasa o evita la radioterapia en lactantes preservando su desarrollo cerebral' }
    ],
    nonPharm: ['Rehabilitación neurológica, fisioterapia motora y apoyo psicopedagógico'],
    nursingCare: ['VIGILANCIA DE HIPERTENSIÓN ENDOCRANEANA CRÍTICA EN PEDIATRÍA: Si el niño presenta bradicardia con hipertensión arterial sistólica (tríada de Cushing) o somnolencia rápidamente progresiva, avisar al neurocirujano inmediatamente (riesgo inminente de enclavamiento amigdalino)', 'Vigilancia del Síndrome de Mutismo Cerebeloso postquirúrgico: pérdida transitoria del habla e hipotonía emocional que aparece a los 2-3 días de la cirugía de fosa posterior; tranquilizar a los padres', 'Cuidado de catéteres de derivación ventricular externa y control del balance hídrico']
  },
  {
    number: 533,
    id: 'diag-533',
    title: 'Ependimoma del sistema nervioso central (Intracraneal y Espinal)',
    cie10: 'C71.5 / C72.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia del neuroectodermo originada a partir de las células ependimarias que tapizan los ventrículos cerebrales y el conducto central del epéndimo en la médula espinal. En niños, la gran mayoría (90%) son intracraneales y se localizan en la fosa posterior ocupando el cuarto ventrículo; en adultos, predominan en la médula espinal cervical o cono medular/filum terminale (ependimoma mixopapilar grado 2).',
    symptoms: ['En Ependimoma de Fosa Posterior Infantil:', '- Hipertensión endocraneana por hidrocefalia obstructiva: cefalea matutina, vómitos y letargo', '- Síntomas de pares craneales bajos: disfagia, cambios en la voz, tortícolis persistente y ataxia', 'En Ependimoma Espinal del Adulto:', '- Dolor de espalda o dolor radicular continuo y quemante que empeora en decúbito nocturno', '- Paraparesia o debilidad motora progresiva en miembros inferiores', '- Parestesias, hipoestesia con nivel sensitivo medular y disfunción de esfínteres (vejiga neurógena)'],
    redFlags: ['Crecimiento a través de los agujeros de Luschka y Magendie hacia el foramen magno envolviendo pares craneales bajos'],
    criteria: 'Confirmación anatomopatológica con presencia típica de PSEUDORROSETAS PERIVASCULARES y rosetas ependimarias verdaderas.',
    labTests: ['Citología de LCR para despistaje de diseminación'],
    imaging: ['RM craneal y espinal completa con contraste intravenoso (masa intraventricular plástica que "se amolda y fluye a través de los orificios del IV ventrículo")', 'RM de columna total'],
    differential: ['Meduloblastoma (más invasivo, de techo del IV ventrículo)', 'Astrocitoma pilocítico', 'Schwannoma medular'],
    firstLine: [
      { drug: 'RESECCIÓN QUIRÚRGICA RADICAL COMPLETA (GTR - GROSS TOTAL RESECTION)', dose: 'Extirpación microquirúrgica completa guiada por neuronavegación y monitorización neurofisiológica', route: 'Neuroquirúrgico', freq: 'Procedimiento curativo', notes: 'EL FACTOR PRONÓSTICO MÁS IMPORTANTE; el pronóstico depende de que no quede ningún resto tumoral macroscópico' },
      { drug: 'Radioterapia Conformada / Radioterapia de Protones (Protonterapia) Local', dose: 'Radioterapia focal a dosis altas (54 a 59.4 Gy) en el lecho quirúrgico', route: 'Radioterapia de precisión', freq: 'Fraccionada', notes: 'Tratamiento adyuvante estándar para prevenir la recidiva local' }
    ],
    alternatives: [
      { drug: 'Quimioterapia sistémica adyuvante (en lactantes pequeños para retrasar radioterapia)', dose: 'Esquemas basados en Citarabina, Cisplatino y Etopósido', route: 'EV', freq: 'Protocolo pediátrico', notes: 'Respuesta modesta; el ependimoma es relativamente quimiorresistente comparado con meduloblastoma' }
    ],
    nonPharm: ['Monitoreo por RM de neuroeje cada 3 a 4 meses en los primeros 2 años'],
    nursingCare: ['Monitoreo neuroquirúrgico de pares craneales bajos (IX, X, XII): valorar deglución con prueba del agua antes de reiniciar la vía oral para prevenir broncoaspiración mortal', 'Cuidado de sondas nasogástricas o gastrostomías en niños con disfagia postoperatoria', 'Rehabilitación precoz de la marcha y continencia vesical en ependimomas medulares']
  },
  {
    number: 534,
    id: 'diag-534',
    title: 'Astrocitoma y Glioblastoma multiforme (IDH-mutado e IDH-salvaje)',
    cie10: 'C71.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El GLIOBLASTOMA (Grado 4 de la OMS) es el tumor cerebral primario maligno más común y letal en adultos (representa el 50% de todos los gliomas, con pico entre los 55 y 75 años). Caracterizado anatomopatológicamente por proliferación microvascular y necrosis en empalizada celular, con infiltración difusa microscópica del parénquima cerebral que impide su curación quirúrgica completa. Se subclasifica molecularmente en IDH-salvaje (el más común y agresivo) e IDH-mutado.',
    symptoms: ['SÍNTOMAS NEUROLÓGICOS FOCALES RÁPIDAMENTE PROGRESIVOS en cuestión de semanas:', '- Hemiparesia o debilidad motora en hemicuerpo progresiva', '- Alteración del lenguaje (afasia motora o comprensiva) o pérdida campimétrica visual', 'CRISIS CONVULSIVAS DE NUEVA APARICIÓN EN UN ADULTO previamente sano (crisis focales o secundariamente generalizadas)', 'CEFALEA PERSISTENTE INTENSA QUE EMPEORA POR LAS MAÑANAS o con maniobras de Valsalva', 'CAMBIOS MARCADOS DE LA PERSONALIDAD, la conducta, juicio o memoria (apatía, irritabilidad, desinhibición o torpeza cognitiva atribuida falsamente a depresión o demencia rápida)', 'Náuseas y vómitos por hipertensión endocraneana'],
    redFlags: ['HERNIACIÓN CEREBRAL TRANSTENTORIAL O SUBCINICINA POR EDEMA CEREBRAL VASOGÉNICO MASIVO (anisocoria, coma y paro respiratorio)'],
    criteria: 'Confirmación histopatológica con necrosis o proliferación microvascular y caracterización molecular (estado del gen IDH1/2 y metilación del promotor MGMT).',
    labTests: ['Estado de metilación del promotor del gen MGMT (marcador predictivo crucial de respuesta a Temozolomida; si está metilado responde significativamente mejor)'],
    imaging: ['RM cerebral con contraste multiparamétrica (estándar de oro: MASA INFILTRANTE HETEROGÉNEA CON REALCE EN ANILLO PERIFÉRICO GRUESO IRREGULAR Y ZONA DE NECROSIS CENTRAL, RODEADA DE EDEMA VASOGÉNICO DIGITIFORME EXTENSO QUE DESVÍA LA LÍNEA MEDIA)'],
    differential: ['Metástasis cerebral solitaria (origen en pulmón, mama, riñón o melanoma)', 'Absceso cerebral bacteriano piógeno', 'Infarto cerebral subagudo con realce de lujo', 'Linfoma primario del SNC'],
    firstLine: [
      { drug: 'Resección Neuroquirúrgica Citorreductora Máxima Segura guiada por 5-ALA (Fluorescencia con ácido 5-aminolevulínico)', dose: 'Craneotomía con extirpación de todo el tejido tumoral captante de fluorescencia rosada bajo luz azul preservando áreas elocuentes del lenguaje/motoras con mapeo cortical despierto', route: 'Neuroquirúrgico', freq: 'Procedimiento inicial', notes: 'Maximiza el tejido resecado reduciendo el volumen tumoral residual' },
      { drug: 'PROTOCOLO STUPP (ESTÁNDAR MUNDIAL DE QUIMIORRADIOTERAPIA CONCOMITANTE Y ADYUVANTE)', dose: 'Fase Concomitante: Radioterapia externa focalizada conformada (60 Gy en 30 fracciones) + TEMOZOLOMIDA ORAL 75 mg/m2/día de lunes a domingo durante las 6 semanas de radioterapia; seguido de Fase Adyuvante: Temozolomida 150 a 200 mg/m2/día VO durante los Días 1 a 5 de cada ciclo de 28 días por 6 CICLOS', route: 'Radioterapia + VO', freq: 'Protocolo de Stupp', notes: 'El estándar de oro terapéutico internacional probado que duplica la supervivencia a 2 y 5 años' }
    ],
    alternatives: [
      { drug: 'Campos de Tratamiento Eléctrico del Tumor (TTFields / Optune)', dose: 'Dispositivo médico portátil con parches transcutáneos en la cabeza que emite campos eléctricos de frecuencia intermedia (200 kHz) al menos 18 horas al día', route: 'Dispositivo biomédico continuo', freq: 'Uso continuo ambulatorio', notes: 'Alarga significativamente la supervivencia asociado a temozolomida inhibiendo la mitosis' },
      { drug: 'Bevacizumab endovenoso (anti-VEGF) en Progresión o Edema Refractario', dose: '10 mg/kg EV cada 2 semanas', route: 'EV', freq: 'c/2 semanas', notes: 'Excelente reductor del edema cerebral vasogénico permitiendo retirar corticoides' }
    ],
    nonPharm: ['CONTROL DEL EDEMA CEREBRAL AGUDO CON DEXAMETASONA: Dexametasona 4 a 8 mg VO/EV cada 6 a 8 horas con protector gástrico'],
    nursingCare: ['MANEJO DE CORTICOIDES EN EL EDEMA VASOGÉNICO DE ENFERMERÍA: La Dexametasona produce mejoría neurológica rápida en 24-48 horas; administrar siempre con Omeprazol y alimentos; monitorear glucemia capilar horaria (frecuente hiperglucemia esteroidea severa) y pauta descendente progresiva', 'Monitoreo hematológico con Temozolomida: control semanal de plaquetas y neutrófilos los días 21 a 28 de cada ciclo (vigilar trombocitopenia)', 'Manejo de crisis epilépticas en el hogar: educar al cuidador sobre colocación en decúbito lateral de seguridad y uso de Midazolam bucal o Diazepam rectal de rescate']
  },
  {
    number: 535,
    id: 'diag-535',
    title: 'Tumor de Wilms (Nefroblastoma pediátrico)',
    cie10: 'C64',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El tumor renal maligno primario más común en la infancia (>90% de los tumores renales en niños, con pico de incidencia entre los 2 y 4 años de edad), originado en los restos de blastema metanéfrico embrionario. Se asocia a mutaciones en el gen supresor tumoral WT1 (cromosoma 11p13) y síndromes genéticos (WAGR, Denys-Drash, Beckwith-Wiedemann). Es un tumor altamente curable con tasas de supervivencia global >90%.',
    symptoms: ['MASA ABDOMINAL O EN EL FLANCO ASINTOMÁTICA PALPABLE GRANDE, LISA, FIRME Y UNILATERAL que no cruza la línea media (descubierta frecuentemente por los padres al bañar o cambiar de ropa al niño)', 'Dolor abdominal sordo leve o distensión abdominal', 'HEMATURIA MICROSCÓPICA O MACROSCÓPICA en 25-30% de los casos', 'HIPERTENSIÓN ARTERIAL SISTÉMICA en 25% (por hiperreninemia debida a isquemia renal por compresión)', 'Fiebre inexplicada y astenia', 'Enfermedad avanzada: metástasis pulmonares (el sitio metastásico más común en >80%)'],
    redFlags: ['PALPACIÓN ABDOMINAL VIGOROSA O BRUSCA REPETIDA POR MÚLTIPLES PROFESIONALES: CONTRAINDICADA TOTALMENTE; riesgo de ROTURA DE LA CÁPSULA TUMORAL con hemorragia masiva y diseminación peritoneal que empeora el estadio a Estadio III'],
    criteria: 'Masa renal intrahepática/intraprostática sólida en ecografía y TC abdominal con confirmación anatomopatológica trifásica (blastema, epitelio y estroma).',
    labTests: ['Examen de orina completo (hematuria), hemograma y función renal'],
    imaging: ['Ecografía abdominal Doppler (demuestra masa intrarrenal grande heterogénea y evalúa permeabilidad de la vena renal y vena cava inferior)', 'TC de tórax, abdomen y pelvis con contraste (estadiaje de extensión local y metástasis pulmonares)'],
    differential: ['Neuroblastoma suprarrenal (muy calcificado, cruza la línea media, invade vasos sanguíneos y produce catecolaminas urinarias elevadas)', 'Hidronefrosis congénita masiva', 'Quiste multilocular renal'],
    firstLine: [
      { drug: 'Protocolo SIOP (Estándar en Europa y Perú): Quimioterapia Neoadyuvante Preoperatoria', dose: 'Vincristina semanal + Dactinomicina (Actinomicina D) durante 4 semanas previo a la cirugía (6 semanas si metastásico)', route: 'EV', freq: 'Protocolo neoadyuvante', notes: 'Reduce significativamente el tamaño tumoral y engrosa la cápsula, minimizando el riesgo de rotura intraoperatoria accidental' },
      { drug: 'NEFRECTOMÍA RADICAL EN BLOQUE CON LINFADENECTOMÍA REGIONAL REGLADA', dose: 'Extirpación completa transperitoneal del riñón afecto con la fascia de Gerota intacta y muestreo de ganglios del hilio renal y paraaórticos', route: 'Quirúrgico pediátrico', freq: 'Procedimiento curativo', notes: 'Pilar curativo indispensable; evitar rigurosamente la rotura tumoral' },
      { drug: 'Quimioterapia Adyuvante Postoperatoria adaptada a la histología (Favorable vs Anaplásica desfavorable)', dose: 'Vincristina + Dactinomicina +/- Doxorrubicina durante 6 a 9 meses', route: 'EV', freq: 'Protocolo adyuvante', notes: 'Consolida la curación definitiva en >90% de los niños' }
    ],
    alternatives: [
      { drug: 'Cirugía de Preservación de Nefronas (Nefrectomía Parcial)', dose: 'En tumores de Wilms bilaterales sincrónicos (5-7%) o riñón único congénito', route: 'Quirúrgico especializado', freq: 'Procedimiento conservador', notes: 'Preserva la función renal evitando la insuficiencia renal terminal y diálisis' }
    ],
    nonPharm: ['COLOCACIÓN DE UN CARTEL DE ADVERTENCIA EN LA CUNA DEL LACTANTE: "NO PALPAR EL ABDOMEN"'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: PROHIBIDO PALPAR REPETIDAMENTE EL ABDOMEN DEL NIÑO CON SOSPECHA DE TUMOR DE WILMS; colocar un cartel visible en la cabecera de la cama para evitar que estudiantes o médicos palpen el tumor, ya que la cápsula es sumamente frágil y una rotura provoca siembra peritoneal inmediata', 'Monitoreo de la Presión Arterial en el niño: registrar la PA con manguito adecuado al brazo pediátrico (la hipertensión inducida por renina suele normalizarse tras la extirpación tumoral)', 'Vigilancia de extravasación de Dactinomicina y Vincristina en vías periféricas']
  },
  {
    number: 536,
    id: 'diag-536',
    title: 'Mesotelioma pleural maligno',
    cie10: 'C45.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna primaria sumamente agresiva e infrecuente originada en las células mesoteliales de la pleura parietal y visceral, causada de forma prácticamente exclusiva (>80%) por la EXPOSICIÓN OCUPACIONAL O AMBIENTAL A FIBRAS DE ASBESTO O AMIANTO tras un periodo de latencia muy prolongado de 20 a 50 años. Se clasifica histológicamente en Epitelioide (el más frecuente 60% y mejor pronóstico), Sarcomatoide y Bifásico/Mixto.',
    symptoms: ['DISNEA DE ESFUERZO PROGRESIVA Y GRAVE secundaria a derrame pleural masivo o coraza pleural restrictiva', 'DOLOR TORÁCICO NO PLEURÍTICO, PROFUNDO, SORDO Y CONSTANTE en la pared torácica que empeora con el tiempo por invasión intercostal directa', 'Pérdida de peso involuntaria, astenia, febrícula vespertina y sudoración nocturna', 'Asimetría del hemitórax afecto con retracción de la pared torácica e inmovilidad respiratoria unilateral', 'Tos seca irritativa persistente'],
    redFlags: ['Compresión de estructuras mediastínicas o invasión de pericardio con taponamiento cardíaco'],
    criteria: 'Biopsia pleural con toracoscopia médica (VATS) con inmunohistoquímica (Calretinina, WT1 y D2-40 positivas; Claudina-4 y CEA negativos).',
    labTests: ['Inmunohistoquímica diagnóstica obligatoria', 'Líquido pleural: exudado hemorrágico o serohemorrágico con glucosa baja y citología frecuentemente no concluyente'],
    imaging: ['TC de tórax con contraste intravenoso: ENGROSAMIENTO PLEURAL NODULAR CIRCUNFERENCIAL DIFUSO >1 cm ("en coraza pleural que atrapa el pulmón") con afectación de la pleura mediastínica y cisuras', 'PET-CT con 18-FDG'],
    differential: ['Adenocarcinoma pulmonar periférico con metástasis pleurales', 'Placas pleurales benignas por asbesto', 'Tuberculosis pleural'],
    firstLine: [
      { drug: 'Inmunoterapia de Primera Línea de Referencia: Doble Bloqueo con Nivolumab + Ipilimumab (Ensayo CheckMate 743)', dose: 'Nivolumab 3 mg/kg EV cada 2 semanas (o 360 mg c/3 semanas) + Ipilimumab 1 mg/kg EV cada 6 semanas de forma continua', route: 'EV', freq: 'Protocolo inmunoterápico', notes: 'Nuevo estándar de oro mundial; primer régimen que supera sustancialmente a la quimioterapia con platinos, especialmente en subtipos no epitelioides' }
    ],
    alternatives: [
      { drug: 'Quimioterapia clásica de primera línea: Cisplatino + Pemetrexed', dose: 'Cisplatino 75 mg/m2 + Pemetrexed 500 mg/m2 EV cada 21 días por 6 ciclos con suplementación obligatoria de Ácido Fólico y Vitamina B12', route: 'EV', freq: 'Cada 21 días', notes: 'Esquema de referencia para pacientes no candidatos a inmunoterapia' }
    ],
    nonPharm: ['Toracocentesis evacuadora y pleurodesis con talco o colocación de catéter pleural tunelizado para control del derrame maligno'],
    nursingCare: ['ANTECEDENTE LABORAL DIRIGIDO DE ENFERMERÍA: Interrogar sobre trabajos antiguos en minería, construcción, aislamiento térmico, frenos de autos, techos de fibrocemento o astilleros navales hace 30 o 40 años', 'Suplementación con Ácido Fólico y Vitamina B12 con Pemetrexed: administrar Ácido fólico 400 mcg VO diario y Vitamina B12 1000 mcg IM cada 9 semanas para prevenir la toxicidad hematológica severa', 'Cuidado de catéteres pleurales permanentes: vaciamiento estéril con botella al vacío y registro del volumen']
  },
  {
    number: 537,
    id: 'diag-537',
    title: 'Cáncer de canal anal (Carcinoma epidermoide anal)',
    cie10: 'C21.1',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia maligna epitelial del canal anal, estrechamente vinculada en más del 85-90% a la INFECCIÓN PERSISTENTE POR VIRUS DEL PAPILOMA HUMANO DE ALTO RIESGO (VPH 16), con riesgo multiplicado en personas que viven con VIH, receptores de sexo anal y mujeres con antecedentes de cáncer de cérvix o vulva. A diferencia del cáncer de colon, es un carcinoma epidermoide que SE CURA SIN CIRUGÍA en la gran mayoría de casos.',
    symptoms: ['RECTORRAGIA O SANGRADO ANAL ROJO BRILLANTE (el síntoma más común en >50%, frecuentemente atribuido erróneamente durante meses a "hemorroides")', 'DOLOR ANAL CONTINUO O DURANTE LA DEFECACIÓN (tenesmo anal y dolor punzante)', 'Sensación de masa palpable o bulto perianal o dentro del canal anal', 'Prurito anal recalcitrante, secreción mucosa o tenesmo fecal con incontinencia esfinteriana incipiente', 'Adenopatías inguinales palpables induradas (los ganglios inguinales son el primer escalón de drenaje linfático del canal anal)'],
    redFlags: ['Toda hemorragia o masa anal etiquetada como "hemorroides" que no cede EXIGE INSPECCIÓN VISUAL, TACTO RECTAL Y ANOSCOPIA CON BIOPSIA'],
    criteria: 'Biopsia de la lesión del canal anal confirmando carcinoma epidermoide con tinción p16 positiva.',
    labTests: ['Serología para VIH obligatoria en todo paciente con cáncer anal', 'Inmunohistoquímica para p16 (marcador sustituto de VPH)'],
    imaging: ['RM de pelvis de alta resolución (estándar para evaluar invasión del esfínter anal y ganglios pélvicos)', 'TC de tórax, abdomen y pelvis o PET-CT'],
    differential: ['Hemorroides trombosadas o prolapsadas', 'Fisura anal crónica con papila hipertrófica', 'Fístula anal', 'Condiloma acuminado gigante'],
    firstLine: [
      { drug: 'QUIMIOTERAPIA Y RADIOTERAPIA CONCOMITANTE DEFINITIVA (PROTOCOLO DE NIGRO - ESTÁNDAR CURATIVO MUNDIAL)', dose: 'Radioterapia Externa pélvica e inguinal conformada (50 a 54 Gy) + Mitomicina C 12 mg/m2 EV bolo el Día 1 + 5-Fluorouracilo (5-FU) 1000 mg/m2/día en infusión continua de 96 horas durante los Días 1 a 4 y 29 a 32', route: 'Radioterapia + EV concomitante', freq: 'Protocolo de Nigro', notes: 'HITO ONCOLÓGICO: Cura el cáncer anal en más del 75-85% preservando completamente el esfínter anal y evitando la colostomía definitiva' }
    ],
    alternatives: [
      { drug: 'Cirugía de Rescate: Amputación Abdominoperineal de Miles con Colostomía Definitiva', dose: 'Extirpación completa del ano, esfínteres y recto con colostomía terminal permanente en fosa ilíaca izquierda', route: 'Quirúrgico de rescate', freq: 'Procedimiento de rescate', notes: 'RESERVADA EXCLUSIVAMENTE para tumores que persisten o recidivan tras el fracaso del protocolo de Nigro' }
    ],
    nonPharm: ['Vacunación preventiva contra el VPH en adolescentes'],
    nursingCare: ['NO ASUMIR NUNCA QUE EL SANGRADO ANAL ES "SOLO HEMORROIDES": Educar al paciente y personal que todo sangrado anal persistente requiere un tacto rectal; palpar un área indurada o úlcera anal exige biopsia inmediata', 'Cuidado de la radiodermatitis perianal severa durante el Protocolo de Nigro: lavar suavemente con agua templada y jabón syndet sin frotar; secar al aire; aplicar compresas de manzanilla fría o cremas con sulfadiazina de plata / óxido de zinc', 'Manejo del dolor defecatorio: prescribir baños de asiento tibios y analgésicos antes de las deposiciones']
  },
  {
    number: 538,
    id: 'diag-538',
    title: 'Melanoma maligno avanzado (Enfermedad metastásica cutánea y visceral)',
    cie10: 'C43.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Fase avanzada y diseminada del melanoma cutáneo o de mucosas (Estadio IV de la AJCC), caracterizada por la presencia de metástasis hematógenas en piel a distancia, ganglios linfáticos, pulmones, hígado, cerebro y tracto gastrointestinal. Históricamente tenía un pronóstico devastador con supervivencia menor a 6-9 meses, pero ha sido revolucionado por la INMUNOTERAPIA DE DOBLE BLOQUEO (Anti-PD-1 + Anti-CTLA-4) y la TERAPIA DIRIGIDA CONTRA MUTACIONES BRAF V600.',
    symptoms: ['Aparición de nódulos cutáneos o subcutáneos metastásicos pigmentados o amelanóticos en cualquier parte del cuerpo ("satelitosis o metástasis en tránsito")', 'Adenopatías masivas fijas e indoloras en múltiples cadenas ganglionares', 'Astenia severa, caquexia tumoral y pérdida rápida de peso', 'SÍNTOMAS SEGÚN EL ÓRGANO AFECTADO:', '- METÁSTASIS CEREBRALES (muy frecuentes en melanoma): cefalea intensa, crisis convulsivas focales, déficits motores o cambios de personalidad', '- Metástasis pulmonares: tos persistente, hemoptisis o disnea', '- Metástasis gastrointestinales (íleon): sangrado digestivo, dolor abdominal o invaginación intestinal'],
    redFlags: ['Metástasis cerebrales hemorrágicas múltiples con hipertensión endocraneana aguda'],
    criteria: 'Confirmación histopatológica de metástasis de melanoma con determinación molecular obligatoria de mutaciones BRAF V600E/K.',
    labTests: ['DETERMINACIÓN MOLECULAR DE MUTACIÓN EN EL GEN BRAF V600 (positiva en el 40-50% de los melanomas cutáneos; MANDATORIA)', 'Deshidrogenasa Láctica (LDH sérica: el biomarcador sérico pronóstico más potente en estadio IV)'],
    imaging: ['RM cerebral con contraste (el melanoma tiene un neurotropismo extremo; obligatoria al diagnóstico)', 'PET-CT corporal total con 18-FDG'],
    differential: ['Carcinoma indiferenciado metastásico', 'Sarcoma pleomórfico', 'Linfoma anaplásico'],
    firstLine: [
      { drug: 'Inmunoterapia de Primera Línea Estándar (en pacientes con o sin mutación BRAF): Doble Bloqueo con Nivolumab + Ipilimumab', dose: 'Nivolumab 1 mg/kg EV + Ipilimumab 3 mg/kg EV cada 3 semanas por 4 dosis, seguido de Nivolumab en monoterapia cada 2 a 4 semanas', route: 'EV en infusión', freq: 'Protocolo de doble bloqueo', notes: 'EL MAYOR HITO DE LA ONCOLOGÍA MODERNA (Ensayo CheckMate 067): Elevó la supervivencia a 5 años del 5% a más del 50%, con respuestas completas duraderas libres de tratamiento' },
      { drug: 'Terapia Dirigida Oral de Primera Línea en Tumores con Mutación BRAF V600 Positiva: Dabrafenib + Trametinib', dose: 'Dabrafenib (inhibidor de BRAF) 150 mg VO cada 12 horas + Trametinib (inhibidor de MEK) 2 mg VO una vez al día continuo', route: 'VO', freq: 'Diario continuo', notes: 'Respuestas tumorales ultra rápidas en días con reducción masiva del tumor; alternativa: Encorafenib + Binimetinib' }
    ],
    alternatives: [
      { drug: 'Anti-PD-1 en monoterapia: Pembrolizumab o Nivolumab', dose: 'Pembrolizumab 200 mg EV cada 3 semanas', route: 'EV', freq: 'c/3 semanas', notes: 'Opción con excelente eficacia y significativamente menor toxicidad autoinmune que el doble bloqueo' }
    ],
    nonPharm: ['Radiocirugía estereotáctica cerebral (SRS) para metástasis cerebrales'],
    nursingCare: ['MONITOREO DE EVENTOS ADVERSOS INMUNOMEDIADOS GRAVES (irAEs) DE LA DOBLE INMUNOTERAPIA:', '- COLITIS AUTOINMUNE: Interrogar en cada ciclo si presenta diarrea (>3-4 deposiciones al día sobre lo habitual); la colitis por Ipilimumab puede provocar perforación colónica mortal si no se frena con corticoides EV (Metilprednisolona 1-2 mg/kg)', '- HIPOFISITIS / TIROIDITIS: Vigilar astenia extrema, cefalea y mareos ortostáticos (descarte de insuficiencia suprarrenal aguda por hipofisitis)', '- HEPATITIS Y NEUMONITIS: Control de transaminasas basales y auscultación pulmonar', 'Toma de Dabrafenib y Trametinib: Dabrafenib debe tomarse con el estómago vacío (1 hora antes o 2 horas después de comer); advertir sobre fiebre alta súbita (efecto secundario común)']
  },
  {
    number: 539,
    id: 'diag-539',
    title: 'Carcinoma cutáneo no melanoma avanzado (Basocelular y Epidermoide metastásico)',
    cie10: 'C44.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Formas avanzadas, gigantes, localmente destructivas o metastásicas de los cánceres de piel no melanoma más frecuentes. El Carcinoma Basocelular Avanzado/Metastásico produce destrucción tisular masiva local en cráneo y rostro que impide la cirugía curativa. El Carcinoma Epidermoide Cutáneo Avanzado presenta metástasis a ganglios linfáticos regionales y órganos a distancia (pulmón).',
    symptoms: ['Tumores cutáneos gigantes ulcerados, sangrantes, fétidos con destrucción de cartílago nasal, auricular u óseo facial ("tumores monstruosos")', 'Invasión perineural con dolor neurálgico facial severo, parestesias o parálisis de pares craneales', 'Masas ganglionares cervicales, parotídeas o inguinales voluminosas fijas y ulceradas', 'Pérdida de peso, anemia y dolor crónico'],
    redFlags: ['Invasión ósea de la base del cráneo o invasión de la duramadre con meningitis secundaria'],
    criteria: 'Confirmación histopatológica y evaluación de irresecabilidad quirúrgica por comité multidisciplinar.',
    labTests: ['Histopatología'],
    imaging: ['TC y RM con contraste de la zona anatómica afectada y TC de tórax'],
    differential: ['Melanoma amelanótico', 'Carcinoma de células de Merkel', 'Ulcera de Marjolin sobre cicatriz'],
    firstLine: [
      { drug: 'Carcinoma Epidermoide Cutáneo Avanzado/Metastásico: Inmunoterapia con Cemiplimab (Anti-PD-1)', dose: '350 mg EV en infusión de 30 minutos cada 3 semanas de forma continua', route: 'EV', freq: 'c/3 semanas', notes: 'Fármaco de primera elección aprobado; los carcinomas epidermoides de piel tienen la mayor carga mutacional tumoral (TMB) por daño UV respondiendo espectacularmente al bloqueo PD-1' },
      { drug: 'Carcinoma Basocelular Avanzado o Metastásico Irresecable: Inhibidores de la Vía Hedgehog (Vismodegib o Sonidegib)', dose: 'Vismodegib 150 mg VO una vez al día continuo', route: 'VO', freq: 'c/24h diario', notes: 'Bloquea la proteína Smoothened (SMO) de la vía oncogénica Hedgehog; logra reducción masiva y control tumoral en >70-80%' }
    ],
    alternatives: [
      { drug: 'Radioterapia Externa paliativa o citorreductora fraccionada', dose: 'Radioterapia conformada para control del sangrado y dolor', route: 'Radioterapia', freq: 'Fraccionada', notes: 'Excelente opción hemostática' }
    ],
    nonPharm: ['Curaciones avanzadas no adherentes con apósitos de carbón activado para controlar el olor y la secreción de tumores ulcerados'],
    nursingCare: ['CURACIÓN AVANZADA DE HERIDAS TUMORALES MALIGNAS: Limpiar con suero fisiológico a baja presión; aplicar apósitos de alginato de calcio o esponjas hemostáticas para controlar el sangrado tumoral; utilizar apósitos con carbón activado y plata para neutralizar el mal olor y la sobreinfección', 'Manejo de efectos adversos de Vismodegib: los espasmos musculares severos (calambres), la pérdida de peso, la disgeusia (pérdida del gusto) y la alopecia son universales; prescribir suplementos nutricionales y magnesio', 'Apoyo emocional ante deformidades estéticas faciales graves']
  },
  {
    number: 540,
    id: 'diag-540',
    title: 'Timoma y Carcinoma tímico',
    cie10: 'C37',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia epitelial mediastínica originada en las células epiteliales del timo, siendo EL TUMOR MÁS FRECUENTE DEL COMPARTIMENTO MEDIASTÍNICO ANTERIOR en adultos (mediana 50-60 años). Se caracteriza por su estrecha y fascinante asociación con ENFERMEDADES AUTOINMUNES SISTÉMICAS, principalmente MIASTENIA GRAVIS (presente en el 30-50% de los pacientes con timoma). El Carcinoma Tímico (tipo C de la OMS) es mucho más agresivo e invasivo.',
    symptoms: ['SÍNTOMAS DE MIASTENIA GRAVIS ASOCIADA (en 30-50%): ptosis palpebral, diplopía, voz nasal fatigable, debilidad muscular proximal y disfagia que empeora a lo largo del día', 'En un tercio es COMPLETAMENTE ASINTOMÁTICO (hallazgo incidental en radiografía o TC de tórax)', 'SÍNTOMAS COMPRESIVOS LOCALES DEL MEDIASTINO ANTERIOR:', '- Dolor torácico retroesternal sordo opresivo continuo', '- Tos seca irritativa persistente y disnea de esfuerzo', '- SÍNDROME DE LA VENA CAVA SUPERIOR (edema en esclavina de cara, cuello y brazos con ingurgitación yugular)', '- Disfonía por invasión del nervio laríngeo recurrente o parálisis hemidiafragmática por invasión del nervio frénico', 'OTROS SÍNDROMES PARANEOPLÁSICOS ASOCIADOS: Aplasia Pura de Células Rojas (eritroblastopenia con anemia arregenerativa profunda) e Hipogammaglobulinemia adquirida (Síndrome de Good)'],
    redFlags: ['CRISIS MIASTÉNICA GRAVE PERIOPERATORIA CON INSUFICIENCIA RESPIRATORIA AGUDA'],
    criteria: 'TC o RM de tórax con contraste demostrando masa mediastínica anterior y biopsia quirúrgica o resección en bloque con clasificación de Masaoka-Koga.',
    labTests: ['Anticuerpos anti-receptores de acetilcolina (anti-AChR séricos: positivos en casi todos los timomas con miastenia)', 'Hemograma completo (descarte de aplasia pura de serie roja)', 'Niveles séricos de inmunoglobulinas IgG, IgA, IgM (descarte de Síndrome de Good)'],
    imaging: ['TC helicoidal de tórax con contraste intravenoso (estándar de oro: masa en mediastino anterior lobulada, que puede tener calcificaciones)', 'RM de tórax (diferencia grasa tímica y evalúa invasión de pericardio y grandes vasos)'],
    differential: ['Linfoma mediastínico anterior (Hodgkin o no Hodgkin)', 'Teratoma o tumor de células germinales mediastínico', 'Bocio tiroideo endotorácico'],
    firstLine: [
      { drug: 'TIMECTOMÍA QUIRÚRGICA TOTAL EN BLOQUE CON RESECCIÓN DE GRASA MEDIASTÍNICA (TRATAMIENTO CURATIVO DE ELECCIÓN)', dose: 'Extirpación completa del timo, el tumor y toda la grasa mediastínica anterior de nervio frénico a nervio frénico (por vía toracoscópica asistida por video/robótica en estadios I-II, o esternotomía media en avanzados)', route: 'Quirúrgico torácico', freq: 'Procedimiento curativo', notes: 'Pilar curativo fundamental; el pronóstico depende de la resección completa microscópica R0' },
      { drug: 'Radioterapia Externa Adyuvante (en estadios II avanzados o III de Masaoka con invasión capsular)', dose: 'Radioterapia conformada (45 a 54 Gy) sobre el lecho tímico', route: 'Radioterapia', freq: 'Fraccionada', notes: 'Reduce significativamente las recidivas locales' }
    ],
    alternatives: [
      { drug: 'Quimioterapia Neoadyuvante con Esquema PAC (Cisplatino + Doxorrubicina + Ciclofosfamida)', dose: 'Ciclos cada 3 semanas por 3-4 ciclos', route: 'EV', freq: 'Cada 21 días', notes: 'En timomas voluminosos irresecables de inicio para permitir la cirugía posterior' }
    ],
    nonPharm: ['Optimización neurológica preoperatoria estricta de la miastenia gravis con piridostigmina y plasmaféresis o inmunoglobulinas antes de entrar a quirófano'],
    nursingCare: ['PREPARACIÓN NEUROLÓGICA PREOPERATORIA DE LA MIASTENIA GRAVIS: El paciente con timoma y miastenia gravis debe entrar a cirugía en el mejor estado motor posible; coordinar plasmaféresis previa o inmunoglobulinas si tiene debilidad bulbar para evitar fallo extubatorio postoperatorio', 'VIGILANCIA DE CRISIS MIASTÉNICA EN EL POSTOPERATORIO: Monitorear patrón respiratorio, fuerza para toser y deglución en UCI; alertar si la saturación cae o el paciente acumula secreciones traqueales', 'Vigilar hemograma postoperatorio: descartar anemia severa súbita por Aplasia Pura de Células Rojas']
  },
  {
    number: 541,
    id: 'diag-541',
    title: 'Sarcoma de Kaposi asociado al VIH / SIDA (Epidémico)',
    cie10: 'C46.0 / B21.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia vascular mesenquimatosa endotelial multifocal de bajo grado, estrechamente vinculada a la infección coinfecciosa por el VIRUS HERPES HUMANO TIPO 8 (VHH-8 / KSHV) en el contexto de inmunodepresión severa por el Virus de la Inmunodeficiencia Humana (VIH, con recuentos de CD4 frecuentemente <200 cél/uL). Es una de las ENFERMEDADES DEFINITORIAS DE SIDA más emblemáticas.',
    symptoms: ['LESIONES CUTÁNEAS TÍPICAS MULTIFOCALES ASINTOMÁTICAS O CON LEVE PRURITO:', '- Máculas, pápulas, placas o nódulos de coloración violácea, rojo-vinosa, púrpura o marrón oscuro que NO SE BLANQUEAN A LA DIGITOPRESIÓN', '- Forma elíptica u ovalada que sigue las líneas de tensión cutánea (líneas de Langer)', '- Localización frecuente en la punta de la nariz, mejillas, pabellones auriculares, miembros inferiores y tronco', 'COMPROMISO DE MUCOSA ORAL (en >30% como primer signo): máculas o placas violáceas en el paladar duro o encías', 'LINFEDEMA MARCADO Y DOLOROSO EN MIEMBROS INFERIORES Y GENITALES por infiltración y bloqueo de los conductos linfáticos', 'AFECTACIÓN VISCERAL INTERNA (enfermedad grave):', '- Afectación gastrointestinal: sangrado digestivo, dolor abdominal o diarrea', '- AFECTACIÓN PULMONAR (grave y letal): tos, disnea progresiva, hemoptisis y derrame pleural hemorrágico bilateral'],
    redFlags: ['SARCOMA DE KAPOSI PULMONAR: dificultad respiratoria progresiva con infiltrados peribroncovasculares difusos e hipoxemia severa (alta mortalidad a corto plazo)'],
    criteria: 'Biopsia cutánea o mucosa con anatomopatología demostrando proliferación de hendiduras vasculares y células fusiformes con inmunohistoquímica POSITIVA PARA VHH-8 / LANA-1.',
    labTests: ['Inmunohistoquímica nuclear para VHH-8 (marcador definitivo estándar de oro)', 'Carga viral de VIH y recuento de linfocitos CD4+', 'Endoscopia digestiva alta y colonoscopia si hay síntomas digestivos'],
    imaging: ['Radiografía y TC de tórax con contraste (demuestra engrosamiento broncovascular e infiltrados peribroncovasculares en llama o estrella típicos)', 'Broncoscopia (visualización directa de placas violáceas en árbol traqueobronquial)'],
    differential: ['Angiomatosis bacilar por Bartonella henselae (reacción inflamatoria purulenta en VIH sensible a eritromicina)', 'Hematomas cutáneos traumáticos', 'Melanoma nodular', 'Pioderma gangrenoso'],
    firstLine: [
      { drug: 'INICIO O ADAPTACIÓN URGENTE DEL TRATAMIENTO ANTIRRETROVIRAL DE GRAN ACTIVIDAD (TARGA / ART) (PILAR FUNDAMENTAL)', dose: 'Pauta antirretroviral basada en inhibidores de la integrasa (Tenofovir + Emtricitabina + Dolutegravir o Bictegravir)', route: 'VO', freq: 'c/24h diario de por vida', notes: 'RESTAURA LA INMUNIDAD CELULAR: En formas leves a moderadas confinados a piel, la supresión de la carga viral de VIH y la elevación de CD4 induce por sí sola la REGRESIÓN COMPLETA O PARCIAL DEL SARCOMA DE KAPOSI sin quimioterapia' },
      { drug: 'DOXORRUBICINA LIPOSOMAL PEGILADA ENDOVENOSA (TRATAMIENTO SISTÉMICO DE ELECCIÓN EN FORMAS VISCERALES O EXTENSAS)', dose: '20 mg/m2 EV en infusión cada 2 a 3 semanas', route: 'EV en infusión', freq: 'Cada 21 días', notes: 'Fármaco de primera elección en Kaposi pulmonar, visceral, orofaríngeo extenso o linfedema doloroso; la formulación liposomal concentra el fármaco en los vasos tumorales reduciendo la cardiotoxicidad' }
    ],
    alternatives: [
      { drug: 'Paclitaxel endovenoso a dosis bajas', dose: '100 mg/m2 EV cada 2 semanas (o 75-80 mg/m2 semanal)', route: 'EV', freq: 'Bisemanal / Semanal', notes: 'Excelente tratamiento de segunda línea altamente eficaz si fracasan las antraciclinas liposomales' },
      { drug: 'Crioterapia o Radioterapia local paliativa', dose: 'Tratamiento destructivo puntual', route: 'Tópica / Radioterapia', freq: 'Puntual', notes: 'Para lesiones faciales o plantares sangrantes o dolorosas' }
    ],
    nonPharm: ['Medias de compresión elástica y elevación de piernas para mitigar el linfedema'],
    nursingCare: ['VIGILANCIA DEL SÍNDROME DE RECONSTITUCIÓN INMUNE (SIRI / IRIS): Al iniciar el TARGA, la recuperación rápida de las defensas puede provocar paradójicamente un empeoramiento o crecimiento explosivo inicial de las lesiones de Kaposi; alertar al médico pero NO suspender el tratamiento antirretroviral', 'Evaluación de la cavidad bucal: inspeccionar minuciosamente el paladar duro en todo paciente con VIH; las placas violáceas suelen pasar desapercibidas', 'Monitoreo respiratorio en sala: auscultar campos pulmonares y vigilar tos con estrías de sangre (Kaposi pulmonar)']
  },
  {
    number: 542,
    id: 'diag-542',
    title: 'Neoplasia trofoblástica gestacional (Mola invasora y Coriocarcinoma)',
    cie10: 'C58',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Grupo heterogéneo de tumores ginecológicos malignos derivados de la proliferación anómala del epitelio trofoblástico placentario, precedidos en un 50% por un Embarazo Molar previo (Mola hidatiforme completa o parcial), 25% tras aborto y 25% tras parto a término normal. El CORIOCARCINOMA es una neoplasia epitelial pura altamente maligna, angiocéntrica y necrotizante que disemina precozmente por vía hematógena a pulmones y vagina, pero con tasas de curación extraordinarias (>90-95%) gracias a su extrema quimiosensibilidad.',
    symptoms: ['METRORRAGIA O SANGRADO GINECOLÓGICO IRREGULAR PERSISTENTE CONTINUO TRAS UN EMBARAZO MOLAR, ABORTO O PARTO', 'Subinvolución uterina (el útero se mantiene blando y aumentado de tamaño para el tiempo postparto)', 'Dolor pélvico o lumbar sordo', 'Visualización de NÓDULOS METASTÁSICOS VAGINALES VIOLÁCEOS TÍPICOS ("en mora o ciruela") en la pared anterior de la vagina o suburetrales, extremadamente vascularizados y sangrantes', 'SÍNTOMAS DE METÁSTASIS PULMONARES (en >80% de los casos diseminados): TOS, HEMOPTISIS Y DISNEA súbita', 'Metástasis cerebrales: cefalea súbita, convulsiones o déficit focal motor (por hematomas metastásicos intracraneales)'],
    redFlags: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA DE BIOPSIA DE LOS NÓDULOS VAGINALES METASTÁSICOS (provoca hemorragia cataclísmica incoercible que puede causar la muerte en minutos por su extrema vascularización)'],
    criteria: 'Criterios diagnósticos FIGO basados en la curva de beta-hCG: persistencia o meseta de beta-hCG en 4 tomas durante 3 semanas, aumento de beta-hCG en 3 tomas durante 2 semanas, o diagnóstico histológico de coriocarcinoma.',
    labTests: ['DETERMINACIÓN CUANTITATIVA SERIADA DE BETA-hCG SÉRICA (el biomarcador tumoral perfecto: refleja directamente la masa tumoral y la curación)', 'Hemograma, perfil hepático, renal y coagulación'],
    imaging: ['Ecografía pélvica transvaginal Doppler (masa miometrial hipervascular de baja resistencia con lagunas vasculares)', 'Radiografía y TC de tórax con contraste (demuestra metástasis pulmonares redondeadas múltiples en "suelta de globos")', 'RM cerebral'],
    differential: ['Retención de restos placentarios postparto', 'Endometritis puerperal', 'Cáncer de cuello uterino'],
    firstLine: [
      { drug: 'Bajo Riesgo (Puntuación FIGO <=6): Monoquimioterapia con Metotrexato o Actinomicina D', dose: 'Metotrexato 50 mg IM cada semana (o 1 mg/kg IM días alternos 1, 3, 5, 7 con rescate de Ácido folínico días 2, 4, 6, 8 cada 14 días); o Actinomicina D en pulso quincenal', route: 'IM / EV', freq: 'Cada 14 días', notes: 'Tasa de curación cercana al 100% preservando completamente la fertilidad y la función ovárica futura' },
      { drug: 'Alto Riesgo (Puntuación FIGO >=7 o Metástasis hepáticas/cerebrales): Poliquimioterapia con Esquema EMA-CO', dose: 'Etopósido + Metotrexato a dosis altas con Leucovorina + Actinomicina D (EMA) en días 1 y 2, seguido de Ciclofosfamida + Vincristina (CO) el día 8, administrado cada 15 días', route: 'EV en hospitalización', freq: 'Cada 15 días', notes: 'Estándar mundial de curación en enfermedad metastásica de alto riesgo (>85-90% de curación global)' }
    ],
    alternatives: [
      { drug: 'Histerectomía en bloque (sin biopsia previa)', dose: 'Cirugía de rescate si hay sangrado uterino incoercible o en pacientes con paridad satisfecha', route: 'Quirúrgico', freq: 'Procedimiento de rescate', notes: 'Disminuye la masa tumoral y los ciclos de quimioterapia necesarios' }
    ],
    nonPharm: ['ANTICONCEPCIÓN HORMONAL ESTRICTA Y OBLIGATORIA DURANTE AL MENOS 12 MESES post-curación para no confundir un nuevo embarazo con una recidiva tumoral'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: TERMINANTEMENTE PROHIBIDO BIOPSIAR O TOCAR NÓDULOS VIOLÁCEOS EN LA VAGINA; alertar a todo el equipo ginecológico que biopsiar un nódulo vaginal de coriocarcinoma desencadena una hemorragia masiva inmediata incontrolable que requiere taponamiento de urgencia y transfusiones', 'Monitoreo semanal estricto de beta-hCG: el tratamiento solo se considera finalizado tras alcanzar valores normales de beta-hCG (<5 mUI/mL) mantenidos durante 3 semanas consecutivas, seguido de 2 a 3 ciclos de consolidación', 'Consejería anticonceptiva: instruir el uso ininterrumpido de anticonceptivos orales combinados']
  },
  {
    number: 543,
    id: 'diag-543',
    title: 'Macroglobulinemia de Waldenström (Linfoma linfoplasmocítico)',
    cie10: 'C88.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia hematológica clonal de células B maduras y linfoplasmocitoides que infiltran la médula ósea, caracterizada por la producción y secreción masiva de una INMUNOGLOBULINA MONOCLONAL DE TIPO IgM (pentamérica de alto peso molecular). Asociada en más del 90-95% de los casos a la MUTACIÓN SOMÁTICA MYD88 L265P. Su gran tamaño molecular condiciona el característico Síndrome de Hiperviscosidad.',
    symptoms: ['SÍNDROME DE HIPERVISCOSIDAD SANGUÍNEA PATOGNOMÓNICO (por el enorme tamaño de la molécula IgM pentamérica):', '- Cefalea sorda continua, mareos, inestabilidad y somnolencia', '- VISIÓN BORROSA O PÉRDIDA VISUAL ("venas retinianas dilatadas en ristra de salchichas y hemorragias retinianas")', '- Epistaxis espontáneas y sangrado mucoso gingival o gastrointestinal por disfunción plaquetaria', 'SÍNDROME CONSTITUCIONAL Y MEDULAR: astenia severa por anemia normocítica crónica, pérdida de peso y sudoración nocturna', 'NEUROPATÍA PERIFÉRICA SENSITIVO-MOTORA DISTAL (en 20-30% por anticuerpos anti-MAG contra la glicoproteína asociada a mielina)', 'Adenopatías periféricas y esplenomegalia en un tercio de los casos', 'Fenómeno de Raynaud y acrocianosis en extremidades (si se asocia a Crioglobulinemia tipo I)'],
    redFlags: ['SÍNDROME DE HIPERVISCOSIDAD CRÍTICO CON COMA O INFARTO RETINIANO / ACV (requiere plasmaféresis de urgencia inmediata)'],
    criteria: 'Componente monoclonal IgM sérico detectable MÁS biopsia de médula ósea con infiltración linfoplasmocítica CD20+ y mutación MYD88 L265P.',
    labTests: ['Proteinograma electroforético con inmunofijación (pico monoclonal IgM sérico elevado, frecuentemente >3000 mg/dL)', 'Viscosidad sérica relativa (síntomas clínicos cuando es >4.0 centipoises)', 'Mutación somática del gen MYD88 L265P y mutación CXCR4'],
    imaging: ['Fondo de ojo dilatado (demuestra venas tortuosas segmentadas "en salchicha", exudados y hemorragias en llama)'],
    differential: ['Mieloma múltiple IgM (cursa con lesiones osteolíticas óseas)', 'Linfoma de la zona marginal', 'Gammapatía monoclonal IgM de significado incierto (MGUS IgM)'],
    firstLine: [
      { drug: 'SÍNDROME DE HIPERVISCOSIDAD AGUDO SINTOMÁTICO: PLASMAFÉRESIS TERAPÉUTICA DE URGENCIA (RECAMBIO PLASMÁTICO)', dose: '1 a 2 sesiones de plasmaféresis de recambio', route: 'Aféresis venosa urgente', freq: 'Urgente inmediata', notes: 'EMERGENCIA MÉDICA: La IgM se encuentra en un 80% en el espacio intravascular; una sola sesión de plasmaféresis elimina hasta el 60-70% de la IgM revirtiendo los síntomas visuales y cerebrales en minutos' },
      { drug: 'Tratamiento de Primera Línea en Pacientes Sintomáticos: Ibrutinib oral (Inhibidor de BTK)', dose: '420 mg VO una vez al día de forma continua', route: 'VO', freq: 'c/24h continuo', notes: 'Fármaco de elección; bloquea la vía activada por la mutación MYD88 logrando respuestas rápidas y duraderas' },
      { drug: 'Esquema Inmunoquimioterápico DRC (Dexametasona + Rituximab + Ciclofosfamida)', dose: 'Rituximab 375 mg/m2 EV + Ciclofosfamida oral + Dexametasona cada 21 días por 6 ciclos', route: 'EV + VO', freq: 'Cada 21 días x 6 ciclos', notes: 'Esquema libre de toxicidad neuronal para pacientes con neuropatía preexistente' }
    ],
    alternatives: [
      { drug: 'Zanubrutinib oral (Inhibidor de BTK de segunda generación)', dose: '160 mg VO cada 12 horas', route: 'VO', freq: 'c/12h', notes: 'Mayor selectividad con menor tasa de arritmias cardíacas' }
    ],
    nonPharm: ['EVITAR LAS TRANSFUSIONES DE CONCENTRADOS DE HEMATÍES EN HIPERVISCOSIDAD SEVERA (transfundir sangre añade volumen globular a la sangre ya viscosa precipitando un paro circulatorio; realizar plasmaféresis primero)'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD VITAL: CONTRAINDICADA LA TRANSFUSIÓN RÁPIDA DE GLÓBULOS ROJOS EN HIPERVISCOSIDAD SINTOMÁTICA; transfundir glóbulos rojos espesa aún más la sangre; primero se debe realizar la plasmaféresis para bajar la viscosidad', 'CUIDADO CON EL FENÓMENO "FLARE" DE RITUXIMAB: Al iniciar Rituximab, la IgM puede elevarse transitoriamente de forma paradójica provocando un pico de hiperviscosidad; si la IgM basal es >4000 mg/dL, diferir el rituximab o realizar plasmaféresis profiláctica previa', 'Monitoreo de epistaxis y sangrados mucosos durante la aféresis']
  },
  {
    number: 544,
    id: 'diag-544',
    title: 'Policitemia vera (PV / Policitemia rubra vera)',
    cie10: 'D45',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia mieloproliferativa crónica clonal caracterizada por la hiperproducción autónoma e incontrolada de la serie eritroide (eritrocitosis absoluta / poliglobulia) independiente de los niveles de eritropoyetina, acompañada frecuentemente de leucocitosis y trombocitosis. Asociada en >95-98% de los casos a la MUTACIÓN SOMÁTICA JAK2 V617F (en el exón 14) o en el exón 12. Conlleva un alto riesgo de trombosis arteriales y venosas.',
    symptoms: ['SÍNTOMAS DE HIPERVISCOSIDAD E HIPERVOLEMIA SANGUÍNEA:', '- Cefalea sorda continua, mareos, acúfenos, visión borrosa e inyección conjuntival', '- FACIES PLETÓRICA ("coloración rojo-vinosa o rubicunda de la cara, labios y palmas de las manos")', '- PRURITO ACUAGÉNICO PATOGNOMÓNICO: PICOR INTENSO, URENTE E INCOERCIBLE TRAS BAÑARSE CON AGUA CALIENTE O TEMPLADA (sin lesiones dermatológicas)', '- ERITROMELALGIA: dolor urente y eritema intenso con calor en las plantas de los pies y palmas que alivia con frío y aspirina', '- ESPLENOMEGALIA PALPABLE (en >70% de los pacientes)', '- Síntomas de hiperuricemia (artritis gotosa y cólicos renales por nefrolitiasis úrica)'],
    redFlags: ['TROMBOSIS ARTERIALES O VENOSAS MAYORES (ACV isquémico, infarto agudo de miocardio, Trombosis de la Vena Porta o SÍNDROME DE BUDD-CHIARI: trombosis de venas suprahepáticas)'],
    criteria: 'Criterios OMS 2016: Hemoglobina >16.5 g/dL en varones (>16.0 g/dL en mujeres) o Hematocrito >49% (varones) / >48% (mujeres) MÁS presencia de mutación JAK2 y Eritropoyetina sérica subnormal.',
    labTests: ['Hematocrito y Hemoglobina muy elevados', 'Detección molecular de la MUTACIÓN JAK2 V617F en sangre periférica (positiva en >95%)', 'ERITROPOYETINA SÉRICA (EPO: típicamente BAJA O INDETECTABLE por feedback negativo fisiológico)', 'Ferritina sérica (frecuentemente baja por consumo acelerado de hierro para la eritropoyesis)'],
    imaging: ['Ecografía abdominal para cuantificar esplenomegalia y descartar trombosis de la vena porta'],
    differential: ['Poliglobulia secundaria a hipoxia crónica (EPOC, apnea del sueño, grandes alturas en la sierra peruana: EPO elevada, JAK2 negativo)', 'Poliglobulia por tumores productores de EPO (cáncer renal, hepatocarcinoma, miomas)', 'Pseudopoliglobulia por deshidratación (Gaisböck)'],
    firstLine: [
      { drug: 'SANGRIAS TERAPÉUTICAS O FLEBOTOMÍAS PERIÓDICAS (PILAR OBLIGATORIO DE REFERENCIA)', dose: 'Extracción de 400 a 500 mL de sangre total cada 2-3 días al inicio, y luego mensual de mantenimiento, BUSCANDO COMO OBJETIVO ESTRICTO MANTENER EL HEMATOCRITO MENOR AL 45% (Hto <45%)', route: 'Flebotomía venosa', freq: 'Según hematocrito <45%', notes: 'REGLA DE ORO DEL ENSAYO CYTO-PV: Mantener el Hto <45% reduce por cuatro la tasa de muerte cardiovascular y trombosis' },
      { drug: 'Ácido Acetilsalicílico (Aspirina) a dosis bajas de por vida', dose: '100 mg VO al día matutino de por vida', route: 'VO', freq: 'c/24h matutino de por vida', notes: 'Reduce drásticamente los eventos trombóticos y elimina la eritromelalgia' },
      { drug: 'Citorreducción farmacológica en Pacientes de Alto Riesgo (>60 años o trombosis previa): Hidroxiurea (Hidroxicarbamida) oral', dose: 'Inicio 500 a 1000 mg/día VO titulando según recuentos para controlar leucocitos y plaquetas', route: 'VO', freq: 'c/24h', notes: 'Fármaco citorreductor de primera elección; bien tolerado' }
    ],
    alternatives: [
      { drug: 'Interferón alfa pegilado (Ropeginterferón alfa-2b)', dose: 'Inyección subcutánea cada 2 a 4 semanas', route: 'Subcutánea', freq: 'Cada 2-4 semanas', notes: 'Tratamiento de elección en pacientes jóvenes menores de 50 años; es el único fármaco capaz de inducir remisión molecular con aclaramiento de la mutación JAK2' },
      { drug: 'Ruxolitinib oral (Inhibidor selectivo de JAK1 y JAK2)', dose: '10 mg VO cada 12 horas', route: 'VO', freq: 'c/12h', notes: 'Indicado ante intolerancia o resistencia a Hidroxiurea; elimina el prurito acuagénico y reduce el bazo' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA DE DAR SUPLEMENTOS DE HIERRO (el hierro estimula una producción descontrolada de glóbulos rojos; la ferropenia moderada es beneficiosa en PV)'],
    nursingCare: ['PROCEDIMIENTO ESTANDARIZADO DE SANGÍA TERAPÉUTICA (FLEBOTOMÍA):', '- Comprobar el hematocrito previo a la extracción', '- Extraer 450 mL de sangre mediante bolsa de donación con aguja de calibre grueso (16G) para evitar que la sangre viscosa se coagule', '- REPOSICIÓN VOLUMÉTRICA INMEDIATA con 500 mL de Suero Fisiológico al 0.9% EV para evitar la hipotensión ortostática', '- Recomendar al paciente hidratación abundante y reposo de 15 minutos en camilla post-sangría', 'Consejo para el prurito acuagénico: evitar duchas con agua muy caliente; usar agua tibia o templada, secarse con toques suaves de toalla sin frotar y agregar bicarbonato al agua del baño']
  },
  {
    number: 545,
    id: 'diag-545',
    title: 'Trombocitemia esencial (TE / Trombocitosis primaria clonal)',
    cie10: 'D47.3',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia mieloproliferativa crónica clonal caracterizada por la proliferación desproporcionada y sostenida de megacariocitos en la médula ósea que genera un recuento persistentemente elevado de plaquetas en sangre periférica (TROMBOCITOSIS >=450,000/uL), sin eritrocitosis ni fibrosis medular inicial. Asociada a mutaciones en JAK2 V617F (55-60%), Calreticulina (CALR en 25-30%) o MPL (4%). Cursa con riesgo de trombosis y paradójicamente de hemorragias.',
    symptoms: ['En más del 50% de los pacientes es COMPLETAMENTE ASINTOMÁTICA (descubrimiento incidental en hemograma rutinario)', 'SÍNTOMAS MICROVASCULARES Y VASOMOTORES:', '- ERITROMELALGIA: dolor quemante atroz, enrojecimiento y calor en los dedos de las manos y pies que cede de forma casi instantánea al tomar una sola tableta de Aspirina', '- Parestesias distales acras en "guante y calcetín", cefaleas pulsátiles y mareos', '- Escotomas centelleantes y alteraciones visuales transitorias', 'EVENTOS TROMBÓTICOS MAYORES: ACV isquémico, AIT, trombosis coronaria o trombosis de venas intraabdominales (esplénica, mesentérica)', 'PARADOJA HEMORRÁGICA: SANGRADOS MUCOCUTÁNEOS CUANDO LAS PLAQUETAS SON EXTREMADAMENTE ALTAS (>1,000,000 - 1,500,000/uL) debido al Síndrome de Von Willebrand adquirido por consumo masivo del multímero de vWF por exceso de superficie plaquetaria', 'Esplenomegalia palpable leve en un 30-40% de los casos'],
    redFlags: ['RECUENTO PLAQUETARIO EXTREMO >1,000,000/uL: RIESGO DE HEMORRAGIA DIGESTIVA O CEREBRAL POR SÍNDROME DE VON WILLEBRAND ADQUIRIDO (¡CONTRAINDICADA LA ASPIRINA EN ESTA FASE!)'],
    criteria: 'Criterios OMS 2016: Plaquetas >=450,000/uL persistentes MÁS mutación clonal (JAK2, CALR o MPL) y biopsia de médula ósea con hiperplasia megacariocítica madura en acúmulos sin displasia.',
    labTests: ['Hemograma: trombocitosis marcada con plaquetas gigantes en frotis', 'Panel molecular: mutaciones JAK2 V617F, CALR (inserción/deleción) y MPL W515L/K', 'Ferritina sérica (normal; la ferropenia causa trombocitosis reactiva secundaria que debe descartarse)'],
    imaging: ['Ecografía abdominal para descartar esplenomegalia y trombosis venosa'],
    differential: ['Trombocitosis reactiva o secundaria (a anemia ferropénica, inflamación crónica, infecciones, cáncer sólido o esplenectomía)', 'Fase inicial de Mielofibrosis primaria prefibrótica', 'Leucemia mieloide crónica (descartar BCR-ABL1)'],
    firstLine: [
      { drug: 'Tratamiento Antitrombótico en Pacientes de Riesgo Muy Bajo / Bajo: Aspirina a dosis bajas', dose: '100 mg VO al día matutino', route: 'VO', freq: 'c/24h matutino continuo', notes: 'Alivia rápidamente la eritromelalgia y previene trombosis arteriales; CONTRAINDICADA si plaquetas >1,000,000/uL hasta descartar déficit de vWF' },
      { drug: 'Citorreducción de Primera Línea en Pacientes de Alto Riesgo (>60 años o antecedente de trombosis): Hidroxiurea oral', dose: 'Inicio 500 a 1000 mg/día VO buscando mantener recuento plaquetario entre 100,000 y 400,000/uL', route: 'VO', freq: 'c/24h', notes: 'Fármaco citorreductor de referencia; reduce significativamente las trombosis mayores' }
    ],
    alternatives: [
      { drug: 'Anagrelida oral (Inhibidor selectivo de la maduración megacariocítica)', dose: '0.5 mg VO cada 12 horas aumentando hasta 1.5 a 3.0 mg/día', route: 'VO', freq: 'c/12h', notes: 'Citorreductor específico que no deprime otras líneas; vigilar taquicardias y palpitaciones (inótropo positivo)' },
      { drug: 'Interferón alfa pegilado (de elección en mujeres jóvenes y durante el embarazo)', dose: 'Inyecciones subcutáneas semanales', route: 'SC', freq: 'Semanal', notes: 'Seguro en la gestación; no es teratogénico' }
    ],
    nonPharm: ['Control estricto de factores de riesgo cardiovascular (tabaco, hipertensión, hiperlipemia)'],
    nursingCare: ['ALERTA DE SEGURIDAD CON ASPIRINA Y PLAQUETAS >1 MILLÓN: Si el recuento de plaquetas supera 1,000,000/uL, consultar al hematólogo antes de administrar Aspirina; en trombocitosis extremas las plaquetas consumen el factor Von Willebrand y la aspirina puede desencadenar una hemorragia cerebral mortal', 'Diagnóstico diferencial de trombocitosis reactiva: interrogar si el paciente toma suplementos de hierro o tiene pérdidas menstruales abundantes (la anemia ferropénica eleva las plaquetas de forma reactiva benigna)', 'Monitoreo de úlceras orales o cutáneas maleolares por Hidroxiurea']
  },
  {
    number: 546,
    id: 'diag-546',
    title: 'Mielofibrosis primaria (MFP / Mielofibrosis idiopática crónica)',
    cie10: 'D47.1',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia mieloproliferativa crónica clonal de peor pronóstico caracterizada por la proliferación anormal de megacariocitos atípicos que liberan factores de crecimiento profibróticos (TGF-beta, PDGF y bFGF), provocando una FIBROSIS Y COLAGENIZACIÓN PROGRESIVA DE LA MÉDULA ÓSEA con fallo de la hematopoyesis normal, HEMATOPOYESIS EXTRAMEDULAR masiva secundaria en bazo e hígado (metaplasia mieloide) y un frotis de sangre leucoeritroblástico típico.',
    symptoms: ['ESPLENOMEGALIA GIGANTE O MASIVA PATOGNOMÓNICA ("el bazo ocupa todo el abdomen izquierdo hasta la pelvis")', 'Sensación de pesadez abdominal, plenitud precoz extrema, caquexia y dolor por infartos esplénicos', 'SÍNTOMAS CONSTITUCIONALES CATABÓLICOS SEVEROS:', '- Fatiga invalidante y pérdida masiva de peso', '- SUDORACIÓN NOCTURNA EMPAPANTE CONTINUA', '- Fiebre o febrícula de origen tumoral', '- Dolores óseos difusos difusos generalizados', 'SÍNDROME ANÉMICO SEVERO PROGRESIVO con dependencia transfusional de glóbulos rojos', 'Hemorragias o trombosis paradójicas e hipertensión portal no cirrótica con várices esofágicas por aumento del flujo esplénico'],
    redFlags: ['Transformación a Leucemia Mieloide Aguda secundaria (LMA / crisis blástica en 15-20% de los pacientes a los 5-10 años)'],
    criteria: 'Criterios OMS 2016: biopsia de médula ósea con fibrosis reticulínica/colágena (Grado MF-2 o MF-3) MÁS mutación JAK2, CALR o MPL y presencia de leucoeritroblastosis con dacriocitos.',
    labTests: ['FROTIS DE SANGRE PERIFÉRICA PATOGNOMÓNICO: CUADRO LEUCOERITROBLÁSTICO TÍPICO:', '  * DACRIOCITOS (Hematíes en forma de lágrima o gota deformados al salir de la médula fibrótica a presión)', '  * Eritroblastos circulantes nucleados y precursores mieloides inmaduros (mielocitos)', 'PUNCIÓN DE MÉDULA ÓSEA CON "ASPIRADO SECO" (Dry tap: la aguja no puede aspirar líquido debido a la densa fibrosis colágena)', 'Biopsia ósea de cilindro (confirma fibrosis con tinción de plata para reticulina)', 'Panel molecular mutacional: JAK2 V617F (60%), CALR (25-30%), MPL (5-10%) o "triple negativos" (peor pronóstico)'],
    imaging: ['Ecografía abdominal (cuantifica el bazo gigante)', 'TC de abdomen'],
    differential: ['Mielofibrosis secundaria a Policitemia vera o Trombocitemia esencial previa', 'Metástasis ósea difusa de carcinoma de mama o próstata', 'Linfoma con fibrosis'],
    firstLine: [
      { drug: 'INHIBIDOR DE JAK1 Y JAK2 ORAL DE PRIMERA LÍNEA: Ruxolitinib oral (TRATAMIENTO DE ELECCIÓN SINTOMÁTICO)', dose: 'Inicio 15 a 20 mg VO cada 12 horas si plaquetas >200,000/uL (ajustar a 5-10 mg c/12h si plaquetas más bajas)', route: 'VO', freq: 'c/12h continuo', notes: 'REVOLUCIONÓ EL TRATAMIENTO: Reduce drásticamente el tamaño del bazo gigante en >50%, elimina la sudoración nocturna y el dolor, y prolonga la supervivencia global' },
      { drug: 'Tratamiento de la Anemia en Mielofibrosis: Danazol o Talidomida con Prednisona', dose: 'Danazol 600 mg/día VO; o Talidomida 50 mg/día + Prednisona a dosis bajas', route: 'VO', freq: 'c/24h', notes: 'Mejora la hemoglobina y reduce la necesidad de transfusiones' }
    ],
    alternatives: [
      { drug: 'Nuevos inhibidores de JAK: Fedratinib o Pacritinib o Momelotinib', dose: 'Momelotinib 200 mg VO diario (aprobado específicamente para mielofibrosis con anemia severa)', route: 'VO', freq: 'c/24h', notes: 'Inhibe activina A y reduce la hepcidina mejorando la anemia' },
      { drug: 'TRASPLANTE ALOGÉNICO DE PROGENITORES HEMATOPOYÉTICOS (TAPH)', dose: 'Trasplante de médula de donante', route: 'Celular EV', freq: 'Procedimiento único curativo', notes: 'EL ÚNICO TRATAMIENTO CURATIVO POTENCIAL en pacientes jóvenes de riesgo intermedio-2 o alto (DIPSS Plus)' }
    ],
    nonPharm: ['Esplenectomía quirúrgica o radioterapia esplénica a dosis bajas en casos refractarios extremos con infartos dolorosos'],
    nursingCare: ['RECONOCIMIENTO DEL FROTIS EN LÁGRIMA DE ENFERMERÍA: Recordar que la presencia de Dacriocitos (células en gota) en el frotis es el sello visual de la médula ósea fibrótica que "exprime" los glóbulos rojos al salir a la sangre', 'Manejo del bazo gigante: enseñar al paciente a proteger el abdomen de traumatismos directos; fraccionar la alimentación en 5-6 comidas muy pequeñas porque el bazo comprime el estómago provocando saciedad precoz extrema', 'Monitoreo hematológico estricto con Ruxolitinib: vigilar descensos de plaquetas o hemoglobina al inicio']
  },
  {
    number: 547,
    id: 'diag-547',
    title: 'Amiloidosis primaria de cadenas ligeras (Amiloidosis AL sistémica)',
    cie10: 'E85.8',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Trastorno clonal de células plasmáticas caracterizado por la síntesis y secreción de cadenas ligeras libres de inmunoglobulinas monoclonales inestables (kappa o con mayor frecuencia lambda en 75%), que se pliegan anormalmente en configuración en lámina beta-plegada y se depositan de forma irreversible en el espacio extracelular de órganos vitales (corazón, riñones, hígado, nervios), causando atrofia y fallo orgánico progresivo. El compromiso cardíaco determina la supervivencia.',
    symptoms: ['COMPROMISO CARDÍACO (presente en >70% y causa principal de muerte):', '- CARDIOMIOPATÍA RESTRICTIVA GRAVE CON INSUFICIENCIA CARDÍACA CONSTRUCTIVA RÁPIDA (disnea de mínimos esfuerzos, edemas periféricos masivos, hepatomegalia congestiva e hipotensión arterial paradójica)', '- Síncopes por arritmias o bloqueo cardíaco', 'COMPROMISO RENAL (presente en >70%):', '- SÍNDROME NEFRÓTICO GRAVE CON PROTEINURIA MASIVA (>3 a 5 gramos/día) con albúmina muy baja y anasarca', 'SIGNOS CLÍNICOS PATOGNOMÓNICOS EXTERNOS (presentes en 15-20% pero casi diagnósticos):', '- MACROGLOSIA VERDADERA INDURADA (lengua gigante con indentaciones dentarias en los bordes que dificulta hablar o tragar)', '- "OJOS DE MAPACHE O SIGNO DEL OJO NEGRO" (Púrpura o equimosis periorbitaria bilateral espontánea o tras frotado leve, debida a fragilidad vascular por depósito de amiloide en capilares)', 'POLINEUROPATÍA SENSITIVO-MOTORA DOLOROSA AXONAL Y DISAUTONOMÍA SEVERA (hipotensión ortostática profunda con caídas de PA >30-40 mmHg al ponerse de pie)'],
    redFlags: ['DISOCIACIÓN CLÁSICA: HIPERTROFIA GRAVE EN EL ECOCARDIOGRAMA PERO BAJO VOLTAJE EN EL ELECTROCARDIOGRAMA (QRS microvoltados con septum ventricular engrosado >15 mm; patognomónico de amiloidosis cardíaca)'],
    criteria: 'Confirmación histológica de depósitos amiloides con TINCIÓN DE ROJO CONGO QUE MUESTRA BIRREFRINGENCIA VERDE MANZANA BAJO LUZ POLARIZADA MÁS demostración de componente monoclonal de cadenas ligeras.',
    labTests: ['BIOPSIA DE GRASA SUBCUTÁNEA ABDOMINAL CON TINCIÓN DE ROJO CONGO (procedimiento diagnóstico ambulatorio simple y seguro con sensibilidad >75-80%)', 'Dosaje de Cadenas Ligeras Libres séricas (dFLC) y ratio', 'Biomarcadores cardíacos obligatorios para estadificación pronóstica de Mayo: NT-proBNP y Troponina T ultrasensible', 'Proteinuria de 24 horas y electroforesis con inmunofijación'],
    imaging: ['Ecocardiograma Doppler: engrosamiento ventricular concéntrico simétrico ("patrón en vidrio brillante granular o centelleante") con DEFORMACIÓN LONGITUDINAL GLOBAL (GLS) CON RESPETO APICAL ("signo de la cereza en el pastel o apical sparing")', 'RM cardíaca con contraste (realce tardío de gadolinio subendocárdico global)'],
    differential: ['Amiloidosis por Transtiretina (ATTR senil o hereditaria)', 'Amiloidosis secundaria (AA por inflamación crónica)', 'Mieloma múltiple puro'],
    firstLine: [
      { drug: 'CUADRUPLETE DE PRIMERA LÍNEA ESTÁNDAR: Daratumumab SC + Bortezomib + Ciclofosfamida + Dexametasona (Dara-VCd / Ensayo ANDROMEDA)', dose: 'Daratumumab 1800 mg SC semanal por 8 semanas y luego mensual + Bortezomib 1.3 mg/m2 SC semanal + Ciclofosfamida 300 mg/m2 VO días 1, 8, 15 + Dexametasona 20-40 mg semanal', route: 'SC + VO', freq: 'Ciclos de 28 días', notes: 'REVOLUCIÓN MÉDICA: Primer régimen que logra respuestas hematológicas completas en >50-60% con rápida recuperación de la función cardíaca y renal' }
    ],
    alternatives: [
      { drug: 'Trasplante Autólogo de Médula Ósea (TAMO) a dosis ajustadas de Melfalán', dose: 'Acondicionamiento con Melfalán 100 a 200 mg/m2 EV con rescate autólogo', route: 'Celular EV', freq: 'Procedimiento único', notes: 'Reservado exclusivamente para una minoría de pacientes jóvenes (<65 años) con función cardíaca preservada (Troponina y BNP bajos)' }
    ],
    nonPharm: ['Restricción estricta de sodio (<1.5 g/día) y control diario de peso corporal en ayunas'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA DE MEDICAMENTOS CARDIOVASCULARES COMUNES EN AMILOIDOSIS CARDÍACA:', '1. CONTRAINDICADOS LOS CALCIOANTAGONISTAS (Diltiazem, Verapamilo) Y BETABLOQUEANTES A DOSIS ALTAS: se fijan a las fibrillas de amiloide provocando colapso circulatorio agudo y bloqueo auriculoventricular irreversible', '2. CONTRAINDICADA LA DIGOXINA: se une al amiloide causando intoxicación digitálica mortal a dosis normales', 'Inspección de equimosis periorbitarias: si observa hematomas en ambos párpados sin traumatismo previo, sospechar amiloidosis AL y avisar al hematólogo', 'Manejo de la hipotensión ortostática: recomendar medias de compresión graduada hasta la cintura y cambios posturales lentos']
  },
  {
    number: 548,
    id: 'diag-548',
    title: 'Tumores malignos de glándulas salivales (Carcinoma mucoepidermoide y adenoide quístico)',
    cie10: 'C07 / C08.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasias malignas epiteliales del sistema glandular salival mayor (parótida 70%, submandibular 10%) o menor (mucosa oral, paladar 20%). Los tipos histológicos más comunes son el CARCINOMA MUCOEPIDERMOIDE (el más prevalente en todas las edades y en niños) y el CARCINOMA ADENOIDE QUÍSTICO (cilindroma, caracterizado por invasión perineural precoz a lo largo de los pares craneales y metástasis pulmonares indoloras tardías a 10-15 años).',
    symptoms: ['Masa o nódulo duro, pétreo, firme e indoloro en la región parotídea preauricular o submandibular', 'Fijación de la masa a la piel o a planos óseos profundos', 'Crecimiento progresivo a lo largo de meses', 'PARÁLISIS FACIAL PERIFÉRICA PROGRESIVA IPSILATERAL (dificultad para cerrar el ojo o desvío de la boca): SIGNO CRÍTICO DE MALIGNIDAD POR INFILTRACIÓN TUMORAL DIRECTA DEL NERVIO FACIAL (VII PAR)', 'Dolor sordo continuo o parestesias faciales por invasión perineural', 'Adenopatías cervicales regionales palpables induradas', 'En glándulas salivales menores: masa submucosa dura no ulcerada en el paladar duro'],
    redFlags: ['MASA PAROTÍDEA ASOCIADA A PARÁLISIS DEL NERVIO FACIAL: diagnóstico prácticamente seguro de neoplasia maligna avanzada'],
    criteria: 'PAAF guiada por ecografía con citopatología (sistema Milan) o biopsia quirúrgica con anatomopatología confirmatoria.',
    labTests: ['Inmunohistoquímica y estudio de fusión genética MAML2 (específica de carcinoma mucoepidermoide) y MYB-NFIB (en adenoide quístico)'],
    imaging: ['RM de cabeza y cuello con contraste (estándar de oro: visualiza infiltración del nervio facial, invasión perineural y extensión al lóbulo profundo parotídeo)', 'TC de tórax obligatoria (metástasis pulmonares muy frecuentes en adenoide quístico)'],
    differential: ['Adenoma pleomorfo parotídeo benigno (el tumor salival más común, móvil, no paraliza el nervio)', 'Tumor de Warthin (cistoadenolinfoma en fumadores)', 'Litiasis salival con sialoadenitis obstructiva'],
    firstLine: [
      { drug: 'Parotidectomía Total o Subtotal con Preservación del Nervio Facial (Tratamiento Curativo)', dose: 'Extirpación quirúrgica completa de la glándula con disección meticulosa y monitorización intraoperatoria continua del nervio facial (VII par), sacrificando solo ramas directamente englobadas por el tumor', route: 'Quirúrgico de cabeza y cuello', freq: 'Procedimiento curativo', notes: 'Pilar curativo fundamental; asociar vaciamiento cervical si hay ganglios positivos o alto grado histológico' },
      { drug: 'Radioterapia Externa Adyuvante Postoperatoria', dose: 'Radioterapia conformada a dosis altas (60 a 66 Gy) sobre el lecho parotídeo y trayectos neurales', route: 'Radioterapia externa', freq: 'Fraccionada', notes: 'Indicada en tumores de alto grado, invasión perineural (típica en adenoide quístico) o márgenes estrechos' }
    ],
    alternatives: [
      { drug: 'Radioterapia con Iones de Carbono o Terapia con Neutrones rápidos', dose: 'En centros de protones/partículas pesadas', route: 'Radioterapia especializada', freq: 'Protocolo', notes: 'Eficacia superior en carcinomas adenoides quísticos irresecables de base de cráneo' }
    ],
    nonPharm: ['Rehabilitación orofacial y reanimación quirúrgica del nervio facial con injertos si hubo sección del nervio'],
    nursingCare: ['EVALUACIÓN DEL NERVIO FACIAL DE ENFERMERÍA: Comprobar la simetría facial antes y después de cualquier cirugía parotídea; pedir al paciente que arrugue la frente, cierre fuertemente los ojos, sonría y silbe; registrar cualquier asimetría o lagoftalmos', 'Protección ocular inmediata en lagoftalmos post-parotidectomía: lubricación corneal horaria y oclusión nocturna para evitar úlceras por exposición', 'Drenaje postquirúrgico tipo Redon o Jackson-Pratt: controlar débitos hemáticos y vigilar signos de fístula salival']
  },
  {
    number: 549,
    id: 'diag-549',
    title: 'Melanoma uveal intraocular (Melanoma de coroides y cuerpo ciliar)',
    cie10: 'C69.3',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El tumor intraocular maligno primario más frecuente en adultos (>85% originado en la coroides), derivado de los melanocitos de la úvea. A diferencia del melanoma cutáneo, el melanoma uveal NO está relacionado con la exposición solar, no tiene mutaciones en BRAF, sino que presenta mutaciones casi universales en las proteínas G (GNAQ y GNA11) y tiene un TROPISMO METASTÁSICO EXCLUSIVO HACIA EL HÍGADO (en >90% de los casos diseminados) por vía puramente hematógena.',
    symptoms: ['En hasta un 30% es COMPLETAMENTE ASINTOMÁTICO (descubierto incidentalmente en un examen rutinario de fondo de ojo)', 'FOTOPSIAS (visión de destellos luminosos o chispazos en un ojo)', 'Miodesopsias o manchas oscuras flotantes de inicio reciente', 'PÉRDIDA VISUAL PROGRESIVA O DEFECTO CAMPIMÉTRICO EN "CORTINA O SOMBRA OSCURA" por desprendimiento de retina exudativo secundario', 'Metamorfopsia (distorsión de las líneas rectas) si el tumor está cerca de la mácula', 'Dolor ocular solo si desencadena glaucoma neovascular o necrosis tumoral masiva'],
    redFlags: ['Pérdida del cromosoma 3 (Monosomía 3) y mutación BAP1: MARCADORES GENÉTICOS DE ALTO RIESGO CON METÁSTASIS HEPÁTICAS EN >50% DE CASOS A 5 AÑOS'],
    criteria: 'Masa coroidea cupuliforme o en "champiñón" pigmentada con reflectividad interna baja en ecografía ocular modo A y B.',
    labTests: ['Biopsia por aspiración con aguja fina intraocular (PAAF) para estudio citogenético (descarte de monosomía 3 y mutación BAP1)', 'Perfil hepático (FA, GGT, transaminasas)'],
    imaging: ['ECOGRAFÍA OCULAR MODO A Y B (ESTÁNDAR DE ORO DIAGNÓSTICO): masa coroidea sobreelevada con forma en "champiñón o botón de camisa", reflectividad acústica interna baja y vascularización interna intrínseca', 'RM hepática dinámica con contraste cada 6 meses (el cribado hepático obligatorio de por vida)'],
    differential: ['Nevus coroideo benigno (plano <2 mm de altura, sin fluido subretiniano ni crecimiento)', 'Hemangioma coroideo circuscrito', 'Metástasis coroidea de cáncer de mama o pulmón'],
    firstLine: [
      { drug: 'BRAQUITERAPIA EPIESCLERAL CON PLACA DE YODO-125 O RUTENIO-106 (ESTÁNDAR DE ORO CONSERVADOR)', dose: 'Implantación quirúrgica de una placa curva de oro con semillas radiactivas suturada a la esclera directamente sobre la base tumoral durante 3 a 5 días hasta entregar 85 Gy en el ápex', route: 'Quirúrgico braquiterapia', freq: 'Procedimiento único conservador', notes: 'SALVA EL OJO Y PRESERVA LA VISIÓN con la misma supervivencia que la extirpación del globo ocular (estudio COMS); control local >95%' }
    ],
    alternatives: [
      { drug: 'Enucleación Quirúrgica Completa Primaria del Globo Ocular', dose: 'Extirpación completa del ojo con colocación de implante esférico de hidroxiapatita', route: 'Quirúrgico', freq: 'Procedimiento definitivo', notes: 'Indicada en tumores gigantes (>10-12 mm de altura o >18 mm de diámetro de base), ceguera con dolor o invasión del nervio óptico' },
      { drug: 'Tebentafusp endovenoso (inmunoterapia biespecífica anti-gp100 / CD3)', dose: 'Infusiones semanales escaladas en pacientes HLA-A*02:01 positivos con metástasis hepáticas', route: 'EV semanal', freq: 'Semanal', notes: 'PRIMER TRATAMIENTO EN LA HISTORIA QUE PROLONGA LA SUPERVIVENCIA GLOBAL EN MELANOMA UVEAL METASTÁSICO' }
    ],
    nonPharm: ['MONITOREO HEPÁTICO SEMESTRAL OBLIGATORIO DE POR VIDA CON RM HEPÁTICA O ECOGRAFÍA (las metástasis hepáticas pueden aparecer hasta 15-20 años después)'],
    nursingCare: ['CUIDADOS DE LA BRAQUITERAPIA EPIESCLERAL DE ENFERMERÍA: El paciente permanece ingresado con el parche y la placa radiactiva suturada al ojo durante 3 a 5 días; mantener reposo en cama, no permitir frotarse el ojo y colaborar en la retirada estéril de la placa por el oftalmólogo', 'CRIBADO HEPÁTICO VITAL DE POR VIDA: Educar al paciente tratado de melanoma de ojo que debe realizarse una RM o ecografía del hígado cada 6 meses sin falta; el melanoma de ojo no viaja a los ganglios del cuello sino directamente al hígado por la sangre', 'Apoyo en la adaptación de la prótesis ocular externa tras enucleación']
  },
  {
    number: 550,
    id: 'diag-550',
    title: 'Feocromocitoma y Paraganglioma maligno funcionante',
    cie10: 'C74.1 / C75.5',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia neuroendocrina rara originada en las células cromafines de la médula suprarrenal (Feocromocitoma 80-85%) o de los ganglios simpáticos/parasimpáticos extraadrenales (Paraganglioma 15-20%), caracterizada por la hiperproducción y liberación masiva paroxística o continua de catecolaminas (adrenalina y noradrenalina). Asociado en >40% a síndromes genéticos hereditarios (MEN 2A/2B con mutación RET, VHL, NF1 y mutaciones en SDHB/SDHD con alto potencial metastásico).',
    symptoms: ['TRÍADA PATOGNOMÓNICA CLÁSICA DE GREEN (especificidad >90% en pacientes hipertensos):', '- 1. CEFALEA INTENSA PULSÁTIL PAROXÍSTICA', '- 2. DIAFORESIS PROFUSA EMPAPANTE', '- 3. PALPITACIONES TAQUICÁRDICAS VIOLENTAS', 'HIPERTENSIÓN ARTERIAL SEVERA, PAROXÍSTICA O RESISTENTE A MÚLTIPLES FÁRMACOS (crisis hipertensivas con PAS >220-250 mmHg)', 'Palidez facial llamativa y frialdad acra durante las crisis (por vasoconstricción periférica extrema inducida por noradrenalina)', 'Sensación de angustia vital o pánico inminente y temblor distal grueso', 'Hipotensión ortostática marcada entre las crisis por desensibilización de barorreceptores y depleción de volumen plasmático', 'Pérdida de peso rápida e hiperglucemia reactiva'],
    redFlags: ['CRISIS HIPERTENSIVA PAROXÍSTICA MASIVA CON EDEMA AGUDO DE PULMÓN, ACV HEMORRÁGICO O MIOCARDIOPATÍA DE TAKOTSUBO INVERTIDA'],
    criteria: 'Demostración de exceso de catecolaminas mediante metanefrinas fraccionadas libres en plasma u orina de 24 horas (elevación >3 veces el límite superior normal).',
    labTests: ['METANEFRINAS FRACCIONADAS LIBRES EN PLASMA O EN ORINA DE 24 HORAS (el test bioquímico más sensible >97%: normetanefrina y metanefrina)', 'Estudio genético de línea germinal obligatorio en TODO paciente (genes SDHB, SDHD, RET, VHL)'],
    imaging: ['TC trifásica o RM de abdomen y pelvis con contraste (masa suprarrenal hipervascular heterogénea hiperintensa en T2 en "bombilla eléctrica")', 'PET-CT con Galio-68 DOTATATE o Gammagrafía con MIBG (I-123 metayodobencilguanidina para detectar metástasis)'],
    differential: ['Hipertensión arterial esencial refractaria', 'Ataques de pánico con hiperventilación', 'Consumo de cocaína o anfetaminas', 'Feocromocitoma pseudocrisis'],
    firstLine: [
      { drug: 'BLOQUEO ALFA-ADRENÉRGICO PREOPERATORIO OBLIGATORIO PREVIO A CUALQUIER INTERVENCIÓN: Fenoxibenzamina o Doxazosina', dose: 'Fenoxibenzamina 10 mg VO cada 12 horas aumentando cada 3 días hasta 40-100 mg/día (o Doxazosina 2 a 16 mg/día VO) durante al menos 10 a 14 DÍAS PREVIOS a la cirugía', route: 'VO', freq: 'c/12-24h x 14 días previos', notes: 'MANDATORIO PARA SALVAR LA VIDA: El bloqueo alfa restituye el volumen intravascular y previene crisis hipertensivas mortales durante la intubación y manipulación quirúrgica' },
      { drug: 'ADRENALECTOMÍA LAPAROSCÓPICA O ROBÓTICA EN BLOQUE (TRATAMIENTO CURATIVO DEFINITIVO)', dose: 'Extirpación quirúrgica mínimamente invasiva con ligadura precoz de la vena suprarrenal antes de manipular el tumor', route: 'Quirúrgico laparoscópico', freq: 'Procedimiento definitivo', notes: 'Cura la hipertensión en >80% de los feocromocitomas benignos' }
    ],
    alternatives: [
      { drug: 'Bloqueo Beta-Adrenérgico (Propranolol 20-40 mg VO cada 8h)', dose: 'SOLO TRAS HABER LOGRADO UN BLOQUEO ALFA EFICAZ COMPLETO', route: 'VO', freq: 'c/8h', notes: 'CONTRAINDICACIÓN MORTAL DE DAR BETABLOQUEANTES SOLOS PRIMERO; el bloqueo beta sin bloqueo alfa previo deja los receptores alfa sin oposición causando vasoconstricción masiva mortal' },
      { drug: 'Terapia con I-131 MIBG a dosis altas o Lutecio-177 DOTATATE en metástasis irresecables', dose: 'Según avidez en medicina nuclear', route: 'Radioterapia metabólica EV', freq: 'Protocolo', notes: 'Control sintomático y tumoral en enfermedad maligna diseminada' }
    ],
    nonPharm: ['Dieta rica en sodio y líquidos abundantes (>3 Litros/día) durante el bloqueo alfa preoperatorio para expandir el lecho vascular'],
    nursingCare: ['REGLA DE ORO DE SEGURIDAD FARMACOLÓGICA DE ENFERMERÍA: "PRIMERO EL ALFA, DESPUÉS EL BETA, ¡NUNCA EL BETA SOLO!"; jamás administrar Propranolol, Atenolol o Labetalol a un paciente con sospecha de feocromocitoma sin que lleve al menos 3 a 5 días con Fenoxibenzamina o Doxazosina (puede causar crisis hipertensiva mortal inmediata)', 'Monitoreo hemodinámico estricto durante el bloqueo preoperatorio: medir PA acostado y de pie; el bloqueo es exitoso cuando la PA es <130/80 mmHg sentado y hay hipotensión ortostática leve (>90 mmHg de pie)', 'Post-adrenalectomía inmediata: vigilar HIPOTENSIÓN ARTERIAL SEVERA E HIPOGLUCEMIA aguda tras extirpar el tumor (al cesar súbitamente la descarga de catecolaminas; infundir suero salino y dextrosa)']
  },
  {
    number: 551,
    id: 'diag-551',
    title: 'Carcinoma de corteza suprarrenal (Carcinoma adrenal cortical)',
    cie10: 'C74.0',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Neoplasia endocrina maligna rara y sumamente agresiva de la corteza suprarrenal, con una tasa de supervivencia global a 5 años <30-40%. En más del 60% son tumores funcionantes hipersecretantes de hormonas esteroideas (cortisol, andrógenos, estrógenos y aldosterona). Se distingue por su gran tamaño al diagnóstico (>6 cm de diámetro) y tendencia a la invasión venosa y metástasis hepáticas/pulmonares tempranas.',
    symptoms: ['SÍNDROME DE CUSHING RÁPIDAMENTE PROGRESIVO Y SEVERO (hipersecreción de cortisol en 50-60%):', '- Aumento de peso centrípeto, cara de luna llena, jiba de búfalo y estrías violáceas anchas en abdomen', '- Miopatía proximal severa (dificultad para levantarse de la silla)', '- Hipertensión arterial grave e hipopotasemia refractaria con alcalosis metabólica', 'SÍNDROME DE VIRILIZACIÓN EN MUJERES (hipersecreción de andrógenos / DHEA-S):', '- Hirsutismo facial y corporal de rápida instauración en pocos meses', '- Alopecia androgénica, acné severo, engrosamiento de la voz y clitoromegalia', 'En tumores no funcionantes (40%): masa abdominal grande palpable en flanco con dolor sordo por compresión y saciedad precoz'],
    redFlags: ['Invasión tumoral directa de la vena renal y extensión a la vena cava inferior'],
    criteria: 'Confirmación histopatológica con criterios de Weiss (>=3 de 9 criterios histológicos indican malignidad) e índice Ki-67.',
    labTests: ['PERFIL HORMONAL ESTEROIDEO SUPRARRENAL COMPLETO:', '  * Cortisol libre en orina de 24 horas y Test de Nugent con Dexametasona 1 mg nocturno (ausencia de supresión)', '  * Sulfato de Dehidroepiandrosterona (DHEA-S sérica: extraordinariamente elevada en carcinoma virilizante)', '  * 17-OH-Progesterona, Androstenediona, Testosterona y Ratio Aldosterona/Renina'],
    imaging: ['TC de abdomen y pelvis con contraste multifásica: MASA SUPRARRENAL GRANDE (>5 a 6 cm), HETEROGÉNEA, CON ÁREAS DE NECROSIS Y HEMORRAGIA, calcificaciones y lavado ("wash-out") lento retardado <50%', 'RM abdominal (evalúa invasión vascular)'],
    differential: ['Adenoma suprarrenal benigno (homogéneo, rico en lípidos <10 UH, <4 cm)', 'Feocromocitoma', 'Metástasis suprarrenal de cáncer de pulmón'],
    firstLine: [
      { drug: 'ADRENALECTOMÍA RADICAL EN BLOQUE ABIERTA CON MÁRGENES NEGATIVOS R0 (ÚNICA OPCIÓN CURATIVA)', dose: 'Laparotomía abierta xifopúbica o subcostal con extirpación en bloque de la glándula suprarrenal, grasa perirrenal, ganglios retroperitoneales y órganos vecinos si están invadidos (riñón ipsilateral)', route: 'Quirúrgico oncológico', freq: 'Procedimiento curativo', notes: 'CONTRAINDICADA LA CIRUGÍA LAPAROSCÓPICA en tumores grandes o con sospecha de invasión por alto riesgo de rotura capsular y siembra peritoneal' },
      { drug: 'Tratamiento Adyuvante de Referencia con Mitotano oral (o-p\'-DDD)', dose: 'Inicio 1 a 2 g/día VO en dosis divididas con comidas grasas, aumentando gradualmente hasta alcanzar y mantener niveles plasmáticos terapéuticos estrictos entre 14 y 20 mg/L', route: 'VO con lípidos', freq: 'c/8h continuo de por vida', notes: 'Fármaco adrenolítico selectivo; destruye las células de la corteza suprarrenal; induce insuficiencia suprarrenal universal que requiere terapia de reemplazo hormonal obligatoria' }
    ],
    alternatives: [
      { drug: 'Quimioterapia de Primera Línea en Enfermedad Metastásica: Esquema EDP + Mitotano (Ensayo FIRM-ACT)', dose: 'Etopósido + Doxorrubicina + Cisplatino (EDP) cada 4 semanas combinado con Mitotano continuo', route: 'EV + VO', freq: 'Cada 28 días', notes: 'Estándar mundial para carcinoma adrenal avanzado metastásico' }
    ],
    nonPharm: ['TERAPIA DE REEMPLAZO HORMONAL SUSTITUTIVA OBLIGATORIA: Hidrocortisona 30 a 50 mg/día VO + Fludrocortisona 0.1 mg/día de por vida durante el tratamiento con Mitotano'],
    nursingCare: ['EDUCACIÓN SOBRE LA INSUFICIENCIA SUPRARRENAL INDUCIDA POR MITOTANO: El Mitotano destruye la glándula suprarrenal sana y tumoral e incrementa la proteína transportadora de cortisol; EL PACIENTE DEBE TOMAR SU DOSIS DE HIDROCORTISONA TODOS LOS DÍAS para no fallecer por shock adrenal; duplicar o triplicar la dosis ante fiebre o estrés agudo', 'Monitoreo de concentraciones plasmáticas de Mitotano (objetivo 14 a 20 mg/L): niveles >20 mg/L causan neurotoxicidad severa con ataxia y letargo', 'Administrar el Mitotano con leche entera o alimentos con grasa para mejorar su absorción']
  },
  {
    number: 552,
    id: 'diag-552',
    title: 'Neuroblastoma infantil (Tumor de la cresta neural)',
    cie10: 'C74.9',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'El tumor sólido extracraneal maligno más frecuente en la infancia y el cáncer más común en lactantes menores de 1 año de edad (>90% diagnosticado antes de los 5 años). Se origina a partir de las células precursoras simpáticas inmaduras (neuroblastos) de la cresta neural embrionaria, localizándose en la médula suprarrenal (40-50%) o en la cadena simpática paravertebral retroperitoneal o mediastínica. Su biología abarca desde la regresión espontánea completa (Estadio 4S) hasta la progresión fulminante.',
    symptoms: ['MASA ABDOMINAL O EN EL FLANCO DURA, NODULAR, FIJA, QUE TÍPICAMENTE CRUZA LA LÍNEA MEDIA Y RODEA GRANDES VASOS (a diferencia del tumor de Wilms que respeta la línea media)', 'SÍNDROMES CLÍNICOS PATOGNOMÓNICOS DE METÁSTASIS O DISEMINACIÓN:', '- "OJOS DE MAPACHE O EQUIMOSIS PERIORBITARIA BILATERAL" con proptosis (por metástasis en los huesos de la órbita)', '- SÍNDROME DE PEPPER: hepatomegalia masiva que llena todo el abdomen en lactantes menores de 1 año por metástasis hepáticas masivas', '- NÓDULOS CUTÁNEOS AZULADOS O VIOLÁCEOS PALPABLES ("Síndrome del bebé en muffin de arándanos o blueberry muffin baby")', '- DOLORES ÓSEOS GENERALIZADOS SEVEROS que impiden caminar (metástasis osteolíticas difusas)', '- SÍNDROME DE HORNER (ptosis, miosis, anhidrosis) en tumores simpáticos cervicales o del vértice torácico', '- SÍNDROME OPSOCLONO-MIOCLONO-ATAXIA (SOMA / "Síndrome de los ojos y pies danzantes"): ataxia aguda, mioclonías y movimientos oculares rápidos multidireccionales caóticos y erráticos (síndrome paraneoplásico autoinmune)', '- Diarrea acuosa secretora crónica e hipopotasemia (por secreción de Péptido Intestinal Vasoactivo / VIP)'],
    redFlags: ['AMPLIFICACIÓN DEL ONCOGEN MYCN EN EL TEJIDO TUMORAL: MARCADOR MOLECULAR DE EXTREMA AGRESIVIDAD Y ALTO RIESGO ONCOLÓGICO'],
    criteria: 'Biopsia tumoral con histología de células pequeñas redondas azules MÁS elevación de catecolaminas urinarias o biopsia de médula ósea con infiltración.',
    labTests: ['ÁCIDO VANILILMANDÉLICO (VMA) Y ÁCIDO HOMOVANÍLICO (HVA) EN ORINA DE 24 HORAS O MUESTRA AISLADA (elevados en >90-95% de los pacientes)', 'Estudio citogenético y molecular del gen MYCN por FISH (evalúa amplificación génica >10 copias: alto riesgo)', 'Aspirado y biopsia bilateral de médula ósea obligatorios'],
    imaging: ['Gammagrafía o SPECT con MIBG (I-123 metayodobencilguanidina: estándar de oro para detectar el tumor primario y metástasis óseas)', 'TC de tórax, abdomen y pelvis con contraste (masa calcificada retroperitoneal con encasillamiento de aorta y cava)'],
    differential: ['Tumor de Wilms (intrarrenal, liso, no cruza la línea media, no calcificado y catecolaminas normales)', 'Neuroblastoma 4S (regresión espontánea)', 'Linfoma no Hodgkin abdominal'],
    firstLine: [
      { drug: 'Bajo Riesgo / Lactantes Estadio 4S: Observación Vigilada o Cirugía Conservadora Mínima', dose: 'Seguimiento clínico y ecográfico estrecho', route: 'Observación', freq: 'Periódico', notes: 'Fascinante fenómeno oncológico: el neuroblastoma 4S en menores de 1 año con MYCN no amplificado regresa espontáneamente sin quimioterapia' },
      { drug: 'Alto Riesgo (Amplificación de MYCN o metastásico >18 meses): Protocolo Multimodal Intensivo en 5 Fases', dose: '1. Quimioterapia de inducción intensiva (COJEC o Rapid COJEC) + 2. Cirugía de resección + 3. Quimio a altas dosis con rescate autólogo (TAMO) + 4. Radioterapia local + 5. Inmunoterapia de Mantenimiento con ANTICUERPO MONOCLONAL ANTI-GD2 (Dinutuximab beta) + Ácido 13-Cis-Retinoico (Isotretinoína)', route: 'EV + VO', freq: 'Protocolo multimodal de alto riesgo', notes: 'La inmunoterapia anti-GD2 incrementó la supervivencia a largo plazo en más del 20% en neuroblastoma de alto riesgo' }
    ],
    alternatives: [
      { drug: 'Terapia con I-131 MIBG a dosis altas', dose: 'Enfermedad refractaria con captación ávida en gammagrafía', route: 'Radioterapia metabólica EV', freq: 'Protocolo', notes: 'Radioterapia interna dirigida' }
    ],
    nonPharm: ['Monitoreo continuo en UCI pediátrica durante la infusión de anticuerpos anti-GD2'],
    nursingCare: ['MANEJO DEL DOLOR DURANTE LA INFUSIÓN DE DINUTUXIMAB (ANTI-GD2): El antígeno GD2 se expresa en fibras nerviosas periféricas del dolor; la infusión del anticuerpo provoca DOLOR NEUROPÁTICO GENERALIZADO SEVERO; es MANDATORIA la infusión continua de Morfina EV en bomba iniciada antes del anticuerpo y mantenida durante toda la infusión', 'Monitoreo de reacciones alérgicas y fuga capilar por anti-GD2: vigilar hipotensión, broncoespasmo y edema periférico', 'Recolección adecuada de orina para VMA/HVA: evitar vainilla, chocolate, plátanos y cítricos 48h antes']
  },
  {
    number: 553,
    id: 'diag-553',
    title: 'Metástasis pulmonares y Síndrome de derrame pleural maligno',
    cie10: 'C78.0 / C78.2',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Diseminación metastásica hematógena o linfática hacia el parénquima pulmonar o la pleura a partir de tumores sólidos primarios extrapulmonares (mama, colon, riñón, sarcomas, próstata, ovario). El Derrame Pleural Maligno se produce por implantes tumorales directos en la pleura que aumentan la permeabilidad capilar y bloquean los estomas linfáticos parietales reabsorbentes.',
    symptoms: ['DISNEA PROGRESIVA DE ESFUERZO QUE EMPEORA EN DECÚBITO (el síntoma cardinal del derrame)', 'Tos seca irritativa persistente que no cede con antitusígenos', 'Dolor torácico sordo continuo o pesadez en el hemitórax afecto', 'SIGNOS EXPLORATORIOS DE DERRAME PLEURAL:', '- Matidez pétrea a la percusión torácica en la base pulmonar', '- Abolición o disminución del murmullo vesicular auscultatorio', '- Abolición de las vibraciones vocales táctiles', 'En metástasis parenquimatosas puras: frecuentemente asintomáticas tempranamente hasta que comprometen bronquios mayores con hemoptisis'],
    redFlags: ['DERRAME PLEURAL MASIVO A TENSIÓN CON DESPLAZAMIENTO MEDIASTÍNICO Y COLAPSO CARDIOVASCULAR (hipotensión y disnea asfíctica urgente)'],
    criteria: 'Toracocentesis con citología del líquido pleural demostrando células neoplásicas malignas o biopsia pleural.',
    labTests: ['Estudio citoquímico del líquido pleural: EXUDADO TÍPICO (Criterios de Light: cociente proteínas líquido/suero >0.5, LDH líquido/suero >0.6) con pH ácido (<7.30) y glucosa frecuentemente consumida', 'Citología de líquido pleural en bloque celular'],
    imaging: ['Radiografía de tórax en bipedestación (menisco de Damoisseau típico; o imagen en "SUELTA DE GLOBOS" con múltiples nódulos redondeados bilaterales)', 'Ecografía torácica (guía mandatoria para toracocentesis segura)', 'TC de tórax contrastada'],
    differential: ['Derrame paraneumónico complicado / Empiema pleural', 'Derrame pleural tuberculoso', 'Insuficiencia cardíaca congestiva con trasudado'],
    firstLine: [
      { drug: 'Tratamiento Sistémico Oncológico según el Tumor Primario de Origen', dose: 'Terapia dirigida, quimioterapia o inmunoterapia según histología y biomarcadores del tumor primario', route: 'Sistémica', freq: 'Según protocolo oncológico', notes: 'El control del cáncer primario puede secar y resolver el derrame pleural secundario' },
      { drug: 'Toracocentesis Evacuadora Descompresiva con Guía Ecográfica (Manejo Agudo)', dose: 'Evacuación de 1000 a 1500 mL de líquido pleural de forma lenta y gradual', route: 'Intervencionista percutáneo', freq: 'Según disnea', notes: 'Alivia la asfixia inmediatamente; NO extraer más de 1.5 Litros de golpe para prevenir el Edema Pulmonar por Reexpansión agudo mortal' }
    ],
    alternatives: [
      { drug: 'Pleurodesis Química con Talco Estéril (Slurry de talco)', dose: 'Instilación de 4 a 5 gramos de suspensión de talco estéril a través del tubo de tórax tras la evacuación completa', route: 'Intrapleural', freq: 'Procedimiento único', notes: 'Provoca inflamación fibrótica masiva que pega las dos hojas pleurales evitando que el líquido vuelva a acumularse' },
      { drug: 'Colocación de Catéter Pleural Tunelizado Permanente (PleurX / Rocket)', dose: 'Inserción ambulatoria bajo anestesia local de un catéter subcutáneo con válvula antirreflujo', route: 'Percutáneo permanente', freq: 'Uso domiciliario', notes: 'TRATAMIENTO DE ELECCIÓN EN PULMÓN ATRAPADO: Permite al paciente o familia drenar el líquido en casa cada 2-3 días con botellas al vacío sin hospitalizaciones' }
    ],
    nonPharm: ['Oxigenoterapia suplementaria y ventilación con cabecera a 45-60°'],
    nursingCare: ['PREVENCIÓN DEL EDEMA PULMONAR POR REEXPANSIÓN DE ENFERMERÍA: Al colaborar en la toracocentesis evacuadora, detener inmediatamente el drenaje si el paciente comienza con tos persistente, opresión en el pecho o si se alcanzan 1000 a 1500 mL; evacuar volúmenes masivos de golpe produce edema pulmonar no cardiogénico mortal', 'Cuidados del Catéter Pleural Tunelizado en el domicilio: enseñar la técnica aséptica para conectar la botella de vacío, registrar el volumen drenado y retirar el sistema al terminar', 'Vigilancia de dolor pleurítico intenso post-pleurodesis con talco: administrar analgesia pautada previa con opioides']
  },
  {
    number: 554,
    id: 'diag-554',
    title: 'Metástasis óseas y Síndrome de compresión medular metastásica',
    cie10: 'C79.5 / G99.2',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Diseminación tumoral hematógena al tejido óseo, prevalente en cáncer de mama, próstata, pulmón, riñón y tiroides. Puede ser osteolítica (destructiva con hipercalcemia) u osteoblástica (formadora de hueso frágil en próstata). El SÍNDROME DE COMPRESIÓN MEDULAR METASTÁSICA (SCMM) es una EMERGENCIA ONCOLÓGICA CRÍTICA causada por el colapso de un cuerpo vertebral invadido o la extensión epidural del tumor comprimiendo la médula espinal o cauda equina.',
    symptoms: ['SÍNTOMAS DE METÁSTASIS ÓSEAS SIMPLES: dolor óseo focal mecánico que empeora con la bipedestación o el movimiento y fracturas patológicas ante mínimos roces', 'SÍNDROME DE COMPRESIÓN MEDULAR AGUDA (SECUENCIA TEMPORAL CRÍTICA):', '- 1. DOLOR DE ESPALDA LOCALIZADO O RADICULAR (presente en >90% de los pacientes semanas antes del déficit motor; "dolor en cinturón o banda que empeora al acostarse")', '- 2. PÉRDIDA PROGRESIVA DE FUERZA MOTORA (debilidad motora en piernas, pesadez, dificultad para subir escaleras que progresa a paraplejía)', '- 3. ALTERACIONES SENSITIVAS: parestesias y pérdida de sensibilidad con NIVEL SENSITIVO TRONCAL CLARO ("adormecimiento desde el ombligo hacia abajo")', '- 4. DISFUNCIÓN DE ESFÍNTERES (signo tardío y de peor pronóstico): retención urinaria con globo vesical o incontinencia urinaria y fecal, y anestesia en silla de montar'],
    redFlags: ['TODO PACIENTE CON CÁNCER CONOCIDO QUE PRESENTA DOLOR DE ESPALDA NUEVO TIENE COMPRESIÓN MEDULAR HASTA DEMOSTRAR LO CONTRARIO MEDIANTE RM; SI PIERDE LA MARCHA TIENE MENOS DE 24-48 HORAS ANTES DE LA PARAPLEJÍA PERMANENTE'],
    criteria: 'RM urgente de columna vertebral completa demostrando compresión del saco dural o médula espinal.',
    labTests: ['Calcio iónico y sérico corregido con albúmina (descarte de hipercalcemia tumoral)', 'Fosfatasa alcalina'],
    imaging: ['RM DE COLUMNA VERTEBRAL COMPLETA CON GADOLINIO URGENTE (estándar de oro absoluto: debe abarcar columna cervical, dorsal y lumbosacra en <12-24 horas)', 'TC de columna con ventana ósea (evalúa estabilidad mecánica de la vértebra mediante el score SINS)'],
    differential: ['Hernia discal lumbar aguda', 'Absceso epidural espinal', 'Hematoma epidural', 'Mielitis transversa'],
    firstLine: [
      { drug: 'CORTICOIDES ENDOVENOSOS A DOSIS ALTAS INMEDIATOS: Dexametasona EV', dose: 'Bolo inicial de Dexametasona 16 a 24 mg EV inmediato, seguido de 4 a 8 mg EV cada 6 horas con protector gástrico', route: 'EV urgente', freq: 'Inmediato continuado', notes: 'EMERGENCIA MÉDICA: Iniciar de inmediato ante la sospecha clínica sin esperar la RM; reduce el edema vasogénico medular y salva la marcha' },
      { drug: 'Cirugía de Descompresión Neuroquirúrgica Urgente + Fisiación Instrumental (Score de Patchell)', dose: 'Laminectomía descompresiva circunferencial con estabilización vertebral con tornillos pediculares dentro de las primeras 24-48 horas', route: 'Neuroquirúrgico urgente', freq: 'Urgencia en <24-48h', notes: 'ENSAYO DE PATCHELL: La cirugía descompresiva urgente seguida de radioterapia es significativamente superior a la radioterapia sola para recuperar la capacidad de caminar' },
      { drug: 'Radioterapia Externa Descompresiva Urgente', dose: 'Radioterapia fraccionada (30 Gy en 10 fracciones o 8 Gy dosis única)', route: 'Radioterapia urgente', freq: 'Fraccionada', notes: 'Tratamiento de elección en tumores radiosensibles (mieloma, linfoma), pacientes inoperables o paraplejía de más de 48h' }
    ],
    alternatives: [
      { drug: 'Fármacos Modificadores del Metabolismo Óseo: Ácido Zoledrónico o Denosumab', dose: 'Ácido Zoledrónico 4 mg EV mensual; o Denosumab 120 mg SC cada 4 semanas', route: 'EV / SC mensual', freq: 'Cada 4 semanas', notes: 'Previenen nuevos eventos relacionados con el esqueleto (fracturas patológicas e hipercalcemia)' }
    ],
    nonPharm: ['Reposo en cama plano con inmovilización en bloque hasta evaluar estabilidad vertebral por traumatología / neurocirugía'],
    nursingCare: ['LA VENTANA DE ORO DE 24 HORAS EN COMPRESIÓN MEDULAR: Si un paciente con antecedentes de cáncer de mama, próstata o pulmón refiere debilidad en las piernas o dificultad para caminar, AVISAR DE INMEDIATO AL ONCÓLOGO/NEUROCIRUJANO Y PREPARAR DEXAMETASONA EV; si se descomprime cuando aún camina, el 80% conservará la marcha; si se interviene cuando ya está parapléjico, menos del 5% volverá a caminar', 'Sondaje vesical estéril urgente si presenta retención urinaria aguda con globo vesical palpable', 'Profilaxis de úlceras por presión y trombosis venosa profunda en el paciente parapléjico']
  },
  {
    number: 555,
    id: 'diag-555',
    title: 'Síndrome de lisis tumoral (Emergencia metabólica oncológica)',
    cie10: 'E88.3',
    category: 'Oncología',
    chapter: 'VIII. Enfermedades Oncológicas y Neoplásicas (496-555)',
    definition: 'Emergencia metabólica oncológica potencialmente mortal causada por la destrucción y lisis masiva rápida de células malignas (espontánea o inducida por quimioterapia, inmunoterapia o radioterapia), con liberación desbordante de iones intracelulares y ácidos nucleicos al torrente circulatorio. Muy común en neoplasias hematológicas de alta tasa de proliferación (Linfoma de Burkitt, Leucemia Linfoblástica Aguda, LMA con hiperleucocitosis).',
    symptoms: ['TÉTRADA METABÓLICA PATOGNOMÓNICA DE CAIRO-BISHOP:', '- 1. HIPERURICEMIA (>8.0 mg/dL): el catabolismo masivo de purinas satura la solubilidad del ácido úrico provocando precipitación de CRISTALES DE ÁCIDO ÚRICO en los túbulos renales con ANURIA Y FALLA RENAL AGUDA', '- 2. HIPERPOTASEMIA (>6.0 mEq/L): la salida de potasio intracelular causa PARESTESIAS, DEBILIDAD MUSCULAR Y ARRITMIAS VENTRICULARES LETALES CON PARO CARDÍACO', '- 3. HIPERFOSFATEMIA (>4.5-6.5 mg/dL): las células tumorales contienen hasta 4 veces más fósforo; la hiperfosfatemia satura el producto Calcio x Fósforo provocando PRECIPITACIÓN DE FOSFATO DE CALCIO en el riñón y corazón', '- 4. HIPOCALCEMIA SECUNDARIA (<7.0 mg/dL): por secuestro de calcio por el fósforo; cursa con TETANIA, ESPASMO CARPOPEDAL (signo de Trousseau), laringoespasmo, convulsiones y prolongación del intervalo QT', 'Oliguria o anuria aguda brusca, náuseas, vómitos, letargo y confusión'],
    redFlags: ['ARRITMIAS VENTRICULARES MALIGNAS POR HIPERPOTASEMIA (fibrilación ventricular y muerte súbita)', 'INSUFICIENCIA RENAL AGUDA ANÚRICA QUE REQUIERE HEMODIÁLISIS DE URGENCIA'],
    criteria: 'Criterios de Cairo-Bishop: Diagnóstico de laboratorio (al menos 2 alteraciones en las 24h previas o hasta 7 días posteriores a quimioterapia: ácido úrico >=8, potasio >=6, fósforo >=4.5, calcio <=7.0) MÁS Criterio clínico (falla renal, arritmias o convulsiones).',
    labTests: ['Perfil de lisis tumoral estricto cada 4 a 6 horas: Ácido úrico, potasio, fósforo, calcio iónico, creatinina, urea y LDH', 'Gasometría arterial (acidosis metabólica)'],
    imaging: ['Monitorización continua del trazado electrocardiográfico (ondas T picudas, ensanchamiento del QRS, prolongación de QT)'],
    differential: ['Insuficiencia renal aguda prerrenal por deshidratación simple', 'Rabdomiólisis traumática severa', 'Hipercalcemia tumoral'],
    firstLine: [
      { drug: 'HIPERHIDRATACIÓN ENDOVENOSA ENÉRGICA (PILAR PREVENTIVO Y TERAPÉUTICO CARDINAL)', dose: '2500 a 3000 mL/m2/día de Solución Salina al 0.9% (o Dextrosa en salino SIN POTASIO) iniciando 24 a 48 horas antes de la quimioterapia, buscando diuresis horaria estricta >80-100 mL/m2/h (o >2-3 mL/kg/h)', route: 'EV en infusión continua', freq: 'Continuo', notes: 'Diluye los electrolitos y maximiza la excreción urinaria de ácido úrico y fosfatos; NO ALCALINIZAR DE RUTINA con bicarbonato (la alcalinización favorece la precipitación de fosfato de calcio)' },
      { drug: 'RASBURICASA ENDOVENOSA (URICASA RECOMBINANTE) EN ALTO RIESGO O HIPERURICEMIA ESTABLECIDA', dose: '0.20 mg/kg EV en infusión de 30 minutos una vez al día durante 3 a 5 días', route: 'EV en infusión', freq: 'c/24h x 3-5 días', notes: 'ENZIMA DE MÁXIMA POTENCIA: Convierte el ácido úrico insoluble en ALANTOÍNA (5-10 veces más soluble) eliminándolo por orina en menos de 4 horas; contraindicada en déficit de G6PD por riesgo de hemólisis' },
      { drug: 'Alopurinol oral (Inhibidor de la xantino oxidasa) en Riesgo Intermedio', dose: '300 mg VO cada 12 horas (o 100 mg/m2 cada 8h en niños)', route: 'VO', freq: 'c/12h preventivo', notes: 'Frena la síntesis de nuevo ácido úrico pero NO disuelve el ácido úrico ya formado' }
    ],
    alternatives: [
      { drug: 'Tratamiento urgente de la Hiperpotasemia Crítica: Gluconato de Calcio al 10% + Insulina con Dextrosa', dose: 'Gluconato de calcio 10 mL EV en 5 min (estabiliza miocardio) + Insulina rápida 10 UI en 50 mL de Dextrosa 33% EV', route: 'EV de rescate', freq: 'Según potasio >6 mEq/L', notes: 'Protección miocárdica de emergencia' },
      { drug: 'HEMODIÁLISIS O TERAPIA DE REEMPLAZO RENAL CONTINUO (TRRC) DE URGENCIA', dose: 'Diálisis de urgencia en UCI', route: 'Extracorpórea', freq: 'Urgencia', notes: 'Indicada ante hiperpotasemia refractaria >6.5-7.0 mEq/L, sobrecarga de volumen pulmonar o producto Ca x P >70' }
    ],
    nonPharm: ['MONITOREO CARDIACO TELEMÉTRICO CONTINUO EN CAMA LAS 24 HORAS'],
    nursingCare: ['PROTOCOLO DE SEGURIDAD EXTREMA DE ENFERMERÍA EN LISIS TUMORAL:', '1. PROHIBICIÓN ABSOLUTA DE AÑADIR CLORURO DE POTASIO (KCl) A LOS SUEROS ENDOVENOSOS; revisar cuidadosamente cada bolsa de hidratación para asegurar que esté 100% libre de potasio', '2. BALANCE HÍDRICO HORARIO ESTRICTO: Medir la diuresis cada hora con urómetro; si la diuresis cae <80 mL/h a pesar de la hidratación, avisar al médico para administrar Furosemida o evaluar diálisis (no forzar diuresis con diuréticos si el paciente está hipovolémico)', '3. MANEJO CORRECTO DE LA MUESTRA DE SANGRE PARA RASBURICASA: Extraer la muestra en tubo con heparina previamente ENFRIADO EN HIELO Y TRASLADAR EN BAÑO DE HIELO AL LABORATORIO INMEDIATAMENTE; si la muestra se mantiene a temperatura ambiente, la rasburicasa sigue degradando el ácido úrico en el tubo dando niveles falsamente indetectables', '4. Alerta ante hipocalcemia: NO corregir el calcio con gluconato salvo si hay síntomas neuromusculares graves o paro (el calcio administrado precipita con el fósforo masivo calcificando los riñones)']
  }
];



