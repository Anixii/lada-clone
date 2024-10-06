import styles from './employee-card.module.scss';
import { Typography } from '@/shared/ui/typography';
import phoneIcon from '@/shared/assets/icons/phone-black-icon.svg';
import mailIcon from '@/shared/assets/icons/mail-black-icon.svg';
import Image, { StaticImageData } from 'next/image';


interface IEmployeeCardProps {
  image: StaticImageData;
  jobTitle: string;
  fullname: string;
  phoneNumber: string;
  mail: string;
}
const EmployeeCard = ({
  fullname,
  image,
  jobTitle,
  mail,
  phoneNumber,
}: IEmployeeCardProps) => {
  return (
    <div className={styles.card__item}>
      <Image src={image} alt="Employ Photo" className={styles.card__image} />
      <div className={styles.card__text}>
        <div className={styles.card__text_jobtitle}>
          <Typography color="gray" variant="text" weight="regular">
            {jobTitle}
          </Typography>
        </div>
        <div className={styles.card__text_fullname}>
          <Typography color="black" variant="text" weight="bold">
            {fullname}
          </Typography>
        </div>
      </div>
      <div className={styles.card__text}>
        <div className={styles.card__mail}>
          <Image src={mailIcon} className={styles.card__icon} alt="Mail Icon" />
          <Typography color="orange" variant="text" weight="regular">
            {mail}
          </Typography>
        </div>
        <div className={styles.card__phone}>
          <Image
            src={phoneIcon}
            className={styles.card__icon}
            alt="Phone Icon"
          />
          <Typography color="black" variant="text" weight="bold">
            {phoneNumber}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
