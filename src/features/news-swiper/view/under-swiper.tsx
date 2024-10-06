import styles from './under-swiper.module.scss';
import { Typography } from '@/shared/ui/typography';
import { AppSwiper } from '@/shared/ui/swiper';
import { SwiperOptions } from 'swiper/types';


interface IUnderSwiperProps {
  title: string;
  children: React.ReactNode;
}
const UnderSwiper = ({ children, title }: IUnderSwiperProps) => {
  const swiperOptions: SwiperOptions = {
    spaceBetween: 24,
    breakpoints: {
      1250: { slidesPerView: 4.5 },
      650: { slidesPerView: 2.8 },
      200: { slidesPerView: 1.7 },
    },
  };
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography variant="h4" weight="regular">
          {title}
        </Typography>
      </div>
      <div className={styles.main__swiper}>
        <AppSwiper swiperClass={styles.news__swiper} options={swiperOptions}>
          {children}
        </AppSwiper>
      </div>
    </section>
  );
};

export default UnderSwiper;
