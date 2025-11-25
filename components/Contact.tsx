import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  // Format for Viber: 63 + number without leading 0
  // 0945 994 2440 -> 639459942440
  const viberNumber = "639459942440";

  return (
    <section id={SectionId.CONTACT} className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto text-sm">
            I am currently open to opportunities in Power Systems, Renewable Energy, and Electrical Design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Mail size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                <a href="mailto:jamescubito@gmail.com" className="text-base font-medium hover:text-primary-400 transition-colors">
                    jamescubito@gmail.com
                </a>
            </div>

            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Phone size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Viber / Mobile</h4>
                <a 
                  href={`viber://chat?number=%2B${viberNumber}`}
                  className="text-base font-medium hover:text-primary-400 transition-colors cursor-pointer"
                  title="Open in Viber"
                >
                    0945 994 2440
                </a>
            </div>

            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Linkedin size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/jamescubito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary-400 transition-colors"
                >
                    in/jamescubito
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;