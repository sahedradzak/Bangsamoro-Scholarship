"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Download, FileText, User, MapPin, Calendar, Mail, Phone, ExternalLink, Printer } from "lucide-react";

export default function ApplicationDetailPage() {
    const params = useParams();
    const tenant = params.tenant as string;
    const id = params.id as string;

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href={`/${tenant}/admin/applications`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                {id}
                            </h2>
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100">
                                Pending Review
                            </Badge>
                        </div>
                        <p className="text-gray-500">Submitted on Jan 20, 2026 • AHME Scholarship Program</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>
                    <Link href={`/${tenant}/admin/applications/${id}/evaluate`}>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                            Evaluate Application
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Col: Applicant Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Applicant Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center">
                                <div className="h-24 w-24 rounded-full bg-slate-200 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-500">
                                    AD
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Aminah P. Datum</h3>
                                <p className="text-sm text-gray-500">aminah.datum@gmail.com</p>
                            </div>

                            <Separator />

                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span>+63 917 123 4567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    <span>Cotabato City, BARMM</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>Born March 15, 2004 (21yo)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span>Female / Single</span>
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <h4 className="font-medium text-sm mb-2 text-gray-900">Education</h4>
                                <div className="bg-gray-50 p-3 rounded text-sm space-y-1">
                                    <p className="font-medium">BS Nursing</p>
                                    <p className="text-gray-600">Notredame Hospital & School of Midwifery</p>
                                    <p className="text-gray-500 text-xs">2nd Year College</p>
                                    <p className="text-emerald-600 font-medium text-xs mt-2">GWA: 1.25</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Col: Application Content */}
                <div className="lg:col-span-2">
                    <Tabs defaultValue="documents" className="w-full">
                        <TabsList className="bg-white border w-full justify-start rounded-lg p-1 h-auto mb-4">
                            <TabsTrigger value="documents" className="px-6 py-2">Documents</TabsTrigger>
                            <TabsTrigger value="details" className="px-6 py-2">Application Details</TabsTrigger>
                            <TabsTrigger value="history" className="px-6 py-2">History & Logs</TabsTrigger>
                        </TabsList>

                        <TabsContent value="documents" className="mt-0 space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Submitted Requirements</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {[
                                        { name: "Certificate of Grades / TOR", type: "PDF", size: "2.5MB" },
                                        { name: "Certificate of Residency", type: "PDF", size: "1.1MB" },
                                        { name: "Income Tax Return (ITR) / Indigency", type: "JPG", size: "3.2MB" },
                                        { name: "PSA Birth Certificate", type: "PDF", size: "1.8MB" },
                                        { name: "Study Load / Enrollment Form", type: "PDF", size: "1.5MB" },
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 bg-white">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 bg-red-50 rounded flex items-center justify-center text-red-500">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                                                    <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="ghost" size="sm" className="h-8">View</Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="details" className="mt-0">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Form Responses</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Family Background</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                                            <div>
                                                <p className="text-gray-500">Father's Name</p>
                                                <p className="font-medium">Abdul K. Datum</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Occupation</p>
                                                <p className="font-medium">Farmer</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Mother's Name</p>
                                                <p className="font-medium">Sittie R. Datum</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Annual Income</p>
                                                <p className="font-medium">₱ 120,000.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Essay</h4>
                                        <div className="space-y-2 text-sm mt-3">
                                            <p className="text-gray-500 mb-1">Why do you deserve this scholarship?</p>
                                            <p className="italic text-gray-700 bg-gray-50 p-4 rounded border">
                                                "As a student from a low-income family in BARMM, pursuing a medical course is a significant financial challenge.
                                                This scholarship will not only alleviate the burden on my parents but also empower me to serve my community as a healthcare professional..."
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="history" className="mt-0">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="border-l-2 border-slate-200 pl-4 space-y-6">
                                        <div className="relative">
                                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                            <p className="text-sm font-medium text-gray-900">Application Submitted</p>
                                            <p className="text-xs text-gray-500">Jan 20, 2026 10:30 AM</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white"></div>
                                            <p className="text-sm font-medium text-gray-900">Email Verified</p>
                                            <p className="text-xs text-gray-500">Jan 20, 2026 10:15 AM</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-slate-200 border-2 border-white"></div>
                                            <p className="text-sm font-medium text-gray-900">Account Created</p>
                                            <p className="text-xs text-gray-500">Jan 20, 2026 10:00 AM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
