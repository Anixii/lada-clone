import styles from './header-model-row-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';


export interface IHeaderModelRowCard {
  img: StaticImageData,
  name: string,
  price_starts: string,
  price_ends: string
}

const HeaderModelRowCard: FC<IHeaderModelRowCard> = (props) => {
  const {
    img,
    name,
    price_ends,
    price_starts,
  } = props;

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={img} alt='car_image'/>
      </div>
      <div className={styles.prices}>
        <Typography variant='subtitle' weight='bold'>
          {name}
        </Typography>
        <Typography variant='text' weight='regular'>
          {price_starts}
        </Typography>
        <Typography variant='text' weight='regular'>
          {price_ends}
        </Typography>
      </div>
      <div className={styles.more}>
        <Typography variant='text' weight='bold'>
          Подробнее
        </Typography>
      </div>
    </div>
  );
};

export default HeaderModelRowCard;
