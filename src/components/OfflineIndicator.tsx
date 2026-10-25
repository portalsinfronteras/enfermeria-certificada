import React, { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { offlineCacheService, CacheMetadata } from '../services/offlineCacheService';
import { WifiOff, Wifi, CheckCircle2, ShieldCheck, X } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [wasOffline, setWasOffline] = useState(false);
  const [cacheMeta, setCacheMeta] = useState<CacheMetadata | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Initialize cache on mount
    const meta = offlineCacheService.initializeOfflineCache();
    setCacheMeta(meta);
  }, []);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
      setDismissed(false);
    }
  }, [isOnline]);

  // If user went offline and came back online, show brief success notification
  useEffect(() => {
    if (isOnline && wasOffline) {
      const timer = setTimeout(() => {
        setWasOffline(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !wasOffline) {
    return null;
  }

  if (dismissed && !isOnline) {
    // Show minimal sticky pill when dismissed
    return (
      <div className="fixed bottom-3 right-3 z-50">
        <button
          type="button"
          onClick={() => setDismissed(false)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-600/90 text-white text-xs font-bold shadow-lg border border-amber-400 hover:bg-amber-500 cursor-pointer transition animate-pulse"
        >
          <WifiOff className="w-3.5 h-3.5" />
          <span>Sin Conexión (Caché Activo)</span>
        </button>
      </div>
    );
  }

  // When connection is restored
  if (isOnline && wasOffline) {
    return (
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 max-w-md animate-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-900/95 to-teal-900/95 border border-emerald-500/60 text-white shadow-2xl backdrop-blur-md text-xs">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Wifi className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold">Conexión a Internet Restablecida</p>
              <p className="text-[11px] text-emerald-200">
                La plataforma sincronizó los datos clínicos y el servicio en línea.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setWasOffline(false)}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // When completely offline
  return (
    <div className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-4 z-50 max-w-lg animate-in slide-in-from-bottom duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#1b1509]/95 via-[#231a08]/95 to-[#1b1509]/95 border-2 border-amber-500/70 text-amber-100 shadow-2xl shadow-amber-950/60 backdrop-blur-md text-xs">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shrink-0 mt-0.5">
            <WifiOff className="w-4 h-4 animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-extrabold text-white text-xs sm:text-sm">
                Modo Sin Conexión Activo
              </span>
              <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                Offline Ready
              </span>
            </div>
            <p className="text-[11px] text-amber-200/90 leading-relaxed">
              El <strong>Vademécum Farmacológico</strong> ({cacheMeta?.vademecumCount || 140}+ fármacos), dosis pediátricas y calculadoras están disponibles en la memoria de tu dispositivo.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-semibold cursor-pointer transition"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
