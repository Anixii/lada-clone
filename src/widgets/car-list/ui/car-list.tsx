'use client';
import styles from './car-list.module.scss';
import CarsBlock from '@/features/cars-block/ui/cars-block';
import { useCars } from '@/features/cars-block/models/use-cars/use-cars';
import { Filters } from '@/features/filters';
import { Typography } from '@/shared/ui/typography';
import { useUsedCars } from '@/features/cars-block/models/use-used-cars.tsx/use-used-cars';
import { PATHS } from '@/shared/lib/variables/variables';
import { AppDrawer } from '@/shared/ui/drawer';
import filterIcon from '@/shared/assets/icons/filter-black.svg';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const CarList = () => {
  const { cars, count, fetchCars } = useCars();
  const { used_cars, fetchUsedCars, used_cars_count } = useUsedCars();
  const pathname = usePathname();
  const currentCars = pathname.includes(PATHS.CAR_AVAILABLE) ? cars : used_cars;

  useEffect(() => {
    if (pathname.includes(PATHS.CAR_AVAILABLE)) {
      if (!cars.length) {
        fetchCars();
      }
    } else {
      if (!used_cars.length) {
        fetchUsedCars();
      }
    }
  }, [ pathname ]);

  return (
    <div className={classNames('container', styles.carList)}>
      <div className={styles.title}>
        <Typography variant="h2" weight="regular">
          Автомобили в наличии
        </Typography>
        <Typography variant="text" weight="regular">
          Доступно автомобилей{' '}
          <Typography variant="textSmall" weight="bold">
            {pathname.includes(PATHS.CAR_AVAILABLE) ? count : used_cars_count}
          </Typography>
        </Typography>
      </div>
      <div className={styles.filters__drawer}>
        <AppDrawer
          placement="bottom"
          BtnNode={
            <button className={styles.main__btn}>
              <Image src={filterIcon} alt="Filter Icon" /> Подробнее
            </button>
          }
        >
          <Filters />
        </AppDrawer>
      </div>
      <div className={styles.filterNList}>
        <div className={styles.filter__item}>
          <Filters />
        </div>
        <CarsBlock cars={currentCars} />
      </div>
    </div>
  );
};

export default CarList;
