
import React, { useState } from 'react';
import { Search, ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onEligibilityClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEligibilityClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/scholarships?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/scholarships');
    }
  };

  return (
    <section className="relative bg-emerald-950 text-white overflow-hidden py-32 md:py-48 min-h-[800px] flex items-center">
      {/* Background Image Layer with 40% Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Bangsamoro Students and Education"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Deep Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Applications Open for 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 animate-fade-in drop-shadow-2xl uppercase tracking-tighter">
            Discover <span className="text-emerald-400">Scholarships</span> for Bangsamoro Students
          </h1>

          <p className="text-xl md:text-2xl text-emerald-50/80 mb-12 leading-relaxed font-medium drop-shadow-md max-w-2xl animate-fade-in delay-100">
            Find and apply for scholarships from BARMM government agencies and partner institutions. Your journey to excellence starts here.
          </p>

          {/* Integrated Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mb-12 relative group animate-fade-in delay-200">
            <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-2xl group-hover:bg-emerald-400/30 transition-all duration-500"></div>
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl">
              <Search className="ml-4 text-slate-400" size={24} />
              <input
                type="text"
                placeholder="Search scholarships (e.g., Medicine, Engineering, MBHTE)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 px-4 py-3 text-lg placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hidden md:block"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-in delay-300">
            <button
              onClick={() => navigate('/scholarships')}
              className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xl shadow-2xl shadow-emerald-950/50 flex items-center justify-center gap-3 group transition-all active:scale-95"
            >
              Browse All Scholarships
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onEligibilityClick}
              className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-2xl font-black text-xl border border-white/20 transition-all active:scale-95 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Play size={18} className="fill-emerald-500 text-emerald-500 ml-1" />
              </span>
              How it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
