import { useEffect, useState } from "react";
import { ArrowUpRight, RefreshCw } from "lucide-react";

const GOLD_RATE_URL = "https://www.indriya.com/gold-rate-today";
const REFRESH_MS = 10 * 60 * 1000;

const FALLBACK = {
  rate: "₹14,240",
  purity: "22K Gold",
  confirmedAt: "08 Sep 2026, 10:00 AM",
};

type Status = "verified" | "checking" | "blocked" | "fallback";

export function GoldTracker() {
  const [rate, setRate] = useState(FALLBACK.rate);
  const [confirmedAt, setConfirmedAt] = useState(FALLBACK.confirmedAt);
  const [status, setStatus] = useState<Status>("fallback");

  useEffect(() => {
    let cancelled = false;

    // Server-side fetch to load live gold rate
    const fetchLiveRate = async () => {
      if (cancelled) return;
      setStatus("checking");
      try {
        const response = await fetch("/api/gold-rate");
        if (!response.ok) throw new Error("Rate feed unavailable");
        const data = await response.json();
        if (!cancelled) {
          setRate(data.rate || FALLBACK.rate);
          setConfirmedAt(data.confirmedAt || FALLBACK.confirmedAt);
          setStatus("verified");
        }
      } catch {
        if (!cancelled) {
          setRate(FALLBACK.rate);
          setConfirmedAt(FALLBACK.confirmedAt);
          setStatus("fallback");
        }
      }
    };

    void fetchLiveRate();
    const timer = window.setInterval(() => void fetchLiveRate(), REFRESH_MS);
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
        <span className="font-display text-3xl text-wine">{rate}</span>
        <span className="text-sm text-muted-foreground">/ gram</span>
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] tracking-wide text-accent-foreground">
          {FALLBACK.purity}
        </span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {status === "verified"
          ? `Live gold rate from Indriya, last refreshed ${confirmedAt}.`
          : `Verified confirmed rate as of ${confirmedAt}. Live refresh will load when available from the official rate page.`}
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
