"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft, Info, BookOpen, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EvaluateApplicationPage() {
    const params = useParams();
    const tenant = params.tenant as string;
    const id = params.id as string;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href={`/${tenant}/admin/applications/${id}`}>
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Evaluate Application</h2>
                        <p className="text-gray-500">Scorecard for {id}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quick Info Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <Card className="bg-slate-50 border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-slate-500">APPLICANT SUMMARY</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div>
                                <p className="font-bold text-slate-900">Aminah P. Datum</p>
                                <p className="text-slate-500">BS Nursing, 2nd Year</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-xs uppercase font-medium">GWA</p>
                                <p className="font-mono font-bold text-lg">1.25</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-xs uppercase font-medium">Income</p>
                                <p className="font-mono font-bold">₱ 120,000 / yr</p>
                            </div>
                            <Separator className="my-2" />
                            <Link href={`/${tenant}/admin/applications/${id}`} target="_blank">
                                <Button variant="link" className="p-0 h-auto text-emerald-600 text-xs flex items-center">
                                    Open Full Profile <BookOpen className="ml-1 h-3 w-3" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Alert className="bg-amber-50 border-amber-200 text-amber-900">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                        <AlertTitle>Duplicate Check</AlertTitle>
                        <AlertDescription className="text-xs">
                            Potential match found with ID: APP-992 (85% similarity). Please verify familial relationship.
                        </AlertDescription>
                    </Alert>
                </div>

                {/* Evaluation Form */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Scoring Criteria</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {/* Criterion 1 */}
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <Label className="text-base font-semibold">Academic Performance (40 pts)</Label>
                                    <span className="text-sm text-gray-500">Based on GWA and academic history</span>
                                </div>
                                <RadioGroup defaultValue="35" className="grid grid-cols-5 gap-2">
                                    {[10, 20, 25, 30, 35, 40].map(val => (
                                        <div key={val}>
                                            <RadioGroupItem value={val.toString()} id={`c1-${val}`} className="peer sr-only" />
                                            <Label
                                                htmlFor={`c1-${val}`}
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-emerald-50 hover:text-emerald-900 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600 cursor-pointer text-center text-sm"
                                            >
                                                {val}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            <Separator />

                            {/* Criterion 2 */}
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <Label className="text-base font-semibold">Socio-Economic Status (30 pts)</Label>
                                    <span className="text-sm text-gray-500">Income and living conditions</span>
                                </div>
                                <RadioGroup defaultValue="25" className="grid grid-cols-5 gap-2">
                                    {[10, 15, 20, 25, 30].map(val => (
                                        <div key={val}>
                                            <RadioGroupItem value={val.toString()} id={`c2-${val}`} className="peer sr-only" />
                                            <Label
                                                htmlFor={`c2-${val}`}
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-emerald-50 hover:text-emerald-900 peer-data-[state=checked]:border-emerald-600 [&:has([data-state=checked])]:border-emerald-600 cursor-pointer text-center text-sm"
                                            >
                                                {val}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            <Separator />

                            {/* Criterion 3 */}
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <Label className="text-base font-semibold">Qualitative Assessment (30 pts)</Label>
                                    <span className="text-sm text-gray-500">Essay & Interview</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <Label className="text-xs">Essay Score (0-15)</Label>
                                        <Input type="number" min="0" max="15" placeholder="0" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-xs">Interview Score (0-15)</Label>
                                        <Input type="number" min="0" max="15" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Final Recommendation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Evaluator's Remarks</Label>
                                <Textarea placeholder="Add comments regarding the applicant's suitability..." />
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
                                    Reject Application
                                </Button>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    Submit Evaluation
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
