import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';
import { offlineCacheService } from './services/offlineCacheService';

// Initialize local storage clinical dataset caching
offlineCacheService.initializeOfflineCache();

// Register Service Worker for seamless offline caching
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  registerSW({
    immediate: true,
  });
}

createRoot(document.getElementById('root')!).render(<App />);
