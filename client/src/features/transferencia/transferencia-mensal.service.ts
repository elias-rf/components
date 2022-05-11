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

const TransferenciaMensalService = (client: KnexRequest): any => ({
  schema: async () => {
    return {
      pk: ["mes"],
      fields: [
        {
          field: "mes",
          label: "Mês",
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

  list: async (mes: string) => {
    if (isEmpty(mes)) {
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
          raw: "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria as categoria, Sum(ItemNota.Quantidade) AS quantidade",
        },
      ],
      orderByRaw: ["CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc"],
      groupByRaw: [
        "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria",
      ],
      whereRaw: [`CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>='${mes}'`],
      where: [
        ["MestreNota.CdFilial", 1],
        ["MestreNota.Tipo", "<>", "C"],
        ["MestreNota.NotadeComplemento", "N"],
        ["NatOpe.Nop", 5151],
      ],
    });
    if (isEmpty(response)) {
      return [];
    }

    const rsp: any[] = [];
    for (const item of response) {
      const { mes, categoria, quantidade } = item;
      if (!rsp.find((item) => item.mes === mes))
        rsp.push({ mes, categorias: [] });
      const itemDia = rsp.find((item) => item.mes === mes);
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

export default TransferenciaMensalService;
