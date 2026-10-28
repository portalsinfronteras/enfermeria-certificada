import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SavedItem {
  id: string;
  type: 'diagnostico' | 'medicamento' | 'calculo' | 'nota' | 'soapie';
  title: string;
  subtitle?: string;
  category?: string;
  cie10?: string;
  data?: any;
  notes?: string;
  savedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: 'email' | 'google' | 'facebook';
  cep?: string;
  hospital?: string;
  createdAt: string;
  savedItems: SavedItem[];
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; message?: string }>;
  registerWithEmail: (name: string, email: string, pass: string, cep?: string) => Promise<{ success: boolean; message?: string }>;
  loginWithSocial: (provider: 'google' | 'facebook', profile?: Partial<UserProfile>) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  saveItem: (item: Omit<SavedItem, 'savedAt'>) => { saved: boolean; message: string };
  removeItem: (itemId: string) => void;
  isItemSaved: (itemId: string) => boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isAuthModalOpen: boolean;
  openSavedModal: () => void;
  closeSavedModal: () => void;
  isSavedModalOpen: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USER_KEY = 'enfermeria_certificada_active_user';
const LOCAL_STORAGE_DB_KEY = 'enfermeria_certificada_users_registry';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Cargar usuario activo al iniciar la app
  useEffect(() => {
    try {
      const activeData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (activeData) {
        const parsed = JSON.parse(activeData);
        setUser(parsed);
      }
    } catch {
      // Error silencioso en carga inicial
    }
  }, []);

  // Guardar cambios del usuario activo en localStorage
  const syncUser = (updatedUser: UserProfile | null) => {
    setUser(updatedUser);
    try {
      if (updatedUser) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(updatedUser));
        
        // Sincronizar también en la base local de usuarios registrados
        const usersDbStr = localStorage.getItem(LOCAL_STORAGE_DB_KEY) || '[]';
        const usersDb: UserProfile[] = JSON.parse(usersDbStr);
        const index = usersDb.findIndex((u) => u.email.toLowerCase() === updatedUser.email.toLowerCase());
        if (index >= 0) {
          usersDb[index] = updatedUser;
        } else {
          usersDb.push(updatedUser);
        }
        localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(usersDb));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      }
    } catch {
      // Ignorar quota storage
    }
  };

  // Iniciar sesión con correo y contraseña
  const loginWithEmail = async (email: string, pass: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const cleanEmail = email.trim().toLowerCase();
      if (!cleanEmail || !pass) {
        return { success: false, message: 'Ingrese correo y contraseña.' };
      }

      const usersDbStr = localStorage.getItem(LOCAL_STORAGE_DB_KEY) || '[]';
      const usersDb: (UserProfile & { password?: string })[] = JSON.parse(usersDbStr);

      const existingUser = usersDb.find((u) => u.email.toLowerCase() === cleanEmail);
      if (!existingUser) {
        return { success: false, message: 'No existe una cuenta registrada con este correo. Puedes crear una nueva cuenta.' };
      }

      if (existingUser.password && existingUser.password !== pass) {
        return { success: false, message: 'Contraseña incorrecta. Por favor intente nuevamente.' };
      }

      const { password: _, ...safeUser } = existingUser;
      syncUser(safeUser as UserProfile);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch {
      return { success: false, message: 'Error al procesar el inicio de sesión.' };
    }
  };

  // Registro de nuevo usuario
  const registerWithEmail = async (name: string, email: string, pass: string, cep?: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = name.trim();

      if (!cleanName || !cleanEmail || !pass) {
        return { success: false, message: 'Por favor complete todos los campos obligatorios.' };
      }

      if (pass.length < 6) {
        return { success: false, message: 'La contraseña debe tener al menos 6 caracteres.' };
      }

      const usersDbStr = localStorage.getItem(LOCAL_STORAGE_DB_KEY) || '[]';
      const usersDb: (UserProfile & { password?: string })[] = JSON.parse(usersDbStr);

      const existingUser = usersDb.find((u) => u.email.toLowerCase() === cleanEmail);
      if (existingUser) {
        return { success: false, message: 'Ya existe una cuenta con este correo. Por favor inicia sesión.' };
      }

      const newUser: UserProfile & { password?: string } = {
        id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name: cleanName,
        email: cleanEmail,
        password: pass,
        provider: 'email',
        cep: cep?.trim() || undefined,
        createdAt: new Date().toISOString(),
        savedItems: [],
      };

      usersDb.push(newUser);
      localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(usersDb));

      const { password: _, ...safeUser } = newUser;
      syncUser(safeUser as UserProfile);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch {
      return { success: false, message: 'Error al registrar la cuenta.' };
    }
  };

  // Inicio de sesión con redes sociales (Gmail / Google o Facebook)
  const loginWithSocial = async (provider: 'google' | 'facebook', profile?: Partial<UserProfile>): Promise<{ success: boolean; message?: string }> => {
    try {
      const name = profile?.name || (provider === 'google' ? 'Usuario de Google' : 'Usuario de Facebook');
      const email = profile?.email || `${provider}_${Date.now()}@gmail.com`;
      const avatar = profile?.avatar;

      const usersDbStr = localStorage.getItem(LOCAL_STORAGE_DB_KEY) || '[]';
      const usersDb: UserProfile[] = JSON.parse(usersDbStr);

      let existing = usersDb.find((u) => u.email.toLowerCase() === email.toLowerCase());

      if (!existing) {
        existing = {
          id: `${provider}_` + Date.now(),
          name,
          email,
          avatar,
          provider,
          createdAt: new Date().toISOString(),
          savedItems: [],
        };
        usersDb.push(existing);
        localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(usersDb));
      }

      syncUser(existing);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch {
      return { success: false, message: `Error al conectar con ${provider}.` };
    }
  };

  // Cerrar sesión
  const logout = () => {
    syncUser(null);
  };

  // Guardar un elemento clínico en la cuenta del usuario
  const saveItem = (item: Omit<SavedItem, 'savedAt'>): { saved: boolean; message: string } => {
    if (!user) {
      setIsAuthModalOpen(true);
      return { saved: false, message: 'Inicia sesión o regístrate para guardar información en tu cuenta personal.' };
    }

    const currentSaved = user.savedItems || [];
    const exists = currentSaved.some((s) => s.id === item.id);

    if (exists) {
      // Eliminar si ya existe (toggle)
      const updatedList = currentSaved.filter((s) => s.id !== item.id);
      const updatedUser: UserProfile = { ...user, savedItems: updatedList };
      syncUser(updatedUser);
      return { saved: false, message: 'Elemento retirado de tus guardados.' };
    } else {
      const newItem: SavedItem = {
        ...item,
        savedAt: new Date().toISOString(),
      };
      const updatedList = [newItem, ...currentSaved];
      const updatedUser: UserProfile = { ...user, savedItems: updatedList };
      syncUser(updatedUser);
      return { saved: true, message: '¡Información guardada exitosamente en tu cuenta!' };
    }
  };

  // Eliminar elemento de guardados
  const removeItem = (itemId: string) => {
    if (!user) return;
    const currentSaved = user.savedItems || [];
    const updatedList = currentSaved.filter((s) => s.id !== itemId);
    const updatedUser: UserProfile = { ...user, savedItems: updatedList };
    syncUser(updatedUser);
  };

  // Comprobar si un elemento está guardado
  const isItemSaved = (itemId: string): boolean => {
    if (!user || !user.savedItems) return false;
    return user.savedItems.some((s) => s.id === itemId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loginWithEmail,
        registerWithEmail,
        loginWithSocial,
        logout,
        saveItem,
        removeItem,
        isItemSaved,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        isAuthModalOpen,
        openSavedModal: () => setIsSavedModalOpen(true),
        closeSavedModal: () => setIsSavedModalOpen(false),
        isSavedModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
