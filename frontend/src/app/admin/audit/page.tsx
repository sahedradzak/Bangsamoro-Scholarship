import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    ScrollText,
    Search,
    Filter,
    Download,
    RefreshCw,
    Info,
    AlertTriangle,
    Flame,
    User,
    Monitor,
    Calendar,
    Undo2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { AUDIT_LOGS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function AuditLogsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">Audit Logs</h1>
                    <p className="text-slate-500">Track all administrative actions and system events for compliance.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" className="shadow-none flex-1 sm:flex-none">
                        <RefreshCw className="h-4 w-4 mr-2" /> Refresh
                    </Button>
                    <Button variant="outline" className="shadow-none border-emerald-200 text-emerald-700 font-bold flex-1 sm:flex-none">
                        <Download className="h-4 w-4 mr-2" /> Export Logs
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-slate-100 p-2.5 rounded-xl">
                        <ScrollText className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Events</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">12,450</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl">
                        <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Informational</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">11,890</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-amber-50 p-2.5 rounded-xl">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Warnings</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">456</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-red-50 p-2.5 rounded-xl">
                        <Flame className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Critical</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">24</p>
                    </div>
                </Card>
            </div>

            <Card className="border-none shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-4 border-b border-slate-50 flex flex-col md:flex-row gap-4 justify-between bg-white">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search logs by keyword, user, or entity..." className="pl-9 bg-slate-50 border-none shadow-none" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Calendar className="h-3.5 w-3.5 mr-2" /> Last 30 Days
                        </Button>
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Filter className="h-3.5 w-3.5 mr-2" /> Severity
                        </Button>
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <User className="h-3.5 w-3.5 mr-2" /> All Users
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Level</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Action</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">User</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Details</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Timestamp</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {AUDIT_LOGS.map((log) => (
                                    <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="p-4">
                                            <Badge className={cn(
                                                "text-[10px] font-bold uppercase tracking-wider",
                                                log.level === 'Info' && "bg-blue-50 text-blue-700",
                                                log.level === 'Warning' && "bg-amber-50 text-amber-700",
                                                log.level === 'Critical' && "bg-red-50 text-red-700",
                                            )}>
                                                {log.level}
                                            </Badge>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm font-bold text-slate-900 leading-none">{log.action}</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center">
                                                    <User className="h-3 w-3 text-slate-400" />
                                                </div>
                                                <span className="text-sm text-slate-600 truncate max-w-[150px]">{log.user}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Monitor className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                                <span className="text-xs text-slate-500 line-clamp-1">{log.details}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <span className="text-xs text-slate-500 font-medium tracking-tight">{log.timestamp}</span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-slate-500 hover:text-emerald-700">View</Button>
                                                {log.level === 'Critical' && (
                                                    <Button variant="ghost" size="sm" className="h-8 text-xs font-bold text-amber-600 hover:text-amber-700">
                                                        <Undo2 className="h-3 w-3 mr-1" /> Revert
                                                    </Button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <CardFooter className="p-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <p>Showing <strong>1-3</strong> of 12,450 events</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 shadow-none disabled:opacity-50" disabled><ChevronLeft className="h-4 w-4" /></Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none border-emerald-200 text-emerald-700">1</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">2</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">3</Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 shadow-none"><ChevronRight className="h-4 w-4" /></Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
