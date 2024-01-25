'use client';
import { useState } from 'react';
import Header from './layout/Header';
import { TbArrowRightCircle } from 'react-icons/tb';

export default function Home() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/HeroMedKantOFF.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
        <div className='hero-overlay bg-opacity-40'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Gjerrild Vandrerhjem</h1>
            <p className='mb-5'>På toppen af Djursland - Med dig i centrum.</p>
          </div>
        </div>
      </div>
      <div className='bg-bg-footprint min-h-screen w-full'>
        <main className='container py-8 px-2 mx-auto md:px-4 min-h-full border-2 border-blue-500'>
          <form
            method='POST'
            action={`https://gjerrildvandrerhjem.suitcasebooking.com/da/?datefrom=${dateFrom}&dateto=${dateTo}`}
            target='_blank'
            className=' form-control flex-row justify-center  mx-auto px-6 pb-2 rounded-xl bg-reseda bg-opacity-40'>
            <div className='flex flex-wrap w-full'>
              <label className='label w-full'>
                <span className='label-text'>Tjek ind/ud</span>
              </label>
              <div className='flex gap-10 w-full'>
                <input
                  type='date'
                  id='dateFrom'
                  name='dateTime'
                  className='input border-none text-fontFarve'
                  value={dateFrom}
                  onChange={(e) => {
                    setDateFrom(e.target.value);
                  }}
                />
                <span className='place-self-center -mx-10'>
                  <TbArrowRightCircle />
                </span>
                <input
                  type='date'
                  id='dateFrom'
                  name='dateTime'
                  className='input border-none text-fontFarve'
                  value={dateTo}
                  onChange={(e) => {
                    setDateTo(e.target.value);
                  }}
                />
              </div>

              <label className='form-control w-full max-w-xs '>
                <div className='label '>
                  <span className='label-text'>Antal gæster</span>
                </div>
              </label>
            </div>
          </form>
          <h2 className=''>MAIN PAGE</h2>
          <form className='justify-center  mx-auto px-6 pb-2 rounded-xl bg-reseda bg-opacity-40'>
            <div class='space-y-12'>
              <div class='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div class='sm:col-span-2 sm:col-start-1 w-fit'>
                  <label for='city' class='block text-sm font-medium leading-6 text-gray-900'>
                    City
                  </label>
                  <div class='mt-2'>
                    <input
                      type='date'
                      name='city'
                      id='city'
                      autocomplete='address-level2'
                      class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div class='sm:col-span-2 w-fit'>
                  <label for='region' class='block text-sm font-medium leading-6 text-gray-900'>
                    State / Province
                  </label>
                  <div class='mt-2'>
                    <input
                      type='date'
                      name='region'
                      id='region'
                      autocomplete='address-level1'
                      class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div class='sm:col-span-2 w-fit'>
                  <label for='postal-code' class='block text-sm font-medium leading-6 text-gray-900'>
                    ZIP / Postal code
                  </label>
                  <div class='mt-2'>
                    <select className='select select-bordered rounded-2xl'>
                      <option disabled defaultValue>
                        Vælg antal
                      </option>
                      <option>1-person</option>
                      <option>2-personer</option>
                      <option>3-personer</option>
                      <option>4-personer</option>
                    </select>
                  </div>
                </div>

                <button
                  type='submit'
                  class='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Save
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
