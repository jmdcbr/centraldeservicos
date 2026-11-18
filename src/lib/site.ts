import {
  AppWindow,
  Building2,
  Droplets,
  Hammer,
  Home,
  PaintRoller,
  Snowflake,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const BUSINESS = {
  name: "Central de Serviços",
  region: "Recife e Região Metropolitana",
  phones: [
    { label: "(81) 98297-7770", number: "5581982977770" },
    { label: "(81) 98516-3998", number: "5581985163998" },
  ],
} as const;

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string, number: string = BUSINESS.phones[0].number) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Segment = {
  title: string;
  text: string;
  icon: LucideIcon;
};

/** Quem a Central atende: residências, empresas e condomínios. */
export const SEGMENTS: Segment[] = [
  {
    icon: Home,
    title: "Residências",
    text: "Apartamentos e casas, do conserto pontual à reforma completa.",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "Escritórios, lojas e estabelecimentos, com horário agendado.",
  },
  {
    icon: Users,
    title: "Condomínios",
    text: "Áreas comuns, garagens e unidades, com serviço programado.",
  },
];

/** Sentence-ready label for copy: "residências, empresas e condomínios". */
export const SEGMENTS_LABEL = "residências, empresas e condomínios";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "eletrica",
    title: "Elétrica",
    short: "Instalações e reparos com segurança, do chuveiro ao quadro de energia.",
    icon: Zap,
    items: ["Tomadas e interruptores", "Chuveiros e resistências", "Luminárias e ventiladores", "Quadro de distribuição", "Curto-circuito e quedas de energia"],
  },
  {
    slug: "hidraulica",
    title: "Hidráulica",
    short: "Vazamentos, entupimentos e instalações sem dor de cabeça.",
    icon: Droplets,
    items: ["Caça-vazamentos", "Desentupimento", "Torneiras e registros", "Caixa d'água e bombas", "Vasos e descargas"],
  },
  {
    slug: "ar-condicionado",
    title: "Ar-condicionado",
    short: "Instalação, limpeza e manutenção para o seu ar gelar de verdade.",
    icon: Snowflake,
    items: ["Instalação de split", "Limpeza e higienização", "Recarga de gás", "Manutenção preventiva", "Desinstalação e mudança"],
  },
  {
    slug: "vidracaria",
    title: "Vidraçaria",
    short: "Vidros, boxes e espelhos com instalação e troca feitas com segurança.",
    icon: AppWindow,
    items: ["Box de banheiro", "Vidros de janelas e portas", "Espelhos e bisotês", "Divisórias e vitrines", "Troca de vidros quebrados"],
  },
  {
    slug: "pintura-reformas",
    title: "Pintura e reformas",
    short: "Paredes novas, ambientes renovados e acabamento caprichado.",
    icon: PaintRoller,
    items: ["Pintura interna e externa", "Massa corrida e textura", "Gesso e drywall", "Pequenas obras de alvenaria", "Assentamento de pisos"],
  },
  {
    slug: "montagem",
    title: "Montagem de móveis",
    short: "Montagem e desmontagem com cuidado e ferramentas certas.",
    icon: Hammer,
    items: ["Guarda-roupas e cômodas", "Painéis de TV", "Camas e berços", "Móveis de escritório", "Desmontagem para mudança"],
  },
  {
    slug: "pequenos-reparos",
    title: "Pequenos reparos",
    short: "Aquele conserto que está esperando há meses — a gente resolve.",
    icon: Wrench,
    items: ["Prateleiras e quadros", "Cortinas e persianas", "Portas e fechaduras", "Suportes de TV", "Ajustes em geral"],
  },
];
