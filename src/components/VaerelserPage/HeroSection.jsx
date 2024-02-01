import Header from '@/layout/Header';

export default function VaerelseHero() {
  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/VoresVaerelser/værelseHero.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
      </div>
    </>
  );
}
