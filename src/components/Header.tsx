import React, { useState, useEffect } from 'react';
import {
  Pill,
  Wand2,
  Calculator,
  Scale,
  LineChart,
  Droplets,
  Syringe,
  GraduationCap,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse,
  FileSpreadsheet,
  ChevronDown,
  Layers,
  Award,
  Baby
} from 'lucide-react';
import { DonationModal } from './DonationModal';
import { PWAInstallButton } from './PWAInstallButton';

export type TabType =
  | 'vademecum'
  | 'pediatria'
  | 'diagnosticos'
  | 'escalas'
  | 'examenes'
  | 'emergencias'
  | 'balance'
  | 'goteo'
  | 'nanda'
  | 'soapie'
  | 'vacunas'
  | 'crecimiento'
  | 'imc'
  | 'hierro'
  | 'enae'
  | 'cursos';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

interface TabItem {
  id: TabType;
  label: string;
  category: 'clinica' | 'urgencias' | 'cred' | 'gestion' | 'docencia';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const tabs: TabItem[] = [
    // 🩺 Clínica & Triaje (5)
    { id: 'vademecum', label: 'Vademécum', category: 'clinica', icon: Pill, color: 'text-[#32d2c2]' },
    { id: 'pediatria', label: 'Dosis Pediátrica', category: 'clinica', icon: Calculator, color: 'text-[#2dd4bf]' },
    { id: 'diagnosticos', label: 'Diagnósticos Médicos', category: 'clinica', icon: Stethoscope, color: 'text-emerald-400' },
    { id: 'escalas', label: 'Escalas & Triaje', category: 'clinica', icon: HeartPulse, color: 'text-rose-400' },
    { id: 'examenes', label: 'AGA & Electrolitos', category: 'clinica', icon: Activity, color: 'text-cyan-400' },

    // ⚡ UCI & Urgencias (3)
    { id: 'emergencias', label: 'RCP & Vasoactivos', category: 'urgencias', icon: Zap, color: 'text-amber-400' },
    { id: 'balance', label: 'Balance Hídrico', category: 'urgencias', icon: Activity, color: 'text-sky-300' },
    { id: 'goteo', label: 'Infusión / Goteo', category: 'urgencias', icon: Droplets, color: 'text-[#36d7cb]' },

    // 👶 Crecimiento y Desarrollo (CRED) (4)
    { id: 'vacunas', label: 'Inmunizaciones', category: 'cred', icon: Syringe, color: 'text-rose-400' },
    { id: 'crecimiento', label: 'Curvas / TPED', category: 'cred', icon: LineChart, color: 'text-teal-300' },
    { id: 'imc', label: 'IMC / Z-Score', category: 'cred', icon: Scale, color: 'text-cyan-400' },
    { id: 'hierro', label: 'Suplementación con Hierro', category: 'cred', icon: Baby, color: 'text-emerald-400' },

    // 📋 Gestión & PLACE (2)
    { id: 'nanda', label: 'NANDA-NOC-NIC (PLACE)', category: 'gestion', icon: FileSpreadsheet, color: 'text-amber-300' },
    { id: 'soapie', label: 'SOAPIE IA', category: 'gestion', icon: Wand2, color: 'text-amber-400' },

    // 🎓 Docencia & Certificación (2)
    { id: 'cursos', label: 'Cursos + Certificado QR', category: 'docencia', icon: Award, color: 'text-amber-400' },
    { id: 'enae', label: 'Simulacro ENAE', category: 'docencia', icon: GraduationCap, color: 'text-amber-300' },
  ];

  // Identificar categoría activa
  const activeTabCategory = tabs.find((t) => t.id === activeTab)?.category || 'clinica';

  // Estado del Acordeón: Secciones abiertas (por defecto abre la sección de la pestaña activa)
  const [openSections, setOpenSections] = useState<string[]>([activeTabCategory]);

  // Si cambia la pestaña activa desde otro lugar, asegurar que su sección en el acordeón esté abierta
  useEffect(() => {
    if (!openSections.includes(activeTabCategory)) {
      setOpenSections((prev) => [...prev, activeTabCategory]);
    }
  }, [activeTabCategory]);

