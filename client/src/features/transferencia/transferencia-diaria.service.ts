import isEmpty from "../../utils/is/is-empty";
import merge from "deepmerge";
import { KnexRequest } from "@/lib/knex/knex-request";

const fields = [
  "LITEFLEX",
  "HILITE",
  "ENLITE",
  "METILCELULOSE",
  "CORNEAL RING",
  "ANEL CAPSULAR",
];

const TransferenciaDiariaService = (client: KnexRequest): any => ({
  schema: async () => {
    return {
      pk: ["dia"],
      fields: [
        {
          field: "dia",
          label: "Dia",
          labelClass: "text-center",
          fieldClass: "text-left",
          type: "string",
        },
        {
          field: "LITEFLEX",
          label: "LiteFlex",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "HILITE",
          label: "HiLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ENLITE",
          label: "EnLite",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "METILCELULOSE",
          label: "Metil",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "CORNEAL RING",
          label: "Corneal Ring",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
        {
          field: "ANEL CAPSULAR",
          label: "Anel Capsular",
          labelClass: "text-right",
          fieldClass: "text-right",
        },
      ],
    };
  },

  list: async (inicio: string, fim: string) => {
    if (isEmpty(inicio) || isEmpty(fim)) {
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
          raw: "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria as categoria, Sum(ItemNota.Quantidade) AS quantidade",
        },
      ],
      where: [
        ["MestreNota.CdFilial", 1],
        ["MestreNota.Tipo", "<>", "C"],
        ["MestreNota.NotadeComplemento", "N"],
        ["NatOpe.Nop", 5151],
      ],
      whereBetween: [["MestreNota.DtEmissao", [inicio, fim]]],
      orderBy: [["MestreNota.DtEmissao", "desc"]],
      groupBy: ["MestreNota.DtEmissao", "CategPro.NmCategoria"],
    });

    const rsp: any[] = [];
    for (const item of response) {
      const { dia, categoria, quantidade } = item;
      if (!rsp.find((item: any) => item.dia === dia))
        rsp.push({ dia, categorias: [] });
      const itemDia = rsp.find((item: any) => item.dia === dia);
      itemDia.categorias.push({ categoria, quantidade });
    }

    const data: any = merge([], rsp);
    const rsp2 = data.map((item: any) => {
      fields.forEach((cat) => {
        const rec = item.categorias?.find((ct: any) => ct.categoria === cat);
        item[cat] = rec?.quantidade || 0;
      });
      delete item.categorias;
      return item;
    });

    return rsp2;
  },
});
export default TransferenciaDiariaService;
