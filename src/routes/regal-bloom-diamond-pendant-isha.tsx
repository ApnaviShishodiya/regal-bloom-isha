import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, IndianRupee, Repeat, Sparkles } from "lucide-react";

import { ProductGallery, type GalleryImage } from "@/components/ProductGallery";
import { GoldTracker } from "@/components/GoldTracker";
import { Button } from "@/components/ui/button";

const TITLE = "Regal Bloom Diamond Pendant in Rose Gold | Indriya";
const DESCRIPTION =
  "Regal Bloom Diamond Pendant in 18K pink gold with SI–FG natural diamonds. Floral, everyday-elegant design at ₹2,82,758 approx, excluding taxes.";
const CANONICAL = "/regal-bloom-diamond-pendant-isha";
const HERO_IMAGE =
  "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070?fmt=webp&wid=1400";

const IMAGES: GalleryImage[] = [
  { src: HERO_IMAGE, alt: "Regal Bloom rose gold diamond pendant front view" },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%281%29?fmt=webp&wid=1400",
    alt: "Floral diamond pendant detail in 18k pink gold",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%282%29?fmt=webp&wid=1400",
    alt: "Side profile of the rose gold diamond pendant setting",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%283%29?fmt=webp&wid=1400",
    alt: "Close-up of SI–FG natural diamonds on the gold pendant",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%284%29-AVS?fmt=webp&wid=1400",
    alt: "Regal Bloom diamond pendant styled on the neckline",
  },
];

export const Route = createFileRoute("/regal-bloom-diamond-pendant-isha")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Regal Bloom Diamond Pendant",
          sku: "DEARA40-APPL070",
          brand: { "@type": "Brand", name: "Indriya" },
          description: DESCRIPTION,
          image: IMAGES.map((image) => image.src),
          material: "18 karat pink gold",
          weight: { "@type": "QuantitativeValue", value: 6.527, unitCode: "GRM" },
          offers: {
            "@type": "Offer",
            price: 282758,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: ProductPage,
});

const SPECS = [
  { label: "SKU", value: "DEARA40-APPL070" },
  { label: "Metal", value: "18 karat pink gold" },
  { label: "Diamonds", value: "SI–FG natural diamonds" },
  { label: "Gross weight", value: "6.527 g" },
];

const PROMISES = [
  {
    icon: BadgeCheck,
    title: "BIS Hallmark & certified diamonds",
    body: "Every 18k gold pendant carries BIS hallmarking, and each natural diamond arrives with its own grading certificate.",
  },
  {
    icon: IndianRupee,
    title: "Transparent pricing",
    body: "Metal rate, diamond value and making charges are itemised before you pay — no hidden additions at the counter.",
  },
  {
    icon: Repeat,
    title: "Lifetime exchange & buyback",
    body: "Exchange or buy back your jewellery for life at the prevailing rate, at any Indriya boutique across India.",
  },
];

