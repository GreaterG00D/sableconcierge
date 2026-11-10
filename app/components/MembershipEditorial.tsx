import { RiLeafLine } from "react-icons/ri";
import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  subtitle: string;
  stepsTitle: string;
  steps: readonly string[];
  benefits: readonly string[];
};

// Cream editorial panel: headline, benefits and a button on the left; the
// how-it-works steps in an arched green card on the right.
export default function MembershipEditorial({
  eyebrow,
  subtitle,
  stepsTitle,
  steps,
  benefits,
}: Props) {
  return (
    <section
      id="membership"
      className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
    >
      <div className="relative overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[#f4eee4] px-6 py-16 sm:px-10 md:py-24 lg:px-16 xl:px-24">
        <div className="deco-leaf leaf-cream leaf-fade-left" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
              <p className="text-[0.875rem] uppercase tracking-[0.22em] text-[#8a6f2e]">
                {eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(2.4rem,4.6vw,4.2rem)] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--sable-dark)]">
                Ongoing <em className="italic text-[#8a6f2e]">concierge</em>{" "}
                care.
              </h2>
              <p className="max-w-[28rem] text-[1.1875rem] leading-[1.7] text-[var(--sable-body-soft)]">
                {subtitle}
              </p>
              <ul className="flex flex-col gap-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <RiLeafLine
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-[#8a6f2e]"
                    />
                    <span className="text-[1.125rem] text-[var(--sable-body-soft)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--sable-dark)] px-9 text-[1.0625rem] text-[var(--sable-warm-bg)] btn-leaf"
              >
                Begin your membership
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* Thick green patterned frame around an inner arch in the section's cream.
                Both tops are full semicircles, like the photo arches, so the
                frame stays an even thickness around the curve. */}
            <div className="@container mx-auto w-full max-w-[600px]">
            <div className="sable-panel w-full overflow-hidden rounded-b-[24px] rounded-t-[50cqw] p-10 sm:p-16 lg:p-24">
              <div className="deco-leaf leaf-green" />
              <div className="relative rounded-b-[6px] rounded-t-[calc(50cqw_-_40px)] border sm:rounded-t-[calc(50cqw_-_64px)] lg:rounded-t-[calc(50cqw_-_96px)] border-[rgba(166,140,74,0.55)] bg-[#f4eee4] px-5 pb-8 pt-16 sm:px-9 sm:pb-9 sm:pt-20">
                <p className="text-center text-[0.875rem] uppercase tracking-[0.22em] text-[#8a6f2e]">
                  {stepsTitle}
                </p>
                <ol className="mt-7">
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-baseline gap-5 border-t border-[rgba(74,94,51,0.18)] py-5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-heading text-[1.25rem] italic text-[#8a6f2e]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.2] text-[var(--sable-dark)]">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
