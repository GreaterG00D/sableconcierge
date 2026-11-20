import Link from "next/link";

export const metadata = { title: "Page not found | Sable Services" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--sable-warm-bg)] px-4 text-[var(--sable-body)]">
      <p className="text-sm uppercase tracking-[0.2em]">Sable Services</p>
      <h1 className="font-heading text-4xl text-[var(--sable-dark)]">This page could not be found</h1>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-full bg-[var(--sable-dark)] px-8 text-lg text-[var(--sable-warm-bg)]"
      >
        Return home
      </Link>
    </main>
  );
}