function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="font-display text-xl tracking-[0.28em] text-wine">INDRIYA</span>
          <span className="eyebrow hidden sm:block">Fine diamond jewellery</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-16">
        <ProductGallery images={IMAGES} />

        <div className="flex flex-col">
          <p className="eyebrow">Isha Collection · Floral diamond pendant</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.08] text-wine sm:text-5xl">
            Regal Bloom <span className="text-gradient-rosegold">Diamond Pendant</span>
          </h1>
          <div className="rule-gold my-6 w-24" />
          <p className="max-w-prose text-[15px] leading-relaxed text-muted-foreground">
            A petalled silhouette in warm pink gold, set with brilliant natural diamonds that catch
            light from every angle. Softly scaled for daily wear, quietly regal for the evenings
            that matter.
          </p>

          <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="font-display text-3xl text-foreground">₹2,82,758</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Approx · excluding taxes
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {SPECS.map((spec) => (
              <div key={spec.label} className="bg-card px-5 py-4">
                <dt className="eyebrow">{spec.label}</dt>
                <dd className="mt-1.5 text-sm text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full px-8 tracking-wide">
              Explore the collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-rosegold px-8 tracking-wide text-wine hover:bg-accent"
            >
              Find a store
            </Button>
          </div>

          <div className="mt-8">
            <GoldTracker />
          </div>
        </div>
      </section>

      <section className="border-y border-border surface-ivory">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-3">
          {PROMISES.map((promise) => (
            <article
              key={promise.title}
              className="rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <promise.icon className="size-5 text-rosegold" aria-hidden />
              <h3 className="mt-4 text-lg text-wine">{promise.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{promise.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        <p className="eyebrow">The story behind the bloom</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-wine sm:text-4xl">
          A rose gold diamond pendant made for real, everyday life
        </h2>
        <div className="rule-gold my-7 w-20" />
        <div className="space-y-5 text-[15px] leading-[1.8] text-muted-foreground">
          <p>
            The Regal Bloom is a Diamond Pendant built around one simple idea: a piece of fine
            jewellery should feel as natural at 10 in the morning as it does at 8 in the evening.
            Its petals are carved in 18 karat pink gold and pavé-set with SI–FG natural diamonds, so
            the design reads as a soft flower from a distance and as precise, hand-finished
            craftsmanship up close. At 6.527 g gross weight, it sits light on the collarbone and
            never asks to be managed through a working day.
          </p>
          <p>
            If you have been searching for a Diamond pendant gold design that is neither too
            traditional nor too trend-driven, this is the middle path. The warm blush tone of a rose
            gold diamond pendant flatters Indian skin tones beautifully, and pink gold is a harder
            alloy than yellow gold — which means the setting holds its shape and its stones for
            years. It layers effortlessly over a cotton kurta, a linen shirt, or a silk saree
            blouse, and looks considered with all three.
          </p>
          <p>
            As a floral diamond pendant, Regal Bloom belongs to a lineage of botanical motifs in
            Indian jewellery, reimagined with cleaner lines and a lower profile. That restraint is
            what also makes it a modern diamond pendant: no heavy borders, no over-scaled halo, just
            a balanced bloom with an open back that lets light travel through the stones. The result
            is a daily wear diamond pendant that you can genuinely wear daily — through commutes,
            meetings, dinners and family celebrations.
          </p>
          <p>
            Choosing a gold pendant is as much about trust as taste. Every 18k gold pendant from
            Indriya is BIS hallmarked, each diamond is a certified natural stone, and the price is
            broken down into metal, stones and making so you always know what you are paying for.
            Lifetime exchange and buyback mean the piece stays liquid value, not a locked purchase.
            The approximate price of ₹2,82,758 excluding taxes reflects today's confirmed gold rate,
            and our Gold Tracker keeps that reference visible while you decide.
          </p>
          <p>
            Explore it alongside our broader edit of Rose gold jewellery designs — matching studs,
            slim bangles and stackable rings — or book an appointment at your nearest boutique to
            try the Regal Bloom on before you commit. SKU DEARA40-APPL070, ready to be styled your
            way.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-wine">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Sparkles className="size-5 text-rosegold-soft" aria-hidden />
            <h2 className="mt-3 font-display text-3xl text-wine-foreground">
              See the bloom in person
            </h2>
            <p className="mt-2 max-w-md text-sm text-wine-foreground/70">
              Our jewellery consultants will walk you through certification, sizing and styling.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full bg-[image:var(--gradient-rosegold)] px-8 text-wine-foreground hover:opacity-90"
            >
              Explore the collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-rosegold-soft/60 bg-transparent px-8 text-wine-foreground hover:bg-wine-foreground/10 hover:text-wine-foreground"
            >
              Find a store
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-wine py-6 text-center text-[11px] uppercase tracking-[0.24em] text-wine-foreground/50">
        Indriya · Regal Bloom Diamond Pendant · DEARA40-APPL070
      </footer>
    </main>
  );
}
