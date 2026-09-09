import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, IndianRupee, Repeat, ShieldCheck, Sparkles } from "lucide-react";

import { ProductGallery, type GalleryImage } from "@/components/ProductGallery";
import { GoldTracker } from "@/components/GoldTracker";
import { Button } from "@/components/ui/button";

const COLLECTION_URL = "https://www.indriya.com/jewellery/pendants";
const DIAMOND_PENDANTS_URL = "https://www.indriya.com/jewellery/diamond-pendants";
const ROSE_GOLD_URL = "https://www.indriya.com/jewellery/rose-gold-jewellery";
const STORE_URL = "https://www.indriya.com/jewellery-stores";
const GOLD_RATE_URL = "https://www.indriya.com/gold-rate-today";
const INDRIYA_LOGO_URL =
  "https://s7ap1.scene7.com/is/content/noveljewelsprod/Indriya-Logo?fmt=webp-alpha&fit=wrap&dpr=off";

// SEO Configuration
const PRIMARY_KEYWORD = "18k pink gold diamond pendant";
const META_TITLE = "18K Pink Gold Diamond Pendant | Regal Bloom by Indriya";
const META_DESCRIPTION =
  "Discover the Regal Bloom, an 18K pink gold diamond pendant with SI–FG natural diamonds. Everyday-elegant design at ₹2,82,758.";
const URL_SLUG = "/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold";
const CANONICAL = "https://regal-bloom-isha.lovable.app/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold";
const HERO_IMAGE =
  "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070?fmt=webp&wid=1400";

const IMAGES: GalleryImage[] = [
  {
    src: HERO_IMAGE,
    alt: "Regal Bloom 18K pink gold diamond pendant with SI–FG natural diamonds, front view",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%281%29?fmt=webp&wid=1400",
    alt: "Floral diamond pendant detail showcasing 18k pink gold craftsmanship and diamond setting",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%282%29?fmt=webp&wid=1400",
    alt: "Side profile of the 18K pink gold pendant setting with natural diamond pavé work",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%283%29?fmt=webp&wid=1400",
    alt: "Close-up of SI–FG natural diamonds on the 18k gold pendant, showing clarity and sparkle",
  },
  {
    src: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEARA40-APPL070%284%29-AVS?fmt=webp&wid=1400",
    alt: "Regal Bloom 18K pink gold diamond pendant styled on the neckline for everyday wear",
  },
];

