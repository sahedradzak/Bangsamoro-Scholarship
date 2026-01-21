"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, GraduationCap, Download, MoreHorizontal, AlertCircle } from "lucide-react";

// Mock Scholars Data
const SCHOLARS = [
    { id: "SCH-2025-001", name: "Fatima R. Utto", program: "Minus 300 Clean Up", school: "Notre Dame University", course: "BS Social Work", status: "Active", gwa: "1.25" },
    { id: "SCH-2025-002", name: "Abdulbasit T. Ali", program: "AHME Scholarship", school: "Cotabato State University", course: "BS Civil Engineering", status: "Active", gwa: "1.50" },
    { id: "SCH-2025-003", name: "Norhana M. Pendatun", program: "BASE Scholarship", school: "MSU Maguindanao", course: "BS Biology", status: "Probation", gwa: "2.75" },
    { id: "SCH-2025-004", name: "Yusuf K. Sinsuat", program: "AHME Scholarship", school: "St. Benedict College", course: "BS Accountancy", status: "Active", gwa: "1.75" },
    { id: "SCH-2024-008", name: "Zuhaira L. Ampatuan", program: "TVET Scholarship", school: "TESDA Regional Center", course: "Bread and Pastry", status: "Graduated", gwa: "Pass" },
];

export default function ScholarsPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "Probation": return "bg-amber-100 text-amber-800 border-amber-200";
            case "Graduated": return "bg-blue-100 text-blue-800 border-blue-200";
            case "Terminated": return "bg-red-100 text-red-800 border-red-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Scholar Management</h2>
                    <p className="text-gray-500">Monitor academic progress and status of 89 active scholars.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export CSV</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <GraduationCap className="mr-2 h-4 w-4" /> Batch Update
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search scholar name or ID..." className="pl-8" />
                    </div>
                    <div className="flex gap-2 text-sm text-gray-500">
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div> Active (85)</span>
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div> Probation (3)</span>
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div> Graduated (1)</span>
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Scholar ID</TableHead>
                            <TableHead>Scholar Name</TableHead>
                            <TableHead>Program & School</TableHead>
                            <TableHead>Latest GWA</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {SCHOLARS.map((scholar) => (
                            <TableRow key={scholar.id}>
                                <TableCell className="font-mono text-xs text-gray-500">{scholar.id}</TableCell>
                                <TableCell>
                                    <div className="font-medium text-gray-900">{scholar.name}</div>
                                    <div className="text-xs text-gray-500">{scholar.course}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-sm font-medium text-emerald-700">{scholar.program}</div>
                                    <div className="text-xs text-gray-500">{scholar.school}</div>
                                </TableCell>
                                <TableCell className="font-mono font-medium">{scholar.gwa}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className={getStatusColor(scholar.status)}>
                                            {scholar.status}
                                        </Badge>
                                        {scholar.status === 'Probation' && <AlertCircle className="h-4 w-4 text-amber-500" />}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Link href={`/${tenant}/admin/scholars/${scholar.id}`}>
                                        <Button variant="ghost" size="sm">View</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
