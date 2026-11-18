import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { BUSINESS, SEGMENTS_LABEL, SERVICES, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="text-display text-3xl">
            Central
            <br />
            <span className="text-highlight">de Serviços</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Manutenção para {SEGMENTS_LABEL} com profissionais de confiança.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Serviços</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/servicos" hash={s.slug} className="text-primary-foreground/85 hover:text-primary-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60">Fale com a gente</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {BUSINESS.phones.map((p) => (
              <li key={p.number}>
                <a href={whatsappLink(undefined, p.number)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-whatsapp">
                  <WhatsAppIcon className="size-4 text-whatsapp" />
                  {p.label}
                </a>
              </li>
            ))}
            <li className="inline-flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="size-4 text-accent" />
              {BUSINESS.region}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Central de Serviços. Todos os direitos reservados.
      </div>
    </footer>
  );
}
