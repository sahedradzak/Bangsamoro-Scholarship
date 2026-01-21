import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    BarChart3,
    TrendingUp,
    ArrowUpRight,
    Download,
    Calendar,
    Users,
    Building2,
    GraduationCap,
    Banknote,
    Search,
    Filter,
    AlertCircle
} from "lucide-react";
import { TENANTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">Platform Analytics</h1>
                    <p className="text-slate-500">Platform-wide growth, impact metrics, and entity performance.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="shadow-none border-slate-200">
                        <Calendar className="h-4 w-4 mr-2 text-slate-400" /> Jan 1 - Jan 22, 2026
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                        <Download className="h-4 w-4 mr-2" /> Export Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-5 bg-white border-none shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                            <Users className="h-5 w-5" />
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[10px] uppercase tracking-widest">+11%</Badge>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Users</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">12,450</p>
                    </div>
                </Card>
                <Card className="p-5 bg-white border-none shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[10px] uppercase tracking-widest">+1</Badge>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Entities</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
                    </div>
                </Card>
                <Card className="p-5 bg-white border-none shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="bg-amber-50 p-2.5 rounded-xl text-amber-600">
                            <GraduationCap className="h-5 w-5" />
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[10px] uppercase tracking-widest">+24</Badge>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scholarships</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">156</p>
                    </div>
                </Card>
                <Card className="p-5 bg-white border-none shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="bg-purple-50 p-2.5 rounded-xl text-purple-600">
                            <Banknote className="h-5 w-5" />
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[10px] uppercase tracking-widest">+15%</Badge>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Disbursed</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">₱15.2M</p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* User Growth Chart Placeholder */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-lg">User Growth</CardTitle>
                                <CardDescription>Consolidated user registration across all entities</CardDescription>
                            </div>
                            <div className="flex gap-1.5">
                                <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest">Week</Button>
                                <Button variant="secondary" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 border-none shadow-none">Month</Button>
                                <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest">Year</Button>
                            </div>
                        </CardHeader>
                        <CardContent className="h-64 flex items-end justify-between px-6 pb-6 gap-2 pt-10">
                            {/* Mock Chart Bar Visualization */}
                            {[35, 42, 38, 55, 62, 48, 70, 85, 92, 78, 95, 110].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center group relative">
                                    <div
                                        className="w-full bg-emerald-100 group-hover:bg-emerald-500 transition-all rounded-t-sm"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                    <span className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-tighter">
                                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                    </span>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        {h * 100} users
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Entity Comparison Table */}
                    <Card className="border-none shadow-sm bg-white">
                        <CardHeader>
                            <CardTitle className="text-lg">Entity Performance Comparison</CardTitle>
                            <CardDescription>Relative sizing and academic performance across ministries</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Entity</th>
                                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Apps</th>
                                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Scholars</th>
                                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Disbursed</th>
                                            <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Avg GWA</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {TENANTS.filter(t => t.scholarCount > 0).map((tenant) => (
                                            <tr key={tenant.id} className="hover:bg-slate-50 transition-colors">
                                                <td className="p-4 font-bold text-sm text-slate-900">{tenant.name}</td>
                                                <td className="p-4 text-sm text-slate-600">{tenant.appCount.toLocaleString()}</td>
                                                <td className="p-4 text-sm text-slate-600">{tenant.scholarCount.toLocaleString()}</td>
                                                <td className="p-4 text-sm text-slate-600 font-medium text-emerald-700">{tenant.disbursed}</td>
                                                <td className="p-4">
                                                    <Badge className="bg-emerald-50 text-emerald-700 border-none font-bold text-[10px]">1.65</Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-emerald-900 text-white border-none shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Platform Impact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center py-4 border-b border-white/10">
                                <p className="text-4xl font-bold tracking-tight">85%</p>
                                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest mt-2">Retention Rate</p>
                            </div>
                            <div className="text-center py-4 border-b border-white/10">
                                <p className="text-4xl font-bold tracking-tight">₱1.2B</p>
                                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest mt-2">Planned Budget</p>
                            </div>
                            <div className="text-center py-4">
                                <p className="text-4xl font-bold tracking-tight">12.4k</p>
                                <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest mt-2">Families Impacted</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-white">
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Insights</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                    <TrendingUp className="h-4 w-4 text-blue-600" />
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>STEM</strong> related scholarships saw a <span className="text-emerald-600 font-bold">+45%</span> increase in applications this quarter.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                                    <AlertCircle className="h-4 w-4 text-amber-600" />
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>MOH-BARMM</strong> profile completion is lagging behind by <span className="text-amber-600 font-bold">12%</span>.
                                </p>
                            </div>
                            <Button variant="link" className="p-0 h-auto text-[10px] font-bold text-emerald-700 uppercase tracking-widest hover:text-emerald-900">
                                View Detailed Insights <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

