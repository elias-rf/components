import merge from "deepmerge";

// Notas de venda ao cliente
export const MestreNotaVendaFilial = {
  from: ["MestreNota"],
  where: [
    ["MestreNota.FgEstatistica", "S"],
    ["MestreNota.CdFilial", 2],
    ["MestreNota.Tipo", "<>", "C"],
  ],
};

// Notas com itens de venda ao cliente
export const ItemNotaVendaFilial = merge(MestreNotaVendaFilial, {
  from: ["ItemNota"],
  where: [
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
