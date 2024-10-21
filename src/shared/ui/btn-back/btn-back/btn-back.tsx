'use client';
import styles from './btn-back.module.scss';
import { Typography } from '../../typography';
import arrow from '@/shared/assets/icons/arrow-left-black-long.svg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


interface TBtnBackProps {
  containerClasses?: string;
  top?: string;
}
const BtnBack = ({ containerClasses, top = '0px' }: TBtnBackProps) => {
  const router = useRouter();
  return (
    <div
      style={{ top: top }}
      className={`${styles.main__wrapper} ${containerClasses}`}
    >
      <div onClick={() => router.back()} className={styles.main}>
        <Image src={arrow} alt='Arrow left'/>
        <Typography variant="text" weight="regular">
          Назад
        </Typography>
      </div>
    </div>
  );
};

export default BtnBack;
