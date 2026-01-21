
import React from 'react';
import Hero from '../components/Hero';
import { mockScholarships, mockProviders, mockSuccessStories } from '../mockData';
import { ArrowRight, CheckCircle2, Users, GraduationCap, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingPageProps {
    onEligibilityClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEligibilityClick }) => {
    return (
        <div>
            <section id="hero">
                <Hero onEligibilityClick={onEligibilityClick} />
            </section>

            {/* Featured Scholarships */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-emerald-400">Scholarships</span></h2>
                            <p className="text-slate-400">Discover top opportunities for the upcoming academic year.</p>
                        </div>
                        <Link to="/scholarships" className="text-emerald-500 font-semibold flex items-center gap-2 hover:text-emerald-400 transition-colors">
                            View All Scholarships <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockScholarships.map((s) => (
                            <div key={s.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                                <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-emerald-500 font-bold">
                                    {s.providerId.toUpperCase()}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{s.name}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{s.description}</p>
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <Coins size={14} className="text-emerald-500" />
                                        {s.amount}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <GraduationCap size={14} className="text-emerald-500" />
                                        Due: {s.deadline}
                                    </div>
                                </div>
                                <Link to={`/scholarships/${s.id}`} className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors block text-center">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-16">How It <span className="text-emerald-400">Works</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Users className="w-8 h-8" />, step: "1", title: "Create Profile", desc: "Build your comprehensive academic profile." },
                            { icon: <GraduationCap className="w-8 h-8" />, step: "2", title: "Browse Schemes", desc: "Find scholarships that match your eligibility." },
                            { icon: <ArrowRight className="w-8 h-8" />, step: "3", title: "Apply Online", desc: "Submit multiple applications with one profile." },
                            { icon: <CheckCircle2 className="w-8 h-8" />, step: "4", title: "Track Status", desc: "Monitor your progress in real-time." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-8 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl">
                                <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {item.step}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Providers Section */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">Scholarship <span className="text-emerald-400">Providers</span></h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {mockProviders.map(p => (
                            <Link key={p.id} to={`/providers/${p.slug}`} className="hover:scale-110 transition-transform">
                                <img src={p.logo} alt={p.name} className="h-16 rounded-lg" title={p.name} />
                            </Link>
                        ))}
                        {/* Add more placeholder logos for the "wow" factor */}
                        <div className="h-16 px-6 bg-slate-800 rounded-lg flex items-center font-bold text-slate-400 uppercase tracking-widest">CHED</div>
                        <div className="h-16 px-6 bg-slate-800 rounded-lg flex items-center font-bold text-slate-400 uppercase tracking-widest">TESDA</div>
                        <div className="h-16 px-6 bg-slate-800 rounded-lg flex items-center font-bold text-slate-400 uppercase tracking-widest">BFAR</div>
                    </div>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="py-24 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">Success <span className="text-emerald-400">Stories</span></h2>
                    <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-emerald-900/10">
                            <Users size={200} />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <img src={mockSuccessStories[0].photo} alt={mockSuccessStories[0].name} className="w-48 h-48 rounded-2xl object-cover border-4 border-emerald-500/20" />
                            <div>
                                <p className="text-2xl font-medium text-slate-200 mb-6 italic">"{mockSuccessStories[0].story}"</p>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{mockSuccessStories[0].name}</h4>
                                    <p className="text-emerald-400">{mockSuccessStories[0].program} · {mockSuccessStories[0].school}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/success-stories" className="text-emerald-500 font-semibold hover:underline">Read More Journeys →</Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600/5 blur-3xl rounded-full translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-6xl font-black text-emerald-500 mb-2">150+</div>
                            <div className="text-slate-400 uppercase tracking-widest font-bold">Scholarships Available</div>
                        </div>
                        <div>
                            <div className="text-6xl font-black text-emerald-500 mb-2">12,450</div>
                            <div className="text-slate-400 uppercase tracking-widest font-bold">Applicants Served</div>
                        </div>
                        <div>
                            <div className="text-6xl font-black text-emerald-500 mb-2">₱45M+</div>
                            <div className="text-slate-400 uppercase tracking-widest font-bold">Awarded in 2025</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
