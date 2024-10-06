import { IUseUsedCars } from '../types/use-used-cars.types';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { generateBaseUrl } from '@/shared/lib/fetcher/utils/generateBaseUrl';
import { create } from 'zustand';


const ENDPOINTS = { USED_CARS: '/usedcar/filter/' };

export const useUsedCars = create<IUseUsedCars>((set, _, state) => ({
  used_cars: [],
  used_cars_count: 0,
  filters: {
    used_price_min: null,
    used_price_max: null,
    used_run_min: null,
    used_run_max: null,
    used_year_min: null,
    used_year_max: null,
    used_mark: null,
    used_transmission: null,
    used_engine: null,
    used_body: null,
    used_drive: null,
    used_volume: null,
    used_color: null,
    used_page: null,
    used_page_size: null,
  },
  fetchUsedCars: async () => {
    try {
      const response = await fetcher(ENDPOINTS.USED_CARS);
      set({ used_cars: response.results });
      set({ used_cars_count: response.count });
    } catch (e) {
      console.error(e);
    }
  },
  fetchUsedCarsWithFilters: async (filters) => {
    try {
      const normalizedFilters = Object.fromEntries(
        Object.entries(filters)
          .filter(([ , v ]) => v !== null)
          .map(([ key, value ]) => [ key.replace(/^used_/, ''), value ]),
      );

      const params = Object.fromEntries(
        Object.entries(normalizedFilters),
      );

      const response = await fetcher(generateBaseUrl(ENDPOINTS.USED_CARS, { params }));
      set({ used_cars: response.results });
      set({ used_cars_count: response.count });
    } catch (e) {
      console.error(e);
    }
  },

  setUsedPriceMin: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_price_min: val } }));
  },
  setUsedPriceMax: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_price_max: val } }));
  },
  setUsedRunMin: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_run_min: val } }));
  },
  setUsedRunMax: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_run_max: val } }));
  },
  setUsedYearMin: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_year_min: val } }));
  },
  setUsedYearMax: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, used_year_max: val } }));
  },
  setUsedMark: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_mark: val } }));
  },
  setUsedTransmission: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_transmission: val } }));
  },
  setUsedEngine: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_engine: val } }));
  },
  setUsedBody: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_body: val } }));
  },
  setUsedDrive: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_drive: val } }));
  },
  setUsedVolume: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_volume: val } }));
  },
  setUsedColor: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, used_color: val } }));
  },
  setUsedPage: (val: number | null) => {
    set((state) => ({ filters: { ...state.filters, used_page: val } }));
  },
  setUsedPageSize: (val: number | null) => {
    set((state) => ({ filters: { ...state.filters, used_page_size: val } }));
  },
  setUsedFiltersClear: () => {
    set({ filters: state.getInitialState().filters });
  },
}));
