"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Eye, CheckCircle2, XCircle, Clock, MoreHorizontal } from "lucide-react";

// Mock Applications Data
const APPLICATIONS = [
    { id: "APP-001", name: "Aminah P. Datum", program: "AHME Scholarship", course: "BS Nursing", school: "Notredame Hospital and School of Midwifery", status: "Pending Review", date: "2026-01-20", score: "-" },
    { id: "APP-002", name: "Sahria K. Malang", program: "BASE Scholarship", course: "BS Civil Engineering", school: "Cotabato State University", status: "Screening", date: "2026-01-19", score: "-" },
    { id: "APP-003", name: "Jamil O. Salik", program: "AHME Scholarship", course: "BS Medical Technology", school: "VMC College", status: "Evaluated", date: "2026-01-18", score: "88/100" },
    { id: "APP-004", name: "Fatima R. Utto", program: "Minus 300 Clean Up", course: "BS Social Work", school: "Notre Dame University", status: "Approved", date: "2026-01-15", score: "92/100" },
    { id: "APP-005", name: "Abdulbasit M. Usman", program: "TVET Scholarship", course: "Automotive Servicing", school: "TESDA Regional Center", status: "Rejected", date: "2026-01-10", score: "65/100" },
];

export default function ApplicationsPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Approved": return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "Rejected": return "bg-red-100 text-red-800 border-red-200";
            case "Evaluated": return "bg-blue-100 text-blue-800 border-blue-200";
            case "Screening": return "bg-purple-100 text-purple-800 border-purple-200";
            default: return "bg-amber-100 text-amber-800 border-amber-200";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Application Review</h2>
                    <p className="text-gray-500">Screen, evaluate, and approve scholarship applications.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Advanced Filter</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Export List</Button>
                </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-1">
                <Tabs defaultValue="all">
                    <div className="p-3 border-b flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <TabsList>
                            <TabsTrigger value="all">All Applications</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                            <TabsTrigger value="screening">Screening</TabsTrigger>
                            <TabsTrigger value="evaluated">Evaluated</TabsTrigger>
                        </TabsList>

                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                            <Input placeholder="Search applicant, ID, or program..." className="pl-8" />
                        </div>
                    </div>

                    <TabsContent value="all" className="m-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Application ID</TableHead>
                                    <TableHead>Applicant Name</TableHead>
                                    <TableHead>Program & Course</TableHead>
                                    <TableHead>Date Applied</TableHead>
                                    <TableHead>Evaluation Score</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {APPLICATIONS.map((app) => (
                                    <TableRow key={app.id}>
                                        <TableCell className="font-mono text-xs">{app.id}</TableCell>
                                        <TableCell>
                                            <div className="font-medium text-gray-900">{app.name}</div>
                                            <div className="text-xs text-gray-500">{app.school}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-sm text-emerald-700 font-medium">{app.program}</div>
                                            <div className="text-xs text-gray-500">{app.course}</div>
                                        </TableCell>
                                        <TableCell className="text-gray-500">{app.date}</TableCell>
                                        <TableCell>
                                            <span className={`font-semibold ${app.score !== '-' && parseInt(app.score) >= 75 ? 'text-emerald-600' : 'text-gray-500'}`}>
                                                {app.score}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={getStatusColor(app.status)}>
                                                {app.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Link href={`/${tenant}/admin/applications/${app.id}`}>
                                                    <Button variant="ghost" size="icon" title="View Details">
                                                        <Eye className="h-4 w-4 text-gray-500 hover:text-emerald-600" />
                                                    </Button>
                                                </Link>
                                                {app.status === 'Pending Review' && (
                                                    <Link href={`/${tenant}/admin/applications/${app.id}/evaluate`}>
                                                        <Button variant="ghost" size="icon" title="Evaluate">
                                                            <CheckCircle2 className="h-4 w-4 text-gray-500 hover:text-emerald-600" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>

                    {/* Duplicate TabsContent for other tabs for prototype viz */}
                    <TabsContent value="pending" className="m-0 p-8 text-center text-gray-500">Filtered view for Pending...</TabsContent>
                    <TabsContent value="screening" className="m-0 p-8 text-center text-gray-500">Filtered view for Screening...</TabsContent>
                    <TabsContent value="evaluated" className="m-0 p-8 text-center text-gray-500">Filtered view for Evaluated...</TabsContent>
                </Tabs>

                <div className="p-4 border-t bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                    <span>Showing 5 of 156 records</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
