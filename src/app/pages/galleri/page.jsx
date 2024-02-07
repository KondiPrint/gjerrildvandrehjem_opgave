'use client'

import { GalleriSlider } from '@/components/Galleri/GalleriSlider';
import Header from '@/layout/Header';
import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import { GalleriContent } from '@/components/Galleri/GalleriContent';

export default function GalleriSide() {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/galleri', 'GET');
  }, []);

  return (
    <>
      <Header />
      <GalleriSlider data={data} />

      <GalleriContent data={data}/>

    </>
  );
}
