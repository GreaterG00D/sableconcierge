import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import FaqList from "@/components/FaqList";
import HeroMaison from "@/components/HeroMaison";
import AboutNote from "@/components/AboutNote";
import ContactTiles from "@/components/ContactTiles";
import MembershipEditorial from "@/components/MembershipEditorial";
import Reveal from "@/components/Reveal";
import ServicesGallery from "@/components/ServicesGallery";
import TestimonialsSalon from "@/components/TestimonialsSalon";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  alternates: { canonical: "https://sablesvcs.com/" },
};

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

        <ServicesGallery
          eyebrow={servicesSection.eyebrow}
          subtitle={servicesSection.subtitle}
          services={services}
        />

        <MembershipEditorial
          eyebrow={membership.eyebrow}
          subtitle={membership.subtitle}
          stepsTitle={membership.featuresTitle}
          steps={membership.features}
          benefits={membership.benefits}
        />

        <section
          id="reviews"
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.55)] sable-panel">
              {/* Leaf pattern across the top, fading out before the reviews. */}
              <div className="deco-leaf leaf-green leaf-fade-top" />
              <div className="relative">
                <TestimonialsSalon
                  eyebrow={testimonialsSection.eyebrow}
                  testimonials={testimonials}
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id={faqSection.id}
          className="scroll-mt-20 bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]"
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border-3 border-[rgba(166,140,74,0.42)] bg-[#f4eee4]">
              {/* Leaf pattern behind the heading, fading out before the questions. */}
              <div className="deco-leaf leaf-cream leaf-fade-top" />
              <div className="relative mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
                <p className="text-center text-[0.875rem] uppercase tracking-[0.2em] text-[var(--sable-sage)]">
                  {faqSection.eyebrow}
                </p>
                <h2 className="mt-4 text-center font-heading text-3xl tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                  {faqSection.title}
                </h2>

                <FaqList items={faq} />
              </div>
            </div>
          </Reveal>
        </section>

        <AboutNote
          title={about.subheading}
          body={about.body}
          brand={footer.brand}
        />

        <ContactTiles
          id={contactSection.id}
          eyebrow={contactSection.eyebrow}
          subtitle={contactSection.subtitle}
          phone={contact.phone}
          email={contact.email}
          instagram={contact.instagram}
        />

      </main>
      <SiteFooter brand={footer.brand} location={footer.location} />
    </>
  );
}
