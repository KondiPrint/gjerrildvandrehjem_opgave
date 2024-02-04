export default function OmOsContent1() {
  return (
    <>
      <main className='container mx-auto'>
        <section className='xl:grid xl:grid-cols-2 font-main_font'>
          <article className='xl:col-span-2'>
            <div className='text-center space-y-2 mb-5'>
              <h1 className='text-5xl uppercase'>Lidt om os</h1>
              <p className='text-2xl italic'>Vi er Michael og Anna og vi glæder os til at møde jer</p>
            </div>

            <div className='max-w-4xl mx-auto space-y-3'>
              <p className=''>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

              <p className='hidden xl:block'>
                Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
                bruges som bar.
              </p>

              <p className='hidden xl:block'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

              <p className='hidden xl:block'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med
                en kop kaffe.
              </p>
            </div>
          </article>

          <section className='xl:col-start-1 xl:col-end-2 flex flex-col xl:justify-center'>
            <div className=''>
              <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='object-cover' />
              <p className='xl:hidden text-center px-10'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
            </div>

            <div>
              <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='object-cover' />
              <p className='xl:hidden text-center px-10'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med
                en kop kaffe.
              </p>
            </div>
          </section>

          <div className='xl:self-center'>
            <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='object-cover' />
          </div>
        </section>
      </main>
    </>
  );
}
