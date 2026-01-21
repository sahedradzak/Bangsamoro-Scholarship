"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, CreditCard, CheckCircle2, Clock, CalendarDays, MoreHorizontal } from "lucide-react";

const DISBURSEMENTS = [
    { id: "PAY-2026-001", title: "January 2026 Stipend - Batch A", recipients: 45, amount: "₱ 225,000.00", status: "Completed", date: "Jan 15, 2026" },
    { id: "PAY-2026-002", title: "January 2026 Stipend - Batch B", recipients: 44, amount: "₱ 220,000.00", status: "Processing", date: "Jan 20, 2026" },
    { id: "PAY-2026-003", title: "Book Allowance - 2nd Sem", recipients: 89, amount: "₱ 445,000.00", status: "Approved", date: "Jan 22, 2026" },
];

export default function DisbursementsPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed": return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "Processing": return "bg-blue-100 text-blue-800 border-blue-200";
            case "Approved": return "bg-amber-100 text-amber-800 border-amber-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Disbursements</h2>
                    <p className="text-gray-500">Manage payrolls and track allowance releases.</p>
                </div>
                <div className="flex gap-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Plus className="mr-2 h-4 w-4" /> Create New Payroll
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Total Disbursed (2026)</CardTitle>
                        <CreditCard className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₱ 890,000.00</div>
                        <p className="text-xs text-gray-500 mt-1">First Quarter Allocation</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Pending Releases</CardTitle>
                        <Clock className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₱ 220,000.00</div>
                        <p className="text-xs text-gray-500 mt-1">1 Batch in Processing</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Next Scheduled</CardTitle>
                        <CalendarDays className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Feb 15, 2026</div>
                        <p className="text-xs text-gray-500 mt-1">February Stipend</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-1">
                <Tabs defaultValue="batches">
                    <TabsList className="m-3">
                        <TabsTrigger value="batches">Payroll Batches</TabsTrigger>
                        <TabsTrigger value="transactions">Transaction History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="batches" className="m-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Batch ID</TableHead>
                                    <TableHead>Title / Description</TableHead>
                                    <TableHead>Recipients</TableHead>
                                    <TableHead>Total Amount</TableHead>
                                    <TableHead>Date Created</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {DISBURSEMENTS.map((batch) => (
                                    <TableRow key={batch.id}>
                                        <TableCell className="font-mono text-xs">{batch.id}</TableCell>
                                        <TableCell className="font-medium text-gray-900">{batch.title}</TableCell>
                                        <TableCell>{batch.recipients}</TableCell>
                                        <TableCell className="font-medium">{batch.amount}</TableCell>
                                        <TableCell className="text-gray-500">{batch.date}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={getStatusColor(batch.status)}>
                                                {batch.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Link href={`/${tenant}/admin/disbursements/${batch.id}`}>
                                                <Button variant="ghost" size="sm">Details</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
