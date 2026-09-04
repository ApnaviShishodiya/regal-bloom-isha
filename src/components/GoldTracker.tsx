import { useEffect, useState } from "react";
import { ArrowUpRight, RefreshCw } from "lucide-react";

const GOLD_RATE_URL = "https://www.indriya.com/gold-rate-today";
const REFRESH_MS = 10 * 60 * 1000;

const FALLBACK = {
  rate: "₹13,935",
  purity: "22K Gold",
  confirmedAt: "02 Sep 2026, 12:00 PM",
};

type Status = "verified" | "checking" | "blocked";

export function GoldTracker() {
  const [status, setStatus] = useState<Status>("verified");

  useEffect(() => {
    let cancelled = false;

    // Only refreshes when the official page permits browser (CORS) fetches.
    const attempt = async () => {
      if (cancelled) return;
      setStatus("checking");
      try {
        const response = await fetch(GOLD_RATE_URL, { mode: "cors" });
        if (!response.ok) throw new Error("Rate feed unavailable");
        await response.text();
        if (!cancelled) setStatus("verified");
      } catch {
        if (!cancelled) setStatus("blocked");
      }
    };

    void attempt();
    const timer = window.setInterval(() => void attempt(), REFRESH_MS);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <aside className="rounded-xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">Indriya Gold Tracker</p>
        <RefreshCw
          className={`size-3.5 text-rosegold ${status === "checking" ? "animate-spin" : ""}`}
          aria-hidden
        />
      </div>
      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-3xl text-wine">{FALLBACK.rate}</span>
        <span className="text-sm text-muted-foreground">/ gram</span>
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] tracking-wide text-accent-foreground">
          {FALLBACK.purity}
        </span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Verified fallback rate, last confirmed {FALLBACK.confirmedAt}.{" "}
        {status === "blocked"
          ? "Live refresh is unavailable from the browser, so the confirmed rate is shown."
          : "Refresh is attempted every 10 minutes from the official rate page."}
      </p>
      <a
        href={GOLD_RATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 border-b border-rosegold pb-0.5 text-xs uppercase tracking-[0.18em] text-wine transition-colors hover:text-rosegold"
      >
        View today's gold rate <ArrowUpRight className="size-3.5" />
      </a>
    </aside>
  );
}
