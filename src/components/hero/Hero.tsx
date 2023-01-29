import React from 'react';
import HeroImage from './HeroImage';
import Advert from './Advert';
import Carosel from './Carosel';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex gap-4 w-full max-w-[1200px] mx-auto mt-24">
      <aside className="w-[200px]">
        <HeroImage />
      </aside>
      <div className="flex-1 border-red-500 border-2">
        <Carosel />
      </div>
      <aside className="w-[200px]">
        {' '}
        <Advert />
      </aside>
    </section>
  );
};

export default Hero;
