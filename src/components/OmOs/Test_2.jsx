export default function OmOsContent2() {
  return (
    <>
      <main className='container mx-auto'>
        <section className='lg:grid  font-main_font flex flex-col'>
          <article className='col-start-1 col-end-2 flex flex-col justify-center'>
            <div className=''>
              <div className='text-center space-y-2 mb-5'>
                <h1 className='text-5xl uppercase'>Lidt om os</h1>
                <p className='text-2xl italic'>Vi er Michael og Anna og vi glæder os til at møde jer</p>
              </div>

              <div className='max-w-4xl mx-auto space-y-3'>
                <p className=''>Vi overtog vandrerhjemmet d. 1. september 2022 og har mange planer for stedet, som vi nu er i gang med at realisere.</p>

                <p className='hidden lg:block'>
                  Michael har haft et eventbureau og spiller selv meget musik. Han elsker at bygge og opfinde og skal til at i gang med at renovere den togvogn, der står på vandrerhjemmet, så den kan
                  bruges som bar.
                </p>

                <p className='hidden lg:block'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>

                <p className='hidden lg:block'>
                  Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar
                  med en kop kaffe.
                </p>
              </div>
            </div>
            <div>
              <img src='../../assets/images/OmOs/OmOsSQUARE.png' alt='' className='' />
              <p className='py-3 text-center lg:hidden px-5'>
                Vi går meget op i det gode, personlige værtsskab og hos os vil du opleve hjerterum og masser af hygge. Her er højt til loftet og åbne døre og vi er altid med på en sludder og klar med
                en kop kaffe.
              </p>
            </div>
          </article>

          <div className='self-center'>
            <img src='../../assets/images/OmOs/OmOsLONG.png' alt='' className='' />
            <p className='text-center lg:hidden px-5 py-3'>Anna har arbejdet i restaurationsbranchen i ind- og udland i 16 år og er meget glad for at lave mad og forkæle folk.</p>
          </div>

          <div className='col-span-2 mx-auto'>
            <img src='../../assets/images/OmOs/OmOsLONGSQUARE.png' alt='' className='' />
          </div>
        </section>
      </main>
    </>
  );
}
