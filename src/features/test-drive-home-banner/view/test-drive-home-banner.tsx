import styles from './test-drive-home-banner.module.scss';
import banner from '@/shared/assets/images/test-drive-banner.png';
import arrow from '@/shared/assets/icons/arrow-left-white.svg';
import Image from 'next/image';


const TestDriveHomeBanner = () => {
  return (
    <section className={styles.main}>
      <Image
        className={styles.main__image}
        src={banner}
        alt="Banner of test-drive"
      />
      <button className={styles.main__btn}>
        <Image
          className={styles.main__btn__icon}
          src={arrow}
          alt="icon of Arrow"
        />
      </button>
    </section>
  );
};

export default TestDriveHomeBanner;
