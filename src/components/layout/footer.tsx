import Logo from "@/components/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Logo />
          <span className="hidden sm:inline-block">© {new Date().getFullYear()} Rise Gum. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
             <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
