import styles from './ui/sales.module.scss';
import { SalesItems } from '@/shared/lib/variables/stock-items';
import { NewsCardItem } from '@/entities/news-card-item';


const SalesPage = () => {
  return (
    <div className={`${styles.sales__list} container`}>
      {SalesItems.map((item, index) => (
        <NewsCardItem
          key={index}
          date={item.date}
          id={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

export default SalesPage;
