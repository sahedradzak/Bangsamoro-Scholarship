"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Users,
    FileText,
    CheckCircle2,
    Clock,
    ArrowUpRight,
    Link as LinkIcon,
    MoreHorizontal
} from "lucide-react";

export default function AdminDashboardPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Overview</h2>
                <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-t-4 border-t-emerald-500 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Total Applications</CardTitle>
                        <FileText className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">156</div>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                            <span className="text-emerald-600 flex items-center font-medium mr-1">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                +12%
                            </span>
                            from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-amber-500 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Pending Review</CardTitle>
                        <Clock className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">42</div>
                        <p className="text-xs text-gray-500 mt-1">Requires immediate attention</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-blue-500 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Active Scholars</CardTitle>
                        <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">89</div>
                        <p className="text-xs text-gray-500 mt-1">Across 2 programs</p>
                    </CardContent>
                </Card>

                <Card className="border-t-4 border-t-purple-500 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Disbursed (YTD)</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">₱2.5M</div>
                        <p className="text-xs text-gray-500 mt-1">98% success rate</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Application Pipeline */}
                <Card className="col-span-4 shadow-sm">
                    <CardHeader>
                        <CardTitle>Application Pipeline</CardTitle>
                        <CardDescription>Current status of all active applications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">New / Screening</span>
                                <span className="text-emerald-600 font-bold">28</span>
                            </div>
                            <Progress value={28} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Evaluation Rule</span>
                                <span className="text-amber-600 font-bold">14</span>
                            </div>
                            <Progress value={14} className="h-2 bg-amber-100" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Approved / Awarded</span>
                                <span className="text-blue-600 font-bold">8</span>
                            </div>
                            <Progress value={8} className="h-2 bg-blue-100" />
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="col-span-3 shadow-sm">
                    <CardHeader>
                        <CardTitle>Recent Applications</CardTitle>
                        <CardDescription>Latest submissions requiring review</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Maria Santos", program: "AHME 2026", time: "2 hours ago", status: "New", color: "bg-emerald-100 text-emerald-800" },
                                { name: "Ahmed Hassan", program: "BASE 2026", time: "5 hours ago", status: "Screening", color: "bg-amber-100 text-amber-800" },
                                { name: "Fatima Abdul", program: "AHME 2026", time: "1 day ago", status: "Evaluation", color: "bg-blue-100 text-blue-800" },
                            ].map((app, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
                                            {app.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 font-medium">{app.name}</p>
                                            <p className="text-xs text-gray-500">{app.program} • {app.time}</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className={`text-xs ${app.color}`}>
                                        {app.status}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <Button variant="ghost" className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 text-sm">
                                View All Applications <ArrowUpRight className="ml-2 h-3 w-3" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
