import { RiInstagramLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import Reveal from "@/components/Reveal";

type Props = {
  id: string;
  eyebrow: string;
  subtitle: string;
  phone: string;
  email: string;
  instagram: string;
};

// Three arched tiles (call, email, Instagram) under a leaf-pattern band.
export default function ContactTiles({
  id,
  eyebrow,
  subtitle,
  phone,
  email,
  instagram,
}: Props) {
  const tiles = [
    { label: "Call", value: phone, href: `tel:${phone.replace(/\D/g, "")}`, Icon: RiPhoneLine },
    { label: "Email", value: email, href: `mailto:${email}`, Icon: RiMailLine },
    {
      label: "Instagram",
      value: instagram,
      href: `https://instagram.com/${instagram.replace("@", "")}`,
      Icon: RiInstagramLine,
      external: true,
    },
  ];

  return (
    <section
      id={id}
      className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
    >
      <div className="relative overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f2ebdf_100%)] px-6 py-16 sm:px-10 md:py-24 lg:px-16 xl:px-24">
        <div className="deco-leaf leaf-cream leaf-fade-top" />

        <div className="relative mx-auto max-w-[1100px]">
          <Reveal>
            <div className="text-center">
              <p className="text-[0.875rem] uppercase tracking-[0.22em] text-[#8a6f2e]">
                {eyebrow}
              </p>
              <h2 className="mt-5 font-heading text-[clamp(2.3rem,4.4vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.03em] text-[var(--sable-dark)]">
                Begin with a{" "}
                <em className="italic text-[#8a6f2e]">conversation.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-[28rem] text-[1.125rem] leading-[1.7] text-[var(--sable-body-soft)]">
                {subtitle}
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {tiles.map(({ label, value, href, Icon, external }, index) => (
              <li key={label} className="@container">
                <Reveal delay={index * 90} className="h-full">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex h-full flex-col items-center gap-4 rounded-b-[24px] rounded-t-[50cqw] border border-[rgba(166,140,74,0.45)] bg-[#fbf8f2] px-6 pb-10 pt-16 text-center transition-colors hover:bg-white"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sable-dark)]">
                      <Icon aria-hidden className="h-6 w-6 text-[var(--sable-gold)]" />
                    </span>
                    <span className="text-[0.875rem] uppercase tracking-[0.18em] text-[var(--sable-sage)]">
                      {label}
                    </span>
                    <span className="break-words font-heading text-[1.35rem] text-[var(--sable-dark)]">
                      {value}
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
