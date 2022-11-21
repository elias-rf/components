import { TFieldClient } from "../../types";
import { TCliente } from "../../types/cliente.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { formatMoney } from "../../utils/format/format-money";
import { day } from "../lib/day";
import { crudFactory } from "../lib/http/crud.factory";

function getSchema({ inicio, fim }: { inicio: string; fim: string }) {
  const rsp: TFieldClient[] = [
    {
      name: "categoria",
      label: "Produto",
      primaryKey: true,
    },
  ];
  let dtInicio = day(inicio);
  const dtFim = day(fim).add(1, "month");
  while (dtInicio.format("YYYY-MM") !== dtFim.format("YYYY-MM")) {
    rsp.push({
      name: dtInicio.format("YYYY-MM"),
      type: "float",
      fieldClass: "text-right",
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}

export const clienteService = {
  ...crudFactory<TCliente>("cliente"),
  async vendaMensal(args: { inicio: string; fim: string; cliente: number }) {
    return fetcherRpc("vendaMensal", args);
  },

  async vendaMensalQuantidadeSchema({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }) {
    return getSchema({ inicio, fim });
  },
  async vendaMensalValorSchema({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }) {
    return getSchema({ inicio, fim });
  },
  async vendaMensalValorMedioSchema({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }) {
    return getSchema({ inicio, fim });
  },

  async vendaMensalQuantidade(args: {
    inicio: string;
    fim: string;
    cliente: number;
  }) {
    const data = await fetcherRpc("vendaMensal", args);
    const rsp: any = {};
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        quantidade,
      }: {
        anoMes: string;
        NmCategoria: string;
        quantidade: number;
        valor: number;
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {};
        rsp[NmCategoria][anoMes] = quantidade;
      }
    );
    const resp = [];
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] });
    }
    return resp;
  },

  async vendaMensalValor(args: {
    inicio: string;
    fim: string;
    cliente: number;
  }) {
    const data = await fetcherRpc("vendaMensal", args);
    const rsp: any = {};
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        valor,
      }: {
        anoMes: string;
        NmCategoria: string;
        quantidade: number;
        valor: number;
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {};
        rsp[NmCategoria][anoMes] = formatMoney(valor, 0);
      }
    );
    const resp = [];
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] });
    }
    return resp;
  },

  async vendaMensalValorMedio(args: {
    inicio: string;
    fim: string;
    cliente: number;
  }) {
    const data = await fetcherRpc("vendaMensal", args);
    const rsp: any = {};
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        valor,
        quantidade,
      }: {
        anoMes: string;
        NmCategoria: string;
        quantidade: number;
        valor: number;
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {};
        rsp[NmCategoria][anoMes] =
          quantidade > 0 ? formatMoney(valor / quantidade, 2) : "0,00";
      }
    );
    const resp = [];
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] });
    }
    return resp;
  },
};
