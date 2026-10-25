import React, { useState, useMemo } from 'react';
import { vaccinesData, Vaccine } from '../data/vaccinesData';
import { Syringe, Search, ShieldAlert, AlertTriangle, CalendarClock, ChevronRight, X, Thermometer } from 'lucide-react';

export const VacunasTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('Todas');
  const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null);

  const categories = ['Todas', 'RN', 'Lactante', 'Preescolar', 'Escolar', 'Adulto / Gestante'];

  const filteredVaccines = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return vaccinesData.filter((v) => {
      const matchesSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.months.toLowerCase().includes(q) ||
        v.disease.toLowerCase().includes(q) ||
        v.age.toLowerCase().includes(q) ||
        v.care.toLowerCase().includes(q);

      const matchesCat = selectedCat === 'Todas' || v.category === selectedCat;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCat]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="bg-[#071d2b] rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row gap-4 items-center justify-between shadow-xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Syringe className="w-5 h-5 text-rose-400" />
            Inmunizaciones
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Calendario oficial de inmunizaciones en el Perú, técnicas de punción, calibre de agujas y manejo de ESAVI.
          </p>
        </div>

        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar vacuna, edad o enfermedad..."
            className="w-full bg-[#061824] border border-[#12425a] rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af] transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills & Cold Chain Alert */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-[#22b8af] text-[#061824] border-[#42edd8] shadow-sm font-bold'
                    : 'bg-[#071d2b] text-slate-300 border-[#12425a] hover:border-[#22b8af] hover:text-white'
                }`}
              >
                {cat === 'RN' ? 'Recién Nacido' : cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#42edd8] bg-[#0c2f42] border border-[#17657d] px-3 py-1.5 rounded-xl whitespace-nowrap">
          <Thermometer className="w-3.5 h-3.5 text-[#22b8af]" />
          <span>Cadena de Frío Estricta: <strong>+2°C a +8°C</strong></span>
        </div>
      </div>

      {/* Vaccine Grid - Clean Cards with Name & Months, Click to view full information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
        {filteredVaccines.map((v) => (
          <div
            key={v.id}
            onClick={() => setSelectedVaccine(v)}
            className="bg-[#071d2b] border border-[#12425a] hover:border-[#22b8af] rounded-2xl p-4 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#22b8af]/10 hover:bg-[#092233] group flex flex-col justify-between gap-3 text-left overflow-hidden min-w-0"
          >
            <div className="space-y-2.5 min-w-0">
              {/* Category Badge & Icon */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold bg-[#0c3144] text-[#42edd8] px-2 py-0.5 rounded-md border border-[#17657d] truncate">
                  {v.category === 'RN' ? 'Recién Nacido' : v.category}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#061824] border border-[#12425a] group-hover:border-[#22b8af]/60 flex items-center justify-center text-[#22b8af] shrink-0 transition-colors">
                  <Syringe className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Vaccine Name */}
              <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-[#42edd8] transition-colors break-words">
                {v.name}
              </h3>

              {/* Application Months / Age Box (guaranteed within card limits) */}
              <div className="flex items-start gap-2 text-xs text-[#32d2c2] bg-[#061824] border border-[#12425a] rounded-xl p-2.5 min-w-0">
                <CalendarClock className="w-3.5 h-3.5 text-[#42edd8] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">
                    Meses / Aplicación:
                  </span>
                  <span className="font-semibold text-white break-words text-xs leading-tight block mt-0.5">
                    {v.months}
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable prompt */}
            <div className="pt-2 border-t border-[#12425a]/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#42edd8] transition-colors">
              <span className="text-[11px] font-medium">Ver información total</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#22b8af]" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detalle Vacuna - Información Total */}
      {selectedVaccine && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#071d2b] border border-[#12425a] rounded-2xl max-w-xl w-full p-5 sm:p-6 space-y-4 relative shadow-2xl animate-in fade-in max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedVaccine(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-[#092233] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-[#12425a] pb-3 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#42edd8]">
                  Inmunizaciones — Ficha Oficial
                </span>
                <span className="text-[10px] bg-[#0c3144] text-[#42edd8] px-2 py-0.5 rounded border border-[#17657d] font-semibold">
                  {selectedVaccine.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{selectedVaccine.name}</h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-[#32d2c2]">
                <CalendarClock className="w-3.5 h-3.5 text-[#42edd8] shrink-0" />
                <span className="break-words"><strong>Meses:</strong> {selectedVaccine.months} — <span className="text-slate-300">{selectedVaccine.age}</span></span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200 overflow-y-auto pr-1">
              <div className="bg-[#061824] p-3 rounded-xl border border-[#12425a]">
                <span className="text-[#32d2c2] font-bold block mb-1">Enfermedades Prevenidas:</span>
                <p className="text-slate-300 leading-relaxed">{selectedVaccine.disease}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#061824] p-3 rounded-xl border border-[#12425a]">
                  <span className="text-cyan-400 font-bold block mb-1">Dosis y Volumen:</span>
                  <p className="text-slate-300">{selectedVaccine.dose}</p>
                </div>
                <div className="bg-[#061824] p-3 rounded-xl border border-[#12425a]">
                  <span className="text-cyan-400 font-bold block mb-1">Vía & Sitio Anatómico:</span>
                  <p className="text-slate-300">{selectedVaccine.route}</p>
                </div>
              </div>

              <div className="bg-[#061824] p-3 rounded-xl border border-[#12425a]">
                <span className="text-teal-400 font-bold block mb-1">Material y Aguja Oficial:</span>
                <p className="text-slate-300">{selectedVaccine.needle}</p>
              </div>

              <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-900/50">
                <span className="text-amber-400 font-bold flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  Manejo y Vigilancia de ESAVI:
                </span>
                <p className="text-amber-200 leading-relaxed">{selectedVaccine.esavi}</p>
              </div>

              <div className="bg-[#0a2f3a]/60 p-4 rounded-xl border border-[#17657d]/60 text-slate-200">
                <span className="text-[#42edd8] font-bold flex items-center gap-1.5 mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  Cuidados de Enfermería y Consejería al Cuidador:
                </span>
                <p className="leading-relaxed">{selectedVaccine.care}</p>
              </div>
            </div>

            <div className="border-t border-[#12425a] pt-3 flex justify-end">
              <button
                onClick={() => setSelectedVaccine(null)}
                className="px-5 py-2 bg-[#22b8af] hover:bg-[#179c94] text-[#061824] text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-md"
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
