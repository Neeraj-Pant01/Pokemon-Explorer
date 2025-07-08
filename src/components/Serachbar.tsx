"use client";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm?.toLowerCase());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div
        className={`flex items-center border-2 rounded-full px-4 py-3 transition-all duration-300 ${
          isFocused
            ? "border-[#3c5aa6] shadow-lg shadow-[#ffcb05]/30"
            : "border-[#3c5aa6]/50"
        }`}
      >
        <Search
          className={`h-5 w-5 mr-2 transition-colors ${
            isFocused ? "text-[#3c5aa6]" : "text-[#3c5aa6]/70"
          }`}
        />
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent outline-none text-[#3c5aa6] placeholder-[#3c5aa6]/70 font-medium"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              onSearch("");
            }}
            className="p-1 rounded-full hover:bg-[#ffcb05]/20 transition-colors"
          >
            <X className="h-4 w-4 text-[#3c5aa6]" />
          </button>
        )}
      </div>

      <div
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity ${
          isFocused ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-1 w-16 bg-gradient-to-r from-[#ffcb05] via-[#3c5aa6] to-[#ffcb05] rounded-full"></div>
      </div>
    </div>
  );
}