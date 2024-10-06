import styles from './ticker-block.module.scss';
import { Typography } from '@/shared/ui/typography';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';


interface ITickerBlockItem {
  title?: string;
  subTitle?: string;
  image?: StaticImageData;
}
interface ITickerBlockProps {
  items: Array<ITickerBlockItem>;
}
const TickerBlock = ({ items }: ITickerBlockProps) => {
  return (
    <div className={styles.tickerBlock}>
      <Marquee className={styles.tickerWrapper} gradientWidth={0} speed={100}>
        {items.map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            {item.title && item.subTitle && (
              <>
                <Typography variant="subtitle" weight="bold">
                  {item.title}
                </Typography>
                <Typography variant="subtitle" weight="regular">
                  {item.subTitle}
                </Typography>
              </>
            )}
            {item.image && (
              <Image
                src={item.image}
                alt="Bank image"
                className={styles.tickerBlock__image}
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TickerBlock;
