"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    Mail,
    ShieldCheck,
    Building2,
    Clock,
    History,
    Lock,
    LogOut,
    UserX,
    UserMinus,
    Edit2,
    Phone,
    MapPin,
    Calendar,
    Key,
    CheckCircle2
} from "lucide-react";
import { PLATFORM_USERS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserDetailPage() {
    const params = useParams();
    const user = PLATFORM_USERS.find(u => u.id === params.id) || PLATFORM_USERS[1];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white border-transparent" asChild>
                        <Link href="/admin/users"><ArrowLeft className="h-5 w-5 text-slate-600" /></Link>
                    </Button>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">User Detail</span>
                            <Badge className="bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest leading-none px-2">{user.status}</Badge>
                        </div>
                        <h1 className="text-xl font-bold text-slate-900">{user.name}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="shadow-none border-slate-200 text-xs font-bold h-9 bg-white">
                        <Edit2 className="h-3.5 w-3.5 mr-2" /> Edit Account
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                    {/* Profile Summary */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden text-center">
                        <div className="h-24 bg-gradient-to-br from-emerald-800 to-emerald-950"></div>
                        <CardContent className="p-6 pt-0 -mt-12 flex flex-col items-center">
                            <Avatar className="h-24 w-24 border-4 border-white shadow-xl mb-4">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback className="bg-emerald-100 text-emerald-800 text-2xl font-bold">{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-bold text-xl text-slate-900 leading-tight">{user.name}</h3>
                            <p className="text-sm font-medium text-slate-400 mt-1">{user.email}</p>
                            <Badge className={cn(
                                "mt-4 px-3 py-1 font-bold text-[10px] uppercase tracking-widest",
                                user.role === 'Super Admin' ? "bg-red-50 text-red-700" : "bg-blue-50 text-blue-700"
                            )}>
                                {user.role}
                            </Badge>
                        </CardContent>
                        <Separator className="bg-slate-50" />
                        <CardFooter className="p-4 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-lg font-bold text-slate-900 leading-none">47</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sessions</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold text-slate-900 leading-none">Jan 2026</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Joined</p>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* Contact Info */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
                            <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-slate-400 mt-0.5" />
                                <div className="text-sm">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Email</p>
                                    <p className="text-slate-700 font-semibold truncate">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-slate-400 mt-0.5" />
                                <div className="text-sm">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Phone</p>
                                    <p className="text-slate-700 font-semibold">+63 917-xxx-xxxx</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-slate-400 mt-0.5" />
                                <div className="text-sm">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Location</p>
                                    <p className="text-slate-700 font-semibold truncate">Cotabato City, BARMM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    {/* Status Tabs Placeholder */}
                    <div className="flex border-b border-slate-200">
                        <Button variant="ghost" className="rounded-none border-b-2 border-emerald-600 text-emerald-700 font-bold px-6">Account Profile</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">Tenants & Roles</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">Activity Log</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">Security Settings</Button>
                    </div>

                    {/* Account Security Info */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="p-6">
                            <CardTitle className="text-lg">Account Security Status</CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-4">
                                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-900 leading-none">Email Verified</p>
                                        <p className="text-[10px] text-emerald-700 font-medium mt-1">Verified on Jan 5, 2026</p>
                                    </div>
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                                </div>
                                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-4">
                                    <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                                        <Key className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-900 leading-none">2FA Enabled</p>
                                        <p className="text-[10px] text-emerald-700 font-medium mt-1">Protected via SMS</p>
                                    </div>
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 ml-auto" />
                                </div>
                            </div>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="flex items-center gap-2 text-slate-500"><Clock className="h-4 w-4" /> Account Created</span>
                                    <span className="font-bold text-slate-900">January 3, 2026</span>
                                </div>
                                <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="flex items-center gap-2 text-slate-500"><History className="h-4 w-4" /> Last Login</span>
                                    <span className="font-bold text-slate-900">January 21, 2026, 10:30 AM</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tenant Memberships */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="p-6">
                            <CardTitle className="text-lg">Entity Memberships</CardTitle>
                            <CardDescription>Roles and permissions assigned within scholarship ministries.</CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <div className="p-4 border border-slate-100 rounded-xl flex items-center justify-between group hover:bg-slate-50 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg border flex items-center justify-center p-2 shadow-sm">
                                        <Building2 className="h-6 w-6 text-slate-400 group-hover:text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 line-clamp-1">{user.tenant} Ministry</h4>
                                        <p className="text-xs font-medium text-slate-500">Member since January 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest">{user.role}</Badge>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400"><History className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Administrative Actions */}
                    <Card className="border-none shadow-sm bg-red-50/50 overflow-hidden border border-red-100">
                        <CardHeader className="p-6">
                            <CardTitle className="text-lg text-red-900">Critical Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6 pt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Button variant="outline" className="justify-start border-red-200 text-red-700 hover:bg-red-50 shadow-none h-11 font-bold text-xs">
                                    <Lock className="h-4 w-4 mr-3" /> Reset User Password
                                </Button>
                                <Button variant="outline" className="justify-start border-red-200 text-red-700 hover:bg-red-50 shadow-none h-11 font-bold text-xs">
                                    <LogOut className="h-4 w-4 mr-3" /> Force Global Logout
                                </Button>
                                <Button variant="outline" className="justify-start border-red-200 text-red-700 hover:bg-red-50 shadow-none h-11 font-bold text-xs">
                                    <UserX className="h-4 w-4 mr-3" /> Suspend User Account
                                </Button>
                                <Button variant="outline" className="justify-start border-red-200 text-red-700 hover:bg-red-50 shadow-none h-11 font-bold text-xs">
                                    <UserMinus className="h-4 w-4 mr-3" /> Permanently Delete
                                </Button>
                            </div>
                            <p className="text-[10px] text-red-600/60 font-medium mt-4 text-center uppercase tracking-widest">Administrative access required for these actions</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
