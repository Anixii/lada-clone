import styles from './page.module.scss';
import { NewsAndReviewsSwiper } from '@/widgets/swipers/news-and-reviews';
import { HomeSwiper } from '@/widgets/swipers';
import { OffDealer } from '@/widgets/off-dealer';
import { NewsSwiper } from '@/widgets/swipers/news-swiper';
import { Leader } from '@/widgets/leader';
import { ModelsSwiper } from '@/widgets/swipers/models-swiper';
import { BestOffersSwiper } from '@/widgets/swipers/best-offers-swiper';
import { Header } from '@/widgets/header';
import React from 'react';


export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeSwiper />
        <OffDealer />
        <BestOffersSwiper />
        <ModelsSwiper />
        <Leader />
        <NewsSwiper />
        <NewsAndReviewsSwiper />
      </main>
    </>
  );
}
