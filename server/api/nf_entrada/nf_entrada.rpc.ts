import type { TConnections } from "../../dal/connections";
import { nfEntradaModel } from "./nf_entrada.model";

export type TNfEntradaRpc = ReturnType<typeof nfEntradaRpc>;

export function nfEntradaRpc(connections: TConnections) {
  const nfEntrada = nfEntradaModel(connections);

  return {
    /***  TRANSFERENCIA CREATE ***/
    async nfEntradaTransferenciaCreate({
      controles,
    }: {
      controles: string[];
    }): Promise<boolean> {
      return nfEntrada.nfEntradaTransferenciaCreate({ controles });
    },
  };
}
