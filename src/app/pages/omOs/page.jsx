import OmOsContent1 from '@/components/OmOs/Test_1';
import OmOsContent2 from '@/components/OmOs/Test_2';
import OmOsContent3 from '@/components/OmOs/Test_3';
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

      {/* <OmOsContent1 /> */}

      {/* <OmOsContent2 /> */}

      <OmOsContent3 />

      {/* <main className='container xl:flex-row mx-auto text-fontFarve'>
        <section className='grid font-main_font'>
          <div className='col-span-2'>
            <h1 className='text-5xl sm:text-6xl text-center uppercase'>Lidt om os</h1>
            <p className='sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left pb-4 lg:pb-6 xl:pb-14'>Vi er Michael og Anna og vi glæder os til at møde jer</p>

            <p className='text-center xl:text-left'>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

            <p className='py-3 hidden xl:block'>
              Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
              bruges som bar.
            </p>

            <p className='hidden xl:block'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

            <p className='pt-3 hidden xl:block'>
              Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en
              kop kaffe.
            </p>
          </div>
          <article className=' col-start-1 col-end-2 flex flex-col justify-center'>
            <div className=''>
              <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='' />
              <p className='text-center xl:hidden px-5 py-3'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
            </div>

            <div>
              <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='' />
              <p className='py-3 text-center xl:hidden px-5'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med
                en kop kaffe.
              </p>
            </div>
          </article>

          <div className='self-center'>
            <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='' />
          </div>

          <div className='col-span-2 mx-auto'>
            <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='' />
            <p className='text-center xl:hidden px-5 py-3'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
          </div>
        </section>

        <div className='grid grid-cols-2 grid-rows-3'>
          
          <div className='xl:flex flex-row px-8 gap-16 xl:justify-between col-start-1 col-end-2'>
            <div className='max-w-[75ch] mx-auto text-center sm:text-left'>
              <h1 className='text-5xl sm:text-6xl text-center'>Lidt om os</h1>

              <p className='sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left pb-4 lg:pb-6 xl:pb-14'>Vi er Michael og Anna og vi glæder os til at møde jer</p>

              <p className='text-center xl:text-left'>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

              <p className='py-3 hidden xl:block'>
                Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
                bruges som bar.
              </p>

              <p className='hidden xl:block'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

              <p className='pt-3 hidden xl:block'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med
                en kop kaffe.
              </p>
            </div>

            <div className='lg:mx-auto pt-0 lg:pt-5 xl:pt-16 flex justify-center col-start-2 col-end-'>
              <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='w-[500px] h-[700px] sm:w-[600px] sm:h-[800px] lg:w-[700px] lg:h-[900px] xl:w-[500px] xl:h-[800px] lg:-mt-10' />
            </div>

            <p className='py-3 xl:hidden text-center'>
              Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
              bruges som bar.
            </p>
          </div>

          <div className='flex-wrap flex xl:flex justify-center container'>
            <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='2xl:w-[700px] xl:w-[600px] w-[500px]' />
            <p className='text-center xl:hidden px-5 py-3'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
            <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='2xl:w-[700px] xl:w-[600px] w-[500px]' />
            <p className='py-3 text-center xl:hidden px-5'>
              Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med en
              kop kaffe.
            </p>
          </div>
        </div>
      </main> */}
    </>
  );
}
