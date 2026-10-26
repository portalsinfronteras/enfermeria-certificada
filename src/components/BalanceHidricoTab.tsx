import React, { useState, useMemo } from 'react';
import {
  Droplets,
  Calculator,
  TrendingUp,
  TrendingDown,
  Flame,
  Thermometer,
  Activity,
  FileText,
  Printer,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  Weight,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Trash2
} from 'lucide-react';

type BalanceMode = 'simple' | 'estricto';

interface IngresoItem {
  id: string;
  concept: string;
  amount: number; // mL
}

interface EgresoItem {
  id: string;
  concept: string;
  amount: number; // mL
}

export const BalanceHidricoTab: React.FC = () => {
  // Mode Selection
  const [mode, setMode] = useState<BalanceMode>('simple');

  // Physiological Parameters - Initialized clean (empty)
  const [patientWeight, setPatientWeight] = useState<number | ''>('');
  const [balanceHours, setBalanceHours] = useState<number>(12); // 6h, 12h, 24h
  const [temperature, setTemperature] = useState<number | ''>(''); // °C
  const [respiratoryRate, setRespiratoryRate] = useState<number | ''>(''); // rpm
  const [sweatLevel, setSweatLevel] = useState<'ninguna' | 'leve' | 'moderada' | 'profusa'>('ninguna');

  // Simple Mode Inputs - Initialized clean (empty)
  const [simpleOral, setSimpleOral] = useState<number | ''>('');
  const [simpleParenteral, setSimpleParenteral] = useState<number | ''>('');
  const [simpleDiuresis, setSimpleDiuresis] = useState<number | ''>('');
  const [simpleDeposiciones, setSimpleDeposiciones] = useState<number | ''>('');
  const [simpleVomitos, setSimpleVomitos] = useState<number | ''>('');
  const [simpleDrenajes, setSimpleDrenajes] = useState<number | ''>('');

  // Strict Mode Custom Items List - Initialized clean (empty list)
  const [strictIngresos, setStrictIngresos] = useState<IngresoItem[]>([]);
  const [strictEgresos, setStrictEgresos] = useState<EgresoItem[]>([]);

  // New item form inputs
  const [newIngresoConcept, setNewIngresoConcept] = useState('');
  const [newIngresoAmount, setNewIngresoAmount] = useState<number | ''>('');
  const [newEgresoConcept, setNewEgresoConcept] = useState('');
  const [newEgresoAmount, setNewEgresoAmount] = useState<number | ''>('');

  // Helper numeric values
  const weightNum = typeof patientWeight === 'number' ? patientWeight : Number(patientWeight) || 0;
  const tempNum = typeof temperature === 'number' ? temperature : Number(temperature) || 37.0;
  const respNum = typeof respiratoryRate === 'number' ? respiratoryRate : Number(respiratoryRate) || 18;

  const oralNum = Number(simpleOral) || 0;
  const parenteralNum = Number(simpleParenteral) || 0;
  const diuresisNum = Number(simpleDiuresis) || 0;
  const deposicionesNum = Number(simpleDeposiciones) || 0;
  const vomitosNum = Number(simpleVomitos) || 0;
  const drenajesNum = Number(simpleDrenajes) || 0;

  // Automatic Endogenous Water Calculation (Agua Metabólica / Endógena)
  // Standard formula: 0.5 mL / kg / hora  (o ~300-500 mL en 24h en adulto de 70kg -> ~0.2 - 0.5 mL/kg/h)
  const aguaEndogena = useMemo(() => {
    if (weightNum <= 0) return 0;
    return Math.round(0.5 * weightNum * (balanceHours / 24) * 10);
  }, [weightNum, balanceHours]);

  // Automatic Insensible Loss Calculation (Pérdidas Insensibles)
  // Standard formula: Peso (kg) × 0.5 mL × Horas  (en un adulto de 70kg/12h = 70 * 0.5 * 12 = 420 mL)
  // Fever correction: +0.6 mL/kg/h por cada °C mayor a 37°C
  // Tachypnea correction (>20 rpm): +0.2 mL/kg/h por cada 5 rpm sobre 20
  // Sweating: Leve (+100mL), Moderada (+250mL), Profusa (+500mL por 24h prorrateado)
  const perdidasInsensibles = useMemo(() => {
    if (weightNum <= 0) return 0;
    let baseLoss = weightNum * 0.5 * balanceHours; // Normal base loss

    // Fever
    if (tempNum > 37.0) {
      const feverDegrees = tempNum - 37.0;
      baseLoss += 0.6 * weightNum * balanceHours * feverDegrees;
    }

    // Tachypnea
    if (respNum > 20) {
      const extraRpm = Math.floor((respNum - 20) / 5) + 1;
      baseLoss += 0.2 * weightNum * balanceHours * extraRpm;
    }

    // Sweating
    if (sweatLevel === 'leve') baseLoss += 100 * (balanceHours / 24);
    if (sweatLevel === 'moderada') baseLoss += 250 * (balanceHours / 24);
    if (sweatLevel === 'profusa') baseLoss += 500 * (balanceHours / 24);

    return Math.round(baseLoss);
  }, [weightNum, balanceHours, tempNum, respNum, sweatLevel]);

  // Calculations for Simple Mode
  const simpleTotalIngresos = useMemo(() => {
    return oralNum + parenteralNum + aguaEndogena;
  }, [oralNum, parenteralNum, aguaEndogena]);

  const simpleTotalEgresos = useMemo(() => {
    return diuresisNum + deposicionesNum + vomitosNum + drenajesNum + perdidasInsensibles;
  }, [diuresisNum, deposicionesNum, vomitosNum, drenajesNum, perdidasInsensibles]);

  // Calculations for Strict Mode
  const strictTotalIngresos = useMemo(() => {
    const sum = strictIngresos.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    return sum + aguaEndogena;
  }, [strictIngresos, aguaEndogena]);

  const strictTotalEgresos = useMemo(() => {
    const sum = strictEgresos.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    return sum + perdidasInsensibles;
  }, [strictEgresos, perdidasInsensibles]);

  // Active totals
  const totalIngresos = mode === 'simple' ? simpleTotalIngresos : strictTotalIngresos;
  const totalEgresos = mode === 'simple' ? simpleTotalEgresos : strictTotalEgresos;
  const balanceTotal = totalIngresos - totalEgresos;

  // Active diuresis for Urinary Output calculation
  const currentDiuresis = useMemo(() => {
    if (mode === 'simple') return diuresisNum;
    const diuresisItem = strictEgresos.find((e) =>
      e.concept.toLowerCase().includes('diuresis') || e.concept.toLowerCase().includes('orina')
    );
    return diuresisItem ? diuresisItem.amount : 0;
  }, [mode, diuresisNum, strictEgresos]);

  // Gasto Urinario (mL / kg / hora)
  const gastoUrinario = useMemo(() => {
    if (weightNum <= 0 || !balanceHours) return 0;
    const val = currentDiuresis / (weightNum * balanceHours);
    return Number(val.toFixed(2));
  }, [currentDiuresis, weightNum, balanceHours]);

  // Status indicators for Urinary Output
  const gastoUrinarioStatus = useMemo(() => {
    if (weightNum <= 0 || currentDiuresis === 0) {
      return { label: 'Pendiente de datos', color: 'text-slate-400 bg-slate-900/50 border-slate-700/50' };
    }
    if (gastoUrinario < 0.3) return { label: 'Oliguria Severa / Anuria', color: 'text-rose-400 bg-rose-950/50 border-rose-500/50' };
    if (gastoUrinario < 0.5) return { label: 'Oliguria Leve-Moderada', color: 'text-amber-400 bg-amber-950/50 border-amber-500/50' };
    if (gastoUrinario <= 1.5) return { label: 'Gasto Urinario Normal', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/50' };
    if (gastoUrinario <= 3.0) return { label: 'Diuresis Aumentada', color: 'text-cyan-300 bg-cyan-950/50 border-cyan-500/50' };
    return { label: 'Poliuria', color: 'text-sky-300 bg-sky-950/50 border-sky-500/50' };
  }, [gastoUrinario, weightNum, currentDiuresis]);

  // Balance Interpretation Status
  const balanceStatus = useMemo(() => {
    if (Math.abs(balanceTotal) <= 100) {
      return {
        type: 'neutro',
        title: 'BALANCE NEUTRO (EQUILIBRADO)',
        desc: 'El aporte de líquidos se encuentra dentro del rango de equilibrio respecto a las pérdidas corporales.',
        color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40',
        nanda: '00025 - Riesgo de desequilibrio del volumen de líquidos'
      };
    } else if (balanceTotal > 100) {
      return {
        type: 'positivo',
        title: `BALANCE POSITIVO (+${balanceTotal} mL) - RETENCIÓN`,
        desc: 'Ingreso superior a los egresos. Evaluar signos de sobrecarga hídrica, edema, ingurgitación yugular o crepitantes.',
        color: 'text-amber-300 bg-amber-950/40 border-amber-500/40',
        nanda: '00026 - Exceso de volumen de líquidos'
      };
    } else {
      return {
        type: 'negativo',
        title: `BALANCE NEGATIVO (${balanceTotal} mL) - DÉFICIT`,
        desc: 'Pérdidas superiores a los ingresos. Evaluar signos de deshidratación, hipotensión o hemoconcentración.',
        color: 'text-rose-300 bg-rose-950/40 border-rose-500/40',
        nanda: '00027 - Deficiencia de volumen de líquidos'
      };
    }
  }, [balanceTotal]);

  // Strict mode item management
  const addStrictIngreso = () => {
    const amt = typeof newIngresoAmount === 'number' ? newIngresoAmount : Number(newIngresoAmount);
    if (!newIngresoConcept.trim() || !amt || amt <= 0) return;
    setStrictIngresos([
      ...strictIngresos,
      { id: Date.now().toString(), concept: newIngresoConcept.trim(), amount: amt }
    ]);
    setNewIngresoConcept('');
    setNewIngresoAmount('');
  };

  const removeStrictIngreso = (id: string) => {
    setStrictIngresos(strictIngresos.filter((i) => i.id !== id));
  };

  const addStrictEgreso = () => {
    const amt = typeof newEgresoAmount === 'number' ? newEgresoAmount : Number(newEgresoAmount);
    if (!newEgresoConcept.trim() || !amt || amt <= 0) return;
    setStrictEgresos([
      ...strictEgresos,
      { id: Date.now().toString(), concept: newEgresoConcept.trim(), amount: amt }
    ]);
    setNewEgresoConcept('');
    setNewEgresoAmount('');
  };

  const removeStrictEgreso = (id: string) => {
    setStrictEgresos(strictEgresos.filter((e) => e.id !== id));
  };

  const handleReset = () => {
    setPatientWeight('');
    setBalanceHours(12);
    setTemperature('');
    setRespiratoryRate('');
    setSweatLevel('ninguna');
    setSimpleOral('');
    setSimpleParenteral('');
    setSimpleDiuresis('');
    setSimpleDeposiciones('');
    setSimpleVomitos('');
    setSimpleDrenajes('');
    setStrictIngresos([]);
    setStrictEgresos([]);
    setNewIngresoConcept('');
    setNewIngresoAmount('');
    setNewEgresoConcept('');
    setNewEgresoAmount('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-[#071d2b] via-[#0c2f45] to-[#071d2b] rounded-2xl p-5 sm:p-6 border border-[#12425a] shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-[#22b8af]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#179c94] to-[#22b8af] text-white shadow-lg shadow-[#22b8af]/30 shrink-0">
              <Droplets className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  BALANCE HÍDRICO DE ENFERMERÍA
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#22b8af]/20 text-[#42edd8] border border-[#22b8af]/40">
                  Simple / Estricto
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Control de Ingresos y Egresos, cálculo automático de Pérdidas Insensibles, Agua Metabólica y Gasto Urinario (mL/kg/h).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <button
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-[#092538] hover:bg-[#12425a] text-slate-300 hover:text-white transition text-xs font-semibold flex items-center gap-1 cursor-pointer border border-[#144863]"
              title="Reiniciar todos los campos"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Limpiar Campos</span>
            </button>
          </div>
        </div>

        {/* Mode Selector Switcher */}
        <div className="mt-5 pt-4 border-t border-[#12425a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-semibold">Modalidad de Balance:</span>
            <div className="bg-[#05131d] p-1 rounded-xl border border-[#175270] flex items-center gap-1">
              <button
                onClick={() => setMode('simple')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition flex items-center gap-1.5 ${
                  mode === 'simple'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Balance Simple</span>
              </button>
              <button
                onClick={() => setMode('estricto')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition flex items-center gap-1.5 ${
                  mode === 'estricto'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Balance Estricto (UCI / Cuidados Críticos)</span>
              </button>
            </div>
          </div>

          <div className="text-xs text-[#42edd8] bg-[#092638] px-3 py-1 rounded-lg border border-[#144863]">
            {mode === 'simple' ? '📋 Campos generales por vías' : '🔬 Registro detallado ítem por ítem'}
          </div>
        </div>
      </div>

      {/* PHYSIOLOGICAL & BALANCE PARAMETERS SECTION */}
      <div className="bg-[#071d2b] border border-[#12425a] rounded-2xl p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
          <div className="flex items-center gap-2 text-sm font-bold text-[#42edd8]">
            <Activity className="w-4 h-4 text-[#22b8af]" />
            <h3>PARÁMETROS FISIOLÓGICOS DEL BALANCE</h3>
          </div>
          <span className="text-xs text-slate-400">
            {weightNum > 0 ? `Peso activo: ${weightNum} kg` : 'Ingrese peso para calcular pérdidas y agua metabólica'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {/* Patient Weight (kg) */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold block flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Weight className="w-3.5 h-3.5 text-[#22b8af]" />
                Peso Corporal (kg):
              </span>
              <span className="text-[#42edd8] font-bold">{weightNum > 0 ? `${weightNum} kg` : ''}</span>
            </label>
            <input
              type="number"
              min="1"
              max="250"
              value={patientWeight}
              onChange={(e) => setPatientWeight(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Ej. 70"
              className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
            />
          </div>

          {/* Balance Duration */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold block flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#22b8af]" />
              Turno / Horas:
            </label>
            <select
              value={balanceHours}
              onChange={(e) => setBalanceHours(Number(e.target.value))}
              className="w-full bg-[#05131d] border border-[#144863] text-white rounded-xl px-3 py-2 focus:outline-none focus:border-[#22b8af] cursor-pointer"
            >
              <option value={6}>6 horas (Turno Mañana/Tarde)</option>
              <option value={12}>12 horas (Turno Noche / 12h)</option>
              <option value={24}>24 horas (Balance Diario Total)</option>
            </select>
          </div>

          {/* Temperature (°C) for Fever Correction */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold block flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-[#22b8af]" />
                Temperatura (°C):
              </span>
              <span className={tempNum > 37.5 ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                {temperature !== '' ? `${temperature} °C` : ''}
              </span>
            </label>
            <input
              type="number"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Ej. 37.0"
              className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
            />
          </div>

          {/* Respiratory Rate */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold block flex items-center justify-between">
              <span>Frecuencia Resp. (rpm):</span>
              <span className={respNum > 20 ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                {respiratoryRate !== '' ? `${respiratoryRate} rpm` : ''}
              </span>
            </label>
            <input
              type="number"
              value={respiratoryRate}
              onChange={(e) => setRespiratoryRate(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Ej. 18"
              className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
            />
          </div>

          {/* Sweat Level */}
          <div className="space-y-1">
            <label className="text-slate-300 font-semibold block">Sudoración / Diaforesis:</label>
            <select
              value={sweatLevel}
              onChange={(e) => setSweatLevel(e.target.value as any)}
              className="w-full bg-[#05131d] border border-[#144863] text-white rounded-xl px-3 py-2 focus:outline-none focus:border-[#22b8af] cursor-pointer"
            >
              <option value="ninguna">Ausente / Normal</option>
              <option value="leve">Leve (+100 mL)</option>
              <option value="moderada">Moderada (+250 mL)</option>
              <option value="profusa">Profusa (+500 mL)</option>
            </select>
          </div>
        </div>
      </div>

      {/* INPUT TABLES: INGRESOS & EGRESOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: INGRESOS (FLUID INTAKE) */}
        <div className="bg-[#071d2b] border border-[#12425a] rounded-2xl p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
              <h3 className="text-sm sm:text-base font-bold text-emerald-400 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                INGRESOS (LÍQUIDOS ADMINISTRADOS)
              </h3>
              <span className="text-xs font-black text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/40">
                Total: +{totalIngresos} mL
              </span>
            </div>

            {/* Calculated Endogenous Water Info */}
            <div className="bg-[#051824] p-3 rounded-xl border border-[#0e3b52] flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-teal-300 block">Agua Metabólica / Endógena (Calculado):</span>
                <span className="text-[11px] text-slate-400">
                  {weightNum > 0
                    ? `Fórmula: 0.5 mL × ${weightNum} kg × ${balanceHours}h / 24h`
                    : 'Requiere ingresar el peso del paciente'}
                </span>
              </div>
              <span className="text-sm font-black text-[#42edd8] bg-[#09293d] px-2.5 py-1 rounded-lg border border-[#16557a]">
                +{aguaEndogena} mL
              </span>
            </div>

            {/* Simple Mode Form */}
            {mode === 'simple' && (
              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Vía Oral / Nutrición Enteral (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleOral}
                    onChange={(e) => setSimpleOral(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Vía Parenteral / EV / Transfusiones / Fármacos (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleParenteral}
                    onChange={(e) => setSimpleParenteral(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>
            )}

            {/* Strict Mode Custom Items */}
            {mode === 'estricto' && (
              <div className="space-y-3">
                {/* List of Ingresos */}
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                  {strictIngresos.length === 0 ? (
                    <div className="p-4 rounded-xl bg-[#05131d] border border-dashed border-[#144863] text-center text-xs text-slate-400">
                      Sin ingresos detallados registrados. Agregue el primero abajo.
                    </div>
                  ) : (
                    strictIngresos.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-[#051824] p-2.5 rounded-xl border border-[#0e3b52] text-xs"
                      >
                        <span className="text-slate-200 font-medium">{item.concept}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-emerald-300">+{item.amount} mL</span>
                          <button
                            onClick={() => removeStrictIngreso(item.id)}
                            className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                            title="Eliminar ítem"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Add new ingreso form */}
                <div className="bg-[#05131d] p-3 rounded-xl border border-[#144863] space-y-2 text-xs">
                  <span className="font-bold text-teal-300 block">Agregar nuevo Ingreso:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <input
                      type="text"
                      value={newIngresoConcept}
                      onChange={(e) => setNewIngresoConcept(e.target.value)}
                      placeholder="Concepto (ej. Solución Salina, Clindamicina EV)"
                      className="sm:col-span-7 bg-[#071d2b] border border-[#175270] rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500"
                    />
                    <input
                      type="number"
                      value={newIngresoAmount}
                      onChange={(e) => setNewIngresoAmount(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="Volumen (mL)"
                      className="sm:col-span-3 bg-[#071d2b] border border-[#175270] rounded-lg px-2.5 py-1.5 text-white font-bold placeholder-slate-500"
                    />
                    <button
                      onClick={addStrictIngreso}
                      className="sm:col-span-2 bg-[#179c94] hover:bg-[#22b8af] text-white rounded-lg p-1.5 font-bold flex items-center justify-center cursor-pointer transition"
                      title="Agregar ingreso"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#12425a] flex items-center justify-between text-xs font-bold text-emerald-300">
            <span>SUBTOTAL INGRESOS:</span>
            <span className="text-base">+{totalIngresos} mL</span>
          </div>
        </div>

        {/* RIGHT: EGRESOS (FLUID LOSSES) */}
        <div className="bg-[#071d2b] border border-[#12425a] rounded-2xl p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
              <h3 className="text-sm sm:text-base font-bold text-rose-400 flex items-center gap-2">
                <ArrowDownRight className="w-5 h-5 text-rose-400" />
                EGRESOS (PÉRDIDAS / ELIMINACIÓN)
              </h3>
              <span className="text-xs font-black text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-500/40">
                Total: -{totalEgresos} mL
              </span>
            </div>

            {/* Calculated Insensible Losses Info */}
            <div className="bg-[#051824] p-3 rounded-xl border border-[#0e3b52] flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-amber-300 block">Pérdidas Insensibles (Calculado):</span>
                <span className="text-[11px] text-slate-400">
                  {weightNum > 0
                    ? `Fórmula base + corrección T° (${tempNum}°C), FR (${respNum} rpm) y sudor (${sweatLevel})`
                    : 'Requiere ingresar el peso del paciente'}
                </span>
              </div>
              <span className="text-sm font-black text-amber-300 bg-[#09293d] px-2.5 py-1 rounded-lg border border-[#16557a]">
                -{perdidasInsensibles} mL
              </span>
            </div>

            {/* Simple Mode Inputs */}
            {mode === 'simple' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Diuresis / Orina (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleDiuresis}
                    onChange={(e) => setSimpleDiuresis(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Deposiciones / Heces (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleDeposiciones}
                    onChange={(e) => setSimpleDeposiciones(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Vómitos / SNG (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleVomitos}
                    onChange={(e) => setSimpleVomitos(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold block">Drenajes / Sondas (mL):</label>
                  <input
                    type="number"
                    min="0"
                    value={simpleDrenajes}
                    onChange={(e) => setSimpleDrenajes(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0 mL"
                    className="w-full bg-[#05131d] border border-[#144863] rounded-xl px-3 py-2 text-white font-bold placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>
            )}

            {/* Strict Mode Custom Items */}
            {mode === 'estricto' && (
              <div className="space-y-3">
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                  {strictEgresos.length === 0 ? (
                    <div className="p-4 rounded-xl bg-[#05131d] border border-dashed border-[#144863] text-center text-xs text-slate-400">
                      Sin egresos detallados registrados. Agregue el primero abajo.
                    </div>
                  ) : (
                    strictEgresos.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-[#051824] p-2.5 rounded-xl border border-[#0e3b52] text-xs"
                      >
                        <span className="text-slate-200 font-medium">{item.concept}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-rose-300">-{item.amount} mL</span>
                          <button
                            onClick={() => removeStrictEgreso(item.id)}
                            className="text-rose-400 hover:text-rose-300 p-1 cursor-pointer"
                            title="Eliminar ítem"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Add new egreso form */}
                <div className="bg-[#05131d] p-3 rounded-xl border border-[#144863] space-y-2 text-xs">
                  <span className="font-bold text-rose-300 block">Agregar nuevo Egreso:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <input
                      type="text"
                      value={newEgresoConcept}
                      onChange={(e) => setNewEgresoConcept(e.target.value)}
                      placeholder="Concepto (ej. Diuresis por sonda, Drenaje Jackson)"
                      className="sm:col-span-7 bg-[#071d2b] border border-[#175270] rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500"
                    />
                    <input
                      type="number"
                      value={newEgresoAmount}
                      onChange={(e) => setNewEgresoAmount(e.target.value === '' ? '' : Number(e.target.value))}
                      placeholder="Volumen (mL)"
                      className="sm:col-span-3 bg-[#071d2b] border border-[#175270] rounded-lg px-2.5 py-1.5 text-white font-bold placeholder-slate-500"
                    />
                    <button
                      onClick={addStrictEgreso}
                      className="sm:col-span-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg p-1.5 font-bold flex items-center justify-center cursor-pointer transition"
                      title="Agregar egreso"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-[#12425a] flex items-center justify-between text-xs font-bold text-rose-300">
            <span>SUBTOTAL EGRESOS:</span>
            <span className="text-base">-{totalEgresos} mL</span>
          </div>
        </div>
      </div>

      {/* FINAL BALANCE RESULT & CLINICAL ANALYSIS CARD */}
      <div className="bg-gradient-to-br from-[#061e2e] via-[#09293e] to-[#061e2e] border-2 border-[#22b8af]/50 rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#144b6e] pb-4">
          <div>
            <span className="text-xs font-extrabold text-[#42edd8] uppercase tracking-wider block">
              RESULTADO DEL BALANCE HÍDRICO EN {balanceHours} HORAS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Cálculo de Balance{' '}
              <span className="text-slate-300 font-normal text-base">
                ({weightNum > 0 ? `${weightNum} kg` : 'Sin peso registrado'}, {balanceHours}h)
              </span>
            </h3>
          </div>

          {/* Big Balance Number Pill */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-300 block">Balance Neto:</span>
              <span
                className={`text-2xl sm:text-3xl font-black ${
                  balanceTotal > 100
                    ? 'text-amber-300'
                    : balanceTotal < -100
                    ? 'text-rose-400'
                    : 'text-emerald-400'
                }`}
              >
                {balanceTotal > 0 ? `+${balanceTotal}` : balanceTotal} mL
              </span>
            </div>
            <div
              className={`p-3 rounded-2xl border ${
                balanceTotal > 100
                  ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
                  : balanceTotal < -100
                  ? 'bg-rose-950/60 border-rose-500/50 text-rose-400'
                  : 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
              }`}
            >
              {balanceTotal > 100 ? (
                <TrendingUp className="w-8 h-8" />
              ) : balanceTotal < -100 ? (
                <TrendingDown className="w-8 h-8" />
              ) : (
                <CheckCircle2 className="w-8 h-8" />
              )}
            </div>
          </div>
        </div>

        {/* 3 Metric Grid: Ingresos - Egresos - Gasto Urinario */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Ingresos Totales */}
          <div className="bg-[#051824] p-4 rounded-xl border border-[#0d3b54] space-y-1">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Total Ingresos (+):</span>
            <span className="text-xl font-bold text-emerald-400">+{totalIngresos} mL</span>
            <p className="text-[11px] text-slate-400">
              Incluye {aguaEndogena} mL de Agua Metabólica.
            </p>
          </div>

          {/* Egresos Totales */}
          <div className="bg-[#051824] p-4 rounded-xl border border-[#0d3b54] space-y-1">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Total Egresos (-):</span>
            <span className="text-xl font-bold text-rose-400">-{totalEgresos} mL</span>
            <p className="text-[11px] text-slate-400">
              Incluye {perdidasInsensibles} mL de Pérdidas Insensibles.
            </p>
          </div>

          {/* Gasto Urinario mL/kg/h */}
          <div className="bg-[#051824] p-4 rounded-xl border border-[#0d3b54] space-y-1">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Gasto Urinario (mL/kg/h):</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white">
                {weightNum > 0 ? `${gastoUrinario} mL/kg/h` : '—'}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${gastoUrinarioStatus.color}`}>
                {gastoUrinarioStatus.label}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {weightNum > 0
                ? `${currentDiuresis} mL de orina en ${balanceHours} horas para ${weightNum} kg.`
                : 'Ingrese el peso para calcular el gasto urinario.'}
            </p>
          </div>
        </div>

        {/* Interpretation & Nursing Assessment Banner */}
        <div className={`p-4 rounded-xl border ${balanceStatus.color} space-y-2`}>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h4 className="text-sm font-bold">{balanceStatus.title}</h4>
          </div>
          <p className="text-xs leading-relaxed">{balanceStatus.desc}</p>
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs gap-2">
            <span>
              <strong>Diagnóstico Enfermero NANDA:</strong> {balanceStatus.nanda}
            </span>
            <span className="text-[11px] opacity-80">
              Evaluación para plan de cuidados NIC/NOC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
