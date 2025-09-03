import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'Gstanzln – Österreichische Gstanzlsammlung',
    template: '%s | Gstanzln',
  },
  description: 'Entdecke Gstanzln aus allen Regionen Österreichs – lustige, spöttische und weise Strophen in Dialekt.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main id="main" className="flex-grow max-w-4xl mx-auto px-4 py-6">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}