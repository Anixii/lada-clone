import styles from './corporates-sale.module.scss';
import { CorporateSalesCard } from '@/entities/corporate-sales-card';
import { ICororateSalesCardProps } from '@/entities/corporate-sales-card/types/type';


interface ICorporateSalesBlockCardsProps {
  items: Array<ICororateSalesCardProps>
}
const CorporateSalesBlockCards = ({ items }:ICorporateSalesBlockCardsProps) => {
  return (
    <div className={styles.main__cards}>
      {items.map((item, index) => (
        <CorporateSalesCard image={item.image} text={item.text} key={index} />
      ))}
    </div>
  );
};

export default CorporateSalesBlockCards;
