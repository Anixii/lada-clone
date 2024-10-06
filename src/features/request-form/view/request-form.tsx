import styles from './request-form.module.scss';
import { Typography } from '@/shared/ui/typography';
import { financialServicesSelectItems } from '@/shared/lib/variables/financial-servicess-variables';
import { Select } from 'antd';


interface IRequestFormProps {
  title: string;
  subtitle: string;
  isSelectActive: boolean;
}
const RequestForm = ({
  subtitle,
  title,
  isSelectActive,
}: IRequestFormProps) => {
  return (
    <form className={styles.main}>
      <div className={styles.main__text}>
        <Typography
          className={styles.main__title}
          variant="h4"
          weight="regular"
        >
          {title}
        </Typography>
        <Typography
          className={styles.main__subtitle}
          variant="text"
          weight="regular"
        >
          {subtitle}
        </Typography>
      </div>
      <div className={styles.main__form}>
        <label className={styles.form__item}>
          <Typography variant="text" weight="regular">
            Фамилия, Имя
          </Typography>
          <input
            required
            placeholder="Александров Николай"
            type="text"
            className={styles.form__item__input}
          />
        </label>
        <label className={styles.form__item}>
          <Typography variant="text" weight="regular">
            Номер телефона
          </Typography>
          <input
            required
            placeholder="+7(___)___-__-__"
            type="text"
            className={styles.form__item__input}
          />
        </label>
        {isSelectActive && (
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Интересующая услуга
            </Typography>
            <Select
              placeholder="Выберите услугу"
              options={financialServicesSelectItems}
              className={styles.form__item__select}
            />
          </label>
        )}
      </div>
      <div className={styles.main__bottom}>
        <button className={styles.main__btn}>Отправить заявку</button>
        <Typography variant="textExtraSmall" weight="regular" color="gray">
          * Отправляя данную форму Вы даёте свое согласие на обработку
          персональных данных
        </Typography>
      </div>
    </form>
  );
};

export default RequestForm;
