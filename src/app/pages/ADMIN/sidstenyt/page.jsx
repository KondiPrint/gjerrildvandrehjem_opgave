'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Header from '@/layout/Header';
import Link from 'next/link';
import { Textarea, Input, Alert } from '@material-tailwind/react';
import Loader from '@/components/Loader';
import { NavbarDropdown } from '@/components/admin/NavbarDropdown';

export default function sidsteNytADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [time, setTime] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/happens`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.detskere.title);
      setDate(data.detskere.date);
      setMonth(data.detskere.month);
      setTime(data.detskere.time);
      setLink(data.detskere.link);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { title: title, date: date, month: month, time: time, link: link };

    makeRequestPUT(`https://gjerrildapi.onrender.com/happens/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <NavbarDropdown />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden Sidste nyt</h1>

      {(error || errorPUT) && <h2>Error ...</h2>}
      {(isLoading || isLoadingPUT) && <Loader />}

      {dataPUT && (
        <Alert color='green' className='text-center italic text-2xl w-fit mx-auto'>
          Teksten er blevet redigeret
        </Alert>
      )}

      {data &&
        data.detskere.map((e, index) => (
          <div className='container mx-auto ' key={e._id}>
            <form className='form-control my-10 ' onSubmit={handleSubmit}>
              <input type='hidden' name='inpID' value={e._id} />
              <label className='form-control' name='txtContent'>
                <div className='label'>
                  <span className='label-text'>Rediger "{e.title}"</span>
                </div>
              </label>
              <div className='max-w-xl my-5'>
                <Input label='Titel' defaultValue={e.title} className='bg-white' onInput={(e) => setTitle(e.target.value)} />
              </div>
              <div className=''>
                <div className='max-w-xl'>
                  <Input label='Måned' defaultValue={e.month} className='bg-white' onInput={(e) => setMonth(e.target.value)} />
                </div>
                <div className='max-w-xl my-5'>
                  <Input label='Dato' defaultValue={e.date} className='bg-white' onInput={(e) => setDate(e.target.value)} />
                </div>
                <div className='max-w-xl'>
                  <Input label='Tid' defaultValue={e.time} className='bg-white' onInput={(e) => setTime(e.target.value)} />
                </div>
              </div>
              <div className='max-w-xl my-5'>
                <Input label='Link' defaultValue={e.link} className='bg-white' onInput={(e) => setLink(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-primary h-fit w-fit'>
                Færdiggør
              </button>
            </form>
          </div>
        ))}
      <div className=''>
        <Link
          href={{
            pathname: `/`,
          }}
          className='btn btn-primary mr-5 h-fit flex w-fit mt-10'>
          {' '}
          Tilbage
        </Link>
      </div>
    </>
  );
}
