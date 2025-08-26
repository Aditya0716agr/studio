
"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  campus: z.string().optional(),
});

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
  serviceAccountAuth
);

async function appendToSheet(data: { name: string; email: string; campus?: string }) {
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle[process.env.GOOGLE_SHEETS_SHEET_NAME!];
  if (!sheet) {
    throw new Error(`Sheet "${process.env.GOOGLE_SHEETS_SHEET_NAME}" not found.`);
  }
  await sheet.addRow({
    Name: data.name,
    Email: data.email,
    Campus: data.campus || "",
    SubmittedAt: new Date().toISOString(),
  });
}

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

  try {
    await appendToSheet({ name, email, campus });
    return {
      message: `Thank you, ${name}! You've been added to the waitlist.`,
      errors: null,
      success: true,
    };
  } catch (error: any) {
    console.error("Error writing to Google Sheet:", error);
    return {
      message: "An unexpected error occurred while saving your information. Please check your setup and try again.",
      errors: null,
      success: false,
    };
  }
}
