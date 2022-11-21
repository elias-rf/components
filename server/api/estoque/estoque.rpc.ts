import { TIds } from "../../../types";
import { TConnections } from "../../dal/connections";
import { estoqueModel } from "../estoque/estoque.model";

export type TEstoqueRpc = ReturnType<typeof estoqueRpc>;

export function estoqueRpc(connections: TConnections) {
  const estoque = estoqueModel(connections);

  return {
    // INCREMENT
    // prettier-ignore
    async estoqueIncrement({ id, quantidade }: { id: TIds; quantidade: number }) {
      return estoque.increment({ id, quantidade });
    },
  };
}
