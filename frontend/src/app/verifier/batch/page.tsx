"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Upload } from "lucide-react";

const RECENT_BATCHES = [
  { id: "b1", date: "Jan 15", filename: "batch_jan2026.csv", students: 45, status: "complete" },
  { id: "b2", date: "Jan 10", filename: "enrollment_q1.csv", students: 120, status: "complete" },
  { id: "b3", date: "Jan 5", filename: "grades_sem1.csv", students: 89, status: "complete" },
];

export default function BatchVerificationPage() {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]?.name.endsWith(".csv")) {
      setFileName(files[0].name);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDownloadTemplate = () => {
    const csvContent = "student_id,first_name,last_name,email,status\n";
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent));
    element.setAttribute("download", "batch_template.csv");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Batch Verification</h1>
        <p className="text-gray-500 mt-2">Upload and manage bulk enrollment verifications via CSV file.</p>
      </div>

      {/* Step 1: Download Template */}
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">1</span>
              Download Template
            </h2>
            <p className="text-gray-600 text-sm mt-2">Download the CSV template to get started with batch verification.</p>
          </div>
          <Button onClick={handleDownloadTemplate} className="bg-emerald-600 hover:bg-emerald-700 gap-2">
            <Download className="h-4 w-4" />
            Download Template
          </Button>
        </div>
      </Card>

      {/* Step 2: Upload File */}
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">2</span>
            Upload CSV File
          </h2>

          {/* Drag and Drop Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-emerald-500 bg-emerald-50" : "border-gray-300 bg-gray-50"
            }`}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <p className="text-gray-900 font-medium">Drag and drop your CSV file here or</p>
            <label>
              <span className="text-emerald-600 hover:text-emerald-700 cursor-pointer font-medium">Browse Files</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
            {fileName && <p className="text-sm text-emerald-600 mt-3 font-medium">Selected: {fileName}</p>}
          </div>

          {/* File Format Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Accepted format:</span> .csv (Maximum 500 rows per file)
            </p>
          </div>

          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={!fileName}>
            Upload & Verify
          </Button>
        </div>
      </Card>

      {/* Recent Batch Uploads */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Batch Uploads</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Filename</TableHead>
                <TableHead>Student Count</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {RECENT_BATCHES.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="text-gray-600">{batch.date}</TableCell>
                  <TableCell className="font-medium text-gray-900">{batch.filename}</TableCell>
                  <TableCell className="text-gray-600">{batch.students}</TableCell>
                  <TableCell>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 border capitalize">
                      {batch.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
