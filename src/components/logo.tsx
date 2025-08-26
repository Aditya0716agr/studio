import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <h1 className="text-4xl font-bold text-foreground uppercase tracking-wider">
        RiseGum
      </h1>
      <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-muted-foreground -mt-1 ml-1">
        <ArrowRight className="w-4 h-4" />
        <span>Coming Soon</span>
      </div>
    </div>
  );
}
