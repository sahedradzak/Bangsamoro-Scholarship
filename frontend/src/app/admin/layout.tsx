"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Building2,
    Users,
    ShieldAlert,
    Ticket,
    BarChart3,
    ScrollText,
    Settings,
    Bell,
    Search,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Tenants", href: "/admin/tenants", icon: Building2 },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Moderation", href: "/admin/moderation", icon: ShieldAlert },
    { name: "Support", href: "/admin/support", icon: Ticket },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Audit Logs", href: "/admin/audit", icon: ScrollText },
    { name: "System Settings", href: "/admin/settings", icon: Settings },
];

export default function SuperAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-50 px-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="bg-emerald-900 p-1.5 rounded-lg">
                            <Settings className="h-5 w-5 text-emerald-100" />
                        </div>
                        <span className="font-bold text-slate-900 hidden sm:inline-block">MoroTech <span className="text-emerald-700">Admin</span></span>
                    </Link>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="hidden md:flex items-center relative max-w-xs">
                        <Search className="absolute left-3 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Quick search..."
                            className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all w-64"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5 text-slate-600" />
                        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </Button>
                    <Avatar className="h-8 w-8 ring-2 ring-emerald-100">
                        <AvatarImage src="/avatars/admin.jpg" />
                        <AvatarFallback className="bg-emerald-900 text-white text-xs">SA</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            <div className="flex flex-1 relative">
                {/* Sidebar Desktop */}
                <aside className="hidden lg:flex w-64 border-r border-slate-200 bg-white flex-col sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
                    <nav className="p-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                                        isActive
                                            ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100/50"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <item.icon className={cn("h-4 w-4", isActive ? "text-emerald-600" : "text-slate-400")} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-auto p-4 border-t border-slate-100">
                        <div className="bg-emerald-900 rounded-xl p-4 text-emerald-50">
                            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">System Status</p>
                            <div className="flex items-center justify-between text-xs">
                                <span>Uptime</span>
                                <span className="font-bold">99.9%</span>
                            </div>
                            <div className="mt-2 h-1 bg-emerald-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-400 w-[99.9%]"></div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Sidebar Mobile */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                        <aside
                            className="w-64 bg-white h-full shadow-2xl flex flex-col py-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="px-4 space-y-1">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg",
                                                isActive
                                                    ? "bg-emerald-50 text-emerald-700"
                                                    : "text-slate-600 hover:bg-slate-50"
                                            )}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </aside>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
