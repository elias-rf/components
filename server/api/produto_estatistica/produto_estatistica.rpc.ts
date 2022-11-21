import { TIds } from "../../../types";
import { TProdutoEstatistica } from "../../../types/produto-estatistica.type";
import { TConnections } from "../../dal/connections";
import { produtoEstatisticaModel } from "./produto_estatistica.model";

export type TProdutoEstatisticaRpc = ReturnType<typeof produtoEstatisticaRpc>;

export function produtoEstatisticaRpc(connections: TConnections) {
  const produtoEstatistica = produtoEstatisticaModel(connections);

  return {
    // INCREMENT
    async produtoEstatisticaIncrement({
      id,
      quantidade,
    }: {
      id: TIds;
      quantidade: number;
    }): Promise<TProdutoEstatistica> {
      return produtoEstatistica.increment({ id, quantidade });
    },
  };
}
