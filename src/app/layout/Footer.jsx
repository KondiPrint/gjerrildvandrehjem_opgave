import React from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaInstagramSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer items-center p-4 bg-neutral text-neutral-content z-50'>
      <aside className='items-center grid-flow-col'>
        <img className='w-14' src='../../../assets/images/scrummy_white.png' alt='' />
        <p>Copyright © 2024 - Alexander, Andreas, Stefanie & Martin</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a className='hover:brightness-150 cursor-pointer' href='https://videndjurs.dk/' target='_blank'>
          <TbWorldWww className='h-6 w-6' />
        </a>
        <a className='hover:brightness-150 cursor-pointer' href='https://www.instagram.com/gjerrildvandrerhjem.dk/' target='_blank'>
          <FaInstagramSquare className='h-6 w-6' />
        </a>
        <a className='hover:brightness-150 cursor-pointer' href='https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/' target='_blank'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='fill-current'>
            <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
}
