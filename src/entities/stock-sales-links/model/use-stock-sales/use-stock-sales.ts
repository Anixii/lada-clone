import { IUseStockSales } from '../types/use-stock-sales';
import { create } from 'zustand';


export const useStockSales = create<IUseStockSales>((set) => ({
  currentLink: 1,
  setCurrentLink(id:number) {
    set({ currentLink: id });
  },
}));
