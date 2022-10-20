import type { TConnections } from "../../dal/connections";
import { nfEntradaModel } from "../nf-entrada/nf-entrada.model";

export function nfEntradaRpc(connections: TConnections) {
  const nfEntrada = nfEntradaModel(connections);

  return {
    // TRANSFERENCIA CREATE
    async nfEntradaTransferenciaCreate(args: {
      controle: string[];
    }): Promise<boolean> {
      return nfEntrada.nfEntradaTransferenciaCreate(args);
    },
  };
}
