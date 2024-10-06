import styles from './model-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';


export interface IModelCard {
  image: string | StaticImageData,
  url: string,
  status?: string,
  title: string,
}

const ModelCard: FC<IModelCard> = (props) => {
  const {
    image,
    status,
    title,
  } = props;

  return (
    <div className={styles.main}>
      {
        status &&
        <div className={styles.status}>
          <Typography variant='textSmall' weight='regular' color='white'>
            {status}
          </Typography>
        </div>
      }
      <div className={styles.image}>
        <Image src={image} alt='car_image'/>
      </div>
      <div className={styles.title}>
        <Typography variant='subtitleSecond' weight='regular'>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default ModelCard;
