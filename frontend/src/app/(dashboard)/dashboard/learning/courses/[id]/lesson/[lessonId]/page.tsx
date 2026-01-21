"use client"

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { COURSES } from "@/lib/mock-data";
import { ArrowLeft, PlayCircle, CheckCircle, FileText, Download, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CoursePlayerPage() {
    const params = useParams();
    const course = COURSES.find((c) => c.id === params.id) || COURSES[0];

    // Mock modules if missing (same as detail page)
    const modules = course.modules && course.modules.length > 0 ? course.modules : [
        { title: "Introduction", lessons: 3 },
        { title: "Core Concepts", lessons: 4 },
        { title: "Advanced Topics", lessons: 3 },
        { title: "Final Assessment", lessons: 1 }
    ];

    return (
        <div className="flex flex-col h-[calc(100vh-100px)]">
            {/* Header (Breadcrumb-ish) */}
            <div className="flex items-center gap-4 mb-4">
                <Link href={`/dashboard/learning/courses/${params.id}`} className="p-2 hover:bg-slate-100 rounded-full">
                    <ArrowLeft className="h-5 w-5 text-slate-600" />
                </Link>
                <div>
                    <h1 className="font-bold text-slate-900 line-clamp-1">{course.title}</h1>
                    <p className="text-xs text-slate-500">Module 1: Introduction · Lesson 1.1</p>
                </div>
            </div>

            <div className="flex flex-1 gap-6 overflow-hidden">
                {/* Main Player Area */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                            <p className="text-white font-medium text-lg">1.1 What is {course.title}?</p>
                        </div>
                        <PlayCircle className="h-20 w-20 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="mt-6 space-y-6 pb-10">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">About this lesson</h2>
                            <p className="text-slate-600 leading-relaxed">
                                In this introductory lesson, we will explore the fundamental concepts of the course.
                                You will learn why this topic is important for your academic and professional growth
                                as a Bangsamoro scholar.
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-emerald-600" />
                                        <span className="text-sm font-medium">Lesson Slides.pdf</span>
                                    </div>
                                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-5 w-5 text-emerald-600" />
                                        <span className="text-sm font-medium">Reading Material.docx</span>
                                    </div>
                                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playlist Sidebar */}
                <div className="w-80 border-l flex flex-col bg-white">
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-slate-900">Course Content</h3>
                        <p className="text-xs text-slate-500 mt-1">35% Completed</p>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="pb-4">
                            {modules.map((module, i) => (
                                <div key={i}>
                                    <div className="px-4 py-3 bg-slate-50 border-b font-medium text-sm text-slate-900 flex justify-between items-center">
                                        Module {i + 1}: {module.title}
                                    </div>
                                    <div>
                                        {Array.from({ length: module.lessons }).map((_, j) => (
                                            <div
                                                key={j}
                                                className={`px-4 py-3 border-b text-sm flex gap-3 hover:bg-slate-50 cursor-pointer ${i === 0 && j === 0 ? "bg-emerald-50 border-l-4 border-l-emerald-600" : ""}`}
                                            >
                                                <Checkbox
                                                    checked={i === 0 && j === 0}
                                                    className="mt-0.5 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                                                />
                                                <div className="flex-1">
                                                    <p className={`font-medium ${i === 0 && j === 0 ? "text-emerald-900" : "text-slate-700"}`}>
                                                        {j + 1}. Lesson Topic
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                                                        <PlayCircle className="h-3 w-3" />
                                                        10 mins
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
