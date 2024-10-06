'use client';
import styles from './account-service-request.module.scss';
import { IAccountServiceFormType } from '../types/account-service';
import { Typography } from '@/shared/ui/typography';
import {
  accountServiceRequestCheckboxes,
  accountServiceRequestSelectItems,
} from '@/shared/lib/variables/account-variables';
import { Select } from 'antd';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';


const AccountServiceRequest = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm<IAccountServiceFormType>();
  const onSubmit: SubmitHandler<IAccountServiceFormType> = () => {
    reset();
  };
  return (
    <section className={styles.main}>
      <div className={styles.main__title}>
        <Typography variant="h2" weight="regular">
          Оставьте заявку на сервис
        </Typography>
        <Typography variant="textExtraSmall" weight="regular">
          *Поля обязательные для заполнения
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.main__form}>
        <div className={styles.form__inner}>
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Фамилия Имя
            </Typography>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Александров Николай"
            />
          </label>
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Номер телефона
            </Typography>
            <input
              {...register('phoneNumber', { required: true })}
              type="text"
              placeholder="+7(___)___-__-__"
            />
          </label>
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Модель авто*
            </Typography>
            <Controller
              name="autoModel"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className={styles.main__select}
                  placeholder="Модель"
                  options={accountServiceRequestSelectItems}
                />
              )}
            />
          </label>
          <div className={styles.form__cause}>
            <Typography variant="text" weight="regular">
              Причина обращения*
            </Typography>
            {accountServiceRequestCheckboxes.map((item, index) => (
              <label key={index} className={styles.cause__item}>
                <input
                  className={styles.cause__item__input}
                  {...register(
                    `causeOfReq.${
                      item.value as keyof IAccountServiceFormType['causeOfReq']
                    }`,
                  )}
                  type="checkbox"
                />
                <Typography variant="text" weight="regular">
                  {item.label}
                </Typography>
              </label>
            ))}
            <label className={styles.cause__item}>
              <input
                className={styles.cause__item__input}
                {...register('causeOfReq.another', { required: true })}
                type="checkbox"
              />
              <Typography variant="text" weight="bold">
                Другое
              </Typography>
            </label>
          </div>
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Пробег*
            </Typography>
            <div className={styles.form__item__input_half}>
              <input
                {...register('mileage', { required: true })}
                type="number"
                className={styles.input_half}
              />{' '}
              км
            </div>
          </label>
          <label className={styles.form__item}>
            <Typography variant="text" weight="regular">
              Гос. номер*
            </Typography>
            <div className={styles.form__item__input_half}>
              <input
                {...register('numberOfCar', { required: true })}
                type="text"
                className={styles.input_half}
              />
            </div>
          </label>
          <label className={styles.cause__item}>
            <input
              {...register('agreement', { required: true })}
              type="checkbox"
            />
            <Typography variant="text" weight="regular">
              Я согласен на обработку персональных данных
            </Typography>
          </label>
        </div>
        <button className={styles.form__btn}>Отправить</button>
      </form>
    </section>
  );
};
export default AccountServiceRequest;
