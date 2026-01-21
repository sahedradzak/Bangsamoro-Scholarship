import Link from "next/link";
import { BookOpen, MonitorPlay, Calendar, Users, LayoutDashboard } from "lucide-react";

export default function LearningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-emerald-900">Learning Center</h1>
                    <p className="text-muted-foreground">Expand your skills with courses, workshops, and mentorship.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        <Link
                            href="/dashboard/learning"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/learning/courses"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <BookOpen className="h-4 w-4" />
                            Course Catalog
                        </Link>
                        <Link
                            href="/dashboard/learning/my-courses"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <MonitorPlay className="h-4 w-4" />
                            My Learning
                        </Link>
                        <Link
                            href="/dashboard/learning/mentorship"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <Users className="h-4 w-4" />
                            Mentorship
                        </Link>
                        <Link
                            href="/dashboard/learning/resources"
                            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                        >
                            <Calendar className="h-4 w-4" />
                            Workshops
                        </Link>
                    </nav>

                    <div className="mt-8 hidden lg:block p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                        <h3 className="font-semibold text-emerald-900 mb-2">Need Help?</h3>
                        <p className="text-xs text-slate-600 mb-4">
                            Contact our learning support team if you have trouble accessing courses.
                        </p>
                        <button className="text-xs text-emerald-700 font-medium hover:underline">
                            Contact Support
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
