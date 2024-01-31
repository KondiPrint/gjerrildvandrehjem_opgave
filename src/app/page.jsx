'use client';

import { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Slider from '@/components/HomePage/slider';
import FormSetup from '@/components/HomePage/FormSetup';
import GjerrildVandrerHjem from '@/components/HomePage/SectionOne';
import VoresVaerelser from '@/components/HomePage/VoresVaerelser';
import DetSker from '@/components/HomePage/DetSker';
import HomeHero from '@/components/HomePage/HeroSection';

export default function Home() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/happens', 'GET');
  }, []);

  return (
    <>
      <HomeHero />

      <main className='min-h-full'>
        <FormSetup />

        <GjerrildVandrerHjem />

        <VoresVaerelser />

        <Slider />

        <DetSker data={data} />

        <section className='p-4 py-14 text-fontFarve font-main_font'>
          <div className='mb-10 text-center'>
            <h2 className='uppercase text-5xl mb-1'>Oplev Djursland</h2>
            <p className='text-xl'>Vi har det meste lige i baghaven</p>
          </div>
          <div className='grid md:grid-cols-2'>
            <figure className='h-fit'>
              <a href='' className='hover:brightness-75 transition-all duration-200'>
                <img src='../../assets/images/GjerrildStrandpark.png' alt='' className='h-full' />
              </a>
            </figure>
            <div className='text-center md:row-start-2'>
              <p>Gjerrild Nordstrand</p>
              <p>3,5 km</p>
            </div>

            <figure className='h-full'>
              <a href='' className='hover:brightness-75 transition-all duration-200'>
                <img src='../../assets/images/KattegatCenteret.png' alt='' className='h-full' />
              </a>
            </figure>
            <div className='text-center md:row-start-2'>
              <p>Kattegatcenret</p>
              <p>15 km</p>
            </div>
          </div>

          <div className='w-fit mx-auto mt-10'>
            <a href='../pages/aktiviteter/' className='btn bg-reseda text-offWhite rounded-badge uppercase px-8'>
              Aktiviteter
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
