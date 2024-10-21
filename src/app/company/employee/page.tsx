import { officersApi } from '@/shared/api/officers/officers';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import EmployeesBlock from '@/widgets/employees-block/ui/employees-block';
import { Header } from '@/widgets/header';


const EmployPage = async() => {
  const data = await officersApi.getAllOfficers();


  return (
    <>
      <Header variant='white__variant' />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <EmployeesBlock employees={data}/>
    </>
  );
};

export default EmployPage;
