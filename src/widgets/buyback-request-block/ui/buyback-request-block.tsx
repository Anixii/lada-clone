import styles from './buyback-request-block.module.scss';
import { BuybackCard } from '@/entities/buyback-card';
import { ICustomersBuybackCardItem } from '@/shared/types/types';
import { Typography } from '@/shared/ui/typography';


interface IBuybackRequestBlockProps {
  title: string;
  items: Array<ICustomersBuybackCardItem>;
}
const BuybackRequestBlock = ({ title, items }: IBuybackRequestBlockProps) => {
  return (
    <section className={`container ${styles.main__wrapper}`}>
      <div className={styles.main}>
        <div className={styles.main__title}>
          <Typography variant="h3" weight="regular">
            {title}
          </Typography>
        </div>
        <div className={styles.main__cards}>
          {items.map((item, index) => (
            <BuybackCard key={index} index={index} subtitle={item.subtitle} title={item.title}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuybackRequestBlock;
