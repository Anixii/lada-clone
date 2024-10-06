import styles from './tradein-desired-car.module.scss';
import { tradeinDesiredCarItems } from '@/shared/lib/variables/step-flow-form-items';
import { Typography } from '@/shared/ui/typography';


const TradeinDesiredCar = () => {
  return (
    <article className={styles.main}>
      <div className={styles.main__title}>
        <Typography weight="bold" variant="subtitle">
          Выберите желаемый автомобиль
        </Typography>
      </div>
      <form className={styles.main__form}>
        {tradeinDesiredCarItems.map((item, index) => (
          <div key={index} className={styles.form__item}>
            <div className={styles.form__title}>
              <Typography variant="subtitle" weight="regular">
                {item.title}
              </Typography>
            </div>
            <div className={styles.form__checkboxes}>
              {item.checkBoxes.map((itemCheckbox, index) => (
                <label key={index} className={styles.checkboxes__item}>
                  <input name={`${item.title}`} type="radio" />
                  <Typography variant="text" weight="regular">
                    {itemCheckbox.label}
                  </Typography>
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
    </article>
  );
};

export default TradeinDesiredCar;
