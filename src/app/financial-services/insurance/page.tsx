import styles from './ui/insurance.module.scss';
import { RequestForm } from '@/features/request-form';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { tradeInAnotherServicesItems } from '@/shared/lib/variables/card-items';
import { insuranceAdvantagesItems } from '@/shared/lib/variables/financial-servicess-variables';
import { financialServicesItems } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Advantages } from '@/widgets/advantages';
import { AnotherServicesBlock } from '@/widgets/another-services-block';
import { CustomersBanner } from '@/widgets/customers-banner';
import { InsuranceList } from '@/features/insurance-list';


const InsurancePage = () => {
  return (
    <div className={styles.main}>
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <CustomersBanner />
      <Typography
        className={styles.main__subtitle}
        variant="subtitle"
        weight="bold"
      >
        Наши партнеры
      </Typography>
      <TickerBlock items={financialServicesItems} />
      <Typography
        className={styles.main__title}
        variant="titleText"
        weight="regular"
      >
        Страхование
      </Typography>
      <Advantages advantagesItems={insuranceAdvantagesItems} classNames={styles.advantages__container}>
        <Typography
          variant="h3"
          weight="regular"
          className={styles.advantages__title}
        >
          Страхование автомобиля в автоцентре Интей ЛАДА - выгодно и удобно:
        </Typography>
      </Advantages>
      <InsuranceList/>
      <ModelSlider />
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
    </div>
  );
};

export default InsurancePage;
