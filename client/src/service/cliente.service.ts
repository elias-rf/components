import { rpcFactory } from "../lib/http/rpc.factory";

export type ClienteRecord = {
  CdCliente: string;
  RzSocial: string;
  Cidade: string;
  Uf: string;
  CGC: string;
  CdVendedor: string;
  FgAtivo: string;
};

export const clienteService = {
  ...rpcFactory("cliente"),

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
