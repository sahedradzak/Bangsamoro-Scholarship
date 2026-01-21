import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COURSES } from "@/lib/mock-data";
import { Search, Clock, Star, Users, Briefcase, GraduationCap, Lightbulb, PenTool } from "lucide-react";
import Link from "next/link";

export default function CourseCatalogPage() {
    return (
        <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
                    <p className="text-slate-300 max-w-xl">
                        Discover new skills, advance your career, and learn from industry experts.
                        All courses are free for registered scholars.
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-4 max-w-2xl">
                        <div className="flex-1 relative text-slate-900">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search for courses, topics, or instructors..." className="pl-9 bg-white border-0" />
                        </div>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 space-y-6">
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Categories</h3>
                        <div className="space-y-2">
                            {["Academic", "Career", "Life Skills", "Technical", "Arts & humanities"].map((cat) => (
                                <div key={cat} className="flex items-center gap-2">
                                    <Input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300" />
                                    <label className="text-sm text-slate-600">{cat}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Duration</h3>
                        <div className="space-y-2">
                            {["< 2 hours", "2-5 hours", "5-10 hours", "10+ hours"].map((dur) => (
                                <div key={dur} className="flex items-center gap-2">
                                    <Input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300" />
                                    <label className="text-sm text-slate-600">{dur}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Level</h3>
                        <div className="space-y-2">
                            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                                <div key={lvl} className="flex items-center gap-2">
                                    <Input type="checkbox" className="w-4 h-4 rounded-sm border-slate-300" />
                                    <label className="text-sm text-slate-600">{lvl}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Course Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-slate-500">Showing <span className="font-bold text-slate-900">{COURSES.length}</span> courses</p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500">Sort by:</span>
                            <Select defaultValue="popular">
                                <SelectTrigger className="w-[140px] h-9">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popular">Most Popular</SelectItem>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="rated">Highest Rated</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COURSES.map((course) => (
                            <Card key={course.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow group">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    <Badge className="absolute top-2 right-2 bg-white/90 text-slate-900 shadow-sm">
                                        {course.category}
                                    </Badge>
                                </div>
                                <CardHeader className="p-4 flex-1">
                                    <h3 className="font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                                        <Link href={`/dashboard/learning/courses/${course.id}`}>
                                            {course.title}
                                        </Link>
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1 mb-2">by {course.instructor}</p>
                                    <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                                        <Star className="h-3 w-3 fill-current" />
                                        {course.rating}
                                        <span className="text-slate-400 font-normal">({course.reviews})</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 text-xs text-slate-500">
                                    <span className="flex items-center gap-1 mb-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {course.enrolled.toLocaleString()} enrolled</span>
                                </CardContent>
                                <CardFooter className="p-4 pt-0 mt-auto">
                                    <Button asChild variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800">
                                        <Link href={`/dashboard/learning/courses/${course.id}`}>View Course</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <Button variant="outline">Load More Courses</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
