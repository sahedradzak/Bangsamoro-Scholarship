"use client";

import { Button } from "@/components/ui/button";
import { Search, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SCHOLARS_DIRECTORY } from "@/lib/mock-data";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-2 pb-6 lg:pt-4 lg:pb-8">


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
                                {SCHOLARS_DIRECTORY.slice(0, 4).map((scholar) => (
                                    <div key={scholar.id} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden relative">
                                        <Image
                                            src={scholar.avatar}
                                            alt="Bangsamoro Scholar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
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
                                    src="/images/hero-foundation-day.jpg"
                                    alt="Bangsamoro Foundation Day 2026 celebration"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-3xl font-bold mb-1">Empowering the Future</h3>
                                    <p className="text-lg text-white/90 italic">"Education is the most powerful weapon which you can use to change the world."</p>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
