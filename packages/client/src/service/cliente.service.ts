import { OrderBy, Where } from "../..";
import { Id } from "../../../..";
import fetcherRpc from "../lib/http/fetcher-rpc";

export type ClienteRecord = {
  CdCliente: string;
  RzSocial: string;
  Cidade: string;
  Uf: string;
  CGC: string;
  CdVendedor: string;
  FgAtivo: string;
};

export default function ClienteService() {
  return {
    async schema() {
      return fetcherRpc.request("clienteSchema", {});
    },

    async list(where?: Where[], orderBy?: OrderBy[]): Promise<ClienteRecord[]> {
      return fetcherRpc.request("clienteList", { where, orderBy });
    },

    async read(id: Id): Promise<ClienteRecord> {
      return fetcherRpc.request("clienteRead", { id });
    },

    async create(rec: ClienteRecord) {
      return fetcherRpc.request("clienteCreate", { rec });
    },

    async update(id: Id, rec: ClienteRecord) {
      return fetcherRpc.request("clienteUpdate", { id, rec });
    },

    async del(id: Id) {
      return fetcherRpc.request("clienteDel", { id });
    },

    clear() {
      return {
        CdCliente: "",
        RzSocial: "",
        Cidade: "",
        Uf: "",
        CGC: "",
        CdVendedor: "",
        FgAtivo: "",
      };
    },
  };
}
