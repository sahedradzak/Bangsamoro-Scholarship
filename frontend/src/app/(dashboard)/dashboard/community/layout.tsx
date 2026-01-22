import Link from "next/link";
import { Users, User, FileText, Calendar, MessageSquare } from "lucide-react";

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col space-y-8 max-w-6xl mx-auto">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-emerald-900">Community</h1>
                <p className="text-slate-500 text-lg">Connect with fellow scholars, find mentors, and join groups.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Sidebar Navigation */}
                <aside className="lg:col-span-3 flex flex-col gap-6 sticky top-24">
                    <nav className="flex lg:flex-col gap-1 bg-white p-2 rounded-xl border shadow-sm overflow-x-auto lg:overflow-visible">
                        <Link
                            href="/dashboard/community"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            <FileText className="h-4 w-4" />
                            Feed
                        </Link>
                        <Link
                            href="/dashboard/community/scholars"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            <Users className="h-4 w-4" />
                            Scholar Directory
                        </Link>
                        <Link
                            href="/dashboard/community/groups"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            <Users className="h-4 w-4" />
                            Groups
                        </Link>
                        <Link
                            href="/dashboard/community/events"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            <Calendar className="h-4 w-4" />
                            Events
                        </Link>
                        <Link
                            href="/dashboard/messages"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            <MessageSquare className="h-4 w-4" />
                            Messages
                        </Link>
                    </nav>

                    <div className="hidden lg:block p-5 bg-gradient-to-br from-emerald-50 to-white rounded-xl border border-emerald-100 shadow-sm">
                        <h3 className="font-bold text-emerald-900 mb-2">Community Guidelines</h3>
                        <p className="text-xs leading-relaxed text-slate-600 mb-4">
                            Be respectful and supportive. Connect with others to share knowledge and opportunities.
                        </p>
                        <button className="text-xs text-emerald-700 font-bold hover:underline">
                            Read Guidelines
                        </button>
                    </div>
                </aside>

                {/* Main Content Area (Feed) */}
                <main className="lg:col-span-9 xl:col-span-8 flex flex-col gap-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
