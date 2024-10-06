import styles from './services-legal-entities-card.module.scss';
import { Typography } from '@/shared/ui/typography/index';


interface IServicesLegalEntitiesCard {
  title: string;
  subtitle: string;
  textBtn: string;
}
const ServicesLegalEntitiesCard = ({ title, subtitle, textBtn }:IServicesLegalEntitiesCard) => {
  return (
    <div className={styles.cards__item}>
      <div className={styles.cards__item__text}>
        <div className={styles.cards__title}>
          <Typography variant="subtitle" weight="bold" color="black">
            {title}
          </Typography>
        </div>
        <div className={styles.cards__subtitle}>
          <Typography variant="text" weight="regular" color="black">
            {subtitle}
          </Typography>
        </div>
      </div>
      <button className={styles.card__btn}>{textBtn}</button>
    </div>
  );
};

export default ServicesLegalEntitiesCard;
