
"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, KeyRound, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function ResetPasswordPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 2000);
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-slate-200 shadow-lg">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                        <KeyRound className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Set new password</CardTitle>
                    <CardDescription className="text-slate-600">
                        {!isSuccess
                            ? "Your new password must be different to previously used passwords."
                            : "Password updated successfully"}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!isSuccess ? (
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="password">New Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        disabled={isLoading}
                                        required
                                    />
                                    <p className="text-xs text-slate-500">Must be at least 8 characters long</p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="••••••••"
                                        disabled={isLoading}
                                        required
                                    />
                                </div>
                                <Button disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700 w-full mt-2">
                                    {isLoading && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Reset Password
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-4">
                            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">All Set!</h3>
                            <p className="text-slate-600 mb-6">
                                Your password has been successfully reset. You can now log in with your new password.
                            </p>
                            <Link href="/login">
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    Back to Login
                                </Button>
                            </Link>
                        </div>
                    )}
                </CardContent>
                {!isSuccess && (
                    <CardFooter className="flex justify-center border-t p-4 bg-slate-50/50 rounded-b-xl">
                        <Link href="/login" className="flex items-center text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Login
                        </Link>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
