interface SiteFooterProps {
  namaProduk: string;
}

export default function SiteFooter({ namaProduk }: SiteFooterProps) {
  return (
    <footer className="border-t">
      <p className="mx-auto max-w-6xl p-4">© 2026 {namaProduk}</p>
    </footer>
  );
}