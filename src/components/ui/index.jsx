import { forwardRef } from "react";
import { Loader2, Search, X } from "lucide-react";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Button = forwardRef(function Button({ children, variant="primary", size="md", loading=false, className="", ...props }, ref) {
  const variants = {
    primary: "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
    secondary: "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900",
    ghost: "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900",
    soft: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  const sizes = { sm:"h-8 px-3 text-xs", md:"h-9 px-3.5 text-sm", lg:"h-11 px-5 text-sm" };
  return (
    <button ref={ref} className={cn("inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50", variants[variant], sizes[size], className)} disabled={loading || props.disabled} {...props}>
      {loading && <Loader2 size={15} className="animate-spin" />}{children}
    </button>
  );
});

export const Input = forwardRef(function Input({ label, error, className="", ...props }, ref) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{label}</span>}
      <input ref={ref} className={cn("h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600 dark:focus:ring-zinc-900", className)} {...props} />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
});

export function Select({ label, children, className="", ...props }) {
  return (
    <label className="block space-y-1.5">
      {label && <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{label}</span>}
      <select className={cn("h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100", className)} {...props}>{children}</select>
    </label>
  );
}

export function Badge({ children, tone="neutral" }) {
  const tones = {
    neutral: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    red: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    purple: "bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300"
  };
  return <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-[11px] font-medium", tones[tone])}>{children}</span>;
}

export function Card({ children, className="" }) {
  return <div className={cn("rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950", className)}>{children}</div>;
}

export function SectionHeader({ title, description, action }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div><h2 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-white">{title}</h2>{description && <p className="mt-1 text-xs text-zinc-500">{description}</p>}</div>
      {action}
    </div>
  );
}

export function SearchInput({ value, onChange, placeholder="Search..." }) {
  return <div className="relative">
    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
    <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="h-9 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-8 text-sm outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white" />
    {value && <button onClick={()=>onChange("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400"><X size={15}/></button>}
  </div>;
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return <div className="flex min-h-52 flex-col items-center justify-center text-center">
    {Icon && <div className="mb-3 rounded-xl bg-zinc-100 p-3 text-zinc-500 dark:bg-zinc-900"><Icon size={20}/></div>}
    <h3 className="text-sm font-semibold">{title}</h3>
    <p className="mt-1 max-w-sm text-xs text-zinc-500">{description}</p>
    {action && <div className="mt-4">{action}</div>}
  </div>;
}

export function Modal({ open, onClose, title, children, width="max-w-lg" }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <div className={cn("w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950", width)}>
      <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
        <h2 className="font-semibold">{title}</h2>
        <button onClick={onClose} className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"><X size={17}/></button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  </div>;
}