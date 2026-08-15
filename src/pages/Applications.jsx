import { useMemo, useState } from "react";
import { Kanban, List, Plus } from "lucide-react";
import { Button, SearchInput, Select, SectionHeader } from "../components/ui";
import { applications as initial } from "../data/mockData";
import ApplicationTable from "../components/applications/ApplicationTable";
import ApplicationKanban from "../components/applications/ApplicationKanban";
import { useNavigate } from "react-router-dom";

export default function Applications() {
  const [view,setView]=useState("table"), [q,setQ]=useState(""), [status,setStatus]=useState("All");
  const nav=useNavigate();
  const filtered=useMemo(()=>initial.filter(a=>(status==="All"||a.status===status)&&(`${a.title} ${a.company} ${a.location}`.toLowerCase().includes(q.toLowerCase()))),[q,status]);
  return <div className="animate-float-in space-y-6"><SectionHeader title="Applications" description={`${filtered.length} opportunities in your workspace.`} action={<Button><Plus size={15}/> Add application</Button>}/>
    <div className="flex flex-col gap-3 md:flex-row"><div className="max-w-sm flex-1"><SearchInput value={q} onChange={setQ} placeholder="Search applications..."/></div><Select value={status} onChange={e=>setStatus(e.target.value)} className="w-full md:w-40"><option>All</option>{["Saved","Applied","Screening","Interview","Offer","Rejected"].map(x=><option key={x}>{x}</option>)}</Select><div className="flex h-10 rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950"><button onClick={()=>setView("table")} className={`rounded px-3 ${view==="table"?"bg-zinc-100 dark:bg-zinc-900":""}`}><List size={15}/></button><button onClick={()=>setView("kanban")} className={`rounded px-3 ${view==="kanban"?"bg-zinc-100 dark:bg-zinc-900":""}`}><Kanban size={15}/></button></div></div>
    {view==="table" ? <ApplicationTable applications={filtered} onOpen={a=>nav(`/applications/${a.id}`)}/> : <ApplicationKanban applications={filtered} onOpen={a=>nav(`/applications/${a.id}`)}/>}
  </div>;
}