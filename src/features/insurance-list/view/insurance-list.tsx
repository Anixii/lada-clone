import styles from './insurance-list.module.scss';
import { Typography } from '@/shared/ui/typography';


const InsuranceList = () => {
  return (
    <section className={`container ${styles.main}`}>
      <Typography
        className={styles.main__title}
        variant="subtitle"
        weight="bold"
      >
        Ваше транспортное средство может быть застраховано от следующих рисков:
      </Typography>
      <ul className={styles.main__list}>
        <li className={styles.list__item}>
          Хищение, угон или повреждение ТС в результате угона (попытки угона)
        </li>
        <li className={styles.list__item}>
          Ущерб автомобиля в результате ДТП, пожара, взрыва, стихийного
          бедствия, действий хулиганов и т.д.
        </li>
        <li className={styles.list__item}>
          Совокупность страховых рисков хищение и ущерб (полное КАСКО)
        </li>
        <li className={styles.list__item}>
          Ущерб дополнительному оборудованию, не входящему в стандартную
          комплектацию автомобиля и приобретаемого отдельно
        </li>
        <li className={styles.list__item}>
          Добровольное страхование гражданской ответственности
        </li>
        <li className={styles.list__item}>
          Несчастный случай - причинение вреда здоровью водителя и пассажиров
          автомобиля в результате дорожно-транспортного происшествия
        </li>
      </ul>
    </section>
  );
};

export default InsuranceList;
