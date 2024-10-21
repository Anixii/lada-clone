import styles from './accessories-switcher.module.scss';
import { Typography } from '@/shared/ui/typography';
import iconCircle from '@/shared/assets/icons/wheel-orange-icon.svg';
import serviceIcon from '@/shared/assets/icons/sevice-orange-icon.svg';
import Image from 'next/image';


const AccessoriesSwitcher = () => {
  return (
    <section className={`${styles.main} container`}>
      <Typography className={styles.main__title} variant="h3" weight="regular">
        Подберите необходимые аксессуары для вашего автомобиля
      </Typography>
      <div className={styles.main__swithcers}>
        <div className={`${styles.switcher__item}`}>
          <div className={styles.switcher__block}></div>
          <Typography
            className={styles.switcher__title}
            variant="text"
            weight="regular"
          >
            Выберите модель автомобиля
          </Typography>
        </div>
        <div
          className={`${styles.switcher__item} ${styles.switcher__item_active}`}
        >
          <div className={styles.switcher__block}></div>
          <Typography
            className={styles.switcher__title}
            variant="text"
            weight="regular"
          >
            Аксессуары и запасные части
          </Typography>
        </div>
      </div>
      <div className={styles.main__content}>
        <div className={styles.content__item}>
          <div className={styles.content__image__container}>
            <Image
              className={styles.content__image}
              src={iconCircle}
              alt="Wheel icon"
            />
          </div>
          <div className={styles.content__information}>
            <Typography
              weight="bold"
              variant="text"
              className={styles.content__title}
            >
              Оригинальные аксессуары Lada
            </Typography>
            <Typography
              weight="regular"
              variant="text"
              className={styles.content__subtitle}
            >
              Вы всегда можете заказать нужные или понравившиеся аксессуары у
              нас на сайте,а мы Вам с удовольствием поможем в их установке
            </Typography>
            <button className={styles.content__btn}>
              <Typography weight="bold" color="orange" variant="text">
                Скачать каталог
              </Typography>
            </button>
          </div>
        </div>
        <div className={styles.content__item}>
          <div className={styles.content__image__container}>
            <Image
              className={styles.content__image}
              src={serviceIcon}
              alt="Wheel icon"
            />
          </div>
          <div className={styles.content__information}>
            <Typography
              weight="bold"
              variant="text"
              className={styles.content__title}
            >
              Оригинальные запасные части Lada
            </Typography>
            <Typography
              weight="regular"
              variant="text"
              className={styles.content__subtitle}
            >
              ПАО «АВТОВАЗ» тщательно подходит к отбору поставщиков и входному
              контролю качества комплектующих изделий
            </Typography>
            <button className={styles.content__btn}>
              <Typography weight="bold" color="orange" variant="text">
                Скачать каталог
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSwitcher;
