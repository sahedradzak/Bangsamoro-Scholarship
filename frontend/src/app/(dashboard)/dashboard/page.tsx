
"use client";

import Link from "next/link";
import {
    ArrowRight,
    Calendar,
    CheckCircle2,
    Clock,
    FileText,
    AlertCircle,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function DashboardPage() {
    // Mock user applications based on existing scholarships
    const myApplications = [
        {
            id: "app-1",
            scholarship: SCHOLARSHIPS[0], // AHME
            status: "Under Review",
            submittedDate: "Jan 15, 2026",
            lastUpdate: "2 days ago",
            progress: 40
        },
        {
            id: "app-2",
            scholarship: SCHOLARSHIPS[2], // Medical
            status: "Draft",
            submittedDate: null,
            lastUpdate: "1 week ago",
            progress: 20
        }
    ];

    const notifications = [
        {
            id: 1,
            title: "Application Received",
            message: "Your application for AHME Scholarship has been successfully submitted.",
            time: "2 days ago",
            read: false,
            type: "success"
        },
        {
            id: 2,
            title: "Document Verification",
            message: "Please re-upload your Certificate of Grades. The previous file was blurry.",
            time: "1 week ago",
            read: true,
            type: "warning"
        },
        {
            id: 3,
            title: "New Scholarship Opening",
            message: "The BASE-Merit Scholarship program is now accepting applications.",
            time: "2 weeks ago",
            read: true,
            type: "info"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-600">Welcome back, Juan! Here's an overview of your scholarship applications.</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-sm">
                    <Plus className="mr-2 h-4 w-4" /> Browse Scholarships
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Applications</CardTitle>
                        <FileText className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">2</div>
                        <p className="text-xs text-slate-500 mt-1">1 submitted, 1 draft</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Pending Actions</CardTitle>
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">1</div>
                        <p className="text-xs text-slate-500 mt-1">Document issue requiring attention</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Next Deadline</CardTitle>
                        <Clock className="h-4 w-4 text-slate-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-slate-900">Mar 15</div>
                        <p className="text-xs text-slate-500 mt-1">AHME Scholarship closes soon</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-7">
                {/* Applications List */}
                <div className="md:col-span-2 lg:col-span-4 space-y-6">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle>Recent Applications</CardTitle>
                            <CardDescription>Status updates on your submitted applications.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {myApplications.map((app) => (
                                    <div key={app.id} className="flex flex-col sm:flex-row items-start justify-between border-b border-slate-100 pb-6 last:border-0 last:pb-0 gap-4">
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-900">{app.scholarship?.title}</h4>
                                            <p className="text-sm text-slate-600 flex items-center gap-2">
                                                <span className="font-semibold text-emerald-700">{app.scholarship?.provider}</span>
                                                <span className="text-slate-300">•</span>
                                                <span>Submitted: {app.submittedDate || "Not submitted"}</span>
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
                                            <Badge
                                                variant={app.status === 'Draft' ? 'outline' : 'default'}
                                                className={
                                                    app.status === 'Under Review' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200' :
                                                        app.status === 'Draft' ? 'text-slate-500 border-slate-300' :
                                                            'bg-emerald-100 text-emerald-700'
                                                }
                                            >
                                                {app.status}
                                            </Badge>
                                            <Link href={`/dashboard/applications/${app.id}`}>
                                                <Button variant="link" className="h-auto p-0 text-emerald-600 hover:text-emerald-700 text-sm">
                                                    View Details &rarr;
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Notifications */}
                <div className="md:col-span-1 lg:col-span-3">
                    <Card className="border-slate-200 shadow-sm h-full">
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Latest updates from the portal.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {notifications.map((notif) => (
                                    <div key={notif.id} className={`flex gap-4 p-3 rounded-lg transition-colors ${notif.read ? 'bg-transparent' : 'bg-emerald-50/50'}`}>
                                        <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${notif.read ? 'bg-slate-300' : 'bg-emerald-500'}`} />
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-slate-900 leading-none">{notif.title}</p>
                                            <p className="text-sm text-slate-600">{notif.message}</p>
                                            <p className="text-xs text-slate-400">{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-6 text-slate-600">
                                View All Notifications
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
