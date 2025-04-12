'use client';

import PromptCategory from '@/components/PromptCategory';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Icons} from '@/components/icons';
import {useEffect, useState} from 'react';
import {getPrompts, Prompt} from '@/services/prompt-library';
import {useToast} from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Toaster} from "@/components/ui/toaster";

const categories = ['Design', 'Medical', 'Legal', 'Marketing'];

export default function Home() {
  const [prompts, setPrompts] = useState<{[key: string]: Prompt[]}>({});
  const {toast} = useToast();

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

  const handleCopy = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast({
      title: 'Prompt copied to clipboard!',
      description: 'You can now paste this prompt into your AI tool.',
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">PromptPack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <PromptCategory key={category} category={category} prompts={prompts[category] || []} onCopy={handleCopy}/>
        ))}
      </div>
      <Toaster/>
    </div>
  );
}

