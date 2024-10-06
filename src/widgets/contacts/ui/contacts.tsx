import styles from './contacts.module.scss';
import { Typography } from '@/shared/ui/typography';
import icon from '@/shared/assets/icons/telephone.svg';
import Image from 'next/image';


const Contacts = () => {
  return (
    <article className={`${styles.main} container`}>
      <div className={styles.main__contacts}>
        <div className={styles.main__item}>
          <Typography weight="regular" variant="text">
            Отдел продаж
          </Typography>

          <Typography weight="bold" variant="text">
            +7(812)309 42 20
          </Typography>
        </div>
        <div className={styles.main__item}>
          <Typography weight="regular" variant="text">
            Отдел сервиса
          </Typography>

          <Typography weight="bold" variant="text">
            +7(812)309 42 21
          </Typography>
        </div>
      </div>
      <div className={styles.main__call}>
        <Image className={styles.main__image} src={icon} alt='Phone icon'/>
        <Typography weight="bold" color="orange" variant="text">
            Заказать обратный звонок
        </Typography>
      </div>
    </article>
  );
};

export default Contacts;
