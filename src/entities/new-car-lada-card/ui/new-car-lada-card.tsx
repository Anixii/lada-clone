import styles from './new-car-lada-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


interface INewCarLadaCardProps {
  image: HTMLImageElement;
  title: string;
  price: string;
}
const NewCarLadaCard = ({ image, title, price }: INewCarLadaCardProps) => {
  return (
    <div className={styles.card__item}>
      <Image className={styles.card__item__image} src={image} alt="Car image" />
      <div className={styles.card__text}>
        <div className={styles.card__title}>
          <Typography variant="subtitle" weight="regular" color="black">
            {title}
          </Typography>
        </div>
        <div className={styles.card__price}>
          <Typography variant="subtitle" weight="bold" color="black">
            {price}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NewCarLadaCard;
