"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Save, ArrowLeft, Upload } from "lucide-react";

export default function BrandingSettingsPage() {
    const params = useParams();
    const router = useRouter();
    const tenant = params.tenant as string;

    const [logo, setLogo] = useState<string | null>(null);
    const [primaryColor, setPrimaryColor] = useState("#059669");
    const [secondaryColor, setSecondaryColor] = useState("#10b981");
    const [loading, setLoading] = useState(false);

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogo(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            // TODO: Implement API call to save branding settings
            console.log("Saving branding:", { logo, primaryColor, secondaryColor });
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Branding settings saved successfully!");
        } catch (error) {
            console.error("Error saving branding:", error);
            alert("Failed to save branding settings");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header with Back Link */}
            <div className="flex items-center gap-4">
                <Link href={`/${tenant}/admin/settings`}>
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Settings
                    </Button>
                </Link>
            </div>

            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Branding Settings</h2>
                <p className="text-gray-500">Customize your organization's appearance and colors.</p>
            </div>

            {/* Logo Upload Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Logo</CardTitle>
                    <CardDescription>Upload your organization's logo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-6">
                        <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 flex-shrink-0">
                            {logo ? (
                                <img src={logo} alt="Logo" className="h-full w-full object-contain p-2" />
                            ) : (
                                <span className="text-gray-400 text-xs text-center px-2">Logo Preview</span>
                            )}
                        </div>
                        <div className="flex-1 space-y-3">
                            <div>
                                <Label htmlFor="logo-upload" className="cursor-pointer">
                                    <Button asChild variant="outline">
                                        <span>
                                            <Upload className="mr-2 h-4 w-4" />
                                            Choose File
                                        </span>
                                    </Button>
                                    <input
                                        id="logo-upload"
                                        type="file"
                                        accept="image/png,image/jpeg"
                                        onChange={handleLogoUpload}
                                        className="hidden"
                                    />
                                </Label>
                            </div>
                            <p className="text-xs text-gray-500">PNG or JPG format, 500x500px recommended</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Color Scheme Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Color Scheme</CardTitle>
                    <CardDescription>Customize your brand colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Primary Color */}
                        <div className="space-y-3">
                            <Label htmlFor="primary-color">Primary Color</Label>
                            <div className="flex gap-3">
                                <input
                                    type="color"
                                    id="primary-color"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    className="h-10 w-16 rounded border border-gray-300 cursor-pointer"
                                />
                                <Input
                                    type="text"
                                    value={primaryColor}
                                    onChange={(e) => setPrimaryColor(e.target.value)}
                                    placeholder="#000000"
                                    className="flex-1"
                                />
                            </div>
                        </div>

                        {/* Secondary Color */}
                        <div className="space-y-3">
                            <Label htmlFor="secondary-color">Secondary Color</Label>
                            <div className="flex gap-3">
                                <input
                                    type="color"
                                    id="secondary-color"
                                    value={secondaryColor}
                                    onChange={(e) => setSecondaryColor(e.target.value)}
                                    className="h-10 w-16 rounded border border-gray-300 cursor-pointer"
                                />
                                <Input
                                    type="text"
                                    value={secondaryColor}
                                    onChange={(e) => setSecondaryColor(e.target.value)}
                                    placeholder="#000000"
                                    className="flex-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Color Preview */}
                    <div className="pt-4">
                        <p className="text-sm font-medium mb-3">Preview</p>
                        <div className="flex gap-3">
                            <div className="h-12 w-24 rounded" style={{ backgroundColor: primaryColor }} />
                            <div className="h-12 w-24 rounded" style={{ backgroundColor: secondaryColor }} />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Public Profile Preview */}
            <Card>
                <CardHeader>
                    <CardTitle>Public Profile Preview</CardTitle>
                    <CardDescription>How your organization appears on the portal</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
                                {logo ? (
                                    <img src={logo} alt="Logo" className="h-full w-full object-contain p-2" />
                                ) : (
                                    <span className="text-xs text-gray-400">Logo</span>
                                )}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Ministry of Basic, Higher and Technical Education</p>
                                <p className="text-sm text-gray-600">MBHTE</p>
                                <div className="flex gap-2 mt-2">
                                    <span className="inline-block h-3 w-12 rounded" style={{ backgroundColor: primaryColor }} />
                                    <span className="inline-block h-3 w-12 rounded" style={{ backgroundColor: secondaryColor }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button
                    onClick={handleSave}
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700"
                >
                    <Save className="mr-2 h-4 w-4" />
                    {loading ? "Saving..." : "Save Changes"}
                </Button>
            </div>
        </div>
    );
}
