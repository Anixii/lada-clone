import styles from './ui/credit.module.scss';
import { RequestForm } from '@/features/request-form';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { tradeInAnotherServicesItems } from '@/shared/lib/variables/card-items';
import { creditAdvantagesItems } from '@/shared/lib/variables/financial-servicess-variables';
import { financialServicesItems } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Advantages } from '@/widgets/advantages';
import { AnotherServicesBlock } from '@/widgets/another-services-block';
import { CustomersBanner } from '@/widgets/customers-banner';
import { NewCarsLada } from '@/widgets/new-cars-lada';


const CreditPage = () => {
  return (
    <div className={styles.main}>
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <CustomersBanner />
      <Typography
        className={styles.main__title}
        variant="titleText"
        weight="regular"
      >
        Кредит на автомобили LADA
      </Typography>

      <Advantages advantagesItems={creditAdvantagesItems}></Advantages>
      <ModelSlider />
      <Typography
        className={styles.main__subtitle}
        variant="subtitle"
        weight="bold"
      >
        Наши партнеры
      </Typography>
      <TickerBlock items={financialServicesItems} />
      <div className={`container ${styles.main__form}`}>
        <RequestForm
          isSelectActive={true}
          subtitle="Отправьте нам заявку и мы свяжемся с вами сразу в день обращения"
          title="Заявка на обратный звонок"
        />
      </div>
      <AnotherServicesBlock
        anotherServicesItems={tradeInAnotherServicesItems}
      />
      <NewCarsLada />
    </div>
  );
};

export default CreditPage;
