import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X, Check } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1da89f] hover:to-[#2cd8c7] text-[#061824] font-bold text-xs shadow-md transition cursor-pointer active:scale-95"
        title="Instalar aplicación en tu dispositivo para acceso directo y offline"
      >
        <Download className="w-3.5 h-3.5 text-[#061824]" />
        <span>Instalar App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#092233] hover:bg-[#0c2d44] border border-[#175270] text-teal-300 font-semibold text-xs transition cursor-pointer"
          title="Instalar en iPhone / iPad"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Instalar en iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="w-full max-w-sm rounded-2xl bg-[#071d2b] border border-teal-500/50 p-5 shadow-2xl text-slate-100 space-y-3">
              <div className="flex items-center justify-between border-b border-[#12425a] pb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-teal-400" />
                  Instalar en iPhone / iPad
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <p>Para usar la app sin internet en iOS:</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-200">
                  <li>Toca el botón <strong>Compartir</strong> (icono de cuadrado con flecha hacia arriba) en Safari.</li>
                  <li>Desplázate hacia abajo y selecciona <strong>&quot;Agregar a pantalla de inicio&quot;</strong>.</li>
                  <li>Confirma y podrás abrir la app directamente incluso sin conexión a datos o Wi-Fi.</li>
                </ol>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2 bg-gradient-to-r from-[#179c94] to-[#22b8af] text-[#061824] rounded-xl font-bold text-xs cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
