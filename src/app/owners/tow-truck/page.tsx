import { TowTruckBlock } from '@/features/tow-truck-block';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';


const TowTruckPage = () => {
  return (
    <>
      <Header variant="white__variant" />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <div className="main_paddings">
        <TowTruckBlock />
      </div>
    </>
  );
};

export default TowTruckPage;
