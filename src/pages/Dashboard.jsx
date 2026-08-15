import { useState } from "react";
import { ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, CheckCircle2, Clock3, Plus, Sparkles, Target } from "lucide-react";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import { Button, Card, SectionHeader } from "../components/ui";
import { activity, applications, chartData, statusData, interviews } from "../data/mockData";

export default function Dashboard() {
  const [showAdd, setShowAdd] = useState(false);
  return <div className="animate-float-in space-y-7">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs text-zinc-500">Overview</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">Good morning, Shubham</h1><p className="mt-1 text-xs text-zinc-500">Here's what's happening with your job search.</p></div><Button onClick={()=>setShowAdd(true)}><Plus size={15}/> Add application</Button></div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard icon={BriefcaseBusiness} label="Total applications" value="68" change="+12.4%"/>
      <StatCard icon={Clock3} label="Active applications" value="30" change="+8.2%"/>
      <StatCard icon={CalendarDays} label="Interviews" value="12" change="+20.0%"/>
      <StatCard icon={Target} label="Offers" value="3" change="+50.0%"/>
    </div>
    <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
      <Card className="p-5"><SectionHeader title="Application activity" description="Your application volume over the last 7 days." action={<Link to="/analytics" className="text-[11px] font-semibold text-zinc-500">View analytics →</Link>}/><div className="h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="fillApps" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#18181b" stopOpacity=".15"/><stop offset="100%" stopColor="#18181b" stopOpacity="0"/></linearGradient></defs><CartesianGrid vertical={false} stroke="#e4e4e7"/><XAxis dataKey="name" tick={{fontSize:10}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:10}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{borderRadius:10,border:"1px solid #e4e4e7",fontSize:11}}/><Area type="monotone" dataKey="applications" stroke="#18181b" strokeWidth={2} fill="url(#fillApps)"/></AreaChart></ResponsiveContainer></div></Card>
      <Card className="p-5"><SectionHeader title="Pipeline" description="Current application distribution."/><div className="h-52"><ResponsiveContainer><PieChart><Pie data={statusData} dataKey="value" innerRadius={55} outerRadius={78} paddingAngle={3}><Cell fill="#d4d4d8"/><Cell fill="#60a5fa"/><Cell fill="#fbbf24"/><Cell fill="#34d399"/><Cell fill="#f87171"/></Pie><Tooltip contentStyle={{borderRadius:10,fontSize:11}}/></PieChart></ResponsiveContainer></div><div className="grid grid-cols-2 gap-2">{statusData.slice(0,4).map((x,i)=><div key={x.name} className="flex items-center gap-2 text-[10px] text-zinc-500"><span className="h-2 w-2 rounded-full" style={{background:["#d4d4d8","#60a5fa","#fbbf24","#34d399"][i]}}/>{x.name}<span className="ml-auto font-semibold text-zinc-800 dark:text-zinc-200">{x.value}</span></div>)}</div></Card>
    </div>
    <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
      <Card className="p-5"><SectionHeader title="Recent applications" action={<Link to="/applications" className="text-[11px] font-semibold text-zinc-500">View all →</Link>}/><div className="divide-y divide-zinc-100 dark:divide-zinc-900">{applications.slice(0,6).map(a=><Link to={`/applications/${a.id}`} key={a.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"><div className="flex min-w-0 items-center gap-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[9px] font-bold text-white ${a.color}`}>{a.company[0]}</span><div className="min-w-0"><p className="truncate text-xs font-medium">{a.title}</p><p className="mt-0.5 text-[10px] text-zinc-500">{a.company} · {a.location}</p></div></div><span className="shrink-0 text-[10px] text-zinc-400">{a.status}</span></Link>)}</div></Card>
      <Card className="p-5"><SectionHeader title="Upcoming interviews" action={<Link to="/interviews" className="text-[11px] font-semibold text-zinc-500">Calendar →</Link>}/><div className="space-y-3">{interviews.map(i=><div key={i.id} className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-900"><div className="flex justify-between"><div><p className="text-xs font-semibold">{i.role}</p><p className="mt-1 text-[10px] text-zinc-500">{i.company} · {i.type}</p></div><CalendarDays size={15} className="text-zinc-400"/></div><p className="mt-3 text-[10px] font-medium">{i.date} · {i.time}</p></div>)}</div></Card>
    </div>
    <Card className="overflow-hidden bg-zinc-950 p-5 text-white dark:bg-zinc-900"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10"><Sparkles size={18}/></div><div><p className="text-xs font-semibold">AI Career Assistant</p><p className="mt-1 max-w-xl text-[11px] leading-5 text-zinc-400">Your next step: compare your Software Engineer Resume with the 6 saved roles that match your current skill profile.</p></div></div><Button variant="secondary" size="sm">Explore insights <ArrowRight size={14}/></Button></div></Card>
    {showAdd && <AddApplication onClose={()=>setShowAdd(false)}/>}
  </div>;
}

function AddApplication({onClose}) {
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-950"><div className="flex items-center justify-between"><h2 className="font-semibold">Add application</h2><button onClick={onClose} className="text-zinc-400">×</button></div><div className="mt-5 grid gap-4 sm:grid-cols-2">{["Job title","Company","Location","Salary"].map(x=><input key={x} placeholder={x} className="h-10 rounded-lg border border-zinc-200 px-3 text-sm outline-none dark:border-zinc-800 dark:bg-zinc-950"/>)}</div><div className="mt-5 flex justify-end gap-2"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onClose}><CheckCircle2 size={14}/> Save application</Button></div></div></div>;
}