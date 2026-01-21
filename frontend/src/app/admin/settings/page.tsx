"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Mail, Lock, HardDrive, Zap, CheckCircle2, Badge as BadgeIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function SystemSettings() {
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [formData, setFormData] = useState({
        platformName: "Bangsamoro Scholarship Portal",
        supportEmail: "support@bangsamoro.gov.ph",
        maintenanceMode: false,
        sessionTimeout: "30",
        twoFactorAuth: true,
        maxFileSize: "50",
        apiRateLimit: "1000",
        webhookUrl: "https://api.bangsamoro.gov.ph/webhooks",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleToggle = (name: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: !prev[name as keyof typeof prev],
        }));
    };

    const handleSaveChanges = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSaveSuccess(true);
        setIsSaving(false);
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    const SettingField = ({ label, name, type = "text", help }: { label: string; name: string; type?: string; help?: string }) => (
        <div className="space-y-2">
            <Label htmlFor={name} className="text-slate-700 font-medium">{label}</Label>
            <Input
                id={name}
                name={name}
                type={type}
                value={formData[name as keyof typeof formData] as string}
                onChange={handleInputChange}
                className="border-slate-200"
            />
            {help && <p className="text-xs text-slate-500">{help}</p>}
        </div>
    );

    const SettingToggle = ({ label, name, help }: { label: React.ReactNode; name: string; help?: string }) => (
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div>
                <Label className="text-slate-700 font-medium">{label}</Label>
                {help && <p className="text-xs text-slate-500 mt-1">{help}</p>}
            </div>
            <Switch
                checked={formData[name as keyof typeof formData] as boolean}
                onCheckedChange={() => handleToggle(name)}
            />
        </div>
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-heading text-slate-900">System Settings</h1>
                <p className="text-slate-500 mt-1">Configure platform settings, security, and integrations.</p>
            </div>

            <Alert className="border-amber-200 bg-amber-50">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800 ml-2">
                    Changing system settings affects all users and entities. Review changes carefully before saving.
                </AlertDescription>
            </Alert>

            {saveSuccess && (
                <Alert className="border-emerald-200 bg-emerald-50">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <AlertDescription className="text-emerald-800 ml-2">Settings saved successfully.</AlertDescription>
                </Alert>
            )}

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-slate-100">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="storage">Storage</TabsTrigger>
                    <TabsTrigger value="api">API</TabsTrigger>
                </TabsList>

                {/* General Settings */}
                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Settings</CardTitle>
                            <CardDescription>Configure basic platform information and modes.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <SettingField name="platformName" label="Platform Name" help="Display name across all interfaces." />
                            <Separator />
                            <SettingField name="supportEmail" label="Support Email" type="email" help="Contact email displayed to users." />
                            <Separator />
                            <SettingToggle name="maintenanceMode" label="Maintenance Mode" help="Restrict access while performing updates." />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Security Settings */}
                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>Manage session, password, and authentication policies.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="sessionTimeout" className="text-slate-700 font-medium">Session Timeout (minutes)</Label>
                                <select
                                    id="sessionTimeout"
                                    name="sessionTimeout"
                                    value={formData.sessionTimeout}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                >
                                    <option value="15">15 minutes</option>
                                    <option value="30">30 minutes</option>
                                    <option value="60">1 hour</option>
                                    <option value="120">2 hours</option>
                                </select>
                                <p className="text-xs text-slate-500">Automatically log out users after inactivity.</p>
                            </div>
                            <Separator />
                            <div className="space-y-3">
                                <Label className="text-slate-700 font-medium">Password Policy</Label>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <div className="flex gap-2"><span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0 mt-0.5"></span>Minimum 12 characters</div>
                                    <div className="flex gap-2"><span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0 mt-0.5"></span>Uppercase, lowercase, numbers, special chars</div>
                                </div>
                            </div>
                            <Separator />
                            <SettingToggle name="twoFactorAuth" label={<span className="flex gap-2 items-center"><Lock className="h-4 w-4" />Two-Factor Authentication</span>} help="Require 2FA for admin accounts." />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Email Configuration */}
                <TabsContent value="email">
                    <Card>
                        <CardHeader>
                            <CardTitle>Email Configuration</CardTitle>
                            <CardDescription>SMTP settings and email delivery.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex gap-3">
                                    <Mail className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-slate-700">SMTP Configuration</p>
                                        <div className="mt-2 space-y-1 text-xs text-slate-600 font-mono">
                                            <p>Host: smtp.bangsamoro.gov.ph | Port: 587 (TLS)</p>
                                            <p>Username: ••••••••••••••••</p>
                                            <p>Password: ••••••••••••••••</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">Test Email</Button>
                                <Button variant="ghost" className="text-emerald-600 hover:bg-emerald-50">Edit SMTP</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Storage & Limits */}
                <TabsContent value="storage">
                    <Card>
                        <CardHeader>
                            <CardTitle>Storage & Limits</CardTitle>
                            <CardDescription>File upload limits and storage usage.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <SettingField name="maxFileSize" label="Max File Upload Size (MB)" type="number" help="Maximum file size for uploads." />
                            <Separator />
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <Label className="flex gap-2 items-center text-slate-700 font-medium"><HardDrive className="h-4 w-4" />Storage Usage</Label>
                                    <span className="text-sm font-semibold">2.4 TB / 5 TB</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2.5"><div className="bg-emerald-600 h-2.5 rounded-full w-[48%]"></div></div>
                                <p className="text-xs text-slate-500">48% of available storage in use.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-blue-50 rounded-lg"><p className="text-xs text-blue-600 font-medium">Documents</p><p className="text-lg font-bold text-blue-900">1.2 TB</p></div>
                                <div className="p-3 bg-amber-50 rounded-lg"><p className="text-xs text-amber-600 font-medium">Media Files</p><p className="text-lg font-bold text-amber-900">1.2 TB</p></div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* API Settings */}
                <TabsContent value="api">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Settings</CardTitle>
                            <CardDescription>API rate limits and webhook integrations.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="apiRateLimit" className="flex gap-2 items-center text-slate-700 font-medium"><Zap className="h-4 w-4" />API Rate Limit (req/hour)</Label>
                                <Input
                                    id="apiRateLimit"
                                    name="apiRateLimit"
                                    type="number"
                                    value={formData.apiRateLimit}
                                    onChange={handleInputChange}
                                    className="border-slate-200"
                                />
                                <p className="text-xs text-slate-500">Maximum requests per hour per API key.</p>
                            </div>
                            <Separator />
                            <SettingField name="webhookUrl" label="Webhook URL" type="url" help="Endpoint for system event notifications." />
                            <Separator />
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-medium text-slate-700">User Registration Events</p>
                                        <p className="text-xs text-slate-500">Triggered on new user signup</p>
                                    </div>
                                    <Badge>Active</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-3">
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50">Cancel</Button>
                <Button onClick={handleSaveChanges} disabled={isSaving} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    {isSaving ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </div>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">{children}</span>;
}
