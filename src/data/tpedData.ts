export interface TPEDMilestone {
  month: number;
  label: string;
  items: {
    area: 'Motor Grueso' | 'Motor Fino' | 'Lenguaje' | 'Social';
    desc: string;
  }[];
  redFlag: string;
}

export const tpedMilestones: TPEDMilestone[] = [
  {
    month: 1,
    label: "1 Mes",
    items: [
      { area: "Motor Grueso", desc: "En decúbito ventral levanta la barbilla momentáneamente." },
      { area: "Motor Fino", desc: "Manos predominantemente cerradas en puño (reflejo de prensión)." },
      { area: "Social", desc: "Mira fijamente el rostro de la madre o examinador." },
      { area: "Lenguaje", desc: "Reacciona con sobresalto o parpadeo ante sonidos intensos." }
    ],
    redFlag: "No reacciona al sonido, hipotonía severa o irritabilidad inconsolable."
  },
  {
    month: 2,
    label: "2 Meses",
    items: [
      { area: "Motor Grueso", desc: "Levanta la cabeza 45° en posición boca abajo (prono)." },
      { area: "Motor Fino", desc: "Abre las manos con mayor frecuencia, manos entreabiertas." },
      { area: "Social", desc: "Sonrisa social espontánea o en respuesta a la voz de la madre." },
      { area: "Lenguaje", desc: "Emite sonidos guturales vocálicos ('agú', 'eh', 'ah')." }
    ],
    redFlag: "Ausencia de sonrisa social, no fija la mirada."
  },
  {
    month: 3,
    label: "3 Meses",
    items: [
      { area: "Motor Grueso", desc: "Sostén cefálico en desarrollo (mantiene la cabeza erguida al estar sentado con apoyo)." },
      { area: "Motor Fino", desc: "Junta las manos en la línea media y las lleva a la boca." },
      { area: "Social", desc: "Sigue con la mirada un objeto móvil en arco de 180°." },
      { area: "Lenguaje", desc: "Ríe a carcajadas o balbucea con entonación." }
    ],
    redFlag: "Caída completa de cabeza hacia atrás al traccionar desde brazos."
  },
  {
    month: 4,
    label: "4 Meses",
    items: [
      { area: "Motor Grueso", desc: "Control cefálico completo y firme sin oscilaciones." },
      { area: "Motor Fino", desc: "Agarra objetos voluntariamente que se le colocan al alcance." },
      { area: "Social", desc: "Muestra agrado ante el juego, mira sus propias manos." },
      { area: "Lenguaje", desc: "Emite gritos de alegría y modula tonos vocálicos." }
    ],
    redFlag: "Falta de control de la cabeza, manos siempre cerradas con pulgar atrapado."
  },
  {
    month: 6,
    label: "6 Meses",
    items: [
      { area: "Motor Grueso", desc: "Se rota activamente de decúbito prono a supino y viceversa." },
      { area: "Motor Fino", desc: "Traslada un objeto o sonajero de una mano a la otra." },
      { area: "Social", desc: "Reconoce a personas familiares y extraña a desconocidos." },
      { area: "Lenguaje", desc: "Balbuceo polifónico continuo (consonantes 'da-da', 'ba-ba')." }
    ],
    redFlag: "No se gira sobre su cuerpo, no busca objetos caídos, no balbucea."
  },
  {
    month: 9,
    label: "9 Meses",
    items: [
      { area: "Motor Grueso", desc: "Se sienta solo sin ningún apoyo con espalda recta; inicia reptado o gateo." },
      { area: "Motor Fino", desc: "Pinza digital inferior o torpe (índice y pulgar radial)." },
      { area: "Social", desc: "Juega al '¿dónde está bebé?' (permanencia del objeto) y aplaude." },
      { area: "Lenguaje", desc: "Comprende el 'NO' y atiende inmediatamente a su propio nombre." }
    ],
    redFlag: "Incapacidad para mantenerse sentado sin apoyo, no vocaliza bisílabos."
  },
  {
    month: 12,
    label: "12 Meses (1 Año)",
    items: [
      { area: "Motor Grueso", desc: "Se pone de pie apoyándose en muebles; da pasos laterales sostenido." },
      { area: "Motor Fino", desc: "Pinza digital superior fina (punta con punta), introduce objetos pequeños en un frasco." },
      { area: "Social", desc: "Dice adiós con la mano ('chau'), entrega un objeto a pedido." },
      { area: "Lenguaje", desc: "Dice al menos 2 a 3 palabras con significado ('mamá', 'papá', 'agua')." }
    ],
    redFlag: "No se pone de pie con apoyo, no señala con el dedo índice, ausencia de palabras."
  },
  {
    month: 15,
    label: "15 Meses",
    items: [
      { area: "Motor Grueso", desc: "Camina solo sin apoyo, aunque con base de sustentación amplia." },
      { area: "Motor Fino", desc: "Construye una torre de 2 o 3 cubos." },
      { area: "Social", desc: "Usa la cuchara con derrame, imita tareas domésticas simples." },
      { area: "Lenguaje", desc: "Vocabulario de 4 a 6 palabras claras, señala lo que desea." }
    ],
    redFlag: "No camina de forma independiente, no imita gestos."
  },
  {
    month: 18,
    label: "18 Meses (1.5 Años)",
    items: [
      { area: "Motor Grueso", desc: "Sube escaleras tomado de la mano o gateando, corre con torpeza." },
      { area: "Motor Fino", desc: "Torre de 3 a 4 cubos, garabatea espontáneamente con un crayón." },
      { area: "Social", desc: "Bebe de un vaso solo sin apenas derramar, avisa necesidad de pañal." },
      { area: "Lenguaje", desc: "Vocabulario de 10 a 20 palabras, identifica al menos 3 partes de su cuerpo." }
    ],
    redFlag: "Vocabulario menor a 6 palabras, marcha inestable recurrente con caídas continuas."
  },
  {
    month: 24,
    label: "24 Meses (2 Años)",
    items: [
      { area: "Motor Grueso", desc: "Corre con seguridad, patea una pelota hacia adelante sin caerse." },
      { area: "Motor Fino", desc: "Torre de 6 cubos, imita trazo de línea vertical." },
      { area: "Social", desc: "Juego en paralelo junto a otros niños, se quita prendas sueltas de ropa." },
      { area: "Lenguaje", desc: "Combina frases de dos palabras ('más leche', 'vamos parque')." }
    ],
    redFlag: "No forma frases de dos palabras espontáneas, no corre, pérdida de habilidades previas."
  },
  {
    month: 36,
    label: "36 Meses (3 Años)",
    items: [
      { area: "Motor Grueso", desc: "Pedalea un triciclo, sube escaleras alternando pies." },
      { area: "Motor Fino", desc: "Copia un círculo, utiliza tijeras con supervisión." },
      { area: "Social", desc: "Control diurno de esfínteres, comparte juegos, sabe su nombre y edad." },
      { area: "Lenguaje", desc: "Usa pronombres ('yo', 'tú'), oraciones completas de 3 a 4 palabras entendibles para extraños." }
    ],
    redFlag: "Falta de control de esfínteres, habla incomprensible, no interactúa con pares."
  },
  {
    month: 48,
    label: "48 Meses (4 Años)",
    items: [
      { area: "Motor Grueso", desc: "Salta en un solo pie, salta sobre obstáculos pequeños." },
      { area: "Motor Fino", desc: "Copia una cruz (+), dibuja a una persona con 3 partes corporales." },
      { area: "Social", desc: "Va al baño solo, juega en grupo con reglas sencillas, se viste con poca ayuda." },
      { area: "Lenguaje", desc: "Cuenta historias sencillas, comprende conceptos de tiempo ('ayer/mañana')." }
    ],
    redFlag: "Incapacidad para saltar en un pie, dificultad motriz para dibujar figuras simples."
  }
];

