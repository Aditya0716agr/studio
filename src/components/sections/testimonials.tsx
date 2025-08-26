"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedWrapper from "../animated-wrapper";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const pressLogos = [
  { name: "TechCrunch", logo: "https://storage.googleapis.com/stey-tmp/techcrunch-logo.svg" },
  { name: "YourStory", logo: "https://storage.googleapis.com/stey-tmp/yourstory-logo.svg" },
  { name: "Inc42", logo: "https://storage.googleapis.com/stey-tmp/inc42-logo.svg" },
  { name: "The Economic Times", logo: "https://storage.googleapis.com/stey-tmp/economic-times-logo.svg" },
];

export default function TestimonialsSection({ testimonials }: { testimonials: string }) {
  const testimonialItems: Testimonial[] = JSON.parse(testimonials);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
              Loved by Students, Gamers, and Professionals
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Don’t just take our word for it. Here’s what the Rise community is saying.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialItems.map((testimonial, index) => (
            <AnimatedWrapper key={testimonial.name} delay={`delay-${index * 150}`}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg flex flex-col justify-between">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
                <div className="p-6 bg-primary/5 rounded-b-lg mt-4">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person avatar"/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
        
        <AnimatedWrapper className="mt-24">
            <div className="text-center">
                <h3 className="text-lg font-semibold text-muted-foreground tracking-widest uppercase">
                    As Featured In
                </h3>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {pressLogos.map((press) => (
                        <Image
                            key={press.name}
                            src={press.logo}
                            alt={press.name}
                            width={130}
                            height={40}
                            className="opacity-60 hover:opacity-100 transition-opacity filter invert"
                            data-ai-hint="company logo"
                        />
                    ))}
                </div>
            </div>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
