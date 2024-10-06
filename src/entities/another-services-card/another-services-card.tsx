import styles from './another-services-card.module.scss';
import { Typography } from '@/shared/ui/typography';


export interface IAnotherServicesCardProps {
  title: string;
  subtitle: string;
  type?: string;
}
const AnotherServicesCard = ({
  subtitle,
  title,
  type = 'credit',
}: IAnotherServicesCardProps) => {
  return (
    <div className={`${styles.card__item} ${styles[ type ]}`}>
      <div className={styles.card__text}>
        <div className={styles.card__title}>
          <Typography variant="subtitle" weight="bold">
            {title}
          </Typography>
        </div>
        <div className={styles.card__subtitle}>
          <Typography variant="text" weight="regular">
            {subtitle}
          </Typography>
        </div>
      </div>
      <button className={styles.card__btn}>Подробнее</button>
    </div>
  );
};

export default AnotherServicesCard;
