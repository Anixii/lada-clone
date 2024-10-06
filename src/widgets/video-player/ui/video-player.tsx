import styles from './video-player.module.scss';
import banner from '@/shared/assets/images/corporatsales.svg';
import Image from 'next/image';


const VideoPlayer = () => {
  return (
    <div className={styles.main}>
      <Image alt="banner" src={banner} className={styles.main__banner} />
    </div>
  );
};

export default VideoPlayer;
