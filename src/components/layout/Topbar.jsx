import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function Topbar({ onMenu }) {
  const { dark, toggleTheme } = useTheme();
  const { user } = useAuth();
  return <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/90 px-4 backdrop-blur lg:px-7 dark:border-zinc-800 dark:bg-zinc-950/90">
    <div className="flex items-center gap-3">
      <button className="lg:hidden rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900" onClick={onMenu}><Menu size={19}/></button>
      <div className="hidden w-72 md:block">
        <div className="flex h-9 items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-xs text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"><Search size={15}/><span>Search anything...</span><kbd className="ml-auto rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] dark:border-zinc-700 dark:bg-zinc-950">⌘ K</kbd></div>
      </div>
      <button className="md:hidden rounded-lg p-2 text-zinc-500"><Search size={18}/></button>
    </div>
    <div className="flex items-center gap-2">
      <button onClick={toggleTheme} className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
      <button className="relative rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"><Bell size={17}/><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"/></button>
      <div className="ml-1 flex items-center gap-2 border-l border-zinc-200 pl-3 dark:border-zinc-800">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-zinc-200 dark:text-zinc-900">{user?.name?.slice(0,1) || "S"}</div>
        <div className="hidden sm:block"><p className="text-xs font-semibold">{user?.name || "Shubham"}</p><p className="text-[10px] text-zinc-500">Candidate</p></div>
      </div>
    </div>
  </header>;
}