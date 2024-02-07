import FormSetup from '@/components/VaerelserPage/FormSetup';
import { TbCalendarTime } from 'react-icons/tb';

export default function HeroCTA() {
  return (
    <>
      <div className='xl:absolute mx-auto bottom-[-10%] left-[55%]  w-fit'>
        <div className='w-full'>
          <FormSetup />
        </div>
      </div>

      <div className='xl:absolute mx-auto -bottom-24 left-10 w-fit text-fontFarve font-main_font mt-10 bg-reseda bg-opacity-15 p-5 rounded-3xl'>
        <div className='text-center mb-5'>
          <h2 className='text-4xl'>DKK 495,00</h2>
          <p className='-mt-1'>Per nat</p>
        </div>
        <span className='flex md:gap-14 sm:gap-5 text-center gap-1'>
          <figure className='flex flex-col justify-center'>
            <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/peopleICON.png' alt='' className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
            <figcaption>
              <p className='-mb-2'>Maks. Gæster</p>
              <span className='text-sm'>4(+1) Gæster</span>
            </figcaption>
          </figure>
          <figure className='flex flex-col justify-center'>
            <TbCalendarTime className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
            <figcaption>
              <p className='-mb-2 text-sm'>Booking af overnatninger</p>
              <span className='text-sm'>1 min</span>
            </figcaption>
          </figure>
          <figure className='flex flex-col justify-center'>
            <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/bedICON.png' alt='' className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
            <figcaption>
              <p className='-mb-2'>Sengetype</p>
              <span className='text-sm'>boxmadras + køjeseng</span>
            </figcaption>
          </figure>
          <figure className='flex flex-col justify-center'>
            <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/areaICON.png' alt='' className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
            <figcaption>
              <p className='-mb-2'>Areal</p>
              <span className='text-sm'>13 m^2</span>
            </figcaption>
          </figure>
        </span>
      </div>
    </>
  );
}
