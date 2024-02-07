import Link from 'next/link';
import { FaWifi } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa6';

export default function VoresVaerelser() {
  return (
    <>
      <section className='bg-section_colour text-center font-main_font py-14'>
        <div className='container px-2 mx-auto md:px-4'>
          <div className='mb-10 text-offWhite lg:w-1/2 mx-auto'>
            <h2 className='uppercase text-5xl mb-1'>Vores værelser</h2>
            <p>
              På flere af vores hyggelige værelser er der dobbeltseng og køjesenge, der er ligeledes mulighed for at låne en weekendseng til de mindste. Vi har på vandrerhjemmet et mindre antal
              weekendsenge til rådighed, men medbring gerne jeres egen.
            </p>
          </div>
          <div className='lg:grid lg:grid-cols-8 text-reseda gap-y-10 lg:gap-x-10 lg:justify-center flex flex-col-reverse'>
            <div className='card  xl:p-5 2xl:p-10 bg-offWhite col-span-3 lg:h-5/6 my-auto'>
              <div className='text-center'>
                <h3 className='text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold pb-2'>1 - 4 personers værelse</h3>
                <p className='text-base lg:text-base xl:text-lg 2xl:text-xl'>
                  Der er dobbeltsenge på flere af værelserne, køjesenge og mulighed for ekstra senge, således at der kan sove alt fra 1 person til 5 personer på værelserne.
                </p>
                <span className='flex gap-5 justify-center lg:py-2 xl:py-5 2xl:py-10'>
                  <FaWifi className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md' />
                  <FaShower className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md' />
                </span>
                <div className=''>
                  <p className='font-bold text-2xl 2xl:text-4xl'>DKK 495,00</p>
                  <p className='text-lg -mt-2'>per nat</p>
                </div>
              </div>
              <div className='h-full flex items-end justify-center mb-2'>
                <Link href='../pages/vaerelser/'>
                  <button className='btn-sm hover:brightness-90 rounded-2xl px-10 uppercase font-semibold bg-reseda text-offWhite'>Flere detaljer</button>
                </Link>
              </div>
            </div>
            <img className='col-span-5' src='../../assets/images/Home/vaerelse1medkant.png' alt='' />
          </div>
        </div>
      </section>
    </>
  );
}
