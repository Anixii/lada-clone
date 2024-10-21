import { IMainBannersType } from '../types/type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const contetnsUsedCarApi = {
  async getUsedCarBanner() {
    const data:Array<IMainBannersType> = await fetcher('/content/index/used_car_banner/all/',
      { customSettings: { next: { revalidate: 3600 } } });

    if (!('error' in data)) {
      return data;
    }
    notFound();
  },
};
