import { IUseCateogryType } from '../types/use-categories';
import { testDriveRegItems } from '@/shared/lib/variables/step-flow-form-items';
import { create } from 'zustand';


export const useCategories = create<IUseCateogryType>((set) => ({
  cars: testDriveRegItems,
  currentCategory: 'all',
  setCategory: (val: string) => {
    const newCars = testDriveRegItems.filter((item) => item.value === val);
    set(() => ({ currentCategory: val }));
    set(() => ({ cars: newCars }));
  },
}));
