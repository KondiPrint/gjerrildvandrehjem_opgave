'use client';
import { TbArrowRightCircle } from 'react-icons/tb';
import { useState } from 'react';

export default function FormSetup() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <>
      <aside className='container py-8 px-2 mx-auto md:px-4 '>
        <div className='card w-full bg-offWhite px-10 shadow-xl'>
          <div className='card-body items-center'>
            <h2 className='card-title text-fontFarve text-5xl font-normal font-main_font pb-7'>Book dit værelse</h2>
            <div className='card-actions justify-end'>
              <form method='POST' action={`https://gjerrildvandrerhjem.suitcasebooking.com/da/?datefrom=${dateFrom}&dateto=${dateTo}`} target='_blank' className='form-control mx-auto '>
                <div className='flex flex-wrap gap-5 justify-center mb-10'>
                  <div>
                    <label className='block text-sm font-medium text-fontFarve pl-5'>Tjek ind fra/til</label>
                    <div className='flex gap-5 flex-wrap md:input rounded-2xl'>
                      <input
                        type='date'
                        name='dateFrom'
                        id='dateFrom'
                        value={dateFrom}
                        onChange={(e) => {
                          setDateFrom(e.target.value);
                        }}
                        className='block w-fit md:rounded-2xl border-0 text-fontFarve'
                      />

                      <span className='hidden md:block place-self-center text-fontFarve'>
                        <TbArrowRightCircle />
                      </span>

                      <input
                        type='date'
                        name='dateTo'
                        id='dateTo'
                        value={dateTo}
                        onChange={(e) => {
                          setDateTo(e.target.value);
                        }}
                        className='block w-fit md:rounded-2xl border-0 text-fontFarve'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2 w-fit'>
                    <label htmlFor='guests' className='block text-sm font-medium text-fontFarve pl-2'>
                      Antal gæster
                    </label>
                    <select className='select select-bordered rounded-2xl text-fontFarve' name='guests' id='guests' defaultValue='Vælg antal'>
                      <option disabled>Vælg antal</option>
                      <option>1-person</option>
                      <option>2-personer</option>
                      <option>3-personer</option>
                      <option>4-personer</option>
                    </select>
                  </div>
                </div>
                <button type='submit' className='btn place-self-center rounded-2xl bg-reseda text-offWhite border-none'>
                  Tjek tilgængelighed
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
