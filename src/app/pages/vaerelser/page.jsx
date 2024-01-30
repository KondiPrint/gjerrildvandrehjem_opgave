'use client';
import FormSetup from '@/components/VaerelserPage/FormSetup';
import VaerelseHero from '@/components/VaerelserPage/HeroSection';
import { TbCalendarTime } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi2';
import { IoBedSharp } from 'react-icons/io5';

export default function vaerelser() {
  return (
    <>
      <div className='relative mb-[15%]'>
        <VaerelseHero />
        <div className='absolute bottom-[-10%] left-[55%]  w-fit'>
          <div className='w-full'>
            <FormSetup />
          </div>
        </div>
        <div className='absolute -bottom-24 left-10 w-fit text-fontFarve font-main_font'>
          <div className='text-center mb-5'>
            <h2 className='text-4xl'>DKK 495,00</h2>
            <p className='-mt-1'>Per nat</p>
          </div>
          <span className='flex gap-10 text-center'>
            <figure className='flex flex-col justify-center'>
              <HiUserGroup className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
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
              <IoBedSharp className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2'>Sengetype</p>
                <span className='text-sm'>boxmadras + køjeseng</span>
              </figcaption>
            </figure>
            <figure className='flex flex-col justify-center'>
              <HiUserGroup className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2'>Areal</p>
                <span className='text-sm'>3 m^2</span>
              </figcaption>
            </figure>
          </span>
        </div>
      </div>
      <section className='text-fontFarve'>Hey hey hey</section>
      <section className='text-fontFarve'>Hey hey hey</section>
      <section className='text-fontFarve'>Hey hey hey</section>
      <section className='text-fontFarve'>Hey hey hey</section>
    </>
  );
}
