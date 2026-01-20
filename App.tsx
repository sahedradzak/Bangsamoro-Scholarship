
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnnouncementBar from './components/AnnouncementBar';
import LoginModal from './components/LoginModal';
import AIAssistant from './components/AIAssistant';
import EligibilityForm from './components/EligibilityForm';

interface UserData {
  name: string;
  id: string;
}

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleEligibility = () => setIsEligibilityOpen(!isEligibilityOpen);

  const handleLoginSuccess = (name: string) => {
    setUser({ name, id: 'STU' + Math.floor(Math.random() * 10000) });
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-950 text-slate-100">
      <Header 
        isLoggedIn={isLoggedIn} 
        userName={user?.name} 
        onLoginClick={toggleLoginModal} 
        onLogout={handleLogout} 
      />
      
      <main>
        {isLoggedIn ? (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-emerald-900/30 backdrop-blur-md rounded-2xl p-8 text-white mb-12 shadow-2xl border border-emerald-800/50">
              <h2 className="text-3xl font-bold mb-2">Welcome, {user?.name}!</h2>
              <p className="text-emerald-200">Your Student ID: <span className="font-mono bg-emerald-800/40 px-2 py-0.5 rounded">{user?.id}</span></p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-xs uppercase tracking-widest text-emerald-300">Active Applications</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold">₹ 0.00</div>
                  <div className="text-xs uppercase tracking-widest text-emerald-300">Total Disbursed</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-xs uppercase tracking-widest text-emerald-300">Recommended Schemes</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Hero onEligibilityClick={toggleEligibility} />
        )}
        
        <AnnouncementBar />
        
        {/* Content Section - Updated with Dark Theme Cards */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] p-10 rounded-2xl shadow-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
            <h3 className="text-2xl font-bold mb-5 text-emerald-400 group-hover:text-emerald-300">Apply for Schemes</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Browse through hundreds of Bangsamoro-sponsored scholarships available for SC, ST, OBC, and General categories.</p>
            <button className="text-emerald-500 font-bold hover:text-emerald-400 flex items-center gap-2 transition-colors">
              View All Schemes <span>→</span>
            </button>
          </div>
          
          <div className="bg-[#1e293b] p-10 rounded-2xl shadow-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
            <h3 className="text-2xl font-bold mb-5 text-emerald-400 group-hover:text-emerald-300">Application Status</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Already applied? Track your scholarship application in real-time and check for any required updates.</p>
            <button className="text-emerald-500 font-bold hover:text-emerald-400 flex items-center gap-2 transition-colors">
              Check Status <span>→</span>
            </button>
          </div>
          
          <div className="bg-[#1e293b] p-10 rounded-2xl shadow-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
            <h3 className="text-2xl font-bold mb-5 text-emerald-400 group-hover:text-emerald-300">Grievance Redressal</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Having trouble? Submit your query or grievance and our support team will assist you within 24-48 hours.</p>
            <button className="text-emerald-500 font-bold hover:text-emerald-400 flex items-center gap-2 transition-colors">
              Raise a Query <span>→</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#020617] text-white py-16 px-4 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-emerald-500 mb-2 uppercase tracking-tight">Bangsamoro Scholarship Portal</h2>
            <p className="text-slate-500 text-sm">Government of the Bangsamoro</p>
          </div>
          <div className="flex gap-10 text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Help</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Bangsamoro Scholarship Portal. All rights reserved.
        </div>
      </footer>

      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
      {isEligibilityOpen && <EligibilityForm onClose={toggleEligibility} />}
      
      <AIAssistant />
    </div>
  );
};

export default App;
