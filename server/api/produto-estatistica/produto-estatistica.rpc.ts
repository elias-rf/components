import { Ids } from "../../../types";
import { TProdutoEstatistica } from "../../../types/produto-estatistica.type";
import { TConnections } from "../../dal/connections";
import { produtoEstatisticaModel } from "../produto-estatistica/produto-estatistica.model";

export type TProdutoEstatisticaRpc = ReturnType<typeof produtoEstatisticaRpc>;

export function produtoEstatisticaRpc(connections: TConnections) {
  const produtoEstatistica = produtoEstatisticaModel(connections);

  return {
    // INCREMENT
    async produtoEstatisticaIncrement(args: {
      id: Ids;
      quantidade: number;
    }): Promise<TProdutoEstatistica> {
      return produtoEstatistica.increment(args);
    },
  };
}
