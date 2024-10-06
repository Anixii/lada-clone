/* eslint-disable max-len */
import styles from './exterior-block.module.scss';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import exteriorImage from '@/shared/assets/images/exterier-image.png';
import Image from 'next/image';
import { FC } from 'react';


const ExteriorBlock: FC = () => {
  return (
    <div className={styles.exteriorBlock} id='exterior'>
      <MultiContainer>
        <div className={styles.exteriorHeadText}>
          <Typography variant='h2' color='black' weight='regular'>
            Экстерьер
          </Typography>
        </div>
        <div className={styles.exteriorContent}>
          <div className={styles.exteriorImageBlock}>
            <div className={styles.exteriorImage}>
              <Image src={exteriorImage.src} alt='exterior image' width={772} height={400}/>
            </div>
            <Typography variant='text' color='black' weight='regular'>
              За счет приподнятой подоконной линии, удлиненного капота и покатой крыши автомобиль смотрится динамично и атлетично, не имея конкурентов в своем классе. Это самый большой автомобиль, исходя из параметров длины, ширины, высоты.
            </Typography>
          </div>
          <div className={styles.exteriorText}>
            <Typography variant='text' color='black' weight='regular'>
                При создании автомобиля ЛАДА Веста конструкторы особенно учли дорожные и суровые климатические условия:
                двигатель уверенно запускается при температуре до -30°,
                в конструкции дверных замков предусмотрена защита их от замерзания,
                установлена функция электроподогрева сидений, стекол и зеркал,
                при открывании дверей исключается попадание снега в салон.
                Комплектаций с различными типами моторов три: Классик, Комфорт и Люкс, которые по желанию покупателя дополняются пакетами Старт, Оптима и ММ.
                Это самый первый автомобиль, в котором был воплощен новый фирменный х-стиль LADA.
            </Typography>
            <div className={styles.line}/>
            <div className={styles.exteriorSubtitles}>
              <Typography variant='text' color='black' weight='regular'>Выделенный тёмный цвет в  облицовке радиатора</Typography>
              <Typography variant='text' color='black' weight='regular'>Подштамповка по бокам</Typography>
              <Typography variant='text' color='black' weight='regular'>Световозвращателях задних фонарей </Typography>
            </div>
          </div>
        </div>
      </MultiContainer>
    </div>
  );
};

export default ExteriorBlock;
