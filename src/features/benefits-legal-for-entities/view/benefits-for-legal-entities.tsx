import styles from './benefits-for-legal-entities.module.scss';
import { benefitsItems } from '../variables/variables';
import banner from '@/shared/assets/images/benefits-for-legal-entities.svg';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


const BenefitsForLegalEntities = () => {
  return (
    <section className={`container ${styles.main}`}>
      <div className={styles.main__title}>
        <Typography variant="h2" color="black" weight="regular">Преимущества для юридических лиц</Typography>
      </div>
      <div className={styles.main__inner}>
        <div className={styles.main__banner}>
          <Image
            className={styles.banner__image}
            src={banner}
            alt="Banner of Benefits For Legal Entities"
          />
        </div>
        <div className={styles.main__text}>
          <Typography variant="h4" color="black" weight="regular">
            Преимущества для юридических лиц
          </Typography>
          {benefitsItems.map((item, index) => (
            <div className={styles.list__item} key={index}>
              <Typography variant="text" color="black" weight="bold">
                {item.title}
              </Typography>
              {item.subtitle && (
                <Typography variant="text" color="black" weight="regular">
                  {item.subtitle}
                </Typography>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsForLegalEntities;
