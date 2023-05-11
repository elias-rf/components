import { zsr } from "@/utils/zod/z-refine";
import { zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { z } from "zod";
import { TNfSaidaFvModel } from "../../nf-saida-fv/nf-saida-fv.model";
import { TNfSaida, TNfVendaAnalitico } from "../nf-saida.type";

export function vendaAnalitico({
  connection,
  nfSaidaFvModel,
}: {
  connection: Knex;
  nfSaidaFvModel: TNfSaidaFvModel;
}): TNfVendaAnalitico {
  return async ({ inicio, fim }) => {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
    const qryPlano = connection("MestreNota")
      .select(connection.raw("'VT' as origem"))
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
        "MestreNota.CdFilial": 2,
        "CadVen.FgControle": "S",
        "MestreNota.FgEstatistica": "S",
        "CadPro.FgEstatistica": "S",
        "ItemNota.ImprimeComponentes": "N",
      })
      .where("ItemNota.Sequencia", "<>", 0)
      .where("MestreNota.cdcliente", "<>", 3158)
      .whereBetween("MestreNota.DtEmissao", [inicio, fim])
      .whereIn("MestreNota.Tipo", ["E", "S"]);
    const qryFullvision = nfSaidaFvModel.query.vendaAnalitico({
      inicio,
      fim,
    });
    const resp: TNfSaida[][] = await Promise.all([qryPlano, qryFullvision]);
    return resp[0].concat(resp[1]);
  };
}
