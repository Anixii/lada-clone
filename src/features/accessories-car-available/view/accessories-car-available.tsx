'use client';
import styles from './accessories-car-available.module.scss';
import {
  IAccessoriesCategory,
  IAccessoriesCategoryItem,
} from '../model/types/use-accessories';
import { useAccessories } from '../model/use-accessories/use-accessories';
import AppButton from '@/shared/ui/button/ui/button';
import { Typography } from '@/shared/ui/typography';
import { AppSwiper } from '@/shared/ui/swiper';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import imageOfItem from '@/shared/assets/images/interior/interior2.png';
import Image from 'next/image';
import { useEffect } from 'react';


export const categoriesItems: Array<IAccessoriesCategoryItem> = [
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Защита картера',
    text: '',
  },
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Текстильные ковры салона Exclusive с цветным шильдом',
    text: '',
  },
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Литьевые ковры салона комбинированные',
    text: '',
  },
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Текстильные ковры салона класса Original',
    text: '',
  },
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Защита картера',
    text: '',
  },
  {
    image: imageOfItem,
    id: 1,
    category: 1,
    image_path: '',
    car_available: 1,
    item: '6523',
    name: 'Текстильные ковры салона Exclusive с цветным шильдом',
    text: '',
  },
];
const AccessoriesCarAvailable = () => {
  const isTablet = useMediaQuery('(max-width: 1220px)');
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [
    categories,
    currentCategory,
    categoryData,
    setCurrentCategory,
    setCategoriesData,
  ] = useAccessories((state) => [
    state.categories,
    state.currentCategory,
    state.categoryData,
    state.setCurrentCategory,
    state.setCategoriesData,
  ]);
  const onHandleChangeCategory = (id: IAccessoriesCategory) => {
    setCurrentCategory(id);
    setCategoriesData(categoriesItems);
  };
  const onHandleClickNextCategory = () => {
    categories.map((item, index) => {
      if (item.id === currentCategory?.id) {
        if (categories.length - 1 !== index) {
          setCurrentCategory(categories[ index + 1 ]);
        } else [ setCurrentCategory(categories[ 0 ]) ];
      }
    });
    setCategoriesData(categoriesItems);
  };
  const onHandleClickPrevCategory = () => {
    categories.map((item, index) => {
      if (item.id === currentCategory?.id) {
        if (index !== 0) {
          setCurrentCategory(categories[ index - 1 ]);
        } else [ setCurrentCategory(categories[ categories.length - 1 ]) ];
      }
    });
    setCategoriesData(categoriesItems);
  };
  const accessoriesSwiperOptions = {
    slidesPerView: adaptiveHandler(5, 3.2, 2, isMobile, isTablet),
    spaceBetween: 23,
  };
  useEffect(() => {
    setCategoriesData(categoriesItems);
  }, []);
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__head}>
        <Typography variant="titleText" weight="regular">
          Аксессуары
        </Typography>
        <div className={styles.main__head_btns}>
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="left"
            circled="true"
            onClick={onHandleClickPrevCategory}
          />
          <AppButton
            color="gray"
            right_icon="true"
            arrow_direction="right"
            circled="true"
            onClick={onHandleClickNextCategory}
          />
        </div>
      </div>
      <div className={styles.main__categories}>
        {categories.map((item, index) => {
          const isActive = item.id === currentCategory?.id;
          return (
            <div
              onClick={() => onHandleChangeCategory(item)}
              className={`${styles.categories__item} ${
                isActive && styles.categories__item_active
              }`}
              key={index}
            >
              <Typography
                variant="text"
                weight="regular"
                color={isActive ? 'orange' : 'black'}
              >
                {item.name}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className={styles.accessories}>
        <AppSwiper options={accessoriesSwiperOptions}>
          {categoryData?.map((item, index) => (
            <div key={index} className={styles.accessories__item}>
              <Image
                src={item.image}
                alt="Accessories image"
                className={styles.accessories__img}
              />
              <Typography variant="text" weight="regular">
                {item.name}
              </Typography>
            </div>
          ))}
        </AppSwiper>
      </div>
    </section>
  );
};

export default AccessoriesCarAvailable;
