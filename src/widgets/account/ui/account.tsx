'use client';
import styles from './account.module.scss';
import { AsideAccountBlock } from '@/entities/aside-account-block';
import { AccountSupport } from '@/entities/account-support';
import { AccountEdit } from '@/entities/account-edit';
import AccountServiceRequest from '@/entities/account-service-request/ui/account-service-request';
import { useState } from 'react';


const Account = () => {
  const [ tab, setTab ] = useState(1);
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.main__sidebar}>
        <AsideAccountBlock tab={tab} setTab={setTab} />
      </div>
      <div className={styles.main__content}>
        {tab === 1 && (
          <div className={styles.main__support}>
            <AccountServiceRequest />
          </div>
        )}
        {tab === 2 && (
          <div className={styles.main__support}>
            <AccountSupport />
          </div>
        )}
        {tab === 3 && (
          <div className={styles.main__edit}>
            <AccountEdit />
          </div>
        )}
      </div>
    </main>
  );
};

export default Account;
