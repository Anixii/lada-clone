import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import EmployeesBlock from '@/widgets/employees-block/ui/employees-block';
import { Header } from '@/widgets/header';


const EmployPage = () => {
  return (
    <>
      <Header variant='white__variant' />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <EmployeesBlock />
    </>
  );
};

export default EmployPage;
