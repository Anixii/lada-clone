import styles from './news-block.module.scss';
import { NewsBtnMore } from '@/features/all-news';
import NewsCardsList from '@/features/all-news/ui/news-cards-list/news-cards-list';
import { Typography } from '@/shared/ui/typography';


const NewsBlock = () => {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography variant="h2" weight="regular">
          Пресс-релизы
        </Typography>
      </div>
      <div className={styles.main__cards}>
        <NewsCardsList/>
      </div>
      <NewsBtnMore/>
    </div>
  );
};

export default NewsBlock;
