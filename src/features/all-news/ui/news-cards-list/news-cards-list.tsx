'use client';
// import styles from './news-cards-list.module.scss';
import { useNews } from '../../model/use-news/use-news';
import { NewsCardItem } from '@/entities/news-card-item';
import React, { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';


const NewsCardsList = () => {
  const currentPage = useNews(useShallow((state) => state.currentPage));
  const [ fetchNewsPage, news ] = useNews(
    useShallow((state) => [ state.fetchNewsPage, state.news ]),
  );
  useEffect(() => {
    fetchNewsPage(currentPage);
  }, [ currentPage ]);

  return (
    <>
      {news.map((item, index) => {
        return (
          <NewsCardItem
            date={item.date}
            key={index}
            image={item.images[ 0 ]}
            subtitle={item.name}
            id={item.id}
          />
        );
      })}
    </>
  );
};

export default NewsCardsList;
