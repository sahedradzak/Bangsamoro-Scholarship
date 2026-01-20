
import React from 'react';

interface HeroProps {
  onEligibilityClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEligibilityClick }) => {
  return (
    <section className="relative bg-emerald-950 text-white overflow-hidden py-24 md:py-40 min-h-[700px] flex items-center">
      {/* Background Image Layer with 50% Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Bangsamoro Students and Education" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark Gradient Overlay to ensure text readability on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        {/* Leftside Content Container (Logo Removed) */}
        <div className="max-w-3xl text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in drop-shadow-2xl">
              Empowering <span className="text-emerald-400">Dreams</span><br />
              Enabling <span className="text-emerald-400">Success</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-emerald-50/90 mb-12 leading-relaxed font-medium drop-shadow-md max-w-xl">
            The Bangsamoro Scholarship Portal is envisioned to bridge the gap between scholarship providers and scholarship seekers, thus encouraging more students to be in the system and fulfill their educational aspirations.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <button 
              onClick={onEligibilityClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-emerald-950/50 flex items-center justify-center gap-3 group transition-all active:scale-95 border border-emerald-400/20"
            >
              Check Scholarship Eligibility
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold text-lg border border-white/20 transition-all hover:border-white/40 active:scale-95">
              Tutorial Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
