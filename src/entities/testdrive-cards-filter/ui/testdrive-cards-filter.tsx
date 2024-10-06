'use client';

import styles from './testdrive-cards-filter.module.scss';
import { useCategories } from '../model/use-categories';
import { Typography } from '@/shared/ui/typography';
import { testDriveRegItems } from '@/shared/lib/variables/step-flow-form-items';
import { Checkbox, Select } from 'antd';
import { useShallow } from 'zustand/react/shallow';
import Image from 'next/image';


const TestdriveCardsFilter = () => {
  const carsCategory = useCategories(useShallow((state) => state.cars));
  const setCategoryAC = useCategories((state) => state.setCategory);
  const onHandleChange = (value: string) => {
    setCategoryAC(value);
  };
  return (
    <article className={styles.main}>
      <label className={styles.main__filter}>
        <Typography variant="text" weight="regular">
          Выберите семейство
        </Typography>
        <Select
          className={styles.main__select}
          onChange={onHandleChange}
          placeholder="Семейство"
          options={testDriveRegItems}
        />
      </label>
      <div className={styles.main__cards}>
        {carsCategory.map((item, index) => (
          <label className={styles.card__item} key={index}>
            <Image className={styles.card__image} src={item.image} alt='Car image'/>
            <div className={styles.card__title}>
              <Typography weight="bold" variant="subtitle">
                {item.label}
              </Typography>
            </div>
            <Checkbox className={styles.card__checkbox}/>
          </label>
        ))}
      </div>
      <button className={styles.main__btn}>Далее</button>
    </article>
  );
};

export default TestdriveCardsFilter;
