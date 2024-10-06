import styles from './buyback-card.module.scss';
import { Typography } from '@/shared/ui/typography';


interface IBuybackCardProps {
  title: string;
  subtitle: string;
  index: number;
}
const BuybackCard = ({ index, subtitle, title }: IBuybackCardProps) => {
  return (
    <div className={styles.cards__container}>
      <div className={styles.card__num}>
        <Typography color="orange" variant="h3" weight="regular">
          {index + 1}
        </Typography>
      </div>
      <div className={styles.card__item}>
        <div className={styles.card__title}>
          <Typography weight="bold" color="black" variant="subtitle">
            {title}
          </Typography>
        </div>
        <div className={styles.card__subtitle}>
          <Typography weight="regular" color="black" variant="text">
            {subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BuybackCard;
