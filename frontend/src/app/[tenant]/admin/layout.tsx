"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    FileText,
    Users,
    CreditCard,
    BarChart3,
    Settings,
    LogOut,
    GraduationCap,
    Bell
} from "lucide-react";

export default function TenantAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const params = useParams();
    const tenant = params.tenant as string;

    const NAV_ITEMS = [
        { label: "Dashboard", href: `/${tenant}/admin`, icon: LayoutDashboard },
        { label: "Programs", href: `/${tenant}/admin/programs`, icon: FileText },
        { label: "Applications", href: `/${tenant}/admin/applications`, icon: Users },
        { label: "Scholars", href: `/${tenant}/admin/scholars`, icon: GraduationCap },
        { label: "Disbursements", href: `/${tenant}/admin/disbursements`, icon: CreditCard },
        { label: "Reports", href: `/${tenant}/admin/reports`, icon: BarChart3 },
        { label: "Staff", href: `/${tenant}/admin/staff`, icon: Users },
        { label: "Settings", href: `/${tenant}/admin/settings`, icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white">
                        {tenant.toUpperCase().slice(0, 2)}
                    </div>
                    <div>
                        <h1 className="font-bold text-sm tracking-wide">ADMIN PORTAL</h1>
                        <p className="text-xs text-slate-400 uppercase">{tenant} Government</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={`w-full justify-start gap-3 mb-1 ${isActive
                                            ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                            : "text-slate-300 hover:text-white hover:bg-slate-800"
                                        }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </Button>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center">
                            <Users className="h-4 w-4 text-slate-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">Admin User</p>
                            <p className="text-xs text-slate-400 truncate">admin@{tenant}.gov.ph</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-red-900/20">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Mobile Header (Visible only on small screens) */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:hidden">
                    <div className="font-bold text-lg text-slate-900">{tenant.toUpperCase()} Admin</div>
                    <Button variant="ghost" size="icon">
                        <LayoutDashboard className="h-5 w-5" />
                    </Button>
                </header>

                {/* Top Bar (Desktop) */}
                <header className="bg-white border-b border-gray-200 h-16 hidden md:flex items-center justify-end px-6 space-x-4">
                    <Button variant="ghost" size="icon" className="relative text-gray-500">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
                    </Button>
                </header>

                <div className="flex-1 p-6 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
