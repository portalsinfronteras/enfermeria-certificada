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
  Heart
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  if (!isOpen) return null;

  const shareUrl = 'https://www.enfermeriacertificada.com';
  const shareTitle = 'Enfermería Certificada — Lic. Miguel Pantoja A.';
  const shareText =
    '¡Hola colega! Te recomiendo la plataforma clínica gratuita "Enfermería Certificada" del Lic. Miguel Pantoja A. (CEP 120064). Incluye Vademécum completo, Dosis Pediátricas con calculadora, Catálogo de 600 Diagnósticos Médicos MINSA, Curvas CRED, Balance Hídrico, AGA y electrolitos, NANDA-NOC-NIC y Cursos con Certificación:';

  const fullShareContent = `${shareText}\n\n👉 Entra gratis aquí: ${shareUrl}`;

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
      await navigator.clipboard.writeText(fullShareContent);
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
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    }
  };

  // Social share URLs
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareContent)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(fullShareContent)}`;

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: whatsappUrl,
      bg: 'bg-[#25D366] hover:bg-[#20ba5a]',
      border: 'border-[#25D366]',
      text: 'text-slate-950 font-black',
      label: 'Enviar por WhatsApp',
      badge: 'Recomendado',
    },
    {
      name: 'Facebook',
      icon: Globe,
      url: facebookUrl,
      bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
      border: 'border-[#1877F2]',
      text: 'text-white font-bold',
      label: 'Compartir en Facebook',
    },
    {
      name: 'Telegram',
      icon: Send,
      url: telegramUrl,
      bg: 'bg-[#229ED9] hover:bg-[#1f8fc4]',
      border: 'border-[#229ED9]',
      text: 'text-white font-bold',
      label: 'Enviar por Telegram',
    },
    {
      name: 'X (Twitter)',
      icon: Share2,
      url: twitterUrl,
      bg: 'bg-black hover:bg-neutral-900',
      border: 'border-neutral-700',
      text: 'text-white font-bold',
      label: 'Publicar en X',
    },
    {
      name: 'LinkedIn',
      icon: ExternalLink,
      url: linkedinUrl,
      bg: 'bg-[#0A66C2] hover:bg-[#095196]',
      border: 'border-[#0A66C2]',
      text: 'text-white font-bold',
      label: 'Publicar en LinkedIn',
    },
    {
      name: 'Correo Electrónico',
      icon: Mail,
      url: mailUrl,
      bg: 'bg-[#0f3c57] hover:bg-[#144d6e]',
      border: 'border-[#1b5e82]',
      text: 'text-teal-200 font-bold',
      label: 'Enviar por Email',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#071d2b] border-2 border-[#17577a] rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#22b8af]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#092b3f] to-[#061824] border-b border-[#12425a] flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#179c94] to-[#22b8af] text-white shadow-lg shadow-[#22b8af]/30 shrink-0">
              <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white tracking-wide">
                  Compartir y Recomendar
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#22b8af]/20 text-[#42edd8] border border-[#22b8af]/40">
                  100% Gratis
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Recomienda esta plataforma clínica a tus colegas y amigos
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

        {/* Modal Content */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar relative z-10">
          {/* Native Mobile Share Button (if supported) */}
          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#179c94] via-[#22b8af] to-[#42edd8] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#22b8af]/30 hover:brightness-110 active:scale-95 transition cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Compartir en cualquier app de tu celular</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Social Network Buttons Grid */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
              Elige una red social para compartir:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl ${item.bg} ${item.text} border ${item.border} text-xs transition-all shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] bg-black/30 text-white px-2 py-0.5 rounded-full font-bold shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Direct Link Copy Box */}
          <div className="space-y-1.5 pt-2 border-t border-[#12425a]">
            <label className="text-xs font-bold text-slate-300 block">
              Enlace directo de la web:
            </label>
            <div className="flex items-center gap-2 bg-[#05141f] border border-[#175270] rounded-xl p-1.5 pl-3">
              <Globe className="w-4 h-4 text-[#22b8af] shrink-0" />
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="bg-transparent text-xs text-slate-200 w-full focus:outline-none select-all"
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
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Full Pre-formatted Message Preview */}
          <div className="space-y-2 pt-2 border-t border-[#12425a]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300">
                Mensaje de recomendación listo para enviar:
              </label>
              <button
                onClick={handleCopyFullMessage}
                className="text-[11px] font-bold text-[#32d2c2] hover:text-[#42edd8] underline cursor-pointer flex items-center gap-1"
              >
                {copiedMessage ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-black">
                    <Check className="w-3 h-3" /> ¡Texto copiado!
                  </span>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copiar todo el texto
                  </>
                )}
              </button>
            </div>
            <div className="p-3 bg-[#05141f] rounded-xl border border-[#13435e] text-xs text-slate-300 leading-relaxed font-sans">
              <p className="italic text-slate-300/90">&quot;{shareText}&quot;</p>
              <p className="text-[#42edd8] font-bold mt-1.5 underline">{shareUrl}</p>
            </div>
          </div>

          {/* Gratitude Badge */}
          <div className="bg-gradient-to-r from-purple-950/40 via-teal-950/40 to-purple-950/40 border border-purple-500/30 rounded-2xl p-3 text-center space-y-1">
            <p className="text-xs text-purple-200 font-medium flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>¡Gracias por apoyar y difundir la enfermería profesional en el Perú!</span>
            </p>
            <p className="text-[11px] text-slate-400">
              Desarrollado para enfermeros, internos, estudiantes y profesionales de salud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
