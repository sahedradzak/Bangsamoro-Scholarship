
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Router, Save, UploadCloud } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useParams } from "next/navigation";
import { SCHOLARSHIPS } from "@/lib/mock-data";

const STEPS = [
    { id: 1, title: "Personal Info", description: "Basic details" },
    { id: 2, title: "Family", description: "Parents & Income" },
    { id: 3, title: "Education", description: "Academic history" },
    { id: 4, title: "Documents", description: "Upload requirements" },
    { id: 5, title: "Review", description: "Verify & Submit" }
];

import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ApplicationFormPage() {
    const params = useParams();
    const [currentStep, setCurrentStep] = useState(1);

    // Find scholarship details (mock)
    const scholarship = SCHOLARSHIPS.find(s => s.id === params.id) || SCHOLARSHIPS[0];

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <Link href={`/scholarships/${params.id}`} className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mb-4 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Scholarship Details
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            {scholarship.logo && (
                                <div className="h-16 w-16 flex items-center justify-center">
                                    <Image
                                        src={scholarship.logo}
                                        alt={scholarship.provider}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                            )}
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900">Application Form</h1>
                                <p className="text-slate-600 mt-1">Applying for: <span className="font-semibold text-emerald-700">{scholarship.title}</span></p>
                            </div>
                        </div>
                        <div className="text-sm text-slate-500 bg-white px-4 py-2 rounded-lg border shadow-sm">
                            Deadline: <span className="font-bold text-red-600">{scholarship.deadline}</span>
                        </div>
                    </div>
                </div>

                {/* Stepper */}
                <div className="mb-6">
                    <div className="hidden md:flex justify-between">
                        {STEPS.map((step) => (
                            <div key={step.id} className={`flex flex-col items-center relative z-10 w-full ${step.id !== STEPS.length ? 'after:content-[""] after:h-[2px] after:w-full after:bg-slate-200 after:absolute after:top-4 after:left-1/2 after:-z-10' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-colors ${currentStep >= step.id ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                                    }`}>
                                    {currentStep > step.id ? <CheckCircle2 className="h-5 w-5" /> : step.id}
                                </div>
                                <span className={`text-xs font-semibold ${currentStep >= step.id ? 'text-emerald-700' : 'text-slate-400'}`}>
                                    {step.title}
                                </span>
                                <span className="text-[10px] text-slate-400 hidden lg:block">{step.description}</span>
                            </div>
                        ))}
                    </div>
                    {/* Mobile Stepper */}
                    <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-lg border shadow-sm">
                        <span className="font-bold text-emerald-700">Step {currentStep} of {STEPS.length}</span>
                        <span className="text-sm text-slate-600">{STEPS[currentStep - 1].title}</span>
                    </div>
                </div>

                {/* Form Content */}
                <Card className="border-slate-200 shadow-sm border-t-4 border-t-emerald-600 relative overflow-hidden">
                    {/* Background Logo Watermark */}
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.4] transition-all duration-500 ${scholarship.provider === 'TESDA' ? 'w-[600px] h-[600px]' : 'w-[400px] h-[400px]'
                        }`}>
                        <Image
                            src={scholarship.logo}
                            alt=""
                            width={scholarship.provider === 'TESDA' ? 600 : 400}
                            height={scholarship.provider === 'TESDA' ? 600 : 400}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>

                    <CardContent className="p-6 md:p-8 space-y-6 relative z-10">
                        {/* Step 1: Personal Info */}
                        {currentStep === 1 && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                            <Input id="firstName" placeholder="Juan" className="focus-visible:ring-emerald-500 transition-all" />
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <Label htmlFor="middleName">Middle Name</Label>
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                            <Input id="middleName" placeholder="Santos" className="focus-visible:ring-emerald-500 transition-all" />
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                            <Input id="lastName" placeholder="Dela Cruz" className="focus-visible:ring-emerald-500 transition-all" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <Label htmlFor="dob">Date of Birth</Label>
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                            <Input id="dob" type="date" className="focus-visible:ring-emerald-500 transition-all" />
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <Label htmlFor="gender">Gender</Label>
                                        <motion.div whileHover={{ scale: 1.01 }}>
                                            <Select>
                                                <SelectTrigger className="focus:ring-emerald-500 transition-all">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div variants={itemVariants}>
                                    <Separator />
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-4">
                                    <Label className="text-base font-semibold">Permanent Address</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input placeholder="Region (BARMM)" className="focus-visible:ring-emerald-500 transition-all" />
                                        <Input placeholder="Province" className="focus-visible:ring-emerald-500 transition-all" />
                                        <Input placeholder="City / Municipality" className="focus-visible:ring-emerald-500 transition-all" />
                                        <Input placeholder="Barangay" className="focus-visible:ring-emerald-500 transition-all" />
                                        <Input placeholder="House No. / Street" className="md:col-span-2 focus-visible:ring-emerald-500 transition-all" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Step 2: Family Background */}
                        {currentStep === 2 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                        Father's Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Full Name</Label>
                                            <Input placeholder="Father's Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Occupation</Label>
                                            <Input placeholder="Occupation" />
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                                        Mother's Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Full Name</Label>
                                            <Input placeholder="Mother's Maiden Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Occupation</Label>
                                            <Input placeholder="Occupation" />
                                        </div>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label htmlFor="income">Combined Annual Family Income</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select income range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="range1">Below Php 60,000</SelectItem>
                                            <SelectItem value="range2">Php 60,000 - Php 120,000</SelectItem>
                                            <SelectItem value="range3">Php 120,000 - Php 250,000</SelectItem>
                                            <SelectItem value="range4">Above Php 250,000</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Education */}
                        {currentStep === 3 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="space-y-2">
                                    <Label htmlFor="school">Current School / University</Label>
                                    <Input id="school" placeholder="Enter school name" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="program">Program / Course</Label>
                                        <Input id="program" placeholder="e.g. BS Civil Engineering" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="year">Year Level (Next Sem)</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1st Year</SelectItem>
                                                <SelectItem value="2">2nd Year</SelectItem>
                                                <SelectItem value="3">3rd Year</SelectItem>
                                                <SelectItem value="4">4th Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="gpa">General Weighted Average (Last Sem)</Label>
                                    <Input id="gpa" placeholder="e.g. 1.5 or 90%" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Academic Achievements / Honors</Label>
                                    <Input placeholder="List any honors received" />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Documents */}
                        {currentStep === 4 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-800 mb-4">
                                    Please upload clear, scanned copies of the following documents. Allowed formats: PDF, JPG, PNG. Max size: 5MB.
                                </div>

                                {[
                                    "PSA Birth Certificate",
                                    "Certificate of Grades / TOR",
                                    "Certificate of Enrolment / Registration",
                                    "Barangay Certificate of Residency",
                                    "Income Tax Return of Parents / Cert. of Indigency"
                                ].map((doc, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg bg-slate-50 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 bg-white rounded-lg border flex items-center justify-center text-slate-400">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">{doc}</p>
                                                <p className="text-xs text-slate-500">Required</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="border-dashed border-slate-300 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50">
                                            <UploadCloud className="mr-2 h-4 w-4" /> Upload
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Step 5: Review */}
                        {currentStep === 5 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="text-center py-6">
                                    <h3 className="text-xl font-bold text-slate-900">Review Application</h3>
                                    <p className="text-slate-600">Please review your information before submitting.</p>
                                </div>

                                <Card className="bg-slate-50 border-0 shadow-none">
                                    <CardContent className="p-4 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <p className="font-semibold text-slate-900">Juan Santos Dela Cruz</p>
                                            <Button variant="link" size="sm" className="h-auto p-0 text-emerald-600" onClick={() => setCurrentStep(1)}>Edit</Button>
                                        </div>
                                        <p className="text-sm text-slate-600">Poblacion 1, Cotabato City</p>
                                        <Separator className="bg-slate-200" />
                                        <div className="flex justify-between items-start">
                                            <p className="font-semibold text-slate-900">Notre Dame University</p>
                                            <Button variant="link" size="sm" className="h-auto p-0 text-emerald-600" onClick={() => setCurrentStep(3)}>Edit</Button>
                                        </div>
                                        <p className="text-sm text-slate-600">BS Civil Engineering • 3rd Year</p>
                                        <Separator className="bg-slate-200" />
                                        <div className="flex justify-between items-start">
                                            <p className="font-semibold text-slate-900">Documents (5/5)</p>
                                            <Button variant="link" size="sm" className="h-auto p-0 text-emerald-600" onClick={() => setCurrentStep(4)}>Edit</Button>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-emerald-700">
                                            <CheckCircle2 className="h-4 w-4" /> All required documents uploaded
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="flex items-start space-x-2 pt-4">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms" className="text-sm leading-relaxed text-slate-600 font-normal">
                                        I hereby certify that the information provided in this application is true and correct to the best of my knowledge. I understand that any false statement may result in the disqualification of my application.
                                    </Label>
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-between bg-slate-50/50 border-t p-6">
                        <Button
                            variant="outline"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className="text-slate-600"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>

                        {currentStep < 5 ? (
                            <Button onClick={handleNext} className="bg-emerald-600 hover:bg-emerald-700">
                                Next Step <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button onClick={() => alert("Application Submitted!")} className="bg-emerald-600 hover:bg-emerald-700 px-8">
                                <Save className="mr-2 h-4 w-4" /> Submit Application
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
