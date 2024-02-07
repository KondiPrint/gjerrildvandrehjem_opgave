'use client'

import RestaurantHero from '@/components/Restaurant/RestaurantHero';
import React, { useState, useEffect } from 'react';
import Header from '@/layout/Header';
import useRequestData from '@/components/hooks/useRequestData';

export default function restaurant() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/restaurant`, 'GET', null);
  }, []);

  return (
    <>
      <RestaurantHero />

      {data &&
        <article className='container mx-auto px-4 font-main_font'>

          <p>{data.content[0].content}</p>
          <p>{data.content[0].content2}</p>
          <p>{data.content[0].content3}</p>
          <p>{data.content[0].content4}</p>
        </article>
      }
    </>
  );
}
