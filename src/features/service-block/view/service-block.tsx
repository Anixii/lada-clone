import styles from './service-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import image from '@/shared/assets/images/bg1.png';
import image2 from '@/shared/assets/images/bg2.png';
import Image from 'next/image';
import Link from 'next/link';


const customData = [
  { title: 'Установка дополнительного оборудования', image: image, id: 1 },
  { title: 'Замена лобового стекла', image: image2, id: 1 },
  { title: 'Ремонт двигателя ЛАДА', image: image, id: 1 },
  { title: 'Ремонт КПП ЛАДА', image: image2, id: 1 },
  { title: 'Заправка кондиционера автомобиля', image: image, id: 1 },
  { title: 'Диагностика и ремонт подвески ЛАДА', image: image2, id: 1 },
  { title: 'Развал схождения ЛАДА', image: image, id: 1 },
  { title: 'Замена сцепления ЛАДА', image: image2, id: 1 },
  { title: 'Антикоррозийная обработка ЛАДА', image: image, id: 1 },
  { title: 'Установка дополнительного оборудования', image: image, id: 1 },
  { title: 'Замена лобового стекла', image: image2, id: 1 },
  { title: 'Ремонт двигателя ЛАДА', image: image, id: 1 },
  { title: 'Ремонт КПП ЛАДА', image: image2, id: 1 },
  { title: 'Заправка кондиционера автомобиля', image: image, id: 1 },
  { title: 'Диагностика и ремонт подвески ЛАДА', image: image2, id: 1 },
  { title: 'Развал схождения ЛАДА', image: image, id: 1 },
  { title: 'Замена сцепления ЛАДА', image: image2, id: 1 },
  { title: 'Антикоррозийная обработка ЛАДА', image: image, id: 1 },
];
const ServiceBlock = () => {
  return (
    <section className={`${styles.main} container`}>
      <Typography variant="h2" weight="regular" className={styles.main__title}>
        Сервис автомобилей Lada
      </Typography>
      <div className={styles.main__list}>
        {customData.map((item, index) => (
          <Link href={`/owners/service/${item.id}`} className={styles.list__item} key={index}>
            <Image
              className={styles.list__image}
              alt="Car-image"
              src={item.image}
            />
            <div className={styles.list__text}>
              <Typography variant='subtitle' weight='bold' className={styles.list__title}>
                {item.title}
              </Typography>
              <Typography variant='text' weight='regular'>
                Подробнее
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceBlock;
