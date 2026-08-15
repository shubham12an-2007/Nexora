import { NavLink } from "react-router-dom";
import { BarChart3, BriefcaseBusiness, Building2, CalendarDays, FileText, LayoutDashboard, Settings, Sparkles, X } from "lucide-react";
import { cn } from "../ui";

const items = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard },
  { label: "Applications", to: "/applications", icon: BriefcaseBusiness },
  { label: "Jobs", to: "/jobs", icon: Sparkles },
  { label: "Companies", to: "/companies", icon: Building2 },
  { label: "Interviews", to: "/interviews", icon: CalendarDays },
  { label: "Resumes", to: "/resumes", icon: FileText },
  { label: "Analytics", to: "/analytics", icon: BarChart3 }
];

export default function Sidebar({ open, onClose }) {
  return <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-200 bg-white transition-transform dark:border-zinc-800 dark:bg-zinc-950 lg:static lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
    <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-5 dark:border-zinc-800">
      <NavLink to="/dashboard" className="flex items-center gap-2" onClick={onClose}>
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">N</div>
        <span className="text-[15px] font-bold tracking-tight">nexora</span>
      </NavLink>
      <button className="lg:hidden text-zinc-400" onClick={onClose}><X size={18}/></button>
    </div>
    <div className="flex-1 overflow-y-auto px-3 py-5">
      <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Workspace</p>
      <nav className="space-y-1">
        {items.map(({label,to,icon:Icon}) => <NavLink key={to} to={to} onClick={onClose} className={({isActive})=>cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition", isActive ? "bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:hover:bg-zinc-900/70 dark:hover:text-zinc-200")}>
          <Icon size={17} strokeWidth={1.8}/>{label}
        </NavLink>)}
      </nav>
      <p className="px-2 pb-2 pt-7 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Account</p>
      <NavLink to="/settings" onClick={onClose} className={({isActive})=>cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium", isActive ? "bg-zinc-100 dark:bg-zinc-900" : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900")}>
        <Settings size={17}/><span>Settings</span>
      </NavLink>
    </div>
    <div className="m-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="flex items-center gap-2"><Sparkles size={15}/><span className="text-xs font-semibold">AI Career Assistant</span></div>
      <p className="mt-1.5 text-[11px] leading-4 text-zinc-500">Match resumes to roles and prepare smarter.</p>
      <NavLink to="/analytics" className="mt-3 block text-[11px] font-semibold text-zinc-900 dark:text-white">Explore AI →</NavLink>
    </div>
  </aside>;
}