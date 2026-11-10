import Image from "next/image";
import { RiLeafLine } from "react-icons/ri";

type Props = { brand: string; location: string };

const links = [
  ["Services", "#services"],
  ["How It Works", "#membership"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

// Patterned green footer with one wide cream arch holding Olivia's logo, the
// sign-off and the page links. The arch top is half its own width (50cqw).
export default function SiteFooter({ brand, location }: Props) {
  return (
    <footer className="bg-[var(--sable-warm-bg)] px-[10px] py-[10px]">
      <div className="sable-panel relative overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] px-6 pb-10 pt-14">
        <div className="deco-leaf leaf-green" />

        <div className="relative flex flex-col items-center text-center">
          <div className="@container w-full max-w-[640px]">
            <div className="flex flex-col items-center gap-6 rounded-b-[20px] rounded-t-[50cqw] border border-[rgba(166,140,74,0.7)] bg-[#f4eee4] px-6 pb-10 pt-[18cqw] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.6)]">
              <Image
                src="/sable-concierge-logo.png"
                alt="Sable Concierge logo"
                width={320}
                height={265}
                className="h-auto w-[130px] mix-blend-multiply [filter:brightness(1.02)]"
              />
              <p className="font-heading text-[clamp(2rem,4.4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-[var(--sable-dark)]">
                The gift of{" "}
                <em className="italic text-[#8a6f2e]">time.</em>
              </p>
              <div className="mx-auto flex w-full max-w-[18rem] items-center gap-4">
                <span className="h-px flex-1 bg-[rgba(166,140,74,0.6)]" />
                <RiLeafLine aria-hidden className="h-5 w-5 text-[#8a6f2e]" />
                <span className="h-px flex-1 bg-[rgba(166,140,74,0.6)]" />
              </div>
              <nav aria-label="Footer">
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.9375rem] uppercase tracking-[0.2em] text-[var(--sable-dark)]">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-[#8a6f2e]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <p className="mt-8 text-[0.9375rem] text-[rgba(235,230,215,0.78)]">
            © {new Date().getFullYear()} {brand} · {location}
          </p>
        </div>
      </div>
    </footer>
  );
}
