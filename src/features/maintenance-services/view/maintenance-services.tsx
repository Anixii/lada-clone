import styles from './maintenance-services.module.scss';
import { Typography } from '@/shared/ui/typography';
import oilfilter from '@/shared/assets/images/maintenance/oil-fitler.png';
import headlights from '@/shared/assets/images/maintenance/headlights.png';
import bottleOfOil from '@/shared/assets/images/maintenance/bottle-of-oil.png';
import fuelfilter from '@/shared/assets/images/maintenance/fuel-filter.png';
import arrow from '@/shared/assets/icons/orange-arrow-right.svg';
import { AppSwiper } from '@/shared/ui/swiper';
import Link from 'next/link';
import Image from 'next/image';


const maintenanceServicesItems = [
  {
    title: 'Замена масляного фильтра',
    price: 170,
    image: oilfilter,
  },
  {
    title: 'Замена масел',
    price: 560,
    image: bottleOfOil,
  },
  {
    title: 'Замена топливного фильтра',
    price: 156,
    image: fuelfilter,
  },
  {
    title: 'Замена воздушного фильтра',
    price: 300,
    image: fuelfilter,
  },
  {
    title: 'Регулировка светафар',
    price: 420,
    image: headlights,
  },
  {
    title: 'Замена масляного фильтра',
    price: 170,
    image: oilfilter,
  },
  {
    title: 'Замена масел',
    price: 560,
    image: bottleOfOil,
  },
];
const MaintenanceServices = () => {
  const swiperOptions = {
    slidesPerView: 1,
    pagination: true,
    spaceBetween: 24,
  };
  return (
    <section className={`${styles.main} container`}>
      <Typography className={styles.main__title} variant="h4" weight="regular">
        Подберите отдельную услугу
      </Typography>
      <div className={styles.main__services}>
        {maintenanceServicesItems.map((item, index) => (
          <div className={styles.services__item} key={index}>
            <Typography
              className={styles.services__title}
              variant="subtitle"
              weight="bold"
            >
              {item.title}
            </Typography>
            <Typography
              className={styles.services__subtitle}
              variant="h4"
              weight="bold"
            >
              от <span className={styles.services__price}>{item.price}</span>{' '}
              руб.
            </Typography>
            <Link className={styles.services__link} href={'#'}>
              <Typography
                className={styles.services__link__title}
                variant="text"
                color="orange"
                weight="regular"
              >
                Записаться{' '}
                <Image
                  src={arrow}
                  alt="Arrow"
                  className={styles.services__link__arrow}
                />
              </Typography>
            </Link>
            <div className={styles.services__circle}>
              <Image
                className={styles.services__image}
                src={item.image}
                alt="services item"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.services__swiper}>
        <AppSwiper options={swiperOptions}>
          {maintenanceServicesItems.map((item, index) => (
            <div className={styles.services__item} key={index}>
              <Typography
                className={styles.services__title}
                variant="subtitle"
                weight="bold"
              >
                {item.title}
              </Typography>
              <Typography
                className={styles.services__subtitle}
                variant="h4"
                weight="bold"
              >
                от <span className={styles.services__price}>{item.price}</span>{' '}
                руб.
              </Typography>
              <Link className={styles.services__link} href={'#'}>
                <Typography
                  className={styles.services__link__title}
                  variant="text"
                  color="orange"
                  weight="regular"
                >
                  Записаться{' '}
                  <Image
                    src={arrow}
                    alt="Arrow"
                    className={styles.services__link__arrow}
                  />
                </Typography>
              </Link>
              <div className={styles.services__circle}>
                <Image
                  className={styles.services__image}
                  src={item.image}
                  alt="services item"
                />
              </div>
            </div>
          ))}
        </AppSwiper>
      </div>
    </section>
  );
};

export default MaintenanceServices;
