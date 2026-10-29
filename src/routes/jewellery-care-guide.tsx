import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const INDRIYA_LOGO_URL =
  "https://s7ap1.scene7.com/is/content/noveljewelsprod/Indriya-Logo?fmt=webp-alpha&fit=wrap&dpr=off";
const STORE_URL = "https://www.indriya.com/jewellery-stores";
const GOLD_RATE_URL = "https://www.indriya.com/gold-rate-today";

const META_TITLE = "Jewellery Care Guide | Indriya";
const META_DESCRIPTION =
  "What gold diamond jewellery is, where it comes from, the designs to know, and how to care for it so it stays luminous for generations.";
const CANONICAL = "https://regal-bloom-isha.lovable.app/jewellery-care-guide";

const AUTHOR_NAME = "Apnavi Shishodiya";
const PUBLISHED_DATE = "2026-10-29";

const CARE_TIPS = [
  {
    title: "Put it on last, take it off first",
    body: "Wear your jewellery after dressing, applying perfume and finishing your hair. Lotions, sprays and oils settle into pavé settings and dull both metal and stones. Reverse the order at the end of the day, removing pieces before you unwind.",
  },
  {
    title: "Wipe it gently after wear",
    body: "A soft, lint-free cloth after each wear lifts away the day's oils before they build up. For a deeper clean at home, soak the piece for ten minutes in lukewarm water with a drop of mild soap, brush softly behind the stones with a baby toothbrush, and pat dry.",
  },
  {
    title: "Keep pieces apart",
    body: "Store each piece in its own pouch or compartment. Diamonds are the hardest natural material on earth and will scratch gold, gemstones and each other, so a jumbled box is the fastest way to lose polish.",
  },
  {
    title: "Avoid chlorine and hot water",
    body: "Remove jewellery before swimming, bathing in a spa or doing household cleaning. Chlorine and harsh chemicals weaken alloys over time and can loosen settings; heat and steam also stress delicate joints.",
  },
  {
    title: "Check settings twice a year",
    body: "Bring your pieces to an Indriya boutique every six months for a complimentary inspection. Prongs and clasps wear gradually, and a professional tightening is far easier than resetting a lost diamond.",
  },
  {
    title: "Insure and document",
    body: "Keep purchase invoices and grading certificates together, and photograph each piece. With lifetime exchange and buyback at prevailing rates, well-kept documentation protects the value of every jewel you own.",
  },
];

const DESIGN_EXAMPLES = [
  {
    name: "The floral pendant",
    href: "/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold",
    label: "Regal Bloom 18K pink gold diamond pendant",
    body: "Bloom motifs carved in gold and set with brilliant diamonds, echoing the botanical heritage of Indian fine jewellery. Ideal as a gift and gentle enough for daily wear.",
  },
  {
    name: "Solitaire and halo pendants",
    href: null,
    label: null,
    body: "A single certified diamond held in a four or six prong crown, sometimes ringed by a halo of smaller stones. The purest expression of the diamond pendant.",
  },
  {
    name: "Stud earrings",
    href: null,
    label: null,
    body: "The most-worn piece in any collection, moving effortlessly from work to celebration. Choose secure screw-back or lock-back fittings for daily use.",
  },
  {
    name: "Diamond rings",
    href: null,
    label: null,
    body: "From delicate bands with pavé rows to statement cocktail settings, rings ask for the most protective care because hands meet the world first.",
  },
  {
    name: "Tennis bracelets and necklaces",
    href: null,
    label: null,
    body: "Lines of matched diamonds set in flexible links. Their many joints deserve the twice-yearly boutique inspection more than any other design.",
  },
];

export const Route = createFileRoute("/jewellery-care-guide")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${CANONICAL}#article`,
          headline: "Jewellery Care Guide: Gold Diamond Jewellery, Designs and Care",
          description: META_DESCRIPTION,
          datePublished: PUBLISHED_DATE,
          dateModified: PUBLISHED_DATE,
          inLanguage: "en-IN",
          author: { "@type": "Person", name: AUTHOR_NAME },
          publisher: {
            "@type": "Organization",
            name: "Indriya",
            url: "https://www.indriya.com/",
            logo: INDRIYA_LOGO_URL,
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://regal-bloom-isha.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Jewellery Care Guide", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: CareGuidePage,
});

