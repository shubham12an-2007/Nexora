import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card } from "../ui";

export default function StatCard({ icon: Icon, label, value, change, positive=true }) {
  return <Card className="p-4">
    <div className="flex items-center justify-between"><span className="text-xs font-medium text-zinc-500">{label}</span><div className="rounded-lg bg-zinc-100 p-2 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"><Icon size={15}/></div></div>
    <div className="mt-4 flex items-end justify-between"><span className="text-2xl font-semibold tracking-tight">{value}</span><span className={`flex items-center text-[11px] font-semibold ${positive ? "text-emerald-600" : "text-red-500"}`}>{positive ? <ArrowUpRight size={13}/> : <ArrowDownRight size={13}/>} {change}</span></div>
  </Card>;
}