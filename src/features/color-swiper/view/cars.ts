import whiteCar from '@/shared/assets/images/cars/1.png';
import redCar from '@/shared/assets/images/cars/2.png';
import brownCar from '@/shared/assets/images/cars/3.png';
import blueCar from '@/shared/assets/images/cars/4.png';
import grayCar from '@/shared/assets/images/cars/5.png';
import silverCar from '@/shared/assets/images/cars/6.png';
import platinaCar from '@/shared/assets/images/cars/7.png';
import blackCar from '@/shared/assets/images/cars/8.png';
import { StaticImageData } from 'next/image';


interface ICars {
    color: string
    image: StaticImageData
    name: string
}

export const carsArray: ICars[] = [
  {
    color: '#E0E7E8',
    image: whiteCar,
    name: 'Ледниковый',
  },
  {
    color: '#7C0505',
    image: redCar,
    name: 'Сердолик',
  },
  {
    color: '#3C3120',
    image: brownCar,
    name: 'Ангкор',
  },
  {
    color: '#162F58',
    image: blueCar,
    name: 'Блюз',
  },
  {
    color: '#374252',
    image: grayCar,
    name: 'Фантом',
  },
  {
    color: '#404040',
    image: silverCar,
    name: 'Плутон',
  },
  {
    color: '#E0DCDA',
    image: platinaCar,
    name: 'Платина',
  },
  {
    color: '#141414',
    image: blackCar,
    name: 'Маэстро',
  },
];
