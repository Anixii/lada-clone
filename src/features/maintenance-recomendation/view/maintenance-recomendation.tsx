'use client';
import styles from './maintenance-recomendation.module.scss';
import AppButton from '@/shared/ui/button/ui/button';
import { AppSwiper } from '@/shared/ui/swiper';
import { Typography } from '@/shared/ui/typography';
import { VideoPlayer } from '@/widgets/video-player';
import { useRef } from 'react';
import { SwiperRef } from 'swiper/react';


const maintenanceRecomendationItems = [
  {
    title: 'Как сэкономить на топливе',
    questions: [
      'эффективность работы двигателя',
      'проверка давления',
      'равномерная скорость',
      'вес автомобиля',
      'кондиционер в авто',
    ],
  },
  {
    title: 'Нужна ли обкатка',
    questions: [
      'эффективность работы двигателя',
      'проверка давления',
      'равномерная скорость',
    ],
  },
  {
    title: 'Когда менять шины',
    questions: [ 'равномерная скорость',
      'вес автомобиля',
      'кондиционер в авто' ],
  },
];
const MaintenanceRecomendation = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 23,
  };
  const onHandleClickPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const onHandleClickNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__text}>
        <Typography
          className={styles.main__title}
          variant="h2"
          weight="regular"
        >
          Рекомендации нашего эксперта
        </Typography>
        <Typography
          className={styles.main__subtitle}
          variant="subtitle"
          weight="regular"
        >
          Полезные видео-рекомендации от нашего эксперта для правильного ухода
          за вашим авто.
        </Typography>
      </div>
      <div className={styles.recomendation__swiper}>
        <AppSwiper swiperRef={swiperRef} options={swiperOptions}>
          {maintenanceRecomendationItems.map((item, index) => (
            <div className={styles.recomendation__item} key={index}>
              <div className={styles.recomendation__text}>
                <Typography
                  variant="h4"
                  weight="regular"
                  className={styles.recomendation__title}
                >
                  {item.title}
                </Typography>
                <div className={styles.recomendation__list}>
                  <Typography
                    variant="subtitle"
                    weight="regular"
                    color="orange"
                    className={styles.list__title}
                  >
                    Разбераем вопросы
                  </Typography>
                  {item.questions.map((item, i) => (
                    <Typography
                      className={styles.list__title}
                      variant="subtitle"
                      weight="regular"
                      key={i}
                    >
                      - {item}
                    </Typography>
                  ))}
                </div>
              </div>
              <div className={styles.player}>
                <VideoPlayer />
              </div>
            </div>
          ))}
        </AppSwiper>
        <div className={styles.main__head_btns}>
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="left"
            circled="true"
            onClick={onHandleClickPrev}
          />
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="right"
            circled="true"
            onClick={onHandleClickNext}
          />
        </div>
      </div>
    </section>
  );
};

export default MaintenanceRecomendation;
