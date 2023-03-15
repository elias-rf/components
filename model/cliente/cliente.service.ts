import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TClienteRpc } from "./cliente.type";
//#region import
import { TField } from "../../types/model";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { day } from "../../utils/date/day";
//#endregion

export const clienteService = deepmerge(rpcFactory("cliente"), {
  //#region service
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
      const rsp = cache.fetch({
        key: "clienteVendaMensalQuantidade",
        callback: fetcherRpc.query,
        args: ["clienteVendaMensalQuantidade", args],
      });
      return rsp;
    },

    async vendaMensalValor(args) {
      return cache.fetch({
        key: "clienteVendaMensalValor",
        callback: fetcherRpc.query,
        args: ["clienteVendaMensalValor", args],
      });
    },

    async vendaMensalValorMedio(args) {
      return cache.fetch({
        key: "clienteVendaMensalValorMedio",
        callback: fetcherRpc.query,
        args: ["clienteVendaMensalValorMedio", args],
      });
    },
  },
  //#endregion
} as TClienteRpc);

//#region other
function getSchema({ inicio, fim }: { inicio: string; fim: string }) {
  const rsp: TField[] = [
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
      typeField: "float",
      fieldClass: "text-right",
    });
    dtInicio = dtInicio.add(1, "month");
  }
  return rsp;
}
//#endregion
