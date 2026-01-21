
"use client";

import { Eye, FileText, MoreVertical, Plus, Trash2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function DocumentsPage() {
    // Mock user documents
    const documents = [
        {
            id: 1,
            name: "PSA Birth Certificate",
            type: "Identification",
            size: "1.2 MB",
            dateUploaded: "Jan 12, 2026",
            status: "Verified"
        },
        {
            id: 2,
            name: "Certificate of Grades (Last Sem)",
            type: "Academic",
            size: "850 KB",
            dateUploaded: "Jan 12, 2026",
            status: "Verified"
        },
        {
            id: 3,
            name: "Barangay Residency Certificate",
            type: "Residency",
            size: "500 KB",
            dateUploaded: "Jan 14, 2026",
            status: "Pending Review"
        }
    ];

    const [isUploadOpen, setIsUploadOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Documents</h1>
                    <p className="text-slate-600">Manage your uploaded requirements for easy application.</p>
                </div>
                <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-sm">
                            <Plus className="mr-2 h-4 w-4" /> Upload Document
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Upload Document</DialogTitle>
                            <DialogDescription>
                                Select the document type and upload your file. Max size 5MB.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="doc-type">Document Type</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="id">Identification (Birth Cert, ID)</SelectItem>
                                        <SelectItem value="academic">Academic (Grades, TOR)</SelectItem>
                                        <SelectItem value="residency">Residency (Barangay Cert)</SelectItem>
                                        <SelectItem value="income">Financial (ITR, Indigency)</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="file">File</Label>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <UploadCloud className="h-8 w-8 text-slate-400 mb-2" />
                                    <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                                    <p className="text-xs text-slate-500">PDF, JPG, PNG (Max 5MB)</p>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={() => setIsUploadOpen(false)} className="bg-emerald-600">Upload</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                    <Card key={doc.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                <FileText className="h-5 w-5" />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Eye className="mr-2 h-4 w-4" /> View
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50">
                                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-2">
                                <h3 className="font-semibold text-slate-900 truncate" title={doc.name}>{doc.name}</h3>
                                <p className="text-xs text-slate-500">{doc.type}</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <Badge variant="secondary" className={
                                    doc.status === 'Verified' ? 'bg-green-100 text-green-700' :
                                        'bg-amber-100 text-amber-700'
                                }>
                                    {doc.status}
                                </Badge>
                                <span className="text-xs text-slate-400">{doc.size}</span>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-100">
                                <p className="text-xs text-slate-400">Uploaded on {doc.dateUploaded}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {/* Upload Placeholder Card */}
                <Card className="border-2 border-dashed border-slate-200 shadow-none bg-slate-50/50 hover:bg-slate-50 hover:border-emerald-300 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px]" onClick={() => setIsUploadOpen(true)}>
                    <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3 text-emerald-600">
                        <Plus className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-slate-900">Upload New</h3>
                    <p className="text-xs text-slate-500">Add document</p>
                </Card>
            </div>
        </div>
    );
}
