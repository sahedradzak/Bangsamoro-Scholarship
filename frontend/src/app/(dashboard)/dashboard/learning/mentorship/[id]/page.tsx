"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MENTORS, COURSES } from "@/lib/mock-data";
import { Star, MessageSquare, Calendar, Video, Clock, MapPin, Briefcase, GraduationCap, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function MentorProfilePage() {
    const params = useParams();
    // Simplified logic: in real app, fetch by ID. Here we just take the first if not found or matching.
    const mentor = MENTORS.find((m) => m.id === params.id) || MENTORS[0];

    if (!mentor) {
        return <div>Mentor not found</div>;
    }

    // Mock related courses
    const mentorCourses = COURSES.filter(c => c.instructor === mentor.name);

    return (
        <div className="space-y-6">
            <Link href="/dashboard/learning/mentorship" className="flex items-center text-sm text-slate-500 hover:text-emerald-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Mentors
            </Link>

            {/* Mentor Header Profile */}
            <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-800"></div>
                <CardContent className="px-6 pb-6 pt-0 relative">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="-mt-12">
                            <Avatar className="h-24 w-24 ring-4 ring-white shadow-md">
                                <AvatarImage src={mentor.avatar} />
                                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl font-bold">{mentor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="flex-1 pt-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                        {mentor.name}
                                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Verified Mentor
                                        </Badge>
                                    </h1>
                                    <p className="text-emerald-700 font-medium">{mentor.role}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                        <span className="flex items-center">
                                            <Briefcase className="h-4 w-4 mr-1.5" />
                                            {mentor.institution}
                                        </span>
                                        <span className="flex items-center">
                                            <Star className="h-4 w-4 mr-1.5 text-amber-500 fill-amber-500" />
                                            {mentor.rating} ({mentor.sessions} sessions)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline">
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        Message
                                    </Button>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Book Session
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <Tabs defaultValue="about">
                        <TabsList>
                            <TabsTrigger value="about">About</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            <TabsTrigger value="courses">Courses ({mentorCourses.length})</TabsTrigger>
                        </TabsList>

                        <TabsContent value="about" className="space-y-6 mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Biography</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-slate-600 leading-relaxed">
                                    <p>
                                        Dr. Amina Research is a seasoned educator and researcher with over 15 years of experience in the field of Education and Social Sciences.
                                        She obtained her PhD from the University of the Philippines and has published numerous papers in international journals.
                                    </p>
                                    <p>
                                        As a mentor, she specializes in guiding students through the complexities of academic research, from improvements in methodology to thesis defense preparation.
                                        She is passionate about empowering Bangsamoro youth to contribute to the region's development through rigorous scholarship.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Expertise</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.map((exp, i) => (
                                            <Badge key={i} variant="secondary" className="px-3 py-1 bg-slate-100 text-slate-700 text-sm">
                                                {exp}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="reviews" className="mt-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Student Reviews</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Mock Reviews */}
                                    {[1, 2].map((i) => (
                                        <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarFallback>S{i}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-sm">Student {i}</p>
                                                        <p className="text-xs text-slate-500">2 weeks ago</p>
                                                    </div>
                                                </div>
                                                <div className="flex text-amber-500">
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                    <Star className="h-4 w-4 fill-current" />
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-600">
                                                "Dr. Amina was incredibly helpful with my research proposal. She gave very specific feedback that improved my work significantly."
                                            </p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="courses" className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {mentorCourses.length > 0 ? mentorCourses.map(course => (
                                    <Link key={course.id} href={`/dashboard/learning/courses/${course.id}`} className="block group">
                                        <Card className="h-full group-hover:border-emerald-500 transition-colors">
                                            <div className="h-32 bg-slate-100 relative">
                                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{course.title}</h3>
                                                <p className="text-xs text-slate-500 mt-1 mb-3 line-clamp-2">{course.description}</p>
                                                <div className="flex items-center text-xs text-slate-500 gap-3">
                                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                                                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-amber-500" /> {course.rating}</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                )) : (
                                    <div className="col-span-2 text-center py-8 text-slate-500">
                                        No courses listed for this mentor.
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Availability</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar className="h-5 w-5 text-emerald-600" />
                                <div>
                                    <p className="font-medium">Available Days</p>
                                    <p className="text-slate-500">{mentor.availability}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Clock className="h-5 w-5 text-emerald-600" />
                                <div>
                                    <p className="font-medium">Time Slots</p>
                                    <p className="text-slate-500">10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Video className="h-5 w-5 text-emerald-600" />
                                <div>
                                    <p className="font-medium">Session Type</p>
                                    <p className="text-slate-500">Video Call (Zoom/Google Meet)</p>
                                </div>
                            </div>

                            <Separator />

                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <p className="text-sm text-emerald-800 font-medium mb-1">Next Available Slot</p>
                                <p className="text-xl font-bold text-emerald-700">Tomorrow, 2:00 PM</p>
                                <Button className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 h-9">Book This Slot</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Education</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-3">
                                <div className="mt-0.5"><GraduationCap className="h-5 w-5 text-slate-400" /></div>
                                <div>
                                    <p className="text-sm font-medium">PhD in Education</p>
                                    <p className="text-xs text-slate-500">University of the Philippines</p>
                                    <p className="text-xs text-slate-400">2010 - 2015</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-0.5"><GraduationCap className="h-5 w-5 text-slate-400" /></div>
                                <div>
                                    <p className="text-sm font-medium">MA in Social Sciences</p>
                                    <p className="text-xs text-slate-500">Mindanao State University</p>
                                    <p className="text-xs text-slate-400">2005 - 2008</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
