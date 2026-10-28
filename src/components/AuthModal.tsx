import React, { useState } from 'react';
import {
  X,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Award,
  LogIn,
  UserPlus,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, loginWithEmail, registerWithEmail } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    const res = await loginWithEmail(email, password);
    setLoading(false);

    if (!res.success) {
      setErrorMsg(res.message || 'Error al iniciar sesión.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    const res = await registerWithEmail(name, email, password, cep);
    setLoading(false);

    if (!res.success) {
      setErrorMsg(res.message || 'Error al registrar la cuenta.');
    }
  };

  const resetFormFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setCep('');
    setErrorMsg('');
    setShowPassword(false);
  };

  const switchMode = (newMode: 'login' | 'register') => {
    setMode(newMode);
    resetFormFields();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={closeAuthModal}
    >
      <div
        className="bg-[#071d2b] border-2 border-[#17577a] rounded-3xl w-full max-w-md shadow-2xl overflow-hidden my-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decorativo de fondo */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#22b8af]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Cabecera del Modal */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#061824] via-[#092b3f] to-[#061824] border-b border-[#12425a] flex items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#179c94] via-[#22b8af] to-[#42edd8] text-slate-950 shadow-md shadow-[#22b8af]/30 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white leading-tight">
                Acceso a Enfermería Certificada
              </h3>
              <p className="text-[11px] text-teal-200">
                Guarda tus diagnósticos, medicamentos y apuntes clínicos
              </p>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            className="p-1.5 rounded-xl bg-[#092638] hover:bg-rose-900/60 text-slate-300 hover:text-white transition cursor-pointer border border-[#144863] hover:border-rose-500 shrink-0"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4 relative z-10">
          {/* Selector de Pestaña: Iniciar Sesión / Registrarse */}
          <div className="flex items-center gap-1 bg-[#051522] p-1 rounded-xl border border-[#11405c]">
            <button
              type="button"
              onClick={() => switchMode('login')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'login'
                  ? 'bg-[#179c94] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Iniciar Sesión</span>
            </button>
            <button
              type="button"
              onClick={() => switchMode('register')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'register'
                  ? 'bg-[#179c94] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Crear Cuenta</span>
            </button>
          </div>

          {/* Mensaje de Error */}
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Formulario según pestaña */}
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Correo Electrónico:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@gmail.com"
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Contraseña:
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-9 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#22b8af]/25 cursor-pointer transition active:scale-95"
                >
                  {loading ? 'Comprobando...' : 'Entrar a mi Cuenta'}
                </button>
                <button
                  type="button"
                  onClick={resetFormFields}
                  className="px-3 py-2.5 rounded-xl border border-[#144863] hover:border-slate-500 text-slate-400 hover:text-white text-xs font-bold transition cursor-pointer"
                  title="Limpiar campos"
                >
                  Limpiar
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Nombres y Apellidos:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Lic. Rosa Flores A."
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Correo Electrónico:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@gmail.com"
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Colegiatura CEP <span className="text-slate-400 text-[10px] font-normal">(Opcional)</span>:
                </label>
                <div className="relative">
                  <Award className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="Ej. CEP 120064"
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Contraseña <span className="text-slate-400 text-[10px] font-normal">(Mín. 6 caracteres)</span>:
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#051522] border border-[#175270] rounded-xl pl-9 pr-9 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#22b8af]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#22b8af]/25 cursor-pointer transition active:scale-95"
                >
                  {loading ? 'Creando cuenta...' : 'Crear mi Cuenta'}
                </button>
                <button
                  type="button"
                  onClick={resetFormFields}
                  className="px-3 py-2.5 rounded-xl border border-[#144863] hover:border-slate-500 text-slate-400 hover:text-white text-xs font-bold transition cursor-pointer"
                  title="Limpiar todos los campos del formulario"
                >
                  Limpiar
                </button>
              </div>
            </form>
          )}

          {/* Ventajas y Beneficios de registrarse */}
          <div className="pt-3 border-t border-[#12425a] space-y-2 text-[11px] text-slate-300">
            <p className="font-extrabold text-[#42edd8] flex items-center gap-1.5 uppercase tracking-wide text-[10px]">
              <Sparkles className="w-3.5 h-3.5 text-[#22b8af]" />
              Beneficios exclusivos al registrarte:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-[#05141f] border border-[#113a52] space-y-0.5">
                <span className="font-bold text-white block">📓 Libreta Clínica 24/7</span>
                <span className="text-slate-400 text-[10px]">Guarda diagnósticos, dosis calculadas y PLACE.</span>
              </div>
              <div className="p-2 rounded-lg bg-[#05141f] border border-[#113a52] space-y-0.5">
                <span className="font-bold text-white block">📊 Simulacros ENAE</span>
                <span className="text-slate-400 text-[10px]">Historial de puntajes y seguimiento de aciertos.</span>
              </div>
              <div className="p-2 rounded-lg bg-[#05141f] border border-[#113a52] space-y-0.5">
                <span className="font-bold text-white block">🎓 Certificados con QR</span>
                <span className="text-slate-400 text-[10px]">Descarga tus constancias en PDF en cualquier momento.</span>
              </div>
              <div className="p-2 rounded-lg bg-[#05141f] border border-[#113a52] space-y-0.5">
                <span className="font-bold text-white block">⚡ 100% Gratuito y Seguro</span>
                <span className="text-slate-400 text-[10px]">Tus apuntes se mantienen disponibles en tu dispositivo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
