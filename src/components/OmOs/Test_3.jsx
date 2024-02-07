'use client'

import useRequestData from '@/components/hooks/useRequestData';
import { useEffect, useState } from 'react'

export default function OmOsContent3() {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/aboutus', 'GET');
  }, []);

  return (
    <>
      <main className='container mx-auto'>


        {data &&

          <section className='lg:grid lg:grid-cols-2 font-main_font flex flex-col h-fit'>
            <article className='col-start-1 col-end-2 flex flex-col justify-center'>
              <div className='lg:space-y-10 xl:space-y-20'>
                <div className='text-center space-y-3 mb-10'>
                  <h1 className='text-7xl uppercase'>{data.content[0].title}</h1>
                  <p className='text-4xl italic'>{data.content[0].subtitle}</p>
                </div>

                <div className='max-w-4xl mx-auto text-3xl lg:space-y-10 xl:space-y-20'>
                  <p className='text-center lg:text-left'>{data.content[0].content1}</p>

                  <p className='hidden lg:block'>{data.content[0].content2}</p>

                  <p className='hidden lg:block'>{data.content[0].content3}</p>

                  <p className='hidden lg:block'>{data.content[0].content4}</p>
                </div>
              </div>
            </article>

            <div className='self-center'>
              <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='' />
              <p className='text-center lg:hidden px-5 py-3 text-3xl'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
            </div>

            <div>
              <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='' />
              <p className='py-3 text-center lg:hidden px-5 text-3xl'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en
                kop kaffe.
              </p>
            </div>
            <div className=''>
              <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='' />
            </div>
          </section>
        }

      </main>
    </>
  );
}
