import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ query, setQuery, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-3.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
