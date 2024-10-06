'use client';
import styles from './header.module.scss';
import ModelRowHover from './model-row-hover';
import headerLogo from '@/shared/assets/icons/Logo_header.svg';
import lk from '@/shared/assets/icons/lk.svg';
import burger_icon from '@/shared/assets/icons/burger-menu.svg';
import close_icon from '@/shared/assets/icons/close_icon.svg';
import { Typography } from '@/shared/ui/typography';
import { PATHS } from '@/shared/lib/variables/variables';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import BurgerMenu from '@/shared/ui/burger-menu/ui/burger-menu';
import AppAccordion, { AccordionItemProps } from '@/shared/ui/accordion/ui/accordion';
import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent, ReactNode, useState } from 'react';
import classNames from 'classnames';


interface IHeaderPropsType {
  variant?: 'black__variant' | 'transparent__variant' | 'white__variant';
}
interface ISubtitleElement {
  title: string;
  url?: string;
}

interface IListEl {
  [key: string]: {
    subtitles: ISubtitleElement[];
  };
}

const hoverElements: IListEl = {
  two: {
    subtitles: [
      {
        title: 'Авто в наличии',
        url: PATHS.CAR_AVAILABLE,
      },
      {
        title: 'Авто с пробегом',
        url: PATHS.USED_CAR,
      },
      { title: 'Трейд-ин', url: PATHS.TRADEIN },
      { title: 'Тест-драйв', url: PATHS.TEST_DRIVE },
      { title: 'Выкуп авто', url: PATHS.BUYOUT },
      { title: 'Аксессуары и запасные части' },
      { title: 'Корпоративные продажи', url: PATHS.CORPORATESALES },
    ],
  },
  three: {
    subtitles: [
      { title: 'Сервис', url: PATHS.SERVICE },
      { title: 'ТО', url: PATHS.MAINTENANCE },
      { title: 'Гарантийный ремонт', url: PATHS.REPAIR },
      { title: 'Эвакуатор', url: PATHS.TOW_TRUCK },
    ],
  },
  four: {
    subtitles: [
      { title: 'Кредит', url: PATHS.CREDIT },
      { title: 'Страхование', url: PATHS.INSURANCE },
      { title: 'Лизинг', url: PATHS.LEASING },
    ],
  },
  five: { subtitles: [ { title: 'Акции сервиса' }, { title: 'Акции отдела продаж', url: PATHS.STOCK_SALES } ] },
  six: {
    subtitles: [
      { title: 'О нас', url: PATHS.ABOUT_US },
      { title: 'Сотрудники', url: PATHS.EMPLOYEE },
      { title: 'Вакансии', url: PATHS.VACANCY },
      { title: 'Отзывы', url: PATHS.FEEDBACK },
    ],
  },
  seven: { subtitles: [ { title: 'Новости', url: PATHS.NEWS } ] },
};

const accordionElements: Omit<
  AccordionItemProps,
  'classname' | 'childrenClassName'
>[] = [
  {
    title: 'Модельный ряд',
    children: <ModelRowHover />,
  },
  {
    title: 'Покупателям',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.two.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  {
    title: 'Владельцам',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.three.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  {
    title: 'Финансовые услуги',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.four.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  {
    title: 'Акции',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.five.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  {
    title: 'О компании',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.six.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  {
    title: 'Новости',
    children: (
      <div className={classNames(styles.accordionFlexed)}>
        {hoverElements.seven.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="bold"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
];

interface IListElement {
  [key: string]: {
    title: string;
    url: string;
    content?: ReactNode;
  };
}

const listElements: IListElement = {
  one: {
    title: 'Модельный ряд',
    url: PATHS.MODEL_ROW,
    content: <ModelRowHover />,
  },
  two: {
    title: 'Покупателям',
    url: '',
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.two.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  three: {
    title: 'Владельцам',
    url: '',
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.three.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  four: {
    title: 'Финансовые услуги',
    url: '',
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.four.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  five: {
    title: 'Акции',
    url: '',
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.five.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  six: {
    title: 'О компании',
    url: '',
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.six.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
  seven: {
    title: 'Новости',
    url: PATHS.NEWS,
    content: (
      <div className={classNames(styles.flexed)}>
        {hoverElements.seven.subtitles.map((el, i) => (
          <Link href={el.url || '/'} key={i}>
            <Typography
              variant="textBody"
              weight="regular"
              className={styles.accordionSubtitle}
            >
              {el.title}
            </Typography>
          </Link>
        ))}
      </div>
    ),
  },
};

const list = Object.values(listElements);

const Header = ({ variant = 'black__variant' }: IHeaderPropsType) => {
  const [ currentHover, setCurrentHover ] = useState<ReactNode>(null);
  const isTablet = useMediaQuery('(max-width: 1200px)');

  const handleSetCurrentHover = (e: MouseEvent<HTMLLIElement>) => {
    const id = e.currentTarget.dataset.id;
    if (id !== undefined) {
      const index = Number(id);
      if (!isNaN(index)) {
        setCurrentHover(list[ index ].content);
      }
    }
  };

  const handleCurrentHoverClear = () => {
    setCurrentHover(null);
  };

  return (
    <header
      className={classNames(styles.header, styles[ variant ])}
      onMouseLeave={() => { handleCurrentHoverClear(); }}
    >
      <div className={`container ${styles.main}`}>
        <div className={styles.f}>
          <Link href={PATHS.MAIN}>
            <Image src={headerLogo} className={styles.header__logo} alt="header_logo" priority />
          </Link>
        </div>
        <ul className={styles.s}>
          {list.map((el, i) => (
            <Link key={el.title} href={el.url}>
              <li
                className={styles.li}
                onMouseEnter={handleSetCurrentHover}
                data-id={i}
              >
                <Typography variant="text" color="white" weight="regular">
                  {el.title}
                </Typography>
              </li>
            </Link>
          ))}
        </ul>
        <div className={styles.t}>
          <div className={styles.lkLogo}>
            <Link href={PATHS.AUTH}>
              <Image className={styles.lk__image} src={lk} alt="lk" />
            </Link>
          </div>
          {isTablet && (
            <BurgerMenu
              to="top"
              open_icon={burger_icon}
              close_icon={close_icon}
            >
              <div className={styles.burgerInner}>
                <AppAccordion
                  items={accordionElements}
                  classname={styles.accordionContent}
                  childrenClassName={styles.accordionItem}
                />
              </div>
            </BurgerMenu>
          )}
        </div>
      </div>
      {!isTablet && <div>{currentHover}</div>}
    </header>
  );
};

export default Header;
