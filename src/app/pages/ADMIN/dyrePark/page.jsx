'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Header from '@/layout/Header';
import Link from 'next/link';
import { Textarea, Input, Alert } from '@material-tailwind/react';
import Loader from '@/components/Loader';

export default function dyreParkADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');
  const [content4, setContent4] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/dyrepark`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.content.title);
      setContent(data.content.content);
      setContent2(data.content.content2);
      setContent3(data.content.content3);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { title: title, content: content, content2: content2, content3: content3 };

    makeRequestPUT(`https://gjerrildapi.onrender.com/nationalpark/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <Header />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden HOME</h1>

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
              <div className='max-w-xl mt-5'>
                <Input label='Titel' defaultValue={e.title} className='bg-white' onInput={(e) => setTitle(e.target.value)} />
              </div>
              <div className='max-w-4xl my-5 flex flex-wrap gap-5'>
                <Textarea label='Paragraf 1' defaultValue={e.content} name='txtContent' id='txtContent' onInput={(e) => setContent(e.target.value)} className='h-32 bg-white' />
                <Textarea label='Paragraf 2' defaultValue={e.content2} name='txtContent' id='txtContent' onInput={(e) => setContent2(e.target.value)} className='h-32 bg-white' />
                <Textarea label='Paragraf 3' defaultValue={e.content3} name='txtContent' id='txtContent' onInput={(e) => setContent3(e.target.value)} className='h-32 bg-white' />
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
