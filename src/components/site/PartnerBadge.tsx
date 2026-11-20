import type { Partner } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Logo da marca com o rótulo "Também oferecemos". */
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
    </div>
  );
}
