'use client';

import styles from './account-support.module.scss';
import { IAccountSupportFormType } from '../types/account-support';
import { Typography } from '@/shared/ui/typography';
import { SubmitHandler, useForm } from 'react-hook-form';


const AccountSupport = () => {
  const { register, handleSubmit } = useForm<IAccountSupportFormType>();
  const onSubmit: SubmitHandler<IAccountSupportFormType> = () => {};
  return (
    <section className={styles.main}>
      <div className={styles.main__title}>
        <Typography weight="regular" variant="h2">
          Поддержка
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.main__form}>
        <label className={styles.main__form__item}>
          <Typography variant="text" weight="regular">
            Мобильный номер
          </Typography>
          <input
            {...register('phoneNumber', { required: true })}
            className={styles.main__form__item__number}
            type="text"
            required
            placeholder="+7 (___)___-__-__"
          />
        </label>
        <label className={styles.main__form__item}>
          <Typography variant="text" weight="bold">
            Сообщение
          </Typography>
          <textarea
            required
            {...register('message', { required: true })}
            className={styles.main__form__item__message}
            placeholder="Введите текст сообщения"
          />
        </label>
        <div className={styles.main__form__submit}>
          <button className={styles.form__btn}>Отправить</button>
        </div>
      </form>
    </section>
  );
};

export default AccountSupport;
