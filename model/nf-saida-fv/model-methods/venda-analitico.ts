import { TConnection } from "../../../types";

export function vendaAnalitico({ connection }: { connection: TConnection }) {
  return async ({ inicio, fim }: { inicio: string; fim: string }) => {
    const knex = connection;
    return knex("MestreNota")
      .select(knex.raw("'FV' as origem"))
      .select([
        "CategPro.NmCategoria",
        "MestreNota.DtEmissao",
        "MestreNota.NumNota",
        "MestreNota.Serie",
        "MestreNota.Tipo",
        "ItemNota.CdProduto",
        "ItemNota.Quantidade",
        "ItemNota.VlTotal",
        "CadPro.Descricao",
        "MestreNota.CdVendedor",
        "CadVen.NmVendedor",
        "CidadesERF.uf",
      ])
      .join("ItemNota", function () {
        this.on("ItemNota.CdFilial", "=", "MestreNota.CdFilial")
          .andOn("ItemNota.NumNota", "=", "MestreNota.NumNota")
          .andOn("ItemNota.Serie", "=", "MestreNota.Serie")
          .andOn("ItemNota.Modelo", "=", "MestreNota.Modelo");
      })
      .join("CadVen", "MestreNota.CdVendedor", "CadVen.CdVendedor")
      .join("CadCli", "MestreNota.CdCliente", "CadCli.CdCliente")
      .join("cidadesErf", "CadCli.Cidade", "cidadesErf.NmCidadeIBGE")
      .join("CadPro", "ItemNota.CdProduto", "CadPro.CdProduto")
      .join("CategPro", "CadPro.CdCategoria", "CategPro.CdCategoria")
      .where({
        "MestreNota.CdFilial": 1,
        "CadVen.FgControle": "S",
        "MestreNota.FgEstatistica": "S",
        "CadPro.FgEstatistica": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .where("ItemNota.Sequencia", "<>", 0)
      .where("mestrenota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereIn("MestreNota.Tipo", ["E", "S"]);
  };
}
