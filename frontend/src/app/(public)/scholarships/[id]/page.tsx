
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { ArrowLeft, Calendar, CheckCircle, Clock, GraduationCap, MapPin, Share2, Bookmark, Users, Banknote, FileText, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SCHOLARSHIPS, FAQS } from "@/lib/mock-data";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function ScholarshipDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const scholarship = SCHOLARSHIPS.find((s) => s.id === resolvedParams.id);

    if (!scholarship) {
        notFound();
    }

    const eligibilityList = scholarship.eligibility || [];
    const benefitsList = scholarship.benefits || [];
    const requirementsList = scholarship.requirements || [];
    const priorityCoursesList = scholarship.priorityCourses || [];

    const statusColor = scholarship.status === "Open"
        ? "bg-emerald-500"
        : scholarship.status === "Closing Soon"
        ? "bg-amber-500"
        : "bg-slate-500";

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow">
                {/* Hero Section with Curved Background */}
                <section className="bg-emerald-900 text-white pt-24 pb-32 md:pt-32 md:pb-40 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <Link
                            href="/scholarships"
                            className="inline-flex items-center text-sm font-medium text-emerald-200 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Scholarships
                        </Link>

                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                                        {scholarship.provider}
                                    </Badge>
                                    <Badge className={`${statusColor} text-white border-0`}>
                                        {scholarship.status}
                                    </Badge>
                                    {scholarship.isRenewable && (
                                        <Badge variant="outline" className="border-amber-400 text-amber-300">
                                            Renewable
                                        </Badge>
                                    )}
                                </div>

                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                                    {scholarship.fullName || scholarship.title}
                                </h1>

                                <p className="text-lg md:text-xl text-emerald-100 mb-6">
                                    {scholarship.providerFull}
                                </p>

                                <div className="flex flex-wrap gap-4 text-sm text-emerald-100">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        <span>{scholarship.level}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{scholarship.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{scholarship.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats Card - Floating */}
                            <div className="hidden lg:block">
                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white min-w-[280px]">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="text-center">
                                            <p className="text-emerald-200 text-sm font-medium">Financial Support</p>
                                            <p className="text-3xl font-bold text-amber-300">{scholarship.amount}</p>
                                        </div>
                                        <Separator className="bg-white/20" />
                                        <div className="flex justify-between text-sm">
                                            <span className="text-emerald-200">Deadline</span>
                                            <span className="font-semibold">{scholarship.deadline}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-emerald-200">Slots Available</span>
                                            <span className="font-semibold">{scholarship.slotsRemaining} of {scholarship.slots}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 bg-slate-50/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                            {/* Main Content Column */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Mobile Stats Card */}
                                <Card className="lg:hidden border-emerald-100 shadow-md">
                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center">
                                                <p className="text-slate-500 text-sm">Financial Support</p>
                                                <p className="text-2xl font-bold text-emerald-600">{scholarship.amount}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-slate-500 text-sm">Deadline</p>
                                                <p className="text-2xl font-bold text-slate-900">{scholarship.deadline}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Content Tabs */}
                                <Tabs defaultValue="overview" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4 lg:w-[500px] bg-white border">
                                        <TabsTrigger value="overview">Overview</TabsTrigger>
                                        <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                                        <TabsTrigger value="benefits">Benefits</TabsTrigger>
                                        <TabsTrigger value="requirements">Apply</TabsTrigger>
                                    </TabsList>

                                    <div className="mt-8 space-y-8">
                                        <TabsContent value="overview" className="space-y-8">
                                            <Card className="border-0 shadow-sm bg-white">
                                                <CardContent className="p-6 md:p-8">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <FileText className="h-5 w-5 text-emerald-600" />
                                                        Program Overview
                                                    </h3>
                                                    <p className="text-slate-600 leading-relaxed text-lg">
                                                        {scholarship.description}
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="p-2 bg-emerald-600 rounded-lg">
                                                                <Users className="h-5 w-5 text-white" />
                                                            </div>
                                                            <p className="text-sm font-medium text-emerald-800">Total Slots</p>
                                                        </div>
                                                        <p className="text-3xl font-bold text-emerald-900">{scholarship.slots?.toLocaleString()}</p>
                                                        <p className="text-sm text-emerald-700 font-medium mt-1">
                                                            {scholarship.slotsRemaining?.toLocaleString()} slots remaining
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                                <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="p-2 bg-amber-500 rounded-lg">
                                                                <Banknote className="h-5 w-5 text-white" />
                                                            </div>
                                                            <p className="text-sm font-medium text-amber-800">Financial Benefit</p>
                                                        </div>
                                                        <p className="text-3xl font-bold text-amber-900">{scholarship.amount}</p>
                                                        <p className="text-sm text-amber-700 mt-1">Per academic year</p>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                            {priorityCoursesList.length > 0 && (
                                                <Card className="border-0 shadow-sm bg-white">
                                                    <CardContent className="p-6 md:p-8">
                                                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                            <Award className="h-5 w-5 text-emerald-600" />
                                                            Priority Courses
                                                        </h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {priorityCoursesList.map((course, i) => (
                                                                <Badge
                                                                    key={i}
                                                                    variant="secondary"
                                                                    className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                                                                >
                                                                    {course}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )}
                                        </TabsContent>

                                        <TabsContent value="eligibility" className="space-y-6">
                                            <Card className="border-0 shadow-sm bg-white">
                                                <CardContent className="p-6 md:p-8">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Who Can Apply?</h3>
                                                    <ul className="space-y-4">
                                                        {eligibilityList.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                                                <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                                                                <span className="text-slate-700 leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="benefits" className="space-y-6">
                                            <Card className="border-0 shadow-sm bg-white">
                                                <CardContent className="p-6 md:p-8">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Scholarship Benefits</h3>
                                                    <div className="grid gap-4">
                                                        {benefitsList.map((item, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl border border-emerald-100"
                                                            >
                                                                <div className="p-2 bg-emerald-600 rounded-lg shrink-0">
                                                                    <CheckCircle className="h-5 w-5 text-white" />
                                                                </div>
                                                                <span className="text-slate-800 font-medium text-lg">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        <TabsContent value="requirements" className="space-y-6">
                                            <Card className="border-0 shadow-sm bg-white">
                                                <CardContent className="p-6 md:p-8">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Document Requirements</h3>
                                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                                                        <p className="text-sm text-amber-800">
                                                            <strong>Important:</strong> Ensure all documents are scanned clearly in PDF or JPEG format. Maximum file size is 5MB per document.
                                                        </p>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {requirementsList.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                                                                <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 text-white text-sm font-bold">
                                                                    {i + 1}
                                                                </div>
                                                                <span className="text-slate-700 leading-relaxed pt-1">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>
                                    </div>
                                </Tabs>

                                <Separator className="my-8" />

                                {/* FAQs Section */}
                                <Card className="border-0 shadow-sm bg-white">
                                    <CardContent className="p-6 md:p-8">
                                        <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                                        <Accordion type="single" collapsible className="w-full">
                                            {FAQS.map((faq, i) => (
                                                <AccordionItem key={i} value={`item-${i}`} className="border-slate-200">
                                                    <AccordionTrigger className="text-slate-900 font-medium hover:text-emerald-700">
                                                        {faq.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="text-slate-600">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="relative">
                                <div className="sticky top-24 space-y-6">
                                    <Card className="border-2 border-emerald-100 shadow-xl overflow-hidden">
                                        <div className="bg-emerald-600 p-5 text-center">
                                            <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider mb-1">Application Status</p>
                                            <p className="text-white text-2xl font-bold">{scholarship.status}</p>
                                        </div>
                                        <CardContent className="p-6 space-y-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-500">Deadline</span>
                                                    <span className="font-bold text-slate-900">{scholarship.deadline}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-500">Duration</span>
                                                    <span className="font-semibold text-slate-900">{scholarship.duration}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-slate-500">Remaining Slots</span>
                                                    <span className="font-semibold text-emerald-600">{scholarship.slotsRemaining} of {scholarship.slots}</span>
                                                </div>
                                                <div className="w-full bg-slate-100 rounded-full h-2.5 mt-2">
                                                    <div
                                                        className="bg-emerald-500 h-2.5 rounded-full transition-all"
                                                        style={{ width: `${((scholarship.slotsRemaining || 0) / (scholarship.slots || 1)) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <Separator />

                                            <div className="space-y-3">
                                                <Link href={`/scholarships/${scholarship.id}/apply`}>
                                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg shadow-lg shadow-emerald-200">
                                                        Apply Now
                                                    </Button>
                                                </Link>
                                                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:text-emerald-700 hover:border-emerald-300">
                                                    <Bookmark className="mr-2 h-4 w-4" />
                                                    Save for Later
                                                </Button>
                                                <Button variant="ghost" className="w-full text-slate-500 hover:text-slate-900">
                                                    <Share2 className="mr-2 h-4 w-4" />
                                                    Share
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-slate-900 text-white">
                                        <CardContent className="p-6">
                                            <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                                            <p className="text-slate-400 text-sm mb-4">
                                                Contact the {scholarship.provider} scholarship coordinator for assistance with your application.
                                            </p>
                                            <Button variant="link" className="text-emerald-400 p-0 h-auto hover:text-emerald-300">
                                                Contact Support <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
