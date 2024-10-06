import styles from './root-layout.module.scss';
import { Footer } from '@/widgets/footer';
import { Contacts } from '@/widgets/contacts';
import { FC, ReactNode } from 'react';
import localFont from 'next/font/local';
import { ConfigProvider } from 'antd';


const PRIMARY_COLOR = '#FE7A3B';
const COLOR_BLACK = '#000';


interface IRootLayoutProps {
  children: ReactNode;
}

const pragma = localFont({
  src: [
    {
      path: '../../fonts/lada-pragmatica-regular.ttf',
      weight: '400',
      style: 'normal',
    }, {
      path: '../../fonts/lada-pragmatica-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pragmatica',
});

const RootLayoutTemplate: FC<IRootLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html className={`${pragma.variable}`}>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: PRIMARY_COLOR,
              colorTextBase: COLOR_BLACK,
            },
          }}
        >
          <Contacts/>
          <div className={styles.wrapper}>{children}</div>
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
};

export default RootLayoutTemplate;
