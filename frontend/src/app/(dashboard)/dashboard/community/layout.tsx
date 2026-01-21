import Link from "next/link";
import { Users, User, FileText, Calendar, MessageSquare } from "lucide-react";

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-emerald-900">Community</h1>
                    <p className="text-muted-foreground">Connect with fellow scholars, find mentors, and join groups.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        <Link
                            href="/dashboard/community"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <FileText className="h-4 w-4" />
                            Feed
                        </Link>
                        <Link
                            href="/dashboard/community/scholars"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <Users className="h-4 w-4" />
                            Scholar Directory
                        </Link>
                        <Link
                            href="/dashboard/community/groups"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <Users className="h-4 w-4" />
                            Groups
                        </Link>
                        <Link
                            href="/dashboard/community/events"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <Calendar className="h-4 w-4" />
                            Events
                        </Link>
                        <Link
                            href="/dashboard/messages"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <MessageSquare className="h-4 w-4" />
                            Messages
                        </Link>
                    </nav>

                    <div className="mt-8 hidden lg:block p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                        <h3 className="font-semibold text-emerald-900 mb-2">Community Guidelines</h3>
                        <p className="text-xs text-slate-600 mb-4">
                            Be respectful and supportive. Connect with others to share knowledge and opportunities.
                        </p>
                        <button className="text-xs text-emerald-700 font-medium hover:underline">
                            Read Guidelines
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
