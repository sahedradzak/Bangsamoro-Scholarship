"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle2, FileText, Info, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// Mock Notifications Data
const NOTIFICATIONS = [
    {
        id: 1,
        type: "application",
        title: "Application Update",
        message: "Your AHME Scholarship application has moved to the Evaluation stage.",
        time: "2 hours ago",
        read: false,
        link: "/dashboard/applications/ahme-2026",
        priority: "high",
    },
    {
        id: 2,
        type: "message",
        title: "New Message",
        message: "You have a new message from Maria Santos regarding study group.",
        time: "5 hours ago",
        read: false,
        link: "/dashboard/messages",
        priority: "normal",
    },
    {
        id: 3,
        type: "system",
        title: "Action Required",
        message: "Your BASE-Merit scholarship has been approved! Please submit enrollment documents.",
        time: "1 day ago",
        read: true,
        link: "/dashboard/applications/base-merit",
        priority: "urgent",
    },
    {
        id: 4,
        type: "system",
        title: "Deadline Reminder",
        message: "MOH Medical Allied Scholarship deadline is approaching (April 1, 2026).",
        time: "3 days ago",
        read: true,
        link: "/scholarships/moh-medical",
        priority: "normal",
    },
    {
        id: 5,
        type: "system",
        title: "System Announcement",
        message: "Scheduled maintenance on Jan 22, 2026 from 2-4 AM.",
        time: "5 days ago",
        read: true,
        link: "#",
        priority: "low",
    },
];

export default function NotificationsPage() {
    const [filter, setFilter] = useState("all");

    const getIcon = (type: string) => {
        switch (type) {
            case "application":
                return <FileText className="h-5 w-5 text-blue-500" />;
            case "message":
                return <MessageSquare className="h-5 w-5 text-purple-500" />;
            case "system":
                return <Info className="h-5 w-5 text-amber-500" />;
            default:
                return <Bell className="h-5 w-5 text-gray-500" />;
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "urgent": return "bg-red-50 border-red-200";
            case "high": return "bg-blue-50 border-blue-200";
            default: return "bg-white border-gray-100 hover:bg-gray-50";
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Notifications</h1>
                    <p className="text-gray-500">Stay updated with your applications and community.</p>
                </div>
                <Button variant="outline" className="gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Mark all as read
                </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full sm:w-auto grid grid-cols-4 sm:flex gap-2 bg-transparent p-0">
                    <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full px-6 border bg-white"
                    >
                        All
                    </TabsTrigger>
                    <TabsTrigger
                        value="unread"
                        className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full px-6 border bg-white"
                    >
                        Unread
                        <Badge variant="secondary" className="ml-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">2</Badge>
                    </TabsTrigger>
                    <TabsTrigger
                        value="applications"
                        className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full px-6 border bg-white"
                    >
                        Applications
                    </TabsTrigger>
                    <TabsTrigger
                        value="system"
                        className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-full px-6 border bg-white"
                    >
                        System
                    </TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-4">
                    {NOTIFICATIONS.map((notification, index) => (
                        <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className={`transition-colors border shadow-sm ${getPriorityColor(notification.priority)}`}>
                                <CardContent className="p-4 flex items-start gap-4">
                                    <div className={`mt-1 p-2 rounded-full bg-white border shadow-sm`}>
                                        {getIcon(notification.type)}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <p className={`font-medium ${!notification.read ? "text-gray-900" : "text-gray-600"}`}>
                                                {notification.title}
                                                {!notification.read && (
                                                    <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-red-500" />
                                                )}
                                            </p>
                                            <span className="text-xs text-gray-400 whitespace-nowrap">{notification.time}</span>
                                        </div>
                                        <p className={`text-sm ${!notification.read ? "text-gray-800" : "text-gray-500"}`}>
                                            {notification.message}
                                        </p>
                                        {notification.link && notification.link !== "#" && (
                                            <Button variant="link" className="p-0 h-auto text-emerald-600 text-xs font-medium">
                                                View Details →
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Tabs>
        </div>
    );
}
