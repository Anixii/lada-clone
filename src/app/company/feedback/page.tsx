import { accountReviewsApi } from '@/shared/api/account/reviews/reviews';
import {
  IAccountAllResults,
  IAccountReviewsParamsType,
} from '@/shared/api/account/reviews/types/types';
import { getTotalPages } from '@/shared/lib/helpers/helpers';
import { FeedbackBlock } from '@/widgets/feedback-block';
import { Header } from '@/widgets/header';


interface IFeedackPageParams {
  searchParams: IAccountReviewsParamsType;
}
const FeedackPage = async ({ searchParams }: IFeedackPageParams) => {
  const feedback: IAccountAllResults = await accountReviewsApi.getAllReviews({ page: searchParams.page });
  const totalPage = getTotalPages(feedback.count, accountReviewsApi.page_size);
  return (
    <>
      <Header variant="white__variant" />
      <FeedbackBlock feedbacks={feedback.results} totalPage={totalPage} currentPage={searchParams.page}/>
    </>
  );
};

export default FeedackPage;
