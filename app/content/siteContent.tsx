export const siteContent = {
  hero: {
    pretitle: "Private Concierge Services",
    title: "Sable Concierge",
    tagline: "Impeccable Care for Plants and Place",
    subtitle:
      "A private concierge service devoted to thoughtful home care, personal assistance, and beautifully managed daily living.",
    ctaLabel: "Arrange a Private Consultation",
    ctaTarget: "contact",
    location: "Austin, Texas",
  },

  about: {
    eyebrow: "Sable Concierge",
    supportingLine: "Discreet, thoughtful, and deeply personal support",
    title: "About Olivia",
    heading: "Home Manager",
    subheading: "A natural standard of care",
    body: `Some people are natural caretakers — Olivia Whitehead is one of them. Long before Sable Concierge had a name, Olivia was the person her family turned to: the one who showed up, stayed organized, and made sure everything — and everyone — was thoughtfully cared for. That same devotion now extends to her clients, their homes, and their plants.

Olivia has a genuine gift for nurturing living things. Case in point: her 12 orchids — notoriously particular plants that many people quietly give up on — are all healthy, thriving, and in bloom. That is not luck. It is patience, careful observation, and an instinctive understanding of what something needs before it begins to struggle. She brings that same attentiveness to every client she serves.

At Sable Concierge, Olivia’s love for plants, people, and place is more than a tagline — it is the foundation of her work. With a discerning eye for detail and a natural ability to anticipate needs, she delivers a level of care that feels deeply personal, because it is.`,
  },

  servicesSection: {
    eyebrow: "Services",
    title: "Considered Support, Beautifully Handled",
    subtitle:
      "Every offering is tailored to the rhythms of your home, your priorities, and your lifestyle.",
  },

  services: [
    {
      title: "Plant Care",
      description:
        "Watering, pruning, fertilizing, and repotting — ensuring your plants remain healthy, vibrant, and beautifully kept.",
    },
    {
      title: "Personal Shopping",
      description:
        "Grocery runs, market visits, gift sourcing, and wrapping — thoughtfully handled on your behalf.",
    },
    {
      title: "Home Care",
      description:
        "Meeting and supervising your gardener, housekeeper, cable technician, or repair professional with care and discretion.",
    },
    {
      title: "Home Organization",
      description:
        "Tailored organization systems designed around your space, your routines, and your personal style.",
    },
  ],

  membership: {
    eyebrow: "Membership",
    title: "Ongoing Concierge Care",
    subtitle: "A personalized membership designed around the way you live.",
    centerText: "Custom & Personalized",
    featuresTitle: "How It Works",
    benefitsTitle: "Benefits",
    // Shown as numbered steps.
    features: [
      "A conversation about your needs",
      "A walkthrough of your home",
      "A plan built around you",
      "Ongoing, reliable care",
    ],
    benefits: [
      "Curated to your needs and desires",
      "Reliable and consistent",
      "Trustworthy professionals",
    ],
  },

  testimonialsSection: {
    eyebrow: "Kind Words",
  },

  // Headlines are lifted from each client's own review. Detail is optional.
  // Image is an Unsplash photo ID (placeholder until Olivia has her own).
  testimonials: [
    {
      headline: "Complete peace of mind.",
      body: [
        "Whenever I’m away for an extended stretch, Sable Services gives me complete peace of mind. Olivia handles everything at my home as if it were her own: she meets my housecleaners and makes sure the work is done right, coordinates with contractors whenever something comes up, and keeps my plants thriving. She’s reliable, communicative, and thorough, and I never have to worry about what’s happening while I’m gone. I can’t recommend Olivia and Sable Services highly enough.",
      ],
      name: "Charlie J.",
      detail: "Austin, TX",
      image: "photo-1600210492486-724fe5c67fb0",
    },
    {
      headline: "Olivia transformed my closet.",
      body: [
        "Her keen eye for detail and her organizational skills made the entire process feel seamless. She arranged my clothes by season and kept my favorites front and center, so the pieces I reach for most are always easy to find. She organized my shoes and purses by occasion and how often I wear them, which makes getting ready faster and far more enjoyable.",
        "Olivia was collaborative, thoughtful, and attentive to my vision. The result is a personalized closet based on my needs and desires. I highly recommend Olivia for any organizational project.",
      ],
      name: "Martha",
      image: "photo-1513694203232-719a280e022f",
    },
    {
      headline: "Care, kindness and compassion.",
      body: [
        "Olivia at Sable Concierge is wonderful! She handles anything entrusted to her with care, kindness and compassion. Whether it’s tending to plants or pets, grocery shopping, collecting mail and packages, or anything else, she ensures the job is done well! Olivia is very trustworthy and dependable and I’m so grateful to have someone like her tend to things when I need her.",
      ],
      name: "Melanie",
      image: "photo-1416879595882-3373a0480b5b",
    },
    {
      headline: "A rare level of professionalism.",
      body: [
        "Olivia was fantastic! She puts in the work with such a rare level of professionalism that my dog and I only see from my vet! My little Perry definitely loved seeing her way more than them, too. If you asked either of us, we’d both recommend Olivia for the amazing hospitality and attention to detail.",
      ],
      name: "David",
      image: "photo-1616047006789-b7af5afb8c20",
    },
    {
      headline: "I’d tell them to call Olivia.",
      body: [
        "Olivia took care of my cat and my plants while I was out of the country. It was good to be that far from home and feel like things were handled. If a friend asked who I’d trust with their place, I’d tell them to call Olivia.",
      ],
      name: "James",
      image: "photo-1493663284031-b7e3aefcae8e",
    },
  ],

  contactSection: {
    id: "contact",
    eyebrow: "Contact",
    title: "Begin with a Conversation",
    subtitle:
      "For inquiries, availability, or to arrange your first session, reach out directly below.",
    quote: "The Gift of Time",
    brand: "Sable Concierge",
    location: "Austin, Texas",
    tagline: "Impeccable Care for Plants and Place",
  },

  contact: {
    phone: "512.422.5413",
    email: "Olivia@SableServices.com",
    instagram: "@sableconciergeatx",
  },
} as const;
