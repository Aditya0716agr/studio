import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center text-2xl font-bold text-primary", className)}>
      <span className="font-bold text-foreground uppercase tracking-widest">RiseGum</span>
    </div>
  );
}
