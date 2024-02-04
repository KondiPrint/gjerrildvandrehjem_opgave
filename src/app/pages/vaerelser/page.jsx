'use client';
import Beskrivelse from '@/components/VaerelserPage/Beskrivelse';
import Galleri from '@/components/VaerelserPage/Galleri';
import HeroCTA from '@/components/VaerelserPage/HeroCTA';
import VaerelseHero from '@/components/VaerelserPage/HeroSection';

export default function vaerelser() {
  return (
    <>
      <div className='relative mb-[12%]'>
        <VaerelseHero />

        <HeroCTA />
      </div>

      <main>
        <Beskrivelse />

        <Galleri />
      </main>
    </>
  );
}
