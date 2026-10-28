import React, { useState, useMemo, useEffect } from 'react';
import { vademecumData, Drug } from '../data/vademecumData';
import { offlineCacheService } from '../services/offlineCacheService';
import { useAuth } from '../context/AuthContext';
import {
  Search,
  Pill,
  AlertTriangle,
  Info,
  X,
  ShieldAlert,
  ChevronRight,
  Sparkles,
  Star,
  Flame,
  Bookmark,
  Check,
  CheckCircle2,
  HardDriveDownload
} from 'lucide-react';

export const VademecumTab: React.FC = () => {
  const { user, saveItem } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 20;

  // Retrieve drugs from local storage offline cache with in-memory fallback
  const drugsList = useMemo(() => {
    return offlineCacheService.getCachedVademecum();
  }, []);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('vademecum_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // View counts persisted in localStorage to track frequently consulted drugs
  const [viewCounts, setViewCounts] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('vademecum_view_counts');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vademecum_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  }, [favorites]);

  // Handle drug consultation and increment view count
  const handleSelectDrug = (drug: Drug) => {
    setSelectedDrug(drug);
    setViewCounts((prev) => {
      const updated = { ...prev, [drug.id]: (prev[drug.id] || 0) + 1 };
      try {
        localStorage.setItem('vademecum_view_counts', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving view counts:', e);
      }
      return updated;
    });
  };

  // Toggle favorite status
  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const drug = drugsList.find((d) => d.id === id);
    if (user && drug) {
      saveItem({
        id: 'med_' + drug.id,
        type: 'medicamento',
        title: drug.name,
        subtitle: `${drug.cat} • ${drug.ind}`,
        category: drug.cat,
      });
    }
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    drugsList.forEach((d) => {
      const mainCat = d.cat.split(' / ')[0].trim();
      set.add(mainCat);
    });
    return ['Todos', ...Array.from(set)];
  }, [drugsList]);

  // Reset page when search term or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredDrugs = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();

    let list = drugsList;

    // Filter by Special Views (Favoritos o Frecuentes)
    if (selectedCategory === 'Favoritos') {
      list = list.filter((d) => favorites.includes(d.id));
    } else if (selectedCategory === 'Frecuentes') {
      list = list
        .filter((d) => (viewCounts[d.id] || 0) > 0)
        .sort((a, b) => (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0));
    } else if (selectedCategory !== 'Todos') {
      list = list.filter((d) =>
        d.cat.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (q) {
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.cat.toLowerCase().includes(q) ||
          d.ind.toLowerCase().includes(q) ||
          d.action.toLowerCase().includes(q)
      );
    }

    // Orden alfabético estricto de la A a la Z (si no está en vista por frecuencia)
    if (selectedCategory !== 'Frecuentes') {
      list = [...list].sort((a, b) =>
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
      );
    }

    return list;
  }, [searchTerm, selectedCategory, favorites, viewCounts, drugsList]);

  const totalPages = Math.ceil(filteredDrugs.length / ITEMS_PER_PAGE) || 1;

  const paginatedDrugs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDrugs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDrugs, currentPage]);

  const handlePageChange = (newPage: number) => {
    const target = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(target);
    const container = document.getElementById('vademecum-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="space-y-4">
      {/* Search Header */}
      <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-center justify-between shadow-xl">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Pill className="w-5 h-5 text-[#22b8af]" />
              Vademécum Farmacológico de Enfermería
            </h2>
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#22b8af]/20 text-[#42edd8] border border-[#22b8af]/40 shadow-sm">
              {drugsList.length} Fármacos Registrados
            </span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 shadow-sm" title="Datos disponibles en memoria y listos para consulta sin conexión a internet">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Offline 100% Disponible</span>
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Consulte información farmacológica, indicaciones y cuidados de enfermería. Marque con ⭐ sus medicamentos habituales para acceso rápido.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          {/* Quick Access to Favorites button in header */}
          <button
            onClick={() => setSelectedCategory(selectedCategory === 'Favoritos' ? 'Todos' : 'Favoritos')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border shrink-0 ${
              selectedCategory === 'Favoritos'
                ? 'bg-amber-500 text-[#061824] border-amber-400 shadow-lg shadow-amber-500/20'
                : 'bg-[#05131d] text-amber-300 hover:text-white border-[#175270] hover:border-amber-400'
            }`}
            title="Ver medicamentos guardados en favoritos"
          >
            <Star className={`w-4 h-4 ${favorites.length > 0 ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>Favoritos</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
              selectedCategory === 'Favoritos' ? 'bg-[#061824] text-amber-400' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {favorites.length}
            </span>
          </button>

          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nombre, indicación, dolor..."
              className="w-full bg-[#05131d] border border-[#12425a] rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af] transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                title="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories & Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 custom-scrollbar">
        {/* Favoritos Pill */}
        <button
          onClick={() => setSelectedCategory('Favoritos')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
            selectedCategory === 'Favoritos'
              ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-[#061824] border-amber-300 shadow-md font-black'
              : 'bg-[#092233]/90 text-amber-300 hover:text-white border-amber-500/40 hover:border-amber-400'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${favorites.length > 0 ? 'fill-current' : ''}`} />
          <span>Mis Favoritos ({favorites.length})</span>
        </button>

        {/* Más Consultados Pill */}
        <button
          onClick={() => setSelectedCategory('Frecuentes')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border flex items-center gap-1.5 ${
            selectedCategory === 'Frecuentes'
              ? 'bg-gradient-to-r from-rose-500 to-orange-400 text-white border-rose-400 shadow-md font-black'
              : 'bg-[#092233]/90 text-rose-300 hover:text-white border-rose-500/40 hover:border-rose-400'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-rose-400" />
          <span>Más Consultados</span>
        </button>

        <div className="h-4 w-px bg-[#144863] mx-1 shrink-0" />

        {/* Regular Categories */}
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white border-[#22b8af] shadow-sm font-semibold'
                  : 'bg-[#092233]/80 text-slate-300 border-[#12425a] hover:border-[#22b8af] hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filter reset if active */}
      {(searchTerm || selectedCategory !== 'Todos') && (
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {selectedCategory === 'Favoritos' && (
              <span className="text-amber-300 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" /> Mostrando medicamentos favoritos ({filteredDrugs.length})
              </span>
            )}
            {selectedCategory === 'Frecuentes' && (
              <span className="text-rose-300 font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> Mostrando medicamentos ordenados por mayor consulta ({filteredDrugs.length})
              </span>
            )}
            {selectedCategory !== 'Favoritos' && selectedCategory !== 'Frecuentes' && (
              <span>Filtrando por: <strong className="text-white">{selectedCategory}</strong> ({filteredDrugs.length} resultados)</span>
            )}
          </span>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todos');
            }}
            className="text-[#22b8af] hover:underline cursor-pointer font-semibold"
          >
            Ver todos los fármacos
          </button>
        </div>
      )}

      {/* Paginación y Resumen Alfabético Superior */}
      <div id="vademecum-container" className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300 px-1 pt-1">
        <span className="font-semibold flex items-center gap-1.5">
          <span>Mostrando fármacos</span>
          <strong className="text-[#42edd8]">
            {filteredDrugs.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredDrugs.length)}
          </strong>
          <span>de</span>
          <strong className="text-white">{filteredDrugs.length}</strong>
          <span className="text-[10px] text-teal-300 bg-[#0c2f44] px-2 py-0.5 rounded border border-[#16516f] font-mono">
            {selectedCategory === 'Frecuentes' ? 'Orden: Más Consultados' : 'Orden Alfabético A - Z'}
          </span>
        </span>

        {totalPages > 1 && (
          <div className="flex items-center gap-2 self-start sm:self-auto text-[11px] text-slate-400">
            <span>Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong></span>
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className="text-[#22b8af] hover:text-[#42edd8] font-bold underline cursor-pointer"
              >
                Ir a siguiente página →
              </button>
            )}
          </div>
        )}
      </div>

      {/* Grid of Clean Drug Cards (Max 20 por página) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {paginatedDrugs.map((d) => {
          const isFav = favorites.includes(d.id);
          const views = viewCounts[d.id] || 0;

          return (
            <div
              key={d.id}
              onClick={() => handleSelectDrug(d)}
              className={`bg-[#092233]/90 border rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-md hover:bg-[#0c2a3d] group flex items-center justify-between gap-3 text-left relative overflow-hidden ${
                isFav
                  ? 'border-amber-500/50 hover:border-amber-400 shadow-amber-950/20'
                  : 'border-[#12425a] hover:border-[#22b8af]/80 hover:shadow-[#22b8af]/10'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
                  isFav
                    ? 'bg-amber-950/40 border-amber-500/60 text-amber-400'
                    : 'bg-[#061824] border-[#12425a] group-hover:border-[#22b8af]/50 text-[#22b8af]'
                }`}>
                  <Pill className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] text-slate-500 font-mono">#{String(d.id).padStart(2, '0')}</span>
                    <span className="text-[10px] font-semibold bg-[#0c3144] text-[#42edd8] px-1.5 py-0.2 rounded border border-[#17657d] truncate max-w-[130px]">
                      {d.cat.split(' / ')[0]}
                    </span>
                    {views >= 3 && (
                      <span className="text-[9px] font-bold px-1 rounded bg-rose-950/60 text-rose-300 border border-rose-500/30 flex items-center gap-0.5" title={`Consultado ${views} veces`}>
                        <Flame className="w-2.5 h-2.5" /> {views}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug group-hover:text-[#42edd8] transition-colors mt-0.5 truncate">
                    {d.name}
                  </h3>
                </div>
              </div>

              {/* Action Buttons: Favorite Star & Chevron */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(d.id, e)}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    isFav
                      ? 'text-amber-400 hover:text-amber-300 bg-amber-500/10'
                      : 'text-slate-500 hover:text-amber-300 hover:bg-[#0c2a3d]'
                  }`}
                  title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                >
                  <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                </button>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#22b8af] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          );
        })}

        {/* Empty state for Favorites */}
        {filteredDrugs.length === 0 && selectedCategory === 'Favoritos' && (
          <div className="col-span-full py-14 px-4 text-center bg-[#071d2b]/60 border border-dashed border-[#144863] rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Star className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Sin medicamentos favoritos aún</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Haz clic en el icono de estrella <strong className="text-amber-300">⭐</strong> en cualquier tarjeta de medicamento para añadirlo a tu lista de acceso rápido y tenerlo siempre a mano durante tu turno.
            </p>
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs font-bold hover:brightness-110 cursor-pointer transition shadow"
            >
              Explorar los 140 Medicamentos
            </button>
          </div>
        )}

        {/* Empty state for Frecuentes */}
        {filteredDrugs.length === 0 && selectedCategory === 'Frecuentes' && (
          <div className="col-span-full py-14 px-4 text-center bg-[#071d2b]/60 border border-dashed border-[#144863] rounded-3xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Aún no hay consultas registradas</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              A medida que abras fichas de medicamentos en el Vademécum, aparecerán aquí ordenados automáticamente por frecuencia de uso.
            </p>
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs font-bold hover:brightness-110 cursor-pointer transition shadow"
            >
              Ver Todos los Fármacos
            </button>
          </div>
        )}

        {/* General Empty search state */}
        {filteredDrugs.length === 0 && selectedCategory !== 'Favoritos' && selectedCategory !== 'Frecuentes' && (
          <div className="col-span-full py-16 text-center text-slate-400 space-y-2">
            <Pill className="w-10 h-10 mx-auto text-slate-600" />
            <p className="text-sm font-medium">No se encontraron medicamentos para tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
              className="text-xs text-[#22b8af] hover:underline cursor-pointer"
            >
              Restablecer búsqueda
            </button>
          </div>
        )}
      </div>

      {/* PESTAÑAS Y CONTROLES DE PAGINACIÓN DE 20 FÁRMACOS */}
      {totalPages > 1 && (
        <div className="mt-4 pt-4 border-t border-[#12425a] flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Resumen */}
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Página <strong className="text-white">{currentPage}</strong> de <strong className="text-white">{totalPages}</strong> (20 fármacos por página)
          </div>

          {/* Botones de Navegación */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-xl border border-[#144863] bg-[#092233] text-xs font-bold text-slate-300 hover:text-white hover:border-[#22b8af] disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            >
              ← Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              if (p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)) {
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center border ${
                      currentPage === p
                        ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-slate-950 font-black border-[#22b8af] shadow-md shadow-[#22b8af]/25'
                        : 'bg-[#092233] text-slate-300 hover:text-white border-[#144863] hover:border-slate-500'
                    }`}
                  >
                    {p}
                  </button>
                );
              }
              if (p === currentPage - 2 || p === currentPage + 2) {
                return <span key={p} className="text-slate-600 px-1 text-xs">...</span>;
              }
              return null;
            })}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-1.5 rounded-xl border border-[#22b8af] bg-gradient-to-r from-[#179c94] to-[#22b8af] text-slate-950 font-black text-xs hover:brightness-110 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer flex items-center gap-1 shadow-md shadow-[#22b8af]/20 active:scale-95"
            >
              <span>Siguiente</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* Banner de Salto a la Siguiente Página */}
      {currentPage < totalPages && (
        <div className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-[#072436] via-[#09324c] to-[#072436] border border-[#175270] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-lg">
          <div className="text-slate-300 text-center sm:text-left">
            <span>¿Deseas continuar revisando el Vademécum? Hay </span>
            <strong className="text-[#42edd8]">{filteredDrugs.length - currentPage * ITEMS_PER_PAGE}</strong>
            <span> fármacos más en orden alfabético.</span>
          </div>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] via-[#22b8af] to-[#42edd8] text-slate-950 font-black text-xs hover:brightness-110 transition shadow-md shadow-[#22b8af]/25 shrink-0 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Ver Siguientes 20 Fármacos</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Modal Ficha Completa */}
      {selectedDrug && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#071d2b] border border-[#1a5574] rounded-2xl max-w-2xl w-full p-5 sm:p-6 space-y-4 relative shadow-2xl animate-in fade-in duration-150 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#12425a] pb-3 pr-2">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#22b8af] flex items-center gap-1.5">
                  <Pill className="w-3.5 h-3.5 text-[#22b8af]" />
                  Ficha Farmacológica Completa #{String(selectedDrug.id).padStart(2, '0')}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{selectedDrug.name}</h3>
                <p className="text-xs text-[#42edd8] font-medium">{selectedDrug.cat}</p>
              </div>

              {/* Header Actions: Favorite Toggle & Close */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => toggleFavorite(selectedDrug.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    favorites.includes(selectedDrug.id)
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                      : 'bg-[#05131d] text-slate-300 border-[#144863] hover:text-amber-300'
                  }`}
                  title={favorites.includes(selectedDrug.id) ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                >
                  <Star className={`w-3.5 h-3.5 ${favorites.includes(selectedDrug.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  <span>{favorites.includes(selectedDrug.id) ? 'En Favoritos' : 'Favorito'}</span>
                </button>

                <button
                  onClick={() => setSelectedDrug(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-[#0c2a3d] cursor-pointer transition border border-transparent hover:border-[#144863]"
                  title="Cerrar ventana"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200 overflow-y-auto pr-1 custom-scrollbar flex-1">
              {/* Mecanismo de Acción */}
              <div className="bg-[#05131d] p-3.5 rounded-xl border border-[#12425a]">
                <span className="text-[#22b8af] font-bold block mb-1">Mecanismo / Acción Farmacológica:</span>
                <p className="text-slate-300 leading-relaxed">{selectedDrug.action}</p>
              </div>

              {/* Presentación & Vía */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#05131d] p-3.5 rounded-xl border border-[#12425a]">
                  <span className="text-[#22b8af] font-bold block mb-1">Presentación & Dilución:</span>
                  <p className="text-slate-300">{selectedDrug.pres}</p>
                </div>
                <div className="bg-[#05131d] p-3.5 rounded-xl border border-[#12425a]">
                  <span className="text-[#22b8af] font-bold block mb-1">Vía & Administración:</span>
                  <p className="text-slate-300">{selectedDrug.adm}</p>
                </div>
              </div>

              {/* Indicaciones */}
              <div className="bg-[#05131d] p-3.5 rounded-xl border border-[#12425a]">
                <span className="text-[#22b8af] font-bold block mb-1">Indicaciones Clínicas:</span>
                <p className="text-slate-300 leading-relaxed">{selectedDrug.ind}</p>
              </div>

              {/* Contraindicaciones & Efectos Adversos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-rose-950/30 p-3.5 rounded-xl border border-rose-900/40">
                  <span className="text-rose-400 font-bold flex items-center gap-1 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Contraindicaciones:
                  </span>
                  <p className="text-rose-200 leading-relaxed">{selectedDrug.contra}</p>
                </div>
                <div className="bg-amber-950/30 p-3.5 rounded-xl border border-amber-900/40">
                  <span className="text-amber-400 font-bold flex items-center gap-1 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Efectos Adversos / Alertas:
                  </span>
                  <p className="text-amber-200 leading-relaxed">{selectedDrug.eff}</p>
                </div>
              </div>

              {/* Cuidados Específicos de Enfermería */}
              <div className="bg-[#093537]/50 p-4 rounded-xl border border-[#196b66] text-emerald-100">
                <span className="text-[#3ee0d0] font-bold flex items-center gap-1.5 mb-1.5 text-sm">
                  <ShieldAlert className="w-4 h-4 text-[#3ee0d0]" />
                  Cuidados Específicos de Enfermería:
                </span>
                <p className="leading-relaxed">{selectedDrug.care}</p>
              </div>
            </div>

            <div className="border-t border-[#12425a] pt-3 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {viewCounts[selectedDrug.id] ? `Consultado ${viewCounts[selectedDrug.id]} ${viewCounts[selectedDrug.id] === 1 ? 'vez' : 'veces'}` : 'Primera consulta'}
              </span>
              <button
                onClick={() => setSelectedDrug(null)}
                className="px-5 py-2 bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1ea69e] hover:to-[#2cd3c6] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
