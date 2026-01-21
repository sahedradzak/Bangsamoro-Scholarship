
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockScholarships } from '../mockData';
import {
    ArrowLeft, Calendar, Coins, GraduationCap, MapPin,
    CheckCircle2, Info, ListChecks, HelpCircle, Share2, Bookmark
} from 'lucide-react';

const ScholarshipDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'benefits' | 'requirements' | 'faq'>('overview');

    const scholarship = mockScholarships.find(s => s.id === id);

    if (!scholarship) {
        return (
            <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Scholarship not found</h2>
                    <Link to="/scholarships" className="text-emerald-500 hover:underline">Back to Directory</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-950 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Breadcrumbs */}
                <Link to="/scholarships" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-8 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Scholarships
                </Link>

                {/* Header Header */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 font-bold text-xl border border-slate-700 shrink-0">
                            {scholarship.providerId.toUpperCase()}
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-white mb-1">{scholarship.name}</h1>
                                    <p className="text-emerald-500 font-medium">{scholarship.provider}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-3 bg-slate-800 text-slate-400 rounded-xl hover:text-emerald-400 border border-slate-700 transition-all">
                                        <Bookmark size={20} />
                                    </button>
                                    <button className="p-3 bg-slate-800 text-slate-400 rounded-xl hover:text-emerald-400 border border-slate-700 transition-all">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Applications Close</p>
                                        <p className="text-sm font-bold">{scholarship.deadline}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Location</p>
                                        <p className="text-sm font-bold">{scholarship.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-500">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Academic Level</p>
                                        <p className="text-sm font-bold">{scholarship.level}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex gap-2 mb-8 bg-slate-900/30 p-1.5 rounded-2xl border border-slate-800/50 overflow-x-auto no-scrollbar">
                    {[
                        { id: 'overview', label: 'Overview', icon: <Info size={16} /> },
                        { id: 'eligibility', label: 'Eligibility', icon: <CheckCircle2 size={16} /> },
                        { id: 'benefits', label: 'Benefits', icon: <Coins size={16} /> },
                        { id: 'requirements', label: 'Requirements', icon: <ListChecks size={16} /> },
                        { id: 'faq', label: 'FAQ', icon: <HelpCircle size={16} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shrink-0 ${activeTab === tab.id
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl min-h-[400px]">
                    {activeTab === 'overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Program Overview</h2>
                            <p className="text-slate-400 leading-relaxed text-lg mb-10">{scholarship.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Coins size={24} className="text-emerald-500" />
                                        <h3 className="font-bold text-white">Award Amount</h3>
                                    </div>
                                    <p className="text-2xl font-black text-emerald-400">{scholarship.amount}</p>
                                    <p className="text-xs text-slate-500 mt-1">{scholarship.duration || 'Annual package'}</p>
                                </div>
                                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Users size={24} className="text-emerald-500" />
                                        <h3 className="font-bold text-white">Available Slots</h3>
                                    </div>
                                    <p className="text-2xl font-black text-emerald-400">{scholarship.slots?.total || 'N/A'}</p>
                                    <p className="text-xs text-slate-500 mt-1">{scholarship.slots?.remaining || 'Check portal'} remaining</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Priority Fields / Courses</h3>
                                <div className="flex flex-wrap gap-3">
                                    {scholarship.courses.map(c => (
                                        <span key={c} className="px-4 py-2 bg-emerald-500/5 text-emerald-400 rounded-xl border border-emerald-500/10 text-sm font-medium">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'eligibility' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Eligibility Criteria</h2>
                            <div className="space-y-4">
                                {scholarship.eligibility.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                                        <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                                        <p className="text-slate-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'benefits' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Benefits Package</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {scholarship.benefits.map((benefit, idx) => (
                                    <div key={idx} className="p-5 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                        <p className="text-slate-200 font-medium">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'requirements' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Required Documents</h2>
                            <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden text-slate-300">
                                <div className="p-4 bg-slate-900 font-bold border-b border-slate-800 flex items-center gap-3">
                                    <ListChecks size={20} className="text-emerald-500" />
                                    Document Checklist
                                </div>
                                <ul className="p-6 space-y-4">
                                    {scholarship.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-center gap-4">
                                            <div className="w-5 h-5 rounded border border-slate-700 flex items-center justify-center text-[10px]">
                                                {idx + 1}
                                            </div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'faq' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {(scholarship.faqs || [
                                    { q: "How long is the processing time?", a: "Typically 2-4 weeks after the application deadline." },
                                    { q: "Can I apply if I'm not a resident?", a: "No, this specific program is strictly for BARMM residents per the legislative mandate." },
                                    { q: "What is the maintenance GWA for renewal?", a: "You must maintain a minimum GWA of 2.0 or 85% to remain eligible for the next semester." }
                                ]).map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                                        <summary className="p-6 cursor-pointer list-none flex justify-between items-center hover:bg-slate-900 transition-colors">
                                            <h3 className="font-bold text-white pr-4">{faq.q}</h3>
                                            <div className="text-emerald-500 group-open:rotate-180 transition-transform">
                                                <ArrowLeft size={16} className="-rotate-90" />
                                            </div>
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-400 text-sm border-t border-slate-800 pt-4">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Footer */}
                <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between p-8 bg-emerald-950/20 rounded-3xl border border-emerald-500/20 backdrop-blur-sm">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">Ready to apply?</h3>
                        <p className="text-slate-400">Ensure you have all required documents scanned and ready.</p>
                    </div>
                    <button className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-emerald-600/20 hover:scale-105 active:scale-95">
                        Apply Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetail;
