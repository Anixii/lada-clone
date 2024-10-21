import styles from './banner-swiper.module.scss';
import { IMainBannersType } from '@/shared/api/content/types/type';
import { AppSwiper } from '@/shared/ui/swiper';
import Image from 'next/image';


interface IBannerSwiperProps {
  images: Array<IMainBannersType>;
}
const BannerSwiper = ({ images }: IBannerSwiperProps) => {
  const swiperOptions = {
    slidesPerView: 1,
    autoplay: { delay: 5000 },
  };
  return (
    <section className={`${styles.main}`}>
      <AppSwiper options={swiperOptions}>
        {images.map((item, index) => (
          <div className={styles.main__item} key={index}>
            <Image
              className={styles.main__image}
              fill
              alt="Banner of Page"
              priority
              src={item.image}
            />
          </div>
        ))}
      </AppSwiper>
    </section>
  );
};

export default BannerSwiper;
