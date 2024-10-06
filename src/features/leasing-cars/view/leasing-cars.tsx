import styles from './leasing-cars.module.scss';
import { leasingCarsItems } from '@/shared/lib/variables/financial-servicess-variables';
import { Typography } from '@/shared/ui/typography';
import leasingLogo from '@/shared/assets/images/inter-leasing-logo.png';
import Image from 'next/image';


const LeasingCars = () => {
  return (
    <section className={`${styles.main} container`}>
      <Typography className={styles.main__title} variant="h3" weight="regular">
        Автомобили LADA в лизинг
      </Typography>
      <div className={styles.main__content}>
        <div className={styles.main__cars}>
          {leasingCarsItems.map((item, index) => (
            <div key={index} className={styles.main__cars__item}>
              <Image
                src={item.image}
                alt="Car image"
                className={styles.cars__item__image}
              />
              <Typography
                className={styles.cars__item__title}
                variant="h3"
                weight="regular"
              >
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
        <div className={styles.main__leasing__cards}>
          <div className={styles.leasing__card__lada}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.card__lada__title}
            >
              <strong>Лизинг в Интей ЛАДА</strong> - это наиболее выгодные
              решения по финансированию автомобилей марки LADA для Вашей
              компании
            </Typography>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.card__lada__title}
            >
              Вам понадобится минимальный пакет документов для начала оформления
              сделки
            </Typography>
            <button className={styles.card__lada__btn}>Купить в лизинг</button>
          </div>
          <div className={styles.leasing__partners}>
            <div className={styles.leasing__partners__head}>
              <Typography
                variant="subtitle"
                weight="regular"
                className={styles.leasing__partners__title}
              >
                Наш партнер
              </Typography>
              <Image
                src={leasingLogo}
                alt="Leasing Logo"
                className={styles.leasing__partners__logo}
              />
            </div>
            <Typography
              variant="text"
              weight="regular"
              className={styles.leasing__partners__subtitle}
            >
              «Интерлизинг» - один из лидеров российского рынка лизинга.
              Приоритетными сегментами деятельности являются лизинг грузового и
              легкового автотранспорта, строительной и специальной техники,
              оборудования.
            </Typography>
            <button className={styles.leasing__partners__btn}>Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingCars;
