"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Calendar, BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function ReportsPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Reports & Analytics</h2>
                    <p className="text-gray-500">Visualize program performance and generate reports.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" /> Date Range
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" /> Export Summary
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Total Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <div className="h-[80px] w-full bg-emerald-50 mt-4 rounded-md flex items-end justify-between p-2 pb-0 overflow-hidden">
                            {/* Mock Bar Chart */}
                            {[40, 60, 45, 70, 85, 95, 80].map((h, i) => (
                                <div key={i} className="w-6 bg-emerald-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Total Disbursed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₱ 3.5M</div>
                        <div className="h-[80px] w-full bg-blue-50 mt-4 rounded-md flex items-end justify-between p-2 pb-0 overflow-hidden">
                            {/* Mock Line Chart */}
                            {[20, 30, 45, 40, 60, 55, 75].map((h, i) => (
                                <div key={i} className="w-6 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Scholars by Gender</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                        <div className="h-[80px] w-[80px] rounded-full border-[8px] border-emerald-500 border-r-pink-500 border-t-pink-500 transform -rotate-45"></div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 bg-emerald-500 rounded-full"></div> Male (45%)</div>
                            <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 bg-pink-500 rounded-full"></div> Female (55%)</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Demographic Breakdown</CardTitle>
                            <CardDescription>Distribution of scholars by province and program</CardDescription>
                        </div>
                        <Tabs defaultValue="province">
                            <TabsList>
                                <TabsTrigger value="province">By Province</TabsTrigger>
                                <TabsTrigger value="program">By Program</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center text-gray-400 border-2 border-dashed m-4 rounded-lg bg-gray-50">
                    <div className="text-center">
                        <BarChart3 className="h-10 w-10 mx-auto mb-2 opacity-20" />
                        <p>Chart Visualization Component (Placeholder)</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
