import { INewsDetailsType } from '@/shared/api/news/type';


export interface IUseNewsTypes {
  currentPage: number;
  isNextPage: boolean;
  isFetching: boolean;
  news: Array<INewsDetailsType>;
  toggleNextPage: (value: boolean) => void;
  setCurrentPage: (value: number) => void;
  fetchNewsPage: (value: number) => Promise<void>
}
