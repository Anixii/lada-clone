import styles from './ui/leasing.module.scss';
import { LeasingCars } from '@/features/leasing-cars';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { tradeInAnotherServicesItems } from '@/shared/lib/variables/card-items';
import { leasingAdvantagesItems } from '@/shared/lib/variables/financial-servicess-variables';
import { financialServicesItems } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Advantages } from '@/widgets/advantages';
import { AnotherServicesBlock } from '@/widgets/another-services-block';
import { CustomersBanner } from '@/widgets/customers-banner';


const LeasingPage = () => {
  return (
    <div className={styles.main}>
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <CustomersBanner />
      <ModelSlider />
      <Typography className={styles.main__title} variant='titleText' weight='regular'>Лизинг</Typography>
      <Advantages advantagesItems={leasingAdvantagesItems}>
        <Typography
          variant="h3"
          weight="regular"
          className={styles.advantages__title}
        >
          Автомобили LADA в лизинг
        </Typography>
      </Advantages>
      <Typography className={styles.main__subtitle} variant='subtitle' weight='bold'>Наши партнеры</Typography>
      <TickerBlock items={financialServicesItems} />
      <LeasingCars/>
      <AnotherServicesBlock
        anotherServicesItems={tradeInAnotherServicesItems}
      />
    </div>
  );
};

export default LeasingPage;
