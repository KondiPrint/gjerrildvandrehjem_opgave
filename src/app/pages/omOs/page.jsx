import OmOsContent1 from '@/components/OmOs/Test_1';
import OmOsContent2 from '@/components/OmOs/Test_2';
import OmOsContent3 from '@/components/OmOs/Test_3';
import Header from '@/layout/Header';
import { SlCalender } from 'react-icons/sl';

export default function omOs() {
  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/OmOs/HeroMedKantOFF.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
      </div>

      <OmOsContent3 />

    </>
  );
}
