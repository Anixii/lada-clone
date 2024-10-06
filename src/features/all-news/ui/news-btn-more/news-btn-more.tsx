'use client';
import styles from './news-btn-more.module.scss';
import { useNews } from '../../model/use-news/use-news';


const NewsBtnMore = () => {
  const { isNextPage, setCurrentPage, currentPage, isFetching } = useNews((state) => state);
  const onHandleNextPage = () => {
    if (isNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {isNextPage && (
        <div className={styles.main}>
          <button disabled={isFetching} onClick={onHandleNextPage} className={styles.main__btn}>
            Показать еще
          </button>
        </div>
      )}
    </>
  );
};

export default NewsBtnMore;
