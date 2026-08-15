import { ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Badge, Button, Card } from "../ui";

const tone = { Saved:"neutral", Applied:"blue", Screening:"purple", Interview:"amber", Offer:"green", Rejected:"red" };
export default function ApplicationTable({ applications, onOpen }) {
  return <Card className="overflow-hidden">
    <div className="hidden overflow-x-auto md:block">
      <table className="w-full min-w-[760px] text-left">
        <thead><tr className="border-b border-zinc-200 text-[11px] font-medium text-zinc-500 dark:border-zinc-800">{["Role","Company","Status","Applied","Salary",""].map((h,i)=><th key={i} className="px-4 py-3">{h}</th>)}</tr></thead>
        <tbody>{applications.map(app=><tr key={app.id} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/70 dark:border-zinc-900 dark:hover:bg-zinc-900/40">
          <td className="px-4 py-3"><div className="font-medium text-xs">{app.title}</div><div className="mt-1 text-[10px] text-zinc-500">{app.location}</div></td>
          <td className="px-4 py-3"><div className="flex items-center gap-2 text-xs"><div className={`grid h-7 w-7 place-items-center rounded-md text-[9px] font-bold text-white ${app.color}`}>{app.company[0]}</div>{app.company}</div></td>
          <td className="px-4 py-3"><Badge tone={tone[app.status]}>{app.status}</Badge></td>
          <td className="px-4 py-3 text-xs text-zinc-500">{app.applied}</td>
          <td className="px-4 py-3 text-xs text-zinc-600 dark:text-zinc-400">{app.salary}</td>
          <td className="px-4 py-3 text-right"><Button variant="ghost" size="sm" onClick={()=>onOpen(app)}><ArrowUpRight size={14}/></Button></td>
        </tr>)}</tbody>
      </table>
    </div>
    <div className="divide-y divide-zinc-100 md:hidden dark:divide-zinc-900">{applications.map(app=><button key={app.id} onClick={()=>onOpen(app)} className="block w-full p-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900/50"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold">{app.title}</p><p className="mt-1 text-[11px] text-zinc-500">{app.company} · {app.location}</p></div><Badge tone={tone[app.status]}>{app.status}</Badge></div></button>)}</div>
  </Card>;
}