export interface GrowthPoint {
  ageMonth: number;
  minus2SD: number;
  median: number;
  plus2SD: number;
}

// 1. Curvas estándar OMS: Peso para la Edad (0 a 60 meses)
export const omsBoysWeightData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 2.5, median: 3.3, plus2SD: 4.4 },
  { ageMonth: 2, minus2SD: 4.3, median: 5.6, plus2SD: 7.1 },
  { ageMonth: 4, minus2SD: 5.6, median: 7.0, plus2SD: 8.7 },
  { ageMonth: 6, minus2SD: 6.4, median: 7.9, plus2SD: 9.8 },
  { ageMonth: 8, minus2SD: 7.0, median: 8.6, plus2SD: 10.5 },
  { ageMonth: 10, minus2SD: 7.5, median: 9.2, plus2SD: 11.2 },
  { ageMonth: 12, minus2SD: 7.8, median: 9.6, plus2SD: 11.8 },
  { ageMonth: 18, minus2SD: 8.9, median: 10.9, plus2SD: 13.3 },
  { ageMonth: 24, minus2SD: 9.7, median: 12.2, plus2SD: 15.0 },
  { ageMonth: 36, minus2SD: 11.3, median: 14.3, plus2SD: 18.0 },
  { ageMonth: 48, minus2SD: 12.7, median: 16.3, plus2SD: 21.2 },
  { ageMonth: 60, minus2SD: 14.1, median: 18.3, plus2SD: 24.2 }
];

