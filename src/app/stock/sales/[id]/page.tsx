/* eslint-disable max-len */
import { RequestForm } from '@/features/request-form';
import { DefineNewsBlock } from '@/widgets/define-news';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import React from 'react';


const StockSalesDetails = () => {
  return (
    <>
      <Header variant="white__variant" />
      <DefineNewsBlock
        date="28 июня 2024 - 31 июля 2024"
        title="Автоматическая выгода"
        description={`<strong>САМЫЙ СЕМЕЙНЫЙ И САМЫЙ УНИВЕРСАЛЬНЫЙ АВТОМОБИЛЬ — ТЕПЕРЬ И САМЫЙ ВЫГОДНЫЙ!</strong><br/>
Новая LADA Vesta SW с выгодой до 120 тысяч рублей — уникальные условия действуют для всех, кто до 31.07.2024 приобретает автомобиль в кредит по программам LADA Finance по схеме трейд-ин*. По акции доступна LADA Vesta SW с автоматической трансмиссией от 1 599 000 руб.
Подробные условия акции по телефону: +7 (812) 565 93 58`}
        image={[ 'https://static.lada.ru/images/v6/press-releases/LADA%20Largus%20%281%29.jpg' ]}
      />
      <div className="container">
        <RequestForm
          isSelectActive={false}
          subtitle="Отправьте нам заявку и мы свяжемся с вами сразу в день обращения"
          title="Заявка на обратный звонок"
        />
      </div>
      <NewCarsLada isFull={true}/>
    </>
  );
};

export default StockSalesDetails;
