import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import { appData } from './data';

const App: React.FC = () => {
  const [activeEraId, setActiveEraId] = useState<string>(appData.eras[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleExplore = () => {
    const firstSection = document.getElementById(appData.eras[0].id);
    if (firstSection) {
      const offset = 100; // Account for sticky header
      const elementPosition = firstSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Setup intersection observer to track which section is active in the viewport
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top of viewport
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveEraId(entry.target.id);
        }
      });
    }, options);

    // Observe all era sections
    appData.eras.forEach((era) => {
      const element = document.getElementById(era.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-brand-500 selection:text-white">
      <Navigation eras={appData.eras} activeEraId={activeEraId} />
      
      <main>
        <Hero data={appData} onExplore={handleExplore} />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          {/* Main vertical line for the timeline track */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" />
          
          <div className="max-w-7xl mx-auto pl-0 md:pl-12 lg:pl-0">
            {appData.eras.map((era) => (
              <TimelineSection 
                key={era.id} 
                era={era} 
                isActive={activeEraId === era.id} 
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;