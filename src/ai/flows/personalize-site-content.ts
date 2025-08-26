'use server';
/**
 * @fileOverview A Genkit flow that personalizes the Rise Gum website content based on user interests and campus location.
 *
 * - personalizeSiteContent - A function that personalizes website content based on user data.
 * - PersonalizeSiteContentInput - The input type for the personalizeSiteContent function.
 * - PersonalizeSiteContentOutput - The return type for the personalizeSiteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeSiteContentInputSchema = z.object({
  userInterests: z
    .string()
    .describe('A comma-separated list of the user interests.'),
  campusLocation: z.string().describe('The user\u2019s campus location.'),
});
export type PersonalizeSiteContentInput = z.infer<
  typeof PersonalizeSiteContentInputSchema
>;

const PersonalizeSiteContentOutputSchema = z.object({
  personalizedHeadline: z.string().describe('The personalized headline.'),
  personalizedBenefits: z
    .string()
    .describe('The personalized benefits section.'),
  personalizedTestimonials: z
    .string()
    .describe('The personalized testimonials.'),
});
export type PersonalizeSiteContentOutput = z.infer<
  typeof PersonalizeSiteContentOutputSchema
>;

export async function personalizeSiteContent(
  input: PersonalizeSiteContentInput
): Promise<PersonalizeSiteContentOutput> {
  return personalizeSiteContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeSiteContentPrompt',
  input: {schema: PersonalizeSiteContentInputSchema},
  output: {schema: PersonalizeSiteContentOutputSchema},
  prompt: `You are a marketing expert specializing in personalized website content.

  Based on the user's interests and campus location, you will generate personalized content for the Rise Gum website.

  User Interests: {{{userInterests}}}
  Campus Location: {{{campusLocation}}}

  Personalize the following sections:

  - Headline: A catchy headline that resonates with the user's interests and campus location.
  - Benefits: Highlight the benefits of Rise Gum that are most relevant to the user's interests and campus location.
  - Testimonials: Select testimonials that are relevant to the user's interests and campus location.

  Make sure the content is concise, engaging, and persuasive. The goal is to make the user feel like Rise Gum is the perfect solution for their needs.
  `,
});

const personalizeSiteContentFlow = ai.defineFlow(
  {
    name: 'personalizeSiteContentFlow',
    inputSchema: PersonalizeSiteContentInputSchema,
    outputSchema: PersonalizeSiteContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
