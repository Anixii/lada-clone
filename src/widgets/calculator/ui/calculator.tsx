/* eslint-disable react/no-unescaped-entities */
'use client';
import styles from './calculator.module.scss';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import plusIcon from '@/shared/assets/icons/plus-Icon.svg';
import minusIcon from '@/shared/assets/icons/minus-Icon.svg';
import Image from 'next/image';
import { FC, useState } from 'react';


const Calculator: FC = () => {
  const [ initialPayment, setInitialPayment ] = useState<number>(100000);
  const [ loanTerm, setLoanTerm ] = useState<number>(1);
  const interestRate = 0.14;

  const handleInitialPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialPayment(Number(e.target.value));
  };

  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(Number(e.target.value));
  };

  const handlePlus = () => {
    setInitialPayment(prev => prev + 100000);
  };

  const handleMinus = () => {
    setInitialPayment(prev => prev - 100000);
  };

  const monthlyPayment = initialPayment * (interestRate / 12) / (1 - Math.pow(1 + (interestRate / 12), -loanTerm * 12));

  const num = 9;

  return (
    <div className={`${styles.calculator} container`}>
      <MultiContainer class_name={styles.calculatorWidget}>
        <div className={styles.calculatorHead}>
          <Typography variant='h2' color='black' weight='regular'>
              Автомобиль с выгодой
          </Typography>
        </div>
        <div className={styles.calculatorContent}>
          <Typography className={styles.calculator__title} variant='h4' weight='regular' color='black'>
              Кредитный калькулятор
          </Typography>
          <div className={styles.calculatorItems}>
            <div className={styles.calculatorBlock}>
              <div className={styles.formGroup}>
                <label htmlFor='initialPayment'>
                  <Typography variant='text' color='gray' weight='regular'>
                Первоначальный взнос
                  </Typography>
                </label>
                <div className={styles.initialPayment}>
                  <Typography variant='subtitle' weight='regular'>
                    {initialPayment} ₽
                  </Typography>
                </div>
                <input
                  // eslint-disable-next-line max-len
                  style={{ borderRadius: '20px', background: `linear-gradient(to right, #FE7A3B ${(initialPayment / 5000000) * 100}%, #fff ${(initialPayment / 5000000) * 100}%)` }}
                  type='range'
                  id='initialPayment'
                  value={initialPayment}
                  onChange={handleInitialPaymentChange}
                  step={100000}
                  min={100000}
                  max={5000000}
                />
                <div className={styles.sliderTicks}>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                100 тыс.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                1 млн.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                2 млн.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                3 млн.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                4 млн.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                5 млн.
                  </Typography>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor='loanTerm'>
                  <Typography variant='text' color='gray' weight='regular'>
                Срок кредита
                  </Typography>
                </label>
                <Typography variant='subtitle' weight='regular'>
                  {loanTerm}
                </Typography>
                <input
                  // eslint-disable-next-line max-len
                  style={{ borderRadius: '20px', background: `linear-gradient(to right, #fff ${(loanTerm / num) * 100}%, #fff ${(loanTerm / num) * 100}%)` }}
                  type='range'
                  id='initialPayment'
                  value={loanTerm}
                  onChange={handleLoanTermChange}
                  step={2}
                  min={1}
                  max={13}
                />
                <div className={styles.sliderTicks}>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                1 год.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                3 года.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                5 лет.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                7 лет.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                9 лет.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                11 лет.
                  </Typography>
                  <Typography variant='textExtraSmall' weight='regular' color='gray'>
                13 лет.
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.calculatorResult}>
              <Typography
                className={styles.calculator__subtitle}
                variant='subtitleSecond'
                weight='regular'
                color='black'
              >
                Предложение по кредиту
              </Typography>
              <div className={styles.calculatorTotals}>
                <div className={styles.calculatorMonthPayment}>
                  <Typography variant='text' weight='regular' color='black'>
                    Ежемесячный платеж
                  </Typography>
                  <div className={styles.calculatorController}>
                    <div className={styles.calculatorBtn} onClick={handlePlus}>
                      <Image src={plusIcon.src} alt='plus icon' width={16} height={16}/>
                    </div>
                    <Typography variant='subtitleSecond' weight='bold' color='black'>
                      {monthlyPayment.toFixed(0)} ₽
                    </Typography>
                    <div className={styles.calculatorBtn} onClick={handleMinus}>
                      <Image src={minusIcon.src} alt='minus icon' width={16} height={16}/>
                    </div>
                  </div>
                </div>
                <div className={styles.calculatorPercent}>
                  <Typography variant='text' weight='regular' color='black'>
                    Процентная ставка
                  </Typography>
                  <Typography variant='subtitleSecond' color='black' weight='bold'>
                    {(interestRate * 100).toFixed(0)} %
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <Typography variant='textHyperSmall' weight='regular' color='gray'>
            {/* eslint-disable-next-line max-len */}
            Расчет ежемесячного платежа, сформированный при помощи кредитного калькулятора, является предварительным, подлежит уточнению перед или непосредственно при заключении договоров кредитования/страхования, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 ч.2 Гражданского кодекса Российской Федерации. Для получения подробной информации обращайтесь к официальным дилерам АО ''АВТОВАЗ''.
          </Typography>
        </div>
      </MultiContainer>
    </div>
  );
};

export default Calculator;
