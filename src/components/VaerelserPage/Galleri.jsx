'use client';

import { useState } from 'react';
import { Card, Dialog, DialogBody } from '@material-tailwind/react';

export default function Galleri() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <>
      <section className='text-fontFarve grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-auto container mx-auto w-2/3 gap-5  place-items-center'>
        <img
          alt='nature'
          className='object-cover hover:brightness-90 transition-all duration-200'
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse3MedKantOFF.png'
          onClick={() => handleOpen('../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse3MedKantOFF.png')}
        />
        <img
          alt='nature'
          className='object-cover hover:brightness-90 transition-all duration-200'
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse2MedKantOFF.png'
          onClick={() => handleOpen('../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse2MedKantOFF.png')}
        />
        <img
          alt='nature'
          className='sm:col-span-2 hover:brightness-90 transition-all duration-200'
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse4MedKantOFF.png'
          onClick={() => handleOpen('../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse4MedKantOFF.png')}
        />
        {selectedImage && (
          <Dialog size='xl' open={open} handler={handleClose}>
            <DialogBody>
              <img alt='nature' className='h-[70rem] w-full rounded-lg object-cover object-center' src={`../../assets/images/Galleri/${selectedImage}`} />
            </DialogBody>
          </Dialog>
        )}
      </section>

      {/* <section className='text-fontFarve grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 container mx-auto w-2/3 gap-5'>
        <img
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse3MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <img
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse2MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <img
          src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse4MedKantOFF.png'
          alt=''
          className='sm:col-span-2 hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <dialog id='my_pic_slide' className='modal'>
          <div className='modal-box max-w-3xl'>
            <div className='carousel w-full'>
              <div id='slide1' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse3MedKantOFF.png' className='object-cover mx-auto' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <Link href='#slide3' className='btn btn-circle'>
                    ❮
                  </Link>
                  <Link href='#slide2' className='btn btn-circle'>
                    ❯
                  </Link>
                </div>
              </div>
              <div id='slide2' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse2MedKantOFF.png' className='object-cover mx-auto' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <Link href='#slide1' className='btn btn-circle'>
                    ❮
                  </Link>
                  <Link href='#slide3' className='btn btn-circle'>
                    ❯
                  </Link>
                </div>
              </div>
              <div id='slide3' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Gallery/værelse4MedKantOFF.png' className='object-cover mx-auto' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <Link href='#slide2' className='btn btn-circle'>
                    ❮
                  </Link>
                  <Link href='#slide1' className='btn btn-circle'>
                    ❯
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
      </section> */}
    </>
  );
}
