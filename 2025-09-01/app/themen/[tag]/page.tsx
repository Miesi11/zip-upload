import { getByTag } from '../../../lib/data';
import PageHeading from '../../../components/PageHeading';
import GstanzlCard from '../../../components/GstanzlCard';
import Link from 'next/link';

interface PageProps {
  params: { tag: string };
}

export const dynamic = 'force-static';

export default function TagPage({ params }: PageProps) {
  const decodedTag = decodeURIComponent(params.tag);
  const list = getByTag(decodedTag);
  return (
    <div>
      <PageHeading>Thema: {decodedTag}</PageHeading>
      <p className="mb-4">
        <Link href="/themen" className="text-accent-dark underline">
          Zurück zu allen Themen
        </Link>
      </p>
      {list.length === 0 ? (
        <p>Keine Gstanzln für dieses Thema gefunden.</p>
      ) : (
        <div className="grid gap-4">
          {list.map((g) => (
            <GstanzlCard key={g.slug} gstanzl={g} />
          ))}
        </div>
      )}
    </div>
  );
}