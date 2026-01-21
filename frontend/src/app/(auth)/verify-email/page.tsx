
"use client";

import Link from "next/link";
import { CheckCircle2, Loader2, Mail, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function VerifyEmailPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isResent, setIsResent] = useState(false);

    const handleResend = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsResent(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-slate-200 shadow-lg text-center">
                <CardHeader className="space-y-4 pb-2">
                    <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Mail className="h-8 w-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Verify your email</CardTitle>
                    <CardDescription className="text-slate-600 text-base">
                        We've sent a verification code to <span className="font-semibold text-slate-900">name@example.com</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="space-y-6">
                        <div>
                            <label className="text-sm font-medium text-slate-700 block mb-3">Enter the 6-digit code</label>
                            <div className="flex justify-center gap-2">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <Input
                                        key={i}
                                        className="w-10 h-12 text-center text-xl font-bold p-0 border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                                        maxLength={1}
                                    />
                                ))}
                            </div>
                        </div>

                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-10">
                            Verify Account
                        </Button>

                        <div className="text-sm text-slate-600">
                            Didn't receive the email? <br />
                            {isResent ? (
                                <span className="text-emerald-600 font-medium flex items-center justify-center gap-1 mt-2">
                                    <CheckCircle2 className="h-4 w-4" /> Code resent successfully
                                </span>
                            ) : (
                                <button
                                    onClick={handleResend}
                                    disabled={isLoading}
                                    className="text-emerald-600 font-semibold hover:underline mt-2 inline-flex items-center"
                                >
                                    {isLoading && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
                                    Click to resend
                                </button>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-center border-t p-4 bg-slate-50/50 rounded-b-xl">
                    <p className="text-xs text-slate-500">
                        Need help? <Link href="/contact" className="text-emerald-600 hover:underline">Contact Support</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
