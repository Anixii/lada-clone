import styles from './promotion-offer-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';


export interface IPromotionOfferCardProps {
  item: {
    title: string;
    subtitle: string;
    url: string;
    date: string;
    image?: StaticImageData;
  };
}

const PromotionOfferCard: FC<IPromotionOfferCardProps> = (props) => {
  const { item } = props;
  const { title, url, date, image, subtitle } = item;
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${image?.src})` }}
    >
      <div className={styles.cardContent}>
        <Typography color="white" weight="regular" variant="text">
          {date}
        </Typography>
        <Typography color="white" weight="bold" variant="subtitle">
          {title}
        </Typography>
        <Typography color="white" weight="regular" variant="text">
          {subtitle}
        </Typography>
        <Link href={url}>
          <AppButton variant="secondary" color="white">
            Подробнее
          </AppButton>
        </Link>
      </div>
    </div>
  );
};

export default PromotionOfferCard;
