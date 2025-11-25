import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ENGINEER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a 
              href="mailto:jamescubito@gmail.com" 
              className="hover:text-primary-500 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/caetismus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/jamescubito" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {ENGINEER_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
