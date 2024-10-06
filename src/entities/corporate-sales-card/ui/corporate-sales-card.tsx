import styles from './corporate-sales-card.module.scss';
import { ICororateSalesCardProps } from '../types/type';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


const CorporateSalesCard = ({ image, text }: ICororateSalesCardProps) => {
  return (
    <div className={styles.cards__item}>
      <Image className={styles.cards__image} src={image} alt="Cars Image" />
      <div className={styles.card__title}>
        <Typography weight="regular" color="black" variant="text">
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default CorporateSalesCard;
