import { describe, expect, it } from "vitest";
import { BUSINESS, whatsappLink } from "@/lib/site";

describe("WhatsApp contacts", () => {
  it("uses both business WhatsApp numbers with Brazil + 81 prefix", () => {
    expect(BUSINESS.phones.map((p) => p.number)).toEqual(["5581982977770", "5581985163998"]);
  });

  it("encodes the pre-filled message into the wa.me link", () => {
    expect(whatsappLink("Olá! Orçamento")).toBe("https://wa.me/5581982977770?text=Ol%C3%A1!%20Or%C3%A7amento");
  });
});
