import KontaktHero from '@/components/KontaktPage/KontaktHero';
import FormSetupKontakt from '@/components/KontaktPage/FormSetup';
import KontaktMap from '@/components/KontaktPage/GoogleMap';

export default function kontakt() {
  return (
    <>
      <div className='relative mb-[10%]'>
        <KontaktHero />

        <div className='lg:absolute mx-auto bottom-[-5%] lg:right-[10%] xl:right-[20%] w-fit mt-10'>
          <div className='w-full border-fontFarve border rounded-3xl lg:border-0'>
            <FormSetupKontakt />
          </div>
        </div>
      </div>

      <section className='text-fontFarve'>
        <KontaktMap />
      </section>
    </>
  );
}
