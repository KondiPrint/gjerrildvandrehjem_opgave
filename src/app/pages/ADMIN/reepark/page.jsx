'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Header from '@/layout/Header';
import Link from 'next/link';
import { Textarea, Input, Alert } from '@material-tailwind/react';
import Loader from '@/components/Loader';
import { NavbarDropdown } from '@/components/admin/NavbarDropdown';

export default function reeParkADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/reepark`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.content.title);
      setContent(data.content.content);
      setContent2(data.content.content2);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { content: content, content2: content2, title: title, subTitle: subTitle };

    makeRequestPUT(`https://gjerrildapi.onrender.com/reepark/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <NavbarDropdown />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden Ree Park</h1>

      {(error || errorPUT) && <h2>Error ...</h2>}
      {(isLoading || isLoadingPUT) && <Loader />}

      {dataPUT && (
        <Alert color='green' className='text-center italic text-2xl w-fit mx-auto'>
          Teksten er blevet redigeret
        </Alert>
      )}

      {data &&
        data.content.map((e, index) => (
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
              <div className='max-w-4xl mb-5 flex gap-5'>
                <Textarea label='Paragraf 1' defaultValue={e.content} name='txtContent' id='txtContent' onInput={(e) => setContent(e.target.value)} className='h-48 bg-white' />
                <Textarea label='Paragraf 2' defaultValue={e.content2} name='txtContent' id='txtContent' onInput={(e) => setContent2(e.target.value)} className='h-48 bg-white' />
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
