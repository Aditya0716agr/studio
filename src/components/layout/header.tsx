
"use client";

import Logo from "@/components/logo";
import { Button } from "../ui/button";
import { WaitlistSheet } from "../waitlist-sheet";


export default function Header() {
  return (
    <header className="relative py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6 text-sm">
          <WaitlistSheet>
            <Button variant="outline">Notify Me</Button>
          </WaitlistSheet>
        </div>
      </div>
    </header>
  );
}
