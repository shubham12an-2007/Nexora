import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { companies } from "../data/mockData";
import { Badge, Card, SearchInput, SectionHeader } from "../components/ui";
import { useState } from "react";

export default function Companies() {
  const [q,setQ]=useState("");
  const data=companies.filter(c=>`${c.name} ${c.industry}`.toLowerCase().includes(q.toLowerCase()));
  return <div className="animate-float-in space-y-6"><SectionHeader title="Companies" description="Organizations across your job-search pipeline."/><div className="max-w-sm"><SearchInput value={q} onChange={setQ} placeholder="Search companies..."/></div><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{data.map(c=><Card key={c.name} className="p-5 transition hover:shadow-md"><div className="flex items-start justify-between"><div className="flex gap-3"><div className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white ${c.color}`}>{c.name[0]}</div><div><h3 className="text-sm font-semibold">{c.name}</h3><p className="mt-1 text-[10px] text-zinc-500">{c.industry}</p></div></div><ArrowUpRight size={15} className="text-zinc-400"/></div><div className="mt-5 flex items-center gap-2 text-[10px] text-zinc-500"><MapPin size={12}/>{c.location}</div><div className="mt-5 grid grid-cols-2 gap-2"><div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900"><p className="text-[10px] text-zinc-400">Applications</p><p className="mt-1 text-sm font-semibold">{c.applications}</p></div><div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-900"><p className="text-[10px] text-zinc-400">Interviews</p><p className="mt-1 text-sm font-semibold">{c.interviews}</p></div></div></Card>)}</div></div>;
}