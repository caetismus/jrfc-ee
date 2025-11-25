import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id={SectionId.SKILLS} className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Technical Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h4 className="text-lg font-bold text-primary-600 mb-6 border-b border-slate-100 pb-2">
                {category}
              </h4>
              <ul className="space-y-3">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <span className="text-slate-800 font-medium">{skill.name}</span>
                    {skill.details && (
                      <span className="text-xs text-slate-500">{skill.details}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;