'use client';
import styles from './model-swiper.module.scss';
import { AppSwiper } from '@/shared/ui/swiper';
import backgroundStatic from '@/shared/assets/images/Beast-deals-photo.png';
import PromotionOfferCard from '@/entities/cards/promotion-offer-card/promotion-offer-card';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import { SwiperOptions } from 'swiper/types';
import { FC, useRef } from 'react';
import { SwiperRef } from 'swiper/react';


const ModelSlider: FC = () => {
  const swiper = useRef<SwiperRef>(null);
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 24,
  };

  const handleNextSlide = () => {
    if (swiper.current) {
      swiper.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiper.current) {
      swiper.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderHead}>
        <Typography variant="h2" weight="regular" color="black">
          Акции и специальные предложения
        </Typography>
        <div className={styles.sliderButtons}>
          <AppButton
            right_icon="true"
            circled="true"
            variant="secondary"
            color="gray"
            arrow_direction="left"
            onClick={handlePrevSlide}
          />
          <AppButton
            circled="true"
            variant="secondary"
            color="gray"
            right_icon="true"
            arrow_direction="right"
            onClick={handleNextSlide}
          />
        </div>
      </div>
      <AppSwiper options={swiperOptions} swiperClass={styles.swiper} swiperRef={swiper}>
        {new Array(8)
          .fill({
            title: 'ЗАОБЛАЧНЫЕ ВОЗМОЖНОСТИ',
            subtitle:
              'ВСЕ САМОЕ ПРЕКРАСНОЕ — ДЛЯ ВАС ВЫГОДА ДО 220 000 РУБЛЕЙ* ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ 9 000 РУБЛЕЙ',
            url: '#',
            date: '01.06.2024-30.06.2024',
            image: backgroundStatic,
          })
          .map((item, index) => (
            <PromotionOfferCard key={index} item={item} />
          ))}
      </AppSwiper>
    </div>
  );
};

export default ModelSlider;
