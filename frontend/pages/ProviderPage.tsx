
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProviders, mockScholarships } from '../mockData';
import {
    Building2, Globe, Mail, Phone, MapPin,
    ArrowRight, Users, GraduationCap, Coins,
    Info, Calendar, MessageSquare
} from 'lucide-react';

const ProviderPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [activeTab, setActiveTab] = useState<'about' | 'scholarships' | 'scholars' | 'contact'>('about');

    const provider = mockProviders.find(p => p.slug === slug);
    const providerScholarships = mockScholarships.filter(s => s.providerId === provider?.id);

    if (!provider) {
        return (
            <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Provider not found</h2>
                    <Link to="/" className="text-emerald-500 hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-950 min-h-screen pb-24">
            {/* Entity Hero */}
            <div className="bg-slate-900 border-b border-slate-800 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
                        <img src={provider.logo} alt={provider.name} className="w-40 h-40 rounded-3xl bg-white p-4 shadow-2xl border border-slate-700" />
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-4">
                                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Building2 size={12} /> {provider.type}
                                </span>
                                <span className="px-3 py-1 bg-slate-800 text-slate-400 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <MapPin size={12} /> BARMM
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{provider.name}</h1>
                            <div className="flex flex-wrap gap-6 text-slate-400 justify-center md:justify-start">
                                <a href={provider.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                                    <Globe size={18} /> {provider.website.replace('https://', '')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8">
                {/* Wireframe compliant Tabs */}
                <div className="flex gap-2 mb-12 bg-slate-900/30 p-1.5 rounded-2xl border border-slate-800/50 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'about', label: 'About', icon: <Info size={16} /> },
                        { id: 'scholarships', label: `Scholarships (${providerScholarships.length})`, icon: <GraduationCap size={16} /> },
                        { id: 'scholars', label: 'Scholars', icon: <Users size={16} /> },
                        { id: 'contact', label: 'Contact', icon: <MessageSquare size={16} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all shrink-0 ${activeTab === tab.id
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        {activeTab === 'about' && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-6">About the Ministry</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-6">{provider.about}</p>
                                    {provider.mission && (
                                        <div className="bg-emerald-950/20 p-8 rounded-3xl border border-emerald-500/10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 text-emerald-500/5">
                                                <Building2 size={100} />
                                            </div>
                                            <h3 className="text-emerald-500 font-bold mb-2 uppercase tracking-widest text-xs">Mission</h3>
                                            <p className="text-slate-200 text-xl font-medium italic">"{provider.mission}"</p>
                                        </div>
                                    )}
                                </section>

                                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Programs</h4>
                                        <p className="text-3xl font-black text-white">{provider.statistics.activePrograms}</p>
                                    </div>
                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Total Scholars</h4>
                                        <p className="text-3xl font-black text-white">{provider.statistics.activeScholars.toLocaleString()}</p>
                                    </div>
                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Disbursed</h4>
                                        <p className="text-3xl font-black text-emerald-500">{provider.statistics.disbursedAmount}</p>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'scholarships' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h2 className="text-2xl font-bold text-white mb-6">Available Programs</h2>
                                {providerScholarships.map(s => (
                                    <div key={s.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{s.name}</h3>
                                                <p className="text-emerald-500/80 font-medium text-sm mt-1">{s.level} Level Scholarship</p>
                                            </div>
                                            <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase border border-emerald-500/20 tracking-widest">
                                                {s.status}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
                                            <div className="space-y-1">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Amount</p>
                                                <p className="text-slate-200 font-bold">{s.amount}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Deadline</p>
                                                <p className="text-slate-200 font-bold">{s.deadline}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Location</p>
                                                <p className="text-slate-200 font-bold">{s.location}</p>
                                            </div>
                                        </div>
                                        <Link to={`/scholarships/${s.id}`} className="inline-flex items-center gap-3 text-emerald-500 font-black uppercase tracking-widest text-sm hover:gap-5 transition-all">
                                            View Application Process <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'scholars' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-20 bg-slate-900/30 rounded-[3rem] border border-dashed border-slate-800">
                                <Users size={48} className="mx-auto text-slate-700 mb-6" />
                                <h3 className="text-xl font-bold text-slate-400">Scholar Directory coming soon</h3>
                                <p className="text-slate-600 mt-2">Currently available to authorized entity staff only.</p>
                            </div>
                        )}

                        {activeTab === 'contact' && (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                        <MapPin size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Office Address</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{provider.contact.address}</p>
                                </div>
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                        <Mail size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Email</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{provider.contact.email}</p>
                                </div>
                                <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                        <Phone size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Hotline</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{provider.contact.phone}</p>
                                </div>
                                <div className="p-8 bg-emerald-950/20 border border-emerald-500/20 rounded-3xl">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                        < Globe size={24} />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Website</h4>
                                    <a href={provider.website} target="_blank" className="text-emerald-400 text-sm hover:underline">{provider.website}</a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Quick Stats */}
                    <aside className="space-y-6">
                        <div className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-8 backdrop-blur-sm">
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Entity Verification</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                                    <CheckCircle size={20} />
                                </div>
                                <p className="text-sm font-bold text-white leading-tight">Verified Government Agency</p>
                            </div>
                            <div className="h-px bg-slate-800 mb-6"></div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                This scholarship provider is an official agency of the Bangsamoro Autonomous Region in Muslim Mindanao. All applications are processed securely through the BSP.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-emerald-900/20">
                            <h3 className="text-lg font-black uppercase tracking-tight mb-4">Ready to start?</h3>
                            <p className="text-emerald-100 text-sm leading-relaxed mb-8 opacity-90">
                                Begin your application today. One profile works for all {provider.id.toUpperCase()} programs.
                            </p>
                            <button onClick={() => setActiveTab('scholarships')} className="w-full py-4 bg-white text-emerald-700 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95">
                                See Programs
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

const CheckCircle = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;

export default ProviderPage;
