
import React, { useState } from 'react';
import { mockScholarships } from '../mockData';
import { Search, Filter, SlidersHorizontal, MapPin, GraduationCap, Calendar, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarshipDirectory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProvider, setSelectedProvider] = useState<string>('All');
    const [selectedLevel, setSelectedLevel] = useState<string>('All');

    const filteredScholarships = mockScholarships.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.provider.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesProvider = selectedProvider === 'All' || s.providerId === selectedProvider;
        const matchesLevel = selectedLevel === 'All' || s.level === selectedLevel;
        return matchesSearch && matchesProvider && matchesLevel;
    });

    return (
        <div className="bg-slate-950 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Browse Scholarships</h1>
                    <p className="text-slate-400">Find the perfect scholarship for your educational journey in the Bangsamoro region.</p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-12">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={24} />
                    <input
                        type="text"
                        placeholder="Search by name, provider, or keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-emerald-500/50 transition-all text-lg shadow-2xl"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-64 space-y-8 shrink-0">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Filter size={18} className="text-emerald-500" /> Filters
                                </h3>
                                <button
                                    onClick={() => { setSelectedProvider('All'); setSelectedLevel('All'); }}
                                    className="text-xs text-emerald-500 hover:text-emerald-400"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Providers */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Provider</h4>
                                    <div className="space-y-2">
                                        {['All', 'mbhte', 'most', 'moh'].map(p => (
                                            <label key={p} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="provider"
                                                    checked={selectedProvider === p}
                                                    onChange={() => setSelectedProvider(p)}
                                                    className="accent-emerald-500 w-4 h-4"
                                                />
                                                <span className={`text-sm transition-colors ${selectedProvider === p ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                                    {p === 'All' ? 'All Providers' : p.toUpperCase()}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Level */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Level</h4>
                                    <div className="space-y-2">
                                        {['All', 'College', 'SHS', 'Graduate', 'Tech-Voc'].map(l => (
                                            <label key={l} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="level"
                                                    checked={selectedLevel === l}
                                                    onChange={() => setSelectedLevel(l)}
                                                    className="accent-emerald-500 w-4 h-4"
                                                />
                                                <span className={`text-sm transition-colors ${selectedLevel === l ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                                    {l === 'All' ? 'All Levels' : l}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Field/Course */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Field/Course</h4>
                                    <div className="space-y-2">
                                        {['STEM', 'Health', 'Education', 'Business', 'Arts', 'Agri'].map(f => (
                                            <label key={f} className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" className="accent-emerald-500 w-4 h-4 rounded border-slate-700 bg-slate-900" />
                                                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{f}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Amount Slider Placeholder */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Amount Range</h4>
                                    <div className="px-2">
                                        <input type="range" className="w-full accent-emerald-500 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer" />
                                        <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold">
                                            <span>₱0</span>
                                            <span>₱200K+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Status</h4>
                                    <div className="space-y-2">
                                        {['Open', 'Closing Soon', 'Coming Soon'].map(s => (
                                            <label key={s} className="flex items-center gap-3 cursor-pointer group">
                                                <input type="checkbox" className="accent-emerald-500 w-4 h-4 rounded border-slate-700 bg-slate-900" />
                                                <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{s}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Area */}
                    <main className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-slate-400">Showing <span className="text-white font-bold">{filteredScholarships.length}</span> scholarships</p>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <SlidersHorizontal size={14} />
                                <span>Sort: </span>
                                <select className="bg-transparent text-white font-bold outline-none focus:text-emerald-400 cursor-pointer">
                                    <option className="bg-slate-900">Deadline</option>
                                    <option className="bg-slate-900">Amount</option>
                                    <option className="bg-slate-900">Relevance</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredScholarships.length > 0 ? (
                                filteredScholarships.map(s => (
                                    <div key={s.id} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group shadow-lg">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 text-emerald-500 font-black text-xs border border-slate-700 group-hover:border-emerald-500/20 transition-all">
                                                {s.providerId.toUpperCase()}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{s.name}</h3>
                                                        <p className="text-emerald-500/80 text-sm font-medium">{s.provider}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.status === 'Open' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                                        s.status === 'Closing' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                            'bg-slate-800 text-slate-400 border border-slate-700'
                                                        }`}>
                                                        {s.status}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <Coins size={14} className="text-emerald-500" />
                                                        <span>{s.amount}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <Calendar size={14} className="text-emerald-500" />
                                                        <span>Due: {s.deadline}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <GraduationCap size={14} className="text-emerald-500" />
                                                        <span>{s.level} Level</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                                        <MapPin size={14} className="text-emerald-500" />
                                                        <span>{s.location}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {s.courses.map(c => (
                                                        <span key={c} className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                                                            {c}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="mt-6 flex justify-between items-center">
                                                    <Link to={`/scholarships/${s.id}`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                                                        View Details
                                                    </Link>
                                                    <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-500/20">
                                                        Apply Now →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
                                    <SlidersHorizontal size={48} className="mx-auto text-slate-700 mb-4" />
                                    <h3 className="text-xl font-bold text-slate-400">No scholarships found</h3>
                                    <p className="text-slate-600 mt-2">Try adjusting your filters or search term</p>
                                    <button
                                        onClick={() => { setSearchTerm(''); setSelectedProvider('All'); setSelectedLevel('All'); }}
                                        className="mt-6 text-emerald-500 font-bold hover:underline"
                                    >
                                        Reset all filters
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Pagination Placeholder */}
                        {filteredScholarships.length > 0 && (
                            <div className="mt-12 flex justify-center gap-2">
                                <button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:border-emerald-500/50 flex items-center justify-center transition-all">◀</button>
                                <button className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center shadow-lg shadow-emerald-500/20">1</button>
                                <button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:border-emerald-500/50 flex items-center justify-center transition-all">2</button>
                                <button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:border-emerald-500/50 flex items-center justify-center transition-all">3</button>
                                <button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:border-emerald-500/50 flex items-center justify-center transition-all">▶</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDirectory;
