
"use client";

import Link from "next/link";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function ProfileEditPage() {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            // Simulate success or redirect
            alert("Profile updated successfully!");
        }, 2000);
    }

    return (
        <div className="space-y-6 pb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link href="/dashboard/profile">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Edit Profile</h1>
                        <p className="text-slate-600">Update your personal information.</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
                <form onSubmit={onSubmit}>
                    <Card className="border-slate-200 shadow-sm mb-6">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>
                                Please ensure that your details match your government-issued ID.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Juan" disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="middleName">Middle Name</Label>
                                    <Input id="middleName" defaultValue="Santos" disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Dela Cruz" disabled={isLoading} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input id="dob" type="date" defaultValue="2004-06-12" disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="gender">Gender</Label>
                                    <Select defaultValue="male" disabled={isLoading}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="mobile">Mobile Number</Label>
                                    <Input id="mobile" defaultValue="0917 123 4567" disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" defaultValue="juan.delacruz@example.com" disabled={isLoading} className="bg-slate-100" />
                                    <p className="text-xs text-slate-500">Email cannot be changed.</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="address">Permanent Address</Label>
                                <Input id="address" defaultValue="Poblacion 1, Cotabato City, BARMM" disabled={isLoading} />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-200 shadow-sm mb-6">
                        <CardHeader>
                            <CardTitle>Educational Background</CardTitle>
                            <CardDescription>
                                Current or most recent school information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="school">School / University</Label>
                                <Input id="school" defaultValue="Notre Dame University" disabled={isLoading} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="program">Program / Course</Label>
                                    <Input id="program" defaultValue="BS Civil Engineering" disabled={isLoading} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="yearLevel">Year Level</Label>
                                    <Select defaultValue="3rd Year" disabled={isLoading}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select year level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1st Year">1st Year</SelectItem>
                                            <SelectItem value="2nd Year">2nd Year</SelectItem>
                                            <SelectItem value="3rd Year">3rd Year</SelectItem>
                                            <SelectItem value="4th Year">4th Year</SelectItem>
                                            <SelectItem value="5th Year">5th Year</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2 border-t p-6 bg-slate-50">
                            <Link href="/dashboard/profile">
                                <Button variant="ghost" disabled={isLoading} type="button">
                                    Cancel
                                </Button>
                            </Link>
                            <Button disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                <Save className="mr-2 h-4 w-4" /> Save Changes
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>
    );
}
