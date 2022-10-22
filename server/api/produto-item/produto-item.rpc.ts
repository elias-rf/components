import { Ids, Select } from "../../../types";
import { TConnections } from "../../dal/connections";
import { produtoItemModel } from "./produto-item.model";

export type TProdutoItemRpc = ReturnType<typeof produtoItemRpc>;

export function produtoItemRpc(connections: TConnections) {
  const produtoItem = produtoItemModel(connections);

  return {
    // PRODUTO PLANO
    async produtoItemPlano(args: { id: Ids; select?: Select }) {
      return produtoItem.produtoPlano(args);
    },
  };
}
