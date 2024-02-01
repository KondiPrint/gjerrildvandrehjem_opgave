export default function Beskrivelse() {
  return (
    <>
      <section className='text-fontFarve text-center font-main_font mb-5'>
        <div className='mb-8 sm:w-10/12 xl:w-4/6 mx-auto '>
          <h2 className='text-3xl mb-3'>1 - 4 personers værelse</h2>
          <p>
            Vi har plads til 88 overnattende gæster og værelsesgangen er placeret i god afstand fra husets fællesrum, så du har ro, når du vil sove. Der er dobbeltsenge på flere af værelserne,
            køjesenge og mulighed for ekstra senge, således at der kan sove alt fra 1 person til 5 personer på værelserne. Vi har handicapvenlige toilet- og badefaciliteter og nem adgang rundt i
            huset.
          </p>
        </div>

        <div className='mx-auto w-fit'>
          <h3 className='mb-3 text-xl'>Værelserne er med:</h3>
          <div className='flex md:gap-10 sm:gap-5 flex-wrap justify-center gap-2'>
            <figure className='flex flex-col justify-center'>
              <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/bathICON.png' alt='' className='h-16 w-24 bg-reseda fill-offWhite p-1 px-4 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2'>Maks. Gæster</p>
                <span className='text-sm'>4(+1) Gæster</span>
              </figcaption>
            </figure>
            <figure className='flex flex-col justify-center'>
              <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/windowICON.png' alt='' className='h-16 w-24 bg-reseda fill-offWhite p-1 px-4 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2 text-sm'>Booking af overnatninger</p>
                <span className='text-sm'>1 min</span>
              </figcaption>
            </figure>
            <figure className='flex flex-col justify-center'>
              <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/deskchairICON.png' alt='' className='h-16 w-24 bg-reseda fill-offWhite p-1 px-4 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2'>Sengetype</p>
                <span className='text-sm'>boxmadras + køjeseng</span>
              </figcaption>
            </figure>
            <figure className='flex flex-col justify-center'>
              <img src='../../../../assets/images/VoresVaerelser/Vaerelser_Ikoner/weekendsenglagenICON.png' alt='' className='h-16 w-24 bg-reseda fill-offWhite p-1 py-2 rounded-md mx-auto' />
              <figcaption>
                <p className='-mb-2'>Areal</p>
                <span className='text-sm'>13 m^2</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
