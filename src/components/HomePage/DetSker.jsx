export default function DetSker({ data }) {
  return (
    <>
      <section className='bg-section_colour p-4 py-14'>
        <div className='container text-center mx-auto font-main_font text-offWhite lg:w-1/2 mb-10'>
          <h2 className='uppercase text-5xl mb-1'>TITEL: Det sker</h2>
          <p>
            CONTENT: Her finder du en samlet oversigt over alle de spænende ting der sker på Gjerrild vandrerhjem. Hvis du har en idé til noget du gerne vil afholde hos os, så tøv ikke med at kontakte
            os, vi elsker gode initiativer og ideer. Vi ønsker at være både et vandrerhjem og kulturhus, og vi kan faciliterer alt lige fra foredrag og koncerter, til kurser og festivaler
          </p>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-rows-2 container mx-auto md:gap-10 gap-y-10 justify-center w-fit'>
          {data &&
            data.detskere.map((f, index) => (
              <div key={f._id}>
                <a href={f.link} target='_blank'>
                  <div className='card card-compact w-96 bg-offWhite shadow-xl'>
                    <figure className='relative hover:brightness-75 transition-all duration-200'>
                      <img src={`../../assets/images/detsker/${f.image}`} alt='Shoes' />
                    </figure>
                    <span className='absolute top-0 right-0 bg-fontFarve rounded-tr-2xl rounded-bl-2xl p-2 bg-opacity-40'>
                      <p className='text-[0.6rem] text-offWhite'>{f.month}</p>
                      <p className='text-sm font-semibold text-offWhite'>{f.date}</p>
                    </span>
                    <div className='card-body'>
                      <h2 className='card-title font-main_font text-fontFarve mx-auto'>{f.title}</h2>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
