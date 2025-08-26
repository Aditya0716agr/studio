import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Countdown } from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/logo';

export default function Home() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 7);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6">
              <Logo />
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter !leading-tight">
                Our new Product will be <span className="bg-foreground text-background px-2">launch soon.</span>
              </h1>
              <p className="text-muted-foreground max-w-md">
                Shop RiseGum for everything to fit your modern lifestyle - from instant energy to enhanced focus, with Free Shipping on most items.
              </p>
              <Countdown date={launchDate.toISOString()} />
            </div>
            <div className="relative">
               <div className="absolute top-0 left-0 w-24 h-24 bg-repeat bg-center opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000'/%3E%3C/svg%3E")`}}></div>
                <Image
                  src="https://storage.googleapis.com/stey-tmp/rise-gum-prod.png"
                  alt="Rise Gum product packaging"
                  width={600}
                  height={600}
                  className="object-contain w-full h-auto"
                  data-ai-hint="product packaging"
                  priority
                />
                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-repeat bg-center opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000'/%3E%3C/svg%3E")`}}></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
