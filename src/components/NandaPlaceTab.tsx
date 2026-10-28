import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  FileSpreadsheet,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Plus,
  Sparkles,
  ClipboardList,
  Target,
  Layers,
  ChevronRight,
  Info,
  Bookmark,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  BookMarked,
  Activity,
  HeartPulse,
  Award
} from 'lucide-react';
import {
  NANDA_INTERRELACIONES_2024_2026,
  NandaInterrelationItem
} from '../data/nandaInterrelacionesData';
import { useAuth } from '../context/AuthContext';

type SubTab = 'buscador' | 'place' | 'metodologia';

export const NandaPlaceTab: React.FC = () => {
  const { user, saveItem, isItemSaved } = useAuth();

  const [activeSubTab, setActiveSubTab] = useState<SubTab>('buscador');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('todos');
  const [selectedDiagnosisId, setSelectedDiagnosisId] = useState<string>(
    NANDA_INTERRELACIONES_2024_2026[0].id
  );
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Estados del Generador de PLACE
  const [placePatientName, setPlacePatientName] = useState<string>('Paciente Adulto (Caso Clínico)');
  const [placeService, setPlaceService] = useState<string>('Medicina Interna / Hospitalización');
  const [placeNanda, setPlaceNanda] = useState<string>(
    `${NANDA_INTERRELACIONES_2024_2026[0].code} - ${NANDA_INTERRELACIONES_2024_2026[0].label}`
  );
  const [placeNoc, setPlaceNoc] = useState<string>(
    `${NANDA_INTERRELACIONES_2024_2026[0].nocList[0].code} - ${NANDA_INTERRELACIONES_2024_2026[0].nocList[0].label}\nMeta: ${NANDA_INTERRELACIONES_2024_2026[0].nocList[0].targetScore}`
  );
  const [placeNic, setPlaceNic] = useState<string>(
    NANDA_INTERRELACIONES_2024_2026[0].nicList[0].activities.slice(0, 4).join('\n• ')
  );
  const [placeEvaluation, setPlaceEvaluation] = useState<string>(
    'Paciente evoluciona favorablemente con mejoría de los parámetros fisiológicos y alivio de síntomas tras intervenciones de enfermería.'
  );
  const [copiedPlace, setCopiedPlace] = useState<boolean>(false);

  // Lista filtrada de diagnósticos
  const filteredDiagnoses = useMemo(() => {
    return NANDA_INTERRELACIONES_2024_2026.filter((item) => {
      // Filtro de Dominio
      if (selectedDomain !== 'todos' && !item.domain.toLowerCase().includes(selectedDomain.toLowerCase())) {
        return false;
      }

      // Filtro de Búsqueda
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesCode = item.code.includes(q);
        const matchesLabel = item.label.toLowerCase().includes(q);
        const matchesDomain = item.domain.toLowerCase().includes(q);
        const matchesNoc = item.nocList.some(
          (n) => n.code.includes(q) || n.label.toLowerCase().includes(q)
        );
        const matchesNic = item.nicList.some(
          (n) => n.code.includes(q) || n.label.toLowerCase().includes(q)
        );
        const matchesSymptoms = item.definingCharacteristics.some((s) => s.toLowerCase().includes(q));

        return matchesCode || matchesLabel || matchesDomain || matchesNoc || matchesNic || matchesSymptoms;
      }

      return true;
    });
  }, [searchQuery, selectedDomain]);

  // Diagnóstico seleccionado actualmente
  const selectedItem: NandaInterrelationItem = useMemo(() => {
    const found = NANDA_INTERRELACIONES_2024_2026.find((x) => x.id === selectedDiagnosisId);
    return found || NANDA_INTERRELACIONES_2024_2026[0];
  }, [selectedDiagnosisId]);

  // Cargar diagnóstico en el Generador de PLACE
  const handleLoadIntoPlace = (item: NandaInterrelationItem) => {
    setPlaceNanda(`${item.code} - ${item.label} r/c ${item.relatedFactors[0] || 'proceso patológico'} e/p ${item.definingCharacteristics[0] || 'signos clínicos'}`);
    
    if (item.nocList.length > 0) {
      const noc1 = item.nocList[0];
      setPlaceNoc(`${noc1.code} - ${noc1.label}\nMeta: ${noc1.targetScore}\nIndicadores: ${noc1.indicators.slice(0, 3).join(', ')}`);
    }

    if (item.nicList.length > 0) {
      const nic1 = item.nicList[0];
      setPlaceNic(nic1.activities.slice(0, 4).join('\n• '));
    }

    setPlaceEvaluation('Paciente en unidad hemodinámicamente estable, buena respuesta al plan de cuidados de enfermería.');
    setActiveSubTab('place');
  };

  // Copiar Ficha N-N-N completa
  const handleCopyInterrelation = (item: NandaInterrelationItem) => {
    let text = `========================================================\n`;
    text += `INTERRELACIÓN NANDA - NOC - NIC (Actualización 2024-2026)\n`;
    text += `========================================================\n\n`;
    text += `DIAGNÓSTICO NANDA: ${item.code} - ${item.label}\n`;
    text += `Dominio: ${item.domain} | ${item.classType}\n`;
    text += `Tipo: ${item.type}\n`;
    text += `Definición: ${item.definition}\n\n`;
    
    text += `FACTORES RELACIONADOS (Etiología):\n• ${item.relatedFactors.join('\n• ')}\n\n`;
    text += `CARACTERÍSTICAS DEFINITORIAS (Signos/Síntomas):\n• ${item.definingCharacteristics.join('\n• ')}\n\n`;

    if (item.riskPopulations.length > 0) {
      text += `POBLACIONES DE RIESGO:\n• ${item.riskPopulations.join('\n• ')}\n\n`;
    }
    if (item.associatedConditions.length > 0) {
      text += `CONDICIONES ASOCIADAS:\n• ${item.associatedConditions.join('\n• ')}\n\n`;
    }

    text += `RESULTADOS NOC:\n`;
    item.nocList.forEach((noc) => {
      text += `\n[NOC ${noc.code}] ${noc.label}\n`;
      text += `Definición: ${noc.definition}\n`;
      text += `Meta / Puntuación Diana: ${noc.targetScore}\n`;
      text += `Indicadores:\n  - ${noc.indicators.join('\n  - ')}\n`;
    });

    text += `\nINTERVENCIONES NIC:\n`;
    item.nicList.forEach((nic) => {
      text += `\n[NIC ${nic.code}] ${nic.label} (${nic.priority})\n`;
      text += `Definición: ${nic.definition}\n`;
      text += `Actividades Principales:\n  • ${nic.activities.join('\n  • ')}\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedItem(item.id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  // Copiar PLACE
  const handleCopyPlace = () => {
    let text = `PLAN DE CUIDADOS DE ENFERMERÍA (PLACE OFICIAL)\n`;
    text += `Paciente: ${placePatientName} | Servicio: ${placeService}\n\n`;
    text += `1. DIAGNÓSTICO ENFERMERO (NANDA-I):\n${placeNanda}\n\n`;
    text += `2. CRITERIOS DE RESULTADO (NOC):\n${placeNoc}\n\n`;
    text += `3. INTERVENCIONES Y ACTIVIDADES (NIC):\n• ${placeNic}\n\n`;
    text += `4. EVALUACIÓN:\n${placeEvaluation}\n`;

    navigator.clipboard.writeText(text);
    setCopiedPlace(true);
    setTimeout(() => setCopiedPlace(false), 2000);
  };

  return (
    <section className="space-y-5">
      {/* Cabecera Principal */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-[#42edd8] border border-teal-500/40">
              Actualización Oficial 2024 – 2026
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              NANDA-I • NOC 6ta/7ma • NIC 7ma/8va
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#092b3d] text-[#42edd8] border border-[#144863]">
              Taxonomía PAE
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#22b8af]" />
            Interrelaciones NANDA - NOC - NIC & Generador de PLACE
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Buscador clínico de taxonomías enlazadas con indicadores diana, actividades priorizadas y creador de planes de cuidado.
          </p>
        </div>

        {/* Selector de Pestañas Superiores */}
        <div className="flex bg-[#051522] p-1 rounded-xl border border-[#11405c] text-xs font-bold shrink-0 flex-wrap sm:flex-nowrap">
          <button
            type="button"
            onClick={() => setActiveSubTab('buscador')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'buscador' ? 'bg-[#179c94] text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Buscador N-N-N</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('place')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'place' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Generador PLACE</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('metodologia')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'metodologia' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Metodología PAE</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. BUSCADOR INTERACTIVO NANDA / NOC / NIC 2024-2026 */}
      {/* ========================================================= */}
      {activeSubTab === 'buscador' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Panel Izquierdo: Buscador y Lista de Diagnósticos (5 cols) */}
          <div className="lg:col-span-5 bg-[#071d2b] p-4 sm:p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-3.5 flex flex-col max-h-[820px]">
            {/* Buscador en Vivo */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por código (ej. 00132), término (Dolor, Glucemia, Respiratorio, Sueño)..."
                className="w-full bg-[#05141f] border border-[#175270] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af]"
              />
            </div>

            {/* Filtros Rápidos de Dominio */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 custom-scrollbar text-[11px]">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'dominio 1', label: 'D1: Promoción' },
                { id: 'dominio 2', label: 'D2: Nutrición' },
                { id: 'dominio 4', label: 'D4: Actividad' },
                { id: 'dominio 5', label: 'D5: Percepción' },
                { id: 'dominio 11', label: 'D11: Seguridad' },
                { id: 'dominio 12', label: 'D12: Confort' }
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelectedDomain(d.id)}
                  className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap cursor-pointer transition ${
                    selectedDomain === d.id
                      ? 'bg-[#179c94] text-white shadow'
                      : 'bg-[#092233] text-slate-400 hover:text-white border border-[#134866]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Resumen de Resultados */}
            <div className="text-[11px] text-slate-400 flex items-center justify-between px-1">
              <span>Mostrando <strong className="text-[#42edd8]">{filteredDiagnoses.length}</strong> diagnósticos oficiales:</span>
              <span className="text-[10px] text-teal-300">NANDA 2024–2026</span>
            </div>

            {/* Lista Scrollable */}
            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2 pr-1">
              {filteredDiagnoses.map((dx) => {
                const isSelected = selectedDiagnosisId === dx.id;
                const saved = isItemSaved(dx.id);

                return (
                  <div
                    key={dx.id}
                    onClick={() => setSelectedDiagnosisId(dx.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#0c344d] to-[#0e3f5e] border-[#22b8af] shadow-md shadow-[#22b8af]/20'
                        : 'bg-[#061824] border-[#12425a] hover:border-[#1a5b80] hover:bg-[#082233]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#092b3d] text-[#42edd8] border border-[#16567a]">
                        NANDA {dx.code}
                      </span>
                      <span className="text-[10px] font-bold text-amber-300">
                        {dx.type}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {dx.label}
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {dx.domain}
                    </p>

                    <div className="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-[#103b54] text-[10px]">
                      <span className="text-teal-300 font-semibold">
                        {dx.nocList.length} NOC • {dx.nicList.length} NIC
                      </span>
                      {saved && (
                        <span className="text-amber-400 font-bold flex items-center gap-1">
                          <Bookmark className="w-3 h-3 fill-amber-400" /> Guardado
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel Derecho: Ficha Completa de Interrelación N-N-N (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#071d2b] p-5 sm:p-6 rounded-2xl border border-[#155478] shadow-2xl space-y-5">
              {/* Encabezado del Diagnóstico Seleccionado */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#12425a]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-[#0e3b54] text-[#42edd8] border border-[#1b6287]">
                      NANDA: {selectedItem.code}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {selectedItem.type}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-white leading-tight">
                    {selectedItem.label}
                  </h3>
                  <p className="text-xs text-teal-200">
                    {selectedItem.domain} • <span className="text-slate-400">{selectedItem.classType}</span>
                  </p>
                </div>

                {/* Acciones de Cabecera */}
                <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                  {/* Guardar en Cuenta */}
                  <button
                    type="button"
                    onClick={() => {
                      saveItem({
                        id: selectedItem.id,
                        type: 'diagnostico',
                        title: `${selectedItem.code} - ${selectedItem.label}`,
                        subtitle: selectedItem.definition,
                        category: selectedItem.domain,
                      });
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer active:scale-95 ${
                      isItemSaved(selectedItem.id)
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                        : 'bg-[#092538] hover:bg-[#0d3650] text-slate-300 hover:text-white border-[#144863]'
                    }`}
                    title={isItemSaved(selectedItem.id) ? 'Guardado en tu cuenta (haz clic para quitar)' : 'Guardar en mi cuenta'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isItemSaved(selectedItem.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                    <span>{isItemSaved(selectedItem.id) ? 'Guardado' : 'Guardar'}</span>
                  </button>

                  {/* Cargar en PLACE */}
                  <button
                    type="button"
                    onClick={() => handleLoadIntoPlace(selectedItem)}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 hover:brightness-110 text-white text-xs font-bold transition flex items-center gap-1.5 shadow cursor-pointer active:scale-95"
                    title="Cargar esta correlación en el Generador de PLACE"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Generar PLACE</span>
                  </button>

                  {/* Copiar Ficha */}
                  <button
                    type="button"
                    onClick={() => handleCopyInterrelation(selectedItem)}
                    className="p-2 rounded-xl bg-[#092638] hover:bg-[#0d3852] text-slate-300 hover:text-white transition border border-[#144863] cursor-pointer"
                    title="Copiar Ficha N-N-N completa"
                  >
                    {copiedItem === selectedItem.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Definición NANDA */}
              <div className="bg-[#05141f] p-3.5 rounded-xl border border-[#113a52] text-xs text-slate-200 leading-relaxed">
                <span className="font-bold text-[#42edd8] block mb-0.5">Definición Diagnóstica:</span>
                {selectedItem.definition}
              </div>

              {/* Formato PES y Factores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#061824] p-3.5 rounded-xl border border-[#103c57] space-y-1.5">
                  <h5 className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" /> Factores Relacionados (Etiología):
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    {selectedItem.relatedFactors.map((rf, idx) => (
                      <li key={idx}>{rf}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#061824] p-3.5 rounded-xl border border-[#103c57] space-y-1.5">
                  <h5 className="font-bold text-teal-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Características Definitorias (Signos):
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    {selectedItem.definingCharacteristics.map((dc, idx) => (
                      <li key={idx}>{dc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Población de Riesgo y Condiciones Asociadas (Novedad 2024-2026) */}
              {(selectedItem.riskPopulations.length > 0 || selectedItem.associatedConditions.length > 0) && (
                <div className="p-3 bg-gradient-to-r from-[#092233] to-[#071c2b] border border-[#134b6e] rounded-xl text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Factores Taxonómicos Adicionales (NANDA 2024–2026):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
                    {selectedItem.riskPopulations.length > 0 && (
                      <div>
                        <strong className="text-cyan-300">Población en riesgo:</strong> {selectedItem.riskPopulations.join(', ')}.
                      </div>
                    )}
                    {selectedItem.associatedConditions.length > 0 && (
                      <div>
                        <strong className="text-amber-300">Condiciones asociadas:</strong> {selectedItem.associatedConditions.join(', ')}.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* RESULTADOS NOC VINCULADOS */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#22b8af]" />
                    Resultados de Enfermería (NOC Vinculados):
                  </h4>
                  <span className="text-[11px] text-teal-300 font-bold">
                    {selectedItem.nocList.length} Resultados Específicos
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedItem.nocList.map((noc) => (
                    <div
                      key={noc.code}
                      className="p-4 rounded-xl bg-[#061824] border border-[#144863] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black px-2 py-0.5 rounded bg-[#0b334d] text-[#42edd8] border border-[#17577a]">
                              NOC {noc.code}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-white">
                              {noc.label}
                            </h5>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {noc.definition}
                          </p>
                        </div>
                      </div>

                      {/* Puntuación Diana y Escala */}
                      <div className="p-2.5 rounded-lg bg-[#082233] border border-[#124563] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-amber-300 font-semibold">
                          🎯 Puntuación Diana: <strong>{noc.targetScore}</strong>
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {noc.scaleDescription}
                        </span>
                      </div>

                      {/* Indicadores Clínicos */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-300 block">
                          Indicadores Específicos para Evaluación:
                        </span>
                        <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
                          {noc.indicators.map((ind, i) => (
                            <div key={i} className="flex items-center gap-1.5 bg-[#04131d] px-2.5 py-1 rounded-md border border-[#0d344d]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22b8af]" />
                              <span>{ind}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERVENCIONES NIC VINCULADAS */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400" />
                    Intervenciones de Enfermería (NIC Vinculadas):
                  </h4>
                  <span className="text-[11px] text-amber-300 font-bold">
                    {selectedItem.nicList.length} Intervenciones
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedItem.nicList.map((nic) => (
                    <div
                      key={nic.code}
                      className="p-4 rounded-xl bg-[#061824] border border-[#144863] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black px-2 py-0.5 rounded bg-[#35250a] text-amber-300 border border-amber-600/50">
                              NIC {nic.code}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-white">
                              {nic.label}
                            </h5>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            {nic.definition}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#092b3d] text-teal-300 border border-[#15567a] shrink-0">
                          {nic.priority}
                        </span>
                      </div>

                      {/* Actividades Prioritarias */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-300 block">
                          Actividades de Enfermería Paso a Paso:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300 bg-[#04131d] p-3 rounded-lg border border-[#0d344d]">
                          {nic.activities.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. GENERADOR Y PLANTILLAS DE PLACE OFICIAL */}
      {/* ========================================================= */}
      {activeSubTab === 'place' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12 bg-[#071d2b] p-5 sm:p-6 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#12425a]">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                  Plan de Cuidados de Enfermería (PLACE) — Formato Oficial
                </h3>
                <p className="text-xs text-slate-300">
                  Edita los datos del paciente o el diagnóstico seleccionado para generar el plan listo para imprimir o copiar.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyPlace}
                  className="px-3.5 py-2 rounded-xl bg-[#092638] hover:bg-[#0d3852] text-white text-xs font-bold transition flex items-center gap-1.5 border border-[#175270] cursor-pointer"
                >
                  {copiedPlace ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPlace ? '¡Copiado!' : 'Copiar PLACE'}</span>
                </button>
              </div>
            </div>

            {/* Formulario editable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Nombre del Paciente / Iniciales:</label>
                <input
                  type="text"
                  value={placePatientName}
                  onChange={(e) => setPlacePatientName(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Servicio / Unidad:</label>
                <input
                  type="text"
                  value={placeService}
                  onChange={(e) => setPlaceService(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-amber-300 block mb-1">
                  1. Diagnóstico de Enfermería (NANDA-I con Formato PES):
                </label>
                <textarea
                  rows={2}
                  value={placeNanda}
                  onChange={(e) => setPlaceNanda(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-teal-300 block mb-1">
                  2. Criterios de Resultado (NOC, Indicadores y Meta):
                </label>
                <textarea
                  rows={2}
                  value={placeNoc}
                  onChange={(e) => setPlaceNoc(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-cyan-300 block mb-1">
                  3. Intervenciones y Actividades de Enfermería (NIC):
                </label>
                <textarea
                  rows={4}
                  value={placeNic}
                  onChange={(e) => setPlaceNic(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-emerald-300 block mb-1">
                  4. Evaluación del Resultado Esperado:
                </label>
                <textarea
                  rows={2}
                  value={placeEvaluation}
                  onChange={(e) => setPlaceEvaluation(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. METODOLOGÍA DEL PROCESO ENFERMERO (PAE 2024-2026) */}
      {/* ========================================================= */}
      {activeSubTab === 'metodologia' && (
        <div className="bg-[#071d2b] p-5 sm:p-7 rounded-2xl border border-[#12425a] shadow-xl space-y-6">
          <div className="border-b border-[#12425a] pb-4">
            <span className="text-xs font-bold text-[#42edd8] uppercase tracking-wider block mb-1">
              Guía Metodológica Oficial • Proceso de Atención de Enfermería (PAE)
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Estructura y Fases del Proceso de Atención de Enfermería (PAE) 2024–2026
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Fundamentos científicos de la formulación diagnóstica NANDA-I, medición de resultados NOC e intervenciones NIC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
            {[
              { num: '1', title: 'Valoración', desc: 'Recolección sistemática de datos subjetivos y objetivos mediante anamnesis y exploración física.' },
              { num: '2', title: 'Diagnóstico', desc: 'Juicio clínico sobre las respuestas de la persona o comunidad a problemas de salud reales o potenciales.' },
              { num: '3', title: 'Planificación', desc: 'Establecimiento de prioridades, resultados esperados (NOC) y selección de intervenciones (NIC).' },
              { num: '4', title: 'Ejecución', desc: 'Puesta en marcha práctica del plan de cuidados y registro en notas de enfermería (SOAPIE).' },
              { num: '5', title: 'Evaluación', desc: 'Comparación del estado del paciente con los resultados NOC previstos para reajustar el plan.' }
            ].map((f) => (
              <div key={f.num} className="p-3.5 rounded-xl bg-[#05141f] border border-[#113a52] space-y-1">
                <span className="w-6 h-6 rounded-full bg-[#179c94] text-white font-black text-xs flex items-center justify-center">
                  {f.num}
                </span>
                <h4 className="font-bold text-white text-sm">{f.title}</h4>
                <p className="text-[11px] text-slate-300 leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Componentes de la Etiqueta Diagnóstica */}
          <div className="bg-[#05141f] p-5 rounded-xl border border-[#113a52] space-y-4">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
              Componentes de la Etiqueta Diagnóstica NANDA-I:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="space-y-1">
                <strong className="text-white block">1. Etiqueta Diagnóstica:</strong>
                <p className="text-[11px] leading-relaxed">Describe el problema de salud del sujeto de atención o la respuesta para la cual se administra la terapia de enfermería.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-white block">2. Factores Relacionados (r/c):</strong>
                <p className="text-[11px] leading-relaxed">Identifican una o más causas probables del problema de salud. Orientan la terapia de enfermería requerida.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-white block">3. Características Definitorias (e/p):</strong>
                <p className="text-[11px] leading-relaxed">Son los grupos de signos y síntomas que indican la presencia de una etiqueta de diagnóstico en particular.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-white block">4. Poblaciones de Riesgo:</strong>
                <p className="text-[11px] leading-relaxed">Grupos de individuos que comparten características que los hacen más susceptibles (extremos de vida, posparto, ancianos).</p>
              </div>
              <div className="space-y-1">
                <strong className="text-white block">5. Condiciones Asociadas:</strong>
                <p className="text-[11px] leading-relaxed">Diagnósticos médicos, procedimientos quirúrgicos, aparatos o fármacos que intervienen en el desarrollo del cuadro.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-white block">6. Puntuación Diana (NOC):</strong>
                <p className="text-[11px] leading-relaxed">Escala Likert de 1 a 5 con objetivo de Mantener a X y Aumentar a Y para evaluar la eficacia de los cuidados.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
