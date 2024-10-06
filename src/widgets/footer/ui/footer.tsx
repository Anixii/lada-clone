'use client';
/* eslint-disable max-len */
import styles from './footer.module.scss';
import { Typography } from '@/shared/ui/typography';
import LogoHeader from '@/shared/assets/icons/Logo_footer.svg';
import vk from '@/shared/assets/icons/VK.svg';
import whatsapp from '@/shared/assets/icons/Whatsapp.svg';
import zen from '@/shared/assets/icons/Zen.svg';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import { AppAccordion } from '@/shared/ui/accordion';
import { AccordionItemProps } from '@/shared/ui/accordion/ui/accordion';
import { adaptiveHandler } from '@/shared/lib/helpers/helpers';
import Image from 'next/image';


interface IListElement {
  [key: string]: {
    title: string,
    subtitles: string[]
  }
}

const listElements: IListElement = {
  one: {
    title: 'Модельный ряд',
    subtitles: [ 'Модели машин' ],
  },
  two: {
    title: 'Покупателям',
    subtitles: [ 'Авто в наличии',
      'Авто с пробегом',
      'Трейд-ин',
      'Тест-драйв',
      'Выкуп авто',
      'Аксессуары и запасные части',
      'Корпоративные продажи' ],
  },
  three: {
    title: 'Владельцам',
    subtitles: [ 'Сервис',
      'ТО',
      'Гарантийный ремонт',
      'Тюнинг' ],
  },
  four: {
    title: 'Финансовые услуги',
    subtitles: [ 'Кредит',
      'Страхование',
      'Лизинг' ],
  },
  five: {
    title: 'Акции',
    subtitles: [ 'Акции сервиса', 'Акции отдела продаж' ],
  },
  six: {
    title: 'О компании',
    subtitles: [ 'О компании',
      'Сотрудники',
      'Вакансии',
      'Отзывы' ],
  },
  seven: {
    title: 'Новости',
    subtitles: [ '' ],
  },
};

const lists = Object.values(listElements);

const accordionItems: Omit<AccordionItemProps, 'classname' | 'childrenClassName'>[] = Object.values(listElements).map((item) => ({
  title: item.title,
  children: (
    <ul className={styles.accordionInner}>
      {item.subtitles.map((subtitle, index) => (
        <Typography variant='text' weight='regular' key={index}>{subtitle}</Typography>
      ))}
    </ul>
  ),
  title_bold: true,
}));

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <footer className={styles.main}>
      <div className='container'>
        <div className={styles.f}>
          <div className={styles.logo}>
            <Image src={LogoHeader} alt='Logo' draggable={false}/>
          </div>
          {
            !isMobile ?
              <div className={styles.lists}>
                {lists.map(el => (
                  <ul key={el.title} className={styles.ul}>
                    <Typography variant='textBody' weight='bold' className={styles.title}>
                      {el.title}
                    </Typography>
                    {el.subtitles.map(item => (
                      <li key={item} className={styles.li}>
                        <Typography variant='text' weight='regular'>
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              :
              <AppAccordion
                items={accordionItems}
                classname={styles.accordionContent}
                childrenClassName={styles.accordionItem}
              />
          }
        </div>
        {!isMobile && <div className={styles.hr}/>}
        <div className={styles.s}>
          <div>
            <Typography variant={adaptiveHandler('text', 'text', 'textExtraSmall', isMobile, isMobile)} weight='regular'>
              Автоцентр Интей Лада
            </Typography>
            <Typography variant={adaptiveHandler('text', 'text', 'textExtraSmall', isMobile, isMobile)} weight='regular'>
              Санкт-Петербург, проспект Коломяжский , д.30, корп.1.
            </Typography>
            <Typography variant='subtitle' weight='bold'>
              +7 (812) 565 68 57
            </Typography>
          </div>
          {isMobile && <div className={styles.hr}/>}
          <div className={styles.logos}>
            <div className={styles.social_logo}>
              <Image src={vk} alt='vk-logo'/>
            </div>
            <div>
              <Image src={whatsapp} alt='whatsapp-logo'/>
            </div>
            <div>
              <Image src={zen} alt='zen-logo'/>
            </div>
          </div>
        </div>
        <div className={styles.hr}/>
        <div className={styles.t}>
          <div className={styles.tl}>
            <Typography variant={adaptiveHandler('text', 'text', 'textExtraSmall', isMobile, isMobile)} weight='regular' color='footer'>
              Правовая информация <br />
              ООО &quot;Интей Лада&quot;, ИНН: 7814334414, ОГРН: 1067847072083
            </Typography>
            <Typography variant={adaptiveHandler('text', 'text', 'textExtraSmall', isMobile, isMobile)} weight='regular' color='footer'>
              Политика обработки персональных данных
            </Typography>
          </div>
          <div className={styles.tr}>
            <Typography variant={adaptiveHandler('textSmall', 'textSmall', 'textExtraSmall', isMobile, isMobile)} weight='regular' color='footer'>
            * - Рекомендованные розничные цены указаны с учетом максимальной выгоды по действующим акциям <br/> Информация о технических характеристиках, составе комплектаций, цветовой гамме и рекомендованных розничных ценах, опубликованных на сайте официального дилера LADA
            intei.ru, носит справочный характер и ни при каких обстоятельствах не является публичной офертой, определяемой положениями Статьи 437 ч.2 Гражданского кодекса Российской Федерации. Для получения подробной информации обращайтесь к официальному дилеру {isMobile && <br/>} ООО &quot;Автоцентр Интей Лада&quot;.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
