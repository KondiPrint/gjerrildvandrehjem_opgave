import Header from '@/layout/Header';

export default function HomeHero() {
  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/HeroMedKantOFF.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
        <div className='hero-content text-center text-neutral-content flex-col flex-wrap'>
          <h1 className=' text-3xl md:text-8xl xl:whitespace-nowrap font-main_font text-offWhite drop-shadow-2xl'>TITLE: Gjerrild Vandrerhjem</h1>
          <p className='italic text-offWhite font-main_font text-xl md:text-3xl drop-shadow-2xl'>UNDERTITEL/CONTENT: På toppen af Djursland - Med dig i centrum.</p>
        </div>
        <div className='absolute bottom-20'></div>
      </div>
    </>
  );
}
