import React from 'react';
import { Navbar, Collapse, Typography, Button, IconButton, List, ListItem, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import Link from 'next/link';
import { FaXmark, FaChevronDown } from 'react-icons/fa6';
import { HiMiniBars3 } from 'react-icons/hi2';

const navListMenuItems = [
  {
    title: 'Kattegat',
    link: '/pages/admin/kattegat',
  },
  {
    title: 'Djurs Sommerland',
    link: '/pages/admin/djurs-sommerland',
  },
  {
    title: 'Gjerrild Nordstrand',
    link: '/pages/admin/nordstrand',
  },
  {
    title: 'Nationalpark Mols Bjerge',
    link: '/pages/admin/nationalpark',
  },
  {
    title: 'Ree Park',
    link: '/pages/admin/reepark',
  },
  {
    title: 'Skandinavisk Dyrepark',
    link: '/pages/admin/dyrepark',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, link }, key) => (
    <MenuItem key={key} className='flex items-center gap-3 rounded-lg'>
      <div>
        <Typography variant='h6' color='blue-gray' className='flex items-center text-sm font-bold'>
          <Link href={link}>{title}</Link>
        </Typography>
      </div>
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }} placement='bottom' allowHover={true}>
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem className='flex items-center gap-2 py-2 pr-4 font-medium text-gray-900' selected={isMenuOpen || isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              Under aktiviteter
              <FaChevronDown strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? 'rotate-180' : ''}`} />
              <FaChevronDown strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden max-w-screen-xl rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1'>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/' className='flex items-center hover:text-blue-500 transition-colors'>
          Home
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/vaerelser' className='flex items-center hover:text-blue-500 transition-colors'>
          Værelser
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/aktiviteter' className='flex items-center hover:text-blue-500 transition-colors'>
          Aktiviteter
        </Link>
      </Typography>
      <NavListMenu />
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/sidstenyt' className='flex items-center hover:text-blue-500 transition-colors'>
          Sidste nyt
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/restaurant' className='flex items-center hover:text-blue-500 transition-colors'>
          Restaurant
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/galleri' disabled className='flex items-center hover:text-blue-500 transition-colors'>
          Galleri
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/omos' className='flex items-center hover:text-blue-500 transition-colors'>
          Om os
        </Link>
      </Typography>
      <Typography as='li' variant='small' color='blue-gray' className='p-1 font-medium'>
        <Link href='/pages/admin/kontakt' className='flex items-center hover:text-blue-500 transition-colors'>
          Kontakt
        </Link>
      </Typography>
    </List>
  );
}

export function NavbarDropdown() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className='mx-auto max-w-screen-xl px-4 py-2'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <div className='flex items-center'>
          <Typography as='a' href='/' variant='h6' className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
            <img src='../../../assets/images/Header_Footer/LogoGjerrild.png' alt='' className='h-24 pl-5 cursor-point invert' />
          </Typography>
          <Typography as='a' href='#' variant='h6' className='mr-4 cursor-pointer py-1.5 lg:ml-2'>
            ADMIN
          </Typography>
        </div>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton variant='text' color='blue-gray' className='lg:hidden' onClick={() => setOpenNav(!openNav)}>
          {openNav ? <FaXmark className='h-6 w-6' strokeWidth={2} /> : <HiMiniBars3 className='h-6 w-6' strokeWidth={2} />}
        </IconButton>
      </div>
    </Navbar>
  );
}
