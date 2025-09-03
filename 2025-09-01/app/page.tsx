import Link from 'next/link';
import PageHeading from '../components/PageHeading';
import SearchBox from '../components/SearchBox';
import { getAll } from '../lib/data';

export const dynamic = 'force-static';

export default function HomePage() {
  const gstanzln = getAll();
  // Show newest (just first few as we don't have dates)
  const newest = gstanzln.slice(0, 3);
  return (
    <div>
      <PageHeading>Österreichische Gstanzln</PageHeading>
      <p className="mb-4">
        Entdecke die reiche Tradition der Gstanzln – Vierzeiler aus allen Bundesländern, voller Witz, Weisheit und Dialekt.
      </p>
      <div className="mb-8">
        <SearchBox />
      </div>
      <section className="mb-8">
        <h2 className="text-xl font-handwriting mb-2">Neueste Gstanzln</h2>
        <ul className="grid gap-4">
          {newest.map((g) => (
            <li key={g.slug} className="list-none">
              <Link href={`/gstanzln/${g.slug}`} className="text-lg font-handwriting text-accent-dark hover:underline">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-handwriting mb-2">Themen</h2>
        <p>
          Stöbere in <Link href="/themen" className="text-accent-dark underline">allen Themen</Link> oder lass dich durch die Liste inspirieren.
        </p>
      </section>
    </div>
  );
}