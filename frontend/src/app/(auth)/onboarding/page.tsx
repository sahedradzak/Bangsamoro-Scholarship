"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, ChevronLeft, Upload, User, MapPin, GraduationCap } from "lucide-react";

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleContinue = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                router.push("/dashboard");
            }, 1500);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">BSP</span>
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Set up your profile
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Step {step} of 3: {step === 1 ? "Personal Details" : step === 2 ? "Education" : "Documents"}
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-between">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className="flex flex-col items-center">
                                    <div
                                        className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${step >= s
                                                ? "bg-emerald-600 border-emerald-600 text-white"
                                                : "bg-white border-gray-300 text-gray-400"
                                            }`}
                                    >
                                        {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                                    </div>
                                    <span className={`mt-2 text-xs font-medium ${step >= s ? "text-emerald-600" : "text-gray-500"}`}>
                                        {s === 1 ? "Personal" : s === 2 ? "Education" : "Finish"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Card className="shadow-lg border-0 ring-1 ring-black/5">
                    <CardHeader>
                        <CardTitle>{step === 1 ? "Personal Information" : step === 2 ? "Educational Background" : "Review & Submit"}</CardTitle>
                        <CardDescription>
                            {step === 1 && "Please provide your basic personal details."}
                            {step === 2 && "Tell us about your current academic standing."}
                            {step === 3 && "Review your information and complete setup."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {step === 1 && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="birthdate">Birthdate</Label>
                                            <Input id="birthdate" type="date" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">Gender</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Address</Label>
                                        <div className="grid grid-cols-1 gap-4">
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Province" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="maguindanao">Maguindanao del Norte</SelectItem>
                                                    <SelectItem value="lanao">Lanao del Sur</SelectItem>
                                                    <SelectItem value="basilan">Basilan</SelectItem>
                                                    <SelectItem value="sulu">Sulu</SelectItem>
                                                    <SelectItem value="tawi-tawi">Tawi-Tawi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Municipality/City" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cotabato">Cotabato City</SelectItem>
                                                    <SelectItem value="pick">Datu Odin Sinsuat</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input placeholder="Barangay" />
                                            <Input placeholder="Street Address / House No." />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="level">Education Level</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Level" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="shs">Senior High School</SelectItem>
                                                <SelectItem value="college">College / University</SelectItem>
                                                <SelectItem value="tvet">TVET / Vocational</SelectItem>
                                                <SelectItem value="grad">Graduate School</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="school">School / Institution</Label>
                                        <Input id="school" placeholder="e.g. Mindanao State University" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="course">Course / Track</Label>
                                            <Input id="course" placeholder="e.g. BS Civil Engineering" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="year">Year Level</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">1st Year</SelectItem>
                                                    <SelectItem value="2">2nd Year</SelectItem>
                                                    <SelectItem value="3">3rd Year</SelectItem>
                                                    <SelectItem value="4">4th Year</SelectItem>
                                                    <SelectItem value="5">5th Year</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6 text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                                        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium text-gray-900">All Set!</h3>
                                        <p className="text-sm text-gray-500">
                                            Your profile is ready. You can now browse scholarships and start applying.
                                        </p>
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-left">
                                        <h4 className="text-sm font-semibold text-amber-800 mb-2">Next Steps:</h4>
                                        <ul className="list-disc list-inside text-sm text-amber-700 space-y-1">
                                            <li>Browse available scholarships</li>
                                            <li>Upload required documents</li>
                                            <li>Check your eligibility</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            variant="outline"
                            onClick={handleBack}
                            disabled={step === 1 || loading}
                            className="w-32"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button
                            onClick={handleContinue}
                            className="w-32 bg-emerald-600 hover:bg-emerald-700"
                            disabled={loading}
                        >
                            {loading ? (
                                "Setting up..."
                            ) : step === 3 ? (
                                "Go to Dashboard"
                            ) : (
                                <>
                                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
