import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col items-start space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              India’s first sugar-free caffeinated chewing gum for the next generation.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links & Contact */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground">Have questions or want to partner with us?</p>
            <Button variant="outline" asChild>
              <Link href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>

          {/* Column 3: Campus Availability */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Campus Availability</h3>
            <p className="text-muted-foreground">Find us at a campus store near you.</p>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/400/200?grayscale"
                alt="Campus availability map"
                width={400}
                height={200}
                className="w-full h-full object-cover"
                data-ai-hint="campus map"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/20 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Rise Gum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