function CareGuidePage() {
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

      <div className="border-b border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2.5">
          <ShieldCheck className="size-4 text-rosegold" aria-hidden />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-wine">
            100% Indriya Certified
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        <p className="eyebrow">Care &amp; Knowledge</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.08] text-wine sm:text-5xl">
          Jewellery <span className="text-gradient-rosegold">Care Guide</span>
        </h1>
        <div className="rule-gold my-6 w-24" />
        <p className="text-[15px] leading-[1.8] text-muted-foreground">
          Gold diamond jewellery is the meeting of two extraordinary materials: gold, a rare metal
          forged in the death of ancient stars and carried to Earth in the meteor showers of its
          formation, and diamond, crystallised carbon grown deep in the mantle over a billion years
          and brought to the surface by volcanic eruptions. The gold in your jewel was mined, refined
          and alloyed, often in India's longstanding refining centres, while each natural diamond was
          recovered, cut and graded before ever meeting its setting. Together they become jewellery
          designed to outlive the day, the year, and its first owner.
        </p>

        <div className="mt-10">
          <h2 className="font-display text-2xl leading-tight text-wine">What it is, and where it comes from</h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
            In fine jewellery, gold is rarely worn pure. Indian hallmarked gold jewellery is commonly
            crafted in 22K for traditional pieces and 18K for diamond designs, because 18K gold holds
            prongs and settings securely across years of wear. Alloying gold with copper and silver
            gives rose gold its warm blush, which is why the{" "}
            <Link
              to="/jewellery-pendants/regal-bloom-diamond-pendant-18k-pink-gold"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              Regal Bloom 18K pink gold diamond pendant
            </Link>{" "}
            carries both the colour and the strength a diamond setting requires.
          </p>
          <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
            Every natural diamond travels an immense distance before it reaches a boutique: formed
            around 150 kilometres beneath the earth's surface, carried up in ancient volcanic pipes,
            mined, cut to precise proportions and graded on the four Cs of cut, colour, clarity and
            carat. Indriya uses certified natural diamonds, and each arrives with its own grading
            certificate so its journey is documented from mine to setting.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl leading-tight text-wine">Common designs</h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
            Gold diamond jewellery appears in a handful of enduring forms. Knowing them helps you
            choose the piece, and the care routine, that suits how you live:
          </p>
          <ul className="mt-5 space-y-4">
            {DESIGN_EXAMPLES.map((design) => (
              <li key={design.name} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <h3 className="text-lg text-wine">
                  {design.href ? (
                    <Link
                      to={design.href}
                      className="text-rosegold underline underline-offset-2 hover:text-wine"
                    >
                      {design.name}
                    </Link>
                  ) : (
                    design.name
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{design.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
            Browse the full{" "}
            <Link to="/jewellery/pendants" className="text-rosegold underline underline-offset-2 hover:text-wine">
              pendant collection
            </Link>{" "}
            or explore{" "}
            <Link
              to="/jewellery/rose-gold-jewellery"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              rose gold jewellery designs
            </Link>{" "}
            to see how each design family takes shape in pink gold.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-2xl leading-tight text-wine">How to care for it</h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
            Gold diamond jewellery asks for little, but it repays gentle habits. These six practices
            keep metal bright and stones secure for generations:
          </p>
          <ol className="mt-5 space-y-4">
            {CARE_TIPS.map((tip, index) => (
              <li key={tip.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                <h3 className="flex items-baseline gap-2.5 text-lg text-wine">
                  <span className="font-display text-xl text-rosegold">{String(index + 1).padStart(2, "0")}</span>
                  {tip.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground">
            Before you buy, today's{" "}
            <a
              href={GOLD_RATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              gold rate
            </a>{" "}
            shapes the price of any gold design, and transparent, itemised pricing means you know
            exactly what the metal, diamonds and making charges contribute.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-soft">
          <BadgeCheck className="size-5 text-rosegold" aria-hidden />
          <h2 className="mt-3 font-display text-2xl leading-tight text-wine">
            A piece worth keeping is a piece worth checking
          </h2>
          <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
            With BIS hallmarked gold, certified natural diamonds and lifetime exchange and buyback,
            every Indriya jewel is built to be worn often and kept long. Visit your{" "}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosegold underline underline-offset-2 hover:text-wine"
            >
              nearest Indriya boutique
            </a>{" "}
            for a complimentary cleaning and setting inspection.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full px-8 tracking-wide" asChild>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
                Find a store near you
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-12 border-t border-border pt-6">
          <div className="flex items-center gap-3">
            <Sparkles className="size-4 text-rosegold" aria-hidden />
            <div>
              <p className="text-sm font-medium text-wine">Written by {AUTHOR_NAME}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Published on 29 October 2026
              </p>
            </div>
          </div>
        </footer>
      </article>

      <footer className="bg-wine py-6 text-center text-[11px] uppercase tracking-[0.24em] text-wine-foreground/50">
        Indriya · Jewellery Care Guide
      </footer>
    </main>
  );
}
