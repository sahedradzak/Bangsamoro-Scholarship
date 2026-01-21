import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENTS } from "@/lib/mock-data";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Share2 } from "lucide-react";

export default function EventsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800">Community Events</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    <Tabs defaultValue="upcoming" className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                            <TabsTrigger value="my-events">My Events</TabsTrigger>
                            <TabsTrigger value="past">Past Events</TabsTrigger>
                        </TabsList>

                        <TabsContent value="upcoming" className="space-y-4">
                            {EVENTS.map((event) => (
                                <Card key={event.id} className="overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-48 h-32 md:h-auto bg-slate-100 relative">
                                            {event.image ? (
                                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-slate-400">
                                                    <Calendar className="h-8 w-8" />
                                                </div>
                                            )}
                                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 text-center shadow-sm">
                                                <span className="block text-xs font-bold text-red-500 uppercase">{event.date.split(' ')[0]}</span>
                                                <span className="block text-lg font-bold text-slate-900">{event.date.split(' ')[1].replace(',', '')}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{event.title}</h3>
                                                        <p className="text-sm text-emerald-700 font-medium mb-2">By: {event.organizer}</p>
                                                    </div>
                                                    <Badge variant="outline" className={event.capacity === event.registered ? "text-red-600 border-red-200" : "text-emerald-600 border-emerald-200"}>
                                                        {event.registered}/{event.capacity} Registered
                                                    </Badge>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-slate-500 mb-3">
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="h-4 w-4" />
                                                        {event.time}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4" />
                                                        {event.type}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-600 mb-4">{event.description}</p>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button className="bg-emerald-600 hover:bg-emerald-700">Register Now</Button>
                                                <Button variant="outline">Add to Calendar</Button>
                                                <Button variant="ghost" size="icon">
                                                    <Share2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </TabsContent>

                        <TabsContent value="my-events">
                            <div className="text-center py-12 text-muted-foreground">
                                <p>No upcoming events registered.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar Calendar Widget */}
                <div className="w-full lg:w-80">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-semibold text-slate-900">January 2026</h4>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft className="h-4 w-4" /></Button>
                                    <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight className="h-4 w-4" /></Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-slate-500">
                                <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                {/* Simple Mock Calendar Grid */}
                                <div className="text-slate-300">29</div>
                                <div className="text-slate-300">30</div>
                                <div className="text-slate-300">31</div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>

                                <div>5</div>
                                <div>6</div>
                                <div>7</div>
                                <div>8</div>
                                <div>9</div>
                                <div>10</div>
                                <div>11</div>

                                <div>12</div>
                                <div>13</div>
                                <div>14</div>
                                <div>15</div>
                                <div>16</div>
                                <div>17</div>
                                <div>18</div>

                                <div>19</div>
                                <div>20</div>
                                <div>21</div>
                                <div>22</div>
                                <div>23</div>
                                <div>24</div>
                                <div className="bg-red-100 text-red-700 rounded-full font-bold">25</div>

                                <div>26</div>
                                <div>27</div>
                                <div>28</div>
                                <div>29</div>
                                <div className="bg-emerald-100 text-emerald-700 rounded-full font-bold">30</div>
                                <div className="bg-blue-100 text-blue-700 rounded-full font-bold">31</div>
                            </div>
                            <div className="mt-4 pt-4 border-t space-y-2 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <span>Research Workshop</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span>Career Fair</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span>Networking Night</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
