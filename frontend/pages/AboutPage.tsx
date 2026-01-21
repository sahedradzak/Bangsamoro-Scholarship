
import React from 'react';
import { mockProviders } from '../mockData';
import { Target, Lightbulb, Users, ShieldCheck, Zap, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600/5 blur-3xl rounded-full translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-6xl font-black text-white mb-8 uppercase tracking-tight">
                        About the <span className="text-emerald-500">Portal</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Revolutionizing educational access in the Bangsamoro region through transparency,
                        efficiency, and community-driven technology.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-950 p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative group hover:border-emerald-500/30 transition-all">
                            <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-500 mb-8">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Mission</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                To create a unified, accessible platform that connects Bangsamoro students with
                                scholarship opportunities from BARMM government agencies and partner institutions,
                                fostering educational excellence and regional development.
                            </p>
                        </div>
                        <div className="bg-slate-950 p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative group hover:border-emerald-500/30 transition-all">
                            <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-500 mb-8">
                                <Lightbulb size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Vision</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                A Bangsamoro region where every talented youth has the resources and support
                                needed to pursue higher education, contributing to a prosperous and sustainable
                                future for our communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars of BSP */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center uppercase tracking-tight">The Three <span className="text-emerald-500">Pillars</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap size={40} />,
                                title: "Matchmaking",
                                desc: "Intelligent scholarship discovery tailored to your profile and aspirations.",
                                color: "emerald"
                            },
                            {
                                icon: <Users size={40} />,
                                title: "Community",
                                desc: "Networking with fellow scholars, alumni, and mentors for lifelong growth.",
                                color: "blue"
                            },
                            {
                                icon: <ShieldCheck size={40} />,
                                title: "Support",
                                desc: "Access to LMS, tutoring, and career guidance to ensure your success.",
                                color: "amber"
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 p-10 rounded-3xl text-center group hover:-translate-y-2 transition-all">
                                <div className={`text-emerald-500 mb-8 flex justify-center group-hover:scale-110 transition-transform`}>
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">{pillar.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Logos */}
            <section className="py-24 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-widest mb-16">Our Trusted Partners</h2>
                    <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        {mockProviders.map(p => (
                            <img key={p.id} src={p.logo} alt={p.name} className="h-20" />
                        ))}
                        <div className="h-20 px-8 bg-slate-800 rounded-2xl flex items-center font-black text-slate-600 text-2xl tracking-tighter">CHED</div>
                        <div className="h-20 px-8 bg-slate-800 rounded-2xl flex items-center font-black text-slate-600 text-2xl tracking-tighter">TESDA</div>
                    </div>
                </div>
            </section>

            {/* MoroTech Highlight */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-emerald-950/20 border border-emerald-500/20 p-16 rounded-[4rem] backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-emerald-500/5">
                            <Heart size={200} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Built by <span className="text-emerald-500">MoroTech</span></h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10">
                            The Bangsamoro Scholarship Portal is maintained and continuously improved by
                            MoroTech, a dedicated team of Bangsamoro tech professionals committed to
                            digital transformation in BARMM.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-2 bg-slate-900/50 rounded-full text-slate-400 text-sm font-bold border border-slate-800">100% Local Development</span>
                            <span className="px-6 py-2 bg-slate-900/50 rounded-full text-slate-400 text-sm font-bold border border-slate-800">Secure & Scalable</span>
                            <span className="px-6 py-2 bg-slate-900/50 rounded-full text-slate-400 text-sm font-bold border border-slate-800">Community Focused</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Scholarships", value: "150+", icon: <Zap size={20} /> },
                            { label: "Students Served", value: "12,450", icon: <Users size={20} /> },
                            { label: "Awarded Funds", value: "₱45M+", icon: <Globe size={20} /> },
                            { label: "Partner Entities", value: "12+", icon: <Building2 size={20} /> }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-emerald-500 mb-4 flex justify-center">{stat.icon}</div>
                                <div className="text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-emerald-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tight">Ready to find your path?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/scholarships" className="px-10 py-4 bg-white text-emerald-700 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl active:scale-95">
                            Browse Scholarships
                        </Link>
                        <Link to="/register" className="px-10 py-4 bg-emerald-800 text-white rounded-2xl font-black text-lg hover:bg-emerald-900 transition-all shadow-2xl active:scale-95">
                            Create Account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper for consistency
const Building2 = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /></svg>;

export default AboutPage;
