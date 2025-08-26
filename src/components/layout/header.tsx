
"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { WaitlistSheet } from "../waitlist-sheet";


export default function Header() {
  return (
    <header className="relative py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6 text-sm">
          <Link href="mailto:hello@risegum.com" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@risegum.com</span>
          </Link>
          <WaitlistSheet>
            <Button variant="outline">Notify Me</Button>
          </WaitlistSheet>
        </div>
      </div>
    </header>
  );
}
