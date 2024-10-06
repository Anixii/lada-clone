import styles from './leader-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import AppButton from '@/shared/ui/button/ui/button';
import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Link from 'next/link';


export interface ILeaderCard {
  title: string,
  url: string,
  image: StaticImageData
}

const LeaderCard: FC<ILeaderCard> = (props) => {
  const {
    title,
    url,
    image,
  } = props;

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${image.src})` }}>
      <Typography variant='h3' color='white' weight='regular'>
        {title}
      </Typography>
      <Link href={url}>
        <AppButton variant='secondary' color='white' size='medium'>
        Подробнее
        </AppButton>
      </Link>
    </div>
  );
};

export default LeaderCard;
