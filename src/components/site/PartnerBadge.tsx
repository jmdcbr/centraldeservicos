import { ArrowRight } from "lucide-react";
import type { Partner } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Logo da marca com o rótulo "Também oferecemos" e, quando houver, o link do site de compras. */
export function PartnerBadge({ partner, className }: { partner: Partner; className?: string }) {
  return (
    <div className={cn("flex flex-col items-start gap-3", className)}>
      <img
        src={partner.logo}
        alt={`Logo ${partner.name}`}
        className="h-14 w-auto max-w-full rounded-xl border border-border object-contain"
        loading="lazy"
      />
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Também oferecemos
        <span className="mt-1 block text-sm normal-case tracking-normal text-primary">
          {partner.name} – {partner.offer}
        </span>
      </p>
      {partner.site && (
        <a
          href={partner.site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-accent underline-offset-4 hover:underline"
        >
          {partner.site.label}
          <ArrowRight className="size-4 shrink-0" />
        </a>
      )}
    </div>
  );
}
