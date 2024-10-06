'use client';
import styles from './feedback-card.module.scss';
import FeedbackCardText from './feedback-card-text';
import { StarsRating } from '@/shared/ui/stars-rating';
import { Typography } from '@/shared/ui/typography';
import profileIcon from '@/shared/assets/icons/lk-black.svg';
import Image, { StaticImageData } from 'next/image';


interface IFeedbackCardProps {
  date: string;
  fullname: string;
  text: string;
  image?: StaticImageData;
  stars: number;
}
const FeedbackCard = ({
  date,
  fullname,
  image,
  text,
  stars = 1,
}: IFeedbackCardProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__profile}>
        <Image
          src={profileIcon}
          className={styles.main__profile__image}
          alt="Profile Iconf"
        />
        <div className={styles.main__profile__content}>
          <StarsRating rating={stars} />
          <div className={styles.profile__information}>
            <Typography weight="bold" variant="text">
              {date}
            </Typography>
            <Typography weight="regular" variant="text">
              {fullname}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.main__text}>
        <FeedbackCardText text={text} />
      </div>
      <div className={styles.main__feedback__image}>
        {image && (
          <Image
            src={image}
            alt="Feedback image"
            className={styles.main__image}
          />
        )}
      </div>
    </div>
  );
};

export default FeedbackCard;
