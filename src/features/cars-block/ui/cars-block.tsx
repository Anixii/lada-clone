'use client';
import styles from './cars-block.module.scss';
import { ICar, IUsedCar } from '@/entities/car-card/models/types/car-card.types';
import CarCard from '@/entities/car-card/ui/car-card';
import { PATHS } from '@/shared/lib/variables/variables';
import AppButton from '@/shared/ui/button/ui/button';
import { Typography } from '@/shared/ui/typography';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC } from 'react';


export interface ICarsBlock {
  cars?: ICar[] | IUsedCar[]
}

// eslint-disable-next-line max-len
const INFO = 'Расчет ежемесячного платежа, сформированный при помощи кредитного калькулятора, является предварительным, подлежит уточнению перед или непосредственно при заключении договоров кредитования/страхования, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 ч.2 Гражданского кодекса Российской Федерации. Для получения подробной информации обращайтесь к официальному дилеру ООО Интей Лада.';

const CarsBlock: FC<ICarsBlock> = ({ cars }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isCarAvailablePage = pathname.includes(PATHS.CAR_AVAILABLE);
  const onHandleClick = () => {
    if (isCarAvailablePage) {
      router.push('/cars/car-available/1');
    } else {
      router.push('/cars/used-car/1');
    }
  };
  return (
    <div onClick={onHandleClick} className={styles.main}>
      <div className={styles.carsBlock}>
        {cars?.map((car, i) => (
          <CarCard key={i} car={car} used={!isCarAvailablePage}/>
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.moreButton}>
          <AppButton variant='secondary' text='text_primary'>
        Показать ещё
          </AppButton>
        </div>
        <Typography variant='textExtraSmall' weight='regular' color='gray'>
          {INFO}
        </Typography>
      </div>
    </div>
  );
};

export default CarsBlock;
