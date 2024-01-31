export default function Galleri() {
  return (
    <>
      <section className='text-fontFarve grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 container mx-auto w-2/3 gap-10'>
        <img
          src='../../../../assets/images/værelse3MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_1').showModal()}
        />

        <img
          src='../../../../assets/images/værelse2MedKantOFF.png'
          alt=''
          className='object-cover h-full w-full hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_2').showModal()}
        />

        <img
          src='../../../../assets/images/værelse4MedKantOFF.png'
          alt=''
          className='sm:col-span-2 hover:brightness-90 transition-all duration-200'
          onClick={() => document.getElementById('my_pic_3').showModal()}
        />

        <dialog id='my_pic_1' className='modal'>
          <div className='modal-box'>
            <img src='../../../../assets/images/værelse3MedKantOFF.png' alt='' className='object-cover h-full w-full' />
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>

        <dialog id='my_pic_2' className='modal'>
          <div className='modal-box'>
            <img src='../../../../assets/images/værelse2MedKantOFF.png' alt='' className='object-cover h-full w-full' />
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>

        <dialog id='my_pic_3' className='modal'>
          <div className='modal-box'>
            <img src='../../../../assets/images/værelse4MedKantOFF.png' alt='' className='object-cover h-full w-full' />
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
}
