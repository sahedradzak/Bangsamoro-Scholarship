"use client";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { SCHOLARSHIPS } from "@/lib/mock-data";
import ScholarshipCard from "@/components/features/ScholarshipCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import { useState } from "react";

export default function ScholarshipDirectory() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredScholarships = SCHOLARSHIPS.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.provider.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-muted/20">
            <Header />

            {/* Page Header */}
            <section className="bg-primary pt-20 pb-32 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl uppercase mb-6 shadow-text">Browse <span className="text-secondary">Scholarships</span></h1>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Find the perfect scholarship for your educational journey. Use the search and filters below to narrow down your options.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 mt-8 pb-24">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Filters Sidebar - Tablet/Desktop */}
                    <aside className="hidden lg:block w-80 space-y-6">
                        <div className="rounded-3xl border bg-white p-6 shadow-sm whitespace-normal">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b">
                                <h2 className="text-xl font-bold text-primary uppercase">Filters</h2>
                                <Button variant="ghost" size="sm" className="text-sm font-bold text-secondary uppercase hover:text-primary">Clear All</Button>
                            </div>

                            <div className="space-y-10">
                                {/* Search */}
                                <div>
                                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-muted-foreground border-l-4 border-secondary pl-3">Search</h3>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            placeholder="Program name..."
                                            className="pl-10 h-11 text-base rounded-xl border-muted focus:border-primary focus:ring-primary"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Provider */}
                                <div>
                                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-muted-foreground border-l-4 border-secondary pl-3">Provider</h3>
                                    <div className="space-y-3">
                                        {['MBHTE', 'MOST', 'MOH', 'CHED', 'TESDA'].map((p) => (
                                            <label key={p} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="h-5 w-5 rounded border border-muted group-hover:border-primary transition-colors flex items-center justify-center">
                                                    <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100" />
                                                </div>
                                                <span className="text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">{p}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Academic Level */}
                                <div>
                                    <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-muted-foreground border-l-4 border-secondary pl-3">Level</h3>
                                    <div className="space-y-3">
                                        {['Senior High School', 'College', 'Graduate', 'Tech-Voc'].map((l) => (
                                            <label key={l} className="flex items-center gap-3 cursor-pointer group">
                                                <div className="h-5 w-5 rounded-full border border-muted group-hover:border-primary transition-colors"></div>
                                                <span className="text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">{l}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Area */}
                    <div className="flex-1 space-y-8">
                        {/* Controls Bar */}
                        <div className="flex flex-col gap-4 rounded-3xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:px-8">
                            <p className="text-sm font-bold text-muted-foreground">
                                Showing <span className="text-primary">{filteredScholarships.length}</span> <span className="text-secondary">scholarships</span>
                            </p>

                            <div className="flex items-center gap-3">
                                <Button variant="ghost" size="sm" className="lg:hidden">
                                    <Filter className="mr-2 h-4 w-4" /> Filters
                                </Button>
                                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-tighter">
                                    Sort By:
                                    <Button variant="ghost" size="sm" className="font-black text-primary hover:bg-transparent">
                                        Deadline <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {filteredScholarships.map((s) => (
                                <ScholarshipCard key={s.id} scholarship={s} />
                            ))}
                        </div>

                        {/* No Results */}
                        {filteredScholarships.length === 0 && (
                            <div className="py-20 text-center">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-muted/50 text-muted-foreground">
                                    <Search className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-extrabold uppercase text-primary mb-2">No Matching Scholarships</h3>
                                <p className="text-muted-foreground">Try adjusting your filters or search keywords.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredScholarships.length > 0 && (
                            <div className="flex items-center justify-end gap-2 pt-12">
                                <Button variant="outline" size="icon" disabled className="rounded-xl">◀</Button>
                                <Button variant="outline" className="h-10 w-10 rounded-xl bg-primary text-white border-primary">1</Button>
                                <Button variant="outline" className="h-10 w-10 rounded-xl hover:bg-primary/5">2</Button>
                                <Button variant="outline" className="h-10 w-10 rounded-xl hover:bg-primary/5">3</Button>
                                <span className="px-2">...</span>
                                <Button variant="outline" className="h-10 w-10 rounded-xl hover:bg-primary/5">10</Button>
                                <Button variant="outline" size="icon" className="rounded-xl">▶</Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
