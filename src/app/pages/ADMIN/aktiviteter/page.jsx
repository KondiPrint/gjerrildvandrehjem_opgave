'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Link from 'next/link';
import { Input, Alert, Button } from '@material-tailwind/react';
import Loader from '@/components/Loader';
import { NavbarDropdown } from '@/components/admin/NavbarDropdown';

export default function aktiviteterADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [activity, setActivity] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/activities`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.content.title);
      setActivity(data.content.activity);
      setDistance(data.content.distance);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { title: title, activity: activity, distance: distance };

    makeRequestPUT(`https://gjerrildapi.onrender.com/activities/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <NavbarDropdown />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden Aktiviteter</h1>

      {(error || errorPUT) && <h2>Error ...</h2>}
      {(isLoading || isLoadingPUT) && <Loader />}

      {dataPUT && (
        <Alert color='green' className='text-center italic text-2xl w-fit mx-auto'>
          Teksten er blevet redigeret
        </Alert>
      )}

      {data &&
        data.content.map((e, index) => (
          <div key={e._id}>
            <div className='container max-w-2xl mx-auto mb-2'>
              <form className='form-control my-10 ' onSubmit={handleSubmit}>
                <input type='hidden' name='inpID' value={e._id} />
                <label className='form-control' name='txtContent'>
                  <div className='label mb-5'>
                    <span className='font-bold'>Rediger "{e.title}"</span>
                  </div>
                </label>
                <div className='max-w-xl'>
                  <Input label='Titel' defaultValue={e.title} className='bg-white' onInput={(e) => setTitle(e.target.value)} />
                </div>
                <div className='max-w-xl my-5'>
                  <Input label='Aktivitet' defaultValue={e.activity} className='bg-white' onInput={(e) => setActivity(e.target.value)} />
                </div>
                <div className='max-w-xl mb-5'>
                  <Input label='Antal kilometer' defaultValue={e.distance} className='bg-white' onInput={(e) => setDistance(e.target.value)} />
                </div>
                <div className='flex w-max items-end gap-4'>
                  <Button color='blue' type='submit' size='md'>
                    Anvend ændringer
                  </Button>
                </div>
              </form>
            </div>
            <div className='divider'></div>
          </div>
        ))}
      <div className='px-10'>
        <Link href='/pages/aktiviteter'>
          <Button color='green'>Tilbage</Button>
        </Link>
      </div>
    </>
  );
}
