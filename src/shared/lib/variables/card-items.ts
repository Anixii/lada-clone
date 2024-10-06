import hourglassesIcon from '@/shared/assets/icons/hourglass.svg';
import discountIcon from '@/shared/assets/icons/discount.svg';
import chatIcon from '@/shared/assets/icons/chat.svg';
import carIcon from '@/shared/assets/icons/car.svg';
import guaranteeIcon from '@/shared/assets/icons/guarantee.svg';
import { IAdvantagesItems } from '@/shared/types/types';


export const buyOutItems = [
  {
    title: 'Приезжаете к нам в офис или заказывайте услугу “Выездной выкуп”',
    subtitle: 'Приедем точно к оговоренному времени.',
  },
  {
    title: 'Мы проводим бесплатную экспресс-диагностику и оцениваем авто',
    subtitle: 'Далее мы оформляем документы и заключаем договор купли-продажи.',
  },
  {
    title: 'Без лишнего ожидания и проблем.',
    subtitle: 'Далее мы оформляем документы и заключаем договор купли-продажи.',
  },
];
export const TradeInItems = [
  {
    title: 'Предварителная оценка',
    subtitle:
      'Вы можете пройти онлайн форму оценки вашего автомобиля или оставить заявку в наш центр',
  },
  {
    title: 'Осмотр и диагностика',
    subtitle:
      'Наши сотрудники проведут осмотр автомобиля для уточнения предварительных расчетов стоимости',
  },
  {
    title: 'Выгодный обмен',
    subtitle: 'Вы получите новую LADA, оплатив разницу в цене автомобилей',
  },
];
export const tradeInAdvantages:Array<IAdvantagesItems> = [
  {
    title: 'Срочный выкуп',
    subtitle: 'Оформление договора купли-продажи в течение 15 минут',
    image: hourglassesIcon,
  },
  {
    title: 'Выгодные условия',
    subtitle:
      'Оценочная стоимость Вашего автомобиля идет в зачет части стоимости нового автомобиля',
    image: discountIcon,
  },
  {
    title: 'Полный комплекс услуг',
    subtitle: 'Вам не нужно искать покупателей и вести с ними переговоры',
    image: chatIcon,
  },
  {
    title: 'Новый автомобиль сразу',
    subtitle: 'Вам не нужно дожидаться реализации старого автомобиля',
    image: carIcon,
  },
  {
    title: 'Гарантия безопасности',
    subtitle: `Интей ЛАДА берет на себя все риски, связанные с продажей автомобиля: 
                изменение спроса, падение цены, больший срок реализации, 
                обман со стороны частных покупателей и т.д.`,
    image: guaranteeIcon,
  },
];
export const tradeInAnotherServicesItems = [
  {
    title: 'Кредит',
    subtitle: 'Приобретайте то, что нравится, а не то, на что хватает денег!',
    type: 'credit',
  }, {
    title: 'Страхование',
    subtitle:
      'Выгодные решения по финансированию автомобилей марки LADA для Вашей компании.',
    type: 'insurance',
  },
];
