"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedWrapper from "../animated-wrapper";

export default function HeroSection({ headline }: { headline: string }) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/60 to-background">
       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
       <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedWrapper>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline text-foreground !leading-tight tracking-tighter">
                {headline}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                India’s first sugar-free caffeinated chewing gum, crafted for sharp focus and clean energy. Your perfect partner for studies, work, and play.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  Join Early Access
                </Button>
                <Button size="lg" variant="ghost" onClick={() => document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper delay="delay-200" className="relative h-80 md:h-full">
            <div className="absolute -bottom-16 md:-bottom-20 right-0 w-64 h-64 md:w-96 md:h-96">
                <Image
                src="https://picsum.photos/400/400"
                alt="Young student in motion"
                fill
                className="object-contain"
                data-ai-hint="student motion"
                priority
                />
            </div>
            <div className="absolute -top-10 md:top-1/4 left-0 w-48 h-48 md:w-64 md:h-64">
                <Image
                    src="https://picsum.photos/300/300"
                    alt="Rise Gum product pack"
                    fill
                    className="object-contain -rotate-12 transform-gpu"
                    data-ai-hint="product pack"
                    priority
                />
            </div>
          </AnimatedWrapper>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
