import type { KnexRequest } from "../lib/knex/knex-request";
import day from "../lib/day";
import round from "../utils/number/round";

function getSum(lista: any[], produto: string, data: day.Dayjs) {
  const dataInicial = data.add(-30, "day").format("YYYY-MM-DD");
  const dataFinal = data.format("YYYY-MM-DD");
  const produtoArray = lista.filter((item: any) => {
    return (
      item.NmCategoria === produto &&
      item.DtEmissao >= dataInicial &&
      item.DtEmissao <= dataFinal
    );
  });

  const sum = produtoArray.reduce(
    (accumulator: { quantidade: number; valor: number }, currentValue: any) => {
      accumulator.quantidade = accumulator.quantidade + currentValue.quantidade;
      accumulator.valor = accumulator.valor + currentValue.valor;
      return accumulator;
    },
    { quantidade: 0, valor: 0 }
  );
  return {
    dia: data.format("YYYY-MM-DD"),
    quantidade: sum.quantidade,
    fat: sum.valor,
    valor: round(sum.valor / sum.quantidade, 2), // valor médio
  };
}

const VendaDiariaService = (client: KnexRequest) => ({
  schema: async () => ({
    pk: ["NmCategoria", "DtEmissao"],
    fields: [
      {
        field: "DtEmissao",
        label: "Dia",
        type: "String",
      },
      {
        field: "NmCategoria",
        label: "Produto",
        type: "String",
      },
      {
        field: "qtd",
        label: "Quantidade",
        type: "Int",
      },
      {
        field: "vlr",
        label: "Valor",
        type: "Float",
      },
    ],
  }),

  async list(inicio: string, fim: string, uf: string[]) {
    const response = await client("plano", {
      from: [
        {
          raw: "MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF",
        },
      ],
      select: [
        "NmCategoria",
        "MestreNota.DtEmissao",
        {
          raw: "sum(ItemNota.Quantidade) as quantidade, sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then case mestrenota.cdcliente when 3158 then ItemNota.VlLiquido * -3 else ItemNota.VlLiquido * -1 end when 'S' then case mestrenota.cdcliente when 3158 then ItemNota.VlLiquido * 3 else ItemNota.VlLiquido end end)) as valor",
        },
      ],
      where: [
        ["MestreNota.FgEstatistica", "S"],
        ["MestreNota.CdFilial", 2],
        ["CadPro.FgEstatistica", "S"],
        ["CadVen.FgControle", "S"],
        ["ItemNota.ImprimeComponentes", "N"],
        ["ItemNota.Sequencia", ">", 0],
        ["MestreNota.Tipo", "<>", "C"],
        ["MestreNota.DtEmissao", ">=", inicio],
        ["MestreNota.DtEmissao", "<=", fim],
      ],
      whereRaw: [
        "ItemNota.CdFilial = MestreNota.CdFilial",
        "ItemNota.Serie = MestreNota.Serie",
        "ItemNota.Modelo = MestreNota.Modelo",
        "ItemNota.NumNota = MestreNota.NumNota",
        "CadPro.CdCategoria = CategPro.CdCategoria",
        "NatOpe.Nop = MestreNota.Nop",
        "CadVen.CdVendedor = MestreNota.CdVendedor",
        "CadCli.CdCliente = MestreNota.CdCliente",
        "CadPro.CdProduto = ItemNota.CdProduto",
        "cadcli.Cidade = cidadeserf.NmCidadeIBGE",
      ],
      whereIn: [["cidadeserf.uf", uf]],
      groupBy: ["NmCategoria", "MestreNota.DtEmissao"],
      orderBy: ["NmCategoria", ["MestreNota.DtEmissao", "desc"]],
    });
    const origem = response;
    const destino: any = {
      liteflex: [],
      metil: [],
      enlite: [],
      hilite: [],
      anel: [],
      enliteLiteflex: [],
    };

    for (let dia = 45; dia >= 0; dia--) {
      const diaFinal = day(fim).subtract(dia, "day");
      destino.liteflex.push(getSum(origem, "LITEFLEX", diaFinal));
      destino.metil.push(getSum(origem, "METILCELULOSE", diaFinal));
      destino.enlite.push(getSum(origem, "ENLITE", diaFinal));
      destino.hilite.push(getSum(origem, "HILITE", diaFinal));
      destino.anel.push(getSum(origem, "CORNEAL RING", diaFinal));
    }
    destino.enliteLiteflex = destino.liteflex.map((item: any, idx: number) => {
      return {
        dia: item.dia,
        quantidade: item.quantidade + destino.enlite[idx].quantidade,
        fat: item.fat + destino.enlite[idx].fat,
        valor: round(
          (item.fat + destino.enlite[idx].fat) /
            (item.quantidade + destino.enlite[idx].quantidade),
          2
        ), // valor médio
      };
    });

    return destino;
  },
});

export default VendaDiariaService;
