"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Save } from "lucide-react";

export default function SettingsPage() {
    const params = useParams();
    const tenant = params.tenant as string;

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h2>
                <p className="text-gray-500">Manage entity profile and system preferences.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Organization Profile</CardTitle>
                    <CardDescription>Displayed on public scholarship listings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Organization Name</Label>
                            <Input id="name" defaultValue="Ministry of Basic, Higher and Technical Education" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="acronym">Acronym</Label>
                            <Input id="acronym" defaultValue="MBHTE" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="desc">About</Label>
                        <Input id="desc" defaultValue="The ministry responsible for education in the Bangsamoro region." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="website">Website URL</Label>
                        <Input id="website" defaultValue="https://mbhte.bangsamoro.gov.ph" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Branding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300 text-gray-400 hover:bg-gray-50 cursor-pointer">
                            Upload
                        </div>
                        <div>
                            <p className="text-sm font-medium">Organization Logo</p>
                            <p className="text-xs text-gray-500">Recommended 500x500px, PNG or JPG.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>
        </div>
    );
}
