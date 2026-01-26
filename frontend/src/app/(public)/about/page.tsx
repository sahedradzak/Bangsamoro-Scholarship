
"use client";

import Link from "next/link";
import { CheckCircle2, Search, ClipboardList, Users, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { STATS, PARTNERS } from "@/lib/mock-data";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-emerald-900 text-white pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Bridging Opportunities and the <span className="text-amber-400">Bangsamoro</span> Youth
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                            Connecting students with opportunities to build a brighter future for the region.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 relative inline-block">
                                    Our Mission
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded-full"></span>
                                </h2>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify italic">
                                    The Bangsamoro <span className="text-secondary">Scholarship</span> Portal aims to create a unified, accessible platform that democratizes access to education. We bridge the gap between aspiring scholars and the diverse scholarship opportunities offered by BARMM government agencies and partner institutions.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed text-justify italic">
                                    By fostering educational excellence, we are investing in the human capital that will drive long-term peace and development in the Bangsamoro region.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="bg-white shadow-lg border-emerald-100 transform translate-y-4">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <span className="text-4xl font-bold text-emerald-600 mb-2">{STATS[0].value}</span>
                                        <span className="text-sm text-slate-600 font-medium"><span className="text-secondary">Scholarships</span> Available</span>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white shadow-lg border-emerald-100">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <span className="text-4xl font-bold text-amber-500 mb-2">{STATS[1].value}</span>
                                        <span className="text-sm text-slate-600 font-medium">Students Served</span>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white shadow-lg border-emerald-100 transform translate-y-4 col-span-2">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <span className="text-4xl font-bold text-slate-800 mb-2">{STATS[2].value}</span>
                                        <span className="text-sm text-slate-600 font-medium">Awarded Funding</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
                            <p className="text-slate-600 text-lg">We simplify the entire scholarship journey from discovery to awards.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 text-center">
                                    <div className="mx-auto flex items-center justify-center mb-6 text-emerald-600">
                                        <Search className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Matchmaking</h3>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Our platform automatically matches your profile with scholarships you are eligible for, saving you time and effort.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 text-center">
                                    <div className="mx-auto flex items-center justify-center mb-6 text-emerald-600">
                                        <ClipboardList className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Streamlined Application</h3>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Apply to multiple programs with a single profile. Track your application status in real-time and receive automated updates.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 text-center">
                                    <div className="mx-auto flex items-center justify-center mb-6 text-emerald-600">
                                        <Users className="h-10 w-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Community & Support</h3>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Join a thriving community of scholars. Access mentorship programs, peer networks, and academic resources.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-20 bg-emerald-50/50 border-y border-emerald-100">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Partner Agencies</h2>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {PARTNERS.map((partner, index) => (
                                <div key={index} className="flex flex-col items-center max-w-[200px]">
                                    <div className="w-20 h-20 flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                                        <img src={partner.logo} alt={partner.code} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">{partner.code}</span>
                                    <span className="text-sm text-slate-500 mt-2 font-medium">{partner.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section (Placeholder) */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built by MoroTech</h2>
                            <p className="text-slate-600 text-lg mb-8">
                                A technology initiative dedicated to supporting digital transformation in the Bangsamoro region.
                            </p>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-slate-900 text-white py-16">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to find your scholarship?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                                Browse Scholarships
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white text-lg px-8">
                                Create Account
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
