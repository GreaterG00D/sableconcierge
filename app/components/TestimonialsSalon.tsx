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

function Body({
  paragraphs,
  compact = false,
}: {
  paragraphs: readonly string[];
  compact?: boolean;
}) {
  return (
    <div
      className={`text-[rgba(235,230,215,0.9)] ${
        compact
          ? "space-y-3 text-[1.0625rem] leading-[1.6]"
          : "space-y-4 text-[1.125rem] leading-[1.75]"
      }`}
    >
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

  // Phone layout: controls up top, then compact cards where the photo,
  // headline and client name sit together so a whole review fits on screen.
  return (
    <div data-salon-mobile className="pb-8 pt-6 lg:hidden">
      <div className="flex items-center justify-between gap-3 px-6 sm:px-10">
        <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[rgba(235,230,215,0.86)]">
          {eyebrow}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous review"
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
            className={arrowClass}
          >
            <FiArrowLeft className="h-5 w-5" />
          </button>
          <p
            aria-live="polite"
            className="w-[3.6rem] text-center font-heading text-[1.05rem] tabular-nums text-[var(--sable-gold)]"
          >
            {counter(active + 1)}
            <span className="text-[rgba(235,230,215,0.86)]">
              {" "}
              / {counter(testimonials.length)}
            </span>
          </p>
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

      <div aria-hidden className="mx-6 mt-4 flex gap-1.5 sm:mx-10">
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

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mt-4 flex items-start snap-x snap-mandatory scroll-px-6 gap-3.5 overflow-x-auto px-6 [scrollbar-width:none] sm:scroll-px-10 sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.headline}
            className="w-[90%] max-w-[520px] shrink-0 snap-start"
          >
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${photoUrl(testimonial.image, 900)})`,
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,33,26,0.05)_0%,rgba(21,33,26,0.6)_45%,rgba(21,33,26,0.96)_100%)]" />
              <figcaption className="absolute inset-x-5 bottom-4">
                <h3 className="font-heading text-[clamp(1.5rem,7vw,2rem)] font-normal leading-[1.1] tracking-[-0.012em] text-[var(--sable-warm-bg)] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                  {testimonial.headline}
                </h3>
                <div className="mt-2">
                  <Attribution testimonial={testimonial} />
                </div>
              </figcaption>
            </div>
            <div className="px-1 pt-4">
              <Body paragraphs={testimonial.body} compact />
            </div>
          </figure>
        ))}
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
