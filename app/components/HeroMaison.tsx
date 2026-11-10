import Image from "next/image";
import type { IconType } from "react-icons";
import {
  RiArchiveDrawerLine,
  RiHomeLine,
  RiPlantLine,
  RiShoppingBagLine,
} from "react-icons/ri";

const icons: Record<string, IconType> = {
  "Plant Care": RiPlantLine,
  "Personal Shopping": RiShoppingBagLine,
  "Home Care": RiHomeLine,
  "Home Organization": RiArchiveDrawerLine,
};

type Props = {
  location: string;
  subtitle: string;
  services: readonly { title: string }[];
};

// Austin cottage living room by Megan Bucknall, free under the Unsplash License.
const PHOTO =
  "https://images.unsplash.com/photo-1593195150503-8e2a51338ff2?auto=format&fit=crop&w=1200&q=80";

export default function HeroMaison({ location, subtitle, services }: Props) {
  return (
    <section className="bg-[linear-gradient(180deg,#f4f0e8_0%,#efe9de_100%)] px-6 pb-10 pt-10 sm:px-10 lg:px-16 lg:pt-14 xl:px-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:min-h-[calc(100vh-170px)] lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div className="flex min-w-0 flex-col gap-10">
          {/* Centered while the photo is stacked below; left-aligned beside it. */}
          <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            {/* Logo and the line beneath it share one shrink-wrapped box, so the
                logo is always centered exactly over that line. Brightening a
                hair turns the logo's off-white background pure white, which
                multiply then makes disappear into the cream. */}
            <div
              data-logo-lockup
              className="flex w-full flex-col items-center gap-8 self-center sm:w-fit lg:self-start"
            >
              <Image
                src="/sable-concierge-logo.png"
                alt="Sable Concierge logo"
                width={320}
                height={265}
                priority
                className="h-auto w-[150px] mix-blend-multiply [filter:brightness(1.02)] sm:w-[190px]"
              />
              <p
                data-logo-line
                className="flex flex-col items-center gap-1 text-center text-[0.875rem] uppercase tracking-[0.22em] text-[var(--sable-sage)] sm:flex-row sm:gap-4 sm:whitespace-nowrap"
              >
                <span
                  aria-hidden
                  className="hidden h-px w-10 bg-[var(--sable-gold)] sm:block"
                />
                {/* Negative margin cancels the tracking after the last letter. */}
                <span className="mr-[-0.22em]">Private Home Concierge</span>
                <span aria-hidden className="mr-[-0.22em] hidden sm:inline">
                  ·
                </span>
                <span className="mr-[-0.22em]">{location}</span>
              </p>
            </div>

            <h1 data-hero-copy className="font-heading text-[clamp(2.2rem,6.2vw,5.8rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[var(--sable-dark)]">
              <span className="block whitespace-nowrap">Impeccable care</span>
              <span className="block whitespace-nowrap">for plants</span>
              <em className="block whitespace-nowrap font-normal italic text-[#8a6f2e]">
                and place.
              </em>
            </h1>

            <p data-hero-copy className="max-w-[31rem] text-[1.1875rem] leading-[1.7] text-[var(--sable-body-soft)]">
              {subtitle}
            </p>
          </div>

          <div data-hero-ctas className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:justify-start">
            <a
              href="#contact"
              className="flex h-14 items-center justify-center rounded-full bg-[var(--sable-dark)] px-9 text-[1.0625rem] tracking-[0.02em] text-[var(--sable-warm-bg)] transition-colors hover:bg-[var(--sable-sage)]"
            >
              Arrange a consultation
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 self-center text-[1.0625rem] text-[var(--sable-dark)] sm:self-auto"
            >
              <span className="border-b border-[var(--sable-gold)] pb-0.5">
                Explore our services
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[520px]">
          <div
            role="img"
            aria-label="A sunlit Austin cottage living room with a linen ottoman"
            className="aspect-[4/5] rounded-t-full bg-cover bg-center shadow-[0_40px_80px_-30px_rgba(29,42,22,0.45)]"
            style={{ backgroundImage: `url(${PHOTO})` }}
          />
        </div>
      </div>

      <ul className="mx-auto mt-14 grid max-w-[1400px] grid-cols-2 gap-x-6 gap-y-3 border-t border-[rgba(74,94,51,0.25)] pt-6 text-[0.875rem] uppercase tracking-[0.18em] text-[var(--sable-body-soft)] md:flex md:justify-between">
        {services.map((service) => {
          const Icon = icons[service.title] ?? RiPlantLine;
          return (
            <li key={service.title} className="flex items-center gap-3">
              <Icon aria-hidden className="h-5 w-5 shrink-0 text-[#8a6f2e]" />
              {service.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
