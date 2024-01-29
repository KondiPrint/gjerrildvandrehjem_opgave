'use client';
import { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Header from '@/layout/Header';
import { TbArrowRightCircle } from 'react-icons/tb';
import { FaWifi } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa6';
import Slider from '@/components/slider';

export default function Home() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    makeRequest('http://api.historiskatlas.dk/');
  }, []);

  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/HeroMedKantOFF.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
        <div className='hero-overlay bg-opacity-40'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Gjerrild Vandrerhjem</h1>
            <p className='mb-5'>På toppen af Djursland - Med dig i centrum.</p>
          </div>
        </div>
      </div>

      <div className=''>
        <main className='min-h-full'>
          <aside className='container py-8 px-2 mx-auto md:px-4 '>
            <form
              method='POST'
              action={`https://gjerrildvandrerhjem.suitcasebooking.com/da/?datefrom=${dateFrom}&dateto=${dateTo}`}
              target='_blank'
              className='form-control flex-row justify-center mx-auto px-6 py-10 rounded-xl bg-reseda bg-opacity-40'>
              <div className='flex flex-wrap place-items-center gap-5 justify-center'>
                <div>
                  <label className='block text-sm font-medium text-fontFarve pl-2'>til/Fra</label>
                  <div className='flex gap-5 flex-wrap md:input rounded-2xl'>
                    <input
                      type='date'
                      name='dateFrom'
                      id='dateFrom'
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                      }}
                      className='block w-fit md:rounded-2xl border-0 text-fontFarve dark:text-offWhite'
                    />

                    <span className='hidden md:block place-self-center'>
                      <TbArrowRightCircle />
                    </span>

                    <input
                      type='date'
                      name='dateTo'
                      id='dateTo'
                      value={dateTo}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                      }}
                      className='block w-fit md:rounded-2xl border-0 text-fontFarve dark:text-offWhite'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2 w-fit'>
                  <label htmlFor='guests' className='block text-sm font-medium text-fontFarve pl-2'>
                    Antal gæster
                  </label>
                  <select className='select select-bordered rounded-2xl' name='guests' id='guests' defaultValue='Vælg antal'>
                    <option disabled>Vælg antal</option>
                    <option>1-person</option>
                    <option>2-personer</option>
                    <option>3-personer</option>
                    <option>4-personer</option>
                  </select>
                </div>

                <button type='submit' className='btn place-self-end rounded-2xl bg-reseda text-offWhite border-none'>
                  Tjek tilgængelighed
                </button>
              </div>
            </form>
          </aside>

          <section className=' my-32 grid lg:grid-cols-5 font-main_font text-center container py-8 px-2 mx-auto md:px-4 '>
            <img className='col-span-3 place-self-center 2xl:place-self-auto' src='../../assets/images/VandrerhjeMedKantOFF.png' alt='' />
            <div className='[&>p]:text-base [&>p]:sm:text-sm [&>p]:xl:text-base [&>p]:2xl:text-lg [&>p]:first-of-type:xl:pb-6 [&>p]:first-of-type:pb-4 col-span-2'>
              <div>
                <h2 className='text-4xl uppercase mt-8'>Gjerrild vandrerhjem</h2>
                <p className='italic text-lg pt-1 pb-3 xl:pb-6'>På toppen af Djursland - med dig i centrum</p>
              </div>
              <p>
                Vandrerhjemmet ligger skønt placeret på toppen af Djursland i den smukke by Gjerrild, mellem bøgeskove og strand. Vi har de perfekte rammer til ethvert ophold og her er altid noget at
                lave. Vi ligger tæt på klinter til fiskeri og gode sandstrande og der er mange børnevenlige aktiviteter og attraktioner i nem gå- og køreafstand.
              </p>
              <p>
                I Gjerrild oplever du alt det bedste Norddjursland har at byde på og vi er stolte af, at vandrerhjemmet er placeret her. Bygningen er en flot, gammel togremisse og har fungeret som
                vandrerhjem siden d. 22. juni 1973, hvor de første gæster overnattede. Bygningerne er blevet flot vedligeholdt gennem årene og der kommer til at ske grønne tiltag i løbet af de næste
                år for at hjælpe vandrerhjemmet ind i fremtiden på en mere bæredygtig måde.
              </p>
              <button className='btn-sm rounded-2xl px-8 uppercase font-semibold bg-reseda text-offWhite'>Se mere</button>
            </div>
          </section>

          <section className='bg-section_colour text-center font-main_font '>
            <div className='container py-8 px-2 mx-auto md:px-4'>
              <div className='mb-10 text-offWhite dark:text-fontFarve  lg:w-1/2 mx-auto'>
                <h2 className='uppercase text-5xl mb-1'>Vores værelser</h2>
                <p>
                  På flere af vores hyggelige værelser er der dobbeltseng og køjesenge, der er ligeledes mulighed for at låne en weekendseng til de mindste. Vi har på vandrerhjemmet et mindre antal
                  weekendsenge til rådighed, men medbring gerne jeres egen.
                </p>
              </div>
              <div className='lg:grid lg:grid-cols-6 text-reseda gap-y-10 lg:gap-x-10 lg:justify-center flex flex-col-reverse'>
                <div className='card bg-offWhite col-span-2 lg:h-5/6 my-auto'>
                  <div className='text-center p-8'>
                    <h3 className='text-2xl lg:text-4xl'>1 - 4 personers værelse</h3>
                    <p className='my-7 text-base lg:text-2xl'>
                      Der er dobbeltsenge på flere af værelserne, køjesenge og mulighed for ekstra senge, således at der kan sove alt fra 1 person til 5 personer på værelserne.
                    </p>
                    <span className='flex gap-5 lg:my-14 justify-center'>
                      <FaWifi className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md' />
                      <FaShower className='h-12 w-12 bg-reseda fill-offWhite p-1 rounded-md' />
                    </span>
                    <div className='mt-8'>
                      <p className='font-bold text-4xl'>DKK 495,00</p>
                      <p className='text-lg -mt-1'>per nat</p>
                    </div>
                  </div>
                  <div className='h-full flex items-end justify-center pb-3'>
                    <button className='btn-sm rounded-2xl px-6 uppercase font-semibold bg-reseda text-offWhite'>Flere detaljer</button>
                  </div>
                </div>
                <img className='col-span-4' src='../../assets/images/vaerelse1medkant.png' alt='' />
              </div>
            </div>
          </section>
          <section>test</section>
          <section className='bg-section_colour p-4'>
            <div className='container text-center mx-auto font-main_font'>
              <h2 className='uppercase'>Det sker</h2>
              <p>
                Her finder du en samlet oversigt over alle de spænende ting der sker på Gjerrild vandrerhjem. Hvis du har en idé til noget du gerne vil afholde hos os, så tøv ikke med at kontakte os,
                vi elsker gode initiativer og ideer. Vi ønsker at være både et vandrerhjem og kulturhus, og vi kan faciliterer alt lige fra foredrag og koncerter, til kurser og festivaler
              </p>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 container mx-auto gap-2'>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
              <figure className='hover:brightness-90 transition-all duration-200'>
                <a href=''>
                  <img className='' src='../../assets/images/vaerelse1medkant.png' alt='' />
                  <figcaption className='flex gap-2 justify-center'>
                    <div>
                      <p className='text-[0.6rem]'>FEB</p>
                      <p className='text-sm font-semibold'>20</p>
                    </div>
                    <div>
                      <p className='text-xs'>17:30 - 21:00</p>
                      <h3 className='text-sm font-semibold'>Er parasitter og mikrober vores fjender?</h3>
                    </div>
                  </figcaption>
                </a>
              </figure>
            </div>
          </section>
          <section>
            <div>
              <h2>Oplev Djursland</h2>
              <p>Vi har det meste lige i baghaven</p>
            </div>
          </section>
          <article>
            <Slider />
          </article>
        </main>
      </div>
    </>
  );
}
