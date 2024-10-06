import styles from './customers.module.scss';
import banner from '@/shared/assets/images/corporatsales.svg';
import Image from 'next/image';


const CustomersBanner = () => {
  return (
    <div className={styles.main}>
      <Image className={styles.main__image} src={banner} alt='Banner of Lada'/>
    </div>
  );
};

export default CustomersBanner;
