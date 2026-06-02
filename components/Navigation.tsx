import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Era } from '../types';

interface NavigationProps {
  eras: Era[];
  activeEraId: string;
}

const Navigation: React.FC<NavigationProps> = ({ eras, activeEraId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || isOpen 
            ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div 
            className="text-lg font-bold text-white cursor-pointer hover:text-brand-400 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            AI History
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto hide-scrollbar max-w-4xl">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => scrollToSection(era.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  activeEraId === era.id 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {era.shortPeriod}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 absolute w-full max-h-[70vh] overflow-y-auto">
            <div className="px-4 py-4 flex flex-col gap-2">
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => scrollToSection(era.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeEraId === era.id
                      ? 'bg-brand-900/30 text-brand-400 border border-brand-500/30'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span className="block text-white mb-1">{era.title}</span>
                  <span className="text-xs opacity-60">{era.period}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;