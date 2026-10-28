/**
 * Offline Cache Service for Core Clinical Reference Tools
 * Provides direct, instantaneous access to bundled datasets and cleans legacy storage.
 */

import { vademecumData, Drug } from '../data/vademecumData';
import { pediatricDrugsData, PediatricDrug } from '../data/pediatricDrugsData';
import { diagnosticosData, DiagnosisItem } from '../data/diagnosticosData';

export interface CacheMetadata {
  lastUpdated: string;
  vademecumCount: number;
  pediatricCount: number;
  diagnosticosCount: number;
  isReady: boolean;
}

export const offlineCacheService = {
  /**
   * Initializes cache and clears any outdated browser storage keys from earlier versions.
   */
  initializeOfflineCache(): CacheMetadata {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('offline_clinical_vademecum_v1');
        localStorage.removeItem('offline_clinical_pediatric_v1');
        localStorage.removeItem('offline_clinical_diagnosticos_v2_600');
        localStorage.removeItem('offline_clinical_diagnosticos');
        localStorage.removeItem('clinical_diagnosticos_cache');
      }
    } catch (e) {
      console.warn('LocalStorage cleanup warning:', e);
    }

    return {
      lastUpdated: new Date().toISOString(),
      vademecumCount: vademecumData.length,
      pediatricCount: pediatricDrugsData.length,
      diagnosticosCount: diagnosticosData.length,
      isReady: true,
    };
  },

  /**
   * Retrieves Vademécum drugs directly from memory (100% offline, immediate, zero stale cache)
   */
  getCachedVademecum(): Drug[] {
    return vademecumData;
  },

  /**
   * Retrieves Pediatric drugs directly from memory
   */
  getCachedPediatric(): PediatricDrug[] {
    return pediatricDrugsData;
  },

  /**
   * Retrieves Medical Diagnoses directly from memory
   */
  getCachedDiagnosticos(): DiagnosisItem[] {
    return diagnosticosData;
  },

  /**
   * Returns cache status metadata
   */
  getCacheStatus(): CacheMetadata {
    return {
      lastUpdated: new Date().toISOString(),
      vademecumCount: vademecumData.length,
      pediatricCount: pediatricDrugsData.length,
      diagnosticosCount: diagnosticosData.length,
      isReady: true,
    };
  },
};
