import { RiInstagramLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

type Props = {
  brand: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  instagram: string;
};

const linkClass =
  "inline-flex items-center gap-3 py-1.5 text-[rgba(235,230,215,0.9)] transition-colors hover:text-[var(--sable-gold)]";

export default function SiteFooter({
  brand,
  tagline,
  location,
  phone,
  email,
  instagram,
}: Props) {
  return (
    <footer className="bg-[var(--sable-warm-bg)] px-[10px] pb-[10px]">
      <div className="rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] bg-[linear-gradient(180deg,#1d2a16_0%,#1a2513_100%)] px-6 pb-10 pt-14 sm:px-10 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-heading text-[2rem] text-[var(--sable-warm-bg)]">
              {brand}
            </p>
            <p className="mt-3 font-heading text-[1.1rem] italic text-[var(--sable-cream)]">
              {tagline}
            </p>
            <p className="mt-4 text-[1rem] text-[rgba(235,230,215,0.86)]">
              Private home concierge · {location}
            </p>
          </div>

          <div>
            <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-gold)]">
              Contact
            </p>
            <ul className="mt-4 space-y-1 text-[1.0625rem]">
              <li>
                <a href={`tel:${phone.replace(/\D/g, "")}`} className={linkClass}>
                  <RiPhoneLine className="h-5 w-5" />
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className={linkClass}>
                  <RiMailLine className="h-5 w-5" />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  <RiInstagramLine className="h-5 w-5" />
                  {instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-gold)]">
              Explore
            </p>
            <ul className="mt-4 space-y-1 text-[1.0625rem]">
              {[
                ["Services", "#services"],
                ["How It Works", "#membership"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
                ["About Olivia", "#about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-[rgba(166,140,74,0.3)] pt-6 text-[0.9375rem] text-[rgba(235,230,215,0.75)] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
          <p>{location}</p>
        </div>
      </div>
    </footer>
  );
}
