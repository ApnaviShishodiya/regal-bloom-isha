import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jewellery-stores")({
  head: () => ({
    meta: [
      { title: "Find an Indriya Store | Indriya Fine Jewellery" },
      { name: "description", content: "Locate an Indriya boutique near you for fine diamond and gold jewellery." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://regal-bloom-isha.lovable.app/jewellery-stores" }],
  }),
  beforeLoad: () => {
    throw redirect({
      href: "https://www.indriya.com/jewellery-stores",
      statusCode: 308,
    });
  },
});
