"use client"

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { COURSES } from "@/lib/mock-data";
import { ArrowLeft, Clock, BookOpen, Star, PlayCircle, CheckCircle, Lock } from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
    const params = useParams();
    const course = COURSES.find((c) => c.id === params.id) || COURSES[0];

    if (!course) {
        return <div>Course not found</div>;
    }

    // Create mock modules if not present
    const modules = course.modules && course.modules.length > 0 ? course.modules : [
        { title: "Introduction", lessons: 3 },
        { title: "Core Concepts", lessons: 4 },
        { title: "Advanced Topics", lessons: 3 },
        { title: "Final Assessment", lessons: 1 }
    ];

    return (
        <div className="space-y-6">
            <Link href="/dashboard/learning/courses" className="flex items-center text-sm text-slate-500 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Catalog
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    <div>
                        <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{course.category}</Badge>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h1>
                        <p className="text-lg text-slate-600 mb-6">{course.description}</p>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-emerald-600 text-white text-xs">{course.instructor.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-slate-900">{course.instructor}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Star className="h-4 w-4 text-amber-500 fill-current" />
                                <span className="font-bold text-slate-900">{course.rating}</span>
                                <span className="text-slate-500">({course.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <BookOpen className="h-4 w-4" />
                                {modules.reduce((acc, m) => acc + m.lessons, 0)} lessons
                            </div>
                        </div>
                    </div>

                    {/* Course Content / Syllabus */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
                        <Card>
                            <CardContent className="p-0">
                                <Accordion type="single" collapsible className="w-full">
                                    {modules.map((module, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="px-4">
                                            <AccordionTrigger className="hover:no-underline">
                                                <div className="flex flex-1 items-center justify-between mr-4">
                                                    <span className="font-semibold text-left">Module {i + 1}: {module.title}</span>
                                                    <span className="text-xs text-slate-500 font-normal">{module.lessons} lessons</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-1 pb-2">
                                                    {Array.from({ length: module.lessons }).map((_, j) => (
                                                        <div key={j} className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 group cursor-pointer">
                                                            <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-600">
                                                                {i === 0 && j === 0 ? <PlayCircle className="h-4 w-4" /> : <Lock className="h-3 w-3" />}
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">Lesson {i + 1}.{j + 1}: Topic Name Placeholder</p>
                                                                <p className="text-xs text-slate-400">10:00</p>
                                                            </div>
                                                            {i === 0 && j === 0 && (
                                                                <Badge variant="outline" className="text-emerald-600 border-emerald-200">Preview</Badge>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Instructor */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Your Instructor</h2>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarFallback className="bg-emerald-600 text-white text-xl">{course.instructor.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">{course.instructor}</h3>
                                        <p className="text-emerald-700 text-sm mb-2">Subject Matter Expert</p>
                                        <p className="text-sm text-slate-600">
                                            An experienced educator with a passion for helping students succeed.
                                            Specializes in {course.tags.join(", ")}.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Sidebar Card */}
                <div className="w-full lg:w-80 space-y-6">
                    <Card className="sticky top-6">
                        <div className="h-40 overflow-hidden relative">
                            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <PlayCircle className="h-16 w-16 text-white opacity-80" />
                            </div>
                        </div>
                        <CardContent className="p-6">
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-slate-900">Free</span>
                                <span className="text-sm text-slate-500 ml-2">for Scholars</span>
                            </div>

                            <Link href={`/dashboard/learning/courses/${course.id}/lesson/1`}>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 size-lg mb-4">
                                    Start Learning Now
                                </Button>
                            </Link>
                            <p className="text-xs text-center text-slate-500 mb-6">Full lifetime access · Certificate of completion</p>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm">This course includes:</h4>
                                <ul className="text-sm text-slate-600 space-y-2">
                                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {course.duration} on-demand video</li>
                                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {modules.length} modules</li>
                                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Access on mobile and TV</li>
                                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Certificate of Completion</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
