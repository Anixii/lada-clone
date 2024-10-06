'use client';
import styles from './stock-sales-links.module.scss';
import { useStockSales } from '../model/use-stock-sales/use-stock-sales';
import { Typography } from '@/shared/ui/typography';


const StockSalesLinks = () => {
  const [ setCurrentLink, currentLink ] = useStockSales((state) => [
    state.setCurrentLink, state.currentLink,
  ]);
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__links}>
        <div
          onClick={() => setCurrentLink(1)}
          className={`${styles.link__item} ${
            currentLink === 1 && `${styles.active}`
          }`}
        >
          <Typography
            className={styles.link__title}
            variant={'subtitle'}
            weight="regular"
          >
            Все
          </Typography>
        </div>
        <div onClick={() => setCurrentLink(2)} className={`${styles.link__item} ${
          currentLink === 2 && `${styles.active}`
        }`}
        >
          <Typography
            className={styles.link__title}
            variant={'subtitle'}
            weight="regular"
          >
            Новые
          </Typography>
        </div>
        <div
          className={`${styles.link__item} ${
            currentLink === 3 && `${styles.active}`
          }`} onClick={() => setCurrentLink(3)}
        >
          <Typography
            className={styles.link__title}
            variant={'subtitle'}
            weight="regular"
          >
            Истекающие
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default StockSalesLinks;
