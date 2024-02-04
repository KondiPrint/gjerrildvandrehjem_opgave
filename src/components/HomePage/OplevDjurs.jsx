import Link from 'next/link';
import { FaWifi } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa6';

export default function OplevDjurs() {
  return (
    <>
      <section className='p-4 py-14 text-fontFarve font-main_font'>
        <div className='mb-10 text-center'>
          <h2 className='uppercase text-5xl mb-1'>Oplev Djursland</h2>
          <p className='text-xl'>Vi har det meste lige i baghaven</p>
        </div>
        <div className='grid md:grid-cols-2'>
          <figure className='h-fit'>
            <Link href='/pages/aktiviteter/nordStrand' className='hover:brightness-75 transition-all duration-200'>
              <img src='../../assets/images/Home/OplevDjurs/GjerrildStrandpark.png' alt='' className='h-full' />
            </Link>
          </figure>
          <div className='text-center md:row-start-2'>
            <p>Gjerrild Nordstrand</p>
            <p>3,5 km</p>
          </div>

          <figure className='h-full'>
            <Link href='/pages/aktiviteter/kattegat' className='hover:brightness-75 transition-all duration-200'>
              <img src='../../assets/images/Home/OplevDjurs/KattegatCenteret.png' alt='' className='h-full' />
            </Link>
          </figure>
          <div className='text-center md:row-start-2'>
            <p>Kattegatcenret</p>
            <p>15 km</p>
          </div>
        </div>

        <div className='w-fit mx-auto mt-10'>
          <Link href='../pages/aktiviteter/' className=''>
            <button className='btn-sm hover:brightness-90 rounded-2xl px-10 uppercase font-semibold bg-reseda text-offWhite'>Aktiviteter</button>
          </Link>
        </div>
      </section>
    </>
  );
}
