'use client';
import styles from './accessories-filter.module.scss';
import { IAccessoriesCategory } from '../model/types/use-accessories';
import { useAccessories } from '../model/use-accessories/use-accessories';
import { categoriesItems } from '@/features/accessories-car-available/view/accessories-car-available';
import { Typography } from '@/shared/ui/typography';
import { AppPagination } from '@/shared/ui/pagination';
import Image from 'next/image';
import { useEffect } from 'react';


const AccessoriesFilter = () => {
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
  useEffect(() => {
    setCategoriesData(categoriesItems);
  }, []);
  const onHandleChangeCategory = (id: IAccessoriesCategory) => {
    setCurrentCategory(id);
    setCategoriesData(categoriesItems);
  };
  return (
    <section className={`${styles.main} container`}>
      <div className={styles.main__head}>
        <Typography
          className={styles.main__title}
          weight="regular"
          variant="h4"
        >
          Аксессуары
        </Typography>
        <div className={styles.main__filters}>
          <div className={styles.main__search}>
            <input placeholder='Найти аксессуар' type="text" className={styles.search__input} />
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
        </div>
      </div>
      <div className={styles.accessories__list}>
        {categoryData?.map((item, index) => (
          <div key={index} className={styles.accessories__item}>
            <Image
              className={styles.accessories__image}
              src={item.image}
              alt="Accessories Photo"
            />
            <div className={styles.accessories__text}>
              <Typography
                className={styles.accessories__article}
                variant="text"
                color="gray"
                weight="regular"
              >
                Артикул: 99999219004200
              </Typography>
              <Typography
                className={styles.accessories__name}
                variant="text"
                weight="regular"
              >
                {item.name}
              </Typography>
              <Typography
                className={styles.accessories__article}
                variant="text"
                weight="bold"
              >
                Описание товара
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.main__pagination}>
        <AppPagination currentPage={1} totalPages={50}></AppPagination>
      </div>
    </section>
  );
};

export default AccessoriesFilter;
