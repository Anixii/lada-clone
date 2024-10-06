import styles from './leader.module.scss';
import { Typography } from '@/shared/ui/typography';
import LeaderCard, { ILeaderCard } from '@/entities/leader-card/leader-card';
import cardImage from '@/shared/assets/images/carInStock.png';


const subtitles = {
  // eslint-disable-next-line max-len
  one: 'На российском рынке автомобили LADA пользуются заслуженно высокой популярностью. Автолюбители и профессиональные водители доверяют качеству продукции крупнейшего производителя АО «АВТОВАЗ», что в сочетании с доступной ценой позволяет купить выгодно и со многими преимуществами новый автомобиль LADA в автосалоне официального дилера.',
  // eslint-disable-next-line max-len
  two: 'Каждому клиенту дилерского центра «Интей Лада» предоставляется весь необходимый спектр услуг: гарантийное и сервисное обслуживание любой сложности, индивидуальный подбор программы кредитования благодаря налаженным взаимоотношениям с банками-партнерами компании, уникальная система страхования и оформления всех необходимых документов на автомобиль непосредственно в дилерском центре, дополнительные финансовые программы, лизинг и услуга trade-in/обмен.',
};

const cards: ILeaderCard[] = new Array(3).fill({
  title: 'Трейд-ин',
  image: cardImage,
  url: '#',
});

const Leader = () => {
  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.title}>
          <Typography variant='h2' weight='regular'>
            Интей Лада - Дилер LADA #1 в России
          </Typography>
          <div className={styles.subtitle}>
            <Typography variant='text' weight='regular'>
              {subtitles.one}
            </Typography>
            <Typography variant='text' weight='regular'>
              {subtitles.two}
            </Typography>
          </div>
        </div>
        <div className={styles.cards}>
          {cards.map((el, i) => (
            <LeaderCard key={el.title + i} title={el.title} image={el.image} url={el.url}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leader;
