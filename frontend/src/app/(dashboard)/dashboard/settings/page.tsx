
"use client";

import { Bell, Lock, Moon, Shield, Smartphone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-600">Manage your account preferences and security.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Notifications */}
                <Card className="border-slate-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-emerald-600" /> Notifications
                        </CardTitle>
                        <CardDescription>Configure how you receive alerts.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="email-notifs" className="flex flex-col space-y-1">
                                <span>Email Notifications</span>
                                <span className="font-normal text-xs text-muted-foreground">Receive updates via email.</span>
                            </Label>
                            <Switch id="email-notifs" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="sms-notifs" className="flex flex-col space-y-1">
                                <span>SMS Notifications</span>
                                <span className="font-normal text-xs text-muted-foreground">Receive updates via text message.</span>
                            </Label>
                            <Switch id="sms-notifs" />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="marketing" className="flex flex-col space-y-1">
                                <span>Scholarship Announcements</span>
                                <span className="font-normal text-xs text-muted-foreground">Get notified about new programs.</span>
                            </Label>
                            <Switch id="marketing" defaultChecked />
                        </div>
                    </CardContent>
                </Card>

                {/* Security */}
                <Card className="border-slate-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-emerald-600" /> Security
                        </CardTitle>
                        <CardDescription>Manage your password and authentication.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                        <div className="pt-2">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Update Password</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Account */}
                <Card className="border-slate-200 shadow-sm md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-emerald-600" /> Account Management
                        </CardTitle>
                        <CardDescription>Manage your account data and privacy.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50">
                            <div>
                                <h4 className="font-semibold text-slate-900">Data Privacy</h4>
                                <p className="text-sm text-slate-500">Download a copy of your personal data.</p>
                            </div>
                            <Button variant="outline">Request Data</Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                            <div>
                                <h4 className="font-semibold text-red-900">Delete Account</h4>
                                <p className="text-sm text-red-700">Permanently remove your account and all data.</p>
                            </div>
                            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">Delete Account</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
