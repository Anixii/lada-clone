import styles from './services-legal-entities.module.scss';
import { servicesLegalEntitiesItems } from '../variables/variables';
import { Typography } from '@/shared/ui/typography';
import { ServicesLegalEntitiesCard } from '@/entities/services-legal-entities-card';


const ServicesLegalEntities = () => {
  return (
    <section className={`container ${styles.main__wrapper}`}>
      <div className={styles.main}>
        <div className={styles.main__title}>
          <Typography variant="h3" color="black" weight="regular">
            Услуги для юридических лиц
          </Typography>
        </div>
        <div className={styles.main__cards__list}>
          {servicesLegalEntitiesItems.map((item, index) => (
            <ServicesLegalEntitiesCard
              key={index}
              subtitle={item.sutitle}
              textBtn={item.textBtn}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLegalEntities;
