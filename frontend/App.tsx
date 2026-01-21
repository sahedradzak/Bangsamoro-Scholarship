
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ScholarshipDirectory from './pages/ScholarshipDirectory';
import ScholarshipDetail from './pages/ScholarshipDetail';
import ProviderPage from './pages/ProviderPage';
import SuccessStories from './pages/SuccessStories';
import AboutPage from './pages/AboutPage';
import ContactFAQPage from './pages/ContactFAQPage';
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
    <Router>
      <div className="min-h-screen transition-colors duration-300 bg-slate-950 text-slate-100 flex flex-col">
        <Header
          isLoggedIn={isLoggedIn}
          userName={user?.name}
          onLoginClick={toggleLoginModal}
          onLogout={handleLogout}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage onEligibilityClick={toggleEligibility} />} />
            <Route path="/scholarships" element={<ScholarshipDirectory />} />
            <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
            <Route path="/providers/:slug" element={<ProviderPage />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactFAQPage />} />
          </Routes>
        </main>

        <AnnouncementBar />

        <footer className="bg-[#020617] text-white py-16 px-4 mt-auto border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-black text-emerald-500 mb-4 uppercase tracking-tight">Bangsamoro Scholarship Portal</h2>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                The centralized gateway for scholarship opportunities in the Bangsamoro Autonomous Region in Muslim Mindanao. Empowering the next generation of Bangsamoro leaders.
              </p>
              <div className="flex gap-4">
                {/* Social links placeholders */}
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors">f</div>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors">x</div>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors">in</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link to="/scholarships" className="hover:text-emerald-400 transition-colors">Browse Scholarships</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About the Portal</Link></li>
                <li><Link to="/success-stories" className="hover:text-emerald-400 transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Help & FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Government</h3>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="https://bangsamoro.gov.ph" target="_blank" className="hover:text-emerald-400 transition-colors">BARMM Official</a></li>
                <li><a href="https://mbhte.bangsamoro.gov.ph" target="_blank" className="hover:text-emerald-400 transition-colors">MBHTE Website</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Bangsamoro Scholarship Portal. Developed by MoroTech.
          </div>
        </footer>

        {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
        {isEligibilityOpen && <EligibilityForm onClose={toggleEligibility} />}

        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
