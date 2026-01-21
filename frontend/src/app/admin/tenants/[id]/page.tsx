"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeft,
    Save,
    Building2,
    Users,
    GraduationCap,
    Palette,
    Settings2,
    ScrollText,
    Mail,
    CheckCircle2,
    Clock,
    MoreVertical,
    Trash2,
    ShieldAlert,
    Rocket
} from "lucide-react";
import { TENANTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TenantDetailPage() {
    const params = useParams();
    const tenant = TENANTS.find(t => t.id === params.id) || TENANTS[0];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white border-transparent" asChild>
                        <Link href="/admin/tenants"><ArrowLeft className="h-5 w-5 text-slate-600" /></Link>
                    </Button>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Tenant Configuration</span>
                            <Badge className={cn(
                                "text-[10px] uppercase font-bold tracking-widest leading-none px-2",
                                tenant.status === 'Active' ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                            )}>
                                {tenant.status}
                            </Badge>
                        </div>
                        <h1 className="text-xl font-bold text-slate-900">{tenant.name}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="shadow-none border-slate-200 text-xs font-bold h-9">
                        Reset Changes
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9 px-6 text-xs">
                        <Save className="h-3.5 w-3.5 mr-2" /> Save Configuration
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation for Settings */}
                <div className="space-y-1">
                    <Button variant="secondary" className="w-full justify-start bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none shadow-none font-bold text-xs">
                        <Building2 className="h-4 w-4 mr-3" /> Overview
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-white border-transparent font-medium text-xs">
                        <Settings2 className="h-4 w-4 mr-3" /> General Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-white border-transparent font-medium text-xs">
                        <Users className="h-4 w-4 mr-3" /> Staff Management
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-white border-transparent font-medium text-xs">
                        <GraduationCap className="h-4 w-4 mr-3" /> Scholarship Programs
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-white border-transparent font-medium text-xs">
                        <Palette className="h-4 w-4 mr-3" /> Custom Branding
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-slate-600 hover:bg-white border-transparent font-medium text-xs">
                        <ScrollText className="h-4 w-4 mr-3" /> Audit Log
                    </Button>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    {/* Onboarding Progress */}
                    {tenant.status === 'Onboarding' && (
                        <Card className="border-none shadow-sm bg-gradient-to-br from-emerald-900 to-emerald-950 text-white overflow-hidden relative">
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                            <CardHeader className="relative z-10">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Rocket className="h-5 w-5 text-emerald-400" /> Onboarding Progress
                                </CardTitle>
                                <CardDescription className="text-emerald-100/60">Help {tenant.name} finalize their portal setup.</CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between font-bold text-sm">
                                        <span className="text-emerald-50">Setup Completion</span>
                                        <span className="text-emerald-400">60%</span>
                                    </div>
                                    <Progress value={60} className="h-1.5 bg-white/10" />
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Basic Profile
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Admin Created
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-white/10 border border-emerald-500/50 rounded-full text-emerald-50 animate-pulse">
                                        <Clock className="h-3.5 w-3.5 text-emerald-400" /> First Program
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/30">
                                        <Clock className="h-3.5 w-3.5" /> Portal Domain
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="relative z-10 bg-black/20 p-4 border-t border-white/5 flex justify-between items-center">
                                <Button variant="link" className="text-white text-xs p-0 font-bold hover:text-emerald-400">View Onboarding Checklist</Button>
                                <Button className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold h-8 text-xs">Continue Setup</Button>
                            </CardFooter>
                        </Card>
                    )}

                    {/* Entity Branding & Config */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="p-6">
                            <CardTitle className="text-lg">General Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 border-t border-slate-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
                                <div className="space-y-4">
                                    <div className="grid gap-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Entity Name</label>
                                        <Input defaultValue={tenant.fullName} className="bg-slate-50 border-none shadow-none focus-visible:bg-white transition-all" />
                                    </div>
                                    <div className="grid gap-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Abbreviation</label>
                                        <Input defaultValue={tenant.name} className="bg-slate-50 border-none shadow-none" />
                                    </div>
                                    <div className="grid gap-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Custom Slug / URL</label>
                                        <div className="flex items-center">
                                            <span className="bg-slate-100 px-3 py-2 rounded-l-md border border-r-0 text-slate-400 text-sm font-medium">morotech.ph/</span>
                                            <Input defaultValue={tenant.slug} className="rounded-l-none bg-slate-50 border-none shadow-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/30 group">
                                        <div className="w-24 h-24 rounded-xl border bg-white flex items-center justify-center p-4 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                            <img src={tenant.logo} alt={tenant.name} className="max-h-full object-contain" />
                                        </div>
                                        <Button variant="outline" size="sm" className="shadow-none text-xs font-bold border-slate-200">Change Logo</Button>
                                        <p className="text-[10px] text-slate-400 mt-2">Recommended: PNG, 400x400px</p>
                                    </div>
                                </div>
                            </div>

                            <Separator className="bg-slate-50" />

                            <div className="p-6 space-y-4">
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Administrative Actions</h4>
                                <div className="flex flex-wrap gap-2">
                                    <Button variant="outline" className="border-slate-200 text-xs font-bold shadow-none h-10">
                                        <Mail className="h-4 w-4 mr-2 text-blue-500" /> Resend Welcome Email
                                    </Button>
                                    <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50 text-xs font-bold shadow-none h-10">
                                        <ShieldAlert className="h-4 w-4 mr-2" /> Suspend Entity
                                    </Button>
                                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold shadow-none h-10">
                                        <Trash2 className="h-4 w-4 mr-2" /> Delete Tenant
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats Summary */}
                    <div className="grid grid-cols-3 gap-6">
                        <Card className="bg-white border-none shadow-sm p-4 text-center">
                            <p className="text-2xl font-black text-slate-900">{tenant.scholarCount}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Scholars</p>
                        </Card>
                        <Card className="bg-white border-none shadow-sm p-4 text-center">
                            <p className="text-2xl font-black text-slate-900">{tenant.programCount}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Programs</p>
                        </Card>
                        <Card className="bg-white border-none shadow-sm p-4 text-center">
                            <p className="text-2xl font-black text-emerald-700">{tenant.disbursed}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Spend</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
