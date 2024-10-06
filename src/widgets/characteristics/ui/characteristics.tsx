import styles from './characteristics.module.scss';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import carPhoto from '@/shared/assets/images/silver-car.png';
import AppButton from '@/shared/ui/button/ui/button';
import { FC } from 'react';
import Image from 'next/image';


const Characteristics: FC = () => {
  return (
    <div className={styles.characteristics}>
      <MultiContainer>
        <div className={styles.characteristicsTitle}>
          <div>
            <Typography variant='text' weight='regular'>Отдел продаж</Typography>
            <Typography variant='text' weight='bold'>+7(812)309 42 20</Typography>
          </div>
          <div>
            <Typography variant='text' weight='regular'>Отдел сервиса</Typography>
            <Typography variant='text' weight='bold'>+7(812)309 42 21</Typography>
          </div>
        </div>
        <Typography variant='h1' weight='regular'>
            Lada Vesta седан,1.6 MT,
            1 500 000 ₽
        </Typography>
        <div className={styles.characteristicsStock}>
          <Typography color='orange' variant='subtitle' weight='bold'>
            Действующие акции
          </Typography>
          <div className={styles.stockItems}>
            <div className={styles.stockItem}>
              <Typography variant='subtitle' weight='regular' color='white'>
                Акция «Заоблачные возможности»
              </Typography>
            </div>
            <div className={styles.stockItem}>
              <Typography variant='subtitle' weight='regular' color='white'>
                Акция «Автоматическая выгода»
              </Typography>
            </div>
            <div className={styles.stockItem}>
              <Typography variant='subtitle' weight='regular' color='white'>
                Акция «Только вперед»
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.characteristicsCar}>
          <div className={styles.characteristicsImage}>
            <AppButton
              right_icon="true"
              circled="true"
              variant="secondary"
              color="gray"
              arrow_direction="left"
              className={styles.leftBtn}
            />
            <Image src={carPhoto.src} alt='car' width={772} height={578}/>
            <AppButton
              circled="true"
              variant="secondary"
              color="gray"
              right_icon="true"
              arrow_direction="right"
              className={styles.rightBtn}
            />
          </div>
          <div className={styles.characteristicsMain}>
            <Typography variant='h3' weight='regular'>
              Основные  характеристики
            </Typography>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Комплектация</Typography>
              <Typography variant='text' weight='regular'>Enjoy</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Объем двигателя</Typography>
              <Typography variant='text' weight='regular'>1.7 л</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Привод, КПП</Typography>
              <Typography variant='text' weight='regular'>полный, МКПП</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Руль</Typography>
              <Typography variant='text' weight='regular'>левый</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Объем, см3</Typography>
              <Typography variant='text' weight='regular'>1690</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Двигатель</Typography>
              <Typography variant='text' weight='regular'>бензин, 106 л.с</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Тип кузова</Typography>
              <Typography variant='text' weight='regular'>внедорожник 3-дверный</Typography>
            </div>
            <div className={styles.characteristicsItem}>
              <Typography variant='text' weight='bold' color='black'>Цвет</Typography>
              <Typography variant='text' weight='regular'>ледниковый</Typography>
            </div>
          </div>
        </div>
      </MultiContainer>
    </div>
  );
};

export default Characteristics;
