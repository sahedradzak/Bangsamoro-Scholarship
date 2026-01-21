import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { COURSES } from "@/lib/mock-data";
import { PlayCircle, Clock, Star, BookOpen, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

export default function LearningDashboardPage() {
    const inProgressCourse = COURSES[0]; // Mock "In Progress"
    const recommendedCourses = COURSES.slice(1);

    return (
        <div className="space-y-8">

            {/* Continue Learning Section */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Continue Learning</h2>
                <Card className="border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-48 h-28 rounded-lg overflow-hidden relative group">
                            <img src={inProgressCourse.thumbnail} alt={inProgressCourse.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <PlayCircle className="h-10 w-10 text-white" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-2 w-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <Badge variant="secondary" className="mb-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{inProgressCourse.category}</Badge>
                                    <h3 className="text-lg font-bold text-slate-900">{inProgressCourse.title}</h3>
                                </div>
                                <span className="text-sm font-bold text-emerald-700">{inProgressCourse.progress}%</span>
                            </div>
                            <Progress value={inProgressCourse.progress} className="h-2 bg-emerald-200" />
                            <p className="text-xs text-slate-500">3 of 5 modules completed</p>
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-md">
                            Continue <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Recommended Section */}
            <section>
                <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Recommended For You</h2>
                    <Link href="/dashboard/learning/courses" className="text-sm text-emerald-600 hover:underline">View All Courses</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedCourses.map((course) => (
                        <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                            <div className="h-40 overflow-hidden relative">
                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                                <Badge className="absolute top-2 right-2 bg-white/90 text-slate-900 shadow-sm hover:bg-white">
                                    {course.category}
                                </Badge>
                            </div>
                            <CardHeader className="p-4 flex-1">
                                <h3 className="font-bold text-slate-900 line-clamp-1" title={course.title}>{course.title}</h3>
                                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{course.description}</p>
                            </CardHeader>
                            <CardContent className="p-4 pt-0 text-xs text-slate-500 space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                                    <span className="flex items-center gap-1 text-amber-500 font-medium"><Star className="h-3 w-3 fill-current" /> {course.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" /> {course.enrolled.toLocaleString()} enrolled
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 mt-auto">
                                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800">Enroll Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Upcoming Workshops */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Live Workshops</h2>
                <Card>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {[
                                { date: "Jan 25", title: "Research Methods Workshop", slots: 50, type: "Live Online" },
                                { date: "Feb 05", title: "Career Fair Preparation", slots: 100, type: "Live Online" },
                                { date: "Feb 10", title: "Thesis Writing Bootcamp", slots: 30, type: "In-Person" }
                            ].map((workshop, i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg text-center min-w-[60px]">
                                            <span className="block text-xs font-bold uppercase">{workshop.date.split(" ")[0]}</span>
                                            <span className="block text-lg font-bold">{workshop.date.split(" ")[1]}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{workshop.title}</h4>
                                            <p className="text-xs text-slate-500">{workshop.type} · {workshop.slots} slots left</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="ghost" className="text-emerald-700">Register</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
