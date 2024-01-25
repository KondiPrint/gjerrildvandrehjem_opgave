import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';
import { SlCalender } from 'react-icons/sl';

export default function Header() {
  return (
    <header id='top' className='relative'>
      <nav className='navbar uppercase'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>daisyUI</a>
        </div>
        <div className='flex-none'>
          <menu className='menu menu-horizontal px-1 text-lg'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <a>Værelser</a>
            </li>
            <li>
              <a>Aktiviteter</a>
            </li>
            <li>
              <Link href='../pages/sidsteNyt'>Sidste nyt</Link>
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
          <button className='btn uppercase bg-reseda border-none text-offWhite ml-10 text-lg'>
            <SlCalender />
            Bestil online
          </button>
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
