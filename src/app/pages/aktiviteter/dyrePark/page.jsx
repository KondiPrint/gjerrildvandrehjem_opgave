'use client';

import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import DyreParkHero from '@/components/OplevDjursPages/DyreParkHero';

export default function dyrepark() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/dyrepark', 'GET');
  }, []);

  return (
    <>
      <DyreParkHero />

      <main className='bg-cover' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/SkandinaviskDyrepark/SP_fullBG.png)' }}>
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
      </main>
    </>
  );
}
