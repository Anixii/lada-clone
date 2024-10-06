import { IUseCars } from '../types/use-cars.types';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { generateBaseUrl } from '@/shared/lib/fetcher/utils/generateBaseUrl';
import { create } from 'zustand';


const ENDPOINTS = { cars: '/caravailable/filter/' };

export const useCars = create<IUseCars>((set, _, state) => ({
  cars: [],
  count: 0,
  filters: {
    price_max: null,
    price_min: null,
    model: null,
    transmission: null,
    body: null,
    drive: null,
    volume: null,
    color: null,
    has_stock: null,
    page: null,
    page_size: null,
  },
  setPriceMin: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, price_min: val } }));
  },
  setPriceMax: (val: string | null) => {
    set((state) => ({ filters: { ...state.filters, price_max: val } }));
  },
  setModel: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, model: val } }));
  },
  setTransmission: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, transmission: val } }));
  },
  setBody: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, body: val } }));
  },
  setDrive: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, drive: val } }));
  },
  setVolume: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, volume: val } }));
  },
  setColor: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, color: val } }));
  },
  setHasStock: (val: number[] | null) => {
    set((state) => ({ filters: { ...state.filters, has_stock: val } }));
  },
  fetchCars: async () => {
    try {
      const response = await fetcher(ENDPOINTS.cars);
      set({ cars: response.results });
      set({ count: response.count });
    } catch (e) {
      console.error(e);
    }
  },
  fetchCarsWithFilters: async (filters) => {
    try {
      const params = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(filters).filter(([ _, v ]) => v !== null),
      );
      const response = await fetcher(generateBaseUrl(ENDPOINTS.cars, { params }));
      set({ cars: response.results });
      set({ count: response.count });
    } catch (e) {
      console.error(e);
    }
  },
  setFiltersClear: () => {
    set({ filters: state.getInitialState().filters });
  },
}));
