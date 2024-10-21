import { ServiceBlock } from '@/features/service-block';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';
import { HomeSwiper } from '@/widgets/swipers';


const ServicePage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <HomeSwiper />
      <ServiceBlock/>
    </>
  );
};

export default ServicePage;
