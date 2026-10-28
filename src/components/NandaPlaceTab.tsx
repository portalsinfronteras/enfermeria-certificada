import React, { useState, useMemo, useEffect } from 'react';
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
  Award,
  X,
  Stethoscope
} from 'lucide-react';
import {
  NANDA_INTERRELACIONES_2024_2026,
  NandaInterrelationItem
} from '../data/nandaInterrelacionesData';
import { useAuth } from '../context/AuthContext';

type SubTab = 'buscador' | 'place' | 'metodologia';

interface DomainMeta {
  num: number;
  id: string;
  name: string;
  desc: string;
  badgeColor: string;
}

const DOMINIOS_META: DomainMeta[] = [
  { num: 1, id: 'dominio 1', name: 'Promoción de la salud', desc: 'Toma de conciencia y gestión de la salud', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { num: 2, id: 'dominio 2', name: 'Nutrición', desc: 'Ingestión, digestión, metabolismo e hidratación', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { num: 3, id: 'dominio 3', name: 'Eliminación e intercambio', desc: 'Función urinaria, gastrointestinal y respiratoria', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { num: 4, id: 'dominio 4', name: 'Actividad / Reposo', desc: 'Sueño, movilidad, cardiovascular y autocuidado', badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  { num: 5, id: 'dominio 5', name: 'Percepción / Cognición', desc: 'Atención, memoria, cognición y comunicación', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  { num: 6, id: 'dominio 6', name: 'Autopercepción', desc: 'Autoconcepto, autoestima e imagen corporal', badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40' },
  { num: 7, id: 'dominio 7', name: 'Rol / Relaciones', desc: 'Roles de cuidador, procesos familiares y relaciones', badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40' },
  { num: 8, id: 'dominio 8', name: 'Sexualidad', desc: 'Identidad, función sexual y reproducción', badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40' },
  { num: 9, id: 'dominio 9', name: 'Afrontamiento / Tolerancia al estrés', desc: 'Respuestas postraumáticas y adaptación al estrés', badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
  { num: 10, id: 'dominio 10', name: 'Principios vitales', desc: 'Valores, creencias y congruencia espiritual', badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40' },
  { num: 11, id: 'dominio 11', name: 'Seguridad / Protección', desc: 'Infección, lesión tisular, violencia y termorregulación', badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40' },
  { num: 12, id: 'dominio 12', name: 'Confort', desc: 'Confort físico (dolor agudo/crónico), ambiental y social', badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
  { num: 13, id: 'dominio 13', name: 'Crecimiento / Desarrollo', desc: 'Crecimiento ponderal y neurodesarrollo infantil', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' }
];

export const NandaPlaceTab: React.FC = () => {
  const { user, saveItem, isItemSaved } = useAuth();

  const [activeSubTab, setActiveSubTab] = useState<SubTab>('buscador');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('todos');
  
  // Diagnóstico abierto en la ventana modal
  const [modalDiagnosis, setModalDiagnosis] = useState<NandaInterrelationItem | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalDiagnosis(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Estados del Generador de PLACE
  const [placePatientName, setPlacePatientName] = useState<string>('Paciente Adulto (Caso Clínico)');
  const [placeService, setPlaceService] = useState<string>('Medicina Interna / Hospitalización');
  const [placeNanda, setPlaceNanda] = useState<string>(
    `${NANDA_INTERRELACIONES_2024_2026[0].code} - ${NANDA_INTERRELACIONES_2024_2026[0].label}`
  );
  const [placeNoc, setPlaceNoc] = useState<string>(
    `${NANDA_INTERRELACIONES_2024_2026[0].nocList[0]?.code || 'NOC'} - ${NANDA_INTERRELACIONES_2024_2026[0].nocList[0]?.label || ''}\nMeta: ${NANDA_INTERRELACIONES_2024_2026[0].nocList[0]?.targetScore || ''}`
  );
  const [placeNic, setPlaceNic] = useState<string>(
    NANDA_INTERRELACIONES_2024_2026[0].nicList[0]?.activities.slice(0, 4).join('\n• ') || ''
  );
  const [placeEvaluation, setPlaceEvaluation] = useState<string>(
    'Paciente evoluciona favorablemente con mejoría de los parámetros fisiológicos y alivio de síntomas tras intervenciones de enfermería.'
  );
  const [copiedPlace, setCopiedPlace] = useState<boolean>(false);
  const [savedPlaceSuccess, setSavedPlaceSuccess] = useState<boolean>(false);

  // Conteo de diagnósticos por dominio (usando número exacto de dominio)
  const domainCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const item of NANDA_INTERRELACIONES_2024_2026) {
      counts[item.domainNumber] = (counts[item.domainNumber] || 0) + 1;
    }
    return counts;
  }, []);

  // Lista filtrada de diagnósticos
  const filteredDiagnoses = useMemo(() => {
    return NANDA_INTERRELACIONES_2024_2026.filter((item) => {
      // Si hay búsqueda activa, filtrar globalmente o sobre el dominio
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesCode = item.code.includes(q);
        const matchesLabel = item.label.toLowerCase().includes(q);
        const matchesDomain = item.domain.toLowerCase().includes(q);
        const matchesClass = item.classType.toLowerCase().includes(q);
        const matchesNoc = item.nocList.some(
          (n) => n.code.includes(q) || n.label.toLowerCase().includes(q)
        );
        const matchesNic = item.nicList.some(
          (n) => n.code.includes(q) || n.label.toLowerCase().includes(q)
        );
        const matchesSymptoms = item.definingCharacteristics.some((s) => s.toLowerCase().includes(q));

        const matchesQuery = matchesCode || matchesLabel || matchesDomain || matchesClass || matchesNoc || matchesNic || matchesSymptoms;

        if (selectedDomain !== 'todos') {
          const domNum = parseInt(selectedDomain, 10);
          return matchesQuery && item.domainNumber === domNum;
        }
        return matchesQuery;
      }

      // Filtro de Dominio
      if (selectedDomain !== 'todos') {
        const domNum = parseInt(selectedDomain, 10);
        return item.domainNumber === domNum;
      }

      return true;
    });
  }, [searchQuery, selectedDomain]);

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
    setModalDiagnosis(null);
    setActiveSubTab('place');
  };

  // Copiar Ficha N-N-N completa
  const handleCopyInterrelation = (item: NandaInterrelationItem) => {
    let text = `========================================================\n`;
    text += `INTERRELACIÓN NANDA - NOC - NIC (2024-2026)\n`;
    text += `Enfermería Certificada — Lic. Miguel Pantoja A.\n`;
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

  const handleCopyPlace = () => {
    const text = `========================================================
PLAN DE CUIDADOS DE ENFERMERÍA (PLACE OFICIAL)
Enfermería Certificada — Lic. Miguel Pantoja A.
========================================================
PACIENTE: ${placePatientName}
SERVICIO / UNIDAD: ${placeService}
FECHA: ${new Date().toLocaleDateString('es-PE')}

1. DIAGNÓSTICO DE ENFERMERÍA (NANDA-I):
${placeNanda}

2. CRITERIOS DE RESULTADO (NOC):
${placeNoc}

3. INTERVENCIONES Y ACTIVIDADES (NIC):
• ${placeNic}

4. EVALUACIÓN DE RESPUESTA:
${placeEvaluation}
========================================================`;

    navigator.clipboard.writeText(text);
    setCopiedPlace(true);
    setTimeout(() => setCopiedPlace(false), 2500);
  };

  const currentDomainMeta = DOMINIOS_META.find(d => String(d.num) === selectedDomain);

  return (
    <section className="space-y-6">
      {/* Cabecera Principal */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-teal-500/20 text-[#42edd8] border border-teal-500/40">
              Actualización Oficial 2024 – 2026
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              205 Diagnósticos NANDA-I • NOC • NIC
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#092b3d] text-[#42edd8] border border-[#144863]">
              Taxonomía PAE por Dominios
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#22b8af]" />
            Interrelaciones NANDA - NOC - NIC & Generador de PLACE
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Organizado por los 13 Dominios Oficiales. Haga clic en cualquier diagnóstico para abrir la ventana clínica con su protocolo completo.
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
            <Layers className="w-3.5 h-3.5" />
            <span>Dominios & Diagnósticos</span>
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
      {/* 1. SECCIÓN DOMINIOS Y DIAGNÓSTICOS CON VENTANA MODAL */}
      {/* ========================================================= */}
      {activeSubTab === 'buscador' && (
        <div className="space-y-6">
          {/* Barra de Búsqueda Global */}
          <div className="bg-[#071d2b] p-4 sm:p-5 rounded-2xl border border-[#12425a] shadow-xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar entre los 205 diagnósticos por código (ej. 00132), término (Dolor, Glucemia, Respiratorio, Sueño)..."
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af] shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                    title="Limpiar búsqueda"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {selectedDomain !== 'todos' && (
                <button
                  type="button"
                  onClick={() => setSelectedDomain('todos')}
                  className="px-3 py-2 rounded-xl bg-[#092233] hover:bg-[#0c3149] text-[#42edd8] border border-[#144863] text-xs font-bold transition flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Ver Todos los Dominios</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1 border-t border-[#0e3146]">
              <span>
                Seleccione un <strong>Dominio</strong> para ver sus diagnósticos, o haga clic directamente en cualquier botón para abrir la ventana con su protocolo clínico completo.
              </span>
              <span className="text-[#42edd8] font-bold shrink-0">
                {NANDA_INTERRELACIONES_2024_2026.length} Diagnósticos Totales
              </span>
            </div>
          </div>

          {/* GRID DE LOS 13 DOMINIOS OFICIALES */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3 px-1">
              <h3 className="text-sm font-black text-white flex items-center gap-2 uppercase tracking-wide">
                <Layers className="w-4 h-4 text-[#22b8af]" />
                Los 13 Dominios NANDA-I (2024–2026):
              </h3>
              <span className="text-xs text-slate-400">
                Toque cualquier dominio para explorar sus diagnósticos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {/* Botón Ver Todos */}
              <button
                type="button"
                onClick={() => setSelectedDomain('todos')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  selectedDomain === 'todos'
                    ? 'bg-gradient-to-br from-[#0c3852] to-[#145378] border-[#22b8af] shadow-lg shadow-[#22b8af]/20 ring-1 ring-[#22b8af]'
                    : 'bg-[#071d2b] border-[#12425a] hover:border-[#1c5d82] hover:bg-[#0a273b]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#05141f] text-[#42edd8] border border-[#175270]">
                      Todos
                    </span>
                    <span className="text-xs font-black text-white">205</span>
                  </div>
                  <h4 className="text-xs font-extrabold text-white leading-tight">
                    Catálogo Completo
                  </h4>
                </div>
                <span className="text-[10px] text-teal-300 mt-2 block font-medium">
                  {selectedDomain === 'todos' ? '● Seleccionado' : 'Ver todos'}
                </span>
              </button>

              {/* Los 13 Dominios */}
              {DOMINIOS_META.map((d) => {
                const count = domainCounts[d.num] || 0;
                const isSelected = selectedDomain === String(d.num);

                return (
                  <button
                    key={d.num}
                    type="button"
                    onClick={() => setSelectedDomain(String(d.num))}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#0c3852] to-[#145378] border-[#22b8af] shadow-lg shadow-[#22b8af]/20 ring-1 ring-[#22b8af]'
                        : 'bg-[#071d2b] border-[#12425a] hover:border-[#1c5d82] hover:bg-[#0a273b]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded border ${d.badgeColor}`}>
                          D{d.num}
                        </span>
                        <span className="text-xs font-black text-slate-200">{count}</span>
                      </div>
                      <h4 className="text-xs font-extrabold text-white leading-tight">
                        {d.name}
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 block line-clamp-1">
                      {isSelected ? '● Seleccionado' : `${count} diag.`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* LISTA / GRID DE DIAGNÓSTICOS DEL DOMINIO SELECCIONADO */}
          <div className="bg-[#071d2b] p-5 sm:p-6 rounded-2xl border border-[#12425a] shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#12425a]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {currentDomainMeta ? `Dominio ${currentDomainMeta.num}: ${currentDomainMeta.name}` : 'Todos los Diagnósticos NANDA-I'}
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#12425a] text-[#42edd8] border border-[#185575]">
                    {filteredDiagnoses.length} diagnósticos
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {currentDomainMeta ? currentDomainMeta.desc : 'Mostrando diagnósticos ordenados por taxonomía oficial. Haga clic en cualquiera para abrir su protocolo.'}
                </p>
              </div>

              <span className="text-[11px] text-teal-300 font-bold bg-[#05141f] px-3 py-1 rounded-lg border border-[#134866]">
                Toque o clic para abrir ventana completa
              </span>
            </div>

            {/* Empty State */}
            {filteredDiagnoses.length === 0 && (
              <div className="text-center py-12 px-4 bg-[#05141f] rounded-xl border border-dashed border-[#175270] space-y-2">
                <p className="text-xs sm:text-sm text-slate-300 font-semibold">
                  No se encontraron diagnósticos que coincidan con la búsqueda "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDomain('todos');
                  }}
                  className="text-xs font-bold text-[#42edd8] hover:underline cursor-pointer"
                >
                  Restablecer búsqueda y ver los 205 diagnósticos
                </button>
              </div>
            )}

            {/* Diagnoses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredDiagnoses.map((dx) => {
                const saved = isItemSaved(dx.id);

                return (
                  <button
                    key={dx.id}
                    type="button"
                    onClick={() => setModalDiagnosis(dx)}
                    className="p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 bg-[#05141f] border-[#13425e] hover:border-[#22b8af] hover:bg-[#072133] hover:shadow-lg hover:shadow-[#22b8af]/10 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1.5 mb-2">
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#092b3d] text-[#42edd8] border border-[#16567a]">
                          NANDA {dx.code}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {saved && (
                            <span className="text-amber-400 font-bold text-[10px] flex items-center gap-0.5">
                              <Bookmark className="w-3 h-3 fill-amber-400" />
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-amber-300/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            {dx.type}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-xs sm:text-sm font-black text-white leading-snug group-hover:text-[#42edd8] transition-colors">
                        {dx.label}
                      </h4>

                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {dx.domain} • <span className="text-slate-300">{dx.classType}</span>
                      </p>

                      <p className="text-[11px] text-slate-400/80 mt-2 line-clamp-2 leading-relaxed">
                        {dx.definition}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-[#0e3146] text-[10px]">
                      <span className="text-teal-300 font-semibold flex items-center gap-1">
                        <Target className="w-3 h-3 text-[#22b8af]" /> {dx.nocList.length} NOC • {dx.nicList.length} NIC
                      </span>
                      <span className="text-slate-400 group-hover:text-[#42edd8] font-bold flex items-center gap-0.5 transition-colors">
                        <span>Ver ventana</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VENTANA MODAL FLOTANTE (DETALLE COMPLETO DEL DIAGNÓSTICO) */}
      {/* ========================================================= */}
      {modalDiagnosis && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#071d2b] border border-[#1b6287] rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl shadow-black/80 overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#071d2b] via-[#0b2f45] to-[#071d2b] border-b border-[#144863] flex flex-col sm:flex-row sm:items-start justify-between gap-4 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-lg bg-[#0e3b54] text-[#42edd8] border border-[#1b6287]">
                    NANDA: {modalDiagnosis.code}
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-lg border border-amber-500/40">
                    {modalDiagnosis.type}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {modalDiagnosis.domain}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {modalDiagnosis.label}
                </h3>
                <p className="text-xs text-teal-300">
                  {modalDiagnosis.classType}
                </p>
              </div>

              {/* Botones de Cabecera */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                {/* Guardar en mi cuenta */}
                <button
                  type="button"
                  onClick={() => {
                    saveItem({
                      id: modalDiagnosis.id,
                      type: 'diagnostico',
                      title: `${modalDiagnosis.code} - ${modalDiagnosis.label}`,
                      subtitle: modalDiagnosis.definition,
                      category: modalDiagnosis.domain,
                    });
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer active:scale-95 ${
                    isItemSaved(modalDiagnosis.id)
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-sm'
                      : 'bg-[#092538] hover:bg-[#0d3650] text-slate-300 hover:text-white border-[#144863]'
                  }`}
                  title={isItemSaved(modalDiagnosis.id) ? 'Guardado en tu libreta' : 'Guardar en mi cuenta'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isItemSaved(modalDiagnosis.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span>{isItemSaved(modalDiagnosis.id) ? 'Guardado' : 'Guardar'}</span>
                </button>

                {/* Copiar Ficha */}
                <button
                  type="button"
                  onClick={() => handleCopyInterrelation(modalDiagnosis)}
                  className="px-3 py-1.5 rounded-xl bg-[#092638] hover:bg-[#0d3852] text-slate-300 hover:text-white text-xs font-bold transition border border-[#144863] flex items-center gap-1.5 cursor-pointer"
                  title="Copiar Ficha N-N-N completa"
                >
                  {copiedItem === modalDiagnosis.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedItem === modalDiagnosis.id ? '¡Copiado!' : 'Copiar'}</span>
                </button>

                {/* Cerrar Ventana */}
                <button
                  type="button"
                  onClick={() => setModalDiagnosis(null)}
                  className="p-1.5 rounded-xl bg-[#05141f] hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-[#144863] hover:border-rose-500/40 transition cursor-pointer"
                  title="Cerrar ventana (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar space-y-5 flex-1">
              {/* Definición NANDA */}
              <div className="bg-[#05141f] p-4 rounded-xl border border-[#113a52] text-xs sm:text-sm text-slate-200 leading-relaxed space-y-1">
                <span className="font-black text-[#42edd8] block uppercase tracking-wide text-xs">
                  Definición Diagnóstica Oficial (NANDA-I):
                </span>
                <p>{modalDiagnosis.definition}</p>
              </div>

              {/* Formato PES y Factores */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Factores Relacionados */}
                <div className="bg-[#05141f] p-4 rounded-xl border border-[#103c57] space-y-2">
                  <h5 className="font-bold text-amber-300 flex items-center gap-1.5 text-xs sm:text-sm">
                    <Target className="w-4 h-4" /> Factores Relacionados (Etiología):
                  </h5>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-[11px] sm:text-xs">
                    {modalDiagnosis.relatedFactors.length > 0 ? (
                      modalDiagnosis.relatedFactors.map((rf, idx) => <li key={idx}>{rf}</li>)
                    ) : (
                      <li className="text-slate-400 italic">No aplica (Diagnóstico de riesgo o promoción)</li>
                    )}
                  </ul>
                </div>

                {/* Características Definitorias */}
                <div className="bg-[#05141f] p-4 rounded-xl border border-[#103c57] space-y-2">
                  <h5 className="font-bold text-[#42edd8] flex items-center gap-1.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Características Definitorias (Signos y Síntomas):
                  </h5>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-[11px] sm:text-xs">
                    {modalDiagnosis.definingCharacteristics.length > 0 ? (
                      modalDiagnosis.definingCharacteristics.map((dc, idx) => <li key={idx}>{dc}</li>)
                    ) : (
                      <li className="text-slate-400 italic">No aplica (Diagnóstico potencial de riesgo)</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Poblaciones de Riesgo y Condiciones Asociadas */}
              {(modalDiagnosis.riskPopulations.length > 0 || modalDiagnosis.associatedConditions.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {modalDiagnosis.riskPopulations.length > 0 && (
                    <div className="bg-[#05141f] p-3.5 rounded-xl border border-[#103c57]">
                      <span className="font-bold text-slate-300 block mb-1">Poblaciones de Riesgo:</span>
                      <p className="text-slate-400 text-[11px]">{modalDiagnosis.riskPopulations.join(', ')}</p>
                    </div>
                  )}
                  {modalDiagnosis.associatedConditions.length > 0 && (
                    <div className="bg-[#05141f] p-3.5 rounded-xl border border-[#103c57]">
                      <span className="font-bold text-slate-300 block mb-1">Condiciones Asociadas (Patologías):</span>
                      <p className="text-slate-400 text-[11px]">{modalDiagnosis.associatedConditions.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}

              {/* RESULTADOS NOC VINCULADOS */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
                  <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2 uppercase tracking-wide">
                    <Target className="w-4 h-4 text-[#22b8af]" />
                    Resultados de Enfermería (NOC Vinculados):
                  </h4>
                  <span className="text-[11px] text-teal-300 font-bold">
                    {modalDiagnosis.nocList.length} Resultados Específicos
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {modalDiagnosis.nocList.map((noc) => (
                    <div
                      key={noc.code}
                      className="p-4 rounded-xl bg-[#05141f] border border-[#144863] space-y-2.5"
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
                          <p className="text-[11px] text-slate-400 mt-1">
                            {noc.definition}
                          </p>
                        </div>
                      </div>

                      {/* Puntuación Diana y Escala */}
                      <div className="p-2.5 rounded-lg bg-[#071d2b] border border-[#124563] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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
                            <div key={i} className="flex items-center gap-1.5 bg-[#071d2b] px-2.5 py-1 rounded-md border border-[#0d344d]">
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
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
                  <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-2 uppercase tracking-wide">
                    <Layers className="w-4 h-4 text-teal-400" />
                    Intervenciones de Enfermería (NIC Vinculadas):
                  </h4>
                  <span className="text-[11px] text-teal-300 font-bold">
                    {modalDiagnosis.nicList.length} Intervenciones Prioritarias
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {modalDiagnosis.nicList.map((nic) => (
                    <div
                      key={nic.code}
                      className="p-4 rounded-xl bg-[#05141f] border border-[#144863] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black px-2 py-0.5 rounded bg-[#0b334d] text-teal-300 border border-[#17577a]">
                              NIC {nic.code}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-white">
                              {nic.label}
                            </h5>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1">
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
                        <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300 bg-[#071d2b] p-3 rounded-lg border border-[#0d344d]">
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

            {/* Modal Footer Actions */}
            <div className="p-4 bg-[#05141f] border-t border-[#12425a] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-slate-400">
                Pág. {modalDiagnosis.code} • Taxonomía NANDA-I 2024-2026
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Cargar en PLACE */}
                <button
                  type="button"
                  onClick={() => handleLoadIntoPlace(modalDiagnosis)}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 hover:brightness-110 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer active:scale-95"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Cargar en Generador de PLACE</span>
                </button>

                {/* Cerrar */}
                <button
                  type="button"
                  onClick={() => setModalDiagnosis(null)}
                  className="px-4 py-2 rounded-xl bg-[#092638] hover:bg-[#0d3852] text-slate-300 hover:text-white text-xs font-bold transition border border-[#144863] cursor-pointer"
                >
                  Cerrar
                </button>
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

              <div className="flex items-center gap-2 flex-wrap">
                {/* Guardar PLACE en cuenta */}
                <button
                  type="button"
                  onClick={() => {
                    saveItem({
                      id: 'place_' + Date.now(),
                      type: 'place',
                      title: placeNanda,
                      subtitle: `${placePatientName} • ${placeService}`,
                      data: {
                        placePatientName,
                        placeService,
                        placeNanda,
                        placeNoc,
                        placeNic,
                        placeEvaluation
                      }
                    });
                    setSavedPlaceSuccess(true);
                    setTimeout(() => setSavedPlaceSuccess(false), 3000);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#0e3852] hover:bg-[#134e73] text-[#42edd8] border border-[#1b6287] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                >
                  <Bookmark className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{savedPlaceSuccess ? '¡Guardado en tu Libreta!' : 'Guardar en mi Libreta'}</span>
                </button>

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
                  3. Intervenciones y Actividades de Enfermería (NIC Priorizadas):
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
                  4. Evaluación de la Respuesta del Paciente (NOC Alcanzado):
                </label>
                <textarea
                  rows={2}
                  value={placeEvaluation}
                  onChange={(e) => setPlaceEvaluation(e.target.value)}
                  className="w-full bg-[#05141f] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                />
              </div>
            </div>

            {/* Vista Previa Formato Oficial de PLACE */}
            <div className="pt-4 border-t border-[#12425a]">
              <span className="text-xs font-bold text-slate-300 block mb-2">
                Vista Previa del Formato Oficial PLACE:
              </span>

              <div className="bg-[#051522] rounded-xl border border-[#154664] overflow-hidden text-xs">
                {/* Cabecera Tabla */}
                <div className="bg-[#092a3d] p-3 border-b border-[#154664] grid grid-cols-1 sm:grid-cols-3 gap-2 text-white font-bold">
                  <div>Paciente: <span className="font-normal text-teal-200">{placePatientName}</span></div>
                  <div>Servicio: <span className="font-normal text-teal-200">{placeService}</span></div>
                  <div>Fecha: <span className="font-normal text-teal-200">{new Date().toLocaleDateString('es-PE')}</span></div>
                </div>

                {/* Columnas PLACE */}
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#154664] p-3 gap-3">
                  <div className="space-y-1">
                    <span className="font-bold text-amber-300 block uppercase text-[11px]">
                      DIAGNÓSTICO ENFERMERO (NANDA-I)
                    </span>
                    <p className="text-slate-200 text-[11px] whitespace-pre-wrap">{placeNanda}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-teal-300 block uppercase text-[11px]">
                      CRITERIOS DE RESULTADO (NOC)
                    </span>
                    <p className="text-slate-200 text-[11px] whitespace-pre-wrap">{placeNoc}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-cyan-300 block uppercase text-[11px]">
                      INTERVENCIONES Y ACTIVIDADES (NIC)
                    </span>
                    <p className="text-slate-200 text-[11px] whitespace-pre-wrap">{placeNic}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-emerald-300 block uppercase text-[11px]">
                      EVALUACIÓN DE RESPUESTA
                    </span>
                    <p className="text-slate-200 text-[11px] whitespace-pre-wrap">{placeEvaluation}</p>
                  </div>
                </div>
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
                <h5 className="font-bold text-white text-xs">{f.title}</h5>
                <p className="text-[11px] text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#05141f] border border-[#113a52] space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase block">1. Formato PES</span>
              <p className="text-xs text-slate-300">
                <strong>P:</strong> Problema (Etiqueta NANDA)<br/>
                <strong>E:</strong> Etiología (Factores relacionados / causas r/c)<br/>
                <strong>S:</strong> Signos y Síntomas (Características definitorias e/p)
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05141f] border border-[#113a52] space-y-2">
              <span className="text-xs font-bold text-teal-300 uppercase block">2. Puntuación Diana (NOC)</span>
              <p className="text-xs text-slate-300">
                Cada resultado NOC se mide en escalas de Likert de 1 a 5 (ej. Gravemente comprometido a No comprometido). Se define: <em>Mantener en X y Aumentar a Y</em>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05141f] border border-[#113a52] space-y-2">
              <span className="text-xs font-bold text-cyan-300 uppercase block">3. Intervenciones NIC</span>
              <p className="text-xs text-slate-300">
                Se priorizan en intervenciones directas o indirectas, clasificadas como prioritarias o sugeridas, con actividades operativas precisas.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
