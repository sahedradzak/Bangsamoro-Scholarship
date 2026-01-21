'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, FileText, GraduationCap, MoreVertical, ArrowRight, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const VERIFICATION_REQUESTS = [
  { id: "ver-1", type: "Enrollment", icon: GraduationCap, student: "Maria Santos", program: "BS Nursing", year: "2nd Year", entity: "MBHTE", date: "Jan 18, 2026", status: "pending" },
  { id: "ver-2", type: "Grades", icon: FileText, student: "Ahmed Hassan", program: "BS Engineering", year: "3rd Year", entity: "MOST", date: "Jan 17, 2026", status: "pending" },
  { id: "ver-3", type: "Document", icon: FileText, student: "Fatima Abdullah", program: "BS IT", year: "4th Year", entity: "CHED", date: "Jan 16, 2026", status: "in_progress", assignedTo: "Registrar Staff" },
  { id: "ver-4", type: "Enrollment", icon: GraduationCap, student: "Juan Dela Cruz", program: "BS Civil Engineering", year: "1st Year", entity: "MBHTE", date: "Jan 15, 2026", status: "in_progress", assignedTo: "Admin Officer" },
  { id: "ver-5", type: "Grades", icon: FileText, student: "Sofia Rodriguez", program: "BS Education", year: "2nd Year", entity: "CHED", date: "Jan 14, 2026", status: "pending" },
  { id: "ver-6", type: "Enrollment", icon: GraduationCap, student: "Hassan Ali", program: "BS IT", year: "3rd Year", entity: "MOST", date: "Jan 13, 2026", status: "pending" },
  { id: "ver-7", type: "Document", icon: FileText, student: "Maria Clara", program: "BS Accountancy", year: "4th Year", entity: "MBHTE", date: "Jan 12, 2026", status: "completed" },
  { id: "ver-8", type: "Grades", icon: FileText, student: "Carlos Mendoza", program: "BS Hospitality", year: "2nd Year", entity: "CHED", date: "Jan 11, 2026", status: "completed" },
  { id: "ver-9", type: "Enrollment", icon: GraduationCap, student: "Aisha Mohammad", program: "BS Nursing", year: "1st Year", entity: "MOST", date: "Jan 10, 2026", status: "in_progress", assignedTo: "Health Services" },
  { id: "ver-10", type: "Document", icon: FileText, student: "Rafael Santos", program: "BS Engineering", year: "2nd Year", entity: "CHED", date: "Jan 09, 2026", status: "pending" },
  { id: "ver-11", type: "Grades", icon: FileText, student: "Leah Gonzales", program: "BS Medicine", year: "3rd Year", entity: "MBHTE", date: "Jan 08, 2026", status: "pending" },
  { id: "ver-12", type: "Enrollment", icon: GraduationCap, student: "Omar Hassan", program: "BS Law", year: "4th Year", entity: "MOST", date: "Jan 07, 2026", status: "completed" },
];

const getStatusColor = (status: string) => {
  const colors = { pending: "bg-amber-50 text-amber-700", in_progress: "bg-blue-50 text-blue-700", completed: "bg-emerald-50 text-emerald-700" };
  return colors[status as keyof typeof colors] || "bg-slate-50 text-slate-700";
};

const getStatusBar = (status: string) => {
  const bars = { pending: "bg-amber-500", in_progress: "bg-blue-500", completed: "bg-emerald-500" };
  return bars[status as keyof typeof bars] || "bg-slate-500";
};

export default function VerificationQueuePage() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedRequests, setSelectedRequests] = useState<Set<string>>(new Set());

  const counts = {
    pending: VERIFICATION_REQUESTS.filter(r => r.status === "pending").length,
    in_progress: VERIFICATION_REQUESTS.filter(r => r.status === "in_progress").length,
    completed: VERIFICATION_REQUESTS.filter(r => r.status === "completed").length,
  };

  const filteredRequests = selectedTab === "all" ? VERIFICATION_REQUESTS : VERIFICATION_REQUESTS.filter(r => r.status === selectedTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">Verification Queue</h1>
          <p className="text-slate-500">Manage verification requests and documents</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shadow-none border-slate-200"><Filter className="h-4 w-4 mr-2" /> Export</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">Assign Task</Button>
        </div>
      </div>

      <Card className="p-4 border-none shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search by student name..." className="pl-9 bg-slate-50 border-none shadow-none" />
          </div>
          <Select>
            <SelectTrigger className="bg-slate-50 border-none shadow-none"><SelectValue placeholder="Request Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="enrollment">Enrollment</SelectItem>
              <SelectItem value="grades">Grades</SelectItem>
              <SelectItem value="document">Document</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="bg-slate-50 border-none shadow-none"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Input type="date" className="bg-slate-50 border-none shadow-none" />
        </div>
      </Card>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <Card className="p-0 border-none shadow-sm bg-white overflow-hidden">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent px-6 py-3 font-bold text-slate-600 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-emerald-50/50">All ({VERIFICATION_REQUESTS.length})</TabsTrigger>
            <TabsTrigger value="pending" className="rounded-none border-b-2 border-transparent px-6 py-3 font-bold text-slate-600 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-emerald-50/50">Pending ({counts.pending})</TabsTrigger>
            <TabsTrigger value="in_progress" className="rounded-none border-b-2 border-transparent px-6 py-3 font-bold text-slate-600 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-emerald-50/50">In Progress ({counts.in_progress})</TabsTrigger>
            <TabsTrigger value="completed" className="rounded-none border-b-2 border-transparent px-6 py-3 font-bold text-slate-600 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700 data-[state=active]:bg-emerald-50/50">Completed ({counts.completed})</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="space-y-3 p-4 m-0">
            {filteredRequests.map((request) => {
              const TypeIcon = request.icon;
              return (
                <Card key={request.id} className="group hover:shadow-md transition-all border-none shadow-sm overflow-hidden bg-white">
                  <div className="flex items-stretch h-full">
                    <div className={cn("w-1.5 shrink-0", getStatusBar(request.status))}></div>
                    <div className="flex-1 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <input type="checkbox" checked={selectedRequests.has(request.id)} onChange={() => { const s = new Set(selectedRequests); s.has(request.id) ? s.delete(request.id) : s.add(request.id); setSelectedRequests(s); }} className="w-4 h-4 rounded cursor-pointer accent-emerald-600" />
                          <div className="bg-slate-100 p-2.5 rounded-lg text-slate-600"><TypeIcon className="h-4 w-4" /></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{request.type}</span>
                              <Badge className={cn("text-[10px] font-bold uppercase tracking-widest leading-none px-2", getStatusColor(request.status))}>{request.status.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}</Badge>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{request.student}</h3>
                            <div className="flex flex-wrap gap-3 text-xs">
                              <span className="font-semibold text-slate-600">{request.program}</span>
                              <span className="text-slate-500">{request.year}</span>
                              <span className="text-slate-500">{request.entity}</span>
                              <span className="text-slate-400">{request.date}</span>
                              {request.assignedTo && <span className="text-blue-600 font-medium">• {request.assignedTo}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <Button size="sm" variant="ghost" className="h-9 px-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 font-bold text-xs">View <ArrowRight className="h-3 w-3 ml-2" /></Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400"><MoreVertical className="h-4 w-4" /></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Card>
      </Tabs>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">Showing {filteredRequests.length} of {VERIFICATION_REQUESTS.length} requests</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="shadow-none border-slate-200">Previous</Button>
          <Button variant="outline" size="sm" className="shadow-none border-slate-200">Next</Button>
        </div>
      </div>
    </div>
  );
}
