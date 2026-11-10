import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import HeroMaison from "@/components/HeroMaison";
import MembershipBridge from "@/components/MembershipBridge";
import Reveal from "@/components/Reveal";
import TestimonialsSalon from "@/components/TestimonialsSalon";
import { siteContent } from "@/content/siteContent";
import {
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";

export default function Page() {
  const {
    hero,
    about,
    servicesSection,
    services,
    membership,
    testimonialsSection,
    testimonials,
    contactSection,
    contact,
    faqSection,
    faq,
    footer,
  } = siteContent;

  return (
    <>
      <SiteHeader brand={footer.brand} phone={contact.phone} />
      <main
        id="top"
        className="min-h-screen bg-[var(--sable-warm-bg)] text-[var(--sable-body)]"
      >
        <HeroMaison
          location={hero.location}
          subtitle={hero.subtitle}
          services={services}
        />

        <section
          id="services"
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] bg-[linear-gradient(180deg,#1d2a16_0%,#25341d_100%)] text-white">
              <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
                <div className="text-center">
                  <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[rgba(235,230,215,0.86)]">
                    {servicesSection.eyebrow}
                  </p>

                  <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                    {servicesSection.title}
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-base italic leading-7 text-[var(--sable-cream)] sm:text-lg">
                    {servicesSection.subtitle}
                  </p>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service, index) => (
                    <Reveal key={service.title} delay={index * 80} y={20}>
                      <div className="rounded-[22px] border border-[rgba(166,140,74,0.22)] bg-[rgba(255,255,255,0.035)] p-6 backdrop-blur-[1px] transition duration-500 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.05)]">
                        <div className="mb-5 h-px w-12 bg-[linear-gradient(90deg,var(--sable-gold)_0%,rgba(166,140,74,0.15)_100%)]" />

                        <h3 className="font-heading text-[1.32rem] leading-[1.15] text-white">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-base leading-7 text-[rgba(235,230,215,0.9)]">
                          {service.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <MembershipBridge
          eyebrow={membership.eyebrow}
          title={membership.title}
          subtitle={membership.subtitle}
          featuresTitle={membership.featuresTitle}
          benefitsTitle={membership.benefitsTitle}
          features={[...membership.features]}
          benefits={[...membership.benefits]}
          centerText={membership.centerText}
        />

        <section
          id="reviews"
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] bg-[linear-gradient(180deg,#1d2a16_0%,#25341d_100%)]">
              <TestimonialsSalon
                eyebrow={testimonialsSection.eyebrow}
                testimonials={testimonials}
              />
            </div>
          </Reveal>
        </section>

        <section
          id={faqSection.id}
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f4eee3_100%)]">
              <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
                <p className="text-center text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-sage)]">
                  {faqSection.eyebrow}
                </p>
                <h2 className="mt-4 text-center font-heading text-3xl tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                  {faqSection.title}
                </h2>

                <div className="mt-10 border-b border-[rgba(166,140,74,0.35)]">
                  {faq.map((item) => (
                    <details
                      key={item.question}
                      className="group border-t border-[rgba(166,140,74,0.35)]"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-heading text-[1.25rem] leading-[1.3] text-[var(--sable-dark)] sm:text-[1.4rem] [&::-webkit-details-marker]:hidden">
                        {item.question}
                        <span
                          aria-hidden
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(166,140,74,0.6)] text-[1.3rem] leading-none text-[var(--sable-sage)] transition-transform duration-300 group-open:rotate-45"
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
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="about"
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f4eee3_100%)]">
              <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
                <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-sage)]">
                      {about.eyebrow}
                    </p>
                    <p className="mt-2 text-base italic text-[var(--sable-sage)]">
                      {about.supportingLine}
                    </p>
                  </div>
                </div>

                <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                  <div>
                    <h2 className="font-heading text-3xl leading-[0.95] tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                      {about.title.toUpperCase()}
                    </h2>
                    <div className="mt-3 h-px w-10 bg-[linear-gradient(90deg,var(--sable-gold)_0%,rgba(166,140,74,0.15)_100%)]" />
                    <p className="mt-3 font-heading text-2xl leading-[1.2] tracking-[-0.01em] text-[rgba(58,63,45,0.85)]">
                      {about.heading}
                    </p>

                    <div className="mt-6 h-px w-16 bg-[rgba(166,140,74,0.5)]" />
                  </div>

                  <div>
                    <h3 className="font-heading text-[1.35rem] text-[var(--sable-dark)] sm:text-[1.6rem]">
                      {about.subheading}
                    </h3>

                    <p className="mt-6 whitespace-pre-line text-[1.125rem] leading-8 text-[var(--sable-body-soft)]">
                      {about.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id={contactSection.id}
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] py-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.5)] bg-[linear-gradient(180deg,#f6f0e6_0%,#f1eadf_100%)] text-[var(--sable-dark)]">
              <div className="mx-auto max-w-2xl px-6 py-14 text-center sm:px-10 sm:py-18 md:px-14 md:py-24">
                <p className="text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-sage)]">
                  {contactSection.eyebrow}
                </p>

                <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                  {contactSection.title}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--sable-body-soft)] sm:text-lg">
                  {contactSection.subtitle}
                </p>

                <ul className="mx-auto mt-12 max-w-[34rem] space-y-4 text-left">
                  <Reveal delay={60} y={14}>
                    <li>
                      <a
                        href={`tel:${contact.phone.replace(/\D/g, "")}`}
                        className="flex items-center gap-4 rounded-[18px] border border-[rgba(166,140,74,0.22)] bg-[rgba(255,255,255,0.45)] px-5 py-4 transition duration-300 hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.7)]"
                      >
                        <RiPhoneLine className="h-5 w-5 shrink-0 text-[var(--sable-sage)]" />
                        <span className="text-[0.98rem] text-[var(--sable-dark)] sm:text-[1.05rem]">
                          {contact.phone}
                        </span>
                      </a>
                    </li>
                  </Reveal>

                  <Reveal delay={120} y={14}>
                    <li>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-4 rounded-[18px] border border-[rgba(166,140,74,0.22)] bg-[rgba(255,255,255,0.45)] px-5 py-4 transition duration-300 hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.7)]"
                      >
                        <RiMailLine className="h-5 w-5 shrink-0 text-[var(--sable-sage)]" />
                        <span className="break-all text-[0.98rem] text-[var(--sable-dark)] sm:text-[1.05rem]">
                          {contact.email}
                        </span>
                      </a>
                    </li>
                  </Reveal>

                  <Reveal delay={180} y={14}>
                    <li>
                      <a
                        href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-[18px] border border-[rgba(166,140,74,0.22)] bg-[rgba(255,255,255,0.45)] px-5 py-4 transition duration-300 hover:-translate-y-[1px] hover:bg-[rgba(255,255,255,0.7)]"
                      >
                        <RiInstagramLine className="h-5 w-5 shrink-0 text-[var(--sable-sage)]" />
                        <span className="text-[0.98rem] text-[var(--sable-dark)] sm:text-[1.05rem]">
                          {contact.instagram}
                        </span>
                      </a>
                    </li>
                  </Reveal>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
      <SiteFooter
        brand={footer.brand}
        tagline={footer.tagline}
        location={footer.location}
        phone={contact.phone}
        email={contact.email}
        instagram={contact.instagram}
      />
    </>
  );
}
