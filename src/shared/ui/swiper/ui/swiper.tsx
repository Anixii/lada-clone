'use client';
import styles from './swiper.module.scss';
import { Typography } from '@/shared/ui/typography/index';
import { Children, FC, ReactNode, Ref } from 'react';
import { SwiperOptions } from 'swiper/types';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


interface ISwiperProps {
  children: ReactNode;
  swiperClass?: string;
  swiperRef?: Ref<SwiperRef>;
  options: SwiperOptions;
  title?: string;
}

const AppSwiper: FC<ISwiperProps> = (Props) => {
  const {
    children,
    swiperClass,
    options,
    title,
    swiperRef,
  } = Props;
  return (
    <div className={styles.slider}>
      {title && (
        <div className={styles.title}>
          <Typography variant="h2" weight="regular">
            {title}
          </Typography>
        </div>
      )}
      <Swiper {...options} ref={swiperRef} className={swiperClass}
        modules={[ Navigation,
          Pagination,
          Autoplay ]}
      >
        {Children.map(children, (item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppSwiper;
