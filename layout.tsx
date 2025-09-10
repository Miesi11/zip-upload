import './globals.css';

export const metadata = {
  title: 'Next.js App',
  description: 'Sample Next.js application configured with Tailwind CSS',
};

/**
 * Root layout component for the Next.js App Router.
 *
 * Next.js will wrap all of your pages and components with this layout.
 * It imports `globals.css` once so that global styles and Tailwind layers
 * are processed correctly. Adjust the markup here to add wrappers or
 * providers that should be globally available.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}