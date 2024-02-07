'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/components/hooks/useRequestData';
import Link from 'next/link';
import { Textarea, Input, Alert, Button } from '@material-tailwind/react';
import Loader from '@/components/Loader';
import { NavbarDropdown } from '@/components/admin/NavbarDropdown';

export default function omosADMIN() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataPUT, isLoading: isLoadingPUT, error: errorPUT, makeRequest: makeRequestPUT } = useRequestData();

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');
  const [content4, setContent4] = useState('');

  useEffect(() => {
    makeRequest(`https://gjerrildapi.onrender.com/aboutus`, 'GET', null);
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.content.title);
      setSubTitle(data.content.subtitle);
      setContent1(data.content.content);
      setContent2(data.content.content2);
      setContent3(data.content.content2);
      setContent4(data.content.content2);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const redigeretText = { content1: content1, content2: content2, content3: content3, content4: content4, title: title, subTitle: subTitle };

    makeRequestPUT(`https://gjerrildapi.onrender.com/aboutus/${e.target.inpID.value}`, 'PUT', redigeretText);
  };
  return (
    <>
      <NavbarDropdown />

      <h1 className='text-center text-4xl font-semibold my-5'>Rediger siden Om os</h1>

      {(error || errorPUT) && <h2>Error ...</h2>}
      {(isLoading || isLoadingPUT) && <Loader />}

      {dataPUT && (
        <Alert color='green' className='text-center italic text-2xl w-fit mx-auto'>
          Teksten er blevet redigeret
        </Alert>
      )}

      {data &&
        data.content.map((e, index) => (
          <div className='container max-w-4xl mx-auto mb-2 ' key={e._id}>
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
                <Input label='Undertitel' defaultValue={e.subtitle} className='bg-white' onInput={(e) => setSubTitle(e.target.value)} />
              </div>
              <div className='max-w-4xl my-5 flex flex-wrap gap-5'>
                <Textarea label='Paragraf 1' defaultValue={e.content1} rows={5} name='txtContent' id='txtContent' onInput={(e) => setContent1(e.target.value)} className='h-48 bg-white' />
                <Textarea label='Paragraf 2' defaultValue={e.content2} rows={5} name='txtContent' id='txtContent' onInput={(e) => setContent2(e.target.value)} className='h-48 bg-white' />
                <Textarea label='Paragraf 3' defaultValue={e.content3} rows={5} name='txtContent' id='txtContent' onInput={(e) => setContent3(e.target.value)} className='h-48 bg-white' />
                <Textarea label='Paragraf 4' defaultValue={e.content4} rows={5} name='txtContent' id='txtContent' onInput={(e) => setContent4(e.target.value)} className='h-48 bg-white' />
              </div>
              <div className='w-max'>
                <Button color='blue' type='submit' size='md'>
                  Anvend ændringer
                </Button>
              </div>
            </form>
          </div>
        ))}
      <div className='px-10'>
        <Link href='/pages/omOs'>
          <Button color='green'>Tilbage</Button>
        </Link>
      </div>
    </>
  );
}
