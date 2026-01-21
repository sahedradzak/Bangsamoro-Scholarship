
"use client";

import Link from "next/link";
import { Edit, Mail, MapPin, Phone, User, Calendar, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
    // Mock User Data
    const user = {
        firstName: "Juan",
        lastName: "Dela Cruz",
        middleName: "Santos",
        email: "juan.delacruz@example.com",
        phone: "0917 123 4567",
        dob: "June 12, 2004",
        gender: "Male",
        address: "Poblacion 1, Cotabato City, BARMM",
        avatar: "/avatars/user.jpg",
        education: [
            {
                level: "College",
                school: "Notre Dame University",
                program: "BS Civil Engineering",
                year: "3rd Year",
                status: "Enrolled"
            },
            {
                level: "High School",
                school: "Cotabato City National High School",
                year: "Graduated 2022",
                honors: "With High Honors"
            }
        ],
        documents: [
            { name: "PSA Birth Certificate", status: "Verified" },
            { name: "Certificate of Residency", status: "Verified" },
            { name: "Income Tax Return", status: "Pending" }
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
                    <p className="text-slate-600">Manage your personal information and documents.</p>
                </div>
                <Link href="/dashboard/profile/edit">
                    <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                        <Edit className="mr-2 h-4 w-4" /> Edit Profile
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Card */}
                <div className="md:col-span-1 space-y-6">
                    <Card className="border-slate-200 shadow-sm text-center">
                        <CardContent className="pt-8 pb-8">
                            <Avatar className="h-32 w-32 border-4 border-emerald-50 mx-auto mb-4">
                                <AvatarImage src={user.avatar} alt="User" />
                                <AvatarFallback className="text-4xl bg-emerald-100 text-emerald-700">
                                    {user.firstName[0]}{user.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-bold text-slate-900">{user.firstName} {user.lastName}</h2>
                            <p className="text-slate-500 font-medium mb-4">{user.education[0].program}</p>

                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                                    Scholar Candidate
                                </Badge>
                                <Badge variant="outline" className="border-slate-300 text-slate-600">
                                    BARMM Resident
                                </Badge>
                            </div>

                            <div className="space-y-3 text-left bg-slate-50 p-4 rounded-xl text-sm">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                                    <span className="text-slate-700 truncate">{user.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                                    <span className="text-slate-700">{user.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                                    <span className="text-slate-700">{user.address}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Details Content */}
                <div className="md:col-span-2 space-y-6">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-emerald-600" /> Personal Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Full Name</p>
                                <p className="text-slate-900 font-medium">{user.firstName} {user.middleName} {user.lastName}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Date of Birth</p>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-slate-400" />
                                    <p className="text-slate-900">{user.dob}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Gender</p>
                                <p className="text-slate-900">{user.gender}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Civil Status</p>
                                <p className="text-slate-900">Single</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-emerald-600" /> Educational Background
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {user.education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-emerald-100 last:border-0 pb-1">
                                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm"></div>
                                    <h4 className="font-bold text-slate-900">{edu.school}</h4>
                                    <p className="text-emerald-700 font-medium text-sm mb-1">
                                        {edu.program || edu.level}
                                        <span className="text-slate-400 mx-2">•</span>
                                        {edu.year}
                                    </p>
                                    {edu.honors && <Badge variant="secondary" className="mt-1 text-xs">{edu.honors}</Badge>}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
