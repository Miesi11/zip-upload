import { notFound } from 'next/navigation';
import { getBySlug, getRelated } from '../../../lib/data';
import PageHeading from '../../../components/PageHeading';
import TagLink from '../../../components/TagLink';
import Link from 'next/link';

interface PageProps {
  params: { slug: string };
}

export const dynamic = 'force-static';

export default function GstanzlDetailPage({ params }: PageProps) {
  const gstanzl = getBySlug(params.slug);
  if (!gstanzl) {
    return notFound();
  }
  const related = getRelated(params.slug);
  return (
    <article>
      <PageHeading>{gstanzl.title}</PageHeading>
      <p className="mb-2 text-sm text-gray-700 dark:text-gray-200">
        <strong>Region:</strong> {gstanzl.region} · <strong>Stimmung:</strong> {gstanzl.mood}
      </p>
      <div className="mb-4">
        {gstanzl.tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </div>
      <div className="prose max-w-none dark:prose-invert">
        {gstanzl.lyrics.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <strong>Dialekt:</strong> {gstanzl.dialect}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Quelle:</strong> {gstanzl.source}
      </p>
      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-handwriting mb-2">Ähnliche Gstanzln</h2>
          <ul className="list-none grid gap-2">
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={`/gstanzln/${g.slug}`} className="text-accent-dark hover:underline">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}