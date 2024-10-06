import styles from './test-drive-new-lada.module.scss';
import { Typography } from '@/shared/ui/typography';
import startRouteIcon from '@/shared/assets/icons/start-route-mointains-white.svg';
import timeRouteIcon from '@/shared/assets/icons/houtgalsses-time-white.svg';
import steeringWheelIcon from '@/shared/assets/icons/steering-wheel-white.svg';
import Image from 'next/image';


const testDriveItems = [
  {
    title: 'Начало маршрута',
    subtitle:
      'Автоцентр Интей Лада Санкт-Петербург, проспект Коломяжский, д.30, корп.1.',
    icon: startRouteIcon,
  },
  { title: 'Время тест-драйва', subtitle: '15 минут', icon: timeRouteIcon },
  { title: 'Длина маршрута', subtitle: '4 км', icon: steeringWheelIcon },
];
export const TestDrvieNewLada = () => {
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography variant="h2" weight="regular">
          Испытай лично новые автомобили LADA!
        </Typography>
      </div>
      <div className={styles.main__cards}>
        {testDriveItems.map((item, index) => (
          <div key={index} className={styles.card__item}>
            <Image className={styles.card__image} src={item.icon} alt="Icon of card" />
            <Typography variant="text" weight="bold">
              {item.title}
            </Typography>
            <Typography variant="text" weight="regular">
              {item.subtitle}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};
