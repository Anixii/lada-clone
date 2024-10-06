import { IResult } from '@/shared/types/types';


export interface IAccountReviewsParamsType {
  page_size?: number;
  page?: number;
}
export interface IAccountAllReviewsItemType {
  id: number;
  create_date: string;
  date: string | null;
  name: string | null;
  phone_number: string | null;
  text: string | null;
  rating: number | null;
  included: boolean;
}

export type IAccountAllResults = IResult<IAccountAllReviewsItemType>;
