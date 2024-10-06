import ModelSlider from '@/features/model-swiper/view/model-swiper';
import { RegisterForTestdrive } from '@/features/register-for-testdrive';
import TestDriveHomeBanner from '@/features/test-drive-home-banner/view/test-drive-home-banner';
import { TestDrvieNewLada } from '@/features/test-drive-new-lada/view/test-drive-new-lada';
import TickerBlock from '@/features/ticker-block/ticker-block';
import { items } from '@/shared/lib/variables/ticker-block-items';
import { Breadcrumbs } from '@/shared/ui/breadcrumb';
import { Header } from '@/widgets/header';
import { NewCarsLada } from '@/widgets/new-cars-lada';
import { StepFlow } from '@/widgets/step-flow';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'LADA | Тест-драйв',
  description: 'Lada official site',
};

const TestDrivePage = () => {
  return (
    <>
      <Header variant='transparent__variant'/>
      <Breadcrumbs top="100px" containerClasses="container" color="light" />
      <TestDriveHomeBanner/>
      <TickerBlock items={items}/>
      <ModelSlider />
      <TestDrvieNewLada/>
      <StepFlow>
        <RegisterForTestdrive/>
      </StepFlow>
      <NewCarsLada />
    </>
  );
};

export default TestDrivePage;
