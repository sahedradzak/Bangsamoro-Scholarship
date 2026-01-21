
"use client";

import { Mail, Phone, MapPin, MessageCircle, Flag, Search, Send } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQS } from "@/lib/mock-data";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow pt-24 pb-20">
                <div className="container mx-auto px-4 md:px-6">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                            Help & Support
                        </h1>
                        <p className="text-lg text-slate-600">
                            Have questions? We're here to help. Find answers to common queries or reach out to our team directly.
                        </p>
                    </div>

                    <Tabs defaultValue="faq" className="w-full max-w-4xl mx-auto">
                        <div className="flex justify-center mb-10">
                            <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                                <TabsTrigger value="faq">FAQs</TabsTrigger>
                                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* FAQ Tab */}
                        <TabsContent value="faq" className="space-y-8">
                            <Card className="border-slate-200">
                                <CardHeader className="pb-4">
                                    <CardTitle>Frequently Asked Questions</CardTitle>
                                    <CardDescription>
                                        Browse through our most common questions and answers.
                                    </CardDescription>
                                    <div className="relative mt-4">
                                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Search for answers..." className="pl-10 h-10 bg-slate-50" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="w-full">
                                        {FAQS.map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`}>
                                                <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-emerald-700">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>

                            <div className="text-center pt-4">
                                <p className="text-slate-500 mb-2">Can't find what you're looking for?</p>
                                <Button variant="link" className="text-emerald-600" onClick={() => document.getElementById('contact-tab-trigger')?.click()}>
                                    Contact Support
                                </Button>
                            </div>
                        </TabsContent>

                        {/* Contact Tab */}
                        <TabsContent value="contact" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Contact Channels */}
                                <div className="space-y-6">
                                    <Card className="border-emerald-100 bg-emerald-50/50">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">Email Support</h3>
                                                <p className="text-sm text-slate-600 mb-2">For general inquiries and concerns</p>
                                                <a href="mailto:support@bsp.gov.ph" className="text-emerald-700 font-semibold hover:underline">
                                                    support@bsp.gov.ph
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-emerald-100 bg-emerald-50/50">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">Hotline</h3>
                                                <p className="text-sm text-slate-600 mb-2">Mon-Fri from 8am to 5pm</p>
                                                <a href="tel:0641234567" className="text-emerald-700 font-semibold hover:underline">
                                                    (064) 123-4567
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-emerald-100 bg-emerald-50/50">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">Office Address</h3>
                                                <p className="text-sm text-slate-600">
                                                    BARMM Government Center,<br />
                                                    Cotabato City, 9600
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Ticket Form */}
                                <Card className="border-slate-200">
                                    <CardHeader>
                                        <CardTitle>Send us a Message</CardTitle>
                                        <CardDescription>We help you with your application process.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                                <Input id="name" placeholder="Your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                                <Input id="email" type="email" placeholder="Your email" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                            <Input id="subject" placeholder="How can we help?" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                            <textarea
                                                id="message"
                                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Describe your issue..."
                                            ></textarea>
                                        </div>
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                            <Send className="mr-2 h-4 w-4" /> Send Message
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>
            </main>

            <Footer />
        </div>
    );
}
