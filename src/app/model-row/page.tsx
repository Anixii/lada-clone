import AboutLada from '@/features/about-lada/view/about-lada';
import { ColorSwiper } from '@/features/color-swiper';
import ExteriorBlock from '@/features/exterior-block/view/exterior-block';
import GalleryBlock from '@/features/gallery-block/view/gallery-block';
import InteriorBlock from '@/features/interior-block/view/interior-block';
import ModelBanner from '@/features/model-banner/view/mode-banner';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import SpecificationsBlock from '@/features/specifications-block/view/specifications-block';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { Header } from '@/widgets/header';
import HeaderModel from '@/widgets/header-model/ui/header-model';
import ModelRowMain from '@/widgets/modelRowMain/modelRowMain';
import React from 'react';


const ModelRow = () => {
  return (
    <>
      <Header />
      <ModelRowMain />
      <TickerBlock items={items}/>
      <ModelBanner />
      <ModelSlider />
      <HeaderModel/>
      <ColorSwiper/>
      <InteriorBlock/>
      <ExteriorBlock/>
      <SpecificationsBlock/>
      <GalleryBlock/>
      <AboutLada/>
    </>
  );
};

export default ModelRow;
