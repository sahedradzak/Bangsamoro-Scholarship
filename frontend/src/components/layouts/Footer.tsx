import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 whitespace-normal">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="Bangsamoro Scholarship Portal Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight text-foreground">
                                    Bangsamoro
                                </span>
                                <span className="text-xs font-bold tracking-wide text-foreground">
                                    <span className="uppercase text-secondary">Scholarship</span> Portal
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                            Bridging Opportunities and the Bangsamoro Youth through accessible education and simplified scholarship opportunities across the region.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full border bg-background hover:text-primary transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full border bg-background hover:text-primary transition-colors">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full border bg-background hover:text-primary transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <Link href="/scholarships" className="text-muted-foreground hover:text-primary transition-colors">
                                    Browse Scholarships
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Bangsamoro <span className="text-secondary">Scholarship</span> Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Portal Sections */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">Portals</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                                    Applicant Portal
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                                    Entity Admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                                    Staff / Evaluator
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                                    Partner Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                                <span className="text-muted-foreground">BARMM Government Center, Cotabato City, Philippines</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <span className="text-muted-foreground">(064) 123-4567</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <span className="text-muted-foreground">support@bsp.gov.ph</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
                    <p className="text-xs text-muted-foreground text-center md:text-left">
                        © 2026 Bangsamoro Scholarship Portal. All rights reserved. Built by MoroTech.
                    </p>
                    <div className="flex gap-6 text-xs font-medium decoration-primary decoration-1 underline-offset-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms of Service</Link>
                        <Link href="#" className="hover:underline">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
