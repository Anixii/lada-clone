import styles from './stars-rating.module.scss';
import starIcon from '@/shared/assets/icons/orange-star.svg';
import Image from 'next/image';


interface IStarsRatingProps {
  rating: number;
}
const StarsRating = ({ rating = 1 }:IStarsRatingProps) => {
  // Создаем массив заполненных звезд на основе переданного рейтинга
  const stars = Array.from({ length: rating }, (_, index) => {
    return <Image src={starIcon} alt='★' className={styles.main__image} key={index}/>;
  });

  return <div className={styles.main}>{stars}</div>;
};

export default StarsRating;
