"use server";

import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  campus: z.string().optional(),
});

export async function addToWaitlist(prevState: any, formData: FormData) {
  const validatedFields = waitlistSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    campus: formData.get("campus"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { name, email, campus } = validatedFields.data;

  // In a real application, you would save this to your database.
  console.log("New waitlist submission:", { name, email, campus });

  return {
    message: `Thank you, ${name}! You've been added to the waitlist.`,
    errors: null,
    success: true,
  };
}
