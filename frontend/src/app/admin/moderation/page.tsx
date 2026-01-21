import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ShieldAlert,
    Flag,
    CheckCircle,
    XCircle,
    AlertTriangle,
    UserX,
    MessageSquare,
    Clock,
    ExternalLink,
    ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ModerationPage() {
    const flaggedContent = [
        {
            id: "mod-1",
            type: "Post",
            content: "This scholarship is a scam! They never pay their beneficiaries on time. Don't believe them!",
            author: "Anonymous Scholar",
            timestamp: "2 hours ago",
            flags: 5,
            reason: "Misinformation",
            priority: "High",
        },
        {
            id: "mod-2",
            type: "Comment",
            content: "Go to this website [spam-link.com] for easy money! Not related to scholarship but great!",
            author: "NewUser88",
            timestamp: "5 hours ago",
            flags: 2,
            reason: "Spam / Promotion",
            priority: "Medium",
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">Content Moderation</h1>
                    <p className="text-slate-500">Review and resolve flagged user-generated content.</p>
                </div>
                <div className="flex gap-2">
                    <Badge className="bg-red-50 text-red-700 px-3 py-1 font-bold">8 Pending Review</Badge>
                    <Badge className="bg-amber-50 text-amber-700 px-3 py-1 font-bold">3 AI Flags</Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-4">
                    <div className="flex border-b border-slate-200">
                        <Button variant="ghost" className="rounded-none border-b-2 border-emerald-600 text-emerald-700 font-bold px-6">Queue (8)</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">AI Flagged (3)</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">Escalated (2)</Button>
                        <Button variant="ghost" className="rounded-none border-transparent text-slate-500 px-6">Resolved</Button>
                    </div>

                    {flaggedContent.map((item) => (
                        <Card key={item.id} className="border-none shadow-sm bg-white overflow-hidden">
                            <div className={cn(
                                "h-1.5 w-full",
                                item.priority === 'High' ? "bg-red-500" : "bg-amber-400"
                            )}></div>
                            <CardHeader className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={cn(
                                            "p-2 rounded-lg",
                                            item.priority === 'High' ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                                        )}>
                                            <Flag className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-bold text-slate-900">Flagged {item.type}</h3>
                                                <Badge className={cn(
                                                    "text-[10px] uppercase font-bold tracking-widest",
                                                    item.priority === 'High' ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                                                )}>
                                                    {item.priority} Priority
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-0.5">Reported for <span className="text-slate-700 font-semibold">{item.reason}</span></p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reports</p>
                                        <p className="text-xl font-bold text-red-600">{item.flags}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 pb-6 pt-0">
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative group">
                                    <p className="text-sm text-slate-700 leading-relaxed italic">"{item.content}"</p>
                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
                                        <div className="flex items-center gap-1.5 font-semibold text-slate-600">
                                            <MessageSquare className="h-3.5 w-3.5" /> {item.author}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                                            <Clock className="h-3.5 w-3.5" /> {item.timestamp}
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-emerald-600 text-[10px] h-7 font-bold">
                                        View Context <ExternalLink className="h-3 w-3 ml-1" />
                                    </Button>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-9">
                                        <CheckCircle className="h-4 w-4 mr-2" /> Approve
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 font-bold h-9">
                                        <XCircle className="h-4 w-4 mr-2" /> Remove Content
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 font-bold h-9">
                                        <AlertTriangle className="h-4 w-4 mr-2" /> Issue Warning
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-700 font-bold h-9 ml-auto">
                                        <UserX className="h-4 w-4 mr-2" /> Suspend User
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Moderation Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                                <h4 className="text-xs font-bold text-blue-900 uppercase mb-2">Respectful Dialogue</h4>
                                <p className="text-xs text-blue-800 leading-relaxed">
                                    Encourage debate but prohibit personal attacks or offensive language directed at scholars or ministries.
                                </p>
                            </div>
                            <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                                <h4 className="text-xs font-bold text-emerald-900 uppercase mb-2">Fact Checking</h4>
                                <p className="text-xs text-emerald-800 leading-relaxed">
                                    Content claiming misinformation about scholarship payouts should be verified with the relevant entity.
                                </p>
                            </div>
                            <Button variant="link" className="text-xs p-0 text-emerald-700 font-bold">View Full Policy <ChevronRight className="h-3 w-3 ml-1" /></Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900 text-white">
                        <CardHeader>
                            <CardTitle className="text-base">AI Auto-Mod Status</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">Keyword Filtering</span>
                                <Badge className="bg-emerald-500 text-white border-none">Active</Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">Sentiment Analysis</span>
                                <Badge className="bg-emerald-500 text-white border-none">Active</Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">Image Recognition</span>
                                <Badge className="bg-slate-700 text-white border-none">Disabled</Badge>
                            </div>
                            <Separator className="bg-white/10" />
                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white font-bold h-9 text-xs">Configure AI Rules</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

