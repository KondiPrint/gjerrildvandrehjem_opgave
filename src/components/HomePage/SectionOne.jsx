export default function GjerrildVandrerHjem() {
  return (
    <>
      <section className=' my-32 grid lg:grid-cols-5 font-main_font text-center container py-8 px-2 mx-auto md:px-4 '>
        <img className='col-span-3 place-self-center 2xl:place-self-auto' src='../../assets/images/VandrerhjeMedKantOFF.png' alt='' />
        <div className='[&>p]:text-base [&>p]:sm:text-sm [&>p]:xl:text-base [&>p]:2xl:text-lg [&>p]:first-of-type:xl:pb-6 [&>p]:first-of-type:pb-4 col-span-2 text-fontFarve'>
          <div>
            <h2 className='text-4xl uppercase mt-8'>TITLE: Gjerrild vandrerhjem</h2>
            <p className='italic text-lg pt-1 pb-3 xl:pb-6'>UNDERTITLE: På toppen af Djursland - med dig i centrum</p>
          </div>
          <p>
            CONTENT_1: Vandrerhjemmet ligger skønt placeret på toppen af Djursland i den smukke by Gjerrild, mellem bøgeskove og strand. Vi har de perfekte rammer til ethvert ophold og her er altid
            noget at lave. Vi ligger tæt på klinter til fiskeri og gode sandstrande og der er mange børnevenlige aktiviteter og attraktioner i nem gå- og køreafstand.
          </p>
          <p>
            CONTENT_2: I Gjerrild oplever du alt det bedste Norddjursland har at byde på og vi er stolte af, at vandrerhjemmet er placeret her. Bygningen er en flot, gammel togremisse og har fungeret
            som vandrerhjem siden d. 22. juni 1973, hvor de første gæster overnattede. Bygningerne er blevet flot vedligeholdt gennem årene og der kommer til at ske grønne tiltag i løbet af de næste
            år for at hjælpe vandrerhjemmet ind i fremtiden på en mere bæredygtig måde.
          </p>
          <button className='btn-sm rounded-2xl px-8 uppercase font-semibold bg-reseda text-offWhite'>Se mere</button>
        </div>
      </section>
    </>
  );
}
