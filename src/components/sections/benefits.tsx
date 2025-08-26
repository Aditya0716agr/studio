"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Leaf, Pocket, Sparkles, type LucideProps } from "lucide-react";
import AnimatedWrapper from "../animated-wrapper";
import { type ComponentType } from "react";

const icons: { [key: string]: ComponentType<LucideProps> } = {
  Zap,
  Leaf,
  Pocket,
  Sparkles,
};

type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export default function BenefitsSection({ benefits }: { benefits: string }) {
  const benefitItems: Benefit[] = JSON.parse(benefits);

  return (
    <section id="benefits" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
              The Next-Gen Energy Boost is Here
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Rise Gum is engineered for performance, convenience, and health.
              Experience a smarter way to energize your life.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => {
            const Icon = icons[benefit.icon] || Sparkles;
            return (
              <AnimatedWrapper key={benefit.title} delay={`delay-${index * 150}`}>
                <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4 font-headline text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
