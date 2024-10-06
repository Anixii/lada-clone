import { ENDPOINTS, IFilterDefault, IUseFilters } from '../types/use-filters.type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { create } from 'zustand';


export const useFilters = create<IUseFilters>((set) => ({
  body: [],
  colors: [],
  drive: [],
  model: [],
  transmission: [],
  family: [],
  model_by_family: [],
  volume: [],
  power_by_volume: [],
  fetchFiltersBody: async () => {
    try {
      const response = await fetcher(ENDPOINTS.BODY);
      set({ body: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchFiltersColors: async () => {
    try {
      const response = await fetcher(ENDPOINTS.COLORS);
      set({ colors: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchFiltersDrive: async () => {
    try {
      const response = await fetcher(ENDPOINTS.DRIVE);
      set({ drive: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchFiltersModel: async () => {
    try {
      const response = await fetcher(ENDPOINTS.MODEL);
      set({ model: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchFiltersTransmission: async () => {
    try {
      const response = await fetcher(ENDPOINTS.TRANSMISSION);
      set({ transmission: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchCarFamily: async () => {
    try {
      const response = await fetcher(ENDPOINTS.FAMILY);
      set({ family: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchCarModelByFamily: async (families: IFilterDefault[]) => {
    try {
      const promises = families.map(async (el) => {
        return fetcher(ENDPOINTS.MODEL_FAMILY.replace(':id', el.id.toString())).then(
          res => {
            return res;
          },
        );
      });
      const response = await Promise.all(promises);
      set({ model_by_family: response.flat() });
    } catch (e) {
      console.error(e);
    }
  },
  fetchCarVolume: async () => {
    try {
      const response = await fetcher(ENDPOINTS.VOLUME);
      set({ volume: response });
    } catch (e) {
      console.error(e);
    }
  },
  fetchPowerByVolume: async (volume: IFilterDefault[]) => {
    try {
      const promises = volume.map(async (el) => {
        return fetcher(ENDPOINTS.POWER_BY_VOLUME.replace(':id', el.id.toString())).then(
          res => {
            return res;
          },
        );
      });
      const response = await Promise.all(promises);
      set({ power_by_volume: response.flat() });
    } catch (e) {
      console.error(e);
    }
  },
}));
