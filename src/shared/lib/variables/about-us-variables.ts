import discountIcon from '@/shared/assets/icons/discount.svg';
import carIcon from '@/shared/assets/icons/car.svg';
import guaranteeIcon from '@/shared/assets/icons/guarantee.svg';
import wheelIcon from '@/shared/assets/icons/wheel-orange-icon.svg';
import chekMarkIcon from '@/shared/assets/icons/check-mark-orange-icon.svg';
import serviceIcon from '@/shared/assets/icons/sevice-orange-icon.svg';
import increaseIcon from '@/shared/assets/icons/increase-orange-icon.svg';

import car1 from '@/shared/assets/images/cars/corporates-cars/car1.svg';
import car2 from '@/shared/assets/images/cars/corporates-cars/hatchback-lada-red.png';
import car3 from '@/shared/assets/images/cars/corporates-cars/car3.svg';
import car4 from '@/shared/assets/images/cars/corporates-cars/SUV-lada-white.png';
import { IAdvantagesItems } from '@/shared/types/types';


export const aboutUsCarsSaleItems = [
  { image: car1, text: 'Седан' },
  { image: car2, text: 'Хэтчбек' },
  { image: car3, text: 'Лифтбек' },
  { image: car4, text: 'Внедорожник' },
];
export const aboutUsAdvantages: Array<IAdvantagesItems> = [
  {
    subtitle: `Мы предлагаем автомобили на максимально выгодных 
    условиях: гарантируем прозрачность сделки и более низкую цену.`,
    image: increaseIcon,
  },
  {
    subtitle:
      'В Интей Лада всегда в наличии и во всех комплектациях вся линейка LADA',
    image: carIcon,
  },
  {
    subtitle: `Поддерживаем Ваш автомобиль на протяжении всего срока эксплуатации: проводим диагностику, ТО, 
    ремонт и профилактику в удобное для Вас время и на оптимальных условиях.`,
    image: serviceIcon,
  },
  {
    subtitle: `Помогаем приобрести автомобиль в кредит или в рассрочку
     в ведущих банках России и застраховать автомобиль от всех видов рисков.`,
    image: chekMarkIcon,
  },
  {
    subtitle: `Дарим покупателю дисконтную карту, дающую право на 10%-ную скидку на 
      сервисное обслуживание автомобиля и покупку запчастей.`,
    image: discountIcon,
  },
  {
    subtitle: `Устанавливаем любое дополнительное сертифицированное 
      оборудование на Ваш автомобиль в собственной тюнинг-студии.`,
    image: wheelIcon,
  },
  {
    subtitle: 'Устанавливаем только оригинальные запасные части и аксессуары.',
    image: guaranteeIcon,
  },
];
