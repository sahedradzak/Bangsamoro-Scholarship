
"use client";

import Link from "next/link";
import { Bookmark, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScholarshipCard from "@/components/features/ScholarshipCard";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function SavedScholarshipsPage() {
    // Mock saved scholarships
    const savedScholarships = [SCHOLARSHIPS[0], SCHOLARSHIPS[1], SCHOLARSHIPS[3]];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Saved <span className="text-secondary">Scholarships</span></h1>
                    <p className="text-slate-600">Scholarships you have bookmarked for later viewing.</p>
                </div>
                <Link href="/scholarships">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Browse More
                    </Button>
                </Link>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search saved..."
                        className="pl-9 h-10"
                    />
                </div>
                <div className="text-sm text-slate-500 font-medium">
                    {savedScholarships.length} Saved Items
                </div>
            </div>

            {savedScholarships.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {savedScholarships.map((scholarship) => (
                        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                    <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                        <Bookmark className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No saved scholarships yet</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                        Browse our directory and bookmark scholarships you're interested in to easily access them here.
                    </p>
                    <Link href="/scholarships">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            Browse Directory
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
