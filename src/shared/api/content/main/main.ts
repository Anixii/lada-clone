import { IMainBannersWithTextType } from '../types/type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const mainApi = {
  async getMainPageBanners() {
    const data:Array<IMainBannersWithTextType> = await fetcher('/content/index/banners/all/',
      { customSettings: { next: { revalidate: 3600 } } });

    if (!('error' in data)) {
      return data;
    }
    notFound();
  },
};
