
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    CreditCard,
    FileText,
    Home,
    LayoutDashboard,
    LogOut,
    Mail,
    Menu,
    Settings,
    User,
    Bell,
    Search
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "My Applications",
        href: "/dashboard/applications",
        icon: FileText,
    },
    {
        title: "Saved Scholarships",
        href: "/dashboard/saved",
        icon: Home,
    },
    {
        title: "Documents",
        href: "/dashboard/documents",
        icon: CreditCard, // Using CreditCard as a placeholder for Identity/Docs
    },
    {
        title: "Messages",
        href: "/dashboard/messages",
        icon: Mail,
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: User,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen flex-col md:flex-row bg-slate-50">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b">
                <Link href="/" className="font-bold text-xl text-emerald-800">Bangsamoro <span className="text-secondary">Scholarship</span> Portal</Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {sidebarNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                        ? "bg-emerald-100 text-emerald-900"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.title}
                                </Link>
                            ))}
                            <div className="mt-auto pt-8 border-t">
                                <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r">
                <div className="h-16 flex items-center px-6 border-b">
                    <Link href="/" className="flex items-center gap-3 group w-full overflow-hidden">
                        {/* Logo Placeholder */}
                        <div className="flex-shrink-0 w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-emerald-700 transition-colors">
                            B
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="font-bold text-base text-emerald-800 tracking-tight truncate">
                                Bangsamoro
                            </span>
                            <span className="text-[9px] uppercase font-extrabold text-secondary tracking-wider truncate">
                                Scholarship Portal
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="p-4">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-sm mb-6">
                        Browse Scholarships
                    </Button>

                    <nav className="flex flex-col gap-1">
                        {sidebarNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${pathname === item.href
                                    ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <item.icon className={`h-4 w-4 ${pathname === item.href ? "text-emerald-600" : "text-slate-400"}`} />
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4 border-t bg-slate-50/50">
                    <div className="flex items-center gap-3 px-2 py-2 mb-2">
                        <Avatar className="h-9 w-9 border">
                            <AvatarImage src="/avatars/user.jpg" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-sm font-medium text-slate-900">Juan Dela Cruz</p>
                            <p className="truncate text-xs text-slate-500">juan@example.com</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-slate-500 hover:text-red-600 hover:bg-red-50">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <header className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
                    <div className="flex-1 flex justify-center max-w-2xl mx-auto">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                placeholder="Search scholarships..."
                                className="pl-10 h-10 bg-slate-50 border-slate-200 focus-visible:ring-emerald-500 rounded-full transition-all hover:bg-white"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                        <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-emerald-600 rounded-full">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </Button>
                        <div className="h-8 w-px bg-slate-200 mx-1" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-8 w-8 cursor-pointer border hover:ring-2 hover:ring-emerald-100 transition-all">
                                    <AvatarImage src="/avatars/user.jpg" alt="User" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" /> Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" /> Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50">
                                    <LogOut className="mr-2 h-4 w-4" /> Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
