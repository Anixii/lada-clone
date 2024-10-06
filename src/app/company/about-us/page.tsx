import styles from './ui/about-us.module.scss';
import CorporateSalesBlockCards from '@/features/corporates-sales/view/corporate-sales-block-cards';
import {
  aboutUsAdvantages,
  aboutUsCarsSaleItems,
} from '@/shared/lib/variables/about-us-variables';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Typography } from '@/shared/ui/typography';
import { Advantages } from '@/widgets/advantages';
import { PATHS } from '@/shared/lib/variables/variables';
import { OffDealer } from '@/widgets/off-dealer';
import banner from '@/shared/assets/images/about-us-banner.png';
import { VideoPlayer } from '@/widgets/video-player';
import { Header } from '@/widgets/header';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


const AboutUsPage = () => {
  return (
    <>
      <Header variant='white__variant'/>
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <div className={styles.main}>
        <div className={`container ${styles.main__about}`}>
          <Image
            priority
            alt="Banner of About page"
            src={banner}
            className={styles.main__banner}
          />
          <Typography
            className={styles.main__title}
            weight="regular"
            variant="titleText"
          >
            О нас
          </Typography>
        </div>
        <div className={styles.main__top_content}>
          <OffDealer />
          <div className={`${styles.player} container`}>
            <VideoPlayer />
            <Typography variant="text" weight="regular">
              Интей Лада является официальным дилером LADA в Санкт-Петербурге
              уже более 24 лет. За время своей работы мы продали более 45 тысяч
              автомобилей. Мы помогаем удобно и выгодно купить новые автомобили
              LADA, у вас есть возможность даже приобрести автомобиль онлайн,
              без посещения автосалона. По программе{' '}
              <Link href={PATHS.TRADEIN} className={styles.player__link}>
                трейд-ин
              </Link>{' '}
              мы можем обменять ваш автомобиль на новую LADA, или выкупить ваш
              подержанный автомобиль.
            </Typography>
            <Typography variant="text" weight="regular">
              В нашем автоцентре всегда в наличии весь модельный ряд ЛАДА,
              который включает в себя такие варианты кузова, как седан, хэтчбек,
              лифтбек, а также вместительные универсалы и проходимые
              внедорожники. Также есть в наличии автомобили с пробегом.
            </Typography>
          </div>
        </div>
        <div className={`${styles.main__car__row} container`}>
          <Typography
            weight="regular"
            variant="subtitle"
            className={styles.car__row}
          >
            В нашем автоцентре всегда в наличии весь модельный ряд ЛАДА, который
            включает в себя такие варианты кузова, как
          </Typography>
          <CorporateSalesBlockCards items={aboutUsCarsSaleItems} />
        </div>
        <Advantages
          advantagesItems={aboutUsAdvantages}
          classNames={styles.cards__container}
        >
          <Typography
            className={styles.advantages__title}
            variant="subtitle"
            weight="regular"
          >
            Нас уважают и доверяют нашему профессионализму по нескольким
            причинам:
          </Typography>
        </Advantages>

        <div className={`${styles.feedback} container`}>
          <Typography variant="h4" weight="regular">
            Отзывы
          </Typography>
          <div className={styles.feedback__items}>
            {/* {feedbackItems.splice(0, 3).map((item, index) => (
              <FeedbackCard
                date={item.date}
                fullname={item.fullname}
                stars={item.stars}
                text={item.text}
                image={item.image}
                key={index}
              />
            ))} */}
          </div>
          <Link href={PATHS.FEEDBACK} className={styles.feedback__link}>
            Смотреть все отзывы
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
