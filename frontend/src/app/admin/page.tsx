import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Users,
    Building2,
    GraduationCap,
    Banknote,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    ArrowRight,
    Activity,
    Cpu,
    Database
} from "lucide-react";
import { TENANTS, AUDIT_LOGS } from "@/lib/mock-data";
import Link from "next/link";

export default function SuperAdminDashboard() {
    const stats = [
        { label: "Total Users", value: "12,450", icon: Users, trend: "+12%", color: "blue" },
        { label: "Active Entities", value: "8", icon: Building2, trend: "+1", color: "emerald" },
        { label: "Active Scholarships", value: "156", icon: GraduationCap, trend: "+24", color: "amber" },
        { label: "Total Disbursed", value: "₱15.2M", icon: Banknote, trend: "+₱2.1M", color: "purple" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-heading text-slate-900">Platform Dashboard</h1>
                <p className="text-slate-500">Global overview, tenant health, and system monitoring.</p>
            </div>

            {/* Platform Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={cn(
                                    "p-2 rounded-lg",
                                    stat.color === 'blue' && "bg-blue-50 text-blue-600",
                                    stat.color === 'emerald' && "bg-emerald-50 text-emerald-600",
                                    stat.color === 'amber' && "bg-amber-50 text-amber-600",
                                    stat.color === 'purple' && "bg-purple-50 text-purple-600",
                                )}>
                                    <stat.icon className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Entity Health Monitor */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-lg">Entity Health Monitor</CardTitle>
                                <CardDescription>Real-time activity and application volume</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/admin/tenants" className="text-emerald-600">View All Tenants</Link>
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {TENANTS.map((tenant) => (
                                <div key={tenant.id} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded border bg-slate-50 flex items-center justify-center p-1">
                                                <img src={tenant.logo} alt={tenant.name} className="max-h-full object-contain" />
                                            </div>
                                            <span className="font-semibold text-slate-700">{tenant.name}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-slate-500">{tenant.appCount.toLocaleString()} apps</span>
                                            <Badge className={cn(
                                                tenant.health === 'Healthy' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                            )}>
                                                {tenant.health === 'Healthy' ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
                                                {tenant.health}
                                            </Badge>
                                        </div>
                                    </div>
                                    <Progress
                                        value={(tenant.appCount / 1500) * 100}
                                        className="h-1.5 bg-slate-100"
                                    />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Recent Activity (Audit) */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Recent Administrative Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {AUDIT_LOGS.map((log) => (
                                    <div key={log.id} className="p-4 flex gap-4 hover:bg-slate-50 transition-colors">
                                        <div className={cn(
                                            "mt-1 p-1.5 rounded-full",
                                            log.level === 'Info' && "bg-blue-50 text-blue-600",
                                            log.level === 'Warning' && "bg-amber-50 text-amber-600",
                                            log.level === 'Critical' && "bg-red-50 text-red-600",
                                        )}>
                                            {log.level === 'Critical' ? <ShieldAlert className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-sm font-bold text-slate-900">{log.action}</h4>
                                                <span className="text-xs text-slate-500">{log.timestamp}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 mt-1">{log.details}</p>
                                            <p className="text-xs text-slate-400 mt-1">By: {log.user}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <div className="p-4 border-t text-center">
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/admin/audit" className="text-slate-500 text-xs uppercase tracking-widest font-bold">View Full Audit Log</Link>
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* System Health */}
                <div className="space-y-6">
                    <Card className="bg-slate-900 text-white border-none">
                        <CardHeader>
                            <CardTitle className="text-emerald-400 text-sm font-bold uppercase tracking-wider">System Health</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-slate-400 mb-1">API Latency</p>
                                    <p className="font-bold text-emerald-400">120ms ✅</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-slate-400 mb-1">Uptime</p>
                                    <p className="font-bold text-emerald-400">99.9% ✅</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-slate-400 mb-1">Error Rate</p>
                                    <p className="font-bold text-emerald-400">0.02% ✅</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <p className="text-xs text-slate-400 mb-1">Queue</p>
                                    <p className="font-bold text-emerald-400">12 jobs ✅</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between text-xs">
                                        <span className="flex items-center gap-1.5 text-slate-300"><Database className="h-3 w-3" /> DB Connections</span>
                                        <span className="text-slate-300">45/100</span>
                                    </div>
                                    <Progress value={45} className="h-1 bg-white/10" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between text-xs">
                                        <span className="flex items-center gap-1.5 text-slate-300"><Cpu className="h-3 w-3" /> CPU Load</span>
                                        <span className="text-slate-300">22%</span>
                                    </div>
                                    <Progress value={22} className="h-1 bg-white/10" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-emerald-100 bg-emerald-50/50">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold text-emerald-900">Platform Quick Tips</CardTitle>
                        </CardHeader>
                        <CardContent className="text-xs text-emerald-800 space-y-3">
                            <p>💡 Use the <strong>Search Bar</strong> to find any user across all ministries.</p>
                            <p>💡 Check <strong>Content Moderation</strong> daily to maintain community standards.</p>
                            <p>💡 Tenant slugs must be unique and lowercase.</p>
                            <Button variant="link" className="p-0 h-auto text-emerald-700 font-bold hover:text-emerald-900">
                                Read Admin docs <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function ShieldAlert({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
    );
}

import { cn } from "@/lib/utils";
