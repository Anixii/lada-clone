'use client';
import styles from './specifications-block.module.scss';
import { specificationsArray } from './specifications';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import sideCarPhoto from '@/shared/assets/images/side-view-car.png';
import frontCarPhoto from '@/shared/assets/images/front-view-car.png';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import { AppSwiper } from '@/shared/ui/swiper';
import { FC, Fragment, useRef } from 'react';
import Image from 'next/image';
import { SwiperOptions } from 'swiper/types';
import { SwiperRef } from 'swiper/react';


const SpecificationsBlock: FC = () => {
  const swiper = useRef<SwiperRef>(null);

  const swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    speed: 0,
    loop: true,
    allowTouchMove: false,
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
    <div className={styles.specifications} id='specifications'>
      <MultiContainer class_name={styles.specificationsBlocks}>
        <div>
          <Typography variant='h2' weight='regular' color='black'>
            Технические характеристики
          </Typography>
          <div className={styles.technicalCharacters}>
            <div className={styles.technicalImage}>
              <Image src={sideCarPhoto} alt='side view car' width={692} height={346}/>
            </div>
            <div className={styles.technicalImage}>
              <Image src={frontCarPhoto} alt='side view car' width={692} height={346}/>
            </div>
          </div>
        </div>
        <div>
          <Typography variant='h2' weight='regular' color='black'>
            Комплектация
          </Typography>
          <div className={styles.equipment}>
            <div className={styles.optionsSlider}>
              <AppButton
                circled='true'
                color='gray'
                right_icon='true'
                arrow_direction='left'
                onClick={handlePrevSlide}
                className={styles.leftButton}
              />
              <AppSwiper options={swiperOptions} swiperRef={swiper}>
                {
                  specificationsArray.map((item, index) => (
                    <Fragment key={index}>
                      <div className={styles.carModel}>
                        <Typography weight='regular' variant='h4' color='black'>
                          {item.carModel}
                        </Typography>
                      </div>
                      <div className={styles.equipmentItems}>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Мощность, л.с
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.power}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Разгон 0-100 км/ч, с
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.acceleration}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Расход топлива в городском цикле, л/100 км:
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.fuelUrbanCycle}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Расход топлива в загородном цикле, л/100 км:
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.fuelExtraUrbanCycle}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Расход топлива в смешанном цикле, л/100 км:
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.fuelCombinedCycle}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Рабочий объем, куб.с
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.workingCubs}
                          </Typography>
                        </div>
                        <div className={styles.equipmentItem}>
                          <Typography weight='regular' variant='subtitle'>
                            Тип трансмиссии
                          </Typography>
                          <Typography weight='bold' variant='subtitle' color='black'>
                            {item.transmissionType}
                          </Typography>
                        </div>
                      </div>
                    </Fragment>
                  ))
                }
              </AppSwiper>
              <AppButton
                circled='true'
                color='gray'
                right_icon='true'
                arrow_direction='right'
                onClick={handleNextSlide}
                className={styles.rightButton}
              />
            </div>
          </div>
        </div>
      </MultiContainer>
    </div>
  );
};

export default SpecificationsBlock;
