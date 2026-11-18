import { describe, expect, it } from "vitest";
import { BUSINESS, whatsappLink } from "@/lib/site";
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
