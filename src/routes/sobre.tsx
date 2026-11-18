import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, MapPin, Sparkles, Wrench } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { SEGMENTS_LABEL } from "@/lib/site";
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
            ar-condicionado, vidraçaria, pintura, reformas, montagem de móveis e pequenos reparos —
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

      <CtaBand />
    </>
  );
}
