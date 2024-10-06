import styles from './ui/repair.module.scss';
import { Header } from '@/widgets/header';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { RequestForm } from '@/features/request-form';
import { GuaranteeRepair } from '@/features/guarantee-repair';
import UnderSwiper from '@/features/news-swiper/view/under-swiper';
import { ownersRepairItems } from '@/shared/lib/variables/owners-items';
import { NewsCardItem } from '@/entities/news-card-item';
import React from 'react';


const RepairPage = () => {
  return (
    <>
      <Header variant="white__variant" />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <div className={styles.main}>
        <Typography
          variant="titleText"
          weight="regular"
          className={styles.main__title}
        >
          Гарантийный ремонт
        </Typography>
        <TickerBlock items={items} />
        <ModelSlider />
        <GuaranteeRepair />
        <div className={`container ${styles.request__form}`}>
          <RequestForm
            isSelectActive
            subtitle="Отправьте нам заявку и мы свяжемся с вами сразу в день обращения"
            title="Заявка на обратный звонок"
          />
        </div>
        <UnderSwiper title="Акции сервиса">
          {ownersRepairItems.map((item, index) => (
            <NewsCardItem
              id={item.id}
              key={index}
              date={item.date}
              image={item.image}
              subtitle={item.subtitle}
              title={item.title}
              classNames={'under_swiper_card_item'}
            />
          ))}
        </UnderSwiper>
      </div>
    </>
  );
};

export default RepairPage;
