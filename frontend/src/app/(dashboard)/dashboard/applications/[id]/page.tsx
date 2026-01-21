
"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function ApplicationDetailPage() {
    // Mock application data
    const application = {
        id: "app-1",
        scholarship: SCHOLARSHIPS[0], // AHME
        status: "Under Review",
        submittedDate: "January 15, 2026",
        lastUpdate: "January 18, 2026",
        refNumber: "BSP-2026-00123",
        applicant: {
            name: "Juan Dela Cruz",
            email: "juan.delacruz@example.com",
            school: "Notre Dame University"
        },
        documents: [
            { name: "Certificate of Grades", status: "Verified", date: "Jan 15, 2026" },
            { name: "Certificate of Enrolment", status: "Verified", date: "Jan 15, 2026" },
            { name: "Birth Certificate (PSA)", status: "Pending Review", date: "Jan 15, 2026" },
            { name: "Certificate of Residency", status: "Verified", date: "Jan 15, 2026" }
        ],
        timeline: [
            { title: "Application Under Review", date: "Jan 18, 2026", description: "Your application is currently being reviewed by the scholarship committee.", current: true },
            { title: "Application Submitted", date: "Jan 15, 2026", description: "Application successfully submitted.", current: false },
            { title: "Application Created", date: "Jan 14, 2026", description: "Draft application started.", current: false }
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link href="/dashboard/applications">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold text-slate-900">Application Details</h1>
                            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200">
                                {application.status}
                            </Badge>
                        </div>
                        <p className="text-slate-600 font-mono text-sm mt-1">Ref No: {application.refNumber}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle>Program Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                <div className="h-12 w-12 rounded-lg bg-white border shadow-sm flex items-center justify-center text-emerald-700 font-bold text-lg shrink-0">
                                    {application.scholarship.provider}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">{application.scholarship.title}</h3>
                                    <p className="text-slate-600">{application.scholarship.providerFull}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-slate-500 font-medium">Academic Year</p>
                                    <p className="text-slate-900 font-semibold">2026-2027</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Submission Date</p>
                                    <p className="text-slate-900 font-semibold">{application.submittedDate}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle>Submitted Documents</CardTitle>
                            <CardDescription>Documents attached to this application.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {application.documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-5 w-5 text-emerald-600" />
                                            <div>
                                                <p className="font-medium text-slate-900 text-sm">{doc.name}</p>
                                                <p className="text-xs text-slate-500">{doc.date}</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className={
                                            doc.status === 'Verified' ? 'bg-green-100 text-green-700' :
                                                'bg-amber-100 text-amber-700'
                                        }>
                                            {doc.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-1 space-y-6">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle>Application Timeline</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-8 relative pl-2">
                                {/* Vertical Line */}
                                <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-slate-100"></div>

                                {application.timeline.map((event, index) => (
                                    <div key={index} className="relative pl-8">
                                        <div className={`absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white flex items-center justify-center z-10 ${event.current ? 'bg-amber-500 shadow-md' : 'bg-emerald-600'
                                            }`}>
                                            {event.current ? <Clock className="h-4 w-4 text-white" /> : <CheckCircle2 className="h-4 w-4 text-white" />}
                                        </div>
                                        <div>
                                            <p className={`text-sm font-bold ${event.current ? 'text-amber-600' : 'text-slate-900'}`}>{event.title}</p>
                                            <p className="text-xs text-slate-400 mb-1">{event.date}</p>
                                            <p className="text-xs text-slate-600 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
