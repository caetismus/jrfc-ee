import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Academic Projects</h3>
        
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group border-l-4 border-slate-200 hover:border-primary-600 pl-6 py-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {project.category}
                </span>
              </div>
              
              {project.subtitle && (
                <div className="text-md font-serif italic text-slate-700 mb-2">
                  {project.subtitle}
                </div>
              )}

              <p className="text-slate-600 mb-3 leading-relaxed max-w-4xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;