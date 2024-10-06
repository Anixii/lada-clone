'use client';
import styles from './step-flow.module.scss';
import React, { Children, useState } from 'react';


interface IStepFlowProps {
  children: React.ReactNode;
  height?:string;
}
const StepFlow = ({ children }: IStepFlowProps) => {
  const [ tab ] = useState(0);
  const totalSteps = Children.count(children);
  const progressPercentage = ((tab + 1) / totalSteps) * 100;
  return (
    <section className={`container ${styles.main__wrapper}`}>
      <div className={styles.main}>
        <div className={styles.main__step} style={{ width: `${progressPercentage}%` }}>
        </div>
        <div className={styles.main__content}>
          {Children.toArray(children)[ tab ]}
        </div>
      </div>
    </section>
  );
};

export default StepFlow;
