import { Drawer } from 'antd';
import React, { ReactElement, useState } from 'react';


interface IDrawerType {
  BtnNode: React.ReactNode;
  children: React.ReactNode;
  placement: 'top' | 'left' | 'right' | 'bottom';
}
const AppDrawer = ({ children, placement, BtnNode }: IDrawerType) => {
  const [ open, setIsOpen ] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };
  const renderChildrenWithProps = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as ReactElement, { onClose: () => setIsOpen(false) });
    }
    return children;
  };
  return (
    <>
      <div onClick={toggleDrawer}>{BtnNode}</div>
      <Drawer
        height={'55vh'}
        open={open}
        onClose={() => setIsOpen(false)}
        placement={placement}
      >
        {renderChildrenWithProps()}
      </Drawer>
    </>
  );
};

export default AppDrawer;
