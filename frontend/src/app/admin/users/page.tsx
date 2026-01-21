import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Users,
    Search,
    Filter,
    MoreHorizontal,
    Download,
    ShieldCheck,
    UserPlus,
    Mail,
    Lock,
    Eye,
    Building2,
    GraduationCap
} from "lucide-react";
import { PLATFORM_USERS } from "@/lib/mock-data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function UserManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 font-heading">User Management</h1>
                    <p className="text-slate-500">Manage all registered users, administrators, and scholarship providers.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" className="shadow-none flex-1 sm:flex-none">
                        <Download className="h-4 w-4 mr-2" /> Export
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex-1 sm:flex-none">
                        <UserPlus className="h-4 w-4 mr-2" /> Create User
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4 flex items-center gap-4 border-none shadow-sm bg-white">
                    <div className="bg-blue-50 p-2.5 rounded-xl">
                        <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Users</p>
                        <p className="text-xl font-bold text-slate-900">12,450</p>
                    </div>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-none shadow-sm bg-white">
                    <div className="bg-emerald-50 p-2.5 rounded-xl">
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Admins</p>
                        <p className="text-xl font-bold text-slate-900">8</p>
                    </div>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-none shadow-sm bg-white">
                    <div className="bg-amber-50 p-2.5 rounded-xl">
                        <Users className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Entity Staff</p>
                        <p className="text-xl font-bold text-slate-900">52</p>
                    </div>
                </Card>
                <Card className="p-4 flex items-center gap-4 border-none shadow-sm bg-white">
                    <div className="bg-purple-50 p-2.5 rounded-xl">
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Applicants</p>
                        <p className="text-xl font-bold text-slate-900">12,390</p>
                    </div>
                </Card>
            </div>

            <Card className="border-none shadow-sm overflow-hidden bg-white">
                <CardHeader className="p-4 border-b border-slate-50 flex flex-col md:flex-row gap-4 justify-between bg-white">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search by name, email, or ID..." className="pl-9 bg-slate-50 border-none shadow-none" />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Filter className="h-3.5 w-3.5 mr-2" /> Role: All
                        </Button>
                        <Button variant="outline" size="sm" className="shadow-none border-slate-200">
                            <Filter className="h-3.5 w-3.5 mr-2" /> Tenant: All
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">User</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Role</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Tenant</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Last Active</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {PLATFORM_USERS.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                                                    <AvatarImage src={user.avatar} />
                                                    <AvatarFallback className="bg-emerald-100 text-emerald-800 font-bold">{user.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{user.name}</p>
                                                    <p className="text-xs text-slate-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <Badge className={cn(
                                                "text-[10px] font-bold uppercase tracking-wider",
                                                user.role === 'Super Admin' ? "bg-red-50 text-red-700" :
                                                    user.role === 'Staff' ? "bg-amber-50 text-amber-700" :
                                                        "bg-blue-50 text-blue-700"
                                            )}>
                                                {user.role}
                                            </Badge>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                {user.tenant === 'Platform' ? (
                                                    <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                                                ) : (
                                                    <Building2 className="h-3.5 w-3.5 text-slate-400" />
                                                )}
                                                <span className="text-sm text-slate-600">{user.tenant}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-slate-700 font-medium">{user.lastActive}</span>
                                                <div className="flex flex-row gap-1 items-center mt-1">
                                                    <Badge className="h-1.5 w-1.5 p-0 rounded-full bg-emerald-500" />
                                                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Online</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-emerald-600" asChild>
                                                    <Link href={`/admin/users/${user.id}`}><Eye className="h-4 w-4" /></Link>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-emerald-600"><Mail className="h-4 w-4" /></Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-amber-600"><Lock className="h-4 w-4" /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
                <div className="p-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <p>Showing <strong>1-3</strong> of 12,450 users</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none disabled:opacity-50" disabled>Previous</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none border-emerald-200 text-emerald-700">1</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">2</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">3</Button>
                        <Button variant="outline" size="sm" className="h-8 px-3 shadow-none">Next</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

