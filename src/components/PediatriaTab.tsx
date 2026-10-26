import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Star,
  Flame,
  Search,
  Pill,
  Droplets,
  Layers,
  Sparkles,
  Info,
  Clock,
  Printer,
  ChevronDown
} from 'lucide-react';
import {
  pediatricDrugsData,
  PediatricDrug,
  PediatricPresentation
} from '../data/pediatricDrugsData';

export const PediatriaTab: React.FC = () => {
  // Patient state
  const [weight, setWeight] = useState<string>('12.5');

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pediatric_favorites');
      return saved ? JSON.parse(saved) : ['paracetamol', 'ibuprofeno', 'amoxicilina', 'salbutamol'];
    } catch {
      return ['paracetamol', 'ibuprofeno', 'amoxicilina', 'salbutamol'];
    }
  });

  // View counts persisted in localStorage to track frequently consulted drugs
  const [viewCounts, setViewCounts] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('pediatric_view_counts');
      return saved ? JSON.parse(saved) : { paracetamol: 28, amoxicilina: 24, ibuprofeno: 19, ceftriaxona: 15 };
    } catch {
      return { paracetamol: 28, amoxicilina: 24, ibuprofeno: 19, ceftriaxona: 15 };
    }
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pediatric_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving pediatric favorites:', e);
    }
  }, [favorites]);

  // Selected drug & presentation
  const [selectedDrugId, setSelectedDrugId] = useState<string>('paracetamol');
  const [selectedPresentationIdx, setSelectedPresentationIdx] = useState<number>(0);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'favorites' | 'popular' | string>('all');
  const [isDrugListOpen, setIsDrugListOpen] = useState<boolean>(false);

  // Calculation parameters
  const [isDailyCalculation, setIsDailyCalculation] = useState<boolean>(false);
  const [doseMgKg, setDoseMgKg] = useState<string>('15');
  const [concMg, setConcMg] = useState<string>('100');
  const [concMl, setConcMl] = useState<string>('1');
  const [frequency, setFrequency] = useState<number>(4); // doses per day
  const [notes, setNotes] = useState<string>('');
  const [isLiquidForm, setIsLiquidForm] = useState<boolean>(true);

  // Currently selected drug object
  const currentDrug = useMemo(() => {
    return pediatricDrugsData.find((d) => d.id === selectedDrugId) || pediatricDrugsData[0];
  }, [selectedDrugId]);

  // Load initial drug configuration
  useEffect(() => {
    if (currentDrug) {
      const pres = currentDrug.presentations[0] || {
        form: 'ESTÁNDAR',
        concLabel: '100 mg / 1 mL',
        concMg: 100,
        concMl: 1,
        isLiquid: true
      };
      setSelectedPresentationIdx(0);
      setIsDailyCalculation(currentDrug.isDailyDose);
      setDoseMgKg(currentDrug.doseMgKg.toString());
      setConcMg(pres.concMg.toString());
      setConcMl(pres.concMl.toString());
      setFrequency(currentDrug.defaultFreq);
      setNotes(currentDrug.notes);
      setIsLiquidForm(pres.isLiquid);
    }
  }, [currentDrug?.id]);

  // Handle drug selection
  const handleSelectDrug = (drug: PediatricDrug) => {
    setSelectedDrugId(drug.id);
    setIsDrugListOpen(false);
    const pres = drug.presentations[0] || {
      form: 'ESTÁNDAR',
      concLabel: '100 mg / 1 mL',
      concMg: 100,
      concMl: 1,
      isLiquid: true
    };
    setSelectedPresentationIdx(0);
    setIsDailyCalculation(drug.isDailyDose);
    setDoseMgKg(drug.doseMgKg.toString());
    setConcMg(pres.concMg.toString());
    setConcMl(pres.concMl.toString());
    setFrequency(drug.defaultFreq);
    setNotes(drug.notes);
    setIsLiquidForm(pres.isLiquid);

    // Increment view count
    setViewCounts((prev) => {
      const updated = { ...prev, [drug.id]: (prev[drug.id] || 0) + 1 };
      try {
        localStorage.setItem('pediatric_view_counts', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving pediatric view counts:', e);
      }
      return updated;
    });
  };

  // Handle presentation change
  const handleSelectPresentation = (pres: PediatricPresentation, index: number) => {
    setSelectedPresentationIdx(index);
    setConcMg(pres.concMg.toString());
    setConcMl(pres.concMl.toString());
    setIsLiquidForm(pres.isLiquid);
  };

  // Toggle favorite
  const toggleFavorite = (drugId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(drugId) ? prev.filter((id) => id !== drugId) : [...prev, drugId]
    );
  };

  // Unique categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(pediatricDrugsData.map((d) => d.category)));
    return cats.sort();
  }, []);

  // Filtered drug list
  const filteredDrugs = useMemo(() => {
    let list = [...pediatricDrugsData];

    // Text search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.rawName.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.presentations.some((p) => p.form.toLowerCase().includes(q) || p.concLabel.toLowerCase().includes(q))
      );
    }

    // Tab filter
    if (activeFilter === 'favorites') {
      list = list.filter((d) => favorites.includes(d.id));
    } else if (activeFilter === 'popular') {
      list = list
        .filter((d) => (viewCounts[d.id] || 0) > 0)
        .sort((a, b) => (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0));
    } else if (activeFilter !== 'all') {
      list = list.filter((d) => d.category === activeFilter);
    }

    return list;
  }, [searchQuery, activeFilter, favorites, viewCounts]);

  // Calculations
  const parsedWeight = parseFloat(weight) || 0;
  const parsedDose = parseFloat(doseMgKg) || 0;
  const parsedConcMg = parseFloat(concMg) || 1;
  const parsedConcMl = parseFloat(concMl) || 1;

  let mgPerDose = 0;
  let mgPerDay = 0;

  if (isDailyCalculation) {
    mgPerDay = parsedWeight * parsedDose;
    mgPerDose = frequency > 0 ? mgPerDay / frequency : 0;
  } else {
    mgPerDose = parsedWeight * parsedDose;
    mgPerDay = mgPerDose * frequency;
  }

  const mlPerDose = parsedConcMg > 0 ? (mgPerDose * parsedConcMl) / parsedConcMg : 0;
  const dropsPerDose = mlPerDose * 20; // 1 mL = 20 drops
  const intervalHours = frequency > 0 ? Math.round(24 / frequency) : 24;

  // Maximum safe daily dose checking
  const maxSafeDailyByWeight = currentDrug?.maxDailyMgKg
    ? currentDrug.maxDailyMgKg * parsedWeight
    : undefined;
  const maxSafeDailyAbsolute = currentDrug?.maxDailyAbsoluteMg;
  const maxDailyLimit = Math.min(
    maxSafeDailyByWeight || Infinity,
    maxSafeDailyAbsolute || Infinity
  );

  const isOverdose =
    maxDailyLimit !== Infinity && parsedWeight > 0 && mgPerDay > maxDailyLimit;

  // Print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/30">
              129 Medicamentos Pediátricos
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Presentaciones & Dosis
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#22b8af]" />
            Calculadora Pediátrica de Dosis, Gotas y Presentaciones
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Catálogo completo de medicamentos pediátricos (gotas, jarabes, ampollas, suspensiones). Cálculo seguro por peso con control de dosis máxima.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-xs text-[#42edd8] font-mono bg-[#0c3144] border border-[#17657d] px-3 py-1.5 rounded-xl shadow-inner flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            1 mL = 20 gotas
          </div>
        </div>
      </div>

      {/* Search, Filter Bar and Favorites */}
      <div className="bg-[#092233]/90 rounded-2xl p-4 border border-[#12425a] shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar entre los 129 medicamentos pediátricos (ej. Paracetamol, Amoxicilina, Salbutamol)..."
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick toggle drug list */}
          <button
            type="button"
            onClick={() => setIsDrugListOpen(!isDrugListOpen)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 rounded-xl text-xs font-semibold cursor-pointer transition"
          >
            <Layers className="w-4 h-4" />
            <span>{isDrugListOpen ? 'Ocultar Catálogo' : 'Explorar 129 Fármacos'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDrugListOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Quick Tabs: All, Favorites, Most Consulted, and Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-thin">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-xl font-medium shrink-0 cursor-pointer transition flex items-center gap-1.5 ${
              activeFilter === 'all'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/30'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Todos ({pediatricDrugsData.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('favorites')}
            className={`px-3 py-1.5 rounded-xl font-medium shrink-0 cursor-pointer transition flex items-center gap-1.5 ${
              activeFilter === 'favorites'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30'
                : 'bg-slate-900/80 text-amber-300 hover:bg-slate-800 border border-amber-500/30'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Mis Favoritos ({favorites.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('popular')}
            className={`px-3 py-1.5 rounded-xl font-medium shrink-0 cursor-pointer transition flex items-center gap-1.5 ${
              activeFilter === 'popular'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-900/30'
                : 'bg-slate-900/80 text-rose-300 hover:bg-slate-800 border border-rose-500/30'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            Más Consultados
          </button>

          <div className="h-4 w-px bg-slate-800 shrink-0 mx-1" />

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-xl font-medium shrink-0 cursor-pointer transition ${
                activeFilter === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-900/30'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Drug Catalog Grid (Shown when user searches or toggles 'Explorar') */}
      {(isDrugListOpen || searchQuery.trim() !== '' || activeFilter !== 'all') && (
        <div className="bg-[#092233]/90 rounded-2xl p-4 sm:p-5 border border-[#12425a] shadow-xl space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Mostrando <strong className="text-white">{filteredDrugs.length}</strong> de {pediatricDrugsData.length} medicamentos
            </span>
            {activeFilter === 'favorites' && favorites.length === 0 && (
              <span className="text-amber-400">No tienes favoritos aún. Haz clic en la estrella ⭐ de cualquier fármaco para guardarlo.</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-96 overflow-y-auto pr-1">
            {filteredDrugs.map((drug) => {
              const isFav = favorites.includes(drug.id);
              const isSelected = selectedDrugId === drug.id;
              const views = viewCounts[drug.id] || 0;

              return (
                <div
                  key={drug.id}
                  onClick={() => handleSelectDrug(drug)}
                  className={`p-3 rounded-xl border transition cursor-pointer text-left flex flex-col justify-between gap-2 relative ${
                    isSelected
                      ? 'bg-teal-950/70 border-teal-500 shadow-md ring-1 ring-teal-400/30'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <div className="min-w-0">
                      <span className="text-[10px] text-teal-400 uppercase font-semibold block truncate">
                        {drug.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {drug.name}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(drug.id, e)}
                      className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-amber-400 transition shrink-0"
                      title={isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isFav ? 'fill-amber-400 text-amber-400' : 'text-slate-500'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-1 mt-1 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 flex-wrap">
                      {drug.presentations.slice(0, 2).map((p, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-cyan-300 border border-slate-800"
                        >
                          {p.form}
                        </span>
                      ))}
                      {drug.presentations.length > 2 && (
                        <span className="text-[10px] text-slate-500 font-mono">
                          +{drug.presentations.length - 2}
                        </span>
                      )}
                    </div>

                    {views > 0 && (
                      <span className="flex items-center gap-0.5 text-[10px] text-rose-400 font-medium">
                        <Flame className="w-3 h-3" />
                        {views}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Calculation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Drug & Dosage Configuration */}
        <div className="lg:col-span-5 bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          {/* Active Drug Card Header */}
          <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/40 relative">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] text-teal-400 uppercase font-semibold tracking-wider block">
                  {currentDrug.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Pill className="w-4 h-4 text-teal-400" />
                  {currentDrug.name}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 font-mono">
                  {currentDrug.standardDose}
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleFavorite(currentDrug.id)}
                className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1 ${
                  favorites.includes(currentDrug.id)
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-400'
                }`}
                title="Favorito"
              >
                <Star
                  className={`w-4 h-4 ${
                    favorites.includes(currentDrug.id) ? 'fill-amber-400 text-amber-400' : ''
                  }`}
                />
              </button>
            </div>

            {/* Quick dropdown for all 129 drugs */}
            <div className="mt-3 pt-3 border-t border-slate-800/80">
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Cambiar Medicamento Rápido:
              </label>
              <select
                value={selectedDrugId}
                onChange={(e) => {
                  const d = pediatricDrugsData.find((x) => x.id === e.target.value);
                  if (d) handleSelectDrug(d);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                {pediatricDrugsData.map((d) => (
                  <option key={d.id} value={d.id}>
                    {favorites.includes(d.id) ? '⭐ ' : ''}
                    {d.name} ({d.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Presentation Form Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
              <span>Presentación Farmacéutica</span>
              <span className="text-[11px] text-teal-400 font-normal">
                {currentDrug.presentations.length} forma(s) disponible(s)
              </span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentDrug.presentations.map((pres, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectPresentation(pres, idx)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                    selectedPresentationIdx === idx
                      ? 'bg-teal-900/40 border-teal-500 text-white shadow-sm ring-1 ring-teal-500/50'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-300 text-[11px] uppercase tracking-wide">
                      {pres.form}
                    </span>
                    {pres.isLiquid ? (
                      <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <Pill className="w-3.5 h-3.5 text-amber-400" />
                    )}
                  </div>
                  <span className="text-xs text-white font-medium mt-1">
                    {pres.concLabel}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 font-mono">
                    {pres.concMg} mg en {pres.concMl} mL
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Patient Weight */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Peso del Paciente Pediátrico (kg)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="120"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ej: 12.5"
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-cyan-500"
              />
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setWeight((prev) => Math.max(0.5, (parseFloat(prev) || 0) - 1).toFixed(1))}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg cursor-pointer transition"
                >
                  -1 kg
                </button>
                <button
                  type="button"
                  onClick={() => setWeight((prev) => ((parseFloat(prev) || 0) + 1).toFixed(1))}
                  className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg cursor-pointer transition"
                >
                  +1 kg
                </button>
              </div>
            </div>
          </div>

          {/* Mode Selector: per dose vs per day */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Modalidad de Dosificación
            </label>
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setIsDailyCalculation(false)}
                className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  !isDailyCalculation ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dosis por Toma (mg/kg/toma)
              </button>
              <button
                type="button"
                onClick={() => setIsDailyCalculation(true)}
                className={`flex-1 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  isDailyCalculation ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dosis Diaria Total (mg/kg/día)
              </button>
            </div>
          </div>

          {/* Dose input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {isDailyCalculation
                ? 'Dosis Diaria (mg / kg / día)'
                : 'Dosis por Toma (mg / kg / toma)'}
            </label>
            <input
              type="number"
              step="0.5"
              value={doseMgKg}
              onChange={(e) => setDoseMgKg(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 font-semibold"
            />
          </div>

          {/* Concentration fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Concentración (mg)
              </label>
              <input
                type="number"
                value={concMg}
                onChange={(e) => setConcMg(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                En Volumen (mL)
              </label>
              <input
                type="number"
                step="0.1"
                value={concMl}
                onChange={(e) => setConcMl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          {/* Administration Frequency */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Frecuencia de Administración
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(parseInt(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
            >
              <option value={1}>Cada 24 horas (1 vez al día - qd)</option>
              <option value={2}>Cada 12 horas (2 veces al día - bid)</option>
              <option value={3}>Cada 8 horas (3 veces al día - tid)</option>
              <option value={4}>Cada 6 horas (4 veces al día - qid)</option>
              <option value={6}>Cada 4 horas (6 veces al día)</option>
            </select>
          </div>

          {/* Notes from drug */}
          {notes && (
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
              <span className="text-teal-400 font-bold block mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Nota clínica y farmacológica:
              </span>
              {notes}
            </div>
          )}
        </div>

        {/* Right Column: Calculated Results & Kardex */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#092233]/90 border border-[#12425a] rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-[#12425a] pb-3">
              <h3 className="text-sm font-bold uppercase text-[#22b8af] tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#42edd8]" />
                Dosificación Calculada
              </h3>
              <span className="text-xs text-slate-300">
                Para paciente de <strong className="text-teal-400 font-bold">{parsedWeight} kg</strong>
              </span>
            </div>

            {/* Overdose warning banner */}
            {isOverdose && (
              <div className="bg-rose-950/40 border border-rose-600/70 p-4 rounded-xl flex items-start gap-3 text-rose-200">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <strong className="text-rose-300 font-bold text-sm block">
                    ⚠️ ALERTA DE TOXICIDAD: Sobrepasa la Dosis Máxima Diaria
                  </strong>
                  <p>
                    La dosis calculada acumula <strong>{mgPerDay.toFixed(1)} mg/día</strong>, superando el límite seguro de toxicidad ({maxDailyLimit.toFixed(1)} mg/día).
                  </p>
                  <p className="text-[11px] text-rose-300/80">
                    Reduzca la dosis por toma o la frecuencia antes de administrar.
                  </p>
                </div>
              </div>
            )}

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1 shadow-inner">
                <span className="text-[11px] text-slate-400 block font-medium">Dosis Individual</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  {mgPerDose.toFixed(1)}
                </span>
                <span className="text-xs text-slate-400 block font-medium">mg / toma</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1 shadow-inner">
                <span className="text-[11px] text-slate-400 block font-medium">Volumen por Toma</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  {mlPerDose.toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 block font-medium">mL / toma</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1 shadow-inner">
                <span className="text-[11px] text-slate-400 block font-medium">
                  {isLiquidForm ? 'Equivalente en Gotas' : 'Dosis Diaria Total'}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  {isLiquidForm ? Math.round(dropsPerDose) : mgPerDay.toFixed(1)}
                </span>
                <span className="text-xs text-slate-400 block font-medium">
                  {isLiquidForm ? 'gotas / toma (20 gts/mL)' : 'mg / día acumulados'}
                </span>
              </div>
            </div>

            {/* Kardex Prescription Note */}
            <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-teal-400 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Anotación para Kardex / Hoja de Enfermería:
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  c/{intervalHours}h ({frequency}x/día)
                </span>
              </div>
              <div className="p-3.5 bg-teal-950/20 rounded-lg border border-teal-800/40 text-slate-200 text-xs sm:text-sm leading-relaxed font-mono">
                Administrar <strong>{currentDrug.name}</strong> ({currentDrug.presentations[selectedPresentationIdx]?.form || 'Oral'} {concMg}mg/{concMl}mL):{' '}
                <strong className="text-teal-300">{mlPerDose.toFixed(2)} mL</strong>{' '}
                {isLiquidForm && (
                  <span>
                    ({Math.round(dropsPerDose)} gotas = {mgPerDose.toFixed(1)} mg)
                  </span>
                )}{' '}
                cada <strong>{intervalHours} horas</strong>. Dosis total acumulada en 24h:{' '}
                <strong>{mgPerDay.toFixed(1)} mg/día</strong>.
              </div>
            </div>

            {/* Maximum Daily Limit Card */}
            {(currentDrug?.maxDailyMgKg || currentDrug?.maxDailyAbsoluteMg) && (
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="space-y-0.5">
                  <span className="text-slate-400 block text-[11px]">Límite de toxicidad recomendado:</span>
                  <span className="font-semibold text-white">
                    {currentDrug.maxDailyMgKg ? `Hasta ${currentDrug.maxDailyMgKg} mg/kg/día` : ''}
                    {currentDrug.maxDailyMgKg && currentDrug.maxDailyAbsoluteMg ? ' | ' : ''}
                    {currentDrug.maxDailyAbsoluteMg ? `Máximo absoluto ${currentDrug.maxDailyAbsoluteMg} mg/día` : ''}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Límite para este paciente:</span>
                  <span className="font-bold text-amber-300 font-mono">
                    {maxDailyLimit !== Infinity ? `${maxDailyLimit.toFixed(1)} mg/día` : 'N/A'}
                  </span>
                </div>
              </div>
            )}

            {/* Safety Rules Banner */}
            <div className="bg-amber-950/20 border border-amber-900/40 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/90 space-y-1">
                <strong className="font-semibold text-amber-300 block">
                  Regla de Seguridad Asistencial (Los 10 Correctos):
                </strong>
                <p>
                  1. Paciente correcto | 2. Medicamento correcto | 3. Dosis correcta | 4. Vía correcta | 5. Hora correcta | 6. Registro clínico | 7. Educación al cuidador | 8. Indagar alergias | 9. Verificar caducidad | 10. Velocidad de infusión.
                </p>
                <p className="text-[11px] text-amber-400/90 pt-1">
                  En neonatos, prematuros y pacientes con insuficiencia renal o hepática, ajustar estrictamente según indicación médica individualizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
