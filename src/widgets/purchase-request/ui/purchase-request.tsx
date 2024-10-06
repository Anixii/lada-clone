import styles from './purchase-request.module.scss';
import AppButton from '@/shared/ui/button/ui/button';
import { Typography } from '@/shared/ui/typography';
import { FC } from 'react';


const PurchaseRequest: FC = () => {
  return (
    <div className={`${styles.purchase} container`}>
      <form className={styles.purchaseForm}>
        <Typography variant="h4" color="black" weight="regular">
          Заявка на покупку
        </Typography>
        <Typography variant="text" color="black" weight="regular">
          Отправьте нам заявку и мы свяжемся с вами сразу в день обращения
        </Typography>
        <div className={styles.purchaseInputs}>
          <div className={styles.purchaseInput}>
            <label htmlFor="name">
              <Typography variant="text" color="black" weight="regular">
                Фамилия,Имя
              </Typography>
            </label>
            <input type="text" id="name" placeholder="Александров Николай" />
          </div>
          <div className={styles.purchaseInput}>
            <label htmlFor="name">
              <Typography variant="text" color="black" weight="regular">
                Интересующая модель
              </Typography>
            </label>
            <input type="select" id="name" placeholder="Модель" />
          </div>
          <div className={styles.purchaseInput}>
            <label htmlFor="name">
              <Typography variant="text" color="black" weight="regular">
                Номер телефона
              </Typography>
            </label>
            <input type="text" id="name" placeholder="+7(___)___-__-__" />
          </div>
          <div className={styles.purchaseInput}>
            <label htmlFor="name">
              <Typography variant="text" color="black" weight="regular">
                Комплектация
              </Typography>
            </label>
            <input type="text" id="name" placeholder="Комплектация" />
          </div>
        </div>
        <div className={styles.purchaseBtn}>
          <AppButton variant="primary">Отправить заявку</AppButton>
          <Typography variant="textExtraSmall" weight="regular" color="gray">
            * Отправляя данную форму Вы даёте свое согласие на обработку
            персональных данных
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default PurchaseRequest;
