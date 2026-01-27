"use client"

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea exists or use Input for now, checking imports
import { GROUPS, POSTS } from "@/lib/mock-data";
import {
    Users,
    ShieldCheck,
    MapPin,
    Calendar,
    MessageSquare,
    FileText,
    Settings,
    LogOut,
    Share2,
    Heart,
    MoreHorizontal,
    Image as ImageIcon,
    Paperclip,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function GroupDetailPage() {
    const params = useParams();
    // Handle potential array param (though dynamic route [id] is usually string)
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const group = GROUPS.find(g => g.id === id) || GROUPS[0];

    if (!group) {
        return <div>Group not found</div>;
    }

    return (
        <div className="space-y-6">
            <Link href="/dashboard/community/groups" className="flex items-center text-sm text-slate-500 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Groups
            </Link>

            {/* Group Header / Banner */}
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-emerald-600 to-teal-700 relative">
                    {group.image && (
                        <img
                            src={group.image}
                            alt={group.name}
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-slate-700">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white text-slate-700">
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                        </Button>
                    </div>
                </div>

                <div className="px-6 pb-6 pt-0 relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Group Icon - overlapping banner */}
                        <div className="-mt-12 bg-white p-2 rounded-xl shadow-md z-10">
                            <div className="h-24 w-24 rounded-lg bg-emerald-100 flex items-center justify-center border-2 border-emerald-50">
                                <Users className="h-12 w-12 text-emerald-600" />
                            </div>
                        </div>

                        <div className="flex-1 pt-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h1 className="text-2xl font-bold text-slate-900">{group.name}</h1>
                                        {group.isOfficial && (
                                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                                                <ShieldCheck className="h-3 w-3 mr-1" />
                                                Official
                                            </Badge>
                                        )}
                                        <Badge variant="outline" className="text-slate-600">
                                            {group.category}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">{group.description}</p>

                                    <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                                        <span className="flex items-center">
                                            <Users className="h-4 w-4 mr-1.5" />
                                            {group.members} members
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1.5" />
                                            Created Jan 2024
                                        </span>
                                        {group.category === "Regional" && (
                                            <span className="flex items-center">
                                                <MapPin className="h-4 w-4 mr-1.5" />
                                                Cotabato City
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Leave Group
                                    </Button>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                                        <Users className="h-4 w-4 mr-2" />
                                        Invite
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 border-t bg-slate-50/50">
                    <Tabs defaultValue="discussion" className="w-full">
                        <TabsList className="h-12 bg-transparent p-0 space-x-6">
                            <TabsTrigger
                                value="discussion"
                                className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-transparent px-2 font-medium"
                            >
                                Discussion
                            </TabsTrigger>
                            <TabsTrigger
                                value="members"
                                className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-transparent px-2 font-medium"
                            >
                                Members
                                <Badge variant="secondary" className="ml-2 bg-slate-200 text-slate-700">{group.members}</Badge>
                            </TabsTrigger>
                            <TabsTrigger
                                value="files"
                                className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-transparent px-2 font-medium"
                            >
                                Files
                            </TabsTrigger>
                            <TabsTrigger
                                value="events"
                                className="h-full rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-transparent px-2 font-medium"
                            >
                                Events
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Feed */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Create Post Input */}
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex gap-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/user.jpg" />
                                    <AvatarFallback className="bg-emerald-100 text-emerald-700">JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-500 mb-3 cursor-text hover:bg-slate-100 transition-colors">
                                        Share something with the group...
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm" className="text-slate-600">
                                                <ImageIcon className="h-4 w-4 mr-2 text-emerald-600" />
                                                Photo
                                            </Button>
                                            <Button variant="ghost" size="sm" className="text-slate-600">
                                                <Paperclip className="h-4 w-4 mr-2 text-blue-600" />
                                                File
                                            </Button>
                                            <Button variant="ghost" size="sm" className="text-slate-600">
                                                <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                                                Event
                                            </Button>
                                        </div>
                                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">Post</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pinned Post */}
                    <Card className="border-emerald-100 bg-emerald-50/30">
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <Avatar>
                                        <AvatarImage src="/images/providers/mbhte.png" />
                                        <AvatarFallback>AD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-sm text-slate-900">Admin</h3>
                                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-[10px]">Pinned</Badge>
                                        </div>
                                        <p className="text-xs text-slate-500">2 days ago</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-3 text-sm">
                            <p className="mb-4">
                                All STEM scholars preparing for thesis defense, please check the updated schedule for Feb 2026.
                                Make sure to submit your manuscripts by Jan 30.
                            </p>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-md border border-emerald-100">
                                <div className="h-10 w-10 bg-red-50 rounded flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900">thesis_schedule_feb2026.pdf</p>
                                    <p className="text-xs text-slate-500">PDF · 1.2 MB</p>
                                </div>
                                <Button variant="ghost" size="sm" className="ml-auto text-emerald-600">Download</Button>
                            </div>
                        </CardContent>
                        <div className="px-6 py-3 border-t bg-slate-50/50 flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1"><Heart className="h-4 w-4" /> 67</span>
                                <span className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> 23</span>
                            </div>
                        </div>
                    </Card>


                    {/* Discussion Feed (Reusing mock posts for now) */}
                    {POSTS.map((post) => (
                        <Card key={post.id}>
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-3">
                                        <Avatar>
                                            <AvatarImage src={post.author.avatar} />
                                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-sm text-slate-900">{post.author.name}</h3>
                                                {post.author.badge && (
                                                    <Badge variant="secondary" className="text-[10px]">{post.author.badge}</Badge>
                                                )}
                                            </div>
                                            <p className="text-xs text-slate-500">{post.timestamp}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-3 text-sm">
                                <p className="mb-4 whitespace-pre-line">{post.content}</p>
                                {post.image && (
                                    <div className="rounded-lg overflow-hidden mb-4 border">
                                        <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-96" />
                                    </div>
                                )}
                                {post.link && (
                                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-md border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
                                        <div className="h-10 w-10 bg-emerald-100 rounded flex items-center justify-center">
                                            <FileText className="h-5 w-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-emerald-700">{post.link.text}</p>
                                            <p className="text-xs text-slate-500">Click to view details</p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                            <div className="px-6 py-3 border-t flex items-center justify-between">
                                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50">
                                    <Heart className="h-4 w-4 mr-2" />
                                    {post.likes} Likes
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    {post.comments} Comments
                                </Button>
                                <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600 hover:bg-emerald-50">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="pb-3">
                            <h3 className="font-semibold text-slate-900">About</h3>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <p className="text-slate-600">{group.description}</p>
                            <Separator />
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                                    <span>Official Group</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Users className="h-4 w-4 text-emerald-600" />
                                    <span>{group.members} members</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Calendar className="h-4 w-4 text-emerald-600" />
                                    <span>Created Jan 2024</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3 border-b">
                            <h3 className="font-semibold text-slate-900">Media</h3>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-slate-100 aspect-square rounded-md"></div>
                                <div className="bg-slate-100 aspect-square rounded-md"></div>
                                <div className="bg-slate-100 aspect-square rounded-md"></div>
                                <div className="bg-slate-100 aspect-square rounded-md"></div>
                                <div className="bg-slate-100 aspect-square rounded-md"></div>
                                <div className="bg-emerald-50 aspect-square rounded-md flex items-center justify-center text-xs font-medium text-emerald-700 cursor-pointer hover:bg-emerald-100">
                                    +12
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
