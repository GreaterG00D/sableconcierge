import MembershipBridge from "@/components/MembershipBridge";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/content/siteContent";
import {
  RiPlantLine,
  RiHomeLine,
  RiShoppingBagLine,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { FaPaw } from "react-icons/fa6";

export default function Page() {
  const { hero, about, services, contact } = siteContent;
  const heroWords = hero.title.split(" ");

  return (
    <main className="min-h-screen bg-[var(--sable-warm-bg)] text-[var(--sable-body)]">
      {/* Hero */}
      <section className="bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]">
        <div className="overflow-hidden rounded-[32px] border border-[rgba(166,140,74,0.55)] bg-[linear-gradient(180deg,#1b2815_0%,#22311a_54%,#273620_100%)] shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 sm:py-28 md:px-14 md:py-36">
            <Reveal y={12}>
              <p className="text-[0.72rem] uppercase tracking-[0.4em] text-[rgba(235,230,215,0.7)] sm:text-[0.78rem]">
                Private Concierge Services
              </p>
            </Reveal>

            <Reveal delay={80} y={18}>
              <div className="mt-8">
                <p className="font-heading text-[4.3rem] leading-[0.9] tracking-[-0.05em] text-[var(--sable-warm-bg)] sm:text-[5.7rem] md:text-[6.9rem] motion-safe:animate-[float_7s_ease-in-out_infinite]">
                  {heroWords[0]}
                </p>

                <p className="mt-2 font-heading text-[1.05rem] tracking-[0.42em] text-[var(--sable-gold)] sm:text-[1.2rem]">
                  {heroWords.slice(1).join(" ").toUpperCase()}
                </p>
              </div>
            </Reveal>

            <Reveal delay={140} y={12}>
              <div className="mx-auto mt-8 h-px w-24 bg-[linear-gradient(90deg,transparent_0%,rgba(166,140,74,0.15)_20%,rgba(166,140,74,0.75)_50%,rgba(166,140,74,0.15)_80%,transparent_100%)]" />
            </Reveal>

            <Reveal delay={260} y={18}>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[rgba(235,230,215,0.8)] sm:text-[0.98rem]">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={320} y={14}>
              <div className="mt-10 flex items-center justify-center gap-5 text-[var(--sable-cream)] opacity-80 sm:gap-6">
                <span className="h-px w-10 bg-[rgba(200,213,181,0.25)] sm:w-16" />
                <RiPlantLine className="h-[18px] w-[18px] transition-transform duration-500 hover:-translate-y-0.5" />
                <FaPaw className="h-[16px] w-[16px] transition-transform duration-500 hover:-translate-y-0.5" />
                <RiHomeLine className="h-[18px] w-[18px] transition-transform duration-500 hover:-translate-y-0.5" />
                <RiShoppingBagLine className="h-[18px] w-[18px] transition-transform duration-500 hover:-translate-y-0.5" />
                <span className="h-px w-10 bg-[rgba(200,213,181,0.25)] sm:w-16" />
              </div>
            </Reveal>

            <Reveal delay={380} y={16}>
              <a
                href="#contact"
                className="mt-12 inline-flex items-center justify-center rounded-full border border-[rgba(166,140,74,0.85)] px-10 py-4 font-heading text-[0.92rem] tracking-[0.14em] text-[var(--sable-warm-bg)] transition duration-300 hover:-translate-y-[1px] hover:bg-[rgba(166,140,74,0.95)] hover:text-[var(--sable-dark)] sm:px-14"
              >
                Arrange a Private Consultation
              </a>
            </Reveal>

            <Reveal delay={440} y={12}>
              <div className="mt-14 flex flex-col items-center gap-2 text-[0.8rem] uppercase tracking-[0.26em] text-[rgba(235,230,215,0.56)]">
                <p>{hero.location}</p>
                <p className="text-[var(--sable-gold)]">Impeccable Care for Plants and Place</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(166,140,74,0.42)] bg-[linear-gradient(180deg,#f8f3ea_0%,#f4eee3_100%)]">
            <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
              <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.78rem] uppercase tracking-[0.36em] text-[var(--sable-sage)]">
                    Sable Concierge
                  </p>
                  <p className="mt-2 text-sm italic text-[rgba(58,63,45,0.72)]">
                    Discreet, thoughtful, and deeply personal support
                  </p>
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                <div>
                  <h2 className="font-heading text-3xl leading-[0.95] tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                    ABOUT
                    <span className="block">OLIVIA</span>
                  </h2>

                  <div className="mt-6 h-px w-16 bg-[rgba(166,140,74,0.5)]" />
                </div>

                <div>
                  <h3 className="font-heading text-[1.35rem] text-[var(--sable-dark)] sm:text-[1.6rem]">
                    A natural standard of care
                  </h3>

                  <p className="mt-6 whitespace-pre-line text-[1rem] leading-8 text-[var(--sable-body-soft)]">
                    {about.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-[var(--sable-warm-bg)] px-[10px] pt-[10px]">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(166,140,74,0.55)] bg-[linear-gradient(180deg,#1d2a16_0%,#25341d_100%)] text-white">
            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-18 md:px-14 md:py-24">
              <div className="text-center">
                <p className="text-[0.78rem] uppercase tracking-[0.36em] text-[rgba(235,230,215,0.62)]">
                  Services
                </p>

                <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                  Considered Support, Beautifully Handled
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-7 text-[var(--sable-cream)] sm:text-base">
                  Every offering is tailored to the rhythms of your home, your priorities, and your lifestyle.
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

                      <p className="mt-4 text-sm leading-7 text-[rgba(235,230,215,0.88)]">
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
        features={siteContent.membership.features}
        benefits={siteContent.membership.benefits}
        centerText="Custom & Personalized"
      />

      {/* Contact */}
      <section id="contact" className="bg-[var(--sable-warm-bg)] px-[10px] py-[10px]">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(166,140,74,0.5)] bg-[linear-gradient(180deg,#f6f0e6_0%,#f1eadf_100%)] text-[var(--sable-dark)]">
            <div className="mx-auto max-w-2xl px-6 py-14 text-center sm:px-10 sm:py-18 md:px-14 md:py-24">
              <p className="text-[0.78rem] uppercase tracking-[0.36em] text-[var(--sable-sage)]">
                Contact
              </p>

              <h2 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-[var(--sable-dark)] sm:text-4xl">
                Begin with a Conversation
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--sable-body-soft)] sm:text-base">
                For inquiries, availability, or to arrange your first session, reach out directly below.
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

              <div className="mx-auto mt-12 h-px w-20 bg-[rgba(166,140,74,0.42)]" />

              <p className="mt-8 font-heading text-base italic text-[var(--sable-sage)] sm:text-lg">
                “The Gift of Time”
              </p>

              <div className="mt-4 space-y-1 text-sm text-[var(--sable-body-soft)]">
                <p>Sable Concierge</p>
                <p>Austin, Texas</p>
                <p className="font-heading italic text-[var(--sable-sage)]">
                  Impeccable Care for Plants and Place
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}