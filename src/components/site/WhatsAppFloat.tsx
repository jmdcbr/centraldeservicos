import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site e gostaria de um orçamento.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-card ring-4 ring-whatsapp/25 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
