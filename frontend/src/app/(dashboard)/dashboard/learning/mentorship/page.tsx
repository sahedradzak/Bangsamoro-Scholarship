import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MENTORS } from "@/lib/mock-data";
import { CheckCircle, Clock, Star, Users, Calendar, MessageSquare, Video } from "lucide-react";

export default function MentorshipPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Mentorship Hub</h1>
                    <p className="text-muted-foreground">Connect with experienced professionals for guidance and career advice.</p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Users className="h-4 w-4 mr-2" />
                    Become a Mentor
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Featured Mentors */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-slate-900">Available Mentors</h2>
                        <Button variant="link" className="text-emerald-600">View All</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {MENTORS.map((mentor) => (
                            <Card key={mentor.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <Avatar className="h-14 w-14 ring-2 ring-emerald-50">
                                            <AvatarImage src={mentor.avatar} />
                                            <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">{mentor.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200">
                                            <Star className="h-3 w-3 fill-current mr-1" />
                                            {mentor.rating}
                                        </Badge>
                                    </div>

                                    <div className="mb-4">
                                        <h3 className="font-bold text-slate-900 text-lg">{mentor.name}</h3>
                                        <p className="text-sm font-medium text-emerald-700">{mentor.role}</p>
                                        <p className="text-xs text-slate-500">{mentor.institution}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {mentor.expertise.map((exp, i) => (
                                            <Badge key={i} variant="secondary" className="text-[10px] bg-slate-100 text-slate-700">{exp}</Badge>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <Button variant="outline" size="sm" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                                            <Calendar className="h-3 w-3 mr-2" />
                                            Book
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <MessageSquare className="h-3 w-3 mr-2" />
                                            Chat
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Placeholder for more mentors */}
                        <Card className="border-dashed flex items-center justify-center p-6 bg-slate-50">
                            <div className="text-center">
                                <div className="mx-auto h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center mb-3">
                                    <Users className="h-6 w-6 text-slate-400" />
                                </div>
                                <h3 className="font-medium text-slate-900">Find more mentors</h3>
                                <p className="text-xs text-slate-500 mb-4">Browse by category or expertise</p>
                                <Button variant="outline" size="sm">Browse Directory</Button>
                            </div>
                        </Card>
                    </div>

                    <div className="bg-emerald-900 rounded-xl p-6 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 h-40 w-40 bg-emerald-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">Upcoming Mentorship Session</h3>
                                <p className="text-emerald-100 mb-4 text-sm">
                                    Your session with <span className="font-semibold text-white">Dr. Amina Research</span> is starting in 30 minutes.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-emerald-200">
                                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Today, 2:00 PM</span>
                                    <span className="flex items-center gap-1.5"><Video className="h-4 w-4" /> Zoom Meeting</span>
                                </div>
                            </div>
                            <Button className="bg-white text-emerald-900 hover:bg-emerald-50 whitespace-nowrap">
                                Join Meeting
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="pb-3">
                            <h3 className="font-semibold text-slate-900">How it works</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-medium text-sm text-slate-900">Find a Mentor</h4>
                                    <p className="text-xs text-slate-500">Browse profiles to find a mentor that matches your goals.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-medium text-sm text-slate-900">Book a Session</h4>
                                    <p className="text-xs text-slate-500">Schedule a time that works for both of you.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-medium text-sm text-slate-900">Connect & Learn</h4>
                                    <p className="text-xs text-slate-500">Join the video call and get personalized guidance.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <h3 className="font-semibold text-slate-900">My Mentors</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src="/avatars/amina.jpg" />
                                        <AvatarFallback>AR</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium text-slate-900">Dr. Amina Research</h4>
                                        <p className="text-xs text-slate-500">Last session: 3 days ago</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                        <MessageSquare className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
