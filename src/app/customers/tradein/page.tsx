import styles from './ui/tradein.module.scss';
import { TradeinDesiredCar } from '@/features/tradein-choose-car-form/index';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import {
  tradeInAdvantages,
  tradeInAnotherServicesItems,
  TradeInItems,
} from '@/shared/lib/variables/card-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Advantages } from '@/widgets/advantages';
import { AnotherServicesBlock } from '@/widgets/another-services-block';
import { BuybackRequestBlock } from '@/widgets/buyback-request-block';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import { StepFlow } from '@/widgets/step-flow/index';
import { Header } from '@/widgets/header';
import { tradeInApi } from '@/shared/api/content/trade-in/trade-in';
import { BannerSwiper } from '@/widgets/swipers/banner-swiper';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'LADA | Трейд-ин',
  description: 'Lada official site',
};
const TradeInPage = async() => {
  const banners = await tradeInApi.getTradeInBanners();
  return (
    <>
      <Header />
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <BannerSwiper images={banners}/>
      <div className={`${styles.main__title} container`}>
        <Typography variant="h2" weight="regular">
          Обмен и выкуп автомобилей с пробегом
        </Typography>
      </div>

      <Advantages advantagesItems={tradeInAdvantages}>
        <div className={styles.advantages__title}>
          <Typography variant="h4" weight="regular">
            Преимущества обмена у официального дилера ООО{' '}
            {'Автоцентр Интей Лада'}
          </Typography>
        </div>
      </Advantages>

      <ModelSlider />
      <BuybackRequestBlock
        title="Процесс программы Trade-in"
        items={TradeInItems}
      />
      <StepFlow>
        <TradeinDesiredCar />
      </StepFlow>
      <NewCarsLada />

      <AnotherServicesBlock
        anotherServicesItems={tradeInAnotherServicesItems}
      />
    </>
  );
};

export default TradeInPage;
