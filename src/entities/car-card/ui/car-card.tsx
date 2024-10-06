import styles from './car-card.module.scss';
import { ICar, IUsedCar } from '../models/types/car-card.types';
import { Typography } from '@/shared/ui/typography';
import { useFilters } from '@/features/filters/models/use-filters/use-filters';
import AppButton from '@/shared/ui/button/ui/button';
import { useUsedCarsFilters } from '@/features/filters/models/use-filters/use-filters-used';
import React, { FC } from 'react';


export interface ICarCard {
  car: ICar | IUsedCar
  used: boolean
}

const CarCard: FC<ICarCard> = ({ car, used }) => {
  const { transmission, colors, volume } = useFilters();
  const { used_color } = useUsedCarsFilters();

  const volume_of_car = volume.filter(el => el.id === (car as ICar).car_volume);
  const transmission_of_car = transmission.filter(el => (
    el.id === car.transmission
  ));

  const color_of_car = colors.filter(el => (
    el.id === (car as ICar).car_color
  ));

  const color_of_used_car = used_color.filter(el => (
    el.id === (car as IUsedCar).color
  ));

  const renderDescription = () => {
    if (!used) {
      return (
        <>
          <div className={styles.descriptions}>
            <div className={styles.desc}>
              <Typography variant='text' weight='bold'>
                {car.name}
              </Typography>
              <Typography weight='regular' variant='text'>
                Classic
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Двигатель
              </Typography>
              <Typography weight='regular' variant='text'>
                {volume_of_car[ 0 ]?.name}
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Трансмиссия
              </Typography>
              <Typography weight='regular' variant='text'>
                {transmission_of_car[ 0 ]?.name}
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Цвет
              </Typography>
              <Typography weight='regular' variant='text'>
                {color_of_car[ 0 ]?.name}
              </Typography>
            </div>
            <div className={styles.price}>
              <Typography variant='subtitle' weight='bold'>
                {`${car.full_price} ₽`}
              </Typography>
              <Typography weight='regular' variant='textSmall'>
                {`от ${car.monthly_price} ₽`}
              </Typography>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.descriptions}>
            <div className={styles.desc}>
              <Typography variant='text' weight='bold'>
                {car.name}
              </Typography>
              <Typography weight='regular' variant='text'>
                Classic
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Пробег,км
              </Typography>
              <Typography weight='regular' variant='text'>
                {(car as IUsedCar).run}
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Год выпуска
              </Typography>
              <Typography weight='regular' variant='text'>
                {(car as IUsedCar).year_issue}
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Объём,см3
              </Typography>
              <Typography weight='regular' variant='text'>
                {(car as IUsedCar).volume_c}
              </Typography>
            </div>
            <div className={styles.desc}>
              <Typography color='gray' variant='textExtraSmall' weight='regular'>
                Цвет
              </Typography>
              <Typography weight='regular' variant='text'>
                <span className={styles.color} style={{ backgroundColor: color_of_used_car[ 0 ].color }}/>
                {color_of_used_car[ 0 ]?.name}
              </Typography>
            </div>
            <div className={styles.price}>
              <Typography variant='subtitle' weight='bold'>
                {`${car.full_price} ₽`}
              </Typography>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.carCard}>
      {
        !used
          ?
          <div className={styles.banner}>
            <Typography variant='text' weight='regular' color='white'>
          Акция «Автоматическая выгода»
            </Typography>
          </div>
          :
          <></>
      }
      <div className={styles.car_image} style={{ backgroundImage: `url(${car.image})` }}/>
      {renderDescription()}
      <div className={styles.moreButton}>
        <AppButton size='medium' text='text_white'>
          Подробнее
        </AppButton>
      </div>
    </div>
  );
};

export default CarCard;
