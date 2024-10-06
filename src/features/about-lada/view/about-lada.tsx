import styles from './about-lada.module.scss';
import AppButton from '@/shared/ui/button/ui/button';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import blueCar from '@/shared/assets/images/blue-car.png';
import Image from 'next/image';
import { FC } from 'react';


const AboutLada: FC = () => {
  return (
    <div className={styles.about}>
      <MultiContainer>
        <div className={styles.aboutContent}>
          <Typography variant='h3' weight='regular' color='black'>
              Узнайте больше о LADA Vesta седан
          </Typography>
          <AppButton color='white' variant='primary'>
              Заказать обратный звонок
          </AppButton>
        </div>
        <div className={styles.aboutImage}>
          <Image src={blueCar.src} alt='blue car' width={454} height={204}/>
        </div>
      </MultiContainer>
    </div>
  );
};

export default AboutLada;
