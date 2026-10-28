import React, { useState, useMemo, useEffect } from 'react';
import { diagnosticosData, DiagnosisItem, DosingRule } from '../data/diagnosticosData';
import {
  Stethoscope,
  Search,
  Pill,
  AlertTriangle,
  Info,
  X,
  FileText,
  Activity,
  CheckCircle2,
  ChevronRight,
  Printer,
  Calculator,
  Clock,
  Weight,
  Layers,
  Microscope,
  ShieldAlert,
  Sparkles,
  UserCheck,
  ExternalLink,
  ShieldCheck,
  AlertOctagon,
  Bookmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Clinical maximum daily dose reference table (anti-toxicity thresholds)
const DRUG_MAX_DOSES: Record<string, number> = {
  paracetamol: 4000,
  acetaminofén: 4000,
  amoxicilina: 3000,
  'amoxicilina/clavulanato': 3000,
  ampicilina: 12000,
  ibuprofeno: 2400,
  metamizol: 4000,
  ceftriaxona: 4000,
  ciprofloxacino: 1500,
  claritromicina: 1000,
  azitromicina: 500,
  cefotaxima: 12000,
  cefepima: 6000,
  vancomicina: 2000,
  gentamicina: 350,
  amikacina: 1500,
  meropenem: 6000,
  piperacilina: 16000,
  metronidazol: 4000,
  clindamicina: 2700,
  furosemida: 600,
  espironolactona: 400,
  enalapril: 40,
  losartán: 100,
  captopril: 150,
  omeprazol: 80,
  ranitidina: 300,
  dexametasona: 24,
  prednisona: 80,
  hidrocortisona: 500,
  tramadol: 400,
  morfina: 100,
  salbutamol: 32,
  'bromuro de ipratropio': 2,
};

const getDrugMaxDailyDose = (rule: DosingRule): number => {
  if (rule.maxDoseMgPerDay && rule.maxDoseMgPerDay > 0) {
    return rule.maxDoseMgPerDay;
  }
  const drugLower = rule.drug.toLowerCase();
  for (const [key, max] of Object.entries(DRUG_MAX_DOSES)) {
    if (drugLower.includes(key)) {
      return max;
    }
  }
  // If adult fixed dose has a recognizable number (e.g. "500 mg c/8h" -> 1500mg, "1 g" -> 4000mg)
  if (rule.adultFixedDose) {
    const num = parseInt(rule.adultFixedDose.replace(/\D/g, ''), 10);
    if (!isNaN(num) && num > 0) {
      if (num <= 4) return num * 1000 * 3; // e.g. 1g, 2g
      return num * 4; // e.g. 500mg * 4 = 2000mg
    }
  }
  return 3000; // standard maximum clinical fallback threshold
};

interface CalculatedDose {
  drug: string;
  route: string;
  dosePerDoseMg: number;
  dailyTotalMg: number;
  rawDailyTotalMg: number;
  maxDoseMgPerDay: number;
  isCapped: boolean;
  exceededByMg: number;
  percentOfMax: number;
  volumeMlPerDose: number;
  timesPerDay: number;
  suspensionMgPer5mL?: number;
  notes?: string;
  adultFixedDose?: string;
}

export const DiagnosticosMedicosTab: React.FC = () => {
  const { saveItem, isItemSaved } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedDiagnosisModal, setSelectedDiagnosisModal] = useState<DiagnosisItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(30);

  // Modal Calculator Parameters
  const [patientWeight, setPatientWeight] = useState<number>(70);
  const [customHours, setCustomHours] = useState<number>(8);
  const [activeSection, setActiveSection] = useState<'all' | 'diagnosis' | 'dosing' | 'nursing'>('all');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedDiagnosisModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset pagination count when filter or search changes
  useEffect(() => {
    setVisibleCount(30);
  }, [searchTerm, selectedCategory]);

  const PREFERRED_CHAPTER_ORDER = [
    'Infecciosas y Tropicales',
    'Respiratorias y ORL',
    'Digestivas y Metabólicas',
    'Cardiovasculares',
    'Renales y Reproductor',
    'Musculoesqueléticas y Piel',
    'Neurológicas y Salud Mental',
    'Oncología',
    'Genéticas y Congénitas'
  ];

  const categories = useMemo(() => {
    const set = new Set<string>();
    diagnosticosData.forEach((item) => set.add(item.category));
    const list = Array.from(set);
    list.sort((a, b) => {
      const idxA = PREFERRED_CHAPTER_ORDER.indexOf(a);
      const idxB = PREFERRED_CHAPTER_ORDER.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b);
    });
    return ['Todos', ...list];
  }, []);

  const filteredItems = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return diagnosticosData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory;

      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.cie10.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.symptoms.some((s) => s.toLowerCase().includes(q)) ||
        item.diagnosis.criteria.toLowerCase().includes(q) ||
        item.treatment.firstLine.some(
          (f) =>
            f.drug.toLowerCase().includes(q) ||
            f.notes?.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleOpenModal = (diagnosis: DiagnosisItem) => {
    setSelectedDiagnosisModal(diagnosis);
    setActiveSection('all');
  };

  const handleCloseModal = () => {
    setSelectedDiagnosisModal(null);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to calculate exact dose with maximum daily dose and toxicity threshold enforcement
  const calculateDoseInfo = (rule: DosingRule, weightKg: number, intervalHours: number): CalculatedDose => {
    const timesPerDay = 24 / (intervalHours > 0 ? intervalHours : 8);
    const maxLimit = getDrugMaxDailyDose(rule);

    let rawDosePerDoseMg = 0;
    let rawDailyMg = 0;

    if (rule.doseMgPerKgDose) {
      rawDosePerDoseMg = rule.doseMgPerKgDose * weightKg;
      rawDailyMg = rawDosePerDoseMg * timesPerDay;
    } else if (rule.doseMgPerKgDay) {
      rawDailyMg = rule.doseMgPerKgDay * weightKg;
      rawDosePerDoseMg = rawDailyMg / timesPerDay;
    } else {
      // Fixed adult dose or titration
      const num = parseInt((rule.adultFixedDose || '').replace(/\D/g, ''), 10);
      rawDosePerDoseMg = !isNaN(num) && num > 0 ? num : 500;
      rawDailyMg = rawDosePerDoseMg * timesPerDay;
    }

    // Check toxicity cap
    const isCapped = rawDailyMg > maxLimit;
    const dailyTotalMg = isCapped ? maxLimit : rawDailyMg;
    const dosePerDoseMg = dailyTotalMg / timesPerDay;
    const exceededByMg = isCapped ? Math.round(rawDailyMg - maxLimit) : 0;
    const percentOfMax = Math.min(100, Math.round((dailyTotalMg / maxLimit) * 100));

    // Calculate volume in mL if suspension is provided
    let volumeMlPerDose = 0;
    if (rule.suspensionMgPer5mL && dosePerDoseMg > 0) {
      volumeMlPerDose = (dosePerDoseMg * 5) / rule.suspensionMgPer5mL;
    }

    return {
      drug: rule.drug,
      route: rule.route,
      dosePerDoseMg: Math.round(dosePerDoseMg),
      dailyTotalMg: Math.round(dailyTotalMg),
      rawDailyTotalMg: Math.round(rawDailyMg),
      maxDoseMgPerDay: maxLimit,
      isCapped,
      exceededByMg,
      percentOfMax,
      volumeMlPerDose: Number(volumeMlPerDose.toFixed(1)),
      timesPerDay: Math.round(timesPerDay * 10) / 10,
      suspensionMgPer5mL: rule.suspensionMgPer5mL,
      notes: rule.notes,
      adultFixedDose: rule.adultFixedDose
    };
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#071d2b] via-[#0c2f45] to-[#071d2b] rounded-2xl p-5 sm:p-6 border border-[#12425a] shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-[#22b8af]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#179c94] to-[#22b8af] text-white shadow-lg shadow-[#22b8af]/30 shrink-0">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                  DIAGNÓSTICOS MÉDICOS
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#22b8af]/20 text-[#42edd8] border border-[#22b8af]/40">
                  Botones Interactivos & Ventana Clínica
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Haga clic en cualquiera de los diagnósticos para abrir la ventana con su protocolo clínico completo, calculadora de dosis por peso/horas y control estricto de dosis máxima de toxicidad.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center shrink-0">
            <div className="text-right">
              <span className="text-xs text-slate-300 block">Total Registrados:</span>
              <span className="text-lg font-black text-[#42edd8]">{diagnosticosData.length} Diagnósticos</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-5 pt-4 border-t border-[#12425a] grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Box */}
          <div className="md:col-span-8 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar diagnóstico, código CIE-10, síntoma o tratamiento (ej. Neumonía, J15, Amoxicilina)..."
              className="w-full bg-[#05131d] border border-[#175270] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af] focus:ring-1 focus:ring-[#22b8af] transition shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                title="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Specialty Categories Dropdown */}
          <div className="md:col-span-4 flex items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#05131d] border border-[#175270] text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#22b8af] cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#071d2b] text-white">
                  {cat === 'Todos' ? '📂 Todas las Especialidades' : `⚕️ ${cat}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ANUNCIO CLÍNICO / DISCLAIMER BANNER */}
      <div className="bg-amber-950/40 border border-amber-500/50 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xs sm:text-sm font-black text-amber-300 tracking-wide uppercase">
              Aviso Clínico Importante — Información de Guía
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/40">
              Uso Referencial
            </span>
          </div>
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
            Esta información es de carácter <strong>estrictamente referencial y sirve como guía orientativa</strong> para el equipo de salud. <strong>Los médicos son los únicos profesionales facultados para evaluar individualmente a cada paciente y emitir las indicaciones de tratamiento médico y posología farmacológica</strong>. Toda administración debe realizarse bajo indicación y supervisión médica formal.
          </p>
        </div>
      </div>

      {/* DIAGNOSES BUTTONS GRID */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 px-1">
          <span className="text-xs font-bold text-slate-300">
            Mostrando <span className="text-[#42edd8]">{displayedItems.length}</span> de <span className="text-white font-extrabold">{filteredItems.length}</span> diagnósticos (haga clic en cualquiera para abrir el protocolo clínico completo):
          </span>
          <span className="text-[11px] text-slate-400">
            Toque o clic para abrir ventana modal
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleOpenModal(item)}
              className="text-left p-4 rounded-2xl bg-gradient-to-br from-[#071d2b] via-[#09263a] to-[#071d2b] border border-[#134866] hover:border-[#22b8af] hover:shadow-xl hover:shadow-[#22b8af]/15 transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22b8af]/5 rounded-bl-full pointer-events-none group-hover:bg-[#22b8af]/10 transition-colors" />

              <div className="space-y-2.5">
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-[#092b3d] text-[#42edd8] border border-[#17577a]">
                    {item.number ? `#${item.number} • ` : ''}CIE-10: {item.cie10}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 truncate max-w-[150px]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#42edd8] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Brief Definition Excerpt */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.definition}
                </p>

                {/* Mini Features Chips */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {item.chapter && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0e3b52] text-teal-200 border border-[#17577a] truncate max-w-[200px]">
                      {item.chapter.split('(')[0].trim()}
                    </span>
                  )}
                  {item.redFlags && item.redFlags.length > 0 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-500/40">
                      ⚠️ Banderas Rojas
                    </span>
                  )}
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                    <Calculator className="w-2.5 h-2.5" /> Dosis & Toxicidad
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#092638] text-teal-300 border border-[#144863]">
                    {item.treatment.firstLine.length} fármacos
                  </span>
                </div>
              </div>

              {/* Action Button Strip */}
              <div className="mt-4 pt-3 border-t border-[#12425a] flex items-center justify-between text-xs font-bold text-[#22b8af] group-hover:text-[#42edd8]">
                <span className="flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Abrir Información Completa
                </span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* PROGRESSIVE PAGINATION CONTROLS */}
        {visibleCount < filteredItems.length && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 30, filteredItems.length))}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#22b8af]/25 hover:brightness-110 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Cargar más diagnósticos (+30)</span>
              <span className="text-[11px] bg-black/25 px-2 py-0.5 rounded-full font-black">
                {Math.min(visibleCount, filteredItems.length)} de {filteredItems.length}
              </span>
            </button>
            <button
              onClick={() => setVisibleCount(filteredItems.length)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#09263a] hover:bg-[#0c314b] text-slate-300 hover:text-white border border-[#175270] text-xs font-semibold transition cursor-pointer"
            >
              Mostrar los {filteredItems.length} diagnósticos
            </button>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="bg-[#071d2b] border border-[#12425a] rounded-2xl p-10 text-center space-y-3">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
            <h4 className="text-base font-bold text-white">No se encontraron diagnósticos</h4>
            <p className="text-xs text-slate-400">
              No hay diagnósticos que coincidan con &quot;{searchTerm}&quot; en la categoría seleccionada.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
              className="px-4 py-2 rounded-xl bg-[#179c94] text-white text-xs font-bold hover:bg-[#22b8af] cursor-pointer transition"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* POPUP / MODAL WINDOW FOR SELECTED DIAGNOSIS */}
      {selectedDiagnosisModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div
            className="bg-[#071d2b] border-2 border-[#165a80] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#09293e] to-[#061824] border-b border-[#144b6e] flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#179c94] to-[#22b8af] text-white shadow-md shadow-[#22b8af]/30 shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-[#0c3850] text-[#42edd8] border border-[#1b6287]">
                      {selectedDiagnosisModal.number ? `#${selectedDiagnosisModal.number} • ` : ''}CIE-10: {selectedDiagnosisModal.cie10}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-[#082233] text-slate-300 border border-[#144863]">
                      {selectedDiagnosisModal.category}
                    </span>
                    {selectedDiagnosisModal.chapter && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#0e3b52] text-teal-200 border border-[#17577a]">
                        {selectedDiagnosisModal.chapter}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base sm:text-xl font-black text-white truncate mt-0.5">
                    {selectedDiagnosisModal.title}
                  </h2>
                </div>
              </div>

              {/* Action Buttons in Modal Header */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    saveItem({
                      id: selectedDiagnosisModal.id,
                      type: 'diagnostico',
                      title: selectedDiagnosisModal.title,
                      subtitle: selectedDiagnosisModal.definition,
                      category: selectedDiagnosisModal.category,
                      cie10: selectedDiagnosisModal.cie10,
                    });
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer active:scale-95 ${
                    isItemSaved(selectedDiagnosisModal.id)
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                      : 'bg-[#092538] hover:bg-[#0d3650] text-slate-300 hover:text-white border-[#144863]'
                  }`}
                  title={isItemSaved(selectedDiagnosisModal.id) ? 'Guardado en tu cuenta (clic para retirar)' : 'Guardar en mi cuenta'}
                >
                  <Bookmark className={`w-4 h-4 ${isItemSaved(selectedDiagnosisModal.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span className="hidden sm:inline">
                    {isItemSaved(selectedDiagnosisModal.id) ? 'Guardado' : 'Guardar'}
                  </span>
                </button>

                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl bg-[#092538] hover:bg-rose-900/60 text-slate-300 hover:text-white transition cursor-pointer border border-[#144863] hover:border-rose-500"
                  title="Cerrar ventana (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Filter Section Tabs inside Modal */}
            <div className="px-5 py-2.5 bg-[#05141f] border-b border-[#12425a] flex items-center gap-1.5 overflow-x-auto shrink-0">
              <span className="text-[11px] text-slate-400 font-semibold mr-1 shrink-0">Sección:</span>
              <button
                onClick={() => setActiveSection('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  activeSection === 'all'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todo
              </button>
              <button
                onClick={() => setActiveSection('dosing')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap flex items-center gap-1 ${
                  activeSection === 'dosing'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-[#061824] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-3 h-3" />
                Calculadora & Toxicidad
              </button>
              <button
                onClick={() => setActiveSection('diagnosis')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  activeSection === 'diagnosis'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Criterios Diagnósticos
              </button>
              <button
                onClick={() => setActiveSection('nursing')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  activeSection === 'nursing'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cuidados de Enfermería
              </button>
            </div>

            {/* Modal Scrollable Content Body */}
            <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1">
              {/* Internal Disclaimer Notice */}
              <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-3 sm:p-3.5 flex items-start gap-3 text-xs text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Aviso de Prescripción Médica:</strong> Esta información es una <strong>guía académica y clínica referencial</strong>. <strong>Los médicos son los únicos profesionales facultados para evaluar a cada paciente y emitir las indicaciones de tratamiento y posología</strong>. Las dosis de los fármacos tienen topes máximos de toxicidad que jamás deben sobrepasarse.
                </p>
              </div>

              {/* Definition & Etiology */}
              <div className="bg-[#051522] p-4 rounded-2xl border border-[#0d344a] space-y-1">
                <h4 className="text-xs font-bold text-[#32d2c2] uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4" /> Definición & Etiología
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedDiagnosisModal.definition}
                </p>
              </div>

              {/* Red Flags / Danger Signs */}
              {selectedDiagnosisModal.redFlags && selectedDiagnosisModal.redFlags.length > 0 && (
                <div className="bg-rose-950/40 border-l-4 border-l-rose-500 border border-rose-500/30 p-4 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-400" /> Banderas Rojas & Criterios de Alarma Grave
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-rose-200">
                    {selectedDiagnosisModal.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* INTERACTIVE DOSING CALCULATOR WITH MAXIMUM DAILY TOXICITY ENFORCEMENT */}
              {(activeSection === 'all' || activeSection === 'dosing') && (
                <div className="bg-gradient-to-br from-[#061e2e] to-[#0a2f47] p-5 rounded-2xl border border-[#185e82] shadow-xl space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#124b6e] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-[#061824] font-bold shrink-0">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                          Calculadora de Dosis por Peso & Intervalo con Alerta de Toxicidad
                        </h4>
                        <p className="text-xs text-slate-300">
                          Ajuste el peso y el intervalo de horas para evaluar la dosificación exacta y verificar que no sobrepase la dosis máxima permitida diaria.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Input Controls for Weight & Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#041420] p-4 rounded-xl border border-[#0e3b54]">
                    {/* Patient Weight Slider & Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Weight className="w-4 h-4 text-[#22b8af]" /> Peso del Paciente:
                        </span>
                        <div className="flex items-center gap-1.5">
                          <input
                            type="number"
                            min="3"
                            max="150"
                            value={patientWeight}
                            onChange={(e) => setPatientWeight(Math.max(1, Number(e.target.value) || 0))}
                            className="w-16 bg-[#09293d] border border-[#16557a] rounded px-1.5 py-0.5 text-right font-black text-[#42edd8] text-xs focus:outline-none focus:border-[#22b8af]"
                          />
                          <span className="text-xs text-[#42edd8] font-bold">kg</span>
                        </div>
                      </label>
                      <input
                        type="range"
                        min="3"
                        max="120"
                        step="1"
                        value={patientWeight}
                        onChange={(e) => setPatientWeight(Number(e.target.value))}
                        className="w-full accent-[#22b8af] cursor-pointer"
                      />
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>Lactante (3-10 kg)</span>
                        <span>Niño (10-35 kg)</span>
                        <span>Adulto (50-100 kg)</span>
                      </div>
                    </div>

                    {/* Hour Interval Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-200 flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-amber-400" /> Intervalo entre Dosis:
                        </span>
                        <span className="text-xs font-black text-amber-300 bg-[#09293d] px-2 py-0.5 rounded border border-[#16557a]">
                          Cada {customHours} horas ({24 / customHours} tomas/día)
                        </span>
                      </label>
                      <div className="grid grid-cols-5 gap-1.5">
                        {[4, 6, 8, 12, 24].map((hrs) => (
                          <button
                            key={hrs}
                            onClick={() => setCustomHours(hrs)}
                            className={`py-1.5 text-xs font-bold rounded-lg transition cursor-pointer border ${
                              customHours === hrs
                                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-[#061824] border-amber-300 shadow'
                                : 'bg-[#082233] text-slate-300 border-[#144863] hover:text-white'
                            }`}
                          >
                            c/{hrs}h
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 text-right">
                        Frecuencia: {Math.round((24 / customHours) * 10) / 10} veces en 24 horas
                      </p>
                    </div>
                  </div>

                  {/* Calculated Results with Toxicity Warning Badges */}
                  {selectedDiagnosisModal.treatment.dosingRules && selectedDiagnosisModal.treatment.dosingRules.length > 0 ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">
                          Dosis Calculadas & Evaluación de Toxicidad para {patientWeight} kg:
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Tope seguro diario aplicado
                        </span>
                      </div>

                      <div className="space-y-3">
                        {selectedDiagnosisModal.treatment.dosingRules.map((rule, idx) => {
                          const calc = calculateDoseInfo(rule, patientWeight, customHours);
                          return (
                            <div
                              key={idx}
                              className={`p-4 rounded-xl border space-y-3 transition-colors ${
                                calc.isCapped
                                  ? 'bg-rose-950/30 border-rose-500/60 shadow-lg shadow-rose-950/40'
                                  : calc.percentOfMax >= 80
                                  ? 'bg-amber-950/25 border-amber-500/50'
                                  : 'bg-[#051724] border-[#134c6e]'
                              }`}
                            >
                              {/* Header Drug Line */}
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0d364f] pb-2">
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-white text-sm sm:text-base">
                                    {calc.drug}
                                  </span>
                                  <span className="px-2 py-0.5 rounded bg-[#0b334d] text-teal-200 font-bold border border-[#185980] text-xs">
                                    Vía {calc.route}
                                  </span>
                                </div>

                                {/* Toxicity Status Badge */}
                                {calc.isCapped ? (
                                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-900/60 border border-rose-500 text-rose-200 text-xs font-bold animate-pulse">
                                    <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />
                                    <span>⚠️ TOPE DE SEGURIDAD ACTIVADO — RIESGO DE TOXICIDAD</span>
                                  </div>
                                ) : calc.percentOfMax >= 80 ? (
                                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-amber-900/50 border border-amber-500 text-amber-200 text-xs font-bold">
                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                    <span>Precaución: Cerca del límite ({calc.percentOfMax}%)</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    <span>Dosis dentro del rango seguro</span>
                                  </div>
                                )}
                              </div>

                              {/* 4 Metric Boxes */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-200 text-xs">
                                {/* Dosis por Toma */}
                                <div className="bg-[#092538] p-2.5 rounded-xl border border-[#144a6d]">
                                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                                    Dosis por Toma:
                                  </span>
                                  <span className="text-base font-black text-[#42edd8]">
                                    {calc.dosePerDoseMg > 0 ? `${calc.dosePerDoseMg} mg` : calc.adultFixedDose || '-'}
                                  </span>
                                  <span className="text-[10px] text-slate-400 block mt-0.5">
                                    Cada {customHours} horas
                                  </span>
                                </div>

                                {/* Dosis Diaria Total */}
                                <div className={`p-2.5 rounded-xl border ${
                                  calc.isCapped
                                    ? 'bg-rose-950/50 border-rose-500 text-rose-200'
                                    : 'bg-[#092538] border-[#144a6d]'
                                }`}>
                                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                                    Total en 24 Horas:
                                  </span>
                                  <span className={`text-base font-black ${calc.isCapped ? 'text-rose-300' : 'text-amber-300'}`}>
                                    {calc.dailyTotalMg} mg/día
                                  </span>
                                  <span className="text-[10px] text-slate-400 block mt-0.5">
                                    {calc.timesPerDay} tomas al día
                                  </span>
                                </div>

                                {/* Dosis Máxima Diaria (Tope de Toxicidad) */}
                                <div className="bg-[#092538] p-2.5 rounded-xl border border-[#144a6d]">
                                  <span className="block text-[10px] text-rose-300 uppercase font-semibold flex items-center gap-1">
                                    <ShieldAlert className="w-3 h-3 text-rose-400" />
                                    Dosis Máxima Diaria:
                                  </span>
                                  <span className="text-base font-black text-rose-400">
                                    {calc.maxDoseMgPerDay} mg/día
                                  </span>
                                  <span className="text-[10px] text-slate-400 block mt-0.5">
                                    Umbral límite de toxicidad
                                  </span>
                                </div>

                                {/* Volumen si es Suspensión o Porcentaje de Límite */}
                                <div className="bg-[#092538] p-2.5 rounded-xl border border-[#144a6d]">
                                  {calc.suspensionMgPer5mL ? (
                                    <>
                                      <span className="block text-[10px] text-teal-300 uppercase font-semibold">
                                        Vol. Susp. ({calc.suspensionMgPer5mL}mg/5mL):
                                      </span>
                                      <span className="text-base font-black text-teal-300">
                                        {calc.volumeMlPerDose} mL / toma
                                      </span>
                                      <span className="text-[10px] text-slate-400 block mt-0.5">
                                        {calc.volumeMlPerDose * calc.timesPerDay} mL/día
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                                        Uso del Límite Máximo:
                                      </span>
                                      <span className={`text-base font-black ${
                                        calc.isCapped ? 'text-rose-400' : 'text-teal-300'
                                      }`}>
                                        {calc.percentOfMax}%
                                      </span>
                                      <div className="w-full bg-[#05131d] h-1.5 rounded-full mt-1 overflow-hidden">
                                        <div
                                          className={`h-full ${
                                            calc.isCapped
                                              ? 'bg-rose-500'
                                              : calc.percentOfMax > 80
                                              ? 'bg-amber-400'
                                              : 'bg-emerald-400'
                                          }`}
                                          style={{ width: `${calc.percentOfMax}%` }}
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>

                              {/* TOXICITY WARNING MESSAGE IF CAPPED */}
                              {calc.isCapped && (
                                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/70 text-xs text-rose-200 space-y-1">
                                  <div className="flex items-center gap-1.5 font-bold text-rose-300">
                                    <AlertOctagon className="w-4 h-4 text-rose-400 shrink-0" />
                                    <span>¡ADVERTENCIA DE TOXICIDAD FARMACOLÓGICA — NO EXCEDER LA DOSIS DIARIA!</span>
                                  </div>
                                  <p className="leading-relaxed">
                                    El cálculo estricto por peso ({patientWeight} kg) arrojaría un total de <strong>{calc.rawDailyTotalMg} mg/día</strong>, el cual <strong>supera la dosis diaria permitida de {calc.maxDoseMgPerDay} mg/día en {calc.exceededByMg} mg</strong>.
                                  </p>
                                  <p className="text-white font-semibold pt-1 border-t border-rose-800/40">
                                    🔒 La dosis ha sido topada automáticamente al límite máximo de seguridad: <strong>{calc.dosePerDoseMg} mg cada {customHours} horas</strong> ({calc.dailyTotalMg} mg/día). <strong>No superar este valor</strong> para prevenir toxicidad hepática, renal o eventos adversos severos.
                                  </p>
                                </div>
                              )}

                              {calc.notes && (
                                <p className="text-[11px] text-amber-200/90 font-mono bg-[#092233] p-2 rounded-lg border border-[#124361]">
                                  💡 <strong>Indicación clínica:</strong> {calc.notes}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-300 p-3 bg-[#082233] rounded-xl border border-[#144863]">
                      Para este diagnóstico las dosis se ajustan según la gravedad o escala clínica (ver tabla de fármacos abajo).
                    </div>
                  )}
                </div>
              )}

              {/* SECTION: CRITERIOS DIAGNÓSTICOS & EVALUACIÓN */}
              {(activeSection === 'all' || activeSection === 'diagnosis') && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-base font-bold text-[#42edd8] border-b border-[#12425a] pb-2">
                    <Microscope className="w-5 h-5 text-[#22b8af]" />
                    <h4>EVALUACIÓN Y CRITERIOS DIAGNÓSTICOS</h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Symptoms */}
                    <div className="bg-[#051824] p-4 rounded-xl border border-[#0e3b52] space-y-2">
                      <h5 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                        <Activity className="w-4 h-4 text-cyan-400" /> Cuadro Clínico & Manifestaciones:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {selectedDiagnosisModal.symptoms.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#22b8af] font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Criteria & Differential */}
                    <div className="bg-[#051824] p-4 rounded-xl border border-[#0e3b52] space-y-3">
                      <div>
                        <h5 className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
                          Criterio Diagnóstico Principal:
                        </h5>
                        <p className="text-xs text-slate-200 bg-[#082233] p-2.5 rounded-lg border border-[#134866]">
                          {selectedDiagnosisModal.diagnosis.criteria}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                          Diagnóstico Diferencial:
                        </h5>
                        <div className="flex flex-wrap gap-1 text-xs">
                          {selectedDiagnosisModal.diagnosis.differential.map((d, idx) => (
                            <span key={idx} className="bg-[#092437] text-slate-300 px-2 py-0.5 rounded border border-[#144863]">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lab Tests & Imaging */}
                  <div className="bg-[#051824] p-4 rounded-xl border border-[#0e3b52] space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#32d2c2]">
                      Exámenes de Laboratorio e Imágenes Solicitados:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                      <div className="bg-[#082233] p-3 rounded-lg border border-[#134866]">
                        <strong className="text-teal-300 block mb-1"> Pruebas de Laboratorio:</strong>
                        <ul className="space-y-1 pl-1">
                          {selectedDiagnosisModal.diagnosis.labTests.map((lab, idx) => (
                            <li key={idx}>• {lab}</li>
                          ))}
                        </ul>
                      </div>
                      {selectedDiagnosisModal.diagnosis.imaging && (
                        <div className="bg-[#082233] p-3 rounded-lg border border-[#134866]">
                          <strong className="text-teal-300 block mb-1"> Imágenes & Estudios Auxiliares:</strong>
                          <ul className="space-y-1 pl-1">
                            {selectedDiagnosisModal.diagnosis.imaging.map((img, idx) => (
                              <li key={idx}>• {img}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: CUIDADOS ESPECÍFICOS DE ENFERMERÍA */}
              {(activeSection === 'all' || activeSection === 'nursing') && (
                <div className="bg-gradient-to-br from-[#061f2e] to-[#0a2b3d] p-5 rounded-2xl border border-[#155375] shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-[#42edd8] border-b border-[#11435e] pb-2">
                    <UserCheck className="w-5 h-5 text-[#22b8af]" />
                    <h4>CUIDADOS ESPECÍFICOS DE ENFERMERÍA</h4>
                  </div>

                  <div className="space-y-2">
                    {selectedDiagnosisModal.treatment.nursingCare.map((care, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 bg-[#051724] p-3 rounded-xl border border-[#0e3b52] text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#22b8af] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{care}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: ESQUEMA FARMACOLÓGICO Y ALTERNATIVAS */}
              {(activeSection === 'all' || activeSection === 'dosing') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
                    <div className="flex items-center gap-2 text-base font-bold text-amber-300">
                      <Pill className="w-5 h-5 text-amber-400" />
                      <h4>ESQUEMA FARMACOLÓGICO Y ALTERNATIVAS</h4>
                    </div>
                    <span className="text-[11px] text-amber-300 font-semibold bg-amber-950/40 px-2.5 py-0.5 rounded border border-amber-500/30">
                      Verificar prescripción médica
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-[#134d73]">
                    <table className="w-full text-xs text-left text-slate-200">
                      <thead className="bg-[#0a2e45] text-teal-300 font-bold uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Medicamento</th>
                          <th className="p-3">Dosis Estándar</th>
                          <th className="p-3">Vía</th>
                          <th className="p-3">Frecuencia</th>
                          <th className="p-3">Notas & Precauciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#103a54] bg-[#061e2e]">
                        {selectedDiagnosisModal.treatment.firstLine.map((med, idx) => (
                          <tr key={idx} className="hover:bg-[#09293e]">
                            <td className="p-3 font-bold text-emerald-300">{med.drug}</td>
                            <td className="p-3 font-semibold">{med.dose}</td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-[#0f3c57] text-teal-200 border border-[#19577d] text-[10px] font-bold">
                                {med.route}
                              </span>
                            </td>
                            <td className="p-3">{med.freq}</td>
                            <td className="p-3 text-slate-300 italic">{med.notes || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Alternatives */}
                  {selectedDiagnosisModal.treatment.alternatives && selectedDiagnosisModal.treatment.alternatives.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                        Esquemas Alternativos / Segunda Línea:
                      </h5>
                      <div className="overflow-x-auto rounded-xl border border-[#134d73]">
                        <table className="w-full text-xs text-left text-slate-200">
                          <thead className="bg-[#0a2e45] text-amber-300 font-bold uppercase text-[11px]">
                            <tr>
                              <th className="p-3">Medicamento</th>
                              <th className="p-3">Dosis</th>
                              <th className="p-3">Vía</th>
                              <th className="p-3">Frecuencia</th>
                              <th className="p-3">Notas</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#103a54] bg-[#061e2e]">
                            {selectedDiagnosisModal.treatment.alternatives.map((med, idx) => (
                              <tr key={idx} className="hover:bg-[#09293e]">
                                <td className="p-3 font-bold text-amber-200">{med.drug}</td>
                                <td className="p-3">{med.dose}</td>
                                <td className="p-3">
                                  <span className="px-2 py-0.5 rounded bg-[#0f3c57] text-amber-200 border border-[#19577d] text-[10px] font-bold">
                                    {med.route}
                                  </span>
                                </td>
                                <td className="p-3">{med.freq}</td>
                                <td className="p-3 text-slate-300 italic">{med.notes || '-'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Non Pharm Measures */}
                  <div className="bg-[#051824] p-4 rounded-xl border border-[#0e3b52] space-y-2 mt-3">
                    <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider text-teal-300">
                      Medidas No Farmacológicas & Cuidados Generales:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedDiagnosisModal.treatment.nonPharm.map((np, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#22b8af] font-bold">•</span>
                          <span>{np}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer */}
            <div className="p-4 bg-[#05131d] border-t border-[#12425a] flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Presione <kbd className="px-1.5 py-0.5 rounded bg-[#092638] text-slate-300 border border-[#144863] text-[10px]">Esc</kbd> o el botón para cerrar esta ventana
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={handleCloseModal}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#158881] hover:to-[#1ca49c] text-white text-xs font-bold cursor-pointer transition shadow-md shadow-[#22b8af]/20"
                >
                  Cerrar Ventana
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
