import { CatalogoEntry } from './types';

export const capitulo5: CatalogoEntry[] = [
  {
    number: 266,
    id: 'diag-266',
    title: 'Cistitis aguda',
    cie10: 'N30.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección bacteriana aguda de la mucosa vesical del tracto urinario inferior, originada en más del 80-85% de los casos por Escherichia coli uropatógena que asciende desde la región perineal.',
    symptoms: ['Disuria intensa (ardor, dolor o escozor al orinar)', 'Polaquiuria (micciones muy frecuentes de escaso volumen)', 'Tenesmo vesical y urgencia miccional imperiosa con sensación de vaciado incompleto', 'Dolor o pesadez sorda en el hipogastrio / región suprapúbica', 'Orina turbia, fétida o hematuria macroscópica terminal', 'AUSENCIA de fiebre o dolor lumbar'],
    redFlags: ['Aparición de fiebre > 38 °C, escalofríos o dolor en fosa lumbar (progresión a Pielonefritis aguda)'],
    criteria: 'Síntomas miccionales irritativos típicos en mujer no gestante sin factores de complicación + tira reactiva de orina positiva para esterasa leucocitaria y nitritos.',
    labTests: ['Examen completo de orina (sedimento con leucocituria > 10 por campo y bacterias abundantes)', 'Urocultivo con antibiograma (reservado en caso de sospecha de resistencia, fracaso terapéutico o ITU recurrente)'],
    imaging: ['No indicada en cistitis no complicada'],
    differential: ['Uretritis por Chlamydia o Gonococo', 'Vaginitis candidiásica o tricomoniásica', 'Cistitis intersticial / Síndrome de vejiga dolorosa'],
    firstLine: [
      { drug: 'Fosfomicina trometamol oral (Primera línea de elección)', dose: '3 g VO en sobre monodosis disuelto en medio vaso de agua antes de acostarse con la vejiga vacía', route: 'VO monodosis', freq: 'Dosis única', notes: 'Excelente biodisponibilidad y tasa de curación > 90% con mínima resistencia bacteriana' },
      { drug: 'Nitrofurantoína monohidrato / macrocristales', dose: '100 mg cada 12 horas VO con las comidas por 5 días', route: 'VO con alimentos', freq: 'c/12h x 5 días', notes: 'Alta concentración urinaria; evitar si eGFR < 30 mL/min' }
    ],
    alternatives: [
      { drug: 'Cefalexina o Cefuroxima', dose: 'Cefalexina 500 mg cada 6-8 horas VO por 5 a 7 días', route: 'VO', freq: 'c/6-8h', notes: 'De elección preferente en gestantes con cistitis' },
      { drug: 'Fenazopiridina (analgésico urinario sintomático)', dose: '100 a 200 mg cada 8 horas VO por solo 2 días', route: 'VO', freq: 'c/8h x 48h', notes: 'Alivio rápido de la disuria intensa; tiñe la orina y lentes de contacto de color anaranjado' }
    ],
    nonPharm: ['Hidratación oral abundante (2 a 2.5 L/día)', 'Higiene perineal correcta de adelante hacia atrás', 'Micción postcoital inmediata'],
    nursingCare: ['Advertir a la paciente que la fenazopiridina tiñe la orina de color naranja intenso y puede manchar la ropa interior', 'Educación para la salud sobre no postergar la micción ante el deseo y orinar siempre después de tener relaciones sexuales', 'Instruir que debe consultar de inmediato si presenta fiebre, náuseas o dolor en la espalda']
  },
  {
    number: 267,
    id: 'diag-267',
    title: 'Pielonefritis aguda',
    cie10: 'N10',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección bacteriana aguda invasiva del parénquima renal y del sistema pielocalicial, habitualmente secundaria a la propagación ascendente de uropatógenos (principalmente Escherichia coli) desde el tracto urinario bajo.',
    symptoms: ['Tríada cardinal: 1. Fiebre alta en picos (≥ 38.5 - 39 °C) con escalofríos intensos y temblorosos; 2. Dolor lumbar unilateral sordo y constante en fosa renal; 3. Puñopercusión lumbar de Giordano POSITIVA franca', 'Náuseas, vómitos, anorexia y malestar general', 'Síntomas de cistitis acompañantes (disuria, polaquiuria) en el 60-70% de casos'],
    redFlags: ['Sepsis de foco urinario (Urosepsis con hipotensión arterial, taquicardia y lactato elevado)', 'Absceso renal o pionefrosis'],
    criteria: 'Fiebre + dolor lumbar con signo de Giordano positivo + piuria y bacteriuria en sedimento urinario + urocultivo positivo (≥ 100,000 UFC/mL).',
    labTests: ['Examen completo de orina (leucocituria masiva, piuria, cilindros leucocitarios patognomónicos)', 'UROCULTIVO CON ANTIBIOGRAMA OBLIGATORIO PREVIO A ANTIBIÓTICOS', 'Hemograma con leucocitosis neutrofílica y desviación izquierda, PCR y VSG elevadas', 'Creatinina sérica y urea, y Hemocultivos si hay fiebre alta o criterios de sepsis'],
    imaging: ['Ecografía renal y de vías urinarias (urgente si hay mala evolución a las 48-72h o sospecha de litiasis obstructiva / absceso)', 'Uro-TAC con contraste si persisten picos febriles al 3er día'],
    differential: ['Cólico nefrítico litiásico puro', 'Apendicitis aguda o colecistitis aguda', 'Absceso perinéfrico', 'Enfermedad pélvica inflamatoria'],
    firstLine: [
      { drug: 'Tratamiento ambulatorio en no complicadas: Ciprofloxacino o Ceftriaxona', dose: 'Ciprofloxacino 500 mg cada 12 horas VO por 7 días (si resistencia local < 10%), o Ceftriaxona 1 g IM/EV dosis inicial seguida de Cefixima 400 mg/día VO por 10 días', route: 'VO / EV', freq: 'c/12-24h', notes: 'Solo en pacientes estables con buena tolerancia oral' },
      { drug: 'Tratamiento hospitalario en complicadas o gestantes: Ceftriaxona endovenosa', dose: '1 a 2 g cada 24 horas EV en infusión lenta por 10 a 14 días', route: 'EV', freq: 'c/24h', notes: 'De primera línea hospitalaria en el Perú; pasar a vía oral tras 48h afebril' }
    ],
    alternatives: [
      { drug: 'Meropenem o Piperacilina/Tazobactam', dose: 'Meropenem 1 g cada 8 horas EV', route: 'EV', freq: 'c/8h', notes: 'De elección si se aísla E. coli productora de BLEE (betalactamasas de espectro extendido) o shock séptico' }
    ],
    nonPharm: ['Hidratación parenteral adecuada con solución salina para forzar arrastre urinario'],
    nursingCare: ['MANIOBRA DE GIORDANO: Percusión suave con el borde cubital de la mano sobre la fosa lumbar a nivel del ángulo costovertebral; registrar si despierta dolor vivo', 'Toma inmediata de urocultivo y hemocultivos con técnica estéril ANTES de pasar la primera dosis de antibiótico', 'Monitoreo de curva térmica cada 4 horas y signos vitales (alerta de sepsis: PAS < 90 o taquipnea)', 'Control estricto de balance hídrico y diuresis horaria']
  },
  {
    number: 268,
    id: 'diag-268',
    title: 'Pielonefritis crónica',
    cie10: 'N11.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Nefropatía túbulo-intersticial crónica cicatrizal caracterizada por inflamación y fibrosis progresiva del parénquima renal y deformidad de los cálices renales, habitualmente secundaria a reflujo vesicoureteral congénito o uropatía obstructiva crónica recurrente.',
    symptoms: ['Evolución frecuentemente insidiosa y asintomática hasta estadios avanzados', 'Episodios recurrentes previos de infecciones urinarias en la infancia', 'Hipertensión arterial secundaria de difícil control', 'Poliuria, nicturia y polidipsia por pérdida precoz de la capacidad de concentración tubular renal', 'Astenia, palidez y fatiga por enfermedad renal crónica'],
    redFlags: ['Progresión irreversible a Enfermedad Renal Crónica terminal en diálisis'],
    criteria: 'Cicatrices corticales renales con deformación y retracción de los cálices subyacentes en urografía o gammagrafía renal con DMSA.',
    labTests: ['Creatinina sérica y tasa de filtrado glomerular (eGFR)', 'Sedimento urinario (cilindros granulosos y leucocitarios)', 'Microalbuminuria y urocultivo periódico'],
    imaging: ['Gammagrafía renal con Ácido Dimercaptosuccínico marcado con Tc-99m (Tc-DMSA: método gold standard para mapeo de cicatrices corticales)', 'Ecografía renal (riñones pequeños, asimétricos, con contornos lobulados e hiperecogenicidad cortical)'],
    differential: ['Nefroangioesclerosis hipertensiva', 'Nefropatía por analgésicos', 'Glomerulonefritis crónica'],
    firstLine: [
      { drug: 'Tratamiento agresivo y oportuno de cada episodio de infección urinaria aguda recurrente', dose: 'Según antibiograma específico por 10 a 14 días', route: 'VO/EV', freq: 'Reglado', notes: 'Previene la progresión de nuevas cicatrices parenquimatosas' },
      { drug: 'Control estricto de la presión arterial con IECA o ARA-II (Enalapril o Losartán)', dose: 'Losartán 50 a 100 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Efecto antiproteinúrico y nefroprotector para frenar el declive de la función renal' }
    ],
    alternatives: [
      { drug: 'Corrección quirúrgica o endoscópica del reflujo vesicoureteral en niños', dose: 'Inyección periureteral de Deflux o reimplante ureteral', route: 'Quirúrgica', freq: 'Electiva', notes: 'Evita la persistencia del mecanismo fisiopatológico de daño renal retrógrado' }
    ],
    nonPharm: ['Hidratación constante, micción programada y evitar fármacos nefrotóxicos (AINEs)'],
    nursingCare: ['Pesquisa de antecedentes de infecciones urinarias a repetición en el control de CRED infantil', 'Monitoreo seriado de la presión arterial y educación sobre adherencia a antihipertensivos', 'Orientación sobre la restricción moderada de proteínas de la dieta en ERC avanzada']
  },
  {
    number: 269,
    id: 'diag-269',
    title: 'Uretritis no gonocócica',
    cie10: 'N34.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección e inflamación de la uretra no provocada por Neisseria gonorrhoeae, causada primordialmente por Chlamydia trachomatis (en el 30-50% de casos), Mycoplasma genitalium, Ureaplasma urealyticum o Trichomonas vaginalis transmitidas por vía sexual.',
    symptoms: ['Disuria o molestia miccional (escozor o prurito dentro de la uretra)', 'Secreción uretral habitualmente escasa, mucoide, blanquecina, serosa o transparente (a diferencia de la secreción gonocócica profusa purulenta)', 'Eritema del meato uretral', 'Frecuentemente asintomática en mujeres (cervicitis mucopurulenta silente)'],
    redFlags: ['Epididimitis aguda en varones jóvenes', 'Enfermedad pélvica inflamatoria con esterilidad tubárica y embarazo ectópico en mujeres', 'Artritis reactiva (Síndrome de Reiter)'],
    criteria: 'Clínica de uretritis + frotis uretral teñido con Gram que muestra ≥ 2 a 5 leucocitos polimorfonucleares por campo de inmersión en aceite (1000x) y AUSENCIA de diplococos gramnegativos intracelulares + confirmación por PCR.',
    labTests: ['Pruebas de amplificación de ácidos nucleicos (NAAT / PCR en orina del primer chorro o hisopado uretral/cervical) para Chlamydia trachomatis y Mycoplasma genitalium', 'Tinción Gram de secreción uretral', 'Descarte de VIH, sífilis y hepatitis B'],
    imaging: ['No requerida'],
    differential: ['Uretritis gonocócica', 'Infección por herpes simple genital', 'Prostatitis bacteriana'],
    firstLine: [
      { drug: 'Doxiciclina oral (Tratamiento de elección según guías CDC actuales)', dose: '100 mg cada 12 horas VO con un vaso lleno de agua durante 7 días consecutivos', route: 'VO con alimentos', freq: 'c/12h x 7 días', notes: 'Mayor eficacia erradicadora frente a Chlamydia y Mycoplasma que la azitromicina monodosis' }
    ],
    alternatives: [
      { drug: 'Azitromicina oral monodosis', dose: '1 g VO en dosis única', route: 'VO monodosis', freq: 'Dosis única', notes: 'Alternativa si hay sospecha de mala adherencia al tratamiento de 7 días o en gestantes' },
      { drug: 'Moxifloxacino oral', dose: '400 mg/día VO por 7 a 14 días', route: 'VO', freq: 'c/24h', notes: 'De elección en fallos de tratamiento causados por Mycoplasma genitalium resistente a macrólidos' }
    ],
    nonPharm: ['ABSTINENCIA SEXUAL ESTRICTA durante los 7 días de tratamiento y hasta que tanto el paciente como su pareja hayan completado la terapia', 'TRATAMIENTO OBLIGATORIO Y SIMULTÁNEO DE TODAS LAS PAREJAS SEXUALES recientes (en los últimos 60 días)'],
    nursingCare: ['CONSEJERÍA DE ENFERMERÍA EN ITS: Explicar sin juzgar la vital importancia de tratar simultáneamente a la pareja sexual para evitar el efecto "ping-pong" de reinfección continua', 'Instruir sobre la toma de doxiciclina: no acostarse en los siguientes 30 minutos tras la toma (prevenir esofagitis medicamentosa) y evitar tomarla junto a leche o antiácidos', 'Fomentar el uso sistemático y correcto del preservativo', 'Ofertar tamizaje para VIH y Sífilis (VDRL/RPR)']
  },
  {
    number: 270,
    id: 'diag-270',
    title: 'Absceso renal',
    cie10: 'N15.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Colección focal de pus y material purulento localizada dentro del parénquima renal (absceso renal o carbunco renal) o en el espacio perirrenal entre la cápsula renal y la fascia de Gerota (absceso perinéfrico), secundario a pielonefritis complicada ascendente (E. coli, Klebsiella) o diseminación hematógena (Staphylococcus aureus).',
    symptoms: ['Fiebre persistente en picos y escalofríos que no cede tras 72 horas de tratamiento antibiótico adecuado para pielonefritis', 'Dolor constante y severo en flanco y fosa lumbar que puede irradiar a fosa ilíaca', 'Masa lumbar palpable y dolorosa en el 20-30% de casos', 'Astenia intensa, pérdida de peso, sudoración nocturna y escoliosis antiálgica'],
    redFlags: ['Rotura del absceso al espacio peritoneal (peritonitis aguda) o shock séptico refractario'],
    criteria: 'Fiebre persistente y dolor lumbar refractario + Tomografía computarizada con contraste que demuestra una masa hipodensa intra o perirrenal con realce periférico "en anillo" tras el contraste.',
    labTests: ['Hemograma con leucocitosis marcada y neutrofilia, PCR y VSG muy elevadas', 'Urocultivo y Hemocultivos seriados', 'Cultivo y antibiograma del pus obtenido por punción percutánea'],
    imaging: ['TOMOGRAFÍA COMPUTARIZADA (Uro-TAC) ABDOMINOPÉLVICA CON CONTRASTE (método de elección diagnóstica con sensibilidad > 95%)', 'Ecografía renal (muestra colección líquida anecoica o heterogénea con ecos internos, útil para guiar punción)'],
    differential: ['Quiste renal infectado o complicado', 'Carcinoma de células renales necrótico', 'Hematoma renal infectado'],
    firstLine: [
      { drug: 'Antibioticoterapia parenteral bactericida guiada por cultivo: Meropenem o Ceftriaxona + Vancomicina', dose: 'Meropenem 1 g cada 8 horas EV (o Ceftriaxona 2 g/día EV + Vancomicina 15-20 mg/kg c/12h EV) por 3 a 4 semanas', route: 'EV', freq: 'Reglado', notes: 'Tratamiento médico inicial; en abscesos pequeños (< 3-5 cm) puede ser suficiente sin drenaje' },
      { drug: 'DRENAJE PERCUTÁNEO GUIADO POR ECOGRAFÍA O TOMOGRAFÍA', dose: 'Colocación de catéter de nefrostomía/drenaje multipropósito (pigtail 8-12 Fr)', route: 'Intervencionista percutáneo', freq: 'Urgente', notes: 'INDICADO DE ELECCIÓN en todo absceso ≥ 3-5 cm o si no hay mejoría clínica tras 48h de antibióticos' }
    ],
    alternatives: [
      { drug: 'Drenaje quirúrgico abierto o Nefrectomía', dose: 'Cirugía abierta', route: 'Quirúrgica', freq: 'Urgente', notes: 'En abscesos gigantes multiloculados no accesibles o riñón completamente desestructurado y afuncionante' }
    ],
    nonPharm: ['Hidratación endovenosa y reposo en cama'],
    nursingCare: ['Cuidado meticuloso del catéter de drenaje percutáneo: fijación segura, cuantificación diaria de débito y características del líquido drenado (color, viscosidad, fetidez)', 'Lavados suaves del drenaje con suero fisiológico estéril según prescripción para evitar la obstrucción por detritos espesos', 'Monitoreo horario de la temperatura axilar y signos vitales para detección precoz de shock séptico', 'Vigilancia de signos de sangrado o fuga pericatéter']
  },
  {
    number: 271,
    id: 'diag-271',
    title: 'Litiasis renal',
    cie10: 'N20.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Formación de concreciones sólidas o cálculos (litiasis) en el interior de los cálices o la pelvis renal como consecuencia de la sobresaturación urinaria de sales minerales, siendo los más frecuentes los de oxalato de calcio (75-80%), fosfato de calcio, ácido úrico, estruvita (cálculos coraliformes infecciosos) y cistina.',
    symptoms: ['Frecuentemente asintomática mientras el cálculo permanece inmóvil en el cáliz renal ("litiasis calicial silente")', 'Dolor lumbar sordo y persistente por distensión de la cápsula', 'Microhematuria o macrohematuria indolora que aparece o aumenta con el movimiento o ejercicio físico', 'Infecciones urinarias a repetición'],
    redFlags: ['Cálculo coraliforme gigante (cálculo en asta de ciervo) con destrucción del parénquima renal', 'Litiasis bilateral con riesgo de insuficiencia renal aguda'],
    criteria: 'Visualización directa de cálculos radiopacos o radiolúcidos mediante Tomografía Computarizada sin contraste (Uro-TAC helicoidal sin contraste).',
    labTests: ['Examen de orina (microhematuria en el 90%, cristales típicos según composición, pH urinario)', 'Estudio metabólico urinario en orina de 24 horas: calcio, oxalato, ácido úrico, citrato, fósforo y creatinina', 'Calcio y ácido úrico séricos'],
    imaging: ['Uro-TAC Helicoidal sin contraste (gold standard de máxima precisión)', 'Ecografía renal (muestra imagen hiperecogénica con sombra acústica posterior)', 'Radiografía simple de abdomen (detecta cálculos radiopacos de calcio)'],
    differential: ['Quiste renal con calcificaciones de pared', 'Tuberculosis renal con calcificaciones', 'Tumor renal'],
    firstLine: [
      { drug: 'Litotricia Extracorpórea por Ondas de Choque (LEOC) o Cirugía Retrógrada Intrarrenal (RIRS con Láser Holmium)', dose: 'Procedimiento intervencionista urológico', route: 'Extracorpóreo / Endoscópico', freq: 'Electivo', notes: 'De elección para cálculos caliciales o piélicos < 20 mm sintomáticos o en crecimiento' },
      { drug: 'Hidratación oral masiva como pilar preventivo primario', dose: 'Ingesta de agua para lograr un volumen urinario de al menos 2.5 a 3.0 litros al día', route: 'VO', freq: 'Diario permanente', notes: 'Medida profiláctica no farmacológica más eficaz para evitar la sobresaturación de sales' }
    ],
    alternatives: [
      { drug: 'Nefrolitotomía Percutánea (NLP)', dose: 'Cirugía endourológica percutánea', route: 'Percutáneo', freq: 'Única', notes: 'De elección en cálculos piélicos grandes > 20 mm o cálculos coraliformes' },
      { drug: 'Alcalinización urinaria con Citrato de Potasio', dose: '30 a 60 mEq/día VO para mantener pH urinario entre 6.5 y 7.0', route: 'VO', freq: 'c/8-12h', notes: 'Disuelve activamente los cálculos de ácido úrico puro y previene los de oxalato' }
    ],
    nonPharm: ['Reducción del consumo excesivo de sal en la dieta (< 2 g/día de sodio) y de proteínas animales', 'NO RESTRINGIR EL CALCIO DE LA DIETA (la restricción de calcio aumenta la absorción intestinal de oxalato y empeora la litiasis)'],
    nursingCare: ['Educación nutricional sobre hidratación: beber un vaso grande de agua antes de acostarse para evitar la concentración urinaria de madrugada', 'Instruir al paciente en tamizar y colar toda la orina para recuperar cualquier fragmento o lito expulsado y enviarlo a análisis bioquímico de composición cristalográfica', 'Orientación sobre la ingesta equilibrada de calcio lácteo junto con las comidas habituales']
  },
  {
    number: 272,
    id: 'diag-272',
    title: 'Cólico nefrítico',
    cie10: 'N23',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Síndrome doloroso paroxístico agudo de máxima intensidad causado por la obstrucción mecánica brusca del tracto urinario superior (habitualmente por migración de un cálculo en el uréter), que genera hiperpresión retrógrada pielocalicial, espasmo muscular ureteral e isquemia parietal.',
    symptoms: ['Dolor agudo de inicio súbito, lancinante, cólico e intolerable en la fosa lumbar ("uno de los peores dolores descritos")', 'Irradiación típica anteroinferior hacia el flanco, fosa ilíaca, ingle y genitales externos (testículo en varones, labio mayor en mujeres)', 'Inquietud psicomotriz extrema: el paciente se mueve continuamente sin encontrar ninguna postura que le alivie ("dolor agitado")', 'Cortejo vegetativo intenso: náuseas, vómitos, diaforesis y palidez cutánea', 'Disuria, polaquiuria y tenesmo vesical cuando el cálculo alcanza el uréter intramural yuxtavesical'],
    redFlags: ['CÓLICO NEFRÍTICO COMPLICADO CON FIEBRE / INFECCIÓN (urgencia urológica absoluta: riesgo de urosepsis fulminante)', 'Obstrucción en riñón único o anuria'],
    criteria: 'Dolor cólico lumbar con irradiación genital típica + microhematuria en tira de orina + confirmación ecográfica o tomográfica de lito obstructivo con ectasia pielocalicial.',
    labTests: ['Examen de orina completo (microhematuria en > 85-90% de casos)', 'Creatinina sérica y hemograma con leucocitos (descarte de sepsis)', 'PCR'],
    imaging: ['Ecografía renal y vesical a pie de cama (detecta hidronefrosis / dilatación de la pelvis renal)', 'Tomografía Computarizada sin contraste (Uro-TAC helicoidal sin contraste: localiza el tamaño y posición exacta del lito con 99% de sensibilidad)'],
    differential: ['Apendicitis aguda o diverticulitis', 'Embarazo ectópico roto o torsión de quiste ovárico', 'Disección o rotura de aneurisma aórtico abdominal (dolor lumbar súbito en mayores de 50 años)'],
    firstLine: [
      { drug: 'AINEs endovenosos como analgésicos de primera elección (Ketoprofeno o Ketorolaco o Metamizol)', dose: 'Ketoprofeno 100 mg EV en infusión lenta en 100 mL de solución salina, o Ketorolaco 30 mg EV lento, o Metamizol 1 a 2 g EV lento', route: 'EV', freq: 'c/8h SOS', notes: 'Los AINEs son más eficaces que los opioides porque disminuyen la síntesis de prostaglandinas renales, reduciendo la filtración glomerular y la presión pieloureteral' },
      { drug: 'Terapia Médica Expulsiva (TME) en cálculos ureterales distales < 7-10 mm: Tamsulosina', dose: '0.4 mg/día VO después del desayuno por 2 a 4 semanas', route: 'VO', freq: 'c/24h', notes: 'Bloqueador alfa-1 que relaja el músculo liso del uréter distal facilitando la expulsión espontánea' }
    ],
    alternatives: [
      { drug: 'Opioides parenterales (Morfina o Tramadol) en dolor refractario a AINEs', dose: 'Tramadol 50 a 100 mg EV lento o Morfina 2 a 4 mg EV lento c/4-6h', route: 'EV lento', freq: 'SOS', notes: 'De rescate si persiste dolor severo' },
      { drug: 'Derivación urinaria de URGENCIA mediante Catéter Doble J o Nefrostomía percutánea', dose: 'Descompresión urológica inmediata', route: 'Endourológica / Percutánea', freq: 'Emergencia', notes: 'MANDATORIA E INMEDIATA ante fiebre, sepsis urinaria o anuria obstructiva' }
    ],
    nonPharm: ['APLICACIÓN DE CALOR LOCAL en la zona lumbar (termoterapia con bolsa de agua tibia para espasmo muscular)', 'EVITAR LA SOBREHIDRATACIÓN ENDOVENOSA AGUDA DURANTE EL DOLOR (pasar sueros a chorro aumenta la presión intrapélvica y agrava el dolor lacerante)'],
    nursingCare: ['NO ADMINISTRAR GRANDES VOLÚMENES DE SUERO EV A CHORRO durante la crisis aguda de dolor cólico (empeora la hidronefrosis y el sufrimiento del paciente)', 'Canalización de vía venosa periférica y administración inmediata del AINE prescrito', 'Monitoreo de temperatura axilar cada 2 horas: el hallazgo de fiebre > 38 °C es una EMERGENCIA UROLÓGICA QUIRÚRGICA para derivación inmediata', 'Filtrar la orina emitida en cada micción con colador de gasa para rescatar el lito expulsado']
  },
  {
    number: 273,
    id: 'diag-273',
    title: 'Insuficiencia renal aguda',
    cie10: 'N17.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Lesión Renal Aguda (LRA / AKI): deterioro brusco y potencialmente reversible de la función renal acaecido en horas o días, caracterizado por la acumulación de productos nitrogenados (urea y creatinina) y la alteración de la homeostasis hidroelectrolítica y del equilibrio ácido-base.',
    symptoms: ['Oliguria (diuresis < 400-500 mL/24h o < 0.5 mL/kg/h) o anuria (< 100 mL/24h) en el 50% de casos (puede ser también no oligúrica)', 'Edemas periféricos de rápida aparición y congestión pulmonar', 'Astenia profunda, náuseas, vómitos, hipo pertinaz y anorexia', 'Confusión, somnolencia, asterixis o coma en uremia severa'],
    redFlags: ['Hiperpotasemia severa (> 6.5 mEq/L) con cambios electrocardiográficos (paro cardíaco inminente)', 'Edema agudo de pulmón por sobrecarga hídrica refractaria', 'Acidosis metabólica severa refractaria (pH < 7.15)'],
    criteria: 'Criterios KDIGO (basta uno de los siguientes): 1. Aumento de creatinina sérica ≥ 0.3 mg/dL en 48 horas; o 2. Aumento de creatinina sérica ≥ 1.5 veces el valor basal dentro de los 7 días previos; o 3. Volumen urinario < 0.5 mL/kg/hora durante al menos 6 horas consecutivas.',
    labTests: ['Creatinina sérica y urea/BUN seriadas', 'Electrolitos séricos (potasio sérico urgente)', 'Gasometría arterial (acidosis metabólica con anión gap aumentado)', 'Excreción Fraccional de Sodio (EFNa): EFNa < 1% orienta a causa prerrenal; EFNa > 2% orienta a daño parenquimatoso intrínseco (NTA)', 'Sedimento urinario'],
    imaging: ['Ecografía renal y de vías urinarias URGENTE (descarte indispensable de causa postrenal obstructiva con hidronefrosis; riñones de tamaño normal o aumentados con buena diferenciación corticomedular descartan cronicidad)'],
    differential: ['Causa Prerrenal (deshidratación, hemorragia, sepsis)', 'Causa Intrínseca / Parenquimatosa (NTA tóxica o isquémica, glomerulonefritis)', 'Causa Postrenal / Obstructiva (litiasis bilateral, hipertrofia prostática, tumores)'],
    firstLine: [
      { drug: 'Tratamiento etiológico guiado por la causa: Expansión cautelosa con Cristaloides (NaCl 0.9%) en AKI Prerrenal', dose: 'Bolos de 500 a 1000 mL EV guiados por respuesta hemodinámica y parámetros de fluidorreactividad', route: 'EV', freq: 'Según respuesta', notes: 'Restaura la perfusión renal en hipovolemia; suspender ante signos de congestión' },
      { drug: 'Suspensión INMEDIATA de todos los fármacos nefrotóxicos (AINEs, aminoglucósidos, IECA, ARA-II, contrastes yodados)', dose: 'Retirada total', route: 'Farmacológica', freq: 'Inmediata', notes: 'Medida imperativa para evitar mayor daño tubular' }
    ],
    alternatives: [
      { drug: 'Tratamiento de emergencia de la hiperpotasemia grave (K > 6.5 o con cambios EKG)', dose: 'Gluconato de Calcio 10% 1 ampolla EV en 5 min (estabilizador de membrana) + Insulina cristalina 10 UI en 100 mL de Dextrosa 33% EV en 30 min + Nebulización con Salbutamol', route: 'EV / Inhalada', freq: 'Emergencia', notes: 'Medidas puente de rescate rápido para prevenir arritmias ventriculares' },
      { drug: 'Terapia de Reemplazo Renal de Urgencia (Hemodiálisis de urgencia o TRRC)', dose: 'Sesión de diálisis de emergencia', route: 'Hemodiálisis', freq: 'Urgente', notes: 'Indicaciones mnemotécnicas "AEIOU": Acidosis severa refractaria, Electrolitos (hiperpotasemia > 6.5), Intoxicación dializable, Overload (edema pulmonar refractario a diuréticos), Uremia sintomática (pericarditis/encefalopatía)' }
    ],
    nonPharm: ['Cateterismo vesical transitorio con sonda Foley para monitorización y descarte de retención urinaria'],
    nursingCare: ['CONTROL HORARIO ESTRICTO DE DIURESIS: Medir y registrar la diuresis cada hora con sistema cerrado y bolsa graduada (cálculo de mL/kg/hora)', 'Balance hídrico acumulado estricto cada 6 y 12 horas', 'Monitoreo electrocardiográfico continuo y control urgente de potasio ante ondas T picudas simétricas', 'Ajuste posológico de todos los fármacos administrados según la función renal estimada']
  },
  {
    number: 274,
    id: 'diag-274',
    title: 'ERC estadio 1 y 2',
    cie10: 'N18.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Enfermedad Renal Crónica incipiente caracterizada por la presencia de daño renal estructural o funcional durante más de 3 meses, evidenciado por albuminuria patológica, alteraciones del sedimento o anomalías anatómicas, con tasa de filtración glomerular estimada (eGFR) preservada: Estadio 1 (eGFR ≥ 90 mL/min/1.73 m2) o Estadio 2 (eGFR 60-89 mL/min/1.73 m2).',
    symptoms: ['Completamente asintomática', 'Detectada exclusivamente por tamizaje preventivo en pacientes con hipertensión arterial, diabetes mellitus o antecedentes familiares', 'Ocasionalmente nicturia leve o elevación de la presión arterial'],
    redFlags: ['Progresión oculta y acelerada por mal control glucémico o tensional no detectado'],
    criteria: 'Daño renal persistente > 3 meses manifestado por Cociente Albúmina/Creatinina en orina (RAC) ≥ 30 mg/g (microalbuminuria o macroalbuminuria) con eGFR ≥ 60 mL/min/1.73 m2.',
    labTests: ['Cociente Albúmina/Creatinina en muestra matutina aislada de orina (RAC)', 'Creatinina sérica y cálculo de eGFR mediante fórmula CKD-EPI', 'Glucemia en ayunas, HbA1c y perfil lipídico completo'],
    imaging: ['Ecografía renal (riñones de tamaño normal con parénquima conservado)'],
    differential: ['Proteinuria funcional transitoria por fiebre o ejercicio intenso', 'Infección urinaria activa'],
    firstLine: [
      { drug: 'IECA o ARA-II a dosis plenas tituladas (Enalapril o Losartán)', dose: 'Losartán 50 a 100 mg/día VO o Enalapril 10 a 20 mg/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Disminuyen la presión intraglomerular por vasodilatación de la arteriola eferente, reduciendo la albuminuria y frenando la progresión' },
      { drug: 'Inhibidores de SGLT2 (Dapagliflozina o Empagliflozina) - Pilar de Nefroprotección moderna', dose: 'Dapagliflozina 10 mg/día VO en dosis única', route: 'VO', freq: 'c/24h', notes: 'Evidencia rotunda en estudios DAPA-CKD y EMPA-KIDNEY de enlentecimiento del deterioro renal independiente de diabetes' }
    ],
    alternatives: [
      { drug: 'Finerenona (antagonista mineralocorticoide no esteroideo)', dose: '10 a 20 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'En pacientes con diabetes tipo 2 y albuminuria persistente a pesar de IECA/ARA-II' }
    ],
    nonPharm: ['Control glucémico estricto (HbA1c < 6.5-7.0%) y de presión arterial (meta < 130/80 mmHg)', 'Restricción moderada de sodio (< 2 g/día) y abandono del tabaco'],
    nursingCare: ['Tamizaje periódico anual de microalbuminuria en todo paciente con DM2 o hipertensión', 'Educación para la salud sobre la no automedicación con analgésicos AINEs (ibuprofeno, naproxeno, diclofenaco) que dañan el riñón', 'Fomento de la adherencia terapéutica y control metabólico']
  },
  {
    number: 275,
    id: 'diag-275',
    title: 'ERC estadio 3 y 4',
    cie10: 'N18.4',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Enfermedad Renal Crónica moderada a severamente avanzada: Estadio 3 (eGFR 30-59 mL/min/1.73 m2, subdividido en 3a de 45-59 y 3b de 30-44) y Estadio 4 (eGFR 15-29 mL/min/1.73 m2), con aparición de las complicaciones sistémicas del síndrome urémico crónico.',
    symptoms: ['Astenia, fatiga fácil y debilidad generalizada por anemia normocítica', 'Nicturia marcada y poliuria osmótica', 'Edema maleolar progresivo e hipertensión arterial refractaria', 'Prurito cutáneo, piel seca terrosa y calambres musculares nocturnos', 'Anorexia, náuseas matutinas y disgeusia (sabor metálico en la boca)'],
    redFlags: ['Hiperpotasemia severa, acidosis metabólica descompensada y sobrecarga de volumen con ortopnea'],
    criteria: 'eGFR entre 15 y 59 mL/min/1.73 m2 persistente por más de 3 meses.',
    labTests: ['Hemograma completo (anemia por deficiencia de eritropoyetina endógena)', 'Metabolismo óseo-mineral: Calcio, Fósforo (hiperfosfatemia), PTH intacta (hiperparatiroidismo secundario) y Vitamina D', 'Bicarbonato sérico en gasometría venosa (acidosis metabólica si < 22 mEq/L)', 'Electrolitos séricos (potasio) y albuminuria'],
    imaging: ['Ecografía renal (riñones de tamaño disminuido < 9-10 cm, aumento de ecogenicidad cortical y pérdida de la diferenciación corticomedular)'],
    differential: ['Lesión renal aguda sobreimpuesta a enfermedad renal crónica previa'],
    firstLine: [
      { drug: 'Agentes estimulantes de la eritropoyesis (Eritropoyetina humana alfa o Darbepoetina) + Suplementación con Hierro EV', dose: 'EPO 50 a 100 UI/kg SC 1 a 3 veces por semana para meta de Hemoglobina entre 10.0 y 11.5 g/dL (NUNCA > 12-13 g/dL por riesgo de trombosis y ACV)', route: 'SC', freq: 'Semanal', notes: 'Asegurar ferritina > 200 ng/mL y saturación de transferrina > 20% antes de iniciar EPO' },
      { drug: 'Quelantes de fósforo intestinales (Carbonato de Calcio o Sevelamero)', dose: 'Carbonato de calcio 500 a 1000 mg con cada comida principal, o Sevelamero 800 a 1600 mg con comidas', route: 'VO con comidas', freq: 'c/8h con alimentos', notes: 'Fijan el fósforo de los alimentos en el tubo digestivo y previenen el hiperparatiroidismo secundario' },
      { drug: 'Bicarbonato de Sodio oral en acidosis metabólica', dose: '500 a 1000 mg cada 8-12 horas VO para mantener bicarbonato sérico ≥ 22 mEq/L', route: 'VO', freq: 'c/8-12h', notes: 'Enlentece la progresión de la enfermedad renal y previene la pérdida de masa muscular' }
    ],
    alternatives: [
      { drug: 'Preparación y creación oportuna de Fístula Arteriovenosa (FAV) autóloga', dose: 'Cirugía vascular de acceso para diálisis en Estadio 4', route: 'Quirúrgica vascular', freq: 'Programada', notes: 'Debe construirse al menos 6 meses antes del inicio previsto de la hemodiálisis' }
    ],
    nonPharm: ['Dieta hipoproteica controlada (0.6 a 0.8 g de proteína/kg/día)', 'Restricción de alimentos ricos en fósforo (lácteos procesados, gaseosas oscuras) y potasio (plátanos, cítricos, frutos secos)'],
    nursingCare: ['PROTECCIÓN DEL BRAZO PARA LA FUTURA FÍSTULA: En pacientes con Estadio 4, preservar estrictamente el brazo no dominante (NUNCA canalizar vías venosas periféricas, no realizar extracciones de sangre ni medir presión arterial en esa extremidad)', 'Monitoreo de presión arterial, peso seco y signos de sobrecarga hídrica', 'Educación sanitaria nutricional sobre alimentos con alto contenido de potasio y fósforo', 'Capacitación al paciente y familia sobre las modalidades de terapia de reemplazo renal (Hemodiálisis vs Diálisis Peritoneal vs Trasplante Renal)']
  },
  {
    number: 276,
    id: 'diag-276',
    title: 'ERC estadio 5 (terminal)',
    cie10: 'N18.5',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Enfermedad Renal Terminal (eGFR < 15 mL/min/1.73 m2 o necesidad de Terapia de Reemplazo Renal continua): pérdida irreversible y casi total de la función de filtración de ambos riñones, incompatible con la vida a medio plazo sin diálisis o trasplante renal.',
    symptoms: ['Síndrome urémico florido: astenia extrema, anorexia total, náuseas, vómitos fétidos y pérdida severa de peso (sarcopenia)', 'Escarcha urémica (depósito blanquecino de cristales de urea en la piel tras la evaporación del sudor) y fetor urémico', 'Prurito incoercible con excoriaciones por rascado', 'Sobrecarga de volumen con anasarca, disnea paroxística y ortopnea', 'Encefalopatía urémica: inversión del sueño, asterixis, mioclonías, confusión y coma', 'Pericarditis urémica con frote pericárdico'],
    redFlags: ['Frote pericárdico urémico (indicación inmediata de diálisis por riesgo de taponamiento hemorrágico)', 'Encefalopatía urémica convulsiva', 'Hiperpotasemia refractaria letal'],
    criteria: 'eGFR < 15 mL/min/1.73 m2 persistentemente.',
    labTests: ['Urea sérica > 150-200 mg/dL y Creatinina sérica > 8-12 mg/dL', 'Electrolitos séricos (hiperpotasemia grave, hipocalcemia, hiperfosfatemia)', 'Gases arteriales (acidosis metabólica severa no compensada)'],
    imaging: ['Ecografía renal bilateral (riñones atróficos pequeños < 8 cm con cortical adelgazada hiperecogénica)'],
    differential: ['Insuficiencia renal aguda rápidamente progresiva'],
    firstLine: [
      { drug: 'Terapia de Reemplazo Renal (TRR): Hemodiálisis periódica convencional', dose: '3 sesiones por semana de 3.5 a 4 horas por sesión a través de fístula arteriovenosa o catéter tunelizado', route: 'Extracorpórea', freq: '3 veces por semana', notes: 'Sustituye la función de filtración y depuración renal eliminando toxinas y volumen' },
      { drug: 'Diálisis Peritoneal Continua Ambulatoria (DPCA) o Automatizada (DPA)', dose: 'Recambios manuales peritoneales 4 veces al día (o cicladora nocturna) mediante catéter de Tenckhoff', route: 'Intraperitoneal', freq: 'Diario continuo', notes: 'Modalidad domiciliaria de elección que preserva mejor la función renal residual inicial' },
      { drug: 'Trasplante Renal con donante vivo o cadavérico (Tratamiento óptimo definitivo)', dose: 'Cirugía de trasplante de injerto renal', route: 'Quirúrgica', freq: 'Única', notes: 'Ofrece la mayor supervivencia y calidad de vida a largo plazo' }
    ],
    alternatives: [
      { drug: 'Tratamiento médico conservador paliativo no dialítico', dose: 'Manejo sintomático compasivo', route: 'Multimodal', freq: 'Continuo', notes: 'En pacientes de edad muy avanzada con demencia severa o comorbilidades terminales que eligen no dializarse' }
    ],
    nonPharm: ['Control estricto de la ganancia de peso interdialítica (no aumentar más de 1.5 a 2.0 kg entre sesiones)'],
    nursingCare: ['CUIDADOS DE LA FÍSTULA ARTERIOVENOSA (FAV): Auscultar el soplo (thrill) y palpar el frémito diario en la anastomosis; NUNCA tomar presión arterial, extraer sangre ni aplicar vendajes circulares compresivos en el brazo de la fístula', 'Vigilancia de signos de infección o disfunción del catéter venoso central tunelizado (Catéter de Permcath)', 'En diálisis peritoneal: técnica rigurosamente aséptica con mascarilla en los recambios para prevenir peritonitis bacteriana (líquido efluente turbio es alarma de peritonitis)', 'Vigilancia de signos de síndrome de desequilibrio dialítico tras las primeras sesiones de hemodiálisis']
  },
  {
    number: 277,
    id: 'diag-277',
    title: 'Glomerulonefritis postestrept.',
    cie10: 'N00.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Glomerulonefritis aguda mediada por inmunocomplejos desencadenada por una infección previa por cepas nefritogénicas de Streptococcus pyogenes (faringitis 1-2 semanas antes o piodermitis/impétigo 3-4 semanas antes), que afecta predominantemente a niños de 5 a 12 años.',
    symptoms: ['Tríada clásica del Síndrome Nefrítico Agudo:', '1. Hematuria macroscópica característica ("orina color té, café o bebida cola")', '2. Edema facial periorbitario matutino blando ("ojos hinchados al despertar") que progresa a miembros inferiores', '3. Hipertensión arterial aguda leve a moderada', 'Oliguria moderada transitoria y astenia'],
    redFlags: ['Encefalopatía hipertensiva con convulsiones', 'Edema agudo de pulmón por sobrecarga hídrica masiva'],
    criteria: 'Síndrome nefrítico agudo + evidencia de infección estreptocócica previa (ASTO elevado o anti-DNasa B) + hipocomplementemia transitoria (consumo del factor C3 del complemento que se normaliza en 6-8 semanas).',
    labTests: ['Examen de orina (hematuria glomerular con hematíes dismórficos > 80% y cilindros hemáticos patognomónicos, proteinuria en rango no nefrótico < 3.0 g/día)', 'Complemento sérico: C3 marcadamente DISMINUIDO con C4 normal (activación de vía alternativa)', 'Anticuerpos antiestreptolisina O (ASTO elevado tras faringitis) y Anti-DNasa B (elevado tras impétigo)'],
    imaging: ['Ecografía renal (riñones de tamaño normal o ligeramente aumentados simétricos)', 'Radiografía de tórax si hay sospecha de congestión pulmonar'],
    differential: ['Nefropatía por IgA (Enfermedad de Berger: hematuria sincrónica con la infección sin periodo de latencia y con complemento C3 normal)', 'Nefritis lúpica', 'Glomerulonefritis membranoproliferativa'],
    firstLine: [
      { drug: 'Tratamiento de soporte de la sobrecarga hidrosalina: Restricción estricta de sodio y agua + Diurético de asa (Furosemida)', dose: 'Furosemida 1 a 2 mg/kg/dosis VO o EV cada 12 horas hasta resolver la hipertensión y los edemas', route: 'VO / EV', freq: 'c/12h', notes: 'Pilar angular del tratamiento; revierte rápidamente la sobrecarga de volumen y la hipertensión' },
      { drug: 'Penicilina G Benzatínica o Amoxicilina oral', dose: 'Penicilina G Benzatínica 600 000 a 1 200 000 UI IM monodosis (o Amoxicilina 50 mg/kg/día por 10 días)', route: 'IM / VO', freq: 'Reglado', notes: 'Para erradicar cualquier cepa estreptocócica residual y cortar la cadena de transmisión epidemiológica' }
    ],
    alternatives: [
      { drug: 'Calcioantagonistas orales (Amlodipino o Nifedipino retard)', dose: 'Amlodipino 0.1 a 0.2 mg/kg/día VO', route: 'VO', freq: 'c/24h', notes: 'Si la hipertensión persiste a pesar de la descongestión con diuréticos' }
    ],
    nonPharm: ['Reposo relativo en cama mientras persista la hipertensión y hematuria macroscópica', 'Restricción rigurosa de sal en la dieta'],
    nursingCare: ['Control diario de peso matutino en ayunas (el peso es el mejor indicador de balance hídrico en niños)', 'Monitoreo de presión arterial cada 4 horas durante la fase aguda', 'Observación y registro de las características macroscópicas de la orina (color té/coca cola)', 'Tranquilizar a los padres explicándoles el curso típicamente autolimitado y benigno (> 95% de curación completa sin secuelas)']
  },
  {
    number: 278,
    id: 'diag-278',
    title: 'Glomerulonefritis membranosa',
    cie10: 'N04.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Nefropatía membranosa primaria o secundaria: glomerulopatía autoinmune caracterizada por el engrosamiento difuso de la membrana basal glomerular debido al depósito subepitelial de inmunocomplejos (dirigidos en el 70-80% de formas primarias contra el receptor de fosfolipasa A2: anti-PLA2R), constituyendo una causa principal de síndrome nefrótico en adultos.',
    symptoms: ['Síndrome nefrótico florido: edemas periféricos blandos ascendentes que inician en tobillos y progresan a anasarca (ascitis, derrame pleural y periorbitario)', 'Orina espumosa por proteinuria masiva', 'Fatiga, anorexia y aumento brusco de peso por retención hídrica', 'Frecuente hipertensión arterial e hiperlipidemia asociada'],
    redFlags: ['Trombosis venosa profunda y Trombosis de la vena renal (la nefropatía membranosa es la glomerulopatía con mayor riesgo protrombótico por pérdida urinaria de antitrombina III)'],
    criteria: 'Proteinuria en rango nefrótico + presencia de anticuerpos séricos anti-PLA2R positivos en sangre y/o Biopsia renal que demuestra depósitos subepiteliales con engrosamiento de la membrana basal y "spikes" en tinción de plata.',
    labTests: ['Anticuerpos anti-PLA2R séricos (sensibilidad 80% y especificidad 99% para forma primaria)', 'Proteinuria en orina de 24 horas (> 3.5 g/día) y cociente proteína/creatinina urinario', 'Albúmina sérica (< 3.0 g/dL), perfil lipídico (hipercolesterolemia severa) y función renal', 'Descarte de causas secundarias: serología para hepatitis B y C, ANA/anti-DNA (lupus) y tamizaje neoplásico según edad'],
    imaging: ['Eco-Doppler renal (indispensable para descartar trombosis de vena renal ante dolor lumbar agudo o aumento brusco de proteinuria)'],
    differential: ['Glomeruloesclerosis focal y segmentaria', 'Nefropatía por cambios mínimos', 'Amiloidosis renal'],
    firstLine: [
      { drug: 'Tratamiento de soporte antiproteinúrico de inicio (durante los primeros 6 meses en riesgo bajo/intermedio): IECA/ARA-II + iSGLT2 + Estatinas', dose: 'Dosis máximas toleradas de Losartán o Enalapril + Dapagliflozina 10 mg/día + Atorvastatina 40 mg/día', route: 'VO', freq: 'c/24h', notes: 'Hasta un tercio de los pacientes presenta remisión espontánea' },
      { drug: 'Inmunosupresión en riesgo alto (proteinuria > 4 g/día persistente o anti-PLA2R muy elevados): Rituximab', dose: '1 g EV los días 1 y 15 (o 375 mg/m2 semanal por 4 semanas)', route: 'EV', freq: 'Ciclo', notes: 'Fármaco de elección moderno de primera línea según guías KDIGO; depleta linfocitos B productores de anti-PLA2R con menor toxicidad' }
    ],
    alternatives: [
      { drug: 'Régimen de Ponticelli modificado (Ciclos de Corticoides alternados con Ciclofosfamida)', dose: 'Metilprednisolona/Prednisona alternada mensualmente con Ciclofosfamida oral por 6 meses', route: 'EV / VO', freq: 'Protocolo cíclico', notes: 'Eficaz en casos de muy alto riesgo o refractarios a rituximab' },
      { drug: 'Anticoagulación profiláctica con Enoxaparina o Warfarina', dose: 'Si albúmina sérica < 2.0-2.5 g/dL con factores de riesgo trombótico adicionales', route: 'SC / VO', freq: 'Reglado', notes: 'Previene embolia pulmonar y trombosis de vena renal' }
    ],
    nonPharm: ['Restricción moderada de sodio (< 2 g/día) y dieta normoproteica (0.8 g/kg/día; evitar dietas hiperproteicas que dañan el glomérulo)'],
    nursingCare: ['Monitoreo diario de peso y perímetro abdominal para evaluar la magnitud del edema nefrótico', 'Vigilancia de signos de trombosis venosa profunda (asimetría o dolor en pantorrilla) y dolor lumbar súbito con hematuria (trombosis de vena renal)', 'Cuidado de la piel edematosa para prevenir roturas cutáneas o celulitis por fragilidad tisular', 'Administración de infusión de rituximab con premedicación y vigilancia de reacciones infusionales']
  },
  {
    number: 279,
    id: 'diag-279',
    title: 'Síndrome nefrótico',
    cie10: 'N04.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno clínico caracterizado por el aumento masivo de la permeabilidad de la barrera de filtración glomerular a las proteínas plasmáticas, definido por la tétrada clásica de: proteinuria masiva en rango nefrótico, hipoalbuminemia severa, edema generalizado y dislipidemia.',
    symptoms: ['Edema blando, bilateral, simétrico y depresible con fóvea (signo de Godet +++) que inicia en zonas declives (periorbitario matutino, tobillos) y progresa a anasarca con ascitis y derrame pleural', 'Orina marcadamente espumosa (espuma densa como clara de huevo batida que persiste al tirar de la cadena)', 'Astenia, anorexia, dolor abdominal por edema de la pared intestinal y ganancia rápida de peso corporal'],
    redFlags: ['Tromboembolismo venoso o arterial (TVP, TEP, trombosis de vena renal)', 'Infecciones bacterianas graves por encapsulados (peritonitis bacteriana espontánea neumocócica en niños, celulitis) por pérdida urinaria de inmunoglobulinas'],
    criteria: 'Tétrada diagnóstica: 1. Proteinuria en rango nefrótico: > 3.5 g/24 horas (o > 40 mg/m2/h en niños o cociente proteína/creatinina urinario > 2.0-3.0 mg/mg); 2. Hipoalbuminemia: Albúmina sérica < 3.0 g/dL; 3. Edema periférico / anasarca; 4. Dislipidemia (hipercolesterolemia e hipertrigliceridemia).',
    labTests: ['Proteinuria en orina de 24 horas y cociente proteinuria/creatininuria (IPC)', 'Albúmina sérica total y proteínas totales', 'Perfil lipídico completo (colesterol total muy elevado > 300-400 mg/dL con cuerpos ovales grasos en orina)', 'Hemograma, función renal y serología autoinmune/infecciosa (ANA, anti-DNA, anti-PLA2R, VHB, VHC, VIH)'],
    imaging: ['Ecografía renal y de vías urinarias', 'Radiografía de tórax para valorar derrame pleural'],
    differential: ['Síndrome nefrítico agudo', 'Insuficiencia cardíaca congestiva descompensada', 'Cirrosis hepática descompensada con anasarca', 'Enteropatía pierde-proteínas'],
    firstLine: [
      { drug: 'Manejo del edema: Diuréticos de asa (Furosemida) +/- Diuréticos tiazídicos o espironolactona', dose: 'Furosemida 40 a 80 mg/día VO o EV; si albúmina es < 1.5-2.0 g/dL, coadministrar con Albúmina humana al 20% para asegurar el transporte intravascular', route: 'VO / EV', freq: 'c/12-24h', notes: 'La hipoalbuminemia reduce la entrega tubular de furosemida; la infusión combinada de albúmina + furosemida mejora la natriuresis' },
      { drug: 'En niños con Enfermedad de Cambios Mínimos (causa más común en pediatría): Corticoterapia oral de primera línea (Prednisona)', dose: '60 mg/m2/día (o 2 mg/kg/día, máx 60 mg) VO diario por 4 a 6 semanas, seguido de 40 mg/m2 en días alternos por 4 a 6 semanas', route: 'VO', freq: 'Reglado', notes: 'Tasa de remisión completa superior al 85-90% en niños' }
    ],
    alternatives: [
      { drug: 'Inhibidores de la Calcineurina (Ciclosporina o Tacrolimus) o Rituximab', dose: 'Según protocolo nefrológico', route: 'VO / EV', freq: 'Reglado', notes: 'En casos corticorresistentes, corticodependientes o en adultos con nefropatía membranosa o GEFS' }
    ],
    nonPharm: ['Restricción estricta de sodio (< 1.5 a 2.0 g/día) para evitar perpetuar el edema', 'Dieta normoproteica (0.8-1.0 g/kg/día)'],
    nursingCare: ['MEDICIÓN DIARIA DE PESO Y BALANCE HÍDRICO RIGUROSO: El peso diario en la misma balanza al levantarse es el parámetro más sensible de respuesta a diuréticos', 'Vigilancia estrecha de la piel: cambios posturales frecuentes, evitar inyecciones intramusculares en zonas con edema masivo (absorción errática y riesgo de abscesos)', 'Monitoreo de signos de peritonitis o celulitis: cualquier fiebre o dolor abdominal en un niño nefrótico debe considerarse peritonitis neumocócica hasta demostrar lo contrario', 'Educación para la salud sobre la correcta adherencia a corticoides y prevención de infecciones']
  },
  {
    number: 280,
    id: 'diag-280',
    title: 'Síndrome nefrítico agudo',
    cie10: 'N00.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Complejo sindrómico originado por inflamación aguda y proliferación celular en los glomérulos renales, caracterizado por la tríada clásica de hematuria glomerular activa, hipertensión arterial y deterioro de la función renal con retención hidrosalina y oliguria.',
    symptoms: ['Hematuria macroscópica de origen glomerular: orina de aspecto oscuro, marrón o color refresco de cola, indolora y sin coágulos', 'Edema agudo leve a moderado localizado principalmente en cara (periorbitario) y párpados al despertar, y en menor medida en miembros inferiores', 'Hipertensión arterial aguda volumen-dependiente', 'Oliguria transitoria (disminución del volumen miccional diario)', 'Cefalea por picos hipertensivos y astenia'],
    redFlags: ['Glomerulonefritis rápidamente progresiva (GNRP): deterioro acelerado de la función renal con duplicación de creatinina en días o semanas (requiere biopsia renal urgente)', 'Edema agudo de pulmón hipertensivo'],
    criteria: 'Hematuria de origen glomerular (hematíes dismórficos y cilindros hemáticos) + Hipertensión arterial + Disminución del filtrado glomerular con oliguria y proteinuria subnefrótica (< 3.0 g/día).',
    labTests: ['Sedimento urinario patognomónico: CILINDROS HEMÁTICOS y acantocitos/hematíes dismórficos > 80%', 'Creatinina sérica y urea (elevadas)', 'Proteinuria cuantitativa (habitualmente entre 0.5 y 2.5 g/día)', 'Complemento sérico (C3 y C4: C3 bajo orienta a postestreptocócica, endocarditis, lupus o crioglobulinemia; C3 normal orienta a nefropatía por IgA o vasculitis ANCA)', 'ANCA, anti-MBG y ANA'],
    imaging: ['Ecografía renal urgente (riñones de tamaño normal o discretamente tumefactos)'],
    differential: ['Síndrome nefrótico', 'Hematuria urológica extra-glomerular (litiasis, tumores vesicales: hematuria roja viva con coágulos)', 'Necrosis tubular aguda'],
    firstLine: [
      { drug: 'Control de la sobrecarga de volumen y la hipertensión: Diuréticos de asa (Furosemida)', dose: '20 a 40 mg VO o EV cada 12 horas en adultos (1-2 mg/kg en niños) + restricción de sodio (< 2 g/día) y líquidos', route: 'VO / EV', freq: 'c/12h', notes: 'Alivio rápido de la hipertensión secundaria a sobreexpansión plasmática' }
    ],
    alternatives: [
      { drug: 'Pulsos de Metilprednisolona EV + Ciclofosfamida o Plasmaféresis', dose: 'Metilprednisolona 1000 mg/día EV por 3 días', route: 'EV', freq: 'Urgente', notes: 'De elección obligatoria ante sospecha de Glomerulonefritis Rápidamente Progresiva con semilunas o vasculitis' }
    ],
    nonPharm: ['Reposo relativo en cama en la fase aguda', 'Restricción hídrica calculada: pérdidas insensibles (400-500 mL) + diuresis del día previo'],
    nursingCare: ['Monitoreo continuo de presión arterial cada 2 a 4 horas', 'Control riguroso de balance de ingresos y egresos de líquidos y pesaje matutino diario', 'Identificación de hematuria glomerular al examen macroscópico (color pardo oscuro sin coágulos)', 'Vigilancia de signos de encefalopatía hipertensiva (somnolencia, vómitos en escopetazo, convulsiones)']
  },
  {
    number: 281,
    id: 'diag-281',
    title: 'Riñón poliquístico',
    cie10: 'Q61.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Poliquistosis Renal Autosómica Dominante (PQRAD): trastorno genético hereditario multisistémico causado por mutaciones en los genes PKD1 (85%, cromosoma 16) o PKD2 (15%, cromosoma 4), caracterizado por la formación y crecimiento progresivo de innumerables quistes renales bilaterales que destruyen el parénquima funcional.',
    symptoms: ['Aparición de síntomas habitualmente entre los 30 y 50 años de edad', 'Dolor sordo y persistente en flancos y región lumbar por agrandamiento masivo de los riñones', 'Masa abdominal palpable bilateral y blanda en ambos flancos (nefomegalia gigante palpable)', 'Hipertensión arterial precoz (precede al deterioro del filtrado glomerular)', 'Episodios de dolor agudo con hematuria macroscópica franca (por rotura intraquística)', 'Quistes hepáticos asociados (poliquistosis hepática en > 70% sin insuficiencia hepática)'],
    redFlags: ['ROTURA DE ANEURISMA CEREBRAL DEL POLÍGONO DE WILLIS (presente en 10-12% de pacientes con PQRAD, con hemorragia subaracnoidea catastrófica)', 'Infección de quiste renal refractaria'],
    criteria: 'Criterios ecográficos de Ravine unificados según edad en pacientes con antecedentes familiares de PQRAD (ej. edad 15-39 años: ≥ 3 quistes renales uni o bilaterales; edad 40-59 años: ≥ 2 quistes en cada riñón; ≥ 60 años: ≥ 4 quistes en cada riñón).',
    labTests: ['Creatinina sérica y eGFR seriada anual', 'Examen de orina (microhematuria y proteinuria leve)', 'Estudio genético de mutaciones PKD1/PKD2 en casos de diagnóstico dudoso o donantes'],
    imaging: ['Ecografía renal y hepática (método de screening de primera línea)', 'Resonancia Magnética o TAC renal (cálculo del Volumen Renal Total Ajustado por Altura - TKV: principal biomarcador pronóstico de progresión según clasificación de Mayo)', 'Angio-Resonancia cerebral de screening (descarte de aneurismas intracraneales asintomáticos)'],
    differential: ['Quistes renales simples múltiples del envejecimiento', 'Enfermedad quística renal adquirida en diálisis', 'Nefronoptisis'],
    firstLine: [
      { drug: 'Tolvaptán (antagonista selectivo del receptor V2 de vasopresina) - Fármaco modificador de enfermedad', dose: 'Dosis inicial 45 mg en la mañana + 15 mg en la tarde VO, escalando mensualmente hasta 90/30 mg/día', route: 'VO fraccionado', freq: 'c/24h en 2 tomas', notes: 'Frena la proliferación celular quística y la secreción de líquido, enlenteciendo el crecimiento renal y la caída del eGFR en progresión rápida; requiere monitoreo hepático mensual' },
      { drug: 'Control estricto de la hipertensión arterial con IECA o ARA-II (Estudio HALT-PKD)', dose: 'Meta de presión arterial estricta < 120/80 mmHg o < 110/75 mmHg en jóvenes', route: 'VO', freq: 'c/24h', notes: 'Reduce significativamente la hipertrofia ventricular izquierda y el crecimiento renal' }
    ],
    alternatives: [
      { drug: 'Antibioticoterapia liposoluble de penetración quística en quiste infectado: Ciprofloxacino o Cotrimoxazol', dose: 'Ciprofloxacino 500 mg cada 12 horas VO/EV por 4 a 6 semanas', route: 'VO / EV', freq: 'c/12h', notes: 'Los betalactámicos no penetran la pared de los quistes renales' }
    ],
    nonPharm: ['INGESTA HÍDRICA ABUNDANTE (beber 3 a 4 litros de agua diarios para suprimir completamente la vasopresina endógena)', 'Restricción moderada de sodio y cafeína'],
    nursingCare: ['CONSEJERÍA SOBRE TOLVAPTÁN: Advertir sobre la intensa poliuria osmótica (4 a 6 litros/día) y nicturia; instruir que debe tener acceso ilimitado y permanente a agua potable para evitar deshidratación', 'Monitoreo obligatorio de transaminasas hepáticas (TGO/TGP) y bilirrubinas MENSUAL durante los primeros 18 meses de uso de Tolvaptán (riesgo de hepatotoxicidad severa)', 'Consejería genética reproductiva para los hijos de pacientes con PQRAD (50% de probabilidad de herencia)', 'Educación para consultar de urgencia ante cualquier cefalea brusca explosiva']
  },
  {
    number: 282,
    id: 'diag-282',
    title: 'Necrosis tubular aguda',
    cie10: 'N17.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Causa intrínseca más frecuente de lesión renal aguda hospitalaria (> 85% de las AKI renales), caracterizada por la necrosis y descamación de las células del epitelio tubular renal hacia la luz de los túbulos, producida por isquemia renal prolongada (shock séptico, cardiogénico, hipovolémico) o por nefrotoxinas directas (aminoglucósidos, medios de contraste yodados, mioglobina por rabdomiólisis).',
    symptoms: ['Oliguria marcada (< 400 mL/día) persistente que NO responde a la administración de fluidos endovenosos (aunque hasta un 30-50% cursa como NTA no oligúrica)', 'Retención aguda de productos nitrogenados con elevación acelerada diaria de urea y creatinina', 'Síntomas de la enfermedad desencadenante de base (sepsis, politrauma, shock, postcirugía cardíaca mayor)'],
    redFlags: ['Sobrecarga hídrica refractaria, hiperpotasemia crítica y uremia'],
    criteria: 'Lesión renal aguda persistente tras reposición de volemia + Excreción Fraccional de Sodio (EFNa) > 2% + Sedimento urinario con cilindros granulosos pardos típicos.',
    labTests: ['Sedimento urinario PATOGNOMÓNICO: CILINDROS GRANULOSOS PARDOS GRUESOS ("cilindros en color barro") y células epiteliales tubulares descamadas', 'Índices de insuficiencia renal: EFNa > 2% (fracaso de la capacidad tubular de reabsorber sodio), Sodio urinario > 40 mEq/L y Osmolaridad urinaria < 350 mOsm/kg (orina isostenúrica)', 'Creatinina sérica y electrolitos diarios'],
    imaging: ['Ecografía renal (riñones de tamaño normal o aumentados, con corteza hiperecogénica y ausencia de ectasia pielocalicial)'],
    differential: ['Insuficiencia renal aguda prerrenal funcional (en la prerrenal el sedimento es limpio, EFNa < 1% y responde a volumen)', 'Nefritis intersticial aguda alérgica'],
    firstLine: [
      { drug: 'Soporte hemodinámico y de perfusión renal: Mantenimiento de Presión Arterial Media (PAM ≥ 65 mmHg) con Cristaloides y Vasopresores (Noradrenalina)', dose: 'Noradrenalina EV en infusión continua según metas de perfusión tisular', route: 'EV continua', freq: 'Titulado', notes: 'Optimiza la microcirculación medular renal' },
      { drug: 'Suspensión y proscripción absoluta de todos los fármacos nefrotóxicos', dose: 'Retirada inmediata', route: 'Variable', freq: 'Inmediata', notes: 'Permite la regeneración espontánea del epitelio tubular' }
    ],
    alternatives: [
      { drug: 'Terapia de Reemplazo Renal continua o intermitente (Hemodiálisis)', dose: 'Diálisis como soporte temporal', route: 'Extracorpórea', freq: 'Según indicación', notes: 'Soporte vital hasta que los túbulos se regeneren espontáneamente (promedio 1 a 3 semanas)' }
    ],
    nonPharm: ['Manejo restrictivo y prudente de líquidos en fase oligúrica para evitar sobrecarga y edema pulmonar'],
    nursingCare: ['VIGILANCIA DE LAS 3 FASES DE LA NTA: 1. Fase de instauración/isquemia; 2. Fase de mantenimiento/oliguria (vigilar hiperpotasemia y sobrecarga de volumen); 3. Fase de poliuria de recuperación (el riñón elimina 3 a 5 litros de orina al día pero no concentra: RIESGO SEVERO DE DESHIDRATACIÓN E HIPOPOTASEMIA)', 'En la fase de poliuria: reposición hidrosalina milímetro a milímetro según débito urinario', 'Control estricto de balance hidroelectrolítico cada 6 horas', 'Evitar administrar furosemida a dosis masivas para forzar diuresis en anuria (no acelera la recuperación)']
  },
  {
    number: 283,
    id: 'diag-283',
    title: 'Hiperplasia prostática benigna',
    cie10: 'N40.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Proliferación adenomatosa no maligna de las células epiteliales y estromales de la zona de transición de la glándula prostática en varones mayores de 50 años, que comprime mecánicamente la uretra prostática y produce Síntomas del Tracto Urinario Inferior (STUI).',
    symptoms: ['Síntomas de vaciado / obstructivos:', '- Disminución del calibre y fuerza del chorro miccional', '- Dificultad o titubeo para iniciar la micción (latencia prolongada)', '- Micción entrecortada o en regadera', '- Goteo postmiccional prolongado y sensación de vaciado incompleto', 'Síntomas de llenado / irritativos:', '- Nicturia marcada (despertar ≥ 2 veces por la noche a orinar)', '- Polaquiuria diurna y urgencia miccional'],
    redFlags: ['Retención Aguda de Orina (RAO) dolorosa con globo vesical palpable a tensión', 'Divertículos vesicales, litiasis vesical e hidronefrosis bilateral con falla renal postrenal'],
    criteria: 'Puntuación en el Cuestionario Internacional de Síntomas Prostáticos (IPSS > 7 puntos) + Tacto rectal con próstata aumentada de tamaño, lisa, elástica, firme y no dolorosa con surco medio conservado.',
    labTests: ['Antígeno Prostático Específico (PSA total sérico basal: normal < 4.0 ng/mL, para descarte de cáncer prostático)', 'Examen completo de orina (descarte de infección o microhematuria)', 'Creatinina sérica'],
    imaging: ['Ecografía vesicoprostática transabdominal o transrectal con medición de Residuo Postmiccional (RPM > 50-100 mL es patológico)', 'Flujometría urinaria libre (Qmax < 10-15 mL/s indica obstrucción)'],
    differential: ['Cáncer de próstata', 'Estenosis de uretra', 'Vejiga neurógena'],
    firstLine: [
      { drug: 'Bloqueadores alfa-1 adrenérgicos: Tamsulosina o Silodosina (Alivio sintomático rápido)', dose: 'Tamsulosina 0.4 mg/día VO después del desayuno (o Silodosina 8 mg/día VO)', route: 'VO con desayuno', freq: 'c/24h', notes: 'Relajan el músculo liso del cuello vesical y próstata; mejoran el flujo en 48-72h; advierte eyaculación retrógrada' },
      { drug: 'Inhibidores de la 5-alfa reductasa: Finasterida o Dutasterida (Reducción del volumen prostático)', dose: 'Finasterida 5 mg/día VO o Dutasterida 0.5 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Indicados si próstata > 30-40 g; reducen el tamaño glandular un 20-30% tras 6 meses; reducen el PSA a la mitad' },
      { drug: 'Terapia combinada en STUI moderados a severos con próstata agrandada', dose: 'Dutasterida 0.5 mg + Tamsulosina 0.4 mg en un solo comprimido diario', route: 'VO', freq: 'c/24h', notes: 'Estrategia más eficaz para prevenir la progresión y la retención urinaria aguda' }
    ],
    alternatives: [
      { drug: 'Resección Transuretral de Próstata (RTUP monopolar o bipolar) o Enucleación con Láser de Holmio (HoLEP)', dose: 'Procedimiento quirúrgico endoscópico de elección', route: 'Endourológica', freq: 'Única', notes: 'Gold standard quirúrgico cuando fracasa la terapia médica o hay complicaciones (RAO recurrente, litiasis, falla renal)' }
    ],
    nonPharm: ['Evitar la ingesta abundante de líquidos antes de acostarse', 'Evitar alcohol, café y fármacos descongestionantes con pseudoefedrina o antihistamínicos (precipitan retención aguda de orina)'],
    nursingCare: ['MANEJO DE RETENCIÓN AGUDA DE ORINA: Colocación aséptica urgente de sonda vesical Foley 16-18 Fr; si se evacúa > 1000 mL de orina, realizar drenaje fraccionado o pinzar periódicamente para evitar hemorragia ex-vacuo e hipotensión por descompresión brusca', 'Advertir al paciente que la tamsulosina produce con frecuencia eyaculación retrógrada (el semen va a la vejiga durante el orgasmo sin eyaculación externa), lo cual es benigno y reversible', 'Advertir sobre mareos ortostáticos en las primeras tomas', 'Recordar que el uso crónico de Finasterida reduce el valor del PSA sérico en un 50% (multiplicar por 2 para interpretar)']
  },
  {
    number: 284,
    id: 'diag-284',
    title: 'Prostatitis aguda',
    cie10: 'N41.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección bacteriana aguda del parénquima de la glándula prostática, originada por el ascenso retrógrado de uropatógenos (E. coli en > 70-80%, Klebsiella, Proteus o Pseudomonas) o por ITS (Chlamydia, Neisseria gonorrhoeae en menores de 35 años).',
    symptoms: ['Fiebre alta en agujas súbita (39-40 °C), escalofríos intensos y malestar generalizado', 'Dolor perineal profundo, sordo y punzante que empeora al sentarse o al defecar', 'Disuria severa, estranguria, polaquiuria y tenesmo vesical', 'Dificultad marcada para la micción que puede progresar a retención aguda de orina', 'Secreción uretral purulenta o hemospermia'],
    redFlags: ['Absceso prostático con fluctuación', 'Urosepsis bacteriana con bacteriemia y shock séptico'],
    criteria: 'Cuadro febril agudo con dolor perineal y síntomas miccionales + Tacto rectal que evidencia una próstata sumamente dolorosa, caliente, tumefacta y edematosa + Urocultivo positivo.',
    labTests: ['Examen completo de orina (piuria y bacteriuria marcada)', 'UROCULTIVO CON ANTIBIOGRAMA OBLIGATORIO', 'Hemograma con leucocitosis neutrofílica, PCR y VSG muy elevadas, y Hemocultivos si hay fiebre alta', 'PSA sérico (marcadamente elevado en fase aguda; NO solicitar de rutina en agudo)'],
    imaging: ['Ecografía transrectal o Resonancia pélvica si hay sospecha de absceso prostático ante fiebre persistente tras 48h de antibióticos'],
    differential: ['Cistitis aguda o pielonefritis', 'Absceso perirrectal', 'Epididimitis aguda'],
    firstLine: [
      { drug: 'Tratamiento antibiótico parenteral inicial hospitalario: Ceftriaxona + Ciprofloxacino (o Gentamicina)', dose: 'Ceftriaxona 2 g/día EV + Ciprofloxacino 400 mg cada 12 horas EV hasta la defervescencia clínica', route: 'EV', freq: 'c/12-24h', notes: 'Excelente penetración en el tejido prostático intensamente inflamado' },
      { drug: 'Transición oral continuada: Ciprofloxacino o Levofloxacino oral por tiempo prolongado', dose: 'Ciprofloxacino 500 mg cada 12 horas VO o Levofloxacino 500 mg/día VO durante 4 A 6 SEMANAS COMPLETAS', route: 'VO', freq: 'c/12-24h x 4-6 sem', notes: 'DURACIÓN PROLONGADA DE 4 A 6 SEMANAS OBLIGATORIA para prevenir la cronificación en prostatitis crónica bacteriana' }
    ],
    alternatives: [
      { drug: 'Cotrimoxazol (Sulfametoxazol / Trimetoprima)', dose: '800/160 mg cada 12 horas VO por 4 a 6 semanas', route: 'VO', freq: 'c/12h x 4-6 sem', notes: 'Alternativa según antibiograma si hay resistencia a quinolonas' }
    ],
    nonPharm: ['Reposo en cama, analgésicos antipiréticos y abundante ingesta hídrica oral'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA Y ABSOLUTA: NUNCA REALIZAR MASAJE PROSTÁTICO EN PROSTATITIS AGUDA (el masaje libera millones de bacterias a la circulación produciendo bacteriemia masiva fulminante y shock séptico)', 'Tacto rectal con extrema suavidad por el intenso dolor exquisito', 'MANEJO DE RETENCIÓN URINARIA: La cateterización uretral transuretral está contraindicada o debe ser sumamente cautelosa con sonda fina (12-14 Fr); si hay dificultad, avisar para cistostomía suprapúbica por punción', 'Verificar la adherencia estricta del tratamiento antibiótico durante las 4 a 6 semanas completas']
  },
  {
    number: 285,
    id: 'diag-285',
    title: 'Prostatitis crónica',
    cie10: 'N41.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno urológico crónico caracterizado por dolor pélvico o urogenital recurrente de al menos 3 meses de evolución, clasificado en Prostatitis Crónica Bacteriana (infecciones urinarias recurrentes causadas por el mismo germen persistente en próstata) o Síndrome de Dolor Pélvico Crónico (no bacteriano, con o sin leucocitos).',
    symptoms: ['Dolor o molestia sorda persistente en el periné, área suprapúbica, escroto, testículos, punta del pene o región lumbar baja', 'Disuria leve fluctuante, polaquiuria y tenesmo vesical', 'Dolor eyaculatorio característico (molestia durante o después de la eyaculación)', 'Disfunción eréctil y disminución de la líbido', 'Ausencia típica de fiebre sistémica'],
    redFlags: ['Impacto severo en la calidad de vida con depresión mayor y ansiedad refractaria'],
    criteria: 'Síntomas dolorosos urogenitales de ≥ 3 meses de duración + Prueba de Stamey-Meares (prueba de los 4 vasos con masaje prostático fraccionado) que evidencia bacterias o leucocitos en el líquido prostático exprimido (LPE).',
    labTests: ['Prueba de los 4 vasos de Stamey y Meares (muestras seriadas de orina VB1, VB2, LPE post-masaje y VB3 post-masaje prostático)', 'Urocultivo y frotis uretral para ITS'],
    imaging: ['Ecografía prostática transrectal (puede mostrar calcificaciones prostáticas o dilatación de plexos venosos periprostáticos)'],
    differential: ['Cistitis intersticial', 'Cáncer de próstata', 'Estenosis uretral', 'Proctalgia fugax'],
    firstLine: [
      { drug: 'Fluorquinolonas orales de alta penetración prostática (en forma bacteriana confirmada): Ciprofloxacino o Levofloxacino', dose: 'Ciprofloxacino 500 mg cada 12 horas VO o Levofloxacino 500 mg/día VO durante 4 a 6 semanas consecutivas', route: 'VO', freq: 'c/12-24h x 4-6 sem', notes: 'Las quinolonas difunden a través del epitelio prostático lipídico alcalino hacia los acinos' },
      { drug: 'Bloqueadores alfa-1 (Tamsulosina)', dose: '0.4 mg/día VO por al menos 3 a 6 meses', route: 'VO', freq: 'c/24h', notes: 'Relajan el cuello vesical y reducen el reflujo ductal intraprostático de orina' },
      { drug: 'AINEs o moduladores del dolor (Ibuprofeno o Pregabalina)', dose: 'Ibuprofeno 400 mg cada 8 horas VO por ciclos cortos o Pregabalina 75 mg/día VO nocturna', route: 'VO', freq: 'c/8-24h', notes: 'Control del componente neuropático del dolor pélvico crónico' }
    ],
    alternatives: [
      { drug: 'Fitoterapia con extracto de polen (Cernilton) o Quercetina', dose: '1 comprimido VO cada 12 horas', route: 'VO', freq: 'c/12h', notes: 'Eficacia demostrada en reducción de síntomas en el síndrome de dolor pélvico no bacteriano' }
    ],
    nonPharm: ['Baños de asiento con agua tibia de 15 a 20 minutos', 'Evitar paseos prolongados en bicicleta, motocicleta o equitación (presión directa sobre el periné)', 'Eyaculación regular para favorecer el vaciado de los conductos prostáticos'],
    nursingCare: ['Explicar detalladamente al paciente la técnica de la prueba de los 4 vasos de Stamey-Meares para una correcta recolección', 'Apoyo emocional continuo: validar el sufrimiento del paciente con dolor pélvico crónico para evitar frustración', 'Fomentar la continuidad del tratamiento farmacológico prolongado sin abandonar prematuramente']
  },
  {
    number: 286,
    id: 'diag-286',
    title: 'Cáncer de próstata',
    cie10: 'C61',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Neoplasia maligna originada predominantemente como adenocarcinoma en las células epiteliales de la zona periférica (70-75%) de la glándula prostática, siendo el cáncer más frecuente en varones peruanos mayores de 50 años.',
    symptoms: ['Completamente asintomático en estadios localizados tempranos', 'En estadios localmente avanzados: síntomas obstructivos urinarios (disuria, chorro débil, hematuria macroscópica, hemospermia)', 'En enfermedad metastásica: DOLORES ÓSEOS INTENSOS (columna lumbar, pelvis, costillas) por metástasis osteoblásticas, compresión medular aguda y anemia'],
    redFlags: ['Síndrome de compresión medular aguda metastásico (debilidad motora en piernas, incontinencia de esfínteres, urgencia neuroquirúrgica)', 'Fracturas patológicas'],
    criteria: 'Biopsia prostática transrectal o transperineal guiada por ecografía o fusión con resonancia magnética multiparamétrica que demuestre adenocarcinoma con gradación histopatológica de Gleason (Score 6 a 10) y Grupos Pronósticos ISUP (1 a 5).',
    labTests: ['Antígeno Prostático Específico (PSA total sérico > 4.0 ng/mL; sospecha alta si > 10 ng/mL o PSA libre / total < 15-20%)', 'Fosfatasa alcalina sérica (marcadamente elevada en metástasis óseas)', 'Hemograma y función renal'],
    imaging: ['RESONANCIA MAGNÉTICA MULTIPARAMÉTRICA (RMmp) DE PRÓSTATA (Score PI-RADS v2 de 1 a 5 para guiar biopsia de fusión)', 'Gammagrafía ósea con Tecnecio-99m (gold standard para estadificación de metástasis óseas osteoblásticas)', 'Tomografía abdominopélvica con contraste o PET-CT con Galio-68 PSMA'],
    differential: ['Hiperplasia prostática benigna', 'Prostatitis crónica con elevación de PSA', 'Infarto prostático'],
    firstLine: [
      { drug: 'En cáncer localizado de riesgo intermedio o alto: Prostatectomía Radical (abierta, laparoscópica o robótica Da Vinci) o Radioterapia Externa + Braquiterapia', dose: 'Tratamiento curativo de erradicación local', route: 'Quirúrgica / Radioterapia', freq: 'Definitivo', notes: 'Ofrece tasas de curación oncológica > 90-95% en enfermedad confinada' },
      { drug: 'Terapia de Deprivación Androgénica (TDA / Castración médica) en cáncer metastásico o avanzado', dose: 'Agonistas GnRH (Leuprolida 22.5 mg IM trimestral o Goserelina 10.8 mg SC trimestral) o Antagonistas GnRH (Degarelix 80 mg SC mensual)', route: 'IM / SC', freq: 'Trimestral / Mensual', notes: 'Suprime la testosterona a niveles de castración (< 50 ng/dL); los andrógenos nutren el crecimiento tumoral' }
    ],
    alternatives: [
      { drug: 'Antiandrógenos de nueva generación en enfermedad resistente a castración: Enzalutamida o Apalutamida o Acetato de Abiraterona', dose: 'Enzalutamida 160 mg/día VO o Abiraterona 1000 mg/día VO + Prednisona', route: 'VO', freq: 'c/24h', notes: 'Prolongan significativamente la supervivencia global' }
    ],
    nonPharm: ['Vigilancia activa (Active Surveillance) en pacientes seleccionados con cáncer de muy bajo riesgo (Gleason 3+3, PSA < 10, estadio T1c)'],
    nursingCare: ['CONSEJERÍA DE TAMIZAJE PREVENTIVO: Recomendar tamizaje con PSA y tacto rectal a partir de los 50 años (o a los 45 años si hay antecedentes familiares de 1° grado o ascendencia afrodescendiente)', 'En el postoperatorio de prostatectomía radical: cuidados del catéter vesical (mantener 2 a 3 semanas) y educación para ejercicios de fortalecimiento del suelo pélvico (Kegel) para rehabilitar la incontinencia urinaria postquirúrgica', 'Vigilancia de signos de compresión medular en pacientes con cáncer avanzado (pérdida de fuerza en miembros inferiores)']
  },
  {
    number: 287,
    id: 'diag-287',
    title: 'Disfunción eréctil',
    cie10: 'N52.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Incapacidad persistente o recurrente (de al menos 3 a 6 meses de duración) para lograr o mantener una erección peneana con la suficiente rigidez y firmeza para permitir una relación sexual satisfactoria, asociada con frecuencia a disfunción endotelial vascular sistémica.',
    symptoms: ['Dificultad para iniciar la erección peneana', 'Dificultad para mantener la rigidez durante el coito', 'Disminución en la consistencia y turgencia del pene', 'Disminución secundaria del deseo sexual (líbido) y frustración psicológica'],
    redFlags: ['LA DISFUNCIÓN ERÉCTIL VASCULAR ES UN "MARCADOR CENTINELA" DE ENFERMEDAD CORONARIA SILENTE (precede al infarto de miocardio en 3 a 5 años por ser las arterias cavernosas de menor calibre que las coronarias)'],
    criteria: 'Puntuación en el Cuestionario Internacional de Índice de Función Eréctil (IIEF-5 ≤ 21 puntos define disfunción eréctil).',
    labTests: ['Glucemia basal y HbA1c (descarte de neuropatía/vasculopatía diabética)', 'Perfil lipídico completo', 'Testosterona total matutina (entre las 08:00 y las 11:00 h; confirmar con segunda muestra si es < 300 ng/dL)', 'Prolactina, TSH y función renal'],
    imaging: ['Eco-Doppler peneano con inyección intracavernosa de prostaglandina E1 (alprostadil) para valorar insuficiencia arterial o fuga venosa'],
    differential: ['Disfunción eréctil psicógena pura (inicio brusco, erecciones matutinas o nocturnas conservadas espontáneas)', 'Hipogonadismo primario o secundario', 'Causa farmacológica (betabloqueantes, tiazidas, ISRS)'],
    firstLine: [
      { drug: 'Inhibidores de la Fosfodiesterasa tipo 5 (iPDE-5): Sildenafil o Tadalafil', dose: 'Sildenafil 50 a 100 mg VO a demanda 1 hora antes de la actividad sexual en ayunas; o Tadalafil 10 a 20 mg VO a demanda (o 5 mg/día VO continuo)', route: 'VO', freq: 'A demanda o Diario', notes: 'Potencian el óxido nítrico e inducen relajación del músculo liso cavernoso; REQUIEREN ESTIMULACIÓN SEXUAL para actuar' }
    ],
    alternatives: [
      { drug: 'Alprostadil intracavernoso o intrauretral', dose: '5 a 20 mcg inyectados directamente en el cuerpo cavernoso con aguja 30G antes del coito', route: 'Intracavernosa', freq: 'A demanda', notes: 'Segunda línea eficaz en pacientes que no responden o toleran iPDE-5' },
      { drug: 'Implante quirúrgico de Prótesis de Pene (maleable o inflable hidráulica de 3 componentes)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Tercera línea con satisfacción > 95% en disfunción refractaria' }
    ],
    nonPharm: ['Modificación intensiva de factores de riesgo cardiovascular: ejercicio físico aeróbico, pérdida de peso y cese tabáquico'],
    nursingCare: ['CONTRAINDICACIÓN MORTAL ABSOLUTA: NUNCA ADMINISTRAR INHIBIDORES DE LA PDE-5 (Sildenafil/Tadalafil) A PACIENTES QUE USAN NITRATOS (Nitroglicerina, Mononitrato de isosorbida) porque provocan vasodilatación sinérgica masiva, colapso hemodinámico refractario y paro cardíaco letal', 'Educación sanitaria desestigmatizando la consulta médica sobre salud sexual masculina', 'Explicar que el sildenafil debe tomarse con el estómago vacío (las grasas retrasan su absorción) y que requiere estimulación erótica previa']
  },
  {
    number: 288,
    id: 'diag-288',
    title: 'Infertilidad masculina',
    cie10: 'N46.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Incapacidad de una pareja para lograr un embarazo clínico tras al menos 12 meses de relaciones sexuales regulares sin protección anticonceptiva, en la que se identifican factores patológicos masculinos (alteraciones en la producción, calidad o transporte de los espermatozoides), responsable del 40-50% de los casos de infertilidad de la pareja.',
    symptoms: ['Completamente asintomática en la gran mayoría de varones', 'Frecuente hallazgo incidental al intentar concebir', 'Signos orientadores según etiología: masa escrotal "en bolsa de gusanos" (varicocele), ginecomastia y testículos pequeños (Klinefelter), criptorquidia previa o signos de hipogonadismo'],
    redFlags: ['Azoospermia obstructiva o no obstructiva que requiera biopsia testicular'],
    criteria: 'Alteración documentada en al menos dos Espermatogramas (seminogramas) separados por 4 a 12 semanas.',
    labTests: ['ESPERMATOGRAMA BÁSICO COMPLETO según criterios OMS (6ª edición): Volumen ≥ 1.4 mL, Concentración espermática ≥ 16 millones/mL, Motilidad total ≥ 42%, Motilidad progresiva ≥ 30%, Morfología estricta de Kruger ≥ 4% formas normales', 'FSH, LH, Testosterona total y Prolactina séricas', 'Cariotipo y microdeleciones del cromosoma Y (AZF) en azoospermias graves'],
    imaging: ['Eco-Doppler escrotal bilateral (diagnóstico y gradación de varicocele, volumen testicular)'],
    differential: ['Azoospermia obstructiva vs no obstructiva', 'Eyaculación retrógrada', 'Infertilidad de origen mixto de la pareja'],
    firstLine: [
      { drug: 'Tratamiento etiológico específico de la causa identificada: Corrección quirúrgica de Varicocele clínico (Varicocelectomía subinguinal microquirúrgica)', dose: 'Procedimiento microquirúrgico', route: 'Quirúrgica', freq: 'Única', notes: 'Mejora los parámetros del espermatograma en el 60-70% y las tasas de embarazo espontáneo' },
      { drug: 'Técnicas de Reproducción Asistida de Alta Complejidad: Inyección Intracitoplasmática de Espermatozoides (ICSI)', dose: 'Procedimiento de laboratorio de reproducción asistida', route: 'Biológica', freq: 'Ciclo', notes: 'De elección en oligoastenoteratozoospermia severa o espermatozoides obtenidos por biopsia testicular (TESE)' }
    ],
    alternatives: [
      { drug: 'Gonadotropinas (hCG + rFSH)', dose: 'En hipogonadismo hipogonadotropo para inducir espermatogénesis', route: 'SC / IM', freq: 'Protocolo de meses', notes: 'Restaura la fertilidad en deficiencias hormonales centrales' }
    ],
    nonPharm: ['Evitar exposición a calor testicular excesivo (saunas, ropa interior apretada, laptop sobre el regazo)', 'Cese de tabaco, alcohol y drogas anabólicas'],
    nursingCare: ['INSTRUCCIÓN EXACTA PARA RECOLECCIÓN DEL ESPERMATOGRAMA: Abstinencia sexual estricta de 2 a 7 días, recolección por masturbación completa directa en frasco estéril sin uso de lubricantes ni condones comunes y entrega en el laboratorio en < 60 minutos manteniendo el frasco a temperatura corporal (junto al cuerpo)', 'Apoyo psicológico a la pareja durante el proceso diagnóstico', 'Educación para evitar el consumo de esteroides anabólicos en gimnasios (inducen azoospermia por frenación hipofisaria)']
  },
  {
    number: 289,
    id: 'diag-289',
    title: 'Orquitis viral',
    cie10: 'N45.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección e inflamación aguda de uno o ambos testículos provocada por diseminación hematógena viral, siendo el virus de la parotiditis (Paperas / paramixovirus) el agente causal paradigmático en varones pospuberales.',
    symptoms: ['Aparición brusca de tumefacción testicular dolorosa unilateral (o bilateral en el 20-30%) 4 a 7 días después del inicio de la parotiditis (tumefacción parotídea)', 'Dolor testicular agudo e intenso que irradia a la ingle', 'Eritema, calor y edema marcado de la piel escrotal', 'Fiebre alta, escalofríos, náuseas y cefalea'],
    redFlags: ['Atrofia testicular secundaria (en el 30-50% de testículos afectados) con riesgo de hipoespermatogénesis o esterilidad futura si es bilateral'],
    criteria: 'Tumefacción y dolor testicular agudo en paciente con cuadro reciente de parotiditis o serología viral positiva + Eco-Doppler escrotal que confirma hiperflujo intratesticular.',
    labTests: ['Serología IgM para Parotiditis', 'Hemograma y PCR'],
    imaging: ['Eco-Doppler testicular urgente (aumento difuso del tamaño testicular con flujo arterial marcadamente aumentado por hiperemia reactiva; CRUCIAL para descartar Torsión Testicular que muestra ausencia total de flujo)'],
    differential: ['Torsión testicular aguda (emergencia quirúrgica)', 'Orquiepididimitis bacteriana aguda', 'Traumatismo testicular'],
    firstLine: [
      { drug: 'Tratamiento de soporte sintomático: Reposo absoluto en cama + Suspensorio escrotal elástico + Crioterapia local', dose: 'Medidas físicas continuas durante la fase aguda febril', route: 'Físico', freq: 'Continuo', notes: 'El soporte escrotal alivia la tensión sobre el cordón espermático y reduce el dolor' },
      { drug: 'AINEs orales para el dolor y la inflamación: Ibuprofeno o Naproxeno', dose: 'Ibuprofeno 600 mg cada 8 horas VO con comidas por 7 a 10 días', route: 'VO', freq: 'c/8h', notes: 'Alivian la inflamación tisular; los antibióticos NO están indicados en orquitis parotídea' }
    ],
    alternatives: [
      { drug: 'Paracetamol', dose: '500 a 1000 mg cada 6-8 horas VO', route: 'VO', freq: 'c/6-8h SOS', notes: 'Control de la fiebre y malestar' }
    ],
    nonPharm: ['Aplicación de compresas frías locales sobre el escroto (15 min 3 veces al día)'],
    nursingCare: ['PREVENCIÓN PRIMARIA DE ENFERMERÍA: Asegurar el cumplimiento del esquema de vacunación infantil con la vacuna SPR (Sarampión-Paperas-Rubéola) a los 12 y 18 meses de vida', 'Instruir al paciente en el uso continuo de calzoncillo tipo suspensorio apretado o slip para mantener los testículos elevados y quietos', 'Monitoreo de temperatura y control del dolor', 'Tranquilizar al paciente informando que la mayoría de los casos no ocasiona esterilidad completa']
  },
  {
    number: 290,
    id: 'diag-290',
    title: 'Epididimitis',
    cie10: 'N45.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Inflamación e infección aguda del epidídimo, originada por la propagación retrógrada de microorganismos a través de los conductos deferentes, debida a infecciones de transmisión sexual (Chlamydia trachomatis o Neisseria gonorrhoeae) en varones jóvenes menores de 35 años, o a uropatógenos coliformes entéricos (Escherichia coli) en mayores de 35 años.',
    symptoms: ['Dolor escrotal agudo o subagudo que inicia en la cola del epidídimo y progresa al testículo', 'Tumefacción y engrosamiento indurado doloroso del epidídimo en la cara posterior del testículo', 'SIGNO DE PREHN POSITIVO (el dolor ALIVIA claramente al elevar manualmente el testículo afectado hacia el canal inguinal)', 'Reflejo cremastérico CONSERVADO', 'Fiebre, disuria, secreción uretral o polaquiuria'],
    redFlags: ['Absceso epididimotesticular', 'Infarto testicular por compresión vascular del cordón'],
    criteria: 'Dolor y tumefacción epididimaria con Signo de Prehn positivo + Eco-Doppler que demuestra hipervascularización e hiperflujo en el epidídimo.',
    labTests: ['Frotis y cultivo de secreción uretral o PCR en orina para Chlamydia/Gonococo en jóvenes', 'Examen de orina y Urocultivo en mayores de 35 años'],
    imaging: ['Eco-Doppler escrotal (aumento del tamaño del epidídimo con señal doppler color marcadamente aumentada e hiperemia)'],
    differential: ['TORSIÓN TESTICULAR (el signo de Prehn es negativo: elevar el testículo no alivia o empeora el dolor; y el reflejo cremastérico está ausente)', 'Orquitis aislada', 'Tumor testicular sangrante'],
    firstLine: [
      { drug: 'En varones < 35 años (sospecha de ITS): Ceftriaxona + Doxiciclina', dose: 'Ceftriaxona 500 mg IM en dosis única profunda + Doxiciclina 100 mg cada 12 horas VO por 10 a 14 días', route: 'IM + VO', freq: 'Reglado', notes: 'Cubre simultáneamente Gonococo y Chlamydia; tratar obligatoriamente a la pareja' },
      { drug: 'En varones > 35 años o post-procedimiento urológico (uropatógenos entéricos): Levofloxacino o Ciprofloxacino', dose: 'Levofloxacino 500 mg/día VO o Ciprofloxacino 500 mg cada 12 horas VO por 10 a 14 días', route: 'VO', freq: 'c/12-24h x 10-14 días', notes: 'Excelente penetración frente a enterobacterias' }
    ],
    alternatives: [
      { drug: 'Cotrimoxazol', dose: '800/160 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'En alérgicos a quinolonas' }
    ],
    nonPharm: ['Reposo relativo con suspensorio escrotal y hielo local envuelto en tela'],
    nursingCare: ['EVALUACIÓN DEL SIGNO DE PREHN: Elevar suavemente el hemiescroto afectado con la mano hacia la sínfisis púbica; si el paciente refiere alivio del dolor, es característico de epididimitis (si el dolor no cambia o empeora, sospechar URGENCIA de torsión)', 'Verificar que la pareja sexual reciba tratamiento completo si la etiología es ITS', 'Inspección de la piel escrotal buscando fluctuación que sugiera absceso']
  },
  {
    number: 291,
    id: 'diag-291',
    title: 'Torsión testicular',
    cie10: 'N44.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'EMERGENCIA QUIRÚRGICA UROLÓGICA ABSOLUTA producida por la rotación axial del cordón espermático sobre su eje, lo que ocluye primero el drenaje venoso y luego el flujo arterial testicular, provocando isquemia aguda y necrosis irreversible del testículo si no se resuelve dentro de las primeras 6 horas.',
    symptoms: ['Dolor testicular agudo, súbito, lacerante y de máxima intensidad (frecuentemente despierta al paciente en la madrugada o tras actividad física)', 'Testículo afectado elevado, horizontalizado y ascendido en el hemiescroto (signo de Gouverneur)', 'AUSENCIA TOTAL DEL REFLEJO CREMASTÉRICO ipsilateral (al raspar la cara interna del muslo, el testículo no se eleva)', 'SIGNO DE PREHN NEGATIVO (la elevación manual del testículo NO alivia el dolor e incluso lo incrementa)', 'Náuseas, vómitos reflejos y dolor irradiado a la fosa ilíaca'],
    redFlags: ['TIEMPO DE EVOLUCIÓN > 6 HORAS: A partir de las 6 horas la viabilidad testicular cae drásticamente (< 50% de rescate a las 12h; 0% a las 24h)'],
    criteria: 'Clínica típica con testículo ascendido y reflejo cremastérico ausente + Eco-Doppler que demuestra ausencia total de flujo vascular en el parénquima testicular.',
    labTests: ['Preoperatorios inmediatos de urgencia (hemograma, coagulación y grupo sanguíneo)'],
    imaging: ['ECO-DOPPLER ESCROTAL URGENTE (ausencia o marcada reducción del flujo vascular arterial y venoso intratesticular con signo del "remolino" en el cordón espermático). REGLA DE ORO: SI EL ECO-DOPPLER NO ESTÁ DISPONIBLE DE INMEDIATO, NO RETRASAR LA CIRUGÍA'],
    differential: ['Orquiepididimitis aguda', 'Torsión del apéndice testicular (hidátide de Morgagni: signo del "punto azul")', 'Traumatismo escrotal'],
    firstLine: [
      { drug: 'EXPLORACIÓN QUIRÚRGICA ESCROTAL DE EMERGENCIA INMEDIATA', dose: 'Detorsión quirúrgica del cordón + evaluación de viabilidad tras calentamiento con compresas tibias + Orquidopexia bilateral', route: 'Quirúrgica de emergencia', freq: 'Inmediata', notes: 'ORQUIDOPEXIA BILATERAL OBLIGATORIA: El defecto anatómico de "badajo de campana" es congénito y bilateral; si el testículo está necrótico se realiza orquiectomía y fijación del contralateral' }
    ],
    alternatives: [
      { drug: 'Detorsión manual externa ("abrir un libro")', dose: 'Rotación del testículo de adentro hacia afuera (rotación externa hacia el muslo correspondiente) de 180° a 360° sin anestesia', route: 'Manual médica', freq: 'Maniobra puente', notes: 'Medida provisional de rescate inmediato mientras se prepara el quirófano; no exime de la cirugía definitiva' }
    ],
    nonPharm: ['Nada por vía oral (NPO inmediato para anestesia)'],
    nursingCare: ['ACTIVACIÓN INMEDIATA DEL PROTOCOLO DE CIRUGÍA DE URGENCIA: Tiempo es gónada (ventana dorada < 6 horas)', 'Canalización de vía venosa periférica, extracción inmediata de sangre para preoperatorios y preparación del paciente para quirófano', 'Evaluación rápida del reflejo cremastérico y posición horizontalizada del testículo', 'NUNCA administrar analgésicos que demoren el traslado al quirófano sin la evaluación del cirujano/urólogo']
  },
  {
    number: 292,
    id: 'diag-292',
    title: 'Varicocele',
    cie10: 'I86.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Dilatación anormal y tortuosidad de las venas del plexo pampiniforme del cordón espermático debida a incompetencia valvular venosa, localizada en más del 85-90% de los casos en el lado izquierdo debido al drenaje perpendicular de la vena espermática izquierda en la vena renal izquierda.',
    symptoms: ['Frecuentemente asintomático y detectado durante evaluación por infertilidad', 'Sensación de pesadez, molestia o dolor sordo en el escroto que aumenta tras bipedestación prolongada, ejercicio o calor', 'Palpación típica de una masa escrotal blanda parecida a una "bolsa de gusanos" (bag of worms) por encima y detrás del testículo'],
    redFlags: ['Varicocele derecho aislado o de aparición brusca en un adulto (OBLIGA a descartar masa retroperitoneal o Carcinoma de Células Renales con invasión de vena cava)', 'Atrofia testicular ipsilateral'],
    criteria: 'Palpación de dilatación venosa pampiniforme que aumenta con maniobra de Valsalva de pie (Grado I a III de Dubin-Amelar) + Eco-Doppler que demuestra venas > 2.5-3.0 mm con reflujo retrógrado patológico.',
    labTests: ['Espermatograma completo (evaluación de oligoastenoteratozoospermia asociada)'],
    imaging: ['Eco-Doppler escrotal en reposo y con maniobra de Valsalva (diámetro venoso > 2.5-3 mm con inversión de flujo continuo)'],
    differential: ['Hidrocele', 'Espermatocele', 'Hernia inguinoescrotal'],
    firstLine: [
      { drug: 'Varicocelectomía subinguinal microquirúrgica (Técnica de Marmar)', dose: 'Procedimiento quirúrgico con microscopio quirúrgico', route: 'Microquirúrgica', freq: 'Única', notes: 'Gold standard quirúrgico con menor tasa de recurrencias (< 1%) y menor tasa de hidrocele postoperatorio' }
    ],
    alternatives: [
      { drug: 'Embolización percutánea retrógrada con coils o esclerosantes', dose: 'Procedimiento de radiología intervencionista', route: 'Endovascular', freq: 'Única', notes: 'Alternativa mínimamente invasiva ambulatoria' },
      { drug: 'Manejo conservador con suspensorio escrotal', dose: 'Uso de suspensorio y AINEs', route: 'Físico', freq: 'SOS', notes: 'En varicoceles subclínicos o asintomáticos con espermatograma normal' }
    ],
    nonPharm: ['Evitar sobrepeso y estreñimiento crónico'],
    nursingCare: ['Enseñanza sobre la maniobra de Valsalva para la autoexploración testicular', 'Cuidados postoperatorios de varicocelectomía: aplicación de frío local las primeras 24h, uso de suspensorio escrotal por 2 semanas y evitar esfuerzos físicos pesados', 'Instruir al paciente que un varicocele derecho nuevo que no desaparece al acostarse requiere evaluación médica abdominal']
  },
  {
    number: 293,
    id: 'diag-293',
    title: 'Hidrocele',
    cie10: 'N43.3',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Acumulación patológica de líquido seroso claro en el interior de la cavidad vaginal del testículo (entre la capa visceral y parietal de la túnica vaginalis), pudiendo ser comunicante (por persistencia del conducto peritoneovaginal en niños) o no comunicante (adquirido en adultos por traumatismo, infección o idiopático).',
    symptoms: ['Aumento de volumen indoloro y progresivo del hemiescroto', 'Masa escrotal redondeada, tensa o fluctuante que no se reduce', 'Sensación de pesadez o incomodidad al caminar o vestirse cuando alcanza gran volumen'],
    redFlags: ['Hidrocele secundario a tumor testicular subyacente (reactivo)', 'Infección del líquido (piocele)'],
    criteria: 'Masa escrotal indolora con SIGNO DE TRANSLUMINACIÓN POSITIVO (al aplicar una linterna contra el escroto en habitación oscura, la luz atraviesa el líquido mostrándolo uniformemente rosado/rojo brillante).',
    labTests: ['Habitualmente no requeridos'],
    imaging: ['Ecografía escrotal (confirma colección anecoica homogénea rodeando el testículo y permite examinar exhaustivamente el parénquima testicular subyacente descartando neoplasia)'],
    differential: ['Hernia inguinoescrotal (la hernia no transilumina y se auscultan ruidos hidroaéreos)', 'Espermatocele', 'Tumor testicular sólido'],
    firstLine: [
      { drug: 'Tratamiento quirúrgico: Hidrocelectomía por eversión o resección de la túnica vaginalis (Técnica de Jaboulay o Lord)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en hidroceles sintomáticos, gigantes o con compromiso estético/funcional' },
      { drug: 'En lactantes < 1-2 años con hidrocele comunicante: Conducta expectante', dose: 'Observación y seguimiento pediátrico', route: 'Observación', freq: 'Periódico', notes: 'Más del 80-90% de los conductos peritoneovaginales se cierran espontáneamente en el primer año' }
    ],
    alternatives: [
      { drug: 'Aspiración con aguja y escleroterapia', dose: 'Drenaje percutáneo con inyección de tetraciclina o alcohol', route: 'Percutáneo', freq: 'Excepcional', notes: 'Solo en pacientes de edad muy avanzada con alto riesgo quirúrgico (alta tasa de recurrencia)' }
    ],
    nonPharm: ['Uso de suspensorio escrotal para confort'],
    nursingCare: ['MANIOBRA DE TRANSLUMINACIÓN: Oscurecer la habitación, colocar la fuente de luz directa en la parte posterior del escroto y observar el paso de luz a través del líquido seroso', 'En el postoperatorio: vigilar la formación de hematomas escrotales y mantener el suspensorio ajustado', 'Enseñar a los padres de lactantes a observar si el tamaño de la masa fluctúa durante el día (orienta a hidrocele comunicante)']
  },
  {
    number: 294,
    id: 'diag-294',
    title: 'Espermatocele',
    cie10: 'N43.4',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Quiste de retención benigno originado en los túbulos de la cabeza del epidídimo o de la rete testis, caracterizado por contener líquido seroso lechoso y espermatozoides.',
    symptoms: ['Nódulo o masa quística esférica, móvil, lisa e indolora localizada en el polo superior del testículo', 'Frecuentemente asintomático y de pequeño tamaño (< 1 cm)', 'Sensación de bulto palpable que preocupa al paciente al autoexplorarse'],
    redFlags: ['Confusión con neoplasia testicular'],
    criteria: 'Palpación de masa quística separada netamente del testículo en la cabeza del epidídimo + Eco-Doppler confirmatorio.',
    labTests: ['No requeridos'],
    imaging: ['Ecografía escrotal (quiste anecoico bien delimitado con refuerzo acústico posterior en la cabeza del epidídimo, netamente separado del parénquima testicular)'],
    differential: ['Quiste simple de epidídimo', 'Hidrocele', 'Tumor de cordón espermático'],
    firstLine: [
      { drug: 'Conducta expectante y tranquilización del paciente en espermatoceles pequeños asintomáticos', dose: 'Observación periódica', route: 'Observación', freq: 'Anual', notes: 'No requiere tratamiento invasivo ni afecta la fertilidad' }
    ],
    alternatives: [
      { drug: 'Espermatocelectomía quirúrgica', dose: 'Exéresis microquirúrgica del quiste', route: 'Quirúrgica', freq: 'Única', notes: 'Solo en casos de gran tamaño que produzcan dolor o incomodidad mecánica' }
    ],
    nonPharm: ['Uso de suspensorio elástico'],
    nursingCare: ['Tranquilizar al paciente aclarando que se trata de un quiste benigno y NO de un cáncer de testículo', 'Enseñar la técnica de autoexploración testicular periódica', 'Cuidados de herida escrotal en caso de extirpación quirúrgica']
  },
  {
    number: 295,
    id: 'diag-295',
    title: 'Fimosis',
    cie10: 'N47.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Estrechez patológica o estenosis del orificio del prepucio que impide la retracción completa y fácil de la piel prepucial hacia atrás por detrás del surco balanoprepucial para exponer el glande. Puede ser fisiológica en lactantes o patológica (cicatrizal por balanitis xerótica obliterante en adultos).',
    symptoms: ['Imposibilidad mecánica para descubrir el glande', 'Dolor o tirantez durante la erección y el coito', 'Abombamiento en globo del prepucio durante la micción (balonamiento prepucial en niños)', 'Dificultad para la higiene genital con acumulación de esmegma fétido y balanopostitis recurrentes'],
    redFlags: ['Parafimosis aguda por retracción forzada', 'Retención urinaria en estenosis puntiforme extrema'],
    criteria: 'Inspección física directa que constata anillo prepucial estrecho inextensible que no permite la retracción del glande.',
    labTests: ['Glucemia basal (la balanitis y fimosis adquirida del adulto es con frecuencia el primer signo de Diabetes Mellitus tipo 2)'],
    imaging: ['No requerida'],
    differential: ['Adherencias balanoprepuciales fisiológicas del lactante (se resuelven solas)', 'Parafimosis'],
    firstLine: [
      { drug: 'Corticoides tópicos de moderada/alta potencia en niños > 2-3 años: Betametasona al 0.05% o Clobetasol al 0.05% en crema', dose: 'Aplicar una fina capa en el anillo prepucial estrecho 2 veces al día durante 4 a 8 semanas, asociada a tracción manual suave y progresiva sin forzar', route: 'Tópica', freq: 'c/12h x 4-8 sem', notes: 'Tasa de éxito superior al 80-90%, evitando la cirugía en la mayoría de los niños' },
      { drug: 'Circuncisión quirúrgica (Postectomía) en adultos o refractarios', dose: 'Procedimiento quirúrgico resectivo definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Extirpación completa del prepucio enfermo; indicada en fimosis cicatrizal o infecciones recurrentes' }
    ],
    alternatives: [
      { drug: 'Prepucioplastia (técnicas de plastia en Y-V o incisión dorsal)', dose: 'Cirugía conservadora del prepucio', route: 'Quirúrgica', freq: 'Electiva', notes: 'Alternativa que preserva la piel prepucial' }
    ],
    nonPharm: ['ADVERTENCIA A PADRES: NUNCA realizar tirones violentos o retracciones bruscas forzadas del prepucio del lactante (producen microdesgarros que cicatrizan con fibrosis y generan fimosis cicatrizal irreversible)'],
    nursingCare: ['Orientación a las madres sobre la higiene genital suave sin forzar en lactantes', 'Instruir al paciente adulto sobre el tamizaje de glucosa en sangre ante fimosis de inicio tardío', 'Cuidados postoperatorios de circuncisión: curación con apósito vaselinado y vigilancia de hematomas']
  },
  {
    number: 296,
    id: 'diag-296',
    title: 'Parafimosis',
    cie10: 'N47.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'URGENCIA UROLÓGICA aguda producida cuando el prepucio estrecho o fimótico es retraído por detrás del surco balanoprepucial y no puede volver a colocarse en su posición normal hacia adelante, actuando como un torniquete constrictor que produce edema masivo e isquemia del glande.',
    symptoms: ['Dolor intenso y creciente en el glande y el pene', 'Glande marcadamente tumefacto, edematoso y congestivo de color violáceo o cianótico', 'Rodete o anillo edematoso voluminoso constrictor por detrás de la corona del glande', 'Frecuentemente desencadenada de forma iatrogénica tras colocación de sonda vesical en hospitales al olvidar regresar el prepucio hacia adelante'],
    redFlags: ['NECROSIS ISQUÉMICA Y GANGRENA DEL GLANDE por estrangulamiento vascular prolongado'],
    criteria: 'Inspección directa que demuestra el glande estrangulado con anillo prepucial edematoso retraído.',
    labTests: ['No requeridos'],
    imaging: ['No requerida'],
    differential: ['Picadura de insecto en pene', 'Priapismo', 'Angioedema genital'],
    firstLine: [
      { drug: 'REDUCCIÓN MANUAL INMEDIATA DE URGENCIA (Maniobra de compresión bimanual)', dose: '1. Comprimir firmemente el glande edematoso entre los dedos índice y pulgar durante 5 a 10 minutos para exprimir el edema; 2. Empujar el glande hacia atrás con los dos pulgares mientras se tracciona la piel prepucial hacia adelante con los dedos índice y medio ("como desenvainar")', route: 'Maniobra manual inmediata', freq: 'Inmediata', notes: 'Restaura la circulación de inmediato; aplicar anestesia local o hielo previo si es necesario' }
    ],
    alternatives: [
      { drug: 'Técnica de punción múltiple con aguja fina (Técnica de Dundee)', dose: 'Punciones múltiples con aguja 21G en el anillo edematoso para exprimir el líquido seroso antes de reducir', route: 'Percutáneo suave', freq: 'Rescate', notes: 'Facilita la reducción manual en edemas colosales' },
      { drug: 'Incisión dorsal quirúrgica del prepucio de emergencia', dose: 'Corte longitudinal del anillo constrictor con bisturí bajo anestesia local', route: 'Quirúrgica urgente', freq: 'Urgente', notes: 'Si fracasa la reducción manual para evitar la necrosis del glande' }
    ],
    nonPharm: ['Programar circuncisión electiva diferida una vez resuelta la inflamación'],
    nursingCare: ['REGLA DE ORO DE ENFERMERÍA EN CATETERISMO VESICAL: SIEMPRE, TRAS COLOCAR UNA SONDA FOLEY EN UN VARÓN NO CIRCUNCIDADO, VOLVER A DESLIZAR EL PREPUNCIO HACIA ADELANTE SOBRE EL GLANDE (la omisión de este paso es la causa más común de parafimosis hospitalaria)', 'Actuación inmediata ante la detección de parafimosis para evitar el estrangulamiento isquémico']
  },
  {
    number: 297,
    id: 'diag-297',
    title: 'Balanitis',
    cie10: 'N48.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Inflamación de la mucosa del glande del pene (balanitis) o asociada a la cara interna del prepucio (balanopostitis), originada frecuentemente por infección fúngica por Candida albicans, bacterias o dermatitis irritativa en pacientes no circuncidados.',
    symptoms: ['Eritema difuso, enrojecimiento brillante y edema en el glande y prepucio', 'Prurito intenso, escozor o dolor al roce', 'Placas blanquecinas puntiformes caseosas con aspecto de "leche cortada" en balanitis candidiásica', 'Erosiones superficiales o pequeñas fisuras dolorosas en el prepucio', 'Secreción subprepucial fétida y disuria terminal'],
    redFlags: ['Balanitis xerótica obliterante (liquen escleroso peneano con placas blancas nacaradas y estenosis de meato con riesgo de carcinoma escamocelular)'],
    criteria: 'Inspección clínica directa del glande inflamado + frotis o cultivo micológico.',
    labTests: ['GLUCEMIA EN AYUNAS O HEMOGLOBINA GLICOSILADA OBLIGATORIA (la balanitis candidiásica recurrente es uno de los primeros signos cardinales de Diabetes Mellitus no diagnosticada)', 'Frotis de secreción con tinción de KOH para hifas de Candida'],
    imaging: ['No requerida'],
    differential: ['Psoriasis genital inversa', 'Eritroplasia de Queyrat (carcinoma in situ)', 'Herpes simple genital'],
    firstLine: [
      { drug: 'En Balanitis Candidiásica: Clotrimazol al 1% o Miconazol al 2% en crema tópica', dose: 'Aplicar una capa fina sobre el glande y prepucio limpios y secos cada 12 horas durante 14 días consecutivos', route: 'Tópica', freq: 'c/12h x 14 días', notes: 'Curación en > 90%; en formas extensas asociar Fluconazol 150 mg VO monodosis' },
      { drug: 'En Balanitis Bacteriana: Mupirocina al 2% o Ácido Fusídico tópico', dose: 'Aplicar cada 12 horas por 7 a 10 días', route: 'Tópica', freq: 'c/12h', notes: 'Frente a estafilococos o estreptococos' }
    ],
    alternatives: [
      { drug: 'Circuncisión electiva diferida', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Electiva', notes: 'Tratamiento curativo de elección en balanopostitis de repetición o fimosis secundaria' }
    ],
    nonPharm: ['Higiene genital diaria retrayendo suavemente el prepucio, lavando solo con agua tibia o jabón con pH neutro, y SECADO MINUCIOSO con toalla limpia (la humedad favorece los hongos)'],
    nursingCare: ['Tamizaje de glucosa en todo paciente con balanitis candidiásica', 'Instruir sobre la higiene íntima y la vital importancia de secar completamente el glande antes de volver a cubrirlo', 'Indicar abstinencia sexual o uso de preservativo durante el tratamiento y evaluar a la pareja sexual si tiene candidiasis vaginal']
  },
  {
    number: 298,
    id: 'diag-298',
    title: 'Dismenorrea primaria',
    cie10: 'N94.4',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Dolor pélvico espasmódico intenso de tipo cólico que precede o coincide con la menstruación en mujeres con ciclos ovulatorios y en AUSENCIA demostrada de patología pélvica orgánica identificable, secundario a una hipersecreción endometrial de prostaglandinas F2-alfa y E2.',
    symptoms: ['Dolor cólico suprapúbico que inicia pocas horas antes o al inicio del sangrado menstrual y dura entre 48 y 72 horas', 'Irradiación típica a la región lumbosacra y a la cara anterior de los muslos', 'Síntomas sistémicos acompañantes: náuseas, vómitos, diarrea, cefalea y mareos', 'Exploración ginecológica estrictamente normal'],
    redFlags: ['Dismenorrea progresiva que no responde a AINEs ni anticonceptivos (sospecha de endometriosis)'],
    criteria: 'Dolor menstrual recurrente típico desde la adolescencia con examen pélvico y ecografía ginecológica rigurosamente normales.',
    labTests: ['Test de embarazo en orina (descarte de patología gestacional)'],
    imaging: ['Ecografía pélvica o transvaginal (normal, descarta miomas, adenomiosis o quistes)'],
    differential: ['Dismenorrea secundaria por endometriosis', 'Adenomiosis', 'Enfermedad pélvica inflamatoria crónica'],
    firstLine: [
      { drug: 'AINEs inhibidores de la síntesis de prostaglandinas (Primera línea de elección): Ibuprofeno o Naproxeno o Ácido Mefenámico', dose: 'Ibuprofeno 400 a 600 mg cada 8 horas VO, o Naproxeno 500 mg inicial y luego 250 mg c/8h VO, o Ácido mefenámico 500 mg c/8h VO', route: 'VO con alimentos', freq: 'c/8h', notes: 'INICIAR 1 A 2 DÍAS ANTES de la menstruación o al primer signo de sangrado y mantener por 2-3 días' },
      { drug: 'Anticonceptivos Hormonales Combinados (ACO oral o anillo vaginal o parche)', dose: '1 comprimido diario VO (régimen 21/7 o extendido continuo)', route: 'VO', freq: 'c/24h', notes: 'Suprimen la ovulación, atrofian el endometrio y reducen marcadamente la síntesis de prostaglandinas' }
    ],
    alternatives: [
      { drug: 'Dispositivo Intrauterino liberador de Levonorgestrel (DIU-LNG / Mirena)', dose: 'Implante intrauterino por 5 a 8 años', route: 'Intrauterino', freq: 'Única', notes: 'Eficacia muy alta para reducir el dolor menstrual y el volumen de sangrado' }
    ],
    nonPharm: ['Aplicación de calor local continuo en el hipogastrio (almohadilla térmica)', 'Ejercicio físico aeróbico regular'],
    nursingCare: ['EDUCACIÓN SOBRE LA TOMA PREVENTIVA DE AINEs: Instruir a la paciente en tomar el AINE apenas note los pródromos o al manchar, ANTES de que el dolor se torne intolerable (bloquear la síntesis de prostaglandinas antes de que saturen el miometrio)', 'Consejería sobre hábitos saludables y termoterapia local', 'Desmitificar el dolor menstrual incapacitante: si el dolor impide actividades diarias y no cede a AINEs, derivar para descartar endometriosis']
  },
  {
    number: 299,
    id: 'diag-299',
    title: 'Dismenorrea secundaria',
    cie10: 'N94.5',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Dolor menstrual doloroso causado por una patología pélvica orgánica identificable subyacente, de aparición más tardía en la vida reproductiva (mujeres de 25 a 45 años), frecuentemente debida a endometriosis, adenomiosis, miomatosis uterina, estenosis cervical o EPI crónica.',
    symptoms: ['Dolor pélvico sordo y constante que comienza días o semanas antes de la menstruación, persiste durante todo el flujo y continúa tras cesar el sangrado', 'Dispareunia profunda (dolor durante el coito)', 'Disquecia (dolor defecatorio con la menstruación) o disuria cíclica', 'Menorragia (sangrado menstrual abundante) o sangrado intermenstrual', 'Esterilidad o dificultad para lograr el embarazo'],
    redFlags: ['Masa anexial dolorosa fija o hemoperitoneo agudo por rotura de endometrioma'],
    criteria: 'Dismenorrea asociada a hallazgos patológicos al examen ginecológico (útero agrandado, nódulos dolorosos en fondo de saco de Douglas o masas anexiales) o confirmada por imagenología o laparoscopía.',
    labTests: ['CA-125 sérico (puede estar moderadamente elevado en endometriosis)', 'Hemograma (anemia ferropénica secundaria a hipermenorrea)'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DE ALTA RESOLUCIÓN con mapeo pélvico (evalúa miomas, adenomiosis con signo de estrías miometriales y endometriomas con patrón en "vidrio esmerilado")', 'Resonancia magnética pélvica'],
    differential: ['Dismenorrea primaria', 'Síndrome de congestión pélvica', 'Adherencias pélvicas postquirúrgicas'],
    firstLine: [
      { drug: 'Tratamiento hormonal de supresión ovárica: Progestágenos continuos (Dienogest o Acetato de Medroxiprogesterona) o DIU-Levonorgestrel', dose: 'Dienogest 2 mg/día VO continuo de por vida reproductiva o DIU-LNG 52 mg', route: 'VO / Intrauterino', freq: 'Continuo', notes: 'Fármaco de elección en endometriosis y adenomiosis para inducir atrofia de los implantes ectópicos y amenorrea terapéutica' }
    ],
    alternatives: [
      { drug: 'Análogos de la GnRH (Leuprolida) o Antagonistas orales de GnRH (Relugolix)', dose: 'Leuprolida 3.75 mg IM mensual con terapia "add-back" de estrógenos a dosis bajas', route: 'IM / VO', freq: 'Mensual', notes: 'Inducen pseudomenopausia química temporal' },
      { drug: 'Cirugía Laparoscópica conservadora o histerectomía definitiva', dose: 'Cirugía mínimamente invasiva', route: 'Quirúrgica', freq: 'Según paridad', notes: 'Resección de focos de endometriosis profunda o miomectomía / histerectomía en paridad satisfecha' }
    ],
    nonPharm: ['Fisioterapia de suelo pélvico y manejo multidisciplinario del dolor'],
    nursingCare: ['Validación y escucha activa ante el dolor crónico de la paciente (la dismenorrea secundaria suele retrasarse 7 a 10 años en su diagnóstico)', 'Monitoreo de anemia ferropénica en pacientes con sangrado abundante y adherencia a la suplementación con hierro', 'Preparación y cuidados pre y postoperatorios de laparoscopía ginecológica']
  },
  {
    number: 300,
    id: 'diag-300',
    title: 'Síndrome premenstrual severo',
    cie10: 'N94.3',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Conjunto recurrente y predecible de síntomas físicos, emocionales y conductuales que ocurren de manera cíclica durante la fase lútea del ciclo menstrual (7 a 14 días previos a la menstruación) y se resuelven rápidamente con el inicio del flujo menstrual. Su forma más grave e incapacitante se clasifica como Trastorno Disfórico Premenstrual (TDPM).',
    symptoms: ['Síntomas afectivos cardinales en TDPM: irritabilidad extrema, labilidad emocional intensa, accesos de ira incontrolables, tristeza profunda, llanto fácil, ansiedad y sensación de pérdida de control', 'Síntomas somáticos: mastodinia severa (tensión mamaria dolorosa), distensión abdominal, retención de líquidos con aumento transitorio de peso, cefalea y astenia', 'Craving o antojos intensos por alimentos ricos en carbohidratos y dulces'],
    redFlags: ['Ideación suicida activa y crisis de angustia en fase lútea tardía'],
    criteria: 'Criterios DSM-5 para TDPM: Presencia de al menos 5 síntomas en la mayoría de ciclos del año previo, presentes en la fase lútea y ausentes en la fase folicular postmenstrual (demostrado mediante registro diario prospectivo de síntomas durante al menos 2 ciclos consecutivos).',
    labTests: ['TSH y T4 libre (descarte de hipotiroidismo)', 'Hemograma y prolactina sérica'],
    imaging: ['No requerida'],
    differential: ['Trastorno depresivo mayor o distimia con exacerbación premenstrual', 'Trastorno de ansiedad generalizada', 'Perimenopausia'],
    firstLine: [
      { drug: 'Inhibidores Selectivos de la Recaptación de Serotonina (ISRS) - Primera línea: Sertralina o Fluoxetina', dose: 'Sertralina 50 a 100 mg/día VO o Fluoxetina 20 mg/día VO administrada de forma CONTINUA diaria o en PAUTA LÚTEA INTERMITENTE (del día 14 del ciclo hasta el inicio del sangrado)', route: 'VO', freq: 'c/24h', notes: 'En TDPM la respuesta a los ISRS es extraordinariamente rápida (días, no semanas como en depresión)' },
      { drug: 'Anticonceptivos orales combinados con Drospirenona en pauta 24/4 (Estudio FDA)', dose: 'Etinilestradiol 20 mcg + Drospirenona 3 mg diario VO en pauta extendida', route: 'VO', freq: 'c/24h', notes: 'La drospirenona es un derivado espironolactónico con efecto antimineralocorticoide y antiandrogénico que alivia la distensión y la mastodinia' }
    ],
    alternatives: [
      { drug: 'Espironolactona oral en fase lútea', dose: '50 a 100 mg/día VO del día 14 al primer día de regla', route: 'VO', freq: 'c/24h lútea', notes: 'Alivia la retención de líquidos, el edema y la tensión mamaria' }
    ],
    nonPharm: ['Dieta fraccionada baja en sal, azúcares refinados y cafeína', 'Ejercicio físico aeróbico regular (liberación de endorfinas) y técnicas de mindfulness'],
    nursingCare: ['ENTREGA Y CAPACITACIÓN EN EL DIARIO PROSPECTIVO DE SÍNTOMAS: Instruir a la paciente a calificar la intensidad de sus síntomas diariamente en un calendario durante 2 ciclos para confirmar el patrón cíclico folicular libre de síntomas', 'Desestigmatizar el trastorno reconociéndolo como una afección neurobiológica real mediada por sensibilidad serotoninérgica alterada a las fluctuaciones de alopregnanolona', 'Vigilancia de signos de alarma de salud mental (ideación de autolesión)']
  },
  {
    number: 301,
    id: 'diag-301',
    title: 'Amenorrea primaria',
    cie10: 'N91.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Ausencia de la primera menstruación (menarquia) a los 15 años de edad en presencia de crecimiento y caracteres sexuales secundarios normales (telarquia y pubarquia), o a los 13 años si existe una ausencia completa del desarrollo de caracteres sexuales secundarios.',
    symptoms: ['Falta de inicio del sangrado menstrual en una adolescente', 'Signos según la causa subyacente:', '- Talla baja, cuello alado y tórax en escudo (Síndrome de Turner, 45,X0)', '- Desarrollo mamario normal pero vello púbico y axilar escaso o ausente (Síndrome de Insensibilidad a los Andrógenos / Testículo Feminizante, 46,XY)', '- Desarrollo de caracteres sexuales normales con amenorrea y dolor pélvico cólico cíclico mensual (Himen imperforado con hematocolpos o tabique vaginal transverso)', '- Ausencia congénita de útero y vagina superior con caracteres sexuales normales (Síndrome de Mayer-Rokitansky-Küster-Hauser, 46,XX)'],
    redFlags: ['Hematocolpos / hematometra a tensión con retención urinaria aguda por himen imperforado', 'Presencia de gónadas disgenéticas con cromosoma Y (alto riesgo de gonadoblastoma)'],
    criteria: 'Ausencia de menarquia a los 15 años con desarrollo puberal o a los 13 años sin desarrollo puberal.',
    labTests: ['FSH, LH, Estradiol sérico y Prolactina', 'Cariotipo genético constitucional con bandas G (46,XX vs 45,X0 vs 46,XY)', 'TSH y 17-hidroxiprogesterona'],
    imaging: ['ECOGRAFÍA PÉLVICA O RESONANCIA MAGNÉTICA (evaluación obligatoria de la presencia o ausencia de ÚTERO y ovarios)'],
    differential: ['Himen imperforado', 'Disgenesia gonadal (Turner)', 'Síndrome de Rokitansky (MRKH)', 'Hipogonadismo hipogonadotropo (Síndrome de Kallmann)'],
    firstLine: [
      { drug: 'Tratamiento etiológico específico: Himenotomía en cruz quirúrgica inmediata en himen imperforado', dose: 'Procedimiento quirúrgico menor ambulatorio', route: 'Quirúrgica', freq: 'Única', notes: 'Descomprime el hematocolpos y resuelve la amenorrea de forma inmediata' },
      { drug: 'Terapia de Reemplazo Hormonal (TRH) sustitutiva en fallo ovárico / Turner', dose: 'Estrógenos a dosis crecientes desde los 12-13 años (ej. 17-beta estradiol transdérmico 12.5-25 mcg) + adición de Progestágeno tras 2 años', route: 'Transdérmico / VO', freq: 'Reglado', notes: 'Induce desarrollo mamario, crecimiento uterino y previene osteoporosis precoz' }
    ],
    alternatives: [
      { drug: 'Gonadectomía profiláctica laparoscópica en pacientes con presencia de material cromosómico Y (46,XY)', dose: 'Exéresis quirúrgica de gónadas disgenéticas', route: 'Laparoscópica', freq: 'Única', notes: 'Previene el desarrollo de tumores malignos (disgerminoma/gonadoblastoma)' }
    ],
    nonPharm: ['Apoyo psicológico especializado para la paciente y sus padres'],
    nursingCare: ['Manejo con máxima empatía, confidencialidad y respeto a la privacidad e intimidad de la adolescente', 'Explicar que la presencia de fenotipo femenino con cariotipo 46,XY o ausencia de útero requiere acompañamiento multidisciplinario continuo', 'Monitoreo de la densidad mineral ósea y adherencia a la terapia de reemplazo hormonal']
  },
  {
    number: 302,
    id: 'diag-302',
    title: 'Amenorrea secundaria',
    cie10: 'N91.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Cese de la menstruación durante un periodo consecutivo de al menos 3 meses en una mujer que previamente menstruaba con regularidad, o de al menos 6 meses en mujeres con ciclos oligomenorreicos previos, habiendo excluido en primer término el embarazo.',
    symptoms: ['Ausencia mantenida de sangrado menstrual', 'Síntomas orientadores según etiología: galactorrea y cefalea (hiperprolactinemia / prolactinoma), hirsutismo, acné y aumento de peso (SOP), sofocos, sudoración nocturna e insomnio (insuficiencia ovárica prematura / menopausia precoz), pérdida extrema de peso, anorexia o ejercicio compulsivo (amenorrea hipotalámica funcional)'],
    redFlags: ['Prolactinoma gigante con defectos campimétricos bitemporales', 'Osteoporosis prematura acelerada por hipoestrogenismo'],
    criteria: 'Ausencia de menstruación por ≥ 3 meses en ciclos regulares o ≥ 6 meses en irregulares.',
    labTests: ['PRUEBA DE EMBARAZO (hCG-beta sérica o en orina): PRIMER Y OBLIGATORIO PASO EN TODA MUJER EN EDAD FÉRTIL (el embarazo es la causa más común de amenorrea secundaria)', 'TSH (el hipotiroidismo induce hiperprolactinemia) y Prolactina sérica matutina', 'FSH, LH y Estradiol sérico (diferencia fallo ovárico hipergonadotropo vs fallo hipotálamo-hipofisario hipogonadotropo)', 'Testosterona total y DHEA-S (en hiperandrogenismo)'],
    imaging: ['Resonancia magnética de hipófisis con gadolinio si la prolactina está marcadamente elevada (> 100 ng/mL) o hay cefalea/alteraciones visuales', 'Ecografía transvaginal ginecológica'],
    differential: ['Embarazo normal (causa #1)', 'Síndrome de ovario poliquístico (SOP: causa #1 de amenorrea ovulatoria)', 'Amenorrea hipotalámica funcional por estrés/ejercicio/déficit calórico', 'Síndrome de Asherman (sinequias uterinas post-legrado)'],
    firstLine: [
      { drug: 'Tratamiento etiológico específico: Agonistas dopaminérgicos en prolactinoma (Cabergolina)', dose: '0.25 a 0.5 mg dos veces por semana VO con cena', route: 'VO', freq: 'Bisemanal', notes: 'Normaliza la prolactina, reduce el tamaño del adenoma y restablece las menstruaciones en > 85%' },
      { drug: 'Terapia de Reemplazo Hormonal en Insuficiencia Ovárica Prematura (< 40 años)', dose: 'Estradiol 1 a 2 mg/día VO o transdérmico + Progestágeno 12-14 días al mes', route: 'VO / Transdérmico', freq: 'Continuo', notes: 'Mantener hasta la edad fisiológica de la menopausia (aprox. 50-51 años) para protección ósea y cardiovascular' }
    ],
    alternatives: [
      { drug: 'Histeroscopía quirúrgica con lisis de sinequias en Síndrome de Asherman', dose: 'Procedimiento endoscópico intrauterino', route: 'Quirúrgica', freq: 'Única', notes: 'Restaura la cavidad endometrial obliterada por legrados traumáticos previos' }
    ],
    nonPharm: ['Recuperación del peso corporal, aumento del aporte calórico y reducción del estrés en amenorrea hipotalámica'],
    nursingCare: ['REGLA CARDINAL DE ENFERMERÍA: NUNCA iniciar estudios complejos ni administrar medicamentos a una mujer en edad fértil con amenorrea sin tener en la mano un TEST DE EMBARAZO NEGATIVO reciente', 'Consejería sobre nutrición y descanso en atletas y adolescentes con bajo peso', 'Educación para la salud sobre la importancia de la salud ósea y aporte de calcio']
  },
  {
    number: 303,
    id: 'diag-303',
    title: 'Sangrado uterino anormal',
    cie10: 'N93.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Cualquier variación significativa en la frecuencia, duración, regularidad o volumen del sangrado menstrual en mujeres en edad no gestante, sistematizado etiológicamente según la clasificación FIGO en el acrónimo PALM-COEIN (Pólipo, Adenomiosis, Leiomioma, Malignidad / Coagulopatía, Ovulatoria, Endometrial, Iatrogénica, No clasificada).',
    symptoms: ['Sangrado menstrual abundante (hipermenorrea o menorragia: > 80 mL por ciclo o necesidad de cambiar toallas/tampones cada 1-2 horas)', 'Sangrado intermenstrual (metrorragia)', 'Menstruaciones frecuentes (ciclos < 24 días) o infrecuentes (ciclos > 38 días)', 'Síntomas de anemia secundaria: astenia, mareos, palidez y palpitaciones'],
    redFlags: ['SANGRADO UTERINO POSTMENOPÁUSICO (toda mujer con sangrado tras > 1 año de menopausia tiene sospecha de Cáncer de Endometrio hasta demostrar lo contrario)', 'Hemorragia aguda masiva con descompensación hemodinámica'],
    criteria: 'Alteración objetiva del patrón de sangrado + clasificación etiológica mediante anamnesis, ecografía y/o biopsia endometrial.',
    labTests: ['Hemograma completo (cuantificar anemia y plaquetas)', 'Test de embarazo (hCG-beta urgente)', 'Coagulograma completo (descarte de Enfermedad de von Willebrand en adolescentes con sangrado abundante)', 'Ferritina sérica'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL (medición estricta del grosor de la línea endometrial: normal < 4-5 mm en postmenopáusicas sin TRH; en edad fértil descarta miomas submucosos y pólipos)', 'Histerosonografía o Histeroscopía diagnóstica con Biopsia endometrial (gold standard en sospecha intracavitaria o grosor > 4-5 mm en postmenopausia)'],
    differential: ['Cáncer de endometrio o hiperplasia atípica', 'Pólipos endometriales', 'Miomatosis uterina submucosa', 'Embarazo ectópico o aborto'],
    firstLine: [
      { drug: 'Dispositivo Intrauterino liberador de Levonorgestrel (DIU-LNG 52 mg / Mirena) - Primera línea médica', dose: 'Implante intrauterino mantenido hasta por 8 años', route: 'Intrauterino', freq: 'Única', notes: 'Reduce el volumen del sangrado menstrual en un 80 a 90% a los 3 meses y es superior a los tratamientos orales' },
      { drug: 'Ácido Tranexámico oral en hemorragia activa no hormonal', dose: '1000 a 1500 mg cada 8 horas VO solo durante los días de sangrado abundante', route: 'VO', freq: 'c/8h durante la regla', notes: 'Antifibrinolítico que reduce el sangrado menstrual un 40-50% sin efecto hormonal' },
      { drug: 'Anticonceptivos orales combinados (ACO) o Progestágenos cíclicos', dose: '1 comprimido diario VO', route: 'VO', freq: 'c/24h', notes: 'Regulan el ciclo y disminuyen la proliferación endometrial' }
    ],
    alternatives: [
      { drug: 'Ablación endometrial histeroscópica o Histerectomía', dose: 'Tratamiento quirúrgico', route: 'Quirúrgica', freq: 'Única', notes: 'En sangrado refractario a tratamiento médico con paridad satisfecha' },
      { drug: 'Polipectomía o Miomectomía histeroscópica', dose: 'Resección endoscópica', route: 'Endoscópica', freq: 'Única', notes: 'De elección ante pólipos endometriales o miomas submucosos tipo 0 o 1' }
    ],
    nonPharm: ['Suplementación con sulfato ferroso oral para corregir la ferropenia'],
    nursingCare: ['VIGILANCIA CRÍTICA ANTE SANGRADO POSTMENOPÁUSICO: Toda mujer que sangre después de la menopausia DEBE ser derivada con carácter urgente para biopsia endometrial (descarte de neoplasia maligna)', 'Instruir a la paciente en llevar un calendario menstrual con registro del número de toallas higiénicas empapadas por día', 'Monitoreo de signos vitales (PA y FC) en urgencias si el sangrado es agudo abundante', 'Administración de hierro oral con vitamina C para optimizar absorción']
  },
  {
    number: 304,
    id: 'diag-304',
    title: 'Endometriosis pélvica',
    cie10: 'N80.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Enfermedad inflamatoria crónica ginecológica caracterizada por la presencia ectópica de estroma y glándulas endometriales funcionales fuera de la cavidad uterina, principalmente en los ovarios (endometriomas / "quistes de chocolate"), peritoneo pélvico, ligamentos uterosacros, tabique rectovaginal y vejiga/intestino.',
    symptoms: ['La regla de las 4 "D" de la Endometriosis:', '1. Dismenorrea secundaria progresiva severa e invalidante que no alivia con AINEs habituales', '2. Dispareunia profunda (dolor coital que empeora antes de la menstruación)', '3. Disquecia cíclica (dolor agudo al defecar durante el periodo menstrual)', '4. Disuria cíclica (dolor miccional o hematuria con la regla)', 'Dolor pélvico crónico no menstrual acíclico persistente (> 6 meses)', 'Infertilidad o esterilidad primaria en el 30-50% de las pacientes'],
    redFlags: ['Endometriosis infiltrante profunda (EIP) con estenosis ureteral e hidronefrosis silente', 'Obstrucción intestinal rectosigmoidea'],
    criteria: 'Visualización directa de lesiones pigmentadas ("en quemadura de pólvora") e implantes endometriales mediante Laparoscopía con confirmación histopatológica (gold standard). En ovarios: ecografía transvaginal con endometrioma típico.',
    labTests: ['CA-125 sérico (útil como marcador de seguimiento y respuesta al tratamiento, no para diagnóstico)', 'Hemograma completo y ferritina sérica'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DE ALTA RESOLUCIÓN CON MAPEO DE ENDOMETRIOSIS PROFUNDA (sensibilidad > 90% para endometriomas ováricos con ecos homogéneos en "vidrio esmerilado" y nódulos en ligamentos uterosacros)', 'Resonancia Magnética de pelvis'],
    differential: ['Adenomiosis', 'Enfermedad pélvica inflamatoria crónica', 'Síndrome de intestino irritable', 'Cistitis intersticial'],
    firstLine: [
      { drug: 'Dienogest oral continuo (Progestágeno de elección específico para endometriosis)', dose: '2 mg/día VO en toma continua ininterrumpida a la misma hora sin descansos', route: 'VO', freq: 'c/24h continuo', notes: 'Provoca hipoestrogenismo local, atrofia progresiva de los implantes ectópicos y amenorrea en > 80%' },
      { drug: 'Anticonceptivos combinados monofásicos en pauta extendida continua o DIU de Levonorgestrel', dose: '1 comprimido diario continuo o DIU-LNG 52 mg', route: 'VO / Intrauterino', freq: 'Continuo', notes: 'Control sintomático del dolor menstrual y de la progresión' }
    ],
    alternatives: [
      { drug: 'Antagonistas orales de GnRH: Relugolix o Elagolix', dose: 'Relugolix 40 mg/día VO asociado a terapia add-back (estradiol 1 mg + noretindrona 0.5 mg)', route: 'VO', freq: 'c/24h', notes: 'Supresión ovárica rápida sin los efectos secundarios vasomotores ni desmineralización ósea severa' },
      { drug: 'Cirugía Laparoscópica conservadora avanzada (Cistectomía ovárica y exéresis de nódulos profundos)', dose: 'Resección completa de implantes preservando reserva ovárica', route: 'Laparoscópica', freq: 'Única', notes: 'Indicada en endometriomas > 4-5 cm, dolor refractario a fármacos o sospecha de obstrucción intestinal/ureteral' }
    ],
    nonPharm: ['Alimentación antiinflamatoria, ejercicio físico y apoyo por asociaciones de pacientes con endometriosis'],
    nursingCare: ['APOYO EMOCIONAL Y VALIDACIÓN DEL DOLOR: La paciente con endometriosis típicamente sufre años de incomprensión ("te duele porque eres mujer"); enfermería debe legitimar su síntoma y educar sobre la enfermedad', 'Enseñar la importancia de la toma continua sin descansos del dienogest para evitar manchados intermenstruales', 'Monitoreo de la función renal con ecografía periódica en endometriosis profunda (descartar atrapamiento ureteral)', 'Derivación oportuna a centros de fertilidad si la mujer desea gestar']
  },
  {
    number: 305,
    id: 'diag-305',
    title: 'Adenomiosis uterina',
    cie10: 'N80.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno ginecológico benigno caracterizado por la presencia ectópica de glándulas y estroma endometrial en el espesor del miometrio uterino (infiltración profunda > 2.5 mm de la lámina basal miometrial), lo que induce hipertrofia e hiperplasia del músculo liso circundante.',
    symptoms: ['Útero globalmente aumentado de tamaño, difuso, esférico ("útero globuloso") y doloroso a la palpación bimanual', 'Menorragia / Sangrado menstrual profuso y prolongado con expulsión de coágulos', 'Dismenorrea secundaria progresiva severa que empeora con los años', 'Dispareunia profunda y sensación de pesadez pélvica crónica', 'Frecuente asociación con miomas (en 30-50%) o endometriosis'],
    redFlags: ['Anemia ferropénica severa sintomática con repercusión hemodinámica'],
    criteria: 'Criterios ecográficos MUSA (Morphological Uterus Sonographic Assessment) para adenomiosis en ecografía transvaginal o confirmación por Resonancia Magnética.',
    labTests: ['Hemograma y perfil férrico (ferritina sérica para descartar ferropenia oculta)'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL 2D/3D (Criterios MUSA: asimetría miometrial entre pared anterior y posterior, quistes miometriales subendometriales anecoicos, sombras acústicas lineales "en abanico" o "lluvia" y engrosamiento heterogéneo de la zona de unión)', 'Resonancia Magnética de pelvis (gold standard no invasivo: zona de unión miometrial > 12 mm confirma adenomiosis)'],
    differential: ['Miomatosis uterina intramural', 'Endometriosis pélvica', 'Hiperplasia endometrial'],
    firstLine: [
      { drug: 'Dispositivo Intrauterino liberador de Levonorgestrel (DIU-LNG 52 mg / Mirena) - Primera elección médica', dose: 'Implante intrauterino mantenido hasta 5 a 8 años', route: 'Intrauterino', freq: 'Única', notes: 'Atrofia el tejido adenomiósico local miometrial, reduciendo el sangrado en > 80% y el volumen uterino' },
      { drug: 'Dienogest oral continuo', dose: '2 mg/día VO continuo', route: 'VO', freq: 'c/24h', notes: 'Alivio del dolor y control del sangrado en mujeres que no desean DIU' }
    ],
    alternatives: [
      { drug: 'Histerectomía total (laparoscópica o abdominal)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'ÚNICO TRATAMIENTO CURATIVO DEFINITIVO; indicado en mujeres con paridad satisfecha, síntomas severos y refractariedad médica' },
      { drug: 'Embolización de arterias uterinas (EAU) o Ultrasonido Focalizado de Alta Intensidad (HIFU)', dose: 'Procedimiento intervencionista mínimamente invasivo', route: 'Intervencionista', freq: 'Única', notes: 'Alternativa conservadora del útero para reducir sangrado y volumen' }
    ],
    nonPharm: ['Suplementación con hierro oral en ayunas y analgésicos AINEs durante las menstruaciones'],
    nursingCare: ['Explicar a la paciente la diferencia anatómica entre miomas (tumores delimitados) y adenomiosis (infiltración difusa del músculo uterino)', 'Vigilancia de síntomas de anemia y cumplimiento del tratamiento férrico', 'En pacientes portadoras de DIU-LNG: tranquilizar sobre el spotting o manchado leve en los primeros 3 meses de adaptación']
  },
  {
    number: 306,
    id: 'diag-306',
    title: 'Miomatosis uterina',
    cie10: 'D25.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Leiomiomas uterinos: tumores benignos monoclonales del músculo liso miometrial y matriz colágena extracelular, dependientes de estrógenos y progesterona, constituyendo la neoplasia ginecológica sólida más frecuente de la mujer en edad reproductiva (presentes en el 40-70% de mujeres). Se clasifican según la FIGO del tipo 0 al tipo 8 según su localización submucosa, intramural o subserosa.',
    symptoms: ['Gran número de casos son asintomáticos y detectados incidentalmente', 'Sangrado uterino anormal típico de tipo Menorragia (sangrado menstrual excesivo, prolongado y con coágulos, característico de miomas submucosos e intramurales)', 'Sensación de peso y masa palpable en hipogastrio (en miomas de gran volumen)', 'Síntomas compresivos pélvicos: polaquiuria y tenesmo por compresión vesical, estreñimiento por compresión rectal, o hidronefrosis por compresión ureteral', 'Dolor agudo por degeneración roja / necrobiosis (típica durante el embarazo) o por torsión de un mioma subseroso pediculado'],
    redFlags: ['Degeneración sarcomatosa maligna (Leiomiosarcoma: sospechar ante crecimiento muy rápido en mujer posmenopáusica)', 'Torsión de mioma pediculado'],
    criteria: 'Palpación bimanual de útero agrandado con contornos multinodulares irregulares indoloros + Ecografía transvaginal/pélvica confirmatoria.',
    labTests: ['Hemograma completo (anemia microcítica hipocrómica por pérdidas menstruales crónicas)', 'Test de embarazo'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL Y PÉLVICA (método de elección diagnóstica: nódulos esféricos hipoecoicos bien delimitados con sombras acústicas laterales)', 'Histerosonografía con infusión salina (gold standard para evaluar la invasión intracavitaria de miomas submucosos tipos 0, 1 y 2 de la FIGO)', 'Resonancia Magnética pélvica (para mapeo topográfico previo a miomectomía múltiple)'],
    differential: ['Embarazo normal', 'Adenomiosis uterina', 'Tumor de ovario sólido', 'Leiomiosarcoma uterino'],
    firstLine: [
      { drug: 'Manejo farmacológico del sangrado: DIU liberador de Levonorgestrel o Ácido Tranexámico oral', dose: 'DIU-LNG 52 mg (en miomas que no distorsionen severamente la cavidad) o Ácido Tranexámico 1 g cada 8 horas VO durante el sangrado', route: 'Intrauterino / VO', freq: 'Reglado', notes: 'Alivian la hipermenorrea y corrigen la anemia' },
      { drug: 'Tratamiento Quirúrgico de elección según deseos de fertilidad: Miomectomía (histeroscópica en submucosos, o laparoscópica/abierta en intramurales/subserosos)', dose: 'Procedimiento quirúrgico conservador del útero', route: 'Quirúrgica conservadora', freq: 'Única', notes: 'De elección indiscutible en mujeres que desean preservar la fertilidad o el útero' }
    ],
    alternatives: [
      { drug: 'Histerectomía total (laparoscópica o abdominal)', dose: 'Cirugía resectiva definitiva', route: 'Quirúrgica', freq: 'Única', notes: 'Tratamiento definitivo en mujeres con paridad satisfecha y miomatosis sintomática severa' },
      { drug: 'Embolización de arterias uterinas (EAU)', dose: 'Procedimiento endovascular por cateterismo femoral', route: 'Intervencionista', freq: 'Única', notes: 'Induce isquemia y reducción del 40-50% del volumen de los miomas; alternativa sin cirugía' }
    ],
    nonPharm: ['Suplementación con hierro oral o carboximaltosa férrica EV para recuperar hemoglobina preoperatoria'],
    nursingCare: ['Monitoreo riguroso de hemoglobina y signos de anemia crónica', 'Consejería reproductiva: explicar que los miomas submucosos alteran la implantación embrionaria y su resección histeroscópica mejora las tasas de gestación', 'Cuidados postoperatorios de miomectomía o histerectomía: control de sangrado vaginal, deambulación temprana asistida y profilaxis tromboembólica']
  },
  {
    number: 307,
    id: 'diag-307',
    title: 'Síndrome de ovario poliquístico',
    cie10: 'E28.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno endocrino y metabólico heterogéneo y prevalente en mujeres en edad fértil (8-13%), caracterizado por la tríada de hiperandrogenismo (clínico o bioquímico), disfunción ovulatoria (oligo-anovulación) y morfología ovárica poliquística ecográfica, íntimamente ligado a resistencia a la insulina.',
    symptoms: ['Trastornos menstruales: oligomenorrea (ciclos > 35 días o < 9 periodos al año) o amenorrea secundaria crónica', 'Signos clínicos de hiperandrogenismo:', '- Hirsutismo (exceso de vello terminal en áreas andrógeno-dependientes masculinas: bozo, barbilla, pecho, línea alba, muslos)', '- Acné vulgar inflamatorio moderado a severo y piel grasa seborreica', '- Alopecia androgénica con rarefacción en la coronilla', 'Sobrepeso u obesidad centrípeta y Acantosis nigricans en cuello y axilas', 'Infertilidad anovulatoria'],
    redFlags: ['Hiperplasia y Cáncer de Endometrio por estímulo estrogénico continuo sin oposición de progesterona en amenorrea crónica', 'Diabetes mellitus tipo 2 y síndrome metabólico'],
    criteria: 'Criterios de Rotterdam revisados (al menos 2 de los 3 siguientes, tras excluir otras causas): 1. Oligo o anovulación; 2. Hiperandrogenismo clínico (Escala de Ferriman-Gallwey ≥ 4-8) y/o bioquímico; 3. Ovarios poliquísticos en ecografía (≥ 20 folículos de 2-9 mm por ovario o volumen ovárico > 10 mL).',
    labTests: ['Testosterona total, Testosterona libre y DHEA-S', 'FSH y LH séricas (frecuente relación LH/FSH > 2:1)', 'Glucemia en ayunas, prueba de tolerancia oral a la glucosa (PTOG 75g) y perfil lipídico', '17-hidroxiprogesterona (descarte de hiperplasia suprarrenal congénita no clásica), TSH y Prolactina'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL GINECOLÓGICA (distribución periférica de múltiples microfolículos en "collar de perlas" con estroma central aumentado)'],
    differential: ['Hiperplasia suprarrenal congénita de inicio tardío', 'Tumor ovárico o suprarrenal secretor de andrógenos', 'Síndrome de Cushing', 'Hiperprolactinemia'],
    firstLine: [
      { drug: 'Cambios intensivos del estilo de vida (Pilar angular de primer nivel)', dose: 'Dieta con bajo índice glucémico + Ejercicio físico regular aeróbico y de fuerza ≥ 150 min/semana para pérdida del 5-10% del peso corporal', route: 'Estilo de vida', freq: 'Permanente', notes: 'La reducción del 5-10% del peso restaura la ovulación espontánea y regulariza los ciclos en > 50% de las pacientes' },
      { drug: 'Anticonceptivos Hormonales Combinados (ACO con progestágeno antiandrogénico: Acetato de Ciproterona o Drospirenona o Dienogest)', dose: '1 comprimido diario VO por ciclos de 21 días', route: 'VO', freq: 'c/24h', notes: 'Tratamiento de primera línea para regularizar ciclos, proteger el endometrio de hiperplasia y frenar el hirsutismo/acné' },
      { drug: 'Metformina oral en resistencia a la insulina o intolerancia a glucosa', dose: '500 a 850 mg cada 12 horas VO con las comidas', route: 'VO con alimentos', freq: 'c/12h', notes: 'Mejora la sensibilidad a la insulina, reduce hiperandrogenismo y facilita la ovulación' }
    ],
    alternatives: [
      { drug: 'Espironolactona (antiandrógeno antagonista del receptor)', dose: '50 a 100 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Excelente para hirsutismo refractario tras 6 meses de ACO; requiere anticoncepción obligatoria por teratogenicidad' },
      { drug: 'Letrozol (inhibidor de aromatasa) de primera línea para inducción de la ovulación en mujeres que desean gestar', dose: '2.5 a 7.5 mg/día VO del día 3 al 7 del ciclo', route: 'VO', freq: 'Por ciclo', notes: 'Superior al citrato de clomifeno en tasas de recién nacido vivo en SOP' }
    ],
    nonPharm: ['Depilación láser o electrólisis coadyuvante para el vello existente'],
    nursingCare: ['EVALUACIÓN DEL HIRSUTISMO con la Escala de Ferriman-Gallwey en 9 zonas corporales', 'Consejería nutricional motivacional y fomento de la actividad física regular', 'Instruir que el tratamiento médico del hirsutismo requiere al menos 6 a 9 meses continuos para evidenciar mejoría visible (debido al ciclo biológico del folículo piloso)', 'Advertir sobre la necesidad vital de inducir sangrado por deprivación al menos cada 2-3 meses con progestágenos si no usa anticonceptivos, para prevenir hiperplasia de endometrio']
  },
  {
    number: 308,
    id: 'diag-308',
    title: 'Quistes ováricos funcionales',
    cie10: 'N83.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Formaciones quísticas benignas originadas a partir del aparato folicular del ovario en mujeres en edad fértil como consecuencia de una alteración fisiológica en la ovulación, divididas en Quistes Foliculares (folículo de De Graaf que no se rompe y continúa creciendo) y Quistes del Cuerpo Lúteo (cuerpo lúteo que no involuciona y se llena de líquido o sangre).',
    symptoms: ['La gran mayoría son completamente asintomáticos y de regresión espontánea', 'Dolor sordo o pesadez unilateral leve en la fosa ilíaca o hipogastrio', 'Retraso menstrual transitorio seguido de sangrado menstrual abundante', 'Dispareunia leve con penetración profunda'],
    redFlags: ['TORSIÓN OVÁRICA AGUDA (isquemia ovárica por torsión del pedículo sobre su eje)', 'ROTURA DE QUISTE DEL CUERPO LÚTEO CON HEMOPERITONEO MASIVO (abdomen agudo y shock hipovolémico)'],
    criteria: 'Hallazgo ecográfico de quiste ovárico unilocular, anecoico puro, de paredes delgadas y lisas, sin tabiques ni vegetaciones sólidas, con diámetro > 3.0 cm y < 8.0 cm en mujer en edad reproductiva.',
    labTests: ['Prueba de embarazo (hCG-beta cuantitativa) obligatoria para descartar gestación ectópica'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DOPPLER (confirma morfología benigna IOTA: unilocular, pared fina < 3 mm, sin ecos internos ni vascularización central)'],
    differential: ['Embarazo ectópico', 'Apendicitis aguda', 'Cistoadenoma seroso o mucinoso ovárico', 'Endometrioma'],
    firstLine: [
      { drug: 'CONDUCTA EXPECTANTE CON CONTROL ECOGRÁFICO EN 8 A 12 SEMANAS (Pilar de Oro)', dose: 'Reevaluación ecográfica transvaginal tras 1 a 2 ciclos menstruales posteriores', route: 'Observación', freq: 'En 2-3 meses', notes: 'Más del 80-90% de los quistes funcionales se resuelven espontáneamente por reabsorción sin necesidad de cirugía ni medicamentos' },
      { drug: 'AINEs orales para el control del dolor leve a moderado (Ibuprofeno)', dose: '400 a 600 mg cada 8 horas VO con las comidas por 3 a 5 días', route: 'VO', freq: 'c/8h SOS', notes: 'Alivio analgésico sintomático' }
    ],
    alternatives: [
      { drug: 'Cistectomía ovárica laparoscópica o laparotomía de urgencia', dose: 'Procedimiento quirúrgico de emergencia', route: 'Quirúrgica de urgencia', freq: 'Urgente', notes: 'INDICADA DE EMERGENCIA ante rotura con hemoperitoneo inestable o torsión ovárica aguda; o electiva si el quiste persiste > 3 meses o mide > 8-10 cm' }
    ],
    nonPharm: ['Reposo relativo y evitar relaciones sexuales bruscas o ejercicio extenuante mientras el quiste esté presente (para prevenir rotura)'],
    nursingCare: ['Tranquilizar a la paciente explicándole claramente que un "quiste funcional" es un evento benigno transitorio propio de la ovulación y NO es cáncer', 'EDUCACIÓN DE ALERTA MÉDICA: Instruir a la paciente a acudir de inmediato a Urgencias ante la aparición de dolor pélvico agudo, punzante, brusco e intolerable acompañado de mareos, palidez o vómitos (signos de alarma de torsión ovárica o rotura hemorrágica)', 'Verificar la asistencia a la ecografía de control tras la regla']
  },
  {
    number: 309,
    id: 'diag-309',
    title: 'Enfermedad Pélvica Inflamatoria',
    cie10: 'N73.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección ascendente del tracto genital femenino superior que comprende endometritis, salpingitis, ooforitis, peritonitis pélvica y absceso tubo-ovárico (ATO), originada predominantemente por patógenos de transmisión sexual (Chlamydia trachomatis, Neisseria gonorrhoeae) y flora entérica polimicrobiana.',
    symptoms: ['Dolor pélvico e hipogástrico bilateral continuo sordo que aumenta con el movimiento y el coito', 'Leucorrea vaginal anormal purulenta, amarillenta-verdosa y fétida', 'Fiebre (> 38 °C), escalofríos y malestar general', 'Sangrado uterino anormal intermenstrual o postcoital', 'Dolor exquisito y vivo a la MOVILIZACIÓN DEL CUELLO UTERINO ("signo del candelabro / signo de Frenkel")', 'Dolor a la palpación bimanual anexial bilateral'],
    redFlags: ['Rotura de Absceso Tubo-Ovárico (ATO) con peritonitis generalizada y shock séptico (emergencia quirúrgica)', 'Síndrome de Fitz-Hugh-Curtis (perihepatitis con adherencias en "cuerdas de violín" y dolor en hipocondrio derecho)'],
    criteria: 'Criterios CDC: Presencia de dolor a la palpación uterina o anexial o a la movilización cervical en mujer con factores de riesgo de ITS + al menos 1 criterio adicional (fiebre > 38.3 °C, secreción mucopurulenta cervical, leucocitos en frotis vaginal, PCR/VSG elevadas o confirmación por PCR de ITS).',
    labTests: ['NAAT / PCR cervical o vaginal para Chlamydia trachomatis y Neisseria gonorrhoeae', 'Examen en fresco de flujo vaginal (leucocitos abundantes)', 'PCR y VSG elevadas, hemograma con leucocitosis', 'Test de embarazo (descarte de ectópico)'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL (engrosamiento y dilatación tubárica con trompa de Falopio de paredes gruesas llena de líquido anecoico o ecogénico: hidrosálpinx / piosálpinx; masa multiloculada heterogénea en absceso tubo-ovárico)'],
    differential: ['Apendicitis aguda (dolor circunscrito a fosa ilíaca derecha)', 'Embarazo ectópico', 'Torsión ovárica', 'Endometriosis'],
    firstLine: [
      { drug: 'Tratamiento ambulatorio en EPI leve a moderada: Ceftriaxona + Doxiciclina + Metronidazol (Guías CDC/MINSA)', dose: 'Ceftriaxona 500 mg IM monodosis profunda + Doxiciclina 100 mg cada 12 horas VO por 14 días + Metronidazol 500 mg cada 12 horas VO por 14 días', route: 'IM + VO', freq: 'Reglado x 14 días', notes: 'Esquema de cobertura polimicrobiana estricta de 14 días continuos' },
      { drug: 'Tratamiento hospitalario parenteral en EPI grave o absceso tubo-ovárico: Ceftriaxona + Doxiciclina + Metronidazol EV', dose: 'Ceftriaxona 1 a 2 g/día EV + Doxiciclina 100 mg c/12h EV/VO + Metronidazol 500 mg c/8h EV hasta 24-48h de mejoría clínica franca', route: 'EV', freq: 'Reglado', notes: 'Indicado si hay ATO, náuseas/vómitos incoercibles, embarazo o falta de respuesta oral en 72h' }
    ],
    alternatives: [
      { drug: 'Ampicilina/Sulbactam + Doxiciclina o Clindamicina + Gentamicina EV', dose: 'Clindamicina 900 mg c/8h EV + Gentamicina 5 mg/kg/día EV', route: 'EV', freq: 'Reglado', notes: 'Esquema hospitalario alternativo clásico con excelente cobertura anaeróbica' }
    ],
    nonPharm: ['Abstinence sexual absoluta hasta completar el tratamiento y resolución de los síntomas', 'TRATAMIENTO OBLIGATORIO DE LA PAREJA SEXUAL'],
    nursingCare: ['MANIOBRA DE FRENKEL: Registrar con delicadeza la respuesta al examen pélvico con movilización lateral del cérvix (el dolor vivo es altamente orientador)', 'Verificar el cumplimiento ininterrumpido de los 14 días de Doxiciclina y Metronidazol (evitar secuelas de esterilidad tubárica y dolor crónico)', 'Instruir que durante el tratamiento con Metronidazol está ESTRICTAMENTE PROHIBIDO EL CONSUMO DE ALCOHOL (efecto antabús o disulfiram: náuseas violentas, taquicardia y enrojecimiento)', 'Garantizar el tratamiento simultáneo de la pareja sexual']
  },
  {
    number: 310,
    id: 'diag-310',
    title: 'Vulvovaginitis candidiásica',
    cie10: 'B37.3',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección micótica de la mucosa vaginal y vulvar originada en el 85-90% de los casos por Candida albicans, favorecida por factores que alteran el ecosistema vaginal de lactobacilos (uso de antibióticos previos, diabetes descompensada, embarazo, anticonceptivos o inmunosupresión).',
    symptoms: ['PRURITO VULVAR Y VAGINAL INTENSO, constante y desesperante', 'LEUCORREA CARACTERÍSTICA: flujo vaginal blanquecino, espeso, grumoso, no fétido, adherido a las paredes vaginales ("aspecto de leche cortada, yogur o requesón")', 'Disuria externa (dolor al contacto de la orina con la piel vulvar erosionada)', 'Dispareunia intromisional superficial dolorosa', 'Eritema vulvar marcado, edema labial y pequeñas fisuras o excoriaciones por rascado'],
    redFlags: ['Candidiasis vulvovaginal recurrente (≥ 4 episodios confirmados al año): tamizaje obligatorio de Diabetes Mellitus o VIH'],
    criteria: 'Clínica típica con prurito y flujo grumoso + pH vaginal normal (ácido ≤ 4.5) + visualización directa en fresco con KOH al 10% de hifas y blastoconidias gemantes.',
    labTests: ['Examen en fresco con solución salina y preparación con KOH al 10% (prueba de aminas negativa)', 'Medición del pH vaginal con tira reactiva (pH ácido normal ≤ 4.5; si es > 4.5 sospechar vaginosis o tricomoniasis)', 'Cultivo micológico en agar Sabouraud en casos recurrentes o refractarios (descarte de Candida glabrata)'],
    imaging: ['No requerida'],
    differential: ['Vaginosis bacteriana (flujo grisáceo fétido con olor a pescado y pH > 4.5)', 'Tricomoniasis vaginal (flujo espumoso amarillo-verdoso con cérvix en fresa)', 'Dermatitis vulvar por contacto'],
    firstLine: [
      { drug: 'Tratamiento oral monodosis: Fluconazol oral', dose: '150 mg VO en dosis única (en casos severos repetir segunda dosis de 150 mg a las 72 horas)', route: 'VO monodosis', freq: 'Dosis única', notes: 'Curación clínica y micológica en > 90%; CONTRAINDICADO EN EL EMBARAZO' },
      { drug: 'Tratamiento tópico de elección en GESTANTES: Clotrimazol vaginal', dose: 'Óvulo vaginal de 100 mg cada noche por 7 días consecutivos (o crema vaginal al 1% por 7 noches)', route: 'Vaginal nocturna', freq: 'c/24h x 7 noches', notes: 'Seguro en todos los trimestres del embarazo; no usar fluconazol oral en gestantes' }
    ],
    alternatives: [
      { drug: 'Miconazol o Fenticonazol óvulos', dose: 'Miconazol 200 mg óvulo vaginal por 3 noches', route: 'Vaginal', freq: 'c/24h x 3 días', notes: 'Alternativa tópica eficaz' },
      { drug: 'Régimen de mantenimiento en candidiasis recurrente: Fluconazol semanal', dose: 'Fluconazol 150 mg VO una vez por semana durante 6 meses completos', route: 'VO semanal', freq: 'Semanal x 6 meses', notes: 'Previene recaídas en candidiasis crónica recidivante' }
    ],
    nonPharm: ['Uso exclusivo de ropa interior de algodón holgada (evitar licras y materiales sintéticos que retienen humedad y calor)', 'Evitar duchas vaginales, protectores diarios continuos y jabones perfumados'],
    nursingCare: ['NO TRATAR RUTINARIAMENTE A LA PAREJA SEXUAL ASINTOMÁTICA (la candidiasis vaginal NO se clasifica como una ITS clásica, es una disbiosis endógena por oportunismo micótico)', 'Técnica de colocación de óvulos vaginales: acostada en decúbito supino con piernas flexionadas antes de dormir e introducirlos profundamente con aplicador o guante', 'Tamizaje de glucosa capilar en toda mujer con candidiasis recurrente', 'Educación para evitar la automedicación indiscriminada']
  },
  {
    number: 311,
    id: 'diag-311',
    title: 'Vaginosis bacteriana',
    cie10: 'N76.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Disbiosis del ecosistema vaginal caracterizada por el reemplazo masivo de la flora normal de lactobacilos productores de peróxido de hidrógeno (Lactobacillus crispatus) por una proliferación mixta de bacterias anaerobias facultativas y estrictas (Gardnerella vaginalis, Atopobium vaginae, Prevotella, Mobiluncus).',
    symptoms: ['Secreción vaginal (leucorrea) homogénea, fluida, fina, de color blanco-grisáceo que tapiza uniformemente las paredes vaginales', 'OLOR FÉTIDO VAGINAL CARACTERÍSTICO "A PESCADO DESCOMPUESTO" (olor a aminas que se intensifica notablemente después del coito y durante la menstruación por la alcalinización)', 'AUSENCIA TÍPICA DE SIGNOS INFLAMATORIOS en mucosa vulvar o vaginal (no hay eritema ni edema franco, por eso es "vaginosis" y no "vaginitis")', 'Prurito mínimo o ausente'],
    redFlags: ['EN GESTANTES: Aumento significativo del riesgo de Rotura Prematura de Membranas (RPM), Parto Pretérmino, corioamnionitis y endometritis puerperal'],
    criteria: 'Criterios clínicos de Amsel (requiere al menos 3 de los 4 siguientes): 1. Flujo vaginal homogéneo blanco-grisáceo; 2. Células clave o "Clue cells" en frotis fresco (> 20%); 3. pH vaginal alcalino > 4.5; 4. Test de aminas positivo (Whiff test: olor a pescado al añadir KOH 10%).',
    labTests: ['Examen en fresco con solución salina: CLUE CELLS (células epiteliales descamadas con bordes difusos oscurecidos totalmente cubiertos de cocobacilos adheridos)', 'Medición del pH vaginal con tira reactiva (pH > 4.5 constante)', 'Prueba de liberación de aminas con KOH al 10% (Whiff test positivo patognomónico)', 'Tinción Gram con puntuación de Nugent (Score 7-10 confirma vaginosis)'],
    imaging: ['No requerida'],
    differential: ['Tricomoniasis vaginal', 'Candidiasis vulvovaginal', 'Flujo vaginal fisiológico'],
    firstLine: [
      { drug: 'Metronidazol oral (Primera línea según guías CDC/MINSA)', dose: '500 mg cada 12 horas VO con comidas durante 7 días consecutivos', route: 'VO con alimentos', freq: 'c/12h x 7 días', notes: 'Tasa de curación clínica > 85-90%; evitar alcohol por efecto antabús' },
      { drug: 'Metronidazol gel vaginal al 0.75%', dose: '1 aplicador lleno (5 g) intravaginal una vez al día al acostarse por 5 días', route: 'Vaginal', freq: 'c/24h x 5 noches', notes: 'Excelente opción con menor tasa de efectos secundarios gastrointestinales' }
    ],
    alternatives: [
      { drug: 'Clindamicina en crema vaginal al 2% o Clindamicina oral', dose: 'Clindamicina crema 1 aplicador intravaginal al acostarse por 7 días o 300 mg c/12h VO por 7 días', route: 'Vaginal / VO', freq: 'Reglado', notes: 'Alternativa de elección en alérgicas o intolerantes al metronidazol' }
    ],
    nonPharm: ['NO SE RECOMIENDA EL TRATAMIENTO DE LA PAREJA MASCULINA DE RUTINA (no reduce la tasa de recurrencias)'],
    nursingCare: ['WHIFF TEST: Colocar una gota de flujo vaginal en un portaobjetos, añadir una gota de KOH al 10% y oler inmediatamente; la liberación de olor fétido a pescado descompuesto confirma el test', 'Advertir sobre la prohibición absoluta de bebidas alcohólicas durante el tratamiento con metronidazol y hasta 48h después', 'En mujeres gestantes con antecedentes de parto pretérmino: tamizaje precoz y tratamiento oportuno para prevenir prematuridad']
  },
  {
    number: 312,
    id: 'diag-312',
    title: 'Tricomoniasis vaginal',
    cie10: 'A59.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Infección de transmisión sexual (ITS) causada por el protozoo flagelado unicelular móvil Trichomonas vaginalis, que coloniza el epitelio escamoso del tracto urogenital femenino (vagina, uretra, glándulas de Skene y Bartholino) y masculino.',
    symptoms: ['Leucorrea vaginal profusa, espumosa, aireada, fluida y de coloración amarillenta o verdosa con olor desagradable', 'Prurito vulvovaginal intenso, ardor y escozor genital', 'Disuria y polaquiuria', 'Dispareunia dolorosa severa', 'CÉRVIX CON ASPECTO "EN FRESA" (colpitis macular con petequias punteadas eritematosas en cuello uterino y vagina en el 20-30% de casos)', 'En varones: habitualmente asintomática o como uretritis leve'],
    redFlags: ['Facilita la transmisión y adquisición del Virus de Inmunodeficiencia Humana (VIH) y favorece parto prematuro'],
    criteria: 'Visualización directa de trofozoítos móviles flagelados en el examen microscópico en fresco o detección molecular por PCR / NAAT.',
    labTests: ['Examen en fresco con solución salina: visualización inmediata de TRICOMONAS MÓVILES FLAGELADAS con movimiento ondulatorio rápido y gran cantidad de leucocitos PMN', 'NAAT / PCR molecular (gold standard de máxima sensibilidad > 95-98%)', 'Medición de pH vaginal (marcadamente alcalino > 5.0 - 6.0)', 'Tamizaje serológico completo de otras ITS (VIH, Sífilis, Hepatitis B)'],
    imaging: ['No requerida'],
    differential: ['Vaginosis bacteriana', 'Candidiasis vaginal', 'Cervicitis gonocócica o por Chlamydia'],
    firstLine: [
      { drug: 'Metronidazol oral (Tratamiento de elección según guías CDC actuales)', dose: '500 mg cada 12 horas VO con comidas durante 7 días consecutivos (o Tinidazol 2 g VO monodosis)', route: 'VO con alimentos', freq: 'c/12h x 7 días', notes: 'El régimen de 7 días demostró ser significativamente superior a la monodosis clásica de 2 g en mujeres' }
    ],
    alternatives: [
      { drug: 'Tinidazol oral', dose: '2 g VO en dosis única con alimentos', route: 'VO monodosis', freq: 'Dosis única', notes: 'Alternativa con menor intolerancia gástrica' }
    ],
    nonPharm: ['TRATAMIENTO OBLIGATORIO Y SIMULTÁNEO DE TODAS LAS PAREJAS SEXUALES (infección de transmisión sexual estricta)', 'ABSTINENCIA SEXUAL ESTRICTA hasta que ambos miembros de la pareja hayan completado el tratamiento y estén asintomáticos'],
    nursingCare: ['REGLA CARDINAL DE ENFERMERÍA EN TRICOMONIASIS: Tratar obligatoriamente a la pareja sexual simultáneamente aunque no presente ningún síntoma (los varones suelen ser portadores asintomáticos en uretra y próstata que reinfectan a la mujer)', 'Recordar la prohibición estricta de ingesta de alcohol durante el tratamiento y hasta 72 horas después de la última dosis de metronidazol o tinidazol (reacción disulfirámica)', 'Ofertar asesoría y pruebas rápidas de tamizaje para VIH y Sífilis']
  },
  {
    number: 313,
    id: 'diag-313',
    title: 'Prolapsos genitales',
    cie10: 'N81.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Prolapso de Órganos Pélvicos (POP): descenso o protrusión anormal de uno o más compartimentos del suelo pélvico a través de la vagina debido al debilitamiento de los músculos elevadores del ano y de las fascias de soporte endopélvico, abarcando cistocele (prolapso de pared vaginal anterior/vejiga), rectocele (prolapso de pared posterior/recto) y enterocele (prolapso de fondo de saco con asas intestinales).',
    symptoms: ['Sensación de "bulto, pesadez o cuerpo extraño en la vagina" que asoma por el introito al caminar o pujar', 'Molestia pélvica sorda que empeora al final del día tras bipedestación prolongada', 'Síntomas urinarios en Cistocele: chorro débil, dificultad miccional, vaciado incompleto o necesidad de reducir manualmente el bulto con los dedos para poder orinar', 'Síntomas defecatorios en Rectocele: necesidad de realizar presión digital en la vagina o periné para completar la defecación (digitación vaginal)', 'Incontinencia urinaria o fecal asociada'],
    redFlags: ['Erosión, ulceración y sangrado de la mucosa vaginal evertida por roce mecánico continuo', 'Retención urinaria con hidronefrosis bilateral'],
    criteria: 'Cuantificación estandarizada del prolapso mediante el sistema POP-Q (Pelvic Organ Prolapse Quantification) en posición ginecológica durante la maniobra de Valsalva máxima (Estadios I a IV).',
    labTests: ['Examen de orina y urocultivo (frecuentes ITUs por residuo postmiccional)'],
    imaging: ['Ecografía perineal o del suelo pélvico', 'Estudio urodinámico previo a cirugía si coexiste incontinencia'],
    differential: ['Quiste de la glándula de Bartholino', 'Quiste del conducto de Gartner', 'Pólipo o mioma naciente'],
    firstLine: [
      { drug: 'Manejo conservador en Estadios I y II sintomáticos: Entrenamiento de los Músculos del Suelo Pélvico (EMSP / Ejercicios de Kegel supervisados por fisioterapeuta)', dose: '3 series diarias de contracciones perineales sostenidas por al menos 3 a 6 meses', route: 'Fisioterapia física', freq: 'Diario permanente', notes: 'Fortalece el soporte muscular del elevador del ano y frena la progresión del prolapso' },
      { drug: 'Uso de Pesario Vaginal (de anillo o de Gellhorn)', dose: 'Dispositivo de silicona médica adaptado e insertado en la vagina', route: 'Vaginal mecánico', freq: 'Permanente', notes: 'Alternativa conservadora de primera línea muy eficaz que reposiciona los órganos sin cirugía' }
    ],
    alternatives: [
      { drug: 'Corrección quirúrgica reconstructiva: Colporrafia anterior (para cistocele) y/o Colporrafia posterior (para rectocele)', dose: 'Cirugía de reparación tisular por vía vaginal', route: 'Quirúrgica vaginal', freq: 'Única', notes: 'Indicada en prolapsos avanzados (estadios III y IV) sintomáticos o cuando fracasa el pesario' }
    ],
    nonPharm: ['Control y tratamiento del estreñimiento crónico con fibra y laxantes (evitar pujos)', 'Reducción de peso en obesidad y evitar levantar cargas pesadas > 5-10 kg'],
    nursingCare: ['EDUCACIÓN Y ENSEÑANZA DE LOS EJERCICIOS DE KEGEL: Instruir a la paciente a contraer los músculos del suelo pélvico como si intentara "cortar la orina o evitar la salida de gases", manteniendo la contracción 5-10 segundos y relajando, sin contraer glúteos ni abdomen', 'Cuidados del pesario: instrucciones sobre retiro, lavado con agua y jabón y reinserción periódica', 'Uso de cremas de estrógenos locales (estriol) en mujeres postmenopáusicas para mejorar el trofismo de la mucosa vaginal y prevenir úlceras por el pesario']
  },
  {
    number: 314,
    id: 'diag-314',
    title: 'Prolapso uterino',
    cie10: 'N81.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Descenso patológico del útero y del cuello uterino a través del canal vaginal como resultado del fallo del aparato de fijación y suspensión pélvica (ligamentos uterosacros y cardinales de Mackenrodt), que puede variar desde descenso leve hasta la eversión total del útero fuera del introito vulvar (Histerocele estadio IV o Procedencia total).',
    symptoms: ['Sensación evidente de masa o útero protruyendo hacia el exterior de los genitales', 'Dolor sordo y constante en la región lumbosacra que empeora al estar de pie y alivia al acostarse', 'Dificultad mecánica severa para la deambulación y el sentado', 'Ulceración de la mucosa del cuello uterino evertido con sangrado serosanguinolento y flujo fétido por roce con la ropa'],
    redFlags: ['Prolapso uterino total con ulceración infectada', 'Incarceración uterina e hidronefrosis obstructiva por acodamiento de los uréteres'],
    criteria: 'Gradación POP-Q del punto C (cuello uterino) o D (fondo de saco) con maniobra de Valsalva.',
    labTests: ['Examen de orina y cultivo de secreción si la mucosa está erosionada'],
    imaging: ['Ecografía renal si hay prolapso total (descarte de hidronefrosis por tracción ureteral)'],
    differential: ['Mioma uterino pediculado parido a través del orificio cervical (mioma naciente)', 'Inversión uterina', 'Elongación hipertrófica congénita del cuello uterino sin prolapso de cuerpo'],
    firstLine: [
      { drug: 'Tratamiento Quirúrgico reconstructivo u obliterativo definitivo:', dose: 'Histerectomía vaginal con suspensión de la cúpula a los ligamentos uterosacros (o Fijación sacroespinosa); o Colpocleisis de Le Fort en ancianas frágiles', route: 'Quirúrgica vaginal', freq: 'Única', notes: 'Restaura la anatomía pélvica y alivia completamente los síntomas mecánicos' }
    ],
    alternatives: [
      { drug: 'Pesarios de soporte vaginal (Pesario de Gellhorn o Donut)', dose: 'Dispositivo mecánico de silicona colocado en consulta', route: 'Vaginal', freq: 'Permanente', notes: 'De elección en pacientes de edad muy avanzada con comorbilidades quirúrgicas o que rechazan la cirugía' }
    ],
    nonPharm: ['Tratamiento de úlceras por decúbito previas a cirugía con estrógenos tópicos y gasas vaselinadas'],
    nursingCare: ['CUIDADO DE LA MUCOSA UTERINA EVERTIDA: Aplicación de cremas de estrógenos conjugados locales y apósitos estériles vaselinados para epitelizar las úlceras del cérvix antes de cualquier intervención quirúrgica', 'Enseñanza sobre higiene y manejo del pesario vaginal', 'Cuidados de sonda vesical en el postoperatorio de histerectomía vaginal']
  },
  {
    number: 315,
    id: 'diag-315',
    title: 'Incontinencia urinaria esfuerzo',
    cie10: 'N39.3',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Pérdida involuntaria de orina sincrónica y asociada a un esfuerzo físico, estornudo, tos, risa o levantamiento de peso, debida a la hipermovilidad uretral por fallo del soporte del suelo pélvico o a una deficiencia esfinteriana intrínseca, sin contracción del músculo detrusor.',
    symptoms: ['Escape involuntario de orina que coincide exactamente con el momento del esfuerzo (toser, reír, estornudar, subir escaleras o saltar)', 'Ausencia de deseo miccional previo o urgencia antes del escape (a diferencia de la incontinencia de urgencia)', 'Uso crónico y progresivo de protectores o compresas higiénicas absorbentes'],
    redFlags: ['Impacto severo en la esfera social, deportiva y sexual con aislamiento personal'],
    criteria: 'Demostración objetiva del escape de orina sincrónico con la maniobra de Valsalva o tos con vejiga confortablemente llena durante el examen ginecológico (Prueba de esfuerzo positiva).',
    labTests: ['Examen completo de orina (descarte indispensable de infección urinaria aguda como factor desencadenante o agravante)'],
    imaging: ['Estudio urodinámico multicanal (presión de fuga uretral al esfuerzo - ALPP < 60 cmH2O indica deficiencia esfinteriana intrínseca; > 90 cmH2O indica hipermovilidad uretral)', 'Cistografía'],
    differential: ['Incontinencia urinaria de urgencia (Vejiga hiperactiva)', 'Incontinencia urinaria mixta', 'Incontinencia por rebosamiento'],
    firstLine: [
      { drug: 'Entrenamiento de la Musculatura del Suelo Pélvico (EMSP / Ejercicios de Kegel) - Primera línea indiscutible', dose: 'Al menos 8 a 12 contracciones de alta intensidad sostenidas 3 veces al día durante un mínimo de 3 a 6 meses supervisados por fisioterapeuta', route: 'Fisioterapia física', freq: 'Diario permanente', notes: 'Tasa de curación o mejoría clínica superior al 60-70%; sin ningún efecto adverso' }
    ],
    alternatives: [
      { drug: 'Cirugía de cabestrillo suburetral mediouretral con malla sintética (Mallas libres de tensión: TVT o TOT)', dose: 'Procedimiento quirúrgico mínimamente invasivo ambulatorio', route: 'Quirúrgica vaginal', freq: 'Única', notes: 'GOLD STANDARD QUIRÚRGICO con tasas de éxito y continencia > 85-90% a largo plazo' },
      { drug: 'Duloxetina oral (inhibidor dual de recaptación de serotonina y noradrenalina)', dose: '40 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Aumenta el tono esfinteriano por estimulación del núcleo de Onuf; alternativa si se rechaza cirugía' }
    ],
    nonPharm: ['Reducción de peso en sobrepeso/obesidad (la pérdida del 5-10% del peso reduce los escapes hasta un 50%)', 'Tratamiento del estreñimiento y de la tos crónica'],
    nursingCare: ['PRUEBA DE BONNEY / MARSHALL DE ENFERMERÍA: Paciente con vejiga llena tose mientras el examinador eleva suavemente el cuello vesical con dos dedos a través de la pared vaginal anterior sin comprimir la uretra; la detención del escape confirma hipermovilidad corregible', 'Educación intensiva y demostrativa de la técnica de Kegel: asegurar que no puje ni contraiga los músculos abdominales al realizar el ejercicio', 'Fomento de la hidratación equilibrada (evitar que la paciente restrinja drásticamente el agua por miedo a los escapes)']
  },
  {
    number: 316,
    id: 'diag-316',
    title: 'Vejiga hiperactiva',
    cie10: 'N32.81',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Síndrome clínico caracterizado por la presencia de URGENCIA MICCIONAL imperiosa y súbita, habitualmente acompañada de polaquiuria (≥ 8 micciones al día) y nicturia (≥ 2 micciones nocturnas), con o sin Incontinencia Urinaria de Urgencia (IUU), en ausencia de infección urinaria u otra patología metabólica o local demostrable.',
    symptoms: ['URGENCIA MICCIONAL (síntoma cardinal obligatorio): deseo súbito, apremiante, intenso e incontrolable de orinar que resulta muy difícil de postergar', 'Incontinencia de urgencia ("no llego a tiempo al baño y se me escapa la orina antes de llegar")', 'Polaquiuria diurna extrema y nicturia múltiple que interrumpe el sueño reparador', 'Pérdida de orina desencadenada por estímulos sensoriales (el sonido del agua corriendo o al llegar a la puerta de casa "síndrome de la llave en la cerradura")'],
    redFlags: ['Descarte obligatorio de Carcinoma Urotelial in situ de vejiga en fumadores con síntomas irritativos refractarios'],
    criteria: 'Síntomas característicos de urgencia con o sin incontinencia tras descartar formalmente ITU con urocultivo negativo.',
    labTests: ['Examen de orina y Urocultivo (obligatorio para descartar cistitis)', 'Glucemia (descarte de diabetes mellitus descompensada con glucosuria)'],
    imaging: ['Ecografía vesical con medición de Residuo Postmiccional (RPM normal < 50 mL)', 'Estudio urodinámico (demuestra contracciones involuntarias del músculo detrusor durante la fase de llenado: hiperactividad del detrusor)'],
    differential: ['Infección del tracto urinario', 'Cistitis intersticial', 'Carcinoma in situ vesical', 'Incontinencia de esfuerzo pura'],
    firstLine: [
      { drug: 'Entrenamiento vesical y modificación del estilo de vida (Primera línea obligatoria)', dose: 'Micción programada por horario (cada 2 horas inicialmente, espaciando gradualmente) + técnicas de supresión de la urgencia', route: 'Conductual', freq: 'Diario permanente', notes: 'Reeduca el control cortical sobre el reflejo miccional' },
      { drug: 'Agonistas beta-3 adrenérgicos: Mirabegrón (Fármaco de primera elección farmacológica)', dose: '25 a 50 mg/día VO en dosis única matutina', route: 'VO', freq: 'c/24h', notes: 'Relaja el músculo detrusor durante la fase de llenado; NO produce los molestos efectos anticolinérgicos (sequedad de boca/estreñimiento); controlar PA' },
      { drug: 'Anticolinérgicos / Antimuscarínicos: Solifenacina u Oxibutinina', dose: 'Solifenacina 5 a 10 mg/día VO o Oxibutinina 5 mg cada 8-12 horas VO', route: 'VO', freq: 'c/12-24h', notes: 'Bloquean receptores M2/M3 del detrusor; vigilar efectos secundarios anticolinérgicos' }
    ],
    alternatives: [
      { drug: 'Inyección intravesical de Toxina Botulínica tipo A (Bótox intravesical)', dose: '100 a 200 UI inyectadas por cistoscopía en 10-20 sitios del músculo detrusor respetando el trígono', route: 'Endoscópica', freq: 'c/6-9 meses', notes: 'Altamente eficaz en vejiga hiperactiva refractaria a fármacos' },
      { drug: 'Neuromodulación de raíces sacras (Marcapasos vesical)', dose: 'Implante de electrodo en raíz S3', route: 'Intervencionista', freq: 'Permanente', notes: 'Terapia de tercera línea' }
    ],
    nonPharm: ['ELIMINACIÓN DE IRRITANTES VESICALES: Supresión total de café, té negro, bebidas con cafeína, gaseosas, alcohol, edulcorantes artificiales y alimentos picantes', 'Restricción de líquidos a partir de las 19:00 horas para controlar la nicturia'],
    nursingCare: ['MANEJO DE LA DIARIO MICCIONAL DE 3 DÍAS: Instruir al paciente en registrar durante 72 horas continuas la hora de cada micción, el volumen orinado, la presencia de urgencia y los episodios de escape', 'TÉCNICA DE SUPRESIÓN DE URGENCIA: Enseñar que ante la urgencia súbita NO DEBE correr al baño (el movimiento estimula más al detrusor); debe detenerse, sentarse, realizar 5 contracciones rápidas de suelo pélvico (reflejo inhibitorio perineo-detrusoriano) y respirar hondo hasta que pase la ola de urgencia, y luego caminar calmadamente al baño', 'Control periódico de presión arterial con Mirabegrón']
  },
  {
    number: 317,
    id: 'diag-317',
    title: 'Infertilidad femenina',
    cie10: 'N97.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Incapacidad de una mujer para concebir tras 12 meses de relaciones sexuales regulares sin protección anticonceptiva (o tras 6 meses si tiene 35 años o más), originada por factores ovulatorios (SOP, fallo ovárico), factores tuboperitoneales (obstrucción tubárica post-EPI, endometriosis) o uterinos/cervicales.',
    symptoms: ['Incapacidad para lograr el embarazo deseado', 'Trastornos del ritmo menstrual (oligomenorrea, amenorrea) o ciclos regulares pero anovulatorios', 'Antecedente de dolor pélvico severo (endometriosis) o infecciones de transmisión sexual previas'],
    redFlags: ['Disminución drástica de la reserva ovárica en mujeres > 35-38 años (el factor edad femenina es el determinante biológico más crítico de éxito reproductivo)'],
    criteria: 'Falta de gestación clínica tras 1 año de búsqueda activa (o 6 meses en ≥ 35 años) con evaluación protocolizada de la pareja.',
    labTests: ['EVALUACIÓN DE LA RESERVA OVÁRICA: Hormona Antimülleriana (AMH sérica en cualquier día del ciclo; AMH < 1.0 ng/mL indica baja reserva) + FSH y Estradiol en día 3 del ciclo', 'Progesterona sérica en fase lútea media (día 21 del ciclo: > 3-5 ng/mL confirma ovulación)', 'TSH y Prolactina séricas', 'Serologías preconcepcionales regladas'],
    imaging: ['HISTEROSALPINGOGRAFÍA (HSG: prueba gold standard para verificar la permeabilidad tubárica bilateral y cavidad uterina)', 'Ecografía transvaginal con Recuento de Folículos Antrales (RFA en fase folicular temprana: RFA < 5-7 indica baja reserva ovárica)'],
    differential: ['Factor masculino asociado (debe evaluarse SIEMPRE simultáneamente con espermatograma)', 'Infertilidad de origen desconocido (10-15%)'],
    firstLine: [
      { drug: 'Tratamiento según factor etiológico causal: Inducción de la ovulación con Letrozol en anovulación / SOP', dose: '2.5 a 5.0 mg/día VO del día 3 al 7 del ciclo menstrual monitorizado con ecografía', route: 'VO', freq: 'Ciclos', notes: 'Fármaco inductor de ovulación de primera línea' },
      { drug: 'Fecundación In Vitro (FIV) con transferencia embrionaria', dose: 'Estimulación ovárica controlada con gonadotropinas + punción folicular + fecundación en laboratorio', route: 'Reproducción asistida', freq: 'Ciclos', notes: 'Indicada de primera línea en obstrucción tubárica bilateral, endometriosis severa, edad materna avanzada (> 38a) o factor masculino severo' }
    ],
    alternatives: [
      { drug: 'Inseminación Intrauterina (IIU)', dose: 'Capacitación espermática y depósito intrauterino', route: 'Reproducción asistida', freq: 'Ciclos', notes: 'En parejas jóvenes con trompas permeables y factor masculino leve' },
      { drug: 'Ovodonación (FIV con óvulos de donante joven)', dose: 'Tratamiento de alta complejidad', route: 'Biológica', freq: 'Según indicación', notes: 'En fallo ovárico prematuro o reserva ovárica agotada' }
    ],
    nonPharm: ['Suplementación preconcepcional universal con ÁCIDO FÓLICO 400 mcg/día (o 4 mg/día si antecedentes de defectos de tubo neural) al menos 1 a 3 meses antes de concebir', 'Mantenimiento de IMC saludable (19-25) y abandono del tabaco'],
    nursingCare: ['APOYO EMOCIONAL CONTINUO: La infertilidad genera un profundo impacto psicológico comparable a diagnósticos oncológicos; brindar espacio de escucha y empatía sin juicios', 'Enseñanza sobre la técnica de autoaplicación subcutánea de inyecciones de gonadotropinas en el abdomen para ciclos de estimulación ovárica', 'Orientar a las mujeres sobre la preservación de la fertilidad mediante congelación de ovocitos (vitrificación) si desean postergar la maternidad antes de los 35 años']
  },
  {
    number: 318,
    id: 'diag-318',
    title: 'Embarazo ectópico',
    cie10: 'O00.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'EMERGENCIA OBSTÉTRICA caracterizada por la implantación y desarrollo del óvulo fecundado fuera de la cavidad endometrial uterina, localizada en más del 95-98% de los casos en las trompas de Falopio (predominantemente en la porción ampular).',
    symptoms: ['Tríada clásica de presentación (en semanas 6 a 8 de amenorrea):', '1. Amenorrea o retraso menstrual de corta duración con prueba de embarazo positiva', '2. Dolor abdominal o pélvico unilateral agudo o sordo en fosa ilíaca', '3. Sangrado vaginal anormal escaso, oscuro "en posos de café" o intermitente', 'En Embarazo Ectópico Roto (hemoperitoneo agudo): dolor abdominal pélvico lancinante catastrófico, dolor referido en el hombro (signo de Kehr por irritación diafragmática), lipotimia, mareos y colapso circulatorio'],
    redFlags: ['ROTURA TUBÁRICA CON SHOCK HIPOVOLÉMICO HEMORRÁGICO EXANGUINANTE (principal causa de muerte materna en el primer trimestre)'],
    criteria: 'Niveles séricos de hCG-beta por encima de la "zona de discriminación" (> 1500-2000 mUI/mL) en AUSENCIA de saco gestacional intrauterino en la ecografía transvaginal + masa anexial ectópica.',
    labTests: ['hCG-beta cuantitativa sérica seriada (en embarazo intrauterino viable se duplica cada 48h; en ectópico la curva se estanca o asciende < 50%)', 'Hemograma urgente (hematocrito/hemoglobina)', 'Grupo sanguíneo y factor Rh (obligatorio para profilaxis anti-D)'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DE URGENCIA (útero vacío con endometrio engrosado decidualizado sin saco gestacional + masa anexial compleja separada del ovario con imagen en "signo del anillo tubárico" o "halo de fuego" con doppler color; líquido libre en fondo de saco de Douglas)'],
    differential: ['Amenaza de aborto o aborto incompleto', 'Rotura de quiste del cuerpo lúteo', 'Apendicitis aguda', 'Torsión anexial'],
    firstLine: [
      { drug: 'Tratamiento médico con Metotrexato intramuscular (en casos estables no rotos seleccionados)', dose: 'Metotrexato 50 mg/m2 de superficie corporal IM en dosis única (controlando hCG los días 4 y 7)', route: 'IM profunda', freq: 'Dosis única', notes: 'CRITERIOS ESTRICTOS: Paciente hemodinámicamente estable, hCG-beta < 5000 mUI/mL, masa anexial < 3.5-4 cm, ausencia de latido cardíaco embrionario y sin líquido libre en Douglas' },
      { drug: 'Tratamiento Quirúrgico de Urgencia: Salpingectomía laparoscópica (o Salpingostomía conservadora)', dose: 'Cirugía laparoscópica de emergencia', route: 'Laparoscópica', freq: 'Urgente', notes: 'INDICADA DE INMEDIATO ante inestabilidad hemodinámica, rotura tubárica, dolor severo, hCG > 5000 o contraindicación de metotrexato' }
    ],
    alternatives: [
      { drug: 'Laparotomía exploradora urgente', dose: 'Cirugía abierta de emergencia', route: 'Quirúrgica abierta', freq: 'Urgente', notes: 'De elección obligatoria ante shock hipovolémico severo con colapso cardiovascular' }
    ],
    nonPharm: ['Nada por vía oral (NPO inmediato) y reposición rápida de cristaloides en shock'],
    nursingCare: ['ADMINISTRACIÓN INMEDIATA DE INMUNOGLOBULINA ANTI-D: Toda paciente Rh negativa con embarazo ectópico debe recibir obligatoriamente 300 mcg IM de Inmunoglobulina Anti-D en las primeras 72 horas para prevenir la isoinmunización Rh futura', 'Canalización de dos accesos venosos de gran calibre (16G o 18G) ante sospecha de rotura', 'Monitoreo estricto de signos vitales cada 15 min: vigilar taquicardia e hipotensión ortostática temprana', 'Vigilancia de signos de peritonismo y dolor referido en hombro (signo de Kehr)']
  },
  {
    number: 319,
    id: 'diag-319',
    title: 'Aborto espontáneo',
    cie10: 'O03.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Pérdida involuntaria de la gestación antes de las 22 semanas de edad gestacional o con un peso fetal inferior a 500 gramos, debida en más del 50-60% de los casos tempranos a anomalías cromosómicas numéricas fetales esporádicas (trisomías autosómicas). Se clasifica clínicamente en: Amenaza de aborto, Aborto en curso/inevitable, Aborto incompleto y Aborto completo.',
    symptoms: ['Hemorragia genital vaginal de cuantía variable (desde manchado leve hasta sangrado abundante con coágulos o restos tisulares ovulares)', 'Dolor cólico hipogástrico espasmódico rítmico en la línea media suprapúbica', 'En Aborto Incompleto: expulsión parcial de restos con persistencia del sangrado activo y orificio cervical externo e interno DILATADOS y abiertos', 'En Amenaza de aborto: orificio cervical CERRADO con dolor leve y embrión con latidos cardíacos viables'],
    redFlags: ['Aborto Séptico (fiebre > 38.5 °C, dolor pélvico a la descompresión, flujo fétido achocolatado o purulento y shock séptico)', 'Shock hipovolémico por hemorragia masiva'],
    criteria: 'Sangrado en primera mitad del embarazo + exploración con espéculo (orificios cervicales abiertos o cerrados) + Ecografía transvaginal que evalúa presencia o ausencia de embrión, vitalidad cardíaca y restos endometriales.',
    labTests: ['Grupo sanguíneo y factor Rh (crucial para profilaxis anti-D)', 'Hemograma completo y coagulación', 'hCG-beta seriada'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL (evalúa viabilidad fetal, grosor endometrial en cavidad > 15 mm en incompleto vs línea fina homogénea en completo)'],
    differential: ['Embarazo ectópico', 'Enfermedad trofoblástica gestacional (Mola hidatiforme)', 'Patología cervical (ectropion, pólipo sangrante)'],
    firstLine: [
      { drug: 'Tratamiento Médico del Aborto Incompleto: Misoprostol (análogo de prostaglandina E1)', dose: '800 mcg por vía vaginal o sublingual en dosis única (repetir a las 24h si es necesario)', route: 'Vaginal / Sublingual', freq: 'Dosis única', notes: 'Provoca contracciones miometriales y dilatación cervical con expulsión completa en > 85-90% de casos < 12 semanas' },
      { drug: 'Tratamiento Quirúrgico: Aspiración Manual Endouterina (AMEU) de elección sobre el legrado instrumental clásico', dose: 'Evacuación uterina por aspiración al vacío con cánulas de Karman', route: 'Intrauterina ambulatoria', freq: 'Única', notes: 'De elección indiscutible si hay sangrado abundante, inestabilidad o infección; menor tasa de perforación y adherencias que el LUI' }
    ],
    alternatives: [
      { drug: 'Legrado Uterino Instrumental (LUI)', dose: 'Curetaje bajo anestesia', route: 'Quirúrgica', freq: 'Única', notes: 'En gestaciones más avanzadas o cuando no se dispone de AMEU' }
    ],
    nonPharm: ['En Amenaza de aborto: reposo relativo en cama, abstinencia sexual y reevaluación clínica en 48-72h'],
    nursingCare: ['ADMINISTRACIÓN DE INMUNOGLOBULINA ANTI-D EN MADRES Rh NEGATIVAS: Administrar 300 mcg IM (o 120-150 mcg si < 12 semanas) dentro de las primeras 72 horas para prevenir la sensibilización', 'ACOMPAÑAMIENTO EN EL DUELO GESTACIONAL: Brindar contención emocional cálida y respetuosa sin frases descalificadoras ("eres joven, ya tendrás otro"); validar la pérdida y el dolor de la madre y su familia', 'Monitoreo riguroso de constantes vitales y características del sangrado vaginal', 'Consejería post-aborto sobre anticoncepción inmediata']
  },
  {
    number: 320,
    id: 'diag-320',
    title: 'Aborto retenido',
    cie10: 'O02.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Gestación no viable que permanece retenida en el interior de la cavidad uterina sin que se produzca la expulsión espontánea de los productos de la concepción ni dilatación del cuello uterino, abarcando el Embarazo Anembrionado (saco gestacional sin polo embrionario) y la Muerte Embrionaria/Fetal temprana (embrión con cese de latidos cardíacos).',
    symptoms: ['Frecuentemente asintomático y diagnosticado de forma incidental en la ecografía de rutina del primer trimestre', 'Regresión o desaparición brusca de los síntomas típicos del embarazo (desaparición de náuseas matutinas y tensión mamaria)', 'Escaso manchado vaginal oscuro intermitente o nulo sangrado', 'Orificio cervical interno CERRADO a la exploración bimanual y especuloscopía'],
    redFlags: ['Retención prolongada (> 4 a 6 semanas): riesgo de Coagulación Intravascular Diseminada (CID) por liberación tisular de tromboplastina placentaria', 'Infección intrauterina'],
    criteria: 'Criterios ecográficos de la ACOG/SMFM: Longitud Cráneo-Rabadilla (LCR) ≥ 7 mm sin actividad cardíaca embrionaria detectable; o Diámetro Medio del Saco Gestacional (DMSG) ≥ 25 mm sin embrión visible.',
    labTests: ['Grupo sanguíneo y factor Rh', 'Hemograma y Coagulograma completo (plaquetas, TP, TTPa y Fibrinógeno sérico para descartar consumo de factores)'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DE ALTA DEFINICIÓN (estudio diagnóstico definitivo con confirmación a los 7-10 días si los criterios son limítrofes)'],
    differential: ['Embarazo intrauterino viable muy temprano (edad gestacional menor a la calculada por FUR)', 'Mola hidatiforme'],
    firstLine: [
      { drug: 'Tratamiento Médico con Combinación Mifepristona + Misoprostol (o Misoprostol aislado)', dose: 'Mifepristona 200 mg VO seguido a las 24-48h de Misoprostol 800 mcg por vía vaginal o sublingual (o Misoprostol 800 mcg vaginal directo)', route: 'VO / Vaginal', freq: 'Reglado', notes: 'La combinación de mifepristona previa aumenta la tasa de éxito de evacuación completa al 90-95%' },
      { drug: 'Aspiración Manual Endouterina (AMEU) electiva', dose: 'Procedimiento de evacuación por aspiración', route: 'Intrauterina', freq: 'Única', notes: 'Opción de elección preferida por muchas pacientes para evitar la espera y el sangrado domiciliario' }
    ],
    alternatives: [
      { drug: 'Manejo expectante durante 1 a 2 semanas', dose: 'Seguimiento clínico estrecho', route: 'Observación', freq: 'Semanal', notes: 'Tasa de expulsión espontánea del 60-70% pero con mayor incertidumbre y sangrado inesperado' }
    ],
    nonPharm: ['Apoyo emocional y empatía'],
    nursingCare: ['Profilaxis con Inmunoglobulina Anti-D 300 mcg IM en toda gestante Rh negativa', 'Explicar con claridad a la paciente lo que experimentará tras el misoprostol: cólicos intensos, sangrado mayor que una regla y expulsión de coágulos/tejido', 'Signos de alarma de consulta urgente: sangrado que empape > 2 toallas higiénicas por hora durante 2 horas seguidas, fiebre > 38 °C o dolor pélvico intolerable que no cede a analgésicos', 'Cuidados de salud mental perinatal']
  },
  {
    number: 321,
    id: 'diag-321',
    title: 'Preeclampsia',
    cie10: 'O14.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno multisistémico del embarazo caracterizado por la aparición de hipertensión arterial nueva (PAS ≥ 140 mmHg y/o PAD ≥ 90 mmHg) después de las 20 semanas de gestación, asociada a proteinuria patológica y/o disfunción de órganos diana maternos o disfunción útero-placentaria (RCIU), secundaria a una placentación defectuosa con remodelado inadecuado de las arterias espirales uterinas.',
    symptoms: ['Preeclampsia sin criterios de severidad: a menudo asintomática, con edemas periféricos no específicos', 'CRITERIOS DE SEVERIDAD / SÍNTOMAS PREMONITORIOS:', '- Cefalea occipital o frontal pulsátil intensa que no cede a analgésicos comunes', '- Alteraciones visuales: escotomas centelleantes (luces brillantes), fosfenos, visión borrosa o amaurosis transitoria', '- Dolor en epigastrio o hipocondrio derecho "en barra" (por distensión de la cápsula de Glisson hepática)', '- Náuseas y vómitos de inicio tardío', '- Disnea y ortopnea por edema agudo de pulmón'],
    redFlags: ['CRISIS HIPERTENSIVA SEVERA (PAS ≥ 160 mmHg y/o PAD ≥ 110 mmHg: alto riesgo inminente de ACV hemorrágico)', 'Eclampsia (convulsiones tónico-clónicas)', 'Síndrome HELLP', 'Desprendimiento prematuro de placenta'],
    criteria: 'PA ≥ 140/90 mmHg en ≥ 2 tomas separadas tras semana 20 + Proteinuria en 24h ≥ 300 mg (o cociente proteína/creatinina en orina ≥ 0.3 mg/mg o tira reactiva 1+). Si no hay proteinuria: basta hipertensión + al menos un signo de disfunción orgánica (trombocitopenia < 100,000, creatinina > 1.1 mg/dL, transaminasas al doble, edema pulmonar o síntomas cerebrales).',
    labTests: ['Proteinuria en orina de 24 horas y cociente proteinuria/creatininuria (IPC)', 'Plaquetas en hemograma completo (descarte de trombocitopenia)', 'Enzimas hepáticas (TGO/AST y TGP/ALT)', 'Creatinina sérica y ácido úrico', 'Lactato deshidrogenasa (LDH) y frotis sanguíneo (descarte de hemólisis)'],
    imaging: ['Eco-Doppler obstétrico y fetoplacentario (evalúa arterias uterinas con muesca protodiastólica o notch, arteria umbilical y cerebral media fetal, y volumen de líquido amniótico)'],
    differential: ['Hipertensión arterial crónica previa al embarazo', 'Hipertensión gestacional transitoria (sin proteinuria ni daño orgánico)', 'Enfermedad renal crónica preexistente'],
    firstLine: [
      { drug: 'NEUROPROTECCIÓN Y PREVENCIÓN DE ECLAMPSIA: SULFATO DE MAGNESIO (Esquema de Zuspan)', dose: 'Dosis de ataque: 4 g EV en infusión lenta en 20 minutos; seguido de Dosis de mantenimiento: 1 a 2 g/hora en infusión continua EV durante 24 horas postparto', route: 'EV en infusión continua con bomba', freq: 'Continuo 24h', notes: 'FÁRMACO DE ELECCIÓN OBLIGATORIO: Reduce el riesgo de eclampsia en más del 50% y reduce la mortalidad materna' },
      { drug: 'Tratamiento antihipertensivo de emergencia en crisis severa (PA ≥ 160/110 mmHg): Labetalol o Nifedipino o Hidralazina', dose: 'Labetalol 20 mg EV bolo en 2 min, repitiendo a los 10-20 min con 40 y 80 mg (máx 300 mg); o Nifedipino cápsula de 10 mg VO tragada con agua (NO sublingual) cada 20 min', route: 'EV / VO', freq: 'Titulado urgente', notes: 'OBJETIVO: Bajar la PA de inmediato a rango seguro (140-150 / 90-100 mmHg) para prevenir hemorragia intracraneal materna' },
      { drug: 'Finalización de la gestación (Tratamiento definitivo curativo)', dose: 'Parto o cesárea reglada según edad gestacional', route: 'Obstétrica', freq: 'Definitivo', notes: 'A las ≥ 37 semanas en preeclampsia; o a las ≥ 34 semanas (o antes) si hay criterios de severidad materna o fetal' }
    ],
    alternatives: [
      { drug: 'Maduración pulmonar fetal con Corticoides (Betametasona)', dose: '12 mg IM cada 24 horas por 2 dosis si la edad gestacional está entre 24 y 34 semanas', route: 'IM', freq: 'c/24h x 2 dosis', notes: 'Reduce síndrome de distrés respiratorio y hemorragia intraventricular neonatal' }
    ],
    nonPharm: ['Prevención primaria en gestantes de alto riesgo: Aspirina a dosis bajas (100 a 150 mg/día VO nocturna) iniciada entre las semanas 12 y 16 hasta la semana 36'],
    nursingCare: ['VIGILANCIA ESTRICTA DE INTOXICACIÓN POR SULFATO DE MAGNESIO (Triada de control de enfermería cada hora): 1. Reflejo rotuliano o patelar presente (su abolición es el primer signo de toxicidad); 2. Frecuencia respiratoria ≥ 12-14 respiraciones por minuto; 3. Diuresis horaria con sonda Foley estricta ≥ 30 mL/hora (el magnesio se elimina exclusivamente por el riñón)', 'ANTÍDOTO A LA CABECERA DE LA CAMA LISTO PARA USAR: GLUCONATO DE CALCIO AL 10% (1 ampolla de 1 g EV lento en 3 a 5 minutos ante intoxicación por magnesio)', 'Medición de presión arterial cada 15 minutos durante la crisis hipertensiva', 'Colocación en decúbito lateral izquierdo para optimizar la perfusión uteroplacentaria']
  },
  {
    number: 322,
    id: 'diag-322',
    title: 'Eclampsia',
    cie10: 'O15.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'EMERGENCIA OBSTÉTRICA CRÍTICA caracterizada por la aparición de una o más convulsiones tónico-clónicas generalizadas y/o coma en una mujer con preeclampsia, que no pueden atribuirse a otras afecciones neurológicas preexistentes (como epilepsia o hemorragia subaracnoidea). Puede ocurrir en el anteparto (50%), intraparto (25%) o posparto (25%).',
    symptoms: ['Aparición de convulsiones tónico-clónicas generalizadas típicas en 4 fases:', '1. Fase de invasión: fasciculaciones faciales, contracciones musculares sutiles, mirada fija y pérdida de conciencia', '2. Fase tónica (15-20 s): contracción muscular generalizada y rígida en opistótonos, apnea y cianosis facial', '3. Fase clónica (1-2 min): movimientos convulsivos violentos sincrónicos de todo el cuerpo, espuma por la boca y mordedura de lengua', '4. Fase comatosa: respiración estertorosa profunda con coma postictal prolongado y confusión al despertar', 'Bradicardia fetal profunda transitoria durante la crisis convulsiva'],
    redFlags: ['PARO RESPIRATORIO durante la fase tónica', 'Hemorragia cerebral masiva (principal causa de mortalidad materna en eclampsia)', 'Broncoaspiración pulmonar masiva y edema pulmonar'],
    criteria: 'Convulsiones tónico-clónicas en mujer embarazada (> 20 semanas) o puérpera con signos de preeclampsia previa o inmediata.',
    labTests: ['Gases arteriales (acidosis respiratoria y metabólica severa transitoria)', 'Hemograma completo con recuento plaquetario urgente', 'Perfil de coagulación, enzimas hepáticas (TGO/TGP/LDH) y creatinina'],
    imaging: ['Tomografía cerebral o Resonancia Magnética (Síndrome de Encefalopatía Posterior Reversible - PRES con edema vasogénico occipitoparietal bilateral)'],
    differential: ['Crisis epiléptica idiopática previa', 'Hemorragia intracraneal espontánea o rotura de MAV', 'Meningoencefalitis bacteriana', 'Trombosis venosa cerebral'],
    firstLine: [
      { drug: 'TRATAMIENTO DE ELECCIÓN INDISCUTIBLE DE LAS CONVULSIONES: SULFATO DE MAGNESIO EV', dose: 'Bolo de carga inmediato: 4 a 6 g EV diluidos en solución salina a pasar en 15 a 20 minutos, seguido de infusión continua de mantenimiento de 2 g/hora durante al menos 24 a 48 horas postparto', route: 'EV en infusión continua', freq: 'Continuo titulado', notes: 'SUPERIOR AL DIAZEPAM Y FENITOÍNA (Ensayo Colaborativo de Eclampsia): reduce a la mitad la recurrencia de convulsiones y la mortalidad materna' },
      { drug: 'Control de convulsión recurrente resistente', dose: 'Segundo bolo de Sulfato de Magnesio de 2 g EV lento en 5 minutos', route: 'EV en bolo', freq: 'Rescate', notes: 'Si la paciente convulsiona estando ya bajo infusión de sulfato' },
      { drug: 'INTERRUPCIÓN INMEDIATA DEL EMBARAZO TRAS LA ESTABILIZACIÓN MATERNA', dose: 'Parto o cesárea de emergencia', route: 'Obstétrica', freq: 'Urgente', notes: 'Una vez estabilizada la vía aérea, controladas las convulsiones y corregida la crisis hipertensiva' }
    ],
    alternatives: [
      { drug: 'Diazepam o Midazolam EV', dose: 'Diazepam 5 a 10 mg EV lento o Midazolam 2.5 a 5 mg EV', route: 'EV', freq: 'Excepcional', notes: 'RESTRINGIDO únicamente a casos en que el sulfato de magnesio esté contraindicado o no disponible en el centro de salud' }
    ],
    nonPharm: ['PROTECCIÓN DE LA VÍA AÉREA: Posicionar a la paciente en decúbito lateral izquierdo para evitar broncoaspiración de secreciones y vómitos', 'Aspiración suave de secreciones bucofaríngeas y oxigenoterapia con mascarilla reservorio a 10 L/min', 'Protección física contra traumatismos sin sujetar a la fuerza las extremidades'],
    nursingCare: ['PROTOCOLO DE ACTUACIÓN INMEDIATA EN CRISIS ECLÁMPTICA: 1. NUNCA ABANDONAR A LA PACIENTE Y PEDIR AYUDA (activar Clave Azul de emergencia obstétrica); 2. Proteger la cabeza con almohada y colocar en decúbito lateral izquierdo; 3. NUNCA forzar objetos rígidos entre los dientes durante el trismo (evitar rotura dental); 4. Administrar inmediatamente el bolo de Sulfato de Magnesio prescrito; 5. Monitoreo continuo de frecuencia cardíaca fetal (la bradicardia fetal postictal suele recuperarse en 3 a 5 min tras ceder la convulsión, no correr a cesárea en plena crisis)', 'Sonda vesical Foley con urómetro y control horario estricto de diuresis (suspender o reducir sulfato si diuresis < 30 mL/h)', 'Tener siempre a mano la ampolla de Gluconato de Calcio al 10%']
  },
  {
    number: 323,
    id: 'diag-323',
    title: 'Síndrome HELLP',
    cie10: 'O14.2',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Variante severa y potencialmente mortal de la preeclampsia caracterizada por microangiopatía trombótica endotelial y vasoespasmo hepático, definida por el acrónimo en inglés HELLP: Hemolysis (Hemólisis microangiopática), Elevated Liver enzymes (Elevación de enzimas hepáticas) y Low Platelet count (Plaquetopenia / Trombocitopenia).',
    symptoms: ['Dolor epigástrico intenso o dolor en hipocondrio derecho "en barra" constante (presente en > 85-90% de casos por congestión y distensión capsular hepática)', 'Náuseas persistentes, vómitos, malestar general profundo y astenia similar a un cuadro viral', 'Cefalea y visión borrosa', 'Ictericia cutáneo-mucosa (en estadios avanzados por hemólisis masiva)', 'Hasta un 15-20% de las pacientes pueden NO presentar hipertensión severa o cursar con cifras tensionales normales'],
    redFlags: ['ROTURA HEPÁTICA O HEMATOMA SUBCAPSULAR HEPÁTICO ROTO con shock hipovolémico cataclísmico', 'Coagulación Intravascular Diseminada (CID)', 'Insuficiencia renal aguda e infarto hepático'],
    criteria: 'Criterios de Tennessee clásicos: 1. Hemólisis microangiopática: LDH > 600 UI/L o frotis con esquistocitos o bilirrubina indirecta ≥ 1.2 mg/dL; 2. Enzimas hepáticas elevadas: TGO/AST ≥ 70 UI/L; 3. Trombocitopenia: Plaquetas < 100,000/mm3 (Clasificación de Mississippi: Clase 1 si plaquetas < 50,000; Clase 2 si 50,000-100,000; Clase 3 si 100,000-150,000).',
    labTests: ['Frotis de sangre periférica: ESQUISTOCITOS Y HEMATÍES FRAGMENTADOS (confirman microangiopatía)', 'Lactato Deshidrogenasa (LDH > 600 UI/L)', 'Transaminasas hepáticas (TGO/AST y TGP/ALT marcadamente elevadas)', 'Hemograma con recuento plaquetario urgente seriado cada 6 horas', 'Pruebas de coagulación: Fibrinógeno, TP, TTPa y dímero D (búsqueda de CID)'],
    imaging: ['Ecografía o Tomografía abdominal urgente si hay dolor epigástrico severo intolerable con hipotensión (búsqueda de hematoma subcapsular hepático)'],
    differential: ['Hígado graso agudo del embarazo (cursa con hipoglucemia severa, coagulopatía precoz y encefalopatía)', 'Púrpura Trombocitopénica Trombótica (PTT)', 'Síndrome Urémico Hemolítico (SUH)', 'Hepatitis viral aguda'],
    firstLine: [
      { drug: 'ESTABILIZACIÓN MATERNA INMEDIATA + FINALIZACIÓN DEL EMBARAZO PROGRAMADA DE URGENCIA', dose: 'Resolución obstétrica prioritaria (vía cesárea o vaginal)', route: 'Obstétrica de urgencia', freq: 'Inmediata', notes: 'ÚNICO TRATAMIENTO CURATIVO: La extracción del feto y la placenta detiene la microangiopatía endotelial' },
      { drug: 'Sulfato de Magnesio EV para prevención de eclampsia', dose: 'Bolo de 4 a 6 g EV en 20 min seguido de 1 a 2 g/hora en infusión continua por 24-48 horas postparto', route: 'EV en infusión continua', freq: 'Continuo', notes: 'Obligatorio en todo Síndrome HELLP independientemente de la presión arterial' },
      { drug: 'Transfusión de concentrado de plaquetas', dose: 'Transfundir plaquetas para mantener recuento > 50,000/mm3 previo a cesárea (o > 20,000 en parto vaginal sin sangrado)', route: 'EV', freq: 'SOS', notes: 'Previene hemorragia intraoperatoria incontrolable' }
    ],
    alternatives: [
      { drug: 'Dexametasona a dosis altas (Estudios de Mississippi)', dose: '10 mg EV cada 12 horas por 2 a 4 dosis postparto', route: 'EV', freq: 'c/12h', notes: 'Acelera la recuperación del recuento plaquetario en HELLP severo clase 1' },
      { drug: 'Embolización de arteria hepática o Laparotomía de rescate con empaquetamiento (Packing)', dose: 'Intervencionismo o cirugía urgente', route: 'Quirúrgica / Vascular', freq: 'Emergencia', notes: 'En presencia de hematoma subcapsular hepático roto con shock' }
    ],
    nonPharm: ['Manejo obligatorio en Unidad de Cuidados Intensivos Maternos'],
    nursingCare: ['NO PALPAR CON FUERZA EL HIPOCONDRIO DERECHO NI EL EPIGASTRIO: La palpación abdominal profunda vigorosa puede desencadenar la rotura traumática de un hematoma subcapsular hepático a tensión', 'Control seriado de hemograma y plaquetas cada 6 a 8 horas', 'Vigilancia de signos de sangrado en sitios de venopunción, hematuria, gingivorragia o sangrado vaginal', 'Vigilancia estrecha del nadir plaquetario (ocurre típicamente entre las 24 y 48 horas posparto antes de comenzar a recuperarse)']
  },
  {
    number: 324,
    id: 'diag-324',
    title: 'Diabetes gestacional',
    cie10: 'O24.4',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Intolerancia a los carbohidratos de severidad variable que se reconoce o inicia por primera vez durante el embarazo (típicamente entre las semanas 24 y 28), debida al aumento fisiológico de la resistencia periférica a la insulina mediada por hormonas placentarias (lactógeno placentario, progesterona, cortisol).',
    symptoms: ['Habitualmente asintomática', 'Aumento ponderal excesivo de peso materno', 'Hallazgo ecográfico de polihidramnios o macrosomía fetal (peso estimado > percentil 90)', 'Infecciones urinarias o candidiasis vaginal a repetición'],
    redFlags: ['Macrosomía fetal (> 4000-4500 g) con riesgo de distocia de hombros y trauma obstétrico', 'Hipoglucemia neonatal grave tras el parto', 'Muerte fetal intrauterina inexplicada'],
    criteria: 'Criterios IADPSG / Guía MINSA con sobrecarga de 75 g de glucosa en semanas 24-28 (basta 1 valor alterado): 1. Glucosa basal en ayunas ≥ 92 mg/dL; 2. A la 1 hora ≥ 180 mg/dL; 3. A las 2 horas ≥ 153 mg/dL.',
    labTests: ['Prueba de Tolerancia Oral a la Glucosa (PTOG con 75 g) entre semanas 24 y 28', 'Hemoglobina glicosilada (HbA1c meta < 6.0%)', 'Urocultivo mensual'],
    imaging: ['Ecografía obstétrica seriada cada 3-4 semanas para percentil de crecimiento fetal, circunferencia abdominal fetal y cálculo de líquido amniótico (ILA)'],
    differential: ['Diabetes mellitus pregestacional manifiesta previa no diagnosticada (glucosa ayuno ≥ 126 mg/dL en primer trimestre)'],
    firstLine: [
      { drug: 'Terapia nutricional médica individualizada + Ejercicio físico moderado postprandial (caminata 30 min)', dose: 'Plan de 1800-2200 kcal/día fraccionado en 3 comidas y 2-3 colaciones (40-45% carbohidratos complejos)', route: 'Estilo de vida', freq: 'Diario permanente', notes: 'Logra metas en el 70-80% de gestantes; METAS: Glucosa ayunas ≤ 95 mg/dL y 1h postprandial ≤ 140 mg/dL (o 2h ≤ 120 mg/dL)' }
    ],
    alternatives: [
      { drug: 'Insulinoterapia humana (NPH + Insulina Rápida / Regular o Lispro/Aspart)', dose: 'Iniciada si no se logran metas glucémicas tras 1 a 2 semanas de dieta estructurada', route: 'SC', freq: 'Fraccionada', notes: 'FÁRMACO DE ELECCIÓN: No cruza la barrera placentaria' },
      { drug: 'Metformina oral', dose: '500 a 1000 mg cada 12 horas VO con comidas', route: 'VO', freq: 'c/12h', notes: 'Segunda línea en gestantes con rechazo a insulina' }
    ],
    nonPharm: ['Monitoreo continuo de glucemias capilares en ayunas y postprandiales'],
    nursingCare: ['Capacitación a la gestante en el automonitoreo de glucosa capilar con glucómetro y registro en libreta', 'Control de la curva de ganancia de peso según IMC pregestacional', 'Vigilancia de signos de hipoglucemia materna inducida por insulina', 'Planificación obligatoria de reclasificación metabólica con PTOG 75g a las 6 a 12 semanas posparto']
  },
  {
    number: 325,
    id: 'diag-325',
    title: 'Placenta previa',
    cie10: 'O44.1',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Implantación anómala de la placenta en el segmento uterino inferior, cubriendo parcial o totalmente el orificio cervical interno (OCI) o situándose a menos de 2 cm del mismo (placenta de inserción baja), por delante de la presentación fetal tras la semana 28 de gestación.',
    symptoms: ['Tríada clásica patognomónica:', '1. Hemorragia vaginal de sangre ROJA BRILLANTE, fresca y rutilante de inicio súbito e inesperado', '2. Sangrado COMPLETAMENTE INDOLORO (no hay dolor abdominal)', '3. Útero RELAJADO, blando, no doloroso y sin dinamia uterina (tono uterino normal)', 'El sangrado es recidivante (episodios repetitivos autolimitados que se vuelven más abundantes)', 'Feto habitualmente reactivo con frecuencia cardíaca normal'],
    redFlags: ['CONTRAINDICACIÓN ABSOLUTA DE TACTO VAGINAL (un tacto digital a ciegas puede desgarrar la placenta y causar exanguinación masiva materna y fetal en minutos)', 'Acretismo placentario (placenta accreta, increta o percreta en cesáreas previas)'],
    criteria: 'Confirmación ecográfica de tejido placentario cubriendo el OCI o a < 20 mm del mismo después de la semana 28.',
    labTests: ['Grupo sanguíneo y factor Rh', 'Hemograma completo, hemoglobina y coagulograma', 'Reserva de paquetes globulares compatibles'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL (método de elección diagnóstico más seguro y exacto: mide la distancia exacta del borde placentario al OCI; no produce sangrado al introducir la sonda solo en el tercio inferior de vagina)'],
    differential: ['Desprendimiento prematuro de placenta (sangrado oscuro, dolor lancinante y útero leñoso)', 'Rotura uterina', 'Vasa previa rota (sangrado fetal indoloro con rotura de membranas y bradicardia extrema)'],
    firstLine: [
      { drug: 'Manejo conservador expectante en sangrado leve/moderado con feto prematuro (< 36-37 semanas)', dose: 'Reposo absoluto en cama en decúbito lateral + Maduración pulmonar fetal con Betametasona 12 mg IM c/24h x 2 dosis', route: 'Hospitalario', freq: 'Continuo', notes: 'Monitoreo hemodinámico estricto; objetivo: alcanzar la madurez fetal' },
      { drug: 'Resolución obstétrica mediante CESÁREA ELECTIVA PROGRAMADA a las 36-37 semanas (o de urgencia si hemorragia masiva inestable)', dose: 'Cesárea por laparotomía', route: 'Quirúrgica', freq: 'Definitiva', notes: 'Vía de parto OBLIGATORIA en placenta previa oclusiva total o parcial' }
    ],
    alternatives: [
      { drug: 'Parto vaginal monitorizado', dose: 'Solo si el borde placentario está a > 20 mm del OCI (inserción baja)', route: 'Vaginal', freq: 'Monitorizado', notes: 'Bajo vigilancia estrecha' }
    ],
    nonPharm: ['PROHIBICIÓN ESTRICTA DE RELACIONES SEXUALES Y TACTOS VAGINALES'],
    nursingCare: ['REGLA DE VIDA DE ENFERMERÍA: PROHIBIDO TERMINANTEMENTE REALIZAR TACTO VAGINAL EN TODA GESTANTE CON SANGRADO DE LA SEGUNDA MITAD DEL EMBARAZO (colocar cartel de advertencia en la cabecera)', 'Inspección visual del sangrado con colocación cuidadosa de espéculo vaginal estéril bajo visión directa', 'Canalización de 2 vías venosas de grueso calibre (16G o 18G) y verificación de reserva de sangre', 'Monitoreo continuo de frecuencia cardíaca fetal y signos vitales maternos', 'Profilaxis con Inmunoglobulina Anti-D en madres Rh negativas']
  },
  {
    number: 326,
    id: 'diag-326',
    title: 'Desprendimiento de placenta',
    cie10: 'O45.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Desprendimiento Prematuro de Placenta Normoinserta (DPPNI / Abruptio Placentae): separación total o parcial de una placenta normalmente insertada en la pared uterina antes del nacimiento del feto (después de la semana 20), lo que produce hemorragia decidual basal y hematoma retroplacentario con isquemia fetal aguda.',
    symptoms: ['Tríada clásica patognomónica del DPPNI:', '1. DOLOR ABDOMINAL INTENSO, súbito, lancinante y constante en hipogastrio o lumbar ("útero en puñalada")', '2. HIPERTONÍA UTERINA Y TÉTANOS MIOMETRIAL ("útero de consistencia leñosa o de madera" que no se relaja entre contracciones)', '3. Sangrado vaginal oscuro, negruzco o con coágulos (en el 20% el sangrado puede estar retenido internamente sin salida externa: desprendimiento oculto)', 'Compromiso del bienestar fetal agudo (bradicardia fetal severa o muerte fetal)'],
    redFlags: ['COAGULACIÓN INTRAVASCULAR DISEMINADA (CID) aguda por consumo masivo de factores', 'Útero de Couvelaire (apoplejía uteroplacentaria con infiltración hemática masiva del miometrio que impide la contracción)', 'Shock hipovolémico materno y muerte fetal'],
    criteria: 'Diagnóstico primordialmente clínico: Dolor abdominal súbito + hipertonía uterina con útero leñoso + sangrado oscuro + sufrimiento fetal.',
    labTests: ['Fibrinógeno sérico urgente (marcador crítico: fibrinógeno < 200 mg/dL indica CID severa en curso)', 'Hemograma, hemoglobina, plaquetas, TP, TTPa y dímero D', 'Pruebas cruzadas y reserva masiva de sangre'],
    imaging: ['Ecografía obstétrica urgente (detecta hematoma retroplacentario en solo el 50% de casos; LA AUSENCIA DE HALLAZGOS ECOGRÁFICOS NO DESCARTA EL DPPNI)'],
    differential: ['Placenta previa (sangrado rojo brillante, indoloro y útero blando)', 'Rotura uterina', 'Rotura de vasa previa'],
    firstLine: [
      { drug: 'CESÁREA DE EMERGENCIA INMEDIATA (Código Rojo Obstétrico)', dose: 'Intervención quirúrgica inmediata salvadora de vida', route: 'Quirúrgica de emergencia', freq: 'Inmediata', notes: 'Prioridad máxima ante feto vivo con sufrimiento o deterioro hemodinámico materno' },
      { drug: 'Reanimación hemodinámica agresiva con Cristaloides y Transfusión de Hemoderivados (Protocolo de Transfusión Masiva 1:1:1)', dose: 'Concentrados de hematíes + Plasma Fresco Congelado + Plaquetas', route: 'EV rápido', freq: 'Inmediato', notes: 'Restaura la volemia y combate la coagulopatía de consumo' }
    ],
    alternatives: [
      { drug: 'Histerectomía obstétrica de emergencia', dose: 'Extirpación quirúrgica del útero', route: 'Quirúrgica', freq: 'Urgente', notes: 'Indicada ante atonía uterina refractaria por útero de Couvelaire o sangrado incoercible' }
    ],
    nonPharm: ['Monitoreo continuo en sala de operaciones'],
    nursingCare: ['ACTIVACIÓN INMEDIATA DEL CÓDIGO ROJO / ALERTA DE HEMORRAGIA OBSTÉTRICA', 'Canalización inmediata de dos vías venosas 14G o 16G periféricas con infusión de cloruro de sodio', 'Palpación abdominal para verificar el tono uterino (útero en tabla/madera)', 'Sonda vesical con urómetro para control horario de diuresis', 'Oxígeno a 10 L/min con mascarilla y traslado inmediato a quirófano']
  },
  {
    number: 327,
    id: 'diag-327',
    title: 'Amenaza parto pretérmino',
    cie10: 'O60.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Presencia de contracciones uterinas regulares y dolorosas con una frecuencia de al menos 4 en 20 minutos u 8 en 60 minutos, asociadas a modificaciones cervicales progresivas (borramiento ≥ 50% y dilatación cervical entre 1 y 3 cm), acaecidas entre las semanas 22.0 y 36.6 de gestación.',
    symptoms: ['Contracciones uterinas dolorosas rítmicas y regulares percibidas como endurecimiento del abdomen', 'Sensación de presión o pesadez pélvica constante en hipogastrio', 'Dolor sordo continuo en región lumbar baja', 'Aumento o cambio en el flujo vaginal (más mucoso, serosanguinolento o acuoso)'],
    redFlags: ['Dilatación cervical avanzada > 4 cm (trabajo de parto pretérmino franco)', 'Corioamnionitis clínica (fiebre materna, taquicardia fetal, útero doloroso e irritabilidad)'],
    criteria: 'Contracciones regulares documentadas + modificaciones cervicales antes de las 37 semanas (o Longitud Cervical < 20-25 mm en ecografía transvaginal o Fibronectina fetal positiva).',
    labTests: ['Fibronectina fetal en secreción cervicovaginal (alto valor predictivo negativo: si es negativa descarta parto en los siguientes 7-14 días con 99% de certeza)', 'Examen de orina y urocultivo (la ITU es la causa precipitante más frecuente)', 'Cultivo vaginocervical para Streptococcus agalactiae'],
    imaging: ['ECOGRAFÍA TRANSVAGINAL DE LONGITUD CERVICAL (gold standard: longitud cervical < 20-25 mm antes de semana 32 predice alto riesgo de parto prematuro inminente)'],
    differential: ['Contracciones fisiológicas de Braxton Hicks (irregulares, indoloras y sin cambios en el cuello uterino)', 'Infección urinaria / cólico nefrítico', 'Gastroenteritis aguda'],
    firstLine: [
      { drug: 'MADURACIÓN PULMONAR FETAL OBLIGATORIA (entre semanas 24 y 34): Betametasona', dose: '12 mg IM cada 24 horas por 2 dosis únicas (o Dexametasona 6 mg IM cada 12 horas por 4 dosis)', route: 'IM profunda', freq: 'c/24h x 2 dosis', notes: 'INTERVENCIÓN MÁS EFICAZ EN MEDICINA PERINATAL: Reduce drásticamente la mortalidad neonatal, el síndrome de dificultad respiratoria y la hemorragia intraventricular' },
      { drug: 'TOCOLISIS DE PRIMERA LÍNEA para frenar contracciones por 48 horas: Atosibán o Nifedipino', dose: 'Nifedipino 20 mg VO inicial, luego 10 a 20 mg cada 6-8 horas VO (o Atosibán bolo EV 6.75 mg luego infusión continua)', route: 'VO / EV', freq: 'Titulado x 48h', notes: 'Objetivo de la tocolisis: GANAR 48 HORAS para completar el ciclo de maduración pulmonar fetal con corticoides y trasladar a centro con UCI neonatal' },
      { drug: 'NEUROPROTECCIÓN FETAL CON SULFATO DE MAGNESIO si el parto es inminente antes de las 32 semanas', dose: 'Bolo de 4 g EV en 30 minutos seguido de 1 g/hora en infusión hasta el parto o máximo 24 horas', route: 'EV en infusión', freq: 'Continuo', notes: 'Reduce significativamente la parálisis cerebral y la disfunción motora infantil' }
    ],
    alternatives: [
      { drug: 'Profilaxis antibiótica intraparto para Estreptococo del Grupo B: Ampicilina o Penicilina G', dose: 'Ampicilina 2 g EV inicial luego 1 g EV cada 4 horas hasta el parto', route: 'EV', freq: 'c/4h', notes: 'Obligatoria si el parto es prematuro o cultivo desconocido' }
    ],
    nonPharm: ['Reposo en cama en decúbito lateral izquierdo e hidratación endovenosa'],
    nursingCare: ['ADMINISTRACIÓN PUNTUAL Y EXACTA DE BETAMETASONA: Asegurar el cumplimiento de la segunda dosis a las 24 horas exactas de la primera para completar el esquema', 'Monitoreo de frecuencia cardíaca fetal y dinámica uterina mediante tocodinamómetro', 'Monitoreo de presión arterial y pulso materno durante el uso de nifedipino (vigilar hipotensión)', 'Preparación del equipo y cuna de reanimación neonatal térmica en caso de parto inminente']
  },
  {
    number: 328,
    id: 'diag-328',
    title: 'Rotura prematura de membranas (RPM)',
    cie10: 'O42.9',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Pérdida de la continuidad e integridad de las membranas corioamnióticas con salida de líquido amniótico antes del inicio espontáneo del trabajo de parto, pudiendo ser a término (≥ 37 semanas) o pretérmino (< 37 semanas).',
    symptoms: ['Pérdida o salida involuntaria súbita de líquido claro, transparente o con grumos blanquecinos "como agua tibia de roca" a través de la vagina con olor a lejía / esperma característico', 'Pérdida continua o intermitente que aumenta al toser, cambiar de postura o realizar maniobra de Valsalva', 'Disminución del tamaño o volumen del abdomen materno'],
    redFlags: ['CORIOAMNIONITIS CLÍNICA (fiebre materna ≥ 38.0 °C, taquicardia fetal > 160 lpm, taquicardia materna, hipersensibilidad uterina y líquido purulento fétido)', 'Prolapso de cordón umbilical', 'Desprendimiento prematuro de placenta'],
    criteria: 'Visualización directa de líquido amniótico saliendo por el orificio cervical externo al examen con espéculo estéril con maniobra de Valsalva (maniobra de Tarnier) o confirmación por test bioquímico.',
    labTests: ['Prueba de Nitrazina (el líquido amniótico tiene pH alcalino 7.0-7.5, virando el papel de amarillo a azul oscuro)', 'Prueba del Helecho / Cristalización (visualización microscópica de hojas de helecho al secar el líquido)', 'Test inmunocromatográfico de alfa-microglobulina 1 placentaria (PAMG-1 / AmniSure: sensibilidad y especificidad > 99%)', 'Hemograma y PCR seriados (descarte de infección)'],
    imaging: ['ECOGRAFÍA OBSTÉTRICA (confirma oligohidramnios o anhidramnios severo por pérdida de líquido y evalúa presentación fetal)'],
    differential: ['Incontinencia urinaria de esfuerzo', 'Leucorrea vaginal profusa', 'Expulsión del tapón mucoso hidratado'],
    firstLine: [
      { drug: 'Manejo en RPM pretérmino (24 a 34 semanas): Terapia antibiótica de latencia (Régimen de Mercer / ACOG)', dose: 'Ampicilina 2 g EV cada 6 horas + Eritromicina 250 mg EV cada 6 horas por 48 horas; seguido de Amoxicilina 500 mg c/8h VO + Eritromicina 333 mg c/8h VO por 5 días adicionales (total 7 días)', route: 'EV luego VO', freq: 'Reglado por 7 días', notes: 'Prolonga la latencia del embarazo, previene la corioamnionitis y reduce la morbilidad neonatal' },
      { drug: 'Maduración pulmonar con Betametasona', dose: '12 mg IM cada 24 horas por 2 dosis en semanas 24 a 34', route: 'IM', freq: 'c/24h x 2 dosis', notes: 'Obligatoria' },
      { drug: 'En RPM a término (≥ 37 semanas): Inducción activa del parto con Oxitocina', dose: 'Infusión de oxitocina titulada', route: 'EV', freq: 'Continua', notes: 'Disminuye significativamente el riesgo de infección materna y neonatal comparado con manejo expectante' }
    ],
    alternatives: [
      { drug: 'Finalización inmediata del embarazo independientemente de la edad gestacional', dose: 'Parto o cesárea de urgencia', route: 'Obstétrica', freq: 'Urgente', notes: 'INDICADA DE INMEDIATO ante corioamnionitis clínica, desprendimiento de placenta o sufrimiento fetal' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA DE TACTO VAGINAL (el tacto digital introduce bacterias vaginales y precipita corioamnionitis; evaluar EXCLUSIVAMENTE con espéculo estéril)'],
    nursingCare: ['NO REALIZAR TACTO VAGINAL: Realizar especuloscopía estéril visualizando el fondo de saco posterior y pidiendo a la paciente que tosa (maniobra de Valsalva)', 'Control estricto de temperatura axilar materna cada 4 horas y de la frecuencia cardíaca materna y fetal (la taquicardia es el signo más precoz de corioamnionitis)', 'Colocación de apósito estéril en la vulva para vigilar continuamente el color, olor y volumen del líquido amniótico perdido', 'Reposo absoluto en cama con apósito estéril']
  },
  {
    number: 329,
    id: 'diag-329',
    title: 'Colestasis gestacional',
    cie10: 'O26.6',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Trastorno hepático específico del embarazo más frecuente en el tercer trimestre (semanas 28 a 34), caracterizado por colestasis intrahepática reversible mediada por hipersensibilidad a los estrógenos, que cursa con prurito intenso materno y elevación de ácidos biliares séricos.',
    symptoms: ['PRURITO INTENSO PALMOPLANTAR que empeora predominantemente por las noches impidiendo el sueño', 'Progresión centrípeta del prurito hacia las extremidades y el tronco', 'AUSENCIA TOTAL DE LESIONES CUTÁNEAS PRIMARIAS (solo se observan excoriaciones lineales secundarias al rascado violento)', 'Coluria (orina oscura) e hipocolia/acolia en casos avanzados', 'Ictericia clínica leve tardía en el 10-15% de casos'],
    redFlags: ['MUERTE FETAL INTRAUTERINA SÚBITA E INEXPLICADA por arritmia cardíaca fetal o vasoespasmo placentario inducido por ácidos biliares tóxicos (especialmente si ácidos biliares > 100 umol/L)', 'Líquido amniótico meconial y parto pretérmino espontáneo'],
    criteria: 'Prurito palmoplantar característico en el 3er trimestre + elevación de Ácidos Biliares Totales séricos en ayunas ≥ 10 umol/L + resolución completa de los síntomas y enzimas tras el parto.',
    labTests: ['ÁCIDOS BILIARES TOTALES SÉRICOS EN AYUNAS (gold standard de estratificación de riesgo fetal: Leve 10-39 umol/L; Moderada 40-99 umol/L; Severa ≥ 100 umol/L)', 'Transaminasas hepáticas (TGO/TGP elevadas en 2 a 10 veces su valor)', 'Bilirrubinas (hiperbilirrubinemia directa leve)', 'Tiempos de coagulación (TP prolongado si hay déficit de absorción de vitamina K por colestasis)'],
    imaging: ['Ecografía hepatobiliar (descarta litiasis biliar concomitante)', 'Perfil biofísico fetal y monitoreo no estresante (NST) semanal o bisemanal'],
    differential: ['Prurito fisiológico del embarazo', 'Pápulas y placas pruriginosas urticarianas del embarazo (PUPPP: tiene exantema eritematoso primario)', 'Hepatitis viral aguda'],
    firstLine: [
      { drug: 'Ácido Ursodesoxicólico (AUDC / Ursodiol) - Fármaco de primera línea de elección', dose: '10 a 15 mg/kg/día VO dividido en 2 a 3 tomas con las comidas (habitualmente 300 mg cada 8-12 horas VO, hasta 1500-2000 mg/día)', route: 'VO con comidas', freq: 'c/8-12h', notes: 'Disminuye los niveles de ácidos biliares en sangre materna y fetal, mejora el prurito y reduce el riesgo de complicaciones neonatales' },
      { drug: 'Finalización activa programada del embarazo según niveles de ácidos biliares:', dose: 'Inducción de parto entre semanas 36 y 39', route: 'Obstétrica', freq: 'Programada', notes: 'Si ácidos biliares ≥ 100 umol/L finalizar a las 36.0 semanas; si entre 40-99 finalizar a las 37-38 semanas; si < 40 finalizar a las 38-39 semanas' }
    ],
    alternatives: [
      { drug: 'Antihistamínicos orales sedantes para el prurito nocturno (Clorfenamina o Cetirizina)', dose: 'Clorfenamina 4 mg VO antes de acostarse', route: 'VO nocturna', freq: 'c/24h nocturna', notes: 'Alivio sintomático y mejoría del sueño' },
      { drug: 'Vitamina K1 oral o parenteral', dose: '10 mg/día VO o SC si el tiempo de protrombina se prolonga', route: 'VO / SC', freq: 'c/24h', notes: 'Previene hemorragia posparto por malabsorción de vitaminas liposolubles' }
    ],
    nonPharm: ['Baños con agua tibia/fría y aplicación de cremas emolientes con mentol para aliviar la piel'],
    nursingCare: ['INTERROGATORIO DIRIGIDO SOBRE PRURITO: Preguntar activamente a toda gestante del tercer trimestre si siente picazón en las palmas de las manos o plantas de los pies', 'Orientación sobre la toma regular del ácido ursodesoxicólico con los alimentos', 'Monitoreo de movimientos fetales diarios: educar a la gestante en el conteo de pataditas fetales tras las comidas', 'Reevaluación de enzimas hepáticas y ácidos biliares a las 4 a 6 semanas posparto para confirmar normalización']
  },
  {
    number: 330,
    id: 'diag-330',
    title: 'Isoinmunización Rh',
    cie10: 'O36.0',
    category: 'Renales y Reproductor',
    chapter: 'V. Enfermedades Renales, Urinarias y Reproductor (266-330)',
    definition: 'Enfermedad Hemolítica Perinatal producida por la incompatibilidad antigénica entre los hematíes de una madre Rh negativa (generalmente antígeno D) y un feto Rh positivo, lo que genera en la madre anticuerpos IgG anti-D que cruzan la placenta y destruyen los eritrocitos fetales por hemólisis extravascular.',
    symptoms: ['La madre se encuentra completamente asintomática', 'Manifestaciones fetales graves según el grado de anemia hemolítica:', '- Palidez y taquicardia fetal hiperdinámica compensadora', '- Hepatoesplenomegalia fetal marcada (por hematopoyesis extramedular masiva)', '- HIDROPS FETALIS (edema fetal masivo generalizado en dos o más compartimentos: ascitis, derrame pleural, derrame pericárdico y edema de piel con engrosamiento placentario)', '- Ictericia neonatal precoz severa con Kernicterus (daño cerebral por bilirrubina no conjugada) tras el parto'],
    redFlags: ['Hidrops fetalis con muerte fetal intrauterina por insuficiencia cardíaca de alto gasto'],
    criteria: 'Madre Rh negativa con Test de Coombs Indirecto positivo a títulos significativos (título crítico ≥ 1:16 o 1:32) en gestación de feto Rh positivo.',
    labTests: ['TEST DE COOMBS INDIRECTO en sangre materna (titulación seriada de anticuerpos anti-D)', 'Grupo sanguíneo y factor Rh de ambos progenitores', 'Genotipo RhD fetal en ADN libre circulante en sangre materna (no invasivo)', 'Test de Coombs Directo en sangre de cordón umbilical del recién nacido'],
    imaging: ['ECO-DOPPLER DE LA ARTERIA CEREBRAL MEDIA FETAL (ACM): Medición de la Velocidad Sistólica Máxima (Vmax de ACM) en múltiplos de la mediana (MoM). Vmax > 1.5 MoM predice anemia fetal moderada a severa con sensibilidad del 100% y evita amniocentesis invasivas'],
    differential: ['Incompatibilidad de grupo ABO (mucho más común pero habitualmente leve)', 'Incompatibilidad por anticuerpos irregulares menores (anti-Kell, anti-Duffy, anti-c)', 'Infección por Parvovirus B19'],
    firstLine: [
      { drug: 'PREVENCIÓN UNIVERSAL PRIMARIA DE ENFERMERÍA: INMUNOGLOBULINA ANTI-D (RhoGAM)', dose: '300 mcg (1500 UI) IM profunda administrada a las 28 SEMANAS de gestación a toda mujer Rh negativa no sensibilizada (Coombs negativo) Y OTRA DOSIS DE 300 mcg IM dentro de las 72 HORAS POSPARTO si el recién nacido es Rh positivo', route: 'IM profunda', freq: 'Semana 28 y Posparto', notes: 'PREVIENE LA SENSIBILIZACIÓN MATERNA EN MÁS DEL 99% DE LOS CASOS; administrar también ante cualquier evento de hemorragia feto-materna (aborto, ectópico, amniocentesis, trauma abdominal)' },
      { drug: 'Tratamiento de la anemia fetal severa diagnosticada (Vmax ACM > 1.5 MoM): Transfusión Intravascular Fetal Intrauterina (TIU)', dose: 'Transfusión de concentrado de hematíes O Rh negativo irradiados y desleucocitados directamente en la vena umbilical guiada por ecografía (Cordocentesis)', route: 'Intrauterina fetal', freq: 'Seriada', notes: 'Procedimiento salvador de vida que corrige la anemia y revierte el hidrops fetal' }
    ],
    alternatives: [
      { drug: 'Plasmaféresis materna combinada con Inmunoglobulina endovenosa (IGEV)', dose: 'En aloinmunización severa precoz (< 20 semanas)', route: 'Extracorpórea', freq: 'Semanal', notes: 'Reduce los títulos de anticuerpos circulantes hasta que el feto sea apto para transfusión intrauterina' }
    ],
    nonPharm: ['Monitoreo continuo en unidad de Medicina Fetal de alta complejidad'],
    nursingCare: ['REGLA DE ORO DE ADMINISTRACIÓN DE INMUNOGLOBULINA ANTI-D: 1. Confirmar siempre que la madre sea Rh negativa y el Test de Coombs indirecto sea NEGATIVO; 2. Administrar la dosis de 300 mcg IM a las 28 semanas; 3. Tras el nacimiento, solicitar grupo y factor Rh del recién nacido y Coombs directo del cordón; si el bebé es Rh POSITIVO, inyectar obligatoriamente la segunda ampolla de 300 mcg IM a la madre antes de las 72 horas del parto', 'Verificar que la profilaxis se administre también tras cualquier aborto, biopsia corial o legrado', 'Registro estricto de la fecha y lote de la inmunoglobulina en la cartilla perinatal materna']
  }
];

