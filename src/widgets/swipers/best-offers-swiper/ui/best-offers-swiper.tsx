'use client';
import styles from './best-offers-swiper.module.scss';
import { AppSwiper } from '@/shared/ui/swiper';
import BestOfferCard, { IBestOfferCardProps } from '@/entities/best-offer-card/best-offer-card';
import backgroundStatic from '@/shared/assets/images/Beast-deals-photo.png';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import { SwiperRef } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import React, { useEffect, useRef, useState } from 'react';
import { Tabs } from 'antd';
import classNames from 'classnames';
import type { TabsProps } from 'antd';


const slides: IBestOfferCardProps[] = [
  {
    title: 'Заоблачные возможности',
    image: backgroundStatic,
    url: '#',
    date: '01.06.2024-30.06.2024',
  },
  {
    title: 'title2',
    image: backgroundStatic,
    url: '#2',
    date: 'DATE2',
  },
  {
    title: 'title3',
    image: backgroundStatic,
    url: '#3',
    date: 'DATE3',
  },
  {
    title: 'title4',
    image: backgroundStatic,
    url: '#4',
    date: 'DATE4',
  },
  {
    title: 'title5',
    image: backgroundStatic,
    url: '#5',
    date: 'DATE5',
  },
];

const slides2: IBestOfferCardProps[] = [
  {
    title: 'Заоблачные возможности2',
    image: backgroundStatic,
    url: '#',
    date: '01.06.2024-30.06.2024',
  },
  {
    title: 'title22',
    image: backgroundStatic,
    url: '#2',
    date: 'DATE2',
  },
  {
    title: 'title32',
    image: backgroundStatic,
    url: '#3',
    date: 'DATE3',
  },
  {
    title: 'title42',
    image: backgroundStatic,
    url: '#4',
    date: 'DATE42',
  },
  {
    title: 'title52',
    image: backgroundStatic,
    url: '#5',
    date: 'DATE5',
  },
];

const BestOffersSwiper = () => {
  const ref = useRef<SwiperRef>(null);
  const [ currentSlides, setCurrentSlides ] = useState<IBestOfferCardProps[]>(slides);
  const [ currentTab, setCurrentTab ] = useState<string>('1');
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 640px)');

  const tabs: TabsProps['items'] = [
    {
      key: '1',
      label: <Typography
        variant={adaptiveHandler('subtitleSecond', 'subtitleSecond', 'text', isTablet, isMobile)}
        weight='regular'
      // eslint-disable-next-line react/jsx-closing-bracket-location
      >
        Акции отдела продаж
      </Typography>,
    }, {
      key: '2',
      label: <Typography
        variant={adaptiveHandler('subtitleSecond', 'subtitleSecond', 'text', isTablet, isMobile)}
        weight='regular'
      // eslint-disable-next-line react/jsx-closing-bracket-location
      >
        Акции сервиса
      </Typography>,
    },
  ];

  useEffect(() => {
    if (currentTab === '1') {
      setCurrentSlides(slides);
    } else if (currentTab === '2') {
      setCurrentSlides(slides2);
    }
  }, [ currentTab ]);

  const handleSlidePrev = () => {
    if (ref.current) {
      ref.current.swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (ref.current) {
      ref.current.swiper.slideNext();
    }
  };

  const onChange = (key: string) => {
    setCurrentTab(key);
  };

  const swiperOptions: SwiperOptions = {
    slidesPerView: adaptiveHandler(3.35, 2.16, 1.25, isTablet, isMobile),
    spaceBetween: 16,
  };

  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.title}>
          <Typography variant='h2' weight='regular'>
            Лучшие {isMobile && <br/>} предложения {isMobile && '>'}
          </Typography>
        </div>
        <div className={styles.tabs}>
          <Tabs items={tabs} onChange={onChange} defaultActiveKey={currentTab} />
          {
            !isMobile &&
            <div className={styles.navigation}>
              <AppButton
                color='gray'
                right_icon="true"
                arrow_direction='left'
                circled="true"
                onClick={handleSlidePrev}
              />
              <AppButton
                color='gray'
                right_icon="true"
                arrow_direction='right'
                circled="true"
                onClick={handleSlideNext}
              />
            </div>
          }
        </div>
      </div>
      <AppSwiper
        options={swiperOptions}
        swiperClass={styles.swiper}
        swiperRef={ref}
      >
        {currentSlides.map((el) => (
          <BestOfferCard
            key={el.date}
            title={el.title}
            url={el.url}
            date={el.date}
            image={el.image}
          />
        ))}
      </AppSwiper>
      {
        isMobile &&
            <div className={classNames(styles.navigation, 'container')}>
              <AppButton
                color='gray'
                right_icon="true"
                arrow_direction='left'
                circled="true"
                onClick={handleSlidePrev}
              />
              <AppButton
                color='gray'
                right_icon="true"
                arrow_direction='right'
                circled="true"
                onClick={handleSlideNext}
              />
            </div>
      }
    </div>
  );

};

export default BestOffersSwiper;
