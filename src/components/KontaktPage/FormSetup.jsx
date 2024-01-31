'use client';

export default function FormSetupKontakt() {
  return (
    <>
      <aside className=' bg-offWhite shadow-xl p-6 rounded-3xl'>
        <h2 className='text-fontFarve text-5xl font-normal font-main_font mb-4'>Send en besked</h2>
        <form>
          <div className='space-y-2 text-fontFarve w-fit font-main_font'>
            <div className='flex gap-x-2 justify-center  max-w-xs'>
              <div className=''>
                <label htmlFor='first-name' className='block text-sm font-medium text-gray-900'>
                  Fornavn
                </label>
                <div className='mt-2'>
                  <input type='text' name='first-name' id='first-name' autoComplete='given-name' placeholder='Fornavn her' className='input input-bordered w-full max-w-xs' />
                </div>
              </div>

              <div className=' max-w-xs'>
                <label htmlFor='last-name' className='block text-sm font-medium text-gray-900'>
                  Efternavn
                </label>
                <div className='mt-2'>
                  <input type='text' name='last-name' id='last-name' autoComplete='family-name' placeholder='Efternavn her' className='input input-bordered w-full max-w-xs' />
                </div>
              </div>
            </div>

            <div className=' max-w-xs'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-900'>
                Email
              </label>
              <div className='mt-2'>
                <input type='email' name='email' id='email' autoComplete='email' placeholder='Email her' className='input input-bordered w-full' />
              </div>
            </div>

            <div className=' max-w-xs'>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-900'>
                Telefonnummer
              </label>
              <div className='mt-2'>
                <input type='tel' name='phone' id='phone' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' autoComplete='tel' placeholder='Telefonnummer her' className='input input-bordered w-full' />
              </div>
            </div>

            <div className=' max-w-xs'>
              <label htmlFor='subject' className='block text-sm font-medium text-gray-900'>
                Emne
              </label>
              <div className='mt-2'>
                <input type='text' name='subject' id='subject' placeholder='Emne her' className='input input-bordered w-full' />
              </div>
            </div>

            <div className=' max-w-xs'>
              <label htmlFor='about' className='block text-sm font-medium text-gray-900'>
                Din besked
              </label>
              <div className='mt-2'>
                <textarea id='about' name='about' placeholder='Skriv din besked her' defaultValue={''} className='textarea textarea-bordered textarea-lg w-full'></textarea>
              </div>
            </div>
          </div>
        </form>
      </aside>
    </>
  );
}
