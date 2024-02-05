'use client';

import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import KattegatHero from '@/components/OplevDjursPages/KattegatHero';

export default function kattegat() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/kattegat', 'GET');
  }, []);

  return (
    <>
      <KattegatHero />

      <main className='bg-cover' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/kattegat_fullBG.png)' }}>
        <article className='text-center font-main_font [&>div>section>h2]:text-4xl [&>div>section>p]:my-4 [&>div:nth-of-type(1)]:bg-[url("/@/../assets/images/OplevDjurs/KattegatCenteret/pingviner.png")] [&>div:nth-of-type(2)]:bg-[url("/@/../assets/images/OplevDjurs/KattegatCenteret/fisk1.png")] [&>div:nth-of-type(3)]:bg-[url("/@/../assets/images/OplevDjurs/KattegatCenteret/fisk2.png")] [&>div:nth-of-type(4)]:bg-[url("/@/../assets/images/OplevDjurs/KattegatCenteret/haj.png")] container mx-auto '>
          {data &&
            data.content.map((d, index) => (
              <div
                key={index}
                className='w-full bg-no-repeat [&:nth-of-type(1)]:bg-right-top [&:nth-of-type(2)]:bg-left-top [&:nth-of-type(3)]:bg-right-top [&:nth-of-type(4)]:bg-left-top [&:nth-of-type(4)]:h-[410px] h-80  max-w-screen-2xl mx-auto '>
                <section className='sm:max-w-xl max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto'>
                  <h2>{d.title}</h2>
                  <p>{d.content}</p>
                  <p>{d.content2}</p>
                  <p>{d.content3}</p>
                </section>
              </div>
            ))}
        </article>
      </main>

      {/* <main>
        <article className='text-center font-main_font [&>div>section>h2]:text-4xl [&>div>section>p]:my-4'>
          <div className='w-full bg-no-repeat bg-right-top h-80 max-w-screen-xl mx-auto' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/pingviner.png)' }}>
            
          </div>

          <div className='w-full bg-no-repeat bg-left-top h-80 max-w-screen-2xl mx-auto' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/fisk1.png)' }}>
            
          </div>

          <div className='w-full bg-no-repeat bg-right-top h-80 max-w-screen-2xl mx-auto' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/fisk2.png)' }}>
            
          </div>

          <div className='w-full bg-no-repeat bg-left-top h-[410px] max-w-screen-2xl mx-auto' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/haj.png)' }}>
            
          </div>
      <main className='bg-cover' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/KattegatCenteret/kattegat_fullBG.png)' }}>
        <article className='text-center font-main_font [&>section>h2]:text-4xl [&>section>p]:my-4 [&>section]:mb-10 container mx-auto sm:max-w-xl max-w-xs md:max-w-2xl lg:max-w-3xl '>
          {data &&
            data.content.map((d, index) => (
              <section key={index}>
                <h2>{d.title}</h2>
                <p>{d.content}</p>
                <p>{d.content2}</p>
                <p>{d.content3}</p>
              </section>
            ))}
        </article>
      </main> */}
    </>
  );
}
