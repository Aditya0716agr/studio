"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { addToWaitlist } from "@/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import AnimatedWrapper from "../animated-wrapper";
import { CheckCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
      {pending ? "Submitting..." : "Get Early Access"}
    </Button>
  );
}

export default function ContactSection() {
  const initialState = { message: null, errors: null, success: false };
  const [state, dispatch] = useFormState(addToWaitlist, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      if(state.success) {
        formRef.current?.reset();
      }
    } else if (state.message && state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedWrapper className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-2xl border border-border/10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
              Join the Waitlist
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be the first to experience Rise Gum. Sign up for early access and exclusive updates.
            </p>
          </div>

          {state.success ? (
              <div className="mt-8 text-center bg-primary/10 p-8 rounded-lg">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4"/>
                  <h3 className="text-2xl font-bold text-primary">Thank you!</h3>
                  <p className="text-muted-foreground mt-2">{state.message}</p>
              </div>
          ) : (
            <form ref={formRef} action={dispatch} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required className="py-6 text-base" />
                {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="py-6 text-base" />
                {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="campus" className="text-base">Your Campus (Optional)</Label>
                <Input id="campus" name="campus" type="text" placeholder="e.g., IIT Bombay" className="py-6 text-base" />
                 {state.errors?.campus && <p className="text-destructive text-sm mt-1">{state.errors.campus[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          )}

        </AnimatedWrapper>
      </div>
    </section>
  );
}
