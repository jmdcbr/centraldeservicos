import { Button } from "@/components/ui/button";
import { BUSINESS, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaBand({ title = "Precisa de um conserto hoje?" }: { title?: string }) {
  return (
    <section className="px-5 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-gradient px-8 py-12 text-highlight-foreground md:px-14">
        <div className="absolute -right-16 -top-16 size-64 rounded-full border-[28px] border-primary-foreground/10" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-display text-3xl md:text-5xl">{title}</h2>
            <p className="mt-3 text-highlight-foreground/85">
              Chame no WhatsApp e receba seu orçamento sem compromisso.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {BUSINESS.phones.map((p) => (
              <Button key={p.number} asChild variant="whatsapp" size="xl">
                <a href={whatsappLink("Olá! Gostaria de um orçamento.", p.number)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" />
                  {p.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
