"use client";

import { useEffect, useState } from "react";
import { RiCloseLine, RiMenuLine, RiPhoneLine } from "react-icons/ri";

type Props = { brand: string; phone: string };

const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#membership" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Pinned to the top on every screen size. Desktop shows the links inline;
// smaller screens get a menu button that opens a full-width panel.
export default function SiteHeader({ brand, phone }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(166,140,74,0.25)] bg-[rgba(240,237,230,0.96)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[72px]">
        <a
          href="#top"
          onClick={close}
          className="font-heading text-[1.35rem] text-[var(--sable-dark)] sm:text-[1.5rem]"
        >
          {brand}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[1rem] text-[var(--sable-body-soft)]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="py-2 transition-colors hover:text-[var(--sable-sage)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={close}
            className="hidden h-11 shrink-0 items-center rounded-full bg-[var(--sable-dark)] px-6 font-heading text-[1rem] tracking-[0.02em] text-[var(--sable-warm-bg)] transition-colors hover:bg-[var(--sable-sage)] sm:flex"
          >
            Arrange a Consultation
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(166,140,74,0.6)] text-[var(--sable-dark)] lg:hidden"
          >
            {open ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenuLine className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="border-t border-[rgba(166,140,74,0.25)] bg-[var(--sable-warm-bg)] px-5 pb-6 sm:px-8 lg:hidden"
      >
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className="border-b border-[rgba(166,140,74,0.2)]"
            >
              <a
                href={link.href}
                onClick={close}
                className="flex h-14 items-center font-heading text-[1.3rem] text-[var(--sable-dark)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`tel:${phone.replace(/\D/g, "")}`}
          className="mt-6 flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--sable-dark)] text-[1.0625rem] text-[var(--sable-warm-bg)]"
        >
          <RiPhoneLine className="h-5 w-5 text-[var(--sable-gold)]" />
          Call Olivia · {phone}
        </a>
      </nav>
    </header>
  );
}
