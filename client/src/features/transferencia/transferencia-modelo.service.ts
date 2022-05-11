import isEmpty from "../../utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

const TransferenciaModeloService = (client: KnexRequest): any => ({
  schema: async () => {
    return {
      pk: ["modelo"],
      fields: [
        {
          field: "modelo",
          label: "Modelo",
          type: "ID",
        },
        {
          field: "quantidade",
          label: "Quantidade",
          type: "String",
        },
      ],
    };
  },

  list: async (dia: string) => {
    if (isEmpty(dia)) {
      return [];
    }
    const response = await client("plano", {
      from: [
        {
          raw: "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)",
        },
      ],
      select: [
        {
          raw: "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade",
        },
      ],
      orderBy: ["CadPro.Descricao"],
      groupBy: ["CadPro.Descricao"],
      where: [
        ["MestreNota.CdFilial", 1],
        ["MestreNota.Tipo", "<>", "C"],
        ["MestreNota.NotadeComplemento", "N"],
        ["NatOpe.Nop", 5151],
        ["MestreNota.DtEmissao", dia],
      ],
    });
    return response;
  },
});

export default TransferenciaModeloService;
