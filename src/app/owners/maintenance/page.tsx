import { MaintenanceHomeBanner } from '@/features/maintenance-home-banner';
import { MaintenanceRecomendation } from '@/features/maintenance-recomendation';
import { MaintenanceServices } from '@/features/maintenance-services';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';


const MaintenacnePage = () => {
  return (
    <>
      <Header variant="white__variant" />
      <Breadcrumbs top="100px" containerClasses="container" color="dark" />
      <div className="main_paddings">
        <div className="block_paddings">
          <MaintenanceHomeBanner />
        </div>
        <div className="block_paddings">
          <MaintenanceServices />
        </div>
        <div className="block_paddings">
          <MaintenanceRecomendation />
        </div>
      </div>
    </>
  );
};

export default MaintenacnePage;
