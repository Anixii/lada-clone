import styles from './ui/car-available.module.scss';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { CurrentCarStocks } from '@/features/current-car-stocks';
import { caravailableDetailsApi } from '@/shared/api/caravailable/details';
import { Typography } from '@/shared/ui/typography';
import { Header } from '@/widgets/header';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { CarCharacteristicsItem } from '@/features/car-characteristics';
import { FilterCarDetails } from '@/widgets/filter-car-details';
import PurchaseRequest from '@/widgets/purchase-request/ui/purchase-request';
import CarServices from '@/widgets/car-services/ui/car-services';
import Calculator from '@/widgets/calculator/ui/calculator';
import AccessoriesCarAvailable from '@/features/accessories-car-available/view/accessories-car-available';
import React from 'react';


interface ICarAvailableDetails {
  params: {
    id: string;
  };
}
const CarAvailableDetails = async ({ params }: ICarAvailableDetails) => {
  const carDetail = await caravailableDetailsApi.getAvaiableCarDetails(
    +params.id,
  );
  const characterostics =
    await caravailableDetailsApi.getAvaiableCarDetailsMainFeatures(+params.id);

  return (
    <>
      <Header variant="white__variant" />
      <main className={`${styles.main}`}>
        <Typography
          variant="h1"
          weight="regular"
          className={`${styles.main__title} container`}
        >
          {carDetail.name}, <br /> {carDetail.full_price}₽
        </Typography>
        <CurrentCarStocks
          items={[
            'Акция «Заоблачные возможности»',
            'Акция «Автоматическая выгода»',
            'Акция «Только вперед»',
          ]}
        />
        <FilterCarDetails>
          <div className={styles.characterostics__item}>
            <CarCharacteristicsItem
              label="Конфигурация"
              value={characterostics.vehicle_configuration}
            />
            <CarCharacteristicsItem
              label="Объем двигателя"
              value={`${characterostics.engine_displacement} л`}
            />
            <CarCharacteristicsItem
              label="Двигатель"
              value={characterostics.engine}
            />
            <CarCharacteristicsItem
              label="Тип кузова"
              value={characterostics.body_type}
            />
          </div>
          <div className={styles.characterostics__item}>
            <CarCharacteristicsItem
              label="Руль"
              value={characterostics.rudder === 'R' ? 'правый' : 'левый'}
            />
            <CarCharacteristicsItem
              label="Объем, см3"
              value={characterostics.volume_cm3}
            />
            <CarCharacteristicsItem
              label="Привод, КПП"
              value={characterostics.drive_transmission}
            />
            <CarCharacteristicsItem
              colorCircle={characterostics.color}
              label="Цвет"
              value={characterostics.name_color}
            />
          </div>
        </FilterCarDetails>
        <TickerBlock items={items} />
        <ModelSlider />
        <Calculator/>
        <PurchaseRequest/>
        <AccessoriesCarAvailable/>
        <CarServices/>
      </main>
    </>
  );
};

export default CarAvailableDetails;
