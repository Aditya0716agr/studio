"use client";

import { BrainCircuit, Zap, Clock } from "lucide-react";
import AnimatedWrapper from "../animated-wrapper";

export default function ScienceSection() {
  return (
    <section id="science" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
              The Science of Instant Energy
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Rise Gum utilizes buccal absorption technology, delivering caffeine up to 5x faster than traditional drinks.
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay="delay-200">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Chew to Activate</h3>
              <p className="text-muted-foreground mt-2">
                The moment you start chewing, the active ingredients are released from the gum's compressed layers.
              </p>
            </div>

            {/* Arrow/Diagram */}
            <div className="relative h-24 md:h-auto md:w-full flex items-center justify-center -rotate-90 md:rotate-0">
                <div className="w-full h-1 bg-border/50 rounded-full"></div>
                <div className="absolute w-full h-1 bg-primary rounded-full animate-flow"></div>
            </div>


            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
               <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Rapid Absorption</h3>
              <p className="text-muted-foreground mt-2">
                Caffeine is absorbed directly through the tissues in your mouth (buccal mucosa), bypassing the digestive system.
              </p>
            </div>
            
            {/* Arrow/Diagram */}
            <div className="relative h-24 md:h-auto md:w-full flex items-center justify-center -rotate-90 md:rotate-0">
                <div className="w-full h-1 bg-border/50 rounded-full"></div>
                <div className="absolute w-full h-1 bg-primary rounded-full animate-flow" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <BrainCircuit className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Peak Focus</h3>
              <p className="text-muted-foreground mt-2">
                Within minutes, you feel a smooth, clear wave of focus and alertness, without the crash.
              </p>
            </div>

          </div>
        </AnimatedWrapper>
      </div>
      <style jsx>{`
        @keyframes flow-animation {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          51% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
        .animate-flow {
            animation: flow-animation 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
