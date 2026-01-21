"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, MapPin, GraduationCap, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function RecommendationsPage() {
    // Mock Match Logic
    const MATCHES = [
        {
            scholarship: SCHOLARSHIPS.find(s => s.id === "base-2026"),
            score: 98,
            reasons: ["STEM Course", "High GWA", "BARMM Resident"],
            warning: null
        },
        {
            scholarship: SCHOLARSHIPS.find(s => s.id === "ched-2026"),
            score: 85,
            reasons: ["Income Eligible", "BARMM Resident"],
            warning: "May overlap with current scholarship"
        },
        {
            scholarship: SCHOLARSHIPS.find(s => s.id === "medical-2026"),
            score: 45,
            reasons: ["BARMM Resident"],
            warning: "Requires Pre-Medical Degree"
        }
    ].filter(m => m.scholarship); // Safety check

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Recommended For You</h1>
                <p className="text-gray-500">AI-matched scholarships based on your profile, education, and location.</p>
            </div>

            <Card className="bg-emerald-50 border-emerald-100">
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                            <Star className="h-6 w-6 text-emerald-600 fill-emerald-600" />
                        </div>
                        <div className="space-y-1 flex-1">
                            <h3 className="font-semibold text-emerald-900">Your Match Profile</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-emerald-800 mt-2">
                                <Badge variant="outline" className="bg-white border-emerald-200 text-emerald-800">
                                    <MapPin className="h-3 w-3 mr-1" /> Cotabato City
                                </Badge>
                                <Badge variant="outline" className="bg-white border-emerald-200 text-emerald-800">
                                    <GraduationCap className="h-3 w-3 mr-1" /> College (3rd Year)
                                </Badge>
                                <Badge variant="outline" className="bg-white border-emerald-200 text-emerald-800">
                                    BS Computer Science
                                </Badge>
                                <Badge variant="outline" className="bg-white border-emerald-200 text-emerald-800">
                                    GWA: 1.45
                                </Badge>
                            </div>
                        </div>
                        <Button variant="outline" className="bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                            Update Profile
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MATCHES.map((match) => {
                    const sch = match.scholarship!;
                    return (
                        <Card key={sch.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
                            <CardHeader className="p-0">
                                <div className="relative h-32 w-full bg-gray-100">
                                    {/* In a real app, use sch.bgImage. Using provider logo pattern for now */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-slate-900 opacity-90" />
                                    <div className="absolute inset-0 p-6 flex items-center justify-between">
                                        <div className="h-14 w-14 bg-white rounded-full p-2 shadow-lg">
                                            <Image
                                                src={sch.logo}
                                                alt={sch.provider}
                                                width={56}
                                                height={56}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <div className="text-right text-white">
                                            <Badge className="bg-emerald-500 hover:bg-emerald-600 border-none">
                                                {sch.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                                            {sch.provider}
                                        </span>
                                        <h3 className="font-bold text-gray-900 line-clamp-1" title={sch.title}>
                                            {sch.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Match Score */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span className="text-emerald-700">{match.score}% Match</span>
                                    </div>
                                    <Progress value={match.score} className="h-2 bg-emerald-100" />
                                </div>

                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium text-gray-700">Why this matches:</p>
                                        <ul className="space-y-1">
                                            {match.reasons.map((reason, i) => (
                                                <li key={i} className="flex items-center text-xs text-gray-600">
                                                    <CheckCircle2 className="h-3 w-3 text-emerald-500 mr-2" />
                                                    {reason}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {match.warning && (
                                        <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded">
                                            <AlertTriangle className="h-3 w-3 mt-0.5" />
                                            {match.warning}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Link href={`/${sch.provider.toLowerCase()}/apply/${sch.id}`} className="w-full">
                                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
