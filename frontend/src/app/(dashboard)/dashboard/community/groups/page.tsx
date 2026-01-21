import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GROUPS } from "@/lib/mock-data";
import { Search, Users, ShieldCheck, Plus } from "lucide-react";

export default function GroupsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800">Groups</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Group
                </Button>
            </div>

            <Tabs defaultValue="discover" className="w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <TabsList>
                        <TabsTrigger value="discover">Discover</TabsTrigger>
                        <TabsTrigger value="my-groups">My Groups</TabsTrigger>
                        <TabsTrigger value="managed">Managed</TabsTrigger>
                    </TabsList>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search groups..." className="pl-9" />
                    </div>
                </div>

                <TabsContent value="discover" className="space-y-6">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        <Badge variant="outline" className="cursor-pointer bg-emerald-50 text-emerald-700 border-emerald-200">
                            All Categories
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">Academic</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">Career</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">Regional</Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-slate-50">Interest</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GROUPS.map((group) => (
                            <Card key={group.id} className="overflow-hidden flex flex-col">
                                <div className="h-24 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
                                    {group.image && (
                                        <img src={group.image} alt={group.name} className="w-full h-full object-cover opacity-50" />
                                    )}
                                    {group.isOfficial && (
                                        <div className="absolute top-2 right-2">
                                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                                                <ShieldCheck className="h-3 w-3 mr-1" />
                                                Official
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="pt-4 pb-2">
                                    <h3 className="text-lg font-bold text-slate-900">{group.name}</h3>
                                    <div className="flex items-center text-xs text-muted-foreground gap-2">
                                        <Badge variant="secondary" className="text-[10px]">
                                            {group.category}
                                        </Badge>
                                        <span className="flex items-center">
                                            <Users className="h-3 w-3 mr-1" />
                                            {group.members} members
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-sm text-slate-600 line-clamp-2">
                                        {group.description}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-3">
                                        📝 {group.postsToday} posts today
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-2 pb-4">
                                    <Button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 shadow-none">
                                        Join Group
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="my-groups">
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You haven't joined any groups yet.</p>
                        <Button variant="link" className="text-emerald-600">Browse Groups</Button>
                    </div>
                </TabsContent>

                <TabsContent value="managed">
                    <div className="text-center py-12 text-muted-foreground">
                        <p>You don't manage any groups.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
