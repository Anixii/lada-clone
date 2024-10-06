import carSedan from '@/shared/assets/images/cars/1.png';


export const tradeinDesiredCarItems = [
  {
    title: 'Семейство LADA',
    checkBoxes: [
      { label: 'Granta' },
      { label: 'Vesta' },
      { label: 'Largus' },
      { label: 'Nive' },
      { label: 'Legend' },
    ],
  },
  {
    title: 'Модель',
    checkBoxes: [
      { label: 'Седан' },
      { label: 'Лифтбек' },
      { label: 'Хэтчбэк' },
      { label: 'Drive action' },
      { label: 'Универсал' },
    ],
  },
  {
    title: 'Комплектация',
    checkBoxes: [
      { label: 'Standart' },
      { label: 'Classic\'24' },
      { label: 'Comfort\'24' },
      { label: 'Enjoy' },
    ],
  },
  {
    title: 'Цвет',
    checkBoxes: [
      { label: 'Ледниковый' },
      { label: 'Плутон' },
      { label: 'Сердолик' },
      { label: 'Платина' },
    ],
  },
];

export const testDriveRegItems = [
  { value: 'sedan', label: 'Седан', isActive: false, image: carSedan },
  { value: 'liftback', label: 'Лифтбек', isActive: false, image: carSedan },
  { value: 'cross', label: 'Cross', isActive: false, image: carSedan },
  { value: 'universal', label: 'Универсал', isActive: false, image: carSedan },
  { value: 'drive-active', label: 'Drive active', isActive: false, image: carSedan },
  { value: 'hatchback', label: 'Хэтчбек', isActive: false, image: carSedan },
];
