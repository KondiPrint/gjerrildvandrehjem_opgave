import Header from '@/layout/Header';

export default function ReeParkHero() {
  return (
    <>
      <div className='hero min-h-[600px] relative' style={{ backgroundImage: 'url(../../assets/images/OplevDjurs/ReePark/reeparkHERO.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
      </div>
    </>
  );
}
