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
          prompt: 'Generate three distinct logo concepts for a sustainable coffee brand targeting eco-conscious millennials, focusing on minimalist designs with natural elements and earthy tones.',
          description: 'Generates logo ideas for a sustainable coffee brand.',
        },
        {
          prompt: 'Develop a comprehensive color palette for a luxury skincare line, including primary, secondary, and accent colors, that conveys sophistication, purity, and rejuvenation.',
          description: 'Generates color palettes for a luxury skincare line.',
        },
        {
          prompt: 'Create a detailed design brief for a mobile application aimed at connecting local farmers with consumers, specifying target audience, key features, branding guidelines, and design preferences.',
          description: 'Creates a design brief for a farmer-to-consumer mobile app.',
        },
        {
          prompt: 'Mockup a visually engaging and user-friendly website layout for a travel agency specializing in adventure tourism, highlighting key destinations, tour packages, and booking options.',
          description: 'Helps create website layouts for an adventure travel agency.',
        },
        {
          prompt: 'Design a series of three eye-catching posters for a music festival, each targeting a different demographic (e.g., students, young professionals, families) while maintaining a cohesive visual theme.',
          description: 'Generates poster ideas for a music festival.',
        },
        {
          prompt: 'Create a detailed wireframe for an e-commerce platform selling handmade crafts, focusing on intuitive navigation, product presentation, and a seamless checkout process.',
          description: 'Helps create wireframes for a handmade crafts e-commerce platform.',
        },
        {
          prompt: 'Design a user-friendly mobile app interface for a language learning platform, incorporating gamification elements, progress tracking, and personalized learning paths.',
          description: 'Helps create mobile app interfaces for a language learning platform.',
        },
        {
          prompt: 'Create a versatile icon set consisting of 20 unique icons for a project management tool, ensuring clarity, consistency, and scalability across different devices and screen resolutions.',
          description: 'Helps create icon sets for a project management tool.',
        },
        {
          prompt: 'Design a visually appealing brochure for a real estate development showcasing luxury apartments, highlighting key amenities, floor plans, and lifestyle benefits.',
          description: 'Helps create brochures for a luxury apartment development.',
        },
        {
          prompt: 'Design a professional and memorable business card for a freelance graphic designer, incorporating key contact information, a personal logo, and a unique visual element that reflects their creative style.',
          description: 'Helps create business cards for a freelance graphic designer.',
        },
        {
          prompt: 'Create a mood board for a modern, minimalist interior design project, including color schemes, textures, and furniture styles.',
          description: 'Generates a mood board for interior design.',
        },
        {
          prompt: 'Design a landing page for a new SaaS product, focusing on a clean layout, clear value proposition, and a compelling call-to-action.',
          description: 'Helps design landing pages for SaaS products.',
        },
      ],
    },
    {
      category: 'Medical',
      prompts: [
        {
          prompt: 'Summarize the key symptoms, diagnostic criteria, and potential complications associated with type 2 diabetes mellitus for a patient education brochure.',
          description: 'Helps summarize symptoms of type 2 diabetes.',
        },
        {
          prompt: 'Explain the various treatment options available for managing rheumatoid arthritis, including pharmacological interventions, physical therapy, and lifestyle modifications, in a clear and accessible manner.',
          description: 'Explains treatment options for rheumatoid arthritis.',
        },
        {
          prompt: 'List the most common and serious potential side effects associated with long-term use of corticosteroids, providing guidance on how to mitigate these effects.',
          description: 'Lists possible side effects of corticosteroids.',
        },
        {
          prompt: 'Explain the step-by-step procedure for performing a laparoscopic appendectomy, including key surgical landmarks, potential risks, and postoperative care instructions.',
          description: 'Explains laparoscopic appendectomy procedure.',
        },
        {
          prompt: 'Based on the following symptoms – persistent cough, fever, shortness of breath, and chest pain – provide a differential diagnosis, including potential underlying conditions and recommended diagnostic tests.',
          description: 'Provides a potential diagnosis for respiratory symptoms.',
        },
        {
          prompt: 'Recommend a balanced and sustainable dietary plan for a patient diagnosed with irritable bowel syndrome (IBS), focusing on reducing trigger foods and promoting gut health.',
          description: 'Recommends a diet plan for a patient with IBS.',
        },
        {
          prompt: 'List the primary risk factors associated with developing coronary artery disease (CAD), including modifiable and non-modifiable factors, and provide strategies for risk reduction.',
          description: 'Lists risk factors for coronary artery disease.',
        },
        {
          prompt: 'Explain the different stages of Alzheimer’s disease, from early cognitive decline to severe memory loss and functional impairment, outlining typical symptoms and progression patterns at each stage.',
          description: 'Explains the stages of Alzheimer’s disease.',
        },
        {
          prompt: 'Based on a patient’s age, overall health, and stage of cancer, what is the typical prognosis for stage III melanoma, and what factors might influence the outcome?',
          description: 'Provides a prognosis for stage III melanoma.',
        },
        {
          prompt: 'What are the primary etiological factors and pathophysiological mechanisms underlying the development of autoimmune disorders, and how do these factors contribute to disease manifestation?',
          description: 'Lists the causes of autoimmune disorders.',
        },
        {
          prompt: 'Describe the latest advancements in gene therapy for treating cystic fibrosis.',
          description: 'Outlines gene therapy for cystic fibrosis.',
        },
        {
          prompt: 'Outline a rehabilitation program for a patient recovering from a stroke, including exercises and therapies.',
          description: 'Recommends a stroke rehabilitation program.',
        },
      ],
    },
    {
      category: 'Legal',
      prompts: [
        {
          prompt: 'Draft a comprehensive contract for the sale of a commercial property, including clauses addressing purchase price, payment terms, contingencies, and dispute resolution mechanisms.',
          description: 'Helps draft contracts for commercial property sales.',
        },
        {
          prompt: 'Draft a formal legal letter on behalf of a client demanding payment for breach of contract, including a clear statement of the facts, legal basis for the claim, and a deadline for response.',
          description: 'Helps draft legal letters demanding payment for breach of contract.',
        },
        {
          prompt: 'Explain the legal implications of operating a business as a sole proprietorship versus an LLC, including liability exposure, tax obligations, and administrative requirements.',
          description: 'Explains the legal implications of business structures.',
        },
        {
          prompt: 'What are the key federal and state laws governing data privacy and security, particularly concerning the collection, storage, and use of personal information by online businesses?',
          description: 'Lists the laws regarding data privacy and security.',
        },
        {
          prompt: 'Draft a legally sound last will and testament for a client with complex assets, including provisions for specific bequests, trusts, and guardianship of minor children.',
          description: 'Helps draft wills for clients with complex assets.',
        },
        {
          prompt: 'Draft a durable power of attorney document authorizing an agent to make financial and healthcare decisions on behalf of a principal in the event of incapacitation.',
          description: 'Helps draft power of attorney documents.',
        },
        {
          prompt: 'Draft a cease and desist letter to an infringer of intellectual property rights, demanding immediate cessation of infringing activity and outlining potential legal remedies.',
          description: 'Helps draft cease and desist letters for IP infringement.',
        },
        {
          prompt: 'Draft a comprehensive non-disclosure agreement (NDA) to protect confidential information shared between parties during business negotiations or collaborations.',
          description: 'Helps draft non-disclosure agreements.',
        },
        {
          prompt: 'Draft legally compliant terms of service (TOS) agreement for a website or online platform, covering user conduct, intellectual property, liability limitations, and dispute resolution.',
          description: 'Helps draft terms of service agreements.',
        },
        {
          prompt: 'Draft a privacy policy for a website or mobile app, disclosing the types of personal information collected, how it is used, and the measures taken to protect user data.',
          description: 'Helps draft privacy policies.',
        },
        {
          prompt: 'Outline the steps for filing a patent application, including required documentation and fees.',
          description: 'Details the patent application process.',
        },
        {
          prompt: 'Summarize the key provisions of the Sarbanes-Oxley Act and its implications for corporate governance.',
          description: 'Summarizes the Sarbanes-Oxley Act.',
        },
      ],
    },
    {
      category: 'Marketing',
      prompts: [
        {
          prompt: 'Create a detailed marketing plan for launching a new line of organic baby food, including target market analysis, competitive landscape assessment, key marketing strategies, and budget allocation.',
          description: 'Helps create marketing plans for organic baby food.',
        },
        {
          prompt: 'Write a compelling and informative blog post on the benefits of mindfulness meditation for stress reduction, targeting a health-conscious audience and incorporating SEO keywords.',
          description: 'Helps write blog posts about mindfulness meditation.',
        },
        {
          prompt: 'Write an engaging and shareable social media post for Instagram promoting a flash sale on summer apparel, including a captivating visual and relevant hashtags.',
          description: 'Helps write social media posts for a summer apparel sale.',
        },
        {
          prompt: 'Write a catchy and click-worthy email subject line for an upcoming webinar on digital marketing trends, designed to maximize open rates and registrations.',
          description: 'Helps write email subject lines for a digital marketing webinar.',
        },
        {
          prompt: 'Write a persuasive and personalized email body for a lead nurturing campaign, designed to convert prospects into paying customers by highlighting the value proposition of a SaaS product.',
          description: 'Helps write email bodies for a SaaS product lead nurturing campaign.',
        },
        {
          prompt: 'Create a captivating landing page headline for a new online course on photography, designed to grab visitors’ attention and encourage them to sign up.',
          description: 'Helps create landing page headlines for an online photography course.',
        },
        {
          prompt: 'Create a strong and effective call to action (CTA) for a website selling eco-friendly cleaning products, motivating visitors to make a purchase or learn more.',
          description: 'Helps create calls to action for eco-friendly cleaning products.',
        },
        {
          prompt: 'Create a concise and persuasive sales pitch for a new mobile app designed to help users track their fitness goals and connect with a community of like-minded individuals.',
          description: 'Helps create sales pitches for a fitness tracking mobile app.',
        },
        {
          prompt: 'Create a detailed customer persona for a target audience interested in purchasing luxury travel packages, including demographics, psychographics, motivations, and pain points.',
          description: 'Helps create customer personas for luxury travel packages.',
        },
        {
          prompt: 'Create a comprehensive SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for a local bakery, identifying internal and external factors impacting its competitive position in the market.',
          description: 'Helps create SWOT analyses for a local bakery.',
        },
        {
          prompt: 'Develop a content marketing strategy for a new line of vegan cosmetics, including blog topics, social media campaigns, and influencer collaborations.',
          description: 'Creates content marketing strategies for vegan cosmetics.',
        },
        {
          prompt: 'Design an A/B test for a website checkout page to improve conversion rates, including variables to test and metrics to track.',
          description: 'Designs A/B tests for website checkout pages.',
        },
      ],
    },
  ];
}
