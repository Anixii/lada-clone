import styles from './model-row-hover.module.scss';
import HeaderModelRowCard, { IHeaderModelRowCard } from '@/entities/header-model-row-card/header-model-row-card';
import card_image from '@/shared/assets/images/blue-car.png';
import card_image_second from '@/shared/assets/images/green.png';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery';
import AppAccordion, { AccordionItemProps } from '@/shared/ui/accordion/ui/accordion';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';


const modelRowTabs: string[] = [ 'Vesta',
  'Granta',
  'Largus',
  'Niva',
  'Legend',
  'Архивные модели' ];

const cards: IHeaderModelRowCard[] = new Array(8).fill({
  img: card_image,
  name: 'Lada Vesta',
  price_starts: 'от 699 900 Р',
  price_ends: 'от 9 470 Р/мес*',
});

const cards_second: IHeaderModelRowCard[] = new Array(8).fill({
  img: card_image_second,
  name: 'Granta',
  price_starts: 'от 699 900 Р',
  price_ends: 'от 9 470 Р/мес*',
});

const ModelRowHover = () => {
  const [ activeTab, setActiveTab ] = useState<IHeaderModelRowCard[]>(cards);
  const isTablet = useMediaQuery('(max-width: 1200px)');

  const accordionItems: AccordionItemProps[] = modelRowTabs.map((el) => ({
    title: el,
    children: (
      <div className={styles.tabInner}>
        {el === 'Granta'
          ? cards_second.map((card, index) => (
            <HeaderModelRowCard
              key={index}
              img={card.img}
              price_ends={card.price_ends}
              price_starts={card.price_starts}
              name={card.name}
            />
          ))
          : cards.map((card, index) => (
            <HeaderModelRowCard
              key={index}
              img={card.img}
              price_ends={card.price_ends}
              price_starts={card.price_starts}
              name={card.name}
            />
          ))}
      </div>
    ),
    title_bold: true,
    with_plus: true,
  }));


  const handleSelectTab = (el: string) => {
    if (el === 'Granta') {
      setActiveTab(cards_second);
    } else {
      setActiveTab(cards);
    }
  };

  return (
    <div className={styles.modelRow}>
      {
        isTablet
          ?
          <AppAccordion items={accordionItems} classname={styles.accordion} childrenClassName={styles.accordionItem}/>
          :
          <div className={styles.modelRowInner}>
            {modelRowTabs.map((el, i) => (
              <div key={i} onClick={() => handleSelectTab(el)}>
                <Typography
                  variant='textBody'
                  weight='bold'
                  className={styles.hoverSubtitle}
                >
                  {el}
                </Typography>
              </div>
            ))}
          </div>
      }
      {
        !isTablet &&
        <div className={styles.tabInner}>
          {activeTab.map((el, i) => (
            <HeaderModelRowCard
              key={i}
              img={el.img}
              price_ends={el.price_ends}
              price_starts={el.price_starts}
              name={el.name}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default ModelRowHover;
