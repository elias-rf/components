import { TFieldClient } from "../../types";
import { TClienteRpc } from "../../types/cliente.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { deepmerge } from "../../utils/object/deepmerge";
import { day } from "../lib/day";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "cliente";

export const clienteService: TClienteRpc = deepmerge(
  rpcFactory<TClienteRpc>(SERVICE),
  {
    query: {
      async vendaMensalQuantidadeSchema(args) {
        return getSchema(args);
      },

      async vendaMensalValorSchema(args) {
        return getSchema(args);
      },

      async vendaMensalValorMedioSchema(args) {
        return getSchema(args);
      },

      async vendaMensalQuantidade(args) {
        return cache.fetch({
          key: "cliente.nfSaidaVendaMensal",
          callback: fetcherRpc.query,
          args: ["clienteVendaMensalQuantidade", args],
          debug: true,
        });
      },

      async vendaMensalValor(args) {
        return cache.fetch({
          key: "cliente.nfSaidaVendaMensal",
          callback: fetcherRpc.query,
          args: ["clienteVendaMensalValor", args],
          debug: true,
        });
      },

      async vendaMensalValorMedio(args) {
        return cache.fetch({
          key: "cliente.nfSaidaVendaMensal",
          callback: fetcherRpc.query,
          args: ["clienteVendaMensalValorMedio", args],
          debug: true,
        });
      },
    },
  } as TClienteRpc
);

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
