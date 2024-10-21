import { DefineNewsBlock } from '@/widgets/define-news';
import NewsSwiper from '@/features/news-swiper/view/under-swiper';
import { newsApi } from '@/shared/api/news/news';
import { IAllNewsResult, INewsDetailsResultType } from '@/shared/api/news/type';
import { Header } from '@/widgets/header';
import { NewsCardItem } from '@/entities/news-card-item';
import { BtnBack } from '@/shared/ui/btn-back';
import React from 'react';


export const revalidate = 60;
export const dynamicParams = true;

const DefineNews = async ({ params }: { params: { id: string } }) => {
  const defineNews: INewsDetailsResultType = await newsApi.getNewsDetails(
    params.id,
  );
  const allNews: IAllNewsResult = await newsApi.getAllNews();
  return (
    <>
      <Header variant="white__variant" />
      <BtnBack top="100px" containerClasses="container"/>
      <DefineNewsBlock
        title={defineNews.name || ''}
        image={defineNews.images}
        date={defineNews.date}
        description={defineNews.text || ''}
      />
      <NewsSwiper title="Другие новости">
        {allNews.results.map((item, index) => (
          <NewsCardItem
            id={item.id}
            key={index}
            date={item.date}
            image={item.images[ 0 ]}
            subtitle={item.name}
            classNames={'under_swiper_card_item'}
          />
        ))}
      </NewsSwiper>
    </>
  );
};

export default DefineNews;
