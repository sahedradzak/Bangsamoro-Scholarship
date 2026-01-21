
"use client";

import Link from "next/link";
import { ArrowLeft, Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
            {/* Left Side - Visuals */}
            <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-2/5 bg-emerald-900 text-white p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white mb-10">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                    <div className="mb-6">
                        <span className="text-4xl font-bold">Bangsamoro <span className="text-secondary">Scholarship</span> Portal</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Join the Community</h1>
                    <p className="text-emerald-100 text-lg">
                        Create your profile to start your scholarship journey. It takes less than 2 minutes.
                    </p>
                </div>

                <div className="relative z-10 text-sm text-emerald-200">
                    &copy; 2026 Bangsamoro Scholarship Portal
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-6">
                <Card className="w-full max-w-md border-0 shadow-none bg-transparent">
                    <CardHeader className="space-y-1 px-0">
                        <CardTitle className="text-3xl font-bold text-slate-900">Create an account</CardTitle>
                        <CardDescription className="text-slate-600">
                            Enter your email below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                        <div className="grid gap-6">
                            <form onSubmit={onSubmit}>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="Juan" required disabled={isLoading} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Dela Cruz" required disabled={isLoading} />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" disabled={isLoading} />
                                        <p className="text-xs text-slate-500">Must be at least 8 characters long</p>
                                    </div>

                                    <Button disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700 mt-2">
                                        {isLoading && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Create Account
                                    </Button>
                                </div>
                            </form>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-slate-200" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-slate-50 px-2 text-slate-500">Or continue with</span>
                                </div>
                            </div>

                            <Button variant="outline" type="button" disabled={isLoading} className="border-slate-300 text-slate-700 hover:bg-slate-50">
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                    </svg>
                                )}
                                Google
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 px-0">
                        <div className="text-center text-sm text-slate-600">
                            Already have an account?{" "}
                            <Link href="/login" className="font-bold text-emerald-600 hover:text-emerald-500">
                                Sign in
                            </Link>
                        </div>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-4 hover:text-emerald-700">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-4 hover:text-emerald-700">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
