import { DiagnosisItem, toDiagnosisItem } from './types';
import { capitulo1 } from './capitulo1';
import { capitulo2 } from './capitulo2';
import { capitulo3 } from './capitulo3';
import { capitulo4 } from './capitulo4';
import { capitulo5 } from './capitulo5';
import { capitulo6 } from './capitulo6';
import { capitulo7 } from './capitulo7';
import { capitulo8 } from './capitulo8';
import { capitulo9 } from './capitulo9';

export const catalogo600: DiagnosisItem[] = [
  ...capitulo1,
  ...capitulo2,
  ...capitulo3,
  ...capitulo4.map(toDiagnosisItem),
  ...capitulo5.map(toDiagnosisItem),
  ...capitulo6.map(toDiagnosisItem),
  ...capitulo7.map(toDiagnosisItem),
  ...capitulo8.map(toDiagnosisItem),
  ...capitulo9.map(toDiagnosisItem)
];

export default catalogo600;
