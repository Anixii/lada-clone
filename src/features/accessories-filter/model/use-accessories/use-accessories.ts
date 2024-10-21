import { IAccessoriesCategory, IAccessoriesCategoryItem, IUseAccessories } from '../types/use-accessories';
import { create } from 'zustand';


export const useAccessories = create<IUseAccessories>((set) => ({
  categories: [
    { name: 'Экстерьер', id: 1 },
    { name: 'Защита автомобиля', id: 2 },
    { name: 'Активный отдых', id: 3 },
    { name: 'Безопасность', id: 4 },
    { name: 'Интерьер', id: 5 },
    { name: 'Мультимедиа', id: 6 },
  ],
  currentCategory: { name: 'Экстерьер', id: 1 },
  categoryData: null,
  setCurrentCategory(value:IAccessoriesCategory) {
    set({ currentCategory: value });
  },
  setCategoriesData(value: Array<IAccessoriesCategoryItem>) {
    set({ categoryData: value });
  },
}));
