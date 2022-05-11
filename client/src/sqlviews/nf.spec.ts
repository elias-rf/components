import { it, describe, expect } from "vitest";
import { MestreNotaVendaFilial, ItemNotaVendaFilial } from "./nf";

it("deve receber 1 array e 1 valor", () => {
  expect(MestreNotaVendaFilial).toEqual({
    from: ["MestreNota"],
    where: [
      ["MestreNota.FgEstatistica", "S"],
      ["MestreNota.CdFilial", 2],
      ["MestreNota.Tipo", "<>", "C"],
    ],
  });
});

it("deve receber 2 valores", () => {
  expect(ItemNotaVendaFilial).toEqual({
    from: ["MestreNota", "ItemNota"],
    where: [
      ["MestreNota.FgEstatistica", "S"],
      ["MestreNota.CdFilial", 2],
      ["MestreNota.Tipo", "<>", "C"],
      ["ItemNota.ImprimeComponentes", "N"],
      ["ItemNota.Sequencia", ">", 0],
    ],
    whereRaw: [
      "ItemNota.CdFilial = MestreNota.CdFilial",
      "ItemNota.Serie = MestreNota.Serie",
      "ItemNota.Modelo = MestreNota.Modelo",
      "ItemNota.NumNota = MestreNota.NumNota",
    ],
  });
});
