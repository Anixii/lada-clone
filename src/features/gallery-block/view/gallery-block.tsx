'use client';
import styles from './gallery-block.module.scss';
import { galleryPhotos } from './gallery';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { AppSwiper } from '@/shared/ui/swiper';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { FC, useRef } from 'react';
import Image from 'next/image';
import { SwiperOptions } from 'swiper/types';
import { SwiperRef } from 'swiper/react';


const GalleryBlock: FC = () => {
  const isTablet = useMediaQuery('(max-width: 1220px)');
  const isMobile = useMediaQuery('(max-width: 640px)');
  const swiper = useRef<SwiperRef>(null);
  const swiperOptions: SwiperOptions = {
    slidesPerView: isMobile ? 1 : isTablet ? 1.2 : 1,
    loop: true,
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
    <div className={styles.gallery} id='gallery'>
      <MultiContainer>
        <div className={styles.galleryText}>
          <Typography variant='h2' color='black' weight='regular'>
            Галерея
          </Typography>
        </div>
        <div className={styles.gallerySlider}>
          <AppSwiper options={swiperOptions} swiperRef={swiper}>
            {
              galleryPhotos.map((item, index) => (
                <div key={index} className={styles.galleryItem}>
                  <Image src={item.photo.src} alt={item.alt} width={1408} height={630}/>
                </div>
              ))
            }
          </AppSwiper>
        </div>
        <div className={styles.galleryButtons}>
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
      </MultiContainer>
    </div>
  );
};

export default GalleryBlock;
