/**
 * Represents a prompt.
 */
export interface Prompt {
  /**
   * The prompt.
   */
  prompt: string;
  /**
   * A brief description of the prompt.
   */
  description: string;
}

/**
 * Represents a category of prompts.
 */
export interface PromptCategory {
  /**
   * The category.
   */
  category: string;
  /**
   * A list of prompts in this category.
   */
prompts: Prompt[];
}

/**
 * Asynchronously retrieves prompts for all categories.
 *
 * @returns A promise that resolves to a list of PromptCategory objects
 */
export async function getPrompts(): Promise<PromptCategory[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      category: 'Design',
      prompts: [
        {
          prompt: 'Design a logo for...',
          description: 'Helps generate logo ideas.',
        },
        {
          prompt: 'Create a color palette for...',
          description: 'Generates color palettes.',
        },
        {
          prompt: 'Outline a design brief for...',
          description: 'Creates a design brief.',
        },
        {
          prompt: 'Mockup a website layout for...',
          description: 'Helps create website layouts.',
        },
        {
          prompt: 'Design a poster for...',
          description: 'Generates poster ideas.',
        },
        {
          prompt: 'Create a wireframe for...',          
          description: 'Helps create wireframes.',
        },
        {
          prompt: 'Design a mobile app interface for...',          
          description: 'Helps create mobile app interfaces.',
        },
        {
          prompt: 'Create an icon set for...',          
          description: 'Helps create icon sets.',
        },
        {
          prompt: 'Design a brochure for...',          
          description: 'Helps create brochures.',
        },
        {
          prompt: 'Design a business card for...',          
          description: 'Helps create business cards.',
        },
      ],
    },
    {
      category: 'Medical',
      prompts: [
        {
          prompt: 'Summarize the symptoms of...',          
          description: 'Helps summarize symptoms of medical conditions.',
        },
        {
          prompt: 'Explain the treatment options for...',          
          description: 'Explains treatment options for medical conditions.',
        },
        {
          prompt: 'List the possible side effects of...',          
          description: 'Lists possible side effects of medications.',
        },
        {
          prompt: 'Explain a medical procedure for...',          
          description: 'Explains medical procedures.',
        },
        {
          prompt: 'Diagnose the following symptoms...',          
          description: 'Provides a potential diagnosis.',
        },
        {
          prompt: 'Recommend a diet for...',          
          description: 'Recommends a diet plan for a specific condition.',
        },
        {
          prompt: 'List the risk factors for...',          
          description: 'Lists risk factors for medical conditions.',
        },
        {
          prompt: 'Explain the stages of...',          
          description: 'Explains the stages of a disease.',
        },
        {
          prompt: 'What is the prognosis for...',          
          description: 'Provides a prognosis for a medical condition.',
        },
        {
          prompt: 'What are the causes of...',          
          description: 'Lists the causes of a disease.',
        },
      ],
    },
    {
      category: 'Legal',
      prompts: [
        {
          prompt: 'Draft a contract for...',          
          description: 'Helps draft contracts.',
        },
        {
          prompt: 'Draft a legal letter for...',          
          description: 'Helps draft legal letters.',
        },
        {
          prompt: 'Explain the legal implications of...',          
          description: 'Explains the legal implications.',
        },
        {
          prompt: 'What are the laws regarding...',          
          description: 'Lists the laws regarding a specific topic.',
        },
        {
          prompt: 'Draft a will for...',          
          description: 'Helps draft wills.',
        },
        {
          prompt: 'Draft a power of attorney for...',          
          description: 'Helps draft power of attorney.',
        },
        {
          prompt: 'Draft a cease and desist letter for...',          
          description: 'Helps draft cease and desist letters.',
        },
        {
          prompt: 'Draft a non-disclosure agreement for...',          
          description: 'Helps draft non-disclosure agreements.',
        },
        {
          prompt: 'Draft a terms of service agreement for...',          
          description: 'Helps draft terms of service agreements.',
        },
        {
          prompt: 'Draft a privacy policy for...',          
          description: 'Helps draft privacy policies.',
        },
      ],
    },
    {
      category: 'Marketing',
      prompts: [
        {
          prompt: 'Create a marketing plan for...',          
          description: 'Helps create marketing plans.',
        },
        {
          prompt: 'Write a blog post about...',          
          description: 'Helps write blog posts.',
        },
        {
          prompt: 'Write a social media post about...',          
          description: 'Helps write social media posts.',
        },
        {
          prompt: 'Write an email subject line for...',          
          description: 'Helps write email subject lines.',
        },
        {
          prompt: 'Write an email body for...',          
          description: 'Helps write email bodies.',
        },
        {
          prompt: 'Create a landing page headline for...',          
          description: 'Helps create landing page headlines.',
        },
        {
          prompt: 'Create a call to action for...',          
          description: 'Helps create calls to action.',
        },
        {
          prompt: 'Create a sales pitch for...',          
          description: 'Helps create sales pitches.',
        },
        {
          prompt: 'Create a customer persona for...',          
          description: 'Helps create customer personas.',
        },
        {
          prompt: 'Create a SWOT analysis for...',          
          description: 'Helps create SWOT analyses.',
        },
      ],
    },
  ];
}

    