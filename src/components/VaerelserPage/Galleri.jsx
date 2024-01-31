export default function Galleri() {
  return (
    <>
      <section className='text-fontFarve grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 container mx-auto w-2/3 gap-5'>
        <img
          src='../../../../assets/images/værelse3MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <img
          src='../../../../assets/images/værelse2MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <img
          src='../../../../assets/images/værelse4MedKantOFF.png'
          alt=''
          className='sm:col-span-2 hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_slide').showModal()}
        />

        <dialog id='my_pic_slide' className='modal'>
          <div className='modal-box max-w-3xl'>
            <div className='carousel w-full'>
              <div id='slide1' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/værelse3MedKantOFF.png' className='w-full' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide4' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide2' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide2' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/værelse2MedKantOFF.png' className='w-full' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide1' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide3' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
              <div id='slide3' className='carousel-item relative w-full'>
                <img src='../../../../assets/images/værelse4MedKantOFF.png' className='w-full' />
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide2' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide1' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
}
