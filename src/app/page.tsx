
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Countdown } from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Zap, Pocket, CheckCircle2 } from 'lucide-react';
import AnimatedWrapper from '@/components/animated-wrapper';
import { WaitlistSheet } from '@/components/waitlist-sheet';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const features = [
    { text: 'Zero sugar, zero calories' },
    { text: 'Premium functional caffeine' },
    { text: 'Convenient blister packaging' },
    { text: 'Discreet, on-the-go use' },
    { text: 'Quick energy for study, workouts, and travel' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans animated-gradient">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex items-center justify-center py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6">
                <AnimatedWrapper>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tighter !leading-tight">
                    Our new Product will be{' '}
                    <span className="bg-foreground text-background px-2">
                      launch soon.
                    </span>
                  </h1>
                </AnimatedWrapper>
                <AnimatedWrapper delay="delay-200">
                  <p className="text-muted-foreground max-w-md">
                    Shop RiseGum for everything to fit your modern lifestyle - from
                    instant energy to enhanced focus, with Free Shipping on most
                    items.
                  </p>
                </AnimatedWrapper>
                <AnimatedWrapper delay="delay-400">
                  <Countdown date={launchDate.toISOString()} />
                </AnimatedWrapper>
                <AnimatedWrapper delay="delay-600">
                  <WaitlistSheet>
                    <Button size="lg" className="mt-4">
                      <span>Notify Me</span>
                      <ArrowRight />
                    </Button>
                  </WaitlistSheet>
                </AnimatedWrapper>
              </div>
              <div className="relative aspect-square">
                <AnimatedWrapper>
                  <Image
                    src="https://i.ibb.co/6y4pNBW/image.png"
                    alt="Rise Gum product packaging"
                    width={600}
                    height={600}
                    className="object-contain rounded-lg"
                    data-ai-hint="product packaging"
                    priority
                  />
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-12 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedWrapper className="lg:col-span-1">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Tired of Unhealthy Energy Drinks?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Rise Gum delivers portable, healthy energy, precisely when you need it. For modern students and professionals, every minute counts. Rise Gum is the ultimate life-hack, providing a clean, instant energy boost to conquer exams, crush deadlines, and stay sharp without the jitters or crash of sugary drinks.
                  </p>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper delay="delay-200" className="lg:col-span-1">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-background/50 backdrop-blur-sm">
                        <Leaf className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Sugar-Free</h3>
                            <p className="text-muted-foreground text-sm">Clean energy without the crash.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-background/50 backdrop-blur-sm">
                        <Zap className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Fast-Acting</h3>
                             <p className="text-muted-foreground text-sm">Feel the boost in minutes.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-background/50 backdrop-blur-sm">
                        <Pocket className="h-8 w-8 text-primary" />
                        <div>
                            <h3 className="text-xl font-semibold">Pocket-Ready</h3>
                             <p className="text-muted-foreground text-sm">Energy that goes where you go.</p>
                        </div>
                    </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Product Features & Benefits Section */}
        <section className="py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedWrapper className="lg:col-span-1">
                    <Image
                        src="https://picsum.photos/600/600"
                        alt="Diagram of caffeine absorption"
                        width={600}
                        height={600}
                        className="rounded-lg object-cover w-full h-full"
                        data-ai-hint="lifestyle studying"
                    />
                </AnimatedWrapper>
                 <AnimatedWrapper delay="delay-200" className="lg:col-span-1">
                    <div className="flex flex-col space-y-4">
                         <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                           The Smarter Way to Energize
                         </h2>
                         <p className="text-lg text-muted-foreground">
                            Everything you need for a clean boost, nothing you don&apos;t.
                         </p>
                         <div className="mt-4 grid gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedWrapper className="lg:col-span-1">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Focus in Under 10 Minutes
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Chewing gum allows for buccal absorption, a fancy way of saying caffeine gets into your system faster through the tissues in your mouth. This means a quicker, more efficient boost compared to traditional drinks.
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-background/50 backdrop-blur-sm">
                       <Zap className="h-8 w-8 text-primary" />
                       <div>
                         <h4 className="font-semibold">Real Scenario:</h4>
                         <p className="text-muted-foreground">Feel focused and ready to tackle your task in under 10 minutes.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper delay="delay-200" className="lg:col-span-1">
                <Image
                  src="https://picsum.photos/600/400"
                  alt="Diagram of caffeine absorption"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                  data-ai-hint="caffeine absorption diagram"
                />
              </AnimatedWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
