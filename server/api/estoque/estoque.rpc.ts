import { Ids } from "../../../types";
import { TConnections } from "../../dal/connections";
import { estoqueModel } from "../estoque/estoque.model";

export function estoqueRpc(connections: TConnections) {
  const estoque = estoqueModel(connections);

  return {
    // INCREMENT
    async estoqueIncrement(args: { id: Ids; quantidade: number }) {
      return estoque.increment(args);
    },
  };
}
