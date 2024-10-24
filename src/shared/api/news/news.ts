import { INewsDetailsResultType, INewsParamsType } from './type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const newsApi = {
  page_size: 9,
  async getAllNews(params?: INewsParamsType) {
    const news = await fetcher('/news/all/', {
      queryParams: { ...params, page_size: this.page_size },
      customSettings: { next: { revalidate: 2400 } },
    });
    return news;
  },
  async getNewsDetails(id: string) {
    const data: INewsDetailsResultType = await fetcher(`/news/detail/${id}/`,
      { customSettings: { next: { revalidate: 2400 } } });
    if (!('error' in data)) {
      return data;
    }
    notFound();
  },
};
