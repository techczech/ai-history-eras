import React from 'react';
import { ArrowDown, Brain, Cpu, Sparkles } from 'lucide-react';
import { AppData } from '../types';

interface HeroProps {
  data: AppData;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ data, onExplore }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-brand-500 selection:text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center p-2 px-4 mb-8 border border-brand-500/30 rounded-full bg-brand-500/10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-brand-400 mr-2" />
          <span className="text-sm font-medium text-brand-200 tracking-wide uppercase">Interactive Timeline</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-200 to-brand-400">
          {data.title}
        </h1>
        
        <p className="text-xl text-slate-400 mb-2 font-light">
          Written by <span className="text-white font-medium">{data.author}</span>
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-8">
            <div className="flex gap-4 opacity-70">
                <Brain className="w-8 h-8 text-slate-500" />
                <div className="w-px h-8 bg-slate-700"></div>
                <Cpu className="w-8 h-8 text-slate-500" />
            </div>

            <button 
                onClick={onExplore}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 hover:bg-brand-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
            >
                Explore History
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </div>
  );
};

export default Hero;