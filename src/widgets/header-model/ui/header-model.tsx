'use client';
import styles from './header-model.module.scss';
import { modelHeaderLinks } from '@/shared/lib/variables/variables';
import MultiContainer from '@/shared/ui/multicontainer/ui/multiContainer';
import { Typography } from '@/shared/ui/typography';
import ArrowDownIcon from '@/shared/assets/icons/drop-down-icon.svg';
import Image from 'next/image';
import { FC, useState } from 'react';
import classNames from 'classnames';


const HeaderModel: FC = () => {
  const [ open, setOpen ] = useState<boolean>(false);

  const handleOpenList = () => setOpen(prev => !prev);

  return (
    <div className={styles.modelHeader}>
      <MultiContainer>
        <div className={styles.headerContent}>
          <a href="#main">
            <Typography color='black' weight='bold' variant='subtitle'>
              LADA Vesta седан
            </Typography>
          </a>
          <ul className={styles.headerLinks}>
            {
              modelHeaderLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <Typography variant='text' weight='regular' color='black'>
                      {item.title}
                    </Typography>
                  </a>
                </li>
              ))
            }
          </ul>
          <div
            className={classNames(
              styles.arrowDown,
              open && styles.arrowDownRoll,
            )}
            onClick={handleOpenList}
          >
            <Image width={24} height={24} src={ArrowDownIcon.src} alt='arrow down'/>
          </div>
        </div>
      </MultiContainer>
    </div>
  );
};

export default HeaderModel;
