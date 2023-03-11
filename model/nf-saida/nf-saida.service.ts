import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TNfSaidaRpc } from "./nf-saida.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { day } from "../../utils/date/day";
import { isEmpty } from "../../utils/identify/is_empty";
import { round } from "../../utils/number/round";
//#endregion

export const nfSaidaService = deepmerge(rpcFactory("nfSaida"), {
  //#region service
  query: {
    // TRANSFERENCIA DIARIO
    async transferenciaDiario(args): Promise<any[]> {
      if (isEmpty(args.inicio) || isEmpty(args.fim)) {
        return [];
      }
      const response: any = await fetcherRpc.query(
        "nfSaidaTransferenciaDiario",
        args
      );
      return response;
    },
    async transferenciaDiarioSchema() {
      return fetcherRpc.query("nfSaidaTransferenciaDiarioSchema");
    },

    // TRANSFERENCIA MENSAL
    async transferenciaMensal(args) {
      if (isEmpty(args.mes)) {
        return [];
      }
      const response: any = await fetcherRpc.query(
        "nfSaidaTransferenciaMensal",
        args
      );

      if (isEmpty(response)) {
        return [];
      }

      return response;
    },
    async transferenciaMensalSchema() {
      return fetcherRpc.query("nfSaidaTransferenciaMensalSchema");
    },

    // TRANSFERENCIA MODELO
    async transferenciaModeloSchema() {
      return fetcherRpc.query("nfSaidaTransferenciaModeloSchema");
    },
    async transferenciaModelo(args) {
      if (isEmpty(args.data)) {
        return [];
      }
      return fetcherRpc.query("nfSaidaTransferenciaModelo", args);
    },

    // VENDA DIARIO
    async vendaDiarioSchema() {
      return fetcherRpc.query("nfSaidaVendaDiarioSchema");
    },
    async vendaDiario(args) {
      const response = await fetcherRpc.query("nfSaidaVendaDiario", args);

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
        const diaFinal = day(args.fim).subtract(dia, "day");
        destino.liteflex.push(getSum(origem, "LITEFLEX", diaFinal));
        destino.metil.push(getSum(origem, "METILCELULOSE", diaFinal));
        destino.enlite.push(getSum(origem, "ENLITE", diaFinal));
        destino.hilite.push(getSum(origem, "HILITE", diaFinal));
        destino.anel.push(getSum(origem, "CORNEAL RING", diaFinal));
      }
      destino.enliteLiteflex = destino.liteflex.map(
        (item: any, idx: number) => {
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
        }
      );

      return destino;
    },

    // VENDA MENSAL
    async vendaMensalClienteSchema() {
      return fetcherRpc.query("nfSaidaVendaMensalSchema");
    },
    async vendaMensalCliente(args) {
      return fetcherRpc.query("nfSaidaVendaMensal", args);
    },

    // VENDA ANALITICO
    async vendaAnaliticoSchema() {
      return fetcherRpc.query("nfSaidaVendaAnaliticoSchema");
    },
    async vendaAnalitico(args) {
      return fetcherRpc.query("nfSaidaVendaAnalitico", args);
    },
  },
  //#endregion
} as TNfSaidaRpc);

//#region other
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
//#endregion
