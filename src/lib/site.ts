import {
  AppWindow,
  Building2,
  Car,
  Droplets,
  Hammer,
  Home,
  PaintRoller,
  ShoppingBag,
  Smartphone,
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

/** Black Friday: venda de aparelhos de ar-condicionado, sem data de encerramento definida. */
export const PROMO = {
  name: "Black Friday",
} as const;

export type AcOffer = {
  brand: string;
  model: string;
  code: string;
  btus: string;
  cycle: "Frio" | "Quente e Frio";
  cashPrice: string;
  cardPrice?: string;
  installments: string;
  installmentNote?: string;
};

export const AC_OFFERS: AcOffer[] = [
  {
    brand: "Elgin",
    model: "Split Eco Inverter III Wi-Fi",
    code: "HJFC18C2WHCH",
    btus: "18.000 BTUs",
    cycle: "Frio",
    cashPrice: "R$ 2.599,01",
    cardPrice: "R$ 2.953,41",
    installments: "10x de R$ 295,34",
  },
  {
    brand: "Philco",
    model: "Split Inverter com Wi-Fi",
    code: "PAC18FTW",
    btus: "18.000 BTUs",
    cycle: "Frio",
    cashPrice: "R$ 2.099,00",
    cardPrice: "R$ 2.612,50",
    installments: "10x de R$ 261,25",
  },
  {
    brand: "Elgin",
    model: "Split Eco Inverter III Wi-Fi",
    code: "HJQE12C2CH",
    btus: "12.000 BTUs",
    cycle: "Quente e Frio",
    cashPrice: "R$ 1.949,01",
    installments: "10x de R$ 2.228,41",
    installmentNote: "Valor impresso na arte da promoção.",
  },
  {
    brand: "Midea",
    model: "Split Teto Connect Inverter",
    code: "38CCVE36515MM",
    btus: "36.000 BTUs",
    cycle: "Frio",
    cashPrice: "R$ 7.478,87",
    cardPrice: "R$ 8.498,71",
    installments: "10x de R$ 849,87",
  },
  {
    brand: "Elgin",
    model: "Split Piso Teto Inverter Wi-Fi",
    code: "PXFE60C2CC",
    btus: "56.000 BTUs",
    cycle: "Frio",
    cashPrice: "R$ 8.899,00",
    cardPrice: "R$ 10.112,50",
    installments: "10x de R$ 1.011,25",
  },
  {
    brand: "Elgin",
    model: "Split Cassete 1 Via One Air Inverter",
    code: "KOQE12C2CA",
    btus: "12.000 BTUs",
    cycle: "Quente e Frio",
    cashPrice: "R$ 3.399,00",
    cardPrice: "R$ 3.862,50",
    installments: "10x de R$ 386,25",
  },
  {
    brand: "Elgin",
    model: "Split Eco Inverter II Wi-Fi",
    code: "HJFE24C2CC",
    btus: "24.000 BTUs",
    cycle: "Frio",
    cashPrice: "R$ 3.515,53",
    cardPrice: "R$ 3.994,92",
    installments: "10x de R$ 399,49",
  },
  {
    brand: "Elgin",
    model: "Split Eco Inverter II Wi-Fi",
    code: "HJQE24C2CC",
    btus: "24.000 BTUs",
    cycle: "Quente e Frio",
    cashPrice: "R$ 4.149,00",
    cardPrice: "R$ 4.714,77",
    installments: "10x de R$ 471,48",
  },
];

/** Produtos que a Central vende além dos serviços de manutenção. */
export const PRODUCTS: Service[] = [
  {
    slug: "venda-ar-condicionado",
    title: "Venda de ar-condicionado",
    short: "Aparelhos novos com instalação feita pela nossa equipe. Confira a Black Friday!",
    icon: ShoppingBag,
    items: ["Split Inverter de 9.000 a 24.000 BTUs", "Para casas, empresas e condomínios", "Instalação com a nossa equipe", "Ajuda para escolher o modelo"],
  },
  {
    slug: "linhas-telefonicas",
    title: "Linhas telefônicas Oi e TIM",
    short: "Linhas e planos Oi e TIM para você, sua família ou sua empresa.",
    icon: Smartphone,
    items: ["Linhas Oi e TIM", "Planos pré e pós-pago", "Planos para empresas", "Portabilidade do seu número"],
  },
  {
    slug: "seguro-automotivo-apvs",
    title: "Seguro automotivo APVS",
    short: "Proteção veicular APVS para o seu carro, moto ou utilitário.",
    icon: Car,
    items: ["Proteção contra roubo e furto", "Colisão e perda total", "Assistência 24 horas", "Carros, motos e utilitários"],
  },
];
