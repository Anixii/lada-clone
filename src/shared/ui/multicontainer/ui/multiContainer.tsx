import classes from './multiContainer.module.scss';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';


interface Props {
  children: ReactNode;
  class_name?: string
}

const MultiContainer: FC<Props> = (props) => {
  const { children, class_name } = props;
  return (
    <div className={classNames(classes.container, class_name)}>
      {children}
    </div>
  );
};

export default MultiContainer;
