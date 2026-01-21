"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Bangsamoro Scholarship Portal Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tight text-foreground">
                            Bangsamoro
                        </span>
                        <span className="text-sm font-bold tracking-wide text-foreground">
                            <span className="uppercase text-secondary">Scholarship</span> Portal
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/scholarships" className="text-sm font-medium transition-colors hover:text-primary">
                        Scholarships
                    </Link>
                    <Link href="/success-stories" className="text-sm font-medium transition-colors hover:text-primary">
                        Success Stories
                    </Link>
                    <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Link href="/login">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="bg-primary text-white hover:bg-primary/90 shadow-md transition-all hover:shadow-lg active:scale-95">
                            Register
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-4">
                        <Link href="/scholarships" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                            Scholarships
                        </Link>
                        <Link href="/success-stories" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                            Success Stories
                        </Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex flex-col gap-3 pt-4">
                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="outline" className="w-full">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-primary text-white">
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
