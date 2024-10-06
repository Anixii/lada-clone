import styles from './accordion.module.scss';
import { Typography } from '../../typography';
import plus from '@/shared/assets/icons/Plus.svg';
import minus from '@/shared/assets/icons/Minus.svg';
import { useState, ReactNode, FC } from 'react';
import Image from 'next/image';


export interface AccordionItemProps {
  title: string;
  children: ReactNode;
  title_bold?: boolean;
  with_plus?: boolean;
  classname?: string,
  childrenClassName?: string
}

interface AccordionItemInternalProps extends AccordionItemProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: FC<AccordionItemInternalProps> = (props) => {
  const {
    title,
    children,
    title_bold,
    with_plus,
    isOpen,
    toggleOpen,
    classname,
    childrenClassName,
  } = props;

  return (
    <div className={styles.accordionItem}>
      {
        with_plus
          ?
          <button onClick={toggleOpen} className={styles.accordionButtonWithPlus}>
            <Typography variant='textBody' weight={title_bold ? 'bold' : 'regular'}>
              {title}
            </Typography>
            <Typography variant='textBody' weight={title_bold ? 'bold' : 'regular'}>
              <div className={styles.icon}>
                <Image src={isOpen ? minus : plus} alt='toggle_icon'/>
              </div>
            </Typography>
          </button>
          :
          <button onClick={toggleOpen} className={childrenClassName ? childrenClassName : styles.accordionButton}>
            <Typography variant='textBody' weight={title_bold ? 'bold' : 'regular'}>
              {title}
            </Typography>
          </button>
      }
      {isOpen && <div className={classname ? classname : styles.accordionContent}>{children}</div>}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
  classname?: string,
  childrenClassName?: string
}

const AppAccordion: FC<AccordionProps> = ({ items, childrenClassName, classname }) => {
  const [ openIndex, setOpenIndex ] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          title_bold={item.title_bold}
          with_plus={item.with_plus}
          isOpen={openIndex === index}
          toggleOpen={() => handleToggle(index)}
          childrenClassName={childrenClassName}
          classname={classname}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AppAccordion;
