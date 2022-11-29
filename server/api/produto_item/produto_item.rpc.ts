import { TConnections, TIds, TSelect } from "../../../types";
import { produtoItemModel } from "./produto_item.model";

export type TProdutoItemRpc = ReturnType<typeof produtoItemRpc>;

export function produtoItemRpc(connections: TConnections) {
  const produtoItem = produtoItemModel(connections);

  return {
    mutation: {
      // PRODUTO PLANO
      async produtoItemPlano({ id, select }: { id: TIds; select?: TSelect }) {
        return produtoItem.produtoPlano({ id, select });
      },
    },
  };
}
