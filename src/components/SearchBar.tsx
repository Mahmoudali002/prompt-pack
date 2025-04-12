'use client';

import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {Search} from "lucide-react";

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  // Can add more logic here, like debounce.

  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 text-muted-foreground w-4 h-4"/>
      <Input
        type="search"
        placeholder="Search prompts..."
        className="pl-10 pr-3 py-2 h-10 rounded-md border border-input shadow-sm bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
