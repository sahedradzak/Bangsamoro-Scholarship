import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SCHOLARS_DIRECTORY } from "@/lib/mock-data";
import { Search, MapPin, GraduationCap, UserPlus, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ScholarDirectoryPage() {
    return (
        <div className="space-y-6">
            {/* Search and Filters */}
            <Card className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search scholars by name, school, or course..."
                            className="pl-9"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Select>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Scholarship" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Programs</SelectItem>
                                <SelectItem value="ahme">AHME</SelectItem>
                                <SelectItem value="base">BASE</SelectItem>
                                <SelectItem value="tes">TES</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="School" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Schools</SelectItem>
                                <SelectItem value="ndu">Notre Dame Univ</SelectItem>
                                <SelectItem value="msu">MSU System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </Card>

            {/* Directory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SCHOLARS_DIRECTORY.map((scholar) => (
                    <Card key={scholar.id} className="overflow-hidden flex flex-col">
                        <CardContent className="p-6 flex-1 flex flex-col items-center text-center">
                            <Link href={`/dashboard/community/scholars/${scholar.id}`}>
                                <Avatar className="h-24 w-24 mb-4 ring-2 ring-emerald-100 cursor-pointer hover:ring-emerald-300 transition-all">
                                    <AvatarImage src={scholar.avatar} alt={scholar.name} />
                                    <AvatarFallback className="text-xl bg-emerald-50 text-emerald-700">
                                        {scholar.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                            <h3 className="font-semibold text-lg text-slate-900 mb-1">
                                <Link href={`/dashboard/community/scholars/${scholar.id}`} className="hover:underline">
                                    {scholar.name}
                                </Link>
                            </h3>
                            <p className="text-sm text-emerald-700 font-medium mb-2">{scholar.type}</p>

                            <div className="space-y-1 text-sm text-muted-foreground mb-4">
                                <p>{scholar.program}</p>
                                <p className="text-xs">{scholar.school}</p>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full mb-4">
                                <MapPin className="h-3 w-3" />
                                {scholar.location}
                            </div>

                            {scholar.achievements.length > 0 && (
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {scholar.achievements.slice(0, 2).map((achievement, i) => (
                                        <Badge key={i} variant="secondary" className="text-[10px] bg-amber-50 text-amber-800 border-amber-200">
                                            🏆 {achievement}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="p-3 bg-slate-50 grid grid-cols-2 gap-2 border-t text-sm">
                            <Button variant="outline" size="sm" className="w-full text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 border-emerald-200">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Connect
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Message
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <Button variant="outline">Load More Scholars</Button>
            </div>
        </div>
    );
}
