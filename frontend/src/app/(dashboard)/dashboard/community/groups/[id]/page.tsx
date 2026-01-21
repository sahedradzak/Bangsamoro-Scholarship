"use client"

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { GROUPS } from "@/lib/mock-data";
import { ArrowLeft, ShieldCheck, Users, Settings, LogOut, Send, Image as ImageIcon, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function GroupDetailPage() {
    const params = useParams();
    const group = GROUPS.find((g) => g.id === params.id) || GROUPS[0];

    if (!group) {
        return <div>Group not found</div>;
    }

    return (
        <div className="space-y-6">
            <Link href="/dashboard/community/groups" className="flex items-center text-sm text-slate-500 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Groups
            </Link>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Info */}
                <aside className="w-full lg:w-80 space-y-6">
                    <Card>
                        <div className="h-24 bg-gradient-to-r from-emerald-600 to-teal-700 relative">
                            {group.image && (
                                <img src={group.image} alt={group.name} className="w-full h-full object-cover opacity-50" />
                            )}
                        </div>
                        <CardContent className="p-6 pt-0 relative">
                            <div className="absolute -top-10 left-6 h-20 w-20 bg-white p-1 rounded-xl shadow-md">
                                <div className="w-full h-full bg-emerald-100 rounded-lg flex items-center justify-center text-3xl">
                                    {group.id === "group-1" ? "🔬" : group.category === "Regional" ? "📍" : "👥"}
                                </div>
                            </div>
                            <div className="mt-12">
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    {group.name}
                                    {group.isOfficial && <ShieldCheck className="h-5 w-5 text-emerald-600" />}
                                </h2>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">{group.description}</p>

                                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                                    <span className="flex items-center">
                                        <Users className="h-4 w-4 mr-1.5 opacity-70" />
                                        {group.members} members
                                    </span>
                                    <Badge variant="secondary">{group.category}</Badge>
                                </div>

                                <div className="space-y-2">
                                    <Button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200">
                                        Invite Members
                                    </Button>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button variant="outline" size="sm">
                                            <Settings className="h-4 w-4 mr-2" />
                                            Settings
                                        </Button>
                                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Leave
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4">
                            <h4 className="font-semibold text-sm mb-3">Group Admins</h4>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">Admin User</p>
                                    <p className="text-xs text-muted-foreground">Group Owner</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </aside>

                {/* Main Feed */}
                <div className="flex-1 space-y-6">
                    <Tabs defaultValue="discussion">
                        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                            <TabsTrigger value="discussion" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none px-6 py-3">Discussion</TabsTrigger>
                            <TabsTrigger value="members" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none px-6 py-3">Members</TabsTrigger>
                            <TabsTrigger value="files" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:shadow-none px-6 py-3">Files</TabsTrigger>
                        </TabsList>

                        <TabsContent value="discussion" className="space-y-6 mt-6">
                            {/* Create Post */}
                            <Card>
                                <CardContent className="p-4 flex gap-4">
                                    <Avatar>
                                        <AvatarFallback>ME</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <Textarea placeholder="Share something with the group..." className="min-h-[80px] mb-3 resize-none border-0 bg-slate-50 focus-visible:ring-0" />
                                        <div className="flex justify-between items-center">
                                            <Button variant="ghost" size="sm" className="text-slate-500">
                                                <ImageIcon className="h-4 w-4 mr-2" />
                                                Photo/Video
                                            </Button>
                                            <Button size="sm" className="bg-emerald-600">Post</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Pinned Post */}
                            <Card className="border-emerald-100 bg-emerald-50/50">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-2">
                                        <ShieldCheck className="h-3 w-3" />
                                        PINNED POST
                                    </div>
                                    <div className="flex gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className="bg-emerald-600 text-white">AD</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-semibold">Group Admin</p>
                                                <span className="text-xs text-slate-500">2 days ago</span>
                                            </div>
                                            <p className="text-sm mt-1">
                                                Welcome to the group! Please review the community guidelines before posting.
                                                We are here to support each other's academic journey.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Member Post */}
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-3">
                                            <Avatar>
                                                <AvatarImage src="/avatars/maria.jpg" />
                                                <AvatarFallback>MS</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm font-semibold">Maria Santos</p>
                                                    <span className="text-xs text-slate-500">5 hours ago</span>
                                                </div>
                                                <p className="text-sm mt-2">
                                                    Anyone have resources on qualitative research methods? Need help with my thesis.
                                                </p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="members" className="mt-6">
                            <p className="text-center text-muted-foreground py-8">Member list loading...</p>
                        </TabsContent>

                        <TabsContent value="files" className="mt-6">
                            <p className="text-center text-muted-foreground py-8">No files shared yet.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
