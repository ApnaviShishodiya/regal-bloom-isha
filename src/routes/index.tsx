import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold" });
  },
});
