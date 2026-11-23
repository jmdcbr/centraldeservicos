import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock, MapPin, ShieldCheck, Snowflake, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CtaBand } from "@/components/site/CtaBand";
import { PartnerBadge } from "@/components/site/PartnerBadge";
import { BUSINESS, CLIENTS, PRODUCTS, SEGMENTS, SEGMENTS_LABEL, SERVICES, whatsappLink } from "@/lib/site";
import hero from "@/assets/hero-tecnico.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central de Serviços | Manutenção residencial em Recife" },
      {
        name: "description",
        content:
          "Elétrica, hidráulica, ar-condicionado, energia solar, vidraçaria, pintura, reformas e pequenos reparos em Recife e Região Metropolitana. Atendemos residências, empresas e condomínios. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:title", content: "Central de Serviços | Manutenção residencial em Recife" },
      {
        property: "og:description",
        content: "Profissionais de confiança para sua casa, empresa ou condomínio. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  { n: "01", title: "Chame no WhatsApp", text: "Conte o que precisa e envie fotos, se puder." },
  { n: "02", title: "Receba o orçamento", text: "Preço claro, sem surpresa e sem compromisso." },
  { n: "03", title: "Serviço resolvido", text: "Agendamos e o profissional vai até você." },
];

const WHY = [
  { icon: Clock, title: "Atendimento rápido", text: "Resposta ágil e agendamento no melhor horário para você." },
  { icon: ShieldCheck, title: "Serviço garantido", text: "Trabalho bem feito, com garantia e materiais de qualidade." },
  { icon: BadgeCheck, title: "Preço justo", text: "Orçamento transparente antes de começar qualquer serviço." },
  { icon: ThumbsUp, title: "Tudo em um só lugar", text: "Um único contato para resolver toda a manutenção da casa." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute -left-40 top-10 size-[34rem] rounded-full border-[40px] border-highlight/20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold">
              <MapPin className="size-4 text-accent" />
              {BUSINESS.region}
            </span>
            <h1 className="text-display mt-6 text-5xl md:text-7xl">
              Sua casa ou empresa <span className="text-highlight">em boas mãos</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/80">
              Elétrica, hidráulica, ar-condicionado, energia solar, vidraçaria, pintura, reformas e
              pequenos reparos. Um só contato para resolver tudo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SEGMENTS.map((s) => (
                <span
                  key={s.title}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-sm font-semibold text-primary-foreground/85"
                >
                  <s.icon className="size-4 text-accent" />
                  {s.title}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink("Olá! Gostaria de um orçamento.")} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-5" />
                  Pedir orçamento
                </a>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/servicos">
                  Ver serviços <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-accent" />
            <img
              src={hero}
              alt="Técnico da Central de Serviços instalando uma tomada"
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      {/* Black Friday */}
      <section className="px-5 pt-12">
        <Link
          to="/black-friday"
          className="group relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-navy-deep px-8 py-8 text-primary-foreground shadow-card md:flex-row md:items-center md:px-12"
        >
          <div className="absolute -right-10 -top-16 size-56 rounded-full border-[28px] border-accent/30" />
          <div className="relative flex items-center gap-5">
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <Snowflake className="size-8" />
            </div>
            <div>
              <p className="text-display text-3xl md:text-4xl">
                Black <span className="text-accent">Friday</span> de ar-condicionado
              </p>
              <p className="mt-1 text-primary-foreground/80">
                Aparelhos Elgin, Philco e Midea com preços à vista e no cartão
              </p>
            </div>
          </div>
          <span className="relative inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-extrabold text-accent-foreground transition-all group-hover:gap-3">
            Ver ofertas <ArrowRight className="size-4" />
          </span>
        </Link>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="roof-mark">
            <h2 className="text-display text-4xl text-primary md:text-5xl">Nossos serviços</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Do pequeno conserto à reforma: profissionais preparados para cada tipo de trabalho.
            </p>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 font-bold text-highlight hover:gap-3 transition-all">
            Ver todos os detalhes <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/servicos"
              hash={s.slug}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-highlight"
            >
              <div className="grid size-14 place-items-center rounded-xl bg-secondary text-highlight transition-colors group-hover:bg-highlight group-hover:text-highlight-foreground">
                <s.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Também oferecemos */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">Também oferecemos</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent"
            >
              {p.partner && <PartnerBadge partner={p.partner} />}
              <Link
                {...(p.slug === "venda-ar-condicionado"
                  ? { to: "/black-friday" as const }
                  : { to: "/servicos" as const, hash: p.slug })}
                className="mt-5 flex flex-1 flex-col"
              >
                <h3 className="text-lg font-extrabold text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="roof-mark">
            <h2 className="text-display text-4xl text-primary md:text-5xl">Por que a Central?</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title}>
                <w.icon className="size-9 text-accent" />
                <h3 className="mt-4 text-lg font-extrabold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">Como funciona</h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl bg-primary p-8 text-primary-foreground">
              <span className="text-display text-5xl text-highlight">{s.n}</span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Quem atendemos */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="roof-mark">
            <h2 className="text-display text-4xl text-primary md:text-5xl">Quem atendemos</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Serviço organizado para {SEGMENTS_LABEL}, com horário combinado antes de começar.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="grid size-14 place-items-center rounded-xl bg-secondary text-highlight">
                  <s.icon className="size-7" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes que já atendemos */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">
            Quem <span className="text-highlight">já confia</span> na Central
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Condomínios, empresas e estabelecimentos que já atendemos em {BUSINESS.region}.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c) => (
            <li
              key={c.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-highlight"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-highlight">
                <c.icon className="size-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.kind}
                </span>
                <span className="text-lg font-extrabold text-primary">{c.name}</span>
              </span>
            </li>
          ))}
          <li className="flex items-center gap-4 rounded-2xl bg-primary p-6 text-primary-foreground shadow-card sm:col-span-2">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <ArrowRight className="size-6" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-accent">
                Sua empresa pode ser a próxima
              </span>
              <Link to="/contato" className="text-lg font-extrabold hover:text-highlight">
                Falar com a gente
              </Link>
            </span>
          </li>
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
