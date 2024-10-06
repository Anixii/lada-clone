import styles from './stock-service-banner.module.scss';
import { Typography } from '@/shared/ui/typography';


const title = 'АКЦИИ И СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ';
const subtitle =
  'Сделайте покупку нового авто еще приятнее, используя акционные условия LADA';

const StockServiceBanner = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={`${styles.main__text}`}>
          <Typography
            weight="regular"
            variant="h1"
            className={styles.main__title}
            color="white"
          >
            {title}
          </Typography>
          <Typography
            weight="regular"
            variant="h4"
            className={styles.main__subtitle}
            color="white"
          >
            {subtitle}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default StockServiceBanner;
