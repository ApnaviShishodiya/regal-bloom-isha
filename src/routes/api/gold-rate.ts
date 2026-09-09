import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/gold-rate")({
  server: {
    handlers: {
      GET: async () => {
        const fallback = {
          rate: "₹14,240",
          purity: "22K Gold",
          confirmedAt: "08 Sep 2026, 10:00 AM",
        };

        try {
          const response = await fetch("https://www.indriya.com/gold-rate-today", {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
              "Accept-Language": "en-IN,en;q=0.9",
            },
          });

          if (!response.ok) {
            return Response.json(fallback);
          }

          const html = await response.text();

          // Try to extract a 22K gold rate like ₹14,240 / gram or ₹14,240/gm
          const rateMatch = html.match(/₹\s*([\d,]+)\s*\/\s*(?:gram|gm)/i);

          if (rateMatch && rateMatch[1]) {
            const rateValue = rateMatch[1];
            const now = new Date();
            const formattedTime = now.toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return Response.json({
              rate: `₹${rateValue}`,
              purity: "22K Gold",
              confirmedAt: formattedTime,
            });
          }

          return Response.json(fallback);
        } catch {
          return Response.json(fallback);
        }
      },
    },
  },
});
