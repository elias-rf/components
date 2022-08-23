import { Id } from "@er/types";
import { round } from "@er/utils/src/round";
import { day } from "../lib/day";
import { fetcherRpc } from "../lib/http/fetcher-rpc";

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

const vendaService = {
  async schemaDiario() {
    return fetcherRpc("vendaDiarioSchema");
  },

  async diario(inicio: string, fim: string, uf: string[]) {
    const response = await fetcherRpc("vendaDiario", {
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

  async schemaMensal() {
    return fetcherRpc("vendaMensalSchema");
  },

  async mensal(inicio: string, fim: string, CdCliente: Id) {
    return fetcherRpc("vendaMensal", { inicio, fim, id: CdCliente });
  },

  async analitico(inicio: string, fim: string) {
    return fetcherRpc("vendaAnalitico", { inicio, fim });
  },
};

export default vendaService;
