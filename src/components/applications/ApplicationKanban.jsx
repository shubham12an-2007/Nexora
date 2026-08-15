import { BriefcaseBusiness, Plus } from "lucide-react";
import { Badge, Button, Card } from "../ui";

const columns = ["Saved","Applied","Screening","Interview","Offer","Rejected"];
const tone = { Saved:"neutral", Applied:"blue", Screening:"purple", Interview:"amber", Offer:"green", Rejected:"red" };
export default function ApplicationKanban({ applications, onOpen }) {
  return <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin">{columns.map(col=>{
    const items = applications.filter(a=>a.status===col);
    return <div key={col} className="w-72 shrink-0">
      <div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-xs font-semibold">{col}</span><span className="grid h-5 min-w-5 place-items-center rounded bg-zinc-200 px-1 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{items.length}</span></div><button className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white"><Plus size={15}/></button></div>
      <div className="min-h-32 space-y-2 rounded-xl bg-zinc-100/70 p-2 dark:bg-zinc-900/60">
        {items.map(app=><Card key={app.id} className="cursor-pointer p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" onClick={()=>onOpen(app)}>
          <div className="flex items-start justify-between gap-2"><div className={`grid h-7 w-7 place-items-center rounded-md text-[9px] font-bold text-white ${app.color}`}><BriefcaseBusiness size={13}/></div><Badge tone={tone[col]}>{col}</Badge></div>
          <p className="mt-3 text-xs font-semibold">{app.title}</p><p className="mt-1 text-[11px] text-zinc-500">{app.company}</p>
          <div className="mt-3 flex flex-wrap gap-1">{app.skills.slice(0,2).map(s=><span key={s} className="rounded bg-zinc-100 px-1.5 py-1 text-[9px] text-zinc-500 dark:bg-zinc-900">{s}</span>)}</div>
        </Card>)}
      </div>
    </div>;
  })}</div>;
}