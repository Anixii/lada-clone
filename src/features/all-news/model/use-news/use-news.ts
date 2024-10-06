import { IUseNewsTypes } from '../../types/use-news';
import { newsApi } from '@/shared/api/news/news';
import { IAllNewsResult } from '@/shared/api/news/type';
import { create } from 'zustand';


export const useNews = create<IUseNewsTypes>((set, get) => ({
  currentPage: 1,
  isNextPage: true,
  news: [],
  isFetching: false,
  setCurrentPage(value: number) {
    set(() => ({ currentPage: value }));
  },
  toggleNextPage(value: boolean) {
    set(() => ({ isNextPage: value }));
  },
  async fetchNewsPage(value:number) {
    set(() => ({ isFetching: true }));
    const response: IAllNewsResult = await newsApi.getAllNews({ page: value });
    const newNews = [ ...get().news, ...response.results ];
    const uniqueItems = Array.from(new Map(newNews.map(item => [ item.id, item ])).values());
    set(() => ({ news: uniqueItems }));
    set(() => ({ isNextPage: !!response.next }));
    set(() => ({ isFetching: false }));
  },
}));
