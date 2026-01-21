"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ArrowLeft,
    MoreVertical,
    Paperclip,
    Image as ImageIcon,
    Send,
    User,
    Building2,
    Mail,
    Phone,
    Clock,
    History,
    CheckCircle2,
    XCircle,
    AlertTriangle
} from "lucide-react";
import { SUPPORT_TICKETS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TicketDetailPage() {
    const params = useParams();
    const ticket = SUPPORT_TICKETS.find(t => t.id === params.id) || SUPPORT_TICKETS[0];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white border-transparent" asChild>
                        <Link href="/admin/support"><ArrowLeft className="h-5 w-5 text-slate-600" /></Link>
                    </Button>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Ticket #{ticket.id}</span>
                            <Badge className={cn(
                                "text-[10px] uppercase font-bold tracking-widest leading-none px-2",
                                ticket.status === 'Escalated' ? "bg-red-50 text-red-700" :
                                    ticket.status === 'In Progress' ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                            )}>
                                {ticket.status}
                            </Badge>
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 group">{ticket.title}</h1>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="shadow-none border-slate-200 text-xs font-bold h-9">
                        Assign Ticket
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9 border-slate-200">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* Conversations */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
                            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">Conversation</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-8">
                            {/* User Message */}
                            <div className="flex gap-4">
                                <Avatar className="h-10 w-10 shrink-0 border-2 border-white shadow-sm">
                                    <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">{ticket.requester.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-900">{ticket.requester}</span>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{ticket.timestamp}</span>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 leading-relaxed shadow-sm">
                                        {ticket.description || "I'm experiencing an issue with my application upload. Please advise."}
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="p-2 border rounded-lg bg-white flex items-center gap-2 group cursor-pointer hover:border-emerald-200">
                                            <ImageIcon className="h-4 w-4 text-slate-400 group-hover:text-emerald-600" />
                                            <span className="text-[10px] font-bold text-slate-500 group-hover:text-emerald-700">error_screenshot.png</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System Note */}
                            <div className="flex justify-center">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                                    Ticket set to {ticket.status} by System
                                </span>
                            </div>

                            {/* Agent Placeholder Response */}
                            <div className="flex gap-4 flex-row-reverse">
                                <Avatar className="h-10 w-10 shrink-0 border-2 border-white shadow-sm">
                                    <AvatarFallback className="bg-emerald-900 text-white font-bold">SA</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2 text-right">
                                    <div className="flex items-center gap-2 justify-end">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-right">1 hour ago</span>
                                        <span className="font-bold text-slate-900">Support Agent 1</span>
                                    </div>
                                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl rounded-tr-none text-sm text-emerald-900 leading-relaxed text-left shadow-sm inline-block max-w-[90%]">
                                        Hi {ticket.requester.split(' ')[0]}, I'm looking into your document upload issue. Could you please confirm the file format and size you're trying to upload?
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        {/* Reply Editor */}
                        <CardFooter className="p-6 border-t border-slate-50 bg-slate-50/50 flex flex-col gap-4">
                            <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent transition-all">
                                <Textarea
                                    placeholder="Type your response here..."
                                    className="min-h-[120px] border-none focus-visible:ring-0 shadow-none p-4 text-sm"
                                />
                                <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-emerald-600"><Paperclip className="h-4 w-4" /></Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-emerald-600"><ImageIcon className="h-4 w-4" /></Button>
                                        <Button variant="ghost" className="h-8 px-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-emerald-600">Templates ▼</Button>
                                    </div>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9 px-6 text-xs">
                                        <Send className="h-3.5 w-3.5 mr-2" /> Send Response
                                    </Button>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full">
                                <Button variant="outline" className="flex-1 shadow-none h-10 text-xs font-bold border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                                    <CheckCircle2 className="h-4 w-4 mr-2" /> Resolve Ticket
                                </Button>
                                <Button variant="outline" className="flex-1 shadow-none h-10 text-xs font-bold border-red-200 text-red-700 hover:bg-red-50">
                                    <AlertTriangle className="h-4 w-4 mr-2" /> Escalate Further
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                <div className="space-y-6">
                    {/* Requester Info */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
                            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">Requester Info</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6 text-center">
                            <div className="flex flex-col items-center">
                                <Avatar className="h-20 w-20 border-4 border-slate-100 shadow-md mb-3">
                                    <AvatarFallback className="bg-blue-100 text-blue-700 text-2xl font-bold">{ticket.requester.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="font-bold text-lg text-slate-900">{ticket.requester}</h3>
                                <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-[10px] uppercase font-bold tracking-widest mt-1">
                                    {ticket.role}
                                </Badge>
                            </div>

                            <div className="space-y-3 text-left">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                        <Building2 className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 truncate">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Entity</p>
                                        <p className="font-semibold text-slate-700">{ticket.entity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 truncate">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Email</p>
                                        <p className="font-semibold text-slate-700">{ticket.requester.toLowerCase().replace(' ', '.')}@email.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 truncate">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Phone</p>
                                        <p className="font-semibold text-slate-700">+63 917-xxx-xxxx</p>
                                    </div>
                                </div>
                            </div>

                            <Button variant="outline" className="w-full shadow-none text-xs font-bold border-slate-200">
                                View User Profile
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Ticket History */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 p-4">
                            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ticket History</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 space-y-4">
                            <div className="flex gap-3">
                                <History className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-slate-900 leading-tight">Ticket Created</p>
                                    <p className="text-[10px] text-slate-400 font-medium">Jan 21, 8:30 AM</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Clock className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-slate-900 leading-tight">Wait time was 15m</p>
                                    <p className="text-[10px] text-slate-400 font-medium tracking-tight">First response within SLA ✅</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
