'use client';
import styles from './news-swiper.module.scss';
import NewsCard, { INewsCard } from '@/entities/news-card/news-card';
import photo from '@/shared/assets/images/new-car.png';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import AppButton from '@/shared/ui/button/ui/button';
import { AppSwiper } from '@/shared/ui/swiper';
import { Typography } from '@/shared/ui/typography';
import classNames from 'classnames';
import { useRef } from 'react';
import { SwiperRef } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';


const cards: INewsCard[] = new Array(4).fill({
  title: 'LADA CONNECT. ВСЕГДА НА СВЯЗИ',
  // eslint-disable-next-line max-len
  description: 'Cистема, позволяющая с помощью мобильного приложения на платформе iOS или Android дистанционно контролировать автомобиль LADA и управлять его системами. Например, удаленно запустить двигатель, узнать местоположение автомобиля на карте. Страхование КАСКО на 10% выгоднее уже с момента покупки.',
  img: photo,
  url: '#',
});

const NewsSwiper = () => {
  const swiper = useRef<SwiperRef>(null);
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 640px)');


  const swiperOpts: SwiperOptions = {
    slidesPerView: adaptiveHandler(2.15, 1.5, 1.5, isTablet, isMobile),
    spaceBetween: adaptiveHandler(48, 24, 24, isTablet, isMobile),
    centeredSlides: true,
    pagination: isMobile && {
      clickable: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderBullet: function (_: any, className: string) {
        return `<span class="${className}"></span>`;
      },
    },
  };

  const handleSlidePrev = () => {
    if (swiper.current) {
      swiper.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiper.current) {
      swiper.current.swiper.slideNext();
    }
  };

  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.title}>
          <Typography variant='h2' weight='regular'>
            {'Новинки >'}
          </Typography>
          {
            !isMobile &&
            <div className={styles.navigationButtons}>
              <AppButton
                arrow_direction='left'
                right_icon='true'
                variant='primary'
                color='gray'
                circled='true'
                onClick={handleSlidePrev}
              />
              <AppButton
                arrow_direction='right'
                right_icon='true'
                variant='primary'
                color='gray'
                circled='true'
                onClick={handleSlideNext}
              />
            </div>
          }
        </div>
      </div>
      <div className={styles.swiper}>
        <AppSwiper
          options={swiperOpts}
          swiperRef={swiper}
        >
          {cards.map((el, i) => (
            <NewsCard
              key={i}
              title={el.title}
              description={el.description}
              img={el.img}
              isMobile={isMobile}
            />
          ))}
        </AppSwiper>
      </div>
      {
        isMobile &&
        <div className={classNames(styles.navigationButtons, 'container')}>
          <AppButton
            arrow_direction='left'
            right_icon='true'
            variant='primary'
            color='gray'
            circled='true'
            onClick={handleSlidePrev}
          />
          <AppButton
            arrow_direction='right'
            right_icon='true'
            variant='primary'
            color='gray'
            circled='true'
            onClick={handleSlideNext}
          />
        </div>
      }
    </div>
  );
};

export default NewsSwiper;
