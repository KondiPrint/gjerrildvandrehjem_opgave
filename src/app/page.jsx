'use client';

import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Slider from '@/components/HomePage/slider';
import FormSetup from '@/components/HomePage/FormSetup';
import GjerrildVandrerHjem from '@/components/HomePage/SectionOne';
import VoresVaerelser from '@/components/HomePage/VoresVaerelser';
import DetSker from '@/components/HomePage/DetSker';
import HomeHero from '@/components/HomePage/HeroSection';
import OplevDjurs from '@/components/HomePage/OplevDjurs';
import Loader from '@/components/Loader';

export default function Home() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/happens', 'GET');
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <HomeHero />
      <main className='min-h-full'>
        <FormSetup />

        <GjerrildVandrerHjem />

        <VoresVaerelser />

        <Slider />

        <DetSker data={data} />

        <OplevDjurs />
      </main>
    </>
  );
}