  // Toggle abrir/cerrar sección del acordeón
  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((secId) => secId !== id) : [...prev, id]
    );
  };

  const allCategoryIds = ['clinica', 'urgencias', 'cred', 'gestion', 'docencia'];
  const allOpen = allCategoryIds.every((id) => openSections.includes(id));

  const toggleAll = () => {
    if (allOpen) {
      setOpenSections([activeTabCategory]);
    } else {
      setOpenSections(allCategoryIds);
    }
  };

  // Grupos organizados del Acordeón (5 Grupos Clínicos)
  const groups = [
    {
      id: 'clinica',
      name: 'Clínica & Triaje',
      icon: '🩺',
      badgeClass: 'text-[#32d2c2] bg-[#0c3850] border-[#185d82]',
      accentColor: '#32d2c2',
      tabs: tabs.filter((t) => t.category === 'clinica')
    },
    {
      id: 'urgencias',
      name: 'UCI & Urgencias',
      icon: '⚡',
      badgeClass: 'text-amber-300 bg-[#352408] border-amber-600/50',
      accentColor: '#f59e0b',
      tabs: tabs.filter((t) => t.category === 'urgencias')
    },
    {
      id: 'cred',
      name: 'Crecimiento y Desarrollo',
      icon: '👶',
      badgeClass: 'text-emerald-300 bg-[#082f25] border-emerald-600/50',
      accentColor: '#10b981',
      tabs: tabs.filter((t) => t.category === 'cred')
    },
    {
      id: 'gestion',
      name: 'Gestión & PLACE',
      icon: '📋',
      badgeClass: 'text-cyan-300 bg-[#092d3e] border-cyan-600/50',
      accentColor: '#06b6d4',
      tabs: tabs.filter((t) => t.category === 'gestion')
    },
    {
      id: 'docencia',
      name: 'Docencia & Certificación',
      icon: '🎓',
      badgeClass: 'text-amber-300 bg-[#36260a] border-amber-600/50',
      accentColor: '#f59e0b',
      tabs: tabs.filter((t) => t.category === 'docencia')
    }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#12425a] bg-[#071d2b]/95 backdrop-blur-md px-2.5 sm:px-4 md:px-6 py-2.5 shadow-xl space-y-2.5">
      {/* Top Bar: Brand, Anuncio Tesis, Contáctanos & Yape */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 sm:gap-3">
        {/* Brand identity & Announcement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between md:justify-start gap-2 flex-1 min-w-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#179c94] via-[#22b8af] to-[#42edd8] shadow-lg shadow-[#22b8af]/25 shrink-0">
              <img
                src="/icon-192.png"
                alt="Logo Enfermería Certificada"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-sm sm:text-base md:text-lg leading-tight tracking-wide text-white truncate">
                Enfermería Certificada
              </h1>
              <p className="text-[11px] sm:text-xs text-[#32d2c2] font-medium leading-none mt-0.5">
                Lic. Miguel Pantoja <span className="text-slate-400">| CEP 120064</span>
              </p>
            </div>
          </div>

          {/* Anuncio dinámico para Tesis y Trabajos */}
          <div className="w-full sm:w-auto">
            <a
              href="https://wa.me/51935281052?text=Hola%20Lic.%20Miguel%20Pantoja%2C%20le%20escribo%20por%20el%20anuncio%20de%20apoyo%20en%20tesis%20y%20trabajos%20universitarios."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between sm:justify-start gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/60 hover:border-amber-300 text-amber-200 hover:text-white transition-all shadow-md shadow-amber-950/30 cursor-pointer text-xs w-full sm:w-auto"
              title="Ofrecemos ayuda o hacemos tesis y trabajos universitarios. ¡Haz clic para contactarnos por WhatsApp!"
            >
              <div className="flex items-center gap-1.5 truncate">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span className="font-black uppercase text-[9px] sm:text-[10px] text-slate-950 bg-amber-400 px-1.5 py-0.2 rounded shadow-sm shrink-0">
                  📢 Anuncio
                </span>
                <span className="font-medium text-[11px] sm:text-xs truncate">
                  <span className="inline sm:hidden">
                    ¿Tesis o trabajos? <strong className="text-amber-300 underline">¡Te ayudamos!</strong>
                  </span>
                  <span className="hidden sm:inline">
                    ¿Ayuda con tu <strong className="text-amber-300 underline font-bold">tesis o trabajos universitarios</strong>? ¡Te ayudamos o lo hacemos por ti!
                  </span>
                </span>
              </div>
              <span className="font-bold text-[#25D366] text-[10px] sm:text-[11px] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 shrink-0 ml-1">
                <span>💬 WhatsApp</span>
                <span>→</span>
              </span>
            </a>
          </div>
        </div>

        {/* Action buttons: PWA Install, Contáctanos & Yape */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between sm:justify-end shrink-0 flex-wrap">
          {/* PWA Direct Installation Button */}
          <PWAInstallButton />

          {/* Contáctanos WhatsApp */}
          <a
            href="https://wa.me/51935281052?text=Hola%20Lic.%20Miguel%20Pantoja%2C%20le%20escribo%20desde%20la%20plataforma%20de%20Enfermer%C3%ADa%20Certificada."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold transition shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
            title="Contactar al Lic. Miguel Pantoja (+51 935 281 052)"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Contáctanos</span>
          </a>

          {/* Donar con Yape */}
          <button
            type="button"
            onClick={() => setIsDonationModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#742284] to-[#9b30b4] hover:from-[#89299c] hover:to-[#ae36ca] text-white text-xs font-bold transition shadow-md shadow-purple-950/40 cursor-pointer whitespace-nowrap border border-[#b23dd1]/50 active:scale-95"
            title="Donar con Yape al +51 935 281 052"
          >
            <span>💜 Donar con Yape</span>
          </button>
        </div>
      </div>

      {/* MENÚ DE NAVEGACIÓN EN FORMATO ACORDEÓN */}
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Barra superior de control del Acordeón */}
        <div className="flex items-center justify-between text-xs px-1 text-slate-300">
          <div className="flex items-center gap-1.5 font-bold text-slate-200">
            <Layers className="w-3.5 h-3.5 text-[#32d2c2]" />
            <span className="text-xs sm:text-sm">Menú de Navegación por Áreas</span>
          </div>
          <button
            type="button"
            onClick={toggleAll}
            className="text-[11px] text-[#32d2c2] hover:text-[#42edd8] font-bold underline cursor-pointer transition select-none"
          >
            {allOpen ? 'Contraer todo' : 'Expandir todo'}
          </button>
        </div>

        {/* Acordeón: 5 áreas estructuradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          {groups.map((group) => {
            const isOpen = openSections.includes(group.id);
            const containsActiveTab = group.tabs.some((t) => t.id === activeTab);
            const activeTabInGroup = group.tabs.find((t) => t.id === activeTab);

            return (
              <div
                key={group.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between ${
                  containsActiveTab
                    ? 'border-teal-500/70 bg-[#082233]/90 shadow-md shadow-teal-950/30'
                    : 'border-[#12425a] bg-[#061824]/85 hover:border-[#1a5574]'
                }`}
              >
                {/* Cabecera del Acordeón (Click para expandir/contraer) */}
                <button
                  type="button"
                  onClick={() => toggleSection(group.id)}
                  className={`w-full p-2.5 sm:p-3 flex items-center justify-between gap-2 cursor-pointer transition text-left select-none ${
                    isOpen ? 'bg-[#0b293d]/90 border-b border-[#12425a]' : 'hover:bg-[#0a2333]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{group.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-white text-xs sm:text-sm truncate">
                          {group.name}
                        </span>
                        <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-[#061824] text-slate-300 border border-slate-700">
                          {group.tabs.length}
                        </span>
                      </div>
                      {/* Subtítulo indicador si tiene el tab activo */}
                      {containsActiveTab && (
                        <p className="text-[10px] text-[#32d2c2] font-semibold flex items-center gap-1 truncate mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#32d2c2] animate-pulse shrink-0" />
                          <span>Activo: {activeTabInGroup?.label}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Icono de chevron giratorio */}
                  <div className="flex items-center gap-1 text-slate-400 shrink-0">
                    <span className="text-[10px] hidden sm:inline text-slate-400">
                      {isOpen ? 'Cerrar' : 'Abrir'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#32d2c2]' : 'rotate-0 text-slate-400'
                      }`}
                    />
                  </div>
                </button>

                {/* Contenido desplegable del Acordeón con las herramientas */}
                {isOpen && (
                  <div className="p-2 sm:p-2.5 bg-[#051522]/90 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 flex-1">
                    <div className="grid grid-cols-1 gap-1">
                      {group.tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full px-2.5 py-2 rounded-xl text-left transition-all flex items-center justify-between gap-2 cursor-pointer border text-xs active:scale-95 ${
                              isActive
                                ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white font-bold shadow-md shadow-[#22b8af]/30 border-teal-300'
                                : 'bg-[#092233]/70 border-[#12425a] text-slate-300 hover:text-white hover:bg-[#0c2a3d] hover:border-teal-500/40'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : tab.color}`} />
                              <span className="truncate">{tab.label}</span>
                            </div>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Yape Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </header>
  );
};
