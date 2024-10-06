import styles from './best-offer-card.module.scss';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import AppButton from '@/shared/ui/button/ui/button';
import { Typography } from '@/shared/ui/typography';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';


export interface IBestOfferCardProps {
  title: string,
  url: string,
  date: string,
  image?: StaticImageData,
}

const BestOfferCard: FC<IBestOfferCardProps> = (props) => {
  const {
    title,
    url,
    date,
    image,
  } = props;

  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${image?.src})` }}>
      <div className={styles.text}>
        <Typography
          weight='regular'
          color='white'
          variant={adaptiveHandler('text', 'text', 'textExtraSmall', isTablet, isMobile)}
        >
          {date}
        </Typography>
        <Typography
          weight='regular'
          color='white'
          variant={adaptiveHandler('subtitle', 'subtitle', 'text', isTablet, isMobile)}
        >
          {title}
        </Typography>
      </div>
      <div className={styles.button}>
        <Link href={url}>
          <AppButton
            variant='secondary'
            color='white'
            size={adaptiveHandler('medium', 'medium', 'small', isTablet, isMobile)}
          >
            Подробнее
          </AppButton>
        </Link>
      </div>
    </div>
  );
};

export default BestOfferCard;
