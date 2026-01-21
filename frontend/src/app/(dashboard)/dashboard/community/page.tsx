import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { POSTS } from "@/lib/mock-data";
import { Heart, MessageSquare, Share2, Image as ImageIcon, Paperclip, Calendar, Send } from "lucide-react";

export default function CommunityFeedPage() {
    return (
        <div className="space-y-6 max-w-2xl">
            {/* Create Post Widget */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src="/avatars/me.jpg" alt="Me" />
                            <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                            <Textarea
                                placeholder="What's on your mind? Share updates, ask questions, or connect with others..."
                                className="min-h-[100px] resize-none border-0 focus-visible:ring-0 px-0 text-base"
                            />
                            <div className="flex items-center justify-between border-t pt-3">
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                        <ImageIcon className="h-4 w-4 mr-2" />
                                        Photo
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                        <Paperclip className="h-4 w-4 mr-2" />
                                        File
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Event
                                    </Button>
                                </div>
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                    <Send className="h-4 w-4 mr-2" />
                                    Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Feed Posts */}
            <div className="space-y-4">
                {POSTS.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-start gap-4 p-4 pb-2 space-y-0">
                            <Avatar>
                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-semibold text-sm flex items-center gap-2">
                                            {post.author.name}
                                            {post.author.role === "Admin" && (
                                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-[10px] h-5">
                                                    Official
                                                </Badge>
                                            )}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">{post.author.role}</p>
                                    </div>
                                    {post.author.badge && post.author.role !== "Admin" && (
                                        <Badge variant="outline" className="text-[10px] h-5 border-emerald-200 text-emerald-700">
                                            {post.author.badge}
                                        </Badge>
                                    )}
                                    {post.isOfficial && post.author.role === "Admin" && (
                                        <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-[10px] h-5">
                                            Announcement
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-xs text-slate-400 mt-1">{post.timestamp}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <p className="text-sm whitespace-pre-wrap mb-4">{post.content}</p>

                            {post.image && (
                                <div className="rounded-lg overflow-hidden border mb-4">
                                    <img src={post.image} alt="Post attachment" className="w-full object-cover max-h-[400px]" />
                                </div>
                            )}

                            {post.link && (
                                <div className="mb-4">
                                    <Button variant="outline" className="w-full justify-start text-emerald-600 border-emerald-200 bg-emerald-50 hover:bg-emerald-100">
                                        <FileText className="h-4 w-4 mr-2" />
                                        {post.link.text}
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="p-2 border-t bg-slate-50 flex justify-between">
                            <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-red-500 hover:bg-red-50">
                                <Heart className="h-4 w-4 mr-2" />
                                {post.likes} Likes
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                {post.comments} Comments
                            </Button>
                            <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function FileText({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
    );
}
