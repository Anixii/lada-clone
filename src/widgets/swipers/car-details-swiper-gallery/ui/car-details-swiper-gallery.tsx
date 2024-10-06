'use client';
import styles from './car-details-swiper-gallery.module.scss';
import AppButton from '@/shared/ui/button/ui/button';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';


interface ICarDetailsSwiperGalleryType {
  images: Array<string> | Array<StaticImageData>;
}
const CarDetailsSwiperGallery = ({ images }: ICarDetailsSwiperGalleryType) => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperRef>(null);
  const isTablet = useMediaQuery('(max-width: 1220px)');
  const isMobile = useMediaQuery('(max-width: 640px)');
  const handleSlidePrev = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__swiper}>
        <Swiper
          ref={mainSwiperRef}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[ FreeMode, Thumbs ]}
          className={styles.swiper__car}
        >
          {images.map((item, index) => (
            <SwiperSlide
              className={styles.swiper__car__item}
              key={index}
            >
              <Image
                className={styles.swiper__car__image}
                src={item}
                alt="Car Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.navigation}>
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="left"
            circled="true"
            onClick={handleSlidePrev}
          />
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="right"
            circled="true"
            onClick={handleSlideNext}
          />
        </div>
      </div>
      <div className={styles.under__swiper}>
        <Swiper
          slidesPerView={adaptiveHandler(5.25, 4.8, 2.95, isMobile, isTablet)}
          onSwiper={setThumbsSwiper}
          className={styles.swiper__gallery}
          loop={true}
          spaceBetween={10}
          freeMode={true}
          watchSlidesProgress={true}
          slideActiveClass={styles.swiper__gallery_active}
          modules={[ FreeMode,
            Navigation,
            Thumbs ]}
        >
          {images.map((item, index) => (
            <SwiperSlide className={styles.swiper__gallery_item} key={index}>
              <Image
                className={styles.swiper__gallery_image}
                src={item}
                alt="Car Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarDetailsSwiperGallery;
