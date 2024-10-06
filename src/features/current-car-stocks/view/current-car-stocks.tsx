import styles from './current-car-stocks.module.scss';
import { Typography } from '@/shared/ui/typography';


interface ICurrentCarStocksProps {
  items: Array<string>;
}
const CurrentCarStocks = ({ items }: ICurrentCarStocksProps) => {
  return (
    <section className={`${styles.main} container`}>
      <Typography
        variant="subtitle"
        color="orange"
        weight="bold"
        className={styles.main__title}
      >
        Действующие акции
      </Typography>
      <div className={styles.main__items}>
        {items.map((item, index) => (
          <div className={styles.stock__item} key={index}>
            <Typography
              color="white"
              variant="subtitle"
              className={styles.main__title}
              weight="regular"
            >
              {item}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentCarStocks;
