import { CatalogoEntry } from './types';

export const capitulo4: CatalogoEntry[] = [
  {
    number: 211,
    id: 'diag-211',
    title: 'Hipertensión arterial esencial',
    cie10: 'I10',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Elevación crónica y sostenida de la presión arterial sistólica ≥ 140 mmHg y/o diastólica ≥ 90 mmHg de origen poligénico y multifactorial, sin causa secundaria identificable, constituyendo el principal factor de riesgo para morbimortalidad cardiovascular.',
    symptoms: ['Predominantemente asintomática ("el asesino silencioso")', 'Cefalea occipital matutina pulsátil en picos hipertensivos', 'Tinnitus o acúfenos pulsátiles', 'Fosfenos o visión borrosa transitoria', 'Mareos y fatiga fácil'],
    redFlags: ['Cifras tensionales ≥ 180/120 mmHg con cefalea intensa, escotomas o dolor torácico (emergencia hipertensiva)'],
    criteria: 'Cifras de PA en consultorio ≥ 140/90 mmHg confirmadas en al menos 2 a 3 visitas separadas, o MAPA (monitoreo ambulatorio de PA) promedio 24h ≥ 130/80 mmHg (o diurno ≥ 135/85 mmHg).',
    labTests: ['Perfil lipídico completo y glucemia en ayunas / HbA1c', 'Creatinina sérica y tasa de filtración glomerular estimada (eGFR)', 'Electrolitos séricos (sodio, potasio)', 'Examen completo de orina y cociente albúmina/creatinina en orina (RAC)'],
    imaging: ['Electrocardiograma de 12 derivaciones (evaluación de hipertrofia ventricular izquierda: índice de Sokolow-Lyon > 35 mm)', 'Fondo de ojo (retinopatía hipertensiva grado I-IV)'],
    differential: ['Hipertensión arterial secundaria', 'Hipertensión de bata blanca', 'Hipertensión enmascarada'],
    firstLine: [
      { drug: 'IECA o ARA-II (Losartán o Enalapril)', dose: 'Losartán 50 a 100 mg/día VO en dosis única matutina, o Enalapril 10 a 20 mg cada 12 horas VO', route: 'VO', freq: 'c/12-24h', notes: 'De primera línea, con nefroprotección comprobada en diabéticos; contraindicado en gestantes' },
      { drug: 'Calcioantagonista Dihidropiridínico (Amlodipino)', dose: '5 a 10 mg/día VO en dosis matutina', route: 'VO', freq: 'c/24h', notes: 'Vasodilatador arterial periférico potente; vigilar edema maleolar' },
      { drug: 'Diurético Tiazídico o tipo Tiazida (Hidroclorotiazida o Clortalidona)', dose: 'Hidroclorotiazida 12.5 a 25 mg/día VO, o Clortalidona 12.5 a 25 mg/día VO', route: 'VO con desayuno', freq: 'c/24h', notes: 'Eficacia demostrada en reducción de eventos ACV, especialmente en ancianos' }
    ],
    alternatives: [
      { drug: 'Terapia combinada en un solo comprimido (IECA/ARA-II + Calcioantagonista o Diurético)', dose: 'Ej. Losartán 50mg + Hidroclorotiazida 12.5mg, o Amlodipino 5mg + Valsartán 160mg', route: 'VO', freq: 'c/24h', notes: 'Recomendada como inicio en la mayoría de guías si la PA basal está > 20/10 mmHg sobre la meta' }
    ],
    nonPharm: ['Dieta tipo DASH: restricción de sodio a < 2 g/día de sodio (< 5 g de sal)', 'Reducción de peso corporal (1 kg perdido reduce 1 mmHg la PAS)', 'Actividad física aeróbica regular ≥ 150 min/semana y moderación estricta de alcohol'],
    nursingCare: ['Técnica estandarizada de medición de PA: paciente sentado con reposo de 5 min, brazo a nivel del corazón, manguito adecuado que cubra el 80% de la circunferencia del brazo', 'Educación sanitaria sobre la adherencia vitalicia ininterrumpida a los antihipertensivos aunque no sienta síntomas', 'Capacitación en automonitoreo de la presión arterial (AMPA) en domicilio y llenado de bitácora', 'Identificación y derivación precoz ante signos de daño en órganos diana (dolor precordial, déficit focal neurológico)']
  },
  {
    number: 212,
    id: 'diag-212',
    title: 'Hipertensión secundaria',
    cie10: 'I15.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Hipertensión arterial debida a una causa subyacente identificable y potencialmente curable o tratable de manera específica (renal, vascular, endocrina, obstructiva o farmacológica), presente en el 5-10% de los hipertensos.',
    symptoms: ['Inicio antes de los 30 años o después de los 55 años de edad', 'Aparición brusca de hipertensión grave o deterioro rápido del control en un hipertenso previamente estable', 'Síntomas orientadores según etiología: ronquidos intensos y pausas respiratorias (SAHOS), crisis paroxísticas de cefalea/palpitaciones/sudoración (feocromocitoma), debilidad muscular por hipopotasemia (hiperaldosteronismo), soplo abdominal en flanco (estenosis de arteria renal)'],
    redFlags: ['Crisis hipertensiva recurrente, hipopotasemia severa no explicada, empeoramiento brusco de creatinina tras iniciar IECA/ARA-II'],
    criteria: 'Hipertensión de inicio atípico o refractaria con confirmación diagnóstica específica de la causa subyacente.',
    labTests: ['Panel bioquímico completo: creatinina, electrolitos con potasio sérico estricto', 'Cociente Aldosterona/Renina plasmática (ARR)', 'Metanefrinas libres plasmáticas o urinarias', 'Cortisol libre en orina de 24h y TSH'],
    imaging: ['Eco-Doppler de arterias renales o Angio-TAC renal (estenosis por ateromatosis o displasia fibromuscular)', 'Polisomnografía (SAHOS)', 'Tomografía de suprarrenales'],
    differential: ['Hipertensión arterial primaria esencial', 'Hipertensión reactiva o de bata blanca', 'Consumo encubierto de simpaticomiméticos o AINEs'],
    firstLine: [
      { drug: 'Tratamiento etiológico específico de la causa de base (ej. Angioplastia renal con stent en estenosis vascular, CPAP en SAHOS, Cirugía suprarrenal)', dose: 'Según causa identificada', route: 'Variable', freq: 'Individualizado', notes: 'La resolución de la etiología primaria puede curar o reducir sustancialmente la hipertensión' }
    ],
    alternatives: [
      { drug: 'Espironolactona', dose: '25 a 50 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Fármaco de elección en sospecha o confirmación de hiperaldosteronismo primario' }
    ],
    nonPharm: ['Suspensión inmediata de fármacos inductores de hipertensión (AINEs crónicos, descongestionantes con pseudoefedrina, corticoides, anticonceptivos orales)'],
    nursingCare: ['Identificación de pistas clínicas de hipertensión secundaria en el triaje de enfermería', 'Vigilancia estrecha de función renal y potasio si el médico prescribe IECA en pacientes con sospecha de estenosis renovascular', 'Educación para la correcta adherencia a dispositivos CPAP nocturnos', 'Registro exacto de la medicación concomitante y suplementos']
  },
  {
    number: 213,
    id: 'diag-213',
    title: 'Hipertensión resistente',
    cie10: 'I10.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Presión arterial que permanece por encima de los objetivos terapéuticos (≥ 140/90 mmHg) a pesar de la utilización concurrente de tres clases de antihipertensivos a dosis óptimas, uno de los cuales debe ser obligatoriamente un diurético.',
    symptoms: ['Generalmente asintomática', 'Cefaleas frecuentes, mareos y nicturia por sobrecarga hidrosalina crónica', 'Evidencia clínica temprana de hipertrofia ventricular y albuminuria'],
    redFlags: ['Mayor incidencia acumulada de infarto de miocardio, accidente cerebrovascular, insuficiencia cardíaca y enfermedad renal terminal'],
    criteria: 'Cifras de PA en consulta ≥ 140/90 mmHg con 3 fármacos a dosis máximas (incluyendo diurético) habiendo descartado pseudorresistencia (mala adherencia, fenómeno de bata blanca o técnica de medición incorrecta).',
    labTests: ['Monitoreo ambulatorio de presión arterial (MAPA de 24h obligatorio para descartar bata blanca)', 'Electrolitos séricos (sodio, potasio), creatinina, aclaramiento de creatinina y microalbuminuria', 'Niveles séricos o de metabolitos de fármacos si se sospecha abandono'],
    imaging: ['Ecocardiograma transtorácico (hipertrofia concéntrica del ventrículo izquierdo y disfunción diastólica)', 'Eco-Doppler renovascular'],
    differential: ['Pseudorresistencia por mala adherencia farmacológica (causa más frecuente)', 'Efecto de bata blanca aislado', 'Hipertensión secundaria no diagnosticada'],
    firstLine: [
      { drug: 'Adición de Espironolactona como 4° fármaco antihipertensivo de elección (Estudio PATHWAY-2)', dose: '25 a 50 mg/día VO en dosis única matutina', route: 'VO', freq: 'c/24h', notes: 'Bloquea el exceso relativo de aldosterona y la retención hidrosalina no detectable; monitorizar potasio sérico' }
    ],
    alternatives: [
      { drug: 'Eplerenona o Amilorida', dose: 'Eplerenona 50 mg c/12h VO o Amilorida 5-10 mg/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Si la espironolactona produce ginecomastia o mastodinia en varones' },
      { drug: 'Bloqueadores beta (Bisoprolol) o alfa-bloqueantes (Doxazosina)', dose: 'Bisoprolol 5-10 mg/día VO o Doxazosina 2-8 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Fármacos de quinta línea' }
    ],
    nonPharm: ['Restricción drástica y estricta de sodio en la dieta (< 1.5 - 2.0 g/día de sodio)', 'Control del peso corporal y corrección del SAHOS con CPAP'],
    nursingCare: ['Evaluación meticulosa y sin juzgar de la adherencia terapéutica (test de Morisky-Green y conteo de pastillas)', 'Control seriado de potasio sérico y función renal a las 2 y 4 semanas de iniciar espironolactona', 'Educación al paciente sobre la detección de hipopotasemia o hiperpotasemia', 'Capacitación al paciente y familia para el registro del MAPA y AMPA']
  },
  {
    number: 214,
    id: 'diag-214',
    title: 'Cardiopatía isquémica crónica',
    cie10: 'I25.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad coronaria caracterizada por la reducción crónica del flujo sanguíneo miocárdico secundario a placas de ateroma estables en las arterias coronarias epicárdicas, con desequilibrio entre el aporte y la demanda miocárdica de oxígeno.',
    symptoms: ['Angina de pecho de esfuerzo típica: opresión retroesternal predecible inducida por ejercicio físico o estrés emocional que cede con el reposo o nitroglicerina sublingual en < 5-10 minutos', 'Disnea de esfuerzo ("equivalente anginoso")', 'Fatiga crónica y limitación progresiva de la capacidad funcional'],
    redFlags: ['Cambio en el patrón anginoso (aparición en reposo, mayor frecuencia o duración: transición a Síndrome Coronario Agudo)'],
    criteria: 'Síntomas compatibles reproducibles + demostración objetiva de isquemia miocárdica mediante pruebas de estrés o evidencia de estenosis coronaria ≥ 50-70% en coronariografía.',
    labTests: ['Troponina sérica de alta sensibilidad (negativa en angina estable para descartar infarto agudo)', 'Perfil lipídico, glucemia, HbA1c y función renal'],
    imaging: ['Electrocardiograma basal de 12 derivaciones (puede ser normal o mostrar ondas T negativas/Q de infartos antiguos)', 'Ergometría (prueba de esfuerzo en cinta)', 'Ecocardiograma de estrés con dobutamina/ejercicio', 'Angio-TAC coronario (evaluación anatómica no invasiva)', 'Cateterismo cardíaco / Cineangiocoronariografía (CAG)'],
    differential: ['Reflujo gastroesofágico o espasmo esofágico', 'Costocondritis (Síndrome de Tietze)', 'Ansiedad / crisis de angustia', 'Estenosis aórtica severa'],
    firstLine: [
      { drug: 'Aspirina (Ácido Acetilsalicílico) + Atorvastatina de alta potencia', dose: 'Aspirina 100 mg/día VO + Atorvastatina 40 a 80 mg/día VO nocturna', route: 'VO', freq: 'c/24h', notes: 'Terapia antiplaquetaria y antilipídica obligatoria para prevenir trombosis y estabilizar placas' },
      { drug: 'Betabloqueante cardioselectivo (Bisoprolol, Atenolol o Metoprolol succinato)', dose: 'Bisoprolol 2.5 a 10 mg/día VO o Metoprolol succinato 50 a 100 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Primera línea antianginosa: reduce frecuencia cardíaca (meta 55-60 lpm), contractilidad y demanda de O2' },
      { drug: 'Nitroglicerina sublingual para rescate', dose: '0.4 a 0.5 mg SL en comprimido o aerosol al aparecer dolor anginoso', route: 'Sublingual', freq: 'SOS c/5 min máx 3 dosis', notes: 'Venodilatador coronario que alivia la precarga y el espasmo; no usar si tomó inhibidores de PDE5' }
    ],
    alternatives: [
      { drug: 'Revascularización miocárdica percutánea (ICP con stent liberador de fármacos) o Quirúrgica (Bypass coronario / CABG)', dose: 'Procedimiento intervencionista o quirúrgico', route: 'Intervencionista', freq: 'Según anatomía', notes: 'En estenosis de tronco coronario izquierdo, enfermedad trivaso o síntomas refractarios a fármacos' },
      { drug: 'Ranolazina o Trimetazidina', dose: 'Ranolazina 500 a 1000 mg cada 12 horas VO', route: 'VO', freq: 'c/12h', notes: 'Antianginosos metabólicos de segunda línea sin efecto hemodinámico hipotensor' }
    ],
    nonPharm: ['Rehabilitación cardiovascular supervisada con ejercicio aeróbico programado', 'Cese tabáquico absoluto e inmediato', 'Dieta mediterránea estricta'],
    nursingCare: ['Instrucción clara al paciente sobre la técnica de uso de nitroglicerina sublingual: sentarse antes de tomarla (prevenir hipotensión y síncope) y no tragarla con agua', 'Educación para acudir de inmediato a emergencias si el dolor opresivo persiste tras 15 minutos o 3 dosis de nitroglicerina', 'Monitoreo de frecuencia cardíaca y presión arterial basal antes de administrar betabloqueantes', 'Fomentar la adhesión a la rehabilitación cardíaca ambulatoria']
  },
  {
    number: 215,
    id: 'diag-215',
    title: 'IAMCEST',
    cie10: 'I21.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Infarto Agudo de Miocardio con Elevación del Segmento ST: emergencia médica cardiológica crítica causada por la oclusión coronaria transmural aguda y completa de una arteria epicárdica, casi siempre por rotura de placa aterosclerótica y trombosis oclusiva superpuesta.',
    symptoms: ['Dolor torácico opresivo, constrictivo o desgarrador de gran intensidad retroesternal ("como una plancha pesada en el pecho")', 'Duración prolongada (> 20-30 minutos) que no cede con reposo ni nitroglicerina', 'Irradiación típica a hombro y brazo izquierdo (borde cubital), cuello, mandíbula, dorso o epigastrio', 'Cortejo vegetativo intenso: sudoración profusa y fría (diaforesis), náuseas, vómitos, mareo, palidez y sensación inminente de muerte'],
    redFlags: ['Paro cardiorrespiratorio por Fibrilación Ventricular primaria (máximo riesgo en primeras 2 horas)', 'Shock cardiogénico (hipotensión severa, oliguria, extremidades frías)', 'Edema agudo de pulmón (insuficiencia ventricular izquierda aguda)'],
    criteria: 'Clínica isquémica compatible + EKG con elevación del punto J persistente del segmento ST ≥ 1 mm (0.1 mV) en al menos 2 derivaciones contiguas (en V2-V3: ≥ 2.5 mm en varones < 40 años, ≥ 2.0 mm en varones ≥ 40 años, ≥ 1.5 mm en mujeres) o Bloqueo Completo de Rama Izquierda (BCRI) nuevo o presumiblemente nuevo.',
    labTests: ['Troponina cardíaca de alta sensibilidad (hs-cTnI o hs-cTnT) seriada (su resultado NO debe retrasar la reperfusión)', 'Creatinfosfoquinasa fracción MB (CK-MB)', 'Hemograma, coagulograma completo, electrolitos y función renal'],
    imaging: ['Electrocardiograma de 12 derivaciones OBLIGATORIO en los primeros 10 minutos de contacto médico', 'Ecocardiograma transtorácico de urgencia para evaluar movilidad parietal y complicaciones mecánicas', 'Coronariografía urgente inmediata (angioplastia primaria)'],
    differential: ['Disección aórtica tipo A aguda (contraindicación absoluta de anticoagulantes y fibrinolíticos)', 'Miopericarditis aguda', 'Tromboembolismo pulmonar masivo', 'Neumotórax a tensión'],
    firstLine: [
      { drug: 'Reperfusión urgente: Angioplastia Coronaria Primaria (ICP) o Fibrinólisis si no hay ICP en < 120 min', dose: 'ICP primaria: cateterismo y stent coronario antes de 90-120 min; Fibrinólisis: Tenecteplasa (TNK) bolo EV ajustado por peso (o Alteplasa) en primeros 10-30 min', route: 'Intervencionista / EV', freq: 'Inmediata', notes: 'EL TIEMPO ES MÚSCULO: restaurar el flujo coronario TIMI 3 con la máxima premura posible' },
      { drug: 'Doble antiagregación plaquetaria (DAPT) inmediata: Aspirina + Ticagrelor o Clopidogrel', dose: 'Aspirina 300 mg masticada bolo inicial + Ticagrelor 180 mg VO dosis de carga (o Clopidogrel 600 mg VO carga)', route: 'VO carga', freq: 'Inmediata', notes: 'Administrar en el primer contacto médico ante sospecha fundada' },
      { drug: 'Anticoagulación parenteral: Heparina no fraccionada o Enoxaparina', dose: 'Enoxaparina 30 mg bolo EV seguido de 1 mg/kg SC cada 12 horas (o Heparina 70-100 UI/kg bolo EV)', route: 'EV / SC', freq: 'Reglado', notes: 'Mantiene permeabilidad y previene retrombosis' },
      { drug: 'Tratamiento del dolor y vasodilatador: Morfina EV + Nitratos sublinguales', dose: 'Morfina 2 a 4 mg EV lento c/5-15 min si hay dolor severo no controlado; Nitroglicerina SL', route: 'EV / SL', freq: 'SOS', notes: 'Evitar nitratos en infarto de ventrículo derecho (derivaciones V3R-V4R) o hipotensión' }
    ],
    alternatives: [
      { drug: 'Cirugía de revascularización coronaria de urgencia (CABG)', dose: 'Cirugía cardíaca abierta', route: 'Quirúrgica', freq: 'Urgente', notes: 'En anatomía no apta para ICP con shock persistente o fallo de angioplastia' }
    ],
    nonPharm: ['Monitoreo electrocardiográfico continuo inmediato en sala de shock trauma o UCI con desfibrilador listo', 'Oxigenoterapia solo si SaO2 < 90% (el oxígeno a altas concentraciones produce vasoconstricción coronaria perjudicial)'],
    nursingCare: ['PROTOCOLO DE ATENCIÓN INMEDIATA: Toma de EKG de 12 derivaciones en < 10 minutos desde el ingreso', 'Canalización inmediata de 2 vías venosas periféricas de grueso calibre (18G) en extremidad superior', 'Monitoreo estricto continuo de ritmo cardíaco con palas del desfibrilador preparadas para actuar en FV', 'Control de constantes vitales cada 15 minutos y administración inmediata de la carga de antiagregantes masticados', 'Vigilancia de signos de sangrado tras la fibrinólisis']
  },
  {
    number: 216,
    id: 'diag-216',
    title: 'IAMSEST',
    cie10: 'I21.4',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Infarto Agudo de Miocardio sin Elevación del Segmento ST: síndrome coronario agudo caracterizado por necrosis celular miocárdica resultante de una isquemia aguda subendocárdica no oclusiva total o de flujo intermitente.',
    symptoms: ['Dolor torácico anginoso en reposo o prolongado (> 20 min)', 'Angina de reciente comienzo (clase III-IV de la CCS) o angina acelerada (in crescendo)', 'Disnea, diaforesis, náuseas o mareos acompañantes'],
    redFlags: ['Inestabilidad hemodinámica o shock cardiogénico', 'Arritmias ventriculares sostenidas (TV/FV)', 'Dolor torácico recurrente refractario a tratamiento farmacológico pleno (criterios de muy alto riesgo para cateterismo < 2h)'],
    criteria: 'Elevación y/o caída dinámica de biomarcadores cardíacos (troponina de alta sensibilidad por encima del percentil 99 del límite de referencia) + al menos un signo de isquemia (clínica típica, cambios en el EKG como infradesnivel del ST o inversión simétrica de la onda T, o ecocardiograma con alteración de contractilidad segmentaria).',
    labTests: ['Troponina cardíaca de alta sensibilidad (hs-cTn) con protocolo rápido 0h/1h o 0h/2h para descartar o confirmar diagnóstico', 'CK-MB, creatinina, electrolitos, coagulación y hemograma'],
    imaging: ['Electrocardiograma de 12 derivaciones repetido seriadamente (a los 15-30 min y ante recurrencia del dolor)', 'Ecocardiograma transtorácico precoz', 'Estratificación invasiva mediante coronariografía (inmediata < 2h en muy alto riesgo; precoz < 24h en alto riesgo según Score GRACE)'],
    differential: ['Angina inestable (sin elevación de troponinas)', 'Miocarditis aguda', 'Síndrome de Takotsubo', 'Embolia pulmonar'],
    firstLine: [
      { drug: 'Doble antiagregación plaquetaria: Aspirina + Ticagrelor (o Clopidogrel)', dose: 'Aspirina 150 a 300 mg VO masticada bolo inicial, luego 100 mg/día + Ticagrelor 180 mg VO carga, luego 90 mg cada 12 horas', route: 'VO', freq: 'Reglado', notes: 'Reduce significativamente la recurrencia de eventos isquémicos mayores' },
      { drug: 'Anticoagulación sistémica: Fondaparinux o Enoxaparina', dose: 'Fondaparinux 2.5 mg SC cada 24 horas (menor riesgo de sangrado) o Enoxaparina 1 mg/kg SC cada 12 horas', route: 'SC', freq: 'c/12-24h', notes: 'Mantener hasta el cateterismo coronario o alta médica' },
      { drug: 'Tratamiento antiisquémico: Nitratos + Betabloqueantes (Metoprolol o Bisoprolol)', dose: 'Nitroglicerina SL o en infusión EV + Bisoprolol 2.5 a 5 mg/día VO', route: 'SL / EV / VO', freq: 'Según dolor', notes: 'Alivia los síntomas de isquemia y disminuye el consumo miocárdico de oxígeno' }
    ],
    alternatives: [
      { drug: 'Cateterismo cardíaco invasivo precoz con Angioplastia y Stent', dose: 'Estrategia invasiva reglada', route: 'Intervencionista', freq: 'En < 24 horas', notes: 'De elección en pacientes con Score de riesgo GRACE > 140' }
    ],
    nonPharm: ['Reposo absoluto en cama con cabecera a 30-45° en unidad de cuidados coronarios', 'Monitoreo de telemetría continua'],
    nursingCare: ['Monitorización continua del segmento ST en monitor cardiaco', 'Toma inmediata de nuevo EKG de 12 derivaciones ante cualquier episodio de recurrencia del dolor torácico', 'Vigilancia de signos de sangrado menor o mayor secundario a la doble antiagregación y anticoagulación', 'Cálculo del Score de riesgo GRACE y TIMI para alertar al equipo médico']
  },
  {
    number: 217,
    id: 'diag-217',
    title: 'Angina de pecho estable',
    cie10: 'I20.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Síndrome clínico transitorio caracterizado por dolor torácico opresivo secundario a isquemia miocárdica reversible, desencadenado de manera predecible por el esfuerzo físico o estrés y aliviado rápidamente con reposo o nitroglicerina.',
    symptoms: ['Sensación de pesadez, opresión o tirantez retroesternal', 'Duración típica de 2 a 5 minutos (rara vez > 10 min)', 'Desencadenado al subir escaleras, caminar cuesta arriba, tras comidas copiosas o con el frío', 'Cese rápido en menos de 5 minutos al detener la actividad física'],
    redFlags: ['Angina progresiva o en reposo (transición a síndrome coronario agudo)', 'Aparición de disnea aguda o síncope durante el esfuerzo'],
    criteria: 'Cumplimiento de las 3 características de angina típica: 1. Dolor subesternal característico; 2. Provocado por esfuerzo o estrés emocional; 3. Aliviado por reposo o nitratos en minutos. (Si cumple 2 es atípica; si cumple ≤ 1 es no anginoso).',
    labTests: ['Troponina sérica (siempre normal en angina estable)', 'Perfil lipídico, glucemia, función tiroidea y hemograma (descarte de anemia desencadenante)'],
    imaging: ['Prueba de esfuerzo en cinta ergométrica (descenso del ST horizontal o descendente ≥ 1 mm)', 'Ecocardiograma de estrés con ejercicio físico o dobutamina', 'Angio-TAC de arterias coronarias'],
    differential: ['Espasmo esofágico difuso', 'Osteocondritis esternal', 'Dolor pleurítico'],
    firstLine: [
      { drug: 'Nitroglicerina sublingual para abortar las crisis', dose: '0.4 a 0.5 mg SL colocado bajo la lengua al comenzar el dolor', route: 'Sublingual', freq: 'SOS', notes: 'Alivio rápido en 1 a 3 minutos; el paciente debe llevarla siempre consigo' },
      { drug: 'Betabloqueantes orales (Bisoprolol, Atenolol o Carvedilol)', dose: 'Bisoprolol 2.5 a 10 mg/día VO en ayunas matutinas', route: 'VO', freq: 'c/24h', notes: 'Tratamiento de primera línea preventivo para disminuir episodios anginosos' },
      { drug: 'Aspirina + Estatina de alta intensidad para prevención secundaria', dose: 'Aspirina 100 mg/día VO + Atorvastatina 40 a 80 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Estabilización de placa y prevención de infarto futuro' }
    ],
    alternatives: [
      { drug: 'Calcioantagonistas dihidropiridínicos (Amlodipino)', dose: '5 a 10 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Alternativa o combinación si los betabloqueantes están contraindicados o insuficientes' }
    ],
    nonPharm: ['Programa estructurado de rehabilitación cardíaca ambulatoria', 'Fraccionamiento de las comidas y evitar esfuerzos intensos tras comer o en climas gélidos'],
    nursingCare: ['Instruir al paciente en no tragar saliva de golpe al colocarse la nitroglicerina SL y advertir que puede sentir calor o cefalea transitoria', 'Educar sobre los umbrales de esfuerzo físico y la importancia de calentar antes del ejercicio', 'Control de frecuencia cardíaca basal con meta terapéutica entre 55 y 60 lpm en reposo', 'Enseñanza sobre cuándo consultar de urgencia por cambio en las características del dolor']
  },
  {
    number: 218,
    id: 'diag-218',
    title: 'Angina de Prinzmetal',
    cie10: 'I20.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Angina vasoespástica caracterizada por dolor torácico isquémico agudo causado por espasmo focal y severo de una arteria coronaria epicárdica de gran calibre, típicamente en reposo o durante la noche/madrugada.',
    symptoms: ['Dolor torácico opresivo de gran intensidad que ocurre predominantemente en reposo, de madrugada (entre las 00:00 y las 06:00 horas)', 'No se relaciona con el esfuerzo físico (buena tolerancia al ejercicio durante el día)', 'Frecuente en pacientes jóvenes, fumadores y mujeres sin múltiples factores de riesgo cardiovascular'],
    redFlags: ['Arritmias ventriculares malignas (TV/FV) o bloqueo AV completo transitorio durante el espasmo coronario con muerte súbita'],
    criteria: 'Dolor torácico en reposo con elevación transitoria del segmento ST en el EKG que se normaliza espontáneamente o tras nitroglicerina sublingual + coronariografía sin obstrucciones estenóticas fijas significativas pero con vasoespasmo demostrable.',
    labTests: ['Troponina sérica (normal o ligeramente positiva transitoria)', 'Toxicología en orina (descarte de consumo de cocaína o anfetaminas)'],
    imaging: ['EKG de 12 derivaciones durante el episodio de dolor (elevación transitoria del ST)', 'Holter de 24-48 horas con monitorización de ST', 'Coronariografía con prueba de provocación de espasmo (ergonovina o acetilcolina intracoronaria)'],
    differential: ['IAMCEST por trombosis fija', 'Miocarditis', 'Pericarditis aguda'],
    firstLine: [
      { drug: 'Antagonistas del calcio (Diltiazem o Amlodipino)', dose: 'Diltiazem 120 a 360 mg/día VO o Amlodipino 5 a 10 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Fármacos de primera línea indiscutibles: vasodilatan y previenen el vasoespasmo coronario' },
      { drug: 'Nitratos de acción prolongada (Mononitrato de isosorbida)', dose: '30 a 60 mg/día VO por la tarde/noche', route: 'VO nocturno', freq: 'c/24h', notes: 'Coadyuvante para prevenir crisis nocturnas' }
    ],
    alternatives: [],
    nonPharm: ['CESE ABSOLUTO Y TERMINANTE DEL TABAQUISMO (el humo del tabaco es el principal desencadenante de vasoespasmo)', 'Evitar exposición al frío brusco, hiperventilación, estrés extremo y drogas vasoconstrictoras'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA: Los betabloqueantes NO cardioselectivos están CONTRAINDICADOS porque bloquean la vasodilatación mediada por beta-2 y dejan libre la vasoconstricción alfa-adrenérgica, agravando el vasoespasmo', 'Registro rápido de EKG de 12 derivaciones mientras el paciente refiere el dolor torácico para captar la elevación transitoria del ST', 'Monitoreo de arritmias ventriculares durante los picos nocturnos', 'Educación sanitaria para el abandono del tabaco']
  },
  {
    number: 219,
    id: 'diag-219',
    title: 'Insuficiencia cardíaca sistólica',
    cie10: 'I50.2',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Insuficiencia cardíaca con Fracción de Eyección Reducida (IC-FEr, FEVI ≤ 40%): síndrome clínico complejo caracterizado por la incapacidad del ventrículo izquierdo para bombear un volumen sanguíneo adecuado para satisfacer las demandas metabólicas corporales debido a pérdida de contractilidad miocárdica.',
    symptoms: ['Disnea de esfuerzo progresiva que avanza a reposo', 'Ortopnea (necesidad de usar 2 o más almohadas para dormir sin sensación de ahogo)', 'Disnea paroxística nocturna (despertar súbito con sensación de asfixia que obliga a sentarse al borde de la cama)', 'Fatiga muscular profunda, intolerancia al ejercicio y astenia', 'Edema bilateral con fóvea en pies y tobillos con progresión ascendente', 'Ingurgitación yugular y reflujo hepatoyugular positivo'],
    redFlags: ['Edema agudo de pulmón (crepitantes en marea montante, esputo rosado espumoso)', 'Shock cardiogénico con hipoperfusión periférica'],
    criteria: 'Criterios clínicos de Framingham (2 mayores o 1 mayor + 2 menores) + FEVI ≤ 40% en ecocardiograma transtorácico + Péptidos natriuréticos elevados.',
    labTests: ['Péptido natriurético tipo B (BNP > 35 pg/mL en ambulatorio o > 100 pg/mL en agudo; o NT-proBNP > 125 pg/mL)', 'Electrolitos séricos (hiponatremia dilucional en fases avanzadas, potasio)', 'Función renal (creatinina, urea) y hepática'],
    imaging: ['Ecocardiograma transtorácico (FEVI ≤ 40%, dilatación ventricular izquierda, cálculo de volúmenes telesistólico y telediastólico)', 'Radiografía de tórax (cardiomegalia con índice cardiotorácico > 0.50, congestión venocapilar pulmonar y líneas B de Kerley)'],
    differential: ['Enfermedad pulmonar obstructiva crónica (EPOC) reagudizada', 'Insuficiencia cardíaca con fracción de eyección preservada (IC-FEp)', 'Cirrosis hepática con ascitis y edemas'],
    firstLine: [
      { drug: 'Los 4 Pilares Farmacológicos Modificadores de Enfermedad (Guías ESC/AHA): 1. ARNI (Sacubitril/Valsartán) o IECA', dose: 'Sacubitril/Valsartán 24/26 mg cada 12 horas VO, titulando hasta 97/103 mg cada 12 horas (requiere 36h de lavado previo si usaba IECA)', route: 'VO', freq: 'c/12h', notes: 'Reduce significativamente mortalidad cardiovascular y hospitalizaciones por IC' },
      { drug: '2. Betabloqueante con evidencia (Bisoprolol, Carvedilol o Metoprolol succinato)', dose: 'Bisoprolol 1.25 mg/día titulando hasta 10 mg/día; Carvedilol 3.125 mg c/12h titulando a 25-50 mg c/12h', route: 'VO', freq: 'c/12-24h', notes: 'Iniciar en paciente euvolémico y clínicamente estable; titulación lenta' },
      { drug: '3. Antagonista del receptor mineralocorticoide (Espironolactona o Eplerenona)', dose: 'Espironolactona 25 a 50 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Reduce fibrosis miocárdica; controlar potasio sérico y función renal' },
      { drug: '4. Inhibidores de SGLT2 (Dapagliflozina o Empagliflozina)', dose: 'Dapagliflozina 10 mg/día VO o Empagliflozina 10 mg/día VO en dosis única fija', route: 'VO', freq: 'c/24h', notes: 'Beneficio pronóstico y descongestivo independiente de si el paciente tiene diabetes o no' },
      { drug: 'Diuréticos de asa para control sintomático de congestión (Furosemida)', dose: '20 a 40 mg/día VO (o dosis mayor EV si congestión aguda)', route: 'VO/EV', freq: 'c/12-24h', notes: 'Alivio rápido de la sobrecarga de volumen; no modifica la sobrevida por sí sola' }
    ],
    alternatives: [
      { drug: 'Dispositivos de alta complejidad: Desfibrilador Automático Implantable (DAI) o Terapia de Resincronización Cardíaca (TRC-D)', dose: 'Implante percutáneo', route: 'Intervencionista', freq: 'Permanente', notes: 'Indicado si FEVI ≤ 35% y QRS ancho ≥ 130-150 ms tras 3 meses de terapia farmacológica óptima' }
    ],
    nonPharm: ['Restricción moderada de sodio (< 2 g/día) y de líquidos (1.5-2 L/día en hiponatremia o sobrecarga)', 'Pesaje diario en ayunas'],
    nursingCare: ['REGLA DE LAS 3 LIBRAS: Instruir al paciente en pesarse todas las mañanas al levantarse tras orinar; si sube > 1.5 a 2 kg en 2-3 días, avisar de inmediato para ajuste de diuréticos', 'Monitoreo de presión arterial y frecuencia cardíaca antes de cada dosis de betabloqueantes y ARNI', 'Control de balance hídrico y vigilancia de hipopotasemia o hiperpotasemia', 'Educación sobre el cumplimiento estricto de los 4 fármacos pilares']
  },
  {
    number: 220,
    id: 'diag-220',
    title: 'Insuficiencia cardíaca diastólica',
    cie10: 'I50.3',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Insuficiencia cardíaca con Fracción de Eyección Preservada (IC-FEp, FEVI ≥ 50%): trastorno miocárdico caracterizado por alteración en la relajación ventricular y rigidez parietal patológica, lo que ocasiona un llenado telediastólico defectuoso a expensas de presiones de llenado elevadas.',
    symptoms: ['Disnea de esfuerzo e intolerancia al ejercicio en pacientes de edad avanzada, mujeres, hipertensos de larga data y con obesidad', 'Congestión venosa pulmonar y periférica con edemas en extremidades inferiores', 'Frecuente desencadenamiento brusco de disnea ante episodios de taquicardia o fibrilación auricular'],
    redFlags: ['Descompensación rápida con edema pulmonar agudo hipertensivo'],
    criteria: 'Síntomas y signos de insuficiencia cardíaca + FEVI preservada (≥ 50%) + evidencia objetiva de disfunción diastólica en ecocardiograma (elevación de E/e\', masa ventricular izquierda aumentada o dilatación de aurícula izquierda) + elevación de péptidos natriuréticos (BNP/NT-proBNP).',
    labTests: ['NT-proBNP sérico (> 125 pg/mL en ritmo sinusal, > 365 pg/mL en fibrilación auricular)', 'Creatinina sérica, perfil hepático, hemograma y ferritina sérica'],
    imaging: ['Ecocardiograma transtorácico doppler tisular (volumen de aurícula izquierda > 34 mL/m2, relación E/e\' > 13-14)', 'Score H2FPEF para probabilidad diagnóstica'],
    differential: ['Hipertensión pulmonar primaria', 'Enfermedad pericárdica constrictiva', 'Enfermedad venosa crónica severa'],
    firstLine: [
      { drug: 'Inhibidores de SGLT2 (Empagliflozina o Dapagliflozina) - ÚNICA CLASE CON EVIDENCIA CLASE I', dose: 'Empagliflozina 10 mg/día VO o Dapagliflozina 10 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Demostraron reducir significativamente hospitalizaciones por IC y eventos cardiovasculares en IC-FEp (Estudios EMPEROR-Preserved y DELIVER)' },
      { drug: 'Diuréticos de asa (Furosemida o Torasemida) para congestión', dose: 'Furosemida 20 a 40 mg/día VO titulada a la dosis mínima eficaz', route: 'VO', freq: 'c/12-24h', notes: 'Alivian la disnea y los edemas; evitar dosis excesivas que causen hipotensión o caída del gasto' }
    ],
    alternatives: [
      { drug: 'Antagonistas del receptor mineralocorticoide (Espironolactona)', dose: '25 a 50 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Beneficio en pacientes con FEVI en el rango medio o limítrofe (45-55%)' },
      { drug: 'Control estricto de la presión arterial con ARA-II / Calcioantagonistas', dose: 'Según meta de PA < 130/80 mmHg', route: 'VO', freq: 'c/24h', notes: 'Pilar esencial para revertir la hipertrofia concéntrica' }
    ],
    nonPharm: ['Control intensivo del peso corporal en obesidad', 'Control estricto de la frecuencia ventricular ante fibrilación auricular'],
    nursingCare: ['Monitoreo riguroso de la presión arterial y peso diario', 'Educación sobre la detección oportuna de congestión periférica (fóvea pretibial)', 'Instruir al paciente que evite la deshidratación aguda que precipite colapso diastólico', 'Monitoreo de función renal y electrolitos']
  },
  {
    number: 221,
    id: 'diag-221',
    title: 'Fibrilación auricular',
    cie10: 'I48.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Taquiarritmia supraventricular caracterizada por una activación eléctrica auricular desorganizada, caótica y rápida (350-600 lpm) que produce pérdida de la contracción mecánica coordinada de las aurículas y una respuesta ventricular irregularmente irregular.',
    symptoms: ['Palpitaciones rápidas, desordenadas y "a saltos" en el pecho', 'Disnea de esfuerzo o reposo, astenia, mareos e intolerancia al ejercicio', 'Poliuria aguda (por liberación de péptido natriurético auricular)', 'Puede ser totalmente asintomática (FA silente) y debutar directamente como un ACV isquémico'],
    redFlags: ['Accidente cerebrovascular embólico masivo (trombos en la orejuela izquierda)', 'Inestabilidad hemodinámica aguda (angina refractaria, shock o edema pulmonar)', 'Taquimiocardiopatía'],
    criteria: 'EKG de 12 derivaciones o trazado de tira continua de ≥ 30 segundos que demuestre: 1. Ausencia completa de ondas P sinusales repetitivas; 2. Intervalos R-R absolutamente irregulares ("ritmo irregularmente irregular"); 3. Ondas "f" de fibrilación basales de morfología y frecuencia variable.',
    labTests: ['Perfil tiroideo completo (TSH para descarte de hipertiroidismo desencadenante)', 'Electrolitos séricos (potasio, magnesio)', 'Hemograma, función renal y hepática'],
    imaging: ['Ecocardiograma transtorácico (tamaño de aurícula izquierda, valvulopatías)', 'Ecocardiograma transesofágico (ETE: descarte de trombo en orejuela izquierda antes de cardioversión)'],
    differential: ['Flutter auricular con conducción variable', 'Extrasistolía ventricular o auricular multifocal frecuente', 'Taquicardia auricular multifocal'],
    firstLine: [
      { drug: 'Anticoagulación oral preventiva de ACV según Score CHA2DS2-VASc: Anticoagulantes Orales de Acción Directa (ACOD) de preferencia', dose: 'Apixabán 5 mg cada 12h VO, o Rivaroxabán 20 mg/día VO con cena, o Dabigatrán 150 mg cada 12h VO', route: 'VO', freq: 'c/12-24h', notes: 'Indicada formalmente si CHA2DS2-VASc ≥ 2 en varones o ≥ 3 en mujeres; no requieren controles de INR' },
      { drug: 'Control de frecuencia ventricular: Betabloqueantes o Calcioantagonistas no dihidropiridínicos', dose: 'Bisoprolol 2.5 a 10 mg/día VO, o Metoprolol succinato 50 a 100 mg/día VO, o Diltiazem 120 a 240 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Meta de frecuencia cardíaca en reposo < 100-110 lpm; evitar diltiazem/verapamilo en FEVI reducida' }
    ],
    alternatives: [
      { drug: 'Warfarina sódica', dose: '2.5 a 5 mg/día VO titulada con INR meta entre 2.0 y 3.0', route: 'VO', freq: 'c/24h', notes: 'Obligatoria y exclusiva si la FA es valvular (estenosis mitral moderada-severa o prótesis mecánica)' },
      { drug: 'Cardioversión eléctrica sincronizada (150-200 J bifásico) o Farmacológica (Amiodarona o Flecainida)', dose: 'Choque sincronizado o Amiodarona 300 mg bolo EV', route: 'EV / Eléctrica', freq: 'Urgente', notes: 'Inmediata si hay inestabilidad hemodinámica; requiere descartar trombo o anticoagular 3 semanas' },
      { drug: 'Ablación percutánea con catéter de venas pulmonares', dose: 'Procedimiento electrofisiológico', route: 'Intervencionista', freq: 'Única', notes: 'De elección para control de ritmo en pacientes sintomáticos resistentes' }
    ],
    nonPharm: ['Abstinencia total de alcohol (previene el "síndrome del corazón en vacaciones")', 'Control del peso y tratamiento del SAHOS'],
    nursingCare: ['Toma de pulso periférico y auscultación cardíaca: detectar el déficit de pulso (diferencia entre frecuencia central auscultada y pulso radial palpable)', 'Educación para la salud sobre la anticoagulación: signos de sangrado menor (gingivorragia, epistaxis, hematomas) y signos de alarma (melena, hematuria, cefalea brusca)', 'Verificar que la cardioversión eléctrica esté SIEMPRE en modo SINCRONIZADO (para evitar disparo sobre la onda T y fibrilación ventricular)', 'Control estricto de la frecuencia cardíaca en reposo y ejercicio']
  },
  {
    number: 222,
    id: 'diag-222',
    title: 'Flutter auricular',
    cie10: 'I48.3',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Arritmia auricular caracterizada por un circuito de macrorreentrada regular y rápido en la aurícula derecha (flutter típico dependiente del istmo cavotricuspídeo), con una frecuencia auricular típica constante de aprox. 300 lpm y respuesta ventricular regular o irregular.',
    symptoms: ['Palpitaciones taquicárdicas rápidas y regulares (frecuentemente a 150 lpm en conducción AV 2:1)', 'Disnea, opresión torácica, fatiga y presíncope', 'Hipotensión en pacientes con cardiopatía estructural'],
    redFlags: ['Conducción AV 1:1 con taquicardia extrema a 300 lpm y colapso circulatorio'],
    criteria: 'EKG con ondas de flutter idénticas y continuas en "dientes de sierra" (ondas F), típicamente negativas en derivaciones inferiores (II, III, aVF) en flutter típico común horario.',
    labTests: ['Péptidos natriuréticos, electrolitos séricos (K, Mg) y perfil tiroideo'],
    imaging: ['Ecocardiograma transtorácico', 'Ecocardiograma transesofágico previo a cardioversión si duración > 48h sin anticoagulación'],
    differential: ['Taquicardia sinusal', 'Taquicardia paroxística supraventricular por reentrada nodal', 'Fibrilación auricular'],
    firstLine: [
      { drug: 'Tratamiento definitivo curativo: Ablación por radiofrecuencia del istmo cavotricuspídeo (ICT)', dose: 'Procedimiento de electrofisiología percutánea', route: 'Intervencionista', freq: 'Única', notes: 'Tasa de curación definitiva > 95% con mínima tasa de complicaciones' },
      { drug: 'Cardioversión eléctrica sincronizada de baja energía', dose: '50 a 100 Joules bifásico sincronizado', route: 'Eléctrica', freq: 'Inmediata', notes: 'Sumamente eficaz para revertir a ritmo sinusal en agudo' }
    ],
    alternatives: [
      { drug: 'Fármacos frenadores del nodo AV: Verapamilo, Diltiazem o Betabloqueantes', dose: 'Metoprolol 2.5 a 5 mg EV lento o Verapamilo 5 mg EV', route: 'EV', freq: 'SOS', notes: 'Difícil control farmacológico de la frecuencia comparado con la FA' },
      { drug: 'Anticoagulación oral formal (mismos criterios de CHA2DS2-VASc que en la FA)', dose: 'ACOD o Warfarina', route: 'VO', freq: 'c/12-24h', notes: 'Riesgo tromboembólico similar a la fibrilación auricular' }
    ],
    nonPharm: ['Monitoreo continuo de telemetría'],
    nursingCare: ['Verificar sincronización del desfibrilador antes de la descarga eléctrica', 'Vigilancia de presión arterial durante la administración de bloqueadores del nodo AV', 'Instruir sobre la anticoagulación oral continua']
  },
  {
    number: 223,
    id: 'diag-223',
    title: 'Taquicardia supraventricular',
    cie10: 'I47.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Taquicardia paroxística de QRS estrecho (< 120 ms) con origen por encima de la bifurcación del haz de His, debida principalmente a Taquicardia por Reentrada Nodal (TRN) o Reentrada Auriculoventricular ortodrómica mediada por vía accesoria oculta o manifiesta (Wolff-Parkinson-White).',
    symptoms: ['Inicio y terminación súbitos "en encendido y apagado de interruptor" de palpitaciones muy rápidas y regulares (150 a 250 lpm)', 'Sensación de "golpeteo en la garganta o cuello" (signo de la rana por contracción auricular contra válvulas AV cerradas)', 'Ansiedad, disnea leve, mareos y poliuria post-crisis'],
    redFlags: ['Inestabilidad hemodinámica aguda: hipotensión severa, dolor precordial isquémico o síncope'],
    criteria: 'EKG con taquicardia regular de complejos QRS estrechos (< 120 ms), frecuencia ventricular habitualmente entre 160 y 220 lpm y ausencia de ondas P visibles separadas del QRS.',
    labTests: ['Electrolitos séricos (potasio, magnesio, calcio), hemograma y perfil tiroideo'],
    imaging: ['Ecocardiograma transtorácico para descartar cardiopatía estructural'],
    differential: ['Taquicardia sinusal', 'Flutter auricular con conducción AV 2:1 fija', 'Taquicardia ventricular fascicular (QRS < 120 ms infrecuente)'],
    firstLine: [
      { drug: '1° Paso: Maniobras Vagales (Maniobra de Valsalva Modificada con elevación pasiva de piernas)', dose: 'Espiración forzada contra manómetro a 40 mmHg por 15 segundos sentado, seguido de decúbito supino con elevación de miembros inferiores a 45°', route: 'Fisiológica', freq: 'Inmediata', notes: 'Tasa de éxito de reversión > 40% demostrada en ensayo REVERT' },
      { drug: '2° Paso farmacológico: Adenosina en bolo endovenoso ultrarrápido', dose: '6 mg en bolo EV ultrarrápido seguido de flush inmediato de 20 mL de solución salina; si no revierte en 1-2 min, aplicar segundo bolo de 12 mg EV', route: 'EV rápido con llave de 3 pasos', freq: 'Inmediato', notes: 'Produce bloqueo AV transitorio de pocos segundos; advertir al paciente sensación fugaz de opresión torácica' }
    ],
    alternatives: [
      { drug: 'Verapamilo o Diltiazem EV', dose: 'Verapamilo 5 a 10 mg EV lento en 2 minutos', route: 'EV lento', freq: 'SOS', notes: 'Si la adenosina está contraindicada (asma severa broncoespástica)' },
      { drug: 'Cardioversión eléctrica sincronizada (50 a 100 J)', dose: 'Choque sincronizado inmediato', route: 'Eléctrica', freq: 'Urgente', notes: 'Si el paciente presenta inestabilidad hemodinámica' },
      { drug: 'Ablación por radiofrecuencia con catéter de la vía lenta nodal o vía accesoria', dose: 'Tratamiento curativo definitivo', route: 'Intervencionista', freq: 'Electivo', notes: 'Eficacia curativa > 95%' }
    ],
    nonPharm: ['Evitar cafeína, bebidas energizantes, nicotina y descongestionantes nasales'],
    nursingCare: ['TÉCNICA DE ADENOSINA: Canalizar vía venosa en fosa antecubital izquierda lo más cercana posible al corazón, usar llave de 3 vías con la jeringa de adenosina en un puerto y la de 20 mL de suero salino en el otro, e inyectar el bolo e inmediatamente el flush elevando el brazo', 'Mantener al paciente monitorizado con registro de tira de ritmo continuo durante la inyección', 'Tranquilizar al paciente informándole con antelación que sentirá calor o sensación de opresión breve en el pecho que dura menos de 10 segundos']
  },
  {
    number: 224,
    id: 'diag-224',
    title: 'Extrasístoles frecuentes',
    cie10: 'I49.3',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Latidos cardíacos ectópicos prematuros originados en las aurículas (extrasístoles auriculares - ESA) o en los ventrículos (extrasístoles ventriculares - ESV), caracterizados por frecuencia elevada (> 10-15% del total de latidos en 24 horas), lo que puede deteriorar la función ventricular.',
    symptoms: ['Sensación de "pausa o vacío en el pecho" seguida de un latido fuerte ("vuelco al corazón") correspondiente a la pausa compensadora post-extrasistólica', 'Palpitaciones molestas que se perciben más en reposo o al acostarse', 'Fatiga y mareos si son muy frecuentes'],
    redFlags: ['Carga arrítmica > 20% en Holter con desarrollo de taquimiocardiopatía y descenso de la FEVI', 'Fenómeno de R sobre T que desencadene taquicardia o fibrilación ventricular'],
    criteria: 'Registro EKG o Holter de latidos prematuros con pausa compensatoria (QRS estrecho en ESA; QRS ancho y abigarrado sin onda P previa en ESV). Carga > 10% del total de latidos de 24 horas define extrasístoles de alta frecuencia.',
    labTests: ['Electrolitos séricos (descarte riguroso de hipopotasemia e hipomagnesemia)', 'TSH ultrasensible (descarte de hipertiroidismo)'],
    imaging: ['Holter electrocardiográfico de 24-48 horas (cuantificación de la carga arrítmica y morfología mono o polimórfica)', 'Ecocardiograma transtorácico (medición basal de la FEVI y descarte de cardiopatía estructural)', 'Resonancia magnética cardíaca si se sospecha displasia arritmogénica o cicatriz miocárdica'],
    differential: ['Parasistolia ventricular', 'Bloqueo sinoauricular o auriculoventricular de segundo grado', 'Contracciones ventriculares benignas del deportista'],
    firstLine: [
      { drug: 'Betabloqueantes cardioselectivos (Bisoprolol o Metoprolol succinato)', dose: 'Bisoprolol 2.5 a 5 mg/día VO matutino', route: 'VO', freq: 'c/24h', notes: 'Fármacos de primera línea para supresión sintomática y reducción de la ectopia' },
      { drug: 'Calcioantagonistas no dihidropiridínicos (Verapamilo)', dose: 'Verapamilo 120 a 240 mg/día VO en ESV idiopáticas del tracto de salida ventricular', route: 'VO', freq: 'c/12-24h', notes: 'Eficaz en extrasístoles sensibles a calcio con corazón estructuralmente sano' }
    ],
    alternatives: [
      { drug: 'Ablación por radiofrecuencia con catéter del foco ectópico', dose: 'Procedimiento intervencionista electrofisiológico', route: 'Intervencionista', freq: 'Única', notes: 'Tratamiento de elección si la carga es > 10-15% o existe disfunción ventricular izquierda inducida por ectopias' }
    ],
    nonPharm: ['Erradicación del consumo de tabaco, café en exceso, bebidas energizantes y alcohol', 'Manejo del estrés y descanso adecuado'],
    nursingCare: ['Tranquilizar al paciente explicando la naturaleza benigna en corazones sin enfermedad estructural para reducir el círculo vicioso de ansiedad-extrasístoles', 'Verificación de la correcta colocación y registro de electrodos durante el estudio Holter domiciliario', 'Monitoreo de electrolitos séricos']
  },
  {
    number: 225,
    id: 'diag-225',
    title: 'Taquicardia ventricular',
    cie10: 'I47.2',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Arritmia ventricular potencialmente letal definida por una sucesión de 3 o más latidos ectópicos prematuros originados distalmente a la bifurcación del haz de His a una frecuencia > 100-120 lpm, con complejos QRS anchos (≥ 120 ms). Se clasifica en no sostenida (< 30 s) o sostenida (≥ 30 s o con colapso hemodinámico).',
    symptoms: ['Palpitaciones intensas de inicio brusco', 'Hipotensión severa, mareos intensos, diaforesis y presíncope o síncope franco', 'Disnea aguda y dolor torácico isquémico'],
    redFlags: ['Degeneración rápida en Fibrilación Ventricular y Paro Cardiorrespiratorio', 'Shock cardiogénico irreversible'],
    criteria: 'EKG con taquicardia regular de QRS ancho (≥ 120 ms), disociación auriculoventricular (signo patognomónico), latidos de captura o de fusión y concordancia precordial positiva o negativa.',
    labTests: ['Electrolitos séricos inmediatos (potasio, magnesio, calcio)', 'Troponinas cardíacas de alta sensibilidad y gasometría arterial'],
    imaging: ['Ecocardiograma transtorácico de urgencia', 'Coronariografía urgente (para descartar isquemia o infarto miocárdico en curso)'],
    differential: ['Taquicardia supraventricular con aberrancia de conducción o bloqueo de rama preexistente', 'Taquicardia antidrómica por vía accesoria'],
    firstLine: [
      { drug: 'En paciente con INESTABILIDAD HEMODINÁMICA: Cardioversión eléctrica sincronizada inmediata', dose: 'Choque sincronizado bifásico con 100 a 200 Joules bajo sedación rápida', route: 'Eléctrica', freq: 'Inmediata', notes: 'Prioridad absoluta; si la TV es polimórfica o el monitor no sincroniza, desfibrilar de inmediato en modo asincrónico' },
      { drug: 'En paciente con ESTABILIDAD HEMODINÁMICA: Amiodarona endovenosa', dose: '150 a 300 mg EV diluidos en 100 mL de Dextrosa al 5% a pasar en 10 a 20 minutos, seguido de infusión de 1 mg/min por 6h y luego 0.5 mg/min', route: 'EV en infusión', freq: 'Inmediato', notes: 'Antiarrítmico de elección en cardiopatía estructural con fracción de eyección reducida' }
    ],
    alternatives: [
      { drug: 'Procainamida EV', dose: '10 a 15 mg/kg EV a 20-50 mg/min hasta cese de arritmia o hipotensión', route: 'EV lento', freq: 'Alternativa', notes: 'De elección en guías europeas si el paciente está estable y sin IC severa' },
      { drug: 'Implante de Desfibrilador Automático Implantable (DAI) + Ablación de sustrato', dose: 'Terapia definitiva preventiva de muerte súbita', route: 'Intervencionista', freq: 'Permanente', notes: 'Prevención secundaria obligatoria tras paro cardíaco o TV sostenida con cardiopatía' }
    ],
    nonPharm: ['Monitoreo electrocardiográfico continuo en UCI/Coronaria con carro de paro listo'],
    nursingCare: ['REGLA GENERAL ANTE TAQUICARDIA DE QRS ANCHO: Tratarla SIEMPRE como taquicardia ventricular hasta que se demuestre lo contrario (nunca administrar verapamilo EV, causaría colapso circulatorio)', 'Canalización de dos accesos vasculares de gran calibre y monitor multiparámetro continuo', 'Preparación inmediata del desfibrilador con parches colocados en posición anterolateral', 'Corrección urgente de alteraciones de potasio (meta K > 4.0 mEq/L) y magnesio (meta Mg > 2.0 mg/dL)']
  },
  {
    number: 226,
    id: 'diag-226',
    title: 'Fibrilación ventricular',
    cie10: 'I49.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Arritmia ventricular terminal y caótica caracterizada por la despolarización y contracción miocárdica totalmente descoordinada y anárquica, con ausencia completa de gasto cardíaco y pulso, constituyendo la causa más frecuente de muerte súbita cardíaca.',
    symptoms: ['Pérdida brusca e instantánea del conocimiento (colapso súbito en < 5-10 segundos)', 'Ausencia de pulso carotídeo o femoral', 'Apnea o respiración agónica en boqueadas (gasping respiratorio)', 'Palidez cianótica y midriasis paralítica'],
    redFlags: ['PARO CARDIORRESPIRATORIO CON MUERTE ENCEFÁLICA en < 4 a 6 minutos sin RCP y desfibrilación inmediata'],
    criteria: 'Monitor o EKG con trazado caótico, ondulante e irregular sin complejos QRS, segmentos ST ni ondas T reconocibles (amplitud > 0.2 mV en FV gruesa; menor en FV fina).',
    labTests: ['Gases arteriales, electrolitos y lactato durante y tras la reanimación'],
    imaging: ['No aplica durante la reanimación; coronariografía urgente post-RCE (retorno de circulación espontánea)'],
    differential: ['Asistolia', 'Actividad eléctrica sin pulso (AESP)', 'Artefacto por movimiento de electrodos (siempre verificar pulso carotídeo antes)'],
    firstLine: [
      { drug: 'DESFIBRILACIÓN ELÉCTRICA ASINCRÓNICA INMEDIATA (Pilar #1)', dose: 'Choque no sincronizado de 200 Joules bifásico (o 360 J monofásico) inmediato, seguido SIN PAUSA de 2 minutos de RCP de alta calidad', route: 'Eléctrica externa', freq: 'Inmediata', notes: 'Cada minuto de demora reduce la supervivencia un 7-10%' },
      { drug: 'RCP de alta calidad inmediata', dose: 'Compresiones torácicas a 100-120 cpm, profundidad 5-6 cm, permitiendo reexpansión torácica completa con mínimas interrupciones', route: 'Soporte vital', freq: 'Continuo', notes: 'Mantener perfusión coronaria y cerebral' },
      { drug: 'Adrenalina (Epinefrina)', dose: '1 mg EV/IO cada 3 a 5 minutos a partir del segundo choque desfibrilatorio', route: 'EV/IO en bolo + 20 mL flush', freq: 'c/3-5 min', notes: 'Vasoconstricción alfa para mejorar la presión de perfusión coronaria y cerebral' },
      { drug: 'Amiodarona EV en bolo', dose: 'Primer bolo de 300 mg EV/IO tras el tercer choque; segundo bolo de 150 mg EV/IO si persiste FV/TV sin pulso', route: 'EV/IO en bolo', freq: 'Reglado post-3er choque', notes: 'Antiarrítmico de elección en parada por ritmos desfibrilables refractarios' }
    ],
    alternatives: [
      { drug: 'Lidocaína EV', dose: '1.0 a 1.5 mg/kg EV primera dosis, luego 0.5 a 0.75 mg/kg', route: 'EV/IO', freq: 'Alternativa', notes: 'Alternativa si no hay amiodarona disponible' }
    ],
    nonPharm: ['Manejo de temperatura dirigida (32 a 36 °C) post-reanimación en pacientes que permanecen en coma'],
    nursingCare: ['ACTIVACIÓN INMEDIATA DEL CÓDIGO DE PARO / CÓDIGO AZUL', 'Inicio inmediato de compresiones torácicas sin perder tiempo comprobando pulso más de 10 segundos', 'Manejo del desfibrilador: cargar el equipo mientras se continúa comprimiendo, suspender compresiones solo durante la descarga de 1 segundo ("todos fuera") y reiniciar compresiones INMEDIATAMENTE sin comprobar ritmo ni pulso', 'Canalización de acceso vascular EV o intraóseo (IO) sin interrumpir el masaje cardíaco']
  },
  {
    number: 227,
    id: 'diag-227',
    title: 'Bradicardia sinusal sintomática',
    cie10: 'R00.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Ritmo cardíaco de origen sinusal con una frecuencia < 50 lpm (o < 60 lpm según criterios clásicos) que resulta insuficiente para mantener un gasto cardíaco adecuado, ocasionando hipoperfusión tisular y síntomas clínicos.',
    symptoms: ['Mareos, aturdimiento, inestabilidad y presíncope o síncope', 'Fatiga extrema, astenia y letargia mental', 'Disnea de esfuerzo y empeoramiento de insuficiencia cardíaca previa', 'En deportistas de élite suele ser fisiológica y asintomática'],
    redFlags: ['Hipotensión arterial con shock, dolor torácico isquémico o síncope con traumatismo'],
    criteria: 'EKG con ondas P sinusales normales que preceden a cada complejo QRS con frecuencia cardíaca < 50 lpm + presencia de síntomas atribuibles a la bradicardia que mejoran al acelerar el ritmo.',
    labTests: ['Electrolitos séricos (descarte de hiperpotasemia severa)', 'Perfil tiroideo (descarte de hipotiroidismo)', 'Dosaje de fármacos cronotrópicos negativos (digoxina, betabloqueantes)'],
    imaging: ['Electrocardiograma de 12 derivaciones', 'Holter de 24 horas para correlacionar síntomas con bradicardia'],
    differential: ['Bradicardia fisiológica del atleta', 'Enfermedad del seno enfermo', 'Bloqueo AV de alto grado con ritmo de escape'],
    firstLine: [
      { drug: 'Atropina en bradicardia sintomática aguda con signos de alarma', dose: '0.5 a 1.0 mg EV en bolo rápido cada 3 a 5 minutos, hasta una dosis total máxima de 3.0 mg', route: 'EV en bolo', freq: 'c/3-5 min SOS', notes: 'Bloquea el tono vagal; dosis menores a 0.5 mg están proscritas por causar bradicardia paradójica' }
    ],
    alternatives: [
      { drug: 'Infusión continua de Dopamina o Adrenalina', dose: 'Dopamina 5 a 20 mcg/kg/min EV o Adrenalina 2 a 10 mcg/min EV en infusión', route: 'EV continua', freq: 'Titulada', notes: 'Si la atropina es ineficaz mientras se prepara marcapasos' },
      { drug: 'Marcapasos transcutáneo de urgencia o Marcapasos definitivo bicameral', dose: 'Estimulación eléctrica transcutánea o endocavitaria', route: 'Eléctrica', freq: 'Según gravedad', notes: 'Indicación definitiva si la bradicardia sinusal es intrínseca, sintomática y persistente' }
    ],
    nonPharm: ['Retirada de fármacos causales cronotrópicos negativos (betabloqueantes, verapamilo, diltiazem, clonidina, digoxina)'],
    nursingCare: ['Monitorización continua del ritmo cardíaco, frecuencia cardíaca y presión arterial', 'Preparación de parches y equipo de marcapasos transcutáneo a la cabecera', 'Vigilancia de signos de bajo gasto cardíaco (diaforesis, frialdad periférica, alteración del sensorio)']
  },
  {
    number: 228,
    id: 'diag-228',
    title: 'Síndrome del seno enfermo',
    cie10: 'I49.5',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Trastorno intrínseco del nódulo sinoauricular caracterizado por una generación o conducción anormal del impulso eléctrico auricular, que abarca bradicardia sinusal persistente no atribuible a fármacos, pausas sinusales, bloqueo de salida sinoauricular y el Síndrome Taquicardia-Bradicardia.',
    symptoms: ['Síncopes recurrentes y caídas en el adulto mayor sin pródromos claros (crisis de Adams-Stokes)', 'Presíncope, mareos intensos y aturdimiento', 'En síndrome taqui-bradi: episodios de palpitaciones rápidas por fibrilación/flutter auricular seguidos de pausas sinusales prolongadas con desmayo'],
    redFlags: ['Pausas sinusales prolongadas > 3 a 6 segundos con síncope traumático', 'Asistolia transitoria'],
    criteria: 'Demostración de correlación inequívoca entre síntomas clínicos y bradiarritmias sinusales (pausas > 3 segundos, bradicardia sinusal severa diurna o incompetencia cronotrópica) en trazados EKG o Holter.',
    labTests: ['Electrolitos séricos, TSH y troponinas'],
    imaging: ['Holter de 24 a 48 horas o Registro de Eventos implantable (holter subcutáneo)', 'Ecocardiograma transtorácico'],
    differential: ['Hipersensibilidad del seno carotídeo', 'Síncope vasovagal neuromediado', 'Efecto farmacológico'],
    firstLine: [
      { drug: 'Implante de Marcapasos Cardíaco Definitivo permanente (de elección bicameral DDD o auricular AAI)', dose: 'Procedimiento intervencionista definitivo', route: 'Endocavitario', freq: 'Permanente', notes: 'Alivia los síntomas de bradicardia y permite tratar la taquiarritmia concomitante con fármacos sin riesgo de asistolia' }
    ],
    alternatives: [
      { drug: 'Anticoagulación oral preventiva de ACV', dose: 'Según Score CHA2DS2-VASc', route: 'VO', freq: 'c/12-24h', notes: 'Obligatoria en la variante taquicardia-bradicardia con fibrilación auricular' }
    ],
    nonPharm: ['Suspensión de fármacos antiarrítmicos y cronotrópicos no esenciales antes de valorar indicación de marcapasos'],
    nursingCare: ['Instruir al paciente y familiares en la prevención de caídas durante los mareos', 'Cuidado y curación aséptica del bolsillo quirúrgico del marcapasos tras el implante', 'Educación sobre el uso de teléfonos celulares y distanciamiento de campos magnéticos intensos', 'Entrega y verificación del carné internacional de portador de marcapasos']
  },
  {
    number: 229,
    id: 'diag-229',
    title: 'Bloqueo AV (1°, 2°, 3° grado)',
    cie10: 'I44.3',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Trastorno de la conducción eléctrica cardíaca en el que los impulsos auriculares son conducidos con retraso o no son conducidos hacia los ventrículos a nivel del nódulo auriculoventricular o del sistema His-Purkinje. Se divide en 1° grado (prolongación fija del PR), 2° grado (Mobitz I / Wenckebach y Mobitz II) y 3° grado / Completo (disociación AV total).',
    symptoms: ['1° grado y Mobitz I: habitualmente asintomáticos', 'Mobitz II y 3° grado: mareos intensos, fatiga crónica, presíncope, síncope de Morgagni-Adams-Stokes, disnea de reposo y sensación de latidos lentos muy fuertes en el cuello'],
    redFlags: ['Bloqueo AV completo (3° grado) o Mobitz II infrahisiano con asistolia y paro cardíaco inminente'],
    criteria: '1° Grado: Intervalo PR prolongado > 0.20 s (200 ms) constante con relación 1:1; Mobitz I: prolongación progresiva del PR hasta que una onda P no conduce; Mobitz II: bloqueo intermitente de una P sin prolongación previa del PR; 3° Grado: Ondas P y complejos QRS completamente disociados e independientes (frecuencia P > frecuencia QRS).',
    labTests: ['Electrolitos séricos (hiperpotasemia severa como causa reversible clásica)', 'Troponina ultrasensible (descarte de infarto inferior)', 'TSH'],
    imaging: ['EKG de 12 derivaciones continuo', 'Ecocardiograma transtorácico'],
    differential: ['Ritmo idioventricular acelerado', 'Pausa sinusal', 'Parasistolia'],
    firstLine: [
      { drug: 'En Bloqueo AV Completo o Mobitz II sintomático: Atropina transitoria + Marcapasos transcutáneo urgente', dose: 'Atropina 0.5 a 1 mg EV bolo (más útil en bloqueos suprahisianos/nodales) + colocación de parches de marcapasos externo', route: 'EV / Eléctrica', freq: 'Inmediato', notes: 'Medida puente vital hacia el marcapasos definitivo' },
      { drug: 'Marcapasos Definitivo Bicameral permanente (DDDR)', dose: 'Implante percutáneo endocavitario', route: 'Intervencionista', freq: 'Permanente', notes: 'Indicación Clase I indiscutible en Bloqueo AV de 3° grado y 2° grado Mobitz II' }
    ],
    alternatives: [
      { drug: 'Marcapasos transvenoso temporal', dose: 'Catéter electrodo colocado en ventrículo derecho por punción yugular o femoral', route: 'Transvenoso', freq: 'Temporal', notes: 'Puente en UCI si no se logra captura adecuada transcutánea' }
    ],
    nonPharm: ['Identificar y revertir causas agudas reversibles (isquemia inferior, hiperpotasemia, fármacos betabloqueantes/digoxina)'],
    nursingCare: ['Monitorización continua del trazado EKG con alarma de bradicardia ajustada en 40 lpm', 'Canalización inmediata de dos vías venosas permeables y colocación de parches de marcapasos transcutáneo', 'En estimulación transcutánea: verificar la captura mecánica comprobando la presencia de pulso arterial femoral concordante con cada espícula y complejo QRS', 'Administración de sedoanalgesia suave durante la estimulación transcutánea por el dolor que producen las contracciones musculares']
  },
  {
    number: 230,
    id: 'diag-230',
    title: 'Miocardiopatía dilatada',
    cie10: 'I42.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad del músculo cardíaco caracterizada por dilatación del ventrículo izquierdo (o biventricular) y disfunción sistólica global (FEVI < 40-45%) en ausencia de enfermedad coronaria obstructiva, hipertensión severa o valvulopatía que justifique la magnitud del daño.',
    symptoms: ['Síntomas floridos de insuficiencia cardíaca congestiva: disnea de esfuerzo progresiva, ortopnea y edemas maleolares', 'Palpitaciones por arritmias auriculares o ventriculares', 'Eventos tromboembólicos sistémicos o pulmonares por estasis sanguínea ventricular'],
    redFlags: ['Muerte súbita por taquicardia/fibrilación ventricular', 'Shock cardiogénico descompensado'],
    criteria: 'Dilatación ventricular izquierda (diámetro telediastólico > 2 DE ajustado por superficie corporal) con FEVI < 45% en ausencia de cardiopatía isquémica significativa demostrada por coronariografía.',
    labTests: ['Péptidos natriuréticos (NT-proBNP), panel genético en formas familiares, ferritina, serología para Chagas y perfil tiroideo'],
    imaging: ['Ecocardiograma transtorácico (dilatación esférica de cavidades con hipoquinesia difusa global y regurgitación mitral secundaria)', 'Resonancia magnética cardíaca (RMC con realce tardío de gadolinio para valorar fibrosis miocárdica intersticial)'],
    differential: ['Miocardiopatía isquémica', 'Miocarditis viral aguda previa', 'Miocardiopatía alcohólica o por quimioterápicos (antraciclinas)'],
    firstLine: [
      { drug: 'Tratamiento neurohormonal cuádruple de la insuficiencia cardíaca con FEVI reducida', dose: '1. ARNI (Sacubitril/Valsartán) + 2. Betabloqueante (Carvedilol o Bisoprolol) + 3. Espironolactona + 4. Dapagliflozina', route: 'VO', freq: 'Reglado', notes: 'Promueven el remodelado inverso ventricular y reducen drásticamente la mortalidad' }
    ],
    alternatives: [
      { drug: 'Desfibrilador Automático Implantable (DAI)', dose: 'Implante percutáneo', route: 'Intervencionista', freq: 'Permanente', notes: 'Prevención primaria de muerte súbita si FEVI ≤ 35% persistente tras 3 meses de terapia médica óptima' },
      { drug: 'Trasplante cardíaco o Dispositivo de Asistencia Ventricular Izquierda (DAVI)', dose: 'Tratamiento en estadio terminal refractario', route: 'Quirúrgica', freq: 'Única', notes: 'En insuficiencia cardíaca avanzada NYHA IV dependiente de inotrópicos' }
    ],
    nonPharm: ['Abstinencia absoluta de alcohol (esencial en miocardiopatía alcohólica potencialmente reversible)', 'Restricción de sodio y pesaje matutino diario'],
    nursingCare: ['Control diario de peso matutino y balance de ingesta/excreta de líquidos', 'Monitoreo de signos de congestión periférica y pulmonar', 'Educación para la detección precoz de arritmias mediante el control del pulso', 'Soporte emocional y asesoramiento genético familiar']
  },
  {
    number: 231,
    id: 'diag-231',
    title: 'Miocardiopatía hipertrófica',
    cie10: 'I42.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad genética autosómica dominante causada por mutaciones en los genes de las proteínas del sarcómero cardíaco (MYH7, MYBPC3), caracterizada por hipertrofia miocárdica desproporcionada del ventrículo izquierdo (grosor de pared ≥ 15 mm) no atribuible a sobrecarga de presión (HTA o estenosis aórtica).',
    symptoms: ['Disnea de esfuerzo e intolerancia al ejercicio por rigidez y disfunción diastólica', 'Angina de pecho atípica por desajuste entre demanda miocárdica y microcirculación coronaria', 'Mareos y síncope de esfuerzo (por obstrucción del tracto de salida del ventrículo izquierdo - TSVI)', 'Soplo sistólico eyectivo que AUMENTA característicamente con maniobra de Valsalva o al ponerse de pie'],
    redFlags: ['MUERTE SÚBITA CARDÍACA EN JÓVENES Y ATLETAS DE COMPETICIÓN por fibrilación ventricular', 'Grosor máximo de pared ventricular ≥ 30 mm'],
    criteria: 'Grosor parietal del ventrículo izquierdo en cualquier segmento ≥ 15 mm (o ≥ 13 mm en familiares de 1° grado con diagnóstico genético confirmado) medido por ecocardiografía o resonancia magnética, sin otra causa hemodinámica.',
    labTests: ['Test genético de panel de miocardiopatías', 'Troponinas y NT-proBNP'],
    imaging: ['Ecocardiograma transtorácico doppler (hipertrofia asimétrica del septo interventricular, movimiento sistólico anterior - SAM de la valva mitral y gradiente en TSVI)', 'Resonancia magnética cardíaca (evalúa fibrosis miocárdica con realce tardío)', 'Holter de 48 horas (búsqueda de taquicardia ventricular no sostenida)'],
    differential: ['Corazón de atleta fisiológico', 'Hipertrofia por hipertensión arterial severa', 'Amiloidosis cardíaca'],
    firstLine: [
      { drug: 'Betabloqueantes no vasodilatadores (Bisoprolol, Atenolol o Propranolol)', dose: 'Bisoprolol 5 a 10 mg/día VO o Metoprolol 50 a 100 mg cada 12 horas VO', route: 'VO', freq: 'c/12-24h', notes: 'Fármacos de primera línea: reducen la contractilidad, mejoran el llenado diastólico y reducen el gradiente obstructivo en TSVI' },
      { drug: 'Mavacamten (Inhibidor de la miosina cardíaca)', dose: '5 mg/día VO titulando según gradiente y FEVI', route: 'VO', freq: 'c/24h', notes: 'Fármaco específico de reciente aprobación que reduce el gradiente dinámico en el tracto de salida' }
    ],
    alternatives: [
      { drug: 'Verapamilo', dose: '120 a 360 mg/día VO en tomas divididas', route: 'VO', freq: 'c/8-12h', notes: 'Alternativa en pacientes con contraindicación o intolerancia a betabloqueantes (evitar en obstrucción severa con hipotensión)' },
      { drug: 'Desfibrilador Automático Implantable (DAI)', dose: 'Implante para prevención de muerte súbita', route: 'Intervencionista', freq: 'Permanente', notes: 'Indicado si Score de Riesgo de Muerte Súbita a 5 años es ≥ 6% o antecedentes de síncope inexplicado' },
      { drug: 'Miectomía quirúrgica septal (operación de Morrow) o Ablación septal con alcohol', dose: 'Tratamiento de reducción septal', route: 'Quirúrgica / Intervencionista', freq: 'Única', notes: 'En síntomas refractarios severos con gradiente máximo en reposo o provocado ≥ 50 mmHg' }
    ],
    nonPharm: ['PROHIBICIÓN ESTRICTA de deportes de competición de alta intensidad o esfuerzo isométrico extenuante', 'Evitar la deshidratación y los ambientes excesivamente calurosos'],
    nursingCare: ['CONTRAINDICACIÓN ESTRICTA DE ENFERMERÍA: NUNCA administrar vasodilatadores directos (nitratos, dihidropiridinas) ni inotrópicos positivos (digoxina) porque reducen la precarga o aumentan la contractilidad, empeorando dramáticamente la obstrucción del TSVI', 'Instrucción a la familia en soporte vital básico y manejo de DEA en domicilio', 'Monitoreo de frecuencia cardíaca y tensión arterial', 'Tamizaje clínico y ecocardiográfico de todos los familiares de primer grado']
  },
  {
    number: 232,
    id: 'diag-232',
    title: 'Miocardiopatía restrictiva',
    cie10: 'I42.5',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad miocárdica caracterizada por un patrón de llenado ventricular marcadamente restrictivo con rigidez parietal extrema, volúmenes ventriculares normales o reducidos y dilatación biatrial severa, causada con frecuencia por amiloidosis cardíaca, sarcoidosis, hemocromatosis o fibrosis endomiocárdica.',
    symptoms: ['Predominio de síntomas graves de insuficiencia cardíaca derecha: ingurgitación yugular masiva, hepatomegalia congestiva pulsátil dolorosa, ascitis y edema bilateral en miembros inferiores', 'Fatiga profunda y debilidad por bajo gasto cardíaco fijo', 'Signo de Kussmaul positivo (aumento paradójico de la presión venosa yugular durante la inspiración)'],
    redFlags: ['Arritmias auriculares y ventriculares refractarias', 'Bloqueo AV completo y muerte súbita'],
    criteria: 'Patrón ecocardiográfico de relajación restrictiva (relación E/A > 2, tiempo de desaceleración mitral < 150 ms) con ventrículos de tamaño normal y bi-auriculomegalia gigante ("aurículas gigantes").',
    labTests: ['Inmunofijación en suero y orina + dosaje de cadenas ligeras libres séricas (descarte de amiloidosis AL)', 'Troponinas y NT-proBNP marcadamente disociados del grosor en EKG'],
    imaging: ['Ecocardiograma transtorácico (miocardio con aspecto brillante granular "en vidrio esmerilado")', 'Gammagrafía con Tecnecio-99m DPD o PYP (gold standard para amiloidosis por transtiretina ATTR)', 'Resonancia magnética cardíaca'],
    differential: ['Pericarditis constrictiva (crucial diferenciación: en pericarditis hay interdependencia ventricular)', 'Miocardiopatía hipertrófica concéntrica'],
    firstLine: [
      { drug: 'Tafamidis (en amiloidosis por transtiretina ATTR)', dose: '61 mg/día VO en cápsula única diaria', route: 'VO', freq: 'c/24h', notes: 'Estabilizador del tetrámero de TTR que reduce significativamente la mortalidad y hospitalizaciones' },
      { drug: 'Diuréticos de asa (Furosemida) cautelosos', dose: '20 a 40 mg/día VO titulados muy lentamente', route: 'VO', freq: 'c/24h', notes: 'Alivian la congestión pero deben usarse con extrema prudencia: el llenado depende de presiones altas' }
    ],
    alternatives: [
      { drug: 'Quimioterapia con Bortezomib + Dexametasona + Daratumumab', dose: 'Protocolo hematológico oncológico', route: 'SC / EV', freq: 'Ciclos', notes: 'De elección inmediata en amiloidosis de cadenas ligeras (AL)' }
    ],
    nonPharm: ['Restricción moderada de líquidos y sodio'],
    nursingCare: ['Control meticuloso de la sobrecarga hídrica mediante balance hídrico y peso diario', 'Vigilancia extrema de la presión arterial: estos pacientes desarrollan hipotensión severa ante dosis mínimas de diuréticos o vasodilatadores', 'Evitar fármacos como digoxina o antagonistas del calcio en amiloidosis (se fijan a las fibrillas amiloides con toxicidad letal)', 'Monitoreo electrocardiográfico del ritmo cardíaco']
  },
  {
    number: 233,
    id: 'diag-233',
    title: 'Pericarditis aguda',
    cie10: 'I30.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Inflamación aguda del pericardio parietal y visceral, habitualmente idiopática o viral (coxsackievirus, echovirus, adenovirus, SARS-CoV-2), o asociada a uremia, tuberculosis, neoplasias o autoinmunidad.',
    symptoms: ['Dolor torácico pleurítico punzante retroesternal agudo que irradia característicamente a la cresta del músculo trapecio izquierdo', 'Alivio característico al inclinarse hacia adelante (posición mahometana o sentada) y empeoramiento marcado con el decúbito supino, la tos y la inspiración profunda', 'Fiebre o febrícula, malestar general y astenia', 'Frote pericárdico auscultatorio superficial y áspero (signo patognomónico)'],
    redFlags: ['Taponamiento cardíaco: hipotensión arterial, ingurgitación yugular y ruidos cardíacos apagados (tríada de Beck)', 'Miopericarditis con elevación marcada de troponina y arritmias'],
    criteria: 'Diagnóstico clínico con al menos 2 de los 4 criterios de la ESC: 1. Dolor torácico pleurítico característico posicional; 2. Frote pericárdico a la auscultación; 3. Cambios EKG típicos (elevación cóncava difusa del ST y/o depresión del PR); 4. Derrame pericárdico nuevo o en empeoramiento.',
    labTests: ['Proteína C reactiva (PCR) y VSG (reactantes de fase aguda elevados)', 'Troponina ultrasensible (elevada si hay compromiso miocárdico o miopericarditis)', 'Hemograma, urea y creatinina (descarte de pericarditis urémica)'],
    imaging: ['Electrocardiograma de 12 derivaciones (Evolución en 4 estadios: Estadio 1 con elevación cóncava difusa del ST "en guirnalda" con depresión del segmento PR)', 'Ecocardiograma transtorácico (presencia y cuantificación de derrame pericárdico y descarte de taponamiento)', 'Radiografía de tórax'],
    differential: ['Infarto agudo de miocardio (en el IAM la elevación del ST es convexa "en lomo de delfín" y con cambios en espejo recíprocos)', 'Embolia pulmonar', 'Disección aórtica', 'Pleuritis aguda'],
    firstLine: [
      { drug: 'Aspirina o AINEs a dosis altas + Colchicina (Pilar fundamental de la ESC)', dose: 'Ibuprofeno 600 mg cada 8 horas VO (o Aspirina 750-1000 mg c/8h) por 1 a 2 semanas con descenso gradual + Colchicina 0.5 mg cada 12 horas VO (0.5 mg/día si peso < 70 kg) por 3 meses completos', route: 'VO con alimentos', freq: 'c/8-12h', notes: 'La colchicina reduce a la mitad la tasa de recurrencias de la pericarditis; asociar protector gástrico con IBP' }
    ],
    alternatives: [
      { drug: 'Corticoides orales (Prednisona a dosis bajas)', dose: '0.2 a 0.5 mg/kg/día VO', route: 'VO', freq: 'c/24h', notes: 'RESTRINGIDOS exclusivamente a contraindicación/intolerancia a AINEs, etiología autoinmune o embarazo (los corticoides aumentan el riesgo de recurrencias futuras)' },
      { drug: 'Anakinra (antagonista del receptor de IL-1)', dose: '100 mg/día SC', route: 'SC', freq: 'c/24h', notes: 'En pericarditis recurrente corticodependiente y resistente a colchicina' }
    ],
    nonPharm: ['Reposo físico estricto hasta la resolución del dolor y normalización de la PCR (evitar actividad deportiva extenuante por 3 meses)'],
    nursingCare: ['Posicionar al paciente en cama con el respaldo elevado a 45-60° o sentado e inclinado hacia adelante para aliviar el dolor pleurítico', 'Vigilancia horaria de signos vitales con búsqueda activa de signos de taponamiento pericárdico (caída de PA, taquicardia e ingurgitación yugular)', 'Administración de la medicación antiinflamatoria siempre junto con las comidas e inhibidor de bomba de protones', 'Educación para evitar el ejercicio físico hasta el alta médica definitiva']
  },
  {
    number: 234,
    id: 'diag-234',
    title: 'Taponamiento cardíaco',
    cie10: 'I31.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Emergencia médica y quirúrgica potencialmente mortal causada por la acumulación rápida de líquido en el espacio pericárdico a tensión, superando la distensibilidad del pericardio e impidiendo el llenado diastólico de las cavidades cardíacas, lo que genera shock obstructivo.',
    symptoms: ['Disnea súbita extrema, taquipnea e inquietud psicomotriz', 'Opresión torácica, debilidad y sensación inminente de colapso', 'Facies abotagada, cianosis periférica y frialdad distal'],
    redFlags: ['COLAPSO CARDIOVASCULAR COMPLETO Y PARO CARDÍACO EN ACTIVIDAD ELÉCTRICA SIN PULSO (AESP)'],
    criteria: 'Presencia de la clásica Tríada de Beck (en < 30-40% de casos): 1. Hipotensión arterial severa; 2. Ingurgitación venosa yugular a tensión; 3. Ruidos cardíacos apagados o amortiguados + Presencia de Pulso Paradójico (> 10 mmHg de descenso de la PAS durante la inspiración espontánea).',
    labTests: ['Gases arteriales (acidosis láctica severa)', 'Líquido pericárdico: citológico, bioquímico, tinción Gram, cultivo y baciloscopía / PCR para TB (GenXpert)'],
    imaging: ['Ecocardiograma transtorácico urgente a pie de cama (POCUS): derrame pericárdico moderado a severo con colapso diastólico precoz de la pared libre del ventrículo derecho y colapso telesistólico de la aurícula izquierda con vena cava inferior pletórica sin colapso inspiratorio', 'EKG (bajo voltaje generalizado de los QRS y alternancia eléctrica)'],
    differential: ['Neumotórax a tensión', 'Infarto agudo de ventrículo derecho', 'Embolia pulmonar masiva'],
    firstLine: [
      { drug: 'PARACENTESIS PERICÁRDICA URGENTE (PERICARDIOCENTESIS EVACUADORA)', dose: 'Punción subxifoidea guiada por ecocardiografía de urgencia con aguja 18G o catéter introductor', route: 'Intervencionista percutáneo', freq: 'Inmediata', notes: 'PROCEDIMIENTO SALVADOR DE VIDA: La extracción de apenas 50 a 100 mL de líquido restablece de inmediato el gasto cardíaco y la presión arterial' },
      { drug: 'Expansión de volumen intravascular rápido con Cloruro de Sodio al 0.9%', dose: '500 a 1000 mL EV a chorro', route: 'EV en bolo', freq: 'Inmediato mientras se punza', notes: 'Aumenta temporalmente la presión de llenado de cavidades derechas para evitar el colapso ventricular' }
    ],
    alternatives: [
      { drug: 'Ventana pericárdica quirúrgica subxifoidea o Toracotomía de emergencia', dose: 'Apertura quirúrgica del pericardio', route: 'Quirúrgica urgente', freq: 'Inmediata', notes: 'De elección obligatoria si el derrame es hemopericardio por rotura cardíaca o disección aórtica' }
    ],
    nonPharm: ['CONTRAINDICACIÓN ESTRICTA DE VENTILACIÓN MECÁNICA CON PRESIÓN POSITIVA (aumenta la presión intratorácica y colapsa el retorno venoso, precipitando paro cardíaco)'],
    nursingCare: ['MEDICIÓN ESTRICTA DEL PULSO PARADÓJICO con esfigmomanómetro manual: inflar manguito sobre la sistólica, desinflar lentamente y registrar la diferencia de presión entre el primer ruido auscultado en espiración y el ruido constante en todas las fases respiratorias (> 10 mmHg es positivo)', 'Preparación inmediata del carro de paro y de la bandeja de pericardiocentesis estéril a la cabecera del paciente', 'PROHIBICIÓN ABSOLUTA de administrar diuréticos o vasodilatadores (empeoran el shock al depletar la precarga)', 'Conectar catéter pericárdico a drenaje cerrado y vigilar débito y permeabilidad']
  },
  {
    number: 235,
    id: 'diag-235',
    title: 'Miocarditis aguda',
    cie10: 'I40.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad inflamatoria del miocardio ocasionada predominantemente por infecciones víricas (enterovirus, parvovirus B19, VHH-6, SARS-CoV-2), reacciones a fármacos/vacunas o trastornos autoinmunes, capaz de producir necrosis de miocitos cardíacos.',
    symptoms: ['Presentación similar a infarto en adultos jóvenes: dolor torácico pseudoanginoso o pleurítico', 'Disnea de esfuerzo aguda y fatiga rápida', 'Palpitaciones frecuentes o síncope', 'Antecedente de cuadro viral pseudogripal respiratorio o gastrointestinal 1 a 2 semanas antes'],
    redFlags: ['Miocarditis fulminante: shock cardiogénico precoz, edema pulmonar refractario y arritmias ventriculares malignas con alta mortalidad'],
    criteria: 'Clínica compatible + elevación de troponinas cardíacas + anomalías en EKG o ecocardiograma + confirmación por Resonancia Magnética Cardíaca (criterios de Lake Louise) o biopsia endomiocárdica.',
    labTests: ['Troponina cardíaca ultrasensible (marcadamente elevada)', 'PCR y VSG elevadas', 'NT-proBNP sérico muy elevado', 'Serología y PCR viral'],
    imaging: ['Resonancia magnética cardíaca (gold standard no invasivo: criterios de Lake Louise con edema miocárdico en secuencias T2 y realce tardío subepicárdico o mediomiocárdico no coronario)', 'Ecocardiograma transtorácico (disfunción ventricular izquierda global o segmentaria, engrosamiento transitorio de paredes)', 'Coronariografía (arterias coronarias sin lesiones obstructivas)'],
    differential: ['Infarto agudo de miocardio sin lesiones obstructivas (MINOCA)', 'Síndrome de Takotsubo', 'Pericarditis aguda aislada'],
    firstLine: [
      { drug: 'Tratamiento de soporte hemodinámico y de insuficiencia cardíaca según guías habituales', dose: 'IECA/ARA-II + Betabloqueantes cardioselectivos titulados cautelosamente una vez estabilizado el paciente', route: 'VO', freq: 'Reglado', notes: 'Manejo en unidad de cuidados intensivos o coronarios en fase aguda' }
    ],
    alternatives: [
      { drug: 'Soporte circulatorio mecánico con ECMO venoarterial o Impella', dose: 'Dispositivo percutáneo', route: 'Intervencionista', freq: 'Urgente', notes: 'Soporte hemodinámico vital en miocarditis fulminante como puente a la recuperación' },
      { drug: 'Inmunosupresión con Corticoides + Ciclosporina/Azatioprina', dose: 'Metilprednisolona 1 g/día EV por 3 días', route: 'EV', freq: 'Reglado', notes: 'Indicada exclusivamente en miocarditis de células gigantes, eosinofílica o sarcoidosis' }
    ],
    nonPharm: ['Reposo físico absoluto en cama durante la fase inflamatoria aguda', 'ABSTENCIÓN DE DEPORTES O EJERCICIO INTENSO durante al menos 3 a 6 meses'],
    nursingCare: ['Monitorización continua del segmento ST y vigilancia de arritmias ventriculares y bloqueos AV', 'Vigilancia estrecha de signos de fallo ventricular izquierdo progresivo (crepitantes, oliguria, caída de PA)', 'Instruir al paciente sobre la prohibición absoluta de esfuerzo físico para prevenir necrosis celular y muerte súbita']
  },
  {
    number: 236,
    id: 'diag-236',
    title: 'Endocarditis infecciosa',
    cie10: 'I33.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Infección microbiana del endotelio endocárdico cardíaco, habitualmente bacteriana (Staphylococcus aureus, Streptococcus viridans, Enterococcus faecalis) o micótica, con formación característica de vegetaciones trombóticas infectadas sobre las valvas cardíacas.',
    symptoms: ['Fiebre persistente de origen desconocido, sudoración nocturna, escalofríos y astenia', 'Aparición de un soplo cardíaco NUEVO de regurgitación o cambio en las características de un soplo previo', 'Fenómenos vasculares periféricos: hemorragias "en astilla" subungueales, manchas de Janeway (máculas eritematosas indoloras en palmas y plantas), embolias arteriales mayores a cerebro, bazo o riñones', 'Fenómenos inmunológicos: Nódulos de Osler (nódulos dolorosos violáceos en pulpejos de dedos), manchas de Roth retinianas y glomerulonefritis'],
    redFlags: ['Insuficiencia cardíaca aguda por rotura valvular aguda', 'Absceso perivalvular con bloqueo AV', 'Accidente cerebrovascular embólico séptico'],
    criteria: 'Criterios de Duke modificados: Presencia de 2 criterios mayores, o 1 mayor y 3 menores, o 5 menores. (Mayores: Hemocultivos positivos para gérmenes típicos en ≥ 2 muestras separadas + Evidencia de vegetación, absceso o dehiscencia protésica en ecocardiograma).',
    labTests: ['HEMOCULTIVOS SERIADOS OBLIGATORIOS: 3 tomas de sangre separadas por al menos 30-60 minutos de sitios venosos distintos, tomadas ANTES de iniciar antibióticos', 'Hemograma con leucocitosis y anemia de inflamación crónica', 'PCR y VSG sumamente elevadas', 'Examen de orina (microhematuria por glomerulonefritis por inmunocomplejos)'],
    imaging: ['Ecocardiograma transesofágico (ETE: sensibilidad > 90-95% para vegetaciones, abscesos perivalvulares y perforación)', 'Ecocardiograma transtorácico (ETT)', 'TAC cerebral y toracoabdominal para detección de embolias sépticas'],
    differential: ['Lupus eritematoso con endocarditis de Libman-Sacks no bacteriana', 'Síndrome antifosfolipídico', 'Fiebre reumática aguda', 'Sepsis de otro foco'],
    firstLine: [
      { drug: 'Tratamiento empírico en válvula nativa adquirida en comunidad: Ampicilina/Sulbactam + Gentamicina (o Vancomicina + Gentamicina)', dose: 'Ampicilina/Sulbactam 3 g cada 6 horas EV + Gentamicina 3 mg/kg/día EV en dosis única diaria (o Vancomicina 15-20 mg/kg cada 12h EV con monitoreo de valle 15-20 mcg/mL) por 4 a 6 semanas', route: 'EV en infusión', freq: 'Reglado', notes: 'Antibioterapia bactericida prolongada por vía endovenosa estricta' }
    ],
    alternatives: [
      { drug: 'Tratamiento empírico en válvula protésica precoz (< 12 meses): Vancomicina + Gentamicina + Rifampicina', dose: 'Vancomicina 15-20 mg/kg c/12h EV + Gentamicina 3 mg/kg/día EV + Rifampicina 300 mg cada 8 horas VO', route: 'EV / VO', freq: 'Reglado por 6 semanas', notes: 'La rifampicina penetra el biofilm bacteriano sobre la prótesis' },
      { drug: 'Cirugía cardíaca de reemplazo o reparación valvular de urgencia', dose: 'Procedimiento quirúrgico urgente', route: 'Quirúrgica', freq: 'Urgente', notes: 'Indicada en insuficiencia cardíaca por rotura valvular, infección no controlada (absceso/fístula) o vegetaciones grandes > 10 mm con embolismo recurrente' }
    ],
    nonPharm: ['Profilaxis antibiótica previa con Amoxicilina 2 g VO 30-60 min antes de procedimientos dentales invasivos en pacientes de muy alto riesgo'],
    nursingCare: ['TOMA RIGUROSA DE HEMOCULTIVOS: Técnica rigurosamente aséptica, desinfección con clorhexidina alcohólica al 2%, volumen de 8 a 10 mL de sangre por botella y extraer las 3 muestras ANTES del inicio de antibióticos', 'Monitoreo diario de la temperatura corporal y de la curva térmica', 'Vigilancia electrocardiográfica diaria del intervalo PR (la prolongación del PR alerta sobre formación de absceso perianular que invade el sistema de conducción)', 'Inspección diaria de piel y mucosas buscando estigmas periféricos (Janeway, Osler, hemorragias en astilla)']
  },
  {
    number: 237,
    id: 'diag-237',
    title: 'Fiebre reumática aguda',
    cie10: 'I00',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad inflamatoria multisistémica autoinmune desencadenada por una respuesta cruzada inmune 2 a 3 semanas después de una faringoamigdalitis no tratada por Streptococcus pyogenes (Estreptococo betahemolítico del Grupo A), que afecta articulaciones, corazón, SNC y piel en niños y adolescentes.',
    symptoms: ['Poliartritis migratoria de grandes articulaciones (rodillas, tobillos, codos, muñecas): intensamente dolorosa, con calor y rubor, que dura días en una articulación y pasa a otra', 'Carditis reumática (pancarditis con taquicardia desproporcionada a la fiebre, soplo de insuficiencia mitral o frote pericárdico)', 'Corea de Sydenham ("baile de San Vito"): movimientos involuntarios bruscos e incoordinados, labilidad emocional y muecas faciales', 'Eritema marginado de Leiner: máculas rosadas serpiginosas con centro claro no pruriginosas en tronco y extremidades', 'Nódulos subcutáneos de Meynet indoloros sobre prominencias óseas'],
    redFlags: ['Pancarditis severa con insuficiencia cardíaca congestiva aguda'],
    criteria: 'Criterios de Jones revisados: Evidencia de infección estreptocócica previa (ASTO elevado o cultivo faríngeo positivo) + 2 criterios mayores (Poliartritis, Carditis, Corea, Eritema marginado, Nódulos subcutáneos) o 1 mayor y 2 menores (artralgias, fiebre ≥ 38.5 °C, VSG ≥ 60 mm/h o PCR ≥ 3.0 mg/dL, PR prolongado en EKG).',
    labTests: ['Antiestreptolisina O (ASTO / ASLO > 200-400 UI/mL o títulos ascendentes)', 'Proteína C reactiva y VSG marcadamente elevadas', 'Cultivo de hisopado faríngeo'],
    imaging: ['Ecocardiograma doppler (crucial para detectar carditis subclínica: insuficiencia mitral o aórtica)', 'Electrocardiograma de 12 derivaciones (prolongación del intervalo PR)'],
    differential: ['Artritis idiopática juvenil', 'Lupus eritematoso sistémico', 'Endocarditis infecciosa', 'Artritis séptica'],
    firstLine: [
      { drug: 'Erradicación del estreptococo faríngeo: Penicilina G Benzatínica', dose: '1 200 000 UI IM en dosis única profunda en glúteo en > 27 kg (o 600 000 UI IM si < 27 kg)', route: 'IM profunda', freq: 'Dosis única', notes: 'Obligatoria incluso si no hay síntomas faríngeos actuales' },
      { drug: 'Antiinflamatorio de elección para la artritis: Aspirina (Ácido Acetilsalicílico)', dose: '80 a 100 mg/kg/día VO dividido en 4 tomas diarias por 4 a 6 semanas', route: 'VO con comidas', freq: 'c/6h', notes: 'Respuesta analgésica y antiinflamatoria espectacular en < 24-48 horas' },
      { drug: 'Corticoides en presencia de carditis moderada a severa (Prednisona)', dose: '1 a 2 mg/kg/día VO por 2 a 3 semanas con reducción progresiva', route: 'VO', freq: 'c/24h', notes: 'Indicada si hay insuficiencia cardíaca o cardiomegalia' }
    ],
    alternatives: [
      { drug: 'Amoxicilina oral (50 mg/kg/día por 10 días) o Eritromicina', dose: 'Según peso', route: 'VO', freq: 'c/12h', notes: 'Alternativa en intolerancia o alergia a la penicilina' }
    ],
    nonPharm: ['Reposo en cama durante la fase inflamatoria aguda articular y cardíaca'],
    nursingCare: ['PROFILAXIS SECUNDARIA VITAL DE POR VIDA O A LARGO PLAZO: Administrar Penicilina G Benzatínica 1.2 MUI IM cada 21 a 28 días de forma ininterrumpida durante al menos 5 a 10 años (o hasta los 21-40 años) para prevenir recurrencias y secuelas valvulares permanentes', 'Monitoreo de frecuencia cardíaca durante el sueño (la taquicardia que persiste mientras el niño duerme es signo fiel de carditis activa)', 'Manejo ambiental calmado y protección ante caídas en pacientes con corea de Sydenham', 'Educación para la salud a los padres sobre el cumplimiento estricto de las inyecciones mensuales']
  },
  {
    number: 238,
    id: 'diag-238',
    title: 'Cardiopatía reumática crónica',
    cie10: 'I09.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Secuela valvular permanente y deformante causada por cicatrización fibrosa, fusión comisural y retracción tras episodios previos de fiebre reumática aguda, afectando con mayor frecuencia a la válvula mitral (estenosis mitral y/o insuficiencia mitral) y aórtica.',
    symptoms: ['Disnea de esfuerzo lentamente progresiva a lo largo de décadas', 'Hemoptisis (por rotura de venas bronquiales por hipertensión venocapilar)', 'Palpitaciones irregulares por fibrilación auricular secundaria a dilatación biauricular masiva', 'Facies mitral (cianosis y rubicundez violácea en mejillas y dorso nasal)', 'Eventos de embolismo cerebral o sistémico'],
    redFlags: ['Edema pulmonar agudo cardiogénico desencadenado por fibrilación auricular rápida o embarazo', 'Accidente cerebrovascular embólico'],
    criteria: 'Antecedente o evidencia serológica de fiebre reumática + ecocardiograma con lesiones valvulares reumáticas características (fusión de comisuras valvulares, engrosamiento de bordes libres con aspecto en "palo de hockey" de la valva mitral anterior y calcificación).',
    labTests: ['Péptidos natriuréticos (NT-proBNP), INR (si recibe warfarina)', 'Hemograma y función renal'],
    imaging: ['Ecocardiograma transtorácico doppler (cálculo del área valvular mitral por planimetría o hemitiempo de presión, gradiente medio transvalvular y score de Wilkins)', 'Ecocardiograma transesofágico (ETE para descartar trombos en orejuela antes de valvuloplastia)', 'Radiografía de tórax (crecimiento de aurícula izquierda con doble contorno)'],
    differential: ['Valvulopatía degenerativa calcificada del anciano', 'Endocarditis cicatrizal previa no reumática', 'Mixoma auricular'],
    firstLine: [
      { drug: 'Profilaxis secundaria antibiótica continua con Penicilina G Benzatínica', dose: '1 200 000 UI IM profunda cada 21 a 28 días', route: 'IM profunda', freq: 'c/21-28 días', notes: 'Obligatoria hasta los 40 años de edad o de por vida si hay secuela valvular severa o recambio protésico' },
      { drug: 'Anticoagulación oral con Warfarina (antagonista de vitamina K)', dose: '2.5 a 5 mg/día VO ajustada para INR meta estricto entre 2.0 y 3.0 (o 2.5-3.5 si prótesis mecánica)', route: 'VO', freq: 'c/24h', notes: 'Obligatoria si hay fibrilación auricular, trombo auricular o antecedente de embolismo; los ACOD están CONTRAINDICADOS en estenosis mitral reumática moderada a severa' },
      { drug: 'Diuréticos (Furosemida) + Bloqueadores del nodo AV (Betabloqueantes)', dose: 'Furosemida 20 a 40 mg/día VO + Bisoprolol 2.5 a 5 mg/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Alivian la congestión pulmonar y al prolongar la diástole mejoran el vaciado auricular' }
    ],
    alternatives: [
      { drug: 'Valvuloplastia mitral percutánea con balón de Inoue', dose: 'Dilatación percutánea', route: 'Intervencionista', freq: 'Única', notes: 'De elección en estenosis mitral pura sintomática con score de Wilkins favorable (≤ 8) sin calcio comisural ni trombo en AI' },
      { drug: 'Reemplazo o reparación valvular quirúrgica (prótesis mecánica o biológica)', dose: 'Cirugía a corazón abierto', route: 'Quirúrgica', freq: 'Única', notes: 'En anatomía desfavorable, insuficiencia mitral concomitante o calcificación severa' }
    ],
    nonPharm: ['Profilaxis de endocarditis infecciosa previa a procedimientos odontológicos invasivos'],
    nursingCare: ['Control estricto mensual de INR en pacientes bajo warfarina y educación sobre estabilidad en la dieta de vegetales verdes', 'Monitoreo de frecuencia cardíaca (evitar taquicardia que colapse el tiempo de llenado diastólico)', 'Vigilancia de signos de tromboembolismo cerebral (asimetría facial, debilidad en un hemicuerpo, afasia)']
  },
  {
    number: 239,
    id: 'diag-239',
    title: 'Estenosis aórtica',
    cie10: 'I35.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Valvulopatía caracterizada por el estrechamiento y obstrucción mecánica al flujo eyectivo del ventrículo izquierdo a través de la válvula aórtica durante la sístole, causada habitualmente por degeneración fibrocalcificada senil o válvula aórtica bicúspide congénita.',
    symptoms: ['Tríada clásica de la estenosis aórtica severa:', '1. Angina de esfuerzo (isquemia miocárdica por hipertrofia concéntrica masiva y baja presión de perfusión coronaria)', '2. Síncope de esfuerzo (por vasodilatación periférica en músculo en ejercicio que no puede ser compensada por gasto cardíaco fijo)', '3. Disnea de esfuerzo / Insuficiencia cardíaca (marcador de peor pronóstico)', 'Soplo mesosistólico eyectivo rudo en foco aórtico con irradiación a carótidas', 'Pulso parvus et tardus (pulso carotídeo de ascenso lento y escasa amplitud)'],
    redFlags: ['Aparición de síntomas: tras la aparición de disnea, la sobrevida media sin cirugía es de solo 2 años (mortalidad > 50% a los 2 años)'],
    criteria: 'Criterios ecocardiográficos de estenosis aórtica severa: Área valvular aórtica (AVA) < 1.0 cm2 (o < 0.6 cm2/m2 de SC) + Velocidad máxima del jet transaórtico (Vmax) ≥ 4.0 m/s + Gradiente medio transaórtico ≥ 40 mmHg.',
    labTests: ['Péptidos natriuréticos (NT-proBNP)', 'Troponina ultrasensible', 'Hemograma y función renal'],
    imaging: ['Ecocardiograma transtorácico doppler (método de elección diagnóstica)', 'Ecocardiograma de estrés con dobutamina a dosis bajas (en estenosis aórtica de bajo flujo y bajo gradiente con FEVI reducida)', 'Tomografía cardíaca para cuantificación del Score de calcio valvular aórtico de Agatston', 'Coronariografía preoperatoria reglada'],
    differential: ['Miocardiopatía hipertrófica obstructiva', 'Estenosis aórtica supravalvular o subvalvular', 'Esclerosis aórtica sin estenosis'],
    firstLine: [
      { drug: 'Sustitución valvular definitiva: Reemplazo Valvular Aórtico Quirúrgico (RVAq) o Implante Percutáneo de Prótesis Aórtica (TAVI)', dose: 'Procedimiento quirúrgico o percutáneo transcatéter', route: 'Quirúrgico / TAVI', freq: 'Definitivo', notes: 'ÚNICO TRATAMIENTO QUE MODIFICA LA SUPERVIVENCIA; indicado en todo paciente con EA severa sintomática o asintomática con FEVI < 50%' }
    ],
    alternatives: [
      { drug: 'Manejo médico de congestión pulmonar muy cauteloso: Furosemida a dosis bajas', dose: 'Furosemida 20 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'USAR CON EXTREMA PRECAUCIÓN: No reduce el gradiente valvular mecánico y puede provocar hipotensión severa y colapso circulatorio' }
    ],
    nonPharm: ['PROHIBICIÓN ESTRICTA de ejercicio físico vigoroso o deportes en pacientes con estenosis severa'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA: Los vasodilatadores (nitratos, dihidropiridinas, IECA) están CONTRAINDICADOS o deben usarse con extrema precaución porque pueden inducir hipotensión catastrófica y colapso cardiovascular', 'Monitoreo estricto de presión arterial y pulso carotídeo', 'En el post-TAVI: vigilancia inmediata de hematoma inguinal / sangrado en sitio de punción femoral y control de EKG por riesgo de bloqueo AV completo post-implante']
  },
  {
    number: 240,
    id: 'diag-240',
    title: 'Insuficiencia aórtica',
    cie10: 'I35.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Valvulopatía caracterizada por el cierre incompleto de las cúspides de la válvula aórtica durante la diástole, lo que produce reflujo retrógrado de sangre desde la aorta hacia el ventrículo izquierdo, generando sobrecarga combinada de volumen y presión.',
    symptoms: ['En forma crónica: disnea de esfuerzo progresiva, ortopnea, palpitaciones fuertes ("latidos torácicos hiperdinámicos") y dolor torácico nocturno', 'En forma aguda (por endocarditis o disección aórtica): disnea súbita extrema, edema pulmonar agudo y shock cardiogénico', 'Signos periféricos hiperdinámicos típicos:', '- Pulso celer et magnus / Pulso de Corrigan (pulso en martillo de agua, colapsante)', '- Presión de pulso muy amplia (sistólica muy elevada con diastólica muy baja o cercana a cero)', '- Signo de Musset (balanceo rítmico de la cabeza con cada latido)', '- Signo de Quincke (pulsación capilar en el lecho ungueal al comprimirlo)', '- Signo de Müller (pulsación de la úvula)'],
    redFlags: ['Insuficiencia aórtica aguda: cierre precoz de la válvula mitral, edema pulmonar masivo y colapso hemodinámico (emergencia quirúrgica inmediata)'],
    criteria: 'Ecocardiograma con jet de regurgitación aórtica que cumple criterios de severidad: Vena contracta > 6 mm, PHT (tiempo de hemipresión) < 200 ms, orificio regurgitante efectivo (EROA) ≥ 0.30 cm2 y volumen regurgitante ≥ 60 mL/latido.',
    labTests: ['Péptidos natriuréticos (NT-proBNP)', 'Troponinas y hemocultivos si se sospecha endocarditis'],
    imaging: ['Ecocardiograma transtorácico doppler', 'Resonancia magnética cardíaca (para cuantificación precisa de fracción regurgitante)', 'Angio-TAC de aorta torácica si se asocia a dilatación de la raíz aórtica'],
    differential: ['Ductus arterioso persistente', 'Fístula arteriovenosa de alto gasto', 'Insuficiencia pulmonar severa'],
    firstLine: [
      { drug: 'Cirugía de reemplazo valvular aórtico (o reparación / técnica de David de preservación valvular en aneurisma de raíz)', dose: 'Procedimiento quirúrgico a corazón abierto', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada en pacientes sintomáticos con IA severa, o asintomáticos con FEVI ≤ 50% o diámetro telesistólico del ventrículo izquierdo (DTSVI) > 50 mm (o > 25 mm/m2)' }
    ],
    alternatives: [
      { drug: 'Tratamiento médico con vasodilatadores arteriales (IECA o Dihidropiridinas)', dose: 'Enalapril 10 a 20 mg cada 12 horas VO o Amlodipino 5 a 10 mg/día VO', route: 'VO', freq: 'c/12-24h', notes: 'Solo útil en pacientes inoperables o para optimizar hemodinamia antes de la cirugía; no retrasa la necesidad de reemplazo' }
    ],
    nonPharm: ['Evitar esfuerzos isométricos intensos que aumenten bruscamente la poscarga'],
    nursingCare: ['Medición rigurosa de la presión arterial: registrar la notable divergencia entre la presión sistólica y diastólica', 'Vigilancia de signos de insuficiencia cardíaca aguda', 'En insuficiencia aórtica aguda: CONTRAINDICACIÓN ABSOLUTA del balón de contrapulsación intraaórtico (BCIAo, agravaría el reflujo aórtico de manera letal)', 'Cuidados de herida esternal y profilaxis antitrombótica postquirúrgica']
  },
  {
    number: 241,
    id: 'diag-241',
    title: 'Estenosis mitral',
    cie10: 'I05.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Obstrucción mecánica al flujo sanguíneo desde la aurícula izquierda hacia el ventrículo izquierdo durante la diástole ventricular por estrechamiento del orificio de la válvula mitral, originada en más del 90% de los casos por secuela reumática.',
    symptoms: ['Disnea de esfuerzo lentamente progresiva que puede descompensarse bruscamente con el embarazo, fiebre o taquicardia', 'Hemoptisis (por rotura de capilares bronquiales hipertensos)', 'Palpitaciones por fibrilación auricular secundaria a hipertrofia y dilatación auricular izquierda', 'Ronquera (Síndrome de Ortner: compresión del nervio laríngeo recurrente por la aurícula izquierda gigante)', 'Auscultación típica (Ritmo de Duroziez): 1° ruido brillante, chasquido de apertura mitral y retumbo diastólico decreciente con refuerzo presistólico'],
    redFlags: ['Edema pulmonar agudo "a pulmón seco" (con ventrículo izquierdo de tamaño normal)', 'ACV isquémico embólico por trombo en orejuela izquierda'],
    criteria: 'Ecocardiograma doppler con criterios de estenosis mitral severa: Área valvular mitral (AVM) ≤ 1.5 cm2 (muy severa si ≤ 1.0 cm2) + Gradiente medio transvalvular mitral ≥ 5-10 mmHg + Presión sistólica de la arteria pulmonar (PSAP) > 50 mmHg.',
    labTests: ['Péptidos natriuréticos, coagulación e INR para control de anticoagulación'],
    imaging: ['Ecocardiograma transtorácico (cálculo de Wilkins para evaluar movilidad, engrosamiento, calcificación y compromiso subvalvular)', 'Ecocardiograma transesofágico (descarte obligatorio de trombo en orejuela izquierda antes de valvuloplastia percutánea)'],
    differential: ['Mixoma auricular izquierdo', 'Cor triatriatum', 'Insuficiencia mitral asociada'],
    firstLine: [
      { drug: 'Valvuloplastia Mitral Percutánea con Balón (VMPB / Técnica de Inoue)', dose: 'Procedimiento intervencionista de elección', route: 'Cateterismo percutáneo', freq: 'Única', notes: 'Indicada en estenosis mitral severa sintomática con anatomía favorable (Score de Wilkins ≤ 8) y ausencia de insuficiencia mitral moderada-severa o trombos' },
      { drug: 'Anticoagulación oral con Warfarina (AVK)', dose: 'Titulada para INR 2.0 a 3.0', route: 'VO', freq: 'c/24h', notes: 'OBLIGATORIA si hay fibrilación auricular, trombo en AI o antecedente de embolia; los ACOD directos NO están aprobados en esta indicación' }
    ],
    alternatives: [
      { drug: 'Comisurotomía mitral quirúrgica o Reemplazo valvular mitral con prótesis mecánica/biológica', dose: 'Cirugía a corazón abierto', route: 'Quirúrgica', freq: 'Única', notes: 'En anatomía desfavorable (Wilkins > 8) o insuficiencia mitral importante asociada' },
      { drug: 'Betabloqueantes cardioselectivos (Bisoprolol)', dose: '2.5 a 5 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Controlan la frecuencia cardíaca y alargan la diástole, disminuyendo la presión venocapilar' }
    ],
    nonPharm: ['Profilaxis antibiótica secundaria para fiebre reumática', 'Restricción moderada de sal y evitar esfuerzos que provoquen taquicardia'],
    nursingCare: ['Monitoreo continuo de la frecuencia cardíaca: evitar a toda costa taquicardias que desencadenen edema pulmonar agudo inmediato', 'Control y registro de pruebas de coagulación (INR mensual estricto)', 'Vigilancia de signos de sangrado por anticoagulación oral', 'Inspección de la piel buscando signos de cianosis periférica y facies mitral']
  },
  {
    number: 242,
    id: 'diag-242',
    title: 'Insuficiencia mitral',
    cie10: 'I34.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Incompetencia valvular caracterizada por el reflujo anormal de sangre desde el ventrículo izquierdo hacia la aurícula izquierda durante la sístole ventricular. Se clasifica en primaria u orgánica (afectación intrínseca de valvas o cuerdas tendinosas: prolapso, fibroelástica, endocarditis) o secundaria / funcional (por dilatación del anillo en miocardiopatías).',
    symptoms: ['Disnea de esfuerzo progresiva, ortopnea y fatiga fácil', 'Soplo holosistólico o pansistólico regurgitante de tono soplante en chorro de vapor auscultable en foco mitral con irradiación a la axila izquierda', 'Palpitaciones irregulares por fibrilación auricular', 'En rotura aguda de cuerdas tendinosas o músculo papilar: disnea asfixiante y edema pulmonar hiperagudo'],
    redFlags: ['Insuficiencia mitral aguda por rotura de músculo papilar post-IAM o rotura de cuerda en prolapso (shock cardiogénico con requerimiento quirúrgico inmediato)'],
    criteria: 'Ecocardiograma doppler con criterios de insuficiencia mitral severa: EROA (área del orificio regurgitante efectivo) ≥ 0.40 cm2 (≥ 0.20 cm2 en secundaria) + Volumen regurgitante ≥ 60 mL/latido + Fracción regurgitante ≥ 50% + Vena contracta ≥ 7 mm.',
    labTests: ['NT-proBNP, función renal, troponinas y hemograma'],
    imaging: ['Ecocardiograma transtorácico doppler color (definición de anatomía valvular y FEVI)', 'Ecocardiograma transesofágico 3D (clave para guiar reparación)', 'Resonancia magnética cardíaca'],
    differential: ['Estenosis aórtica (el soplo aórtico es eyectivo y va a carótidas; el mitral es holosistólico y va a axila)', 'Comunicación interventricular', 'Insuficiencia tricuspídea'],
    firstLine: [
      { drug: 'Reparación valvular mitral quirúrgica (Valvuloplastia con anuloplastia y neocuerdas) de elección sobre el reemplazo protésico', dose: 'Cirugía a corazón abierto reparadora', route: 'Quirúrgica', freq: 'Única', notes: 'Preserva la arquitectura del ventrículo izquierdo y la función sistólica; indicada en IM primaria severa sintomática o asintomática con FEVI ≤ 60% o DTSVI ≥ 40 mm' }
    ],
    alternatives: [
      { drug: 'Reparación percutánea borde a borde con dispositivo MitraClip (TEER)', dose: 'Implante transcatéter percutáneo transeptal', route: 'Intervencionista', freq: 'Única', notes: 'De primera línea en insuficiencia mitral secundaria/funcional refractaria a terapia médica óptima o en pacientes inoperables de alto riesgo quirúrgico' },
      { drug: 'Tratamiento neurohormonal de insuficiencia cardíaca (ARNI, Betabloqueantes, Espironolactona, iSGLT2)', dose: 'Dosis tituladas', route: 'VO', freq: 'Reglado', notes: 'Pilar angular en la insuficiencia mitral secundaria funcional por disfunción ventricular' }
    ],
    nonPharm: ['Profilaxis de endocarditis en casos seleccionados', 'Restricción de sodio y monitoreo diario de peso'],
    nursingCare: ['Monitoreo continuo de parámetros respiratorios (saturación de O2, frecuencia respiratoria y ruidos adventicios)', 'Vigilancia de signos de fibrilación auricular concomitante', 'Control de presión arterial para evitar picos hipertensivos que aumenten la poscarga y el volumen de regurgitación mitral', 'Cuidados pre y postoperatorios de cirugía cardíaca o implante de MitraClip']
  },
  {
    number: 243,
    id: 'diag-243',
    title: 'Prolapso válvula mitral',
    cie10: 'I34.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Desplazamiento sistólico anormal de una o ambas valvas mitrales (más frecuentemente la posterior) hacia el interior de la aurícula izquierda ≥ 2 mm más allá del plano del anillo mitral en diástole, asociado comúnmente a degeneración mixomatosa del tejido conjuntivo (Enfermedad de Barlow o deficiencia fibroelástica).',
    symptoms: ['La gran mayoría de los casos son asintomáticos y de curso benigno', 'Dolor torácico atípico no relacionado con el esfuerzo', 'Palpitaciones paroxísticas y ansiedad', 'Fatiga, disnea leve y mareos ortostáticos', 'Auscultación clásica: Clic mesosistólico no eyectivo seguido de un soplo telesistólico que se adelanta y alarga con maniobras que reducen la precarga (Valsalva o bipedestación)'],
    redFlags: ['Rotura espontánea de cuerdas tendinosas con insuficiencia mitral aguda masiva', 'Prolapso mitral arritmogénico con riesgo de muerte súbita (asociado a inversión de ondas T inferiores y ectopias ventriculares)'],
    criteria: 'Ecocardiograma transtorácico en vista paraesternal eje largo que demuestre protrusión sistólica de la valva mitral ≥ 2 mm sobre el plano del anillo mitral + grosor valvar ≥ 5 mm (en forma mixomatosa clásica).',
    labTests: ['Perfil tiroideo y electrolitos séricos'],
    imaging: ['Ecocardiograma transtorácico doppler (evaluación del grado de regurgitación y grosor de valvas)', 'Holter de 24 horas en pacientes con palpitaciones o síncope', 'Resonancia magnética cardíaca (evalúa fibrosis del músculo papilar en fenotipo arritmogénico)'],
    differential: ['Insuficiencia mitral reumática', 'Cardiopatía isquémica con disfunción de papilar', 'Ansiedad somatomorfa'],
    firstLine: [
      { drug: 'Tratamiento conservador y tranquilización del paciente en formas leves asintomáticas', dose: 'Seguimiento clínico y ecocardiográfico cada 3 a 5 años', route: 'Observación', freq: 'Periódico', notes: 'Pronóstico excelente en ausencia de regurgitación severa o arritmias' },
      { drug: 'Betabloqueantes a dosis bajas (Bisoprolol o Propranolol) para síntomas autonómicos', dose: 'Bisoprolol 2.5 a 5 mg/día VO o Propranolol 10 a 20 mg cada 12 horas VO', route: 'VO', freq: 'c/12-24h', notes: 'Alivian las palpitaciones, las extrasístoles y el dolor torácico atípico' }
    ],
    alternatives: [
      { drug: 'Reparación quirúrgica de la válvula mitral (plastia mitral con resección o neocuerdas de PTFE)', dose: 'Procedimiento quirúrgico definitivo', route: 'Quirúrgica', freq: 'Única', notes: 'Indicada cuando progresa a insuficiencia mitral severa sintomática' }
    ],
    nonPharm: ['Evitar estimulantes en exceso (cafeína, nicotina, energizantes)', 'Hidratación adecuada y ejercicio físico aeróbico regular'],
    nursingCare: ['Tranquilizar activamente al paciente desmitificando el diagnóstico como una "enfermedad cardíaca grave"', 'Instruir sobre la técnica de control de pulso ante episodios de palpitaciones', 'Educación para consultar de inmediato ante la aparición brusca de disnea o sensación de ahogo (posible rotura de cuerda tendinosa)']
  },
  {
    number: 244,
    id: 'diag-244',
    title: 'Estenosis tricuspídea/pulmonar',
    cie10: 'I07.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Valvulopatías derechas obstructivas: la estenosis tricuspídea (ET) es el estrechamiento del orificio auriculoventricular derecho (casi siempre reumático y asociado a valvulopatía mitral); la estenosis pulmonar (EP) es la obstrucción al flujo de salida del ventrículo derecho (habitualmente congénita por valvas fusionadas o displásicas).',
    symptoms: ['Estenosis Tricuspídea: congestión venosa sistémica desproporcionada con hepatomegalia dolorosa, ascitis refractaria, edema maleolar gigante y onda "a" gigante en el pulso venoso yugular', 'Estenosis Pulmonar: disnea de esfuerzo, fatiga precoz, dolor torácico anginoso y síncope de esfuerzo con soplo mesosistólico rudo en foco pulmonar precedido de clic eyectivo'],
    redFlags: ['Falla ventricular derecha aguda con bajo gasto anterógrado severo'],
    criteria: 'Ecocardiograma doppler: ET severa si gradiente medio transvalvular tricuspídeo ≥ 5 mmHg o área valvular tricuspídea ≤ 1.0 cm2; EP severa si velocidad máxima transpulmonar > 4.0 m/s o gradiente transvalvular pico > 64 mmHg.',
    labTests: ['Péptidos natriuréticos (NT-proBNP), pruebas de función hepática (perfil colestásico por congestión)'],
    imaging: ['Ecocardiograma transtorácico doppler continuo y color', 'Resonancia magnética cardíaca (para medir volúmenes y masa del ventrículo derecho)', 'Radiografía de tórax (dilatación post-estenótica de la arteria pulmonar principal en EP)'],
    differential: ['Síndrome carcinoide con afección de cavidades derechas', 'Endocarditis tricuspídea', 'Mixoma de aurícula derecha'],
    firstLine: [
      { drug: 'En Estenosis Pulmonar severa: Valvuloplastia Pulmonar Percutánea con Balón', dose: 'Procedimiento percutáneo intervencionista', route: 'Transcatéter', freq: 'Única', notes: 'Tratamiento curativo de primera elección con excelentes resultados a largo plazo' },
      { drug: 'En Estenosis Tricuspídea severa: Comisurotomía o Reemplazo valvular tricuspídeo (preferentemente prótesis biológica)', dose: 'Procedimiento quirúrgico', route: 'Quirúrgica', freq: 'Única', notes: 'Generalmente realizada durante la cirugía concomitante de la válvula mitral/aórtica' }
    ],
    alternatives: [
      { drug: 'Diuréticos de asa (Furosemida) y Espironolactona', dose: 'Furosemida 20 a 40 mg/día VO + Espironolactona 25 a 50 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Manejo médico sintomático de la congestión venosa y ascitis' }
    ],
    nonPharm: ['Restricción moderada de sodio'],
    nursingCare: ['Control del perímetro abdominal diario y vigilancia de edemas en extremidades inferiores', 'Monitoreo de la ingurgitación venosa yugular y del reflujo hepatoyugular', 'Cuidados post-cateterismo en valvuloplastia pulmonar (vigilancia del sitio de punción femoral)']
  },
  {
    number: 245,
    id: 'diag-245',
    title: 'ACV isquémico',
    cie10: 'I63.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Accidente Cerebrovascular Isquémico (Ictus / Stroke): déficit neurológico focal agudo provocado por la interrupción súbita del flujo sanguíneo cerebral arterial, secundario a trombosis in situ sobre placa de ateroma, embolia cardiogénica (FA) o enfermedad de pequeño vaso (infarto lacunar).',
    symptoms: ['Instauración súbita ("en trueno"):', '- Escala de Cincinnati / FAST positiva:', '- Desviación de la comisura de la boca / asimetría facial (Face)', '- Pérdida súbita de fuerza en un brazo o pierna (Arm)', '- Dificultad para articular la palabra o comprender el lenguaje (Speech)', '- Hemianopsia homónima, hemianestesia, vértigo central, ataxia o alteración del estado de conciencia'],
    redFlags: ['Deterioro neurológico progresivo, herniación cerebral uncal con anisocoria por edema cerebral maligno o infarto de ACM maligno'],
    criteria: 'Déficit neurológico focal agudo persistente + exclusión obligatoria de hemorragia cerebral mediante Tomografía Cerebral sin contraste inmediata + identificación de zona de isquemia en TAC o Resonancia (difusión DWI).',
    labTests: ['Glucemia capilar URGENTE (descartar hipoglucemia como simulador de ACV)', 'Tiempo de protrombina (TP/INR) y TTPa basales inmediatos', 'Hemograma y recuento plaquetario (plaquetas > 100,000 para fibrinólisis)', 'Troponina y función renal'],
    imaging: ['TOMOGRAFÍA COMPUTARIZADA CEREBRAL SIN CONTRASTE INMEDIATA (puerta-TAC < 20-25 minutos)', 'Angio-TAC de vasos cerebrales y de cuello (detección de oclusión de gran vaso arterial: ACI, ACM M1-M2)', 'Resonancia cerebral con secuencia DWI (hiperintensidad precoz citotóxica en minutos)'],
    differential: ['Hemorragia intraparenquimatosa cerebral', 'Hipoglucemia severa (Stroke mimic)', 'Crisis epiléptica con parálisis de Todd postictal', 'Migraña con aura hemipléjica'],
    firstLine: [
      { drug: 'Fibrinólisis endovenosa con Alteplasa (rt-PA) o Tenecteplasa (TNK) dentro de la ventana de 4.5 horas', dose: 'Alteplasa 0.9 mg/kg EV (máximo 90 mg): 10% en bolo EV en 1 minuto y el 90% restante en infusión continua durante 60 minutos', route: 'EV en infusión', freq: 'Inmediata', notes: 'INDICADA EN VENTANA < 4.5 HORAS sin contraindicaciones; PA debe ser mantenida < 185/110 mmHg antes de iniciar' },
      { drug: 'Trombectomía Mecánica Endovascular (TME)', dose: 'Extracción del trombo mediante stent retriever o aspiración directa', route: 'Neurointervencionismo', freq: 'Inmediata', notes: 'INDICADA HASTA LAS 24 HORAS del inicio de síntomas en oclusión de gran vaso (ACI o ACM) según criterios de imagen de tejido salvable (mismatch)' }
    ],
    alternatives: [
      { drug: 'Aspirina oral (o por SNG)', dose: '160 a 300 mg/día VO iniciando 24 horas después de la fibrinólisis (o de inmediato si no fue candidato a rt-PA)', route: 'VO/SNG', freq: 'c/24h', notes: 'Antiagregación de inicio' },
      { drug: 'Craniectomía descompresiva quirúrgica de urgencia', dose: 'Cirugía de descompresión ósea', route: 'Neuroquirúrgica', freq: 'Urgente', notes: 'En infarto maligno de la arteria cerebral media en menores de 60 años con deterioro neurológico' }
    ],
    nonPharm: ['Cabecera de cama a 0° inicial si hay sospecha de hipoperfusión o a 30° si hay edema/hipertensión intracraneal', 'Oxigenoterapia solo si SaO2 < 92%', 'Manejo estricto de normotermia (< 37.5 °C) y normoglucemia (140-180 mg/dL)'],
    nursingCare: ['CÓDIGO ICTUS DE ENFERMERÍA: Tiempo es cerebro (cada minuto mueren 1.9 millones de neuronas)', 'Control neurológico horario estricto mediante la Escala NIHSS', 'Monitoreo riguroso de la presión arterial cada 15 minutos durante la infusión de rt-PA: mantener estrictamente PAS < 180 mmHg y PAD < 105 mmHg (para prevenir hemorragia intracraneal)', 'Suspensión INMEDIATA de rt-PA y aviso médico urgente si el paciente presenta cefalea súbita intensa, náuseas bruscas, deterioro neurológico o hipertensión no controlable', 'Evaluación sistemática de la deglución (test del vaso de agua) ANTES de administrar líquidos o alimentos orales (prevenir neumonía aspirativa)']
  },
  {
    number: 246,
    id: 'diag-246',
    title: 'ACV hemorrágico',
    cie10: 'I61.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Hemorragia intraparenquimatosa cerebral primaria producida por la rotura espontánea no traumática de un vaso arterial cerebral, originada típicamente por arteriopatía hipertensiva (rotura de microaneurismas de Charcot-Bouchard en ganglios basales) o angiopatía amiloide cerebral en ancianos.',
    symptoms: ['Déficit neurológico focal agudo que se instaura durante la actividad diurna y progresa en minutos a horas', 'Cefalea intensa súbita, náuseas y vómitos explosivos en "escopetazo"', 'Elevación extrema y severa de la presión arterial reactiva', 'Disminución rápida del nivel de conciencia (estupor o coma en grandes hematomas)', 'Convulsiones de inicio'],
    redFlags: ['Crecimiento activo del hematoma en las primeras 6 horas', 'Signo del "spot sign" en la angio-TAC', 'Herniación cerebral transtentorial con pupila midriática arreactiva y paro respiratorio'],
    criteria: 'TAC cerebral sin contraste que evidencia una colección hemática hiperdensa intraparenquimatosa bien delimitada con edema perilesional y eventual colapso ventricular o desviación de la línea media.',
    labTests: ['Pruebas de coagulación urgentes: TP, TTPa, INR y recuento plaquetario', 'Troponina ultrasensible, electrolitos y hemograma'],
    imaging: ['TAC cerebral sin contraste INMEDIATA', 'Angio-TAC cerebral urgente para descartar malformaciones arteriovenosas (MAV), aneurismas rotos o signo de sangrado activo (spot sign)', 'Resonancia magnética cerebral en angiopatía amiloide (microhemorragias lobares)'],
    differential: ['ACV isquémico con transformación hemorrágica', 'Hemorragia subaracnoidea', 'Rotura de malformación vascular', 'Tumor cerebral sangrante'],
    firstLine: [
      { drug: 'Control intensivo y rápido de la Presión Arterial (Estudio INTERACT-2): Labetalol o Nicardipino EV', dose: 'Labetalol 10 a 20 mg EV en bolo lento cada 10-20 min o Nicardipino en infusión 5-15 mg/h para meta inmediata de PAS entre 130 y 140 mmHg', route: 'EV', freq: 'Titulado', notes: 'El descenso precoz de la PAS frena el crecimiento del hematoma en las primeras horas' },
      { drug: 'Reversión urgente de la anticoagulación previa según el fármaco causal', dose: 'Para Warfarina: Complejo Protrombínico 4 Factores (25-50 UI/kg EV) + Vitamina K 10 mg EV lento; Para Dabigatrán: Idarucizumab 5 g EV; Para Rivaroxabán/Apixabán: Andexanet alfa (o CCP 4F 50 UI/kg)', route: 'EV urgente', freq: 'Inmediata', notes: 'Debe administrarse dentro de los primeros minutos del ingreso' }
    ],
    alternatives: [
      { drug: 'Evacuación neuroquirúrgica urgente del hematoma (craniotomía abierta o aspiración mínimamente invasiva)', dose: 'Procedimiento neuroquirúrgico', route: 'Quirúrgica', freq: 'Urgente', notes: 'Indicada de emergencia en hematomas cerebelosos > 3 cm con compresión del tronco encefálico o hidrocefalia obstructiva' },
      { drug: 'Colocación de drenaje ventricular externo (DVE)', dose: 'Ventriculostomía', route: 'Quirúrgica', freq: 'Urgente', notes: 'En presencia de hemorragia intraventricular con hidrocefalia aguda' }
    ],
    nonPharm: ['Elevación de cabecera a 30° con cuello neutro para favorecer el retorno venoso cerebral y reducir la PIC', 'Tratamiento agresivo de la fiebre y la hiperglucemia'],
    nursingCare: ['Monitoreo neurológico horario estricto con escala de Glasgow y reactividad pupilar bilateral', 'Monitoreo invasivo continuo de la presión arterial: asegurar que la PAS descienda a la meta de 130-140 mmHg de manera suave sin hipotensiones bruscas', 'Vigilancia de signos de hipertensión endocraneana (tríada de Cushing: bradicardia, hipertensión y alteración del patrón respiratorio)', 'Profilaxis de aspiración: nada por vía oral y sonda nasogástrica con aspiración suave']
  },
  {
    number: 247,
    id: 'diag-247',
    title: 'Hemorragia subaracnoidea',
    cie10: 'I60.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Extravasación aguda de sangre en el espacio subaracnoideo donde circula el líquido cefalorraquídeo, originada en el 85% de los casos espontáneos no traumáticos por la rotura de un aneurisma sacular en las bifurcaciones del Polígono de Willis.',
    symptoms: ['Cefalea ictal súbita hiperaguda de máxima intensidad en segundos ("la peor cefalea de toda mi vida", "cefalea en trueno")', 'Pérdida transitoria o prolongada del conocimiento al momento de la cefalea', 'Rigidez de nuca y signos meníngeos floridos (signos de Kernig y Brudzinski positivos)', 'Náuseas, vómitos repetitivos, fotofobia y fonofobia', 'Hemorragias prerretinianas o vítreas (Síndrome de Terson)'],
    redFlags: ['Resangrado precoz del aneurisma (máximo riesgo en primeras 24h con mortalidad del 70%)', 'Vasoespasmo cerebral tardío e isquemia cerebral retardada (entre días 4 y 14)'],
    criteria: 'Cefalea en trueno + TAC cerebral sin contraste que demuestra hiperdensidad de sangre en las cisternas de la base, cisura de Silvio o espacio subaracnoideo (o punción lumbar con líquido xantocrómico si TAC es negativa tras 6h).',
    labTests: ['Punción lumbar si TAC es normal tras 6-12 horas: líquido hemorrágico que no aclara en los 3 tubos + xantocromía confirmada por espectrofotometría', 'Troponina (elevación frecuente por miocardiopatía neurogénica), electrolitos (hiponatremia por CSW o SIADH)'],
    imaging: ['TAC cerebral sin contraste inmediata (sensibilidad 98-100% en primeras 6-12 horas)', 'Angio-TAC cerebral urgente de alta resolución para localizar el aneurisma', 'Arteriografía cerebral digital por sustracción (gold standard para planificación de oclusión)'],
    differential: ['Cefalea en trueno primaria benigna', 'Meningitis aguda bacteriana', 'Disección de arteria cervical', 'Trombosis venosa cerebral'],
    firstLine: [
      { drug: 'Oclusión urgente del aneurisma roto: Embolización endovascular con coils o Clipaje microquirúrgico', dose: 'Procedimiento neurointervencionista o quirúrgico dentro de las primeras 24-72 horas', route: 'Endovascular / Quirúrgico', freq: 'Urgente', notes: 'Previene el resangrado fatal del aneurisma; de elección coils en la mayoría de casos' },
      { drug: 'Nimodipino oral para prevención del vasoespasmo e isquemia cerebral diferida', dose: '60 mg cada 4 horas VO (o por sonda nasogástrica) durante 21 días consecutivos', route: 'VO/SNG', freq: 'c/4h estricto', notes: 'Único fármaco con evidencia demostrada para mejorar el pronóstico funcional neurológico' }
    ],
    alternatives: [
      { drug: 'Drenaje ventricular externo (DVE)', dose: 'Ventriculostomía', route: 'Quirúrgica', freq: 'Urgente', notes: 'En presencia de hidrocefalia aguda obstructiva' },
      { drug: 'Angioplastia cerebral con balón o vasodilatadores intraarteriales (Milrinona/Nicardipino)', dose: 'Procedimiento neuroendovascular de rescate', route: 'Intraarterial', freq: 'SOS', notes: 'Para rescate de vasoespasmo clínico y angiográfico severo refractario' }
    ],
    nonPharm: ['Reposo absoluto en cama en ambiente oscuro, silencioso y tranquilo sin estímulos visuales o auditivos', 'Manejo estricto de la euvolemia con suero salino al 0.9% (evitar la hipovolemia que precipita vasoespasmo)'],
    nursingCare: ['ADMINISTRACIÓN ININTERRUMPIDA DE NIMODIPINO CADA 4 HORAS EXACTAS: No demorar ni saltear ninguna toma; si hay hipotensión, avisar al médico para fraccionar pero nunca suspenderlo arbitrariamente', 'Monitoreo neurológico estricto horario: vigilar la aparición de nuevo déficit focal motor o lenguaje entre los días 4 y 14 (alerta de vasoespasmo)', 'Monitoreo de sodio sérico diario: prevenir la hiponatremia inducida por pérdida de sal cerebral', 'Evitar maniobras de Valsalva, tos forzada o vómitos (administrar antieméticos y laxantes profilácticos)']
  },
  {
    number: 248,
    id: 'diag-248',
    title: 'Ataque isquémico transitorio',
    cie10: 'G45.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Episodio transitorio de disfunción neurológica causado por isquemia focal cerebral, medular o retiniana (amaurosis fugaz), sin evidencia de infarto agudo tisular en los estudios de neuroimagen, cuyos síntomas revierten típicamente en menos de 1 hora.',
    symptoms: ['Pérdida súbita y transitoria de fuerza o sensibilidad en hemicuerpo, cara o brazo', 'Dificultad fugaz para hablar o comprender (afasia o disartria transitoria)', 'Amaurosis fugaz: pérdida súbita, indolora y completa de la visión en un ojo "como una cortina negra que desciende" y se recupera en pocos minutos', 'Ataxia, diplopía o vértigo de minutos de duración con resolución completa'],
    redFlags: ['Score ABCD2 ≥ 4 puntos: elevado riesgo de sufrir un ACV isquémico discapacitante en las próximas 48 horas a 7 días (hasta 10-15%)'],
    criteria: 'Déficit neurológico focal agudo autolimitado + TAC o Resonancia Magnética (DWI) cerebral sin lesiones isquémicas agudas recientes.',
    labTests: ['Perfil lipídico, glucemia, HbA1c, coagulación y hemograma'],
    imaging: ['Resonancia magnética cerebral con secuencias DWI (gold standard para confirmar ausencia de necrosis)', 'Eco-Doppler de arterias carotídeas y vertebrales (búsqueda de estenosis carotídea)', 'Ecocardiograma transtorácico y Holter de 24-48 horas para descartar fibrilación auricular paroxística'],
    differential: ['Crisis epiléptica focal', 'Migraña con aura', 'Síncope vasovagal', 'Amnesia global transitoria'],
    firstLine: [
      { drug: 'Doble antiagregación plaquetaria precoz (DAPT): Aspirina + Clopidogrel (Estudios CHANCE y POINT)', dose: 'Aspirina 100 mg/día + Clopidogrel 300 mg carga luego 75 mg/día VO durante los primeros 21 días, continuando luego con monoterapia', route: 'VO', freq: 'c/24h x 21 días', notes: 'Indicada en AIT de alto riesgo (ABCD2 ≥ 4); reduce drásticamente el riesgo de infarto cerebral precoz' },
      { drug: 'Atorvastatina de alta potencia', dose: '40 a 80 mg/día VO en la noche', route: 'VO', freq: 'c/24h', notes: 'Estabilización de placa endotelial y prevención secundaria inmediata' }
    ],
    alternatives: [
      { drug: 'Endarterectomía carotídea quirúrgica (o angioplastia con stent)', dose: 'Procedimiento desobstructivo precoz', route: 'Quirúrgica', freq: 'En primeros 7-14 días', notes: 'Indicada urgentemente si se detecta estenosis carotídea sintomática severa (70-99%)' },
      { drug: 'Anticoagulación oral con ACOD', dose: 'Apixabán o Rivaroxabán', route: 'VO', freq: 'Reglado', notes: 'Si se demuestra fibrilación auricular como causa del AIT' }
    ],
    nonPharm: ['Hospitalización obligatoria en Unidad de Ictus para monitorización y estudio acelerado en pacientes con Score ABCD2 ≥ 4'],
    nursingCare: ['Cálculo inmediato del Score ABCD2: Edad ≥ 60a (1p), PA ≥ 140/90 (1p), Clínica motora (2p) o habla (1p), Duración ≥ 60 min (2p) o 10-59 min (1p), Diabetes (1p)', 'Monitorización telemétrica continua en busca de episodios silentes de fibrilación auricular', 'Educación para la salud al paciente: explicar con énfasis que el AIT es un "pre-infarto" de extrema gravedad que requiere atención hospitalaria aunque los síntomas hayan desaparecido', 'Vigilancia de nuevos síntomas de déficit motor o del habla']
  },
  {
    number: 249,
    id: 'diag-249',
    title: 'Aneurisma de aorta abdominal',
    cie10: 'I71.4',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Dilatación focal patológica y permanente de la aorta abdominal con un diámetro transverso ≥ 3.0 cm (o un aumento > 50% de su calibre normal), localizada habitualmente en el segmento infrarrenal (90% de los casos).',
    symptoms: ['Habitualmente asintomático por años y detectado incidentalmente en ecografía o TAC', 'Sensación de pulsación anormal o latido molesto en el epigastrio o mesogastrio', 'Masa abdominal palpable, pulsátil y expansiva en la línea media'],
    redFlags: ['ROTURA ANEURISMÁTICA AGUDA: Tríada clásica de rotura: 1. Dolor abdominal o lumbar agudo desgarrador; 2. Masa abdominal pulsátil; 3. Shock hipovolémico profundo y colapso (mortalidad global > 80%)'],
    criteria: 'Diámetro anteroposterior o transverso de la aorta abdominal ≥ 3.0 cm medido en ecografía abdominal o tomografía.',
    labTests: ['Hemograma completo, coagulograma y pruebas cruzadas para reserva masiva de sangre prequirúrgica'],
    imaging: ['Ecografía abdominal (método de elección para screening y seguimiento semestral/anual)', 'Angio-TAC aortoiliaca con contraste (gold standard para anatomía preoperatoria y planificación de prótesis)'],
    differential: ['Cólico nefrítico o litiasis ureteral', 'Lumbago mecánico severo', 'Pancreatitis aguda'],
    firstLine: [
      { drug: 'Reparación Quirúrgica Abierta o Reparación Endovascular del Aneurisma (EVAR con endoprótesis)', dose: 'Procedimiento quirúrgico definitivo', route: 'EVAR / Quirúrgica', freq: 'Definitivo', notes: 'Indicada formalmente cuando el diámetro es ≥ 5.5 cm en varones (o ≥ 5.0 cm en mujeres), si crece > 1.0 cm al año o si se torna sintomático' }
    ],
    alternatives: [
      { drug: 'Control estricto de factores de riesgo y seguimiento ecográfico seriado', dose: 'En aneurismas pequeños (< 5.0 cm)', route: 'Ambulatorio', freq: 'c/6-12 meses', notes: 'Cese absoluto del tabaco, estatinas y control estricto de presión arterial con betabloqueantes' }
    ],
    nonPharm: ['ABANDONO TERMINANTE DEL TABACO (el tabaquismo es el factor más potente de crecimiento y rotura del aneurisma)'],
    nursingCare: ['NO PALPAR de forma vigorosa o reiterada una masa abdominal pulsátil para evitar riesgo mecánico', 'En rotura inminente: canalización de dos accesos venosos periféricos de grueso calibre (14G o 16G) e infusión cautelosa con hipotensión permisiva (PAS 80-90 mmHg) hasta el quirófano para evitar desprendimiento del trombo', 'Control post-EVAR: vigilancia de pulsos pedios distales, temperatura de extremidades inferiores y detección de hematomas en sitios femorales']
  },
  {
    number: 250,
    id: 'diag-250',
    title: 'Disección aórtica aguda',
    cie10: 'I71.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Emergencia cardiovascular con desgarro de la túnica íntima aórtica que permite a la sangre a presión ingresar y disecar la túnica media, creando una falsa luz a lo largo del vaso. Se clasifica según Stanford en Tipo A (afecta aorta ascendente: emergencia quirúrgica inmediata) y Tipo B (restringida a aorta descendente distal al origen de la subclavia izquierda).',
    symptoms: ['Dolor torácico súbito, catastrófico, desgarrador o lacerante ("como si me estuvieran abriendo el pecho por dentro")', 'Irradiación migratoria típica hacia la espalda, región interescapular, cuello, mandíbula o abdomen a medida que avanza la disección', 'Diferencial de pulsos o asimetría tensional entre ambos brazos (> 20 mmHg de diferencia sistólica)', 'Soplo diastólico nuevo de insuficiencia aórtica aguda por afectación de la raíz aórtica', 'Síntomas de malperfusión isquémica de órganos (isquemia de extremidades, paraplejía, infarto mesentérico, oliguria o ACV)'],
    redFlags: ['Taponamiento cardíaco por hemopericardio', 'Rotura aórtica hacia el espacio pleural o mediastino con shock exanguinante'],
    criteria: 'Angio-TAC de aorta torácica y abdominal que evidencia el flap intimal de disección separando la verdadera luz de la falsa luz aórtica.',
    labTests: ['Dímero D (casi siempre marcadamente elevado > 500 ng/mL; un dímero D normal hace muy improbable la disección)', 'Troponina ultrasensible (puede estar elevada si la disección ocluye el ostium coronario derecho)', 'Hemograma, función renal y coagulación'],
    imaging: ['ANGIO-TAC DE TÓRAX Y ABDOMEN CON CONTRASTE (método de elección diagnóstica rápida y precisa)', 'Ecocardiograma transesofágico (ETE) en pacientes inestables en quirófano o shock trauma', 'Radiografía de tórax (ensanchamiento mediastínico > 8 cm en > 60% de casos)'],
    differential: ['Infarto agudo de miocardio con elevación del ST (OJO: administrar trombolíticos o anticoagulantes en una disección aórtica es mortal)', 'Embolia pulmonar', 'Pericarditis aguda'],
    firstLine: [
      { drug: 'Control hemodinámico médico ANTI-IMPULSO INMEDIATO (Disminución rápida de dP/dt y PA)', dose: 'Labetalol EV en infusión continua (o Esmolol EV) para meta de Frecuencia Cardíaca < 60 lpm Y luego Nitroprusiato de Sodio EV para PAS 100-120 mmHg', route: 'EV continua', freq: 'Inmediata', notes: 'REGLA CARDINAL: Administrar SIEMPRE primero el betabloqueante antes que el vasodilatador (el nitroprusiato aislado causaría taquicardia refleja y aumentaría la fuerza de cizallamiento aórtico, acelerando la rotura)' },
      { drug: 'En Disección Tipo A de Stanford: CIRUGÍA CARDÍACA ABIERTA DE EMERGENCIA INMEDIATA', dose: 'Reemplazo de la aorta ascendente con tubo protésico de Dacron +/- reemplazo valvular', route: 'Quirúrgica de urgencia', freq: 'Inmediata', notes: 'Mortalidad aumenta 1-2% por cada hora de retraso' }
    ],
    alternatives: [
      { drug: 'En Disección Tipo B de Stanford: Tratamiento médico intensivo o Reparación Endovascular (TEVAR)', dose: 'Implante de endoprótesis torácica percutánea', route: 'Endovascular', freq: 'Según complicación', notes: 'TEVAR indicado de urgencia si hay disección Tipo B complicada (dolor refractario, rotura o malperfusión de órganos)' }
    ],
    nonPharm: ['Monitoreo invasivo estricto en UCI con línea arterial continua'],
    nursingCare: ['MEDICIÓN OBLIGATORIA DE LA PRESIÓN ARTERIAL EN AMBOS BRAZOS: Registrar cualquier gradiente de presión entre extremidades superiores (> 20 mmHg es altamente sugestivo)', 'CONTRAINDICACIÓN TERMINANTE DE ANTICOAGULANTES Y FIBRINOLÍTICOS: Nunca administrar heparina o aspirina ante la sospecha de disección', 'Toma y titulación continua de betabloqueantes y vasodilatadores con bomba de infusión para mantener FC < 60 lpm y PAS < 120 mmHg', 'Preparación prequirúrgica urgente inmediata y movilización con máxima delicadeza']
  },
  {
    number: 251,
    id: 'diag-251',
    title: 'Insuficiencia venosa (Várices)',
    cie10: 'I83.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad venosa crónica caracterizada por la incompetencia valvular de las venas de las extremidades inferiores, lo que produce reflujo venoso, estasis sanguínea e hipertensión venosa ambulatoria con dilatación y tortuosidad de las venas superficiales (várices).',
    symptoms: ['Sensación de pesadez, cansancio y dolor sordo en pantorrillas que empeora al final del día tras bipedestación prolongada o con el calor', 'Edema vespertino perimaleolar que cede al elevar las piernas durante la noche', 'Prurito cutáneo, calambres nocturnos en pantorrillas y síndrome de piernas inquietas', 'Venas varicosas subcutáneas tortuosas y dilatadas (≥ 3 mm de diámetro)', 'Cambios tróficos avanzados: dermatitis de estasis, pigmentación ocre por hemosiderina, lipodermatoesclerosis y úlceras venosas supramaleolares'],
    redFlags: ['Varicoflebitis aguda trombótica', 'Varicorragia profusa por rotura externa de una várice', 'Úlcera venosa crónica sobreinfectada'],
    criteria: 'Clasificación CEAP clínica (C0 a C6) + Eco-Doppler venoso con demostración de reflujo patológico > 0.5 segundos en venas superficiales o > 1.0 segundo en venas profundas.',
    labTests: ['Habitualmente no requeridos para el diagnóstico'],
    imaging: ['Eco-Doppler venoso color de extremidades inferiores (estudio gold standard para mapeo venoso y valoración de reflujo en venas safenas magna y menor y perforantes)'],
    differential: ['Linfedema', 'Trombosis venosa profunda aguda previa', 'Edema por insuficiencia cardíaca o fármacos (calcioantagonistas)'],
    firstLine: [
      { drug: 'Terapia compresiva elástica graduada (Pilar angular no farmacológico)', dose: 'Medias de compresión graduada Clase II (20 a 30 mmHg de presión maleolar) colocadas en la mañana antes de levantarse de la cama', route: 'Tópica compresiva', freq: 'Diario diurno', notes: 'Mejora el retorno venoso, reduce el edema y alivia notablemente la sintomatología' },
      { drug: 'Flebotónicos orales: Fracción flavonoide purificada micronizada (Diosmina 450 mg + Hesperidina 50 mg)', dose: '500 mg cada 12 horas VO (o 1000 mg/día VO) con comidas por ciclos de 2 a 3 meses', route: 'VO con alimentos', freq: 'c/12-24h', notes: 'Alivio coadyuvante de los síntomas de pesadez y edema' }
    ],
    alternatives: [
      { drug: 'Ablación térmica endovenosa (Láser endovenoso o Radiofrecuencia) o Escleroterapia con microespuma', dose: 'Procedimiento mínimamente invasivo ambulatorio', route: 'Intervencionista', freq: 'Electivo', notes: 'Tratamiento de elección moderno para oclusión de troncos safenos incompetentes' },
      { drug: 'Safenectomía quirúrgica tradicional (Stripping)', dose: 'Cirugía convencional', route: 'Quirúrgica', freq: 'Única', notes: 'En anatomía desfavorable o várices gigantes' }
    ],
    nonPharm: ['Elevación periódica de las piernas a 30° sobre el nivel del corazón durante 20-30 min varias veces al día', 'Evitar periodos prolongados de pie o sentado; realizar pausas activas caminando o contrayendo pantorrillas', 'Evitar fuentes directas de calor (saunas, baños muy calientes)'],
    nursingCare: ['MANEJO DE EMERGENCIA DE VARICORRAGIA: Elevar inmediatamente la pierna afectada a 90° y realizar compresión directa firme sobre el punto sangrante con gasa estéril (NUNCA aplicar torniquetes apretados)', 'Educación detallada sobre la colocación correcta de medias elásticas sin arrugas ni pliegues', 'Cuidado de la piel con cremas hidratantes neutras para prevenir la dermatitis por estasis', 'Curación avanzada de úlceras venosas con apósitos hidrocoloides o alginatos y vendaje compresivo multicapa']
  },
  {
    number: 252,
    id: 'diag-252',
    title: 'Trombosis venosa profunda',
    cie10: 'I80.2',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Formación de un trombo sanguíneo en el interior de una vena del sistema venoso profundo, habitualmente en las extremidades inferiores (venas poplítea, femoral o ilíaca), que puede desprenderse y migrar provocando tromboembolismo pulmonar (TEP).',
    symptoms: ['Aparición aguda de edema unilateral asimétrico en una pierna o pantorrilla', 'Dolor constante sordo o pesadez en la pantorrilla o muslo que aumenta al caminar o ponerse de pie', 'Calor local, eritema o coloración cianótica de la extremidad afectada', 'Aumento de la circunferencia de la pantorrilla afectada (> 3 cm comparada con la contralateral)', 'Signo de Homans (dolor en pantorrilla a la dorsiflexión pasiva del pie, signo poco sensible)'],
    redFlags: ['Tromboembolismo pulmonar agudo (disnea súbita, dolor pleurítico, síncope)', 'Flegmasia cerúlea dolens (obstrucción venosa total masiva con cianosis profunda, isquemia arterial secundaria y riesgo de gangrena venosa)'],
    criteria: 'Estratificación de probabilidad clínica (Score de Wells para TVP) + Dímero D de alta sensibilidad + Eco-Doppler venoso de compresión positivo (falta de compresibilidad de la vena profunda explorada).',
    labTests: ['Dímero D ultrasensible (alto valor predictivo negativo: descarta TVP si es normal en probabilidad baja/intermedia)', 'Creatinina sérica y hemograma basal', 'Estudio de trombofilia en pacientes jóvenes o con trombosis no provocada recurrente (tras suspender anticoagulación)'],
    imaging: ['ECO-DOPPLER VENOSO DE COMPRESIÓN DE EXTREMIDADES INFERIORES (gold standard diagnóstico: pérdida de colapso de la luz venosa con el transductor)'],
    differential: ['Rotura de quiste de Baker en hueco poplíteo (pseudotromboflebitis)', 'Celulitis o erisipela', 'Desgarro muscular de gemelos ("pedrada")', 'Hematoma intramuscular'],
    firstLine: [
      { drug: 'Anticoagulantes Orales de Acción Directa (ACOD) - Primera línea indiscutible: Rivaroxabán o Apixabán', dose: 'Rivaroxabán 15 mg cada 12 horas VO con comidas por 21 días, luego 20 mg/día VO; o Apixabán 10 mg cada 12 horas VO por 7 días, luego 5 mg cada 12 horas VO', route: 'VO', freq: 'Reglado', notes: 'Eficacia igual a heparinas sin necesidad de controles de laboratorio de coagulación' },
      { drug: 'Heparina de Bajo Peso Molecular (Enoxaparina) en pacientes con cáncer o gestación', dose: '1 mg/kg cada 12 horas SC (o 1.5 mg/kg/día SC) ajustada por función renal', route: 'SC', freq: 'c/12-24h', notes: 'Anticoagulante de elección durante el embarazo y en trombosis asociada a neoplasia activa' }
    ],
    alternatives: [
      { drug: 'Warfarina sódica oral con puente de Enoxaparina', dose: 'Enoxaparina 1 mg/kg SC c/12h solapada con Warfarina 5 mg/día por al menos 5 días hasta lograr 2 INRs consecutivos entre 2.0 y 3.0', route: 'SC + VO', freq: 'Reglado', notes: 'En insuficiencia renal terminal con eGFR < 15 mL/min o síndrome antifosfolipídico' },
      { drug: 'Trombectomía venosa mecánica percutánea farmacomecánica', dose: 'Procedimiento endovascular de rescate', route: 'Endovascular', freq: 'Urgente', notes: 'Indicada en flegmasia cerúlea dolens o trombosis iliofemoral masiva con amenaza de extremidad' }
    ],
    nonPharm: ['Deambulación temprana una vez iniciada la anticoagulación eficaz (no se requiere reposo estricto en cama prolongado)', 'Medias elásticas de compresión graduada para prevenir el síndrome post-trombótico'],
    nursingCare: ['MEDICIÓN COMPARATIVA DEL DIÁMETRO DE PANTORRILLAS: Medir con cinta métrica 10 cm por debajo de la tuberosidad tibial anterior en ambas piernas y registrar la asimetría', 'PROHIBICIÓN ESTRICTA: JAMÁS masajear, frotar o realizar compresión vigorosa en la pantorrilla con sospecha de TVP (riesgo mortal de desprender el trombo hacia la arteria pulmonar)', 'Técnica de inyección subcutánea de Enoxaparina: aplicar en tejido celular subcutáneo del abdomen anterolateral, en ángulo de 90°, sin purgar la burbuja de aire de la jeringa prellenada y no frotar tras la inyección', 'Vigilancia inmediata de síntomas de TEP (disnea súbita, taquipnea)']
  },
  {
    number: 253,
    id: 'diag-253',
    title: 'Tromboflebitis superficial',
    cie10: 'I80.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Proceso inflamatorio y trombótico de una vena del sistema venoso superficial, con frecuencia en la vena safena magna o tras canalización de catéteres venosos periféricos en extremidades superiores.',
    symptoms: ['Cordón venoso palpable, indurado, eritematoso, caliente y sumamente doloroso a lo largo del trayecto de una vena superficial', 'Edema local circunscrito y rubor cutáneo', 'Febrícula local sin afectación sistémica importante'],
    redFlags: ['Extensión del trombo superficial hacia la unión safenofemoral o safenopoplítea a < 3-5 cm de la red venosa profunda (riesgo equivalente a TVP)'],
    criteria: 'Palpación de cordón indurado inflamatorio superficial + Eco-Doppler venoso confirmatorio (trombo intraluminal con pared engrosada y medición de distancia al cayado).',
    labTests: ['Dímero D (generalmente elevado)'],
    imaging: ['Eco-Doppler venoso de extremidad afectada (obligatorio para descartar TVP concomitante y medir distancia a la unión safenofemoral)'],
    differential: ['Celulitis superficial bacteriana', 'Linfangitis', 'Eritema nodoso', 'Tromboflebitis migrans (signo de Trousseau en cáncer de páncreas)'],
    firstLine: [
      { drug: 'Fondaparinux subcutáneo a dosis profilácticas intermedias (Estudio CALISTO)', dose: '2.5 mg SC cada 24 horas durante 45 días consecutivos', route: 'SC', freq: 'c/24h x 45 días', notes: 'Indicado de elección si el trombo superficial mide ≥ 5 cm de longitud o está a > 3 cm de la unión safenofemoral; reduce significativamente progresión a TVP/TEP' }
    ],
    alternatives: [
      { drug: 'Rivaroxabán oral o Enoxaparina a dosis profilácticas', dose: 'Rivaroxabán 10 mg/día VO o Enoxaparina 40 mg SC cada 24 horas por 30-45 días', route: 'VO / SC', freq: 'c/24h', notes: 'Alternativas eficaces y cómodas' },
      { drug: 'AINEs orales o tópicos (Ibuprofeno o Naproxeno)', dose: 'Ibuprofeno 400 mg cada 8 horas VO por 7 a 10 días', route: 'VO', freq: 'c/8h', notes: 'Solo en tromboflebitis menores muy localizadas (< 5 cm) y alejadas de venas profundas' }
    ],
    nonPharm: ['Aplicación de compresas húmedas tibias locales sobre el trayecto venoso', 'Medias elásticas de compresión y deambulación activa continuada'],
    nursingCare: ['Cuidado de vías venosas periféricas: rotación o retirada obligatoria ante los primeros signos de eritema o dolor en el sitio de punción', 'Control ecográfico de seguimiento para descartar progresión hacia el sistema profundo', 'Instruir al paciente en mantener actividad física normal y no guardar reposo en cama']
  },
  {
    number: 254,
    id: 'diag-254',
    title: 'Síndrome post-trombótico',
    cie10: 'I87.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Secuela crónica e invalidante que se desarrolla en el 20-50% de los pacientes tras una trombosis venosa profunda, producida por la combinación de hipertensión venosa persistente por obstrucción residual del trombo y reflujo valvular destructivo.',
    symptoms: ['Dolor crónico sordo, pesadez y calambres intolerables en la pierna afectada que empeoran con la bipedestación y al final del día', 'Edema crónico indurado que no desaparece completamente con el reposo nocturno', 'Cambios cutáneos tróficos severos: hiperpigmentación ocre por depósitos de hemosiderina, atrofia blanca, lipodermatoesclerosis ("pierna en botella de champán invertida")', 'Úlceras venosas de difícil cicatrización y refractarias en la cara interna del maléolo'],
    redFlags: ['Infección secundaria de úlceras con celulitis o fascitis necrotizante'],
    criteria: 'Puntuación en la Escala de Villalta ≥ 5 puntos evaluada tras al menos 3 a 6 meses de un episodio de TVP confirmada (≥ 15 puntos o presencia de úlcera define SPT severo).',
    labTests: ['Habitualmente normales'],
    imaging: ['Eco-Doppler venoso de control (evaluación de recanalización incompleta, engrosamiento de pared venosa y reflujo profundo)'],
    differential: ['Insuficiencia venosa primaria no trombótica', 'Linfedema secundario'],
    firstLine: [
      { drug: 'Terapia de compresión graduada de alta presión continua', dose: 'Medias elásticas de compresión Clase III (30 a 40 mmHg de presión maleolar) de uso diario diurno', route: 'Compresiva', freq: 'Permanente', notes: 'Pilar angular del tratamiento para contrarrestar la hipertensión venosa ambulatoria' }
    ],
    alternatives: [
      { drug: 'Terapia con bomba de compresión neumática intermitente (CNI)', dose: 'Sesiones domiciliarias diarias de 30 a 60 minutos', route: 'Mecánica', freq: 'Diario', notes: 'Muy eficaz en SPT severo refractario a medias elásticas' },
      { drug: 'Angioplastia y colocación de stent venoso en eje ilíaco o cava', dose: 'Desobstrucción endovascular venosa', route: 'Intervencionista', freq: 'Única', notes: 'En estenosis u oclusión venosa iliofemoral crónica no recanalizada' }
    ],
    nonPharm: ['Elevación de piernas siempre que se esté en reposo', 'Higiene e hidratación meticulosa de la piel con emolientes para evitar fisuras'],
    nursingCare: ['Evaluación periódica con la Escala clínica de Villalta', 'Educación para la salud sobre el cuidado extremo de la piel: evitar traumatismos mínimos que puedan originar úlceras tórpidas', 'Manejo especializado de curación avanzada de heridas en úlceras venosas complejas']
  },
  {
    number: 255,
    id: 'diag-255',
    title: 'Linfedema primario y secundario',
    cie10: 'I89.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Trastorno crónico y progresivo caracterizado por la acumulación patológica de líquido intersticial rico en macromoléculas proteicas secundario a una disfunción del drenaje linfático, ya sea primario (congénito o tardío por hipoplasia linfática) o secundario (iatrogénico tras linfadenectomía quirúrgica y radioterapia por cáncer de mama o pelvis, o filariasis).',
    symptoms: ['Edema unilateral progresivo e indoloro en brazo o pierna que inicia distalmente', 'Signo de Stemmer POSITIVO (imposibilidad patognomónica de pellizcar la piel de la base del segundo dedo del pie o mano)', 'Sensación de pesadez y rigidez de la extremidad con pérdida de relieves osteomusculares', 'Engrosamiento cutáneo con aspecto en "piel de naranja" (peau d\'orange) y fibrosis leñosa (elefantiasis)', 'Ausencia de fóvea blanda en estadios avanzados (edema duro no depresible)'],
    redFlags: ['Linfangitis y erisipela bacteriana recurrente por éxtasis linfático e inmunodeficiencia local', 'Angiosarcoma de Stewart-Treves en linfedemas crónicos'],
    criteria: 'Aumento asimétrico de volumen de una extremidad con Signo de Stemmer positivo tras descartar patología venosa o sistémica.',
    labTests: ['Habitualmente no requeridos'],
    imaging: ['Linfogammagrafía con radioisótopos (estudio gold standard para evaluar el transporte linfático)', 'Eco-Doppler venoso para descartar trombosis venosa profunda concomitante'],
    differential: ['Insuficiencia venosa crónica con edema', 'Lipedema (afectación bilateral simétrica que respeta pies y con Stemmer negativo)', 'Mixema pretibial'],
    firstLine: [
      { drug: 'Terapia Descongestiva Compleja (TDC) en dos fases: Fase intensiva y Fase de mantenimiento (Pilar de Oro)', dose: '1. Drenaje Linfático Manual (DLM) especializado; 2. Vendajes multicapa de baja elasticidad; 3. Ejercicios miolinfoquinéticos; 4. Cuidado de la piel', route: 'Fisioterapia física', freq: 'Sesiones regladas', notes: 'Reduce significativamente el volumen de la extremidad y previene complicaciones' }
    ],
    alternatives: [
      { drug: 'Prendas de compresión linfática de tejido plano a medida', dose: 'Prendas elásticas de contención clase II-III para uso diurno', route: 'Compresiva', freq: 'Diario permanente', notes: 'Mantiene la reducción alcanzada en la fase intensiva' },
      { drug: 'Supermicrocirugía de derivación linfático-venosa o Linfonodoplastia vascularizada', dose: 'Técnica quirúrgica microquirúrgica', route: 'Quirúrgica', freq: 'Electivo', notes: 'En centros especializados en estadios iniciales o moderados' }
    ],
    nonPharm: ['LOS DIURÉTICOS ESTÁN CONTRAINDICADOS O INEFICACES (deshidratan el compartimento intravascular sin eliminar las proteínas del espacio intersticial y empeoran la fibrosis)'],
    nursingCare: ['EVALUACIÓN DEL SIGNO DE STEMMER: Pellizcar el pliegue cutáneo dorsal en la base del segundo dedo del pie; la imposibilidad de elevar la piel confirma linfedema', 'PROTECCIÓN ABSOLUTA DE LA EXTREMIDAD AFECTADA: NUNCA tomar presión arterial, canalizar vías venosas periféricas, extraer sangre ni aplicar vacunas en el brazo con linfedema (por linfadenectomía axilar)', 'Desinfección inmediata y meticulosa ante cualquier rasguño, corte o picadura de insecto para prevenir celulitis/linfangitis fulminante', 'Enseñar al paciente la higiene estricta y el secado interdigital exhaustivo']
  },
  {
    number: 256,
    id: 'diag-256',
    title: 'Aterosclerosis generalizada',
    cie10: 'I70.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Enfermedad sistémica, inflamatoria y crónica caracterizada por el depósito progresivo de lípidos, colesterol, macrófagos espumosos y matriz extracelular en la íntima de las arterias elásticas y musculares de mediano y gran calibre, conduciendo a formación de placas ateromatosas, rigidez arterial y estenosis.',
    symptoms: ['Frecuentemente silente durante varias décadas', 'Manifestaciones multisistémicas polivasculares concurrentes: angina de pecho coronaria, accidentes isquémicos transitorios carotídeos, claudicación intermitente en piernas o disfunción eréctil vasculogénica', 'Soplos arteriales audibles en carótidas, aorta abdominal o arterias femorales'],
    redFlags: ['Eventos vasculares mayores trombóticos ateroscleróticos recurrentes (infarto agudo de miocardio, ACV)', 'Rotura de placa con embolismo de cristales de colesterol'],
    criteria: 'Evidencia angiográfica, ecográfica o tomográfica de placas ateromatosas estenosantes o calcificadas en ≥ 2 lechos vasculares arteriales independientes.',
    labTests: ['Perfil lipídico exhaustivo (c-LDL, c-HDL, triglicéridos, apolipoproteína B)', 'Proteína C reactiva ultrasensible (marcador de inflamación vascular residual)', 'Glucemia y función renal con microalbuminuria'],
    imaging: ['Eco-Doppler carotídeo y de miembros inferiores', 'Score de calcio coronario (CAC por tomografía)', 'Índice Tobillo-Brazo (ITB)'],
    differential: ['Arteritis de Takayasu', 'Displasia fibromuscular', 'Enfermedad de Buerger (tromboangeítis obliterante)'],
    firstLine: [
      { drug: 'Estatinas de muy alta potencia + Ezetimiba para metas lipídicas agresivas', dose: 'Atorvastatina 80 mg/día VO o Rosuvastatina 20 a 40 mg/día VO + Ezetimiba 10 mg/día VO', route: 'VO nocturna', freq: 'c/24h', notes: 'Meta en muy alto riesgo: c-LDL < 55 mg/dL y reducción ≥ 50% del valor basal' },
      { drug: 'Antiagregación plaquetaria preventiva: Aspirina a dosis bajas', dose: '100 mg/día VO con el almuerzo', route: 'VO', freq: 'c/24h', notes: 'Reduce infartos de miocardio y accidentes cerebrovasculares' }
    ],
    alternatives: [
      { drug: 'Inhibidores de PCSK9 (Evolocumab o Alirocumab)', dose: 'Evolocumab 140 mg SC cada 2 semanas o 420 mg mensual', route: 'SC', freq: 'c/14 días', notes: 'Si no se alcanza la meta de c-LDL a pesar de estatinas a dosis tope + ezetimiba' }
    ],
    nonPharm: ['Abandono estricto del tabaquismo (medida más costo-efectiva)', 'Dieta mediterránea estricta y ejercicio físico adaptado'],
    nursingCare: ['Estratificación del riesgo cardiovascular del paciente en cada visita', 'Educación sanitaria integral sobre modificación intensiva del estilo de vida', 'Monitoreo de la presión arterial y detección de soplos carotídeos y femorales']
  },
  {
    number: 257,
    id: 'diag-257',
    title: 'Enfermedad arterial periférica',
    cie10: 'I73.9',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Obstrucción aterosclerótica crónica de las arterias que irrigan las extremidades inferiores, que provoca una reducción progresiva del flujo sanguíneo tisular y genera isquemia durante el esfuerzo (claudicación) o en reposo.',
    symptoms: ['Claudicación intermitente típica ("enfermedad del mirador de escaparates"): dolor, calambre o pesadez muscular intensa en la pantorrilla o glúteo que aparece al caminar una distancia fija y se alivia en reposo de pie en < 5-10 minutos', 'Piel pálida, brillante, fría y con pérdida progresiva del vello en la pierna', 'Uñas engrosadas y distróficas', 'Disminución o ausencia de pulsos periféricos (pedio, tibial posterior, poplíteo o femoral)'],
    redFlags: ['Isquemia Crónica que Amenaza la Extremidad (CLTI): Dolor isquémico intolerable en reposo (especialmente nocturno al elevar la pierna) o presencia de úlceras isquémicas dolorosas necróticas o gangrena (urgencia de revascularización)'],
    criteria: 'Índice Tobillo-Brazo (ITB) patológico: ITB ≤ 0.90 confirma enfermedad arterial periférica (ITB < 0.40 indica isquemia severa).',
    labTests: ['Perfil lipídico, glucemia, HbA1c y función renal'],
    imaging: ['Medición con Eco-Doppler de bolsillo del Índice Tobillo-Brazo (presión sistólica más alta en tobillo / presión sistólica braquial más alta)', 'Eco-Doppler arterial de miembros inferiores', 'Angio-TAC o Arteriografía periférica con sustracción digital prequirúrgica'],
    differential: ['Claudicación neurógena por estenosis del canal lumbar (el dolor alivia al inclinarse hacia adelante o sentarse)', 'Artrosis de cadera o rodilla', 'Trombosis venosa profunda'],
    firstLine: [
      { drug: 'Antiagregación plaquetaria: Clopidogrel o Aspirina', dose: 'Clopidogrel 75 mg/día VO (demostró ligera superioridad sobre aspirina en estudio CAPRIE) o Aspirina 100 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Reduce eventos cardiovasculares mayores y muerte vascular' },
      { drug: 'Atorvastatina de alta intensidad', dose: '40 a 80 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Aumenta la distancia de marcha libre de dolor y estabiliza placas' },
      { drug: 'Cilostazol (inhibidor de fosfodiesterasa 3)', dose: '100 mg cada 12 horas VO 30 min antes del desayuno y cena', route: 'VO en ayunas', freq: 'c/12h', notes: 'Vasodilatador e inhibidor plaquetario que duplica la distancia de caminata; contraindicado en insuficiencia cardíaca' }
    ],
    alternatives: [
      { drug: 'Estrategia de doble vía (COMPASS): Rivaroxabán vascular + Aspirina', dose: 'Rivaroxabán 2.5 mg cada 12 horas VO + Aspirina 100 mg/día VO', route: 'VO', freq: 'c/12h', notes: 'Reduce significativamente amputaciones mayores y eventos cardiovasculares' },
      { drug: 'Revascularización percutánea endovascular (Angioplastia con balón liberador de fármacos o stent) o Bypass quirúrgico (femoro-poplíteo)', dose: 'Procedimiento intervencionista o quirúrgico', route: 'Vascular', freq: 'Única', notes: 'De elección inmediata en isquemia crítica o claudicación severa refractaria' }
    ],
    nonPharm: ['PROGRAMA DE EJERCICIO SUPERVISADO DE CAMINATA: Caminar en cinta o llano hasta el umbral del dolor, descansar hasta el alivio y reanudar, por 30-45 min 3 veces por semana (estimula la angiogénesis colateral)', 'Cese total del tabaco'],
    nursingCare: ['MEDICIÓN ESTANDARIZADA DEL ÍNDICE TOBILLO-BRAZO (ITB): Paciente en reposo supino 10 min, usar sonda doppler de 8 MHz y esfigmomanómetro en ambos brazos y ambos tobillos (tibial posterior y pedio)', 'Palpación meticulosa y registro diario de todos los pulsos distales de miembros inferiores', 'Cuidado exhaustivo de los pies: NUNCA cortar callos con navajas ni aplicar calor local directo (bolsas de agua caliente pueden causar quemaduras graves por hiposensibilidad)', 'Prohibición estricta de medias compresivas apretadas en pacientes con ITB < 0.6']
  },
  {
    number: 258,
    id: 'diag-258',
    title: 'Crisis hipertensiva de urgencia',
    cie10: 'I16.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Elevación aguda y severa de la presión arterial (PAS ≥ 180 mmHg y/o PAD ≥ 120 mmHg) en un paciente asintomático o con síntomas inespecíficos leves, SIN evidencia de daño agudo progresivo en órganos diana.',
    symptoms: ['Cefalea occipital leve o moderada', 'Mareos o sensación de inestabilidad', 'Epistaxis anterior leve o rubor facial', 'Ansiedad psicomotriz reactiva'],
    redFlags: ['Transición a Emergencia Hipertensiva si aparecen dolor precordial, déficit neurológico focal o disnea aguda'],
    criteria: 'PAS ≥ 180 mmHg y/o PAD ≥ 120 mmHg confirmada tras 15-30 minutos de reposo en ambiente tranquilo + AUSENCIA demostrada de daño agudo en cerebro, corazón, riñón o retina.',
    labTests: ['Creatinina sérica y examen de orina (descarte de hematuria o proteinuria aguda)'],
    imaging: ['Fondo de ojo (descarte de hemorragias en llama, exudados o edema de papila)', 'EKG de 12 derivaciones para descartar isquemia'],
    differential: ['Emergencia hipertensiva', 'Hipertensión reactiva por dolor o ataque de pánico'],
    firstLine: [
      { drug: 'Fármacos antihipertensivos por VÍA ORAL de acción intermedia: Captopril o Amlodipino o Labetalol', dose: 'Captopril 25 mg VO (masticado o tragado, NO sublingual) o Amlodipino 5 a 10 mg VO o Labetalol 100 a 200 mg VO', route: 'VO', freq: 'Dosis única inicial', notes: 'OBJETIVO: Descenso gradual y seguro de la PA en 24 a 48 horas (no intentar normalizarla de golpe)' }
    ],
    alternatives: [
      { drug: 'Clonidina oral', dose: '0.1 a 0.2 mg VO', route: 'VO', freq: 'Dosis rescate', notes: 'Agonista alfa-2 central' }
    ],
    nonPharm: ['Reposo en cama en una habitación tranquila, sin ruidos y con luz tenue durante 30 a 60 minutos (hasta el 30% de los pacientes reduce espontáneamente la PA sin medicamentos)'],
    nursingCare: ['ADVERTENCIA DE SEGURIDAD CRÍTICA: NUNCA administrar Nifedipino sublingual (cápsula mordida): produce vasodilatación brusca incontrolable, taquicardia refleja y precipita infartos miocárdicos y ACVs isquémicos por hipoperfusión crítica', 'Monitoreo de presión arterial cada 30 minutos', 'Reasegurar y calmar al paciente explicándole que no corre peligro inminente si no hay síntomas graves', 'Ajuste y reinicio de la medicación antihipertensiva crónica del paciente y citación ambulatoria en 48-72h']
  },
  {
    number: 259,
    id: 'diag-259',
    title: 'Crisis hipertensiva emergencia',
    cie10: 'I16.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Elevación severa de la presión arterial (habitualmente PAS > 180 mmHg y/o PAD > 120 mmHg) asociada a DAÑO AGUDO, PROGRESIVO Y POTENCIALMENTE MORTAL en órganos diana (cerebro, corazón, riñón, retina o aorta), requiriendo reducción tensional inmediata con fármacos parenterales en UCI.',
    symptoms: ['Neurológico: Encefalopatía hipertensiva (cefalea severa, náuseas, vómitos, confusión, convulsiones, letargia y coma), ACV isquémico o hemorrágico', 'Cardíaco: Dolor torácico isquémico agudo (IAM), disnea severa con ortopnea y crepitantes masivos (Edema Agudo de Pulmón hipertensivo)', 'Aórtico: Dolor desgarrador interescapular (Disección aórtica)', 'Renal: Oliguria e insuficiencia renal aguda rápidamente progresiva', 'Ocular: Retinopatía hipertensiva maligna grado IV con edema de papila bilateral'],
    redFlags: ['Encefalopatía hipertensiva, edema agudo de pulmón, disección aórtica aguda y eclampsia'],
    criteria: 'Hipertensión severa + presencia documentada clínica o paraclínica de daño agudo en órgano blanco.',
    labTests: ['Creatinina sérica y urea (IRA)', 'Troponinas cardíacas de alta sensibilidad y NT-proBNP', 'Frotis de sangre periférica (esquilocitos en microangiopatía trombótica)', 'Examen de orina (sedimento activo con hematuria y proteinuria)', 'Gases arteriales'],
    imaging: ['Fondo de ojo dilatado INMEDIATO (búsqueda de edema de papila)', 'Radiografía de tórax (congestión alveolar en "alas de mariposa")', 'EKG de 12 derivaciones continuo', 'TAC cerebral o Angio-TAC toracoabdominal según órgano sospechado'],
    differential: ['Urgencia hipertensiva', 'ACV isquémico agudo con hipertensión reactiva permisiva'],
    firstLine: [
      { drug: 'Fármacos antihipertensivos ENDOVENOSOS de acción ultrarrápida y titulables en UCI:', dose: 'Nitroprusiato de Sodio 0.3 a 10 mcg/kg/min EV (vasodilatador mixto potente) o Labetalol 20 mg EV bolo luego 2-8 mg/min en infusión continua (de elección en encefalopatía y disección)', route: 'EV en infusión continua', freq: 'Titulado continuo', notes: 'REGLA GENERAL: Reducir la Presión Arterial Media (PAM) no más de un 20-25% en la primera hora, para evitar isquemia cerebral o coronaria (salvo en disección aórtica donde se reduce de golpe)' },
      { drug: 'Nitroglicerina endovenosa en infusión', dose: '5 a 100 mcg/min EV', route: 'EV en infusión', freq: 'Titulado', notes: 'Fármaco de primera línea de elección en Edema Agudo de Pulmón cardiogénico y Síndrome Coronario Agudo' }
    ],
    alternatives: [
      { drug: 'Nicardipino EV', dose: '5 a 15 mg/h en infusión', route: 'EV', freq: 'Continuo', notes: 'De elección en emergencias neurológicas cerebrovasculares' }
    ],
    nonPharm: ['Ingreso inmediato y obligatorio en Unidad de Cuidados Intensivos o Shock Trauma', 'Monitorización hemodinámica invasiva continua mediante línea arterial periférica'],
    nursingCare: ['MONITOREO CONTINUO DE PRESIÓN ARTERIAL: Toma de presión arterial cada 5 minutos durante la titulación de fármacos endovenosos', 'Cálculo de la Presión Arterial Media (PAM = [PAS + 2(PAD)] / 3) y vigilancia para que el descenso inicial no sobrepase el 20-25%', 'Protección de la luz de los frascos y equipos de infusión de Nitroprusiato (fotosensible) y vigilancia de signos de toxicidad por tiocianato en infusiones prolongadas', 'Sonda vesical con urómetro para control horario estricto de la diuresis']
  },
  {
    number: 260,
    id: 'diag-260',
    title: 'Hipotensión ortostática',
    cie10: 'I95.1',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Fallo en la regulación autonómica cardiovascular caracterizado por una disminución sostenida de la presión arterial sistólica de al menos 20 mmHg y/o de la diastólica de al menos 10 mmHg dentro de los 3 minutos posteriores a ponerse de pie o al elevar la cabeza en camilla basculante.',
    symptoms: ['Sensación de mareo, aturdimiento, visión borrosa "en túnel" o visión en negro al ponerse de pie de la cama o silla', 'Debilidad en piernas y sensación inminente de desmayo (presíncope)', 'Síncope ortostático franco con caídas traumáticas', 'Dolor en la nuca y hombros en "percha de abrigo" por hipoperfusión muscular'],
    redFlags: ['Traumatismos craneoencefálicos y fracturas óseas por síncope y caídas en ancianos'],
    criteria: 'Descenso documentado de la PAS ≥ 20 mmHg y/o PAD ≥ 10 mmHg tras 1 a 3 minutos en bipedestación activa comparada con la posición en decúbito supino.',
    labTests: ['Hemograma (descarte de anemia aguda o crónica)', 'Electrolitos séricos y función renal (deshidratación)', 'Cortisol basal (descarte de insuficiencia suprarrenal)'],
    imaging: ['Prueba de mesa basculante (Tilt Table Test)', 'Holter de presión arterial (MAPA)'],
    differential: ['Síndrome de taquicardia ortostática postural (POTS: taquicardia sin hipotensión)', 'Síncope vasovagal neuromediado', 'Efecto farmacológico'],
    firstLine: [
      { drug: 'Revisión y retirada sistemática de fármacos hipotensores o causales (diuréticos excesivos, vasodilatadores, antidepresivos tricíclicos)', dose: 'Ajuste o suspensión farmacológica', route: 'Variable', freq: 'Reglado', notes: 'Causa iatrogénica muy común en adultos mayores' },
      { drug: 'Medidas físicas y maniobras de contrapresión (Pilar angular)', dose: 'Cruzar las piernas y apretar muslos al ponerse de pie, flexión dorsal de pies antes de levantarse, elevación de la cabecera de la cama a 15-20 cm', route: 'Físico', freq: 'Continuo', notes: 'Aumenta el retorno venoso al corazón de forma inmediata' }
    ],
    alternatives: [
      { drug: 'Fludrocortisona (mineralocorticoide sintético)', dose: '0.1 a 0.2 mg/día VO en la mañana', route: 'VO matutino', freq: 'c/24h', notes: 'Expande el volumen plasmático promoviendo la retención renal de sodio' },
      { drug: 'Midodrina (agonista alfa-1 periférico)', dose: '2.5 a 10 mg cada 8 horas VO durante el día (no administrar tras las 18:00 h para evitar hipertensión supina)', route: 'VO diurno', freq: 'c/8h', notes: 'Vasoconstricción venosa y arterial' }
    ],
    nonPharm: ['Ingesta hídrica abundante (2.0 a 2.5 L/día) y aporte liberal de sal en la dieta si no hay contraindicación', 'Uso de fajas abdominales elásticas y medias de compresión hasta la cintura'],
    nursingCare: ['TÉCNICA DE ENFERMERÍA PARA TEST DE ORTOSTATISMO: 1. Paciente en decúbito supino durante al menos 5 minutos: medir PA y FC; 2. Ponerse de pie activamente: medir PA y FC al minuto 1 y al minuto 3; registrar valores y presencia de síntomas', 'Instruir al paciente en levantarse de la cama SIEMPRE en dos tiempos: sentarse al borde de la cama con las piernas colgando durante 1-2 minutos antes de ponerse de pie', 'Evitar duchas con agua excesivamente caliente (inducen vasodilatación periférica masiva)']
  },
  {
    number: 261,
    id: 'diag-261',
    title: 'Fenómeno de Raynaud',
    cie10: 'I73.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Trastorno vasoespástico paroxístico caracterizado por episodios reversibles de vasoespasmo exagerado de las arterias digitales de los dedos de las manos y pies en respuesta a la exposición al frío o estrés emocional. Puede ser primario (Enfermedad de Raynaud idiopática benigna) o secundario (asociado a esclerosis sistémica, LES u otras conectivopatías).',
    symptoms: ['Clásicos cambios de coloración trifásicos en los dedos:', '1. Fase de Palidez isquémica ("dedo blanco de cera" por vasoespasmo arterial súbito)', '2. Fase de Cianosis ("dedo azul" por estasis y desoxigenación capilar)', '3. Fase de Rubor reactivo ("dedo rojo" por hiperemia reactiva al ceder el espasmo con dolor pulsátil y parestesias)', 'Hipoestesia y sensación de congelamiento en los dedos durante el ataque'],
    redFlags: ['Aparición de úlceras isquémicas digitales dolorosas y necrosis/gangrena de pulpejos (indica invariablemente Raynaud secundario grave)'],
    criteria: 'Episodios paroxísticos recurrentes de palidez y cianosis digital inducidos por frío.',
    labTests: ['Anticuerpos antinucleares (ANA), Anti-centrómero y Anti-Scl-70 (positivos en Raynaud secundario a esclerodermia)', 'VSG y hemograma'],
    imaging: ['Capilaroscopía periungueal (patrón normal en primario; asas gigantes, hemorragias y áreas avasculares en secundario)', 'Eco-Doppler arterial de extremidades superiores'],
    differential: ['Acrocianosis (coloración azulada permanente no episódica)', 'Livedo reticularis', 'Sabañones (eritema pernio)'],
    firstLine: [
      { drug: 'Calcioantagonistas dihidropiridínicos de acción prolongada: Nifedipino o Amlodipino', dose: 'Nifedipino retard 30 a 60 mg/día VO o Amlodipino 5 a 10 mg/día VO', route: 'VO', freq: 'c/24h', notes: 'Fármacos de primera línea indiscutibles: relajan el músculo liso vascular arterial digital' }
    ],
    alternatives: [
      { drug: 'Inhibidores de la fosfodiesterasa 5 (Sildenafil) o Análogos de prostaciclina (Iloprost EV)', dose: 'Sildenafil 20 mg cada 8 horas VO o Iloprost EV en infusión', route: 'VO / EV', freq: 'Según gravedad', notes: 'De elección en Raynaud secundario severo con úlceras digitales activas' }
    ],
    nonPharm: ['PROTECCIÓN TÉRMICA ESTRICTA CONTRA EL FRÍO: Uso obligatorio de guantes térmicos, calcetines de lana, orejeras y evitar el contacto con agua helada o congeladores', 'CESE ABSOLUTO DEL TABAQUISMO y evitar fármacos vasoconstrictores (ergotamina, betabloqueantes)']
  },
  {
    number: 262,
    id: 'diag-262',
    title: 'Vasculitis sistémica',
    cie10: 'I77.8',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Grupo heterogéneo de enfermedades inflamatorias autoinmunes caracterizadas por la inflamación destructiva y necrosis de las paredes de los vasos sanguíneos, lo que ocasiona estenosis luminal, oclusión isquémica o formación de aneurismas en múltiples órganos.',
    symptoms: ['Síntomas constitucionales generales: fiebre prolongada, pérdida de peso involuntaria, astenia, mialgias y artralgias', 'Manifestaciones cutáneas floridas: púrpura palpable no trombocitopénica (signo cardinal), livedo reticularis, nódulos subcutáneos y úlceras isquémicas', 'Mononeuritis múltiple (asimetría en la afectación de nervios periféricos con pie o mano caída)', 'Compromiso pulmonar con hemoptisis e infiltrados, o compromiso renal con glomerulonefritis rápidamente progresiva (síndrome reno-pulmonar)'],
    redFlags: ['Hemorragia alveolar difusa con insuficiencia respiratoria catastrófica', 'Glomerulonefritis crescéntica rápidamente progresiva'],
    criteria: 'Clasificación de Chapel Hill según el calibre del vaso afectado (gran vaso: Takayasu, células gigantes; mediano vaso: PAN, Kawasaki; pequeño vaso: asociadas a ANCA como GPA, MPA, EGPA) + Biopsia confirmatoria de pared vascular.',
    labTests: ['Anticuerpos anticitoplasma de neutrófilos (ANCA: PR3-ANCA / c-ANCA y MPO-ANCA / p-ANCA)', 'Creatinina, examen de orina (sedimento telescopado con cilindros hemáticos)', 'Reactantes de fase aguda muy elevados (PCR, VSG)', 'Anticuerpos antinucleares y complemento'],
    imaging: ['Angio-TAC o Angio-Resonancia de aorta y sus ramas', 'Radiografía y tomografía de tórax de alta resolución'],
    differential: ['Endocarditis infecciosa', 'Síndrome antifosfolipídico', 'Embolismo por colesterol'],
    firstLine: [
      { drug: 'Terapia de inducción a la remisión en vasculitis severas asociadas a ANCA: Pulsos de Metilprednisolona + Rituximab o Ciclofosfamida', dose: 'Metilprednisolona 500 a 1000 mg/día EV por 3 días consecutivos, seguido de Prednisona 1 mg/kg/día VO + Rituximab 375 mg/m2 EV semanal por 4 semanas (o Ciclofosfamida EV)', route: 'EV / VO', freq: 'Protocolo de inducción', notes: 'Inmunosupresión agresiva inmediata para salvar la función orgánica y la vida' }
    ],
    alternatives: [
      { drug: 'Plasmaféresis terapéutica (Recambio plasmático)', dose: 'Sesiones seriadas', route: 'Extracorpórea', freq: 'Según protocolo', notes: 'En presencia de hemorragia alveolar grave o insuficiencia renal rápidamente progresiva con creatinina > 5.7 mg/dL' }
    ],
    nonPharm: ['Profilaxis obligatoria contra Pneumocystis jirovecii con Cotrimoxazol durante la inmunosupresión'],
    nursingCare: ['Vigilancia de signos de hemorragia pulmonar (tos con esputo hemoptoico, taquipnea y caída súbita de hemoglobina)', 'Control riguroso de la diuresis horaria y de la función renal', 'Cuidados de asepsia extrema durante la administración de rituximab o ciclofosfamida (riesgo de neutropenia e infecciones oportunistas)', 'Inspección diaria de la piel buscando progresión de púrpura o lesiones necróticas']
  },
  {
    number: 263,
    id: 'diag-263',
    title: 'Púrpura de Henoch-Schönlein',
    cie10: 'D69.0',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Vasculitis por inmunoglobulina A (IgA): vasculitis leucocitoclástica de pequeño vaso caracterizada por el depósito de inmunocomplejos de IgA1 en piel, articulaciones, tracto gastrointestinal y glomérulos renales, siendo la vasculitis más frecuente en la edad pediátrica.',
    symptoms: ['Tétrada clásica de presentación:', '1. Púrpura palpable no trombocitopénica: máculas eritematosas que evolucionan a petequias y pápulas palpables violáceas simétricas distribuidas en extremidades inferiores (piernas) y glúteos ("en pantalón")', '2. Artralgias o artritis no erosiva de rodillas y tobillos con tumefacción periarticular', '3. Dolor abdominal cólico tipo retortijón difuso, náuseas, vómitos o melena por isquemia submucosa', '4. Afectación renal (hematuria microscópica o macroscópica y proteinuria)'],
    redFlags: ['Invaginación intestinal ileoileal o ileocecal aguda', 'Perforación intestinal', 'Glomerulonefritis rápidamente progresiva con síndrome nefrótico'],
    criteria: 'Criterios EULAR/PRINTO/PRES: Púrpura palpable de predominio en miembros inferiores (criterio obligatorio) + al menos 1 de los siguientes: 1. Dolor abdominal difuso cólico; 2. Histopatología con predominio de depósito de IgA; 3. Artritis o artralgias; 4. Afectación renal (hematuria o proteinuria).',
    labTests: ['Plaquetas NORMALES o elevadas en hemograma (crucial para diferenciar de PTI o leucemia)', 'Examen completo de orina periódico (búsqueda de microhematuria o proteinuria)', 'IgA sérica elevada en el 50% de casos', 'Urea y creatinina'],
    imaging: ['Ecografía abdominal si hay dolor abdominal severo (detección precoz de invaginación intestinal con imagen en "diana" o "pseudoriñón")'],
    differential: ['Púrpura Trombocitopénica Inmunológica (en PTI las plaquetas están bajas)', 'Meningococcemia', 'Síndrome hemolítico urémico'],
    firstLine: [
      { drug: 'Tratamiento de soporte sintomático (enfermedad autolimitada en la mayoría): Reposo + Paracetamol o AINEs suaves', dose: 'Paracetamol 10 a 15 mg/kg cada 6-8 horas VO para artralgias (evitar AINEs si hay compromiso gastrointestinal o renal activo)', route: 'VO', freq: 'c/6-8h SOS', notes: 'Curso benigno con resolución espontánea en 4 a 6 semanas' }
    ],
    alternatives: [
      { drug: 'Corticoides sistémicos: Prednisona oral', dose: '1 a 2 mg/kg/día VO por 1 a 2 semanas con descenso gradual', route: 'VO', freq: 'c/24h', notes: 'Indicada en dolor abdominal severo invalidante, hemorragia digestiva o afectación renal progresiva' }
    ],
    nonPharm: ['Reposo relativo con miembros inferiores elevados durante los brotes de púrpura'],
    nursingCare: ['MONITOREO DEL EXAMEN DE ORINA: Realizar tira reactiva de orina semanal durante el primer mes y mensual hasta los 6 meses de seguimiento (para detectar nefritis tardía por IgA)', 'Vigilancia de dolor abdominal intenso o vómitos biliosos (sospecha de invaginación intestinal)', 'Comprobar el recuento plaquetario para reconfirmar que no haya trombocitopenia', 'Tranquilizar a los padres sobre el carácter habitualmente autolimitado del proceso']
  },
  {
    number: 264,
    id: 'diag-264',
    title: 'Enfermedad de Kawasaki',
    cie10: 'M30.3',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Vasculitis sistémica aguda y autolimitada de vasos de mediano calibre, con especial predilección por las arterias coronarias, que afecta primordialmente a lactantes y niños menores de 5 años, constituyendo la principal causa de cardiopatía adquirida en la infancia.',
    symptoms: ['Fiebre alta persistente (≥ 39-40 °C) de ≥ 5 días de duración que no cede con antipiréticos convencionales (CRITERIO OBLIGATORIO) + al menos 4 de los siguientes 5 criterios clínicos:', '1. Inyección conjuntival bulbar bilateral NO exudativa (ojos rojos sin pus)', '2. Cambios en labios y cavidad oral: labios eritematosos fisurados y sangrantes, y lengua aframbuesada (roja y depapilada)', '3. Exantema polimorfo eritematoso no vesicular en tronco y área perineal', '4. Cambios en extremidades: eritema palmar y plantar con edema indurado doloroso de manos y pies en fase aguda, seguido de descamación periungueal "en dedo de guante" en fase subaguda', '5. Linfadenopatía cervical aguda unilateral no supurativa (≥ 1.5 cm)'],
    redFlags: ['ANEURISMAS DE LAS ARTERIAS CORONARIAS (hasta en 25% de niños no tratados): riesgo de trombosis coronaria aguda, infarto de miocardio y muerte súbita'],
    criteria: 'Fiebre ≥ 5 días + ≥ 4 de los 5 criterios clínicos principales (o Kawasaki incompleto con ecocardiograma con dilatación coronaria: Z-score ≥ 2.5).',
    labTests: ['Reactantes de fase aguda muy elevados: PCR ≥ 3.0 mg/dL y VSG ≥ 40 mm/h', 'Trombocitosis reactiva marcada (plaquetas > 500,000-1,000,000/mm3 a partir de la 2° semana)', 'Piuria estéril en examen de orina y transaminasas elevadas'],
    imaging: ['ECOCARDIOGRAMA TRANSTORÁCICO DOPPLER URGENTE (evaluación del Z-score de arteria descendente anterior y coronaria derecha al diagnóstico, a las 2 semanas y a las 6-8 semanas)'],
    differential: ['Escarlatina estreptocócica', 'Sarampión', 'Síndrome inflamatorio multisistémico pediátrico (MIS-C por COVID-19)', 'Síndrome de shock tóxico'],
    firstLine: [
      { drug: 'Inmunoglobulina Humana Endovenosa (IGEV) en infusión única (Pilar angular salvador de coronarias)', dose: '2 g/kg de peso EV administrados en infusión continua lenta durante 10 a 12 horas, idealmente dentro de los primeros 10 días de iniciada la fiebre', route: 'EV en infusión', freq: 'Dosis única', notes: 'Reduce el riesgo de aneurismas coronarios de un 25% a menos del 3-5%' },
      { drug: 'Aspirina (Ácido Acetilsalicílico) a dosis antiinflamatoria en fase aguda', dose: '30 a 50 mg/kg/día (u 80-100 mg/kg/día según protocolo) VO dividido en 4 tomas durante la fase febril aguda', route: 'VO', freq: 'c/6h', notes: 'Efecto antiinflamatorio sinérgico con la IGEV' },
      { drug: 'Aspirina a dosis antiagregante en fase subaguda', dose: '3 a 5 mg/kg/día VO en dosis única matutina iniciada tras 48h afebril, mantenida por 6 a 8 semanas', route: 'VO', freq: 'c/24h', notes: 'Previene la trombosis coronaria durante el periodo de trombocitosis máxima' }
    ],
    alternatives: [
      { drug: 'Segunda dosis de IGEV (2 g/kg) o Corticoides (Pulsos de Metilprednisolona 30 mg/kg)', dose: 'Enfermedad de Kawasaki resistente a la primera dosis de IGEV (fiebre persistente tras 36h)', route: 'EV', freq: 'Rescate', notes: 'Si la fiebre no remite 36 horas tras la primera IGEV' }
    ],
    nonPharm: ['Monitoreo cardíaco estrecho'],
    nursingCare: ['PROTOCOLO DE INFUSIÓN DE IGEV: Monitoreo estricto de constantes vitales cada 15-30 minutos durante la infusión; vigilar signos de anafilaxia o sobrecarga hídrica', 'Instruir a los padres que tras la administración de IGEV deben POSPONERSE LAS VACUNAS CON VIRUS VIVOS ATENUADOS (sarampión, varicela) durante 11 meses por bloqueo de anticuerpos', 'Higiene bucal suave e hidratación labial continua con vaselina', 'Seguimiento riguroso de citas ecocardiográficas ambulatorias']
  },
  {
    number: 265,
    id: 'diag-265',
    title: 'Paro cardiorrespiratorio y shock cardiogénico',
    cie10: 'R09.2',
    category: 'Cardiovasculares',
    chapter: 'IV. Enfermedades Cardiovasculares y Circulatorias (211-265)',
    definition: 'Estados de colapso hemodinámico crítico extremo: el shock cardiogénico es un estado de hipoperfusión tisular sistémica severa secundaria a un fallo primario de la bomba cardíaca (FEVI gravemente deprimida o complicaciones mecánicas del IAM); el paro cardiorrespiratorio (PCR) es la interrupción súbita e inesperada de la circulación y respiración espontáneas.',
    symptoms: ['En Shock Cardiogénico: Hipotensión arterial severa y persistente (PAS < 90 mmHg o TAM < 65 mmHg) con signos francos de hipoperfusión tisular: frialdad periférica marmórea, sudoración fría, alteración del estado mental (letargia o confusión), oliguria marcada (< 0.5 mL/kg/h) y congestión pulmonar masiva', 'En Paro Cardiorrespiratorio: Inconsciencia inmediata, apnea o respiración agónica (gasping) y ausencia de pulso en grandes arterias (carotídeo o femoral)'],
    redFlags: ['Muerte biológica irreversible por daño anóxico cerebral en minutos sin soporte vital inmediato'],
    criteria: 'En shock: PAS < 90 mmHg por > 30 min + índice cardíaco < 2.2 L/min/m2 + presión de enclavamiento pulmonar (PCP) > 15 mmHg + lactato sérico > 2 mmol/L. En PCR: ausencia de respuesta, pulso y respiración.',
    labTests: ['Gases arteriales seriados y Lactato sérico arterial (marcador de hipoperfusión)', 'Troponina ultrasensible, electrolitos séricos, hemograma y función renal/hepática'],
    imaging: ['Ecocardiograma transtorácico inmediato a pie de cama (POCUS): evaluación inmediata de contractilidad ventricular izquierda/derecha, descarte de rotura de tabique, taponamiento o insuficiencia mitral aguda', 'Coronariografía emergente para revascularización inmediata en IAM'],
    differential: ['Shock séptico distributivo', 'Shock hipovolémico hemorrágico', 'Shock obstructivo por TEP masivo'],
    firstLine: [
      { drug: 'Soporte inotrópico y vasopresor en shock cardiogénico: Noradrenalina + Dobutamina', dose: 'Noradrenalina 0.05 a 1.0 mcg/kg/min EV en infusión continua (vasopresor de primera elección para asegurar TAM ≥ 65 mmHg) + Dobutamina 2.5 a 20 mcg/kg/min EV en infusión continua (inotrópico para mejorar volumen latido)', route: 'EV en vía central', freq: 'Continuo titulado', notes: 'La noradrenalina es de elección sobre la dopamina por inducir significativamente menos arritmias' },
      { drug: 'Soporte circulatorio mecánico percutáneo (Impella o Balón de Contrapulsación Intraaórtico - BCIAo o ECMO-VA)', dose: 'Dispositivo mecánico de asistencia circulatoria', route: 'Endovascular', freq: 'Urgente', notes: 'Indicado de emergencia en shock refractario o complicaciones mecánicas como puente a revascularización o trasplante' },
      { drug: 'Reperfusión coronaria emergente mediante angioplastia primaria inmediata', dose: 'Cateterismo inmediato', route: 'Intervencionista', freq: 'Inmediata', notes: 'Única intervención médica demostrada que reduce la mortalidad en el shock cardiogénico post-IAM' }
    ],
    alternatives: [
      { drug: 'Milrinona o Levosimendán', dose: 'Levosimendán 0.05 a 0.2 mcg/kg/min EV en infusión', route: 'EV continua', freq: 'Titulado', notes: 'Inodilatadores útiles si el paciente usa betabloqueantes o en hipertensión pulmonar' }
    ],
    nonPharm: ['Ventilación mecánica invasiva con intubación orotraqueal para disminuir el trabajo respiratorio y mejorar la oxigenación'],
    nursingCare: ['ACCIONES CRÍTICAS EN PARADA CARDIORRESPIRATORIA: Iniciar inmediatamente masaje cardíaco de alta calidad sin interrupciones, conectar monitor desfibrilador, verificar si el ritmo es desfibrilable (FV/TVSP) o no desfibrilable (Asistolia/AESP) y seguir algoritmo ACLS', 'Canalización inmediata de acceso venoso central y catéter arterial para monitoreo invasivo continuo de la presión arterial', 'Control y registro horario estricto de diuresis horaria con bolsa colectora graduada', 'Monitoreo continuo de saturación venosa central de oxígeno (SvcO2 meta > 70%) y aclaramiento horario del lactato']
  }
];

