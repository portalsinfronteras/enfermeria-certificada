import React, { useState } from 'react';
import { X, Copy, Check, Heart, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const yapeNumber = '935281052';
  const formattedNumber = '+51 935 281 052';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(yapeNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola Lic. Miguel Pantoja, le escribo desde la plataforma de Enfermería Certificada para enviarle una constancia de apoyo por Yape.'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-[#092233] border border-[#17657d] rounded-3xl p-6 shadow-2xl shadow-purple-950/40 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#742284]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#22b8af]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition cursor-pointer"
          title="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Yape badge */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#742284]/30 border border-[#9b30b4] text-[#d67bff] text-xs font-bold uppercase tracking-wider shadow-inner">
            <Heart className="w-3.5 h-3.5 fill-[#d67bff]" />
            Donación Voluntaria • Yape Perú
          </div>

          <h3 className="text-xl font-extrabold text-white">
            Apoya a <span className="text-[#32d2c2]">Enfermería Certificada</span>
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
            Tu contribución permite mantener el servidor activo, actualizar el vademécum y desarrollar herramientas gratuitas para los profesionales y estudiantes de enfermería.
          </p>
        </div>

        {/* Yape Account Box */}
        <div className="mt-5 bg-gradient-to-br from-[#742284]/30 to-[#4c1356]/40 p-5 rounded-2xl border border-[#9b30b4]/60 text-center space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00d3ba] animate-ping" />
            Número Oficial de Yape
          </div>

          {/* Big number */}
          <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-wider font-mono">
            935 281 052
          </div>

          <div className="text-xs text-purple-200/90 font-medium space-y-0.5">
            <p>
              Titular: <strong className="text-white font-bold">Lic. Miguel Pantoja</strong>
            </p>
            <p className="text-[11px] text-purple-300 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d3ba]" /> Colegiatura CEP 120064
            </p>
          </div>

          {/* Copy number button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-white hover:bg-slate-100 text-[#742284]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                ¡Número Copiado al Portapapeles!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar Número ({yapeNumber})
              </>
            )}
          </button>
        </div>

        {/* Actions */}
        <div className="mt-4 space-y-2">
          {/* Direct WhatsApp link */}
          <a
            href={`https://wa.me/51935281052?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20ba59] text-white transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Enviar Constancia por WhatsApp (+51 935 281 052)
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 transition text-center cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
