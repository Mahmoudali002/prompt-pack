'use server';

/**
 * @fileOverview AI-powered prompt improvement flow.
 *
 * - improvePrompt - A function that enhances the quality of a given prompt based on user feedback.
 * - ImprovePromptInput - The input type for the improvePrompt function.
 * - ImprovePromptOutput - The return type for the improvePrompt function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ImprovePromptInputSchema = z.object({
  prompt: z.string().describe('The prompt to be improved.'),
  feedback: z.string().describe('User feedback on the prompt.'),
  category: z.string().describe('The category of the prompt (e.g., Design, Medical, Legal, Marketing).'),
  rating: z.number().min(1).max(5).describe('The user rating of the prompt (1-5 stars).'),
});
export type ImprovePromptInput = z.infer<typeof ImprovePromptInputSchema>;

const ImprovePromptOutputSchema = z.object({
  improvedPrompt: z.string().describe('The improved prompt based on the feedback.'),
  explanation: z.string().describe('Explanation of the changes made to the prompt.'),
});
export type ImprovePromptOutput = z.infer<typeof ImprovePromptOutputSchema>;

export async function improvePrompt(input: ImprovePromptInput): Promise<ImprovePromptOutput> {
  return improvePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improvePromptPrompt',
  input: {
    schema: z.object({
      prompt: z.string().describe('The prompt to be improved.'),
      feedback: z.string().describe('User feedback on the prompt.'),
      category: z.string().describe('The category of the prompt.'),
      rating: z.number().describe('The user rating of the prompt (1-5 stars).'),
    }),
  },
  output: {
    schema: z.object({
      improvedPrompt: z.string().describe('The improved prompt based on the feedback.'),
      explanation: z.string().describe('Explanation of the changes made to the prompt.'),
    }),
  },
  prompt: `You are an AI prompt engineer tasked with improving the quality of prompts based on user feedback. Given the following prompt, user feedback, category, and rating, generate an improved prompt and explain the changes you made.

Category: {{{category}}}
Prompt: {{{prompt}}}
Feedback: {{{feedback}}}
Rating: {{{rating}}} stars

Improved Prompt:
Explanation:
`,
});

const improvePromptFlow = ai.defineFlow<
  typeof ImprovePromptInputSchema,
  typeof ImprovePromptOutputSchema
>({
  name: 'improvePromptFlow',
  inputSchema: ImprovePromptInputSchema,
  outputSchema: ImprovePromptOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});

