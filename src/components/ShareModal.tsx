import React, { useState } from 'react';
import {
  Share2,
  Copy,
  Check,
  X,
  MessageCircle,
  Send,
  Mail,
  Smartphone,
  ExternalLink,
  Globe,
  Sparkles,
  Heart,
  QrCode,
  Download,
  WifiOff,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [showQR, setShowQR] = useState(true);
  const [activeGuide, setActiveGuide] = useState<'android' | 'ios' | 'pc'>('android');

  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  if (!isOpen) return null;

  const shareUrl = 'https://www.enfermeriacertificada.com';
  const shareTitle = 'Aplicativo Enfermería Certificada — Lic. Miguel Pantoja A.';
  
  // Mensaje optimizado para recomendar la plataforma como APLICATIVO MÓVIL
  const appShareMessage =
`📲 ¡Hola colega! Te recomiendo instalar el Aplicativo Clínico "Enfermería Certificada" del Lic. Miguel Pantoja A. (CEP 120064).

Es una aplicación médica completa que puedes instalar directamente en tu celular (Android o iPhone) o PC:
⚡ No ocupa espacio de memoria
⚡ Funciona incluso sin internet (Modo Offline)
⚡ 100% gratuita para el personal de salud

Incluye:
✅ Vademécum Farmacológico Completo
✅ Calculadora de Dosis Pediátricas por peso
✅ Catálogo de 600 Diagnósticos Médicos (MINSA/EsSalud)
✅ Curvas CRED, TPED e IMC Z-Score
✅ Suplementación de Hierro según peso
✅ Balance Hídrico y AGA con electrolitos
✅ Guías NANDA-NOC-NIC y Cursos con Certificación

👉 Abre e instala el aplicativo en tu celular aquí:
${shareUrl}`;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(shareUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyFullMessage = async () => {
    try {
      await navigator.clipboard.writeText(appShareMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: appShareMessage,
          url: shareUrl,
        });
      } catch {
        // Cancelled by user
      }
    }
  };

  // Enlaces directos a redes sociales optimizados para compartir el APLICATIVO
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(appShareMessage)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareTitle)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(appShareMessage)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('📲 Te recomiendo instalar el Aplicativo Clínico gratuito "Enfermería Certificada" del Lic. Miguel Pantoja (Vademécum, 600 Diagnósticos, CRED, AGA):')}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent('Recomendación: Aplicativo Clínico Enfermería Certificada')}&body=${encodeURIComponent(appShareMessage)}`;

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: whatsappUrl,
      bg: 'bg-[#25D366] hover:bg-[#20ba5a]',
      border: 'border-[#25D366]',
      text: 'text-slate-950 font-black',
      badge: 'Recomendado',
    },
    {
      name: 'Facebook',
      icon: Globe,
      url: facebookUrl,
      bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
      border: 'border-[#1877F2]',
      text: 'text-white font-bold',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: telegramUrl,
      bg: 'bg-[#229ED9] hover:bg-[#1f8fc4]',
      border: 'border-[#229ED9]',
      text: 'text-white font-bold',
    },
    {
      name: 'X (Twitter)',
      icon: Share2,
      url: twitterUrl,
      bg: 'bg-black hover:bg-neutral-900',
      border: 'border-neutral-700',
      text: 'text-white font-bold',
    },
    {
      name: 'LinkedIn',
      icon: ExternalLink,
      url: linkedinUrl,
      bg: 'bg-[#0A66C2] hover:bg-[#095196]',
      border: 'border-[#0A66C2]',
      text: 'text-white font-bold',
    },
    {
      name: 'Correo',
      icon: Mail,
      url: mailUrl,
      bg: 'bg-[#0f3c57] hover:bg-[#144d6e]',
      border: 'border-[#1b5e82]',
      text: 'text-teal-200 font-bold',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#071d2b] border-2 border-[#17577a] rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luces de fondo decorativas */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#22b8af]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#092b3f] to-[#061824] border-b border-[#12425a] flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#179c94] via-[#22b8af] to-[#42edd8] text-slate-950 shadow-lg shadow-[#22b8af]/30 shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                  Recomendar Aplicativo Móvil
                </h3>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  App PWA • 100% Gratis
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Comparte el aplicativo con colegas para que lo instalen en su celular o PC
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#092638] hover:bg-rose-900/60 text-slate-300 hover:text-white transition cursor-pointer border border-[#144863] hover:border-rose-500 shrink-0"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[82vh] overflow-y-auto custom-scrollbar relative z-10">
          
          {/* TARJETA DEL APLICATIVO CON INSTALACIÓN DIRECTA */}
          <div className="bg-gradient-to-br from-[#082233] via-[#0a2e45] to-[#082233] border-2 border-[#1b6287] rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden space-y-3">
            <div className="flex items-start gap-3.5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-[#179c94] via-[#22b8af] to-[#42edd8] shadow-md shadow-[#22b8af]/30 shrink-0">
                <img
                  src="/icon-192.png"
                  alt="Logo App"
                  className="w-full h-full rounded-2xl object-cover bg-white"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                    Enfermería Certificada
                  </h4>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#22b8af]/20 text-[#42edd8] border border-[#22b8af]/40">
                    App Móvil Oficial
                  </span>
                </div>
                <p className="text-xs text-teal-200 mt-0.5">
                  Lic. Miguel Pantoja A. <span className="text-slate-400">| CEP 120064</span>
                </p>

                {/* Micro Badges de la App */}
                <div className="flex items-center gap-2 mt-2 flex-wrap text-[10px] text-slate-300">
                  <span className="flex items-center gap-1 bg-[#061824] px-2 py-0.5 rounded-md border border-[#11405c]">
                    <WifiOff className="w-2.5 h-2.5 text-emerald-400" /> Funciona Offline
                  </span>
                  <span className="flex items-center gap-1 bg-[#061824] px-2 py-0.5 rounded-md border border-[#11405c]">
                    <Smartphone className="w-2.5 h-2.5 text-cyan-400" /> Android & iPhone
                  </span>
                  <span className="flex items-center gap-1 bg-[#061824] px-2 py-0.5 rounded-md border border-[#11405c]">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#32d2c2]" /> Sin costo
                  </span>
                </div>
              </div>
            </div>

            {/* Botón de instalación directa si es compatible en este navegador */}
            {isInstallable && (
              <div className="pt-2 border-t border-[#124b6e]">
                <button
                  type="button"
                  onClick={install}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer active:scale-95 transition"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Instalar esta App en tu dispositivo ahora</span>
                </button>
              </div>
            )}
          </div>

          {/* COMPARTIR NATIVO POR CUALQUIER APP DEL CELULAR (Si es móvil) */}
          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#179c94] via-[#22b8af] to-[#42edd8] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#22b8af]/25 hover:brightness-110 active:scale-95 transition cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Recomendar por WhatsApp u otra app de tu celular</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          )}

          {/* BOTONES DE REDES SOCIALES PARA RECOMENDAR LA APP */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#22b8af]" /> Enviar recomendación del aplicativo:
              </label>
              <span className="text-[10px] text-slate-400">1 clic para enviar</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl ${item.bg} ${item.text} border ${item.border} text-xs transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer text-center`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CÓDIGO QR PARA INSTALAR EN PERSONA (ESCÁNEO DE CELULAR A CELULAR) */}
          <div className="bg-[#051522] border border-[#144766] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#0e3b54] text-[#42edd8]">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">
                    Código QR para Instalar la App en Persona
                  </h5>
                  <p className="text-[11px] text-slate-400">
                    Tu colega apunta con la cámara de su celular y se abre la app
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowQR(!showQR)}
                className="text-xs text-[#22b8af] hover:text-[#42edd8] font-bold underline cursor-pointer"
              >
                {showQR ? 'Ocultar QR' : 'Ver QR'}
              </button>
            </div>

            {showQR && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 border-t border-[#0e3b54]">
                <div className="p-3 bg-white rounded-2xl shadow-xl shrink-0">
                  <img
                    src={qrImageUrl}
                    alt="Código QR para instalar el aplicativo"
                    className="w-36 h-36 sm:w-40 sm:h-40 object-contain"
                  />
                </div>

                <div className="text-xs text-slate-300 space-y-2 text-center sm:text-left">
                  <p className="font-semibold text-white">
                    📱 ¿Cómo instalarlo con este QR?
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                    <li>Abre la cámara de tu celular (Android o iPhone).</li>
                    <li>Apunta hacia este código QR en la pantalla.</li>
                    <li>Toca el enlace emergente que dice <strong>enfermeriacertificada.com</strong>.</li>
                    <li>Presiona <strong>&quot;Instalar App&quot;</strong> o agrégala a la pantalla de inicio.</li>
                  </ol>
                  <span className="inline-block text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    ✓ Sin Play Store ni App Store • Directo
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* GUÍA DE INSTALACIÓN RÁPIDA EN EL CELULAR */}
          <div className="bg-[#05141f] border border-[#113a52] rounded-2xl p-4 space-y-2.5">
            <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#22b8af]" /> ¿Cómo se instala el aplicativo?
            </h5>

            {/* Selector de plataforma */}
            <div className="flex items-center gap-1 bg-[#030e17] p-1 rounded-xl border border-[#0d3045]">
              <button
                type="button"
                onClick={() => setActiveGuide('android')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeGuide === 'android'
                    ? 'bg-[#179c94] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🤖 Android / Chrome
              </button>
              <button
                type="button"
                onClick={() => setActiveGuide('ios')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeGuide === 'ios'
                    ? 'bg-[#179c94] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🍎 iPhone / Safari
              </button>
              <button
                type="button"
                onClick={() => setActiveGuide('pc')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeGuide === 'pc'
                    ? 'bg-[#179c94] text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                💻 PC / Laptop
              </button>
            </div>

            {/* Contenido de la guía */}
            <div className="text-xs text-slate-300 leading-relaxed bg-[#082233] p-3 rounded-xl border border-[#124563]">
              {activeGuide === 'android' && (
                <div className="space-y-1">
                  <p className="text-emerald-300 font-bold">En teléfonos Android (Google Chrome):</p>
                  <p>1. Toca el botón <strong>&quot;Instalar App&quot;</strong> en la barra superior de la web.</p>
                  <p>2. O pulsa el menú de 3 puntos <strong>(⋮)</strong> arriba a la derecha y selecciona <strong>&quot;Instalar aplicación&quot;</strong> o <strong>&quot;Agregar a la pantalla principal&quot;</strong>.</p>
                  <p>3. Aparecerá el icono en tus aplicaciones como cualquier app nativa.</p>
                </div>
              )}

              {activeGuide === 'ios' && (
                <div className="space-y-1">
                  <p className="text-cyan-300 font-bold">En iPhone / iPad (Navegador Safari):</p>
                  <p>1. Abre el enlace en el navegador <strong>Safari</strong>.</p>
                  <p>2. Toca el botón <strong>Compartir</strong> (icono de cuadrado con flecha hacia arriba ⎋) en la barra inferior.</p>
                  <p>3. Desliza hacia abajo y pulsa <strong>&quot;Agregar a pantalla de inicio&quot;</strong> con el signo <strong>➕</strong>.</p>
                  <p>4. Pulsa &quot;Agregar&quot; arriba a la derecha. ¡Listo, tendrás el icono en tu pantalla de inicio!</p>
                </div>
              )}

              {activeGuide === 'pc' && (
                <div className="space-y-1">
                  <p className="text-teal-300 font-bold">En Computadora (Chrome, Edge o Brave):</p>
                  <p>1. En la barra de direcciones arriba verás un icono de <strong>Instalar</strong> (pantalla con flecha hacia abajo).</p>
                  <p>2. Haz clic en <strong>&quot;Instalar Enfermería Certificada&quot;</strong>.</p>
                  <p>3. Se creará un acceso directo en tu escritorio que se abre en su propia ventana rápida sin barras de navegador.</p>
                </div>
              )}
            </div>
          </div>

          {/* ENLACE DIRECTO DE DESCARGA / ACCESO */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-slate-300 block">
              Enlace de instalación del aplicativo:
            </label>
            <div className="flex items-center gap-2 bg-[#05141f] border border-[#175270] rounded-xl p-1.5 pl-3">
              <Globe className="w-4 h-4 text-[#22b8af] shrink-0" />
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="bg-transparent text-xs text-slate-200 w-full focus:outline-none select-all font-mono"
              />
              <button
                onClick={handleCopyLink}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  copiedLink
                    ? 'bg-emerald-500 text-slate-950 font-black'
                    : 'bg-[#179c94] hover:bg-[#22b8af] text-white'
                }`}
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Enlace</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* COPIAR TEXTO COMPLETO DE RECOMENDACIÓN DE LA APP */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300">
                Texto de recomendación para pegar en grupos o chats:
              </label>
              <button
                onClick={handleCopyFullMessage}
                className="text-[11px] font-bold text-[#32d2c2] hover:text-[#42edd8] underline cursor-pointer flex items-center gap-1"
              >
                {copiedMessage ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-black">
                    <Check className="w-3 h-3" /> ¡Mensaje copiado!
                  </span>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copiar todo el texto
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-[#05141f] rounded-xl border border-[#13435e] text-xs text-slate-300 leading-relaxed font-sans max-h-32 overflow-y-auto custom-scrollbar whitespace-pre-line">
              {appShareMessage}
            </div>
          </div>

          {/* PIE DEL MODAL */}
          <div className="bg-gradient-to-r from-purple-950/40 via-teal-950/40 to-purple-950/40 border border-purple-500/30 rounded-2xl p-3 text-center space-y-1">
            <p className="text-xs text-purple-200 font-medium flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>¡Gracias por difundir el aplicativo de enfermería profesional en el Perú!</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
