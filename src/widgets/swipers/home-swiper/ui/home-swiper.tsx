'use client';
import styles from './home-swiper.module.scss';
import Typography from '@/shared/ui/typography/ui/typography';
import bg1 from '@/shared/assets/images/bg1.png';
import bg2 from '@/shared/assets/images/bg2.png';
import bg3 from '@/shared/assets/images/bg3.png';
import { AppSwiper } from '@/shared/ui/swiper';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import AppButton from '@/shared/ui/button/ui/button';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import { SwiperOptions } from 'swiper/types';
import { StaticImageData } from 'next/image';
import { SwiperRef } from 'swiper/react';
import { useRef } from 'react';


interface ISlide {
  title: string;
  subtitle?: string;
  image: StaticImageData;
}

const slides: ISlide[] = [
  {
    title: 'Выгода от 10%',
    subtitle: 'На запчасти и услуги сервиса для автомобилей от 2,5 лет',
    image: bg1,
  },
  {
    title: '4 этап Российской серии кольцевых гонок',
    subtitle: '',
    image: bg2,
  },
  {
    title: 'LADA NIVA KHL',
    subtitle: 'Соревнование – с самим собой',
    image: bg3,
  },
];

const HomeSwiper = () => {
  const swiper = useRef<SwiperRef>(null);
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 640px)');

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

  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      renderBullet: function (_: any, className: string) {
        return `<span class="${className}"></span>`;
      },
    },
    autoplay: { delay: 5000 },
    loop: true,
  };

  return (
    <div className={styles.main}>
      <AppSwiper options={swiperOptions} swiperRef={swiper}>
        {slides.map((el) => (
          <div
            key={el.title}
            style={{ backgroundImage: `url(${el.image.src})` }}
            className={styles.slide}
          >
            <div className={`container ${styles.slideInner}`}>
              <div className={styles.slideText}>
                <Typography
                  variant={adaptiveHandler('h1', 'h3', 'h3', isMobile, isTablet)}
                  weight="regular"
                  color="white"
                >
                  {el.title}
                </Typography>
                {el.subtitle && (
                  <Typography variant={adaptiveHandler('h4', 'subtitleSecond', 'textSmall', isMobile, isTablet)}
                    weight="regular"
                    color="white"
                  >
                    {el.subtitle}
                  </Typography>
                )}
              </div>
              <div className={styles.buttonSection}>
                <AppButton color='white' size='medium'>
                  Подробнее
                </AppButton>
              </div>
            </div>
          </div>
        ))}
      </AppSwiper>
      <div className={styles.navigation}>
        <AppButton
          arrow_direction='left'
          right_icon='true'
          variant='primary'
          color='black'
          circled='true'
          onClick={handleSlidePrev}
        />
        <AppButton
          arrow_direction='right'
          right_icon='true'
          variant='primary'
          color='black'
          circled='true'
          onClick={handleSlideNext}
        />
      </div>
    </div>
  );
};

export default HomeSwiper;
