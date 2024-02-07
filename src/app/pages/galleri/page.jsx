'use client'

import { GalleriSlider } from '@/components/Galleri/GalleriSlider';
import Header from '@/layout/Header';

export default function GalleriSide() {

  return (
    <>
        <Header />
      
  {/*     <div class='container mx-auto px-5 py-10 lg:px-32 lg:pt-24'>
        <div class='-m-1 flex flex-wrap md:-m-2'>
          <div class='flex w-1/2 flex-wrap'>
            <div class='w-1/2 p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='../../assets/images/OmOs/OmOsLONGSQUARE.png' />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='../../assets/images/OmOs/OmOsSQUARE.png' />
            </div>
            <div class='w-full p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp' />
            </div>
          </div>
          <div class='flex w-1/2 flex-wrap'>
            <div class='w-full p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp' />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp' />
            </div>
            <div class='w-1/2 p-1 md:p-2'>
              <img alt='gallery' class='block h-full w-full rounded-lg object-cover object-center' src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp' />
            </div>
          </div>
        </div>
      </div> */}
      <GalleriSlider/>

      

    </>
  );
}
