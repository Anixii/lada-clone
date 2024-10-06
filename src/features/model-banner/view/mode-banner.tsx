import styles from './model-banner.module.scss';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import bannerBg from '@/shared/assets/images/banner-bg.png';
import { Typography } from '@/shared/ui/typography';
import { FC } from 'react';


const ModelBanner: FC = () => {
  return (
    <div className={styles.banner}>
      <MultiContainer>
        <div
          style={{ backgroundImage: `url(${bannerBg.src})` }}
          className={styles.bannerBlock}
        >
          <div className={styles.bannerText}>
            <Typography variant="subtitleSecond" weight="bold" color="white">
              Новая LADA Vesta седан
            </Typography>
            <Typography variant="subtitleSecond" weight="regular" color="white">
              Aвтомобиль, триумфально ворвавшийся в автоиндустрию, ставший
              легендарным и ярким представителем семейства ЛАДА. Именно он
              положил начало новой генерации автомобилей LADA.
            </Typography>
          </div>
        </div>
      </MultiContainer>
    </div>
  );
};

export default ModelBanner;
