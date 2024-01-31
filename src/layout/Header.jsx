import React from 'react';
import Link from 'next/link';
import { SlCalender } from 'react-icons/sl';
import ScrollToTop from '@/components/ScrollToTop';

export default function Header() {
  return (
    <header id='top' className='relative bg-fontFarve bg-opacity-35'>
      <nav className='navbar uppercase'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </div>
            <menu tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-offWhite text-fontFarve'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='../pages/vaerelser/'>Værelser</Link>
              </li>
              <li>
                <Link href='../pages/aktiviteter/'>Aktiviteter</Link>
              </li>
              <li>
                <Link href='../pages/sidsteNyt/'>Sidste nyt</Link>
              </li>
              <li>
                <Link href='../pages/restaurant/'>Restaurant</Link>
              </li>
              <li>
                <Link href='../pages/galleri/'>Galleri</Link>
              </li>
              <li>
                <Link href='../pages/omOs/'>Om os</Link>
              </li>
              <li>
                <Link href='../pages/kontakt/'>Kontakt</Link>
              </li>
            </menu>
          </div>
          <a href='/'>
            <img src='../../../assets/images/LogoGjerrild.png' alt='' className='h-24 pl-5 cursor-point' />
          </a>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <menu className='menu menu-horizontal px-1'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='../pages/vaerelser/'>Værelser</Link>
            </li>
            <li>
              <Link href='../pages/aktiviteter/'>Aktiviteter</Link>
            </li>
            <li>
              <Link href='../pages/sidsteNyt/'>Sidste nyt</Link>
            </li>
            <li>
              <Link href='../pages/restaurant/'>Restaurant</Link>
            </li>
            <li>
              <Link href='../pages/galleri/'>Galleri</Link>
            </li>
            <li>
              <Link href='../pages/omOs/'>Om os</Link>
            </li>
            <li>
              <Link href='../pages/kontakt/'>Kontakt</Link>
            </li>
          </menu>
          <a href='https://gjerrildvandrerhjem.suitcasebooking.com/da/' target='_blank'>
            <button className='btn uppercase bg-reseda border-none text-offWhite lg:text-base xl:text-lg hidden lg:flex'>
              <SlCalender />
              Bestil online
            </button>
          </a>
        </div>

        <div className='navbar-end lg:hidden flex'>
          <a href='https://gjerrildvandrerhjem.suitcasebooking.com/da/' target='_blank'>
            <button className='btn uppercase bg-reseda border-none text-offWhite lg:text-base xl:text-lg'>
              <SlCalender />
              Bestil online
            </button>
          </a>
        </div>
      </nav>

      <ScrollToTop />
    </header>
  );
}
