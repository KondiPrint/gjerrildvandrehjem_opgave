'use client';
import { TbArrowRightCircle } from 'react-icons/tb';
import { useState } from 'react';

export default function FormSetup() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  return (
    <>
      <aside className='container py-8 px-2 mx-auto md:px-4 '>
        <form
          method='POST'
          action={`https://gjerrildvandrerhjem.suitcasebooking.com/da/?datefrom=${dateFrom}&dateto=${dateTo}`}
          target='_blank'
          className='form-control flex-row justify-center mx-auto px-6 py-10 rounded-xl bg-reseda bg-opacity-40'>
          <div className='flex flex-wrap place-items-center gap-5 justify-center'>
            <div>
              <label className='block text-sm font-medium text-fontFarve pl-2'>til/Fra</label>
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

            <button type='submit' className='btn place-self-end rounded-2xl bg-reseda text-offWhite border-none'>
              Tjek tilgængelighed
            </button>
          </div>
        </form>
      </aside>
    </>
  );
}
