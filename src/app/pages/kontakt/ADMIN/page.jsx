'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Header from '@/layout/Header';
import Link from 'next/link';
import { Textarea, Input, Alert } from '@material-tailwind/react';
import Loader from '@/components/Loader';

export default function kattegatADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/contact`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.contact.title);
      setSubTitle(data.contact.subtitle);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { title: title, subTitle: subTitle };

    makeRequestPUT(`https://gjerrildapi.onrender.com/contact/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <Header />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden KONTAKT</h1>

      {(error || errorPUT) && <h2>Error ...</h2>}
      {(isLoading || isLoadingPUT) && <Loader />}

      {dataPUT && (
        <Alert color='green' className='text-center italic text-2xl w-fit mx-auto'>
          Teksten er blevet redigeret
        </Alert>
      )}

      {data &&
        data.contact.map((e, index) => (
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
              <div className='max-w-xl'>
                {/* <Input label='Undertitel' defaultValue={e.subtitle} className='bg-white' onInput={(e) => setSubTitle(e.target.value)} /> */}
                <Textarea label='Body1' defaultValue={e.subtitle} name='txtContent' id='txtContent' onInput={(e) => setSubTitle(e.target.value)} className='h-48 bg-white' />
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
