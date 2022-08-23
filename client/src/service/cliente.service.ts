import { TClienteRecord } from "@er/server/src/model/plano/cliente.model";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TClienteRecord };

export const clienteService = {
  ...rpcFactory<TClienteRecord>("cliente"),

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
