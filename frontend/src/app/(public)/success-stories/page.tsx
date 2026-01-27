
"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SUCCESS_STORIES } from "@/lib/mock-data";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function SuccessStoriesPage() {
    const featuredStory = SUCCESS_STORIES.find((s) => s.featured) || SUCCESS_STORIES[0];
    const otherStories = SUCCESS_STORIES.filter((s) => s.id !== featuredStory.id);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow pt-8 pb-12">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Page Header */}
                    <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                            Transforming Lives
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Read the inspiring journeys of Bangsamoro scholars who are turning their dreams into reality and giving back to their communities.
                        </p>
                    </div>

                    {/* Featured Story */}
                    <section className="mb-6">
                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-56 md:h-auto overflow-hidden">
                                    <Image
                                        src={featuredStory.image}
                                        alt={featuredStory.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 md:p-10 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <Badge className="bg-emerald-600 hover:bg-emerald-700 mb-3">Featured Story</Badge>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                            "From a Small Barangay to Licensed Nurse"
                                        </h2>
                                        <p className="text-emerald-700 font-medium text-lg">{featuredStory.name}</p>
                                        <p className="text-slate-500">{featuredStory.role}</p>
                                    </div>

                                    <blockquote className="relative mb-6 pl-6 border-l-4 border-emerald-400 text-slate-700 text-lg leading-relaxed">
                                        <Quote className="absolute -top-2 -left-3 h-6 w-6 text-emerald-200 -z-10 bg-white" />
                                        "{featuredStory.quote}"
                                    </blockquote>

                                    <Button className="self-start text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 p-0 h-auto font-semibold" variant="ghost">
                                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator className="my-2" />

                    {/* Other Stories Grid */}
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">More Inspiring Stories</h2>
                                <p className="text-slate-600">Discover how education is empowering the next generation.</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="text-slate-600">Most Recent</Button>
                                <Button variant="outline" className="text-slate-600">By Program</Button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherStories.map((story) => (
                                <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden bg-white shadow-sm">
                                    <div className="h-40 relative overflow-hidden">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="mb-3">
                                            <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50/50">
                                                {story.role}
                                            </Badge>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                                            {story.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-4">{story.school}</p>

                                        <p className="text-slate-600 line-clamp-3 mb-4">
                                            "{story.quote}"
                                        </p>

                                        <Button variant="link" className="text-emerald-600 p-0 h-auto hover:text-emerald-700">
                                            Read Story <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Button size="lg" variant="outline" className="min-w-[200px] border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700">
                                Load More Stories
                            </Button>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="mt-24 bg-emerald-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                            </svg>
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Share Your Story</h2>
                            <p className="text-emerald-100 text-lg">
                                Are you a Bangsamoro scholar with an inspiring journey? Your story could encourage the next generation of Bangsamoro leaders.
                            </p>
                            <div className="pt-4 flex justify-center gap-4">
                                <Button size="lg" className="bg-amber-400 text-emerald-950 hover:bg-amber-500 font-bold">
                                    Submit Your Story
                                </Button>
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
