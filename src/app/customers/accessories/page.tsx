import { AccessoriesFilter } from '@/features/accessories-filter';
import { AccessoriesSwitcher } from '@/features/accessories-switcher';
import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { RequestForm } from '@/features/request-form';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { CustomersBanner } from '@/widgets/customers-banner';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';


const AccessoriesPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <CustomersBanner />
      <ModelSlider />
      <div className="block_paddings">
        <AccessoriesSwitcher />
      </div>
      <div className="block_paddings">
        <AccessoriesFilter />
      </div>
      <div className={'container center_block block_paddings'}>
        <RequestForm
          isSelectActive={false}
          title="Заявка на обратный звонок"
          subtitle="Отправьте нам заявку и мы свяжемся с вами сразу в день обращения"
        />
      </div>
      <NewCarsLada isFull={true} />
    </>
  );
};

export default AccessoriesPage;
