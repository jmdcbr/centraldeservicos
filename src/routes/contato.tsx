import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { BUSINESS, SERVICES, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Central de Serviços" },
      {
        name: "description",
        content:
          "Peça seu orçamento pelo WhatsApp: (81) 98297-7770 ou (81) 98516-3998. Atendimento em Recife e Região Metropolitana.",
      },
      { property: "og:title", content: "Contato | Central de Serviços" },
      { property: "og:description", content: "Peça seu orçamento pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [service, setService] = useState<string>(SERVICES[0]?.title ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const bairro = String(data.get("bairro") ?? "").trim();
    const detalhes = String(data.get("detalhes") ?? "").trim();
    const msg = [
      `Olá! Meu nome é ${nome}.`,
      `Gostaria de um orçamento de: ${service}.`,
      bairro && `Bairro/cidade: ${bairro}.`,
      detalhes && `Detalhes: ${detalhes}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:py-24">
      <div className="roof-mark animate-rise">
        <h1 className="text-display text-5xl text-primary md:text-6xl">
          Fale <span className="text-highlight">com a gente</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Atendimento pelo WhatsApp. Responda o formulário ou chame direto em um dos números.
        </p>
        <div className="mt-8 space-y-3">
          {BUSINESS.phones.map((p) => (
            <a
              key={p.number}
              href={whatsappLink("Olá! Gostaria de um orçamento.", p.number)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-whatsapp"
            >
              <span className="grid size-12 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</span>
                <span className="text-xl font-extrabold text-primary">{p.label}</span>
              </span>
            </a>
          ))}
          <div className="flex items-center gap-4 rounded-2xl bg-secondary p-5">
            <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground">
              <MapPin className="size-6" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Atendemos</span>
              <span className="text-lg font-extrabold text-primary">{BUSINESS.region}</span>
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
        <h2 className="text-2xl font-extrabold text-primary">Pedir orçamento</h2>
        <div className="space-y-2">
          <Label htmlFor="nome">Seu nome</Label>
          <Input id="nome" name="nome" required maxLength={80} placeholder="Ex.: Maria Silva" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label>Serviço</Label>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setService(s.title)}
                aria-pressed={service === s.title}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors aria-pressed:border-highlight aria-pressed:bg-highlight aria-pressed:text-highlight-foreground"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bairro">Bairro / cidade</Label>
          <Input id="bairro" name="bairro" maxLength={80} placeholder="Ex.: Boa Viagem, Recife" className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="detalhes">O que você precisa?</Label>
          <Textarea id="detalhes" name="detalhes" rows={4} maxLength={600} placeholder="Descreva rapidamente o serviço" />
        </div>
        <Button type="submit" variant="whatsapp" size="xl" className="w-full">
          <WhatsAppIcon className="size-5" />
          Enviar pelo WhatsApp
        </Button>
      </form>
    </section>
  );
}
