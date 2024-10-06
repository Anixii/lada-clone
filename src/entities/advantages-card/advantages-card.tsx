import styles from './advantages-card.module.scss';
import { IAdvantagesItems } from '@/shared/types/types';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


const AdvantagesCard = ({ image, subtitle, title }: IAdvantagesItems) => {
  return (
    <div className={styles.card__item}>
      <Image className={styles.card__image} src={image} alt="Icon of card" />
      {title && (
        <div className={styles.card__title}>
          <Typography variant="text" weight="bold">
            {title}
          </Typography>
        </div>
      )}
      <div className={styles.card__subtitle}>
        <Typography variant="text" weight="regular">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default AdvantagesCard;
