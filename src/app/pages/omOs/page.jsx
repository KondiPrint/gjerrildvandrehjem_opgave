import Header from '@/layout/Header';

export default function omOs() {
  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/HeroMedKantOFF_omos.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
      </div>
      <main className='container xl:flex-row mx-auto'>

        <div className='xl:flex flex-row md:ps-10 px-5 md:px-0 gap-16 xl:justify-between'>

          <div className='text-fontFarve max-w-[75ch] mx-auto text-center sm:text-left'>

            <h1 className='text-5xl sm:text-6xl text-center'>Lidt om os</h1>

            <p className='sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left pb-14'>Vi er Michael og Anna og vi glæder os til at møde jer</p>

            <p>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

            <p className='py-3'>Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan bruges som bar.</p>

            <p>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

            <p className='pt-3'>Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en kop kaffe.</p>

          </div>

          <div className='lg:mx-auto pt-16 flex justify-center'>
            <img src="/assets/images/OmOsLONG.png" alt="" className='w-[350px] h-[500px] sm:w-[600px] sm:h-[800px] lg:w-[700px] lg:h-[900px] xl:w-[500px] xl:h-[800px] lg:-mt-10' />
          </div>

        </div>

        <div className='flex-wrap flex 2xl:flex justify-center container'>
          <img src="/assets/images/OmOsLONGSQUARE.png" alt="" className='xl:w-[700px] w-[500px]' />
          <img src="/assets/images/OmOsSQUARE.png" alt="" className='xl:w-[700px] w-[500px]' />
        </div>


      </main>
    </>
  );
}
