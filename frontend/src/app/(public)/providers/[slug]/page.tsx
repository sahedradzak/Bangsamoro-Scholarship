
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Building, Globe, Mail, Phone, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SCHOLARSHIPS, PARTNERS } from "@/lib/mock-data";
import ScholarshipCard from "@/components/features/ScholarshipCard";

export default function ProviderPage({ params }: { params: { slug: string } }) {
    // Convert slug back to provider code (e.g., "mbhte" -> "MBHTE")
    const providerCode = params.slug.toUpperCase();
    const provider = PARTNERS.find((p) => p.code === providerCode);

    if (!provider) {
        notFound();
    }

    const providerScholarships = SCHOLARSHIPS.filter((s) => s.provider === providerCode);

    return (
        <div className="min-h-screen bg-slate-50 pb-20 pt-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Provider Header / Hero */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="h-32 bg-emerald-900 relative">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                    </div>
                    <div className="px-8 pb-8">
                        <div className="relative -mt-12 mb-6 flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                            <div className="h-32 w-32 rounded-xl bg-white p-2 shadow-lg border border-slate-100 flex items-center justify-center">
                                {/* Placeholder for Logo */}
                                <span className="text-3xl font-bold text-slate-400">{provider.code}</span>
                            </div>
                            <div className="flex-grow pb-2">
                                <h1 className="text-3xl font-bold text-slate-900">{provider.name}</h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-slate-600 text-sm">
                                    <span className="flex items-center gap-1"><Building className="h-4 w-4" /> Government Agency</span>
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> BARMM Center</span>
                                    <a href="#" className="flex items-center gap-1 hover:text-emerald-600 transition-colors"><Globe className="h-4 w-4" /> Official Website <ExternalLink className="h-3 w-3" /></a>
                                </div>
                            </div>
                            <div className="pb-2">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Agency</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Tabs defaultValue="programs" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                                <TabsTrigger value="programs">Scholarships ({providerScholarships.length})</TabsTrigger>
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="contact">Contact</TabsTrigger>
                            </TabsList>

                            <TabsContent value="programs" className="mt-6 space-y-6">
                                {providerScholarships.length > 0 ? (
                                    providerScholarships.map((scholarship) => (
                                        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                                    ))
                                ) : (
                                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                                        <p className="text-slate-500">No active scholarship programs listed at the moment.</p>
                                    </div>
                                )}
                            </TabsContent>

                            <TabsContent value="about" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>About {provider.code}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                                        <p>
                                            The {provider.name} ({provider.code}) is committed to providing accessible and quality support to the Bangsamoro people. Through various scholarship programs, we aim to empower the youth and contribute to the socio-economic development of the region.
                                        </p>
                                        <p>
                                            Our mandate includes the formulation, planning, implementation, and coordination of policies and programs designed to uplift the lives of our constituents.
                                        </p>

                                        <Separator className="my-4" />

                                        <h3 className="font-bold text-slate-900 mb-2">Key Areas of Focus</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Education</Badge>
                                            <Badge variant="secondary">Development</Badge>
                                            <Badge variant="secondary">Youth Empowerment</Badge>
                                            <Badge variant="secondary">Social Welfare</Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="contact" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-900">Main Office</p>
                                                <p className="text-slate-600">BARMM Government Center, Cotabato City</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-900">Email Address</p>
                                                <a href={`mailto:info@${provider.code.toLowerCase()}.gov.ph`} className="text-emerald-700 hover:underline">
                                                    info@{provider.code.toLowerCase()}.gov.ph
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-900">Contact Number</p>
                                                <p className="text-slate-600">(064) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Globe className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-900">Website</p>
                                                <a href="#" className="text-emerald-700 hover:underline">
                                                    www.{provider.code.toLowerCase()}.bangsamoro.gov.ph
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Right Sidebar Stats */}
                    <div className="space-y-6">
                        <Card className="bg-emerald-50 border-emerald-100">
                            <CardHeader>
                                <CardTitle className="text-emerald-800">Impact at a Glance</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">{providerScholarships.length}</p>
                                    <p className="text-sm font-medium text-slate-600">Active Programs</p>
                                </div>
                                <Separator className="bg-emerald-200" />
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">1,200+</p>
                                    <p className="text-sm font-medium text-slate-600">Scholars Supported</p>
                                </div>
                                <Separator className="bg-emerald-200" />
                                <div>
                                    <p className="text-3xl font-bold text-slate-900">₱45M</p>
                                    <p className="text-sm font-medium text-slate-600">Funds Disbursed (2025)</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Office Hours</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday - Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}

function MapPin({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
