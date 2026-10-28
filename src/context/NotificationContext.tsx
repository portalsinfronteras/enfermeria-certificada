import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'convocatoria' | 'alerta' | 'academico' | 'clinico' | 'sistema';
  read: boolean;
  linkTab?: string;
  actionLabel?: string;
}

interface NotificationContextType {
  notifications: AppNotification[];
  unreadCount: number;
  isNotificationOpen: boolean;
  openNotifications: () => void;
  closeNotifications: () => void;
  toggleNotifications: () => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addNotification: (notif: Omit<AppNotification, 'id' | 'date' | 'read'>) => void;
  deleteNotification: (id: string) => void;
  requestPushPermission: () => Promise<boolean>;
  pushPermission: NotificationPermission | 'unsupported';
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const LOCAL_STORAGE_NOTIFS_KEY = 'enfermeria_certificada_notifications_v1';

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif_enae_2026',
    title: '📢 Convocatoria y Cronograma ENAE 2026',
    message: 'Se confirmaron las fechas oficiales del Examen Nacional de Enfermería. Simula tu examen por áreas temáticas y mide tu puntaje ahora.',
    date: 'Hoy, hace 2 horas',
    type: 'convocatoria',
    read: false,
    linkTab: 'enae',
    actionLabel: 'Rendir Simulacro ENAE'
  },
  {
    id: 'notif_serums_2026',
    title: '🏥 Preparación Sorteo de Plazas SERUMS 2026',
    message: 'Revisa el banco de preguntas priorizadas de Salud Pública, Inmunizaciones y Epidemiología para asegurar tu plaza remunerada.',
    date: 'Ayer',
    type: 'convocatoria',
    read: false,
    linkTab: 'enae',
    actionLabel: 'Ver Banco de Preguntas'
  },
  {
    id: 'notif_nanda_update',
    title: '💉 Guía NANDA-I 2024–2026 Integrada',
    message: 'Ya están disponibles los 205 diagnósticos completos organizados por los 13 dominios oficiales con interrelaciones NOC y NIC.',
    date: 'Hace 2 días',
    type: 'clinico',
    read: false,
    linkTab: 'nanda',
    actionLabel: 'Explorar PLACE y Dominios'
  },
  {
    id: 'notif_digemid_alert',
    title: '⚠️ Alerta Farmacovigilancia DIGEMID',
    message: 'Precauciones en la velocidad de infusión de Vancomicina y control de función renal en antibioticoterapia neonatal y pediátrica.',
    date: 'Hace 3 días',
    type: 'alerta',
    read: true,
    linkTab: 'pediatria',
    actionLabel: 'Calcular Dosis Segura'
  },
  {
    id: 'notif_cursos_cert',
    title: '🎓 Cursos de Actualización con Certificado QR',
    message: 'Capacítate en Accesos Vasculares, Soporte Vital y Farmacología Clínica. Descarga tu certificado con código QR verificable.',
    date: 'Hace 4 días',
    type: 'academico',
    read: true,
    linkTab: 'cursos',
    actionLabel: 'Ver Cursos Disponibles'
  }
];

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [pushPermission, setPushPermission] = useState<NotificationPermission | 'unsupported'>('default');

  // Cargar notificaciones al montar
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_NOTIFS_KEY);
      if (stored) {
        setNotifications(JSON.parse(stored));
      } else {
        setNotifications(INITIAL_NOTIFICATIONS);
        localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(INITIAL_NOTIFICATIONS));
      }
    } catch {
      setNotifications(INITIAL_NOTIFICATIONS);
    }

    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPushPermission(Notification.permission);
    } else {
      setPushPermission('unsupported');
    }
  }, []);

  // Guardar cambios
  const saveNotifs = (list: AppNotification[]) => {
    setNotifications(list);
    try {
      localStorage.setItem(LOCAL_STORAGE_NOTIFS_KEY, JSON.stringify(list));
    } catch {}
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const openNotifications = () => setIsNotificationOpen(true);
  const closeNotifications = () => setIsNotificationOpen(false);
  const toggleNotifications = () => setIsNotificationOpen((prev) => !prev);

  const markAsRead = (id: string) => {
    const updated = notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
    saveNotifs(updated);
  };

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    saveNotifs(updated);
  };

  const addNotification = (notif: Omit<AppNotification, 'id' | 'date' | 'read'>) => {
    const newNotif: AppNotification = {
      ...notif,
      id: 'notif_' + Date.now(),
      date: 'Recién ahora',
      read: false
    };
    const updated = [newNotif, ...notifications];
    saveNotifs(updated);

    // Si el navegador tiene permisos concedidos, disparar notificación push nativa
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(notif.title, {
          body: notif.message,
          icon: '/favicon.ico'
        });
      } catch {}
    }
  };

  const deleteNotification = (id: string) => {
    const updated = notifications.filter((n) => n.id !== id);
    saveNotifs(updated);
  };

  const requestPushPermission = async (): Promise<boolean> => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      alert('Tu navegador no soporta notificaciones de sistema.');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      setPushPermission(permission);
      if (permission === 'granted') {
        new Notification('🔔 Notificaciones Activadas', {
          body: 'Recibirás avisos de convocatorias SERUMS, simulacros ENAE y alertas clínicas de Enfermería Certificada.',
          icon: '/favicon.ico'
        });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        isNotificationOpen,
        openNotifications,
        closeNotifications,
        toggleNotifications,
        markAsRead,
        markAllAsRead,
        addNotification,
        deleteNotification,
        requestPushPermission,
        pushPermission
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications debe usarse dentro de un NotificationProvider');
  }
  return context;
};
