import styles from './ui/corporatesales.module.scss';
import { BenefitsForLegalEntities } from '@/features/benefits-legal-for-entities';
import { CorporatesSale } from '@/features/corporates-sales/index';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { ServicesLegalEntities } from '@/features/services-legal-entities-block';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { CustomersBanner } from '@/widgets/customers-banner';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import PurchaseRequest from '@/widgets/purchase-request/ui/purchase-request';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: 'LADA | Корпоративные продажи',
  description: 'Lada official site',
};

const CorporateSalesPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs top='100px' containerClasses="container" color='light' />
      <CustomersBanner />
      <CorporatesSale />
      <TickerBlock items={items}/>
      <ModelSlider />
      <BenefitsForLegalEntities />
      <ServicesLegalEntities />
      <div className={`container ${styles.main__text}`}>
        <h2 className={`${styles.main__title}`}>
          Наша команда постоянно работает над тем, чтобы сделать покупку для Вас
          более привлекательной.Обратитесь к нам и мы поможем подобрать наиболее
          выгодное предложение для вашего бизнеса
        </h2>
      </div>
      <PurchaseRequest />
      <NewCarsLada />
    </>
  );
};

export default CorporateSalesPage;
