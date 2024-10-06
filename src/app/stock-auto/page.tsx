import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import Calculator from '@/widgets/calculator/ui/calculator';
import CarServices from '@/widgets/car-services/ui/car-services';
import Characteristics from '@/widgets/characteristics/ui/characteristics';
import { Header } from '@/widgets/header';
import PurchaseRequest from '@/widgets/purchase-request/ui/purchase-request';
import { FC } from 'react';


const StockAutoPage: FC = () => {
  return (
    <>
      <Header />
      <Characteristics/>
      <TickerBlock items={items}/>
      <ModelSlider/>
      <Calculator/>
      <PurchaseRequest/>
      <CarServices/>
    </>
  );
};

export default StockAutoPage;
