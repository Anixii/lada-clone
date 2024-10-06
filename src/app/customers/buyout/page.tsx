import styles from './ui/buyout.module.scss';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { buyOutItems } from '@/shared/lib/variables/card-items';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { BuybackRequestBlock } from '@/widgets/buyback-request-block';
import { CustomersBanner } from '@/widgets/customers-banner';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import PurchaseRequest from '@/widgets/purchase-request/ui/purchase-request';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'LADA | Выкуп авто',
  description: 'Lada official site',
};

const BuyoutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs top="100px" containerClasses="container" color="light" />
        <CustomersBanner />
        <div className={`${styles.main__title} container`}>
          <Typography variant="h2" weight="regular">
            Выкуп автомобилей всех марок и моделей
          </Typography>
        </div>
        <BuybackRequestBlock
          title="Оставьте заявку на выкуп авто"
          items={buyOutItems}
        />
        <TickerBlock items={items} />
        <ModelSlider />
        <PurchaseRequest />
        <NewCarsLada />
      </main>
    </>
  );
};

export default BuyoutPage;
