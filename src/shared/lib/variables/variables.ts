import { IHeaderModelLinks, IPathTypes } from '@/shared/types/types';


export const BASE_URL = process.env.BASE_URL;

export const PATHS: IPathTypes = {
  MAIN: '/',
  MODEL_ROW: '/model-row',
  CAR_AVAILABLE: '/cars/car-available',
  USED_CAR: '/cars/used-car',
  STOCK_AUTO: '/stock-auto',
  AUTH: '/account',
  CUSTOMERS: '/customers',
  BUYOUT: '/customers/buyout',
  TRADEIN: '/customers/tradein',
  CORPORATESALES: '/customers/corporatesales',
  TEST_DRIVE: '/customers/test-drive',
  ACCESSORIES: '/customers/accessories',
  NEWS: '/news',
  EMPLOYEE: '/company/employee',
  VACANCY: '/company/vacancy',
  FEEDBACK: '/company/feedback',
  ABOUT_US: '/company/about-us',
  INSURANCE: '/financial-services/insurance',
  LEASING: '/financial-services/leasing',
  CREDIT: '/financial-services/credit',
  REPAIR: '/owners/repair',
  MAINTENANCE: '/owners/maintenance',
  SERVICE: '/owners/service',
  TOW_TRUCK: '/owners/tow-truck',
  STOCK_SALES: '/stock/sales',
};

export const modelHeaderLinks: IHeaderModelLinks[] = [
  {
    title: 'Цветовая гамма',
    href: '#color-swiper',
  },
  {
    title: 'Интерьер',
    href: '#interior',
  },
  {
    title: 'Экстерьер',
    href: '#exterior',
  },
  {
    title: 'Комплектация',
    href: '#specifications',
  },
  {
    title: 'Галерея',
    href: '#gallery',
  },
];

export const PagesBreadcrumb = [
  { path: 'customers', title: 'Покупателям' },
  { path: 'corporatesales', title: 'Корпоративные продажи' },
  { path: 'buyout', title: 'Выкуп авто' },
  { path: 'test-drive', title: 'Тест-драйв' },
  { path: 'tradein', title: 'Трейд-ин' },
  { path: 'news', title: 'Новости' },
  { path: 'company', title: 'О компании' },
  { path: 'employee', title: 'Сотрудники' },
  { path: 'vacancy', title: 'Вакансии' },
  { path: 'feedback', title: 'Отзывы' },
  { path: 'about-us', title: 'О нас' },
  { path: 'financial-services', title: 'Финансовые услуги' },
  { path: 'insurance', title: 'Страхование' },
  { path: 'leasing', title: 'Лизинг' },
  { path: 'credit', title: 'Кредит' },
  { path: 'owners', title: 'Владельцам' },
  { path: 'repair', title: 'Гарантийный ремонт' },
  { path: 'maintenance', title: 'Техническое обслуживание' },
  { path: 'service', title: 'Сервис' },
  { path: 'tow-truck', title: 'Эвакуатор' },
  { path: 'stock', title: 'Акции' },
  { path: 'sales', title: 'Акции отдела продаж' },
  { path: 'accessories', title: 'Аксессуары и запасные части' },
];
