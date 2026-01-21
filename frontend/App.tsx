
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
          <section id="hero">
            <Hero onEligibilityClick={toggleEligibility} />
          </section>
        )}

        <AnnouncementBar />

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">About the <span className="text-emerald-400">Portal</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  The Bangsamoro Scholarship Portal is a centralized platform designed to streamline the application process for various educational assistance programs provided by the Government of the Bangsamoro.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our mission is to ensure that every deserving student in the BARMM has equal access to educational opportunities, regardless of their financial background. We leverage technology to make the scholarship journey transparent, efficient, and accessible.
                </p>
              </div>
              <div className="bg-emerald-900/20 p-8 rounded-2xl border border-emerald-500/20 text-emerald-100">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Key Objectives:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span> Centralized application management
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span> Transparent beneficiary selection
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span> Real-time tracking of application status
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span> Direct disbursement of funds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section / Schemes */}
        <div id="schemes" className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Available <span className="text-emerald-400">Schemes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">How to <span className="text-emerald-400">Apply</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Registration", desc: "Create your student account using a valid email and Bangsamoro ID." },
                { step: "02", title: "Profile Update", desc: "Complete your personal, academic, and socio-economic profile." },
                { step: "03", title: "Document Upload", desc: "Scan and upload all required documents in PDF or JPEG format." },
                { step: "04", title: "Final Submit", desc: "Review your application and submit it for verification." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700">
                  <span className="text-5xl font-black text-emerald-500/20 absolute top-4 right-4">{item.step}</span>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400 mt-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Frequently Asked <span className="text-emerald-400">Questions</span></h2>
            <div className="space-y-6">
              {[
                { q: "Who can apply for these scholarships?", a: "Students who are residents of the Bangsamoro region and meet the specific criteria of each scheme." },
                { q: "What documents are required for application?", a: "Typically, you need a proof of residence, academic transcripts, income certificate, and a valid ID." },
                { q: "How long does the verification process take?", a: "The standard verification process takes between 15 to 30 working days after the deadline." },
                { q: "Can I apply for multiple schemes?", a: "Yes, you can apply for multiple schemes, but you may only be awarded one depending on the rules of the providers." }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 bg-[#1e293b] rounded-xl border border-slate-800 group hover:border-emerald-500/30 transition-all">
                  <h3 className="text-lg font-bold text-emerald-300 mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
