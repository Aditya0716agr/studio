"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";


export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6 text-sm">
          <Link href="mailto:hello@risegum.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@risegum.com</span>
          </Link>
          <Link href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 123 456 7890</span>
          </Link>
          <Button variant="outline">Notify Me</Button>
        </div>
      </div>
    </header>
  );
}
