'use client';
import styles from './off-dealer-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';


export interface IOffDealerCard {
  title: string,
  img: StaticImageData,
  top: boolean
}

const OffDealerCard: FC<IOffDealerCard> = (props) => {
  const {
    title,
    img,
    top = true,
  } = props;

  const isTablet = useMediaQuery('(max-width: 1200px)');

  return (
    <div className={styles.main}>
      {
        top &&
        <Typography variant={isTablet ? 'h4' : 'h3'} weight='regular'>
          {title}
        </Typography>
      }
      <div className={styles.icon}>
        <Image src={img} alt='icon'/>
      </div>
      {
        !top &&
        <Typography variant={isTablet ? 'text' : 'subtitle'} weight='bold'>
          {title}
        </Typography>
      }
    </div>
  );
};

export default OffDealerCard;
