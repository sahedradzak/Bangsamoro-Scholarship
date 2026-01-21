
"use client";

import Link from "next/link";
import { ArrowRight, FileText, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function ApplicationsPage() {
    // Mock user applications
    const applications = [
        {
            id: "app-1",
            scholarship: SCHOLARSHIPS[0],
            status: "Under Review",
            dateSubmitted: "Jan 15, 2026",
            dateUpdated: "Jan 18, 2026",
            refNumber: "BSP-2026-00123"
        },
        {
            id: "app-2",
            scholarship: SCHOLARSHIPS[2], // Medical
            status: "Draft",
            dateSubmitted: null,
            dateUpdated: "Jan 10, 2026",
            refNumber: null
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Applications</h1>
                    <p className="text-slate-600">Track the status of your scholarship applications.</p>
                </div>
                <Link href="/scholarships">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Apply for New Scholarship
                    </Button>
                </Link>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Search applications..."
                                className="pl-9"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-10 border-dashed">
                                <SlidersHorizontal className="mr-2 h-4 w-4" /> Filter Status
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[300px]">Scholarship Program</TableHead>
                                <TableHead>Reference No.</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date Submitted</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-xs shrink-0">
                                                {app.scholarship?.provider}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{app.scholarship?.title}</p>
                                                <p className="text-xs text-slate-500">{app.scholarship?.providerFull}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-mono text-xs text-slate-600">
                                        {app.refNumber || <span className="text-slate-400 italic">--</span>}
                                    </TableCell>
                                    <TableCell>
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
                                    </TableCell>
                                    <TableCell className="text-slate-600">
                                        {app.dateSubmitted || "Not submitted"}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link href={`/dashboard/applications/${app.id}`}>
                                            <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                                                View <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {applications.length === 0 && (
                        <div className="text-center py-12">
                            <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <FileText className="h-6 w-6 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900">No applications found</h3>
                            <p className="text-slate-500 mb-6 max-w-sm mx-auto">
                                You haven't submitted any scholarship applications yet. Browse available programs to get started.
                            </p>
                            <Link href="/scholarships">
                                <Button variant="outline">Browse Scholarships</Button>
                            </Link>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
