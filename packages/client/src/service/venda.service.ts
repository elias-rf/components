import fetcherRpc from "@/lib/http/fetcher-rpc";
import { Id } from "../../../..";
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

const VendaService = () => ({
  schemaDiario: async () => ({
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

  async diario(inicio: string, fim: string, uf: string[]) {
    const response = await fetcherRpc.request("vendaDiario", {
      inicio,
      fim,
      uf,
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

  schemaMensal: async () => ({
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

  mensal: async (inicio: string, fim: string, CdCliente: Id) => {
    return fetcherRpc.request("vendaMensal", { inicio, fim, id: CdCliente });
  },
});

export default VendaService;
