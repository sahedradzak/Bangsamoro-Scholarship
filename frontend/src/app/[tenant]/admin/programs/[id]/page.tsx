"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Save, Plus, Trash2 } from "lucide-react";

export default function ProgramFormPage() {
    const params = useParams();
    const tenant = params.tenant as string;
    const id = params.id as string;
    const isNew = id === "new";

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href={`/${tenant}/admin/programs`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {isNew ? "Create New Program" : "Edit Program"}
                        </h2>
                        <p className="text-gray-500">
                            {isNew ? "Set up a new scholarship offering." : "Manage program details and rules."}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Save Draft</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Save className="mr-2 h-4 w-4" />
                        {isNew ? "Create Program" : "Save Changes"}
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="basic" className="w-full">
                <TabsList className="bg-white border w-full justify-start rounded-lg p-1 h-auto">
                    <TabsTrigger value="basic" className="px-6 py-2">Basic Info</TabsTrigger>
                    <TabsTrigger value="eligibility" className="px-6 py-2">Eligibility</TabsTrigger>
                    <TabsTrigger value="benefits" className="px-6 py-2">Benefits</TabsTrigger>
                    <TabsTrigger value="documents" className="px-6 py-2">Documents</TabsTrigger>
                    <TabsTrigger value="settings" className="px-6 py-2">Settings</TabsTrigger>
                </TabsList>

                <div className="mt-6">
                    <TabsContent value="basic">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div className="grid gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Program Name *</Label>
                                        <Input id="name" placeholder="e.g. AHME Scholarship 2026" defaultValue={!isNew ? "Access to Higher and Modern Education (AHME)" : ""} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Short Description *</Label>
                                        <Textarea id="description" placeholder="Brief overview of the program" className="h-24" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Application Period *</Label>
                                            <div className="flex gap-2 items-center">
                                                <Input type="date" />
                                                <span className="text-gray-500">to</span>
                                                <Input type="date" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="year">Academic Year *</Label>
                                            <Input id="year" placeholder="e.g. AY 2026-2027" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="slots">Available Slots *</Label>
                                            <Input id="slots" type="number" placeholder="500" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="budget">Total Budget Allocation</Label>
                                            <Input id="budget" placeholder="₱ 0.00" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="eligibility">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-lg">Eligibility Criteria</Label>
                                        <Button variant="outline" size="sm"><Plus className="mr-2 h-4 w-4" /> Add Rule</Button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            "Must be a Filipino citizen and BARMM resident",
                                            "Must be a Senior High School graduate",
                                            "Combined annual family income not exceeding ₱400,000"
                                        ].map((rule, i) => (
                                            <div key={i} className="flex gap-2">
                                                <Input defaultValue={rule} />
                                                <Button variant="ghost" size="icon" className="text-red-500 cursor-pointer hover:bg-red-50"><Trash2 className="h-4 w-4" /></Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="benefits">
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-lg">Scholarship Benefits</Label>
                                        <Button variant="outline" size="sm"><Plus className="mr-2 h-4 w-4" /> Add Benefit</Button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            "Annual Grant: ₱60,000 per academic year",
                                            "Book Allowance: ₱5,000 per semester",
                                            "Thesis Support: ₱10,000 (one-time)"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex gap-2">
                                                <Input defaultValue={benefit} />
                                                <Button variant="ghost" size="icon" className="text-red-500 cursor-pointer hover:bg-red-50"><Trash2 className="h-4 w-4" /></Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Other tabs omitted for brevity in prototype */}
                </div>
            </Tabs>
        </div>
    );
}
