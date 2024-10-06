'use client';
import styles from './aside-account-block.module.scss';
import accountIcon from '@/shared/assets/icons/lk-black.svg';
import serviseIcon from '@/shared/assets/icons/servise-icon-black.svg';
import settingsIcon from '@/shared/assets/icons/settings-icon-black.svg';
import exitIcon from '@/shared/assets/icons/exit-icon-svg.svg';
import chatIcon from '@/shared/assets/icons/chat-icon-black.svg';
import { Typography } from '@/shared/ui/typography';
import Image from 'next/image';


interface IAsideAccountBlockPropsType {
  setTab: (value: number) => void;
  tab: number;
}
const AsideAccountBlock = ({ setTab, tab }:IAsideAccountBlockPropsType) => {
  return (
    <aside className={styles.account}>
      <div className={styles.account__data}>
        <Image
          className={styles.account__image}
          src={accountIcon}
          alt="Icon of Profile"
        />
        <Typography variant="text" weight="bold">
          Пользователь
        </Typography>
        <Typography variant="text" weight="regular">
          +7 (812) 3728940
        </Typography>
      </div>

      <div className={styles.account__btns}>
        <div className={styles.account__links}>
          <div onClick={() => setTab(1)} className={`${styles.link__item} ${tab === 1 && styles.active}`}>
            <Image
              src={serviseIcon}
              alt="Icon of service"
              className={styles.link__item__image}
            />
            <Typography variant="text" weight="regular">
              Заявка на сервис
            </Typography>
          </div>
          <div onClick={() => setTab(2)} className={`${styles.link__item} ${tab === 2 && styles.active}`}>
            <Image
              src={chatIcon}
              alt="Icon of chat"
              className={styles.link__item__image}
            />
            <Typography variant="text" weight="regular">
              Поддержка
            </Typography>
          </div>
          <div onClick={() => setTab(3)} className={`${styles.link__item} ${tab === 3 && styles.active}`}>
            <Image
              src={settingsIcon}
              alt="Icon of settings"
              className={styles.link__item__image}
            />
            <Typography variant="text" weight="regular">
              Редактирование
            </Typography>
          </div>
        </div>
        <div className={styles.link__item}>
          <Image
            className={styles.link__item__image}
            alt="Icon of exit"
            src={exitIcon}
          />
          <Typography variant="text" weight="regular">
            Выход
          </Typography>
        </div>
      </div>
    </aside>
  );
};

export default AsideAccountBlock;
