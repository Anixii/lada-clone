import styles from './burger-menu.module.scss';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC, ReactNode, useState } from 'react';


type BurgerMenuDirections = 'top' | 'left' | 'right';

interface IBurgerMenu {
  to: BurgerMenuDirections;
  children: ReactNode;
  open_icon: StaticImageData;
  close_icon: StaticImageData;
  customClass?: string
}

const BurgerMenu: FC<IBurgerMenu> = (props) => {
  const { to, children, open_icon, close_icon, customClass } = props;

  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const directionClass = (() => {
    switch (to) {
    case 'left':
      return isOpen ? styles.leftOpen : styles.left;
    case 'right':
      return isOpen ? styles.rightOpen : styles.right;
    default:
      return isOpen ? styles.open : styles.closed;
    }
  })();

  return (
    <div>
      <div className={`${styles.icon} ${customClass}`} onClick={isOpen ? handleClose : handleOpen}>
        <Image src={isOpen ? close_icon : open_icon} alt='menu toggle' />
      </div>
      <div className={classNames(styles.main, directionClass)}>
        {children}
      </div>
    </div>
  );
};

export default BurgerMenu;
