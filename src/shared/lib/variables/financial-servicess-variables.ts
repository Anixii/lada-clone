/* eslint-disable max-len */
import { IAdvantagesItems } from '@/shared/types/types';
import insuranceIcon from '@/shared/assets/icons/increase-orange-icon.svg';
import guaranteeIcon from '@/shared/assets/icons/guarantee.svg';
import discountIcon from '@/shared/assets/icons/discount.svg';
import checkMarkIcon from '@/shared/assets/icons/check-mark-orange-icon.svg';
import carIcon from '@/shared/assets/icons/car.svg';
import granta from '@/shared/assets/images/cars/granta-white.png';
import vesta from '@/shared/assets/images/cars/corporates-cars/car3.svg';
import niva from '@/shared/assets/images/cars/corporates-cars/SUV-lada-white.png';
import largus from '@/shared/assets/images/cars/largus-black.png';


export const leasingAdvantagesItems: Array<IAdvantagesItems> = [
  {
    title: 'Гибкие условия лизинга',
    subtitle:
      'Вы можете выбрать наиболее удобный режим лизинговых платежей, начального взноса и стоимости выкупа, а также срок лизинга.',
    image: insuranceIcon,
  },
  {
    title: 'Выгодные условия',
    subtitle:
      'Вы оплачиваете из собственных средств только первичный взнос, остальное доплачивает лизинговая компания.',
    image: discountIcon,
  },
  {
    title: 'Экономия средств',
    subtitle:
      'Лизинг позволяет экономить за счет возможности зачета НДС, а также за счет снижения налогооблагаемой базы при расчете налога на прибыль.',
    image: checkMarkIcon,
  },
  {
    title: 'Выбор баланса автомобиля в лизинге',
    subtitle:
      'Автомобиль может учитываться либо на балансе лизингодателя, либо на балансе Вашей компании.',
    image: guaranteeIcon,
  },
  {
    title: 'Налоговые льготы в действии',
    subtitle:
      'Механизм ускоренной амортизации при лизинге позволяет Вам использовать существующие налоговые льготы.',
    image: carIcon,
  },
];

export const leasingCarsItems = [
  { title: 'Granta', image: granta },
  { title: 'Vesta', image: vesta },
  { title: 'Largus', image: largus },
  { title: 'Niva', image: niva },
];

export const insuranceAdvantagesItems: Array<IAdvantagesItems> = [
  {
    title: 'Документы не нужны',
    subtitle: 'При продлении страховки не нужно документов',
    image: carIcon,
  },
  {
    title: 'Выгоды от LADA',
    subtitle: 'Индивидуальные выгоды от автоцентра',
    image: insuranceIcon,
  },
  {
    title: 'Удалённое страхование',
    subtitle: 'Центр страхового урегулирования - удаленное урегулирование',
    image: guaranteeIcon,
  },
  {
    title: 'Экономия времени',
    subtitle:
      'Оформление страховки во время оформления машины - это экономия времени: не нужно никуда ехать',
    image: checkMarkIcon,
  },
];
export const creditAdvantagesItems: Array<IAdvantagesItems> = [
  {
    title: 'Высокий процент одобрения',
    subtitle: 'Короткие сроки рассмотрения заявлений и высокий процент одобрения',
    image: insuranceIcon,
  },
  {
    title: 'Выгодные условия',
    subtitle: 'Минимальный первый взнос по кредиту: от 0%',
    image: discountIcon,
  },
  {
    title: 'Экономия времени',
    subtitle: 'Оформление полисов ОСАГО и КАСКО на месте',
    image: checkMarkIcon,
  },
  {
    title: 'LADA: Finance и Finance Plus',
    subtitle:
      'Программа автокредитования LADA Finance /LADA Finance Plus',
    image: guaranteeIcon,
  },
  {
    title: 'Выгодные предложения',
    subtitle:
      'Специальные кредитные программы на автомобили с пробегом',
    image: carIcon,
  },
];

export const financialServicesSelectItems = [
  { value: 'credit', label: 'Кредит' },
  { value: 'leasing', label: 'Лизинг' },
  { value: 'insurance', label: 'Страхование' },
];
