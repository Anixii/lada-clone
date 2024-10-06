'use client';
import styles from './models-swiper.module.scss';
import { Typography } from '@/shared/ui/typography';
import { AppSwiper } from '@/shared/ui/swiper';
import orange from '@/shared/assets/images/orange.png';
import orange_black from '@/shared/assets/images/orange-black.png';
import green from '@/shared/assets/images/green.png';
import ModelCard, { IModelCard } from '@/entities/model-card/model-card';
import AppButton from '@/shared/ui/button/ui/button';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import classNames from 'classnames';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';


const vesta: IModelCard[] = new Array(4).fill({
  url: '',
  status: '50% скидка',
  image: orange,
  title: 'Vesta',
});

const granta: IModelCard[] = new Array(4).fill({
  url: '',
  status: 'Хит продаж',
  image: orange_black,
  title: 'Granta',
});

const largus: IModelCard[] = new Array(4).fill({
  url: '',
  status: '',
  image: green,
  title: 'Largus',
});

const travel: IModelCard[] = [
  {
    url: '',
    status: '',
    image: green,
    title: 'Largus',
  },
  {
    url: '',
    status: 'Хит продаж',
    image: orange_black,
    title: 'Granta',
  },
  {
    url: '',
    status: '50% скидка',
    image: orange,
    title: 'Vesta',
  },
];

interface IStates {
  name: string,
  state: IModelCard[]
}

const states: IStates[] = [
  {
    name: 'Granta',
    state: granta,
  },
  {
    name: 'Vesta',
    state: vesta,
  },
  {
    name: 'Largus',
    state: largus,
  },
  {
    name: 'Niva Travel',
    state: travel,
  },
  {
    name: 'Niva Legend',
    state: granta,
  },
  {
    name: 'Архивные модели',
    state: granta,
  },
];

const ModelsSwiper = () => {
  const [ value, setValue ] = useState<string>(states[ 0 ].name);
  const [ currentSwiper, setCurrentSwiper ] = useState<IModelCard[]>(vesta);
  const swiperRef = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery('(max-width: 640px)');
  useEffect(() => {
    states.forEach(item => {
      if (item.name === value) {
        return setCurrentSwiper(item.state);
      }
    });
  }, [ value ]);

  const handleSelect = (event: MouseEvent<HTMLDivElement>) => {
    const innerText = event.currentTarget.getAttribute('data-name');
    setValue(innerText || '');
  };

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swiperOpts: SwiperOptions = {
    slidesPerView: isMobile ? 1 : 3,
    spaceBetween: 64,
  };

  return (
    <div className={classNames('container', styles.main)}>
      <div className={styles.title}>
        <Typography variant='h2' weight='regular'>
          Модели LADA
        </Typography>
        <div className={styles.tabs}>
          {
            states.map(item => (
              <div
                key={item.name}
                data-name={item.name}
                className={classNames(styles.tab, value === item.name && styles.activeTab)}
                onClick={handleSelect}
              >
                <Typography variant='subtitleSecond' weight='regular'>
                  {item.name}
                </Typography>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.swiperContainer}>
        <AppSwiper options={swiperOpts} swiperClass={styles.swiper} swiperRef={swiperRef}>
          {
            currentSwiper.map(item => (
              <ModelCard
                key={item.title}
                image={item.image}
                title={item.title}
                url={item.url}
                status={item.status}
              />
            ))
          }
        </AppSwiper>
        <div className={styles.navigationButtons}>
          <AppButton
            arrow_direction='left'
            right_icon="true"
            variant='primary'
            color='gray'
            circled="true"
            onClick={handlePrev}
          />
          <AppButton
            arrow_direction='right'
            right_icon="true"
            variant='primary'
            color='gray'
            circled="true"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelsSwiper;
