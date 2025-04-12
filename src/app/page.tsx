'use client';

import PromptCategory from '@/components/PromptCategory';
import {useEffect, useState} from 'react';
import {getPrompts, Prompt} from '@/services/prompt-library';
import {Toaster} from "@/components/ui/toaster";
import {SearchBar} from "@/components/SearchBar";
import {Select} from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = ['Design', 'Medical', 'Legal', 'Marketing'];

export default function Home() {
  const [prompts, setPrompts] = useState<{[key: string]: Prompt[]}>({});
  const [sortBy, setSortBy] = useState('relevance');

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

  const sortedPrompts = (category: string) => {
    let promptsArray = prompts[category] || [];
    if (sortBy === 'relevance') {
      return promptsArray; // No change
    } else if (sortBy === 'date') {
      return [...promptsArray].sort((a, b) => 0.5 - Math.random()); // TODO actually sort by date, or remove option
    } else if (sortBy === 'rating') {
      return [...promptsArray].sort((a, b) => 0.5 - Math.random()); // TODO actually sort by rating, or remove option
    }
    return promptsArray;
  };

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">PromptPack</h1>

        {/* Search and Sort */}
        <div className="flex items-center justify-between mb-4">
          <SearchBar/>
          <Select onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <PromptCategory key={category} category={category} prompts={sortedPrompts(category)}/>
          ))}
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

