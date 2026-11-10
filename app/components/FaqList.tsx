"use client";

import { useEffect, useRef } from "react";

type Props = { items: readonly { question: string; answer: string }[] };

// FAQ accordion. The first time the first question scrolls fully into view,
// it bounces gently down and up once so visitors see the rows can be opened.
// Skipped when it's already open; reduced-motion users get no movement
// (globals.css shortens all animations for them).
export default function FaqList({ items }: Props) {
  const firstRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const details = firstRef.current;
    const summary = details?.querySelector("summary");
    if (!details || !summary) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Wait for the section's fade-in to finish before nudging.
        timer = window.setTimeout(() => {
          if (details.open) return;
          summary.classList.add("faq-nudge");
          summary.addEventListener(
            "animationend",
            () => summary.classList.remove("faq-nudge"),
            { once: true }
          );
        }, 900);
      },
      { threshold: 1, rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(summary);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mt-10 border-b border-[rgba(166,140,74,0.35)]">
      {items.map((item, index) => (
        <details
          key={item.question}
          ref={index === 0 ? firstRef : undefined}
          className="group border-t border-[rgba(166,140,74,0.35)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-[1.25rem] leading-[1.3] text-[var(--sable-dark)] sm:text-[1.4rem] [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(166,140,74,0.6)] bg-[#f6f1e8] text-[1.3rem] leading-none text-[var(--sable-sage)] transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-7 pr-2 text-[1.0625rem] leading-[1.75] text-[var(--sable-body-soft)] sm:pr-14">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