export const omsGirlsWeightData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 2.4, median: 3.2, plus2SD: 4.2 },
  { ageMonth: 2, minus2SD: 3.9, median: 5.1, plus2SD: 6.6 },
  { ageMonth: 4, minus2SD: 5.0, median: 6.4, plus2SD: 8.2 },
  { ageMonth: 6, minus2SD: 5.8, median: 7.3, plus2SD: 9.3 },
  { ageMonth: 8, minus2SD: 6.3, median: 8.0, plus2SD: 10.0 },
  { ageMonth: 10, minus2SD: 6.8, median: 8.5, plus2SD: 10.7 },
  { ageMonth: 12, minus2SD: 7.1, median: 8.9, plus2SD: 11.3 },
  { ageMonth: 18, minus2SD: 8.2, median: 10.2, plus2SD: 12.8 },
  { ageMonth: 24, minus2SD: 9.0, median: 11.5, plus2SD: 14.6 },
  { ageMonth: 36, minus2SD: 10.8, median: 13.9, plus2SD: 17.7 },
  { ageMonth: 48, minus2SD: 12.3, median: 16.1, plus2SD: 21.0 },
  { ageMonth: 60, minus2SD: 13.8, median: 18.2, plus2SD: 24.5 }
];

// 2. Curvas estándar OMS: Talla / Longitud para la Edad (0 a 60 meses en cm)
export const omsBoysHeightData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 46.1, median: 49.9, plus2SD: 53.7 },
  { ageMonth: 2, minus2SD: 54.4, median: 58.4, plus2SD: 62.4 },
  { ageMonth: 4, minus2SD: 59.7, median: 63.9, plus2SD: 68.0 },
  { ageMonth: 6, minus2SD: 63.6, median: 67.6, plus2SD: 71.6 },
  { ageMonth: 8, minus2SD: 66.2, median: 70.6, plus2SD: 75.0 },
  { ageMonth: 10, minus2SD: 68.7, median: 73.3, plus2SD: 77.9 },
  { ageMonth: 12, minus2SD: 71.0, median: 75.7, plus2SD: 80.5 },
  { ageMonth: 18, minus2SD: 76.9, median: 82.3, plus2SD: 87.7 },
  { ageMonth: 24, minus2SD: 81.7, median: 87.8, plus2SD: 93.9 },
  { ageMonth: 36, minus2SD: 88.7, median: 96.1, plus2SD: 103.5 },
  { ageMonth: 48, minus2SD: 94.9, median: 103.3, plus2SD: 111.7 },
  { ageMonth: 60, minus2SD: 100.7, median: 110.0, plus2SD: 119.2 }
];

