'use server';

/**
 * @fileOverview AI-powered prompt quality feedback flow.
 *
 * - getPromptFeedback - A function that provides feedback and suggestions for improving a prompt.
 * - PromptFeedbackInput - The input type for the getPromptFeedback function.
 * - PromptFeedbackOutput - The return type for the getPromptFeedback function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PromptFeedbackInputSchema = z.object({
  prompt: z.string().describe('The prompt to be evaluated.'),
  category: z.string().describe('The category of the prompt (e.g., Design, Medical, Legal, Marketing).'),
  rating: z.number().min(1).max(5).describe('The user rating of the prompt (1-5 stars).'),
  usageContext: z.string().optional().describe('Optional context about how the prompt was used.'),
});
export type PromptFeedbackInput = z.infer<typeof PromptFeedbackInputSchema>;

const PromptFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-powered feedback on the prompt.'),
  suggestions: z.string().describe('AI-powered suggestions for improving the prompt.'),
});
export type PromptFeedbackOutput = z.infer<typeof PromptFeedbackOutputSchema>;

export async function getPromptFeedback(input: PromptFeedbackInput): Promise<PromptFeedbackOutput> {
  return promptFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'promptFeedbackPrompt',
  input: {
    schema: z.object({
      prompt: z.string().describe('The prompt to be evaluated.'),
      category: z.string().describe('The category of the prompt.'),
      rating: z.number().describe('The user rating of the prompt (1-5 stars).'),
      usageContext: z.string().optional().describe('Context about how the prompt was used.'),
    }),
  },
  output: {
    schema: z.object({
      feedback: z.string().describe('Feedback on the prompt.'),
      suggestions: z.string().describe('Suggestions for improving the prompt.'),
    }),
  },
  prompt: `You are an AI prompt quality expert. A user has provided the following prompt, category, rating, and usage context (if any). Provide feedback on the prompt and suggestions for improvement.

Category: {{{category}}}
Prompt: {{{prompt}}}
Rating: {{{rating}}} stars
Usage Context: {{{usageContext}}}

Feedback:
Suggestions:
`,
});

const promptFeedbackFlow = ai.defineFlow<
  typeof PromptFeedbackInputSchema,
  typeof PromptFeedbackOutputSchema
>({
  name: 'promptFeedbackFlow',
  inputSchema: PromptFeedbackInputSchema,
  outputSchema: PromptFeedbackOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
