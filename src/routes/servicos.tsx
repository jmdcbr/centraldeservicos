import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CtaBand } from "@/components/site/CtaBand";
import { PartnerBadge } from "@/components/site/PartnerBadge";
import { PRODUCTS, PROMO, SERVICES, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | Central de Serviços Recife" },
      {
        name: "description",
        content:
          "Elétrica, hidráulica, ar-condicionado, energia solar, vidraçaria, pintura, reformas e pequenos reparos em Recife e RMR. Também oferecemos ar-condicionado Hiperfrio, linhas TIM, Vivo e Claro, seguro auto APVS e criativos digitais e sites com a Frame Division.",
      },
      { property: "og:title", content: "Serviços | Central de Serviços Recife" },
      {
        property: "og:description",
        content:
          "Todos os serviços de manutenção da Central de Serviços para residências, empresas e condomínios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h1 className="text-display text-5xl md:text-6xl animate-rise">
            Nossos <span className="text-highlight">serviços</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
            Escolha o serviço e fale direto com a gente pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-5 py-16">
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-28 gap-8 rounded-3xl border border-border bg-card p-8 shadow-card md:grid-cols-[1fr_1.2fr_auto] md:items-center md:p-10"
          >
            <div className="flex items-start gap-5">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-blue-gradient text-highlight-foreground">
                <s.icon className="size-8" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-medium">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
            <Button asChild variant="whatsapp" className="rounded-full">
              <a
                href={whatsappLink(`Olá! Gostaria de um orçamento de ${s.title.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Orçamento
              </a>
            </Button>
          </article>
        ))}
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="roof-mark">
            <h2 className="text-display text-4xl text-primary md:text-5xl">Também oferecemos</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Além da manutenção, também oferecemos produtos e serviços de marcas de confiança para cuidar da sua casa, empresa, carro e da divulgação do seu negócio.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="flex scroll-mt-28 flex-col rounded-3xl border border-border bg-card p-8 shadow-card"
              >
                {p.partner ? (
                  <PartnerBadge partner={p.partner} />
                ) : (
                  <div className="grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <p.icon className="size-7" />
                  </div>
                )}
                <h3 className="mt-5 text-xl font-extrabold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
                {p.slug === "venda-ar-condicionado" ? (
                  <Button asChild variant="hero" className="mt-6 rounded-full">
                    <Link to="/black-friday">
                      Ver {PROMO.name} <ArrowRight />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="whatsapp" className="mt-6 rounded-full">
                    <a
                      href={whatsappLink(`Olá! Tenho interesse em ${p.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon className="size-4" />
                      Quero saber mais
                    </a>
                  </Button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Não achou o que precisa?" />
    </>
  );
}
