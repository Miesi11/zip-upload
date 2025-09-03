"use client";
import Fuse from 'fuse.js';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface SearchEntry {
  slug: string;
  title: string;
  region: string;
  mood: string;
  tags: string;
  lyrics: string;
  dialect: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchEntry> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Load index lazily
  useEffect(() => {
    const load = async () => {
      const res = await fetch('/search-index.json');
      const data: SearchEntry[] = await res.json();
      const f = new Fuse(data, {
        keys: ['title', 'region', 'mood', 'tags', 'lyrics', 'dialect'],
        includeScore: true,
        threshold: 0.4,
      });
      setFuse(f);
    };
    load().catch(console.error);
  }, []);

  useEffect(() => {
    if (!fuse || query.trim() === '') {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    const searchRes = fuse.search(query).slice(0, 5).map((r) => r.item);
    setResults(searchRes);
  }, [query, fuse]);

  // Keyboard shortuct for focusing search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setQuery('');
        setActiveIndex(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault();
        const selected = results[activeIndex];
        if (selected) {
          window.location.href = `/gstanzln/${selected.slug}`;
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [results, activeIndex]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="search"
        placeholder="Suchen... (/)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-primary-dark rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-autocomplete="list"
        aria-controls="search-results"
        role="combobox"
        aria-expanded={results.length > 0}
      />
      {results.length > 0 && (
        <ul
          id="search-results"
          className="absolute z-10 w-full bg-white border border-primary-dark rounded-md mt-1 max-h-60 overflow-auto shadow-lg"
          role="listbox"
        >
          {results.map((item, idx) => (
            <li
              key={item.slug}
              role="option"
              aria-selected={idx === activeIndex}
              className={`px-3 py-2 cursor-pointer ${idx === activeIndex ? 'bg-accent text-white' : 'hover:bg-primary'}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => {
                window.location.href = `/gstanzln/${item.slug}`;
              }}
            >
              <span className="font-medium">{item.title}</span>
              <span className="ml-2 text-sm text-gray-500">{item.region}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}