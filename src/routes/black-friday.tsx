import { createFileRoute } from "@tanstack/react-router";
import { Check, Snowflake, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { AC_OFFERS, BUSINESS, PROMO, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/black-friday")({
  head: () => ({
    meta: [
      { title: "Black Friday de ar-condicionado | Central de Serviços" },
      {
        name: "description",
        content: `Black Friday de ar-condicionado Split Inverter em Recife, ${PROMO.endsLabel}. Compre e instale com a Central de Serviços. Peça o preço pelo WhatsApp.`,
      },
      { property: "og:title", content: "Black Friday de ar-condicionado | Central de Serviços" },
      {
        property: "og:description",
        content: "Ar-condicionado Split Inverter com instalação em Recife e RMR. Peça o preço pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlackFridayPage,
});

function BlackFridayPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <div className="absolute -right-24 -top-24 size-[28rem] rounded-full border-[48px] border-accent/25" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest text-accent-foreground animate-rise">
            Promoção {PROMO.endsLabel}
          </span>
          <h1 className="text-display mt-6 text-6xl md:text-8xl animate-rise [animation-delay:80ms]">
            Black <span className="text-accent">Friday</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold text-primary-foreground/85 animate-rise [animation-delay:160ms]">
            Ar-condicionado novo com instalação feita pela nossa equipe. Chame no WhatsApp e garanta o seu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-primary-foreground/85">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5">
              <Snowflake className="size-4 text-accent" /> Aparelhos Split Inverter
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5">
              <Wrench className="size-4 text-accent" /> Instalação com a nossa equipe
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">Ofertas de ar-condicionado</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Escolha a potência certa para o seu ambiente. Na dúvida, a gente ajuda pelo WhatsApp.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AC_OFFERS.map((o) => (
            <article
              key={o.btus}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent"
            >
              {o.tag && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
                  {o.tag}
                </span>
              )}
              <div className="grid size-14 place-items-center rounded-xl bg-blue-gradient text-highlight-foreground">
                <Snowflake className="size-7" />
              </div>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">{o.model}</p>
              <h3 className="text-display text-3xl text-primary">{o.btus}</h3>
              <p className="mt-1 text-sm font-semibold text-highlight">{o.idealFor}</p>
              <ul className="mt-5 space-y-2">
                {o.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm font-medium">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-2xl font-extrabold text-primary">{o.price ?? "Consulte o preço"}</p>
              <Button asChild variant="whatsapp" className="mt-4 rounded-full">
                <a
                  href={whatsappLink(
                    `Olá! Vi a Black Friday no site e quero o preço do ar-condicionado ${o.model} ${o.btus}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  Quero esse
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-display text-3xl text-primary md:text-4xl">Compre e já agende a instalação</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Atendemos residências, empresas e condomínios em {BUSINESS.region}.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="xl">
            <a
              href={whatsappLink("Olá! Quero saber das ofertas de ar-condicionado da Black Friday.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Ver ofertas no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
