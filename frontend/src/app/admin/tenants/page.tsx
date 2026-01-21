import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Plus,
    Search,
    Building2,
    Users,
    GraduationCap,
    FileText,
    Settings2,
    ExternalLink,
    MoreHorizontal,
    ChevronRight
} from "lucide-react";
import { TENANTS } from "@/lib/mock-data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TenantsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Tenant Management</h1>
                    <p className="text-slate-500">Manage ministries and agencies using the platform.</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                    <Plus className="h-4 w-4 mr-2" /> Add New Tenant
                </Button>
            </div>

            <Card className="p-4 shadow-sm border-none bg-white">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search by entity name, slug, or coordinator..."
                            className="pl-9 bg-slate-50 border-transparent focus:bg-white transition-all shadow-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="border-slate-200 shadow-none">Filters</Button>
                        <Button variant="outline" className="border-slate-200 shadow-none">Export</Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {TENANTS.map((tenant) => (
                    <Card key={tenant.id} className="group relative overflow-hidden border-none shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className={cn(
                            "h-2",
                            tenant.status === 'Active' ? "bg-emerald-500" : "bg-amber-400"
                        )}></div>

                        <CardHeader className="flex flex-row items-start gap-4 p-6">
                            <div className="w-16 h-16 rounded-xl border bg-white flex items-center justify-center p-2 shadow-sm shrink-0">
                                <img src={tenant.logo} alt={tenant.name} className="max-h-full object-contain" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-bold text-slate-900 truncate leading-tight">{tenant.name}</h3>
                                    <Badge className={cn(
                                        "text-[10px] uppercase tracking-wider font-bold",
                                        tenant.status === 'Active' ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                                    )}>
                                        {tenant.status}
                                    </Badge>
                                </div>
                                <p className="text-xs text-slate-500 mt-1 truncate">{tenant.fullName}</p>
                                <code className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded mt-2 inline-block">slug: {tenant.slug}</code>
                            </div>
                        </CardHeader>

                        <CardContent className="px-6 py-0 flex-1">
                            <div className="grid grid-cols-3 gap-4 border-y border-slate-50 py-4 mb-4">
                                <div className="text-center">
                                    <p className="text-lg font-bold text-slate-900">{tenant.staffCount}</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Staff</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-slate-900">{tenant.programCount}</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Programs</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold text-slate-900">{tenant.scholarCount}</p>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">Scholars</p>
                                </div>
                            </div>

                            {tenant.status === 'Onboarding' && (
                                <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 mb-4">
                                    <div className="flex justify-between text-xs font-bold text-amber-900 mb-1">
                                        <span>Finalizing Onboarding</span>
                                        <span>60%</span>
                                    </div>
                                    <Progress value={60} className="h-1 bg-amber-200" />
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="p-4 bg-slate-50/50 mt-auto grid grid-cols-2 gap-2 border-t border-slate-100">
                            <Button variant="outline" size="sm" asChild className="shadow-none text-xs font-bold">
                                <Link href={`/admin/tenants/${tenant.id}`}>
                                    <Settings2 className="h-3.5 w-3.5 mr-2" /> Configure
                                </Link>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs font-bold text-slate-600 hover:text-emerald-700">
                                <ExternalLink className="h-3.5 w-3.5 mr-2" /> Visit Portal
                            </Button>
                        </CardFooter>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400"><MoreHorizontal className="h-4 w-4" /></Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
