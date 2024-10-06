'use client';
import styles from './news-and-reviews-swiper.module.scss';
import { INewsCardSecondary } from '@/entities/news-and-reviews-cards/ui/news-card-secondary';
import { NewsCardSecondary } from '@/entities/news-and-reviews-cards';
import { AppSwiper } from '@/shared/ui/swiper';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import ReviewsCard, { IReviewsCard } from '@/entities/news-and-reviews-cards/ui/reviews-card';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { SwiperOptions } from 'swiper/types';
import classNames from 'classnames';
import { useRef } from 'react';
import { SwiperRef } from 'swiper/react';


const newsCard: INewsCardSecondary[] = new Array(3).fill({
  title: 'LADA ПРЕДСТАВИЛА НОВУЮ VESTA  С РУЧНЫМ УПРАВЛЕНИЕМ',
  // eslint-disable-next-line max-len
  description: 'В рамках ПМЭФ-2024 на стенде Самарской области LADA впервые представила предсерийную модификацию LADA Vesta с ручным управлением. Система позволяет комфортно и безопасно водить автомобиль людям с нарушением функций одной или обеих ног.',
  date: '08.06.2024',
});

const reviewsCard:IReviewsCard[] = new Array(3).fill({
  author: 'Батуев Виктор Николаевич',
  // eslint-disable-next-line max-len
  description: 'Хочу поблагодарить Романа Крихели за продажу автомобиля лада х рей.Роман сделал скидку, не пытался продать не нужное мне доп оборудование, отвечал на все мои вопросы,был терпелив.Спасибо большое авто салону Интей Лада и лично Роману.Эта машина уже третья купленная в этом салоне и всё в принципе всегда было хорошо!',
  date: '08.06.2024',
});

const swiperOps: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 24,
};

const NewsAndReviewsSwiper = () => {
  const swiper = useRef<SwiperRef>(null);
  const reviewsSwiper = useRef<SwiperRef>(null);
  const isMobile = useMediaQuery('(max-width: 640px)');


  const handleNextNews = () => {
    if (swiper.current?.swiper) {
      swiper.current.swiper.slideNext();
    }
  };

  const handlePrevNews = () => {
    if (swiper.current?.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };

  const handleNextReviews = () => {
    if (reviewsSwiper.current?.swiper) {
      reviewsSwiper.current.swiper.slideNext();
    }
  };

  const handlePrevReviews = () => {
    if (reviewsSwiper.current?.swiper) {
      reviewsSwiper.current.swiper.slidePrev();
    }
  };

  return (
    <div className={classNames('container', styles.main)}>
      <div className={styles.news}>
        <div className={styles.title}>
          <Typography variant='h2' weight='regular'>
            {'Новости >'}
          </Typography>
        </div>
        <div className={styles.swiper}>
          <AppSwiper options={swiperOps} swiperRef={swiper}>
            {newsCard.map((el, i) => (
              <NewsCardSecondary
                key={i}
                title={el.title}
                description={el.description}
                date={el.date}
                isMobile={isMobile}
              />
            ))}
          </AppSwiper>
          <div className={styles.navButtons}>
            <AppButton
              arrow_direction='left'
              right_icon='true'
              variant='primary'
              color='gray'
              circled='true'
              onClick={handlePrevNews}
            />
            <AppButton
              arrow_direction='right'
              right_icon='true'
              variant='primary'
              color='gray'
              circled='true'
              onClick={handleNextNews}
            />
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.title}>
          <Typography variant='h2' weight='regular'>
            {'Отзывы >'}
          </Typography>
        </div>
        <div className={styles.reviewsSwiper}>
          <AppSwiper options={swiperOps} swiperRef={reviewsSwiper}>
            {reviewsCard.map((el, i) => (
              <ReviewsCard key={i} description={el.description} author={el.author} date={el.date} isMobile={isMobile}/>
            ))}
          </AppSwiper>
          <div className={styles.navButtons}>
            <AppButton
              arrow_direction='left'
              right_icon='true'
              variant='primary'
              color='gray'
              circled='true'
              onClick={handlePrevReviews}
            />
            <AppButton
              arrow_direction='right'
              right_icon='true'
              variant='primary'
              color='gray'
              circled='true'
              onClick={handleNextReviews}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndReviewsSwiper;
