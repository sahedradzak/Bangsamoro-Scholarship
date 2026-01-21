
"use client";

import { Mail, Search, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function MessagesPage() {
    // Mock conversations
    const conversations = [
        {
            id: 1,
            sender: "Scholarship Committee",
            subject: "Application #BSP-2026-00123 Update",
            preview: "We have reviewed your application and require additional documents...",
            time: "10:30 AM",
            unread: true,
            avatar: "/avatars/admin.jpg",
            initials: "SC",
            messages: [
                { id: 1, sender: "Scholarship Committee", text: "Dear Juan, We have reviewed your application for the AHME Scholarship. However, the scanned copy of your Birth Certificate is slightly blurry. Please upload a clearer copy.", time: "10:30 AM", isMe: false },
                { id: 2, sender: "Me", text: "Thank you for the update. I will upload a new copy immediately.", time: "10:45 AM", isMe: true }
            ]
        },
        {
            id: 2,
            sender: "System Notification",
            subject: "Welcome to Bangsamoro Scholarship Portal",
            preview: "Welcome to the new Bangsamoro Scholarship Portal! Here are some tips to get started...",
            time: "Jan 12",
            unread: false,
            avatar: null,
            initials: "SN",
            messages: [
                { id: 1, sender: "System Notification", text: "Welcome to the new Bangsamoro Scholarship Portal! We are excited to have you here. Please complete your profile to start applying.", time: "Jan 12, 9:00 AM", isMe: false }
            ]
        },
        {
            id: 3,
            sender: "Ministry of Basic, Higher and Technical Education",
            subject: "Inquiry Response",
            preview: "Regarding your question about eligibility requirements...",
            time: "Jan 10",
            unread: false,
            avatar: "/avatars/mbhte.jpg",
            initials: "MB",
            messages: []
        }
    ];

    const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    const [messageInput, setMessageInput] = useState("");

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
            {/* Sidebar / List */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                    </Button>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search messages..." className="pl-9" />
                </div>

                <Card className="flex-1 overflow-hidden border-slate-200 shadow-sm flex flex-col">
                    <ScrollArea className="flex-1">
                        <div className="divide-y divide-slate-100">
                            {conversations.map((conv) => (
                                <div
                                    key={conv.id}
                                    className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors ${selectedConversation.id === conv.id ? 'bg-emerald-50/50' : ''}`}
                                    onClick={() => setSelectedConversation(conv)}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={conv.avatar || ""} />
                                                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">{conv.initials}</AvatarFallback>
                                            </Avatar>
                                            <span className={`text-sm font-medium ${conv.unread ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>
                                                {conv.sender}
                                            </span>
                                        </div>
                                        <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{conv.time}</span>
                                    </div>
                                    <div className="pl-12">
                                        <h4 className={`text-sm mb-1 ${conv.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-800'}`}>
                                            {conv.subject}
                                        </h4>
                                        <p className="text-xs text-slate-500 line-clamp-1">
                                            {conv.preview}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </Card>
            </div>

            {/* Message Content */}
            <div className="hidden md:flex flex-1 flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={selectedConversation.avatar || ""} />
                            <AvatarFallback className="bg-emerald-100 text-emerald-700">{selectedConversation.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-bold text-slate-900">{selectedConversation.subject}</h3>
                            <p className="text-xs text-slate-500">{selectedConversation.sender}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/* Actions */}
                    </div>
                </div>

                {/* Thread */}
                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-6">
                        {selectedConversation.messages.map((msg) => (
                            <div key={msg.id} className={`flex gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
                                {!msg.isMe && (
                                    <Avatar className="h-8 w-8 mt-1">
                                        <AvatarImage src={selectedConversation.avatar || ""} />
                                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">{selectedConversation.initials}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`max-w-[75%] space-y-1 ${msg.isMe ? 'items-end' : 'items-start'}`}>
                                    <div className={`p-3 rounded-2xl text-sm ${msg.isMe ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                    <p className={`text-[10px] text-slate-400 ${msg.isMe ? 'text-right' : 'text-left'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-4 border-t bg-slate-50/30">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-emerald-600">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                        <Input
                            placeholder="Type your message..."
                            className="flex-1 border-slate-200"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                        />
                        <Button size="icon" className="bg-emerald-600 hover:bg-emerald-700">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
