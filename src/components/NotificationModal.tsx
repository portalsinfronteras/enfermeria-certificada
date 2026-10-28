import React, { useState, useEffect } from 'react';
import {
  X,
  Bell,
  CheckCheck,
  Calendar,
  AlertTriangle,
  GraduationCap,
  Stethoscope,
  Info,
  Trash2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { useNotifications, AppNotification } from '../context/NotificationContext';
import { TabType } from './Header';

interface NotificationModalProps {
  onNavigateTab: (tab: TabType) => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ onNavigateTab }) => {
  const {
    notifications,
    unreadCount,
    isNotificationOpen,
    closeNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    requestPushPermission,
    pushPermission
  } = useNotifications();

  const [filter, setFilter] = useState<string>('todas');

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNotifications();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeNotifications]);

  if (!isNotificationOpen) return null;

  const filteredNotifs = filter === 'todas'
    ? notifications
    : notifications.filter((n) => n.type === filter);

  const handleActionClick = (notif: AppNotification) => {
    markAsRead(notif.id);
    if (notif.linkTab) {
      onNavigateTab(notif.linkTab as TabType);
      closeNotifications();
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'convocatoria':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      case 'alerta':
        return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      case 'academico':
        return <Calendar className="w-4 h-4 text-cyan-400" />;
      case 'clinico':
        return <Stethoscope className="w-4 h-4 text-emerald-400" />;
      default:
        return <Info className="w-4 h-4 text-teal-400" />;
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'convocatoria':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'alerta':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'academico':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'clinico':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      default:
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={closeNotifications}
    >
      <div
        className="bg-[#071d2b] border-2 border-[#165a80] rounded-3xl w-full max-w-2xl max-h-[88vh] flex flex-col shadow-2xl shadow-black/80 overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Centro de Notificaciones */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#09293e] to-[#061824] border-b border-[#144b6e] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-[#179c94] to-[#22b8af] text-slate-950 shadow-md shadow-[#22b8af]/30 shrink-0">
              <Bell className="w-5 h-5 text-slate-950" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-[#071d2b] animate-ping" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                  Centro de Notificaciones & Alertas
                </h3>
                {unreadCount > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    {unreadCount} nuevas
                  </span>
                )}
              </div>
              <p className="text-xs text-teal-200 mt-0.5">
                Convocatorias oficiales ENAE/SERUMS, alertas farmacológicas y novedades
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="px-2.5 py-1.5 rounded-xl bg-[#092b3d] hover:bg-[#0c3850] text-[#42edd8] text-[11px] font-bold border border-[#17577a] transition flex items-center gap-1 cursor-pointer"
                title="Marcar todas como leídas"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Leídas</span>
              </button>
            )}
            <button
              type="button"
              onClick={closeNotifications}
              className="p-1.5 rounded-xl bg-[#092638] hover:bg-rose-900/60 text-slate-300 hover:text-white transition cursor-pointer border border-[#144863] hover:border-rose-500"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Banner de Permiso para Notificaciones Push en Celular/PC */}
        {pushPermission !== 'granted' && (
          <div className="p-3 sm:p-4 bg-gradient-to-r from-[#092e42] to-[#072435] border-b border-[#144863] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <span className="text-xl">🔔</span>
              <div>
                <strong className="text-white block font-bold">¿Deseas recibir avisos en tu celular o PC?</strong>
                <span className="text-slate-300 text-[11px]">
                  Te avisaremos sobre nuevas fechas de exámenes, sorteo de plazas y alertas de salud.
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={requestPushPermission}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:brightness-110 text-white font-bold text-xs shadow-md shadow-[#22b8af]/25 transition shrink-0 cursor-pointer whitespace-nowrap active:scale-95"
            >
              Activar Notificaciones
            </button>
          </div>
        )}

        {/* Filtros de Categoría */}
        <div className="p-3 bg-[#05141f] border-b border-[#103c57] flex items-center gap-1.5 overflow-x-auto custom-scrollbar text-xs shrink-0">
          {[
            { id: 'todas', label: `Todas (${notifications.length})` },
            { id: 'convocatoria', label: 'Convocatorias' },
            { id: 'clinico', label: 'Clínica & PLACE' },
            { id: 'alerta', label: 'Alertas Médicas' },
            { id: 'academico', label: 'Cursos & QR' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap cursor-pointer transition ${
                filter === cat.id
                  ? 'bg-[#179c94] text-white shadow'
                  : 'bg-[#082233] text-slate-400 hover:text-white border border-[#12425a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lista de Notificaciones */}
        <div className="p-4 sm:p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1">
          {filteredNotifs.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#0b2f45] text-slate-400 flex items-center justify-center mx-auto">
                <Bell className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-sm font-bold text-white">No hay notificaciones en esta categoría</p>
              <p className="text-xs text-slate-400">
                Te notificaremos cuando se publiquen nuevos simulacros o alertas del sector salud.
              </p>
            </div>
          ) : (
            filteredNotifs.map((notif) => (
              <div
                key={notif.id}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                  notif.read
                    ? 'bg-[#051522] border-[#103d59] opacity-90'
                    : 'bg-gradient-to-r from-[#072435] to-[#0a2f47] border-[#22b8af]/70 shadow-md shadow-[#22b8af]/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <div className="p-2 rounded-xl bg-[#071d2b] border border-[#134866] shrink-0 mt-0.5">
                      {getNotificationIcon(notif.type)}
                    </div>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.2 rounded border ${getBadgeStyle(notif.type)}`}>
                          {notif.type}
                        </span>
                        {!notif.read && (
                          <span className="w-2 h-2 rounded-full bg-[#42edd8] animate-pulse" title="No leída" />
                        )}
                        <span className="text-[10px] text-slate-400">
                          {notif.date}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {notif.title}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {notif.message}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteNotification(notif.id)}
                    className="p-1 text-slate-500 hover:text-rose-400 transition cursor-pointer shrink-0"
                    title="Eliminar notificación"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Botón de Acción Directo */}
                {notif.actionLabel && (
                  <div className="mt-3 pt-2.5 border-t border-[#0d344d] flex items-center justify-between">
                    <span className="text-[10px] text-teal-300">
                      Acción recomendada
                    </span>

                    <button
                      type="button"
                      onClick={() => handleActionClick(notif)}
                      className="px-3 py-1.5 rounded-xl bg-[#092b3d] hover:bg-[#179c94] text-white text-xs font-bold transition border border-[#17567a] hover:border-transparent flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      <span>{notif.actionLabel}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-[#05141f] border-t border-[#12425a] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Enfermería Certificada — Lic. Miguel Pantoja A.</span>
          <button
            type="button"
            onClick={closeNotifications}
            className="px-3 py-1 rounded-lg bg-[#092638] hover:bg-[#0c3149] text-slate-300 hover:text-white font-bold transition border border-[#144863] cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
