'use client';

import Header from '@/layout/Header';
import Link from 'next/link';
import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';

export default function aktiviteter() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/activities', 'GET');
  }, []);
  return (
    <>
      <div className='bg-fontFarve bg-opacity-75 text-offWhite'>
        <Header />
      </div>

      <main className='container mx-auto'>
        <article className='grid grid-cols-3 auto-rows-auto gap-10 font-main_font text-fontFarve py-10'>
          {data &&
            data.content.map((d, index) => (
              <Link href={`/pages/aktiviteter/${d.links}`} className='hover:brightness-90 hover:scale-110 transition-all duration-200'>
                <section className=''>
                  <div className='card w-72 bg-base-100 shadow-xl mx-auto'>
                    <figure>
                      <img src={`../../assets/images/OplevDjurs/${d.image}`} alt='Aktivitets billede' />
                    </figure>
                    <div className='card-body'>
                      <h2 className='card-title'>{d.title}</h2>
                      <p>{d.activity}</p>
                      <div className='card-actions justify-end'>
                        <div className='badge badge-outline'>{d.distance}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </Link>
            ))}
        </article>
      </main>
    </>
  );
}
