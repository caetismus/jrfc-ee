import React from 'react';
import { SectionId } from '../types';
import { ENGINEER_ROLE, ENGINEER_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-[60vh] flex flex-col justify-center bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          {ENGINEER_NAME}
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-3xl">
          {ENGINEER_ROLE}
        </p>
        <p className="mt-6 text-slate-500 max-w-2xl leading-relaxed">
          Results-oriented graduate with a strong interest in energy and renewables. 
          Aspiring Registered Electrical Engineer (REE) focused on quality, critical thinking, and innovation.
        </p>
      </div>
    </section>
  );
};

export default Hero;
