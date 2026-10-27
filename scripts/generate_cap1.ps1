# Generator for Capitulo 1: Infecciosas, Tropicales y Zoonoticas (1-80)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$items = @(
  @{ n=1; t="Dengue clásico"; c="A90";
     def="Infección viral transmitida por el mosquito Aedes aegypti, de presentación endémica en costa norte y selva peruana.";
     sym=@("Fiebre alta bifásica", "Cefalea retroocular", "Mialgias y artralgias intensas", "Exantema maculopapular", "Náuseas");
     rf=@("Dolor abdominal continuo", "Vómitos persistentes", "Hipotensión postural o sangrado mucoso");
     crit="Criterios clínicos de la NTS N° 071-MINSA en paciente procedente de zona endémica.";
     labs=@("Hemograma con recuento plaquetario", "Prueba rápida de antígeno NS1 (días 1-5)", "Serología IgM ELISA (días 6+)");
     img=@("Ecografía abdominal de rastreo de líquido libre");
     diff=@("Malaria", "Zika", "Chikungunya", "Leptospirosis");
     drugs=@(@{ drug="Paracetamol"; dose="500 a 1000 mg"; route="VO"; freq="c/6-8h (máx 4g/día)"; notes="Contraindicados AINEs por riesgo de hemorragia" },
             @{ drug="Sales de Rehidratación Oral (SRO)"; dose="A libre demanda"; route="VO"; freq="Continuo"; notes="Mantener hidratación oral rigurosa" });
     nursing=@("Monitoreo horario de signos de alarma (dolor abdominal, vómitos, lipotimia)", "Vigilancia de sangrado en encías o piel (petequias)", "Control estricto de balance hídrico", "Uso obligatorio de mosquitero en cama");
  },
  @{ n=2; t="Dengue grave (hemorrágico)"; c="A91";
     def="Forma severa de dengue caracterizada por extravasación masiva de plasma, sangrado severo o falla multiorgánica.";
     sym=@("Choque hipovolémico", "Derrame pleural y ascitis", "Hemorragia digestiva o hematuria", "Plaquetopenia < 50,000/uL", "Alteración del sensorio");
     rf=@("Extravasación plasmática masiva", "Plaquetopenia severa rápida", "Hipotensión arterial refractaria");
     crit="Dengue confirmado con presencia de choque, dificultad respiratoria por fuga plasmática o hemorragia masiva.";
     labs=@("Hematocrito seriado c/4-6h", "Recuento plaquetario seriado", "Gases arteriales y lactato", "Perfil de coagulación");
     img=@("Ecografía FAST pleural y peritoneal", "Radiografía de tórax portátil");
     diff=@("Sepsis bacteriana grave", "Choque hemorrágico", "Fiebre amarilla");
     drugs=@(@{ drug="Cloruro de Sodio 0.9%"; dose="10 a 20 mL/kg en bolo EV"; route="EV"; freq="Según respuesta hemodinámica"; notes="Protocolo de reanimación hídrica MINSA" });
     nursing=@("Colocación inmediata de 2 vías periféricas de grueso calibre (18G)", "Monitoreo continuo de presión arterial media y saturación de oxígeno", "Control estricto de balance hídrico horario y diuresis por sonda Foley", "Preparación para transfusión de hemoderivados si amerita");
  },
  @{ n=3; t="Malaria por Plasmodium vivax"; c="B51";
     def="Parasitosis eritrocitaria transmitida por el mosquito Anopheles, causante de fiebre terciana benigna y recaídas por hipnozoítos.";
     sym=@("Paroxismos febriles en picos cada 48h", "Escalofríos intensos iniciales", "Diaforesis profusa", "Cefalea y astenia", "Palidez y esplenomegalia");
     rf=@("Ictericia marcada", "Hiperparasitemia", "Vómitos incoercibles");
     crit="Gota gruesa o frotis sanguíneo positivo para trofozoítos/esquizontes de P. vivax según NTS MINSA.";
     labs=@("Gota gruesa y frotis de sangre periférica", "Prueba de diagnóstico rápido (PDR) para antígeno", "Hemograma completo (anemia hemolítica)", "Bilirrubinas y transaminasas");
     img=@("Ecografía abdominal (esplenomegalia reactiva)");
     diff=@("Malaria por P. falciparum", "Dengue", "Bartonelosis (Fase anémica)", "Fiebre tifoidea");
     drugs=@(@{ drug="Cloroquina (difosfato)"; dose="10 mg base/kg día 1; 7.5 mg/kg días 2 y 3"; route="VO"; freq="Dosis diaria por 3 días"; notes="Esquema oficial MINSA de primera línea" },
             @{ drug="Primaquina"; dose="0.5 mg/kg/día"; route="VO"; freq="Cada 24 horas por 7 días"; notes="Para erradicar hipnozoítos hepáticos. Descartar déficit G6PD" });
     nursing=@("Verificación de la toma de medicación supervisada (DOTS)", "Control de curva térmica seriada", "Vigilancia de signos de hemólisis intravascular (coluria, palidez marcada)", "Educación comunitaria en uso de mosquiteros tratados con insecticida");
  },
  @{ n=4; t="Malaria por Plasmodium falciparum"; c="B50";
     def="Forma potencialmente mortal de malaria con capacidad de provocar secuestro microvascular, malaria cerebral y falla multiorgánica.";
     sym=@("Fiebre terciana maligna", "Cefalea severa y letargia", "Ictericia hemolítica", "Orina oscura (fiebre de aguas negras)", "Distrés respiratorio");
     rf=@("Compromiso del sensorio (Malaria cerebral)", "Distrés respiratorio agudo", "Parasitemia > 2%", "Oliguria o anuria");
     crit="Gota gruesa positiva con presencia exclusiva o mixta de anillos delicados o gametocitos semilunares de P. falciparum.";
     labs=@("Gota gruesa con cuantificación de parasitemia", "Gasometría arterial (acidosis metabólica)", "Glucosa sérica (riesgo de hipoglucemia severa)", "Creatinina y perfil hepático");
     img=@("Radiografía de tórax (edema pulmonar no cardiogénico)", "TAC cerebral en caso de coma");
     diff=@("Sepsis de foco bacteriano", "Meningoencefalitis", "Fiebre amarilla", "Leptospirosis grave (Weil)");
     drugs=@(@{ drug="Artesunato + Mefloquina"; dose="Artesunato 4 mg/kg/d x 3d + Mefloquina 25 mg/kg dosis dividida"; route="VO"; freq="Esquema combinado MINSA"; notes="Para malaria por P. falciparum no complicada" },
             @{ drug="Artesunato sódico EV"; dose="2.4 mg/kg EV al ingreso, a las 12h y 24h, luego c/24h"; route="EV"; freq="Esquema de rescate UCI"; notes="En malaria falciparum complicada o grave" });
     nursing=@("Vigilancia neurológica estricta mediante Escala de Coma de Glasgow", "Control estricto de glicemia capilar cada 4 horas (el artesunato y la infección causan hipoglucemia)", "Manejo de balance hídrico neutro para prevenir edema pulmonar", "Monitoreo horario de diuresis y coloración de la orina");
  },
  @{ n=5; t="Fiebre Amarilla selvícola"; c="A95.0";
     def="Flavivirosis zoonótica transmitida en selva alta y baja por vectores Haemagogus y Sabethes, con alta letalidad por fallo hepatorrenal.";
     sym=@("Fiebre brusca y cefalea", "Signo de Faget (fiebre con bradicardia relativa)", "Ictericia intensa (ictericia rubínica)", "Hematemesis (vómito negro)", "Oliguria");
     rf=@("Aparición de ictericia", "Sangrado gastrointestinal activo", "Hipotensión y choque");
     crit="Clínica compatible en persona no vacunada procedente de cuenca endémica + ELISA IgM o PCR viral positivo.";
     labs=@("Serología IgM específica por ELISA", "RT-PCR viral en primeros días", "Perfil hepático (transaminasas > 1000 UI/L)", "Perfil de coagulación y tiempo de protrombina prolongado");
     img=@("Ecografía abdominal");
     diff=@("Hepatitis viral fulminante", "Leptospirosis ictérica", "Malaria grave", "Dengue grave");
     drugs=@(@{ drug="Soporte hemodinámico y fluidoterapia"; dose="Cristaloides según PAM y diuresis"; route="EV"; freq="Continuo"; notes="No existe antiviral específico. Manejo en UCI" },
             @{ drug="Vitamina K1"; dose="10 mg EV lento"; route="EV"; freq="Cada 24 horas"; notes="Coadyuvante ante coagulopatía hepática" });
     nursing=@("Aislamiento estricto con mosquitero en sala de hospitalización", "Vigilancia de hemorragias digestivas y colocación de sonda nasogástrica con extremo cuidado", "Monitoreo horario de balance hídrico y presión venosa central", "Verificación y fomento de la vacunación antiamarílica en contactos");
  },
  @{ n=6; t="Tuberculosis pulmonar"; c="A15.0";
     def="Infección granulomatosa crónica causada por Mycobacterium tuberculosis, con afección primordial del parénquima pulmonar.";
     sym=@("Tos con expectoración productiva > 15 días (Sintomático Respiratorio)", "Hemoptisis", "Fiebre y sudoración nocturna vespertina", "Pérdida ponderal involuntaria", "Astenia crónica");
     rf=@("Hemoptisis masiva (>200 mL en 24h)", "Disnea progresiva en reposo", "Neumotórax espontáneo");
     crit="Baciloscopía de esputo positiva (Ziehl-Neelsen o Auramina-Rodamina) o prueba molecular rápida GeneXpert MTB/RIF positiva.";
     labs=@("Baciloscopía seriada de esputo (2 muestras)", "Prueba molecular GeneXpert MTB/RIF", "Cultivo en medio Ogawa-Kudoh o MGIT", "Prueba de sensibilidad a drogas (PSD)");
     img=@("Radiografía de tórax póstero-anterior (infiltrados apicales, cavitaciones y fibrosis)");
     diff=@("Neumonía cavitada por Klebsiella", "Absceso pulmonar", "Cáncer broncogénico", "Micosis pulmonar");
     drugs=@(@{ drug="Esquema 2HREZ / 4H3R3 (NTS N° 200-MINSA)"; dose="Isoniazida 300mg + Rifampicina 600mg + Etambutol 1200mg + Pirazinamida 1500mg"; route="VO"; freq="Fase 1: diario x 54 dosis; Fase 2: 3 v/sem x 54 dosis"; notes="Tratamiento directamente observado (DOTS)" });
     nursing=@("Supervisión estricta de la toma de medicación diaria bajo estrategia DOTS", "Educación sanitaria en etiqueta de la tos, uso de mascarilla quirúrgica en el paciente y N95 en personal", "Monitoreo de reacciones adversas a fármacos antituberculosos (RAFA): ictericia, rash cutáneo, náuseas", "Consejería nutricional y seguimiento del peso corporal mensual");
  },
  @{ n=7; t="Tuberculosis extrapulmonar"; c="A18";
     def="Diseminación hematógena o linfática de M. tuberculosis fuera de los pulmones (pleura, ganglios, meninges, osteoarticular, renal o peritoneal).";
     sym=@("Linfadenopatía cervical indolora no flogótica (Escrófula)", "Dolor torácico pleurítico y disnea (TB pleural)", "Dolor vertebral focal (Mal de Pott)", "Fiebre persistente y diaforesis");
     rf=@("Focalización neurológica o rigidez de nuca (TB meníngea)", "Compresión medular o paraplejía");
     crit="Biopsia de tejido con granulomas caseificantes, ADA elevado en líquidos corporales o GeneXpert positivo en líquido/tejido.";
     labs=@("Citoquímico y dosaje de ADA (pleural > 40 U/L, peritoneal, LCR)", "Biopsia pleural o ganglionar con tinción ZN y cultivo", "PPD / IGRA (QuantiFERON)");
     img=@("Resonancia magnética de columna vertebral (Pott)", "Ecografía ganglionar o abdominal");
     diff=@("Linfoma", "Metástasis neoplásicas", "Meningitis bacteriana o fúngica", "Artritis séptica");
     drugs=@(@{ drug="Esquema Sensible Prolongado (MINSA)"; dose="HREZ por 2 meses + HR por 7 a 10 meses según localización"; route="VO"; freq="Fase diaria y fase de consolidación"; notes="TB meníngea y osteoarticular requieren 9 a 12 meses de terapia" },
             @{ drug="Prednisona"; dose="1 mg/kg/día con reducción progresiva"; route="VO"; freq="Diario por 4-6 semanas"; notes="Indicada en TB meníngea y pericárdica para reducir mortalidad" });
     nursing=@("Asistencia en procedimientos invasivos diagnósticos (toracocentesis, punción lumbar)", "Evaluación neurológica seriada en sospecha de meningitis tuberculosa", "Control y registro riguroso de peso y ganancia nutricional", "Soporte emocional y acompañamiento para evitar el abandono terapéutico");
  },
  @{ n=8; t="Tuberculosis multidrogorresistente"; c="U88.0";
     def="Infección por cepas de M. tuberculosis con resistencia simultánea comprobada in vitro a Isoniazida y Rifampicina.";
     sym=@("Falta de respuesta clínica o microbiológica al esquema de primera línea", "Baciloscopías persistentemente positivas al 2° o 3° mes", "Deterioro nutricional progresivo", "Hemoptisis recurrente");
     rf=@("Insuficiencia respiratoria crónica descompensada", "Coinfección con VIH avanzada");
     crit="Prueba de sensibilidad a drogas (GenoType MTBDRplus o cultivo) con resistencia a Isoniazida y Rifampicina según Comité Experto Nacional (CRNT/CENET).";
     labs=@("Pruebas de sensibilidad rápida por sondas de ADN (GenoType)", "Cultivo de esputo mensual para control de conversión", "Monitoreo de electrolitos, función tiroidea y hepática");
     img=@("Tomografía computarizada de tórax de alta resolución (TACAR)");
     diff=@("Tuberculosis extensamente resistente (XDR)", "Micobacteriosis atípica no tuberculosa");
     drugs=@(@{ drug="Esquema Oral Acortado / Individualizado MINSA"; dose="Bedaquilina + Levofloxacino + Linezolid + Clofazimina + Cicloserina"; route="VO"; freq="Según protocolo individualizado del CENET"; notes="Duración de 9 a 18 meses bajo estricta farmacovigilancia" });
     nursing=@("Monitoreo continuo de electrocardiograma seriado (vigilancia de prolongación del intervalo QTc por Bedaquilina y Fluoroquinolonas)", "Vigilancia de neuropatía periférica y mielosupresión por Linezolid (control de hemograma periódico)", "Administración rigurosamente supervisada en centro de salud especializado", "Refuerzo continuo de medidas de bioseguridad respiratoria (presión negativa y ventilación natural cruzada)");
  },
  @{ n=9; t="Tuberculosis extensamente resistente"; c="U88.1";
     def="Tuberculosis MDR con resistencia adicional a cualquier fluoroquinolona (Levofloxacino/Moxifloxacino) y al menos a un fármaco del Grupo A (Bedaquilina o Linezolid).";
     sym=@("Cronicidad severa del cuadro respiratorio", "Caquexia extrema", "Expectoración hemoptoica crónica", "Insuficiencia ventilatoria restrictivo-obstructiva");
     rf=@("Hemoptisis masiva exanguinante", "Insuficiencia respiratoria global refractaria");
     crit="Identificación fenotípica o molecular de resistencia ampliada por laboratorio de referencia nacional del INS.";
     labs=@("Secuenciación genética completa de resistencias (Next Generation Sequencing)", "Panel completo de bioquímica sanguínea y hemograma semanal", "Cultivos mensuales en medio líquido");
     img=@("Tomografía de tórax (destrucción lobar extensa o fibroantracosis)");
     diff=@("Aspergiloma en cavidad secuelar", "Cáncer epidermoide sobre cicatriz");
     drugs=@(@{ drug="Esquema BPaL / Individualizado Complejo"; dose="Pretomanid + Bedaquilina + Linezolid ± Delamanid"; route="VO"; freq="Aprobado por el Comité Nacional de Evaluación de Retratamientos (CNER)"; notes="Uso de moléculas de última generación bajo estricto monitoreo hospitalario" });
     nursing=@("Cuidado especializado en áreas de aislamiento con presión negativa y filtros HEPA", "Manejo integral del soporte nutricional hiperproteico e hipercalórico", "Cuidado integral del dolor torácico crónico y fisioterapia respiratoria suave", "Apoyo psicosocial intensivo y prevención de la depresión por aislamiento prolongado");
  },
  @{ n=10; t="Infección por VIH"; c="B24";
     def="Infección por el Virus de la Inmunodeficiencia Humana que infecta progresivamente los linfocitos T CD4+, con depleción inmunológica crónica.";
     sym=@("Síndrome retroviral agudo (fiebre, faringitis, linfadenopatía difusa)", "Linfadenopatía generalizada persistente", "Diarrea recurrente y pérdida de peso moderada", "Candidiasis orofaríngea leve");
     rf=@("Conteo de CD4 < 200 cél/uL", "Aparición de infecciones oportunistas definitorias de estadio SIDA");
     crit="Prueba rápida reactiva dual o ELISA de 4ta generación reactivo + confirmación mediante carga viral de VIH-1 o inmunoblot.";
     labs=@("Carga viral plasmática de VIH-1 (ARN copia/mL)", "Recuento de linfocitos T CD4/CD8 por citometría de flujo", "Descarte serológico de Sífilis (RPR), Hepatitis B (HBsAg), Hepatitis C y Chagas", "PPD / Rx de tórax anual para descartar infección tuberculosa latente");
     img=@("Radiografía de tórax basal");
     diff=@("Mononucleosis infecciosa aguda", "Infección por CMV", "Toxoplasmosis aguda");
     drugs=@(@{ drug="Esquema TLD (NTS N° 169-MINSA)"; dose="Tenofovir 300mg + Lamivudina 300mg + Dolutegravir 50mg (coformulado en 1 tableta)"; route="VO"; freq="1 tableta cada 24 horas a la misma hora"; notes="Terapia antirretroviral de primera línea universal en Perú" });
     nursing=@("Consejería pre y post-test con absoluta confidencialidad garantizada por ley", "Evaluación y fomento de la adherencia estricta a la TARV (>95% de tomas correctas)", "Educación para la salud sexual y uso correcto de métodos de barrera (preservativos)", "Vacunación preventiva del adulto (Neumococo, Influenza, Hepatitis B, Tétanos)");
  }
)

Write-Host "Generando Capítulo 1... Total definidos: $($items.Count)"
