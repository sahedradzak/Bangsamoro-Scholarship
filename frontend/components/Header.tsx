
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, LogOut, Menu } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, userName, onLogout }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-2xl sticky top-0 z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Text Logo Area */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex flex-col group active:scale-95 transition-transform">
            <span className="text-xl font-extrabold tracking-tight text-white leading-tight group-hover:text-emerald-400 transition-colors">
              BANGSAMORO SCHOLARSHIP <span className="text-emerald-500">PORTAL</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
              Government of the Bangsamoro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-semibold text-slate-400">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-colors hover:text-emerald-400 ${location.pathname === link.path ? 'text-emerald-500' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 ml-4">
            <button className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-all">
              <Search size={20} />
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-6 border-l border-slate-800 pl-6">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Student Account</span>
                  <span className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <User size={14} /> {userName}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 bg-slate-900 text-slate-300 rounded-lg font-bold hover:bg-red-950/30 hover:text-red-400 transition-all border border-slate-800 hover:border-red-900/50"
                  title="Logout"
                >
                  <LogOut size={20} />
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
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
