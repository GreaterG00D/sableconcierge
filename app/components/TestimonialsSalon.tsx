"use client";

import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export type Testimonial = {
  headline: string;
  body: readonly string[];
  name: string;
  detail?: string;
  image: string;
};

type Props = {
  eyebrow: string;
  testimonials: readonly Testimonial[];
};

const photoUrl = (image: string, width: number) =>
  `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${width}&q=80`;

function Attribution({ testimonial }: { testimonial: Testimonial }) {
  return (
    <p className="text-[0.875rem] uppercase tracking-[0.18em] text-[var(--sable-gold)]">
      {testimonial.name}
      {testimonial.detail && (
        <span className="text-[rgba(235,230,215,0.86)]">
          {" "}
          &middot; {testimonial.detail}
        </span>
      )}
    </p>
  );
}

function Body({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-4 text-[1.125rem] leading-[1.75] text-[rgba(235,230,215,0.9)]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function DesktopSalon({ eyebrow, testimonials }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="hidden min-h-[860px] grid-cols-[5fr_7fr] lg:grid">
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.image}
            aria-hidden
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1100ms] ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${photoUrl(testimonial.image, 1400)})`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col px-14 pb-11 pt-24 xl:px-[84px]">
        <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[rgba(235,230,215,0.86)]">
          {eyebrow}
        </p>

        <div className="mt-14 grid flex-1">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.headline}
              aria-hidden={index !== active}
              className={`[grid-area:1/1] transition-opacity duration-[900ms] ease-in-out ${
                index === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h3 className="font-heading text-[3.25rem] font-normal leading-[1.08] tracking-[-0.012em] text-[var(--sable-warm-bg)] xl:text-[3.875rem]">
                {testimonial.headline}
              </h3>
              <div className="mt-8 max-w-[600px]">
                <Body paragraphs={testimonial.body} />
              </div>
              <div className="mt-7">
                <Attribution testimonial={testimonial} />
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 border-t border-[rgba(166,140,74,0.3)]">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`-mt-px cursor-pointer border-t pb-2 pt-[18px] text-[0.875rem] uppercase tracking-[0.18em] transition-colors ${
                index === active
                  ? "border-[var(--sable-gold)] text-[var(--sable-gold)]"
                  : "border-transparent text-[rgba(235,230,215,0.86)] hover:text-[rgba(235,230,215,0.86)]"
              }`}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const arrowClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(166,140,74,0.6)] text-[var(--sable-gold)] transition-opacity active:bg-[rgba(166,140,74,0.16)] disabled:opacity-35";

function MobileSalon({ eyebrow, testimonials }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    const step = first.offsetWidth + 14;
    setActive(
      Math.min(testimonials.length - 1, Math.round(track.scrollLeft / step))
    );
  };

  const counter = (value: number) => String(value).padStart(2, "0");

  const goTo = (index: number) => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;
    track.scrollTo({ left: index * (first.offsetWidth + 14), behavior: "smooth" });
  };

  return (
    <div data-salon-mobile className="py-14 lg:hidden">
      <div className="flex items-baseline justify-between px-6 sm:px-10">
        <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[rgba(235,230,215,0.86)]">
          {eyebrow}
        </p>
        <p
          aria-live="polite"
          className="font-heading text-[1.05rem] tabular-nums text-[var(--sable-gold)]"
        >
          {counter(active + 1)}
          <span className="text-[rgba(235,230,215,0.86)]">
            {" "}
            / {counter(testimonials.length)}
          </span>
        </p>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mt-7 flex items-start snap-x snap-mandatory scroll-px-6 gap-3.5 overflow-x-auto px-6 [scrollbar-width:none] sm:scroll-px-10 sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.headline}
            className="w-[86%] max-w-[480px] shrink-0 snap-start"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${photoUrl(testimonial.image, 900)})`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,42,22,0)_38%,rgba(29,42,22,0.9)_100%)]" />
              <h3 className="absolute inset-x-5 bottom-5 font-heading text-[clamp(1.6rem,8.2vw,2.15rem)] font-normal leading-[1.1] tracking-[-0.012em] text-[var(--sable-warm-bg)]">
                {testimonial.headline}
              </h3>
            </div>
            <div className="px-1 pt-6">
              <Body paragraphs={testimonial.body} />
              <div className="mt-5">
                <Attribution testimonial={testimonial} />
              </div>
            </div>
          </figure>
        ))}
      </div>

      <div className="mx-6 mt-9 flex items-center gap-4 sm:mx-10">
        <div aria-hidden className="flex flex-1 gap-1.5">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.name}
              className={`h-0.5 flex-1 transition-colors duration-500 ${
                index === active
                  ? "bg-[var(--sable-gold)]"
                  : "bg-[rgba(166,140,74,0.35)]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous review"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
          className={arrowClass}
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next review"
          disabled={active === testimonials.length - 1}
          onClick={() => goTo(active + 1)}
          className={arrowClass}
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSalon(props: Props) {
  return (
    <>
      <DesktopSalon {...props} />
      <MobileSalon {...props} />
    </>
  );
}
