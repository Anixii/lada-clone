import styles from './filter-car-details.tsx.module.scss';
import { CarDetailsSwiperGallery } from '@/widgets/swipers/car-details-swiper-gallery';
import { CarCharacteristics } from '@/features/car-characteristics';
import image from '@/shared/assets/images/cars/5.png';
import image3 from '@/shared/assets/images/cars/4.png';
import image2 from '@/shared/assets/images/cars/2.png';


interface IFilterCarDetails {
  children: React.ReactNode;
}
const FilterCarDetails = ({ children }: IFilterCarDetails) => {
  return (
    <section className={`${styles.main} container`}>
      <CarDetailsSwiperGallery images={[ image,
        image3,
        image2,
        image3,
        image2,
        image ]}
      />
      <CarCharacteristics>{children}</CarCharacteristics>
    </section>
  );
};

export default FilterCarDetails;
