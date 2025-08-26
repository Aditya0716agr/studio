import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-2xl font-bold text-primary", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
      <span className="font-headline text-foreground">Rise</span>
      <span className="font-headline text-primary">Gum</span>
    </div>
  );
}
