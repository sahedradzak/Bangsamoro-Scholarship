"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, FileEdit, Eye, BarChart, Settings } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/mock-data";

export default function ProgramsListPage() {
    const params = useParams();
    const tenant = params.tenant as string;
    // Filter scholarships for this tenant/provider
    // In a real app we would filter by params.tenant (e.g., 'mbhte', 'most')
    // For mock demo, we'll just show all or a subset
    const filteredScholarships = SCHOLARSHIPS;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Scholarship Programs</h2>
                    <p className="text-gray-500">Manage your scholarship offerings and cycles.</p>
                </div>
                <Link href={`/${tenant}/admin/programs/new`}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" /> Create Program
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search programs..." className="pl-9 bg-white" />
                </div>
                <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="2026">
                    <SelectTrigger className="w-[180px] bg-white">
                        <SelectValue placeholder="Academic Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2026">AY 2026-2027</SelectItem>
                        <SelectItem value="2025">AY 2025-2026</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid gap-4">
                {filteredScholarships.map((program) => (
                    <Card key={program.id} className="overflow-hidden transition-all hover:shadow-md">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                                {/* Left Stripe */}
                                <div className={`w-full md:w-2 ${program.status === 'Open' ? 'bg-emerald-500' :
                                        program.status === 'Closed' ? 'bg-red-500' : 'bg-amber-500'
                                    }`} />

                                <div className="p-6 flex-1 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                    <div className="space-y-2 flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-lg text-gray-900">{program.title}</h3>
                                            <Badge variant={program.status === 'Open' ? 'default' : 'secondary'} className={
                                                program.status === 'Open' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                                                    'bg-gray-100 text-gray-800'
                                            }>
                                                {program.status === 'Open' ? 'Active' : program.status}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-gray-500 line-clamp-1">{program.fullName}</p>

                                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mt-2">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-gray-400 uppercase">Application Period</span>
                                                <span>Jan 1 - Apr 30, 2026</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-gray-400 uppercase">Benefit</span>
                                                <span>{program.amount}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-gray-400 uppercase">Slots</span>
                                                <span>{program.slots} Total ({program.slotsRemaining} left)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 self-start md:self-center">
                                        <Link href={`/${tenant}/admin/programs/${program.id}`}>
                                            <Button variant="outline" size="sm" className="h-9">
                                                <FileEdit className="mr-2 h-3.5 w-3.5" />
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button variant="outline" size="sm" className="h-9">
                                            <Eye className="mr-2 h-3.5 w-3.5" />
                                            View Apps
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9">
                                            <BarChart className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-9 w-9">
                                            <Settings className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
