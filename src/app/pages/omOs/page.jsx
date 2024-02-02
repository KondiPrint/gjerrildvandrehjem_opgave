import Header from '@/layout/Header';
import { SlCalender } from 'react-icons/sl';

export default function omOs() {
  return (
    <>
      <div className='hero min-h-screen relative' style={{ backgroundImage: 'url(../../assets/images/OmOs/HeroMedKantOFF.png)' }}>
        <div className='absolute top-0 text-offWhite w-full'>
          <Header />
        </div>
      </div>
      <main className='container xl:flex-row mx-auto'>
        <div className='xl:flex flex-row md:ps-10 px-5 md:px-0 gap-16 xl:justify-between'>
          <div className='text-fontFarve max-w-[75ch] mx-auto text-center sm:text-left'>
            <main className='container xl:flex-row mx-auto text-fontFarve'>

              <div className='xl:flex flex-row px-8 gap-16 xl:justify-between'>

                <div className='max-w-[75ch] mx-auto text-center sm:text-left'>

                  <h1 className='text-5xl sm:text-6xl text-center'>Lidt om os</h1>

                  <p className='sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left pb-4 lg:pb-6 xl:pb-14'>Vi er Michael og Anna og vi glæder os til at møde jer</p>

                  <p className='text-center xl:text-left'>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

                  <p className='py-3'>
                    Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
                    bruges som bar.
                  </p>
                  <p className='py-3 hidden xl:block'>Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan bruges som bar.</p>

                  <p className='hidden xl:block'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

                  <p className='pt-3'>
                    Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en
                    kop kaffe.
                  </p>
                </div>

                <div className='lg:mx-auto pt-16 flex justify-center'>
                  <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='w-[350px] h-[500px] sm:w-[600px] sm:h-[800px] lg:w-[700px] lg:h-[900px] xl:w-[500px] xl:h-[800px] lg:-mt-10' />
                </div>
              </div>

              <div className='flex-wrap flex 2xl:flex justify-center container'>
                <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='xl:w-[700px] w-[500px]' />
                <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='xl:w-[700px] w-[500px]' />
              </div>
              <p className='pt-3 hidden xl:block'>Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en kop kaffe.</p>

              <button className='btn uppercase bg-reseda border-none text-offWhite lg:text-base xl:text-lg xl:flex mb-16 hidden mx-auto xl:mt-16'>
                <SlCalender />
                Bestil online
              </button>

          </div>

          <div className='lg:mx-auto pt-0 lg:pt-5 xl:pt-16 flex justify-center'>
            <img src="/assets/images/OmOsLONG.png" alt="" className='w-[500px] h-[700px] sm:w-[600px] sm:h-[800px] lg:w-[700px] lg:h-[900px] xl:w-[500px] xl:h-[800px] lg:-mt-10' />
          </div>

          <p className='py-3 xl:hidden text-center'>Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan bruges som bar.</p>

        </div>

        <div className='flex-wrap flex xl:flex justify-center container'>
          <img src="/assets/images/OmOsLONGSQUARE.png" alt="" className='2xl:w-[700px] xl:w-[600px] w-[500px]' />
          <p className='text-center xl:hidden px-5 py-3'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
          <img src="/assets/images/OmOsSQUARE.png" alt="" className='2xl:w-[700px] xl:w-[600px] w-[500px]' />
          <p className='py-3 text-center xl:hidden px-5'>Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en kop kaffe.</p>
        </div>

        <div className='flex justify-center'>
          <button className='btn uppercase bg-reseda border-none text-offWhite lg:text-base xl:text-lg lg:flex mt-5 mb-16 xl:hidden'>
            <SlCalender />
            Bestil online
          </button>
        </div>



      </main>
    </>
  );
}
