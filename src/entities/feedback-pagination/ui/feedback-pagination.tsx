'use client';
import { AppPagination } from '@/shared/ui/pagination';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';


interface IFeedbackPagination {
  totalPage: number;
  currentPage: number | undefined;
}
const FeedbackPagination = ({
  currentPage,
  totalPage,
}: IFeedbackPagination) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onHandlePageChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', value.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <>
      <AppPagination
        onChange={onHandlePageChange}
        currentPage={currentPage || 1}
        totalPages={totalPage}
      />
    </>
  );
};

export default FeedbackPagination;
