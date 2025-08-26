import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex flex-col items-start -space-y-2">
        <h1 className="text-4xl font-bold text-foreground uppercase tracking-wider">
          RiseGum
        </h1>
        <span className="font-semibold tracking-wider uppercase text-muted-foreground text-sm ml-1">
            COMING SOON
        </span>
      </div>
    </div>
  );
}
