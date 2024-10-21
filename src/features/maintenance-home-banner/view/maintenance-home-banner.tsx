import styles from './maintenance-home-banner.module.scss';
import { Typography } from '@/shared/ui/typography';
import banner from '@/shared/assets/images/maintance_banner.png';
import Image from 'next/image';


const MaintenanceHomeBanner = () => {
  return (
    <section className={`${styles.main} `}>
      <div className={styles.main__container}>
        <div className={styles.main__text}>
          <div className={styles.main__text_information}>
            <Typography
              weight="regular"
              variant="h2"
              className={styles.main__title}
            >
              Техническое обслуживание
            </Typography>
            <Typography
              weight="regular"
              variant="subtitle"
              className={styles.main__subtitle}
            >
              Наши специалисты выполнят полный спектр работ по плановому
              техническому обслуживанию и ремонту с применением современного
              компьютерного диагностического оборудования.
            </Typography>
          </div>
          <div className={styles.main__text_links}>
            <Typography
              className={styles.main__summ}
              variant="h4"
              weight="regular"
            >
              от <span className={styles.main__summ__orange}>1900</span> руб.
            </Typography>
          </div>
        </div>
        <Image className={styles.main__banner} src={banner} alt='Banner of maintenance'/>
      </div>
    </section>
  );
};

export default MaintenanceHomeBanner;
