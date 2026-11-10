import Reveal from "@/components/Reveal";
import { serviceVisuals } from "@/content/serviceVisuals";

type Props = {
  eyebrow: string;
  subtitle: string;
  services: readonly { title: string; description: string }[];
};

export default function ServicesGallery({ eyebrow, subtitle, services }: Props) {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
    >
      <div className="rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] sable-panel px-6 py-16 sm:px-10 md:py-24 lg:px-16 xl:px-24">
        {/* Leaf pattern across the top, fading out before the photos. */}
        <div className="deco-leaf leaf-green leaf-fade-top" />
        <div className="relative mx-auto max-w-[1400px]">
          {/* Centered while stacked; heading left and intro right on wide screens. */}
          <Reveal>
            <div className="grid items-end gap-6 text-center lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:text-left">
              <div>
                <p className="text-[0.875rem] uppercase tracking-[0.22em] text-[var(--sable-gold)]">
                  {eyebrow}
                </p>
                <h2 className="mt-5 font-heading text-[clamp(2.3rem,4.4vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.03em] text-[var(--sable-warm-bg)]">
                  Considered support,{" "}
                  <em className="whitespace-nowrap font-normal italic text-[var(--sable-gold)]">
                    beautifully handled.
                  </em>
                </h2>
              </div>
              <p className="mx-auto max-w-[30rem] text-[1.1875rem] leading-[1.7] text-[rgba(235,230,215,0.86)] lg:mx-0 lg:pb-3">
                {subtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {services.map((service, index) => {
              const visual = serviceVisuals[service.title];
              const Icon = visual?.icon;
              return (
                <Reveal key={service.title} delay={(index % 4) * 90} y={20}>
                  <article className="@container mx-auto flex w-full max-w-[340px] flex-col items-center text-center">
                    {visual && (
                      <div
                        role="img"
                        aria-label={visual.alt}
                        className="aspect-[4/5] w-full rounded-b-[24px] rounded-t-[50cqw] bg-[var(--panel-b)] bg-cover bg-center"
                        style={{ backgroundImage: `url(${visual.image})` }}
                      />
                    )}
                    {Icon && (
                      <Icon
                        aria-hidden
                        className="mt-7 h-6 w-6 text-[var(--sable-gold)]"
                      />
                    )}
                    <h3 className="mt-4 font-heading text-[1.75rem] font-normal leading-[1.15] text-[var(--sable-warm-bg)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-[1.7] text-[rgba(235,230,215,0.86)]">
                      {service.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
