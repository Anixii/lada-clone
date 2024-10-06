import styles from './news-card-secondary.module.scss';
import { Typography } from '@/shared/ui/typography';
import { FC } from 'react';


export interface INewsCardSecondary {
  date: string,
  title: string,
  description: string,
  url?: string,
  isMobile: boolean
}

const NewsCardSecondary: FC<INewsCardSecondary> = (props) => {
  const {
    date,
    title,
    description,
    isMobile,
  } = props;

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <div className={styles.date}>
          <Typography variant='textSmall' weight='regular'>
            {date}
          </Typography>
        </div>
        <Typography variant={isMobile ? 'text' : 'subtitleSecond'} weight='bold'>
          {title}
        </Typography>
        <Typography variant={isMobile ? 'textExtraSmall' : 'text'} weight='regular'>
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default NewsCardSecondary;
