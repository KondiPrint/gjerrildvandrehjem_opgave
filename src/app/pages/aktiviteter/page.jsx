'use client';

import Header from '@/layout/Header';
import Link from 'next/link';
import { useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';

export default function aktiviteter() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest('https://gjerrildapi.onrender.com/happens', 'GET');
  }, []);
  return (
    <>
      <Header />
      <menu className='menu menu-horizontal'>
        <li>
          <Link href='/pages/aktiviteter/kattegat'>Kattegat</Link>
        </li>
        <li>
          <Link href='/pages/aktiviteter/nationalPark'>Mols bjerge</Link>
        </li>
        <li>
          <Link href='/pages/aktiviteter/nordStrand'>Nordstrand</Link>
        </li>
        <li>
          <Link href='/pages/aktiviteter/reePark'>Ree Park</Link>
        </li>
        <li>
          <Link href='/pages/aktiviteter/sommerLand'>Djurs Sommerland</Link>
        </li>
        <li>
          <Link href='/pages/aktiviteter/dyrePark'>Dyre park</Link>
        </li>
      </menu>
    </>
  );
}
