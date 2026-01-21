import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Ticket,
    Search,
    Filter,
    Clock,
    MessageSquare,
    MessageCircle,
    AlertCircle,
    CheckCircle2,
    ChevronRight,
    MoreVertical,
    User,
    Building2,
    ArrowRight
} from "lucide-react";
import { SUPPORT_TICKETS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">Support & Helpdesk</h1>
                    <p className="text-slate-500">Handle support tickets, user inquiries, and technical issues.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="shadow-none border-slate-200">Help Center</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">New Ticket</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
                        <Ticket className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Open Tickets</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">12</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-amber-50 p-2.5 rounded-xl text-amber-600">
                        <Clock className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">In Progress</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">5</p>
                    </div>
                </Card>
                <Card className="p-4 bg-white border-none shadow-sm flex items-center gap-4">
                    <div className="bg-red-50 p-2.5 rounded-xl text-red-600">
                        <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Escalated</p>
                        <p className="text-lg font-bold text-slate-900 mt-1">2</p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-4">
                    <Card className="p-4 border-none shadow-sm bg-white">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input placeholder="Search tickets by ID, subject, or user..." className="pl-9 bg-slate-50 border-none shadow-none" />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="shadow-none border-slate-200 h-10">
                                    <Filter className="h-3.5 w-3.5 mr-2" /> All Filters
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-3">
                        {SUPPORT_TICKETS.map((ticket) => (
                            <Card key={ticket.id} className="group hover:shadow-md transition-all border-none shadow-sm overflow-hidden bg-white">
                                <div className="flex items-stretch h-full">
                                    <div className={cn(
                                        "w-1.5 shrink-0",
                                        ticket.status === 'Escalated' ? "bg-red-500" :
                                            ticket.status === 'In Progress' ? "bg-amber-400" : "bg-emerald-500"
                                    )}></div>
                                    <div className="flex-1 p-5">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">#{ticket.id}</span>
                                                    <Badge className={cn(
                                                        "text-[10px] font-bold uppercase tracking-widest leading-none px-2",
                                                        ticket.status === 'Escalated' ? "bg-red-50 text-red-700" :
                                                            ticket.status === 'In Progress' ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                                                    )}>
                                                        {ticket.status}
                                                    </Badge>
                                                    <Badge className={cn(
                                                        "text-[10px] font-bold uppercase tracking-widest leading-none px-2",
                                                        ticket.priority === 'High' ? "bg-red-50 text-red-600 border-red-100" : "bg-slate-50 text-slate-600 border-slate-100"
                                                    )} variant="outline">
                                                        {ticket.priority} Priority
                                                    </Badge>
                                                </div>
                                                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{ticket.title}</h3>
                                                <div className="flex items-center gap-4 text-xs">
                                                    <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                                                        <User className="h-3 w-3" /> {ticket.requester}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                                                        <Building2 className="h-3 w-3" /> {ticket.entity}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                                                        <Clock className="h-3 w-3" /> {ticket.timestamp}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <Button size="sm" variant="ghost" className="h-9 px-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-emerald-700 hover:bg-emerald-50" asChild>
                                                    <Link href={`/admin/support/${ticket.id}`} className="font-bold text-xs">
                                                        View Ticket <ArrowRight className="h-3 w-3 ml-2" />
                                                    </Link>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400"><MoreVertical className="h-4 w-4" /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <Card className="border-none shadow-sm bg-white">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-400 leading-none">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 pt-0">
                            <Button variant="outline" className="w-full justify-start text-xs font-bold text-slate-600 h-10 shadow-none border-slate-200">
                                <MessageSquare className="h-4 w-4 mr-3 text-blue-500" /> My Assigned Tickets
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-xs font-bold text-slate-600 h-10 shadow-none border-slate-200">
                                <MessageCircle className="h-4 w-4 mr-3 text-emerald-500" /> Pending Responses
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-xs font-bold text-slate-600 h-10 shadow-none border-slate-200">
                                <AlertCircle className="h-4 w-4 mr-3 text-red-500" /> Escalated Cases
                            </Button>
                            <Button variant="outline" className="w-full justify-start text-xs font-bold text-slate-600 h-10 shadow-none border-slate-200">
                                <CheckCircle2 className="h-4 w-4 mr-3 text-emerald-500" /> Recently Resolved
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-emerald-900 text-white border-none shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <CardHeader className="relative z-10">
                            <CardTitle className="text-sm font-bold text-emerald-300 uppercase tracking-widest">Support Metrics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-10">
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-emerald-100/60 font-medium">Avg. Response Time</span>
                                    <span className="font-bold text-emerald-50">45m</span>
                                </div>
                                <div className="h-1 bg-emerald-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-[85%]"></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-emerald-100/60 font-medium">Resolution Rate</span>
                                    <span className="font-bold text-emerald-50">92%</span>
                                </div>
                                <div className="h-1 bg-emerald-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-400 w-[92%]"></div>
                                </div>
                            </div>
                            <div className="pt-2 text-center">
                                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-4">CSAT Score</p>
                                <div className="text-3xl font-bold text-white tracking-widest">4.8<span className="text-lg text-emerald-300/50">/5.0</span></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
