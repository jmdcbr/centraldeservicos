import { describe, expect, it } from "vitest";
import { AC_OFFERS, BUSINESS, PRODUCTS, PROMO, SEGMENTS, SERVICES, whatsappLink } from "@/lib/site";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SOURCE_DIRS = ["src/routes", "src/components/site", "src/lib"];

function siteSourceFiles(): string[] {
  const files: string[] = [];
  for (const dir of SOURCE_DIRS) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isFile() && /\.(tsx|ts)$/.test(entry.name)) files.push(join(dir, entry.name));
    }
  }
  return files;
}

describe("WhatsApp contacts", () => {
  it("uses both business WhatsApp numbers with Brazil + 81 prefix", () => {
    expect(BUSINESS.phones.map((p) => p.number)).toEqual(["5581982977770", "5581985163998"]);
  });

  it("encodes the pre-filled message into the wa.me link", () => {
    expect(whatsappLink("Olá! Orçamento")).toBe("https://wa.me/5581982977770?text=Ol%C3%A1!%20Or%C3%A7amento");
  });
});

describe("Free-quote claim removed", () => {
  it("never says the quote is free anywhere on the site", () => {
    const offenders = siteSourceFiles().filter((f) => /gr[áa]tis/i.test(readFileSync(f, "utf8")));
    expect(offenders).toEqual([]);
  });
});

describe("Service catalog", () => {
  it("offers vidraçaria among the services", () => {
    const vidracaria = SERVICES.find((s) => s.slug === "vidracaria");
    expect(vidracaria?.title).toBe("Vidraçaria");
    expect(vidracaria?.items).toContain("Box de banheiro");
  });
});

describe("Clients served", () => {
  it("lists empresas and condomínios as segments served", () => {
    const titles = SEGMENTS.map((s) => s.title);
    expect(titles).toContain("Empresas");
    expect(titles).toContain("Condomínios");
    expect(titles).toContain("Residências");
  });
});

describe("Products sold", () => {
  it("sells Oi and TIM phone lines", () => {
    const lines = PRODUCTS.find((p) => p.slug === "linhas-telefonicas");
    expect(lines?.title).toContain("Oi");
    expect(lines?.title).toContain("TIM");
  });

  it("sells APVS car insurance", () => {
    expect(PRODUCTS.find((p) => p.slug === "seguro-automotivo-apvs")?.title).toBe("Seguro automotivo APVS");
  });

  it("sells air conditioners with eight Black Friday offers", () => {
    expect(PRODUCTS.some((p) => p.slug === "venda-ar-condicionado")).toBe(true);
    expect(PROMO.name).toBe("Black Friday");
    expect(AC_OFFERS).toHaveLength(8);
  });
});

describe("Black Friday offer prices", () => {
  it.each([
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
  ])("keeps the exact details and prices for $code", (expected) => {
    expect(AC_OFFERS.find((offer) => offer.code === expected.code)).toMatchObject(expected);
  });

  it("does not invent an end date for the promotion", () => {
    expect(PROMO).toEqual({ name: "Black Friday" });
    const offenders = siteSourceFiles().filter((file) => readFileSync(file, "utf8").includes("30 de novembro"));
    expect(offenders).toEqual([]);
  });
});
