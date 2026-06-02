import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
      <div className="container mx-auto">
        <p className="mb-2">history.semanticmachines.fyi</p>
        <p>© {new Date().getFullYear()} Eras of AI History: An Exploration</p>
      </div>
    </footer>
  );
};

export default Footer;