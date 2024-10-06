import styles from './news-card-item.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


export interface INewsCardItemProps {
  id: number
  image: string | StaticImageData;
  date: string;
  title?: string;
  subtitle?: string;
  classNames?: string;
}
const NewsCardItem = ({
  id,
  date,
  image,
  title,
  classNames,
  subtitle,
}: INewsCardItemProps) => {
  return (
    <Link prefetch={false} href={`/news/${id}`} className={`${styles.card__item} ${classNames}`}>
      <Image width={250} height={180} src={image} alt="News banner" className={styles.card__image} />
      <div className={styles.card__text}>
        <Typography variant="text" weight="regular">
          {date}
        </Typography>
        {title && (
          <Typography className={styles.card__title} variant="subtitle" weight="bold">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography className={styles.card__subtitle} variant="text" weight="regular">
            {subtitle}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default NewsCardItem;
