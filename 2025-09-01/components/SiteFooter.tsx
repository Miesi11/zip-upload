export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary dark:bg-primary-dark text-sm mt-12 py-6 border-t border-primary-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p>&copy; {year} Gstanzln – Österreichische Kultur</p>
      </div>
    </footer>
  );
}