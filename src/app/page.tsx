'use client';

import PromptCategory from '@/components/PromptCategory';
import {useEffect, useState} from 'react';
import {getPrompts, Prompt} from '@/services/prompt-library';
import {Toaster} from "@/components/ui/toaster";

const categories = ['Design', 'Medical', 'Legal', 'Marketing'];

export default function Home() {
  const [prompts, setPrompts] = useState<{[key: string]: Prompt[]}>({});

  useEffect(() => {
    async function loadPrompts() {
      const allPrompts: {[key: string]: Prompt[]} = {};
      const promptsByCategory = await getPrompts();
      promptsByCategory.forEach(item => {
          allPrompts[item.category] = item.prompts;
        }
      )
      setPrompts(allPrompts);
    }

    loadPrompts();
  }, []);

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">PromptPack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <PromptCategory key={category} category={category} prompts={prompts[category] || []}/>
          ))}
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
