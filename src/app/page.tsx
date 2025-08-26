
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Countdown } from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedWrapper from '@/components/animated-wrapper';
import { WaitlistSheet } from '@/components/waitlist-sheet';

export default function Home() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 7);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 py-12">
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
            <div className="relative">
              <AnimatedWrapper>
                <Image
                  src="https://picsum.photos/600/600"
                  alt="Rise Gum product packaging"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto rounded-lg"
                  data-ai-hint="product packaging"
                  priority
                />
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
