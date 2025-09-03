import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function SiteHeader() {
  return (
    <header className="bg-primary dark:bg-primary-dark shadow-md">
      <a href="#main" className="skip-link">Zum Inhalt springen</a>
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-handwriting text-accent-dark">
          Gstanzln
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/gstanzln" className="hover:text-accent-dark">Gstanzln</Link>
            </li>
            <li>
              <Link href="/themen" className="hover:text-accent-dark">Themen</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}