import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HERO, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-3 shadow-md' : 'bg-slate-50 py-5 shadow-sm'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        
        {/* Empty div to balance flex layout so nav remains centered */}
        <div className="hidden md:block w-[140px]"></div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-slate-900 hover:text-primary-600 transition-colors uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Download CV Button (Right Side) */}
        <div className="hidden md:flex justify-end w-[140px]">
          <a 
            href="assets/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 hover:bg-primary-600 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        {/* Mobile Layout: CV Button + Menu Toggle */}
        <div className="md:hidden w-full flex justify-between items-center">
             {/* Mobile CV Button */}
             <a 
                href="assets/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-full"
              >
                <Download size={14} />
                CV
              </a>

            <button 
                className="text-slate-900 hover:text-primary-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-50 border-b border-slate-200 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-center text-slate-900 hover:text-primary-600 font-medium py-2"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;