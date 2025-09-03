import Link from 'next/link';
import PageHeading from '../components/PageHeading';

export default function NotFound() {
  return (
    <div>
      <PageHeading>Seite nicht gefunden</PageHeading>
      <p className="mb-4">Die angeforderte Seite konnte nicht gefunden werden.</p>
      <p>
        <Link href="/" className="text-accent-dark underline">
          Zur Startseite
        </Link>
      </p>
    </div>
  );
}