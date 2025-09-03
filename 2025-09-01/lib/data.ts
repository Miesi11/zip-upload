import { z } from 'zod';
import gstanzln from '../data/gstanzln.json';

// Define Zod schema for Gstanzl
export const GstanzlSchema = z.object({
  title: z.string(),
  slug: z.string(),
  region: z.string(),
  mood: z.string(),
  tags: z.array(z.string()),
  lyrics: z.array(z.string()),
  dialect: z.string(),
  source: z.string(),
});

export type Gstanzl = z.infer<typeof GstanzlSchema>;

// Validate data at runtime
const collectionSchema = z.array(GstanzlSchema);
const collection = collectionSchema.parse(gstanzln);

export function getAll(): Gstanzl[] {
  return collection;
}

export function getBySlug(slug: string): Gstanzl | undefined {
  return collection.find((g) => g.slug === slug);
}

export function getTagsWithCount(): { tag: string; count: number }[] {
  const tagMap: Record<string, number> = {};
  collection.forEach((g) => {
    g.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] ?? 0) + 1;
    });
  });
  return Object.keys(tagMap)
    .map((tag) => ({ tag, count: tagMap[tag] }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getByTag(tag: string): Gstanzl[] {
  return collection.filter((g) => g.tags.includes(tag));
}

export function getRelated(slug: string, count = 3): Gstanzl[] {
  const current = getBySlug(slug);
  if (!current) return [];
  const candidates = collection.filter((g) => g.slug !== slug);
  // Score by shared tags
  const scored = candidates.map((g) => {
    let score = 0;
    g.tags.forEach((tag) => {
      if (current.tags.includes(tag)) score += 1;
    });
    if (g.region === current.region) score += 1;
    return { g, score };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.g);
}