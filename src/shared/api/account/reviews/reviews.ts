import { IAccountReviewsParamsType } from './types/types';
import { fetcher } from '@/shared/lib/fetcher/fetcher';


export const accountReviewsApi = {
  page_size: 2,
  async getAllReviews(params?: IAccountReviewsParamsType) {
    const reviews = await fetcher('/account/reviews/all/', { queryParams: { ...params, page_size: this.page_size } });
    return reviews;
  },
};
