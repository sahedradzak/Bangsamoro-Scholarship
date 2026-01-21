
import React from 'react';
import { mockSuccessStories } from '../mockData';
import { Quote, Award, GraduationCap, MapPin, Search } from 'lucide-react';

const SuccessStories: React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Success <span className="text-emerald-500">Stories</span></h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">Inspiring journeys of Bangsamoro scholars who turned dreams into reality through education and support.</p>
                </div>

                {/* Featured Story - Big and Bold */}
                <div className="mb-24">
                    <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                                <Quote size={64} className="text-emerald-500/20 mb-8" />
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                    "{mockSuccessStories[0].story.substring(0, 150)}..."
                                </h2>
                                <div className="flex items-center gap-6 mb-10">
                                    <img src={mockSuccessStories[0].photo} alt={mockSuccessStories[0].name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/20" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{mockSuccessStories[0].name}</h3>
                                        <p className="text-emerald-500 text-sm">{mockSuccessStories[0].program} · Class of {mockSuccessStories[0].year.split('-')[1]}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {mockSuccessStories[0].achievements?.map((ach, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                            <Award size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            {ach}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative min-h-[400px]">
                                <img src={mockSuccessStories[0].photo} alt={mockSuccessStories[0].name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent lg:block hidden"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden block"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Stories Grid */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="text-2xl font-bold text-white">More Journeys</h2>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input
                                    type="text"
                                    placeholder="Filter by field or year..."
                                    className="bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockSuccessStories.map((story, idx) => (
                            <div key={story.id} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group hover:-translate-y-1">
                                <div className="mb-6 relative">
                                    <img src={story.photo} alt={story.name} className="w-full h-48 rounded-2xl object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-emerald-500 border border-emerald-500/20">
                                        {story.program.split(' ')[0]}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{story.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
                                    <GraduationCap size={14} /> {story.field}
                                </p>
                                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 mb-6">
                                    <p className="text-slate-400 text-sm italic line-clamp-3">"{story.story}"</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <MapPin size={12} /> {story.school.split(' ')[0]}
                                    </div>
                                    <button className="text-emerald-500 font-bold text-sm hover:underline">Read Full Story →</button>
                                </div>
                            </div>
                        ))}

                        {/* CTA to submit story */}
                        <div className="bg-emerald-950/20 border-2 border-dashed border-emerald-500/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Share Your Story</h3>
                            <p className="text-slate-400 text-sm mb-8">Are you a BSP scholar with an inspiring journey? We'd love to feature you!</p>
                            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20">
                                Submit Your Story
                            </button>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mt-32 p-12 bg-slate-900/50 border border-slate-800 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/5 blur-[100px] rounded-full"></div>
                    <Award size={48} className="mx-auto text-emerald-500 mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Empowering Over 15,000 Future Leaders</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-10">Since its inception, the Bangsamoro Scholarship Portal has helped thousands of students achieve their academic and professional goals.</p>
                    <div className="flex justify-center gap-4">
                        <div className="px-8 py-4 bg-slate-950 rounded-2xl border border-slate-800">
                            <div className="text-2xl font-black text-white">98%</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Completion Rate</div>
                        </div>
                        <div className="px-8 py-4 bg-slate-950 rounded-2xl border border-slate-800">
                            <div className="text-2xl font-black text-white">85%</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Employment Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
