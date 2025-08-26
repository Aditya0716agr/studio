"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

export function PersonalizationForm({ currentInterests, currentCampus }: { currentInterests?: string, currentCampus?: string }) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const interests = formData.get("interests") as string;
    const campus = formData.get("campus") as string;
    router.push(`/?interests=${encodeURIComponent(interests)}&campus=${encodeURIComponent(campus)}`);
  };
  
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-6 py-8">
        <Card className="max-w-2xl mx-auto border-primary/20 shadow-lg">
            <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Personalize Your Experience</CardTitle>
                <CardDescription>
                    Tell us a bit about yourself to see how Rise Gum can fit your lifestyle.
                    (This is a demo of our GenAI personalization feature)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="interests">Your Interests (e.g., studying, gaming, fitness)</Label>
                        <Input 
                            id="interests" 
                            name="interests" 
                            type="text" 
                            placeholder="e.g., late-night coding"
                            defaultValue={currentInterests || ""}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="campus">Your Campus or City</Label>
                        <Input 
                            id="campus" 
                            name="campus" 
                            type="text" 
                            placeholder="e.g., IIT Bombay"
                            defaultValue={currentCampus || ""}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                         <Button type="button" variant="ghost" onClick={() => router.push('/')}>Reset</Button>
                         <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Personalize</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