export const omsGirlsHeightData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 45.4, median: 49.1, plus2SD: 52.9 },
  { ageMonth: 2, minus2SD: 53.2, median: 57.1, plus2SD: 61.1 },
  { ageMonth: 4, minus2SD: 58.0, median: 62.1, plus2SD: 66.2 },
  { ageMonth: 6, minus2SD: 61.2, median: 65.7, plus2SD: 70.3 },
  { ageMonth: 8, minus2SD: 64.0, median: 68.7, plus2SD: 73.5 },
  { ageMonth: 10, minus2SD: 66.5, median: 71.5, plus2SD: 76.4 },
  { ageMonth: 12, minus2SD: 68.9, median: 74.0, plus2SD: 79.2 },
  { ageMonth: 18, minus2SD: 74.9, median: 80.7, plus2SD: 86.5 },
  { ageMonth: 24, minus2SD: 80.0, median: 86.4, plus2SD: 92.9 },
  { ageMonth: 36, minus2SD: 87.4, median: 95.1, plus2SD: 102.7 },
  { ageMonth: 48, minus2SD: 94.1, median: 102.7, plus2SD: 111.3 },
  { ageMonth: 60, minus2SD: 99.9, median: 109.4, plus2SD: 118.9 }
];

// 3. Curvas estándar OMS: Perímetro Cefálico para la Edad (0 a 36/60 meses en cm)
export const omsBoysHeadCircData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 31.9, median: 34.5, plus2SD: 37.0 },
  { ageMonth: 2, minus2SD: 36.8, median: 39.1, plus2SD: 41.3 },
  { ageMonth: 4, minus2SD: 39.4, median: 41.6, plus2SD: 43.8 },
  { ageMonth: 6, minus2SD: 41.0, median: 43.3, plus2SD: 45.4 },
  { ageMonth: 8, minus2SD: 42.0, median: 44.3, plus2SD: 46.5 },
  { ageMonth: 10, minus2SD: 42.9, median: 45.3, plus2SD: 47.6 },
  { ageMonth: 12, minus2SD: 43.6, median: 46.1, plus2SD: 48.3 },
  { ageMonth: 18, minus2SD: 44.9, median: 47.4, plus2SD: 49.8 },
  { ageMonth: 24, minus2SD: 45.7, median: 48.3, plus2SD: 50.8 },
  { ageMonth: 36, minus2SD: 46.8, median: 49.5, plus2SD: 52.0 },
  { ageMonth: 48, minus2SD: 47.5, median: 50.4, plus2SD: 52.9 },
  { ageMonth: 60, minus2SD: 48.1, median: 51.0, plus2SD: 53.6 }
];

export const omsGirlsHeadCircData: GrowthPoint[] = [
  { ageMonth: 0, minus2SD: 31.5, median: 33.9, plus2SD: 36.2 },
  { ageMonth: 2, minus2SD: 35.8, median: 38.0, plus2SD: 40.3 },
  { ageMonth: 4, minus2SD: 38.3, median: 40.6, plus2SD: 42.7 },
  { ageMonth: 6, minus2SD: 39.9, median: 42.2, plus2SD: 44.4 },
  { ageMonth: 8, minus2SD: 41.0, median: 43.2, plus2SD: 45.4 },
  { ageMonth: 10, minus2SD: 41.9, median: 44.2, plus2SD: 46.4 },
  { ageMonth: 12, minus2SD: 42.5, median: 44.9, plus2SD: 47.1 },
  { ageMonth: 18, minus2SD: 43.8, median: 46.2, plus2SD: 48.5 },
  { ageMonth: 24, minus2SD: 44.6, median: 47.2, plus2SD: 49.6 },
  { ageMonth: 36, minus2SD: 45.7, median: 48.5, plus2SD: 51.0 },
  { ageMonth: 48, minus2SD: 46.5, median: 49.4, plus2SD: 52.0 },
  { ageMonth: 60, minus2SD: 47.1, median: 50.1, plus2SD: 52.7 }
];
