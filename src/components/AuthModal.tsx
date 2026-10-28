import React, { useState } from 'react';
import {
  X,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Award,
  CheckCircle2,
  LogIn,
  UserPlus,
  Sparkles,
  ShieldCheck,
  Bookmark
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, loginWithEmail, registerWithEmail, loginWithSocial } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');

  // Estado para modal rápido de Google / Facebook
  const [socialModal, setSocialModal] = useState<'google' | 'facebook' | null>(null);
  const [socialName, setSocialName] = useState('');
  const [socialEmail, setSocialEmail] = useState('');

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

  const handleStartSocial = (provider: 'google' | 'facebook') => {
    setErrorMsg('');
    setSocialModal(provider);
    setSocialName(provider === 'google' ? 'Lic. Usuario de Google' : 'Lic. Usuario de Facebook');
    setSocialEmail(provider === 'google' ? 'usuario.salud@gmail.com' : 'usuario.salud@facebook.com');
  };

  const handleConfirmSocial = async () => {
    if (!socialModal) return;
    setLoading(true);
    await loginWithSocial(socialModal, {
      name: socialName.trim() || undefined,
      email: socialEmail.trim() || undefined,
      avatar: socialModal === 'google'
        ? 'https://lh3.googleusercontent.com/a/default-user'
        : 'https://graph.facebook.com/4/picture?type=normal',
    });
    setLoading(false);
    setSocialModal(null);
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

        {/* Modal Interactivo de Inicio con Google o Facebook */}
        {socialModal ? (
          <div className="p-5 sm:p-6 space-y-4 relative z-10">
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-white shadow-lg mx-auto">
                {socialModal === 'google' ? (
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </div>
              <h4 className="text-sm font-bold text-white">
                Vincular con tu cuenta de {socialModal === 'google' ? 'Google (Gmail)' : 'Facebook'}
              </h4>
              <p className="text-xs text-slate-300">
                Confirma tus datos para sincronizar tu cuenta y acceder a guardar información clínica:
              </p>
            </div>

            <div className="space-y-3 bg-[#05141f] p-3.5 rounded-2xl border border-[#12425a]">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Nombre completo:</label>
                <input
                  type="text"
                  value={socialName}
                  onChange={(e) => setSocialName(e.target.value)}
                  className="w-full bg-[#082233] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                  placeholder="Tu nombre y apellidos"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Correo electrónico:</label>
                <input
                  type="email"
                  value={socialEmail}
                  onChange={(e) => setSocialEmail(e.target.value)}
                  className="w-full bg-[#082233] border border-[#175270] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#22b8af]"
                  placeholder="tu.correo@gmail.com"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setSocialModal(null)}
                className="flex-1 py-2.5 rounded-xl border border-[#144863] text-xs font-bold text-slate-300 hover:text-white cursor-pointer"
              >
                Volver
              </button>
              <button
                type="button"
                onClick={handleConfirmSocial}
                disabled={loading}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white font-bold text-xs shadow-lg hover:brightness-110 cursor-pointer transition"
              >
                {loading ? 'Accediendo...' : 'Ingresar ahora'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6 space-y-4 relative z-10">
            {/* BOTONES DE INGRESO RÁPIDO CON GOOGLE Y FACEBOOK */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-300 text-center mb-1">
                Acceso rápido con un solo clic:
              </p>

              {/* Botón Google */}
              <button
                type="button"
                onClick={() => handleStartSocial('google')}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-95 transition cursor-pointer border border-slate-200"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continuar con Google (Gmail)</span>
              </button>

              {/* Botón Facebook */}
              <button
                type="button"
                onClick={() => handleStartSocial('facebook')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-95 transition cursor-pointer"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Continuar con Facebook</span>
              </button>
            </div>

            {/* Separador */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-[#12425a] w-full" />
              <span className="bg-[#071d2b] px-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider relative">
                o con correo electrónico
              </span>
            </div>

            {/* Selector de Pestaña: Iniciar Sesión / Registrarse */}
            <div className="flex items-center gap-1 bg-[#051522] p-1 rounded-xl border border-[#11405c]">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg('');
                }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
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
                onClick={() => {
                  setMode('register');
                  setErrorMsg('');
                }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#22b8af]/25 cursor-pointer transition active:scale-95"
                >
                  {loading ? 'Comprobando...' : 'Entrar a mi Cuenta'}
                </button>
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#22b8af]/25 cursor-pointer transition active:scale-95"
                >
                  {loading ? 'Creando cuenta...' : 'Crear mi Cuenta Gratis'}
                </button>
              </form>
            )}

            {/* Ventajas de registrarse */}
            <div className="pt-2 border-t border-[#12425a] space-y-1 text-[11px] text-slate-300">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#22b8af]" />
                ¿Qué puedes hacer con tu cuenta?
              </p>
              <ul className="space-y-0.5 text-slate-400 pl-4 list-disc">
                <li>Guardar diagnósticos y dosis pediátricas en tu libreta.</li>
                <li>Tus datos se mantienen guardados y disponibles en tu dispositivo.</li>
                <li>Acceso gratuito y seguro.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
