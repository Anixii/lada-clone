import styles from './vacancy-main-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import banner from '@/shared/assets/images/vacansy_banner.png';
import mailIcon from '@/shared/assets/icons/mail-black-icon.svg';
import hhIcon from '@/shared/assets/icons/hh_icon.png';
import Image from 'next/image';
import Link from 'next/link';


const VacancyMainBlock = () => {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.main__title}>
        <Typography variant="titleText" weight="regular">
          Вакансии
        </Typography>
      </div>
      <div className={styles.main__content}>
        <div className={styles.main__text}>
          <div className={styles.main__subtitle}>
            <Typography variant="subtitle" weight="regular">
              По вопросам трудоустройства обращайтесь:
            </Typography>
          </div>
          <div className={styles.main__links}>
            <div className={styles.link__item}>
              <Image
                src={mailIcon}
                alt="Mail Icon"
                className={styles.link__item_icon}
              />
              <Link href={'#'} className={styles.link__item_link}>
                avtosalon@intei-lada.ru
              </Link>
            </div>
            <div className={styles.link__item}>
              <Image
                src={hhIcon}
                alt="Mail Icon"
                className={styles.link__item_icon}
              />
              <Link href={'#'} className={styles.link__item_link}>
                Наши вакансии на HH
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.main__banner}>
          <Image
            alt="Vacancy Banner"
            src={banner}
            className={styles.main__image}
          />
        </div>
      </div>
    </div>
  );
};

export default VacancyMainBlock;
