import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center text-xs text-slate-700">
          &copy; <a href="https://github.com/caetismus" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500 transition-colors">James Cubito</a> {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
