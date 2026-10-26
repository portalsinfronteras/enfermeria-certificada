import React, { useState } from 'react';
import {
  Baby,
  Calculator,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Droplets,
  Calendar,
  CheckCircle2,
  BookOpen,
  Info,
  Scale,
  Clock,
  HeartPulse,
  Pill
} from 'lucide-react';

export const HierroTab: React.FC = () => {
  // Estado de la calculadora
  const [condicionNacimiento, setCondicionNacimiento] = useState<'termino' | 'prematuro'>('termino');
  const [modalidad, setModalidad] = useState<'preventivo' | 'tratamiento'>('preventivo');
  const [edadMeses, setEdadMeses] = useState<string>('5');
  const [pesoKg, setPesoKg] = useState<string>('7.2');
  const [hemoglobina, setHemoglobina] = useState<string>('10.2');

  const pesoNum = parseFloat(pesoKg) || 0;
  const edadNum = parseFloat(edadMeses) || 0;
  const hbNum = parseFloat(hemoglobina) || 0;

  // Cálculo de dosis según NTS N° 134-MINSA
  let dosisMgKg = 2; // mg/kg/día por defecto
  let dosisDescripcion = '';
  let duracionTexto = '';
  let presentacionRecomendada = '';
  let alertaClinica = '';

  if (modalidad === 'preventivo') {
    if (condicionNacimiento === 'prematuro') {
      dosisMgKg = 2;
      dosisDescripcion = 'Suplementación Preventiva en Prematuro / Bajo Peso (< 2,500 g)';
      duracionTexto = 'Iniciar a los 30 días de vida y continuar hasta los 12 meses cumplidos.';
      presentacionRecomendada = 'Gotas de Sulfato Ferroso o Complejo Polimaltosado Férrico';
      if (edadNum < 1) {
        alertaClinica = 'En prematuros o bajo peso al nacer, la profilaxis inicia a los 30 días de vida (1 mes).';
      }
    } else {
      // Nacido a término
      if (edadNum < 4) {
        dosisMgKg = 0;
        dosisDescripcion = 'Lactancia Materna Exclusiva (LME)';
        duracionTexto = 'El recién nacido a término con adecuado peso tiene depósitos de hierro suficientes hasta los 4 meses.';
        presentacionRecomendada = 'Lactancia Materna Exclusiva a libre demanda. No requiere suplemento antes de los 4 meses.';
      } else if (edadNum >= 4 && edadNum < 6) {
        dosisMgKg = 2;
        dosisDescripcion = 'Suplementación Preventiva en Lactante a Término (4 a 5 meses)';
        duracionTexto = 'Administrar diariamente desde los 4 meses hasta que cumpla los 6 meses (180 días).';
        presentacionRecomendada = 'Gotas de Sulfato Ferroso o Complejo Polimaltosado Férrico';
      } else if (edadNum >= 6 && edadNum < 12) {
        dosisMgKg = 2;
        dosisDescripcion = 'Prevención en Lactante Mayor (6 a 11 meses)';
        duracionTexto = 'Si no recibe micronutrientes en polvo, dar gotas/jarabe por 6 meses continuos (o 1 sobre de micronutrientes diario por 12 meses).';
        presentacionRecomendada = 'Micronutrientes en polvo ("Chispitas") 1 sobre/día o Gotas/Jarabe de Hierro';
      } else {
        dosisMgKg = 2;
        dosisDescripcion = 'Suplementación Preventiva en Niños de 1 a 3 Años (12 a 35 meses)';
        duracionTexto = '1 sobre de micronutrientes al día por 12 meses seguidos, o Sulfato Ferroso en jarabe durante 3 meses al año.';
        presentacionRecomendada = 'Micronutrientes en polvo (1 sobre/día) o Jarabe de Sulfato Ferroso';
      }
    }
  } else {
    // Tratamiento de Anemia (Terapéutica)
    if (condicionNacimiento === 'prematuro') {
      dosisMgKg = edadNum < 6 ? 4 : 3;
      dosisDescripcion = 'Tratamiento de Anemia en Prematuro / Bajo Peso';
      duracionTexto = 'Tratamiento continuo por 6 meses seguidos. Controles de Hb al mes, a los 3 meses y a los 6 meses.';
      presentacionRecomendada = 'Gotas de Sulfato Ferroso o Complejo Polimaltosado Férrico';
    } else {
      // A término
      dosisMgKg = 3;
      dosisDescripcion = 'Tratamiento de Anemia Leve a Moderada en Niños Menores de 36 Meses';
      duracionTexto = 'Tratamiento por 6 meses continuos. Control de Hemoglobina obligatorio al mes de inicio (esperando elevación ≥ 1 g/dl), a los 3 meses y al 6to mes.';
      presentacionRecomendada = edadNum < 12 ? 'Gotas de Sulfato Ferroso o Polimaltosado' : 'Jarabe de Sulfato Ferroso o Polimaltosado';
    }

    if (hbNum > 0) {
      if (hbNum < 7) {
        alertaClinica = '⚠️ ALERTA: Hb < 7.0 g/dl define ANEMIA SEVERA. Requiere referencia urgente a hospital para evaluación pediátrica especializada y posible transfusión de paquete globular.';
      } else if (hbNum < 10) {
        alertaClinica = 'ANEMIA MODERADA (Hb 7.0 a 9.9 g/dl): Tratamiento inmediato con 3 mg/kg/día por 6 meses y control al mes.';
      } else if (hbNum < 11) {
        alertaClinica = 'ANEMIA LEVE (Hb 10.0 a 10.9 g/dl a nivel del mar): Tratamiento con 3 mg/kg/día por 6 meses.';
      } else {
        alertaClinica = 'Hb ≥ 11.0 g/dl (Sin anemia a nivel del mar): No requiere dosis terapéutica; corresponde dosis preventiva.';
      }
    }
  }

  // Dosis total diaria en miligramos de Hierro Elemental
  const totalMgElemental = dosisMgKg > 0 && pesoNum > 0 ? (pesoNum * dosisMgKg).toFixed(1) : '0';
  const totalMgNum = parseFloat(totalMgElemental) || 0;

  // Equivalencias exactas en Perú (NTS N° 134-MINSA):
  // 1. Gotas Sulfato Ferroso: 25 mg Fe elemental / 1 ml (20 gotas) => 1 gota = 1.25 mg Fe elemental.
  //    Gotas = mg totales / 1.25
  const gotasSulfatoFerroso = totalMgNum > 0 ? Math.round(totalMgNum / 1.25) : 0;

  // 2. Gotas Complejo Polimaltosado Férrico: 50 mg Fe elemental / 1 ml (20 gotas) => 1 gota = 2.5 mg Fe elemental.
  //    Gotas = mg totales / 2.5
  const gotasPolimaltosado = totalMgNum > 0 ? Math.round(totalMgNum / 2.5) : 0;

  // 3. Jarabe Sulfato Ferroso: 15 mg Fe elemental / 5 ml => 3 mg Fe elemental por cada 1 ml.
  //    Mililitros = mg totales / 3
  const mlJarabeSulfato = totalMgNum > 0 ? (totalMgNum / 3).toFixed(1) : '0';

  // 4. Jarabe Complejo Polimaltosado Férrico: 50 mg Fe elemental / 5 ml => 10 mg Fe elemental por cada 1 ml.
  //    Mililitros = mg totales / 10
  const mlJarabePolimaltosado = totalMgNum > 0 ? (totalMgNum / 10).toFixed(1) : '0';

  return (
    <section className="space-y-6">
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-[#071d2b] via-[#0b2c40] to-[#071d2b] rounded-2xl p-5 sm:p-6 border border-[#175270] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-[11px] font-black uppercase">
            <Baby className="w-3.5 h-3.5" />
            NTS N° 134-MINSA • Manejo Terapéutico y Preventivo de la Anemia en Niños
          </div>
          <h2 className="text-lg sm:text-2xl font-black text-white flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            Calculadora y Guía de Suplementación con Hierro en Menores
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
            Calcula la dosis exacta de hierro elemental en miligramos, gotas y mililitros según el peso, la edad y la condición clínica (preventiva o tratamiento de anemia) con las presentaciones oficiales del MINSA.
          </p>
        </div>
      </div>

      {/* Grid: Formulario de Cálculo + Resultados */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Panel Izquierdo: Parámetros del Paciente */}
        <div className="lg:col-span-5 bg-[#092233]/95 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          <h3 className="text-xs sm:text-sm font-black text-[#32d2c2] flex items-center gap-2 border-b border-[#12425a] pb-3">
            <Calculator className="w-4 h-4" />
            Datos del Paciente Pediátrico
          </h3>

          {/* Modalidad: Preventivo vs Tratamiento */}
          <div>
            <label className="block text-[11px] text-slate-300 font-semibold mb-1.5">
              Objetivo Clínico de la Administración:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setModalidad('preventivo')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  modalidad === 'preventivo'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-[#0c2a3d]'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Preventivo (Profilaxis)</span>
              </button>
              <button
                type="button"
                onClick={() => setModalidad('tratamiento')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  modalidad === 'tratamiento'
                    ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white border-rose-400 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-[#0c2a3d]'
                }`}
              >
                <HeartPulse className="w-4 h-4" />
                <span>Tratamiento de Anemia</span>
              </button>
            </div>
          </div>

          {/* Condición de Nacimiento */}
          <div>
            <label className="block text-[11px] text-slate-300 font-semibold mb-1.5">
              Condición al Nacer:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCondicionNacimiento('termino')}
                className={`p-2 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                  condicionNacimiento === 'termino'
                    ? 'bg-[#12425a] border-[#32d2c2] text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}
              >
                👶 A Término (≥ 2,500 g)
              </button>
              <button
                type="button"
                onClick={() => setCondicionNacimiento('prematuro')}
                className={`p-2 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                  condicionNacimiento === 'prematuro'
                    ? 'bg-[#12425a] border-[#32d2c2] text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400'
                }`}
              >
                🍼 Prematuro / Bajo Peso
              </button>
            </div>
          </div>

          {/* Peso y Edad */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                Peso Actual (kg):
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="35"
                  value={pesoKg}
                  onChange={(e) => setPesoKg(e.target.value)}
                  placeholder="Ej: 7.5"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-bold focus:border-teal-400 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-bold">kg</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                Edad del Niño (meses):
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="59"
                  value={edadMeses}
                  onChange={(e) => setEdadMeses(e.target.value)}
                  placeholder="Ej: 5"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-bold focus:border-teal-400 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-bold">meses</span>
              </div>
            </div>
          </div>

          {/* Si es tratamiento: Hemoglobina */}
          {modalidad === 'tratamiento' && (
            <div>
              <label className="block text-[11px] text-rose-300 font-semibold mb-1">
                Dosaje de Hemoglobina (g/dl):
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  min="3"
                  max="18"
                  value={hemoglobina}
                  onChange={(e) => setHemoglobina(e.target.value)}
                  placeholder="Ej: 10.2"
                  className="w-full bg-slate-950 border border-rose-500/40 rounded-xl px-3 py-2 text-sm text-rose-300 font-bold focus:border-rose-400 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-bold">g/dl</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Punto de corte a nivel del mar: Anemia leve (10.0 a 10.9), Moderada (7.0 a 9.9), Severa (&lt; 7.0).
              </p>
            </div>
          )}

          {/* Alerta de advertencia clínica */}
          {alertaClinica && (
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/50 text-xs text-amber-200 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{alertaClinica}</span>
            </div>
          )}
        </div>

        {/* Panel Derecho: Prescripción Exacta y Dosificación por Presentación */}
        <div className="lg:col-span-7 bg-[#092233]/95 p-5 sm:p-6 rounded-2xl border border-teal-500/40 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#12425a] pb-3">
            <div>
              <span className="text-[10px] font-black uppercase text-[#32d2c2] tracking-wider block">
                Prescripción Clínica Oficial (NTS N° 134-MINSA)
              </span>
              <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                {dosisDescripcion}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">Dosis Ponderal</span>
              <span className="text-sm sm:text-base font-black text-teal-300">
                {dosisMgKg} mg / kg / día
              </span>
            </div>
          </div>

          {/* Dosis total en mg */}
          <div className="bg-gradient-to-r from-[#072638] via-[#0b334a] to-[#072638] p-4 rounded-xl border border-teal-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-300 block">Dosis Total Diaria de Hierro Elemental:</span>
              <p className="text-2xl sm:text-3xl font-black text-[#32d2c2]">
                {totalMgElemental} <span className="text-sm font-semibold text-white">mg Fe elemental / día</span>
              </p>
            </div>
            <div className="text-right text-xs text-slate-400">
              <p>Peso: <strong className="text-white">{pesoNum} kg</strong></p>
              <p>Edad: <strong className="text-white">{edadNum} meses</strong></p>
            </div>
          </div>

          {/* Tarjetas de Presentaciones Farmacológicas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-300 tracking-wider">
              Dosis Exacta según Tipo y Presentación de Hierro:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* 1. Gotas Sulfato Ferroso */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" />
                    Sulfato Ferroso (Gotas)
                  </span>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    25 mg / 1 ml
                  </span>
                </div>
                <p className="text-lg font-black text-white">
                  {gotasSulfatoFerroso} <span className="text-xs font-semibold text-teal-300">gotas / día</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  (Equivalencia: 1 gota = 1.25 mg Fe elemental). Dosis única diaria.
                </p>
              </div>

              {/* 2. Gotas Complejo Polimaltosado */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" />
                    Hierro Polimaltosado (Gotas)
                  </span>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    50 mg / 1 ml
                  </span>
                </div>
                <p className="text-lg font-black text-white">
                  {gotasPolimaltosado} <span className="text-xs font-semibold text-teal-300">gotas / día</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  (Equivalencia: 1 gota = 2.5 mg Fe elemental). Mejor tolerancia gástrica, no mancha dientes.
                </p>
              </div>

              {/* 3. Jarabe Sulfato Ferroso */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <Pill className="w-3.5 h-3.5" />
                    Sulfato Ferroso (Jarabe)
                  </span>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    15 mg / 5 ml
                  </span>
                </div>
                <p className="text-lg font-black text-white">
                  {mlJarabeSulfato} <span className="text-xs font-semibold text-teal-300">ml / día</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  (Equivalencia: 1 ml = 3 mg Fe elemental). Recomendado en mayores de 1 año.
                </p>
              </div>

              {/* 4. Jarabe Polimaltosado */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-violet-300 flex items-center gap-1.5">
                    <Pill className="w-3.5 h-3.5" />
                    Hierro Polimaltosado (Jarabe)
                  </span>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    50 mg / 5 ml
                  </span>
                </div>
                <p className="text-lg font-black text-white">
                  {mlJarabePolimaltosado} <span className="text-xs font-semibold text-teal-300">ml / día</span>
                </p>
                <p className="text-[10px] text-slate-400">
                  (Equivalencia: 1 ml = 10 mg Fe elemental). Mayor concentración por mililitro.
                </p>
              </div>
            </div>
          </div>

          {/* Duración y Recomendación Clínica */}
          <div className="bg-[#061824] p-3.5 rounded-xl border border-[#12425a] space-y-1.5 text-xs text-slate-300">
            <p>
              <strong className="text-teal-300">📅 Esquema y Duración: </strong>
              {duracionTexto}
            </p>
            <p>
              <strong className="text-amber-300">🍼 Presentación Sugerida: </strong>
              {presentacionRecomendada}
            </p>
          </div>
        </div>
      </div>

      {/* Reglas de Oro para la Consejería de Enfermería a la Madre */}
      <div className="bg-gradient-to-br from-[#072638] to-[#061c29] p-5 sm:p-6 rounded-2xl border border-teal-500/30 space-y-4 shadow-xl">
        <h3 className="text-sm sm:text-base font-black text-[#32d2c2] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Reglas de Oro de Consejería de Enfermería para la Madre / Cuidador
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs text-slate-200">
          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <strong className="text-emerald-400 block font-bold">1. Momento de Administración</strong>
            <p className="leading-relaxed">
              Administrar preferentemente en una sola toma al día, alejado de las comidas principales (media hora antes o dos horas después), para evitar que los alimentos interfieran en la absorción.
            </p>
          </div>

          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <strong className="text-cyan-400 block font-bold">2. Favorecedores vs. Inhibidores</strong>
            <p className="leading-relaxed">
              Acompañar siempre con cítricos o frutas ricas en Vitamina C (naranja, mandarina, camu camu). <strong>NUNCA administrar con leche, yogurt ni fórmulas lácteas</strong>, ya que el calcio anula la absorción del hierro.
            </p>
          </div>

          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <strong className="text-amber-400 block font-bold">3. Efectos Normales e Inocuos</strong>
            <p className="leading-relaxed">
              Advertir a la madre que las deposiciones del bebé se tornarán de color verde oscuro o negro; esto es normal y no representa sangre ni peligro. Con el sulfato ferroso puede haber ligero tinte dental transitorio que se remueve con la higiene.
            </p>
          </div>
        </div>
      </div>

      {/* Tabla Oficial Resumen de la NTS N° 134-MINSA */}
      <div className="bg-[#092233]/90 rounded-2xl border border-[#12425a] overflow-hidden shadow-xl">
        <div className="bg-[#082f49] px-4 py-3 border-b border-[#164e63] flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#32d2c2]" />
            Tabla Maestra de Dosificación de Hierro (NTS N° 134-MINSA / Norma Oficial)
          </h4>
          <span className="text-[10px] text-teal-300 font-bold">MINSA Perú</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900/90 text-teal-200 border-b border-slate-800">
                <th className="p-3 font-bold">Grupo Poblacional</th>
                <th className="p-3 font-bold">Edad de Inicio</th>
                <th className="p-3 font-bold">Dosis Diaria</th>
                <th className="p-3 font-bold">Presentación y Duración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              <tr className="hover:bg-slate-900/50">
                <td className="p-3 font-bold text-white">Prematuros / Bajo Peso (&lt; 2,500 g) - Profilaxis</td>
                <td className="p-3">A los 30 días de vida</td>
                <td className="p-3 text-emerald-400 font-bold">2 mg / kg / día</td>
                <td className="p-3">Gotas de Sulfato Ferroso o Polimaltosado hasta los 12 meses.</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="p-3 font-bold text-white">Niños a Término (≥ 2,500 g) - Profilaxis</td>
                <td className="p-3">A los 4 meses cumplidos (120 días)</td>
                <td className="p-3 text-emerald-400 font-bold">2 mg / kg / día</td>
                <td className="p-3">Gotas hasta los 6 meses (180 días). Luego micronutrientes.</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="p-3 font-bold text-white">Niños de 6 a 35 meses - Profilaxis General</td>
                <td className="p-3">Desde los 6 meses de edad</td>
                <td className="p-3 text-emerald-400 font-bold">1 sobre / día (o 2 mg/kg/d)</td>
                <td className="p-3">Micronutrientes en polvo por 12 meses continuos (o jarabe 3 meses al año).</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="p-3 font-bold text-white">Tratamiento de Anemia Leve a Moderada</td>
                <td className="p-3">Desde el diagnóstico (tamizaje a los 6 meses)</td>
                <td className="p-3 text-rose-400 font-bold">3 mg / kg / día</td>
                <td className="p-3">Gotas o Jarabe por 6 meses continuos (Control de Hb al mes, 3m y 6m).</td>
              </tr>
              <tr className="hover:bg-slate-900/50">
                <td className="p-3 font-bold text-white">Tratamiento de Anemia en Prematuros</td>
                <td className="p-3">Desde el diagnóstico con Hb confirmada</td>
                <td className="p-3 text-rose-400 font-bold">3 a 4 mg / kg / día</td>
                <td className="p-3">Gotas de hierro por 6 meses continuos con vigilancia hematológica.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
