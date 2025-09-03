import Link from 'next/link';
import { getAll } from '../../lib/data';
import GstanzlCard from '../../components/GstanzlCard';
import PageHeading from '../../components/PageHeading';

export const dynamic = 'force-static';

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function GstanzlnPage({ searchParams }: PageProps) {
  const gstanzln = getAll();
  const regions = Array.from(new Set(gstanzln.map((g) => g.region))).sort();
  const moods = Array.from(new Set(gstanzln.map((g) => g.mood))).sort();

  const regionParam = typeof searchParams?.region === 'string' ? searchParams.region : undefined;
  const moodParam = typeof searchParams?.mood === 'string' ? searchParams.mood : undefined;
  const tagParam = typeof searchParams?.tag === 'string' ? searchParams.tag : undefined;
  const query = typeof searchParams?.q === 'string' ? searchParams.q : '';

  let filtered = gstanzln;
  if (regionParam) {
    filtered = filtered.filter((g) => g.region === regionParam);
  }
  if (moodParam) {
    filtered = filtered.filter((g) => g.mood === moodParam);
  }
  if (tagParam) {
    filtered = filtered.filter((g) => g.tags.includes(tagParam));
  }
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.region.toLowerCase().includes(q) ||
        g.mood.toLowerCase().includes(q) ||
        g.tags.some((t) => t.toLowerCase().includes(q)) ||
        g.lyrics.some((l) => l.toLowerCase().includes(q))
    );
  }
  // Sort by title
  filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <PageHeading>Alle Gstanzln</PageHeading>
      <form className="mb-4 flex flex-wrap gap-4" method="get">
        <div>
          <label className="block text-sm mb-1" htmlFor="region">
            Region
          </label>
          <select name="region" id="region" defaultValue={regionParam ?? ''} className="border border-primary-dark rounded-md p-2">
            <option value="">Alle</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="mood">
            Stimmung
          </label>
          <select name="mood" id="mood" defaultValue={moodParam ?? ''} className="border border-primary-dark rounded-md p-2">
            <option value="">Alle</option>
            {moods.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="q">
            Suche
          </label>
          <input
            type="search"
            id="q"
            name="q"
            defaultValue={query}
            className="border border-primary-dark rounded-md p-2"
            placeholder="Suchbegriff"
          />
        </div>
        <button type="submit" className="self-end bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark">
          Filtern
        </button>
      </form>
      {filtered.length === 0 ? (
        <p>Keine Gstanzln gefunden.</p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((g) => (
            <GstanzlCard key={g.slug} gstanzl={g} />
          ))}
        </div>
      )}
    </div>
  );
}