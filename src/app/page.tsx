import styles from './page.module.scss';
import { NewsAndReviewsSwiper } from '@/widgets/swipers/news-and-reviews';
import { HomeSwiper } from '@/widgets/swipers';
import { OffDealer } from '@/widgets/off-dealer';
import { NewsSwiper } from '@/widgets/swipers/news-swiper';
import { Leader } from '@/widgets/leader';
import { ModelsSwiper } from '@/widgets/swipers/models-swiper';
import { BestOffersSwiper } from '@/widgets/swipers/best-offers-swiper';
import { Header } from '@/widgets/header';
import { mainApi } from '@/shared/api/content/main/main';
import React from 'react';


export default async function Home() {
  const banners = await mainApi.getMainPageBanners();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HomeSwiper banners={banners}/>
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
