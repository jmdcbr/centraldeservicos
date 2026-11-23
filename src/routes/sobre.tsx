import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MapPin, Sparkles, Wrench } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { BUSINESS, CLIENTS, SEGMENTS_LABEL } from "@/lib/site";
import logo from "@/assets/logo-central-servicos.png.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós | Central de Serviços" },
      {
        name: "description",
        content:
          "Conheça a Central de Serviços: manutenção residencial e comercial com profissionais de confiança em Recife e Região Metropolitana.",
      },
      { property: "og:title", content: "Sobre nós | Central de Serviços" },
      {
        property: "og:description",
        content: "Profissionais de confiança para cuidar da sua casa ou empresa em Recife.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const VALUES = [
  { icon: HeartHandshake, title: "Confiança", text: "Profissionais educados, pontuais e cuidadosos com o seu espaço." },
  { icon: Wrench, title: "Qualidade", text: "Ferramentas certas e acabamento caprichado em cada serviço." },
  { icon: Sparkles, title: "Organização", text: "Deixamos o ambiente limpo e arrumado ao final do trabalho." },
  { icon: MapPin, title: "Perto de você", text: "Atendemos Recife e toda a Região Metropolitana." },
];

function SobrePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="roof-mark animate-rise">
          <h1 className="text-display text-5xl text-primary md:text-6xl">
            Quem <span className="text-highlight">somos</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Central de Serviços nasceu para facilitar a vida de quem precisa de manutenção em casa
            ou na empresa. Em vez de procurar um profissional diferente para cada problema, você
            tem um só contato para resolver tudo.
          </p>
          <p className="mt-4 text-muted-foreground">
            Atendemos {SEGMENTS_LABEL} em Recife e Região Metropolitana: elétrica, hidráulica,
            ar-condicionado, energia solar, vidraçaria, pintura, reformas e pequenos reparos —
            com atendimento rápido, preço justo e serviço garantido.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <img src={logo.url} alt="Logo da Central de Serviços com os telefones de contato" className="w-full" />
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title}>
              <v.icon className="size-9 text-accent" />
              <h2 className="mt-4 text-xl font-extrabold">{v.title}</h2>
              <p className="mt-2 text-sm text-primary-foreground/75">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">
            Quem <span className="text-highlight">já confia</span> na Central
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Condomínios, empresas e estabelecimentos que já atendemos em {BUSINESS.region}.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c) => (
            <li key={c.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-highlight">
                <c.icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {c.kind}
                </span>
                <span className="mt-1 block text-lg font-extrabold text-primary">{c.name}</span>
              </span>
            </li>
          ))}
          <li className="flex items-center gap-4 rounded-2xl bg-primary p-6 text-primary-foreground shadow-card sm:col-span-2">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <ArrowRight className="size-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-accent">
                Sua empresa pode ser a próxima
              </span>
              <Link to="/contato" className="block text-lg font-extrabold hover:text-highlight">
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
