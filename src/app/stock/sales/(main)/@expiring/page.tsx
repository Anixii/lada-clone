import styles from '../ui/sales.module.scss';
import { NewsCardItem } from '@/entities/news-card-item';
import { SalesItems } from '@/shared/lib/variables/stock-items';
import React from 'react';


const ExpiringSales = () => {
  return (
    <div className={`${styles.sales__list} container`}>
      {SalesItems.map((item, index) => (
        <NewsCardItem
          key={index}
          date={item.date}
          id={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

export default ExpiringSales;
