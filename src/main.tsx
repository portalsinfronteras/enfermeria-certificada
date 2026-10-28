import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';
import { offlineCacheService } from './services/offlineCacheService';

// Initialize and purge outdated local storage caches
offlineCacheService.initializeOfflineCache();

// Register Service Worker with automatic update reload
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      updateSW(true).then(() => {
        window.location.reload();
      });
    },
  });
}

createRoot(document.getElementById('root')!).render(<App />);
