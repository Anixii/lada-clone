import { ENDPOINTS, IUseUsedCarsFilters } from '../types/use-filter-used.types';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { create } from 'zustand';


export const useUsedCarsFilters = create<IUseUsedCarsFilters>((set) => ({
  used_body: [],
  used_color: [],
  used_drive: [],
  used_engine: [],
  used_families: [],
  used_mark: [],
  used_transmission: [],
  used_volume: [],
  used_year: [],
  fetchUsedFiltersBody: async () => {
    try {
      const response = await fetcher(ENDPOINTS.BODY);
      set({ used_body: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersColors: async () => {
    try {
      const response = await fetcher(ENDPOINTS.COLOR);
      set({ used_color: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersDrive: async () => {
    try {
      const response = await fetcher(ENDPOINTS.DRIVE);
      set({ used_drive: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersEngine: async () => {
    try {
      const response = await fetcher(ENDPOINTS.ENGINE);
      set({ used_engine: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersTransmission: async () => {
    try {
      const response = await fetcher(ENDPOINTS.TRANSMISSION);
      set({ used_transmission: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersFamilies: async () => {
    try {
      const response = await fetcher(ENDPOINTS.FAMILIES);
      set({ used_families: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersMark: async () => {
    try {
      const response = await fetcher(ENDPOINTS.MARK);
      set({ used_mark: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedCarVolume: async () => {
    try {
      const response = await fetcher(ENDPOINTS.VOLUME);
      set({ used_volume: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedFiltersYear: async () => {
    try {
      const response = await fetcher(ENDPOINTS.YEAR);
      set({ used_year: response });
    } catch (e) {
      console.error(e);
    }
  },
}));
