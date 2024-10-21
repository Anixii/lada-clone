import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { contetnsUsedCarApi } from '@/shared/api/content/used-car/used-car';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { CarList } from '@/widgets/car-list';
import { Header } from '@/widgets/header';
import { BannerSwiper } from '@/widgets/swipers/banner-swiper';
import React from 'react';


const UsedCar = async() => {
  const banners = await contetnsUsedCarApi.getUsedCarBanner();
  return (
    <>
      <Header />
      <BannerSwiper images={banners}/>
      <TickerBlock items={items} />
      <ModelSlider />
      <CarList />
    </>
  );
};

export default UsedCar;
