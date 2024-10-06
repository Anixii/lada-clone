import styles from './feedback-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import FeedbackCard from '@/entities/feedback-card/ui/feedback-card';
import { IAccountAllReviewsItemType } from '@/shared/api/account/reviews/types/types';
import { FeedbackPagination } from '@/entities/feedback-pagination';


interface IFeedbackBlockProps {
  feedbacks: Array<IAccountAllReviewsItemType>;
  totalPage: number;
  currentPage: number | undefined;
}
const FeedbackBlock = ({ feedbacks, totalPage, currentPage }: IFeedbackBlockProps) => {
  return (
    <div className={`${styles.main} container`}>
      <Typography variant="titleText" weight="regular">
        Отзывы
      </Typography>
      <div className={styles.main__text}>
        <div className={styles.main__subtitle}>
          <Typography variant="h4" weight="regular">
            Комфорт наших клиентов - наша цель!
          </Typography>
        </div>
        <Typography variant="text" weight="regular">
          Автоцентр ИНТЕЙ ЛАДА создает лучший сервис по продаже и обслуживанию
          автомобилей. Нам важно мнение каждого клиента, поэтому приглашаем вас
          оставлять отзывы о нашей работе. Каждое обращение рассматривается
          нашими специалистами и, если необходимо, оперативно принимаются меры
          по решению вопросов. Ждем ваших отзывов и комментариев, а также можете
          посмотреть уже существующие отзывы! Спасибо!
        </Typography>
      </div>
      <button className={styles.main__btn}>Оставить отзыв</button>
      <div className={styles.main__cards}>
        {feedbacks.map((item, index) => (
          <FeedbackCard
            key={index}
            date={item.create_date}
            fullname={item.name || 'Аноним'}
            stars={item.rating || 1}
            text={item.text || 'Пользователь оставил отзыв без текста'}
          />
        ))}
      </div>
      <FeedbackPagination currentPage={currentPage} totalPage={totalPage}/>
    </div>
  );
};

export default FeedbackBlock;
