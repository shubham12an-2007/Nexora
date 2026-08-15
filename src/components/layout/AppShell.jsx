import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <div className="flex min-h-screen bg-[#f7f7f8] text-zinc-900 dark:bg-[#090a0c] dark:text-zinc-100">
    <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} />
    {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={()=>setSidebarOpen(false)}/>}
    <div className="min-w-0 flex-1">
      <Topbar onMenu={()=>setSidebarOpen(true)} />
      <main className="mx-auto max-w-[1500px] p-4 md:p-6 lg:p-8"><Outlet /></main>
    </div>
  </div>;
}