
import React, { useState } from 'react';
import { SectionId } from '../types';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Linkedin, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [showQr, setShowQr] = useState(false);

  return (
    <section id={SectionId.CONTACT} className="py-12 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
        {/* Removed text description as requested */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Email */}
            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Mail size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-base font-medium hover:text-primary-400 transition-colors">
                    {CONTACT_INFO.email}
                </a>
            </div>

            {/* Viber / Mobile (QR Code) */}
            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Phone size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Viber Contact</h4>
                
                <button 
                  onClick={() => setShowQr(true)}
                  className="text-base font-medium hover:text-primary-400 transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
                >
                    View QR Code
                </button>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center group">
                <div className="mb-2 text-slate-500 group-hover:text-primary-400 transition-colors">
                  <Linkedin size={24} />
                </div>
                <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1">LinkedIn</h4>
                <a 
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary-400 transition-colors"
                >
                    {CONTACT_INFO.linkedinDisplay}
                </a>
            </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowQr(false)}>
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowQr(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>
            <h4 className="text-xl font-bold text-slate-900 mb-4 text-center">Scan on Viber</h4>
            <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
               <img 
                 src={CONTACT_INFO.viberQrImage} 
                 alt="Viber QR Code" 
                 className="w-full h-auto rounded"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement!.innerHTML = '<p class="text-slate-500 text-sm py-8 text-center">QR Code Image Not Found<br/><span class="text-xs">Please upload viber_qr.png to assets/</span></p>';
                 }}
               />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
