import React, { useState } from 'react';
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
  Baby,
  Share2,
  Smartphone,
  User,
  Bookmark,
  LogOut,
  Bell,
} from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
import { useAuth } from '../context/AuthContext';
import { DonationModal } from './DonationModal';
import { PWAInstallButton } from './PWAInstallButton';
import { ShareModal } from './ShareModal';

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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { user, openAuthModal, openSavedModal, logout } = useAuth();
  const { unreadCount, toggleNotifications } = useNotifications();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const tabs: TabItem[] = [
    // 🩺 Clínica y Triaje (4)
    { id: 'vademecum', label: 'Vademécum', category: 'clinica', icon: Pill, color: 'text-[#32d2c2]' },
    { id: 'pediatria', label: 'Dosis Pediátrica', category: 'clinica', icon: Calculator, color: 'text-[#2dd4bf]' },
    { id: 'diagnosticos', label: 'Diagnósticos Médicos', category: 'clinica', icon: Stethoscope, color: 'text-emerald-400' },
    { id: 'escalas', label: 'Escalas y Triaje', category: 'clinica', icon: HeartPulse, color: 'text-rose-400' },

    // ⚡ UCI y Urgencias (4)
    { id: 'examenes', label: 'AGA y Electrolitos', category: 'urgencias', icon: Activity, color: 'text-cyan-400' },
    { id: 'emergencias', label: 'RCP y Vasoactivos', category: 'urgencias', icon: Zap, color: 'text-amber-400' },
    { id: 'balance', label: 'Balance Hídrico', category: 'urgencias', icon: Activity, color: 'text-sky-300' },
    { id: 'goteo', label: 'Infusión / Goteo', category: 'urgencias', icon: Droplets, color: 'text-[#36d7cb]' },

    // 👶 CRED (4)
    { id: 'vacunas', label: 'Inmunizaciones', category: 'cred', icon: Syringe, color: 'text-rose-400' },
    { id: 'crecimiento', label: 'Curvas / TPED', category: 'cred', icon: LineChart, color: 'text-teal-300' },
    { id: 'imc', label: 'IMC / Z-Score', category: 'cred', icon: Scale, color: 'text-cyan-400' },
    { id: 'hierro', label: 'Suplementación de Hierro', category: 'cred', icon: Baby, color: 'text-emerald-400' },

    // 📋 Gestión y PLACE (2)
    { id: 'nanda', label: 'NANDA-NOC-NIC (PLACE)', category: 'gestion', icon: FileSpreadsheet, color: 'text-amber-300' },
    { id: 'soapie', label: 'SOAPIE IA', category: 'gestion', icon: Wand2, color: 'text-amber-400' },

    // 🎓 Docencia y Certificación (2)
    { id: 'cursos', label: 'Cursos + Certificado QR', category: 'docencia', icon: Award, color: 'text-amber-400' },
    { id: 'enae', label: 'Simulacro ENAE', category: 'docencia', icon: GraduationCap, color: 'text-amber-300' },
  ];

  // Estado del Acordeón: Al iniciar, todos los menús empiezan completamente cerrados
  const [openSections, setOpenSections] = useState<string[]>([]);

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
      setOpenSections([]);
    } else {
      setOpenSections(allCategoryIds);
    }
  };

  // Grupos organizados del Acordeón (5 Grupos Clínicos)
  const groups = [
    {
      id: 'clinica',
      name: 'Clínica y Triaje',
      icon: '🩺',
      badgeClass: 'text-[#32d2c2] bg-[#0c3850] border-[#185d82]',
      accentColor: '#32d2c2',
      tabs: tabs.filter((t) => t.category === 'clinica')
    },
    {
      id: 'urgencias',
      name: 'UCI y Urgencias',
      icon: '⚡',
      badgeClass: 'text-amber-300 bg-[#352408] border-amber-600/50',
      accentColor: '#f59e0b',
      tabs: tabs.filter((t) => t.category === 'urgencias')
    },
    {
      id: 'cred',
      name: 'CRED',
      icon: '👶',
      badgeClass: 'text-emerald-300 bg-[#082f25] border-emerald-600/50',
      accentColor: '#10b981',
      tabs: tabs.filter((t) => t.category === 'cred')
    },
    {
      id: 'gestion',
      name: 'Gestión y PLACE',
      icon: '📋',
      badgeClass: 'text-cyan-300 bg-[#092d3e] border-cyan-600/50',
      accentColor: '#06b6d4',
      tabs: tabs.filter((t) => t.category === 'gestion')
    },
    {
      id: 'docencia',
      name: 'Docencia y Certificación',
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
        {/* Brand identity */}
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

          {/* Compartir / Recomendar Aplicativo */}
          <button
            type="button"
            onClick={() => setIsShareModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#179c94] via-[#22b8af] to-[#42edd8] hover:brightness-110 text-slate-950 text-xs font-black transition shadow-md shadow-[#22b8af]/25 cursor-pointer whitespace-nowrap border border-[#42edd8]/40 active:scale-95"
            title="Recomendar e instalar el aplicativo clínico en Android, iPhone o PC"
          >
            <Smartphone className="w-3.5 h-3.5 text-slate-950" />
            <span>Recomendar App</span>
          </button>

          {/* Donar con Yape */}
          <button
            type="button"
            onClick={() => setIsDonationModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#742284] to-[#9b30b4] hover:from-[#89299c] hover:to-[#ae36ca] text-white text-xs font-bold transition shadow-md shadow-purple-950/40 cursor-pointer whitespace-nowrap border border-[#b23dd1]/50 active:scale-95"
            title="Donar con Yape al +51 935 281 052"
          >
            <span>💜 Donar con Yape</span>
          </button>

          {/* Centro de Notificaciones */}
          <button
            type="button"
            onClick={toggleNotifications}
            className="relative flex items-center justify-center p-2 sm:px-3 sm:py-2 rounded-xl bg-[#092b3d] hover:bg-[#0c3850] text-slate-200 hover:text-white transition border border-[#1a628a] shadow-md cursor-pointer active:scale-95 whitespace-nowrap"
            title="Centro de Notificaciones y Alertas Sanitarias"
          >
            <Bell className="w-4 h-4 text-[#42edd8]" />
            <span className="hidden lg:inline text-xs font-bold ml-1.5">Avisos</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-rose-500 text-white shadow-sm shadow-rose-950 animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Botón de Acceso / Usuario y Guardados */}
          {user ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#092b3d] hover:bg-[#0c3850] text-white text-xs font-bold transition border border-[#1a628a] shadow-md cursor-pointer active:scale-95 whitespace-nowrap"
                title="Mi Cuenta y Guardados"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#179c94] to-[#42edd8] text-slate-950 flex items-center justify-center font-black text-[10px] shrink-0">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="truncate max-w-[90px] sm:max-w-[120px]">{user.name.split(' ')[0]}</span>
                {user.savedItems && user.savedItems.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-black bg-[#22b8af] text-slate-950">
                    {user.savedItems.length}
                  </span>
                )}
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-60 bg-[#071d2b] border-2 border-[#165a80] rounded-2xl shadow-2xl p-1.5 z-50 animate-in fade-in space-y-1">
                  <div className="p-2.5 bg-[#051522] rounded-xl border border-[#11405c]">
                    <p className="text-xs font-bold text-white truncate">{user.name}</p>
                    <p className="text-[10px] text-teal-300 truncate">{user.email}</p>
                    {user.cep && (
                      <span className="inline-block text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#092638] text-amber-300 border border-amber-500/30 mt-1">
                        {user.cep}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      openSavedModal();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-[#092538] flex items-center justify-between gap-2 cursor-pointer transition"
                  >
                    <span className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-[#22b8af]" />
                      Mis Guardados
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#061824] text-teal-300 border border-[#144863] font-bold">
                      {user.savedItems?.length || 0}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      logout();
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-300 hover:text-white hover:bg-rose-950/60 flex items-center gap-2 cursor-pointer transition"
                  >
                    <LogOut className="w-4 h-4 text-rose-400" />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={openAuthModal}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#0b334a] to-[#0e405d] hover:brightness-110 text-teal-200 hover:text-white border border-[#206994] text-xs font-bold transition shadow-md cursor-pointer whitespace-nowrap active:scale-95"
              title="Iniciar sesión o registrarte para guardar información clínica"
            >
              <User className="w-3.5 h-3.5 text-[#32d2c2]" />
              <span>Ingresar / Registro</span>
            </button>
          )}
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

      {/* ANUNCIO DINÁMICO: APOYO EN TESIS Y TRABAJOS UNIVERSITARIOS (DEBAJO DEL MENÚ DE NAVEGACIÓN) */}
      <div className="max-w-7xl mx-auto pt-0.5">
        <a
          href="https://wa.me/51935281052?text=Hola%20Lic.%20Miguel%20Pantoja%2C%20le%20escribo%20por%20el%20anuncio%20de%20apoyo%20en%20tesis%20y%20trabajos%20universitarios."
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex flex-col sm:flex-row items-center justify-between gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 border border-amber-400/60 hover:border-amber-300 text-amber-200 hover:text-white transition-all shadow-md shadow-amber-950/30 cursor-pointer"
          title="Ofrecemos ayuda o hacemos tesis y trabajos universitarios. ¡Haz clic para contactarnos por WhatsApp!"
        >
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap sm:flex-nowrap justify-center sm:justify-start min-w-0">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="font-black uppercase text-[10px] sm:text-xs text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-sm shrink-0">
              📢 Anuncio
            </span>
            <span className="font-medium text-xs sm:text-sm text-slate-200">
              ¿Ayuda con tu <strong className="text-amber-300 underline font-bold">tesis o trabajos universitarios</strong>? <span className="text-amber-100 font-semibold">¡Te ayudamos o lo hacemos por ti!</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-slate-950 font-bold text-xs transition-all shrink-0">
            <span>💬 WhatsApp</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </a>
      </div>

      {/* Yape Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      {/* Share / Recommend Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </header>
  );
};
