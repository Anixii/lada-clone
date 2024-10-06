import { IResult } from '@/shared/types/types';


export interface INewsParamsType {
  page_size?: number;
  page?: number;
}

export interface INewsDetailsType {
  id: number;
  date: string;
  included: boolean;
  name?: string;
  text?: string;
  images: Array<string>;
}
export interface INewsError {
  error: boolean;
}
export type INewsDetailsResultType = INewsDetailsType | INewsError;

export type IAllNewsResult = IResult<INewsDetailsType>;
