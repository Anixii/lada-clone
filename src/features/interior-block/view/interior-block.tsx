'use client';
import styles from './interior-block.module.scss';
import { interiorArray } from './interior';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { AppSwiper } from '@/shared/ui/swiper';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { FC, useRef, useState } from 'react';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { SwiperRef } from 'swiper/react';


const InteriorBlock: FC = () => {
  const swiper = useRef<SwiperRef>(null);
  const [ visible, setVisible ] = useState<{next: boolean, prev: boolean}>({
    prev: false,
    next: true,
  });

  const isMobile = useMediaQuery('(max-width: 840px)');

  const swiperOptions: SwiperOptions = {
    slidesPerView: isMobile ? 1.5 : 3,
    spaceBetween: isMobile ? 18 : 24,
    slidesPerGroup: isMobile ? 1 : 3,
    allowTouchMove: false,
  };

  const handleNextSlide = () => {
    if (swiper.current) {
      swiper.current.swiper.slideNext();
      if (swiper.current.swiper.activeIndex > 0) {
        setVisible(prevState => ({ ...prevState, prev: true }));
      }
      if (swiper.current.swiper.isEnd) {
        setVisible(prevState => ({ ...prevState, next: false }));
      }
    }
  };

  const handlePrevSlide = () => {
    if (swiper.current) {
      swiper.current.swiper.slidePrev();
      if (swiper.current.swiper.activeIndex < 1) {
        setVisible(prevState => ({ ...prevState, prev: false }));
      }
      if (!swiper.current.swiper.isEnd) {
        setVisible(prevState => ({ ...prevState, next: true }));
      }
    }
  };


  return (
    <div className={styles.interiorBlock} id='interior'>
      <MultiContainer>
        <div className={styles.interiorHeadText}>
          <Typography variant='h2' weight='regular' color='black'>
            Интерьер
          </Typography>
          <Typography variant='h4' weight='regular' color='black'>
            Новое поколение автомобилей LADA - качественно новый уровень сборки салона.
          </Typography>
        </div>
        <div className={styles.interiorSlider}>
          {
            visible.prev &&
            <AppButton
              circled="true"
              variant="secondary"
              color="gray"
              right_icon="true"
              arrow_direction="left"
              className={styles.prevButton}
              onClick={handlePrevSlide}
            />
          }
          <AppSwiper options={swiperOptions} swiperRef={swiper}>
            {interiorArray.map((item, index) => (
              <div key={index} className={styles.interiorSlide}>
                <div className={styles.interiorImage}>
                  <Image src={item.image.src} alt="interior text" width={453} height={347}/>
                </div>
                <Typography variant='text' weight='regular' color='black'>
                  {item.text}
                </Typography>
              </div>
            ))}
          </AppSwiper>
          {
            visible.next &&
          <AppButton
            circled="true"
            variant="secondary"
            color="gray"
            right_icon="true"
            arrow_direction="right"
            className={styles.nextButton}
            onClick={handleNextSlide}
          />
          }
        </div>
        {
          isMobile && (
            <div className={styles.mobileButtons}>
              <AppButton
                circled="true"
                variant="secondary"
                color="gray"
                right_icon="true"
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
          )
        }
        <div className={styles.interiorFootText}>
          <Typography variant='subtitle' weight='regular' color='black'>
            {/* eslint-disable-next-line max-len */}
            Совершайте ежедневный тур по городу вместе с LADA или подарите близким поездку на природу: салон автомобиля располагает к лучшим впечатлениям от вояжа.
          </Typography>
        </div>
      </MultiContainer>
    </div>
  );
};

export default InteriorBlock;
