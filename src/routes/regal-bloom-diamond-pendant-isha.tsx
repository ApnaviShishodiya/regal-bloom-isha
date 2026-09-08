import { createFileRoute, redirect } from "@tanstack/react-router";

// Redirect old URL to new SEO-friendly URL
export const Route = createFileRoute("/regal-bloom-diamond-pendant-isha")({
  beforeLoad: () => {
    throw redirect({
      to: "/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold",
      replace: true,
    });
  },
});
