'use client';

import { useState } from 'react';
import { Card, Dialog, DialogBody } from '@material-tailwind/react';

export function GalleriContent({ data }) {
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
      <div className='grid grid-cols-2 gap-5 md:grid-cols-4 container mx-auto'>
        {data &&
          data.content.map((e, index) => (
            <Card key={index} className='h-64 cursor-pointer overflow-hidden transition-opacity hover:opacity-90' onClick={() => handleOpen(e.image)}>
              <img alt='nature' className='h-full w-full object-cover object-center' src={`../../assets/images/Galleri/${e.image}`} onClick={() => handleOpen(e.image)} />
            </Card>
          ))}
        {selectedImage && (
          <Dialog size='xl' open={open} handler={handleClose}>
            <DialogBody>
              <img alt='nature' className='h-[70rem] w-full rounded-lg object-cover object-center' src={`../../assets/images/Galleri/${selectedImage}`} />
            </DialogBody>
          </Dialog>
        )}
      </div>
    </>
  );
}
