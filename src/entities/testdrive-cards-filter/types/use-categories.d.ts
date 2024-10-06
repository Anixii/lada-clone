import { StaticImageData } from 'next/image';


export interface IUseCateogryType {
  cars: Array<carsCategoryItem>;
  currentCategory: string | null;
  setCategory: (val: string) => void
}

export interface carsCategoryItem {
  value: string;
  label: string;
  isActive: boolean;
  image: HTMLImageElement | StaticImageData;
}
