"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Share2, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

const POST = {
  id: "post-1",
  author: {
    name: "Maria Santos",
    avatar: "/avatars/maria.jpg",
    role: "AHME Scholar · BS Nursing",
    badge: "Scholar"
  },
  content: "Just passed my Nursing Board Exam! Thank you MBHTE and all the mentors who supported me through this journey. The scholarship program didn't just fund my education—it gave me a community of mentors and fellow scholars who pushed me to excel. Forever grateful! #AHMEScholar #ProudBangsamoro",
  image: "/images/posts/graduation.jpg",
  timestamp: "5 hours ago",
  likes: 128,
  comments: 34
};

const COMMENTS = [
  {
    id: "c1",
    author: {
      name: "Ahmed Hassan",
      avatar: "/avatars/ahmed.jpg"
    },
    content: "Congratulations Maria! You're an inspiration to all of us!",
    time: "4 hours ago",
    likes: 12
  },
  {
    id: "c2",
    author: {
      name: "MBHTE Official",
      avatar: "/images/providers/mbhte.png"
    },
    content: "Congratulations! We're proud of you. Keep inspiring others!",
    time: "3 hours ago",
    likes: 8,
    isOfficial: true
  }
];

export default function PostDetailPage() {
  const params = useParams();

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Back Button */}
      <Link href="/dashboard/community" className="flex items-center text-sm text-slate-500 hover:text-emerald-600">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Feed
      </Link>

      {/* Post Card */}
      <Card className="overflow-hidden">
        <CardContent className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={POST.author.avatar} alt={POST.author.name} />
              <AvatarFallback>{POST.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm">{POST.author.name}</h4>
                {POST.author.badge && (
                  <Badge variant="outline" className="text-[10px] h-5 border-emerald-200 text-emerald-700">
                    {POST.author.badge}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{POST.author.role}</p>
              <p className="text-xs text-slate-400 mt-1">{POST.timestamp}</p>
            </div>
          </div>

          {/* Post Content */}
          <p className="text-sm whitespace-pre-wrap leading-relaxed">{POST.content}</p>

          {/* Image */}
          {POST.image && (
            <div className="rounded-lg overflow-hidden border">
              <img src={POST.image} alt="Post attachment" className="w-full object-cover max-h-[400px]" />
            </div>
          )}
        </CardContent>

        {/* Engagement Buttons */}
        <CardFooter className="p-2 border-t bg-slate-50 flex justify-between">
          <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-red-500 hover:bg-red-50">
            <Heart className="h-4 w-4 mr-2" />
            {POST.likes} Likes
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50">
            <MessageSquare className="h-4 w-4 mr-2" />
            {POST.comments} Comments
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </CardFooter>
      </Card>

      {/* Comments Section */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-slate-900">{POST.comments} Comments</h3>

        {/* Add Comment Box */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/avatars/me.jpg" alt="Me" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <Textarea
                  placeholder="Write a comment..."
                  className="min-h-[80px] resize-none border-0 focus-visible:ring-0 px-0 text-sm bg-transparent"
                />
                <div className="flex justify-end">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments List */}
        <div className="space-y-3">
          {COMMENTS.map((comment) => (
            <Card key={comment.id} className={comment.isOfficial ? "border-emerald-100 bg-emerald-50/50" : ""}>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">{comment.author.name}</p>
                      {comment.isOfficial && (
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 text-[10px] h-5">
                          Official
                        </Badge>
                      )}
                      <span className="text-xs text-slate-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-slate-700 mt-2">{comment.content}</p>
                    <Button variant="ghost" size="sm" className="mt-2 text-slate-500 hover:text-red-500 hover:bg-red-50 text-xs h-8 px-2">
                      <Heart className="h-3 w-3 mr-1" />
                      {comment.likes} Likes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
