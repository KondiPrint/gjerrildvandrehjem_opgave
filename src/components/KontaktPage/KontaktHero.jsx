import Header from '@/layout/Header';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function KontaktHero() {
  return (
    <>
      <div className='hero min-h-screen relative bg-reseda lg:grid lg:grid-cols-2'>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
        <div className='max-w-xl font-main_font pt-12 w-11/12 text-offWhite '>
          <h1 className=' text-2xl md:text-5xl xl:whitespace-nowrap drop-shadow-2xl text-start'>Kontakt os</h1>
          <p className='italic font-main_font text-xl drop-shadow-2xl mb-10'>
            Hvis du har et spørgsmål eller kan vi på nogen anden måde kan hjælpe dig, så tøv ikke med at tage fat i os, i formularen her under kan du indtaste dine oplysninger og så vil vi svare dig
            hurtigst muligt, du er også altid velkommen til at ringe til os.
          </p>
          <div className='w-1/2 my-5 border-b-2'>
            <span className='flex gap-1 items-center'>
              <FaMapMarkerAlt />
              Adresse
            </span>
            <Link
              className='hover:brightness-75'
              href='https://www.google.com/maps/place/Danhostel+Gjerrild/@56.5038244,10.8169909,17z/data=!4m18!1m8!3m7!1s0x464e808fa92544d9:0xaa5aea2afadd2401!2sDyrehavevej+9,+8500+Gren%C3%A5!3b1!8m2!3d56.5038244!4d10.8169909!16s%2Fg%2F11c1t_yf2q!3m8!1s0x464e808fabeadcbb:0xc1b5b962ca5e779!5m2!4m1!1i2!8m2!3d56.503793!4d10.816689!16s%2Fg%2F119vp4t1v?entry=ttu'
              target='_blank'>
              Dyrehavevej 9, 8500 Grenaa
            </Link>
          </div>
          <div className='w-1/2 my-5 border-b-2'>
            <span className='flex gap-1 items-center'>
              <FaPhoneAlt />
              Telefon
            </span>
            <Link className='hover:brightness-75' href='tel:+4540224199'>
              +45 40224199
            </Link>
          </div>
          <div className='w-1/2 my-5 border-b-2'>
            <span className='flex gap-1 items-center'>
              <MdEmail />
              Email
            </span>
            <Link className='hover:brightness-75' href='mailto:info@gjerrildvandrerhjem.dk'>
              info@gjerrildvandrerhjem.dk
            </Link>
          </div>
          <aside className='mx-auto mt-10'>
            <div className='flex gap-5'>
              <Link className='hover:brightness-75 cursor-pointer border rounded-full p-2' href='https://www.facebook.com/people/Danhostel-Gjerrild-Vandrerhjem/100085306731927/' target='_blank'>
                <FaFacebookF className='h-10 w-10 ' />
              </Link>
              <Link className='hover:brightness-75 cursor-pointer border rounded-full p-2' href='https://www.instagram.com/gjerrildvandrerhjem.dk/' target='_blank'>
                <FaInstagram className='h-10 w-10' />
              </Link>
            </div>
          </aside>
        </div>
        <div className='h-full w-full col-start-2 col-span-2 lg:flex justify-end hidden'>
          <div className='h-full w-2/3 bg-section_colour '></div>
        </div>
      </div>
    </>
  );
}
