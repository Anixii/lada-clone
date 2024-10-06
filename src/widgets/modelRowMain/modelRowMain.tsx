import styles from './modelRowMain.module.scss';
import { Typography } from '@/shared/ui/typography';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import AppButton from '@/shared/ui/button/ui/button';


const ModelRowMain = () => {
  return (
    <div className={styles.modelRowMain} id='main'>
      <MultiContainer>
        <div className={styles.modelRowText}>
          <Typography variant="h2" weight="regular" color="white">
            Новая LADA Vesta Седан
          </Typography>
          <Typography variant="h4" weight="regular" color="orange">
            от 1 239 900 ₽
          </Typography>
          <Typography variant="text" weight="regular" color="white">
            от 16 991 ₽ / мес
          </Typography>
        </div>
        <div className={styles.modelRowButtons}>
          <AppButton variant='primary'>Заказать обратный звонок</AppButton>
          <AppButton variant='secondary'>Заказать обратный звонок</AppButton>
        </div>
      </MultiContainer>
    </div>
  );
};

export default ModelRowMain;
