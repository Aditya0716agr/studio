
"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addToWaitlist } from "@/actions/waitlist";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import Logo from "./logo";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <span>Get Notified</span>
          <ArrowRight />
        </>
      )}
    </Button>
  );
}

export function WaitlistSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const initialState = { message: null, errors: null, success: false };
  const [state, dispatch] = useActionState(addToWaitlist, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
      setOpen(false);
    } else if (state.errors && !state.success) {
      // Don't show a toast for validation errors, they are displayed inline
    } else if (state.message) {
      toast({
        title: "Something went wrong",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Logo />
          <SheetTitle className="pt-4">Join the Waitlist</SheetTitle>
          <SheetDescription>
            Be the first to know when Rise Gum launches. Get exclusive early
            access and a special discount.
          </SheetDescription>
        </SheetHeader>
        <form ref={formRef} action={dispatch} className="space-y-4 py-8">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
            {state.errors?.name && (
              <p className="text-sm text-destructive">{state.errors.name[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
            {state.errors?.email && (
              <p className="text-sm text-destructive">{state.errors.email[0]}</p>
            )}
          </div>
          <SubmitButton />
          {state.message && !state.success && !state.errors && (
            <p className="text-sm text-destructive">{state.message}</p>
          )}
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
