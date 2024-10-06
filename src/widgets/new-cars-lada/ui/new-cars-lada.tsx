import styles from './new-cars-lada.module.scss';
import { newCarsCardItems } from '../variables/variables';
import { NewCarLadaCard } from '@/entities/new-car-lada-card';
import { Typography } from '@/shared/ui/typography';


const NewCarsLada = () => {
  return (
    <section className={`container ${styles.main__wrapper}`}>
      <div className={styles.main}>
        <div className={styles.main__text}>
          <div className={styles.main__title}>
            <Typography variant="h3" weight="regular" color="black">
              Новые машины LADA
            </Typography>
          </div>
          <div className={styles.main__subtitle}>
            <Typography variant="subtitle" weight="regular" color="black">
              Вы можете доплатить и приобрести абсолютно новые автомобили LADA
            </Typography>
          </div>
        </div>
        <div className={styles.main__cards}>
          {newCarsCardItems.map((item, index) => (
            <NewCarLadaCard image={item.image} title={item.title} price={item.price} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCarsLada;
