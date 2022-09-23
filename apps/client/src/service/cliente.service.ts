import { TCliente } from "@er/server/src/api/cliente/cliente.type";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TCliente };

export const clienteService = {
  ...rpcFactory<TCliente>("cliente"),

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
