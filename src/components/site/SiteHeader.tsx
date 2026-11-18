import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import logo from "@/assets/logo-marca.png.asset.json";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/black-friday", label: "Black Friday" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Central de Serviços" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                n.to === "/black-friday"
                  ? "rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-accent-foreground transition-opacity hover:opacity-90"
                  : "rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              }
              activeProps={n.to === "/black-friday" ? {} : { className: "text-primary bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" className="hidden rounded-full sm:inline-flex">
            <a href={whatsappLink("Olá! Gostaria de um orçamento.")} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" />
              Orçamento
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-full p-2 text-primary md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 pb-5 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={
                n.to === "/black-friday"
                  ? "block border-b border-border/60 py-3 font-extrabold text-accent"
                  : "block border-b border-border/60 py-3 font-semibold text-foreground"
              }
              activeProps={{ className: "text-highlight" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
