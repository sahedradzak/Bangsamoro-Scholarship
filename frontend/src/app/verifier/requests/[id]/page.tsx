"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function VerificationDetailPage() {
    const params = useParams();
    const id = params.id as string;

    // Mock verification request data
    const request = {
        id: "VER-1234",
        studentName: "Juan Dela Cruz",
        studentId: "2024-00456",
        program: "Bachelor of Science in Nursing",
        year: "2nd Year",
        semester: "2nd Semester, AY 2025-2026",
        photo: "",
        status: "Pending",
        requestType: "Enrollment Verification",
        requestedBy: "Registrar Office",
        dateRequested: "January 18, 2026",
        dueDate: "January 25, 2026",
        purpose: "For scholarship application requirements",
    };

    const [selectedStatus, setSelectedStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link href="/verifier/requests">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-slate-900">Request #{request.id}</h1>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                            {request.status}
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Left: Student Info */}
                <div className="md:col-span-1">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-base">Student Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 mb-3">
                                    <AvatarImage src={request.photo} alt={request.studentName} />
                                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                                        {request.studentName.split(" ").map(n => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <h3 className="font-bold text-lg text-slate-900">{request.studentName}</h3>
                                <p className="text-sm text-slate-600">ID: {request.studentId}</p>
                            </div>

                            <Separator />

                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-slate-500 font-medium">Program</p>
                                    <p className="text-slate-900 font-semibold">{request.program}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Year & Semester</p>
                                    <p className="text-slate-900 font-semibold">{request.year}</p>
                                    <p className="text-slate-700">{request.semester}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Details & Actions */}
                <div className="md:col-span-2 space-y-6">
                    {/* Request Details */}
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-base">Request Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-slate-500 font-medium">Request Type</p>
                                    <p className="text-slate-900 font-semibold">{request.requestType}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Requested By</p>
                                    <p className="text-slate-900 font-semibold">{request.requestedBy}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Date Requested</p>
                                    <p className="text-slate-900 font-semibold">{request.dateRequested}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Due Date</p>
                                    <p className="text-slate-900 font-semibold">{request.dueDate}</p>
                                </div>
                            </div>
                            <Separator />
                            <div>
                                <p className="text-slate-500 font-medium text-sm mb-2">Purpose</p>
                                <p className="text-slate-900 bg-slate-50 p-3 rounded-lg text-sm">{request.purpose}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Verification Action */}
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-base">Verification Decision</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-slate-900">Current Enrollment Status:</p>
                                <RadioGroup value={selectedStatus} onValueChange={setSelectedStatus}>
                                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <RadioGroupItem value="enrolled" id="enrolled" />
                                        <label htmlFor="enrolled" className="flex-1 cursor-pointer">
                                            <p className="font-medium text-slate-900">Currently Enrolled</p>
                                            <p className="text-xs text-slate-600">Student is actively enrolled for the current semester</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <RadioGroupItem value="not_enrolled" id="not_enrolled" />
                                        <label htmlFor="not_enrolled" className="flex-1 cursor-pointer">
                                            <p className="font-medium text-slate-900">Not Enrolled</p>
                                            <p className="text-xs text-slate-600">Student is not enrolled in any program</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <RadioGroupItem value="leave" id="leave" />
                                        <label htmlFor="leave" className="flex-1 cursor-pointer">
                                            <p className="font-medium text-slate-900">On Leave of Absence</p>
                                            <p className="text-xs text-slate-600">Student is on authorized leave</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <RadioGroupItem value="graduated" id="graduated" />
                                        <label htmlFor="graduated" className="flex-1 cursor-pointer">
                                            <p className="font-medium text-slate-900">Graduated</p>
                                            <p className="text-xs text-slate-600">Student has completed their program</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                                        <RadioGroupItem value="dropped" id="dropped" />
                                        <label htmlFor="dropped" className="flex-1 cursor-pointer">
                                            <p className="font-medium text-slate-900">Dropped/Withdrawn</p>
                                            <p className="text-xs text-slate-600">Student has dropped or withdrawn from program</p>
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <label htmlFor="remarks" className="text-sm font-medium text-slate-900">
                                    Additional Remarks (Optional)
                                </label>
                                <Textarea
                                    id="remarks"
                                    placeholder="Add any additional information or notes..."
                                    value={remarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    className="min-h-24 resize-none"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-end pt-4">
                        <Button variant="outline" className="px-6">
                            Cancel
                        </Button>
                        <Button variant="outline" className="px-6">
                            Request More Info
                        </Button>
                        <Button
                            className="bg-emerald-600 hover:bg-emerald-700 px-6"
                            disabled={!selectedStatus}
                        >
                            Submit Verification
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
