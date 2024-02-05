'use client';

import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import NordStrandHero from '@/components/OplevDjursPages/NordStrand';

export default function nordstrand() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/nordstrand', 'GET');
  }, []);

  return (
    <>
      <NordStrandHero />

      <main className='bg-cover bg-no-repeat' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/GjerrildStrand/GN_fullBG.png)' }}>
        <article className='text-center font-main_font my-20 [&>section>h2]:text-4xl [&>section>p]:my-4 [&>section]:mb-10 container mx-auto sm:max-w-xl max-w-xs md:max-w-2xl lg:max-w-3xl '>
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
      </main>
    </>
  );
}
