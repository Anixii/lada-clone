import { IUsedCarDetails } from './type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const usedCarApi = {
  async getUsedCarDetail(id: number) {
    const carDetails: IUsedCarDetails = await fetcher(
      `/usedcar/detail/${id}/`,
      { customSettings: { next: { revalidate: 3600 } } },
    );
    if ('error' in carDetails) {
      notFound();
    }
    return carDetails;
  },
};
