import { Carousel } from '@material-tailwind/react';

export function GalleriSlider({ data }) {
  return (
    <>
      <h1 className='font-main_font text-center mt-5 uppercase font-medium text-3xl tracking-widest bg-reseda py-6 text-white'>Galleri</h1>

      <Carousel
        className='rounded-xl h-96 w-fit mx-3 my-5 lg:h-[600px]'
        autoplay={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>
        {data &&
          data.content.map((e, i) => {
            return <img key={i} src={`../../assets/images/Galleri/${e.image}`} alt='' className='h-full w-full object-cover' />;
          })}
      </Carousel>
    </>
  );
}
