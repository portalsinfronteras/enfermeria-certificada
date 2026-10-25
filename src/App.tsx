import React, { useState, useEffect } from 'react';
import { Header, TabType } from './components/Header';
import { VademecumTab } from './components/VademecumTab';
import { DiagnosticosMedicosTab } from './components/DiagnosticosMedicosTab';
import { BalanceHidricoTab } from './components/BalanceHidricoTab';
import { SoapieTab } from './components/SoapieTab';
import { PediatriaTab } from './components/PediatriaTab';
import { ImcTab } from './components/ImcTab';
import { CrecimientoTab } from './components/CrecimientoTab';
import { GoteoTab } from './components/GoteoTab';
import { VacunasTab } from './components/VacunasTab';
import { SimulacroEnaeTab } from './components/SimulacroEnaeTab';
import { CursosTab, decodeCertificateToken, IssuedCertificate } from './components/CursosTab';

// New Advanced Clinical Suites
import { EscalasTab } from './components/EscalasTab';
import { EmergenciasTab } from './components/EmergenciasTab';
import { NandaPlaceTab } from './components/NandaPlaceTab';
import { ExamenesAgaTab } from './components/ExamenesAgaTab';
import { DonationModal } from './components/DonationModal';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('vademecum');
  const [isFooterDonationOpen, setIsFooterDonationOpen] = useState(false);
  const [qrVerifiedCert, setQrVerifiedCert] = useState<IssuedCertificate | null>(null);

  // Detectar automáticamente si el usuario escaneó el Código QR de un Certificado (?verificar=...&datos=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('datos');
      const verifyCode = params.get('verificar');

      if (token) {
        const decoded = decodeCertificateToken(token);
        if (decoded) {
          setQrVerifiedCert(decoded);
          setActiveTab('cursos');
        }
      } else if (verifyCode) {
        setActiveTab('cursos');
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#061824] text-slate-100 antialiased selection:bg-[#22b8af] selection:text-[#061824] overflow-x-hidden">
      {/* Top Navigation Bar with Logo and Category Switcher */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Offline Status & Local Storage Protection Indicator */}
      <OfflineIndicator />

      {/* Main Container - Fully responsive padding & fluid spacing */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-4 md:px-6 py-3 sm:py-6 space-y-4 sm:space-y-6">
        {activeTab === 'vademecum' && <VademecumTab />}
        {activeTab === 'pediatria' && <PediatriaTab />}
        {activeTab === 'diagnosticos' && <DiagnosticosMedicosTab />}
        {activeTab === 'escalas' && <EscalasTab />}
        {activeTab === 'examenes' && <ExamenesAgaTab />}
        {activeTab === 'emergencias' && <EmergenciasTab />}
        {activeTab === 'balance' && <BalanceHidricoTab />}
        {activeTab === 'goteo' && <GoteoTab />}
        {activeTab === 'nanda' && <NandaPlaceTab />}
        {activeTab === 'soapie' && <SoapieTab />}
        {activeTab === 'vacunas' && <VacunasTab />}
        {activeTab === 'crecimiento' && <CrecimientoTab />}
        {activeTab === 'imc' && <ImcTab />}
        {activeTab === 'enae' && <SimulacroEnaeTab />}
        {activeTab === 'cursos' && (
          <CursosTab
            initialVerifyData={qrVerifiedCert}
            onClearVerify={() => {
              setQrVerifiedCert(null);
              if (typeof window !== 'undefined' && window.location.search) {
                window.history.replaceState({}, '', window.location.pathname);
              }
            }}
          />
        )}
      </main>

      {/* Clinical Reference Footer */}
      <footer className="border-t border-[#12425a] bg-[#071d2b]/95 py-4 sm:py-5 px-3 sm:px-6 text-xs text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto text-left">
            <img
              src="/icon-192.png"
              alt="Logo Enfermería Certificada"
              className="w-8 h-8 rounded-full border border-[#22b8af] shrink-0"
            />
            <div className="min-w-0">
              <p className="text-white font-semibold text-xs sm:text-sm truncate">
                Enfermería Certificada &copy; {new Date().getFullYear()} — Lic. Miguel Pantoja
              </p>
              <p className="text-[11px] text-[#32d2c2] truncate">
                Colegiatura CEP 120064 • Normas Técnicas MINSA & Taxonomías NANDA-I, NOC, NIC
              </p>
            </div>
          </div>

          {/* Quick contact and Yape buttons in footer */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between sm:justify-end">
            <a
              href="https://wa.me/51935281052?text=Hola%20Lic.%20Miguel%20Pantoja%2C%20le%20escribo%20desde%20la%20plataforma%20de%20Enfermer%C3%ADa%20Certificada."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold transition shadow cursor-pointer active:scale-95 text-center"
            >
              <span>💬 Contáctanos</span>
            </a>

            <button
              type="button"
              onClick={() => setIsFooterDonationOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#742284] to-[#9b30b4] hover:from-[#89299c] hover:to-[#ae36ca] text-white text-xs font-bold transition shadow cursor-pointer border border-[#b23dd1]/50 active:scale-95 text-center"
            >
              <span>💜 Donar con Yape</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Footer Donation Modal */}
      <DonationModal
        isOpen={isFooterDonationOpen}
        onClose={() => setIsFooterDonationOpen(false)}
      />
    </div>
  );
}
