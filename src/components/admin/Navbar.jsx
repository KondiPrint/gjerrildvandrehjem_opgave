import React from 'react';
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react';
import { FaXmark } from 'react-icons/fa6';
import { HiMiniBars3 } from 'react-icons/hi2';
import Link from 'next/link';

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Home
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Værelser
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Aktiviteter
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Sidste nyt
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Restaurant
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Galleri
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Om os
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='#' className='flex items-center hover:text-blue-500 transition-colors'>
          Kontakt
        </Link>
      </Typography>
    </ul>
  );
}

export function NavbarAdmin() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='mx-auto max-w-screen-xl px-6 py-3'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography as='a' href='#' variant='h6' className='mr-4 cursor-pointer py-1.5'>
          ADMIN
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? <FaXmark className='h-6 w-6' strokeWidth={2} /> : <HiMiniBars3 className='h-6 w-6' strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
