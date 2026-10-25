/**
 * Offline Cache Service for Core Clinical Reference Tools
 * Provides local storage persistence and cache validation for Vademécum,
 * Pediatric Dosing, Medical Diagnoses and Clinical Scales.
 */

import { vademecumData, Drug } from '../data/vademecumData';
import { pediatricDrugsData, PediatricDrug } from '../data/pediatricDrugsData';
import { diagnosticosData, DiagnosisItem } from '../data/diagnosticosData';

const VADEMECUM_CACHE_KEY = 'offline_clinical_vademecum_v1';
const PEDIATRIC_CACHE_KEY = 'offline_clinical_pediatric_v1';
const DIAGNOSTICOS_CACHE_KEY = 'offline_clinical_diagnosticos_v1';
const CACHE_METADATA_KEY = 'offline_clinical_cache_meta_v1';

export interface CacheMetadata {
  lastUpdated: string;
  vademecumCount: number;
  pediatricCount: number;
  diagnosticosCount: number;
  isReady: boolean;
}

export const offlineCacheService = {
  /**
   * Initializes local storage cache with core clinical reference datasets.
   * Runs seamlessly on app startup.
   */
  initializeOfflineCache(): CacheMetadata {
    try {
      // 1. Check if cache exists or needs refresh
      const existingMeta = localStorage.getItem(CACHE_METADATA_KEY);
      if (!existingMeta) {
        // First-time caching
        localStorage.setItem(VADEMECUM_CACHE_KEY, JSON.stringify(vademecumData));
        localStorage.setItem(PEDIATRIC_CACHE_KEY, JSON.stringify(pediatricDrugsData));
        localStorage.setItem(DIAGNOSTICOS_CACHE_KEY, JSON.stringify(diagnosticosData));

        const meta: CacheMetadata = {
          lastUpdated: new Date().toISOString(),
          vademecumCount: vademecumData.length,
          pediatricCount: pediatricDrugsData.length,
          diagnosticosCount: diagnosticosData.length,
          isReady: true,
        };
        localStorage.setItem(CACHE_METADATA_KEY, JSON.stringify(meta));
        return meta;
      }

      const parsedMeta: CacheMetadata = JSON.parse(existingMeta);
      return parsedMeta;
    } catch (e) {
      console.warn('LocalStorage offline caching warning:', e);
      return {
        lastUpdated: new Date().toISOString(),
        vademecumCount: vademecumData.length,
        pediatricCount: pediatricDrugsData.length,
        diagnosticosCount: diagnosticosData.length,
        isReady: true,
      };
    }
  },

  /**
   * Retrieves cached Vademécum drugs with fallback to in-memory bundle
   */
  getCachedVademecum(): Drug[] {
    try {
      const cached = localStorage.getItem(VADEMECUM_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return vademecumData;
  },

  /**
   * Retrieves cached Pediatric drugs with fallback to in-memory bundle
   */
  getCachedPediatric(): PediatricDrug[] {
    try {
      const cached = localStorage.getItem(PEDIATRIC_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return pediatricDrugsData;
  },

  /**
   * Retrieves cached Medical Diagnoses with fallback to in-memory bundle
   */
  getCachedDiagnosticos(): DiagnosisItem[] {
    try {
      const cached = localStorage.getItem(DIAGNOSTICOS_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return diagnosticosData;
  },

  /**
   * Returns cache status metadata
   */
  getCacheStatus(): CacheMetadata {
    try {
      const meta = localStorage.getItem(CACHE_METADATA_KEY);
      if (meta) {
        return JSON.parse(meta);
      }
    } catch {
      // Fallback
    }
    return {
      lastUpdated: new Date().toISOString(),
      vademecumCount: vademecumData.length,
      pediatricCount: pediatricDrugsData.length,
      diagnosticosCount: diagnosticosData.length,
      isReady: true,
    };
  },
};
