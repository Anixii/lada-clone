import styles from './off-dealer.module.scss';
import { Typography } from '@/shared/ui/typography';
import OffDealerCard, { IOffDealerCard } from '@/entities/off-dealer-card/off-dealer-card';
import twentyTwo from '@/shared/assets/images/22.svg';
import lada from '@/shared/assets/images/PNG_Lada.svg';
import yandex from '@/shared/assets/images/PNG_Yandex.svg';
import shield from '@/shared/assets/images/PNG_shield.svg';
import classNames from 'classnames';


const cards: IOffDealerCard[] = [
  {
    title: '4,3',
    img: yandex,
    top: true,
  },
  {
    title: 'года на рынке',
    img: twentyTwo,
    top: false,
  },
  {
    title: '4,2',
    img: lada,
    top: true,
  },
  {
    title: 'Надежный дилер',
    img: shield,
    top: false,
  },
];

const OffDealer = () => {
  return (
    <div className={classNames(styles.main, 'container')}>
      <div className={styles.title}>
        <Typography variant='h4' weight='regular' className={styles.title}>
        Официальный дилер LADA в Санкт-Петербурге
        </Typography>
      </div>
      <div className={styles.cards}>
        {
          cards.map((el, i) => (
            <OffDealerCard key={i} img={el.img} title={el.title} top={el.top}/>
          ))
        }
      </div>
    </div>
  );
};

export default OffDealer;
