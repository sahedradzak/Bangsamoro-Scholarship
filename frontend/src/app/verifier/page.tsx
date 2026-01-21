import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    CheckCircle2,
    Clock,
    FileCheck,
    AlertCircle,
    FileText,
    BookOpen,
    Archive
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function VerifierDashboard() {
    const queueStats = [
        { label: "Pending Requests", value: "12", icon: Clock, color: "blue" },
        { label: "Completed This Week", value: "8", icon: CheckCircle2, color: "emerald" },
        { label: "Total Verified", value: "156", icon: FileCheck, color: "amber" },
    ];

    const verificationRequests = [
        {
            id: 1,
            type: "Enrollment Verification",
            studentName: "Maria Santos",
            program: "BS Information Technology",
            yearLevel: "3rd Year",
            requestedBy: "Mindanao State University",
            dateRequested: "2025-01-20",
            status: "pending",
        },
        {
            id: 2,
            type: "Grade Submission",
            studentName: "Ahmed Hassan",
            program: "BS Business Administration",
            yearLevel: "2nd Year",
            requestedBy: "Cotabato Polytechnic College",
            dateRequested: "2025-01-19",
            status: "pending",
        },
        {
            id: 3,
            type: "Document Verification",
            studentName: "Fatima Amata",
            program: "BS Nursing",
            yearLevel: "4th Year",
            requestedBy: "General Santos City University",
            dateRequested: "2025-01-18",
            status: "pending",
        },
        {
            id: 4,
            type: "Enrollment Verification",
            studentName: "Juan Dela Cruz",
            program: "BS Engineering",
            yearLevel: "1st Year",
            requestedBy: "Mindanao State University",
            dateRequested: "2025-01-17",
            status: "pending",
        },
    ];

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "Enrollment Verification":
                return BookOpen;
            case "Grade Submission":
                return FileText;
            case "Document Verification":
                return Archive;
            default:
                return FileCheck;
        }
    };

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case "Enrollment Verification":
                return "bg-blue-100 text-blue-700";
            case "Grade Submission":
                return "bg-purple-100 text-purple-700";
            case "Document Verification":
                return "bg-amber-100 text-amber-700";
            default:
                return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-heading text-slate-900">Verification Dashboard</h1>
                <p className="text-slate-500">Manage and process scholarship verification requests.</p>
            </div>

            {/* Queue Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {queueStats.map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn(
                                    "p-2 rounded-lg",
                                    stat.color === 'blue' && "bg-blue-50 text-blue-600",
                                    stat.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                                    stat.color === 'amber' && "bg-amber-50 text-amber-600",
                                )}>
                                    <stat.icon className="h-5 w-5" />
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Verification Requests List */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Pending Verification Requests</CardTitle>
                    <CardDescription>Review and process verification requests from educational institutions</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-100">
                        {verificationRequests.map((request) => {
                            const TypeIcon = getTypeIcon(request.type);
                            return (
                                <div key={request.id} className="p-6 hover:bg-slate-50 transition-colors">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        {/* Left Section */}
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-slate-100 rounded-lg mt-1">
                                                    <TypeIcon className="h-5 w-5 text-slate-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <Badge className={cn("mb-2", getTypeBadgeColor(request.type))}>
                                                        {request.type}
                                                    </Badge>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                                        <div>
                                                            <p className="text-slate-500 text-xs">Student Name</p>
                                                            <p className="font-semibold text-slate-900">{request.studentName}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-slate-500 text-xs">Program</p>
                                                            <p className="font-semibold text-slate-900">{request.program}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-slate-500 text-xs">Year Level</p>
                                                            <p className="font-semibold text-slate-900">{request.yearLevel}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-slate-500 text-xs">Requested By</p>
                                                            <p className="font-semibold text-slate-900">{request.requestedBy}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-slate-500 ml-11">
                                                Requested: {new Date(request.dateRequested).toLocaleDateString()}
                                            </div>
                                        </div>

                                        {/* Right Section - Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 lg:ml-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-slate-300 hover:bg-slate-100"
                                            >
                                                More Info
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-red-300 text-red-600 hover:bg-red-50"
                                            >
                                                Reject
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                            >
                                                Verify
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
                <div className="p-4 border-t text-center">
                    <Button variant="ghost" size="sm" className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                        View All Requests
                    </Button>
                </div>
            </Card>
        </div>
    );
}
