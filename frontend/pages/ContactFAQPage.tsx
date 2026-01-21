
import React, { useState } from 'react';
import {
    Search, Mail, Phone, MapPin,
    MessageSquare, FileText, HelpCircle,
    ChevronDown, ChevronUp, Send
} from 'lucide-react';

const ContactFAQPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'faq' | 'contact' | 'ticket'>('faq');
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            q: "How do I apply for a scholarship?",
            a: "1. Create an account and complete your profile. 2. Browse available scholarships. 3. Click 'Apply' on scholarships you're eligible for. 4. Complete the application form and upload documents. 5. Submit and track your application status.",
            cat: "Application"
        },
        {
            q: "What documents do I need to apply?",
            a: "Common requirements include: PSA Birth Certificate, Transcript of Records, Certificate of Residency, and Proof of Income. Each scholarship may have specific requirements listed on their detail page.",
            cat: "Application"
        },
        {
            q: "How long does the application review take?",
            a: "Review times vary by scholarship program, typically 2-4 weeks after the application deadline. You can track the status in your dashboard.",
            cat: "Status"
        },
        {
            q: "Can I apply to multiple scholarships?",
            a: "Yes, you can apply to multiple scholarships. However, some grants may prohibit receiving multiple stipends simultaneously. Check individual program rules.",
            cat: "Eligibility"
        },
        {
            q: "How do I update my profile information?",
            a: "Log in to your account, go to Dashboard → Profile. You can edit your personal and academic information there.",
            cat: "Account"
        }
    ].filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="bg-slate-950 min-h-screen py-24">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Help & <span className="text-emerald-500">Contact</span></h1>
                    <p className="text-slate-400 text-lg">Find answers to common questions or reach out to our support team for assistance.</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1.5 bg-slate-900 rounded-2xl border border-slate-800">
                        {[
                            { id: 'faq', label: 'FAQ', icon: <HelpCircle size={18} /> },
                            { id: 'contact', label: 'Contact Us', icon: <MessageSquare size={18} /> },
                            { id: 'ticket', label: 'Support Ticket', icon: <FileText size={18} /> }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id
                                        ? 'bg-emerald-600 text-white shadow-lg'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                <div className="min-h-[500px]">
                    {activeTab === 'faq' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="relative mb-12">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search FAQs by keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-slate-900 border border-slate-800 rounded-3xl py-6 pl-16 pr-8 text-white focus:outline-none focus:border-emerald-500/50 transition-all text-lg shadow-xl"
                                />
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden transition-all hover:border-emerald-500/30">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full px-8 py-6 flex justify-between items-center text-left"
                                        >
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-2 block">{faq.cat}</span>
                                                <h3 className="text-xl font-bold text-white">{faq.q}</h3>
                                            </div>
                                            <div className="text-slate-500 group-hover:text-emerald-500">
                                                {openFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                            </div>
                                        </button>
                                        {openFaq === idx && (
                                            <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                                                <div className="h-px bg-slate-800 mb-6"></div>
                                                <p className="text-slate-400 leading-relaxed text-lg">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: <Mail size={32} />, title: "Email Support", value: "support@bsp.gov.ph", desc: "Response within 24-48 hours", link: "mailto:support@bsp.gov.ph" },
                                    { icon: <Phone size={32} />, title: "Hotline", value: "(064) 123-4567", desc: "Mon-Fri 8AM-5PM" },
                                    { icon: <MapPin size={32} />, title: "Office Address", value: "BARMM Government Center", desc: "Cotabato City, Mindanao" },
                                    { icon: <MessageSquare size={32} />, title: "Live Chat", value: "Start Chatting", desc: "Available during office hours", special: true }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] group hover:border-emerald-500/30 transition-all flex flex-col items-center text-center shadow-lg">
                                        <div className="bg-emerald-500/10 w-20 h-20 rounded-3xl flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">{item.title}</h3>
                                        <p className={`text-2xl font-bold text-white mb-2 ${item.special ? 'text-emerald-400 cursor-pointer hover:underline' : ''}`}>{item.value}</p>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'ticket' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
                            <div className="bg-slate-900/50 border border-slate-800 p-12 rounded-[3rem] shadow-2xl">
                                <h2 className="text-2xl font-bold text-white mb-8">Submit a Support Ticket</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Issue Category</label>
                                            <select className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50">
                                                <option>Application Issue</option>
                                                <option>Eligibility Query</option>
                                                <option>Account Access</option>
                                                <option>Disbursement Problem</option>
                                                <option>Technical Bug</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Priority</label>
                                            <select className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50">
                                                <option>Normal</option>
                                                <option>High</option>
                                                <option>Urgent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                                        <input type="text" placeholder="Summary of your issue" className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Detailed Description</label>
                                        <textarea rows={6} placeholder="Provide as much detail as possible..." className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-emerald-500/50 resize-none"></textarea>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                                        <button type="button" className="text-slate-500 font-bold hover:text-slate-300 transition-colors">Attach Files (📎)</button>
                                        <button type="submit" className="flex items-center gap-3 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
                                            <Send size={20} />
                                            Submit Ticket
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactFAQPage;
