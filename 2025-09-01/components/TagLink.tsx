import Link from 'next/link';

interface TagLinkProps {
  tag: string;
  count?: number;
}

export default function TagLink({ tag, count }: TagLinkProps) {
  return (
    <Link
      href={`/themen/${encodeURIComponent(tag)}`}
      className="inline-block bg-accent text-white px-2 py-1 rounded-full text-xs mr-2 mb-2 hover:bg-accent-dark"
    >
      {tag}
      {typeof count === 'number' && (
        <span className="ml-1 opacity-75">({count})</span>
      )}
    </Link>
  );
}