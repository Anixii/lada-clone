import styles from './ui/used-car.module.scss';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { caravailableDetailsApi } from '@/shared/api/caravailable/details';
import { Typography } from '@/shared/ui/typography';
import { Header } from '@/widgets/header';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { CarCharacteristicsItem } from '@/features/car-characteristics';
import { FilterCarDetails } from '@/widgets/filter-car-details';
import Calculator from '@/widgets/calculator/ui/calculator';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import { usedCarApi } from '@/shared/api/used-car/details';
import { UsedCarEquipment } from '@/features/used-car-equipment';
import PurchaseRequest from '@/widgets/purchase-request/ui/purchase-request';
import React from 'react';


interface ICarAvailableDetails {
  params: {
    id: string;
  };
}
const CarAvailableDetails = async ({ params }: ICarAvailableDetails) => {
  const carDetail = await usedCarApi.getUsedCarDetail(
    +params.id,
  );
  const characterostics =
    await caravailableDetailsApi.getAvaiableCarDetailsMainFeatures(1);

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
        <UsedCarEquipment/>
        <Calculator/>
        <PurchaseRequest/>
        <NewCarsLada/>
      </main>
    </>
  );
};

export default CarAvailableDetails;
