"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, GraduationCap, FileText, CreditCard, History, AlertTriangle } from "lucide-react";

export default function ScholarDetailPage() {
    const params = useParams();
    const tenant = params.tenant as string;
    const id = params.id as string;

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href={`/${tenant}/admin/scholars`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fatima R. Utto</h2>
                            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-100">
                                Active Scholar
                            </Badge>
                        </div>
                        <p className="text-gray-500 font-mono text-sm">SCH-2025-001 • Minus 300 Clean Up • 2025 Cohort</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 hover:bg-amber-100">
                        <AlertTriangle className="mr-2 h-4 w-4" /> Issue Warning
                    </Button>
                    <Button variant="outline">Update Status</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-1">
                                <Label className="text-xs text-gray-500 uppercase">School</Label>
                                <p className="font-medium text-sm">Notre Dame University</p>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs text-gray-500 uppercase">Course</Label>
                                <p className="font-medium text-sm">BS Social Work</p>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-xs text-gray-500 uppercase">Year Level</Label>
                                <p className="font-medium text-sm">3rd Year</p>
                            </div>
                            <Separator />
                            <div className="space-y-1">
                                <Label className="text-xs text-gray-500 uppercase">Bank Account</Label>
                                <p className="font-medium text-sm">Landbank of the Philippines</p>
                                <p className="font-mono text-xs text-gray-500">****-****-1234</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <Tabs defaultValue="academic" className="w-full">
                        <TabsList className="bg-white border w-full justify-start rounded-lg p-1 h-auto mb-4">
                            <TabsTrigger value="academic" className="px-6 py-2 gap-2"><GraduationCap className="h-4 w-4" /> Academic Records</TabsTrigger>
                            <TabsTrigger value="disbursements" className="px-6 py-2 gap-2"><CreditCard className="h-4 w-4" /> Disbursements</TabsTrigger>
                            <TabsTrigger value="requirements" className="px-6 py-2 gap-2"><FileText className="h-4 w-4" /> Requirements</TabsTrigger>
                            <TabsTrigger value="history" className="px-6 py-2 gap-2"><History className="h-4 w-4" /> History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="academic" className="mt-0">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Grade Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Academic Term</TableHead>
                                                <TableHead>Units</TableHead>
                                                <TableHead>GWA</TableHead>
                                                <TableHead>Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>2nd Sem, AY 2024-2025</TableCell>
                                                <TableCell>21.0</TableCell>
                                                <TableCell className="font-bold text-emerald-600">1.25</TableCell>
                                                <TableCell><Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200">Passed</Badge></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>1st Sem, AY 2024-2025</TableCell>
                                                <TableCell>23.0</TableCell>
                                                <TableCell className="font-bold text-emerald-600">1.50</TableCell>
                                                <TableCell><Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200">Passed</Badge></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="disbursements" className="mt-0">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base">Allowances Received</CardTitle>
                                        <Button size="sm">Process New Stipend</Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Reference No.</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead>Date Released</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                                <TableHead className="text-right">Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-mono text-xs">TRX-998877</TableCell>
                                                <TableCell>Monthly Stipend (Jan 2026)</TableCell>
                                                <TableCell>Jan 15, 2026</TableCell>
                                                <TableCell className="text-right font-medium">₱ 5,000.00</TableCell>
                                                <TableCell className="text-right"><Badge variant="outline" className="text-emerald-600 border-emerald-200">Released</Badge></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-mono text-xs">TRX-998123</TableCell>
                                                <TableCell>Book Allowance (2nd Sem)</TableCell>
                                                <TableCell>Jan 05, 2026</TableCell>
                                                <TableCell className="text-right font-medium">₱ 5,000.00</TableCell>
                                                <TableCell className="text-right"><Badge variant="outline" className="text-emerald-600 border-emerald-200">Released</Badge></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

function Label({ className, children }: { className?: string; children: React.ReactNode }) {
    return <span className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>{children}</span>
}
