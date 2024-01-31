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
        {data && <img src={`../../assets/images/detsker/${data.detskere[0].image}`} alt='hahaha' />}
        <FormSetup />

        <GjerrildVandrerHjem />

        <VoresVaerelser />

        <Slider />

        <DetSker data={data} />

        <section>
          <div>
            <h2>Oplev Djursland</h2>
            <p>Vi har det meste lige i baghaven</p>
          </div>
        </section>
      </main>
    </>
  );
}
