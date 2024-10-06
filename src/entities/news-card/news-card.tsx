import styles from './news-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import { FC } from 'react';
import { StaticImageData } from 'next/image';


export interface INewsCard {
  img: StaticImageData,
  title: string,
  description: string,
  isMobile: boolean,
  url?: string
}

const NewsCard: FC<INewsCard> = (props) => {
  const {
    title,
    img,
    description,
    isMobile,
  } = props;


  return (
    <div className={styles.main}>
      <div className={styles.image} style={{ backgroundImage: `url(${img.src})` }}/>
      <div className={styles.description}>
        <Typography
          variant={adaptiveHandler('subtitleSecond', 'subtitleSecond', 'textBody', isMobile, isMobile)}
          weight='regular'
        >
          {title}
        </Typography>
        {
          !isMobile &&
          <>
            <div className={styles.text}>
              <Typography variant='text' weight='regular'>
                {description}
              </Typography>
            </div>
            <div className={styles.button}>
              <AppButton variant='secondary' color='black'>
                <Typography variant='textSmall' weight='regular'>
                Подробнее
                </Typography>
              </AppButton>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default NewsCard;
