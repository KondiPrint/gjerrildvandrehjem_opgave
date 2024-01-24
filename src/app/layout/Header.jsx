import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function Header() {
  return (
    <header id='top' className='bg-neutral relative'>
      <nav className='navbar'>
        <div className='navbar-start h-fit'></div>
        <div className='navbar-center hidden lg:flex'>
          <menu className='menu menu-horizontal px-1'>
            <li>
              <a>Værelser</a>
            </li>
            <li>
              <a>Aktiviteter</a>
            </li>
            <li>
              <a>Sidste nyt</a>
            </li>
            <li>
              <a>Restaurant</a>
            </li>
            <li>
              <a>Om os</a>
            </li>
            <li>
              <a>Kontakt</a>
            </li>
          </menu>
        </div>
        <div className='navbar-end gap-2'>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS Navbar component' src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <label className='cursor-pointer grid place-items-center'>
            <input type='checkbox' value='dark' className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2' />
            <svg
              className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <circle cx='12' cy='12' r='5' />
              <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
            </svg>
            <svg
              className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
            </svg>
          </label>
        </div>
      </nav>
      <span className='fixed bottom-24 right-1'>
        <a href='#top'>
          <FaChevronUp className='h-5 w-5 fill-black dark:fill-white hidden md:block' />
        </a>
      </span>
    </header>
  );
}
