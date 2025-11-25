import React from 'react';
import { SectionId } from '../types';
import { ENGINEER_ROLE, ENGINEER_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-[60vh] flex flex-col justify-center bg-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          {ENGINEER_NAME}
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-3xl">
          {ENGINEER_ROLE}
        </p>
        <p className="mt-6 text-slate-500 max-w-2xl leading-relaxed text-justify">
          Graduating Electrical Engineering student at Pamantasan ng Lungsod ng Maynila with a focus on power systems, controls, and renewable energy. 
          Interested in gaining hands-on experience, developing technical expertise, and contributing to sustainable energy solutions. 
          Open to opportunities for learning, collaboration, and professional growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
