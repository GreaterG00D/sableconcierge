import { siteContent } from "@/content/siteContent";

const SITE = "https://sablesvcs.com";

export default function StructuredData() {
  const { contact, faq, hero, services } = siteContent;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Sable Services",
        publisher: { "@id": `${SITE}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#business`,
        name: "Sable Services",
        alternateName: "Sable Concierge",
        description: hero.subtitle,
        slogan: hero.tagline,
        url: `${SITE}/`,
        logo: `${SITE}/sable-concierge-logo.png`,
        image: `${SITE}/social/sable-concierge-lattice-v3.jpg`,
        telephone: `+1-${contact.phone.replace(/\./g, "-")}`,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Austin",
          addressRegion: "TX",
          addressCountry: "US",
        },
        areaServed: { "@type": "City", name: "Austin, Texas" },
        founder: { "@type": "Person", name: "Olivia Whitehead" },
        sameAs: [`https://instagram.com/${contact.instagram.replace("@", "")}`],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Concierge Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
