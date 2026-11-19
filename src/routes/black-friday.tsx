import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CreditCard, Snowflake, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { AC_OFFERS, BUSINESS, PARTNERS, PROMO, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/black-friday")({
  head: () => ({
    meta: [
      { title: "Black Friday de ar-condicionado | Central de Serviços" },
      {
        name: "description",
        content:
          "Black Friday de ar-condicionado em Recife: Elgin, Philco e Midea com preços à vista e no cartão. Compre e instale com a Central de Serviços.",
      },
      { property: "og:title", content: "Black Friday de ar-condicionado | Central de Serviços" },
      {
        property: "og:description",
        content:
          "Ofertas de ar-condicionado Elgin, Philco e Midea em Recife e RMR. Veja os preços à vista e no cartão e chame no WhatsApp.",
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
            Ofertas {PROMO.name}
          </span>
          <h1 className="text-display mt-6 text-6xl md:text-8xl animate-rise [animation-delay:80ms]">
            Black <span className="text-accent">Friday</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold text-primary-foreground/85 animate-rise [animation-delay:160ms]">
            Ar-condicionado novo com preço à vista e no cartão. Compre com a gente e agende a instalação com a nossa equipe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-primary-foreground/85">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5">
              <Snowflake className="size-4 text-accent" /> Elgin, Philco e Midea
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5">
              <Wrench className="size-4 text-accent" /> Instalação com a nossa equipe
            </span>
          </div>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-primary-foreground/10 p-3 pr-5">
            <img
              src={PARTNERS.hiperfrio.logo}
              alt={`Logo ${PARTNERS.hiperfrio.name}`}
              className="h-12 w-auto max-w-[16rem] rounded-lg object-contain"
            />
            <span className="text-sm font-semibold text-primary-foreground/85">
              Venda em parceria com a {PARTNERS.hiperfrio.name}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">Ofertas de ar-condicionado</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Compare capacidade, ciclo e formas de pagamento. Na dúvida sobre o modelo ideal, a gente ajuda pelo WhatsApp.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AC_OFFERS.map((offer) => (
            <article
              key={offer.code}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="grid size-14 place-items-center rounded-xl bg-blue-gradient text-highlight-foreground">
                <Snowflake className="size-7" />
              </div>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-highlight">{offer.brand}</p>
              <h3 className="mt-1 text-lg font-extrabold leading-snug text-primary">{offer.model}</h3>
              <p className="mt-1 break-all text-xs text-muted-foreground">Cód. {offer.code}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-display text-3xl text-primary">{offer.btus}</span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-primary">{offer.cycle}</span>
              </div>

              <div className="mt-6 flex-1 border-t border-border pt-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Banknote className="size-4 text-accent" /> À vista
                </p>
                <p className="mt-1 whitespace-nowrap text-3xl font-extrabold tracking-tight text-primary">{offer.cashPrice}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <CreditCard className="size-4 text-accent" /> Cartão / parcelado
                </p>
                {offer.cardPrice && (
                  <p className="mt-1 text-sm font-semibold">
                    {offer.cardPrice} <span className="text-muted-foreground">(1x)</span>
                  </p>
                )}
                <p className="mt-1 text-lg font-extrabold text-primary">{offer.installments}</p>
                {offer.installmentNote && (
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{offer.installmentNote}</p>
                )}
              </div>

              <Button asChild variant="whatsapp" className="mt-6 rounded-full">
                <a
                  href={whatsappLink(
                    `Olá! Vi a Black Friday no site e quero o ar-condicionado ${offer.brand} ${offer.model} (${offer.code}), ${offer.btus}, ${offer.cycle}, anunciado por ${offer.cashPrice} à vista.`,
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
