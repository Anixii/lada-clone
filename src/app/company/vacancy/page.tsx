import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';
import { VacancyMainBlock } from '@/widgets/vacancy-main-block';


const VacancyPage = () => {
  return (
    <>
      <Header variant='white__variant' />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <VacancyMainBlock />
    </>
  );
};

export default VacancyPage;
