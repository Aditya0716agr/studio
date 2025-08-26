
"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const waitlistSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  campus: z.string().optional(),
});

async function appendToSheet(data: { name: string; email: string; campus?: string }) {
  if (
    !process.env.GOOGLE_SHEETS_CLIENT_EMAIL ||
    !process.env.GOOGLE_SHEETS_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  ) {
    throw new Error("Missing Google Sheets credentials in environment variables.");
  }

  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    serviceAccountAuth
  );
  
  await doc.loadInfo();
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';
  const sheet = doc.sheetsByTitle[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found. Please check your GOOGLE_SHEETS_SHEET_NAME environment variable.`);
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
      success: false,
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
    console.error("Error writing to Google Sheet:", error.message);
    return {
      message: `An unexpected error occurred: ${error.message}. Please check your Google Sheets setup and credentials.`,
      errors: null,
      success: false,
    };
  }
}
