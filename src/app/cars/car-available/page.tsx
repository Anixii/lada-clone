import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { CarList } from '@/widgets/car-list';
import { Header } from '@/widgets/header';
import { HomeSwiper } from '@/widgets/swipers';
import React from 'react';


const CarAvailable = () => {
  return (
    <>
      <Header />
      <HomeSwiper />
      <TickerBlock items={items} />
      <ModelSlider />
      <CarList />
    </>
  );
};

export default CarAvailable;
