import type { Partner } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Logo do parceiro com o rótulo "Em parceria com". */
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
        Em parceria com
        <span className="ml-1 text-sm normal-case tracking-normal text-primary">{partner.name}</span>
      </p>
    </div>
  );
}