export const Route = createFileRoute("/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "Diamond Pendant, Diamond pendant gold, rose gold diamond pendant, floral diamond pendant, modern diamond pendant, daily wear diamond pendant, gold pendant, 18k gold pendant, Rose gold jewellery designs",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Regal Bloom: 18K Pink Gold Diamond Pendant",
          sku: "DEARA40-APPL070",
          brand: { "@type": "Brand", name: "Indriya" },
          description: META_DESCRIPTION,
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Diamond Pendants",
              item: DIAMOND_PENDANTS_URL,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Regal Bloom 18K Pink Gold Diamond Pendant",
              item: CANONICAL,
            },
          ],
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
          <a href="https://www.indriya.com/" aria-label="Indriya home" className="inline-flex items-center">
            <img
              src={INDRIYA_LOGO_URL}
              alt="Indriya fine jewellery logo"
              width="160"
              height="80"
              className="h-8 w-auto sm:h-10"
              loading="eager"
            />
          </a>
          <span className="eyebrow hidden sm:block">Fine diamond jewellery</span>
        </div>
      </header>

      {/* 100% Indriya Certified strip */}
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2.5">
          <ShieldCheck className="size-4 text-rosegold" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-wine">
            100% Indriya Certified
          </span>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-16">
        <ProductGallery images={IMAGES} />

        <div className="flex flex-col">
          <p className="eyebrow">Isha Collection · Floral design</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.08] text-wine sm:text-5xl">
            18K Pink Gold <span className="text-gradient-rosegold">Diamond Pendant</span>
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
            <Button size="lg" className="rounded-full px-8 tracking-wide" asChild>
              <a href={DIAMOND_PENDANTS_URL} target="_blank" rel="noopener noreferrer">
                Explore the collection
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-rosegold px-8 tracking-wide text-wine hover:bg-accent"
              asChild
            >
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                Find a store near you
              </a>
            </Button>
          </div>

          <div className="mt-8">
            <GoldTracker />
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
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

      {/* BODY COPY SECTION WITH CLEAR HIERARCHY */}
      <section className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        {/* INTRO PARAGRAPH - Keywords in first 100 words */}
        <div className="mb-10">
          <p className="text-[15px] leading-[1.8] text-muted-foreground">
            The Regal Bloom is a refined Diamond Pendant in 18 karat pink gold, designed for those
            seeking everyday elegance with lasting value. As a rose gold diamond pendant, it pairs
            the warmth of pink gold with brilliant SI–FG natural diamonds. Crafted with meticulous
            detail at 6.527 g, this floral diamond pendant sits lightly on the collarbone while
            carrying the presence expected from a fine Diamond pendant gold piece. Whether you want
            a daily wear diamond pendant or a statement jewel, the Regal Bloom answers both. If you
            are exploring Rose gold jewellery designs, this modern diamond pendant shows how Indian
            motifs can be expressed through clean, contemporary lines. Browse our{" "}
            <Link
              to="/jewellery/rose-gold-jewellery"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              rose gold jewellery collection
            </Link>{" "}
            or view the full{" "}
            <Link
              to="/jewellery/pendants"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              pendant collection
            </Link>
            . A graceful 18k gold pendant and a trusted gold pendant choice, it moves effortlessly
            from work to occasion dressing. To experience it in person, visit your nearest{" "}
            <Link
              to="/jewellery-stores"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              Indriya boutique
            </Link>
            .
          </p>
        </div>

        {/* DESIGN & CRAFTSMANSHIP SECTION */}
        <div className="mb-10">
          <h2 className="font-display text-2xl leading-tight text-wine mb-4">
            Design & Craftsmanship
          </h2>
          <p className="text-[15px] leading-[1.8] text-muted-foreground mb-3">
            The Regal Bloom features a floral silhouette carved in premium 18K pink gold, pavé-set
            with SI–FG natural diamonds. Each facet is hand-finished to reflect light beautifully,
            creating depth and dimension that changes with movement. Pink gold is chosen for its
            durability and its warm blush tone, which flatters Indian skin tones and complements
            diverse wardrobes—from cotton kurtas to silk sarees to contemporary clothing.
          </p>
          <p className="text-[15px] leading-[1.8] text-muted-foreground">
            As a floral pendant, it honors the lineage of botanical motifs in Indian fine jewellery
            while embracing cleaner lines and a modern profile. The open back allows light to travel
            through the stones, creating a balanced bloom with no over-scaled halo or heavy borders.
            This restraint is what makes it a truly modern diamond pendant—refined enough for work
            meetings, elegant enough for evening celebrations.
          </p>
        </div>

        {/* TRUST & VALUE SECTION */}
        <div>
          <h2 className="font-display text-2xl leading-tight text-wine mb-4">
            Trust, Certification & Lifetime Value
          </h2>
          <p className="text-[15px] leading-[1.8] text-muted-foreground mb-3">
            Every 18K gold pendant from Indriya carries BIS hallmarking, the gold standard for fine
            jewellery in India. Each natural diamond arrives with its own grading certificate,
            ensuring authenticity and quality. Metal rate, diamond value, and making charges are
            itemised transparently before you pay—no hidden costs at the counter.
          </p>
          <p className="text-[15px] leading-[1.8] text-muted-foreground">
            A 18K gold diamond pendant is a lifetime investment. That's why Indriya offers lifetime
            exchange and buyback at prevailing rates, ensuring your piece stays as liquid value, not
            a locked purchase. The approximate price of ₹2,82,758 (excluding taxes) reflects
            today's confirmed gold rate, which you can verify on our Gold Tracker before deciding.
            Book an appointment at your nearest Indriya boutique to try the Regal Bloom and consult
            our jewellery experts about sizing, styling, and care.
          </p>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="border-t border-border bg-wine">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Sparkles className="size-5 text-rosegold-soft" aria-hidden />
            <h2 className="mt-3 font-display text-3xl text-wine-foreground">
              See the bloom in person
            </h2>
            <p className="mt-2 max-w-md text-sm text-wine-foreground/70">
              Book a consultation with our jewellery experts to try the Regal Bloom and explore our
              broader collection of 18K gold and diamond jewellery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full bg-[image:var(--gradient-rosegold)] px-8 text-wine-foreground hover:opacity-90"
              asChild
            >
              <a href={COLLECTION_URL} target="_blank" rel="noopener noreferrer">
                Explore the collection
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-rosegold-soft/60 bg-transparent px-8 text-wine-foreground hover:bg-wine-foreground/10 hover:text-wine-foreground"
              asChild
            >
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                Find a store near you
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-wine py-6 text-center text-[11px] uppercase tracking-[0.24em] text-wine-foreground/50">
        Indriya · Regal Bloom 18K Pink Gold Diamond Pendant · DEARA40-APPL070
      </footer>
    </main>
  );
}
