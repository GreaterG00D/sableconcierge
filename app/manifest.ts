import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sable Services",
    short_name: "Sable",
    description: "Private home concierge in Austin, Texas.",
    start_url: "/",
    display: "browser",
    background_color: "#f0ede6",
    theme_color: "#1f2e24",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
