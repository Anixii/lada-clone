import styles from './register-for-testdrive.module.scss';
import TestdriveCardsFilter from '@/entities/testdrive-cards-filter/ui/testdrive-cards-filter';
import { Typography } from '@/shared/ui/typography';


const RegisterForTestdrive = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main__title}>
        <Typography variant="subtitle" weight="bold">
          Запись на тест-драйв в дилерском центре {'Автоцентр Интей Лада'}
        </Typography>
      </div>
      <TestdriveCardsFilter/>
    </section>
  );
};

export default RegisterForTestdrive;
