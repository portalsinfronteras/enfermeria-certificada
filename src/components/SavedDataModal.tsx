import React, { useState } from 'react';
import {
  X,
  Bookmark,
  Trash2,
  Copy,
  Check,
  Stethoscope,
  Pill,
  FileText,
  Plus,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useAuth, SavedItem } from '../context/AuthContext';

export const SavedDataModal: React.FC = () => {
  const { user, isSavedModalOpen, closeSavedModal, removeItem, saveItem } = useAuth();
  const [filterType, setFilterType] = useState<string>('todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Formulario para nueva nota rápida
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  if (!isSavedModalOpen || !user) return null;

  const savedList = user.savedItems || [];

  const filteredItems = filterType === 'todos'
    ? savedList
    : savedList.filter((item) => item.type === filterType);

  const handleCopy = async (item: SavedItem) => {
    try {
      const textToCopy = `${item.title}${item.cie10 ? ` (CIE-10: ${item.cie10})` : ''}\n${item.subtitle || ''}\n${item.notes || ''}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSaveNewNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;

    saveItem({
      id: 'nota_' + Date.now(),
      type: 'nota',
      title: newNoteTitle.trim(),
      notes: newNoteText.trim(),
    });

    setNewNoteTitle('');
    setNewNoteText('');
    setIsAddingNote(false);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'diagnostico':
        return <Stethoscope className="w-4 h-4 text-emerald-400" />;
      case 'medicamento':
        return <Pill className="w-4 h-4 text-[#32d2c2]" />;
      default:
        return <FileText className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={closeSavedModal}
    >
      <div
        className="bg-[#071d2b] border-2 border-[#165a80] rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#09293e] to-[#061824] border-b border-[#144b6e] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#179c94] to-[#22b8af] text-white shadow-md shadow-[#22b8af]/30 shrink-0">
              <Bookmark className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white leading-tight truncate">
                  Mis Guardados y Libreta Clínica
                </h3>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {savedList.length} guardados
                </span>
              </div>
              <p className="text-xs text-teal-200 truncate mt-0.5">
                Cuenta de: <strong className="text-white">{user.name}</strong> {user.cep ? `(${user.cep})` : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsAddingNote(!isAddingNote)}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs font-bold hover:brightness-110 flex items-center gap-1.5 cursor-pointer shadow transition"
              title="Añadir nota personal"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Nueva Nota</span>
            </button>
            <button
              onClick={closeSavedModal}
              className="p-2 rounded-xl bg-[#092538] hover:bg-rose-900/60 text-slate-300 hover:text-white transition cursor-pointer border border-[#144863] hover:border-rose-500"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filtros de Categoría */}
        <div className="px-4 py-2.5 bg-[#05141f] border-b border-[#12425a] flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1.5">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'diagnostico', label: 'Diagnósticos Médicos' },
              { id: 'medicamento', label: 'Medicamentos' },
              { id: 'nota', label: 'Mis Notas Clínicas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition whitespace-nowrap ${
                  filterType === tab.id
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Formulario para añadir Nota Personal rápida */}
        {isAddingNote && (
          <form onSubmit={handleSaveNewNote} className="p-4 bg-[#092233] border-b border-[#175270] space-y-3 animate-in fade-in">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Agregar Nota o Apunte a mi Cuenta:
            </h4>
            <input
              type="text"
              required
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              placeholder="Título de la nota (ej. Paciente Cama 4, Dosis de Respaldo, Protocolo Urgencias)..."
              className="w-full bg-[#051522] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af]"
            />
            <textarea
              rows={2}
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              placeholder="Escribe aquí los datos o apuntes clínicos..."
              className="w-full bg-[#051522] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af]"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingNote(false)}
                className="px-3 py-1.5 rounded-lg border border-[#144863] text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-[#22b8af] text-slate-950 font-bold text-xs hover:brightness-110 cursor-pointer shadow"
              >
                Guardar en mi Libreta
              </button>
            </div>
          </form>
        )}

        {/* Lista de Elementos Guardados */}
        <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#09283c] border border-[#145070] flex items-center justify-center mx-auto text-[#42edd8]">
                <Bookmark className="w-7 h-7" />
              </div>
              <h4 className="text-sm font-bold text-white">No tienes información guardada en esta sección</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Puedes guardar cualquier diagnóstico médico o medicamento haciendo clic en el botón <strong>&quot;⭐ Guardar&quot;</strong>, o crear tus propias notas con el botón <strong>&quot;+ Nueva Nota&quot;</strong>.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#061c2b] border border-[#134968] hover:border-[#22b8af]/70 transition shadow-md flex flex-col sm:flex-row sm:items-start justify-between gap-3 group"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="p-1 rounded-md bg-[#08293d] border border-[#155478]">
                        {getItemIcon(item.type)}
                      </span>
                      {item.cie10 && (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#0c3850] text-[#42edd8] border border-[#1b6287]">
                          CIE-10: {item.cie10}
                        </span>
                      )}
                      {item.category && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#082233] text-slate-300 border border-[#144863]">
                          {item.category}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.savedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.title}
                    </h4>

                    {item.subtitle && (
                      <p className="text-xs text-teal-200 line-clamp-2">
                        {item.subtitle}
                      </p>
                    )}

                    {item.notes && (
                      <div className="p-2.5 rounded-xl bg-[#041420] border border-[#0d344d] text-xs text-slate-300 whitespace-pre-line">
                        {item.notes}
                      </div>
                    )}
                  </div>

                  {/* Acciones del elemento guardado */}
                  <div className="flex items-center gap-1.5 self-end sm:self-start shrink-0 pt-1 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      className="p-2 rounded-xl bg-[#092638] hover:bg-[#0d3852] text-slate-300 hover:text-white transition border border-[#144863] cursor-pointer"
                      title="Copiar información"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-xl bg-[#092638] hover:bg-rose-950 text-slate-400 hover:text-rose-300 transition border border-[#144863] hover:border-rose-500 cursor-pointer"
                      title="Eliminar de guardados"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
