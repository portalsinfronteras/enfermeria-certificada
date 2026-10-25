import React, { useState } from 'react';
import { Scale, Heart, Info, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImcTab: React.FC = () => {
  const [group, setGroup] = useState<'adulto' | 'pediatrico'>('adulto');
  const [sex, setSex] = useState<'M' | 'F'>('M');
  const [ageYears, setAgeYears] = useState<string>('35');
  const [weight, setWeight] = useState<string>('68.5');
  const [heightCm, setHeightCm] = useState<string>('165');

  const w = parseFloat(weight) || 0;
  const hCm = parseFloat(heightCm) || 0;
  const hM = hCm / 100;

  const imc = hM > 0 && w > 0 ? w / (hM * hM) : 0;

  // Body Surface Area (Mosteller formula)
  const bsa = hCm > 0 && w > 0 ? Math.sqrt((w * hCm) / 3600) : 0;

  // Ideal weight range based on WHO BMI 18.5 - 24.9
  const idealWeightMin = hM > 0 ? 18.5 * (hM * hM) : 0;
  const idealWeightMax = hM > 0 ? 24.9 * (hM * hM) : 0;

  const getStatus = () => {
    if (imc <= 0) return { label: 'Esperando datos', color: 'slate', desc: 'Ingrese peso y talla para iniciar la evaluación nutricional.' };

    if (group === 'adulto') {
      if (imc < 18.5) {
        return {
          label: 'Bajo Peso / Delgadez',
          color: 'amber',
          badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          desc: 'Riesgo nutricional por déficit calórico-proteico. Evaluar albúmina, hemoglobina e ingesta calórica diaria.',
          action: 'Fomentar dieta hipercalórica e hiperproteica, descartar síndrome de malabsorción o patología crónica.'
        };
      } else if (imc < 25) {
        return {
          label: 'Eunutrido / Peso Normal',
          color: 'emerald',
          badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          desc: 'Estado nutricional adecuado según criterios de la Organización Mundial de la Salud (OMS).',
          action: 'Mantener hábitos de alimentación balanceada y actividad física regular de al menos 150 min/semana.'
        };
      } else if (imc < 30) {
        return {
          label: 'Sobrepeso',
          color: 'amber',
          badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          desc: 'Riesgo cardiovascular y metabólico moderado. Aumento de adiposidad corporal.',
          action: 'Educación en reducción de carbohidratos simples, control de lípidos en sangre y plan de ejercicios aeróbicos.'
        };
      } else if (imc < 35) {
        return {
          label: 'Obesidad Clase I (Leve)',
          color: 'orange',
          badgeClass: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
          desc: 'Riesgo elevado de hipertensión arterial, dislipidemia, diabetes mellitus tipo 2 y esteatosis hepática.',
          action: 'Manejo multidisciplinario con nutricionista y médico. Vigilancia estricta de presión arterial y glicemia.'
        };
      } else if (imc < 40) {
        return {
          label: 'Obesidad Clase II (Moderada)',
          color: 'rose',
          badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          desc: 'Riesgo muy alto de complicaciones cardiovasculares y síndrome de apnea obstructiva del sueño (SAHOS).',
          action: 'Intervención clínica intensiva, evaluación cardiológica integral y monitoreo de perfil metabólico.'
        };
      } else {
        return {
          label: 'Obesidad Clase III (Mórbida)',
          color: 'red',
          badgeClass: 'bg-red-500/20 text-red-300 border-red-500/40',
          desc: 'Riesgo extremo para la salud con alta morbimortalidad cardiovascular y respiratoria.',
          action: 'Considerar evaluación para cirugía bariátrica o tratamiento especializado de tercer nivel.'
        };
      }
    } else {
      // Pediátrico: referencia pedagógica por percentiles OMS
      if (imc < 14) {
        return {
          label: 'Z-Score < -2 DE (Bajo Peso / Desnutrición)',
          color: 'rose',
          badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          desc: 'Déficit ponderal infantil. Riesgo de retraso del crecimiento y defensas inmunitarias reducidas.',
          action: 'Derivación a CRED y programa de recuperación nutricional del MINSA. Suplementación con hierro y micronutrientes.'
        };
      } else if (imc < 18) {
        return {
          label: 'Z-Score entre -2 DE y +1 DE (Adecuado)',
          color: 'emerald',
          badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          desc: 'Crecimiento y desarrollo armónico dentro del patrón estándar de referencia OMS.',
          action: 'Continuar controles regulares en el consultorio CRED según cronograma etario.'
        };
      } else if (imc < 20) {
        return {
          label: 'Z-Score > +1 DE (Sobrepeso Infantil)',
          color: 'amber',
          badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          desc: 'Sobrepeso en etapa de crecimiento. Factores de riesgo asociados a sedentarismo o comida ultraprocesada.',
          action: 'Orientar a los padres a eliminar bebidas azucaradas, fomentar el juego activo diario y porciones saludables.'
        };
      } else {
        return {
          label: 'Z-Score > +2 DE (Obesidad Infantil)',
          color: 'red',
          badgeClass: 'bg-red-500/20 text-red-300 border-red-500/40',
          desc: 'Obesidad infantil con riesgo de resistencia a la insulina precoz y alteraciones osteoarticulares.',
          action: 'Intervención familiar integral en hábitos de vida saludable, evitar pantallas durante las comidas.'
        };
      }
    }
  };

  const status = getStatus();

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-3 items-start md:items-center justify-between shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#22b8af]" />
            Evaluación de IMC, Z-Score OMS & Superficie Corporal
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Diagnóstico del estado nutricional antropométrico según directrices OMS / MINSA Perú.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Column */}
        <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          {/* Target Group */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Grupo Etario a Evaluar
            </label>
            <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setGroup('adulto')}
                className={`py-2 rounded-lg font-medium transition cursor-pointer ${
                  group === 'adulto' ? 'bg-[#1ea69e] text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Adulto (≥ 18 años)
              </button>
              <button
                type="button"
                onClick={() => setGroup('pediatrico')}
                className={`py-2 rounded-lg font-medium transition cursor-pointer ${
                  group === 'pediatrico' ? 'bg-[#1ea69e] text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Niño / Pediátrico (&lt; 18)
              </button>
            </div>
          </div>

          {/* Sex & Age */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Sexo Biológico</label>
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value as 'M' | 'F')}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Edad (Años)</label>
              <input
                type="number"
                min="0"
                max="120"
                value={ageYears}
                onChange={(e) => setAgeYears(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Weight & Height */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="68.5"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Talla / Estatura (cm)
              </label>
              <input
                type="number"
                step="0.5"
                min="30"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="165"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
              />
            </div>
          </div>

          {/* Reference Info */}
          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
            <span className="text-cyan-400 font-semibold block flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Fórmula de Quetelet:
            </span>
            <p>IMC = Peso (kg) / [ Talla (m) ]²</p>
            <p className="text-[11px] text-slate-500">
              Superficie Corporal (Mosteller) = √[ (Peso × Talla en cm) / 3600 ]
            </p>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#092233]/90 border border-[#12425a] rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-6">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 block">
                Índice de Masa Corporal (IMC)
              </span>

              <div className="text-5xl sm:text-6xl font-black text-[#3ee0d0] tracking-tight">
                {imc > 0 ? imc.toFixed(1) : '--'}
                <span className="text-lg font-normal text-slate-400 ml-2">kg/m²</span>
              </div>

              <div className="inline-block">
                <span
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border shadow-sm ${
                    status.badgeClass || 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {status.label}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto pt-2 leading-relaxed">
                {status.desc}
              </p>
            </div>

            {/* Metric Secondary Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800 pt-5">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Rango de Peso Ideal (OMS)</span>
                <span className="text-xl font-bold text-emerald-400">
                  {idealWeightMin > 0 ? `${idealWeightMin.toFixed(1)} - ${idealWeightMax.toFixed(1)} kg` : '--'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  Basado en IMC 18.5 - 24.9 kg/m²
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block">Superficie Corporal (SC)</span>
                <span className="text-xl font-bold text-cyan-400">
                  {bsa > 0 ? `${bsa.toFixed(2)} m²` : '--'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  Fórmula de Mosteller para dosificación
                </span>
              </div>
            </div>

            {status.action && (
              <div className="bg-sky-950/30 border border-sky-800/40 p-4 rounded-xl text-xs text-sky-200 space-y-1">
                <strong className="text-sky-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Intervención y Cuidados de Enfermería:
                </strong>
                <p className="leading-relaxed">{status.action}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
