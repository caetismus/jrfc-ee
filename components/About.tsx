import React from 'react';
import { SectionId } from '../types';
import { EDUCATION, EXPERIENCE, CERTIFICATIONS } from '../constants';
import { GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  
  // Helper function to render text with bold markers (**text**)
  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-slate-900 font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id={SectionId.ABOUT} className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Experience (Now First) */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-primary-600" /> Internship Experience
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-6 space-y-8">
            {EXPERIENCE.map((exp, index) => {
              // Highlight the latest experience (index 0)
              const isLatest = index === 0;
              
              return (
                <div key={index} className="relative pl-12">
                  {/* Logo Container - Rounded Square (rounded-lg) */}
                  <div className={`absolute -left-6 top-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm z-10 
                    ${isLatest ? 'border-2 border-primary-600 ring-4 ring-primary-50' : 'border border-slate-200'}`}>
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('bg-slate-100');
                        e.currentTarget.parentElement?.classList.remove('bg-white');
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-1">
                    <h4 className={`text-lg font-bold ${isLatest ? 'text-primary-700' : 'text-slate-900'}`}>
                      {exp.role}
                    </h4>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${isLatest ? 'bg-primary-100 text-primary-700' : 'bg-slate-100 text-slate-600'}`}>
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="text-slate-700 font-medium mb-2">{exp.company} <span className="text-slate-400">•</span> <span className="text-slate-500 text-sm">{exp.location}</span></div>
                  
                  <ul className="list-disc list-outside ml-4 text-slate-600 text-sm space-y-1 leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>
                        {renderDescription(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education (Now Second, Simplified) */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary-600" /> Education
          </h3>
          <div className="grid gap-4">
            {EDUCATION.map((edu, index) => (
              // Simplified styling: Removed white bg, shadow, and heavy border to make it less highlighted
              <div key={index} className="flex flex-col md:flex-row gap-6 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                 {/* Education Logo - Circular (rounded-full) */}
                 {edu.logo && (
                  <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-white border border-slate-200 flex items-center justify-center self-start shadow-sm">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('hidden');
                      }}
                    />
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row justify-between md:items-start mb-1">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 leading-tight">{edu.school}</h4>
                      <p className="text-primary-600 font-medium mt-1">{edu.degree}</p>
                    </div>
                    <span className="text-slate-500 text-sm mt-1 md:mt-0 whitespace-nowrap">{edu.location} • {edu.year}</span>
                  </div>
                  {edu.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary-600" /> Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {CERTIFICATIONS.map((cert, index) => {
               const Wrapper = cert.link ? 'a' : 'div';
               const wrapperProps = cert.link ? {
                 href: cert.link,
                 target: "_blank",
                 rel: "noopener noreferrer",
                 className: "block h-full cursor-pointer group"
               } : {
                 className: "block h-full"
               };

               return (
                 <Wrapper key={index} {...wrapperProps}>
                   <div className={`border border-slate-200 p-3 rounded bg-white transition-all flex items-center gap-4 h-full
                     ${cert.link ? 'group-hover:border-primary-300 group-hover:shadow-sm' : ''}`}>
                      {cert.logo && (
                        <div className="w-10 h-10 shrink-0 rounded-md overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.issuer} logo`}
                            className="w-full h-full object-contain p-1"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('hidden');
                            }}
                          />
                        </div>
                      )}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div className={`font-semibold leading-tight text-sm ${cert.link ? 'group-hover:text-primary-600 transition-colors' : 'text-slate-800'}`}>
                            {cert.title}
                          </div>
                          {cert.link && (
                            <ExternalLink size={14} className="text-slate-300 group-hover:text-primary-400 shrink-0 ml-2" />
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{cert.issuer}, {cert.year}</div>
                      </div>
                   </div>
                 </Wrapper>
               );
             })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
