import type { KnexRequest } from "../lib/knex/knex-request";

const VendaMensalService = (client: KnexRequest) => ({
  schema: async () => ({
    pk: ["anoMes", "CdCliente"],
    fields: [
      {
        field: "anoMes",
        label: "Mês",
        type: "ID",
      },
      {
        field: "CdCliente",
        label: "Cód. Cliente",
        type: "ID",
      },
      {
        field: "cliente",
        label: "Cliente",
        type: "Cliente",
      },
      {
        field: "NmCategoria",
        label: "Produto",
        type: "String",
      },
      {
        field: "quantidade",
        label: "Quantidade",
        type: "Int",
      },
      {
        field: "valor",
        label: "Valor",
        type: "Float",
      },
    ],
  }),

  list: async (inicio: string, fim: string, [CdCliente]: string[]) => {
    const response = await client("plano", {
      from: [{ raw: "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CategPro" }],
      select: [
        { NmCategoria: "CategPro.NmCategoria" },
        { CdCliente: "MestreNota.CdCliente" },
        {
          raw: "CONVERT(char(7), dbo.MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor",
        },
      ],
      where: [
        ["MestreNota.CdCliente", CdCliente],
        ["MestreNota.DtEmissao", ">=", inicio],
        ["MestreNota.DtEmissao", "<=", fim],
      ],
      whereRaw: [
        "MestreNota.FgEstatistica = 'S' AND MestreNota.CdFilial = 2 AND ItemNota.CdFilial = MestreNota.CdFilial AND ItemNota.Serie = MestreNota.Serie AND ItemNota.Modelo = MestreNota.Modelo AND ItemNota.NumNota = MestreNota.NumNota AND CadPro.CdCategoria = CategPro.CdCategoria AND ItemNota.Sequencia > 0 AND NatOpe.Nop = MestreNota.Nop AND CadVen.CdVendedor = MestreNota.CdVendedor AND CadPro.CdProduto = ItemNota.CdProduto AND CadPro.FgEstatistica = 'S' AND CadVen.FgControle = 'S' AND MestreNota.Tipo <> 'C' AND ItemNota.ImprimeComponentes = 'N'",
      ],
      groupByRaw: [
        "CdCliente, NmCategoria, CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
      ],
      orderByRaw: ["CONVERT(CHAR(7),[mestrenota].[DtEmissao],126) DESC"],
    });
    return response;
  },
});

export default VendaMensalService;
