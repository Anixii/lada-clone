'use client';
import styles from './color-swiper.module.scss';
import { carsArray } from './cars';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { AppSwiper } from '@/shared/ui/swiper';
import AppButton from '@/shared/ui/button/ui/button';
import { Typography } from '@/shared/ui/typography';
import { FC, useRef } from 'react';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { SwiperRef } from 'swiper/react';


const ColorSwiper: FC = () => {
  const swiper = useRef<SwiperRef>(null);
  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return `<div class='${className}' style="background-color: ${carsArray[ index ].color};"></div>`;
      },
    },
    speed: 0,
    loop: true,
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
    <div className={styles.colorSwiper} id='color-swiper'>
      <MultiContainer>
        <div className={styles.carSliderBlock}>
          <AppButton
            right_icon="true"
            circled="true"
            variant="secondary"
            color="black"
            arrow_direction="left"
            onClick={handlePrevSlide}
            className={styles.prevBtn}
          />
          <AppSwiper options={swiperOptions} swiperClass={styles.carSlider} swiperRef={swiper}>
            {
              carsArray.map((item) => (
                <div key={item.color} className={styles.slide}>
                  <div className={styles.slideImage}>
                    <Image src={item.image.src} alt={item.name} width={568} height={357}/>
                  </div>
                  <Typography variant='text' weight='regular' color='black'>
                    {item.name}
                  </Typography>
                </div>
              ))
            }
          </AppSwiper>
          <AppButton
            circled="true"
            variant="secondary"
            color="black"
            right_icon="true"
            arrow_direction="right"
            onClick={handleNextSlide}
            className={styles.nextBtn}
          />
        </div>
      </MultiContainer>
    </div>
  );
};

export default ColorSwiper;
