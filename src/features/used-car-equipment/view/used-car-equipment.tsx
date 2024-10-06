import styles from './used-car-equipment.module.scss';
import { Typography } from '@/shared/ui/typography';


const equipmentItmes = {
  safety: [
    'Подушка безопасности водителя',
    'Защита двигателя и подкапотного пространства',
    'Крепления для детских сидений ISOFIX',
  ],
  comfort: [
    'Электроусилитель рулевого управления',
    'Воздушный фильтр салона',
    'Электростеклоподъемники передних дверей',
  ],
  interior: [
    'Бортовой компьютер',
    'Панель приборов. Цвет черный',
    'Розетка 12V на центральной консоли',
    'Центральный подлокотник с боксом',
  ],
  multimedia: [ 'Антенна "акулий плавник"', '4 динамика' ],
  exterior: [
    'Наружные зеркала с боковыми указателями поворота', '15 стальные диски',
  ],
};
const UsedCarEquipment = () => {
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__wrapper}>
        <div className={styles.main__head}>
          <Typography
            variant="subtitle"
            weight="regular"
            className={styles.main__title}
          >
            Комплектация
          </Typography>
        </div>
        <div className={styles.main__content}>
          <div className={styles.main__item}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.equipment__title}
            >
              Безопасность
            </Typography>
            <div className={styles.equipment__column}>
              {equipmentItmes.safety.map((item, index) => (
                <Typography key={index} variant="text" weight="regular">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
          <div className={styles.main__item}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.equipment__title}
            >
              Интерьер
            </Typography>
            <div className={styles.equipment__column}>
              {equipmentItmes.interior.map((item, index) => (
                <Typography key={index} variant="text" weight="regular">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
          <div className={styles.main__item}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.equipment__title}
            >
              Комфорт
            </Typography>
            <div className={styles.equipment__column}>
              {equipmentItmes.comfort.map((item, index) => (
                <Typography key={index} variant="text" weight="regular">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
          <div className={styles.main__item}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.equipment__title}
            >
              Мультимедиа
            </Typography>
            <div className={styles.equipment__column}>
              {equipmentItmes.multimedia.map((item, index) => (
                <Typography key={index} variant="text" weight="regular">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
          <div className={styles.main__item}>
            <Typography
              variant="subtitle"
              weight="regular"
              className={styles.equipment__title}
            >
              Экстерьер
            </Typography>
            <div className={styles.equipment__column}>
              {equipmentItmes.exterior.map((item, index) => (
                <Typography key={index} variant="text" weight="regular">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedCarEquipment;
