import styles from './car-services.module.scss';
import AppButton from '@/shared/ui/button/ui/button';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import { FC } from 'react';


const CarServices: FC = () => {
  return (
    <div className={styles.services}>
      <MultiContainer>
        <Typography variant='h2' weight='regular'>
            Услуги для автомобиля
        </Typography>
        <div className={styles.servicesList}>
          <Typography variant='text' color='orange' weight='regular'>
                Установка дополнительного оборудования
          </Typography>
          <Typography variant='text' color='orange' weight='regular'>
                Антикоррозийная обработка
          </Typography>
          <Typography variant='text' color='orange' weight='regular'>
                Сигнализация Лада
          </Typography>
          <Typography variant='text' color='orange' weight='regular'>
                Шумоизоляция Лада
          </Typography>
          <Typography variant='text' color='orange' weight='regular'>
                Чип-тюнинг Лада
          </Typography>
        </div>
        <AppButton variant='primary'>
            Больше услуг
        </AppButton>
      </MultiContainer>
    </div>
  );
};

export default CarServices;
