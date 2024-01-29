import React from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <>
      <div className='bg-offWhite'>
        <img src='../../../assets/images/footerGrafikTOP.svg' alt='' className='relative -bottom-1' />
      </div>
      <footer className='footer md:grid-cols-4 bg-reseda text-offWhite pt-5'>
        <nav className='md:mx-auto items-center pl-10 md:pl-0'>
          <h6 className='footer-title border-b-2 w-40 pb-2'>Nyttige links</h6>
          <a className='link link-hover'>Galleri</a>
          <a className='link link-hover'>Det sker</a>
        </nav>
        <nav className='md:mx-auto items-center pl-10 md:pl-0'>
          <h6 className='footer-title border-b-2 w-40 pb-2'>Kontakt</h6>
          <a className='link link-hover flex gap-1'>
            <FaMapMarkerAlt />
            Dyrehavevej 9, Gjerrild, 8500 Grenaa
          </a>
          <p>CVR-nr. 43385461 </p>
          <a className='link link-hover flex gap-1' href='tel:+4540224199'>
            <FaPhoneAlt /> +4540224199
          </a>
          <a className='link link-hover flex gap-1' href='mailto:info@gjerrildvandrerhjem.dk'>
            <MdEmail />
            info@gjerrildvandrerhjem.dk
          </a>
        </nav>
        <nav className='md:mx-auto pl-10 md:pl-0'>
          <img src='../../../assets/images/LogoGjerrild.png' alt='' className='relative -bottom-1' />
        </nav>
        <aside className='mx-auto'>
          <div className='flex gap-5'>
            <a className='hover:brightness-75 cursor-pointer border rounded-full p-2' href='https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/' target='_blank'>
              <FaFacebookF className='h-10 w-10 ' />
            </a>
            <a className='hover:brightness-75 cursor-pointer border rounded-full p-2' href='https://www.instagram.com/gjerrildvandrerhjem.dk/' target='_blank'>
              <FaInstagram className='h-10 w-10' />
            </a>
          </div>
        </aside>
      </footer>
      <aside className='mx-auto bg-reseda w-full flex justify-center pt-5 pb-1 font-main_font text-offWhite'>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </>
  );
}
