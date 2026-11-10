import type { IconType } from "react-icons";
import {
  RiArchiveDrawerLine,
  RiHomeLine,
  RiPlantLine,
  RiShoppingBagLine,
} from "react-icons/ri";

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

// Icon and photo for each service, keyed by its title in siteContent.
// Photos are free under the Unsplash License.
export const serviceVisuals: Record<
  string,
  { icon: IconType; image: string; alt: string }
> = {
  "Plant Care": {
    icon: RiPlantLine,
    image: photo("photo-1788014956391-21dea41215c4"),
    alt: "Hands watering a trailing pothos",
  },
  "Personal Shopping": {
    icon: RiShoppingBagLine,
    image: photo("photo-1694903706094-f882417a0463"),
    alt: "Fresh flowers at a market stall",
  },
  "Home Care": {
    icon: RiHomeLine,
    image: photo("photo-1771354959667-96360bf59eab"),
    alt: "A sunny entryway with a glass front door",
  },
  "Home Organization": {
    icon: RiArchiveDrawerLine,
    image: photo("photo-1778731660196-1b57aa0f7ef5"),
    alt: "An organized closet with handbags and a chandelier",
  },
};
