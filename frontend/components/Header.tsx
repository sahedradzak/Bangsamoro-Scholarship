
import React from 'react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, userName, onLogout }) => {
  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-2xl sticky top-0 z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Text Logo Area (Logo Removed) */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex flex-col group active:scale-95 transition-transform">
            <span className="text-xl font-extrabold tracking-tight text-white leading-tight group-hover:text-emerald-400 transition-colors">
              BANGSAMORO SCHOLARSHIP <span className="text-emerald-500">PORTAL</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
              Government of the Bangsamoro
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-semibold text-slate-400">
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
            <li><a href="#schemes" className="hover:text-emerald-400 transition-colors">Schemes</a></li>
            <li><a href="#how-to-apply" className="hover:text-emerald-400 transition-colors">How to Apply</a></li>
            <li><a href="#faqs" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
          </ul>

          <div className="flex items-center gap-6 ml-4">
            <button className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-6 border-l border-slate-800 pl-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Student Account</span>
                  <span className="text-sm font-bold text-emerald-400">{userName}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="bg-slate-900 text-slate-300 px-6 py-2 rounded-lg font-bold hover:bg-red-950/30 hover:text-red-400 transition-all border border-slate-800 hover:border-red-900/50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-2.5 rounded-lg font-bold shadow-xl shadow-emerald-900/20 active:scale-95 transition-all"
              >
                Login
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
