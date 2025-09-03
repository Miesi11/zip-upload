import Link from 'next/link';
import { Gstanzl } from '../lib/data';
import TagLink from './TagLink';

interface GstanzlCardProps {
  gstanzl: Gstanzl;
}

export default function GstanzlCard({ gstanzl }: GstanzlCardProps) {
  return (
    <article className="border border-primary-dark rounded-xl p-4 bg-white shadow-sm dark:bg-primary-dark/30">
      <h2 className="text-xl font-handwriting mb-2">
        <Link href={`/gstanzln/${gstanzl.slug}`} className="hover:text-accent-dark">
          {gstanzl.title}
        </Link>
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-200">
        {gstanzl.region} · {gstanzl.mood}
      </p>
      <div className="mt-2 flex flex-wrap">
        {gstanzl.tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}