'use client';
import styles from './account-edit.module.scss';
import { IAccountEditFormType } from '../types/account-edit';
import { Typography } from '@/shared/ui/typography';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';


const AccountEdit = () => {
  const { handleSubmit, register } = useForm<IAccountEditFormType>({
    defaultValues: {
      fullname: 'Александров Николай',
      phoneNumber: '+70949030309',
    },
  });
  const [ isDisabled, setDisabled ] = useState(true);
  const onSubmit: SubmitHandler<IAccountEditFormType> = () => {};
  return (
    <section className={styles.main}>
      <div className={styles.main__title}>
        <Typography variant="h2" weight="regular">
          Редактирование
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.main__form}>
        <label className={styles.form__item}>
          <Typography variant="text" weight="regular">
            Фамилия Имя*
          </Typography>
          <input
            {...register('fullname', { required: true })}
            className={styles.form__item__input}
            type="text"
            required
            disabled={isDisabled}
          />
        </label>
        <label className={styles.form__item}>
          <Typography variant="text" weight="bold">
            Номер телефона
          </Typography>
          <input
            required
            {...register('phoneNumber', { required: true })}
            className={styles.form__item__input}
            type="text"
            disabled={isDisabled}
          />
        </label>
        <div
          onClick={() => setDisabled((prev) => !prev)}
          className={styles.form__change}
        >
          <Typography color="orange" variant="text" weight="regular">
            Изменить
          </Typography>
        </div>
      </form>
    </section>
  );
};

export default AccountEdit;
