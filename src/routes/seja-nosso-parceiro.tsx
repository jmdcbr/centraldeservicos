import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, ClipboardList, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VacancyDialog } from "@/components/site/VacancyDialog";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { JOBS, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/seja-nosso-parceiro")({
  head: () => ({
    meta: [
      { title: "Seja nosso parceiro | Central de Serviços" },
      {
        name: "description",
        content:
          "Vagas abertas para vidraceiro, serralheiro, técnico de refrigeração e auxiliar prático em Recife e Região Metropolitana. Veja as funções e fale com a gente pelo WhatsApp.",
      },
      { property: "og:title", content: "Seja nosso parceiro | Central de Serviços" },
      {
        property: "og:description",
        content:
          "Vidraceiro, serralheiro, técnico de refrigeração e auxiliar prático: veja as vagas abertas e fale com a gente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ParceiroPage,
});

const STEPS = [
  { n: "01", title: "Escolha a função", text: "Veja as vagas abertas e escolha a sua." },
  { n: "02", title: "Chame no WhatsApp", text: "Conte sua experiência e envie fotos de serviços já feitos, se tiver." },
  { n: "03", title: "Comece a trabalhar", text: "Combinamos os serviços e o primeiro atendimento." },
];

function ParceiroPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold">
            <Handshake className="size-4 text-accent" />
            Trabalhe com a Central
          </span>
          <h1 className="text-display mt-6 text-5xl md:text-7xl">
            Seja nosso <span className="text-highlight">parceiro</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
            Estamos com vagas abertas para profissionais de Recife e Região Metropolitana. Toque em
            "Vaga de emprego" para ver as funções.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <VacancyDialog>
              <Button variant="hero" size="xl">
                <Briefcase className="size-5" />
                Vaga de emprego
              </Button>
            </VacancyDialog>
            <Button asChild variant="onDark" size="xl">
              <Link to="/contato">
                Falar com a gente <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Funções */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="roof-mark">
          <h2 className="text-display text-4xl text-primary md:text-5xl">Funções abertas</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Toque em "Quero" para mandar sua mensagem direto no WhatsApp.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {JOBS.map((job) => (
            <article
              key={job.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-highlight"
            >
              <div className="grid size-14 place-items-center rounded-xl bg-secondary text-highlight">
                <job.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-primary">{job.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{job.text}</p>
              <Button asChild variant="whatsapp" className="mt-5 self-start rounded-full">
                <a
                  href={whatsappLink(`Olá! Tenho interesse na vaga de ${job.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  Quero essa vaga
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
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
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-highlight">
              <ClipboardList className="size-6" />
            </span>
            <p className="flex-1 text-sm text-muted-foreground">
              Não achou a sua função? Chame no WhatsApp e conte o que você faz — a gente combina com você.
            </p>
            <Button asChild variant="whatsapp" className="rounded-full">
              <a
                href={whatsappLink("Olá! Gostaria de trabalhar com a Central de Serviços.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Apresentar meu serviço
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
