import styles from './corporates-sale.module.scss';
import CorporateSalesBlockCards from './corporate-sales-block-cards';
import { corporatesSaleItems } from '../variables/varibles';
import { Typography } from '@/shared/ui/typography';


const CorporatesSale = () => {
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography color="black" weight="regular" variant="h1">
          Корпоративные продажи
        </Typography>
      </div>
      <div className={styles.main__subtitle}>
        <Typography color="black" weight="regular" variant="subtitle">
          Модельный ряд LADA с непревзойденным соотношением цена / качество
          помогает решить бизнес-задачи и приобрести компаниям на специальных
          условиях
        </Typography>
      </div>
      <CorporateSalesBlockCards items={corporatesSaleItems}/>
    </section>
  );
};

export default CorporatesSale;
