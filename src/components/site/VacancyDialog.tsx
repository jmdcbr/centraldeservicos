import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JOBS, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Abre a lista de funções abertas. O gatilho é passado de fora, então o mesmo
 * botão pode aparecer na home e na página "Seja nosso parceiro".
 */
export function VacancyDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-display text-3xl text-primary">Vagas abertas</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Escolha a função e fale com a gente no WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <ul className="grid gap-3">
          {JOBS.map((job) => (
            <li
              key={job.title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-highlight">
                <job.icon className="size-6" />
              </span>
              <span className="flex-1">
                <span className="block font-extrabold text-primary">{job.title}</span>
                <span className="block text-sm text-muted-foreground">{job.text}</span>
              </span>
              <Button asChild variant="whatsapp" size="sm" className="shrink-0 rounded-full">
                <a
                  href={whatsappLink(`Olá! Tenho interesse na vaga de ${job.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  Quero
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
