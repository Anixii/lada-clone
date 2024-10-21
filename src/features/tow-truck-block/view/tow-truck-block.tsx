import styles from './tow-truck-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import towTruckBanner from '@/shared/assets/images/tow-truck-banner.png';
import { RequestForm } from '@/features/request-form';
import Image from 'next/image';
import Link from 'next/link';


const TowTruckBlock = () => {
  return (
    <section className={'container'}>
      <div className={styles.main}>
        <Typography
          className={styles.main__title}
          variant="titleText"
          weight="regular"
        >
          Услуги эвакуатора
        </Typography>
        <div className={styles.main__content}>
          <Image
            src={towTruckBanner}
            alt="Tow-truck banner"
            className={styles.main__image}
          />
          <div className={styles.main__text}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.main__text__title}
            >
              Услуги эвакуатора по Санкт-Петербургу и Ленинградской области.
            </Typography>
            <Typography
              variant="text"
              weight="regular"
              className={styles.main__text__subtitle}
            >
              Наш автосалон предлагает воспользоваться услугами эвакуатора на
              всей территории Санкт-Петербурга и Ленинградской области. Заказать
              эвакуатор Вы можете по телефону{' '}
              <Link
                className={styles.main__tel__link}
                href={'tel:7-921-30-31-222'}
              >
                +7-921-30-31-222
              </Link>
            </Typography>
            <button className={styles.main__btn}>
              <Typography weight="bold" color="white" variant="text">
                Вызвать эвакуатор
              </Typography>
            </button>
            <ul className={styles.main__list}>
              <li>
                <Typography variant="text" weight="bold">
                  Расценки на услуги эвакуатора при эвакуации легковых
                  автомобилей:
                </Typography>
              </li>
              <li>
                <Typography variant="text" weight="regular">
                  Эвакуация ТС в пределах КАД: 1500 рублей в час. (минимально
                  за 1 час).*
                </Typography>
              </li>
              <li>
                <Typography variant="text" weight="regular">
                  Эвакуация ТС за пределами КАД: 40 рублей за 1 километр.*
                </Typography>
              </li>
              <li>
                <Typography variant="text" weight="regular">
                  Приморский, Выборгский районы подача эвакуатора производится
                  бесплатно. В остальные районы города и за пределами КАД -
                  подача эвакуатора от 500 рублей. * Время и расстояние
                  рассчитывается от точки погрузки.
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <RequestForm
          title="Вызвать эвакуатор"
          subtitle="Отправьте нам заявку и мы свяжемся с вами в течении 15 минут"
          isSelectActive={false}
        />
      </div>
    </section>
  );
};

export default TowTruckBlock;
