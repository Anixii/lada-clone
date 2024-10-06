'use client';
import styles from './accordion-second.module.scss';
import { Typography } from '../../typography';
import arrow from '@/shared/assets/icons/arrow-left-black.svg';
import React, { FC, ReactNode, useState } from 'react';
import Image from 'next/image';


interface IAccordionSecond {
  title?: string;
  children: ReactNode;
  classname?: string,
  intialOpen?: boolean
}

const AccordionSecond: FC<IAccordionSecond> = (props) => {
  const { title, children, classname, intialOpen = true } = props;
  const [ isOpen, setIsOpen ] = useState(intialOpen);
  const [ isAnimating, setIsAnimating ] = useState(false);

  const toggleAccordion = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className={classname ? classname : styles.accordion}>
      <div onClick={toggleAccordion} className={styles.title}>
        <Typography variant='text' weight='bold'>
          {title && title}
        </Typography>
        <div className={styles.icon}>
          <Image
            src={arrow}
            alt='arrow_icon'
            className={isOpen ? styles.iconOpen : styles.iconClose}
          />
        </div>
      </div>
      <div className={isAnimating ? (isOpen ? styles.open : styles.closing) : (isOpen ? styles.open : styles.close)}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSecond;
