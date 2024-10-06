import { StaticImageData } from 'next/image';


export interface IAccessoriesCategory {
    id: number;
    name: string;
}
export interface IAccessoriesCategoryItem {
    id: number;
    name: string;
    text: string;
    item: string;
    image: string | StaticImageData;// Static удалить ;
    image_path: string;
    category: number;
    car_available: number
}
export interface IUseAccessories {
    categories: Array<IAccessoriesCategory>;
    currentCategory: IAccessoriesCategory | null
    categoryData: null | Array<IAccessoriesCategoryItem>
    setCurrentCategory: (value:IAccessoriesCategory) => void;
    setCategoriesData:(v: Array<IAccessoriesCategoryItem>) => void
}
