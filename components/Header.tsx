import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-4 shadow-md' : 'bg-slate-50 py-6 shadow-sm'}`}>
      <div className="container mx-auto px-6 flex justify-center relative">
        
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

        {/* Mobile Menu Button - Positioned absolutely to the right */}
        <div className="md:hidden w-full flex justify-end absolute right-6 top-1/2 -translate-y-1/2">
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