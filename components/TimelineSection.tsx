import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { Era } from '../types';

interface TimelineSectionProps {
  era: Era;
  isActive: boolean;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ era, isActive }) => {
  return (
    <section 
      id={era.id} 
      className={`relative min-h-screen py-24 md:py-32 border-l-2 transition-colors duration-500 flex flex-col md:flex-row gap-8 md:gap-16 scroll-mt-20 ${
        isActive ? 'border-brand-500' : 'border-slate-800'
      }`}
    >
      {/* Absolute positioning marker on the timeline line */}
      <div 
        className={`absolute -left-[9px] top-28 md:top-36 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
          isActive 
            ? 'bg-brand-950 border-brand-500 scale-125 shadow-[0_0_15px_rgba(14,165,233,0.5)]' 
            : 'bg-slate-950 border-slate-700'
        }`} 
      />

      {/* Header / Meta Column */}
      <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 sticky md:top-32 h-fit">
        <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-slate-500'}`} />
            <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'text-brand-400' : 'text-slate-500'}`}>
              {era.period}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {era.title}
          </h2>
          
          <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full opacity-50" />
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-grow max-w-3xl">
        {/* Descriptive Text */}
        <div className="prose prose-lg prose-invert text-slate-300 mb-12 leading-relaxed">
          {era.description.map((paragraph, idx) => (
            <p key={idx} className="mb-6">{paragraph}</p>
          ))}
        </div>

        {/* Timeline Events Card */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
              <CheckCircle2 size={18} />
            </span>
            Key Developments
          </h3>
          <ul className="space-y-4">
            {era.events.map((event, idx) => (
              <li key={idx} className="flex gap-4 items-start group">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2.5 flex-shrink-0 group-hover:bg-brand-400 transition-colors" />
                <span className="text-slate-300 group-hover:text-slate-100 transition-colors text-base">
                  {event.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;