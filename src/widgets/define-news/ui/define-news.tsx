import styles from './define-news.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


interface IDefineNewsProps {
  title: string;
  image: Array<string>;
  date: string;
  description: string;
}
const DefineNews = ({ date, description, image, title }: IDefineNewsProps) => {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography variant="h1" weight="regular">
          {title}
        </Typography>
      </div>
      <div className={styles.main__images_container}>
        {image.map((item, index) => (
          <Image
            key={index}
            priority
            width={450}
            height={450}
            src={item}
            alt="Image of news"
            className={styles.main__image}
          />
        ))}
      </div>
      <div>
        <Typography className={styles.main__date} variant="text" weight="bold">
          {date}
        </Typography>
        <div className={styles.main__descriptions}>
          <Typography htmlContent={description} variant="text" weight="regular">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DefineNews;
