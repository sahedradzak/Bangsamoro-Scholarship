"use client"

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SCHOLARS_DIRECTORY } from "@/lib/mock-data";
import { MapPin, GraduationCap, Link as LinkIcon, MessageSquare, UserPlus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ScholarProfilePage() {
    const params = useParams();
    const scholar = SCHOLARS_DIRECTORY.find((s) => s.id === params.id) || SCHOLARS_DIRECTORY[0];

    if (!scholar) {
        return <div>Scholar not found</div>;
    }

    return (
        <div className="space-y-6">
            <Link href="/dashboard/community/scholars" className="flex items-center text-sm text-slate-500 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Directory
            </Link>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Profile Card */}
                <aside className="w-full lg:w-80 space-y-6">
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <Avatar className="h-32 w-32 mb-4 ring-4 ring-emerald-50">
                                <AvatarImage src={scholar.avatar} alt={scholar.name} />
                                <AvatarFallback className="text-2xl">{scholar.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-xl font-bold text-slate-900">{scholar.name}</h2>
                            <p className="text-sm font-medium text-emerald-700 mb-4">{scholar.type} · Batch {scholar.batch}</p>

                            <div className="w-full space-y-2 mb-6 text-sm text-left px-2">
                                <div className="flex items-start gap-3 text-slate-600">
                                    <GraduationCap className="h-4 w-4 mt-0.5 text-slate-400" />
                                    <div>
                                        <p className="font-medium text-slate-900">{scholar.program}</p>
                                        <p className="text-xs">{scholar.school}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <span>{scholar.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <LinkIcon className="h-4 w-4 text-slate-400" />
                                    <span className="text-emerald-600 cursor-pointer hover:underline">View Portfolio</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    <UserPlus className="h-4 w-4 mr-2" />
                                    Connect
                                </Button>
                                <Button variant="outline">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Message
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </aside>

                {/* Main Details */}
                <div className="flex-1 space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">About</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {scholar.about} I am a dedicated student leader with a strong passion for community service.
                                My goal is to leverage my education to contribute to the healthcare system in the Bangsamoro region.
                                I specifically want to address the maternal health challenges in remote areas.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Achievements</h3>
                            <div className="space-y-4">
                                {scholar.achievements.length > 0 ? (
                                    scholar.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                                            <div className="h-8 w-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">🏆</div>
                                            <span className="font-medium text-amber-900">{achievement}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-500 italic">No achievements listed yet.</p>
                                )}
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">🎓</div>
                                    <span className="font-medium text-slate-900">Scholarship Grantee ({scholar.type})</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={scholar.avatar} />
                                        <AvatarFallback>{scholar.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm text-slate-900"><span className="font-semibold"> {scholar.name}</span> posted an update.</p>
                                        <p className="text-xs text-slate-500 mb-2">2 days ago</p>
                                        <div className="p-3 bg-slate-50 rounded-md border text-sm text-slate-600">
                                            Excited to be part of the upcoming Research Methods workshop! Who else is joining?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
