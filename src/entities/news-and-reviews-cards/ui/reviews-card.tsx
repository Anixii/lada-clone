import styles from './reviews-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import quotes from '@/shared/assets/images/Quotes.png';
import Image from 'next/image';
import { FC } from 'react';


export interface IReviewsCard {
  date: string,
  description: string,
  author: string,
  isMobile: boolean
}

const ReviewsCard: FC<IReviewsCard> = (props) => {
  const {
    date,
    description,
    author,
    isMobile,
  } = props;

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <Image src={quotes} alt='quotes' className={styles.quotes}/>
        <div className={styles.date}>
          <Typography variant='textSmall' weight='regular'>
            {date}
          </Typography>
        </div>
        <Typography variant={isMobile ? 'textExtraSmall' : 'text'} weight='regular'>
          {description}
        </Typography>
        <div className={styles.author}>
          <Typography variant={isMobile ? 'textExtraSmall' : 'text'} weight='regular'>
            {author}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
