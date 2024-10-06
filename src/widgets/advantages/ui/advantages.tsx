import styles from './advantages.module.scss';
import AdvantagesCard from '@/entities/advantages-card/advantages-card';
import { IAdvantagesItems } from '@/shared/types/types';
import React from 'react';


interface IAdvantagesProps {
  children?: React.ReactNode;
  advantagesItems: Array<IAdvantagesItems>;
  classNames?: string
}
const Advantages = ({
  children,
  advantagesItems,
  classNames,
}: IAdvantagesProps) => {
  return (
    <section className={`container ${styles.main}`}>
      <div className={styles.main__title}>{children}</div>
      <div className={`${styles.main__cards} ${classNames}`}>
        {advantagesItems.map((item, index) => (
          <AdvantagesCard
            key={index}
            image={item.image}
            subtitle={item.subtitle}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
