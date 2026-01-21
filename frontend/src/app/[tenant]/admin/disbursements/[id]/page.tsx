"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, CheckCircle2, Download, Printer } from "lucide-react";

export default function DisbursementDetailPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href={`/${tenant}/admin/disbursements`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                January 2026 Stipend - Batch A
                            </h2>
                            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                                Completed
                            </Badge>
                        </div>
                        <p className="text-gray-500 font-mono text-sm">PAY-2026-001 • Created Jan 15, 2026</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Printer className="mr-2 h-4 w-4" /> Print Vouchers
                    </Button>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card className="md:col-span-3">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Scholar Name</TableHead>
                                    <TableHead>Account Number</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Transaction Ref</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">Scholar Name {i}</TableCell>
                                        <TableCell className="font-mono text-gray-500">1234-5678-90{i}0</TableCell>
                                        <TableCell>₱ 5,000.00</TableCell>
                                        <TableCell>
                                            <span className="flex items-center text-emerald-600 text-sm font-medium">
                                                <CheckCircle2 className="h-3 w-3 mr-1" /> Success
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right font-mono text-xs text-gray-400">TRX-0000{i}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card className="md:col-span-1 h-fit">
                    <CardContent className="p-6 space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Total Amount</p>
                            <p className="text-2xl font-bold text-gray-900">₱ 225,000.00</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Recipients</p>
                            <p className="text-lg font-bold text-gray-900">45 Scholars</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Approved By</p>
                            <p className="text-sm text-gray-900">Director Amina S.</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Date Released</p>
                            <p className="text-sm text-gray-900">Jan 16, 2026</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
