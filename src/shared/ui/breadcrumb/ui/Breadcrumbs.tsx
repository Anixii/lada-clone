'use client';
import styles from './breadcrumbs.module.scss';
import { Typography } from '../../typography/index';
import separatorBlack from '@/shared/assets/icons/arrow-left-black.svg';
import separatorWhite from '@/shared/assets/icons/arrow-left-white.svg';
import { breadcrumbTitleHandler } from '@/shared/lib/helpers/helpers';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


type ColorVariants = 'dark' | 'light';
interface TBreadCrumbProps {
  activeClasses?: string;
  color?: ColorVariants;
  containerClasses?: string;
  top?: string;
}
const Breadcrumbs = ({
  activeClasses,
  containerClasses,
  color = 'dark',
  top = '0px',
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const separator = color === 'dark' ? separatorBlack : separatorWhite;
  return (
    <>
      <div
        style={{ top: top }}
        className={`${styles.breadcrumb__wrapper} ${containerClasses}`}
      >
        <div className={`${styles.breadcrumb} `}>
          <Typography variant="textBody" weight="regular">
            <Link className={styles[ color ]} href={'/'}>
              Главная
            </Link>
          </Typography>
          {pathNames.length > 0 && (
            <Image
              className={styles.breadcrumb__image}
              src={separator}
              alt=">"
            />
          )}
          {pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`;
            const itemClasses = paths === href ? ` ${activeClasses}` : '';
            const itemLink = breadcrumbTitleHandler(link);
            return (
              <div className={styles.breadcrumb__item} key={index}>
                <Typography variant="textBody" weight="regular">
                  <Link
                    className={`${styles[ color ]} ${itemClasses} `}
                    href={href}
                  >
                    {itemLink?.title}
                  </Link>
                </Typography>
                {pathNames.length !== index + 1 && (
                  <Image
                    style={{ color: 'white' }}
                    className={styles.breadcrumb__image}
                    src={separator}
                    alt=">"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
