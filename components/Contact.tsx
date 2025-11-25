import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  // Format for Viber: 63 + number without leading 0
  // 0945 994 2440 -> 639459942440
  const viberNumber = "639459942440";

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
        <p className="text-slate-400 mb-12 leading-relaxed">
            I am currently open to opportunities in Power Systems, Renewable Energy, and Electrical Design.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group">
                <div className="mb-3 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Mail size={28} />
                </div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-2">Email</h4>
                <a href="mailto:jamescubito@gmail.com" className="text-lg font-medium hover:text-primary-400 transition-colors">
                    jamescubito@gmail.com
                </a>
            </div>
            <div className="flex flex-col items-center group">
                <div className="mb-3 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Phone size={28} />
                </div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-2">Viber / Mobile</h4>
                <a 
                  href={`viber://chat?number=%2B${viberNumber}`}
                  className="text-lg font-medium hover:text-primary-400 transition-colors cursor-pointer"
                  title="Open in Viber"
                >
                    0945 994 2440
                </a>
            </div>
            <div className="flex flex-col items-center group">
                <div className="mb-3 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <MapPin size={28} />
                </div>
                <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-2">Location</h4>
                <span className="text-lg font-medium">
                    Quezon City, Metro Manila
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;