"use client";

import { Button } from "@/components/ui/button";
import { Search, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-2 pb-20 lg:pt-6 lg:pb-32">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary blur-3xl"></div>
                <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
                            Discover <span className="text-secondary">Scholarships</span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed italic">
                            Your one-stop platform to discover opportunities, build your academic profile, and connect with a community of scholars shaping the future of Bangsamoro.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search scholarships..."
                                    className="h-12 w-full rounded-xl border border-border bg-white pl-10 pr-4 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                            <Button className="h-12 px-8 bg-primary text-white hover:bg-primary/90">
                                Browse All <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-medium">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted"></div>
                                ))}
                            </div>
                            <p className="text-muted-foreground">
                                Joined by <span className="text-foreground font-bold">12,000+</span> scholars already
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 overflow-hidden rounded-3xl border shadow-2xl">
                            <div className="aspect-[4/3] relative overflow-hidden group">
                                <img
                                    src="/images/hero-students.png"
                                    alt="Diverse Bangsamoro students on a university campus"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold mb-1">Empowering the Future</h3>
                                    <p className="text-sm text-white/90 italic">"Education is the most powerful weapon which you can use to change the world."</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating UI Elements for "Wow" factor */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-6 top-10 z-20 hidden rounded-2xl bg-white p-4 shadow-xl border md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">Application Approved</p>
                                    <p className="text-[10px] text-muted-foreground">AHME Scholarship 2026</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-10 bottom-10 z-20 hidden rounded-2xl bg-white p-4 shadow-xl border md:block"
                        >
                            <div className="space-y-2">
                                <p className="text-xs font-bold">New Scholarship Alert</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center font-bold text-primary text-[10px]">BASE</div>
                                    <p className="text-[10px] text-muted-foreground">MOST Merit Program</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
