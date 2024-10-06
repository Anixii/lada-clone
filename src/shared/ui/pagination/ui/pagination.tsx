'use client';
import styles from './paginations.module.scss';
import { Pagination } from 'antd';


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange?: (page: number, pageSize: number) => void;
}
const AppPagination = ({ totalPages, currentPage, onChange }: PaginationProps) => {
  return (
    <div className={styles.main}>
      <Pagination
        align="center"
        onChange={onChange}
        className={styles.main__pagination}
        showLessItems
        showSizeChanger={false}
        total={totalPages * 10}
        current={currentPage}
      />
    </div>
  );
};

export default AppPagination;
