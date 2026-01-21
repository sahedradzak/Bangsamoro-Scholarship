'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Download,
    Filter,
    Calendar,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    XCircle,
    Clock,
    FileCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const HISTORY = [
    { id: "h1", date: "Jan 20", student: "Maria Santos", program: "BS Nursing", type: "Enrollment", result: "verified", verifiedBy: "Registrar" },
    { id: "h2", date: "Jan 18", student: "Ahmed Hassan", program: "BS Engr", type: "Grades", result: "submitted", gwa: "1.75" },
    { id: "h3", date: "Jan 15", student: "Omar Macaraya", program: "BS Educ", type: "Document", result: "rejected", reason: "Invalid" },
    { id: "h4", date: "Jan 14", student: "Jessica Cruz", program: "BS Tourism", type: "Enrollment", result: "verified", verifiedBy: "Registrar" },
    { id: "h5", date: "Jan 12", student: "Ravi Kumar", program: "BS IT", type: "Grades", result: "verified", gwa: "1.25" },
];

export default function VerificationHistoryPage() {
    const totalRequests = 156;
    const verified = 148;
    const rejected = 5;
    const pendingInfo = 3;

    const getResultBadge = (result: string) => {
        switch (result) {
            case "verified":
                return { label: "Verified", bgClass: "bg-emerald-50", textClass: "text-emerald-700" };
            case "rejected":
                return { label: "Rejected", bgClass: "bg-red-50", textClass: "text-red-700" };
            case "submitted":
                return { label: "Submitted", bgClass: "bg-blue-50", textClass: "text-blue-700" };
            default:
                return { label: "Unknown", bgClass: "bg-slate-50", textClass: "text-slate-700" };
        }
    };

    const getResultIcon = (result: string) => {
        switch (result) {
            case "verified":
                return <CheckCircle2 className="h-4 w-4 text-emerald-600" />;
            case "rejected":
                return <XCircle className="h-4 w-4 text-red-600" />;
            case "submitted":
                return <Clock className="h-4 w-4 text-blue-600" />;
            default:
                return <FileCheck className="h-4 w-4 text-slate-600" />;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">Verification History</h1>
                    <p className="text-slate-500">Review all completed verification records and details.</p>
                </div>
                <Button variant="outline" className="shadow-none border-emerald-200 text-emerald-700 font-bold">
                    <Download className="h-4 w-4 mr-2" /> Export
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-slate-100 p-2.5 rounded-xl">
                        <FileCheck className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Requests</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">{totalRequests}</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-emerald-50 p-2.5 rounded-xl">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Verified</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">{verified}</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-red-50 p-2.5 rounded-xl">
                        <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Rejected</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">{rejected}</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl">
                        <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Pending Info</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">{pendingInfo}</p>
                    </div>
                </Card>
            </div>

            <Card className="border-none shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-4 border-b border-slate-50 flex flex-col md:flex-row gap-4 justify-between bg-white">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search by student name or program..." className="pl-9 bg-slate-50 border-none shadow-none" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Filter className="h-3.5 w-3.5 mr-2" /> Type
                        </Button>
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Filter className="h-3.5 w-3.5 mr-2" /> Result
                        </Button>
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Calendar className="h-3.5 w-3.5 mr-2" /> Date Range
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Student & Program</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Type</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Result</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Details</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {HISTORY.map((record) => {
                                    const badge = getResultBadge(record.result);
                                    return (
                                        <tr key={record.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-4 whitespace-nowrap">
                                                <span className="text-sm font-medium text-slate-600">{record.date}</span>
                                            </td>
                                            <td className="p-4">
                                                <div>
                                                    <span className="text-sm font-bold text-slate-900 block">{record.student}</span>
                                                    <span className="text-xs text-slate-500">{record.program}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="text-sm text-slate-600">{record.type}</span>
                                            </td>
                                            <td className="p-4">
                                                <Badge className={cn(
                                                    "text-[10px] font-bold uppercase tracking-wider",
                                                    badge.bgClass,
                                                    badge.textClass,
                                                    "flex items-center gap-1 w-fit"
                                                )}>
                                                    {getResultIcon(record.result)}
                                                    {badge.label}
                                                </Badge>
                                            </td>
                                            <td className="p-4 text-xs text-slate-500">
                                                {record.verifiedBy && <span>Verified by: {record.verifiedBy}</span>}
                                                {record.gwa && <span>GWA: {record.gwa}</span>}
                                                {record.reason && <span className="text-red-600">{record.reason}</span>}
                                            </td>
                                            <td className="p-4 text-right">
                                                <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-emerald-700 hover:text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    View Details
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <CardFooter className="p-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <p>Showing <strong>1-5</strong> of 156 records</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 shadow-none disabled:opacity-50" disabled>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none border-emerald-200 text-emerald-700">1</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">2</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">3</Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 shadow-none">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
