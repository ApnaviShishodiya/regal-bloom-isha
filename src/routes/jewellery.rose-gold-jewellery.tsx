import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jewellery/rose-gold-jewellery")({
  head: () => ({
    meta: [
      { title: "Rose Gold Jewellery | Indriya Fine Jewellery" },
      { name: "description", content: "Discover Indriya's rose gold jewellery designs, from pendants to earrings." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://regal-bloom-isha.lovable.app/jewellery/rose-gold-jewellery" }],
  }),
  beforeLoad: () => {
    throw redirect({
      href: "https://www.indriya.com/jewellery/rose-gold-jewellery",
      statusCode: 308,
    });
  },
});
