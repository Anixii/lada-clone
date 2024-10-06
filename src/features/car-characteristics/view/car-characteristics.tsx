import styles from './car-characteristics.module.scss';
import { Typography } from '@/shared/ui/typography';


interface ICarCharacteristics {
    children: React.ReactNode;
}
const CarCharacteristics = ({ children }:ICarCharacteristics) => {
  return (
    <div className={styles.main}>
      <Typography variant="h3" weight="regular" className={styles.main__title}>
        Основные характеристики
      </Typography>
      <div className={styles.characterostics__column}>
        {children}
      </div>
    </div>
  );
};

export default CarCharacteristics;
