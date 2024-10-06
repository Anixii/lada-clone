import { IAvaiableCarDetailsMainFeatures, IAvaiailableCarDetails } from './type';
import { IErrorResult } from '@/shared/types/types';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const caravailableDetailsApi = {
  async getAvaiableCarDetails(id: number) {
    const carDetail: IAvaiailableCarDetails | IErrorResult = await fetcher(
      `/caravailable/detail/${id}/`,
      { customSettings: { next: { revalidate: 3600 } } },
    );
    if ('error' in carDetail) {
      notFound();
    }
    return carDetail;
  },
  async getAvaiableCarDetailsMainFeatures(id: number) {
    const carDetail: IAvaiableCarDetailsMainFeatures | IErrorResult = await fetcher(
      `/caravailable/main_features/car_available/${id}/`,
      { customSettings: { next: { revalidate: 3600 } } },
    );
    if ('error' in carDetail) {
      notFound();
    }
    return carDetail;
  },

};
