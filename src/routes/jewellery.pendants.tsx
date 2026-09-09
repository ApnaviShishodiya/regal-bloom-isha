import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jewellery/pendants")({
  head: () => ({
    meta: [
      { title: "Pendants | Indriya Fine Jewellery" },
      { name: "description", content: "Explore Indriya's pendant collection in gold, diamonds and gemstones." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://regal-bloom-isha.lovable.app/jewellery/pendants" }],
  }),
  beforeLoad: () => {
    throw redirect({
      href: "https://www.indriya.com/jewellery/pendants",
      statusCode: 308,
    });
  },
});
