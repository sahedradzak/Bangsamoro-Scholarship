"use client";

import { useState } from "react";
import { FileText, Video, FileStack, Link as LinkIcon, Download, Eye, Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RESOURCES = [
  { id: "r1", title: "Scholarship Application Guide", type: "document", category: "Application", description: "Step-by-step guide to completing your scholarship application.", downloads: 1234, fileType: "PDF" },
  { id: "r2", title: "Academic Writing Workshop Recording", type: "video", category: "Academic", description: "Recording of the recent academic writing workshop.", views: 567, duration: "45 mins" },
  { id: "r3", title: "Budget Planner Template", type: "template", category: "Finance", description: "Excel template for managing your scholarship allowance.", downloads: 890, fileType: "XLSX" },
  { id: "r4", title: "Research Proposal Template", type: "template", category: "Academic", description: "Standard format for research proposals.", downloads: 456, fileType: "DOCX" },
  { id: "r5", title: "Career Development Portal", type: "link", category: "Career", description: "External resource with job listings and career guidance.", views: 2100 },
  { id: "r6", title: "Financial Planning Webinar", type: "video", category: "Finance", description: "Comprehensive guide to managing your finances as a scholar.", views: 789, duration: "60 mins" },
];

const FEATURED = RESOURCES.slice(0, 2);

export default function LearningResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "template":
        return <FileStack className="h-5 w-5" />;
      case "link":
        return <LinkIcon className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Application: "bg-blue-100 text-blue-800",
      Academic: "bg-emerald-100 text-emerald-800",
      Finance: "bg-amber-100 text-amber-800",
      Career: "bg-indigo-100 text-indigo-800",
    };
    return colors[category] || "bg-slate-100 text-slate-800";
  };

  const filtered = RESOURCES.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || resource.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const ResourceCard = ({ resource }: { resource: typeof RESOURCES[0] }) => (
    <Card className="flex flex-col h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            {getIcon(resource.type)}
          </div>
          <Badge variant="secondary" className={`text-xs ${getCategoryColor(resource.category)}`}>
            {resource.category}
          </Badge>
        </div>
        <h3 className="font-semibold text-slate-900 mt-3 line-clamp-2">{resource.title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 space-y-3">
        <p className="text-sm text-slate-600 line-clamp-2">{resource.description}</p>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          {resource.type === "video" ? (
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" /> {resource.views?.toLocaleString()} views
            </span>
          ) : resource.type === "link" ? (
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" /> {resource.views?.toLocaleString()} views
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Download className="h-3 w-3" /> {resource.downloads?.toLocaleString()} downloads
            </span>
          )}
          {resource.duration && <span>{resource.duration}</span>}
          {resource.fileType && <span>{resource.fileType}</span>}
        </div>
        <Button className="w-full mt-auto bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
          {resource.type === "link" ? "Visit Resource" : resource.type === "video" ? "Watch" : "Download"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Learning Resources</h1>
        <p className="text-slate-600 mt-1">Access documents, videos, templates, and external resources to support your learning journey.</p>
      </div>

      {/* Featured Section */}
      {FEATURED.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      )}

      {/* Search & Filters */}
      <section className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-slate-300"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-slate-100 border-b border-slate-200 rounded-none w-full justify-start h-auto p-0">
            <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600">
              All
            </TabsTrigger>
            <TabsTrigger value="document" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600">
              Documents
            </TabsTrigger>
            <TabsTrigger value="video" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600">
              Videos
            </TabsTrigger>
            <TabsTrigger value="template" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600">
              Templates
            </TabsTrigger>
            <TabsTrigger value="link" className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-600">
              External Links
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {filtered.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500 font-medium">No resources found</p>
                <p className="text-slate-400 text-sm mt-1">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
